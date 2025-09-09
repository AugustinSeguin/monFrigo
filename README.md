# MonFrigo

MonFrigo est une application mobile développée avec Expo (React Native) pour vous aider à gérer le contenu de votre réfrigérateur, à suivre les dates de péremption et à planifier vos courses.

## Fonctionnalités

- **Gestion du Stock** : Visualisez rapidement les articles présents dans votre frigo.
- **Ajout de Produits** : Ajoutez de nouveaux produits à votre stock via un formulaire simple.
- **Scan de Codes-barres** : Utilisez la caméra de votre téléphone pour scanner des produits et les ajouter (fonctionnalité en cours de développement).
- **Liste de Courses** : Gardez une trace des articles que vous devez acheter.

## Technologies

- **React Native**
- **Expo**
- **TypeScript**
- **Expo Router** pour la navigation

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

### `npm start`

Lance l'application en mode développement avec un tunnel, ce qui vous permet de la tester facilement sur un appareil physique via l'application Expo Go.

### `npm run android`

Lance l'application sur un émulateur Android ou un appareil connecté.

### `npm run ios`

Lance l'application sur un simulateur iOS ou un appareil connecté.

### `npm run web`

Lance l'application dans un navigateur web.

### `npm run lint`

Exécute l'outil de "linting" pour vérifier la qualité du code et les erreurs de style.

### `npm run reset-project`

Réinitialise le projet en déplaçant le code de démarrage vers un dossier `app-example` et en créant un répertoire `app` vide.