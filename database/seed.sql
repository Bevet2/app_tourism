INSERT INTO companies (id, name)
VALUES ('11111111-1111-1111-1111-111111111111', 'Route Pilote')
ON CONFLICT (id) DO NOTHING;

INSERT INTO customers (id, company_id, name, billing_email, phone)
VALUES
  ('22222222-2222-2222-2222-222222222221', '11111111-1111-1111-1111-111111111111', 'Maison Azur Travel', 'ops@maisonazur.test', '+33 1 40 00 00 01'),
  ('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'Nova Executive Mobility', 'dispatch@nova.test', '+33 4 78 00 00 02')
ON CONFLICT (id) DO NOTHING;

INSERT INTO collaborators (id, company_id, full_name, role_title, languages, status, can_drive, hourly_rate)
VALUES
  ('33333333-3333-3333-3333-333333333331', '11111111-1111-1111-1111-111111111111', 'Jade Bouvier', 'Chauffeur premium', ARRAY['FR', 'EN'], 'available', TRUE, 34.00),
  ('33333333-3333-3333-3333-333333333332', '11111111-1111-1111-1111-111111111111', 'Noa Marchand', 'Chauffeur aeroport', ARRAY['FR', 'EN', 'IT'], 'available', TRUE, 31.00),
  ('33333333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'Lucas Perrin', 'Chauffeur renfort', ARRAY['FR', 'EN'], 'limited', TRUE, 29.00),
  ('33333333-3333-3333-3333-333333333334', '11111111-1111-1111-1111-111111111111', 'Salma Riviere', 'Accompagnatrice VIP', ARRAY['FR', 'EN', 'AR'], 'available', FALSE, 26.00)
ON CONFLICT (id) DO NOTHING;

INSERT INTO vehicles (
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
  status
)
VALUES
  ('44444444-4444-4444-4444-444444444441', '11111111-1111-1111-1111-111111111111', NULL, 'company', 'Mercedes Classe V', 'GA-402-LT', 'Mercedes', 'Classe V', 'Noir obsidienne', 7, 6, 'diesel', 8.60, 'L/100 km', 'available'),
  ('44444444-4444-4444-4444-444444444442', '11111111-1111-1111-1111-111111111111', NULL, 'company', 'Mercedes Vito Tourer', 'FT-118-MR', 'Mercedes', 'Vito Tourer', 'Gris graphite', 8, 8, 'diesel', 8.90, 'L/100 km', 'available'),
  ('44444444-4444-4444-4444-444444444443', '11111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333331', 'collaborator', 'Peugeot 508 SW', 'CG-771-NE', 'Peugeot', '508 SW', 'Bleu nuit', 4, 4, 'diesel', 6.10, 'L/100 km', 'available')
ON CONFLICT (company_id, registration_plate) DO NOTHING;

INSERT INTO fuel_price_reference (id, company_id, energy_kind, unit_price, valid_from)
VALUES
  ('55555555-5555-5555-5555-555555555551', '11111111-1111-1111-1111-111111111111', 'diesel', 1.860, CURRENT_DATE),
  ('55555555-5555-5555-5555-555555555552', '11111111-1111-1111-1111-111111111111', 'hybrid', 1.910, CURRENT_DATE),
  ('55555555-5555-5555-5555-555555555553', '11111111-1111-1111-1111-111111111111', 'electric', 0.240, CURRENT_DATE)
ON CONFLICT (id) DO NOTHING;

INSERT INTO missions (
  id,
  company_id,
  customer_id,
  code,
  service_type,
  service_date,
  departure_time,
  arrival_time,
  distance_km,
  duration_minutes,
  passengers_count,
  luggage_count,
  quoted_price,
  target_margin_rate,
  tolls_estimate,
  parking_estimate,
  status,
  billing_status,
  notes
)
VALUES
  ('66666666-6666-6666-6666-666666666661', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222221', 'RP-301', 'Transfert aeroport', CURRENT_DATE, '08:10', '09:05', 32.00, 55, 4, 6, 210.00, 0.3000, 6.00, 14.00, 'assigned', 'to_invoice', 'Couple americain et deux enfants, siege rehausseur a prevoir.'),
  ('66666666-6666-6666-6666-666666666662', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', 'RP-305', 'Seminaire entreprise', CURRENT_DATE + INTERVAL '3 day', '08:30', '10:35', 144.00, 125, 7, 7, 540.00, 0.3000, 24.00, 16.00, 'planned', 'to_invoice', 'Besoin d''un vehicule 7+ places et d''un chauffeur deja briefe.')
ON CONFLICT (company_id, code) DO NOTHING;

INSERT INTO mission_stops (id, mission_id, stop_order, kind, label, address_line, city, latitude, longitude, activity_budget, scheduled_time)
VALUES
  ('77777777-7777-7777-7777-777777777771', '66666666-6666-6666-6666-666666666661', 1, 'pickup', 'CDG Terminal 2', 'Terminal 2E, Roissy', 'Roissy-en-France', 49.004400, 2.571500, 0.00, '08:10'),
  ('77777777-7777-7777-7777-777777777772', '66666666-6666-6666-6666-666666666661', 2, 'dropoff', 'Hotels rive droite', 'Paris 1er et 8e', 'Paris', 48.870600, 2.331800, 0.00, '09:05'),
  ('77777777-7777-7777-7777-777777777773', '66666666-6666-6666-6666-666666666662', 1, 'pickup', 'Part-Dieu', 'Hall affaires, sortie Villette', 'Lyon', 45.760900, 4.859900, 0.00, '08:30'),
  ('77777777-7777-7777-7777-777777777774', '66666666-6666-6666-6666-666666666662', 2, 'dropoff', 'Imperial Palace', 'Allee de l''Imperial', 'Annecy', 45.899200, 6.129400, 0.00, '10:35')
ON CONFLICT (mission_id, stop_order) DO NOTHING;

INSERT INTO mission_assignments (id, mission_id, collaborator_id, vehicle_id, role)
VALUES
  ('88888888-8888-8888-8888-888888888881', '66666666-6666-6666-6666-666666666661', '33333333-3333-3333-3333-333333333332', '44444444-4444-4444-4444-444444444441', 'lead_driver'),
  ('88888888-8888-8888-8888-888888888882', '66666666-6666-6666-6666-666666666662', '33333333-3333-3333-3333-333333333332', NULL, 'lead_driver')
ON CONFLICT (mission_id, role) DO NOTHING;

INSERT INTO mission_cost_snapshots (
  id,
  mission_id,
  vehicle_id,
  fuel_unit_price,
  fuel_estimate,
  staff_estimate,
  tolls_estimate,
  parking_estimate,
  total_estimate,
  margin_estimate,
  margin_rate,
  recommended_price
)
VALUES
  ('99999999-9999-9999-9999-999999999991', '66666666-6666-6666-6666-666666666661', '44444444-4444-4444-4444-444444444441', 1.860, 5.90, 28.42, 6.00, 14.00, 54.32, 155.68, 0.7413, 80.00)
ON CONFLICT (mission_id) DO NOTHING;

INSERT INTO invoices (
  id,
  company_id,
  customer_id,
  mission_id,
  invoice_number,
  status,
  issued_at,
  due_at,
  subtotal_amount,
  tax_amount,
  total_amount
)
VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222221', '66666666-6666-6666-6666-666666666661', 'RP-INV-2026-001', 'sent', CURRENT_DATE, CURRENT_DATE + INTERVAL '30 day', 210.00, 42.00, 252.00)
ON CONFLICT (company_id, invoice_number) DO NOTHING;
