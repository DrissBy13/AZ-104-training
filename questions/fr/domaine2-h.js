/* Domaine 2 : stockage (lot H : D2-411 à D2-420, scénarios longs) */
AZ.questions.push(
{
 "id": "D2-411",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso doit créer quatre comptes de stockage. Pour chacun, vous devez choisir le type de compte et les options de création adaptés :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Usage</th></tr><tr><td>st-profiles</td><td>Partages SMB pour des profils FSLogix d'Azure Virtual Desktop ; latence faible et IOPS élevées requises</td></tr><tr><td>st-lake</td><td>Analyse Spark avec renommage atomique de répertoires et ACL POSIX par dossier</td></tr><tr><td>st-partner</td><td>Un partenaire dépose des fichiers par SFTP avec une clé SSH, sans compte Entra ID</td></tr><tr><td>st-iotfast</td><td>Petits blobs écrits en très grand nombre, latence d'écriture minimale ; aucun besoin de fichiers SMB</td></tr></table></div><p>Quel type de compte ou quelle option devez-vous choisir ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "st-profiles :",
   "o": [
    "Standard GPv2, niveau chaud des partages",
    "Standard GPv2, partages optimisés pour les transactions",
    "Premium, objets blob de pages",
    "Premium, partages de fichiers"
   ],
   "a": 3
  },
  {
   "l": "st-lake :",
   "o": [
    "Espace de noms hiérarchique",
    "Contrôle de version des objets blob",
    "Index de blobs avec balises par dossier",
    "Flux de modifications et immuabilité"
   ],
   "a": 0
  },
  {
   "l": "st-partner :",
   "o": [
    "SAS de compte remis au partenaire par courriel",
    "SFTP sur un compte GPv2 sans option particulière",
    "Espace de noms hiérarchique + SFTP",
    "Azure Files avec le protocole NFS 4.1"
   ],
   "a": 2
  },
  {
   "l": "st-iotfast :",
   "o": [
    "Standard GPv2 avec RA-GZRS",
    "Premium, partages de fichiers",
    "Standard GPv2, niveau chaud",
    "Premium, objets blob de blocs"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Premium, partages de fichiers.</b> Le type FileStorage (SSD) est recommandé pour les profils FSLogix : latence faible et IOPS provisionnées.<b>Espace de noms hiérarchique.</b> Il fait du compte un Data Lake Storage : répertoires réels (renommage atomique) et ACL POSIX.<b>SFTP.</b> Il exige l'espace de noms hiérarchique ; l'accès se fait par des utilisateurs locaux du compte (clé SSH ou mot de passe), indépendants d'Entra ID.<b>Premium, objets blob de blocs.</b> Le type BlockBlobStorage (SSD) vise les charges à transactions nombreuses et faible latence.",
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
    "*st-profiles",
    "Premium, partages de fichiers"
   ],
   [
    "st-lake",
    "Espace de noms hiérarchique"
   ],
   [
    "st-partner",
    "Espace de noms hiérarchique + SFTP"
   ],
   [
    "st-iotfast",
    "Premium, objets blob de blocs"
   ]
  ]
 },
 "keep": "FSLogix = Premium fichiers. ACL POSIX = espace hiérarchique. SFTP = espace hiérarchique + utilisateur local. Latence blob = Premium blocs."
},
{
 "id": "D2-412",
 "dom": 2,
 "type": "hot",
 "stem": "<p>L'équipe conformité de Fabrikam impose de nouvelles règles de chiffrement sur les comptes de stockage :</p><ul><li>stcompta (existant) doit être chiffré avec une clé gérée par Fabrikam, stockée dans kv-crypto ; le compte doit accéder à la clé sans secret ;</li><li>lors de la configuration, le portail refuse kv-crypto : la protection requise du coffre n'est pas activée ;</li><li>stbank (à créer) doit avoir deux couches de chiffrement au repos, avec deux algorithmes et deux clés différentes ;</li><li>dans stshared (existant), le conteneur client-a doit être chiffré avec une clé propre au client A et le conteneur client-b avec la clé gérée par Microsoft, sans créer de second compte.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Accès de stcompta à la clé :",
   "o": [
    "Une clé d'accès du compte stockée dans kv-crypto",
    "Un SAS de compte avec la permission Lecture",
    "L'identité managée du compte de stockage",
    "Un principal de service avec un secret client"
   ],
   "a": 2
  },
  {
   "l": "Protection requise sur kv-crypto :",
   "o": [
    "Le pare-feu du coffre limité au compte stcompta",
    "Une stratégie d'accès du coffre en lecture seule",
    "Suppression réversible + protection contre le vidage",
    "Un verrou CanNotDelete posé sur le coffre"
   ],
   "a": 2
  },
  {
   "l": "stbank :",
   "o": [
    "Le chiffrement sur l'hôte du compte",
    "Le chiffrement double d'Azure Disk Encryption",
    "Une seconde clé ajoutée après la création",
    "Chiffrement d'infrastructure, à la création"
   ],
   "a": 3
  },
  {
   "l": "stshared :",
   "o": [
    "Une clé fournie par le client à chaque requête",
    "Étendues de chiffrement",
    "Deux comptes dans le même groupe de ressources",
    "Un jeu de chiffrement de disque par conteneur"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Clé gérée par le client.</b> Le compte utilise une identité managée (attribuée par le système ou l'utilisateur) qui reçoit le rôle Key Vault Crypto Service Encryption User (ou les autorisations get, wrapKey, unwrapKey).<b>Coffre.</b> La suppression réversible et la protection contre le vidage sont obligatoires pour un coffre qui protège des clés de chiffrement de stockage.<b>Chiffrement d'infrastructure.</b> Second chiffrement AES-256 au niveau de l'infrastructure, avec une autre clé ; il ne peut être activé qu'à la création du compte.<b>Étendues de chiffrement.</b> Elles permettent d'utiliser des clés différentes par conteneur ou par blob dans un même compte.",
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
    "*Accès de stcompta à la clé",
    "L'identité managée du compte de stockage"
   ],
   [
    "Protection requise sur kv-crypto",
    "Suppression réversible + protection contre le vidage"
   ],
   [
    "stbank",
    "Chiffrement d'infrastructure, à la création"
   ],
   [
    "stshared",
    "Étendues de chiffrement"
   ]
  ]
 },
 "keep": "CMK = identité managée + coffre avec purge protection. Double couche = infrastructure, à la création. Clé par conteneur = étendue de chiffrement."
},
{
 "id": "D2-413",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte stdocs (GPv2) héberge les conteneurs public-docs et internal-docs. Plusieurs demandes arrivent :</p><ul><li>Alice doit pouvoir lire les blobs d'internal-docs depuis le portail Azure avec son compte Entra ID, sans accès aux clés du compte et sans pouvoir écrire ;</li><li>quand Alice ouvre le conteneur dans le portail, le message « Vous n'avez pas les autorisations pour lister les données avec votre compte d'utilisateur Microsoft Entra » s'affiche, alors qu'elle a déjà un rôle de données sur le conteneur ;</li><li>Bob, administrateur, doit pouvoir gérer la configuration du compte (redondance, réseau), mais l'équipe sécurité veut qu'il ne puisse pas lire les données ;</li><li>l'équipe sécurité veut aussi qu'un avertissement apparaisse si les clés du compte n'ont pas été renouvelées depuis 90 jours.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Rôle de données d'Alice :",
   "o": [
    "Storage Blob Data Reader",
    "Storage Blob Data Contributor sur le conteneur",
    "Storage Account Contributor sur le compte",
    "Reader sur le groupe de ressources, seul"
   ],
   "a": 0
  },
  {
   "l": "Message d'erreur d'Alice :",
   "o": [
    "Activer l'accès anonyme sur internal-docs",
    "Attendre la synchronisation d'Entra Connect",
    "Lui attribuer Storage Account Key Operator",
    "Ajouter le rôle Reader sur le compte stdocs"
   ],
   "a": 3
  },
  {
   "l": "Bob, sans lecture des données :",
   "o": [
    "Owner sur le compte, avec une condition ABAC",
    "Contributor + clé partagée désactivée",
    "Storage Blob Data Owner sur le compte",
    "Storage Account Contributor, sans autre réglage"
   ],
   "a": 1
  },
  {
   "l": "Rappel de renouvellement des clés :",
   "o": [
    "Un verrou ReadOnly sur le compte",
    "Une stratégie d'expiration des clés du compte",
    "Rotation automatique par Key Vault toutes les 90 jours",
    "Une alerte de journal d'activité sur listKeys"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Rôle de données.</b> Storage Blob Data Reader donne la lecture des blobs via Entra ID, sans écriture.<b>Portail.</b> Pour parcourir le compte dans le portail, il faut aussi un rôle de gestion qui permet d'y accéder (Reader au minimum). Sans lui, le portail peut aussi tenter d'utiliser la clé du compte.<b>Bob.</b> Storage Account Contributor inclut l'action listKeys : avec une clé, Bob accède aux données. Désactiver l'autorisation par clé partagée retire ce chemin ; il reste sans rôle de données.<b>Expiration.</b> La stratégie d'expiration des clés (keyExpirationPeriodInDays) signale les clés qui n'ont pas été renouvelées dans le délai ; Azure Policy peut en faire un audit.",
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
    "*Rôle de données d'Alice",
    "Storage Blob Data Reader"
   ],
   [
    "Message d'erreur d'Alice",
    "Ajouter le rôle Reader sur le compte stdocs"
   ],
   [
    "Bob, sans lecture des données",
    "Contributor + clé partagée désactivée"
   ],
   [
    "Rappel de renouvellement des clés",
    "Une stratégie d'expiration des clés du compte"
   ]
  ]
 },
 "keep": "Lecture Entra = Blob Data Reader + Reader pour le portail. Contributor du compte = accès aux clés. 90 jours = stratégie d'expiration."
},
{
 "id": "D2-414",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le partage Azure Files share-compta (compte standard GPv2, niveau Optimisé pour les transactions) est utilisé par le service comptable. Les besoins :</p><ul><li>réduire le coût : les fichiers sont surtout stockés et peu consultés, avec quelques accès par semaine ;</li><li>un comptable a écrasé un fichier Excel hier ; il veut récupérer la version d'avant-hier lui-même, depuis l'Explorateur Windows, sans ouvrir de ticket ;</li><li>le partage complet a été supprimé par erreur il y a 3 jours par un script ;</li><li>la direction veut une sauvegarde gérée avec une rétention de 12 mois et des restaurations au niveau fichier, pilotée depuis un coffre.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Niveau du partage :",
   "o": [
    "Chaud (hot)",
    "Premium, après migration du partage",
    "Froid (cool)",
    "Optimisé pour les transactions, avec quota réduit"
   ],
   "a": 2
  },
  {
   "l": "Restauration par l'utilisateur :",
   "o": [
    "Le contrôle de version des objets blob",
    "La corbeille de Windows Server locale",
    "La restauration à un instant des objets blob",
    "Instantanés de partage (Versions précédentes)"
   ],
   "a": 3
  },
  {
   "l": "Partage supprimé :",
   "o": [
    "Restaurer depuis la région secondaire",
    "Restaurer depuis un instantané du partage",
    "Suppression réversible des partages",
    "Ouvrir un ticket au support Microsoft"
   ],
   "a": 2
  },
  {
   "l": "Sauvegarde gérée :",
   "o": [
    "Azure Site Recovery sur le compte",
    "Azure Backup (coffre Recovery Services)",
    "Une tâche AzCopy planifiée chaque nuit",
    "Réplication d'objets vers un autre compte"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Niveau froid.</b> Pour les partages standard, le niveau froid offre le stockage le moins cher avec des transactions plus coûteuses ; il convient aux données peu consultées.<b>Instantanés.</b> Les instantanés de partage apparaissent dans l'onglet Versions précédentes de Windows ; l'utilisateur restaure lui-même un fichier.<b>Suppression réversible.</b> Elle permet de restaurer un partage supprimé pendant la période de rétention. Les instantanés sont supprimés avec le partage s'il n'y a pas de suppression réversible.<b>Azure Backup.</b> La sauvegarde des partages Azure Files est gérée depuis un coffre Recovery Services, avec rétention longue et restauration de fichiers.",
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
    "*Niveau du partage",
    "Froid (cool)"
   ],
   [
    "Restauration par l'utilisateur",
    "Instantanés de partage (Versions précédentes)"
   ],
   [
    "Partage supprimé",
    "Suppression réversible des partages"
   ],
   [
    "Sauvegarde gérée",
    "Azure Backup (coffre Recovery Services)"
   ]
  ]
 },
 "keep": "Peu consulté = froid. Versions précédentes = instantanés. Partage supprimé = suppression réversible. Sauvegarde gérée = Azure Backup."
},
{
 "id": "D2-415",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam héberge plusieurs contenus dans le compte stweb (GPv2) :</p><ul><li>un site vitrine statique (HTML, CSS, JS) doit être servi directement depuis le compte, avec une page d'accueil et une page d'erreur personnalisées ;</li><li>le site doit être joignable en HTTPS sur www.fabrikam.com ;</li><li>une application JavaScript hébergée sur https://app.fabrikam.com appelle l'API Blob de stweb depuis le navigateur ; les appels échouent avec une erreur liée à l'origine ;</li><li>un service écrit en continu des lignes de journal à la fin de fichiers existants, sans jamais modifier les lignes précédentes ;</li><li>un ancien outil stocke des disques virtuels qui reçoivent des écritures aléatoires de 512 octets.</li></ul><p>Que devez-vous configurer ou utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Site statique :",
   "o": [
    "Une application App Service liée au compte",
    "Un partage Azure Files publié en HTTP",
    "Site web statique (conteneur $web)",
    "Un conteneur public avec accès anonyme Container"
   ],
   "a": 2
  },
  {
   "l": "HTTPS sur www.fabrikam.com :",
   "o": [
    "Un domaine personnalisé direct sur le compte",
    "Azure Front Door avec le domaine personnalisé",
    "Un enregistrement A vers l'adresse du compte",
    "Un certificat importé dans le compte de stockage"
   ],
   "a": 1
  },
  {
   "l": "Erreur d'origine :",
   "o": [
    "Un SAS de compte intégré au JavaScript",
    "Un point de terminaison privé pour l'application",
    "Une règle CORS sur le service Blob",
    "L'accès anonyme au niveau du compte"
   ],
   "a": 2
  },
  {
   "l": "Journaux, puis disques virtuels :",
   "o": [
    "Blocs, puis ajout",
    "Pages, puis blocs",
    "Ajout, puis blocs",
    "Ajout, puis pages"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Site web statique.</b> Il sert les fichiers du conteneur $web, avec un document d'index et un document d'erreur 404 configurables.<b>HTTPS personnalisé.</b> Le point de terminaison du site statique ne prend pas en charge HTTPS avec un domaine personnalisé seul : on place Azure Front Door (ou un CDN) devant, qui gère le certificat.<b>CORS.</b> Le navigateur bloque les appels d'une autre origine si le service Blob ne déclare pas une règle CORS qui autorise https://app.fabrikam.com.<b>Types de blob.</b> L'objet blob d'ajout est optimisé pour ajouter à la fin ; l'objet blob de pages (pages de 512 octets) est conçu pour les écritures aléatoires des disques virtuels.",
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
    "*Site statique",
    "Site web statique (conteneur $web)"
   ],
   [
    "HTTPS sur www.fabrikam.com",
    "Azure Front Door avec le domaine personnalisé"
   ],
   [
    "Erreur d'origine",
    "Une règle CORS sur le service Blob"
   ],
   [
    "Journaux, puis disques virtuels",
    "Ajout, puis pages"
   ]
  ]
 },
 "keep": "Site statique = $web. HTTPS + domaine = Front Door. Autre origine = CORS. Ajout = journaux, pages = disques."
},
{
 "id": "D2-416",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte stlake (GPv2, espace de noms hiérarchique activé) contient le conteneur raw avec l'arborescence /sales/2026/. Les droits actuels :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identité</th><th>RBAC</th><th>ACL</th></tr><tr><td>Groupe Analystes</td><td>Aucun rôle de données</td><td>r-x sur /sales/2026, aucune entrée sur /sales ni sur la racine</td></tr><tr><td>App-ETL (identité managée)</td><td>Storage Blob Data Owner sur le compte</td><td>Aucune</td></tr><tr><td>Groupe Finance</td><td>Storage Blob Data Reader sur le conteneur</td><td>Aucune</td></tr></table></div><p>Constats :</p><ul><li>les Analystes ne peuvent pas lister /sales/2026 ;</li><li>un administrateur a ajouté une ACL r-x pour les Analystes sur /sales/2025 ; les nouveaux dossiers créés ensuite sous /sales/2025 ne sont pas accessibles aux Analystes ;</li><li>l'équipe sécurité veut retirer à Finance la lecture d'un dossier précis avec une ACL refusant l'accès.</li></ul><p>Qu'est-ce qui est vrai ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour les Analystes sur /sales/2026 :",
   "o": [
    "Ajouter --x sur la racine et /sales",
    "Ajouter le rôle Reader sur le conteneur raw",
    "Ajouter rwx sur /sales/2026 uniquement",
    "Ajouter r-- sur la racine, récursivement"
   ],
   "a": 0
  },
  {
   "l": "Nouveaux dossiers sous /sales/2025 :",
   "o": [
    "Masque ACL réglé sur rwx",
    "Héritage RBAC, qui est automatique",
    "Rôle Storage Blob Data Reader sur le dossier",
    "ACL par défaut"
   ],
   "a": 3
  },
  {
   "l": "App-ETL :",
   "o": [
    "Accès complet, ACL ignorées",
    "Accès refusé par le masque",
    "Lecture seule par défaut",
    "Bloquée tant qu'aucune ACL n'existe"
   ],
   "a": 0
  },
  {
   "l": "ACL refusant l'accès à Finance :",
   "o": [
    "Inefficace : le RBAC est évalué avant",
    "Efficace si elle est posée sur le dossier visé",
    "Efficace avec un masque réglé sur ---",
    "Efficace si elle est appliquée récursivement"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Exécution.</b> Pour atteindre un dossier, il faut l'autorisation d'exécution (--x) sur chaque dossier parent, racine comprise.<b>ACL par défaut.</b> Les ACL d'accès ne s'appliquent qu'à l'élément ; les ACL par défaut d'un dossier sont copiées sur les nouveaux enfants. Elles ne modifient pas les enfants existants.<b>Ordre d'évaluation.</b> Le RBAC est évalué avant les ACL : si un rôle accorde l'accès, les ACL ne sont pas consultées. Storage Blob Data Owner est super-utilisateur ; Finance garde la lecture via son rôle, qu'aucune ACL ne peut retirer.",
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
    "*Pour les Analystes sur /sales/2026",
    "Ajouter --x sur la racine et /sales"
   ],
   [
    "Nouveaux dossiers sous /sales/2025",
    "ACL par défaut"
   ],
   [
    "App-ETL",
    "Accès complet, ACL ignorées"
   ],
   [
    "ACL refusant l'accès à Finance",
    "Inefficace : le RBAC est évalué avant"
   ]
  ]
 },
 "keep": "Parents = --x. Nouveaux enfants = ACL par défaut. RBAC d'abord : un rôle ne se retire pas par ACL."
},
{
 "id": "D2-417",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso réorganise ses comptes de stockage :</p><ul><li>stapp (GPv2, LRS, France Central) doit passer en ZRS sans interruption de l'application ; il contient uniquement des blobs chaud et froid ;</li><li>starch (GPv2, GRS, France Central) doit aussi passer en GZRS, mais il contient des blobs en niveau Archive ;</li><li>stold (GPv2, West Europe) doit être déplacé vers France Central ;</li><li>stproj doit changer de nom, pour devenir stprojets.</li></ul><p>Que pouvez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "stapp :",
   "o": [
    "Recréer le compte et copier avec AzCopy",
    "Passer en GRS, puis en ZRS",
    "Lancer une conversion vers ZRS",
    "Impossible pour un compte existant"
   ],
   "a": 2
  },
  {
   "l": "starch :",
   "o": [
    "Convertir directement, l'Archive reste en GRS",
    "Passer d'abord le compte en RA-GRS",
    "La conversion déplace seule les blobs archivés",
    "Réhydrater ou déplacer les blobs archivés d'abord"
   ],
   "a": 3
  },
  {
   "l": "stold :",
   "o": [
    "Changer la région dans les propriétés du compte",
    "Basculer le compte vers sa région associée",
    "Créer un compte cible et copier les données",
    "Déplacer la ressource vers France Central"
   ],
   "a": 2
  },
  {
   "l": "stproj :",
   "o": [
    "Le déplacer dans un nouveau groupe nommé stprojets",
    "Nouveau compte + copie",
    "Renommer le compte dans le portail",
    "Renommer avec Set-AzStorageAccount"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Conversion.</b> Le passage de LRS à ZRS peut se faire par une conversion lancée depuis le portail, l'interface CLI ou PowerShell, sans interruption.<b>Archive.</b> ZRS, GZRS et RA-GZRS ne prennent pas en charge le niveau Archive : les blobs archivés doivent être réhydratés (ou supprimés) avant la conversion.<b>Région.</b> Un compte de stockage ne se déplace pas vers une autre région : on crée un compte cible (par exemple à partir d'un modèle exporté) et on copie les données.<b>Nom.</b> Le nom d'un compte de stockage, globalement unique, ne peut pas être modifié.",
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
    "*stapp",
    "Lancer une conversion vers ZRS"
   ],
   [
    "starch",
    "Réhydrater ou déplacer les blobs archivés d'abord"
   ],
   [
    "stold",
    "Créer un compte cible et copier les données"
   ],
   [
    "stproj",
    "Nouveau compte + copie"
   ]
  ]
 },
 "keep": "LRS → ZRS = conversion. Archive = sortir avant ZRS/GZRS. Région ou nom = nouveau compte + copie."
},
{
 "id": "D2-418",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam utilise deux partages Azure Files :</p><ul><li>share-office (compte standard GPv2, SMB) est monté par les postes du siège, reliés à Azure par un VPN site à site vers VNet-Hub ; l'équipe réseau veut que le trafic SMB passe par le VPN et que le compte ne soit plus joignable par Internet ;</li><li>share-hpc doit être monté par des VM Linux de calcul avec le protocole NFS, avec des performances élevées.</li></ul><p>Après la création du partage NFS, le montage échoue depuis les VM, alors que les règles réseau autorisent le sous-réseau.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "share-office :",
   "o": [
    "Azure File Sync sur chaque poste du siège",
    "Point de terminaison de service sur le sous-réseau de passerelle",
    "Une règle IP pour l'adresse publique du siège",
    "Point de terminaison privé dans VNet-Hub"
   ],
   "a": 3
  },
  {
   "l": "Compte de share-hpc :",
   "o": [
    "Premium, partages de fichiers",
    "Standard GPv2, niveau chaud",
    "Premium, objets blob de blocs avec NFS",
    "Standard GPv2, espace de noms hiérarchique"
   ],
   "a": 0
  },
  {
   "l": "Authentification NFS :",
   "o": [
    "Clé du compte de stockage",
    "Microsoft Entra Kerberos",
    "Par le réseau",
    "SAS de service"
   ],
   "a": 2
  },
  {
   "l": "Échec du montage :",
   "o": [
    "Clé du compte absente de /etc/fstab",
    "Port 445 bloqué entre les VM et le compte",
    "Kerberos non configuré sur les VM",
    "« Transfert sécurisé requis » activé"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Point de terminaison privé.</b> Le partage obtient une adresse privée dans VNet-Hub, joignable par le VPN ; on désactive ensuite l'accès public (avec une résolution DNS adaptée côté siège).<b>NFS.</b> Les partages NFS d'Azure Files exigent un compte Premium FileStorage ; ils n'utilisent pas d'authentification par identité : l'accès est contrôlé par les règles réseau (point de terminaison privé ou de service).<b>Transfert sécurisé.</b> Historiquement, NFS 4.1 n'était pas chiffré en transit et le montage échouait si « Transfert sécurisé requis » était activé ; le chiffrement en transit pour NFS existe maintenant avec un utilitaire de montage dédié.",
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
    "*share-office",
    "Point de terminaison privé dans VNet-Hub"
   ],
   [
    "Compte de share-hpc",
    "Premium, partages de fichiers"
   ],
   [
    "Authentification NFS",
    "Par le réseau"
   ],
   [
    "Échec du montage",
    "« Transfert sécurisé requis » activé"
   ]
  ]
 },
 "keep": "SMB par VPN = point de terminaison privé. NFS = Premium, sécurité réseau. Montage NFS refusé = transfert sécurisé."
},
{
 "id": "D2-419",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte stmarket (GPv2) contient les conteneurs suivants. Le paramètre de compte « Autoriser l'accès anonyme aux objets blob » est actuellement activé.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Conteneur</th><th>Niveau d'accès</th><th>Besoin</th></tr><tr><td>catalog</td><td>Privé</td><td>Les visiteurs du site doivent télécharger une image dont ils connaissent l'URL, sans pouvoir lister le conteneur</td></tr><tr><td>press</td><td>Conteneur</td><td>Les journalistes doivent pouvoir lister et télécharger les fichiers anonymement</td></tr><tr><td>contracts</td><td>Objet blob</td><td>Aucun accès anonyme ne doit être possible</td></tr></table></div><p>Par ailleurs, l'équipe Data veut retrouver tous les blobs du compte marqués projet = alpha, quel que soit le conteneur, sans parcourir les noms.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "catalog :",
   "o": [
    "Conteneur",
    "Privé + accès anonyme désactivé",
    "Objet blob",
    "Privé, inchangé"
   ],
   "a": 2
  },
  {
   "l": "contracts :",
   "o": [
    "Objet blob, inchangé",
    "Objet blob, avec un SAS révoqué",
    "Conteneur, avec une stratégie stockée",
    "Privé"
   ],
   "a": 3
  },
  {
   "l": "Si l'accès anonyme était désactivé sur le compte :",
   "o": [
    "Plus aucun accès anonyme, pour aucun conteneur",
    "Aucun effet sur les conteneurs existants",
    "Seul catalog resterait accessible",
    "press resterait accessible anonymement"
   ],
   "a": 0
  },
  {
   "l": "Recherche projet = alpha :",
   "o": [
    "Balises d'index de blobs",
    "Métadonnées de blob",
    "Préfixes de noms de blob",
    "Étiquettes Azure sur le compte"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Niveaux d'accès.</b> Objet blob = lecture anonyme des blobs par URL, sans liste ; Conteneur = lecture et liste ; Privé = aucun accès anonyme.<b>Paramètre de compte.</b> Quand l'accès anonyme est désactivé sur le compte, il l'emporte sur le niveau d'accès de chaque conteneur : plus aucun accès anonyme n'est possible.<b>Balises d'index.</b> Les balises d'index de blobs sont indexées et interrogeables dans tout le compte (Find Blobs by Tags) ; les métadonnées ne sont pas indexées. Les étiquettes Azure portent sur les ressources, pas sur les blobs.",
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
    "*catalog",
    "Objet blob"
   ],
   [
    "contracts",
    "Privé"
   ],
   [
    "Si l'accès anonyme était désactivé sur le compte",
    "Plus aucun accès anonyme, pour aucun conteneur"
   ],
   [
    "Recherche projet = alpha",
    "Balises d'index de blobs"
   ]
  ]
 },
 "keep": "Blob = URL sans liste. Conteneur = liste. Le paramètre de compte l'emporte. Recherche = balises d'index."
},
{
 "id": "D2-420",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso doit ouvrir le compte stexchange (GPv2) à plusieurs partenaires :</p><ul><li>le partenaire Alpha dépose des fichiers par SFTP ; il doit n'avoir accès qu'au dossier alpha/ du conteneur inbound, qui doit être son dossier d'arrivée à la connexion ;</li><li>le partenaire Beta veut s'authentifier avec un mot de passe plutôt qu'une clé ;</li><li>un cluster de calcul Linux doit monter un conteneur de blobs comme un système de fichiers NFS 3.0 ;</li><li>la direction financière demande pourquoi la facture du compte a augmenté alors que le volume de données est stable, depuis l'activation de SFTP.</li></ul><p>Que devez-vous configurer, et qu'est-ce qui explique la hausse ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Partenaire Alpha :",
   "o": [
    "Utilisateur local, répertoire de base inbound/alpha",
    "Une ACL POSIX pour l'utilisateur Entra d'Alpha",
    "Un compte invité Entra ID avec un rôle de données",
    "Un SAS de service sur inbound/alpha"
   ],
   "a": 0
  },
  {
   "l": "Partenaire Beta :",
   "o": [
    "Utilisateur local avec mot de passe",
    "Authentification Entra ID par mot de passe",
    "Clé d'accès du compte comme mot de passe",
    "Impossible : SFTP n'accepte que les clés SSH"
   ],
   "a": 0
  },
  {
   "l": "Montage NFS 3.0 :",
   "o": [
    "BlobFuse avec une clé du compte",
    "Espace hiérarchique + NFS 3.0 + réseau",
    "Un partage Azure Files NFS dans le même compte",
    "Un SAS de conteneur passé au montage"
   ],
   "a": 1
  },
  {
   "l": "Hausse de la facture :",
   "o": [
    "SFTP impose la redondance GRS",
    "SFTP impose le niveau Premium",
    "SFTP double le volume stocké",
    "Le point de terminaison SFTP est facturé à l'heure"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Utilisateurs locaux.</b> SFTP s'appuie sur des utilisateurs locaux du compte, avec des autorisations par conteneur et un répertoire de base ; l'authentification se fait par clé SSH ou par mot de passe généré par Azure.<b>NFS 3.0 sur Blob.</b> Il exige l'espace de noms hiérarchique et l'activation de NFS 3.0 à la création du compte, avec un accès limité au réseau (point de terminaison privé ou de service) ; il n'y a pas d'authentification par identité.<b>Coût.</b> Le point de terminaison SFTP est facturé à l'heure tant qu'il est activé, en plus du stockage et des transactions : on peut le désactiver quand il ne sert pas.",
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
    "*Partenaire Alpha",
    "Utilisateur local, répertoire de base inbound/alpha"
   ],
   [
    "Partenaire Beta",
    "Utilisateur local avec mot de passe"
   ],
   [
    "Montage NFS 3.0",
    "Espace hiérarchique + NFS 3.0 + réseau"
   ],
   [
    "Hausse de la facture",
    "Le point de terminaison SFTP est facturé à l'heure"
   ]
  ]
 },
 "keep": "SFTP = utilisateurs locaux (clé ou mot de passe), facturé à l'heure. NFS 3.0 Blob = espace hiérarchique + réseau."
}
);
