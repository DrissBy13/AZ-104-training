/* Domaine 2 : stockage (lot E : D2-201 à D2-220, questions à documents façon examen) */
AZ.questions.push(
{
 "id": "D2-201",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Comptes (cliquez sur l'onglet <b>Comptes</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Comptes",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Type</th><th>Performances</th><th>Redondance</th><th>Espace de noms hiérarchique</th><th>Région</th></tr><tr><td>st1</td><td>Universel v2</td><td>Standard</td><td>GRS</td><td>Non</td><td>France Central</td></tr><tr><td>st2</td><td>Universel v2</td><td>Standard</td><td>ZRS</td><td>Oui</td><td>France Central</td></tr><tr><td>st3</td><td>Objets blob de blocs</td><td>Premium</td><td>LRS</td><td>Non</td><td>France Central</td></tr><tr><td>st4</td><td>Partages de fichiers</td><td>Premium</td><td>ZRS</td><td>Non</td><td>France Central</td></tr><tr><td>st5</td><td>Universel v1</td><td>Standard</td><td>LRS</td><td>Non</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez placer des blobs de st1 au niveau Archive.",
   "a": 0
  },
  {
   "l": "Vous pouvez placer des blobs de st2 au niveau Archive.",
   "a": 1
  },
  {
   "l": "Une règle de cycle de vie peut déplacer les blobs de st3 vers le niveau Froid.",
   "a": 1
  },
  {
   "l": "Vous pouvez créer un partage Azure Files dans st3.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>st1 en Archive : Oui.</b> Universel v2, Standard, GRS : les trois niveaux Chaud, Froid, Très froid et Archive sont disponibles.</li><li><b>st2 en Archive : Non.</b> Le niveau Archive n'est pas pris en charge avec la redondance <b>ZRS</b> (ni GZRS, RA-GZRS).</li><li><b>st3 vers Froid : Non.</b> Un compte Premium n'a pas de niveaux d'accès : une règle de cycle de vie n'y peut que supprimer.</li><li><b>Partage dans st3 : Non.</b> Un compte Premium « Objets blob de blocs » ne contient que des blobs ; les partages Premium vont dans un compte « Partages de fichiers » (comme st4).</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st2"
  ],
  "title": "st2 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Redondance"
  ],
  "rows": [
   [
    "*Redondance",
    "ZRS · niveau Archive non disponible"
   ]
  ]
 },
 "keep": "Archive : pas avec ZRS/GZRS, pas en Premium. Premium = pas de niveaux."
},
{
 "id": "D2-202",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Comptes (cliquez sur l'onglet <b>Comptes</b>).</p><p>Vous devez héberger les charges de travail ci-dessous. Quel compte devez-vous utiliser pour chacune ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Comptes",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Type</th><th>Performances</th><th>Redondance</th><th>Espace de noms hiérarchique</th><th>Région</th></tr><tr><td>st1</td><td>Universel v2</td><td>Standard</td><td>GRS</td><td>Non</td><td>France Central</td></tr><tr><td>st2</td><td>Universel v2</td><td>Standard</td><td>ZRS</td><td>Oui</td><td>France Central</td></tr><tr><td>st3</td><td>Objets blob de blocs</td><td>Premium</td><td>LRS</td><td>Non</td><td>France Central</td></tr><tr><td>st4</td><td>Partages de fichiers</td><td>Premium</td><td>ZRS</td><td>Non</td><td>France Central</td></tr><tr><td>st5</td><td>Universel v1</td><td>Standard</td><td>LRS</td><td>Non</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Dépôt de fichiers par des partenaires en SFTP :",
   "o": [
    "st1",
    "st2",
    "st3",
    "st4"
   ],
   "a": 1
  },
  {
   "l": "Partage NFS 4.1 pour des serveurs Linux exigeants :",
   "o": [
    "st1",
    "st2",
    "st3",
    "st4"
   ],
   "a": 3
  },
  {
   "l": "Archives conservées 10 ans au coût le plus bas :",
   "o": [
    "st1",
    "st2",
    "st3",
    "st4"
   ],
   "a": 0
  },
  {
   "l": "Blobs à très faible latence pour une application d'analyse :",
   "o": [
    "st1",
    "st2",
    "st3",
    "st4"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>SFTP → st2 :</b> SFTP pour le stockage blob exige l'<b>espace de noms hiérarchique</b>, activé seulement sur st2.</li><li><b>NFS 4.1 → st4 :</b> les partages Azure Files NFS demandent un compte Premium <b>Partages de fichiers</b>.</li><li><b>Archives → st1 :</b> seul compte où le niveau Archive est disponible (st2 est en ZRS, st3 en Premium).</li><li><b>Faible latence → st3 :</b> Premium objets blob de blocs, sur SSD.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st2"
  ],
  "title": "st2 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Redondance"
  ],
  "rows": [
   [
    "*SFTP",
    "Activé (espace de noms hiérarchique requis)"
   ]
  ]
 },
 "keep": "SFTP et NFS 3.0 blob = espace de noms hiérarchique. NFS Azure Files = Premium partages de fichiers."
},
{
 "id": "D2-203",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Comptes (cliquez sur l'onglet <b>Comptes</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Comptes",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Type</th><th>Performances</th><th>Redondance</th><th>Espace de noms hiérarchique</th><th>Région</th></tr><tr><td>st1</td><td>Universel v2</td><td>Standard</td><td>GRS</td><td>Non</td><td>France Central</td></tr><tr><td>st2</td><td>Universel v2</td><td>Standard</td><td>ZRS</td><td>Oui</td><td>France Central</td></tr><tr><td>st3</td><td>Objets blob de blocs</td><td>Premium</td><td>LRS</td><td>Non</td><td>France Central</td></tr><tr><td>st4</td><td>Partages de fichiers</td><td>Premium</td><td>ZRS</td><td>Non</td><td>France Central</td></tr><tr><td>st5</td><td>Universel v1</td><td>Standard</td><td>LRS</td><td>Non</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez configurer la réplication d'objets de st1 vers st2.",
   "a": 1
  },
  {
   "l": "Vous pouvez créer une règle de gestion du cycle de vie sur st5 sans le modifier.",
   "a": 1
  },
  {
   "l": "Vous pouvez désactiver l'espace de noms hiérarchique de st2.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>st1 → st2 : Non.</b> La réplication d'objets n'est pas prise en charge quand l'espace de noms hiérarchique est activé, à la source comme à la destination.</li><li><b>Cycle de vie sur st5 : Non.</b> La gestion du cycle de vie demande un compte universel v2 (ou Premium objets blob de blocs, ou Blob Storage). Il faut d'abord mettre st5 à niveau en v2.</li><li><b>Désactiver l'espace de noms hiérarchique : Non.</b> L'activation (mise à niveau vers Data Lake Storage) est irréversible.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st5"
  ],
  "title": "st5 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Redondance"
  ],
  "rows": [
   [
    "*Type de compte",
    "StorageV1 · Mettre à niveau vers universel v2"
   ]
  ]
 },
 "keep": "Pas de réplication d'objets avec l'espace de noms hiérarchique. Cycle de vie = v2."
},
{
 "id": "D2-204",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Comptes (cliquez sur l'onglet <b>Comptes</b>).</p><p>Les données de st2 doivent être déplacées automatiquement vers le niveau Archive après 180 jours. La solution doit limiter l'effort d'administration.</p><p>Que devez-vous faire en premier ?</p>",
 "docs": [
  {
   "t": "Comptes",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Type</th><th>Performances</th><th>Redondance</th><th>Espace de noms hiérarchique</th><th>Région</th></tr><tr><td>st1</td><td>Universel v2</td><td>Standard</td><td>GRS</td><td>Non</td><td>France Central</td></tr><tr><td>st2</td><td>Universel v2</td><td>Standard</td><td>ZRS</td><td>Oui</td><td>France Central</td></tr><tr><td>st3</td><td>Objets blob de blocs</td><td>Premium</td><td>LRS</td><td>Non</td><td>France Central</td></tr><tr><td>st4</td><td>Partages de fichiers</td><td>Premium</td><td>ZRS</td><td>Non</td><td>France Central</td></tr><tr><td>st5</td><td>Universel v1</td><td>Standard</td><td>LRS</td><td>Non</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "opts": [
  "Convertir st2 en LRS (ou GRS), puis créer la règle de cycle de vie",
  "Désactiver l'espace de noms hiérarchique de st2, puis créer la règle",
  "Créer la règle de cycle de vie sur st2 : elle convertira la redondance",
  "Mettre st2 à niveau en Premium objets blob de blocs, puis créer la règle"
 ],
 "ans": 0,
 "expl": "<p>Le blocage vient de la redondance <b>ZRS</b>, incompatible avec le niveau Archive. On change la redondance de st2 (vers LRS, GRS ou RA-GRS), puis une règle de cycle de vie <code>tierToArchive</code> après 180 jours fait le reste.</p><ul><li>L'espace de noms hiérarchique n'empêche pas l'Archive, et il ne se désactive pas.</li><li>Une règle de cycle de vie ne modifie jamais la redondance.</li><li>Premium n'a pas de niveaux du tout.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st2"
  ],
  "title": "st2 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Redondance"
  ],
  "rows": [
   [
    "*Redondance",
    "ZRS → LRS (conversion demandée)"
   ]
  ]
 },
 "keep": "Archive bloqué en ZRS : changer la redondance d'abord."
},
{
 "id": "D2-205",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Accès (cliquez sur l'onglet <b>Accès</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Accès",
   "h": "<p>Le groupe de ressources RG1 contient le compte <b>st1</b>, avec les conteneurs <b>c1</b> et <b>c2</b>. « Autoriser l'accès à la clé du compte de stockage » est <b>activé</b> sur st1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur des données blob du stockage</td><td>st1</td></tr><tr><td>User2</td><td>Contributeur aux données blob du stockage</td><td>Conteneur c1</td></tr><tr><td>User3</td><td>Contributeur</td><td>st1</td></tr><tr><td>User4</td><td>Lecteur</td><td>RG1</td></tr><tr><td>User5</td><td>Propriétaire des données blob du stockage</td><td>RG1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 peut lire les blobs de c2.",
   "a": 0
  },
  {
   "l": "User2 peut écrire des blobs dans c2.",
   "a": 1
  },
  {
   "l": "User3 peut lire les blobs de c1 depuis le portail.",
   "a": 0
  },
  {
   "l": "User4 peut lire les blobs de c1 depuis le portail.",
   "a": 1
  },
  {
   "l": "User5 peut supprimer des blobs de c2.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>User1 : Oui.</b> Un rôle de données sur le compte s'hérite sur tous ses conteneurs.</li><li><b>User2 : Non.</b> Son rôle est limité au conteneur c1.</li><li><b>User3 : Oui.</b> Contributeur n'est pas un rôle de données, mais il permet de <b>lister les clés du compte</b>. Comme l'accès par clé est activé, le portail utilise la clé pour afficher les données.</li><li><b>User4 : Non.</b> Lecteur ne donne ni rôle de données ni accès aux clés.</li><li><b>User5 : Oui.</b> Propriétaire des données blob sur RG1 s'hérite sur st1 et ses conteneurs.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Conteneurs",
   "c2"
  ],
  "title": "c2 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "User1",
    "Lecteur des données blob (hérité de st1)"
   ],
   [
    "*User5",
    "Propriétaire des données blob (hérité de RG1)"
   ]
  ]
 },
 "keep": "Rôles de données hérités de haut en bas. Contributeur = accès aux clés, donc aux données si Shared Key est permis."
},
{
 "id": "D2-206",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Accès (cliquez sur l'onglet <b>Accès</b>).</p><p>Vous désactivez « Autoriser l'accès à la clé du compte de stockage » sur st1. User3 doit continuer à lire et écrire les blobs de c1 et c2. Vous devez respecter le principe du moindre privilège.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Accès",
   "h": "<p>Le groupe de ressources RG1 contient le compte <b>st1</b>, avec les conteneurs <b>c1</b> et <b>c2</b>. « Autoriser l'accès à la clé du compte de stockage » est <b>activé</b> sur st1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur des données blob du stockage</td><td>st1</td></tr><tr><td>User2</td><td>Contributeur aux données blob du stockage</td><td>Conteneur c1</td></tr><tr><td>User3</td><td>Contributeur</td><td>st1</td></tr><tr><td>User4</td><td>Lecteur</td><td>RG1</td></tr><tr><td>User5</td><td>Propriétaire des données blob du stockage</td><td>RG1</td></tr></table></div>"
  }
 ],
 "opts": [
  "Attribuer à User3 Contributeur aux données blob sur st1",
  "Attribuer à User3 Propriétaire des données blob sur RG1",
  "Rien : le rôle Contributeur sur st1 suffit toujours",
  "Attribuer à User3 Propriétaire sur le compte st1"
 ],
 "ans": 0,
 "expl": "<p>Sans accès par clé, seules les autorisations Microsoft Entra donnent accès aux données. <b>Contributeur aux données blob</b> sur st1 couvre lecture et écriture dans c1 et c2, sans plus.</p><ul><li>Propriétaire des données blob ajoute la gestion des ACL, et l'étendue RG1 dépasse le besoin.</li><li>Contributeur ou Propriétaire sont des rôles de gestion : sans clé, ils ne lisent pas les données.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Conteneurs",
   "c2"
  ],
  "title": "c2 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "User1",
    "Lecteur des données blob (hérité de st1)"
   ],
   [
    "*User5",
    "Propriétaire des données blob (hérité de RG1)"
   ]
  ]
 },
 "keep": "Shared Key désactivé : seuls les rôles de données donnent accès aux blobs."
},
{
 "id": "D2-207",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document SAS (cliquez sur l'onglet <b>SAS</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "SAS",
   "h": "<p>Compte <b>st1</b>, conteneurs c1 et c2. Le conteneur c1 a une stratégie d'accès stockée <b>pol1</b> (lecture, expiration le 31 décembre).</p><div class=\"tw\"><table class=\"tbl\"><tr><th>SAS</th><th>Type</th><th>Signée avec</th><th>Étendue</th><th>Autorisations</th><th>Expiration</th></tr><tr><td>SAS1</td><td>SAS de service</td><td>key1, liée à pol1</td><td>c1</td><td>Celles de pol1</td><td>Celle de pol1</td></tr><tr><td>SAS2</td><td>SAS de service</td><td>key1</td><td>c2</td><td>Lecture, écriture</td><td>Dans 1 an</td></tr><tr><td>SAS3</td><td>SAS de délégation d'utilisateur</td><td>Clé de délégation de User2</td><td>c1</td><td>Lecture</td><td>Dans 3 jours</td></tr><tr><td>SAS4</td><td>SAS de compte</td><td>key2</td><td>Service blob</td><td>Lecture, liste</td><td>Dans 6 mois</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Si vous régénérez key1, SAS2 cesse de fonctionner.",
   "a": 0
  },
  {
   "l": "Si vous régénérez key1, SAS3 cesse de fonctionner.",
   "a": 1
  },
  {
   "l": "Si vous supprimez pol1, SAS1 cesse de fonctionner et les autres SAS continuent.",
   "a": 0
  },
  {
   "l": "SAS4 permet de lister les blobs de c2.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>key1 et SAS2 : Oui.</b> Une SAS de service ou de compte est signée par une clé du compte : la régénérer invalide toutes les SAS signées avec elle (SAS1 et SAS2).</li><li><b>key1 et SAS3 : Non.</b> Une SAS de délégation d'utilisateur est signée par une clé de délégation obtenue avec un compte Microsoft Entra, pas par key1. On la révoque en révoquant les clés de délégation d'utilisateur.</li><li><b>pol1 : Oui.</b> Supprimer ou modifier la stratégie stockée révoque seulement les SAS qui y sont liées (SAS1).</li><li><b>SAS4 : Oui.</b> SAS de compte sur le service blob avec Lecture et Liste : elle couvre tous les conteneurs, dont c2.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1"
  ],
  "title": "st1 | Clés d'accès",
  "menu": [
   "Vue d'ensemble",
   "*Clés d'accès",
   "Signature d'accès partagé"
  ],
  "rows": [
   [
    "*key1",
    "Régénérer → SAS1 et SAS2 invalidées"
   ],
   [
    "key2",
    "SAS4"
   ]
  ]
 },
 "keep": "Régénérer une clé = toutes ses SAS révoquées. Stratégie stockée = révocation ciblée. Délégation = indépendante des clés."
},
{
 "id": "D2-208",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document SAS (cliquez sur l'onglet <b>SAS</b>).</p><p>SAS2 a fuité. Vous devez la révoquer en touchant le moins possible aux autres SAS.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "SAS",
   "h": "<p>Compte <b>st1</b>, conteneurs c1 et c2. Le conteneur c1 a une stratégie d'accès stockée <b>pol1</b> (lecture, expiration le 31 décembre).</p><div class=\"tw\"><table class=\"tbl\"><tr><th>SAS</th><th>Type</th><th>Signée avec</th><th>Étendue</th><th>Autorisations</th><th>Expiration</th></tr><tr><td>SAS1</td><td>SAS de service</td><td>key1, liée à pol1</td><td>c1</td><td>Celles de pol1</td><td>Celle de pol1</td></tr><tr><td>SAS2</td><td>SAS de service</td><td>key1</td><td>c2</td><td>Lecture, écriture</td><td>Dans 1 an</td></tr><tr><td>SAS3</td><td>SAS de délégation d'utilisateur</td><td>Clé de délégation de User2</td><td>c1</td><td>Lecture</td><td>Dans 3 jours</td></tr><tr><td>SAS4</td><td>SAS de compte</td><td>key2</td><td>Service blob</td><td>Lecture, liste</td><td>Dans 6 mois</td></tr></table></div>"
  }
 ],
 "opts": [
  "Régénérer key1, puis réémettre SAS1 avec la nouvelle clé",
  "Supprimer la stratégie d'accès stockée pol1 du conteneur c1",
  "Révoquer les clés de délégation d'utilisateur du compte st1",
  "Régénérer key2, puis réémettre SAS4 avec la nouvelle clé"
 ],
 "ans": 0,
 "expl": "<p>SAS2 est une SAS ad hoc signée par key1, sans stratégie stockée : la seule façon de la révoquer avant son expiration est de <b>régénérer key1</b>. Cela invalide aussi SAS1, qu'il faut réémettre. SAS3 et SAS4 ne sont pas touchées.</p><ul><li>pol1 ne concerne que SAS1.</li><li>Les clés de délégation ne concernent que SAS3.</li><li>key2 ne concerne que SAS4.</li></ul><p>Pour pouvoir révoquer une SAS de façon ciblée à l'avenir, on la lie à une stratégie d'accès stockée.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1"
  ],
  "title": "st1 | Clés d'accès",
  "menu": [
   "Vue d'ensemble",
   "*Clés d'accès",
   "Signature d'accès partagé"
  ],
  "rows": [
   [
    "*key1",
    "Régénérer → SAS1 et SAS2 invalidées"
   ],
   [
    "key2",
    "SAS4"
   ]
  ]
 },
 "keep": "SAS ad hoc : révocation = régénérer la clé qui l'a signée."
},
{
 "id": "D2-209",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Cycle de vie (cliquez sur l'onglet <b>Cycle de vie</b>).</p><p>Les blobs ci-dessous sont au niveau Chaud au départ. Quel est leur état une fois les règles appliquées ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Cycle de vie",
   "h": "<p>Compte <b>st1</b> (universel v2, GRS). Le suivi de l'heure du dernier accès est <b>désactivé</b>. Règles de gestion du cycle de vie (blobs de base) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle</th><th>Filtre</th><th>Action</th></tr><tr><td>R1</td><td>Préfixe logs/</td><td>Froid 30 jours après la dernière modification ; suppression 365 jours après la dernière modification</td></tr><tr><td>R2</td><td>Préfixe logs/archive/</td><td>Archive 90 jours après la dernière modification</td></tr><tr><td>R3</td><td>Étiquette d'index Projet = Fin</td><td>Suppression 7 jours après la création</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "logs/app.log, modifié il y a 40 jours :",
   "o": [
    "Chaud",
    "Froid",
    "Archive",
    "Supprimé"
   ],
   "a": 1
  },
  {
   "l": "logs/archive/2024.log, modifié il y a 100 jours :",
   "o": [
    "Chaud",
    "Froid",
    "Archive",
    "Supprimé"
   ],
   "a": 2
  },
  {
   "l": "logs/app-old.log, modifié il y a 400 jours :",
   "o": [
    "Chaud",
    "Froid",
    "Archive",
    "Supprimé"
   ],
   "a": 3
  },
  {
   "l": "data/rapport.pdf, modifié il y a 200 jours, sans étiquette :",
   "o": [
    "Chaud",
    "Froid",
    "Archive",
    "Supprimé"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>app.log (40 j) → Froid :</b> R1 s'applique (préfixe logs/, plus de 30 jours).</li><li><b>archive/2024.log (100 j) → Archive :</b> R1 (Froid) et R2 (Archive) s'appliquent toutes les deux. Quand plusieurs actions visent le même blob, la <b>moins chère</b> l'emporte : Archive.</li><li><b>app-old.log (400 j) → Supprimé :</b> R1 supprime après 365 jours ; la suppression est l'action la moins chère.</li><li><b>data/rapport.pdf → Chaud :</b> aucune règle ne correspond (ni préfixe logs/, ni étiquette).</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1"
  ],
  "title": "st1 | Gestion du cycle de vie",
  "menu": [
   "Vue d'ensemble",
   "Gestion des données",
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "R1 · logs/",
    "Froid à 30 j · suppression à 365 j"
   ],
   [
    "*R2 · logs/archive/",
    "Archive à 90 j"
   ]
  ],
  "btn": "+ Ajouter une règle"
 },
 "keep": "Plusieurs règles sur un blob : l'action la moins chère gagne (suppression > Archive > Froid)."
},
{
 "id": "D2-210",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Cycle de vie (cliquez sur l'onglet <b>Cycle de vie</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Cycle de vie",
   "h": "<p>Compte <b>st1</b> (universel v2, GRS). Le suivi de l'heure du dernier accès est <b>désactivé</b>. Règles de gestion du cycle de vie (blobs de base) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle</th><th>Filtre</th><th>Action</th></tr><tr><td>R1</td><td>Préfixe logs/</td><td>Froid 30 jours après la dernière modification ; suppression 365 jours après la dernière modification</td></tr><tr><td>R2</td><td>Préfixe logs/archive/</td><td>Archive 90 jours après la dernière modification</td></tr><tr><td>R3</td><td>Étiquette d'index Projet = Fin</td><td>Suppression 7 jours après la création</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Un blob étiqueté Projet = Fin, créé il y a 10 jours, est supprimé.",
   "a": 0
  },
  {
   "l": "Vous pouvez ajouter une règle « Froid 60 jours après le dernier accès » sans autre modification du compte.",
   "a": 1
  },
  {
   "l": "Les nouvelles règles s'appliquent dans l'heure qui suit leur enregistrement.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Étiquette Projet = Fin : Oui.</b> R3 filtre sur une étiquette d'index (blobIndexMatch) et supprime 7 jours après la création.</li><li><b>Règle sur le dernier accès : Non.</b> Une condition daysAfterLastAccessTimeGreaterThan exige d'activer d'abord le <b>suivi de l'heure du dernier accès</b>.</li><li><b>Dans l'heure : Non.</b> La stratégie s'exécute une fois par jour ; une nouvelle règle peut mettre jusqu'à 24 heures à s'appliquer.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1"
  ],
  "title": "st1 | Gestion du cycle de vie",
  "menu": [
   "Vue d'ensemble",
   "Gestion des données",
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "R1 · logs/",
    "Froid à 30 j · suppression à 365 j"
   ],
   [
    "*R2 · logs/archive/",
    "Archive à 90 j"
   ]
  ],
  "btn": "+ Ajouter une règle"
 },
 "keep": "Règles « dernier accès » = suivi du dernier accès activé. Exécution quotidienne."
},
{
 "id": "D2-211",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Cycle de vie (cliquez sur l'onglet <b>Cycle de vie</b>).</p><p>Les journaux de logs/ que personne ne lit depuis 60 jours doivent passer au niveau Froid, même s'ils ont été modifiés récemment. Les autres règles doivent continuer à s'appliquer.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Cycle de vie",
   "h": "<p>Compte <b>st1</b> (universel v2, GRS). Le suivi de l'heure du dernier accès est <b>désactivé</b>. Règles de gestion du cycle de vie (blobs de base) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle</th><th>Filtre</th><th>Action</th></tr><tr><td>R1</td><td>Préfixe logs/</td><td>Froid 30 jours après la dernière modification ; suppression 365 jours après la dernière modification</td></tr><tr><td>R2</td><td>Préfixe logs/archive/</td><td>Archive 90 jours après la dernière modification</td></tr><tr><td>R3</td><td>Étiquette d'index Projet = Fin</td><td>Suppression 7 jours après la création</td></tr></table></div>"
  }
 ],
 "opts": [
  "Activer le suivi du dernier accès, puis une règle sur le dernier accès",
  "Remplacer la condition de R1 par « 60 jours après la création »",
  "Ajouter à R1 une étiquette d'index Lu = Non sur chaque blob",
  "Activer le flux de modification, puis une règle sur les lectures"
 ],
 "ans": 0,
 "expl": "<p>Le critère est la <b>lecture</b>, pas la modification. Il faut activer le <b>suivi de l'heure du dernier accès</b>, puis une règle avec daysAfterLastAccessTimeGreaterThan = 60 sur le préfixe logs/.</p><ul><li>La date de création ne dit rien des lectures.</li><li>Étiqueter chaque blob à la main ne suit pas les lectures et demande un effort permanent.</li><li>Le flux de modification enregistre les écritures, pas les lectures, et n'est pas une condition de cycle de vie.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1"
  ],
  "title": "st1 | Gestion du cycle de vie",
  "menu": [
   "Vue d'ensemble",
   "Gestion des données",
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "R1 · logs/",
    "Froid à 30 j · suppression à 365 j"
   ],
   [
    "*R2 · logs/archive/",
    "Archive à 90 j"
   ]
  ],
  "btn": "+ Ajouter une règle"
 },
 "keep": "« Non lu depuis N jours » = suivi du dernier accès + daysAfterLastAccessTimeGreaterThan."
},
{
 "id": "D2-212",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Fichiers (cliquez sur l'onglet <b>Fichiers</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Fichiers",
   "h": "<p>Le compte <b>st1</b> contient les partages <b>sh1</b> et <b>sh2</b>. L'authentification basée sur l'identité <b>AD DS</b> est activée. Permission par défaut au niveau du partage : <b>aucune</b>. UserA, UserB et UserC sont des comptes AD DS synchronisés avec Microsoft Entra ID ; UserD n'existe que dans Microsoft Entra ID.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identité</th><th>Rôle</th><th>Étendue</th></tr><tr><td>GroupA (UserA)</td><td>Contributeur de partage SMB de données de fichier de stockage</td><td>sh1</td></tr><tr><td>GroupB (UserB)</td><td>Lecteur de partage SMB de données de fichier de stockage</td><td>st1</td></tr><tr><td>UserD</td><td>Contributeur de partage SMB de données de fichier de stockage</td><td>sh1</td></tr></table></div><p>Sur sh1, le dossier <b>Finance</b> a les autorisations NTFS : GroupA Lecture, GroupB Modification.</p>"
  }
 ],
 "rows": [
  {
   "l": "UserA peut modifier un fichier du dossier Finance.",
   "a": 1
  },
  {
   "l": "UserB peut modifier un fichier du dossier Finance.",
   "a": 1
  },
  {
   "l": "UserB peut lire les fichiers de sh2 (si les autorisations NTFS le permettent).",
   "a": 0
  },
  {
   "l": "UserC peut monter sh1.",
   "a": 1
  },
  {
   "l": "UserD peut monter sh1 avec son identité.",
   "a": 1
  }
 ],
 "expl": "<p>L'accès effectif est le <b>plus restrictif</b> entre la permission au niveau du partage (rôle RBAC) et les autorisations NTFS.</p><ul><li><b>UserA : Non.</b> Contributeur au niveau du partage, mais NTFS Lecture seule sur Finance.</li><li><b>UserB : Non.</b> NTFS Modification, mais seulement Lecteur au niveau du partage.</li><li><b>UserB sur sh2 : Oui.</b> Son rôle est attribué sur le <b>compte</b>, donc sur tous les partages.</li><li><b>UserC : Non.</b> Aucun rôle et aucune permission par défaut au niveau du partage.</li><li><b>UserD : Non.</b> Avec AD DS, l'identité doit exister dans AD DS (identité hybride). Un compte uniquement cloud ne peut pas obtenir de ticket Kerberos du domaine.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Partages de fichiers",
   "sh1"
  ],
  "title": "sh1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "GroupA",
    "Contributeur de partage SMB"
   ],
   [
    "*GroupB",
    "Lecteur de partage SMB (hérité de st1)"
   ]
  ]
 },
 "keep": "Azure Files : accès = minimum entre rôle de partage et NTFS. AD DS = identités hybrides."
},
{
 "id": "D2-213",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Fichiers (cliquez sur l'onglet <b>Fichiers</b>).</p><p>Tous les utilisateurs du domaine doivent pouvoir lire sh1 et sh2, selon les autorisations NTFS, sans attribuer de rôle à chacun.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Fichiers",
   "h": "<p>Le compte <b>st1</b> contient les partages <b>sh1</b> et <b>sh2</b>. L'authentification basée sur l'identité <b>AD DS</b> est activée. Permission par défaut au niveau du partage : <b>aucune</b>. UserA, UserB et UserC sont des comptes AD DS synchronisés avec Microsoft Entra ID ; UserD n'existe que dans Microsoft Entra ID.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identité</th><th>Rôle</th><th>Étendue</th></tr><tr><td>GroupA (UserA)</td><td>Contributeur de partage SMB de données de fichier de stockage</td><td>sh1</td></tr><tr><td>GroupB (UserB)</td><td>Lecteur de partage SMB de données de fichier de stockage</td><td>st1</td></tr><tr><td>UserD</td><td>Contributeur de partage SMB de données de fichier de stockage</td><td>sh1</td></tr></table></div><p>Sur sh1, le dossier <b>Finance</b> a les autorisations NTFS : GroupA Lecture, GroupB Modification.</p>"
  }
 ],
 "opts": [
  "Définir la permission par défaut du partage sur Lecteur de partage SMB",
  "Attribuer à chaque utilisateur Lecteur de partage SMB sur st1",
  "Générer une SAS de compte en lecture et la distribuer aux postes",
  "Ajouter « Utilisateurs du domaine » en NTFS sur sh1 et sh2 seulement"
 ],
 "ans": 0,
 "expl": "<p>La <b>permission par défaut au niveau du partage</b> s'applique à toute identité authentifiée qui n'a pas de rôle explicite. La régler sur Lecteur de partage SMB permet à tous les utilisateurs du domaine de lire, puis NTFS affine.</p><ul><li>Un rôle par utilisateur contredit l'énoncé.</li><li>Une SAS ne sert pas au montage SMB et contourne l'identité.</li><li>NTFS seul ne suffit pas : sans permission au niveau du partage, l'accès est refusé.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Partages de fichiers"
  ],
  "title": "st1 | Partages de fichiers",
  "menu": [
   "*Partages de fichiers",
   "Paramètres de partage"
  ],
  "rows": [
   [
    "*Permission par défaut au niveau du partage",
    "Lecteur de partage SMB"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Tout le monde sans rôle explicite : permission par défaut au niveau du partage."
},
{
 "id": "D2-214",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Fichiers (cliquez sur l'onglet <b>Fichiers</b>).</p><p>UserB doit pouvoir modifier les fichiers de Finance, et un administrateur doit pouvoir modifier les autorisations NTFS de sh1 depuis l'Explorateur Windows.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Fichiers",
   "h": "<p>Le compte <b>st1</b> contient les partages <b>sh1</b> et <b>sh2</b>. L'authentification basée sur l'identité <b>AD DS</b> est activée. Permission par défaut au niveau du partage : <b>aucune</b>. UserA, UserB et UserC sont des comptes AD DS synchronisés avec Microsoft Entra ID ; UserD n'existe que dans Microsoft Entra ID.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identité</th><th>Rôle</th><th>Étendue</th></tr><tr><td>GroupA (UserA)</td><td>Contributeur de partage SMB de données de fichier de stockage</td><td>sh1</td></tr><tr><td>GroupB (UserB)</td><td>Lecteur de partage SMB de données de fichier de stockage</td><td>st1</td></tr><tr><td>UserD</td><td>Contributeur de partage SMB de données de fichier de stockage</td><td>sh1</td></tr></table></div><p>Sur sh1, le dossier <b>Finance</b> a les autorisations NTFS : GroupA Lecture, GroupB Modification.</p>"
  }
 ],
 "rows": [
  {
   "l": "Pour UserB (GroupB) :",
   "o": [
    "Contributeur de partage SMB sur sh1",
    "NTFS Contrôle total sur Finance",
    "Lecteur des données blob sur st1",
    "Contributeur sur st1"
   ],
   "a": 0
  },
  {
   "l": "Pour l'administrateur :",
   "o": [
    "Contributeur élevé de partage SMB",
    "Lecteur de partage SMB",
    "Contributeur de compte de stockage",
    "Propriétaire des données blob"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>UserB :</b> NTFS donne déjà Modification ; il manque la permission <b>au niveau du partage</b> en écriture : Contributeur de partage SMB sur sh1 (attribué à GroupB).</li><li><b>Administrateur :</b> modifier les ACL NTFS demande <b>Contributeur élevé de partage SMB</b> (ou un montage avec la clé du compte). Contributeur de compte de stockage gère le compte, pas les ACL des fichiers.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Partages de fichiers",
   "sh1"
  ],
  "title": "sh1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "GroupA",
    "Contributeur de partage SMB"
   ],
   [
    "*GroupB",
    "Lecteur de partage SMB (hérité de st1)"
   ]
  ]
 },
 "keep": "Écrire = Contributeur de partage SMB. Changer les ACL NTFS = Contributeur élevé."
},
{
 "id": "D2-215",
 "dom": 2,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Accès (cliquez sur l'onglet <b>Accès</b>).</p><p>Une application hébergée sur la VM VM1 doit écrire des blobs dans c1 uniquement, sans secret stocké dans son code ni sur la VM.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Accès",
   "h": "<p>Le groupe de ressources RG1 contient le compte <b>st1</b>, avec les conteneurs <b>c1</b> et <b>c2</b>. « Autoriser l'accès à la clé du compte de stockage » est <b>activé</b> sur st1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur des données blob du stockage</td><td>st1</td></tr><tr><td>User2</td><td>Contributeur aux données blob du stockage</td><td>Conteneur c1</td></tr><tr><td>User3</td><td>Contributeur</td><td>st1</td></tr><tr><td>User4</td><td>Lecteur</td><td>RG1</td></tr><tr><td>User5</td><td>Propriétaire des données blob du stockage</td><td>RG1</td></tr></table></div>"
  }
 ],
 "opts": [
  "Activer une identité managée sur VM1",
  "Attribuer à cette identité Contributeur aux données blob sur c1",
  "Stocker key1 dans une variable d'environnement de VM1",
  "Attribuer à cette identité Contributeur sur le compte st1"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>Une <b>identité managée</b> donne à la VM une identité Microsoft Entra sans secret à gérer. Le rôle <b>Contributeur aux données blob</b> à l'étendue du <b>conteneur c1</b> limite l'écriture à ce conteneur.</p><ul><li>key1 est un secret qui donne un accès complet au compte.</li><li>Contributeur sur st1 est un rôle de gestion, trop large, et ne donne les données que par la clé.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Conteneurs",
   "c2"
  ],
  "title": "c2 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "User1",
    "Lecteur des données blob (hérité de st1)"
   ],
   [
    "*User5",
    "Propriétaire des données blob (hérité de RG1)"
   ]
  ]
 },
 "keep": "Application Azure → identité managée + rôle de données à l'étendue la plus petite."
},
{
 "id": "D2-216",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Comptes (cliquez sur l'onglet <b>Comptes</b>).</p><p>st5 doit utiliser la gestion du cycle de vie et le niveau Très froid. Les URL des applications ne doivent pas changer.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Comptes",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Type</th><th>Performances</th><th>Redondance</th><th>Espace de noms hiérarchique</th><th>Région</th></tr><tr><td>st1</td><td>Universel v2</td><td>Standard</td><td>GRS</td><td>Non</td><td>France Central</td></tr><tr><td>st2</td><td>Universel v2</td><td>Standard</td><td>ZRS</td><td>Oui</td><td>France Central</td></tr><tr><td>st3</td><td>Objets blob de blocs</td><td>Premium</td><td>LRS</td><td>Non</td><td>France Central</td></tr><tr><td>st4</td><td>Partages de fichiers</td><td>Premium</td><td>ZRS</td><td>Non</td><td>France Central</td></tr><tr><td>st5</td><td>Universel v1</td><td>Standard</td><td>LRS</td><td>Non</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "opts": [
  "Mettre st5 à niveau vers universel v2",
  "Créer un compte v2 et y copier les données",
  "Passer st5 en GRS, puis créer la règle",
  "Activer l'espace de noms hiérarchique de st5"
 ],
 "ans": 0,
 "expl": "<p>La <b>mise à niveau vers universel v2</b> se fait en place, sans interruption ni changement de nom ou d'URL, et donne accès aux niveaux d'accès et au cycle de vie. Elle est irréversible.</p><ul><li>Un nouveau compte changerait le nom et donc les URL.</li><li>La redondance ne change pas le type de compte.</li><li>L'espace de noms hiérarchique ne s'active pas sur un compte v1.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st5"
  ],
  "title": "st5 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Redondance"
  ],
  "rows": [
   [
    "*Type de compte",
    "StorageV2 (mis à niveau)"
   ]
  ]
 },
 "keep": "v1 → v2 : en place, mêmes URL, irréversible."
},
{
 "id": "D2-217",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document SAS (cliquez sur l'onglet <b>SAS</b>).</p><p>À l'avenir, vous devez pouvoir révoquer une SAS donnée sans régénérer de clé ni toucher aux autres SAS.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "SAS",
   "h": "<p>Compte <b>st1</b>, conteneurs c1 et c2. Le conteneur c1 a une stratégie d'accès stockée <b>pol1</b> (lecture, expiration le 31 décembre).</p><div class=\"tw\"><table class=\"tbl\"><tr><th>SAS</th><th>Type</th><th>Signée avec</th><th>Étendue</th><th>Autorisations</th><th>Expiration</th></tr><tr><td>SAS1</td><td>SAS de service</td><td>key1, liée à pol1</td><td>c1</td><td>Celles de pol1</td><td>Celle de pol1</td></tr><tr><td>SAS2</td><td>SAS de service</td><td>key1</td><td>c2</td><td>Lecture, écriture</td><td>Dans 1 an</td></tr><tr><td>SAS3</td><td>SAS de délégation d'utilisateur</td><td>Clé de délégation de User2</td><td>c1</td><td>Lecture</td><td>Dans 3 jours</td></tr><tr><td>SAS4</td><td>SAS de compte</td><td>key2</td><td>Service blob</td><td>Lecture, liste</td><td>Dans 6 mois</td></tr></table></div>"
  }
 ],
 "opts": [
  "Lier chaque SAS de service à sa propre stratégie d'accès stockée",
  "Émettre des SAS de délégation, puis révoquer les clés de délégation",
  "Émettre des SAS de compte signées alternativement par key1 et key2",
  "Émettre des SAS de service sans date d'expiration, signées par key2"
 ],
 "ans": 0,
 "expl": "<ul><li><b>Une stratégie stockée par SAS : oui.</b> Supprimer ou modifier la stratégie révoque uniquement la SAS liée (cinq stratégies au plus par conteneur).</li><li>Révoquer les clés de délégation d'utilisateur invalide <b>toutes</b> les SAS de délégation du compte, pas une seule.</li><li>Les SAS de compte ne se lient pas à une stratégie stockée : seule la régénération de la clé les révoque, avec toutes les autres SAS signées par cette clé.</li><li>Une SAS sans expiration est une mauvaise pratique et reste révocable seulement par la clé.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Conteneurs",
   "c1"
  ],
  "title": "c1 | Stratégie d'accès",
  "menu": [
   "Vue d'ensemble",
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "*pol1",
    "Lecture · 31/12"
   ]
  ],
  "btn": "+ Ajouter une stratégie"
 },
 "keep": "Révocation ciblée : stratégie d'accès stockée (SAS de service). SAS de compte : pas de stratégie."
},
{
 "id": "D2-218",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Fichiers (cliquez sur l'onglet <b>Fichiers</b>).</p><p>UserD, compte uniquement cloud, doit accéder à sh1 depuis un poste joint à Microsoft Entra ID, sans contrôleur de domaine joignable.</p><p>Quelle source d'identité devez-vous activer à la place d'AD DS ?</p>",
 "docs": [
  {
   "t": "Fichiers",
   "h": "<p>Le compte <b>st1</b> contient les partages <b>sh1</b> et <b>sh2</b>. L'authentification basée sur l'identité <b>AD DS</b> est activée. Permission par défaut au niveau du partage : <b>aucune</b>. UserA, UserB et UserC sont des comptes AD DS synchronisés avec Microsoft Entra ID ; UserD n'existe que dans Microsoft Entra ID.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identité</th><th>Rôle</th><th>Étendue</th></tr><tr><td>GroupA (UserA)</td><td>Contributeur de partage SMB de données de fichier de stockage</td><td>sh1</td></tr><tr><td>GroupB (UserB)</td><td>Lecteur de partage SMB de données de fichier de stockage</td><td>st1</td></tr><tr><td>UserD</td><td>Contributeur de partage SMB de données de fichier de stockage</td><td>sh1</td></tr></table></div><p>Sur sh1, le dossier <b>Finance</b> a les autorisations NTFS : GroupA Lecture, GroupB Modification.</p>"
  }
 ],
 "opts": [
  "Microsoft Entra Kerberos",
  "Microsoft Entra Domain Services",
  "Une SAS de compte par poste",
  "AD DS avec un second domaine"
 ],
 "ans": 0,
 "expl": "<p><b>Microsoft Entra Kerberos</b> permet aux postes joints (ou hybrides) à Microsoft Entra ID d'obtenir des tickets Kerberos pour Azure Files, sans ligne de vue vers un contrôleur de domaine. Il prend en charge les identités hybrides et, avec une configuration récente, les identités uniquement cloud.</p><ul><li>Microsoft Entra Domain Services exige des VM jointes à ce domaine managé.</li><li>Une SAS ne sert pas au montage SMB.</li><li>AD DS suppose un contrôleur joignable.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Partages de fichiers",
   "sh1"
  ],
  "title": "sh1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "GroupA",
    "Contributeur de partage SMB"
   ],
   [
    "*GroupB",
    "Lecteur de partage SMB (hérité de st1)"
   ]
  ]
 },
 "keep": "Postes Entra sans contrôleur : Microsoft Entra Kerberos."
},
{
 "id": "D2-219",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Accès (cliquez sur l'onglet <b>Accès</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Accès",
   "h": "<p>Le groupe de ressources RG1 contient le compte <b>st1</b>, avec les conteneurs <b>c1</b> et <b>c2</b>. « Autoriser l'accès à la clé du compte de stockage » est <b>activé</b> sur st1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur des données blob du stockage</td><td>st1</td></tr><tr><td>User2</td><td>Contributeur aux données blob du stockage</td><td>Conteneur c1</td></tr><tr><td>User3</td><td>Contributeur</td><td>st1</td></tr><tr><td>User4</td><td>Lecteur</td><td>RG1</td></tr><tr><td>User5</td><td>Propriétaire des données blob du stockage</td><td>RG1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User2 peut générer une SAS de délégation d'utilisateur en écriture pour c1, si son rôle inclut l'action generateUserDelegationKey.",
   "a": 0
  },
  {
   "l": "User4 peut voir la liste des conteneurs de st1 dans le portail.",
   "a": 1
  },
  {
   "l": "Si vous retirez le rôle de User1 sur st1, il garde l'accès en lecture à c2.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User2 : Oui.</b> Une SAS de délégation d'utilisateur ne donne jamais plus que les droits de son créateur : User2 peut écrire dans c1, et Contributeur aux données blob inclut generateUserDelegationKey.</li><li><b>User4 : Non.</b> Lister les conteneurs demande soit un rôle de données, soit l'accès aux clés ; Lecteur n'a ni l'un ni l'autre. Le portail affiche une erreur d'autorisation.</li><li><b>User1 : Non.</b> Son seul accès venait du rôle sur st1 ; aucun autre rôle ne le couvre sur c2.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1",
   "Conteneurs",
   "c2"
  ],
  "title": "c2 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "User1",
    "Lecteur des données blob (hérité de st1)"
   ],
   [
    "*User5",
    "Propriétaire des données blob (hérité de RG1)"
   ]
  ]
 },
 "keep": "SAS de délégation ≤ droits du créateur. Lecteur ne voit pas les données."
},
{
 "id": "D2-220",
 "dom": 2,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Cycle de vie (cliquez sur l'onglet <b>Cycle de vie</b>).</p><p>Le contrôle de version est activé sur st1. Les anciennes versions des blobs de logs/ s'accumulent et font monter la facture.</p><p>Quelles <b>deux</b> actions de cycle de vie réduisent le coût sans toucher aux versions actuelles ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Cycle de vie",
   "h": "<p>Compte <b>st1</b> (universel v2, GRS). Le suivi de l'heure du dernier accès est <b>désactivé</b>. Règles de gestion du cycle de vie (blobs de base) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle</th><th>Filtre</th><th>Action</th></tr><tr><td>R1</td><td>Préfixe logs/</td><td>Froid 30 jours après la dernière modification ; suppression 365 jours après la dernière modification</td></tr><tr><td>R2</td><td>Préfixe logs/archive/</td><td>Archive 90 jours après la dernière modification</td></tr><tr><td>R3</td><td>Étiquette d'index Projet = Fin</td><td>Suppression 7 jours après la création</td></tr></table></div>"
  }
 ],
 "opts": [
  "Supprimer les versions antérieures 90 jours après leur création",
  "Passer les versions antérieures en Archive après 30 jours",
  "Ajouter à R1 une suppression des blobs de base après 90 jours",
  "Désactiver le contrôle de version, ce qui purge les versions"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>Une règle de cycle de vie peut agir sur les <b>versions antérieures</b> (bloc <code>version</code>) : les supprimer ou les déplacer vers un niveau moins cher, sans toucher au blob de base.</p><ul><li>Supprimer les blobs de base toucherait les versions actuelles.</li><li>Désactiver le contrôle de version ne supprime pas les versions existantes : elles restent et restent facturées.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1"
  ],
  "title": "st1 | Gestion du cycle de vie",
  "menu": [
   "Vue d'ensemble",
   "Gestion des données",
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "R1 · logs/",
    "Froid à 30 j · suppression à 365 j"
   ],
   [
    "*R2 · logs/archive/",
    "Archive à 90 j"
   ]
  ],
  "btn": "+ Ajouter une règle"
 },
 "keep": "Versions qui s'accumulent : règle de cycle de vie sur les versions."
}
);
