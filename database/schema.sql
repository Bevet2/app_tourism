CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'collaborator_status') THEN
    CREATE TYPE collaborator_status AS ENUM ('available', 'limited', 'off');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'collaborator_role') THEN
    CREATE TYPE collaborator_role AS ENUM ('guide', 'driver');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'collaborator_availability_status') THEN
    CREATE TYPE collaborator_availability_status AS ENUM ('available', 'on_mission', 'unavailable');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'collaborator_language_level') THEN
    CREATE TYPE collaborator_language_level AS ENUM ('basic', 'intermediate', 'conversational', 'fluent');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'vehicle_ownership_type') THEN
    CREATE TYPE vehicle_ownership_type AS ENUM ('company', 'collaborator', 'rental');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'vehicle_status') THEN
    CREATE TYPE vehicle_status AS ENUM ('available', 'in_use', 'repair', 'rental_ended');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'energy_kind') THEN
    CREATE TYPE energy_kind AS ENUM ('diesel', 'petrol', 'hybrid', 'electric');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'mission_status') THEN
    CREATE TYPE mission_status AS ENUM ('draft', 'planned', 'assigned', 'in_progress', 'done', 'cancelled');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'mission_priority') THEN
    CREATE TYPE mission_priority AS ENUM ('standard', 'high', 'vip');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'billing_status') THEN
    CREATE TYPE billing_status AS ENUM ('quote_signed', 'to_invoice', 'invoice_sent', 'paid');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'assignment_role') THEN
    CREATE TYPE assignment_role AS ENUM ('lead_driver', 'support');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'stop_kind') THEN
    CREATE TYPE stop_kind AS ENUM ('pickup', 'waypoint', 'dropoff');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'invoice_status') THEN
    CREATE TYPE invoice_status AS ENUM ('draft', 'sent', 'paid', 'cancelled');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'invoice_document_type') THEN
    CREATE TYPE invoice_document_type AS ENUM ('client', 'external');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'invoice_payment_status') THEN
    CREATE TYPE invoice_payment_status AS ENUM ('paid', 'unpaid');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'invoice_external_flow') THEN
    CREATE TYPE invoice_external_flow AS ENUM ('payable', 'receivable');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'invoice_payment_method') THEN
    CREATE TYPE invoice_payment_method AS ENUM ('wire', 'card', 'cash', 'cheque');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'route_provider') THEN
    CREATE TYPE route_provider AS ENUM ('google_maps', 'manual');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'mission_alert_severity') THEN
    CREATE TYPE mission_alert_severity AS ENUM ('info', 'warning', 'critical');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'invoice_line_item_kind') THEN
    CREATE TYPE invoice_line_item_kind AS ENUM (
      'transport',
      'activity',
      'toll',
      'parking',
      'waiting',
      'adjustment',
      'other'
    );
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum
    WHERE enumtypid = 'stop_kind'::regtype
      AND enumlabel = 'activity'
  ) THEN
    ALTER TYPE stop_kind ADD VALUE 'activity';
  END IF;
END
$$;

CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  contact_name TEXT,
  billing_email TEXT,
  phone TEXT,
  billing_address TEXT,
  service_address TEXT,
  siret TEXT,
  vat_number TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS collaborators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL DEFAULT '',
  first_name TEXT,
  last_name TEXT,
  role collaborator_role NOT NULL DEFAULT 'guide',
  role_title TEXT NOT NULL DEFAULT '',
  phone TEXT,
  email TEXT,
  languages TEXT[] NOT NULL DEFAULT '{}',
  status collaborator_status NOT NULL DEFAULT 'available',
  availability_status collaborator_availability_status NOT NULL DEFAULT 'available',
  can_drive BOOLEAN NOT NULL DEFAULT FALSE,
  hourly_rate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS collaborator_languages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collaborator_id UUID NOT NULL REFERENCES collaborators(id) ON DELETE CASCADE,
  language_name TEXT NOT NULL,
  proficiency_level collaborator_language_level NOT NULL DEFAULT 'basic',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  owner_collaborator_id UUID REFERENCES collaborators(id) ON DELETE SET NULL,
  ownership_type vehicle_ownership_type NOT NULL DEFAULT 'company',
  label TEXT NOT NULL DEFAULT '',
  registration_plate TEXT NOT NULL,
  brand TEXT,
  model TEXT,
  color TEXT,
  seats INTEGER NOT NULL DEFAULT 4 CHECK (seats > 0),
  luggage_capacity INTEGER NOT NULL DEFAULT 0 CHECK (luggage_capacity >= 0),
  energy_kind energy_kind NOT NULL DEFAULT 'diesel',
  avg_consumption NUMERIC(8, 2) NOT NULL DEFAULT 6.50 CHECK (avg_consumption > 0),
  consumption_unit TEXT NOT NULL DEFAULT 'L/100 km',
  status vehicle_status NOT NULL DEFAULT 'available',
  rental_end_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (company_id, registration_plate)
);

