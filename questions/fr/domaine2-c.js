/* Domaine 2 : stockage (lot C : D2-070 à D2-129) */
AZ.questions.push(
{
 "id": "D2-070",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez créer un compte de stockage universel v2 avec la redondance RA-GRS, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "New-AzStorageAccount -ResourceGroupName RG1 -Name storage25 -Location francecentral -SkuName {0} -Kind {1}",
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
 "keep": "SKU = performances + redondance (Standard_RAGRS, Premium_ZRS…). Kind = StorageV2 par défaut."
},
{
 "id": "D2-071",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez passer immédiatement le blob rapport.pdf au niveau Archive, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az storage blob {0} --account-name storage26 --container-name docs --name rapport.pdf --tier {1} --auth-mode login",
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
 "keep": "Changer le niveau d'un blob = set-tier ; réhydrater = set-tier vers Hot avec --rehydrate-priority."
},
{
 "id": "D2-072",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez créer un conteneur privé nommé factures avec Azure PowerShell. Le contexte de stockage est dans $ctx.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0} -Name factures -Context $ctx -Permission {1}",
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
 "keep": "-Permission Off / Blob / Container = Privé / lecture des blobs / lecture + liste."
},
{
 "id": "D2-073",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez créer un partage de fichiers de 1 Tio nommé equipe dans storage27, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az storage {0} create --storage-account storage27 --resource-group RG1 --name equipe {1} 1024",
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
 "keep": "Partage via ARM = az storage share-rm create --quota (Gio)."
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
 "id": "D2-075",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le compte de stockage storage29 utilise la redondance <b>ZRS</b>. Vous voulez configurer une règle de cycle de vie qui déplace les anciens blobs vers le niveau Archive.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "Le niveau Archive n'est pas pris en charge avec ZRS : il faut LRS, GRS ou RA-GRS",
  "Les blobs sont convertis en LRS puis archivés",
  "Les blobs sont archivés dans la région jumelée",
  "La règle fonctionne normalement"
 ],
 "ans": 0,
 "expl": "<p>Le niveau <b>Archive</b> n'est disponible qu'avec <b>LRS, GRS et RA-GRS</b>. Il n'est pas pris en charge avec ZRS, GZRS ni RA-GZRS. Il faut changer la redondance du compte ou utiliser le niveau Très froid (Cold) à la place.</p><p>Azure ne convertit pas la redondance ni ne déplace de données vers une autre région à votre place.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage29"
  ],
  "title": "storage29 | Redondance",
  "menu": [
   "*Redondance"
  ],
  "rows": [
   [
    "Redondance",
    "ZRS"
   ],
   [
    "*Niveau Archive",
    "Non pris en charge (LRS, GRS, RA-GRS seulement)"
   ]
  ]
 },
 "keep": "Archive = LRS, GRS ou RA-GRS ; jamais avec ZRS/GZRS."
},
{
 "id": "D2-076",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le niveau d'accès par défaut du compte de stockage storage30 est <b>Chaud</b>. Vous le passez à <b>Froid</b>.</p><p>Quels blobs sont concernés ?</p>",
 "opts": [
  "Aucun : il faut changer chaque blob",
  "Les blobs dont le niveau est déduit du compte (sans niveau explicite)",
  "Uniquement les nouveaux blobs créés après la modification",
  "Tous les blobs, y compris ceux au niveau Archive"
 ],
 "ans": 1,
 "expl": "<p>Les blobs sans niveau explicite ont un niveau <b>déduit</b> (inferred) du niveau par défaut du compte. Changer le niveau du compte les fait tous passer au niveau Froid, ainsi que les nouveaux blobs. Les blobs dont le niveau a été défini explicitement (par exemple Archive ou Chaud) ne changent pas.</p><p>Attention au coût : ce changement est facturé comme une opération d'écriture sur chaque blob concerné.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage30"
  ],
  "title": "storage30 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Niveau d'accès par défaut",
    "Froid"
   ],
   [
    "Blobs concernés",
    "Ceux au niveau déduit (sans niveau explicite)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Niveau du compte = niveau déduit des blobs sans niveau explicite."
},
{
 "id": "D2-077",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une stratégie de cycle de vie doit archiver les blobs qui portent l'étiquette d'index <b>statut = termine</b>, quel que soit leur dossier.</p><p>Quel filtre devez-vous utiliser dans la règle ?</p>",
 "opts": [
  "prefixMatch",
  "containerName",
  "blobIndexMatch",
  "blobTypes"
 ],
 "ans": 2,
 "expl": "<p>Le filtre <b>blobIndexMatch</b> sélectionne les blobs selon leurs <b>étiquettes d'index</b> (nom, opérateur, valeur). Les étiquettes d'index sont des paires clé/valeur indexées et interrogeables, différentes des métadonnées.</p><p><b>prefixMatch</b> filtre par préfixe de nom, <b>blobTypes</b> par type de blob. containerName n'est pas un filtre de cycle de vie.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "Gestion du cycle de vie | Filtres",
  "menu": [
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "*Correspondance d'index d'objets blob",
    "statut == termine"
   ],
   [
    "Action",
    "Déplacer vers le stockage archive"
   ]
  ]
 },
 "keep": "Filtrer par étiquette d'index = blobIndexMatch."
},
{
 "id": "D2-078",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le contrôle de version est activé sur storage31. Les anciennes versions s'accumulent et font grimper la facture.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Réduire la redondance en LRS",
  "Désactiver la suppression réversible",
  "Activer l'immuabilité",
  "Ajouter une règle de cycle de vie avec une action sur les versions (version : supprimer après N jours)"
 ],
 "ans": 3,
 "expl": "<p>Une règle de cycle de vie peut agir sur le blob de base, sur les <b>versions</b> précédentes et sur les <b>instantanés</b>. Une action « supprimer les versions de plus de 90 jours » (<code>daysAfterCreationGreaterThan</code> sur version) limite l'accumulation.</p><p>La suppression réversible concerne les blobs supprimés. LRS réduit un peu le coût mais pas l'accumulation. L'immuabilité empêcherait toute suppression.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage31"
  ],
  "title": "Gestion du cycle de vie | Ajouter une règle",
  "menu": [
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "*S'applique aux",
    "Versions précédentes"
   ],
   [
    "Action",
    "Supprimer après 90 jours"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "Versions et instantanés s'accumulent : le cycle de vie peut aussi les supprimer."
},
{
 "id": "D2-079",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un utilisateur a supprimé le compte de stockage storage32 il y a 3 jours. Aucun autre compte n'a été créé avec ce nom.</p><p>Que pouvez-vous faire ?</p>",
 "opts": [
  "Le restaurer depuis le portail (Restaurer un compte supprimé), car il est récupérable pendant 14 jours",
  "Rien : la suppression d'un compte est définitive",
  "Le restaurer depuis le journal d'activité",
  "Le restaurer avec la suppression réversible des blobs"
 ],
 "ans": 0,
 "expl": "<p>Un compte de stockage supprimé peut être <b>récupéré pendant 14 jours</b>, à condition qu'aucun compte du même nom n'ait été recréé et que le groupe de ressources existe encore. Les données ne sont pas garanties si elles avaient été supprimées avant le compte.</p><p>La suppression réversible des blobs ne protège pas contre la suppression du compte : pour cela, on utilise un <b>verrou</b> Suppression impossible.</p>",
 "portal": {
  "path": [
   "Comptes de stockage"
  ],
  "title": "Comptes de stockage",
  "rows": [
   [
    "*Restaurer un compte supprimé",
    "storage32 · supprimé il y a 3 jours"
   ]
  ],
  "btn": "Restaurer"
 },
 "keep": "Compte supprimé : récupérable 14 jours (si le nom est libre). Mieux : un verrou."
},
{
 "id": "D2-080",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez empêcher qu'un administrateur supprime par erreur le compte de stockage storage33, qui contient des données de production.</p><p>Quelle est la solution la plus simple ?</p>",
 "opts": [
  "La redondance RA-GRS",
  "Un verrou Suppression impossible sur storage33",
  "La suppression réversible des blobs",
  "Une stratégie de rétention temporelle"
 ],
 "ans": 1,
 "expl": "<p>Un <b>verrou Suppression impossible</b> empêche la suppression du compte, même par un Propriétaire, tant que le verrou n'est pas retiré.</p><p>La suppression réversible et l'immuabilité protègent les <b>données</b>, pas le compte. RA-GRS protège contre une panne régionale, pas contre une suppression.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage33"
  ],
  "title": "storage33 | Verrous",
  "menu": [
   "*Verrous"
  ],
  "rows": [
   [
    "*Type de verrou",
    "Supprimer"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "Protéger le compte = verrou ; protéger les données = suppression réversible, versions, immuabilité."
},
{
 "id": "D2-081",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez déplacer le compte de stockage storage34 de France Central vers West Europe.</p><p>Quelle méthode devez-vous utiliser ?</p>",
 "opts": [
  "Lancer un basculement géographique",
  "Utiliser l'option Déplacer vers un autre groupe de ressources",
  "Exporter le modèle du compte, créer un compte dans West Europe, puis copier les données avec AzCopy",
  "Changer la région dans Configuration"
 ],
 "ans": 2,
 "expl": "<p>Un compte de stockage ne peut pas changer de région. On <b>exporte son modèle</b> (pour recréer la même configuration), on crée le nouveau compte dans la région cible, puis on <b>copie les données</b> (AzCopy, copie de serveur à serveur), avant de supprimer l'ancien compte.</p><p>Déplacer vers un autre groupe de ressources ne change pas la région. Un basculement géographique bascule vers la région jumelée (France South), pas vers West Europe, et ce n'est pas une méthode de migration.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage34"
  ],
  "title": "storage34 | Exporter le modèle",
  "menu": [
   "*Exporter le modèle"
  ],
  "rows": [
   [
    "Étape suivante",
    "Créer le compte en West Europe"
   ],
   [
    "*Copie des données",
    "AzCopy de serveur à serveur"
   ]
  ]
 },
 "keep": "Changer de région = nouveau compte + copie. Le compte ne se déplace pas."
},
{
 "id": "D2-082",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un compte de stockage est de type <b>universel v1</b> (Storage). Vous voulez utiliser les niveaux d'accès Chaud, Froid et Archive.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Changer la redondance en GRS",
  "Activer l'espace de noms hiérarchique",
  "Recréer le compte en Premium",
  "Mettre à niveau le compte vers universel v2"
 ],
 "ans": 3,
 "expl": "<p>Les niveaux d'accès ne sont disponibles que dans les comptes <b>universel v2</b> (et les anciens comptes BlobStorage). La <b>mise à niveau</b> vers v2 se fait depuis la page Configuration, sans interruption, mais elle est <b>irréversible</b>.</p><p>Les comptes Premium n'ont pas de niveaux d'accès. L'espace de noms hiérarchique et la redondance n'ajoutent pas les niveaux.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "Type de compte",
    "Stockage (universel v1)"
   ],
   [
    "*Mettre à niveau",
    "Universel v2 (irréversible)"
   ]
  ],
  "btn": "Mettre à niveau"
 },
 "keep": "Niveaux d'accès = universel v2 ; mise à niveau depuis v1 sans retour."
},
{
 "id": "D2-083",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez stocker les messages envoyés par une application web à un service de traitement en arrière-plan, pour les traiter dans l'ordre d'arrivée, de façon simple et peu coûteuse.</p><p>Quel service du compte de stockage devez-vous utiliser ?</p>",
 "opts": [
  "Stockage File d'attente (Queue)",
  "Azure Files",
  "Blob d'ajout",
  "Stockage Table"
 ],
 "ans": 0,
 "expl": "<p>Le <b>stockage File d'attente</b> stocke des messages (jusqu'à 64 Ko chacun) qu'un composant dépose et qu'un autre retire pour les traiter. C'est la solution simple pour découpler deux composants d'une application.</p><p>Le stockage Table stocke des données NoSQL clé/attributs. Azure Files sert aux partages SMB/NFS. Un blob d'ajout est un fichier, pas une file de messages.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Files d'attente"
  ],
  "title": "commandes | File d'attente",
  "rows": [
   [
    "*Messages",
    "Jusqu'à 64 Ko chacun"
   ],
   [
    "Usage",
    "Découpler les composants"
   ]
  ],
  "btn": "+ Ajouter un message"
 },
 "keep": "Messages entre composants = Queue. NoSQL clé/attributs = Table."
},
{
 "id": "D2-084",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une application doit stocker des millions de profils d'appareils sous forme de paires clé/attributs, sans schéma fixe, au coût le plus bas, dans un compte de stockage.</p><p>Quel service devez-vous utiliser ?</p>",
 "opts": [
  "Blob de pages",
  "Stockage Table",
  "Azure Files",
  "Stockage File d'attente"
 ],
 "ans": 1,
 "expl": "<p>Le <b>stockage Table</b> est une base NoSQL clé/attributs, sans schéma : chaque entité a une clé de partition et une clé de ligne, et des propriétés libres. Il est très économique pour de grands volumes de données structurées simples.</p><p>Les files d'attente transportent des messages. Azure Files héberge des fichiers. Les blobs de pages servent aux disques.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Tables"
  ],
  "title": "appareils | Table",
  "rows": [
   [
    "*PartitionKey + RowKey",
    "Clé de l'entité"
   ],
   [
    "Propriétés",
    "Libres (sans schéma)"
   ]
  ]
 },
 "keep": "Table = NoSQL clé/attributs, très économique."
},
{
 "id": "D2-085",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez créer un partage de fichiers Azure Standard de <b>50 Tio</b> dans un compte universel v2 créé il y a deux ans.</p><p>Que devez-vous activer sur le compte ?</p>",
 "opts": [
  "Le chiffrement d'infrastructure",
  "L'espace de noms hiérarchique",
  "Les partages de fichiers volumineux",
  "Le protocole NFS"
 ],
 "ans": 2,
 "expl": "<p>Sans l'option <b>Partages de fichiers volumineux</b>, un partage Standard est limité à 5 Tio. Avec elle, il peut atteindre <b>100 Tio</b>. Les comptes récents l'ont souvent activée par défaut ; sur un ancien compte, on l'active dans Configuration (sans retour arrière possible).</p><p>Les autres options n'ont pas de lien avec la taille des partages.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Partages de fichiers volumineux",
    "Activé (jusqu'à 100 Tio)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Partage Standard > 5 Tio = partages de fichiers volumineux."
},
{
 "id": "D2-086",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un partage de fichiers Azure a un quota de 500 Gio. Les utilisateurs reçoivent une erreur « espace insuffisant » alors que le compte de stockage n'a aucune limite atteinte.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Activer la suppression réversible",
  "Changer la redondance du compte",
  "Passer le compte en Premium",
  "Augmenter le quota du partage"
 ],
 "ans": 3,
 "expl": "<p>Le <b>quota</b> d'un partage de fichiers limite sa taille, indépendamment de la capacité du compte. On l'augmente dans les propriétés du partage (jusqu'à 100 Tio avec les partages volumineux).</p><p>Pour un partage Premium approvisionné, augmenter le quota augmente aussi les performances (et le coût).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers",
   "share1"
  ],
  "title": "share1 | Modifier le quota",
  "rows": [
   [
    "*Quota",
    "500 → 2048 Gio"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Erreur d'espace sur un partage = quota du partage."
},
{
 "id": "D2-087",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez monter le partage share7 de storage35 sur un poste Windows, de façon persistante, avec la clé du compte.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
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
 "keep": "Monter un partage : port 445, cmdkey, net use persistant."
},
{
 "id": "D2-088",
 "dom": 2,
 "type": "single",
 "stem": "<p>Des postes <b>joints à Microsoft Entra</b> (sans contrôleur de domaine joignable) doivent accéder au partage share8 avec l'identité hybride de l'utilisateur et des ACL NTFS.</p><p>Quelle méthode d'authentification basée sur l'identité devez-vous activer sur le compte de stockage ?</p>",
 "opts": [
  "Microsoft Entra Kerberos",
  "AD DS local",
  "SAS de compte",
  "Clé d'accès du compte"
 ],
 "ans": 0,
 "expl": "<p><b>Microsoft Entra Kerberos</b> permet aux clients joints (ou joints hybrides) à Microsoft Entra d'obtenir des tickets Kerberos auprès d'Entra pour accéder à Azure Files, sans visibilité réseau sur un contrôleur de domaine. Il fonctionne avec les identités hybrides (synchronisées depuis AD DS).</p><p>L'authentification AD DS demande que le client voie un contrôleur de domaine. La clé et la SAS ne passent pas par l'identité de l'utilisateur.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers"
  ],
  "title": "Accès basé sur l'identité",
  "rows": [
   [
    "*Microsoft Entra Kerberos",
    "Configuré"
   ],
   [
    "Pour",
    "Clients joints à Entra, identités hybrides"
   ]
  ]
 },
 "keep": "Clients Entra sans DC joignable = Microsoft Entra Kerberos."
},
{
 "id": "D2-089",
 "dom": 2,
 "type": "single",
 "stem": "<p>Votre organisation n'a pas d'Active Directory local. Des VM jointes au domaine Microsoft Entra Domain Services doivent accéder à share9 avec les comptes des utilisateurs.</p><p>Quelle source d'identité devez-vous activer sur le compte de stockage ?</p>",
 "opts": [
  "Aucune : utilisez la clé du compte",
  "Microsoft Entra Domain Services",
  "Microsoft Entra Connect",
  "AD DS local"
 ],
 "ans": 1,
 "expl": "<p><b>Microsoft Entra Domain Services</b> fournit un domaine managé (Kerberos, NTLM) synchronisé avec Microsoft Entra ID. Azure Files peut l'utiliser comme source d'identité pour les VM jointes à ce domaine.</p><p>Il n'y a pas d'AD local. La clé du compte ne passe pas par l'identité de l'utilisateur. Entra Connect est un outil de synchronisation, pas une source d'identité pour Azure Files.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers"
  ],
  "title": "Accès basé sur l'identité",
  "rows": [
   [
    "*Microsoft Entra Domain Services",
    "Configuré"
   ]
  ]
 },
 "keep": "Pas d'AD local, VM jointes à un domaine managé = Entra Domain Services."
},
{
 "id": "D2-090",
 "dom": 2,
 "type": "single",
 "stem": "<p>Les serveurs de votre site local accèdent à share10 par un point de terminaison privé. Ils résolvent toujours storage36.file.core.windows.net vers l'adresse IP publique.</p><p>Que devez-vous corriger ?</p>",
 "opts": [
  "Les permissions NTFS",
  "La redondance du compte",
  "La résolution DNS : faire résoudre le nom vers l'adresse privée (zone privatelink.file.core.windows.net et redirecteur conditionnel)",
  "Le niveau du partage"
 ],
 "ans": 2,
 "expl": "<p>Le point de terminaison privé fonctionne, mais le client doit résoudre <code>storage36.file.core.windows.net</code> vers l'<b>adresse privée</b>. Dans Azure, la zone DNS privée <code>privatelink.file.core.windows.net</code> liée au réseau virtuel s'en charge. Depuis le site local, il faut un <b>redirecteur conditionnel</b> vers un résolveur DNS dans Azure (Azure DNS Private Resolver ou un serveur DNS).</p>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "privatelink.file.core.windows.net"
  ],
  "title": "privatelink.file.core.windows.net",
  "rows": [
   [
    "*storage36",
    "A · 10.0.2.5"
   ],
   [
    "Site local",
    "Redirecteur conditionnel vers Azure"
   ]
  ]
 },
 "keep": "Point de terminaison privé = DNS privé ; depuis le site local, redirecteur conditionnel."
},
{
 "id": "D2-091",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous créez un point de terminaison privé pour storage37 avec la sous-ressource cible <b>blob</b>. Une application doit aussi accéder au partage de fichiers de storage37 par une adresse privée.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Activer un point de terminaison de service sur le sous-réseau",
  "Ajouter le service file dans le pare-feu",
  "Rien : le point de terminaison blob couvre tous les services",
  "Créer un second point de terminaison privé avec la sous-ressource file"
 ],
 "ans": 3,
 "expl": "<p>Un point de terminaison privé cible <b>une seule sous-ressource</b> : blob, file, queue, table, dfs ou web. Pour Azure Files, il faut un second point de terminaison privé avec la sous-ressource <b>file</b> (et la zone DNS privatelink.file.core.windows.net).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage37"
  ],
  "title": "Créer un point de terminaison privé",
  "menu": [
   "Informations de base",
   "*Ressource"
  ],
  "rows": [
   [
    "*Sous-ressource cible",
    "file"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Un point de terminaison privé par sous-ressource (blob, file, queue, table, dfs, web)."
},
{
 "id": "D2-092",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une seule instance Azure Synapse de votre abonnement doit pouvoir accéder à storage38, dont le pare-feu bloque tout sauf certains réseaux virtuels. Les autres instances Synapse ne doivent pas y accéder.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une règle d'instance de ressource dans le pare-feu de storage38",
  "Une SAS de compte",
  "L'accès anonyme",
  "L'exception pour tous les services approuvés"
 ],
 "ans": 0,
 "expl": "<p>Une <b>règle d'instance de ressource</b> autorise une instance précise d'un service Azure (identifiée par son ID de ressource), en s'appuyant sur son identité managée et ses rôles. C'est plus précis que l'exception « services approuvés », qui laisse passer tous les services d'un type.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage38"
  ],
  "title": "storage38 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "#Instances de ressources",
    ""
   ],
   [
    "*Type",
    "Microsoft.Synapse/workspaces"
   ],
   [
    "Nom de l'instance",
    "synapse-prod"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Autoriser une instance précise d'un service = règle d'instance de ressource."
},
{
 "id": "D2-093",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous voulez que storage39 ne soit accessible <b>que</b> par des points de terminaison privés.</p><p>Quel réglage de mise en réseau devez-vous choisir ?</p>",
 "opts": [
  "Activé à partir des réseaux virtuels et adresses IP sélectionnés, sans aucune règle",
  "Accès réseau public : Désactivé",
  "Activé à partir des réseaux virtuels sélectionnés avec un point de terminaison de service",
  "Activé à partir de tous les réseaux"
 ],
 "ans": 1,
 "expl": "<p><b>Désactivé</b> bloque tout accès par le point de terminaison public. Seuls les points de terminaison privés restent utilisables.</p><p>« Réseaux sélectionnés sans règle » bloque presque tout aussi, mais les exceptions (services approuvés, règles d'instance) peuvent laisser passer du trafic public. Les points de terminaison de service passent par l'adresse publique.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage39"
  ],
  "title": "storage39 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Accès réseau public",
    "Désactivé"
   ],
   [
    "Points de terminaison privés",
    "Seul accès possible"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Uniquement privé = accès réseau public désactivé."
},
{
 "id": "D2-094",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez limiter les comptes de stockage auxquels les VM de Subnet1 peuvent accéder par leur point de terminaison de service : seuls les comptes de RG-Data doivent être joignables.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une table de routage",
  "Un pare-feu sur chaque compte",
  "Une stratégie de point de terminaison de service",
  "Une règle NSG avec l'étiquette de service Storage"
 ],
 "ans": 2,
 "expl": "<p>Une <b>stratégie de point de terminaison de service</b>, associée au sous-réseau, liste les comptes de stockage (ou groupes de ressources, abonnements) autorisés par le point de terminaison de service. Elle empêche l'exfiltration vers n'importe quel compte de stockage.</p><p>L'étiquette de service Storage dans un NSG couvre <b>tous</b> les comptes de stockage d'Azure (ou d'une région), pas une liste précise.</p>",
 "portal": {
  "path": [
   "Stratégies de point de terminaison de service"
  ],
  "title": "Créer une stratégie",
  "rows": [
   [
    "*Ressources autorisées",
    "Comptes de stockage de RG-Data"
   ],
   [
    "Associée à",
    "VNet1 / Subnet1"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Limiter les comptes joignables par point de terminaison de service = stratégie de point de terminaison de service."
},
{
 "id": "D2-095",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez créer une SAS de délégation d'utilisateur valable <b>30 jours</b>.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "La SAS est créée sans expiration",
  "Il faut une stratégie d'accès stockée",
  "La SAS est créée pour 30 jours",
  "La création échoue : une SAS de délégation d'utilisateur est valable au maximum 7 jours"
 ],
 "ans": 3,
 "expl": "<p>Une SAS de délégation d'utilisateur est signée par une <b>clé de délégation d'utilisateur</b>, valable au maximum <b>7 jours</b>. La SAS ne peut pas durer plus longtemps que cette clé.</p><p>Les SAS de délégation d'utilisateur ne prennent pas en charge les stratégies d'accès stockées. Pour des accès longs, on préfère donner un rôle à une identité.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "data"
  ],
  "title": "Générer une SAS",
  "rows": [
   [
    "Méthode de signature",
    "Clé de délégation d'utilisateur"
   ],
   [
    "*Expiration",
    "7 jours maximum"
   ]
  ]
 },
 "keep": "SAS de délégation d'utilisateur : 7 jours maximum."
},
{
 "id": "D2-096",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous voulez créer 8 stratégies d'accès stockées sur le conteneur partenaires, une par partenaire.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "Seules 5 stratégies sont possibles par conteneur",
  "Il faut un conteneur par stratégie",
  "Les stratégies doivent être créées au niveau du compte",
  "Les 8 stratégies sont créées"
 ],
 "ans": 0,
 "expl": "<p>Un conteneur (ou un partage, une file d'attente, une table) peut avoir au maximum <b>5 stratégies d'accès stockées</b>. Pour 8 partenaires, on peut regrouper des partenaires, utiliser plusieurs conteneurs, ou préférer des SAS de délégation d'utilisateur.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "partenaires"
  ],
  "title": "partenaires | Stratégie d'accès",
  "menu": [
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "*Stratégies d'accès stockées",
    "5 maximum"
   ]
  ]
 },
 "keep": "5 stratégies d'accès stockées maximum par conteneur, partage, file ou table."
},
{
 "id": "D2-097",
 "dom": 2,
 "type": "single",
 "stem": "<p>User22 a le rôle <b>Lecteur</b> sur storage40. Dans le navigateur de stockage du portail, il voit les conteneurs mais reçoit une erreur en ouvrant un blob avec la méthode d'authentification « Compte d'utilisateur Microsoft Entra ».</p><p>Que devez-vous lui attribuer ?</p>",
 "opts": [
  "Propriétaire",
  "Lecteur des données blob du stockage",
  "Contributeur",
  "Lecteur et accès aux données"
 ],
 "ans": 1,
 "expl": "<p>Lecteur ne donne que le plan de contrôle. Pour lire des blobs avec son identité Entra, il faut un rôle de <b>données</b> : <b>Lecteur des données blob du stockage</b>.</p><p>Contributeur et Propriétaire peuvent lister les clés du compte et donc accéder aux données par clé, mais c'est trop de droits. Le rôle Lecteur et accès aux données permet de lister les clés : il donne aussi trop d'accès.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage40"
  ],
  "title": "storage40 | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Rôle",
    "Lecteur des données blob du stockage"
   ],
   [
    "Membres",
    "User22"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Voir le compte = Lecteur ; lire les blobs avec Entra = rôle de données."
},
{
 "id": "D2-098",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une application utilise AzCopy avec <code>azcopy login</code> (authentification Microsoft Entra) pour charger des fichiers dans le conteneur upload. Le chargement échoue avec une erreur 403.</p><p>Quel rôle manque-t-il probablement à l'identité ?</p>",
 "opts": [
  "Contributeur de compte de stockage",
  "Contributeur de réseau",
  "Contributeur aux données blob du stockage",
  "Lecteur"
 ],
 "ans": 2,
 "expl": "<p>Avec l'authentification Entra, AzCopy agit avec les droits de l'identité sur les <b>données</b>. Pour écrire des blobs, il faut <b>Contributeur aux données blob du stockage</b> (ou Propriétaire des données blob) sur le conteneur ou le compte.</p><p>Contributeur de compte de stockage gère le compte, mais n'accorde pas d'accès aux données avec l'identité. Lecteur et Contributeur de réseau non plus.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "upload"
  ],
  "title": "upload | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Rôle",
    "Contributeur aux données blob du stockage"
   ],
   [
    "Membres",
    "Identité de l'application"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "AzCopy avec Entra = rôle de données (Contributeur aux données blob pour écrire)."
},
{
 "id": "D2-099",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un transfert AzCopy de 2 To a été interrompu par une coupure réseau à 70 %.</p><p>Comment reprendre sans tout recommencer ?</p>",
 "opts": [
  "Relancer azcopy copy avec --overwrite=true",
  "Supprimer le conteneur et relancer",
  "Utiliser azcopy make",
  "azcopy jobs resume &lt;id du travail&gt;"
 ],
 "ans": 3,
 "expl": "<p>AzCopy enregistre l'état de chaque travail. <code>azcopy jobs list</code> affiche les travaux et <code>azcopy jobs resume &lt;id&gt;</code> reprend là où le transfert s'est arrêté (en refournissant la SAS si nécessaire).</p><p>Relancer avec --overwrite=true recopierait tout. Les autres options ne reprennent rien.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "AzCopy",
  "rows": [
   [
    "azcopy jobs list",
    "Liste des travaux"
   ],
   [
    "*azcopy jobs resume <id>",
    "Reprise après interruption"
   ]
  ]
 },
 "keep": "Transfert interrompu = azcopy jobs resume."
},
{
 "id": "D2-100",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez exporter 20 To de blobs depuis storage41 vers vos locaux, sur des disques, parce que la connexion est trop lente.</p><p>Quel service devez-vous utiliser ?</p>",
 "opts": [
  "Azure Import/Export (tâche d'exportation) ou Azure Data Box",
  "AzCopy sync",
  "Azure File Sync",
  "La réplication d'objets"
 ],
 "ans": 0,
 "expl": "<p>Une <b>tâche d'exportation</b> Import/Export copie des blobs sur des disques que Microsoft vous renvoie. Azure Data Box propose aussi l'exportation. Attention : Import/Export n'exporte que des <b>blobs</b>, pas Azure Files.</p><p>File Sync, AzCopy et la réplication passent par le réseau.</p>",
 "portal": {
  "path": [
   "Tâches d'importation/exportation",
   "Créer"
  ],
  "title": "Créer une tâche d'exportation",
  "rows": [
   [
    "*Type",
    "Exporter depuis Azure"
   ],
   [
    "Source",
    "storage41 (blobs uniquement)"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Sortir de gros volumes hors ligne = Import/Export (blobs) ou Data Box."
},
{
 "id": "D2-101",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la solution de transfert adaptée à chaque situation.</p><p>Pour répondre, faites glisser la solution appropriée vers chaque situation. Chaque solution peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Solutions",
 "srcs": [
  "AzCopy",
  "Azure Data Box",
  "Azure File Sync",
  "Azure Storage Explorer"
 ],
 "tgtHead": [
  "Situation",
  "Solution"
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez donner à une équipe de chercheurs l'accès en lecture et en écriture au seul conteneur recherche de storage42, avec leurs comptes Microsoft Entra.</p><p>Quelles <b>deux</b> actions sont nécessaires ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Attribuer le rôle Contributeur aux données blob du stockage au groupe des chercheurs",
  "Rendre le conteneur public",
  "Leur fournir key1",
  "Choisir le conteneur recherche comme étendue de l'attribution"
 ],
 "ans": [
  0,
  3
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez réduire les coûts d'un compte de stockage qui contient 50 To de blobs, dont 80 % n'ont pas été lus depuis 6 mois mais doivent rester lisibles immédiatement.</p><p>Quelles <b>deux</b> actions conviennent ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Passer le compte en Premium",
  "Déplacer les blobs vers le niveau Archive",
  "Créer une règle de cycle de vie qui déplace vers le niveau Très froid (Cold) les blobs non lus depuis 90 jours",
  "Activer le suivi de l'heure du dernier accès"
 ],
 "ans": [
  2,
  3
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez configurer la restauration à un point dans le temps sur storage43.</p><p>Quelles <b>deux</b> fonctionnalités doivent aussi être activées ? (En plus de la suppression réversible des blobs.)</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "L'espace de noms hiérarchique",
  "Le contrôle de version des blobs",
  "La réplication d'objets",
  "Le flux de modification"
 ],
 "ans": [
  1,
  3
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
 },
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
 "keep": "SAS minimale : services, autorisations, durée, HTTPS."
},
{
 "id": "D2-113",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous configurez la mise en réseau de storage48. Seuls Subnet1 de VNet1 et l'adresse IP publique de votre bureau (203.0.113.50) doivent accéder au compte. Azure Backup doit pouvoir y accéder.</p><p>Comment devez-vous configurer la page ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
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
 "keep": "Règles IP = adresses publiques seulement ; services Azure = exception des services approuvés."
},
{
 "id": "D2-114",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez configurer le passage de storage49 de la redondance LRS à ZRS.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
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
 "keep": "Redondance, dernière synchronisation, basculement = page Redondance."
},
{
 "id": "D2-115",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez autoriser le partage share11 à être restauré pendant 30 jours après une suppression.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
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
 "keep": "Suppression réversible des partages = page Partages de fichiers, pas Protection des données."
},
{
 "id": "D2-116",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez vérifier quelle quantité de données a été répliquée vers la région secondaire de storage51 (GRS) et à quelle heure.</p><p>Quelle information devez-vous consulter ?</p>",
 "opts": [
  "Les métriques de transactions",
  "L'heure de dernière synchronisation (Last Sync Time)",
  "Le flux de modification",
  "Le journal d'activité"
 ],
 "ans": 1,
 "expl": "<p>L'<b>heure de dernière synchronisation</b>, affichée dans la page Redondance (et via PowerShell ou CLI), garantit que toutes les écritures antérieures sont dans la région secondaire. Les écritures postérieures pourraient être perdues en cas de basculement.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage51"
  ],
  "title": "storage51 | Redondance",
  "menu": [
   "*Redondance"
  ],
  "rows": [
   [
    "*Heure de dernière synchronisation",
    "2026-10-27 10:05 UTC"
   ]
  ]
 },
 "keep": "Où en est la secondaire = Last Sync Time."
},
{
 "id": "D2-117",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez permettre aux utilisateurs de Linux de monter le partage share12 (SMB) de storage52.</p><p>Quelle commande Linux devez-vous utiliser ?</p>",
 "opts": [
  "mount -t nfs storage52.blob.core.windows.net:/share12 /mnt/share12",
  "net use Z: \\\\storage52.file.core.windows.net\\share12",
  "mount -t cifs //storage52.file.core.windows.net/share12 /mnt/share12 -o ...",
  "azcopy mount share12"
 ],
 "ans": 2,
 "expl": "<p>Sous Linux, un partage SMB se monte avec <b>mount -t cifs</b> (paquet cifs-utils), avec le nom du compte et la clé (ou un fichier d'informations d'identification) et la version SMB 3.x.</p><p>NFS est un autre protocole et l'adresse blob ne correspond pas à Azure Files. net use est une commande Windows. AzCopy ne monte pas de partage.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage52",
   "Partages de fichiers",
   "share12"
  ],
  "title": "share12 | Se connecter › Linux",
  "rows": [
   [
    "*Commande",
    "sudo mount -t cifs //storage52.file.core.windows.net/share12 /mnt/share12 -o vers=3.1.1,credentials=…"
   ]
  ]
 },
 "keep": "SMB sous Linux = mount -t cifs."
},
{
 "id": "D2-118",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez conserver jusqu'à 200 points de restauration d'un partage de fichiers Azure, pris à la demande ou planifiés.</p><p>Quelle fonctionnalité devez-vous utiliser ?</p>",
 "opts": [
  "La réplication d'objets",
  "Le flux de modification",
  "Le contrôle de version des blobs",
  "Les instantanés de partage"
 ],
 "ans": 3,
 "expl": "<p>Un partage de fichiers Azure peut avoir jusqu'à <b>200 instantanés</b>. Ce sont des copies en lecture seule, incrémentielles, du partage à un instant donné. Azure Backup les utilise pour planifier et gérer la rétention.</p><p>Le contrôle de version, la réplication d'objets et le flux de modification sont des fonctions des blobs.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers",
   "share1"
  ],
  "title": "share1 | Instantanés",
  "menu": [
   "*Instantanés"
  ],
  "rows": [
   [
    "*Limite",
    "200 instantanés par partage"
   ]
  ],
  "btn": "+ Ajouter un instantané"
 },
 "keep": "Instantanés de partage : 200 maximum, incrémentiels, utilisés par Azure Backup."
},
{
 "id": "D2-119",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un partage Premium doit offrir de meilleures performances à des clients Windows qui ouvrent plusieurs connexions en parallèle.</p><p>Quelle fonctionnalité devez-vous activer ?</p>",
 "opts": [
  "SMB Multichannel",
  "Le protocole NFS",
  "L'accès anonyme",
  "La géoredondance"
 ],
 "ans": 0,
 "expl": "<p><b>SMB Multichannel</b> permet à un client SMB 3.x d'utiliser plusieurs connexions réseau vers un partage Premium, ce qui augmente le débit et les IOPS. Il s'active dans les paramètres de partage de fichiers du compte FileStorage.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "stfiles"
  ],
  "title": "stfiles | Paramètres de partage de fichiers",
  "menu": [
   "*Paramètres de partage de fichiers"
  ],
  "rows": [
   [
    "*SMB Multichannel",
    "Activé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Plus de débit SMB sur Premium = SMB Multichannel."
},
{
 "id": "D2-120",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un administrateur doit faire tourner régulièrement les clés d'accès de storage53. Il veut un rappel automatique tous les 90 jours.</p><p>Que doit-il configurer ?</p>",
 "opts": [
  "Une stratégie de cycle de vie",
  "Une stratégie d'expiration de clé (rappel de rotation) dans Clés d'accès",
  "Une alerte de budget",
  "Une stratégie d'accès stockée"
 ],
 "ans": 1,
 "expl": "<p>Dans <b>Clés d'accès</b>, l'option <b>Définir un rappel de rotation</b> crée une stratégie d'expiration de clé : passé le délai, Azure signale la clé comme à faire pivoter (et une stratégie Azure Policy peut contrôler cette règle). Pour une rotation entièrement automatique, on peut aussi confier les clés à Key Vault ou, mieux, utiliser Entra ID.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage53"
  ],
  "title": "storage53 | Clés d'accès",
  "menu": [
   "*Clés d'accès"
  ],
  "rows": [
   [
    "*Définir un rappel de rotation",
    "Tous les 90 jours"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Rappel de rotation des clés = Clés d'accès > Définir un rappel."
},
{
 "id": "D2-121",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une application doit être prévenue chaque fois qu'un nouveau blob est créé dans le conteneur upload, pour lancer un traitement.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un point de terminaison privé",
  "Une stratégie de cycle de vie",
  "Un abonnement aux événements Event Grid sur le compte de stockage",
  "La réplication d'objets"
 ],
 "ans": 2,
 "expl": "<p>Le stockage blob publie des événements (<code>BlobCreated</code>, <code>BlobDeleted</code>…) dans <b>Azure Event Grid</b>. Un abonnement aux événements, filtré sur le conteneur, peut déclencher une fonction, une application logique ou un webhook.</p><p>Les autres options ne notifient rien.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Événements",
  "menu": [
   "*Événements"
  ],
  "rows": [
   [
    "*Type d'événement",
    "Blob Created"
   ],
   [
    "Filtre",
    "Conteneur upload"
   ],
   [
    "Point de terminaison",
    "Azure Function"
   ]
  ],
  "btn": "+ Abonnement aux événements"
 },
 "keep": "Réagir à un nouveau blob = Event Grid."
},
{
 "id": "D2-122",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez obtenir chaque semaine un fichier CSV listant tous les blobs de storage54 avec leur taille, leur niveau et leur date de modification.</p><p>Quelle fonctionnalité devez-vous utiliser ?</p>",
 "opts": [
  "Les journaux de diagnostic",
  "Le flux de modification",
  "La gestion du cycle de vie",
  "L'inventaire des objets blob"
 ],
 "ans": 3,
 "expl": "<p>L'<b>inventaire des objets blob</b> génère, selon une planification quotidienne ou hebdomadaire, un rapport CSV ou Parquet de tous les blobs (ou conteneurs) avec les champs choisis.</p><p>Le flux de modification trace les changements. Les journaux de diagnostic tracent les requêtes. Le cycle de vie déplace ou supprime des blobs.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage54"
  ],
  "title": "storage54 | Inventaire des objets blob",
  "menu": [
   "*Inventaire des objets blob"
  ],
  "rows": [
   [
    "*Fréquence",
    "Hebdomadaire"
   ],
   [
    "Format",
    "CSV"
   ],
   [
    "Champs",
    "Nom, taille, niveau, date de modification"
   ]
  ],
  "btn": "Ajouter une règle"
 },
 "keep": "Liste périodique des blobs = inventaire des objets blob."
},
{
 "id": "D2-123",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez tracer chaque lecture et suppression de blobs dans storage55, avec l'identité de l'appelant, et analyser ces traces avec KQL.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un paramètre de diagnostic pour le service blob, catégories StorageRead et StorageDelete, vers un espace de travail Log Analytics",
  "Le suivi de l'heure du dernier accès",
  "Le journal d'activité du compte",
  "Une alerte de métrique sur les transactions"
 ],
 "ans": 0,
 "expl": "<p>Les <b>journaux de ressources</b> du stockage (StorageRead, StorageWrite, StorageDelete) tracent les opérations sur les données. On les active avec un <b>paramètre de diagnostic</b> sur le service blob et on les envoie vers Log Analytics pour les interroger en KQL.</p><p>Le journal d'activité ne trace que le plan de contrôle. Le suivi du dernier accès ne donne pas l'appelant. Une métrique ne contient pas le détail de chaque requête.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage55"
  ],
  "title": "blob | Paramètre de diagnostic",
  "menu": [
   "*Paramètres de diagnostic"
  ],
  "rows": [
   [
    "*Catégories",
    "StorageRead, StorageDelete"
   ],
   [
    "Destination",
    "Espace de travail Log Analytics"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Tracer les accès aux données = paramètre de diagnostic sur le service (blob, file…)."
},
{
 "id": "D2-124",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez donner à une application l'accès à des fichiers de Data Lake Storage Gen2 au niveau d'un <b>sous-dossier</b> précis, pas de tout le conteneur.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un rôle RBAC sur le sous-dossier",
  "Les listes de contrôle d'accès (ACL) POSIX sur le dossier",
  "Une stratégie d'accès stockée",
  "Le niveau d'accès Conteneur"
 ],
 "ans": 1,
 "expl": "<p>Avec l'espace de noms hiérarchique, on peut attribuer des <b>ACL POSIX</b> (lecture, écriture, exécution) sur chaque dossier et fichier. Les rôles RBAC s'attribuent au plus finement sur un conteneur, pas sur un dossier.</p><p>Les deux mécanismes se combinent : le RBAC est évalué d'abord, puis les ACL.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "stlake",
   "Conteneurs",
   "donnees",
   "ventes"
  ],
  "title": "ventes | Gérer la liste de contrôle d'accès",
  "rows": [
   [
    "*app-reporting",
    "Lecture, Exécution"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Droits par dossier dans Data Lake = ACL POSIX ; RBAC au mieux par conteneur."
},
{
 "id": "D2-125",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une application lit des données dans la région secondaire d'un compte RA-GZRS. Les données lues sont parfois légèrement en retard par rapport à la région primaire.</p><p>Pourquoi ?</p>",
 "opts": [
  "La lecture secondaire utilise le niveau Archive",
  "La région secondaire n'est accessible qu'en écriture",
  "La réplication vers la région secondaire est asynchrone",
  "RA-GZRS ne réplique que la nuit"
 ],
 "ans": 2,
 "expl": "<p>La réplication géographique est <b>asynchrone</b> : la région secondaire peut avoir quelques minutes de retard (l'objectif de point de récupération est généralement inférieur à 15 minutes, sans garantie). L'application doit tolérer cette cohérence éventuelle.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "stra"
  ],
  "title": "stra | Redondance",
  "menu": [
   "*Redondance"
  ],
  "rows": [
   [
    "Réplication géographique",
    "Asynchrone"
   ],
   [
    "*Retard possible",
    "Quelques minutes (RPO < 15 min en général)"
   ]
  ]
 },
 "keep": "Lecture secondaire = cohérence éventuelle."
},
{
 "id": "D2-126",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez permettre à une application d'écrire des blobs dans storage56 pendant 1 an, de façon sécurisée et sans gérer de secret. L'application tourne sur une VM Azure.</p><p>Quelle solution est recommandée ?</p>",
 "opts": [
  "Stocker key1 dans le code",
  "Une SAS de compte valable 1 an",
  "Une SAS de délégation d'utilisateur valable 1 an",
  "Activer une identité managée sur la VM et lui attribuer Contributeur aux données blob du stockage"
 ],
 "ans": 3,
 "expl": "<p>L'<b>identité managée</b> évite tout secret : Azure fournit les jetons à la VM, et le rôle de données donne le droit d'écrire. C'est la méthode recommandée pour les applications qui tournent dans Azure.</p><p>Une SAS d'un an est un secret longue durée difficile à révoquer. Une clé dans le code est la pire option. Une SAS de délégation d'utilisateur ne peut pas dépasser 7 jours.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM-App"
  ],
  "title": "VM-App | Identité",
  "menu": [
   "*Identité"
  ],
  "rows": [
   [
    "*Affectée par le système",
    "Activé"
   ],
   [
    "Rôle",
    "Contributeur aux données blob du stockage sur storage56"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Application dans Azure = identité managée + rôle de données ; pas de secret."
},
{
 "id": "D2-127",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous changez le niveau du partage de fichiers share13 de <b>Chaud</b> à <b>Froid</b>.</p><p>Quel est l'impact ?</p>",
 "opts": [
  "Le partage reste accessible ; le coût du stockage baisse et celui des transactions augmente",
  "Les fichiers doivent être réhydratés avant lecture",
  "Le partage devient Premium",
  "Le partage est hors ligne pendant la conversion"
 ],
 "ans": 0,
 "expl": "<p>Le changement de niveau d'un partage Standard se fait <b>en ligne</b>. Le niveau Froid a un stockage moins cher et des transactions plus chères. Un changement de niveau génère des frais de transaction pour déplacer les données.</p><p>Azure Files n'a pas de niveau hors ligne comme Archive. On ne passe pas un partage Standard en Premium : il faut un autre compte.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers",
   "share13"
  ],
  "title": "share13 | Modifier le niveau",
  "rows": [
   [
    "*Niveau",
    "Chaud → Froid (en ligne)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Niveau d'un partage Standard : changeable en ligne, sans hors ligne."
},
{
 "id": "D2-128",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une application doit pouvoir créer des SAS de délégation d'utilisateur pour storage57.</p><p>De quelle autorisation l'identité de l'application a-t-elle besoin au minimum, en plus des droits sur les données ?</p>",
 "opts": [
  "Propriétaire sur l'abonnement",
  "L'action generateUserDelegationKey, incluse par exemple dans Délégateur Blob du stockage",
  "Lister les clés du compte",
  "Administrateur général"
 ],
 "ans": 1,
 "expl": "<p>Pour obtenir une clé de délégation d'utilisateur, l'identité doit pouvoir appeler <code>Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action</code>, incluse dans le rôle <b>Délégateur Blob du stockage</b> (et dans les rôles de données blob Contributeur, Propriétaire, Lecteur). La SAS ne peut ensuite pas donner plus de droits que l'identité n'en a sur les données.</p><p>Aucun accès aux clés du compte n'est nécessaire : c'est tout l'intérêt de ce type de SAS.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage57"
  ],
  "title": "storage57 | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Rôle",
    "Délégateur Blob du stockage"
   ],
   [
    "Membres",
    "Identité de l'application"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Créer des SAS de délégation = generateUserDelegationKey (Délégateur Blob)."
},
{
 "id": "D2-129",
 "dom": 2,
 "type": "single",
 "stem": "<p>Les données de storage58 doivent être lisibles depuis la région secondaire uniquement en cas de panne de la région primaire, au coût le plus bas, et le compte doit résister à la perte d'une zone.</p><p>Quelle redondance devez-vous choisir ?</p>",
 "opts": [
  "GRS",
  "RA-GZRS",
  "GZRS",
  "ZRS"
 ],
 "ans": 2,
 "expl": "<p><b>GZRS</b> : ZRS dans la région primaire (résiste à la perte d'une zone) et copie dans la région secondaire, accessible après basculement. RA-GZRS coûte plus cher pour une lecture permanente non demandée.</p><p>ZRS n'a pas de copie dans une autre région. GRS ne protège pas contre la perte d'une zone dans la région primaire (LRS dans un seul centre de données).</p>",
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
    "*Redondance",
    "GZRS"
   ],
   [
    "Lecture secondaire permanente",
    "Non (pas RA)"
   ]
  ]
 },
 "keep": "Zone + région, lecture après basculement seulement = GZRS."
}
);
