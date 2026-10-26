/* Domaine 4 : réseau virtuel (lot C : D4-065 à D4-119) */
AZ.questions.push(
{
 "id": "D4-065",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le service de répartition de charge adapté à chaque besoin.</p><p>Pour répondre, faites glisser le service approprié vers chaque besoin. Chaque service peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Services",
 "srcs": [
  "Azure Load Balancer",
  "Application Gateway",
  "Traffic Manager",
  "Azure Front Door"
 ],
 "tgtHead": [
  "Besoin",
  "Service"
 ],
 "tgts": [
  {
   "l": "Répartir du trafic TCP (port 1433) entre deux VM SQL d'une même région",
   "a": 0
  },
  {
   "l": "Router /images vers un pool de serveurs et /api vers un autre, dans une région, avec un WAF",
   "a": 1
  },
  {
   "l": "Diriger les utilisateurs vers la région la plus proche, par DNS, pour n'importe quel protocole",
   "a": 2
  },
  {
   "l": "Point d'entrée HTTP mondial avec mise en cache, accélération et WAF",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Load Balancer</b> : couche 4 (TCP/UDP), régional.</li><li><b>Application Gateway</b> : couche 7 (HTTP/HTTPS), régional, routage par chemin ou par nom d'hôte, terminaison TLS, WAF.</li><li><b>Traffic Manager</b> : répartition mondiale par <b>DNS</b>, quel que soit le protocole.</li><li><b>Front Door</b> : couche 7 mondiale, avec CDN, accélération et WAF.</li></ul>"
},
{
 "id": "D4-066",
 "dom": 4,
 "type": "order",
 "stem": "<p>Vous devez répartir le trafic HTTP entre VM1 et VM2 avec un équilibreur de charge public Standard nouvellement créé, LB1.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Créer une configuration d'adresse IP frontale avec une adresse IP publique Standard",
  "Créer un pool principal contenant VM1 et VM2",
  "Créer une sonde d'intégrité HTTP sur le port 80",
  "Créer une règle d'équilibrage de charge port 80 qui utilise le front-end, le pool et la sonde",
  "Créer une passerelle NAT",
  "Créer un appairage"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>Un équilibreur se compose d'une <b>adresse frontale</b> (où arrive le trafic), d'un <b>pool principal</b> (vers où il est réparti), d'une <b>sonde d'intégrité</b> (quelles instances sont saines) et d'une <b>règle</b> qui relie les trois pour un protocole et un port. La règle a besoin des trois autres éléments, d'où l'ordre.</p><p>N'oubliez pas un <b>NSG</b> qui autorise le port 80 : avec le SKU Standard, le trafic entrant est refusé par défaut.</p>"
},
{
 "id": "D4-067",
 "dom": 4,
 "type": "single",
 "stem": "<p>LB2, un équilibreur public Standard, répartit le port 443 vers VM3 et VM4. VM4 est arrêtée pour maintenance.</p><p>Comment LB2 sait-il qu'il ne doit plus envoyer de trafic à VM4 ?</p>",
 "opts": [
  "Grâce à la sonde d'intégrité, qui marque VM4 comme non saine",
  "Grâce à la règle NAT entrante",
  "Il continue d'envoyer du trafic à VM4",
  "Grâce à la persistance de session"
 ],
 "ans": 0,
 "expl": "<p>La <b>sonde d'intégrité</b> interroge régulièrement chaque instance (TCP, HTTP ou HTTPS). Après un nombre d'échecs, l'instance est retirée de la répartition jusqu'à ce qu'elle réponde de nouveau.</p>"
},
{
 "id": "D4-068",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une application web stocke la session de l'utilisateur en mémoire sur chaque VM. Derrière un équilibreur de charge Standard, un utilisateur doit toujours retomber sur la même VM.</p><p>Que devez-vous configurer dans la règle d'équilibrage ?</p>",
 "opts": [
  "Une adresse IP flottante",
  "La persistance de session « Adresse IP du client »",
  "Les ports HA",
  "Une règle sortante"
 ],
 "ans": 1,
 "expl": "<p>La <b>persistance de session</b> (affinité) peut être <b>Aucune</b> (hachage à 5 tuples, par défaut), <b>Adresse IP du client</b> (2 tuples : source et destination) ou <b>Adresse IP et protocole du client</b> (3 tuples). Avec l'adresse IP du client, les requêtes d'un même client vont vers la même VM.</p>"
},
{
 "id": "D4-069",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez permettre aux administrateurs de se connecter en RDP à chacune des trois VM d'un pool principal, par l'adresse publique de l'équilibreur LB3, sur les ports 50001, 50002 et 50003.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Des sondes d'intégrité",
  "Des règles d'équilibrage de charge",
  "Des règles NAT entrantes",
  "Des règles sortantes"
 ],
 "ans": 2,
 "expl": "<p>Une <b>règle NAT entrante</b> redirige un port de l'adresse frontale vers un port d'une VM précise (par exemple 50001 → VM1:3389). Une règle d'équilibrage, elle, <b>répartit</b> le trafic entre toutes les VM du pool.</p><p>En production, Azure Bastion est une meilleure solution pour RDP.</p>"
},
{
 "id": "D4-070",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous créez un équilibreur de charge <b>interne</b> devant deux appliances virtuelles réseau, qui doivent recevoir tout le trafic TCP et UDP sur tous les ports.</p><p>Quelle option de la règle d'équilibrage devez-vous activer ?</p>",
 "opts": [
  "L'adresse IP flottante seule",
  "Une règle NAT entrante",
  "La persistance de session",
  "Les ports HA (haute disponibilité)"
 ],
 "ans": 3,
 "expl": "<p>Une règle <b>ports HA</b> (protocole « Tous », port 0) sur un équilibreur <b>interne Standard</b> répartit tous les flux TCP et UDP sur tous les ports. C'est le modèle classique pour mettre des NVA en haute disponibilité.</p>"
},
{
 "id": "D4-071",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous comparez les SKU de l'équilibreur de charge Azure.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Le SKU Standard prend en charge les zones de disponibilité.",
   "a": 0
  },
  {
   "l": "Le pool principal d'un équilibreur Standard peut contenir des VM de plusieurs réseaux virtuels non appairés.",
   "a": 1
  },
  {
   "l": "Un équilibreur Standard bloque le trafic entrant si aucun NSG ne l'autorise.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Zones : Oui</b>, front-end redondant interzone ou zonal.</li><li><b>Plusieurs réseaux virtuels : Non.</b> Les membres du pool doivent être dans un même réseau virtuel (un pool basé sur les adresses IP peut référencer des réseaux appairés, mais pas des réseaux non reliés).</li><li><b>Sécurisé par défaut : Oui.</b> Le SKU Standard est fermé tant qu'un NSG n'autorise pas le trafic.</li></ul><p>Le SKU De base a été retiré en septembre 2025.</p>"
},
{
 "id": "D4-072",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM du pool principal d'un équilibreur public Standard n'ont pas d'adresse IP publique ni de passerelle NAT. Elles doivent sortir sur Internet par l'adresse de l'équilibreur, avec un nombre de ports SNAT contrôlé.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une règle sortante (outbound rule) sur l'équilibreur",
  "Une sonde d'intégrité",
  "Les ports HA",
  "Une règle NAT entrante"
 ],
 "ans": 0,
 "expl": "<p>Les <b>règles sortantes</b> d'un équilibreur public Standard définissent la traduction SNAT du trafic sortant du pool : adresses frontales utilisées et nombre de ports alloués par instance. La <b>passerelle NAT</b> reste la méthode recommandée pour la sortie Internet, si elle est possible.</p>"
},
{
 "id": "D4-073",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une application web dans une région doit être exposée en HTTPS avec un certificat, router selon le chemin d'URL vers deux pools de VM, et être protégée contre l'injection SQL.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Une passerelle NAT",
  "Application Gateway v2 avec WAF",
  "Traffic Manager",
  "Azure Load Balancer Standard"
 ],
 "ans": 1,
 "expl": "<p><b>Application Gateway</b> est un répartiteur de couche 7 : terminaison TLS, <b>routage par chemin</b> (/images/*, /api/*), routage multisite par nom d'hôte, réécriture d'en-têtes. Le niveau <b>WAF</b> ajoute un pare-feu d'applications web (règles OWASP contre l'injection SQL, le XSS…).</p><p>Load Balancer travaille en couche 4 et ne lit pas les URL.</p>"
},
{
 "id": "D4-074",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une seule Application Gateway doit héberger trois sites : www.contoso.com, www.fabrikam.com et www.tailspin.com, chacun avec son pool de serveurs.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Trois Application Gateway",
  "Trois adresses IP privées",
  "Trois écouteurs multisites (avec le nom d'hôte) et trois règles de routage",
  "Trois sondes d'intégrité seulement"
 ],
 "ans": 2,
 "expl": "<p>Un <b>écouteur multisite</b> filtre les requêtes selon le nom d'hôte (en-tête Host). Chaque écouteur est associé à une <b>règle de routage</b> qui envoie vers le bon pool principal. Une seule passerelle peut ainsi héberger plusieurs sites sur la même adresse IP.</p>"
},
{
 "id": "D4-075",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous configurez Application Gateway AG1.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Composant qui reçoit les requêtes sur un port et un protocole (avec le certificat TLS) :",
   "o": [
    "Paramètres HTTP de back-end",
    "Écouteur",
    "Pool principal"
   ],
   "a": 1
  },
  {
   "l": "Composant qui définit le port, le protocole et l'affinité par cookie vers les serveurs :",
   "o": [
    "Écouteur",
    "Paramètres HTTP de back-end",
    "Règle de routage"
   ],
   "a": 1
  },
  {
   "l": "Composant qui relie un écouteur à un pool et à des paramètres :",
   "o": [
    "Sonde d'intégrité",
    "Adresse frontale",
    "Règle de routage"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Écouteur</b> : adresse frontale + port + protocole (+ certificat pour HTTPS, + nom d'hôte pour multisite).</li><li><b>Paramètres HTTP de back-end</b> (paramètres de back-end) : comment joindre les serveurs (port, HTTP/HTTPS, affinité par cookie, délai, sonde personnalisée).</li><li><b>Règle de routage</b> : relie l'écouteur à un pool et à des paramètres, de façon basique ou par chemin.</li></ul>"
},
{
 "id": "D4-076",
 "dom": 4,
 "type": "single",
 "stem": "<p>Application Gateway AG2 doit rediriger automatiquement toutes les requêtes HTTP (port 80) vers HTTPS (port 443).</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une sonde d'intégrité HTTPS",
  "Une règle NAT entrante",
  "Une passerelle NAT",
  "Un écouteur HTTP sur le port 80 avec une règle de redirection vers l'écouteur HTTPS"
 ],
 "ans": 3,
 "expl": "<p>Application Gateway gère les <b>redirections</b> : un écouteur sur le port 80, et une règle qui redirige vers l'écouteur HTTPS (redirection permanente 301). On peut aussi rediriger vers une URL externe.</p>"
},
{
 "id": "D4-077",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous déployez Application Gateway v2 dans VNet1.</p><p>Quelle exigence de sous-réseau devez-vous respecter ?</p>",
 "opts": [
  "Un sous-réseau dédié qui ne contient que des Application Gateway",
  "Le même sous-réseau que les VM du pool",
  "Le sous-réseau GatewaySubnet",
  "Le sous-réseau AzureBastionSubnet"
 ],
 "ans": 0,
 "expl": "<p>Application Gateway exige un <b>sous-réseau dédié</b> (on peut y mettre plusieurs Application Gateway, mais aucune autre ressource). Pour la v2, un /24 est recommandé pour la mise à l'échelle automatique. Son nom est libre ; ce n'est surtout pas le GatewaySubnet, réservé aux passerelles VPN et ExpressRoute.</p>"
},
{
 "id": "D4-078",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une application est déployée dans France Central (principale) et dans West Europe (secours). Tant que France Central fonctionne, tout le trafic doit y aller. Les clients utilisent plusieurs protocoles, pas seulement HTTP.</p><p>Quelle solution et quelle méthode de routage devez-vous utiliser ?</p>",
 "opts": [
  "Traffic Manager avec la méthode Pondérée à 50/50",
  "Traffic Manager avec la méthode Priorité",
  "Load Balancer interne",
  "Application Gateway avec routage par chemin"
 ],
 "ans": 1,
 "expl": "<p><b>Traffic Manager</b> répartit par <b>DNS</b>, donc pour n'importe quel protocole. La méthode <b>Priorité</b> envoie tout vers le point de terminaison de priorité 1 tant qu'il est sain, et bascule vers le suivant en cas de panne (détectée par la surveillance des points de terminaison).</p>"
},
{
 "id": "D4-079",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la méthode de routage Traffic Manager adaptée à chaque besoin.</p><p>Pour répondre, faites glisser la méthode appropriée vers chaque besoin. Chaque méthode peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Méthodes",
 "srcs": [
  "Priorité",
  "Pondérée",
  "Performances",
  "Géographique",
  "Sous-réseau"
 ],
 "tgtHead": [
  "Besoin",
  "Méthode"
 ],
 "tgts": [
  {
   "l": "Envoyer les utilisateurs vers la région qui offre la plus faible latence",
   "a": 2
  },
  {
   "l": "Envoyer 10 % du trafic vers une nouvelle version pour la tester",
   "a": 1
  },
  {
   "l": "Obliger les utilisateurs européens à utiliser des serveurs situés en Europe (souveraineté)",
   "a": 3
  },
  {
   "l": "Utiliser un site de secours uniquement en cas de panne du site principal",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Performances</b> : point de terminaison avec la plus faible latence réseau pour l'utilisateur.</li><li><b>Pondérée</b> : répartition selon des poids.</li><li><b>Géographique</b> : selon l'origine géographique de la requête DNS.</li><li><b>Priorité</b> : principal et secours.</li></ul><p><b>Sous-réseau</b> associe des plages d'adresses IP de clients à des points de terminaison. Il existe aussi la méthode <b>Valeurs multiples</b>.</p>"
},
{
 "id": "D4-080",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les utilisateurs du monde entier accèdent à un site web hébergé dans deux régions. Vous voulez un point d'entrée HTTP mondial unique, avec mise en cache du contenu statique, accélération du trafic dynamique et WAF.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Traffic Manager",
  "Application Gateway",
  "Azure Front Door",
  "Azure Load Balancer"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Front Door</b> est un point d'entrée mondial de couche 7 sur le réseau périphérique de Microsoft : routage vers l'origine la plus rapide, basculement, mise en cache (CDN), terminaison TLS et WAF.</p><p>Traffic Manager ne fait que du DNS, sans cache ni WAF. Application Gateway est régional.</p>"
},
{
 "id": "D4-081",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez filtrer de manière centralisée tout le trafic sortant de plusieurs réseaux virtuels vers Internet, en autorisant seulement certains noms de domaine (FQDN), avec des journaux.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Application Gateway",
  "Un NSG avec des règles de FQDN",
  "Une passerelle NAT",
  "Pare-feu Azure dans un réseau hub, avec des règles d'application FQDN et des itinéraires définis par l'utilisateur dans les spokes"
 ],
 "ans": 3,
 "expl": "<p>Le <b>Pare-feu Azure</b> est un pare-feu managé avec état. Ses <b>règles d'application</b> filtrent par FQDN (HTTP/HTTPS) ; ses <b>règles de réseau</b> par adresse et port ; ses <b>règles DNAT</b> publient des services. On le place dans le hub et on dirige le trafic des spokes vers lui avec des itinéraires 0.0.0.0/0.</p><p>Les NSG ne filtrent pas par nom de domaine.</p>"
},
{
 "id": "D4-082",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous configurez des règles dans une stratégie de Pare-feu Azure.</p><p>Pour répondre, faites glisser le type de règle approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de règles",
 "srcs": [
  "Règle DNAT",
  "Règle de réseau",
  "Règle d'application"
 ],
 "tgtHead": [
  "Besoin",
  "Type de règle"
 ],
 "tgts": [
  {
   "l": "Publier sur Internet le port 3389 d'une VM interne via l'adresse publique du pare-feu",
   "a": 0
  },
  {
   "l": "Autoriser le trafic UDP 123 (NTP) vers un serveur précis",
   "a": 1
  },
  {
   "l": "Autoriser l'accès HTTPS à *.windowsupdate.com",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>DNAT</b> : traduction d'adresse de destination pour le trafic entrant.</li><li><b>Réseau</b> : filtrage couche 3/4 (adresses, ports, protocoles, étiquettes de service).</li><li><b>Application</b> : filtrage par FQDN pour HTTP, HTTPS et MSSQL (et étiquettes FQDN comme WindowsUpdate).</li></ul><p>Ordre de traitement : DNAT, puis réseau, puis application.</p>"
},
{
 "id": "D4-083",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une base Azure SQL Database doit être accessible depuis Subnet1 de VNet1 par une adresse IP privée, et depuis le site local par le VPN.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un point de terminaison privé pour le serveur SQL, avec la zone DNS privatelink.database.windows.net",
  "Une passerelle NAT",
  "Un point de terminaison de service Microsoft.Sql sur Subnet1 uniquement",
  "Une règle de pare-feu avec l'adresse IP publique du site local"
 ],
 "ans": 0,
 "expl": "<p>Le <b>point de terminaison privé</b> donne au serveur SQL une <b>adresse privée</b> dans VNet1, joignable aussi depuis le site local par le VPN (avec une résolution DNS adaptée). Le point de terminaison de service ne fonctionne pas depuis le site local. Une règle de pare-feu IP passerait par Internet.</p>"
},
{
 "id": "D4-084",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous avez créé un point de terminaison privé pour storage90 dans VNet1, sans intégration DNS. Les VM de VNet1 résolvent toujours storage90.blob.core.windows.net vers l'adresse publique.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Redémarrer le compte de stockage",
  "Créer la zone DNS privée privatelink.blob.core.windows.net, la lier à VNet1, et y ajouter l'enregistrement A du point de terminaison",
  "Changer le SKU du compte de stockage",
  "Ajouter un point de terminaison de service"
 ],
 "ans": 1,
 "expl": "<p>Le nom public est un alias (CNAME) vers <code>storage90.privatelink.blob.core.windows.net</code>. Pour qu'il se résolve vers l'adresse privée, il faut la <b>zone DNS privée privatelink</b> correspondante, <b>liée</b> au réseau virtuel, avec un enregistrement A (créé automatiquement via un groupe de zones DNS si on choisit l'intégration).</p>"
},
{
 "id": "D4-085",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez exposer de façon privée un service hébergé derrière un équilibreur de charge Standard interne de votre abonnement, pour que des clients d'autres locataires y accèdent par un point de terminaison privé dans leurs propres réseaux.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Un appairage mondial",
  "Une adresse IP publique",
  "Un service Private Link",
  "Une passerelle VPN par client"
 ],
 "ans": 2,
 "expl": "<p>Un <b>service Private Link</b>, placé devant un équilibreur interne Standard, permet à des consommateurs (même dans d'autres locataires) de créer un <b>point de terminaison privé</b> vers votre service, sans appairage ni exposition publique, et même avec des espaces d'adressage qui se chevauchent.</p>"
},
{
 "id": "D4-086",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une VM a deux interfaces réseau. Vous voulez ajouter une troisième interface réseau.</p><p>Quelle condition doit être remplie ?</p>",
 "opts": [
  "La VM doit avoir une adresse IP publique",
  "La VM doit être dans un groupe à haute disponibilité",
  "Les interfaces doivent être dans des réseaux virtuels différents",
  "La taille de la VM doit prendre en charge 3 interfaces réseau, et la VM doit être arrêtée (libérée) pour l'ajout"
 ],
 "ans": 3,
 "expl": "<p>Le nombre maximal d'interfaces réseau dépend de la <b>taille</b> de la VM. On ajoute ou retire une interface secondaire quand la VM est <b>arrêtée (libérée)</b>. Toutes les interfaces d'une VM doivent être dans le <b>même réseau virtuel</b> (dans des sous-réseaux identiques ou différents).</p>"
},
{
 "id": "D4-087",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez déplacer une interface réseau de VM6 vers VM7.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "On ne peut pas détacher l'interface réseau principale d'une VM ; une interface secondaire peut être détachée (VM libérée) et attachée à une autre VM du même réseau virtuel",
  "Il faut d'abord supprimer VM6",
  "Les interfaces réseau ne sont jamais réutilisables",
  "Toute interface réseau peut être déplacée à chaud"
 ],
 "ans": 0,
 "expl": "<p>Une VM a toujours une interface <b>principale</b>, qu'on ne peut pas détacher. Une interface <b>secondaire</b> peut être détachée (VM arrêtée et libérée) puis attachée à une autre VM du <b>même réseau virtuel</b> et de la même région.</p>"
},
{
 "id": "D4-088",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les ressources Azure de Subnet-Web doivent être joignables depuis Internet, mais les adresses IP de Subnet-DB ne doivent jamais avoir de sortie Internet par défaut, sans dépendre de NSG.</p><p>Quelle propriété du sous-réseau Subnet-DB devez-vous activer ?</p>",
 "opts": [
  "Stratégies réseau de point de terminaison privé",
  "Sous-réseau privé (désactiver l'accès sortant par défaut)",
  "Délégation de sous-réseau",
  "Points de terminaison de service"
 ],
 "ans": 1,
 "expl": "<p>L'option <b>sous-réseau privé</b> (defaultOutboundAccess = false) désactive l'<b>accès sortant par défaut</b> : les VM n'ont plus de sortie Internet implicite. Il faut alors une méthode explicite (passerelle NAT, adresse publique, équilibreur, pare-feu). Microsoft retire l'accès sortant par défaut pour les nouveaux réseaux virtuels.</p>"
},
{
 "id": "D4-089",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous déployez des groupes de conteneurs ACI dans Subnet-ACI. Le déploiement échoue car le sous-réseau n'est pas configuré pour ce service.</p><p>Que devez-vous configurer sur Subnet-ACI ?</p>",
 "opts": [
  "Un groupe de sécurité d'application",
  "Une table de routage",
  "Une délégation de sous-réseau à Microsoft.ContainerInstance/containerGroups",
  "Un point de terminaison de service Microsoft.Storage"
 ],
 "ans": 2,
 "expl": "<p>La <b>délégation de sous-réseau</b> autorise un service PaaS à créer ses ressources dans un sous-réseau (ACI, App Service pour l'intégration au réseau virtuel, Azure SQL Managed Instance, Container Apps…). Un sous-réseau délégué est réservé à ce service.</p>"
},
{
 "id": "D4-090",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous planifiez l'adressage de VNet-Prod, qui contiendra 4 sous-réseaux de 250 VM chacun, une passerelle VPN et Azure Bastion.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Taille minimale de chaque sous-réseau de 250 VM :",
   "o": [
    "/25",
    "/24",
    "/23"
   ],
   "a": 1
  },
  {
   "l": "Espace d'adressage minimal du réseau virtuel (en laissant la place aux sous-réseaux spéciaux) :",
   "o": [
    "/21",
    "/24",
    "/22"
   ],
   "a": 0
  },
  {
   "l": "Plage qui convient pour éviter les conflits avec le site local en 10.0.0.0/16 :",
   "o": [
    "10.0.0.0/21",
    "10.20.0.0/21",
    "10.0.128.0/21"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li>250 VM + 5 réservées = 255 : un <b>/24</b> (251 utilisables) suffit tout juste ; un /25 n'en donne que 123.</li><li>4 × /24 = un /22 complet, sans place pour GatewaySubnet (/27) et AzureBastionSubnet (/26) : il faut un <b>/21</b>.</li><li>10.0.0.0/21 et 10.0.128.0/21 sont dans 10.0.0.0/16 : chevauchement. <b>10.20.0.0/21</b> convient.</li></ul>"
},
{
 "id": "D4-091",
 "dom": 4,
 "type": "single",
 "stem": "<p>VM8 dans VNet1 reçoit l'adresse 10.0.1.4. Vous voulez lui ajouter une seconde adresse IP privée 10.0.1.10 sur la même interface réseau.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Créer un second réseau virtuel",
  "Créer une seconde interface réseau obligatoirement",
  "Modifier l'adresse dans le système d'exploitation uniquement",
  "Ajouter une configuration IP secondaire à l'interface réseau"
 ],
 "ans": 3,
 "expl": "<p>Une interface réseau peut avoir plusieurs <b>configurations IP</b>, chacune avec une adresse privée (et éventuellement publique). Il faut ensuite configurer l'adresse secondaire dans le système d'exploitation, car le DHCP d'Azure ne fournit que l'adresse principale.</p>"
},
{
 "id": "D4-092",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous gérez des groupes de sécurité réseau.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un même NSG peut être associé à plusieurs sous-réseaux et interfaces réseau.",
   "a": 0
  },
  {
   "l": "Un NSG peut être associé à un sous-réseau d'un réseau virtuel d'une autre région.",
   "a": 1
  },
  {
   "l": "Les NSG sont avec état : la réponse à un trafic autorisé est automatiquement autorisée.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Plusieurs associations : Oui.</b></li><li><b>Autre région : Non.</b> Un NSG ne s'associe qu'à des ressources de sa région.</li><li><b>Avec état : Oui.</b> Si une connexion entrante est autorisée, son trafic de retour l'est aussi sans règle sortante.</li></ul>"
},
{
 "id": "D4-093",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une règle de NSG doit autoriser le trafic des sondes d'intégrité de l'équilibreur de charge, même si une règle personnalisée refuse tout le trafic entrant en priorité 4000.</p><p>Quelle source devez-vous utiliser dans une règle d'autorisation de priorité inférieure à 4000 ?</p>",
 "opts": [
  "L'étiquette de service AzureLoadBalancer",
  "L'adresse 169.254.169.254",
  "L'étiquette Internet",
  "L'étiquette VirtualNetwork"
 ],
 "ans": 0,
 "expl": "<p>Les sondes d'intégrité viennent de l'adresse <b>168.63.129.16</b>, représentée par l'étiquette de service <b>AzureLoadBalancer</b>. La règle par défaut AllowAzureLoadBalancerInBound (65001) les autorise, mais une règle de refus personnalisée la court-circuite : il faut donc une règle explicite plus prioritaire.</p>"
},
{
 "id": "D4-094",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez voir toutes les règles de sécurité appliquées à l'interface réseau de VM9, en combinant le NSG du sous-réseau et celui de l'interface, avec les règles par défaut.</p><p>Que devez-vous consulter ?</p>",
 "opts": [
  "Le journal d'activité du NSG",
  "Les règles de sécurité effectives de l'interface réseau",
  "Les métriques de la VM",
  "Les itinéraires effectifs"
 ],
 "ans": 1,
 "expl": "<p>Les <b>règles de sécurité effectives</b> (dans l'interface réseau ou dans Network Watcher) affichent la combinaison des NSG du sous-réseau et de l'interface, avec les étiquettes de service développées en plages d'adresses.</p>"
},
{
 "id": "D4-095",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez capturer le trafic réseau de VM10 pendant 10 minutes pour l'analyser avec Wireshark.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Le moniteur de connexion",
  "Les journaux de flux",
  "La capture de paquets de Network Watcher (extension Network Watcher sur la VM)",
  "Vérification du flux IP"
 ],
 "ans": 2,
 "expl": "<p>La <b>capture de paquets</b> de Network Watcher enregistre le trafic d'une VM (avec filtres et durée) dans un fichier .cap stocké dans un compte de stockage ou sur la VM, à ouvrir avec Wireshark. Elle utilise l'extension Network Watcher Agent.</p><p>Les journaux de flux n'enregistrent que des métadonnées de flux, pas le contenu des paquets.</p>"
},
{
 "id": "D4-096",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez surveiller en continu la latence et la disponibilité de la connexion entre VM11 (Azure) et un serveur du site local, avec des alertes en cas de dégradation.</p><p>Quel outil devez-vous utiliser ?</p>",
 "opts": [
  "Capture de paquets",
  "Vérification du flux IP",
  "Tronçon suivant",
  "Moniteur de connexion de Network Watcher"
 ],
 "ans": 3,
 "expl": "<p>Le <b>moniteur de connexion</b> teste régulièrement des connexions entre sources (VM Azure, machines locales avec l'agent) et destinations, enregistre latence et pertes, et permet des <b>alertes</b> Azure Monitor.</p><p>Les autres outils font des tests ponctuels.</p>"
},
{
 "id": "D4-097",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez visualiser les ressources réseau d'un réseau virtuel (sous-réseaux, interfaces, NSG, passerelles) et leurs relations sous forme de schéma.</p><p>Quelle fonctionnalité devez-vous utiliser ?</p>",
 "opts": [
  "La topologie de Network Watcher",
  "La capture de paquets",
  "Le journal d'activité",
  "Azure Advisor"
 ],
 "ans": 0,
 "expl": "<p>La <b>topologie</b> de Network Watcher génère un schéma interactif des ressources réseau et de leurs liens, sur un ou plusieurs abonnements et régions.</p>"
},
{
 "id": "D4-098",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les outils de Network Watcher ne sont pas disponibles pour un réseau virtuel situé en Norway East.</p><p>Que devez-vous vérifier ?</p>",
 "opts": [
  "Que les VM ont une adresse IP publique",
  "Que Network Watcher est activé dans la région Norway East",
  "Que le réseau virtuel a une passerelle VPN",
  "Que le réseau virtuel est appairé"
 ],
 "ans": 1,
 "expl": "<p><b>Network Watcher</b> est un service <b>régional</b> : une instance est créée par région (automatiquement à la création du premier réseau virtuel, dans le groupe de ressources NetworkWatcherRG). Si elle a été supprimée ou désactivée, il faut l'activer dans cette région.</p>"
},
{
 "id": "D4-099",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous déployez un VPN site à site entre VNet1 et le site de Bordeaux. Vous devez fournir à l'équipe réseau de Bordeaux les informations nécessaires à la configuration de leur pare-feu.</p><p>Quelles <b>deux</b> informations devez-vous leur transmettre ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "L'adresse IP privée de chaque VM",
  "L'adresse IP publique de la passerelle VPN Azure",
  "Le nom du groupe de ressources",
  "La clé partagée de la connexion"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>Adresse publique de la passerelle Azure : oui</b>, c'est l'extrémité du tunnel côté Azure.</li><li><b>Clé partagée : oui</b>, elle doit être identique des deux côtés.</li><li>Ils ont aussi besoin de l'<b>espace d'adressage</b> du réseau virtuel (pour les sélecteurs de trafic), mais pas de l'adresse de chaque VM ni du nom du groupe de ressources.</li></ul>"
},
{
 "id": "D4-100",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Les VM de VNet-Spoke doivent sortir sur Internet uniquement par le Pare-feu Azure de VNet-Hub (adresse privée 10.0.0.4).</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Créer des règles (réseau ou application) dans la stratégie du pare-feu pour autoriser le trafic voulu",
  "Activer « Utiliser la passerelle distante » sans passerelle dans le hub",
  "Créer une table de routage avec 0.0.0.0/0 → Appliance virtuelle 10.0.0.4 et l'associer aux sous-réseaux du spoke",
  "Créer une passerelle NAT dans le spoke"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<ul><li><b>Itinéraire 0.0.0.0/0 vers le pare-feu : oui</b>, il force le trafic Internet vers le hub (l'appairage doit être connecté).</li><li><b>Règles du pare-feu : oui</b>, le Pare-feu Azure refuse tout par défaut.</li><li>« Utiliser la passerelle distante » concerne une passerelle VPN. Une passerelle NAT dans le spoke ferait sortir le trafic sans passer par le pare-feu.</li></ul>"
},
{
 "id": "D4-101",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous déployez Azure Bastion dans VNet1.</p><p>Quelles <b>deux</b> conditions sont requises ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Un sous-réseau nommé AzureBastionSubnet de taille /26 ou plus",
  "Une passerelle VPN",
  "Une adresse IP publique sur chaque VM",
  "Une adresse IP publique de SKU Standard (pour les SKU De base et supérieurs)"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<ul><li><b>AzureBastionSubnet /26 : oui.</b></li><li><b>Adresse IP publique Standard : oui</b>, pour Bastion lui-même (le SKU Développeur n'en a pas besoin).</li><li>Les VM n'ont <b>pas</b> besoin d'adresse publique : c'est tout l'intérêt de Bastion. Aucune passerelle VPN n'est nécessaire.</li></ul>"
},
{
 "id": "D4-102",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>Vous devez créer un réseau virtuel avec un sous-réseau, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az network vnet create --resource-group RG1 --name VNet6 {0} 10.6.0.0/16 --subnet-name Subnet1 {1} 10.6.1.0/24",
 "rows": [
  {
   "l": "Espace d'adressage",
   "o": [
    "--address-prefixes",
    "--address-space",
    "--cidr"
   ],
   "a": 0
  },
  {
   "l": "Préfixe du sous-réseau",
   "o": [
    "--subnet-prefixes",
    "--subnet-range",
    "--prefix"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az network vnet create --address-prefixes 10.6.0.0/16 --subnet-name Subnet1 --subnet-prefixes 10.6.1.0/24</code>. Pour ajouter d'autres sous-réseaux : <code>az network vnet subnet create --address-prefixes ...</code>.</p>"
},
{
 "id": "D4-103",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>Vous devez créer l'appairage de VNet1 vers VNet2, avec l'accès au réseau virtuel autorisé, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az network vnet {0} create --resource-group RG1 --name VNet1-vers-VNet2 --vnet-name VNet1 {1} VNet2 --allow-vnet-access",
 "rows": [
  {
   "l": "Sous-groupe",
   "o": [
    "peering",
    "link",
    "connection"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--remote-vnet",
    "--target-vnet",
    "--peer"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az network vnet peering create --vnet-name VNet1 --remote-vnet VNet2 --allow-vnet-access</code>. Il faut créer aussi l'appairage inverse (de VNet2 vers VNet1). D'autres options : <code>--allow-forwarded-traffic</code>, <code>--allow-gateway-transit</code>, <code>--use-remote-gateways</code>.</p>"
},
{
 "id": "D4-104",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>Vous devez ajouter au NSG NSG5 une règle qui autorise HTTPS entrant depuis Internet, avec Azure PowerShell. $nsg contient NSG5.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "$nsg | {0} -Name Allow-HTTPS -Access Allow -Protocol Tcp -Direction {1} -Priority 200 -SourceAddressPrefix Internet -SourcePortRange * -DestinationAddressPrefix * -DestinationPortRange 443 | Set-AzNetworkSecurityGroup",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Add-AzNetworkSecurityRuleConfig",
    "New-AzNetworkSecurityGroup",
    "Set-AzRouteConfig"
   ],
   "a": 0
  },
  {
   "l": "Direction",
   "o": [
    "Inbound",
    "Outbound",
    "Both"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>Add-AzNetworkSecurityRuleConfig</b> ajoute une règle à l'objet NSG en mémoire, puis <b>Set-AzNetworkSecurityGroup</b> enregistre le changement dans Azure. La direction est <b>Inbound</b> ou <b>Outbound</b> (pas « Both »).</p>"
},
{
 "id": "D4-105",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>Vous devez créer un itinéraire qui envoie 0.0.0.0/0 vers le pare-feu 10.0.0.4 dans la table RT5, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az network route-table route create --resource-group RG1 --route-table-name RT5 --name Vers-FW --address-prefix 0.0.0.0/0 --next-hop-type {0} {1} 10.0.0.4",
 "rows": [
  {
   "l": "Type de saut suivant",
   "o": [
    "VirtualAppliance",
    "VirtualNetworkGateway",
    "Internet"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--next-hop-ip-address",
    "--gateway-ip",
    "--destination"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>--next-hop-type VirtualAppliance --next-hop-ip-address 10.0.0.4</code>. L'adresse IP n'est utilisée qu'avec le type VirtualAppliance. On associe ensuite la table au sous-réseau avec <code>az network vnet subnet update --route-table RT5</code>.</p>"
},
{
 "id": "D4-106",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous créez une règle de sécurité de trafic entrant dans NSG6. Seuls les serveurs du groupe de sécurité d'application ASG-Admin doivent pouvoir joindre les VM de ASG-Web en SSH. La règle doit passer avant une règle de refus de priorité 500.</p><p>Comment devez-vous configurer la règle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Ajouter une règle de sécurité de trafic entrant",
  "sub": "NSG6",
  "rows": [
   {
    "k": "select",
    "l": "Source",
    "o": [
     "Any",
     "Adresses IP",
     "Étiquette de service",
     "Groupe de sécurité d'application"
    ],
    "a": 3
   },
   {
    "k": "select",
    "l": "Groupes de sécurité d'application sources",
    "o": [
     "ASG-Admin",
     "ASG-Web"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Destination",
    "o": [
     "Any",
     "Groupe de sécurité d'application",
     "VirtualNetwork"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Groupe de sécurité d'application de destination",
    "o": [
     "ASG-Admin",
     "ASG-Web"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Service",
    "o": [
     "HTTPS",
     "SSH",
     "RDP"
    ],
    "a": 1
   },
   {
    "k": "radio",
    "l": "Action",
    "opts": [
     "Autoriser",
     "Refuser"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Priorité",
    "o": [
     "100",
     "600",
     "4096"
    ],
    "a": 0
   }
  ]
 },
 "expl": "<ul><li>Source et destination : <b>groupes de sécurité d'application</b> ASG-Admin vers ASG-Web.</li><li>Service <b>SSH</b> (TCP 22), action <b>Autoriser</b>.</li><li>Priorité <b>100</b> : un numéro plus petit que 500 passe avant la règle de refus. 600 et 4096 seraient évalués après le refus.</li></ul>"
},
{
 "id": "D4-107",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous configurez l'appairage du spoke VNet-S3 vers le hub VNet-Hub, qui possède une passerelle VPN vers le site local. VNet-S3 doit joindre le site local par cette passerelle et recevoir le trafic transféré par le pare-feu du hub.</p><p>Comment devez-vous configurer les options du lien de VNet-S3 vers VNet-Hub ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Ajouter un appairage",
  "sub": "VNet-S3 | Appairages",
  "rows": [
   {
    "k": "head",
    "t": "Ce réseau virtuel (VNet-S3 → VNet-Hub)"
   },
   {
    "k": "check",
    "l": "Autoriser VNet-S3 à accéder à VNet-Hub",
    "d": true,
    "a": true
   },
   {
    "k": "check",
    "l": "Autoriser VNet-S3 à recevoir le trafic transféré de VNet-Hub",
    "a": true
   },
   {
    "k": "check",
    "l": "Autoriser la passerelle de VNet-S3 à transférer le trafic vers VNet-Hub",
    "a": false
   },
   {
    "k": "check",
    "l": "Permettre à VNet-S3 d'utiliser la passerelle distante de VNet-Hub",
    "a": true
   }
  ]
 },
 "expl": "<ul><li><b>Accès</b> : nécessaire pour communiquer.</li><li><b>Recevoir le trafic transféré</b> : accepte le trafic qui transite par le pare-feu du hub.</li><li><b>Transit de la passerelle de VNet-S3 : non</b>, VNet-S3 n'a pas de passerelle.</li><li><b>Utiliser la passerelle distante : oui</b>, pour joindre le site local par la passerelle du hub (qui doit, de son côté, autoriser le transit).</li></ul>"
},
{
 "id": "D4-108",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>Vous devez associer la table de routage RT6 au sous-réseau Subnet-App.</p><p>Dans RT6, quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "RT6 | Table de routage",
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
     "Configuration",
     "Itinéraires",
     "Sous-réseaux",
     "Propriétés",
     "Verrous"
    ]
   },
   {
    "g": "Supervision",
    "items": [
     "Alertes",
     "Diagnostiquer et résoudre les problèmes"
    ]
   }
  ]
 },
 "ans": "Sous-réseaux",
 "expl": "<p><b>Sous-réseaux</b> permet d'associer ou de dissocier la table à des sous-réseaux. <b>Itinéraires</b> sert à ajouter les itinéraires. <b>Configuration</b> contient l'option de propagation des itinéraires de passerelle.</p>"
},
{
 "id": "D4-109",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>Vous devez vérifier si le trafic de VM12 vers 8.8.8.8 passe par le Pare-feu Azure ou sort directement.</p><p>Dans Network Watcher, quel outil devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "Network Watcher",
  "nav": [
   {
    "g": "Surveillance",
    "items": [
     "Topologie",
     "Moniteur de connexion"
    ]
   },
   {
    "g": "Outils de diagnostic réseau",
    "items": [
     "Vérification du flux IP",
     "Diagnostics NSG",
     "Tronçon suivant",
     "Règles de sécurité effectives",
     "Résolution des problèmes de VPN",
     "Capture de paquets",
     "Résolution des problèmes de connexion"
    ]
   },
   {
    "g": "Journaux",
    "items": [
     "Journaux de flux",
     "Traffic Analytics"
    ]
   }
  ]
 },
 "ans": "Tronçon suivant",
 "expl": "<p><b>Tronçon suivant</b> indique, pour une VM et une destination, le type de saut suivant (Internet, Appliance virtuelle, Passerelle…), son adresse et la table de routage utilisée. Si le saut suivant est l'adresse du pare-feu, le trafic passe par lui.</p>"
},
{
 "id": "D4-110",
 "dom": 4,
 "type": "single",
 "stem": "<p>Deux VM de VNet1 dans des sous-réseaux différents n'arrivent pas à communiquer. Aucun NSG ni table de routage n'est configuré.</p><p>Quelle est la cause la plus probable ?</p>",
 "opts": [
  "Il faut un appairage entre les sous-réseaux",
  "Il faut une passerelle VPN",
  "Le pare-feu du système d'exploitation des VM (par exemple le pare-feu Windows qui bloque ICMP)",
  "Les sous-réseaux d'un même réseau virtuel ne communiquent pas par défaut"
 ],
 "ans": 2,
 "expl": "<p>Par défaut, tous les sous-réseaux d'un réseau virtuel communiquent grâce à l'itinéraire système du réseau virtuel. Sans NSG ni UDR, la cause probable est le <b>pare-feu du système d'exploitation</b> : par exemple, le pare-feu Windows bloque le ping (ICMP) par défaut.</p>"
},
{
 "id": "D4-111",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez que les VM d'un pool d'équilibreur de charge interne puissent recevoir le trafic adressé directement à l'adresse frontale (par exemple pour un cluster SQL Always On).</p><p>Quelle option de la règle d'équilibrage devez-vous activer ?</p>",
 "opts": [
  "Une sonde HTTP",
  "Les règles sortantes",
  "La persistance de session",
  "L'adresse IP flottante (retour direct du serveur)"
 ],
 "ans": 3,
 "expl": "<p>L'<b>adresse IP flottante</b> (Direct Server Return) transmet le paquet sans traduire l'adresse de destination : la VM voit l'adresse frontale et doit l'avoir configurée en bouclage. C'est requis pour les écouteurs de groupes de disponibilité SQL Server.</p>"
},
{
 "id": "D4-112",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une Application Gateway renvoie l'erreur 502 (Bad Gateway) pour toutes les requêtes. Les VM du pool fonctionnent quand on les interroge directement.</p><p>Que devez-vous vérifier en premier ?</p>",
 "opts": [
  "L'intégrité du back-end (sonde, NSG du sous-réseau d'Application Gateway, ports et certificats du back-end)",
  "Le niveau d'accès du stockage",
  "Les règles DNAT d'un pare-feu",
  "La passerelle VPN"
 ],
 "ans": 0,
 "expl": "<p>Une erreur <b>502</b> signifie qu'Application Gateway ne peut pas joindre un back-end sain. La page <b>Intégrité du back-end</b> indique pourquoi : sonde qui échoue (chemin ou code attendu), NSG qui bloque, port ou nom d'hôte incorrect, certificat du back-end non approuvé en HTTPS.</p>"
},
{
 "id": "D4-113",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous ajoutez un NSG au sous-réseau d'Application Gateway v2. Ensuite, la passerelle cesse de fonctionner.</p><p>Quelle règle entrante devez-vous autoriser ?</p>",
 "opts": [
  "Le port 3389 depuis Internet",
  "Les ports 65200-65535 depuis l'étiquette de service GatewayManager",
  "Le port 1433 depuis AzureCloud",
  "Le port 22 depuis VirtualNetwork"
 ],
 "ans": 1,
 "expl": "<p>Application Gateway v2 a besoin que les ports <b>65200 à 65535</b> soient ouverts en entrée depuis l'étiquette <b>GatewayManager</b> (communication avec l'infrastructure Azure). Il faut aussi autoriser AzureLoadBalancer et le trafic client sur les ports des écouteurs.</p>"
},
{
 "id": "D4-114",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une passerelle VPN de SKU VpnGw1 n'offre plus assez de bande passante pour le trafic avec le site local.</p><p>Que pouvez-vous faire ?</p>",
 "opts": [
  "Ajouter une seconde passerelle VPN dans le même réseau virtuel",
  "Créer un second GatewaySubnet",
  "Redimensionner la passerelle vers un SKU supérieur de la même génération (par exemple VpnGw2)",
  "Augmenter la taille des VM"
 ],
 "ans": 2,
 "expl": "<p>On peut <b>redimensionner</b> une passerelle vers un SKU supérieur (VpnGw1 → VpnGw2 → VpnGw3…, ou vers les versions AZ redondantes interzone). Un réseau virtuel n'a qu'une passerelle VPN et un seul GatewaySubnet.</p>"
},
{
 "id": "D4-115",
 "dom": 4,
 "type": "single",
 "stem": "<p>Votre passerelle VPN doit résister à la panne d'une zone de disponibilité.</p><p>Quel SKU devez-vous choisir ?</p>",
 "opts": [
  "De base",
  "Standard",
  "VpnGw2",
  "Un SKU AZ, par exemple VpnGw2AZ"
 ],
 "ans": 3,
 "expl": "<p>Les SKU se terminant par <b>AZ</b> (VpnGw1AZ à VpnGw5AZ) déploient les instances de la passerelle dans plusieurs zones de disponibilité. Microsoft fait évoluer les SKU non-AZ vers les SKU AZ dans les régions qui ont des zones.</p>"
},
{
 "id": "D4-116",
 "dom": 4,
 "type": "single",
 "stem": "<p>Votre organisation a 30 agences, plusieurs régions Azure et des utilisateurs nomades. Vous voulez une architecture réseau managée qui interconnecte automatiquement tout cela (VPN, ExpressRoute, réseaux virtuels).</p><p>Que devez-vous recommander ?</p>",
 "opts": [
  "Azure Virtual WAN",
  "Une passerelle NAT",
  "Azure Bastion",
  "Un appairage entre chaque paire de réseaux virtuels"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Virtual WAN</b> fournit des hubs virtuels managés qui interconnectent sites VPN, circuits ExpressRoute, utilisateurs point à site et réseaux virtuels, avec le routage transitif automatique entre eux.</p>"
},
{
 "id": "D4-117",
 "dom": 4,
 "type": "single",
 "stem": "<p>Le trafic entre VNet1 et le site local passe par le VPN site à site. Une VM du site local ne peut pas joindre une VM de VNet1, mais l'inverse fonctionne.</p><p>Quelle cause est la plus probable ?</p>",
 "opts": [
  "L'appairage n'est pas transitif",
  "Un NSG qui n'autorise pas le trafic entrant depuis les plages du site local (ou le pare-feu local)",
  "Le DNS d'Azure ne fonctionne pas",
  "La VM n'a pas d'adresse publique"
 ],
 "ans": 1,
 "expl": "<p>Le tunnel fonctionne (l'inverse passe). Le trafic <b>entrant</b> est donc filtré : par un NSG (si les règles par défaut ont été remplacées, ou si une règle de refus plus prioritaire existe) ou par le pare-feu de la VM ou du site local. Vérification du flux IP le confirmera.</p><p>La règle par défaut AllowVnetInBound inclut normalement les plages du site local connues par la passerelle.</p>"
},
{
 "id": "D4-118",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez limiter les adresses IP publiques des interfaces réseau dans tout l'abonnement : aucune VM ne doit pouvoir recevoir d'adresse IP publique.</p><p>Quelle solution est la plus adaptée ?</p>",
 "opts": [
  "Un NSG sur chaque sous-réseau",
  "Une table de routage",
  "Une stratégie Azure Policy qui refuse les interfaces réseau avec une adresse IP publique",
  "Une passerelle NAT"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Policy</b> (par exemple la stratégie intégrée « Les interfaces réseau ne doivent pas avoir d'adresses IP publiques », effet Deny) empêche la configuration elle-même. Un NSG filtre le trafic mais n'empêche pas d'attribuer une adresse.</p>"
},
{
 "id": "D4-119",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une VM de VNet1 doit résoudre les noms des VM de VNet2, appairé, sans DNS personnalisé.</p><p>Quelle solution est la plus simple ?</p>",
 "opts": [
  "Un fichier hosts sur chaque VM",
  "Le DNS fourni par Azure suffit entre réseaux appairés",
  "Une zone DNS publique",
  "Une zone DNS privée liée aux deux réseaux virtuels (inscription automatique activée pour chacun)"
 ],
 "ans": 3,
 "expl": "<p>Le DNS fourni par Azure ne résout les noms courts qu'à l'intérieur d'un même réseau virtuel. Une <b>zone DNS privée</b> liée aux deux réseaux, avec l'<b>inscription automatique</b> activée sur chacun (un réseau ne peut avoir qu'une zone d'inscription), permet aux VM de se résoudre mutuellement.</p>"
}
);
