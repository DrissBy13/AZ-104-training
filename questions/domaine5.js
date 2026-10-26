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
 "expl": "Le <b>journal d'activité</b> enregistre automatiquement les opérations sur les ressources (qui, quoi, quand), 90 jours."
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
 "expl": "<b>Règle d'alerte</b> : quand alerter. <b>Groupe d'actions</b> : qui prévenir, quoi faire. <b>Règle de traitement</b> : modifier les alertes déclenchées (supprimer les notifications selon un planning). <b>Paramètre de diagnostic</b> : journaux d'un service Azure. <b>Règle de collecte</b> (avec l'agent Azure Monitor) : l'intérieur des VM."
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
 "expl": "La <b>vérification des flux IP</b> teste un flux précis (VM, sens, protocole, ports) et répond Autorisé/Refusé avec <b>la règle NSG</b> qui décide. Tronçon suivant : routage. Règles de sécurité effectives : liste complète des règles d'une interface, sans tester un flux. Journaux et capture : bien plus lourds."
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
 "expl": "Pour Azure Backup, le coffre doit être dans la <b>même région</b> que la VM. (Pour Site Recovery, c'est l'inverse : coffre dans la région cible.)"
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
 "expl": "<b>AzureActivity</b> est la table du journal d'activité. <b>project</b> choisit les colonnes affichées. summarize regroupe et calcule, render fait un graphique, take limite le nombre de lignes. Perf, Heartbeat et Event concernent les machines (performances, présence de l'agent, événements Windows)."
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
 "expl": "L'intérieur de l'OS demande l'<b>agent Azure Monitor</b> et une <b>règle de collecte de données</b> (quoi collecter, où l'envoyer)."
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
 "expl": "La <b>récupération de fichiers</b> monte les disques d'un point de restauration comme des lecteurs : on copie le fichier, puis on démonte. Remplacer les disques arrête VM1 et la ramène entièrement à la veille. Le test de basculement concerne Site Recovery."
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
 "expl": "Le <b>test de basculement</b> crée une copie dans un réseau isolé, sans toucher la production. Pour Site Recovery entre régions, le coffre est dans la <b>région cible</b>. Le cycle est : basculer → <b>valider</b> (« basculement confirmé ») → reprotéger."
}
);
