/* Domaine 3 : calcul (lot C : D3-067 à D3-121) */
AZ.questions.push(
{
 "id": "D3-067",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le niveau de service d'Azure Container Registry adapté à chaque besoin, au coût le plus bas.</p><p>Pour répondre, faites glisser le niveau approprié vers chaque besoin. Chaque niveau peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Niveaux",
 "tgtHead": [
  "Besoin",
  "Niveau"
 ],
 "srcs": [
  "De base",
  "Standard",
  "Premium"
 ],
 "tgts": [
  {
   "l": "Registre d'apprentissage pour un développeur, peu d'images",
   "a": 0
  },
  {
   "l": "Répliquer les images dans 3 régions",
   "a": 2
  },
  {
   "l": "Accès au registre uniquement par un point de terminaison privé",
   "a": 2
  },
  {
   "l": "Production avec plus de stockage et de débit, dans une seule région, sans réseau privé",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>De base</b> : pour apprendre et développer, stockage et débit limités.</li><li><b>Standard</b> : mêmes fonctions, plus de stockage et de débit, pour la plupart des productions.</li><li><b>Premium</b> : ajoute la <b>géoréplication</b>, les <b>points de terminaison privés</b> (Private Link), les règles de pare-feu, la confiance du contenu et le plus haut débit.</li></ul>",
 "portal": {
  "path": [
   "Registres de conteneurs",
   "Créer"
  ],
  "title": "Créer un registre de conteneurs",
  "menu": [
   "*Informations de base",
   "Mise en réseau"
  ],
  "rows": [
   [
    "De base",
    "Apprentissage"
   ],
   [
    "Standard",
    "Production, une région"
   ],
   [
    "*Premium",
    "Géoréplication, Private Link"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "ACR : De base / Standard / Premium (géoréplication et réseau privé)."
},
{
 "id": "D3-071",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez attribuer le rôle adapté pour Azure Container Registry, en respectant le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "tgtHead": [
  "Besoin",
  "Rôle"
 ],
 "srcs": [
  "AcrPull",
  "AcrPush",
  "Contributeur",
  "Lecteur"
 ],
 "tgts": [
  {
   "l": "Le service de déploiement télécharge les images",
   "a": 0
  },
  {
   "l": "Le pipeline CI envoie de nouvelles images",
   "a": 1
  },
  {
   "l": "L'équipe plateforme crée et configure des registres",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>AcrPull</b> : tirer (télécharger) des images.</li><li><b>AcrPush</b> : tirer et pousser des images.</li><li><b>Contributeur</b> : gérer les registres (création, configuration, géoréplication).</li></ul><p><b>Lecteur</b> ne permet pas de tirer des images.</p>",
 "portal": {
  "path": [
   "Registres de conteneurs",
   "ACR1"
  ],
  "title": "ACR1 | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*AcrPull",
    "Service de déploiement"
   ],
   [
    "AcrPush",
    "Pipeline CI"
   ],
   [
    "Contributeur",
    "Équipe plateforme"
   ]
  ]
 },
 "keep": "AcrPull = tirer ; AcrPush = tirer + pousser ; Contributeur = gérer le registre."
},
{
 "id": "D3-073",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous déployez des conteneurs dans Azure Container Instances.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Stratégie de redémarrage d'un serveur web qui doit toujours tourner :",
   "o": [
    "Never",
    "Always",
    "OnFailure"
   ],
   "a": 1
  },
  {
   "l": "Stratégie d'un traitement qui doit être relancé seulement s'il échoue :",
   "o": [
    "Always",
    "Never",
    "OnFailure"
   ],
   "a": 2
  },
  {
   "l": "Stratégie d'un test qui doit s'exécuter une seule fois, quel que soit le résultat :",
   "o": [
    "OnFailure",
    "Always",
    "Never"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Always</b> (par défaut) : redémarre toujours le conteneur quand il s'arrête.</li><li><b>OnFailure</b> : redémarre seulement si le processus se termine avec une erreur (code de sortie différent de 0).</li><li><b>Never</b> : ne redémarre jamais.</li></ul>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "Créer"
  ],
  "title": "Avancé",
  "menu": [
   "*Avancé"
  ],
  "rows": [
   [
    "*Always",
    "Toujours redémarrer"
   ],
   [
    "OnFailure",
    "Seulement si erreur"
   ],
   [
    "Never",
    "Jamais"
   ]
  ]
 },
 "keep": "Always (serveur), OnFailure (traitement), Never (exécution unique)."
},
{
 "id": "D3-081",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous configurez la mise à l'échelle d'une application Azure Container Apps.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Pour ne rien payer quand il n'y a aucune requête, le nombre minimal de réplicas doit être :",
   "o": [
    "0",
    "1",
    "2"
   ],
   "a": 0
  },
  {
   "l": "Pour ajouter des réplicas quand une file d'attente Azure Storage contient beaucoup de messages, la règle doit être de type :",
   "o": [
    "TCP",
    "Personnalisée (file d'attente Azure)",
    "HTTP"
   ],
   "a": 1
  },
  {
   "l": "Pour éviter tout délai de démarrage à froid, le nombre minimal de réplicas doit être :",
   "o": [
    "0",
    "1 ou plus",
    "Il n'y a pas de minimum"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Minimum 0</b> : l'application descend à zéro réplica quand il n'y a pas d'activité ; elle redémarre à la première requête (démarrage à froid).</li><li>Les règles de mise à l'échelle peuvent être <b>HTTP</b>, <b>TCP</b> ou <b>personnalisées</b> (scalers KEDA : file d'attente Azure, Service Bus, etc.).</li><li><b>Minimum 1 ou plus</b> : au moins un réplica reste démarré, sans délai de démarrage à froid.</li></ul>",
 "portal": {
  "path": [
   "Container Apps",
   "app1"
  ],
  "title": "app1 | Mise à l'échelle",
  "menu": [
   "*Mise à l'échelle"
  ],
  "rows": [
   [
    "*Nombre minimal de réplicas",
    "0 (pas de coût au repos) ou 1+ (pas de démarrage à froid)"
   ],
   [
    "Règle",
    "Personnalisée : azure-queue"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Min 0 = pas de coût au repos mais démarrage à froid ; règles HTTP, TCP ou KEDA."
},
{
 "id": "D3-082",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le service de conteneurs adapté à chaque besoin.</p><p>Pour répondre, faites glisser le service approprié vers chaque besoin. Chaque service peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Services",
 "tgtHead": [
  "Besoin",
  "Service"
 ],
 "srcs": [
  "Azure Container Registry",
  "Azure Container Instances",
  "Azure Container Apps"
 ],
 "tgts": [
  {
   "l": "Stocker et versionner des images de conteneurs privées",
   "a": 0
  },
  {
   "l": "Lancer rapidement un conteneur isolé pour une tâche ponctuelle",
   "a": 1
  },
  {
   "l": "Héberger des microservices avec mise à l'échelle automatique et révisions",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>ACR</b> : registre d'images privé.</li><li><b>ACI</b> : un conteneur (ou un petit groupe) à la demande, sans orchestration ni mise à l'échelle automatique.</li><li><b>Container Apps</b> : plateforme serverless pour applications et microservices conteneurisés, avec mise à l'échelle automatique, entrée HTTPS et révisions.</li></ul>",
 "portal": {
  "path": [
   "Accueil"
  ],
  "title": "Services de conteneurs",
  "rows": [
   [
    "*ACR",
    "Registre d'images"
   ],
   [
    "ACI",
    "Conteneur à la demande"
   ],
   [
    "Container Apps",
    "Microservices serverless"
   ]
  ]
 },
 "keep": "ACR stocke, ACI exécute simplement, Container Apps orchestre en serverless."
},
{
 "id": "D3-084",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous devez choisir le niveau minimal de plan App Service pour chaque fonctionnalité.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Domaine personnalisé avec un certificat TLS (liaison SNI) :",
   "o": [
    "Premium",
    "De base",
    "Gratuit"
   ],
   "a": 1
  },
  {
   "l": "Emplacements de déploiement :",
   "o": [
    "Premium",
    "De base",
    "Standard"
   ],
   "a": 2
  },
  {
   "l": "Environnement isolé et dédié dans votre réseau virtuel (App Service Environment) :",
   "o": [
    "Isolé v2",
    "Premium v3",
    "Standard"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>De base</b> : premier niveau à prendre en charge les liaisons TLS pour un domaine personnalisé.</li><li><b>Standard</b> : emplacements de déploiement et mise à l'échelle automatique.</li><li><b>Isolé v2</b> : utilisé par un App Service Environment v3, déployé dans votre réseau virtuel, avec un matériel dédié.</li></ul>",
 "portal": {
  "path": [
   "Plans App Service",
   "Créer"
  ],
  "title": "Plan tarifaire",
  "rows": [
   [
    "*De base",
    "Domaine + TLS"
   ],
   [
    "*Standard",
    "Emplacements, mise à l'échelle auto"
   ],
   [
    "*Isolé v2",
    "App Service Environment"
   ]
  ]
 },
 "keep": "De base = TLS ; Standard = emplacements ; Isolé = environnement dédié."
},
{
 "id": "D3-089",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez déployer une nouvelle version de WebApp3 sans interruption, la tester sur une URL distincte, puis la mettre en production.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>On crée l'<b>emplacement</b> staging (plan Standard ou plus), on y <b>déploie</b> et on teste à l'adresse <code>webapp3-staging.azurewebsites.net</code>, puis on <b>permute</b> : staging devient production sans interruption, car les instances sont déjà démarrées. En cas de problème, on permute à nouveau pour revenir en arrière.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp3"
  ],
  "title": "WebApp3 | Emplacements de déploiement",
  "menu": [
   "*Emplacements de déploiement"
  ],
  "rows": [
   [
    "production",
    "100 %"
   ],
   [
    "*staging",
    "webapp3-staging.azurewebsites.net"
   ]
  ],
  "btn": "Permuter"
 },
 "keep": "Déploiement sans coupure : emplacement, test, permutation (et retour arrière par permutation).",
 "acts": [
  "Créer un emplacement de déploiement nommé staging",
  "Déployer la nouvelle version dans staging et la tester",
  "Permuter staging avec l'emplacement de production",
  "Arrêter l'emplacement de production",
  "Supprimer et recréer WebApp3"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D3-106",
 "dom": 3,
 "type": "hot",
 "stem": "<p>WebApp18 a les emplacements production et staging. Vous permutez staging vers production.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Le code de staging se retrouve dans :",
   "o": [
    "staging",
    "production",
    "les deux"
   ],
   "a": 1
  },
  {
   "l": "Un paramètre d'application non marqué comme paramètre d'emplacement :",
   "o": [
    "est supprimé",
    "reste dans son emplacement",
    "suit le code"
   ],
   "a": 2
  },
  {
   "l": "Le nom de domaine personnalisé de production :",
   "o": [
    "reste sur production",
    "est supprimé",
    "passe sur staging"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>Le <b>code</b> de staging passe en production, et celui de production passe en staging.</li><li>Les paramètres <b>non collants</b> suivent le code ; les paramètres marqués comme paramètres d'emplacement restent.</li><li>Certains réglages ne sont jamais permutés : <b>domaines personnalisés</b>, certificats et liaisons TLS, mise à l'échelle, points de terminaison privés, etc.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "WebApp18"
  ],
  "title": "Permuter",
  "rows": [
   [
    "*Code",
    "Échangé"
   ],
   [
    "Paramètres non collants",
    "Suivent le code"
   ],
   [
    "*Domaines, certificats, mise à l'échelle",
    "Restent"
   ]
  ],
  "btn": "Permuter"
 },
 "keep": "Permutation : code + paramètres non collants échangés ; domaines et mise à l'échelle restent."
},
{
 "id": "D3-107",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous gérez des plans App Service.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un plan App Service dont toutes les applications sont arrêtées reste facturé.",
   "a": 0
  },
  {
   "l": "Arrêter une application web arrête la facturation de son plan.",
   "a": 1
  },
  {
   "l": "Un plan peut contenir des applications de régions différentes.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Facturation du plan : Oui.</b> On paie le plan (ses instances) tant qu'il existe, quel que soit l'état des applications. (Seul le niveau Gratuit est sans coût.)</li><li><b>Arrêter l'application : Non.</b> Le plan continue d'être facturé.</li><li><b>Régions différentes : Non.</b> Un plan est dans une seule région, comme toutes ses applications.</li></ul>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP1"
  ],
  "title": "ASP1 | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble"
  ],
  "rows": [
   [
    "Applications",
    "Toutes arrêtées"
   ],
   [
    "*Facturation",
    "Continue (le plan existe)"
   ]
  ]
 },
 "keep": "On paie le plan tant qu'il existe ; un plan = une région."
},
{
 "id": "D3-108",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous gérez des conteneurs dans Azure Container Instances.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un groupe de conteneurs Windows peut contenir plusieurs conteneurs.",
   "a": 1
  },
  {
   "l": "Les conteneurs d'un même groupe partagent la même adresse IP.",
   "a": 0
  },
  {
   "l": "ACI facture le CPU et la mémoire à la seconde.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Windows multi-conteneurs : Non.</b> Les groupes à plusieurs conteneurs ne sont pris en charge que pour Linux.</li><li><b>Adresse IP partagée : Oui.</b> Les conteneurs d'un groupe partagent l'adresse et l'espace de ports.</li><li><b>Facturation à la seconde : Oui.</b> On paie les ressources demandées pendant l'exécution.</li></ul>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "aci1"
  ],
  "title": "aci1 | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble"
  ],
  "rows": [
   [
    "Type d'OS",
    "Linux (multi-conteneurs)"
   ],
   [
    "*Adresse IP",
    "Partagée par le groupe"
   ],
   [
    "Facturation",
    "À la seconde"
   ]
  ]
 },
 "keep": "Groupe multi-conteneurs = Linux ; IP partagée ; facturé à la seconde."
},
{
 "id": "D3-109",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez créer un conteneur ACI à partir de l'image mcr.microsoft.com/azuredocs/aci-helloworld, accessible sur Internet par un nom DNS, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Groupe de commandes",
   "o": [
    "container",
    "containerapp",
    "acr"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--dns-name-label",
    "--domain-name",
    "--fqdn"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az container create ... --dns-name-label hello-demo42 --ports 80</code> crée un groupe de conteneurs ACI avec une adresse publique et le nom <code>hello-demo42.&lt;région&gt;.azurecontainer.io</code>.</p><p><code>az containerapp</code> gère Azure Container Apps ; <code>az acr</code> le registre.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Commande",
    "az container create … --dns-name-label hello-demo42 --ports 80"
   ]
  ]
 },
 "keep": "ACI en CLI = az container create (--dns-name-label pour le nom public).",
 "tpl": "az {0} create --resource-group RG1 --name hello --image mcr.microsoft.com/azuredocs/aci-helloworld {1} hello-demo42 --ports 80"
},
{
 "id": "D3-110",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez créer un plan App Service Linux de niveau Standard S1, puis une application web Node.js, avec Azure CLI.</p><p>Comment devez-vous compléter les commandes ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "SKU",
   "o": [
    "S1",
    "B1",
    "F1"
   ],
   "a": 0
  },
  {
   "l": "Système",
   "o": [
    "--is-linux",
    "--os windows",
    "--linux-only"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az appservice plan create --sku S1 --is-linux</code> crée un plan Linux de niveau Standard. Sans <code>--is-linux</code>, le plan est Windows.</p><p>B1 est le niveau De base, F1 le niveau Gratuit.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az appservice plan create",
    "--sku S1 --is-linux"
   ],
   [
    "az webapp create",
    "--plan ASP1 --runtime NODE:20-lts"
   ]
  ]
 },
 "keep": "Plan Linux = --is-linux ; sinon Windows.",
 "tpl": "az appservice plan create --name ASP1 --resource-group RG1 --sku {0} {1}<br>az webapp create --name webapp42 --resource-group RG1 --plan ASP1 --runtime \"NODE:20-lts\""
},
{
 "id": "D3-111",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez permuter l'emplacement staging de webapp43 avec la production, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Action",
   "o": [
    "swap",
    "create",
    "auto-swap"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--target-slot",
    "--destination",
    "--to"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az webapp deployment slot swap --slot staging --target-slot production</code>. On peut aussi faire une permutation avec aperçu (<code>--action preview</code>), puis la terminer ou l'annuler.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Commande",
    "az webapp deployment slot swap --slot staging --target-slot production"
   ]
  ]
 },
 "keep": "Permuter en CLI = az webapp deployment slot swap.",
 "tpl": "az webapp deployment slot {0} --name webapp43 --resource-group RG1 --slot staging {1} production"
},
{
 "id": "D3-112",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez une application web Linux pour une API Python. Elle doit pouvoir utiliser des emplacements de déploiement, au coût le plus bas.</p><p>Comment devez-vous configurer l'application ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Code</b> avec la pile <b>Python 3.12</b>, sur <b>Linux</b> (Python n'est proposé que sous Linux dans App Service).</li><li><b>Standard S1</b> : le niveau le moins cher qui propose les emplacements de déploiement.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "Créer"
  ],
  "title": "Créer une application web",
  "menu": [
   "*Informations de base"
  ],
  "rows": [
   [
    "Publier",
    "Code"
   ],
   [
    "*Pile d'exécution",
    "Python 3.12"
   ],
   [
    "Système d'exploitation",
    "Linux"
   ],
   [
    "*Plan tarifaire",
    "Standard S1"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Python sur App Service = Linux ; emplacements = Standard.",
 "win": {
  "title": "Créer une application web",
  "sub": "App Services",
  "rows": [
   {
    "k": "head",
    "t": "Détails de l'instance"
   },
   {
    "k": "text",
    "l": "Nom",
    "t": "api-commandes"
   },
   {
    "k": "radio",
    "l": "Publier",
    "opts": [
     "Code",
     "Conteneur",
     "Application web statique"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Pile d'exécution",
    "o": [
     ".NET 8",
     "Python 3.12",
     "Node 20 LTS"
    ],
    "a": 1
   },
   {
    "k": "radio",
    "l": "Système d'exploitation",
    "opts": [
     "Linux",
     "Windows"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Plan tarifaire"
   },
   {
    "k": "select",
    "l": "Plan tarifaire",
    "o": [
     "Gratuit F1",
     "De base B1",
     "Standard S1",
     "Premium v3 P1v3"
    ],
    "a": 2
   }
  ]
 }
},
{
 "id": "D3-113",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous configurez la mise à l'échelle automatique du plan App Service ASP3. Il doit garder au moins 2 instances, au plus 8, et ajouter une instance quand le CPU moyen dépasse 70 % pendant 10 minutes.</p><p>Comment devez-vous configurer la règle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<p>Mise à l'échelle automatique <b>personnalisée</b>, minimum <b>2</b>, maximum <b>8</b>, règle <b>Pourcentage UC Supérieur à 70</b> (durée 10 minutes) qui <b>augmente</b> le nombre d'instances de 1.</p><p>Pensez à ajouter aussi une règle de diminution, sinon le plan ne redescendra jamais à 2 instances.</p>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP3"
  ],
  "title": "ASP3 | Scale out (plan App Service)",
  "menu": [
   "*Scale out (plan App Service)"
  ],
  "rows": [
   [
    "*Méthode",
    "Mise à l'échelle automatique personnalisée"
   ],
   [
    "Limites",
    "2 à 8"
   ],
   [
    "*Règle",
    "Pourcentage UC > 70 (10 min) → +1"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Mise à l'échelle auto : limites + règle d'augmentation + règle de diminution.",
 "win": {
  "title": "Mise à l'échelle",
  "sub": "ASP3 | Scale out (plan App Service)",
  "rows": [
   {
    "k": "radio",
    "l": "Méthode",
    "opts": [
     "Manuelle",
     "Mise à l'échelle automatique personnalisée"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "head",
    "t": "Limites d'instances"
   },
   {
    "k": "select",
    "l": "Minimum",
    "o": [
     "1",
     "2",
     "8"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Maximum",
    "o": [
     "2",
     "8",
     "10"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "Règle"
   },
   {
    "k": "select",
    "l": "Nom de la métrique",
    "o": [
     "Pourcentage UC",
     "Pourcentage de mémoire",
     "Longueur de la file d'attente HTTP"
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
     "30",
     "70",
     "90"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Opération",
    "o": [
     "Augmenter le nombre de",
     "Diminuer le nombre de"
    ],
    "a": 0
   }
  ]
 }
},
{
 "id": "D3-114",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez ajouter un emplacement de déploiement nommé staging à WebApp19.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Emplacements de déploiement",
 "expl": "<p><b>Emplacements de déploiement</b> permet d'ajouter un emplacement, de permuter et de configurer le routage du trafic. Le <b>Centre de déploiement</b> configure la source du code (GitHub, Azure Repos…).</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp19"
  ],
  "title": "WebApp19 | Emplacements de déploiement",
  "menu": [
   "*Emplacements de déploiement",
   "Centre de déploiement"
  ],
  "rows": [
   [
    "production",
    "100 %"
   ]
  ],
  "btn": "+ Ajouter un emplacement"
 },
 "keep": "Emplacements = page Emplacements de déploiement ; source du code = Centre de déploiement.",
 "win": {
  "title": "WebApp19 | App Service",
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
    "g": "Déploiement",
    "items": [
     "Emplacements de déploiement",
     "Centre de déploiement"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Variables d'environnement",
     "Configuration",
     "Domaines personnalisés",
     "Certificats",
     "Mise en réseau",
     "Scale up (plan App Service)",
     "Scale out (plan App Service)",
     "Sauvegardes"
    ]
   }
  ]
 }
},
{
 "id": "D3-115",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>WebApp20 doit pouvoir joindre une base de données qui n'a qu'une adresse privée dans VNet4.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Mise en réseau",
 "expl": "<p>La page <b>Mise en réseau</b> regroupe les réglages entrants (restrictions d'accès, points de terminaison privés, accès public) et sortants (<b>intégration au réseau virtuel</b>, connexions hybrides).</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp20"
  ],
  "title": "WebApp20 | Mise en réseau",
  "menu": [
   "Configuration",
   "*Mise en réseau"
  ],
  "rows": [
   [
    "Trafic entrant",
    "Restrictions d'accès, points de terminaison privés"
   ],
   [
    "*Trafic sortant",
    "Intégration au réseau virtuel"
   ]
  ]
 },
 "keep": "Réseau d'une application web = page Mise en réseau (entrant et sortant).",
 "win": {
  "title": "WebApp20 | App Service",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Variables d'environnement",
     "Configuration",
     "Authentification",
     "Identité",
     "Domaines personnalisés",
     "Mise en réseau",
     "Scale up (plan App Service)"
    ]
   },
   {
    "g": "Supervision",
    "items": [
     "Alertes",
     "Métriques",
     "Journaux App Service",
     "Contrôle d'intégrité"
    ]
   }
  ]
 }
},
{
 "id": "D3-117",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Une application ACI doit tirer une image privée de ACR4 et écrire des fichiers persistants.</p><p>Pour chacune des configurations suivantes, sélectionnez Oui si elle est nécessaire. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un emplacement de déploiement pour le conteneur",
   "a": 1
  },
  {
   "l": "Un disque managé attaché au groupe de conteneurs",
   "a": 1
  },
  {
   "l": "Un volume Azure Files monté",
   "a": 0
  },
  {
   "l": "Des identifiants pour ACR4 (AcrPull)",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Informations d'identification du registre : oui</b>, pour tirer une image privée.</li><li><b>Volume Azure Files : oui</b>, pour la persistance.</li><li><b>Disque managé : non</b>, ACI ne prend pas en charge les disques managés.</li><li><b>Emplacement de déploiement : non</b>, c'est une fonction d'App Service.</li></ul>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "Créer"
  ],
  "title": "Créer une instance de conteneur",
  "menu": [
   "*Informations de base",
   "Avancé"
  ],
  "rows": [
   [
    "*Source de l'image",
    "ACR4 (identité AcrPull)"
   ],
   [
    "*Volume",
    "Partage Azure Files"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "ACI : registre privé = identifiants ; persistance = Azure Files."
}
);
