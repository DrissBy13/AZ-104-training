/* Domaine 5 : supervision et sauvegarde (lot B : D5-009 à D5-060) */
AZ.questions.push(
{
 "id": "D5-009",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la source de données Azure Monitor adaptée à chaque besoin.</p><p>Pour répondre, faites glisser la source appropriée vers chaque besoin. Chaque source peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Sources",
 "srcs": [
  "Métriques de plateforme",
  "Journal d'activité",
  "Journaux de ressources",
  "Journaux invités (via l'agent Azure Monitor)"
 ],
 "tgtHead": [
  "Besoin",
  "Source"
 ],
 "tgts": [
  {
   "l": "Pourcentage CPU d'une VM, minute par minute, sans rien installer",
   "a": 0
  },
  {
   "l": "Qui a redémarré une VM depuis le portail",
   "a": 1
  },
  {
   "l": "Chaque requête de lecture faite sur un coffre de clés",
   "a": 2
  },
  {
   "l": "Événements du journal Application de Windows dans une VM",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Métriques de plateforme</b> : collectées automatiquement pour chaque ressource (CPU d'une VM vue de l'hôte, transactions de stockage…).</li><li><b>Journal d'activité</b> : opérations sur le plan de contrôle de l'abonnement (créer, modifier, démarrer, supprimer).</li><li><b>Journaux de ressources</b> : opérations à l'intérieur d'une ressource (plan de données). Ils demandent un <b>paramètre de diagnostic</b>.</li><li><b>Journaux invités</b> : données du système d'exploitation, collectées par l'<b>agent Azure Monitor</b> et une règle de collecte de données.</li></ul>",
 "portal": {
  "path": [
   "Moniteur"
  ],
  "title": "Sources de données",
  "rows": [
   [
    "*Métriques de plateforme",
    "Automatiques"
   ],
   [
    "Journal d'activité",
    "Plan de contrôle"
   ],
   [
    "Journaux de ressources",
    "Paramètre de diagnostic"
   ],
   [
    "Journaux invités",
    "Agent Azure Monitor"
   ]
  ]
 },
 "keep": "Métrique auto ; qui a fait quoi = activité ; dans la ressource = ressources ; dans l'OS = agent."
},
{
 "id": "D5-010",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez conserver le journal d'activité de l'abonnement Sub1 pendant 2 ans et l'interroger avec KQL avec d'autres journaux.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un paramètre de diagnostic du journal d'activité vers un espace de travail Log Analytics, avec une rétention adaptée",
  "Azure Advisor",
  "Une alerte de journal d'activité",
  "Rien : le journal d'activité est conservé 2 ans"
 ],
 "ans": 0,
 "expl": "<p>Le journal d'activité n'est conservé que <b>90 jours</b>. Pour aller plus loin, on crée un <b>paramètre de diagnostic</b> au niveau de l'abonnement qui l'envoie vers un espace de travail <b>Log Analytics</b> (table AzureActivity, interrogeable en KQL), un compte de stockage (archivage) ou Event Hubs.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Journal d'activité"
  ],
  "title": "Exporter le journal d'activité",
  "rows": [
   [
    "*Paramètre de diagnostic",
    "Sub1 → LAW-Audit"
   ],
   [
    "Rétention de la table",
    "2 ans"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Journal d'activité > 90 jours = paramètre de diagnostic vers Log Analytics."
},
{
 "id": "D5-011",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les journaux de ressources d'un coffre de clés ne sont collectés nulle part.</p><p>Que devez-vous créer pour les envoyer vers Log Analytics ?</p>",
 "opts": [
  "Un classeur",
  "Un paramètre de diagnostic sur le coffre de clés",
  "Une alerte de métrique",
  "Une règle de collecte de données pour VM"
 ],
 "ans": 1,
 "expl": "<p>Les <b>journaux de ressources</b> ne sont pas collectés par défaut. On crée un <b>paramètre de diagnostic</b> sur la ressource, on choisit les catégories (par exemple AuditEvent) et les destinations : Log Analytics, compte de stockage, Event Hubs ou solution partenaire.</p><p>Une ressource peut avoir jusqu'à 5 paramètres de diagnostic.</p>",
 "portal": {
  "path": [
   "Coffres de clés",
   "kv1"
  ],
  "title": "kv1 | Paramètres de diagnostic",
  "menu": [
   "*Paramètres de diagnostic"
  ],
  "rows": [
   [
    "*Catégories",
    "AuditEvent"
   ],
   [
    "Destination",
    "Envoyer à Log Analytics"
   ]
  ],
  "btn": "+ Ajouter un paramètre de diagnostic"
 },
 "keep": "Journaux de ressources = paramètre de diagnostic sur la ressource."
},
{
 "id": "D5-012",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous choisissez la destination d'un paramètre de diagnostic.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Analyser les journaux avec KQL et créer des alertes de recherche dans les journaux :",
   "o": [
    "Event Hubs",
    "Compte de stockage",
    "Espace de travail Log Analytics"
   ],
   "a": 2
  },
  {
   "l": "Archiver les journaux à bas coût pendant 7 ans pour un audit :",
   "o": [
    "Espace de travail Log Analytics",
    "Compte de stockage",
    "Event Hubs"
   ],
   "a": 1
  },
  {
   "l": "Transmettre les journaux en continu à un SIEM tiers :",
   "o": [
    "Event Hubs",
    "Compte de stockage",
    "Espace de travail Log Analytics"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Log Analytics</b> : requêtes KQL, classeurs, alertes de journaux.</li><li><b>Compte de stockage</b> : archivage économique à long terme.</li><li><b>Event Hubs</b> : diffusion en continu vers des outils externes (SIEM, solutions tierces).</li></ul>",
 "portal": {
  "path": [
   "Ressource",
   "Paramètres de diagnostic"
  ],
  "title": "Détails de destination",
  "rows": [
   [
    "*Log Analytics",
    "KQL + alertes"
   ],
   [
    "Compte de stockage",
    "Archivage"
   ],
   [
    "Event Hubs",
    "SIEM tiers"
   ]
  ]
 },
 "keep": "KQL = Log Analytics ; archive = stockage ; flux externe = Event Hubs."
},
{
 "id": "D5-013",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez collecter les compteurs de performances (mémoire disponible, espace disque) et le journal Système de 50 VM Windows, vers l'espace de travail WS1.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "L'agent Log Analytics (MMA)",
  "Un paramètre de diagnostic sur chaque VM uniquement",
  "L'agent Azure Monitor et une règle de collecte de données (DCR) associée aux 50 VM",
  "Les diagnostics de démarrage"
 ],
 "ans": 2,
 "expl": "<p>L'<b>agent Azure Monitor</b> (AMA) collecte les données invitées selon des <b>règles de collecte de données</b> (DCR) : quelles données (compteurs, événements, Syslog, fichiers journaux), et vers quelle destination. Une même DCR peut être associée à de nombreuses VM.</p><p>L'agent Log Analytics (MMA) a été retiré en août 2024. Le paramètre de diagnostic d'une VM ne collecte que des métriques de l'hôte, pas les données du système d'exploitation.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Règles de collecte de données"
  ],
  "title": "Créer une règle de collecte de données",
  "rows": [
   [
    "*Ressources",
    "50 VM (agent Azure Monitor)"
   ],
   [
    "Sources",
    "Compteurs + journal Système"
   ],
   [
    "Destination",
    "WS1"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Données invitées = AMA + DCR (MMA retiré)."
},
{
 "id": "D5-014",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez voir les dépendances réseau entre les processus de vos VM (quels serveurs parlent à quels serveurs, sur quels ports) et des graphiques de performances préconfigurés.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "Azure Advisor",
  "Network Watcher Tronçon suivant",
  "Les diagnostics de démarrage",
  "VM Insights, avec la fonctionnalité Carte (Map)"
 ],
 "ans": 3,
 "expl": "<p><b>VM Insights</b> fournit des tableaux de bord de performances (CPU, mémoire, disque, réseau) et, avec l'<b>agent de dépendances</b>, la <b>Carte</b> des processus et des connexions entre machines.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Insights des machines virtuelles"
  ],
  "title": "Insights des machines virtuelles",
  "menu": [
   "Performances",
   "*Carte"
  ],
  "rows": [
   [
    "*Carte",
    "Processus et connexions"
   ]
  ]
 },
 "keep": "Dépendances entre VM = VM Insights, Carte."
},
{
 "id": "D5-015",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez être prévenu par e-mail quand le CPU moyen de VM2 dépasse 85 % pendant 15 minutes.</p><p>Quel type d'alerte devez-vous créer ?</p>",
 "opts": [
  "Une alerte de métrique",
  "Une alerte de journal d'activité",
  "Une alerte d'intégrité du service",
  "Une alerte de budget"
 ],
 "ans": 0,
 "expl": "<p>Une <b>alerte de métrique</b> évalue régulièrement une métrique (ici Percentage CPU, moyenne sur 15 minutes) par rapport à un seuil, et déclenche un <b>groupe d'actions</b> (e-mail, SMS…). Elle réagit en quasi temps réel.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM2"
  ],
  "title": "Créer une règle d'alerte",
  "rows": [
   [
    "*Signal",
    "Percentage CPU"
   ],
   [
    "Condition",
    "Moyenne > 85 · 15 min"
   ],
   [
    "Actions",
    "Groupe d'actions e-mail"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Seuil sur une valeur = alerte de métrique."
},
{
 "id": "D5-016",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez être alerté quand quelqu'un <b>supprime</b> une machine virtuelle dans l'abonnement Sub1.</p><p>Quel type d'alerte devez-vous créer ?</p>",
 "opts": [
  "Une alerte d'intégrité des ressources",
  "Une alerte de journal d'activité sur l'opération Supprimer une machine virtuelle",
  "Une alerte de métrique",
  "Une alerte de budget"
 ],
 "ans": 1,
 "expl": "<p>Une suppression est une opération du plan de contrôle, tracée dans le <b>journal d'activité</b>. Une <b>alerte de journal d'activité</b> filtrée sur l'opération <code>Microsoft.Compute/virtualMachines/delete</code> se déclenche à chaque suppression.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Créer une règle d'alerte",
  "rows": [
   [
    "*Signal",
    "Supprimer une machine virtuelle (journal d'activité)"
   ],
   [
    "Étendue",
    "Sub1"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Opération de gestion = alerte de journal d'activité."
},
{
 "id": "D5-017",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez être prévenu quand une maintenance planifiée ou un incident de la plateforme Azure touche les services App Service en France Central utilisés par votre abonnement.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une alerte de budget",
  "Un paramètre de diagnostic",
  "Une alerte Service Health (intégrité du service)",
  "Une alerte de métrique sur le CPU"
 ],
 "ans": 2,
 "expl": "<p><b>Service Health</b> informe des incidents, maintenances planifiées, avis d'intégrité et avis de sécurité qui concernent <b>les services et régions</b> que vous utilisez. Une <b>alerte Service Health</b>, filtrée sur App Service et France Central, envoie la notification.</p>",
 "portal": {
  "path": [
   "Service Health"
  ],
  "title": "Service Health | Alertes d'intégrité",
  "menu": [
   "Problèmes de service",
   "Maintenance planifiée",
   "*Alertes d'intégrité"
  ],
  "rows": [
   [
    "*Services",
    "App Service"
   ],
   [
    "Régions",
    "France Central"
   ]
  ],
  "btn": "+ Créer une alerte d'intégrité du service"
 },
 "keep": "Incidents et maintenance Azure = Service Health."
},
{
 "id": "D5-018",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM3 est devenue indisponible pendant 10 minutes cette nuit. Vous voulez savoir si la cause vient de la plateforme Azure (problème d'hôte) ou de votre VM.</p><p>Que devez-vous consulter ?</p>",
 "opts": [
  "Azure Advisor",
  "Les métriques du compte de stockage",
  "L'analyse des coûts",
  "Resource Health (Intégrité des ressources) de VM3"
 ],
 "ans": 3,
 "expl": "<p><b>Resource Health</b> indique l'état d'une ressource précise (Disponible, Indisponible, Dégradé, Inconnu) et son historique, avec la cause lorsqu'elle est liée à la plateforme (par exemple un redémarrage de l'hôte).</p><p>Service Health est global aux services et régions ; Resource Health concerne <b>votre</b> ressource.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM3"
  ],
  "title": "VM3 | Resource Health",
  "menu": [
   "*Resource Health"
  ],
  "rows": [
   [
    "*Cette nuit 02:10",
    "Indisponible · redémarrage de l'hôte (plateforme)"
   ]
  ]
 },
 "keep": "Ma ressource et la plateforme = Resource Health."
},
{
 "id": "D5-019",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type d'alerte adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types d'alerte",
 "srcs": [
  "Alerte de métrique",
  "Alerte de recherche dans les journaux",
  "Alerte de journal d'activité",
  "Alerte Service Health",
  "Alerte Resource Health"
 ],
 "tgtHead": [
  "Besoin",
  "Type"
 ],
 "tgts": [
  {
   "l": "Plus de 5 échecs de connexion dans le journal Sécurité d'une VM en 10 minutes (données dans Log Analytics)",
   "a": 1
  },
  {
   "l": "Un administrateur crée une attribution de rôle",
   "a": 2
  },
  {
   "l": "Le disque libre d'une VM passe sous 10 %",
   "a": 0
  },
  {
   "l": "Une VM devient indisponible à cause d'un problème de la plateforme",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Recherche dans les journaux</b> : une requête KQL exécutée à intervalle régulier sur Log Analytics.</li><li><b>Journal d'activité</b> : opérations de gestion (création d'attribution de rôle).</li><li><b>Métrique</b> : seuil sur une valeur numérique (les compteurs invités peuvent être envoyés comme métriques).</li><li><b>Resource Health</b> : changement d'état d'intégrité d'une ressource.</li></ul>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Types de signaux",
  "rows": [
   [
    "*Recherche dans les journaux",
    "KQL"
   ],
   [
    "Journal d'activité",
    "Opération"
   ],
   [
    "Métrique",
    "Seuil"
   ],
   [
    "Resource Health",
    "Intégrité"
   ]
  ]
 },
 "keep": "KQL = recherche dans les journaux ; opération = activité ; seuil = métrique."
},
{
 "id": "D5-020",
 "dom": 5,
 "type": "single",
 "stem": "<p>Trois alertes doivent envoyer un e-mail à l'équipe d'astreinte, un SMS au responsable et appeler un webhook vers l'outil de tickets.</p><p>Comment réduire l'effort de configuration ?</p>",
 "opts": [
  "Créer un seul groupe d'actions avec ces trois actions et l'associer aux trois alertes",
  "Créer trois espaces de travail",
  "Créer un classeur",
  "Configurer les notifications dans chaque alerte séparément"
 ],
 "ans": 0,
 "expl": "<p>Un <b>groupe d'actions</b> regroupe des notifications (e-mail, SMS, notification push, appel vocal) et des actions (webhook, runbook Automation, fonction, application logique, ITSM, Event Hubs). Il est réutilisable par autant d'alertes que nécessaire.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Groupes d'actions"
  ],
  "title": "Créer un groupe d'actions",
  "rows": [
   [
    "*Notifications",
    "E-mail + SMS"
   ],
   [
    "Actions",
    "Webhook"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Notifications réutilisables = groupe d'actions."
},
{
 "id": "D5-021",
 "dom": 5,
 "type": "single",
 "stem": "<p>Pendant une fenêtre de maintenance planifiée chaque samedi de 22 h à 2 h, les alertes des VM de RG-Prod ne doivent envoyer aucune notification, mais doivent rester visibles dans le portail.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un verrou sur RG-Prod",
  "Une règle de traitement des alertes qui supprime les groupes d'actions selon une planification",
  "Désactiver chaque règle d'alerte le samedi",
  "Supprimer le groupe d'actions"
 ],
 "ans": 1,
 "expl": "<p>Une <b>règle de traitement des alertes</b> (alert processing rule) peut, sur une étendue et une planification, <b>supprimer les notifications</b> (les alertes continuent d'être créées) ou <b>ajouter des groupes d'actions</b> à des alertes.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Créer une règle de traitement des alertes",
  "rows": [
   [
    "Étendue",
    "RG-Prod"
   ],
   [
    "*Type",
    "Supprimer les notifications"
   ],
   [
    "Planification",
    "Samedi 22:00 → 02:00"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Silence planifié = règle de traitement des alertes."
},
{
 "id": "D5-022",
 "dom": 5,
 "type": "single",
 "stem": "<p>La charge CPU d'une application varie fortement selon les heures et les jours. Un seuil fixe génère trop de fausses alertes.</p><p>Quel type de seuil devez-vous utiliser dans l'alerte de métrique ?</p>",
 "opts": [
  "Un seuil statique plus bas",
  "Une alerte Service Health",
  "Un seuil dynamique",
  "Une alerte de journal d'activité"
 ],
 "ans": 2,
 "expl": "<p>Les <b>seuils dynamiques</b> apprennent le comportement habituel de la métrique (y compris les cycles horaires et hebdomadaires) et alertent sur les écarts anormaux, avec une sensibilité réglable (élevée, moyenne, faible).</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Condition",
  "rows": [
   [
    "*Type de seuil",
    "Dynamique"
   ],
   [
    "Sensibilité",
    "Moyenne"
   ]
  ]
 },
 "keep": "Charge cyclique = seuil dynamique."
},
{
 "id": "D5-023",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous créez des alertes Azure Monitor.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Gravité la plus élevée (critique) :",
   "o": [
    "Sev4",
    "Sev0",
    "Sev10"
   ],
   "a": 1
  },
  {
   "l": "Une alerte de métrique avec état, dont la condition n'est plus remplie, passe à :",
   "o": [
    "Fermée par l'utilisateur uniquement",
    "Résolue",
    "Supprimée"
   ],
   "a": 1
  },
  {
   "l": "Pour une même alerte, une nouvelle notification est envoyée tant que la condition reste vraie :",
   "o": [
    "Non, avec une alerte avec état",
    "Oui, toutes les 5 minutes",
    "Oui, à chaque évaluation, toujours"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>Les gravités vont de <b>Sev0</b> (critique) à <b>Sev4</b> (détaillé).</li><li>Une alerte <b>avec état</b> se <b>résout</b> automatiquement quand la condition n'est plus remplie (et peut notifier la résolution).</li><li>Avec état, elle ne se redéclenche pas tant qu'elle n'est pas résolue, ce qui évite les avalanches de notifications.</li></ul>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Alertes",
  "rows": [
   [
    "*Sev0",
    "Critique"
   ],
   [
    "Avec état",
    "Résolue automatiquement"
   ]
  ]
 },
 "keep": "Sev0 = critique ; avec état = pas de répétition, résolution auto."
},
{
 "id": "D5-024",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez afficher, dans l'espace de travail WS1, le nombre d'événements de niveau Erreur par ordinateur au cours des dernières 24 heures, du plus grand au plus petit.</p><p>Comment devez-vous compléter la requête KQL ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "Event<br>| where TimeGenerated &gt; {0}(24h) and EventLevelName == \"Error\"<br>| {1} NbErreurs = count() by Computer<br>| {2} by NbErreurs desc",
 "rows": [
  {
   "l": "Fonction de temps",
   "o": [
    "ago",
    "now",
    "since"
   ],
   "a": 0
  },
  {
   "l": "Opérateur d'agrégation",
   "o": [
    "summarize",
    "project",
    "extend"
   ],
   "a": 0
  },
  {
   "l": "Opérateur de tri",
   "o": [
    "sort",
    "where",
    "render"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><code>ago(24h)</code> : l'instant actuel moins 24 heures.</li><li><code>summarize ... by Computer</code> : agrège (compte) par ordinateur. <code>project</code> choisit des colonnes ; <code>extend</code> ajoute une colonne calculée.</li><li><code>sort by ... desc</code> trie (<code>order by</code> est un synonyme). <code>where</code> filtre des lignes ; <code>render</code> choisit un graphique.</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "WS1 | Journaux",
  "menu": [
   "*Journaux"
  ],
  "rows": [
   [
    "*ago(24h)",
    "Période"
   ],
   [
    "summarize count() by",
    "Agrégation"
   ],
   [
    "sort by desc",
    "Tri"
   ]
  ],
  "btn": "Exécuter"
 },
 "keep": "ago = période ; summarize = agréger ; sort/order = trier."
},
{
 "id": "D5-025",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez afficher les 10 VM avec le CPU moyen le plus élevé sur la dernière heure, à partir de la table Perf.</p><p>Comment devez-vous compléter la requête KQL ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "Perf<br>| where TimeGenerated &gt; ago(1h) and ObjectName == \"Processor\" and CounterName == \"% Processor Time\"<br>| summarize CpuMoyen = {0}(CounterValue) by Computer<br>| {1} 10 by CpuMoyen desc",
 "rows": [
  {
   "l": "Fonction",
   "o": [
    "avg",
    "count",
    "sum"
   ],
   "a": 0
  },
  {
   "l": "Opérateur",
   "o": [
    "top",
    "take",
    "limit"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>avg()</code> calcule la moyenne. <code>top 10 by CpuMoyen desc</code> trie et garde les 10 premiers. <code>take</code> et <code>limit</code> renvoient N lignes <b>quelconques</b>, sans tri.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "WS1 | Journaux",
  "rows": [
   [
    "*avg(CounterValue)",
    "Moyenne"
   ],
   [
    "top 10 by … desc",
    "Tri + limite"
   ]
  ],
  "btn": "Exécuter"
 },
 "keep": "top = tri + limite ; take/limit = sans tri."
},
{
 "id": "D5-026",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez afficher le résultat d'une requête KQL sous forme de graphique temporel dans Log Analytics.</p><p>Quel opérateur devez-vous ajouter à la fin de la requête ?</p>",
 "opts": [
  "extend graph",
  "project chart",
  "summarize timechart",
  "render timechart"
 ],
 "ans": 3,
 "expl": "<p><code>render</code> choisit la visualisation : <code>timechart</code>, <code>barchart</code>, <code>piechart</code>… On l'utilise souvent après un <code>summarize ... by bin(TimeGenerated, 5m)</code> qui regroupe les données par intervalles de temps.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Résultats",
  "rows": [
   [
    "*render timechart",
    "Graphique temporel"
   ]
  ]
 },
 "keep": "Graphique = render."
},
{
 "id": "D5-027",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez compter le nombre de requêtes HTTP par tranche de 5 minutes sur la dernière journée.</p><p>Quelle fonction devez-vous utiliser dans le summarize ?</p>",
 "opts": [
  "bin(TimeGenerated, 5m)",
  "ago(5m)",
  "now(5m)",
  "range(5m)"
 ],
 "ans": 0,
 "expl": "<p><code>bin()</code> arrondit une valeur à l'intervalle choisi : <code>summarize count() by bin(TimeGenerated, 5m)</code> donne un compte par tranche de 5 minutes. <code>ago()</code> sert à filtrer une période relative.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Requête",
  "rows": [
   [
    "*bin(TimeGenerated, 5m)",
    "Tranches de 5 min"
   ]
  ]
 },
 "keep": "Regrouper par intervalle = bin()."
},
{
 "id": "D5-028",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une équipe veut un rapport interactif qui combine des requêtes KQL, des métriques, des paramètres (sélection de l'abonnement) et du texte explicatif, partagé avec d'autres administrateurs.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Une alerte de métrique",
  "Un classeur Azure Monitor (Workbook)",
  "Une règle de collecte de données",
  "Un groupe d'actions"
 ],
 "ans": 1,
 "expl": "<p>Les <b>classeurs</b> (Workbooks) combinent texte, requêtes de journaux, métriques et paramètres dans des rapports interactifs, partageables. Les <b>tableaux de bord</b> Azure épinglent des vues, avec moins d'interactivité.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Classeurs"
  ],
  "title": "Nouveau classeur",
  "menu": [
   "*Classeurs"
  ],
  "rows": [
   [
    "*Contenu",
    "Texte, requêtes, métriques, paramètres"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Rapport interactif partagé = classeur."
},
{
 "id": "D5-029",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les données de la table SecurityEvent doivent rester interrogeables pendant 1 an, puis être conservées à bas coût jusqu'à 7 ans, sans être exportées.</p><p>Que devez-vous configurer sur la table ?</p>",
 "opts": [
  "Un compte de stockage",
  "Un second espace de travail",
  "Une rétention interactive de 365 jours et une rétention totale de 7 ans (rétention à long terme)",
  "Une règle de traitement des alertes"
 ],
 "ans": 2,
 "expl": "<p>Chaque table d'un espace de travail a une <b>rétention interactive</b> (données interrogeables normalement, jusqu'à 2 ans) et une <b>rétention totale</b> (jusqu'à 12 ans). Entre les deux, les données sont en <b>rétention à long terme</b> (archive), moins chère, accessibles par des travaux de recherche ou une restauration.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1",
   "Tables"
  ],
  "title": "SecurityEvent | Gérer la table",
  "rows": [
   [
    "*Rétention interactive",
    "365 jours"
   ],
   [
    "*Rétention totale",
    "7 ans"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Interrogeable puis archive = rétention interactive + totale."
},
{
 "id": "D5-030",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les membres de l'équipe Web ne doivent voir, dans l'espace de travail partagé WS2, que les journaux des ressources sur lesquelles ils ont des droits.</p><p>Quel mode de contrôle d'accès de l'espace de travail permet cela ?</p>",
 "opts": [
  "Une clé partagée de l'espace de travail",
  "Un espace de travail par utilisateur",
  "Exiger les autorisations d'espace de travail uniquement",
  "Utiliser les autorisations de ressource ou d'espace de travail (contexte de ressource)"
 ],
 "ans": 3,
 "expl": "<p>Avec le mode <b>« Utiliser les autorisations de ressource ou d'espace de travail »</b>, un utilisateur qui ouvre les journaux depuis une ressource (contexte de ressource) voit les données des ressources sur lesquelles il a un accès en lecture, sans droit sur tout l'espace de travail. On peut aussi définir des RBAC au niveau des tables.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS2"
  ],
  "title": "WS2 | Propriétés",
  "rows": [
   [
    "*Mode de contrôle d'accès",
    "Autorisations de ressource ou d'espace de travail"
   ]
  ]
 },
 "keep": "Voir seulement ses ressources = contexte de ressource."
},
{
 "id": "D5-031",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une équipe doit créer et modifier des règles d'alerte et des groupes d'actions, sans pouvoir modifier les ressources supervisées.</p><p>Quel rôle devez-vous lui attribuer ?</p>",
 "opts": [
  "Contributeur de surveillance",
  "Contributeur Log Analytics",
  "Lecteur de surveillance",
  "Contributeur"
 ],
 "ans": 0,
 "expl": "<p><b>Contributeur de surveillance</b> lit toutes les données de supervision et gère les paramètres de supervision (alertes, groupes d'actions, paramètres de diagnostic). <b>Lecteur de surveillance</b> ne fait que lire. <b>Contributeur</b> donne accès aux ressources.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Ajouter une attribution de rôle",
  "rows": [
   [
    "*Rôle",
    "Contributeur de surveillance"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Gérer alertes sans toucher aux ressources = Contributeur de surveillance."
},
{
 "id": "D5-032",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous gérez Azure Monitor.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Les métriques de plateforme sont conservées 93 jours.",
   "a": 0
  },
  {
   "l": "Le journal d'activité est conservé 90 jours sans configuration.",
   "a": 0
  },
  {
   "l": "Les journaux de ressources sont collectés automatiquement sans paramètre de diagnostic.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Métriques : Oui</b>, 93 jours dans la base de métriques (l'explorateur affiche jusqu'à 30 jours par graphique).</li><li><b>Journal d'activité : Oui</b>, 90 jours.</li><li><b>Journaux de ressources : Non</b>, il faut un paramètre de diagnostic.</li></ul>",
 "portal": {
  "path": [
   "Moniteur"
  ],
  "title": "Rétention par défaut",
  "rows": [
   [
    "Métriques",
    "93 jours"
   ],
   [
    "Journal d'activité",
    "90 jours"
   ],
   [
    "*Journaux de ressources",
    "Paramètre de diagnostic requis"
   ]
  ]
 },
 "keep": "Métriques 93 j ; activité 90 j ; ressources = rien sans diagnostic."
},
{
 "id": "D5-033",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez superviser la disponibilité et les performances d'une application web (temps de réponse, exceptions, dépendances), et tester son URL depuis plusieurs régions du monde.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Azure Advisor",
  "Application Insights avec des tests de disponibilité",
  "Network Watcher",
  "VM Insights"
 ],
 "ans": 1,
 "expl": "<p><b>Application Insights</b> (fonction d'Azure Monitor, basée sur un espace de travail Log Analytics) collecte la télémétrie applicative : requêtes, temps de réponse, exceptions, dépendances. Les <b>tests de disponibilité</b> interrogent l'URL depuis plusieurs emplacements et alertent en cas d'échec.</p>",
 "portal": {
  "path": [
   "Application Insights",
   "appi-web"
  ],
  "title": "appi-web | Disponibilité",
  "menu": [
   "*Disponibilité",
   "Performances",
   "Échecs"
  ],
  "rows": [
   [
    "*Test standard",
    "5 emplacements"
   ]
  ],
  "btn": "+ Ajouter un test standard"
 },
 "keep": "Télémétrie applicative + test d'URL = Application Insights."
},
{
 "id": "D5-034",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une configuration réseau a changé hier et une application ne fonctionne plus. Vous voulez voir rapidement les changements de propriétés des ressources au cours des derniers jours.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Les diagnostics de démarrage",
  "Azure Backup",
  "L'analyse des modifications (Change Analysis) / l'historique des modifications des ressources",
  "Une alerte de budget"
 ],
 "ans": 2,
 "expl": "<p>L'<b>analyse des modifications</b> (ou l'historique des modifications dans le journal d'activité et Resource Graph) montre les changements de configuration des ressources (avant et après), qu'ils viennent du portail, d'un modèle ou d'un script. C'est souvent le moyen le plus rapide de trouver la cause d'une régression.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Analyse des modifications"
  ],
  "title": "Modifications",
  "rows": [
   [
    "*Hier 17:05",
    "nsg-app · règle 200 modifiée"
   ]
  ]
 },
 "keep": "Qu'est-ce qui a changé = analyse des modifications."
},
{
 "id": "D5-035",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez sauvegarder chaque nuit 20 VM Azure de France Central, avec une rétention de 30 jours.</p><p>Où devez-vous créer le coffre Recovery Services ?</p>",
 "opts": [
  "Dans West Europe, pour la redondance",
  "Dans n'importe quelle région",
  "Dans la région jumelée France South",
  "Dans la région France Central"
 ],
 "ans": 3,
 "expl": "<p>Pour sauvegarder des VM Azure, le coffre doit être dans la <b>même région</b> que les VM. La protection contre une panne régionale vient de la redondance du coffre (<b>GRS</b>) et de la <b>restauration interrégion</b>.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Créer"
  ],
  "title": "Créer un coffre",
  "rows": [
   [
    "*Région",
    "France Central"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Sauvegarde de VM = coffre dans la région des VM."
},
{
 "id": "D5-036",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez pouvoir restaurer les VM sauvegardées dans la région jumelée, même si la région primaire est toujours disponible (par exemple pour un exercice).</p><p>Que devez-vous activer sur le coffre Recovery Services ?</p>",
 "opts": [
  "La redondance GRS et la restauration interrégion (Cross Region Restore)",
  "La suppression réversible",
  "Le mode immuable",
  "La redondance LRS"
 ],
 "ans": 0,
 "expl": "<p>Avec un coffre en <b>GRS</b>, les données de sauvegarde sont répliquées dans la région jumelée. La <b>restauration interrégion</b> permet de restaurer depuis cette région secondaire à tout moment, pas seulement après une panne déclarée par Microsoft.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Vault1 | Propriétés",
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
 "keep": "Restaurer dans la région jumelée = GRS + restauration interrégion."
},
{
 "id": "D5-037",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous avez créé un coffre Recovery Services avec la redondance par défaut et protégé 10 VM. Vous voulez maintenant passer le coffre en LRS pour réduire les coûts.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "Il faut changer la redondance de chaque VM",
  "Ce n'est pas possible une fois des éléments protégés : il faut arrêter la protection et supprimer les données, ou créer un nouveau coffre",
  "Vous pouvez changer la redondance à tout moment",
  "Le coffre passe en LRS au prochain redémarrage"
 ],
 "ans": 1,
 "expl": "<p>La <b>redondance du stockage</b> d'un coffre (GRS par défaut, LRS ou ZRS) doit être choisie <b>avant</b> la première sauvegarde. Une fois des éléments inscrits, elle ne peut plus être modifiée (sauf en arrêtant la protection et en supprimant les données). On crée souvent un nouveau coffre.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Configuration de sauvegarde",
  "rows": [
   [
    "*Redondance du stockage",
    "Verrouillée (éléments protégés)"
   ]
  ]
 },
 "keep": "Redondance du coffre : à choisir avant la première sauvegarde."
},
{
 "id": "D5-038",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type de coffre adapté à chaque charge de travail.</p><p>Pour répondre, faites glisser le type approprié vers chaque charge. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Coffres",
 "srcs": [
  "Coffre Recovery Services",
  "Coffre de sauvegarde (Backup vault)"
 ],
 "tgtHead": [
  "Charge de travail",
  "Coffre"
 ],
 "tgts": [
  {
   "l": "Machines virtuelles Azure",
   "a": 0
  },
  {
   "l": "Partages Azure Files",
   "a": 0
  },
  {
   "l": "Disques managés Azure (sauvegarde des disques)",
   "a": 1
  },
  {
   "l": "Blobs Azure (sauvegarde opérationnelle ou en coffre)",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Coffre Recovery Services</b> : VM Azure, Azure Files, SQL Server et SAP HANA dans des VM, agent MARS, et Azure Site Recovery.</li><li><b>Coffre de sauvegarde</b> : disques managés, blobs, Azure Database for PostgreSQL, AKS et d'autres charges plus récentes.</li></ul>",
 "portal": {
  "path": [
   "Centre de continuité d'activité"
  ],
  "title": "Coffres",
  "rows": [
   [
    "*Recovery Services",
    "VM, Azure Files, SQL/SAP, MARS, ASR"
   ],
   [
    "Coffre de sauvegarde",
    "Disques, blobs, PostgreSQL, AKS"
   ]
  ]
 },
 "keep": "VM + Files = Recovery Services ; disques + blobs = coffre de sauvegarde."
},
{
 "id": "D5-039",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une VM Windows exécute SQL Server. Vous voulez que les sauvegardes Azure Backup de la VM soient cohérentes avec les applications.</p><p>Quel mécanisme Azure Backup utilise-t-il sur Windows ?</p>",
 "opts": [
  "Un script pre-post obligatoire",
  "Le disque temporaire",
  "Le service VSS (cliché instantané des volumes)",
  "Les diagnostics de démarrage"
 ],
 "ans": 2,
 "expl": "<p>Sur Windows, Azure Backup coordonne avec le <b>VSS</b> pour obtenir une sauvegarde <b>cohérente avec les applications</b> (les applications vident leurs écritures). Sur Linux, on utilise des scripts pre et post pour obtenir la même cohérence ; sinon la sauvegarde est cohérente avec le système de fichiers.</p><p>Pour SQL Server, la sauvegarde dédiée « SQL Server dans une VM Azure » permet en plus les sauvegardes de journaux.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1",
   "Travaux"
  ],
  "title": "Sauvegarde VM-SQL",
  "rows": [
   [
    "*Cohérence",
    "Application (VSS)"
   ]
  ]
 },
 "keep": "Cohérence applicative sous Windows = VSS."
},
{
 "id": "D5-040",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'option de restauration Azure Backup adaptée à chaque besoin.</p><p>Pour répondre, faites glisser l'option appropriée vers chaque besoin. Chaque option peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Options",
 "srcs": [
  "Créer une machine virtuelle",
  "Restaurer les disques",
  "Remplacer l'existant",
  "Récupération de fichiers"
 ],
 "tgtHead": [
  "Besoin",
  "Option"
 ],
 "tgts": [
  {
   "l": "Récupérer trois fichiers supprimés sans toucher à la VM",
   "a": 3
  },
  {
   "l": "Revenir à l'état d'hier sur la VM existante, en gardant sa configuration",
   "a": 2
  },
  {
   "l": "Obtenir les disques pour créer une VM personnalisée avec un modèle",
   "a": 1
  },
  {
   "l": "Créer rapidement une copie de la VM pour un test",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Récupération de fichiers</b> : un script monte les disques du point de récupération comme lecteurs, et on copie les fichiers.</li><li><b>Remplacer l'existant</b> : remplace les disques de la VM existante par ceux du point de récupération.</li><li><b>Restaurer les disques</b> : crée des disques managés (et un modèle) pour créer ensuite la VM à votre façon.</li><li><b>Créer une VM</b> : nouvelle VM avec des paramètres de base.</li></ul>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM1"
  ],
  "title": "Restaurer la machine virtuelle",
  "rows": [
   [
    "*Créer",
    "Nouvelle VM"
   ],
   [
    "Restaurer les disques",
    "Disques + modèle"
   ],
   [
    "Remplacer l'existant",
    "Mêmes VM"
   ]
  ]
 },
 "keep": "Fichiers = récupération ; même VM = remplacer ; VM sur mesure = disques."
},
{
 "id": "D5-041",
 "dom": 5,
 "type": "order",
 "stem": "<p>Un utilisateur a supprimé un dossier sur le disque de données de VM4, sauvegardée chaque nuit. Vous devez récupérer ce dossier sans restaurer la VM.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Ouvrir Récupération de fichiers et choisir un point de récupération",
  "Télécharger et exécuter le script dans une machine (par exemple VM4)",
  "Copier le dossier depuis les lecteurs montés",
  "Démonter les disques depuis le portail",
  "Arrêter VM4",
  "Restaurer les disques de VM4"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>La <b>récupération de fichiers</b> : on choisit le <b>point de récupération</b>, on exécute le <b>script</b> (avec le mot de passe fourni) qui monte les disques en iSCSI, on <b>copie</b> les fichiers, puis on <b>démonte</b> les disques. La VM n'a pas besoin d'être arrêtée.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM4"
  ],
  "title": "Récupération de fichiers",
  "rows": [
   [
    "1",
    "Point de récupération"
   ],
   [
    "*2",
    "Script + mot de passe"
   ],
   [
    "3",
    "Démonter les disques"
   ]
  ],
  "btn": "Démonter les disques"
 },
 "keep": "Point → script → copier → démonter."
},
{
 "id": "D5-042",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez restaurer rapidement une VM à partir de la sauvegarde d'hier, avec le délai le plus court.</p><p>D'où proviennent les restaurations les plus rapides ?</p>",
 "opts": [
  "Des diagnostics de démarrage",
  "Du niveau de coffre en GRS uniquement",
  "Du compte de stockage du coffre en Archive",
  "Des instantanés locaux conservés quelques jours (restauration instantanée)"
 ],
 "ans": 3,
 "expl": "<p>Azure Backup garde des <b>instantanés</b> des disques pendant quelques jours (1 à 5 jours en stratégie standard, plus en stratégie améliorée) : la <b>restauration instantanée</b> à partir de ces instantanés est beaucoup plus rapide que depuis le coffre.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM1"
  ],
  "title": "Points de restauration",
  "rows": [
   [
    "*Instantané",
    "Hier · restauration instantanée"
   ],
   [
    "Coffre",
    "Plus lent"
   ]
  ]
 },
 "keep": "Restauration la plus rapide = instantanés (restauration instantanée)."
},
{
 "id": "D5-043",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une application critique doit être sauvegardée toutes les 4 heures, avec des points de restauration conservés 7 jours.</p><p>Quel type de stratégie de sauvegarde de VM devez-vous utiliser ?</p>",
 "opts": [
  "Une stratégie améliorée (Enhanced), avec une planification horaire",
  "Une stratégie standard quotidienne",
  "Une stratégie de cycle de vie",
  "Une règle de traitement des alertes"
 ],
 "ans": 0,
 "expl": "<p>La <b>stratégie améliorée</b> permet plusieurs sauvegardes par jour (toutes les 4, 6, 8 ou 12 heures), une rétention plus longue des instantanés, et prend en charge les VM avec Lancement fiable. La stratégie <b>standard</b> ne fait qu'une sauvegarde par jour.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Créer une stratégie",
  "rows": [
   [
    "*Sous-type",
    "Améliorée"
   ],
   [
    "Fréquence",
    "Toutes les 4 heures"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Plusieurs sauvegardes par jour = stratégie améliorée."
},
{
 "id": "D5-044",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous créez la stratégie de sauvegarde suivante : sauvegarde quotidienne à 23 h, rétention quotidienne 30 jours, hebdomadaire (dimanche) 12 semaines, mensuelle (premier dimanche) 12 mois, annuelle (premier dimanche de janvier) 5 ans.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Un point du mardi d'il y a 45 jours est-il encore disponible ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "Un point du dimanche d'il y a 10 semaines est-il encore disponible ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  },
  {
   "l": "Le point du premier dimanche de janvier d'il y a 3 ans est-il encore disponible ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Mardi, 45 jours : Non.</b> Seule la rétention quotidienne (30 jours) le couvrait.</li><li><b>Dimanche, 10 semaines : Oui.</b> Couvert par la rétention hebdomadaire de 12 semaines.</li><li><b>Janvier, 3 ans : Oui.</b> Couvert par la rétention annuelle de 5 ans.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Stratégie de sauvegarde",
  "rows": [
   [
    "Quotidienne",
    "30 jours"
   ],
   [
    "*Hebdomadaire",
    "12 semaines"
   ],
   [
    "Mensuelle",
    "12 mois"
   ],
   [
    "Annuelle",
    "5 ans"
   ]
  ]
 },
 "keep": "Un point est gardé s'il entre dans au moins une rétention."
},
{
 "id": "D5-045",
 "dom": 5,
 "type": "single",
 "stem": "<p>Un administrateur malveillant arrête la protection d'une VM et supprime ses données de sauvegarde.</p><p>Quelle fonctionnalité permet de récupérer ces données pendant un certain temps ?</p>",
 "opts": [
  "Une alerte de métrique",
  "La suppression réversible du coffre (14 jours par défaut, plus avec la suppression réversible améliorée)",
  "Les diagnostics de démarrage",
  "La redondance LRS"
 ],
 "ans": 1,
 "expl": "<p>Avec la <b>suppression réversible</b> (activée par défaut), les données de sauvegarde supprimées restent récupérables <b>14 jours</b> sans frais supplémentaires. La suppression réversible <b>améliorée</b> permet jusqu'à 180 jours et peut être rendue toujours active (irréversible).</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Paramètres de sécurité",
  "rows": [
   [
    "*Suppression réversible",
    "Activée · 14 jours"
   ]
  ]
 },
 "keep": "Sauvegarde supprimée récupérable = suppression réversible."
},
{
 "id": "D5-046",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez qu'aucune donnée de sauvegarde du coffre ne puisse être supprimée ou raccourcie avant sa date d'expiration, même par un administrateur, pour se protéger des rançongiciels.</p><p>Que devez-vous activer, puis verrouiller ?</p>",
 "opts": [
  "La restauration interrégion",
  "Une alerte",
  "Le coffre immuable",
  "La redondance ZRS"
 ],
 "ans": 2,
 "expl": "<p>Un <b>coffre immuable</b> empêche les opérations qui pourraient faire perdre des points de récupération (suppression, réduction de la rétention). Une fois <b>verrouillé</b>, ce réglage est irréversible.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Propriétés › Immuabilité",
  "rows": [
   [
    "*Coffre immuable",
    "Activé et verrouillé"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "Rien ne peut raccourcir les sauvegardes = coffre immuable verrouillé."
},
{
 "id": "D5-047",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les opérations critiques du coffre (désactiver la suppression réversible, réduire la rétention) doivent exiger l'approbation d'une autre équipe, propriétaire d'une ressource de garde dans un autre abonnement.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un second coffre",
  "Un verrou Lecture seule sur le coffre",
  "Une alerte de journal d'activité",
  "L'autorisation multi-utilisateur (MUA) avec une Resource Guard"
 ],
 "ans": 3,
 "expl": "<p>L'<b>autorisation multi-utilisateur</b> associe le coffre à une <b>Resource Guard</b> gérée par une autre équipe. Les opérations protégées exigent alors une autorisation sur la Resource Guard (souvent via PIM), en plus des droits sur le coffre.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Autorisation multi-utilisateur",
  "rows": [
   [
    "*Resource Guard",
    "rg-guard (autre abonnement)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Approbation d'une autre équipe = MUA + Resource Guard."
},
{
 "id": "D5-048",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez sauvegarder chaque jour des dossiers d'un serveur de fichiers <b>local</b> (pas une VM Azure) vers Azure, sans serveur de sauvegarde intermédiaire.</p><p>Que devez-vous installer sur le serveur ?</p>",
 "opts": [
  "L'agent Microsoft Azure Recovery Services (MARS)",
  "L'agent Azure Monitor",
  "L'agent de dépendances",
  "Azure File Sync"
 ],
 "ans": 0,
 "expl": "<p>L'<b>agent MARS</b> sauvegarde des fichiers, des dossiers et l'état du système d'un serveur Windows (local ou VM) directement vers un coffre Recovery Services, jusqu'à 3 fois par jour.</p><p>Pour des charges applicatives complètes (SQL, Hyper-V…), on utilise <b>Microsoft Azure Backup Server</b> (MABS) ou DPM.</p>",
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
    "Fichiers et dossiers → agent MARS"
   ]
  ]
 },
 "keep": "Fichiers d'un serveur local, sans serveur intermédiaire = MARS."
},
{
 "id": "D5-049",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous installez l'agent MARS sur un serveur local. L'assistant d'inscription vous demande un fichier.</p><p>Quel fichier devez-vous fournir, et où l'obtenir ?</p>",
 "opts": [
  "Un certificat SSL du serveur",
  "Les informations d'identification du coffre, téléchargées depuis le coffre Recovery Services",
  "Une clé d'accès du compte de stockage",
  "Un fichier de paramètres ARM"
 ],
 "ans": 1,
 "expl": "<p>On télécharge les <b>informations d'identification du coffre</b> (vault credentials) depuis le coffre Recovery Services. Elles ne sont valables que pour une durée limitée : il faut les télécharger juste avant l'inscription. L'agent demande aussi une <b>phrase secrète</b> de chiffrement, à conserver précieusement : sans elle, la restauration est impossible.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Préparer l'infrastructure",
  "rows": [
   [
    "*Informations d'identification du coffre",
    "Télécharger"
   ],
   [
    "Phrase secrète",
    "À conserver"
   ]
  ],
  "btn": "Télécharger"
 },
 "keep": "Inscription MARS = informations d'identification du coffre + phrase secrète."
},
{
 "id": "D5-050",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez sauvegarder le partage Azure Files share1 chaque jour, avec une rétention de 30 jours et la possibilité de restaurer un seul fichier.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "La réplication d'objets",
  "L'agent MARS sur chaque client",
  "Azure Backup pour Azure Files, dans un coffre Recovery Services de la même région",
  "Azure Site Recovery"
 ],
 "ans": 2,
 "expl": "<p>La sauvegarde <b>Azure Files</b> d'Azure Backup (coffre Recovery Services) planifie des <b>instantanés de partage</b> (ou une sauvegarde en coffre), gère leur rétention, et permet de restaurer tout le partage ou des fichiers individuels, vers l'emplacement d'origine ou un autre.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "stfiles"
  ],
  "title": "share1 | Sauvegarde",
  "rows": [
   [
    "*Coffre",
    "Recovery Services (même région)"
   ],
   [
    "Rétention",
    "30 jours"
   ]
  ],
  "btn": "Activer la sauvegarde"
 },
 "keep": "Sauvegarder Azure Files = Azure Backup (coffre Recovery Services)."
},
{
 "id": "D5-051",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez pouvoir restaurer les blobs d'un compte de stockage à n'importe quel moment des 14 derniers jours, sans copier les données ailleurs.</p><p>Quel type de sauvegarde des blobs devez-vous configurer dans un coffre de sauvegarde ?</p>",
 "opts": [
  "L'agent MARS",
  "Azure Site Recovery",
  "La sauvegarde en coffre uniquement",
  "La sauvegarde opérationnelle (basée sur la restauration à un point dans le temps, le contrôle de version et la suppression réversible)"
 ],
 "ans": 3,
 "expl": "<p>La <b>sauvegarde opérationnelle</b> des blobs est locale : elle s'appuie sur les fonctions du compte (restauration à un point dans le temps, contrôle de version, suppression réversible, flux de modification) et permet une restauration continue. La <b>sauvegarde en coffre</b> copie les données dans le coffre, ce qui protège aussi contre la perte du compte.</p>",
 "portal": {
  "path": [
   "Coffres de sauvegarde",
   "bv1"
  ],
  "title": "Configurer la sauvegarde",
  "rows": [
   [
    "Source",
    "Blobs"
   ],
   [
    "*Type",
    "Opérationnelle · 14 jours"
   ]
  ],
  "btn": "Vérifier + configurer"
 },
 "keep": "Restauration continue locale des blobs = sauvegarde opérationnelle."
},
{
 "id": "D5-052",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez arrêter la sauvegarde de VM5, qui est décommissionnée, mais garder les points de récupération existants selon leur rétention.</p><p>Quelle option devez-vous choisir ?</p>",
 "opts": [
  "Arrêter la sauvegarde en conservant les données de sauvegarde",
  "Arrêter la sauvegarde en supprimant les données de sauvegarde",
  "Supprimer le coffre",
  "Suspendre la stratégie pour toutes les VM"
 ],
 "ans": 0,
 "expl": "<p><b>Arrêter la sauvegarde et conserver les données</b> : plus aucune nouvelle sauvegarde, mais les points existants restent restaurables (selon la stratégie, ou indéfiniment selon l'option choisie). Le stockage reste facturé.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM5"
  ],
  "title": "Arrêter la sauvegarde",
  "rows": [
   [
    "*Option",
    "Conserver les données de sauvegarde"
   ]
  ],
  "btn": "Arrêter la sauvegarde"
 },
 "keep": "Plus de sauvegardes mais garder les points = arrêter en conservant."
},
{
 "id": "D5-053",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez supprimer le coffre Recovery Services Vault2. La suppression échoue.</p><p>Quelle est la cause la plus probable ?</p>",
 "opts": [
  "Le coffre est dans un groupe de ressources verrouillé en lecture seule uniquement",
  "Le coffre contient encore des éléments protégés ou des données supprimées de façon réversible",
  "Le coffre est en GRS",
  "Le coffre n'a pas d'alerte"
 ],
 "ans": 1,
 "expl": "<p>Un coffre ne peut pas être supprimé tant qu'il contient des <b>éléments protégés</b>, des <b>données de sauvegarde</b> (y compris en suppression réversible), des serveurs inscrits ou des éléments de réplication Site Recovery. Il faut tout arrêter et supprimer, puis attendre la fin de la suppression réversible ou la purger.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault2"
  ],
  "title": "Supprimer le coffre",
  "rows": [
   [
    "*Éléments protégés",
    "3"
   ],
   [
    "Supprimés de façon réversible",
    "2"
   ]
  ]
 },
 "keep": "Vider le coffre (y compris réversible) avant de le supprimer."
},
{
 "id": "D5-054",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez vérifier en un seul endroit l'état des sauvegardes de 15 coffres répartis dans plusieurs abonnements et régions, avec les travaux en échec.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Le journal d'activité",
  "Azure Advisor uniquement",
  "Le centre de continuité d'activité (ou Centre de sauvegarde) d'Azure",
  "Chaque coffre séparément"
 ],
 "ans": 2,
 "expl": "<p>Le <b>Centre de continuité d'activité</b> (Business Continuity Center), qui remplace le Centre de sauvegarde, offre une vue unifiée de la protection (Backup et Site Recovery) sur plusieurs coffres, abonnements et régions : éléments protégés, travaux, alertes, stratégies.</p>",
 "portal": {
  "path": [
   "Centre de continuité d'activité"
  ],
  "title": "Vue d'ensemble",
  "rows": [
   [
    "*Coffres",
    "15 · plusieurs abonnements"
   ],
   [
    "Travaux en échec",
    "4"
   ]
  ]
 },
 "keep": "Vue multicoffres = Centre de continuité d'activité."
},
{
 "id": "D5-055",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez des rapports sur la consommation de stockage de sauvegarde, les tendances des travaux et les éléments protégés sur les 6 derniers mois.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une alerte de métrique",
  "Une règle de cycle de vie",
  "Le flux de modification",
  "Les rapports de sauvegarde, avec les paramètres de diagnostic des coffres envoyés vers un espace de travail Log Analytics"
 ],
 "ans": 3,
 "expl": "<p>Les <b>rapports de sauvegarde</b> (basés sur des classeurs) s'appuient sur les données envoyées par les <b>paramètres de diagnostic</b> des coffres vers <b>Log Analytics</b>. Ils couvrent la consommation, les travaux, les stratégies et l'optimisation.</p>",
 "portal": {
  "path": [
   "Centre de continuité d'activité",
   "Rapports"
  ],
  "title": "Rapports de sauvegarde",
  "rows": [
   [
    "*Source",
    "Diagnostics des coffres → Log Analytics"
   ]
  ]
 },
 "keep": "Rapports de sauvegarde = diagnostics des coffres vers Log Analytics."
},
{
 "id": "D5-056",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les sauvegardes de VM6 échouent avec une erreur liée à l'agent de VM.</p><p>Que devez-vous vérifier en premier ?</p>",
 "opts": [
  "Que l'agent de VM Azure est installé, à jour et en cours d'exécution, et que la VM peut joindre les services Azure (y compris 168.63.129.16)",
  "Que le coffre est en LRS",
  "Que la VM est dans un groupe à haute disponibilité",
  "Que la VM a une adresse IP publique"
 ],
 "ans": 0,
 "expl": "<p>Azure Backup utilise une extension qui dépend de l'<b>agent de VM</b>. Les échecs viennent souvent d'un agent arrêté ou obsolète, ou d'un blocage réseau (NSG, proxy, pare-feu) vers les services Azure et l'adresse 168.63.129.16.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM6"
  ],
  "title": "VM6 | Propriétés",
  "rows": [
   [
    "*État de l'agent",
    "Pas prêt"
   ],
   [
    "Réseau",
    "168.63.129.16 joignable ?"
   ]
  ]
 },
 "keep": "Échec de sauvegarde lié à l'agent = agent de VM + réseau."
},
{
 "id": "D5-057",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM7 est chiffrée avec Azure Disk Encryption (clés dans Key Vault). La configuration de la sauvegarde échoue.</p><p>Que devez-vous vérifier ?</p>",
 "opts": [
  "Que le coffre de clés est public",
  "Que le service Backup Management Service a accès aux clés et secrets du coffre de clés",
  "Que le coffre Recovery Services est dans une autre région",
  "Que VM7 n'a pas de disque de données"
 ],
 "ans": 1,
 "expl": "<p>Pour sauvegarder une VM chiffrée par ADE, Azure Backup doit pouvoir lire les <b>clés et secrets</b> dans le coffre de clés : il faut donner l'accès au service <b>Backup Management Service</b> (stratégie d'accès ou rôle). Le portail le propose lors de l'activation.</p>",
 "portal": {
  "path": [
   "Coffres de clés",
   "kv-ade"
  ],
  "title": "Stratégies d'accès",
  "rows": [
   [
    "*Backup Management Service",
    "Clés + secrets"
   ]
  ]
 },
 "keep": "VM ADE = accès de Backup Management Service au coffre de clés."
},
{
 "id": "D5-058",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous gérez Azure Backup pour des VM.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une VM peut être sauvegardée par deux coffres Recovery Services en même temps.",
   "a": 1
  },
  {
   "l": "Une même stratégie de sauvegarde peut être appliquée à plusieurs VM.",
   "a": 0
  },
  {
   "l": "Le disque temporaire est inclus dans la sauvegarde.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Deux coffres : Non.</b> Une VM n'est protégée que par un seul coffre à la fois.</li><li><b>Stratégie partagée : Oui.</b></li><li><b>Disque temporaire : Non</b>, il n'est jamais sauvegardé.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Éléments de sauvegarde",
  "rows": [
   [
    "*VM1",
    "Un seul coffre"
   ],
   [
    "Stratégie",
    "Partagée"
   ],
   [
    "Disque temporaire",
    "Exclu"
   ]
  ]
 },
 "keep": "Un coffre par VM ; stratégie partagée ; disque temporaire jamais sauvegardé."
},
{
 "id": "D5-059",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous lancez une sauvegarde à la demande de VM8 avant une mise à jour risquée. Quelle date d'expiration pouvez-vous choisir pour ce point de récupération ?</p>",
 "opts": [
  "Aucune : il est conservé indéfiniment",
  "Toujours 30 jours",
  "Une date de conservation choisie au moment de la sauvegarde à la demande",
  "Toujours celle de la stratégie quotidienne"
 ],
 "ans": 2,
 "expl": "<p>Une <b>sauvegarde à la demande</b> (Sauvegarder maintenant) permet de choisir une <b>date de conservation</b> propre à ce point de récupération, indépendamment de la stratégie.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM8"
  ],
  "title": "Sauvegarder maintenant",
  "rows": [
   [
    "*Conserver la sauvegarde jusqu'au",
    "Date au choix"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Sauvegarde à la demande = date de conservation au choix."
},
{
 "id": "D5-060",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les sauvegardes de 200 VM doivent être activées automatiquement dès leur création, dans toutes les VM qui portent l'étiquette Backup=Oui.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Une règle de traitement des alertes",
  "Un script exécuté à la main chaque semaine",
  "Une alerte de journal d'activité",
  "Une stratégie Azure Policy intégrée de type DeployIfNotExists qui configure la sauvegarde des VM avec cette étiquette"
 ],
 "ans": 3,
 "expl": "<p>Azure propose des stratégies intégrées <b>DeployIfNotExists</b> qui configurent la sauvegarde des VM (avec ou sans filtre d'étiquette) vers un coffre et une stratégie donnés. Les VM existantes sont corrigées avec une tâche de correction.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affecter une stratégie"
  ],
  "title": "Configurer la sauvegarde des VM avec une étiquette",
  "rows": [
   [
    "*Effet",
    "DeployIfNotExists"
   ],
   [
    "Étiquette",
    "Backup=Oui"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Sauvegarde automatique à la création = Azure Policy DeployIfNotExists."
}
);
