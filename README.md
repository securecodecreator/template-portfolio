<h1 align="center">🚀 Template Portfolio Next.js 🚀</h1>

<p align="center">
  Un template de portfolio moderne et élégant, construit avec Next.js, TypeScript et Tailwind CSS. ✨
</p>

---

## 📋 Prérequis

- **Node.js**: Version 18 ou supérieure (`node -v`)
- **Gestionnaire de paquets**: npm, yarn ou pnpm (pnpm est recommandé)

## 🛠️ Installation

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/securecodecreator/template-portfolio.git
    cd template-portfolio
    ```

2.  **Installez les dépendances :**
    ```bash
    # Avec npm
    npm install

    # Avec yarn
    yarn install

    # Avec pnpm (recommandé) ✨
    pnpm install
    ```

3.  **Lancez le serveur de développement :**
    ```bash
    pnpm dev
    ```

    🎉 Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir la magie opérer ! 🎉

## ✨ Fonctionnalités Clés

- **🚀 Architecture Moderne**: Basé sur Next.js 15 (App Router) pour des performances optimales.
- **🔒 TypeScript**: Typage statique pour un code plus robuste et maintenable.
- **🎨 Tailwind CSS**: Design responsive et personnalisable facilement.
- **⚡ Optimisation**: Performances optimisées (images, chargement...).
- **🔎 SEO**: Structure pensée pour un bon référencement naturel.

## ☁️ Déploiement

Ce projet est prêt à être déployé sur des plateformes comme :

- **Vercel**: Intégration parfaite avec Next.js.
- **Netlify**: Fichier `netlify.toml` inclus et configuré.

## 📁 Structure du Projet

```
template-portfolio/
├── app/                     # Cœur de l'application (App Router)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   ├── globals.css          # Styles globaux
│   └── landing/             # --- Section Landing Page ---
│       ├── landing.client/    # Composants Client (UI, interactivité)
│       ├── landing.data/      # Données statiques (textes, liens...)
│       ├── landing.server/    # Composants Serveur (fetch data, props)
│       └── landing.style/     # Styles CSS spécifiques à la landing
├── public/                  # Fichiers statiques (images, fonts...)
├── .gitignore               # Fichiers ignorés par Git
├── next.config.ts           # Configuration de Next.js
├── package.json             # Dépendances et scripts
├── pnpm-lock.yaml           # Lockfile pour pnpm
├── postcss.config.mjs       # Configuration PostCSS (Tailwind)
├── tailwind.config.ts       # Configuration Tailwind CSS
└── tsconfig.json            # Configuration TypeScript
```

### Explication du dossier `app/landing`

Le dossier `landing` contient tous les éléments spécifiques à la page d'accueil (landing page). Sa structure est pensée pour une meilleure organisation et séparation des responsabilités :

-   `landing.data/`:
    -   **Rôle**: Stocker les données de contenu statique (textes des sections, titres, descriptions, liens des projets, etc.).
    -   **Avantage**: Sépare le contenu de la logique de présentation. Facilite les mises à jour du contenu sans toucher au code des composants.
-   `landing.style/`:
    -   **Rôle**: Contenir les fichiers CSS spécifiques aux composants de la landing page qui nécessitent des styles plus complexes ou non gérables directement avec Tailwind.
    -   **Avantage**: Centralise les styles spécifiques, évitant de surcharger les fichiers de composants ou les styles globaux.
-   `landing.server/`:
    -   **Rôle**: Héberger les composants serveur (React Server Components). Ces composants s'exécutent côté serveur. Leur tâche principale ici est d'importer les données depuis `landing.data` et de les passer en *props* aux composants client.
    -   **Avantage**: Permet de préparer les données côté serveur avant de les envoyer au navigateur. Peut aussi inclure de la logique serveur si nécessaire.
-   `landing.client/`:
    -   **Rôle**: Contenir les composants client (marqués avec `"use client"`). Ils s'exécutent principalement côté client (navigateur) et sont responsables de l'affichage de l'interface utilisateur (UI) et de la gestion des interactions (animations, formulaires, etc.). Ils reçoivent les données via les *props* des composants serveur parents.
    -   **Avantage**: Permet une interactivité riche et une expérience utilisateur dynamique.

Cette organisation modulaire facilite la maintenance, la scalabilité et la collaboration sur le projet.

---

<p align="center">
  🎉 ENJOY YOUR CODING! 🎉
</p>

