/* Domaine 3 : calcul (lot E : D3-177 à D3-230) */
AZ.questions.push(
{
 "id": "D3-177",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez créer une VM Ubuntu avec authentification par clé SSH, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az vm create --resource-group RG1 --name VM35 --image {0} --size Standard_B2s --admin-username azureuser {1}",
 "rows": [
  {
   "l": "Image",
   "o": [
    "Ubuntu2204",
    "Win2022Datacenter",
    "UbuntuServer.vhdx"
   ],
   "a": 0
  },
  {
   "l": "Authentification",
   "o": [
    "--generate-ssh-keys",
    "--admin-password-ssh",
    "--ssh-only"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm create ... --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys</code> crée la VM et génère une paire de clés SSH dans <code>~/.ssh</code> si elle n'existe pas (ou réutilise la clé existante).</p><p>Ubuntu2204 est un alias d'image. Les autres paramètres n'existent pas.</p>"
},
{
 "id": "D3-178",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez redimensionner VM36 en Standard_D4s_v5 avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az vm {0} --resource-group RG1 --name VM36 {1} Standard_D4s_v5",
 "rows": [
  {
   "l": "Sous-commande",
   "o": [
    "resize",
    "update",
    "scale"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--size",
    "--sku",
    "--vm-size"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm resize --size Standard_D4s_v5</code>. On peut d'abord lister les tailles possibles sur le cluster actuel avec <code>az vm list-vm-resize-options</code>.</p><p>En PowerShell : on modifie <code>$vm.HardwareProfile.VmSize</code> puis on exécute <code>Update-AzVM</code>.</p>"
},
{
 "id": "D3-179",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez passer manuellement le groupe identique VMSS7 à 6 instances, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az vmss {0} --resource-group RG1 --name VMSS7 {1} 6",
 "rows": [
  {
   "l": "Sous-commande",
   "o": [
    "scale",
    "resize",
    "update-instances"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--new-capacity",
    "--instance-count",
    "--count"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vmss scale --new-capacity 6</code> fixe le nombre d'instances. Si la mise à l'échelle automatique est active, elle peut ensuite le modifier selon ses règles.</p><p><code>update-instances</code> applique le dernier modèle aux instances existantes (mise à niveau manuelle).</p>"
},
{
 "id": "D3-180",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez attacher un nouveau disque de données de 256 Gio à VM37, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az vm disk {0} --resource-group RG1 --vm-name VM37 --name VM37-data1 {1} --size-gb 256 --sku Premium_LRS",
 "rows": [
  {
   "l": "Sous-commande",
   "o": [
    "attach",
    "create",
    "add"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "--new",
    "--empty",
    "--create"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm disk attach ... --new --size-gb 256</code> crée un disque managé vide et l'attache. Sans <code>--new</code>, la commande attache un disque existant portant ce nom.</p><p>En PowerShell : <code>Add-AzVMDataDisk</code> puis <code>Update-AzVM</code>.</p>"
},
{
 "id": "D3-181",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez arrêter et libérer VM38 avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0} -ResourceGroupName RG1 -Name VM38 {1}",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Stop-AzVM",
    "Remove-AzVM",
    "Update-AzVM"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "-Force",
    "-StayProvisioned",
    "-Deallocate:$false"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>Stop-AzVM -Force</code> arrête et <b>libère</b> la VM, sans demander de confirmation. Avec <code>-StayProvisioned</code>, la VM serait arrêtée sans être libérée (le calcul resterait facturé).</p>"
},
{
 "id": "D3-182",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez des VM présentées dans le document VM (cliquez sur l'onglet VM).</p><p>Vous voulez ajouter VM-C au groupe à haute disponibilité AS1 sans la recréer. Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "VM",
   "h": "<p><b>Machines virtuelles</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Région</th><th>Groupe à haute disponibilité</th><th>Zone</th></tr><tr><td>VM-A</td><td>France Central</td><td>AS1</td><td>—</td></tr><tr><td>VM-B</td><td>France Central</td><td>AS1</td><td>—</td></tr><tr><td>VM-C</td><td>France Central</td><td>—</td><td>—</td></tr></table></div>"
  }
 ],
 "opts": [
  "C'est impossible : il faut recréer VM-C dans AS1",
  "Déplacer VM-C dans le groupe de ressources de AS1",
  "Redémarrer VM-C",
  "Modifier la propriété Disponibilité de VM-C"
 ],
 "ans": 0,
 "expl": "<p>Le groupe à haute disponibilité est fixé à la <b>création</b> de la VM. Sans recréation, c'est impossible. On peut recréer VM-C dans AS1 en réutilisant ses disques.</p>"
},
{
 "id": "D3-183",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous disposez des applications présentées dans le document Applications (cliquez sur l'onglet Applications).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "docs": [
  {
   "t": "Applications",
   "h": "<p><b>Applications web</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Application</th><th>Plan</th><th>Niveau du plan</th><th>Système</th><th>Région</th></tr><tr><td>App1</td><td>ASP1</td><td>Standard S1</td><td>Windows</td><td>France Central</td></tr><tr><td>App2</td><td>ASP1</td><td>Standard S1</td><td>Windows</td><td>France Central</td></tr><tr><td>App3</td><td>ASP2</td><td>De base B1</td><td>Linux</td><td>France Central</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez ajouter un emplacement de déploiement à App3.",
   "a": 1
  },
  {
   "l": "App1 et App2 partagent les mêmes instances de calcul.",
   "a": 0
  },
  {
   "l": "Vous pouvez déplacer App3 dans ASP1.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Emplacement pour App3 : Non.</b> ASP2 est au niveau De base ; les emplacements demandent Standard ou plus.</li><li><b>Instances partagées : Oui.</b> App1 et App2 sont dans le même plan.</li><li><b>App3 dans ASP1 : Non.</b> ASP1 est un plan Windows, App3 une application Linux.</li></ul>"
},
{
 "id": "D3-184",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous disposez du groupe identique VMSS8, dont la mise à l'échelle automatique est présentée dans le document Règles (cliquez sur l'onglet Règles). VMSS8 a actuellement 4 instances.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "docs": [
  {
   "t": "Règles",
   "h": "<p><b>Profil par défaut</b> : minimum 2, maximum 6, par défaut 3.</p><ul><li>Règle 1 : CPU moyen &gt; 80 % pendant 5 minutes → augmenter de 2 instances. Refroidissement 5 minutes.</li><li>Règle 2 : CPU moyen &lt; 25 % pendant 10 minutes → diminuer de 1 instance. Refroidissement 5 minutes.</li></ul>"
  }
 ],
 "rows": [
  {
   "l": "Le CPU reste à 90 % pendant 20 minutes. Nombre d'instances ensuite :",
   "o": [
    "6",
    "8",
    "10"
   ],
   "a": 0
  },
  {
   "l": "Le CPU reste ensuite à 10 % pendant 2 heures. Nombre d'instances :",
   "o": [
    "0",
    "2",
    "3"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>6</b> : la règle 1 ajoute 2 instances (4 → 6), puis le <b>maximum</b> de 6 bloque toute nouvelle augmentation.</li><li><b>2</b> : la règle 2 retire une instance toutes les 15 minutes environ (10 minutes d'observation + refroidissement) jusqu'au <b>minimum</b> de 2.</li></ul><p>La valeur par défaut (3) ne sert que si la métrique est indisponible.</p>"
},
{
 "id": "D3-185",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous gérez une VM VM39 dans la zone 2. Elle utilise une adresse IP publique de SKU Standard. Vous voulez que l'adresse IP publique survive à la perte de n'importe quelle zone.</p><p>Comment l'adresse IP publique doit-elle être configurée ?</p>",
 "opts": [
  "Dynamique",
  "Redondante interzone",
  "SKU De base",
  "Zonale dans la zone 2"
 ],
 "ans": 1,
 "expl": "<p>Une adresse IP publique Standard peut être <b>redondante interzone</b> (servie par toutes les zones), <b>zonale</b> (liée à une zone) ou sans zone. Une adresse redondante interzone reste disponible si une zone tombe.</p><p>Le SKU De base est retiré et ne prend pas en charge les zones.</p>"
},
{
 "id": "D3-186",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application a besoin de 3 VM web derrière un équilibreur de charge, réparties pour résister à la panne d'une zone. Le budget ne permet pas plus de 3 VM.</p><p>Quelle configuration offre la meilleure disponibilité ?</p>",
 "opts": [
  "Trois VM dans la zone 1",
  "Trois VM dans un groupe à haute disponibilité",
  "Une VM dans chacune des zones 1, 2 et 3, avec un équilibreur Standard",
  "Trois VM dans un groupe de placement de proximité"
 ],
 "ans": 2,
 "expl": "<p>Une VM par zone, derrière un <b>équilibreur de charge Standard</b> redondant interzone : si une zone tombe, deux VM continuent de servir. SLA de 99,99 %.</p><p>Le groupe à haute disponibilité résiste à la panne d'un rack mais pas d'un centre de données. Trois VM dans une même zone partagent le même risque.</p>"
},
{
 "id": "D3-187",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web reçoit des pics très brefs (quelques secondes). Vous voulez que les nouvelles instances de VMSS9 soient prêtes plus vite.</p><p>Quelle option peut aider ?</p>",
 "opts": [
  "Allonger le temps de refroidissement",
  "Réduire le nombre maximal d'instances",
  "Passer en stratégie de mise à niveau Manuelle",
  "Utiliser une image personnalisée préconfigurée (galerie) plutôt qu'une longue configuration par extension au démarrage"
 ],
 "ans": 3,
 "expl": "<p>Une image <b>préconfigurée</b> (logiciels déjà installés) évite d'exécuter de longues extensions à chaque nouvelle instance : le délai entre la décision de mise à l'échelle et l'instance prête diminue. On peut aussi garder un minimum d'instances plus élevé.</p>"
},
{
 "id": "D3-188",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez une nouvelle version d'image dans VMSS10, qui utilise la stratégie de mise à niveau <b>Manuelle</b>. Les instances existantes gardent l'ancienne image.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Mettre à niveau les instances (par exemple az vmss update-instances --instance-ids '*')",
  "Redéployer le VMSS",
  "Augmenter le temps de refroidissement",
  "Rien : elles seront mises à jour au prochain redémarrage"
 ],
 "ans": 0,
 "expl": "<p>En mode <b>Manuel</b>, le modèle du groupe est mis à jour, mais chaque instance garde l'ancien modèle jusqu'à ce qu'on la <b>mette à niveau</b> (portail : Mettre à niveau, ou CLI <code>az vmss update-instances</code>). Les nouvelles instances créées par la mise à l'échelle utilisent directement le nouveau modèle.</p>"
},
{
 "id": "D3-189",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous avez restauré une sauvegarde App Service de WebApp23 vers une nouvelle application WebApp23-test, pour enquêter sur un problème.</p><p>Quelle fonctionnalité avez-vous utilisée ?</p>",
 "opts": [
  "Un emplacement de déploiement",
  "Restaurer une sauvegarde vers une autre application",
  "Une Template Spec",
  "Azure Site Recovery"
 ],
 "ans": 1,
 "expl": "<p>Une sauvegarde App Service peut être restaurée vers l'application d'origine, vers un <b>emplacement</b> ou vers une <b>autre application</b> (nouvelle ou existante). C'est pratique pour tester sans toucher à la production.</p>"
},
{
 "id": "D3-190",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez créer une copie de WebApp24 (code et configuration) dans une autre région, pour préparer une montée en charge mondiale.</p><p>Quelle fonctionnalité d'App Service correspond le mieux ?</p>",
 "opts": [
  "Déplacer l'application vers l'autre région depuis Propriétés",
  "Augmenter le nombre d'instances",
  "Cloner l'application (ou restaurer une sauvegarde vers une application dans l'autre région)",
  "Un emplacement de déploiement dans l'autre région"
 ],
 "ans": 2,
 "expl": "<p>Le <b>clonage</b> d'application (niveau Standard ou plus) crée une copie du contenu et de la configuration dans un autre plan, éventuellement dans une autre région. On peut aussi restaurer une sauvegarde vers une application d'une autre région.</p><p>Un emplacement est toujours dans la même région que son application. Une application ne change pas de région.</p>"
},
{
 "id": "D3-191",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web dans un conteneur doit être redéployée automatiquement chaque fois qu'une nouvelle image app:latest est poussée dans ACR9.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "Always On",
  "La géoréplication",
  "La permutation automatique",
  "Le déploiement continu dans le Centre de déploiement (webhook ACR)"
 ],
 "ans": 3,
 "expl": "<p>Avec le <b>déploiement continu</b> activé pour un conteneur, App Service crée un <b>webhook</b> dans ACR : à chaque push de l'image suivie, l'application tire la nouvelle image et redémarre.</p>"
},
{
 "id": "D3-192",
 "dom": 3,
 "type": "single",
 "stem": "<p>Des équipes en Europe et en Asie tirent les mêmes images de ACR10, situé en France Central. Les tirages depuis l'Asie sont lents et coûtent des frais de sortie de données.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Passer ACR10 en Premium et activer la géoréplication vers une région d'Asie",
  "Activer la stratégie de rétention",
  "Augmenter la taille des VM en Asie",
  "Créer un second registre De base sans lien"
 ],
 "ans": 0,
 "expl": "<p>La <b>géoréplication</b> (Premium) crée des réplicas du registre dans d'autres régions, avec un seul nom de connexion. Les clients tirent depuis le réplica le plus proche : plus rapide et sans frais de sortie entre régions. Les poussées sont répliquées automatiquement.</p>"
},
{
 "id": "D3-193",
 "dom": 3,
 "type": "single",
 "stem": "<p>Le registre ACR11 doit n'être accessible que depuis VNet5, par une adresse IP privée.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Le compte administrateur",
  "Un point de terminaison privé (niveau Premium) et désactiver l'accès public",
  "Une stratégie de rétention",
  "Le niveau De base"
 ],
 "ans": 1,
 "expl": "<p>Les <b>points de terminaison privés</b> d'ACR exigent le niveau <b>Premium</b>. On désactive ensuite l'accès réseau public. La zone DNS privée est <code>privatelink.azurecr.io</code>.</p>"
},
{
 "id": "D3-194",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez déployer une application Azure Container Apps qui lit un mot de passe de base de données, sans l'écrire en clair dans la définition de l'application.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Une étiquette de ressource",
  "Le nom de la révision",
  "Un secret Container Apps (éventuellement référencé depuis Key Vault), exposé comme variable d'environnement",
  "Un paramètre de l'environnement Log Analytics"
 ],
 "ans": 2,
 "expl": "<p>Container Apps gère des <b>secrets</b> au niveau de l'application, qui peuvent référencer un secret <b>Key Vault</b> avec l'identité managée de l'application. Une variable d'environnement les référence avec <code>secretRef</code>.</p>"
},
{
 "id": "D3-195",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un développeur veut exposer une API d'un conteneur ACI sur le port 8080.</p><p>Que doit-il configurer lors de la création du groupe de conteneurs ?</p>",
 "opts": [
  "Un plan App Service",
  "Un équilibreur de charge obligatoire",
  "Une règle de mise à l'échelle",
  "Le port 8080 dans les ports exposés du conteneur et du groupe (et une adresse IP publique si l'API doit être sur Internet)"
 ],
 "ans": 3,
 "expl": "<p>Les ports à ouvrir se déclarent dans le conteneur et dans le groupe de conteneurs (paramètre <code>--ports 8080</code>). Une adresse IP publique ou un déploiement dans un réseau virtuel rend le groupe joignable. Aucun équilibreur n'est nécessaire.</p>"
},
{
 "id": "D3-196",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez exécuter un conteneur Windows dans Azure Container Instances.</p><p>Quelle contrainte devez-vous connaître ?</p>",
 "opts": [
  "Le groupe de conteneurs ne peut contenir qu'un seul conteneur Windows",
  "Les conteneurs Windows ne sont pas pris en charge",
  "Les conteneurs Windows nécessitent un disque Ultra",
  "Les conteneurs Windows doivent être dans un plan App Service"
 ],
 "ans": 0,
 "expl": "<p>ACI prend en charge les conteneurs <b>Windows</b>, mais un groupe Windows ne contient qu'<b>un seul</b> conteneur. Les fonctions comme les groupes multi-conteneurs ou certains volumes sont réservées à Linux.</p>"
},
{
 "id": "D3-197",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'option de mise à l'échelle adaptée à chaque situation.</p><p>Pour répondre, faites glisser l'option appropriée vers chaque situation. Chaque option peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Options",
 "srcs": [
  "Mise à l'échelle verticale (scale up)",
  "Mise à l'échelle horizontale (scale out)",
  "Mise à l'échelle planifiée"
 ],
 "tgtHead": [
  "Situation",
  "Option"
 ],
 "tgts": [
  {
   "l": "Une application mono-instance a besoin de plus de mémoire",
   "a": 0
  },
  {
   "l": "Le nombre d'utilisateurs simultanés double de façon imprévisible",
   "a": 1
  },
  {
   "l": "Le trafic triple chaque lundi matin",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Verticale</b> : plus de ressources par instance (taille ou niveau supérieur).</li><li><b>Horizontale</b> : plus d'instances, déclenchée par des métriques pour une charge imprévisible.</li><li><b>Planifiée</b> : profil horaire pour une charge prévisible.</li></ul>"
},
{
 "id": "D3-198",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'option de redondance adaptée pour chaque niveau de protection d'une VM.</p><p>Pour répondre, faites glisser l'option appropriée vers chaque niveau. Chaque option peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Options",
 "srcs": [
  "Domaines d'erreur",
  "Domaines de mise à jour",
  "Zones de disponibilité",
  "Azure Site Recovery vers une autre région"
 ],
 "tgtHead": [
  "Protection",
  "Option"
 ],
 "tgts": [
  {
   "l": "Panne d'alimentation d'un rack",
   "a": 0
  },
  {
   "l": "Maintenance planifiée de l'hôte qui redémarre les serveurs",
   "a": 1
  },
  {
   "l": "Incendie dans un centre de données",
   "a": 2
  },
  {
   "l": "Catastrophe qui touche toute la région",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Domaines d'erreur</b> : racks séparés (alimentation et réseau).</li><li><b>Domaines de mise à jour</b> : groupes redémarrés à tour de rôle.</li><li><b>Zones</b> : centres de données séparés dans la région.</li><li><b>Site Recovery</b> : réplication vers une autre région, avec basculement.</li></ul>"
},
{
 "id": "D3-199",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez déployer une application conteneurisée dans Azure Container Apps à partir de votre code source local, avec un registre privé.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Créer un registre Azure Container Registry",
  "Construire l'image et la pousser dans le registre (az acr build)",
  "Créer l'application Container Apps à partir de l'image, avec une identité qui a AcrPull",
  "Créer un plan App Service",
  "Créer un groupe à haute disponibilité"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>Le <b>registre</b> doit exister pour recevoir l'image ; on <b>construit et pousse</b> l'image ; on crée enfin l'<b>application</b> qui tire l'image (avec une identité managée qui a AcrPull). La commande <code>az containerapp up</code> peut automatiser toutes ces étapes.</p><p>Un plan App Service et un groupe à haute disponibilité ne concernent pas Container Apps.</p>"
},
{
 "id": "D3-200",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez mettre en place HTTPS sur le domaine www.fabrikam.com pour WebApp25, avec un certificat managé gratuit. WebApp25 est dans un plan Gratuit.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Passer le plan au niveau De base ou supérieur",
  "Créer les enregistrements DNS CNAME et TXT asuid.www",
  "Ajouter le domaine personnalisé www.fabrikam.com à WebApp25",
  "Créer un certificat managé App Service et l'associer avec une liaison SNI",
  "Créer un emplacement de déploiement",
  "Exporter le certificat managé"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>Le plan Gratuit ne prend pas en charge les domaines personnalisés : on <b>passe à De base</b>. On crée les <b>enregistrements DNS</b> de vérification et de redirection, on <b>ajoute le domaine</b>, puis on crée le <b>certificat managé</b> et la <b>liaison TLS</b> (SNI).</p><p>Un certificat managé ne peut pas être exporté, et aucun emplacement n'est nécessaire.</p>"
},
{
 "id": "D3-201",
 "dom": 3,
 "type": "single",
 "stem": "<p>Votre entreprise doit héberger des applications web dans un environnement totalement isolé, à l'intérieur de son propre réseau virtuel, avec un très grand nombre d'instances.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Un plan Premium v3 avec intégration au réseau virtuel",
  "Un App Service Environment v3 (plans Isolé v2)",
  "Des conteneurs ACI",
  "Un plan Standard avec restrictions d'accès"
 ],
 "ans": 1,
 "expl": "<p>Un <b>App Service Environment</b> v3 est un déploiement d'App Service à <b>locataire unique</b>, injecté dans un sous-réseau de votre réseau virtuel, avec les plans <b>Isolé v2</b>. Il convient aux exigences d'isolement fort et de grande échelle.</p><p>L'intégration au réseau virtuel d'un plan Premium ne concerne que le trafic sortant ; l'infrastructure reste partagée.</p>"
},
{
 "id": "D3-202",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un développeur veut déployer son code sur une application web par FTPS. La connexion est refusée.</p><p>Quel réglage d'App Service devez-vous vérifier ?</p>",
 "opts": [
  "Always On",
  "L'affinité ARR",
  "L'état FTP (FTP/FTPS autorisé, FTPS uniquement ou désactivé) et les informations d'identification de publication de base",
  "Le contrôle d'intégrité"
 ],
 "ans": 2,
 "expl": "<p>Dans <b>Configuration > Paramètres généraux</b>, l'<b>état FTP</b> peut être réglé sur « FTPS uniquement » ou « Désactivé », et l'authentification de base (utilisée par FTP) peut être désactivée. Pour la sécurité, Microsoft recommande de désactiver FTP et de préférer d'autres méthodes de déploiement.</p>"
},
{
 "id": "D3-203",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez que toutes les requêtes HTTP vers WebApp26 soient redirigées vers HTTPS.</p><p>Quel réglage devez-vous activer ?</p>",
 "opts": [
  "Affinité ARR",
  "Always On",
  "Version TLS minimale 1.0",
  "HTTPS uniquement"
 ],
 "ans": 3,
 "expl": "<p>Le réglage <b>HTTPS uniquement</b> redirige automatiquement les requêtes HTTP vers HTTPS. On règle aussi la <b>version TLS minimale</b> (1.2 recommandée) pour refuser les protocoles anciens.</p>"
},
{
 "id": "D3-204",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web Linux doit exécuter une image .NET avec une commande de démarrage personnalisée.</p><p>Où devez-vous indiquer la commande ?</p>",
 "opts": [
  "Configuration > Paramètres généraux > Commande de démarrage",
  "Dans le plan App Service",
  "Dans une étiquette Azure",
  "Dans le Centre de déploiement uniquement"
 ],
 "ans": 0,
 "expl": "<p>Pour les applications Linux, la <b>commande de démarrage</b> (startup command) se règle dans les paramètres généraux de la configuration (ou avec <code>az webapp config set --startup-file</code>).</p>"
},
{
 "id": "D3-205",
 "dom": 3,
 "type": "single",
 "stem": "<p>Le plan App Service ASP4 (Standard S1, 3 instances) héberge 6 applications. L'une d'elles consomme presque tout le CPU et ralentit les autres.</p><p>Quelle est la meilleure solution ?</p>",
 "opts": [
  "Activer l'affinité ARR",
  "Déplacer l'application gourmande dans son propre plan",
  "Ajouter un emplacement de déploiement",
  "Désactiver Always On"
 ],
 "ans": 1,
 "expl": "<p>Toutes les applications d'un plan partagent les mêmes instances. Isoler l'application gourmande dans un <b>plan dédié</b> permet de la mettre à l'échelle séparément sans pénaliser les autres.</p><p>Attention : les emplacements de déploiement partagent aussi les ressources du plan.</p>"
},
{
 "id": "D3-206",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous utilisez des emplacements de déploiement sur WebApp27.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un emplacement de déploiement a sa propre URL.",
   "a": 0
  },
  {
   "l": "Les emplacements utilisent les instances du même plan App Service.",
   "a": 0
  },
  {
   "l": "Un emplacement peut être placé dans une autre région que l'application.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>URL propre : Oui</b>, par exemple <code>webapp27-staging.azurewebsites.net</code>.</li><li><b>Même plan : Oui.</b> Un emplacement consomme les ressources du plan de l'application.</li><li><b>Autre région : Non.</b> Les emplacements sont dans le même plan, donc la même région.</li></ul>"
},
{
 "id": "D3-207",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous gérez des modèles ARM et Bicep.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un fichier Bicep est compilé en JSON ARM avant le déploiement.",
   "a": 0
  },
  {
   "l": "Le mode Incrémentiel supprime les ressources absentes du modèle.",
   "a": 1
  },
  {
   "l": "Redéployer le même modèle sans modification ne crée pas de doublon des ressources.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Compilation : Oui.</b> Bicep est transpilé en JSON ARM (automatiquement par Azure CLI et PowerShell).</li><li><b>Incrémentiel et suppression : Non.</b> C'est le mode Complet qui supprime.</li><li><b>Idempotence : Oui.</b> Les déploiements sont <b>idempotents</b> : redéployer le même modèle donne le même résultat.</li></ul>"
},
{
 "id": "D3-208",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous gérez une VM avec un disque temporaire.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Le contenu du disque temporaire survit à un simple redémarrage de la VM depuis le système d'exploitation.",
   "a": 0
  },
  {
   "l": "Le contenu du disque temporaire survit à un arrêt avec libération.",
   "a": 1
  },
  {
   "l": "Le disque temporaire est inclus dans les sauvegardes Azure Backup de la VM.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Redémarrage : Oui</b>, en général : la VM reste sur le même hôte. (Ce n'est toutefois pas garanti en cas de maintenance.)</li><li><b>Libération : Non.</b> La VM peut repartir sur un autre hôte : le disque temporaire est vide.</li><li><b>Sauvegarde : Non.</b> Azure Backup ne sauvegarde pas le disque temporaire.</li></ul>"
},
{
 "id": "D3-209",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous examinez la définition partielle suivante d'une VM dans un modèle ARM :</p><pre>\"storageProfile\": {\n  \"imageReference\": { \"publisher\": \"MicrosoftWindowsServer\", \"offer\": \"WindowsServer\", \"sku\": \"2022-datacenter-azure-edition\", \"version\": \"latest\" },\n  \"osDisk\": { \"createOption\": \"FromImage\", \"caching\": \"ReadWrite\", \"managedDisk\": { \"storageAccountType\": \"StandardSSD_LRS\" } },\n  \"dataDisks\": [ { \"lun\": 0, \"createOption\": \"Empty\", \"diskSizeGB\": 1024, \"caching\": \"ReadOnly\", \"managedDisk\": { \"storageAccountType\": \"Premium_LRS\" } } ]\n}</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Type du disque du système d'exploitation :",
   "o": [
    "SSD Premium",
    "HDD Standard",
    "SSD Standard"
   ],
   "a": 2
  },
  {
   "l": "Le disque de données est :",
   "o": [
    "une copie de l'image",
    "un nouveau disque vide de 1 Tio",
    "un disque existant"
   ],
   "a": 1
  },
  {
   "l": "Le cache du disque de données est adapté :",
   "o": [
    "aux écritures de journaux",
    "au disque temporaire",
    "aux lectures fréquentes"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><code>StandardSSD_LRS</code> : <b>SSD Standard</b>.</li><li><code>createOption: Empty</code> : un <b>disque vide</b> de 1 024 Gio (1 Tio). <code>Attach</code> attacherait un disque existant ; <code>FromImage</code> crée le disque à partir de l'image.</li><li>Cache <code>ReadOnly</code> : idéal pour des <b>lectures fréquentes</b> (fichiers de données).</li></ul>"
},
{
 "id": "D3-210",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous déployez des conteneurs avec la commande suivante :</p><pre>az container create --resource-group RG1 --name batch1 \\\n  --image contoso.azurecr.io/batch:2.1 --cpu 2 --memory 4 \\\n  --restart-policy OnFailure \\\n  --azure-file-volume-share-name resultats --azure-file-volume-account-name storage80 \\\n  --azure-file-volume-mount-path /mnt/resultats</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Si le traitement se termine avec le code 0, le conteneur :",
   "o": [
    "redémarre",
    "s'arrête",
    "est supprimé avec le groupe"
   ],
   "a": 1
  },
  {
   "l": "Les fichiers écrits dans /mnt/resultats sont stockés :",
   "o": [
    "sur le disque temporaire",
    "dans un conteneur blob",
    "dans le partage Azure Files resultats"
   ],
   "a": 2
  },
  {
   "l": "L'image est tirée depuis :",
   "o": [
    "Microsoft Container Registry",
    "Azure Container Registry",
    "Docker Hub"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>OnFailure</b> : avec un code de sortie 0 (succès), le conteneur s'arrête sans redémarrer. Le groupe reste (à l'état terminé) jusqu'à sa suppression.</li><li>Le volume monté est le <b>partage Azure Files</b> resultats.</li><li><code>contoso.azurecr.io</code> : un registre <b>ACR</b>.</li></ul>"
},
{
 "id": "D3-211",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez un registre de conteneurs pour la production. Il doit être répliqué en West Europe et accessible uniquement par un point de terminaison privé. Le compte administrateur doit rester désactivé.</p><p>Comment devez-vous configurer le registre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Créer un registre de conteneurs",
  "sub": "Registres de conteneurs",
  "rows": [
   {
    "k": "text",
    "l": "Nom du registre",
    "t": "contosoprod"
   },
   {
    "k": "select",
    "l": "Niveau tarifaire (SKU)",
    "o": [
     "De base",
     "Standard",
     "Premium"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Mise en réseau"
   },
   {
    "k": "radio",
    "l": "Connectivité",
    "opts": [
     "Accès public (tous les réseaux)",
     "Accès privé (recommandé)"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "head",
    "t": "Après la création"
   },
   {
    "k": "check",
    "l": "Utilisateur administrateur",
    "d": false,
    "a": false
   },
   {
    "k": "select",
    "l": "Géoréplications",
    "o": [
     "Aucune",
     "West Europe"
    ],
    "d": 0,
    "a": 1
   }
  ]
 },
 "expl": "<ul><li><b>Premium</b> : seul niveau qui propose la géoréplication et les points de terminaison privés.</li><li><b>Accès privé</b> : point de terminaison privé, accès public désactivé.</li><li><b>Utilisateur administrateur</b> : laissé désactivé, on utilise des identités avec AcrPull et AcrPush.</li><li><b>Géoréplication</b> vers West Europe.</li></ul>"
},
{
 "id": "D3-212",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez une application Azure Container Apps pour une API publique. Elle doit être joignable sur Internet en HTTPS sur le port 443 (le conteneur écoute sur le port 8080), et descendre à zéro réplica la nuit.</p><p>Comment devez-vous configurer l'application ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Créer une application conteneur",
  "sub": "Container Apps",
  "rows": [
   {
    "k": "head",
    "t": "Entrée"
   },
   {
    "k": "check",
    "l": "Entrée activée",
    "a": true
   },
   {
    "k": "radio",
    "l": "Trafic entrant",
    "opts": [
     "Limité à l'environnement Container Apps",
     "Accepter le trafic de n'importe où"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Port cible",
    "o": [
     "80",
     "443",
     "8080"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Mise à l'échelle"
   },
   {
    "k": "select",
    "l": "Nombre minimal de réplicas",
    "o": [
     "0",
     "1",
     "3"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Nombre maximal de réplicas",
    "o": [
     "1",
     "10",
     "300"
    ],
    "d": 1,
    "a": null
   }
  ]
 },
 "expl": "<ul><li><b>Entrée activée</b>, trafic <b>de n'importe où</b> (externe). Container Apps expose HTTPS sur 443 et redirige vers le <b>port cible 8080</b> du conteneur.</li><li><b>Minimum 0</b> : descente à zéro réplica sans trafic.</li></ul><p>Le maximum n'est pas noté ici.</p>"
},
{
 "id": "D3-213",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez configurer la mise à l'échelle automatique du plan App Service qui héberge WebApp28.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "WebApp28 | App Service",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité"
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
     "Mise en réseau",
     "Scale up (plan App Service)",
     "Scale out (plan App Service)",
     "Sauvegardes"
    ]
   }
  ]
 },
 "ans": "Scale out (plan App Service)",
 "expl": "<p><b>Scale out</b> règle le nombre d'instances : manuel ou mise à l'échelle automatique avec règles. <b>Scale up</b> change le niveau et la taille du plan.</p>"
},
{
 "id": "D3-214",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez voir la sortie de l'extension Custom Script installée sur VM40.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "VM40 | Machine virtuelle",
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
     "Extensions + applications",
     "Disponibilité + mise à l'échelle",
     "Configuration",
     "Identité"
    ]
   },
   {
    "g": "Aide",
    "items": [
     "Diagnostics de démarrage",
     "Console série",
     "Exécuter la commande"
    ]
   }
  ]
 },
 "ans": "Extensions + applications",
 "expl": "<p><b>Extensions + applications</b> liste les extensions installées, leur état et leurs messages détaillés (sortie et erreur pour Custom Script). On peut aussi y ajouter ou désinstaller une extension.</p>"
},
{
 "id": "D3-215",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>VM41 est en état <b>Échec</b> après une opération interrompue. Vous voulez la remettre dans un état cohérent sans la déplacer ni perdre de données.</p><p>Quelles <b>deux</b> actions peuvent aider ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Relancer la dernière opération (par exemple un redimensionnement ou une mise à jour de la VM)",
  "Réappliquer (reapply) l'état de la VM",
  "Exporter le disque du système d'exploitation",
  "Supprimer la VM et ses disques"
 ],
 "ans": [
  0,
  1
 ],
 "expl": "<ul><li><b>Réappliquer : oui.</b> Il réexécute le provisionnement de la VM sur le même hôte, souvent suffisant pour sortir de l'état Échec.</li><li><b>Relancer l'opération : oui.</b> Une mise à jour de la VM (même sans changement) remet souvent l'état en cohérence.</li><li><b>Supprimer : non</b>, destructeur.</li><li><b>Exporter : non</b>, ne corrige rien.</li></ul>"
},
{
 "id": "D3-216",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez permettre à une application web de lire des secrets de Key Vault sans stocker d'identifiants.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Mettre la clé du coffre dans un paramètre d'application",
  "Attribuer à cette identité le rôle Utilisateur des secrets Key Vault sur le coffre",
  "Activer l'identité managée attribuée par le système de l'application web",
  "Attribuer le rôle Contributeur sur le coffre à tous les utilisateurs"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<ul><li><b>Identité managée : oui</b>, elle donne une identité Entra à l'application, sans secret.</li><li><b>Utilisateur des secrets Key Vault : oui</b>, il permet de lire les valeurs des secrets (coffre en mode RBAC).</li><li>Un coffre n'a pas de « clé » à mettre dans les paramètres. Contributeur pour tous serait dangereux et ne donne pas l'accès aux secrets en mode RBAC.</li></ul>"
},
{
 "id": "D3-217",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application critique tourne sur VM42, sans redondance. Vous voulez être prévenu 15 minutes avant une maintenance planifiée qui redémarrera l'hôte, pour arrêter proprement l'application.</p><p>Que devez-vous utiliser dans la VM ?</p>",
 "opts": [
  "La console série",
  "Les diagnostics de démarrage",
  "Le service Scheduled Events (métadonnées d'instance)",
  "Une alerte de budget"
 ],
 "ans": 2,
 "expl": "<p><b>Scheduled Events</b>, exposé par le service de métadonnées d'instance (IMDS, <code>169.254.169.254</code>), informe la VM des événements à venir (redémarrage, redéploiement, éviction Spot) avec un préavis. L'application peut s'y préparer.</p>"
},
{
 "id": "D3-218",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez contrôler le moment où les mises à jour de la plateforme sont appliquées aux hôtes de vos VM dédiées, dans une fenêtre de 5 heures le dimanche.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Les diagnostics de démarrage",
  "Un groupe à haute disponibilité",
  "Une stratégie de mise à niveau Rolling",
  "Une configuration de maintenance (Maintenance Configuration) avec une fenêtre planifiée"
 ],
 "ans": 3,
 "expl": "<p>Les <b>configurations de maintenance</b> (Maintenance Configurations) permettent de contrôler les mises à jour de la plateforme pour les hôtes dédiés et les VM isolées, ou de planifier les correctifs invités, dans une fenêtre définie.</p>"
},
{
 "id": "D3-219",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez appliquer automatiquement les correctifs Windows et Linux sur 200 VM, selon une planification, avec un rapport de conformité.</p><p>Quel service devez-vous utiliser ?</p>",
 "opts": [
  "Azure Update Manager",
  "Azure Advisor",
  "Azure Site Recovery",
  "Azure Resource Mover"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Update Manager</b> évalue les mises à jour manquantes, les déploie selon des planifications (configurations de maintenance) et affiche la conformité, pour les VM Azure et les serveurs Arc. Il remplace Update Management d'Azure Automation.</p>"
},
{
 "id": "D3-220",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez 20 VM avec un modèle ARM. Le déploiement échoue avec une erreur de quota de vCPU régional.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Ajouter un dependsOn",
  "Demander une augmentation du quota de vCPU pour la famille et la région, ou choisir une autre famille de tailles",
  "Créer un nouveau groupe de ressources",
  "Passer en mode Complet"
 ],
 "ans": 1,
 "expl": "<p>Les <b>quotas</b> de vCPU (total régional et par famille) limitent le nombre de VM. On demande une augmentation dans <b>Utilisation + quotas</b>, ou on choisit une famille qui a encore du quota. Le mode de déploiement et le groupe de ressources n'y changent rien.</p>"
},
{
 "id": "D3-221",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez que les VM de développement s'arrêtent tous les soirs à 19 h, avec une notification 30 minutes avant aux développeurs.</p><p>Quelle fonctionnalité de la VM devez-vous configurer ?</p>",
 "opts": [
  "Redéployer",
  "Diagnostics de démarrage",
  "Arrêt automatique (auto-shutdown) avec notification",
  "Groupe à haute disponibilité"
 ],
 "ans": 2,
 "expl": "<p>L'<b>arrêt automatique</b> arrête et libère la VM chaque jour à l'heure choisie (avec le fuseau horaire), et peut envoyer une notification par e-mail ou webhook avant l'arrêt.</p>"
},
{
 "id": "D3-222",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous examinez les tailles Standard_D2s_v5 et Standard_D2as_v5.</p><p>Que signifie la lettre <b>a</b> dans D2<b>a</b>s_v5 ?</p>",
 "opts": [
  "Une mise en réseau accélérée",
  "Une VM ARM",
  "Un disque Ultra inclus",
  "Un processeur AMD"
 ],
 "ans": 3,
 "expl": "<p>Dans les noms de tailles, <b>a</b> indique un processeur <b>AMD</b>, <b>s</b> la prise en charge du stockage Premium, <b>d</b> un disque temporaire local, <b>p</b> un processeur ARM, <b>l</b> une mémoire réduite. Le chiffre (2) est le nombre de vCPU, et v5 la version.</p>"
},
{
 "id": "D3-223",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez des VM de série D avec un disque temporaire local. Quelle taille contient un disque temporaire ?</p>",
 "opts": [
  "Standard_D4ds_v5",
  "Standard_D4ps_v5",
  "Standard_D4s_v5",
  "Standard_D4as_v5"
 ],
 "ans": 0,
 "expl": "<p>La lettre <b>d</b> (D4<b>d</b>s_v5) indique un <b>disque temporaire local</b>. Depuis la génération v4, les tailles sans « d » n'ont plus de disque temporaire.</p>"
},
{
 "id": "D3-224",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web stocke les sessions utilisateur en mémoire, sur l'instance. Vous passez de 1 à 3 instances et les utilisateurs sont déconnectés aléatoirement.</p><p>Quelle solution rapide pouvez-vous appliquer ?</p>",
 "opts": [
  "Activer HTTPS uniquement",
  "Activer l'affinité ARR (sessions collantes)",
  "Désactiver Always On",
  "Passer en plan De base"
 ],
 "ans": 1,
 "expl": "<p>L'<b>affinité ARR</b> renvoie chaque utilisateur vers la même instance grâce à un cookie : la session en mémoire reste disponible. La vraie solution à long terme est de stocker les sessions hors de l'instance (par exemple Azure Cache for Redis).</p>"
},
{
 "id": "D3-225",
 "dom": 3,
 "type": "single",
 "stem": "<p>Les journaux d'une application web doivent être conservés 90 jours et interrogés avec KQL avec ceux d'autres ressources.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "La journalisation des applications dans le système de fichiers",
  "Le flux de journaux",
  "Un paramètre de diagnostic vers un espace de travail Log Analytics (catégories AppServiceHTTPLogs, AppServiceConsoleLogs…)",
  "Les sauvegardes planifiées"
 ],
 "ans": 2,
 "expl": "<p>Un <b>paramètre de diagnostic</b> envoie les journaux d'App Service (HTTP, console, application, audit…) vers <b>Log Analytics</b>, où on règle la rétention et où on les interroge en KQL avec d'autres sources.</p><p>La journalisation dans le système de fichiers se désactive automatiquement après 12 heures. Le flux de journaux est en direct, sans conservation.</p>"
},
{
 "id": "D3-226",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez déployer plusieurs VM identiques dans une région où une famille de tailles est très demandée. Vous voulez réserver la capacité à l'avance, sans engagement de prix sur 1 ou 3 ans.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Une réservation Azure (remise)",
  "Des VM Spot",
  "Un groupe de placement de proximité",
  "Une réservation de capacité à la demande (capacity reservation)"
 ],
 "ans": 3,
 "expl": "<p>La <b>réservation de capacité à la demande</b> garantit que la capacité de calcul sera disponible pour une taille et une région (ou zone), facturée au tarif normal tant qu'elle existe, sans engagement de durée.</p><p>Une <b>réservation Azure</b> est une <b>remise</b> en échange d'un engagement, sans garantie de capacité (sauf option de priorité). Les VM Spot sont l'inverse : aucune garantie.</p>"
},
{
 "id": "D3-227",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une équipe veut une VM Windows de bureau accessible depuis un navigateur, avec un minimum de gestion, pour 50 utilisateurs qui partagent les mêmes sessions hôtes.</p><p>Quel service correspond le mieux ?</p>",
 "opts": [
  "Azure Virtual Desktop",
  "Azure Container Instances",
  "Azure Batch",
  "Azure App Service"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Virtual Desktop</b> fournit des bureaux et applications Windows virtuels, avec des hôtes de session multisession partagés, accessibles par client ou navigateur. Ce service n'est pas au cœur de l'AZ-104, mais il est bon de savoir le reconnaître face aux autres options de calcul.</p>"
},
{
 "id": "D3-228",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application tourne sur une seule VM. Vous voulez qu'elle soit automatiquement répliquée vers une autre région, avec un basculement en quelques minutes en cas de sinistre.</p><p>Quel service devez-vous configurer ?</p>",
 "opts": [
  "Azure Backup uniquement",
  "Azure Site Recovery",
  "Un emplacement de déploiement",
  "Un groupe à haute disponibilité"
 ],
 "ans": 1,
 "expl": "<p><b>Azure Site Recovery</b> réplique en continu les disques de la VM vers une région cible et permet un <b>basculement</b> (et une restauration automatique) avec un RPO de quelques secondes à minutes.</p><p>Azure Backup permet de restaurer, mais avec un délai plus long et un RPO lié à la fréquence des sauvegardes.</p>"
},
{
 "id": "D3-229",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous gérez les applications de VMSS11 avec un modèle. Une nouvelle version du logiciel doit être installée sur toutes les instances, y compris les futures.</p><p>Où devez-vous la définir ?</p>",
 "opts": [
  "Dans une étiquette",
  "Sur chaque instance, à la main",
  "Dans le modèle du groupe identique (image ou extension), puis mettre à niveau les instances",
  "Dans le plan App Service"
 ],
 "ans": 2,
 "expl": "<p>Le <b>modèle</b> du groupe (image, extensions, applications de VM) décrit toutes les instances. On le met à jour, puis on <b>met à niveau</b> les instances existantes selon la stratégie de mise à niveau. Les nouvelles instances utilisent automatiquement le nouveau modèle.</p>"
},
{
 "id": "D3-230",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application de calcul a besoin de 500 VM pendant 2 heures chaque nuit pour des simulations parallèles, puis d'aucune.</p><p>Quelle solution est la plus adaptée ?</p>",
 "opts": [
  "Un seul conteneur ACI",
  "Un plan App Service Premium",
  "500 VM individuelles allumées en permanence",
  "Un groupe de machines virtuelles identiques (ou Azure Batch) qui monte à 500 instances puis redescend à 0"
 ],
 "ans": 3,
 "expl": "<p>Un <b>groupe de machines virtuelles identiques</b> crée et supprime des centaines de VM identiques selon le besoin (planifié ou automatique), jusqu'à zéro. <b>Azure Batch</b> pilote ce type de calcul parallèle à grande échelle. Combiner avec des VM Spot réduit encore le coût.</p>"
}
);
