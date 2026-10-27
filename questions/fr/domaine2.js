/* Domaine 2 : Stockage */
AZ.questions.push(
{
 "id": "D2-001",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez créer un compte de stockage nommé storage1 qui répond aux exigences suivantes :</p><ul><li>Prendre en charge les objets blob, les partages de fichiers, les files d'attente et les tables.</li><li>Rester disponible en cas de perte d'une zone de disponibilité ou de toute la région.</li><li>Permettre la lecture des données dans la région secondaire à tout moment.</li></ul><p>Comment devez-vous compléter la commande ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az storage account create --name storage1 --resource-group RG1 --location francecentral --sku {0} --kind {1}",
 "rows": [
  {
   "o": [
    "Standard_LRS",
    "Standard_ZRS",
    "Standard_GRS",
    "Standard_RAGZRS",
    "Premium_LRS"
   ],
   "a": 3,
   "l": "--sku"
  },
  {
   "o": [
    "BlobStorage",
    "BlockBlobStorage",
    "FileStorage",
    "StorageV2"
   ],
   "a": 3,
   "l": "--kind"
  }
 ],
 "expl": "<p>Trois exigences, trois indices :</p><ul><li><b>Perte d'une zone</b> → réplication entre zones (Z).</li><li><b>Perte de toute la région</b> → copie dans une région secondaire (G).</li><li><b>Lecture de la secondaire à tout moment</b> → accès en lecture (RA).</li></ul><p>D'où <b>Standard_RAGZRS</b>. Standard_GRS protège la région mais pas les zones, et ne permet pas de lire la secondaire sans basculement.</p><p>Pour avoir les quatre services (blob, fichiers, files d'attente, tables), il faut un compte <b>StorageV2</b> (usage général v2). BlockBlobStorage et FileStorage sont des comptes Premium spécialisés ; BlobStorage est un ancien type limité aux blobs.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Créer un compte de stockage",
  "menu": [
   "*Informations de base",
   "Avancé",
   "Mise en réseau",
   "Protection des données"
  ],
  "rows": [
   [
    "Nom du compte de stockage",
    "storage1"
   ],
   [
    "Performances",
    "Standard (StorageV2)"
   ],
   [
    "*Redondance",
    "Stockage géo-redondant interzone (GZRS)"
   ],
   [
    "*Rendre l'accès en lecture aux données disponible en cas d'indisponibilité régionale",
    "Coché (RA-GZRS)"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "LRS = 1 centre, ZRS = 3 zones, GRS = + région secondaire, GZRS = zones + région. Préfixe RA = lecture de la secondaire."
},
{
 "id": "D2-002",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un blob est placé au niveau d'accès Froid (Cool). Il est supprimé 10 jours plus tard.</p><p>Combien de jours de suppression anticipée sont facturés ?</p>",
 "opts": [
  "0 jour",
  "10 jours",
  "20 jours",
  "30 jours"
 ],
 "ans": 2,
 "expl": "<p>Chaque niveau froid a une <b>durée minimale de conservation</b> : Froid (Cool) 30 jours, Cold 90 jours, Archive 180 jours. Si on supprime (ou déplace) le blob avant, Azure facture les jours restants.</p><p>Ici : 30 − 10 = <b>20 jours</b> facturés en plus.</p><p>Le niveau Chaud n'a pas de minimum.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "data"
  ],
  "title": "rapport.pdf | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble",
   "Versions",
   "Instantanés"
  ],
  "rows": [
   [
    "*Niveau d'accès",
    "Froid (Cool) · minimum 30 jours"
   ],
   [
    "Âge du blob",
    "10 jours"
   ],
   [
    "Supprimer maintenant",
    "20 jours de suppression anticipée facturés"
   ]
  ]
 },
 "keep": "Minimums : Froid 30 j, Cold 90 j, Archive 180 j. Supprimer avant = jours restants facturés."
},
{
 "id": "D2-003",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous disposez d'un compte de stockage nommé storage1. Des signatures d'accès partagé (SAS) de compte ont été distribuées à plusieurs partenaires. L'une d'elles a fuité.</p><p>Vous devez révoquer immédiatement toutes les SAS de compte signées avec la clé key1.</p><p>Quel paramètre devez-vous utiliser ? Pour répondre, sélectionnez le paramètre approprié dans la zone de réponse.</p>",
 "win": {
  "title": "storage1 | Compte de stockage",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité",
     "Contrôle d'accès (IAM)",
     "Explorateur de stockage"
    ]
   },
   {
    "g": "Stockage des données",
    "items": [
     "Conteneurs",
     "Partages de fichiers"
    ]
   },
   {
    "g": "Sécurité + mise en réseau",
    "items": [
     "Mise en réseau",
     "Clés d'accès",
     "Signature d'accès partagé",
     "Chiffrement"
    ]
   },
   {
    "g": "Gestion des données",
    "items": [
     "Protection des données",
     "Gestion du cycle de vie"
    ]
   }
  ]
 },
 "ans": "Clés d'accès",
 "expl": "<p>Une <b>SAS de compte</b> est signée avec l'une des deux clés d'accès (key1 ou key2). Azure ne garde aucune liste de ces SAS : on ne peut pas en annuler une seule.</p><p>La seule façon de les révoquer est de <b>régénérer la clé</b> qui les a signées, dans <b>Clés d'accès</b>. Toutes les SAS signées avec key1 deviennent immédiatement invalides. Attention : les applications qui utilisent key1 doivent ensuite être mises à jour.</p><p>La page <b>Signature d'accès partagé</b> sert à générer des SAS, pas à les révoquer. Pour pouvoir révoquer une SAS précise, on crée une SAS de service liée à une <b>stratégie d'accès stockée</b> sur le conteneur.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Clés d'accès",
  "menu": [
   "Vue d'ensemble",
   "Signature d'accès partagé",
   "*Clés d'accès",
   "Chiffrement"
  ],
  "rows": [
   [
    "*key1",
    "Faire pivoter la clé"
   ],
   [
    "key2",
    "Inchangée"
   ]
  ],
  "btn": "Faire pivoter la clé"
 },
 "keep": "Révoquer les SAS de compte = régénérer la clé qui les a signées. SAS révocable une par une = stratégie d'accès stockée."
},
{
 "id": "D2-004",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le pare-feu du compte de stockage storage1 est configuré sur <b>Activé à partir des réseaux virtuels et adresses IP sélectionnés</b>. Seul le sous-réseau Subnet1 de VNet1 est ajouté. Aucune adresse IP n'est listée.</p><p>Chaque utilisateur ci-dessous dispose d'une SAS valide pour storage1.</p><p>Quel est le résultat de chaque accès ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "VM1, dans Subnet1 de VNet1 :",
   "o": [
    "Autorisé",
    "Refusé"
   ],
   "a": 0
  },
  {
   "l": "Un utilisateur depuis Internet, à son domicile :",
   "o": [
    "Autorisé",
    "Refusé"
   ],
   "a": 1
  },
  {
   "l": "VM2, dans Subnet2 de VNet1 :",
   "o": [
    "Autorisé",
    "Refusé"
   ],
   "a": 1
  }
 ],
 "expl": "<p>Le pare-feu du stockage est vérifié <b>avant</b> l'autorisation : une SAS valide ne sert à rien si la source réseau n'est pas autorisée.</p><ul><li><b>VM1 (Subnet1) : autorisé.</b> Le sous-réseau est dans la liste, avec un point de terminaison de service Microsoft.Storage.</li><li><b>Domicile : refusé.</b> Aucune adresse IP publique n'est autorisée.</li><li><b>VM2 (Subnet2) : refusé.</b> Chaque sous-réseau doit être ajouté ; être dans le même VNet ne suffit pas.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Mise en réseau",
  "menu": [
   "Vue d'ensemble",
   "*Mise en réseau",
   "Clés d'accès"
  ],
  "rows": [
   [
    "*Accès réseau public",
    "Activé à partir des réseaux virtuels et adresses IP sélectionnés"
   ],
   [
    "Réseaux virtuels",
    "VNet1 / Subnet1"
   ],
   [
    "Plages d'adresses",
    "(vide)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Pare-feu du stockage d'abord, autorisation ensuite. Chaque sous-réseau et chaque IP doivent être listés."
},
{
 "id": "D2-005",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Votre domaine AD DS est synchronisé avec Microsoft Entra ID. Le compte de stockage storage1 contient un partage Azure Files nommé share1.</p><p>Les utilisateurs du domaine doivent lire et modifier les fichiers de share1 en utilisant leurs identifiants AD DS.</p><p>Quelles deux actions devez-vous effectuer ? Chaque réponse correcte présente une partie de la solution.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Activer l'authentification AD DS sur storage1",
  "Générer une SAS pour chaque utilisateur",
  "Attribuer le rôle Contributeur de partage SMB de données de fichier de stockage sur share1",
  "Attribuer le rôle Lecteur sur storage1"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<p>L'accès aux fichiers Azure Files avec une identité se fait en trois niveaux :</p><ol><li><b>Source d'identité</b> sur le compte : ici <b>AD DS</b> (le compte de stockage est joint au domaine).</li><li><b>Autorisation au niveau du partage</b> par un rôle Azure : <b>Contributeur de partage SMB de données de fichier de stockage</b> pour lire et modifier.</li><li><b>Droits NTFS</b> sur les dossiers et fichiers, pour affiner.</li></ol><p>Une SAS n'utilise pas l'identité AD et ne fonctionne pas pour un montage SMB. Le rôle Lecteur porte sur le plan de contrôle : il ne donne pas accès aux fichiers.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers"
  ],
  "title": "Partages de fichiers | Accès basé sur l'identité",
  "menu": [
   "*Partages de fichiers"
  ],
  "rows": [
   [
    "*Active Directory Domain Services (AD DS)",
    "Configuré"
   ],
   [
    "Microsoft Entra Kerberos",
    "Non configuré"
   ]
  ],
  "btn": "Configurer"
 },
 "keep": "Azure Files + identité : source d'identité sur le compte, rôle SMB sur le partage, puis droits NTFS."
},
{
 "id": "D2-006",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous disposez de deux comptes de stockage nommés source1 et dest1. Vous devez configurer la réplication d'objets de source1 vers dest1.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ? Pour répondre, déplacez les actions appropriées de la liste des actions vers la zone de réponse et classez-les dans le bon ordre.</p>",
 "acts": [
  "Activer le flux de modifications sur dest1",
  "Activer le contrôle de version des blobs sur source1 et dest1",
  "Activer la restauration à un point dans le temps sur source1",
  "Activer le flux de modifications sur source1",
  "Créer la règle de réplication d'objets de source1 vers dest1"
 ],
 "seq": [
  1,
  3,
  4
 ],
 "expl": "<p>La réplication d'objets copie les blobs de façon asynchrone d'un compte source vers un compte de destination. Ses prérequis :</p><ul><li><b>Contrôle de version des blobs</b> sur la source <b>et</b> la destination ;</li><li><b>Flux de modifications</b> sur la <b>source</b> uniquement.</li></ul><p>On crée ensuite la <b>règle de réplication</b> (conteneur source → conteneur de destination, filtres éventuels).</p><p>Le flux de modifications sur la destination et la restauration à un point dans le temps ne sont pas requis.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "source1"
  ],
  "title": "source1 | Réplication d'objets",
  "menu": [
   "Protection des données",
   "*Réplication d'objets"
  ],
  "rows": [
   [
    "Compte de destination",
    "dest1"
   ],
   [
    "*Conteneur source → destination",
    "data → data-copie"
   ],
   [
    "Prérequis",
    "Versioning (2 comptes), flux de modifications (source)"
   ]
  ],
  "btn": "Créer des règles de réplication"
 },
 "keep": "Réplication d'objets : versioning des deux côtés, flux de modifications sur la source, puis la règle."
},
{
 "id": "D2-007",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous disposez d'un compte de stockage nommé storage1.</p><p>Les utilisateurs doivent pouvoir récupérer, pendant 14 jours, un blob supprimé et l'ancienne version d'un blob écrasé. Seules les fonctionnalités nécessaires doivent être activées.</p><p>Comment devez-vous configurer la protection des données ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "storage1 | Protection des données",
  "sub": "Compte de stockage",
  "rows": [
   {
    "k": "head",
    "t": "Récupération"
   },
   {
    "k": "check",
    "l": "Activer la restauration à un point dans le temps pour les conteneurs",
    "d": false,
    "a": false
   },
   {
    "k": "check",
    "l": "Activer la suppression réversible pour les objets blob",
    "d": true,
    "a": true
   },
   {
    "k": "select",
    "l": "Conserver les objets blob supprimés pendant (jours)",
    "o": [
     "7",
     "14",
     "30"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "check",
    "l": "Activer la suppression réversible pour les conteneurs",
    "d": true,
    "a": false
   },
   {
    "k": "head",
    "t": "Suivi"
   },
   {
    "k": "check",
    "l": "Activer le contrôle de version des objets blob",
    "d": false,
    "a": true
   },
   {
    "k": "check",
    "l": "Activer le flux de modifications d'objets blob",
    "d": false,
    "a": false
   }
  ]
 },
 "expl": "<p>Deux besoins, deux fonctionnalités :</p><ul><li>Récupérer un blob <b>supprimé</b> → <b>suppression réversible des objets blob</b>, avec <b>14 jours</b> de conservation.</li><li>Récupérer l'ancienne version d'un blob <b>écrasé</b> → <b>contrôle de version</b>. (La suppression réversible seule garde un instantané lors d'un écrasement, mais le versioning est la fonctionnalité prévue pour cela.)</li></ul><p>La suppression réversible des <b>conteneurs</b> est cochée par défaut, mais elle n'est pas demandée : on la décoche. Le flux de modifications et la restauration à un point dans le temps non plus.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Protection des données",
  "menu": [
   "Vue d'ensemble",
   "*Protection des données",
   "Réplication d'objets"
  ],
  "rows": [
   [
    "*Activer la suppression réversible pour les objets blob",
    "Coché · 14 jours"
   ],
   [
    "*Activer le contrôle de version des objets blob",
    "Coché"
   ],
   [
    "Activer la suppression réversible pour les conteneurs",
    "Décoché"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Blob supprimé = suppression réversible des blobs. Blob écrasé = contrôle de version. Conteneur supprimé = suppression réversible des conteneurs."
},
{
 "id": "D2-008",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le conteneur legal1 contient des documents liés à un litige. Ils ne doivent être ni modifiés ni supprimés tant que le litige est en cours. La durée du litige est inconnue.</p><p>Que devez-vous configurer sur legal1 ?</p>",
 "opts": [
  "Une stratégie de rétention basée sur le temps",
  "Un verrou de type Supprimer sur le compte",
  "Une règle de gestion du cycle de vie",
  "Une conservation légale"
 ],
 "ans": 3,
 "expl": "<p>Le stockage <b>immuable</b> (WORM : écriture unique, lectures multiples) propose deux types de stratégies sur un conteneur :</p><ul><li><b>Rétention basée sur le temps</b> : les blobs sont protégés pendant une durée fixée (par exemple 7 ans).</li><li><b>Conservation légale</b> : les blobs sont protégés sans durée, jusqu'à ce que la conservation soit retirée. C'est fait pour un litige dont on ne connaît pas la fin.</li></ul><p>Un verrou de ressource protège le compte sur le plan de contrôle, pas les fichiers. Le cycle de vie déplace ou supprime des blobs, il ne protège rien.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "legal1"
  ],
  "title": "legal1 | Stratégie d'accès",
  "menu": [
   "Vue d'ensemble",
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "#Stockage d'objets blob immuable",
    ""
   ],
   [
    "*Type de stratégie",
    "Conservation légale"
   ],
   [
    "Étiquette",
    "Litige-2026"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Durée connue = rétention basée sur le temps. Durée inconnue = conservation légale."
},
{
 "id": "D2-009",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous stockez différents types de données dans des comptes de stockage Blob. Vous devez réduire les coûts tout en respectant les besoins d'accès.</p><p>Quel niveau d'accès devez-vous utiliser pour chaque type de données ? Pour répondre, faites glisser le niveau approprié vers chaque type de données. Chaque niveau peut être utilisé une fois, plusieurs fois ou pas du tout.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Niveaux d'accès",
 "tgtHead": [
  "Données",
  "Niveau d'accès"
 ],
 "srcs": [
  "Chaud",
  "Froid",
  "Cold",
  "Archive"
 ],
 "tgts": [
  {
   "l": "Journaux lus plusieurs fois par jour",
   "a": 0
  },
  {
   "l": "Sauvegardes consultées rarement, conservées 60 jours, lecture immédiate nécessaire",
   "a": 1
  },
  {
   "l": "Rapports consultés une fois par an, conservés 1 an, lecture immédiate nécessaire",
   "a": 2
  },
  {
   "l": "Archives légales conservées 10 ans, délai de plusieurs heures acceptable",
   "a": 3
  }
 ],
 "expl": "<p>On choisit le niveau le moins cher qui respecte le besoin d'accès et la durée de conservation :</p><ul><li><b>Chaud</b> : accès fréquent, stockage le plus cher, accès le moins cher.</li><li><b>Froid</b> (Cool) : accès rare, 30 jours minimum. Pour 60 jours, Cold (90 jours minimum) coûterait plus à cause de la pénalité.</li><li><b>Cold</b> : accès très rare, 90 jours minimum, toujours lisible tout de suite. Idéal pour 1 an.</li><li><b>Archive</b> : hors ligne, réhydratation de plusieurs heures, 180 jours minimum. Seulement si le délai est acceptable.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs"
  ],
  "title": "Modifier le niveau",
  "rows": [
   [
    "*Niveau d'accès",
    "Chaud · Froid · Cold · Archive"
   ],
   [
    "Archive",
    "Réhydratation : jusqu'à 15 h (standard), < 1 h (haute priorité)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Chaud > Froid (30 j) > Cold (90 j) > Archive (180 j, hors ligne). Plus froid = stockage moins cher, accès plus cher."
}
);
