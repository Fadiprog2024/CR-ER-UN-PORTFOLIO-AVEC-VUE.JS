# Portfolio de Fadela Bensaid

Portfolio personnel développé avec Vue.js 3, présentant mon parcours, mes compétences et mes réalisations en développement web.

## Démonstration

https://fadiprog2024.github.io/CREER-UN-PORTFOLIO-AVEC-VUE.JS/

## Fonctionnalités

- Interface responsive adaptée aux ordinateurs, tablettes et mobiles
- Navigation entre les sections Présentation, Créations et Contact
- Menu de navigation mobile
- Présentation dynamique de deux projets
- Fenêtres modales détaillant les réalisations
- Fermeture des modales par bouton, clic extérieur ou touche Échap
- Formulaire de contact ouvrant le logiciel de messagerie avec un message prérempli
- Page 404 personnalisée avec Vue Router
- Prise en compte de l'accessibilité et des préférences de réduction des animations
- Métadonnées SEO

## Technologies utilisées

- Vue.js 3
- Vue Router
- Vite
- JavaScript
- HTML5 et CSS3
- Flexbox et CSS Grid
- Git et GitHub

## Projets présentés

### CV en ligne
CV responsive développé avec HTML5 et CSS3.

Site : https://fadiprog2024.github.io/CV-en-ligne-2/

Dépôt : https://github.com/Fadiprog2024/CV-en-ligne-2

### Cahier des charges
Document de cadrage fonctionnel et graphique d'un site e-commerce, consultable au format PDF depuis le portfolio.

## Installation et lancement

Prérequis : Node.js 20 ou version supérieure, npm et Git.

```bash
git clone https://github.com/Fadiprog2024/CREER-UN-PORTFOLIO-AVEC-VUE.JS.git
cd CREER-UN-PORTFOLIO-AVEC-VUE.JS
npm install
```

Créer le fichier `.env` à partir de `.env.example`, puis renseigner :

```env
VITE_CONTACT_EMAIL=votre-adresse@example.com
```

Démarrer le serveur de développement :

```bash
npm run dev
```

Ouvrir l'adresse locale indiquée par Vite.

## Production

```bash
npm run build
npm run preview
```

La compilation génère le dossier `dist`.

## Déploiement

Le portfolio est destiné à être publié sur GitHub Pages. Le chemin de base est configuré dans `vite.config.js` pour le dépôt `CREER-UN-PORTFOLIO-AVEC-VUE.JS`.

## Contact

Le formulaire utilise un lien `mailto:`. Il ouvre l'application de messagerie configurée sur l'appareil de l'utilisateur. L'envoi effectif du message nécessite une action de l'utilisateur et n'est pas réalisé automatiquement par le site.

## Auteur

Fadela Bensaid — 2026

- GitHub : https://github.com/Fadiprog2024
- LinkedIn : https://www.linkedin.com/in/fadila-bensaid/