CREATE TABLE IF NOT EXISTS fuel_price_reference (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  energy_kind energy_kind NOT NULL,
  unit_price NUMERIC(8, 3) NOT NULL CHECK (unit_price > 0),
  valid_from DATE NOT NULL,
  valid_to DATE
);

CREATE TABLE IF NOT EXISTS missions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE RESTRICT,
  code TEXT NOT NULL,
  service_type TEXT NOT NULL,
  service_date DATE NOT NULL,
  departure_time TIME NOT NULL,
  arrival_time TIME,
  distance_km NUMERIC(8, 2) NOT NULL DEFAULT 0,
  duration_minutes INTEGER NOT NULL DEFAULT 0,
  passengers_count INTEGER NOT NULL DEFAULT 0 CHECK (passengers_count >= 0),
  luggage_count INTEGER NOT NULL DEFAULT 0 CHECK (luggage_count >= 0),
  quoted_price NUMERIC(10, 2) NOT NULL DEFAULT 0,
  target_margin_rate NUMERIC(5, 4) NOT NULL DEFAULT 0.3000,
  tolls_estimate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  parking_estimate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  meeting_point TEXT,
  priority mission_priority NOT NULL DEFAULT 'standard',
  status mission_status NOT NULL DEFAULT 'planned',
  billing_status billing_status NOT NULL DEFAULT 'to_invoice',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (company_id, code)
);

CREATE TABLE IF NOT EXISTS mission_stops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  stop_order INTEGER NOT NULL CHECK (stop_order > 0),
  kind stop_kind NOT NULL,
  label TEXT NOT NULL,
  address_line TEXT NOT NULL,
  city TEXT,
  postal_code TEXT,
  country TEXT DEFAULT 'France',
  latitude NUMERIC(9, 6),
  longitude NUMERIC(9, 6),
  maps_place_id TEXT,
  activity_budget NUMERIC(10, 2) NOT NULL DEFAULT 0,
  scheduled_time TIME,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (mission_id, stop_order)
);

CREATE TABLE IF NOT EXISTS mission_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  collaborator_id UUID NOT NULL REFERENCES collaborators(id) ON DELETE RESTRICT,
  vehicle_id UUID REFERENCES vehicles(id) ON DELETE SET NULL,
  role assignment_role NOT NULL,
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (mission_id, role)
);

CREATE TABLE IF NOT EXISTS mission_vehicle_allocations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mission_id UUID NOT NULL UNIQUE REFERENCES missions(id) ON DELETE CASCADE,
  vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE RESTRICT,
  assigned_collaborator_id UUID REFERENCES collaborators(id) ON DELETE SET NULL,
  assignment_source TEXT NOT NULL DEFAULT 'manual',
  starts_at TIMESTAMPTZ,
  ends_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS mission_cost_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mission_id UUID NOT NULL UNIQUE REFERENCES missions(id) ON DELETE CASCADE,
  vehicle_id UUID REFERENCES vehicles(id) ON DELETE SET NULL,
  fuel_unit_price NUMERIC(8, 3),
  fuel_estimate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  staff_estimate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  tolls_estimate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  parking_estimate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  total_estimate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  margin_estimate NUMERIC(10, 2),
  margin_rate NUMERIC(7, 4),
  recommended_price NUMERIC(10, 2),
  calculated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS mission_route_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mission_id UUID NOT NULL UNIQUE REFERENCES missions(id) ON DELETE CASCADE,
  provider route_provider NOT NULL DEFAULT 'google_maps',
  origin_stop_id UUID REFERENCES mission_stops(id) ON DELETE SET NULL,
  destination_stop_id UUID REFERENCES mission_stops(id) ON DELETE SET NULL,
  distance_km NUMERIC(8, 2) NOT NULL DEFAULT 0 CHECK (distance_km >= 0),
  duration_minutes INTEGER NOT NULL DEFAULT 0 CHECK (duration_minutes >= 0),
  encoded_polyline TEXT,
  resolved_stop_coords JSONB,
  provider_payload JSONB,
  calculated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS mission_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  severity mission_alert_severity NOT NULL DEFAULT 'warning',
  alert_code TEXT NOT NULL,
  message TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (mission_id, alert_code)
);

