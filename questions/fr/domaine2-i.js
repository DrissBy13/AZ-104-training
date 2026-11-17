/* Domaine 2 : stockage (lot I : D2-421 à D2-430, scénarios longs) */
AZ.questions.push(
{
 "id": "D2-421",
 "dom": 2,
 "type": "hot",
 "stem": "<p>À la suite d'un audit, Contoso doit durcir la configuration des comptes de stockage de l'abonnement Prod :</p><ul><li>les clients anciens qui se connectent en TLS 1.0 ou 1.1 doivent être refusés ;</li><li>les requêtes HTTP non chiffrées vers l'API REST doivent être rejetées ;</li><li>un administrateur malveillant ne doit pas pouvoir configurer une réplication d'objets vers un compte de stockage situé dans un autre locataire Entra ID ;</li><li>les fichiers chargés dans le conteneur uploads de stportal par des clients externes doivent être analysés à la recherche de logiciels malveillants dès leur chargement ;</li><li>les nouveaux comptes créés dans l'abonnement doivent respecter automatiquement la version minimale de TLS.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "TLS 1.0/1.1 et HTTP :",
   "o": [
    "TLS minimal 1.2 + transfert sécurisé requis",
    "Un NSG qui bloque le port 80 vers Storage",
    "Le routage réseau Microsoft sur le compte",
    "Un point de terminaison privé pour chaque client"
   ],
   "a": 0
  },
  {
   "l": "Réplication vers un autre locataire :",
   "o": [
    "Désactiver la réplication entre locataires",
    "Un verrou ReadOnly sur le compte",
    "Désactiver le flux de modifications",
    "Désactiver le contrôle de version des blobs"
   ],
   "a": 0
  },
  {
   "l": "Analyse des fichiers chargés :",
   "o": [
    "Une règle de cycle de vie vers Archive",
    "Une stratégie d'immuabilité sur uploads",
    "Microsoft Antimalware activé sur le compte",
    "Defender for Storage (analyse à l'envoi)"
   ],
   "a": 3
  },
  {
   "l": "Nouveaux comptes :",
   "o": [
    "Un verrou sur l'abonnement",
    "Un modèle ARM imposé aux équipes",
    "Azure Policy (Deny ou Modify)",
    "Une alerte du journal d'activité"
   ],
   "a": 2
  }
 ],
 "expl": "<b>TLS et HTTPS.</b> Le paramètre de version minimale de TLS rejette les connexions plus anciennes ; « Transfert sécurisé requis » rejette les requêtes HTTP.<b>Réplication entre locataires.</b> Le paramètre AllowCrossTenantReplication, désactivé, empêche les stratégies de réplication d'objets dont l'autre compte est dans un autre locataire.<b>Defender for Storage.</b> L'analyse des logiciels malveillants à l'envoi analyse chaque blob chargé et peut ajouter une balise d'index avec le résultat.<b>Azure Policy.</b> Des définitions intégrées imposent ou corrigent la version minimale de TLS des nouveaux comptes.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*TLS 1.0/1.1 et HTTP",
    "TLS minimal 1.2 + transfert sécurisé requis"
   ],
   [
    "Réplication vers un autre locataire",
    "Désactiver la réplication entre locataires"
   ],
   [
    "Analyse des fichiers chargés",
    "Defender for Storage (analyse à l'envoi)"
   ],
   [
    "Nouveaux comptes",
    "Azure Policy (Deny ou Modify)"
   ]
  ]
 },
 "keep": "TLS 1.2 + transfert sécurisé. Autre locataire = réplication entre locataires désactivée. Malware = Defender for Storage. Nouveaux comptes = Azure Policy."
},
{
 "id": "D2-422",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Un script nocturne s'exécute sur la VM VM-Batch (identité managée attribuée par le système) et copie des fichiers vers le conteneur archive du compte stbatch avec AzCopy. Plusieurs problèmes sont remontés :</p><ul><li>le script contient aujourd'hui un SAS en clair valable deux ans ; l'équipe sécurité veut supprimer tout secret ;</li><li>seuls les fichiers *.parquet du dossier source doivent être copiés ;</li><li>la copie de 2 To a été interrompue à 70 % par un redémarrage de la VM ; l'équipe veut éviter de tout recommencer ;</li><li>en journée, la copie sature la liaison WAN de l'agence et ralentit les utilisateurs.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Authentification :",
   "o": [
    "La clé du compte dans un fichier chiffré sur la VM",
    "Un SAS d'un an stocké dans une variable d'environnement",
    "azcopy login --identity + rôle de données",
    "azcopy login avec le compte d'un administrateur"
   ],
   "a": 2
  },
  {
   "l": "Fichiers *.parquet seulement :",
   "o": [
    "--include-after \"*.parquet\"",
    "--list-of-files \"*.parquet\"",
    "--exclude-path \"*.parquet\"",
    "--include-pattern \"*.parquet\""
   ],
   "a": 3
  },
  {
   "l": "Reprise après interruption :",
   "o": [
    "azcopy jobs clean, puis relancer la copie",
    "azcopy copy --overwrite=false sur tout le dossier",
    "azcopy jobs resume <ID de la tâche>",
    "azcopy sync, qui reprend toujours là où il s'est arrêté"
   ],
   "a": 2
  },
  {
   "l": "Saturation de la liaison :",
   "o": [
    "--check-length=false",
    "--block-size-mb",
    "--cap-mbps",
    "--log-level=ERROR"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Identité managée.</b> azcopy login --identity utilise l'identité de la VM ; il faut un rôle de données (Storage Blob Data Contributor) sur le compte ou le conteneur. Aucun secret n'est stocké.<b>Filtre.</b> --include-pattern accepte des caractères génériques sur les noms de fichiers.<b>Reprise.</b> AzCopy conserve un plan de travail : azcopy jobs list puis azcopy jobs resume reprend la tâche sans recopier ce qui a abouti (avec un SAS, il faut le repasser).<b>Débit.</b> --cap-mbps limite le débit de transfert en mégabits par seconde.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Authentification",
    "azcopy login --identity + rôle de données"
   ],
   [
    "Fichiers *.parquet seulement",
    "--include-pattern \"*.parquet\""
   ],
   [
    "Reprise après interruption",
    "azcopy jobs resume <ID de la tâche>"
   ],
   [
    "Saturation de la liaison",
    "--cap-mbps"
   ]
  ]
 },
 "keep": "Sans secret = --identity + rôle de données. Filtre = --include-pattern. Reprise = jobs resume. Débit = --cap-mbps."
},
{
 "id": "D2-423",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte stdocs (GPv2) a le contrôle de version des blobs activé et la suppression réversible des blobs activée (14 jours). La suppression réversible des conteneurs est activée (7 jours). Plusieurs incidents se produisent :</p><ul><li>lundi, un utilisateur écrase contrat.docx avec une mauvaise version ;</li><li>mardi, un script supprime offre.pdf ;</li><li>mercredi, un administrateur supprime le conteneur drafts ;</li><li>jeudi, un développeur supprime une version précédente de budget.xlsx.</li></ul><p>Comment devez-vous récupérer chaque élément ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "contrat.docx :",
   "o": [
    "Restaurer le conteneur à la date de dimanche",
    "Annuler la suppression (Undelete) du blob",
    "Restaurer l'instantané automatique de lundi",
    "Promouvoir la version précédente en actuelle"
   ],
   "a": 3
  },
  {
   "l": "offre.pdf :",
   "o": [
    "Impossible : le blob actuel n'existe plus",
    "Copier une version précédente sur le blob",
    "Annuler la suppression avec Undelete Blob seul",
    "Restaurer le blob depuis la région secondaire"
   ],
   "a": 1
  },
  {
   "l": "Conteneur drafts :",
   "o": [
    "Impossible : la suppression réversible est sur les blobs",
    "Restaurer le conteneur supprimé (même nom)",
    "Restaurer chaque blob avec Undelete",
    "Restaurer la version précédente du conteneur"
   ],
   "a": 1
  },
  {
   "l": "Version de budget.xlsx :",
   "o": [
    "Restaurer l'instantané du compte",
    "Annuler la suppression de la version",
    "Promouvoir la version actuelle",
    "Impossible : les versions ne sont pas protégées"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Écrasement.</b> Avec le contrôle de version, chaque écriture crée une version précédente ; on la promeut en version actuelle (copie sur le blob de base).<b>Suppression avec versions.</b> Supprimer un blob versionné transforme la version actuelle en version précédente : il n'y a plus de version actuelle. On restaure en copiant une version précédente sur le blob de base. Undelete Blob ne s'applique alors pas aux versions.<b>Conteneur.</b> La suppression réversible des conteneurs permet de restaurer le conteneur et son contenu, à condition qu'aucun conteneur du même nom n'ait été recréé.<b>Version supprimée.</b> La suppression réversible des blobs protège aussi les versions précédentes supprimées, qu'on peut restaurer avec Undelete.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*contrat.docx",
    "Promouvoir la version précédente en actuelle"
   ],
   [
    "offre.pdf",
    "Copier une version précédente sur le blob"
   ],
   [
    "Conteneur drafts",
    "Restaurer le conteneur supprimé (même nom)"
   ],
   [
    "Version de budget.xlsx",
    "Annuler la suppression de la version"
   ]
  ]
 },
 "keep": "Écrasé ou supprimé avec versions = copier une version précédente. Conteneur = suppression réversible de conteneur. Version supprimée = Undelete."
},
{
 "id": "D2-424",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso héberge deux partages dans Azure Files :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Partage</th><th>Compte</th><th>Taille provisionnée / quota</th><th>Constat</th></tr><tr><td>share-vdi</td><td>Premium FileStorage (modèle provisionné v1)</td><td>1 Tio</td><td>Les profils AVD sont lents le matin : la limite d'IOPS du partage est atteinte</td></tr><tr><td>share-archive</td><td>Standard GPv2, LRS</td><td>Quota 5 Tio</td><td>Le partage doit atteindre 60 Tio</td></tr></table></div><p>Les VM AVD sont des VM Windows à plusieurs cœurs, et l'équipe veut aussi augmenter le débit par client SMB.</p><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Limite d'IOPS de share-vdi :",
   "o": [
    "Augmenter le quota du partage seulement",
    "Passer le compte en ZRS",
    "Activer la hiérarchisation cloud",
    "Augmenter la taille provisionnée"
   ],
   "a": 3
  },
  {
   "l": "Facturation de share-vdi :",
   "o": [
    "Selon les données réellement stockées",
    "Selon le nombre de transactions",
    "Selon la taille provisionnée",
    "Selon le nombre de clients"
   ],
   "a": 2
  },
  {
   "l": "Débit par client SMB :",
   "o": [
    "Le chiffrement AES-128-CCM",
    "SMB 1.0 sur les clients",
    "SMB Multichannel",
    "Un second partage par client"
   ],
   "a": 2
  },
  {
   "l": "share-archive à 60 Tio :",
   "o": [
    "Activer les partages volumineux (100 Tio)",
    "Passer le compte en Premium FileStorage",
    "Impossible au-delà de 5 Tio en standard",
    "Créer douze partages de 5 Tio chacun"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Premium (provisionné v1).</b> Les IOPS et le débit de base dépendent de la taille provisionnée : on augmente la taille pour obtenir plus d'IOPS. La facturation porte sur la taille provisionnée, quelle que soit l'occupation. (Le modèle provisionné v2 permet de régler IOPS et débit séparément.)<b>SMB Multichannel.</b> Disponible sur les partages Premium, il ouvre plusieurs connexions réseau par client et augmente le débit des clients à plusieurs cœurs.<b>Partages volumineux.</b> Sur un compte standard, l'option des partages de fichiers volumineux porte la limite d'un partage de 5 Tio à 100 Tio ; elle ne peut pas être désactivée ensuite.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Limite d'IOPS de share-vdi",
    "Augmenter la taille provisionnée"
   ],
   [
    "Facturation de share-vdi",
    "Selon la taille provisionnée"
   ],
   [
    "Débit par client SMB",
    "SMB Multichannel"
   ],
   [
    "share-archive à 60 Tio",
    "Activer les partages volumineux (100 Tio)"
   ]
  ]
 },
 "keep": "Premium v1 : plus d'IOPS = plus de taille, facturé au provisionné. Débit client = Multichannel. > 5 Tio en standard = partages volumineux."
},
{
 "id": "D2-425",
 "dom": 2,
 "type": "hot",
 "stem": "<p>L'application de paie, hébergée sur VM-Paie (identité managée attribuée par le système), doit lire des blobs dans le compte sthr. Les exigences de l'équipe sécurité :</p><ul><li>l'application ne doit pouvoir lire que le conteneur payroll, pas les autres conteneurs du compte ;</li><li>parmi les blobs de payroll, elle ne doit lire que ceux dont la balise d'index de blob country vaut FR ;</li><li>aucun secret ne doit être stocké sur la VM ;</li><li>l'équipe veut vérifier, sans se connecter à la VM, que l'identité obtient bien un accès au blob payroll/fr/janvier.pdf.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Rôle et étendue :",
   "o": [
    "Storage Blob Data Reader sur le compte sthr",
    "Storage Blob Data Reader sur payroll",
    "Reader sur le conteneur payroll",
    "Storage Account Contributor sur sthr"
   ],
   "a": 1
  },
  {
   "l": "Restriction country = FR :",
   "o": [
    "Un SAS de service limité aux balises",
    "Une stratégie d'accès stockée sur payroll",
    "Une ACL POSIX sur le dossier fr/",
    "Une condition sur l'attribution de rôle"
   ],
   "a": 3
  },
  {
   "l": "Obtention du jeton sur la VM :",
   "o": [
    "Le point de terminaison IMDS de la VM",
    "Le mot de passe de l'identité managée",
    "Un certificat client installé sur la VM",
    "Une clé du compte stockée dans Key Vault"
   ],
   "a": 0
  },
  {
   "l": "Vérification sans connexion :",
   "o": [
    "Les recommandations d'Azure Advisor",
    "Vérifier l'accès, dans le volet IAM",
    "Les journaux de connexion d'Entra ID",
    "Le journal d'activité du compte sthr"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Étendue.</b> Les rôles de données peuvent être attribués au niveau d'un conteneur : l'identité ne lit que payroll.<b>Condition.</b> Le contrôle d'accès en fonction des attributs (ABAC) ajoute à l'attribution de rôle une condition, par exemple sur une balise d'index de blob ; il s'applique aux rôles de données de Blob.<b>IMDS.</b> L'application obtient un jeton Entra ID auprès du service de métadonnées d'instance, sans secret.<b>Vérifier l'accès.</b> Dans le volet Contrôle d'accès (IAM), « Vérifier l'accès » affiche les attributions effectives d'une identité, y compris d'une identité managée. (Les conditions ABAC sont évaluées au moment de la requête.)",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Rôle et étendue",
    "Storage Blob Data Reader sur payroll"
   ],
   [
    "Restriction country = FR",
    "Une condition sur l'attribution de rôle"
   ],
   [
    "Obtention du jeton sur la VM",
    "Le point de terminaison IMDS de la VM"
   ],
   [
    "Vérification sans connexion",
    "Vérifier l'accès, dans le volet IAM"
   ]
  ]
 },
 "keep": "Un conteneur = rôle à l'étendue du conteneur. Balise = condition ABAC. Jeton = IMDS. Contrôle = Vérifier l'accès."
},
{
 "id": "D2-426",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam veut utiliser l'authentification AD DS locale pour le partage Azure Files share-legal (compte stlegal). Les postes sont joints au domaine fabrikam.local et voient les contrôleurs de domaine par un VPN.</p><ul><li>Vous devez enregistrer le compte de stockage dans AD DS ;</li><li>tous les utilisateurs authentifiés du domaine doivent pouvoir lire le partage, sans attribution de rôle individuelle ; le groupe Juristes doit pouvoir écrire ;</li><li>l'équipe sécurité impose AES-256 pour les tickets Kerberos ;</li><li>après six mois, les utilisateurs perdent soudain l'accès : l'objet ordinateur du compte de stockage a un mot de passe expiré selon la stratégie du domaine.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Enregistrement du compte :",
   "o": [
    "Joindre au domaine une VM du compte",
    "Activer Microsoft Entra Domain Services",
    "Join-AzStorageAccount",
    "Créer un enregistrement SRV dans le DNS AD"
   ],
   "a": 2
  },
  {
   "l": "Lecture pour tous :",
   "o": [
    "ACL NTFS Everyone : Lecture, seule",
    "Rôle Reader sur le compte pour Domain Users",
    "Accès anonyme au niveau du partage",
    "Autorisation par défaut au niveau du partage"
   ],
   "a": 3
  },
  {
   "l": "Groupe Juristes :",
   "o": [
    "SMB Share Reader + ACL Écriture",
    "Storage Account Contributor pour le groupe",
    "SMB Share Contributor (groupe synchronisé)",
    "SMB Share Contributor sur le groupe local seul"
   ],
   "a": 2
  },
  {
   "l": "Mot de passe expiré :",
   "o": [
    "Supprimer et recréer le partage share-legal",
    "Désactiver Kerberos sur le compte de stockage",
    "Renouveler le mot de passe de l'objet AD",
    "Régénérer les deux clés d'accès du compte"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Enregistrement.</b> Join-AzStorageAccount crée dans AD DS un objet (compte d'ordinateur ou de service) qui représente le compte de stockage.<b>Autorisation par défaut.</b> Une autorisation au niveau du partage peut s'appliquer à toutes les identités authentifiées, sans attribution individuelle.<b>Groupe.</b> Les autorisations de partage reposent sur Entra ID : le groupe doit être synchronisé depuis AD DS. AES-256 se configure sur l'objet AD (Update-AzStorageAccountAuthForAES256).<b>Mot de passe.</b> Si la stratégie de domaine fait expirer le mot de passe de l'objet, il faut le renouveler (Update-AzStorageAccountADObjectPassword) ou exclure l'objet de la stratégie.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Enregistrement du compte",
    "Join-AzStorageAccount"
   ],
   [
    "Lecture pour tous",
    "Autorisation par défaut au niveau du partage"
   ],
   [
    "Groupe Juristes",
    "SMB Share Contributor (groupe synchronisé)"
   ],
   [
    "Mot de passe expiré",
    "Renouveler le mot de passe de l'objet AD"
   ]
  ]
 },
 "keep": "AD DS = Join-AzStorageAccount. Tous = autorisation par défaut. Groupe = synchronisé. Mot de passe = Update-AzStorageAccountADObjectPassword."
},
{
 "id": "D2-427",
 "dom": 2,
 "type": "hot",
 "stem": "<p>L'équipe d'exploitation de Contoso doit surveiller le compte stapi (GPv2), utilisé par une API publique :</p><ul><li>les développeurs se plaignent de lenteurs ; vous devez distinguer le temps de traitement côté stockage du temps passé sur le réseau et chez le client ;</li><li>vous devez savoir combien de requêtes échouent à cause d'une limitation (throttling) ;</li><li>l'équipe sécurité veut conserver, dans un espace de travail Log Analytics, le détail de chaque lecture et de chaque suppression de blob, avec l'identité de l'appelant ;</li><li>une alerte doit prévenir si la capacité utilisée du compte dépasse 40 To.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Lenteurs :",
   "o": [
    "UsedCapacity vs nombre d'objets blob",
    "Entrée (Ingress) vs sortie (Egress)",
    "Latence serveur vs de bout en bout",
    "Disponibilité (Availability) vs Transactions"
   ],
   "a": 2
  },
  {
   "l": "Limitations :",
   "o": [
    "Transactions, divisé par ResponseType",
    "BlobCount, divisé par la dimension BlobType",
    "Availability seule, en moyenne sur 1 h",
    "Egress, divisé par la dimension GeoType"
   ],
   "a": 0
  },
  {
   "l": "Détail des lectures et suppressions :",
   "o": [
    "Paramètre de diagnostic du compte, métriques",
    "Paramètre de diagnostic du service blob",
    "Journal d'activité vers Log Analytics",
    "Insights du stockage seul"
   ],
   "a": 1
  },
  {
   "l": "Alerte de capacité :",
   "o": [
    "Alerte de budget Cost Management",
    "Alerte d'intégrité des ressources",
    "Alerte de journal d'activité",
    "Alerte de métrique sur UsedCapacity"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Latence.</b> SuccessServerLatency mesure le temps de traitement par Azure Storage ; SuccessE2ELatency ajoute le réseau et le temps de lecture côté client. Un grand écart oriente vers le réseau ou le client.<b>Limitation.</b> La métrique Transactions, filtrée par la dimension ResponseType (par exemple ServerBusyError, ClientThrottlingError), compte les requêtes limitées.<b>Journaux de ressources.</b> Ils se configurent par service (blob, file, queue, table) : catégories StorageRead, StorageWrite, StorageDelete, avec l'identité de l'appelant. Le journal d'activité ne contient que les opérations de gestion.<b>Capacité.</b> UsedCapacity est une métrique du compte, utilisable dans une alerte de métrique (elle est mise à jour toutes les heures).",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Lenteurs",
    "Latence serveur vs de bout en bout"
   ],
   [
    "Limitations",
    "Transactions, divisé par ResponseType"
   ],
   [
    "Détail des lectures et suppressions",
    "Paramètre de diagnostic du service blob"
   ],
   [
    "Alerte de capacité",
    "Alerte de métrique sur UsedCapacity"
   ]
  ]
 },
 "keep": "Serveur vs bout en bout = latences. Limitation = ResponseType. Lectures = diagnostic du service blob. Capacité = UsedCapacity."
},
{
 "id": "D2-428",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso veut protéger les blobs du compte stclaims (GPv2, LRS) avec Azure Backup. Les exigences :</p><ul><li>pouvoir restaurer des blobs à n'importe quel moment des 30 derniers jours, directement dans le compte, sans copie des données ailleurs ;</li><li>se protéger aussi contre la suppression du compte de stockage entier ou contre un rançongiciel qui chiffrerait le compte : une copie doit être conservée 12 mois en dehors du compte ;</li><li>les sauvegardes doivent être gérées depuis un coffre ;</li><li>l'équipe veut empêcher qu'un administrateur supprime les sauvegardes avant la fin de leur rétention.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "30 jours dans le compte :",
   "o": [
    "Réplication d'objets",
    "Sauvegarde archivée (vaulted)",
    "Sauvegarde opérationnelle",
    "Instantanés manuels"
   ],
   "a": 2
  },
  {
   "l": "Copie hors du compte, 12 mois :",
   "o": [
    "Passage du compte en GRS",
    "Sauvegarde opérationnelle de 365 jours",
    "Verrou CanNotDelete",
    "Sauvegarde archivée (vaulted)"
   ],
   "a": 3
  },
  {
   "l": "Type de coffre :",
   "o": [
    "Un coffre géré par Site Recovery",
    "Un coffre de sauvegarde",
    "Un coffre Azure Key Vault",
    "Un coffre Recovery Services"
   ],
   "a": 1
  },
  {
   "l": "Empêcher la suppression anticipée :",
   "o": [
    "Suppression réversible du compte",
    "Immuabilité du coffre (verrouillée)",
    "Le rôle Backup Reader pour tous",
    "Un verrou ReadOnly sur le compte"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Sauvegarde opérationnelle.</b> Solution locale et continue : elle s'appuie sur la restauration à un instant, le contrôle de version et la suppression réversible du compte ; les données restent dans le compte.<b>Sauvegarde archivée.</b> Elle copie les données vers le coffre selon une planification, avec une rétention longue : elle protège contre la perte ou la corruption du compte.<b>Coffre.</b> Les sauvegardes de blobs se gèrent depuis un coffre de sauvegarde (Backup vault), pas un coffre Recovery Services.<b>Immuabilité.</b> Une fois verrouillée, l'immuabilité du coffre empêche la suppression des points de récupération avant leur expiration.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*30 jours dans le compte",
    "Sauvegarde opérationnelle"
   ],
   [
    "Copie hors du compte, 12 mois",
    "Sauvegarde archivée (vaulted)"
   ],
   [
    "Type de coffre",
    "Un coffre de sauvegarde"
   ],
   [
    "Empêcher la suppression anticipée",
    "Immuabilité du coffre (verrouillée)"
   ]
  ]
 },
 "keep": "Dans le compte = opérationnelle. Hors du compte = archivée (vaulted). Blobs = Backup vault. Pas de suppression = immuabilité verrouillée."
},
{
 "id": "D2-429",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam migre le serveur de fichiers FS-01 (Windows Server, 3 To, ACL NTFS complexes) vers le partage Azure Files share-data. Les contraintes :</p><ul><li>les ACL NTFS, les propriétaires et les horodatages doivent être conservés ;</li><li>la migration doit se faire en plusieurs passes : une copie initiale, puis des copies différentielles chaque nuit, et une dernière passe le jour de la bascule qui supprime aussi dans share-data les fichiers supprimés sur FS-01 ;</li><li>l'équipe veut ensuite garder un cache local à l'agence de Lyon, sur un nouveau serveur, avec les fichiers fréquemment utilisés.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Copie avec Robocopy :",
   "o": [
    "robocopy /MOV /COPY:DAT /E",
    "robocopy /MIR /COPY:DATSO",
    "robocopy /E /COPY:D /R:0 /W:0",
    "robocopy /XO /COPY:DT /E /Z"
   ],
   "a": 1
  },
  {
   "l": "Alternative avec AzCopy :",
   "o": [
    "--overwrite=ifSourceNewer --recursive --put-md5",
    "--put-md5 --check-length=true --recursive=true",
    "--recursive --preserve-last-modified-time=true",
    "--preserve-smb-permissions --preserve-smb-info"
   ],
   "a": 3
  },
  {
   "l": "Dernière passe :",
   "o": [
    "Il faut une passe /MOV",
    "/MIR supprime aussi à la destination",
    "Une suppression manuelle est nécessaire",
    "/MIR ne supprime jamais à la destination"
   ],
   "a": 1
  },
  {
   "l": "Cache à Lyon :",
   "o": [
    "Un second partage répliqué vers Lyon",
    "Azure File Sync, hiérarchisation cloud",
    "Une copie Robocopy nocturne vers Lyon",
    "BranchCache sur le partage Azure"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Robocopy.</b> /MIR copie l'arborescence et supprime à la destination ce qui n'existe plus à la source ; /COPY:DATSO copie données, attributs, horodatages, sécurité (ACL) et propriétaire ; /DCOPY:DAT fait de même pour les dossiers. Relancée, la commande ne copie que les différences.<b>AzCopy.</b> Vers Azure Files, --preserve-smb-permissions conserve les ACL et --preserve-smb-info les attributs et horodatages.<b>Cache.</b> Azure File Sync avec hiérarchisation cloud garde localement les fichiers utilisés et rappelle les autres à la demande.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Copie avec Robocopy",
    "robocopy /MIR /COPY:DATSO"
   ],
   [
    "Alternative avec AzCopy",
    "--preserve-smb-permissions --preserve-smb-info"
   ],
   [
    "Dernière passe",
    "/MIR supprime aussi à la destination"
   ],
   [
    "Cache à Lyon",
    "Azure File Sync, hiérarchisation cloud"
   ]
  ]
 },
 "keep": "Robocopy /MIR /COPY:DATSO. AzCopy --preserve-smb-*. Cache local = File Sync."
},
{
 "id": "D2-430",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte staudit (GPv2) stocke les journaux d'audit d'une banque. Les exigences réglementaires :</p><ul><li>les journaux sont écrits par ajout continu dans des objets blob d'ajout du conteneur audit-logs ; ils doivent être protégés en écriture pendant 5 ans, mais l'application doit pouvoir continuer à ajouter des lignes ;</li><li>dans le conteneur reports, chaque version d'un rapport doit avoir sa propre durée de rétention, fixée au moment de l'écriture ;</li><li>un rapport précis, concerné par une enquête, doit être protégé indéfiniment, en plus de sa rétention ;</li><li>la rétention de 5 ans d'audit-logs a été configurée par erreur à 50 ans et verrouillée.</li></ul><p>Que devez-vous configurer, et que pouvez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "audit-logs :",
   "o": [
    "Rétention limitée + ajouts protégés",
    "Verrou ReadOnly sur le compte staudit",
    "Rétention limitée dans le temps, seule",
    "Conservation légale sur le conteneur"
   ],
   "a": 0
  },
  {
   "l": "reports :",
   "o": [
    "Une étendue de chiffrement par version",
    "Immuabilité au niveau des versions",
    "Une règle de cycle de vie par version",
    "Une stratégie de conteneur de 5 ans"
   ],
   "a": 1
  },
  {
   "l": "Rapport sous enquête :",
   "o": [
    "Prolonger la rétention à 99 ans",
    "Un verrou CanNotDelete sur le blob",
    "Le copier vers un autre compte",
    "Conservation légale sur la version"
   ],
   "a": 3
  },
  {
   "l": "Rétention de 50 ans verrouillée :",
   "o": [
    "Impossible de la raccourcir (prolonger)",
    "La raccourcir depuis le support Microsoft",
    "La déverrouiller avec le rôle Owner",
    "Supprimer le conteneur et le recréer"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Ajouts protégés.</b> L'option « Autoriser les écritures d'ajout protégées » d'une stratégie limitée dans le temps permet d'ajouter des blocs aux objets blob d'ajout sans pouvoir modifier ni supprimer les données existantes.<b>Niveau version.</b> L'immuabilité au niveau des versions (contrôle de version requis) permet une stratégie différente par version.<b>Conservation légale.</b> Elle protège sans date de fin et s'ajoute à la rétention ; elle est levée explicitement.<b>Verrouillage.</b> Une stratégie limitée dans le temps verrouillée peut seulement être prolongée : ni raccourcie, ni supprimée, et le compte ne peut pas être supprimé tant que des données restent protégées.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*audit-logs",
    "Rétention limitée + ajouts protégés"
   ],
   [
    "reports",
    "Immuabilité au niveau des versions"
   ],
   [
    "Rapport sous enquête",
    "Conservation légale sur la version"
   ],
   [
    "Rétention de 50 ans verrouillée",
    "Impossible de la raccourcir (prolonger)"
   ]
  ]
 },
 "keep": "Ajouts = écritures d'ajout protégées. Par version = immuabilité de version. Indéfini = conservation légale. Verrouillé = seulement prolonger."
}
);
