/* Domaine 4 : réseau virtuel (lot B : D4-010 à D4-064) */
AZ.questions.push(
{
 "id": "D4-010",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous créez dans VNet1 le sous-réseau Subnet4 avec la plage <b>10.1.4.0/28</b>.</p><p>Combien d'adresses IP pouvez-vous attribuer à des ressources dans Subnet4 ?</p>",
 "opts": [
  "11",
  "14",
  "16",
  "13"
 ],
 "ans": 0,
 "expl": "<p>Un /28 contient 2<sup>4</sup> = <b>16</b> adresses. Azure en réserve <b>5</b> dans chaque sous-réseau : la première (adresse réseau, .0), les trois suivantes (.1 passerelle par défaut, .2 et .3 pour le DNS Azure) et la dernière (.15, diffusion). Il reste 16 − 5 = <b>11</b> adresses.</p><p>14 serait le calcul classique hors Azure (16 − 2).</p>",
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
    "*Subnet4",
    "10.1.4.0/28 · 11 adresses disponibles"
   ]
  ],
  "btn": "+ Sous-réseau"
 },
 "keep": "/28 = 16 − 5 = 11 adresses utilisables."
},
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
 "id": "D4-012",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez créer le plus petit sous-réseau possible dans un réseau virtuel Azure.</p><p>Quelle taille de préfixe est la plus petite autorisée ?</p>",
 "opts": [
  "/29",
  "/30",
  "/31",
  "/32"
 ],
 "ans": 0,
 "expl": "<p>Le plus petit sous-réseau autorisé en IPv4 est un <b>/29</b> : 8 adresses, dont 5 réservées, soit 3 utilisables. Le plus grand est un /2. Les /30, /31 et /32 sont refusés.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "Ajouter un sous-réseau",
  "rows": [
   [
    "*Taille minimale",
    "/29 (3 adresses utilisables)"
   ],
   [
    "Taille maximale",
    "/2"
   ]
  ]
 },
 "keep": "Plus petit sous-réseau IPv4 = /29."
},
{
 "id": "D4-013",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer le nom exact et la taille minimale recommandée des sous-réseaux dédiés.</p><p>Pour répondre, faites glisser la valeur appropriée vers chaque service. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Sous-réseaux",
 "srcs": [
  "GatewaySubnet, /27",
  "AzureBastionSubnet, /26",
  "AzureFirewallSubnet, /26",
  "AppGatewaySubnet, /24"
 ],
 "tgtHead": [
  "Service",
  "Sous-réseau"
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
 "id": "D4-014",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1 (10.0.0.0/16) est appairé à VNet2 (10.1.0.0/16). Vous devez ajouter l'espace d'adressage 10.2.0.0/16 à VNet1.</p><p>Que devez-vous faire après l'ajout ?</p>",
 "opts": [
  "Créer une passerelle VPN",
  "Synchroniser l'appairage pour que VNet2 connaisse le nouvel espace",
  "Rien : l'appairage est mis à jour automatiquement sans action",
  "Supprimer puis recréer l'appairage dans tous les cas"
 ],
 "ans": 1,
 "expl": "<p>On peut modifier l'espace d'adressage d'un réseau virtuel appairé. Ensuite, l'appairage passe à l'état « synchronisation requise » : il faut lancer une <b>synchronisation</b> (bouton Synchroniser ou <code>Sync-AzVirtualNetworkPeering</code>) pour que le réseau distant apprenne le nouvel espace.</p><p>Il n'est plus nécessaire de supprimer et recréer l'appairage.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | Peerings",
  "menu": [
   "Espace d'adressage",
   "*Peerings"
  ],
  "rows": [
   [
    "vnet1-vers-vnet2",
    "Synchronisation requise"
   ]
  ],
  "btn": "Synchroniser"
 },
 "keep": "Espace d'adressage modifié sur un VNet appairé = synchroniser l'appairage."
},
{
 "id": "D4-015",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez appairer VNet3 (10.10.0.0/16) avec VNet4 (10.10.128.0/17).</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "L'appairage fonctionne normalement",
  "L'appairage fonctionne, mais seulement dans un sens",
  "L'appairage est impossible car les espaces d'adressage se chevauchent",
  "L'appairage fonctionne si les deux réseaux sont dans la même région"
 ],
 "ans": 2,
 "expl": "<p>10.10.128.0/17 est inclus dans 10.10.0.0/16 : les espaces <b>se chevauchent</b>. Deux réseaux virtuels qui se chevauchent ne peuvent pas être appairés (ni reliés par VPN sans NAT). Il faut planifier des plages distinctes dès le départ.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet3"
  ],
  "title": "Ajouter un peering",
  "rows": [
   [
    "*Erreur",
    "Les espaces d'adressage se chevauchent (10.10.0.0/16 ⊃ 10.10.128.0/17)"
   ]
  ]
 },
 "keep": "Espaces qui se chevauchent = pas d'appairage."
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
 "id": "D4-017",
 "dom": 4,
 "type": "single",
 "stem": "<p>Dans une topologie hub-and-spoke, le hub VNet-Hub contient une passerelle VPN vers le site local. Les spokes VNet-S1 et VNet-S2 doivent joindre le site local par cette passerelle.</p><p>Quels réglages d'appairage devez-vous activer ?</p>",
 "opts": [
  "« Autoriser le trafic transféré » uniquement",
  "« Utiliser la passerelle distante » sur le hub, et « Autoriser le transit de passerelle » sur les spokes",
  "Aucun : l'appairage le permet par défaut",
  "« Autoriser le transit de passerelle » sur les appairages du hub, et « Utiliser la passerelle distante » sur les appairages des spokes"
 ],
 "ans": 3,
 "expl": "<p>Le réseau qui <b>possède</b> la passerelle (le hub) autorise le <b>transit de passerelle</b>. Les réseaux qui veulent l'<b>utiliser</b> (les spokes) activent <b>Utiliser la passerelle distante</b> (et ne doivent pas avoir leur propre passerelle). Le site local apprend alors les plages des spokes (via BGP ou en les ajoutant à la configuration locale).</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-Hub"
  ],
  "title": "VNet-Hub | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "*Hub",
    "Autoriser le transit de passerelle"
   ],
   [
    "*Spokes",
    "Utiliser la passerelle distante"
   ]
  ]
 },
 "keep": "Hub = transit de passerelle ; spokes = passerelle distante."
},
{
 "id": "D4-018",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet-Spoke1 et VNet-Spoke2 sont appairés à VNet-Hub, qui contient une appliance virtuelle réseau (NVA) à l'adresse 10.0.1.4. Vous voulez que Spoke1 et Spoke2 communiquent en passant par la NVA.</p><p>Quelle combinaison de configuration est nécessaire ?</p>",
 "opts": [
  "Des tables de routage dans les spokes avec le saut suivant Appliance virtuelle 10.0.1.4, « Autoriser le trafic transféré » sur les appairages, et le transfert IP sur l'interface réseau de la NVA",
  "Un appairage transitif activé sur le hub",
  "Une passerelle NAT dans le hub",
  "Un équilibreur de charge public dans chaque spoke"
 ],
 "ans": 0,
 "expl": "<ul><li>Des <b>itinéraires définis par l'utilisateur</b> dans chaque spoke envoient le trafic de l'autre spoke vers la NVA.</li><li><b>Autoriser le trafic transféré</b> sur les appairages accepte le trafic qui ne provient pas directement du réseau appairé.</li><li>Le <b>transfert IP</b> sur l'interface réseau de la NVA (et dans son système) lui permet de router des paquets qui ne lui sont pas destinés.</li></ul><p>« Appairage transitif » n'existe pas.</p>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT-Spoke1"
  ],
  "title": "RT-Spoke1 | Itinéraires",
  "menu": [
   "*Itinéraires"
  ],
  "rows": [
   [
    "*Vers Spoke2 (10.2.0.0/16)",
    "Appliance virtuelle · 10.0.1.4"
   ],
   [
    "Appairages",
    "Autoriser le trafic transféré"
   ],
   [
    "NVA",
    "Transfert IP activé"
   ]
  ]
 },
 "keep": "Spoke-to-spoke via NVA : routes UDR + trafic transféré + transfert IP."
},
{
 "id": "D4-019",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1 est en France Central et VNet2 en Japan East. Les VM des deux réseaux doivent communiquer par le réseau Microsoft, avec une latence faible, sans passerelle.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une passerelle VPN de réseau à réseau",
  "Un appairage de réseaux virtuels mondial",
  "Une passerelle NAT",
  "Un équilibreur de charge"
 ],
 "ans": 1,
 "expl": "<p>L'<b>appairage mondial</b> relie des réseaux virtuels de <b>régions différentes</b> par le réseau principal de Microsoft, sans passerelle ni chiffrement IPsec, avec une faible latence. Le trafic entre régions est facturé (entrée et sortie).</p><p>Un VPN de réseau à réseau fonctionnerait aussi, mais avec une passerelle, une bande passante limitée et plus de latence.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "Ajouter un peering",
  "rows": [
   [
    "*Réseau distant",
    "VNet2 (Japan East)"
   ],
   [
    "Type",
    "Appairage mondial"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "Régions différentes, sans passerelle = appairage mondial."
},
{
 "id": "D4-020",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous créez un appairage de VNet1 vers VNet2, mais pas l'appairage de VNet2 vers VNet1.</p><p>Quel est l'état de l'appairage sur VNet1 ?</p>",
 "opts": [
  "Déconnecté",
  "Synchronisé",
  "Lancé (Initiated)",
  "Connecté"
 ],
 "ans": 2,
 "expl": "<p>Un appairage a deux liens, un dans chaque réseau. Après la création du premier lien, l'état est <b>Lancé</b> (Initiated). Il passe à <b>Connecté</b> quand le second lien est créé. Le portail crée généralement les deux liens en une opération. L'état <b>Déconnecté</b> apparaît si un des liens est supprimé.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "*vnet1-vers-vnet2",
    "Lancé (Initiated)"
   ]
  ]
 },
 "keep": "Lancé = un seul lien ; Connecté = les deux ; Déconnecté = un lien supprimé."
},
{
 "id": "D4-021",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1 est dans l'abonnement Sub1 (locataire Contoso) et VNet2 dans l'abonnement Sub2 (locataire Fabrikam).</p><p>Pouvez-vous appairer ces deux réseaux virtuels ?</p>",
 "opts": [
  "Non, l'appairage n'est possible que dans le même locataire",
  "Oui, mais seulement avec une passerelle VPN",
  "Non, l'appairage n'est possible que dans le même abonnement",
  "Oui, l'appairage entre abonnements et entre locataires est pris en charge, avec les autorisations nécessaires des deux côtés"
 ],
 "ans": 3,
 "expl": "<p>L'appairage fonctionne entre <b>abonnements</b> et même entre <b>locataires</b> Microsoft Entra. L'administrateur de chaque côté doit avoir le droit de créer le lien d'appairage (par exemple Contributeur de réseau), souvent avec un compte invité dans l'autre locataire.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "Ajouter un peering",
  "rows": [
   [
    "*Je connais l'ID de ressource",
    "Coché"
   ],
   [
    "ID de ressource",
    "/subscriptions/<Sub2>/…/VNet2 (locataire Fabrikam)"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "Appairage entre abonnements et locataires = possible, avec les droits des deux côtés."
},
{
 "id": "D4-022",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez configurer une connexion VPN site à site entre VNet1 et le site local de Lyon.</p><p>Pour répondre, faites glisser la ressource appropriée vers chaque information. Chaque ressource peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Ressources",
 "srcs": [
  "Passerelle de réseau virtuel",
  "Passerelle de réseau local",
  "Connexion",
  "GatewaySubnet"
 ],
 "tgtHead": [
  "Information",
  "Ressource"
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
 ],
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
 "keep": "S2S : GatewaySubnet → passerelle → passerelle locale → connexion."
},
{
 "id": "D4-024",
 "dom": 4,
 "type": "single",
 "stem": "<p>Votre passerelle VPN doit relier VNet1 à 3 sites locaux en même temps, et accepter des connexions point à site.</p><p>Quel type de VPN devez-vous choisir pour la passerelle ?</p>",
 "opts": [
  "Basé sur les routes (route-based)",
  "ExpressRoute",
  "Statique",
  "Basé sur les stratégies (policy-based)"
 ],
 "ans": 0,
 "expl": "<p>Le type <b>basé sur les routes</b> prend en charge plusieurs connexions site à site, le point à site, le réseau à réseau, BGP et la coexistence avec ExpressRoute. C'est le choix par défaut.</p><p>Le type <b>basé sur les stratégies</b> ne permet qu'un seul tunnel site à site (SKU De base) et pas de point à site. Il est réservé à d'anciens périphériques.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "Créer"
  ],
  "title": "Créer une passerelle de réseau virtuel",
  "rows": [
   [
    "*Type de VPN",
    "Basé sur les routes"
   ],
   [
    "Basé sur les stratégies",
    "1 tunnel, pas de P2S"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Plusieurs sites, P2S, BGP = basé sur les routes."
},
{
 "id": "D4-025",
 "dom": 4,
 "type": "single",
 "stem": "<p>Des employés en télétravail doivent se connecter à VNet1 depuis leur ordinateur portable, depuis n'importe où, avec leur compte Microsoft Entra.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "ExpressRoute",
  "Un VPN point à site sur la passerelle VPN, avec le type de tunnel OpenVPN et l'authentification Microsoft Entra ID",
  "Un appairage de réseaux virtuels",
  "Un VPN site à site vers chaque domicile"
 ],
 "ans": 1,
 "expl": "<p>Le <b>VPN point à site</b> relie un ordinateur à un réseau virtuel. On définit un <b>pool d'adresses clients</b>, le type de tunnel et l'authentification. L'authentification <b>Microsoft Entra ID</b> exige le type de tunnel <b>OpenVPN</b> et le client Azure VPN.</p><p>Le site à site relie des réseaux (un périphérique VPN par site). ExpressRoute est un circuit privé d'entreprise.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VNet1-GW"
  ],
  "title": "VNet1-GW | Configuration de point à site",
  "menu": [
   "*Configuration de point à site"
  ],
  "rows": [
   [
    "Pool d'adresses",
    "172.16.201.0/24"
   ],
   [
    "*Type de tunnel",
    "OpenVPN (SSL)"
   ],
   [
    "*Type d'authentification",
    "Microsoft Entra ID"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Télétravail avec compte Entra = P2S, OpenVPN, authentification Entra ID."
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
 "id": "D4-027",
 "dom": 4,
 "type": "single",
 "stem": "<p>Votre entreprise veut une connexion privée entre son centre de données et Azure, qui ne passe pas par Internet, avec une bande passante garantie de 1 Gbit/s et un SLA.</p><p>Que devez-vous recommander ?</p>",
 "opts": [
  "Un VPN point à site",
  "Un VPN site à site",
  "Azure ExpressRoute",
  "Un appairage mondial"
 ],
 "ans": 2,
 "expl": "<p><b>ExpressRoute</b> est un circuit privé fourni par un opérateur partenaire : il ne passe pas par Internet, offre une bande passante dédiée (de 50 Mbit/s à 100 Gbit/s) et un SLA. On le connecte au réseau virtuel par une passerelle de type ExpressRoute.</p><p>Le VPN site à site passe par Internet (chiffré par IPsec).</p>",
 "portal": {
  "path": [
   "Circuits ExpressRoute",
   "Créer"
  ],
  "title": "Créer un circuit ExpressRoute",
  "rows": [
   [
    "*Fournisseur",
    "Orange Business"
   ],
   [
    "Bande passante",
    "1 Gbit/s"
   ],
   [
    "Emplacement de peering",
    "Paris"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Privé, sans Internet, bande passante garantie + SLA = ExpressRoute."
},
{
 "id": "D4-028",
 "dom": 4,
 "type": "single",
 "stem": "<p>Votre site local est relié à VNet1 par ExpressRoute. Vous voulez une connexion de secours automatique si le circuit tombe.</p><p>Que devez-vous ajouter ?</p>",
 "opts": [
  "Un équilibreur de charge",
  "Un second appairage",
  "Une passerelle NAT",
  "Une passerelle VPN site à site dans le même réseau virtuel (coexistence ExpressRoute et VPN)"
 ],
 "ans": 3,
 "expl": "<p>Une passerelle <b>VPN</b> et une passerelle <b>ExpressRoute</b> peuvent coexister dans le même GatewaySubnet. Le VPN site à site sert de chemin de <b>secours</b> : ExpressRoute est préféré tant qu'il est disponible.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | GatewaySubnet",
  "rows": [
   [
    "*Passerelle ExpressRoute",
    "Principale"
   ],
   [
    "*Passerelle VPN",
    "Secours (coexistence)"
   ]
  ]
 },
 "keep": "Secours d'ExpressRoute = VPN site à site dans le même GatewaySubnet."
},
{
 "id": "D4-029",
 "dom": 4,
 "type": "single",
 "stem": "<p>La passerelle VPN de VNet1 doit rester disponible même si une instance de passerelle est en maintenance, avec deux tunnels actifs vers le site local.</p><p>Quelle configuration devez-vous activer ?</p>",
 "opts": [
  "Le mode actif-actif",
  "Une seconde passerelle dans un autre GatewaySubnet du même réseau virtuel",
  "Le SKU De base",
  "Le mode basé sur les stratégies"
 ],
 "ans": 0,
 "expl": "<p>Par défaut, une passerelle VPN fonctionne en <b>actif-passif</b> : une instance de secours prend le relais en cas de problème, avec une courte interruption. En <b>actif-actif</b>, les deux instances ont chacune une adresse IP publique et établissent chacune un tunnel : pas d'interruption lors d'une maintenance.</p><p>Un réseau virtuel ne peut avoir qu'un GatewaySubnet et une seule passerelle VPN.</p>",
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
    "*Mode actif-actif",
    "Activé"
   ],
   [
    "Adresses IP publiques",
    "2"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Pas d'interruption en maintenance = passerelle actif-actif."
},
{
 "id": "D4-030",
 "dom": 4,
 "type": "single",
 "stem": "<p>La connexion VPN site à site entre VNet1 et le site de Nantes affiche l'état <b>Non connecté</b>. Le pare-feu local est bien configuré.</p><p>Quel outil devez-vous utiliser pour diagnostiquer la connexion ?</p>",
 "opts": [
  "Azure Advisor",
  "Network Watcher : Résolution des problèmes de VPN",
  "Les diagnostics de démarrage",
  "L'analyse des coûts"
 ],
 "ans": 1,
 "expl": "<p>La <b>résolution des problèmes de VPN</b> de Network Watcher analyse la passerelle et la connexion, et produit un rapport (journaux IKE, erreurs de clé partagée ou de paramètres de stratégie). Les causes fréquentes : clé partagée différente, mauvaise adresse IP publique ou plages d'adresses dans la passerelle de réseau local.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Network Watcher | Résolution des problèmes de VPN",
  "menu": [
   "*Résolution des problèmes de VPN"
  ],
  "rows": [
   [
    "*Ressource",
    "Connexion VNet1-Nantes"
   ],
   [
    "Résultat",
    "Clé partagée incorrecte"
   ]
  ],
  "btn": "Démarrer la résolution des problèmes"
 },
 "keep": "Diagnostiquer un VPN = Network Watcher, résolution des problèmes de VPN."
},
{
 "id": "D4-031",
 "dom": 4,
 "type": "single",
 "stem": "<p>Le périphérique VPN du site de Rennes change d'adresse IP publique.</p><p>Quelle ressource Azure devez-vous mettre à jour ?</p>",
 "opts": [
  "La table de routage de VNet1",
  "Le GatewaySubnet",
  "La passerelle de réseau local de Rennes",
  "La passerelle de réseau virtuel"
 ],
 "ans": 2,
 "expl": "<p>La <b>passerelle de réseau local</b> contient l'adresse IP publique (ou le FQDN) du périphérique local et ses plages d'adresses. On la met à jour quand l'un ou l'autre change. On peut aussi utiliser un FQDN pour un site à adresse dynamique.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau local",
   "LNG-Rennes"
  ],
  "title": "LNG-Rennes | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Adresse IP",
    "Nouvelle adresse publique"
   ],
   [
    "Espace d'adressage",
    "Plages de Rennes"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Infos du site local (IP, plages) = passerelle de réseau local."
},
{
 "id": "D4-032",
 "dom": 4,
 "type": "single",
 "stem": "<p>Le site local de Toulouse ajoute un nouveau réseau 192.168.50.0/24. Les VM de VNet1 ne peuvent pas le joindre par le VPN site à site existant (sans BGP).</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Créer un appairage",
  "Ajouter 192.168.50.0/24 à l'espace d'adressage de VNet1",
  "Changer le SKU de la passerelle",
  "Ajouter 192.168.50.0/24 aux préfixes d'adresses de la passerelle de réseau local de Toulouse"
 ],
 "ans": 3,
 "expl": "<p>Sans BGP, Azure ne connaît les réseaux du site local que par la liste de <b>préfixes</b> de la passerelle de réseau local. Il faut y ajouter le nouveau réseau. Avec BGP, il serait appris automatiquement.</p><p>Ajouter cette plage à VNet1 créerait un chevauchement.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau local",
   "LNG-Toulouse"
  ],
  "title": "LNG-Toulouse | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Espace d'adressage",
    "+ 192.168.50.0/24"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Nouveau réseau local sans BGP = l'ajouter à la passerelle de réseau local."
},
{
 "id": "D4-033",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous créez une table de routage RT1 avec l'itinéraire 0.0.0.0/0, saut suivant <b>Appliance virtuelle</b> 10.0.2.4. Vous associez RT1 à Subnet1.</p><p>Que se passe-t-il pour le trafic Internet sortant des VM de Subnet1 ?</p>",
 "opts": [
  "Il est envoyé vers l'appliance 10.0.2.4",
  "Il sort directement vers Internet",
  "Il est envoyé vers la passerelle VPN",
  "Il est bloqué"
 ],
 "ans": 0,
 "expl": "<p>Un itinéraire défini par l'utilisateur remplace l'itinéraire système par défaut 0.0.0.0/0 → Internet. Tout trafic qui ne correspond pas à un itinéraire plus précis (comme celui du réseau virtuel) part vers l'<b>appliance</b>, souvent un pare-feu, qui doit avoir le transfert IP activé.</p>",
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
    "Appliance virtuelle · 10.0.2.4"
   ]
  ]
 },
 "keep": "UDR 0.0.0.0/0 → appliance = tout l'Internet passe par le pare-feu."
},
{
 "id": "D4-034",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous créez des itinéraires dans une table de routage. Vous devez choisir le type de saut suivant adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de saut suivant",
 "srcs": [
  "Appliance virtuelle",
  "Passerelle de réseau virtuel",
  "Internet",
  "Aucun",
  "Réseau virtuel"
 ],
 "tgtHead": [
  "Besoin",
  "Saut suivant"
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
 "id": "D4-035",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une table de routage RT2 est associée à Subnet2. Vous voulez qu'elle s'applique aussi aux VM de Subnet3.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Associer RT2 à l'interface réseau de chaque VM",
  "Associer RT2 à Subnet3",
  "Créer une copie de RT2 pour Subnet3 obligatoirement",
  "Associer RT2 au réseau virtuel"
 ],
 "ans": 1,
 "expl": "<p>Une table de routage s'associe à des <b>sous-réseaux</b>, et une même table peut être associée à <b>plusieurs</b> sous-réseaux (de réseaux virtuels de la même région et du même abonnement). Elle ne s'associe ni aux interfaces réseau ni au réseau virtuel entier.</p><p>Un sous-réseau, lui, n'a qu'<b>une</b> table de routage à la fois.</p>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT2"
  ],
  "title": "RT2 | Sous-réseaux",
  "menu": [
   "Itinéraires",
   "*Sous-réseaux"
  ],
  "rows": [
   [
    "Subnet2",
    "Associé"
   ],
   [
    "*Subnet3",
    "+ Associer"
   ]
  ]
 },
 "keep": "Une table peut servir plusieurs sous-réseaux ; un sous-réseau = une table."
},
{
 "id": "D4-036",
 "dom": 4,
 "type": "single",
 "stem": "<p>VM1 de Subnet1 n'arrive pas à joindre 10.20.1.10. Vous voulez savoir quel itinéraire est réellement appliqué à son interface réseau, en combinant les itinéraires système, BGP et définis par l'utilisateur.</p><p>Que devez-vous consulter ?</p>",
 "opts": [
  "Les métriques de VM1",
  "Le journal d'activité",
  "Les itinéraires effectifs de l'interface réseau de VM1 (ou Network Watcher : Tronçon suivant)",
  "Les règles de sécurité effectives uniquement"
 ],
 "ans": 2,
 "expl": "<p>Les <b>itinéraires effectifs</b> d'une interface réseau listent tous les itinéraires appliqués et indiquent lesquels sont actifs. <b>Tronçon suivant</b> (Next hop) de Network Watcher donne directement le saut suivant et la table de routage utilisés pour une destination précise.</p><p>Les règles de sécurité effectives concernent les NSG, pas le routage.</p>",
 "portal": {
  "path": [
   "Interfaces réseau",
   "vm1-nic"
  ],
  "title": "vm1-nic | Itinéraires effectifs",
  "menu": [
   "*Itinéraires effectifs",
   "Règles de sécurité effectives"
  ],
  "rows": [
   [
    "10.0.0.0/16",
    "Réseau virtuel · Actif"
   ],
   [
    "*10.20.0.0/16",
    "Aucun itinéraire"
   ]
  ]
 },
 "keep": "Quel itinéraire s'applique = itinéraires effectifs (ou Tronçon suivant)."
},
{
 "id": "D4-037",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une table de routage contient deux itinéraires : 10.0.0.0/8 → Appliance virtuelle 10.1.0.4, et 10.2.0.0/16 → Passerelle de réseau virtuel.</p><p>Par où part un paquet vers 10.2.5.20 ?</p>",
 "opts": [
  "Vers l'appliance 10.1.0.4",
  "Vers Internet",
  "Il est abandonné",
  "Vers la passerelle de réseau virtuel"
 ],
 "ans": 3,
 "expl": "<p>Azure choisit l'itinéraire avec le <b>préfixe le plus long</b> (le plus précis) qui correspond à la destination. 10.2.5.20 correspond à /8 et à /16 ; le /16 est plus précis, donc le paquet part vers la <b>passerelle</b>.</p><p>À préfixe égal, l'ordre de préférence est : itinéraire défini par l'utilisateur, puis BGP, puis système.</p>",
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
    "10.0.0.0/8",
    "Appliance · 10.1.0.4"
   ],
   [
    "*10.2.0.0/16",
    "Passerelle (préfixe le plus long)"
   ]
  ]
 },
 "keep": "Préfixe le plus long gagne ; à égalité : UDR > BGP > système."
},
{
 "id": "D4-038",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM de Subnet-App doivent toujours passer par le Pare-feu Azure, même pour les réseaux du site local appris par BGP depuis la passerelle VPN.</p><p>Quel réglage de la table de routage devez-vous configurer ?</p>",
 "opts": [
  "Désactiver la propagation des itinéraires de passerelle (Propager les itinéraires de passerelle : Non)",
  "Activer la mise en réseau accélérée",
  "Augmenter la priorité des itinéraires",
  "Activer le transfert IP"
 ],
 "ans": 0,
 "expl": "<p>Avec <b>Propager les itinéraires de passerelle</b> à Non, les itinéraires appris par BGP (et les plages du site local) ne sont pas ajoutés aux sous-réseaux associés à la table. Seuls vos itinéraires (par exemple 0.0.0.0/0 et les plages locales vers le pare-feu) s'appliquent.</p><p>Les itinéraires n'ont pas de priorité numérique.</p>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT-App"
  ],
  "title": "RT-App | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Propager les itinéraires de passerelle",
    "Non"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Ignorer les routes BGP de la passerelle = Propager les itinéraires de passerelle : Non."
},
{
 "id": "D4-039",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous déployez une VM Linux qui sert de routeur entre deux sous-réseaux. Les paquets qui ne lui sont pas destinés sont abandonnés par Azure.</p><p>Que devez-vous activer dans Azure ?</p>",
 "opts": [
  "La mise en réseau accélérée",
  "Le transfert IP sur l'interface réseau de la VM",
  "Un groupe de sécurité réseau",
  "Une adresse IP publique"
 ],
 "ans": 1,
 "expl": "<p>Par défaut, Azure abandonne les paquets dont l'adresse de destination n'est pas celle de l'interface réseau. Le <b>transfert IP</b> sur l'interface réseau lève cette restriction. Il faut aussi activer le routage dans le système d'exploitation (par exemple <code>net.ipv4.ip_forward=1</code>).</p>",
 "portal": {
  "path": [
   "Interfaces réseau",
   "router-nic"
  ],
  "title": "router-nic | Configurations IP",
  "menu": [
   "*Configurations IP"
  ],
  "rows": [
   [
    "*Transfert IP",
    "Activé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "VM qui route = transfert IP (Azure + OS)."
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
 "id": "D4-041",
 "dom": 4,
 "type": "single",
 "stem": "<p>NSG-Sub est associé à Subnet1 et autorise le RDP entrant depuis Internet. NSG-NIC est associé à l'interface réseau de VM3, dans Subnet1, et ne contient que les règles par défaut.</p><p>Un administrateur peut-il se connecter en RDP à VM3 depuis Internet ?</p>",
 "opts": [
  "Non, car un sous-réseau ne peut pas avoir de NSG",
  "Oui, car le NSG de l'interface réseau est ignoré",
  "Non, car le trafic entrant doit être autorisé par les deux NSG",
  "Oui, car le NSG du sous-réseau l'autorise"
 ],
 "ans": 2,
 "expl": "<p>Pour le trafic <b>entrant</b>, Azure évalue d'abord le NSG du <b>sous-réseau</b>, puis celui de l'<b>interface réseau</b>. Le trafic doit être autorisé par <b>les deux</b>. NSG-NIC n'a que les règles par défaut, dont <b>DenyAllInBound</b> (65500) qui refuse le RDP depuis Internet.</p><p>Pour le trafic sortant, l'ordre est inversé : interface réseau puis sous-réseau.</p>",
 "portal": {
  "path": [
   "Interfaces réseau",
   "vm3-nic"
  ],
  "title": "vm3-nic | Règles de sécurité effectives",
  "menu": [
   "*Règles de sécurité effectives"
  ],
  "rows": [
   [
    "NSG-Sub",
    "RDP Internet · Autoriser"
   ],
   [
    "*NSG-NIC",
    "DenyAllInBound · Refuser"
   ]
  ]
 },
 "keep": "Entrant : NSG sous-réseau puis NSG carte ; il faut autoriser des deux côtés."
},
{
 "id": "D4-042",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer la priorité de chaque règle de sécurité par défaut d'un NSG.</p><p>Pour répondre, faites glisser la priorité appropriée vers chaque règle. Chaque priorité peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Priorités",
 "srcs": [
  "65000",
  "65001",
  "65500",
  "4096"
 ],
 "tgtHead": [
  "Règle par défaut (entrante)",
  "Priorité"
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
 "id": "D4-044",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez autoriser les VM web à joindre les VM de base de données sur le port 1433, sans utiliser d'adresses IP dans les règles. Les deux groupes de VM sont dans le même réseau virtuel et leurs adresses changent souvent.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Des itinéraires définis par l'utilisateur",
  "Des étiquettes de service",
  "Des étiquettes de ressource Azure",
  "Des groupes de sécurité d'application (ASG-Web et ASG-SQL) comme source et destination de la règle NSG"
 ],
 "ans": 3,
 "expl": "<p>Un <b>groupe de sécurité d'application</b> regroupe des interfaces réseau. On écrit la règle avec les ASG comme source et destination (« ASG-Web vers ASG-SQL sur 1433 ») ; ajouter une VM au groupe suffit, sans toucher aux règles. Les interfaces réseau d'un ASG doivent être dans le même réseau virtuel.</p><p>Les étiquettes de service représentent des services Azure (Storage, Sql…), pas vos VM.</p>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG-App"
  ],
  "title": "Ajouter une règle de sécurité de trafic entrant",
  "rows": [
   [
    "*Source",
    "Groupe de sécurité d'application : ASG-Web"
   ],
   [
    "*Destination",
    "Groupe de sécurité d'application : ASG-SQL"
   ],
   [
    "Port",
    "1433"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "Règles par rôle de VM, sans IP = groupes de sécurité d'application."
},
{
 "id": "D4-045",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM de Subnet-App doivent pouvoir joindre tous les comptes de stockage Azure de la région France Central, et rien d'autre sur Internet.</p><p>Comment devez-vous écrire les règles sortantes du NSG ?</p>",
 "opts": [
  "Autoriser la destination de l'étiquette de service Storage.FranceCentral, puis refuser la destination Internet avec une priorité moins élevée",
  "Autoriser 0.0.0.0/0 vers le port 443",
  "Autoriser la destination VirtualNetwork uniquement",
  "Refuser l'étiquette Storage"
 ],
 "ans": 0,
 "expl": "<p>Une <b>étiquette de service</b> représente les plages d'adresses d'un service Azure, tenues à jour par Microsoft. <b>Storage.FranceCentral</b> limite à la région. On ajoute ensuite une règle qui <b>refuse Internet</b> avec un numéro de priorité plus grand, pour bloquer le reste (la règle par défaut AllowInternetOutBound l'autoriserait sinon).</p>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG-App"
  ],
  "title": "Règles de sécurité de trafic sortant",
  "rows": [
   [
    "*100",
    "Storage.FranceCentral · Autoriser"
   ],
   [
    "200",
    "Internet · Refuser"
   ]
  ]
 },
 "keep": "Destination = service Azure = étiquette de service (régionale si besoin)."
},
{
 "id": "D4-046",
 "dom": 4,
 "type": "single",
 "stem": "<p>Un administrateur n'arrive pas à joindre VM4 sur le port 22. Vous voulez savoir précisément quelle règle de NSG autorise ou bloque ce trafic, depuis son adresse IP.</p><p>Quel outil de Network Watcher devez-vous utiliser ?</p>",
 "opts": [
  "Moniteur de connexion",
  "Vérification du flux IP",
  "Tronçon suivant",
  "Capture de paquets"
 ],
 "ans": 1,
 "expl": "<p><b>Vérification du flux IP</b> simule un paquet (direction, protocole, adresses et ports) vers ou depuis une VM, et indique s'il est autorisé ou refusé, et par <b>quelle règle de NSG</b>.</p><p>Tronçon suivant concerne le routage. La capture de paquets enregistre le trafic réel. Le moniteur de connexion surveille la connectivité dans le temps.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Vérification du flux IP",
  "menu": [
   "*Vérification du flux IP"
  ],
  "rows": [
   [
    "VM",
    "VM4 · TCP 22 · entrant"
   ],
   [
    "*Résultat",
    "Refusé · règle DenyAllInBound"
   ]
  ],
  "btn": "Vérifier"
 },
 "keep": "Quelle règle NSG bloque = Vérification du flux IP."
},
{
 "id": "D4-047",
 "dom": 4,
 "type": "single",
 "stem": "<p>VM5 n'arrive pas à joindre un serveur du site local. Vous voulez tester la connexion TCP de bout en bout et voir à quel saut elle échoue (NSG, routage, ou serveur qui ne répond pas).</p><p>Quel outil devez-vous utiliser ?</p>",
 "opts": [
  "Le journal d'activité",
  "Vérification du flux IP uniquement",
  "Network Watcher : Résolution des problèmes de connexion",
  "Azure Advisor"
 ],
 "ans": 2,
 "expl": "<p>La <b>résolution des problèmes de connexion</b> (Connection troubleshoot) teste une connexion TCP ou ICMP depuis une VM vers une destination, affiche les sauts, la latence et la cause probable d'un échec (règle de NSG, itinéraire, destination injoignable).</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Résolution des problèmes de connexion",
  "menu": [
   "*Résolution des problèmes de connexion"
  ],
  "rows": [
   [
    "Source",
    "VM5"
   ],
   [
    "Destination",
    "192.168.10.20:443"
   ],
   [
    "*Résultat",
    "Inaccessible · saut 3"
   ]
  ],
  "btn": "Tester la connexion"
 },
 "keep": "Test de bout en bout avec les sauts = résolution des problèmes de connexion."
},
{
 "id": "D4-048",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez enregistrer tout le trafic IP accepté et refusé dans VNet1 pour une analyse de sécurité, et l'analyser avec Traffic Analytics.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "Les diagnostics de démarrage",
  "Le journal d'activité",
  "Une capture de paquets permanente",
  "Les journaux de flux de réseau virtuel (VNet flow logs) de Network Watcher, vers un compte de stockage, avec Traffic Analytics"
 ],
 "ans": 3,
 "expl": "<p>Les <b>journaux de flux</b> enregistrent les flux IP (source, destination, ports, décision). Les journaux de flux de <b>réseau virtuel</b> remplacent les journaux de flux de NSG (en cours de retrait). Ils sont écrits dans un compte de stockage, et <b>Traffic Analytics</b> les analyse dans Log Analytics.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Journaux de flux › Créer",
  "menu": [
   "*Journaux de flux"
  ],
  "rows": [
   [
    "*Type de flux",
    "Réseau virtuel (VNet1)"
   ],
   [
    "Stockage",
    "stflowlogs"
   ],
   [
    "Traffic Analytics",
    "Activé · Log Analytics"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Enregistrer et analyser les flux = journaux de flux VNet + Traffic Analytics."
},
{
 "id": "D4-049",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les administrateurs doivent se connecter en RDP et SSH aux VM de VNet1 depuis le portail Azure, en HTTPS, sans adresse IP publique sur les VM.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Azure Bastion dans AzureBastionSubnet",
  "Une passerelle NAT",
  "Un équilibreur de charge public",
  "Une adresse IP publique sur chaque VM"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Bastion</b> est un service managé déployé dans le sous-réseau <b>AzureBastionSubnet</b> (/26 minimum) avec une adresse IP publique Standard. Les administrateurs ouvrent la session RDP ou SSH dans le navigateur, en HTTPS (443), et les VM n'ont besoin que d'une adresse privée.</p>",
 "portal": {
  "path": [
   "Bastions",
   "Créer"
  ],
  "title": "Créer un Bastion",
  "rows": [
   [
    "Réseau virtuel",
    "VNet1"
   ],
   [
    "*Sous-réseau",
    "AzureBastionSubnet (/26)"
   ],
   [
    "Adresse IP publique",
    "Standard"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "RDP/SSH par le navigateur, sans IP publique sur les VM = Bastion."
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
 "id": "D4-051",
 "dom": 4,
 "type": "single",
 "stem": "<p>Bastion est déployé dans VNet-Hub. VNet-Spoke est appairé à VNet-Hub.</p><p>Pouvez-vous utiliser ce Bastion pour vous connecter aux VM de VNet-Spoke ?</p>",
 "opts": [
  "Non, il faut un Bastion par réseau virtuel",
  "Oui, Bastion fonctionne avec les réseaux virtuels appairés",
  "Non, sauf avec une passerelle VPN",
  "Oui, mais seulement avec le SKU Premium"
 ],
 "ans": 1,
 "expl": "<p>Azure Bastion prend en charge les <b>réseaux appairés</b> (y compris l'appairage mondial). Un seul Bastion dans le hub suffit pour toute une topologie hub-and-spoke, ce qui réduit les coûts.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM-Spoke1"
  ],
  "title": "VM-Spoke1 | Bastion",
  "menu": [
   "*Se connecter"
  ],
  "rows": [
   [
    "*Bastion",
    "Bastion-Hub (réseau appairé)"
   ]
  ],
  "btn": "Se connecter"
 },
 "keep": "Un Bastion dans le hub sert tous les spokes appairés."
},
{
 "id": "D4-052",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM de Subnet-Private n'ont pas d'adresse IP publique. Elles doivent accéder à Internet en sortie avec une ou plusieurs adresses IP publiques fixes, que des partenaires mettront en liste d'autorisation. Aucun trafic entrant ne doit être possible.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Une passerelle VPN",
  "Azure Bastion",
  "Une passerelle NAT associée à Subnet-Private",
  "Un équilibreur de charge public avec des règles entrantes"
 ],
 "ans": 2,
 "expl": "<p>La <b>passerelle NAT</b> fournit la connectivité <b>sortante</b> d'un ou plusieurs sous-réseaux par des adresses IP publiques (ou un préfixe) <b>Standard</b> statiques. Elle n'accepte pas de connexions entrantes non sollicitées. C'est la méthode recommandée pour la sortie Internet.</p>",
 "portal": {
  "path": [
   "Passerelles NAT",
   "Créer"
  ],
  "title": "Créer une passerelle NAT",
  "rows": [
   [
    "*IP sortante",
    "Adresse publique Standard (ou préfixe)"
   ],
   [
    "*Sous-réseau",
    "Subnet-Private"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Sortie Internet avec IP fixes, sans entrant = passerelle NAT."
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
 "id": "D4-054",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous créez une adresse IP publique pour un équilibreur de charge Standard.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "Une adresse Standard est ouverte à tout le trafic entrant par défaut",
  "Une adresse Standard ne peut être utilisée qu'avec une VM",
  "Une adresse IP publique Standard peut être dynamique",
  "Une adresse IP publique Standard est toujours statique"
 ],
 "ans": 3,
 "expl": "<p>Les adresses IP publiques <b>Standard</b> sont <b>toujours statiques</b>. Elles sont « sécurisées par défaut » : le trafic entrant est refusé tant qu'un NSG ne l'autorise pas. Elles prennent en charge les zones et sont requises par les équilibreurs Standard, les passerelles NAT et Bastion.</p><p>Le SKU De base (dynamique ou statique, ouvert par défaut) a été retiré en septembre 2025.</p>",
 "portal": {
  "path": [
   "Adresses IP publiques",
   "Créer"
  ],
  "title": "Créer une adresse IP publique",
  "rows": [
   [
    "SKU",
    "Standard"
   ],
   [
    "*Affectation",
    "Statique (seule option)"
   ],
   [
    "Entrant",
    "Fermé par défaut (NSG)"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "IP publique Standard = toujours statique, sécurisée par défaut."
},
{
 "id": "D4-055",
 "dom": 4,
 "type": "single",
 "stem": "<p>Une VM doit garder la même adresse IP <b>privée</b> même après un arrêt avec libération.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une affectation d'adresse privée Statique dans la configuration IP de l'interface réseau",
  "Une adresse IP publique statique",
  "Une réservation DHCP sur un serveur DNS",
  "Une adresse IP fixe dans les paramètres réseau de Windows"
 ],
 "ans": 0,
 "expl": "<p>Dans la configuration IP de l'<b>interface réseau</b>, l'affectation <b>Statique</b> réserve l'adresse privée pour l'interface, même après libération de la VM. Azure continue de la donner par DHCP.</p><p>Il ne faut <b>jamais</b> configurer l'adresse IP manuellement dans le système d'exploitation : on risque de perdre la connectivité.</p>",
 "portal": {
  "path": [
   "Interfaces réseau",
   "vm-nic"
  ],
  "title": "vm-nic | Configurations IP › ipconfig1",
  "rows": [
   [
    "*Affectation",
    "Statique"
   ],
   [
    "Adresse IP privée",
    "10.0.1.10"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "IP privée fixe = Statique sur l'interface réseau, jamais dans l'OS."
},
{
 "id": "D4-056",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez fournir à un partenaire une plage contiguë de 16 adresses IP publiques que vous utiliserez progressivement pour vos ressources.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Une passerelle NAT /28",
  "Un préfixe d'adresse IP publique /28",
  "Un sous-réseau /28",
  "16 adresses IP publiques dynamiques"
 ],
 "ans": 1,
 "expl": "<p>Un <b>préfixe d'adresse IP publique</b> réserve une plage contiguë d'adresses Standard (/28 = 16 adresses). On crée ensuite les adresses IP publiques à partir de ce préfixe. Le partenaire peut autoriser toute la plage d'un coup.</p>",
 "portal": {
  "path": [
   "Préfixes d'adresses IP publiques",
   "Créer"
  ],
  "title": "Créer un préfixe d'adresse IP publique",
  "rows": [
   [
    "*Taille du préfixe",
    "/28 (16 adresses)"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Plage publique contiguë = préfixe d'adresse IP publique."
},
{
 "id": "D4-057",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous devez héberger la zone DNS publique contoso.com dans Azure.</p><p>Que devez-vous faire après avoir créé la zone dans Azure DNS ?</p>",
 "opts": [
  "Créer un lien de réseau virtuel",
  "Créer un enregistrement PTR",
  "Mettre à jour les enregistrements NS chez le registraire du domaine avec les serveurs de noms Azure de la zone",
  "Activer l'inscription automatique"
 ],
 "ans": 2,
 "expl": "<p>Pour que la zone Azure fasse autorité, il faut <b>déléguer</b> le domaine : chez le registraire, on remplace les serveurs de noms par les 4 serveurs <b>NS</b> attribués à la zone Azure (ns1-xx.azure-dns.com, etc.).</p><p>Les liens de réseau virtuel et l'inscription automatique concernent les zones <b>privées</b>.</p>",
 "portal": {
  "path": [
   "Zones DNS",
   "contoso.com"
  ],
  "title": "contoso.com | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble",
   "Jeux d'enregistrements"
  ],
  "rows": [
   [
    "*Serveurs de noms",
    "ns1-04.azure-dns.com … ns4-04.azure-dns.info"
   ],
   [
    "Action",
    "Les déclarer chez le registraire"
   ]
  ]
 },
 "keep": "Zone publique Azure = déléguer (NS) chez le registraire."
},
{
 "id": "D4-058",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les VM de VNet1 doivent se trouver par leur nom, sous le suffixe <b>corp.contoso.local</b>, avec des enregistrements créés et supprimés automatiquement avec les VM.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Un enregistrement A par VM dans le fichier hosts",
  "Une zone DNS publique contoso.com",
  "Un serveur DNS personnalisé sur chaque VM",
  "Une zone DNS privée corp.contoso.local liée à VNet1 avec l'inscription automatique activée"
 ],
 "ans": 3,
 "expl": "<p>Une <b>zone DNS privée</b> n'est résolue que dans les réseaux virtuels liés. Avec l'<b>inscription automatique</b> sur le lien, Azure crée un enregistrement A pour chaque VM du réseau et le supprime quand la VM est supprimée.</p><p>Un réseau virtuel ne peut avoir l'inscription automatique que sur <b>une seule</b> zone privée, mais peut être lié à plusieurs zones pour la résolution.</p>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "corp.contoso.local"
  ],
  "title": "Ajouter un lien de réseau virtuel",
  "rows": [
   [
    "Réseau virtuel",
    "VNet1"
   ],
   [
    "*Activer l'inscription automatique",
    "Coché"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Noms internes automatiques = zone privée + lien + inscription automatique (1 zone par VNet)."
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
 "id": "D4-060",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous configurez VNet1 pour utiliser vos propres serveurs DNS (10.0.0.4 et 10.0.0.5) à la place du DNS fourni par Azure. Les VM existantes continuent d'utiliser l'ancien serveur.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Redémarrer les VM (ou renouveler le bail DHCP) pour qu'elles reçoivent les nouveaux serveurs DNS",
  "Modifier le fichier hosts de chaque VM",
  "Créer une zone DNS privée",
  "Supprimer et recréer les VM"
 ],
 "ans": 0,
 "expl": "<p>Les serveurs DNS sont transmis par <b>DHCP</b>. Les VM existantes ne prennent en compte le changement qu'après un <b>redémarrage</b> ou un renouvellement de bail (<code>ipconfig /renew</code>).</p><p>On peut aussi définir des serveurs DNS au niveau d'une interface réseau, ce qui prime sur ceux du réseau virtuel.</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | Serveurs DNS",
  "menu": [
   "*Serveurs DNS"
  ],
  "rows": [
   [
    "*Personnalisé",
    "10.0.0.4, 10.0.0.5"
   ],
   [
    "Prise en compte",
    "Redémarrage ou renouvellement DHCP"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Nouveau DNS du VNet = redémarrer les VM (DHCP)."
},
{
 "id": "D4-061",
 "dom": 4,
 "type": "single",
 "stem": "<p>Quelle est l'adresse IP virtuelle du service DNS fourni par Azure (et du service de métadonnées de la santé de la plateforme), joignable depuis toute VM ?</p>",
 "opts": [
  "168.63.129.16",
  "169.254.169.254",
  "8.8.8.8",
  "10.0.0.1"
 ],
 "ans": 0,
 "expl": "<p><b>168.63.129.16</b> est l'adresse IP virtuelle de la plateforme Azure : résolveur DNS fourni par Azure, sondes d'intégrité de l'équilibreur de charge, signal de l'agent de VM. Il ne faut pas la bloquer.</p><p><b>169.254.169.254</b> est le service de métadonnées d'instance (IMDS).</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "Adresses de la plateforme",
  "rows": [
   [
    "*168.63.129.16",
    "DNS Azure, sondes, agent"
   ],
   [
    "169.254.169.254",
    "IMDS"
   ]
  ]
 },
 "keep": "168.63.129.16 = IP virtuelle de la plateforme ; 169.254.169.254 = IMDS."
},
{
 "id": "D4-062",
 "dom": 4,
 "type": "single",
 "stem": "<p>Les serveurs DNS du site local doivent résoudre les noms d'une zone DNS privée Azure (privatelink.blob.core.windows.net), et les VM Azure doivent résoudre le domaine AD local, sans déployer de VM DNS.</p><p>Que devez-vous déployer ?</p>",
 "opts": [
  "Azure Bastion",
  "Azure DNS Private Resolver avec un point de terminaison entrant et un point de terminaison sortant (et des règles de transfert)",
  "Une passerelle NAT",
  "Une zone DNS publique"
 ],
 "ans": 1,
 "expl": "<p><b>Azure DNS Private Resolver</b> est un service managé. Son <b>point de terminaison entrant</b> reçoit les requêtes du site local (via un redirecteur conditionnel) et les résout avec les zones privées liées. Son <b>point de terminaison sortant</b>, avec un <b>jeu de règles de transfert</b>, envoie les requêtes du domaine local vers les DNS locaux.</p>",
 "portal": {
  "path": [
   "Résolveurs DNS privés",
   "Créer"
  ],
  "title": "Créer un résolveur DNS privé",
  "rows": [
   [
    "*Point de terminaison entrant",
    "Pour le site local"
   ],
   [
    "*Point de terminaison sortant",
    "+ jeu de règles de transfert vers l'AD local"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "DNS hybride sans VM = Azure DNS Private Resolver (entrant + sortant)."
},
{
 "id": "D4-063",
 "dom": 4,
 "type": "single",
 "stem": "<p>Le domaine racine contoso.com, hébergé dans Azure DNS, doit pointer vers le point de terminaison d'Azure Front Door. Un CNAME n'est pas autorisé à la racine d'une zone.</p><p>Quel type d'enregistrement devez-vous utiliser ?</p>",
 "opts": [
  "Un enregistrement TXT",
  "Un enregistrement MX",
  "Un enregistrement d'alias (alias record) vers la ressource Front Door",
  "Un enregistrement CNAME à la racine"
 ],
 "ans": 2,
 "expl": "<p>Les <b>jeux d'enregistrements d'alias</b> d'Azure DNS pointent vers une ressource Azure (adresse IP publique, profil Traffic Manager, point de terminaison Front Door ou CDN) et peuvent être utilisés à la <b>racine</b> de la zone. Ils suivent automatiquement les changements d'adresse de la ressource.</p>",
 "portal": {
  "path": [
   "Zones DNS",
   "contoso.com"
  ],
  "title": "Ajouter un jeu d'enregistrements",
  "rows": [
   [
    "Nom",
    "@"
   ],
   [
    "*Jeu d'enregistrements d'alias",
    "Oui · Front Door"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Racine vers une ressource Azure = enregistrement d'alias."
},
{
 "id": "D4-064",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type d'enregistrement DNS adapté à chaque besoin.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types",
 "srcs": [
  "A",
  "CNAME",
  "MX",
  "TXT",
  "NS"
 ],
 "tgtHead": [
  "Besoin",
  "Type"
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
