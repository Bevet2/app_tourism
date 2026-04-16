const http = require("node:http");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { Pool } = require("pg");

const rootDir = process.cwd();
const localDbConfigPath = path.join(rootDir, "db-config.local.json");
const schemaPath = path.join(rootDir, "database", "schema.sql");
const seedPath = path.join(rootDir, "database", "seed.sql");
const bundledAppStatePath = path.join(rootDir, "data", "app_state.json");
const defaultCompanyId = "11111111-1111-1111-1111-111111111111";
const maxJsonBodyBytes = 15 * 1024 * 1024;
const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function readLocalDbConfig() {
  if (!fs.existsSync(localDbConfigPath)) {
    return {};
  }

  try {
    const rawConfig = fs.readFileSync(localDbConfigPath, "utf8");
    const parsedConfig = JSON.parse(rawConfig);
    return parsedConfig && typeof parsedConfig === "object" ? parsedConfig : {};
  } catch (error) {
    console.error("Impossible de lire db-config.local.json :", error.message);
    return {};
  }
}

function buildDatabaseOptions() {
  const localConfig = readLocalDbConfig();
  const connectionString =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    localConfig.connectionString ||
    "";
  const companyId = process.env.APP_COMPANY_ID || localConfig.companyId || defaultCompanyId;
  const portValue = Number(process.env.PORT || localConfig.port || 8000);
  const sslRequested =
    String(process.env.DB_SSL || localConfig.ssl || "").toLowerCase() === "true";

  if (connectionString) {
    return {
      companyId,
      port: Number.isFinite(portValue) && portValue > 0 ? portValue : 8000,
      poolOptions: {
        connectionString,
        ssl: sslRequested ? { rejectUnauthorized: false } : undefined,
      },
    };
  }

  return {
    companyId,
    port: Number.isFinite(portValue) && portValue > 0 ? portValue : 8000,
    poolOptions: {
      host: process.env.PGHOST || localConfig.host || "127.0.0.1",
      port: Number(process.env.PGPORT || localConfig.portDb || 5432),
      database: process.env.PGDATABASE || localConfig.database || "app_tourism",
      user: process.env.PGUSER || localConfig.user || "postgres",
      password: process.env.PGPASSWORD || localConfig.password || "postgres",
      ssl: sslRequested ? { rejectUnauthorized: false } : undefined,
    },
  };
}

const runtimeConfig = buildDatabaseOptions();
const pool = new Pool(runtimeConfig.poolOptions);
let databaseInitPromise = null;

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isUuid(value) {
  return uuidPattern.test(normalizeText(value));
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
}

function normalizeLanguageLevel(level) {
  const value = normalizeText(level).toLowerCase();
  if (["basic", "intermediate", "conversational", "fluent"].includes(value)) {
    return value;
  }
  return "basic";
}

function normalizeCollaboratorRole(role) {
  return normalizeText(role).toLowerCase() === "driver" ? "driver" : "guide";
}

function normalizeAvailabilityStatus(status) {
  const value = normalizeText(status).toLowerCase();
  if (["available", "on_mission", "unavailable"].includes(value)) {
    return value;
  }
  return "available";
}

function normalizeVehicleType(type) {
  const value = normalizeText(type).toLowerCase();
  if (["owner", "company"].includes(value)) {
    return "owner";
  }
  if (value === "collaborator") {
    return "collaborator";
  }
  if (value === "rental") {
    return "rental";
  }
  return "owner";
}

function normalizeVehicleStatus(status) {
  const value = normalizeText(status).toLowerCase();
  if (["available", "in_use", "repair", "rental_ended"].includes(value)) {
    return value;
  }
  return "available";
}

function normalizeInvoiceType(type) {
  return normalizeText(type).toLowerCase() === "external" ? "external" : "client";
}

function normalizeInvoicePaymentStatus(status) {
  return normalizeText(status).toLowerCase() === "paid" ? "paid" : "unpaid";
}

function normalizeInvoiceExternalFlow(flow) {
  return normalizeText(flow).toLowerCase() === "receivable" ? "receivable" : "payable";
}

function normalizeInvoicePaymentMethod(method) {
  const value = normalizeText(method).toLowerCase();
  if (["wire", "card", "cash", "cheque"].includes(value)) {
    return value;
  }
  return "wire";
}

function normalizeDateValue(value) {
  const normalized = normalizeText(value);
  return /^\d{4}-\d{2}-\d{2}$/.test(normalized) ? normalized : null;
}

function normalizeNumber(value, fallback = 0) {
  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : fallback;
}

function normalizeCollaboratorPayload(collaborator) {
  const safeCollaborator =
    collaborator && typeof collaborator === "object" ? collaborator : {};
  const firstName = normalizeText(safeCollaborator.firstName);
  const lastName = normalizeText(safeCollaborator.lastName);
  const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();
  const languages = Array.isArray(safeCollaborator.languages)
    ? safeCollaborator.languages
        .map((entry) => ({
          language: normalizeText(entry?.language),
          level: normalizeLanguageLevel(entry?.level),
        }))
        .filter((entry) => entry.language)
    : [];

  return {
    availabilityStatus: normalizeAvailabilityStatus(safeCollaborator.availabilityStatus),
    clientKey: normalizeText(safeCollaborator.id) || randomUUID(),
    firstName,
    fullName,
    languages,
    lastName,
    role: normalizeCollaboratorRole(safeCollaborator.role),
  };
}

