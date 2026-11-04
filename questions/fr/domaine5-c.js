/* Domaine 5 : supervision et sauvegarde (lot C : D5-061 à D5-110) */
AZ.questions.push(
{
 "id": "D5-063",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous comparez les coffres Recovery Services pour Azure Backup et Azure Site Recovery (VM Azure).</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Coffre pour sauvegarder des VM de France Central :",
   "o": [
    "N'importe où",
    "En West Europe",
    "En France Central"
   ],
   "a": 2
  },
  {
   "l": "Coffre pour répliquer avec Site Recovery des VM de France Central vers West Europe :",
   "o": [
    "En West Europe",
    "N'importe où",
    "En France Central"
   ],
   "a": 0
  },
  {
   "l": "Compte de stockage de cache utilisé par Site Recovery :",
   "o": [
    "Dans le coffre",
    "Dans la région cible",
    "Dans la région source"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Backup</b> : coffre dans la <b>même région</b> que les VM.</li><li><b>Site Recovery</b> : coffre dans la <b>région cible</b> (différente de la source).</li><li>Site Recovery utilise un <b>compte de stockage de cache</b> dans la <b>région source</b> pour collecter les modifications avant de les envoyer vers la cible.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services"
  ],
  "title": "Emplacements",
  "rows": [
   [
    "*Backup",
    "Région des VM"
   ],
   [
    "Site Recovery",
    "Région cible"
   ],
   [
    "Cache ASR",
    "Région source"
   ]
  ]
 },
 "keep": "Backup = même région ; ASR = cible ; cache = source."
},
{
 "id": "D5-065",
 "dom": 5,
 "type": "order",
 "stem": "<p>La région source est de nouveau disponible après un basculement Site Recovery vers la région cible. Vous devez revenir à la région source.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Après le basculement, on le <b>valide</b>. On <b>reprotège</b> pour répliquer dans l'autre sens (cible → source). Quand on est prêt, on <b>bascule vers la source</b> (failback), puis on <b>valide et reprotège</b> à nouveau pour revenir à la configuration d'origine.</p>",
 "portal": {
  "path": [
   "Éléments répliqués",
   "VM9"
  ],
  "title": "VM9 | Vue d'ensemble",
  "rows": [
   [
    "1",
    "Valider"
   ],
   [
    "*2",
    "Reprotéger"
   ],
   [
    "3",
    "Basculer vers la source"
   ],
   [
    "4",
    "Valider + reprotéger"
   ]
  ]
 },
 "keep": "Valider → reprotéger → failback → valider + reprotéger.",
 "acts": [
  "Valider (commit) le basculement vers la région cible",
  "Reprotéger les VM (réplication de la cible vers la source)",
  "Basculer vers la région source (restauration automatique)",
  "Valider puis reprotéger à nouveau vers la région cible",
  "Supprimer le coffre",
  "Créer un test de basculement dans la région source"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D5-072",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous comparez Azure Backup et Azure Site Recovery.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Azure Backup protège contre la suppression accidentelle de données ou la corruption, avec des points anciens.",
   "a": 0
  },
  {
   "l": "Azure Site Recovery conserve des points de récupération pendant plusieurs années.",
   "a": 1
  },
  {
   "l": "On peut utiliser les deux services pour la même VM.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Backup : Oui.</b> Il conserve des points sur des jours, mois et années.</li><li><b>Site Recovery et années : Non.</b> Il garde des points récents (au plus 15 jours) : son but est la <b>continuité</b> (basculer vite), pas l'archivage.</li><li><b>Les deux : Oui.</b> C'est même recommandé : Backup pour restaurer des données, Site Recovery pour reprendre l'activité.</li></ul>",
 "portal": {
  "path": [
   "Centre de continuité d'activité"
  ],
  "title": "Comparer",
  "rows": [
   [
    "*Backup",
    "Points sur des années"
   ],
   [
    "Site Recovery",
    "Points récents · basculement"
   ]
  ]
 },
 "keep": "Backup = restaurer des données ; ASR = reprendre l'activité. Les deux ensemble."
},
{
 "id": "D5-073",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez associer chaque notion à sa définition.</p><p>Pour répondre, faites glisser la notion appropriée vers chaque définition. Chaque notion peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Notions",
 "tgtHead": [
  "Définition",
  "Notion"
 ],
 "srcs": [
  "RPO",
  "RTO",
  "Basculement",
  "Restauration automatique (failback)"
 ],
 "tgts": [
  {
   "l": "Quantité maximale de données qu'on accepte de perdre, exprimée en temps",
   "a": 0
  },
  {
   "l": "Durée maximale acceptable pour rétablir le service",
   "a": 1
  },
  {
   "l": "Faire tourner la charge dans le site de secours",
   "a": 2
  },
  {
   "l": "Revenir dans le site d'origine après la reprise",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>RPO</b> (Recovery Point Objective) : par exemple 15 minutes de données perdues au maximum.</li><li><b>RTO</b> (Recovery Time Objective) : par exemple 1 heure pour redémarrer.</li><li><b>Basculement</b> : passage vers le site secondaire.</li><li><b>Restauration automatique</b> : retour vers le site principal.</li></ul>",
 "portal": {
  "path": [
   "Continuité d'activité"
  ],
  "title": "Notions",
  "rows": [
   [
    "*RPO",
    "Données perdues max"
   ],
   [
    "RTO",
    "Temps de reprise max"
   ],
   [
    "Failback",
    "Retour au site d'origine"
   ]
  ]
 },
 "keep": "RPO = données ; RTO = temps."
},
{
 "id": "D5-083",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous examinez la requête KQL suivante :</p><pre>Perf\n| where TimeGenerated &gt; ago(1d)\n| where CounterName == \"% Free Space\" and InstanceName == \"C:\"\n| summarize EspaceLibre = min(CounterValue) by Computer\n| where EspaceLibre &lt; 10</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "La requête analyse :",
   "o": [
    "les dernières 24 heures",
    "toutes les données",
    "le dernier mois"
   ],
   "a": 0
  },
  {
   "l": "Pour chaque ordinateur, elle calcule :",
   "o": [
    "l'espace libre minimal de C:",
    "le nombre de mesures",
    "l'espace libre moyen de tous les disques"
   ],
   "a": 0
  },
  {
   "l": "Le résultat liste :",
   "o": [
    "les ordinateurs dont C: est descendu sous 10 % d'espace libre",
    "tous les ordinateurs",
    "les 10 premiers ordinateurs"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><code>ago(1d)</code> : les dernières 24 heures.</li><li><code>min(CounterValue) by Computer</code> : le pourcentage d'espace libre le plus bas de C: pour chaque ordinateur.</li><li>Le dernier <code>where</code> ne garde que ceux sous 10 %.</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Résultats",
  "rows": [
   [
    "*VM-Files2",
    "EspaceLibre 6,3"
   ],
   [
    "VM-Web4",
    "EspaceLibre 8,9"
   ]
  ]
 },
 "keep": "ago = période ; min by = par machine ; where final = filtre du résultat."
},
{
 "id": "D5-084",
 "dom": 5,
 "type": "screen",
 "stem": "<p>Vous créez une alerte de métrique sur VM10 : elle doit se déclencher quand le CPU moyen dépasse 90 % sur 5 minutes, être évaluée toutes les minutes, avec la gravité 1, et notifier le groupe d'actions AG-Astreinte.</p><p>Comment devez-vous configurer l'alerte ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li>Signal <b>Percentage CPU</b>, agrégation <b>Moyenne</b>, <b>Supérieur à 90</b>.</li><li><b>Granularité d'agrégation</b> (période de recherche) <b>5 minutes</b> ; <b>fréquence d'évaluation</b> <b>1 minute</b>.</li><li>Groupe d'actions <b>AG-Astreinte</b>, gravité <b>1 - Erreur</b>.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM10"
  ],
  "title": "Règle d'alerte",
  "rows": [
   [
    "*Condition",
    "Moyenne CPU > 90 · 5 min · toutes les 1 min"
   ],
   [
    "Gravité",
    "1 - Erreur"
   ],
   [
    "Actions",
    "AG-Astreinte"
   ]
  ]
 },
 "keep": "Granularité = fenêtre ; fréquence = toutes les combien on évalue.",
 "win": {
  "title": "Créer une règle d'alerte",
  "sub": "VM10",
  "rows": [
   {
    "k": "head",
    "t": "Condition"
   },
   {
    "k": "select",
    "l": "Signal",
    "o": [
     "Percentage CPU",
     "Available Memory Bytes",
     "Disk Read Bytes"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Agrégation",
    "o": [
     "Moyenne",
     "Maximum",
     "Total"
    ],
    "a": 0
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
    "l": "Seuil",
    "o": [
     "80",
     "90",
     "95"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Granularité d'agrégation",
    "o": [
     "1 minute",
     "5 minutes",
     "15 minutes"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Fréquence d'évaluation",
    "o": [
     "1 minute",
     "5 minutes",
     "15 minutes"
    ],
    "a": 0
   },
   {
    "k": "head",
    "t": "Actions et détails"
   },
   {
    "k": "select",
    "l": "Groupe d'actions",
    "o": [
     "AG-Astreinte",
     "AG-Finance"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Gravité",
    "o": [
     "0 - Critique",
     "1 - Erreur",
     "2 - Avertissement",
     "3 - Information"
    ],
    "a": 1
   }
  ]
 }
},
{
 "id": "D5-085",
 "dom": 5,
 "type": "screen",
 "stem": "<p>Vous créez un paramètre de diagnostic sur le coffre de clés KV3. Les journaux d'audit doivent aller dans l'espace de travail WS1, dans des tables spécifiques, et être archivés dans storage95.</p><p>Comment devez-vous configurer le paramètre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li>Catégorie <b>AuditEvent</b> : toutes les opérations sur le coffre.</li><li>Destination <b>Log Analytics</b> avec des tables <b>spécifiques à la ressource</b>, et <b>archivage</b> dans storage95.</li><li>Pas d'Event Hub. Les métriques ne sont pas notées ici.</li></ul>",
 "portal": {
  "path": [
   "Coffres de clés",
   "KV3"
  ],
  "title": "Paramètre de diagnostic",
  "rows": [
   [
    "*AuditEvent",
    "WS1 · spécifique à la ressource"
   ],
   [
    "Archive",
    "storage95"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Un paramètre de diagnostic peut avoir plusieurs destinations.",
 "win": {
  "title": "Paramètre de diagnostic",
  "sub": "KV3",
  "rows": [
   {
    "k": "head",
    "t": "Journaux"
   },
   {
    "k": "check",
    "l": "Catégorie : AuditEvent",
    "a": true
   },
   {
    "k": "check",
    "l": "Métriques : AllMetrics",
    "a": null
   },
   {
    "k": "head",
    "t": "Détails de la destination"
   },
   {
    "k": "check",
    "l": "Envoyer à l'espace de travail Log Analytics (WS1)",
    "a": true
   },
   {
    "k": "radio",
    "l": "Table de destination",
    "opts": [
     "Diagnostics Azure",
     "Spécifique à la ressource"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "check",
    "l": "Archiver dans un compte de stockage (storage95)",
    "a": true
   },
   {
    "k": "check",
    "l": "Diffuser en continu sur un Event Hub",
    "a": false
   }
  ]
 }
},
{
 "id": "D5-086",
 "dom": 5,
 "type": "screen",
 "stem": "<p>Vous configurez la sauvegarde de VM11. La sauvegarde doit avoir lieu chaque jour à 22 h, garder les points quotidiens 14 jours et les points hebdomadaires du dimanche 8 semaines, avec des instantanés de restauration instantanée conservés 2 jours.</p><p>Comment devez-vous configurer la stratégie ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li>Fréquence <b>quotidienne</b> à <b>22 h</b>.</li><li>Instantanés de restauration instantanée : <b>2 jours</b>.</li><li>Rétention quotidienne <b>14 jours</b>, hebdomadaire (dimanche) <b>8 semaines</b>.</li></ul><p>Le type de stratégie n'est pas noté : une seule sauvegarde par jour fonctionne avec les deux.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault3"
  ],
  "title": "Stratégie",
  "rows": [
   [
    "*Quotidienne",
    "22:00"
   ],
   [
    "Instantanés",
    "2 jours"
   ],
   [
    "Quotidien / hebdo",
    "14 j / 8 sem."
   ]
  ]
 },
 "keep": "Planning + instantanés + rétentions dans la stratégie.",
 "win": {
  "title": "Créer une stratégie",
  "sub": "Vault3 | Stratégies de sauvegarde",
  "rows": [
   {
    "k": "select",
    "l": "Type de stratégie",
    "o": [
     "Standard",
     "Améliorée"
    ],
    "d": 0,
    "a": null
   },
   {
    "k": "select",
    "l": "Fréquence",
    "o": [
     "Quotidienne",
     "Hebdomadaire",
     "Horaire"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Heure",
    "o": [
     "10:00 PM",
     "11:00 PM"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Conserver les instantanés de restauration instantanée pendant (jours)",
    "o": [
     "1",
     "2",
     "5"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Rétention du point de sauvegarde quotidienne (jours)",
    "o": [
     "7",
     "14",
     "30"
    ],
    "a": 1
   },
   {
    "k": "check",
    "l": "Rétention du point de sauvegarde hebdomadaire (dimanche)",
    "a": true
   },
   {
    "k": "select",
    "l": "Pendant (semaines)",
    "o": [
     "4",
     "8",
     "12"
    ],
    "a": 1
   }
  ]
 }
},
{
 "id": "D5-087",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Vous devez activer la sauvegarde de VM12 depuis la page de la VM.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Sauvegarde",
 "expl": "<p><b>Sauvegarde</b> active Azure Backup (choix du coffre et de la stratégie). <b>Récupération d'urgence</b> active la réplication Azure Site Recovery vers une autre région ou zone.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM12"
  ],
  "title": "VM12 | Sauvegarde",
  "menu": [
   "*Sauvegarde",
   "Récupération d'urgence"
  ],
  "rows": [
   [
    "Coffre",
    "Vault1"
   ],
   [
    "Stratégie",
    "DefaultPolicy"
   ]
  ],
  "btn": "Activer la sauvegarde"
 },
 "keep": "Sauvegarde = Backup ; Récupération d'urgence = Site Recovery.",
 "win": {
  "title": "VM12 | Machine virtuelle",
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
    "g": "Paramètres",
    "items": [
     "Mise en réseau",
     "Disques",
     "Taille",
     "Extensions + applications"
    ]
   },
   {
    "g": "Opérations",
    "items": [
     "Bastion",
     "Arrêt automatique",
     "Sauvegarde",
     "Récupération d'urgence",
     "Mises à jour"
    ]
   },
   {
    "g": "Supervision",
    "items": [
     "Insights",
     "Alertes",
     "Métriques",
     "Paramètres de diagnostic"
    ]
   }
  ]
 }
},
{
 "id": "D5-088",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Vous devez créer une alerte qui notifie l'équipe quand une maintenance planifiée de la plateforme Azure concerne vos ressources.</p><p>Dans le portail, quel service devez-vous ouvrir ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Service Health",
 "expl": "<p><b>Service Health</b> affiche les incidents, maintenances planifiées et avis, et permet de créer des <b>alertes d'intégrité du service</b> filtrées par service, région et type d'événement.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Service Health"
  ],
  "title": "Service Health",
  "menu": [
   "*Service Health"
  ],
  "rows": [
   [
    "*Maintenance planifiée",
    "Alerte d'intégrité"
   ]
  ],
  "btn": "+ Créer une alerte d'intégrité du service"
 },
 "keep": "Maintenance planifiée = Service Health.",
 "win": {
  "title": "Monitor | Vue d'ensemble",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Activity log",
     "Alertes",
     "Métriques",
     "Journaux",
     "Service Health",
     "Classeurs"
    ]
   },
   {
    "g": "Insights",
    "items": [
     "Applications",
     "Machines virtuelles",
     "Conteneurs",
     "Réseaux"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Paramètres de diagnostic",
     "Règles de collecte de données",
     "Groupes d'actions"
    ]
   }
  ]
 }
},
{
 "id": "D5-091",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous préparez Azure Site Recovery pour 10 VM de France Central vers West Europe.</p><p>Pour chacune des ressources suivantes, sélectionnez Oui si elle doit exister ou être créée. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un coffre Recovery Services en West Europe",
   "a": 0
  },
  {
   "l": "Une passerelle VPN entre les deux régions",
   "a": 1
  },
  {
   "l": "Un coffre de sauvegarde (Backup vault) en France Central",
   "a": 1
  },
  {
   "l": "Un réseau virtuel cible en West Europe",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Coffre en West Europe : oui.</b></li><li><b>Réseau virtuel cible : oui</b>, pour y démarrer les VM au basculement (Site Recovery peut le créer).</li><li>Le coffre de sauvegarde ne sert pas à Site Recovery. Aucune passerelle VPN n'est nécessaire : la réplication passe par le réseau Azure.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "Récupération d'urgence",
  "rows": [
   [
    "*Coffre",
    "West Europe"
   ],
   [
    "*Réseau cible",
    "vnet-weu (auto)"
   ]
  ]
 },
 "keep": "ASR : coffre cible + réseau cible ; pas de VPN."
},
{
 "id": "D5-100",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous gérez des groupes d'actions et des alertes.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un groupe d'actions peut être utilisé par des alertes de plusieurs abonnements.",
   "a": 0
  },
  {
   "l": "Une règle d'alerte peut appeler plusieurs groupes d'actions.",
   "a": 0
  },
  {
   "l": "Une règle de traitement des alertes peut ajouter un groupe d'actions à toutes les alertes d'un abonnement.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Plusieurs abonnements : Oui</b>, un groupe d'actions est référencé par son ID de ressource.</li><li><b>Plusieurs groupes : Oui</b>, par exemple un pour l'astreinte et un pour les tickets.</li><li><b>Règle de traitement : Oui</b>, elle peut ajouter des groupes d'actions (ou les supprimer) sur une étendue.</li></ul>",
 "portal": {
  "path": [
   "Moniteur",
   "Groupes d'actions"
  ],
  "title": "AG-Astreinte",
  "rows": [
   [
    "*Utilisé par",
    "Alertes de 3 abonnements"
   ]
  ]
 },
 "keep": "Groupes d'actions réutilisables partout."
},
{
 "id": "D5-101",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous gérez Azure Site Recovery.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un test de basculement interrompt la réplication des VM.",
   "a": 1
  },
  {
   "l": "Après un basculement, il faut reprotéger les VM pour répliquer dans l'autre sens.",
   "a": 0
  },
  {
   "l": "Site Recovery peut répliquer des VM Azure vers une autre région Azure.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Test et réplication : Non</b>, la réplication continue pendant un test.</li><li><b>Reprotection : Oui</b>, elle lance la réplication de la nouvelle région active vers l'ancienne.</li><li><b>Région à région : Oui</b>, c'est le scénario principal pour les VM Azure.</li></ul>",
 "portal": {
  "path": [
   "Éléments répliqués",
   "VM1"
  ],
  "title": "Vue d'ensemble",
  "rows": [
   [
    "*Test de basculement",
    "Réplication continue"
   ],
   [
    "Après basculement",
    "Reprotéger"
   ]
  ]
 },
 "keep": "Le test ne coupe pas la réplication."
},
{
 "id": "D5-102",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous choisissez une solution de protection pour chaque besoin.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Restaurer un fichier supprimé il y a 3 mois sur une VM :",
   "o": [
    "Groupe à haute disponibilité",
    "Azure Site Recovery",
    "Azure Backup"
   ],
   "a": 2
  },
  {
   "l": "Redémarrer toute l'application dans une autre région en 30 minutes :",
   "o": [
    "Azure Site Recovery",
    "Zones de disponibilité",
    "Azure Backup"
   ],
   "a": 0
  },
  {
   "l": "Continuer de fonctionner sans interruption si un centre de données tombe :",
   "o": [
    "Azure Backup",
    "Zones de disponibilité",
    "Azure Site Recovery"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Backup</b> : restaurer des données anciennes.</li><li><b>Site Recovery</b> : reprise après sinistre, avec basculement vers une autre région.</li><li><b>Zones de disponibilité</b> : haute disponibilité, sans basculement manuel, contre la perte d'un centre de données.</li></ul>",
 "portal": {
  "path": [
   "Continuité d'activité"
  ],
  "title": "Choisir",
  "rows": [
   [
    "*Fichier ancien",
    "Backup"
   ],
   [
    "Autre région",
    "Site Recovery"
   ],
   [
    "Datacenter perdu",
    "Zones"
   ]
  ]
 },
 "keep": "Données = Backup ; sinistre régional = ASR ; datacenter = zones."
},
{
 "id": "D5-103",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez activer la sauvegarde de VM13 dans le coffre Vault4 avec la stratégie DefaultPolicy, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Sous-groupe",
   "o": [
    "protection",
    "item",
    "vault"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--policy-name",
    "--schedule",
    "--retention"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az backup protection enable-for-azurevm --vault-name Vault4 --vm VM13 --policy-name DefaultPolicy</code>. On lance ensuite une sauvegarde à la demande avec <code>az backup protection backup-now</code>.</p><p>En PowerShell : <code>Enable-AzRecoveryServicesBackupProtection</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az backup protection enable-for-azurevm",
    "--policy-name"
   ]
  ]
 },
 "keep": "az backup protection enable-for-azurevm --policy-name.",
 "tpl": "az backup {0} enable-for-azurevm --resource-group RG1 --vault-name Vault4 --vm VM13 {1} DefaultPolicy"
},
{
 "id": "D5-104",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez créer un groupe d'actions qui envoie un e-mail à astreinte@contoso.com, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Ressource",
   "o": [
    "action-group",
    "alert",
    "diagnostic-settings"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--action",
    "--receiver",
    "--notify"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az monitor action-group create ... --action email Equipe astreinte@contoso.com</code>. Le <b>nom court</b> (12 caractères maximum) apparaît dans les SMS et e-mails.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az monitor action-group create",
    "--action email …"
   ]
  ]
 },
 "keep": "az monitor action-group create --action.",
 "tpl": "az monitor {0} create --resource-group RG1 --name AG-Astreinte --short-name Astreinte {1} email Equipe astreinte@contoso.com"
},
{
 "id": "D5-105",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez créer une alerte de métrique sur VM14 avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Ressource",
   "o": [
    "metrics alert",
    "activity-log alert",
    "log-analytics"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--condition",
    "--query",
    "--threshold-only"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az monitor metrics alert create --condition \"avg Percentage CPU &gt; 90\" --window-size 5m --evaluation-frequency 1m</code>. <code>activity-log alert</code> crée une alerte de journal d'activité ; les alertes de journaux utilisent <code>az monitor scheduled-query</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az monitor metrics alert create",
    "--condition \"avg … > 90\""
   ]
  ]
 },
 "keep": "az monitor metrics alert create --condition.",
 "tpl": "az monitor {0} create --resource-group RG1 --name CPU-VM14 --scopes &lt;id VM14&gt; {1} \"avg Percentage CPU &gt; 90\" --window-size 5m --evaluation-frequency 1m --action AG-Astreinte"
},
{
 "id": "D5-106",
 "dom": 5,
 "type": "order",
 "stem": "<p>Vous devez être alerté par SMS si une règle de sécurité réseau est supprimée dans l'abonnement.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Le <b>groupe d'actions</b> existe d'abord (il peut aussi être créé dans l'assistant), puis la <b>règle d'alerte de journal d'activité</b> (signal : <code>Microsoft.Network/networkSecurityGroups/securityRules/delete</code>), à laquelle on <b>associe</b> le groupe d'actions.</p><p>La suppression d'une règle est une opération du plan de contrôle, visible dans le journal d'activité sans paramètre de diagnostic. Les NSG n'ont pas de métrique adaptée.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Créer une règle d'alerte",
  "rows": [
   [
    "1",
    "Groupe d'actions (SMS)"
   ],
   [
    "*2",
    "Signal : Supprimer une règle de sécurité"
   ],
   [
    "3",
    "Associer et activer"
   ]
  ]
 },
 "keep": "Groupe d'actions → règle de journal d'activité → association.",
 "acts": [
  "Créer un groupe d'actions avec une notification SMS",
  "Créer une règle d'alerte de journal d'activité sur l'opération Supprimer une règle de sécurité",
  "Associer le groupe d'actions à la règle et l'activer",
  "Créer un paramètre de diagnostic sur le NSG",
  "Créer une alerte de métrique sur le NSG"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D5-107",
 "dom": 5,
 "type": "order",
 "stem": "<p>Vous devez restaurer VM15 à partir de la sauvegarde d'hier, sous la forme d'une nouvelle VM nommée VM15-R dans le même réseau.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>On ouvre l'élément sauvegardé, on lance <b>Restaurer la VM</b>, on choisit le <b>point de restauration</b>, puis la configuration : <b>Créer une machine virtuelle</b> avec son nom, son réseau et un emplacement intermédiaire (compte de stockage) si nécessaire.</p><p>La VM d'origine n'a pas besoin d'être arrêtée pour créer une nouvelle VM.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM15"
  ],
  "title": "Restaurer la machine virtuelle",
  "rows": [
   [
    "Point",
    "Hier"
   ],
   [
    "*Configuration",
    "Créer · VM15-R"
   ]
  ],
  "btn": "Restaurer"
 },
 "keep": "Restaurer la VM → point → Créer une VM.",
 "acts": [
  "Ouvrir l'élément de sauvegarde de VM15 et choisir Restaurer la VM",
  "Sélectionner le point de restauration d'hier",
  "Choisir Créer une machine virtuelle, nommer VM15-R et choisir le réseau et l'emplacement intermédiaire",
  "Arrêter VM15",
  "Supprimer le coffre"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D5-108",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez associer chaque outil de supervision à son usage.</p><p>Pour répondre, faites glisser l'outil approprié vers chaque usage. Chaque outil peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Outils",
 "tgtHead": [
  "Usage",
  "Outil"
 ],
 "srcs": [
  "Metrics Explorer",
  "Log Analytics",
  "Classeurs",
  "Azure Advisor"
 ],
 "tgts": [
  {
   "l": "Tracer rapidement le graphique de l'IOPS d'un disque",
   "a": 0
  },
  {
   "l": "Joindre des journaux de plusieurs tables avec KQL",
   "a": 1
  },
  {
   "l": "Publier un rapport interactif avec paramètres",
   "a": 2
  },
  {
   "l": "Obtenir des recommandations de fiabilité et de coût",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Metrics Explorer</b> : graphiques de métriques.</li><li><b>Log Analytics</b> : requêtes KQL sur les journaux.</li><li><b>Classeurs</b> : rapports interactifs.</li><li><b>Advisor</b> : recommandations.</li></ul>",
 "portal": {
  "path": [
   "Moniteur"
  ],
  "title": "Outils",
  "rows": [
   [
    "*Metrics Explorer",
    "Graphiques"
   ],
   [
    "Log Analytics",
    "KQL"
   ],
   [
    "Classeurs",
    "Rapports"
   ],
   [
    "Advisor",
    "Recommandations"
   ]
  ]
 },
 "keep": "Métriques / KQL / rapports / recommandations."
},
{
 "id": "D5-109",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'opérateur KQL adapté à chaque besoin.</p><p>Pour répondre, faites glisser l'opérateur approprié vers chaque besoin. Chaque opérateur peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Opérateurs",
 "tgtHead": [
  "Besoin",
  "Opérateur"
 ],
 "srcs": [
  "where",
  "project",
  "extend",
  "summarize",
  "join"
 ],
 "tgts": [
  {
   "l": "Garder seulement les lignes dont Computer vaut VM1",
   "a": 0
  },
  {
   "l": "Ne garder que les colonnes TimeGenerated et Computer",
   "a": 1
  },
  {
   "l": "Ajouter une colonne CPUArrondi calculée",
   "a": 2
  },
  {
   "l": "Compter les lignes par ordinateur",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>where</b> : filtre les lignes.</li><li><b>project</b> : choisit (et renomme) les colonnes.</li><li><b>extend</b> : ajoute des colonnes calculées.</li><li><b>summarize</b> : agrège (count, avg, max…) par groupes.</li></ul><p><b>join</b> combine deux tables.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "KQL",
  "rows": [
   [
    "*where",
    "Lignes"
   ],
   [
    "project",
    "Colonnes"
   ],
   [
    "extend",
    "Colonne calculée"
   ],
   [
    "summarize",
    "Agrégation"
   ]
  ]
 },
 "keep": "where lignes ; project colonnes ; extend calcul ; summarize agrège."
}
);
