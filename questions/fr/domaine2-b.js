/* Domaine 2 : stockage (lot B : D2-010 à D2-069) */
AZ.questions.push(
{
 "id": "D2-010",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez créer un compte de stockage qui héberge des partages de fichiers Azure <b>Premium</b> avec le protocole NFS.</p><p>Quel type de compte de stockage devez-vous créer ?</p>",
 "opts": [
  "Premium, type de compte Partages de fichiers (FileStorage)",
  "Premium, type de compte Objets blob de blocs",
  "Premium, type de compte Objets blob de pages",
  "Standard universel v2"
 ],
 "ans": 0,
 "expl": "<p>Les partages de fichiers <b>Premium</b> (SSD) n'existent que dans un compte <b>Premium de type Partages de fichiers</b> (FileStorage). C'est aussi le seul type qui prend en charge les partages <b>NFS</b>.</p><ul><li><b>Standard universel v2</b> : partages SMB standard (HDD), pas de NFS pour Azure Files.</li><li><b>Objets blob de blocs Premium</b> : blobs à faible latence, pas de partages de fichiers.</li><li><b>Objets blob de pages Premium</b> : surtout pour des disques non managés.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Créer un compte de stockage",
  "menu": [
   "*Informations de base",
   "Avancé"
  ],
  "rows": [
   [
    "*Performances",
    "Premium"
   ],
   [
    "*Type de compte Premium",
    "Partages de fichiers"
   ],
   [
    "Redondance",
    "LRS ou ZRS"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Partages Premium ou NFS = compte Premium de type Partages de fichiers (FileStorage)."
},
{
 "id": "D2-011",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type de compte de stockage adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de compte",
 "srcs": [
  "Standard universel v2",
  "Premium objets blob de blocs",
  "Premium partages de fichiers",
  "Premium objets blob de pages"
 ],
 "tgtHead": [
  "Besoin",
  "Type de compte"
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
 "id": "D2-012",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez nommer un nouveau compte de stockage.</p><p>Quel nom est valide ?</p>",
 "opts": [
  "st",
  "stockageprod01",
  "stockage_prod_01",
  "Stockage-Prod01"
 ],
 "ans": 1,
 "expl": "<p>Un nom de compte de stockage doit contenir <b>3 à 24 caractères</b>, uniquement des <b>lettres minuscules et des chiffres</b>, et être <b>unique dans tout Azure</b>, car il fait partie de l'URL (<code>stockageprod01.blob.core.windows.net</code>).</p><p>Les majuscules, tirets et traits de soulignement sont interdits. « st » ne fait que 2 caractères.</p>",
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
    "*Nom du compte de stockage",
    "stockageprod01"
   ],
   [
    "Règle",
    "3 à 24 caractères, minuscules et chiffres, unique dans Azure"
   ]
  ]
 },
 "keep": "Nom de compte : 3-24 caractères, minuscules + chiffres, unique mondialement (il est dans l'URL)."
},
{
 "id": "D2-013",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'option de redondance adaptée à chaque exigence. Chaque solution doit être la moins chère possible.</p><p>Pour répondre, faites glisser la redondance appropriée vers chaque exigence. Chaque redondance peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Redondances",
 "srcs": [
  "LRS",
  "ZRS",
  "GRS",
  "RA-GRS",
  "GZRS"
 ],
 "tgtHead": [
  "Exigence",
  "Redondance"
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
 "id": "D2-015",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le compte de stockage storage3 utilise la redondance GRS. La région primaire subit une panne prolongée. Vous lancez un <b>basculement géographique</b> (non planifié) géré par le client.</p><p>Quelle est la redondance de storage3 juste après le basculement ?</p>",
 "opts": [
  "ZRS, dans la nouvelle région primaire",
  "RA-GRS, dans l'ancienne région primaire",
  "LRS, dans la nouvelle région primaire",
  "GRS, dans la nouvelle région primaire"
 ],
 "ans": 2,
 "expl": "<p>Après un basculement non planifié, la région secondaire devient primaire et le compte est configuré en <b>LRS</b>. Il n'a plus de copie géographique tant que vous ne reconfigurez pas GRS (ce qui relance une copie complète vers une nouvelle secondaire).</p><p>Points à retenir : le basculement peut entraîner une <b>perte des données</b> écrites après l'heure de dernière synchronisation, et il ne faut le lancer que si la panne dure.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage3"
  ],
  "title": "storage3 | Redondance",
  "menu": [
   "Vue d'ensemble",
   "*Redondance"
  ],
  "rows": [
   [
    "*Préparer le basculement",
    "Type : non planifié (géré par le client)"
   ],
   [
    "Après basculement",
    "LRS dans l'ancienne région secondaire"
   ]
  ],
  "btn": "Préparer le basculement"
 },
 "keep": "Après basculement non planifié : LRS dans la nouvelle primaire ; reconfigurer GRS ensuite."
},
{
 "id": "D2-016",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le compte de stockage storage4 utilise la redondance LRS. Vous devez passer à <b>ZRS</b> sans interrompre l'accès aux données.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Modifier la redondance dans Configuration, comme pour passer à GRS",
  "Activer la géoréplication dans le pare-feu",
  "Supprimer et recréer le compte en ZRS",
  "Demander une conversion vers ZRS (conversion gérée par Microsoft ou lancée depuis le portail)"
 ],
 "ans": 3,
 "expl": "<p>Passer de LRS à GRS se fait d'un simple clic dans <b>Configuration</b>. Mais passer à <b>ZRS</b> change la répartition physique dans la région : il faut une <b>conversion</b> (lancée depuis la page Redondance du portail ou via une demande de support), réalisée sans interruption.</p><p>On peut aussi migrer manuellement (nouveau compte + copie avec AzCopy), mais cela demande une interruption. Le pare-feu n'a aucun lien avec la redondance.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage4"
  ],
  "title": "storage4 | Redondance",
  "menu": [
   "Vue d'ensemble",
   "*Redondance"
  ],
  "rows": [
   [
    "Redondance actuelle",
    "LRS"
   ],
   [
    "*Nouvelle redondance",
    "ZRS (conversion, sans interruption)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Ajouter G (géo) = simple changement. Ajouter Z (zones) = conversion."
},
{
 "id": "D2-017",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous créez un compte de stockage <b>Premium objets blob de blocs</b>.</p><p>Quelles options de redondance sont disponibles ?</p>",
 "opts": [
  "LRS et ZRS uniquement",
  "LRS, ZRS, GRS et GZRS",
  "Toutes, y compris RA-GZRS",
  "GRS et RA-GRS uniquement"
 ],
 "ans": 0,
 "expl": "<p>Les comptes <b>Premium</b> (objets blob de blocs, partages de fichiers, objets blob de pages) ne prennent en charge que <b>LRS et ZRS</b>. La géoredondance (GRS, GZRS et leurs versions RA-) est réservée aux comptes Standard universel v2.</p>",
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
    "Premium"
   ],
   [
    "*Redondance proposée",
    "LRS · ZRS"
   ]
  ]
 },
 "keep": "Premium = LRS ou ZRS uniquement ; la géoredondance est réservée au Standard."
},
{
 "id": "D2-018",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez stocker des archives légales de 10 ans auxquelles personne n'accède, au coût le plus bas. Une attente de plusieurs heures pour les relire est acceptable.</p><p>Quel niveau d'accès devez-vous utiliser ?</p>",
 "opts": [
  "Froid (Cool)",
  "Archive",
  "Chaud",
  "Très froid (Cold)"
 ],
 "ans": 1,
 "expl": "<p>Le niveau <b>Archive</b> a le coût de stockage le plus bas. En échange, les données sont <b>hors ligne</b> : il faut les réhydrater (jusqu'à 15 heures en priorité standard) avant de les lire, et la lecture coûte cher. Durée minimale : 180 jours.</p><ul><li><b>Chaud</b> : données utilisées souvent. Stockage le plus cher, accès le moins cher.</li><li><b>Froid (Cool)</b> : accès peu fréquent, minimum 30 jours.</li><li><b>Très froid (Cold)</b> : accès rare, minimum 90 jours, mais encore en ligne.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "archives"
  ],
  "title": "Modifier le niveau",
  "rows": [
   [
    "*Niveau d'accès",
    "Archive"
   ],
   [
    "Lecture",
    "Après réhydratation (heures)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Le moins cher pour ne jamais lire = Archive (hors ligne, 180 jours minimum)."
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
 "id": "D2-020",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un blob de 2 Go est au niveau Archive. Un auditeur a besoin de le lire dans l'heure.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Le réhydrater vers le niveau Chaud avec la priorité Standard",
  "Le copier vers un autre compte au niveau Archive",
  "Le réhydrater vers le niveau Chaud avec la priorité Élevée",
  "Le lire directement : il est accessible en lecture seule"
 ],
 "ans": 2,
 "expl": "<p>Un blob archivé est <b>hors ligne</b> : on ne peut ni le lire ni le télécharger. Il faut le <b>réhydrater</b> vers un niveau en ligne (Chaud, Froid ou Très froid), soit en changeant son niveau, soit en le copiant vers un nouveau blob.</p><p>La priorité <b>Élevée</b> réhydrate en moins d'une heure les objets de moins de 10 Go. La priorité <b>Standard</b> peut prendre jusqu'à 15 heures. Une copie qui reste en Archive ne sert à rien.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "audit"
  ],
  "title": "Modifier le niveau",
  "rows": [
   [
    "Niveau d'accès",
    "Chaud"
   ],
   [
    "*Priorité de réhydratation",
    "Élevée (< 1 h pour < 10 Go)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Archive = hors ligne ; réhydratation Standard (≤ 15 h) ou Élevée (< 1 h)."
},
{
 "id": "D2-021",
 "dom": 2,
 "type": "single",
 "stem": "<p>Les blobs du conteneur logs doivent passer au niveau Froid 30 jours après leur dernière modification, au niveau Archive après 90 jours, et être supprimés après 365 jours, automatiquement.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "La suppression réversible des blobs",
  "Une stratégie d'immuabilité",
  "La réplication d'objets",
  "Une stratégie de gestion du cycle de vie"
 ],
 "ans": 3,
 "expl": "<p>La <b>gestion du cycle de vie</b> applique des règles (filtrées par préfixe, type de blob ou étiquette d'index) qui déplacent les blobs entre niveaux ou les suppriment selon leur âge : jours depuis la modification, la création ou le dernier accès.</p><p>L'immuabilité empêche la modification et la suppression. La suppression réversible garde les blobs supprimés. La réplication d'objets copie vers un autre compte.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Gestion du cycle de vie",
  "menu": [
   "Protection des données",
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "Filtre",
    "Préfixe logs/"
   ],
   [
    "*Modifié il y a plus de 30 jours",
    "Déplacer vers le stockage froid"
   ],
   [
    "*Plus de 90 jours",
    "Déplacer vers le stockage archive"
   ],
   [
    "*Plus de 365 jours",
    "Supprimer l'objet blob"
   ]
  ],
  "btn": "Ajouter une règle"
 },
 "keep": "Déplacer ou supprimer selon l'âge = gestion du cycle de vie."
},
{
 "id": "D2-022",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous voulez qu'une règle de cycle de vie déplace vers le niveau Froid les blobs qui n'ont pas été <b>lus</b> depuis 60 jours, même s'ils ont été créés il y a longtemps.</p><p>Quel prérequis devez-vous activer sur le compte de stockage ?</p>",
 "opts": [
  "Le suivi de l'heure du dernier accès",
  "L'espace de noms hiérarchique",
  "Le flux de modification",
  "Le contrôle de version des blobs"
 ],
 "ans": 0,
 "expl": "<p>La condition <code>daysAfterLastAccessTimeGreaterThan</code> repose sur l'heure du dernier accès, qui n'est enregistrée que si le <b>suivi de l'heure du dernier accès</b> est activé sur le compte.</p><p>Le contrôle de version, le flux de modification et l'espace de noms hiérarchique ne fournissent pas cette information.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Gestion du cycle de vie",
  "menu": [
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "*Activer le suivi des accès",
    "Coché"
   ],
   [
    "Condition",
    "Dernier accès il y a plus de 60 jours"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Règle sur « dernier accès » = activer le suivi de l'heure du dernier accès."
},
{
 "id": "D2-023",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous venez de créer une stratégie de gestion du cycle de vie qui supprime les blobs de plus de 30 jours. Une heure plus tard, les vieux blobs sont toujours là.</p><p>Pourquoi ?</p>",
 "opts": [
  "Il faut redémarrer le compte de stockage",
  "La stratégie s'exécute une fois par jour et peut prendre jusqu'à 24 heures pour s'appliquer la première fois",
  "La suppression réversible empêche la stratégie de fonctionner",
  "Les stratégies ne s'appliquent qu'aux nouveaux blobs"
 ],
 "ans": 1,
 "expl": "<p>Le moteur de cycle de vie traite les stratégies <b>une fois par jour</b>. Après création ou modification d'une stratégie, il faut compter jusqu'à 24 heures pour qu'elle prenne effet, puis le traitement lui-même peut durer selon le nombre de blobs.</p><p>Un compte de stockage ne se redémarre pas. La stratégie s'applique aussi aux blobs existants. La suppression réversible garde les blobs supprimés pendant sa durée de rétention, mais n'empêche pas la stratégie.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Gestion du cycle de vie",
  "menu": [
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "Règle",
    "supprimer-30j · Activée"
   ],
   [
    "*Exécution",
    "1 fois par jour, jusqu'à 24 h avant le premier effet"
   ]
  ]
 },
 "keep": "Cycle de vie : traitement quotidien, jusqu'à 24 h avant le premier effet."
},
{
 "id": "D2-024",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez pouvoir récupérer les blobs <b>écrasés</b> ou <b>supprimés</b> par erreur dans storage5 au cours des 30 derniers jours.</p><p>Quelles <b>deux</b> fonctionnalités devez-vous activer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Suppression réversible des blobs avec une rétention de 30 jours",
  "Stratégie d'immuabilité avec conservation légale",
  "Contrôle de version des blobs",
  "Réplication d'objets"
 ],
 "ans": [
  0,
  2
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
 "id": "D2-025",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un utilisateur a supprimé le conteneur projets de storage6, avec tous ses blobs, il y a 3 jours. La suppression réversible des <b>blobs</b> est activée avec 7 jours de rétention, mais pas celle des <b>conteneurs</b>.</p><p>Pouvez-vous récupérer les données ?</p>",
 "opts": [
  "Oui, avec la restauration à un point dans le temps",
  "Oui, en restaurant le conteneur depuis la liste des conteneurs supprimés",
  "Non, car la suppression réversible des conteneurs n'était pas activée",
  "Oui, en restaurant chaque blob supprimé"
 ],
 "ans": 2,
 "expl": "<p>La suppression réversible des <b>blobs</b> protège les blobs supprimés un par un. Quand on supprime un <b>conteneur</b> entier, seule la suppression réversible des <b>conteneurs</b> permet de le restaurer. Elle n'était pas activée : les données sont perdues.</p><p>La restauration à un point dans le temps ne restaure pas non plus un conteneur supprimé. Bonne pratique : activer les deux suppressions réversibles, et un verrou sur le compte contre la suppression du compte lui-même.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage6"
  ],
  "title": "storage6 | Protection des données",
  "menu": [
   "*Protection des données"
  ],
  "rows": [
   [
    "Suppression réversible des objets blob",
    "7 jours"
   ],
   [
    "*Suppression réversible des conteneurs",
    "Désactivée"
   ]
  ]
 },
 "keep": "Conteneur supprimé = seule la suppression réversible des conteneurs le sauve."
},
{
 "id": "D2-026",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez pouvoir remettre <b>tous</b> les blobs de blocs d'un compte de stockage dans l'état où ils étaient à une date précise des 14 derniers jours, après une corruption par une application.</p><p>Quelle fonctionnalité devez-vous utiliser ?</p>",
 "opts": [
  "Le basculement géographique",
  "Les instantanés de blobs manuels",
  "La réplication d'objets",
  "La restauration à un point dans le temps des conteneurs"
 ],
 "ans": 3,
 "expl": "<p>La <b>restauration à un point dans le temps</b> remet des conteneurs (ou des plages de blobs) de blobs de blocs dans leur état à une date choisie. Elle exige le <b>contrôle de version</b>, le <b>flux de modification</b> et la <b>suppression réversible des blobs</b>, avec une période de restauration inférieure à la rétention de la suppression réversible.</p><p>Les instantanés manuels demandent une gestion blob par blob. La réplication et le basculement copieraient aussi la corruption.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Protection des données",
  "menu": [
   "*Protection des données"
  ],
  "rows": [
   [
    "*Restauration à un point dans le temps",
    "Activée · 14 jours"
   ],
   [
    "Prérequis",
    "Versioning, flux de modification, suppression réversible"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Revenir à une date pour tout un compte = restauration à un point dans le temps (blobs de blocs)."
},
{
 "id": "D2-027",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un régulateur impose que les rapports financiers ne puissent être ni modifiés ni supprimés pendant 7 ans, même par un administrateur. La règle elle-même ne doit pas pouvoir être raccourcie.</p><p>Que devez-vous configurer sur le conteneur ?</p>",
 "opts": [
  "Une stratégie de rétention temporelle de 7 ans, puis la verrouiller",
  "Une conservation légale",
  "Une stratégie de rétention temporelle déverrouillée",
  "Un verrou Suppression impossible sur le compte"
 ],
 "ans": 0,
 "expl": "<p>Une <b>stratégie de rétention temporelle</b> rend les blobs immuables (WORM : écriture unique, lectures multiples) pendant la durée choisie. Une fois <b>verrouillée</b>, elle ne peut plus être supprimée ni raccourcie ; on peut seulement l'allonger.</p><ul><li>Une <b>conservation légale</b> n'a pas de durée : elle dure jusqu'à ce qu'on la retire.</li><li>Une stratégie <b>déverrouillée</b> peut être modifiée ou supprimée : elle sert aux tests.</li><li>Un <b>verrou</b> protège le compte, pas les données.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "finance"
  ],
  "title": "finance | Stratégie d'accès",
  "menu": [
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "*Rétention basée sur le temps",
    "2 555 jours (7 ans)"
   ],
   [
    "*État",
    "Verrouillée"
   ]
  ],
  "btn": "Verrouiller la stratégie"
 },
 "keep": "Rétention verrouillée : ni suppression ni raccourcissement possible, même par un admin."
},
{
 "id": "D2-028",
 "dom": 2,
 "type": "single",
 "stem": "<p>Les documents d'une affaire judiciaire doivent être protégés contre toute modification ou suppression <b>jusqu'à la fin du procès</b>, dont la date est inconnue.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une stratégie de rétention temporelle de 10 ans",
  "Une conservation légale avec une étiquette",
  "La suppression réversible avec 365 jours",
  "Un verrou Lecture seule"
 ],
 "ans": 1,
 "expl": "<p>Une <b>conservation légale</b> (legal hold) rend les données immuables tant qu'elle est en place, sans durée fixe. On l'identifie par une ou plusieurs étiquettes (par exemple le numéro de l'affaire) et on la retire à la fin du procès.</p><p>Une rétention de 10 ans bloquerait trop longtemps ou pas assez. La suppression réversible n'empêche pas la modification. Un verrou ne protège pas les données.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "affaire"
  ],
  "title": "affaire | Stratégie d'accès",
  "menu": [
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "*Conservation légale",
    "Étiquette : Affaire2026"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Fin inconnue = conservation légale ; on la retire à la fin."
},
{
 "id": "D2-029",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez copier automatiquement les nouveaux blobs du conteneur src du compte storageA (France Central) vers le conteneur dst du compte storageB (West Europe).</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
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
 "keep": "Réplication d'objets : versions (2 comptes), flux (source), pas d'espace de noms hiérarchique."
},
{
 "id": "D2-030",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une application cliente doit pouvoir télécharger un seul blob pendant 2 heures, sans recevoir de clé d'accès du compte.</p><p>Que devez-vous lui fournir ?</p>",
 "opts": [
  "Le rôle Contributeur sur le compte de stockage",
  "La clé d'accès key1 du compte",
  "Une signature d'accès partagé (SAS) sur le blob, avec l'autorisation Lecture et une expiration dans 2 heures",
  "L'URL du blob, après avoir rendu le conteneur public"
 ],
 "ans": 2,
 "expl": "<p>Une <b>SAS</b> donne un accès limité : une ressource (ici un blob), des autorisations (ici <code>sp=r</code>) et une durée (<code>se</code>). L'application n'a jamais la clé du compte.</p><p>La clé du compte donne un accès total et permanent. Contributeur gère le compte sans donner accès aux données avec son identité. Rendre le conteneur public exposerait tous ses blobs à tout le monde, sans limite de durée.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "docs",
   "contrat.pdf"
  ],
  "title": "Générer une SAS",
  "rows": [
   [
    "*Autorisations",
    "Lecture"
   ],
   [
    "*Expiration",
    "Dans 2 heures"
   ],
   [
    "Protocoles autorisés",
    "HTTPS uniquement"
   ]
  ],
  "btn": "Générer le jeton et l'URL SAS"
 },
 "keep": "Accès limité à une ressource, une action, une durée = SAS."
},
{
 "id": "D2-031",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type de signature d'accès partagé (SAS) adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de SAS",
 "srcs": [
  "SAS de délégation d'utilisateur",
  "SAS de service",
  "SAS de compte"
 ],
 "tgtHead": [
  "Besoin",
  "Type de SAS"
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
 "id": "D2-032",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous avez distribué à des partenaires plusieurs SAS de service sur le conteneur partage, toutes associées à la stratégie d'accès stockée PolPartenaires. Vous devez révoquer immédiatement ces SAS, sans affecter les autres applications qui utilisent les clés du compte.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Régénérer key1 et key2",
  "Supprimer le conteneur partage",
  "Activer le pare-feu du compte de stockage",
  "Supprimer ou modifier la stratégie d'accès stockée PolPartenaires"
 ],
 "ans": 3,
 "expl": "<p>Une SAS de service associée à une <b>stratégie d'accès stockée</b> tire ses autorisations et son expiration de cette stratégie. En supprimant la stratégie (ou en changeant son expiration), on révoque toutes les SAS associées.</p><p>Régénérer les clés révoquerait aussi ces SAS, mais casserait toutes les applications qui utilisent les clés. Supprimer le conteneur détruit les données. Le pare-feu filtre le réseau, pas les SAS.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "partage"
  ],
  "title": "partage | Stratégie d'accès",
  "menu": [
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "*PolPartenaires",
    "Supprimer ou changer l'expiration"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "SAS liées à une stratégie d'accès stockée = révoquées en supprimant la stratégie."
},
{
 "id": "D2-033",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous avez émis une <b>SAS de compte</b> signée avec key1. Elle a fuité. Aucune stratégie d'accès stockée n'est utilisée.</p><p>Comment la révoquer ?</p>",
 "opts": [
  "Régénérer key1",
  "Régénérer key2",
  "Supprimer la stratégie d'accès stockée",
  "Changer le niveau d'accès du compte"
 ],
 "ans": 0,
 "expl": "<p>Une SAS de compte est signée avec une clé du compte. La seule façon de l'invalider avant son expiration est de <b>régénérer la clé qui l'a signée</b>, ici key1. Toutes les SAS signées avec key1 deviennent invalides.</p><p>C'est pour faciliter cette opération qu'il y a deux clés : on bascule les applications sur key2, puis on régénère key1. Les SAS de compte ne peuvent pas utiliser de stratégie d'accès stockée.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Clés d'accès",
  "menu": [
   "*Clés d'accès"
  ],
  "rows": [
   [
    "*key1",
    "Faire pivoter la clé"
   ]
  ],
  "btn": "Faire pivoter la clé"
 },
 "keep": "SAS de compte = révoquée en régénérant sa clé ; basculer d'abord les applications sur l'autre clé."
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
 "id": "D2-035",
 "dom": 2,
 "type": "single",
 "stem": "<p>Votre politique de sécurité interdit l'accès aux données de storage8 avec les clés du compte et les SAS signées par ces clés. Seule l'authentification Microsoft Entra doit être possible.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Désactiver le transfert sécurisé obligatoire",
  "Désactiver « Autoriser l'accès à la clé du compte de stockage » (Shared Key)",
  "Régénérer les deux clés chaque jour",
  "Activer l'espace de noms hiérarchique"
 ],
 "ans": 1,
 "expl": "<p>Le paramètre <b>Autoriser l'accès à la clé du compte de stockage</b> (AllowSharedKeyAccess = false) bloque toute requête autorisée par clé partagée, y compris les SAS de compte et de service. Les SAS de délégation d'utilisateur, signées via Entra, continuent de fonctionner.</p><p>Régénérer les clés ne les interdit pas. L'espace de noms hiérarchique concerne Data Lake. Désactiver le transfert sécurisé autoriserait HTTP : l'inverse de la sécurité.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage8"
  ],
  "title": "storage8 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration"
  ],
  "rows": [
   [
    "*Autoriser l'accès à la clé du compte de stockage",
    "Désactivé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Interdire clés et SAS signées par clé = désactiver l'accès par clé partagée."
},
{
 "id": "D2-036",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez permettre à n'importe qui sur Internet de lire les images du conteneur images de storage9, sans authentification. Les autres conteneurs doivent rester privés.</p><p>Le paramètre « Autoriser l'accès anonyme aux objets blob » du compte est désactivé. Que devez-vous faire ?</p>",
 "opts": [
  "Activer le site web statique",
  "Créer une SAS sans date d'expiration",
  "Activer l'accès anonyme sur le compte, puis régler le conteneur images sur le niveau d'accès Blob",
  "Régler le conteneur images sur le niveau d'accès Conteneur, sans toucher au compte"
 ],
 "ans": 2,
 "expl": "<p>L'accès anonyme se règle à deux niveaux. Le <b>compte</b> doit l'autoriser ; sinon, les réglages des conteneurs sont ignorés. Ensuite, chaque <b>conteneur</b> a un niveau d'accès : <b>Privé</b>, <b>Blob</b> (lecture anonyme des blobs, sans pouvoir lister) ou <b>Conteneur</b> (lecture et liste des blobs).</p><p>Régler seulement le conteneur ne suffit pas quand le compte l'interdit. Une SAS a toujours une expiration. Le site web statique utilise le conteneur $web, pas images.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage9"
  ],
  "title": "storage9 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Autoriser l'accès anonyme aux objets blob",
    "Activé"
   ],
   [
    "Conteneur images · Niveau d'accès",
    "Blob"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Accès anonyme : autorisé sur le compte, puis niveau Blob ou Conteneur sur le conteneur."
},
{
 "id": "D2-037",
 "dom": 2,
 "type": "single",
 "stem": "<p>Des machines virtuelles du sous-réseau Subnet1 de VNet1 doivent accéder à storage10. Tout autre accès réseau doit être refusé. Vous ne voulez pas d'adresse IP privée pour le compte de stockage.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un point de terminaison privé dans Subnet1",
  "Une règle de groupe de sécurité réseau sortante vers Internet",
  "Une passerelle NAT sur Subnet1",
  "Un point de terminaison de service Microsoft.Storage sur Subnet1, et une règle de réseau virtuel dans le pare-feu de storage10"
 ],
 "ans": 3,
 "expl": "<p>Un <b>point de terminaison de service</b> fait passer le trafic du sous-réseau vers le stockage par le réseau Azure, en l'identifiant comme venant de Subnet1. On ajoute ensuite Subnet1 dans le <b>pare-feu</b> du compte (« Activé à partir des réseaux virtuels et adresses IP sélectionnés »). Le compte garde son adresse publique.</p><p>Un point de terminaison privé donnerait une adresse IP privée au compte, ce qui n'est pas voulu. Un NSG ou une passerelle NAT ne restreignent pas l'accès côté compte.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage10"
  ],
  "title": "storage10 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "Accès réseau public",
    "Réseaux virtuels et IP sélectionnés"
   ],
   [
    "*Réseau virtuel",
    "VNet1 / Subnet1 (point de terminaison Microsoft.Storage)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Point de terminaison de service = adresse publique conservée, accès filtré par sous-réseau."
},
{
 "id": "D2-038",
 "dom": 2,
 "type": "single",
 "stem": "<p>Les serveurs de votre site local, reliés à VNet1 par un VPN site à site, doivent accéder à storage11 par une adresse IP <b>privée</b>, sans passer par Internet.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un point de terminaison privé pour storage11 dans VNet1, avec la résolution DNS de privatelink.blob.core.windows.net",
  "Une règle d'adresse IP du site local dans le pare-feu",
  "Le niveau d'accès Archive",
  "Un point de terminaison de service sur le GatewaySubnet"
 ],
 "ans": 0,
 "expl": "<p>Un <b>point de terminaison privé</b> crée une interface réseau avec une adresse IP privée de VNet1 pour le compte. Le site local y accède à travers le VPN. Il faut que le nom <code>storage11.blob.core.windows.net</code> soit résolu vers cette adresse privée : zone DNS privée <code>privatelink.blob.core.windows.net</code>, et redirection DNS depuis le site local.</p><p>Les points de terminaison de service ne fonctionnent pas depuis le site local. Une règle IP passerait par Internet.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage11"
  ],
  "title": "storage11 | Mise en réseau › Connexions de point de terminaison privé",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Sous-ressource cible",
    "blob"
   ],
   [
    "Réseau",
    "VNet1"
   ],
   [
    "*Zone DNS privée",
    "privatelink.blob.core.windows.net"
   ]
  ],
  "btn": "+ Point de terminaison privé"
 },
 "keep": "IP privée, accès depuis le site local = point de terminaison privé + DNS privé."
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
 "id": "D2-040",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le pare-feu de storage13 n'autorise que certains réseaux virtuels. Azure Backup et Azure Monitor doivent pourtant pouvoir y écrire.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "Le site web statique",
  "L'exception « Autoriser les services Azure de la liste des services approuvés à accéder à ce compte de stockage »",
  "L'accès anonyme aux blobs",
  "La géoredondance"
 ],
 "ans": 1,
 "expl": "<p>L'exception pour les <b>services approuvés</b> (trusted Microsoft services) laisse passer certains services Azure (Backup, Monitor, Event Grid…) qui ne peuvent pas passer par vos réseaux virtuels. On peut aussi utiliser des règles d'instance de ressource, plus précises.</p><p>L'accès anonyme exposerait les données à tous. Les deux autres options n'ont pas de rapport.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage13"
  ],
  "title": "storage13 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "#Exceptions",
    ""
   ],
   [
    "*Autoriser les services Azure de la liste des services approuvés",
    "Coché"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Backup, Monitor… derrière le pare-feu = exception des services approuvés."
},
{
 "id": "D2-041",
 "dom": 2,
 "type": "single",
 "stem": "<p>Votre politique exige que les clés de chiffrement des données de storage14 soient sous votre contrôle, avec une rotation que vous gérez.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une SAS de délégation d'utilisateur",
  "Le transfert sécurisé obligatoire",
  "Des clés gérées par le client, stockées dans Azure Key Vault",
  "Le chiffrement géré par Microsoft (par défaut)"
 ],
 "ans": 2,
 "expl": "<p>Le chiffrement du service de stockage (SSE) est toujours actif. Par défaut, Microsoft gère les clés. Avec des <b>clés gérées par le client</b>, la clé de chiffrement est dans votre <b>coffre de clés</b> (ou un HSM managé) : vous contrôlez sa rotation et pouvez révoquer l'accès.</p><p>Le coffre doit avoir la <b>suppression réversible</b> et la <b>protection contre le vidage</b>, et le compte de stockage utilise une identité managée pour lire la clé.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage14"
  ],
  "title": "storage14 | Chiffrement",
  "menu": [
   "*Chiffrement"
  ],
  "rows": [
   [
    "*Type de chiffrement",
    "Clés gérées par le client"
   ],
   [
    "Coffre de clés",
    "KV-Stockage / cle-sse"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Contrôler la clé de chiffrement = clés gérées par le client dans Key Vault."
},
{
 "id": "D2-042",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous configurez des clés gérées par le client pour storage15, avec le coffre de clés KV1.</p><p>Quelles <b>deux</b> conditions KV1 et storage15 doivent-ils remplir ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "storage15 doit utiliser la redondance GRS",
  "L'identité managée de storage15 doit pouvoir lire et utiliser la clé dans KV1",
  "KV1 doit être dans un autre abonnement",
  "KV1 doit avoir la suppression réversible et la protection contre le vidage"
 ],
 "ans": [
  1,
  3
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
 "id": "D2-043",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une norme interne impose un double chiffrement des données, au niveau du service et au niveau de l'infrastructure, pour un nouveau compte de stockage.</p><p>Quand devez-vous activer le chiffrement d'infrastructure ?</p>",
 "opts": [
  "Il est activé par défaut",
  "Après avoir copié les données",
  "À tout moment depuis Chiffrement",
  "À la création du compte de stockage"
 ],
 "ans": 3,
 "expl": "<p>Le <b>chiffrement d'infrastructure</b> ajoute une seconde couche de chiffrement avec une autre clé et un autre algorithme. Il se choisit <b>uniquement à la création</b> du compte (onglet Chiffrement) et ne peut pas être activé ensuite.</p><p>Il n'est pas activé par défaut. Pour un compte existant, il faut créer un nouveau compte et y copier les données.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Créer un compte de stockage",
  "menu": [
   "Informations de base",
   "*Chiffrement"
  ],
  "rows": [
   [
    "*Activer le chiffrement d'infrastructure",
    "Coché (uniquement à la création)"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Chiffrement d'infrastructure = à la création seulement."
},
{
 "id": "D2-044",
 "dom": 2,
 "type": "single",
 "stem": "<p>Deux équipes partagent storage16. Les données de chaque équipe doivent être chiffrées avec une clé différente, au niveau du conteneur.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Des étendues de chiffrement",
  "Deux comptes de stockage",
  "Des SAS différentes",
  "Le chiffrement d'infrastructure"
 ],
 "ans": 0,
 "expl": "<p>Les <b>étendues de chiffrement</b> (encryption scopes) permettent d'utiliser des clés différentes (gérées par Microsoft ou par le client) au niveau d'un conteneur ou d'un blob, dans un même compte.</p><p>Deux comptes marcheraient mais ne répondent pas à « au niveau du conteneur ». Une SAS ne chiffre rien. Le chiffrement d'infrastructure s'applique à tout le compte.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage16"
  ],
  "title": "storage16 | Chiffrement › Étendues de chiffrement",
  "menu": [
   "*Chiffrement"
  ],
  "rows": [
   [
    "*equipe-A",
    "Clé gérée par le client"
   ],
   [
    "*equipe-B",
    "Clé gérée par Microsoft"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Clés différentes par conteneur dans un même compte = étendues de chiffrement."
},
{
 "id": "D2-045",
 "dom": 2,
 "type": "single",
 "stem": "<p>Des serveurs Windows de votre site local doivent monter le partage de fichiers Azure share1, sur storage17, avec le protocole SMB. Le montage échoue.</p><p>Quelle est la cause la plus fréquente ?</p>",
 "opts": [
  "Le port TCP 3389 est fermé",
  "Le port TCP 445 sortant est bloqué par le fournisseur d'accès ou le pare-feu",
  "storage17 utilise la redondance LRS",
  "Le partage est en niveau Chaud"
 ],
 "ans": 1,
 "expl": "<p>SMB utilise le port <b>TCP 445</b>. Beaucoup de fournisseurs d'accès et de pare-feu d'entreprise le bloquent vers Internet. Solutions : ouvrir le port, passer par un VPN ou ExpressRoute avec un point de terminaison privé, ou utiliser Azure File Sync.</p><p>Le niveau et la redondance n'empêchent pas le montage. Le port 3389 concerne RDP.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage17",
   "Partages de fichiers",
   "share1"
  ],
  "title": "share1 | Se connecter",
  "rows": [
   [
    "Lettre de lecteur",
    "Z"
   ],
   [
    "*Prérequis",
    "Port TCP 445 sortant ouvert"
   ]
  ]
 },
 "keep": "SMB = port 445 ; souvent bloqué par les FAI."
},
{
 "id": "D2-046",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le niveau de partage Azure Files adapté à chaque usage, dans un compte Standard universel v2 ou Premium.</p><p>Pour répondre, faites glisser le niveau approprié vers chaque usage. Chaque niveau peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Niveaux",
 "srcs": [
  "Premium",
  "Optimisé pour les transactions",
  "Chaud",
  "Froid (Cool)"
 ],
 "tgtHead": [
  "Usage",
  "Niveau"
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
 "id": "D2-047",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un utilisateur a écrasé un fichier Excel du partage share2 il y a 2 jours. Des instantanés de partage sont pris chaque nuit.</p><p>Comment l'utilisateur peut-il récupérer le fichier lui-même depuis Windows ?</p>",
 "opts": [
  "En réhydratant le fichier depuis le niveau Archive",
  "En demandant une restauration à Microsoft",
  "Avec l'onglet Versions précédentes des propriétés du fichier",
  "Avec la corbeille de Windows"
 ],
 "ans": 2,
 "expl": "<p>Les <b>instantanés de partage</b> Azure Files sont exposés dans Windows sous l'onglet <b>Versions précédentes</b> : l'utilisateur peut ouvrir ou restaurer une ancienne version.</p><p>La corbeille de Windows ne voit pas les fichiers du partage réseau. Azure Files n'a pas de niveau Archive.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers",
   "share2"
  ],
  "title": "share2 | Instantanés",
  "menu": [
   "Vue d'ensemble",
   "*Instantanés"
  ],
  "rows": [
   [
    "*Instantané d'hier soir",
    "Visible dans Versions précédentes"
   ]
  ]
 },
 "keep": "Instantanés de partage = Versions précédentes dans Windows."
},
{
 "id": "D2-048",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le partage de fichiers share3 a été supprimé par erreur ce matin. La suppression réversible des partages de fichiers est activée avec 14 jours de rétention.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Restaurer share3 depuis un instantané de share3",
  "Créer un nouveau partage share3 : les données réapparaissent",
  "Rien : un partage supprimé ne peut pas être restauré",
  "Afficher les partages supprimés dans le compte de stockage et annuler la suppression de share3"
 ],
 "ans": 3,
 "expl": "<p>Avec la <b>suppression réversible des partages</b>, un partage supprimé est conservé pendant la durée de rétention. On l'affiche dans la liste des partages (option « Afficher les partages supprimés ») et on <b>annule la suppression</b>, avec ses instantanés.</p><p>Les instantanés sont supprimés avec le partage s'il n'y a pas de suppression réversible. Créer un partage du même nom ne restaure rien.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "Partages de fichiers",
  "menu": [
   "*Partages de fichiers"
  ],
  "rows": [
   [
    "*Afficher les partages supprimés",
    "Activé"
   ],
   [
    "share3",
    "Supprimé · Annuler la suppression"
   ]
  ],
  "btn": "Annuler la suppression"
 },
 "keep": "Partage supprimé = annuler la suppression (si suppression réversible des partages)."
},
{
 "id": "D2-049",
 "dom": 2,
 "type": "single",
 "stem": "<p>Les utilisateurs de votre domaine AD DS, synchronisé avec Microsoft Entra ID, doivent accéder au partage share4 avec leur compte du domaine et des autorisations NTFS.</p><p>Que devez-vous configurer d'abord sur le compte de stockage ?</p>",
 "opts": [
  "L'authentification basée sur l'identité avec AD DS (jonction du compte de stockage au domaine)",
  "Le protocole NFS",
  "L'accès anonyme",
  "Une SAS de compte"
 ],
 "ans": 0,
 "expl": "<p>Pour utiliser les comptes du domaine, on active l'<b>authentification basée sur l'identité</b> du compte de stockage : AD DS local (le compte de stockage est représenté par un objet ordinateur dans le domaine, par exemple avec le module AzFilesHybrid), Microsoft Entra Domain Services, ou Microsoft Entra Kerberos pour les identités hybrides.</p><p>On attribue ensuite les permissions au niveau du partage (rôles RBAC) puis les permissions NTFS sur les dossiers et fichiers.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers"
  ],
  "title": "Accès basé sur l'identité",
  "rows": [
   [
    "*Active Directory Domain Services (AD DS)",
    "Configurer"
   ],
   [
    "Microsoft Entra Domain Services",
    "Non"
   ],
   [
    "Microsoft Entra Kerberos",
    "Non"
   ]
  ]
 },
 "keep": "Comptes du domaine sur Azure Files = authentification AD DS (compte joint au domaine)."
},
{
 "id": "D2-050",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Les utilisateurs accèdent au partage share5 avec leur identité AD DS. Vous devez attribuer les permissions au niveau du partage, en respectant le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "srcs": [
  "Lecteur de partage SMB de données de fichier de stockage",
  "Contributeur de partage SMB de données de fichier de stockage",
  "Contributeur élevé de partage SMB de données de fichier de stockage",
  "Contributeur de compte de stockage"
 ],
 "tgtHead": [
  "Besoin",
  "Rôle"
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
 "id": "D2-051",
 "dom": 2,
 "type": "single",
 "stem": "<p>Tous les utilisateurs authentifiés de votre domaine doivent avoir au minimum l'accès en lecture au niveau du partage sur tous les partages de storage18, sans attribuer de rôle à chaque groupe.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "L'accès anonyme au niveau du conteneur",
  "Une permission par défaut au niveau du partage",
  "Une SAS de compte en lecture",
  "Le rôle Lecteur sur le compte de stockage"
 ],
 "ans": 1,
 "expl": "<p>La <b>permission par défaut au niveau du partage</b> s'applique à toutes les identités authentifiées qui n'ont pas de rôle explicite (par exemple Lecteur de partage SMB). Les permissions NTFS s'appliquent ensuite.</p><p>L'accès anonyme concerne les blobs. Une SAS n'utilise pas l'identité de l'utilisateur. Le rôle Lecteur donne la lecture du plan de contrôle, pas des fichiers.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage18",
   "Partages de fichiers"
  ],
  "title": "Permissions par défaut au niveau du partage",
  "rows": [
   [
    "*Activer les permissions pour tous les utilisateurs et groupes authentifiés",
    "Lecteur de partage SMB"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Accès de base pour tous les authentifiés = permission par défaut au niveau du partage."
},
{
 "id": "D2-052",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez synchroniser le dossier D:\\Donnees du serveur de fichiers FS1 avec le partage Azure share6, en gardant les fichiers peu utilisés uniquement dans Azure.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
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
 "keep": "File Sync : service, agent + inscription, groupe (1 partage), point de terminaison serveur."
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
 "id": "D2-054",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le serveur FS2 utilise Azure File Sync avec la hiérarchisation cloud. Le volume D: doit toujours garder au moins 20 % d'espace libre.</p><p>Quel paramètre devez-vous configurer ?</p>",
 "opts": [
  "La stratégie de date à 20 jours",
  "Le quota du partage Azure à 20 %",
  "La stratégie d'espace libre du volume à 20 %",
  "La rétention de la suppression réversible à 20 jours"
 ],
 "ans": 2,
 "expl": "<p>La <b>stratégie d'espace libre du volume</b> fait que File Sync hiérarchise (ne garde qu'un pointeur local) les fichiers les moins utilisés pour maintenir l'espace libre voulu. La <b>stratégie de date</b> hiérarchise en plus les fichiers non consultés depuis un nombre de jours.</p><p>Le quota limite la taille du partage dans Azure. La suppression réversible n'a pas de rapport.</p>",
 "portal": {
  "path": [
   "Services de synchronisation de stockage",
   "Sync1",
   "Groupe1",
   "FS2"
  ],
  "title": "Point de terminaison serveur",
  "rows": [
   [
    "Hiérarchisation cloud",
    "Activée"
   ],
   [
    "*Espace libre du volume",
    "20 %"
   ],
   [
    "Stratégie de date",
    "Facultative"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Garder X % libre = stratégie d'espace libre du volume ; vieux fichiers = stratégie de date."
},
{
 "id": "D2-055",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez copier tout le contenu du dossier local C:\\Exports, sous-dossiers compris, vers le conteneur exports de storage19, avec AzCopy et une SAS.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "azcopy {0} \"C:\\Exports\" \"https://storage19.{1}.core.windows.net/exports?&lt;SAS&gt;\" {2}",
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
 "keep": "AzCopy : copy / sync / make / remove ; --recursive pour les sous-dossiers."
},
{
 "id": "D2-056",
 "dom": 2,
 "type": "single",
 "stem": "<p>Chaque nuit, vous devez mettre à jour le conteneur backup avec les fichiers nouveaux ou modifiés du dossier D:\\Backup, et supprimer du conteneur les fichiers qui n'existent plus localement.</p><p>Quelle commande AzCopy devez-vous utiliser ?</p>",
 "opts": [
  "azcopy make",
  "azcopy copy avec --recursive",
  "azcopy copy avec --overwrite=false",
  "azcopy sync avec --delete-destination=true"
 ],
 "ans": 3,
 "expl": "<p><b>azcopy sync</b> compare la source et la destination (par la date de dernière modification) et ne copie que les différences. Avec <b>--delete-destination=true</b>, il supprime de la destination ce qui n'existe plus à la source.</p><p><code>azcopy copy</code> recopie tout et ne supprime jamais. <code>--overwrite=false</code> évite d'écraser, mais ne copie pas les fichiers modifiés et ne supprime rien. <code>make</code> crée un conteneur. Attention : sync est <b>unidirectionnel</b>.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "backup"
  ],
  "title": "backup | Vue d'ensemble",
  "rows": [
   [
    "*Synchronisation nocturne",
    "azcopy sync D:\\Backup <URL> --delete-destination=true"
   ]
  ]
 },
 "keep": "Miroir unidirectionnel = azcopy sync (+ --delete-destination pour supprimer)."
},
{
 "id": "D2-057",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez copier 500 Go de blobs du compte storageA vers le compte storageB, dans une autre région, le plus vite possible et sans faire transiter les données par votre poste.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "AzCopy copy entre les deux URL (copie de serveur à serveur)",
  "Robocopy",
  "Azure Import/Export",
  "Télécharger les blobs avec l'Explorateur Stockage puis les charger"
 ],
 "ans": 0,
 "expl": "<p>Quand la source et la destination sont toutes deux des URL de stockage Azure, <b>AzCopy</b> utilise les API de copie de <b>serveur à serveur</b> : les données vont directement d'un compte à l'autre, sans passer par la machine qui lance la commande.</p><p>Télécharger puis charger fait transiter les données par votre poste. Import/Export utilise des disques physiques. Robocopy ne sait pas écrire dans des blobs.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storageB"
  ],
  "title": "Copie de serveur à serveur",
  "rows": [
   [
    "*Source",
    "https://storageA.blob.core.windows.net/…?SAS"
   ],
   [
    "Destination",
    "https://storageB.blob.core.windows.net/…?SAS"
   ]
  ]
 },
 "keep": "Entre deux comptes Azure, AzCopy copie de serveur à serveur."
},
{
 "id": "D2-058",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez transférer 60 To de données d'un centre de données vers Azure. La connexion Internet est de 100 Mbit/s et le transfert doit être terminé en deux semaines.</p><p>Quelle solution devez-vous utiliser ?</p>",
 "opts": [
  "Azure File Sync",
  "Azure Data Box",
  "Un VPN site à site",
  "AzCopy sur Internet"
 ],
 "ans": 1,
 "expl": "<p>À 100 Mbit/s, 60 To prendraient plus de <b>55 jours</b> de transfert continu. <b>Azure Data Box</b> est un appareil physique que Microsoft vous envoie : vous y copiez les données sur votre réseau local, vous le renvoyez, et Microsoft les charge dans votre compte de stockage.</p><p>AzCopy, File Sync et un VPN passent tous par la même connexion trop lente.</p>",
 "portal": {
  "path": [
   "Azure Data Box",
   "Commander"
  ],
  "title": "Commander un Data Box",
  "rows": [
   [
    "*Produit",
    "Data Box (≈ 80 To utilisables)"
   ],
   [
    "Destination",
    "Compte de stockage"
   ]
  ],
  "btn": "Commander"
 },
 "keep": "Gros volume + lien lent = Data Box (calculer : 60 To à 100 Mbit/s ≈ 55 jours)."
},
{
 "id": "D2-059",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous utilisez le service <b>Azure Import/Export</b> pour importer des données depuis vos propres disques.</p><p>Quel outil devez-vous utiliser pour préparer les disques avant de les envoyer ?</p>",
 "opts": [
  "Robocopy seul",
  "Azure Storage Explorer",
  "WAImportExport",
  "AzCopy"
 ],
 "ans": 2,
 "expl": "<p>L'outil <b>WAImportExport</b> prépare les disques : il copie les données, les chiffre avec <b>BitLocker</b> et génère les fichiers journaux nécessaires à la tâche d'importation. (Pour Azure Files, un fichier CSV décrit les données.)</p><p>AzCopy et Storage Explorer transfèrent par le réseau. Robocopy seul ne produit ni chiffrement ni journal d'importation.</p>",
 "portal": {
  "path": [
   "Tâches d'importation/exportation",
   "Créer"
  ],
  "title": "Créer une tâche d'importation",
  "rows": [
   [
    "*Fichier journal",
    "Généré par WAImportExport"
   ],
   [
    "Chiffrement",
    "BitLocker"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Import/Export avec vos disques = WAImportExport (BitLocker + journaux)."
},
{
 "id": "D2-060",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un développeur veut parcourir les blobs, les partages de fichiers et les files d'attente de plusieurs comptes de stockage depuis une application de bureau, et gérer des SAS.</p><p>Que devez-vous lui recommander ?</p>",
 "opts": [
  "Azure Data Box",
  "Microsoft Entra Connect",
  "Azure File Sync",
  "Azure Storage Explorer"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Storage Explorer</b> est une application gratuite (Windows, macOS, Linux) pour gérer les blobs, fichiers, files d'attente et tables, créer des SAS, modifier les niveaux d'accès, etc. Elle utilise AzCopy pour les transferts.</p><p>Data Box est un appareil de transfert, File Sync synchronise des serveurs, Entra Connect synchronise des identités.</p>",
 "portal": {
  "path": [
   "Azure Storage Explorer"
  ],
  "title": "Azure Storage Explorer",
  "rows": [
   [
    "*Explorateur",
    "Comptes · Blobs · Fichiers · Files d'attente · Tables"
   ],
   [
    "Clic droit",
    "Obtenir une signature d'accès partagé"
   ]
  ]
 },
 "keep": "Application de bureau pour le stockage = Azure Storage Explorer."
},
{
 "id": "D2-061",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez héberger un site web statique (HTML, CSS, JavaScript) dans storage20, au coût le plus bas.</p><p>Où devez-vous charger les fichiers après avoir activé la fonctionnalité Site web statique ?</p>",
 "opts": [
  "Dans le conteneur $web",
  "Dans le conteneur $root",
  "Dans un partage de fichiers nommé www",
  "Dans une table nommée web"
 ],
 "ans": 0,
 "expl": "<p>L'activation du <b>site web statique</b> crée le conteneur <b>$web</b>. On y charge les fichiers, et on indique le document d'index (index.html) et la page d'erreur 404. Le site est servi à l'adresse <code>&lt;compte&gt;.z&lt;n&gt;.web.core.windows.net</code>.</p><p>Le conteneur $root sert à l'adresse racine du service blob, pas au site web statique.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage20"
  ],
  "title": "storage20 | Site web statique",
  "menu": [
   "*Site web statique"
  ],
  "rows": [
   [
    "*Site web statique",
    "Activé · conteneur $web"
   ],
   [
    "Nom du document d'index",
    "index.html"
   ],
   [
    "Chemin du document d'erreur",
    "404.html"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Site statique = conteneur $web."
},
{
 "id": "D2-062",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez stocker des données pour Azure Synapse avec des dossiers réels (renommer un dossier doit être une opération unique et rapide) et des listes de contrôle d'accès POSIX.</p><p>Quelle option devez-vous activer sur le compte Standard universel v2 ?</p>",
 "opts": [
  "Le contrôle de version des blobs",
  "L'espace de noms hiérarchique (Data Lake Storage Gen2)",
  "Le protocole NFS 3.0 uniquement",
  "Les étendues de chiffrement"
 ],
 "ans": 1,
 "expl": "<p>L'<b>espace de noms hiérarchique</b> transforme le stockage blob en <b>Azure Data Lake Storage Gen2</b> : vrais répertoires (renommer ou supprimer un dossier est atomique), ACL de type POSIX sur les dossiers et fichiers, point de terminaison <code>dfs.core.windows.net</code>.</p><p>On l'active à la création, ou par une mise à niveau irréversible d'un compte existant. Certaines fonctions blob (comme la réplication d'objets) ne sont pas compatibles.</p>",
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
    "*Activer l'espace de noms hiérarchique",
    "Coché (Data Lake Storage Gen2)"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Vrais dossiers + ACL POSIX = espace de noms hiérarchique (Data Lake Gen2)."
},
{
 "id": "D2-063",
 "dom": 2,
 "type": "single",
 "stem": "<p>Des machines Linux doivent monter un conteneur blob avec le protocole <b>NFS 3.0</b>.</p><p>Quelle condition le compte de stockage doit-il remplir ?</p>",
 "opts": [
  "Être un compte Premium partages de fichiers",
  "Utiliser la redondance GRS",
  "Avoir l'espace de noms hiérarchique activé et l'accès réseau limité à des réseaux virtuels",
  "Avoir l'accès anonyme activé"
 ],
 "ans": 2,
 "expl": "<p>NFS 3.0 sur le stockage <b>blob</b> exige l'<b>espace de noms hiérarchique</b>, activé à la création avec l'option NFS v3, et un accès réseau restreint (réseaux virtuels sélectionnés ou point de terminaison privé), car NFS 3.0 n'utilise pas d'authentification par compte.</p><p>Le compte Premium partages de fichiers concerne NFS sur <b>Azure Files</b>, un autre service. La redondance et l'accès anonyme ne sont pas en cause.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Créer un compte de stockage",
  "menu": [
   "Informations de base",
   "*Avancé",
   "Mise en réseau"
  ],
  "rows": [
   [
    "*Espace de noms hiérarchique",
    "Activé"
   ],
   [
    "*Activer le protocole NFS v3",
    "Coché"
   ],
   [
    "Accès réseau",
    "Réseaux virtuels sélectionnés"
   ]
  ]
 },
 "keep": "NFS 3.0 sur blobs = espace de noms hiérarchique + accès réseau restreint."
},
{
 "id": "D2-064",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez permettre à un partenaire de déposer des fichiers dans un conteneur blob avec un client <b>SFTP</b>, sans utiliser de SAS ni de clé d'accès.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Activer le site web statique",
  "Créer un partage NFS",
  "Activer l'accès anonyme en écriture",
  "Activer SFTP sur un compte avec espace de noms hiérarchique et créer un utilisateur local"
 ],
 "ans": 3,
 "expl": "<p>Le <b>support SFTP</b> d'Azure Blob Storage exige l'<b>espace de noms hiérarchique</b>. On crée des <b>utilisateurs locaux</b> (avec mot de passe ou clé SSH) auxquels on donne des autorisations sur des conteneurs.</p><p>Le site web statique est en lecture seule. NFS n'est pas SFTP. L'accès anonyme ne permet jamais l'écriture.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | SFTP",
  "menu": [
   "*SFTP"
  ],
  "rows": [
   [
    "*SFTP",
    "Activé"
   ],
   [
    "*Utilisateur local",
    "partenaire1 · clé SSH · conteneur depot"
   ]
  ],
  "btn": "+ Ajouter un utilisateur local"
 },
 "keep": "SFTP sur blobs = espace de noms hiérarchique + utilisateurs locaux."
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
 },
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
 "keep": "Zone + région sans lecture secondaire = GZRS ; HTTPS = transfert sécurisé."
},
{
 "id": "D2-067",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous configurez la protection des données de storage22 : les blobs supprimés doivent être récupérables pendant 14 jours, les conteneurs supprimés pendant 7 jours, et les versions précédentes des blobs écrasés doivent être conservées. La restauration à un point dans le temps n'est pas demandée.</p><p>Comment devez-vous configurer la page ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
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
 "keep": "Trois protections indépendantes : blobs, conteneurs, versions."
},
{
 "id": "D2-068",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez régénérer key2 du compte de stockage storage23.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
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
 "keep": "Clés d'accès = key1/key2, rotation et rappel."
},
{
 "id": "D2-069",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez configurer storage24 pour que les blobs passent automatiquement au niveau Archive après 180 jours sans modification.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
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
 "keep": "Changement de niveau automatique = Gestion du cycle de vie."
}
);