function normalizeVehiclePayload(vehicle) {
  const safeVehicle = vehicle && typeof vehicle === "object" ? vehicle : {};
  const brand = normalizeText(safeVehicle.brand);
  const model = normalizeText(safeVehicle.model);
  const vehicleType = normalizeVehicleType(safeVehicle.vehicleType);

  return {
    brand,
    clientKey: normalizeText(safeVehicle.id) || randomUUID(),
    color: normalizeText(safeVehicle.color),
    consumption: Math.max(0.1, normalizeNumber(safeVehicle.consumption, 6.5)),
    consumptionUnit: normalizeText(safeVehicle.consumptionUnit) || "L/100 km",
    linkedCollaboratorId: vehicleType === "collaborator" ? normalizeText(safeVehicle.linkedCollaboratorId) : "",
    linkedCollaboratorName: normalizeText(safeVehicle.linkedCollaboratorName),
    model,
    plate: normalizeText(safeVehicle.plate).toUpperCase(),
    rentalEndDate: normalizeDateValue(safeVehicle.rentalEndDate),
    vehicleStatus: normalizeVehicleStatus(safeVehicle.vehicleStatus),
    vehicleType,
  };
}

function normalizeAttachmentPayload(attachment) {
  const safeAttachment = attachment && typeof attachment === "object" ? attachment : {};
  const attachmentId = normalizeText(safeAttachment.id);
  const payloadBase64 = normalizeText(safeAttachment.payloadBase64);

  if (!attachmentId && !payloadBase64) {
    return null;
  }

  return {
    id: attachmentId || randomUUID(),
    name: normalizeText(safeAttachment.name) || "fichier",
    payloadBase64,
    size: Math.max(0, normalizeNumber(safeAttachment.size, 0)),
    type: normalizeText(safeAttachment.type) || "application/octet-stream",
    updatedAt: normalizeText(safeAttachment.updatedAt) || new Date().toISOString(),
  };
}

function normalizeInvoicePayload(invoice) {
  const safeInvoice = invoice && typeof invoice === "object" ? invoice : {};
  const invoiceType = normalizeInvoiceType(safeInvoice.invoiceType);
  const totals = safeInvoice.totals && typeof safeInvoice.totals === "object" ? safeInvoice.totals : {};

  return {
    attachment: normalizeAttachmentPayload(safeInvoice.attachment),
    client: {
      address: normalizeText(safeInvoice.client?.address),
      contact: normalizeText(safeInvoice.client?.contact),
      email: normalizeText(safeInvoice.client?.email),
      location: normalizeText(safeInvoice.client?.location),
      name: normalizeText(safeInvoice.client?.name),
      phone: normalizeText(safeInvoice.client?.phone),
      siret: normalizeText(safeInvoice.client?.siret),
      vat: normalizeText(safeInvoice.client?.vat),
    },
    clientKey: normalizeText(safeInvoice.id) || randomUUID(),
    externalFlow: normalizeInvoiceExternalFlow(safeInvoice.externalFlow),
    insurance: normalizeText(safeInvoice.insurance),
    invoiceType,
    issuedAt: normalizeDateValue(safeInvoice.issuedAt),
    number: normalizeText(safeInvoice.number),
    paymentMethod: normalizeInvoicePaymentMethod(safeInvoice.paymentMethod),
    paymentStatus: normalizeInvoicePaymentStatus(safeInvoice.paymentStatus),
    seller: {
      address: normalizeText(safeInvoice.seller?.address),
      evtc: normalizeText(safeInvoice.seller?.evtc),
      location: normalizeText(safeInvoice.seller?.location),
      name: normalizeText(safeInvoice.seller?.name),
      phone: normalizeText(safeInvoice.seller?.phone),
      siret: normalizeText(safeInvoice.seller?.siret),
    },
    service: {
      date: normalizeDateValue(safeInvoice.service?.date),
      description: normalizeText(safeInvoice.service?.description),
      destination: normalizeText(safeInvoice.service?.destination),
      distanceKm: Math.max(0, normalizeNumber(safeInvoice.service?.distanceKm, 0)),
      passengers: Math.max(0, normalizeNumber(safeInvoice.service?.passengers, 0)),
      pickup: normalizeText(safeInvoice.service?.pickup),
    },
    settledAt: normalizeDateValue(safeInvoice.settledAt),
    sourceLabel:
      normalizeText(safeInvoice.sourceLabel) || (invoiceType === "external" ? "Facture externe" : "Facture client"),
    taxNote: normalizeText(safeInvoice.taxNote),
    totals: {
      ht: Math.max(0, normalizeNumber(totals.ht, 0)),
      ttc: Math.max(
        0,
        normalizeNumber(
          typeof totals.ttc === "undefined"
            ? normalizeNumber(totals.ht, 0) + normalizeNumber(totals.vat10, 0) + normalizeNumber(totals.vat20, 0)
            : totals.ttc,
          0
        )
      ),
      vat10: Math.max(0, normalizeNumber(totals.vat10, 0)),
      vat20: Math.max(0, normalizeNumber(totals.vat20, 0)),
    },
  };
}

// Les finances gardent la ligne originale en JSON pour accepter les sources futures.
function normalizeFinanceEntryPayload(entry) {
  const safeEntry = entry && typeof entry === "object" ? entry : {};
  const clientKey = normalizeText(safeEntry.id) || randomUUID();
  const entryKind = normalizeText(safeEntry.kind) === "override" ? "override" : "manual";
  const sourceType = normalizeText(safeEntry.sourceType) || "manual";
  const sourceKey =
    normalizeText(safeEntry.rowKey) ||
    normalizeText(safeEntry.sourceId) ||
    normalizeText(safeEntry.missionId) ||
    clientKey;

  return {
    clientKey,
    entryKind,
    sourceKey,
    sourceType,
    payload: {
      ...safeEntry,
      id: clientKey,
      kind: entryKind,
      sourceType,
    },
  };
}

function normalizeJsonArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeJsonObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

// Etat JSON partage par les pages qui n'ont pas encore chacune une table dediee.
function createEmptySharedState() {
  return {
    customMissions: [],
    missionAssignments: {},
    missionOverrides: {},
    selectedTripId: "",
  };
}

