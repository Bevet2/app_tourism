from __future__ import annotations

import argparse
import base64
import binascii
import json
import os
import sys
import uuid
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, urlparse


ROOT_DIR = Path(__file__).resolve().parent
DATA_DIR = ROOT_DIR / "data"
ATTACHMENTS_DIR = DATA_DIR / "invoice_attachments"
STATE_FILE = DATA_DIR / "app_state.json"
DEFAULT_HOST = "127.0.0.1"
DEFAULT_PORT = 4173


class ApiError(Exception):
    def __init__(self, status: int, message: str) -> None:
        super().__init__(message)
        self.status = status
        self.message = message


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def json_clone(value: Any) -> Any:
    return json.loads(json.dumps(value))


def as_text(value: Any) -> str:
    return value.strip() if isinstance(value, str) else ""


def as_list(value: Any) -> list[Any]:
    return value if isinstance(value, list) else []


def as_dict(value: Any) -> dict[str, Any]:
    return value if isinstance(value, dict) else {}


def parse_date_value(value: Any) -> str | None:
    if isinstance(value, datetime):
        return value.date().isoformat()
    if hasattr(value, "isoformat"):
        try:
            return value.isoformat()
        except TypeError:
            return None
    text = as_text(value)
    return text or None


def parse_numeric(value: Any, default: float = 0.0) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def safe_attachment_name(file_name: str) -> str:
    raw_name = Path(as_text(file_name) or "facture").name
    return raw_name or "facture"


def attachment_url(attachment_id: str) -> str:
    return f"/api/invoice-attachments/{attachment_id}"


def build_public_attachment(meta: dict[str, Any]) -> dict[str, Any]:
    attachment_id = as_text(meta.get("id"))
    return {
        "id": attachment_id,
        "name": as_text(meta.get("name") or meta.get("file_name") or "fichier"),
        "type": as_text(meta.get("type") or meta.get("content_type") or "application/octet-stream"),
        "size": max(0, int(meta.get("size") or meta.get("file_size_bytes") or 0)),
        "updatedAt": as_text(meta.get("updatedAt") or meta.get("updated_at") or utc_now_iso()),
        "url": attachment_url(attachment_id),
    }


def json_response(handler: SimpleHTTPRequestHandler, payload: Any, status: int = HTTPStatus.OK) -> None:
    body = json.dumps(payload, ensure_ascii=True).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.send_header("Cache-Control", "no-store")
    handler.end_headers()
    handler.wfile.write(body)


def read_json_body(handler: SimpleHTTPRequestHandler) -> Any:
    raw_length = handler.headers.get("Content-Length", "0")
    try:
        content_length = int(raw_length)
    except ValueError as error:
        raise ApiError(HTTPStatus.BAD_REQUEST, "Longueur de corps invalide.") from error

    raw_body = handler.rfile.read(max(0, content_length))
    if not raw_body:
        return {}

    try:
        return json.loads(raw_body.decode("utf-8"))
    except json.JSONDecodeError as error:
        raise ApiError(HTTPStatus.BAD_REQUEST, "Corps JSON invalide.") from error


