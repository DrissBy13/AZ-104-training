/* Domaine 5 : supervision et sauvegarde (lot C : D5-061 à D5-110) */
AZ.questions.push(
{
 "id": "D5-061",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une application tourne sur trois VM en France Central. En cas de sinistre régional, elle doit redémarrer en West Europe en moins d'une heure, avec moins de 5 minutes de données perdues.</p><p>Quel service devez-vous utiliser ?</p>",
 "opts": [
  "Azure Site Recovery",
  "Des instantanés manuels",
  "Azure Backup avec une sauvegarde quotidienne",
  "Un groupe à haute disponibilité"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Site Recovery</b> réplique en continu les disques des VM vers la région cible. Le <b>RPO</b> (perte de données maximale) est de l'ordre de quelques secondes à minutes, et le <b>RTO</b> (temps de reprise) de quelques minutes grâce au basculement.</p><p>Une sauvegarde quotidienne aurait un RPO de 24 heures et une restauration plus longue.</p>"
},
{
 "id": "D5-062",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous configurez Azure Site Recovery pour VM9 de France Central vers West Europe.</p><p>Où se trouve le coffre Recovery Services ?</p>",
 "opts": [
  "Obligatoirement dans la région source",
  "Dans la région cible (West Europe), ou en tout cas pas dans la région source",
  "Dans n'importe quelle région, y compris la source",
  "Dans le groupe de ressources de VM9"
 ],
 "ans": 1,
 "expl": "<p>Pour Site Recovery entre régions Azure, le coffre doit être dans une région <b>différente de la région source</b>, généralement la <b>région cible</b> : s'il était dans la région sinistrée, il serait indisponible au moment du basculement.</p><p>C'est l'inverse d'Azure Backup, où le coffre est dans la même région que les VM.</p>"
},
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
 "expl": "<ul><li><b>Backup</b> : coffre dans la <b>même région</b> que les VM.</li><li><b>Site Recovery</b> : coffre dans la <b>région cible</b> (différente de la source).</li><li>Site Recovery utilise un <b>compte de stockage de cache</b> dans la <b>région source</b> pour collecter les modifications avant de les envoyer vers la cible.</li></ul>"
},
{
 "id": "D5-064",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez vérifier que le plan de reprise fonctionne, sans aucun impact sur la production ni sur la réplication en cours.</p><p>Quelle opération Site Recovery devez-vous lancer ?</p>",
 "opts": [
  "Un basculement planifié",
  "Une reprotection",
  "Un test de basculement vers un réseau virtuel isolé",
  "Un basculement non planifié"
 ],
 "ans": 2,
 "expl": "<p>Le <b>test de basculement</b> crée des VM de test dans la région cible, dans un réseau virtuel choisi (de préférence <b>isolé</b>), sans arrêter les VM sources ni interrompre la réplication. On nettoie ensuite le test.</p>"
},
{
 "id": "D5-065",
 "dom": 5,
 "type": "order",
 "stem": "<p>La région source est de nouveau disponible après un basculement Site Recovery vers la région cible. Vous devez revenir à la région source.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
 "expl": "<p>Après le basculement, on le <b>valide</b>. On <b>reprotège</b> pour répliquer dans l'autre sens (cible → source). Quand on est prêt, on <b>bascule vers la source</b> (failback), puis on <b>valide et reprotège</b> à nouveau pour revenir à la configuration d'origine.</p>"
},
{
 "id": "D5-066",
 "dom": 5,
 "type": "single",
 "stem": "<p>Lors d'un basculement, une application à trois niveaux doit démarrer dans l'ordre : base de données, puis serveur d'applications, puis serveurs web, avec un script entre les étapes.</p><p>Que devez-vous créer dans Site Recovery ?</p>",
 "opts": [
  "Trois coffres",
  "Un groupe de placement de proximité",
  "Une stratégie de réplication par VM",
  "Un plan de récupération avec des groupes et des scripts ou actions manuelles"
 ],
 "ans": 3,
 "expl": "<p>Un <b>plan de récupération</b> regroupe des VM en <b>groupes</b> qui démarrent dans l'ordre, et permet d'ajouter des <b>scripts</b> (runbooks Azure Automation) et des <b>actions manuelles</b> entre les groupes.</p>"
},
{
 "id": "D5-067",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez que les points de récupération Site Recovery cohérents avec les applications soient créés toutes les 2 heures, et que les points soient conservés 24 heures.</p><p>Où réglez-vous ces paramètres ?</p>",
 "opts": [
  "Dans la stratégie de réplication",
  "Dans le plan de récupération",
  "Dans la stratégie de sauvegarde",
  "Dans le paramètre de diagnostic"
 ],
 "ans": 0,
 "expl": "<p>La <b>stratégie de réplication</b> de Site Recovery définit la <b>rétention des points de récupération</b> et la <b>fréquence des instantanés cohérents avec les applications</b>. Les points cohérents en cas d'incident sont créés automatiquement toutes les quelques minutes.</p>"
},
{
 "id": "D5-068",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une panne régionale majeure touche France Central. Les VM sources sont indisponibles. Vous devez démarrer les VM en West Europe.</p><p>Quel type de basculement devez-vous lancer ?</p>",
 "opts": [
  "Un basculement planifié avec arrêt des VM sources",
  "Un basculement (non planifié), en choisissant le point de récupération (le plus récent ou le dernier cohérent avec les applications)",
  "Un test de basculement",
  "Une reprotection"
 ],
 "ans": 1,
 "expl": "<p>En cas de sinistre, on lance un <b>basculement</b> non planifié, en choisissant le point de récupération : le plus récent (RPO minimal), le dernier traité (RTO minimal) ou le dernier cohérent avec les applications. Le basculement <b>planifié</b>, lui, arrête proprement les VM sources sans perte de données, quand la source est encore disponible.</p>"
},
{
 "id": "D5-069",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une application critique est dans la zone 1 de France Central. Vous voulez la répliquer vers la zone 2 de la même région, pour un basculement en cas de panne de zone.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "La géoréplication d'ACR",
  "Azure Backup en LRS",
  "Azure Site Recovery de zone à zone",
  "Un appairage de réseaux virtuels"
 ],
 "ans": 2,
 "expl": "<p>Site Recovery prend en charge la reprise <b>de zone à zone</b> dans une même région : les VM zonales sont répliquées vers une autre zone, avec un basculement en cas de panne de zone.</p>"
},
{
 "id": "D5-070",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez protéger des serveurs VMware locaux avec Azure Site Recovery, avec un basculement vers Azure.</p><p>Quel composant devez-vous déployer sur le site local ?</p>",
 "opts": [
  "Une passerelle NAT",
  "L'agent MARS uniquement",
  "Azure File Sync",
  "Une appliance de réplication Azure Site Recovery (avec le service Mobility sur les machines)"
 ],
 "ans": 3,
 "expl": "<p>Pour VMware et les serveurs physiques, Site Recovery utilise une <b>appliance de réplication</b> locale et le <b>service Mobility</b> installé sur chaque machine protégée. Pour Hyper-V, on installe le fournisseur Site Recovery et l'agent Recovery Services sur les hôtes.</p>"
},
{
 "id": "D5-071",
 "dom": 5,
 "type": "single",
 "stem": "<p>Après un basculement Site Recovery, les VM démarrent en West Europe dans le mauvais réseau virtuel.</p><p>Où définissez-vous le réseau cible utilisé lors du basculement ?</p>",
 "opts": [
  "Dans les paramètres de réplication (réseau cible et mappage réseau) de chaque élément ou du coffre",
  "Dans le paramètre de diagnostic",
  "Dans la stratégie de sauvegarde",
  "Dans Azure Advisor"
 ],
 "ans": 0,
 "expl": "<p>Le <b>réseau cible</b> (et le sous-réseau, l'adresse IP) se configure dans les <b>paramètres de calcul et de réseau</b> de l'élément répliqué, et le <b>mappage réseau</b> associe un réseau source à un réseau cible. Le test de basculement utilise un réseau séparé, choisi au moment du test.</p>"
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
 "expl": "<ul><li><b>Backup : Oui.</b> Il conserve des points sur des jours, mois et années.</li><li><b>Site Recovery et années : Non.</b> Il garde des points récents (au plus 15 jours) : son but est la <b>continuité</b> (basculer vite), pas l'archivage.</li><li><b>Les deux : Oui.</b> C'est même recommandé : Backup pour restaurer des données, Site Recovery pour reprendre l'activité.</li></ul>"
},
{
 "id": "D5-073",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez associer chaque notion à sa définition.</p><p>Pour répondre, faites glisser la notion appropriée vers chaque définition. Chaque notion peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Notions",
 "srcs": [
  "RPO",
  "RTO",
  "Basculement",
  "Restauration automatique (failback)"
 ],
 "tgtHead": [
  "Définition",
  "Notion"
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
 "expl": "<ul><li><b>RPO</b> (Recovery Point Objective) : par exemple 15 minutes de données perdues au maximum.</li><li><b>RTO</b> (Recovery Time Objective) : par exemple 1 heure pour redémarrer.</li><li><b>Basculement</b> : passage vers le site secondaire.</li><li><b>Restauration automatique</b> : retour vers le site principal.</li></ul>"
},
{
 "id": "D5-074",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez être alerté par e-mail si un travail de sauvegarde de VM échoue, dans tous vos coffres.</p><p>Que Microsoft recommande-t-il ?</p>",
 "opts": [
  "Une alerte de budget",
  "Les alertes intégrées d'Azure Monitor pour Azure Backup, avec une règle de traitement des alertes et un groupe d'actions",
  "Une alerte de métrique sur le CPU",
  "Les notifications par e-mail classiques de chaque coffre uniquement"
 ],
 "ans": 1,
 "expl": "<p>Azure Backup génère des <b>alertes intégrées dans Azure Monitor</b> (échecs de sauvegarde, de restauration, suppression de données…). On les achemine avec une <b>règle de traitement des alertes</b> vers un <b>groupe d'actions</b>. C'est l'approche recommandée, qui remplace les alertes classiques du coffre.</p>"
},
{
 "id": "D5-075",
 "dom": 5,
 "type": "single",
 "stem": "<p>Un réseau virtuel n'a pas de journal de flux, et vous voulez savoir quelle adresse IP a été bloquée vers une VM hier.</p><p>Que pouvez-vous faire ?</p>",
 "opts": [
  "Consulter le journal d'activité",
  "Consulter les métriques du NSG",
  "Rien pour hier : il faut activer les journaux de flux pour les prochaines fois",
  "Consulter Azure Advisor"
 ],
 "ans": 2,
 "expl": "<p>Les flux réseau ne sont enregistrés que si les <b>journaux de flux</b> sont activés. Sans eux, il n'existe aucune trace des connexions refusées hier. Le journal d'activité ne trace que les opérations de gestion, pas le trafic.</p>"
},
{
 "id": "D5-076",
 "dom": 5,
 "type": "single",
 "stem": "<p>Les journaux de diagnostic de plusieurs services arrivent dans des tables comme AzureDiagnostics ou des tables propres (par exemple AppServiceHTTPLogs).</p><p>Quel mode de paramètre de diagnostic crée des tables spécifiques à chaque type de ressource, plus faciles à interroger ?</p>",
 "opts": [
  "Le mode Diagnostics Azure (AzureDiagnostics)",
  "Le mode Archive",
  "Le mode Event Hubs",
  "Le mode Spécifique à la ressource (resource-specific)"
 ],
 "ans": 3,
 "expl": "<p>Le mode <b>spécifique à la ressource</b> écrit dans des tables dédiées par catégorie, avec un schéma clair. Le mode <b>Diagnostics Azure</b> mélange beaucoup de services dans une seule table, ce qui est moins performant et plus difficile à interroger. Microsoft recommande le mode spécifique à la ressource quand il est disponible.</p>"
},
{
 "id": "D5-077",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez superviser les VM de plusieurs abonnements avec un seul espace de travail Log Analytics.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "Un espace de travail peut recevoir des données de ressources de plusieurs abonnements et régions",
  "Un espace de travail ne reçoit que les données de son abonnement",
  "Il faut un espace de travail par région obligatoirement",
  "Il faut un espace de travail par VM"
 ],
 "ans": 0,
 "expl": "<p>Un espace de travail Log Analytics peut collecter des données de ressources de <b>plusieurs abonnements et régions</b>, voire de plusieurs locataires. Microsoft recommande de limiter le nombre d'espaces de travail, sauf contrainte de souveraineté, de facturation ou d'accès.</p>"
},
{
 "id": "D5-078",
 "dom": 5,
 "type": "single",
 "stem": "<p>Votre espace de travail Log Analytics ingère environ 200 Go par jour. Vous voulez réduire le coût d'ingestion.</p><p>Quelle option de tarification devez-vous envisager ?</p>",
 "opts": [
  "Augmenter la rétention",
  "Un niveau d'engagement (commitment tier), par exemple 200 Go par jour",
  "Un second espace de travail",
  "Le paiement à l'utilisation uniquement"
 ],
 "ans": 1,
 "expl": "<p>Les <b>niveaux d'engagement</b> (100, 200, 300 Go/jour et plus) offrent une remise par rapport au paiement à l'utilisation, en échange d'un volume quotidien engagé. On peut aussi réduire l'ingestion (filtrer dans les règles de collecte de données, plan de table Basic ou Auxiliary pour des journaux peu interrogés).</p>"
},
{
 "id": "D5-079",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une table de journaux de débogage très volumineuse n'est consultée qu'en cas d'incident, avec des requêtes simples.</p><p>Quel plan de table permet de réduire fortement le coût d'ingestion ?</p>",
 "opts": [
  "Un niveau d'engagement plus élevé",
  "Le plan Analytics",
  "Le plan Basic (ou Auxiliary) de la table",
  "Une rétention de 2 ans"
 ],
 "ans": 2,
 "expl": "<p>Les plans de table <b>Basic</b> et <b>Auxiliary</b> coûtent bien moins cher à l'ingestion que le plan <b>Analytics</b>, en échange de fonctionnalités de requête limitées et d'un coût par requête. Ils conviennent aux journaux volumineux peu interrogés.</p>"
},
{
 "id": "D5-080",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez éviter qu'une erreur de configuration fasse exploser la facture de l'espace de travail WS3 en une journée.</p><p>Que pouvez-vous configurer ?</p>",
 "opts": [
  "Un verrou sur l'espace de travail",
  "Une rétention plus courte uniquement",
  "Un groupe de placement de proximité",
  "Un plafond quotidien (daily cap) sur l'espace de travail, avec une alerte"
 ],
 "ans": 3,
 "expl": "<p>Le <b>plafond quotidien</b> arrête la collecte (pour la plupart des types de données) quand le volume du jour atteint la limite, jusqu'au lendemain. Attention : les données au-delà sont perdues. On l'associe à une alerte pour être prévenu.</p>"
},
{
 "id": "D5-081",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez lister, dans Log Analytics, toutes les opérations de suppression réalisées dans l'abonnement la semaine dernière, avec l'appelant.</p><p>Quelle table devez-vous interroger ?</p>",
 "opts": [
  "AzureActivity",
  "Event",
  "Heartbeat",
  "Perf"
 ],
 "ans": 0,
 "expl": "<p>La table <b>AzureActivity</b> contient le journal d'activité envoyé par le paramètre de diagnostic de l'abonnement : <code>AzureActivity | where OperationNameValue endswith \"DELETE\" | project TimeGenerated, Caller, ResourceGroup, OperationNameValue</code>.</p><p>Perf contient les compteurs de performances, Heartbeat les signaux des agents, Event les événements Windows.</p>"
},
{
 "id": "D5-082",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez savoir quelles VM ont cessé d'envoyer des données à Log Analytics depuis plus de 15 minutes.</p><p>Quelle table devez-vous interroger ?</p>",
 "opts": [
  "AzureActivity",
  "Heartbeat",
  "Usage",
  "SecurityEvent"
 ],
 "ans": 1,
 "expl": "<p>Les agents envoient un signal <b>Heartbeat</b> chaque minute. La requête <code>Heartbeat | summarize Dernier = max(TimeGenerated) by Computer | where Dernier &lt; ago(15m)</code> liste les machines silencieuses. On peut en faire une alerte de recherche dans les journaux.</p>"
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
 "expl": "<ul><li><code>ago(1d)</code> : les dernières 24 heures.</li><li><code>min(CounterValue) by Computer</code> : le pourcentage d'espace libre le plus bas de C: pour chaque ordinateur.</li><li>Le dernier <code>where</code> ne garde que ceux sous 10 %.</li></ul>"
},
{
 "id": "D5-084",
 "dom": 5,
 "type": "screen",
 "stem": "<p>Vous créez une alerte de métrique sur VM10 : elle doit se déclencher quand le CPU moyen dépasse 90 % sur 5 minutes, être évaluée toutes les minutes, avec la gravité 1, et notifier le groupe d'actions AG-Astreinte.</p><p>Comment devez-vous configurer l'alerte ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "<ul><li>Signal <b>Percentage CPU</b>, agrégation <b>Moyenne</b>, <b>Supérieur à 90</b>.</li><li><b>Granularité d'agrégation</b> (période de recherche) <b>5 minutes</b> ; <b>fréquence d'évaluation</b> <b>1 minute</b>.</li><li>Groupe d'actions <b>AG-Astreinte</b>, gravité <b>1 - Erreur</b>.</li></ul>"
},
{
 "id": "D5-085",
 "dom": 5,
 "type": "screen",
 "stem": "<p>Vous créez un paramètre de diagnostic sur le coffre de clés KV3. Les journaux d'audit doivent aller dans l'espace de travail WS1, dans des tables spécifiques, et être archivés dans storage95.</p><p>Comment devez-vous configurer le paramètre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "<ul><li>Catégorie <b>AuditEvent</b> : toutes les opérations sur le coffre.</li><li>Destination <b>Log Analytics</b> avec des tables <b>spécifiques à la ressource</b>, et <b>archivage</b> dans storage95.</li><li>Pas d'Event Hub. Les métriques ne sont pas notées ici.</li></ul>"
},
{
 "id": "D5-086",
 "dom": 5,
 "type": "screen",
 "stem": "<p>Vous configurez la sauvegarde de VM11. La sauvegarde doit avoir lieu chaque jour à 22 h, garder les points quotidiens 14 jours et les points hebdomadaires du dimanche 8 semaines, avec des instantanés de restauration instantanée conservés 2 jours.</p><p>Comment devez-vous configurer la stratégie ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "<ul><li>Fréquence <b>quotidienne</b> à <b>22 h</b>.</li><li>Instantanés de restauration instantanée : <b>2 jours</b>.</li><li>Rétention quotidienne <b>14 jours</b>, hebdomadaire (dimanche) <b>8 semaines</b>.</li></ul><p>Le type de stratégie n'est pas noté : une seule sauvegarde par jour fonctionne avec les deux.</p>"
},
{
 "id": "D5-087",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Vous devez activer la sauvegarde de VM12 depuis la page de la VM.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
 "ans": "Sauvegarde",
 "expl": "<p><b>Sauvegarde</b> active Azure Backup (choix du coffre et de la stratégie). <b>Récupération d'urgence</b> active la réplication Azure Site Recovery vers une autre région ou zone.</p>"
},
{
 "id": "D5-088",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Vous devez créer une alerte qui notifie l'équipe quand une maintenance planifiée de la plateforme Azure concerne vos ressources.</p><p>Dans le portail, quel service devez-vous ouvrir ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
 "ans": "Service Health",
 "expl": "<p><b>Service Health</b> affiche les incidents, maintenances planifiées et avis, et permet de créer des <b>alertes d'intégrité du service</b> filtrées par service, région et type d'événement.</p>"
},
{
 "id": "D5-089",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez collecter le journal Syslog de 30 VM Linux vers l'espace de travail WS4.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Créer un paramètre de diagnostic sur l'espace de travail",
  "Installer l'agent Azure Monitor sur les VM (souvent automatiquement par l'association de la DCR)",
  "Créer une règle de collecte de données avec la source Syslog et la destination WS4",
  "Activer les diagnostics de démarrage"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<ul><li><b>Agent Azure Monitor : oui.</b></li><li><b>Règle de collecte de données Syslog vers WS4 : oui</b>, associée aux 30 VM.</li><li>Les diagnostics de démarrage concernent la console de démarrage. Un paramètre de diagnostic de l'espace de travail envoie ses propres journaux, pas ceux des VM.</li></ul>"
},
{
 "id": "D5-090",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez protéger les sauvegardes de VM contre un administrateur malveillant qui voudrait les supprimer.</p><p>Quelles <b>deux</b> fonctionnalités du coffre devez-vous utiliser ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "La suppression réversible toujours activée (améliorée)",
  "L'immuabilité du coffre (verrouillée)",
  "Une alerte de métrique sur le CPU",
  "La redondance LRS"
 ],
 "ans": [
  0,
  1
 ],
 "expl": "<ul><li><b>Suppression réversible toujours activée : oui</b>, les données supprimées restent récupérables et le réglage ne peut pas être désactivé.</li><li><b>Coffre immuable verrouillé : oui</b>, il empêche la suppression des points avant leur expiration.</li><li>L'autorisation multi-utilisateur serait un troisième bon choix. LRS et une alerte CPU n'apportent rien ici.</li></ul>"
},
{
 "id": "D5-091",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous préparez Azure Site Recovery pour 10 VM de France Central vers West Europe.</p><p>Quelles <b>deux</b> ressources doivent exister ou être créées ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Un coffre Recovery Services en West Europe",
  "Une passerelle VPN entre les deux régions",
  "Un coffre de sauvegarde (Backup vault) en France Central",
  "Un réseau virtuel cible en West Europe (créé automatiquement ou choisi)"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<ul><li><b>Coffre en West Europe : oui.</b></li><li><b>Réseau virtuel cible : oui</b>, pour y démarrer les VM au basculement (Site Recovery peut le créer).</li><li>Le coffre de sauvegarde ne sert pas à Site Recovery. Aucune passerelle VPN n'est nécessaire : la réplication passe par le réseau Azure.</li></ul>"
},
{
 "id": "D5-092",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez que les alertes de métrique soient créées automatiquement pour les problèmes courants de vos VM (CPU, mémoire, disque, disponibilité), sans les écrire une par une.</p><p>Que pouvez-vous utiliser ?</p>",
 "opts": [
  "Une règle de traitement des alertes",
  "Un classeur",
  "Les règles d'alerte recommandées (alertes recommandées) de la VM",
  "Le journal d'activité"
 ],
 "ans": 2,
 "expl": "<p>Azure propose des <b>règles d'alerte recommandées</b> pour les VM (et d'autres ressources) : on les active en quelques clics depuis la page Alertes de la ressource, avec des seuils par défaut modifiables. Azure Monitor Baseline Alerts (AMBA) permet de le faire à grande échelle avec Azure Policy.</p>"
},
{
 "id": "D5-093",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une alerte de recherche dans les journaux doit s'exécuter toutes les 5 minutes et se déclencher si la requête renvoie au moins une ligne.</p><p>Quels réglages correspondent ?</p>",
 "opts": [
  "Seuil dynamique sur le CPU",
  "Granularité d'une heure",
  "Alerte de journal d'activité",
  "Mesure : nombre de lignes, opérateur Supérieur à 0, fréquence d'évaluation 5 minutes"
 ],
 "ans": 3,
 "expl": "<p>Une <b>alerte de recherche dans les journaux</b> exécute une requête KQL selon une fréquence, sur une période. La condition porte sur le <b>nombre de lignes</b> ou une mesure calculée (par exemple une moyenne), comparée à un seuil.</p>"
},
{
 "id": "D5-094",
 "dom": 5,
 "type": "single",
 "stem": "<p>L'équipe applicative veut être appelée sur son téléphone (appel vocal) quand une alerte critique se déclenche.</p><p>Où devez-vous configurer cela ?</p>",
 "opts": [
  "Dans un groupe d'actions, avec une notification Voix",
  "Dans Service Health uniquement",
  "Dans la règle de collecte de données",
  "Dans le paramètre de diagnostic"
 ],
 "ans": 0,
 "expl": "<p>Les <b>groupes d'actions</b> proposent les notifications <b>e-mail</b>, <b>SMS</b>, <b>notification push</b> (application mobile Azure) et <b>appel vocal</b>, avec des limites de fréquence par numéro.</p>"
},
{
 "id": "D5-095",
 "dom": 5,
 "type": "single",
 "stem": "<p>Quand une alerte se déclenche, un script doit redémarrer automatiquement un service sur une VM.</p><p>Quelle action du groupe d'actions devez-vous utiliser ?</p>",
 "opts": [
  "Un SMS",
  "Un runbook Azure Automation (ou une fonction Azure)",
  "Une notification push",
  "Une notification e-mail"
 ],
 "ans": 1,
 "expl": "<p>Un groupe d'actions peut déclencher un <b>runbook Automation</b>, une <b>fonction Azure</b>, une <b>application logique</b> ou un <b>webhook</b> : c'est la base de la remédiation automatique.</p>"
},
{
 "id": "D5-096",
 "dom": 5,
 "type": "single",
 "stem": "<p>Un service web public doit être surveillé depuis Internet : s'il ne répond plus en HTTP 200 depuis au moins 2 emplacements, une alerte doit partir.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un paramètre de diagnostic",
  "Une alerte Resource Health",
  "Un test de disponibilité standard dans Application Insights, avec une alerte",
  "Une alerte de journal d'activité"
 ],
 "ans": 2,
 "expl": "<p>Les <b>tests de disponibilité</b> d'Application Insights (test standard ou ping d'URL) interrogent l'URL depuis plusieurs emplacements Azure. L'alerte se déclenche quand un nombre minimal d'emplacements échoue.</p>"
},
{
 "id": "D5-097",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez voir la topologie et l'état de santé des réseaux (passerelles, équilibreurs, connexions) de vos abonnements dans une vue unique.</p><p>Que devez-vous ouvrir ?</p>",
 "opts": [
  "Application Insights",
  "Container Insights",
  "VM Insights",
  "Azure Monitor Network Insights"
 ],
 "ans": 3,
 "expl": "<p><b>Network Insights</b> (Azure Monitor > Réseaux) présente l'intégrité et les métriques de toutes les ressources réseau, avec la topologie et l'accès aux outils de Network Watcher.</p>"
},
{
 "id": "D5-098",
 "dom": 5,
 "type": "single",
 "stem": "<p>Une équipe veut un tableau de bord partagé qui affiche en permanence quelques graphiques de métriques et une requête de journaux, épinglés depuis le portail.</p><p>Quelle solution est la plus simple ?</p>",
 "opts": [
  "Un tableau de bord Azure partagé",
  "Un groupe d'actions",
  "Une stratégie de sauvegarde",
  "Une règle de traitement des alertes"
 ],
 "ans": 0,
 "expl": "<p>Les <b>tableaux de bord Azure</b> permettent d'épingler des graphiques de métriques, des résultats de requêtes et d'autres vignettes, puis de les partager (ce sont des ressources Azure, avec un contrôle d'accès). Les classeurs sont plus riches pour des rapports interactifs.</p>"
},
{
 "id": "D5-099",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous voulez exporter des métriques de plateforme d'une ressource vers Log Analytics pour les croiser avec des journaux dans une requête KQL.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Le plafond quotidien",
  "Un paramètre de diagnostic avec la catégorie AllMetrics vers l'espace de travail",
  "Une règle de traitement des alertes",
  "Une alerte de métrique"
 ],
 "ans": 1,
 "expl": "<p>Un <b>paramètre de diagnostic</b> peut envoyer les <b>métriques</b> (AllMetrics) en plus des journaux. Elles arrivent dans la table <b>AzureMetrics</b> de Log Analytics, interrogeable avec KQL.</p>"
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
 "expl": "<ul><li><b>Plusieurs abonnements : Oui</b>, un groupe d'actions est référencé par son ID de ressource.</li><li><b>Plusieurs groupes : Oui</b>, par exemple un pour l'astreinte et un pour les tickets.</li><li><b>Règle de traitement : Oui</b>, elle peut ajouter des groupes d'actions (ou les supprimer) sur une étendue.</li></ul>"
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
 "expl": "<ul><li><b>Test et réplication : Non</b>, la réplication continue pendant un test.</li><li><b>Reprotection : Oui</b>, elle lance la réplication de la nouvelle région active vers l'ancienne.</li><li><b>Région à région : Oui</b>, c'est le scénario principal pour les VM Azure.</li></ul>"
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
 "expl": "<ul><li><b>Backup</b> : restaurer des données anciennes.</li><li><b>Site Recovery</b> : reprise après sinistre, avec basculement vers une autre région.</li><li><b>Zones de disponibilité</b> : haute disponibilité, sans basculement manuel, contre la perte d'un centre de données.</li></ul>"
},
{
 "id": "D5-103",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez activer la sauvegarde de VM13 dans le coffre Vault4 avec la stratégie DefaultPolicy, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az backup {0} enable-for-azurevm --resource-group RG1 --vault-name Vault4 --vm VM13 {1} DefaultPolicy",
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
 "expl": "<p><code>az backup protection enable-for-azurevm --vault-name Vault4 --vm VM13 --policy-name DefaultPolicy</code>. On lance ensuite une sauvegarde à la demande avec <code>az backup protection backup-now</code>.</p><p>En PowerShell : <code>Enable-AzRecoveryServicesBackupProtection</code>.</p>"
},
{
 "id": "D5-104",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez créer un groupe d'actions qui envoie un e-mail à astreinte@contoso.com, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az monitor {0} create --resource-group RG1 --name AG-Astreinte --short-name Astreinte {1} email Equipe astreinte@contoso.com",
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
 "expl": "<p><code>az monitor action-group create ... --action email Equipe astreinte@contoso.com</code>. Le <b>nom court</b> (12 caractères maximum) apparaît dans les SMS et e-mails.</p>"
},
{
 "id": "D5-105",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>Vous devez créer une alerte de métrique sur VM14 avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az monitor {0} create --resource-group RG1 --name CPU-VM14 --scopes &lt;id VM14&gt; {1} \"avg Percentage CPU &gt; 90\" --window-size 5m --evaluation-frequency 1m --action AG-Astreinte",
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
 "expl": "<p><code>az monitor metrics alert create --condition \"avg Percentage CPU &gt; 90\" --window-size 5m --evaluation-frequency 1m</code>. <code>activity-log alert</code> crée une alerte de journal d'activité ; les alertes de journaux utilisent <code>az monitor scheduled-query</code>.</p>"
},
{
 "id": "D5-106",
 "dom": 5,
 "type": "order",
 "stem": "<p>Vous devez être alerté par SMS si une règle de sécurité réseau est supprimée dans l'abonnement.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
 "expl": "<p>Le <b>groupe d'actions</b> existe d'abord (il peut aussi être créé dans l'assistant), puis la <b>règle d'alerte de journal d'activité</b> (signal : <code>Microsoft.Network/networkSecurityGroups/securityRules/delete</code>), à laquelle on <b>associe</b> le groupe d'actions.</p><p>La suppression d'une règle est une opération du plan de contrôle, visible dans le journal d'activité sans paramètre de diagnostic. Les NSG n'ont pas de métrique adaptée.</p>"
},
{
 "id": "D5-107",
 "dom": 5,
 "type": "order",
 "stem": "<p>Vous devez restaurer VM15 à partir de la sauvegarde d'hier, sous la forme d'une nouvelle VM nommée VM15-R dans le même réseau.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
 "expl": "<p>On ouvre l'élément sauvegardé, on lance <b>Restaurer la VM</b>, on choisit le <b>point de restauration</b>, puis la configuration : <b>Créer une machine virtuelle</b> avec son nom, son réseau et un emplacement intermédiaire (compte de stockage) si nécessaire.</p><p>La VM d'origine n'a pas besoin d'être arrêtée pour créer une nouvelle VM.</p>"
},
{
 "id": "D5-108",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez associer chaque outil de supervision à son usage.</p><p>Pour répondre, faites glisser l'outil approprié vers chaque usage. Chaque outil peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Outils",
 "srcs": [
  "Metrics Explorer",
  "Log Analytics",
  "Classeurs",
  "Azure Advisor"
 ],
 "tgtHead": [
  "Usage",
  "Outil"
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
 "expl": "<ul><li><b>Metrics Explorer</b> : graphiques de métriques.</li><li><b>Log Analytics</b> : requêtes KQL sur les journaux.</li><li><b>Classeurs</b> : rapports interactifs.</li><li><b>Advisor</b> : recommandations.</li></ul>"
},
{
 "id": "D5-109",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'opérateur KQL adapté à chaque besoin.</p><p>Pour répondre, faites glisser l'opérateur approprié vers chaque besoin. Chaque opérateur peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Opérateurs",
 "srcs": [
  "where",
  "project",
  "extend",
  "summarize",
  "join"
 ],
 "tgtHead": [
  "Besoin",
  "Opérateur"
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
 "expl": "<ul><li><b>where</b> : filtre les lignes.</li><li><b>project</b> : choisit (et renomme) les colonnes.</li><li><b>extend</b> : ajoute des colonnes calculées.</li><li><b>summarize</b> : agrège (count, avg, max…) par groupes.</li></ul><p><b>join</b> combine deux tables.</p>"
},
{
 "id": "D5-110",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous devez superviser l'utilisation CPU et mémoire de groupes de conteneurs et d'applications Container Apps, avec des journaux de console centralisés.</p><p>Où sont envoyés les journaux de console d'Azure Container Apps ?</p>",
 "opts": [
  "Dans le coffre Recovery Services",
  "Dans un plan App Service",
  "Dans l'espace de travail Log Analytics configuré sur l'environnement Container Apps",
  "Dans le registre de conteneurs"
 ],
 "ans": 2,
 "expl": "<p>Un environnement Container Apps est associé à une destination de journaux, en général un espace de travail <b>Log Analytics</b> : les journaux de console (stdout/stderr) et système y arrivent dans des tables dédiées. Les métriques (CPU, mémoire, requêtes) sont disponibles dans Azure Monitor.</p>"
}
);
