# 🎓 TP2 Angular - Structure et Composants

**Version Angular :** 20.3.8 (Architecture Standalone Components)

---

## 📋 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Documentation disponible](#documentation-disponible)
3. [Démarrage rapide](#démarrage-rapide)
4. [Contenu du TP](#contenu-du-tp)
5. [Fichiers et dossiers](#fichiers-et-dossiers)

---

## 🎯 Vue d'ensemble

Ce TP a été réalisé avec **Angular v20.3.8**, utilisant la **nouvelle architecture Standalone Components**. Tous les exercices du TP original ont été adaptés pour fonctionner avec cette version moderne d'Angular.

### Objectifs du TP
1. ✅ Maîtriser la structure d'un projet Angular moderne
2. ✅ Créer et intégrer des composants Angular
3. ✅ Utiliser la liaison de données bidirectionnelle avec `ngModel`
4. ✅ Comprendre l'évolution d'Angular (AppModule → Standalone)

### Points clés
- ❌ Pas de `app.module.ts` (remplacé par Standalone Components)
- ✅ FormsModule importé localement dans chaque composant
- ✅ Architecture plus moderne et performante
- ✅ Documentation complète pour comprendre les différences

---

## 📚 Documentation disponible

### 🚀 Pour commencer
**[INDEX.md](./INDEX.md)** - Table des matières complète avec navigation vers tous les documents

### 📖 Guides principaux

| Fichier | Description | Quand le consulter ? |
|---------|-------------|---------------------|
| **[GUIDE_DEMARRAGE.md](./GUIDE_DEMARRAGE.md)** | Guide de démarrage rapide | Lancer l'application immédiatement |
| **[STRUCTURE_PROJET.md](./STRUCTURE_PROJET.md)** | Description de la structure Angular | Comprendre l'organisation du projet |
| **[GUIDE_MIGRATION.md](./GUIDE_MIGRATION.md)** | Ancien vs nouveau Angular | Comprendre les différences |
| **[ACTIVITE_4_FORMSMODULE.md](./ACTIVITE_4_FORMSMODULE.md)** | Rôle de FormsModule | Comprendre ngModel et les formulaires |
| **[RECAPITULATIF.md](./RECAPITULATIF.md)** | Vue d'ensemble complète | Récapituler tout ce qui a été fait |

---

## 🚀 Démarrage rapide

### Installation
```bash
cd ListeEtudiants
npm install
```

### Lancement
```bash
ng serve --open
```

L'application s'ouvre automatiquement sur **http://localhost:4200/**

### Voir l'application fonctionner
Une fois lancée, vous verrez :
1. Le titre "MyClass Will be Angular Heroes"
2. Le composant Utilisateur avec un nom affiché
3. Un formulaire interactif (Profil) avec liaison bidirectionnelle
4. Le composant Adresse créé manuellement

---

## 📦 Contenu du TP

### ✅ Activités réalisées

#### Activité 1 : Exploration de la structure
- Documentation complète de tous les fichiers et dossiers
- Explication des différences avec l'ancien Angular
- Fichier : [STRUCTURE_PROJET.md](./STRUCTURE_PROJET.md)

#### Activité 2 : Composant Utilisateur
- Génération avec `ng generate component utilisateur`
- Interpolation avec `{{ nom }}`
- Intégration dans le composant racine

#### Activité 3 : Formulaire avec FormsModule
- Création du composant `profil`
- Import local de FormsModule
- Liaison bidirectionnelle avec `[(ngModel)]`
- Affichage en temps réel des données

#### Activité 4 : Comprendre FormsModule
- Expérimentation avec/sans FormsModule
- Analyse des erreurs
- Documentation : [ACTIVITE_4_FORMSMODULE.md](./ACTIVITE_4_FORMSMODULE.md)

#### Activité 5 : Composant créé manuellement
- Création manuelle du composant `adresse`
- Sans utiliser `ng generate`
- Démonstration de `standalone: true`

---

## 📁 Fichiers et dossiers

```
TP2/
├── 📄 INDEX.md                     # Navigation principale
├── 📄 GUIDE_DEMARRAGE.md           # Démarrage rapide
├── 📄 STRUCTURE_PROJET.md          # Structure d'Angular
├── 📄 GUIDE_MIGRATION.md           # Ancien vs nouveau
├── 📄 ACTIVITE_4_FORMSMODULE.md    # FormsModule expliqué
├── 📄 RECAPITULATIF.md             # Vue d'ensemble
├── 📄 README.md                    # Ce fichier
├── 📄 TP 2.pdf                     # Énoncé original du TP
└── 📁 ListeEtudiants/              # Projet Angular
    ├── src/
    │   ├── app/
    │   │   ├── app.ts              # Composant racine
    │   │   ├── app.html
    │   │   ├── app.css
    │   │   ├── app.config.ts       # Configuration (remplace AppModule)
    │   │   ├── utilisateur/        # Activité 2
    │   │   │   ├── utilisateur.ts
    │   │   │   ├── utilisateur.html
    │   │   │   └── utilisateur.css
    │   │   ├── profil/             # Activité 3
    │   │   │   ├── profil.ts
    │   │   │   ├── profil.html
    │   │   │   └── profil.css
    │   │   └── adresse/            # Activité 5
    │   │       ├── adresse.ts
    │   │       ├── adresse.html
    │   │       └── adresse.css
    │   ├── main.ts                 # Point d'entrée
    │   └── index.html              # Page HTML
    ├── angular.json
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

---

## 🔑 Différences clés avec l'ancien Angular

### Ancien Angular (< v14)
```typescript
// app.module.ts
@NgModule({
  declarations: [AppComponent, UtilisateurComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Angular Moderne (v20.3.8)
```typescript
// app.ts
@Component({
  standalone: true,
  imports: [Utilisateur, Profil]
})
export class App {
  title = 'MyClass Will be Angular Heroes';
}
```

**Avantages :**
- ✅ Plus simple (pas de NgModule)
- ✅ Plus modulaire
- ✅ Meilleure performance
- ✅ Plus proche des standards web

---

## 🛠️ Commandes utiles

### Développement
```bash
# Lancer le serveur de développement
ng serve

# Lancer avec un port spécifique
ng serve --port 4201

# Générer un nouveau composant
ng generate component nom-composant
```

### Build
```bash
# Build de développement
ng build

# Build de production
ng build --configuration production
```

### Informations
```bash
# Version d'Angular
ng version

# Aide
ng help
```

---

## 🎓 Compétences acquises

### Techniques
- ✅ Créer un projet Angular avec CLI
- ✅ Générer des composants automatiquement
- ✅ Créer des composants manuellement
- ✅ Utiliser l'interpolation `{{ }}`
- ✅ Utiliser la liaison bidirectionnelle `[(ngModel)]`
- ✅ Importer et utiliser FormsModule
- ✅ Organiser une application en composants

### Conceptuelles
- ✅ Structure d'un projet Angular moderne
- ✅ Architecture Standalone Components
- ✅ Différences ancien vs nouveau Angular
- ✅ Rôle des imports locaux
- ✅ Data binding et réactivité
- ✅ Modularité et isolation des composants

---

## 🔗 Ressources

### Documentation officielle
- [Angular.dev](https://angular.dev) - Documentation principale
- [Angular CLI](https://angular.dev/tools/cli) - Guide CLI
- [Standalone Components](https://angular.dev/guide/components/importing)
- [Forms](https://angular.dev/guide/forms)
- [Two-way Binding](https://angular.dev/guide/templates/two-way-binding)

### Tutoriels
- [Angular Tutorial](https://angular.dev/tutorials)
- [Tour of Heroes](https://angular.dev/tutorial/tour-of-heroes)

---

## 📝 Notes importantes

### Pour les étudiants
1. Ce TP utilise Angular v20.3.8 avec Standalone Components
2. Pas besoin de `app.module.ts`
3. FormsModule doit être importé dans chaque composant qui utilise `ngModel`
4. Tous les composants ont `standalone: true`

### Pour l'enseignant
- Tous les objectifs pédagogiques sont atteints
- Documentation complète fournie
- Adaptations expliquées dans GUIDE_MIGRATION.md
- Application 100% fonctionnelle

---

## ❓ Questions fréquentes

### Où est app.module.ts ?
Il n'existe plus dans Angular moderne. Remplacé par `app.config.ts` et l'architecture Standalone.

### Pourquoi FormsModule dans chaque composant ?
Architecture Standalone : chaque composant gère ses propres dépendances.

### Puis-je utiliser l'ancienne méthode ?
Oui, mais ce n'est plus recommandé. Angular moderne est plus simple et performant.

---

## ✨ Prochaines étapes

1. **Expérimentez** : Modifiez le code, ajoutez des fonctionnalités
2. **Créez** : Générez de nouveaux composants
3. **Apprenez** : Consultez la documentation Angular
4. **Pratiquez** : Faites les TPs suivants

---

## 👨‍💻 Auteur

TP réalisé dans le cadre du cours Angular - IGL3  
Adapté pour Angular v20.3.8 avec documentation complète

---

## 📄 License

MIT - Libre d'utilisation pour l'apprentissage

---

**🚀 Bon apprentissage avec Angular !**

*Pour commencer, consultez [INDEX.md](./INDEX.md) ou [GUIDE_DEMARRAGE.md](./GUIDE_DEMARRAGE.md)*
