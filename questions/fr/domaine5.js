/* Domaine 5 : Supervision et sauvegarde */
AZ.questions.push(
{
 "id": "D5-001",
 "dom": 5,
 "type": "single",
 "stem": "<p>Un groupe de ressources a été supprimé hier dans votre abonnement. Vous devez identifier l'utilisateur qui l'a supprimé, avec le moins d'effort.</p><p>Que devez-vous consulter ?</p>",
 "opts": [
  "L'explorateur de métriques",
  "Le journal d'activité",
  "VM insights",
  "Les journaux de flux de réseau virtuel"
 ],
 "ans": 1,
 "expl": "<p>Le <b>journal d'activité</b> enregistre automatiquement, pendant <b>90 jours</b>, les opérations du plan de contrôle sur les ressources : qui (Caller), quoi (Delete Resource Group), quand et avec quel résultat. Il suffit de filtrer sur l'opération et la période.</p><p>Les métriques mesurent des valeurs numériques (CPU, débit). VM insights surveille les performances des VM. Les journaux de flux enregistrent le trafic réseau.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Journal d'activité"
  ],
  "title": "Journal d'activité",
  "menu": [
   "*Journal d'activité",
   "Alertes",
   "Métriques"
  ],
  "rows": [
   [
    "Opération",
    "Delete Resource Group"
   ],
   [
    "*Événement initié par",
    "alex@contoso.com"
   ],
   [
    "Horodatage",
    "Hier 16:42"
   ]
  ]
 },
 "keep": "Qui a fait quoi sur une ressource = journal d'activité (90 jours)."
},
{
 "id": "D5-002",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous configurez la supervision de votre abonnement Azure.</p><p>Quel composant devez-vous utiliser pour chaque exigence ? Pour répondre, faites glisser le composant approprié vers chaque exigence. Chaque composant peut être utilisé une fois, plusieurs fois ou pas du tout.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Composants",
 "tgtHead": [
  "Exigence",
  "Composant"
 ],
 "srcs": [
  "Règle d'alerte",
  "Groupe d'actions",
  "Règle de traitement des alertes",
  "Paramètre de diagnostic",
  "Règle de collecte de données"
 ],
 "tgts": [
  {
   "l": "Déclencher une alerte quand le CPU de VM1 dépasse 85 %",
   "a": 0
  },
  {
   "l": "Envoyer un SMS à l'équipe d'astreinte",
   "a": 1
  },
  {
   "l": "Ne notifier personne pendant la maintenance du dimanche",
   "a": 2
  },
  {
   "l": "Envoyer les journaux de ressource de storage1 vers Log Analytics",
   "a": 3
  },
  {
   "l": "Collecter le journal Système de Windows de VM1",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Règle d'alerte</b> : la condition (CPU > 85 %) et la ressource surveillée.</li><li><b>Groupe d'actions</b> : qui prévenir et comment (SMS, e-mail, appel, webhook, runbook, Logic App).</li><li><b>Règle de traitement des alertes</b> : modifie les alertes déclenchées, par exemple supprime les notifications pendant une fenêtre de maintenance planifiée.</li><li><b>Paramètre de diagnostic</b> : envoie les journaux de ressource d'un service Azure vers Log Analytics, un stockage ou Event Hubs.</li><li><b>Règle de collecte de données</b> (avec l'agent Azure Monitor) : collecte ce qui se passe <b>dans</b> l'OS des VM (événements, compteurs).</li></ul>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Moniteur | Alertes",
  "menu": [
   "*Règles d'alerte",
   "*Groupes d'actions",
   "*Règles de traitement des alertes"
  ],
  "rows": [
   [
    "Règle",
    "CPU > 85 % · VM1"
   ],
   [
    "Groupe d'actions",
    "SMS astreinte"
   ],
   [
    "Traitement",
    "Suppression · dimanche"
   ]
  ]
 },
 "keep": "Quand = règle d'alerte ; qui = groupe d'actions ; faire taire = règle de traitement."
},
{
 "id": "D5-003",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Votre abonnement contient 20 réseaux virtuels et 500 machines virtuelles. VM501 ne parvient pas à communiquer avec VM20 sur le port TCP 1433. Vous pensez qu'un groupe de sécurité réseau bloque la communication.</p><p>Vous devez identifier la règle qui bloque le trafic. La solution doit limiter l'effort d'administration.</p><p>Quel outil devez-vous utiliser ? Pour répondre, sélectionnez l'outil approprié dans la zone de réponse.</p>",
 "win": {
  "title": "Network Watcher",
  "nav": [
   {
    "g": "Supervision",
    "items": [
     "Topologie",
     "Moniteur de connexion"
    ]
   },
   {
    "g": "Outils de diagnostic réseau",
    "items": [
     "Vérification des flux IP",
     "Tronçon suivant",
     "Règles de sécurité effectives",
     "Résolution des problèmes de VPN",
     "Capture de paquets",
     "Résolution des problèmes de connexion"
    ]
   },
   {
    "g": "Journaux",
    "items": [
     "Journaux de flux",
     "Traffic Analytics"
    ]
   }
  ]
 },
 "ans": "Vérification des flux IP",
 "expl": "<p>La <b>vérification des flux IP</b> teste un flux précis (VM, sens, protocole, adresses et ports) et répond Autorisé ou Refusé, avec le <b>nom de la règle NSG</b> qui décide. C'est l'outil le plus direct ici.</p><ul><li><b>Tronçon suivant</b> : routage, pas filtrage.</li><li><b>Règles de sécurité effectives</b> : la liste complète des règles d'une interface, à analyser à la main.</li><li><b>Journaux de flux</b> et <b>capture de paquets</b> : bien plus lourds à mettre en place et à lire.</li></ul>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Vérification des flux IP",
  "menu": [
   "*Vérification des flux IP"
  ],
  "rows": [
   [
    "VM501 → VM20",
    "TCP 1433 · sortant"
   ],
   [
    "*Résultat",
    "Refusé · NSG-DB / Deny-SQL"
   ]
  ],
  "btn": "Vérifier"
 },
 "keep": "Quelle règle NSG bloque un flux = vérification des flux IP."
},
{
 "id": "D5-004",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM1 se trouve en France Central. Vous voulez la sauvegarder dans un coffre Recovery Services nommé Vault1, situé en Europe Nord, mais Vault1 n'apparaît pas dans la liste.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Passer Vault1 en stockage localement redondant",
  "Installer l'agent Azure Monitor sur VM1",
  "Activer la restauration interrégion sur Vault1",
  "Créer un coffre Recovery Services en France Central"
 ],
 "ans": 3,
 "expl": "<p>Pour <b>Azure Backup</b>, le coffre Recovery Services doit être dans la <b>même région</b> que la VM à protéger : Vault1 (Europe Nord) n'est donc pas proposé pour VM1 (France Central). Il faut créer un coffre en France Central.</p><p>La redondance du coffre (LRS, GRS) et la restauration interrégion ne changent pas cette règle. Pour <b>Site Recovery</b>, c'est l'inverse : le coffre est dans la région <b>cible</b>.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Créer"
  ],
  "title": "Créer un coffre Recovery Services",
  "rows": [
   [
    "*Région",
    "France Central (comme VM1)"
   ],
   [
    "Nom",
    "Vault-FRC"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Backup : coffre dans la région de la VM ; Site Recovery : coffre dans la région cible."
},
{
 "id": "D5-005",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez afficher, dans un espace de travail Log Analytics, la date et l'auteur de chaque suppression de ressource dans l'abonnement.</p><p>Comment devez-vous compléter la requête ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0}<br>| where OperationNameValue contains \"delete\"<br>| {1} TimeGenerated, Caller, ResourceId",
 "rows": [
  {
   "o": [
    "Perf",
    "Heartbeat",
    "AzureActivity",
    "Event"
   ],
   "a": 2,
   "l": "Table"
  },
  {
   "o": [
    "summarize",
    "project",
    "render",
    "take"
   ],
   "a": 1,
   "l": "Opérateur"
  }
 ],
 "expl": "<p><b>AzureActivity</b> est la table du journal d'activité, une fois envoyé vers Log Analytics. On filtre avec <code>where</code> sur les opérations de suppression, puis <b>project</b> choisit les colonnes à afficher (date, auteur, ressource).</p><ul><li><code>summarize</code> regroupe et calcule (count, avg…).</li><li><code>render</code> trace un graphique ; <code>take</code> limite le nombre de lignes.</li><li><b>Perf</b>, <b>Heartbeat</b> et <b>Event</b> contiennent des données de machines : compteurs de performance, présence de l'agent, événements Windows.</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "LAW1"
  ],
  "title": "LAW1 | Journaux",
  "menu": [
   "*Journaux"
  ],
  "rows": [
   [
    "*AzureActivity",
    "| where … contains \"delete\""
   ],
   [
    "| project",
    "TimeGenerated, Caller, ResourceId"
   ]
  ],
  "btn": "Exécuter"
 },
 "keep": "Journal d'activité en KQL = AzureActivity ; colonnes = project."
},
{
 "id": "D5-006",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez collecter les événements du journal Système de Windows de VM1 dans un espace de travail Log Analytics.</p><p>Quelles deux actions devez-vous effectuer ? Chaque réponse correcte présente une partie de la solution.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Installer l'agent Azure Monitor sur VM1",
  "Créer un paramètre de diagnostic sur VM1 vers Event Hubs",
  "Activer Network Watcher dans la région",
  "Créer une règle de collecte de données"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<p>Ce qui se passe <b>dans</b> le système d'exploitation (journaux d'événements, compteurs, Syslog) se collecte avec l'<b>agent Azure Monitor</b> et une <b>règle de collecte de données</b> (DCR), qui indique quoi collecter (journal Système, niveaux) et vers quel espace de travail.</p><p>Un paramètre de diagnostic concerne les journaux de la plateforme, pas l'intérieur de l'OS. Network Watcher n'a pas de rapport.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Règles de collecte de données"
  ],
  "title": "Créer une règle de collecte de données",
  "rows": [
   [
    "*Ressources",
    "VM1 (agent Azure Monitor)"
   ],
   [
    "*Source",
    "Journaux des événements Windows · Système"
   ],
   [
    "Destination",
    "LAW1"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Dans l'OS d'une VM = agent Azure Monitor + règle de collecte de données."
},
{
 "id": "D5-007",
 "dom": 5,
 "type": "single",
 "stem": "<p>Un utilisateur a supprimé un fichier sur le disque de données de VM1. VM1 est sauvegardée chaque nuit par Azure Backup.</p><p>Vous devez récupérer ce fichier le plus rapidement possible, sans interrompre VM1. Que devez-vous faire ?</p>",
 "opts": [
  "Remplacer les disques existants",
  "Utiliser la récupération de fichiers",
  "Créer une nouvelle machine virtuelle à partir de la sauvegarde",
  "Effectuer un test de basculement"
 ],
 "ans": 1,
 "expl": "<p>La <b>récupération de fichiers</b> télécharge un script qui monte les disques d'un point de restauration comme des lecteurs sur une machine. On copie le fichier, puis on démonte. VM1 continue de tourner.</p><ul><li><b>Remplacer les disques</b> arrête VM1 et la ramène entièrement à l'état de la sauvegarde.</li><li><b>Créer une VM</b> est bien plus long pour un seul fichier.</li><li>Le <b>test de basculement</b> concerne Site Recovery.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1",
   "Éléments de sauvegarde",
   "VM1"
  ],
  "title": "VM1 | Récupération de fichiers",
  "rows": [
   [
    "Point de restauration",
    "Cette nuit 02:00"
   ],
   [
    "*Étape 2",
    "Télécharger le script et monter les disques"
   ]
  ],
  "btn": "Télécharger l'exécutable"
 },
 "keep": "Un fichier sans arrêter la VM = récupération de fichiers."
},
{
 "id": "D5-008",
 "dom": 5,
 "type": "yngrid",
 "docs": [
  {
   "t": "Réplication",
   "h": "<p>VM1 (France Central) est protégée par Azure Site Recovery vers France Sud. État actuel :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Élément</th><th>Valeur</th></tr><tr><td>Région source</td><td>France Central</td></tr><tr><td>Région cible</td><td>France Sud</td></tr><tr><td>État de réplication</td><td>Protégé</td></tr><tr><td>Dernier test de basculement</td><td>Jamais</td></tr></table></div>"
  }
 ],
 "stem": "<p>Vous gérez la protection de VM1, comme indiqué dans le document Réplication (cliquez sur l'onglet <b>Réplication</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si l'affirmation est vraie. Sinon, sélectionnez Non.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un test de basculement arrête VM1 dans France Central.",
   "a": 1
  },
  {
   "l": "Le coffre Recovery Services utilisé pour cette protection est situé en France Sud.",
   "a": 0
  },
  {
   "l": "Après un basculement, la reprotection est possible dès que le basculement est validé.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Test de basculement : Non.</b> Il crée une copie de VM1 dans un réseau isolé de la région cible, sans toucher la production.</li><li><b>Coffre en France Sud : Oui.</b> Pour Site Recovery entre régions, le coffre est dans la <b>région cible</b>.</li><li><b>Reprotection : Oui.</b> Le cycle est basculer, <b>valider</b> (« basculement confirmé »), puis reprotéger pour répliquer dans l'autre sens.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault-FRS",
   "Éléments répliqués",
   "VM1"
  ],
  "title": "VM1 | Vue d'ensemble",
  "rows": [
   [
    "État",
    "Protégé"
   ],
   [
    "*Test de basculement",
    "Réseau isolé · production intacte"
   ]
  ],
  "btn": "Test de basculement"
 },
 "keep": "Test = réseau isolé ; coffre ASR dans la région cible ; basculer → valider → reprotéger."
}
);
