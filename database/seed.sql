INSERT INTO companies (id, name)
VALUES ('11111111-1111-1111-1111-111111111111', 'Route Pilote')
ON CONFLICT (id) DO NOTHING;

INSERT INTO customers (
  id,
  company_id,
  name,
  contact_name,
  billing_email,
  phone,
  billing_address,
  service_address,
  siret,
  vat_number,
  notes
)
VALUES
  (
    '22222222-2222-2222-2222-222222222221',
    '11111111-1111-1111-1111-111111111111',
    'Societe exemple',
    'Sophie Martin',
    'contact@client-exemple.fr',
    '0601020304',
    '24, rue des Voyages, 69000 Lyon',
    '24, rue des Voyages, 69000 Lyon',
    '12345678900011',
    'FR12345678901',
    'Compte client historique pour les transferts prives.'
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    '11111111-1111-1111-1111-111111111111',
    'Maison Azur Travel',
    'Mario Costa',
    'ops@maisonazur.test',
    '+33 1 40 00 00 01',
    '12, avenue du Centre, 75000 Paris',
    'Hotels partenaires rive droite, Paris',
    '33999888777665',
    'FR33999888777',
    'Client agence pour transferts aeroport et mises a disposition.'
  ),
  (
    '22222222-2222-2222-2222-222222222223',
    '11111111-1111-1111-1111-111111111111',
    'Nova Executive Mobility',
    'Claire Bernard',
    'dispatch@nova.test',
    '+33 4 78 00 00 02',
    '8, place des Affaires, 69000 Lyon',
    'Pole affaires Lyon Part-Dieu',
    '55224466889977',
    'FR55224466889',
    'Client corporate avec besoins planning et facturation centralisee.'
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO collaborators (
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
  hourly_rate
)
VALUES
  (
    '33333333-3333-3333-3333-333333333331',
    '11111111-1111-1111-1111-111111111111',
    'Jade Bouvier',
    'Jade',
    'Bouvier',
    'driver',
    'Chauffeur premium',
    ARRAY['Francais', 'Anglais'],
    'available',
    'available',
    TRUE,
    34.00
  ),
  (
    '33333333-3333-3333-3333-333333333332',
    '11111111-1111-1111-1111-111111111111',
    'Noa Marchand',
    'Noa',
    'Marchand',
    'driver',
    'Chauffeur aeroport',
    ARRAY['Francais', 'Anglais', 'Italien'],
    'available',
    'available',
    TRUE,
    31.00
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    '11111111-1111-1111-1111-111111111111',
    'Lucas Perrin',
    'Lucas',
    'Perrin',
    'driver',
    'Chauffeur renfort',
    ARRAY['Francais', 'Anglais'],
    'limited',
    'on_mission',
    TRUE,
    29.00
  ),
  (
    '33333333-3333-3333-3333-333333333334',
    '11111111-1111-1111-1111-111111111111',
    'Salma Riviere',
    'Salma',
    'Riviere',
    'guide',
    'Guide VIP',
    ARRAY['Francais', 'Anglais', 'Arabe'],
    'available',
    'available',
    FALSE,
    26.00
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO collaborator_languages (id, collaborator_id, language_name, proficiency_level)
VALUES
  ('3f100001-0000-0000-0000-000000000001', '33333333-3333-3333-3333-333333333331', 'Francais', 'fluent'),
  ('3f100001-0000-0000-0000-000000000002', '33333333-3333-3333-3333-333333333331', 'Anglais', 'conversational'),
  ('3f100001-0000-0000-0000-000000000003', '33333333-3333-3333-3333-333333333332', 'Francais', 'fluent'),
  ('3f100001-0000-0000-0000-000000000004', '33333333-3333-3333-3333-333333333332', 'Anglais', 'fluent'),
  ('3f100001-0000-0000-0000-000000000005', '33333333-3333-3333-3333-333333333332', 'Italien', 'intermediate'),
  ('3f100001-0000-0000-0000-000000000006', '33333333-3333-3333-3333-333333333333', 'Francais', 'fluent'),
  ('3f100001-0000-0000-0000-000000000007', '33333333-3333-3333-3333-333333333333', 'Anglais', 'intermediate'),
  ('3f100001-0000-0000-0000-000000000008', '33333333-3333-3333-3333-333333333334', 'Francais', 'fluent'),
  ('3f100001-0000-0000-0000-000000000009', '33333333-3333-3333-3333-333333333334', 'Anglais', 'conversational'),
  ('3f100001-0000-0000-0000-000000000010', '33333333-3333-3333-3333-333333333334', 'Arabe', 'fluent')
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
  status,
  rental_end_date
)
VALUES
  (
    '44444444-4444-4444-4444-444444444441',
    '11111111-1111-1111-1111-111111111111',
    NULL,
    'company',
    'Mercedes Classe V',
    'GA-402-LT',
    'Mercedes',
    'Classe V',
    'Noir obsidienne',
    7,
    6,
    'diesel',
    8.60,
    'L/100 km',
    'available',
    NULL
  ),
  (
    '44444444-4444-4444-4444-444444444442',
    '11111111-1111-1111-1111-111111111111',
    NULL,
    'company',
    'Mercedes Vito Tourer',
    'FT-118-MR',
    'Mercedes',
    'Vito Tourer',
    'Gris graphite',
    8,
    8,
    'diesel',
    8.90,
    'L/100 km',
    'available',
    NULL
  ),
  (
    '44444444-4444-4444-4444-444444444443',
    '11111111-1111-1111-1111-111111111111',
    '33333333-3333-3333-3333-333333333331',
    'collaborator',
    'Peugeot 508 SW',
    'CG-771-NE',
    'Peugeot',
    '508 SW',
    'Bleu nuit',
    4,
    4,
    'diesel',
    6.10,
    'L/100 km',
    'available',
    NULL
  ),
  (
    '44444444-4444-4444-4444-444444444444',
    '11111111-1111-1111-1111-111111111111',
    NULL,
    'rental',
    'Skoda Kodiaq',
    'GM-235-AV',
    'Skoda',
    'Kodiaq',
    'Argent',
    6,
    5,
    'hybrid',
    7.40,
    'L/100 km',
    'in_use',
    CURRENT_DATE + 10
  )
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
  meeting_point,
  priority,
  status,
  billing_status,
  notes
)
VALUES
  (
    '66666666-6666-6666-6666-666666666661',
    '11111111-1111-1111-1111-111111111111',
    '22222222-2222-2222-2222-222222222222',
    'RP-301',
    'Transfert aeroport',
    CURRENT_DATE,
    '08:10',
    '09:05',
    32.00,
    55,
    4,
    6,
    210.00,
    0.3000,
    6.00,
    14.00,
    'Sortie porte 8',
    'high',
    'assigned',
    'to_invoice',
    'Couple americain et deux enfants, siege rehausseur a prevoir.'
  ),
  (
    '66666666-6666-6666-6666-666666666662',
    '11111111-1111-1111-1111-111111111111',
    '22222222-2222-2222-2222-222222222223',
    'RP-305',
    'Seminaire entreprise',
    CURRENT_DATE + 3,
    '08:30',
    '10:35',
    144.00,
    125,
    7,
    7,
    540.00,
    0.3000,
    24.00,
    16.00,
    'Accueil VIP devant le hall affaires',
    'vip',
    'planned',
    'to_invoice',
    'Besoin d''un vehicule 7+ places et d''un chauffeur deja briefe.'
  )
