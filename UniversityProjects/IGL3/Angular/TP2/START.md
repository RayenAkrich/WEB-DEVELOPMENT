# 🚀 Démarrer Rapidement - TP2 Angular

## ⚡ Lancement en 3 Étapes

### 1️⃣ Installer les dépendances
```bash
cd ListeEtudiants
npm install
```

### 2️⃣ Lancer l'application
```bash
ng serve --open
```

### 3️⃣ Naviguer vers
```
http://localhost:4200
```

**C'est tout ! 🎉**

---

## 📖 Que faire ensuite ?

### Pour Commencer
1. **Voir l'app fonctionner** → Elle s'ouvre automatiquement dans votre navigateur
2. **Tester le formulaire** → Tapez votre prénom et âge dans les champs
3. **Observer la liaison temps réel** → Les données s'affichent instantanément

### Pour Apprendre
1. **Lire** [README.md](./README.md) → Vue d'ensemble du projet
2. **Consulter** [INDEX.md](./INDEX.md) → Navigation complète
3. **Suivre** [GUIDE_DEMARRAGE.md](./GUIDE_DEMARRAGE.md) → Guide détaillé

### Pour Comprendre
1. **Structure** → [STRUCTURE_PROJET.md](./STRUCTURE_PROJET.md)
2. **Différences** → [GUIDE_MIGRATION.md](./GUIDE_MIGRATION.md)
3. **FormsModule** → [ACTIVITE_4_FORMSMODULE.md](./ACTIVITE_4_FORMSMODULE.md)

---

## 🎯 Fichiers Importants

| Fichier | Description | Quand le lire ? |
|---------|-------------|-----------------|
| [START.md](./START.md) | Ce fichier | Pour démarrer |
| [README.md](./README.md) | Document principal | Premier document |
| [INDEX.md](./INDEX.md) | Navigation | Pour trouver les infos |
| [GUIDE_DEMARRAGE.md](./GUIDE_DEMARRAGE.md) | Guide complet | Tutoriel détaillé |

---

## ❓ Problèmes Courants

### Le port 4200 est déjà utilisé
```bash
ng serve --port 4201 --open
```

### Erreur "npm install"
```bash
# Vérifiez Node.js
node --version  # Devrait être v18+

# Réinstallez
rm -rf node_modules
npm install
```

### L'application ne s'ouvre pas
Ouvrez manuellement : http://localhost:4200

---

## 📚 Documentation Complète

```
TP2/
├── START.md                    ← Vous êtes ici !
├── README.md                   ← Lire ensuite
├── INDEX.md                    ← Pour naviguer
├── GUIDE_DEMARRAGE.md          ← Guide complet
├── STRUCTURE_PROJET.md         ← Comprendre la structure
├── GUIDE_MIGRATION.md          ← Ancien vs nouveau
├── ACTIVITE_4_FORMSMODULE.md   ← Comprendre FormsModule
├── RECAPITULATIF.md            ← Vue d'ensemble
├── LISTE_FICHIERS.md           ← Inventaire
├── SUCCESS.md                  ← Confirmation
└── NOTES_ENSEIGNANT.md         ← Pour l'enseignant
```

---

## 🎨 Ce que Vous Verrez

Une fois l'application lancée, vous verrez :

```
┌──────────────────────────────────────────┐
│  MyClass Will be Angular Heroes          │
├──────────────────────────────────────────┤
│                                          │
│  📌 Composant Utilisateur                │
│     Nom : Rayen Akrich                   │
│                                          │
│  📌 Formulaire Profil                    │
│     Prénom : [______]                    │
│     Âge :    [______]                    │
│     → Affichage en temps réel            │
│                                          │
│  📌 Composant Adresse                    │
│     Adresse : 123 Rue Exemple            │
│                                          │
└──────────────────────────────────────────┘
```

---

## ⚡ Commandes Rapides

```bash
# Installation
npm install

# Lancement
ng serve

# Lancement avec ouverture auto
ng serve --open

# Port alternatif
ng serve --port 4201

# Build production
ng build

# Version Angular
ng version
```

---

## 🎓 Parcours Rapide (30 min)

### 10 min - Lancer et explorer
1. Installez et lancez l'app
2. Testez le formulaire
3. Observez les 3 composants

### 10 min - Comprendre le code
1. Ouvrez `src/app/app.ts`
2. Regardez `src/app/profil/profil.ts`
3. Examinez `src/app/utilisateur/utilisateur.ts`

### 10 min - Lire la doc
1. Lisez [README.md](./README.md)
2. Parcourez [GUIDE_DEMARRAGE.md](./GUIDE_DEMARRAGE.md)
3. Consultez [STRUCTURE_PROJET.md](./STRUCTURE_PROJET.md)

---

## 🚀 Prêt pour la Suite

Après ce TP, vous saurez :
- ✅ Créer un projet Angular
- ✅ Générer des composants
- ✅ Utiliser ngModel
- ✅ Organiser une application
- ✅ Comprendre l'architecture Standalone

**Continuez vers :** TP3, TP4, etc.

---

## 💡 Astuce

**Gardez cette fenêtre ouverte** pendant que vous explorez l'application et la documentation !

---

**🎉 Bon apprentissage avec Angular ! 🚀**

➡️ **Prochaine étape :** [README.md](./README.md)