CREATE TABLE IF NOT EXISTS invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  mission_id UUID UNIQUE REFERENCES missions(id) ON DELETE SET NULL,
  invoice_number TEXT NOT NULL,
  status invoice_status NOT NULL DEFAULT 'draft',
  document_type invoice_document_type NOT NULL DEFAULT 'client',
  source_label TEXT,
  payment_status invoice_payment_status NOT NULL DEFAULT 'unpaid',
  external_flow invoice_external_flow NOT NULL DEFAULT 'payable',
  payment_method invoice_payment_method NOT NULL DEFAULT 'wire',
  issued_at DATE,
  due_at DATE,
  settled_at DATE,
  currency_code TEXT NOT NULL DEFAULT 'EUR',
  subtotal_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  vat_10_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  vat_20_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  tax_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  total_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  paid_at DATE,
  seller_name TEXT,
  seller_address TEXT,
  seller_location TEXT,
  seller_phone TEXT,
  seller_evtc TEXT,
  seller_siret TEXT,
  client_name TEXT,
  client_address TEXT,
  client_location TEXT,
  client_siret TEXT,
  client_vat TEXT,
  client_contact TEXT,
  client_email TEXT,
  client_phone TEXT,
  service_description TEXT,
  service_date DATE,
  service_pickup TEXT,
  service_destination TEXT,
  service_passengers_count INTEGER NOT NULL DEFAULT 0 CHECK (service_passengers_count >= 0),
  service_distance_km NUMERIC(8, 2) NOT NULL DEFAULT 0 CHECK (service_distance_km >= 0),
  insurance_label TEXT,
  tax_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (company_id, invoice_number)
);

