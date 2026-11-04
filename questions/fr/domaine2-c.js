/* Domaine 2 : stockage (lot C : D2-070 à D2-129) */
AZ.questions.push(
{
 "id": "D2-070",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez créer un compte de stockage universel v2 avec la redondance RA-GRS, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "SKU",
   "o": [
    "Standard_RAGRS",
    "Standard_GRS",
    "Premium_LRS"
   ],
   "a": 0
  },
  {
   "l": "Type",
   "o": [
    "StorageV2",
    "Storage",
    "BlobStorage"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>-SkuName Standard_RAGRS -Kind StorageV2</code>.</p><ul><li>La redondance fait partie du nom de SKU : Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Standard_GZRS, Standard_RAGZRS, Premium_LRS, Premium_ZRS.</li><li><b>StorageV2</b> est le type universel v2. <b>Storage</b> est l'ancien universel v1 et <b>BlobStorage</b> un ancien type blob seul, tous deux déconseillés.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Créer un compte de stockage",
  "menu": [
   "*Informations de base"
  ],
  "rows": [
   [
    "Performances",
    "Standard (StorageV2)"
   ],
   [
    "*Redondance",
    "Stockage géo-redondant (GRS) + accès en lecture"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "SKU = performances + redondance (Standard_RAGRS, Premium_ZRS…). Kind = StorageV2 par défaut.",
 "tpl": "New-AzStorageAccount -ResourceGroupName RG1 -Name storage25 -Location francecentral -SkuName {0} -Kind {1}"
},
{
 "id": "D2-071",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez passer immédiatement le blob rapport.pdf au niveau Archive, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Commande",
   "o": [
    "set-tier",
    "update",
    "copy start"
   ],
   "a": 0
  },
  {
   "l": "Niveau",
   "o": [
    "Archive",
    "Cold",
    "Premium"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az storage blob set-tier ... --tier Archive</code> change le niveau d'un blob de blocs. Pour réhydrater depuis Archive, on utilise la même commande avec <code>--tier Hot</code> et <code>--rehydrate-priority High</code> ou <code>Standard</code>.</p><p><code>update</code> modifie les propriétés comme le type de contenu. <code>copy start</code> copie un blob. Premium n'est pas un niveau d'accès de blob.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage26",
   "Conteneurs",
   "docs"
  ],
  "title": "rapport.pdf | Modifier le niveau",
  "rows": [
   [
    "*Niveau d'accès",
    "Archive"
   ],
   [
    "CLI",
    "az storage blob set-tier --tier Archive"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Changer le niveau d'un blob = set-tier ; réhydrater = set-tier vers Hot avec --rehydrate-priority.",
 "tpl": "az storage blob {0} --account-name storage26 --container-name docs --name rapport.pdf --tier {1} --auth-mode login"
},
{
 "id": "D2-072",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez créer un conteneur privé nommé factures avec Azure PowerShell. Le contexte de stockage est dans $ctx.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzStorageContainer",
    "New-AzStorageShare",
    "New-AzStorageAccount"
   ],
   "a": 0
  },
  {
   "l": "Permission",
   "o": [
    "Off",
    "Blob",
    "Container"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>New-AzStorageContainer -Name factures -Context $ctx -Permission Off</code>.</p><p>Le paramètre -Permission correspond au niveau d'accès anonyme : <b>Off</b> (privé), <b>Blob</b> (lecture anonyme des blobs) ou <b>Container</b> (lecture et liste). New-AzStorageShare crée un partage de fichiers.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs"
  ],
  "title": "Nouveau conteneur",
  "rows": [
   [
    "Nom",
    "factures"
   ],
   [
    "*Niveau d'accès anonyme",
    "Privé (aucun accès anonyme)"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "-Permission Off / Blob / Container = Privé / lecture des blobs / lecture + liste.",
 "tpl": "{0} -Name factures -Context $ctx -Permission {1}"
},
{
 "id": "D2-073",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez créer un partage de fichiers de 1 Tio nommé equipe dans storage27, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Ressource",
   "o": [
    "share-rm",
    "container",
    "queue"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--quota",
    "--size",
    "--capacity"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az storage share-rm create ... --quota 1024</code> crée un partage par le plan de contrôle (Azure Resource Manager), avec un quota en Gio. On peut aussi préciser <code>--access-tier</code> (TransactionOptimized, Hot, Cool).</p><p><code>container</code> et <code>queue</code> concernent les blobs et les files d'attente. <code>--size</code> et <code>--capacity</code> n'existent pas pour cette commande.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage27",
   "Partages de fichiers"
  ],
  "title": "Nouveau partage de fichiers",
  "rows": [
   [
    "Nom",
    "equipe"
   ],
   [
    "*Quota (Gio)",
    "1024"
   ],
   [
    "Niveau",
    "Optimisé pour les transactions"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Partage via ARM = az storage share-rm create --quota (Gio).",
 "tpl": "az storage {0} create --storage-account storage27 --resource-group RG1 --name equipe {1} 1024"
},
{
 "id": "D2-074",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous examinez la règle de gestion du cycle de vie suivante, appliquée à storage28 :</p><pre>{\n \"rules\": [{\n  \"name\": \"regle1\",\n  \"enabled\": true,\n  \"type\": \"Lifecycle\",\n  \"definition\": {\n   \"filters\": { \"blobTypes\": [\"blockBlob\"], \"prefixMatch\": [\"logs/\"] },\n   \"actions\": { \"baseBlob\": {\n     \"tierToCool\":    { \"daysAfterModificationGreaterThan\": 30 },\n     \"tierToArchive\": { \"daysAfterModificationGreaterThan\": 90 },\n     \"delete\":        { \"daysAfterModificationGreaterThan\": 365 }\n   }}\n  }\n }]\n}</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Un blob logs/app.txt modifié il y a 100 jours est au niveau :",
   "o": [
    "Chaud",
    "Froid",
    "Archive"
   ],
   "a": 2
  },
  {
   "l": "Un blob data/app.txt modifié il y a 400 jours est :",
   "o": [
    "supprimé",
    "au niveau Archive",
    "inchangé"
   ],
   "a": 2
  },
  {
   "l": "Un blob d'ajout logs/trace.log modifié il y a 400 jours est :",
   "o": [
    "inchangé",
    "supprimé",
    "au niveau Archive"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>logs/app.txt, 100 jours : Archive.</b> Il a dépassé 30 et 90 jours ; l'action la plus avancée (Archive) s'applique.</li><li><b>data/app.txt : inchangé.</b> Il ne commence pas par le préfixe <code>logs/</code> (le préfixe inclut le nom du conteneur).</li><li><b>Blob d'ajout : inchangé.</b> Le filtre ne vise que les blobs de blocs.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage28"
  ],
  "title": "storage28 | Gestion du cycle de vie",
  "menu": [
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "*Filtre",
    "blockBlob, préfixe logs/"
   ],
   [
    "30 / 90 / 365 jours",
    "Froid / Archive / Supprimer"
   ]
  ]
 },
 "keep": "Une règle ne touche que les blobs qui passent ses filtres (type, préfixe conteneur/dossier)."
},
{
 "id": "D2-087",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez monter le partage share7 de storage35 sur un poste Windows, de façon persistante, avec la clé du compte.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Le script de connexion proposé par le portail suit cette logique : <b>tester le port 445</b> (Test-NetConnection), <b>enregistrer les informations d'identification</b> avec cmdkey pour qu'elles survivent au redémarrage, puis <b>monter le lecteur</b> de façon persistante.</p><p>Azure Files ne propose pas d'accès anonyme. Le port 3389 est celui de RDP.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage35",
   "Partages de fichiers",
   "share7"
  ],
  "title": "share7 | Se connecter",
  "rows": [
   [
    "1",
    "Test-NetConnection -Port 445"
   ],
   [
    "2",
    "cmdkey /add:storage35.file.core.windows.net"
   ],
   [
    "*3",
    "net use Z: … /persistent:yes"
   ]
  ]
 },
 "keep": "Monter un partage : port 445, cmdkey, net use persistant.",
 "acts": [
  "Vérifier que le port TCP 445 sortant est ouvert",
  "Enregistrer les informations d'identification avec cmdkey (utilisateur localhost\\storage35, mot de passe = clé du compte)",
  "Monter le partage avec net use Z: \\\\storage35.file.core.windows.net\\share7 /persistent:yes",
  "Activer l'accès anonyme sur le compte",
  "Ouvrir le port TCP 3389"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D2-101",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la solution de transfert adaptée à chaque situation.</p><p>Pour répondre, faites glisser la solution appropriée vers chaque situation. Chaque solution peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Situation",
  "Solution"
 ],
 "srcs": [
  "AzCopy",
  "Azure Data Box",
  "Azure File Sync",
  "Azure Storage Explorer"
 ],
 "tgts": [
  {
   "l": "Script planifié qui copie chaque nuit des sauvegardes vers un conteneur",
   "a": 0
  },
  {
   "l": "Migration initiale de 200 To avec une connexion de 50 Mbit/s",
   "a": 1
  },
  {
   "l": "Garder un serveur de fichiers local avec un cache des fichiers chauds, le reste dans Azure",
   "a": 2
  },
  {
   "l": "Un administrateur charge quelques fichiers à la main avec une interface graphique",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>AzCopy</b> : outil en ligne de commande, scriptable.</li><li><b>Data Box</b> : transfert hors ligne de gros volumes.</li><li><b>File Sync</b> : synchronisation continue et hiérarchisation cloud d'un serveur de fichiers.</li><li><b>Storage Explorer</b> : interface graphique pour les opérations ponctuelles.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "Outils de transfert",
  "rows": [
   [
    "*AzCopy",
    "Script, ligne de commande"
   ],
   [
    "Data Box",
    "Hors ligne, gros volumes"
   ],
   [
    "File Sync",
    "Serveur de fichiers + cache"
   ],
   [
    "Storage Explorer",
    "Interface graphique"
   ]
  ]
 },
 "keep": "Script = AzCopy ; gros volume = Data Box ; cache local = File Sync ; clics = Storage Explorer."
},
{
 "id": "D2-102",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous devez donner à une équipe de chercheurs l'accès en lecture et en écriture au seul conteneur recherche de storage42, avec leurs comptes Microsoft Entra.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle est nécessaire. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Attribuer Contributeur aux données blob au groupe",
   "a": 0
  },
  {
   "l": "Rendre le conteneur public le temps du projet",
   "a": 1
  },
  {
   "l": "Leur fournir key1 dans un coffre de clés",
   "a": 1
  },
  {
   "l": "Choisir le conteneur recherche comme étendue",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Contributeur aux données blob : oui</b>, il permet lire, écrire et supprimer des blobs.</li><li><b>Étendue conteneur : oui</b>, pour limiter l'accès à recherche. Les rôles de données peuvent être attribués au niveau d'un conteneur.</li><li><b>key1 : non</b>, elle donne accès à tout le compte.</li><li><b>Conteneur public : non</b>, il serait lisible par tous et l'accès anonyme ne permet pas l'écriture.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage42",
   "Conteneurs",
   "recherche"
  ],
  "title": "recherche | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Rôle",
    "Contributeur aux données blob du stockage"
   ],
   [
    "*Étendue",
    "Conteneur recherche"
   ],
   [
    "Membres",
    "GRP-Chercheurs"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Rôle de données + étendue conteneur = accès limité à un conteneur."
},
{
 "id": "D2-103",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous devez réduire les coûts d'un compte de stockage qui contient 50 To de blobs, dont 80 % n'ont pas été lus depuis 6 mois mais doivent rester lisibles immédiatement.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle convient. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Passer le compte en Premium blob de blocs",
   "a": 1
  },
  {
   "l": "Déplacer tous les blobs vers le niveau Archive",
   "a": 1
  },
  {
   "l": "Une règle vers Très froid après 90 jours sans lecture",
   "a": 0
  },
  {
   "l": "Activer le suivi de l'heure du dernier accès",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Suivi du dernier accès : oui</b>, il permet de baser la règle sur la lecture et non sur la modification.</li><li><b>Règle vers Très froid : oui.</b> Ce niveau est moins cher que Chaud et Froid, et les données restent <b>en ligne</b>.</li><li><b>Archive : non</b>, les données ne seraient plus lisibles immédiatement.</li><li><b>Premium : non</b>, c'est plus cher.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "Gestion du cycle de vie",
  "menu": [
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "*Activer le suivi des accès",
    "Coché"
   ],
   [
    "*Dernier accès > 90 jours",
    "Déplacer vers le stockage très froid"
   ]
  ]
 },
 "keep": "Moins cher mais lisible tout de suite = Cold ; règle basée sur le dernier accès."
},
{
 "id": "D2-104",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous devez configurer la restauration à un point dans le temps sur storage43.</p><p>Pour chacune des fonctionnalités suivantes, sélectionnez Oui si elle doit être activée. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "L'espace de noms hiérarchique du compte",
   "a": 1
  },
  {
   "l": "Le contrôle de version des blobs",
   "a": 0
  },
  {
   "l": "La réplication d'objets vers un compte de secours",
   "a": 1
  },
  {
   "l": "Le flux de modification du compte",
   "a": 0
  }
 ],
 "expl": "<p>La restauration à un point dans le temps s'appuie sur trois fonctions : <b>suppression réversible des blobs</b>, <b>contrôle de version</b> et <b>flux de modification</b>. La période de restauration doit être inférieure à la rétention de la suppression réversible.</p><p>L'espace de noms hiérarchique n'est pas compatible avec cette fonction. La réplication d'objets est sans rapport.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage43"
  ],
  "title": "storage43 | Protection des données",
  "menu": [
   "*Protection des données"
  ],
  "rows": [
   [
    "*Restauration à un point dans le temps",
    "Activée"
   ],
   [
    "Activés automatiquement",
    "Versioning, flux de modification, suppression réversible"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Point dans le temps = suppression réversible + versioning + flux de modification."
},
{
 "id": "D2-105",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Une stratégie de rétention temporelle <b>verrouillée</b> de 5 ans est appliquée au conteneur archives.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Vous pouvez ajouter de nouveaux blobs au conteneur.",
   "a": 0
  },
  {
   "l": "Vous pouvez raccourcir la durée de rétention à 3 ans.",
   "a": 1
  },
  {
   "l": "Vous pouvez allonger la durée de rétention à 7 ans.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Ajouter des blobs : Oui.</b> L'immuabilité empêche de modifier et supprimer, pas de créer (principe WORM : écriture unique).</li><li><b>Raccourcir : Non.</b> Une stratégie verrouillée ne peut jamais être réduite ni supprimée.</li><li><b>Allonger : Oui.</b> On peut augmenter la durée d'une stratégie verrouillée (un nombre limité de fois).</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "archives"
  ],
  "title": "archives | Stratégie d'accès",
  "menu": [
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "*Rétention",
    "5 ans · Verrouillée"
   ],
   [
    "Allonger",
    "Possible"
   ],
   [
    "Raccourcir / supprimer",
    "Impossible"
   ]
  ]
 },
 "keep": "Stratégie verrouillée : on peut créer des blobs et allonger, jamais raccourcir."
},
{
 "id": "D2-106",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>La suppression réversible des blobs est activée sur storage44 avec 7 jours de rétention.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un blob supprimé il y a 5 jours peut être restauré.",
   "a": 0
  },
  {
   "l": "Un blob écrasé (sans contrôle de version) il y a 2 jours peut être restauré dans sa version précédente.",
   "a": 0
  },
  {
   "l": "Les blobs supprimés de façon réversible ne sont pas facturés.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>5 jours : Oui</b>, dans la période de rétention.</li><li><b>Écrasement sans contrôle de version : Oui.</b> Sans contrôle de version, la suppression réversible crée un <b>instantané supprimé de façon réversible</b> lors d'un écrasement, qu'on peut restaurer. (Avec le contrôle de version, ce sont les versions qui jouent ce rôle.)</li><li><b>Non facturés : Non.</b> Les données conservées sont facturées comme les données actives.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage44",
   "Conteneurs",
   "data"
  ],
  "title": "data | Afficher les objets blob supprimés",
  "rows": [
   [
    "*rapport.pdf",
    "Supprimé il y a 5 jours · Annuler la suppression"
   ]
  ],
  "btn": "Annuler la suppression"
 },
 "keep": "Suppression réversible : restauration possible, mais données facturées."
},
{
 "id": "D2-107",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous comparez les points de terminaison de service et les points de terminaison privés pour Azure Storage.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un point de terminaison privé attribue au compte une adresse IP privée du réseau virtuel.",
   "a": 0
  },
  {
   "l": "Un point de terminaison de service est utilisable depuis un site local relié par VPN.",
   "a": 1
  },
  {
   "l": "Un point de terminaison de service est gratuit.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Adresse privée : Oui.</b> Le point de terminaison privé est une interface réseau dans le sous-réseau.</li><li><b>Site local : Non.</b> Le point de terminaison de service ne s'applique qu'au trafic qui sort du sous-réseau Azure configuré. Depuis le site local, il faut un point de terminaison privé.</li><li><b>Gratuit : Oui.</b> Les points de terminaison de service n'ont pas de coût. Les points de terminaison privés sont facturés à l'heure et au volume.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "Point de terminaison de service",
    "Gratuit, adresse publique, depuis un sous-réseau Azure"
   ],
   [
    "*Point de terminaison privé",
    "IP privée, payant, accessible depuis le site local"
   ]
  ]
 },
 "keep": "Site local ou IP privée = point de terminaison privé."
},
{
 "id": "D2-108",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous utilisez Azure File Sync avec la hiérarchisation cloud sur le serveur FS3.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un fichier hiérarchisé reste visible dans l'explorateur Windows de FS3.",
   "a": 0
  },
  {
   "l": "Quand un utilisateur ouvre un fichier hiérarchisé, il est rappelé depuis Azure.",
   "a": 0
  },
  {
   "l": "La hiérarchisation cloud fonctionne sur le volume système C:.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Visible : Oui.</b> Le fichier est remplacé par un pointeur (point d'analyse), mais il apparaît normalement.</li><li><b>Rappel : Oui.</b> À l'ouverture, le contenu est téléchargé depuis le partage Azure.</li><li><b>Volume système : Non.</b> La hiérarchisation cloud n'est pas prise en charge sur le volume système.</li></ul>",
 "portal": {
  "path": [
   "Services de synchronisation de stockage",
   "Sync1"
  ],
  "title": "Point de terminaison serveur | FS3",
  "rows": [
   [
    "*Hiérarchisation cloud",
    "Activée (D:)"
   ],
   [
    "Volume système C:",
    "Non pris en charge"
   ]
  ]
 },
 "keep": "Fichier hiérarchisé = pointeur visible, rappelé à l'ouverture ; pas sur C:."
},
{
 "id": "D2-109",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous devez choisir la redondance adaptée à chaque compte de stockage.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Un compte Premium partages de fichiers qui doit résister à la panne d'une zone :",
   "o": [
    "LRS",
    "ZRS",
    "GZRS"
   ],
   "a": 1
  },
  {
   "l": "Un compte Standard dont les données doivent rester lisibles en cas de panne de la région :",
   "o": [
    "RA-GRS",
    "GRS",
    "ZRS"
   ],
   "a": 0
  },
  {
   "l": "Un compte Standard qui doit utiliser le niveau Archive et survivre à une panne régionale :",
   "o": [
    "GZRS",
    "ZRS",
    "GRS"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Premium + zone : ZRS.</b> Les comptes Premium ne proposent que LRS et ZRS.</li><li><b>Lisible pendant une panne régionale : RA-GRS</b> (ou RA-GZRS), qui donne un accès en lecture à la région secondaire.</li><li><b>Archive + panne régionale : GRS.</b> Archive n'est pas pris en charge avec ZRS et GZRS.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Redondance",
  "rows": [
   [
    "Premium",
    "LRS, ZRS"
   ],
   [
    "*Lisible en panne régionale",
    "RA-GRS, RA-GZRS"
   ],
   [
    "*Archive",
    "LRS, GRS, RA-GRS"
   ]
  ]
 },
 "keep": "Premium = LRS/ZRS. Archive = sans Z. Lecture secondaire = RA-."
},
{
 "id": "D2-110",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous gérez l'accès à storage45.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Pour révoquer toutes les SAS de compte signées avec key2 :",
   "o": [
    "Régénérer key2",
    "Régénérer key1",
    "Supprimer les stratégies d'accès stockées"
   ],
   "a": 0
  },
  {
   "l": "Pour révoquer une SAS de délégation d'utilisateur :",
   "o": [
    "Régénérer key1 et key2",
    "Révoquer les clés de délégation d'utilisateur ou retirer le rôle de l'identité",
    "Supprimer le conteneur"
   ],
   "a": 1
  },
  {
   "l": "Pour révoquer une SAS de service liée à une stratégie d'accès stockée :",
   "o": [
    "Changer le niveau d'accès",
    "Supprimer ou modifier la stratégie",
    "Désactiver le pare-feu"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>SAS de compte</b> : signée par une clé du compte ; on régénère la clé qui l'a signée.</li><li><b>SAS de délégation d'utilisateur</b> : signée par une clé de délégation obtenue via Entra. On révoque toutes les clés de délégation (Revoke User Delegation Keys) ou on retire les droits de l'identité qui l'a créée. Régénérer key1 et key2 ne l'affecte pas.</li><li><b>SAS de service avec stratégie</b> : on supprime ou modifie la stratégie d'accès stockée.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage45"
  ],
  "title": "Révoquer une SAS",
  "rows": [
   [
    "SAS de compte",
    "Régénérer la clé"
   ],
   [
    "*Délégation d'utilisateur",
    "Révoquer les clés de délégation"
   ],
   [
    "SAS de service + stratégie",
    "Modifier la stratégie"
   ]
  ]
 },
 "keep": "Chaque type de SAS a sa méthode de révocation."
},
{
 "id": "D2-111",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous devez choisir le niveau d'accès anonyme de chaque conteneur de storage46. Le compte autorise l'accès anonyme.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Conteneur images : n'importe qui doit pouvoir afficher une image dont il connaît l'URL, sans pouvoir lister le conteneur :",
   "o": [
    "Blob",
    "Privé",
    "Conteneur"
   ],
   "a": 0
  },
  {
   "l": "Conteneur catalogue : n'importe qui doit pouvoir lister et lire tous les fichiers :",
   "o": [
    "Conteneur",
    "Privé",
    "Blob"
   ],
   "a": 0
  },
  {
   "l": "Conteneur rh : accès réservé aux utilisateurs authentifiés :",
   "o": [
    "Blob",
    "Privé",
    "Conteneur"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Blob</b> : lecture anonyme d'un blob dont on connaît l'URL, sans liste.</li><li><b>Conteneur</b> : lecture et liste anonymes du contenu.</li><li><b>Privé</b> : aucun accès anonyme.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage46",
   "Conteneurs"
  ],
  "title": "Modifier le niveau d'accès",
  "rows": [
   [
    "*Privé",
    "Aucun accès anonyme"
   ],
   [
    "*Blob",
    "Lecture anonyme des blobs"
   ],
   [
    "*Conteneur",
    "Lecture + liste anonymes"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Privé / Blob (lire) / Conteneur (lire + lister)."
},
{
 "id": "D2-112",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous créez une SAS de compte pour une application qui doit seulement <b>lire et lister</b> les blobs et les fichiers de storage47, en HTTPS, pendant 24 heures.</p><p>Comment devez-vous configurer la SAS ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<p>Seuls les services <b>Blob</b> et <b>Fichier</b>, et les autorisations <b>Lecture</b> et <b>Liste</b>, sont nécessaires. On limite le protocole à <b>HTTPS</b>. Le choix de la clé de signature n'est pas noté : retenez simplement qu'il faudra régénérer cette clé pour révoquer la SAS avant son expiration.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage47"
  ],
  "title": "storage47 | Signature d'accès partagé",
  "menu": [
   "*Signature d'accès partagé"
  ],
  "rows": [
   [
    "*Services",
    "Blob, Fichier"
   ],
   [
    "*Autorisations",
    "Lecture, Liste"
   ],
   [
    "*Protocoles",
    "HTTPS uniquement"
   ]
  ],
  "btn": "Générer la SAS et la chaîne de connexion"
 },
 "keep": "SAS minimale : services, autorisations, durée, HTTPS.",
 "win": {
  "title": "Signature d'accès partagé",
  "sub": "storage47",
  "rows": [
   {
    "k": "check",
    "l": "Services autorisés : Blob",
    "a": true
   },
   {
    "k": "check",
    "l": "Services autorisés : Fichier",
    "a": true
   },
   {
    "k": "check",
    "l": "Services autorisés : File d'attente",
    "a": false
   },
   {
    "k": "check",
    "l": "Autorisations : Lecture",
    "a": true
   },
   {
    "k": "check",
    "l": "Autorisations : Écriture",
    "a": false
   },
   {
    "k": "check",
    "l": "Autorisations : Liste",
    "a": true
   },
   {
    "k": "check",
    "l": "Autorisations : Suppression",
    "a": false
   },
   {
    "k": "radio",
    "l": "Protocoles autorisés",
    "opts": [
     "HTTPS uniquement",
     "HTTPS et HTTP"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Clé de signature",
    "o": [
     "key1",
     "key2"
    ],
    "d": 0,
    "a": null
   }
  ]
 }
},
{
 "id": "D2-113",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous configurez la mise en réseau de storage48. Seuls Subnet1 de VNet1 et l'adresse IP publique de votre bureau (203.0.113.50) doivent accéder au compte. Azure Backup doit pouvoir y accéder.</p><p>Comment devez-vous configurer la page ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Réseaux sélectionnés</b> : on ne laisse passer que les règles définies.</li><li><b>VNet1 / Subnet1</b> : ajoute la règle de réseau virtuel (et active le point de terminaison de service Microsoft.Storage sur le sous-réseau si besoin).</li><li><b>203.0.113.50</b> : l'adresse publique du bureau. Une plage privée comme 10.0.1.0/24 n'a aucun sens dans les règles IP, qui ne portent que sur des adresses publiques.</li><li><b>Services approuvés</b> : pour Azure Backup.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage48"
  ],
  "title": "storage48 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Accès réseau public",
    "Réseaux et IP sélectionnés"
   ],
   [
    "Réseaux virtuels",
    "VNet1 / Subnet1"
   ],
   [
    "Plage d'adresses",
    "203.0.113.50"
   ],
   [
    "*Services approuvés",
    "Coché"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Règles IP = adresses publiques seulement ; services Azure = exception des services approuvés.",
 "win": {
  "title": "Mise en réseau",
  "sub": "storage48",
  "rows": [
   {
    "k": "radio",
    "l": "Accès réseau public",
    "opts": [
     "Activé à partir de tous les réseaux",
     "Activé à partir des réseaux virtuels et adresses IP sélectionnés",
     "Désactivé"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Réseaux virtuels",
    "o": [
     "Aucun",
     "VNet1 / Subnet1"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Plage d'adresses du pare-feu",
    "o": [
     "Aucune",
     "203.0.113.50",
     "10.0.1.0/24"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "check",
    "l": "Autoriser les services Azure de la liste des services approuvés à accéder à ce compte de stockage",
    "a": true
   }
  ]
 }
},
{
 "id": "D2-114",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez configurer le passage de storage49 de la redondance LRS à ZRS.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Redondance",
 "expl": "<p>La page <b>Redondance</b> affiche la région primaire et secondaire, l'heure de dernière synchronisation, et permet de changer la redondance, y compris de lancer une conversion vers ZRS. Le basculement géographique se lance aussi d'ici.</p><p><b>Configuration</b> contient d'autres réglages (niveau par défaut, TLS minimal, transfert sécurisé, accès par clé).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage49"
  ],
  "title": "storage49 | Redondance",
  "menu": [
   "Protection des données",
   "*Redondance"
  ],
  "rows": [
   [
    "Redondance",
    "LRS → ZRS (conversion)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Redondance, dernière synchronisation, basculement = page Redondance.",
 "win": {
  "title": "storage49 | Compte de stockage",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité",
     "Contrôle d'accès (IAM)"
    ]
   },
   {
    "g": "Sécurité + mise en réseau",
    "items": [
     "Mise en réseau",
     "Clés d'accès",
     "Chiffrement"
    ]
   },
   {
    "g": "Gestion des données",
    "items": [
     "Redondance",
     "Protection des données",
     "Réplication d'objets",
     "Gestion du cycle de vie"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Configuration",
     "Propriétés",
     "Verrous"
    ]
   }
  ]
 }
},
{
 "id": "D2-115",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez autoriser le partage share11 à être restauré pendant 30 jours après une suppression.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Partages de fichiers",
 "expl": "<p>La suppression réversible des <b>partages de fichiers</b> se configure dans la page <b>Partages de fichiers</b> (lien « Suppression réversible » en haut de la liste), pas dans Protection des données, qui concerne les blobs et les conteneurs.</p><p>C'est un piège classique : les deux suppressions réversibles ne sont pas au même endroit.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage50"
  ],
  "title": "storage50 | Partages de fichiers",
  "menu": [
   "Conteneurs",
   "*Partages de fichiers",
   "Protection des données"
  ],
  "rows": [
   [
    "*Suppression réversible",
    "Activée · 30 jours"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Suppression réversible des partages = page Partages de fichiers, pas Protection des données.",
 "win": {
  "title": "storage50 | Partages de fichiers",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité"
    ]
   },
   {
    "g": "Stockage des données",
    "items": [
     "Conteneurs",
     "Partages de fichiers",
     "Files d'attente",
     "Tables"
    ]
   },
   {
    "g": "Gestion des données",
    "items": [
     "Redondance",
     "Protection des données",
     "Gestion du cycle de vie"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Configuration",
     "Verrous"
    ]
   }
  ]
 }
}
);
