# 🚀 Portfolio — Diene Thiam

Portfolio premium React Vite + Tailwind CSS + Framer Motion.

---

## ⚙️ Installation

```bash
# 1. Cloner / dézipper le projet
cd portfolio-diene

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev

# 4. Build pour la production
npm run build

# 5. Prévisualiser le build
npm run preview
```

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── Background.jsx     # Blobs animés + texture
│   ├── Cursor.jsx         # Curseur personnalisé
│   ├── Footer.jsx
│   ├── Hero.jsx           # Section hero animée
│   ├── About.jsx          # Bio + skills
│   ├── Projects.jsx       # Grille de projets
│   ├── ProjectCard.jsx    # Card projet individuelle
│   ├── Experience.jsx     # Timeline + services
│   └── Contact.jsx        # Formulaire + socials
├── pages/
│   ├── Home.jsx           # Page d'accueil
│   ├── ProjectDetail.jsx  # Page détail projet (/project/:slug)
│   └── AddProject.jsx     # Route admin secrète (/add-project)
├── hooks/
│   ├── useCursor.js       # Logique curseur custom
│   ├── useScrollReveal.js
│   └── useProjects.js     # State management projets
├── data/
│   ├── projects.js        # Données de tous les projets
│   └── skills.js          # Skills, expériences, services
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🎨 Personnalisation

### Modifier les infos personnelles
→ `src/components/Hero.jsx` — nom, titre, bio
→ `src/components/About.jsx` — bio détaillée
→ `src/components/Contact.jsx` — email, réseaux sociaux

### Ajouter / modifier des projets
→ `src/data/projects.js` — tableau `projects`

### Modifier les compétences / expériences
→ `src/data/skills.js` — `skills`, `experiences`, `services`

### Route secrète pour ajouter un projet
→ Naviguez vers `/add-project`
→ Les projets ajoutés ont `visible: false` par défaut (non affichés publiquement)

---

## 🎯 Features

- ✅ Curseur personnalisé avec effet magnétique
- ✅ Fond animé avec blobs et texture noise
- ✅ Hero avec spécialités en rotation
- ✅ Animations Framer Motion sur toutes les sections
- ✅ Dark mode par défaut
- ✅ Routing React Router v6
- ✅ Page détail de chaque projet
- ✅ Route `/add-project` invisible dans la nav
- ✅ Formulaire de contact avec feedback
- ✅ Entièrement responsive (mobile, tablette, desktop)
- ✅ Performances optimisées (lazy, Vite)

---

## 🛠️ Stack

| Tech | Usage |
|------|-------|
| React 18 | UI |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router v6 | Routing |
| React Icons | Icônes |

---

## 📦 Déploiement

```bash
# Vercel (recommandé)
npm i -g vercel
vercel

# Netlify
npm run build
# Uploader le dossier dist/
```

---

Made with ❤️ — Dakar, Sénégal 🇸🇳
