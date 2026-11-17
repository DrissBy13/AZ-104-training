/* Domaine 4 : réseau (lot G : D4-401 à D4-410, scénarios longs) */
AZ.questions.push(
{
 "id": "D4-401",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso utilise une topologie hub-and-spoke en France Central. VNet-Hub (10.0.0.0/16) contient un Azure Firewall (adresse privée 10.0.1.4) et la passerelle VPN VPNGW1 (VpnGw2, basée sur des routes, BGP activé), reliée au site de Lyon (192.168.0.0/16). VNet-Spoke1 (10.1.0.0/16) et VNet-Spoke2 (10.2.0.0/16) sont appairés au hub.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Peering</th><th>Autoriser le transit par passerelle</th><th>Utiliser la passerelle distante</th><th>Autoriser le trafic transféré</th></tr><tr><td>Hub → Spoke1</td><td>Oui</td><td>—</td><td>Non</td></tr><tr><td>Hub → Spoke2</td><td>Oui</td><td>—</td><td>Non</td></tr><tr><td>Spoke1 → Hub</td><td>—</td><td>Oui</td><td>Non</td></tr><tr><td>Spoke2 → Hub</td><td>—</td><td>Non</td><td>Non</td></tr></table></div><p>Aucune table de routage n'est associée. Les VM de Spoke1 joignent déjà Lyon ; celles de Spoke2 non.</p><p>Vous devez faire en sorte que : les VM de Spoke2 joignent Lyon par VPNGW1, sans nouvelle passerelle ; le trafic entre Spoke1 et Spoke2 passe par le pare-feu ; le trafic entre Lyon et les spokes soit lui aussi inspecté par le pare-feu.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour Spoke2 vers Lyon :",
   "o": [
    "Activer « Autoriser le transit par passerelle » sur Spoke2 → Hub",
    "Activer « Utiliser la passerelle distante » sur Spoke2 → Hub",
    "Créer une connexion VPN de Spoke2 vers Lyon",
    "Activer la propagation BGP sur le peering"
   ],
   "a": 1
  },
  {
   "l": "Sur les sous-réseaux des spokes :",
   "o": [
    "Rien : le hub rend les peerings transitifs",
    "Une table de routage avec 0.0.0.0/0 vers VPNGW1",
    "Une table de routage avec l'autre spoke vers 10.0.1.4",
    "Un NSG qui autorise 10.0.0.0/8"
   ],
   "a": 2
  },
  {
   "l": "Sur les peerings Spoke1 → Hub et Spoke2 → Hub :",
   "o": [
    "Désactiver « Utiliser la passerelle distante »",
    "Activer « Autoriser le trafic transféré »",
    "Activer « Autoriser le transit par passerelle »",
    "Ne rien changer"
   ],
   "a": 1
  },
  {
   "l": "Sur GatewaySubnet :",
   "o": [
    "Une table de routage avec 0.0.0.0/0 vers 10.0.1.4",
    "Un NSG qui refuse 10.0.0.0/8",
    "Une table de routage avec 10.1.0.0/16 et 10.2.0.0/16 vers 10.0.1.4",
    "Désactiver la propagation des routes de passerelle"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Spoke2 vers Lyon.</b> Le hub autorise déjà le transit par passerelle vers Spoke2 ; il manque l'autre moitié : « Utiliser la passerelle distante » sur le peering Spoke2 → Hub. Le transit par passerelle se configure côté hub, jamais côté spoke.<b>Spoke1 ↔ Spoke2.</b> Le peering n'est pas transitif : sans route, deux spokes ne se voient pas. Une route utilisateur vers l'autre spoke, avec 10.0.1.4 comme tronçon suivant (appliance virtuelle), fait passer le trafic par le pare-feu. 0.0.0.0/0 vers une passerelle VPN n'est pas un tronçon suivant valide ici et casserait l'accès Internet.<b>Trafic transféré.</b> Le paquet qui arrive dans Spoke2 a été relayé par le pare-feu du hub : il ne vient pas de VNet-Hub lui-même. Le peering côté spoke doit donc autoriser le trafic transféré, sinon il est abandonné.<b>GatewaySubnet.</b> Pour inspecter le trafic qui arrive de Lyon, on place sur GatewaySubnet des routes vers les préfixes des spokes, avec le pare-feu comme tronçon suivant. Une route 0.0.0.0/0 sur GatewaySubnet n'est pas prise en charge, et désactiver la propagation des routes casserait la connectivité de la passerelle.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Pour Spoke2 vers Lyon",
    "Activer « Utiliser la passerelle distante » sur Spoke2 → Hub"
   ],
   [
    "Sur les sous-réseaux des spokes",
    "Une table de routage avec l'autre spoke vers 10.0.1.4"
   ],
   [
    "Sur les peerings Spoke1 → Hub et Spoke2 → Hub",
    "Activer « Autoriser le trafic transféré »"
   ],
   [
    "Sur GatewaySubnet",
    "Une table de routage avec 10.1.0.0/16 et 10.2.0.0/16 vers 10.0.1.4"
   ]
  ]
 },
 "keep": "Spoke : « Utiliser la passerelle distante » + « trafic transféré ». Spoke ↔ spoke : routes vers le pare-feu. GatewaySubnet : routes vers les préfixes des spokes, jamais 0.0.0.0/0."
},
{
 "id": "D4-402",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VM1 (10.0.1.10) se trouve dans Subnet1 de VNet1 (10.0.0.0/16). Elle a une adresse IP publique Standard. Subnet1 est associé à NSG-Sub et la carte réseau de VM1 à NSG-NIC. VNet1 est relié au site local (192.168.0.0/16) par une passerelle VPN. VM2 (10.0.2.4) se trouve dans Subnet2 de VNet1, sans NSG.</p><b>NSG-Sub, règles entrantes personnalisées</b>\n<div class=\"tw\"><table class=\"tbl\"><tr><th>Priorité</th><th>Port</th><th>Source</th><th>Action</th></tr><tr><td>100</td><td>TCP 3389</td><td>192.168.0.0/16</td><td>Autoriser</td></tr><tr><td>200</td><td>TCP 443</td><td>VirtualNetwork</td><td>Refuser</td></tr><tr><td>300</td><td>TCP 80</td><td>Internet</td><td>Autoriser</td></tr></table></div><b>NSG-NIC, règles entrantes personnalisées</b>\n<div class=\"tw\"><table class=\"tbl\"><tr><th>Priorité</th><th>Port</th><th>Source</th><th>Action</th></tr><tr><td>100</td><td>TCP 443</td><td>10.0.2.0/24</td><td>Autoriser</td></tr><tr><td>150</td><td>TCP 3389</td><td>Any</td><td>Refuser</td></tr><tr><td>200</td><td>TCP 80</td><td>Any</td><td>Autoriser</td></tr></table></div><p>Aucun des deux NSG n'a de règle sortante personnalisée.</p><p>Pour chaque flux, quel est le résultat ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un poste local 192.168.10.5 ouvre RDP vers VM1 :",
   "o": [
    "Autorisé",
    "Bloqué par NSG-Sub",
    "Bloqué par NSG-NIC"
   ],
   "a": 2
  },
  {
   "l": "VM2 ouvre HTTPS vers VM1 :",
   "o": [
    "Autorisé",
    "Bloqué par NSG-Sub",
    "Bloqué par NSG-NIC"
   ],
   "a": 1
  },
  {
   "l": "Un client Internet ouvre HTTP vers l'IP publique de VM1 :",
   "o": [
    "Autorisé",
    "Bloqué par NSG-Sub",
    "Bloqué par NSG-NIC"
   ],
   "a": 0
  },
  {
   "l": "VM1 ouvre HTTPS vers un site Internet :",
   "o": [
    "Autorisé",
    "Bloqué par NSG-Sub",
    "Bloqué par NSG-NIC"
   ],
   "a": 0
  }
 ],
 "expl": "<p>En entrée, le NSG du sous-réseau est évalué d'abord, puis celui de la carte réseau : le flux doit être autorisé par les deux.</p><b>RDP depuis 192.168.10.5.</b> NSG-Sub l'autorise (100), mais NSG-NIC le refuse (150, source Any) : bloqué par NSG-NIC.<b>HTTPS depuis VM2.</b> La balise VirtualNetwork comprend tout l'espace du réseau virtuel, donc 10.0.2.4. NSG-Sub refuse (200) avant même que la règle 100 de NSG-NIC soit évaluée : bloqué par NSG-Sub.<b>HTTP depuis Internet.</b> NSG-Sub (300) puis NSG-NIC (200) l'autorisent, et l'IP publique Standard n'accepte que ce que les NSG autorisent : autorisé.<b>Sortie de VM1.</b> En sortie, l'ordre s'inverse (carte puis sous-réseau), mais la règle par défaut AllowInternetOutBound s'applique dans les deux : autorisé.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Un poste local 192.168.10.5 ouvre RDP vers VM1",
    "Bloqué par NSG-NIC"
   ],
   [
    "VM2 ouvre HTTPS vers VM1",
    "Bloqué par NSG-Sub"
   ],
   [
    "Un client Internet ouvre HTTP vers l'IP publique de VM1",
    "Autorisé"
   ],
   [
    "VM1 ouvre HTTPS vers un site Internet",
    "Autorisé"
   ]
  ]
 },
 "keep": "Entrée : sous-réseau puis carte, les deux doivent autoriser. VirtualNetwork = tout l'espace du VNet (et des réseaux connectés)."
},
{
 "id": "D4-403",
 "dom": 4,
 "type": "hot",
 "stem": "<p>L'application Commandes tourne sur VM-A et VM-B, dans Subnet-App (VNet-Prod). Elles n'ont pas d'adresse IP publique. Vous avez déployé LB-Pub, un équilibreur de charge public Standard, avec une règle TCP 443 et une sonde HTTP sur /health (port 8080). Les deux VM répondent correctement sur /health.</p><p>Subnet-App est associé à NSG-App, qui contient : 100 Autoriser TCP 443 depuis Internet ; 4000 Refuser tout le trafic entrant (Any → Any).</p><p>Le portail indique que les deux instances du pool sont « Non saines ». De plus :</p><ul><li>les VM doivent télécharger des mises à jour sur Internet avec une adresse IP publique fixe, déclarée chez un éditeur, et l'équipe prévoit plus de 50 000 connexions sortantes simultanées ;</li><li>un client doit rester sur la même VM pendant toute sa session, parce que le panier est stocké en mémoire.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Dans NSG-App :",
   "o": [
    "Autoriser la balise AzureLoadBalancer sur 8080, priorité inférieure à 4000",
    "Autoriser Internet sur 8080, priorité 4100",
    "Supprimer la règle 100",
    "Autoriser VirtualNetwork sur 443, priorité 4100"
   ],
   "a": 0
  },
  {
   "l": "Sortie Internet :",
   "o": [
    "Une IP publique Standard sur chaque VM",
    "L'accès sortant par défaut d'Azure",
    "Une passerelle NAT avec des IP publiques sur Subnet-App",
    "Une règle de trafic entrant supplémentaire sur LB-Pub"
   ],
   "a": 2
  },
  {
   "l": "Persistance de session de la règle 443 :",
   "o": [
    "Aucune",
    "Adresse IP du client",
    "Port flottant activé",
    "Délai d'inactivité de 30 minutes"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Sondes.</b> Les sondes proviennent de 168.63.129.16, représenté par la balise AzureLoadBalancer. La règle par défaut AllowAzureLoadBalancerInBound (65001) existe, mais la règle 4000 « Refuser tout » est évaluée avant elle. Il faut donc une règle d'autorisation avec un numéro de priorité plus petit que 4000. Une priorité 4100 serait évaluée trop tard.<b>Sortie.</b> Un équilibreur Standard ne donne aucun accès sortant sans règle de trafic sortant, et l'accès sortant par défaut n'offre ni IP fixe ni garantie (il est retiré pour les nouveaux réseaux). Une passerelle NAT donne une ou plusieurs IP fixes et 64 512 ports SNAT par IP publique : avec plusieurs IP, elle supporte largement 50 000 connexions. Une IP publique par VM multiplierait les adresses à déclarer.<b>Persistance.</b> L'affinité « Adresse IP du client » envoie toujours le même client vers la même VM. Le port flottant sert aux scénarios de type cluster SQL, pas à la persistance.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Dans NSG-App",
    "Autoriser la balise AzureLoadBalancer sur 8080, priorité inférieure à 4000"
   ],
   [
    "Sortie Internet",
    "Une passerelle NAT avec des IP publiques sur Subnet-App"
   ],
   [
    "Persistance de session de la règle 443",
    "Adresse IP du client"
   ]
  ]
 },
 "keep": "Sonde = AzureLoadBalancer, à autoriser avant tout Deny. Sortie fixe et nombreuse = passerelle NAT. Même VM = persistance IP client."
},
{
 "id": "D4-404",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VPNGW1 est une passerelle VPN VpnGw1 basée sur des routes, en France Central, avec une seule adresse IP publique. Elle porte :</p><ul><li>une connexion site à site vers le siège de Paris, terminée sur un seul pare-feu ;</li><li>une configuration point à site : type de tunnel IKEv2, authentification par certificat Azure.</li></ul><p>La direction exige :</p><ul><li>que les 200 commerciaux (Windows et macOS) se connectent avec leur compte Microsoft Entra et l'authentification multifacteur, sans certificat à distribuer ;</li><li>que le siège installe un second pare-feu et que le lien survive à la perte de n'importe quel pare-feu local ou d'une instance de VPNGW1, sans coupure manuelle ;</li><li>que les routes du siège soient apprises automatiquement.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Point à site, type de tunnel :",
   "o": [
    "IKEv2",
    "SSTP",
    "OpenVPN (SSL)",
    "IKEv2 et SSTP"
   ],
   "a": 2
  },
  {
   "l": "Point à site, authentification :",
   "o": [
    "Microsoft Entra ID",
    "Certificat Azure",
    "RADIUS avec NPS local"
   ],
   "a": 0
  },
  {
   "l": "Haute disponibilité :",
   "o": [
    "Une seconde passerelle VPN dans VNet-Hub",
    "Le mode actif-actif avec une seconde IP publique, et deux passerelles de réseau local",
    "Passer en VpnGw1AZ en gardant une IP",
    "Une seconde connexion vers la même passerelle de réseau local"
   ],
   "a": 1
  },
  {
   "l": "Routage :",
   "o": [
    "Des préfixes statiques sur chaque passerelle de réseau local",
    "Une table de routage sur GatewaySubnet",
    "BGP sur VPNGW1 et sur les deux pare-feu",
    "La propagation des routes dans le peering"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Entra ID.</b> L'authentification Microsoft Entra en point à site n'est prise en charge qu'avec le type de tunnel <b>OpenVPN</b>, et le client Azure VPN (Windows, macOS). IKEv2 et SSTP n'acceptent que les certificats ou RADIUS. L'accès conditionnel (MFA) s'applique alors à l'application Azure VPN.<b>Haute disponibilité.</b> Une passerelle a toujours deux instances, mais en actif-passif une bascule coupe le tunnel quelques dizaines de secondes. Le mode <b>actif-actif</b> (deux IP publiques) établit des tunnels depuis chaque instance ; avec deux pare-feu, on obtient un maillage complet de quatre tunnels. Chaque pare-feu est représenté par sa propre passerelle de réseau local. Une seule passerelle VPN par réseau virtuel est possible.<b>Routage.</b> Avec plusieurs tunnels actifs, BGP annonce et retire les routes automatiquement quand un lien tombe. Des préfixes statiques ne savent pas basculer.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Point à site, type de tunnel",
    "OpenVPN (SSL)"
   ],
   [
    "Point à site, authentification",
    "Microsoft Entra ID"
   ],
   [
    "Haute disponibilité",
    "Le mode actif-actif avec une seconde IP publique, et deux passerelles de réseau local"
   ],
   [
    "Routage",
    "BGP sur VPNGW1 et sur les deux pare-feu"
   ]
  ]
 },
 "keep": "Entra ID en P2S = OpenVPN. Deux équipements locaux = actif-actif + une passerelle de réseau local par équipement + BGP."
},
{
 "id": "D4-405",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Fabrikam a déployé un point de terminaison privé pour le compte de stockage stfab (sous-ressource blob) dans VNet-App. La zone DNS privée privatelink.blob.core.windows.net contient l'enregistrement de stfab ; elle n'est liée qu'à VNet-App.</p><p>VNet-Hub, appairé à VNet-App, utilise comme serveurs DNS personnalisés les contrôleurs de domaine DC1 et DC2 (10.0.2.4 et 10.0.2.5), qui transfèrent toutes les requêtes inconnues vers 168.63.129.16. Le site local, relié par VPN, utilise aussi DC1 et DC2 comme redirecteurs.</p><p>VNet-App est lié, avec l'inscription automatique activée, à la zone privée app.internal. L'équipe veut que les VM de VNet-App s'inscrivent aussi automatiquement dans la nouvelle zone contoso.internal, qui remplacera app.internal.</p><p>Actuellement, les postes du site et les VM de VNet-Hub résolvent stfab.blob.core.windows.net vers l'adresse publique.</p><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour corriger la résolution de stfab :",
   "o": [
    "Créer une zone blob.core.windows.net sur DC1 et DC2",
    "Lier la zone privatelink.blob.core.windows.net à VNet-Hub",
    "Activer l'inscription automatique sur la zone privatelink",
    "Configurer VNet-Hub pour utiliser le DNS fourni par Azure"
   ],
   "a": 1
  },
  {
   "l": "Pour le site local, en plus :",
   "o": [
    "Rien : les postes passent déjà par DC1 et DC2",
    "Un fichier hosts sur chaque poste",
    "Lier la zone privée à la passerelle de réseau local",
    "Un redirecteur conditionnel vers 168.63.129.16 sur les DNS du site"
   ],
   "a": 0
  },
  {
   "l": "Pour contoso.internal :",
   "o": [
    "Créer un second lien avec inscription automatique",
    "Désactiver l'inscription sur app.internal, puis l'activer sur le lien vers contoso.internal",
    "Ajouter les enregistrements A à la main",
    "Lier contoso.internal à VNet-Hub avec inscription"
   ],
   "a": 1
  }
 ],
 "expl": "<b>stfab.</b> DC1 et DC2 sont dans VNet-Hub et transfèrent vers 168.63.129.16 : ce résolveur Azure ne consulte que les zones privées liées au réseau de la VM qui pose la question, ici VNet-Hub. Il faut donc lier la zone privatelink à VNet-Hub. Une zone blob.core.windows.net sur les DC casserait la résolution de tous les autres comptes de stockage.<b>Site local.</b> Les postes interrogent déjà DC1 et DC2, qui résoudront correctement une fois la zone liée : rien d'autre à faire. 168.63.129.16 n'est pas joignable depuis le site local.<b>contoso.internal.</b> Un réseau virtuel ne peut avoir l'inscription automatique que vers <b>une seule</b> zone privée. Il faut la désactiver sur app.internal avant de l'activer vers contoso.internal.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Pour corriger la résolution de stfab",
    "Lier la zone privatelink.blob.core.windows.net à VNet-Hub"
   ],
   [
    "Pour le site local, en plus",
    "Rien : les postes passent déjà par DC1 et DC2"
   ],
   [
    "Pour contoso.internal",
    "Désactiver l'inscription sur app.internal, puis l'activer sur le lien vers contoso.internal"
   ]
  ]
 },
 "keep": "168.63.129.16 ne voit que les zones liées au VNet du demandeur. Inscription automatique : une seule zone par VNet."
},
{
 "id": "D4-406",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Wingtip publie son site sur deux pools : les VM WEB1 et WEB2 pour le site, et les conteneurs d'Azure Container Apps pour l'API (/api/*), sur le même nom www.wingtip.com. Vous déployez AppGW1, une Application Gateway WAF_v2, dans VNet-Front.</p><p>Contraintes :</p><ul><li>le certificat TLS de www.wingtip.com est stocké dans le coffre de clés KV-Front (modèle d'autorisation RBAC) et doit être renouvelé automatiquement dans AppGW1 ;</li><li>les attaques de type injection SQL doivent être bloquées, pas seulement journalisées ;</li><li>VNet-Front contient Subnet-Web (VM web, NSG), Subnet-Bastion (AzureBastionSubnet) et un espace libre de 10.10.8.0/21.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Accès d'AppGW1 au certificat :",
   "o": [
    "Une identité attribuée par le système, Utilisateur des secrets Key Vault",
    "Une identité attribuée par l'utilisateur, Utilisateur des secrets Key Vault",
    "Une identité attribuée par l'utilisateur, stratégie d'accès Get",
    "Le certificat exporté en PFX et chargé"
   ],
   "a": 1
  },
  {
   "l": "Règle de routage :",
   "o": [
    "Une règle de base vers le pool web",
    "Deux écouteurs, un par pool",
    "Une règle basée sur le chemin d'accès, /api/* vers le pool de l'API",
    "Une règle de redirection vers l'API"
   ],
   "a": 2
  },
  {
   "l": "Mode de la stratégie WAF :",
   "o": [
    "Détection",
    "Prévention",
    "Désactivé, avec des règles personnalisées"
   ],
   "a": 1
  },
  {
   "l": "Sous-réseau d'AppGW1 :",
   "o": [
    "Subnet-Web",
    "AzureBastionSubnet",
    "Un nouveau sous-réseau dédié de 10.10.8.0/24",
    "GatewaySubnet"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Certificat.</b> Application Gateway ne prend en charge que les identités managées <b>attribuées par l'utilisateur</b> pour lire Key Vault. Avec le modèle RBAC, l'identité a besoin d'un rôle (Utilisateur des secrets Key Vault, car le certificat est lu comme un secret), pas d'une stratégie d'accès. AppGW1 vérifie ensuite le coffre toutes les 4 heures et récupère la nouvelle version : le renouvellement est automatique, contrairement à un PFX chargé.<b>Routage.</b> Un même nom d'hôte et deux back-ends selon le chemin : une règle basée sur le chemin d'accès, avec /api/* vers le pool de l'API et le reste vers le pool web.<b>WAF.</b> Seul le mode Prévention bloque ; Détection ne fait que journaliser.<b>Sous-réseau.</b> Application Gateway v2 exige un sous-réseau dédié, sans autre ressource ; Microsoft recommande /24 pour la mise à l'échelle. GatewaySubnet et AzureBastionSubnet sont réservés.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Accès d'AppGW1 au certificat",
    "Une identité attribuée par l'utilisateur, Utilisateur des secrets Key Vault"
   ],
   [
    "Règle de routage",
    "Une règle basée sur le chemin d'accès, /api/* vers le pool de l'API"
   ],
   [
    "Mode de la stratégie WAF",
    "Prévention"
   ],
   [
    "Sous-réseau d'AppGW1",
    "Un nouveau sous-réseau dédié de 10.10.8.0/24"
   ]
  ]
 },
 "keep": "App Gateway + Key Vault = identité attribuée par l'utilisateur. Bloquer = Prévention. Sous-réseau dédié, /24 recommandé."
},
{
 "id": "D4-407",
 "dom": 4,
 "type": "hot",
 "stem": "<p>AzFW1 (Azure Firewall Standard) est déployé dans VNet-Hub. Tous les sous-réseaux des spokes envoient 0.0.0.0/0 vers AzFW1. Une stratégie de pare-feu, FWP1, est attachée.</p><p>Les besoins sont les suivants : 1. les VM doivent télécharger les mises à jour depuis *.windowsupdate.microsoft.com en HTTPS ; 2. les serveurs Linux doivent joindre le serveur de temps 51.145.123.29 sur UDP 123 ; 3. le site web de VM-Web (10.1.1.10) doit être publié sur Internet, sur l'adresse IP publique d'AzFW1, port 443 ; 4. une règle doit autoriser TCP 1433 vers sql.partenaire.com, dont l'adresse change souvent.</p><p>Les VM utilisent actuellement le DNS fourni par Azure.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Besoin 1 :",
   "o": [
    "Une règle de réseau avec une balise de service",
    "Une règle d'application avec un FQDN",
    "Une règle DNAT",
    "Une règle de réseau avec l'IP du site"
   ],
   "a": 1
  },
  {
   "l": "Besoin 2 :",
   "o": [
    "Une règle d'application",
    "Une règle DNAT",
    "Une règle de réseau",
    "Aucune : autorisé par défaut"
   ],
   "a": 2
  },
  {
   "l": "Besoin 3 :",
   "o": [
    "Une règle DNAT",
    "Une règle d'application",
    "Une règle de réseau entrante",
    "Une IP publique sur VM-Web"
   ],
   "a": 0
  },
  {
   "l": "Besoin 4, prérequis :",
   "o": [
    "Passer AzFW1 en Premium",
    "Une règle d'application sur le port 1433",
    "Activer le proxy DNS d'AzFW1 et le définir comme DNS des réseaux virtuels",
    "Une zone DNS privée partenaire.com"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Mises à jour.</b> Un FQDN générique en HTTPS se filtre par une règle d'<b>application</b> (inspection du SNI). La balise FQDN WindowsUpdate conviendrait aussi dans une règle d'application.<b>NTP.</b> UDP vers une IP : règle de <b>réseau</b>. Azure Firewall refuse tout par défaut.<b>Publication.</b> L'entrée depuis Internet sur l'IP publique du pare-feu se fait par une règle <b>DNAT</b>, qui traduit vers 10.1.1.10:443. Une IP publique sur VM-Web contournerait le pare-feu.<b>FQDN en règle de réseau.</b> Les règles de réseau acceptent des FQDN pour tout protocole (ici TCP 1433, que les règles d'application ne gèrent pas), à condition que le pare-feu résolve les noms comme les clients : il faut activer le <b>proxy DNS</b> et faire pointer le DNS des réseaux virtuels vers l'IP privée du pare-feu.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Besoin 1",
    "Une règle d'application avec un FQDN"
   ],
   [
    "Besoin 2",
    "Une règle de réseau"
   ],
   [
    "Besoin 3",
    "Une règle DNAT"
   ],
   [
    "Besoin 4, prérequis",
    "Activer le proxy DNS d'AzFW1 et le définir comme DNS des réseaux virtuels"
   ]
  ]
 },
 "keep": "HTTP/S + FQDN = application. IP/port = réseau. Entrée = DNAT. FQDN en règle de réseau = proxy DNS."
},
{
 "id": "D4-408",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Un lundi matin, plusieurs incidents arrivent en même temps sur l'abonnement Sub-Prod (France Central). Network Watcher est activé dans la région.</p><ul><li>Incident A : VM-App1 n'arrive plus à joindre VM-Db1 sur TCP 1433. Vous voulez savoir, pour ce paquet précis, si une règle de NSG le bloque et laquelle.</li><li>Incident B : depuis l'ajout d'une table de routage, VM-App2 n'atteint plus 10.50.0.4 dans un réseau appairé. Vous voulez connaître le type de tronçon suivant et la route utilisée.</li><li>Incident C : la direction veut suivre en continu la latence et le taux d'échec entre VM-App1 et l'API d'un partenaire, avec une alerte au-delà de 200 ms.</li><li>Incident D : la sécurité veut analyser tous les flux entrants et sortants du réseau virtuel VNet-Prod sur 90 jours, avec des statistiques dans Traffic Analytics.</li></ul><p>Quel outil devez-vous utiliser pour chaque incident ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Incident A :",
   "o": [
    "Tronçon suivant",
    "Vérification du flux IP",
    "Moniteur de connexion",
    "Capture de paquets"
   ],
   "a": 1
  },
  {
   "l": "Incident B :",
   "o": [
    "Tronçon suivant",
    "Topologie",
    "Vérification du flux IP",
    "Résolution des problèmes de VPN"
   ],
   "a": 0
  },
  {
   "l": "Incident C :",
   "o": [
    "Résolution des problèmes de connexion",
    "Moniteur de connexion",
    "Tronçon suivant",
    "Journaux de flux"
   ],
   "a": 1
  },
  {
   "l": "Incident D :",
   "o": [
    "Journaux de flux de NSG",
    "Journaux de flux de réseau virtuel",
    "Capture de paquets",
    "Diagnostic des règles de sécurité"
   ],
   "a": 1
  }
 ],
 "expl": "<b>A.</b> La vérification du flux IP teste un 5-tuple (IP, port, protocole, sens) et renvoie Autoriser ou Refuser avec le nom de la règle de NSG en cause.<b>B.</b> Le tronçon suivant donne le type (appliance virtuelle, peering, Aucun…) et l'ID de la table de routage utilisée : idéal après l'ajout d'une route utilisateur.<b>C.</b> Le moniteur de connexion mesure en continu la latence et les échecs entre une source et une destination, avec des seuils et des alertes. La résolution des problèmes de connexion ne fait qu'un test ponctuel.<b>D.</b> Les journaux de flux de <b>réseau virtuel</b> couvrent tout le réseau et alimentent Traffic Analytics. Les journaux de flux de NSG ne peuvent plus être créés depuis juin 2025 et seront retirés : Microsoft recommande la migration vers les journaux de flux de réseau virtuel.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Incident A",
    "Vérification du flux IP"
   ],
   [
    "Incident B",
    "Tronçon suivant"
   ],
   [
    "Incident C",
    "Moniteur de connexion"
   ],
   [
    "Incident D",
    "Journaux de flux de réseau virtuel"
   ]
  ]
 },
 "keep": "Paquet bloqué → vérification du flux IP. Route → tronçon suivant. Suivi continu → moniteur de connexion. Tous les flux → journaux de flux de VNet."
},
{
 "id": "D4-409",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Subnet-Batch (VNet-Data, France Central) contient 40 VM de calcul sans adresse IP publique et VM-Legacy, qui possède une adresse IP publique de référence SKU De base. Vous créez NATGW1, une passerelle NAT avec une adresse IP publique Standard, en France Central, sans zone.</p><p>Lors de l'association de NATGW1 à Subnet-Batch, le portail renvoie une erreur.</p><p>Par ailleurs :</p><ul><li>l'équipe constate des échecs de connexions sortantes aux heures de pointe, chaque VM ouvrant jusqu'à 3 000 connexions simultanées vers la même API ;</li><li>VM-Report, dans Subnet-Batch, a reçu hier sa propre adresse IP publique Standard ; un partenaire filtre les accès sur l'IP de NATGW1.</li></ul><p>Que devez-vous répondre ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Cause de l'erreur d'association :",
   "o": [
    "NATGW1 n'a pas de zone",
    "L'IP publique De base de VM-Legacy",
    "Subnet-Batch contient plus de 16 VM",
    "Il manque un équilibreur de charge"
   ],
   "a": 1
  },
  {
   "l": "Échecs aux heures de pointe :",
   "o": [
    "Ajouter des adresses IP publiques à NATGW1",
    "Créer une seconde passerelle NAT sur le même sous-réseau",
    "Augmenter le délai d'inactivité à 120 minutes",
    "Passer les VM en mise en réseau accélérée"
   ],
   "a": 0
  },
  {
   "l": "Trafic sortant initié par VM-Report :",
   "o": [
    "Utilise l'IP publique de VM-Report",
    "Utilise l'IP de NATGW1",
    "Est réparti entre les deux IP",
    "Est bloqué"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Erreur.</b> Une passerelle NAT n'est pas compatible avec les ressources De base : un sous-réseau contenant une IP publique De base (ou un équilibreur De base) ne peut pas lui être associé. Il faut passer l'IP de VM-Legacy en Standard.<b>Pointe.</b> 40 VM × 3 000 connexions vers la même destination = 120 000 flux, alors qu'une IP publique offre 64 512 ports SNAT. On ajoute des IP (jusqu'à 16 par passerelle). Un sous-réseau ne peut avoir qu'une passerelle NAT, et allonger le délai d'inactivité garde les ports occupés plus longtemps : c'est pire.<b>VM-Report.</b> Pour le trafic sortant initié par la VM, la passerelle NAT est prioritaire sur l'IP publique de l'instance : VM-Report sort par NATGW1, ce qui convient au partenaire. L'IP de la VM ne sert qu'aux connexions entrantes.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Cause de l'erreur d'association",
    "L'IP publique De base de VM-Legacy"
   ],
   [
    "Échecs aux heures de pointe",
    "Ajouter des adresses IP publiques à NATGW1"
   ],
   [
    "Trafic sortant initié par VM-Report",
    "Utilise l'IP de NATGW1"
   ]
  ]
 },
 "keep": "NAT gateway : incompatible De base, 64 512 ports par IP (16 IP max), prioritaire en sortie sur l'IP de la VM."
},
{
 "id": "D4-410",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Litware dispose de VNet-App (France Central) avec Subnet-App et d'un site local relié par ExpressRoute. Trois ressources PaaS sont utilisées :</p><ul><li>stlogs, un compte de stockage dans lequel les VM de Subnet-App écrivent des journaux ;</li><li>sql-litware, un serveur Azure SQL Database utilisé depuis Subnet-App et depuis le site local ;</li><li>stpartner, un compte de stockage d'un partenaire, que les VM ne doivent jamais pouvoir joindre.</li></ul><p>Exigences :</p><ul><li>le trafic de Subnet-App vers stlogs doit rester sur le réseau Microsoft, sans adresse IP privée pour le compte et sans coût par Go ; stlogs ne doit accepter que Subnet-App ;</li><li>le site local doit joindre sql-litware par une adresse IP privée ;</li><li>depuis Subnet-App, seuls les comptes de stockage de l'abonnement Litware doivent être joignables par le chemin optimisé.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour stlogs :",
   "o": [
    "Un point de terminaison privé dans Subnet-App",
    "Un point de terminaison de service Microsoft.Storage sur Subnet-App et une règle de réseau virtuel sur stlogs",
    "Une règle IP sur stlogs avec l'IP publique de Subnet-App",
    "Une passerelle NAT"
   ],
   "a": 1
  },
  {
   "l": "Pour sql-litware :",
   "o": [
    "Un point de terminaison de service Microsoft.Sql",
    "Une règle de pare-feu avec l'IP publique du site",
    "Un point de terminaison privé et une résolution DNS vers l'adresse privée",
    "Le peering Microsoft d'ExpressRoute"
   ],
   "a": 2
  },
  {
   "l": "Pour limiter les comptes joignables :",
   "o": [
    "Une stratégie de point de terminaison de service",
    "Un NSG avec la balise Storage",
    "Une règle de pare-feu sur stpartner",
    "Azure Policy"
   ],
   "a": 0
  }
 ],
 "expl": "<b>stlogs.</b> Le point de terminaison de service garde le trafic sur le réseau Microsoft, sans IP privée pour le compte et sans frais de traitement des données ; la règle de réseau virtuel limite le compte à Subnet-App. Un point de terminaison privé donnerait une IP privée et est facturé au Go.<b>sql-litware.</b> Un point de terminaison de service n'est utilisable que depuis le réseau virtuel, pas depuis le site local. Le point de terminaison privé donne une IP privée joignable par ExpressRoute (peering privé), avec une résolution DNS adaptée.<b>Comptes joignables.</b> Une stratégie de point de terminaison de service limite, depuis un sous-réseau, les comptes de stockage joignables par le point de terminaison (par compte, groupe de ressources ou abonnement). La balise Storage d'un NSG couvre tous les comptes de la région, y compris stpartner.",
 "portal": {
  "path": [
   "Portail Azure"
  ],
  "title": "Réponse",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Pour stlogs",
    "Un point de terminaison de service Microsoft.Storage sur Subnet-App et une règle de réseau virtuel sur stlogs"
   ],
   [
    "Pour sql-litware",
    "Un point de terminaison privé et une résolution DNS vers l'adresse privée"
   ],
   [
    "Pour limiter les comptes joignables",
    "Une stratégie de point de terminaison de service"
   ]
  ]
 },
 "keep": "Service endpoint : VNet seulement, gratuit, pas d'IP privée. Private endpoint : IP privée, joignable du site, payant. Limiter les comptes = stratégie de point de terminaison de service."
}
);
