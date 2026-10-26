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
 "expl": "Zone + région + lecture de la secondaire à tout moment = <b>Standard_RAGZRS</b>. Tous les services (blob, fichiers, files d'attente, tables) = compte usage général v2, <b>StorageV2</b>. BlockBlobStorage et FileStorage sont des comptes Premium spécialisés ; BlobStorage est un ancien type limité aux blobs."
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
 "expl": "Froid impose <b>30 jours</b> minimum (Cold : 90, Archive : 180). Suppression au jour 10 : les 20 jours restants sont facturés."
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
 "expl": "Une SAS de compte est signée avec key1 ou key2 : elle ne peut pas être révoquée seule. Il faut <b>régénérer key1</b> dans <b>Clés d'accès</b> ; toutes les SAS signées avec elle deviennent invalides. La page <b>Signature d'accès partagé</b> sert à en générer, pas à en révoquer. Pour révoquer une SAS précise, on utilise une SAS de service avec une stratégie d'accès stockée."
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
 "expl": "Le pare-feu est vérifié <b>avant</b> les droits : une SAS valide ne suffit pas si la source n'est pas autorisée. Subnet1 est dans la liste ; le domicile et Subnet2 n'y sont pas, même dans le même VNet."
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
 "expl": "1) Activer une source d'identité sur le compte (<b>AD DS</b>). 2) Donner l'autorisation au niveau du partage avec <b>Contributeur de partage SMB de données de fichier de stockage</b>. Les droits NTFS affinent ensuite. Une SAS n'utilise pas l'identité AD ; Lecteur permet de voir la ressource, pas d'ouvrir les fichiers."
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
 "expl": "Prérequis : <b>versioning des deux côtés</b>, <b>flux de modifications sur la source</b> seulement. Ensuite, créer la règle. Le flux sur la destination et la restauration à un point dans le temps ne sont pas nécessaires. (Activer le versioning puis le flux, ou l'inverse, fonctionne aussi dans la réalité, mais l'ordre attendu ici suit la documentation.)"
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
 "expl": "Blob <b>supprimé</b> → suppression réversible des objets blob, <b>14 jours</b>. Blob <b>écrasé</b> → <b>contrôle de version</b>. La suppression réversible des conteneurs (cochée par défaut), le flux de modifications et la restauration à un point dans le temps ne sont pas demandés : on les laisse décochés."
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
 "expl": "Immuabilité : la rétention <b>basée sur le temps</b> bloque pendant une durée fixée ; la <b>conservation légale</b> bloque sans durée, jusqu'à ce qu'on la retire. Un verrou protège la ressource, pas les fichiers."
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
 "expl": "<b>Chaud</b> : accès fréquent. <b>Froid</b> : rare, 30 jours minimum (60 jours de conservation : Cold, à 90 jours minimum, coûterait plus). <b>Cold</b> : très rare, 90 jours minimum, toujours en ligne. <b>Archive</b> : hors ligne, réhydratation de plusieurs heures, 180 jours minimum : seulement quand le délai est acceptable."
}
);
