CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'collaborator_status') THEN
    CREATE TYPE collaborator_status AS ENUM ('available', 'limited', 'off');
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
  billing_email TEXT,
  phone TEXT,
  billing_address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS collaborators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  role_title TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  languages TEXT[] NOT NULL DEFAULT '{}',
  status collaborator_status NOT NULL DEFAULT 'available',
  can_drive BOOLEAN NOT NULL DEFAULT FALSE,
  hourly_rate NUMERIC(10, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  owner_collaborator_id UUID REFERENCES collaborators(id) ON DELETE SET NULL,
  ownership_type vehicle_ownership_type NOT NULL,
  label TEXT NOT NULL,
  registration_plate TEXT NOT NULL,
  brand TEXT,
  model TEXT,
  color TEXT,
  seats INTEGER NOT NULL CHECK (seats > 0),
  luggage_capacity INTEGER NOT NULL DEFAULT 0 CHECK (luggage_capacity >= 0),
  energy_kind energy_kind NOT NULL DEFAULT 'diesel',
  avg_consumption NUMERIC(8, 2) NOT NULL CHECK (avg_consumption > 0),
  consumption_unit TEXT NOT NULL DEFAULT 'L/100 km',
  status vehicle_status NOT NULL DEFAULT 'available',
  rental_end_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
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
  status mission_status NOT NULL DEFAULT 'planned',
  billing_status billing_status NOT NULL DEFAULT 'to_invoice',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
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
  activity_budget NUMERIC(10, 2) NOT NULL DEFAULT 0,
  scheduled_time TIME,
  notes TEXT,
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

CREATE TABLE IF NOT EXISTS invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE RESTRICT,
  mission_id UUID UNIQUE REFERENCES missions(id) ON DELETE SET NULL,
  invoice_number TEXT NOT NULL,
  status invoice_status NOT NULL DEFAULT 'draft',
  issued_at DATE,
  due_at DATE,
  subtotal_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  tax_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  total_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
  paid_at DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (company_id, invoice_number)
);

CREATE INDEX IF NOT EXISTS idx_collaborators_company_status
  ON collaborators(company_id, status);

CREATE INDEX IF NOT EXISTS idx_vehicles_company_status
  ON vehicles(company_id, status);

CREATE INDEX IF NOT EXISTS idx_missions_company_date
  ON missions(company_id, service_date);

CREATE INDEX IF NOT EXISTS idx_mission_assignments_collaborator
  ON mission_assignments(collaborator_id);

CREATE INDEX IF NOT EXISTS idx_fuel_price_reference_lookup
  ON fuel_price_reference(company_id, energy_kind, valid_from);
