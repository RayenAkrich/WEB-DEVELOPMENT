# Guide de Migration : Angular Ancien vs Angular Moderne (v20.3.8)

## 📚 Introduction

Ce document explique les adaptations faites pour réaliser ce TP avec **Angular moderne (v20.3.8)** au lieu de l'ancienne architecture basée sur `AppModule`.

---

## 🔄 Principales Différences

### 1. **AppModule vs Standalone Components**

#### ❌ Ancienne Version (< Angular 14)
```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [    // ← Tous les composants doivent être déclarés ici
    AppComponent,
    UtilisateurComponent,
    ProfilComponent
  ],
  imports: [         // ← Modules importés globalement
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### ✅ Nouvelle Version (Angular 14+)
```typescript
// app.ts (plus de .module.ts !)
import { Component } from '@angular/core';
import { Utilisateur } from './utilisateur/utilisateur';
import { Profil } from './profil/profil';

@Component({
  selector: 'app-root',
  standalone: true,           // ← Composant standalone
  imports: [Utilisateur, Profil],  // ← Imports directs des composants
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'MyClass Will be Angular Heroes';
}
```

---

### 2. **FormsModule : Import Global vs Import Local**

#### ❌ Ancienne Version
Le `FormsModule` était importé **une seule fois** dans `app.module.ts` et disponible partout :

```typescript
// app.module.ts
@NgModule({
  imports: [FormsModule],  // ← Disponible pour tous les composants
  declarations: [ProfilComponent]
})
```

#### ✅ Nouvelle Version
Le `FormsModule` doit être importé **dans chaque composant** qui l'utilise :

```typescript
// profil.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ← Import local

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [FormsModule],  // ← Ajouté uniquement pour ce composant
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil {
  utilisateur = { prenom: '', age: 0 };
}
```

---

### 3. **Déclaration des Composants**

#### ❌ Ancienne Version
Les composants devaient être **déclarés** dans le tableau `declarations` du module :

```typescript
@NgModule({
  declarations: [UtilisateurComponent]  // ← Obligatoire !
})
```

**Erreur si oublié :** 
```
'app-utilisateur' is not a known element
```

#### ✅ Nouvelle Version
Les composants standalone sont **auto-déclarés**. Il suffit de les importer là où on les utilise :

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Utilisateur]  // ← Import direct, pas besoin de declaration
})
```

---

### 4. **Bootstrap de l'Application**

#### ❌ Ancienne Version
```typescript
// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)  // ← Bootstrap du module
  .catch(err => console.error(err));
```

#### ✅ Nouvelle Version
```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)  // ← Bootstrap direct du composant
  .catch(err => console.error(err));
```

---

## 🎯 Adaptations Faites pour le TP

### Activité 2 : Composant Utilisateur
✅ Généré avec `ng generate component utilisateur`
- Composant standalone automatique
- Importé directement dans `app.ts`

### Activité 3 : Formulaire avec FormsModule
✅ `FormsModule` importé **localement** dans `profil.ts`
- Pas besoin de `app.module.ts`
- Utilisation de `[(ngModel)]` identique

### Activité 4 : Rôle du FormsModule
**Différence importante :**
- ❌ Ancien : Retirer `FormsModule` de `app.module.ts` → Erreur partout
- ✅ Moderne : Retirer `FormsModule` de `profil.ts` → Erreur seulement dans ce composant

**Conclusion :** Dans Angular moderne, chaque composant est **isolé** et gère ses propres dépendances.

### Activité 5 : Composant Manuel
✅ Créé manuellement dans `src/app/adresse/`
- Pas besoin de le déclarer dans un module
- Ajout de `standalone: true` obligatoire
- Importé directement dans `app.ts`

---

## 📖 Concepts Clés d'Angular Moderne

### 1. **Standalone Components**
Tous les composants générés avec Angular CLI sont standalone par défaut :
```typescript
@Component({
  standalone: true,  // ← Par défaut dans Angular 14+
  imports: [...]     // ← Gère ses propres imports
})
```

### 2. **Pas de Déclarations**
Le tableau `declarations` n'existe plus. Chaque composant s'importe comme un module ES6.

### 3. **Tree-Shaking Optimisé**
Angular moderne ne charge que ce qui est utilisé, réduisant la taille des bundles.

### 4. **Compatibilité**
On peut mélanger composants standalone et modules NgModule, facilitant la migration progressive.

---

## 🚀 Commandes Utiles

```bash
# Créer un projet Angular moderne
ng new MonProjet --defaults

# Générer un composant standalone (par défaut)
ng generate component mon-composant

# Lancer le serveur de développement
ng serve

# Lancer et ouvrir dans le navigateur
ng serve --open
```

---

## 🔍 Points d'Attention pour les Étudiants

1. **FormsModule doit être importé dans CHAQUE composant** qui utilise `ngModel`
2. **Pas besoin de app.module.ts** dans les projets modernes
3. **Standalone: true** est obligatoire pour les composants créés manuellement
4. Les composants s'importent comme des classes TypeScript normales
5. La configuration de l'app est dans `app.config.ts`, pas dans un module

---

## 📝 Conclusion

L'architecture moderne d'Angular :
- ✅ Plus simple (pas de NgModule pour la plupart des cas)
- ✅ Plus modulaire (chaque composant gère ses dépendances)
- ✅ Plus performante (meilleur tree-shaking)
- ✅ Plus proche des standards web (Web Components)

**Le TP est entièrement fonctionnel avec Angular v20.3.8 !** 🎉
