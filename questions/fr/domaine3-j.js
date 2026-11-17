/* Domaine 3 : calcul (lot J : D3-421 à D3-430, scénarios longs) */
AZ.questions.push(
{
 "id": "D3-421",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Plusieurs opérations sur les VM de RG-App posent problème.</p><ul><li>VM-A (Standard_D4s_v5, démarrée) doit passer en Standard_M64s ; la taille n'apparaît pas dans la liste du portail tant que la VM tourne.</li><li>VM-B a des pertes de paquets et des problèmes de performance que Microsoft attribue à l'hôte physique ; elle doit être déplacée vers un autre hôte.</li><li>VM-C a une extension bloquée après une modification de réseau ; l'équipe veut relancer le provisionnement de la VM sans la déplacer.</li><li>VM-D est une VM Spot qui exécute des rendus ; ses disques doivent être conservés quand Azure récupère la capacité.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM-A :",
   "o": [
    "Redéployer la VM sur un autre hôte",
    "Recréer la VM depuis ses disques",
    "Libérer la VM, puis redimensionner",
    "Réappliquer la VM, puis redimensionner"
   ],
   "a": 2
  },
  {
   "l": "VM-B :",
   "o": [
    "Redimensionner la VM",
    "Redémarrer dans le système",
    "Redéployer la VM",
    "Réappliquer la VM"
   ],
   "a": 2
  },
  {
   "l": "VM-C :",
   "o": [
    "Réinitialiser le mot de passe",
    "Libérer la VM",
    "Réappliquer la VM",
    "Redéployer la VM"
   ],
   "a": 2
  },
  {
   "l": "VM-D, stratégie d'éviction :",
   "o": [
    "Libérer",
    "Supprimer",
    "Mettre en veille prolongée",
    "Redémarrer"
   ],
   "a": 0
  }
 ],
 "expl": "<b>VM-A.</b> Si la taille n'est pas disponible sur le cluster matériel actuel, il faut libérer la VM : au redémarrage, elle peut être placée sur un cluster qui la propose.<b>VM-B.</b> Le redéploiement déplace la VM vers un nouvel hôte (le disque temporaire est perdu).<b>VM-C.</b> La réapplication relance la configuration de la VM sur le même hôte, utile après un état d'échec du provisionnement ou d'une extension.<b>VM-D.</b> Avec l'éviction « Libérer », la VM s'arrête et ses disques sont conservés (et facturés) ; « Supprimer » supprime la VM et ses disques.",
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
    "*VM-A",
    "Libérer la VM, puis redimensionner"
   ],
   [
    "VM-B",
    "Redéployer la VM"
   ],
   [
    "VM-C",
    "Réappliquer la VM"
   ],
   [
    "VM-D, stratégie d'éviction",
    "Libérer"
   ]
  ]
 },
 "keep": "Taille absente = libérer. Hôte en cause = redéployer. État bloqué = réappliquer. Spot : Libérer garde les disques."
},
{
 "id": "D3-422",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'équipe plateforme publie des images Windows durcies dans la galerie Azure Compute GAL-Corp (France Central).</p><ul><li>Les équipes de West Europe doivent créer des VM à partir de la version 2.0.0 sans copier l'image elles-mêmes, avec des créations rapides de 500 VM simultanées.</li><li>La version 2.1.0 est en test : elle ne doit pas être choisie quand une équipe demande « la dernière version ».</li><li>Une filiale, dans un autre locataire Microsoft Entra, doit pouvoir créer des VM depuis GAL-Corp, sans rendre la galerie publique.</li><li>L'image de base doit être reconstruite automatiquement chaque mois avec les derniers correctifs et des scripts de durcissement.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Version 2.0.0 en West Europe :",
   "o": [
    "Un instantané copié dans chaque région",
    "Une seconde galerie en West Europe",
    "Répliquer la version (plusieurs réplicas)",
    "Rien : une galerie sert toutes les régions"
   ],
   "a": 2
  },
  {
   "l": "Version 2.1.0 :",
   "o": [
    "La placer dans une autre définition",
    "Supprimer 2.0.0",
    "La rendre spécialisée",
    "Exclure de la dernière version"
   ],
   "a": 3
  },
  {
   "l": "Filiale :",
   "o": [
    "Partage direct ou appli multilocataire",
    "Un compte invité dans le locataire Corp",
    "Un export VHD envoyé à la filiale",
    "Une galerie communautaire publique"
   ],
   "a": 0
  },
  {
   "l": "Reconstruction mensuelle :",
   "o": [
    "Azure VM Image Builder, planifié",
    "Une capture manuelle mensuelle d'une VM",
    "Azure Update Manager sur la galerie",
    "Une extension Custom Script sur l'image"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Réplication.</b> Une version d'image est répliquée dans les régions cibles ; plusieurs réplicas par région absorbent les créations massives simultanées.<b>Exclure de la dernière version.</b> Une version ainsi marquée n'est pas utilisée quand on demande « latest ».<b>Autre locataire.</b> Le partage direct (avec un abonnement ou un locataire) ou une inscription d'application multilocataire avec un rôle sur la galerie permettent l'accès sans publication publique ; la galerie communautaire est publique.<b>Image Builder.</b> Il construit des images à partir d'un modèle (source, scripts, mises à jour Windows) et peut se déclencher automatiquement.",
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
    "*Version 2.0.0 en West Europe",
    "Répliquer la version (plusieurs réplicas)"
   ],
   [
    "Version 2.1.0",
    "Exclure de la dernière version"
   ],
   [
    "Filiale",
    "Partage direct ou appli multilocataire"
   ],
   [
    "Reconstruction mensuelle",
    "Azure VM Image Builder, planifié"
   ]
  ]
 },
 "keep": "Galerie : réplicas par région, exclure de « latest », partage direct ou appli multilocataire, Image Builder."
},
{
 "id": "D3-423",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Quatre équipes choisissent le placement de leurs VM en France Central.</p><ul><li>Équipe HPC : 8 VM qui échangent des messages MPI ; la latence entre elles doit être la plus faible possible, et elles doivent aussi être réparties entre domaines d'erreur.</li><li>Équipe Licences : un logiciel exige que les VM ne partagent leur serveur physique avec aucun autre client, et l'équipe veut contrôler les fenêtres de maintenance de ce serveur.</li><li>Équipe Web : 20 VM de tailles différentes dans un groupe identique, réparties au mieux entre domaines d'erreur dans une zone.</li><li>Équipe Test : aucune exigence.</li></ul><p>Que devez-vous choisir ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Équipe HPC :",
   "o": [
    "Trois zones, une VM par domaine d'erreur",
    "Un hôte dédié pour les huit VM",
    "Une VM par zone, avec la mise en réseau accélérée",
    "Placement de proximité + haute disponibilité"
   ],
   "a": 3
  },
  {
   "l": "Équipe Licences :",
   "o": [
    "Un groupe de placement de proximité",
    "Une VM isolée de grande taille",
    "Un hôte dédié Azure pour ces VM",
    "Un groupe à haute disponibilité"
   ],
   "a": 2
  },
  {
   "l": "Équipe Web :",
   "o": [
    "Uniforme, cinq domaines d'erreur fixes",
    "Flexible, répartition maximale",
    "Un hôte dédié par taille de VM",
    "Un groupe à haute disponibilité de 20 VM"
   ],
   "a": 1
  }
 ],
 "expl": "<b>HPC.</b> Un groupe de placement de proximité rapproche physiquement les VM (latence minimale) ; associé à un groupe à haute disponibilité, il garde la répartition entre domaines d'erreur.<b>Licences.</b> Un hôte dédié est un serveur physique réservé à un client, dont on peut contrôler la maintenance (configuration de maintenance).<b>Web.</b> L'orchestration Flexible accepte des tailles différentes et propose la « répartition maximale » des instances entre domaines d'erreur dans une zone.",
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
    "*Équipe HPC",
    "Placement de proximité + haute disponibilité"
   ],
   [
    "Équipe Licences",
    "Un hôte dédié Azure pour ces VM"
   ],
   [
    "Équipe Web",
    "Flexible, répartition maximale"
   ]
  ]
 },
 "keep": "Latence = groupe de placement de proximité. Serveur réservé = hôte dédié. Tailles mélangées = Flexible."
},
{
 "id": "D3-424",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso doit choisir les tailles de VM pour cinq charges. Chaque charge doit utiliser la famille la plus adaptée.</p><ul><li>Charge 1 : une base de données en mémoire de 400 Go de RAM.</li><li>Charge 2 : un serveur de calcul de risques qui utilise le processeur à 100 % en continu, avec peu de mémoire.</li><li>Charge 3 : une base NoSQL qui exige un très fort débit sur des disques NVMe locaux.</li><li>Charge 4 : un petit serveur web peu utilisé, avec des pics occasionnels.</li><li>Charge 5 : l'entraînement d'un modèle d'apprentissage automatique.</li></ul><p>Quelle famille devez-vous choisir pour chaque charge ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Charge 1 :",
   "o": [
    "Série L (stockage)",
    "Série F (calcul)",
    "Série E (mémoire)",
    "Série B (burstable)",
    "Série N (GPU)"
   ],
   "a": 2
  },
  {
   "l": "Charge 2 :",
   "o": [
    "Série N (GPU)",
    "Série B (burstable)",
    "Série E (mémoire)",
    "Série F (calcul)",
    "Série L (stockage)"
   ],
   "a": 3
  },
  {
   "l": "Charge 3 :",
   "o": [
    "Série F (calcul)",
    "Série N (GPU)",
    "Série B (burstable)",
    "Série E (mémoire)",
    "Série L (stockage)"
   ],
   "a": 4
  },
  {
   "l": "Charge 4 :",
   "o": [
    "Série E (mémoire)",
    "Série N (GPU)",
    "Série B (burstable)",
    "Série F (calcul)",
    "Série L (stockage)"
   ],
   "a": 2
  },
  {
   "l": "Charge 5 :",
   "o": [
    "Série B (burstable)",
    "Série N (GPU)",
    "Série L (stockage)",
    "Série E (mémoire)",
    "Série F (calcul)"
   ],
   "a": 1
  }
 ],
 "expl": "<b>E</b> : ratio mémoire / processeur élevé (bases en mémoire, SAP). <b>F</b> : ratio processeur / mémoire élevé (calcul intensif). <b>L</b> : stockage local NVMe à haut débit (NoSQL, entrepôts). <b>B</b> : burstable, accumule des crédits quand la charge est faible et les dépense lors des pics. <b>N</b> : GPU (apprentissage automatique, rendu).",
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
    "*Charge 1",
    "Série E (mémoire)"
   ],
   [
    "Charge 2",
    "Série F (calcul)"
   ],
   [
    "Charge 3",
    "Série L (stockage)"
   ],
   [
    "Charge 4",
    "Série B (burstable)"
   ],
   [
    "Charge 5",
    "Série N (GPU)"
   ]
  ]
 },
 "keep": "E mémoire, F calcul, L stockage local, B burstable, N GPU (et D usage général)."
},
{
 "id": "D3-425",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'application web catalog tourne sur le plan ASP-Prod (Premium v3, 3 instances), qui héberge aussi 4 petites applications internes.</p><ul><li>catalog doit pouvoir monter à 8 instances, tandis que les petites applications doivent rester sur 2 instances au plus.</li><li>Les utilisateurs perdent leur session lors des mises à l'échelle ; l'application est sans état et stocke la session dans Redis.</li><li>La première requête après une période d'inactivité est très lente.</li><li>catalog redémarre parfois avec des fuites de mémoire ; l'équipe veut un recyclage automatique quand la mémoire privée dépasse 2 Go.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Instances par application :",
   "o": [
    "Des emplacements pour les petites applications",
    "Un second plan réservé à catalog",
    "Une règle de mise à l'échelle par application",
    "La mise à l'échelle par application"
   ],
   "a": 3
  },
  {
   "l": "Sessions :",
   "o": [
    "Activer l'option Always On du site",
    "Activer l'affinité de session ARR",
    "Désactiver l'affinité de session ARR",
    "Passer le plan au niveau Isolé v2"
   ],
   "a": 2
  },
  {
   "l": "Première requête lente :",
   "o": [
    "Always On",
    "L'affinité ARR",
    "HTTP/2",
    "Le contrôle d'intégrité"
   ],
   "a": 0
  },
  {
   "l": "Fuites de mémoire :",
   "o": [
    "La réparation automatique sur la mémoire",
    "Un redémarrage planifié chaque nuit",
    "Le contrôle d'intégrité sur la mémoire",
    "Une règle de mise à l'échelle sur la mémoire"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Par application.</b> La mise à l'échelle par application limite le nombre d'instances qu'utilise chaque application dans un plan (numberOfWorkers), le plan pouvant monter plus haut pour catalog.<b>ARR.</b> L'affinité ARR colle un client à une instance ; quand l'instance disparaît lors d'une diminution, la session est perdue. Pour une application sans état, on la désactive : les requêtes se répartissent et Redis garde la session.<b>Always On.</b> Il évite le déchargement de l'application après inactivité.<b>Réparation automatique.</b> Elle recycle le processus selon des règles (mémoire privée, nombre de requêtes, codes d'état…).",
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
    "*Instances par application",
    "La mise à l'échelle par application"
   ],
   [
    "Sessions",
    "Désactiver l'affinité de session ARR"
   ],
   [
    "Première requête lente",
    "Always On"
   ],
   [
    "Fuites de mémoire",
    "La réparation automatique sur la mémoire"
   ]
  ]
 },
 "keep": "App Service : mise à l'échelle par application, ARR désactivée pour le sans-état, Always On, réparation automatique."
},
{
 "id": "D3-426",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Litware crée un environnement Azure Container Apps pour ses microservices.</p><ul><li>Certains services ont besoin de 32 Go de RAM et de GPU, d'autres de quelques centaines de Mo.</li><li>L'environnement doit être intégré à VNet-Apps, avec un sous-réseau dédié ; aucune application ne doit avoir d'adresse publique.</li><li>Les applications doivent s'appeler par leur nom, avec reprises automatiques et publication/abonnement, sans écrire ce code.</li><li>Un ingénieur demande s'il peut intégrer l'environnement existant cae-test, créé sans réseau virtuel, à VNet-Apps.</li></ul><p>Que devez-vous choisir ou répondre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Type d'environnement :",
   "o": [
    "Un cluster Azure Kubernetes Service",
    "Consommation seule, avec de grandes tailles",
    "Un App Service Environment v3",
    "Des profils de charge de travail dédiés"
   ],
   "a": 3
  },
  {
   "l": "Réseau :",
   "o": [
    "Points de terminaison de service sur VNet-Apps",
    "Externe, avec un NSG sur le sous-réseau",
    "Interne, sous-réseau délégué",
    "Un peering entre l'environnement et VNet-Apps"
   ],
   "a": 2
  },
  {
   "l": "Appels entre services :",
   "o": [
    "Dapr",
    "Azure Front Door",
    "KEDA",
    "Une passerelle NAT"
   ],
   "a": 0
  },
  {
   "l": "cae-test :",
   "o": [
    "Possible en passant cae-test en mode interne",
    "Possible avec un peering vers VNet-Apps",
    "Impossible après la création de l'environnement",
    "Possible dans les paramètres réseau de cae-test"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Profils.</b> Les environnements à profils de charge de travail combinent la consommation et des profils dédiés (dont GPU et grandes tailles).<b>Réseau.</b> Un environnement interne, déployé dans un sous-réseau délégué de VNet-Apps, n'expose que des adresses privées.<b>Dapr.</b> Il fournit l'invocation de services, les reprises, la publication/abonnement et l'état, en sidecar. KEDA sert à la mise à l'échelle.<b>cae-test.</b> L'intégration réseau d'un environnement se définit à sa création ; il faut en créer un nouveau.",
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
    "*Type d'environnement",
    "Des profils de charge de travail dédiés"
   ],
   [
    "Réseau",
    "Interne, sous-réseau délégué"
   ],
   [
    "Appels entre services",
    "Dapr"
   ],
   [
    "cae-test",
    "Impossible après la création de l'environnement"
   ]
  ]
 },
 "keep": "Container Apps : profils de charge de travail, environnement interne, Dapr, réseau choisi à la création."
},
{
 "id": "D3-427",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous écrivez un modèle ARM qui crée un compte de stockage, puis une application web qui l'utilise.</p><ul><li>Le nom du compte doit être unique au monde et stable entre deux déploiements dans le même groupe de ressources.</li><li>L'application web doit recevoir la clé primaire du compte dans ses paramètres, au moment du déploiement.</li><li>L'ID complet du compte doit être renvoyé à la fin du déploiement, pour un pipeline.</li><li>Un modèle lié, stocké dans un compte de stockage privé, doit être appelé par le modèle principal.</li></ul><p>Quelle fonction ou quel élément devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Nom du compte :",
   "o": [
    "take(subscription().id, 24)",
    "concat('st', utcNow())",
    "newGuid() comme valeur par défaut",
    "uniqueString(resourceGroup().id)"
   ],
   "a": 3
  },
  {
   "l": "Clé primaire :",
   "o": [
    "reference(…).primaryEndpoints.blob",
    "listKeys(…).keys[0].value",
    "reference(…).primaryKey",
    "parameters('storageKey')"
   ],
   "a": 1
  },
  {
   "l": "ID complet :",
   "o": [
    "Une variable avec resourceId()",
    "outputs avec resourceId()",
    "Une étiquette posée sur le compte",
    "Un paramètre de sortie du fichier"
   ],
   "a": 1
  },
  {
   "l": "Modèle lié privé :",
   "o": [
    "templateLink + URI du blob avec un jeton SAS",
    "Un chemin local vers le fichier lié",
    "Un modèle imbriqué copié dans le principal",
    "templateLink avec un URI sans jeton"
   ],
   "a": 0
  }
 ],
 "expl": "<b>uniqueString.</b> Elle renvoie un hachage déterministe de ses arguments : même groupe, même résultat. newGuid() change à chaque déploiement (et n'est utilisable qu'en valeur par défaut d'un paramètre).<b>listKeys.</b> Elle lit les clés d'une ressource au déploiement ; reference() renvoie l'état, pas les clés.<b>outputs.</b> Les sorties renvoient des valeurs à la fin du déploiement.<b>Modèle lié.</b> templateLink exige une URI accessible par Resource Manager ; pour un stockage privé, on ajoute un jeton SAS (ou on utilise une spécification de modèle).",
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
    "*Nom du compte",
    "uniqueString(resourceGroup().id)"
   ],
   [
    "Clé primaire",
    "listKeys(…).keys[0].value"
   ],
   [
    "ID complet",
    "outputs avec resourceId()"
   ],
   [
    "Modèle lié privé",
    "templateLink + URI du blob avec un jeton SAS"
   ]
  ]
 },
 "keep": "uniqueString stable, listKeys pour les clés, outputs pour renvoyer, SAS pour un modèle lié privé."
},
{
 "id": "D3-428",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous déployez des fichiers Bicep et des modèles ARM depuis Azure CLI.</p><ul><li>main.bicep crée des ressources dans le groupe RG-App.</li><li>sub.bicep crée des groupes de ressources et des attributions de rôles au niveau de l'abonnement.</li><li>Avant chaque déploiement de main.bicep, vous voulez voir les modifications, sans rien déployer.</li><li>Un modèle ARM JSON hérité doit être converti en Bicep pour être maintenu.</li></ul><p>Quelle commande devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "main.bicep :",
   "o": [
    "az bicep build -f main.bicep --deploy",
    "az deployment sub create -l francecentral -f main.bicep",
    "az deployment group create -g RG-App -f main.bicep",
    "az group deployment create -n RG-App main.bicep"
   ],
   "a": 2
  },
  {
   "l": "sub.bicep :",
   "o": [
    "az deployment group create -g RG-App -f sub.bicep",
    "az deployment mg create -m Root -f sub.bicep",
    "az deployment tenant create -l francecentral -f sub.bicep",
    "az deployment sub create -l francecentral -f sub.bicep"
   ],
   "a": 3
  },
  {
   "l": "Aperçu :",
   "o": [
    "az bicep lint",
    "az deployment group show",
    "az deployment group validate -g RG-App -f main.bicep",
    "az deployment group what-if -g RG-App -f main.bicep"
   ],
   "a": 3
  },
  {
   "l": "Conversion :",
   "o": [
    "az bicep build -f old.json --out main.bicep",
    "az deployment group export -f old.json",
    "az bicep decompile -f old.json",
    "az bicep format --to-bicep old.json"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Groupe.</b> az deployment group create cible un groupe de ressources.<b>Abonnement.</b> az deployment sub create cible l'abonnement et exige un emplacement (-l) pour stocker les métadonnées du déploiement.<b>what-if.</b> Il affiche les créations, modifications et suppressions ; validate ne vérifie que la syntaxe et les contraintes.<b>decompile.</b> Il convertit un modèle JSON en Bicep (build fait l'inverse).",
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
    "*main.bicep",
    "az deployment group create -g RG-App -f main.bicep"
   ],
   [
    "sub.bicep",
    "az deployment sub create -l francecentral -f sub.bicep"
   ],
   [
    "Aperçu",
    "az deployment group what-if -g RG-App -f main.bicep"
   ],
   [
    "Conversion",
    "az bicep decompile -f old.json"
   ]
  ]
 },
 "keep": "az deployment group/sub create, what-if pour l'aperçu, bicep decompile JSON → Bicep."
},
{
 "id": "D3-429",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Le groupe identique VMSS-Batch est en orchestration Flexible. Les besoins suivants arrivent :</p><ul><li>VMSS-Web, un autre groupe, est en orchestration Uniforme ; l'équipe veut le passer en Flexible sans le recréer.</li><li>VMSS-Batch doit contenir à la fois des instances D4s_v5 et D4as_v5.</li><li>Chaque soir à 19 h, le nombre d'instances doit passer à 20, quelle que soit la charge, puis revenir sous la règle CPU à 23 h.</li><li>La charge suit des cycles quotidiens réguliers ; l'équipe veut que les instances soient ajoutées avant la montée du CPU.</li></ul><p>Que devez-vous répondre ou configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VMSS-Web :",
   "o": [
    "Possible après une mise à niveau propagée",
    "Possible si le groupe est vidé de ses instances",
    "Possible en modifiant la configuration du groupe",
    "Impossible : fixé à la création"
   ],
   "a": 3
  },
  {
   "l": "Deux tailles dans VMSS-Batch :",
   "o": [
    "Possible uniquement en orchestration Uniforme",
    "Possible : Flexible accepte plusieurs tailles",
    "Impossible : une seule taille par groupe",
    "Possible seulement avec un hôte dédié"
   ],
   "a": 1
  },
  {
   "l": "19 h - 23 h :",
   "o": [
    "Une règle CPU avec un seuil plus bas le soir",
    "Un profil récurrent de 20 instances",
    "Le surprovisionnement des instances",
    "Un runbook qui modifie le minimum à 19 h"
   ],
   "a": 1
  },
  {
   "l": "Ajout anticipé :",
   "o": [
    "Un seuil dynamique",
    "La mise à l'échelle prédictive",
    "La réparation automatique",
    "Un temps de refroidissement plus court"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Mode d'orchestration.</b> Il se choisit à la création et ne se change pas : il faut recréer VMSS-Web en Flexible.<b>Tailles.</b> En Flexible, les instances peuvent avoir des tailles différentes ; en Uniforme, toutes partagent le même modèle.<b>Profil récurrent.</b> Un profil planifié fixe un nombre d'instances sur une plage horaire, puis le profil par défaut reprend.<b>Prédictive.</b> La mise à l'échelle prédictive (sur le CPU) apprend les cycles et ajoute les instances avant la hausse prévue.",
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
    "*VMSS-Web",
    "Impossible : fixé à la création"
   ],
   [
    "Deux tailles dans VMSS-Batch",
    "Possible : Flexible accepte plusieurs tailles"
   ],
   [
    "19 h - 23 h",
    "Un profil récurrent de 20 instances"
   ],
   [
    "Ajout anticipé",
    "La mise à l'échelle prédictive"
   ]
  ]
 },
 "keep": "Mode d'orchestration figé. Tailles mélangées = Flexible. Horaire = profil récurrent. Cycles = prédictive."
},
{
 "id": "D3-430",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Plusieurs extensions de VM posent problème dans RG-Ops.</p><ul><li>L'extension Custom Script de VM-1 a échoué ; le script a été corrigé dans le compte de stockage, mais redéployer le même modèle ne relance pas l'extension.</li><li>VM-2 a déjà une extension Custom Script ; une équipe veut en ajouter une seconde pour un autre script.</li><li>L'équipe sécurité veut vérifier en continu que les VM Windows respectent une base de configuration (paramètres de sécurité), et les corriger automatiquement, sans DSC d'Automation, en cours de retrait.</li><li>VM-3 doit envoyer ses journaux à Log Analytics avec l'agent actuel recommandé.</li></ul><p>Que devez-vous faire ou utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM-1 :",
   "o": [
    "Redémarrer VM-1 pour relancer l'extension",
    "Changer la valeur de forceUpdateTag",
    "Redéployer VM-1 sur un autre hôte",
    "Supprimer puis recréer le compte de stockage"
   ],
   "a": 1
  },
  {
   "l": "VM-2 :",
   "o": [
    "Ajouter l'extension sur une seconde carte réseau",
    "Passer par cloud-init sur cette VM Windows",
    "Ajouter une seconde extension du même type",
    "Impossible : une seule extension par VM"
   ],
   "a": 3
  },
  {
   "l": "Base de configuration :",
   "o": [
    "Les recommandations d'Azure Advisor",
    "Azure Machine Configuration",
    "Azure Update Manager avec une base",
    "L'extension Custom Script planifiée"
   ],
   "a": 1
  },
  {
   "l": "VM-3 :",
   "o": [
    "L'extension de diagnostic Windows",
    "L'agent Azure Monitor avec une DCR",
    "L'agent de dépendances, seul",
    "L'agent Log Analytics, encore présent"
   ],
   "a": 1
  }
 ],
 "expl": "<b>forceUpdateTag.</b> Resource Manager ne relance une extension que si sa configuration change ; modifier forceUpdateTag (ou un paramètre) force une nouvelle exécution.<b>Une par VM.</b> Une VM ne peut avoir qu'une extension Custom Script ; on la met à jour avec un autre script (ou un script qui en appelle plusieurs).<b>Machine Configuration.</b> Anciennement Guest Configuration, elle audite et applique des paramètres dans le système invité, pilotée par Azure Policy ; elle remplace Automation State Configuration (DSC).<b>AMA.</b> L'agent Azure Monitor, configuré par une DCR, remplace l'agent Log Analytics retiré.",
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
    "*VM-1",
    "Changer la valeur de forceUpdateTag"
   ],
   [
    "VM-2",
    "Impossible : une seule extension par VM"
   ],
   [
    "Base de configuration",
    "Azure Machine Configuration"
   ],
   [
    "VM-3",
    "L'agent Azure Monitor avec une DCR"
   ]
  ]
 },
 "keep": "Relancer une extension = forceUpdateTag. Une Custom Script par VM. Base invitée = Machine Configuration. Journaux = AMA."
}
);
