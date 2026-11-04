/* Domaine 4 : réseau virtuel (lot C : D4-065 à D4-119) */
AZ.questions.push(
{
 "id": "D4-065",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le service de répartition de charge adapté à chaque besoin.</p><p>Pour répondre, faites glisser le service approprié vers chaque besoin. Chaque service peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Services",
 "tgtHead": [
  "Besoin",
  "Service"
 ],
 "srcs": [
  "Azure Load Balancer",
  "Application Gateway",
  "Traffic Manager",
  "Azure Front Door"
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
 "expl": "<ul><li><b>Load Balancer</b> : couche 4 (TCP/UDP), régional.</li><li><b>Application Gateway</b> : couche 7 (HTTP/HTTPS), régional, routage par chemin ou par nom d'hôte, terminaison TLS, WAF.</li><li><b>Traffic Manager</b> : répartition mondiale par <b>DNS</b>, quel que soit le protocole.</li><li><b>Front Door</b> : couche 7 mondiale, avec CDN, accélération et WAF.</li></ul>",
 "portal": {
  "path": [
   "Équilibrage de charge"
  ],
  "title": "Équilibrage de charge | Comparer",
  "rows": [
   [
    "*Load Balancer",
    "Couche 4 · régional"
   ],
   [
    "Application Gateway",
    "Couche 7 · régional · WAF"
   ],
   [
    "Traffic Manager",
    "DNS · mondial"
   ],
   [
    "Front Door",
    "Couche 7 · mondial · CDN · WAF"
   ]
  ]
 },
 "keep": "L4 régional = LB ; L7 régional = AppGW ; DNS mondial = TM ; L7 mondial = Front Door."
},
{
 "id": "D4-066",
 "dom": 4,
 "type": "order",
 "stem": "<p>Vous devez répartir le trafic HTTP entre VM1 et VM2 avec un équilibreur de charge public Standard nouvellement créé, LB1.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Un équilibreur se compose d'une <b>adresse frontale</b> (où arrive le trafic), d'un <b>pool principal</b> (vers où il est réparti), d'une <b>sonde d'intégrité</b> (quelles instances sont saines) et d'une <b>règle</b> qui relie les trois pour un protocole et un port. La règle a besoin des trois autres éléments, d'où l'ordre.</p><p>N'oubliez pas un <b>NSG</b> qui autorise le port 80 : avec le SKU Standard, le trafic entrant est refusé par défaut.</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "LB1"
  ],
  "title": "LB1 | Règles d'équilibrage de charge",
  "menu": [
   "Configuration IP frontale",
   "Pools principaux",
   "Sondes d'intégrité",
   "*Règles d'équilibrage de charge"
  ],
  "rows": [
   [
    "*rule-http",
    "Front-end · pool · sonde · port 80"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Front-end → pool → sonde → règle (qui relie les trois).",
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
 ]
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
 "expl": "<ul><li><b>Zones : Oui</b>, front-end redondant interzone ou zonal.</li><li><b>Plusieurs réseaux virtuels : Non.</b> Les membres du pool doivent être dans un même réseau virtuel (un pool basé sur les adresses IP peut référencer des réseaux appairés, mais pas des réseaux non reliés).</li><li><b>Sécurisé par défaut : Oui.</b> Le SKU Standard est fermé tant qu'un NSG n'autorise pas le trafic.</li></ul><p>Le SKU De base a été retiré en septembre 2025.</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "Créer"
  ],
  "title": "SKU Standard",
  "rows": [
   [
    "*Zones",
    "Redondant interzone ou zonal"
   ],
   [
    "Pool",
    "Un seul réseau virtuel"
   ],
   [
    "*Sécurité",
    "Fermé par défaut (NSG requis)"
   ]
  ]
 },
 "keep": "Standard : zones, un VNet par pool, sécurisé par défaut."
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
 "expl": "<ul><li><b>Écouteur</b> : adresse frontale + port + protocole (+ certificat pour HTTPS, + nom d'hôte pour multisite).</li><li><b>Paramètres HTTP de back-end</b> (paramètres de back-end) : comment joindre les serveurs (port, HTTP/HTTPS, affinité par cookie, délai, sonde personnalisée).</li><li><b>Règle de routage</b> : relie l'écouteur à un pool et à des paramètres, de façon basique ou par chemin.</li></ul>",
 "portal": {
  "path": [
   "Passerelles d'application",
   "AG1"
  ],
  "title": "AG1",
  "menu": [
   "Pools principaux",
   "*Paramètres de back-end",
   "*Écouteurs",
   "*Règles"
  ],
  "rows": [
   [
    "Écouteur",
    "Port, protocole, certificat"
   ],
   [
    "Paramètres de back-end",
    "Port, protocole, affinité cookie"
   ],
   [
    "Règle",
    "Écouteur → pool + paramètres"
   ]
  ]
 },
 "keep": "Écouteur (entrée) → règle → pool + paramètres de back-end (sortie)."
},
{
 "id": "D4-079",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la méthode de routage Traffic Manager adaptée à chaque besoin.</p><p>Pour répondre, faites glisser la méthode appropriée vers chaque besoin. Chaque méthode peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Méthodes",
 "tgtHead": [
  "Besoin",
  "Méthode"
 ],
 "srcs": [
  "Priorité",
  "Pondérée",
  "Performances",
  "Géographique",
  "Sous-réseau"
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
 "expl": "<ul><li><b>Performances</b> : point de terminaison avec la plus faible latence réseau pour l'utilisateur.</li><li><b>Pondérée</b> : répartition selon des poids.</li><li><b>Géographique</b> : selon l'origine géographique de la requête DNS.</li><li><b>Priorité</b> : principal et secours.</li></ul><p><b>Sous-réseau</b> associe des plages d'adresses IP de clients à des points de terminaison. Il existe aussi la méthode <b>Valeurs multiples</b>.</p>",
 "portal": {
  "path": [
   "Profils Traffic Manager",
   "Créer"
  ],
  "title": "Méthode de routage",
  "rows": [
   [
    "*Performances",
    "Latence la plus faible"
   ],
   [
    "Pondérée",
    "Poids"
   ],
   [
    "Géographique",
    "Origine de l'utilisateur"
   ],
   [
    "Priorité",
    "Secours"
   ]
  ]
 },
 "keep": "Latence = Performances ; % = Pondérée ; souveraineté = Géographique ; secours = Priorité."
},
{
 "id": "D4-082",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous configurez des règles dans une stratégie de Pare-feu Azure.</p><p>Pour répondre, faites glisser le type de règle approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de règles",
 "tgtHead": [
  "Besoin",
  "Type de règle"
 ],
 "srcs": [
  "Règle DNAT",
  "Règle de réseau",
  "Règle d'application"
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
 "expl": "<ul><li><b>DNAT</b> : traduction d'adresse de destination pour le trafic entrant.</li><li><b>Réseau</b> : filtrage couche 3/4 (adresses, ports, protocoles, étiquettes de service).</li><li><b>Application</b> : filtrage par FQDN pour HTTP, HTTPS et MSSQL (et étiquettes FQDN comme WindowsUpdate).</li></ul><p>Ordre de traitement : DNAT, puis réseau, puis application.</p>",
 "portal": {
  "path": [
   "Stratégies de pare-feu",
   "FWP1"
  ],
  "title": "FWP1 | Règles",
  "menu": [
   "*Règles DNAT",
   "*Règles de réseau",
   "*Règles d'application"
  ],
  "rows": [
   [
    "DNAT",
    "3389 publié"
   ],
   [
    "Réseau",
    "UDP 123"
   ],
   [
    "Application",
    "*.windowsupdate.com"
   ]
  ]
 },
 "keep": "Entrant publié = DNAT ; IP/port = réseau ; FQDN = application."
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
 "expl": "<ul><li>250 VM + 5 réservées = 255 : un <b>/24</b> (251 utilisables) suffit tout juste ; un /25 n'en donne que 123.</li><li>4 × /24 = un /22 complet, sans place pour GatewaySubnet (/27) et AzureBastionSubnet (/26) : il faut un <b>/21</b>.</li><li>10.0.0.0/21 et 10.0.128.0/21 sont dans 10.0.0.0/16 : chevauchement. <b>10.20.0.0/21</b> convient.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "Créer"
  ],
  "title": "Adresses IP",
  "rows": [
   [
    "*Espace d'adressage",
    "10.20.0.0/21"
   ],
   [
    "4 sous-réseaux",
    "/24 chacun"
   ],
   [
    "GatewaySubnet + AzureBastionSubnet",
    "/27 + /26"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Additionner les sous-réseaux (y compris spéciaux) puis éviter les chevauchements."
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
 "expl": "<ul><li><b>Plusieurs associations : Oui.</b></li><li><b>Autre région : Non.</b> Un NSG ne s'associe qu'à des ressources de sa région.</li><li><b>Avec état : Oui.</b> Si une connexion entrante est autorisée, son trafic de retour l'est aussi sans règle sortante.</li></ul>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG1"
  ],
  "title": "NSG1 | Sous-réseaux",
  "menu": [
   "Interfaces réseau",
   "*Sous-réseaux"
  ],
  "rows": [
   [
    "*Associations",
    "Plusieurs, même région"
   ],
   [
    "Fonctionnement",
    "Avec état"
   ]
  ]
 },
 "keep": "NSG : plusieurs associations, même région, avec état."
},
{
 "id": "D4-099",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous déployez un VPN site à site entre VNet1 et le site de Bordeaux. Vous devez fournir à l'équipe réseau de Bordeaux les informations nécessaires à la configuration de leur pare-feu.</p><p>Pour chacune des informations suivantes, sélectionnez Oui si vous devez la transmettre à l'équipe de Bordeaux. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "L'adresse IP privée de chaque VM de VNet1",
   "a": 1
  },
  {
   "l": "L'adresse IP publique de la passerelle VPN",
   "a": 0
  },
  {
   "l": "Le nom du groupe de ressources de VNet1",
   "a": 1
  },
  {
   "l": "La clé partagée de la connexion",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Adresse publique de la passerelle Azure : oui</b>, c'est l'extrémité du tunnel côté Azure.</li><li><b>Clé partagée : oui</b>, elle doit être identique des deux côtés.</li><li>Ils ont aussi besoin de l'<b>espace d'adressage</b> du réseau virtuel (pour les sélecteurs de trafic), mais pas de l'adresse de chaque VM ni du nom du groupe de ressources.</li></ul>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VNet1-GW"
  ],
  "title": "VNet1-GW | Vue d'ensemble",
  "rows": [
   [
    "*Adresse IP publique",
    "20.x.x.x"
   ],
   [
    "*Clé partagée",
    "Dans la connexion"
   ],
   [
    "Espace d'adressage",
    "10.0.0.0/16"
   ]
  ]
 },
 "keep": "Pour le site distant : IP publique de la passerelle + clé partagée (+ plages)."
},
{
 "id": "D4-100",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Les VM de VNet-Spoke doivent sortir sur Internet uniquement par le Pare-feu Azure de VNet-Hub (adresse privée 10.0.0.4).</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle fait partie de la solution. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Créer dans la stratégie du pare-feu les règles qui autorisent le trafic",
   "a": 0
  },
  {
   "l": "Activer « Utiliser la passerelle distante » sur l'appairage du spoke vers le hub",
   "a": 1
  },
  {
   "l": "Associer aux sous-réseaux du spoke une UDR 0.0.0.0/0 → 10.0.0.4",
   "a": 0
  },
  {
   "l": "Créer une passerelle NAT dans le spoke, associée à ses sous-réseaux",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Itinéraire 0.0.0.0/0 vers le pare-feu : oui</b>, il force le trafic Internet vers le hub (l'appairage doit être connecté).</li><li><b>Règles du pare-feu : oui</b>, le Pare-feu Azure refuse tout par défaut.</li><li>« Utiliser la passerelle distante » concerne une passerelle VPN. Une passerelle NAT dans le spoke ferait sortir le trafic sans passer par le pare-feu.</li></ul>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT-Spoke"
  ],
  "title": "RT-Spoke | Itinéraires",
  "menu": [
   "*Itinéraires"
  ],
  "rows": [
   [
    "*0.0.0.0/0",
    "Appliance virtuelle · 10.0.0.4"
   ],
   [
    "Pare-feu",
    "Règles d'autorisation"
   ]
  ]
 },
 "keep": "Sortie par le pare-feu = UDR 0.0.0.0/0 + règles (refus par défaut)."
},
{
 "id": "D4-101",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous déployez Azure Bastion dans VNet1.</p><p>Pour chacune des propositions suivantes, sélectionnez Oui s'il s'agit d'une condition requise. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un sous-réseau AzureBastionSubnet de taille /26 ou plus",
   "a": 0
  },
  {
   "l": "Une passerelle VPN dans le GatewaySubnet du même réseau",
   "a": 1
  },
  {
   "l": "Une adresse IP publique Standard sur chaque VM cible",
   "a": 1
  },
  {
   "l": "Une adresse IP publique Standard pour Bastion",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>AzureBastionSubnet /26 : oui.</b></li><li><b>Adresse IP publique Standard : oui</b>, pour Bastion lui-même (le SKU Développeur n'en a pas besoin).</li><li>Les VM n'ont <b>pas</b> besoin d'adresse publique : c'est tout l'intérêt de Bastion. Aucune passerelle VPN n'est nécessaire.</li></ul>",
 "portal": {
  "path": [
   "Bastions",
   "Créer"
  ],
  "title": "Créer un Bastion",
  "rows": [
   [
    "*Sous-réseau",
    "AzureBastionSubnet /26"
   ],
   [
    "*Adresse IP publique",
    "Standard"
   ],
   [
    "VM",
    "Sans IP publique"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Bastion : AzureBastionSubnet /26 + IP publique Standard."
},
{
 "id": "D4-102",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>Vous devez créer un réseau virtuel avec un sous-réseau, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><code>az network vnet create --address-prefixes 10.6.0.0/16 --subnet-name Subnet1 --subnet-prefixes 10.6.1.0/24</code>. Pour ajouter d'autres sous-réseaux : <code>az network vnet subnet create --address-prefixes ...</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*--address-prefixes",
    "Espace du VNet"
   ],
   [
    "*--subnet-prefixes",
    "Plage du sous-réseau"
   ]
  ]
 },
 "keep": "az network vnet create --address-prefixes … --subnet-prefixes …",
 "tpl": "az network vnet create --resource-group RG1 --name VNet6 {0} 10.6.0.0/16 --subnet-name Subnet1 {1} 10.6.1.0/24"
},
{
 "id": "D4-103",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>Vous devez créer l'appairage de VNet1 vers VNet2, avec l'accès au réseau virtuel autorisé, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><code>az network vnet peering create --vnet-name VNet1 --remote-vnet VNet2 --allow-vnet-access</code>. Il faut créer aussi l'appairage inverse (de VNet2 vers VNet1). D'autres options : <code>--allow-forwarded-traffic</code>, <code>--allow-gateway-transit</code>, <code>--use-remote-gateways</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az network vnet peering create",
    "--remote-vnet VNet2"
   ],
   [
    "Penser à",
    "L'appairage inverse"
   ]
  ]
 },
 "keep": "az network vnet peering create --remote-vnet (dans les deux sens).",
 "tpl": "az network vnet {0} create --resource-group RG1 --name VNet1-vers-VNet2 --vnet-name VNet1 {1} VNet2 --allow-vnet-access"
},
{
 "id": "D4-104",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>Vous devez ajouter au NSG NSG5 une règle qui autorise HTTPS entrant depuis Internet, avec Azure PowerShell. $nsg contient NSG5.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><b>Add-AzNetworkSecurityRuleConfig</b> ajoute une règle à l'objet NSG en mémoire, puis <b>Set-AzNetworkSecurityGroup</b> enregistre le changement dans Azure. La direction est <b>Inbound</b> ou <b>Outbound</b> (pas « Both »).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "PowerShell",
  "rows": [
   [
    "*Add-AzNetworkSecurityRuleConfig",
    "Ajoute la règle en mémoire"
   ],
   [
    "Set-AzNetworkSecurityGroup",
    "Enregistre"
   ]
  ]
 },
 "keep": "Add-…RuleConfig puis Set-AzNetworkSecurityGroup.",
 "tpl": "$nsg | {0} -Name Allow-HTTPS -Access Allow -Protocol Tcp -Direction {1} -Priority 200 -SourceAddressPrefix Internet -SourcePortRange * -DestinationAddressPrefix * -DestinationPortRange 443 | Set-AzNetworkSecurityGroup"
},
{
 "id": "D4-105",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>Vous devez créer un itinéraire qui envoie 0.0.0.0/0 vers le pare-feu 10.0.0.4 dans la table RT5, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><code>--next-hop-type VirtualAppliance --next-hop-ip-address 10.0.0.4</code>. L'adresse IP n'est utilisée qu'avec le type VirtualAppliance. On associe ensuite la table au sous-réseau avec <code>az network vnet subnet update --route-table RT5</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*--next-hop-type",
    "VirtualAppliance"
   ],
   [
    "--next-hop-ip-address",
    "10.0.0.4"
   ]
  ]
 },
 "keep": "Route vers une NVA = VirtualAppliance + --next-hop-ip-address.",
 "tpl": "az network route-table route create --resource-group RG1 --route-table-name RT5 --name Vers-FW --address-prefix 0.0.0.0/0 --next-hop-type {0} {1} 10.0.0.4"
},
{
 "id": "D4-106",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous créez une règle de sécurité de trafic entrant dans NSG6. Seuls les serveurs du groupe de sécurité d'application ASG-Admin doivent pouvoir joindre les VM de ASG-Web en SSH. La règle doit passer avant une règle de refus de priorité 500.</p><p>Comment devez-vous configurer la règle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li>Source et destination : <b>groupes de sécurité d'application</b> ASG-Admin vers ASG-Web.</li><li>Service <b>SSH</b> (TCP 22), action <b>Autoriser</b>.</li><li>Priorité <b>100</b> : un numéro plus petit que 500 passe avant la règle de refus. 600 et 4096 seraient évalués après le refus.</li></ul>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG6"
  ],
  "title": "Règles de trafic entrant",
  "rows": [
   [
    "*100 · SSH",
    "ASG-Admin → ASG-Web · Autoriser"
   ],
   [
    "500",
    "Refuser"
   ]
  ]
 },
 "keep": "Exception par rôle = ASG source/destination + numéro plus petit.",
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
 }
},
{
 "id": "D4-107",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous configurez l'appairage du spoke VNet-S3 vers le hub VNet-Hub, qui possède une passerelle VPN vers le site local. VNet-S3 doit joindre le site local par cette passerelle et recevoir le trafic transféré par le pare-feu du hub.</p><p>Comment devez-vous configurer les options du lien de VNet-S3 vers VNet-Hub ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Accès</b> : nécessaire pour communiquer.</li><li><b>Recevoir le trafic transféré</b> : accepte le trafic qui transite par le pare-feu du hub.</li><li><b>Transit de la passerelle de VNet-S3 : non</b>, VNet-S3 n'a pas de passerelle.</li><li><b>Utiliser la passerelle distante : oui</b>, pour joindre le site local par la passerelle du hub (qui doit, de son côté, autoriser le transit).</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-S3"
  ],
  "title": "VNet-S3 | Peerings",
  "rows": [
   [
    "Accès",
    "Oui"
   ],
   [
    "Trafic transféré",
    "Oui"
   ],
   [
    "*Utiliser la passerelle distante",
    "Oui"
   ],
   [
    "Transit de passerelle",
    "Non"
   ]
  ]
 },
 "keep": "Spoke : accès + trafic transféré + passerelle distante.",
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
 }
},
{
 "id": "D4-108",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>Vous devez associer la table de routage RT6 au sous-réseau Subnet-App.</p><p>Dans RT6, quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Sous-réseaux",
 "expl": "<p><b>Sous-réseaux</b> permet d'associer ou de dissocier la table à des sous-réseaux. <b>Itinéraires</b> sert à ajouter les itinéraires. <b>Configuration</b> contient l'option de propagation des itinéraires de passerelle.</p>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT6"
  ],
  "title": "RT6 | Sous-réseaux",
  "menu": [
   "Itinéraires",
   "*Sous-réseaux"
  ],
  "rows": [
   [
    "*Subnet-App",
    "+ Associer"
   ]
  ]
 },
 "keep": "Associer une table = blade Sous-réseaux.",
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
 }
},
{
 "id": "D4-109",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>Vous devez vérifier si le trafic de VM12 vers 8.8.8.8 passe par le Pare-feu Azure ou sort directement.</p><p>Dans Network Watcher, quel outil devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Tronçon suivant",
 "expl": "<p><b>Tronçon suivant</b> indique, pour une VM et une destination, le type de saut suivant (Internet, Appliance virtuelle, Passerelle…), son adresse et la table de routage utilisée. Si le saut suivant est l'adresse du pare-feu, le trafic passe par lui.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Tronçon suivant",
  "menu": [
   "*Tronçon suivant"
  ],
  "rows": [
   [
    "VM12 → 8.8.8.8",
    "*Appliance virtuelle · 10.0.0.4"
   ]
  ],
  "btn": "Tronçon suivant"
 },
 "keep": "Par où passe le trafic = Tronçon suivant.",
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
 }
}
);
