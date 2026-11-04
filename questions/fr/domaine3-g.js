/* Domaine 3 : ressources de calcul (lot G : D3-301 à D3-333, questions à réponses multiples issues de la fusion des QCM) */
AZ.questions.push(
{
 "id": "D3-301",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous déployez des conteneurs dans Azure Container Instances (ACI). Que devez-vous faire ou savoir pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Deux conteneurs partagent la même IP, le même cycle de vie et communiquent par localhost :",
   "o": [
    "Un groupe de conteneurs avec les deux",
    "Un groupe à haute disponibilité",
    "Deux groupes de conteneurs séparés",
    "Deux registres de conteneurs distincts"
   ],
   "a": 0
  },
  {
   "l": "Un conteneur déployé avec 2 vCPU et 4 Go manque de mémoire :",
   "o": [
    "Redéployer avec une demande de ressources plus élevée",
    "Ajouter un disque de données au groupe de conteneurs",
    "Activer la mise à l'échelle automatique d'ACI",
    "Changer la stratégie de redémarrage en Always"
   ],
   "a": 0
  },
  {
   "l": "Format du fichier de définition accepté par az container create --file :",
   "o": [
    "YAML",
    "fichier .bicepparam",
    "CSV",
    "Dockerfile"
   ],
   "a": 0
  },
  {
   "l": "Contrainte pour exécuter un conteneur Windows :",
   "o": [
    "Un groupe ne contient qu'un conteneur Windows",
    "Les conteneurs Windows ne sont pas pris en charge",
    "Les conteneurs Windows nécessitent un disque Ultra",
    "Les conteneurs Windows doivent être dans un plan App Service"
   ],
   "a": 0
  },
  {
   "l": "Tirer une image privée de ACR3 sans activer le compte administrateur :",
   "o": [
    "Le compte administrateur du registre",
    "Rendre le registre public en lecture",
    "Une identité managée avec AcrPull",
    "Copier l'image dans un compte de stockage"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Deux conteneurs partagent la même IP, le même cycle de vie et communiquent par localhost :</b></p><p>Un <b>groupe de conteneurs</b> regroupe des conteneurs planifiés sur le même hôte, qui partagent le cycle de vie, le réseau (adresse IP, ports, localhost) et des volumes. C'est le modèle « sidecar ». Les groupes à plusieurs conteneurs ne sont pris en charge que pour <b>Linux</b>.</p><p>Deux groupes séparés auraient deux adresses IP.</p><p><b>2. Un conteneur déployé avec 2 vCPU et 4 Go manque de mémoire :</b></p><p>Les ressources (CPU et mémoire) d'un conteneur ACI sont fixées dans sa définition. Pour les changer, on <b>redéploie</b> le groupe de conteneurs avec les nouvelles valeurs (dans les limites de la région).</p><p>ACI n'a pas de mise à l'échelle automatique intégrée : pour cela, on choisit plutôt Azure Container Apps.</p><p><b>3. Format du fichier de définition accepté par az container create --file :</b></p><p>Pour un groupe à <b>plusieurs conteneurs</b>, on décrit le groupe dans un fichier <b>YAML</b> (passé avec <code>--file</code>) ou dans un modèle ARM/Bicep. La CLI seule, sans fichier, ne crée qu'un conteneur.</p><p>Un Dockerfile décrit la construction d'une image, pas un déploiement.</p><p><b>4. Contrainte pour exécuter un conteneur Windows :</b></p><p>ACI prend en charge les conteneurs <b>Windows</b>, mais un groupe Windows ne contient qu'<b>un seul</b> conteneur. Les fonctions comme les groupes multi-conteneurs ou certains volumes sont réservées à Linux.</p><p><b>5. Tirer une image privée de ACR3 sans activer le compte administrateur :</b></p><p>On donne à l'identité qui tire l'image (identité managée du groupe de conteneurs, ou principal de service) le rôle <b>AcrPull</b> sur le registre. C'est le privilège minimum, sans mot de passe partagé.</p><p>Le <b>compte administrateur</b> est un compte unique avec tous les droits, déconseillé en production. Le niveau Standard ou Premium permet aussi l'accès anonyme en tirage, mais rendrait les images accessibles à tous.</p>",
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
 "keep": "Conteneurs qui partagent IP et cycle de vie = un groupe de conteneurs (multi-conteneurs : Linux). Changer CPU/mémoire d'ACI = redéployer le groupe. Groupe ACI multi-conteneurs = fichier YAML (ou ARM/Bicep). ACI Windows = un seul conteneur par groupe. Tirer une image privée = AcrPull sur une identité ; éviter le compte administrateur."
},
{
 "id": "D3-302",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Les groupes de conteneurs ACI doivent être joignables et conserver des données. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Joignable sur Internet par un nom stable app1.francecentral.azurecontainer.io :",
   "o": [
    "Une zone DNS privée liée au groupe",
    "Un point de terminaison privé",
    "Une IP publique avec étiquette DNS",
    "Une passerelle VPN point à site"
   ],
   "a": 2
  },
  {
   "l": "Accès à une base de données qui n'a qu'une IP privée dans VNet1 :",
   "o": [
    "Activer la géoréplication du registre",
    "Donner une IP publique au groupe de conteneurs",
    "Utiliser la stratégie de redémarrage Never",
    "Déployer dans un sous-réseau délégué de VNet1"
   ],
   "a": 3
  },
  {
   "l": "Exposer une API sur le port 8080 :",
   "o": [
    "Un plan App Service pour exposer le port",
    "Un équilibreur de charge obligatoire devant le groupe",
    "Une règle de mise à l'échelle sur le port 8080",
    "Le port 8080 exposé (et une IP publique)"
   ],
   "a": 3
  },
  {
   "l": "Conserver les fichiers après un redémarrage — volume :",
   "o": [
    "Un disque managé SSD Premium",
    "Un partage Azure Files",
    "Le disque temporaire de l'hôte",
    "Un conteneur blob"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Joignable sur Internet par un nom stable app1.francecentral.azurecontainer.io :</b></p><p>À la création du groupe de conteneurs, on choisit une <b>adresse IP publique</b> et une <b>étiquette de nom DNS</b>, qui donne un nom du type <code>&lt;étiquette&gt;.&lt;région&gt;.azurecontainer.io</code>. L'adresse IP peut changer au redémarrage, mais le nom reste.</p><p><b>2. Accès à une base de données qui n'a qu'une IP privée dans VNet1 :</b></p><p>ACI peut être déployé <b>dans un réseau virtuel</b>, dans un sous-réseau délégué à <code>Microsoft.ContainerInstance/containerGroups</code>. Le groupe reçoit une adresse IP privée et communique avec les autres ressources du réseau.</p><p><b>3. Exposer une API sur le port 8080 :</b></p><p>Les ports à ouvrir se déclarent dans le conteneur et dans le groupe de conteneurs (paramètre <code>--ports 8080</code>). Une adresse IP publique ou un déploiement dans un réseau virtuel rend le groupe joignable. Aucun équilibreur n'est nécessaire.</p><p><b>4. Conserver les fichiers après un redémarrage — volume :</b></p><p>Le système de fichiers d'un conteneur ACI est <b>éphémère</b>. Pour conserver des données, on monte un <b>partage Azure Files</b> comme volume (avec le nom du compte, le nom du partage et la clé). ACI ne prend pas en charge le montage de disques managés ni de conteneurs blob comme volumes.</p><p>Les volumes emptyDir partagent des données entre conteneurs d'un groupe, mais disparaissent avec le groupe.</p>",
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
 "keep": "Nom stable pour ACI = étiquette de nom DNS. ACI dans un VNet = sous-réseau délégué à Microsoft.ContainerInstance. Exposer un port ACI = le déclarer dans les ports du groupe. Persistance dans ACI = volume Azure Files."
},
{
 "id": "D3-303",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous hébergez des microservices dans Azure Container Apps. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Envoyer 10 % du trafic vers la nouvelle version, 90 % vers l'ancienne :",
   "o": [
    "Deux environnements Container Apps distincts",
    "Une stratégie de redémarrage par révision",
    "Le mode multi-révisions avec répartition du trafic",
    "Deux registres de conteneurs, un par version"
   ],
   "a": 2
  },
  {
   "l": "Réseau virtuel et espace Log Analytics communs à plusieurs applications :",
   "o": [
    "Dans le registre de conteneurs",
    "Dans le plan App Service associé",
    "Dans l'environnement Container Apps",
    "Dans chaque révision de l'application"
   ],
   "a": 2
  },
  {
   "l": "Traitement lancé chaque nuit à 2 h, qui s'arrête ensuite :",
   "o": [
    "Une nouvelle révision chaque jour",
    "Un groupe ACI avec la stratégie Always",
    "Une application avec entrée externe",
    "Un travail Container Apps planifié"
   ],
   "a": 3
  },
  {
   "l": "Lire un mot de passe sans l'écrire en clair dans la définition :",
   "o": [
    "Une étiquette de ressource sur l'application",
    "Le nom de la révision active",
    "Un secret Container Apps (variable d'environnement)",
    "Un paramètre de l'espace Log Analytics de l'environnement"
   ],
   "a": 2
  },
  {
   "l": "Application joignable seulement par les autres applications de l'environnement — entrée :",
   "o": [
    "Désactivée",
    "Activée, limitée à l'environnement",
    "Activée, avec un trafic accepté de partout",
    "Activée avec une adresse IP publique statique"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Envoyer 10 % du trafic vers la nouvelle version, 90 % vers l'ancienne :</b></p><p>Chaque déploiement d'une nouvelle configuration crée une <b>révision</b>. En mode <b>multi-révisions</b>, plusieurs révisions restent actives et on répartit le trafic entrant en pourcentages entre elles (déploiement progressif, tests A/B).</p><p><b>2. Réseau virtuel et espace Log Analytics communs à plusieurs applications :</b></p><p>L'<b>environnement</b> Container Apps est la limite sécurisée qui regroupe des applications : il définit le réseau virtuel, la journalisation (Log Analytics) et les profils de charge de travail. Les applications d'un même environnement communiquent entre elles.</p><p><b>3. Traitement lancé chaque nuit à 2 h, qui s'arrête ensuite :</b></p><p>Les <b>travaux</b> Container Apps exécutent des conteneurs qui se terminent : déclenchement <b>manuel</b>, <b>planifié</b> (expression cron) ou <b>par événement</b>. Ils conviennent mieux qu'une application qui tourne en permanence.</p><p><b>4. Lire un mot de passe sans l'écrire en clair dans la définition :</b></p><p>Container Apps gère des <b>secrets</b> au niveau de l'application, qui peuvent référencer un secret <b>Key Vault</b> avec l'identité managée de l'application. Une variable d'environnement les référence avec <code>secretRef</code>.</p><p><b>5. Application joignable seulement par les autres applications de l'environnement — entrée :</b></p><p>L'<b>entrée interne</b> (limitée à l'environnement) rend l'application joignable uniquement par les autres applications de l'environnement, ou par le réseau virtuel de l'environnement. L'entrée <b>externe</b> l'exposerait à Internet. Sans entrée, l'application ne reçoit aucune requête HTTP (utile pour des traitements en arrière-plan).</p>",
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
 "keep": "Répartir le trafic entre versions = mode multi-révisions. Réseau et journaux communs = environnement Container Apps. Conteneur qui tourne puis s'arrête = travail Container Apps (manuel, planifié, événement). Secret dans Container Apps = secret de l'application (Key Vault possible) + secretRef. Accessible seulement dans l'environnement = entrée interne."
},
{
 "id": "D3-304",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Plusieurs équipes demandent un service de calcul. Vous devez choisir le service qui répond le mieux à chaque besoin.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Services",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "Azure Container Instances",
  "Azure Container Apps",
  "Groupe identique en orchestration Flexible",
  "App Service Environment v3",
  "Un plan App Service De base partagé",
  "Azure Virtual Desktop",
  "Azure Batch",
  "Azure Kubernetes Service"
 ],
 "tgts": [
  {
   "l": "Conteneur nocturne de 20 minutes, sans serveur ni orchestrateur, payé à l'exécution",
   "a": 0
  },
  {
   "l": "Montée en charge selon les requêtes HTTP et zéro instance la nuit, sans cluster",
   "a": 1
  },
  {
   "l": "Mélanger des tailles de VM et ajouter des VM gérées individuellement",
   "a": 2
  },
  {
   "l": "Applications web totalement isolées dans leur réseau virtuel, très nombreuses instances",
   "a": 3
  },
  {
   "l": "15 petites applications peu fréquentées, domaines personnalisés et HTTPS, coût minimal",
   "a": 4
  },
  {
   "l": "Bureau Windows dans un navigateur pour 50 utilisateurs sur des hôtes de sessions partagés",
   "a": 5
  },
  {
   "l": "500 VM pendant 2 heures chaque nuit pour des simulations parallèles, puis aucune",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Conteneur nocturne de 20 minutes, sans serveur ni orchestrateur, payé à l'exécution</b></p><p><b>Azure Container Instances</b> lance un conteneur en quelques secondes et facture à la seconde le CPU et la mémoire. Avec la stratégie de redémarrage <b>OnFailure</b> ou <b>Never</b>, le conteneur s'arrête à la fin du traitement et la facturation aussi.</p><p>Avec <b>Always</b> (par défaut), ACI relancerait le conteneur sans fin. Une VM ou un plan App Service coûterait en permanence.</p><p><b>2. Montée en charge selon les requêtes HTTP et zéro instance la nuit, sans cluster</b></p><p><b>Azure Container Apps</b> est un service serverless pour conteneurs. Il gère la mise à l'échelle automatique (basée sur KEDA) selon le trafic HTTP, des files d'attente ou d'autres événements, jusqu'à <b>zéro</b> instance. Il propose aussi l'entrée HTTPS, les révisions et la répartition du trafic.</p><p>ACI n'a pas de mise à l'échelle automatique. Un VMSS demande de gérer des VM. ACR stocke des images.</p><p><b>3. Mélanger des tailles de VM et ajouter des VM gérées individuellement</b></p><p>Le mode d'orchestration <b>Flexible</b> gère des VM standard (avec leurs propres ressources), permet des tailles différentes et la répartition sur des zones et des domaines d'erreur. C'est le mode recommandé pour les nouvelles charges.</p><p>Le mode <b>Uniforme</b> utilise un modèle unique : toutes les instances sont identiques.</p><p><b>4. Applications web totalement isolées dans leur réseau virtuel, très nombreuses instances</b></p><p>Un <b>App Service Environment</b> v3 est un déploiement d'App Service à <b>locataire unique</b>, injecté dans un sous-réseau de votre réseau virtuel, avec les plans <b>Isolé v2</b>. Il convient aux exigences d'isolement fort et de grande échelle.</p><p>L'intégration au réseau virtuel d'un plan Premium ne concerne que le trafic sortant ; l'infrastructure reste partagée.</p><p><b>5. 15 petites applications peu fréquentées, domaines personnalisés et HTTPS, coût minimal</b></p><p>On paie le <b>plan</b>, pas l'application : un seul plan peut héberger plusieurs applications qui partagent ses instances. Pour des applications peu fréquentées, un plan De base (ou Standard si l'on veut des emplacements ou la mise à l'échelle automatique) suffit.</p><p><b>6. Bureau Windows dans un navigateur pour 50 utilisateurs sur des hôtes de sessions partagés</b></p><p><b>Azure Virtual Desktop</b> fournit des bureaux et applications Windows virtuels, avec des hôtes de session multisession partagés, accessibles par client ou navigateur. Ce service n'est pas au cœur de l'AZ-104, mais il est bon de savoir le reconnaître face aux autres options de calcul.</p><p><b>7. 500 VM pendant 2 heures chaque nuit pour des simulations parallèles, puis aucune</b></p><p>Un <b>groupe de machines virtuelles identiques</b> crée et supprime des centaines de VM identiques selon le besoin (planifié ou automatique), jusqu'à zéro. <b>Azure Batch</b> pilote ce type de calcul parallèle à grande échelle. Combiner avec des VM Spot réduit encore le coût.</p>",
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
 "keep": "Tâche ponctuelle en conteneur = ACI, redémarrage OnFailure ou Never. Serverless, mise à l'échelle auto jusqu'à zéro = Azure Container Apps. Tailles mélangées, VM standard = orchestration Flexible. Isolement total dans votre VNet = App Service Environment v3. Plusieurs petites applications = un seul plan partagé. Bureaux Windows virtuels partagés = Azure Virtual Desktop. Beaucoup de VM identiques ponctuellement = VMSS (ou Batch), jusqu'à zéro."
},
{
 "id": "D3-305",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous mettez à jour l'image et le logiciel de plusieurs groupes de machines virtuelles identiques. Que devez-vous faire ou choisir pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Déployer la nouvelle image par lots, chaque lot sain avant le suivant — stratégie :",
   "o": [
    "Manuelle",
    "Aucune",
    "Propagée (Rolling)",
    "Automatique, sans ordre défini"
   ],
   "a": 2
  },
  {
   "l": "VMSS10 en mise à niveau Manuelle : les instances gardent l'ancienne image :",
   "o": [
    "Mettre à niveau les instances (update-instances)",
    "Redéployer le VMSS sur d'autres hôtes",
    "Augmenter le temps de refroidissement",
    "Rien : elles seront mises à jour au prochain redémarrage"
   ],
   "a": 0
  },
  {
   "l": "Un logiciel doit être installé sur toutes les instances de VMSS11, futures comprises :",
   "o": [
    "Dans une étiquette du groupe identique",
    "Sur chaque instance, à la main, par une session RDP",
    "Dans le modèle, puis mettre à niveau les instances",
    "Dans le plan App Service associé"
   ],
   "a": 2
  },
  {
   "l": "Répartir VMSS6 entre les trois zones — moment de la configuration :",
   "o": [
    "Lors de la mise à niveau des instances",
    "À tout moment, en modifiant les propriétés",
    "À la création du groupe identique",
    "Après avoir ajouté un équilibreur de charge"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Déployer la nouvelle image par lots, chaque lot sain avant le suivant — stratégie :</b></p><p>La stratégie <b>Propagée</b> met à jour les instances par lots, avec une pause et une vérification de l'intégrité (sonde ou extension d'intégrité de l'application) entre les lots.</p><ul><li><b>Manuelle</b> : rien n'est mis à jour tant que vous ne mettez pas à niveau chaque instance.</li><li><b>Automatique</b> : toutes les instances peuvent être mises à jour en même temps, dans un ordre quelconque.</li></ul><p><b>2. VMSS10 en mise à niveau Manuelle : les instances gardent l'ancienne image :</b></p><p>En mode <b>Manuel</b>, le modèle du groupe est mis à jour, mais chaque instance garde l'ancien modèle jusqu'à ce qu'on la <b>mette à niveau</b> (portail : Mettre à niveau, ou CLI <code>az vmss update-instances</code>). Les nouvelles instances créées par la mise à l'échelle utilisent directement le nouveau modèle.</p><p><b>3. Un logiciel doit être installé sur toutes les instances de VMSS11, futures comprises :</b></p><p>Le <b>modèle</b> du groupe (image, extensions, applications de VM) décrit toutes les instances. On le met à jour, puis on <b>met à niveau</b> les instances existantes selon la stratégie de mise à niveau. Les nouvelles instances utilisent automatiquement le nouveau modèle.</p><p><b>4. Répartir VMSS6 entre les trois zones — moment de la configuration :</b></p><p>Les <b>zones</b> d'un groupe de machines virtuelles identiques (et d'une VM) se choisissent à la <b>création</b>. Pour un groupe existant, l'ajout de zones est limité ; en pratique, on recrée le groupe.</p><p>L'équilibreur de charge doit être de SKU Standard (redondant interzone) pour répartir le trafic entre zones.</p>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS2"
  ],
  "title": "VMSS2 | Stratégie de mise à niveau",
  "menu": [
   "*Mise à niveau"
  ],
  "rows": [
   [
    "*Mode",
    "Propagée (Rolling)"
   ],
   [
    "Taille du lot",
    "20 %"
   ],
   [
    "Pause entre les lots",
    "PT5S"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Par lots, avec contrôle d'intégrité = Propagée. Mode Manuel = mettre à niveau les instances soi-même. Tout ce qui doit être sur chaque instance = dans le modèle du groupe. Zones = choisies à la création."
},
{
 "id": "D3-306",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous exploitez plusieurs groupes identiques en production. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Supprimer toujours les VM les plus récentes en premier — stratégie de diminution :",
   "o": [
    "Default",
    "Manual",
    "OldestVM",
    "NewestVM"
   ],
   "a": 3
  },
  {
   "l": "Une instance qui exécute un traitement critique ne doit pas être supprimée en diminution :",
   "o": [
    "La protection contre la diminution",
    "La stratégie de diminution OldestVM",
    "Un verrou Suppression impossible sur VMSS3",
    "Un nombre minimal d'instances plus élevé"
   ],
   "a": 0
  },
  {
   "l": "Remplacer automatiquement les instances en panne applicative :",
   "o": [
    "Le surprovisionnement des instances",
    "L'extension d'intégrité et les réparations automatiques",
    "Le temps de refroidissement entre deux mises à l'échelle",
    "La stratégie de mise à niveau Manuelle"
   ],
   "a": 1
  },
  {
   "l": "Nouvelles instances prêtes plus vite pour des pics de quelques secondes :",
   "o": [
    "Allonger le temps de refroidissement",
    "Réduire le nombre maximal d'instances",
    "Passer en stratégie de mise à niveau Manuelle",
    "Utiliser une image préconfigurée (galerie)"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Supprimer toujours les VM les plus récentes en premier — stratégie de diminution :</b></p><p>La stratégie de diminution d'un VMSS peut être <b>Default</b> (équilibre entre zones et domaines d'erreur, puis supprime l'ID d'instance le plus élevé), <b>NewestVM</b> (les plus récentes d'abord) ou <b>OldestVM</b> (les plus anciennes d'abord), toujours en gardant l'équilibre entre zones.</p><p><b>2. Une instance qui exécute un traitement critique ne doit pas être supprimée en diminution :</b></p><p>La <b>protection contre la diminution</b> s'applique à une instance précise : la mise à l'échelle automatique ne la supprimera pas. (La protection contre les actions du groupe la protège aussi des mises à niveau et réimages.)</p><p>Un verrou sur VMSS3 bloquerait toutes les diminutions. Augmenter le minimum ne protège pas une instance précise.</p><p><b>3. Remplacer automatiquement les instances en panne applicative :</b></p><p>Les <b>réparations automatiques d'instance</b> remplacent les instances signalées non saines par l'<b>extension d'intégrité de l'application</b> ou la sonde d'un équilibreur de charge, après un délai de grâce.</p><p><b>4. Nouvelles instances prêtes plus vite pour des pics de quelques secondes :</b></p><p>Une image <b>préconfigurée</b> (logiciels déjà installés) évite d'exécuter de longues extensions à chaque nouvelle instance : le délai entre la décision de mise à l'échelle et l'instance prête diminue. On peut aussi garder un minimum d'instances plus élevé.</p>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS1"
  ],
  "title": "VMSS1 | Mise à l'échelle",
  "menu": [
   "*Mise à l'échelle"
  ],
  "rows": [
   [
    "*Stratégie de diminution",
    "NewestVM"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Ordre de suppression en diminution = Default, NewestVM ou OldestVM. Garder une instance précise = protection contre la diminution. Remplacer les instances malades = extension d'intégrité + réparations automatiques. Instances prêtes plus vite = image préconfigurée."
},
{
 "id": "D3-307",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous configurez la mise à l'échelle automatique de VMSS2. Que devez-vous configurer ou répondre pour chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Toujours au moins 2 instances, jamais plus de 10, 3 au démarrage :",
   "o": [
    "Minimum 3, Maximum 10, Par défaut 2",
    "Minimum 2, Maximum 3, Par défaut 10",
    "Minimum 0, Maximum 10, Par défaut 3",
    "Minimum 2, Maximum 10, Par défaut 3"
   ],
   "a": 3
  },
  {
   "l": "Le CPU reste à 90 % une heure, les instances ne sont pas ajoutées chaque minute :",
   "o": [
    "Le temps de refroidissement bloque toute action 5 minutes",
    "Les VMSS ne prennent en charge qu'une action par heure",
    "La règle de diminution annule celle d'augmentation",
    "Le nombre d'instances par défaut est déjà atteint"
   ],
   "a": 0
  },
  {
   "l": "Après un pic, le nombre d'instances ne redescend jamais :",
   "o": [
    "Un temps de refroidissement plus long",
    "Une règle de diminution (CPU sous 30 %)",
    "Un nombre maximal d'instances plus bas",
    "Une sonde d'intégrité sur l'équilibreur"
   ],
   "a": 1
  },
  {
   "l": "Une application web S1 ralentit en journée quand les utilisateurs triplent :",
   "o": [
    "Une mise à l'échelle automatique horizontale du plan",
    "Un passage permanent au niveau Premium (scale up)",
    "Une sauvegarde planifiée avant chaque pic",
    "Un emplacement de déploiement supplémentaire"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Toujours au moins 2 instances, jamais plus de 10, 3 au démarrage :</b></p><p>Les limites d'instances d'un profil de mise à l'échelle automatique sont : <b>Minimum</b> (jamais en dessous), <b>Maximum</b> (jamais au-dessus) et <b>Par défaut</b> (utilisé si les métriques ne peuvent pas être lues).</p><p><b>2. Le CPU reste à 90 % une heure, les instances ne sont pas ajoutées chaque minute :</b></p><p>Le <b>temps de refroidissement</b> (cool down) laisse aux nouvelles instances le temps de démarrer et aux métriques de se stabiliser avant une nouvelle évaluation. Pendant ce délai, aucune autre action de mise à l'échelle n'a lieu. Le nombre maximal d'instances limite aussi l'augmentation.</p><p><b>3. Après un pic, le nombre d'instances ne redescend jamais :</b></p><p>La mise à l'échelle automatique ne retire des instances que si une <b>règle de diminution</b> existe. Bonne pratique : toujours associer une règle d'augmentation et une règle de diminution, avec un écart suffisant entre les seuils (par exemple 70 % et 30 %) pour éviter des oscillations.</p><p><b>4. Une application web S1 ralentit en journée quand les utilisateurs triplent :</b></p><p>La <b>mise à l'échelle horizontale</b> (scale out) ajoute des instances au plan quand la charge augmente, et en retire quand elle baisse. On peut la baser sur une métrique (CPU, mémoire, longueur de la file HTTP) ou sur une <b>planification</b> (journée/nuit).</p><p>La <b>mise à l'échelle verticale</b> (scale up) change la taille ou le niveau du plan : elle augmenterait le coût en permanence, y compris la nuit.</p>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS1"
  ],
  "title": "VMSS1 | Mise à l'échelle",
  "menu": [
   "*Mise à l'échelle"
  ],
  "rows": [
   [
    "*Minimum",
    "2"
   ],
   [
    "*Maximum",
    "10"
   ],
   [
    "*Par défaut",
    "3"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Minimum, Maximum, Par défaut (si les métriques manquent). Refroidissement = pause après chaque action de mise à l'échelle. Toujours une règle d'augmentation ET une règle de diminution. Charge variable = scale out automatique ; scale up = instances plus grosses."
},
{
 "id": "D3-308",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous utilisez les emplacements de déploiement des applications web. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "La chaîne de connexion reste attachée à chaque emplacement lors d'une permutation :",
   "o": [
    "Marquer la chaîne « Paramètre d'emplacement »",
    "Désactiver la permutation automatique du staging",
    "Utiliser la même chaîne de connexion partout",
    "Créer un troisième emplacement pour la base de test"
   ],
   "a": 0
  },
  {
   "l": "Le code déployé dans staging part en production après son préchauffage, automatiquement :",
   "o": [
    "La mise à l'échelle automatique du plan",
    "La permutation automatique sur staging",
    "Le routage de 100 % du trafic vers staging",
    "Always On sur l'emplacement de production"
   ],
   "a": 1
  },
  {
   "l": "20 % des utilisateurs de production vers beta, sans permutation :",
   "o": [
    "Une permutation avec aperçu",
    "Un équilibreur de charge devant l'application",
    "Le routage du trafic : 20 % vers beta",
    "Un second plan App Service pour beta"
   ],
   "a": 2
  },
  {
   "l": "Redéployer l'application conteneur à chaque push de app:latest dans ACR9 :",
   "o": [
    "Always On",
    "La géoréplication du registre",
    "La permutation automatique",
    "Le déploiement continu (webhook ACR)"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. La chaîne de connexion reste attachée à chaque emplacement lors d'une permutation :</b></p><p>Un paramètre marqué <b>Paramètre d'emplacement de déploiement</b> (sticky, ou « collant ») reste attaché à l'emplacement : il ne suit pas le code lors d'une permutation. Les paramètres non cochés sont échangés avec le code.</p><p><b>2. Le code déployé dans staging part en production après son préchauffage, automatiquement :</b></p><p>La <b>permutation automatique</b>, activée sur l'emplacement source (staging), permute avec l'emplacement cible dès que le déploiement est terminé et que l'application est préchauffée.</p><p><b>3. 20 % des utilisateurs de production vers beta, sans permutation :</b></p><p>Le <b>routage du trafic</b> des emplacements (Testing in production) envoie un pourcentage des requêtes de production vers un autre emplacement. Un cookie garde chaque utilisateur sur le même emplacement pendant sa session.</p><p><b>4. Redéployer l'application conteneur à chaque push de app:latest dans ACR9 :</b></p><p>Avec le <b>déploiement continu</b> activé pour un conteneur, App Service crée un <b>webhook</b> dans ACR : à chaque push de l'image suivie, l'application tire la nouvelle image et redémarre.</p>",
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
 "keep": "Paramètre qui reste sur l'emplacement = paramètre d'emplacement (sticky). Permuter automatiquement après déploiement = auto swap. Pourcentage d'utilisateurs vers un emplacement = routage du trafic. Redéployer à chaque push d'image = déploiement continu (webhook ACR)."
},
{
 "id": "D3-309",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Des applications web App Service ont des problèmes de disponibilité ou de session. Que devez-vous configurer dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "WebApp13 (plan De base) se met en veille, la première requête est très lente :",
   "o": [
    "Le routage du trafic",
    "Always On",
    "Les journaux d'application",
    "L'affinité ARR"
   ],
   "a": 1
  },
  {
   "l": "Une instance qui n'arrive plus à démarrer doit être retirée puis remplacée :",
   "o": [
    "Les journaux de serveur web",
    "Une alerte de budget sur le plan",
    "Always On sur les instances",
    "Le contrôle d'intégrité (/health)"
   ],
   "a": 3
  },
  {
   "l": "Application sans état, requêtes réparties uniformément même pour un utilisateur — à désactiver :",
   "o": [
    "HTTPS uniquement",
    "Le contrôle d'intégrité",
    "L'affinité ARR",
    "Always On sur toutes les instances"
   ],
   "a": 2
  },
  {
   "l": "Sessions en mémoire : passage de 1 à 3 instances, utilisateurs déconnectés — solution rapide :",
   "o": [
    "Activer HTTPS uniquement",
    "Activer l'affinité ARR",
    "Désactiver Always On sur l'application",
    "Passer en plan De base avec une instance"
   ],
   "a": 1
  },
  {
   "l": "Application d'un plan Premium qui doit survivre à la panne d'un centre de données de la région :",
   "o": [
    "La redondance de zone du plan",
    "Un emplacement de déploiement par zone",
    "Les sauvegardes planifiées toutes les heures",
    "Always On sur l'emplacement de production"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. WebApp13 (plan De base) se met en veille, la première requête est très lente :</b></p><p><b>Always On</b> garde l'application chargée en envoyant régulièrement une requête, ce qui évite le déchargement après inactivité. Il est disponible à partir du niveau De base, et nécessaire pour les tâches web continues.</p><p>L'<b>affinité ARR</b> envoie un utilisateur toujours vers la même instance (sessions collantes).</p><p><b>2. Une instance qui n'arrive plus à démarrer doit être retirée puis remplacée :</b></p><p>Le <b>contrôle d'intégrité</b> interroge régulièrement un chemin de l'application sur chaque instance. Une instance qui répond mal est retirée de la rotation, puis remplacée si elle reste défaillante. Il faut au moins deux instances pour en profiter.</p><p><b>3. Application sans état, requêtes réparties uniformément même pour un utilisateur — à désactiver :</b></p><p>L'<b>affinité ARR</b> place un cookie qui renvoie chaque utilisateur vers la même instance. Pour une application <b>sans état</b>, la désactiver répartit mieux la charge entre les instances.</p><p><b>4. Sessions en mémoire : passage de 1 à 3 instances, utilisateurs déconnectés — solution rapide :</b></p><p>L'<b>affinité ARR</b> renvoie chaque utilisateur vers la même instance grâce à un cookie : la session en mémoire reste disponible. La vraie solution à long terme est de stocker les sessions hors de l'instance (par exemple Azure Cache for Redis).</p><p><b>5. Application d'un plan Premium qui doit survivre à la panne d'un centre de données de la région :</b></p><p>Un plan Premium v2/v3 (ou Isolé v2) peut être <b>redondant interzone</b> : ses instances sont réparties sur plusieurs zones de disponibilité de la région. Il faut au moins 2 instances (3 étaient requises à l'origine).</p><p>Les emplacements et Always On ne protègent pas d'une panne de zone. Les sauvegardes permettent de restaurer, pas de rester disponible.</p>",
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
 "keep": "Éviter la mise en veille = Always On (De base et plus). Retirer une instance malade = contrôle d'intégrité (2 instances minimum). Application sans état = désactiver l'affinité ARR. Sessions en mémoire sur plusieurs instances = affinité ARR (en attendant Redis). Panne d'un centre de données = plan redondant interzone."
},
{
 "id": "D3-310",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous gérez les disques des VM de production. Que devez-vous faire ou répondre dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Des fichiers de cache sur le disque D: de VM9 ont disparu après une maintenance :",
   "o": [
    "La sauvegarde Azure a écrasé le contenu du disque",
    "Le disque temporaire n'est pas persistant",
    "Le disque D: est chiffré par BitLocker et verrouillé au démarrage",
    "Le disque D: est un disque de données Premium"
   ],
   "a": 1
  },
  {
   "l": "Agrandir le disque de données de 256 à 512 Gio :",
   "o": [
    "La taille d'un disque managé ne peut jamais changer",
    "Il faut créer un nouveau disque et copier les données",
    "Augmenter dans Azure, puis étendre le volume",
    "Vous pouvez réduire puis augmenter la taille librement"
   ],
   "a": 2
  },
  {
   "l": "Base SQL : cache hôte du disque de données lu et du disque de journaux écrit :",
   "o": [
    "Lecture/écriture pour les données, Lecture seule pour les journaux",
    "Lecture/écriture pour les deux",
    "Aucun pour les données, Lecture seule pour les journaux",
    "Lecture seule pour les données, Aucun pour les journaux"
   ],
   "a": 3
  },
  {
   "l": "Deux VM d'un cluster de basculement accèdent au même disque managé :",
   "o": [
    "Un partage Azure Files Premium monté par les nœuds",
    "Les disques partagés (maxShares > 1)",
    "Un instantané du disque attaché aux deux VM",
    "Le disque temporaire de chaque nœud"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Des fichiers de cache sur le disque D: de VM9 ont disparu après une maintenance :</b></p><p>Le <b>disque temporaire</b> est stocké sur l'hôte physique. Son contenu est perdu si la VM change d'hôte (maintenance, redéploiement, arrêt avec libération, redimensionnement). Il convient pour le fichier d'échange ou un cache reconstructible, jamais pour des données à conserver.</p><p>Pour des données persistantes, on utilise un <b>disque de données managé</b>.</p><p><b>2. Agrandir le disque de données de 256 à 512 Gio :</b></p><p>On peut <b>augmenter</b> la taille d'un disque managé (souvent sans arrêter la VM pour les disques de données, selon le type et la taille). Il faut ensuite <b>étendre le volume</b> dans le système d'exploitation (Gestion des disques ou diskpart sous Windows, growpart et resize2fs sous Linux).</p><p>On ne peut <b>jamais réduire</b> la taille d'un disque managé.</p><p><b>3. Base SQL : cache hôte du disque de données lu et du disque de journaux écrit :</b></p><p>Le cache <b>Lecture seule</b> accélère les lectures répétées : idéal pour les fichiers de données. Pour les journaux, écrits séquentiellement, on choisit <b>Aucun</b>. Le cache <b>Lecture/écriture</b> risque de perdre des écritures en cas de panne si l'application ne gère pas le vidage du cache ; il est réservé au disque du système d'exploitation.</p><p><b>4. Deux VM d'un cluster de basculement accèdent au même disque managé :</b></p><p>Les <b>disques partagés</b> permettent d'attacher un disque managé (SSD Premium, SSD Premium v2 ou Ultra) à plusieurs VM en même temps, avec un nombre maximal défini par <b>maxShares</b>. L'application (cluster de basculement, SCSI PR) gère l'accès concurrent.</p><p>Azure Files est une alternative en SMB, mais ce n'est pas un disque partagé.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM9"
  ],
  "title": "VM9 | Disques",
  "menu": [
   "*Disques"
  ],
  "rows": [
   [
    "*Disque temporaire (D:)",
    "Non persistant"
   ],
   [
    "Disques de données",
    "Persistants"
   ]
  ]
 },
 "keep": "Disque temporaire = jamais pour des données à garder. Disque : agrandir oui, réduire jamais ; puis étendre le volume. Données = Lecture seule ; journaux = Aucun ; OS = Lecture/écriture. Disque attaché à plusieurs VM = disque partagé (maxShares)."
},
{
 "id": "D3-311",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous choisissez les disques de nouvelles VM. Que devez-vous choisir pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Plus d'IOPS pendant la clôture mensuelle, sans plus d'espace ni changement de taille :",
   "o": [
    "Ajouter un disque temporaire plus grand",
    "Passer le disque en HDD Standard",
    "Activer le cache Lecture/écriture",
    "Changer le niveau de performance (P40)"
   ],
   "a": 3
  },
  {
   "l": "VM sans état dont le disque système n'a pas à être conservé :",
   "o": [
    "Un disque Ultra",
    "Un SSD Premium (cache Lecture/écriture)",
    "Un disque partagé",
    "Un disque système éphémère"
   ],
   "a": 3
  },
  {
   "l": "Taille de série D avec un disque temporaire local :",
   "o": [
    "Standard_D4ds_v5",
    "Standard_D4ps_v5",
    "Standard_D4s_v5",
    "Standard_D4as_v5"
   ],
   "a": 0
  },
  {
   "l": "Format d'un disque virtuel local chargé pour créer un disque managé :",
   "o": [
    "VHD de taille fixe",
    "VHDX dynamique",
    "VHD dynamique",
    "VMDK (format VMware)"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Plus d'IOPS pendant la clôture mensuelle, sans plus d'espace ni changement de taille :</b></p><p>Pour les SSD Premium, le <b>niveau de performance</b> peut être relevé indépendamment de la taille (par exemple P30 → P40), puis abaissé plus tard (après un délai minimal). Le <b>bursting</b> à la demande est une autre option pour des pics courts sur les grands disques.</p><p>Un HDD Standard serait plus lent. Le cache Lecture/écriture est déconseillé pour les données.</p><p><b>2. VM sans état dont le disque système n'a pas à être conservé :</b></p><p>Le <b>disque de système d'exploitation éphémère</b> est créé sur le stockage local de l'hôte (cache ou disque temporaire) : lecture et réimage plus rapides, pas de coût de stockage. Mais il est perdu si la VM change d'hôte, et la VM ne peut pas être arrêtée avec libération.</p><p><b>3. Taille de série D avec un disque temporaire local :</b></p><p>La lettre <b>d</b> (D4<b>d</b>s_v5) indique un <b>disque temporaire local</b>. Depuis la génération v4, les tailles sans « d » n'ont plus de disque temporaire.</p><p><b>4. Format d'un disque virtuel local chargé pour créer un disque managé :</b></p><p>Azure n'accepte que les disques au format <b>VHD de taille fixe</b>. Un VHDX ou un disque dynamique doit être converti (par exemple avec <code>Convert-VHD</code> sous Hyper-V), et un VMDK doit être converti en VHD.</p>",
 "portal": {
  "path": [
   "Disques",
   "VM25-data"
  ],
  "title": "VM25-data | Taille + performances",
  "menu": [
   "*Taille + performances"
  ],
  "rows": [
   [
    "Taille",
    "1 Tio (P30)"
   ],
   [
    "*Niveau de performance",
    "P40"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Plus d'IOPS sans plus d'espace = niveau de performance (ou bursting). Démarrage rapide, sans état = disque OS éphémère. « d » dans le nom = disque temporaire local. Disque à charger = VHD fixe uniquement."
},
{
 "id": "D3-312",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous créez des images de VM et les distribuez avec une galerie Azure Compute. Que devez-vous faire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Généraliser une VM Linux avant la capture — commande :",
   "o": [
    "sudo waagent -deprovision+user",
    "az vm deallocate --name VM27",
    "sudo shutdown -h now uniquement",
    "sysprep /generalize /oobe /shutdown"
   ],
   "a": 0
  },
  {
   "l": "Copies qui gardent les comptes et la configuration — type de définition :",
   "o": [
    "Généralisée",
    "Spécialisée",
    "Marketplace",
    "Éphémère"
   ],
   "a": 1
  },
  {
   "l": "Créer des VM en West Europe à partir d'une version répliquée en France Central seulement :",
   "o": [
    "Ajouter West Europe aux régions de réplication",
    "Rien : une galerie est mondiale et sert toutes les régions",
    "Créer une galerie en West Europe et tout recommencer",
    "Copier l'image avec AzCopy vers West Europe"
   ],
   "a": 0
  },
  {
   "l": "Des milliers de VM créées en même temps depuis la même version ralentissent :",
   "o": [
    "Le nombre de domaines d'erreur",
    "Le nombre de réplicas dans la région",
    "La taille des VM déployées",
    "Le quota de stockage de l'abonnement"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Généraliser une VM Linux avant la capture — commande :</b></p><p>Sous Linux, l'agent de VM Azure retire les informations propres à la machine avec <code>waagent -deprovision+user</code> (qui supprime aussi le dernier compte utilisateur). On libère ensuite la VM, on la marque généralisée (<code>az vm generalize</code>) et on capture l'image.</p><p>Sysprep est l'outil Windows.</p><p><b>2. Copies qui gardent les comptes et la configuration — type de définition :</b></p><p>Une image <b>spécialisée</b> conserve le nom d'ordinateur, les comptes et la configuration. Les VM créées à partir d'elle ne passent pas par l'étape de provisionnement (pas de nouveau compte administrateur).</p><p>Une image <b>généralisée</b> a été préparée avec Sysprep ou waagent, et chaque nouvelle VM reçoit son propre nom et son compte administrateur.</p><p><b>3. Créer des VM en West Europe à partir d'une version répliquée en France Central seulement :</b></p><p>Une <b>version d'image</b> doit être <b>répliquée</b> dans chaque région où l'on veut l'utiliser. On ajoute West Europe aux régions cibles (avec un nombre de réplicas adapté au nombre de VM créées en même temps).</p><p><b>4. Des milliers de VM créées en même temps depuis la même version ralentissent :</b></p><p>Chaque <b>réplica</b> d'une version d'image peut servir un nombre limité de créations simultanées. Augmenter le nombre de réplicas dans la région répartit la charge et accélère les déploiements à grande échelle.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM-Linux"
  ],
  "title": "Préparer une image Linux",
  "rows": [
   [
    "*1",
    "sudo waagent -deprovision+user"
   ],
   [
    "2",
    "az vm deallocate"
   ],
   [
    "3",
    "az vm generalize"
   ]
  ]
 },
 "keep": "Généraliser Linux = waagent -deprovision ; Windows = Sysprep. Spécialisée = copie conforme ; généralisée = nouvelles identités. Utiliser une image dans une région = l'y répliquer. Beaucoup de VM simultanées = plus de réplicas."
},
{
 "id": "D3-313",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous préparez la continuité de service des applications web et des VM. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Sauvegardes planifiées des fichiers et de la configuration de WebApp16 :",
   "o": [
    "Les sauvegardes d'App Service (conteneur cible)",
    "Azure Backup avec un coffre Recovery Services",
    "Un instantané de disque managé de l'application",
    "Azure Site Recovery pour l'application"
   ],
   "a": 0
  },
  {
   "l": "La sauvegarde de WebApp23 a été restaurée dans WebApp23-test — fonctionnalité :",
   "o": [
    "Un emplacement de déploiement de restauration",
    "Restaurer une sauvegarde vers une autre application",
    "Une Template Spec de l'application",
    "Azure Site Recovery pour App Service"
   ],
   "a": 1
  },
  {
   "l": "Copier une application (code et configuration) dans une autre région :",
   "o": [
    "Déplacer l'application vers l'autre région (Propriétés)",
    "Augmenter le nombre d'instances du plan",
    "Cloner l'application dans l'autre région",
    "Un emplacement de déploiement dans l'autre région"
   ],
   "a": 2
  },
  {
   "l": "Répliquer une VM dans une autre région avec basculement en quelques minutes :",
   "o": [
    "Azure Backup uniquement",
    "Azure Site Recovery",
    "Un emplacement de déploiement",
    "Un groupe à haute disponibilité"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Sauvegardes planifiées des fichiers et de la configuration de WebApp16 :</b></p><p>App Service a sa propre fonction de <b>sauvegarde</b> : sauvegardes automatiques intégrées (niveaux De base et plus), et sauvegardes <b>personnalisées</b> planifiées vers un conteneur de stockage, avec une base de données liée si besoin.</p><p>Azure Backup pour VM, les instantanés et Site Recovery ne s'appliquent pas aux applications App Service.</p><p><b>2. La sauvegarde de WebApp23 a été restaurée dans WebApp23-test — fonctionnalité :</b></p><p>Une sauvegarde App Service peut être restaurée vers l'application d'origine, vers un <b>emplacement</b> ou vers une <b>autre application</b> (nouvelle ou existante). C'est pratique pour tester sans toucher à la production.</p><p><b>3. Copier une application (code et configuration) dans une autre région :</b></p><p>Le <b>clonage</b> d'application (niveau Standard ou plus) crée une copie du contenu et de la configuration dans un autre plan, éventuellement dans une autre région. On peut aussi restaurer une sauvegarde vers une application d'une autre région.</p><p>Un emplacement est toujours dans la même région que son application. Une application ne change pas de région.</p><p><b>4. Répliquer une VM dans une autre région avec basculement en quelques minutes :</b></p><p><b>Azure Site Recovery</b> réplique en continu les disques de la VM vers une région cible et permet un <b>basculement</b> (et une restauration automatique) avec un RPO de quelques secondes à minutes.</p><p>Azure Backup permet de restaurer, mais avec un délai plus long et un RPO lié à la fréquence des sauvegardes.</p>",
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
 "keep": "Sauvegarder une application web = Sauvegardes d'App Service. Restaurer une sauvegarde App Service vers une autre application = test sans risque. Copie d'une application dans une autre région = clonage (ou restauration). Basculement de VM vers une autre région = Azure Site Recovery."
},
{
 "id": "D3-314",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous concevez la disponibilité de plusieurs applications sur des VM. Que devez-vous répondre ou utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Groupe à haute disponibilité de 10 VM, 5 domaines de mise à jour — VM indisponibles au plus pendant une maintenance :",
   "o": [
    "1",
    "2",
    "5",
    "10"
   ],
   "a": 1
  },
  {
   "l": "Groupe à haute disponibilité, 3 domaines d'erreur et 5 de mise à jour — protège contre :",
   "o": [
    "Une panne de rack et la maintenance de l'hôte",
    "La suppression accidentelle d'une VM du groupe",
    "La panne d'une région entière et de sa jumelle",
    "La panne d'un centre de données entier"
   ],
   "a": 0
  },
  {
   "l": "Ne partager le serveur physique avec aucun autre client Azure :",
   "o": [
    "Un groupe à haute disponibilité",
    "Des VM Spot",
    "Un groupe de placement de proximité",
    "Azure Dedicated Host"
   ],
   "a": 3
  },
  {
   "l": "Latence réseau la plus faible possible entre des VM HPC :",
   "o": [
    "Un groupe de placement de proximité",
    "Des zones de disponibilité différentes",
    "Un groupe à haute disponibilité avec 3 domaines d'erreur",
    "Des régions différentes"
   ],
   "a": 0
  },
  {
   "l": "3 VM au plus, résistance à la panne d'une zone :",
   "o": [
    "Trois VM dans la zone 1, derrière un équilibreur de charge Standard",
    "Trois VM dans un groupe à haute disponibilité",
    "Une VM par zone (1, 2, 3) et un équilibreur Standard",
    "Trois VM dans un groupe de placement de proximité"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Groupe à haute disponibilité de 10 VM, 5 domaines de mise à jour — VM indisponibles au plus pendant une maintenance :</b></p><p>Dans un groupe à haute disponibilité, deux notions se combinent :</p><ul><li><b>Domaines de mise à jour</b> : groupes de VM redémarrés ensemble pendant une maintenance planifiée. Azure n'en redémarre qu'<b>un à la fois</b>.</li><li><b>Domaines d'erreur</b> : groupes de VM qui partagent le même rack (alimentation, réseau). Ils protègent des pannes matérielles, pas de la maintenance.</li></ul><p>10 VM réparties sur 5 domaines de mise à jour = 2 VM par domaine. Pendant la maintenance, au plus <b>2 VM</b> sont indisponibles en même temps.</p><p><b>2. Groupe à haute disponibilité, 3 domaines d'erreur et 5 de mise à jour — protège contre :</b></p><p>Les <b>domaines d'erreur</b> placent les VM sur des racks différents (alimentation et réseau séparés). Les <b>domaines de mise à jour</b> évitent que toutes les VM redémarrent en même temps lors d'une maintenance. SLA : 99,95 %.</p><p>Un groupe à haute disponibilité reste dans <b>un seul centre de données</b>. Contre la panne d'un centre de données, on utilise les <b>zones de disponibilité</b> (SLA 99,99 %) ; contre la panne d'une région, une autre région.</p><p><b>3. Ne partager le serveur physique avec aucun autre client Azure :</b></p><p><b>Azure Dedicated Host</b> fournit des serveurs physiques réservés à votre abonnement : vous choisissez les VM qui y tournent, et vous contrôlez la maintenance.</p><p>Les autres options ne garantissent pas l'isolement physique.</p><p><b>4. Latence réseau la plus faible possible entre des VM HPC :</b></p><p>Un <b>groupe de placement de proximité</b> place les VM physiquement proches dans le même centre de données, ce qui réduit la latence. La <b>mise en réseau accélérée</b> réduit aussi la latence.</p><p>Répartir sur plusieurs zones ou régions augmente la latence.</p><p><b>5. 3 VM au plus, résistance à la panne d'une zone :</b></p><p>Une VM par zone, derrière un <b>équilibreur de charge Standard</b> redondant interzone : si une zone tombe, deux VM continuent de servir. SLA de 99,99 %.</p><p>Le groupe à haute disponibilité résiste à la panne d'un rack mais pas d'un centre de données. Trois VM dans une même zone partagent le même risque.</p>",
 "portal": {
  "path": [
   "Groupes à haute disponibilité",
   "AS1"
  ],
  "title": "AS1 | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble",
   "Propriétés"
  ],
  "rows": [
   [
    "Domaines d'erreur",
    "2"
   ],
   [
    "*Domaines de mise à jour",
    "5"
   ],
   [
    "VM par domaine de mise à jour",
    "2"
   ]
  ]
 },
 "keep": "Maintenance planifiée = 1 domaine de mise à jour à la fois. Panne matérielle = 1 domaine d'erreur. Groupe à haute dispo = racks + maintenance, dans 1 centre de données (99,95 %). Serveur physique réservé = Dedicated Host. Latence minimale entre VM = groupe de placement de proximité. 3 VM et résistance à une zone = 1 VM par zone + équilibreur Standard."
},
{
 "id": "D3-315",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Plusieurs VM ne répondent plus correctement. Que devez-vous utiliser dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM7 ne répond plus en RDP — voir l'écran pour savoir si Windows est bloqué :",
   "o": [
    "Azure Advisor, onglet Fiabilité",
    "Le journal d'activité de la VM",
    "Network Watcher : vérification du flux IP",
    "Les diagnostics de démarrage"
   ],
   "a": 3
  },
  {
   "l": "VM Linux bloquée par une erreur dans /etc/fstab, sans connexion réseau :",
   "o": [
    "Azure Bastion",
    "La console série",
    "SSH par l'adresse IP publique",
    "Le journal d'activité"
   ],
   "a": 1
  },
  {
   "l": "Disque système à réparer depuis une autre VM après un pilote défectueux :",
   "o": [
    "Redimensionner VM28 vers une taille supérieure",
    "Activer Always On sur VM28",
    "Réparer une copie du disque sur une VM de réparation",
    "Supprimer VM28 et ses disques, puis la recréer depuis l'image"
   ],
   "a": 2
  },
  {
   "l": "Problèmes liés à l'hôte physique : migrer vers un nouvel hôte :",
   "o": [
    "Redéployer VM8",
    "Redimensionner VM8",
    "Réappliquer l'état de VM8",
    "Réinitialiser le mot de passe"
   ],
   "a": 0
  },
  {
   "l": "Script ponctuel dans VM21 sans RDP, agent de VM opérationnel :",
   "o": [
    "Exécuter la commande (Run command)",
    "Une nouvelle extension DSC",
    "Les diagnostics de démarrage",
    "Un instantané du disque système"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. VM7 ne répond plus en RDP — voir l'écran pour savoir si Windows est bloqué :</b></p><p>Les <b>diagnostics de démarrage</b> conservent une capture d'écran (et, pour Linux, le journal de la console). On voit par exemple un écran bleu, une mise à jour en cours ou une demande de vérification du disque.</p><p>Vérification du flux IP teste les règles réseau. Le journal d'activité trace les opérations Azure, pas l'état du système d'exploitation.</p><p><b>2. VM Linux bloquée par une erreur dans /etc/fstab, sans connexion réseau :</b></p><p>La <b>console série</b> donne un accès texte à la console de la VM (port COM1 ou ttyS0), même si le réseau ou le démarrage est en panne. Elle exige les diagnostics de démarrage activés et un compte local avec mot de passe.</p><p>Bastion et SSH passent par le réseau, indisponible tant que le système ne démarre pas.</p><p><b>3. Disque système à réparer depuis une autre VM après un pilote défectueux :</b></p><p>La commande <b>az vm repair</b> automatise la démarche : création d'une VM de réparation, attachement d'une <b>copie</b> du disque du système d'exploitation comme disque de données, exécution de scripts de correction, puis <b>échange du disque du système d'exploitation</b> de la VM d'origine (swap OS disk).</p><p><b>4. Problèmes liés à l'hôte physique : migrer vers un nouvel hôte :</b></p><p><b>Redéployer</b> arrête la VM, la déplace vers un nouveau nœud de l'infrastructure, puis la redémarre. Attention : les données du <b>disque temporaire</b> sont perdues et l'adresse IP publique dynamique peut changer.</p><p><b>Réappliquer</b> réexécute le provisionnement de la VM sans changer d'hôte : utile quand la VM est en état d'échec.</p><p><b>5. Script ponctuel dans VM21 sans RDP, agent de VM opérationnel :</b></p><p><b>Exécuter la commande</b> (Run command) lance un script PowerShell ou shell dans la VM via l'agent de VM, sans connexion réseau à la VM. C'est idéal pour diagnostiquer ou corriger quand RDP ou SSH ne fonctionne plus.</p><p>Les diagnostics de démarrage montrent l'écran. DSC sert à la configuration souhaitée durable. Un instantané copie un disque.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM7"
  ],
  "title": "VM7 | Diagnostics de démarrage",
  "menu": [
   "*Diagnostics de démarrage"
  ],
  "rows": [
   [
    "*Capture d'écran",
    "Écran Windows au démarrage"
   ],
   [
    "Journal série",
    "Linux"
   ]
  ]
 },
 "keep": "Voir l'écran de démarrage = diagnostics de démarrage. OS qui ne démarre pas, pas de réseau = console série. Réparer un OS qui ne démarre pas = VM de réparation + échange de disque (az vm repair). Nouvel hôte = Redéployer ; état en échec = Réappliquer. Script sans réseau, via l'agent = Exécuter la commande."
},
{
 "id": "D3-316",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Les développeurs dépannent leurs applications App Service. Que doivent-ils utiliser pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Voir en direct les journaux pendant la reproduction d'un bug :",
   "o": [
    "Le journal d'activité de l'application",
    "La page Sauvegardes de l'application",
    "Le flux de journaux (journalisation activée)",
    "Azure Advisor, onglet Performances"
   ],
   "a": 2
  },
  {
   "l": "Journaux conservés 90 jours et interrogés en KQL avec d'autres ressources :",
   "o": [
    "La journalisation des applications dans le système de fichiers",
    "Le flux de journaux de l'application",
    "Un paramètre de diagnostic vers Log Analytics",
    "Les sauvegardes planifiées de l'application"
   ],
   "a": 2
  },
  {
   "l": "Une invite de commande pour inspecter les fichiers déployés :",
   "o": [
    "Azure Bastion vers l'instance",
    "La console série de l'application",
    "La console Kudu (site SCM)",
    "RDP vers l'instance du plan"
   ],
   "a": 2
  },
  {
   "l": "Erreurs 500 : diagnostic guidé avec analyses automatiques :",
   "o": [
    "Identité",
    "Domaines personnalisés et certificats",
    "Centre de déploiement, onglet Journaux",
    "Diagnostiquer et résoudre les problèmes"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Voir en direct les journaux pendant la reproduction d'un bug :</b></p><p>Le <b>flux de journaux</b> affiche en temps réel les journaux d'application et de serveur web, à condition que la journalisation soit activée dans <b>Journaux App Service</b>. On peut aussi les suivre avec <code>az webapp log tail</code>.</p><p><b>2. Journaux conservés 90 jours et interrogés en KQL avec d'autres ressources :</b></p><p>Un <b>paramètre de diagnostic</b> envoie les journaux d'App Service (HTTP, console, application, audit…) vers <b>Log Analytics</b>, où on règle la rétention et où on les interroge en KQL avec d'autres sources.</p><p>La journalisation dans le système de fichiers se désactive automatiquement après 12 heures. Le flux de journaux est en direct, sans conservation.</p><p><b>3. Une invite de commande pour inspecter les fichiers déployés :</b></p><p><b>Kudu</b> (Outils avancés, à l'adresse <code>&lt;app&gt;.scm.azurewebsites.net</code>) donne une console de débogage, l'explorateur de fichiers, les variables d'environnement, les journaux et les déploiements. Sous Linux, on dispose aussi de SSH dans le conteneur.</p><p>On ne se connecte pas en RDP aux instances App Service.</p><p><b>4. Erreurs 500 : diagnostic guidé avec analyses automatiques :</b></p><p><b>Diagnostiquer et résoudre les problèmes</b> propose des détecteurs (disponibilité et performances, plantages, mémoire, CPU, configuration) qui analysent automatiquement l'application et suggèrent des solutions.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Flux de journaux",
  "menu": [
   "Journaux App Service",
   "*Flux de journaux"
  ],
  "rows": [
   [
    "Prérequis",
    "Journalisation des applications activée"
   ]
  ]
 },
 "keep": "Journaux en direct = flux de journaux. Journaux conservés et interrogeables = paramètre de diagnostic vers Log Analytics. Console et fichiers d'une application web = Kudu (site SCM). Diagnostic guidé = Diagnostiquer et résoudre les problèmes."
},
{
 "id": "D3-317",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous publiez des applications web sur des domaines personnalisés. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Associer www.contoso.com à WebApp7 — enregistrements DNS :",
   "o": [
    "Un enregistrement PTR vers l'adresse de l'application",
    "Un enregistrement SRV vers webapp7.azurewebsites.net",
    "Un enregistrement MX vers webapp7.azurewebsites.net",
    "Un CNAME www et un TXT asuid.www"
   ],
   "a": 3
  },
  {
   "l": "Certificat TLS gratuit renouvelé automatiquement :",
   "o": [
    "Aucun : HTTPS est impossible sur un domaine personnalisé",
    "Un certificat managé App Service",
    "Un certificat de Key Vault généré manuellement chaque année",
    "Un certificat auto-signé"
   ],
   "a": 1
  },
  {
   "l": "Rediriger toutes les requêtes HTTP de WebApp26 vers HTTPS :",
   "o": [
    "Affinité ARR",
    "Always On",
    "Version TLS minimale 1.0",
    "HTTPS uniquement"
   ],
   "a": 3
  },
  {
   "l": "Le déploiement par FTPS est refusé — réglage à vérifier :",
   "o": [
    "Always On sur l'emplacement de production",
    "L'affinité ARR (sessions collantes)",
    "L'état FTP et les identifiants de base",
    "Le contrôle d'intégrité de l'application"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Associer www.contoso.com à WebApp7 — enregistrements DNS :</b></p><p>Pour un sous-domaine comme www, on crée un <b>CNAME</b> vers <code>webapp7.azurewebsites.net</code>, et un <b>TXT</b> <code>asuid.www</code> contenant l'ID de vérification du domaine (affiché dans le portail), qui prouve que vous possédez le domaine.</p><p>Pour le domaine racine (contoso.com), on utilise un enregistrement <b>A</b> vers l'adresse IP de l'application, plus le TXT <code>asuid</code>.</p><p><b>2. Certificat TLS gratuit renouvelé automatiquement :</b></p><p>Le <b>certificat managé App Service</b> est gratuit et renouvelé automatiquement pour un domaine personnalisé déjà validé. Il ne prend pas en charge les domaines génériques (*.contoso.com) et ne peut pas être exporté. Pour cela, on achète un certificat ou on en importe un depuis Key Vault.</p><p><b>3. Rediriger toutes les requêtes HTTP de WebApp26 vers HTTPS :</b></p><p>Le réglage <b>HTTPS uniquement</b> redirige automatiquement les requêtes HTTP vers HTTPS. On règle aussi la <b>version TLS minimale</b> (1.2 recommandée) pour refuser les protocoles anciens.</p><p><b>4. Le déploiement par FTPS est refusé — réglage à vérifier :</b></p><p>Dans <b>Configuration > Paramètres généraux</b>, l'<b>état FTP</b> peut être réglé sur « FTPS uniquement » ou « Désactivé », et l'authentification de base (utilisée par FTP) peut être désactivée. Pour la sécurité, Microsoft recommande de désactiver FTP et de préférer d'autres méthodes de déploiement.</p>",
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
 "keep": "Sous-domaine = CNAME + TXT asuid ; racine = A + TXT asuid. TLS gratuit et auto-renouvelé = certificat managé App Service. Rediriger HTTP vers HTTPS = HTTPS uniquement. FTP refusé = état FTP ou authentification de base désactivés."
},
{
 "id": "D3-318",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous écrivez des fichiers Bicep pour l'infrastructure. Que devez-vous écrire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Réutiliser la définition d'un réseau virtuel standard dans plusieurs fichiers :",
   "o": [
    "Un module Bicep (mot-clé module)",
    "Une variable globale partagée",
    "Un verrou de ressource par fichier",
    "Une sortie dans chaque fichier, sans module"
   ],
   "a": 0
  },
  {
   "l": "Ajouter un sous-réseau à VNet1, qui existe déjà, sans le redéployer :",
   "o": [
    "param vnet object = { name: 'VNet1', id: resourceId('…/virtualNetworks', 'VNet1') }",
    "resource vnet '…/virtualNetworks@2023-04-01' existing = { name: 'VNet1' }",
    "output vnet string = 'VNet1'",
    "module vnet './vnet.bicep' = { name: 'VNet1', params: { mode: 'existing' } }"
   ],
   "a": 1
  },
  {
   "l": "Déployer une IP publique seulement si publicAccess vaut true :",
   "o": [
    "resource pip … = [for i in range(0, publicAccess): { … }]",
    "resource pip … existing = { name: 'pip1' }",
    "resource pip '…/publicIPAddresses@2023-04-01' = if (publicAccess) { … }",
    "module pip './pip.bicep' = { dependsOn: [publicAccess] }"
   ],
   "a": 2
  },
  {
   "l": "Le paramètre env n'accepte que dev, test et prod :",
   "o": [
    "@description('dev, test, prod')",
    "@allowed(['dev', 'test', 'prod'])",
    "@metadata({ values: 'dev,test,prod' })",
    "@minLength(3)"
   ],
   "a": 1
  },
  {
   "l": "Créer le groupe RG-App puis y déployer un compte — targetScope :",
   "o": [
    "'subscription'",
    "'managementGroup'",
    "'resourceGroup'",
    "'tenant'"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Réutiliser la définition d'un réseau virtuel standard dans plusieurs fichiers :</b></p><p>Un <b>module</b> est un fichier Bicep réutilisable, appelé depuis un autre fichier avec <code>module vnet './vnet.bicep' = { name: ..., params: {...} }</code>. On peut le stocker localement, dans un registre Bicep ou en Template Spec.</p><p><b>2. Ajouter un sous-réseau à VNet1, qui existe déjà, sans le redéployer :</b></p><p>Le mot-clé <b>existing</b> déclare une ressource qui existe déjà : on peut lire ses propriétés et l'utiliser comme parent (<code>parent: vnet</code>) sans la redéployer.</p><p>Un paramètre objet ne référence pas une ressource. Un module redéploierait le réseau. Une sortie renvoie une valeur.</p><p><b>3. Déployer une IP publique seulement si publicAccess vaut true :</b></p><p>Le mot-clé <b>if</b> après le signe égal crée un <b>déploiement conditionnel</b> (équivalent de l'élément <code>condition</code> en JSON ARM). Si la condition est fausse, la ressource n'est pas déployée.</p><p>Une boucle sur un booléen n'a pas de sens. existing référence une ressource existante. dependsOn ordonne des déploiements.</p><p><b>4. Le paramètre env n'accepte que dev, test et prod :</b></p><p><b>@allowed</b> limite un paramètre à une liste de valeurs : le déploiement échoue avant de commencer si la valeur n'en fait pas partie.</p><p>@secure masque une valeur sensible. @minLength impose une longueur minimale. @description documente le paramètre sans rien contrôler.</p><p><b>5. Créer le groupe RG-App puis y déployer un compte — targetScope :</b></p><p>Un groupe de ressources se crée à l'échelle de l'<b>abonnement</b> : le fichier principal utilise <code>targetScope = 'subscription'</code>, crée le groupe, puis appelle un <b>module</b> avec <code>scope: rg</code> pour déployer le compte de stockage dans ce groupe.</p><p>'resourceGroup' est la valeur par défaut, mais un modèle à cette étendue ne peut pas créer son propre groupe de ressources.</p>",
 "portal": {
  "path": [
   "VS Code",
   "main.bicep"
  ],
  "title": "main.bicep",
  "rows": [
   [
    "*module vnet './vnet.bicep'",
    "{ name: 'vnet', params: { … } }"
   ]
  ]
 },
 "keep": "Réutiliser du Bicep = module. Référencer sans redéployer = existing. Déployer ou non une ressource = if (Bicep) / condition (JSON). Liste de valeurs permises = @allowed ; secret = @secure. Créer un groupe de ressources en Bicep = targetScope 'subscription' + module avec scope."
},
{
 "id": "D3-319",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous écrivez des modèles ARM JSON. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Identifiant complet de VNet1 dans le même groupe de ressources :",
   "o": [
    "reference(resourceGroup().id, 'VNet1', '2023-04-01', 'Full')",
    "uniqueString(resourceGroup().id, 'VNet1')",
    "resourceId('Microsoft.Network/virtualNetworks', 'VNet1')",
    "concat('VNet1')"
   ],
   "a": 2
  },
  {
   "l": "Cinq comptes de stockage identiques nommés à partir d'un index :",
   "o": [
    "Un fichier de paramètres différent par compte",
    "copy, avec copyIndex() dans le nom",
    "condition",
    "dependsOn"
   ],
   "a": 1
  },
  {
   "l": "Écriture de vmSize dans un fichier de paramètres :",
   "o": [
    "\"vmSize\": { \"type\": \"string\", \"defaultValue\": \"Standard_D2s_v5\" }",
    "\"parameters\": { \"vmSize\": \"Standard_D2s_v5\" }",
    "\"variables\": { \"vmSize\": { \"value\": \"Standard_D2s_v5\" } }",
    "\"parameters\": { \"vmSize\": { \"value\": \"Standard_D2s_v5\" } }"
   ],
   "a": 3
  },
  {
   "l": "La VM est parfois créée avant son interface réseau :",
   "o": [
    "Un élément dependsOn vers l'interface",
    "Une condition sur la ressource VM",
    "Un élément copy sur l'interface",
    "Une sortie (output) avec l'ID de l'interface"
   ],
   "a": 0
  },
  {
   "l": "Le modèle principal accède à des modèles liés d'un compte privé :",
   "o": [
    "Avec une URL qui contient un jeton SAS",
    "Avec un chemin local C:\\templates\\vnet.json",
    "Les modèles liés doivent toujours être publics",
    "Avec la clé du compte écrite dans le modèle"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Identifiant complet de VNet1 dans le même groupe de ressources :</b></p><p><b>resourceId()</b> construit l'identifiant complet d'une ressource à partir de son type et de son nom (et éventuellement de l'abonnement et du groupe). <b>reference()</b> renvoie l'état d'exécution (propriétés) d'une ressource. <b>uniqueString()</b> génère un hachage déterministe pour des noms uniques.</p><p><b>2. Cinq comptes de stockage identiques nommés à partir d'un index :</b></p><p>L'élément <b>copy</b> (avec <code>count</code>) crée plusieurs instances d'une ressource ; <b>copyIndex()</b> donne l'index de l'itération, utilisable dans le nom. En Bicep, on écrit une boucle <code>[for i in range(0, 5): {...}]</code>.</p><p>condition permet de déployer ou non une ressource. Plusieurs fichiers de paramètres demanderaient plusieurs déploiements.</p><p><b>3. Écriture de vmSize dans un fichier de paramètres :</b></p><p>Dans un <b>fichier de paramètres</b> JSON, chaque paramètre est un objet avec une propriété <b>value</b> (ou <b>reference</b> pour un secret Key Vault), dans la section <code>parameters</code>.</p><p><code>defaultValue</code> s'écrit dans le <b>modèle</b>, pas dans le fichier de paramètres. Un fichier de paramètres n'a pas de section variables.</p><p><b>4. La VM est parfois créée avant son interface réseau :</b></p><p><b>dependsOn</b> indique à Resource Manager qu'une ressource doit attendre la fin du déploiement d'une autre. Sans dépendance, les ressources sont déployées en parallèle.</p><p>En Bicep, les dépendances sont le plus souvent déduites automatiquement quand une ressource référence une propriété d'une autre (par exemple <code>nic.id</code>).</p><p><b>5. Le modèle principal accède à des modèles liés d'un compte privé :</b></p><p>Un <b>modèle lié</b> est référencé par une URL (<code>templateLink.uri</code>) que Resource Manager doit pouvoir lire. Pour un stockage privé, on ajoute un <b>jeton SAS</b> à l'URL (passé en paramètre sécurisé). Les Template Specs et les modules Bicep évitent aujourd'hui ce besoin.</p>",
 "portal": {
  "path": [
   "Déploiement personnalisé",
   "Modifier le modèle"
  ],
  "title": "Fonctions de modèle",
  "rows": [
   [
    "*resourceId()",
    "ID complet"
   ],
   [
    "reference()",
    "Propriétés à l'exécution"
   ],
   [
    "uniqueString()",
    "Hachage déterministe"
   ]
  ]
 },
 "keep": "ID d'une ressource dans un modèle = resourceId(). N instances = copy + copyIndex() (boucle for en Bicep). Fichier de paramètres : { \"value\": … } ou { \"reference\": … }. Ordre de déploiement = dependsOn (implicite en Bicep par référence). Modèle lié privé = URL + SAS (ou Template Spec / module Bicep)."
},
{
 "id": "D3-320",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous administrez des registres Azure Container Registry. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Supprimer les manifestes non étiquetés de ACR6 après 7 jours :",
   "o": [
    "La géoréplication vers une seconde région",
    "La rétention des manifestes non étiquetés",
    "Une stratégie de cycle de vie de compte de stockage",
    "Le compte administrateur du registre"
   ],
   "a": 1
  },
  {
   "l": "Reconstruire l'image dans ACR7 quand l'image de base node:20 change :",
   "o": [
    "La géoréplication du registre",
    "Un webhook vers Azure Advisor",
    "Une tâche ACR (mise à jour de l'image de base)",
    "Une stratégie de rétention des manifestes"
   ],
   "a": 2
  },
  {
   "l": "Un partenaire tire seulement le dépôt app-partenaire de ACR8 :",
   "o": [
    "Un point de terminaison privé pour le partenaire",
    "Le rôle AcrPull sur le registre entier",
    "Le compte administrateur du registre",
    "Un jeton avec une carte d'étendue"
   ],
   "a": 3
  },
  {
   "l": "Réplication automatique en France Central et Europe Ouest — niveau de ACR1 :",
   "o": [
    "De base",
    "Premium",
    "Standard",
    "N'importe quel niveau"
   ],
   "a": 1
  },
  {
   "l": "ACR11 accessible seulement depuis VNet5 par une IP privée :",
   "o": [
    "Le compte administrateur avec un mot de passe fort",
    "Un point de terminaison privé (Premium)",
    "Une stratégie de rétention des manifestes",
    "Le niveau De base avec un pare-feu"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Supprimer les manifestes non étiquetés de ACR6 après 7 jours :</b></p><p>La <b>stratégie de rétention</b> d'ACR supprime automatiquement les manifestes <b>non étiquetés</b> après un nombre de jours. Elle est disponible au niveau <b>Premium</b>. On peut aussi utiliser des tâches ACR de purge (<code>acr purge</code>) planifiées.</p><p><b>2. Reconstruire l'image dans ACR7 quand l'image de base node:20 change :</b></p><p>Les <b>tâches ACR</b> peuvent se déclencher sur un commit de code source, une planification ou la <b>mise à jour de l'image de base</b> : elles reconstruisent alors automatiquement l'image dépendante, par exemple pour appliquer des correctifs de sécurité.</p><p><b>3. Un partenaire tire seulement le dépôt app-partenaire de ACR8 :</b></p><p>Les <b>jetons délimités aux dépôts</b>, associés à une <b>carte d'étendue</b>, donnent des droits (lecture, écriture) sur des dépôts précis. Le rôle AcrPull s'applique à <b>tous</b> les dépôts du registre.</p><p><b>4. Réplication automatique en France Central et Europe Ouest — niveau de ACR1 :</b></p><p>Azure Container Registry a trois niveaux : <b>De base</b>, <b>Standard</b> et <b>Premium</b>. Seul <b>Premium</b> propose la <b>géoréplication</b> (un même registre répliqué dans plusieurs régions), ainsi que les points de terminaison privés et les clés gérées par le client.</p><p>Premium est donc le niveau le moins cher qui répond au besoin.</p><p><b>5. ACR11 accessible seulement depuis VNet5 par une IP privée :</b></p><p>Les <b>points de terminaison privés</b> d'ACR exigent le niveau <b>Premium</b>. On désactive ensuite l'accès réseau public. La zone DNS privée est <code>privatelink.azurecr.io</code>.</p>",
 "portal": {
  "path": [
   "Registres de conteneurs",
   "ACR6"
  ],
  "title": "ACR6 | Stratégies de rétention",
  "menu": [
   "*Stratégies"
  ],
  "rows": [
   [
    "*Rétention (manifestes non étiquetés)",
    "7 jours"
   ],
   [
    "Niveau",
    "Premium"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Purger les manifestes orphelins = stratégie de rétention (Premium) ou acr purge. Reconstruire quand l'image de base change = tâche ACR. Droits par dépôt = jeton + carte d'étendue. Géoréplication ACR, points de terminaison privés = Premium. ACR privé = Premium + point de terminaison privé."
},
{
 "id": "D3-321",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous déployez et déplacez des ressources avec Resource Manager. Que se passe-t-il ou que devez-vous faire dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM1 et ses disques passent de Sub1 à Sub2, même locataire — ce qui change :",
   "o": [
    "Sa région",
    "Sa taille",
    "Son système d'exploitation",
    "Son ID de ressource"
   ],
   "a": 3
  },
  {
   "l": "Modèle déployé en mode Complet dans RG1, qui contient VM1 non décrite :",
   "o": [
    "VM1 est supprimée",
    "Le déploiement échoue",
    "VM1 est conservée sans changement",
    "VM1 est arrêtée"
   ],
   "a": 0
  },
  {
   "l": "20 VM déployées, erreur de quota de vCPU régional :",
   "o": [
    "Ajouter un dependsOn sur la VM",
    "Augmenter le quota de vCPU (ou changer de famille)",
    "Créer un nouveau groupe de ressources pour la VM",
    "Passer le déploiement en mode Complet"
   ],
   "a": 1
  },
  {
   "l": "Des milliers de déploiements dans un groupe — limite de l'historique :",
   "o": [
    "Il supprime les déploiements les plus anciens (près de 800)",
    "Il bloque tout nouveau déploiement jusqu'au nettoyage",
    "Il supprime les ressources les plus anciennes du groupe",
    "Il archive l'historique dans un compte de stockage"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. VM1 et ses disques passent de Sub1 à Sub2, même locataire — ce qui change :</b></p><p>L'<b>ID de ressource</b> a la forme <code>/subscriptions/&lt;id&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Compute/virtualMachines/VM1</code>. Il contient l'abonnement et le groupe de ressources : il <b>change</b> lors du déplacement. Les scripts et alertes qui utilisent l'ancien ID doivent être mis à jour.</p><p>La région, la taille et le système d'exploitation ne changent pas. Pour changer de région, on utilise Azure Resource Mover ou Site Recovery.</p><p><b>2. Modèle déployé en mode Complet dans RG1, qui contient VM1 non décrite :</b></p><p>En mode <b>Complet</b>, Resource Manager <b>supprime</b> les ressources du groupe de ressources qui ne sont pas dans le modèle (sauf si un verrou l'en empêche). En mode <b>Incrémentiel</b>, le mode par défaut, les ressources absentes du modèle sont conservées.</p><p>Bonne pratique : lancer d'abord une opération <b>what-if</b> pour voir ce qui serait supprimé.</p><p><b>3. 20 VM déployées, erreur de quota de vCPU régional :</b></p><p>Les <b>quotas</b> de vCPU (total régional et par famille) limitent le nombre de VM. On demande une augmentation dans <b>Utilisation + quotas</b>, ou on choisit une famille qui a encore du quota. Le mode de déploiement et le groupe de ressources n'y changent rien.</p><p><b>4. Des milliers de déploiements dans un groupe — limite de l'historique :</b></p><p>L'historique est limité à <b>800 déploiements</b> par étendue. Azure <b>supprime automatiquement</b> les plus anciens quand on approche de la limite (sauf si un verrou l'en empêche). Les ressources ne sont jamais supprimées pour autant.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "*Propriétés"
  ],
  "rows": [
   [
    "*ID de ressource",
    "/subscriptions/<Sub2>/resourceGroups/RG2/…/VM1"
   ],
   [
    "Région",
    "Inchangée"
   ]
  ]
 },
 "keep": "Déplacer change l'ID de ressource, jamais la région. Mode Complet = supprime ce qui n'est pas dans le modèle ; tester avec what-if. Erreur de quota vCPU = augmentation de quota ou autre famille. Historique des déploiements : 800 par étendue, purge automatique."
},
{
 "id": "D3-322",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous industrialisez vos modèles et leurs secrets. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Partager un modèle validé, versionné, et contrôler qui le déploie :",
   "o": [
    "Azure Advisor",
    "Un e-mail avec le fichier JSON",
    "Une Template Spec",
    "Un compte de stockage public"
   ],
   "a": 2
  },
  {
   "l": "Gérer des ressources comme un tout et refuser leur modification hors du modèle :",
   "o": [
    "Un déploiement en mode Incrémentiel",
    "Une pile de déploiement avec refus",
    "Une Template Spec versionnée par équipe",
    "Un verrou Lecture seule sur chaque ressource"
   ],
   "a": 1
  },
  {
   "l": "Obtenir un modèle d'une VM créée dans le portail :",
   "o": [
    "Utiliser Azure Advisor, onglet Excellence opérationnelle",
    "Ouvrir le journal d'activité du groupe",
    "Utiliser Exporter le modèle",
    "Créer une image généralisée de la VM"
   ],
   "a": 2
  },
  {
   "l": "Mot de passe qui n'apparaît pas dans l'historique des déploiements — type :",
   "o": [
    "string",
    "secureobject avec valeur par défaut",
    "securestring",
    "object"
   ],
   "a": 2
  },
  {
   "l": "Mot de passe lu dans KV1 depuis le fichier de paramètres — condition sur KV1 :",
   "o": [
    "KV1 doit utiliser des stratégies d'accès, sans RBAC",
    "KV1 doit avoir son point de terminaison public désactivé",
    "KV1 doit être dans le même groupe de ressources que la VM déployée",
    "KV1 doit autoriser Resource Manager pour les modèles"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Partager un modèle validé, versionné, et contrôler qui le déploie :</b></p><p>Une <b>Template Spec</b> est une ressource Azure qui stocke un modèle (JSON ou Bicep) avec des <b>versions</b>. On donne l'accès avec un rôle (par exemple Lecteur) et on déploie directement depuis la Template Spec.</p><p><b>2. Gérer des ressources comme un tout et refuser leur modification hors du modèle :</b></p><p>Une <b>pile de déploiement</b> gère un ensemble de ressources comme une unité : elle peut supprimer les ressources retirées du modèle, et appliquer des <b>affectations de refus</b> (DenyDelete ou DenyWriteAndDelete) qui protègent les ressources gérées.</p><p>Une Template Spec stocke un modèle, sans protection. Des verrous individuels sont plus lourds à gérer.</p><p><b>3. Obtenir un modèle d'une VM créée dans le portail :</b></p><p><b>Exporter le modèle</b> génère un modèle ARM (et propose une version Bicep) à partir de ressources existantes, ou de l'historique d'un déploiement. Le modèle doit souvent être nettoyé et paramétré avant réutilisation.</p><p>Une image capture le disque, pas la configuration Azure (réseau, taille…).</p><p><b>4. Mot de passe qui n'apparaît pas dans l'historique des déploiements — type :</b></p><p>Le type <b>securestring</b> n'est ni journalisé ni renvoyé dans l'historique des déploiements. Mieux encore : référencer un secret de <b>Key Vault</b> dans le fichier de paramètres, pour ne jamais saisir le mot de passe.</p><p>Un <code>string</code> apparaîtrait dans l'historique. Une valeur par défaut pour un secret est une mauvaise pratique.</p><p><b>5. Mot de passe lu dans KV1 depuis le fichier de paramètres — condition sur KV1 :</b></p><p>Pour qu'un déploiement lise un secret par référence (<code>\"reference\": { \"keyVault\": { \"id\": ... }, \"secretName\": ... }</code>), le coffre doit avoir <b>enabledForTemplateDeployment</b> activé, et l'utilisateur qui déploie doit avoir l'autorisation <code>Microsoft.KeyVault/vaults/deploy/action</code>.</p><p>Le coffre peut être dans un autre groupe de ressources, et le modèle d'autorisation n'a pas d'importance pour ce réglage.</p>",
 "portal": {
  "path": [
   "Spécifications de modèle"
  ],
  "title": "socle-vm | Versions",
  "menu": [
   "Vue d'ensemble",
   "*Versions",
   "Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*1.0",
    "Publiée"
   ],
   [
    "1.1",
    "Publiée"
   ]
  ],
  "btn": "Déployer"
 },
 "keep": "Partager un modèle versionné avec RBAC = Template Spec. Gérer et protéger un ensemble = pile de déploiement (affectations de refus). Modèle depuis l'existant = Exporter le modèle. Mot de passe dans un modèle = securestring (ou référence Key Vault). Référence Key Vault dans un fichier de paramètres = enabledForTemplateDeployment."
},
{
 "id": "D3-323",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>L'équipe sécurité impose des règles de chiffrement et de démarrage pour les VM. Vous devez choisir la fonctionnalité qui répond à chaque exigence.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Fonctionnalités",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "Azure Disk Encryption",
  "Le chiffrement sur l'hôte",
  "Un jeu de chiffrement de disque",
  "Une VM de génération 2",
  "Les clés gérées par la plateforme",
  "Une VM de génération 1"
 ],
 "tgts": [
  {
   "l": "Chiffrer les volumes de VM14 avec BitLocker, clés dans un coffre de clés",
   "a": 0
  },
  {
   "l": "Disque temporaire et caches de VM15 chiffrés de bout en bout, sans agent",
   "a": 1
  },
  {
   "l": "Chiffrer les disques de plusieurs VM avec vos propres clés, au niveau du stockage",
   "a": 2
  },
  {
   "l": "Démarrage sécurisé et vTPM du lancement fiable",
   "a": 3
  }
 ],
 "expl": "<p><b>1. Chiffrer les volumes de VM14 avec BitLocker, clés dans un coffre de clés</b></p><p><b>Azure Disk Encryption</b> (ADE) chiffre les volumes <b>dans la VM</b> avec BitLocker (Windows) ou DM-Crypt (Linux). Les clés sont stockées dans un <b>coffre de clés</b>, qui doit avoir l'option « Azure Disk Encryption pour le chiffrement de volume » et être dans la même région.</p><p>Le chiffrement côté serveur (SSE) chiffre les disques au niveau du stockage, sans BitLocker. Microsoft recommande aujourd'hui plutôt le <b>chiffrement sur l'hôte</b> pour les nouvelles VM, ADE étant en voie de retrait.</p><p><b>2. Disque temporaire et caches de VM15 chiffrés de bout en bout, sans agent</b></p><p>Le <b>chiffrement sur l'hôte</b> chiffre les données sur l'hôte physique : disque temporaire, caches des disques et flux vers le stockage. Il n'utilise aucun agent dans la VM. Il faut d'abord inscrire la fonctionnalité EncryptionAtHost dans l'abonnement.</p><p>Azure Disk Encryption chiffre dans la VM avec BitLocker ou DM-Crypt. Les deux autres options concernent les comptes de stockage.</p><p><b>3. Chiffrer les disques de plusieurs VM avec vos propres clés, au niveau du stockage</b></p><p>Un <b>jeu de chiffrement de disque</b> référence une clé de Key Vault et dispose d'une identité managée pour l'utiliser. On l'associe aux disques managés pour un chiffrement côté serveur avec <b>clés gérées par le client</b>.</p><p><b>4. Démarrage sécurisé et vTPM du lancement fiable</b></p><p>Le <b>Lancement fiable</b> (démarrage sécurisé, vTPM, surveillance de l'intégrité du démarrage) exige des VM de <b>génération 2</b>, qui démarrent en UEFI. Les VM de génération 1 utilisent un BIOS classique.</p><p>Le type de sécurité se choisit à la création de la VM.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM14"
  ],
  "title": "VM14 | Disques › Chiffrement supplémentaire",
  "menu": [
   "*Disques"
  ],
  "rows": [
   [
    "*Azure Disk Encryption",
    "Disques du système d'exploitation et de données"
   ],
   [
    "Coffre de clés",
    "KV-ADE"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "BitLocker/DM-Crypt dans la VM = Azure Disk Encryption. Disque temporaire + caches sans agent = chiffrement sur l'hôte. Disques managés + clé client = jeu de chiffrement de disque. Lancement fiable = génération 2 (UEFI)."
},
{
 "id": "D3-324",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Des applications web doivent communiquer avec des ressources privées. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "WebApp10 appelle une API d'une VM qui n'a qu'une IP privée dans VNet2 :",
   "o": [
    "Un domaine personnalisé pour WebApp10",
    "Un point de terminaison privé pour WebApp10",
    "L'intégration au réseau virtuel (VNet2)",
    "Des restrictions d'accès sur WebApp10"
   ],
   "a": 2
  },
  {
   "l": "WebApp11 accessible seulement depuis VNet3 et le site local, jamais d'Internet :",
   "o": [
    "Un emplacement de déploiement dédié",
    "Une adresse IP publique statique",
    "L'intégration au réseau virtuel de VNet3, sans autre réglage",
    "Un point de terminaison privé, accès public coupé"
   ],
   "a": 3
  },
  {
   "l": "N'accepter que le trafic de 203.0.113.0/24 sans changer l'architecture :",
   "o": [
    "Des restrictions d'accès (Autoriser 203.0.113.0/24)",
    "Un point de terminaison de service sur l'application",
    "Un pare-feu de compte de stockage devant l'application",
    "Un groupe de sécurité réseau associé à l'application"
   ],
   "a": 0
  },
  {
   "l": "Appeler une API d'un serveur local sans VPN, connexions sortantes seulement :",
   "o": [
    "Un emplacement de déploiement",
    "Les connexions hybrides",
    "Des restrictions d'accès sortantes",
    "Un point de terminaison privé"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. WebApp10 appelle une API d'une VM qui n'a qu'une IP privée dans VNet2 :</b></p><p>L'<b>intégration au réseau virtuel</b> concerne le trafic <b>sortant</b> : l'application peut joindre les ressources du réseau virtuel (et, par lui, ce qui est appairé ou relié par VPN). Elle utilise un sous-réseau délégué dédié.</p><p>Un <b>point de terminaison privé</b> concerne le trafic <b>entrant</b> : il donne à l'application une adresse privée. Les restrictions d'accès filtrent aussi l'entrant.</p><p><b>2. WebApp11 accessible seulement depuis VNet3 et le site local, jamais d'Internet :</b></p><p>Le <b>point de terminaison privé</b> donne à l'application une adresse IP privée dans VNet3 : le trafic <b>entrant</b> arrive par le réseau privé (et par le VPN depuis le site local). On désactive ensuite l'<b>accès réseau public</b>.</p><p>L'intégration au réseau virtuel ne gère que le trafic sortant.</p><p><b>3. N'accepter que le trafic de 203.0.113.0/24 sans changer l'architecture :</b></p><p>Les <b>restrictions d'accès</b> d'App Service sont une liste ordonnée de règles Autoriser/Refuser par adresse IP, étiquette de service ou sous-réseau (avec point de terminaison de service). Dès qu'une règle Autoriser existe, tout le reste est refusé.</p><p>On ne peut pas associer un NSG directement à une application web multilocataire.</p><p><b>4. Appeler une API d'un serveur local sans VPN, connexions sortantes seulement :</b></p><p>Les <b>connexions hybrides</b> utilisent Azure Relay : un agent (Hybrid Connection Manager) installé sur le site local ouvre une connexion sortante, et l'application atteint ainsi un hôte et un port précis, sans VPN ni ouverture de port entrant.</p>",
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
 "keep": "Sortant vers un VNet = intégration au réseau virtuel ; entrant privé = point de terminaison privé. Entrant uniquement privé = point de terminaison privé + accès public désactivé. Filtrer l'entrant par IP = restrictions d'accès. Joindre un serveur local sans VPN = connexions hybrides."
},
{
 "id": "D3-325",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous dimensionnez de nouvelles VM. Que devez-vous choisir ou répondre pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Réduire la latence et la charge CPU d'une VM à fort trafic réseau :",
   "o": [
    "Le transfert IP",
    "La mise en réseau accélérée",
    "Un groupe de sécurité réseau",
    "Une adresse IP publique statique"
   ],
   "a": 1
  },
  {
   "l": "Licences Windows Server avec Software Assurance — option à cocher :",
   "o": [
    "Instance Spot Azure à prix fixe",
    "Azure Hybrid Benefit (licence existante)",
    "Mise en réseau accélérée sur l'interface",
    "Diagnostics de démarrage gérés"
   ],
   "a": 1
  },
  {
   "l": "Signification de la lettre a dans Standard_D2as_v5 :",
   "o": [
    "Une mise en réseau accélérée",
    "Une VM ARM",
    "Un disque Ultra inclus",
    "Un processeur AMD"
   ],
   "a": 3
  },
  {
   "l": "IP publique d'un équilibreur qui survit à la perte de n'importe quelle zone :",
   "o": [
    "Dynamique",
    "Redondante interzone",
    "SKU De base",
    "Zonale dans la zone 2"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Réduire la latence et la charge CPU d'une VM à fort trafic réseau :</b></p><p>La <b>mise en réseau accélérée</b> (SR-IOV) fait passer le trafic directement par la carte physique, en contournant le commutateur virtuel de l'hôte : latence plus faible, débit plus élevé, moins de charge CPU. Elle dépend de la taille de VM.</p><p>Le transfert IP sert aux appliances qui routent du trafic. Les deux autres options n'améliorent pas les performances.</p><p><b>2. Licences Windows Server avec Software Assurance — option à cocher :</b></p><p>L'option <b>Azure Hybrid Benefit</b> (« Utiliser une licence Windows Server existante ») facture la VM au tarif d'une VM Linux de base, sans le coût de la licence Windows. Elle peut aussi être activée après la création.</p><p><b>3. Signification de la lettre a dans Standard_D2as_v5 :</b></p><p>Dans les noms de tailles, <b>a</b> indique un processeur <b>AMD</b>, <b>s</b> la prise en charge du stockage Premium, <b>d</b> un disque temporaire local, <b>p</b> un processeur ARM, <b>l</b> une mémoire réduite. Le chiffre (2) est le nombre de vCPU, et v5 la version.</p><p><b>4. IP publique d'un équilibreur qui survit à la perte de n'importe quelle zone :</b></p><p>Une adresse IP publique Standard peut être <b>redondante interzone</b> (servie par toutes les zones), <b>zonale</b> (liée à une zone) ou sans zone. Une adresse redondante interzone reste disponible si une zone tombe.</p><p>Le SKU De base est retiré et ne prend pas en charge les zones.</p>",
 "portal": {
  "path": [
   "Interfaces réseau",
   "vm-nic"
  ],
  "title": "vm-nic | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble"
  ],
  "rows": [
   [
    "*Mise en réseau accélérée",
    "Activée"
   ]
  ]
 },
 "keep": "Réseau plus rapide et moins de CPU = mise en réseau accélérée. Licences Windows existantes = Azure Hybrid Benefit. Lettres de taille : a AMD, s Premium, d disque local, p ARM, l peu de mémoire. IP qui survit à une zone = Standard, redondante interzone."
},
{
 "id": "D3-326",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous automatisez des tâches de déploiement avec Azure CLI. Quelle commande devez-vous utiliser pour chaque tâche ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Voir ce qu'un modèle modifié créera, modifiera ou supprimera dans RG-Prod :",
   "o": [
    "az group export",
    "az deployment group what-if",
    "az bicep decompile",
    "az deployment group validate uniquement"
   ],
   "a": 1
  },
  {
   "l": "Convertir un modèle ARM JSON en Bicep :",
   "o": [
    "az bicep publish --file template.json",
    "az bicep build --file template.json",
    "az deployment group export --name deploy1",
    "az bicep decompile --file template.json"
   ],
   "a": 3
  },
  {
   "l": "Construire une image depuis un Dockerfile dans ACR1, sans Docker local :",
   "o": [
    "az acr build --registry ACR1 --image app:v1 .",
    "az container create --image app:v1 --file Dockerfile",
    "docker push ACR1/app:v1 sans Docker local",
    "az acr import --name ACR1 --source ./Dockerfile"
   ],
   "a": 0
  },
  {
   "l": "Copier nginx:1.25 de Docker Hub dans ACR2 sans la télécharger :",
   "o": [
    "az acr login",
    "az acr import",
    "az acr build",
    "az acr repository delete"
   ],
   "a": 1
  },
  {
   "l": "Déployer un fichier ZIP sur WebApp22 :",
   "o": [
    "az webapp deploy --src-path app.zip --type zip",
    "az acr build --file app.zip --registry ACR1",
    "az webapp create --zip app.zip --name webapp1",
    "az storage blob upload --file app.zip"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Voir ce qu'un modèle modifié créera, modifiera ou supprimera dans RG-Prod :</b></p><p><b>what-if</b> compare le modèle à l'état actuel et affiche les changements prévus : créations, modifications (propriété par propriété), suppressions (en mode Complet), sans rien déployer.</p><p><b>validate</b> vérifie seulement que le modèle est valide et déployable. <b>decompile</b> convertit du JSON en Bicep. <b>export</b> produit un modèle à partir de l'existant.</p><p><b>2. Convertir un modèle ARM JSON en Bicep :</b></p><p><b>decompile</b> convertit du JSON ARM en Bicep (avec parfois des avertissements à corriger). <b>build</b> fait l'inverse : il compile un fichier Bicep en JSON ARM. <b>publish</b> publie un module dans un registre.</p><p><b>3. Construire une image depuis un Dockerfile dans ACR1, sans Docker local :</b></p><p><b>az acr build</b> (ACR Tasks) envoie le contexte de construction au registre, qui construit l'image dans Azure et la stocke. Aucun Docker local n'est nécessaire.</p><p>docker push demande Docker et une image déjà construite. az acr import copie une image depuis un autre registre. az container create lance un conteneur dans ACI.</p><p><b>4. Copier nginx:1.25 de Docker Hub dans ACR2 sans la télécharger :</b></p><p><b>az acr import</b> copie une image directement d'un registre (Docker Hub, un autre ACR, etc.) vers votre registre, côté serveur.</p><p>build construit une image depuis un Dockerfile. login authentifie le client Docker local. delete supprime un dépôt.</p><p><b>5. Déployer un fichier ZIP sur WebApp22 :</b></p><p><code>az webapp deploy --resource-group RG1 --name WebApp22 --src-path app.zip --type zip</code> déploie le paquet (ZIP deploy). L'ancienne commande <code>az webapp deployment source config-zip</code> fait la même chose.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az deployment group what-if",
    "+ Créer · ~ Modifier · − Supprimer"
   ],
   [
    "az deployment group validate",
    "Validité seulement"
   ]
  ]
 },
 "keep": "Voir les changements sans déployer = what-if. JSON vers Bicep = decompile. Construire une image sans Docker local = az acr build. Copier une image d'un registre à l'autre = az acr import. Déploiement ZIP = az webapp deploy --type zip."
},
{
 "id": "D3-327",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous organisez les plans App Service. Que devez-vous répondre ou choisir pour chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Trois applications dans un plan S2 à 2 instances — utilisation des ressources :",
   "o": [
    "Chaque application est facturée comme un plan séparé",
    "Seule la première application tourne sur les 2 instances",
    "Les trois tournent sur les 2 mêmes instances",
    "Chaque application obtient ses propres 2 instances dans le plan"
   ],
   "a": 2
  },
  {
   "l": "Une application Windows et une application Linux dans le même plan :",
   "o": [
    "Non, un plan est soit Windows soit Linux",
    "Oui, si les deux applications utilisent .NET",
    "Oui, sans aucune restriction de système",
    "Oui, si le plan est au niveau Premium"
   ],
   "a": 0
  },
  {
   "l": "Une application sur six consomme presque tout le CPU du plan :",
   "o": [
    "Activer l'affinité ARR sur toutes les applications",
    "Déplacer l'application gourmande dans son propre plan",
    "Ajouter un emplacement de déploiement au plan",
    "Désactiver Always On sur les autres applications"
   ],
   "a": 1
  },
  {
   "l": "Déplacer WebApp2 vers le plan ASP2 — condition :",
   "o": [
    "ASP2 doit être au niveau Gratuit",
    "WebApp2 doit être supprimée puis recréée",
    "ASP2 doit être dans un autre abonnement",
    "Même région et même groupe de ressources"
   ],
   "a": 3
  },
  {
   "l": "Emplacements et mise à l'échelle automatique au coût le plus bas — niveau :",
   "o": [
    "De base (Basic)",
    "Gratuit (Free)",
    "Partagé (Shared)",
    "Standard"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Trois applications dans un plan S2 à 2 instances — utilisation des ressources :</b></p><p>Un <b>plan App Service</b> définit un ensemble de machines (taille et nombre d'instances). Toutes les applications du plan tournent sur <b>toutes</b> ses instances et partagent CPU et mémoire. On paie le plan, pas chaque application.</p><p>Si une application consomme trop, il faut la déplacer dans un autre plan.</p><p><b>2. Une application Windows et une application Linux dans le même plan :</b></p><p>Le système d'exploitation est une propriété du <b>plan</b> : un plan Windows n'héberge que des applications Windows, et un plan Linux que des applications Linux (code ou conteneurs).</p><p><b>3. Une application sur six consomme presque tout le CPU du plan :</b></p><p>Toutes les applications d'un plan partagent les mêmes instances. Isoler l'application gourmande dans un <b>plan dédié</b> permet de la mettre à l'échelle séparément sans pénaliser les autres.</p><p>Attention : les emplacements de déploiement partagent aussi les ressources du plan.</p><p><b>4. Déplacer WebApp2 vers le plan ASP2 — condition :</b></p><p>On peut changer le plan d'une application (Modifier le plan App Service) vers un plan de la <b>même région</b> et du même « espace web » (en pratique le même groupe de ressources et la même région d'origine). Sinon, il faut cloner ou redéployer l'application.</p><p><b>5. Emplacements et mise à l'échelle automatique au coût le plus bas — niveau :</b></p><p>Les <b>emplacements de déploiement</b> et la <b>mise à l'échelle automatique</b> commencent au niveau <b>Standard</b> (5 emplacements). Premium en offre 20.</p><p>Le niveau De base permet la mise à l'échelle manuelle (jusqu'à 3 instances) et les domaines personnalisés avec TLS, mais pas les emplacements ni la mise à l'échelle automatique. Gratuit et Partagé sont destinés au développement et aux tests.</p>",
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
 "keep": "Les applications d'un plan partagent toutes ses instances ; on paie le plan. Un plan = un seul OS. Application voisine trop gourmande = la sortir dans son propre plan. Changer de plan = même région (et même espace de déploiement). Emplacements et mise à l'échelle auto = Standard minimum."
},
{
 "id": "D3-328",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous configurez des applications web. Où ou comment devez-vous définir chaque élément ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "ApiUrl différent en développement et en production, sans modifier le code :",
   "o": [
    "Dans un verrou de ressource",
    "Dans le plan App Service commun",
    "Dans les paramètres d'application",
    "Dans une étiquette Azure de chaque application"
   ],
   "a": 2
  },
  {
   "l": "Chaîne de connexion dont le secret n'apparaît pas dans la configuration :",
   "o": [
    "Chiffrer le secret avec une SAS de compte",
    "Mettre le secret dans le code source, obfusqué, puis le compiler",
    "Mettre le secret dans une étiquette de l'application",
    "Une référence Key Vault et l'identité managée"
   ],
   "a": 3
  },
  {
   "l": "Commande de démarrage personnalisée d'une application Linux .NET :",
   "o": [
    "Paramètres généraux > Commande de démarrage",
    "Dans le plan App Service de l'application",
    "Dans une étiquette Azure de l'application",
    "Dans le Centre de déploiement uniquement"
   ],
   "a": 0
  },
  {
   "l": "Application conteneurisée depuis ACR5 — option Publier :",
   "o": [
    "Fonction",
    "Code",
    "Conteneur",
    "Application web statique"
   ],
   "a": 2
  },
  {
   "l": "Chaque commit sur main de GitHub déployé sur WebApp17 :",
   "o": [
    "Les journaux d'application vers GitHub",
    "Le Centre de déploiement avec GitHub",
    "Une sauvegarde planifiée depuis le dépôt",
    "Un emplacement de déploiement lié au dépôt"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. ApiUrl différent en développement et en production, sans modifier le code :</b></p><p>Les <b>paramètres d'application</b> (Configuration > Variables d'environnement) sont exposés à l'application comme variables d'environnement et remplacent les valeurs du fichier de configuration. Ils peuvent référencer un secret Key Vault (<code>@Microsoft.KeyVault(...)</code>).</p><p><b>2. Chaîne de connexion dont le secret n'apparaît pas dans la configuration :</b></p><p>Une <b>référence Key Vault</b> (<code>@Microsoft.KeyVault(SecretUri=...)</code>) dans un paramètre d'application fait lire la valeur dans Key Vault au démarrage, avec l'<b>identité managée</b> de l'application, qui doit pouvoir lire les secrets.</p><p><b>3. Commande de démarrage personnalisée d'une application Linux .NET :</b></p><p>Pour les applications Linux, la <b>commande de démarrage</b> (startup command) se règle dans les paramètres généraux de la configuration (ou avec <code>az webapp config set --startup-file</code>).</p><p><b>4. Application conteneurisée depuis ACR5 — option Publier :</b></p><p>App Service peut exécuter une <b>image de conteneur</b> (Linux ou Windows). On choisit <b>Conteneur</b>, puis la source de l'image (ACR, Docker Hub, autre registre) et l'authentification (identité managée avec AcrPull de préférence).</p><p><b>5. Chaque commit sur main de GitHub déployé sur WebApp17 :</b></p><p>Le <b>Centre de déploiement</b> configure le déploiement continu depuis GitHub, Azure Repos, Bitbucket ou un dépôt Git local. Avec GitHub, il crée un workflow GitHub Actions qui construit et déploie à chaque commit.</p>",
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
 "keep": "Configuration par environnement = paramètres d'application. Secret hors de la configuration = référence Key Vault + identité managée. Commande de démarrage Linux = Paramètres généraux. Image de conteneur sur App Service = Publier : Conteneur. Déploiement continu = Centre de déploiement."
},
{
 "id": "D3-329",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous configurez des VM après leur déploiement. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Installer IIS et copier des fichiers sur des VM Windows existantes :",
   "o": [
    "L'extension Custom Script",
    "Un groupe à haute disponibilité",
    "Les diagnostics de démarrage",
    "La console série de la VM"
   ],
   "a": 0
  },
  {
   "l": "Paquets et utilisateurs créés au premier démarrage d'une VM Linux :",
   "o": [
    "La commande Run sur chaque VM",
    "cloud-init (données personnalisées)",
    "Azure Advisor, recommandations",
    "L'extension VMAccess pour Linux"
   ],
   "a": 1
  },
  {
   "l": "État souhaité (rôles, fichiers, services) appliqué et dérives signalées :",
   "o": [
    "Les diagnostics de démarrage des VM",
    "La console série de chaque VM",
    "Une Template Spec de configuration",
    "Azure Machine Configuration"
   ],
   "a": 3
  },
  {
   "l": "L'extension Custom Script échoue sur VM29 — sortie et erreur :",
   "o": [
    "Dans l'état de l'extension et les journaux de l'agent",
    "Dans Azure Advisor, onglet Excellence opérationnelle",
    "Dans la facture du mois, ligne Extensions",
    "Dans les métriques du compte de stockage des scripts"
   ],
   "a": 0
  },
  {
   "l": "Être prévenu 15 minutes avant une maintenance qui redémarre l'hôte :",
   "o": [
    "La console série de la VM",
    "Les diagnostics de démarrage",
    "Le service Scheduled Events",
    "Une alerte de budget sur la VM"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Installer IIS et copier des fichiers sur des VM Windows existantes :</b></p><p>L'<b>extension Custom Script</b> télécharge et exécute un script (depuis un compte de stockage ou GitHub) dans la VM. Elle se déploie par le portail, PowerShell, CLI ou un modèle, et convient à la configuration après déploiement.</p><p>Les diagnostics de démarrage capturent l'écran de démarrage. La console série donne un accès texte en cas de panne. Un groupe à haute disponibilité ne configure rien.</p><p><b>2. Paquets et utilisateurs créés au premier démarrage d'une VM Linux :</b></p><p><b>cloud-init</b> est l'outil standard de configuration au premier démarrage des distributions Linux. On passe le fichier cloud-config dans les <b>données personnalisées</b> à la création de la VM.</p><p>VMAccess sert à réinitialiser l'accès (mot de passe, clé SSH). La commande Run exécute un script ponctuel sur une VM existante.</p><p><b>3. État souhaité (rôles, fichiers, services) appliqué et dérives signalées :</b></p><p><b>Azure Machine Configuration</b> (anciennement configuration invité d'Azure Policy) audite et applique des configurations basées sur DSC dans les VM Azure et les serveurs Arc, et remonte la conformité. Il remplace progressivement Azure Automation State Configuration et l'extension DSC.</p><p><b>4. L'extension Custom Script échoue sur VM29 — sortie et erreur :</b></p><p>Le portail affiche l'<b>état détaillé</b> de l'extension (sortie et erreur). Dans la VM, les journaux sont sous <code>C:\\WindowsAzure\\Logs\\Plugins\\</code> (Windows) ou <code>/var/log/azure/</code> (Linux). Pour réexécuter le même script, il faut supprimer puis réinstaller l'extension, ou changer un paramètre.</p><p><b>5. Être prévenu 15 minutes avant une maintenance qui redémarre l'hôte :</b></p><p><b>Scheduled Events</b>, exposé par le service de métadonnées d'instance (IMDS, <code>169.254.169.254</code>), informe la VM des événements à venir (redémarrage, redéploiement, éviction Spot) avec un préavis. L'application peut s'y préparer.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Extensions + applications",
  "menu": [
   "*Extensions + applications"
  ],
  "rows": [
   [
    "*Custom Script Extension",
    "install-iis.ps1 (compte de stockage)"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Script après déploiement = extension Custom Script. Configuration Linux au premier démarrage = cloud-init (données personnalisées). État souhaité dans les VM = Azure Machine Configuration. Erreur d'extension = état détaillé dans le portail + journaux de l'agent. Préavis de maintenance dans la VM = Scheduled Events (IMDS)."
},
{
 "id": "D3-330",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous gérez le fonctionnement quotidien d'un parc de VM. Vous devez choisir la fonctionnalité qui répond à chaque exigence.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Fonctionnalités",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "L'accès juste-à-temps (JIT)",
  "Une configuration de maintenance",
  "L'arrêt automatique avec notification",
  "Azure Update Manager",
  "Réinitialiser le mot de passe",
  "Azure Bastion",
  "Redéployer la VM"
 ],
 "tgts": [
  {
   "l": "RDP vers VM34 pendant 3 heures sur demande, port 3389 fermé le reste du temps",
   "a": 0
  },
  {
   "l": "Mises à jour de la plateforme des hôtes dédiés dans une fenêtre de 5 heures le dimanche",
   "a": 1
  },
  {
   "l": "VM arrêtées chaque soir à 19 h, développeurs prévenus 30 minutes avant",
   "a": 2
  },
  {
   "l": "Correctifs Windows et Linux planifiés sur 200 VM, avec un rapport de conformité",
   "a": 3
  },
  {
   "l": "Mot de passe administrateur local oublié sur VM6, hors domaine",
   "a": 4
  }
 ],
 "expl": "<p><b>1. RDP vers VM34 pendant 3 heures sur demande, port 3389 fermé le reste du temps</b></p><p>L'<b>accès JIT</b> ferme les ports de gestion par des règles de NSG (ou du Pare-feu Azure) et ne les ouvre, sur demande approuvée, que pour l'adresse IP du demandeur et une durée limitée. Il demande Defender pour serveurs. Azure Bastion est une autre solution qui évite tout port ouvert.</p><p><b>2. Mises à jour de la plateforme des hôtes dédiés dans une fenêtre de 5 heures le dimanche</b></p><p>Les <b>configurations de maintenance</b> (Maintenance Configurations) permettent de contrôler les mises à jour de la plateforme pour les hôtes dédiés et les VM isolées, ou de planifier les correctifs invités, dans une fenêtre définie.</p><p><b>3. VM arrêtées chaque soir à 19 h, développeurs prévenus 30 minutes avant</b></p><p>L'<b>arrêt automatique</b> arrête et libère la VM chaque jour à l'heure choisie (avec le fuseau horaire), et peut envoyer une notification par e-mail ou webhook avant l'arrêt.</p><p><b>4. Correctifs Windows et Linux planifiés sur 200 VM, avec un rapport de conformité</b></p><p><b>Azure Update Manager</b> évalue les mises à jour manquantes, les déploie selon des planifications (configurations de maintenance) et affiche la conformité, pour les VM Azure et les serveurs Arc. Il remplace Update Management d'Azure Automation.</p><p><b>5. Mot de passe administrateur local oublié sur VM6, hors domaine</b></p><p><b>Réinitialiser le mot de passe</b> (Aide > Réinitialiser le mot de passe) utilise l'extension <b>VMAccess</b> pour définir un nouveau mot de passe, ou réinitialiser la configuration RDP. Pour Linux, il permet aussi de réinitialiser une clé SSH.</p><p>Redéployer déplace la VM vers un autre hôte. Restaurer une sauvegarde est inutilement lourd. Un instantané ne change pas le mot de passe.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM34"
  ],
  "title": "VM34 | Se connecter",
  "menu": [
   "*Se connecter"
  ],
  "rows": [
   [
    "*Accès juste-à-temps",
    "Demander l'accès · 3 heures · mon IP"
   ]
  ],
  "btn": "Demander l'accès"
 },
 "keep": "Port RDP ouvert à la demande = accès JIT (Defender pour serveurs). Contrôler la fenêtre de maintenance = configuration de maintenance. Arrêt quotidien + préavis = Arrêt automatique. Correctifs planifiés et conformité = Azure Update Manager. Mot de passe local oublié = Réinitialiser le mot de passe (VMAccess)."
},
{
 "id": "D3-331",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous protégez et arrêtez des VM. Que devez-vous faire pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Sauvegarder rapidement le disque système de VM12 avant une mise à jour risquée :",
   "o": [
    "Un instantané incrémentiel",
    "Une galerie Azure Compute",
    "Un groupe à haute disponibilité",
    "Une image managée généralisée"
   ],
   "a": 0
  },
  {
   "l": "Ne plus payer le calcul de VM23 le week-end en gardant ses disques :",
   "o": [
    "Redémarrer la VM depuis le portail",
    "L'arrêter depuis Windows (Arrêter le système)",
    "L'arrêter depuis le portail (libérée)",
    "Supprimer la VM et garder ses disques"
   ],
   "a": 2
  },
  {
   "l": "Un auditeur télécharge le disque système de VM26 en VHD :",
   "o": [
    "Activer les diagnostics de démarrage de la VM",
    "Générer une URL d'exportation (SAS) du disque",
    "Utiliser Azure File Sync sur la VM",
    "Copier le dossier C:\\Windows vers un partage"
   ],
   "a": 1
  },
  {
   "l": "Créer une VM à partir d'un instantané du disque système de VM27 :",
   "o": [
    "Attacher l'instantané comme disque de données",
    "Restaurer l'instantané dans un compte de stockage",
    "Créer un disque depuis l'instantané, puis la VM",
    "Choisir l'instantané comme image de la Marketplace"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Sauvegarder rapidement le disque système de VM12 avant une mise à jour risquée :</b></p><p>Un <b>instantané</b> est une copie à un instant donné d'un disque managé. L'instantané <b>incrémentiel</b> ne facture que les changements depuis le précédent. On peut créer un nouveau disque à partir de l'instantané si la mise à jour échoue.</p><p>Une image généralisée sert à créer de nouvelles VM (avec Sysprep, ce qui rend la VM d'origine inutilisable). Une galerie sert à partager des images.</p><p><b>2. Ne plus payer le calcul de VM23 le week-end en gardant ses disques :</b></p><p>Arrêter depuis le <b>portail</b> (ou avec <code>az vm deallocate</code>) <b>libère</b> la VM : le calcul n'est plus facturé, les disques restent (et sont facturés). L'adresse IP publique dynamique est libérée.</p><p>Arrêter depuis le système d'exploitation laisse la VM à l'état <b>Arrêtée</b> (non libérée) : le calcul continue d'être facturé.</p><p><b>3. Un auditeur télécharge le disque système de VM26 en VHD :</b></p><p>L'option <b>Exporter</b> d'un disque managé (ou d'un instantané) génère une <b>URL SAS</b> temporaire pour télécharger le VHD. Le disque ne doit pas être attaché à une VM en cours d'exécution : on libère la VM ou on exporte un instantané.</p><p><b>4. Créer une VM à partir d'un instantané du disque système de VM27 :</b></p><p>On crée d'abord un <b>disque managé</b> à partir de l'instantané, puis une <b>VM à partir de ce disque</b> (option Créer une VM sur le disque). La nouvelle VM est spécialisée : elle garde le nom d'ordinateur et les comptes de l'original.</p>",
 "portal": {
  "path": [
   "Disques",
   "VM12-osdisk"
  ],
  "title": "Créer un instantané",
  "rows": [
   [
    "*Type d'instantané",
    "Incrémentiel"
   ],
   [
    "Source",
    "VM12-osdisk"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Point de restauration rapide d'un disque = instantané incrémentiel. Arrêter du portail = libérer = calcul non facturé. Télécharger un VHD = Exporter le disque (URL SAS), VM libérée. VM depuis un instantané = disque managé, puis VM sur ce disque."
},
{
 "id": "D3-332",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous modifiez des VM existantes et leur coût. Que devez-vous faire ou choisir dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "La taille E8s_v5 n'apparaît pas pendant que VM1 est démarrée :",
   "o": [
    "Supprimer VM1 et la recréer dans la nouvelle taille",
    "Ajouter un disque de données à VM1",
    "Déplacer VM1 dans un autre groupe de ressources",
    "Arrêter (libérer) VM1, puis redimensionner"
   ],
   "a": 3
  },
  {
   "l": "Déplacer VM20 de Subnet1 vers Subnet2 du même réseau :",
   "o": [
    "Déplacer la VM dans un autre groupe de ressources",
    "Recréer la VM dans Subnet2",
    "Créer un appairage entre Subnet1 et Subnet2",
    "Changer le sous-réseau de la configuration IP"
   ],
   "a": 3
  },
  {
   "l": "Placer dans une zone une VM créée sans zone :",
   "o": [
    "Il suffit de modifier la propriété Zone de la VM",
    "Il suffit de redémarrer la VM dans la zone",
    "C'est impossible, même en recréant la VM",
    "Il faut recréer la VM dans la zone"
   ],
   "a": 3
  },
  {
   "l": "Traitements interruptibles au coût minimal, Azure peut récupérer les VM :",
   "o": [
    "Des VM avec une réservation de 3 ans",
    "Des hôtes dédiés partagés entre équipes",
    "Des VM Spot (éviction Libérer ou Supprimer)",
    "Des VM de série B en mode burst"
   ],
   "a": 2
  },
  {
   "l": "Réserver la capacité d'une famille très demandée, sans engagement de prix :",
   "o": [
    "Une réservation Azure (remise sur 1 ou 3 ans)",
    "Des VM Spot dans la région",
    "Un groupe de placement de proximité",
    "Une réservation de capacité à la demande"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. La taille E8s_v5 n'apparaît pas pendant que VM1 est démarrée :</b></p><p>Une VM démarrée ne peut prendre qu'une taille disponible sur le <b>cluster matériel</b> où elle tourne. Une fois <b>arrêtée et libérée</b>, elle peut être placée sur un autre cluster : toutes les tailles disponibles dans la région apparaissent.</p><p>Un redimensionnement redémarre toujours la VM, même sans libération.</p><p><b>2. Déplacer VM20 de Subnet1 vers Subnet2 du même réseau :</b></p><p>Dans le même réseau virtuel, on peut changer le <b>sous-réseau</b> de la configuration IP de l'interface réseau. La VM redémarre et reçoit une nouvelle adresse IP privée.</p><p>Pour changer de <b>réseau virtuel</b>, en revanche, il faut recréer la VM (ou utiliser Resource Mover). On n'appaire pas des sous-réseaux.</p><p><b>3. Placer dans une zone une VM créée sans zone :</b></p><p>La zone d'une VM est fixée à la création. Pour passer d'une VM régionale à une VM zonale, on la <b>recrée</b> dans la zone voulue (Azure Resource Mover propose ce scénario, ou on recrée à partir d'instantanés des disques).</p><p><b>4. Traitements interruptibles au coût minimal, Azure peut récupérer les VM :</b></p><p>Les <b>VM Spot</b> utilisent la capacité inutilisée d'Azure avec une forte remise. Azure peut les <b>évincer</b> avec un préavis de 30 secondes quand il a besoin de la capacité ou que le prix dépasse votre maximum. La stratégie d'éviction choisit Libérer (on garde les disques) ou Supprimer.</p><p>Une réservation de 3 ans engage sur une charge continue. Les hôtes dédiés coûtent plus cher.</p><p><b>5. Réserver la capacité d'une famille très demandée, sans engagement de prix :</b></p><p>La <b>réservation de capacité à la demande</b> garantit que la capacité de calcul sera disponible pour une taille et une région (ou zone), facturée au tarif normal tant qu'elle existe, sans engagement de durée.</p><p>Une <b>réservation Azure</b> est une <b>remise</b> en échange d'un engagement, sans garantie de capacité (sauf option de priorité). Les VM Spot sont l'inverse : aucune garantie.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Taille",
  "menu": [
   "Vue d'ensemble",
   "*Taille"
  ],
  "rows": [
   [
    "Taille actuelle",
    "Standard_D2s_v5"
   ],
   [
    "*E8s_v5",
    "Visible après arrêt (libération)"
   ]
  ],
  "btn": "Redimensionner"
 },
 "keep": "Taille absente de la liste = libérer la VM pour voir toutes les tailles de la région. Changer de sous-réseau = possible ; changer de VNet = recréer. Rendre une VM zonale = la recréer. Interruptible et très peu cher = Spot. Capacité garantie sans engagement = réservation de capacité à la demande."
},
{
 "id": "D3-333",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous concevez l'hébergement de plusieurs applications web. Que devez-vous mettre en place pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Rester disponible si toute la région France Central tombe :",
   "o": [
    "Un emplacement de déploiement dans France South",
    "Deux applications, deux régions, Front Door",
    "Un plan avec 10 instances dans France Central",
    "La redondance de zone du plan en France Central"
   ],
   "a": 1
  },
  {
   "l": "Script d'arrière-plan en continu sur les instances de l'application :",
   "o": [
    "Un emplacement de déploiement dédié",
    "Le contrôle d'intégrité de l'application",
    "Une sauvegarde planifiée toutes les heures",
    "Une WebJob continue avec Always On"
   ],
   "a": 3
  },
  {
   "l": "Plus de mémoire par instance et une fonction réseau du niveau Premium v3 :",
   "o": [
    "Activer Always On sur l'application",
    "Monter le plan en Premium v3 (scale up)",
    "Ajouter des instances au plan (scale out)",
    "Créer un emplacement de déploiement"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Rester disponible si toute la région France Central tombe :</b></p><p>Pour survivre à la panne d'une <b>région</b>, il faut l'application dans <b>deux régions</b>, avec un service global qui dirige le trafic vers la région saine : <b>Azure Front Door</b> (HTTP, couche 7) ou <b>Traffic Manager</b> (DNS).</p><p>Les instances et la redondance de zone restent dans la région. Un emplacement est dans la même région que son application.</p><p><b>2. Script d'arrière-plan en continu sur les instances de l'application :</b></p><p>Les <b>WebJobs</b> exécutent des scripts ou programmes en arrière-plan dans le contexte de l'application, de façon <b>continue</b> ou <b>déclenchée</b> (planifiée). Une tâche continue exige <b>Always On</b> pour ne pas s'arrêter quand l'application se décharge.</p><p><b>3. Plus de mémoire par instance et une fonction réseau du niveau Premium v3 :</b></p><p>La <b>mise à l'échelle verticale</b> (scale up) change le niveau et la taille des instances du plan : plus de CPU, de mémoire et de fonctionnalités. Elle se fait en quelques secondes, sans redéployer l'application.</p><p>Ajouter des instances n'augmente pas la mémoire de chacune. Les deux autres options n'ajoutent pas de fonctionnalité de niveau.</p>",
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
 "keep": "Panne d'une région = deux régions + Front Door ou Traffic Manager. Arrière-plan continu dans App Service = WebJob continu + Always On. Plus de mémoire par instance ou fonctions de niveau = scale up."
}
);
