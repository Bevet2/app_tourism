# app_tourism

Webapp d'accueil pour une application de tourisme.

## Lancer l'application

Le projet peut maintenant tourner avec un serveur Node qui sert le front et l'API PostgreSQL.

1. Installer les dependances :

```powershell
npm.cmd install
```

2. Creer `db-config.local.json` a partir de [db-config.example.json](c:/Users/Boyer-Vidal/Desktop/app_tourism/db-config.example.json)
   avec votre vraie connexion PostgreSQL.

3. Demarrer l'application :

```powershell
npm.cmd start
```

L'application est alors disponible sur `http://127.0.0.1:8000`.

## Mode statique

Ouvrez simplement `index.html` dans votre navigateur.
