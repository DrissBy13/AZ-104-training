/* Domaine 5 : Supervision et sauvegarde */
AZ.questions.push(
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
 "keep": "Quelle règle NSG bloque un flux = vérification des flux IP.",
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
 }
},
{
 "id": "D5-005",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez afficher, dans un espace de travail Log Analytics, la date et l'auteur de chaque suppression de ressource dans l'abonnement.</p><p>Comment devez-vous compléter la requête ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "keep": "Journal d'activité en KQL = AzureActivity ; colonnes = project.",
 "tpl": "{0}<br>| where OperationNameValue contains \"delete\"<br>| {1} TimeGenerated, Caller, ResourceId"
},
{
 "id": "D5-008",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous gérez la protection de VM1, comme indiqué dans le document Réplication (cliquez sur l'onglet <b>Réplication</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si l'affirmation est vraie. Sinon, sélectionnez Non.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Réplication",
   "h": "<p>VM1 (France Central) est protégée par Azure Site Recovery vers France Sud. État actuel :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Élément</th><th>Valeur</th></tr><tr><td>Région source</td><td>France Central</td></tr><tr><td>Région cible</td><td>France Sud</td></tr><tr><td>État de réplication</td><td>Protégé</td></tr><tr><td>Dernier test de basculement</td><td>Jamais</td></tr></table></div>"
  }
 ],
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
