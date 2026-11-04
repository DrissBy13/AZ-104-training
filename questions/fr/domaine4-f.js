/* Domaine 4 : réseau virtuel (lot F : D4-301 à D4-327, questions à réponses multiples issues de la fusion des QCM) */
AZ.questions.push(
{
 "id": "D4-301",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Votre entreprise relie ses sites, ses utilisateurs et ses réseaux virtuels à Azure. Vous devez choisir une solution de connectivité pour chaque exigence.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "VPN point à site",
  "VPN site à site",
  "Azure ExpressRoute",
  "ExpressRoute Global Reach",
  "Azure Virtual WAN",
  "Appairage de réseaux virtuels mondial",
  "Connexion VPN VNet-to-VNet",
  "Chiffrement de réseau virtuel"
 ],
 "tgts": [
  {
   "l": "Des télétravailleurs se connectent à VNet1 depuis n'importe où, avec leur compte Microsoft Entra",
   "a": 0
  },
  {
   "l": "Le centre de données se relie à Azure sans passer par Internet, avec 1 Gbit/s garanti et un SLA",
   "a": 2
  },
  {
   "l": "Les agences de Paris et de New York, chacune avec son circuit ExpressRoute, communiquent par le réseau Microsoft",
   "a": 3
  },
  {
   "l": "30 agences, plusieurs régions et des nomades sont interconnectés par une architecture managée",
   "a": 4
  },
  {
   "l": "VNet1 (France Central) et VNet2 (Japan East) communiquent par le réseau Microsoft, sans passerelle",
   "a": 5
  },
  {
   "l": "Deux réseaux de deux régions sont reliés avec un chiffrement IPsec imposé par une norme",
   "a": 6
  },
  {
   "l": "Le trafic entre deux réseaux appairés est chiffré, sans passerelle VPN",
   "a": 7
  }
 ],
 "expl": "<p><b>1. Des télétravailleurs se connectent à VNet1 depuis n'importe où, avec leur compte Microsoft Entra</b></p><p>Le <b>VPN point à site</b> relie un ordinateur à un réseau virtuel. On définit un <b>pool d'adresses clients</b>, le type de tunnel et l'authentification. L'authentification <b>Microsoft Entra ID</b> exige le type de tunnel <b>OpenVPN</b> et le client Azure VPN.</p><p>Le site à site relie des réseaux (un périphérique VPN par site). ExpressRoute est un circuit privé d'entreprise.</p><p><b>2. Le centre de données se relie à Azure sans passer par Internet, avec 1 Gbit/s garanti et un SLA</b></p><p><b>ExpressRoute</b> est un circuit privé fourni par un opérateur partenaire : il ne passe pas par Internet, offre une bande passante dédiée (de 50 Mbit/s à 100 Gbit/s) et un SLA. On le connecte au réseau virtuel par une passerelle de type ExpressRoute.</p><p>Le VPN site à site passe par Internet (chiffré par IPsec).</p><p><b>3. Les agences de Paris et de New York, chacune avec son circuit ExpressRoute, communiquent par le réseau Microsoft</b></p><p><b>Global Reach</b> relie deux circuits ExpressRoute pour que les sites locaux communiquent entre eux par le réseau principal de Microsoft.</p><p><b>FastPath</b> envoie le trafic directement vers les VM, en contournant la passerelle ExpressRoute, pour de meilleures performances.</p><p><b>4. 30 agences, plusieurs régions et des nomades sont interconnectés par une architecture managée</b></p><p><b>Azure Virtual WAN</b> fournit des hubs virtuels managés qui interconnectent sites VPN, circuits ExpressRoute, utilisateurs point à site et réseaux virtuels, avec le routage transitif automatique entre eux.</p><p><b>5. VNet1 (France Central) et VNet2 (Japan East) communiquent par le réseau Microsoft, sans passerelle</b></p><p>L'<b>appairage mondial</b> relie des réseaux virtuels de <b>régions différentes</b> par le réseau principal de Microsoft, sans passerelle ni chiffrement IPsec, avec une faible latence. Le trafic entre régions est facturé (entrée et sortie).</p><p>Un VPN de réseau à réseau fonctionnerait aussi, mais avec une passerelle, une bande passante limitée et plus de latence.</p><p><b>6. Deux réseaux de deux régions sont reliés avec un chiffrement IPsec imposé par une norme</b></p><p>Une connexion <b>de réseau à réseau</b> relie deux passerelles VPN avec un tunnel <b>IPsec/IKE</b>. L'appairage n'utilise pas IPsec (le trafic reste privé sur le réseau Microsoft, mais n'est pas chiffré par IPsec).</p><p><b>7. Le trafic entre deux réseaux appairés est chiffré, sans passerelle VPN</b></p><p>Le <b>chiffrement de réseau virtuel</b> chiffre le trafic entre VM (y compris entre réseaux appairés) avec DTLS, au niveau de l'infrastructure, pour les tailles de VM qui prennent en charge la mise en réseau accélérée. Le trafic de l'appairage reste sinon non chiffré (mais privé, sur le réseau de Microsoft).</p>",
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
 "keep": "Télétravail avec compte Entra = P2S, OpenVPN, authentification Entra ID. Privé, sans Internet, bande passante garantie + SLA = ExpressRoute. Site ↔ site via deux circuits ExpressRoute = Global Reach. Beaucoup de sites + régions + nomades, managé = Virtual WAN. Régions différentes, sans passerelle = appairage mondial. IPsec entre VNets = connexion VNet-to-VNet. Chiffrer entre VNets sans VPN = chiffrement de réseau virtuel."
},
{
 "id": "D4-302",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous gérez la passerelle VPN de VNet1, reliée à plusieurs sites locaux. Que devez-vous choisir pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Relier 3 sites en même temps et accepter le point à site — type de VPN :",
   "o": [
    "Basé sur les routes (route-based)",
    "Basé sur les stratégies (policy-based)",
    "Statique, avec une adresse IP fixe",
    "Actif-passif avec un seul tunnel"
   ],
   "a": 0
  },
  {
   "l": "Rester disponible pendant la maintenance d'une instance, avec deux tunnels actifs :",
   "o": [
    "Le mode actif-actif de la passerelle",
    "Une seconde passerelle dans le même VNet",
    "Le SKU De base avec deux connexions",
    "Le mode basé sur les stratégies (policy)"
   ],
   "a": 0
  },
  {
   "l": "Résister à la panne d'une zone de disponibilité — SKU :",
   "o": [
    "De base, en mode actif-actif",
    "Standard, avec deux instances",
    "VpnGw2, en mode actif-actif sur deux sites",
    "Un SKU AZ, par exemple VpnGw2AZ"
   ],
   "a": 3
  },
  {
   "l": "VpnGw1 n'offre plus assez de bande passante :",
   "o": [
    "Ajouter une seconde passerelle VPN dans le même réseau virtuel",
    "Créer un second GatewaySubnet et y déployer une passerelle",
    "Redimensionner la passerelle vers VpnGw2 (même génération)",
    "Augmenter la taille des VM qui échangent avec le site local"
   ],
   "a": 2
  },
  {
   "l": "Apprendre automatiquement les nouveaux réseaux de part et d'autre :",
   "o": [
    "Ajouter à la main chaque réseau dans une table de routage",
    "Activer BGP sur la passerelle et la connexion (un ASN par côté)",
    "Passer la passerelle en mode basé sur les stratégies, avec IKEv2",
    "Créer un appairage entre VNet1 et le réseau du site local"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Relier 3 sites en même temps et accepter le point à site — type de VPN :</b></p><p>Le type <b>basé sur les routes</b> prend en charge plusieurs connexions site à site, le point à site, le réseau à réseau, BGP et la coexistence avec ExpressRoute. C'est le choix par défaut.</p><p>Le type <b>basé sur les stratégies</b> ne permet qu'un seul tunnel site à site (SKU De base) et pas de point à site. Il est réservé à d'anciens périphériques.</p><p><b>2. Rester disponible pendant la maintenance d'une instance, avec deux tunnels actifs :</b></p><p>Par défaut, une passerelle VPN fonctionne en <b>actif-passif</b> : une instance de secours prend le relais en cas de problème, avec une courte interruption. En <b>actif-actif</b>, les deux instances ont chacune une adresse IP publique et établissent chacune un tunnel : pas d'interruption lors d'une maintenance.</p><p>Un réseau virtuel ne peut avoir qu'un GatewaySubnet et une seule passerelle VPN.</p><p><b>3. Résister à la panne d'une zone de disponibilité — SKU :</b></p><p>Les SKU se terminant par <b>AZ</b> (VpnGw1AZ à VpnGw5AZ) déploient les instances de la passerelle dans plusieurs zones de disponibilité. Microsoft fait évoluer les SKU non-AZ vers les SKU AZ dans les régions qui ont des zones.</p><p><b>4. VpnGw1 n'offre plus assez de bande passante :</b></p><p>On peut <b>redimensionner</b> une passerelle vers un SKU supérieur (VpnGw1 → VpnGw2 → VpnGw3…, ou vers les versions AZ redondantes interzone). Un réseau virtuel n'a qu'une passerelle VPN et un seul GatewaySubnet.</p><p><b>5. Apprendre automatiquement les nouveaux réseaux de part et d'autre :</b></p><p><b>BGP</b> échange dynamiquement les itinéraires entre la passerelle Azure et le périphérique local. Chaque côté a un <b>numéro de système autonome (ASN)</b>, et la passerelle de réseau local indique l'ASN et l'adresse du pair BGP local. Les nouveaux réseaux sont alors annoncés automatiquement.</p>",
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
 "keep": "Plusieurs sites, P2S, BGP = basé sur les routes. Pas d'interruption en maintenance = passerelle actif-actif. Passerelle résistante aux pannes de zone = SKU AZ. Plus de bande passante VPN = redimensionner le SKU. Itinéraires appris automatiquement = BGP (ASN des deux côtés)."
},
{
 "id": "D4-303",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VNet1 est relié à plusieurs sites locaux par des VPN site à site sans BGP, et au siège par un circuit ExpressRoute. Que devez-vous faire dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Le périphérique VPN de Rennes change d'adresse IP publique — ressource à mettre à jour :",
   "o": [
    "La table de routage associée au GatewaySubnet",
    "Le GatewaySubnet de VNet1",
    "La passerelle de réseau local de Rennes",
    "La passerelle de réseau virtuel de VNet1"
   ],
   "a": 2
  },
  {
   "l": "Le site de Toulouse ajoute le réseau 192.168.50.0/24 :",
   "o": [
    "Créer un appairage vers le réseau 192.168.50.0/24",
    "Ajouter 192.168.50.0/24 à l'espace d'adressage de VNet1",
    "Passer la passerelle VPN à un SKU supérieur, avec BGP",
    "Ajouter 192.168.50.0/24 à la passerelle de réseau local"
   ],
   "a": 3
  },
  {
   "l": "Un secours automatique est exigé si le circuit ExpressRoute tombe :",
   "o": [
    "Un équilibreur de charge entre le circuit et VNet1",
    "Un second appairage privé configuré sur le même circuit",
    "Une passerelle NAT sur le GatewaySubnet de VNet1",
    "Une passerelle VPN site à site dans VNet1 (coexistence)"
   ],
   "a": 3
  },
  {
   "l": "VNet1 doit héberger une passerelle ExpressRoute et une passerelle VPN — GatewaySubnet :",
   "o": [
    "Être assez grand pour les deux passerelles (au moins /27)",
    "Avoir un NSG qui bloque tout le trafic entrant",
    "Être un /29, la taille réservée aux passerelles",
    "Être doublé : un GatewaySubnet par type de passerelle à déployer"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Le périphérique VPN de Rennes change d'adresse IP publique — ressource à mettre à jour :</b></p><p>La <b>passerelle de réseau local</b> contient l'adresse IP publique (ou le FQDN) du périphérique local et ses plages d'adresses. On la met à jour quand l'un ou l'autre change. On peut aussi utiliser un FQDN pour un site à adresse dynamique.</p><p><b>2. Le site de Toulouse ajoute le réseau 192.168.50.0/24 :</b></p><p>Sans BGP, Azure ne connaît les réseaux du site local que par la liste de <b>préfixes</b> de la passerelle de réseau local. Il faut y ajouter le nouveau réseau. Avec BGP, il serait appris automatiquement.</p><p>Ajouter cette plage à VNet1 créerait un chevauchement.</p><p><b>3. Un secours automatique est exigé si le circuit ExpressRoute tombe :</b></p><p>Une passerelle <b>VPN</b> et une passerelle <b>ExpressRoute</b> peuvent coexister dans le même GatewaySubnet. Le VPN site à site sert de chemin de <b>secours</b> : ExpressRoute est préféré tant qu'il est disponible.</p><p><b>4. VNet1 doit héberger une passerelle ExpressRoute et une passerelle VPN — GatewaySubnet :</b></p><p>Les passerelles ExpressRoute et VPN coexistent dans le <b>même</b> GatewaySubnet, qui doit être d'au moins <b>/27</b>. Il est déconseillé d'associer un NSG au GatewaySubnet.</p>",
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
 "keep": "Infos du site local (IP, plages) = passerelle de réseau local. Nouveau réseau local sans BGP = l'ajouter à la passerelle de réseau local. Secours d'ExpressRoute = VPN site à site dans le même GatewaySubnet. Coexistence ER + VPN = un GatewaySubnet /27+."
},
{
 "id": "D4-304",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous gérez l'accès distant à VNet1 : un VPN point à site par certificats pour les employés et un circuit ExpressRoute pour le siège. Que devez-vous faire dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un employé qui utilisait un certificat client quitte l'entreprise ; les autres gardent l'accès :",
   "o": [
    "Supprimer le certificat racine chargé sur la passerelle",
    "Supprimer puis recréer la passerelle VPN avec un nouveau pool",
    "Révoquer son certificat client (empreinte) sur la passerelle",
    "Changer le pool d'adresses clients de la configuration P2S"
   ],
   "a": 2
  },
  {
   "l": "Après un changement de certificat racine et de type de tunnel, plus personne ne se connecte — les utilisateurs doivent :",
   "o": [
    "Changer leur mot de passe Microsoft Entra puis se reconnecter",
    "Redémarrer leur ordinateur pour recharger le profil VPN",
    "Rien : la nouvelle configuration est poussée automatiquement",
    "Télécharger et réinstaller le nouveau paquet du client VPN"
   ],
   "a": 3
  },
  {
   "l": "Le circuit doit donner accès aux VM des réseaux virtuels — type d'appairage :",
   "o": [
    "L'appairage Microsoft",
    "L'appairage privé Azure",
    "L'appairage public Azure",
    "Un appairage de réseaux virtuels"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Un employé qui utilisait un certificat client quitte l'entreprise ; les autres gardent l'accès :</b></p><p>La configuration point à site contient une liste de <b>certificats révoqués</b> (par empreinte). Le client concerné ne peut plus se connecter, sans impact sur les autres. Supprimer le certificat racine couperait tous les utilisateurs.</p><p><b>2. Après un changement de certificat racine et de type de tunnel, plus personne ne se connecte — les utilisateurs doivent :</b></p><p>Après une modification de la configuration point à site (type de tunnel, certificat, adresses, itinéraires), il faut <b>régénérer et réinstaller le paquet de configuration du client VPN</b> sur chaque poste.</p><p><b>3. Le circuit doit donner accès aux VM des réseaux virtuels — type d'appairage :</b></p><p>L'<b>appairage privé</b> relie le site local aux réseaux virtuels (adresses privées). L'<b>appairage Microsoft</b> donne accès aux services publics de Microsoft (Microsoft 365, adresses publiques des services PaaS). L'appairage public Azure est retiré.</p>",
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
 "keep": "Couper un seul client P2S = certificat révoqué. Config P2S modifiée = réinstaller le paquet client. VNets = appairage privé ; services Microsoft publics = appairage Microsoft."
},
{
 "id": "D4-305",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>VNet1 est relié au site local par un VPN site à site. Des comptes de stockage et une base Azure SQL Database doivent être consommés par des adresses privées. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "Un point de terminaison privé",
  "Un point de terminaison de service",
  "Une zone privatelink liée au réseau virtuel",
  "Désactiver l'accès réseau public",
  "Les stratégies réseau des points de terminaison privés",
  "Une règle de pare-feu IP"
 ],
 "tgts": [
  {
   "l": "Le site local accède à storage1 par une adresse privée ; l'accès public de storage1 est désactivé",
   "a": 0
  },
  {
   "l": "Azure SQL Database est joignable depuis Subnet1 et depuis le site local par une adresse privée",
   "a": 0
  },
  {
   "l": "Malgré son point de terminaison privé, storage90 se résout encore vers son adresse publique dans VNet1",
   "a": 2
  },
  {
   "l": "Une fois le point de terminaison privé créé, le serveur SQL refuse tout accès public",
   "a": 3
  },
  {
   "l": "Le trafic vers les points de terminaison privés d'un sous-réseau est filtré par des NSG et des UDR",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Le site local accède à storage1 par une adresse privée ; l'accès public de storage1 est désactivé</b></p><p>Un <b>point de terminaison privé</b> crée une interface réseau avec une <b>adresse IP privée</b> de VNet1 pour storage1. Le site local la joint à travers le VPN. On peut ensuite désactiver l'accès public. Il faut une résolution DNS vers l'adresse privée (zone privatelink.blob.core.windows.net et redirection DNS depuis le site local).</p><p>Un <b>point de terminaison de service</b> ne profite qu'au trafic qui part d'un sous-réseau Azure, et le compte garde son adresse publique. Une règle de pare-feu avec l'IP publique du site passerait par Internet.</p><p><b>2. Azure SQL Database est joignable depuis Subnet1 et depuis le site local par une adresse privée</b></p><p>Le <b>point de terminaison privé</b> donne au serveur SQL une <b>adresse privée</b> dans VNet1, joignable aussi depuis le site local par le VPN (avec une résolution DNS adaptée). Le point de terminaison de service ne fonctionne pas depuis le site local. Une règle de pare-feu IP passerait par Internet.</p><p><b>3. Malgré son point de terminaison privé, storage90 se résout encore vers son adresse publique dans VNet1</b></p><p>Le nom public est un alias (CNAME) vers <code>storage90.privatelink.blob.core.windows.net</code>. Pour qu'il se résolve vers l'adresse privée, il faut la <b>zone DNS privée privatelink</b> correspondante, <b>liée</b> au réseau virtuel, avec un enregistrement A (créé automatiquement via un groupe de zones DNS si on choisit l'intégration).</p><p><b>4. Une fois le point de terminaison privé créé, le serveur SQL refuse tout accès public</b></p><p>Une fois le <b>point de terminaison privé</b> en place, on <b>désactive l'accès réseau public</b> : seules les connexions par points de terminaison privés restent possibles. Autoriser les services Azure ou une règle IP rouvrirait l'accès public.</p><p><b>5. Le trafic vers les points de terminaison privés d'un sous-réseau est filtré par des NSG et des UDR</b></p><p>Par défaut, les NSG et les itinéraires définis par l'utilisateur ne s'appliquent pas aux <b>points de terminaison privés</b>. En activant les <b>stratégies réseau des points de terminaison privés</b> sur le sous-réseau, les NSG et les UDR s'appliquent à eux.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Point de terminaison privé",
    "VNet1 · 10.0.4.5"
   ],
   [
    "Accès réseau public",
    "Désactivé"
   ]
  ],
  "btn": "+ Point de terminaison privé"
 },
 "keep": "Accès privé depuis le site local = point de terminaison privé + DNS. IP privée joignable aussi depuis le site local = point de terminaison privé. Point de terminaison privé = zone privatelink liée + enregistrement A. Point de terminaison privé + désactiver l'accès public. NSG/UDR sur un point de terminaison privé = activer ses stratégies réseau."
},
{
 "id": "D4-306",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous gérez la résolution de noms et les sous-réseaux d'un environnement hybride : VNet1 est relié au site local, qui a ses propres serveurs DNS et un domaine AD. Que devez-vous faire dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Les DNS locaux résolvent une zone privée Azure et les VM le domaine AD local, sans VM DNS :",
   "o": [
    "Azure Bastion avec un sous-réseau dédié",
    "Azure DNS Private Resolver (entrant et sortant)",
    "Une passerelle NAT et deux zones DNS privées",
    "Une zone DNS publique pour le domaine AD local"
   ],
   "a": 1
  },
  {
   "l": "Un DNS Private Resolver (entrée 10.0.10.4) est déployé — sur les DNS locaux :",
   "o": [
    "Des enregistrements A manuels vers les adresses publiques des services",
    "Un redirecteur vers 168.63.129.16 depuis les serveurs DNS locaux",
    "Des redirecteurs conditionnels des zones des services vers 10.0.10.4",
    "Une zone DNS publique blob.core.windows.net sur les serveurs locaux"
   ],
   "a": 2
  },
  {
   "l": "Le DNS personnalisé 10.0.0.4 de VNet1 doit aussi résoudre une zone privée liée à VNet1 :",
   "o": [
    "Avec un redirecteur vers 8.8.8.8 pour tout le reste",
    "Aucune : les VM interrogent la zone privée directement",
    "Avec un redirecteur vers 168.63.129.16 (DNS Azure)",
    "Avec un enregistrement NS qui délègue à la zone privée"
   ],
   "a": 2
  },
  {
   "l": "Subnet-DB ne doit jamais avoir de sortie Internet par défaut, sans dépendre de NSG :",
   "o": [
    "Les stratégies réseau des points de terminaison privés",
    "Sous-réseau privé (pas d'accès sortant par défaut)",
    "La délégation du sous-réseau à un service managé",
    "Les points de terminaison de service du sous-réseau"
   ],
   "a": 1
  },
  {
   "l": "Le déploiement de groupes ACI dans Subnet-ACI échoue faute de configuration du sous-réseau :",
   "o": [
    "Un groupe de sécurité d'application dédié",
    "Une table de routage vers le service ACI",
    "Une délégation à Microsoft.ContainerInstance",
    "Un point de terminaison de service Microsoft.Storage"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Les DNS locaux résolvent une zone privée Azure et les VM le domaine AD local, sans VM DNS :</b></p><p><b>Azure DNS Private Resolver</b> est un service managé. Son <b>point de terminaison entrant</b> reçoit les requêtes du site local (via un redirecteur conditionnel) et les résout avec les zones privées liées. Son <b>point de terminaison sortant</b>, avec un <b>jeu de règles de transfert</b>, envoie les requêtes du domaine local vers les DNS locaux.</p><p><b>2. Un DNS Private Resolver (entrée 10.0.10.4) est déployé — sur les DNS locaux :</b></p><p>Les serveurs locaux transfèrent les requêtes des domaines concernés (par exemple <code>blob.core.windows.net</code> ou <code>privatelink.blob.core.windows.net</code>) vers le <b>point de terminaison entrant</b> du résolveur, qui les résout avec les zones privées liées. 168.63.129.16 n'est pas joignable depuis le site local.</p><p><b>3. Le DNS personnalisé 10.0.0.4 de VNet1 doit aussi résoudre une zone privée liée à VNet1 :</b></p><p>Les zones DNS privées sont résolues par le <b>DNS fourni par Azure</b>. Si les VM utilisent un serveur DNS personnalisé, celui-ci doit <b>transférer</b> les requêtes (au moins pour ces zones) vers <b>168.63.129.16</b>. Le serveur doit lui-même être dans un réseau virtuel lié à la zone.</p><p><b>4. Subnet-DB ne doit jamais avoir de sortie Internet par défaut, sans dépendre de NSG :</b></p><p>L'option <b>sous-réseau privé</b> (defaultOutboundAccess = false) désactive l'<b>accès sortant par défaut</b> : les VM n'ont plus de sortie Internet implicite. Il faut alors une méthode explicite (passerelle NAT, adresse publique, équilibreur, pare-feu). Microsoft retire l'accès sortant par défaut pour les nouveaux réseaux virtuels.</p><p><b>5. Le déploiement de groupes ACI dans Subnet-ACI échoue faute de configuration du sous-réseau :</b></p><p>La <b>délégation de sous-réseau</b> autorise un service PaaS à créer ses ressources dans un sous-réseau (ACI, App Service pour l'intégration au réseau virtuel, Azure SQL Managed Instance, Container Apps…). Un sous-réseau délégué est réservé à ce service.</p>",
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
 "keep": "DNS hybride sans VM = Azure DNS Private Resolver (entrant + sortant). DNS local → point de terminaison entrant du résolveur. DNS personnalisé + zone privée = redirecteur vers 168.63.129.16. Aucune sortie Internet implicite = sous-réseau privé. Service PaaS dans un sous-réseau = délégation."
},
{
 "id": "D4-307",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous configurez des équilibreurs de charge Standard, publics et internes, pour plusieurs applications de VNet1. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Configurations",
 "tgtHead": [
  "Exigence",
  "Configuration"
 ],
 "srcs": [
  "Une sonde d'intégrité",
  "La persistance « Adresse IP du client »",
  "Les ports HA",
  "L'adresse IP flottante",
  "Une règle sortante",
  "Des règles NAT entrantes",
  "Un pool basé sur les adresses IP",
  "Un pool basé sur les interfaces réseau"
 ],
 "tgts": [
  {
   "l": "Ne plus envoyer de trafic à une VM arrêtée pour maintenance",
   "a": 0
  },
  {
   "l": "Un utilisateur retombe toujours sur la même VM (session gardée en mémoire)",
   "a": 1
  },
  {
   "l": "Deux NVA derrière un équilibreur interne reçoivent tout le trafic TCP et UDP, sur tous les ports",
   "a": 2
  },
  {
   "l": "Les nœuds d'un cluster SQL Always On reçoivent le trafic adressé à l'adresse frontale",
   "a": 3
  },
  {
   "l": "Les VM sans IP publique sortent par l'adresse de l'équilibreur, avec un nombre de ports SNAT contrôlé",
   "a": 4
  },
  {
   "l": "RDP vers chacune des trois VM par les ports 50001 à 50003 de l'adresse publique",
   "a": 5
  },
  {
   "l": "Répartir vers des VM désignées par leurs seules adresses IP privées, sans référencer leurs interfaces",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Ne plus envoyer de trafic à une VM arrêtée pour maintenance</b></p><p>La <b>sonde d'intégrité</b> interroge régulièrement chaque instance (TCP, HTTP ou HTTPS). Après un nombre d'échecs, l'instance est retirée de la répartition jusqu'à ce qu'elle réponde de nouveau.</p><p><b>2. Un utilisateur retombe toujours sur la même VM (session gardée en mémoire)</b></p><p>La <b>persistance de session</b> (affinité) peut être <b>Aucune</b> (hachage à 5 tuples, par défaut), <b>Adresse IP du client</b> (2 tuples : source et destination) ou <b>Adresse IP et protocole du client</b> (3 tuples). Avec l'adresse IP du client, les requêtes d'un même client vont vers la même VM.</p><p><b>3. Deux NVA derrière un équilibreur interne reçoivent tout le trafic TCP et UDP, sur tous les ports</b></p><p>Une règle <b>ports HA</b> (protocole « Tous », port 0) sur un équilibreur <b>interne Standard</b> répartit tous les flux TCP et UDP sur tous les ports. C'est le modèle classique pour mettre des NVA en haute disponibilité.</p><p><b>4. Les nœuds d'un cluster SQL Always On reçoivent le trafic adressé à l'adresse frontale</b></p><p>L'<b>adresse IP flottante</b> (Direct Server Return) transmet le paquet sans traduire l'adresse de destination : la VM voit l'adresse frontale et doit l'avoir configurée en bouclage. C'est requis pour les écouteurs de groupes de disponibilité SQL Server.</p><p><b>5. Les VM sans IP publique sortent par l'adresse de l'équilibreur, avec un nombre de ports SNAT contrôlé</b></p><p>Les <b>règles sortantes</b> d'un équilibreur public Standard définissent la traduction SNAT du trafic sortant du pool : adresses frontales utilisées et nombre de ports alloués par instance. La <b>passerelle NAT</b> reste la méthode recommandée pour la sortie Internet, si elle est possible.</p><p><b>6. RDP vers chacune des trois VM par les ports 50001 à 50003 de l'adresse publique</b></p><p>Une <b>règle NAT entrante</b> redirige un port de l'adresse frontale vers un port d'une VM précise (par exemple 50001 → VM1:3389). Une règle d'équilibrage, elle, <b>répartit</b> le trafic entre toutes les VM du pool.</p><p>En production, Azure Bastion est une meilleure solution pour RDP.</p><p><b>7. Répartir vers des VM désignées par leurs seules adresses IP privées, sans référencer leurs interfaces</b></p><p>Un équilibreur Standard propose un pool principal configuré <b>par interface réseau</b> (par défaut) ou <b>par adresse IP</b> (en indiquant le réseau virtuel et les adresses). Le pool basé sur les adresses IP facilite certains déploiements (conteneurs, ressources préprovisionnées).</p>",
 "portal": {
  "path": [
   "Équilibreurs de charge",
   "LB2"
  ],
  "title": "LB2 | Sondes d'intégrité",
  "menu": [
   "*Sondes d'intégrité"
  ],
  "rows": [
   [
    "VM3",
    "Saine"
   ],
   [
    "*VM4",
    "Non saine (retirée)"
   ]
  ]
 },
 "keep": "Instance retirée de la répartition = sonde d'intégrité en échec. Toujours la même VM = persistance « Adresse IP du client ». Tout le trafic vers des NVA = ports HA sur un LB interne Standard. SQL Always On derrière un LB = IP flottante. Sortie par l'adresse du LB avec SNAT contrôlé = règle sortante. Un port de l'équilibreur vers une VM précise = règle NAT entrante. Pool par adresses privées = pool basé sur les adresses IP."
},
{
 "id": "D4-308",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Application Gateway v2 AG1 publie plusieurs applications web. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Héberger www.contoso.com, www.fabrikam.com et www.tailspin.com, chacun avec son pool :",
   "o": [
    "Trois Application Gateway, une par site",
    "Trois adresses IP frontales privées et une règle",
    "Trois écouteurs multisites et trois règles",
    "Trois sondes d'intégrité et un écouteur de base"
   ],
   "a": 2
  },
  {
   "l": "Rediriger toutes les requêtes HTTP (80) vers HTTPS (443) :",
   "o": [
    "Une sonde d'intégrité HTTPS sur le pool principal",
    "Une règle NAT entrante du port 80 vers le port 443",
    "Une passerelle NAT sur le sous-réseau de la passerelle",
    "Un écouteur HTTP avec une règle de redirection"
   ],
   "a": 3
  },
  {
   "l": "Router /video/* vers Pool-Video et le reste vers Pool-Default — type de règle :",
   "o": [
    "Une règle NAT entrante par chemin",
    "Une règle basée sur le chemin",
    "Une règle de base avec deux pools",
    "Une règle sortante vers Pool-Video"
   ],
   "a": 1
  },
  {
   "l": "HTTPS de bout en bout vers des serveurs au certificat d'une autorité interne — paramètres de back-end :",
   "o": [
    "Le protocole HTTPS et le certificat racine de l'autorité",
    "Une adresse IP publique sur chaque serveur principal",
    "Le protocole HTTP uniquement, derrière un écouteur HTTPS",
    "Une règle DNAT vers le port 443 de chaque serveur"
   ],
   "a": 0
  },
  {
   "l": "Ajouter ou retirer des instances selon le trafic, entre 2 et 10 :",
   "o": [
    "Une règle sortante avec 10 adresses frontales",
    "La mise à l'échelle automatique (min 2, max 10)",
    "Un groupe de machines virtuelles identiques",
    "Une sonde d'intégrité par instance (2 à 10)"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Héberger www.contoso.com, www.fabrikam.com et www.tailspin.com, chacun avec son pool :</b></p><p>Un <b>écouteur multisite</b> filtre les requêtes selon le nom d'hôte (en-tête Host). Chaque écouteur est associé à une <b>règle de routage</b> qui envoie vers le bon pool principal. Une seule passerelle peut ainsi héberger plusieurs sites sur la même adresse IP.</p><p><b>2. Rediriger toutes les requêtes HTTP (80) vers HTTPS (443) :</b></p><p>Application Gateway gère les <b>redirections</b> : un écouteur sur le port 80, et une règle qui redirige vers l'écouteur HTTPS (redirection permanente 301). On peut aussi rediriger vers une URL externe.</p><p><b>3. Router /video/* vers Pool-Video et le reste vers Pool-Default — type de règle :</b></p><p>Une règle <b>basée sur le chemin</b> associe des modèles de chemin (/video/*) à des pools et des paramètres. Les requêtes qui ne correspondent à aucun chemin vont vers la <b>cible par défaut</b>.</p><p><b>4. HTTPS de bout en bout vers des serveurs au certificat d'une autorité interne — paramètres de back-end :</b></p><p>Pour le <b>chiffrement de bout en bout</b>, les paramètres de back-end utilisent <b>HTTPS</b>. Avec la v2, si le certificat des serveurs n'est pas émis par une autorité publique connue, on charge le <b>certificat racine approuvé</b> de l'autorité interne.</p><p><b>5. Ajouter ou retirer des instances selon le trafic, entre 2 et 10 :</b></p><p>Le SKU <b>v2</b> d'Application Gateway prend en charge la <b>mise à l'échelle automatique</b> intégrée, avec des bornes minimale et maximale d'instances. Le SKU v1 ne permettait qu'un nombre fixe d'instances.</p>",
 "portal": {
  "path": [
   "Passerelles d'application",
   "AG1"
  ],
  "title": "AG1 | Écouteurs",
  "menu": [
   "*Écouteurs",
   "Règles"
  ],
  "rows": [
   [
    "*lst-contoso",
    "Multisite · www.contoso.com"
   ],
   [
    "lst-fabrikam",
    "Multisite · www.fabrikam.com"
   ],
   [
    "lst-tailspin",
    "Multisite · www.tailspin.com"
   ]
  ]
 },
 "keep": "Plusieurs sites sur une passerelle = écouteurs multisites + règles. HTTP → HTTPS = écouteur 80 + règle de redirection. Routage par URL = règle basée sur le chemin + cible par défaut. TLS de bout en bout + AC interne = HTTPS + racine approuvée. AppGW v2 = mise à l'échelle automatique (min/max)."
},
{
 "id": "D4-309",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous déployez et dépannez Application Gateway v2 AG2, avec le WAF, dans VNet1. Que devez-vous faire dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Exigence de sous-réseau pour le déploiement :",
   "o": [
    "Un sous-réseau dédié aux Application Gateway",
    "Le même sous-réseau que les VM du pool principal",
    "Le sous-réseau GatewaySubnet, d'au moins /27",
    "Le sous-réseau AzureBastionSubnet, en /26"
   ],
   "a": 0
  },
  {
   "l": "Après l'ajout d'un NSG sur son sous-réseau, AG2 ne fonctionne plus — règle entrante à autoriser :",
   "o": [
    "Le port 3389 depuis l'étiquette Internet",
    "Les ports 65200-65535 depuis GatewayManager",
    "Le port 1433 depuis l'étiquette AzureCloud",
    "Le port 22 depuis l'étiquette VirtualNetwork"
   ],
   "a": 1
  },
  {
   "l": "Observer les requêtes que le WAF bloquerait, sans rien bloquer — mode :",
   "o": [
    "Détection",
    "Audit de stratégie",
    "Prévention",
    "Désactivé"
   ],
   "a": 0
  },
  {
   "l": "AG2 renvoie 502 alors que les VM répondent en direct — à vérifier en premier :",
   "o": [
    "L'intégrité du back-end (sonde, NSG, ports, certificats)",
    "Le niveau d'accès du compte de stockage des journaux",
    "Les règles DNAT du pare-feu placé devant la passerelle",
    "La passerelle VPN et les itinéraires vers le site local"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Exigence de sous-réseau pour le déploiement :</b></p><p>Application Gateway exige un <b>sous-réseau dédié</b> (on peut y mettre plusieurs Application Gateway, mais aucune autre ressource). Pour la v2, un /24 est recommandé pour la mise à l'échelle automatique. Son nom est libre ; ce n'est surtout pas le GatewaySubnet, réservé aux passerelles VPN et ExpressRoute.</p><p><b>2. Après l'ajout d'un NSG sur son sous-réseau, AG2 ne fonctionne plus — règle entrante à autoriser :</b></p><p>Application Gateway v2 a besoin que les ports <b>65200 à 65535</b> soient ouverts en entrée depuis l'étiquette <b>GatewayManager</b> (communication avec l'infrastructure Azure). Il faut aussi autoriser AzureLoadBalancer et le trafic client sur les ports des écouteurs.</p><p><b>3. Observer les requêtes que le WAF bloquerait, sans rien bloquer — mode :</b></p><p>En mode <b>Détection</b>, le WAF journalise les menaces détectées sans les bloquer. Après ajustement (exclusions, règles personnalisées), on passe en mode <b>Prévention</b> pour bloquer.</p><p><b>4. AG2 renvoie 502 alors que les VM répondent en direct — à vérifier en premier :</b></p><p>Une erreur <b>502</b> signifie qu'Application Gateway ne peut pas joindre un back-end sain. La page <b>Intégrité du back-end</b> indique pourquoi : sonde qui échoue (chemin ou code attendu), NSG qui bloque, port ou nom d'hôte incorrect, certificat du back-end non approuvé en HTTPS.</p>",
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
    "*snet-appgw",
    "/24 · dédié à Application Gateway"
   ]
  ]
 },
 "keep": "Application Gateway = sous-réseau dédié (nom libre, /24 recommandé en v2). NSG sur le sous-réseau AppGW v2 = GatewayManager 65200-65535. Observer sans bloquer = Détection ; bloquer = Prévention. Erreur 502 = vérifier l'intégrité du back-end."
},
{
 "id": "D4-310",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous devez publier plusieurs applications. Quelle solution de distribution du trafic devez-vous utiliser pour chacune ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Application",
  "Solution"
 ],
 "srcs": [
  "Application Gateway v2 avec WAF",
  "Application Gateway v2 avec un frontal privé",
  "Azure Front Door",
  "Traffic Manager, méthode Priorité",
  "Traffic Manager, profils imbriqués",
  "Un équilibreur de charge interrégional",
  "Un équilibreur de charge interne Standard"
 ],
 "tgts": [
  {
   "l": "Une région : HTTPS avec certificat, routage par chemin vers deux pools, protection contre l'injection SQL",
   "a": 0
  },
  {
   "l": "Application interne sur une adresse privée seulement, avec terminaison TLS et routage par chemin",
   "a": 1
  },
  {
   "l": "Point d'entrée HTTP mondial unique, cache du statique, accélération du dynamique et WAF",
   "a": 2
  },
  {
   "l": "Tout vers France Central tant qu'elle fonctionne, secours en West Europe, plusieurs protocoles",
   "a": 3
  },
  {
   "l": "Méthode Performances pour choisir la région, puis Pondérée entre deux versions par région",
   "a": 4
  },
  {
   "l": "Application TCP dans trois régions, une IP publique mondiale anycast, basculement instantané",
   "a": 5
  }
 ],
 "expl": "<p><b>1. Une région : HTTPS avec certificat, routage par chemin vers deux pools, protection contre l'injection SQL</b></p><p><b>Application Gateway</b> est un répartiteur de couche 7 : terminaison TLS, <b>routage par chemin</b> (/images/*, /api/*), routage multisite par nom d'hôte, réécriture d'en-têtes. Le niveau <b>WAF</b> ajoute un pare-feu d'applications web (règles OWASP contre l'injection SQL, le XSS…).</p><p>Load Balancer travaille en couche 4 et ne lit pas les URL.</p><p><b>2. Application interne sur une adresse privée seulement, avec terminaison TLS et routage par chemin</b></p><p>Application Gateway peut avoir une <b>adresse frontale privée</b> (avec ou sans frontale publique selon la configuration) pour publier des applications internes, avec toutes ses fonctions de couche 7. Front Door et Traffic Manager sont des services publics mondiaux.</p><p><b>3. Point d'entrée HTTP mondial unique, cache du statique, accélération du dynamique et WAF</b></p><p><b>Azure Front Door</b> est un point d'entrée mondial de couche 7 sur le réseau périphérique de Microsoft : routage vers l'origine la plus rapide, basculement, mise en cache (CDN), terminaison TLS et WAF.</p><p>Traffic Manager ne fait que du DNS, sans cache ni WAF. Application Gateway est régional.</p><p><b>4. Tout vers France Central tant qu'elle fonctionne, secours en West Europe, plusieurs protocoles</b></p><p><b>Traffic Manager</b> répartit par <b>DNS</b>, donc pour n'importe quel protocole. La méthode <b>Priorité</b> envoie tout vers le point de terminaison de priorité 1 tant qu'il est sain, et bascule vers le suivant en cas de panne (détectée par la surveillance des points de terminaison).</p><p><b>5. Méthode Performances pour choisir la région, puis Pondérée entre deux versions par région</b></p><p>Un profil n'a qu'une méthode de routage. Les <b>profils imbriqués</b> permettent de combiner des méthodes : le profil parent (Performances) envoie vers des points de terminaison imbriqués, qui sont des profils enfants (Pondérée).</p><p><b>6. Application TCP dans trois régions, une IP publique mondiale anycast, basculement instantané</b></p><p>L'<b>équilibreur de charge interrégional</b> (niveau Global) fournit une adresse IP <b>anycast</b> mondiale devant des équilibreurs régionaux Standard, pour du trafic TCP/UDP, avec un basculement sans dépendre du cache DNS.</p><p>Traffic Manager est basé sur le DNS (basculement soumis au TTL). Application Gateway est régional et HTTP.</p>",
 "portal": {
  "path": [
   "Passerelles d'application",
   "Créer"
  ],
  "title": "Créer une passerelle d'application",
  "rows": [
   [
    "*Niveau",
    "WAF V2"
   ],
   [
    "Routage",
    "Par chemin (/images, /api)"
   ],
   [
    "Écouteur",
    "HTTPS + certificat"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "HTTPS + chemin d'URL + WAF dans une région = Application Gateway v2 WAF. App interne en L7 = AppGW avec front-end privé. Point d'entrée HTTP mondial + cache + WAF = Front Door. Principal/secours, tout protocole = Traffic Manager Priorité. Combiner des méthodes = profils imbriqués. L4 mondial anycast = équilibreur interrégional."
},
{
 "id": "D4-311",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Une application est publiée dans deux régions avec Traffic Manager, et une autre derrière Azure Front Door. Que devez-vous faire dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Après un changement de priorité, des clients vont encore vers l'ancien point de terminaison quelques minutes — raison :",
   "o": [
    "Traffic Manager met 24 heures à propager un changement de priorité",
    "Traffic Manager garde ouvertes les sessions TCP des clients existants",
    "Les clients et les résolveurs gardent la réponse DNS en cache (TTL)",
    "Les clients concernés passent par un tunnel VPN qui ignore le DNS"
   ],
   "a": 2
  },
  {
   "l": "Inclure un site hébergé chez un autre fournisseur cloud — type de point de terminaison :",
   "o": [
    "Point de terminaison imbriqué",
    "Point de terminaison privé",
    "Point de terminaison Azure",
    "Point de terminaison externe"
   ],
   "a": 3
  },
  {
   "l": "Un point de terminaison renvoie des erreurs 500 mais reste « sain » — à vérifier :",
   "o": [
    "La méthode de routage du profil (Priorité ou Pondérée)",
    "La surveillance du profil : protocole, port, chemin, codes",
    "Le nombre de points de terminaison actifs dans le profil",
    "Le TTL DNS du profil, à réduire à 0 seconde pour forcer l'état"
   ],
   "a": 1
  },
  {
   "l": "L'application App Service ne doit être joignable que par Azure Front Door :",
   "o": [
    "Une règle DNAT sur un pare-feu placé devant l'application web",
    "Des restrictions d'accès AzureFrontDoor.Backend et X-Azure-FDID",
    "Une passerelle NAT avec l'adresse de Front Door autorisée",
    "Un NSG associé à l'application qui n'autorise que Front Door"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Après un changement de priorité, des clients vont encore vers l'ancien point de terminaison quelques minutes — raison :</b></p><p>Traffic Manager fonctionne par <b>DNS</b> : il renvoie le nom du point de terminaison choisi, et cette réponse reste en cache le temps du <b>TTL</b> du profil (60 secondes par défaut, réglable). Les connexions ne passent jamais par Traffic Manager.</p><p><b>2. Inclure un site hébergé chez un autre fournisseur cloud — type de point de terminaison :</b></p><p>Traffic Manager accepte des points de terminaison <b>Azure</b> (ressources Azure), <b>externes</b> (FQDN ou adresse IP hors Azure) et <b>imbriqués</b> (un autre profil Traffic Manager, pour combiner des méthodes de routage).</p><p><b>3. Un point de terminaison renvoie des erreurs 500 mais reste « sain » — à vérifier :</b></p><p>Traffic Manager juge l'état d'un point de terminaison selon sa <b>surveillance</b> (HTTP, HTTPS ou TCP, port, chemin, codes attendus). Si le chemin surveillé (par exemple la racine) répond 200 alors que l'application échoue ailleurs, il faut surveiller un chemin de santé plus représentatif.</p><p><b>4. L'application App Service ne doit être joignable que par Azure Front Door :</b></p><p>Les <b>restrictions d'accès</b> d'App Service autorisent l'étiquette <b>AzureFrontDoor.Backend</b>. Comme toutes les instances Front Door partagent ces adresses, on filtre aussi sur l'en-tête <b>X-Azure-FDID</b> (l'ID de votre profil). On peut aussi utiliser Front Door Premium avec un point de terminaison privé.</p>",
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
 "keep": "Traffic Manager = DNS ; changement visible après le TTL. Hors Azure = point de terminaison externe. Point de terminaison mal jugé = paramètres de surveillance. Uniquement via Front Door = étiquette AzureFrontDoor.Backend + X-Azure-FDID."
},
{
 "id": "D4-312",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous dépannez la connectivité de plusieurs VM de VNet1 et du site local. Quel outil de Network Watcher devez-vous utiliser pour chaque besoin ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Outils",
 "tgtHead": [
  "Besoin",
  "Outil"
 ],
 "srcs": [
  "Vérification du flux IP",
  "Tronçon suivant",
  "Résolution des problèmes de connexion",
  "Capture de paquets",
  "Moniteur de connexion",
  "Topologie",
  "Résolution des problèmes de VPN"
 ],
 "tgts": [
  {
   "l": "Savoir quelle règle de NSG autorise ou bloque le port 22 vers VM4 depuis une adresse donnée",
   "a": 0
  },
  {
   "l": "Tester une connexion TCP de bout en bout vers un serveur local et voir à quel saut elle échoue",
   "a": 2
  },
  {
   "l": "Capturer 10 minutes de trafic de VM10 pour l'analyser dans Wireshark",
   "a": 3
  },
  {
   "l": "Surveiller en continu la latence et la disponibilité entre VM11 et un serveur local, avec alertes",
   "a": 4
  },
  {
   "l": "Voir sous forme de schéma les ressources d'un réseau virtuel et leurs relations",
   "a": 5
  },
  {
   "l": "Diagnostiquer une connexion site à site « Non connecté » alors que le pare-feu local est correct",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Savoir quelle règle de NSG autorise ou bloque le port 22 vers VM4 depuis une adresse donnée</b></p><p><b>Vérification du flux IP</b> simule un paquet (direction, protocole, adresses et ports) vers ou depuis une VM, et indique s'il est autorisé ou refusé, et par <b>quelle règle de NSG</b>.</p><p>Tronçon suivant concerne le routage. La capture de paquets enregistre le trafic réel. Le moniteur de connexion surveille la connectivité dans le temps.</p><p><b>2. Tester une connexion TCP de bout en bout vers un serveur local et voir à quel saut elle échoue</b></p><p>La <b>résolution des problèmes de connexion</b> (Connection troubleshoot) teste une connexion TCP ou ICMP depuis une VM vers une destination, affiche les sauts, la latence et la cause probable d'un échec (règle de NSG, itinéraire, destination injoignable).</p><p><b>3. Capturer 10 minutes de trafic de VM10 pour l'analyser dans Wireshark</b></p><p>La <b>capture de paquets</b> de Network Watcher enregistre le trafic d'une VM (avec filtres et durée) dans un fichier .cap stocké dans un compte de stockage ou sur la VM, à ouvrir avec Wireshark. Elle utilise l'extension Network Watcher Agent.</p><p>Les journaux de flux n'enregistrent que des métadonnées de flux, pas le contenu des paquets.</p><p><b>4. Surveiller en continu la latence et la disponibilité entre VM11 et un serveur local, avec alertes</b></p><p>Le <b>moniteur de connexion</b> teste régulièrement des connexions entre sources (VM Azure, machines locales avec l'agent) et destinations, enregistre latence et pertes, et permet des <b>alertes</b> Azure Monitor.</p><p>Les autres outils font des tests ponctuels.</p><p><b>5. Voir sous forme de schéma les ressources d'un réseau virtuel et leurs relations</b></p><p>La <b>topologie</b> de Network Watcher génère un schéma interactif des ressources réseau et de leurs liens, sur un ou plusieurs abonnements et régions.</p><p><b>6. Diagnostiquer une connexion site à site « Non connecté » alors que le pare-feu local est correct</b></p><p>La <b>résolution des problèmes de VPN</b> de Network Watcher analyse la passerelle et la connexion, et produit un rapport (journaux IKE, erreurs de clé partagée ou de paramètres de stratégie). Les causes fréquentes : clé partagée différente, mauvaise adresse IP publique ou plages d'adresses dans la passerelle de réseau local.</p>",
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
 "keep": "Quelle règle NSG bloque = Vérification du flux IP. Test de bout en bout avec les sauts = résolution des problèmes de connexion. Contenu des paquets (Wireshark) = capture de paquets. Surveillance continue + alertes = moniteur de connexion. Schéma des ressources réseau = topologie. Diagnostiquer un VPN = Network Watcher, résolution des problèmes de VPN."
},
{
 "id": "D4-313",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>L'équipe sécurité veut analyser le trafic et la configuration effective de VNet1. Que devez-vous utiliser pour chaque besoin ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Fonctionnalités",
 "tgtHead": [
  "Besoin",
  "Fonctionnalité"
 ],
 "srcs": [
  "Les journaux de flux de réseau virtuel",
  "Traffic Analytics",
  "Les itinéraires effectifs",
  "Les règles de sécurité effectives",
  "Un paramètre de diagnostic vers Log Analytics",
  "Le journal d'activité"
 ],
 "tgts": [
  {
   "l": "Enregistrer tout le trafic IP accepté et refusé dans VNet1",
   "a": 0
  },
  {
   "l": "Repérer les VM qui communiquent le plus avec Internet et les ports ouverts inutilement",
   "a": 1
  },
  {
   "l": "Voir l'itinéraire réellement appliqué à l'interface de VM1 (système, BGP et UDR combinés)",
   "a": 2
  },
  {
   "l": "Voir toutes les règles appliquées à l'interface de VM9, NSG du sous-réseau et de l'interface combinés",
   "a": 3
  },
  {
   "l": "Interroger les journaux des règles du Pare-feu Azure qui ont autorisé ou refusé des flux",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Enregistrer tout le trafic IP accepté et refusé dans VNet1</b></p><p>Les <b>journaux de flux</b> enregistrent les flux IP (source, destination, ports, décision). Les journaux de flux de <b>réseau virtuel</b> remplacent les journaux de flux de NSG (en cours de retrait). Ils sont écrits dans un compte de stockage, et <b>Traffic Analytics</b> les analyse dans Log Analytics.</p><p><b>2. Repérer les VM qui communiquent le plus avec Internet et les ports ouverts inutilement</b></p><p><b>Traffic Analytics</b> traite les journaux de flux et affiche dans Log Analytics des tableaux de bord : flux par VM, pays, ports, trafic malveillant, ports ouverts inutilisés.</p><p><b>3. Voir l'itinéraire réellement appliqué à l'interface de VM1 (système, BGP et UDR combinés)</b></p><p>Les <b>itinéraires effectifs</b> d'une interface réseau listent tous les itinéraires appliqués et indiquent lesquels sont actifs. <b>Tronçon suivant</b> (Next hop) de Network Watcher donne directement le saut suivant et la table de routage utilisés pour une destination précise.</p><p>Les règles de sécurité effectives concernent les NSG, pas le routage.</p><p><b>4. Voir toutes les règles appliquées à l'interface de VM9, NSG du sous-réseau et de l'interface combinés</b></p><p>Les <b>règles de sécurité effectives</b> (dans l'interface réseau ou dans Network Watcher) affichent la combinaison des NSG du sous-réseau et de l'interface, avec les étiquettes de service développées en plages d'adresses.</p><p><b>5. Interroger les journaux des règles du Pare-feu Azure qui ont autorisé ou refusé des flux</b></p><p>Le Pare-feu Azure envoie ses journaux (règles d'application, de réseau, DNAT, proxy DNS, IDPS) via un <b>paramètre de diagnostic</b>. Avec Log Analytics et les <b>tables spécifiques à la ressource</b> (AZFWNetworkRule, AZFWApplicationRule…), on les interroge en KQL, et des classeurs intégrés les visualisent.</p>",
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
 "keep": "Enregistrer et analyser les flux = journaux de flux VNet + Traffic Analytics. Analyser les flux = Traffic Analytics. Quel itinéraire s'applique = itinéraires effectifs (ou Tronçon suivant). Toutes les règles NSG appliquées = règles de sécurité effectives. Journaux du pare-feu = paramètre de diagnostic → Log Analytics."
},
{
 "id": "D4-314",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous gérez des VM, des adresses IP publiques et des équilibreurs de charge Standard dans VNet1.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Une adresse IP publique Standard est toujours statique.",
   "a": 0
  },
  {
   "l": "Une VM avec une IP publique Standard et aucun NSG est joignable depuis Internet sur le port 80.",
   "a": 1
  },
  {
   "l": "Une VM derrière un équilibreur public Standard, sur un sous-réseau avec une passerelle NAT, sort sur Internet par l'adresse de la passerelle NAT.",
   "a": 0
  },
  {
   "l": "Un équilibreur de charge interne Standard fournit aux VM de son pool un accès sortant à Internet.",
   "a": 1
  },
  {
   "l": "Azure Load Balancer conserve l'adresse IP source du client.",
   "a": 0
  },
  {
   "l": "Vous pouvez détacher l'interface réseau principale d'une VM pour l'attacher à une autre VM.",
   "a": 1
  }
 ],
 "expl": "<p><b>1. Une adresse IP publique Standard est toujours statique.</b></p><p>Les adresses IP publiques <b>Standard</b> sont <b>toujours statiques</b>. Elles sont « sécurisées par défaut » : le trafic entrant est refusé tant qu'un NSG ne l'autorise pas. Elles prennent en charge les zones et sont requises par les équilibreurs Standard, les passerelles NAT et Bastion.</p><p>Le SKU De base (dynamique ou statique, ouvert par défaut) a été retiré en septembre 2025.</p><p><b>2. Une VM avec une IP publique Standard et aucun NSG est joignable depuis Internet sur le port 80.</b></p><p>Les adresses IP publiques <b>Standard</b> sont <b>sécurisées par défaut</b> : sans NSG qui autorise le trafic, les connexions entrantes sont refusées. (Avec l'ancien SKU De base, la VM était ouverte sans NSG.)</p><p><b>3. Une VM derrière un équilibreur public Standard, sur un sous-réseau avec une passerelle NAT, sort sur Internet par l'adresse de la passerelle NAT.</b></p><p>La <b>passerelle NAT</b> est prioritaire sur les autres méthodes de sortie (règles sortantes d'équilibreur, adresses publiques d'instance). Le trafic <b>entrant</b> par l'équilibreur continue de fonctionner, et ses réponses repartent par l'équilibreur.</p><p><b>4. Un équilibreur de charge interne Standard fournit aux VM de son pool un accès sortant à Internet.</b></p><p>Un équilibreur <b>interne</b> n'a pas d'adresse publique, donc pas de SNAT vers Internet. Il faut prévoir une méthode explicite de sortie : <b>passerelle NAT</b> (recommandée), adresses publiques d'instance, équilibreur public avec règles sortantes, ou pare-feu.</p><p><b>5. Azure Load Balancer conserve l'adresse IP source du client.</b></p><p>Azure Load Balancer travaille en couche 4 et <b>conserve l'adresse IP source</b> des clients (pas de proxy). Si l'application voit une autre adresse, c'est qu'un autre composant (proxy, Application Gateway) est en amont. Application Gateway, lui, transmet l'adresse du client dans l'en-tête <b>X-Forwarded-For</b>.</p><p><b>6. Vous pouvez détacher l'interface réseau principale d'une VM pour l'attacher à une autre VM.</b></p><p>Une VM a toujours une interface <b>principale</b>, qu'on ne peut pas détacher. Une interface <b>secondaire</b> peut être détachée (VM arrêtée et libérée) puis attachée à une autre VM du <b>même réseau virtuel</b> et de la même région.</p>",
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
 "keep": "IP publique Standard = toujours statique, sécurisée par défaut. IP Standard sans NSG = rien n'entre. Passerelle NAT = prioritaire pour la sortie. LB interne = pas de sortie : passerelle NAT. LB conserve l'IP client ; AppGW la met dans X-Forwarded-For. Carte principale non détachable ; secondaire = VM libérée + même VNet."
},
{
 "id": "D4-315",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous gérez l'exposition des ressources de VNet1 vers et depuis Internet. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "Une passerelle NAT",
  "Azure Bastion",
  "Un préfixe d'adresse IP publique",
  "Un service Private Link",
  "Azure DDoS Network Protection",
  "Un équilibreur de charge public",
  "Une passerelle VPN"
 ],
 "tgts": [
  {
   "l": "Les VM de Subnet-Private sortent sur Internet par des IP fixes connues des partenaires, sans aucun trafic entrant",
   "a": 0
  },
  {
   "l": "Les VM de Subnet-Batch utilisent 4 IP publiques fixes en sortie pour éviter l'épuisement des ports SNAT",
   "a": 0
  },
  {
   "l": "RDP et SSH vers les VM depuis le portail, en HTTPS, sans IP publique sur les VM",
   "a": 1
  },
  {
   "l": "Réserver une plage contiguë de 16 adresses publiques à communiquer à un partenaire",
   "a": 2
  },
  {
   "l": "Exposer en privé un service derrière un équilibreur interne à des clients d'autres locataires",
   "a": 3
  },
  {
   "l": "Protéger les IP publiques de VNet1 contre le DDoS, avec rapports, alertes et équipe de réponse rapide",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Les VM de Subnet-Private sortent sur Internet par des IP fixes connues des partenaires, sans aucun trafic entrant</b></p><p>La <b>passerelle NAT</b> fournit la connectivité <b>sortante</b> d'un ou plusieurs sous-réseaux par des adresses IP publiques (ou un préfixe) <b>Standard</b> statiques. Elle n'accepte pas de connexions entrantes non sollicitées. C'est la méthode recommandée pour la sortie Internet.</p><p><b>2. Les VM de Subnet-Batch utilisent 4 IP publiques fixes en sortie pour éviter l'épuisement des ports SNAT</b></p><p>Chaque adresse publique d'une <b>passerelle NAT</b> fournit environ 64 000 ports SNAT, partagés dynamiquement entre toutes les VM du sous-réseau. Ajouter des adresses (jusqu'à 16) augmente la capacité et réduit le risque d'épuisement.</p><p><b>3. RDP et SSH vers les VM depuis le portail, en HTTPS, sans IP publique sur les VM</b></p><p><b>Azure Bastion</b> est un service managé déployé dans le sous-réseau <b>AzureBastionSubnet</b> (/26 minimum) avec une adresse IP publique Standard. Les administrateurs ouvrent la session RDP ou SSH dans le navigateur, en HTTPS (443), et les VM n'ont besoin que d'une adresse privée.</p><p><b>4. Réserver une plage contiguë de 16 adresses publiques à communiquer à un partenaire</b></p><p>Un <b>préfixe d'adresse IP publique</b> réserve une plage contiguë d'adresses Standard (/28 = 16 adresses). On crée ensuite les adresses IP publiques à partir de ce préfixe. Le partenaire peut autoriser toute la plage d'un coup.</p><p><b>5. Exposer en privé un service derrière un équilibreur interne à des clients d'autres locataires</b></p><p>Un <b>service Private Link</b>, placé devant un équilibreur interne Standard, permet à des consommateurs (même dans d'autres locataires) de créer un <b>point de terminaison privé</b> vers votre service, sans appairage ni exposition publique, et même avec des espaces d'adressage qui se chevauchent.</p><p><b>6. Protéger les IP publiques de VNet1 contre le DDoS, avec rapports, alertes et équipe de réponse rapide</b></p><p>Une protection DDoS de base (infrastructure) existe pour tous. <b>DDoS Network Protection</b>, via un <b>plan de protection DDoS</b> associé aux réseaux virtuels, ajoute un réglage adaptatif, la télémétrie, les alertes, la protection des coûts et l'accès à l'équipe DDoS Rapid Response. DDoS IP Protection protège des adresses IP précises.</p>",
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
 "keep": "Sortie Internet avec IP fixes, sans entrant = passerelle NAT. Épuisement SNAT = plus d'IP sur la passerelle NAT. RDP/SSH par le navigateur, sans IP publique sur les VM = Bastion. Plage publique contiguë = préfixe d'adresse IP publique. Exposer son service à d'autres locataires = service Private Link. DDoS avec alertes + équipe de réponse = DDoS Network Protection."
},
{
 "id": "D4-316",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous gouvernez les ressources réseau d'un abonnement de production et d'un abonnement de développement. Que devez-vous faire dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Une VM doit être joignable par vm-demo.francecentral.cloudapp.azure.com :",
   "o": [
    "Une étiquette de nom DNS sur son IP publique",
    "Un point de terminaison privé pour la VM",
    "Une zone DNS privée cloudapp.azure.com",
    "Un enregistrement MX vers l'adresse de la VM"
   ],
   "a": 0
  },
  {
   "l": "Aucune VM de l'abonnement ne doit pouvoir recevoir d'IP publique :",
   "o": [
    "Un NSG qui refuse tout le trafic entrant sur chaque sous-réseau",
    "Une table de routage 0.0.0.0/0 → Aucun sur chaque sous-réseau",
    "Une stratégie Azure Policy qui refuse les IP publiques des interfaces",
    "Une passerelle NAT sur chaque sous-réseau de l'abonnement, sans IP entrante"
   ],
   "a": 2
  },
  {
   "l": "L'abonnement de développement ne doit jamais créer de passerelle VPN ni de circuit ExpressRoute :",
   "o": [
    "Un NSG qui bloque les ports IPsec sur chaque réseau virtuel",
    "Une zone DNS privée qui masque les points de terminaison VPN",
    "Une stratégie Types de ressources non autorisés (Azure Policy)",
    "Une table de routage qui supprime les itinéraires vers le site"
   ],
   "a": 2
  },
  {
   "l": "La création d'une adresse IP publique en France Central échoue (limite de 50) — à vérifier :",
   "o": [
    "La taille du GatewaySubnet de chaque réseau virtuel",
    "Le nombre de NSG associés aux interfaces réseau",
    "La famille de SKU des VM qui reçoivent les adresses",
    "Le quota d'IP publiques de l'abonnement dans la région"
   ],
   "a": 3
  },
  {
   "l": "Repérer les règles NSG trop permissives et les ports de gestion ouverts sur Internet :",
   "o": [
    "Azure DNS et ses journaux de requêtes",
    "Microsoft Defender pour le cloud",
    "Traffic Manager, vue d'ensemble",
    "Azure Resource Mover, évaluation"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Une VM doit être joignable par vm-demo.francecentral.cloudapp.azure.com :</b></p><p>Une adresse IP publique peut avoir une <b>étiquette de nom DNS</b>, qui crée le nom <code>&lt;étiquette&gt;.&lt;région&gt;.cloudapp.azure.com</code> pointant vers elle. Pour un nom de votre domaine, on crée ensuite un CNAME vers ce nom (ou un alias dans Azure DNS).</p><p><b>2. Aucune VM de l'abonnement ne doit pouvoir recevoir d'IP publique :</b></p><p><b>Azure Policy</b> (par exemple la stratégie intégrée « Les interfaces réseau ne doivent pas avoir d'adresses IP publiques », effet Deny) empêche la configuration elle-même. Un NSG filtre le trafic mais n'empêche pas d'attribuer une adresse.</p><p><b>3. L'abonnement de développement ne doit jamais créer de passerelle VPN ni de circuit ExpressRoute :</b></p><p><b>Azure Policy</b> avec la stratégie <b>Types de ressources non autorisés</b> empêche la création de ces ressources dans l'abonnement, quel que soit le rôle de l'utilisateur.</p><p><b>4. La création d'une adresse IP publique en France Central échoue (limite de 50) — à vérifier :</b></p><p>Les ressources réseau ont aussi des <b>quotas</b> par abonnement et par région (adresses IP publiques, réseaux virtuels, NSG…). On les consulte dans <b>Utilisation + quotas</b> et on demande une augmentation si besoin.</p><p><b>5. Repérer les règles NSG trop permissives et les ports de gestion ouverts sur Internet :</b></p><p><b>Microsoft Defender pour le cloud</b> évalue la configuration (dont les NSG) et formule des recommandations, par exemple fermer les ports de gestion exposés à Internet, activer l'accès juste-à-temps ou durcir les règles de NSG.</p>",
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
 "keep": "Nom cloudapp.azure.com = étiquette DNS de l'IP publique. Interdire une configuration = Azure Policy (Deny). Interdire un type de ressource = Azure Policy. Création refusée = vérifier les quotas réseau. Recommandations NSG = Defender pour le cloud."
},
{
 "id": "D4-317",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous gérez les tables de routage de VNet1. Quel est le résultat ou l'action requise dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "RT1 (0.0.0.0/0 → appliance 10.0.2.4) est associée à Subnet1 — trafic Internet des VM :",
   "o": [
    "Il est envoyé vers l'appliance 10.0.2.4",
    "Il sort directement vers Internet par l'itinéraire système",
    "Il est envoyé vers la passerelle VPN",
    "Il est abandonné, faute d'itinéraire"
   ],
   "a": 0
  },
  {
   "l": "Itinéraires 10.0.0.0/8 → appliance 10.1.0.4 et 10.2.0.0/16 → passerelle — paquet vers 10.2.5.20 :",
   "o": [
    "Vers l'appliance virtuelle 10.1.0.4",
    "Vers Internet, par l'itinéraire système",
    "Il est abandonné (itinéraires en conflit)",
    "Vers la passerelle de réseau virtuel"
   ],
   "a": 3
  },
  {
   "l": "RT2, associée à Subnet2, doit aussi s'appliquer aux VM de Subnet3 :",
   "o": [
    "Associer RT2 à l'interface réseau de chaque VM",
    "Associer RT2 à Subnet3",
    "Créer une copie de RT2 pour Subnet3 obligatoirement",
    "Associer RT2 au réseau virtuel"
   ],
   "a": 1
  },
  {
   "l": "Associer une table de Sub1 à un sous-réseau d'un réseau de Sub2, même région :",
   "o": [
    "C'est impossible : il faut le même abonnement et la même région",
    "Il faut d'abord appairer les réseaux virtuels des deux abonnements",
    "Il faut une passerelle VPN entre les deux abonnements",
    "L'association fonctionne, car les deux sont dans la même région"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. RT1 (0.0.0.0/0 → appliance 10.0.2.4) est associée à Subnet1 — trafic Internet des VM :</b></p><p>Un itinéraire défini par l'utilisateur remplace l'itinéraire système par défaut 0.0.0.0/0 → Internet. Tout trafic qui ne correspond pas à un itinéraire plus précis (comme celui du réseau virtuel) part vers l'<b>appliance</b>, souvent un pare-feu, qui doit avoir le transfert IP activé.</p><p><b>2. Itinéraires 10.0.0.0/8 → appliance 10.1.0.4 et 10.2.0.0/16 → passerelle — paquet vers 10.2.5.20 :</b></p><p>Azure choisit l'itinéraire avec le <b>préfixe le plus long</b> (le plus précis) qui correspond à la destination. 10.2.5.20 correspond à /8 et à /16 ; le /16 est plus précis, donc le paquet part vers la <b>passerelle</b>.</p><p>À préfixe égal, l'ordre de préférence est : itinéraire défini par l'utilisateur, puis BGP, puis système.</p><p><b>3. RT2, associée à Subnet2, doit aussi s'appliquer aux VM de Subnet3 :</b></p><p>Une table de routage s'associe à des <b>sous-réseaux</b>, et une même table peut être associée à <b>plusieurs</b> sous-réseaux (de réseaux virtuels de la même région et du même abonnement). Elle ne s'associe ni aux interfaces réseau ni au réseau virtuel entier.</p><p>Un sous-réseau, lui, n'a qu'<b>une</b> table de routage à la fois.</p><p><b>4. Associer une table de Sub1 à un sous-réseau d'un réseau de Sub2, même région :</b></p><p>Une table de routage ne peut être associée qu'aux sous-réseaux de réseaux virtuels du <b>même abonnement</b> et de la <b>même région</b>. Même règle pour les NSG (même région).</p>",
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
 "keep": "UDR 0.0.0.0/0 → appliance = tout l'Internet passe par le pare-feu. Préfixe le plus long gagne ; à égalité : UDR > BGP > système. Une table peut servir plusieurs sous-réseaux ; un sous-réseau = une table. Table de routage = même abonnement et même région que le VNet."
},
{
 "id": "D4-318",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Vous concevez le routage et le filtrage d'une topologie hub-and-spoke reliée au site local. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Configurations",
 "tgtHead": [
  "Exigence",
  "Configuration"
 ],
 "srcs": [
  "Des UDR vers l'appliance",
  "Le transfert IP sur l'interface",
  "Propager les itinéraires de passerelle : Non",
  "Le tunneling forcé vers la passerelle VPN",
  "Un AzureFirewallManagementSubnet",
  "Deux NVA derrière un équilibreur interne en ports HA",
  "Le Pare-feu Azure dans le hub avec des règles FQDN",
  "Une passerelle NAT"
 ],
 "tgts": [
  {
   "l": "Filtrer le trafic entre deux sous-réseaux d'un même réseau par une NVA",
   "a": 0
  },
  {
   "l": "Une VM Linux sert de routeur, mais Azure abandonne les paquets qui ne lui sont pas destinés",
   "a": 1
  },
  {
   "l": "Les VM de Subnet-App passent par le pare-feu, même pour les réseaux locaux appris par BGP",
   "a": 2
  },
  {
   "l": "Tout le trafic Internet des VM passe par le pare-feu du site local pour inspection",
   "a": 3
  },
  {
   "l": "Le Pare-feu Azure doit fonctionner avec le tunneling forcé vers le site local",
   "a": 4
  },
  {
   "l": "La NVA unique du hub ne doit plus être un point de défaillance unique",
   "a": 5
  },
  {
   "l": "Filtrer de façon centrale la sortie Internet de plusieurs réseaux par FQDN, avec des journaux",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Filtrer le trafic entre deux sous-réseaux d'un même réseau par une NVA</b></p><p>Par défaut, le trafic entre sous-réseaux suit l'itinéraire système du réseau virtuel. Un <b>itinéraire défini par l'utilisateur</b> plus précis (le préfixe de l'autre sous-réseau, saut suivant Appliance virtuelle) force le passage par la NVA. Le préfixe du sous-réseau est plus long que celui du réseau virtuel, donc prioritaire.</p><p><b>2. Une VM Linux sert de routeur, mais Azure abandonne les paquets qui ne lui sont pas destinés</b></p><p>Par défaut, Azure abandonne les paquets dont l'adresse de destination n'est pas celle de l'interface réseau. Le <b>transfert IP</b> sur l'interface réseau lève cette restriction. Il faut aussi activer le routage dans le système d'exploitation (par exemple <code>net.ipv4.ip_forward=1</code>).</p><p><b>3. Les VM de Subnet-App passent par le pare-feu, même pour les réseaux locaux appris par BGP</b></p><p>Avec <b>Propager les itinéraires de passerelle</b> à Non, les itinéraires appris par BGP (et les plages du site local) ne sont pas ajoutés aux sous-réseaux associés à la table. Seuls vos itinéraires (par exemple 0.0.0.0/0 et les plages locales vers le pare-feu) s'appliquent.</p><p>Les itinéraires n'ont pas de priorité numérique.</p><p><b>4. Tout le trafic Internet des VM passe par le pare-feu du site local pour inspection</b></p><p>Le <b>tunneling forcé</b> envoie le trafic Internet vers le site local à travers le VPN : avec une table de routage 0.0.0.0/0 → Passerelle de réseau virtuel (et un site par défaut sur la passerelle), ou en recevant la route par défaut par BGP.</p><p>Une passerelle NAT ferait sortir le trafic directement d'Azure.</p><p><b>5. Le Pare-feu Azure doit fonctionner avec le tunneling forcé vers le site local</b></p><p>Avec le tunneling forcé, le trafic de gestion du pare-feu doit rester séparé : on active la <b>carte réseau de gestion</b>, qui utilise le sous-réseau <b>AzureFirewallManagementSubnet</b> (/26) et une adresse IP publique dédiée, avec une sortie Internet directe.</p><p><b>6. La NVA unique du hub ne doit plus être un point de défaillance unique</b></p><p>Le modèle recommandé : deux (ou plus) NVA dans un pool d'un <b>équilibreur interne Standard</b> avec <b>ports HA</b>. Les itinéraires des spokes visent l'<b>adresse frontale</b> de l'équilibreur, qui envoie le trafic vers une NVA saine grâce à la sonde d'intégrité.</p><p><b>7. Filtrer de façon centrale la sortie Internet de plusieurs réseaux par FQDN, avec des journaux</b></p><p>Le <b>Pare-feu Azure</b> est un pare-feu managé avec état. Ses <b>règles d'application</b> filtrent par FQDN (HTTP/HTTPS) ; ses <b>règles de réseau</b> par adresse et port ; ses <b>règles DNAT</b> publient des services. On le place dans le hub et on dirige le trafic des spokes vers lui avec des itinéraires 0.0.0.0/0.</p><p>Les NSG ne filtrent pas par nom de domaine.</p>",
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
 "keep": "Inter-sous-réseaux via NVA = UDR avec le préfixe du sous-réseau. VM qui route = transfert IP (Azure + OS). Ignorer les routes BGP de la passerelle = Propager les itinéraires de passerelle : Non. Internet via le site local = tunneling forcé. Pare-feu + tunneling forcé = AzureFirewallManagementSubnet. NVA HA = 2 NVA + LB interne ports HA ; UDR vers le front-end. Filtrage par FQDN centralisé = Pare-feu Azure + UDR dans les spokes."
},
{
 "id": "D4-319",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous déployez le Pare-feu Azure dans les hubs de plusieurs régions et abonnements. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Les règles de réseau à base de FQDN fonctionnent ; les VM résolvent les noms par le pare-feu :",
   "o": [
    "Une étiquette FQDN dans la règle de réseau",
    "Le mode DNAT sur l'adresse privée du pare-feu",
    "L'inspection TLS avec un certificat intermédiaire",
    "Le proxy DNS, avec le pare-feu comme serveur DNS"
   ],
   "a": 3
  },
  {
   "l": "Déchiffrement TLS, IDPS et filtrage par URL complète — SKU :",
   "o": [
    "Premium",
    "Standard",
    "Aucun : ce n'est pas possible",
    "De base"
   ],
   "a": 0
  },
  {
   "l": "Les pare-feu partagent des règles de base, avec des règles locales en plus :",
   "o": [
    "Une copie manuelle des règles dans chaque pare-feu, région par région",
    "Des stratégies de pare-feu parente et enfants (Firewall Manager)",
    "Azure Policy uniquement, avec une initiative par région",
    "Des NSG communs associés aux sous-réseaux des pare-feu"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Les règles de réseau à base de FQDN fonctionnent ; les VM résolvent les noms par le pare-feu :</b></p><p>Les FQDN dans les <b>règles de réseau</b> exigent que le pare-feu et les clients résolvent les noms de la même façon. Avec le <b>proxy DNS</b>, le pare-feu reçoit les requêtes DNS des VM (son adresse privée est configurée comme serveur DNS) et les transmet au DNS configuré.</p><p><b>2. Déchiffrement TLS, IDPS et filtrage par URL complète — SKU :</b></p><p>Le SKU <b>Premium</b> ajoute l'<b>inspection TLS</b>, l'<b>IDPS</b> (détection et prévention des intrusions par signatures), le <b>filtrage d'URL</b> complet et les catégories web. Standard filtre par FQDN et utilise le renseignement sur les menaces. De base vise les petites entreprises.</p><p><b>3. Les pare-feu partagent des règles de base, avec des règles locales en plus :</b></p><p>Une <b>stratégie de pare-feu</b> (Firewall Policy) peut hériter d'une <b>stratégie parente</b> : les règles de base sont définies une fois, et chaque stratégie enfant ajoute ses règles. <b>Azure Firewall Manager</b> centralise la gestion.</p>",
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
 "keep": "FQDN dans les règles de réseau = proxy DNS. TLS + IDPS + URL = Pare-feu Premium. Règles communes + locales = stratégie parente / enfants."
},
{
 "id": "D4-320",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous gérez plusieurs réseaux virtuels et leurs appairages. Que devez-vous faire dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VNet1-VNet2 et VNet2-VNet3 sont appairés ; VM1 (VNet1) doit joindre VM3 (VNet3) au moindre effort :",
   "o": [
    "Activer le transit de passerelle sur les deux peerings",
    "Ajouter une route vers VNet3 dans une table de routage de VNet1",
    "Créer un peering entre VNet1 et VNet3",
    "Déplacer VM3 dans VNet2 et supprimer VNet3"
   ],
   "a": 2
  },
  {
   "l": "Deux réseaux utilisent tous les deux 10.0.0.0/16 et doivent communiquer :",
   "o": [
    "Réadresser l'un des réseaux virtuels, puis les appairer",
    "Ajouter un NSG qui traduit les adresses en double entre eux",
    "Créer une zone DNS privée commune aux deux réseaux",
    "Les appairer directement, puis ajuster les itinéraires"
   ],
   "a": 0
  },
  {
   "l": "VNet-Prod et VNet-Dev, sans appairage ni VPN, ne doivent jamais communiquer :",
   "o": [
    "Ajouter à chaque réseau une table de routage vers Aucun",
    "Rien : sans appairage ni passerelle, ils sont isolés",
    "Ajouter à VNet-Prod un NSG qui bloque l'espace de VNet-Dev",
    "Les placer dans deux abonnements différents"
   ],
   "a": 1
  },
  {
   "l": "VNet1 (locataire Contoso) et VNet2 (locataire Fabrikam) doivent être appairés :",
   "o": [
    "Non, l'appairage n'est possible que dans le même locataire",
    "Oui, mais seulement avec une passerelle VPN de chaque côté",
    "Non, l'appairage n'est possible que dans le même abonnement",
    "Oui, avec les autorisations nécessaires dans les deux locataires"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. VNet1-VNet2 et VNet2-VNet3 sont appairés ; VM1 (VNet1) doit joindre VM3 (VNet3) au moindre effort :</b></p><p>Le peering de réseaux virtuels n'est <b>pas transitif</b> : VNet1 ↔ VNet2 et VNet2 ↔ VNet3 ne donnent pas VNet1 ↔ VNet3. VNet2 ne relaie pas le trafic tout seul.</p><p>La solution la plus simple est un <b>peering direct</b> entre VNet1 et VNet3.</p><ul><li>Une <b>route</b> vers VNet3 n'aurait aucun effet sans un appareil qui route dans VNet2 (appliance virtuelle ou passerelle), à déployer et administrer.</li><li>Le <b>transit de passerelle</b> sert à partager une passerelle VPN, pas à relayer entre deux peerings.</li><li><b>Déplacer VM3</b> changerait l'architecture.</li></ul><p><b>2. Deux réseaux utilisent tous les deux 10.0.0.0/16 et doivent communiquer :</b></p><p>Des espaces qui se chevauchent empêchent l'appairage et le routage. La solution propre est de <b>réadresser</b> l'un des réseaux. Des solutions de contournement existent (NAT sur une passerelle VPN, Private Link pour exposer des services précis), mais elles compliquent l'architecture. D'où l'importance d'un plan d'adressage dès le départ.</p><p><b>3. VNet-Prod et VNet-Dev, sans appairage ni VPN, ne doivent jamais communiquer :</b></p><p>Un réseau virtuel est une <b>frontière d'isolement</b> : sans appairage, VPN ou autre connexion, ses ressources ne peuvent pas joindre celles d'un autre réseau par adresses privées. (Elles pourraient se joindre par leurs adresses publiques, si elles en ont.)</p><p><b>4. VNet1 (locataire Contoso) et VNet2 (locataire Fabrikam) doivent être appairés :</b></p><p>L'appairage fonctionne entre <b>abonnements</b> et même entre <b>locataires</b> Microsoft Entra. L'administrateur de chaque côté doit avoir le droit de créer le lien d'appairage (par exemple Contributeur de réseau), souvent avec un compte invité dans l'autre locataire.</p>",
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
    "vnet1-vers-vnet2",
    "Connecté"
   ],
   [
    "*vnet1-vers-vnet3",
    "À créer (pas de transitivité)"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Peering non transitif : peering direct, ou hub avec appliance/passerelle qui route. Chevauchement = réadresser, puis appairer. Un VNet est isolé par défaut. Appairage entre abonnements et locataires = possible, avec les droits des deux côtés."
},
{
 "id": "D4-321",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous dépannez la connectivité de plusieurs réseaux virtuels. Quelle est la réponse dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Bastion est dans VNet-Hub, VNet-Spoke y est appairé — connexion aux VM du spoke :",
   "o": [
    "Non, il faut un Bastion par réseau virtuel",
    "Oui, Bastion fonctionne avec les VNets appairés",
    "Non, sauf avec une passerelle VPN dans le hub",
    "Oui, mais seulement avec le SKU Premium"
   ],
   "a": 1
  },
  {
   "l": "Deux VM de sous-réseaux différents de VNet1, sans NSG ni table de routage, ne communiquent pas — cause probable :",
   "o": [
    "Il faut un appairage entre les deux sous-réseaux",
    "Il faut une passerelle VPN entre les sous-réseaux",
    "Le pare-feu du système d'exploitation des VM",
    "Les sous-réseaux d'un VNet sont isolés par défaut"
   ],
   "a": 2
  },
  {
   "l": "Une VM locale ne joint pas une VM de VNet1 par le VPN, l'inverse fonctionne — cause probable :",
   "o": [
    "L'appairage n'est pas transitif vers le site local",
    "Un NSG qui bloque le trafic entrant venant du site",
    "Le DNS fourni par Azure ne résout pas les noms du site",
    "La VM de VNet1 n'a pas d'adresse IP publique"
   ],
   "a": 1
  },
  {
   "l": "La suppression de VNet9 échoue — cause probable :",
   "o": [
    "VNet9 a trop de sous-réseaux pour une suppression en une fois",
    "Un NSG du groupe de ressources n'est associé à aucun sous-réseau",
    "Des ressources y sont encore connectées, ou un verrou s'applique",
    "VNet9 utilise le DNS fourni par Azure au lieu d'un DNS personnalisé"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Bastion est dans VNet-Hub, VNet-Spoke y est appairé — connexion aux VM du spoke :</b></p><p>Azure Bastion prend en charge les <b>réseaux appairés</b> (y compris l'appairage mondial). Un seul Bastion dans le hub suffit pour toute une topologie hub-and-spoke, ce qui réduit les coûts.</p><p><b>2. Deux VM de sous-réseaux différents de VNet1, sans NSG ni table de routage, ne communiquent pas — cause probable :</b></p><p>Par défaut, tous les sous-réseaux d'un réseau virtuel communiquent grâce à l'itinéraire système du réseau virtuel. Sans NSG ni UDR, la cause probable est le <b>pare-feu du système d'exploitation</b> : par exemple, le pare-feu Windows bloque le ping (ICMP) par défaut.</p><p><b>3. Une VM locale ne joint pas une VM de VNet1 par le VPN, l'inverse fonctionne — cause probable :</b></p><p>Le tunnel fonctionne (l'inverse passe). Le trafic <b>entrant</b> est donc filtré : par un NSG (si les règles par défaut ont été remplacées, ou si une règle de refus plus prioritaire existe) ou par le pare-feu de la VM ou du site local. Vérification du flux IP le confirmera.</p><p>La règle par défaut AllowVnetInBound inclut normalement les plages du site local connues par la passerelle.</p><p><b>4. La suppression de VNet9 échoue — cause probable :</b></p><p>On ne peut pas supprimer un réseau virtuel tant que des ressources l'utilisent (interfaces réseau de VM, passerelles, Bastion, points de terminaison privés, services délégués…) ou si un <b>verrou</b> le protège. Il faut d'abord supprimer ou déplacer ces ressources.</p>",
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
 "keep": "Un Bastion dans le hub sert tous les spokes appairés. Sous-réseaux d'un VNet communiquent par défaut ; penser au pare-feu de l'OS. Un sens marche, pas l'autre = filtrage entrant (NSG ou pare-feu). Supprimer un VNet = plus de ressources connectées, pas de verrou."
},
{
 "id": "D4-322",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous gérez la zone DNS publique contoso.com dans Azure DNS. Que devez-vous faire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "La zone vient d'être créée dans Azure DNS et doit devenir effective :",
   "o": [
    "Créer un lien de réseau virtuel vers chaque VNet",
    "Créer un enregistrement PTR pour la zone",
    "Mettre à jour les NS chez le registraire",
    "Activer l'inscription automatique sur la zone"
   ],
   "a": 2
  },
  {
   "l": "La racine contoso.com doit pointer vers le point de terminaison d'Azure Front Door :",
   "o": [
    "Un enregistrement TXT à la racine de la zone",
    "Un enregistrement MX vers le point de terminaison",
    "Un enregistrement d'alias vers Front Door",
    "Un enregistrement CNAME à la racine (@)"
   ],
   "a": 2
  },
  {
   "l": "Les clients doivent voir moins longtemps l'ancienne adresse lors des prochains changements :",
   "o": [
    "Ajouter un enregistrement NS qui pointe vers la nouvelle adresse",
    "Utiliser un enregistrement MX à la place de l'enregistrement A",
    "Supprimer la zone et la recréer avant chaque changement",
    "Réduire le TTL du jeu d'enregistrements avant le changement"
   ],
   "a": 3
  },
  {
   "l": "La zone ne doit pas pouvoir être supprimée par erreur :",
   "o": [
    "Un verrou Suppression impossible sur la zone",
    "Un TTL plus long sur les enregistrements critiques",
    "Une zone DNS privée en copie de la zone publique",
    "Un enregistrement SOA protégé en lecture seule"
   ],
   "a": 0
  },
  {
   "l": "paris.contoso.com doit être délégué à une autre zone Azure DNS — dans contoso.com :",
   "o": [
    "Un lien de réseau virtuel vers la zone paris.contoso.com",
    "Un jeu NS « paris » avec les serveurs de noms de la zone enfant",
    "Un enregistrement CNAME « paris » vers la zone enfant paris.contoso.com",
    "Un enregistrement MX « paris » vers les serveurs de Paris"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. La zone vient d'être créée dans Azure DNS et doit devenir effective :</b></p><p>Pour que la zone Azure fasse autorité, il faut <b>déléguer</b> le domaine : chez le registraire, on remplace les serveurs de noms par les 4 serveurs <b>NS</b> attribués à la zone Azure (ns1-xx.azure-dns.com, etc.).</p><p>Les liens de réseau virtuel et l'inscription automatique concernent les zones <b>privées</b>.</p><p><b>2. La racine contoso.com doit pointer vers le point de terminaison d'Azure Front Door :</b></p><p>Les <b>jeux d'enregistrements d'alias</b> d'Azure DNS pointent vers une ressource Azure (adresse IP publique, profil Traffic Manager, point de terminaison Front Door ou CDN) et peuvent être utilisés à la <b>racine</b> de la zone. Ils suivent automatiquement les changements d'adresse de la ressource.</p><p><b>3. Les clients doivent voir moins longtemps l'ancienne adresse lors des prochains changements :</b></p><p>Le <b>TTL</b> indique combien de temps les résolveurs peuvent garder la réponse en cache. Le réduire quelques heures avant un changement prévu permet une propagation plus rapide. On peut ensuite le remonter.</p><p><b>4. La zone ne doit pas pouvoir être supprimée par erreur :</b></p><p>Les <b>verrous</b> protègent les zones DNS et même des jeux d'enregistrements précis contre la suppression. C'est une bonne pratique pour les zones de production, car une suppression de zone peut rendre tous les services injoignables.</p><p><b>5. paris.contoso.com doit être délégué à une autre zone Azure DNS — dans contoso.com :</b></p><p>Pour déléguer un sous-domaine, on crée la zone enfant (paris.contoso.com), puis, dans la zone parente, un jeu d'enregistrements <b>NS</b> nommé <b>paris</b> qui contient les serveurs de noms de la zone enfant.</p>",
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
 "keep": "Zone publique Azure = déléguer (NS) chez le registraire. Racine vers une ressource Azure = enregistrement d'alias. Propagation rapide = baisser le TTL avant le changement. Protéger une zone DNS = verrou Suppression impossible. Déléguer un sous-domaine = NS dans la zone parente."
},
{
 "id": "D4-323",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous gérez la résolution de noms privée de plusieurs réseaux virtuels. Que devez-vous faire ou utiliser dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Les VM de VNet1 et VNet2, appairés, s'inscrivent automatiquement et se joignent par leur nom dans contoso.local :",
   "o": [
    "Une zone DNS publique contoso.local déléguée par le registraire",
    "Une zone DNS privée contoso.local liée aux VNets, inscription automatique",
    "Un serveur DNS sur une machine virtuelle dans VNet1, utilisé par les VNets",
    "La résolution de noms fournie par Azure, avec le suffixe contoso.local"
   ],
   "a": 1
  },
  {
   "l": "VNet1 passe à des DNS personnalisés ; les VM existantes utilisent encore l'ancien serveur :",
   "o": [
    "Redémarrer les VM (ou renouveler le bail DHCP)",
    "Ajouter les serveurs au fichier hosts de chaque VM",
    "Créer une zone DNS privée liée au réseau virtuel",
    "Supprimer et recréer les VM dans le réseau virtuel"
   ],
   "a": 0
  },
  {
   "l": "Une application App Service intégrée à VNet3 doit résoudre une zone privée liée à VNet3 :",
   "o": [
    "App Service ne peut jamais résoudre une zone DNS privée",
    "Il faut un point de terminaison de service Microsoft.Web",
    "L'application utilise le DNS du VNet, donc la zone liée",
    "Il faut une adresse IP publique sortante dédiée à l'app"
   ],
   "a": 2
  },
  {
   "l": "Adresse virtuelle du DNS fourni par Azure, joignable depuis toute VM :",
   "o": [
    "168.63.129.16",
    "169.254.169.254",
    "8.8.8.8",
    "10.0.0.1"
   ],
   "a": 0
  },
  {
   "l": "Voir depuis une VM Windows l'adresse résolue pour storage91.blob.core.windows.net :",
   "o": [
    "ipconfig /release puis ipconfig /renew",
    "tracert 168.63.129.16",
    "netstat -r (table de routage)",
    "nslookup storage91.blob.core.windows.net"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Les VM de VNet1 et VNet2, appairés, s'inscrivent automatiquement et se joignent par leur nom dans contoso.local :</b></p><p>Une <b>zone DNS privée</b> contoso.local, avec un <b>lien de réseau virtuel</b> vers VNet1 et vers VNet2, et l'<b>inscription automatique</b> activée sur les liens : chaque VM est enregistrée automatiquement, et toutes les VM des deux réseaux résolvent les noms de la zone.</p><ul><li>La <b>résolution fournie par Azure</b> ne fonctionne qu'à l'intérieur d'un même réseau virtuel.</li><li>Un <b>serveur DNS sur une VM</b> marche mais demande de l'administration.</li><li>Une <b>zone publique</b> est résolue sur Internet, pas adaptée à des noms internes.</li></ul><p><b>2. VNet1 passe à des DNS personnalisés ; les VM existantes utilisent encore l'ancien serveur :</b></p><p>Les serveurs DNS sont transmis par <b>DHCP</b>. Les VM existantes ne prennent en compte le changement qu'après un <b>redémarrage</b> ou un renouvellement de bail (<code>ipconfig /renew</code>).</p><p>On peut aussi définir des serveurs DNS au niveau d'une interface réseau, ce qui prime sur ceux du réseau virtuel.</p><p><b>3. Une application App Service intégrée à VNet3 doit résoudre une zone privée liée à VNet3 :</b></p><p>Avec l'<b>intégration au réseau virtuel</b>, l'application hérite des serveurs DNS configurés sur le réseau virtuel (le DNS Azure par défaut, qui résout les zones privées liées). C'est ce qui permet d'utiliser des points de terminaison privés depuis App Service.</p><p><b>4. Adresse virtuelle du DNS fourni par Azure, joignable depuis toute VM :</b></p><p><b>168.63.129.16</b> est l'adresse IP virtuelle de la plateforme Azure : résolveur DNS fourni par Azure, sondes d'intégrité de l'équilibreur de charge, signal de l'agent de VM. Il ne faut pas la bloquer.</p><p><b>169.254.169.254</b> est le service de métadonnées d'instance (IMDS).</p><p><b>5. Voir depuis une VM Windows l'adresse résolue pour storage91.blob.core.windows.net :</b></p><p><code>nslookup</code> (ou <code>Resolve-DnsName</code> en PowerShell) montre l'adresse résolue : une adresse privée (avec le CNAME privatelink) si le point de terminaison privé et le DNS sont bien configurés, sinon une adresse publique. <code>Test-NetConnection -Port 443</code> vérifie ensuite la connexion.</p>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "contoso.local"
  ],
  "title": "contoso.local | Liens de réseau virtuel",
  "menu": [
   "Vue d'ensemble",
   "Jeux d'enregistrements",
   "*Liens de réseau virtuel"
  ],
  "rows": [
   [
    "*lien-vnet1",
    "VNet1 · Inscription automatique : activée"
   ],
   [
    "*lien-vnet2",
    "VNet2 · Inscription automatique : activée"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Noms internes entre VNets = zone DNS privée + liens + inscription automatique. Nouveau DNS du VNet = redémarrer les VM (DHCP). App Service + intégration VNet = DNS du VNet. 168.63.129.16 = IP virtuelle de la plateforme ; 169.254.169.254 = IMDS. Voir l'IP résolue = nslookup / Resolve-DnsName."
},
{
 "id": "D4-324",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous planifiez l'adressage des sous-réseaux de VNet1. Quelle est la réponse dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Adresses attribuables à des VM dans le sous-réseau 10.0.3.0/26 :",
   "o": [
    "64",
    "62",
    "59",
    "251"
   ],
   "a": 2
  },
  {
   "l": "Plus petit préfixe autorisé pour un sous-réseau :",
   "o": [
    "/29",
    "/30",
    "/31",
    "/32"
   ],
   "a": 0
  },
  {
   "l": "Réduire Subnet7 de /24 à /25, avec trois VM entre 10.0.1.4 et 10.0.1.6 — condition :",
   "o": [
    "Le réseau virtuel ne doit pas être appairé",
    "Le sous-réseau ne doit contenir aucune ressource",
    "Aucune adresse utilisée ne doit être hors de la nouvelle plage",
    "Le sous-réseau doit être délégué à un service"
   ],
   "a": 1
  },
  {
   "l": "Sous-réseau à créer pour Azure Bastion :",
   "o": [
    "BastionSubnet, avec un préfixe /27",
    "GatewaySubnet, avec un préfixe /26",
    "AzureBastionSubnet, avec un préfixe /26",
    "AzureBastionSubnet, avec un préfixe /29"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Adresses attribuables à des VM dans le sous-réseau 10.0.3.0/26 :</b></p><p>Un préfixe <b>/26</b> laisse 32 − 26 = 6 bits pour les hôtes, soit 2⁶ = <b>64</b> adresses.</p><p>Azure <b>réserve 5 adresses</b> dans chaque sous-réseau : la première (adresse réseau, .0), les trois suivantes (.1 passerelle par défaut, .2 et .3 pour le DNS Azure) et la dernière (diffusion, .63).</p><p>Il reste 64 − 5 = <b>59</b> adresses utilisables. (Ce n'est pas 62 comme en réseau classique, où l'on ne retire que 2 adresses.)</p><p><b>2. Plus petit préfixe autorisé pour un sous-réseau :</b></p><p>Le plus petit sous-réseau autorisé en IPv4 est un <b>/29</b> : 8 adresses, dont 5 réservées, soit 3 utilisables. Le plus grand est un /2. Les /30, /31 et /32 sont refusés.</p><p><b>3. Réduire Subnet7 de /24 à /25, avec trois VM entre 10.0.1.4 et 10.0.1.6 — condition :</b></p><p>La plage d'adresses d'un sous-réseau ne peut être modifiée que s'il ne contient <b>aucune ressource déployée</b>. Sinon, il faut d'abord déplacer les ressources vers un autre sous-réseau (ou les supprimer), modifier la plage, puis les remettre.</p><p>D'où l'intérêt de bien dimensionner les sous-réseaux dès le départ. L'appairage et la délégation n'ont pas de rapport.</p><p><b>4. Sous-réseau à créer pour Azure Bastion :</b></p><p>Azure Bastion exige un sous-réseau au nom <b>exact</b> <b>AzureBastionSubnet</b>, d'une taille d'au moins <b>/26</b>. Bastion s'y déploie et fournit RDP et SSH par le portail, sans adresse IP publique sur les VM.</p><p>Les autres sous-réseaux réservés à connaître : <b>GatewaySubnet</b> (passerelles VPN et ExpressRoute) et <b>AzureFirewallSubnet</b> (Pare-feu Azure, /26 minimum).</p>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet1"
  ],
  "title": "VNet1 | Sous-réseaux",
  "menu": [
   "Vue d'ensemble",
   "Espace d'adressage",
   "*Sous-réseaux"
  ],
  "rows": [
   [
    "*Subnet3",
    "10.0.3.0/26 · 59 adresses disponibles"
   ],
   [
    "Réservées",
    "10.0.3.0 à .3, et 10.0.3.63"
   ]
  ],
  "btn": "+ Sous-réseau"
 },
 "keep": "Adresses utilisables = 2^(32 − préfixe) − 5. /24 = 251, /26 = 59, /27 = 27, /29 = 3. Plus petit sous-réseau IPv4 = /29. Changer la plage d'un sous-réseau = le vider d'abord. Bastion = AzureBastionSubnet /26 ; VPN = GatewaySubnet ; Pare-feu = AzureFirewallSubnet /26."
},
{
 "id": "D4-325",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous configurez les interfaces réseau et les adresses IP des VM de VNet1. Que devez-vous faire dans chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM8 (10.0.1.4) doit avoir une seconde adresse privée 10.0.1.10 sur la même interface :",
   "o": [
    "Créer un second réseau virtuel",
    "Créer une seconde interface réseau obligatoirement",
    "Modifier l'adresse dans le système d'exploitation uniquement",
    "Ajouter une configuration IP secondaire à l'interface réseau"
   ],
   "a": 3
  },
  {
   "l": "Une VM a besoin d'une adresse IPv6 publique en plus de son IPv4 :",
   "o": [
    "Une passerelle VPN IPv6 dans le réseau virtuel",
    "Une zone DNS privée avec un enregistrement AAAA",
    "Un VNet double pile et une configuration IP IPv6",
    "Un second réseau virtuel uniquement IPv6, appairé"
   ],
   "a": 2
  },
  {
   "l": "Une VM doit garder la même adresse privée après un arrêt avec libération :",
   "o": [
    "Une adresse privée Statique sur l'interface réseau",
    "Une adresse IP publique statique sur la VM",
    "Une réservation DHCP sur un serveur DNS du VNet",
    "Une adresse IP fixe dans les paramètres de Windows"
   ],
   "a": 0
  },
  {
   "l": "Ajouter une troisième interface à une VM qui en a deux — condition :",
   "o": [
    "La VM doit avoir une adresse IP publique sur chaque interface",
    "La VM doit être dans un groupe à haute disponibilité",
    "Les interfaces doivent être dans des réseaux virtuels différents",
    "La taille doit accepter 3 interfaces, et la VM être libérée"
   ],
   "a": 3
  },
  {
   "l": "Une VM à deux interfaces ne répond pas sur la secondaire — cause la plus fréquente :",
   "o": [
    "La VM n'a pas d'adresse IP publique sur l'interface secondaire",
    "L'interface secondaire n'a pas de NSG qui autorise le trafic",
    "L'interface secondaire doit être dans un autre réseau virtuel",
    "Le système n'a une passerelle par défaut que sur l'interface principale"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. VM8 (10.0.1.4) doit avoir une seconde adresse privée 10.0.1.10 sur la même interface :</b></p><p>Une interface réseau peut avoir plusieurs <b>configurations IP</b>, chacune avec une adresse privée (et éventuellement publique). Il faut ensuite configurer l'adresse secondaire dans le système d'exploitation, car le DHCP d'Azure ne fournit que l'adresse principale.</p><p><b>2. Une VM a besoin d'une adresse IPv6 publique en plus de son IPv4 :</b></p><p>Azure prend en charge le <b>double pile</b> : on ajoute un espace d'adressage IPv6 (par exemple /48) au réseau virtuel, un préfixe /64 au sous-réseau, puis une configuration IP IPv6 (avec une adresse publique IPv6 Standard si besoin) sur l'interface réseau.</p><p><b>3. Une VM doit garder la même adresse privée après un arrêt avec libération :</b></p><p>Dans la configuration IP de l'<b>interface réseau</b>, l'affectation <b>Statique</b> réserve l'adresse privée pour l'interface, même après libération de la VM. Azure continue de la donner par DHCP.</p><p>Il ne faut <b>jamais</b> configurer l'adresse IP manuellement dans le système d'exploitation : on risque de perdre la connectivité.</p><p><b>4. Ajouter une troisième interface à une VM qui en a deux — condition :</b></p><p>Le nombre maximal d'interfaces réseau dépend de la <b>taille</b> de la VM. On ajoute ou retire une interface secondaire quand la VM est <b>arrêtée (libérée)</b>. Toutes les interfaces d'une VM doivent être dans le <b>même réseau virtuel</b> (dans des sous-réseaux identiques ou différents).</p><p><b>5. Une VM à deux interfaces ne répond pas sur la secondaire — cause la plus fréquente :</b></p><p>Azure ne fournit la passerelle par défaut que sur l'interface <b>principale</b>. Les réponses au trafic reçu sur l'interface secondaire repartent par l'interface principale, ce qui casse la communication. Il faut configurer le <b>routage</b> dans le système d'exploitation (itinéraires ou tables de routage par interface).</p>",
 "portal": {
  "path": [
   "Interfaces réseau",
   "vm8-nic"
  ],
  "title": "vm8-nic | Configurations IP",
  "menu": [
   "*Configurations IP"
  ],
  "rows": [
   [
    "ipconfig1",
    "10.0.1.4 · Principale"
   ],
   [
    "*ipconfig2",
    "10.0.1.10 · Secondaire"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Plusieurs IP sur une carte = configurations IP secondaires (+ OS). IPv6 = VNet + sous-réseau double pile + config IP IPv6. IP privée fixe = Statique sur l'interface réseau, jamais dans l'OS. Ajouter une carte : taille qui le permet + VM libérée + même VNet. Deuxième carte qui ne répond pas = routage dans l'OS."
},
{
 "id": "D4-326",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous écrivez les règles de groupes de sécurité réseau (NSG) de VNet1. Quelle est la réponse dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "NSG-Sub (Subnet1) autorise le RDP depuis Internet ; NSG-NIC de VM3 n'a que les règles par défaut — RDP vers VM3 :",
   "o": [
    "Non, car un sous-réseau ne peut pas avoir de NSG",
    "Oui, car le NSG de l'interface réseau est ignoré",
    "Non, car le trafic doit être autorisé par les deux NSG",
    "Oui, car le NSG du sous-réseau autorise le port 3389"
   ],
   "a": 2
  },
  {
   "l": "VNet1 et VNet2, appairés, ne doivent échanger que le port 443 :",
   "o": [
    "Une table de routage qui n'envoie que le port 443 vers VNet2",
    "Des NSG : 443 autorisé, le reste refusé, avant AllowVnetInBound",
    "Désactiver l'appairage et publier VNet2 par une IP publique",
    "Un point de terminaison de service sur les sous-réseaux de VNet2"
   ],
   "a": 1
  },
  {
   "l": "Les VM web joignent les VM SQL en 1433, sans adresses IP dans les règles :",
   "o": [
    "Des itinéraires définis par l'utilisateur pour chaque groupe",
    "Des étiquettes de service personnalisées nommées Web et SQL",
    "Des étiquettes de ressource Azure (Rôle=Web, Rôle=SQL)",
    "Des groupes de sécurité d'application en source et destination"
   ],
   "a": 3
  },
  {
   "l": "Les VM de Subnet-App joignent les comptes de stockage de France Central et rien d'autre sur Internet :",
   "o": [
    "Autoriser Storage.FranceCentral, puis refuser Internet en priorité plus basse",
    "Autoriser 0.0.0.0/0 vers le port 443 seulement, puis refuser tout le reste",
    "Autoriser la destination VirtualNetwork uniquement, puis refuser Internet",
    "Refuser l'étiquette Storage, puis autoriser Internet en priorité plus basse"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. NSG-Sub (Subnet1) autorise le RDP depuis Internet ; NSG-NIC de VM3 n'a que les règles par défaut — RDP vers VM3 :</b></p><p>Pour le trafic <b>entrant</b>, Azure évalue d'abord le NSG du <b>sous-réseau</b>, puis celui de l'<b>interface réseau</b>. Le trafic doit être autorisé par <b>les deux</b>. NSG-NIC n'a que les règles par défaut, dont <b>DenyAllInBound</b> (65500) qui refuse le RDP depuis Internet.</p><p>Pour le trafic sortant, l'ordre est inversé : interface réseau puis sous-réseau.</p><p><b>2. VNet1 et VNet2, appairés, ne doivent échanger que le port 443 :</b></p><p>L'appairage ne filtre rien : la règle par défaut <b>AllowVnetInBound</b> autorise le trafic des réseaux appairés. Pour filtrer, on ajoute des règles NSG personnalisées (priorité inférieure à 65000) : autoriser 443 depuis 10.x VNet1, puis refuser le reste venant de cette plage.</p><p><b>3. Les VM web joignent les VM SQL en 1433, sans adresses IP dans les règles :</b></p><p>Un <b>groupe de sécurité d'application</b> regroupe des interfaces réseau. On écrit la règle avec les ASG comme source et destination (« ASG-Web vers ASG-SQL sur 1433 ») ; ajouter une VM au groupe suffit, sans toucher aux règles. Les interfaces réseau d'un ASG doivent être dans le même réseau virtuel.</p><p>Les étiquettes de service représentent des services Azure (Storage, Sql…), pas vos VM.</p><p><b>4. Les VM de Subnet-App joignent les comptes de stockage de France Central et rien d'autre sur Internet :</b></p><p>Une <b>étiquette de service</b> représente les plages d'adresses d'un service Azure, tenues à jour par Microsoft. <b>Storage.FranceCentral</b> limite à la région. On ajoute ensuite une règle qui <b>refuse Internet</b> avec un numéro de priorité plus grand, pour bloquer le reste (la règle par défaut AllowInternetOutBound l'autoriserait sinon).</p>",
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
 "keep": "Entrant : NSG sous-réseau puis NSG carte ; il faut autoriser des deux côtés. Appairage = tout ouvert ; filtrer avec des NSG avant 65000. Règles par rôle de VM, sans IP = groupes de sécurité d'application. Destination = service Azure = étiquette de service (régionale si besoin)."
},
{
 "id": "D4-327",
 "dom": 4,
 "type": "hot",
 "stem": "<p>L'équipe sécurité centralise le filtrage de 15 réseaux virtuels en hub-and-spoke. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Autoriser les sondes de l'équilibreur malgré un refus de tout l'entrant en priorité 4000 — source :",
   "o": [
    "L'étiquette AzureLoadBalancer",
    "L'adresse 169.254.169.254",
    "L'étiquette de service Internet",
    "L'étiquette VirtualNetwork"
   ],
   "a": 0
  },
  {
   "l": "Autoriser la sortie seulement vers Microsoft Entra ID, sans liste d'adresses — destination :",
   "o": [
    "L'étiquette de service Internet",
    "L'adresse virtuelle 168.63.129.16",
    "Un groupe de sécurité d'application",
    "L'étiquette AzureActiveDirectory"
   ],
   "a": 3
  },
  {
   "l": "Bloquer certains ports dans tous les réseaux, sans contournement possible par les propriétaires des NSG :",
   "o": [
    "Des règles d'administrateur de sécurité (Virtual Network Manager)",
    "Des itinéraires définis par l'utilisateur vers une appliance de filtrage",
    "Des groupes de sécurité d'application dans chaque NSG existant",
    "Des NSG avec une règle de refus en priorité 4096 dans chaque VNet"
   ],
   "a": 0
  },
  {
   "l": "Créer et gérer automatiquement les appairages des 15 spokes, avec des règles centralisées :",
   "o": [
    "Network Watcher et sa topologie",
    "Traffic Manager avec des profils",
    "Azure DNS avec des zones privées",
    "Azure Virtual Network Manager"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Autoriser les sondes de l'équilibreur malgré un refus de tout l'entrant en priorité 4000 — source :</b></p><p>Les sondes d'intégrité viennent de l'adresse <b>168.63.129.16</b>, représentée par l'étiquette de service <b>AzureLoadBalancer</b>. La règle par défaut AllowAzureLoadBalancerInBound (65001) les autorise, mais une règle de refus personnalisée la court-circuite : il faut donc une règle explicite plus prioritaire.</p><p><b>2. Autoriser la sortie seulement vers Microsoft Entra ID, sans liste d'adresses — destination :</b></p><p>L'étiquette de service <b>AzureActiveDirectory</b> représente les plages d'adresses de Microsoft Entra ID, tenues à jour par Microsoft. Les étiquettes de service s'utilisent comme source ou destination des règles NSG, des règles du Pare-feu Azure et même dans les itinéraires définis par l'utilisateur.</p><p><b>3. Bloquer certains ports dans tous les réseaux, sans contournement possible par les propriétaires des NSG :</b></p><p>Les <b>règles d'administrateur de sécurité</b> d'Azure Virtual Network Manager sont évaluées <b>avant</b> les NSG. Une règle « Toujours refuser » ne peut pas être annulée par une règle de NSG.</p><p><b>4. Créer et gérer automatiquement les appairages des 15 spokes, avec des règles centralisées :</b></p><p><b>Azure Virtual Network Manager</b> regroupe des réseaux virtuels (groupes de réseaux, statiques ou dynamiques via Azure Policy), déploie des <b>configurations de connectivité</b> (hub-and-spoke ou maillage) et des <b>règles d'administrateur de sécurité</b> qui priment sur les NSG.</p>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG1"
  ],
  "title": "Règles de trafic entrant",
  "rows": [
   [
    "*3900",
    "AzureLoadBalancer · Autoriser"
   ],
   [
    "4000",
    "Any · Refuser"
   ]
  ]
 },
 "keep": "Sondes de l'équilibreur = étiquette AzureLoadBalancer (168.63.129.16). Plages Entra ID = étiquette AzureActiveDirectory. Règles impossibles à contourner par les NSG = règles d'administrateur de sécurité. Connectivité à grande échelle = Azure Virtual Network Manager."
}
);
