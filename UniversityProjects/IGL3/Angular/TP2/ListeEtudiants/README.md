# ListeEtudiants - TP2 Angular

## 🎯 Objectifs du TP

Ce TP permet d'apprendre :
1. La structure d'un projet Angular moderne
2. La création et l'intégration de composants
3. L'utilisation de la liaison bidirectionnelle avec `[(ngModel)]`
4. La différence entre l'ancien système (AppModule) et le nouveau (Standalone Components)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## 📁 Structure du Projet

```
ListeEtudiants/
├── src/
│   ├── app/
│   │   ├── app.ts                 # Composant racine
│   │   ├── app.html               # Template du composant racine
│   │   ├── app.css                # Styles du composant racine
│   │   ├── app.config.ts          # Configuration de l'application
│   │   ├── utilisateur/           # Activité 2
│   │   │   ├── utilisateur.ts
│   │   │   ├── utilisateur.html
│   │   │   └── utilisateur.css
│   │   ├── profil/                # Activité 3
│   │   │   ├── profil.ts
│   │   │   ├── profil.html
│   │   │   └── profil.css
│   │   └── adresse/               # Activité 5
│   │       ├── adresse.ts
│   │       ├── adresse.html
│   │       └── adresse.css
│   ├── main.ts                    # Point d'entrée
│   └── index.html                 # Page HTML principale
├── angular.json                   # Configuration Angular CLI
├── package.json                   # Dépendances npm
└── tsconfig.json                  # Configuration TypeScript
```

## 📚 Activités Réalisées

### ✅ Activité 1 : Exploration de la Structure
- Documentation complète dans `../STRUCTURE_PROJET.md`
- Explication du rôle de chaque fichier et dossier

### ✅ Activité 2 : Composant Utilisateur
- Génération avec `ng generate component utilisateur`
- Affichage d'une propriété `nom` avec interpolation `{{ nom }}`
- Intégration dans le composant racine

### ✅ Activité 3 : Formulaire avec FormsModule
- Création du composant `profil`
- Import de `FormsModule` dans le composant
- Liaison bidirectionnelle avec `[(ngModel)]`
- Affichage en temps réel des valeurs saisies

### ✅ Activité 4 : Comprendre le FormsModule
**Important :** Dans Angular moderne, `FormsModule` doit être importé **dans chaque composant** qui l'utilise.

### ✅ Activité 5 : Composant Adresse Manuel
- Création manuelle des fichiers du composant
- Pas besoin de déclaration dans un module
- Import direct dans le composant racine

## 🔄 Différences avec l'Ancien Angular

Ce projet utilise **Angular v20.3.8** avec l'architecture moderne basée sur les **Standalone Components**.

### Principales différences :
- ❌ Pas de `app.module.ts`
- ✅ Composants standalone par défaut
- ✅ Imports locaux dans chaque composant
- ✅ Pas de tableau `declarations`

Pour plus de détails, consultez `../GUIDE_MIGRATION.md`

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
