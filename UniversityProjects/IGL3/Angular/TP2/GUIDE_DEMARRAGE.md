# 🚀 Guide de Démarrage Rapide - TP2 Angular

## ✅ Application Fonctionnelle !

L'application Angular a été créée avec succès et fonctionne parfaitement avec **Angular v20.3.8**.

---

## 📦 Installation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm (installé avec Node.js)
- Angular CLI v20.3.8

### Installation des dépendances
```bash
cd ListeEtudiants
npm install
```

---

## 🚀 Lancement de l'Application

### Commande de base
```bash
ng serve --open
```

### Commande avec port personnalisé (si le port 4200 est occupé)
```bash
ng serve --port 4201 --open
```

### Options utiles
```bash
# Sans ouvrir le navigateur automatiquement
ng serve

# Avec un autre port
ng serve --port 4300

# En mode production
ng build --configuration production
```

---

## 🌐 Accès à l'Application

Une fois lancée, l'application est accessible sur :
- **URL par défaut** : http://localhost:4200/
- **URL alternative** : http://localhost:4201/ (si port modifié)

Le navigateur s'ouvre automatiquement avec l'option `--open`.

---

## 🎨 Ce que vous verrez

### 1. **En-tête**
```
MyClass Will be Angular Heroes
```

### 2. **Activité 2 : Composant Utilisateur**
```
┌──────────────────────────────────┐
│ Composant Utilisateur            │
│ Nom : Rayen Akrich               │
└──────────────────────────────────┘
```

### 3. **Activité 3 : Composant Profil avec FormsModule**
```
┌──────────────────────────────────┐
│ Formulaire Profil                │
│                                  │
│ Prénom : [_______________]       │
│ Âge :    [_______________]       │
│                                  │
│ Données en temps réel :          │
│ Prénom : (s'affiche au fur et à mesure)
│ Âge : (s'affiche au fur et à mesure)
└──────────────────────────────────┘
```

### 4. **Activité 5 : Composant Adresse**
```
┌──────────────────────────────────┐
│ Composant Adresse                │
│ (Créé manuellement)              │
│ Adresse : 123 Rue Exemple        │
└──────────────────────────────────┘
```

---

## 🧪 Test de l'Application

### Test du Composant Utilisateur
1. Vérifiez que "Nom : Rayen Akrich" s'affiche
2. C'est une démonstration de l'**interpolation** `{{ nom }}`

### Test du Composant Profil (FormsModule)
1. Tapez votre prénom dans le premier champ
2. Tapez votre âge dans le second champ
3. **Observez** : Les valeurs s'affichent en temps réel en dessous
4. C'est une démonstration de la **liaison bidirectionnelle** `[(ngModel)]`

### Test du Composant Adresse
1. Vérifiez que l'adresse s'affiche correctement
2. Ce composant a été créé **manuellement** (pas avec `ng generate`)

---

## 🛠️ Commandes Angular CLI Utiles

### Développement
```bash
# Générer un nouveau composant
ng generate component nom-composant
# ou en version courte
ng g c nom-composant

# Générer un service
ng generate service nom-service
ng g s nom-service

# Générer une directive
ng generate directive nom-directive
ng g d nom-directive

# Générer un pipe
ng generate pipe nom-pipe
ng g p nom-pipe
```

### Build
```bash
# Build de développement
ng build

# Build de production (optimisé)
ng build --configuration production
```

### Tests
```bash
# Lancer les tests unitaires
ng test

# Lancer les tests e2e
ng e2e
```

### Informations
```bash
# Voir la version d'Angular CLI
ng version

# Voir l'aide
ng help

# Voir l'aide pour une commande spécifique
ng generate --help
```

---

## 🔧 Structure des Composants

### Composant généré automatiquement
```
src/app/utilisateur/
├── utilisateur.ts         # Classe du composant
├── utilisateur.html       # Template
├── utilisateur.css        # Styles
└── utilisateur.spec.ts    # Tests
```

### Composant créé manuellement
```
src/app/adresse/
├── adresse.ts            # Classe du composant
├── adresse.html          # Template
└── adresse.css           # Styles
```

---

## 📝 Modification du Code

### Modifier le nom dans le composant Utilisateur
**Fichier :** `src/app/utilisateur/utilisateur.ts`
```typescript
export class Utilisateur {
  nom = 'Votre Nom Ici';  // ← Modifiez cette ligne
}
```

