/* Domaine 4 : réseau (lot I : D4-421 à D4-429, scénarios longs) */
AZ.questions.push(
{
 "id": "D4-421",
 "dom": 4,
 "type": "hot",
 "stem": "<p>La sécurité de Contoso exige que tout le trafic Internet des VM de VNet-Spoke passe par le proxy du siège, joignable par la passerelle VPN VPNGW1 (basée sur des routes) de VNet-Hub. VNet-Spoke utilise la passerelle distante du hub. Le siège n'annonce pas de route par défaut en BGP.</p><p>Après la mise en place, l'équipe constate que :</p><ul><li>l'activation Windows des VM ne fonctionne plus, alors que le proxy du siège ne laisse pas passer le protocole KMS ;</li><li>Azure Bastion, déployé dans AzureBastionSubnet de VNet-Hub, doit continuer à fonctionner.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Sur les sous-réseaux de VNet-Spoke :",
   "o": [
    "Une route 0.0.0.0/0, tronçon Internet",
    "Une route 0.0.0.0/0, tronçon Passerelle de réseau virtuel",
    "Un NSG qui refuse Internet",
    "Une passerelle NAT"
   ],
   "a": 1
  },
  {
   "l": "Pour l'activation Windows :",
   "o": [
    "Ouvrir TCP 1688 dans le NSG",
    "Des routes /32 vers les adresses KMS d'Azure, tronçon Internet",
    "Désactiver la propagation des routes",
    "Une IP publique sur chaque VM"
   ],
   "a": 1
  },
  {
   "l": "Pour AzureBastionSubnet :",
   "o": [
    "Lui associer la même table de routage",
    "Ne lui associer aucune table de routage",
    "Une route 0.0.0.0/0 vers VPNGW1",
    "Un NSG qui refuse GatewayManager"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Tunnel forcé.</b> Sans route par défaut annoncée en BGP, on crée une route 0.0.0.0/0 avec le tronçon « Passerelle de réseau virtuel » (passerelle basée sur des routes). Le spoke utilise la passerelle du hub, la route est donc valide.<b>KMS.</b> L'activation passe par azkms.core.windows.net (TCP 1688) vers des adresses Azure connues. Avec le tunnel forcé, ce trafic part au siège et est bloqué. Des routes /32 vers ces adresses avec le tronçon Internet, plus précises que 0.0.0.0/0, le font sortir directement.<b>Bastion.</b> Les routes utilisateur ne sont pas prises en charge sur AzureBastionSubnet : Bastion doit joindre directement le plan de contrôle Azure. On ne lui associe donc pas la table.",
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
    "*Sur les sous-réseaux de VNet-Spoke",
    "Une route 0.0.0.0/0, tronçon Passerelle de réseau virtuel"
   ],
   [
    "Pour l'activation Windows",
    "Des routes /32 vers les adresses KMS d'Azure, tronçon Internet"
   ],
   [
    "Pour AzureBastionSubnet",
    "Ne lui associer aucune table de routage"
   ]
  ]
 },
 "keep": "Tunnel forcé : 0.0.0.0/0 vers la passerelle ; exceptions /32 vers Internet (KMS) ; jamais de table de routage sur AzureBastionSubnet."
},
{
 "id": "D4-422",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Le tunnel site à site entre VPNGW1 (France Central) et le pare-feu du siège de Paris est connecté depuis un an, sans BGP. La passerelle de réseau local LNG-Paris contient l'adresse publique du pare-feu et le préfixe 192.168.0.0/20.</p><p>Cette semaine :</p><ul><li>le réseau du siège ajoute le VLAN 192.168.50.0/24 ; ses postes ne joignent pas Azure, alors que les autres VLAN fonctionnent ;</li><li>l'équipe veut activer BGP ; le prestataire du pare-feu propose l'ASN 65515 pour le siège ;</li><li>un ingénieur demande l'outil qui collecte les journaux IKE de la passerelle pour vérifier les paramètres négociés.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour 192.168.50.0/24 :",
   "o": [
    "Ajouter le préfixe à LNG-Paris",
    "Ajouter une route sur GatewaySubnet",
    "Réinitialiser VPNGW1",
    "Ajouter une règle NSG"
   ],
   "a": 0
  },
  {
   "l": "ASN 65515 pour le siège :",
   "o": [
    "Accepter",
    "Refuser : 65515 est réservé par Azure",
    "Accepter si VPNGW1 utilise aussi 65515",
    "Refuser : seuls les ASN publics sont acceptés"
   ],
   "a": 1
  },
  {
   "l": "Journaux IKE :",
   "o": [
    "Vérification du flux IP",
    "Résolution des problèmes de VPN de Network Watcher",
    "Moniteur de connexion",
    "Journal d'activité"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Nouveau VLAN.</b> Sans BGP, Azure ne connaît le site que par les préfixes de la passerelle de réseau local. 192.168.50.0/24 n'est pas dans 192.168.0.0/20 (192.168.0.0 à 192.168.15.255) : il faut l'ajouter à LNG-Paris (et au domaine de chiffrement du pare-feu).<b>ASN.</b> Azure réserve 65515 (son ASN par défaut), ainsi que 65517 à 65520, 8074, 8075 et 12076. Le siège doit prendre un autre ASN privé.<b>Journaux.</b> La résolution des problèmes de VPN de Network Watcher teste la passerelle et la connexion, et écrit les journaux détaillés (IKE inclus) dans un compte de stockage.",
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
    "*Pour 192.168.50.0/24",
    "Ajouter le préfixe à LNG-Paris"
   ],
   [
    "ASN 65515 pour le siège",
    "Refuser : 65515 est réservé par Azure"
   ],
   [
    "Journaux IKE",
    "Résolution des problèmes de VPN de Network Watcher"
   ]
  ]
 },
 "keep": "Sans BGP : préfixes dans la passerelle de réseau local. ASN 65515 réservé. Journaux IKE : résolution des problèmes de VPN."
},
{
 "id": "D4-423",
 "dom": 4,
 "type": "hot",
 "stem": "<p>AppGW2 (Standard_v2) publie trois sites. Plusieurs problèmes apparaissent :</p><ul><li>après l'association à son sous-réseau de NSG-AGW, qui contient une règle 4096 « Refuser tout le trafic entrant », AppGW2 passe en état d'échec ;</li><li>le pool app-pool contient l'application App Service shop.azurewebsites.net ; le portail l'affiche « Non sain », alors que le site répond quand on l'ouvre directement ;</li><li>le pool rapports contient une VM dont la page met environ 45 secondes à se générer ; les utilisateurs reçoivent une erreur 502 ;</li><li>tout le trafic HTTP de www.contoso.com doit être renvoyé vers HTTPS.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Dans NSG-AGW :",
   "o": [
    "Autoriser GatewayManager sur TCP 65200-65535",
    "Autoriser Internet sur 3389",
    "Autoriser AzureCloud sur 443",
    "Supprimer la règle 4096"
   ],
   "a": 0
  },
  {
   "l": "Pour app-pool :",
   "o": [
    "Ajouter une IP publique à l'application",
    "Choisir le nom d'hôte du back-end dans les paramètres de back-end et la sonde",
    "Désactiver HTTPS sur l'application",
    "Passer AppGW2 en WAF_v2"
   ],
   "a": 1
  },
  {
   "l": "Pour le pool rapports :",
   "o": [
    "Activer l'affinité basée sur les cookies",
    "Augmenter le délai d'expiration de la requête des paramètres de back-end",
    "Ajouter une seconde instance",
    "Activer le drainage des connexions"
   ],
   "a": 1
  },
  {
   "l": "Pour HTTP vers HTTPS :",
   "o": [
    "Une règle de redirection de l'écouteur 80 vers l'écouteur 443",
    "Une règle de réécriture d'URL",
    "Un second pool",
    "Une stratégie WAF"
   ],
   "a": 0
  }
 ],
 "expl": "<b>NSG.</b> Application Gateway v2 exige d'autoriser en entrée la balise GatewayManager sur TCP 65200-65535 (gestion de l'infrastructure), ainsi qu'AzureLoadBalancer. Une règle « Refuser tout » sans ces exceptions casse la passerelle.<b>App Service.</b> App Service route les requêtes selon l'en-tête Host. AppGW2 envoie par défaut le nom de l'écouteur, inconnu de l'application. Il faut remplacer le nom d'hôte par celui du back-end (option « Choisir le nom d'hôte à partir de la cible principale »), dans les paramètres de back-end et dans la sonde.<b>502.</b> Le délai d'expiration de la requête vaut 20 secondes par défaut ; au-delà, la passerelle renvoie 502. Il faut l'augmenter (par exemple à 60 secondes).<b>Redirection.</b> Une règle de redirection de type permanent sur l'écouteur HTTP, vers l'écouteur HTTPS.",
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
    "*Dans NSG-AGW",
    "Autoriser GatewayManager sur TCP 65200-65535"
   ],
   [
    "Pour app-pool",
    "Choisir le nom d'hôte du back-end dans les paramètres de back-end et la sonde"
   ],
   [
    "Pour le pool rapports",
    "Augmenter le délai d'expiration de la requête des paramètres de back-end"
   ],
   [
    "Pour HTTP vers HTTPS",
    "Une règle de redirection de l'écouteur 80 vers l'écouteur 443"
   ]
  ]
 },
 "keep": "AppGW v2 : GatewayManager 65200-65535. App Service en back-end : nom d'hôte du back-end. 502 lent : délai d'expiration (20 s par défaut)."
},
{
 "id": "D4-424",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Woodgrove expose plusieurs services sur Internet depuis France Central.</p><ul><li>Les partenaires filtrent les accès entrants et sortants sur des listes d'adresses. Woodgrove va ajouter des VM dans les mois qui viennent et veut des adresses publiques contiguës, connues à l'avance, sans redemander de mise à jour aux partenaires.</li><li>LB-Web utilise une IP publique Standard créée dans la zone 1. La direction veut que l'équilibreur survive à la perte de n'importe quelle zone.</li><li>VM5 a une IP publique De base à allocation dynamique (52.143.10.20), déclarée chez un client. Elle doit passer en Standard en gardant son adresse.</li><li>VM6 a l'adresse privée 10.0.1.50, que l'application de licence enregistre ; elle a changé après un arrêt avec libération.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour les adresses des partenaires :",
   "o": [
    "Un préfixe d'adresses IP publiques",
    "Des IP publiques dynamiques",
    "Une passerelle NAT sans IP",
    "Des balises de service"
   ],
   "a": 0
  },
  {
   "l": "Pour LB-Web :",
   "o": [
    "Changer la zone de l'IP en « redondante interzone »",
    "Créer une IP redondante interzone et remplacer la configuration frontale",
    "Ajouter les zones 2 et 3 à l'IP existante",
    "Passer l'IP en De base"
   ],
   "a": 1
  },
  {
   "l": "Pour VM5 :",
   "o": [
    "Mettre l'IP à niveau directement",
    "Passer l'IP en statique, la dissocier, la mettre à niveau en Standard puis la réassocier",
    "Créer une IP Standard et demander la même adresse",
    "Supprimer l'IP puis la recréer en Standard"
   ],
   "a": 1
  },
  {
   "l": "Pour VM6 :",
   "o": [
    "Fixer l'adresse dans Windows",
    "Passer la configuration IP de la carte réseau en statique",
    "Réserver l'adresse dans un serveur DHCP",
    "Utiliser une IP publique statique"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Préfixe.</b> Un préfixe d'adresses IP publiques réserve une plage contiguë (par exemple /28) dont on tire ensuite des IP Standard : les partenaires autorisent la plage une fois pour toutes.<b>Zone.</b> La zone d'une IP publique se fixe à sa création et ne se modifie pas. On crée une IP redondante interzone, puis on remplace la configuration frontale (ou on en ajoute une).<b>VM5.</b> Seule une IP De base <b>statique</b> peut être mise à niveau en gardant son adresse, et elle doit être dissociée pendant la mise à niveau. Une IP dynamique doit d'abord passer en statique (sans changer d'adresse tant qu'elle reste associée). Les IP De base étant retirées depuis le 30 septembre 2025, cette migration n'est plus optionnelle.<b>VM6.</b> On fixe l'adresse privée dans Azure (allocation statique de la configuration IP) ; on ne configure jamais l'IP en dur dans le système invité, sous peine de perdre la connectivité.",
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
    "*Pour les adresses des partenaires",
    "Un préfixe d'adresses IP publiques"
   ],
   [
    "Pour LB-Web",
    "Créer une IP redondante interzone et remplacer la configuration frontale"
   ],
   [
    "Pour VM5",
    "Passer l'IP en statique, la dissocier, la mettre à niveau en Standard puis la réassocier"
   ],
   [
    "Pour VM6",
    "Passer la configuration IP de la carte réseau en statique"
   ]
  ]
 },
 "keep": "Plage contiguë = préfixe. Zone d'IP : fixée à la création. De base → Standard : statique, dissociée. IP privée fixe : statique côté Azure."
},
{
 "id": "D4-425",
 "dom": 4,
 "type": "hot",
 "stem": "<p>LB-Pub, un équilibreur public Standard avec une IP frontale, répartit TCP 443 vers un pool de 8 VM Windows (Subnet-App). Le SNAT implicite de la règle d'équilibrage est utilisé pour la sortie Internet.</p><p>Problèmes et besoins :</p><ul><li>les VM échouent régulièrement à ouvrir des connexions sortantes vers une API de paiement aux heures de pointe ; l'équipe veut garantir 8 000 ports SNAT à chaque VM et garder une IP de sortie différente de l'IP du site ;</li><li>les administrateurs veulent ouvrir RDP vers chaque VM du pool par l'IP frontale, sur les ports 50001 à 50008, sans règle à créer quand une VM est ajoutée au pool ;</li><li>le RDP ne doit être possible que depuis l'IP du siège 203.0.113.10.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour la sortie :",
   "o": [
    "Augmenter le délai d'inactivité de la règle 443",
    "Une seconde IP frontale, une règle de trafic sortant avec 8 000 ports par instance, et le SNAT implicite désactivé sur la règle 443",
    "Une IP publique par VM",
    "Activer le port flottant"
   ],
   "a": 1
  },
  {
   "l": "Pour RDP :",
   "o": [
    "Huit règles d'équilibrage",
    "Une règle NAT entrante ciblant le pool, avec une plage de ports frontaux",
    "Une règle de trafic sortant",
    "Une IP publique par VM"
   ],
   "a": 1
  },
  {
   "l": "Pour limiter RDP au siège :",
   "o": [
    "Une règle de NSG sur Subnet-App : 203.0.113.10 vers 3389",
    "Une règle de NSG : 203.0.113.10 vers 50001-50008",
    "Un filtre sur la règle NAT",
    "Une restriction d'accès"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Sortie.</b> Le SNAT implicite ne garantit pas le nombre de ports. Une <b>règle de trafic sortant</b> fixe l'allocation (8 VM × 8 000 = 64 000 ports, dans les 64 512 d'une IP) ; on la place sur une seconde IP frontale pour séparer sortie et site, et on désactive le SNAT implicite de la règle 443 (« Utiliser des règles de trafic sortant »).<b>RDP.</b> Une règle NAT entrante « v2 » cible un pool entier avec une plage de ports frontaux : chaque nouvelle VM reçoit automatiquement son port.<b>Filtre.</b> Le NSG voit le paquet après traduction : la destination est le port 3389 de la VM, pas 50001. La règle doit donc autoriser 203.0.113.10 vers 3389.",
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
    "*Pour la sortie",
    "Une seconde IP frontale, une règle de trafic sortant avec 8 000 ports par instance, et le SNAT implicite désactivé sur la règle 443"
   ],
   [
    "Pour RDP",
    "Une règle NAT entrante ciblant le pool, avec une plage de ports frontaux"
   ],
   [
    "Pour limiter RDP au siège",
    "Une règle de NSG sur Subnet-App : 203.0.113.10 vers 3389"
   ]
  ]
 },
 "keep": "Ports SNAT garantis = règle de trafic sortant. RDP par VM = NAT entrante sur le pool. Le NSG filtre le port de la VM, après NAT."
},
{
 "id": "D4-426",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Litware édite une API hébergée sur des VM derrière LB-Int, un équilibreur interne Standard, dans VNet-Litware. Un client, Fabrikam, veut consommer l'API depuis son propre réseau virtuel, dans son propre locataire Microsoft Entra. Les deux réseaux utilisent 10.0.0.0/16.</p><p>Exigences :</p><ul><li>le trafic ne doit jamais passer par Internet ;</li><li>Litware doit valider chaque nouvelle connexion de client ;</li><li>aucun peering ni VPN ne doit relier les deux entreprises.</li></ul><p>Que devez-vous mettre en place, et que verront les VM de l'API comme adresse source ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Côté Litware :",
   "o": [
    "Un point de terminaison privé vers LB-Int",
    "Un service Private Link sur la configuration frontale de LB-Int",
    "Un point de terminaison de service",
    "Une IP publique sur LB-Int"
   ],
   "a": 1
  },
  {
   "l": "Côté Fabrikam :",
   "o": [
    "Un peering avec VNet-Litware",
    "Un point de terminaison privé vers l'alias du service",
    "Une passerelle VPN",
    "Une règle de NSG"
   ],
   "a": 1
  },
  {
   "l": "Validation des connexions :",
   "o": [
    "Approbation manuelle dans le service Private Link",
    "Une liste d'approbation automatique avec l'abonnement de Fabrikam",
    "Un NSG sur LB-Int",
    "Azure Policy"
   ],
   "a": 0
  },
  {
   "l": "Adresse source vue par l'API :",
   "o": [
    "L'IP privée du client Fabrikam",
    "Une IP NAT du sous-réseau du service Private Link",
    "L'IP publique de Fabrikam",
    "168.63.129.16"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Private Link service.</b> Il expose un service derrière un équilibreur <b>Standard interne</b>. Le client crée un <b>point de terminaison privé</b> vers l'alias du service : le trafic reste sur le réseau Microsoft, sans peering, et le chevauchement des plages 10.0.0.0/16 n'est pas un problème.<b>Validation.</b> Par défaut, chaque demande de connexion attend l'approbation du propriétaire du service ; la liste d'approbation automatique la contournerait.<b>Source.</b> Le service traduit l'adresse source vers une adresse NAT prise dans un sous-réseau de VNet-Litware. Pour connaître le client réel, on peut activer le proxy protocol v2 (TCP).",
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
    "*Côté Litware",
    "Un service Private Link sur la configuration frontale de LB-Int"
   ],
   [
    "Côté Fabrikam",
    "Un point de terminaison privé vers l'alias du service"
   ],
   [
    "Validation des connexions",
    "Approbation manuelle dans le service Private Link"
   ],
   [
    "Adresse source vue par l'API",
    "Une IP NAT du sous-réseau du service Private Link"
   ]
  ]
 },
 "keep": "Exposer son service en privé : Private Link service (LB Standard interne) + point de terminaison privé chez le client. Source = IP NAT."
},
{
 "id": "D4-427",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso (locataire contoso.com) et Fabrikam (locataire fabrikam.com) fusionnent. Il faut relier :</p><ul><li>VNet-A (Contoso, France Central, 10.1.0.0/16), qui contient un équilibreur interne De base LB-Old ;</li><li>VNet-B (Fabrikam, West Europe, 10.2.0.0/16) ;</li><li>VNet-C (Fabrikam, France Central, 10.1.0.0/16).</li></ul><p>Vous êtes Contributeur de réseau sur VNet-A. Un administrateur de Fabrikam vous a ajouté comme invité B2B avec le rôle Contributeur de réseau sur VNet-B et VNet-C.</p><p>Que se passe-t-il, ou que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Peering VNet-A ↔ VNet-B :",
   "o": [
    "Impossible entre deux locataires",
    "Créer les deux liens de peering, un de chaque côté",
    "Créer un seul lien depuis VNet-A",
    "Passer par un VPN obligatoirement"
   ],
   "a": 1
  },
  {
   "l": "Les VM de VNet-B joignent-elles LB-Old ?",
   "o": [
    "Oui",
    "Non : un équilibreur De base n'est pas joignable par un peering global",
    "Oui, si le transit par passerelle est activé",
    "Non : les peerings entre locataires bloquent les équilibreurs"
   ],
   "a": 1
  },
  {
   "l": "Peering VNet-A ↔ VNet-C :",
   "o": [
    "Possible avec « Autoriser le trafic transféré »",
    "Impossible : les espaces d'adressage se chevauchent",
    "Possible en peering global uniquement",
    "Possible si VNet-C passe dans le locataire Contoso"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Entre locataires.</b> Le peering est possible entre locataires ; il faut créer un lien de chaque côté, avec des droits (Contributeur de réseau ou une permission de peering) sur chacun des réseaux, par exemple en invité B2B.<b>LB-Old.</b> VNet-A et VNet-B sont dans deux régions : c'est un peering global. Les ressources derrière un équilibreur <b>De base</b> ne sont pas joignables par un peering global ; il faut passer LB-Old en Standard.<b>VNet-C.</b> Deux réseaux dont les espaces d'adressage se chevauchent ne peuvent pas être appairés, quel que soit le locataire. Il faut réadresser l'un d'eux.",
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
    "*Peering VNet-A ↔ VNet-B",
    "Créer les deux liens de peering, un de chaque côté"
   ],
   [
    "Les VM de VNet-B joignent-elles LB-Old ?",
    "Non : un équilibreur De base n'est pas joignable par un peering global"
   ],
   [
    "Peering VNet-A ↔ VNet-C",
    "Impossible : les espaces d'adressage se chevauchent"
   ]
  ]
 },
 "keep": "Peering entre locataires : un lien de chaque côté. Peering global : pas d'équilibreur De base. Plages qui se chevauchent : pas de peering."
},
{
 "id": "D4-428",
 "dom": 4,
 "type": "hot",
 "stem": "<p>La direction de la sécurité de Woodgrove publie de nouvelles règles pour les trois pare-feu Azure (France Central, West Europe, North Europe), aujourd'hui en Standard avec trois stratégies indépendantes.</p><ul><li>1. Le trafic HTTPS sortant des VM doit être déchiffré et inspecté, avec une autorité de certification interne.</li><li>2. Les signatures d'attaques connues doivent être détectées et bloquées sur le trafic qui traverse les pare-feu.</li><li>3. Un socle de règles commun doit s'appliquer aux trois pare-feu ; chaque région ajoute ses propres règles sans pouvoir modifier le socle.</li><li>4. Les adresses IP publiques des réseaux virtuels de production doivent être protégées contre les attaques DDoS volumétriques, avec l'accès à l'équipe de réponse rapide de Microsoft.</li></ul><p>Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Exigence 1 :",
   "o": [
    "Inspection TLS d'Azure Firewall Premium, certificat de l'AC dans Key Vault",
    "Règles d'application en Standard",
    "Le proxy DNS",
    "Un WAF sur Application Gateway"
   ],
   "a": 0
  },
  {
   "l": "Exigence 2 :",
   "o": [
    "Le filtrage basé sur le renseignement sur les menaces",
    "L'IDPS d'Azure Firewall Premium en mode Alerter et refuser",
    "Des règles de réseau",
    "Microsoft Defender pour le cloud"
   ],
   "a": 1
  },
  {
   "l": "Exigence 3 :",
   "o": [
    "Une stratégie de pare-feu parente, héritée par trois stratégies enfants",
    "Copier les règles dans chaque stratégie",
    "Un groupe d'administration",
    "Azure Policy"
   ],
   "a": 0
  },
  {
   "l": "Exigence 4 :",
   "o": [
    "La protection DDoS de base (incluse)",
    "Un plan DDoS Network Protection associé aux réseaux virtuels",
    "Un WAF",
    "Des NSG"
   ],
   "a": 1
  }
 ],
 "expl": "<b>TLS.</b> Le déchiffrement du trafic sortant est une fonction <b>Premium</b> ; le certificat de l'AC intermédiaire est stocké dans Key Vault et lu par une identité managée.<b>IDPS.</b> La détection par signatures est l'IDPS de Premium. Le filtrage par renseignement sur les menaces (Standard) bloque des IP et domaines connus, pas des signatures d'attaque.<b>Socle commun.</b> Avec Azure Firewall Manager, une stratégie parente est héritée par les stratégies enfants : celles-ci ajoutent des règles mais ne modifient pas celles du parent.<b>DDoS.</b> La protection d'infrastructure de base n'offre ni réglage par application ni accès à la DDoS Rapid Response. Un plan DDoS Network Protection, associé aux réseaux virtuels, protège leurs IP publiques et donne cet accès.",
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
    "*Exigence 1",
    "Inspection TLS d'Azure Firewall Premium, certificat de l'AC dans Key Vault"
   ],
   [
    "Exigence 2",
    "L'IDPS d'Azure Firewall Premium en mode Alerter et refuser"
   ],
   [
    "Exigence 3",
    "Une stratégie de pare-feu parente, héritée par trois stratégies enfants"
   ],
   [
    "Exigence 4",
    "Un plan DDoS Network Protection associé aux réseaux virtuels"
   ]
  ]
 },
 "keep": "TLS et IDPS = Firewall Premium. Socle commun = stratégie parente. DDoS avancé + DRR = plan DDoS Network Protection."
},
{
 "id": "D4-429",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VM7 (Standard_D4s_v5, 2 cartes réseau maximum) est en cours d'exécution dans Subnet-App de VNet-Prod, avec une seule carte réseau. L'équipe sécurité veut une seconde carte pour l'administration, et des performances réseau maximales pour la carte de production.</p><ul><li>La seconde carte, NIC-Mgmt, doit être placée dans Subnet-Mgmt.</li><li>Un ingénieur propose de mettre NIC-Mgmt dans VNet-Mgmt, un réseau séparé, pour mieux isoler l'administration.</li><li>La carte de production doit offrir la latence la plus faible et le débit le plus élevé possibles.</li><li>Plus tard, l'équipe voudra une troisième carte pour la sauvegarde.</li></ul><p>Que devez-vous répondre ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour attacher NIC-Mgmt :",
   "o": [
    "L'attacher à chaud, VM démarrée",
    "Arrêter (libérer) VM7, attacher la carte, redémarrer",
    "Redéployer VM7",
    "Recréer VM7"
   ],
   "a": 1
  },
  {
   "l": "NIC-Mgmt dans VNet-Mgmt :",
   "o": [
    "Possible avec un peering",
    "Impossible : toutes les cartes d'une VM sont dans le même réseau virtuel",
    "Possible si VNet-Mgmt est dans la même région",
    "Possible avec le transfert IP"
   ],
   "a": 1
  },
  {
   "l": "Pour la carte de production :",
   "o": [
    "Activer la mise en réseau accélérée",
    "Activer le transfert IP",
    "Ajouter une IP publique",
    "Ajouter une seconde configuration IP"
   ],
   "a": 0
  },
  {
   "l": "Troisième carte :",
   "o": [
    "Possible sans changement",
    "Redimensionner VM7 vers une taille qui accepte 3 cartes",
    "Impossible sur Azure",
    "Ajouter une configuration IP à NIC-Mgmt"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Attacher.</b> On ajoute ou retire une carte réseau seulement quand la VM est arrêtée (libérée).<b>Réseau.</b> Les cartes d'une VM peuvent être dans des sous-réseaux différents, mais toutes dans le <b>même réseau virtuel</b>.<b>Performances.</b> La mise en réseau accélérée (SR-IOV) contourne le commutateur virtuel de l'hôte : latence plus faible, débit plus élevé, moins de CPU. Elle est prise en charge sur D4s_v5.<b>Troisième carte.</b> Le nombre de cartes dépend de la taille : D4s_v5 en accepte 2. Il faut une taille plus grande (par exemple D8s_v5, 4 cartes). Une seconde configuration IP n'est pas une carte séparée.",
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
    "*Pour attacher NIC-Mgmt",
    "Arrêter (libérer) VM7, attacher la carte, redémarrer"
   ],
   [
    "NIC-Mgmt dans VNet-Mgmt",
    "Impossible : toutes les cartes d'une VM sont dans le même réseau virtuel"
   ],
   [
    "Pour la carte de production",
    "Activer la mise en réseau accélérée"
   ],
   [
    "Troisième carte",
    "Redimensionner VM7 vers une taille qui accepte 3 cartes"
   ]
  ]
 },
 "keep": "Cartes réseau : VM libérée, même VNet, nombre selon la taille. Performances = mise en réseau accélérée."
}
);
