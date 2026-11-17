/* Domaine 5 : supervision et sauvegarde (lot I : D5-421 à D5-430, scénarios longs) */
AZ.questions.push(
{
 "id": "D5-421",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso veut utiliser Azure comme site de reprise pour deux environnements locaux :</p><ul><li>un cluster Hyper-V de 4 hôtes, sans System Center VMM, qui héberge 60 VM ;</li><li>une ferme VMware vSphere de 120 VM.</li></ul><p>Exigences :</p><ul><li>la réplication doit utiliser les composants actuels recommandés par Microsoft ;</li><li>après un basculement, les VM doivent démarrer dans VNet-DR (France Central), dans les bons sous-réseaux ;</li><li>la reprise doit être testée sans toucher à la production locale.</li></ul><p>Que devez-vous déployer ou configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour Hyper-V :",
   "o": [
    "Fournisseur Site Recovery et agent sur chaque hôte",
    "Azure Migrate seul, sans coffre",
    "L'agent MARS dans chaque VM invitée, sans site Hyper-V",
    "Une appliance de réplication sur une VM"
   ],
   "a": 0
  },
  {
   "l": "Pour VMware :",
   "o": [
    "Un serveur de configuration classique",
    "Le fournisseur Site Recovery sur vCenter",
    "L'appliance de réplication (modernisée)",
    "L'agent Recovery Services sur les ESXi"
   ],
   "a": 2
  },
  {
   "l": "Réseau des VM basculées :",
   "o": [
    "Une table de routage sur VNet-DR",
    "Un peering entre VNet-DR et le site",
    "Les paramètres de l'élément répliqué",
    "Une zone DNS privée pour VNet-DR"
   ],
   "a": 2
  },
  {
   "l": "Test :",
   "o": [
    "Un basculement non planifié",
    "Un test de basculement isolé",
    "Une reprotection inverse",
    "Un basculement planifié hors heures"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Hyper-V sans VMM.</b> On crée un site Hyper-V dans le coffre et on installe sur chaque hôte le fournisseur Azure Site Recovery et l'agent Recovery Services, qui réplique les disques.<b>VMware.</b> L'architecture modernisée utilise une appliance de réplication Azure Site Recovery (une VM locale) ; le serveur de configuration classique est retiré.<b>Réseau.</b> Pour les réplications vers Azure, le réseau et le sous-réseau cibles se définissent dans les paramètres de chaque élément répliqué (ou par défaut à l'activation de la réplication).<b>Test.</b> Le test de basculement crée des VM dans un réseau isolé, sans arrêter les VM locales ni la réplication.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Pour Hyper-V",
    "Fournisseur Site Recovery et agent sur chaque hôte"
   ],
   [
    "Pour VMware",
    "L'appliance de réplication (modernisée)"
   ],
   [
    "Réseau des VM basculées",
    "Les paramètres de l'élément répliqué"
   ],
   [
    "Test",
    "Un test de basculement isolé"
   ]
  ]
 },
 "keep": "Hyper-V : fournisseur + agent Recovery Services sur les hôtes. VMware : appliance de réplication. Test : réseau isolé."
},
{
 "id": "D5-422",
 "dom": 5,
 "type": "hot",
 "stem": "<p>L'application Commandes comprend trois VM répliquées par Site Recovery de France Central vers West Europe : VM-Web, VM-App et VM-Db. VM-Db utilise Azure Disk Encryption (clés dans KV-FC). Les trois VM partagent des transactions : après un basculement, leurs données doivent correspondre au même instant.</p><p>Le basculement doit démarrer VM-Db, puis exécuter un runbook qui met à jour la chaîne de connexion, puis démarrer VM-App et VM-Web.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Cohérence entre les trois VM :",
   "o": [
    "Des points en cas d'incident seulement",
    "Un groupe à haute disponibilité cible",
    "La cohérence multi-VM",
    "Une stratégie de réplication par VM"
   ],
   "a": 2
  },
  {
   "l": "Pour VM-Db (ADE) :",
   "o": [
    "Un coffre de clés cible en West Europe",
    "Une passerelle VPN vers KV-FC",
    "Désactiver ADE avant la réplication",
    "Utiliser KV-FC depuis West Europe"
   ],
   "a": 0
  },
  {
   "l": "Ordre et script :",
   "o": [
    "Trois basculements manuels successifs",
    "Une stratégie de réplication ordonnée",
    "Un plan de récupération avec un runbook",
    "Une règle d'alerte qui lance le runbook"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Multi-VM.</b> La cohérence multi-VM place les VM dans un groupe de réplication : leurs points de récupération partagés correspondent au même instant. Elle a un coût en performances (les VM communiquent sur le port 20004).<b>ADE.</b> Pour une VM chiffrée par Azure Disk Encryption, Site Recovery a besoin d'un coffre de clés dans la région cible ; il y copie les clés et secrets lors de l'activation de la réplication.<b>Plan de récupération.</b> Il ordonne le démarrage par groupes et permet d'insérer des runbooks Azure Automation ou des actions manuelles entre les groupes.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Cohérence entre les trois VM",
    "La cohérence multi-VM"
   ],
   [
    "Pour VM-Db (ADE)",
    "Un coffre de clés cible en West Europe"
   ],
   [
    "Ordre et script",
    "Un plan de récupération avec un runbook"
   ]
  ]
 },
 "keep": "Même instant pour plusieurs VM = cohérence multi-VM. ADE = coffre de clés cible. Ordre + script = plan de récupération."
},
{
 "id": "D5-423",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-Sql2 héberge SQL Server 2022 avec 6 bases. Les développeurs en créent régulièrement de nouvelles. Vous configurez la sauvegarde « SQL Server dans une VM Azure » dans RSV-Prod.</p><p>Exigences :</p><ul><li>toutes les bases futures de l'instance doivent être protégées sans intervention ;</li><li>une perte de données de 15 minutes au plus ;</li><li>la base Ventes doit pouvoir être restaurée à 14 h 37 hier, sous un autre nom, sur la même instance, sans écraser l'originale ;</li><li>l'équipe BI veut récupérer les fichiers .bak d'un point de sauvegarde pour les copier ailleurs.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Bases futures :",
   "o": [
    "La protection automatique",
    "Une alerte quotidienne de découverte",
    "Un script de découverte planifié",
    "Une stratégie par base de données"
   ],
   "a": 0
  },
  {
   "l": "Stratégie :",
   "o": [
    "Complète quotidienne, journaux toutes les 15 min",
    "Différentielle toutes les heures, sans journaux",
    "Complète hebdomadaire et différentielle",
    "Complète toutes les 15 minutes"
   ],
   "a": 0
  },
  {
   "l": "Base Ventes à 14 h 37 :",
   "o": [
    "Restauration de la VM entière",
    "Remplacement de la base existante, puis copie",
    "Récupération de fichiers de la VM",
    "Point dans le temps, autre emplacement"
   ],
   "a": 3
  },
  {
   "l": "Fichiers .bak :",
   "o": [
    "Télécharger les .bak depuis le coffre",
    "Restaurer en tant que fichiers",
    "Copier depuis le stockage du coffre",
    "Impossible avec Azure Backup"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Protection automatique.</b> Activée au niveau de l'instance, elle détecte et protège les nouvelles bases (vérification environ toutes les 8 heures).<b>RPO.</b> Les sauvegardes de journaux, jusqu'à toutes les 15 minutes, limitent la perte de données ; les complètes et différentielles servent de base.<b>Point dans le temps.</b> On choisit une date et une heure à la minute ; la restauration vers un autre emplacement crée une base sous un nouveau nom.<b>Fichiers.</b> « Restaurer en tant que fichiers » écrit les fichiers .bak dans un chemin de la VM cible.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Bases futures",
    "La protection automatique"
   ],
   [
    "Stratégie",
    "Complète quotidienne, journaux toutes les 15 min"
   ],
   [
    "Base Ventes à 14 h 37",
    "Point dans le temps, autre emplacement"
   ],
   [
    "Fichiers .bak",
    "Restaurer en tant que fichiers"
   ]
  ]
 },
 "keep": "SQL dans une VM : protection automatique, journaux toutes les 15 min, point dans le temps, restauration en fichiers."
},
{
 "id": "D5-424",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous créez une alerte de métrique sur le compte de stockage stapp (métrique Transactions, dimension ResponseType).</p><p>Exigences :</p><ul><li>l'alerte doit porter sur le nombre total de transactions en échec d'autorisation (ResponseType = AuthorizationError) ;</li><li>la condition doit être évaluée toutes les minutes sur les 5 dernières minutes ;</li><li>une alerte ne doit partir que si le seuil est dépassé dans 3 des 4 dernières évaluations, pour ignorer les pics isolés ;</li><li>l'équipe veut un e-mail quand l'alerte se déclenche et quand elle se résout.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Agrégation et dimension :",
   "o": [
    "Maximum, fractionné par API",
    "Moyenne, sans dimension",
    "Total, filtre AuthorizationError",
    "Nombre, filtre ResponseType = Success"
   ],
   "a": 2
  },
  {
   "l": "Fréquence / granularité :",
   "o": [
    "1 min / 5 min",
    "5 min / 1 min",
    "1 min / 1 min",
    "5 min / 15 min"
   ],
   "a": 0
  },
  {
   "l": "3 dépassements sur 4 :",
   "o": [
    "Seuil dynamique, 3 violations sur 4",
    "Une règle de traitement des alertes",
    "Un groupe d'actions avec délai",
    "Une fréquence d'évaluation de 3 min"
   ],
   "a": 0
  },
  {
   "l": "E-mail à la résolution :",
   "o": [
    "Une seconde règle inverse",
    "Impossible pour une métrique",
    "Automatique (alerte avec état)",
    "Une alerte de journal d'activité"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Agrégation.</b> Pour un nombre de transactions, on utilise Total, filtré sur la valeur de dimension voulue.<b>Fenêtres.</b> La fréquence d'évaluation (1 minute) et la granularité d'agrégation (période de recherche de 5 minutes) sont deux paramètres distincts.<b>Nombre de violations.</b> Les seuils dynamiques permettent de n'alerter qu'après X violations sur Y périodes. Avec un seuil statique, ce réglage n'est pas disponible.<b>Résolution.</b> Les alertes de métrique sont avec état : le groupe d'actions est notifié au déclenchement et à la résolution.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Agrégation et dimension",
    "Total, filtre AuthorizationError"
   ],
   [
    "Fréquence / granularité",
    "1 min / 5 min"
   ],
   [
    "3 dépassements sur 4",
    "Seuil dynamique, 3 violations sur 4"
   ],
   [
    "E-mail à la résolution",
    "Automatique (alerte avec état)"
   ]
  ]
 },
 "keep": "Métrique : agrégation adaptée, filtre de dimension, fréquence ≠ granularité, violations X sur Y avec seuil dynamique."
},
{
 "id": "D5-425",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Northwind veut plusieurs alertes basées sur le journal d'activité, dans l'abonnement Sub-Prod.</p><ul><li>Alerte 1 : prévenir l'équipe si un incident Azure ou une maintenance planifiée touche Azure SQL Database ou App Service en France Central, et seulement ces services et cette région.</li><li>Alerte 2 : prévenir quand VM-Erp devient Indisponible ou Dégradée pour une raison de la plateforme.</li><li>Alerte 3 : prévenir quand quelqu'un supprime une attribution de rôle dans Sub-Prod.</li><li>Alerte 4 : prévenir quand une ressource devient non conforme à la stratégie « Emplacements autorisés ».</li></ul><p>Que devez-vous créer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Alerte 1 :",
   "o": [
    "Une alerte Resource Health des VM",
    "Une alerte Service Health filtrée",
    "Une alerte de métrique de disponibilité",
    "Une recommandation Azure Advisor"
   ],
   "a": 1
  },
  {
   "l": "Alerte 2 :",
   "o": [
    "Une alerte Service Health de la région",
    "Une alerte Resource Health sur VM-Erp",
    "Une alerte de métrique sur le CPU",
    "Un test de disponibilité standard"
   ],
   "a": 1
  },
  {
   "l": "Alerte 3 :",
   "o": [
    "Une alerte Resource Health",
    "Une stratégie Deny sur les attributions de rôle",
    "Journal d'activité, catégorie Administratif",
    "Une alerte de journaux sur SigninLogs"
   ],
   "a": 2
  },
  {
   "l": "Alerte 4 :",
   "o": [
    "Un classeur de conformité Azure Policy",
    "Journal d'activité, catégorie Stratégie",
    "Une recommandation Advisor",
    "Une alerte Service Health"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Service Health</b> : incidents, maintenances et avis Azure, filtrables par service, région et type.<b>Resource Health</b> : état d'une ressource précise, filtrable par état (Disponible, Indisponible, Dégradé, Inconnu) et par cause (plateforme ou utilisateur).<b>Journal d'activité, catégorie Administratif</b> : les opérations de gestion, dont Microsoft.Authorization/roleAssignments/delete.<b>Catégorie Stratégie</b> : les évaluations Azure Policy, dont les résultats de non-conformité.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Alerte 1",
    "Une alerte Service Health filtrée"
   ],
   [
    "Alerte 2",
    "Une alerte Resource Health sur VM-Erp"
   ],
   [
    "Alerte 3",
    "Journal d'activité, catégorie Administratif"
   ],
   [
    "Alerte 4",
    "Journal d'activité, catégorie Stratégie"
   ]
  ]
 },
 "keep": "Alertes de journal d'activité : Service Health, Resource Health, Administratif (opérations), Stratégie (conformité)."
},
{
 "id": "D5-426",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Fabrikam conçoit sa stratégie d'espaces de travail Log Analytics. L'entreprise a des filiales en France et aux États-Unis.</p><ul><li>Les journaux des ressources européennes doivent rester dans l'Union européenne ; ceux des ressources américaines aux États-Unis.</li><li>Chaque filiale paie ses propres coûts d'ingestion, mais un centre d'exploitation unique doit pouvoir interroger toutes les données.</li><li>L'équipe Sécurité utilisera Microsoft Sentinel sur les données européennes.</li><li>Microsoft recommande de limiter le nombre d'espaces de travail.</li></ul><p>Que devez-vous choisir ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Nombre d'espaces de travail :",
   "o": [
    "Un par équipe et par région, au minimum",
    "Deux, un par zone de résidence",
    "Un par ressource surveillée",
    "Un seul, aux États-Unis"
   ],
   "a": 1
  },
  {
   "l": "Facturation par filiale :",
   "o": [
    "Une étiquette de coût par table",
    "Un espace par filiale suffit",
    "Un plafond quotidien par filiale",
    "Impossible avec Log Analytics"
   ],
   "a": 1
  },
  {
   "l": "Centre d'exploitation :",
   "o": [
    "Une règle d'exportation des données",
    "Copier les données chaque nuit",
    "Requêtes entre espaces (workspace())",
    "Un troisième espace central"
   ],
   "a": 2
  },
  {
   "l": "Sentinel :",
   "o": [
    "Activé au niveau de l'abonnement Sécurité",
    "Activé sur l'espace américain",
    "Un espace dédié obligatoire pour Sentinel",
    "Activé sur l'espace de France Central"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Résidence.</b> Les données sont stockées dans la région de l'espace de travail : il en faut un par zone de résidence, et pas davantage.<b>Facturation.</b> Chaque espace est facturé dans son abonnement ; placer chaque espace dans l'abonnement de sa filiale répartit les coûts.<b>Interrogation.</b> Les requêtes entre espaces (workspace(\"…\") ou plusieurs espaces sélectionnés) permettent une vue unique.<b>Sentinel.</b> Il s'active sur un espace existant ; Microsoft recommande de le faire sur l'espace qui contient déjà les données utiles plutôt que d'en créer un.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Nombre d'espaces de travail",
    "Deux, un par zone de résidence"
   ],
   [
    "Facturation par filiale",
    "Un espace par filiale suffit"
   ],
   [
    "Centre d'exploitation",
    "Requêtes entre espaces (workspace())"
   ],
   [
    "Sentinel",
    "Activé sur l'espace de France Central"
   ]
  ]
 },
 "keep": "Un espace par exigence de résidence ou de facturation, pas plus. Requêtes entre espaces pour la vue unique."
},
{
 "id": "D5-427",
 "dom": 5,
 "type": "hot",
 "stem": "<p>LAW-Sec conserve SecurityEvent avec 90 jours de rétention interactive et 7 ans de rétention totale.</p><ul><li>L'audit demande tous les événements 4625 du compte admin-old entre mars et mai 2023, une seule fois.</li><li>Les enquêteurs veulent ensuite analyser pendant deux semaines, avec des requêtes KQL complètes et rapides, tous les événements du 12 avril 2023.</li><li>Le SIEM du groupe doit recevoir en continu chaque nouvel événement SecurityEvent, au fil de l'ingestion.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Demande de l'audit :",
   "o": [
    "Un export vers le stockage",
    "Une restauration de 3 mois",
    "Un travail de recherche",
    "Une requête KQL classique"
   ],
   "a": 2
  },
  {
   "l": "Analyse du 12 avril :",
   "o": [
    "Un travail de recherche par jour",
    "Une restauration de la période",
    "Une rétention interactive de 7 ans",
    "Un export vers le stockage"
   ],
   "a": 1
  },
  {
   "l": "Flux vers le SIEM :",
   "o": [
    "Un paramètre de diagnostic de l'espace",
    "Une règle d'exportation de données",
    "Un travail de recherche planifié",
    "Une alerte de journaux par événement"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Travail de recherche.</b> Il parcourt les données en rétention longue (ou de gros volumes) avec un filtre simple, de façon asynchrone, et écrit le résultat dans une nouvelle table.<b>Restauration.</b> Elle remet une période de données en rétention longue dans une table temporaire, interrogeable avec tout KQL et rapidement, jusqu'à ce qu'on la supprime.<b>Export.</b> Une règle d'exportation de données envoie en continu les nouvelles données d'une table vers un compte de stockage ou Event Hubs. Un paramètre de diagnostic de l'espace n'envoie que ses propres journaux d'audit.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Demande de l'audit",
    "Un travail de recherche"
   ],
   [
    "Analyse du 12 avril",
    "Une restauration de la période"
   ],
   [
    "Flux vers le SIEM",
    "Une règle d'exportation de données"
   ]
  ]
 },
 "keep": "Rétention longue : travail de recherche (filtrer) ou restauration (analyser). Flux continu : règle d'exportation de données."
},
{
 "id": "D5-428",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Les VM de VNet-Isolé (France Central) n'ont aucun accès à Internet, ni par défaut ni par proxy. Elles doivent envoyer leurs journaux à LAW-Iso avec l'agent Azure Monitor.</p><p>Exigences :</p><ul><li>les données doivent transiter uniquement par des adresses privées ;</li><li>LAW-Iso ne doit plus accepter d'ingestion ni de requête depuis des réseaux publics ;</li><li>les VM d'autres réseaux de l'entreprise doivent continuer à joindre d'autres espaces de travail par Internet.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Accès privé :",
   "o": [
    "Un point de terminaison de service",
    "Un peering vers le réseau d'Azure Monitor",
    "Une passerelle NAT avec une IP fixe",
    "Une AMPLS et un point de terminaison privé"
   ],
   "a": 3
  },
  {
   "l": "Pour l'agent Azure Monitor :",
   "o": [
    "Rien de plus que la DCR",
    "Une DCE dans l'AMPLS, associée aux VM",
    "L'agent Log Analytics à la place",
    "Un paramètre de diagnostic sur chaque VM"
   ],
   "a": 1
  },
  {
   "l": "Sur LAW-Iso :",
   "o": [
    "Un verrou Lecture seule",
    "Refuser l'accès public (ingestion, requêtes)",
    "Un plafond quotidien sur LAW-Iso",
    "Le mode de contrôle d'accès par ressource"
   ],
   "a": 1
  },
  {
   "l": "Mode d'accès de l'AMPLS (ingestion et requêtes) :",
   "o": [
    "Privé uniquement",
    "Ouvert (public autorisé)"
   ],
   "a": 0
  }
 ],
 "expl": "<b>AMPLS.</b> Azure Monitor Private Link passe par une étendue (AMPLS) qui regroupe les espaces de travail et les DCE, exposée par un point de terminaison privé dans le réseau.<b>DCE.</b> Avec un lien privé, l'agent Azure Monitor a besoin d'un point de terminaison de collecte de données ajouté à l'AMPLS et associé aux machines, pour récupérer sa configuration et envoyer les données en privé.<b>Espace de travail.</b> Dans l'isolement réseau de LAW-Iso, on refuse l'accès public à l'ingestion et aux requêtes.<b>Mode d'accès.</b> « Privé uniquement » limite les réseaux reliés à l'AMPLS aux seules ressources de l'étendue, ce qui empêche toute fuite vers d'autres espaces. Il ne s'applique qu'aux réseaux reliés par le point de terminaison privé (et à ceux qui partagent ses zones DNS) : les autres réseaux de l'entreprise gardent leur accès public.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Accès privé",
    "Une AMPLS et un point de terminaison privé"
   ],
   [
    "Pour l'agent Azure Monitor",
    "Une DCE dans l'AMPLS, associée aux VM"
   ],
   [
    "Sur LAW-Iso",
    "Refuser l'accès public (ingestion, requêtes)"
   ],
   [
    "Mode d'accès de l'AMPLS (ingestion et requêtes)",
    "Privé uniquement"
   ]
  ]
 },
 "keep": "Azure Monitor privé : AMPLS + point de terminaison privé + DCE pour AMA + accès public refusé sur l'espace."
},
{
 "id": "D5-429",
 "dom": 5,
 "type": "hot",
 "stem": "<p>RSV-Prod protège 300 VM avec une stratégie standard : quotidienne pendant 30 jours, hebdomadaire pendant 12 semaines, mensuelle pendant 7 ans, annuelle pendant 10 ans. La facture de stockage de sauvegarde explose à cause des points mensuels et annuels.</p><ul><li>Les points mensuels et annuels ne sont presque jamais restaurés ; une restauration peut attendre plusieurs heures.</li><li>La direction veut savoir combien de temps un point doit rester dans le niveau visé avant d'en sortir sans frais supplémentaire.</li><li>La redondance du coffre est LRS ; la direction veut une protection contre la perte d'une zone, sans région secondaire.</li></ul><p>Que devez-vous répondre ou configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour les points mensuels et annuels :",
   "o": [
    "Le niveau Froid du compte de stockage",
    "Le niveau Archive de la sauvegarde",
    "Une seconde stratégie moins longue",
    "Supprimer les points mensuels"
   ],
   "a": 1
  },
  {
   "l": "Durée minimale dans ce niveau :",
   "o": [
    "30 jours",
    "90 jours",
    "180 jours",
    "365 jours"
   ],
   "a": 2
  },
  {
   "l": "Redondance :",
   "o": [
    "Un nouveau coffre ZRS pour la suite",
    "Passer RSV-Prod en ZRS dans ses propriétés",
    "Activer la restauration interrégion",
    "Passer RSV-Prod en GRS"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Archive.</b> Azure Backup peut déplacer les points de récupération à long terme (mensuels, annuels) d'une VM vers le niveau Archive du coffre, beaucoup moins cher, avec une réhydratation de plusieurs heures avant restauration. Les points « recommandés » sont ceux dont le déplacement fait économiser.<b>Durée.</b> Un point doit rester au moins 180 jours en Archive ; une suppression anticipée est facturée.<b>Redondance.</b> La redondance d'un coffre ne change plus après la première protection ; il faut un nouveau coffre ZRS.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Pour les points mensuels et annuels",
    "Le niveau Archive de la sauvegarde"
   ],
   [
    "Durée minimale dans ce niveau",
    "180 jours"
   ],
   [
    "Redondance",
    "Un nouveau coffre ZRS pour la suite"
   ]
  ]
 },
 "keep": "Points longs rarement restaurés = Archive de la sauvegarde (180 jours minimum)."
},
{
 "id": "D5-430",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-Fin1 (Windows) est chiffrée par Azure Disk Encryption ; les clés BEK et KEK sont dans KV-Fin (modèle d'autorisation Stratégie d'accès au coffre). La configuration de la sauvegarde dans RSV-Prod échoue avec une erreur d'accès au coffre de clés.</p><p>Ensuite :</p><ul><li>trois mois plus tard, la clé KEK est supprimée par erreur, puis l'équipe doit restaurer VM-Fin1 depuis un point de deux mois ;</li><li>un auditeur demande si les sauvegardes de VM-Fin1 sont lisibles sans les clés.</li></ul><p>Que devez-vous faire ou répondre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Erreur de configuration :",
   "o": [
    "Passer KV-Fin au modèle d'autorisation RBAC",
    "Désactiver ADE le temps de la sauvegarde",
    "Une stratégie d'accès pour Backup Management Service",
    "Utiliser une stratégie de sauvegarde améliorée"
   ],
   "a": 2
  },
  {
   "l": "Clé KEK supprimée :",
   "o": [
    "Restaurer la VM sans la clé, puis la rechiffrer",
    "Impossible de restaurer VM-Fin1",
    "Recréer une clé du même nom",
    "Récupérer ou restaurer la clé, puis la VM"
   ],
   "a": 3
  },
  {
   "l": "Sauvegardes lisibles sans les clés :",
   "o": [
    "Oui, après 90 jours",
    "Non : les disques restent chiffrés",
    "Seulement en GRS",
    "Oui : Azure Backup les déchiffre"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Accès.</b> Pour une VM ADE, Azure Backup sauvegarde aussi les clés et secrets ; avec le modèle Stratégie d'accès, il faut une stratégie qui donne au service Backup Management Service les autorisations sur les clés et secrets.<b>Clé supprimée.</b> Si la suppression réversible du coffre est active, on récupère la clé ; sinon, on peut restaurer les clés et secrets sauvegardés avec le point de récupération, puis restaurer la VM. Une nouvelle clé du même nom n'est pas la même clé.<b>Lisibilité.</b> Les disques sauvegardés restent chiffrés : sans les clés, ils sont illisibles.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Erreur de configuration",
    "Une stratégie d'accès pour Backup Management Service"
   ],
   [
    "Clé KEK supprimée",
    "Récupérer ou restaurer la clé, puis la VM"
   ],
   [
    "Sauvegardes lisibles sans les clés",
    "Non : les disques restent chiffrés"
   ]
  ]
 },
 "keep": "VM ADE : Backup Management Service doit accéder au coffre de clés ; les clés sont sauvegardées avec le point."
}
);
