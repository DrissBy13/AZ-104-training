/* Domaine 4 : Réseau virtuel */
AZ.questions.push(
{
 "id": "D4-002",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous disposez d'une machine virtuelle nommée VM1. Le groupe de sécurité réseau NSG1 est configuré comme indiqué dans le document NSG1 (cliquez sur l'onglet <b>NSG1</b>).</p><p>Quel est le résultat de chaque connexion vers VM1 ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "docs": [
  {
   "t": "NSG1",
   "h": "<p>Règles de sécurité de trafic entrant de NSG1 (associé au sous-réseau de VM1, adresse 10.0.1.4) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Priorité</th><th>Nom</th><th>Port</th><th>Protocole</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>100</td><td>Rule1</td><td>3389</td><td>TCP</td><td>Internet</td><td>Tout</td><td>Refuser</td></tr><tr><td>200</td><td>Rule2</td><td>3389</td><td>TCP</td><td>VirtualNetwork</td><td>Tout</td><td>Autoriser</td></tr><tr><td>300</td><td>Rule3</td><td>80,443</td><td>TCP</td><td>Tout</td><td>Tout</td><td>Autoriser</td></tr><tr><td>65000</td><td>AllowVnetInBound</td><td>Tout</td><td>Tout</td><td>VirtualNetwork</td><td>VirtualNetwork</td><td>Autoriser</td></tr><tr><td>65001</td><td>AllowAzureLoadBalancerInBound</td><td>Tout</td><td>Tout</td><td>AzureLoadBalancer</td><td>Tout</td><td>Autoriser</td></tr><tr><td>65500</td><td>DenyAllInBound</td><td>Tout</td><td>Tout</td><td>Tout</td><td>Tout</td><td>Refuser</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "RDP depuis une adresse sur Internet :",
   "o": [
    "Autorisé",
    "Refusé"
   ],
   "a": 1
  },
  {
   "l": "RDP depuis VM2 (10.0.2.4), dans le même VNet :",
   "o": [
    "Autorisé",
    "Refusé"
   ],
   "a": 0
  },
  {
   "l": "HTTP depuis une adresse sur Internet :",
   "o": [
    "Autorisé",
    "Refusé"
   ],
   "a": 0
  }
 ],
 "expl": "<p>Les règles d'un NSG sont lues par <b>priorité croissante</b> (le plus petit numéro d'abord). La <b>première règle qui correspond</b> au trafic décide ; les suivantes sont ignorées.</p><ul><li><b>RDP depuis Internet : refusé.</b> Rule1 (priorité 100, source Internet, port 3389) correspond : refus.</li><li><b>RDP depuis VM2 : autorisé.</b> Rule1 ne correspond pas (la source est VirtualNetwork, pas Internet). Rule2 (priorité 200, source VirtualNetwork) autorise.</li><li><b>HTTP depuis Internet : autorisé.</b> Rule1 et Rule2 ne visent que le port 3389. Rule3 (ports 80 et 443, toute source) autorise.</li></ul>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG1"
  ],
  "title": "NSG1 | Règles de sécurité de trafic entrant",
  "menu": [
   "Vue d'ensemble",
   "*Règles de sécurité de trafic entrant",
   "Règles de sécurité de trafic sortant"
  ],
  "rows": [
   [
    "*100 · Rule1",
    "3389 · Internet · Refuser"
   ],
   [
    "200 · Rule2",
    "3389 · VirtualNetwork · Autoriser"
   ],
   [
    "300 · Rule3",
    "80,443 · Tout · Autoriser"
   ],
   [
    "65500 · DenyAllInBound",
    "Refuser"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "NSG : plus petite priorité d'abord, première règle qui correspond = décision."
},
{
 "id": "D4-004",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous disposez de deux réseaux virtuels : VNet1, qui contient une passerelle VPN reliée au site local, et VNet2, qui n'a pas de passerelle.</p><p>Vous créez un peering entre VNet1 et VNet2. Les machines virtuelles de VNet2 doivent joindre le site local en utilisant la passerelle VPN de VNet1.</p><p>Comment devez-vous configurer le peering ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<p>Le <b>transit de passerelle</b> permet à un réseau sans passerelle d'utiliser celle de son voisin. Il se règle des deux côtés du peering :</p><ul><li>Côté <b>VNet1</b> (qui possède la passerelle) : cocher <b>Autoriser la passerelle de VNet1 à transférer le trafic vers VNet2</b>. VNet1 « prête » sa passerelle.</li><li>Côté <b>VNet2</b> (sans passerelle) : cocher <b>Permettre à VNet2 d'utiliser la passerelle distante de VNet1</b>. VNet2 « emprunte ».</li></ul><p>L'accès entre les deux réseaux reste coché des deux côtés. Les cases « trafic transféré » concernent le trafic relayé par une appliance : elles ne sont pas notées ici.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | Peerings",
  "menu": [
   "Vue d'ensemble",
   "*Peerings"
  ],
  "rows": [
   [
    "*VNet1",
    "Autoriser la passerelle à transférer le trafic"
   ],
   [
    "*VNet2",
    "Utiliser la passerelle distante"
   ]
  ]
 },
 "keep": "Transit de passerelle : le propriétaire « autorise la passerelle », l'autre « utilise la passerelle distante ».",
 "win": {
  "title": "VNet1 | Ajouter un peering",
  "sub": "Réseau virtuel",
  "rows": [
   {
    "k": "head",
    "t": "Paramètres du réseau virtuel distant (VNet2)"
   },
   {
    "k": "text",
    "l": "Nom du lien de peering",
    "t": "vnet2-vers-vnet1"
   },
   {
    "k": "check",
    "l": "Autoriser « VNet2 » à accéder à « VNet1 »",
    "d": true,
    "a": true
   },
   {
    "k": "check",
    "l": "Autoriser « VNet2 » à recevoir le trafic transféré de « VNet1 »",
    "d": false,
    "a": null
   },
   {
    "k": "check",
    "l": "Autoriser la passerelle de « VNet2 » à transférer le trafic vers « VNet1 »",
    "d": false,
    "a": false
   },
   {
    "k": "check",
    "l": "Permettre à « VNet2 » d'utiliser la passerelle distante de « VNet1 »",
    "d": false,
    "a": true
   },
   {
    "k": "head",
    "t": "Paramètres de ce réseau virtuel (VNet1)"
   },
   {
    "k": "text",
    "l": "Nom du lien de peering",
    "t": "vnet1-vers-vnet2"
   },
   {
    "k": "check",
    "l": "Autoriser « VNet1 » à accéder à « VNet2 »",
    "d": true,
    "a": true
   },
   {
    "k": "check",
    "l": "Autoriser « VNet1 » à recevoir le trafic transféré de « VNet2 »",
    "d": false,
    "a": null
   },
   {
    "k": "check",
    "l": "Autoriser la passerelle de « VNet1 » à transférer le trafic vers « VNet2 »",
    "d": false,
    "a": true
   },
   {
    "k": "check",
    "l": "Permettre à « VNet1 » d'utiliser la passerelle distante de « VNet2 »",
    "d": false,
    "a": false
   }
  ]
 }
},
{
 "id": "D4-005",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous créez une table de routage nommée RT1, associée à Subnet1. Une appliance virtuelle réseau (pare-feu) a l'adresse 10.0.5.4. VNet1 est relié au site local par une passerelle VPN.</p><p>Quel type de tronçon suivant devez-vous utiliser pour chaque route ? Pour répondre, faites glisser le type approprié vers chaque route. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Types de tronçon suivant",
 "tgtHead": [
  "Route",
  "Tronçon suivant"
 ],
 "srcs": [
  "Appliance virtuelle",
  "Passerelle de réseau virtuel",
  "Internet",
  "Réseau virtuel",
  "Aucun"
 ],
 "tgts": [
  {
   "l": "0.0.0.0/0 : tout le trafic Internet doit être inspecté par le pare-feu",
   "a": 0
  },
  {
   "l": "192.168.0.0/16 : trafic vers le site local",
   "a": 1
  },
  {
   "l": "10.50.0.0/16 : tout trafic vers ce réseau doit être bloqué",
   "a": 4
  }
 ],
 "expl": "<p>Les types de tronçon suivant d'une route personnalisée :</p><ul><li><b>Appliance virtuelle</b> : envoie le trafic vers une adresse IP (pare-feu, routeur). Il faut indiquer l'adresse (10.0.5.4) et activer le <b>transfert IP</b> sur l'interface réseau de l'appliance.</li><li><b>Passerelle de réseau virtuel</b> : envoie vers la passerelle VPN, donc le site local.</li><li><b>Aucun</b> : les paquets sont abandonnés. C'est la façon de bloquer une destination par le routage.</li></ul><p>Internet et Réseau virtuel existent aussi, mais ne correspondent pas à ces besoins.</p>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT1"
  ],
  "title": "RT1 | Itinéraires",
  "menu": [
   "Vue d'ensemble",
   "*Itinéraires",
   "Sous-réseaux"
  ],
  "rows": [
   [
    "*0.0.0.0/0",
    "Appliance virtuelle · 10.0.5.4"
   ],
   [
    "192.168.0.0/16",
    "Passerelle de réseau virtuel"
   ],
   [
    "10.50.0.0/16",
    "Aucun"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Pare-feu = Appliance virtuelle (+ transfert IP). Site local = Passerelle. Bloquer = Aucun."
},
{
 "id": "D4-009",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Un équilibreur de charge public Standard nommé LB1 répartit le trafic HTTPS vers VM1 et VM2. Le site répond correctement en local sur chaque VM, mais LB1 n'envoie plus aucun trafic aux deux VM.</p><p>Pour chacune des propositions suivantes, sélectionnez Oui s'il s'agit d'une cause possible. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "La sonde d'intégrité interroge un port ou un chemin incorrect",
   "a": 0
  },
  {
   "l": "L'adresse IP publique frontale de LB1 est statique et non dynamique",
   "a": 1
  },
  {
   "l": "Un NSG bloque la sonde ou le port 443 vers les VM",
   "a": 0
  },
  {
   "l": "Aucune zone DNS privée n'est liée au réseau virtuel VNet1",
   "a": 1
  }
 ],
 "expl": "<p>Un équilibreur de charge n'envoie du trafic qu'aux instances que sa <b>sonde d'intégrité</b> juge saines.</p><ul><li><b>Sonde mal configurée : oui.</b> Si elle interroge un mauvais port ou chemin, toutes les VM sont jugées en échec et retirées de la rotation.</li><li><b>NSG qui bloque : oui.</b> L'équilibreur Standard est « fermé par défaut » : un NSG doit autoriser le port de l'application (443) et le trafic de la sonde (étiquette de service AzureLoadBalancer, autorisée par la règle par défaut sauf si une règle prioritaire la bloque).</li><li>Une <b>IP statique</b> est normale (obligatoire en Standard). Le <b>DNS privé</b> ne joue aucun rôle.</li></ul>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "LB1"
  ],
  "title": "LB1 | Sondes d'intégrité",
  "menu": [
   "Vue d'ensemble",
   "Pools principaux",
   "*Sondes d'intégrité",
   "Règles d'équilibrage de charge"
  ],
  "rows": [
   [
    "*probe-https",
    "HTTPS · port 443 · chemin /health"
   ],
   [
    "État des instances",
    "0 / 2 saines"
   ]
  ]
 },
 "keep": "Plus de trafic vers les VM = sonde mal configurée ou NSG qui bloque."
}
);