### Modifier l'adresse dans le composant Adresse
**Fichier :** `src/app/adresse/adresse.ts`
```typescript
export class AdresseComponent {
  rue = 'Votre Adresse Ici';  // ← Modifiez cette ligne
}
```

### Modifier le titre de l'application
**Fichier :** `src/app/app.ts`
```typescript
export class App {
  title = 'Votre Titre Ici';  // ← Modifiez cette ligne
}
```

**Note :** Grâce au **Hot Module Replacement (HMR)**, les modifications sont visibles immédiatement sans recharger la page !

---

## 🎓 Expérimentations Suggérées

### Expérience 1 : Tester sans FormsModule
1. Ouvrez `src/app/profil/profil.ts`
2. Commentez la ligne `import { FormsModule } from '@angular/forms';`
3. Retirez `FormsModule` du tableau `imports`
4. Sauvegardez et observez les erreurs dans la console
5. **Conclusion** : FormsModule est nécessaire pour `[(ngModel)]`

### Expérience 2 : Ajouter un nouveau champ au formulaire
1. Ouvrez `src/app/profil/profil.ts`
2. Ajoutez une propriété `email` à l'objet `utilisateur` :
```typescript
utilisateur = {
  prenom: '',
  age: 0,
  email: ''  // ← Nouveau champ
};
```
3. Ouvrez `src/app/profil/profil.html`
4. Ajoutez un champ input pour l'email :
```html
<div class="form-group">
  <label for="email">Email :</label>
  <input type="email" id="email" name="email" [(ngModel)]="utilisateur.email" />
</div>
```
5. Affichez l'email dans la section résultat :
```html
<p><strong>Email :</strong> {{ utilisateur.email }}</p>
```

### Expérience 3 : Créer un nouveau composant
1. Générez un nouveau composant :
```bash
ng generate component contact
```
2. Ajoutez du contenu dans `contact.html`
3. Importez-le dans `app.ts` :
```typescript
import { Contact } from './contact/contact';

@Component({
  imports: [RouterOutlet, Utilisateur, Profil, AdresseComponent, Contact]
})
```
4. Ajoutez-le dans `app.html` :
```html
<section>
  <h2>Mon Nouveau Composant</h2>
  <app-contact></app-contact>
</section>
```

---

## 🐛 Dépannage

### Le port 4200 est déjà utilisé
```bash
# Solution : Utiliser un autre port
ng serve --port 4201
```

### Erreur "Can't bind to 'ngModel'"
```
Cause : FormsModule n'est pas importé
Solution : Ajoutez FormsModule dans le tableau imports du composant
```

### Les modifications ne s'affichent pas
```
Cause : Le serveur de développement n'est pas lancé
Solution : Lancez ng serve et actualisez le navigateur
```

### Erreur de compilation TypeScript
```
Cause : Erreur de syntaxe dans le code
Solution : Vérifiez la console pour voir l'erreur exacte
```

---

## 📚 Documentation

Consultez les fichiers suivants pour plus d'informations :

1. **STRUCTURE_PROJET.md** - Comprendre la structure du projet
2. **GUIDE_MIGRATION.md** - Différences ancien vs nouveau Angular
3. **ACTIVITE_4_FORMSMODULE.md** - Rôle et utilisation de FormsModule
4. **RECAPITULATIF.md** - Vue d'ensemble complète du TP

---

## ✨ Résumé

### ✅ Ce qui fonctionne
- ✅ Application Angular v20.3.8
- ✅ 3 composants (utilisateur, profil, adresse)
- ✅ Interpolation `{{ }}`
- ✅ Liaison bidirectionnelle `[(ngModel)]`
- ✅ FormsModule importé localement
- ✅ Standalone Components
- ✅ Hot Module Replacement

### 🎯 Compétences acquises
- ✅ Créer un projet Angular
- ✅ Générer et créer des composants
- ✅ Utiliser FormsModule
- ✅ Data binding (interpolation et bidirectionnel)
- ✅ Architecture Standalone Components

---

## 🔗 Ressources

- [Documentation Angular](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
- [Guide des Composants](https://angular.dev/guide/components)
- [Guide des Formulaires](https://angular.dev/guide/forms)

---

**Bon développement avec Angular ! 🚀**
