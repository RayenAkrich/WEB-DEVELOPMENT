# Activité 1 : Structure d'un Projet Angular (Version 20.3.8)

## Description des dossiers et fichiers principaux

### 📁 src/app
**Rôle :** Contient tous les composants, services et logique métier de l'application.
- Avec Angular moderne, les composants sont **standalone** par défaut (pas besoin de AppModule)
- Fichiers principaux :
  - `app.ts` : Composant racine de l'application
  - `app.html` : Template HTML du composant racine
  - `app.css` : Styles du composant racine
  - `app.config.ts` : Configuration de l'application (remplace AppModule)
  - `app.routes.ts` : Configuration des routes

### 📁 src/assets
**Rôle :** Stocke les ressources statiques (images, fonts, fichiers JSON, etc.)
- Ces fichiers sont copiés tels quels lors du build
- Accessible via le chemin `/assets/...` dans l'application

### 📁 src/environments
**Rôle :** (Ce dossier n'existe plus par défaut dans Angular moderne)
- Dans les anciennes versions : contenait les configurations d'environnement (dev, prod)
- Dans Angular moderne : on utilise plutôt les variables d'environnement du système ou des fichiers de configuration

### 📄 src/main.ts
**Rôle :** Point d'entrée de l'application Angular
- Bootstrap l'application avec `bootstrapApplication(AppComponent, appConfig)`
- Dans les anciennes versions : bootstrapait AppModule
- Charge la configuration depuis `app.config.ts`

### 📄 src/index.html
**Rôle :** Page HTML principale de l'application
- Contient la balise `<app-root>` où Angular monte l'application
- Charge les scripts et styles compilés automatiquement

### 📄 angular.json
**Rôle :** Fichier de configuration du projet Angular CLI
- Définit les options de build, serve, test
- Configure les chemins des assets, styles globaux
- Spécifie les configurations de production/développement

### 📄 package.json
**Rôle :** Fichier de configuration npm/Node.js
- Liste toutes les dépendances du projet (@angular/core, @angular/common, etc.)
- Définit les scripts npm (start, build, test)
- Contient les métadonnées du projet (nom, version, auteur)

### 📄 tsconfig.json
**Rôle :** Configuration TypeScript du projet
- Définit les options du compilateur TypeScript
- Configure les chemins de résolution des modules
- Spécifie la version ECMAScript cible

---

## ⚠️ Différences importantes avec les anciennes versions d'Angular

### Angular ancien (< v14) vs Angular moderne (v14+)

| Ancien | Moderne (v20.3.8) |
|--------|-------------------|
| `app.module.ts` avec `@NgModule` | `app.config.ts` avec `ApplicationConfig` |
| Composants déclarés dans `declarations[]` | Composants **standalone** auto-déclarés |
| `imports: [FormsModule]` dans `@NgModule` | `imports: [FormsModule]` directement dans le composant |
| `platformBrowserDynamic().bootstrapModule(AppModule)` | `bootstrapApplication(AppComponent, appConfig)` |

### Avantages de l'architecture moderne :
✅ Composants plus indépendants et réutilisables
✅ Lazy loading simplifié
✅ Moins de boilerplate code
✅ Meilleure tree-shaking (optimisation du bundle)
✅ Plus proche des Web Components standards
