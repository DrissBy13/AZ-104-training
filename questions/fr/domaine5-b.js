/* Domaine 5 : supervision et sauvegarde (lot B : D5-009 à D5-060) */
AZ.questions.push(
{
 "id": "D5-009",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la source de données Azure Monitor adaptée à chaque besoin.</p><p>Pour répondre, faites glisser la source appropriée vers chaque besoin. Chaque source peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Sources",
 "tgtHead": [
  "Besoin",
  "Source"
 ],
 "srcs": [
  "Métriques de plateforme",
  "Journal d'activité",
  "Journaux de ressources",
  "Journaux invités (via l'agent Azure Monitor)"
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
 "id": "D5-019",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type d'alerte adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types d'alerte",
 "tgtHead": [
  "Besoin",
  "Type"
 ],
 "srcs": [
  "Alerte de métrique",
  "Alerte de recherche dans les journaux",
  "Alerte de journal d'activité",
  "Alerte Service Health",
  "Alerte Resource Health"
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
 "keep": "ago = période ; summarize = agréger ; sort/order = trier.",
 "tpl": "Event<br>| where TimeGenerated &gt; {0}(24h) and EventLevelName == \"Error\"<br>| {1} NbErreurs = count() by Computer<br>| {2} by NbErreurs desc"
},
{
 "id": "D5-025",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez afficher les 10 VM avec le CPU moyen le plus élevé sur la dernière heure, à partir de la table Perf.</p><p>Comment devez-vous compléter la requête KQL ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "keep": "top = tri + limite ; take/limit = sans tri.",
 "tpl": "Perf<br>| where TimeGenerated &gt; ago(1h) and ObjectName == \"Processor\" and CounterName == \"% Processor Time\"<br>| summarize CpuMoyen = {0}(CounterValue) by Computer<br>| {1} 10 by CpuMoyen desc"
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
 "id": "D5-038",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type de coffre adapté à chaque charge de travail.</p><p>Pour répondre, faites glisser le type approprié vers chaque charge. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Coffres",
 "tgtHead": [
  "Charge de travail",
  "Coffre"
 ],
 "srcs": [
  "Coffre Recovery Services",
  "Coffre de sauvegarde (Backup vault)"
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
 "id": "D5-040",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'option de restauration Azure Backup adaptée à chaque besoin.</p><p>Pour répondre, faites glisser l'option appropriée vers chaque besoin. Chaque option peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Options",
 "tgtHead": [
  "Besoin",
  "Option"
 ],
 "srcs": [
  "Créer une machine virtuelle",
  "Restaurer les disques",
  "Remplacer l'existant",
  "Récupération de fichiers"
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
 "keep": "Point → script → copier → démonter.",
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
 ]
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
}
);
