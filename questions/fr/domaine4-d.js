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
 "id": "D4-146",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'outil de Network Watcher adapté à chaque question.</p><p>Pour répondre, faites glisser l'outil approprié vers chaque question. Chaque outil peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Outils",
 "tgtHead": [
  "Question",
  "Outil"
 ],
 "srcs": [
  "Vérification du flux IP",
  "Tronçon suivant",
  "Résolution des problèmes de connexion",
  "Capture de paquets",
  "Résolution des problèmes de VPN"
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
 "tgtHead": [
  "Situation",
  "Solution"
 ],
 "srcs": [
  "Appairage de réseaux virtuels",
  "VPN site à site",
  "VPN point à site",
  "ExpressRoute"
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
 "keep": "Itinéraires → association → règle du pare-feu.",
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
 ]
},
{
 "id": "D4-149",
 "dom": 4,
 "type": "order",
 "stem": "<p>Vous devez rendre la zone DNS publique fabrikam.com, hébergée chez un ancien fournisseur, gérée par Azure DNS, sans interruption.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 "keep": "Zone → enregistrements → délégation (jamais l'inverse).",
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
 ]
},
{
 "id": "D4-150",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Des VM de Subnet-DB doivent accéder à un compte de stockage sans que le trafic passe par Internet, et vous voulez empêcher l'accès à tout autre compte de stockage depuis ce sous-réseau.</p><p>Pour chacune des solutions suivantes, sélectionnez Oui si elle répond seule au besoin. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Une règle NSG sortante qui autorise l'étiquette Storage de la région",
   "a": 1
  },
  {
   "l": "Un point de terminaison privé et des règles NSG limitées à son adresse",
   "a": 0
  },
  {
   "l": "Une passerelle NAT avec une adresse autorisée dans le pare-feu du compte",
   "a": 1
  },
  {
   "l": "Un point de terminaison de service avec une stratégie listant le compte",
   "a": 0
  }
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
 "type": "yngrid",
 "stem": "<p>Vous publiez une application web sur Internet derrière Application Gateway v2 avec WAF. Les VM web ne doivent recevoir du trafic que de la passerelle.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle fait partie de la solution. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Retirer les adresses IP publiques des VM web",
   "a": 0
  },
  {
   "l": "Placer les VM web dans le sous-réseau de l'Application Gateway",
   "a": 1
  },
  {
   "l": "Un NSG sur les VM qui n'admet que le sous-réseau de la passerelle",
   "a": 0
  },
  {
   "l": "Activer une passerelle NAT sur le sous-réseau de la passerelle",
   "a": 1
  }
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
 "keep": "Multi-sites + P2S + zones + BGP = VPN routes + SKU AZ + BGP.",
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
 }
},
{
 "id": "D4-161",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous créez une règle d'équilibrage sur l'équilibreur public LB5. Le trafic HTTPS (443) doit être réparti vers le port 8443 des VM, et un même client doit rester sur la même VM.</p><p>Comment devez-vous configurer la règle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "keep": "Port frontal ≠ port principal ; la sonde teste le port principal.",
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
 }
},
{
 "id": "D4-162",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>Vous devez ajouter un lien de réseau virtuel à la zone DNS privée corp.contoso.local.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 "keep": "Lier une zone privée = Liens de réseau virtuel.",
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
 }
},
{
 "id": "D4-163",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>Vous devez associer le NSG NSG8 au sous-réseau Subnet-Web.</p><p>Dans NSG8, quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 "keep": "Associer un NSG = Sous-réseaux ou Interfaces réseau.",
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
 }
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
 "id": "D4-190",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous concevez la connexion d'un site local à Azure. Elle doit être chiffrée et utiliser Internet, au coût le plus bas, avec une haute disponibilité.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle convient. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Utiliser une passerelle basée sur les stratégies avec deux tunnels",
   "a": 1
  },
  {
   "l": "Une passerelle basée sur les routes en mode actif-actif",
   "a": 0
  },
  {
   "l": "Commander un circuit ExpressRoute en plus du VPN existant",
   "a": 1
  },
  {
   "l": "Relier deux équipements locaux aux deux instances",
   "a": 0
  }
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
 "type": "yngrid",
 "stem": "<p>Vous dépannez une VM injoignable en RDP via Azure Bastion.</p><p>Pour chacune des vérifications suivantes, sélectionnez Oui si elle est pertinente. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Le service RDP fonctionne et le pare-feu Windows l'autorise",
   "a": 0
  },
  {
   "l": "Le compte de stockage des diagnostics de démarrage est en RA-GRS",
   "a": 1
  },
  {
   "l": "Le NSG de la VM autorise 3389 depuis AzureBastionSubnet",
   "a": 0
  },
  {
   "l": "La VM a une adresse IP publique Standard sur son interface",
   "a": 1
  }
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
}
);
