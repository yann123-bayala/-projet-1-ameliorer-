# Réservation de salles — SED2515

Page web qui permet de réserver une salle : choix de la date, de l'heure de début et de fin, et de la salle.

Fonctionnalités :
- message de bienvenue qui explique les 4 étapes, avec des icônes ; 14 heures de début, 15 heures de fin et 12 salles ;
- messages d'erreur précis (quel champ remplir ou corriger) ;
- page « Mes réservations » avec un message quand la liste est vide, et un bouton « Annuler » ;
- page « Aide » avec une FAQ.

Technologies : HTML, CSS et JavaScript, sans framework.

## Améliorations après l'évaluation (heuristiques de Nielsen)

| Remarque de l'évaluation | Amélioration |
|---|---|
| Correspondance avec le monde réel : ajouter un texte descriptif et des icônes pour les étapes | Message de bienvenue avec les 4 étapes illustrées |
| « Mes réservations » est vide la première fois, sans explication | Message « Vous n'avez pas encore de réservation » qui explique comment commencer |
| Gestion des erreurs : montrer comment corriger | Message qui nomme le champ à remplir ou corriger |
| Aide et documentation : pas d'aide | Nouvelle page « Aide » avec une FAQ |
| Contrôle et liberté de l'utilisateur | Bouton « Annuler » pour supprimer une réservation |

## Exécuter l'application

Ouvrir `index.html` dans un navigateur (Chrome, Firefox, Safari). Aucune installation nécessaire.

## Lancer les tests

Prérequis : Node.js version 18 ou plus. Aucune dépendance à installer.

```bash
npm test
```

## Pourcentage de code écrit par moi-même

Indiqué en commentaire en haut de chaque fichier.
