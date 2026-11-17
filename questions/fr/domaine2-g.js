/* Domaine 2 : stockage (lot G : D2-401 à D2-410, scénarios longs) */
AZ.questions.push(
{
 "id": "D2-401",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso crée quatre comptes de stockage en France Central (région associée : France South). Les exigences de chaque charge de travail sont les suivantes :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Contenu</th><th>Exigences</th></tr><tr><td>st-portal</td><td>Images du site public (GPv2)</td><td>Rester disponible en lecture et en écriture si un centre de données de France Central tombe ; pouvoir lire les données depuis France South pendant une panne régionale, sans attendre de basculement</td></tr><tr><td>st-archive</td><td>Sauvegardes conservées 10 ans (GPv2)</td><td>Coût minimal, niveau Archive pour la plupart des blobs ; copie dans une seconde région</td></tr><tr><td>st-iot</td><td>Ingestion de télémétrie (blobs de bloc Premium)</td><td>Latence faible et survie à la perte d'une zone</td></tr><tr><td>st-dev</td><td>Données de test régénérables (GPv2)</td><td>Coût le plus bas possible</td></tr></table></div><p>Quelle redondance devez-vous choisir pour chaque compte ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "st-portal :",
   "o": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS",
    "GZRS",
    "RA-GZRS"
   ],
   "a": 5
  },
  {
   "l": "st-archive :",
   "o": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS",
    "GZRS",
    "RA-GZRS"
   ],
   "a": 2
  },
  {
   "l": "st-iot :",
   "o": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS",
    "GZRS",
    "RA-GZRS"
   ],
   "a": 1
  },
  {
   "l": "st-dev :",
   "o": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS",
    "GZRS",
    "RA-GZRS"
   ],
   "a": 0
  }
 ],
 "expl": "<b>st-portal.</b> La perte d'un centre de données (une zone) impose une réplication entre zones (ZRS ou GZRS) ; la lecture dans la région secondaire sans basculement impose l'option RA. Seul RA-GZRS réunit les deux.<b>st-archive.</b> Le niveau Archive n'est pas pris en charge sur les comptes ZRS, GZRS et RA-GZRS : il reste LRS, GRS ou RA-GRS. GRS donne la copie régionale au moindre coût (aucune lecture secondaire n'est demandée).<b>st-iot.</b> Les comptes Premium (BlockBlobStorage) ne proposent que LRS et ZRS ; ZRS survit à la perte d'une zone.<b>st-dev.</b> LRS est l'option la moins chère.",
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
    "*st-portal",
    "RA-GZRS"
   ],
   [
    "st-archive",
    "GRS"
   ],
   [
    "st-iot",
    "ZRS"
   ],
   [
    "st-dev",
    "LRS"
   ]
  ]
 },
 "keep": "Zone + lecture secondaire = RA-GZRS. Archive = pas de ZRS/GZRS. Premium = LRS ou ZRS."
},
{
 "id": "D2-402",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte stfinance (GPv2, GRS, niveau d'accès par défaut : chaud) contient les blobs suivants :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Blob</th><th>Niveau</th><th>Situation</th></tr><tr><td>rapport-2019.pdf</td><td>Archive</td><td>Un auditeur en a besoin dans l'heure ; taille 2 Gio</td></tr><tr><td>scan-2020.tif</td><td>Archive</td><td>Nécessaire d'ici après-demain ; il doit rester en Archive pour la conformité</td></tr><tr><td>export-mars.csv</td><td>Froid (cold)</td><td>Placé dans ce niveau il y a 40 jours ; on veut le supprimer</td></tr><tr><td>log-avril.json</td><td>Froid (cool)</td><td>Placé dans ce niveau il y a 12 jours ; on veut le passer en Archive</td></tr></table></div><p>Que devez-vous faire, et quelles sont les conséquences ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "rapport-2019.pdf :",
   "o": [
    "Le télécharger directement en Archive",
    "Activer l'accès en lecture secondaire",
    "Réhydrater, priorité Standard",
    "Réhydrater avec la priorité Haute"
   ],
   "a": 3
  },
  {
   "l": "scan-2020.tif :",
   "o": [
    "Le copier vers un niveau en ligne",
    "Changer son niveau en Chaud",
    "Le lire depuis la région secondaire",
    "Créer un instantané du blob"
   ],
   "a": 0
  },
  {
   "l": "Suppression d'export-mars.csv :",
   "o": [
    "Suppression bloquée jusqu'au 90e jour",
    "Frais facturés au prorata pour 50 jours",
    "Frais pour 140 jours restants (minimum Archive)",
    "Aucuns frais : le minimum de 30 jours est dépassé"
   ],
   "a": 1
  },
  {
   "l": "log-avril.json vers Archive :",
   "o": [
    "Possible seulement par une règle de cycle de vie",
    "Impossible avant 30 jours",
    "Frais de suppression anticipée (18 jours)",
    "Aucuns frais : changement gratuit"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Réhydratation.</b> Un blob en Archive n'est pas lisible. La priorité Haute peut réhydrater en moins d'une heure les objets de moins de 10 Gio ; la priorité Standard peut prendre jusqu'à 15 heures.<b>Copie.</b> Copier le blob archivé vers un blob de destination en niveau en ligne laisse l'original en Archive ; changer le niveau du blob le ferait sortir d'Archive.<b>Suppression anticipée.</b> Durées minimales : 30 jours (cool), 90 jours (cold), 180 jours (archive). Supprimer ou déplacer avant ce délai facture les jours restants au prorata : 90 − 40 = 50 jours pour export-mars, 30 − 12 = 18 jours pour log-avril. L'opération n'est pas bloquée.",
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
    "*rapport-2019.pdf",
    "Réhydrater avec la priorité Haute"
   ],
   [
    "scan-2020.tif",
    "Le copier vers un niveau en ligne"
   ],
   [
    "Suppression d'export-mars.csv",
    "Frais facturés au prorata pour 50 jours"
   ],
   [
    "log-avril.json vers Archive",
    "Frais de suppression anticipée (18 jours)"
   ]
  ]
 },
 "keep": "Haute = moins d'1 h (< 10 Gio). Garder l'original = copier. Minimums : 30 / 90 / 180 jours, au prorata."
},
{
 "id": "D2-403",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte stlogs (GPv2, LRS) reçoit chaque jour des journaux dans le conteneur logs et des documents dans le conteneur docs. Vous rédigez une stratégie de gestion du cycle de vie.</p><p>Exigences :</p><ul><li>logs : passer en froid (cool) 30 jours après la dernière modification, en Archive après 90 jours, supprimer après 365 jours ;</li><li>docs : déplacer en froid les documents qui n'ont pas été lus depuis 60 jours, et les remettre automatiquement en chaud s'ils sont relus ;</li><li>les versions précédentes des blobs de docs (le contrôle de version est activé) doivent être supprimées 30 jours après être devenues des versions précédentes ;</li><li>la règle sur logs ne doit s'appliquer qu'aux blobs dont le nom commence par logs/app1/.</li></ul><p>La stratégie a été enregistrée il y a deux heures, et aucun blob n'a encore changé de niveau.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Condition pour docs :",
   "o": [
    "daysAfterLastAccessTimeGreaterThan",
    "daysAfterLastTierChangeGreaterThan",
    "daysAfterModificationGreaterThan",
    "daysAfterCreationGreaterThan"
   ],
   "a": 0
  },
  {
   "l": "Prérequis pour docs :",
   "o": [
    "Activer la suppression réversible des blobs",
    "Activer l'index de blobs sur le conteneur",
    "Activer le suivi de l'heure du dernier accès",
    "Activer le flux de modifications du compte"
   ],
   "a": 2
  },
  {
   "l": "Filtre de logs :",
   "o": [
    "blobIndexMatch = logs/app1",
    "blobTypes = appendBlob",
    "prefixMatch = app1/",
    "prefixMatch = logs/app1/"
   ],
   "a": 3
  },
  {
   "l": "Aucun blob n'a changé de niveau :",
   "o": [
    "La stratégie ne s'applique qu'aux nouveaux blobs",
    "La stratégie peut prendre jusqu'à 24 h",
    "Il faut lancer la stratégie manuellement",
    "Le compte doit être redémarré"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Dernier accès.</b> La condition daysAfterLastAccessTimeGreaterThan nécessite le suivi de l'heure du dernier accès sur le compte ; l'option enableAutoTierToHotFromCool remet le blob en chaud quand il est relu.<b>Versions.</b> Les actions sur les versions précédentes utilisent daysAfterCreationGreaterThan sur la version (date à laquelle elle est devenue précédente).<b>Filtre.</b> prefixMatch inclut le nom du conteneur : logs/app1/.<b>Délai.</b> Une stratégie nouvelle ou modifiée peut prendre jusqu'à 24 heures avant de s'appliquer ; elle concerne aussi les blobs existants.",
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
    "*Condition pour docs",
    "daysAfterLastAccessTimeGreaterThan"
   ],
   [
    "Prérequis pour docs",
    "Activer le suivi de l'heure du dernier accès"
   ],
   [
    "Filtre de logs",
    "prefixMatch = logs/app1/"
   ],
   [
    "Aucun blob n'a changé de niveau",
    "La stratégie peut prendre jusqu'à 24 h"
   ]
  ]
 },
 "keep": "Non lus = dernier accès (suivi activé). Préfixe = conteneur/chemin. Jusqu'à 24 h, blobs existants inclus."
},
{
 "id": "D2-404",
 "dom": 2,
 "type": "hot",
 "stem": "<p>L'équipe Data de Fabrikam doit donner des accès temporaires au compte stdata (GPv2) :</p><ul><li>Partenaire A : lecture seule du conteneur exports pendant 3 jours ; Fabrikam veut que ce jeton soit signé avec des identifiants Microsoft Entra plutôt qu'avec une clé du compte ;</li><li>Partenaire B : écriture dans le conteneur uploads pendant 6 mois ; Fabrikam veut pouvoir révoquer ce jeton seul à tout moment sans changer les clés du compte ;</li><li>Outil de migration : lecture sur les services Blob, File et Table du compte avec un seul jeton ;</li><li>l'équipe sécurité envisage de désactiver l'autorisation par clé partagée sur stdata.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Partenaire A :",
   "o": [
    "SAS de délégation d'utilisateur",
    "SAS de service signé par la clé secondaire",
    "SAS de compte limité au service Blob",
    "Clé d'accès du compte, renouvelée après 3 jours"
   ],
   "a": 0
  },
  {
   "l": "Partenaire B :",
   "o": [
    "SAS de délégation d'utilisateur de 6 mois",
    "SAS ad hoc, rotation des clés si besoin",
    "SAS de service + stratégie d'accès stockée",
    "SAS de compte sur un seul service"
   ],
   "a": 2
  },
  {
   "l": "Outil de migration :",
   "o": [
    "SAS de compte",
    "Rôle Storage Blob Data Reader",
    "SAS de délégation d'utilisateur",
    "Trois SAS de service"
   ],
   "a": 0
  },
  {
   "l": "Si la clé partagée est désactivée :",
   "o": [
    "Tous les SAS cessent de fonctionner",
    "Seuls les SAS de A et B restent valides",
    "Aucun impact sur les SAS existants",
    "Seul le SAS de délégation (A) reste valide"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Délégation d'utilisateur.</b> Signée avec une clé de délégation obtenue via Entra ID ; elle porte sur Blob (et Data Lake) et sa durée maximale est de 7 jours, ce qui convient à 3 jours.<b>Stratégie d'accès stockée.</b> Un SAS de service qui la référence peut être révoqué en supprimant ou modifiant la stratégie (jusqu'à 5 par conteneur), sans toucher aux clés.<b>SAS de compte.</b> Seul type qui couvre plusieurs services avec un même jeton.<b>Clé partagée désactivée.</b> Les SAS de compte et de service, signés par une clé du compte, sont refusés ; le SAS de délégation d'utilisateur reste valide.",
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
    "*Partenaire A",
    "SAS de délégation d'utilisateur"
   ],
   [
    "Partenaire B",
    "SAS de service + stratégie d'accès stockée"
   ],
   [
    "Outil de migration",
    "SAS de compte"
   ],
   [
    "Si la clé partagée est désactivée",
    "Seul le SAS de délégation (A) reste valide"
   ]
  ]
 },
 "keep": "Entra = délégation d'utilisateur (7 j max). Révocable = stratégie stockée. Multiservice = SAS de compte."
},
{
 "id": "D2-405",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte stsecure (GPv2) contient des données sensibles. Sa configuration réseau actuelle est « Activé depuis tous les réseaux ». Vous devez appliquer les exigences suivantes :</p><ul><li>les VM du sous-réseau snet-app (VNet-App, France Central) doivent accéder au compte en restant sur le réseau principal Azure, sans adresse IP privée dédiée au compte ;</li><li>les serveurs du siège, reliés par ExpressRoute en peering privé à VNet-Hub, doivent accéder au compte par une adresse IP privée ;</li><li>un espace de travail Azure Synapse précis (et lui seul parmi les ressources de ce type) doit pouvoir lire le compte avec son identité managée ;</li><li>tout autre accès public doit être refusé.</li></ul><p>Après la création du point de terminaison privé, les serveurs du siège résolvent toujours stsecure.blob.core.windows.net vers l'adresse publique.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "snet-app :",
   "o": [
    "Une passerelle NAT associée à snet-app",
    "Règle d'adresse IP publique pour VNet-App",
    "Point de terminaison de service",
    "Point de terminaison privé dans snet-app"
   ],
   "a": 2
  },
  {
   "l": "Espace Synapse :",
   "o": [
    "Rôle Owner sur le compte",
    "Exception « services approuvés »",
    "Règle d'instance de ressource",
    "Règle IP de Synapse"
   ],
   "a": 2
  },
  {
   "l": "Accès public :",
   "o": [
    "Activé depuis tous les réseaux",
    "Désactivé pour tous les réseaux",
    "Activé depuis certains réseaux",
    "Accès anonyme désactivé seulement"
   ],
   "a": 2
  },
  {
   "l": "Résolution DNS au siège :",
   "o": [
    "Un CNAME dans la zone publique core.windows.net",
    "Un enregistrement A dans la zone publique blob",
    "Une route définie par l'utilisateur vers le point",
    "Zone privatelink.blob + redirection conditionnelle"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Point de terminaison de service.</b> Le trafic du sous-réseau atteint le compte par le réseau principal Azure, avec l'adresse publique du compte ; il faut aussi ajouter le sous-réseau dans le pare-feu du compte.<b>Règle d'instance.</b> Elle autorise une ressource précise (par son ID) ; l'exception « services approuvés » autoriserait toutes les instances de ces services dans le locataire, ce qui est plus large.<b>Accès public.</b> « Désactivé » bloquerait aussi le point de terminaison de service et la règle d'instance ; « Activé depuis certains réseaux » applique le pare-feu. Le point de terminaison privé fonctionne dans les deux cas.<b>DNS.</b> Les serveurs locaux doivent résoudre le nom via la zone privée privatelink.blob.core.windows.net liée à VNet-Hub, par exemple avec une redirection conditionnelle vers un résolveur privé Azure DNS.",
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
    "*snet-app",
    "Point de terminaison de service"
   ],
   [
    "Espace Synapse",
    "Règle d'instance de ressource"
   ],
   [
    "Accès public",
    "Activé depuis certains réseaux"
   ],
   [
    "Résolution DNS au siège",
    "Zone privatelink.blob + redirection conditionnelle"
   ]
  ]
 },
 "keep": "Sans IP privée = point de terminaison de service. Une ressource précise = règle d'instance. DNS local = zone privatelink + redirection."
},
{
 "id": "D2-406",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso migre son serveur de fichiers vers un partage Azure Files (share-rh dans le compte strh). Le contexte :</p><ul><li>les utilisateurs sont des identités hybrides (AD DS local synchronisé avec Entra Connect) ;</li><li>leurs postes sont joints à Microsoft Entra uniquement, sans ligne de vue vers les contrôleurs de domaine ;</li><li>le groupe RH-Gestion doit pouvoir modifier les fichiers, le groupe RH-Lecture seulement les lire ; le groupe IT-Admins doit pouvoir modifier les ACL NTFS ;</li><li>les autorisations NTFS existantes, migrées avec Robocopy, doivent continuer à s'appliquer au niveau des dossiers ;</li><li>un utilisateur signale que le partage n'est pas accessible depuis son domicile ; son fournisseur d'accès bloque un port.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Source d'identité du compte :",
   "o": [
    "Clé du compte de stockage",
    "Microsoft Entra Kerberos",
    "AD DS local",
    "Microsoft Entra Domain Services"
   ],
   "a": 1
  },
  {
   "l": "RH-Gestion :",
   "o": [
    "Storage Blob Data Contributor sur strh",
    "Storage File Data SMB Share Contributor",
    "Storage File Data SMB Share Reader",
    "Storage Account Contributor sur strh"
   ],
   "a": 1
  },
  {
   "l": "IT-Admins :",
   "o": [
    "SMB Share Elevated Contributor",
    "Owner sur le compte de stockage strh",
    "Storage File Data SMB Share Contributor",
    "Storage File Data Privileged Contributor"
   ],
   "a": 0
  },
  {
   "l": "Port bloqué :",
   "o": [
    "TCP 443",
    "TCP 445",
    "UDP 3389",
    "TCP 2049"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Entra Kerberos.</b> Il permet aux identités hybrides d'accéder au partage depuis des appareils joints à Entra, sans ligne de vue vers un contrôleur de domaine. L'authentification AD DS exigerait cette ligne de vue.<b>Rôles de partage.</b> SMB Share Reader = lecture ; SMB Share Contributor = lecture, écriture, suppression ; SMB Share Elevated Contributor = en plus, modification des ACL NTFS. Les autorisations de partage (RBAC) et NTFS se cumulent : la plus restrictive l'emporte.<b>Port 445.</b> SMB utilise TCP 445, souvent bloqué par les fournisseurs d'accès ; on passe par un VPN, ou par Azure File Sync avec un serveur local. TCP 2049 correspond à NFS.",
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
    "*Source d'identité du compte",
    "Microsoft Entra Kerberos"
   ],
   [
    "RH-Gestion",
    "Storage File Data SMB Share Contributor"
   ],
   [
    "IT-Admins",
    "SMB Share Elevated Contributor"
   ],
   [
    "Port bloqué",
    "TCP 445"
   ]
  ]
 },
 "keep": "Hybride + joint Entra = Entra Kerberos. Modifier les ACL = Elevated Contributor. SMB = TCP 445."
},
{
 "id": "D2-407",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam déploie Azure File Sync pour trois agences. Le partage Azure Files share-projets (compte stfiles) doit être synchronisé avec les serveurs FS-Paris, FS-Lyon et FS-Nantes.</p><ul><li>Les trois serveurs doivent partager le même contenu.</li><li>FS-Nantes a un petit disque : seuls les fichiers récents doivent y rester localement, en gardant au moins 20 % d'espace libre sur le volume.</li><li>FS-Lyon est déjà inscrit auprès d'un autre service de synchronisation de stockage (Storage Sync Service), Sync-Test, utilisé pour un essai.</li><li>Un administrateur a copié 2 000 fichiers directement dans share-projets avec le portail ; ils n'apparaissent pas encore sur les serveurs le lendemain matin.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Organisation :",
   "o": [
    "Un seul groupe de synchronisation pour les trois",
    "Trois partages reliés par réplication d'objets",
    "Trois groupes, un par serveur d'agence",
    "Un groupe par serveur, avec le même point cloud"
   ],
   "a": 0
  },
  {
   "l": "FS-Nantes :",
   "o": [
    "Déduplication des données seule",
    "Point de terminaison en lecture seule",
    "Hiérarchisation cloud, espace libre 20 %",
    "Quota NTFS de 80 % sur le volume"
   ],
   "a": 2
  },
  {
   "l": "FS-Lyon :",
   "o": [
    "Le désinscrire de Sync-Test, puis l'inscrire",
    "Réinstaller Windows Server",
    "Ajouter Sync-Test comme point cloud",
    "L'inscrire en plus auprès du nouveau service"
   ],
   "a": 0
  },
  {
   "l": "Fichiers copiés dans le portail :",
   "o": [
    "Ils ne seront jamais synchronisés vers les serveurs",
    "Ils exigent un instantané du partage pour remonter",
    "Détectés sous 24 h, ou par détection manuelle",
    "Il faut redémarrer l'agent sur chaque serveur"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Groupe de synchronisation.</b> Un groupe contient un seul point de terminaison cloud (le partage) et un ou plusieurs points de terminaison serveur ; tous synchronisent le même contenu.<b>Hiérarchisation cloud.</b> La stratégie d'espace libre du volume (ici 20 %) et, en option, une stratégie de date gardent localement les fichiers récents ; les autres deviennent des pointeurs rappelés à la demande.<b>Inscription.</b> Un serveur ne peut être inscrit qu'auprès d'un seul service de synchronisation de stockage à la fois.<b>Détection.</b> Les modifications faites directement dans le partage sont détectées par un travail qui s'exécute toutes les 24 heures ; Invoke-AzStorageSyncChangeDetection permet de la lancer immédiatement.",
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
    "*Organisation",
    "Un seul groupe de synchronisation pour les trois"
   ],
   [
    "FS-Nantes",
    "Hiérarchisation cloud, espace libre 20 %"
   ],
   [
    "FS-Lyon",
    "Le désinscrire de Sync-Test, puis l'inscrire"
   ],
   [
    "Fichiers copiés dans le portail",
    "Détectés sous 24 h, ou par détection manuelle"
   ]
  ]
 },
 "keep": "1 groupe = 1 point cloud + N serveurs. Petit disque = hiérarchisation. 1 serveur = 1 service. Modifs cloud = 24 h."
},
{
 "id": "D2-408",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte stlegal (GPv2, LRS, sans espace de noms hiérarchique) stocke des contrats. Après un incident où un script a écrasé et supprimé des blobs, la direction impose :</p><ul><li>pouvoir récupérer l'état exact du conteneur contracts tel qu'il était à n'importe quel moment des 14 derniers jours, en une seule opération ;</li><li>pouvoir récupérer un blob supprimé pendant 21 jours ;</li><li>les blobs du conteneur signed doivent être non modifiables et non supprimables pendant 7 ans, sans que personne, même un administrateur, puisse raccourcir ce délai ;</li><li>un dossier soumis à une procédure judiciaire doit être protégé sans date de fin, jusqu'à la clôture du dossier.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Restauration du conteneur à une date :",
   "o": [
    "Sauvegarde Azure Backup des partages de fichiers",
    "Restauration à un instant dans le passé",
    "Réplication d'objets vers un second compte",
    "Instantanés quotidiens de chaque blob"
   ],
   "a": 1
  },
  {
   "l": "Prérequis de la restauration :",
   "o": [
    "Version + flux + suppression réversible",
    "Suppression réversible des blobs, seule",
    "Passage du compte en GRS avec lecture secondaire",
    "Contrôle de version et index de blobs"
   ],
   "a": 0
  },
  {
   "l": "Rétention de la suppression réversible :",
   "o": [
    "14 jours",
    "21 jours",
    "7 jours",
    "13 jours"
   ],
   "a": 1
  },
  {
   "l": "Conteneur signed :",
   "o": [
    "Verrou CanNotDelete sur le compte",
    "Rétention limitée dans le temps, déverrouillée",
    "Conservation légale",
    "Rétention limitée dans le temps, verrouillée"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Restauration à un instant.</b> Elle restaure des objets blob de bloc à l'état d'une date donnée. Elle exige le contrôle de version, le flux de modifications et la suppression réversible des blobs ; sa période doit être inférieure à la rétention de la suppression réversible.<b>21 jours.</b> La rétention de la suppression réversible doit couvrir 21 jours, ce qui est aussi supérieur aux 14 jours de restauration.<b>Immuabilité.</b> Une stratégie limitée dans le temps verrouillée ne peut plus être raccourcie ni supprimée (seulement prolongée). La conservation légale, sans date de fin, convient au dossier judiciaire. Un verrou de ressource ne protège pas les données des blobs.",
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
    "*Restauration du conteneur à une date",
    "Restauration à un instant dans le passé"
   ],
   [
    "Prérequis de la restauration",
    "Version + flux + suppression réversible"
   ],
   [
    "Rétention de la suppression réversible",
    "21 jours"
   ],
   [
    "Conteneur signed",
    "Rétention limitée dans le temps, verrouillée"
   ]
  ]
 },
 "keep": "Restauration à un instant = version + flux + suppression réversible (plus longue). Non raccourcissable = stratégie verrouillée. Sans fin = conservation légale."
},
{
 "id": "D2-409",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso dispose de deux comptes : stsrc (GPv2, France Central, LRS) et stdst (GPv2, Canada Central, LRS). Les besoins :</p><ul><li>les blobs du conteneur media de stsrc doivent être copiés automatiquement et de façon asynchrone vers le conteneur media de stdst, uniquement les blobs dont le nom commence par video/ ;</li><li>le compte stweb (GPv2, RA-GRS, France Central) doit pouvoir être basculé vers la région secondaire par Contoso en cas de panne régionale ;</li><li>avant de basculer stweb, l'équipe veut savoir quelles écritures pourraient être perdues.</li></ul><p>Que devez-vous configurer, et que se passera-t-il ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Prérequis de la copie automatique :",
   "o": [
    "Suppression réversible activée sur stdst",
    "Versions (2 côtés) + flux source",
    "Passer stsrc en GRS et stdst en lecture seule",
    "Flux de modifications activé des deux côtés"
   ],
   "a": 1
  },
  {
   "l": "Filtre video/ :",
   "o": [
    "Des balises d'index de blobs sur stsrc",
    "Règle de cycle de vie appliquée sur stdst",
    "Filtre de préfixe de la règle",
    "Une étendue de chiffrement dédiée à video/"
   ],
   "a": 2
  },
  {
   "l": "Écritures à risque :",
   "o": [
    "Celles après « Heure de dernière synchronisation »",
    "Aucune : la réplication géographique est synchrone",
    "Toutes celles des 15 dernières minutes",
    "Seulement celles des blobs du niveau Archive"
   ],
   "a": 0
  },
  {
   "l": "Après le basculement non planifié :",
   "o": [
    "Il rebascule seul une fois la panne résolue",
    "Il reste RA-GRS, rôles inversés",
    "Il devient ZRS dans la région secondaire",
    "Il devient LRS dans la nouvelle région"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Réplication d'objets.</b> Elle copie de façon asynchrone les blobs de bloc entre comptes ; elle exige le contrôle de version sur la source et la destination et le flux de modifications sur la source. Les règles peuvent filtrer par préfixe.<b>Heure de dernière synchronisation.</b> La réplication géographique est asynchrone : les écritures postérieures à la Last Sync Time ne sont peut-être pas encore dans la région secondaire.<b>Après basculement.</b> La région secondaire devient la principale et le compte est configuré en LRS ; il faut reconfigurer la géoredondance, puis éventuellement rebasculer.",
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
    "*Prérequis de la copie automatique",
    "Versions (2 côtés) + flux source"
   ],
   [
    "Filtre video/",
    "Filtre de préfixe de la règle"
   ],
   [
    "Écritures à risque",
    "Celles après « Heure de dernière synchronisation »"
   ],
   [
    "Après le basculement non planifié",
    "Il devient LRS dans la nouvelle région"
   ]
  ]
 },
 "keep": "Réplication d'objets = versions des deux côtés + flux source. Perte = après Last Sync Time. Basculement = LRS."
},
{
 "id": "D2-410",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam doit transférer des données vers Azure Storage. Le tableau présente les besoins :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Transfert</th><th>Volume</th><th>Contexte</th></tr><tr><td>T1</td><td>40 To</td><td>Archives d'un datacenter ; liaison Internet de 50 Mbit/s ; délai d'un mois</td></tr><tr><td>T2</td><td>200 Go</td><td>Un dossier local qui change souvent ; seules les modifications doivent être copiées chaque nuit vers un conteneur, et les fichiers supprimés localement doivent l'être aussi dans le conteneur</td></tr><tr><td>T3</td><td>1 To</td><td>Copie d'un conteneur d'un compte vers un autre compte dans une autre région, sans transiter par un poste local</td></tr><tr><td>T4</td><td>Quelques fichiers</td><td>Un utilisateur non technique doit parcourir les conteneurs et télécharger des fichiers avec une interface graphique sous macOS</td></tr></table></div><p>Quel outil ou quelle commande devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "T1 :",
   "o": [
    "AzCopy depuis le datacenter",
    "Azure Data Box",
    "Azure Storage Explorer",
    "Azure File Sync"
   ],
   "a": 1
  },
  {
   "l": "T2 :",
   "o": [
    "azcopy copy --recursive --include-after=<date ISO 8601>",
    "azcopy remove --recursive puis azcopy copy",
    "azcopy sync --delete-destination=true",
    "azcopy copy --recursive --overwrite=ifSourceNewer"
   ],
   "a": 2
  },
  {
   "l": "T3 :",
   "o": [
    "Réplication géographique RA-GRS",
    "Azure Import/Export",
    "AzCopy copie de service à service",
    "Télécharger puis renvoyer avec AzCopy"
   ],
   "a": 2
  },
  {
   "l": "T4 :",
   "o": [
    "Azure Data Box Disk",
    "Azure Storage Explorer",
    "AzCopy",
    "Cloud Shell avec az storage"
   ],
   "a": 1
  }
 ],
 "expl": "<b>T1.</b> À 50 Mbit/s, 40 To prendraient plus de deux mois : le transfert hors connexion avec Data Box s'impose.<b>T2.</b> azcopy sync ne copie que ce qui a changé ; --delete-destination=true supprime dans la destination ce qui n'existe plus à la source.<b>T3.</b> AzCopy copie entre comptes en mode serveur à serveur : les données ne passent pas par la machine qui lance la commande.<b>T4.</b> Storage Explorer est l'application graphique multiplateforme (Windows, macOS, Linux) pour parcourir et transférer des données.",
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
    "*T1",
    "Azure Data Box"
   ],
   [
    "T2",
    "azcopy sync --delete-destination=true"
   ],
   [
    "T3",
    "AzCopy copie de service à service"
   ],
   [
    "T4",
    "Azure Storage Explorer"
   ]
  ]
 },
 "keep": "Gros volume, petit lien = Data Box. Miroir = sync --delete-destination. Compte à compte = serveur à serveur. Interface = Storage Explorer."
}
);