function normalizeSharedStatePayload(payload) {
  const emptyState = createEmptySharedState();

  return {
    customMissions: normalizeJsonArray(payload?.customMissions || emptyState.customMissions),
    missionAssignments: normalizeJsonObject(payload?.missionAssignments || emptyState.missionAssignments),
    missionOverrides: normalizeJsonObject(payload?.missionOverrides || emptyState.missionOverrides),
    selectedTripId: normalizeText(payload?.selectedTripId || emptyState.selectedTripId),
  };
}

function snapshotHasRichAppData(snapshot) {
  return Boolean(
    normalizeJsonArray(snapshot?.invoices).length > 1 ||
    normalizeJsonArray(snapshot?.financeEntries).length > 0 ||
    normalizeJsonArray(snapshot?.customMissions).length > 0
  );
}

async function readBundledAppStateSnapshot() {
  try {
    const rawSnapshot = await fsp.readFile(bundledAppStatePath, "utf8");
    const parsedSnapshot = JSON.parse(rawSnapshot);
    return parsedSnapshot && typeof parsedSnapshot === "object" ? parsedSnapshot : null;
  } catch (error) {
    return null;
  }
}

async function databaseHasRichAppData(client, companyId) {
  const result = await client.query(
    `SELECT
       (SELECT COUNT(*)::int FROM invoices WHERE company_id = $1) AS invoice_count,
       (SELECT COUNT(*)::int FROM finance_entries WHERE company_id = $1) AS finance_count,
       COALESCE(
         (
           SELECT CASE
             WHEN JSONB_TYPEOF(payload) = 'array' THEN JSONB_ARRAY_LENGTH(payload)
             ELSE 0
           END
           FROM app_shared_state
           WHERE company_id = $1
             AND state_key = 'customMissions'
           LIMIT 1
         ),
         0
       )::int AS custom_mission_count`,
    [companyId]
  );
  const row = result.rows[0] || {};

  return (
    Number(row.invoice_count || 0) > 1 ||
    Number(row.finance_count || 0) > 0 ||
    Number(row.custom_mission_count || 0) > 0
  );
}

async function seedBundledAppStateSnapshot(client, companyId) {
  const snapshot = await readBundledAppStateSnapshot();
  if (!snapshotHasRichAppData(snapshot) || (await databaseHasRichAppData(client, companyId))) {
    return;
  }

  const collaborators = normalizeJsonArray(snapshot.collaborators).map(normalizeCollaboratorPayload);
  const vehicles = normalizeJsonArray(snapshot.vehicles)
    .map(normalizeVehiclePayload)
    .filter((vehicle) => vehicle.plate);
  const invoices = normalizeJsonArray(snapshot.invoices)
    .map(normalizeInvoicePayload)
    .filter((invoice) => invoice.number);
  const financeEntries = normalizeJsonArray(snapshot.financeEntries).map(normalizeFinanceEntryPayload);

  await upsertCollaborators(client, companyId, collaborators);
  await upsertVehicles(client, companyId, vehicles);
  await upsertInvoices(client, companyId, invoices);
  await upsertFinanceEntries(client, companyId, financeEntries);
  await upsertSharedState(client, companyId, normalizeSharedStatePayload(snapshot));
}

async function ensureDatabaseInitialized() {
  if (!databaseInitPromise) {
    databaseInitPromise = (async () => {
      const client = await pool.connect();
      try {
        const schemaSql = await fsp.readFile(schemaPath, "utf8");
        const seedSql = await fsp.readFile(seedPath, "utf8");
        await client.query(schemaSql);
        await client.query(`
          CREATE TABLE IF NOT EXISTS ui_entity_keys (
            company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
            resource_type TEXT NOT NULL,
            client_key TEXT NOT NULL,
            entity_id UUID NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            PRIMARY KEY (company_id, resource_type, client_key),
            UNIQUE (company_id, resource_type, entity_id)
          );
        `);
        await client.query(seedSql);
        await client.query(
          `INSERT INTO companies (id, name)
           VALUES ($1, 'Route Pilote')
           ON CONFLICT (id) DO NOTHING`,
          [runtimeConfig.companyId]
        );
        await seedBundledAppStateSnapshot(client, runtimeConfig.companyId);
      } finally {
        client.release();
      }
    })().catch((error) => {
      databaseInitPromise = null;
      throw error;
    });
  }

  return databaseInitPromise;
}

