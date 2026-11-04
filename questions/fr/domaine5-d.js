/* Domaine 5 : supervision et sauvegarde (lot D : D5-111 à D5-160) */
AZ.questions.push(
{
 "id": "D5-111",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez attribuer le rôle Azure Backup adapté à chaque besoin, en respectant le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "tgtHead": [
  "Besoin",
  "Rôle"
 ],
 "srcs": [
  "Lecteur de sauvegarde",
  "Opérateur de sauvegarde",
  "Contributeur de sauvegarde",
  "Propriétaire"
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
 "keep": "Alerte de journal : mesure + agrégation + période + fréquence + seuil.",
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
 }
},
{
 "id": "D5-136",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Vous devez activer la restauration interrégion sur le coffre Vault5.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 "keep": "Redondance et restauration interrégion = Propriétés du coffre.",
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
 }
},
{
 "id": "D5-137",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Vous devez interroger avec KQL les journaux de l'espace de travail WS6.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 "keep": "Requêtes KQL = Journaux.",
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
 }
},
{
 "id": "D5-139",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous devez limiter le temps de restauration d'une VM critique après une erreur humaine, tout en gardant des points sur 1 an.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle fait partie de la solution. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Désactiver la suppression réversible pour réduire le coût",
   "a": 1
  },
  {
   "l": "Passer le coffre en LRS pour garder plus de points",
   "a": 1
  },
  {
   "l": "Une stratégie améliorée, plusieurs sauvegardes par jour",
   "a": 0
  },
  {
   "l": "Configurer une rétention mensuelle sur 12 mois",
   "a": 0
  }
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
 "keep": "Journal d'activité = diagnostic-settings subscription create.",
 "tpl": "az monitor diagnostic-settings {0} create --name activite-vers-ws7 --location francecentral {1} &lt;id WS7&gt; --logs '[{\"category\": \"Administrative\", \"enabled\": true}]'"
},
{
 "id": "D5-141",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez afficher le nombre de VM qui ont envoyé un signal Heartbeat au cours de la dernière heure, par système d'exploitation.</p><p>Comment devez-vous compléter la requête KQL ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "keep": "Compter des éléments distincts = dcount.",
 "tpl": "Heartbeat<br>| where TimeGenerated &gt; ago(1h)<br>| summarize NbVM = {0}(Computer) by {1}"
},
{
 "id": "D5-142",
 "dom": 5,
 "type": "order",
 "stem": "<p>Vous devez collecter les journaux d'événements Application de 40 VM Windows dans un espace de travail qui n'existe pas encore.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 "keep": "Destination → DCR → association.",
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
 ]
},
{
 "id": "D5-143",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la destination adaptée pour les métriques ou journaux de chaque scénario.</p><p>Pour répondre, faites glisser la solution appropriée vers chaque scénario. Chaque solution peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Scénario",
  "Solution"
 ],
 "srcs": [
  "Alerte de métrique",
  "Alerte de recherche dans les journaux",
  "Classeur",
  "Paramètre de diagnostic vers stockage"
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
}
);
