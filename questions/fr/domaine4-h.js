/* Domaine 4 : réseau (lot H : D4-411 à D4-420, scénarios longs) */
AZ.questions.push(
{
 "id": "D4-411",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Adventure Works administre 60 VM Windows et Linux réparties dans VNet-Hub et dans VNet-Spoke, appairé au hub. Aucune VM n'a d'adresse IP publique. Vous déployez Azure Bastion dans VNet-Hub.</p><p>Besoins :</p><ul><li>1. les administrateurs Windows veulent ouvrir les sessions depuis le client Bureau à distance installé sur leur poste (mstsc), pas dans le navigateur ;</li><li>2. un prestataire sans compte Azure doit pouvoir se connecter à VM-Erp pendant une semaine, par une URL ;</li><li>3. l'audit exige l'enregistrement vidéo des sessions dans un compte de stockage.</li></ul><p>VNet-Hub a encore les plages libres 10.0.10.0/24 et 10.0.11.0/28.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Niveau de Bastion :",
   "o": [
    "Développeur",
    "De base",
    "Standard",
    "Premium"
   ],
   "a": 3
  },
  {
   "l": "AzureBastionSubnet :",
   "o": [
    "10.0.11.0/28",
    "Un /26 pris dans 10.0.10.0/24",
    "Un sous-réseau dans VNet-Spoke",
    "Le sous-réseau des VM"
   ],
   "a": 1
  },
  {
   "l": "Pour les VM de VNet-Spoke :",
   "o": [
    "Un second Bastion dans VNet-Spoke",
    "Rien : Bastion joint les VM des réseaux appairés",
    "Activer le transit par passerelle",
    "Une règle NSG depuis Internet sur 3389"
   ],
   "a": 1
  },
  {
   "l": "Option pour le besoin 1 :",
   "o": [
    "Lien partageable",
    "Prise en charge du client natif",
    "Tunneling IP vers un port",
    "Copier/coller"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Niveau.</b> Le client natif et le lien partageable demandent au moins Standard, mais l'<b>enregistrement des sessions</b> n'existe qu'en <b>Premium</b> : c'est le besoin le plus exigeant qui fixe le niveau.<b>Sous-réseau.</b> AzureBastionSubnet doit faire au moins /26 ; le /28 libre est trop petit.<b>Spoke.</b> Bastion se connecte aux VM des réseaux appairés, sans second déploiement.<b>Client natif.</b> L'option « Prise en charge du client natif » permet az network bastion rdp, qui lance mstsc. Le lien partageable (besoin 2) s'active aussi, mais c'est une autre option.",
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
    "*Niveau de Bastion",
    "Premium"
   ],
   [
    "AzureBastionSubnet",
    "Un /26 pris dans 10.0.10.0/24"
   ],
   [
    "Pour les VM de VNet-Spoke",
    "Rien : Bastion joint les VM des réseaux appairés"
   ],
   [
    "Option pour le besoin 1",
    "Prise en charge du client natif"
   ]
  ]
 },
 "keep": "Bastion : client natif et lien partageable = Standard ; enregistrement = Premium ; /26 minimum ; VNets appairés couverts."
},
{
 "id": "D4-412",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous concevez VNet-Prod pour une nouvelle application en France Central. Le plan d'adressage doit être définitif, car l'équipe réseau du siège réserve les plages sur ses routeurs.</p><ul><li>Subnet-App héberge 72 VM aujourd'hui, sans croissance prévue.</li><li>VNet-Prod accueillera un Azure Firewall.</li><li>La passerelle de VNet-Prod portera à la fois un circuit ExpressRoute et un VPN site à site de secours.</li><li>VNet1, déjà appairé à VNet2, manque d'adresses : vous lui ajoutez l'espace 10.21.0.0/16. Les VM de VNet2 ne joignent pas les nouvelles VM de 10.21.0.0/16.</li></ul><p>Que devez-vous choisir ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Subnet-App :",
   "o": [
    "/26",
    "/25",
    "/24",
    "/27"
   ],
   "a": 1
  },
  {
   "l": "AzureFirewallSubnet :",
   "o": [
    "/28",
    "/27",
    "/26",
    "/29"
   ],
   "a": 2
  },
  {
   "l": "GatewaySubnet :",
   "o": [
    "/29",
    "/28",
    "/27 ou plus",
    "/30"
   ],
   "a": 2
  },
  {
   "l": "Pour VNet2 :",
   "o": [
    "Supprimer et recréer le peering",
    "Synchroniser le peering côté VNet2",
    "Redémarrer les VM de VNet2",
    "Ajouter une route vers 10.21.0.0/16"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Subnet-App.</b> Azure réserve 5 adresses par sous-réseau : 72 + 5 = 77. Un /26 n'en offre que 64, un /25 en offre 128 : c'est le plus petit qui convient.<b>Pare-feu.</b> AzureFirewallSubnet doit faire au moins /26.<b>Passerelle.</b> Pour faire coexister ExpressRoute et un VPN, GatewaySubnet doit faire /27 ou plus (Microsoft recommande /27 dans tous les cas pour laisser de la marge).<b>Peering.</b> Après une modification de l'espace d'adressage d'un réseau appairé, le peering de l'autre côté passe à l'état « Synchronisation requise ». Il suffit de le synchroniser, sans interruption ni recréation.",
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
    "*Subnet-App",
    "/25"
   ],
   [
    "AzureFirewallSubnet",
    "/26"
   ],
   [
    "GatewaySubnet",
    "/27 ou plus"
   ],
   [
    "Pour VNet2",
    "Synchroniser le peering côté VNet2"
   ]
  ]
 },
 "keep": "5 adresses réservées par sous-réseau. Pare-feu /26, passerelle /27, Bastion /26. Espace modifié = synchroniser le peering distant."
},
{
 "id": "D4-413",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Subnet-App (VNet-Prod, 10.0.0.0/16) est associé à la table de routage RT-App :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Préfixe</th><th>Type de tronçon suivant</th></tr><tr><td>0.0.0.0/0</td><td>Appliance virtuelle 10.0.1.4</td></tr><tr><td>10.50.0.0/16</td><td>Aucun</td></tr></table></div><p>La propagation des routes de passerelle est activée. VNet-Prod est appairé à VNet-Data (10.60.0.0/16). Sa passerelle VPN apprend par BGP la route 10.50.1.0/24 vers le site de Nantes.</p><p>Pour chaque destination d'un paquet envoyé par une VM de Subnet-App, quel est le tronçon suivant ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "10.50.1.20 :",
   "o": [
    "Appliance virtuelle 10.0.1.4",
    "Passerelle de réseau virtuel",
    "Peering de réseau virtuel",
    "Aucun (paquet abandonné)",
    "Internet"
   ],
   "a": 1
  },
  {
   "l": "10.50.2.20 :",
   "o": [
    "Appliance virtuelle 10.0.1.4",
    "Passerelle de réseau virtuel",
    "Peering de réseau virtuel",
    "Aucun (paquet abandonné)",
    "Internet"
   ],
   "a": 3
  },
  {
   "l": "10.60.3.4 :",
   "o": [
    "Appliance virtuelle 10.0.1.4",
    "Passerelle de réseau virtuel",
    "Peering de réseau virtuel",
    "Aucun (paquet abandonné)",
    "Internet"
   ],
   "a": 2
  },
  {
   "l": "8.8.8.8 :",
   "o": [
    "Appliance virtuelle 10.0.1.4",
    "Passerelle de réseau virtuel",
    "Peering de réseau virtuel",
    "Aucun (paquet abandonné)",
    "Internet"
   ],
   "a": 0
  }
 ],
 "expl": "<p>Azure choisit d'abord le <b>préfixe le plus long</b>. À longueur égale seulement, l'ordre est : route utilisateur, puis BGP, puis route système.</p><b>10.50.1.20.</b> La route BGP 10.50.1.0/24 est plus précise que la route utilisateur 10.50.0.0/16 : passerelle de réseau virtuel.<b>10.50.2.20.</b> Seule 10.50.0.0/16 (Aucun) correspond : le paquet est abandonné.<b>10.60.3.4.</b> La route système du peering (10.60.0.0/16) est plus précise que 0.0.0.0/0 : peering de réseau virtuel. Pour forcer ce trafic dans le pare-feu, il faudrait une route 10.60.0.0/16 vers 10.0.1.4.<b>8.8.8.8.</b> Seule 0.0.0.0/0 correspond, et la route utilisateur remplace la route système Internet : appliance virtuelle.",
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
    "*10.50.1.20",
    "Passerelle de réseau virtuel"
   ],
   [
    "10.50.2.20",
    "Aucun (paquet abandonné)"
   ],
   [
    "10.60.3.4",
    "Peering de réseau virtuel"
   ],
   [
    "8.8.8.8",
    "Appliance virtuelle 10.0.1.4"
   ]
  ]
 },
 "keep": "Préfixe le plus long d'abord ; à égalité : utilisateur > BGP > système. 0.0.0.0/0 ne capte pas le trafic de peering."
},
{
 "id": "D4-414",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso garde son domaine Active Directory corp.local sur site, avec les serveurs DNS 192.168.1.10 et 192.168.1.11. Le site est relié à VNet-Hub par ExpressRoute. VNet-Spoke1 et VNet-Spoke2 sont appairés au hub. Tous les réseaux virtuels utilisent le DNS fourni par Azure, et cela ne doit pas changer.</p><p>Les zones DNS privées privatelink.* sont liées aux trois réseaux virtuels.</p><p>Exigences :</p><ul><li>les VM des trois réseaux virtuels doivent résoudre les noms de corp.local ;</li><li>les postes du site doivent résoudre les points de terminaison privés (privatelink) ;</li><li>aucune VM ne doit faire office de serveur DNS.</li></ul><p>Vous déployez Azure DNS Private Resolver dans VNet-Hub.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour corp.local depuis Azure :",
   "o": [
    "Un point de terminaison entrant",
    "Une zone privée corp.local",
    "Un point de terminaison sortant et un ensemble de règles de transfert vers 192.168.1.10 et .11",
    "Les serveurs DNS 192.168.1.10 sur les réseaux virtuels"
   ],
   "a": 2
  },
  {
   "l": "L'ensemble de règles doit être lié à :",
   "o": [
    "VNet-Hub seulement",
    "VNet-Hub, VNet-Spoke1 et VNet-Spoke2",
    "La passerelle ExpressRoute",
    "Aucun réseau : il s'applique au résolveur"
   ],
   "a": 1
  },
  {
   "l": "Sur les DNS du site :",
   "o": [
    "Un redirecteur conditionnel vers 168.63.129.16",
    "Une zone secondaire privatelink",
    "Un redirecteur conditionnel vers l'IP du point de terminaison entrant",
    "Rien"
   ],
   "a": 2
  },
  {
   "l": "Sous-réseaux du résolveur :",
   "o": [
    "Un sous-réseau dédié et délégué par point de terminaison",
    "Un seul sous-réseau partagé avec les VM",
    "GatewaySubnet",
    "AzureFirewallSubnet"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Azure vers corp.local.</b> Le <b>point de terminaison sortant</b> envoie les requêtes, et l'<b>ensemble de règles de transfert</b> dit lesquelles (corp.local → 192.168.1.10 et .11). Les réseaux gardent le DNS Azure.<b>Liens.</b> Un ensemble de règles ne s'applique qu'aux réseaux virtuels qui lui sont liés ; on peut le lier aux spokes de la même région, sans déployer d'autre résolveur.<b>Site vers Azure.</b> 168.63.129.16 n'est pas joignable depuis le site. Le <b>point de terminaison entrant</b> donne une IP privée de VNet-Hub, vers laquelle les DNS du site transfèrent les zones privatelink (ou les zones publiques correspondantes, comme blob.core.windows.net).<b>Sous-réseaux.</b> Chaque point de terminaison exige son propre sous-réseau (au moins /28), délégué à Microsoft.Network/dnsResolvers et sans autre ressource.",
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
    "*Pour corp.local depuis Azure",
    "Un point de terminaison sortant et un ensemble de règles de transfert vers 192.168.1.10 et .11"
   ],
   [
    "L'ensemble de règles doit être lié à",
    "VNet-Hub, VNet-Spoke1 et VNet-Spoke2"
   ],
   [
    "Sur les DNS du site",
    "Un redirecteur conditionnel vers l'IP du point de terminaison entrant"
   ],
   [
    "Sous-réseaux du résolveur",
    "Un sous-réseau dédié et délégué par point de terminaison"
   ]
  ]
 },
 "keep": "Résolveur : sortant + ensemble de règles (Azure → site), entrant (site → Azure), un sous-réseau délégué par point de terminaison."
},
{
 "id": "D4-415",
 "dom": 4,
 "type": "hot",
 "stem": "<p>L'application Paie a trois niveaux, tous dans VNet-Paie : des VM web, des VM d'application et des VM de base de données. Les VM d'un même niveau sont réparties dans plusieurs sous-réseaux, et de nouvelles VM sont ajoutées chaque mois par des modèles. Un seul NSG, NSG-Paie, est associé à tous les sous-réseaux.</p><p>Exigences :</p><ul><li>seules les VM web doivent joindre les VM d'application sur TCP 8443, sans maintenir de liste d'adresses ;</li><li>tout autre trafic entre les VM de VNet-Paie doit être refusé, sans casser les sondes d'équilibrage ;</li><li>les VM d'application doivent joindre Azure SQL Database de France Central, et rien d'autre sur Internet ;</li><li>une VM web de VNet-Partner, appairé à VNet-Paie, doit être traitée comme les autres VM web.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Règle web vers application :",
   "o": [
    "Source VirtualNetwork, destination VirtualNetwork",
    "Source ASG-Web, destination ASG-App",
    "Source les sous-réseaux web, destination les sous-réseaux app",
    "Source Internet, destination ASG-App"
   ],
   "a": 1
  },
  {
   "l": "Pour le reste du trafic interne :",
   "o": [
    "Supprimer la règle par défaut AllowVnetInBound",
    "Autoriser AzureLoadBalancer (3900), puis Refuser VirtualNetwork → VirtualNetwork (4000)",
    "Une règle Refuser Any → Any de priorité 100",
    "Une règle Refuser AzureLoadBalancer"
   ],
   "a": 1
  },
  {
   "l": "Sortie des VM d'application :",
   "o": [
    "Autoriser Sql.FranceCentral, puis refuser Internet",
    "Autoriser Sql, puis refuser Internet",
    "Autoriser AzureCloud",
    "Refuser Internet seulement"
   ],
   "a": 0
  },
  {
   "l": "VM web de VNet-Partner :",
   "o": [
    "L'ajouter à ASG-Web",
    "Impossible avec un ASG : utiliser son adresse IP",
    "Créer ASG-Web dans VNet-Partner",
    "Activer le transit par passerelle"
   ],
   "a": 1
  }
 ],
 "expl": "<b>ASG.</b> Les groupes de sécurité d'application regroupent les cartes réseau par rôle : une règle ASG-Web → ASG-App suit automatiquement les nouvelles VM ajoutées aux groupes, quel que soit leur sous-réseau.<b>Trafic interne.</b> Les règles par défaut ne se suppriment pas ; on les masque par une règle Refuser VirtualNetwork → VirtualNetwork avec un numéro plus petit (4000), placée après les autorisations. Or la balise VirtualNetwork inclut l'adresse virtuelle de l'hôte (168.63.129.16), d'où viennent les sondes : il faut donc autoriser explicitement AzureLoadBalancer juste avant (3900). Un Refuser Any → Any en priorité 100 bloquerait tout.<b>SQL.</b> La balise régionale Sql.FranceCentral limite aux adresses Azure SQL de la région ; il faut ensuite refuser Internet, sinon AllowInternetOutBound laisse tout passer.<b>VNet-Partner.</b> Toutes les cartes réseau d'un ASG doivent appartenir au même réseau virtuel ; une VM d'un réseau appairé ne peut pas y entrer.",
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
    "*Règle web vers application",
    "Source ASG-Web, destination ASG-App"
   ],
   [
    "Pour le reste du trafic interne",
    "Autoriser AzureLoadBalancer (3900), puis Refuser VirtualNetwork → VirtualNetwork (4000)"
   ],
   [
    "Sortie des VM d'application",
    "Autoriser Sql.FranceCentral, puis refuser Internet"
   ],
   [
    "VM web de VNet-Partner",
    "Impossible avec un ASG : utiliser son adresse IP"
   ]
  ]
 },
 "keep": "ASG : par rôle, même VNet uniquement. Règles par défaut : on les masque, on ne les supprime pas. Balise régionale + Refuser Internet."
},
{
 "id": "D4-416",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso a acheté le domaine contoso.com chez un registraire tiers, qui héberge aujourd'hui le DNS public. Vous créez la zone DNS publique contoso.com dans Azure DNS.</p><p>Exigences :</p><ul><li>la zone Azure doit devenir la source faisant autorité pour contoso.com ;</li><li>l'apex contoso.com doit pointer vers l'adresse IP publique d'AppGW1, qui peut changer si la passerelle est recréée ;</li><li>l'équipe Dev gère seule le sous-domaine dev.contoso.com dans une zone de son propre abonnement ;</li><li>personne ne doit pouvoir supprimer la zone contoso.com par erreur, mais les administrateurs DNS doivent pouvoir modifier les enregistrements.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Chez le registraire :",
   "o": [
    "Un enregistrement CNAME vers la zone Azure",
    "Remplacer les serveurs de noms par les quatre serveurs NS de la zone Azure",
    "Un enregistrement TXT de vérification",
    "Un transfert de zone vers Azure"
   ],
   "a": 1
  },
  {
   "l": "Pour l'apex :",
   "o": [
    "Un enregistrement CNAME @",
    "Un enregistrement A statique",
    "Un jeu d'enregistrements alias vers la ressource IP publique",
    "Un enregistrement SRV"
   ],
   "a": 2
  },
  {
   "l": "Pour dev.contoso.com :",
   "o": [
    "Des enregistrements NS « dev » dans contoso.com vers les serveurs de la zone dev",
    "Un enregistrement CNAME « dev »",
    "Le rôle Contributeur de zone DNS sur contoso.com",
    "Une zone privée"
   ],
   "a": 0
  },
  {
   "l": "Protection de la zone :",
   "o": [
    "Un verrou Lecture seule sur la zone",
    "Un verrou Suppression impossible sur la zone",
    "Le rôle Lecteur pour les administrateurs",
    "Une stratégie Deny"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Délégation.</b> La zone devient faisant autorité quand le registraire publie les serveurs de noms d'Azure DNS (ns1-xx.azure-dns.com, etc.).<b>Apex.</b> Un CNAME est interdit à l'apex. Un enregistrement <b>alias</b> pointe vers la ressource IP publique elle-même : si l'adresse change, l'enregistrement suit.<b>Sous-domaine.</b> On délègue dev.contoso.com en créant, dans la zone parente, un jeu NS « dev » avec les serveurs de la zone enfant.<b>Verrou.</b> Suppression impossible empêche de supprimer la zone mais laisse modifier les enregistrements. Lecture seule bloquerait aussi les modifications.",
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
    "*Chez le registraire",
    "Remplacer les serveurs de noms par les quatre serveurs NS de la zone Azure"
   ],
   [
    "Pour l'apex",
    "Un jeu d'enregistrements alias vers la ressource IP publique"
   ],
   [
    "Pour dev.contoso.com",
    "Des enregistrements NS « dev » dans contoso.com vers les serveurs de la zone dev"
   ],
   [
    "Protection de la zone",
    "Un verrou Suppression impossible sur la zone"
   ]
  ]
 },
 "keep": "Délégation = NS chez le registraire. Apex vers une ressource Azure = alias. Sous-domaine = NS dans la zone parente."
},
{
 "id": "D4-417",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Deux appliances virtuelles de pare-feu tiers, NVA1 (10.0.1.4) et NVA2 (10.0.1.5), filtrent tout le trafic entre les spokes et vers Internet. Elles sont dans le sous-réseau Subnet-NVA de VNet-Hub, en mode actif-actif. Aujourd'hui, les tables de routage des spokes envoient 0.0.0.0/0 vers 10.0.1.4 : si NVA1 tombe, tout le trafic est perdu.</p><p>Exigences :</p><ul><li>répartir le trafic entre NVA1 et NVA2 et retirer automatiquement une appliance en panne ;</li><li>couvrir tous les protocoles et tous les ports sans règle par port ;</li><li>les appliances doivent pouvoir relayer des paquets dont elles ne sont ni la source ni la destination.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Équilibreur :",
   "o": [
    "Standard interne",
    "De base interne",
    "Standard public",
    "Équilibreur de passerelle"
   ],
   "a": 0
  },
  {
   "l": "Règle d'équilibrage :",
   "o": [
    "Une règle TCP 443",
    "Ports HA",
    "Des règles NAT entrantes",
    "Une règle de trafic sortant"
   ],
   "a": 1
  },
  {
   "l": "Tronçon suivant des routes des spokes :",
   "o": [
    "Appliance virtuelle : IP frontale de l'équilibreur",
    "Appliance virtuelle : 10.0.1.5",
    "Passerelle de réseau virtuel",
    "Internet"
   ],
   "a": 0
  },
  {
   "l": "Sur les cartes réseau de NVA1 et NVA2 :",
   "o": [
    "La mise en réseau accélérée",
    "Le transfert IP",
    "Une IP publique",
    "Un ASG"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Équilibreur.</b> Les ports HA n'existent que sur un équilibreur <b>Standard interne</b>. L'équilibreur de passerelle sert à chaîner des appliances de manière transparente derrière un équilibreur public, ce n'est pas le modèle décrit.<b>Ports HA.</b> Une seule règle couvre tous les ports TCP et UDP ; la sonde retire l'appliance en panne.<b>Routes.</b> Le tronçon suivant des routes devient l'adresse frontale de l'équilibreur interne, type « Appliance virtuelle ».<b>Transfert IP.</b> Sans le transfert IP sur la carte réseau Azure, la plateforme abandonne les paquets dont l'adresse de destination n'est pas celle de la VM.",
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
    "*Équilibreur",
    "Standard interne"
   ],
   [
    "Règle d'équilibrage",
    "Ports HA"
   ],
   [
    "Tronçon suivant des routes des spokes",
    "Appliance virtuelle : IP frontale de l'équilibreur"
   ],
   [
    "Sur les cartes réseau de NVA1 et NVA2",
    "Le transfert IP"
   ]
  ]
 },
 "keep": "NVA en HA : équilibreur Standard interne, ports HA, route vers l'IP frontale, transfert IP sur les cartes."
},
{
 "id": "D4-418",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Northwind a un circuit ExpressRoute de référence SKU Standard, à Paris, relié à VNet-Hub (France Central). Un second circuit relie son site de Lyon, à Marseille.</p><p>Nouveaux besoins :</p><ul><li>relier au circuit de Paris VNet-Asia, un réseau virtuel en Japan East ;</li><li>faire communiquer les sites de Paris et de Lyon par le réseau de Microsoft, sans passer par leur propre WAN ;</li><li>en cas de panne du circuit de Paris, VNet-Hub doit rester joignable depuis le siège par Internet, automatiquement.</li></ul><p>VNet-Hub contient déjà une passerelle ExpressRoute ErGw1AZ dans un GatewaySubnet /27.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour VNet-Asia :",
   "o": [
    "Passer le circuit de Paris en Premium",
    "Un peering de VNet-Asia vers VNet-Hub, avec transit",
    "Un circuit Local",
    "Rien : Standard couvre toutes les régions"
   ],
   "a": 0
  },
  {
   "l": "Entre Paris et Lyon :",
   "o": [
    "Un VPN site à site entre les sites",
    "ExpressRoute Global Reach entre les deux circuits",
    "Le peering Microsoft",
    "Un peering de réseau virtuel"
   ],
   "a": 1
  },
  {
   "l": "Secours Internet :",
   "o": [
    "Une passerelle VPN dans le même GatewaySubnet, avec une connexion site à site",
    "Une seconde passerelle ExpressRoute",
    "Une passerelle VPN dans un autre réseau virtuel",
    "Une passerelle NAT"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Japan East.</b> Un circuit Standard ne relie que les réseaux virtuels de la même zone géopolitique. Pour une autre zone, il faut l'extension <b>Premium</b>.<b>Paris ↔ Lyon.</b> Global Reach relie deux circuits ExpressRoute pour que les sites communiquent par le réseau de Microsoft.<b>Secours.</b> La coexistence ExpressRoute + VPN se fait avec une passerelle VPN dans le même GatewaySubnet (/27 minimum, c'est le cas). Les routes ExpressRoute sont préférées ; si le circuit tombe, le trafic bascule sur le VPN. Un réseau virtuel n'a qu'une passerelle de chaque type.",
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
    "*Pour VNet-Asia",
    "Passer le circuit de Paris en Premium"
   ],
   [
    "Entre Paris et Lyon",
    "ExpressRoute Global Reach entre les deux circuits"
   ],
   [
    "Secours Internet",
    "Une passerelle VPN dans le même GatewaySubnet, avec une connexion site à site"
   ]
  ]
 },
 "keep": "Autre zone géopolitique = Premium. Site ↔ site par Microsoft = Global Reach. Secours = VPN coexistant, même GatewaySubnet."
},
{
 "id": "D4-419",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Fabrikam compte 30 réseaux virtuels dans deux régions, 25 agences reliées par VPN et un circuit ExpressRoute. Le maillage de peerings et les tables de routage sont devenus ingérables. L'équipe veut passer à Azure Virtual WAN.</p><p>Exigences :</p><ul><li>les agences doivent communiquer entre elles et avec tous les réseaux virtuels, y compris ceux de l'autre région ;</li><li>tout le trafic privé et tout le trafic Internet doivent passer par un Azure Firewall, sans maintenir de tables de routage dans les spokes ;</li><li>les spokes ne doivent pas avoir leur propre passerelle.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Type de WAN virtuel :",
   "o": [
    "De base",
    "Standard"
   ],
   "a": 1
  },
  {
   "l": "Hubs :",
   "o": [
    "Un hub virtuel par région",
    "Un hub pour les deux régions",
    "Un hub par agence",
    "Un hub par réseau virtuel"
   ],
   "a": 0
  },
  {
   "l": "Inspection :",
   "o": [
    "Des routes utilisateur 0.0.0.0/0 dans chaque spoke",
    "Des hubs sécurisés avec l'intention de routage (trafic privé et Internet)",
    "Un pare-feu dans chaque spoke",
    "Des NSG sur les connexions"
   ],
   "a": 1
  },
  {
   "l": "Spokes :",
   "o": [
    "Des connexions de réseau virtuel au hub de leur région",
    "Un peering avec chaque autre spoke",
    "Une passerelle VPN par spoke",
    "Un circuit ExpressRoute par spoke"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Standard.</b> Le WAN virtuel De base ne gère que le VPN site à site ; ExpressRoute, le transit entre réseaux virtuels et entre hubs, et Azure Firewall exigent Standard.<b>Hubs.</b> Un hub par région ; les hubs d'un même WAN Standard sont maillés automatiquement.<b>Intention de routage.</b> Avec un hub sécurisé (Azure Firewall dans le hub), les stratégies de routage pour le trafic privé et Internet envoient tout au pare-feu, sans table de routage dans les spokes.<b>Spokes.</b> Une connexion de réseau virtuel relie chaque spoke à son hub, qui fournit les passerelles.",
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
    "*Type de WAN virtuel",
    "Standard"
   ],
   [
    "Hubs",
    "Un hub virtuel par région"
   ],
   [
    "Inspection",
    "Des hubs sécurisés avec l'intention de routage (trafic privé et Internet)"
   ],
   [
    "Spokes",
    "Des connexions de réseau virtuel au hub de leur région"
   ]
  ]
 },
 "keep": "Virtual WAN Standard, un hub par région, hub sécurisé + intention de routage."
},
{
 "id": "D4-420",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Tailspin exploite trois services dans deux régions, France Central et East US. Chaque région dispose de ses propres back-ends.</p><ul><li>Service 1 : un serveur de jeu en TCP 7777, derrière un équilibreur public Standard dans chaque région. Les joueurs doivent utiliser une seule adresse IP fixe, et le trafic doit basculer vers l'autre région en quelques secondes en cas de panne.</li><li>Service 2 : le site public www.tailspin.com en HTTPS, avec un pare-feu d'application web en périphérie, la mise en cache des images et l'accélération pour les visiteurs du monde entier.</li><li>Service 3 : un portail interne dont le serveur de secours se trouve dans le datacenter de Tailspin, hors d'Azure ; la bascule peut prendre quelques minutes, au niveau DNS.</li></ul><p>Quel service devez-vous utiliser pour chacun ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Service 1 :",
   "o": [
    "Azure Traffic Manager",
    "Un équilibreur de charge interrégional (niveau Global)",
    "Azure Front Door",
    "Application Gateway"
   ],
   "a": 1
  },
  {
   "l": "Service 2 :",
   "o": [
    "Azure Traffic Manager",
    "Un équilibreur de charge interrégional (niveau Global)",
    "Azure Front Door",
    "Application Gateway"
   ],
   "a": 2
  },
  {
   "l": "Service 3 :",
   "o": [
    "Azure Traffic Manager",
    "Un équilibreur de charge interrégional (niveau Global)",
    "Azure Front Door",
    "Application Gateway"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Service 1.</b> TCP non HTTP, une IP anycast unique et une bascule rapide : l'équilibreur <b>interrégional</b> (niveau Global) place les équilibreurs Standard régionaux derrière une seule IP. Traffic Manager dépend du cache DNS des clients, donc bascule plus lentement.<b>Service 2.</b> HTTP(S) mondial avec WAF, cache et accélération : <b>Azure Front Door</b>. Application Gateway est régional.<b>Service 3.</b> Un point de terminaison hors d'Azure et une bascule DNS acceptable : <b>Traffic Manager</b>, avec un point de terminaison externe.",
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
    "*Service 1",
    "Un équilibreur de charge interrégional (niveau Global)"
   ],
   [
    "Service 2",
    "Azure Front Door"
   ],
   [
    "Service 3",
    "Azure Traffic Manager"
   ]
  ]
 },
 "keep": "Global TCP/UDP + IP unique = équilibreur interrégional. Global HTTP + WAF + cache = Front Door. DNS + externe = Traffic Manager."
}
);
