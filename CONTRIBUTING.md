# Contribuer

Merci de vouloir améliorer la banque ! Quelques règles simples.

## Les règles du jeu

1. **Uniquement des questions originales.** Ne copie jamais une question de l'examen réel, d'un « dump » ou d'un site payant. Les questions de l'examen sont couvertes par l'accord de confidentialité de Microsoft.
2. **Le vocabulaire de l'examen en français** : « interface réseau » (pas « carte réseau »), « groupe de sécurité réseau », « passerelle de réseau virtuel », « coffre Recovery Services », etc. Les noms de ressources suivent le style de l'examen : VM1, VNet1, Subnet1, RG1, storage1, User1…
3. **Une explication complète** : pourquoi la bonne réponse est juste, et pourquoi chaque autre réponse est fausse.
4. **Des réponses plausibles et de longueur proche** : la bonne réponse ne doit pas se repérer à sa longueur ou à sa précision.
5. **Une source** dans la pull request (lien Microsoft Learn) pour les points qui ne sont pas évidents.
6. Vérifie avant d'envoyer : `node tools/validate.js` doit afficher « Aucune erreur ».

## Où ajouter une question

Chaque fichier de `questions/` ajoute des questions avec `AZ.questions.push({...}, {...});`. Ajoute ta question à la fin d'un fichier du bon domaine, avec l'identifiant suivant (par exemple `D3-231`). Un nouveau fichier doit aussi être ajouté dans la liste des `<script>` de `index.html`.

Le texte (énoncé, réponses, explication) peut contenir du HTML simple : `<p>`, `<b>`, `<code>`, `<ul><li>`. La fonction `tbl(entêtes, lignes)` produit un tableau.

## Les champs communs

| Champ | Contenu |
|---|---|
| `id` | identifiant unique, `D<domaine>-<numéro>` |
| `dom` | domaine, de 1 à 5 |
| `type` | format de la question (voir ci-dessous) |
| `stem` | énoncé |
| `expl` | explication affichée à la correction |
| `docs` | facultatif : onglets Document, `[{ t: "Titre", h: "<p>contenu</p>" }]` |

Les index commencent à 0 : la première réponse est 0, la deuxième 1, etc.

## Les formats

**Choix unique**
```js
{ id:"D1-231", dom:1, type:"single", stem:"<p>…</p>",
  opts:["Réponse A","Réponse B","Réponse C","Réponse D"], ans:1, expl:"…" }
```

**Choix multiple** (`pick` = nombre de réponses à choisir)
```js
{ type:"multi", opts:[…], ans:[0,2], pick:2, … }
```

**Listes déroulantes** dans la zone de réponse
```js
{ type:"hot", rows:[ { l:"Libellé", o:["choix 0","choix 1"], a:1 }, … ], … }
```

**Listes déroulantes dans une commande** : `{0}`, `{1}`… marquent l'emplacement de chaque liste
```js
{ type:"cmd", tpl:"az vm {0} --resource-group RG1 --name VM1 --size {1}",
  rows:[ { l:"Commande", o:["resize","update"], a:0 }, { l:"Taille", o:[…], a:2 } ], … }
```

**Grille Oui/Non** (`a` : 0 = Oui, 1 = Non)
```js
{ type:"yngrid", rows:[ { l:"Affirmation", a:0 }, … ], … }
```

**Glisser-déplacer** (`a` = index de la valeur attendue dans `srcs`)
```js
{ type:"dragdrop", srcLabel:"Services", srcs:["A","B","C"],
  tgtHead:["Besoin","Service"], tgts:[ { l:"Besoin 1", a:2 }, … ], … }
```

**Réorganiser l'ordre** (`seq` = index des actions attendues, dans l'ordre ; les actions absentes de `seq` sont des pièges)
```js
{ type:"order", acts:["Action 0","Action 1","Action 2","Action 3"], seq:[2,0,3], … }
```

**Zone réactive** (cliquer sur un élément du menu ; `ans` = texte de l'élément)
```js
{ type:"hotspot", win:{ title:"storage1 | Compte de stockage",
  nav:[ { g:"", items:["Vue d'ensemble"] }, { g:"Sécurité + mise en réseau", items:["Mise en réseau","Clés d'accès"] } ] },
  ans:"Mise en réseau", … }
```

**Écran actif** (formulaire du portail ; `a:null` = contrôle non noté, `d` = valeur par défaut)
```js
{ type:"screen", win:{ title:"Créer une règle", sub:"NSG1", rows:[
  { k:"head", t:"Section" },
  { k:"text", l:"Nom", t:"VM1" },
  { k:"select", l:"Action", o:["Autoriser","Refuser"], d:0, a:1 },
  { k:"radio", l:"Protocole", opts:["TCP","UDP","Tout"], a:0 },
  { k:"check", l:"Activer l'option", a:true } ] }, … }
```

**Série Oui/Non** (`questions/series.js`) : un scénario et plusieurs solutions. `ans` : 0 = Oui, 1 = Non.
```js
AZ.series.push({ id:"S010", dom:4, title:"…", scenario:"<p>…</p>",
  items:[ { solution:"<p><b>Solution :</b> …</p><p>Cette solution répond-elle à l'objectif ?</p>", ans:0, expl:"…" }, … ] });
```

**Étude de cas** (`questions/etudes-de-cas.js`) : des onglets communs et des questions de tous les formats ci-dessus.
```js
AZ.cases.push({ id:"C005", title:"Contoso", docs:[ { t:"Présentation", h:"…" }, … ],
  questions:[ { id:"C005-1", dom:1, type:"single", … }, … ] });
```