async function withTransaction(handler) {
  await ensureDatabaseInitialized();
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    const result = await handler(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

async function resolveEntityId(client, resourceType, clientKey, companyId) {
  const normalizedClientKey = normalizeText(clientKey) || randomUUID();
  const existingKey = await client.query(
    `SELECT entity_id
       FROM ui_entity_keys
      WHERE company_id = $1
        AND resource_type = $2
        AND client_key = $3`,
    [companyId, resourceType, normalizedClientKey]
  );

  if (existingKey.rowCount > 0) {
    return {
      clientKey: normalizedClientKey,
      entityId: existingKey.rows[0].entity_id,
    };
  }

  const entityId = isUuid(normalizedClientKey) ? normalizedClientKey : randomUUID();
  await client.query(
    `INSERT INTO ui_entity_keys (company_id, resource_type, client_key, entity_id, updated_at)
     VALUES ($1, $2, $3, $4, NOW())
     ON CONFLICT (company_id, resource_type, client_key)
     DO UPDATE SET entity_id = EXCLUDED.entity_id, updated_at = NOW()`,
    [companyId, resourceType, normalizedClientKey, entityId]
  );

  return {
    clientKey: normalizedClientKey,
    entityId,
  };
}

async function resolveCustomerId(client, companyId, invoicePayload) {
  const customerName = normalizeText(invoicePayload.client?.name);
  if (!customerName || invoicePayload.invoiceType === "external") {
    return null;
  }

  const existingCustomer = await client.query(
    `SELECT id
       FROM customers
      WHERE company_id = $1
        AND LOWER(name) = LOWER($2)
      ORDER BY created_at ASC
      LIMIT 1`,
    [companyId, customerName]
  );

  if (existingCustomer.rowCount > 0) {
    const customerId = existingCustomer.rows[0].id;
    await client.query(
      `UPDATE customers
          SET billing_email = $3,
              phone = $4,
              billing_address = $5
        WHERE id = $1
          AND company_id = $2`,
      [
        customerId,
        companyId,
        normalizeText(invoicePayload.client?.email) || null,
        normalizeText(invoicePayload.client?.phone) || null,
        [normalizeText(invoicePayload.client?.address), normalizeText(invoicePayload.client?.location)]
          .filter(Boolean)
          .join(", ") || null,
      ]
    );
    return customerId;
  }

  const insertedCustomer = await client.query(
    `INSERT INTO customers (id, company_id, name, billing_email, phone, billing_address)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id`,
    [
      randomUUID(),
      companyId,
      customerName,
      normalizeText(invoicePayload.client?.email) || null,
      normalizeText(invoicePayload.client?.phone) || null,
      [normalizeText(invoicePayload.client?.address), normalizeText(invoicePayload.client?.location)]
        .filter(Boolean)
        .join(", ") || null,
    ]
  );

  return insertedCustomer.rows[0].id;
}

async function upsertCollaborators(client, companyId, collaborators) {
  for (const collaborator of collaborators) {
    const resolved = await resolveEntityId(client, "collaborator", collaborator.clientKey, companyId);
    const firstName = collaborator.firstName || null;
    const lastName = collaborator.lastName || null;
    const fullName = collaborator.fullName || [collaborator.firstName, collaborator.lastName].filter(Boolean).join(" ");
    const availabilityStatus = collaborator.availabilityStatus;
    const languages = collaborator.languages.map((entry) => entry.language);

    await client.query(
      `INSERT INTO collaborators (
         id,
         company_id,
         full_name,
         first_name,
         last_name,
         role,
         role_title,
         languages,
         status,
         availability_status,
         can_drive,
         hourly_rate,
         updated_at
       )
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8::text[], $9, $10, $11, $12, NOW())
       ON CONFLICT (id)
       DO UPDATE SET
         full_name = EXCLUDED.full_name,
         first_name = EXCLUDED.first_name,
         last_name = EXCLUDED.last_name,
         role = EXCLUDED.role,
         role_title = EXCLUDED.role_title,
         languages = EXCLUDED.languages,
         status = EXCLUDED.status,
         availability_status = EXCLUDED.availability_status,
         can_drive = EXCLUDED.can_drive,
         hourly_rate = EXCLUDED.hourly_rate,
         updated_at = NOW()`,
      [
        resolved.entityId,
        companyId,
        fullName || "",
        firstName,
        lastName,
        collaborator.role,
        collaborator.role === "driver" ? "Chauffeur" : "Guide",
        languages,
        availabilityStatus === "on_mission" ? "limited" : availabilityStatus === "unavailable" ? "off" : "available",
        availabilityStatus,
        collaborator.role === "driver",
        0,
      ]
    );

    await client.query(`DELETE FROM collaborator_languages WHERE collaborator_id = $1`, [resolved.entityId]);
    for (const language of collaborator.languages) {
      await client.query(
        `INSERT INTO collaborator_languages (
           id,
           collaborator_id,
           language_name,
           proficiency_level,
           updated_at
         )
         VALUES ($1, $2, $3, $4, NOW())`,
        [randomUUID(), resolved.entityId, language.language, language.level]
      );
    }
  }
}

async function upsertVehicles(client, companyId, vehicles) {
  const vehicleClientKeys = [];

  for (const vehicle of vehicles) {
    const resolved = await resolveEntityId(client, "vehicle", vehicle.clientKey, companyId);
    vehicleClientKeys.push(resolved.clientKey);
    let ownerCollaboratorId = null;

    if (vehicle.vehicleType === "collaborator" && vehicle.linkedCollaboratorId) {
      const linkedCollaborator = await resolveEntityId(
        client,
        "collaborator",
        vehicle.linkedCollaboratorId,
        companyId
      );
      ownerCollaboratorId = linkedCollaborator.entityId;
    }

    await client.query(
      `INSERT INTO vehicles (
         id,
         company_id,
         owner_collaborator_id,
         ownership_type,
         label,
         registration_plate,
         brand,
         model,
         color,
         seats,
         luggage_capacity,
         energy_kind,
         avg_consumption,
         consumption_unit,
         status,
         rental_end_date,
         updated_at
       )
       VALUES (
         $1, $2, $3, $4, $5, $6, $7, $8, $9, 4, 0, $10, $11, $12, $13, $14, NOW()
       )
       ON CONFLICT (id)
       DO UPDATE SET
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
         updated_at = NOW()`,
      [
        resolved.entityId,
        companyId,
        ownerCollaboratorId,
        vehicle.vehicleType === "collaborator"
          ? "collaborator"
          : vehicle.vehicleType === "rental"
            ? "rental"
            : "company",
        [vehicle.brand, vehicle.model].filter(Boolean).join(" ") || "Vehicule",
        vehicle.plate,
        vehicle.brand || null,
        vehicle.model || null,
        vehicle.color || null,
        vehicle.consumptionUnit === "kWh/100 km" ? "electric" : "diesel",
        vehicle.consumption,
        vehicle.consumptionUnit,
        vehicle.vehicleStatus,
        vehicle.rentalEndDate,
      ]
    );
  }

  if (vehicleClientKeys.length === 0) {
    await client.query(
      `DELETE FROM vehicles
        WHERE id IN (
          SELECT entity_id
            FROM ui_entity_keys
           WHERE company_id = $1
             AND resource_type = 'vehicle'
        )`,
      [companyId]
    );
    await client.query(
      `DELETE FROM ui_entity_keys
        WHERE company_id = $1
          AND resource_type = 'vehicle'`,
      [companyId]
    );
    return;
  }

  await client.query(
    `DELETE FROM vehicles
      WHERE id IN (
        SELECT entity_id
          FROM ui_entity_keys
         WHERE company_id = $1
           AND resource_type = 'vehicle'
           AND client_key <> ALL($2::text[])
      )`,
    [companyId, vehicleClientKeys]
  );
  await client.query(
    `DELETE FROM ui_entity_keys
      WHERE company_id = $1
        AND resource_type = 'vehicle'
        AND client_key <> ALL($2::text[])`,
    [companyId, vehicleClientKeys]
  );
}

async function upsertInvoices(client, companyId, invoices) {
  for (const invoice of invoices) {
    const resolved = await resolveEntityId(client, "invoice", invoice.clientKey, companyId);
    const customerId = await resolveCustomerId(client, companyId, invoice);
    const issuedAt = invoice.issuedAt || new Date().toISOString().slice(0, 10);
    const settledAt = invoice.settledAt || null;
    const dueAt =
      issuedAt && !settledAt
        ? new Date(new Date(`${issuedAt}T00:00:00`).getTime() + 30 * 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(0, 10)
        : issuedAt;

    await client.query(
      `INSERT INTO invoices (
         id, company_id, customer_id, invoice_number, status, document_type, source_label,
         payment_status, external_flow, payment_method, issued_at, due_at, settled_at,
         subtotal_amount, vat_10_amount, vat_20_amount, tax_amount, total_amount,
         seller_name, seller_address, seller_location, seller_phone, seller_evtc, seller_siret,
         client_name, client_address, client_location, client_siret, client_vat, client_contact,
         client_email, client_phone, service_description, service_date, service_pickup,
         service_destination, service_passengers_count, service_distance_km, insurance_label,
         tax_note, updated_at
       )
       VALUES (
         $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
         $11, $12, $13, $14, $15, $16, $17, $18,
         $19, $20, $21, $22, $23, $24, $25, $26,
         $27, $28, $29, $30, $31, $32, $33, $34,
         $35, $36, $37, $38, $39, $40, NOW()
       )
       ON CONFLICT (id)
       DO UPDATE SET
         customer_id = EXCLUDED.customer_id,
         invoice_number = EXCLUDED.invoice_number,
         status = EXCLUDED.status,
         document_type = EXCLUDED.document_type,
         source_label = EXCLUDED.source_label,
         payment_status = EXCLUDED.payment_status,
         external_flow = EXCLUDED.external_flow,
         payment_method = EXCLUDED.payment_method,
         issued_at = EXCLUDED.issued_at,
         due_at = EXCLUDED.due_at,
         settled_at = EXCLUDED.settled_at,
         subtotal_amount = EXCLUDED.subtotal_amount,
         vat_10_amount = EXCLUDED.vat_10_amount,
         vat_20_amount = EXCLUDED.vat_20_amount,
         tax_amount = EXCLUDED.tax_amount,
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
         updated_at = NOW()`,
      [
        resolved.entityId,
        companyId,
        customerId,
        invoice.number,
        invoice.paymentStatus === "paid" ? "paid" : "sent",
        invoice.invoiceType,
        invoice.sourceLabel,
        invoice.paymentStatus,
        invoice.invoiceType === "external" ? invoice.externalFlow : "payable",
        invoice.paymentMethod,
        issuedAt,
        dueAt,
        settledAt,
        invoice.totals.ht,
        invoice.totals.vat10,
        invoice.totals.vat20,
        invoice.totals.vat10 + invoice.totals.vat20,
        invoice.totals.ttc,
        invoice.seller.name || null,
        invoice.seller.address || null,
        invoice.seller.location || null,
        invoice.seller.phone || null,
        invoice.seller.evtc || null,
        invoice.seller.siret || null,
        invoice.invoiceType === "external" ? null : invoice.client.name || null,
        invoice.invoiceType === "external" ? null : invoice.client.address || null,
        invoice.invoiceType === "external" ? null : invoice.client.location || null,
        invoice.invoiceType === "external" ? null : invoice.client.siret || null,
        invoice.invoiceType === "external" ? null : invoice.client.vat || null,
        invoice.invoiceType === "external" ? null : invoice.client.contact || null,
        invoice.invoiceType === "external" ? null : invoice.client.email || null,
        invoice.invoiceType === "external" ? null : invoice.client.phone || null,
        invoice.service.description || null,
        invoice.invoiceType === "external" ? null : invoice.service.date,
        invoice.invoiceType === "external" ? null : invoice.service.pickup || null,
        invoice.invoiceType === "external" ? null : invoice.service.destination || null,
        invoice.invoiceType === "external" ? 0 : invoice.service.passengers,
        invoice.invoiceType === "external" ? 0 : invoice.service.distanceKm,
        invoice.insurance || null,
        invoice.taxNote || null,
      ]
    );

    if (invoice.attachment) {
      const filePayload = invoice.attachment.payloadBase64
        ? Buffer.from(invoice.attachment.payloadBase64, "base64")
        : null;
      await client.query(
        `INSERT INTO invoice_attachments (
           id,
           invoice_id,
           file_name,
           content_type,
           file_size_bytes,
           file_payload,
           updated_at
         )
         VALUES ($1, $2, $3, $4, $5, $6, NOW())
         ON CONFLICT (invoice_id)
         DO UPDATE SET
           id = EXCLUDED.id,
           file_name = EXCLUDED.file_name,
           content_type = EXCLUDED.content_type,
           file_size_bytes = EXCLUDED.file_size_bytes,
           file_payload = COALESCE(EXCLUDED.file_payload, invoice_attachments.file_payload),
           updated_at = NOW()`,
        [
          isUuid(invoice.attachment.id) ? invoice.attachment.id : randomUUID(),
          resolved.entityId,
          invoice.attachment.name,
          invoice.attachment.type,
          invoice.attachment.size,
          filePayload,
        ]
      );
    } else {
      await client.query(`DELETE FROM invoice_attachments WHERE invoice_id = $1`, [resolved.entityId]);
    }
  }
}

async function upsertFinanceEntries(client, companyId, financeEntries) {
  const financeClientKeys = [];

  for (const entry of financeEntries) {
    const resolved = await resolveEntityId(client, "financeEntry", entry.clientKey, companyId);
    financeClientKeys.push(resolved.clientKey);

    await client.query(
      `INSERT INTO finance_entries (
         id,
         company_id,
         entry_kind,
         source_type,
         source_key,
         payload,
         updated_at
       )
       VALUES ($1, $2, $3, $4, $5, $6::jsonb, NOW())
       ON CONFLICT (id)
       DO UPDATE SET
         entry_kind = EXCLUDED.entry_kind,
         source_type = EXCLUDED.source_type,
         source_key = EXCLUDED.source_key,
         payload = EXCLUDED.payload,
         updated_at = NOW()`,
      [
        resolved.entityId,
        companyId,
        entry.entryKind,
        entry.sourceType,
        entry.sourceKey,
        JSON.stringify(entry.payload),
      ]
    );
  }

  if (financeClientKeys.length === 0) {
    await client.query(
      `DELETE FROM finance_entries
        WHERE id IN (
          SELECT entity_id
            FROM ui_entity_keys
           WHERE company_id = $1
             AND resource_type = 'financeEntry'
        )`,
      [companyId]
    );
    await client.query(
      `DELETE FROM ui_entity_keys
        WHERE company_id = $1
          AND resource_type = 'financeEntry'`,
      [companyId]
    );
    return;
  }

  await client.query(
    `DELETE FROM finance_entries
      WHERE id IN (
        SELECT entity_id
          FROM ui_entity_keys
         WHERE company_id = $1
           AND resource_type = 'financeEntry'
           AND client_key <> ALL($2::text[])
      )`,
    [companyId, financeClientKeys]
  );
  await client.query(
    `DELETE FROM ui_entity_keys
      WHERE company_id = $1
        AND resource_type = 'financeEntry'
        AND client_key <> ALL($2::text[])`,
    [companyId, financeClientKeys]
  );
}

async function upsertSharedState(client, companyId, sharedState) {
  const normalizedState = normalizeSharedStatePayload(sharedState);

  // Un enregistrement par collection permet d'ajouter des pages sans migration lourde.
  for (const [stateKey, payload] of Object.entries(normalizedState)) {
    await client.query(
      `INSERT INTO app_shared_state (
         company_id,
         state_key,
         payload,
         updated_at
       )
       VALUES ($1, $2, $3::jsonb, NOW())
       ON CONFLICT (company_id, state_key)
       DO UPDATE SET
         payload = EXCLUDED.payload,
         updated_at = NOW()`,
      [companyId, stateKey, JSON.stringify(payload)]
    );
  }
}

async function serializeCollaborators(client, companyId) {
  const result = await client.query(
    `SELECT
       c.id,
       c.first_name,
       c.last_name,
       c.role,
       c.availability_status,
       key_map.client_key,
       COALESCE(
         JSON_AGG(
           JSON_BUILD_OBJECT(
             'language', language.language_name,
             'level', language.proficiency_level
           )
           ORDER BY language.created_at
         ) FILTER (WHERE language.id IS NOT NULL),
         '[]'::json
       ) AS languages
     FROM collaborators c
     LEFT JOIN ui_entity_keys key_map
       ON key_map.company_id = c.company_id
      AND key_map.resource_type = 'collaborator'
      AND key_map.entity_id = c.id
     LEFT JOIN collaborator_languages language
       ON language.collaborator_id = c.id
     WHERE c.company_id = $1
     GROUP BY c.id, key_map.client_key
     ORDER BY c.created_at ASC, c.full_name ASC`,
    [companyId]
  );

  return result.rows.map((row) => ({
    id: row.client_key || row.id,
    firstName: row.first_name || "",
    lastName: row.last_name || "",
    role: row.role || "guide",
    availabilityStatus: row.availability_status || "available",
    languages: Array.isArray(row.languages) ? row.languages : [],
  }));
}

async function serializeVehicles(client, companyId) {
  const result = await client.query(
    `SELECT
       v.id,
       v.brand,
       v.model,
       v.color,
       v.registration_plate,
       v.ownership_type,
       v.status,
       v.rental_end_date,
       v.avg_consumption,
       v.consumption_unit,
       vehicle_key.client_key AS vehicle_client_key,
       collaborator_key.client_key AS collaborator_client_key,
       owner.full_name AS collaborator_name
     FROM vehicles v
     LEFT JOIN ui_entity_keys vehicle_key
       ON vehicle_key.company_id = v.company_id
      AND vehicle_key.resource_type = 'vehicle'
      AND vehicle_key.entity_id = v.id
     LEFT JOIN collaborators owner
       ON owner.id = v.owner_collaborator_id
     LEFT JOIN ui_entity_keys collaborator_key
       ON collaborator_key.company_id = v.company_id
      AND collaborator_key.resource_type = 'collaborator'
      AND collaborator_key.entity_id = owner.id
     WHERE v.company_id = $1
     ORDER BY v.created_at ASC, v.label ASC`,
    [companyId]
  );

  return result.rows.map((row) => ({
    id: row.vehicle_client_key || row.id,
    brand: row.brand || "",
    model: row.model || "",
    color: row.color || "",
    plate: row.registration_plate || "",
    vehicleType:
      row.ownership_type === "collaborator"
        ? "collaborator"
        : row.ownership_type === "rental"
          ? "rental"
          : "owner",
    vehicleStatus: row.status || "available",
    rentalEndDate: row.rental_end_date
      ? new Date(row.rental_end_date).toISOString().slice(0, 10)
      : "",
    consumption: String(normalizeNumber(row.avg_consumption, 0)).replace(/\.0$/, ""),
    consumptionUnit: row.consumption_unit || "L/100 km",
    linkedCollaboratorId: row.collaborator_client_key || "",
    linkedCollaboratorName: row.collaborator_name || "",
  }));
}

async function serializeInvoices(client, companyId) {
  const result = await client.query(
    `SELECT
       i.id,
       i.invoice_number,
       i.issued_at,
       i.document_type,
       i.source_label,
       i.payment_status,
       i.external_flow,
       i.payment_method,
       i.settled_at,
       i.subtotal_amount,
       i.vat_10_amount,
       i.vat_20_amount,
       i.total_amount,
       i.seller_name,
       i.seller_address,
       i.seller_location,
       i.seller_phone,
       i.seller_evtc,
       i.seller_siret,
       i.client_name,
       i.client_address,
       i.client_location,
       i.client_siret,
       i.client_vat,
       i.client_contact,
       i.client_email,
       i.client_phone,
       i.service_description,
       i.service_date,
       i.service_pickup,
       i.service_destination,
       i.service_passengers_count,
       i.service_distance_km,
       i.insurance_label,
       i.tax_note,
       key_map.client_key,
       attachment.id AS attachment_id,
       attachment.file_name,
       attachment.content_type,
       attachment.file_size_bytes,
       attachment.updated_at AS attachment_updated_at
     FROM invoices i
     LEFT JOIN ui_entity_keys key_map
       ON key_map.company_id = i.company_id
      AND key_map.resource_type = 'invoice'
      AND key_map.entity_id = i.id
     LEFT JOIN invoice_attachments attachment
       ON attachment.invoice_id = i.id
     WHERE i.company_id = $1
     ORDER BY i.issued_at DESC NULLS LAST, i.invoice_number DESC`,
    [companyId]
  );

  return result.rows.map((row) => ({
    id: row.client_key || row.id,
    number: row.invoice_number || "",
    issuedAt: row.issued_at ? new Date(row.issued_at).toISOString().slice(0, 10) : "",
    invoiceType: row.document_type || "client",
    sourceLabel: row.source_label || (row.document_type === "external" ? "Facture externe" : "Facture client"),
    paymentStatus: row.payment_status || "unpaid",
    settledAt: row.settled_at ? new Date(row.settled_at).toISOString().slice(0, 10) : "",
    externalFlow: row.external_flow || "payable",
    paymentMethod: row.payment_method || "wire",
    seller: {
      name: row.seller_name || "",
      address: row.seller_address || "",
      location: row.seller_location || "",
      phone: row.seller_phone || "",
      evtc: row.seller_evtc || "",
      siret: row.seller_siret || "",
    },
    client: {
      name: row.client_name || "",
      address: row.client_address || "",
      location: row.client_location || "",
      siret: row.client_siret || "",
      vat: row.client_vat || "",
      contact: row.client_contact || "",
      email: row.client_email || "",
      phone: row.client_phone || "",
    },
    service: {
      description: row.service_description || "",
      date: row.service_date ? new Date(row.service_date).toISOString().slice(0, 10) : "",
      pickup: row.service_pickup || "",
      destination: row.service_destination || "",
      passengers: Number(row.service_passengers_count || 0),
      distanceKm: Number(row.service_distance_km || 0),
    },
    totals: {
      ht: Number(row.subtotal_amount || 0),
      vat10: Number(row.vat_10_amount || 0),
      vat20: Number(row.vat_20_amount || 0),
      ttc: Number(row.total_amount || 0),
    },
    taxNote: row.tax_note || "",
    insurance: row.insurance_label || "",
    attachment: row.attachment_id
      ? {
          id: row.attachment_id,
          name: row.file_name || "fichier",
          type: row.content_type || "application/octet-stream",
          size: Number(row.file_size_bytes || 0),
          updatedAt: row.attachment_updated_at
            ? new Date(row.attachment_updated_at).toISOString()
            : "",
        }
      : null,
  }));
}

async function serializeFinanceEntries(client, companyId) {
  const result = await client.query(
    `SELECT
       finance_entry.id,
       finance_entry.payload,
       key_map.client_key
     FROM finance_entries finance_entry
     LEFT JOIN ui_entity_keys key_map
       ON key_map.company_id = finance_entry.company_id
      AND key_map.resource_type = 'financeEntry'
      AND key_map.entity_id = finance_entry.id
     WHERE finance_entry.company_id = $1
     ORDER BY finance_entry.created_at ASC, finance_entry.updated_at ASC`,
    [companyId]
  );

  return result.rows.map((row) => {
    const payload =
      row.payload && typeof row.payload === "object" && !Array.isArray(row.payload)
        ? row.payload
        : {};

    return {
      ...payload,
      id: row.client_key || payload.id || row.id,
    };
  });
}

async function serializeSharedState(client, companyId) {
  const result = await client.query(
    `SELECT state_key, payload
       FROM app_shared_state
      WHERE company_id = $1`,
    [companyId]
  );
  const sharedState = createEmptySharedState();

  for (const row of result.rows) {
    if (row.state_key === "customMissions") {
      sharedState.customMissions = normalizeJsonArray(row.payload);
    } else if (row.state_key === "missionAssignments") {
      sharedState.missionAssignments = normalizeJsonObject(row.payload);
    } else if (row.state_key === "missionOverrides") {
      sharedState.missionOverrides = normalizeJsonObject(row.payload);
    } else if (row.state_key === "selectedTripId") {
      sharedState.selectedTripId = normalizeText(row.payload);
    }
  }

  return sharedState;
}

async function readAppDataSnapshot() {
  return withTransaction(async (client) => {
    const sharedState = await serializeSharedState(client, runtimeConfig.companyId);

    return {
      collaborators: await serializeCollaborators(client, runtimeConfig.companyId),
      vehicles: await serializeVehicles(client, runtimeConfig.companyId),
      invoices: await serializeInvoices(client, runtimeConfig.companyId),
      financeEntries: await serializeFinanceEntries(client, runtimeConfig.companyId),
      ...sharedState,
    };
  });
}

async function syncAppDataSnapshot(payload) {
  const collaborators = Array.isArray(payload?.collaborators)
    ? payload.collaborators.map(normalizeCollaboratorPayload)
    : [];
  const vehicles = Array.isArray(payload?.vehicles)
    ? payload.vehicles.map(normalizeVehiclePayload).filter((vehicle) => vehicle.plate)
    : [];
  const invoices = Array.isArray(payload?.invoices)
    ? payload.invoices.map(normalizeInvoicePayload).filter((invoice) => invoice.number)
    : [];
  const financeEntries = Array.isArray(payload?.financeEntries)
    ? payload.financeEntries.map(normalizeFinanceEntryPayload)
    : [];
  const sharedState = normalizeSharedStatePayload(payload);

  return withTransaction(async (client) => {
    await upsertCollaborators(client, runtimeConfig.companyId, collaborators);
    await upsertVehicles(client, runtimeConfig.companyId, vehicles);
    await upsertInvoices(client, runtimeConfig.companyId, invoices);
    await upsertFinanceEntries(client, runtimeConfig.companyId, financeEntries);
    await upsertSharedState(client, runtimeConfig.companyId, sharedState);

    const nextSharedState = await serializeSharedState(client, runtimeConfig.companyId);

    return {
      collaborators: await serializeCollaborators(client, runtimeConfig.companyId),
      vehicles: await serializeVehicles(client, runtimeConfig.companyId),
      invoices: await serializeInvoices(client, runtimeConfig.companyId),
      financeEntries: await serializeFinanceEntries(client, runtimeConfig.companyId),
      ...nextSharedState,
    };
  });
}

async function readJsonBody(request) {
  const bodyChunks = [];
  let receivedBytes = 0;

  for await (const chunk of request) {
    receivedBytes += chunk.length;
    if (receivedBytes > maxJsonBodyBytes) {
      throw new Error("Le corps de la requete est trop volumineux.");
    }
    bodyChunks.push(chunk);
  }

  if (bodyChunks.length === 0) {
    return {};
  }

  const rawBody = Buffer.concat(bodyChunks).toString("utf8");
  return JSON.parse(rawBody);
}

async function handleApiRequest(request, response, urlObject) {
  try {
    if (request.method === "GET" && urlObject.pathname === "/api/health") {
      await ensureDatabaseInitialized();
      sendJson(response, 200, {
        ok: true,
        companyId: runtimeConfig.companyId,
      });
      return true;
    }

    if (request.method === "GET" && urlObject.pathname === "/api/app-data") {
      const data = await readAppDataSnapshot();
      sendJson(response, 200, { ok: true, data });
      return true;
    }

    if (request.method === "PUT" && urlObject.pathname === "/api/app-data") {
      const payload = await readJsonBody(request);
      const data = await syncAppDataSnapshot(payload);
      sendJson(response, 200, { ok: true, data });
      return true;
    }

    const attachmentMatch = urlObject.pathname.match(/^\/api\/invoices\/([^/]+)\/attachment$/);
    if (request.method === "GET" && attachmentMatch) {
      const invoiceClientKey = decodeURIComponent(attachmentMatch[1]);
      const data = await withTransaction(async (client) => {
        const resolved = await resolveEntityId(client, "invoice", invoiceClientKey, runtimeConfig.companyId);
        const attachmentResult = await client.query(
          `SELECT attachment.file_name, attachment.content_type, attachment.file_payload
             FROM invoice_attachments attachment
             INNER JOIN invoices invoice ON invoice.id = attachment.invoice_id
            WHERE invoice.company_id = $1
              AND invoice.id = $2
            LIMIT 1`,
          [runtimeConfig.companyId, resolved.entityId]
        );
        return attachmentResult.rows[0] || null;
      });

      if (!data || !data.file_payload) {
        sendJson(response, 404, {
          ok: false,
          error: "Aucune piece jointe n'a ete trouvee pour cette facture.",
        });
        return true;
      }

      response.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Disposition": `inline; filename="${encodeURIComponent(data.file_name || "piece-jointe")}"`,
        "Content-Type": data.content_type || "application/octet-stream",
      });
      response.end(data.file_payload);
      return true;
    }
  } catch (error) {
    sendJson(response, 500, {
      ok: false,
      error: error.message || "Erreur serveur",
    });
    return true;
  }

  return false;
}

function getStaticFilePath(urlPathname) {
  const normalizedPath = decodeURIComponent(urlPathname === "/" ? "/index.html" : urlPathname);
  const sanitizedPath = path.normalize(normalizedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(rootDir, sanitizedPath);

  if (!filePath.startsWith(rootDir)) {
    return null;
  }

  return filePath;
}

async function serveStaticFile(response, urlPathname) {
  const filePath = getStaticFilePath(urlPathname);
  if (!filePath) {
    response.writeHead(403);
    response.end("Acces refuse");
    return;
  }

  try {
    const fileStat = await fsp.stat(filePath);
    const finalPath = fileStat.isDirectory() ? path.join(filePath, "index.html") : filePath;
    const extension = path.extname(finalPath).toLowerCase();
    const fileBuffer = await fsp.readFile(finalPath);

    response.writeHead(200, {
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=60",
      "Content-Type": contentTypes[extension] || "application/octet-stream",
    });
    response.end(fileBuffer);
  } catch (error) {
    response.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    response.end("Fichier introuvable");
  }
}

const server = http.createServer(async (request, response) => {
  const host = request.headers.host || `127.0.0.1:${runtimeConfig.port}`;
  const urlObject = new URL(request.url || "/", `http://${host}`);

  if (urlObject.pathname.startsWith("/api/")) {
    const handled = await handleApiRequest(request, response, urlObject);
    if (!handled) {
      sendJson(response, 404, {
        ok: false,
        error: "Route API introuvable.",
      });
    }
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    response.end("Methode non autorisee");
    return;
  }

  await serveStaticFile(response, urlObject.pathname);
});

server.listen(runtimeConfig.port, () => {
  console.log(`Route Pilote disponible sur http://127.0.0.1:${runtimeConfig.port}`);
});
