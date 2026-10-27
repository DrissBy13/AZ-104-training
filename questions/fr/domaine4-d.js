/* Domaine 4 : réseau virtuel (lot D : D4-120 à D4-200) */
AZ.questions.push(
{
 "id": "D4-120",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez des réseaux virtuels présentés dans le document Réseaux (cliquez sur l'onglet Réseaux).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "docs": [
  {
   "t": "Réseaux",
   "h": "<p><b>Réseaux virtuels</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Région</th><th>Espace d'adressage</th><th>Appairé avec</th></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>VNet-B</td></tr><tr><td>VNet-B</td><td>France Central</td><td>10.2.0.0/16</td><td>VNet-A, VNet-C</td></tr><tr><td>VNet-C</td><td>West Europe</td><td>10.3.0.0/16</td><td>VNet-B</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.0.0/16</td><td>—</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Une VM de VNet-A peut communiquer avec une VM de VNet-C.",
   "a": 1
  },
  {
   "l": "Une VM de VNet-B peut communiquer avec une VM de VNet-C.",
   "a": 0
  },
  {
   "l": "Vous pouvez appairer VNet-D avec VNet-B.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>A ↔ C : Non.</b> A et C ne sont appairés qu'avec B ; l'appairage n'est pas transitif.</li><li><b>B ↔ C : Oui.</b> Appairage mondial (deux régions), qui fonctionne comme un appairage local.</li><li><b>D avec B : Non.</b> Les espaces de D et B ne se chevauchent pas, mais B est déjà appairé à VNet-A, qui a <b>le même espace</b> que D (10.1.0.0/16). Azure refuse qu'un réseau soit appairé à deux réseaux dont les espaces se chevauchent : B ne saurait pas vers lequel envoyer 10.1.x.x.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-B"
  ],
  "title": "VNet-B | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "VNet-A (10.1.0.0/16)",
    "Connecté"
   ],
   [
    "VNet-C (10.3.0.0/16)",
    "Connecté · mondial"
   ],
   [
    "*VNet-D (10.1.0.0/16)",
    "Refusé : chevauche VNet-A"
   ]
  ]
 },
 "keep": "Pas de transitivité ; un VNet ne peut pas être appairé à deux réseaux qui se chevauchent."
},
{
 "id": "D4-121",
 "dom": 4,
 "type": "hot",
 "stem": "<p>NSG7 est associé à Subnet1. Il contient les règles de trafic entrant présentées dans le document Règles (cliquez sur l'onglet Règles). VM13 (10.0.1.10) est dans Subnet1.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "docs": [
  {
   "t": "Règles",
   "h": "<p><b>NSG7, règles de trafic entrant</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Priorité</th><th>Nom</th><th>Port</th><th>Protocole</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>100</td><td>R1</td><td>80</td><td>TCP</td><td>Internet</td><td>Any</td><td>Autoriser</td></tr><tr><td>150</td><td>R2</td><td>Any</td><td>Any</td><td>203.0.113.0/24</td><td>Any</td><td>Refuser</td></tr><tr><td>200</td><td>R3</td><td>443</td><td>TCP</td><td>Any</td><td>Any</td><td>Autoriser</td></tr><tr><td>65000</td><td>AllowVnetInBound</td><td>Any</td><td>Any</td><td>VirtualNetwork</td><td>VirtualNetwork</td><td>Autoriser</td></tr><tr><td>65500</td><td>DenyAllInBound</td><td>Any</td><td>Any</td><td>Any</td><td>Any</td><td>Refuser</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Un client en 203.0.113.5 joint VM13 sur le port 80 :",
   "o": [
    "Refusé",
    "Autorisé"
   ],
   "a": 1
  },
  {
   "l": "Un client en 203.0.113.5 joint VM13 sur le port 443 :",
   "o": [
    "Refusé",
    "Autorisé"
   ],
   "a": 0
  },
  {
   "l": "Un client en 198.51.100.7 joint VM13 sur le port 3389 :",
   "o": [
    "Autorisé",
    "Refusé"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Port 80 depuis 203.0.113.5 : autorisé.</b> 203.0.113.5 est une adresse Internet : R1 (priorité 100) correspond en premier.</li><li><b>Port 443 : refusé.</b> R1 ne concerne que le port 80 ; R2 (150) refuse tout depuis 203.0.113.0/24 avant R3 (200).</li><li><b>Port 3389 depuis 198.51.100.7 : refusé.</b> Aucune règle personnalisée ne l'autorise ; DenyAllInBound s'applique.</li></ul>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Vérification du flux IP",
  "rows": [
   [
    "203.0.113.5 → 80",
    "Autorisé · R1"
   ],
   [
    "*203.0.113.5 → 443",
    "Refusé · R2"
   ],
   [
    "198.51.100.7 → 3389",
    "Refusé · DenyAllInBound"
   ]
  ]
 },
 "keep": "Première règle qui correspond (plus petit numéro) = décision."
},
{
 "id": "D4-122",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous disposez de la table de routage présentée dans le document RT7 (cliquez sur l'onglet RT7), associée à Subnet-App. VM14 de Subnet-App envoie un paquet vers 10.20.3.5.</p><p>Quel est le saut suivant ?</p>",
 "docs": [
  {
   "t": "RT7",
   "h": "<p><b>Itinéraires de RT7</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Préfixe</th><th>Type de saut suivant</th><th>Adresse du saut suivant</th></tr><tr><td>Defaut</td><td>0.0.0.0/0</td><td>Appliance virtuelle</td><td>10.0.0.4</td></tr><tr><td>Site-Local</td><td>10.20.0.0/16</td><td>Passerelle de réseau virtuel</td><td>—</td></tr><tr><td>Bloque-Lab</td><td>10.20.3.0/24</td><td>Aucun</td><td>—</td></tr></table></div>"
  }
 ],
 "opts": [
  "Aucun : le paquet est abandonné",
  "L'appliance 10.0.0.4",
  "La passerelle de réseau virtuel",
  "Internet"
 ],
 "ans": 0,
 "expl": "<p>10.20.3.5 correspond aux trois itinéraires, mais le plus précis (préfixe le plus long) est <b>10.20.3.0/24</b>, dont le saut suivant est <b>Aucun</b> : le paquet est <b>abandonné</b>.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Tronçon suivant",
  "rows": [
   [
    "*VM14 → 10.20.3.5",
    "Aucun · Bloque-Lab (10.20.3.0/24)"
   ]
  ]
 },
 "keep": "Préfixe le plus long ; saut « Aucun » = abandon."
},
{
 "id": "D4-123",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous gérez la passerelle VPN de VNet1, de type basé sur les routes, avec BGP désactivé. Vous voulez que les nouveaux réseaux ajoutés au site local et dans Azure soient appris automatiquement de part et d'autre.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Ajouter une table de routage avec chaque réseau à la main",
  "Activer BGP sur la passerelle et la connexion, avec un numéro ASN pour chaque côté",
  "Passer la passerelle en mode basé sur les stratégies",
  "Créer un appairage"
 ],
 "ans": 1,
 "expl": "<p><b>BGP</b> échange dynamiquement les itinéraires entre la passerelle Azure et le périphérique local. Chaque côté a un <b>numéro de système autonome (ASN)</b>, et la passerelle de réseau local indique l'ASN et l'adresse du pair BGP local. Les nouveaux réseaux sont alors annoncés automatiquement.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VNet1-GW"
  ],
  "title": "VNet1-GW | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Configurer BGP",
    "Activé · ASN 65515"
   ],
   [
    "Passerelle locale",
    "ASN + adresse du pair BGP"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Itinéraires appris automatiquement = BGP (ASN des deux côtés)."
},
{
 "id": "D4-124",
 "dom": 4,
 "type": "single",
 "stem": "<p>Un employé quitte l'entreprise. Il utilisait le VPN point à site avec un certificat client. Les autres employés doivent garder leur accès.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Supprimer le certificat racine de la passerelle",
  "Supprimer la passerelle VPN",
  "Ajouter l'empreinte de son certificat client à la liste des certificats révoqués de la passerelle",
  "Changer le pool d'adresses clients"
 ],
 "ans": 2,
 "expl": "<p>La configuration point à site contient une liste de <b>certificats révoqués</b> (par empreinte). Le client concerné ne peut plus se connecter, sans impact sur les autres. Supprimer le certificat racine couperait tous les utilisateurs.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VNet1-GW"
  ],
  "title": "Configuration de point à site",
  "rows": [
   [
    "Certificats racines",
    "Conservés"
   ],
   [
    "*Certificats révoqués",
    "+ empreinte du client"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Couper un seul client P2S = certificat révoqué."
},
{
 "id": "D4-125",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous avez modifié la configuration point à site de la passerelle VPN (nouveau certificat racine et type de tunnel). Les utilisateurs n'arrivent plus à se connecter.</p><p>Que doivent-ils faire ?</p>",
 "opts": [
  "Changer leur mot de passe Microsoft Entra",
  "Redémarrer leur ordinateur uniquement",
  "Rien : la configuration est poussée automatiquement",
  "Télécharger et réinstaller le nouveau paquet de configuration du client VPN"
 ],
 "ans": 3,
 "expl": "<p>Après une modification de la configuration point à site (type de tunnel, certificat, adresses, itinéraires), il faut <b>régénérer et réinstaller le paquet de configuration du client VPN</b> sur chaque poste.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VNet1-GW"
  ],
  "title": "Configuration de point à site",
  "rows": [
   [
    "*Télécharger le client VPN",
    "Nouveau paquet"
   ]
  ],
  "btn": "Télécharger le client VPN"
 },
 "keep": "Config P2S modifiée = réinstaller le paquet client."
},
{
 "id": "D4-126",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vos agences de Paris et de New York sont chacune reliées à Azure par leur propre circuit ExpressRoute. Elles doivent communiquer entre elles par le réseau Microsoft.</p><p>Quelle fonctionnalité devez-vous activer ?</p>",
 "opts": [
  "ExpressRoute Global Reach",
  "Un appairage de réseaux virtuels",
  "ExpressRoute FastPath",
  "Une passerelle NAT"
 ],
 "ans": 0,
 "expl": "<p><b>Global Reach</b> relie deux circuits ExpressRoute pour que les sites locaux communiquent entre eux par le réseau principal de Microsoft.</p><p><b>FastPath</b> envoie le trafic directement vers les VM, en contournant la passerelle ExpressRoute, pour de meilleures performances.</p>",
 "portal": {
  "path": [
   "Circuits ExpressRoute",
   "ER-Paris"
  ],
  "title": "ER-Paris | Configuration Global Reach",
  "menu": [
   "*Global Reach"
  ],
  "rows": [
   [
    "*ER-NewYork",
    "Connecté"
   ]
  ],
  "btn": "Ajouter Global Reach"
 },
 "keep": "Site ↔ site via deux circuits ExpressRoute = Global Reach."
},
{
 "id": "D4-127",
 "dom": 4,
 "type": "single",
 "stem": "<p>Votre circuit ExpressRoute doit permettre d'accéder aux VM de vos réseaux virtuels.</p><p>Quel type d'appairage ExpressRoute devez-vous configurer ?</p>",
 "opts": [
  "L'appairage Microsoft",
  "L'appairage privé (Azure private peering)",
  "L'appairage public Azure",
  "L'appairage de réseaux virtuels"
 ],
 "ans": 1,
 "expl": "<p>L'<b>appairage privé</b> relie le site local aux réseaux virtuels (adresses privées). L'<b>appairage Microsoft</b> donne accès aux services publics de Microsoft (Microsoft 365, adresses publiques des services PaaS). L'appairage public Azure est retiré.</p>",
 "portal": {
  "path": [
   "Circuits ExpressRoute",
   "ER1"
  ],
  "title": "ER1 | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "*Privé Azure",
    "Vers les réseaux virtuels"
   ],
   [
    "Microsoft",
    "Microsoft 365, PaaS publics"
   ]
  ]
 },
 "keep": "VNets = appairage privé ; services Microsoft publics = appairage Microsoft."
},
{
 "id": "D4-128",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM de VNet1 sont reliées au site local par un VPN. Une stratégie de sécurité exige que <b>tout</b> le trafic Internet des VM passe par le pare-feu du site local pour inspection.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Azure Bastion",
  "Une passerelle NAT",
  "Un tunneling forcé : itinéraire 0.0.0.0/0 vers la passerelle de réseau virtuel (ou annonce de la route par défaut en BGP)",
  "Un équilibreur de charge public"
 ],
 "ans": 2,
 "expl": "<p>Le <b>tunneling forcé</b> envoie le trafic Internet vers le site local à travers le VPN : avec une table de routage 0.0.0.0/0 → Passerelle de réseau virtuel (et un site par défaut sur la passerelle), ou en recevant la route par défaut par BGP.</p><p>Une passerelle NAT ferait sortir le trafic directement d'Azure.</p>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT1"
  ],
  "title": "RT1 | Itinéraires",
  "menu": [
   "*Itinéraires"
  ],
  "rows": [
   [
    "*0.0.0.0/0",
    "Passerelle de réseau virtuel"
   ]
  ]
 },
 "keep": "Internet via le site local = tunneling forcé."
},
{
 "id": "D4-129",
 "dom": 4,
 "type": "single",
 "stem": "<p>L'équilibreur de charge LB4 doit répartir le trafic entre des VM de VNet1 en utilisant uniquement leurs adresses IP privées, sans référencer leurs interfaces réseau.</p><p>Quel type de pool principal devez-vous utiliser ?</p>",
 "opts": [
  "Un pool de groupe à haute disponibilité",
  "Un pool de passerelle",
  "Un pool basé sur les interfaces réseau",
  "Un pool principal basé sur les adresses IP"
 ],
 "ans": 3,
 "expl": "<p>Un équilibreur Standard propose un pool principal configuré <b>par interface réseau</b> (par défaut) ou <b>par adresse IP</b> (en indiquant le réseau virtuel et les adresses). Le pool basé sur les adresses IP facilite certains déploiements (conteneurs, ressources préprovisionnées).</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "LB4"
  ],
  "title": "Ajouter un pool principal",
  "rows": [
   [
    "*Configuration du pool",
    "Adresse IP"
   ],
   [
    "Réseau virtuel",
    "VNet1"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Pool par adresses privées = pool basé sur les adresses IP."
},
{
 "id": "D4-130",
 "dom": 4,
 "type": "single",
 "stem": "<p>Le WAF de l'Application Gateway AG3 vient d'être activé. Vous voulez d'abord observer les requêtes qui seraient bloquées, sans rien bloquer, pour ajuster les règles.</p><p>Quel mode devez-vous choisir ?</p>",
 "opts": [
  "Détection",
  "Audit de stratégie",
  "Prévention",
  "Désactivé"
 ],
 "ans": 0,
 "expl": "<p>En mode <b>Détection</b>, le WAF journalise les menaces détectées sans les bloquer. Après ajustement (exclusions, règles personnalisées), on passe en mode <b>Prévention</b> pour bloquer.</p>",
 "portal": {
  "path": [
   "Stratégies WAF",
   "WAF-AG3"
  ],
  "title": "WAF-AG3 | Vue d'ensemble",
  "rows": [
   [
    "*Mode de stratégie",
    "Détection"
   ]
  ],
  "btn": "Basculer en mode prévention"
 },
 "keep": "Observer sans bloquer = Détection ; bloquer = Prévention."
},
{
 "id": "D4-131",
 "dom": 4,
 "type": "single",
 "stem": "<p>Application Gateway v2 doit ajouter ou retirer des instances automatiquement selon le trafic, entre 2 et 10 instances.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une règle sortante",
  "La mise à l'échelle automatique avec un nombre minimal de 2 et maximal de 10",
  "Un groupe de machines virtuelles identiques",
  "Une sonde d'intégrité"
 ],
 "ans": 1,
 "expl": "<p>Le SKU <b>v2</b> d'Application Gateway prend en charge la <b>mise à l'échelle automatique</b> intégrée, avec des bornes minimale et maximale d'instances. Le SKU v1 ne permettait qu'un nombre fixe d'instances.</p>",
 "portal": {
  "path": [
   "Passerelles d'application",
   "AG1"
  ],
  "title": "AG1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Mise à l'échelle automatique",
    "Oui · min 2 · max 10"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "AppGW v2 = mise à l'échelle automatique (min/max)."
},
{
 "id": "D4-132",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous changez le point de terminaison prioritaire d'un profil Traffic Manager. Certains utilisateurs continuent d'être envoyés vers l'ancien point de terminaison pendant quelques minutes.</p><p>Pourquoi ?</p>",
 "opts": [
  "Traffic Manager met 24 heures à se mettre à jour",
  "Traffic Manager garde les sessions TCP ouvertes",
  "Les réponses DNS sont mises en cache par les clients et les résolveurs pendant la durée de vie (TTL)",
  "Les clients utilisent un tunnel VPN"
 ],
 "ans": 2,
 "expl": "<p>Traffic Manager fonctionne par <b>DNS</b> : il renvoie le nom du point de terminaison choisi, et cette réponse reste en cache le temps du <b>TTL</b> du profil (60 secondes par défaut, réglable). Les connexions ne passent jamais par Traffic Manager.</p>",
 "portal": {
  "path": [
   "Profils Traffic Manager",
   "TM1"
  ],
  "title": "TM1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Durée de vie DNS (TTL)",
    "60 s"
   ]
  ]
 },
 "keep": "Traffic Manager = DNS ; changement visible après le TTL."
},
{
 "id": "D4-133",
 "dom": 4,
 "type": "single",
 "stem": "<p>Un profil Traffic Manager doit inclure un site hébergé chez un autre fournisseur cloud, en plus de vos applications web Azure.</p><p>Quel type de point de terminaison devez-vous ajouter ?</p>",
 "opts": [
  "Point de terminaison imbriqué",
  "Point de terminaison privé",
  "Point de terminaison Azure",
  "Point de terminaison externe"
 ],
 "ans": 3,
 "expl": "<p>Traffic Manager accepte des points de terminaison <b>Azure</b> (ressources Azure), <b>externes</b> (FQDN ou adresse IP hors Azure) et <b>imbriqués</b> (un autre profil Traffic Manager, pour combiner des méthodes de routage).</p>",
 "portal": {
  "path": [
   "Profils Traffic Manager",
   "TM1"
  ],
  "title": "Ajouter un point de terminaison",
  "rows": [
   [
    "*Type",
    "Point de terminaison externe"
   ],
   [
    "FQDN",
    "app.autrecloud.com"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "Hors Azure = point de terminaison externe."
},
{
 "id": "D4-134",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une application doit utiliser la méthode Performances pour choisir la région, puis la méthode Pondérée entre deux versions dans chaque région.</p><p>Comment devez-vous configurer Traffic Manager ?</p>",
 "opts": [
  "Avec des profils imbriqués : un profil parent Performances dont les points de terminaison sont des profils enfants Pondérée",
  "Avec deux zones DNS publiques",
  "Avec Application Gateway",
  "Avec un seul profil utilisant deux méthodes"
 ],
 "ans": 0,
 "expl": "<p>Un profil n'a qu'une méthode de routage. Les <b>profils imbriqués</b> permettent de combiner des méthodes : le profil parent (Performances) envoie vers des points de terminaison imbriqués, qui sont des profils enfants (Pondérée).</p>",
 "portal": {
  "path": [
   "Profils Traffic Manager",
   "TM-Parent"
  ],
  "title": "TM-Parent | Points de terminaison",
  "rows": [
   [
    "Méthode",
    "Performances"
   ],
   [
    "*TM-Europe",
    "Imbriqué · Pondérée"
   ],
   [
    "*TM-USA",
    "Imbriqué · Pondérée"
   ]
  ]
 },
 "keep": "Combiner des méthodes = profils imbriqués."
},
{
 "id": "D4-135",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez protéger les adresses IP publiques de VNet1 contre les attaques par déni de service distribué, avec des rapports, des alertes et l'aide d'une équipe de réponse rapide.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "Un NSG sur chaque sous-réseau",
  "Azure DDoS Network Protection (plan de protection DDoS associé au réseau virtuel)",
  "Azure Bastion",
  "Une passerelle NAT"
 ],
 "ans": 1,
 "expl": "<p>Une protection DDoS de base (infrastructure) existe pour tous. <b>DDoS Network Protection</b>, via un <b>plan de protection DDoS</b> associé aux réseaux virtuels, ajoute un réglage adaptatif, la télémétrie, les alertes, la protection des coûts et l'accès à l'équipe DDoS Rapid Response. DDoS IP Protection protège des adresses IP précises.</p>",
 "portal": {
  "path": [
   "Plans de protection DDoS",
   "Créer"
  ],
  "title": "Créer un plan de protection DDoS",
  "rows": [
   [
    "*Réseaux virtuels",
    "VNet1"
   ],
   [
    "Inclus",
    "Télémétrie, alertes, Rapid Response"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "DDoS avec alertes + équipe de réponse = DDoS Network Protection."
},
{
 "id": "D4-136",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vos VM utilisent un serveur DNS personnalisé (10.0.0.4) dans VNet1. Elles doivent aussi résoudre les noms d'une zone DNS privée Azure liée à VNet1.</p><p>Comment devez-vous configurer le serveur DNS 10.0.0.4 ?</p>",
 "opts": [
  "Avec un redirecteur vers 8.8.8.8",
  "Aucune configuration : la zone privée est interrogée directement par les VM",
  "Avec un redirecteur vers 168.63.129.16 (DNS fourni par Azure)",
  "Avec un enregistrement NS vers la zone privée"
 ],
 "ans": 2,
 "expl": "<p>Les zones DNS privées sont résolues par le <b>DNS fourni par Azure</b>. Si les VM utilisent un serveur DNS personnalisé, celui-ci doit <b>transférer</b> les requêtes (au moins pour ces zones) vers <b>168.63.129.16</b>. Le serveur doit lui-même être dans un réseau virtuel lié à la zone.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "DNS1"
  ],
  "title": "Gestionnaire DNS › Redirecteurs",
  "rows": [
   [
    "*Redirecteur",
    "168.63.129.16"
   ]
  ]
 },
 "keep": "DNS personnalisé + zone privée = redirecteur vers 168.63.129.16."
},
{
 "id": "D4-137",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous modifiez l'enregistrement A www.contoso.com dans Azure DNS (TTL de 3 600 secondes). Certains utilisateurs voient l'ancienne adresse pendant près d'une heure.</p><p>Que pouvez-vous faire pour les prochains changements ?</p>",
 "opts": [
  "Ajouter un enregistrement NS",
  "Utiliser un enregistrement MX",
  "Supprimer la zone et la recréer",
  "Réduire le TTL du jeu d'enregistrements avant le changement (par exemple à 300 secondes)"
 ],
 "ans": 3,
 "expl": "<p>Le <b>TTL</b> indique combien de temps les résolveurs peuvent garder la réponse en cache. Le réduire quelques heures avant un changement prévu permet une propagation plus rapide. On peut ensuite le remonter.</p>",
 "portal": {
  "path": [
   "Zones DNS",
   "contoso.com"
  ],
  "title": "Modifier le jeu d'enregistrements www",
  "rows": [
   [
    "*TTL",
    "300 secondes"
   ],
   [
    "IP",
    "Nouvelle adresse"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Propagation rapide = baisser le TTL avant le changement."
},
{
 "id": "D4-138",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez empêcher qu'un administrateur supprime par erreur la zone DNS publique contoso.com et ses enregistrements critiques.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un verrou de ressource Suppression impossible sur la zone (ou sur les jeux d'enregistrements)",
  "Un TTL plus long",
  "Une zone DNS privée",
  "Un enregistrement SOA"
 ],
 "ans": 0,
 "expl": "<p>Les <b>verrous</b> protègent les zones DNS et même des jeux d'enregistrements précis contre la suppression. C'est une bonne pratique pour les zones de production, car une suppression de zone peut rendre tous les services injoignables.</p>",
 "portal": {
  "path": [
   "Zones DNS",
   "contoso.com"
  ],
  "title": "contoso.com | Verrous",
  "menu": [
   "*Verrous"
  ],
  "rows": [
   [
    "*no-delete",
    "Suppression impossible"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Protéger une zone DNS = verrou Suppression impossible."
},
{
 "id": "D4-139",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez déléguer le sous-domaine paris.contoso.com à une autre zone Azure DNS, gérée par l'équipe de Paris. La zone contoso.com est aussi dans Azure DNS.</p><p>Que devez-vous créer dans la zone contoso.com ?</p>",
 "opts": [
  "Un lien de réseau virtuel",
  "Un jeu d'enregistrements NS « paris » avec les serveurs de noms de la zone paris.contoso.com",
  "Un enregistrement CNAME paris",
  "Un enregistrement MX paris"
 ],
 "ans": 1,
 "expl": "<p>Pour déléguer un sous-domaine, on crée la zone enfant (paris.contoso.com), puis, dans la zone parente, un jeu d'enregistrements <b>NS</b> nommé <b>paris</b> qui contient les serveurs de noms de la zone enfant.</p>",
 "portal": {
  "path": [
   "Zones DNS",
   "contoso.com"
  ],
  "title": "Ajouter un jeu d'enregistrements",
  "rows": [
   [
    "Nom",
    "paris"
   ],
   [
    "*Type",
    "NS"
   ],
   [
    "Valeur",
    "ns1-07.azure-dns.com …"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Déléguer un sous-domaine = NS dans la zone parente."
},
{
 "id": "D4-140",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous gérez Azure DNS.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Azure DNS permet d'acheter et d'enregistrer un nom de domaine.",
   "a": 1
  },
  {
   "l": "Une zone DNS privée peut être liée à des réseaux virtuels de régions différentes.",
   "a": 0
  },
  {
   "l": "Un même nom de zone privée (corp.local) peut exister dans deux groupes de ressources différents.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Achat de domaine : Non.</b> Azure DNS héberge des zones ; l'achat se fait chez un registraire (ou via App Service Domains, un autre service).</li><li><b>Régions différentes : Oui.</b> Les zones privées sont des ressources mondiales, liables à des réseaux de n'importe quelle région.</li><li><b>Même nom : Oui</b>, dans des groupes de ressources différents (mais un réseau virtuel ne peut pas être lié à deux zones privées du même nom).</li></ul>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "corp.local"
  ],
  "title": "corp.local | Vue d'ensemble",
  "rows": [
   [
    "*Emplacement",
    "Global"
   ],
   [
    "Liens",
    "VNets de toutes régions"
   ]
  ]
 },
 "keep": "Azure DNS n'achète pas de domaines ; zones privées mondiales."
},
{
 "id": "D4-141",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous déployez le Pare-feu Azure avec le tunneling forcé vers le site local, comme l'exige la sécurité.</p><p>Quelle configuration supplémentaire le pare-feu exige-t-il ?</p>",
 "opts": [
  "Un GatewaySubnet supplémentaire",
  "Un équilibreur interne devant le pare-feu",
  "Un sous-réseau AzureFirewallManagementSubnet avec sa propre adresse IP publique (mode de gestion)",
  "Une passerelle NAT sur AzureFirewallSubnet"
 ],
 "ans": 2,
 "expl": "<p>Avec le tunneling forcé, le trafic de gestion du pare-feu doit rester séparé : on active la <b>carte réseau de gestion</b>, qui utilise le sous-réseau <b>AzureFirewallManagementSubnet</b> (/26) et une adresse IP publique dédiée, avec une sortie Internet directe.</p>",
 "portal": {
  "path": [
   "Pare-feu",
   "FW1"
  ],
  "title": "Créer un pare-feu",
  "rows": [
   [
    "*Carte réseau de gestion",
    "Activée"
   ],
   [
    "Sous-réseau",
    "AzureFirewallManagementSubnet /26"
   ],
   [
    "IP publique de gestion",
    "fw-mgmt-pip"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Pare-feu + tunneling forcé = AzureFirewallManagementSubnet."
},
{
 "id": "D4-142",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les règles d'application FQDN du Pare-feu Azure doivent aussi filtrer correctement les règles de réseau basées sur des FQDN. Les VM doivent utiliser le pare-feu pour la résolution DNS.</p><p>Quelle fonctionnalité du pare-feu devez-vous activer ?</p>",
 "opts": [
  "Une étiquette FQDN",
  "Le mode DNAT",
  "L'inspection TLS",
  "Le proxy DNS, puis configurer l'adresse privée du pare-feu comme serveur DNS des réseaux virtuels"
 ],
 "ans": 3,
 "expl": "<p>Les FQDN dans les <b>règles de réseau</b> exigent que le pare-feu et les clients résolvent les noms de la même façon. Avec le <b>proxy DNS</b>, le pare-feu reçoit les requêtes DNS des VM (son adresse privée est configurée comme serveur DNS) et les transmet au DNS configuré.</p>",
 "portal": {
  "path": [
   "Stratégies de pare-feu",
   "FWP1"
  ],
  "title": "FWP1 | DNS",
  "menu": [
   "*DNS"
  ],
  "rows": [
   [
    "*Proxy DNS",
    "Activé"
   ],
   [
    "VNets",
    "DNS = 10.0.0.4 (pare-feu)"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "FQDN dans les règles de réseau = proxy DNS."
},
{
 "id": "D4-143",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez inspecter le contenu du trafic HTTPS sortant (déchiffrement TLS), détecter les intrusions (IDPS) et filtrer par URL complète.</p><p>Quel SKU du Pare-feu Azure devez-vous choisir ?</p>",
 "opts": [
  "Premium",
  "Standard",
  "Aucun : ce n'est pas possible",
  "De base"
 ],
 "ans": 0,
 "expl": "<p>Le SKU <b>Premium</b> ajoute l'<b>inspection TLS</b>, l'<b>IDPS</b> (détection et prévention des intrusions par signatures), le <b>filtrage d'URL</b> complet et les catégories web. Standard filtre par FQDN et utilise le renseignement sur les menaces. De base vise les petites entreprises.</p>",
 "portal": {
  "path": [
   "Pare-feu",
   "Créer"
  ],
  "title": "Créer un pare-feu",
  "rows": [
   [
    "*Niveau",
    "Premium"
   ],
   [
    "Fonctions",
    "Inspection TLS, IDPS, filtrage d'URL"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "TLS + IDPS + URL = Pare-feu Premium."
},
{
 "id": "D4-144",
 "dom": 4,
 "type": "single",
 "stem": "<p>Plusieurs pare-feu Azure, dans différentes régions et abonnements, doivent partager les mêmes règles de base, avec des règles locales en plus.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Une copie manuelle des règles dans chaque pare-feu",
  "Des stratégies de pare-feu hiérarchiques (une stratégie parente héritée par des stratégies enfants), gérées avec Azure Firewall Manager",
  "Azure Policy uniquement",
  "Des NSG"
 ],
 "ans": 1,
 "expl": "<p>Une <b>stratégie de pare-feu</b> (Firewall Policy) peut hériter d'une <b>stratégie parente</b> : les règles de base sont définies une fois, et chaque stratégie enfant ajoute ses règles. <b>Azure Firewall Manager</b> centralise la gestion.</p>",
 "portal": {
  "path": [
   "Firewall Manager",
   "Stratégies"
  ],
  "title": "Créer une stratégie de pare-feu",
  "rows": [
   [
    "*Stratégie parente",
    "FWP-Base"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Règles communes + locales = stratégie parente / enfants."
},
{
 "id": "D4-145",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une VM a besoin d'une adresse IPv6 publique en plus de son adresse IPv4.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une passerelle VPN IPv6",
  "Une zone DNS privée",
  "Un réseau virtuel et un sous-réseau double pile (espace IPv4 et IPv6), et une configuration IP IPv6 sur l'interface réseau",
  "Un second réseau virtuel uniquement IPv6"
 ],
 "ans": 2,
 "expl": "<p>Azure prend en charge le <b>double pile</b> : on ajoute un espace d'adressage IPv6 (par exemple /48) au réseau virtuel, un préfixe /64 au sous-réseau, puis une configuration IP IPv6 (avec une adresse publique IPv6 Standard si besoin) sur l'interface réseau.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | Espace d'adressage",
  "menu": [
   "*Espace d'adressage"
  ],
  "rows": [
   [
    "IPv4",
    "10.0.0.0/16"
   ],
   [
    "*IPv6",
    "ace:cab:deca::/48"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "IPv6 = VNet + sous-réseau double pile + config IP IPv6."
},
{
 "id": "D4-146",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'outil de Network Watcher adapté à chaque question.</p><p>Pour répondre, faites glisser l'outil approprié vers chaque question. Chaque outil peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Outils",
 "srcs": [
  "Vérification du flux IP",
  "Tronçon suivant",
  "Résolution des problèmes de connexion",
  "Capture de paquets",
  "Résolution des problèmes de VPN"
 ],
 "tgtHead": [
  "Question",
  "Outil"
 ],
 "tgts": [
  {
   "l": "Quelle règle de NSG bloque le port 1433 vers VM15 ?",
   "a": 0
  },
  {
   "l": "Le trafic de VM15 vers 0.0.0.0/0 part-il vers le pare-feu ?",
   "a": 1
  },
  {
   "l": "Pourquoi le tunnel IPsec vers Lyon ne s'établit-il pas ?",
   "a": 4
  },
  {
   "l": "Quel est le contenu exact des paquets échangés ?",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Vérification du flux IP</b> : autorisé ou refusé, et par quelle règle.</li><li><b>Tronçon suivant</b> : routage.</li><li><b>Résolution des problèmes de VPN</b> : diagnostic de passerelle et de connexion.</li><li><b>Capture de paquets</b> : contenu du trafic.</li></ul><p>La résolution des problèmes de connexion teste une connexion de bout en bout.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Outils de diagnostic réseau",
  "rows": [
   [
    "*Vérification du flux IP",
    "Quelle règle NSG"
   ],
   [
    "Tronçon suivant",
    "Routage"
   ],
   [
    "Résolution VPN",
    "Tunnel"
   ],
   [
    "Capture de paquets",
    "Contenu"
   ]
  ]
 },
 "keep": "Règle = flux IP ; route = tronçon suivant ; tunnel = VPN ; contenu = capture."
},
{
 "id": "D4-147",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la solution de connectivité adaptée à chaque situation.</p><p>Pour répondre, faites glisser la solution appropriée vers chaque situation. Chaque solution peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Solutions",
 "srcs": [
  "Appairage de réseaux virtuels",
  "VPN site à site",
  "VPN point à site",
  "ExpressRoute"
 ],
 "tgtHead": [
  "Situation",
  "Solution"
 ],
 "tgts": [
  {
   "l": "Relier deux réseaux virtuels Azure avec la plus faible latence",
   "a": 0
  },
  {
   "l": "Relier une petite agence par Internet avec un routeur compatible IPsec",
   "a": 1
  },
  {
   "l": "Un consultant se connecte depuis son portable à l'hôtel",
   "a": 2
  },
  {
   "l": "Un centre de données a besoin de 10 Gbit/s privés avec un SLA",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Appairage</b> : réseau principal Microsoft, latence minimale, sans passerelle.</li><li><b>Site à site</b> : tunnel IPsec entre un site et Azure, par Internet.</li><li><b>Point à site</b> : un ordinateur individuel.</li><li><b>ExpressRoute</b> : circuit privé à haut débit avec SLA.</li></ul>",
 "portal": {
  "path": [
   "Mise en réseau"
  ],
  "title": "Connectivité",
  "rows": [
   [
    "*VNet ↔ VNet",
    "Appairage"
   ],
   [
    "Agence",
    "S2S"
   ],
   [
    "Portable",
    "P2S"
   ],
   [
    "10 Gbit/s privé",
    "ExpressRoute"
   ]
  ]
 },
 "keep": "VNet = appairage ; site = S2S ; PC = P2S ; privé + SLA = ExpressRoute."
},
{
 "id": "D4-148",
 "dom": 4,
 "type": "order",
 "stem": "<p>Vous devez permettre aux VM de VNet-Spoke1 et VNet-Spoke2 de communiquer en passant par le Pare-feu Azure de VNet-Hub (10.0.0.4). Les appairages hub-spoke existent déjà.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Créer une table de routage dans chaque spoke avec l'itinéraire vers l'autre spoke, saut suivant Appliance virtuelle 10.0.0.4",
  "Associer chaque table de routage aux sous-réseaux de son spoke",
  "Créer une règle de réseau dans la stratégie du pare-feu qui autorise le trafic entre les deux spokes",
  "Appairer directement Spoke1 et Spoke2",
  "Activer « Utiliser la passerelle distante »"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>On crée les <b>itinéraires</b>, on les <b>associe</b> aux sous-réseaux, puis on <b>autorise</b> le trafic dans le pare-feu, qui refuse tout par défaut. (Les règles du pare-feu peuvent être créées avant ou après les itinéraires ; le trafic ne passera qu'une fois les trois éléments en place.)</p><p>Un appairage direct contournerait le pare-feu. « Utiliser la passerelle distante » concerne une passerelle VPN.</p>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT-Spoke1"
  ],
  "title": "RT-Spoke1 | Itinéraires",
  "menu": [
   "*Itinéraires",
   "Sous-réseaux"
  ],
  "rows": [
   [
    "*Vers Spoke2",
    "Appliance virtuelle · 10.0.0.4"
   ]
  ]
 },
 "keep": "Itinéraires → association → règle du pare-feu."
},
{
 "id": "D4-149",
 "dom": 4,
 "type": "order",
 "stem": "<p>Vous devez rendre la zone DNS publique fabrikam.com, hébergée chez un ancien fournisseur, gérée par Azure DNS, sans interruption.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Créer la zone fabrikam.com dans Azure DNS",
  "Recréer (ou importer) tous les enregistrements existants dans la zone Azure",
  "Remplacer les serveurs de noms chez le registraire par les serveurs NS d'Azure",
  "Lier la zone à un réseau virtuel",
  "Activer l'inscription automatique"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>On crée la <b>zone</b>, on y <b>copie les enregistrements</b> (Azure CLI permet d'importer un fichier de zone), puis seulement on <b>change la délégation</b> chez le registraire. Si on délègue avant d'avoir les enregistrements, les noms deviennent introuvables.</p><p>Liens de réseau virtuel et inscription automatique concernent les zones privées.</p>",
 "portal": {
  "path": [
   "Zones DNS",
   "fabrikam.com"
  ],
  "title": "fabrikam.com | Jeux d'enregistrements",
  "rows": [
   [
    "*Enregistrements",
    "Importés"
   ],
   [
    "Étape suivante",
    "Changer les NS chez le registraire"
   ]
  ]
 },
 "keep": "Zone → enregistrements → délégation (jamais l'inverse)."
},
{
 "id": "D4-150",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Des VM de Subnet-DB doivent accéder à un compte de stockage sans que le trafic passe par Internet, et vous voulez empêcher l'accès à tout autre compte de stockage depuis ce sous-réseau.</p><p>Quelles <b>deux</b> solutions répondent au besoin ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Une règle NSG qui autorise l'étiquette Storage",
  "Un point de terminaison privé pour le compte, et des règles NSG sortantes qui n'autorisent que son adresse privée (en refusant l'étiquette Storage)",
  "Une passerelle NAT",
  "Un point de terminaison de service Microsoft.Storage avec une stratégie de point de terminaison de service listant le compte autorisé"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>Point de terminaison de service + stratégie : oui.</b> La stratégie limite les comptes joignables par le point de terminaison de service.</li><li><b>Point de terminaison privé + NSG : oui.</b> Le trafic reste privé, et le NSG bloque les autres comptes.</li><li><b>Passerelle NAT : non</b>, elle sort par Internet.</li><li><b>Étiquette Storage : non</b>, elle autorise tous les comptes de stockage.</li></ul>",
 "portal": {
  "path": [
   "Stratégies de point de terminaison de service",
   "SEP1"
  ],
  "title": "SEP1 | Définitions de stratégie",
  "rows": [
   [
    "*Service",
    "Microsoft.Storage"
   ],
   [
    "Ressources",
    "stdb01 uniquement"
   ]
  ]
 },
 "keep": "Limiter à un compte : stratégie de point de terminaison de service, ou point privé + NSG."
},
{
 "id": "D4-151",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous publiez une application web sur Internet derrière Application Gateway v2 avec WAF. Les VM web ne doivent recevoir du trafic que de la passerelle.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Retirer les adresses IP publiques des VM web",
  "Placer les VM dans le sous-réseau de l'Application Gateway",
  "Créer un NSG sur le sous-réseau des VM qui n'autorise en entrée que le sous-réseau de l'Application Gateway sur les ports web",
  "Activer une passerelle NAT sur le sous-réseau de l'Application Gateway"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<ul><li><b>Pas d'adresse publique : oui</b>, les VM ne sont plus joignables directement depuis Internet.</li><li><b>NSG limité au sous-réseau de la passerelle : oui.</b></li><li>Les VM ne doivent <b>pas</b> être dans le sous-réseau dédié de la passerelle. Une passerelle NAT n'est pas prise en charge sur le sous-réseau d'Application Gateway v2.</li></ul>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG-Web"
  ],
  "title": "Règles de trafic entrant",
  "rows": [
   [
    "*100",
    "snet-appgw → 443 · Autoriser"
   ],
   [
    "4000",
    "Any · Refuser"
   ]
  ]
 },
 "keep": "VM derrière AppGW : pas d'IP publique + NSG limité au sous-réseau AppGW."
},
{
 "id": "D4-152",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez autoriser le trafic sortant des VM uniquement vers les plages d'adresses de Microsoft Entra ID, dans un NSG, sans maintenir de liste d'adresses.</p><p>Quelle destination devez-vous utiliser dans la règle ?</p>",
 "opts": [
  "L'étiquette Internet",
  "L'adresse 168.63.129.16",
  "Un groupe de sécurité d'application",
  "L'étiquette de service AzureActiveDirectory"
 ],
 "ans": 3,
 "expl": "<p>L'étiquette de service <b>AzureActiveDirectory</b> représente les plages d'adresses de Microsoft Entra ID, tenues à jour par Microsoft. Les étiquettes de service s'utilisent comme source ou destination des règles NSG, des règles du Pare-feu Azure et même dans les itinéraires définis par l'utilisateur.</p>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG1"
  ],
  "title": "Ajouter une règle de sécurité de trafic sortant",
  "rows": [
   [
    "*Destination",
    "Étiquette de service : AzureActiveDirectory"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "Plages Entra ID = étiquette AzureActiveDirectory."
},
{
 "id": "D4-153",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous créez une table de routage dans l'abonnement Sub1 et voulez l'associer à un sous-réseau d'un réseau virtuel de l'abonnement Sub2, dans la même région.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "C'est impossible : la table de routage et le réseau virtuel doivent être dans le même abonnement et la même région",
  "Il faut un appairage",
  "Il faut une passerelle VPN",
  "L'association fonctionne"
 ],
 "ans": 0,
 "expl": "<p>Une table de routage ne peut être associée qu'aux sous-réseaux de réseaux virtuels du <b>même abonnement</b> et de la <b>même région</b>. Même règle pour les NSG (même région).</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-Sub2",
   "Sous-réseau"
  ],
  "title": "Modifier le sous-réseau",
  "rows": [
   [
    "*Table de routage",
    "Seules les tables de Sub2 / même région"
   ]
  ]
 },
 "keep": "Table de routage = même abonnement et même région que le VNet."
},
{
 "id": "D4-154",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une VM tierce de pare-feu (NVA) est seule dans le hub. Si elle tombe en panne, tout le trafic des spokes est coupé.</p><p>Comment rendre la NVA hautement disponible ?</p>",
 "opts": [
  "Activer le transfert IP sur les spokes",
  "Déployer deux NVA derrière un équilibreur de charge interne Standard avec une règle de ports HA, et pointer les itinéraires vers l'adresse frontale de l'équilibreur",
  "Ajouter une seconde interface réseau à la NVA",
  "Utiliser un équilibreur public De base"
 ],
 "ans": 1,
 "expl": "<p>Le modèle recommandé : deux (ou plus) NVA dans un pool d'un <b>équilibreur interne Standard</b> avec <b>ports HA</b>. Les itinéraires des spokes visent l'<b>adresse frontale</b> de l'équilibreur, qui envoie le trafic vers une NVA saine grâce à la sonde d'intégrité.</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "LB-NVA"
  ],
  "title": "LB-NVA | Règles",
  "rows": [
   [
    "*Ports HA",
    "NVA1, NVA2"
   ],
   [
    "Itinéraires des spokes",
    "→ 10.0.0.10 (front-end)"
   ]
  ]
 },
 "keep": "NVA HA = 2 NVA + LB interne ports HA ; UDR vers le front-end."
},
{
 "id": "D4-155",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une VM a une adresse IP publique Standard. Aucun NSG n'est associé à son interface réseau ni à son sous-réseau.</p><p>Un client sur Internet peut-il joindre la VM sur le port 80 ?</p>",
 "opts": [
  "Non, car une VM ne peut pas avoir d'adresse publique Standard",
  "Oui, car sans NSG tout est autorisé",
  "Non, car les adresses IP publiques Standard bloquent le trafic entrant tant qu'un NSG ne l'autorise pas",
  "Oui, mais seulement en HTTPS"
 ],
 "ans": 2,
 "expl": "<p>Les adresses IP publiques <b>Standard</b> sont <b>sécurisées par défaut</b> : sans NSG qui autorise le trafic, les connexions entrantes sont refusées. (Avec l'ancien SKU De base, la VM était ouverte sans NSG.)</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Mise en réseau",
  "rows": [
   [
    "IP publique",
    "Standard"
   ],
   [
    "*Entrant",
    "Refusé (aucun NSG)"
   ]
  ]
 },
 "keep": "IP Standard sans NSG = rien n'entre."
},
{
 "id": "D4-156",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez que le trafic entre deux réseaux virtuels appairés soit chiffré, sans passerelle VPN.</p><p>Quelle fonctionnalité pouvez-vous activer ?</p>",
 "opts": [
  "Une passerelle NAT",
  "Un enregistrement DNS",
  "Un NSG",
  "Le chiffrement de réseau virtuel (Virtual Network encryption) sur les deux réseaux, avec des tailles de VM compatibles"
 ],
 "ans": 3,
 "expl": "<p>Le <b>chiffrement de réseau virtuel</b> chiffre le trafic entre VM (y compris entre réseaux appairés) avec DTLS, au niveau de l'infrastructure, pour les tailles de VM qui prennent en charge la mise en réseau accélérée. Le trafic de l'appairage reste sinon non chiffré (mais privé, sur le réseau de Microsoft).</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | Chiffrement",
  "menu": [
   "*Chiffrement"
  ],
  "rows": [
   [
    "*Chiffrement de réseau virtuel",
    "Activé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Chiffrer entre VNets sans VPN = chiffrement de réseau virtuel."
},
{
 "id": "D4-157",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM d'un pool d'équilibreur de charge public reçoivent bien les connexions, mais les journaux applicatifs montrent toutes les requêtes comme venant de l'adresse de l'équilibreur.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "Azure Load Balancer conserve l'adresse IP source du client : un autre composant en amont (proxy) masque l'adresse",
  "Il faut activer la persistance de session pour voir l'adresse du client",
  "Azure Load Balancer remplace toujours l'adresse source",
  "Il faut un équilibreur De base"
 ],
 "ans": 0,
 "expl": "<p>Azure Load Balancer travaille en couche 4 et <b>conserve l'adresse IP source</b> des clients (pas de proxy). Si l'application voit une autre adresse, c'est qu'un autre composant (proxy, Application Gateway) est en amont. Application Gateway, lui, transmet l'adresse du client dans l'en-tête <b>X-Forwarded-For</b>.</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "LB1"
  ],
  "title": "Flux",
  "rows": [
   [
    "*Load Balancer",
    "Adresse source conservée"
   ],
   [
    "Application Gateway",
    "X-Forwarded-For"
   ]
  ]
 },
 "keep": "LB conserve l'IP client ; AppGW la met dans X-Forwarded-For."
},
{
 "id": "D4-158",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous devez choisir le service adapté à chaque application.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Jeu en ligne en UDP, une seule région, faible latence :",
   "o": [
    "Azure Load Balancer",
    "Azure Front Door",
    "Application Gateway"
   ],
   "a": 0
  },
  {
   "l": "API REST dans deux régions, avec WAF mondial et cache :",
   "o": [
    "Traffic Manager",
    "Azure Front Door",
    "Azure Load Balancer"
   ],
   "a": 1
  },
  {
   "l": "Serveur SMTP dans trois régions, basculement par DNS :",
   "o": [
    "Azure Front Door",
    "Application Gateway",
    "Traffic Manager"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>UDP régional</b> : Load Balancer (couche 4).</li><li><b>HTTP mondial avec WAF et cache</b> : Front Door.</li><li><b>Protocole non HTTP, multirégion</b> : Traffic Manager (DNS).</li></ul>",
 "portal": {
  "path": [
   "Équilibrage de charge"
  ],
  "title": "Choisir",
  "rows": [
   [
    "*UDP régional",
    "Load Balancer"
   ],
   [
    "HTTP mondial + WAF",
    "Front Door"
   ],
   [
    "Non-HTTP multirégion",
    "Traffic Manager"
   ]
  ]
 },
 "keep": "Protocole non HTTP + mondial = Traffic Manager."
},
{
 "id": "D4-159",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VNet-Hub contient une passerelle VPN. VNet-S5 est appairé au hub.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Réglage sur le lien du hub vers VNet-S5 :",
   "o": [
    "Autoriser le transit de passerelle",
    "Aucun",
    "Utiliser la passerelle distante"
   ],
   "a": 0
  },
  {
   "l": "Réglage sur le lien de VNet-S5 vers le hub :",
   "o": [
    "Utiliser la passerelle distante",
    "Autoriser le transit de passerelle",
    "Aucun"
   ],
   "a": 0
  },
  {
   "l": "Si VNet-S5 a déjà sa propre passerelle VPN, « Utiliser la passerelle distante » :",
   "o": [
    "remplace sa passerelle automatiquement",
    "est impossible",
    "fonctionne en parallèle"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li>Le <b>hub</b>, qui possède la passerelle, <b>autorise le transit</b>.</li><li>Le <b>spoke</b> <b>utilise la passerelle distante</b>.</li><li>Un réseau qui a déjà sa propre passerelle ne peut pas utiliser une passerelle distante.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-Hub"
  ],
  "title": "Peerings",
  "rows": [
   [
    "*Hub → S5",
    "Transit de passerelle"
   ],
   [
    "*S5 → Hub",
    "Passerelle distante"
   ],
   [
    "S5 avec passerelle",
    "Impossible"
   ]
  ]
 },
 "keep": "Un spoke qui a sa passerelle ne peut pas utiliser la passerelle distante."
},
{
 "id": "D4-160",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous créez une passerelle VPN pour VNet7. Elle doit accepter plusieurs connexions site à site et point à site, résister à la panne d'une zone et utiliser BGP.</p><p>Comment devez-vous configurer la passerelle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Créer une passerelle de réseau virtuel",
  "sub": "Passerelles de réseau virtuel",
  "rows": [
   {
    "k": "select",
    "l": "Type de passerelle",
    "o": [
     "VPN",
     "ExpressRoute"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Type de VPN",
    "o": [
     "Basé sur les routes",
     "Basé sur les stratégies"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "SKU",
    "o": [
     "Basic",
     "VpnGw2",
     "VpnGw2AZ"
    ],
    "a": 2
   },
   {
    "k": "text",
    "l": "Réseau virtuel",
    "t": "VNet7 (GatewaySubnet 10.7.255.0/27)"
   },
   {
    "k": "select",
    "l": "Configurer BGP",
    "o": [
     "Activé",
     "Désactivé"
    ],
    "d": 1,
    "a": 0
   },
   {
    "k": "select",
    "l": "Mode actif-actif",
    "o": [
     "Activé",
     "Désactivé"
    ],
    "d": 1,
    "a": null
   }
  ]
 },
 "expl": "<ul><li>Type <b>VPN</b>, <b>basé sur les routes</b> (plusieurs sites, point à site, BGP).</li><li>SKU <b>VpnGw2AZ</b> : redondant interzone.</li><li><b>BGP activé</b>.</li></ul><p>Le mode actif-actif est recommandé mais n'est pas exigé ici.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VNet7-GW"
  ],
  "title": "Vue d'ensemble",
  "rows": [
   [
    "Type",
    "VPN · basé sur les routes"
   ],
   [
    "*SKU",
    "VpnGw2AZ"
   ],
   [
    "BGP",
    "Activé"
   ]
  ]
 },
 "keep": "Multi-sites + P2S + zones + BGP = VPN routes + SKU AZ + BGP."
},
{
 "id": "D4-161",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous créez une règle d'équilibrage sur l'équilibreur public LB5. Le trafic HTTPS (443) doit être réparti vers le port 8443 des VM, et un même client doit rester sur la même VM.</p><p>Comment devez-vous configurer la règle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Ajouter une règle d'équilibrage de charge",
  "sub": "LB5",
  "rows": [
   {
    "k": "select",
    "l": "Adresse IP frontale",
    "o": [
     "LB5-frontend (52.10.20.30)"
    ],
    "d": 0,
    "a": null
   },
   {
    "k": "select",
    "l": "Pool principal",
    "o": [
     "Pool-Web"
    ],
    "d": 0,
    "a": null
   },
   {
    "k": "select",
    "l": "Protocole",
    "o": [
     "TCP",
     "UDP"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Port",
    "o": [
     "443",
     "8443"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Port principal",
    "o": [
     "443",
     "8443"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Persistance de session",
    "o": [
     "Aucune",
     "Adresse IP du client",
     "Adresse IP et protocole du client"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Sonde d'intégrité",
    "o": [
     "Sonde-8443 (TCP 8443)",
     "Sonde-22 (TCP 22)"
    ],
    "a": 0
   }
  ]
 },
 "expl": "<ul><li><b>Port</b> (frontal) 443 et <b>port principal</b> (sur les VM) 8443.</li><li><b>Persistance « Adresse IP du client »</b> : un client reste sur la même VM.</li><li>La <b>sonde</b> doit tester le port réellement servi : 8443.</li></ul>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "LB5"
  ],
  "title": "LB5 | Règles",
  "rows": [
   [
    "*443 → 8443",
    "Pool-Web · Sonde-8443"
   ],
   [
    "Persistance",
    "Adresse IP du client"
   ]
  ]
 },
 "keep": "Port frontal ≠ port principal ; la sonde teste le port principal."
},
{
 "id": "D4-162",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>Vous devez ajouter un lien de réseau virtuel à la zone DNS privée corp.contoso.local.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "corp.contoso.local | Zone DNS privée",
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
    "g": "Gestion DNS",
    "items": [
     "Jeux d'enregistrements",
     "Liens de réseau virtuel"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Propriétés",
     "Verrous"
    ]
   }
  ]
 },
 "ans": "Liens de réseau virtuel",
 "expl": "<p><b>Liens de réseau virtuel</b> permet de lier la zone à des réseaux virtuels, avec ou sans <b>inscription automatique</b>.</p>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "corp.contoso.local"
  ],
  "title": "Liens de réseau virtuel",
  "menu": [
   "Jeux d'enregistrements",
   "*Liens de réseau virtuel"
  ],
  "rows": [
   [
    "*VNet1",
    "+ Ajouter"
   ]
  ]
 },
 "keep": "Lier une zone privée = Liens de réseau virtuel."
},
{
 "id": "D4-163",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>Vous devez associer le NSG NSG8 au sous-réseau Subnet-Web.</p><p>Dans NSG8, quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "NSG8 | Groupe de sécurité réseau",
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
     "Règles de sécurité de trafic entrant",
     "Règles de sécurité de trafic sortant",
     "Interfaces réseau",
     "Sous-réseaux",
     "Propriétés",
     "Verrous"
    ]
   },
   {
    "g": "Supervision",
    "items": [
     "Paramètres de diagnostic",
     "Journaux de flux NSG"
    ]
   }
  ]
 },
 "ans": "Sous-réseaux",
 "expl": "<p><b>Sous-réseaux</b> associe le NSG à un sous-réseau. <b>Interfaces réseau</b> l'associe à une interface réseau. On peut aussi faire l'association depuis la page du sous-réseau dans le réseau virtuel.</p>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG8"
  ],
  "title": "NSG8 | Sous-réseaux",
  "menu": [
   "Interfaces réseau",
   "*Sous-réseaux"
  ],
  "rows": [
   [
    "*Subnet-Web",
    "+ Associer"
   ]
  ]
 },
 "keep": "Associer un NSG = Sous-réseaux ou Interfaces réseau."
},
{
 "id": "D4-164",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une application web dans App Service doit être joignable sur Internet uniquement à travers Azure Front Door, jamais directement.</p><p>Que devez-vous configurer sur l'application web ?</p>",
 "opts": [
  "Une règle DNAT",
  "Des restrictions d'accès avec l'étiquette de service AzureFrontDoor.Backend et un filtre sur l'en-tête X-Azure-FDID de votre profil",
  "Une passerelle NAT",
  "Un NSG associé à l'application"
 ],
 "ans": 1,
 "expl": "<p>Les <b>restrictions d'accès</b> d'App Service autorisent l'étiquette <b>AzureFrontDoor.Backend</b>. Comme toutes les instances Front Door partagent ces adresses, on filtre aussi sur l'en-tête <b>X-Azure-FDID</b> (l'ID de votre profil). On peut aussi utiliser Front Door Premium avec un point de terminaison privé.</p>",
 "portal": {
  "path": [
   "App Services",
   "web1"
  ],
  "title": "web1 | Restrictions d'accès",
  "rows": [
   [
    "*AzureFrontDoor.Backend",
    "Autoriser · X-Azure-FDID = <ID>"
   ],
   [
    "Tout le reste",
    "Refuser"
   ]
  ]
 },
 "keep": "Uniquement via Front Door = étiquette AzureFrontDoor.Backend + X-Azure-FDID."
},
{
 "id": "D4-165",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les utilisateurs du site local résolvent mal les noms des ressources Azure qui utilisent des points de terminaison privés. Vous avez déployé Azure DNS Private Resolver avec un point de terminaison entrant (10.0.10.4).</p><p>Que devez-vous configurer sur les serveurs DNS du site local ?</p>",
 "opts": [
  "Des enregistrements A manuels vers les adresses publiques",
  "Un redirecteur vers 168.63.129.16",
  "Des redirecteurs conditionnels pour les zones publiques des services (par exemple blob.core.windows.net) vers 10.0.10.4",
  "Une zone DNS publique"
 ],
 "ans": 2,
 "expl": "<p>Les serveurs locaux transfèrent les requêtes des domaines concernés (par exemple <code>blob.core.windows.net</code> ou <code>privatelink.blob.core.windows.net</code>) vers le <b>point de terminaison entrant</b> du résolveur, qui les résout avec les zones privées liées. 168.63.129.16 n'est pas joignable depuis le site local.</p>",
 "portal": {
  "path": [
   "Serveurs DNS locaux"
  ],
  "title": "Redirecteurs conditionnels",
  "rows": [
   [
    "*blob.core.windows.net",
    "→ 10.0.10.4"
   ]
  ]
 },
 "keep": "DNS local → point de terminaison entrant du résolveur."
},
{
 "id": "D4-166",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous déployez un équilibreur de charge interne Standard. Les VM du pool doivent continuer à sortir sur Internet.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "L'équilibreur interne fournit automatiquement la sortie Internet",
  "Les VM du pool interne ne peuvent jamais sortir sur Internet",
  "Il faut un équilibreur De base",
  "Un équilibreur interne ne fournit pas de sortie Internet : il faut une passerelle NAT, des adresses publiques ou un pare-feu"
 ],
 "ans": 3,
 "expl": "<p>Un équilibreur <b>interne</b> n'a pas d'adresse publique, donc pas de SNAT vers Internet. Il faut prévoir une méthode explicite de sortie : <b>passerelle NAT</b> (recommandée), adresses publiques d'instance, équilibreur public avec règles sortantes, ou pare-feu.</p>",
 "portal": {
  "path": [
   "Passerelles NAT",
   "NAT-Pool"
  ],
  "title": "Sous-réseaux",
  "rows": [
   [
    "*Subnet-Pool",
    "Associé"
   ],
   [
    "LB interne",
    "Pas de sortie Internet"
   ]
  ]
 },
 "keep": "LB interne = pas de sortie : passerelle NAT."
},
{
 "id": "D4-167",
 "dom": 4,
 "type": "single",
 "stem": "<p>Deux équipes ont créé des réseaux virtuels avec le même espace d'adressage 10.0.0.0/16. Elles doivent maintenant communiquer.</p><p>Quelle est la solution la plus propre ?</p>",
 "opts": [
  "Réadresser l'un des réseaux virtuels (nouvel espace, migration des ressources), puis les appairer",
  "Ajouter un NSG",
  "Créer une zone DNS privée commune",
  "Les appairer directement"
 ],
 "ans": 0,
 "expl": "<p>Des espaces qui se chevauchent empêchent l'appairage et le routage. La solution propre est de <b>réadresser</b> l'un des réseaux. Des solutions de contournement existent (NAT sur une passerelle VPN, Private Link pour exposer des services précis), mais elles compliquent l'architecture. D'où l'importance d'un plan d'adressage dès le départ.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-Equipe2"
  ],
  "title": "Espace d'adressage",
  "rows": [
   [
    "Ancien",
    "10.0.0.0/16"
   ],
   [
    "*Nouveau",
    "10.50.0.0/16"
   ]
  ]
 },
 "keep": "Chevauchement = réadresser, puis appairer."
},
{
 "id": "D4-168",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez réduire la plage du sous-réseau Subnet7 de 10.0.1.0/24 à 10.0.1.0/25. Trois VM y sont déployées, avec des adresses entre 10.0.1.4 et 10.0.1.6.</p><p>Quelle condition doit être remplie pour modifier la plage ?</p>",
 "opts": [
  "Le réseau virtuel ne doit pas être appairé",
  "Le sous-réseau ne doit contenir aucune ressource déployée",
  "Aucune adresse utilisée ne doit se trouver hors de la nouvelle plage, même si des VM y sont",
  "Le sous-réseau doit être délégué"
 ],
 "ans": 1,
 "expl": "<p>La plage d'adresses d'un sous-réseau ne peut être modifiée que s'il ne contient <b>aucune ressource déployée</b>. Sinon, il faut d'abord déplacer les ressources vers un autre sous-réseau (ou les supprimer), modifier la plage, puis les remettre.</p><p>D'où l'intérêt de bien dimensionner les sous-réseaux dès le départ. L'appairage et la délégation n'ont pas de rapport.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1",
   "Subnet7"
  ],
  "title": "Modifier le sous-réseau",
  "rows": [
   [
    "*Plage",
    "Non modifiable : ressources déployées"
   ]
  ]
 },
 "keep": "Changer la plage d'un sous-réseau = le vider d'abord."
},
{
 "id": "D4-169",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez supprimer le réseau virtuel VNet9. La suppression échoue.</p><p>Quelle cause est la plus probable ?</p>",
 "opts": [
  "VNet9 a trop de sous-réseaux",
  "Un NSG n'est associé à aucun sous-réseau",
  "Des ressources sont encore connectées (interfaces réseau, passerelle, points de terminaison privés) ou un verrou s'applique",
  "VNet9 utilise le DNS fourni par Azure"
 ],
 "ans": 2,
 "expl": "<p>On ne peut pas supprimer un réseau virtuel tant que des ressources l'utilisent (interfaces réseau de VM, passerelles, Bastion, points de terminaison privés, services délégués…) ou si un <b>verrou</b> le protège. Il faut d'abord supprimer ou déplacer ces ressources.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet9"
  ],
  "title": "VNet9 | Appareils connectés",
  "menu": [
   "*Appareils connectés"
  ],
  "rows": [
   [
    "*vm1-nic",
    "Interface réseau"
   ],
   [
    "pe-sql",
    "Point de terminaison privé"
   ]
  ]
 },
 "keep": "Supprimer un VNet = plus de ressources connectées, pas de verrou."
},
{
 "id": "D4-170",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous gérez Azure Bastion (SKU Standard) dans VNet-Hub.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Les VM cibles doivent autoriser RDP ou SSH depuis AzureBastionSubnet dans leur NSG.",
   "a": 0
  },
  {
   "l": "Les utilisateurs doivent avoir le port 3389 ouvert vers Internet sur leur poste.",
   "a": 1
  },
  {
   "l": "Vous pouvez augmenter le nombre d'instances de Bastion pour plus de sessions simultanées.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>NSG des VM : Oui.</b> Le trafic RDP/SSH vient des adresses privées du sous-réseau Bastion.</li><li><b>Port 3389 côté client : Non.</b> Le client utilise HTTPS (443) vers Bastion.</li><li><b>Unités d'échelle : Oui</b>, avec Standard et Premium (2 à 50 instances).</li></ul>",
 "portal": {
  "path": [
   "Bastions",
   "Bastion-Hub"
  ],
  "title": "Bastion-Hub | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Nombre d'instances",
    "2 à 50"
   ],
   [
    "NSG des VM",
    "3389/22 depuis AzureBastionSubnet"
   ]
  ]
 },
 "keep": "Client en 443 ; VM ouvertes depuis AzureBastionSubnet ; unités d'échelle."
},
{
 "id": "D4-171",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous utilisez des groupes de sécurité d'application (ASG).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une interface réseau peut appartenir à plusieurs ASG.",
   "a": 0
  },
  {
   "l": "Les interfaces réseau d'un même ASG peuvent appartenir à des réseaux virtuels différents.",
   "a": 1
  },
  {
   "l": "Un ASG s'utilise comme source ou destination dans une règle de NSG.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Plusieurs ASG : Oui</b>, par exemple ASG-Web et ASG-Linux.</li><li><b>Réseaux différents : Non.</b> Toutes les interfaces d'un ASG sont dans le même réseau virtuel (celui de la première interface ajoutée).</li><li><b>Source ou destination : Oui.</b></li></ul>",
 "portal": {
  "path": [
   "Interfaces réseau",
   "vm-nic"
  ],
  "title": "Groupes de sécurité d'application",
  "rows": [
   [
    "*ASG-Web",
    "Membre"
   ],
   [
    "*ASG-Linux",
    "Membre"
   ]
  ]
 },
 "keep": "ASG : plusieurs par carte, un seul VNet, source ou destination."
},
{
 "id": "D4-172",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une stratégie interdit de mettre des NSG sur les sous-réseaux qui contiennent des points de terminaison privés, faute d'effet. Votre équipe veut pourtant filtrer le trafic vers ces points de terminaison avec des NSG et des UDR.</p><p>Que devez-vous activer sur le sous-réseau ?</p>",
 "opts": [
  "Les points de terminaison de service",
  "Le sous-réseau privé",
  "La délégation de sous-réseau",
  "Les stratégies réseau des points de terminaison privés (privateEndpointNetworkPolicies)"
 ],
 "ans": 3,
 "expl": "<p>Par défaut, les NSG et les itinéraires définis par l'utilisateur ne s'appliquent pas aux <b>points de terminaison privés</b>. En activant les <b>stratégies réseau des points de terminaison privés</b> sur le sous-réseau, les NSG et les UDR s'appliquent à eux.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1",
   "Subnet-PE"
  ],
  "title": "Modifier le sous-réseau",
  "rows": [
   [
    "*Stratégies réseau des points de terminaison privés",
    "NSG + tables de routage"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "NSG/UDR sur un point de terminaison privé = activer ses stratégies réseau."
},
{
 "id": "D4-173",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une Application Gateway doit transmettre les requêtes en HTTPS de bout en bout aux serveurs principaux, qui utilisent un certificat d'une autorité interne.</p><p>Que devez-vous configurer dans les paramètres de back-end ?</p>",
 "opts": [
  "Le protocole HTTPS et le certificat racine approuvé de l'autorité interne",
  "Une adresse IP publique sur chaque serveur",
  "Le protocole HTTP uniquement",
  "Une règle DNAT"
 ],
 "ans": 0,
 "expl": "<p>Pour le <b>chiffrement de bout en bout</b>, les paramètres de back-end utilisent <b>HTTPS</b>. Avec la v2, si le certificat des serveurs n'est pas émis par une autorité publique connue, on charge le <b>certificat racine approuvé</b> de l'autorité interne.</p>",
 "portal": {
  "path": [
   "Passerelles d'application",
   "AG1"
  ],
  "title": "Paramètres de back-end",
  "rows": [
   [
    "*Protocole",
    "HTTPS"
   ],
   [
    "*Certificat racine approuvé",
    "AC-Interne.cer"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "TLS de bout en bout + AC interne = HTTPS + racine approuvée."
},
{
 "id": "D4-174",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez qu'Application Gateway route /video/* vers le pool Pool-Video et tout le reste vers Pool-Default.</p><p>Quel type de règle de routage devez-vous utiliser ?</p>",
 "opts": [
  "Une règle NAT entrante",
  "Une règle basée sur le chemin (path-based), avec une cible par défaut Pool-Default",
  "Une règle de base",
  "Une règle sortante"
 ],
 "ans": 1,
 "expl": "<p>Une règle <b>basée sur le chemin</b> associe des modèles de chemin (/video/*) à des pools et des paramètres. Les requêtes qui ne correspondent à aucun chemin vont vers la <b>cible par défaut</b>.</p>",
 "portal": {
  "path": [
   "Passerelles d'application",
   "AG1"
  ],
  "title": "Règle basée sur le chemin",
  "rows": [
   [
    "*/video/*",
    "Pool-Video"
   ],
   [
    "Cible par défaut",
    "Pool-Default"
   ]
  ]
 },
 "keep": "Routage par URL = règle basée sur le chemin + cible par défaut."
},
{
 "id": "D4-175",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez qu'un abonnement de développement ne puisse jamais créer de passerelle VPN ni de circuit ExpressRoute, pour éviter des connexions non contrôlées au site local.</p><p>Quelle solution est la plus adaptée ?</p>",
 "opts": [
  "Un NSG sur chaque réseau virtuel",
  "Une zone DNS privée",
  "Une stratégie Azure Policy Types de ressources non autorisés (passerelles de réseau virtuel, circuits ExpressRoute)",
  "Une table de routage"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Policy</b> avec la stratégie <b>Types de ressources non autorisés</b> empêche la création de ces ressources dans l'abonnement, quel que soit le rôle de l'utilisateur.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affecter une stratégie"
  ],
  "title": "Types de ressources non autorisés",
  "rows": [
   [
    "*Types",
    "virtualNetworkGateways, expressRouteCircuits"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Interdire un type de ressource = Azure Policy."
},
{
 "id": "D4-176",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous gérez une topologie hub-and-spoke de 15 spokes. Vous voulez créer et gérer automatiquement les appairages et la connectivité entre groupes de réseaux, avec des règles de sécurité centralisées.</p><p>Quel service devez-vous utiliser ?</p>",
 "opts": [
  "Network Watcher",
  "Traffic Manager",
  "Azure DNS",
  "Azure Virtual Network Manager"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Virtual Network Manager</b> regroupe des réseaux virtuels (groupes de réseaux, statiques ou dynamiques via Azure Policy), déploie des <b>configurations de connectivité</b> (hub-and-spoke ou maillage) et des <b>règles d'administrateur de sécurité</b> qui priment sur les NSG.</p>",
 "portal": {
  "path": [
   "Network Manager",
   "AVNM1"
  ],
  "title": "AVNM1 | Configurations",
  "menu": [
   "Groupes réseau",
   "*Configurations"
  ],
  "rows": [
   [
    "*Connectivité",
    "Hub-and-spoke · 15 spokes"
   ]
  ],
  "btn": "Déployer"
 },
 "keep": "Connectivité à grande échelle = Azure Virtual Network Manager."
},
{
 "id": "D4-177",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une équipe sécurité veut imposer des règles qui bloquent certains ports (par exemple 23 et 445 depuis Internet) dans tous les réseaux virtuels, sans que les propriétaires des NSG puissent les contourner.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Des règles d'administrateur de sécurité d'Azure Virtual Network Manager",
  "Des itinéraires définis par l'utilisateur",
  "Des groupes de sécurité d'application",
  "Des NSG avec la priorité 4096"
 ],
 "ans": 0,
 "expl": "<p>Les <b>règles d'administrateur de sécurité</b> d'Azure Virtual Network Manager sont évaluées <b>avant</b> les NSG. Une règle « Toujours refuser » ne peut pas être annulée par une règle de NSG.</p>",
 "portal": {
  "path": [
   "Network Manager",
   "AVNM1"
  ],
  "title": "Configuration d'administrateur de sécurité",
  "rows": [
   [
    "*Bloquer 23 et 445",
    "Toujours refuser"
   ]
  ]
 },
 "keep": "Règles impossibles à contourner par les NSG = règles d'administrateur de sécurité."
},
{
 "id": "D4-178",
 "dom": 4,
 "type": "single",
 "stem": "<p>Des VM de VNet1 doivent accéder à Azure SQL Database par une adresse privée, et le serveur SQL doit refuser tout accès public.</p><p>Quel réglage du serveur SQL devez-vous configurer après avoir créé le point de terminaison privé ?</p>",
 "opts": [
  "Activer l'accès des services Azure",
  "Désactiver l'accès réseau public",
  "Ajouter une règle de pare-feu 0.0.0.0",
  "Ajouter un point de terminaison de service"
 ],
 "ans": 1,
 "expl": "<p>Une fois le <b>point de terminaison privé</b> en place, on <b>désactive l'accès réseau public</b> : seules les connexions par points de terminaison privés restent possibles. Autoriser les services Azure ou une règle IP rouvrirait l'accès public.</p>",
 "portal": {
  "path": [
   "Serveurs SQL",
   "sql1"
  ],
  "title": "sql1 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Accès réseau public",
    "Désactiver"
   ],
   [
    "Points de terminaison privés",
    "pe-sql1"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Point de terminaison privé + désactiver l'accès public."
},
{
 "id": "D4-179",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez analyser quelles VM communiquent le plus avec Internet, et détecter des ports ouverts inutilement, à partir des journaux de flux.</p><p>Quelle fonctionnalité devez-vous activer ?</p>",
 "opts": [
  "Le moniteur de connexion",
  "La topologie",
  "Traffic Analytics, avec un espace de travail Log Analytics",
  "La capture de paquets"
 ],
 "ans": 2,
 "expl": "<p><b>Traffic Analytics</b> traite les journaux de flux et affiche dans Log Analytics des tableaux de bord : flux par VM, pays, ports, trafic malveillant, ports ouverts inutilisés.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Traffic Analytics",
  "menu": [
   "*Traffic Analytics"
  ],
  "rows": [
   [
    "*Top VM",
    "Flux Internet"
   ],
   [
    "Ports ouverts",
    "Inutilisés"
   ]
  ]
 },
 "keep": "Analyser les flux = Traffic Analytics."
},
{
 "id": "D4-180",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une VM a deux interfaces réseau dans deux sous-réseaux. Elle ne répond pas au trafic reçu sur l'interface secondaire.</p><p>Quelle est la cause la plus fréquente ?</p>",
 "opts": [
  "La VM n'a pas d'adresse publique",
  "L'interface secondaire n'a pas de NSG",
  "L'interface secondaire doit être dans un autre réseau virtuel",
  "La passerelle par défaut n'est configurée que pour l'interface principale : il faut ajouter des itinéraires dans le système d'exploitation"
 ],
 "ans": 3,
 "expl": "<p>Azure ne fournit la passerelle par défaut que sur l'interface <b>principale</b>. Les réponses au trafic reçu sur l'interface secondaire repartent par l'interface principale, ce qui casse la communication. Il faut configurer le <b>routage</b> dans le système d'exploitation (itinéraires ou tables de routage par interface).</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "Système d'exploitation",
  "rows": [
   [
    "Carte principale",
    "Passerelle par défaut"
   ],
   [
    "*Carte secondaire",
    "Itinéraires à ajouter dans l'OS"
   ]
  ]
 },
 "keep": "Deuxième carte qui ne répond pas = routage dans l'OS."
},
{
 "id": "D4-181",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous déployez une passerelle ExpressRoute et une passerelle VPN dans VNet1.</p><p>Quelle condition doit remplir le GatewaySubnet ?</p>",
 "opts": [
  "Être assez grand pour les deux passerelles, au moins /27",
  "Il doit avoir un NSG qui bloque tout",
  "Il doit être /29",
  "Il faut deux GatewaySubnet"
 ],
 "ans": 0,
 "expl": "<p>Les passerelles ExpressRoute et VPN coexistent dans le <b>même</b> GatewaySubnet, qui doit être d'au moins <b>/27</b>. Il est déconseillé d'associer un NSG au GatewaySubnet.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "GatewaySubnet",
  "rows": [
   [
    "*Taille",
    "/27 minimum"
   ],
   [
    "Passerelles",
    "ExpressRoute + VPN"
   ]
  ]
 },
 "keep": "Coexistence ER + VPN = un GatewaySubnet /27+."
},
{
 "id": "D4-182",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez relier deux réseaux virtuels de deux régions avec un chiffrement IPsec, parce qu'une norme l'exige.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un appairage mondial",
  "Une connexion VPN de réseau à réseau (VNet-to-VNet) entre deux passerelles VPN",
  "Une passerelle NAT",
  "Azure Front Door"
 ],
 "ans": 1,
 "expl": "<p>Une connexion <b>de réseau à réseau</b> relie deux passerelles VPN avec un tunnel <b>IPsec/IKE</b>. L'appairage n'utilise pas IPsec (le trafic reste privé sur le réseau Microsoft, mais n'est pas chiffré par IPsec).</p>",
 "portal": {
  "path": [
   "Connexions",
   "Créer"
  ],
  "title": "Créer une connexion",
  "rows": [
   [
    "*Type",
    "De réseau virtuel à réseau virtuel"
   ],
   [
    "Chiffrement",
    "IPsec/IKE"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "IPsec entre VNets = connexion VNet-to-VNet."
},
{
 "id": "D4-183",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous gérez un équilibreur public Standard avec deux adresses frontales. Les VM doivent sortir sur Internet par la seconde adresse uniquement.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une sonde d'intégrité",
  "Une persistance de session",
  "Une règle sortante qui utilise la seconde adresse frontale, et désactiver le SNAT implicite dans la règle d'équilibrage",
  "Une règle NAT entrante"
 ],
 "ans": 2,
 "expl": "<p>Les <b>règles sortantes</b> définissent explicitement quelles adresses frontales servent au SNAT. On désactive le SNAT par défaut des règles d'équilibrage (option « utiliser des règles sortantes ») pour éviter qu'elles fournissent aussi une sortie.</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "LB1"
  ],
  "title": "Règles de trafic sortant",
  "rows": [
   [
    "*outbound-2",
    "Front-end 2"
   ],
   [
    "Règle d'équilibrage",
    "SNAT : utiliser les règles sortantes"
   ]
  ]
 },
 "keep": "Choisir l'IP de sortie = règle sortante + SNAT implicite désactivé."
},
{
 "id": "D4-184",
 "dom": 4,
 "type": "single",
 "stem": "<p>Un abonnement doit utiliser au maximum 50 adresses IP publiques dans France Central. Une création échoue.</p><p>Que devez-vous vérifier ?</p>",
 "opts": [
  "La taille du GatewaySubnet",
  "Le nombre de NSG",
  "Le SKU des VM",
  "Le quota d'adresses IP publiques de l'abonnement dans la région (Utilisation + quotas)"
 ],
 "ans": 3,
 "expl": "<p>Les ressources réseau ont aussi des <b>quotas</b> par abonnement et par région (adresses IP publiques, réseaux virtuels, NSG…). On les consulte dans <b>Utilisation + quotas</b> et on demande une augmentation si besoin.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Utilisation + quotas",
  "menu": [
   "*Utilisation + quotas"
  ],
  "rows": [
   [
    "*Adresses IP publiques · France Central",
    "50 / 50"
   ]
  ],
  "btn": "Nouvelle demande de quota"
 },
 "keep": "Création refusée = vérifier les quotas réseau."
},
{
 "id": "D4-185",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une VM doit être joignable sur Internet par le nom vm-demo.francecentral.cloudapp.azure.com.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une étiquette de nom DNS sur l'adresse IP publique de la VM",
  "Un point de terminaison privé",
  "Une zone DNS privée",
  "Un enregistrement MX"
 ],
 "ans": 0,
 "expl": "<p>Une adresse IP publique peut avoir une <b>étiquette de nom DNS</b>, qui crée le nom <code>&lt;étiquette&gt;.&lt;région&gt;.cloudapp.azure.com</code> pointant vers elle. Pour un nom de votre domaine, on crée ensuite un CNAME vers ce nom (ou un alias dans Azure DNS).</p>",
 "portal": {
  "path": [
   "Adresses IP publiques",
   "vm-demo-pip"
  ],
  "title": "vm-demo-pip | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Étiquette de nom DNS",
    "vm-demo"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Nom cloudapp.azure.com = étiquette DNS de l'IP publique."
},
{
 "id": "D4-186",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM de VNet1 doivent accéder aux VM de VNet2 (appairés) uniquement sur le port 443, et le reste du trafic entre les deux réseaux doit être bloqué.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une table de routage",
  "Des NSG qui autorisent 443 depuis l'espace de VNet1 et refusent le reste de ce trafic, avec une priorité plus haute que AllowVnetInBound",
  "Désactiver l'appairage",
  "Un point de terminaison de service"
 ],
 "ans": 1,
 "expl": "<p>L'appairage ne filtre rien : la règle par défaut <b>AllowVnetInBound</b> autorise le trafic des réseaux appairés. Pour filtrer, on ajoute des règles NSG personnalisées (priorité inférieure à 65000) : autoriser 443 depuis 10.x VNet1, puis refuser le reste venant de cette plage.</p>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG-VNet2"
  ],
  "title": "Règles de trafic entrant",
  "rows": [
   [
    "*100",
    "VNet1 → 443 · Autoriser"
   ],
   [
    "200",
    "VNet1 → Any · Refuser"
   ]
  ]
 },
 "keep": "Appairage = tout ouvert ; filtrer avec des NSG avant 65000."
},
{
 "id": "D4-187",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une application critique dans France Central doit continuer de fonctionner en cas de perte d'un centre de données. Elle utilise un équilibreur de charge Standard.</p><p>Comment l'adresse frontale de l'équilibreur doit-elle être configurée ?</p>",
 "opts": [
  "Avec une adresse De base",
  "Zonale dans la zone 1",
  "Redondante interzone",
  "Sans zone"
 ],
 "ans": 2,
 "expl": "<p>Une adresse frontale <b>redondante interzone</b> est servie par toutes les zones : elle survit à la perte d'une zone. Les VM du pool doivent elles aussi être réparties sur plusieurs zones.</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "Créer"
  ],
  "title": "Configuration IP frontale",
  "rows": [
   [
    "*Zone de disponibilité",
    "Redondant interzone"
   ]
  ]
 },
 "keep": "Survivre à une zone = front-end redondant interzone."
},
{
 "id": "D4-188",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une application web interne doit être publiée sur une adresse IP privée seulement, avec terminaison TLS et routage par chemin.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Azure Front Door",
  "Un équilibreur de charge public",
  "Traffic Manager",
  "Application Gateway v2 avec une adresse IP frontale privée"
 ],
 "ans": 3,
 "expl": "<p>Application Gateway peut avoir une <b>adresse frontale privée</b> (avec ou sans frontale publique selon la configuration) pour publier des applications internes, avec toutes ses fonctions de couche 7. Front Door et Traffic Manager sont des services publics mondiaux.</p>",
 "portal": {
  "path": [
   "Passerelles d'application",
   "AG-Int"
  ],
  "title": "Front-ends",
  "rows": [
   [
    "*Type d'adresse IP",
    "Privée · 10.0.5.10"
   ]
  ]
 },
 "keep": "App interne en L7 = AppGW avec front-end privé."
},
{
 "id": "D4-189",
 "dom": 4,
 "type": "single",
 "stem": "<p>Un administrateur doit voir les journaux des règles du Pare-feu Azure (règles qui ont autorisé ou refusé des flux) et les interroger.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un paramètre de diagnostic du pare-feu vers un espace de travail Log Analytics (tables structurées)",
  "Une capture de paquets",
  "Le journal d'activité",
  "Les journaux de flux NSG"
 ],
 "ans": 0,
 "expl": "<p>Le Pare-feu Azure envoie ses journaux (règles d'application, de réseau, DNAT, proxy DNS, IDPS) via un <b>paramètre de diagnostic</b>. Avec Log Analytics et les <b>tables spécifiques à la ressource</b> (AZFWNetworkRule, AZFWApplicationRule…), on les interroge en KQL, et des classeurs intégrés les visualisent.</p>",
 "portal": {
  "path": [
   "Pare-feu",
   "FW1"
  ],
  "title": "Paramètres de diagnostic",
  "rows": [
   [
    "*Destination",
    "Log Analytics · tables spécifiques"
   ],
   [
    "Tables",
    "AZFWNetworkRule, AZFWApplicationRule"
   ]
  ]
 },
 "keep": "Journaux du pare-feu = paramètre de diagnostic → Log Analytics."
},
{
 "id": "D4-190",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous concevez la connexion d'un site local à Azure. Elle doit être chiffrée et utiliser Internet, au coût le plus bas, avec une haute disponibilité.</p><p>Quelles <b>deux</b> actions conviennent ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Utiliser une passerelle basée sur les stratégies",
  "Déployer une passerelle VPN basée sur les routes en mode actif-actif",
  "Commander un circuit ExpressRoute",
  "Configurer deux périphériques VPN locaux (ou deux tunnels) vers les deux instances de la passerelle"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>Actif-actif : oui</b>, deux instances avec chacune un tunnel.</li><li><b>Deux tunnels côté local : oui</b>, idéalement deux périphériques, pour une redondance des deux côtés.</li><li><b>ExpressRoute : non</b>, plus cher et pas sur Internet.</li><li><b>Basée sur les stratégies : non</b>, pas d'actif-actif ni de connexions multiples.</li></ul>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VNet1-GW"
  ],
  "title": "Configuration",
  "rows": [
   [
    "*Actif-actif",
    "Activé"
   ],
   [
    "*Site local",
    "2 périphériques / 2 tunnels"
   ]
  ]
 },
 "keep": "VPN HA pas cher = actif-actif + deux tunnels locaux."
},
{
 "id": "D4-191",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous dépannez une VM injoignable en RDP via Azure Bastion.</p><p>Quelles <b>deux</b> vérifications sont pertinentes ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Le service RDP fonctionne et le pare-feu Windows l'autorise",
  "Le compte de stockage est en RA-GRS",
  "Le NSG de la VM autorise le port 3389 depuis AzureBastionSubnet",
  "La VM a une adresse IP publique"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<ul><li><b>NSG : oui</b>, le trafic vient du sous-réseau de Bastion.</li><li><b>Service et pare-feu Windows : oui.</b> Exécuter la commande ou la console série aident à vérifier.</li><li>Une adresse publique n'est <b>pas</b> nécessaire avec Bastion. Le stockage n'a aucun rapport.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "Dépannage Bastion",
  "rows": [
   [
    "*NSG",
    "3389 depuis AzureBastionSubnet"
   ],
   [
    "*OS",
    "Service RDP + pare-feu Windows"
   ]
  ]
 },
 "keep": "Bastion KO : NSG depuis AzureBastionSubnet + RDP dans l'OS."
},
{
 "id": "D4-192",
 "dom": 4,
 "type": "single",
 "stem": "<p>Un profil Traffic Manager surveille deux applications web. L'une renvoie des erreurs 500, mais Traffic Manager la considère toujours comme saine.</p><p>Que devez-vous vérifier ?</p>",
 "opts": [
  "La méthode de routage",
  "Les paramètres de surveillance du profil : protocole, port et chemin (par exemple /health) et codes d'état attendus",
  "Le nombre de points de terminaison",
  "Le TTL DNS"
 ],
 "ans": 1,
 "expl": "<p>Traffic Manager juge l'état d'un point de terminaison selon sa <b>surveillance</b> (HTTP, HTTPS ou TCP, port, chemin, codes attendus). Si le chemin surveillé (par exemple la racine) répond 200 alors que l'application échoue ailleurs, il faut surveiller un chemin de santé plus représentatif.</p>",
 "portal": {
  "path": [
   "Profils Traffic Manager",
   "TM1"
  ],
  "title": "TM1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Chemin",
    "/health"
   ],
   [
    "Codes attendus",
    "200-299"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Point de terminaison mal jugé = paramètres de surveillance."
},
{
 "id": "D4-193",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez que les VM de Subnet-Batch utilisent 4 adresses IP publiques fixes pour leurs nombreuses connexions sortantes, afin d'éviter l'épuisement des ports SNAT.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une règle NAT entrante",
  "Un groupe de sécurité d'application",
  "Une passerelle NAT avec 4 adresses IP publiques (ou un préfixe)",
  "Un équilibreur interne"
 ],
 "ans": 2,
 "expl": "<p>Chaque adresse publique d'une <b>passerelle NAT</b> fournit environ 64 000 ports SNAT, partagés dynamiquement entre toutes les VM du sous-réseau. Ajouter des adresses (jusqu'à 16) augmente la capacité et réduit le risque d'épuisement.</p>",
 "portal": {
  "path": [
   "Passerelles NAT",
   "NAT-Batch"
  ],
  "title": "IP sortante",
  "rows": [
   [
    "*Adresses IP publiques",
    "4 (≈ 256 000 ports SNAT)"
   ]
  ]
 },
 "keep": "Épuisement SNAT = plus d'IP sur la passerelle NAT."
},
{
 "id": "D4-194",
 "dom": 4,
 "type": "single",
 "stem": "<p>VM16 est derrière un équilibreur public Standard et sur un sous-réseau avec une passerelle NAT. Par quelle adresse son trafic sortant vers Internet sort-il ?</p>",
 "opts": [
  "Par l'adresse frontale de l'équilibreur",
  "Il est bloqué",
  "Par l'adresse 168.63.129.16",
  "Par la passerelle NAT"
 ],
 "ans": 3,
 "expl": "<p>La <b>passerelle NAT</b> est prioritaire sur les autres méthodes de sortie (règles sortantes d'équilibreur, adresses publiques d'instance). Le trafic <b>entrant</b> par l'équilibreur continue de fonctionner, et ses réponses repartent par l'équilibreur.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM16"
  ],
  "title": "Sortie Internet",
  "rows": [
   [
    "*Passerelle NAT",
    "Prioritaire"
   ],
   [
    "LB",
    "Entrant + réponses"
   ]
  ]
 },
 "keep": "Passerelle NAT = prioritaire pour la sortie."
},
{
 "id": "D4-195",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez filtrer le trafic entre deux sous-réseaux d'un même réseau virtuel par un pare-feu (NVA), et non directement.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Des itinéraires définis par l'utilisateur dans chaque sous-réseau, avec le préfixe de l'autre sous-réseau vers la NVA",
  "Un NSG seulement",
  "Un appairage entre les sous-réseaux",
  "Une passerelle NAT"
 ],
 "ans": 0,
 "expl": "<p>Par défaut, le trafic entre sous-réseaux suit l'itinéraire système du réseau virtuel. Un <b>itinéraire défini par l'utilisateur</b> plus précis (le préfixe de l'autre sous-réseau, saut suivant Appliance virtuelle) force le passage par la NVA. Le préfixe du sous-réseau est plus long que celui du réseau virtuel, donc prioritaire.</p>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT-SubA"
  ],
  "title": "Itinéraires",
  "rows": [
   [
    "*10.0.2.0/24",
    "Appliance virtuelle · NVA"
   ]
  ]
 },
 "keep": "Inter-sous-réseaux via NVA = UDR avec le préfixe du sous-réseau."
},
{
 "id": "D4-196",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous voulez savoir si une règle de NSG appliquée à une VM est trop permissive, et obtenir des recommandations automatiques sur les ports de gestion ouverts sur Internet.</p><p>Quel service devez-vous consulter ?</p>",
 "opts": [
  "Azure DNS",
  "Microsoft Defender pour le cloud (recommandations réseau)",
  "Traffic Manager",
  "Azure Resource Mover"
 ],
 "ans": 1,
 "expl": "<p><b>Microsoft Defender pour le cloud</b> évalue la configuration (dont les NSG) et formule des recommandations, par exemple fermer les ports de gestion exposés à Internet, activer l'accès juste-à-temps ou durcir les règles de NSG.</p>",
 "portal": {
  "path": [
   "Microsoft Defender pour le cloud"
  ],
  "title": "Recommandations",
  "rows": [
   [
    "*Ports de gestion",
    "Fermer sur Internet / JIT"
   ]
  ]
 },
 "keep": "Recommandations NSG = Defender pour le cloud."
},
{
 "id": "D4-197",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous gérez une application dans App Service intégrée au réseau virtuel VNet3. Elle doit résoudre les noms d'une zone DNS privée liée à VNet3.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "App Service ne peut jamais résoudre une zone privée",
  "Il faut un point de terminaison de service",
  "Avec l'intégration au réseau virtuel, l'application utilise la configuration DNS du réseau virtuel, donc la zone privée liée",
  "Il faut une adresse IP publique"
 ],
 "ans": 2,
 "expl": "<p>Avec l'<b>intégration au réseau virtuel</b>, l'application hérite des serveurs DNS configurés sur le réseau virtuel (le DNS Azure par défaut, qui résout les zones privées liées). C'est ce qui permet d'utiliser des points de terminaison privés depuis App Service.</p>",
 "portal": {
  "path": [
   "App Services",
   "app3"
  ],
  "title": "app3 | Mise en réseau",
  "rows": [
   [
    "*Intégration au réseau virtuel",
    "VNet3"
   ],
   [
    "DNS",
    "Celui du VNet (zones privées)"
   ]
  ]
 },
 "keep": "App Service + intégration VNet = DNS du VNet."
},
{
 "id": "D4-198",
 "dom": 4,
 "type": "single",
 "stem": "<p>Un développeur veut tester l'accès depuis une VM vers storage91.blob.core.windows.net et voir l'adresse IP résolue.</p><p>Quelle commande peut-il utiliser dans la VM Windows ?</p>",
 "opts": [
  "ipconfig /release",
  "tracert 168.63.129.16",
  "netstat -r",
  "nslookup storage91.blob.core.windows.net"
 ],
 "ans": 3,
 "expl": "<p><code>nslookup</code> (ou <code>Resolve-DnsName</code> en PowerShell) montre l'adresse résolue : une adresse privée (avec le CNAME privatelink) si le point de terminaison privé et le DNS sont bien configurés, sinon une adresse publique. <code>Test-NetConnection -Port 443</code> vérifie ensuite la connexion.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "Invite de commandes",
  "rows": [
   [
    "*nslookup storage91.blob…",
    "10.0.1.8 (privatelink)"
   ]
  ]
 },
 "keep": "Voir l'IP résolue = nslookup / Resolve-DnsName."
},
{
 "id": "D4-199",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une société veut publier une application sur Internet en couche 4 (TCP) dans trois régions, avec une seule adresse IP publique mondiale (anycast) et un basculement instantané entre régions.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un équilibreur de charge interrégional (niveau global)",
  "Application Gateway",
  "Traffic Manager",
  "Une passerelle NAT"
 ],
 "ans": 0,
 "expl": "<p>L'<b>équilibreur de charge interrégional</b> (niveau Global) fournit une adresse IP <b>anycast</b> mondiale devant des équilibreurs régionaux Standard, pour du trafic TCP/UDP, avec un basculement sans dépendre du cache DNS.</p><p>Traffic Manager est basé sur le DNS (basculement soumis au TTL). Application Gateway est régional et HTTP.</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "Créer"
  ],
  "title": "Créer un équilibreur",
  "rows": [
   [
    "*Niveau",
    "Global (interrégional)"
   ],
   [
    "Front-end",
    "IP anycast"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "L4 mondial anycast = équilibreur interrégional."
},
{
 "id": "D4-200",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM de VNet-Prod ne doivent jamais communiquer avec celles de VNet-Dev. Les deux réseaux sont dans le même abonnement, sans appairage ni VPN.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Ajouter une table de routage Aucun",
  "Rien : sans appairage ni passerelle, deux réseaux virtuels sont isolés",
  "Ajouter un NSG qui bloque VNet-Dev",
  "Les placer dans deux abonnements différents"
 ],
 "ans": 1,
 "expl": "<p>Un réseau virtuel est une <b>frontière d'isolement</b> : sans appairage, VPN ou autre connexion, ses ressources ne peuvent pas joindre celles d'un autre réseau par adresses privées. (Elles pourraient se joindre par leurs adresses publiques, si elles en ont.)</p>",
 "portal": {
  "path": [
   "Réseaux virtuels"
  ],
  "title": "Réseaux virtuels",
  "rows": [
   [
    "VNet-Prod",
    "Aucun appairage"
   ],
   [
    "*VNet-Dev",
    "Isolé"
   ]
  ]
 },
 "keep": "Un VNet est isolé par défaut."
}
);
