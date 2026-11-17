/* Domaine 3 : calcul (lot H : D3-401 à D3-410, scénarios longs) */
AZ.questions.push(
{
 "id": "D3-401",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Fabrikam déploie l'application de facturation sur trois couches de VM en France Central (trois zones de disponibilité). La direction impose, pour chaque couche, le contrat de niveau de service (SLA) de connectivité indiqué :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Couche</th><th>Nombre de VM</th><th>SLA exigé</th><th>Contraintes</th></tr><tr><td>Web</td><td>4</td><td>99,99 %</td><td>Doit résister à la perte d'un centre de données entier</td></tr><tr><td>Batch</td><td>1</td><td>99,9 %</td><td>Une seule VM, coût minimal</td></tr><tr><td>Base de données</td><td>2 (cluster SQL)</td><td>99,95 %</td><td>Latence minimale entre les deux nœuds ; une zone peut tomber sans exigence</td></tr></table></div><p>Toutes les VM utilisent des disques SSD Premium.</p><p>Que devez-vous choisir pour chaque couche ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Couche Web :",
   "o": [
    "Au moins deux zones",
    "Un groupe à haute disponibilité de 4 VM",
    "Un groupe de placement de proximité",
    "Une seule zone, deux domaines d'erreur"
   ],
   "a": 0
  },
  {
   "l": "Couche Batch :",
   "o": [
    "Une VM dans chaque zone de la région",
    "Une VM Spot avec des disques Standard",
    "Deux VM dans un groupe à haute disponibilité",
    "Une VM seule en SSD Premium"
   ],
   "a": 3
  },
  {
   "l": "Couche base de données :",
   "o": [
    "Deux zones différentes",
    "Deux régions jumelées",
    "Une VM avec un disque partagé",
    "Un groupe à haute disponibilité"
   ],
   "a": 3
  }
 ],
 "expl": "<b>99,99 %.</b> C'est le SLA de deux VM ou plus réparties sur au moins deux zones de disponibilité ; seules les zones protègent contre la perte d'un centre de données.<b>99,9 %.</b> Une VM seule dont tous les disques sont SSD Premium (ou Ultra) a ce SLA ; aucune redondance n'est nécessaire.<b>99,95 %.</b> C'est le SLA d'un groupe à haute disponibilité (deux VM ou plus). Les deux nœuds restent dans le même centre de données, avec une latence plus faible qu'entre zones.",
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
    "*Couche Web",
    "Au moins deux zones"
   ],
   [
    "Couche Batch",
    "Une VM seule en SSD Premium"
   ],
   [
    "Couche base de données",
    "Un groupe à haute disponibilité"
   ]
  ]
 },
 "keep": "SLA : VM seule SSD Premium 99,9 % ; groupe à haute disponibilité 99,95 % ; zones 99,99 %."
},
{
 "id": "D3-402",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous préparez les disques de trois nouvelles charges dans France Central.</p><ul><li>Charge A : une base SAP HANA qui demande 80 000 IOPS et 1 200 Mo/s sur un disque de 2 Tio ; l'équipe doit pouvoir ajuster les IOPS et le débit sans changer la taille.</li><li>Charge B : un serveur de fichiers dont le disque de 512 Gio (P20) a besoin, pendant la clôture mensuelle, des performances d'un P40, sans changer la taille ni la redondance.</li><li>Charge C : un disque de données de 1 Tio sur lequel l'équipe veut activer la mise en cache de l'hôte en lecture.</li></ul><p>Que devez-vous choisir ou configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Charge A :",
   "o": [
    "SSD Premium P40 avec mise en cache",
    "HDD Standard en RAID",
    "SSD Standard avec bursting",
    "Disque Ultra"
   ],
   "a": 3
  },
  {
   "l": "Charge B :",
   "o": [
    "Activer le bursting à la demande du P20",
    "Le niveau de performance P40",
    "Agrandir le disque à 2 Tio pendant la clôture",
    "Passer en disque Ultra pendant la clôture"
   ],
   "a": 1
  },
  {
   "l": "Charge C, type de disque compatible :",
   "o": [
    "SSD Premium v2",
    "Disque Ultra",
    "SSD Premium",
    "Aucun type de disque managé"
   ],
   "a": 2
  }
 ],
 "expl": "<b>A.</b> Les disques Ultra (et SSD Premium v2) permettent de régler indépendamment la taille, les IOPS et le débit. 80 000 IOPS et 1 200 Mo/s dépassent ce que donne un P40 (7 500 IOPS).<b>B.</b> Le niveau de performance d'un SSD Premium peut être relevé (P20 → P40) sans changer la taille, puis rabaissé après la clôture. Le bursting à la demande n'existe que pour les disques de plus de 512 Gio et reste limité dans le temps.<b>C.</b> La mise en cache de l'hôte n'est pas prise en charge sur les disques Ultra ni sur les SSD Premium v2 ; elle l'est sur les SSD Premium (et Standard).",
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
    "*Charge A",
    "Disque Ultra"
   ],
   [
    "Charge B",
    "Le niveau de performance P40"
   ],
   [
    "Charge C, type de disque compatible",
    "SSD Premium"
   ]
  ]
 },
 "keep": "Ultra / Premium v2 : IOPS réglables, pas de cache. Niveau de performance : plus de performances sans agrandir."
},
{
 "id": "D3-403",
 "dom": 3,
 "type": "hot",
 "stem": "<p>VM-Files (Windows, Standard_D8s_v5) a un disque de données de 512 Gio, presque plein. Les utilisateurs travaillent en continu.</p><ul><li>Le disque doit passer à 1 Tio en évitant toute interruption.</li><li>L'équipe veut ensuite réduire le disque système de 256 Gio à 128 Gio pour économiser.</li><li>Un auditeur doit recevoir une copie du disque de données en VHD, téléchargeable pendant 24 heures.</li><li>L'équipe veut des sauvegardes rapides et peu coûteuses du disque de données avant chaque mise à jour, en ne payant que les blocs modifiés.</li></ul><p>Que devez-vous faire ou répondre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Passer à 1 Tio :",
   "o": [
    "Agrandir à chaud, puis étendre le volume",
    "Impossible au-delà de 512 Gio sur ce type",
    "Libérer la VM, agrandir, puis redémarrer",
    "Créer un disque de 1 Tio et copier les données"
   ],
   "a": 0
  },
  {
   "l": "Réduire le disque système :",
   "o": [
    "Possible en changeant de niveau",
    "Réduire la taille dans le portail, VM libérée",
    "Possible après un instantané",
    "Impossible : un disque managé ne se réduit pas"
   ],
   "a": 3
  },
  {
   "l": "Copie pour l'auditeur :",
   "o": [
    "Une sauvegarde Azure Backup partagée",
    "Un accès Lecteur au disque pour l'auditeur",
    "Un partage Azure Files contenant le VHD copié",
    "Une URL SAS d'exportation"
   ],
   "a": 3
  },
  {
   "l": "Sauvegardes avant mise à jour :",
   "o": [
    "Des instantanés incrémentiels",
    "Des instantanés complets du disque",
    "Une image généralisée de la VM",
    "Une copie complète du disque managé"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Agrandissement.</b> Un disque de données peut être agrandi sans libérer la VM (l'agrandissement à chaud ne concerne pas le disque système) ; il faut ensuite étendre la partition dans le système invité.<b>Réduction.</b> La taille d'un disque managé ne peut pas être réduite. Il faudrait créer un disque plus petit et migrer les données.<b>Export.</b> On génère une URL SAS d'exportation, valable pour la durée choisie, sur le disque (VM libérée) ou plutôt sur un instantané, sans arrêter la VM.<b>Instantanés incrémentiels.</b> Ils ne facturent que les blocs modifiés depuis le précédent, sur du stockage Standard.",
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
    "*Passer à 1 Tio",
    "Agrandir à chaud, puis étendre le volume"
   ],
   [
    "Réduire le disque système",
    "Impossible : un disque managé ne se réduit pas"
   ],
   [
    "Copie pour l'auditeur",
    "Une URL SAS d'exportation"
   ],
   [
    "Sauvegardes avant mise à jour",
    "Des instantanés incrémentiels"
   ]
  ]
 },
 "keep": "Disques managés : agrandissables à chaud, jamais réduits. Export par SAS. Instantanés incrémentiels."
},
{
 "id": "D3-404",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous devez configurer 40 VM Windows et 30 VM Linux juste après leur déploiement par un modèle ARM.</p><ul><li>Les VM Linux doivent installer nginx et créer un utilisateur au tout premier démarrage, à partir d'un fichier YAML passé lors de la création.</li><li>Les VM Windows doivent télécharger un script PowerShell depuis un compte de stockage et l'exécuter ; le script contient un mot de passe qui ne doit pas apparaître dans le portail ni dans les journaux du déploiement.</li><li>Un administrateur doit exécuter ponctuellement « ipconfig /all » sur VM-12, sans RDP ni connexion réseau à la VM.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM Linux :",
   "o": [
    "cloud-init (données personnalisées)",
    "La commande d'exécution (Run Command)",
    "Azure Automation State Configuration",
    "L'extension Custom Script pour Linux"
   ],
   "a": 0
  },
  {
   "l": "Mot de passe du script Windows :",
   "o": [
    "Dans les paramètres protégés",
    "Dans les paramètres publics de l'extension",
    "Dans une étiquette de la VM, chiffrée",
    "Dans le nom du fichier téléchargé"
   ],
   "a": 0
  },
  {
   "l": "ipconfig sur VM-12 :",
   "o": [
    "Azure Bastion avec RDP",
    "La commande d'exécution (Run Command)",
    "La console série",
    "L'extension Custom Script avec un nouveau script"
   ],
   "a": 1
  }
 ],
 "expl": "<b>cloud-init.</b> Sur Linux, les données personnalisées au format cloud-config sont traitées par cloud-init au premier démarrage (paquets, utilisateurs, fichiers).<b>protectedSettings.</b> Les paramètres protégés d'une extension sont chiffrés et ne sont déchiffrés que dans la VM ; ils n'apparaissent ni dans le portail ni dans l'historique du déploiement, contrairement aux paramètres publics.<b>Run Command.</b> Elle exécute un script ou une commande dans la VM par l'agent, sans connexion réseau à la VM ; idéale pour un diagnostic ponctuel. La console série demande une session interactive.",
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
    "*VM Linux",
    "cloud-init (données personnalisées)"
   ],
   [
    "Mot de passe du script Windows",
    "Dans les paramètres protégés"
   ],
   [
    "ipconfig sur VM-12",
    "La commande d'exécution (Run Command)"
   ]
  ]
 },
 "keep": "Premier démarrage Linux = cloud-init. Secret d'extension = protectedSettings. Commande ponctuelle = Run Command."
},
{
 "id": "D3-405",
 "dom": 3,
 "type": "hot",
 "stem": "<p>VMSS-API est un groupe identique en orchestration Uniforme, 6 instances, derrière un équilibreur Standard avec une sonde HTTP. La stratégie de mise à niveau est Manuelle.</p><p>Exigences :</p><ul><li>les instances doivent recevoir automatiquement les nouvelles versions de l'image Ubuntu publiées par Canonical, par lots, sans intervention ;</li><li>une instance dont l'application ne répond plus doit être supprimée et recréée automatiquement ;</li><li>pour réduire les coûts, 70 % des instances au-delà des 2 premières doivent être des VM Spot.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Nouvelles images :",
   "o": [
    "Une nouvelle version dans une galerie Compute",
    "Un runbook mensuel de réimage des instances",
    "Une stratégie de mise à niveau Manuelle",
    "La mise à niveau automatique de l'image"
   ],
   "a": 3
  },
  {
   "l": "Instance défaillante :",
   "o": [
    "Le surprovisionnement des instances",
    "Les réparations automatiques",
    "La protection contre la diminution",
    "Une règle de mise à l'échelle sur la sonde"
   ],
   "a": 1
  },
  {
   "l": "VM Spot :",
   "o": [
    "Une seconde règle de mise à l'échelle Spot",
    "Le mélange de priorité Spot (Flexible)",
    "Le mode Uniforme, priorité Spot partielle",
    "Des instances réservées pour la base"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Images.</b> La mise à niveau automatique de l'image du système applique les nouvelles versions de l'image de plateforme par lots, en s'appuyant sur le signal d'intégrité (sonde ou extension).<b>Réparations.</b> Les réparations automatiques suppriment et recréent une instance jugée non saine pendant la période de grâce définie.<b>Spot.</b> Le mélange de priorité Spot, qui fixe une base d'instances standard puis un pourcentage de Spot, n'existe qu'en orchestration Flexible : VMSS-API devra être recréé dans ce mode.",
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
    "*Nouvelles images",
    "La mise à niveau automatique de l'image"
   ],
   [
    "Instance défaillante",
    "Les réparations automatiques"
   ],
   [
    "VM Spot",
    "Le mélange de priorité Spot (Flexible)"
   ]
  ]
 },
 "keep": "Groupes identiques : mise à niveau automatique de l'image, réparations automatiques, mélange Spot en Flexible."
},
{
 "id": "D3-406",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Votre modèle ARM déploie un compte de stockage, un réseau virtuel et cinq VM. Plusieurs problèmes apparaissent.</p><ul><li>Les cinq VM doivent s'appeler web-0 à web-4 sans répéter la ressource.</li><li>Le déploiement échoue parfois parce qu'une VM est créée avant sa carte réseau.</li><li>Le mot de passe administrateur doit être lu dans le coffre de clés KV-Deploy, sans apparaître dans le fichier de paramètres.</li><li>Le compte de stockage de diagnostic ne doit être créé que si le paramètre enableDiag vaut true.</li></ul><p>Quel élément du modèle devez-vous utiliser pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Cinq VM :",
   "o": [
    "dependsOn avec cinq noms",
    "Cinq déploiements du même modèle",
    "copy et copyIndex()",
    "Une boucle dans le fichier de paramètres"
   ],
   "a": 2
  },
  {
   "l": "Ordre de création :",
   "o": [
    "Une sortie (outputs) de la carte",
    "Le mode de déploiement Complet",
    "dependsOn",
    "condition sur la carte réseau"
   ],
   "a": 2
  },
  {
   "l": "Mot de passe :",
   "o": [
    "Une variable chiffrée du modèle",
    "Une sortie du modèle, marquée secure",
    "Une valeur par défaut dans le modèle",
    "Une référence Key Vault"
   ],
   "a": 3
  },
  {
   "l": "Compte de diagnostic :",
   "o": [
    "dependsOn sur enableDiag",
    "copy avec un compteur à zéro",
    "condition",
    "Un modèle lié, appelé à part"
   ],
   "a": 2
  }
 ],
 "expl": "<b>copy.</b> L'élément copy crée plusieurs instances d'une ressource ; copyIndex() donne l'indice pour le nom.<b>dependsOn.</b> Il impose l'ordre de déploiement entre ressources du même modèle (la VM attend sa carte réseau).<b>Référence Key Vault.</b> Dans le fichier de paramètres, un paramètre securestring peut référencer un secret de coffre (ID du coffre et nom du secret) ; le coffre doit autoriser Azure Resource Manager pour le déploiement de modèles.<b>condition.</b> Une ressource avec condition n'est déployée que si l'expression est vraie.",
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
    "*Cinq VM",
    "copy et copyIndex()"
   ],
   [
    "Ordre de création",
    "dependsOn"
   ],
   [
    "Mot de passe",
    "Une référence Key Vault"
   ],
   [
    "Compte de diagnostic",
    "condition"
   ]
  ]
 },
 "keep": "ARM : copy pour plusieurs instances, dependsOn pour l'ordre, référence Key Vault pour les secrets, condition pour l'optionnel."
},
{
 "id": "D3-407",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'équipe plateforme gère les déploiements de RG-Shared avec Bicep.</p><ul><li>Elle veut voir, avant de déployer une nouvelle version du fichier, quelles ressources seront créées, modifiées ou supprimées.</li><li>RG-Shared contient aussi VM-Legacy, absente du fichier. Un ingénieur propose le mode Complet pour « nettoyer » ; la direction veut conserver VM-Legacy.</li><li>Le modèle réseau validé doit être partagé avec 12 équipes, versionné, et seules certaines équipes doivent pouvoir le déployer.</li><li>Les ressources déployées par le modèle doivent être gérées comme un ensemble ; personne ne doit pouvoir les supprimer hors du modèle.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Avant le déploiement :",
   "o": [
    "Le mode Complet en test",
    "L'opération what-if",
    "L'exportation du modèle",
    "La validation du modèle seule"
   ],
   "a": 1
  },
  {
   "l": "Mode de déploiement :",
   "o": [
    "Validation seule",
    "Complet",
    "Incrémentiel",
    "Complet, avec un verrou sur VM-Legacy"
   ],
   "a": 2
  },
  {
   "l": "Partage du modèle :",
   "o": [
    "Une spécification de modèle",
    "Un dépôt public sur GitHub",
    "Un compte de stockage avec une SAS par équipe",
    "Un modèle exporté envoyé à chaque équipe"
   ],
   "a": 0
  },
  {
   "l": "Gestion en ensemble :",
   "o": [
    "Un verrou Suppression impossible sur le groupe",
    "Un groupe d'administration dédié aux ressources",
    "Une stratégie Deny sur RG-Shared",
    "Une pile de déploiement (refus)"
   ],
   "a": 3
  }
 ],
 "expl": "<b>what-if.</b> Il compare le modèle à l'état actuel et liste les créations, modifications et suppressions, sans rien déployer.<b>Incrémentiel.</b> Le mode par défaut ne touche pas aux ressources absentes du modèle ; le mode Complet supprimerait VM-Legacy (un verrou ferait échouer le déploiement, ce n'est pas une solution).<b>Spécification de modèle.</b> Ressource Azure versionnée, partagée par le RBAC : Lecteur suffit pour la déployer.<b>Pile de déploiement.</b> Elle gère les ressources comme un ensemble et peut refuser leur modification ou leur suppression hors de la pile (denySettings).",
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
    "*Avant le déploiement",
    "L'opération what-if"
   ],
   [
    "Mode de déploiement",
    "Incrémentiel"
   ],
   [
    "Partage du modèle",
    "Une spécification de modèle"
   ],
   [
    "Gestion en ensemble",
    "Une pile de déploiement (refus)"
   ]
  ]
 },
 "keep": "what-if pour prévoir, Incrémentiel par défaut, spécification de modèle pour partager, pile de déploiement pour protéger."
},
{
 "id": "D3-408",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous écrivez main.bicep pour l'équipe Données.</p><ul><li>Le réseau VNet-Core existe déjà dans RG-Network (même abonnement) ; vous devez y ajouter le sous-réseau snet-data sans redéployer VNet-Core.</li><li>Le fichier doit créer le groupe de ressources RG-Data, puis y déployer un compte de stockage et un module de réseau.</li><li>Le paramètre env ne doit accepter que dev, test ou prod.</li><li>Le module storage.bicep, maintenu par l'équipe plateforme, doit être réutilisé tel quel dans 20 projets.</li></ul><p>Que devez-vous écrire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour VNet-Core :",
   "o": [
    "Une référence existing avec scope",
    "Redéclarer VNet-Core avec le nouveau sous-réseau",
    "Une sortie (output) qui renvoie VNet-Core",
    "Un module qui redéploie VNet-Core en entier"
   ],
   "a": 0
  },
  {
   "l": "Portée du fichier :",
   "o": [
    "targetScope = 'managementGroup'",
    "targetScope = 'tenant'",
    "targetScope = 'subscription'",
    "targetScope = 'resourceGroup'"
   ],
   "a": 2
  },
  {
   "l": "Paramètre env :",
   "o": [
    "@minLength(3)",
    "@description('dev, test, prod')",
    "@secure()",
    "@allowed(['dev','test','prod'])"
   ],
   "a": 3
  },
  {
   "l": "Réutilisation de storage.bicep :",
   "o": [
    "Une spécification de modèle par projet",
    "Un module d'un registre Bicep",
    "Copier le contenu dans chaque projet",
    "Un modèle ARM exporté, puis décompilé"
   ],
   "a": 1
  }
 ],
 "expl": "<b>existing.</b> Le mot-clé existing référence une ressource déjà déployée, éventuellement dans un autre groupe (scope), sans la redéployer ; on y ajoute un sous-réseau avec parent: vnet. Redéclarer VNet-Core risquerait d'écraser ses autres sous-réseaux.<b>Portée.</b> Créer un groupe de ressources exige la portée de l'abonnement ; les modules sont ensuite déployés avec scope: resourceGroup('RG-Data').<b>@allowed.</b> Limite les valeurs acceptées.<b>Registre.</b> Un registre Bicep privé (dans Azure Container Registry) publie des modules versionnés que les projets référencent.",
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
    "*Pour VNet-Core",
    "Une référence existing avec scope"
   ],
   [
    "Portée du fichier",
    "targetScope = 'subscription'"
   ],
   [
    "Paramètre env",
    "@allowed(['dev','test','prod'])"
   ],
   [
    "Réutilisation de storage.bicep",
    "Un module d'un registre Bicep"
   ]
  ]
 },
 "keep": "Bicep : existing pour une ressource déjà là, targetScope subscription pour créer un groupe, @allowed, modules en registre."
},
{
 "id": "D3-409",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Wingtip héberge 12 applications web dans App Service. Les besoins suivants arrivent :</p><ul><li>App A : 5 emplacements de déploiement, mise à l'échelle automatique jusqu'à 10 instances, coût le plus bas possible.</li><li>App B : 20 emplacements de déploiement et jusqu'à 30 instances, avec intégration au réseau virtuel.</li><li>App C : un site vitrine sans domaine personnalisé ni SLA, pour des tests ; il peut s'arrêter s'il est inactif.</li><li>App D : doit être totalement isolée dans un réseau virtuel dédié, avec un accès entrant uniquement privé, pour une conformité stricte, et monter jusqu'à 100 instances.</li></ul><p>Quel niveau de plan App Service devez-vous choisir pour chaque application ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "App A :",
   "o": [
    "Standard (S1)",
    "De base (B1)",
    "Gratuit (F1)",
    "Premium v3 (P1v3)"
   ],
   "a": 0
  },
  {
   "l": "App B :",
   "o": [
    "Premium v3 (P1v3)",
    "De base (B1)",
    "Isolé v2 (I1v2)",
    "Standard (S1)"
   ],
   "a": 0
  },
  {
   "l": "App C :",
   "o": [
    "Gratuit (F1)",
    "Standard (S1)",
    "Premium v3 (P1v3)",
    "De base (B1)"
   ],
   "a": 0
  },
  {
   "l": "App D :",
   "o": [
    "Premium v3 (P1v3), avec point privé",
    "Standard (S1), avec restrictions",
    "De base (B1), avec intégration réseau",
    "Isolé v2 (App Service Environment v3)"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Standard</b> : 5 emplacements, mise à l'échelle automatique jusqu'à 10 instances ; c'est le moins cher qui offre les deux.<b>Premium v3</b> : 20 emplacements, jusqu'à 30 instances (plus sur demande).<b>Gratuit</b> : pas de domaine personnalisé ni de SLA, quotas de calcul ; suffisant pour un test.<b>Isolé v2</b> : le plan d'un App Service Environment v3, déployé dans votre réseau virtuel, isolé et dédié, jusqu'à 100 instances.",
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
    "*App A",
    "Standard (S1)"
   ],
   [
    "App B",
    "Premium v3 (P1v3)"
   ],
   [
    "App C",
    "Gratuit (F1)"
   ],
   [
    "App D",
    "Isolé v2 (App Service Environment v3)"
   ]
  ]
 },
 "keep": "App Service : Standard 5 emplacements / 10 instances ; Premium 20 / 30 ; Isolé (ASE v3) 100 instances, réseau dédié."
},
{
 "id": "D3-410",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'application web shop (plan Premium v3, Windows) a deux emplacements : production et staging.</p><ul><li>Les paramètres d'application ApiUrl et Feature_X doivent rester attachés à leur emplacement lors des permutations ; les autres paramètres doivent suivre le code.</li><li>Avant chaque permutation, staging doit être préchauffé avec la configuration de production, puis l'équipe valide manuellement avant de terminer la permutation.</li><li>Le trafic doit être réparti 90 % production / 10 % staging pour une bêta.</li><li>Après la permutation, l'ancienne version doit pouvoir revenir en quelques secondes.</li></ul><p>Que devez-vous configurer ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "ApiUrl et Feature_X :",
   "o": [
    "Les dupliquer dans un coffre de clés",
    "Les placer dans des chaînes de connexion",
    "Paramètre d'emplacement",
    "Les définir dans web.config de chaque emplacement"
   ],
   "a": 2
  },
  {
   "l": "Préchauffage et validation :",
   "o": [
    "Un redémarrage de staging avant permutation",
    "Permutation automatique vers production",
    "Une permutation directe, puis un test",
    "Permutation avec aperçu"
   ],
   "a": 3
  },
  {
   "l": "90 / 10 :",
   "o": [
    "Azure Front Door avec deux origines pondérées",
    "Deux plans App Service derrière un équilibreur",
    "Une règle de réécriture sur l'en-tête Host",
    "Trafic % sur staging"
   ],
   "a": 3
  },
  {
   "l": "Retour arrière :",
   "o": [
    "Permuter à nouveau les emplacements",
    "Restaurer une sauvegarde",
    "Redéployer l'ancienne version depuis Git",
    "Redémarrer production"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Paramètre d'emplacement.</b> Coché, il reste sur l'emplacement ; sinon il suit le contenu lors de la permutation.<b>Permutation avec aperçu.</b> La première phase applique à staging les paramètres de production et le préchauffe ; on valide, puis on termine (ou on annule) la permutation. La permutation automatique n'attend aucune validation.<b>Trafic %.</b> Dans Emplacements de déploiement, on donne un pourcentage du trafic de production à un emplacement.<b>Retour.</b> L'ancienne version est dans staging après la permutation : une nouvelle permutation la remet en production immédiatement.",
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
    "*ApiUrl et Feature_X",
    "Paramètre d'emplacement"
   ],
   [
    "Préchauffage et validation",
    "Permutation avec aperçu"
   ],
   [
    "90 / 10",
    "Trafic % sur staging"
   ],
   [
    "Retour arrière",
    "Permuter à nouveau les emplacements"
   ]
  ]
 },
 "keep": "Emplacements : paramètre d'emplacement, permutation avec aperçu, trafic %, retour par nouvelle permutation."
}
);
