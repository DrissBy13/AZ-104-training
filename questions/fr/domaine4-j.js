/* Domaine 4 : réseau (lot J : D4-430 à D4-440, scénarios longs) */
AZ.questions.push(
{
 "id": "D4-430",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VNet-Hub contient Subnet-PE, où sont déployés les points de terminaison privés de dix comptes de stockage et de trois bases Azure SQL. Les spokes envoient 0.0.0.0/0 vers AzFW1 (10.0.1.4), et NSG-PE est associé à Subnet-PE avec une règle qui n'autorise que 10.1.0.0/16 vers 1433.</p><p>Constats :</p><ul><li>une VM de 10.2.0.0/16 parvient malgré tout à joindre les bases SQL sur 1433 ;</li><li>les journaux d'AzFW1 ne montrent aucun trafic des spokes vers les points de terminaison privés, alors que la sécurité exige leur inspection ;</li><li>l'équipe réseau demande combien d'adresses de Subnet-PE consomme chaque point de terminaison privé.</li></ul><p>Que devez-vous répondre ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour que NSG-PE s'applique :",
   "o": [
    "Associer NSG-PE à la carte de chaque point de terminaison",
    "Activer les stratégies réseau (NSG) des points de terminaison privés sur Subnet-PE",
    "Passer NSG-PE en priorité 100",
    "Ajouter un ASG"
   ],
   "a": 1
  },
  {
   "l": "Pour faire passer le trafic par AzFW1 :",
   "o": [
    "Rien : 0.0.0.0/0 suffit",
    "Activer les stratégies réseau (tables de routage) sur Subnet-PE et une route vers le préfixe de Subnet-PE via 10.0.1.4 dans les spokes",
    "Une route /32 par point de terminaison sur Subnet-PE",
    "Un peering entre les spokes"
   ],
   "a": 1
  },
  {
   "l": "Adresses par point de terminaison :",
   "o": [
    "Une adresse IP privée (pour une sous-ressource)",
    "Un /28 complet",
    "Une adresse par client",
    "Aucune"
   ],
   "a": 0
  }
 ],
 "expl": "<b>NSG.</b> Par défaut, les stratégies réseau sont désactivées pour les points de terminaison privés : les NSG du sous-réseau ne s'appliquent pas à leur trafic. Il faut activer la propriété (privateEndpointNetworkPolicies) sur Subnet-PE.<b>Routage.</b> Chaque point de terminaison crée une route système /32, plus précise que 0.0.0.0/0 : le trafic contourne le pare-feu. Une fois les stratégies de tables de routage activées, une route utilisateur vers le préfixe de Subnet-PE (plus large que /32) l'emporte sur ces /32, sans maintenir une route par point de terminaison.<b>Adresses.</b> Un point de terminaison privé utilise une adresse IP du sous-réseau pour la sous-ressource ciblée (certains services, comme Cosmos DB, en utilisent une par région).",
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
    "*Pour que NSG-PE s'applique",
    "Activer les stratégies réseau (NSG) des points de terminaison privés sur Subnet-PE"
   ],
   [
    "Pour faire passer le trafic par AzFW1",
    "Activer les stratégies réseau (tables de routage) sur Subnet-PE et une route vers le préfixe de Subnet-PE via 10.0.1.4 dans les spokes"
   ],
   [
    "Adresses par point de terminaison",
    "Une adresse IP privée (pour une sous-ressource)"
   ]
  ]
 },
 "keep": "Point de terminaison privé : NSG et routes utilisateur ignorés tant que les stratégies réseau du sous-réseau sont désactivées."
},
{
 "id": "D4-431",
 "dom": 4,
 "type": "hot",
 "stem": "<p>AzFW1 (Standard) relie les réseaux Azure au siège par ExpressRoute. Le siège utilise en interne la plage publique 52.10.0.0/16, achetée il y a longtemps, en plus de 10.0.0.0/8. Un partenaire est joint par un VPN derrière AzFW1, sur 172.20.0.0/16.</p><p>Constats et besoins :</p><ul><li>le serveur de licences 52.10.4.20, au siège, voit l'adresse d'AzFW1 comme source au lieu de celle des VM ; il refuse les connexions ;</li><li>le partenaire exige au contraire que tout le trafic qui lui parvient vienne d'une seule adresse, celle du pare-feu ;</li><li>la sécurité veut que le trafic Internet d'AzFW1 parte lui aussi vers le siège, par ExpressRoute.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Plages privées (sans SNAT) d'AzFW1 :",
   "o": [
    "Plages IANA privées (par défaut)",
    "Plages IANA privées + 52.10.0.0/16, sans 172.16.0.0/12",
    "0.0.0.0/0",
    "255.255.255.255/32"
   ],
   "a": 1
  },
  {
   "l": "Effet sur le partenaire :",
   "o": [
    "Son trafic n'est plus traduit",
    "Son trafic est traduit vers l'IP privée d'AzFW1",
    "Son trafic est traduit vers l'IP publique d'AzFW1",
    "Son trafic est bloqué"
   ],
   "a": 1
  },
  {
   "l": "Pour le trafic Internet d'AzFW1 :",
   "o": [
    "Une route 0.0.0.0/0 vers la passerelle sur AzureFirewallSubnet, sans autre changement",
    "Le tunnel forcé, avec AzureFirewallManagementSubnet et une IP publique de gestion",
    "Une passerelle NAT sur AzureFirewallSubnet",
    "Désactiver l'IP publique d'AzFW1"
   ],
   "a": 1
  }
 ],
 "expl": "<b>SNAT.</b> Azure Firewall ne traduit pas le trafic dont la destination est dans ses plages « privées » (par défaut, les plages IANA RFC 1918 et 100.64.0.0/10) pour les règles de réseau. 52.10.0.0/16 est public : il est traduit. On l'ajoute à la liste.<b>Partenaire.</b> 172.20.0.0/16 fait partie de 172.16.0.0/12 ; en retirant cette plage de la liste, le trafic vers le partenaire est traduit vers l'adresse privée du pare-feu (côté VPN).<b>Tunnel forcé.</b> Le pare-feu a besoin d'un accès direct pour sa gestion : le tunnel forcé exige le sous-réseau AzureFirewallManagementSubnet (/26) avec sa propre IP publique. Une simple route 0.0.0.0/0 sur AzureFirewallSubnet sans carte de gestion casserait le pare-feu.",
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
    "*Plages privées (sans SNAT) d'AzFW1",
    "Plages IANA privées + 52.10.0.0/16, sans 172.16.0.0/12"
   ],
   [
    "Effet sur le partenaire",
    "Son trafic est traduit vers l'IP privée d'AzFW1"
   ],
   [
    "Pour le trafic Internet d'AzFW1",
    "Le tunnel forcé, avec AzureFirewallManagementSubnet et une IP publique de gestion"
   ]
  ]
 },
 "keep": "Azure Firewall : pas de SNAT vers les plages privées déclarées (modifiables). Tunnel forcé = sous-réseau de gestion."
},
{
 "id": "D4-432",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VPNGW1 (VNet-Hub) est aujourd'hui de référence SKU Basic. Les 180 commerciaux doivent se connecter en point à site avec le client Windows natif IKEv2 et des certificats. VNet-Hub utilise 10.0.0.0/16 ; les spokes 10.1.0.0/16 à 10.4.0.0/16 utilisent la passerelle distante ; le siège de Lyon utilise 192.168.0.0/16 et est relié en site à site, avec BGP.</p><p>Hier, vous avez ajouté VNet-Spoke5 (10.5.0.0/16) avec « Utiliser la passerelle distante ». Les commerciaux déjà connectés ne le joignent pas, contrairement aux autres spokes.</p><p>Que devez-vous choisir ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Référence SKU de VPNGW1 :",
   "o": [
    "Basic",
    "VpnGw1 (recréer la passerelle)",
    "VpnGw1 (redimensionner sur place)",
    "VpnGw3"
   ],
   "a": 1
  },
  {
   "l": "Pool d'adresses clients :",
   "o": [
    "10.0.200.0/24",
    "192.168.200.0/24",
    "172.16.200.0/24",
    "10.5.200.0/24"
   ],
   "a": 2
  },
  {
   "l": "Pour VNet-Spoke5 :",
   "o": [
    "Ajouter une route sur chaque poste",
    "Télécharger et réinstaller le profil du client VPN",
    "Activer le transit par passerelle sur Spoke5",
    "Redémarrer VPNGW1"
   ],
   "a": 1
  },
  {
   "l": "Accès des commerciaux au siège de Lyon :",
   "o": [
    "Fonctionne : le site à site utilise BGP",
    "Impossible en point à site",
    "Exige un second tunnel",
    "Exige un peering"
   ],
   "a": 0
  }
 ],
 "expl": "<b>SKU.</b> Basic ne prend en charge ni IKEv2 ni OpenVPN en point à site (seulement SSTP) et ne peut pas être redimensionné vers une autre référence : il faut supprimer et recréer la passerelle en VpnGw1, qui accepte jusqu'à 250 connexions IKEv2.<b>Pool.</b> Il ne doit chevaucher ni les réseaux Azure (10.0.0.0/16 à 10.5.0.0/16) ni le site (192.168.0.0/16) : 172.16.200.0/24 convient.<b>Spoke5.</b> Les routes poussées aux clients sont figées dans le profil. Après un changement de topologie (nouveau peering), il faut télécharger et réinstaller le profil.<b>Lyon.</b> Les clients point à site joignent un site relié en site à site quand celui-ci utilise BGP : ses préfixes sont alors annoncés aux clients.",
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
    "*Référence SKU de VPNGW1",
    "VpnGw1 (recréer la passerelle)"
   ],
   [
    "Pool d'adresses clients",
    "172.16.200.0/24"
   ],
   [
    "Pour VNet-Spoke5",
    "Télécharger et réinstaller le profil du client VPN"
   ],
   [
    "Accès des commerciaux au siège de Lyon",
    "Fonctionne : le site à site utilise BGP"
   ]
  ]
 },
 "keep": "Basic : SSTP seul, pas de redimensionnement. Nouveau peering = nouveau profil client. P2S vers site = BGP sur le S2S."
},
{
 "id": "D4-433",
 "dom": 4,
 "type": "hot",
 "stem": "<p>LB-App (équilibreur interne Standard) répartit TCP 443 vers VM-A et VM-B. La sonde d'intégrité est de type TCP sur le port 443.</p><p>Incidents :</p><ul><li>la nuit dernière, le processus applicatif de VM-A s'est bloqué ; le port 443 restait ouvert et LB-App a continué à lui envoyer des requêtes pendant deux heures ;</li><li>ce soir, l'équipe doit mettre à jour VM-B ; les sessions en cours (longs téléchargements) ne doivent pas être coupées, mais aucune nouvelle session ne doit arriver sur VM-B ;</li><li>après un durcissement, le pare-feu Windows de VM-A n'autorise plus que le sous-réseau du client sur 443 ; VM-A est aussitôt marquée « Non saine ».</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour le blocage applicatif :",
   "o": [
    "Réduire l'intervalle de la sonde TCP",
    "Remplacer la sonde par une sonde HTTPS sur une page /health qui teste l'application",
    "Activer la persistance de session",
    "Ajouter une règle NAT entrante"
   ],
   "a": 1
  },
  {
   "l": "Pour la mise à jour de VM-B :",
   "o": [
    "Retirer VM-B du pool",
    "Faire échouer la sonde sur VM-B (les flux établis continuent)",
    "Arrêter VM-B",
    "Supprimer la règle d'équilibrage"
   ],
   "a": 1
  },
  {
   "l": "Pour VM-A :",
   "o": [
    "Autoriser 168.63.129.16 dans le pare-feu Windows",
    "Autoriser la balise AzureLoadBalancer dans le pare-feu Windows",
    "Désactiver le pare-feu Windows",
    "Changer le port de la sonde"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Blocage.</b> Une sonde TCP ne vérifie que l'ouverture du port. Une sonde HTTP(S) sur une page qui teste réellement l'application (base, dépendances) retire l'instance dès qu'elle ne répond plus 200.<b>Mise à jour.</b> Sur un équilibreur Standard, quand la sonde échoue, les nouveaux flux ne sont plus envoyés à l'instance, mais les connexions TCP établies continuent. Retirer la VM du pool couperait les flux existants.<b>Pare-feu invité.</b> Les sondes viennent de 168.63.129.16. Dans le système invité, il faut autoriser cette adresse ; la balise AzureLoadBalancer n'existe que dans les NSG.",
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
    "*Pour le blocage applicatif",
    "Remplacer la sonde par une sonde HTTPS sur une page /health qui teste l'application"
   ],
   [
    "Pour la mise à jour de VM-B",
    "Faire échouer la sonde sur VM-B (les flux établis continuent)"
   ],
   [
    "Pour VM-A",
    "Autoriser 168.63.129.16 dans le pare-feu Windows"
   ]
  ]
 },
 "keep": "Sonde HTTP pour tester l'application. Sonde en échec : nouveaux flux coupés, flux établis maintenus. Pare-feu invité : 168.63.129.16."
},
{
 "id": "D4-434",
 "dom": 4,
 "type": "hot",
 "stem": "<p>La direction de Northwind veut savoir quel contrôle déployer pour chacun de ses besoins de sécurité réseau. L'environnement comprend un hub avec Azure Firewall Standard, des spokes avec des NSG et une Application Gateway WAF_v2 qui publie le site public.</p><ul><li>Besoin 1 : bloquer les injections SQL et le cross-site scripting vers le site public.</li><li>Besoin 2 : n'autoriser la sortie Internet des VM que vers une liste de FQDN.</li><li>Besoin 3 : isoler deux sous-réseaux d'un même spoke, au port près, sans faire passer le trafic par le hub.</li><li>Besoin 4 : bloquer automatiquement le trafic vers des adresses IP et des domaines malveillants connus, mis à jour par Microsoft.</li></ul><p>Quel contrôle devez-vous utiliser pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Besoin 1 :",
   "o": [
    "Un NSG",
    "Azure Firewall, règles d'application",
    "La stratégie WAF de l'Application Gateway",
    "Le renseignement sur les menaces d'Azure Firewall"
   ],
   "a": 2
  },
  {
   "l": "Besoin 2 :",
   "o": [
    "Un NSG",
    "Azure Firewall, règles d'application",
    "La stratégie WAF de l'Application Gateway",
    "Le renseignement sur les menaces d'Azure Firewall"
   ],
   "a": 1
  },
  {
   "l": "Besoin 3 :",
   "o": [
    "Un NSG",
    "Azure Firewall, règles d'application",
    "La stratégie WAF de l'Application Gateway",
    "Le renseignement sur les menaces d'Azure Firewall"
   ],
   "a": 0
  },
  {
   "l": "Besoin 4 :",
   "o": [
    "Un NSG",
    "Azure Firewall, règles d'application",
    "La stratégie WAF de l'Application Gateway",
    "Le renseignement sur les menaces d'Azure Firewall en mode Alerter et refuser"
   ],
   "a": 3
  }
 ],
 "expl": "<b>1.</b> Les attaques applicatives HTTP (OWASP : injection SQL, XSS) relèvent du <b>WAF</b>.<b>2.</b> Le filtrage par FQDN en sortie se fait par les règles d'application d'Azure Firewall ; un NSG ne connaît que des adresses et des balises.<b>3.</b> Le trafic entre deux sous-réseaux d'un même réseau virtuel ne passe pas par le hub : un NSG (ou une route utilisateur, mais l'exigence l'exclut) le filtre au port près.<b>4.</b> Le filtrage par renseignement sur les menaces d'Azure Firewall utilise le flux Microsoft d'adresses et de domaines malveillants ; il est en mode Alerter seulement par défaut, d'où le mode Alerter et refuser.",
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
    "La stratégie WAF de l'Application Gateway"
   ],
   [
    "Besoin 2",
    "Azure Firewall, règles d'application"
   ],
   [
    "Besoin 3",
    "Un NSG"
   ],
   [
    "Besoin 4",
    "Le renseignement sur les menaces d'Azure Firewall en mode Alerter et refuser"
   ]
  ]
 },
 "keep": "OWASP = WAF. FQDN sortant = Firewall (application). Intra-VNet = NSG. IP/domaines malveillants = renseignement sur les menaces."
},
{
 "id": "D4-435",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VNet-A et VNet-B sont appairés et utilisent tous deux le DNS fourni par Azure. Les applications de VNet-B appellent les serveurs de VNet-A par leur nom d'hôte (par exemple VM-A1), sans succès, alors que le ping par adresse IP fonctionne.</p><p>VNet-B est déjà lié, avec l'inscription automatique, à la zone privée b.internal, qui doit être conservée telle quelle. Vous créez la zone privée a.internal.</p><p>Exigences :</p><ul><li>les VM de VNet-A doivent s'inscrire automatiquement dans a.internal ;</li><li>les VM de VNet-B doivent résoudre les noms de a.internal ;</li><li>quand une VM de VNet-A est supprimée, son enregistrement ne doit pas rester dans la zone.</li></ul><p>Que devez-vous répondre ou configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Cause de l'échec actuel :",
   "o": [
    "Le peering bloque le DNS",
    "Le DNS fourni par Azure ne résout les noms d'hôte qu'au sein d'un même réseau virtuel",
    "Il manque une règle NSG sur UDP 53",
    "Le DNS est désactivé sur VNet-A"
   ],
   "a": 1
  },
  {
   "l": "Lien de a.internal vers VNet-A :",
   "o": [
    "Avec l'inscription automatique",
    "Sans l'inscription automatique",
    "Aucun lien"
   ],
   "a": 0
  },
  {
   "l": "Lien de a.internal vers VNet-B :",
   "o": [
    "Avec l'inscription automatique",
    "Sans l'inscription automatique (résolution seule)",
    "Aucun lien : le peering suffit"
   ],
   "a": 1
  },
  {
   "l": "Suppression d'une VM de VNet-A :",
   "o": [
    "Son enregistrement est supprimé automatiquement",
    "Il faut supprimer l'enregistrement à la main",
    "L'enregistrement expire après 30 jours",
    "Il faut désactiver le lien"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Cause.</b> La résolution des noms d'hôte par le DNS d'Azure ne fonctionne qu'au sein d'un même réseau virtuel ; le peering ne l'étend pas.<b>VNet-A.</b> Un lien avec inscription automatique crée les enregistrements A des VM de VNet-A.<b>VNet-B.</b> VNet-B est déjà inscrit dans b.internal, et un réseau virtuel ne peut s'inscrire que dans une seule zone : le lien vers a.internal doit être de résolution seule, ce qui suffit au besoin.<b>Suppression.</b> Les enregistrements créés par l'inscription automatique sont supprimés avec la VM.",
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
    "*Cause de l'échec actuel",
    "Le DNS fourni par Azure ne résout les noms d'hôte qu'au sein d'un même réseau virtuel"
   ],
   [
    "Lien de a.internal vers VNet-A",
    "Avec l'inscription automatique"
   ],
   [
    "Lien de a.internal vers VNet-B",
    "Sans l'inscription automatique (résolution seule)"
   ],
   [
    "Suppression d'une VM de VNet-A",
    "Son enregistrement est supprimé automatiquement"
   ]
  ]
 },
 "keep": "Noms entre VNets : zone privée. Un VNet s'inscrit dans une seule zone, mais peut résoudre plusieurs zones."
},
{
 "id": "D4-436",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VM-Web1 et VM-Web2 (Subnet-Web, VNet-Spoke1) sont derrière LB-Web, un équilibreur public Standard, et répondent sur 443. Pour inspecter la sortie Internet, l'équipe a associé à Subnet-Web une table de routage qui envoie 0.0.0.0/0 vers AzFW1 (10.0.1.4) dans le hub.</p><p>Depuis ce changement, plus aucun client Internet ne parvient à charger le site, alors que les sondes de LB-Web sont saines et qu'AzFW1 journalise des paquets SYN-ACK refusés.</p><p>Que devez-vous répondre ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Cause :",
   "o": [
    "Les sondes passent par le pare-feu",
    "Routage asymétrique : l'entrée arrive par LB-Web, la réponse part vers AzFW1",
    "LB-Web ne prend pas en charge les routes utilisateur",
    "AzFW1 bloque le port 443 entrant"
   ],
   "a": 1
  },
  {
   "l": "Solution recommandée :",
   "o": [
    "Publier le site par une règle DNAT d'AzFW1 vers l'IP frontale d'un équilibreur interne",
    "Retirer la table de routage",
    "Ajouter une IP publique sur chaque VM",
    "Activer le port flottant sur LB-Web"
   ],
   "a": 0
  },
  {
   "l": "Avec une règle DNAT :",
   "o": [
    "Il faut aussi une règle de réseau qui autorise le trafic traduit",
    "Le trafic traduit est autorisé implicitement",
    "Il faut une règle d'application",
    "Le trafic est inspecté par le WAF"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Asymétrie.</b> La requête entre par l'IP publique de LB-Web et atteint la VM ; la réponse suit la route 0.0.0.0/0 vers AzFW1, qui n'a jamais vu l'ouverture de la session et refuse le SYN-ACK.<b>Correction.</b> On fait entrer le trafic par le pare-feu lui-même : une règle DNAT sur l'IP publique d'AzFW1 vers un équilibreur <b>interne</b> (ou les VM). Aller et retour passent alors par le même pare-feu. Retirer la table de routage supprimerait l'inspection de la sortie.<b>Règle implicite.</b> Une règle DNAT ajoute automatiquement une règle de réseau qui autorise le trafic traduit.",
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
    "*Cause",
    "Routage asymétrique : l'entrée arrive par LB-Web, la réponse part vers AzFW1"
   ],
   [
    "Solution recommandée",
    "Publier le site par une règle DNAT d'AzFW1 vers l'IP frontale d'un équilibreur interne"
   ],
   [
    "Avec une règle DNAT",
    "Le trafic traduit est autorisé implicitement"
   ]
  ]
 },
 "keep": "0.0.0.0/0 vers un pare-feu + entrée par un LB public = asymétrie. Entrer par le DNAT du pare-feu."
},
{
 "id": "D4-437",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Fabrikam vient de commander un circuit ExpressRoute auprès de son opérateur. L'abonnement Sub-Network contient le circuit ; l'abonnement Sub-App contient VNet-App et sa passerelle ExpressRoute. Les deux abonnements sont dans le même locataire, et les équipes ne doivent pas recevoir de droits sur l'abonnement de l'autre.</p><p>Le portail affiche pour le circuit : état du circuit « Activé », état du fournisseur « Non approvisionné ».</p><p>Vous préparez la configuration du peering privé.</p><p>Que devez-vous répondre ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "État « Non approvisionné » :",
   "o": [
    "Supprimer et recréer le circuit",
    "Attendre que l'opérateur termine l'approvisionnement, avec la clé de service transmise",
    "Configurer le peering privé maintenant",
    "Activer Global Reach"
   ],
   "a": 1
  },
  {
   "l": "Sous-réseaux du peering privé (IPv4) :",
   "o": [
    "Un /29",
    "Deux /30, un pour le lien principal et un pour le secondaire",
    "Un /24",
    "Aucun"
   ],
   "a": 1
  },
  {
   "l": "Relier VNet-App au circuit :",
   "o": [
    "Donner Contributeur sur Sub-Network à l'équipe App",
    "Créer une autorisation sur le circuit, puis une connexion dans Sub-App avec l'ID du circuit et la clé",
    "Déplacer le circuit dans Sub-App",
    "Appairer VNet-App à un réseau de Sub-Network"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Approvisionnement.</b> Après la création, on transmet la clé de service à l'opérateur ; tant que l'état du fournisseur n'est pas « Approvisionné », on ne peut pas configurer le peering. Le circuit est facturé dès sa création.<b>Peering privé.</b> Il faut deux sous-réseaux /30 (ou /126 en IPv6), un par lien, avec un ID de VLAN et un ASN.<b>Autre abonnement.</b> Le propriétaire du circuit crée une autorisation ; l'équipe de l'autre abonnement crée la connexion avec l'ID de ressource du circuit et la clé d'autorisation, sans droit sur Sub-Network.",
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
    "*État « Non approvisionné »",
    "Attendre que l'opérateur termine l'approvisionnement, avec la clé de service transmise"
   ],
   [
    "Sous-réseaux du peering privé (IPv4)",
    "Deux /30, un pour le lien principal et un pour le secondaire"
   ],
   [
    "Relier VNet-App au circuit",
    "Créer une autorisation sur le circuit, puis une connexion dans Sub-App avec l'ID du circuit et la clé"
   ]
  ]
 },
 "keep": "ExpressRoute : clé de service à l'opérateur, deux /30, autorisation pour un autre abonnement."
},
{
 "id": "D4-438",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Les équilibreurs de charge De base ont été retirés le 30 septembre 2025. Contoso migre LB-Legacy (public, De base, une IP publique De base dynamique) vers Standard. LB-Legacy répartit HTTP vers VM1 et VM2, qui n'ont pas d'adresse IP publique, ni de NSG ; elles téléchargent leurs mises à jour sur Internet grâce à l'équilibreur.</p><p>Juste après la migration :</p><ul><li>le site ne répond plus sur 80 ;</li><li>les VM n'arrivent plus à télécharger leurs mises à jour.</li></ul><p>Que devez-vous répondre ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Outil de migration recommandé :",
   "o": [
    "Le module PowerShell de mise à niveau des équilibreurs De base vers Standard",
    "Changer la référence SKU dans le portail",
    "Azure Migrate",
    "Recréer l'équilibreur à la main"
   ],
   "a": 0
  },
  {
   "l": "Le site ne répond plus :",
   "o": [
    "La sonde doit passer en HTTPS",
    "Standard est fermé par défaut : associer un NSG qui autorise TCP 80",
    "Il faut une IP par VM",
    "Le pool doit être recréé"
   ],
   "a": 1
  },
  {
   "l": "Mises à jour des VM :",
   "o": [
    "Elles reviennent seules",
    "Ajouter une règle de trafic sortant (ou une passerelle NAT)",
    "Ouvrir 443 en entrée",
    "Ajouter une sonde"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Outil.</b> Microsoft fournit un module PowerShell qui migre un équilibreur De base vers Standard (configuration, pools, IP passées en statique et mises à niveau). La référence SKU ne se change pas dans le portail.<b>Entrée.</b> Un équilibreur Standard et ses IP Standard sont sécurisés par défaut : sans NSG qui l'autorise, le trafic entrant est refusé.<b>Sortie.</b> Un équilibreur De base donnait un accès sortant implicite ; un Standard n'en donne aucun sans règle de trafic sortant. Le script peut en créer une ; sinon, on ajoute une règle de trafic sortant ou une passerelle NAT.",
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
    "*Outil de migration recommandé",
    "Le module PowerShell de mise à niveau des équilibreurs De base vers Standard"
   ],
   [
    "Le site ne répond plus",
    "Standard est fermé par défaut : associer un NSG qui autorise TCP 80"
   ],
   [
    "Mises à jour des VM",
    "Ajouter une règle de trafic sortant (ou une passerelle NAT)"
   ]
  ]
 },
 "keep": "De base → Standard : script PowerShell, NSG obligatoire pour l'entrée, sortie explicite (règle sortante ou NAT)."
},
{
 "id": "D4-439",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso a deux hubs : Hub1 (France Central) avec la passerelle VPN VPNGW1, et Hub2 (West Europe) avec la passerelle VPNGW2. Le transit par passerelle est activé sur les peerings des hubs vers les spokes.</p><ul><li>Spoke4 (France Central) contient déjà une ancienne passerelle VPN, VPNGW4, sans connexion active. L'équipe veut activer « Utiliser la passerelle distante » sur son peering vers Hub1.</li><li>Spoke5 (France Central) est appairé à Hub1 et à Hub2. L'équipe veut qu'il utilise les deux passerelles pour la redondance.</li><li>Spoke6 (North Europe) est appairé à Hub1, en peering global, et doit joindre le site local par VPNGW1.</li></ul><p>Que se passe-t-il, ou que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Spoke4 :",
   "o": [
    "Activer l'option directement",
    "Supprimer d'abord VPNGW4",
    "Désactiver BGP sur VPNGW4",
    "Activer le transit par passerelle sur Spoke4"
   ],
   "a": 1
  },
  {
   "l": "Spoke5 :",
   "o": [
    "Activer « Utiliser la passerelle distante » sur les deux peerings",
    "Un seul peering peut utiliser une passerelle distante",
    "Possible si les deux passerelles utilisent BGP",
    "Possible avec Virtual WAN De base"
   ],
   "a": 1
  },
  {
   "l": "Spoke6 :",
   "o": [
    "Pris en charge : le transit par passerelle fonctionne en peering global",
    "Impossible en peering global",
    "Exige une passerelle dans Spoke6",
    "Exige ExpressRoute"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Spoke4.</b> On ne peut pas utiliser une passerelle distante si le réseau virtuel a déjà sa propre passerelle : il faut supprimer VPNGW4.<b>Spoke5.</b> Un réseau virtuel ne peut utiliser la passerelle distante que d'un seul peering. Pour la redondance entre régions, il faut une autre architecture (passerelles actif-actif, Virtual WAN Standard…).<b>Spoke6.</b> Le transit par passerelle est pris en charge en peering global, entre régions.",
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
    "*Spoke4",
    "Supprimer d'abord VPNGW4"
   ],
   [
    "Spoke5",
    "Un seul peering peut utiliser une passerelle distante"
   ],
   [
    "Spoke6",
    "Pris en charge : le transit par passerelle fonctionne en peering global"
   ]
  ]
 },
 "keep": "Passerelle distante : pas de passerelle locale, un seul peering, fonctionne en peering global."
},
{
 "id": "D4-440",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Woodgrove déploie Azure Firewall dans trois environnements :</p><ul><li>une petite filiale avec une dizaine de VM, moins de 100 Mbit/s de trafic, qui veut le coût le plus bas tout en filtrant par FQDN ;</li><li>le siège, qui a besoin du filtrage par FQDN, du proxy DNS et du renseignement sur les menaces en mode Alerter et refuser ;</li><li>la plateforme de paiement, soumise à PCI DSS, qui exige la détection d'intrusion par signatures et l'inspection du trafic HTTPS déchiffré.</li></ul><p>Quel niveau d'Azure Firewall devez-vous choisir pour chacun ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Filiale :",
   "o": [
    "Basic",
    "Standard",
    "Premium"
   ],
   "a": 0
  },
  {
   "l": "Siège :",
   "o": [
    "Basic",
    "Standard",
    "Premium"
   ],
   "a": 1
  },
  {
   "l": "Plateforme de paiement :",
   "o": [
    "Basic",
    "Standard",
    "Premium"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Basic.</b> Pour les petites structures (débit limité à 250 Mbit/s), avec règles d'application FQDN, mais renseignement sur les menaces en mode Alerter seulement et sans proxy DNS.<b>Standard.</b> Proxy DNS, FQDN dans les règles de réseau, renseignement sur les menaces en Alerter et refuser.<b>Premium.</b> Ajoute l'IDPS par signatures, l'inspection TLS et le filtrage d'URL complètes, souvent exigés par PCI DSS. Les catégories web au niveau du domaine existent déjà en Standard.",
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
    "*Filiale",
    "Basic"
   ],
   [
    "Siège",
    "Standard"
   ],
   [
    "Plateforme de paiement",
    "Premium"
   ]
  ]
 },
 "keep": "Basic : petit et pas cher, alertes seules. Standard : proxy DNS, Alerter et refuser. Premium : IDPS, TLS, URL."
}
);