ON CONFLICT (company_id, code) DO NOTHING;

INSERT INTO mission_stops (
  id,
  mission_id,
  stop_order,
  kind,
  label,
  address_line,
  city,
  latitude,
  longitude,
  maps_place_id,
  activity_budget,
  scheduled_time
)
VALUES
  (
    '77777777-7777-7777-7777-777777777771',
    '66666666-6666-6666-6666-666666666661',
    1,
    'pickup',
    'CDG Terminal 2',
    'Terminal 2E, Roissy',
    'Roissy-en-France',
    49.004400,
    2.571500,
    'gmp-cdg-terminal-2e',
    0.00,
    '08:10'
  ),
  (
    '77777777-7777-7777-7777-777777777772',
    '66666666-6666-6666-6666-666666666661',
    2,
    'dropoff',
    'Hotels rive droite',
    'Paris 1er et 8e',
    'Paris',
    48.870600,
    2.331800,
    'gmp-hotels-rive-droite',
    0.00,
    '09:05'
  ),
  (
    '77777777-7777-7777-7777-777777777773',
    '66666666-6666-6666-6666-666666666662',
    1,
    'pickup',
    'Part-Dieu',
    'Hall affaires, sortie Villette',
    'Lyon',
    45.760900,
    4.859900,
    'gmp-part-dieu-villette',
    0.00,
    '08:30'
  ),
  (
    '77777777-7777-7777-7777-777777777774',
    '66666666-6666-6666-6666-666666666662',
    2,
    'activity',
    'Briefing client',
    '1, esplanade de l''Europe',
    'Annecy',
    45.900300,
    6.128500,
    'gmp-annecy-briefing',
    180.00,
    '10:10'
  ),
  (
    '77777777-7777-7777-7777-777777777775',
    '66666666-6666-6666-6666-666666666662',
    3,
    'dropoff',
    'Imperial Palace',
    'Allee de l''Imperial',
    'Annecy',
    45.899200,
    6.129400,
    'gmp-imperial-palace-annecy',
    0.00,
    '10:35'
  )
