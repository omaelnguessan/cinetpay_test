# Cinetpay Test

Ce projet est une simulation d'une chaîne de production qui assemble des pistons. Il a été réalisé dans le cadre du test pour Cinetpay.

## Description

L'usine de recyclage de pistons fonctionne de la manière suivante :

- Un piston est composé de trois pièces : la tête du piston, la jupe du piston et son axe.
- Les pièces arrivent mélangées dans un même carton sur le dock de l'usine.
- La première opération consiste à trier les pièces pour les séparer.
- Chaque pièce passe ensuite sur une machine spécifique pour être usinée et améliorée en qualité.
- Les temps d'usinage sont de 2 minutes pour les têtes, 3 minutes pour les jupes et 2.5 minutes pour les axes.
- Une machine principale (MP) assemble les trois pièces pour former un piston. Le temps d'assemblage est de 1 minute.
- Les machines sont souvent en panne, avec une probabilité de panne de 25% pour chaque pièce usinée.
- La réparation d'une machine en panne nécessite entre 5 et 10 minutes.

L'objectif du projet est de reproduire cette chaîne de montage et de déterminer le temps nécessaire pour assembler 100 pistons.

## Installation

Avant de pouvoir exécuter le projet, assurez-vous d'avoir Node.js et npm (Node Package Manager) installés sur votre machine.

1. Clonez ce dépôt sur votre machine.
2. Accédez au répertoire du projet `cinetpay_test`.
3. Exécutez la commande suivante pour installer les dépendances :

```bash
npm install
```

## Utilisation

Pour lancer la simulation de la chaîne de production et obtenir le temps nécessaire pour assembler 100 pistons, exécutez la commande suivante :

```bash
npm start
```

## Tests

Le projet comprend également des tests unitaires pour vérifier le bon fonctionnement de la chaîne de production. Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```

## Auteur

Ce projet a été réalisé par N'guessan Ahouatho Omael.

## Licence

Ce projet est sous licence ISC.
