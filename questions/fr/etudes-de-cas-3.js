/* Études de cas (lot 3 : C005 et C006, réseau) */
AZ.cases.push(
{
 "id": "C005",
 "title": "Tailwind Logistics",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Tailwind Logistics est un transporteur dont le siège est à Lyon. L'entreprise a migré ses applications vers Azure selon une topologie hub-and-spoke et prépare un site de reprise en West Europe.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Réseaux virtuels</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Réseau</th><th>Région</th><th>Espace d'adressage</th><th>Sous-réseaux</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.10.0.0/16</td><td>GatewaySubnet 10.10.255.0/27, AzureFirewallSubnet 10.10.1.0/26</td></tr><tr><td>VNet-App</td><td>France Central</td><td>10.20.0.0/16</td><td>Subnet-Web 10.20.1.0/24, Subnet-API 10.20.2.0/24</td></tr><tr><td>VNet-Data</td><td>France Central</td><td>10.30.0.0/16</td><td>Subnet-SQL 10.30.1.0/24</td></tr><tr><td>VNet-DR</td><td>West Europe</td><td>10.20.0.0/16</td><td>Subnet-DR 10.20.1.0/24</td></tr></table></div><p><b>Appairages</b> (tous à l'état Connecté)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Appairage</th><th>Autoriser le trafic transféré</th><th>Transit de passerelle</th><th>Utiliser la passerelle distante</th></tr><tr><td>VNet-Hub → VNet-App</td><td>Oui</td><td>Oui</td><td>—</td></tr><tr><td>VNet-App → VNet-Hub</td><td>Oui</td><td>—</td><td>Oui</td></tr><tr><td>VNet-Hub → VNet-Data</td><td>Oui</td><td>Oui</td><td>—</td></tr><tr><td>VNet-Data → VNet-Hub</td><td>Oui</td><td>—</td><td>Non</td></tr></table></div><p><b>Autres ressources</b></p><ul><li><b>FW1</b> : Pare-feu Azure Standard dans VNet-Hub, adresse privée 10.10.1.4.</li><li><b>RT-App</b> : table de routage associée à Subnet-Web et Subnet-API, avec l'itinéraire 0.0.0.0/0 → Appliance virtuelle 10.10.1.4. « Propager les itinéraires de passerelle » : Oui.</li><li><b>VPNGW1</b> : passerelle VPN VpnGw2, basée sur les routes, actif-passif, BGP activé, reliée au siège de Lyon (192.168.0.0/16).</li><li>Subnet-Data n'a pas de table de routage. Aucune VM n'a d'adresse IP publique.</li><li><b>sttaildocs</b> : compte de stockage, accès au réseau public activé à partir de tous les réseaux.</li></ul>"
  },
  {
   "t": "Exigences",
   "h": "<p><b>Exigences techniques</b></p><ol><li>VNet-DR doit être appairé à VNet-Hub pour la reprise d'activité.</li><li>Tout le trafic entre VNet-App et VNet-Data doit passer par FW1, dans les deux sens.</li><li>Les administrateurs doivent se connecter en RDP aux VM de tous les réseaux depuis le portail Azure, sans adresse IP publique sur les VM.</li><li>Les VM de Subnet-SQL et les utilisateurs de Lyon doivent accéder à sttaildocs par une adresse IP privée. L'accès public à sttaildocs doit être désactivé.</li><li>La connexion VPN doit survivre à la perte d'une zone de disponibilité.</li><li>FW1 doit inspecter le trafic HTTPS sortant et filtrer par URL complète.</li><li>Le site web de Subnet-Web doit être publié sur Internet derrière un pare-feu d'applications web (WAF) ; les VM web ne doivent recevoir que le trafic de ce service.</li></ol><p>Les solutions doivent limiter l'effort d'administration.</p>"
  }
 ],
 "questions": [
  {
   "id": "C005-1",
   "dom": 4,
   "type": "yngrid",
   "stem": "<p>Vous examinez la connectivité actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Une VM de Subnet-Web peut joindre un serveur du siège de Lyon.",
     "a": 0
    },
    {
     "l": "Une VM de Subnet-SQL peut joindre un serveur du siège de Lyon.",
     "a": 1
    },
    {
     "l": "Un paquet d'une VM de Subnet-Web vers une VM de Subnet-SQL est envoyé à FW1.",
     "a": 0
    },
    {
     "l": "Une VM de Subnet-SQL peut répondre à une VM de Subnet-Web.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Subnet-Web → Lyon : Oui.</b> VNet-App utilise la passerelle distante et le hub autorise le transit. RT-App propage les itinéraires de passerelle : Subnet-Web reçoit 192.168.0.0/16 par BGP. Ce préfixe est plus long que 0.0.0.0/0 : le trafic part directement vers VPNGW1, pas vers FW1.</li><li><b>Subnet-SQL → Lyon : Non.</b> « Utiliser la passerelle distante » est à Non sur VNet-Data → VNet-Hub : VNet-Data n'apprend pas les itinéraires du VPN.</li><li><b>Web → SQL envoyé à FW1 : Oui.</b> VNet-App n'est pas appairé à VNet-Data : aucun itinéraire vers 10.30.0.0/16, seul 0.0.0.0/0 → 10.10.1.4 correspond.</li><li><b>SQL répond à Web : Non.</b> Subnet-SQL n'a pas de table de routage et VNet-Data ne connaît pas 10.20.0.0/16 : la réponse suit l'itinéraire système 0.0.0.0/0 vers Internet et n'arrive jamais. Il manque une UDR 10.20.0.0/16 → 10.10.1.4 sur Subnet-SQL.</li></ul>",
   "portal": {
    "path": [
     "Interfaces réseau",
     "vm-web1-nic"
    ],
    "title": "vm-web1-nic | Itinéraires effectifs",
    "menu": [
     "Configurations IP",
     "*Itinéraires effectifs"
    ],
    "rows": [
     [
      "*192.168.0.0/16",
      "Passerelle de réseau virtuel (BGP)"
     ],
     [
      "0.0.0.0/0",
      "Appliance virtuelle 10.10.1.4"
     ]
    ]
   },
   "keep": "Le préfixe le plus long gagne : un /16 appris par BGP contourne une UDR 0.0.0.0/0. Le retour a besoin de son propre itinéraire."
  },
  {
   "id": "C005-2",
   "dom": 4,
   "type": "multi",
   "stem": "<p>Vous devez répondre à l'exigence 2.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "opts": [
    "Associer à Subnet-SQL une UDR 10.20.0.0/16 → Appliance virtuelle 10.10.1.4",
    "Créer sur FW1 une règle de réseau autorisant 10.20.0.0/16 ↔ 10.30.1.0/24",
    "Créer un appairage entre VNet-App et VNet-Data, avec le trafic transféré autorisé",
    "Activer « Utiliser la passerelle distante » sur l'appairage VNet-Data → VNet-Hub"
   ],
   "ans": [
    0,
    1
   ],
   "pick": 2,
   "expl": "<ul><li><b>UDR sur Subnet-SQL : oui.</b> Le sens VNet-App → VNet-Data passe déjà par FW1 (0.0.0.0/0 de RT-App). Il faut le même chemin au retour, sinon le flux est asymétrique et le pare-feu, qui suit l'état des connexions, le rejette.</li><li><b>Règle de réseau : oui.</b> Le Pare-feu Azure refuse tout par défaut : sans règle, les flux arrivent à FW1 et sont abandonnés.</li><li>Un appairage direct App ↔ Data créerait un itinéraire système plus précis que 0.0.0.0/0 : le trafic contournerait FW1.</li><li>« Utiliser la passerelle distante » concerne l'accès au VPN, pas le trafic entre spokes.</li></ul>",
   "portal": {
    "path": [
     "Tables de routage",
     "RT-Data"
    ],
    "title": "RT-Data | Itinéraires",
    "menu": [
     "Vue d'ensemble",
     "*Itinéraires",
     "Sous-réseaux"
    ],
    "rows": [
     [
      "*ToApp",
      "10.20.0.0/16 → Appliance virtuelle 10.10.1.4"
     ]
    ],
    "btn": "+ Ajouter"
   },
   "keep": "Spoke ↔ spoke par un pare-feu : itinéraires dans les deux spokes + règle sur le pare-feu."
  },
  {
   "id": "C005-3",
   "dom": 4,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence 1. Que devez-vous faire ?</p>",
   "opts": [
    "Réadresser VNet-DR hors des plages des réseaux appairés au hub",
    "Créer l'appairage VNet-DR → VNet-Hub avec « Utiliser la passerelle distante »",
    "Créer l'appairage avec le chiffrement de réseau virtuel pour isoler VNet-DR",
    "Créer une connexion VPN VNet-to-VNet entre VNet-DR et VNet-Hub"
   ],
   "ans": 0,
   "expl": "<p>VNet-DR (10.20.0.0/16) ne chevauche pas VNet-Hub, mais il chevauche <b>VNet-App</b>, déjà appairé au hub. Azure refuse d'appairer un réseau avec deux réseaux qui se chevauchent : le hub ne saurait pas où envoyer 10.20.0.0/16. Il faut réadresser VNet-DR (par exemple 10.40.0.0/16). Une connexion VNet-to-VNet aurait le même problème de routage, avec en plus une passerelle à payer.</p>",
   "portal": {
    "path": [
     "Réseaux virtuels",
     "VNet-DR"
    ],
    "title": "VNet-DR | Espace d'adressage",
    "menu": [
     "Vue d'ensemble",
     "*Espace d'adressage",
     "Peerings"
    ],
    "rows": [
     [
      "*10.20.0.0/16",
      "Chevauche VNet-App (appairé à VNet-Hub)"
     ]
    ]
   },
   "keep": "Pas de chevauchement avec le réseau appairé ni avec ceux qui lui sont déjà appairés."
  },
  {
   "id": "C005-4",
   "dom": 4,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 3, 5 et 6.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Exigence 3 :",
     "o": [
      "Azure Bastion dans un AzureBastionSubnet /26 de VNet-Hub",
      "Azure Bastion dans chaque réseau virtuel spoke",
      "Une règle DNAT de FW1 vers le port 3389 de chaque VM",
      "Un VPN point à site réservé aux administrateurs"
     ],
     "a": 0
    },
    {
     "l": "Exigence 5 :",
     "o": [
      "VpnGw2 en mode actif-actif",
      "Un SKU AZ, par exemple VpnGw2AZ",
      "VpnGw3, plus puissant",
      "Une seconde connexion vers Lyon"
     ],
     "a": 1
    },
    {
     "l": "Exigence 6 :",
     "o": [
      "FW1 avec le proxy DNS",
      "FW1 au SKU De base",
      "FW1 au SKU Premium",
      "Un WAF devant FW1"
     ],
     "a": 2
    }
   ],
   "expl": "<ul><li><b>Exigence 3 :</b> un seul Bastion dans le hub suffit : il atteint les VM des réseaux appairés (SKU Standard ou supérieur), depuis le portail, sans IP publique sur les VM. Un Bastion par spoke multiplie les coûts ; une règle DNAT expose 3389 sur Internet.</li><li><b>Exigence 5 :</b> seuls les SKU <b>AZ</b> répartissent les instances de la passerelle entre les zones. Le mode actif-actif protège contre la perte d'une instance, pas d'une zone.</li><li><b>Exigence 6 :</b> l'inspection TLS et le filtrage par URL complète sont des fonctions du SKU <b>Premium</b> (avec IDPS).</li></ul>",
   "portal": {
    "path": [
     "Pare-feu",
     "FW1"
    ],
    "title": "FW1 | Vue d'ensemble",
    "menu": [
     "*Vue d'ensemble",
     "Stratégie de pare-feu"
    ],
    "rows": [
     [
      "*Niveau",
      "Premium (inspection TLS, IDPS, catégories d'URL)"
     ]
    ]
   },
   "keep": "Bastion du hub = VM des spokes. Zone → SKU AZ. TLS et URL → Pare-feu Premium."
  },
  {
   "id": "C005-5",
   "dom": 4,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre à l'exigence 4. Que devez-vous configurer pour chaque objectif ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Objectif",
    "Configuration"
   ],
   "srcs": [
    "Un point de terminaison privé blob dans Subnet-SQL",
    "Lier la zone privatelink.blob.core.windows.net à VNet-Data et VNet-Hub",
    "Un DNS Private Resolver (point entrant dans VNet-Hub) et un redirecteur conditionnel à Lyon",
    "Activer « Utiliser la passerelle distante » sur VNet-Data → VNet-Hub",
    "Désactiver l'accès au réseau public de sttaildocs",
    "Un point de terminaison de service Microsoft.Storage sur Subnet-SQL",
    "Ajouter 192.168.0.0/16 aux règles IP de sttaildocs"
   ],
   "tgts": [
    {
     "l": "Donner à sttaildocs une adresse privée",
     "a": 0
    },
    {
     "l": "Les VM de Subnet-SQL résolvent sttaildocs vers l'adresse privée",
     "a": 1
    },
    {
     "l": "Les postes de Lyon résolvent sttaildocs vers l'adresse privée",
     "a": 2
    },
    {
     "l": "Le trafic de Lyon atteint l'adresse privée par le VPN",
     "a": 3
    },
    {
     "l": "Plus aucun accès depuis Internet",
     "a": 4
    }
   ],
   "expl": "<ul><li><b>Adresse privée :</b> un point de terminaison privé (sous-ressource blob) dans Subnet-SQL.</li><li><b>Résolution dans Azure :</b> la zone privatelink.blob doit être liée à VNet-Data (VM SQL) et à VNet-Hub, où vit le point entrant du résolveur, qui résout avec le DNS de son réseau.</li><li><b>Résolution à Lyon :</b> les DNS locaux ne voient pas une zone privée ; ils transfèrent blob.core.windows.net vers le point entrant du DNS Private Resolver.</li><li><b>Chemin réseau :</b> VNet-Data n'apprend pas les itinéraires du VPN tant que « Utiliser la passerelle distante » est à Non. (Le hub autorise déjà le transit.)</li><li><b>Internet :</b> désactiver l'accès au réseau public. Le point de terminaison de service et les règles IP ne donnent pas d'adresse privée, et les règles IP refusent les plages privées.</li></ul>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "sttaildocs"
    ],
    "title": "sttaildocs | Mise en réseau",
    "menu": [
     "Vue d'ensemble",
     "*Mise en réseau"
    ],
    "rows": [
     [
      "*Accès au réseau public",
      "Désactivé"
     ],
     [
      "Connexions de point de terminaison privé",
      "pe-sttaildocs-blob · Approuvé"
     ]
    ]
   },
   "keep": "Point de terminaison privé = adresse + DNS (zone liée, résolveur pour le site local) + chemin réseau."
  },
  {
   "id": "C005-6",
   "dom": 4,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence 7.</p><p>Quelles <b>quatre</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Créer un sous-réseau dédié Subnet-AppGw dans VNet-App",
    "Déployer Application Gateway v2 (WAF) avec un écouteur HTTPS et les VM web dans le pool principal",
    "Vérifier que l'intégrité du back-end affiche les VM web comme saines",
    "Limiter le NSG de Subnet-Web au trafic venant de Subnet-AppGw",
    "Déployer la passerelle dans le GatewaySubnet de VNet-Hub",
    "Créer sur FW1 une règle DNAT vers les VM web"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>Application Gateway exige un <b>sous-réseau dédié</b> (pas le GatewaySubnet, réservé aux passerelles VPN et ExpressRoute). On le crée, on déploie la passerelle avec le WAF, l'écouteur et le pool, puis on vérifie l'<b>intégrité du back-end</b> avant de fermer l'accès direct : restreindre le NSG des VM web avant la vérification couperait le site sans savoir si la passerelle fonctionne. Une règle DNAT publierait les VM sans WAF.</p>",
   "portal": {
    "path": [
     "Passerelles d'application",
     "agw-web"
    ],
    "title": "agw-web | Intégrité du back-end",
    "menu": [
     "Vue d'ensemble",
     "*Intégrité du back-end",
     "Pare-feu d'applications web"
    ],
    "rows": [
     [
      "*pool-web",
      "vm-web1, vm-web2 : Sain"
     ]
    ]
   },
   "keep": "Application Gateway : sous-réseau dédié, puis vérifier l'intégrité du back-end avant de verrouiller."
  },
  {
   "id": "C005-7",
   "dom": 4,
   "type": "cmd",
   "stem": "<p>Vous créez l'itinéraire de RT-Data, associée à Subnet-SQL, pour l'exigence 2. Comment devez-vous compléter la commande ?</p>",
   "rows": [
    {
     "l": "--address-prefix",
     "o": [
      "10.30.0.0/16",
      "10.20.0.0/16",
      "0.0.0.0/0",
      "10.10.1.0/26"
     ],
     "a": 1
    },
    {
     "l": "--next-hop-type",
     "o": [
      "VirtualNetworkGateway",
      "VnetLocal",
      "VirtualAppliance",
      "Internet"
     ],
     "a": 2
    },
    {
     "l": "--next-hop-ip-address",
     "o": [
      "10.10.1.4",
      "10.10.255.4",
      "10.20.1.4",
      "10.30.1.4"
     ],
     "a": 0
    }
   ],
   "tpl": "az network route-table route create --resource-group RG-Net --route-table-name RT-Data --name ToApp --address-prefix {0} --next-hop-type {1} --next-hop-ip-address {2}",
   "expl": "<p>Le retour vers VNet-App vise <b>10.20.0.0/16</b>, avec le tronçon <b>VirtualAppliance</b> et l'adresse privée de FW1 <b>10.10.1.4</b>. Un 0.0.0.0/0 enverrait aussi le trafic Internet de VNet-Data au pare-feu, ce que l'exigence ne demande pas. VirtualNetworkGateway enverrait le trafic au VPN.</p>",
   "portal": {
    "path": [
     "Tables de routage",
     "RT-Data"
    ],
    "title": "RT-Data | Itinéraires",
    "menu": [
     "*Itinéraires",
     "Sous-réseaux"
    ],
    "rows": [
     [
      "*ToApp",
      "10.20.0.0/16 → 10.10.1.4"
     ]
    ]
   },
   "keep": "UDR vers un pare-feu : VirtualAppliance + son adresse privée."
  }
 ]
},
{
 "id": "C006",
 "title": "Northwind Health",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Northwind Health édite un portail de prise de rendez-vous médicaux. L'application tourne en France Central, avec une copie de lecture en West Europe. Elle doit rester disponible en cas de panne d'un centre de données.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p>VNet-FR (France Central, 10.1.0.0/16 : Subnet-Front 10.1.1.0/24, Subnet-Back 10.1.2.0/24) est appairé à VNet-WE (West Europe, 10.2.0.0/16) par un appairage mondial connecté.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Réseau / sous-réseau</th><th>Zone</th></tr><tr><td>VM-F1</td><td>VNet-FR / Subnet-Front</td><td>1</td></tr><tr><td>VM-F2</td><td>VNet-FR / Subnet-Front</td><td>2</td></tr><tr><td>VM-B1</td><td>VNet-FR / Subnet-Back</td><td>1</td></tr><tr><td>VM-B2</td><td>VNet-FR / Subnet-Back</td><td>3</td></tr><tr><td>VM-W1</td><td>VNet-WE</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Équilibreur</th><th>Type</th><th>Adresse frontale</th><th>Pool</th><th>Règle et sonde</th></tr><tr><td>LB-Pub</td><td>Public Standard</td><td>PIP-Pub, zonale (zone 1)</td><td>VM-F1, VM-F2</td><td>TCP 443, sonde HTTPS /health</td></tr><tr><td>LB-Int</td><td>Interne Standard</td><td>10.1.2.100, redondante interzone</td><td>VM-B1, VM-B2</td><td>TCP 8080, sonde TCP 8080</td></tr></table></div><p><b>NSG-Back</b>, associé à Subnet-Back, a deux règles de trafic entrant personnalisées : priorité 100, autoriser TCP 8080 depuis 10.1.1.0/24 ; priorité 4000, refuser tout le trafic depuis toute source.</p><p><b>DNS</b> : la zone privée northwind.internal est liée à VNet-FR (inscription automatique activée) et à VNet-WE (inscription automatique désactivée). La zone publique northwind.com vient d'être créée dans Azure DNS ; le domaine est encore servi par les serveurs de noms du registraire.</p>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>Le portail doit survivre à la perte d'une zone de disponibilité de France Central.</li><li>VM-W1 doit être inscrite automatiquement dans northwind.internal.</li><li>northwind.com et www.northwind.com doivent pointer vers LB-Pub, sans mise à jour manuelle si son adresse change.</li><li>VM-B1 et VM-B2 doivent appeler l'API d'un éditeur sur Internet avec une adresse IP publique fixe, que l'éditeur mettra en liste d'autorisation.</li><li>La latence et la disponibilité entre VM-W1 et 10.1.2.100 doivent être surveillées en continu, avec des alertes.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C006-1",
   "dom": 4,
   "type": "yngrid",
   "stem": "<p>Vous évaluez l'environnement actuel.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Si la zone 1 tombe, LB-Pub continue de répondre aux clients.",
     "a": 1
    },
    {
     "l": "La sonde de LB-Int marque VM-B1 et VM-B2 comme saines.",
     "a": 1
    },
    {
     "l": "VM-W1 peut résoudre vm-b1.northwind.internal.",
     "a": 0
    },
    {
     "l": "VM-W1 peut joindre l'adresse frontale 10.1.2.100 de LB-Int par l'appairage mondial.",
     "a": 0
    }
   ],
   "expl": "<ul><li><b>LB-Pub : Non.</b> Son adresse frontale est <b>zonale (zone 1)</b> : elle tombe avec la zone, même si VM-F2 tourne en zone 2.</li><li><b>Sonde de LB-Int : Non.</b> Les sondes viennent de 168.63.129.16 (étiquette AzureLoadBalancer). La règle par défaut AllowAzureLoadBalancerInBound est en priorité 65001 : la règle 4000 « refuser tout » est évaluée avant et bloque les sondes. Les deux VM sont marquées hors service.</li><li><b>Résolution depuis VM-W1 : Oui.</b> VNet-WE est lié à la zone (résolution sans inscription), et VM-B1 est inscrite par le lien de VNet-FR.</li><li><b>Équilibreur interne et appairage mondial : Oui.</b> Un équilibreur interne <b>Standard</b> est joignable depuis un réseau appairé dans une autre région (ce n'était pas le cas du SKU De base).</li></ul>",
   "portal": {
    "path": [
     "Équilibreurs de charge",
     "LB-Int"
    ],
    "title": "LB-Int | Pools principaux",
    "menu": [
     "Configuration d'adresse IP front-end",
     "*Pools principaux",
     "Sondes d'intégrité"
    ],
    "rows": [
     [
      "*VM-B1, VM-B2",
      "État de la sonde : 0 %"
     ]
    ]
   },
   "keep": "Une règle « refuser tout » avant 65001 bloque les sondes : autorisez AzureLoadBalancer avant elle."
  },
  {
   "id": "C006-2",
   "dom": 4,
   "type": "cmd",
   "stem": "<p>Vous devez rétablir les sondes de LB-Int en ajoutant une règle à NSG-Back. Comment devez-vous compléter la commande ?</p>",
   "rows": [
    {
     "l": "--priority",
     "o": [
      "100",
      "3900",
      "4010",
      "65001"
     ],
     "a": 1
    },
    {
     "l": "--source-address-prefixes",
     "o": [
      "Internet",
      "VirtualNetwork",
      "AzureLoadBalancer",
      "10.1.1.0/24"
     ],
     "a": 2
    },
    {
     "l": "--destination-port-ranges",
     "o": [
      "443",
      "8080",
      "80",
      "65200-65535"
     ],
     "a": 1
    }
   ],
   "tpl": "az network nsg rule create --resource-group RG-App --nsg-name NSG-Back --name AllowProbe --direction Inbound --access Allow --protocol Tcp --priority {0} --source-address-prefixes {1} --destination-port-ranges {2}",
   "expl": "<ul><li><b>Priorité 3900 :</b> la règle doit passer avant le refus de priorité 4000. La priorité 100 est déjà prise par une autre règle (deux règles ne peuvent pas avoir la même priorité dans le même sens), 4010 serait trop tard et 65001 est réservé aux règles par défaut.</li><li><b>Source AzureLoadBalancer :</b> l'étiquette qui couvre l'adresse des sondes, 168.63.129.16.</li><li><b>Port 8080 :</b> la sonde de LB-Int est en TCP 8080.</li></ul>",
   "portal": {
    "path": [
     "Groupes de sécurité réseau",
     "NSG-Back"
    ],
    "title": "NSG-Back | Règles de sécurité de trafic entrant",
    "menu": [
     "Vue d'ensemble",
     "*Règles de sécurité de trafic entrant"
    ],
    "rows": [
     [
      "100 · 8080 · 10.1.1.0/24",
      "Autoriser"
     ],
     [
      "*3900 · 8080 · AzureLoadBalancer",
      "Autoriser"
     ],
     [
      "4000 · Tout",
      "Refuser"
     ]
    ]
   },
   "keep": "Sondes = AzureLoadBalancer, sur le port de la sonde, avant tout refus."
  },
  {
   "id": "C006-3",
   "dom": 4,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 1 et 2.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Exigence 1, pour LB-Pub :",
     "o": [
      "Modifier la zone de PIP-Pub en redondante interzone",
      "Créer une IP publique redondante interzone et en faire le frontal",
      "Déplacer VM-F1 dans la zone 3",
      "Ajouter une seconde règle sur le port 443"
     ],
     "a": 1
    },
    {
     "l": "Exigence 2 :",
     "o": [
      "Activer l'inscription automatique sur le lien de VNet-WE",
      "Créer une zone northwind.internal liée à VNet-WE",
      "C'est impossible : une zone n'inscrit que les VM d'un seul réseau",
      "Ajouter un enregistrement A dans northwind.com"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Exigence 1 :</b> la zone d'une adresse IP publique se choisit à la création et ne change plus. Il faut une nouvelle IP Standard redondante interzone en frontal (puis mettre à jour le DNS, ce que l'exigence 3 rendra automatique). Déplacer VM-F1 ne protège pas l'adresse frontale.</li><li><b>Exigence 2 :</b> une zone peut avoir l'inscription automatique sur plusieurs réseaux ; la limite est d'une zone avec inscription <b>par réseau</b>. VNet-WE n'en a aucune : on l'active sur son lien. Deux zones du même nom ne peuvent pas être liées au même réseau.</li></ul>",
   "portal": {
    "path": [
     "Zones DNS privées",
     "northwind.internal"
    ],
    "title": "northwind.internal | Liens de réseau virtuel",
    "menu": [
     "Jeux d'enregistrements",
     "*Liens de réseau virtuel"
    ],
    "rows": [
     [
      "link-fr · VNet-FR",
      "Inscription : activée"
     ],
     [
      "*link-we · VNet-WE",
      "Inscription : activée"
     ]
    ]
   },
   "keep": "IP publique : zone figée à la création. Inscription auto : une zone par réseau, plusieurs réseaux par zone."
  },
  {
   "id": "C006-4",
   "dom": 4,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre à l'exigence 3. Que devez-vous configurer pour chaque objectif ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Objectif",
    "Configuration"
   ],
   "srcs": [
    "Mettre à jour les serveurs de noms chez le registraire",
    "Un enregistrement d'alias vers la ressource IP publique",
    "Un enregistrement CNAME vers northwind.com",
    "Un enregistrement A vers l'adresse actuelle",
    "Un enregistrement NS dans la zone northwind.com",
    "Un lien de réseau virtuel vers VNet-FR"
   ],
   "tgts": [
    {
     "l": "Les requêtes Internet pour northwind.com arrivent à Azure DNS",
     "a": 0
    },
    {
     "l": "northwind.com (racine) suit l'adresse de LB-Pub",
     "a": 1
    },
    {
     "l": "www.northwind.com suit la même cible que la racine",
     "a": 2
    }
   ],
   "expl": "<ul><li><b>Délégation :</b> tant que le registraire annonce ses propres serveurs de noms, la zone Azure DNS n'est jamais interrogée. Il faut y mettre les quatre serveurs NS de la zone Azure.</li><li><b>Racine :</b> un CNAME est interdit à la racine. Un <b>enregistrement d'alias</b> pointe vers la ressource IP publique et suit automatiquement son adresse ; un A fixe devrait être mis à jour à la main.</li><li><b>www :</b> un CNAME vers northwind.com suit la racine (un alias vers la même IP marcherait aussi, mais le CNAME n'impose qu'une cible à maintenir).</li></ul>",
   "portal": {
    "path": [
     "Zones DNS",
     "northwind.com"
    ],
    "title": "northwind.com | Jeux d'enregistrements",
    "menu": [
     "Vue d'ensemble",
     "*Jeux d'enregistrements"
    ],
    "rows": [
     [
      "*@ · A · alias",
      "pip-pub-zr"
     ],
     [
      "www · CNAME",
      "northwind.com"
     ]
    ]
   },
   "keep": "Racine → alias. Zone Azure DNS active seulement après la délégation chez le registraire."
  },
  {
   "id": "C006-5",
   "dom": 4,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence 4. Que devez-vous faire ?</p>",
   "opts": [
    "Associer une passerelle NAT à IP fixe à Subnet-Back",
    "Ajouter à LB-Int une règle sortante avec une adresse publique",
    "Attribuer une IP publique de SKU De base à VM-B1 et VM-B2",
    "Activer le transfert IP sur les interfaces de VM-B1 et VM-B2"
   ],
   "ans": 0,
   "expl": "<p>Une <b>passerelle NAT</b> sur Subnet-Back donne aux deux VM une sortie par une adresse publique fixe, sans aucun trafic entrant. Un équilibreur <b>interne</b> n'a pas de règles sortantes (elles n'existent que sur un équilibreur public), les IP De base sont retirées et deux adresses différentes compliqueraient la liste d'autorisation, et le transfert IP sert au routage, pas à la sortie Internet.</p>",
   "portal": {
    "path": [
     "Passerelles NAT",
     "nat-back"
    ],
    "title": "nat-back | Sous-réseaux",
    "menu": [
     "IP sortante",
     "*Sous-réseaux"
    ],
    "rows": [
     [
      "*VNet-FR / Subnet-Back",
      "Associé"
     ]
    ]
   },
   "keep": "Sortie à IP fixe d'un sous-réseau : passerelle NAT. Pas de règle sortante sur un équilibreur interne."
  },
  {
   "id": "C006-6",
   "dom": 4,
   "type": "hotspot",
   "stem": "<p>Vous devez répondre à l'exigence 5. Dans Network Watcher, quelle fonctionnalité devez-vous utiliser ? Pour répondre, sélectionnez l'élément approprié du menu.</p>",
   "ans": "Moniteur de connexion",
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
       "Tronçon suivant",
       "Résolution des problèmes de connexion",
       "Capture de paquets",
       "Résolution des problèmes de VPN"
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
   },
   "expl": "<p>Le <b>moniteur de connexion</b> teste en continu la latence, la perte de paquets et la disponibilité entre une source (VM-W1, avec l'agent) et une destination (10.1.2.100, port 8080), et déclenche des alertes Azure Monitor. La résolution des problèmes de connexion fait un test ponctuel, sans suivi dans le temps.</p>",
   "portal": {
    "path": [
     "Network Watcher",
     "Moniteur de connexion"
    ],
    "title": "Moniteur de connexion | Créer",
    "menu": [
     "*Moniteur de connexion"
    ],
    "rows": [
     [
      "*Source",
      "VM-W1"
     ],
     [
      "Destination",
      "10.1.2.100:8080"
     ]
    ],
    "btn": "Créer"
   },
   "keep": "Suivi continu avec alertes : moniteur de connexion. Test ponctuel : résolution des problèmes de connexion."
  }
 ]
}
);
