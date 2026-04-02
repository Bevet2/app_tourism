# PostgreSQL

Le projet reste une maquette front statique, donc la couche PostgreSQL fournie ici sert de base de travail pour le futur back.

## Fichiers

- `schema.sql` : structure relationnelle des tables principales.
- `seed.sql` : jeu de donnees initial coherent avec les pages `calendrier` et `trajets`.

## Couverture metier

- `collaborators` : equipe mobilisable, statut, langues, cout horaire.
- `vehicles` : flotte societe, vehicules de collaborateurs ou locations.
- `missions` : trajet, date, horaire, passagers, bagages, prix vendu et marge cible.
- `mission_stops` : prise en charge, waypoints, destination, coordonnees, budget activite.
- `mission_assignments` : chauffeur principal, renfort, vehicule rattache.
- `mission_cost_snapshots` : estimation carburant, cout equipe, budget activites, prix conseille, marge.
- `invoices` : suivi du document de facturation par mission.

## Chargement

```sql
\i database/schema.sql
\i database/seed.sql
```