ON CONFLICT (mission_id, stop_order) DO NOTHING;

INSERT INTO mission_assignments (id, mission_id, collaborator_id, vehicle_id, role)
VALUES
  (
    '88888888-8888-8888-8888-888888888881',
    '66666666-6666-6666-6666-666666666661',
    '33333333-3333-3333-3333-333333333332',
    '44444444-4444-4444-4444-444444444441',
    'lead_driver'
  ),
  (
    '88888888-8888-8888-8888-888888888882',
    '66666666-6666-6666-6666-666666666662',
    '33333333-3333-3333-3333-333333333332',
    NULL,
    'lead_driver'
  )
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
  (
    '99999999-9999-9999-9999-999999999991',
    '66666666-6666-6666-6666-666666666661',
    '44444444-4444-4444-4444-444444444441',
    1.860,
    5.90,
    28.42,
    6.00,
    14.00,
    54.32,
    155.68,
    0.7413,
    80.00
  ),
  (
    '99999999-9999-9999-9999-999999999992',
    '66666666-6666-6666-6666-666666666662',
    NULL,
    1.860,
    25.40,
    64.00,
    24.00,
    16.00,
    309.40,
    230.60,
    0.4270,
    442.00
  )
ON CONFLICT (mission_id) DO NOTHING;

INSERT INTO mission_vehicle_allocations (
  id,
  mission_id,
  vehicle_id,
  assigned_collaborator_id,
  assignment_source,
  starts_at,
  ends_at,
  notes
)
VALUES
  (
    '8a8a8a8a-8a8a-8a8a-8a8a-8a8a8a8a8a81',
    '66666666-6666-6666-6666-666666666661',
    '44444444-4444-4444-4444-444444444441',
    '33333333-3333-3333-3333-333333333332',
    'planning',
    (CURRENT_DATE + TIME '08:00')::timestamptz,
    (CURRENT_DATE + TIME '09:30')::timestamptz,
    'Vehicule reserve depuis le planning pour le transfert aeroport.'
  )
ON CONFLICT (mission_id) DO NOTHING;

INSERT INTO mission_route_snapshots (
  id,
  mission_id,
  provider,
  origin_stop_id,
  destination_stop_id,
  distance_km,
  duration_minutes,
  encoded_polyline,
  resolved_stop_coords,
  provider_payload
)
VALUES
  (
    '9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a91',
    '66666666-6666-6666-6666-666666666661',
    'google_maps',
    '77777777-7777-7777-7777-777777777771',
    '77777777-7777-7777-7777-777777777772',
    32.00,
    55,
    'encoded-rp-301',
    '[{"stopId":"77777777-7777-7777-7777-777777777771","lat":49.0044,"lng":2.5715},{"stopId":"77777777-7777-7777-7777-777777777772","lat":48.8706,"lng":2.3318}]'::jsonb,
    '{"waypointCount":0,"source":"seed"}'::jsonb
  ),
  (
    '9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a92',
    '66666666-6666-6666-6666-666666666662',
    'google_maps',
    '77777777-7777-7777-7777-777777777773',
    '77777777-7777-7777-7777-777777777775',
    144.00,
    125,
    'encoded-rp-305',
    '[{"stopId":"77777777-7777-7777-7777-777777777773","lat":45.7609,"lng":4.8599},{"stopId":"77777777-7777-7777-7777-777777777774","lat":45.9003,"lng":6.1285},{"stopId":"77777777-7777-7777-7777-777777777775","lat":45.8992,"lng":6.1294}]'::jsonb,
    '{"waypointCount":1,"source":"seed"}'::jsonb
  )
ON CONFLICT (mission_id) DO NOTHING;

INSERT INTO mission_alerts (
  id,
  mission_id,
  severity,
  alert_code,
  message,
  is_active
)
VALUES
  (
    '7a7a7a7a-7a7a-7a7a-7a7a-7a7a7a7a7a71',
    '66666666-6666-6666-6666-666666666662',
    'critical',
    'vehicle_unassigned',
    'Mission VIP sans vehicule encore reserve.',
    TRUE
  )
ON CONFLICT (mission_id, alert_code) DO NOTHING;

