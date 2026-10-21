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
## Validations W3C

Les contrôles ont été effectués sur le portfolio publié sur GitHub Pages.

- **HTML5** : validation réussie — 0 erreur et 0 avertissement.
- **CSS3** : validation réussie — 0 erreur et 3 avertissements non bloquants.

### Liens de vérification

- [Validation HTML W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffadiprog2024.github.io%2FCREER-UN-PORTFOLIO-AVEC-VUE.JS%2F)
- [Validation CSS W3C](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffadiprog2024.github.io%2FCREER-UN-PORTFOLIO-AVEC-VUE.JS%2F)

*La validation HTML concerne le document analysé par le validateur ; les avertissements CSS ne sont pas bloquants.*

## Déploiement

Le portfolio est destiné à être publié sur GitHub Pages. Le chemin de base est configuré dans `vite.config.js` pour le dépôt `CREER-UN-PORTFOLIO-AVEC-VUE.JS`.

## Contact

Le formulaire utilise un lien `mailto:`. Il ouvre l'application de messagerie configurée sur l'appareil de l'utilisateur. L'envoi effectif du message nécessite une action de l'utilisateur et n'est pas réalisé automatiquement par le site.

## Auteur

Fadela Bensaid — 2026

- GitHub : https://github.com/Fadiprog2024
- LinkedIn : https://www.linkedin.com/in/fadila-bensaid/
