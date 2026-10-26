# Examen blanc AZ-104 (en français)

Un entraînement gratuit et open source à la certification **Microsoft Azure Administrator (AZ-104)**, en français, dans une interface qui reproduit celle de l'examen réel.

**▶ S'entraîner en ligne : https://drissby13.github.io/AZ-104-training/**

> Ce projet n'est pas affilié à Microsoft, ni approuvé par Microsoft. Les questions sont **originales** : ce ne sont pas des questions de l'examen réel (« dumps »), qui sont couvertes par l'accord de confidentialité de Microsoft. Elles reprennent seulement les **formats** et les **thèmes** du programme officiel.

## Ce que tu trouves ici

- **Une banque de questions** sur les cinq domaines du programme AZ-104, tirées au hasard à chaque session. Le tirage privilégie les questions que tu n'as pas encore vues : en enchaînant les sessions, tu fais le tour de la banque.
- **Deux modes**
  - **Examen blanc** : environ 45 questions indépendantes réparties selon le poids officiel des domaines, une série de questions Oui/Non et une étude de cas. Chronomètre de 100 minutes, score sur 1 000, réussite à 700.
  - **Entraînement** : tu choisis les domaines et le nombre de questions, sans chronomètre.
- **Les formats de l'examen réel** : choix unique, choix multiple, glisser-déplacer, réorganiser l'ordre, écran actif (formulaire du portail), zone réactive, listes déroulantes (y compris dans des commandes PowerShell, Azure CLI ou KQL), grille Oui/Non, onglets Document, séries « Cette solution répond-elle à l'objectif ? » sans retour en arrière, et études de cas en onglets.
- **Un bouton « Vérifier ma réponse »** (absent de l'examen réel) qui affiche tout de suite la correction : pourquoi la bonne réponse est juste, et pourquoi les autres ne le sont pas.
- **Les résultats par domaine** et une correction détaillée de chaque question à la fin.
- **L'écran de révision**, le marquage « Revoir cette question plus tard » et la reprise d'une session interrompue (la progression est gardée dans ton navigateur).

## Le programme couvert

| Domaine | Poids à l'examen |
|---|---|
| 1. Gérer les identités et la gouvernance Azure | 20 à 25 % |
| 2. Implémenter et gérer le stockage | 15 à 20 % |
| 3. Déployer et gérer les ressources de calcul Azure | 20 à 25 % |
| 4. Implémenter et gérer les réseaux virtuels | 15 à 20 % |
| 5. Superviser et sauvegarder les ressources Azure | 10 à 15 % |

Le programme officiel à jour est sur la [page de l'examen AZ-104](https://learn.microsoft.com/fr-fr/credentials/certifications/azure-administrator/).

## Utiliser hors ligne

Le site n'a besoin d'aucun serveur ni d'aucune installation :

1. Télécharge le dépôt (bouton **Code → Download ZIP**) et décompresse-le.
2. Ouvre `index.html` dans ton navigateur.

## Structure du dépôt

```
index.html                 la page, qui charge les fichiers de questions
assets/app.js              le moteur d'examen
assets/style.css           l'interface
questions/domaine1*.js     questions du domaine 1 (idem pour 2 à 5)
questions/series.js        séries de questions Oui/Non
questions/etudes-de-cas.js études de cas
tools/validate.js          vérification automatique de la banque
```

Chaque question est un objet JavaScript avec un identifiant unique (par exemple `D4-012`), affiché sous la question. Le format de chaque type de question est décrit dans [CONTRIBUTING.md](CONTRIBUTING.md).

## Signaler une erreur

Une réponse te semble fausse ou une explication pas claire ? Clique sur **Signaler une erreur sur cette question** (dans la correction) ou [ouvre une issue](https://github.com/DrissBy13/AZ-104-training/issues/new?template=erreur.md) en indiquant l'identifiant de la question. Si possible, ajoute un lien vers la documentation Microsoft Learn qui appuie ta correction.

## Contribuer

Les nouvelles questions et les corrections sont les bienvenues. Lis [CONTRIBUTING.md](CONTRIBUTING.md), puis vérifie ta modification avec :

```bash
node tools/validate.js
```

La même vérification tourne automatiquement sur chaque pull request.

## Comment les questions ont été rédigées

Les questions et leurs explications ont été rédigées avec l'assistance de l'IA Claude (Anthropic), à partir du programme officiel et de la documentation Microsoft Learn, puis relues. Azure évolue vite et des erreurs restent possibles : en cas de doute, la documentation Microsoft fait foi, et tes signalements aident à corriger la banque.

## Licence

[MIT](LICENSE). Tu peux réutiliser, modifier et partager ce projet librement, en gardant la mention de la licence.

Microsoft, Azure et AZ-104 sont des marques de Microsoft Corporation.