CREATE TABLE IF NOT EXISTS invoice_line_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  mission_stop_id UUID REFERENCES mission_stops(id) ON DELETE SET NULL,
  kind invoice_line_item_kind NOT NULL DEFAULT 'transport',
  description TEXT NOT NULL,
  quantity NUMERIC(10, 2) NOT NULL DEFAULT 1 CHECK (quantity >= 0),
  unit_label TEXT NOT NULL DEFAULT 'u',
  unit_price NUMERIC(10, 2) NOT NULL DEFAULT 0,
  tax_rate NUMERIC(5, 2) NOT NULL DEFAULT 0 CHECK (tax_rate >= 0),
  line_total NUMERIC(10, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invoice_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  payment_method invoice_payment_method NOT NULL DEFAULT 'wire',
  paid_amount NUMERIC(10, 2) NOT NULL CHECK (paid_amount >= 0),
  paid_at DATE NOT NULL,
  reference_label TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invoice_attachments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL UNIQUE REFERENCES invoices(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  content_type TEXT NOT NULL DEFAULT 'application/octet-stream',
  file_size_bytes BIGINT NOT NULL DEFAULT 0 CHECK (file_size_bytes >= 0),
  file_payload BYTEA,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Lignes financieres libres ou overrides de missions/factures, gardees en JSON pour rester flexibles.
CREATE TABLE IF NOT EXISTS finance_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  entry_kind TEXT NOT NULL DEFAULT 'manual',
  source_type TEXT NOT NULL DEFAULT 'manual',
  source_key TEXT NOT NULL DEFAULT '',
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Etat partage entre pages statiques : trajets, planning et selection courante.
CREATE TABLE IF NOT EXISTS app_shared_state (
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  state_key TEXT NOT NULL,
  payload JSONB NOT NULL DEFAULT 'null'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (company_id, state_key)
);

ALTER TABLE IF EXISTS collaborators
  ALTER COLUMN full_name SET DEFAULT '',
  ALTER COLUMN role_title SET DEFAULT '';

ALTER TABLE IF EXISTS collaborators
  ADD COLUMN IF NOT EXISTS first_name TEXT,
  ADD COLUMN IF NOT EXISTS last_name TEXT,
  ADD COLUMN IF NOT EXISTS role collaborator_role NOT NULL DEFAULT 'guide',
  ADD COLUMN IF NOT EXISTS availability_status collaborator_availability_status NOT NULL DEFAULT 'available',
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

ALTER TABLE IF EXISTS customers
  ADD COLUMN IF NOT EXISTS contact_name TEXT,
  ADD COLUMN IF NOT EXISTS service_address TEXT,
  ADD COLUMN IF NOT EXISTS siret TEXT,
  ADD COLUMN IF NOT EXISTS vat_number TEXT,
  ADD COLUMN IF NOT EXISTS notes TEXT,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

ALTER TABLE IF EXISTS vehicles
  ALTER COLUMN label SET DEFAULT '',
  ALTER COLUMN seats SET DEFAULT 4,
  ALTER COLUMN luggage_capacity SET DEFAULT 0,
  ALTER COLUMN ownership_type SET DEFAULT 'company',
  ALTER COLUMN energy_kind SET DEFAULT 'diesel',
  ALTER COLUMN avg_consumption SET DEFAULT 6.50,
  ALTER COLUMN consumption_unit SET DEFAULT 'L/100 km',
  ALTER COLUMN status SET DEFAULT 'available';

ALTER TABLE IF EXISTS vehicles
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

ALTER TABLE IF EXISTS missions
  ADD COLUMN IF NOT EXISTS meeting_point TEXT,
  ADD COLUMN IF NOT EXISTS priority mission_priority NOT NULL DEFAULT 'standard',
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

ALTER TABLE IF EXISTS mission_stops
  ADD COLUMN IF NOT EXISTS maps_place_id TEXT,
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

ALTER TABLE IF EXISTS invoices
  ALTER COLUMN customer_id DROP NOT NULL;

ALTER TABLE IF EXISTS invoices
  ADD COLUMN IF NOT EXISTS document_type invoice_document_type NOT NULL DEFAULT 'client',
  ADD COLUMN IF NOT EXISTS source_label TEXT,
  ADD COLUMN IF NOT EXISTS payment_status invoice_payment_status NOT NULL DEFAULT 'unpaid',
  ADD COLUMN IF NOT EXISTS external_flow invoice_external_flow NOT NULL DEFAULT 'payable',
  ADD COLUMN IF NOT EXISTS payment_method invoice_payment_method NOT NULL DEFAULT 'wire',
  ADD COLUMN IF NOT EXISTS settled_at DATE,
  ADD COLUMN IF NOT EXISTS currency_code TEXT NOT NULL DEFAULT 'EUR',
  ADD COLUMN IF NOT EXISTS vat_10_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS vat_20_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS seller_name TEXT,
  ADD COLUMN IF NOT EXISTS seller_address TEXT,
  ADD COLUMN IF NOT EXISTS seller_location TEXT,
  ADD COLUMN IF NOT EXISTS seller_phone TEXT,
  ADD COLUMN IF NOT EXISTS seller_evtc TEXT,
  ADD COLUMN IF NOT EXISTS seller_siret TEXT,
  ADD COLUMN IF NOT EXISTS client_name TEXT,
  ADD COLUMN IF NOT EXISTS client_address TEXT,
  ADD COLUMN IF NOT EXISTS client_location TEXT,
  ADD COLUMN IF NOT EXISTS client_siret TEXT,
  ADD COLUMN IF NOT EXISTS client_vat TEXT,
  ADD COLUMN IF NOT EXISTS client_contact TEXT,
  ADD COLUMN IF NOT EXISTS client_email TEXT,
  ADD COLUMN IF NOT EXISTS client_phone TEXT,
  ADD COLUMN IF NOT EXISTS service_description TEXT,
  ADD COLUMN IF NOT EXISTS service_date DATE,
  ADD COLUMN IF NOT EXISTS service_pickup TEXT,
  ADD COLUMN IF NOT EXISTS service_destination TEXT,
  ADD COLUMN IF NOT EXISTS service_passengers_count INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS service_distance_km NUMERIC(8, 2) NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS insurance_label TEXT,
  ADD COLUMN IF NOT EXISTS tax_note TEXT,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

UPDATE collaborators
SET first_name = COALESCE(NULLIF(first_name, ''), split_part(full_name, ' ', 1))
WHERE COALESCE(full_name, '') <> '';

UPDATE collaborators
SET last_name = COALESCE(
    NULLIF(last_name, ''),
    NULLIF(BTRIM(REGEXP_REPLACE(full_name, '^\S+\s*', '')), '')
  )
WHERE COALESCE(full_name, '') <> '';

UPDATE collaborators
SET role = CASE
  WHEN can_drive = TRUE THEN 'driver'::collaborator_role
  WHEN LOWER(role_title) LIKE '%chauffeur%' THEN 'driver'::collaborator_role
  ELSE 'guide'::collaborator_role
END
WHERE role IS NOT NULL;

UPDATE collaborators
SET availability_status = CASE status
  WHEN 'limited' THEN 'on_mission'::collaborator_availability_status
  WHEN 'off' THEN 'unavailable'::collaborator_availability_status
  ELSE 'available'::collaborator_availability_status
END
WHERE availability_status IS NOT NULL;

UPDATE collaborators
SET full_name = BTRIM(CONCAT_WS(' ', first_name, last_name))
WHERE COALESCE(full_name, '') = ''
  AND COALESCE(first_name, '') <> '';

UPDATE collaborators
SET role_title = CASE
  WHEN role = 'driver' THEN 'Chauffeur'
  ELSE 'Guide'
END
WHERE COALESCE(role_title, '') = '';

UPDATE customers
SET service_address = COALESCE(service_address, billing_address)
WHERE service_address IS NULL
  AND billing_address IS NOT NULL;

UPDATE vehicles
SET label = BTRIM(CONCAT_WS(' ', brand, model))
WHERE COALESCE(label, '') = ''
  AND (COALESCE(brand, '') <> '' OR COALESCE(model, '') <> '');

UPDATE invoices
SET payment_status = CASE
  WHEN paid_at IS NOT NULL OR status = 'paid' THEN 'paid'::invoice_payment_status
  ELSE 'unpaid'::invoice_payment_status
END
WHERE payment_status IS NOT NULL;

UPDATE invoices
SET settled_at = COALESCE(settled_at, paid_at)
WHERE settled_at IS NULL
  AND paid_at IS NOT NULL;

UPDATE invoices
SET source_label = CASE
  WHEN document_type = 'external' THEN 'Facture externe'
  ELSE 'Facture client'
END
WHERE COALESCE(source_label, '') = '';

CREATE UNIQUE INDEX IF NOT EXISTS idx_collaborator_languages_unique_name
  ON collaborator_languages (collaborator_id, LOWER(language_name));

INSERT INTO collaborator_languages (collaborator_id, language_name, proficiency_level)
SELECT
  collaborators.id,
  unnest_language.language_name,
  'basic'::collaborator_language_level
FROM collaborators
CROSS JOIN LATERAL UNNEST(collaborators.languages) AS unnest_language(language_name)
ON CONFLICT DO NOTHING;

CREATE INDEX IF NOT EXISTS idx_collaborators_company_status
  ON collaborators(company_id, status);

CREATE INDEX IF NOT EXISTS idx_customers_company_name
  ON customers(company_id, LOWER(name));

CREATE INDEX IF NOT EXISTS idx_collaborators_company_role_availability
  ON collaborators(company_id, role, availability_status);

CREATE INDEX IF NOT EXISTS idx_collaborator_languages_collaborator
  ON collaborator_languages(collaborator_id);

CREATE INDEX IF NOT EXISTS idx_vehicles_company_status
  ON vehicles(company_id, status);

CREATE INDEX IF NOT EXISTS idx_vehicles_company_ownership_status
  ON vehicles(company_id, ownership_type, status);

CREATE INDEX IF NOT EXISTS idx_vehicles_owner_collaborator
  ON vehicles(owner_collaborator_id);

CREATE INDEX IF NOT EXISTS idx_missions_company_date
  ON missions(company_id, service_date);

CREATE INDEX IF NOT EXISTS idx_missions_company_priority_date
  ON missions(company_id, priority, service_date);

CREATE INDEX IF NOT EXISTS idx_mission_stops_mission_order
  ON mission_stops(mission_id, stop_order);

CREATE INDEX IF NOT EXISTS idx_mission_assignments_collaborator
  ON mission_assignments(collaborator_id);

CREATE INDEX IF NOT EXISTS idx_mission_vehicle_allocations_vehicle
  ON mission_vehicle_allocations(vehicle_id);

CREATE INDEX IF NOT EXISTS idx_mission_route_snapshots_provider
  ON mission_route_snapshots(provider, calculated_at);

CREATE INDEX IF NOT EXISTS idx_mission_alerts_active
  ON mission_alerts(mission_id, is_active, severity);

CREATE INDEX IF NOT EXISTS idx_fuel_price_reference_lookup
  ON fuel_price_reference(company_id, energy_kind, valid_from);

CREATE INDEX IF NOT EXISTS idx_invoices_company_document_payment
  ON invoices(company_id, document_type, payment_status);

CREATE INDEX IF NOT EXISTS idx_invoices_service_date
  ON invoices(service_date);

CREATE INDEX IF NOT EXISTS idx_invoice_line_items_invoice
  ON invoice_line_items(invoice_id);

CREATE INDEX IF NOT EXISTS idx_invoice_payments_invoice
  ON invoice_payments(invoice_id, paid_at);

CREATE INDEX IF NOT EXISTS idx_finance_entries_company_source
  ON finance_entries(company_id, source_type, source_key);

CREATE INDEX IF NOT EXISTS idx_app_shared_state_company_key
  ON app_shared_state(company_id, state_key);