INSERT INTO invoices (
  id,
  company_id,
  customer_id,
  mission_id,
  invoice_number,
  status,
  document_type,
  source_label,
  payment_status,
  external_flow,
  payment_method,
  issued_at,
  due_at,
  settled_at,
  subtotal_amount,
  vat_10_amount,
  vat_20_amount,
  tax_amount,
  total_amount,
  seller_name,
  seller_address,
  seller_location,
  seller_phone,
  seller_evtc,
  seller_siret,
  client_name,
  client_address,
  client_location,
  client_siret,
  client_vat,
  client_contact,
  client_email,
  client_phone,
  service_description,
  service_date,
  service_pickup,
  service_destination,
  service_passengers_count,
  service_distance_km,
  insurance_label,
  tax_note
)
VALUES
  (
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1',
    '11111111-1111-1111-1111-111111111111',
    '22222222-2222-2222-2222-222222222221',
    '66666666-6666-6666-6666-666666666661',
    '0027',
    'paid',
    'client',
    'Facture client',
    'paid',
    'receivable',
    'wire',
    CURRENT_DATE,
    CURRENT_DATE + 30,
    CURRENT_DATE + 7,
    120.00,
    0.00,
    0.00,
    0.00,
    120.00,
    'Activite VTC Exemple',
    '12, avenue du Centre',
    '75000 Paris',
    '0612345678',
    'EVTC000000000',
    '12345678900010',
    'Societe exemple',
    '24, rue des Voyages',
    '69000 Lyon',
    '12345678900011',
    'FR12345678901',
    'Sophie Martin',
    'contact@client-exemple.fr',
    '0601020304',
    'Transfert touristique prive',
    CURRENT_DATE,
    'Gare centrale',
    'Centre-ville',
    4,
    35.00,
    'Assurance VTC exemple',
    'TVA non applicable conformement a l''article 293 B du CGI.'
  ),
  (
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2',
    '11111111-1111-1111-1111-111111111111',
    NULL,
    NULL,
    'EXT-2026-001',
    'sent',
    'external',
    'Facture externe',
    'unpaid',
    'payable',
    'wire',
    CURRENT_DATE - 2,
    CURRENT_DATE + 15,
    NULL,
    95.00,
    0.00,
    19.00,
    19.00,
    114.00,
    'Garage du Littoral',
    '18, rue des Ateliers',
    '13008 Marseille',
    '0491000000',
    NULL,
    '88997766554433',
    'Route Pilote',
    '12, avenue du Centre',
    '75000 Paris',
    NULL,
    NULL,
    'Mario',
    'gestion@route-pilote.test',
    '0612345678',
    'Remplacement plaquettes et controle freinage',
    CURRENT_DATE - 2,
    NULL,
    NULL,
    0,
    0.00,
    NULL,
    'TVA 20% incluse sur la reparation.'
  )
ON CONFLICT (company_id, invoice_number) DO NOTHING;

INSERT INTO invoice_attachments (
  id,
  invoice_id,
  file_name,
  content_type,
  file_size_bytes,
  file_payload
)
VALUES
  (
    'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2',
    'facture-garage-exemple.txt',
    'text/plain',
    OCTET_LENGTH(CONVERT_TO('Facture garage exemple - remplacement plaquettes et controle freinage.', 'UTF8')),
    CONVERT_TO('Facture garage exemple - remplacement plaquettes et controle freinage.', 'UTF8')
  )
ON CONFLICT (invoice_id) DO NOTHING;

INSERT INTO invoice_line_items (
  id,
  invoice_id,
  mission_stop_id,
  kind,
  description,
  quantity,
  unit_label,
  unit_price,
  tax_rate,
  line_total
)
VALUES
  (
    'c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1',
    NULL,
    'transport',
    'Transfert prive aeroport -> hotels rive droite',
    1,
    'mission',
    100.00,
    0.00,
    100.00
  ),
  (
    'c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c2',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1',
    NULL,
    'parking',
    'Parking aeroport et accueil',
    1,
    'forfait',
    20.00,
    0.00,
    20.00
  ),
  (
    'c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c3',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2',
    NULL,
    'other',
    'Remplacement plaquettes et controle freinage',
    1,
    'intervention',
    95.00,
    20.00,
    114.00
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO invoice_payments (
  id,
  invoice_id,
  payment_method,
  paid_amount,
  paid_at,
  reference_label,
  notes
)
VALUES
  (
    'd1d1d1d1-d1d1-d1d1-d1d1-d1d1d1d1d1d1',
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1',
    'wire',
    120.00,
    CURRENT_DATE + 7,
    'VIR-0027',
    'Reglement client complet rattache a la mission RP-301.'
  )
ON CONFLICT (id) DO NOTHING;
