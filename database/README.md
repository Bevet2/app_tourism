# PostgreSQL

Le projet reste une maquette front statique, donc cette couche PostgreSQL sert de base de travail
pour sortir progressivement du `localStorage` et garder les donnees meme si le cache navigateur
est vide.

## Fichiers

- `schema.sql` : schema relationnel complet, avec compatibilite `calendrier / trajets` et
  persistance pour `collaborateurs`, `vehicules` et `factures`.
- `seed.sql` : jeu de donnees initial coherent avec l'application actuelle.

## Couverture metier

- `collaborators` : base equipe avec prenom, nom, role, disponibilite, cout horaire.
- `collaborator_languages` : langues et niveau de maitrise pour chaque collaborateur.
- `vehicles` : flotte societe, vehicules de collaborateurs et locations.
- `missions` : trajets planifies, horaires, passagers, bagages, marge cible.
- `mission_stops` : prise en charge, etapes, destination et budget activite.
- `mission_assignments` : chauffeur principal, renfort et vehicule rattache.
- `mission_cost_snapshots` : estimation carburant, cout equipe, marge et prix conseille.
- `invoices` : factures client et factures externes, paiement, reglages et donnees du document.
- `invoice_attachments` : piece jointe d'une facture externe, stockee en `BYTEA`.

## Chargement

```sql
\i database/schema.sql
\i database/seed.sql
```

## Notes

- Le front actuel lit encore depuis le navigateur. Cette base prepare la persistance serveur.
- Le schema reste compatible avec la refonte `calendrier / trajets`.
- Les tables `collaborators`, `vehicles` et `invoices` ont ete etendues pour couvrir les champs
  utilises aujourd'hui dans l'application.
