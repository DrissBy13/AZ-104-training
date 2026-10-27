/* Domaine 3 : calcul (lot C : D3-067 à D3-121) */
AZ.questions.push(
{
 "id": "D3-067",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le niveau de service d'Azure Container Registry adapté à chaque besoin, au coût le plus bas.</p><p>Pour répondre, faites glisser le niveau approprié vers chaque besoin. Chaque niveau peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Niveaux",
 "srcs": [
  "De base",
  "Standard",
  "Premium"
 ],
 "tgtHead": [
  "Besoin",
  "Niveau"
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
 "id": "D3-068",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez construire une image de conteneur à partir d'un Dockerfile et la placer dans le registre ACR1, sans installer Docker sur votre poste.</p><p>Quelle commande devez-vous utiliser ?</p>",
 "opts": [
  "az acr build --registry ACR1 --image app:v1 .",
  "az container create --image app:v1",
  "docker push ACR1/app:v1",
  "az acr import --name ACR1"
 ],
 "ans": 0,
 "expl": "<p><b>az acr build</b> (ACR Tasks) envoie le contexte de construction au registre, qui construit l'image dans Azure et la stocke. Aucun Docker local n'est nécessaire.</p><p>docker push demande Docker et une image déjà construite. az acr import copie une image depuis un autre registre. az container create lance un conteneur dans ACI.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az acr build --registry ACR1 --image app:v1 .",
    "Construit dans Azure (ACR Tasks)"
   ]
  ]
 },
 "keep": "Construire une image sans Docker local = az acr build."
},
{
 "id": "D3-069",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez copier l'image publique nginx:1.25 de Docker Hub dans ACR2, sans la télécharger sur votre poste.</p><p>Quelle commande devez-vous utiliser ?</p>",
 "opts": [
  "az acr login",
  "az acr import",
  "az acr build",
  "az acr repository delete"
 ],
 "ans": 1,
 "expl": "<p><b>az acr import</b> copie une image directement d'un registre (Docker Hub, un autre ACR, etc.) vers votre registre, côté serveur.</p><p>build construit une image depuis un Dockerfile. login authentifie le client Docker local. delete supprime un dépôt.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az acr import --name ACR2 --source docker.io/library/nginx:1.25",
    "Copie côté serveur"
   ]
  ]
 },
 "keep": "Copier une image d'un registre à l'autre = az acr import."
},
{
 "id": "D3-070",
 "dom": 3,
 "type": "single",
 "stem": "<p>Azure Container Instances doit tirer une image privée de ACR3. Vous ne voulez pas activer le compte administrateur du registre.</p><p>Quelle méthode est recommandée ?</p>",
 "opts": [
  "Le compte administrateur avec son mot de passe",
  "Rendre le registre public",
  "Une identité managée (ou un principal de service) avec le rôle AcrPull sur ACR3",
  "Copier l'image dans un compte de stockage"
 ],
 "ans": 2,
 "expl": "<p>On donne à l'identité qui tire l'image (identité managée du groupe de conteneurs, ou principal de service) le rôle <b>AcrPull</b> sur le registre. C'est le privilège minimum, sans mot de passe partagé.</p><p>Le <b>compte administrateur</b> est un compte unique avec tous les droits, déconseillé en production. Le niveau Standard ou Premium permet aussi l'accès anonyme en tirage, mais rendrait les images accessibles à tous.</p>",
 "portal": {
  "path": [
   "Registres de conteneurs",
   "ACR3"
  ],
  "title": "ACR3 | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)",
   "Clés d'accès"
  ],
  "rows": [
   [
    "*Rôle",
    "AcrPull"
   ],
   [
    "Membres",
    "Identité managée du groupe de conteneurs"
   ],
   [
    "Utilisateur administrateur",
    "Désactivé"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Tirer une image privée = AcrPull sur une identité ; éviter le compte administrateur."
},
{
 "id": "D3-071",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez attribuer le rôle adapté pour Azure Container Registry, en respectant le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "srcs": [
  "AcrPull",
  "AcrPush",
  "Contributeur",
  "Lecteur"
 ],
 "tgtHead": [
  "Besoin",
  "Rôle"
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
 "id": "D3-072",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez exécuter un conteneur de traitement nocturne qui dure 20 minutes, sans gérer de serveur ni d'orchestrateur, et ne payer que pendant son exécution.</p><p>Quel service devez-vous utiliser ?</p>",
 "opts": [
  "Un groupe de machines virtuelles identiques",
  "Une VM avec Docker allumée en permanence",
  "App Service plan Premium",
  "Azure Container Instances avec la stratégie de redémarrage OnFailure ou Never"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Container Instances</b> lance un conteneur en quelques secondes et facture à la seconde le CPU et la mémoire. Avec la stratégie de redémarrage <b>OnFailure</b> ou <b>Never</b>, le conteneur s'arrête à la fin du traitement et la facturation aussi.</p><p>Avec <b>Always</b> (par défaut), ACI relancerait le conteneur sans fin. Une VM ou un plan App Service coûterait en permanence.</p>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "Créer"
  ],
  "title": "Créer une instance de conteneur",
  "menu": [
   "Informations de base",
   "*Avancé"
  ],
  "rows": [
   [
    "*Stratégie de redémarrage",
    "En cas d'échec"
   ],
   [
    "Facturation",
    "À la seconde, pendant l'exécution"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Tâche ponctuelle en conteneur = ACI, redémarrage OnFailure ou Never."
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
 "id": "D3-074",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web et un conteneur de journalisation doivent tourner ensemble dans Azure Container Instances, partager la même adresse IP et le même cycle de vie, et communiquer par localhost.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Un groupe de conteneurs Linux contenant les deux conteneurs",
  "Un groupe à haute disponibilité",
  "Deux groupes de conteneurs séparés",
  "Deux registres de conteneurs"
 ],
 "ans": 0,
 "expl": "<p>Un <b>groupe de conteneurs</b> regroupe des conteneurs planifiés sur le même hôte, qui partagent le cycle de vie, le réseau (adresse IP, ports, localhost) et des volumes. C'est le modèle « sidecar ». Les groupes à plusieurs conteneurs ne sont pris en charge que pour <b>Linux</b>.</p><p>Deux groupes séparés auraient deux adresses IP.</p>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "aci-web"
  ],
  "title": "aci-web | Conteneurs",
  "menu": [
   "Vue d'ensemble",
   "*Conteneurs"
  ],
  "rows": [
   [
    "web",
    "Port 80"
   ],
   [
    "*journalisation",
    "Même IP, localhost"
   ],
   [
    "Type d'OS",
    "Linux"
   ]
  ]
 },
 "keep": "Conteneurs qui partagent IP et cycle de vie = un groupe de conteneurs (multi-conteneurs : Linux)."
},
{
 "id": "D3-075",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un conteneur dans Azure Container Instances doit conserver ses fichiers après un redémarrage.</p><p>Que devez-vous monter comme volume ?</p>",
 "opts": [
  "Un disque managé SSD Premium",
  "Un partage Azure Files",
  "Le disque temporaire de l'hôte",
  "Un conteneur blob"
 ],
 "ans": 1,
 "expl": "<p>Le système de fichiers d'un conteneur ACI est <b>éphémère</b>. Pour conserver des données, on monte un <b>partage Azure Files</b> comme volume (avec le nom du compte, le nom du partage et la clé). ACI ne prend pas en charge le montage de disques managés ni de conteneurs blob comme volumes.</p><p>Les volumes emptyDir partagent des données entre conteneurs d'un groupe, mais disparaissent avec le groupe.</p>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "Créer"
  ],
  "title": "Volumes",
  "rows": [
   [
    "*Type de volume",
    "Partage de fichiers Azure"
   ],
   [
    "Chemin de montage",
    "/mnt/data"
   ]
  ]
 },
 "keep": "Persistance dans ACI = volume Azure Files."
},
{
 "id": "D3-076",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un groupe de conteneurs ACI doit être joignable sur Internet par un nom stable, par exemple <code>app1.francecentral.azurecontainer.io</code>.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une zone DNS privée",
  "Un point de terminaison privé",
  "Une adresse IP publique avec une étiquette de nom DNS",
  "Une passerelle VPN"
 ],
 "ans": 2,
 "expl": "<p>À la création du groupe de conteneurs, on choisit une <b>adresse IP publique</b> et une <b>étiquette de nom DNS</b>, qui donne un nom du type <code>&lt;étiquette&gt;.&lt;région&gt;.azurecontainer.io</code>. L'adresse IP peut changer au redémarrage, mais le nom reste.</p>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "Créer"
  ],
  "title": "Mise en réseau",
  "menu": [
   "Informations de base",
   "*Mise en réseau"
  ],
  "rows": [
   [
    "Type de réseau",
    "Public"
   ],
   [
    "*Étiquette de nom DNS",
    "app1"
   ],
   [
    "FQDN",
    "app1.francecentral.azurecontainer.io"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Nom stable pour ACI = étiquette de nom DNS."
},
{
 "id": "D3-077",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un groupe de conteneurs ACI doit accéder à une base de données qui n'a qu'une adresse IP privée dans VNet1, sans exposition sur Internet.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Activer la géoréplication du registre",
  "Donner une adresse IP publique au groupe de conteneurs",
  "Utiliser la stratégie de redémarrage Never",
  "Déployer le groupe de conteneurs dans un sous-réseau délégué de VNet1"
 ],
 "ans": 3,
 "expl": "<p>ACI peut être déployé <b>dans un réseau virtuel</b>, dans un sous-réseau délégué à <code>Microsoft.ContainerInstance/containerGroups</code>. Le groupe reçoit une adresse IP privée et communique avec les autres ressources du réseau.</p>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "Créer"
  ],
  "title": "Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Type de réseau",
    "Privé"
   ],
   [
    "Sous-réseau",
    "VNet1/aci-subnet (délégué)"
   ]
  ]
 },
 "keep": "ACI dans un VNet = sous-réseau délégué à Microsoft.ContainerInstance."
},
{
 "id": "D3-078",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez un conteneur dans ACI avec 2 vCPU et 4 Go de mémoire. Une semaine plus tard, il manque de mémoire.</p><p>Comment augmenter la mémoire ?</p>",
 "opts": [
  "Redéployer le groupe de conteneurs avec une demande de ressources plus élevée",
  "Ajouter un disque de données",
  "Activer la mise à l'échelle automatique horizontale d'ACI",
  "Changer de stratégie de redémarrage"
 ],
 "ans": 0,
 "expl": "<p>Les ressources (CPU et mémoire) d'un conteneur ACI sont fixées dans sa définition. Pour les changer, on <b>redéploie</b> le groupe de conteneurs avec les nouvelles valeurs (dans les limites de la région).</p><p>ACI n'a pas de mise à l'échelle automatique intégrée : pour cela, on choisit plutôt Azure Container Apps.</p>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "aci-traitement"
  ],
  "title": "aci-traitement | Propriétés",
  "menu": [
   "*Propriétés"
  ],
  "rows": [
   [
    "*Mémoire (Gio)",
    "4 → 8 (redéploiement)"
   ],
   [
    "Mise à l'échelle auto",
    "Non disponible dans ACI"
   ]
  ]
 },
 "keep": "Changer CPU/mémoire d'ACI = redéployer le groupe."
},
{
 "id": "D3-079",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une API conteneurisée doit monter automatiquement en charge selon le nombre de requêtes HTTP, et descendre à <b>zéro</b> instance la nuit, sans gérer de cluster.</p><p>Quel service devez-vous utiliser ?</p>",
 "opts": [
  "Azure Container Registry",
  "Azure Container Apps",
  "Azure Container Instances",
  "Un groupe de machines virtuelles identiques"
 ],
 "ans": 1,
 "expl": "<p><b>Azure Container Apps</b> est un service serverless pour conteneurs. Il gère la mise à l'échelle automatique (basée sur KEDA) selon le trafic HTTP, des files d'attente ou d'autres événements, jusqu'à <b>zéro</b> instance. Il propose aussi l'entrée HTTPS, les révisions et la répartition du trafic.</p><p>ACI n'a pas de mise à l'échelle automatique. Un VMSS demande de gérer des VM. ACR stocke des images.</p>",
 "portal": {
  "path": [
   "Container Apps",
   "api-commandes"
  ],
  "title": "api-commandes | Mise à l'échelle",
  "menu": [
   "Vue d'ensemble",
   "*Mise à l'échelle",
   "Révisions"
  ],
  "rows": [
   [
    "*Réplicas min",
    "0"
   ],
   [
    "Réplicas max",
    "10"
   ],
   [
    "Règle",
    "HTTP · 50 requêtes simultanées"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Serverless, mise à l'échelle auto jusqu'à zéro = Azure Container Apps."
},
{
 "id": "D3-080",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez une nouvelle version de votre application dans Azure Container Apps. Vous voulez envoyer 10 % du trafic vers la nouvelle version et 90 % vers l'ancienne.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Deux environnements Container Apps",
  "Une stratégie de redémarrage",
  "Le mode multi-révisions avec une répartition du trafic entre révisions",
  "Deux registres de conteneurs"
 ],
 "ans": 2,
 "expl": "<p>Chaque déploiement d'une nouvelle configuration crée une <b>révision</b>. En mode <b>multi-révisions</b>, plusieurs révisions restent actives et on répartit le trafic entrant en pourcentages entre elles (déploiement progressif, tests A/B).</p>",
 "portal": {
  "path": [
   "Container Apps",
   "app1"
  ],
  "title": "app1 | Révisions et réplicas",
  "menu": [
   "*Révisions et réplicas"
  ],
  "rows": [
   [
    "*Mode de révision",
    "Multiple"
   ],
   [
    "app1--v1",
    "90 %"
   ],
   [
    "app1--v2",
    "10 %"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Répartir le trafic entre versions = mode multi-révisions."
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
 "srcs": [
  "Azure Container Registry",
  "Azure Container Instances",
  "Azure Container Apps"
 ],
 "tgtHead": [
  "Besoin",
  "Service"
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
 "id": "D3-083",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez créer une application web avec des emplacements de déploiement (slots) et la mise à l'échelle automatique, au coût le plus bas.</p><p>Quel niveau de plan App Service devez-vous choisir ?</p>",
 "opts": [
  "De base (Basic)",
  "Gratuit (Free)",
  "Partagé (Shared)",
  "Standard"
 ],
 "ans": 3,
 "expl": "<p>Les <b>emplacements de déploiement</b> et la <b>mise à l'échelle automatique</b> commencent au niveau <b>Standard</b> (5 emplacements). Premium en offre 20.</p><p>Le niveau De base permet la mise à l'échelle manuelle (jusqu'à 3 instances) et les domaines personnalisés avec TLS, mais pas les emplacements ni la mise à l'échelle automatique. Gratuit et Partagé sont destinés au développement et aux tests.</p>",
 "portal": {
  "path": [
   "Plans App Service",
   "Créer"
  ],
  "title": "Plan tarifaire",
  "rows": [
   [
    "De base B1",
    "Mise à l'échelle manuelle, TLS"
   ],
   [
    "*Standard S1",
    "Emplacements (5) + mise à l'échelle auto"
   ],
   [
    "Premium",
    "20 emplacements"
   ]
  ]
 },
 "keep": "Emplacements et mise à l'échelle auto = Standard minimum."
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
 "id": "D3-085",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web dans un plan Standard S1 devient lente en journée, quand le nombre d'utilisateurs triple. La nuit, une seule instance suffit.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une mise à l'échelle automatique horizontale (scale out) du plan, basée sur le CPU ou une planification",
  "Un passage au niveau Premium (scale up) permanent",
  "Une sauvegarde planifiée",
  "Un emplacement de déploiement supplémentaire"
 ],
 "ans": 0,
 "expl": "<p>La <b>mise à l'échelle horizontale</b> (scale out) ajoute des instances au plan quand la charge augmente, et en retire quand elle baisse. On peut la baser sur une métrique (CPU, mémoire, longueur de la file HTTP) ou sur une <b>planification</b> (journée/nuit).</p><p>La <b>mise à l'échelle verticale</b> (scale up) change la taille ou le niveau du plan : elle augmenterait le coût en permanence, y compris la nuit.</p>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP1"
  ],
  "title": "ASP1 | Scale out (plan App Service)",
  "menu": [
   "Scale up (plan App Service)",
   "*Scale out (plan App Service)"
  ],
  "rows": [
   [
    "*Mise à l'échelle automatique",
    "Personnalisée"
   ],
   [
    "Profil jour",
    "2 à 6 instances"
   ],
   [
    "Profil nuit",
    "1 instance"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Charge variable = scale out automatique ; scale up = instances plus grosses."
},
{
 "id": "D3-086",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web a besoin de plus de mémoire par instance, et d'une fonction réseau disponible uniquement au niveau Premium v3.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Activer Always On",
  "Mettre le plan App Service à l'échelle verticalement (scale up) vers Premium v3",
  "Ajouter des instances (scale out)",
  "Créer un emplacement de déploiement"
 ],
 "ans": 1,
 "expl": "<p>La <b>mise à l'échelle verticale</b> (scale up) change le niveau et la taille des instances du plan : plus de CPU, de mémoire et de fonctionnalités. Elle se fait en quelques secondes, sans redéployer l'application.</p><p>Ajouter des instances n'augmente pas la mémoire de chacune. Les deux autres options n'ajoutent pas de fonctionnalité de niveau.</p>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP1"
  ],
  "title": "ASP1 | Scale up (plan App Service)",
  "menu": [
   "*Scale up (plan App Service)",
   "Scale out (plan App Service)"
  ],
  "rows": [
   [
    "*Niveau",
    "Premium v3 P1v3"
   ]
  ],
  "btn": "Sélectionner"
 },
 "keep": "Plus de mémoire par instance ou fonctions de niveau = scale up."
},
{
 "id": "D3-087",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous avez trois applications web dans le même plan App Service Standard S2 avec 2 instances.</p><p>Comment ces applications utilisent-elles les ressources ?</p>",
 "opts": [
  "Chaque application est facturée comme un plan séparé",
  "Seule la première application tourne sur les 2 instances",
  "Les trois applications tournent sur les mêmes 2 instances et partagent leurs ressources",
  "Chaque application a ses propres 2 instances"
 ],
 "ans": 2,
 "expl": "<p>Un <b>plan App Service</b> définit un ensemble de machines (taille et nombre d'instances). Toutes les applications du plan tournent sur <b>toutes</b> ses instances et partagent CPU et mémoire. On paie le plan, pas chaque application.</p><p>Si une application consomme trop, il faut la déplacer dans un autre plan.</p>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP-S2"
  ],
  "title": "ASP-S2 | Applications",
  "menu": [
   "Vue d'ensemble",
   "*Applications"
  ],
  "rows": [
   [
    "Instances",
    "2"
   ],
   [
    "*Applications",
    "app1, app2, app3 (sur les 2 instances)"
   ]
  ]
 },
 "keep": "Les applications d'un plan partagent toutes ses instances ; on paie le plan."
},
{
 "id": "D3-088",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez déplacer l'application web WebApp2 vers un autre plan App Service, ASP2.</p><p>Quelle condition doit être remplie ?</p>",
 "opts": [
  "ASP2 doit être au niveau Gratuit",
  "WebApp2 doit être supprimée puis recréée",
  "ASP2 doit être dans un autre abonnement",
  "ASP2 doit être dans la même région et le même groupe de ressources (même espace de déploiement) que le plan actuel"
 ],
 "ans": 3,
 "expl": "<p>On peut changer le plan d'une application (Modifier le plan App Service) vers un plan de la <b>même région</b> et du même « espace web » (en pratique le même groupe de ressources et la même région d'origine). Sinon, il faut cloner ou redéployer l'application.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp2"
  ],
  "title": "WebApp2 | Modifier le plan App Service",
  "rows": [
   [
    "*Plans disponibles",
    "Même région et même espace de déploiement"
   ],
   [
    "ASP2",
    "France Central · RG1"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Changer de plan = même région (et même espace de déploiement)."
},
{
 "id": "D3-089",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez déployer une nouvelle version de WebApp3 sans interruption, la tester sur une URL distincte, puis la mettre en production.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
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
 "keep": "Déploiement sans coupure : emplacement, test, permutation (et retour arrière par permutation)."
},
{
 "id": "D3-090",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp4 a les emplacements production et staging. La chaîne de connexion de la base de données doit <b>rester</b> attachée à chaque emplacement (base de test pour staging, base de production pour production) lors d'une permutation.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Cocher « Paramètre d'emplacement de déploiement » sur la chaîne de connexion dans chaque emplacement",
  "Désactiver la permutation automatique",
  "Utiliser la même chaîne de connexion dans les deux emplacements",
  "Créer un troisième emplacement"
 ],
 "ans": 0,
 "expl": "<p>Un paramètre marqué <b>Paramètre d'emplacement de déploiement</b> (sticky, ou « collant ») reste attaché à l'emplacement : il ne suit pas le code lors d'une permutation. Les paramètres non cochés sont échangés avec le code.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp4",
   "staging"
  ],
  "title": "Variables d'environnement › Chaînes de connexion",
  "rows": [
   [
    "Nom",
    "SqlDb"
   ],
   [
    "*Paramètre d'emplacement de déploiement",
    "Coché"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "Paramètre qui reste sur l'emplacement = paramètre d'emplacement (sticky)."
},
{
 "id": "D3-091",
 "dom": 3,
 "type": "single",
 "stem": "<p>Chaque fois qu'un nouveau code est poussé dans l'emplacement staging de WebApp5, vous voulez qu'il soit automatiquement permuté en production après son préchauffage.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "La mise à l'échelle automatique",
  "La permutation automatique (auto swap) sur l'emplacement staging",
  "Le routage du trafic à 100 %",
  "Always On sur la production"
 ],
 "ans": 1,
 "expl": "<p>La <b>permutation automatique</b>, activée sur l'emplacement source (staging), permute avec l'emplacement cible dès que le déploiement est terminé et que l'application est préchauffée.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp5",
   "staging"
  ],
  "title": "staging | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Permutation automatique",
    "Activé · vers production"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Permuter automatiquement après déploiement = auto swap."
},
{
 "id": "D3-092",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez envoyer 20 % des utilisateurs de production vers l'emplacement beta de WebApp6, sans permutation, pour tester une nouvelle fonctionnalité.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une permutation avec aperçu",
  "Un équilibreur de charge",
  "Le routage du trafic (Test en production) avec 20 % vers beta",
  "Un second plan App Service"
 ],
 "ans": 2,
 "expl": "<p>Le <b>routage du trafic</b> des emplacements (Testing in production) envoie un pourcentage des requêtes de production vers un autre emplacement. Un cookie garde chaque utilisateur sur le même emplacement pendant sa session.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp6"
  ],
  "title": "WebApp6 | Emplacements de déploiement",
  "menu": [
   "*Emplacements de déploiement"
  ],
  "rows": [
   [
    "production",
    "80 %"
   ],
   [
    "*beta",
    "20 %"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Pourcentage d'utilisateurs vers un emplacement = routage du trafic."
},
{
 "id": "D3-093",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez associer le domaine personnalisé www.contoso.com à WebApp7.</p><p>Quels enregistrements DNS devez-vous créer chez votre hébergeur DNS ?</p>",
 "opts": [
  "Un enregistrement PTR",
  "Un enregistrement SRV",
  "Un enregistrement MX vers webapp7.azurewebsites.net",
  "Un CNAME www vers webapp7.azurewebsites.net, et un TXT asuid.www avec l'ID de vérification"
 ],
 "ans": 3,
 "expl": "<p>Pour un sous-domaine comme www, on crée un <b>CNAME</b> vers <code>webapp7.azurewebsites.net</code>, et un <b>TXT</b> <code>asuid.www</code> contenant l'ID de vérification du domaine (affiché dans le portail), qui prouve que vous possédez le domaine.</p><p>Pour le domaine racine (contoso.com), on utilise un enregistrement <b>A</b> vers l'adresse IP de l'application, plus le TXT <code>asuid</code>.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp7"
  ],
  "title": "Ajouter un domaine personnalisé",
  "rows": [
   [
    "*CNAME",
    "www → webapp7.azurewebsites.net"
   ],
   [
    "*TXT",
    "asuid.www → ID de vérification"
   ]
  ],
  "btn": "Valider"
 },
 "keep": "Sous-domaine = CNAME + TXT asuid ; racine = A + TXT asuid."
},
{
 "id": "D3-094",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp8 est dans un plan <b>Gratuit (F1)</b>. Vous voulez ajouter le domaine www.contoso.com, avec HTTPS.</p><p>Que devez-vous faire d'abord ?</p>",
 "opts": [
  "Passer le plan au niveau De base ou supérieur",
  "Créer un enregistrement MX",
  "Créer un emplacement de déploiement",
  "Activer Always On"
 ],
 "ans": 0,
 "expl": "<p>Le niveau <b>Gratuit</b> ne prend pas en charge les domaines personnalisés. Le niveau <b>Partagé</b> les accepte sans TLS. À partir de <b>De base</b>, on peut ajouter un domaine personnalisé avec un certificat TLS (y compris un certificat managé App Service gratuit).</p>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP-F1"
  ],
  "title": "Scale up (plan App Service)",
  "menu": [
   "*Scale up (plan App Service)"
  ],
  "rows": [
   [
    "Gratuit",
    "Pas de domaine personnalisé"
   ],
   [
    "*De base B1",
    "Domaine + TLS"
   ]
  ],
  "btn": "Sélectionner"
 },
 "keep": "Domaine personnalisé + HTTPS = De base minimum."
},
{
 "id": "D3-095",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez un certificat TLS gratuit, renouvelé automatiquement, pour www.contoso.com sur WebApp9.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Aucun : HTTPS est impossible sur un domaine personnalisé",
  "Un certificat managé App Service",
  "Un certificat de Key Vault généré manuellement chaque année",
  "Un certificat auto-signé"
 ],
 "ans": 1,
 "expl": "<p>Le <b>certificat managé App Service</b> est gratuit et renouvelé automatiquement pour un domaine personnalisé déjà validé. Il ne prend pas en charge les domaines génériques (*.contoso.com) et ne peut pas être exporté. Pour cela, on achète un certificat ou on en importe un depuis Key Vault.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp9"
  ],
  "title": "WebApp9 | Certificats",
  "menu": [
   "*Certificats"
  ],
  "rows": [
   [
    "*Certificat managé App Service",
    "www.contoso.com · gratuit, renouvelé"
   ],
   [
    "Limites",
    "Pas de générique, pas d'export"
   ]
  ],
  "btn": "+ Ajouter un certificat"
 },
 "keep": "TLS gratuit et auto-renouvelé = certificat managé App Service."
},
{
 "id": "D3-096",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp10 doit appeler une API hébergée sur une VM qui n'a qu'une adresse IP privée dans VNet2.</p><p>Que devez-vous configurer sur WebApp10 ?</p>",
 "opts": [
  "Un domaine personnalisé",
  "Un point de terminaison privé pour WebApp10",
  "L'intégration au réseau virtuel (VNet integration) avec un sous-réseau de VNet2",
  "Des restrictions d'accès"
 ],
 "ans": 2,
 "expl": "<p>L'<b>intégration au réseau virtuel</b> concerne le trafic <b>sortant</b> : l'application peut joindre les ressources du réseau virtuel (et, par lui, ce qui est appairé ou relié par VPN). Elle utilise un sous-réseau délégué dédié.</p><p>Un <b>point de terminaison privé</b> concerne le trafic <b>entrant</b> : il donne à l'application une adresse privée. Les restrictions d'accès filtrent aussi l'entrant.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp10"
  ],
  "title": "WebApp10 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Intégration au réseau virtuel (sortant)",
    "VNet2 / snet-webapp"
   ],
   [
    "Point de terminaison privé (entrant)",
    "Non"
   ]
  ]
 },
 "keep": "Sortant vers un VNet = intégration au réseau virtuel ; entrant privé = point de terminaison privé."
},
{
 "id": "D3-097",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp11 ne doit être accessible que depuis VNet3 et le site local relié par VPN, jamais depuis Internet.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un emplacement de déploiement",
  "Une adresse IP publique statique",
  "L'intégration au réseau virtuel uniquement",
  "Un point de terminaison privé pour WebApp11 dans VNet3, et désactiver l'accès public"
 ],
 "ans": 3,
 "expl": "<p>Le <b>point de terminaison privé</b> donne à l'application une adresse IP privée dans VNet3 : le trafic <b>entrant</b> arrive par le réseau privé (et par le VPN depuis le site local). On désactive ensuite l'<b>accès réseau public</b>.</p><p>L'intégration au réseau virtuel ne gère que le trafic sortant.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp11"
  ],
  "title": "WebApp11 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Points de terminaison privés",
    "1 (VNet3)"
   ],
   [
    "*Accès réseau public",
    "Désactivé"
   ]
  ]
 },
 "keep": "Entrant uniquement privé = point de terminaison privé + accès public désactivé."
},
{
 "id": "D3-098",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp12 doit n'accepter que le trafic venant de l'adresse IP publique de votre bureau, 203.0.113.0/24, sans changer l'architecture réseau.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Des restrictions d'accès avec une règle Autoriser pour 203.0.113.0/24",
  "Un point de terminaison de service",
  "Un pare-feu de compte de stockage",
  "Un groupe de sécurité réseau associé à l'application"
 ],
 "ans": 0,
 "expl": "<p>Les <b>restrictions d'accès</b> d'App Service sont une liste ordonnée de règles Autoriser/Refuser par adresse IP, étiquette de service ou sous-réseau (avec point de terminaison de service). Dès qu'une règle Autoriser existe, tout le reste est refusé.</p><p>On ne peut pas associer un NSG directement à une application web multilocataire.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp12"
  ],
  "title": "WebApp12 | Restrictions d'accès",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Autoriser",
    "203.0.113.0/24 · priorité 100"
   ],
   [
    "Refuser tout",
    "Implicite"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Filtrer l'entrant par IP = restrictions d'accès."
},
{
 "id": "D3-099",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp13, dans un plan De base, se met en veille après quelques minutes sans trafic. La première requête est alors très lente.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "Le routage du trafic",
  "Always On",
  "Les journaux d'application",
  "L'affinité ARR"
 ],
 "ans": 1,
 "expl": "<p><b>Always On</b> garde l'application chargée en envoyant régulièrement une requête, ce qui évite le déchargement après inactivité. Il est disponible à partir du niveau De base, et nécessaire pour les tâches web continues.</p><p>L'<b>affinité ARR</b> envoie un utilisateur toujours vers la même instance (sessions collantes).</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp13"
  ],
  "title": "WebApp13 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Always On",
    "Activé"
   ],
   [
    "Affinité ARR",
    "Activé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Éviter la mise en veille = Always On (De base et plus)."
},
{
 "id": "D3-100",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp14 tourne sur 4 instances. Une application sans état gagne en performance si les requêtes sont réparties uniformément, même pour un même utilisateur.</p><p>Que devez-vous désactiver ?</p>",
 "opts": [
  "HTTPS uniquement",
  "Le contrôle d'intégrité",
  "L'affinité ARR (sessions collantes)",
  "Always On"
 ],
 "ans": 2,
 "expl": "<p>L'<b>affinité ARR</b> place un cookie qui renvoie chaque utilisateur vers la même instance. Pour une application <b>sans état</b>, la désactiver répartit mieux la charge entre les instances.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp14"
  ],
  "title": "WebApp14 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Affinité ARR",
    "Désactivé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Application sans état = désactiver l'affinité ARR."
},
{
 "id": "D3-101",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une instance de WebApp15 devient parfois défaillante sans redémarrer. Vous voulez que le répartiteur de charge cesse de lui envoyer du trafic, puis la remplace si elle reste en échec.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Les journaux de serveur web",
  "Une alerte de budget",
  "Always On",
  "Le contrôle d'intégrité (Health check) avec un chemin comme /health"
 ],
 "ans": 3,
 "expl": "<p>Le <b>contrôle d'intégrité</b> interroge régulièrement un chemin de l'application sur chaque instance. Une instance qui répond mal est retirée de la rotation, puis remplacée si elle reste défaillante. Il faut au moins deux instances pour en profiter.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp15"
  ],
  "title": "WebApp15 | Contrôle d'intégrité",
  "menu": [
   "*Contrôle d'intégrité"
  ],
  "rows": [
   [
    "*Chemin",
    "/health"
   ],
   [
    "Seuil de basculement",
    "10 minutes"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Retirer une instance malade = contrôle d'intégrité (2 instances minimum)."
},
{
 "id": "D3-102",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez configurer des sauvegardes personnalisées de WebApp16 (fichiers et configuration) vers un compte de stockage, selon une planification.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "La fonctionnalité Sauvegardes d'App Service, avec un conteneur de stockage cible",
  "Azure Backup avec un coffre Recovery Services pour les VM",
  "Un instantané de disque managé",
  "Azure Site Recovery"
 ],
 "ans": 0,
 "expl": "<p>App Service a sa propre fonction de <b>sauvegarde</b> : sauvegardes automatiques intégrées (niveaux De base et plus), et sauvegardes <b>personnalisées</b> planifiées vers un conteneur de stockage, avec une base de données liée si besoin.</p><p>Azure Backup pour VM, les instantanés et Site Recovery ne s'appliquent pas aux applications App Service.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp16"
  ],
  "title": "WebApp16 | Sauvegardes",
  "menu": [
   "*Sauvegardes"
  ],
  "rows": [
   [
    "*Type",
    "Personnalisée"
   ],
   [
    "Stockage",
    "stbackup / webapp16"
   ],
   [
    "Planification",
    "Tous les jours"
   ]
  ],
  "btn": "Configurer"
 },
 "keep": "Sauvegarder une application web = Sauvegardes d'App Service."
},
{
 "id": "D3-103",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez que chaque commit dans la branche main d'un dépôt GitHub soit déployé automatiquement sur WebApp17.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Les journaux d'application",
  "Le Centre de déploiement avec GitHub comme source (GitHub Actions)",
  "Une sauvegarde planifiée",
  "Un emplacement de déploiement"
 ],
 "ans": 1,
 "expl": "<p>Le <b>Centre de déploiement</b> configure le déploiement continu depuis GitHub, Azure Repos, Bitbucket ou un dépôt Git local. Avec GitHub, il crée un workflow GitHub Actions qui construit et déploie à chaque commit.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp17"
  ],
  "title": "WebApp17 | Centre de déploiement",
  "menu": [
   "*Centre de déploiement"
  ],
  "rows": [
   [
    "*Source",
    "GitHub"
   ],
   [
    "Branche",
    "main"
   ],
   [
    "Fournisseur de build",
    "GitHub Actions"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Déploiement continu = Centre de déploiement."
},
{
 "id": "D3-104",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web doit lire un paramètre ApiUrl différent en développement et en production, sans modifier le code.</p><p>Où devez-vous définir ce paramètre ?</p>",
 "opts": [
  "Dans un verrou de ressource",
  "Dans le plan App Service",
  "Dans les paramètres d'application de chaque application (variables d'environnement)",
  "Dans une étiquette Azure"
 ],
 "ans": 2,
 "expl": "<p>Les <b>paramètres d'application</b> (Configuration > Variables d'environnement) sont exposés à l'application comme variables d'environnement et remplacent les valeurs du fichier de configuration. Ils peuvent référencer un secret Key Vault (<code>@Microsoft.KeyVault(...)</code>).</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Variables d'environnement",
  "menu": [
   "*Variables d'environnement"
  ],
  "rows": [
   [
    "*ApiUrl",
    "https://api.contoso.com"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "Configuration par environnement = paramètres d'application."
},
{
 "id": "D3-105",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web lit une chaîne de connexion. Vous ne voulez pas que le secret apparaisse dans la configuration d'App Service.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Chiffrer le secret avec une SAS",
  "Mettre le secret dans le code source",
  "Mettre le secret dans une étiquette",
  "Stocker le secret dans Key Vault et utiliser une référence Key Vault dans le paramètre, avec l'identité managée de l'application"
 ],
 "ans": 3,
 "expl": "<p>Une <b>référence Key Vault</b> (<code>@Microsoft.KeyVault(SecretUri=...)</code>) dans un paramètre d'application fait lire la valeur dans Key Vault au démarrage, avec l'<b>identité managée</b> de l'application, qui doit pouvoir lire les secrets.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "Variables d'environnement",
  "rows": [
   [
    "*SqlConnection",
    "@Microsoft.KeyVault(SecretUri=https://kv1.vault.azure.net/secrets/sql)"
   ],
   [
    "Identité",
    "Affectée par le système, Utilisateur des secrets Key Vault"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "Secret hors de la configuration = référence Key Vault + identité managée."
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
 "tpl": "az {0} create --resource-group RG1 --name hello --image mcr.microsoft.com/azuredocs/aci-helloworld {1} hello-demo42 --ports 80",
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
 "keep": "ACI en CLI = az container create (--dns-name-label pour le nom public)."
},
{
 "id": "D3-110",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez créer un plan App Service Linux de niveau Standard S1, puis une application web Node.js, avec Azure CLI.</p><p>Comment devez-vous compléter les commandes ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az appservice plan create --name ASP1 --resource-group RG1 --sku {0} {1}<br>az webapp create --name webapp42 --resource-group RG1 --plan ASP1 --runtime \"NODE:20-lts\"",
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
 "keep": "Plan Linux = --is-linux ; sinon Windows."
},
{
 "id": "D3-111",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez permuter l'emplacement staging de webapp43 avec la production, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az webapp deployment slot {0} --name webapp43 --resource-group RG1 --slot staging {1} production",
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
 "keep": "Permuter en CLI = az webapp deployment slot swap."
},
{
 "id": "D3-112",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez une application web Linux pour une API Python. Elle doit pouvoir utiliser des emplacements de déploiement, au coût le plus bas.</p><p>Comment devez-vous configurer l'application ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
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
 "keep": "Python sur App Service = Linux ; emplacements = Standard."
},
{
 "id": "D3-113",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous configurez la mise à l'échelle automatique du plan App Service ASP3. Il doit garder au moins 2 instances, au plus 8, et ajouter une instance quand le CPU moyen dépasse 70 % pendant 10 minutes.</p><p>Comment devez-vous configurer la règle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
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
 "keep": "Mise à l'échelle auto : limites + règle d'augmentation + règle de diminution."
},
{
 "id": "D3-114",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez ajouter un emplacement de déploiement nommé staging à WebApp19.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
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
 "keep": "Emplacements = page Emplacements de déploiement ; source du code = Centre de déploiement."
},
{
 "id": "D3-115",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>WebApp20 doit pouvoir joindre une base de données qui n'a qu'une adresse privée dans VNet4.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
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
 "keep": "Réseau d'une application web = page Mise en réseau (entrant et sortant)."
},
{
 "id": "D3-116",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez réduire le temps d'indisponibilité lors des déploiements de WebApp21, et pouvoir revenir rapidement à la version précédente.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Désactiver Always On",
  "Passer le plan au niveau De base",
  "Passer le plan au niveau Standard ou supérieur",
  "Déployer dans un emplacement staging puis permuter"
 ],
 "ans": [
  2,
  3
 ],
 "expl": "<ul><li><b>Standard ou plus : oui</b>, condition pour les emplacements de déploiement.</li><li><b>Staging et permutation : oui.</b> La permutation se fait sans interruption, et une seconde permutation ramène l'ancienne version.</li><li><b>De base : non</b>, pas d'emplacements.</li><li><b>Désactiver Always On : non</b>, cela ralentirait au contraire le démarrage.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "WebApp21"
  ],
  "title": "WebApp21 | Emplacements de déploiement",
  "menu": [
   "*Emplacements de déploiement"
  ],
  "rows": [
   [
    "Niveau requis",
    "Standard ou plus"
   ],
   [
    "*staging",
    "Permuter / revenir en arrière"
   ]
  ],
  "btn": "Permuter"
 },
 "keep": "Déploiement sans coupure + retour arrière = emplacements (Standard+)."
},
{
 "id": "D3-117",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Une application ACI doit tirer une image privée de ACR4 et écrire des fichiers persistants.</p><p>Quelles <b>deux</b> configurations sont nécessaires ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Un emplacement de déploiement",
  "Un disque managé attaché au groupe de conteneurs",
  "Un volume Azure Files monté dans le conteneur",
  "Des informations d'identification pour ACR4 (identité avec AcrPull ou principal de service)"
 ],
 "ans": [
  2,
  3
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
},
{
 "id": "D3-118",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web dans un plan Premium doit continuer de fonctionner si un centre de données de la région tombe en panne.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "La redondance de zone du plan App Service (au moins 2 instances)",
  "Un emplacement de déploiement",
  "Les sauvegardes planifiées",
  "Always On"
 ],
 "ans": 0,
 "expl": "<p>Un plan Premium v2/v3 (ou Isolé v2) peut être <b>redondant interzone</b> : ses instances sont réparties sur plusieurs zones de disponibilité de la région. Il faut au moins 2 instances (3 étaient requises à l'origine).</p><p>Les emplacements et Always On ne protègent pas d'une panne de zone. Les sauvegardes permettent de restaurer, pas de rester disponible.</p>",
 "portal": {
  "path": [
   "Plans App Service",
   "Créer"
  ],
  "title": "Créer un plan App Service",
  "menu": [
   "*Informations de base"
  ],
  "rows": [
   [
    "Niveau",
    "Premium v3"
   ],
   [
    "*Redondance de zone",
    "Activé (2 instances minimum)"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Panne d'un centre de données = plan redondant interzone."
},
{
 "id": "D3-119",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web doit être disponible même si toute la région France Central tombe en panne.</p><p>Quelle architecture devez-vous mettre en place ?</p>",
 "opts": [
  "Un emplacement de déploiement dans France South",
  "Deux applications dans deux régions, derrière Azure Front Door ou Traffic Manager",
  "Un plan avec 10 instances dans France Central",
  "La redondance de zone"
 ],
 "ans": 1,
 "expl": "<p>Pour survivre à la panne d'une <b>région</b>, il faut l'application dans <b>deux régions</b>, avec un service global qui dirige le trafic vers la région saine : <b>Azure Front Door</b> (HTTP, couche 7) ou <b>Traffic Manager</b> (DNS).</p><p>Les instances et la redondance de zone restent dans la région. Un emplacement est dans la même région que son application.</p>",
 "portal": {
  "path": [
   "Front Door et CDN",
   "fd-app"
  ],
  "title": "fd-app | Groupes d'origines",
  "menu": [
   "*Groupes d'origines"
  ],
  "rows": [
   [
    "*Origine 1",
    "webapp-fc (France Central)"
   ],
   [
    "*Origine 2",
    "webapp-we (West Europe)"
   ]
  ]
 },
 "keep": "Panne d'une région = deux régions + Front Door ou Traffic Manager."
},
{
 "id": "D3-120",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez déployer une application conteneurisée dans App Service, à partir d'une image de ACR5.</p><p>Quelle option devez-vous choisir pour <b>Publier</b> lors de la création de l'application web ?</p>",
 "opts": [
  "Fonction",
  "Code",
  "Conteneur",
  "Application web statique"
 ],
 "ans": 2,
 "expl": "<p>App Service peut exécuter une <b>image de conteneur</b> (Linux ou Windows). On choisit <b>Conteneur</b>, puis la source de l'image (ACR, Docker Hub, autre registre) et l'authentification (identité managée avec AcrPull de préférence).</p>",
 "portal": {
  "path": [
   "App Services",
   "Créer"
  ],
  "title": "Créer une application web",
  "menu": [
   "*Informations de base",
   "Conteneur"
  ],
  "rows": [
   [
    "*Publier",
    "Conteneur"
   ],
   [
    "Source d'image",
    "Azure Container Registry · ACR5"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Image de conteneur sur App Service = Publier : Conteneur."
},
{
 "id": "D3-121",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez héberger 15 petites applications web peu fréquentées, au coût le plus bas, avec des domaines personnalisés et HTTPS.</p><p>Quelle solution est la plus économique ?</p>",
 "opts": [
  "15 plans Premium v3",
  "15 plans De base, un par application",
  "15 VM de série B",
  "Un seul plan De base (ou Standard) qui héberge les 15 applications"
 ],
 "ans": 3,
 "expl": "<p>On paie le <b>plan</b>, pas l'application : un seul plan peut héberger plusieurs applications qui partagent ses instances. Pour des applications peu fréquentées, un plan De base (ou Standard si l'on veut des emplacements ou la mise à l'échelle automatique) suffit.</p>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP-Mutualise"
  ],
  "title": "ASP-Mutualise | Applications",
  "menu": [
   "*Applications"
  ],
  "rows": [
   [
    "*Applications",
    "15"
   ],
   [
    "Niveau",
    "De base B1"
   ]
  ]
 },
 "keep": "Plusieurs petites applications = un seul plan partagé."
}
);
