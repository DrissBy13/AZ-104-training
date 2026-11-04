/* Domaine 4 : réseau virtuel (lot B : D4-010 à D4-064) */
AZ.questions.push(
{
 "id": "D4-011",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Le sous-réseau Subnet5 utilise la plage <b>192.168.10.0/24</b>.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Première adresse attribuable à une VM :",
   "o": [
    "192.168.10.1",
    "192.168.10.4",
    "192.168.10.5"
   ],
   "a": 1
  },
  {
   "l": "Dernière adresse attribuable à une VM :",
   "o": [
    "192.168.10.254",
    "192.168.10.255",
    "192.168.10.253"
   ],
   "a": 0
  },
  {
   "l": "Nombre d'adresses utilisables :",
   "o": [
    "251",
    "254",
    "256"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>.0 à .3 sont réservées : la première adresse utilisable est <b>.4</b>.</li><li>.255 est réservée : la dernière utilisable est <b>.254</b>.</li><li>256 − 5 = <b>251</b> adresses.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1",
   "Sous-réseaux"
  ],
  "title": "Subnet5",
  "rows": [
   [
    "Réservées",
    "192.168.10.0, .1, .2, .3, .255"
   ],
   [
    "*Première / dernière utilisable",
    ".4 / .254"
   ],
   [
    "Disponibles",
    "251"
   ]
  ]
 },
 "keep": "Réservées : .0 (réseau), .1 (passerelle), .2-.3 (DNS), dernière (diffusion)."
},
{
 "id": "D4-013",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer le nom exact et la taille minimale recommandée des sous-réseaux dédiés.</p><p>Pour répondre, faites glisser la valeur appropriée vers chaque service. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Sous-réseaux",
 "tgtHead": [
  "Service",
  "Sous-réseau"
 ],
 "srcs": [
  "GatewaySubnet, /27",
  "AzureBastionSubnet, /26",
  "AzureFirewallSubnet, /26",
  "AppGatewaySubnet, /24"
 ],
 "tgts": [
  {
   "l": "Passerelle VPN ou ExpressRoute",
   "a": 0
  },
  {
   "l": "Azure Bastion",
   "a": 1
  },
  {
   "l": "Pare-feu Azure",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>GatewaySubnet</b> : nom imposé pour les passerelles de réseau virtuel ; /27 ou plus recommandé.</li><li><b>AzureBastionSubnet</b> : nom imposé ; /26 minimum.</li><li><b>AzureFirewallSubnet</b> : nom imposé ; /26 minimum.</li></ul><p>Application Gateway a besoin d'un sous-réseau dédié, mais son nom est libre (et /24 est recommandé pour v2, pas obligatoire).</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | Sous-réseaux",
  "menu": [
   "*Sous-réseaux"
  ],
  "rows": [
   [
    "*GatewaySubnet",
    "/27 recommandé"
   ],
   [
    "AzureBastionSubnet",
    "/26 minimum"
   ],
   [
    "AzureFirewallSubnet",
    "/26 minimum"
   ]
  ]
 },
 "keep": "Noms imposés : GatewaySubnet, AzureBastionSubnet, AzureFirewallSubnet."
},
{
 "id": "D4-016",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>VNet-Hub est appairé à VNet-A et à VNet-B. VNet-A et VNet-B ne sont pas appairés entre eux. Aucune table de routage n'existe.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une VM de VNet-A peut joindre une VM de VNet-Hub.",
   "a": 0
  },
  {
   "l": "Une VM de VNet-A peut joindre une VM de VNet-B.",
   "a": 1
  },
  {
   "l": "En ajoutant un appairage direct entre VNet-A et VNet-B, leurs VM peuvent communiquer.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>A ↔ Hub : Oui</b>, ils sont appairés.</li><li><b>A ↔ B : Non.</b> L'appairage n'est <b>pas transitif</b> : passer par le hub ne fonctionne pas sans appliance de routage (NVA ou Pare-feu Azure) et tables de routage.</li><li><b>Appairage direct : Oui.</b> C'est l'autre solution.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-A"
  ],
  "title": "VNet-A | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "vnetA-vers-hub",
    "Connecté"
   ],
   [
    "*VNet-B",
    "Non joignable (pas de transitivité)"
   ]
  ]
 },
 "keep": "Spoke ↔ spoke : appairage direct, ou NVA/pare-feu dans le hub + routes."
},
{
 "id": "D4-022",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez configurer une connexion VPN site à site entre VNet1 et le site local de Lyon.</p><p>Pour répondre, faites glisser la ressource appropriée vers chaque information. Chaque ressource peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Ressources",
 "tgtHead": [
  "Information",
  "Ressource"
 ],
 "srcs": [
  "Passerelle de réseau virtuel",
  "Passerelle de réseau local",
  "Connexion",
  "GatewaySubnet"
 ],
 "tgts": [
  {
   "l": "Adresse IP publique du pare-feu de Lyon et plages d'adresses du site",
   "a": 1
  },
  {
   "l": "Clé partagée (PSK) IPsec",
   "a": 2
  },
  {
   "l": "Type VPN Basé sur les routes et SKU VpnGw2",
   "a": 0
  },
  {
   "l": "Plage 10.0.255.0/27 dans VNet1",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Passerelle de réseau local</b> : représente le site local (adresse IP publique de son périphérique VPN ou FQDN, et plages d'adresses locales ou paramètres BGP).</li><li><b>Connexion</b> : relie la passerelle Azure à la passerelle locale, avec la <b>clé partagée</b> et le protocole IKE.</li><li><b>Passerelle de réseau virtuel</b> : la passerelle côté Azure, avec son type et son SKU.</li><li><b>GatewaySubnet</b> : le sous-réseau où elle est déployée.</li></ul>",
 "portal": {
  "path": [
   "Connexions",
   "Lyon-S2S"
  ],
  "title": "Créer une connexion",
  "rows": [
   [
    "Passerelle de réseau virtuel",
    "VNet1-GW"
   ],
   [
    "*Passerelle de réseau local",
    "LNG-Lyon (IP publique, plages)"
   ],
   [
    "*Clé partagée (PSK)",
    "••••••••"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "VPN S2S : passerelle virtuelle (Azure), passerelle locale (site), connexion (clé partagée)."
},
{
 "id": "D4-023",
 "dom": 4,
 "type": "order",
 "stem": "<p>Vous devez relier VNet2 au site local de Lille par un VPN site à site. VNet2 n'a pas encore de sous-réseau de passerelle.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Le <b>GatewaySubnet</b> doit exister avant la <b>passerelle</b> (dont le déploiement prend souvent 30 à 45 minutes). On crée la <b>passerelle de réseau local</b> (elle peut être créée en parallèle), puis la <b>connexion</b>, et on configure le périphérique local avec la même clé partagée.</p><p>On n'« appaire » pas un site local, et Bastion n'a pas de rôle ici.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "Créer"
  ],
  "title": "Créer une passerelle de réseau virtuel",
  "rows": [
   [
    "Prérequis",
    "GatewaySubnet"
   ],
   [
    "*Type de passerelle",
    "VPN"
   ],
   [
    "Type de VPN",
    "Basé sur les routes"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "S2S : GatewaySubnet → passerelle → passerelle locale → connexion.",
 "acts": [
  "Créer le sous-réseau GatewaySubnet dans VNet2",
  "Créer la passerelle de réseau virtuel (type VPN)",
  "Créer la passerelle de réseau local pour Lille",
  "Créer la connexion site à site avec la clé partagée, puis configurer le périphérique VPN de Lille",
  "Créer un appairage entre VNet2 et le site local",
  "Créer AzureBastionSubnet"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D4-026",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous configurez un VPN point à site sur la passerelle VPN de VNet1 (10.0.0.0/16).</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Pool d'adresses clients :",
   "o": [
    "172.16.200.0/24",
    "10.0.5.0/24",
    "10.0.0.0/16"
   ],
   "a": 0
  },
  {
   "l": "Type de tunnel pour des clients macOS, Windows et Linux, avec authentification Entra :",
   "o": [
    "IKEv2 seul",
    "OpenVPN",
    "SSTP"
   ],
   "a": 1
  },
  {
   "l": "Pour une authentification par certificat, vous chargez dans Azure :",
   "o": [
    "la clé publique du certificat racine",
    "la clé privée du certificat client",
    "le certificat du serveur web"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>Le <b>pool d'adresses clients</b> ne doit pas chevaucher le réseau virtuel ni le site local : 172.16.200.0/24 convient ; les deux autres sont dans 10.0.0.0/16.</li><li><b>OpenVPN</b> fonctionne sur tous les systèmes et est requis pour l'authentification Entra. SSTP est réservé à Windows.</li><li>Pour l'authentification par certificat, on charge la <b>clé publique du certificat racine</b> ; chaque client installe un certificat client signé par cette racine.</li></ul>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VNet1-GW"
  ],
  "title": "Configuration de point à site",
  "rows": [
   [
    "*Pool d'adresses",
    "172.16.200.0/24 (hors VNet)"
   ],
   [
    "*Type de tunnel",
    "OpenVPN"
   ],
   [
    "Certificats racines",
    "Clé publique"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Pool P2S sans chevauchement ; OpenVPN multiplateforme ; on charge la clé publique racine."
},
{
 "id": "D4-034",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous créez des itinéraires dans une table de routage. Vous devez choisir le type de saut suivant adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de saut suivant",
 "tgtHead": [
  "Besoin",
  "Saut suivant"
 ],
 "srcs": [
  "Appliance virtuelle",
  "Passerelle de réseau virtuel",
  "Internet",
  "Aucun",
  "Réseau virtuel"
 ],
 "tgts": [
  {
   "l": "Faire inspecter le trafic par un pare-feu tiers sur une VM",
   "a": 0
  },
  {
   "l": "Forcer le trafic Internet vers le site local par le VPN (tunneling forcé)",
   "a": 1
  },
  {
   "l": "Bloquer tout trafic vers 10.50.0.0/16",
   "a": 3
  },
  {
   "l": "Envoyer directement vers Internet le trafic des services Microsoft, malgré un itinéraire 0.0.0.0/0 vers le pare-feu",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Appliance virtuelle</b> : vers l'adresse IP d'une NVA ou d'un Pare-feu Azure.</li><li><b>Passerelle de réseau virtuel</b> : vers la passerelle VPN (tunneling forcé vers le site local).</li><li><b>Aucun</b> : le trafic est abandonné.</li><li><b>Internet</b> : sortie directe ; on peut l'utiliser avec une étiquette de service (par exemple AzureCloud) comme préfixe plus précis que 0.0.0.0/0.</li></ul>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT1"
  ],
  "title": "Ajouter un itinéraire",
  "rows": [
   [
    "*Appliance virtuelle",
    "NVA / pare-feu"
   ],
   [
    "Passerelle de réseau virtuel",
    "Tunneling forcé"
   ],
   [
    "Aucun",
    "Abandon"
   ],
   [
    "Internet",
    "Sortie directe"
   ]
  ]
 },
 "keep": "Appliance, Passerelle, Internet, Aucun, Réseau virtuel : les 5 sauts suivants."
},
{
 "id": "D4-040",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Le NSG NSG2 est associé à l'interface réseau de VM2 et contient les règles de trafic entrant suivantes (en plus des règles par défaut) :</p><pre>Priorité  Nom          Port  Source     Action\n100       Bloquer-RDP  3389  Any        Refuser\n200       Autoriser-RDP 3389 10.0.0.0/8 Autoriser\n300       Autoriser-Web 443  Internet   Autoriser</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Un administrateur en 10.5.0.10 peut se connecter en RDP à VM2 :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "Un client sur Internet peut joindre VM2 en HTTPS :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  },
  {
   "l": "Pour autoriser le RDP depuis 10.0.0.0/8, vous devez :",
   "o": [
    "supprimer la règle Autoriser-Web",
    "donner à Autoriser-RDP la priorité 4096",
    "donner à Autoriser-RDP une priorité inférieure à 100 (par exemple 90)"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li>Les règles sont traitées par <b>priorité croissante</b> et la première qui correspond s'applique. La règle 100 refuse le RDP pour tout le monde avant que la règle 200 soit évaluée : <b>Non</b>.</li><li>HTTPS depuis Internet : la règle 300 l'autorise : <b>Oui</b>.</li><li>Il faut que la règle d'autorisation ait un <b>numéro plus petit</b> (donc une priorité plus haute) que la règle de refus, par exemple 90.</li></ul>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG2"
  ],
  "title": "NSG2 | Règles de sécurité de trafic entrant",
  "menu": [
   "*Règles de sécurité de trafic entrant"
  ],
  "rows": [
   [
    "*90 · Autoriser-RDP",
    "3389 · 10.0.0.0/8 · Autoriser"
   ],
   [
    "100 · Bloquer-RDP",
    "3389 · Any · Refuser"
   ],
   [
    "300 · Autoriser-Web",
    "443 · Internet · Autoriser"
   ]
  ]
 },
 "keep": "Exception à un refus = règle d'autorisation avec un numéro plus petit."
},
{
 "id": "D4-042",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer la priorité de chaque règle de sécurité par défaut d'un NSG.</p><p>Pour répondre, faites glisser la priorité appropriée vers chaque règle. Chaque priorité peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Priorités",
 "tgtHead": [
  "Règle par défaut (entrante)",
  "Priorité"
 ],
 "srcs": [
  "65000",
  "65001",
  "65500",
  "4096"
 ],
 "tgts": [
  {
   "l": "AllowVnetInBound",
   "a": 0
  },
  {
   "l": "AllowAzureLoadBalancerInBound",
   "a": 1
  },
  {
   "l": "DenyAllInBound",
   "a": 2
  }
 ],
 "expl": "<p>Règles entrantes par défaut : <b>AllowVnetInBound</b> (65000), <b>AllowAzureLoadBalancerInBound</b> (65001), <b>DenyAllInBound</b> (65500). Règles sortantes : AllowVnetOutBound (65000), AllowInternetOutBound (65001), DenyAllOutBound (65500).</p><p>Les règles personnalisées ont une priorité de <b>100 à 4096</b> : elles sont toujours évaluées avant les règles par défaut, qui ne peuvent pas être supprimées.</p>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG1"
  ],
  "title": "Règles par défaut (entrant)",
  "rows": [
   [
    "*65000",
    "AllowVnetInBound"
   ],
   [
    "*65001",
    "AllowAzureLoadBalancerInBound"
   ],
   [
    "*65500",
    "DenyAllInBound"
   ]
  ]
 },
 "keep": "Défaut : 65000 VNet, 65001 LB (ou Internet en sortie), 65500 refus. Personnalisées : 100-4096."
},
{
 "id": "D4-043",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Un NSG ne contient que les règles par défaut. Il est associé à Subnet1 de VNet1.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une VM de Subnet2 de VNet1 peut joindre une VM de Subnet1 sur n'importe quel port.",
   "a": 0
  },
  {
   "l": "Une VM de Subnet1 peut naviguer sur Internet.",
   "a": 0
  },
  {
   "l": "Un client sur Internet peut joindre une VM de Subnet1 qui a une adresse IP publique.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Intra-réseau : Oui.</b> AllowVnetInBound autorise le trafic de l'étiquette VirtualNetwork (le réseau virtuel, les réseaux appairés et le site local relié par passerelle).</li><li><b>Internet sortant : Oui.</b> AllowInternetOutBound l'autorise.</li><li><b>Internet entrant : Non.</b> DenyAllInBound bloque tout ce qui n'est pas autorisé avant.</li></ul>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG1"
  ],
  "title": "Règles par défaut",
  "rows": [
   [
    "Entrant",
    "VNet autorisé, Internet refusé"
   ],
   [
    "*Sortant",
    "VNet et Internet autorisés"
   ]
  ]
 },
 "keep": "Par défaut : tout le VNet ouvert, Internet sortant ouvert, Internet entrant fermé."
},
{
 "id": "D4-050",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous choisissez le SKU d'Azure Bastion.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Se connecter avec le client RDP natif de Windows (mstsc) ou la CLI :",
   "o": [
    "De base",
    "Standard",
    "Développeur"
   ],
   "a": 1
  },
  {
   "l": "Se connecter à des VM de réseaux virtuels appairés :",
   "o": [
    "De base et supérieurs",
    "Standard uniquement",
    "Aucun SKU"
   ],
   "a": 0
  },
  {
   "l": "SKU gratuit, sans sous-réseau dédié, pour des tests sur une seule VM à la fois :",
   "o": [
    "Développeur",
    "Premium",
    "De base"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>Le <b>client natif</b> (mstsc, az network bastion rdp/ssh) demande le SKU <b>Standard</b> (ou Premium). Standard ajoute aussi les liens partageables, la connexion par adresse IP et la mise à l'échelle des instances.</li><li>La connexion aux VM des <b>réseaux appairés</b> fonctionne dès le SKU <b>De base</b>.</li><li>Le SKU <b>Développeur</b> est gratuit, partagé, sans AzureBastionSubnet, limité à une connexion à la fois.</li></ul>",
 "portal": {
  "path": [
   "Bastions",
   "Bastion1"
  ],
  "title": "Bastion1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "Développeur",
    "Gratuit, 1 connexion"
   ],
   [
    "De base",
    "Réseaux appairés"
   ],
   [
    "*Standard",
    "Client natif, liens partageables"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "Client natif = Standard ; réseaux appairés dès De base ; Développeur = gratuit."
},
{
 "id": "D4-053",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous déployez une passerelle NAT.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une passerelle NAT peut être associée à plusieurs sous-réseaux du même réseau virtuel.",
   "a": 0
  },
  {
   "l": "Une passerelle NAT peut utiliser une adresse IP publique de SKU De base.",
   "a": 1
  },
  {
   "l": "Une VM qui a sa propre adresse IP publique sur son interface réseau utilise cette adresse pour sortir, et non celle de la passerelle NAT.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Plusieurs sous-réseaux : Oui</b>, dans le même réseau virtuel.</li><li><b>SKU De base : Non.</b> Seules les adresses (ou préfixes) Standard sont prises en charge.</li><li><b>Adresse publique de l'interface : Non.</b> La passerelle NAT est <b>prioritaire</b> pour le trafic sortant sur toutes les autres configurations (adresse IP publique d'instance, règles sortantes d'un équilibreur). L'adresse publique de la VM ne sert plus qu'au trafic <b>entrant</b>.</li></ul>",
 "portal": {
  "path": [
   "Passerelles NAT",
   "NAT1"
  ],
  "title": "NAT1 | Sous-réseaux",
  "menu": [
   "*Sous-réseaux"
  ],
  "rows": [
   [
    "*Sous-réseaux",
    "Plusieurs (même VNet)"
   ],
   [
    "IP",
    "Standard uniquement"
   ],
   [
    "Priorité",
    "Sur toutes les autres sorties"
   ]
  ]
 },
 "keep": "NAT : plusieurs sous-réseaux, IP Standard, prioritaire pour la sortie."
},
{
 "id": "D4-059",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>La zone DNS privée corp.local est liée à VNet1 (inscription automatique activée) et à VNet2 (inscription automatique désactivée). VNet1 et VNet2 ne sont pas appairés.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Les VM de VNet2 ont un enregistrement créé automatiquement dans corp.local.",
   "a": 1
  },
  {
   "l": "Une VM de VNet2 peut résoudre le nom d'une VM de VNet1 dans corp.local.",
   "a": 0
  },
  {
   "l": "Une VM de VNet2 peut se connecter à une VM de VNet1 grâce à la zone privée.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Enregistrements de VNet2 : Non</b>, l'inscription automatique n'est pas activée sur son lien.</li><li><b>Résolution : Oui.</b> Un lien de résolution suffit pour interroger la zone.</li><li><b>Connexion : Non.</b> Le DNS donne une adresse, mais sans appairage ni VPN, il n'y a pas de chemin réseau entre les deux réseaux.</li></ul>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "corp.local"
  ],
  "title": "corp.local | Liens de réseau virtuel",
  "menu": [
   "*Liens de réseau virtuel"
  ],
  "rows": [
   [
    "VNet1",
    "Inscription : activée"
   ],
   [
    "*VNet2",
    "Inscription : désactivée (résolution seule)"
   ]
  ]
 },
 "keep": "Lien sans inscription = résolution seule ; le DNS ne crée pas de chemin réseau."
},
{
 "id": "D4-064",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type d'enregistrement DNS adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types",
 "tgtHead": [
  "Besoin",
  "Type"
 ],
 "srcs": [
  "A",
  "CNAME",
  "MX",
  "TXT",
  "NS"
 ],
 "tgts": [
  {
   "l": "Associer www.contoso.com à l'adresse IPv4 52.1.2.3",
   "a": 0
  },
  {
   "l": "Faire de shop.contoso.com un alias de contoso.azurewebsites.net",
   "a": 1
  },
  {
   "l": "Indiquer le serveur de messagerie du domaine",
   "a": 2
  },
  {
   "l": "Prouver la propriété du domaine à un service tiers",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>A</b> : nom vers adresse IPv4 (AAAA pour IPv6).</li><li><b>CNAME</b> : nom vers un autre nom.</li><li><b>MX</b> : serveurs de messagerie.</li><li><b>TXT</b> : texte libre, utilisé pour la vérification de domaine et SPF.</li></ul><p><b>NS</b> désigne les serveurs de noms d'une zone (délégation).</p>",
 "portal": {
  "path": [
   "Zones DNS",
   "contoso.com"
  ],
  "title": "Jeux d'enregistrements",
  "rows": [
   [
    "*A",
    "www → 52.1.2.3"
   ],
   [
    "CNAME",
    "shop → contoso.azurewebsites.net"
   ],
   [
    "MX",
    "Messagerie"
   ],
   [
    "TXT",
    "Vérification"
   ]
  ]
 },
 "keep": "A = IP ; CNAME = alias ; MX = messagerie ; TXT = vérification ; NS = délégation."
}
);
