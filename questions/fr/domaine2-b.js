/* Domaine 2 : stockage (lot B : D2-010 à D2-069) */
AZ.questions.push(
{
 "id": "D2-011",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type de compte de stockage adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de compte",
 "tgtHead": [
  "Besoin",
  "Type de compte"
 ],
 "srcs": [
  "Standard universel v2",
  "Premium objets blob de blocs",
  "Premium partages de fichiers",
  "Premium objets blob de pages"
 ],
 "tgts": [
  {
   "l": "Stocker des blobs, des files d'attente et des tables, avec les niveaux Chaud, Froid et Archive",
   "a": 0
  },
  {
   "l": "Écrire des millions de petits blobs avec une latence très faible (analyse IoT)",
   "a": 1
  },
  {
   "l": "Héberger un partage SMB très performant pour des bases de données SQL Server",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Standard universel v2</b> : le type par défaut. Il prend en charge tous les services (blobs, fichiers, files d'attente, tables) et les niveaux d'accès, Archive compris.</li><li><b>Premium objets blob de blocs</b> : SSD, faible latence, idéal pour beaucoup de transactions sur de petits objets. Pas de niveaux d'accès.</li><li><b>Premium partages de fichiers</b> : partages SMB ou NFS sur SSD.</li></ul>",
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
    "Performances : Standard",
    "Universel v2 (tous services, niveaux d'accès)"
   ],
   [
    "*Performances : Premium",
    "Objets blob de blocs · Partages de fichiers · Objets blob de pages"
   ]
  ]
 },
 "keep": "Standard v2 = tout + niveaux. Premium blocs = petits blobs rapides. Premium fichiers = SMB/NFS SSD."
},
{
 "id": "D2-013",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'option de redondance adaptée à chaque exigence. Chaque solution doit être la moins chère possible.</p><p>Pour répondre, faites glisser la redondance appropriée vers chaque exigence. Chaque redondance peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Redondances",
 "tgtHead": [
  "Exigence",
  "Redondance"
 ],
 "srcs": [
  "LRS",
  "ZRS",
  "GRS",
  "RA-GRS",
  "GZRS"
 ],
 "tgts": [
  {
   "l": "Résister à la panne d'un centre de données, sans copie dans une autre région",
   "a": 1
  },
  {
   "l": "Lire les données dans la région secondaire même sans basculement",
   "a": 3
  },
  {
   "l": "Données de test faciles à recréer",
   "a": 0
  },
  {
   "l": "Résister à la panne d'une zone et à celle d'une région entière",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>LRS</b> : 3 copies dans un seul centre de données. Le moins cher.</li><li><b>ZRS</b> : 3 copies dans 3 zones de disponibilité de la région : résiste à la perte d'une zone (d'un centre de données).</li><li><b>GRS</b> : LRS + copie asynchrone dans la région jumelée. La secondaire n'est lisible qu'après basculement.</li><li><b>RA-GRS</b> : GRS avec <b>accès en lecture</b> à la secondaire en permanence.</li><li><b>GZRS</b> : ZRS dans la région primaire + copie dans la région jumelée.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Redondance",
  "menu": [
   "Vue d'ensemble",
   "*Redondance"
  ],
  "rows": [
   [
    "LRS",
    "3 copies, 1 centre"
   ],
   [
    "ZRS",
    "3 zones"
   ],
   [
    "GRS / RA-GRS",
    "+ région jumelée (RA = lecture)"
   ],
   [
    "*GZRS",
    "3 zones + région jumelée"
   ]
  ]
 },
 "keep": "Moins cher qui répond : LRS < ZRS < GRS < RA-GRS ≈ GZRS < RA-GZRS."
},
{
 "id": "D2-014",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Le compte de stockage storage2 utilise la redondance <b>RA-GRS</b> en France Central.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Les données sont copiées de façon synchrone dans la région secondaire.",
   "a": 1
  },
  {
   "l": "Une application peut lire les blobs via le point de terminaison storage2-secondary.blob.core.windows.net.",
   "a": 0
  },
  {
   "l": "La propriété Heure de dernière synchronisation indique jusqu'à quand la secondaire est à jour.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Synchrone : Non.</b> La copie vers la région secondaire est <b>asynchrone</b> : les dernières écritures peuvent manquer en cas de sinistre. Dans la région primaire, les 3 copies LRS sont synchrones.</li><li><b>Point de terminaison secondaire : Oui.</b> Avec RA-GRS, on lit à l'adresse <code>&lt;compte&gt;-secondary</code>.</li><li><b>Heure de dernière synchronisation : Oui.</b> Toutes les écritures antérieures sont disponibles dans la secondaire.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage2"
  ],
  "title": "storage2 | Redondance",
  "menu": [
   "Vue d'ensemble",
   "*Redondance"
  ],
  "rows": [
   [
    "Redondance",
    "RA-GRS"
   ],
   [
    "*Point de terminaison secondaire",
    "storage2-secondary.blob.core.windows.net"
   ],
   [
    "*Heure de dernière synchronisation",
    "2026-10-27 09:42 UTC"
   ]
  ]
 },
 "keep": "Copie vers la secondaire asynchrone ; Heure de dernière synchronisation = point de cohérence."
},
{
 "id": "D2-019",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous gérez les niveaux d'accès des blobs.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Durée minimale de stockage facturée au niveau Froid (Cool) :",
   "o": [
    "30 jours",
    "90 jours",
    "180 jours"
   ],
   "a": 0
  },
  {
   "l": "Durée minimale de stockage facturée au niveau Très froid (Cold) :",
   "o": [
    "30 jours",
    "90 jours",
    "180 jours"
   ],
   "a": 1
  },
  {
   "l": "Durée minimale de stockage facturée au niveau Archive :",
   "o": [
    "30 jours",
    "90 jours",
    "180 jours"
   ],
   "a": 2
  }
 ],
 "expl": "<p>Si un blob quitte un niveau (suppression ou changement de niveau) avant la durée minimale, des frais de suppression anticipée sont facturés au prorata des jours restants.</p><ul><li><b>Froid : 30 jours.</b></li><li><b>Très froid : 90 jours.</b></li><li><b>Archive : 180 jours.</b></li></ul><p>Le niveau Chaud n'a pas de durée minimale.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs"
  ],
  "title": "Niveaux d'accès",
  "rows": [
   [
    "Chaud",
    "Pas de minimum"
   ],
   [
    "*Froid (Cool)",
    "30 jours"
   ],
   [
    "*Très froid (Cold)",
    "90 jours"
   ],
   [
    "*Archive",
    "180 jours"
   ]
  ]
 },
 "keep": "30 / 90 / 180 jours : à connaître par cœur."
},
{
 "id": "D2-024",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous devez pouvoir récupérer les blobs <b>écrasés</b> ou <b>supprimés</b> par erreur dans storage5 au cours des 30 derniers jours.</p><p>Pour chacune des fonctionnalités suivantes, sélectionnez Oui si elle fait partie de la solution. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Suppression réversible des blobs (30 jours)",
   "a": 0
  },
  {
   "l": "Stratégie d'immuabilité avec conservation légale",
   "a": 1
  },
  {
   "l": "Contrôle de version des blobs du compte",
   "a": 0
  },
  {
   "l": "Réplication d'objets vers un second compte",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Contrôle de version : oui.</b> Chaque écrasement conserve la version précédente : on peut la restaurer.</li><li><b>Suppression réversible des blobs : oui.</b> Un blob supprimé est conservé 30 jours et peut être restauré.</li><li><b>Conservation légale : non.</b> Elle empêche toute modification, ce qui bloquerait l'activité normale.</li><li><b>Réplication d'objets : non.</b> Elle copie vers un autre compte, et une suppression se répliquerait aussi.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage5"
  ],
  "title": "storage5 | Protection des données",
  "menu": [
   "*Protection des données"
  ],
  "rows": [
   [
    "*Suppression réversible des objets blob",
    "30 jours"
   ],
   [
    "*Contrôle de version des objets blob",
    "Activé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Écrasé = versions ; supprimé = suppression réversible."
},
{
 "id": "D2-029",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez copier automatiquement les nouveaux blobs du conteneur src du compte storageA (France Central) vers le conteneur dst du compte storageB (West Europe).</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>La <b>réplication d'objets</b> exige le <b>contrôle de version</b> sur les deux comptes et le <b>flux de modification</b> sur le compte source. On crée ensuite la stratégie avec les paires de conteneurs.</p><p>L'espace de noms hiérarchique n'est <b>pas</b> pris en charge par la réplication d'objets. RA-GRS copie vers la région jumelée, sans choix du compte cible.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storageA"
  ],
  "title": "storageA | Réplication d'objets",
  "menu": [
   "*Réplication d'objets"
  ],
  "rows": [
   [
    "Compte de destination",
    "storageB"
   ],
   [
    "*Paire de conteneurs",
    "src → dst"
   ]
  ],
  "btn": "Créer des règles de réplication"
 },
 "keep": "Réplication d'objets : versions (2 comptes), flux (source), pas d'espace de noms hiérarchique.",
 "acts": [
  "Activer le contrôle de version sur storageA et storageB",
  "Activer le flux de modification sur storageA",
  "Créer la stratégie de réplication d'objets de src vers dst",
  "Activer l'espace de noms hiérarchique sur storageB",
  "Configurer storageA en RA-GRS"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D2-031",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type de signature d'accès partagé (SAS) adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de SAS",
 "tgtHead": [
  "Besoin",
  "Type de SAS"
 ],
 "srcs": [
  "SAS de délégation d'utilisateur",
  "SAS de service",
  "SAS de compte"
 ],
 "tgts": [
  {
   "l": "Signer la SAS avec des informations d'identification Microsoft Entra plutôt qu'avec une clé du compte",
   "a": 0
  },
  {
   "l": "Donner accès à la fois aux blobs, aux files d'attente et aux tables du compte",
   "a": 2
  },
  {
   "l": "Donner accès à un seul partage de fichiers, en l'associant à une stratégie d'accès stockée",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Délégation d'utilisateur</b> : signée avec une clé obtenue par une identité Microsoft Entra. C'est le type recommandé. Il ne fonctionne qu'avec le stockage <b>blob</b> (et Data Lake).</li><li><b>Compte</b> : signée avec une clé du compte ; peut couvrir plusieurs services et des opérations au niveau du service.</li><li><b>Service</b> : signée avec une clé du compte ; limitée à un service (blob, fichier, file d'attente ou table). Elle peut s'appuyer sur une <b>stratégie d'accès stockée</b>.</li></ul>",
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
    "*Méthode de signature",
    "Clé de délégation d'utilisateur (Entra)"
   ],
   [
    "Autre choix",
    "Clé de compte"
   ]
  ]
 },
 "keep": "Délégation d'utilisateur = Entra, blobs uniquement, recommandée. Service = un service. Compte = plusieurs services."
},
{
 "id": "D2-034",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous examinez l'URL de SAS suivante :</p><pre>https://storage7.blob.core.windows.net/rapports/q3.pdf?sv=2022-11-02&amp;sr=b&amp;sp=r&amp;st=2026-10-01T08:00Z&amp;se=2026-10-01T18:00Z&amp;sip=203.0.113.10&amp;spr=https&amp;sig=...</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "La SAS permet :",
   "o": [
    "de lire et écrire dans le conteneur rapports",
    "de lire q3.pdf uniquement",
    "de lire tous les blobs du compte"
   ],
   "a": 1
  },
  {
   "l": "Un utilisateur dont l'adresse IP publique est 198.51.100.5 peut l'utiliser :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "La SAS est utilisable avec http:// :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><code>sr=b</code> : la ressource est un <b>blob</b> (q3.pdf). <code>sp=r</code> : lecture seule.</li><li><code>sip=203.0.113.10</code> : seule cette adresse IP est autorisée. 198.51.100.5 est refusée.</li><li><code>spr=https</code> : HTTPS uniquement.</li></ul><p><code>st</code> et <code>se</code> sont le début et la fin de validité, ici de 8 h à 18 h (UTC).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage7",
   "Conteneurs",
   "rapports",
   "q3.pdf"
  ],
  "title": "Générer une SAS",
  "rows": [
   [
    "sr=b · sp=r",
    "Blob q3.pdf, lecture"
   ],
   [
    "*sip",
    "203.0.113.10"
   ],
   [
    "*spr",
    "https"
   ]
  ]
 },
 "keep": "sr ressource, sp autorisations, st/se dates, sip IP, spr protocole."
},
{
 "id": "D2-039",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Le pare-feu de storage12 est réglé sur « Activé à partir des réseaux virtuels et adresses IP sélectionnés ». Seul Subnet1 de VNet1 est autorisé, par un point de terminaison de service.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une VM de Subnet2 (VNet1, sans point de terminaison de service) peut accéder aux blobs.",
   "a": 1
  },
  {
   "l": "Un administrateur peut parcourir les blobs depuis le portail Azure, sur son poste à domicile.",
   "a": 1
  },
  {
   "l": "Vous pouvez ajouter l'adresse IP publique du bureau dans le pare-feu pour l'autoriser.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Subnet2 : Non.</b> Seul Subnet1 est autorisé.</li><li><b>Portail à domicile : Non.</b> Le navigateur accède aux données depuis l'adresse IP du poste, qui n'est pas autorisée. (Le portail affiche alors une erreur d'autorisation réseau.)</li><li><b>Adresse IP du bureau : Oui.</b> Les règles d'adresses IP publiques (ou de plages CIDR) sont prévues pour cela.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage12"
  ],
  "title": "storage12 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "Réseaux virtuels",
    "VNet1 / Subnet1"
   ],
   [
    "*Pare-feu · Plage d'adresses",
    "Adresse IP publique du bureau"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Le portail lit les données depuis votre IP : elle doit être autorisée."
},
{
 "id": "D2-042",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous configurez des clés gérées par le client pour storage15, avec le coffre de clés KV1.</p><p>Pour chacune des conditions suivantes, sélectionnez Oui si elle est requise. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "storage15 doit utiliser la redondance GRS ou GZRS",
   "a": 1
  },
  {
   "l": "L'identité de storage15 doit pouvoir utiliser la clé",
   "a": 0
  },
  {
   "l": "KV1 doit être dans un autre abonnement que storage15",
   "a": 1
  },
  {
   "l": "KV1 doit avoir la protection contre le vidage",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Suppression réversible et protection contre le vidage : oui.</b> Elles empêchent la perte définitive de la clé, qui rendrait les données illisibles.</li><li><b>Accès de l'identité managée : oui</b>, par exemple avec le rôle Utilisateur du service de chiffrement Key Vault.</li><li>Le coffre peut être dans le même abonnement, et la redondance n'a pas d'importance.</li></ul>",
 "portal": {
  "path": [
   "Coffres de clés",
   "KV1"
  ],
  "title": "KV1 | Propriétés",
  "menu": [
   "*Propriétés"
  ],
  "rows": [
   [
    "*Suppression réversible",
    "Activée"
   ],
   [
    "*Protection contre le vidage",
    "Activée"
   ]
  ]
 },
 "keep": "CMK : coffre avec suppression réversible + protection contre le vidage, identité du compte autorisée."
},
{
 "id": "D2-046",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le niveau de partage Azure Files adapté à chaque usage, dans un compte Standard universel v2 ou Premium.</p><p>Pour répondre, faites glisser le niveau approprié vers chaque usage. Chaque niveau peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Niveaux",
 "tgtHead": [
  "Usage",
  "Niveau"
 ],
 "srcs": [
  "Premium",
  "Optimisé pour les transactions",
  "Chaud",
  "Froid (Cool)"
 ],
 "tgts": [
  {
   "l": "Base de données sur partage SMB avec latence de quelques millisecondes",
   "a": 0
  },
  {
   "l": "Application qui fait énormément de transactions, sans besoin de latence très faible",
   "a": 1
  },
  {
   "l": "Partage de fichiers d'équipe utilisé au quotidien",
   "a": 2
  },
  {
   "l": "Archives en ligne rarement consultées, synchronisées par Azure File Sync",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Premium</b> : SSD, faible latence, compte FileStorage.</li><li><b>Optimisé pour les transactions</b> : HDD, transactions les moins chères, stockage plus cher.</li><li><b>Chaud</b> : usage général, partages d'équipe.</li><li><b>Froid</b> : stockage le moins cher, transactions plus chères ; adapté à l'archivage en ligne.</li></ul><p>Les trois derniers niveaux sont dans un compte Standard universel v2, et on peut changer de niveau sans recréer le partage.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers"
  ],
  "title": "Nouveau partage de fichiers",
  "rows": [
   [
    "*Niveau d'accès",
    "Optimisé pour les transactions · Chaud · Froid"
   ],
   [
    "Premium",
    "Compte FileStorage"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Premium = SSD. Transactions / Chaud / Froid = Standard, changeables à chaud."
},
{
 "id": "D2-050",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Les utilisateurs accèdent au partage share5 avec leur identité AD DS. Vous devez attribuer les permissions au niveau du partage, en respectant le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "tgtHead": [
  "Besoin",
  "Rôle"
 ],
 "srcs": [
  "Lecteur de partage SMB de données de fichier de stockage",
  "Contributeur de partage SMB de données de fichier de stockage",
  "Contributeur élevé de partage SMB de données de fichier de stockage",
  "Contributeur de compte de stockage"
 ],
 "tgts": [
  {
   "l": "Les comptables lisent les fichiers",
   "a": 0
  },
  {
   "l": "Les gestionnaires créent, modifient et suppriment des fichiers",
   "a": 1
  },
  {
   "l": "Les administrateurs modifient les listes de contrôle d'accès NTFS",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Lecteur de partage SMB</b> : lecture.</li><li><b>Contributeur de partage SMB</b> : lecture, écriture et suppression.</li><li><b>Contributeur élevé de partage SMB</b> : en plus, modification des ACL NTFS.</li></ul><p><b>Contributeur de compte de stockage</b> gère le compte (plan de contrôle), pas les données du partage avec l'identité de l'utilisateur.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers",
   "share5"
  ],
  "title": "share5 | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "Lecteur de partage SMB",
    "Comptables"
   ],
   [
    "Contributeur de partage SMB",
    "Gestionnaires"
   ],
   [
    "*Contributeur élevé de partage SMB",
    "Administrateurs (ACL)"
   ]
  ]
 },
 "keep": "Lecteur / Contributeur / Contributeur élevé (ACL NTFS) de partage SMB."
},
{
 "id": "D2-052",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez synchroniser le dossier D:\\Donnees du serveur de fichiers FS1 avec le partage Azure share6, en gardant les fichiers peu utilisés uniquement dans Azure.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>On crée le <b>service de synchronisation de stockage</b> (ressource Azure), on installe l'<b>agent</b> sur FS1 et on l'inscrit auprès de ce service, on crée un <b>groupe de synchronisation</b> avec le partage comme point de terminaison cloud, puis on ajoute le <b>point de terminaison serveur</b> (chemin local) avec la <b>hiérarchisation cloud</b>.</p><p>Aucun point de terminaison privé n'est nécessaire. DFS-R n'est pas utilisé par Azure File Sync.</p>",
 "portal": {
  "path": [
   "Services de synchronisation de stockage",
   "Sync1",
   "Groupes de synchronisation"
  ],
  "title": "Groupe-Donnees",
  "rows": [
   [
    "Point de terminaison cloud",
    "share6"
   ],
   [
    "*Point de terminaison serveur",
    "FS1 · D:\\Donnees · hiérarchisation cloud activée"
   ]
  ],
  "btn": "+ Ajouter un point de terminaison serveur"
 },
 "keep": "File Sync : service, agent + inscription, groupe (1 partage), point de terminaison serveur.",
 "acts": [
  "Déployer un service de synchronisation de stockage",
  "Installer l'agent Azure File Sync sur FS1 et inscrire le serveur",
  "Créer un groupe de synchronisation avec share6 comme point de terminaison cloud",
  "Ajouter D:\\Donnees comme point de terminaison serveur, avec la hiérarchisation cloud activée",
  "Créer un point de terminaison privé pour FS1",
  "Installer le rôle DFS Replication sur FS1"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D2-053",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous déployez Azure File Sync avec le service de synchronisation de stockage Sync1.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un groupe de synchronisation peut contenir plusieurs points de terminaison cloud.",
   "a": 1
  },
  {
   "l": "Un groupe de synchronisation peut contenir des points de terminaison serveur sur plusieurs serveurs.",
   "a": 0
  },
  {
   "l": "Un serveur inscrit auprès de Sync1 peut aussi être inscrit auprès d'un second service de synchronisation.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Plusieurs points de terminaison cloud : Non.</b> Un groupe de synchronisation a <b>un seul</b> point de terminaison cloud (un partage Azure).</li><li><b>Plusieurs serveurs : Oui.</b> C'est ainsi qu'on synchronise plusieurs sites autour du même partage.</li><li><b>Deux services : Non.</b> Un serveur ne peut être inscrit qu'auprès d'<b>un seul</b> service de synchronisation de stockage à la fois.</li></ul>",
 "portal": {
  "path": [
   "Services de synchronisation de stockage",
   "Sync1"
  ],
  "title": "Sync1 | Groupes de synchronisation",
  "menu": [
   "*Groupes de synchronisation",
   "Serveurs inscrits"
  ],
  "rows": [
   [
    "Point de terminaison cloud",
    "1 seul"
   ],
   [
    "*Points de terminaison serveur",
    "Plusieurs serveurs possibles"
   ]
  ]
 },
 "keep": "1 groupe = 1 partage + N serveurs ; 1 serveur = 1 seul service de synchronisation."
},
{
 "id": "D2-055",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez copier tout le contenu du dossier local C:\\Exports, sous-dossiers compris, vers le conteneur exports de storage19, avec AzCopy et une SAS.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Commande",
   "o": [
    "copy",
    "make",
    "remove"
   ],
   "a": 0
  },
  {
   "l": "Service",
   "o": [
    "blob",
    "file",
    "dfs-share"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "--recursive",
    "--include-subfolders",
    "--all"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>azcopy copy \"C:\\Exports\" \"https://storage19.blob.core.windows.net/exports?&lt;SAS&gt;\" --recursive</code>.</p><ul><li><b>copy</b> copie ; <b>make</b> crée un conteneur ou un partage ; <b>remove</b> supprime.</li><li>Un conteneur est dans le service <b>blob</b>. (L'adresse d'Azure Files serait <code>file.core.windows.net</code>.)</li><li><b>--recursive</b> inclut les sous-dossiers. Les deux autres options n'existent pas.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage19",
   "Conteneurs",
   "exports"
  ],
  "title": "exports | Vue d'ensemble",
  "rows": [
   [
    "*URL",
    "https://storage19.blob.core.windows.net/exports"
   ],
   [
    "Commande",
    "azcopy copy … --recursive"
   ]
  ]
 },
 "keep": "AzCopy : copy / sync / make / remove ; --recursive pour les sous-dossiers.",
 "tpl": "azcopy {0} \"C:\\Exports\" \"https://storage19.{1}.core.windows.net/exports?&lt;SAS&gt;\" {2}"
},
{
 "id": "D2-065",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous devez indiquer le type de blob adapté à chaque usage.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Fichiers journaux auxquels on ajoute des lignes en continu :",
   "o": [
    "Blob d'ajout",
    "Blob de pages",
    "Blob de blocs"
   ],
   "a": 0
  },
  {
   "l": "Images, vidéos et documents :",
   "o": [
    "Blob de blocs",
    "Blob d'ajout",
    "Blob de pages"
   ],
   "a": 0
  },
  {
   "l": "Fichiers VHD utilisés comme disques à accès aléatoire :",
   "o": [
    "Blob d'ajout",
    "Blob de pages",
    "Blob de blocs"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Blob d'ajout</b> : optimisé pour ajouter des données à la fin, sans modifier l'existant. Idéal pour la journalisation.</li><li><b>Blob de blocs</b> : le type général pour les fichiers (jusqu'à environ 190 Tio). Seul type qui prend en charge les niveaux d'accès.</li><li><b>Blob de pages</b> : pages de 512 octets en lecture-écriture aléatoire, utilisées pour les VHD.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "data"
  ],
  "title": "Charger un objet blob › Avancé",
  "rows": [
   [
    "*Type d'objet blob",
    "Blob de blocs · Blob d'ajout · Blob de pages"
   ]
  ],
  "btn": "Charger"
 },
 "keep": "Journaux = ajout. Fichiers = blocs. VHD = pages."
},
{
 "id": "D2-066",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous créez le compte de stockage storage21. Il doit résister à la panne d'une zone de disponibilité et à celle de la région, sans lecture de la région secondaire. Il ne doit accepter que HTTPS et TLS 1.2 minimum.</p><p>Comment devez-vous configurer le compte ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Standard</b> : seul niveau qui propose la géoredondance.</li><li><b>GZRS</b> : ZRS dans la région primaire (panne d'une zone) + copie dans la région jumelée (panne de la région), sans lecture secondaire. RA-GZRS ajouterait la lecture.</li><li><b>Transfert sécurisé</b> : refuse HTTP.</li><li><b>TLS 1.2</b> : refuse les versions plus anciennes.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Créer un compte de stockage",
  "menu": [
   "Informations de base",
   "*Avancé"
  ],
  "rows": [
   [
    "Performances",
    "Standard"
   ],
   [
    "*Redondance",
    "GZRS"
   ],
   [
    "*Exiger un transfert sécurisé",
    "Coché"
   ],
   [
    "*Version TLS minimale",
    "1.2"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Zone + région sans lecture secondaire = GZRS ; HTTPS = transfert sécurisé.",
 "win": {
  "title": "Créer un compte de stockage",
  "sub": "Stockage",
  "rows": [
   {
    "k": "head",
    "t": "Informations de base"
   },
   {
    "k": "text",
    "l": "Nom du compte",
    "t": "storage21"
   },
   {
    "k": "select",
    "l": "Performances",
    "o": [
     "Standard",
     "Premium"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Redondance",
    "o": [
     "LRS",
     "ZRS",
     "GRS",
     "GZRS",
     "RA-GZRS"
    ],
    "d": 2,
    "a": 3
   },
   {
    "k": "head",
    "t": "Avancé"
   },
   {
    "k": "check",
    "l": "Exiger un transfert sécurisé pour les opérations d'API REST",
    "d": true,
    "a": true
   },
   {
    "k": "select",
    "l": "Version TLS minimale",
    "o": [
     "Version 1.0",
     "Version 1.1",
     "Version 1.2"
    ],
    "d": 2,
    "a": 2
   }
  ]
 }
},
{
 "id": "D2-067",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous configurez la protection des données de storage22 : les blobs supprimés doivent être récupérables pendant 14 jours, les conteneurs supprimés pendant 7 jours, et les versions précédentes des blobs écrasés doivent être conservées. La restauration à un point dans le temps n'est pas demandée.</p><p>Comment devez-vous configurer la page ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Suppression réversible des blobs : 14 jours.</b></li><li><b>Suppression réversible des conteneurs : 7 jours.</b></li><li><b>Contrôle de version</b> : conserve les versions précédentes en cas d'écrasement.</li><li>La restauration à un point dans le temps n'est pas demandée. Le flux de modification n'est pas noté ici : il n'est utile que pour la restauration à un point dans le temps, la réplication d'objets ou l'audit des changements.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage22"
  ],
  "title": "storage22 | Protection des données",
  "menu": [
   "*Protection des données"
  ],
  "rows": [
   [
    "*Suppression réversible des objets blob",
    "14 jours"
   ],
   [
    "*Suppression réversible des conteneurs",
    "7 jours"
   ],
   [
    "*Contrôle de version",
    "Activé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Trois protections indépendantes : blobs, conteneurs, versions.",
 "win": {
  "title": "Protection des données",
  "sub": "storage22",
  "rows": [
   {
    "k": "head",
    "t": "Récupération"
   },
   {
    "k": "check",
    "l": "Activer la restauration à un point dans le temps pour les conteneurs",
    "a": false
   },
   {
    "k": "check",
    "l": "Activer la suppression réversible pour les objets blob",
    "a": true
   },
   {
    "k": "select",
    "l": "Jours de conservation des objets blob supprimés",
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
    "a": true
   },
   {
    "k": "select",
    "l": "Jours de conservation des conteneurs supprimés",
    "o": [
     "7",
     "14",
     "30"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Suivi"
   },
   {
    "k": "check",
    "l": "Activer le contrôle de version pour les objets blob",
    "a": true
   },
   {
    "k": "check",
    "l": "Activer le flux de modification des objets blob",
    "a": null
   }
  ]
 }
},
{
 "id": "D2-068",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez régénérer key2 du compte de stockage storage23.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Clés d'accès",
 "expl": "<p><b>Clés d'accès</b> affiche key1 et key2 avec leurs chaînes de connexion, et propose de les <b>faire pivoter</b> (régénérer). On peut aussi y définir un rappel de rotation.</p><p><b>Signature d'accès partagé</b> génère des SAS de compte ; <b>Chiffrement</b> gère les clés de chiffrement des données, pas les clés d'accès.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage23"
  ],
  "title": "storage23 | Clés d'accès",
  "menu": [
   "Mise en réseau",
   "*Clés d'accès",
   "Signature d'accès partagé"
  ],
  "rows": [
   [
    "key2",
    "Faire pivoter la clé"
   ]
  ],
  "btn": "Faire pivoter la clé"
 },
 "keep": "Clés d'accès = key1/key2, rotation et rappel.",
 "win": {
  "title": "storage23 | Compte de stockage",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité",
     "Contrôle d'accès (IAM)",
     "Navigateur de stockage"
    ]
   },
   {
    "g": "Sécurité + mise en réseau",
    "items": [
     "Mise en réseau",
     "Clés d'accès",
     "Signature d'accès partagé",
     "Chiffrement",
     "Microsoft Defender pour le cloud"
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
   }
  ]
 }
},
{
 "id": "D2-069",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez configurer storage24 pour que les blobs passent automatiquement au niveau Archive après 180 jours sans modification.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Gestion du cycle de vie",
 "expl": "<p><b>Gestion du cycle de vie</b> contient les règles de déplacement entre niveaux et de suppression. Une règle « Date de dernière modification &gt; 180 jours → Déplacer vers le stockage archive » répond au besoin.</p><p><b>Protection des données</b> gère la suppression réversible et le contrôle de version. <b>Inventaire des objets blob</b> produit des rapports sur le contenu.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage24"
  ],
  "title": "storage24 | Gestion du cycle de vie",
  "menu": [
   "Protection des données",
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "*Si",
    "Modifié il y a plus de 180 jours"
   ],
   [
    "*Alors",
    "Déplacer vers le stockage archive"
   ]
  ],
  "btn": "Ajouter une règle"
 },
 "keep": "Changement de niveau automatique = Gestion du cycle de vie.",
 "win": {
  "title": "storage24 | Compte de stockage",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité",
     "Étiquettes"
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
     "Réplication d'objets",
     "Inventaire des objets blob",
     "Site web statique",
     "Gestion du cycle de vie"
    ]
   }
  ]
 }
}
);
