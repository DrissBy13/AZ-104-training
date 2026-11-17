/* Domaine 5 : supervision et sauvegarde (lot H : D5-411 à D5-420, scénarios longs) */
AZ.questions.push(
{
 "id": "D5-411",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous déployez la collecte des données invitées sur 300 serveurs : 200 VM Azure Windows, 60 VM Azure Linux et 40 serveurs physiques locaux sous Windows Server 2022. Tout doit arriver dans LAW-Ops.</p><p>Exigences :</p><ul><li>les nouvelles VM Azure doivent recevoir l'agent et la configuration automatiquement ;</li><li>sur les VM Windows, seuls les événements Sécurité 4624 et 4625 doivent être collectés ;</li><li>avant stockage, la colonne contenant l'adresse IP du client doit être supprimée des événements, pour réduire le volume ;</li><li>les serveurs locaux doivent utiliser exactement le même agent et la même configuration que les VM Azure.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Déploiement automatique :",
   "o": [
    "Une initiative Azure Policy (AMA + DCR)",
    "Un script de démarrage dans chaque image",
    "Un paramètre de diagnostic sur chaque VM",
    "L'agent Log Analytics intégré à l'image"
   ],
   "a": 0
  },
  {
   "l": "Événements 4624 et 4625 :",
   "o": [
    "Un filtre where dans chaque requête KQL",
    "Un plafond quotidien sur LAW-Ops",
    "Une requête XPath dans la DCR",
    "Une règle d'alerte qui ignore le reste"
   ],
   "a": 2
  },
  {
   "l": "Suppression de la colonne :",
   "o": [
    "Une fonction KQL enregistrée",
    "Une règle de rétention sur la colonne",
    "Un export de données sans la colonne",
    "Une transformation KQL dans la DCR"
   ],
   "a": 3
  },
  {
   "l": "Serveurs locaux :",
   "o": [
    "L'agent Log Analytics, encore pris en charge",
    "Azure Arc, puis AMA et la même DCR",
    "Un paramètre de diagnostic par serveur",
    "Un collecteur Syslog central"
   ],
   "a": 1
  }
 ],
 "expl": "<b>À l'échelle.</b> Les initiatives intégrées d'Azure Policy déploient l'agent Azure Monitor et créent l'association à la DCR sur les VM existantes (tâche de correction) et futures.<b>Filtrage.</b> Une requête XPath dans la source « Journaux d'événements Windows » de la DCR ne collecte que les événements voulus, avant même l'envoi.<b>Transformation.</b> Une transformation KQL dans la DCR (par exemple project-away) modifie les données à l'ingestion ; elle réduit ce qui est stocké et facturé.<b>Local.</b> L'agent Azure Monitor ne s'installe hors d'Azure que sur des serveurs connectés à Azure Arc ; ils sont ensuite traités comme des VM, avec la même DCR. L'agent Log Analytics est retiré.",
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
    "*Déploiement automatique",
    "Une initiative Azure Policy (AMA + DCR)"
   ],
   [
    "Événements 4624 et 4625",
    "Une requête XPath dans la DCR"
   ],
   [
    "Suppression de la colonne",
    "Une transformation KQL dans la DCR"
   ],
   [
    "Serveurs locaux",
    "Azure Arc, puis AMA et la même DCR"
   ]
  ]
 },
 "keep": "AMA + DCR : Policy pour l'échelle, XPath pour filtrer, transformation pour réduire, Arc pour le local."
},
{
 "id": "D5-412",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso centralise ses journaux de plateforme.</p><ul><li>Le journal d'activité des 12 abonnements doit être conservé 2 ans et interrogeable en KQL.</li><li>Le coffre de clés KV-Prod doit envoyer ses journaux d'audit à LAW-Sec (sécurité), à LAW-Ops (exploitation), à un compte de stockage d'archive et à Event Hubs pour le SIEM du groupe. Un paramètre de diagnostic existe déjà vers LAW-Ops.</li><li>Les journaux de connexion Microsoft Entra (SigninLogs) doivent arriver dans LAW-Sec. Le locataire n'a que des licences Microsoft Entra ID Free.</li><li>Les tables des ressources doivent être propres à chaque type de ressource, plus faciles à interroger.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Journal d'activité :",
   "o": [
    "Un export CSV mensuel depuis le portail",
    "Rien : il est conservé 2 ans",
    "Une alerte de journal d'activité",
    "Un paramètre de diagnostic par abonnement"
   ],
   "a": 3
  },
  {
   "l": "KV-Prod :",
   "o": [
    "Un second paramètre avec les trois destinations",
    "Un paramètre par destination, sans limite de nombre",
    "Une règle de collecte de données",
    "Impossible : un paramètre par ressource"
   ],
   "a": 0
  },
  {
   "l": "SigninLogs :",
   "o": [
    "Une licence P1 ou P2, puis un paramètre Entra",
    "L'agent Azure Monitor sur les contrôleurs",
    "Un paramètre de diagnostic Entra, sans prérequis",
    "L'export du journal d'activité"
   ],
   "a": 0
  },
  {
   "l": "Mode des tables :",
   "o": [
    "Basic",
    "Spécifique à la ressource",
    "Personnalisé",
    "Azure Diagnostics (table commune)"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Journal d'activité.</b> Il n'est conservé que 90 jours. Un paramètre de diagnostic par abonnement l'envoie dans un espace de travail (table AzureActivity), où l'on règle la rétention.<b>Paramètres de diagnostic.</b> Une ressource peut en avoir jusqu'à 5. Un paramètre envoie vers au plus un espace de travail, un compte de stockage, un Event Hub et une solution partenaire. Comme LAW-Ops occupe déjà le premier, un second paramètre porte LAW-Sec, le stockage et Event Hubs.<b>Entra ID.</b> L'export des journaux de connexion exige une licence Microsoft Entra ID P1 ou P2.<b>Tables.</b> Le mode « Spécifique à la ressource » crée des tables dédiées (par exemple AZKVAuditLogs) au lieu de la table générique AzureDiagnostics.",
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
    "*Journal d'activité",
    "Un paramètre de diagnostic par abonnement"
   ],
   [
    "KV-Prod",
    "Un second paramètre avec les trois destinations"
   ],
   [
    "SigninLogs",
    "Une licence P1 ou P2, puis un paramètre Entra"
   ],
   [
    "Mode des tables",
    "Spécifique à la ressource"
   ]
  ]
 },
 "keep": "Journal d'activité : 90 jours, puis paramètre de diagnostic. 5 paramètres par ressource, une destination de chaque type. Connexions Entra : P1/P2."
},
{
 "id": "D5-413",
 "dom": 5,
 "type": "hot",
 "stem": "<p>L'équipe de développement de Wingtip lance l'application web wingtip-shop (App Service, .NET) et veut une supervision applicative.</p><ul><li>Les données de télémétrie doivent être stockées dans LAW-Apps avec les autres journaux, pour des requêtes communes.</li><li>La page d'accueil doit être testée toutes les 5 minutes depuis 5 régions ; une alerte doit partir quand au moins 3 régions échouent.</li><li>Le volume de télémétrie d'une page très fréquentée doit être réduit sans fausser les statistiques.</li><li>Une hausse anormale du taux d'échec des requêtes doit être signalée sans écrire de règle.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Ressource Application Insights :",
   "o": [
    "Aucune : les journaux d'App Service suffisent",
    "Basée sur un espace de travail, liée à LAW-Apps",
    "Classique",
    "Une par page"
   ],
   "a": 1
  },
  {
   "l": "Test de la page d'accueil :",
   "o": [
    "Une alerte de métrique sur le CPU du plan",
    "Un test web à plusieurs étapes, 5 régions",
    "Une alerte Resource Health de l'application",
    "Un test standard, 5 emplacements, seuil 3"
   ],
   "a": 3
  },
  {
   "l": "Réduction du volume :",
   "o": [
    "La suppression des traces",
    "Le plan Basic",
    "L'échantillonnage",
    "Un plafond quotidien"
   ],
   "a": 2
  },
  {
   "l": "Hausse anormale des échecs :",
   "o": [
    "La détection intelligente",
    "Une alerte de journal d'activité",
    "Un classeur des échecs",
    "Une recommandation Azure Advisor"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Espace de travail.</b> Les ressources Application Insights classiques sont retirées ; une ressource basée sur un espace de travail stocke ses données dans LAW-Apps.<b>Disponibilité.</b> Le test standard interroge une URL depuis plusieurs emplacements (5 recommandés), et sa règle d'alerte se déclenche selon le nombre d'emplacements en échec. Les tests à plusieurs étapes sont dépréciés.<b>Échantillonnage.</b> Il ne garde qu'une partie des éléments tout en corrigeant les compteurs statistiquement. Un plafond quotidien couperait toute la collecte une fois atteint.<b>Détection intelligente.</b> Elle analyse le taux d'échec et alerte sur les anomalies, sans règle à écrire.",
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
    "*Ressource Application Insights",
    "Basée sur un espace de travail, liée à LAW-Apps"
   ],
   [
    "Test de la page d'accueil",
    "Un test standard, 5 emplacements, seuil 3"
   ],
   [
    "Réduction du volume",
    "L'échantillonnage"
   ],
   [
    "Hausse anormale des échecs",
    "La détection intelligente"
   ]
  ]
 },
 "keep": "Application Insights : basé sur un espace de travail, test standard multi-emplacements, échantillonnage, détection intelligente."
},
{
 "id": "D5-414",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous devez activer VM Insights sur 150 VM Windows et Linux de Sub-Prod. Les VM ont déjà l'agent Azure Monitor, avec une DCR qui collecte des événements Windows vers LAW-Ops.</p><p>Exigences :</p><ul><li>les graphiques de performances de VM Insights (processeur, mémoire, disque, réseau) doivent fonctionner ;</li><li>la vue Carte doit montrer les processus et les connexions entre serveurs ;</li><li>toutes les VM futures de Sub-Prod doivent être activées automatiquement ;</li><li>les données de VM Insights doivent arriver dans LAW-Ops, sans espace supplémentaire.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Configuration de collecte :",
   "o": [
    "Une DCR VM Insights vers LAW-Ops",
    "Ajouter la mémoire à la DCR existante",
    "Un paramètre de diagnostic sur chaque VM",
    "L'extension de diagnostic Windows"
   ],
   "a": 0
  },
  {
   "l": "Pour la vue Carte :",
   "o": [
    "Le moniteur de connexion",
    "Network Watcher dans la région",
    "L'agent Log Analytics en parallèle",
    "L'agent de dépendances"
   ],
   "a": 3
  },
  {
   "l": "VM futures :",
   "o": [
    "Rien : c'est automatique dans Sub-Prod",
    "Une alerte de journal d'activité",
    "L'initiative Policy VM Insights avec AMA",
    "Un runbook quotidien d'activation"
   ],
   "a": 2
  }
 ],
 "expl": "<b>DCR.</b> VM Insights utilise une DCR dédiée, qui envoie les compteurs de performances au format InsightsMetrics. Une VM peut être associée à plusieurs DCR : la DCR des événements reste en place.<b>Carte.</b> La vue Carte exige l'agent de dépendances (Dependency agent), activé par l'option « processus et dépendances » de la DCR VM Insights.<b>Échelle.</b> L'initiative intégrée d'Azure Policy installe l'agent, l'agent de dépendances si demandé, et associe la DCR aux VM existantes (correction) et futures.",
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
    "*Configuration de collecte",
    "Une DCR VM Insights vers LAW-Ops"
   ],
   [
    "Pour la vue Carte",
    "L'agent de dépendances"
   ],
   [
    "VM futures",
    "L'initiative Policy VM Insights avec AMA"
   ]
  ]
 },
 "keep": "VM Insights : DCR dédiée (InsightsMetrics), agent de dépendances pour la Carte, initiative Policy pour l'échelle."
},
{
 "id": "D5-415",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous écrivez des requêtes KQL dans LAW-Ops pour un rapport d'exploitation.</p><ul><li>Requête A : les 5 ordinateurs qui ont généré le plus d'événements d'erreur hier.</li><li>Requête B : pour chaque ordinateur, la date de son dernier signal de pulsation (Heartbeat), pour repérer les machines muettes.</li><li>Requête C : le nombre de requêtes par tranche d'une heure sur 7 jours, affiché en graphique temporel.</li><li>Requête D : les mêmes événements dans LAW-Ops et dans LAW-Lyon, dans une seule requête.</li></ul><p>Quel élément devez-vous utiliser dans chaque requête ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Requête A :",
   "o": [
    "take 5 | sort by count_",
    "summarize count() by Computer | top 5 by count_",
    "summarize count() by Computer | sort by Computer | take 5",
    "summarize count() by Computer | limit 5"
   ],
   "a": 1
  },
  {
   "l": "Requête B :",
   "o": [
    "summarize count() by Computer",
    "summarize max(TimeGenerated) by Computer",
    "where TimeGenerated > ago(1h) | distinct Computer",
    "sort by TimeGenerated desc | take 1"
   ],
   "a": 1
  },
  {
   "l": "Requête C :",
   "o": [
    "summarize count() by bin(TimeGenerated, 1d) | render table",
    "make-series count() on TimeGenerated step 1d",
    "summarize count() by TimeGenerated | render piechart",
    "summarize count() by bin(TimeGenerated, 1h) | render timechart"
   ],
   "a": 3
  },
  {
   "l": "Requête D :",
   "o": [
    "Event | join kind=inner (LAW-Lyon) on Computer",
    "search in (Event) \"LAW-Lyon\"",
    "Event | lookup workspace(\"LAW-Lyon\")",
    "union Event, workspace(\"LAW-Lyon\").Event"
   ],
   "a": 3
  }
 ],
 "expl": "<b>A.</b> On compte par ordinateur, puis top 5 trie et garde les 5 premiers. take 5 renvoie 5 lignes quelconques.<b>B.</b> max(TimeGenerated) par ordinateur donne la dernière pulsation (arg_max(TimeGenerated, *) renverrait toute la ligne). Un filtre ago(1h) masquerait justement les machines muettes.<b>C.</b> bin() regroupe par tranche d'une heure ; render timechart trace la série.<b>D.</b> union combine les tables, et workspace(\"…\") désigne une table d'un autre espace de travail. join exigerait une clé commune.",
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
    "*Requête A",
    "summarize count() by Computer | top 5 by count_"
   ],
   [
    "Requête B",
    "summarize max(TimeGenerated) by Computer"
   ],
   [
    "Requête C",
    "summarize count() by bin(TimeGenerated, 1h) | render timechart"
   ],
   [
    "Requête D",
    "union Event, workspace(\"LAW-Lyon\").Event"
   ]
  ]
 },
 "keep": "top N by, max()/arg_max() par entité, bin() + render timechart, union + workspace()."
},
{
 "id": "D5-416",
 "dom": 5,
 "type": "hot",
 "stem": "<p>La direction de Contoso veut plusieurs vues de supervision :</p><ul><li>Vue 1 : un rapport interactif pour l'équipe réseau, avec des paramètres (abonnement, période), des requêtes KQL, des métriques et des explications en texte, partagé dans le portail.</li><li>Vue 2 : un écran affiché en permanence au centre d'exploitation, avec quelques graphiques épinglés depuis le portail et Metrics Explorer, sans paramètre.</li><li>Vue 3 : l'équipe plateforme utilise déjà Grafana avec Prometheus pour Kubernetes et veut ajouter les métriques Azure Monitor dans les mêmes tableaux, sans gérer de serveur.</li><li>Vue 4 : l'équipe veut être prévenue dès qu'un indicateur dépasse un seuil.</li></ul><p>Que devez-vous utiliser pour chaque vue ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Vue 1 :",
   "o": [
    "Une alerte de métrique",
    "Un tableau de bord Azure partagé",
    "Azure Managed Grafana",
    "Un classeur Azure Monitor"
   ],
   "a": 3
  },
  {
   "l": "Vue 2 :",
   "o": [
    "Un classeur Azure Monitor",
    "Azure Managed Grafana",
    "Un tableau de bord Azure",
    "Une alerte de métrique"
   ],
   "a": 2
  },
  {
   "l": "Vue 3 :",
   "o": [
    "Un classeur Azure Monitor",
    "Une alerte de métrique",
    "Un tableau de bord Azure",
    "Azure Managed Grafana"
   ],
   "a": 3
  },
  {
   "l": "Vue 4 :",
   "o": [
    "Azure Managed Grafana",
    "Une alerte de métrique",
    "Un classeur Azure Monitor",
    "Un tableau de bord Azure"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Classeur.</b> Il combine texte, paramètres, requêtes KQL et métriques dans un rapport interactif partageable.<b>Tableau de bord.</b> On y épingle des vignettes depuis le portail ; il convient à un affichage permanent sans interaction.<b>Grafana managé.</b> Service Grafana géré par Azure, avec la source de données Azure Monitor intégrée, à côté de Prometheus.<b>Alerte.</b> Une visualisation ne prévient personne : il faut une règle d'alerte.",
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
    "*Vue 1",
    "Un classeur Azure Monitor"
   ],
   [
    "Vue 2",
    "Un tableau de bord Azure"
   ],
   [
    "Vue 3",
    "Azure Managed Grafana"
   ],
   [
    "Vue 4",
    "Une alerte de métrique"
   ]
  ]
 },
 "keep": "Rapport interactif = classeur. Écran épinglé = tableau de bord. Grafana existant = Managed Grafana. Prévenir = alerte."
},
{
 "id": "D5-417",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Plusieurs questions arrivent au support de Fabrikam ce matin :</p><ul><li>Q1 : « Microsoft a-t-il prévu une maintenance qui redémarrera nos VM de France Central la semaine prochaine ? »</li><li>Q2 : « VM-Erp a été indisponible 8 minutes cette nuit : était-ce un problème de la plateforme Azure ou une action de notre part ? »</li><li>Q3 : « Quelles VM sont sous-utilisées et pourraient être redimensionnées pour réduire les coûts ? »</li><li>Q4 : « Qui a redimensionné VM-Erp hier à 18 h ? »</li></ul><p>Où devez-vous chercher pour chaque question ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Q1 :",
   "o": [
    "Journal d'activité",
    "Azure Service Health",
    "Azure Advisor",
    "Azure Resource Health"
   ],
   "a": 1
  },
  {
   "l": "Q2 :",
   "o": [
    "Journal d'activité",
    "Azure Service Health",
    "Azure Resource Health",
    "Azure Advisor"
   ],
   "a": 2
  },
  {
   "l": "Q3 :",
   "o": [
    "Azure Service Health",
    "Azure Advisor",
    "Azure Resource Health",
    "Journal d'activité"
   ],
   "a": 1
  },
  {
   "l": "Q4 :",
   "o": [
    "Azure Resource Health",
    "Journal d'activité",
    "Azure Advisor",
    "Azure Service Health"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Service Health</b> couvre les incidents, maintenances planifiées et avis qui concernent les services et régions que vous utilisez.<b>Resource Health</b> donne l'historique de disponibilité d'une ressource précise et indique si un événement venait de la plateforme ou d'une action utilisateur.<b>Advisor</b> recommande le redimensionnement ou l'arrêt des VM sous-utilisées (coût).<b>Journal d'activité</b> : qui a fait quelle opération de gestion, et quand.",
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
    "*Q1",
    "Azure Service Health"
   ],
   [
    "Q2",
    "Azure Resource Health"
   ],
   [
    "Q3",
    "Azure Advisor"
   ],
   [
    "Q4",
    "Journal d'activité"
   ]
  ]
 },
 "keep": "Maintenances = Service Health. Une ressource = Resource Health. Coûts = Advisor. Qui a fait quoi = journal d'activité."
},
{
 "id": "D5-418",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Le compte de stockage stdocs (France Central, LRS) contient le partage Azure Files share-contrats (2 Tio). Vous configurez Azure Backup.</p><p>Exigences :</p><ul><li>restauration d'un fichier seul par les administrateurs ;</li><li>une copie des données doit exister hors du compte de stockage, pour survivre à la suppression ou à la corruption du compte, avec une rétention de 10 ans ;</li><li>un administrateur s'étonne de ne pas pouvoir supprimer stdocs, devenu inutile après un test, alors qu'il en est Propriétaire.</li></ul><p>Que devez-vous configurer ou répondre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Niveau de sauvegarde :",
   "o": [
    "Azure File Sync vers un serveur",
    "Coffre (vaulted)",
    "Sauvegarde opérationnelle des blobs",
    "Instantanés seuls, dans le compte"
   ],
   "a": 1
  },
  {
   "l": "Restauration d'un fichier :",
   "o": [
    "Monter un VHD du point de récupération",
    "Restaurer tout le partage ailleurs",
    "Restauration au niveau élément",
    "AzCopy depuis le coffre"
   ],
   "a": 2
  },
  {
   "l": "Impossible de supprimer stdocs :",
   "o": [
    "Azure Backup a verrouillé le compte",
    "La redondance LRS bloque la suppression",
    "Le partage est monté par des clients",
    "Propriétaire ne suffit pas pour le stockage"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Niveau.</b> La sauvegarde par instantanés seuls garde les points dans le compte : si le compte est supprimé, ils disparaissent. Le niveau « coffre » copie les données dans le coffre Recovery Services, hors du compte, avec une rétention longue (jusqu'à 10 ans).<b>Fichier seul.</b> La restauration au niveau élément remet un fichier ou un dossier, à l'emplacement d'origine ou ailleurs.<b>Verrou.</b> Quand on protège un partage, Azure Backup place un verrou Suppression impossible sur le compte de stockage pour éviter la perte des sauvegardes. Il faut arrêter la protection et retirer le verrou avant de supprimer le compte.",
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
    "*Niveau de sauvegarde",
    "Coffre (vaulted)"
   ],
   [
    "Restauration d'un fichier",
    "Restauration au niveau élément"
   ],
   [
    "Impossible de supprimer stdocs",
    "Azure Backup a verrouillé le compte"
   ]
  ]
 },
 "keep": "Azure Files : instantané (dans le compte) ou coffre (hors du compte). Azure Backup verrouille le compte de stockage."
},
{
 "id": "D5-419",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Le serveur de fichiers local FS-Paris (Windows Server 2022, 4 To) n'est pas dans Azure. La direction veut le sauvegarder dans RSV-OnPrem.</p><ul><li>Les dossiers D:\\Projets doivent être sauvegardés trois fois par jour, sans serveur de sauvegarde intermédiaire.</li><li>L'état du système doit aussi être sauvegardé.</li><li>Les serveurs Hyper-V du siège, avec leurs VM et des bases SQL Server, doivent être sauvegardés localement pour des restaurations rapides, puis copiés dans Azure.</li><li>Un administrateur demande ce qui se passe s'il perd la phrase secrète définie à l'installation de l'agent de FS-Paris.</li></ul><p>Que devez-vous utiliser ou répondre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "FS-Paris (dossiers et état du système) :",
   "o": [
    "L'extension de sauvegarde de VM",
    "Azure Backup Server (MABS)",
    "Azure File Sync",
    "L'agent MARS"
   ],
   "a": 3
  },
  {
   "l": "Fréquence maximale avec cet agent :",
   "o": [
    "Trois fois par jour",
    "Toutes les heures",
    "Une fois par jour",
    "Toutes les 15 minutes"
   ],
   "a": 0
  },
  {
   "l": "Hyper-V et SQL Server :",
   "o": [
    "Azure Arc",
    "L'agent MARS sur chaque hôte",
    "Azure Backup Server (MABS)",
    "Site Recovery"
   ],
   "a": 2
  },
  {
   "l": "Phrase secrète perdue :",
   "o": [
    "Microsoft peut la réinitialiser",
    "Elle est dans Key Vault automatiquement",
    "Le coffre en garde une copie",
    "Les points existants sont irrécupérables"
   ],
   "a": 3
  }
 ],
 "expl": "<b>MARS.</b> L'agent Microsoft Azure Recovery Services sauvegarde fichiers, dossiers et état du système directement vers le coffre, sans serveur intermédiaire, jusqu'à trois fois par jour.<b>MABS.</b> Azure Backup Server protège des charges applicatives (Hyper-V, SQL Server, Exchange, SharePoint) sur disque local, puis envoie des copies dans Azure.<b>Phrase secrète.</b> Elle chiffre les données côté client ; Microsoft ne la connaît pas. Sans elle, les points existants ne peuvent pas être déchiffrés. On peut la stocker dans Azure Key Vault, mais il faut le configurer.",
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
    "*FS-Paris (dossiers et état du système)",
    "L'agent MARS"
   ],
   [
    "Fréquence maximale avec cet agent",
    "Trois fois par jour"
   ],
   [
    "Hyper-V et SQL Server",
    "Azure Backup Server (MABS)"
   ],
   [
    "Phrase secrète perdue",
    "Les points existants sont irrécupérables"
   ]
  ]
 },
 "keep": "MARS : fichiers et état du système, 3 fois par jour, phrase secrète indispensable. MABS : applications locales."
},
{
 "id": "D5-420",
 "dom": 5,
 "type": "hot",
 "stem": "<p>L'équipe de sauvegarde de Contoso gère 25 coffres Recovery Services et coffres de sauvegarde dans 6 abonnements.</p><ul><li>Elle veut être alertée par e-mail et Teams quand un travail de sauvegarde échoue, dans tous les coffres, avec la solution recommandée par Microsoft.</li><li>Elle veut des rapports mensuels (stockage consommé, travaux réussis, éléments protégés) sur 12 mois.</li><li>Elle veut une vue unique de la protection de toutes les ressources (y compris celles qui ne sont pas protégées), sauvegarde et Site Recovery confondus.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Alertes d'échec :",
   "o": [
    "Une alerte de métrique par coffre",
    "Les alertes classiques des coffres",
    "Alertes intégrées + règle de traitement",
    "Un runbook qui lit les travaux de sauvegarde"
   ],
   "a": 2
  },
  {
   "l": "Prérequis des rapports :",
   "o": [
    "Rien : les rapports sont automatiques dans chaque coffre",
    "Un compte de stockage par coffre",
    "Un espace Power BI Premium",
    "Diagnostics des coffres vers Log Analytics"
   ],
   "a": 3
  },
  {
   "l": "Vue unique :",
   "o": [
    "Le Centre de continuité d'activité",
    "Une requête Resource Graph",
    "Les recommandations Azure Advisor",
    "Le tableau de bord de chaque coffre"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Alertes.</b> Les alertes classiques sont retirées ; les alertes intégrées d'Azure Monitor pour la sauvegarde sont générées automatiquement. Une règle de traitement des alertes (à l'échelle de l'abonnement ou plus) les achemine vers un groupe d'actions (e-mail, Teams via webhook ou application logique).<b>Rapports.</b> Les rapports de sauvegarde lisent les données envoyées par les paramètres de diagnostic des coffres vers un ou plusieurs espaces de travail, en mode spécifique à la ressource.<b>Vue unique.</b> Le Centre de continuité d'activité regroupe sauvegarde et Site Recovery, montre les ressources non protégées et couvre plusieurs abonnements.",
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
    "*Alertes d'échec",
    "Alertes intégrées + règle de traitement"
   ],
   [
    "Prérequis des rapports",
    "Diagnostics des coffres vers Log Analytics"
   ],
   [
    "Vue unique",
    "Le Centre de continuité d'activité"
   ]
  ]
 },
 "keep": "Alertes de sauvegarde : Azure Monitor intégrées + règle de traitement. Rapports : diagnostics vers Log Analytics. Vue unique : Business Continuity Center."
}
);
