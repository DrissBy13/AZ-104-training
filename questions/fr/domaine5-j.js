/* Domaine 5 : supervision et sauvegarde (lot J : D5-431 à D5-440, scénarios longs) */
AZ.questions.push(
{
 "id": "D5-431",
 "dom": 5,
 "type": "hot",
 "stem": "<p>L'équipe d'exploitation surveille 80 VM Windows avec l'agent Azure Monitor et une DCR qui envoie le compteur « % d'espace libre » des disques logiques vers LAW-Ops.</p><p>Exigences :</p><ul><li>une alerte doit se déclencher en moins de 2 minutes quand un disque logique passe sous 10 % d'espace libre, avec une alerte par VM et par lettre de lecteur ;</li><li>le coût de l'alerte doit être le plus bas possible ;</li><li>les données doivent rester disponibles dans LAW-Ops pour les rapports.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Dans la DCR :",
   "o": [
    "Remplacer LAW-Ops par Azure Monitor Metrics dans la DCR",
    "Créer une seconde DCR pour le même compteur, vers LAW-Ops",
    "Une transformation qui convertit le compteur en métrique",
    "Ajouter la destination Azure Monitor Metrics"
   ],
   "a": 3
  },
  {
   "l": "Type d'alerte :",
   "o": [
    "Une alerte de métrique sur la métrique invitée",
    "Une alerte de journal d'activité sur les VM",
    "Une alerte de journaux évaluée chaque minute",
    "Une alerte Resource Health sur les disques"
   ],
   "a": 0
  },
  {
   "l": "Une alerte par VM et par lecteur :",
   "o": [
    "Fractionner par ordinateur et instance",
    "Un groupe d'actions distinct par lettre de lecteur",
    "Une règle par lecteur et par VM, par modèle",
    "Une règle de traitement des alertes par VM"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Destination.</b> Une DCR peut envoyer un compteur de performances à la fois vers Log Analytics et vers Azure Monitor Metrics (la base de métriques). Les données restent dans LAW-Ops pour les rapports.<b>Alerte de métrique.</b> Sur la métrique invitée, elle s'évalue en quasi temps réel et coûte moins cher qu'une alerte de journaux évaluée chaque minute.<b>Dimensions.</b> Les métriques invitées gardent l'ordinateur et l'instance (lettre de lecteur) comme dimensions : le fractionnement donne une série, donc une alerte, par combinaison.",
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
    "*Dans la DCR",
    "Ajouter la destination Azure Monitor Metrics"
   ],
   [
    "Type d'alerte",
    "Une alerte de métrique sur la métrique invitée"
   ],
   [
    "Une alerte par VM et par lecteur",
    "Fractionner par ordinateur et instance"
   ]
  ]
 },
 "keep": "Compteur invité vers Azure Monitor Metrics = alerte de métrique rapide et peu chère, avec dimensions."
},
{
 "id": "D5-432",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VMSS-Web utilise la mise à l'échelle automatique avec deux règles : +2 instances si le CPU moyen dépasse 70 % pendant 5 minutes, et −1 instance si le CPU moyen descend sous 60 % pendant 5 minutes. Minimum 2, maximum 10. Temps de refroidissement : 5 minutes.</p><p>Constats :</p><ul><li>le nombre d'instances oscille sans arrêt entre 4 et 6 en journée ;</li><li>l'équipe veut un e-mail et un appel à son webhook de tickets à chaque opération de mise à l'échelle ;</li><li>l'équipe veut retrouver, pour une opération de la nuit dernière, la règle qui l'a déclenchée et la valeur mesurée.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour l'oscillation :",
   "o": [
    "Passer le minimum à 6 instances en permanence",
    "Écarter les seuils (diminution sous 30 %)",
    "Supprimer la règle de diminution du profil",
    "Réduire le temps de refroidissement à 1 minute"
   ],
   "a": 1
  },
  {
   "l": "Notifications :",
   "o": [
    "Les notifications du paramètre de mise à l'échelle (e-mail, webhook)",
    "Une alerte de journal d'activité sur Microsoft.Insights/AutoscaleSettings",
    "Une alerte de métrique sur le nombre d'instances",
    "Une règle de traitement des alertes"
   ],
   "a": 0
  },
  {
   "l": "Origine d'une opération :",
   "o": [
    "La vue des instances et leur état",
    "Le journal des travaux de VMSS-Web",
    "Les journaux AutoscaleEvaluations et actions",
    "Les recommandations d'Azure Advisor"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Oscillation.</b> Avec 70 % et 60 %, retirer une instance fait remonter le CPU au-dessus du seuil d'ajout. Microsoft recommande un écart suffisant entre les seuils ; le moteur estime d'ailleurs le résultat d'une diminution pour éviter de la faire si elle déclencherait une augmentation, mais un écart trop faible laisse peu de marge. Raccourcir le refroidissement aggraverait le problème.<b>Notifications.</b> Le paramètre de mise à l'échelle a ses propres notifications (e-mail aux administrateurs, adresses, webhooks) à chaque opération.<b>Diagnostic.</b> Les journaux AutoscaleEvaluations et AutoscaleScaleActions, envoyés par un paramètre de diagnostic, détaillent la règle, la valeur de la métrique et l'action.",
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
    "*Pour l'oscillation",
    "Écarter les seuils (diminution sous 30 %)"
   ],
   [
    "Notifications",
    "Les notifications du paramètre de mise à l'échelle (e-mail, webhook)"
   ],
   [
    "Origine d'une opération",
    "Les journaux AutoscaleEvaluations et actions"
   ]
  ]
 },
 "keep": "Mise à l'échelle : seuils bien écartés, notifications intégrées, journaux AutoscaleEvaluations."
},
{
 "id": "D5-433",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Un mardi, l'application Paie est en panne depuis 6 h. L'équipe cherche ce qui a changé.</p><ul><li>Question 1 : quelles propriétés de la configuration Azure de VM-Paie (taille, disques, réseau) ont changé depuis hier, et quand ?</li><li>Question 2 : qui a modifié la règle 200 de NSG-Paie hier soir ?</li><li>Question 3 : quels logiciels et services Windows ont été installés ou modifiés dans VM-Paie cette nuit ?</li></ul><p>Que devez-vous utiliser pour chaque question ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Question 1 :",
   "o": [
    "Le journal des travaux de sauvegarde de VM-Paie",
    "Les recommandations d'Azure Advisor",
    "Change Tracking and Inventory dans la VM",
    "L'historique des modifications (Resource Graph)"
   ],
   "a": 3
  },
  {
   "l": "Question 2 :",
   "o": [
    "L'historique des modifications de Resource Graph",
    "Les journaux de flux du réseau virtuel",
    "Le journal d'activité",
    "Les événements Azure Service Health"
   ],
   "a": 2
  },
  {
   "l": "Question 3 :",
   "o": [
    "Le journal d'activité de VM-Paie",
    "Les diagnostics de démarrage de la VM",
    "Change Tracking and Inventory",
    "L'historique des modifications de Resource Graph"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Configuration Azure.</b> L'historique des modifications (Resource Graph, onglet Modifications de la ressource) compare les propriétés avant et après chaque changement du plan de contrôle.<b>Qui.</b> Le journal d'activité indique l'appelant, l'opération et l'heure pour les opérations de gestion.<b>Dans la VM.</b> Change Tracking and Inventory, avec l'agent Azure Monitor et une DCR dédiée, suit les logiciels, services, fichiers et clés de registre dans le système invité. Ni le journal d'activité ni Resource Graph ne voient l'intérieur de la VM.",
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
    "*Question 1",
    "L'historique des modifications (Resource Graph)"
   ],
   [
    "Question 2",
    "Le journal d'activité"
   ],
   [
    "Question 3",
    "Change Tracking and Inventory"
   ]
  ]
 },
 "keep": "Propriétés Azure = historique des modifications. Qui = journal d'activité. Dans l'invité = Change Tracking."
},
{
 "id": "D5-434",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso automatise la réponse à plusieurs alertes.</p><ul><li>Alerte A : quand le disque D: de VM-Files est presque plein, un script PowerShell doit nettoyer les fichiers temporaires dans la VM.</li><li>Alerte B : un ticket doit être créé dans ServiceNow, avec mise à jour quand l'alerte se résout.</li><li>Alerte C : une API interne protégée par Microsoft Entra ID doit être appelée, sans secret dans l'URL.</li><li>Alerte D : chaque alerte doit être envoyée au SIEM du groupe, qui lit un flux de messages.</li><li>Alerte E : un message doit être publié dans un canal Teams avec une mise en forme personnalisée.</li></ul><p>Quelle action de groupe d'actions devez-vous utiliser pour chaque alerte ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Alerte A :",
   "o": [
    "Un Event Hub",
    "Un webhook sécurisé (Entra ID)",
    "Une application logique",
    "Un connecteur ITSM",
    "Un runbook Azure Automation"
   ],
   "a": 4
  },
  {
   "l": "Alerte B :",
   "o": [
    "Un connecteur ITSM",
    "Une application logique",
    "Un webhook sécurisé (Entra ID)",
    "Un Event Hub",
    "Un runbook Azure Automation"
   ],
   "a": 0
  },
  {
   "l": "Alerte C :",
   "o": [
    "Un webhook sécurisé (Entra ID)",
    "Une application logique",
    "Un runbook Azure Automation",
    "Un connecteur ITSM",
    "Un Event Hub"
   ],
   "a": 0
  },
  {
   "l": "Alerte D :",
   "o": [
    "Une application logique",
    "Un connecteur ITSM",
    "Un webhook sécurisé (Entra ID)",
    "Un Event Hub",
    "Un runbook Azure Automation"
   ],
   "a": 3
  },
  {
   "l": "Alerte E :",
   "o": [
    "Une application logique",
    "Un Event Hub",
    "Un connecteur ITSM",
    "Un runbook Azure Automation",
    "Un webhook sécurisé (Entra ID)"
   ],
   "a": 0
  }
 ],
 "expl": "<b>A.</b> Un runbook Azure Automation exécute du PowerShell, y compris dans une VM (Hybrid Runbook Worker ou commande à distance).<b>B.</b> Le connecteur ITSM crée et met à jour des éléments de travail dans ServiceNow et d'autres outils.<b>C.</b> Le webhook sécurisé s'authentifie auprès de Microsoft Entra ID, sans secret dans l'URL.<b>D.</b> L'action Event Hub publie l'alerte dans un flux que le SIEM consomme.<b>E.</b> Une application logique met en forme et publie le message dans Teams.",
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
    "*Alerte A",
    "Un runbook Azure Automation"
   ],
   [
    "Alerte B",
    "Un connecteur ITSM"
   ],
   [
    "Alerte C",
    "Un webhook sécurisé (Entra ID)"
   ],
   [
    "Alerte D",
    "Un Event Hub"
   ],
   [
    "Alerte E",
    "Une application logique"
   ]
  ]
 },
 "keep": "Script = runbook. Tickets = ITSM. API Entra = webhook sécurisé. Flux SIEM = Event Hub. Mise en forme = application logique."
},
{
 "id": "D5-435",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-Erp (France Central) est répliquée par Site Recovery vers West Europe. France Central subit une panne majeure. Le portail propose pour le basculement les points de récupération suivants.</p><ul><li>Cas 1 : la direction veut redémarrer le plus vite possible, quitte à perdre quelques minutes de plus.</li><li>Cas 2 : la base de données doit démarrer dans un état cohérent avec l'application, sans récupération de la base.</li><li>Cas 3 : l'équipe veut la perte de données la plus faible possible, même si le démarrage prend plus de temps.</li><li>Cas 4 : un fichier corrompu a été répliqué à 9 h 12 ; il faut revenir au point d'avant cette heure.</li></ul><p>Quel point de récupération devez-vous choisir dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Cas 1 :",
   "o": [
    "Dernier traité (RTO le plus faible)",
    "Dernier (RPO le plus faible)",
    "Dernier cohérent avec les applications",
    "Personnalisé"
   ],
   "a": 0
  },
  {
   "l": "Cas 2 :",
   "o": [
    "Dernier traité (RTO le plus faible)",
    "Personnalisé",
    "Dernier cohérent avec les applications",
    "Dernier (RPO le plus faible)"
   ],
   "a": 2
  },
  {
   "l": "Cas 3 :",
   "o": [
    "Personnalisé",
    "Dernier (RPO le plus faible)",
    "Dernier cohérent avec les applications",
    "Dernier traité (RTO le plus faible)"
   ],
   "a": 1
  },
  {
   "l": "Cas 4 :",
   "o": [
    "Dernier cohérent avec les applications",
    "Personnalisé",
    "Dernier (RPO le plus faible)",
    "Dernier traité (RTO le plus faible)"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Dernier traité</b> : le point le plus récent déjà traité par Site Recovery ; bascule immédiate, RTO le plus faible.<b>Dernier cohérent avec les applications</b> : le dernier point pris avec VSS (ou équivalent) ; les applications démarrent proprement.<b>Dernier</b> : Site Recovery traite d'abord toutes les données reçues ; perte minimale (RPO), mais démarrage plus long.<b>Personnalisé</b> : on choisit un point précis, par exemple juste avant la corruption.",
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
    "*Cas 1",
    "Dernier traité (RTO le plus faible)"
   ],
   [
    "Cas 2",
    "Dernier cohérent avec les applications"
   ],
   [
    "Cas 3",
    "Dernier (RPO le plus faible)"
   ],
   [
    "Cas 4",
    "Personnalisé"
   ]
  ]
 },
 "keep": "Dernier = RPO minimal. Dernier traité = RTO minimal. Cohérent avec les applications = démarrage propre. Personnalisé = avant un incident."
},
{
 "id": "D5-436",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Litware surveille ses comptes de stockage de production.</p><ul><li>Les utilisateurs se plaignent de lenteurs ; l'équipe veut savoir si le temps est perdu dans le service de stockage ou sur le réseau et dans le client.</li><li>La sécurité veut savoir qui a supprimé des blobs de stdata hier, avec l'adresse IP et l'identité.</li><li>La direction veut une vue unique de la capacité, de la disponibilité et des transactions de ses 60 comptes, sans rien configurer sur chacun.</li><li>Une alerte doit prévenir quand stdata dépasse 4 To utilisés.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Lenteurs :",
   "o": [
    "La métrique Availability seule, par heure",
    "La métrique Ingress sur la dernière heure",
    "Le nombre de Transactions par nom d'API",
    "Comparer les latences E2E et serveur"
   ],
   "a": 3
  },
  {
   "l": "Suppressions :",
   "o": [
    "Le journal d'activité du compte stdata",
    "StorageBlobLogs (paramètre de diagnostic)",
    "L'inventaire des objets blob quotidien",
    "La métrique Transactions filtrée sur Delete"
   ],
   "a": 1
  },
  {
   "l": "Vue des 60 comptes :",
   "o": [
    "Storage Insights",
    "Les recommandations Azure Advisor",
    "Un classeur créé pour chaque compte",
    "Un tableau de bord épinglé par compte"
   ],
   "a": 0
  },
  {
   "l": "Alerte de capacité :",
   "o": [
    "Une alerte de métrique sur UsedCapacity",
    "Une alerte de journal d'activité",
    "Un budget",
    "Une alerte de journaux sur StorageBlobLogs"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Latence.</b> SuccessServerLatency mesure le temps passé dans le service ; SuccessE2ELatency ajoute le réseau et le client. Un grand écart pointe le réseau ou l'application cliente.<b>Suppressions.</b> Les opérations sur les données (lecture, écriture, suppression de blobs) n'apparaissent pas dans le journal d'activité : il faut les journaux de ressources StorageBlobLogs, avec l'identité et l'IP de l'appelant.<b>Vue globale.</b> Storage Insights s'appuie sur les métriques de plateforme, disponibles sans configuration.<b>Capacité.</b> UsedCapacity est une métrique de plateforme (mise à jour toutes les heures) sur laquelle on pose une alerte de métrique.",
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
    "*Lenteurs",
    "Comparer les latences E2E et serveur"
   ],
   [
    "Suppressions",
    "StorageBlobLogs (paramètre de diagnostic)"
   ],
   [
    "Vue des 60 comptes",
    "Storage Insights"
   ],
   [
    "Alerte de capacité",
    "Une alerte de métrique sur UsedCapacity"
   ]
  ]
 },
 "keep": "Latence serveur vs E2E. Opérations sur les données = StorageBlobLogs. Vue globale = Storage Insights. Capacité = UsedCapacity."
},
{
 "id": "D5-437",
 "dom": 5,
 "type": "hot",
 "stem": "<p>LAW-Corp ingère en moyenne 1,2 To par jour, en paiement à l'utilisation. La direction veut réduire la facture et protéger les données.</p><ul><li>Les données doivent être chiffrées avec une clé gérée par Contoso dans Key Vault.</li><li>LAW-Corp et LAW-Sec (300 Go/jour) doivent mutualiser leur remise de volume.</li><li>Un administrateur propose un plafond quotidien de 1 To pour éviter les dépassements ; la sécurité s'y oppose.</li></ul><p>Que devez-vous choisir ou répondre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Clé gérée par le client :",
   "o": [
    "Un cluster dédié lié aux deux espaces",
    "Une clé dans les propriétés de LAW-Corp",
    "Impossible : Microsoft gère toujours la clé",
    "Un compte de stockage lié, chiffré par CMK"
   ],
   "a": 0
  },
  {
   "l": "Remise commune :",
   "o": [
    "Un niveau d'engagement sur le cluster",
    "Un abonnement commun aux deux espaces",
    "Le paiement à l'utilisation, mutualisé",
    "Deux niveaux d'engagement, un par espace"
   ],
   "a": 0
  },
  {
   "l": "Objection au plafond :",
   "o": [
    "Le plafond ne réduit jamais la facture du mois",
    "Le plafond désactive les règles d'alerte de l'espace",
    "Le plafond supprime les données les plus anciennes",
    "La collecte s'arrête jusqu'à la réinitialisation"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Cluster dédié.</b> La clé gérée par le client et la mutualisation de la remise entre espaces de travail passent par un cluster dédié Log Analytics (niveau d'engagement à partir de 100 Go/jour pour le cluster), auquel on lie les espaces.<b>Remise.</b> Le niveau d'engagement est alors porté par le cluster, pour le volume cumulé des espaces liés.<b>Plafond.</b> Quand le plafond quotidien est atteint, l'ingestion des types de données facturables s'arrête jusqu'à l'heure de réinitialisation : des événements de sécurité seraient perdus. On l'utilise contre les emballements, pas comme outil de réduction des coûts.",
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
    "*Clé gérée par le client",
    "Un cluster dédié lié aux deux espaces"
   ],
   [
    "Remise commune",
    "Un niveau d'engagement sur le cluster"
   ],
   [
    "Objection au plafond",
    "La collecte s'arrête jusqu'à la réinitialisation"
   ]
  ]
 },
 "keep": "CMK et remise mutualisée = cluster dédié. Plafond quotidien = arrêt de la collecte, pas une économie."
},
{
 "id": "D5-438",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous créez une règle d'alerte de recherche dans les journaux, AR-Disk, dans l'abonnement Sub-Ops. Sa requête lit les données de LAW-Prod (abonnement Sub-Prod) et de LAW-Lab (abonnement Sub-Lab).</p><p>Exigences :</p><ul><li>la règle doit s'exécuter avec une identité, sans dépendre du compte de l'administrateur qui l'a créée ;</li><li>l'identité doit avoir le minimum de droits ;</li><li>une alerte doit être produite pour chaque VM concernée, mais la règle ne doit jamais produire plus d'alertes que nécessaire pour 600 VM.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Identité de la règle :",
   "o": [
    "Aucune",
    "Le compte de l'administrateur",
    "Une identité managée de la règle",
    "Un principal de service avec secret"
   ],
   "a": 2
  },
  {
   "l": "Droits de l'identité :",
   "o": [
    "Propriétaire sur LAW-Prod et sur LAW-Lab",
    "Lecteur Log Analytics sur les deux espaces",
    "Lecteur de surveillance sur l'abonnement Sub-Ops",
    "Contributeur sur Sub-Prod et sur Sub-Lab"
   ],
   "a": 1
  },
  {
   "l": "Une alerte par VM :",
   "o": [
    "Un groupe d'actions distinct pour chaque VM",
    "Une règle par VM, créée par un modèle",
    "Une règle de traitement des alertes par VM",
    "Fractionnement par _ResourceId"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Identité.</b> Les règles d'alerte de journaux peuvent utiliser une identité managée (attribuée par le système ou par l'utilisateur) pour exécuter la requête, au lieu des droits de leur créateur.<b>Droits.</b> L'identité doit pouvoir lire les données interrogées : Lecteur Log Analytics sur les deux espaces suffit.<b>Fractionnement.</b> Le fractionnement par dimension produit une alerte par ressource, dans la limite de combinaisons prise en charge par la règle ; c'est plus simple et plus sûr que 600 règles.",
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
    "*Identité de la règle",
    "Une identité managée de la règle"
   ],
   [
    "Droits de l'identité",
    "Lecteur Log Analytics sur les deux espaces"
   ],
   [
    "Une alerte par VM",
    "Fractionnement par _ResourceId"
   ]
  ]
 },
 "keep": "Alerte de journaux : identité managée + Lecteur Log Analytics ; fractionnement par ressource."
},
{
 "id": "D5-439",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso veut garantir que toutes les VM de production sont sauvegardées, sans dépendre de la discipline des équipes.</p><ul><li>Toute VM portant l'étiquette Backup=Gold, existante ou future, doit être protégée automatiquement dans le coffre RSV-Gold, de la même région, avec la stratégie Pol-Gold.</li><li>Un rapport doit montrer les VM de Sub-Prod qui ne sont pas sauvegardées, sans rien modifier.</li><li>Les VM existantes avec l'étiquette doivent être protégées dès maintenant.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Protection automatique :",
   "o": [
    "Un runbook planifié chaque nuit sur Sub-Prod",
    "Une règle de traitement des alertes de sauvegarde",
    "La stratégie intégrée DeployIfNotExists par étiquette",
    "Une alerte de journal d'activité à la création de VM"
   ],
   "a": 2
  },
  {
   "l": "Rapport des VM non sauvegardées :",
   "o": [
    "La stratégie intégrée d'audit de la sauvegarde",
    "Le journal d'activité de l'abonnement Sub-Prod",
    "Les rapports de sauvegarde de RSV-Gold",
    "Les recommandations d'Azure Advisor sur les VM"
   ],
   "a": 0
  },
  {
   "l": "VM existantes :",
   "o": [
    "Rien : la stratégie s'applique seule à l'existant",
    "Redémarrer les VM pour déclencher l'évaluation",
    "Une tâche de correction",
    "Retirer puis remettre l'étiquette sur chaque VM"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Protection automatique.</b> Azure Policy propose une définition intégrée qui configure la sauvegarde des VM portant une étiquette donnée vers un coffre existant de la même région (effet DeployIfNotExists).<b>Rapport.</b> La définition « Azure Backup doit être activé pour les machines virtuelles » (Audit) liste les VM non protégées dans la conformité, sans rien modifier.<b>Existant.</b> DeployIfNotExists ne corrige d'elle-même que les ressources créées ou mises à jour ; pour l'existant, il faut une tâche de correction, qui agit avec l'identité managée de l'affectation (rôles de sauvegarde et de VM).",
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
    "*Protection automatique",
    "La stratégie intégrée DeployIfNotExists par étiquette"
   ],
   [
    "Rapport des VM non sauvegardées",
    "La stratégie intégrée d'audit de la sauvegarde"
   ],
   [
    "VM existantes",
    "Une tâche de correction"
   ]
  ]
 },
 "keep": "Sauvegarde par étiquette = stratégie DeployIfNotExists + tâche de correction. Rapport = stratégie Audit."
},
{
 "id": "D5-440",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-App (10.1.2.15, Subnet-App de VNet-Prod, France Central) est répliquée par Site Recovery vers West Europe, dans VNet-DR. VNet-DR utilise le même espace d'adressage (10.1.0.0/16) que VNet-Prod et contient Subnet-App avec la même plage.</p><p>Exigences après un basculement :</p><ul><li>VM-App doit garder l'adresse 10.1.2.15 ;</li><li>VM-App doit être joignable sur Internet par une adresse IP publique, comme en production ;</li><li>l'enregistrement DNS app.contoso.com doit pointer vers la nouvelle IP publique, automatiquement ;</li><li>pendant les tests de basculement, les VM de test ne doivent jamais entrer en conflit avec la production.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Adresse 10.1.2.15 :",
   "o": [
    "Rien : même plage, même IP",
    "Une réservation DHCP dans VNet-DR pour VM-App",
    "Un peering entre VNet-Prod et VNet-DR",
    "Une IP statique configurée dans Windows"
   ],
   "a": 0
  },
  {
   "l": "IP publique :",
   "o": [
    "L'IP publique de production, déplacée en West Europe",
    "Une IP publique dans l'élément répliqué",
    "Une règle NAT sur la passerelle VPN de VNet-DR",
    "Une IP publique ajoutée à la main après le basculement"
   ],
   "a": 1
  },
  {
   "l": "DNS :",
   "o": [
    "Un TTL d'une seconde sur l'enregistrement actuel",
    "Un enregistrement alias vers l'IP de production",
    "Une zone DNS privée contoso.com liée à VNet-DR",
    "Un runbook dans le plan de récupération"
   ],
   "a": 3
  },
  {
   "l": "Tests :",
   "o": [
    "Un réseau de test isolé",
    "VNet-DR lui-même, déjà prêt pour la reprise",
    "VNet-Prod, pour tester avec les vraies données",
    "Un réseau appairé à VNet-Prod pour le DNS"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Adresse.</b> Quand le sous-réseau cible a la même plage que le sous-réseau source, Site Recovery attribue la même adresse IP privée à la VM basculée (si elle est libre). Une IP fixée dans Windows casserait la connectivité.<b>IP publique.</b> Les paramètres réseau de l'élément répliqué permettent d'associer une IP publique (Standard) à la VM de basculement. Une IP publique ne change pas de région.<b>DNS.</b> Un runbook Azure Automation inséré dans le plan de récupération met à jour l'enregistrement après le démarrage de VM-App.<b>Tests.</b> Un réseau de test isolé, avec le même adressage mais sans connexion, évite tout conflit d'adresse ou de nom avec la production.",
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
    "*Adresse 10.1.2.15",
    "Rien : même plage, même IP"
   ],
   [
    "IP publique",
    "Une IP publique dans l'élément répliqué"
   ],
   [
    "DNS",
    "Un runbook dans le plan de récupération"
   ],
   [
    "Tests",
    "Un réseau de test isolé"
   ]
  ]
 },
 "keep": "Même plage = même IP. IP publique dans les paramètres réseau de l'élément répliqué. DNS par runbook. Tests isolés."
}
);
