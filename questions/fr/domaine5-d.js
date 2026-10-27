/* Domaine 5 : supervision et sauvegarde (lot D : D5-111 à D5-160) */
AZ.questions.push(
{
 "id": "D5-111",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez attribuer le rôle Azure Backup adapté à chaque besoin, en respectant le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "srcs": [
  "Lecteur de sauvegarde",
  "Opérateur de sauvegarde",
  "Contributeur de sauvegarde",
  "Propriétaire"
 ],
 "tgtHead": [
  "Besoin",
  "Rôle"
 ],
 "tgts": [
  {
   "l": "Consulter l'état des travaux de sauvegarde, sans rien modifier",
   "a": 0
  },
  {
   "l": "Lancer des sauvegardes et des restaurations, sans supprimer la protection",
   "a": 1
  },
  {
   "l": "Créer des stratégies et gérer la protection, sans gérer les accès au coffre",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Lecteur de sauvegarde</b> : consultation.</li><li><b>Opérateur de sauvegarde</b> : sauvegarder, restaurer, activer la protection, mais pas supprimer la sauvegarde ni créer de stratégies.</li><li><b>Contributeur de sauvegarde</b> : gestion complète de la sauvegarde, sauf la suppression du coffre et la gestion des accès.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Ajouter une attribution de rôle",
  "rows": [
   [
    "Lecteur de sauvegarde",
    "Consulter"
   ],
   [
    "*Opérateur de sauvegarde",
    "Sauvegarder / restaurer"
   ],
   [
    "Contributeur de sauvegarde",
    "Stratégies + protection"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Lecteur = voir ; Opérateur = sauvegarder/restaurer ; Contributeur = gérer (sans accès)."
},
{
 "id": "D5-112",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous configurez la sauvegarde de disques managés avec un coffre de sauvegarde (Backup vault). La configuration échoue pour des questions d'autorisations.</p><p>Quels rôles l'identité managée du coffre doit-elle avoir ?</p>",
 "opts": [
  "Lecteur de sauvegarde de disque sur le disque, et Contributeur d'instantané de disque sur le groupe de ressources des instantanés",
  "Contributeur de machines virtuelles sur la VM",
  "Lecteur sur le coffre",
  "Propriétaire de l'abonnement"
 ],
 "ans": 0,
 "expl": "<p>La sauvegarde de disques crée des <b>instantanés incrémentiels</b> dans un groupe de ressources choisi. L'identité managée du coffre a besoin de <b>Lecteur de sauvegarde de disque</b> sur chaque disque et de <b>Contributeur d'instantané de disque</b> sur le groupe de ressources des instantanés. Le portail propose de les attribuer.</p>",
 "portal": {
  "path": [
   "Coffres de sauvegarde",
   "bv1"
  ],
  "title": "Configurer la sauvegarde › Disques",
  "rows": [
   [
    "*Disque",
    "Lecteur de sauvegarde de disque"
   ],
   [
    "*RG des instantanés",
    "Contributeur d'instantané de disque"
   ]
  ],
  "btn": "Attribuer les rôles manquants"
 },
 "keep": "Sauvegarde de disques = rôles de l'identité du coffre sur disque + RG d'instantanés."
},
{
 "id": "D5-113",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une base SQL Server tourne sur VM16. Vous voulez des sauvegardes complètes quotidiennes et des sauvegardes de journaux toutes les 15 minutes, gérées par Azure Backup.</p><p>Quelle solution devez-vous configurer ?</p>",
 "opts": [
  "L'agent MARS",
  "La sauvegarde « SQL Server dans une VM Azure » dans un coffre Recovery Services",
  "La sauvegarde de la VM uniquement",
  "Azure Site Recovery"
 ],
 "ans": 1,
 "expl": "<p>La sauvegarde <b>SQL Server dans une VM Azure</b> utilise l'extension de charge de travail SQL : elle découvre les bases, et permet des sauvegardes complètes, différentielles et de <b>journaux</b> (jusqu'à toutes les 15 minutes), avec restauration à un point dans le temps.</p><p>La sauvegarde de la VM seule ne capture pas les journaux de transactions toutes les 15 minutes.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Objectif de sauvegarde",
  "rows": [
   [
    "*Quoi",
    "SQL Server dans une VM Azure"
   ],
   [
    "Journaux",
    "Toutes les 15 min"
   ]
  ]
 },
 "keep": "SQL avec journaux = sauvegarde SQL Server dans une VM Azure."
},
{
 "id": "D5-114",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez sauvegarder des charges locales (serveurs Hyper-V, SQL Server, Exchange) avec un serveur de sauvegarde local, puis envoyer des copies vers Azure.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Azure File Sync",
  "Azure Site Recovery uniquement",
  "Microsoft Azure Backup Server (MABS)",
  "L'agent MARS seul"
 ],
 "ans": 2,
 "expl": "<p><b>MABS</b> (ou System Center DPM) sauvegarde des charges applicatives locales sur disque, puis envoie des copies vers un coffre Recovery Services. L'agent MARS seul ne sauvegarde que des fichiers, des dossiers et l'état du système.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Objectif de sauvegarde",
  "rows": [
   [
    "Où",
    "Local"
   ],
   [
    "*Quoi",
    "Hyper-V, SQL, Exchange → MABS"
   ]
  ]
 },
 "keep": "Charges applicatives locales = MABS/DPM."
},
{
 "id": "D5-115",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous avez restauré, avec la restauration de fichiers, le dossier Paie de share2 vers un autre partage, share-restore, dans un autre compte de stockage.</p><p>Comment s'appelle ce type de restauration ?</p>",
 "opts": [
  "Reprotection",
  "Basculement",
  "Restauration à l'emplacement d'origine",
  "Restauration vers un autre emplacement"
 ],
 "ans": 3,
 "expl": "<p>La sauvegarde Azure Files permet de restaurer un partage entier ou des fichiers à l'<b>emplacement d'origine</b> (en écrasant ou en conservant les fichiers en conflit) ou vers un <b>autre emplacement</b> (autre partage, éventuellement dans un autre compte de la même région).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "stfiles",
   "share2"
  ],
  "title": "Restauration de fichiers",
  "rows": [
   [
    "*Emplacement de restauration",
    "Autre emplacement · share-restore"
   ]
  ],
  "btn": "Restaurer"
 },
 "keep": "Restaurer ailleurs = restauration vers un autre emplacement."
},
{
 "id": "D5-116",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une VM Linux héberge une base MySQL. Vous voulez que la sauvegarde Azure de la VM soit cohérente avec l'application.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Des scripts pre et post (framework de scripts de pré/post-sauvegarde) qui figent puis libèrent la base",
  "Une alerte de métrique",
  "Le service VSS",
  "La console série"
 ],
 "ans": 0,
 "expl": "<p>Linux n'a pas de VSS. Azure Backup fournit un <b>framework de scripts pre/post</b> : le script pre fige l'application (vidage et verrouillage), l'instantané est pris, puis le script post libère l'application. Sans scripts, la sauvegarde est cohérente avec le <b>système de fichiers</b>.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "vm-mysql"
  ],
  "title": "/etc/azure/VMSnapshotScriptPluginConfig.json",
  "rows": [
   [
    "*preScriptLocation",
    "/opt/scripts/freeze.sh"
   ],
   [
    "postScriptLocation",
    "/opt/scripts/thaw.sh"
   ]
  ]
 },
 "keep": "Cohérence applicative Linux = scripts pre/post."
},
{
 "id": "D5-117",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez restaurer une VM dans la région jumelée à partir d'un coffre GRS, mais l'option Région secondaire n'apparaît pas.</p><p>Que devez-vous vérifier ?</p>",
 "opts": [
  "Que la stratégie est quotidienne",
  "Que la restauration interrégion (Cross Region Restore) est activée sur le coffre",
  "Que le coffre est en LRS",
  "Que la VM est arrêtée"
 ],
 "ans": 1,
 "expl": "<p>La <b>restauration interrégion</b> doit être activée dans les propriétés du coffre (qui doit être en GRS). Ensuite, les points de récupération répliqués apparaissent sous l'option Région secondaire, avec un léger délai de réplication.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Configuration de la sauvegarde",
  "rows": [
   [
    "Redondance",
    "Géoredondant"
   ],
   [
    "*Restauration interrégion",
    "Activer"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Option Région secondaire = activer la restauration interrégion."
},
{
 "id": "D5-118",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez savoir combien de jours il reste avant la suppression définitive des données de sauvegarde supprimées de façon réversible d'une VM.</p><p>Où devez-vous regarder ?</p>",
 "opts": [
  "Dans Network Watcher",
  "Dans Azure Advisor",
  "Dans l'élément de sauvegarde (état Suppression réversible) du coffre",
  "Dans le journal d'activité de la VM"
 ],
 "ans": 2,
 "expl": "<p>Les éléments supprimés de façon réversible restent visibles dans le coffre, avec l'état <b>Suppression réversible</b> et le nombre de jours restants. On peut les <b>annuler la suppression</b> pour reprendre la protection.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM1"
  ],
  "title": "VM1",
  "rows": [
   [
    "*État",
    "Suppression réversible · 9 jours restants"
   ]
  ],
  "btn": "Annuler la suppression"
 },
 "keep": "Jours restants = élément de sauvegarde en suppression réversible."
},
{
 "id": "D5-119",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM17 a été supprimée par erreur hier. Elle était protégée par Azure Backup, et ses données de sauvegarde existent encore.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Utiliser Azure Site Recovery",
  "Recréer la VM et attendre la prochaine sauvegarde",
  "Rien n'est possible, puisque la VM n'existe plus",
  "Restaurer depuis l'élément de sauvegarde avec l'option Créer une machine virtuelle"
 ],
 "ans": 3,
 "expl": "<p>Les points de récupération restent dans le coffre même si la VM est supprimée. On ouvre l'élément de sauvegarde et on <b>crée une nouvelle VM</b> (ou on restaure les disques) à partir du dernier point.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM17"
  ],
  "title": "Restaurer la machine virtuelle",
  "rows": [
   [
    "*Configuration",
    "Créer une machine virtuelle"
   ],
   [
    "Point",
    "Dernier"
   ]
  ],
  "btn": "Restaurer"
 },
 "keep": "VM supprimée mais sauvegardée = restaurer depuis le coffre."
},
{
 "id": "D5-120",
 "dom": 5,
 "type": "single",
 "stem": "<p>La sauvegarde de VM18 a fonctionné, mais vous voulez lancer une récupération de fichiers depuis une machine sous un autre système d'exploitation.</p><p>Quelle condition faut-il respecter ?</p>",
 "opts": [
  "La machine qui exécute le script doit avoir un système compatible avec les systèmes de fichiers du disque sauvegardé",
  "Il faut arrêter VM18",
  "Le coffre doit être en LRS",
  "La machine doit être dans le même groupe de ressources"
 ],
 "ans": 0,
 "expl": "<p>Le script de récupération de fichiers monte les volumes : la machine qui l'exécute doit pouvoir lire leurs <b>systèmes de fichiers</b> (par exemple un serveur Windows récent pour NTFS, une distribution Linux compatible pour ext4 ou LVM). Elle doit aussi pouvoir joindre le service de récupération par le réseau.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM18"
  ],
  "title": "Récupération de fichiers",
  "rows": [
   [
    "*Machine du script",
    "OS compatible avec les systèmes de fichiers"
   ]
  ]
 },
 "keep": "Script de récupération = machine qui lit ces systèmes de fichiers."
},
{
 "id": "D5-121",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Le journal d'activité contient plusieurs catégories d'événements.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Création, modification et suppression de ressources :",
   "o": [
    "Stratégie",
    "Mise à l'échelle automatique",
    "Administratif"
   ],
   "a": 2
  },
  {
   "l": "Actions d'effet Deny ou Audit d'Azure Policy :",
   "o": [
    "Recommandation",
    "Administratif",
    "Stratégie"
   ],
   "a": 2
  },
  {
   "l": "Ajout d'instances par une règle de mise à l'échelle :",
   "o": [
    "Service Health",
    "Sécurité",
    "Mise à l'échelle automatique"
   ],
   "a": 2
  }
 ],
 "expl": "<p>Catégories du journal d'activité : <b>Administratif</b>, <b>Service Health</b>, <b>Resource Health</b>, <b>Alerte</b>, <b>Mise à l'échelle automatique</b>, <b>Recommandation</b> (Advisor), <b>Sécurité</b> (Defender), <b>Stratégie</b> (Azure Policy).</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Journal d'activité"
  ],
  "title": "Catégorie d'événement",
  "rows": [
   [
    "*Administratif",
    "Créer / modifier / supprimer"
   ],
   [
    "Stratégie",
    "Azure Policy"
   ],
   [
    "Mise à l'échelle automatique",
    "Instances"
   ]
  ]
 },
 "keep": "Catégories : Administratif, Stratégie, Mise à l'échelle, Service Health, Sécurité…"
},
{
 "id": "D5-122",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les VM d'un réseau isolé (sans accès Internet) doivent envoyer leurs données à Log Analytics par des adresses privées.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une passerelle NAT",
  "Un Azure Monitor Private Link Scope (AMPLS) avec un point de terminaison privé",
  "Un point de terminaison de service Microsoft.Storage",
  "Un équilibreur de charge public"
 ],
 "ans": 1,
 "expl": "<p>Un <b>Azure Monitor Private Link Scope</b> regroupe des ressources Azure Monitor (espaces de travail, points de terminaison de collecte de données, Application Insights) et les expose par un <b>point de terminaison privé</b> dans votre réseau virtuel. L'agent envoie alors ses données sans passer par Internet.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Étendues de liaison privée"
  ],
  "title": "Créer un AMPLS",
  "rows": [
   [
    "*Ressources",
    "LAW1, DCE1"
   ],
   [
    "Point de terminaison privé",
    "vnet-isolé"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Supervision sans Internet = AMPLS + point de terminaison privé."
},
{
 "id": "D5-123",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une règle de collecte de données récupère beaucoup d'événements Windows inutiles, et l'ingestion coûte cher.</p><p>Comment réduire le volume au plus tôt ?</p>",
 "opts": [
  "Désactiver l'agent uniquement le week-end",
  "Augmenter la rétention",
  "Filtrer les événements dans la DCR (requête XPath ou transformation KQL)",
  "Ajouter un second espace de travail"
 ],
 "ans": 2,
 "expl": "<p>Une <b>règle de collecte de données</b> peut filtrer les événements avec des <b>requêtes XPath</b>, et appliquer une <b>transformation KQL</b> pour supprimer des lignes ou des colonnes avant l'ingestion. On ne paie que ce qui est ingéré.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Règles de collecte de données"
  ],
  "title": "Source › Journaux des événements Windows",
  "rows": [
   [
    "*XPath",
    "Application!*[System[(Level=1 or Level=2)]]"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Réduire l'ingestion = filtre XPath / transformation dans la DCR."
},
{
 "id": "D5-124",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez afficher la mémoire disponible d'une VM Windows dans Metrics Explorer, avec les autres métriques de la VM.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Rien : la mémoire disponible est une métrique de plateforme de toutes les VM, toujours disponible avec le même détail",
  "Créer une alerte de journal d'activité",
  "Activer les diagnostics de démarrage",
  "Collecter les compteurs invités avec l'agent Azure Monitor et une DCR qui envoie vers Azure Monitor Metrics"
 ],
 "ans": 3,
 "expl": "<p>Les compteurs invités (mémoire, espace disque par volume…) sont collectés par l'<b>agent Azure Monitor</b>. Une DCR peut les envoyer vers <b>Azure Monitor Metrics</b> (espace de noms de métriques invitées) ou vers Log Analytics. La plateforme fournit aujourd'hui une métrique « Available Memory Bytes » pour de nombreuses VM, mais le détail invité passe par l'agent.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Règles de collecte de données"
  ],
  "title": "Destination",
  "rows": [
   [
    "*Azure Monitor Metrics",
    "Compteurs invités"
   ]
  ]
 },
 "keep": "Compteurs invités dans Metrics Explorer = AMA + DCR vers Azure Monitor Metrics."
},
{
 "id": "D5-125",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez un score qui mesure globalement l'application des bonnes pratiques Azure (fiabilité, sécurité, performances, coût, excellence opérationnelle) dans vos abonnements.</p><p>Que devez-vous consulter ?</p>",
 "opts": [
  "Le score Azure Advisor",
  "Resource Health",
  "Le journal d'activité",
  "Le score de conformité Azure Policy"
 ],
 "ans": 0,
 "expl": "<p>Le <b>score Advisor</b> indique, en pourcentage, dans quelle mesure vos ressources suivent les recommandations d'Advisor, par catégorie et globalement, avec son évolution dans le temps.</p>",
 "portal": {
  "path": [
   "Advisor"
  ],
  "title": "Advisor | Score",
  "menu": [
   "*Score Advisor"
  ],
  "rows": [
   [
    "*Score global",
    "78 %"
   ]
  ]
 },
 "keep": "Score des bonnes pratiques = score Advisor."
},
{
 "id": "D5-126",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une alerte Advisor doit prévenir l'équipe dès qu'une nouvelle recommandation de coût élevé apparaît.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une stratégie de sauvegarde",
  "Une alerte Advisor (basée sur le journal d'activité) avec un groupe d'actions",
  "Une alerte de métrique",
  "Une règle de collecte de données"
 ],
 "ans": 1,
 "expl": "<p>Les <b>alertes Advisor</b> se déclenchent quand une nouvelle recommandation est créée, filtrée par catégorie et impact. Elles reposent sur la catégorie <b>Recommandation</b> du journal d'activité et utilisent des groupes d'actions.</p>",
 "portal": {
  "path": [
   "Advisor",
   "Alertes"
  ],
  "title": "Nouvelle alerte Advisor",
  "rows": [
   [
    "*Catégorie",
    "Coût · impact élevé"
   ],
   [
    "Groupe d'actions",
    "AG-Finance"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Nouvelle recommandation = alerte Advisor."
},
{
 "id": "D5-127",
 "dom": 5,
 "type": "single",
 "stem": "<p>Un développeur doit pouvoir lire toutes les données d'un espace de travail Log Analytics et exécuter des requêtes, sans modifier sa configuration.</p><p>Quel rôle devez-vous lui attribuer sur l'espace de travail ?</p>",
 "opts": [
  "Propriétaire",
  "Contributeur de surveillance",
  "Lecteur Log Analytics",
  "Contributeur Log Analytics"
 ],
 "ans": 2,
 "expl": "<p><b>Lecteur Log Analytics</b> permet de voir et d'interroger toutes les données de supervision et les paramètres. <b>Contributeur Log Analytics</b> permet aussi de modifier la configuration (agents, solutions, paramètres).</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Ajouter une attribution de rôle",
  "rows": [
   [
    "*Rôle",
    "Lecteur Log Analytics"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Lire et interroger = Lecteur Log Analytics."
},
{
 "id": "D5-128",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez interroger en une seule requête KQL deux espaces de travail, WS-Paris et WS-Lyon.</p><p>Quelle fonction devez-vous utiliser ?</p>",
 "opts": [
  "join kind=workspace",
  "ago(\"WS-Lyon\")",
  "bin(\"WS-Lyon\")",
  "workspace(\"WS-Lyon\").Event, combiné avec union"
 ],
 "ans": 3,
 "expl": "<p>La fonction <b>workspace()</b> référence une table d'un autre espace de travail : <code>union Event, workspace(\"WS-Lyon\").Event</code>. On a besoin de l'accès en lecture aux deux espaces de travail.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS-Paris"
  ],
  "title": "Journaux",
  "rows": [
   [
    "*union Event, workspace(\"WS-Lyon\").Event",
    ""
   ]
  ],
  "btn": "Exécuter"
 },
 "keep": "Plusieurs espaces de travail = workspace() + union."
},
{
 "id": "D5-129",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une requête KQL doit afficher pour chaque ordinateur le nombre d'événements et le dernier événement reçu.</p><p>Quelle ligne correspond ?</p>",
 "opts": [
  "| summarize Nombre = count(), Dernier = max(TimeGenerated) by Computer",
  "| project Nombre = count() by Computer",
  "| where count() by Computer",
  "| extend Nombre = count() by Computer"
 ],
 "ans": 0,
 "expl": "<p><b>summarize</b> accepte plusieurs agrégations à la fois, séparées par des virgules, regroupées par une ou plusieurs colonnes. <code>project</code>, <code>extend</code> et <code>where</code> ne regroupent pas.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Journaux",
  "rows": [
   [
    "*summarize",
    "count(), max(TimeGenerated) by Computer"
   ]
  ]
 },
 "keep": "Plusieurs agrégations = summarize a, b by …"
},
{
 "id": "D5-130",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous écrivez une requête KQL qui ne doit renvoyer que les événements dont le message contient le mot « timeout », sans tenir compte de la casse.</p><p>Quel opérateur devez-vous utiliser ?</p>",
 "opts": [
  "where RenderedDescription == \"timeout\"",
  "where RenderedDescription contains \"timeout\"",
  "summarize contains \"timeout\"",
  "project RenderedDescription has_cs \"timeout\""
 ],
 "ans": 1,
 "expl": "<p><b>contains</b> cherche une sous-chaîne, sans tenir compte de la casse. <b>==</b> exige une égalité exacte. <b>has</b> cherche un terme entier (plus performant) ; les variantes <b>_cs</b> respectent la casse.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Journaux",
  "rows": [
   [
    "*contains",
    "Sous-chaîne, sans casse"
   ],
   [
    "has",
    "Terme entier"
   ],
   [
    "==",
    "Égalité exacte"
   ]
  ]
 },
 "keep": "contains = sous-chaîne ; has = mot ; _cs = sensible à la casse."
},
{
 "id": "D5-131",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous gérez des espaces de travail Log Analytics.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "La rétention peut être définie différemment pour chaque table.",
   "a": 0
  },
  {
   "l": "Une VM peut envoyer des données à plusieurs espaces de travail avec l'agent Azure Monitor.",
   "a": 0
  },
  {
   "l": "Supprimer un espace de travail le supprime immédiatement et définitivement, sans possibilité de récupération.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Rétention par table : Oui.</b></li><li><b>Plusieurs espaces de travail : Oui</b>, avec plusieurs DCR ou destinations (l'ancien agent était limité).</li><li><b>Suppression : Non.</b> Un espace de travail supprimé passe en <b>suppression réversible</b> pendant 14 jours et peut être récupéré (sauf suppression forcée).</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Propriétés",
  "rows": [
   [
    "Rétention",
    "Par table"
   ],
   [
    "*Suppression",
    "Réversible · 14 jours"
   ]
  ]
 },
 "keep": "Rétention par table ; plusieurs destinations ; suppression réversible 14 j."
},
{
 "id": "D5-132",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous gérez les alertes de métrique.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une même règle d'alerte de métrique peut surveiller plusieurs VM de la même région et du même type.",
   "a": 0
  },
  {
   "l": "Une alerte de métrique peut utiliser plusieurs conditions (par exemple CPU et réseau).",
   "a": 0
  },
  {
   "l": "Une alerte de métrique ne peut notifier que par e-mail.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Plusieurs ressources : Oui</b>, les alertes de métrique multi-ressources fonctionnent pour un même type de ressource dans une même région.</li><li><b>Plusieurs conditions : Oui</b>, combinées en ET.</li><li><b>Seulement e-mail : Non</b>, tout ce que propose le groupe d'actions est utilisable.</li></ul>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Règle d'alerte de métrique",
  "rows": [
   [
    "*Étendue",
    "10 VM · même région"
   ],
   [
    "Conditions",
    "CPU ET réseau"
   ]
  ]
 },
 "keep": "Métrique : multi-ressources, multi-conditions, toutes les actions."
},
{
 "id": "D5-133",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous choisissez entre Service Health, Resource Health et Advisor.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Une panne Azure Storage touche toute la région West Europe :",
   "o": [
    "Service Health",
    "Advisor",
    "Resource Health"
   ],
   "a": 0
  },
  {
   "l": "Votre VM VM19 est indisponible à cause d'un redémarrage de l'hôte :",
   "o": [
    "Service Health",
    "Advisor",
    "Resource Health"
   ],
   "a": 2
  },
  {
   "l": "Vos VM n'ont pas de sauvegarde configurée :",
   "o": [
    "Advisor",
    "Resource Health",
    "Service Health"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Service Health</b> : incidents et maintenances des services Azure dans les régions que vous utilisez.</li><li><b>Resource Health</b> : état d'une de vos ressources.</li><li><b>Advisor</b> : recommandations, par exemple activer la sauvegarde (catégorie Fiabilité).</li></ul>",
 "portal": {
  "path": [
   "Moniteur"
  ],
  "title": "Intégrité",
  "rows": [
   [
    "*Service Health",
    "Panne régionale"
   ],
   [
    "Resource Health",
    "Ma ressource"
   ],
   [
    "Advisor",
    "Recommandations"
   ]
  ]
 },
 "keep": "Région = Service Health ; ressource = Resource Health ; conseil = Advisor."
},
{
 "id": "D5-134",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Une stratégie de sauvegarde de VM est configurée avec une sauvegarde quotidienne à 21 h et une rétention de 7 jours. Une sauvegarde à la demande a été lancée aujourd'hui avec une conservation jusqu'au 31 décembre.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Le point quotidien d'il y a 10 jours est-il encore disponible ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "Le point à la demande d'aujourd'hui sera-t-il disponible dans 3 semaines (avant le 31 décembre) ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  },
  {
   "l": "La stratégie s'applique aussi aux nouvelles VM qu'on y associe ensuite :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>10 jours : Non</b>, la rétention quotidienne est de 7 jours.</li><li><b>Point à la demande : Oui</b>, il a sa propre date de conservation.</li><li><b>Nouvelles VM : Oui</b>, une stratégie peut protéger plusieurs VM.</li></ul>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM1"
  ],
  "title": "Points de restauration",
  "rows": [
   [
    "Quotidien",
    "7 jours"
   ],
   [
    "*À la demande",
    "Jusqu'au 31 décembre"
   ]
  ]
 },
 "keep": "Point à la demande = sa propre date ; stratégie partageable."
},
{
 "id": "D5-135",
 "dom": 5,
 "type": "screen",
 "stem": "<p>Vous créez une alerte de recherche dans les journaux sur l'espace de travail WS5. Elle doit s'exécuter toutes les 10 minutes sur les 10 dernières minutes, et se déclencher si la requête renvoie plus de 5 lignes.</p><p>Comment devez-vous configurer la condition ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Créer une règle d'alerte",
  "sub": "WS5 | Recherche dans les journaux",
  "rows": [
   {
    "k": "text",
    "l": "Requête",
    "t": "SecurityEvent | where EventID == 4625"
   },
   {
    "k": "select",
    "l": "Mesure",
    "o": [
     "Lignes de table",
     "CounterValue"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Type d'agrégation",
    "o": [
     "Nombre",
     "Moyenne",
     "Maximum"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Granularité d'agrégation (période)",
    "o": [
     "5 minutes",
     "10 minutes",
     "1 heure"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Opérateur",
    "o": [
     "Supérieur à",
     "Inférieur à"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Valeur de seuil",
    "o": [
     "0",
     "5",
     "10"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Fréquence d'évaluation",
    "o": [
     "1 minute",
     "10 minutes",
     "1 heure"
    ],
    "a": 1
   }
  ]
 },
 "expl": "<ul><li>Mesure <b>Lignes de table</b>, agrégation <b>Nombre</b>.</li><li>Période <b>10 minutes</b> et fréquence <b>10 minutes</b>.</li><li><b>Supérieur à 5</b>.</li></ul><p>L'événement 4625 correspond à un échec d'ouverture de session Windows.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS5"
  ],
  "title": "Condition",
  "rows": [
   [
    "*Lignes de table · Nombre",
    "> 5"
   ],
   [
    "Période / fréquence",
    "10 min / 10 min"
   ]
  ]
 },
 "keep": "Alerte de journal : mesure + agrégation + période + fréquence + seuil."
},
{
 "id": "D5-136",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Vous devez activer la restauration interrégion sur le coffre Vault5.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "Vault5 | Coffre Recovery Services",
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
    "g": "Éléments protégés",
    "items": [
     "Éléments de sauvegarde",
     "Éléments répliqués"
    ]
   },
   {
    "g": "Gérer",
    "items": [
     "Stratégies de sauvegarde",
     "Infrastructure de sauvegarde",
     "Plans de récupération (Site Recovery)"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Identité",
     "Mise en réseau",
     "Propriétés",
     "Verrous"
    ]
   }
  ]
 },
 "ans": "Propriétés",
 "expl": "<p>Dans <b>Propriétés</b>, la <b>Configuration de la sauvegarde</b> permet de choisir la redondance du stockage (avant toute protection) et d'activer la <b>restauration interrégion</b>. On y trouve aussi les paramètres de sécurité (suppression réversible, immuabilité, autorisation multi-utilisateur).</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault5"
  ],
  "title": "Vault5 | Propriétés",
  "menu": [
   "*Propriétés"
  ],
  "rows": [
   [
    "*Configuration de la sauvegarde",
    "Mettre à jour"
   ]
  ]
 },
 "keep": "Redondance et restauration interrégion = Propriétés du coffre."
},
{
 "id": "D5-137",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Vous devez interroger avec KQL les journaux de l'espace de travail WS6.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "WS6 | Espace de travail Log Analytics",
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
    "g": "",
    "items": [
     "Journaux",
     "Résumé"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Tables",
     "Agents",
     "Utilisation et coûts estimés",
     "Paramètres de diagnostic"
    ]
   },
   {
    "g": "Classique",
    "items": [
     "Solutions héritées"
    ]
   }
  ]
 },
 "ans": "Journaux",
 "expl": "<p><b>Journaux</b> ouvre l'éditeur de requêtes KQL. <b>Tables</b> sert à régler les plans et la rétention de chaque table. <b>Utilisation et coûts estimés</b> montre le volume ingéré et permet de régler le plafond quotidien et le niveau tarifaire.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS6"
  ],
  "title": "WS6 | Journaux",
  "menu": [
   "*Journaux",
   "Tables"
  ],
  "rows": [
   [
    "*Éditeur KQL",
    "Nouvelle requête"
   ]
  ]
 },
 "keep": "Requêtes KQL = Journaux."
},
{
 "id": "D5-138",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez réduire le coût d'un espace de travail Log Analytics qui ingère beaucoup de données de performances inutiles.</p><p>Quelles <b>deux</b> actions conviennent ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Réduire la fréquence d'échantillonnage et le nombre de compteurs dans la règle de collecte de données",
  "Augmenter la rétention interactive",
  "Utiliser une transformation KQL dans la DCR pour supprimer les données inutiles",
  "Créer un second espace de travail en copie"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<ul><li><b>Moins de compteurs et un échantillonnage moins fréquent : oui</b>.</li><li><b>Transformation : oui</b>, les données filtrées ne sont pas ingérées.</li><li>Augmenter la rétention coûte plus. Un second espace de travail doublerait les coûts.</li></ul>",
 "portal": {
  "path": [
   "Moniteur",
   "Règles de collecte de données"
  ],
  "title": "Compteurs de performances",
  "rows": [
   [
    "*Échantillonnage",
    "300 s"
   ],
   [
    "Transformation",
    "source | where …"
   ]
  ]
 },
 "keep": "Moins collecter = moins de compteurs + transformation."
},
{
 "id": "D5-139",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez limiter le temps de restauration d'une VM critique après une erreur humaine, tout en gardant des points sur 1 an.</p><p>Quelles <b>deux</b> actions conviennent ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Désactiver la suppression réversible",
  "Passer le coffre en LRS",
  "Utiliser une stratégie améliorée avec plusieurs sauvegardes par jour et des instantanés conservés plusieurs jours",
  "Configurer une rétention mensuelle sur 12 mois"
 ],
 "ans": [
  2,
  3
 ],
 "expl": "<ul><li><b>Stratégie améliorée : oui</b>, des points fréquents et une restauration instantanée rapide depuis les instantanés.</li><li><b>Rétention mensuelle 12 mois : oui</b>, pour garder des points sur un an.</li><li>LRS réduit la protection. Désactiver la suppression réversible réduit la sécurité.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Stratégie améliorée",
  "rows": [
   [
    "*Fréquence",
    "Toutes les 4 h"
   ],
   [
    "Instantanés",
    "7 jours"
   ],
   [
    "*Mensuelle",
    "12 mois"
   ]
  ]
 },
 "keep": "RTO court = stratégie améliorée ; 1 an = rétention mensuelle."
},
{
 "id": "D5-140",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez envoyer le journal d'activité de l'abonnement vers l'espace de travail WS7, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az monitor diagnostic-settings {0} create --name activite-vers-ws7 --location francecentral {1} &lt;id WS7&gt; --logs '[{\"category\": \"Administrative\", \"enabled\": true}]'",
 "rows": [
  {
   "l": "Étendue",
   "o": [
    "subscription",
    "resource",
    "tenant"
   ],
   "a": 0
  },
  {
   "l": "Destination",
   "o": [
    "--workspace",
    "--resource",
    "--scope"
   ],
   "a": 0
  }
 ],
 "expl": "<p>Le journal d'activité est au niveau de l'<b>abonnement</b> : on utilise <code>az monitor diagnostic-settings subscription create</code>, avec <code>--workspace</code> pour la destination Log Analytics et les catégories voulues (Administrative, Policy, Security…). Les paramètres de diagnostic des ressources utilisent <code>az monitor diagnostic-settings create --resource ...</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az monitor diagnostic-settings subscription create",
    "--workspace"
   ]
  ]
 },
 "keep": "Journal d'activité = diagnostic-settings subscription create."
},
{
 "id": "D5-141",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez afficher le nombre de VM qui ont envoyé un signal Heartbeat au cours de la dernière heure, par système d'exploitation.</p><p>Comment devez-vous compléter la requête KQL ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "Heartbeat<br>| where TimeGenerated &gt; ago(1h)<br>| summarize NbVM = {0}(Computer) by {1}",
 "rows": [
  {
   "l": "Fonction",
   "o": [
    "dcount",
    "count",
    "sum"
   ],
   "a": 0
  },
  {
   "l": "Regroupement",
   "o": [
    "OSType",
    "TimeGenerated",
    "Computer"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>dcount(Computer)</code> compte les ordinateurs <b>distincts</b> (chaque VM envoie un signal par minute : <code>count()</code> compterait les signaux, pas les VM). On regroupe par <b>OSType</b> (Windows ou Linux).</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Journaux",
  "rows": [
   [
    "*dcount(Computer)",
    "VM distinctes"
   ],
   [
    "by OSType",
    "Windows / Linux"
   ]
  ]
 },
 "keep": "Compter des éléments distincts = dcount."
},
{
 "id": "D5-142",
 "dom": 5,
 "type": "order",
 "stem": "<p>Vous devez collecter les journaux d'événements Application de 40 VM Windows dans un espace de travail qui n'existe pas encore.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Créer l'espace de travail Log Analytics",
  "Créer une règle de collecte de données (journaux d'événements Windows, Application) avec l'espace de travail comme destination",
  "Associer la DCR aux 40 VM (l'agent Azure Monitor est installé)",
  "Installer l'agent Log Analytics (MMA)",
  "Créer un paramètre de diagnostic sur chaque VM"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>La <b>destination</b> doit exister, puis on crée la <b>DCR</b>, puis on l'<b>associe</b> aux VM (le portail installe l'agent Azure Monitor si nécessaire).</p><p>L'agent MMA est retiré. Le paramètre de diagnostic d'une VM ne collecte pas les journaux du système d'exploitation.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Règles de collecte de données"
  ],
  "title": "Créer une DCR",
  "rows": [
   [
    "1",
    "Espace de travail"
   ],
   [
    "*2",
    "DCR · Application"
   ],
   [
    "3",
    "Associer 40 VM"
   ]
  ]
 },
 "keep": "Destination → DCR → association."
},
{
 "id": "D5-143",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la destination adaptée pour les métriques ou journaux de chaque scénario.</p><p>Pour répondre, faites glisser la solution appropriée vers chaque scénario. Chaque solution peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Solutions",
 "srcs": [
  "Alerte de métrique",
  "Alerte de recherche dans les journaux",
  "Classeur",
  "Paramètre de diagnostic vers stockage"
 ],
 "tgtHead": [
  "Scénario",
  "Solution"
 ],
 "tgts": [
  {
   "l": "Être prévenu en moins d'une minute quand un disque dépasse 95 % d'utilisation",
   "a": 0
  },
  {
   "l": "Être prévenu quand une erreur précise apparaît dans les journaux d'application",
   "a": 1
  },
  {
   "l": "Présenter chaque mois un rapport de disponibilité à la direction",
   "a": 2
  },
  {
   "l": "Conserver 7 ans les journaux d'audit d'un coffre de clés",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Alerte de métrique</b> : réaction rapide sur un seuil numérique.</li><li><b>Alerte de recherche dans les journaux</b> : condition sur le contenu des journaux.</li><li><b>Classeur</b> : rapport interactif.</li><li><b>Stockage</b> : archivage longue durée à bas coût.</li></ul>",
 "portal": {
  "path": [
   "Moniteur"
  ],
  "title": "Choisir",
  "rows": [
   [
    "*Seuil rapide",
    "Alerte de métrique"
   ],
   [
    "Contenu des journaux",
    "Recherche dans les journaux"
   ],
   [
    "Rapport",
    "Classeur"
   ],
   [
    "7 ans",
    "Stockage"
   ]
  ]
 },
 "keep": "Seuil = métrique ; texte = journaux ; rapport = classeur ; archive = stockage."
},
{
 "id": "D5-144",
 "dom": 5,
 "type": "single",
 "stem": "<p>Le nombre d'alertes est trop élevé : les mêmes problèmes génèrent des dizaines de notifications par heure.</p><p>Quelle bonne pratique devez-vous appliquer en premier ?</p>",
 "opts": [
  "Désactiver Azure Monitor",
  "Supprimer tous les groupes d'actions",
  "Ajuster les seuils et utiliser des alertes avec état (ou des seuils dynamiques)",
  "Augmenter la rétention des journaux"
 ],
 "ans": 2,
 "expl": "<p>Les alertes <b>avec état</b> ne renvoient pas de notification tant que l'alerte n'est pas résolue. Des <b>seuils dynamiques</b> ou mieux calibrés réduisent les faux positifs. Une règle de traitement peut aussi supprimer les notifications pendant les maintenances.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Règle d'alerte",
  "rows": [
   [
    "*Résoudre automatiquement",
    "Oui (avec état)"
   ],
   [
    "Seuil",
    "Dynamique"
   ]
  ]
 },
 "keep": "Trop de notifications = avec état + seuils ajustés."
},
{
 "id": "D5-145",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez savoir pourquoi le groupe identique VMSS12 a ajouté des instances hier à 14 h.</p><p>Où trouvez-vous cette information ?</p>",
 "opts": [
  "Dans le coffre Recovery Services",
  "Dans les diagnostics de démarrage",
  "Dans Azure Advisor",
  "Dans l'historique d'exécution de la mise à l'échelle automatique et dans le journal d'activité (catégorie Mise à l'échelle automatique)"
 ],
 "ans": 3,
 "expl": "<p>Les opérations de mise à l'échelle automatique sont tracées dans le <b>journal d'activité</b> (catégorie Mise à l'échelle automatique) et dans l'<b>historique d'exécution</b> de la configuration de mise à l'échelle, avec la règle déclenchée et la valeur de la métrique. On peut aussi activer les journaux de ressources de la mise à l'échelle automatique.</p>",
 "portal": {
  "path": [
   "Groupes identiques de machines virtuelles",
   "VMSS12"
  ],
  "title": "Mise à l'échelle › Historique d'exécution",
  "rows": [
   [
    "*Hier 14:00",
    "+2 instances · CPU > 75 %"
   ]
  ]
 },
 "keep": "Pourquoi une mise à l'échelle = historique d'exécution + journal d'activité."
},
{
 "id": "D5-146",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une organisation exige que les données de supervision restent dans l'Union européenne.</p><p>Quel choix détermine l'emplacement de stockage des journaux collectés dans Log Analytics ?</p>",
 "opts": [
  "La région de l'espace de travail Log Analytics",
  "La région du groupe d'actions",
  "La région des VM supervisées",
  "La région du locataire Microsoft Entra"
 ],
 "ans": 0,
 "expl": "<p>Les données d'un espace de travail sont stockées dans la <b>région de l'espace de travail</b>. Pour la souveraineté, on crée l'espace de travail dans une région de l'UE, même si des ressources supervisées sont ailleurs.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "Créer"
  ],
  "title": "Créer un espace de travail",
  "rows": [
   [
    "*Région",
    "France Central (UE)"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Souveraineté des journaux = région de l'espace de travail."
},
{
 "id": "D5-147",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez restaurer un conteneur blob à son état d'il y a 3 jours, à l'aide de la sauvegarde opérationnelle des blobs configurée dans le coffre de sauvegarde Vault6.</p><p>Que se passe-t-il pour les blobs créés après cette date ?</p>",
 "opts": [
  "Ils sont conservés en plus des anciens",
  "Ils sont supprimés : le conteneur revient exactement à l'état choisi",
  "Ils sont déplacés dans un autre conteneur",
  "Ils sont archivés"
 ],
 "ans": 1,
 "expl": "<p>La restauration opérationnelle utilise la <b>restauration à un point dans le temps</b> : le contenu des conteneurs restaurés revient à l'état exact de la date choisie. Les blobs créés après sont supprimés, et les blobs modifiés retrouvent leur ancien contenu.</p>",
 "portal": {
  "path": [
   "Coffres de sauvegarde",
   "Vault6"
  ],
  "title": "Restaurer",
  "rows": [
   [
    "*Point dans le temps",
    "Il y a 3 jours"
   ],
   [
    "Blobs plus récents",
    "Supprimés"
   ]
  ]
 },
 "keep": "Restauration à un point = état exact (les nouveaux blobs disparaissent)."
},
{
 "id": "D5-148",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez être alerté si plus de 20 % des requêtes vers un compte de stockage échouent avec une erreur d'autorisation.</p><p>Quelle approche est la plus simple ?</p>",
 "opts": [
  "Une alerte Resource Health",
  "Une alerte Service Health",
  "Une alerte de métrique sur Transactions, filtrée (dimension ResponseType) sur les erreurs d'autorisation",
  "Une alerte de budget"
 ],
 "ans": 2,
 "expl": "<p>La métrique <b>Transactions</b> d'un compte de stockage a des <b>dimensions</b> (ResponseType, ApiName, Authentication…). Une alerte de métrique peut filtrer par dimension, par exemple les réponses AuthorizationError.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "st1"
  ],
  "title": "Condition",
  "rows": [
   [
    "Signal",
    "Transactions"
   ],
   [
    "*Dimension",
    "ResponseType = AuthorizationError"
   ]
  ]
 },
 "keep": "Filtrer une métrique = dimensions."
},
{
 "id": "D5-149",
 "dom": 5,
 "type": "single",
 "stem": "<p>L'équipe sécurité veut recevoir les journaux de tous les abonnements de l'organisation dans un SIEM Microsoft, avec détection des menaces.</p><p>Quelle solution Microsoft s'appuie sur Log Analytics pour cela ?</p>",
 "opts": [
  "Azure Site Recovery",
  "Azure Advisor",
  "Azure Backup",
  "Microsoft Sentinel"
 ],
 "ans": 3,
 "expl": "<p><b>Microsoft Sentinel</b> est le SIEM/SOAR de Microsoft. Il s'active sur un espace de travail Log Analytics et utilise des connecteurs pour ingérer les journaux, puis des règles d'analyse pour détecter les menaces. Ce n'est pas au cœur de l'AZ-104, mais il faut savoir le situer.</p>",
 "portal": {
  "path": [
   "Microsoft Sentinel"
  ],
  "title": "Ajouter Sentinel",
  "rows": [
   [
    "*Espace de travail",
    "LAW-SOC"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "SIEM sur Log Analytics = Microsoft Sentinel."
},
{
 "id": "D5-150",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une VM protégée par Site Recovery a été redimensionnée dans la région source. Vous voulez que la VM de basculement utilise aussi la nouvelle taille.</p><p>Où devez-vous vérifier la taille cible ?</p>",
 "opts": [
  "Dans les paramètres de calcul de l'élément répliqué",
  "Dans le plan App Service",
  "Dans la stratégie de sauvegarde",
  "Dans le journal d'activité"
 ],
 "ans": 0,
 "expl": "<p>Les <b>paramètres de calcul et de réseau</b> d'un élément répliqué définissent la taille, le groupe de ressources, le réseau et la disponibilité de la VM cible. Il faut les vérifier après des changements sur la source.</p>",
 "portal": {
  "path": [
   "Éléments répliqués",
   "VM1"
  ],
  "title": "Calcul et réseau",
  "rows": [
   [
    "*Taille cible",
    "Standard_D4s_v5"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Taille de la VM de basculement = calcul et réseau."
},
{
 "id": "D5-151",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez inclure dans un plan de récupération Site Recovery une étape qui met à jour un enregistrement DNS automatiquement après le basculement des VM web.</p><p>Que devez-vous ajouter au plan ?</p>",
 "opts": [
  "Un instantané",
  "Un script (runbook Azure Automation) après le groupe des VM web",
  "Une alerte de métrique",
  "Une règle de collecte de données"
 ],
 "ans": 1,
 "expl": "<p>Les plans de récupération acceptent des <b>scripts</b> (runbooks Azure Automation) avant ou après chaque groupe, et des <b>actions manuelles</b>. Mettre à jour le DNS ou un équilibreur est un cas typique.</p>",
 "portal": {
  "path": [
   "Plans de récupération",
   "RP-Web"
  ],
  "title": "Personnaliser",
  "rows": [
   [
    "Groupe 2",
    "VM web"
   ],
   [
    "*Après",
    "Runbook Update-DNS"
   ]
  ]
 },
 "keep": "Automatiser une étape de reprise = runbook dans le plan."
},
{
 "id": "D5-152",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez tester tous les trimestres la reprise d'activité d'une application protégée par Site Recovery, avec un rapport pour l'audit.</p><p>Quelle opération devez-vous planifier ?</p>",
 "opts": [
  "Une restauration Azure Backup",
  "La suppression de la réplication",
  "Un test de basculement du plan de récupération dans un réseau isolé, puis le nettoyage du test",
  "Un basculement non planifié réel"
 ],
 "ans": 2,
 "expl": "<p>Le <b>test de basculement</b> d'un <b>plan de récupération</b> valide tout l'enchaînement (ordre, scripts, réseau) sans impact sur la production. Après vérification, on lance le <b>nettoyage du test</b>, en notant les observations, qui servent de preuve pour l'audit.</p>",
 "portal": {
  "path": [
   "Plans de récupération",
   "RP-App"
  ],
  "title": "Test de basculement",
  "rows": [
   [
    "*Réseau",
    "Isolé"
   ],
   [
    "Puis",
    "Nettoyer le test + notes"
   ]
  ]
 },
 "keep": "Exercice de reprise auditable = test de basculement du plan."
},
{
 "id": "D5-153",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez superviser des serveurs locaux et d'autres clouds avec Azure Monitor, Azure Policy et Update Manager, comme des ressources Azure.</p><p>Que devez-vous installer sur ces serveurs ?</p>",
 "opts": [
  "L'agent MARS",
  "Le service Mobility",
  "Azure File Sync",
  "L'agent Azure Connected Machine (Azure Arc)"
 ],
 "ans": 3,
 "expl": "<p>Avec <b>Azure Arc</b>, l'agent <b>Connected Machine</b> projette le serveur comme une ressource Azure : on peut ensuite y déployer l'agent Azure Monitor, appliquer Azure Policy (configuration de machine) et gérer les mises à jour avec Update Manager.</p>",
 "portal": {
  "path": [
   "Azure Arc",
   "Machines"
  ],
  "title": "Ajouter un serveur",
  "rows": [
   [
    "*Agent",
    "Azure Connected Machine"
   ]
  ],
  "btn": "Générer le script"
 },
 "keep": "Serveurs hors Azure gérés comme Azure = Azure Arc."
},
{
 "id": "D5-154",
 "dom": 5,
 "type": "single",
 "stem": "<p>Un administrateur supprime accidentellement l'alerte de métrique CPU-Prod.</p><p>Comment savoir qui l'a supprimée ?</p>",
 "opts": [
  "Consulter le journal d'activité (opération Supprimer une règle d'alerte de métrique)",
  "Consulter Network Watcher",
  "Consulter le coffre Recovery Services",
  "Consulter Resource Health"
 ],
 "ans": 0,
 "expl": "<p>Les règles d'alerte sont des ressources Azure : leur suppression est tracée dans le <b>journal d'activité</b> (<code>Microsoft.Insights/metricAlerts/delete</code>) avec l'appelant.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Journal d'activité"
  ],
  "title": "Journal d'activité",
  "rows": [
   [
    "*Opération",
    "Delete Metric Alert"
   ],
   [
    "Initié par",
    "admin2@contoso.com"
   ]
  ]
 },
 "keep": "Qui a supprimé une alerte = journal d'activité."
},
{
 "id": "D5-155",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez que les alertes soient créées automatiquement selon les bonnes pratiques Microsoft pour toutes vos ressources (VM, stockage, réseau) dans une zone d'atterrissage, avec Azure Policy.</p><p>Quelle initiative Microsoft propose-t-il ?</p>",
 "opts": [
  "Microsoft Sentinel",
  "Azure Monitor Baseline Alerts (AMBA)",
  "Le plafond quotidien",
  "Azure Advisor score"
 ],
 "ans": 1,
 "expl": "<p><b>Azure Monitor Baseline Alerts</b> fournit des définitions et initiatives Azure Policy qui déploient automatiquement des alertes recommandées (métriques, journaux d'activité, Service Health) et des groupes d'actions, à l'échelle d'une organisation.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affecter une initiative"
  ],
  "title": "Azure Monitor Baseline Alerts",
  "rows": [
   [
    "*Étendue",
    "Groupe d'administration"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Alertes recommandées à l'échelle = AMBA."
},
{
 "id": "D5-156",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une restauration de VM avec l'option Remplacer l'existant échoue.</p><p>Quelle condition devez-vous vérifier ?</p>",
 "opts": [
  "Que la VM est dans une autre région",
  "Que la VM n'a jamais été sauvegardée",
  "Que la VM existe encore (elle n'a pas été supprimée) et que l'emplacement intermédiaire (compte de stockage) est disponible",
  "Que le coffre est en LRS"
 ],
 "ans": 2,
 "expl": "<p><b>Remplacer l'existant</b> remplace les disques d'une VM qui <b>existe encore</b>. Elle prend un instantané des disques actuels (conservé dans le coffre) puis les remplace. Si la VM a été supprimée, il faut créer une nouvelle VM ou restaurer les disques.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM1"
  ],
  "title": "Restaurer › Remplacer l'existant",
  "rows": [
   [
    "*VM",
    "Doit exister"
   ],
   [
    "Emplacement intermédiaire",
    "stagingst1"
   ]
  ]
 },
 "keep": "Remplacer l'existant = la VM doit exister."
},
{
 "id": "D5-157",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les sauvegardes Azure Files de share3 utilisent des instantanés. Un administrateur supprime le compte de stockage qui contient share3.</p><p>Que devient la sauvegarde ?</p>",
 "opts": [
  "La sauvegarde continue normalement",
  "Les points sont toujours conservés dans le coffre",
  "Les points sont copiés dans la région jumelée",
  "Avec une sauvegarde par instantanés seule, les points sont perdus avec le compte ; une sauvegarde en coffre (vaulted) protégerait contre ce risque"
 ],
 "ans": 3,
 "expl": "<p>La sauvegarde Azure Files <b>par instantanés</b> stocke les points dans le compte de stockage lui-même. Si le compte est supprimé, les instantanés le sont aussi. La <b>sauvegarde en coffre</b> copie les données dans le coffre et protège contre ce risque. Un <b>verrou</b> sur le compte est aussi recommandé (Azure Backup en ajoute un automatiquement).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "stfiles"
  ],
  "title": "Verrous",
  "rows": [
   [
    "*AzureBackupProtectionLock",
    "Suppression impossible"
   ]
  ]
 },
 "keep": "Instantanés de partage = dans le compte ; coffre (vaulted) = hors du compte."
},
{
 "id": "D5-158",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez désactiver temporairement une règle d'alerte de métrique pendant une migration, sans la supprimer.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Désactiver la règle d'alerte (état Désactivé), puis la réactiver après",
  "Supprimer la ressource surveillée",
  "Supprimer le groupe d'actions",
  "Augmenter le seuil à 1 000"
 ],
 "ans": 0,
 "expl": "<p>Une règle d'alerte peut être <b>désactivée</b> puis <b>réactivée</b>. Pour plusieurs règles ou une fenêtre planifiée, une <b>règle de traitement des alertes</b> est plus pratique.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Règles d'alerte"
  ],
  "title": "CPU-Prod",
  "rows": [
   [
    "*État",
    "Désactivé"
   ]
  ],
  "btn": "Activer"
 },
 "keep": "Pause d'une alerte = désactiver la règle."
},
{
 "id": "D5-159",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les métriques d'une VM sont nécessaires sur 6 mois pour une étude de capacité, mais la base de métriques ne garde que 93 jours.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Rien : les métriques sont gardées 2 ans",
  "Envoyer les métriques vers Log Analytics (paramètre de diagnostic ou DCR) avec une rétention adaptée",
  "Activer les diagnostics de démarrage",
  "Créer une alerte de métrique"
 ],
 "ans": 1,
 "expl": "<p>Pour garder les métriques plus de <b>93 jours</b>, on les envoie vers <b>Log Analytics</b> (table AzureMetrics ou InsightsMetrics/Perf), où la rétention est réglable, ou vers un compte de stockage.</p>",
 "portal": {
  "path": [
   "Ressource",
   "Paramètres de diagnostic"
  ],
  "title": "AllMetrics",
  "rows": [
   [
    "*Destination",
    "Log Analytics · 1 an"
   ]
  ]
 },
 "keep": "Métriques > 93 jours = Log Analytics ou stockage."
},
{
 "id": "D5-160",
 "dom": 5,
 "type": "single",
 "stem": "<p>Votre plan de continuité impose : RPO de 24 heures et rétention de 30 jours pour 50 VM non critiques, et RPO de quelques minutes avec reprise dans une autre région pour 5 VM critiques.</p><p>Quelle combinaison est la plus adaptée ?</p>",
 "opts": [
  "Des groupes à haute disponibilité pour toutes les VM",
  "Azure Site Recovery pour les 55 VM",
  "Azure Backup quotidien pour les 50 VM ; Azure Site Recovery (plus Azure Backup) pour les 5 VM critiques",
  "Des instantanés manuels pour toutes les VM"
 ],
 "ans": 2,
 "expl": "<p>Pour les VM non critiques, <b>Azure Backup</b> quotidien suffit (RPO 24 h, rétention 30 jours), à moindre coût. Pour les VM critiques, <b>Site Recovery</b> offre un RPO de quelques minutes et une reprise dans une autre région ; Azure Backup reste utile pour restaurer des données anciennes.</p><p>Site Recovery pour tout coûterait plus cher sans besoin. Les groupes à haute disponibilité ne protègent pas contre la perte de données.</p>",
 "portal": {
  "path": [
   "Centre de continuité d'activité"
  ],
  "title": "Protection",
  "rows": [
   [
    "50 VM",
    "Backup quotidien"
   ],
   [
    "*5 VM critiques",
    "Site Recovery + Backup"
   ]
  ]
 },
 "keep": "Protection selon le RPO/RTO de chaque VM."
}
);
