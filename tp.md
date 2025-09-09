# TP - Fridge Manager

## Objectifs

- Créer une application mobile avec React Native
- Prendre en main Expo (expo router, React Navigation, composants de React Native)
- Rafraichir ses connaissances en React
- Utiliser une API Mobile (Camera) et la documentation d'expo associée

## Installation

1. Générer un projet expo
2. Initialiser un dépôt git
3. Installer l'app expo go sur votre téléphone
4. Lancer le projet avec `expo start --tunnel` dans le terminal ou modifier le script start dans le package.json
5. Scanner le QR code avec l'app Expo Go
6. Modifier le projet
7. Réinitialiser le projet avec `npm run reset-project` si besoin
8. Commiter régulièrement votre travail

## Consignes

Exemple de prompt :

Je veux créer un projet expo. C'est une application de gestion de frigo. Il n'y a pas
d'API pour stocker les données de l'utilisateur. Tout est en local dans l'Async storage.
La page d'accueil doit afficher le stock actuel et permettre d'ajouter ou retirer une
quantité à un produit. Je veux avoir une action rapide proche du pouce pour scanner un
produit. Si le code barre est reconnu, il faut aller le chercher dans la base local et
l'afficher dans une page dédiée pour gérer le stock de ce produit ou modifier la page
produit. Si le produit n'est pas dans l'API openfoodfacts, alors il me faut une page de
création d'un nouveau produit (nom, description, image). Dans le stock en page d'accueil
on affichera uniquement les produits avec une quantité supérieur à 1. Et il me faudrait
une autre tab pour afficher la collection des produits.