class JsonDataStore:
    backend_name = "json"

    def __init__(self, state_file: Path, attachments_dir: Path) -> None:
        self.state_file = state_file
        self.attachments_dir = attachments_dir
        self.state_file.parent.mkdir(parents=True, exist_ok=True)
        self.attachments_dir.mkdir(parents=True, exist_ok=True)

    def load_state(self) -> dict[str, list[dict[str, Any]]]:
        state = self._read_state()
        invoices = []
        attachments = as_dict(state.get("attachments"))
        for invoice in as_list(state.get("invoices")):
            invoice_copy = json_clone(invoice)
            attachment = as_dict(invoice_copy.get("attachment"))
            attachment_id = as_text(attachment.get("id"))
            attachment_record = as_dict(attachments.get(attachment_id))
            invoice_copy["attachment"] = (
                build_public_attachment(attachment_record)
                if attachment_record and as_text(attachment_record.get("invoiceId")) == as_text(invoice_copy.get("id"))
                else None
            )
            invoices.append(invoice_copy)

        return {
            "collaborators": json_clone(as_list(state.get("collaborators"))),
            "vehicles": json_clone(as_list(state.get("vehicles"))),
            "invoices": invoices,
        }

    def save_collection(self, collection_name: str, items: list[dict[str, Any]]) -> list[dict[str, Any]]:
        state = self._read_state()
        normalized_items = json_clone(as_list(items))

        if collection_name == "invoices":
            attachments = as_dict(state.get("attachments"))
            valid_invoice_ids = {as_text(invoice.get("id")) for invoice in normalized_items if as_text(invoice.get("id"))}
            for attachment_id, attachment_meta in list(attachments.items()):
                if as_text(attachment_meta.get("invoiceId")) not in valid_invoice_ids:
                    self._delete_attachment_file(attachment_meta)
                    attachments.pop(attachment_id, None)

            for invoice in normalized_items:
                attachment = as_dict(invoice.get("attachment"))
                attachment_id = as_text(attachment.get("id"))
                attachment_meta = as_dict(attachments.get(attachment_id))
                if attachment_meta and as_text(attachment_meta.get("invoiceId")) == as_text(invoice.get("id")):
                    invoice["attachment"] = build_public_attachment(attachment_meta)
                else:
                    invoice["attachment"] = None

        state[collection_name] = normalized_items
        self._write_state(state)
        return self.load_state()[collection_name]

    def save_attachment(
        self,
        invoice_id: str,
        file_name: str,
        content_type: str,
        payload_base64: str,
        existing_attachment_id: str = "",
    ) -> dict[str, Any]:
        normalized_invoice_id = as_text(invoice_id)
        if not normalized_invoice_id:
            raise ApiError(HTTPStatus.BAD_REQUEST, "Identifiant de facture manquant pour la piece jointe.")

        try:
            payload = base64.b64decode(payload_base64.encode("utf-8"), validate=True)
        except (binascii.Error, ValueError) as error:
            raise ApiError(HTTPStatus.BAD_REQUEST, "Fichier joint invalide.") from error

        state = self._read_state()
        attachments = as_dict(state.get("attachments"))
        existing_record = None
        for attachment_meta in attachments.values():
            if as_text(attachment_meta.get("invoiceId")) == normalized_invoice_id:
                existing_record = attachment_meta
                break

        attachment_id = (
            as_text(existing_attachment_id)
            or as_text(existing_record.get("id") if existing_record else "")
            or f"invoice-attachment-{uuid.uuid4().hex}"
        )
        attachment_name = safe_attachment_name(file_name)
        extension = Path(attachment_name).suffix or ".bin"
        stored_name = f"{attachment_id}{extension}"
        stored_path = self.attachments_dir / stored_name
        stored_path.write_bytes(payload)

        if existing_record and as_text(existing_record.get("storedName")) != stored_name:
            self._delete_attachment_file(existing_record)

        attachment_meta = {
            "id": attachment_id,
            "invoiceId": normalized_invoice_id,
            "name": attachment_name,
            "type": as_text(content_type) or "application/octet-stream",
            "size": len(payload),
            "updatedAt": utc_now_iso(),
            "storedName": stored_name,
        }
        attachments[attachment_id] = attachment_meta

        for invoice in as_list(state.get("invoices")):
            if as_text(invoice.get("id")) == normalized_invoice_id:
                invoice["attachment"] = build_public_attachment(attachment_meta)

        self._write_state(state)
        return build_public_attachment(attachment_meta)

    def delete_attachment_for_invoice(self, invoice_id: str) -> None:
        normalized_invoice_id = as_text(invoice_id)
        if not normalized_invoice_id:
            return

        state = self._read_state()
        attachments = as_dict(state.get("attachments"))
        attachment_ids_to_remove = [
            attachment_id
            for attachment_id, attachment_meta in attachments.items()
            if as_text(attachment_meta.get("invoiceId")) == normalized_invoice_id
        ]

        for attachment_id in attachment_ids_to_remove:
            attachment_meta = as_dict(attachments.get(attachment_id))
            self._delete_attachment_file(attachment_meta)
            attachments.pop(attachment_id, None)

        for invoice in as_list(state.get("invoices")):
            if as_text(invoice.get("id")) == normalized_invoice_id:
                invoice["attachment"] = None

        self._write_state(state)

    def get_attachment(self, attachment_id: str) -> tuple[dict[str, Any], bytes] | None:
        normalized_attachment_id = as_text(attachment_id)
        if not normalized_attachment_id:
            return None

        state = self._read_state()
        attachment_meta = as_dict(state.get("attachments", {}).get(normalized_attachment_id))
        if not attachment_meta:
            return None

        stored_name = as_text(attachment_meta.get("storedName"))
        stored_path = self.attachments_dir / stored_name
        if not stored_path.exists():
            return None

        return build_public_attachment(attachment_meta), stored_path.read_bytes()

    def _default_state(self) -> dict[str, Any]:
        return {
            "version": 1,
            "updatedAt": utc_now_iso(),
            "collaborators": [],
            "vehicles": [],
            "invoices": [],
            "attachments": {},
        }

    def _read_state(self) -> dict[str, Any]:
        if not self.state_file.exists():
            return self._default_state()

        try:
            raw_state = json.loads(self.state_file.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return self._default_state()

        state = self._default_state()
        if isinstance(raw_state, dict):
            state.update(raw_state)

        if not isinstance(state.get("attachments"), dict):
            state["attachments"] = {}

        for key in ("collaborators", "vehicles", "invoices"):
            if not isinstance(state.get(key), list):
                state[key] = []

        return state

    def _write_state(self, state: dict[str, Any]) -> None:
        payload = self._default_state()
        payload.update(state)
        payload["updatedAt"] = utc_now_iso()
        tmp_path = self.state_file.with_suffix(".tmp")
        tmp_path.write_text(json.dumps(payload, ensure_ascii=True, indent=2), encoding="utf-8")
        tmp_path.replace(self.state_file)

    def _delete_attachment_file(self, attachment_meta: dict[str, Any]) -> None:
        stored_name = as_text(attachment_meta.get("storedName"))
        if not stored_name:
            return

        stored_path = self.attachments_dir / stored_name
        if stored_path.exists():
            stored_path.unlink()


class PostgresDataStore:
    backend_name = "postgres"

    def __init__(self, database_url: str, company_name: str) -> None:
        try:
            import psycopg
            from psycopg.rows import dict_row
        except ImportError as error:
            raise RuntimeError(
                "psycopg n'est pas installe. Lancez `pip install psycopg[binary]` pour activer PostgreSQL."
            ) from error

        self.psycopg = psycopg
        self.dict_row = dict_row
        self.database_url = database_url
        self.company_name = company_name
        self.company_id = uuid.uuid5(uuid.NAMESPACE_URL, f"route-pilote-company:{company_name}")
        self._validate_schema()

    def load_state(self) -> dict[str, list[dict[str, Any]]]:
        with self._connect() as connection:
            self._ensure_company(connection)
            collaborators = self._load_collaborators(connection)
            vehicles = self._load_vehicles(connection)
            invoices = self._load_invoices(connection)
            connection.commit()

        return {
            "collaborators": collaborators,
            "vehicles": vehicles,
            "invoices": invoices,
        }

    def save_collection(self, collection_name: str, items: list[dict[str, Any]]) -> list[dict[str, Any]]:
        with self._connect() as connection:
            self._ensure_company(connection)
            if collection_name == "collaborators":
                self._save_collaborators(connection, items)
            elif collection_name == "vehicles":
                self._save_vehicles(connection, items)
            elif collection_name == "invoices":
                self._save_invoices(connection, items)
            else:
                raise ApiError(HTTPStatus.BAD_REQUEST, "Collection inconnue.")
            connection.commit()

        return self.load_state()[collection_name]

    def save_attachment(
        self,
        invoice_id: str,
        file_name: str,
        content_type: str,
        payload_base64: str,
        existing_attachment_id: str = "",
    ) -> dict[str, Any]:
        normalized_invoice_id = self._external_key(invoice_id, "invoice")
        try:
            payload = base64.b64decode(payload_base64.encode("utf-8"), validate=True)
        except (binascii.Error, ValueError) as error:
            raise ApiError(HTTPStatus.BAD_REQUEST, "Fichier joint invalide.") from error

        internal_invoice_id = self._record_uuid("invoice", normalized_invoice_id)
        attachment_uuid = self._uuid_or_default(existing_attachment_id, "invoice-attachment", normalized_invoice_id)

        with self._connect() as connection:
            self._ensure_company(connection)
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    INSERT INTO invoices (
                      id, company_id, external_key, invoice_number, status, document_type, source_label,
                      payment_status, external_flow, payment_method
                    )
                    VALUES (%s, %s, %s, %s, 'draft', 'external', 'Facture externe', 'unpaid', 'payable', 'wire')
                    ON CONFLICT (id) DO NOTHING
                    """,
                    (
                        internal_invoice_id,
                        self.company_id,
                        normalized_invoice_id,
                        normalized_invoice_id,
                    ),
                )
                cursor.execute(
                    """
                    INSERT INTO invoice_attachments (
                      id, invoice_id, file_name, content_type, file_size_bytes, file_payload, uploaded_at, updated_at
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, NOW(), NOW())
                    ON CONFLICT (invoice_id) DO UPDATE SET
                      id = EXCLUDED.id,
                      file_name = EXCLUDED.file_name,
                      content_type = EXCLUDED.content_type,
                      file_size_bytes = EXCLUDED.file_size_bytes,
                      file_payload = EXCLUDED.file_payload,
                      updated_at = NOW()
                    RETURNING id, file_name, content_type, file_size_bytes, updated_at
                    """,
                    (
                        attachment_uuid,
                        internal_invoice_id,
                        safe_attachment_name(file_name),
                        as_text(content_type) or "application/octet-stream",
                        len(payload),
                        payload,
                    ),
                )
                row = cursor.fetchone() or {}
            connection.commit()

        return build_public_attachment(
            {
                "id": str(row.get("id") or attachment_uuid),
                "file_name": row.get("file_name") or file_name,
                "content_type": row.get("content_type") or content_type,
                "file_size_bytes": row.get("file_size_bytes") or len(payload),
                "updated_at": row.get("updated_at") or utc_now_iso(),
            }
        )

    def delete_attachment_for_invoice(self, invoice_id: str) -> None:
        normalized_invoice_id = self._external_key(invoice_id, "invoice")
        with self._connect() as connection:
            self._ensure_company(connection)
            with connection.cursor() as cursor:
                cursor.execute(
                    "DELETE FROM invoice_attachments WHERE invoice_id = %s",
                    (self._record_uuid("invoice", normalized_invoice_id),),
                )
            connection.commit()

    def get_attachment(self, attachment_id: str) -> tuple[dict[str, Any], bytes] | None:
        normalized_attachment_id = as_text(attachment_id)
        if not normalized_attachment_id:
            return None

        try:
            attachment_uuid = uuid.UUID(normalized_attachment_id)
        except ValueError:
            return None

        with self._connect() as connection:
            self._ensure_company(connection)
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT id, file_name, content_type, file_size_bytes, updated_at, file_payload
                    FROM invoice_attachments
                    WHERE id = %s
                    """,
                    (attachment_uuid,),
                )
                row = cursor.fetchone()
            connection.commit()

        if not row or row.get("file_payload") is None:
            return None

        return build_public_attachment(row), bytes(row["file_payload"])

    def _connect(self):
        return self.psycopg.connect(self.database_url, row_factory=self.dict_row)

    def _validate_schema(self) -> None:
        with self._connect() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT column_name
                    FROM information_schema.columns
                    WHERE table_schema = 'public'
                      AND table_name IN ('collaborators', 'vehicles', 'invoices')
                      AND column_name = 'external_key'
                    """
                )
                rows = cursor.fetchall()
            connection.commit()

        if len(rows) < 3:
            raise RuntimeError("Le schema PostgreSQL n'est pas a jour. Chargez d'abord database/schema.sql.")

    def _ensure_company(self, connection) -> None:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                INSERT INTO companies (id, name)
                VALUES (%s, %s)
                ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name
                """,
                (self.company_id, self.company_name),
            )

    def _external_key(self, value: Any, prefix: str) -> str:
        normalized = as_text(value)
        return normalized or f"{prefix}-{uuid.uuid4().hex}"

    def _record_uuid(self, namespace: str, external_key: str) -> uuid.UUID:
        return uuid.uuid5(uuid.NAMESPACE_URL, f"route-pilote:{namespace}:{external_key}")

    def _uuid_or_default(self, value: str, namespace: str, external_key: str) -> uuid.UUID:
        try:
            return uuid.UUID(as_text(value))
        except ValueError:
            return self._record_uuid(namespace, external_key)

    def _normalize_languages(self, collaborator: dict[str, Any]) -> list[dict[str, str]]:
        normalized_languages = []
        for language_entry in as_list(collaborator.get("languages")):
            entry = as_dict(language_entry)
            language_name = as_text(entry.get("language"))
            if not language_name:
                continue
            normalized_languages.append(
                {
                    "language": language_name,
                    "level": as_text(entry.get("level")) or "basic",
                }
            )
        return normalized_languages

    def _load_collaborators(self, connection) -> list[dict[str, Any]]:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT id, external_key, first_name, last_name, role, availability_status
                FROM collaborators
                WHERE company_id = %s
                ORDER BY created_at ASC, external_key ASC
                """,
                (self.company_id,),
            )
            collaborators = cursor.fetchall()
            cursor.execute(
                """
                SELECT collaborator_id, language_name, proficiency_level
                FROM collaborator_languages
                WHERE collaborator_id IN (
                  SELECT id FROM collaborators WHERE company_id = %s
                )
                ORDER BY language_name ASC
                """,
                (self.company_id,),
            )
            language_rows = cursor.fetchall()

        languages_by_id: dict[uuid.UUID, list[dict[str, str]]] = {}
        for row in language_rows:
            collaborator_id = row["collaborator_id"]
            languages_by_id.setdefault(collaborator_id, []).append(
                {
                    "language": as_text(row.get("language_name")),
                    "level": as_text(row.get("proficiency_level")) or "basic",
                }
            )

        return [
            {
                "id": as_text(row.get("external_key")),
                "firstName": as_text(row.get("first_name")),
                "lastName": as_text(row.get("last_name")),
                "role": as_text(row.get("role")) or "guide",
                "availabilityStatus": as_text(row.get("availability_status")) or "available",
                "languages": languages_by_id.get(row["id"], []),
            }
            for row in collaborators
        ]

    def _load_vehicles(self, connection) -> list[dict[str, Any]]:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT
                  vehicles.external_key,
                  vehicles.brand,
                  vehicles.model,
                  vehicles.color,
                  vehicles.registration_plate,
                  vehicles.status,
                  vehicles.rental_end_date,
                  vehicles.avg_consumption,
                  vehicles.consumption_unit,
                  linked.external_key AS linked_collaborator_external_key,
                  linked.first_name AS linked_collaborator_first_name,
                  linked.last_name AS linked_collaborator_last_name,
                  CASE vehicles.ownership_type
                    WHEN 'company' THEN 'owner'
                    WHEN 'collaborator' THEN 'collaborator'
                    ELSE 'rental'
                  END AS vehicle_type
                FROM vehicles
                LEFT JOIN collaborators AS linked ON linked.id = vehicles.owner_collaborator_id
                WHERE vehicles.company_id = %s
                ORDER BY vehicles.created_at ASC, vehicles.external_key ASC
                """,
                (self.company_id,),
            )
            rows = cursor.fetchall()

        vehicles = []
        for row in rows:
            collaborator_name = " ".join(
                part
                for part in (
                    as_text(row.get("linked_collaborator_first_name")),
                    as_text(row.get("linked_collaborator_last_name")),
                )
                if part
            )
            vehicles.append(
                {
                    "id": as_text(row.get("external_key")),
                    "brand": as_text(row.get("brand")),
                    "model": as_text(row.get("model")),
                    "color": as_text(row.get("color")),
                    "plate": as_text(row.get("registration_plate")),
                    "vehicleType": as_text(row.get("vehicle_type")) or "owner",
                    "vehicleStatus": as_text(row.get("status")) or "available",
                    "rentalEndDate": parse_date_value(row.get("rental_end_date")) or "",
                    "consumption": parse_numeric(row.get("avg_consumption"), 0),
                    "consumptionUnit": as_text(row.get("consumption_unit")) or "L/100 km",
                    "linkedCollaboratorId": as_text(row.get("linked_collaborator_external_key")),
                    "linkedCollaboratorName": collaborator_name,
                }
            )

        return vehicles

    def _load_invoices(self, connection) -> list[dict[str, Any]]:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT
                  invoices.*,
                  invoice_attachments.id AS attachment_id,
                  invoice_attachments.file_name AS attachment_name,
                  invoice_attachments.content_type AS attachment_type,
                  invoice_attachments.file_size_bytes AS attachment_size,
                  invoice_attachments.updated_at AS attachment_updated_at
                FROM invoices
                LEFT JOIN invoice_attachments ON invoice_attachments.invoice_id = invoices.id
                WHERE invoices.company_id = %s
                ORDER BY invoices.updated_at ASC, invoices.external_key ASC
                """,
                (self.company_id,),
            )
            rows = cursor.fetchall()

        invoices = []
        for row in rows:
            attachment = None
            if row.get("attachment_id"):
                attachment = build_public_attachment(
                    {
                        "id": str(row.get("attachment_id")),
                        "file_name": row.get("attachment_name"),
                        "content_type": row.get("attachment_type"),
                        "file_size_bytes": row.get("attachment_size"),
                        "updated_at": row.get("attachment_updated_at"),
                    }
                )

            invoices.append(
                {
                    "id": as_text(row.get("external_key")),
                    "number": as_text(row.get("invoice_number")),
                    "issuedAt": parse_date_value(row.get("issued_at")) or "",
                    "invoiceType": as_text(row.get("document_type")) or "client",
                    "sourceLabel": as_text(row.get("source_label")),
                    "paymentStatus": as_text(row.get("payment_status")) or "unpaid",
                    "settledAt": parse_date_value(row.get("settled_at")) or "",
                    "externalFlow": as_text(row.get("external_flow")) or "payable",
                    "paymentMethod": as_text(row.get("payment_method")) or "wire",
                    "seller": {
                        "name": as_text(row.get("seller_name")),
                        "address": as_text(row.get("seller_address")),
                        "location": as_text(row.get("seller_location")),
                        "phone": as_text(row.get("seller_phone")),
                        "evtc": as_text(row.get("seller_evtc")),
                        "siret": as_text(row.get("seller_siret")),
                    },
                    "client": {
                        "name": as_text(row.get("client_name")),
                        "address": as_text(row.get("client_address")),
                        "location": as_text(row.get("client_location")),
                        "siret": as_text(row.get("client_siret")),
                        "vat": as_text(row.get("client_vat")),
                        "contact": as_text(row.get("client_contact")),
                        "email": as_text(row.get("client_email")),
                        "phone": as_text(row.get("client_phone")),
                    },
                    "service": {
                        "description": as_text(row.get("service_description")),
                        "date": parse_date_value(row.get("service_date")) or "",
                        "pickup": as_text(row.get("service_pickup")),
                        "destination": as_text(row.get("service_destination")),
                        "passengers": int(row.get("service_passengers_count") or 0),
                        "distanceKm": parse_numeric(row.get("service_distance_km"), 0),
                    },
                    "totals": {
                        "ht": parse_numeric(row.get("subtotal_amount"), 0),
                        "vat10": parse_numeric(row.get("vat_10_amount"), 0),
                        "vat20": parse_numeric(row.get("vat_20_amount"), 0),
                        "ttc": parse_numeric(row.get("total_amount"), 0),
                    },
                    "insurance": as_text(row.get("insurance_label")),
                    "taxNote": as_text(row.get("tax_note")),
                    "attachment": attachment,
                }
            )

        return invoices

    def _save_collaborators(self, connection, items: list[dict[str, Any]]) -> None:
        active_ids: list[uuid.UUID] = []
        with connection.cursor() as cursor:
            for collaborator in as_list(items):
                collaborator_data = as_dict(collaborator)
                external_key = self._external_key(collaborator_data.get("id"), "collaborator")
                internal_id = self._record_uuid("collaborator", external_key)
                active_ids.append(internal_id)
                first_name = as_text(collaborator_data.get("firstName"))
                last_name = as_text(collaborator_data.get("lastName"))
                full_name = " ".join(part for part in (first_name, last_name) if part)
                role = as_text(collaborator_data.get("role")) or "guide"
                availability_status = as_text(collaborator_data.get("availabilityStatus")) or "available"
                status = {
                    "available": "available",
                    "on_mission": "limited",
                    "unavailable": "off",
                }.get(availability_status, "available")
                languages = self._normalize_languages(collaborator_data)
                cursor.execute(
                    """
                    INSERT INTO collaborators (
                      id, company_id, external_key, full_name, first_name, last_name, role, role_title,
                      availability_status, status, can_drive, languages, updated_at
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, NOW())
                    ON CONFLICT (id) DO UPDATE SET
                      external_key = EXCLUDED.external_key,
                      full_name = EXCLUDED.full_name,
                      first_name = EXCLUDED.first_name,
                      last_name = EXCLUDED.last_name,
                      role = EXCLUDED.role,
                      role_title = EXCLUDED.role_title,
                      availability_status = EXCLUDED.availability_status,
                      status = EXCLUDED.status,
                      can_drive = EXCLUDED.can_drive,
                      languages = EXCLUDED.languages,
                      updated_at = NOW()
                    """,
                    (
                        internal_id,
                        self.company_id,
                        external_key,
                        full_name,
                        first_name,
                        last_name,
                        role,
                        "Chauffeur" if role == "driver" else "Guide",
                        availability_status,
                        status,
                        role == "driver",
                        [language["language"] for language in languages],
                    ),
                )
                cursor.execute("DELETE FROM collaborator_languages WHERE collaborator_id = %s", (internal_id,))
                for language in languages:
                    cursor.execute(
                        """
                        INSERT INTO collaborator_languages (
                          collaborator_id, language_name, proficiency_level, updated_at
                        )
                        VALUES (%s, %s, %s, NOW())
                        """,
                        (
                            internal_id,
                            language["language"],
                            language["level"],
                        ),
                    )

            if active_ids:
                placeholders = ", ".join(["%s"] * len(active_ids))
                cursor.execute(
                    f"""
                    DELETE FROM collaborator_languages
                    WHERE collaborator_id IN (
                      SELECT id FROM collaborators
                      WHERE company_id = %s
                        AND id NOT IN ({placeholders})
                    )
                    """,
                    (self.company_id, *active_ids),
                )
                cursor.execute(
                    f"""
                    DELETE FROM collaborators
                    WHERE company_id = %s
                      AND id NOT IN ({placeholders})
                    """,
                    (self.company_id, *active_ids),
                )
            else:
                cursor.execute(
                    "DELETE FROM collaborator_languages WHERE collaborator_id IN (SELECT id FROM collaborators WHERE company_id = %s)",
                    (self.company_id,),
                )
                cursor.execute("DELETE FROM collaborators WHERE company_id = %s", (self.company_id,))

    def _save_vehicles(self, connection, items: list[dict[str, Any]]) -> None:
        active_ids: list[uuid.UUID] = []
        with connection.cursor() as cursor:
            for vehicle in as_list(items):
                vehicle_data = as_dict(vehicle)
                external_key = self._external_key(vehicle_data.get("id"), "vehicle")
                internal_id = self._record_uuid("vehicle", external_key)
                active_ids.append(internal_id)
                linked_collaborator_id = as_text(vehicle_data.get("linkedCollaboratorId"))
                owner_uuid = self._record_uuid("collaborator", linked_collaborator_id) if linked_collaborator_id else None
                vehicle_type = {
                    "owner": "company",
                    "collaborator": "collaborator",
                    "rental": "rental",
                }.get(as_text(vehicle_data.get("vehicleType")), "company")
                cursor.execute(
                    """
                    INSERT INTO vehicles (
                      id, company_id, external_key, owner_collaborator_id, ownership_type, label,
                      registration_plate, brand, model, color, seats, luggage_capacity, energy_kind,
                      avg_consumption, consumption_unit, status, rental_end_date, updated_at
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 4, 4, %s, %s, %s, %s, %s, NOW())
                    ON CONFLICT (id) DO UPDATE SET
                      external_key = EXCLUDED.external_key,
                      owner_collaborator_id = EXCLUDED.owner_collaborator_id,
                      ownership_type = EXCLUDED.ownership_type,
                      label = EXCLUDED.label,
                      registration_plate = EXCLUDED.registration_plate,
                      brand = EXCLUDED.brand,
                      model = EXCLUDED.model,
                      color = EXCLUDED.color,
                      energy_kind = EXCLUDED.energy_kind,
                      avg_consumption = EXCLUDED.avg_consumption,
                      consumption_unit = EXCLUDED.consumption_unit,
                      status = EXCLUDED.status,
                      rental_end_date = EXCLUDED.rental_end_date,
                      updated_at = NOW()
                    """,
                    (
                        internal_id,
                        self.company_id,
                        external_key,
                        owner_uuid,
                        vehicle_type,
                        " ".join(
                            part
                            for part in (
                                as_text(vehicle_data.get("brand")),
                                as_text(vehicle_data.get("model")),
                            )
                            if part
                        ),
                        as_text(vehicle_data.get("plate")),
                        as_text(vehicle_data.get("brand")),
                        as_text(vehicle_data.get("model")),
                        as_text(vehicle_data.get("color")),
                        "electric" if as_text(vehicle_data.get("consumptionUnit")) == "kWh/100 km" else "diesel",
                        parse_numeric(vehicle_data.get("consumption"), 0),
                        as_text(vehicle_data.get("consumptionUnit")) or "L/100 km",
                        as_text(vehicle_data.get("vehicleStatus")) or "available",
                        parse_date_value(vehicle_data.get("rentalEndDate")),
                    ),
                )

            if active_ids:
                placeholders = ", ".join(["%s"] * len(active_ids))
                cursor.execute(
                    f"""
                    DELETE FROM vehicles
                    WHERE company_id = %s
                      AND id NOT IN ({placeholders})
                    """,
                    (self.company_id, *active_ids),
                )
            else:
                cursor.execute("DELETE FROM vehicles WHERE company_id = %s", (self.company_id,))

    def _save_invoices(self, connection, items: list[dict[str, Any]]) -> None:
        active_ids: list[uuid.UUID] = []
        with connection.cursor() as cursor:
            for invoice in as_list(items):
                invoice_data = as_dict(invoice)
                external_key = self._external_key(invoice_data.get("id"), "invoice")
                internal_id = self._record_uuid("invoice", external_key)
                active_ids.append(internal_id)
                totals = as_dict(invoice_data.get("totals"))
                seller = as_dict(invoice_data.get("seller"))
                client = as_dict(invoice_data.get("client"))
                service = as_dict(invoice_data.get("service"))
                payment_status = as_text(invoice_data.get("paymentStatus")) or "unpaid"
                cursor.execute(
                    """
                    INSERT INTO invoices (
                      id, company_id, external_key, invoice_number, status, document_type, source_label,
                      payment_status, external_flow, payment_method, issued_at, settled_at,
                      subtotal_amount, vat_10_amount, vat_20_amount, total_amount,
                      seller_name, seller_address, seller_location, seller_phone, seller_evtc, seller_siret,
                      client_name, client_address, client_location, client_siret, client_vat, client_contact,
                      client_email, client_phone, service_description, service_date, service_pickup,
                      service_destination, service_passengers_count, service_distance_km,
                      insurance_label, tax_note, updated_at
                    )
                    VALUES (
                      %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,
                      %s, %s, %s, %s,
                      %s, %s, %s, %s, %s, %s,
                      %s, %s, %s, %s, %s, %s,
                      %s, %s, %s, %s, %s,
                      %s, %s, %s, %s, %s, NOW()
                    )
                    ON CONFLICT (id) DO UPDATE SET
                      external_key = EXCLUDED.external_key,
                      invoice_number = EXCLUDED.invoice_number,
                      status = EXCLUDED.status,
                      document_type = EXCLUDED.document_type,
                      source_label = EXCLUDED.source_label,
                      payment_status = EXCLUDED.payment_status,
                      external_flow = EXCLUDED.external_flow,
                      payment_method = EXCLUDED.payment_method,
                      issued_at = EXCLUDED.issued_at,
                      settled_at = EXCLUDED.settled_at,
                      subtotal_amount = EXCLUDED.subtotal_amount,
                      vat_10_amount = EXCLUDED.vat_10_amount,
                      vat_20_amount = EXCLUDED.vat_20_amount,
                      total_amount = EXCLUDED.total_amount,
                      seller_name = EXCLUDED.seller_name,
                      seller_address = EXCLUDED.seller_address,
                      seller_location = EXCLUDED.seller_location,
                      seller_phone = EXCLUDED.seller_phone,
                      seller_evtc = EXCLUDED.seller_evtc,
                      seller_siret = EXCLUDED.seller_siret,
                      client_name = EXCLUDED.client_name,
                      client_address = EXCLUDED.client_address,
                      client_location = EXCLUDED.client_location,
                      client_siret = EXCLUDED.client_siret,
                      client_vat = EXCLUDED.client_vat,
                      client_contact = EXCLUDED.client_contact,
                      client_email = EXCLUDED.client_email,
                      client_phone = EXCLUDED.client_phone,
                      service_description = EXCLUDED.service_description,
                      service_date = EXCLUDED.service_date,
                      service_pickup = EXCLUDED.service_pickup,
                      service_destination = EXCLUDED.service_destination,
                      service_passengers_count = EXCLUDED.service_passengers_count,
                      service_distance_km = EXCLUDED.service_distance_km,
                      insurance_label = EXCLUDED.insurance_label,
                      tax_note = EXCLUDED.tax_note,
                      updated_at = NOW()
                    """,
                    (
                        internal_id,
                        self.company_id,
                        external_key,
                        as_text(invoice_data.get("number")),
                        "paid" if payment_status == "paid" else "sent",
                        as_text(invoice_data.get("invoiceType")) or "client",
                        as_text(invoice_data.get("sourceLabel")),
                        payment_status,
                        as_text(invoice_data.get("externalFlow")) or "payable",
                        as_text(invoice_data.get("paymentMethod")) or "wire",
                        parse_date_value(invoice_data.get("issuedAt")),
                        parse_date_value(invoice_data.get("settledAt")),
                        parse_numeric(totals.get("ht"), 0),
                        parse_numeric(totals.get("vat10"), 0),
                        parse_numeric(totals.get("vat20"), 0),
                        parse_numeric(totals.get("ttc"), 0),
                        as_text(seller.get("name")),
                        as_text(seller.get("address")),
                        as_text(seller.get("location")),
                        as_text(seller.get("phone")),
                        as_text(seller.get("evtc")),
                        as_text(seller.get("siret")),
                        as_text(client.get("name")),
                        as_text(client.get("address")),
                        as_text(client.get("location")),
                        as_text(client.get("siret")),
                        as_text(client.get("vat")),
                        as_text(client.get("contact")),
                        as_text(client.get("email")),
                        as_text(client.get("phone")),
                        as_text(service.get("description")),
                        parse_date_value(service.get("date")),
                        as_text(service.get("pickup")),
                        as_text(service.get("destination")),
                        int(parse_numeric(service.get("passengers"), 0)),
                        parse_numeric(service.get("distanceKm"), 0),
                        as_text(invoice_data.get("insurance")),
                        as_text(invoice_data.get("taxNote")),
                    ),
                )

                attachment = as_dict(invoice_data.get("attachment"))
                if not as_text(attachment.get("id")):
                    cursor.execute("DELETE FROM invoice_attachments WHERE invoice_id = %s", (internal_id,))

            if active_ids:
                placeholders = ", ".join(["%s"] * len(active_ids))
                cursor.execute(
                    f"""
                    DELETE FROM invoices
                    WHERE company_id = %s
                      AND id NOT IN ({placeholders})
                    """,
                    (self.company_id, *active_ids),
                )
            else:
                cursor.execute("DELETE FROM invoices WHERE company_id = %s", (self.company_id,))


def build_store():
    database_url = as_text(os.getenv("APP_DATABASE_URL"))
    if database_url:
        try:
            store = PostgresDataStore(
                database_url=database_url,
                company_name=as_text(os.getenv("APP_COMPANY_NAME")) or "Route Pilote",
            )
            print("Persistance active : PostgreSQL")
            return store
        except Exception as error:  # pragma: no cover
            print(f"PostgreSQL indisponible, bascule sur JSON local : {error}", file=sys.stderr)

    print(f"Persistance active : JSON local ({STATE_FILE})")
    return JsonDataStore(state_file=STATE_FILE, attachments_dir=ATTACHMENTS_DIR)


STORE = build_store()


class RoutePiloteHandler(SimpleHTTPRequestHandler):
    server_version = "RoutePiloteHTTP/1.0"

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path.startswith("/api/"):
            self._handle_api_request("GET", parsed)
            return
        super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        self._handle_api_request("POST", parsed)

    def do_PUT(self) -> None:
        parsed = urlparse(self.path)
        self._handle_api_request("PUT", parsed)

    def do_DELETE(self) -> None:
        parsed = urlparse(self.path)
        self._handle_api_request("DELETE", parsed)

    def _handle_api_request(self, method: str, parsed) -> None:
        try:
            if method == "GET":
                self._handle_api_get(parsed)
                return
            if method == "PUT":
                self._handle_api_put(parsed)
                return
            if method == "POST":
                self._handle_api_post(parsed)
                return
            if method == "DELETE":
                self._handle_api_delete(parsed)
                return
            raise ApiError(HTTPStatus.METHOD_NOT_ALLOWED, "Methode non autorisee.")
        except ApiError as error:
            json_response(self, {"ok": False, "error": error.message}, status=error.status)
        except Exception as error:  # pragma: no cover
            json_response(
                self,
                {"ok": False, "error": f"Erreur serveur: {error}"},
                status=HTTPStatus.INTERNAL_SERVER_ERROR,
            )

    def _handle_api_get(self, parsed) -> None:
        path = parsed.path.rstrip("/")
        if path == "/api/health":
            json_response(self, {"ok": True, "storage": STORE.backend_name, "now": utc_now_iso()})
            return

        if path == "/api/bootstrap":
            json_response(self, {"ok": True, "data": STORE.load_state()})
            return

        if path.startswith("/api/invoice-attachments/"):
            attachment_id = path.split("/api/invoice-attachments/", 1)[1]
            stored_attachment = STORE.get_attachment(attachment_id)
            if not stored_attachment:
                raise ApiError(HTTPStatus.NOT_FOUND, "Fichier de facture introuvable.")

            attachment_meta, payload = stored_attachment
            query = parse_qs(parsed.query or "")
            download_mode = query.get("download", ["0"])[0] == "1"
            file_name = safe_attachment_name(attachment_meta.get("name") or "facture")
            content_type = as_text(attachment_meta.get("type")) or "application/octet-stream"
            disposition = "attachment" if download_mode else "inline"
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(payload)))
            self.send_header("Content-Disposition", f'{disposition}; filename="{file_name}"')
            self.end_headers()
            self.wfile.write(payload)
            return

        raise ApiError(HTTPStatus.NOT_FOUND, "Route API introuvable.")

    def _handle_api_put(self, parsed) -> None:
        collection_name = parsed.path.rsplit("/", 1)[-1]
        if collection_name not in {"collaborators", "vehicles", "invoices"}:
            raise ApiError(HTTPStatus.NOT_FOUND, "Collection introuvable.")

        body = read_json_body(self)
        items = body if isinstance(body, list) else as_list(as_dict(body).get("items"))
        saved_items = STORE.save_collection(collection_name, items)
        json_response(self, {"ok": True, "items": saved_items})

    def _handle_api_post(self, parsed) -> None:
        if parsed.path.rstrip("/") != "/api/invoice-attachments":
            raise ApiError(HTTPStatus.NOT_FOUND, "Route API introuvable.")

        body = as_dict(read_json_body(self))
        attachment_meta = STORE.save_attachment(
            invoice_id=as_text(body.get("invoiceId")),
            file_name=as_text(body.get("fileName")),
            content_type=as_text(body.get("contentType")),
            payload_base64=as_text(body.get("bytesBase64")),
            existing_attachment_id=as_text(body.get("existingAttachmentId")),
        )
        json_response(self, {"ok": True, "attachment": attachment_meta}, status=HTTPStatus.CREATED)

    def _handle_api_delete(self, parsed) -> None:
        path = parsed.path.rstrip("/")
        if not path.startswith("/api/invoices/") or not path.endswith("/attachment"):
            raise ApiError(HTTPStatus.NOT_FOUND, "Route API introuvable.")

        invoice_id = path.split("/api/invoices/", 1)[1].rsplit("/attachment", 1)[0]
        STORE.delete_attachment_for_invoice(invoice_id)
        json_response(self, {"ok": True})


def run_server(host: str, port: int) -> None:
    handler = lambda *args, **kwargs: RoutePiloteHandler(*args, directory=str(ROOT_DIR), **kwargs)
    httpd = ThreadingHTTPServer((host, port), handler)
    print(f"Route Pilote disponible sur http://{host}:{port}/")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()


def main() -> None:
    parser = argparse.ArgumentParser(description="Serveur local Route Pilote avec persistance.")
    parser.add_argument("--host", default=os.getenv("APP_HOST", DEFAULT_HOST))
    parser.add_argument("--port", type=int, default=int(os.getenv("APP_PORT", DEFAULT_PORT)))
    args = parser.parse_args()
    run_server(host=args.host, port=args.port)


if __name__ == "__main__":
    main()
