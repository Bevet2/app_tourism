# PostgreSQL

Cette couche PostgreSQL sert a sortir l'application du `localStorage` et a poser un modele
relationnel exploitable par un vrai backend.

## Fichiers

- `schema.sql` : schema relationnel relie aux pages `calendrier`, `trajets`, `collaborateurs`,
  `vehicules` et `factures`.
- `seed.sql` : jeu de donnees de depart coherent avec ce schema.

## Mapping par page

- `Mon Calendrier` et `Trajets`
  - `missions`
  - `mission_stops`
  - `mission_assignments`
  - `mission_vehicle_allocations`
  - `mission_route_snapshots`
  - `mission_cost_snapshots`
  - `mission_alerts`
- `Mes Collaborateurs`
  - `collaborators`
  - `collaborator_languages`
- `Mes Vehicules`
  - `vehicles`
  - `mission_vehicle_allocations`
- `Factures`
  - `invoices`
  - `invoice_line_items`
  - `invoice_payments`
  - `invoice_attachments`
- Referentiels partages
  - `companies`
  - `customers`
  - `fuel_price_reference`

## Liens metier

- `companies` pilote tout le reste.
- `customers` alimente `missions` et `invoices`.
- `collaborators` se relie a `collaborator_languages`, peut posseder un `vehicle`, et peut etre
  affecte a une `mission`.
- `vehicles` peut appartenir a la societe, a un collaborateur ou a une location, puis etre
  reserve dans `mission_vehicle_allocations`.
- `missions` centralise la course, le client, les horaires, la priorite, le point de rendez-vous
  et le statut de facturation.
- `mission_stops` decompose une mission en `pickup`, `activity`, `waypoint` et `dropoff`, avec
  budget activite, coordonnees et `maps_place_id`.
- `mission_assignments` porte l'equipe humaine de la mission.
- `mission_vehicle_allocations` porte le vehicule de mission sans melanger cette relation avec les
  roles humains.
- `mission_route_snapshots` persiste la route calculee, la distance, la duree et la geometrie.
- `mission_cost_snapshots` persiste les estimations de cout et de prix conseille.
- `mission_alerts` stocke les alertes planning exploitables dans le calendrier.
- `invoices` capture l'entete facture et peut se rattacher a une mission.
- `invoice_line_items` detaille ce qui est facture : transport, activite, peage, parking, attente,
  ajustement.
- `invoice_payments` trace les reglements reels.
- `invoice_attachments` stocke la piece jointe binaire de la facture.

## Chargement

```sql
\i database/schema.sql
\i database/seed.sql
```

## Notes

- Le front actuel ne lit pas encore directement cette base. Le schema prepare le backend.
- Le schema couvre les champs vus aujourd'hui dans les pages `calendrier`, `trajets`,
  `collaborateurs`, `vehicules` et `factures`.
- Les tables `mission_vehicle_allocations`, `mission_route_snapshots`, `mission_alerts`,
  `invoice_line_items` et `invoice_payments` ont ete ajoutees pour mieux separer les domaines
  planning, routage et facturation.
