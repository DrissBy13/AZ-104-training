/* Domaine 4 : réseau virtuel (lot E : D4-201 à D4-222, questions à documents façon examen) */
AZ.questions.push(
{
 "id": "D4-201",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Réseaux (cliquez sur l'onglet <b>Réseaux</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Réseaux",
   "h": "<p><b>Réseaux virtuels</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Région</th><th>Espace d'adressage</th><th>Abonnement</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contient la passerelle VPN <b>VPNGW1</b> (basée sur les routes), reliée au site local 192.168.0.0/16 par une connexion site à site avec <b>BGP activé</b>. VNet-Hub contient aussi l'appliance virtuelle <b>NVA1</b> (10.0.1.4).</p><p><b>Appairages</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Appairage</th><th>De → vers</th><th>Autoriser le trafic transféré</th><th>Transit de passerelle</th><th>Utiliser la passerelle distante</th><th>État</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>Non</td><td>Non</td><td>Oui</td><td>Connecté</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>Non</td><td>Non</td><td>Non</td><td>Connecté</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>Non</td><td>Oui</td><td>Non</td><td>Lancé</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Une VM de VNet-A peut joindre un serveur du site local (192.168.1.10) par VPNGW1.",
   "a": 0
  },
  {
   "l": "Une VM de VNet-B peut joindre un serveur du site local (192.168.1.10) par VPNGW1.",
   "a": 1
  },
  {
   "l": "Une VM de VNet-A peut communiquer avec une VM de VNet-B.",
   "a": 1
  },
  {
   "l": "Une VM de VNet-C peut communiquer avec une VM de VNet-Hub.",
   "a": 1
  }
 ],
 "expl": "<p>Le partage de passerelle demande <b>deux réglages complémentaires</b> : « Autoriser le transit de passerelle » sur l'appairage du hub vers le spoke, et « Utiliser la passerelle distante » sur l'appairage du spoke vers le hub.</p><ul><li><b>VNet-A → site local : Oui.</b> Hub-A autorise le transit et A-Hub utilise la passerelle distante. Avec BGP, VPNGW1 annonce aussi 10.1.0.0/16 au site local : le retour fonctionne.</li><li><b>VNet-B → site local : Non.</b> Hub-B autorise bien le transit, mais B-Hub n'a pas « Utiliser la passerelle distante ». Le fait que VNet-B soit dans une autre région et un autre abonnement n'est pas en cause : le transit de passerelle fonctionne aussi avec l'appairage mondial.</li><li><b>VNet-A ↔ VNet-B : Non.</b> L'appairage n'est pas transitif. Il faudrait un appairage direct, ou des itinéraires vers NVA1 avec le trafic transféré autorisé.</li><li><b>VNet-C ↔ VNet-Hub : Non.</b> Hub-C est à l'état <b>Lancé</b> : l'appairage retour VNet-C → VNet-Hub n'existe pas. Aucun trafic ne passe tant que les deux côtés ne sont pas créés (état Connecté).</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-Hub"
  ],
  "title": "VNet-Hub | Peerings",
  "menu": [
   "Vue d'ensemble",
   "Espace d'adressage",
   "*Peerings"
  ],
  "rows": [
   [
    "Hub-A",
    "Connecté · transit de passerelle"
   ],
   [
    "Hub-B",
    "Connecté · mondial · transit de passerelle"
   ],
   [
    "*Hub-C",
    "Lancé (pas d'appairage retour)"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Transit = « Autoriser le transit » côté hub + « Utiliser la passerelle distante » côté spoke. « Lancé » = rien ne passe."
},
{
 "id": "D4-202",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Réseaux (cliquez sur l'onglet <b>Réseaux</b>).</p><p>Les VM de VNet-B doivent joindre le site local par VPNGW1. La solution doit limiter l'effort d'administration.</p><p>Que devez-vous modifier ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Réseaux",
   "h": "<p><b>Réseaux virtuels</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Région</th><th>Espace d'adressage</th><th>Abonnement</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contient la passerelle VPN <b>VPNGW1</b> (basée sur les routes), reliée au site local 192.168.0.0/16 par une connexion site à site avec <b>BGP activé</b>. VNet-Hub contient aussi l'appliance virtuelle <b>NVA1</b> (10.0.1.4).</p><p><b>Appairages</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Appairage</th><th>De → vers</th><th>Autoriser le trafic transféré</th><th>Transit de passerelle</th><th>Utiliser la passerelle distante</th><th>État</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>Non</td><td>Non</td><td>Oui</td><td>Connecté</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>Non</td><td>Non</td><td>Non</td><td>Connecté</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>Non</td><td>Oui</td><td>Non</td><td>Lancé</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Appairage à modifier :",
   "o": [
    "Hub-B",
    "B-Hub",
    "Hub-A",
    "Les deux appairages entre VNet-Hub et VNet-B"
   ],
   "a": 1
  },
  {
   "l": "Réglage à activer :",
   "o": [
    "Autoriser le trafic transféré",
    "Autoriser le transit de passerelle",
    "Utiliser la passerelle distante",
    "Autoriser l'accès au réseau virtuel distant"
   ],
   "a": 2
  }
 ],
 "expl": "<p>Côté hub, <b>Hub-B</b> autorise déjà le transit de passerelle. Il manque le réglage côté spoke : sur <b>B-Hub</b> (l'appairage de VNet-B vers VNet-Hub), activer <b>Utiliser la passerelle distante</b>.</p><ul><li>« Autoriser le trafic transféré » sert au trafic relayé par une appliance (NVA), pas au partage de la passerelle.</li><li>Le réglage « Utiliser la passerelle distante » n'est possible que si VNet-B n'a pas sa propre passerelle, ce qui est le cas ici.</li><li>Avec BGP sur la connexion site à site, le site local apprend automatiquement 10.2.0.0/16.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-B",
   "Peerings"
  ],
  "title": "B-Hub | Paramètres",
  "menu": [
   "*Paramètres de l'appairage"
  ],
  "rows": [
   [
    "Autoriser le trafic transféré",
    "Non"
   ],
   [
    "*Utiliser la passerelle distante",
    "Oui"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Le réglage « Utiliser la passerelle distante » se met sur l'appairage du spoke vers le hub."
},
{
 "id": "D4-203",
 "dom": 4,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Réseaux (cliquez sur l'onglet <b>Réseaux</b>).</p><p>Vous devez créer un appairage entre VNet-D et un autre réseau virtuel.</p><p>Avec quels <b>deux</b> réseaux virtuels l'appairage peut-il être créé ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Réseaux",
   "h": "<p><b>Réseaux virtuels</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Région</th><th>Espace d'adressage</th><th>Abonnement</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contient la passerelle VPN <b>VPNGW1</b> (basée sur les routes), reliée au site local 192.168.0.0/16 par une connexion site à site avec <b>BGP activé</b>. VNet-Hub contient aussi l'appliance virtuelle <b>NVA1</b> (10.0.1.4).</p><p><b>Appairages</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Appairage</th><th>De → vers</th><th>Autoriser le trafic transféré</th><th>Transit de passerelle</th><th>Utiliser la passerelle distante</th><th>État</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>Non</td><td>Non</td><td>Oui</td><td>Connecté</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>Non</td><td>Non</td><td>Non</td><td>Connecté</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>Non</td><td>Oui</td><td>Non</td><td>Lancé</td></tr></table></div>"
  }
 ],
 "opts": [
  "VNet-Hub",
  "VNet-A",
  "VNet-B",
  "VNet-C"
 ],
 "ans": [
  2,
  3
 ],
 "pick": 2,
 "expl": "<p>VNet-D (10.1.128.0/17) <b>chevauche</b> VNet-A (10.1.0.0/16).</p><ul><li><b>VNet-A : non.</b> Deux réseaux dont les espaces se chevauchent ne peuvent pas être appairés.</li><li><b>VNet-Hub : non.</b> Les espaces de D et du hub ne se chevauchent pas, mais le hub est déjà appairé à VNet-A. Azure refuse qu'un réseau soit appairé à deux réseaux qui se chevauchent : le hub ne saurait pas où envoyer 10.1.128.0/17.</li><li><b>VNet-B : oui.</b> B n'est appairé qu'au hub (10.0.0.0/16), sans chevauchement. La différence de région et d'abonnement est permise (appairage mondial, entre abonnements).</li><li><b>VNet-C : oui.</b> C n'a encore aucun appairage connecté de son côté (Hub-C est seulement lancé depuis le hub), et 10.3.0.0/16 ne chevauche pas D.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-D"
  ],
  "title": "VNet-D | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "VNet-Hub",
    "Refusé : déjà appairé à VNet-A (chevauchement)"
   ],
   [
    "*VNet-B",
    "Possible"
   ],
   [
    "*VNet-C",
    "Possible"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Chevauchement interdit avec le réseau appairé ET avec les réseaux déjà appairés à lui."
},
{
 "id": "D4-204",
 "dom": 4,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Réseaux (cliquez sur l'onglet <b>Réseaux</b>).</p><p>Les VM de VNet-A et de VNet-B doivent communiquer entre elles en passant par NVA1. Le transfert IP est déjà activé sur l'interface réseau de NVA1 et dans son système d'exploitation.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Réseaux",
   "h": "<p><b>Réseaux virtuels</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Région</th><th>Espace d'adressage</th><th>Abonnement</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contient la passerelle VPN <b>VPNGW1</b> (basée sur les routes), reliée au site local 192.168.0.0/16 par une connexion site à site avec <b>BGP activé</b>. VNet-Hub contient aussi l'appliance virtuelle <b>NVA1</b> (10.0.1.4).</p><p><b>Appairages</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Appairage</th><th>De → vers</th><th>Autoriser le trafic transféré</th><th>Transit de passerelle</th><th>Utiliser la passerelle distante</th><th>État</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>Non</td><td>Non</td><td>Oui</td><td>Connecté</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>Non</td><td>Non</td><td>Non</td><td>Connecté</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>Non</td><td>Oui</td><td>Non</td><td>Lancé</td></tr></table></div>"
  }
 ],
 "opts": [
  "Activer « Autoriser le trafic transféré » sur les appairages A-Hub et B-Hub",
  "Associer aux sous-réseaux de VNet-A et VNet-B des UDR vers 10.0.1.4",
  "Activer le transit de passerelle sur les appairages A-Hub et B-Hub",
  "Créer un appairage direct entre VNet-A et VNet-B, en plus du hub"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<ul><li><b>Itinéraires : oui.</b> Sans UDR, une VM de VNet-A n'a aucun itinéraire vers 10.2.0.0/16. Une table de routage dans VNet-A (10.2.0.0/16 → Appliance virtuelle 10.0.1.4) et une dans VNet-B (10.1.0.0/16 → 10.0.1.4) envoient le trafic à NVA1.</li><li><b>Trafic transféré : oui.</b> Le trafic que NVA1 renvoie vers VNet-B ne vient pas de VNet-Hub lui-même (sa source est 10.1.x.x). VNet-B ne l'accepte que si l'appairage de son côté (<b>B-Hub</b>) autorise le trafic transféré ; idem pour A-Hub dans l'autre sens.</li><li>Le transit de passerelle concerne la passerelle VPN, pas une NVA, et ne se règle pas sur l'appairage du spoke.</li><li>Un appairage direct ferait communiquer A et B <b>sans</b> passer par NVA1, ce qui contredit l'exigence.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-B",
   "Peerings"
  ],
  "title": "B-Hub | Paramètres",
  "menu": [
   "*Paramètres de l'appairage"
  ],
  "rows": [
   [
    "*Autoriser le trafic transféré",
    "Oui"
   ],
   [
    "Utiliser la passerelle distante",
    "Non"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Spoke ↔ spoke par une NVA = UDR vers la NVA + « trafic transféré » côté spokes + transfert IP."
},
{
 "id": "D4-205",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sécurité (cliquez sur l'onglet <b>Sécurité</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Sécurité",
   "h": "<p>VNet1 (10.0.0.0/16) contient Subnet1 (10.0.1.0/24) et Subnet2 (10.0.2.0/24). VNet2 est un autre réseau virtuel de la même région.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Sous-réseau</th><th>Adresse privée</th><th>IP publique</th><th>NSG de l'interface</th><th>Groupe de sécurité d'application</th></tr><tr><td>VM1</td><td>VNet1/Subnet1</td><td>10.0.1.4</td><td>Standard</td><td>NSG-VM1</td><td>ASG-Web</td></tr><tr><td>VM2</td><td>VNet1/Subnet1</td><td>10.0.1.5</td><td>Standard</td><td>—</td><td>ASG-Web</td></tr><tr><td>VM3</td><td>VNet1/Subnet2</td><td>10.0.2.4</td><td>—</td><td>—</td><td>ASG-Data</td></tr><tr><td>VM4</td><td>VNet1/Subnet2</td><td>10.0.2.5</td><td>Standard</td><td>—</td><td>—</td></tr><tr><td>VM5</td><td>VNet2/Subnet1</td><td>10.1.1.4</td><td>—</td><td>—</td><td>—</td></tr></table></div><p>Seul <b>Subnet1</b> a un NSG : <b>NSG-S1</b>. Règles de trafic entrant personnalisées (en plus des règles par défaut) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>NSG</th><th>Priorité</th><th>Port</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>NSG-S1</td><td>100</td><td>TCP 443</td><td>Internet</td><td>ASG-Web</td><td>Autoriser</td></tr><tr><td>NSG-S1</td><td>200</td><td>TCP 3389</td><td>Tout</td><td>Tout</td><td>Refuser</td></tr><tr><td>NSG-S1</td><td>300</td><td>TCP 3389</td><td>10.0.2.0/24</td><td>Tout</td><td>Autoriser</td></tr><tr><td>NSG-VM1</td><td>100</td><td>TCP 3389</td><td>VirtualNetwork</td><td>Tout</td><td>Autoriser</td></tr><tr><td>NSG-VM1</td><td>110</td><td>TCP 443</td><td>Internet</td><td>Tout</td><td>Refuser</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Un client sur Internet peut joindre VM2 en HTTPS (TCP 443) par son adresse IP publique.",
   "a": 0
  },
  {
   "l": "Un client sur Internet peut joindre VM1 en HTTPS (TCP 443) par son adresse IP publique.",
   "a": 1
  },
  {
   "l": "VM3 peut se connecter en RDP (TCP 3389) à VM2.",
   "a": 1
  },
  {
   "l": "VM2 peut se connecter en RDP (TCP 3389) à VM1.",
   "a": 1
  }
 ],
 "expl": "<p>Pour le trafic entrant, Azure évalue d'abord le NSG du <b>sous-réseau</b>, puis celui de l'<b>interface</b>. Les deux doivent autoriser. Dans chaque NSG, la première règle qui correspond (plus petite priorité) décide.</p><ul><li><b>Internet → VM2 en 443 : Oui.</b> NSG-S1 règle 100 (Internet vers ASG-Web, dont VM2 est membre) autorise. VM2 n'a pas de NSG d'interface.</li><li><b>Internet → VM1 en 443 : Non.</b> NSG-S1 autorise (règle 100), mais NSG-VM1 refuse : sa règle 100 ne concerne que 3389, sa règle 110 refuse 443 depuis Internet.</li><li><b>VM3 → VM2 en RDP : Non.</b> Dans NSG-S1, la règle 200 (refus de 3389 depuis tout) a une priorité plus forte que la règle 300 qui autorise 10.0.2.0/24. La règle 300 n'est jamais atteinte.</li><li><b>VM2 → VM1 en RDP : Non.</b> Piège : un NSG de sous-réseau s'applique aussi au trafic <b>entre deux VM du même sous-réseau</b>. La règle 200 de NSG-S1 refuse avant que NSG-VM1 ne soit évalué.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1",
   "Réseau"
  ],
  "title": "VM1 | Règles de sécurité effectives",
  "menu": [
   "Vue d'ensemble",
   "Paramètres réseau",
   "*Règles de sécurité effectives"
  ],
  "rows": [
   [
    "NSG-S1 (sous-réseau)",
    "évalué en premier pour le trafic entrant"
   ],
   [
    "*NSG-VM1 (interface)",
    "évalué ensuite : les deux doivent autoriser"
   ]
  ]
 },
 "keep": "Entrant : NSG du sous-réseau puis NSG de l'interface. Le NSG de sous-réseau filtre aussi le trafic intra-sous-réseau."
},
{
 "id": "D4-206",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sécurité (cliquez sur l'onglet <b>Sécurité</b>).</p><p>VM3 ouvre une connexion TCP 443 vers VM1 (10.0.1.4).</p><p>Quel est le résultat, et quelles règles décident dans chaque NSG ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Sécurité",
   "h": "<p>VNet1 (10.0.0.0/16) contient Subnet1 (10.0.1.0/24) et Subnet2 (10.0.2.0/24). VNet2 est un autre réseau virtuel de la même région.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Sous-réseau</th><th>Adresse privée</th><th>IP publique</th><th>NSG de l'interface</th><th>Groupe de sécurité d'application</th></tr><tr><td>VM1</td><td>VNet1/Subnet1</td><td>10.0.1.4</td><td>Standard</td><td>NSG-VM1</td><td>ASG-Web</td></tr><tr><td>VM2</td><td>VNet1/Subnet1</td><td>10.0.1.5</td><td>Standard</td><td>—</td><td>ASG-Web</td></tr><tr><td>VM3</td><td>VNet1/Subnet2</td><td>10.0.2.4</td><td>—</td><td>—</td><td>ASG-Data</td></tr><tr><td>VM4</td><td>VNet1/Subnet2</td><td>10.0.2.5</td><td>Standard</td><td>—</td><td>—</td></tr><tr><td>VM5</td><td>VNet2/Subnet1</td><td>10.1.1.4</td><td>—</td><td>—</td><td>—</td></tr></table></div><p>Seul <b>Subnet1</b> a un NSG : <b>NSG-S1</b>. Règles de trafic entrant personnalisées (en plus des règles par défaut) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>NSG</th><th>Priorité</th><th>Port</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>NSG-S1</td><td>100</td><td>TCP 443</td><td>Internet</td><td>ASG-Web</td><td>Autoriser</td></tr><tr><td>NSG-S1</td><td>200</td><td>TCP 3389</td><td>Tout</td><td>Tout</td><td>Refuser</td></tr><tr><td>NSG-S1</td><td>300</td><td>TCP 3389</td><td>10.0.2.0/24</td><td>Tout</td><td>Autoriser</td></tr><tr><td>NSG-VM1</td><td>100</td><td>TCP 3389</td><td>VirtualNetwork</td><td>Tout</td><td>Autoriser</td></tr><tr><td>NSG-VM1</td><td>110</td><td>TCP 443</td><td>Internet</td><td>Tout</td><td>Refuser</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Règle décisive dans NSG-S1 :",
   "o": [
    "100",
    "300",
    "AllowVnetInBound (65000)",
    "DenyAllInBound (65500)"
   ],
   "a": 2
  },
  {
   "l": "Règle décisive dans NSG-VM1 :",
   "o": [
    "100",
    "110",
    "AllowVnetInBound (65000)",
    "DenyAllInBound (65500)"
   ],
   "a": 2
  },
  {
   "l": "Résultat de la connexion :",
   "o": [
    "Autorisée",
    "Refusée"
   ],
   "a": 0
  }
 ],
 "expl": "<p>La source est 10.0.2.4 : elle appartient à l'étiquette <b>VirtualNetwork</b>, pas à <b>Internet</b>.</p><ul><li><b>NSG-S1 :</b> la règle 100 ne vise que la source Internet ; les règles 200 et 300 ne visent que 3389. La première règle qui correspond est la règle par défaut <b>AllowVnetInBound</b> : autorisé.</li><li><b>NSG-VM1 :</b> la règle 100 ne vise que 3389, la règle 110 que la source Internet. <b>AllowVnetInBound</b> autorise.</li><li>Les deux NSG autorisent : la connexion passe.</li></ul>",
 "portal": {
  "path": [
   "Network Watcher",
   "Vérification du flux IP"
  ],
  "title": "Network Watcher | Vérification du flux IP",
  "menu": [
   "Topologie",
   "*Vérification du flux IP",
   "Tronçon suivant"
  ],
  "rows": [
   [
    "VM1 · entrant · TCP 10.0.2.4 → 10.0.1.4:443",
    "Accès autorisé"
   ],
   [
    "*Règle",
    "AllowVnetInBound"
   ]
  ],
  "btn": "Vérifier"
 },
 "keep": "Une adresse du VNet n'est pas « Internet » : une règle à source Internet ne la concerne pas."
},
{
 "id": "D4-207",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sécurité (cliquez sur l'onglet <b>Sécurité</b>).</p><p>Les administrateurs qui travaillent depuis Subnet2 doivent pouvoir se connecter en RDP à VM2. Les autres flux ne doivent pas changer.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Sécurité",
   "h": "<p>VNet1 (10.0.0.0/16) contient Subnet1 (10.0.1.0/24) et Subnet2 (10.0.2.0/24). VNet2 est un autre réseau virtuel de la même région.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Sous-réseau</th><th>Adresse privée</th><th>IP publique</th><th>NSG de l'interface</th><th>Groupe de sécurité d'application</th></tr><tr><td>VM1</td><td>VNet1/Subnet1</td><td>10.0.1.4</td><td>Standard</td><td>NSG-VM1</td><td>ASG-Web</td></tr><tr><td>VM2</td><td>VNet1/Subnet1</td><td>10.0.1.5</td><td>Standard</td><td>—</td><td>ASG-Web</td></tr><tr><td>VM3</td><td>VNet1/Subnet2</td><td>10.0.2.4</td><td>—</td><td>—</td><td>ASG-Data</td></tr><tr><td>VM4</td><td>VNet1/Subnet2</td><td>10.0.2.5</td><td>Standard</td><td>—</td><td>—</td></tr><tr><td>VM5</td><td>VNet2/Subnet1</td><td>10.1.1.4</td><td>—</td><td>—</td><td>—</td></tr></table></div><p>Seul <b>Subnet1</b> a un NSG : <b>NSG-S1</b>. Règles de trafic entrant personnalisées (en plus des règles par défaut) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>NSG</th><th>Priorité</th><th>Port</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>NSG-S1</td><td>100</td><td>TCP 443</td><td>Internet</td><td>ASG-Web</td><td>Autoriser</td></tr><tr><td>NSG-S1</td><td>200</td><td>TCP 3389</td><td>Tout</td><td>Tout</td><td>Refuser</td></tr><tr><td>NSG-S1</td><td>300</td><td>TCP 3389</td><td>10.0.2.0/24</td><td>Tout</td><td>Autoriser</td></tr><tr><td>NSG-VM1</td><td>100</td><td>TCP 3389</td><td>VirtualNetwork</td><td>Tout</td><td>Autoriser</td></tr><tr><td>NSG-VM1</td><td>110</td><td>TCP 443</td><td>Internet</td><td>Tout</td><td>Refuser</td></tr></table></div>"
  }
 ],
 "opts": [
  "Passer la priorité de la règle 300 de NSG-S1 à 150",
  "Ajouter à NSG-VM1 une règle qui autorise 3389 depuis 10.0.2.0/24",
  "Supprimer la règle 200 de NSG-S1 et garder la règle 300",
  "Associer à Subnet2 un NSG qui autorise 3389 en sortie"
 ],
 "ans": 0,
 "expl": "<p>La règle 300 (3389 depuis 10.0.2.0/24) est masquée par la règle 200 (refus de 3389 depuis tout). En lui donnant une priorité <b>plus forte que 200</b> (150), elle est évaluée avant le refus. Le reste du trafic RDP reste refusé.</p><ul><li>NSG-VM1 est le NSG de l'interface de <b>VM1</b>, pas de VM2. Et une autorisation dans un NSG d'interface ne contourne pas un refus du NSG de sous-réseau.</li><li>Supprimer la règle 200 laisserait passer le RDP depuis tout le réseau virtuel (règle par défaut AllowVnetInBound) : d'autres flux changent.</li><li>Subnet2 n'a pas de NSG, son trafic sortant est déjà autorisé ; le blocage est en entrée, dans NSG-S1.</li></ul>",
 "portal": {
  "path": [
   "Groupes de sécurité réseau",
   "NSG-S1"
  ],
  "title": "NSG-S1 | Règles de sécurité de trafic entrant",
  "menu": [
   "Vue d'ensemble",
   "*Règles de sécurité de trafic entrant",
   "Sous-réseaux"
  ],
  "rows": [
   [
    "100 · 443 · Internet → ASG-Web",
    "Autoriser"
   ],
   [
    "*150 · 3389 · 10.0.2.0/24",
    "Autoriser"
   ],
   [
    "200 · 3389 · Tout",
    "Refuser"
   ]
  ]
 },
 "keep": "Une règle masquée par un refus plus prioritaire ne sert à rien : changez sa priorité."
},
{
 "id": "D4-208",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sécurité (cliquez sur l'onglet <b>Sécurité</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Sécurité",
   "h": "<p>VNet1 (10.0.0.0/16) contient Subnet1 (10.0.1.0/24) et Subnet2 (10.0.2.0/24). VNet2 est un autre réseau virtuel de la même région.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Sous-réseau</th><th>Adresse privée</th><th>IP publique</th><th>NSG de l'interface</th><th>Groupe de sécurité d'application</th></tr><tr><td>VM1</td><td>VNet1/Subnet1</td><td>10.0.1.4</td><td>Standard</td><td>NSG-VM1</td><td>ASG-Web</td></tr><tr><td>VM2</td><td>VNet1/Subnet1</td><td>10.0.1.5</td><td>Standard</td><td>—</td><td>ASG-Web</td></tr><tr><td>VM3</td><td>VNet1/Subnet2</td><td>10.0.2.4</td><td>—</td><td>—</td><td>ASG-Data</td></tr><tr><td>VM4</td><td>VNet1/Subnet2</td><td>10.0.2.5</td><td>Standard</td><td>—</td><td>—</td></tr><tr><td>VM5</td><td>VNet2/Subnet1</td><td>10.1.1.4</td><td>—</td><td>—</td><td>—</td></tr></table></div><p>Seul <b>Subnet1</b> a un NSG : <b>NSG-S1</b>. Règles de trafic entrant personnalisées (en plus des règles par défaut) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>NSG</th><th>Priorité</th><th>Port</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>NSG-S1</td><td>100</td><td>TCP 443</td><td>Internet</td><td>ASG-Web</td><td>Autoriser</td></tr><tr><td>NSG-S1</td><td>200</td><td>TCP 3389</td><td>Tout</td><td>Tout</td><td>Refuser</td></tr><tr><td>NSG-S1</td><td>300</td><td>TCP 3389</td><td>10.0.2.0/24</td><td>Tout</td><td>Autoriser</td></tr><tr><td>NSG-VM1</td><td>100</td><td>TCP 3389</td><td>VirtualNetwork</td><td>Tout</td><td>Autoriser</td></tr><tr><td>NSG-VM1</td><td>110</td><td>TCP 443</td><td>Internet</td><td>Tout</td><td>Refuser</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Si vous ajoutez l'interface de VM4 à ASG-Web, un client sur Internet pourra joindre VM4 en HTTPS.",
   "a": 1
  },
  {
   "l": "Vous pouvez ajouter l'interface réseau de VM5 à ASG-Web.",
   "a": 1
  },
  {
   "l": "Vous pouvez associer NSG-S1 à Subnet2 sans le dissocier de Subnet1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM4 dans ASG-Web : Non.</b> VM4 est dans Subnet2, qui n'a <b>pas</b> de NSG, et son interface non plus : la règle 100 de NSG-S1 ne s'applique pas à elle. Et une adresse IP publique <b>Standard</b> est fermée au trafic entrant tant qu'un NSG ne l'autorise pas. Être membre d'un ASG ne sert que dans les NSG qui le citent.</li><li><b>VM5 dans ASG-Web : Non.</b> Toutes les interfaces d'un groupe de sécurité d'application doivent être dans <b>le même réseau virtuel</b>. ASG-Web contient déjà des interfaces de VNet1 ; VM5 est dans VNet2.</li><li><b>NSG-S1 sur deux sous-réseaux : Oui.</b> Un même NSG peut être associé à plusieurs sous-réseaux (et interfaces) de la même région.</li></ul>",
 "portal": {
  "path": [
   "Groupes de sécurité d'application",
   "ASG-Web"
  ],
  "title": "ASG-Web | Interfaces réseau",
  "menu": [
   "Vue d'ensemble",
   "*Interfaces réseau"
  ],
  "rows": [
   [
    "vm1-nic",
    "VNet1/Subnet1"
   ],
   [
    "vm2-nic",
    "VNet1/Subnet1"
   ],
   [
    "*vm5-nic",
    "Refusé : autre réseau virtuel (VNet2)"
   ]
  ]
 },
 "keep": "ASG = un seul VNet. IP publique Standard sans NSG qui autorise = fermée."
},
{
 "id": "D4-209",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Routage (cliquez sur l'onglet <b>Routage</b>).</p><p>VM-A (Subnet1) envoie des paquets vers les destinations ci-dessous.</p><p>Quel est le tronçon suivant pour chaque destination ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Routage",
   "h": "<p>VNet1 (10.0.0.0/16) est appairé à VNet2 (10.1.0.0/16). La passerelle VPN de VNet1 apprend le réseau du site local <b>192.168.0.0/16</b> par BGP.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Sous-réseau</th><th>Plage</th><th>Table de routage</th><th>Contenu</th></tr><tr><td>Subnet1</td><td>10.0.1.0/24</td><td>RT1</td><td>VM-A (10.0.1.4)</td></tr><tr><td>Subnet2</td><td>10.0.2.0/24</td><td>—</td><td>VM-B (10.0.2.4)</td></tr><tr><td>Subnet3</td><td>10.0.3.0/24</td><td>—</td><td>NVA1 (10.0.3.4), transfert IP activé</td></tr><tr><td>GatewaySubnet</td><td>10.0.255.0/27</td><td>—</td><td>Passerelle VPN</td></tr></table></div><p><b>RT1</b> — Propager les itinéraires de passerelle : <b>Non</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Préfixe</th><th>Type de tronçon suivant</th><th>Adresse du tronçon suivant</th></tr><tr><td>R1</td><td>0.0.0.0/0</td><td>Appliance virtuelle</td><td>10.0.3.4</td></tr><tr><td>R2</td><td>10.1.0.0/16</td><td>Aucun</td><td>—</td></tr><tr><td>R3</td><td>10.1.5.0/24</td><td>Appliance virtuelle</td><td>10.0.3.4</td></tr><tr><td>R4</td><td>192.168.10.0/24</td><td>Internet</td><td>—</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "10.1.5.10",
   "o": [
    "Appliance virtuelle 10.0.3.4",
    "Appairage de réseaux virtuels",
    "Aucun (abandonné)",
    "Passerelle de réseau virtuel"
   ],
   "a": 0
  },
  {
   "l": "10.1.6.10",
   "o": [
    "Appliance virtuelle 10.0.3.4",
    "Appairage de réseaux virtuels",
    "Aucun (abandonné)",
    "Passerelle de réseau virtuel"
   ],
   "a": 2
  },
  {
   "l": "192.168.20.5",
   "o": [
    "Appliance virtuelle 10.0.3.4",
    "Internet",
    "Aucun (abandonné)",
    "Passerelle de réseau virtuel"
   ],
   "a": 0
  },
  {
   "l": "192.168.10.5",
   "o": [
    "Appliance virtuelle 10.0.3.4",
    "Internet",
    "Aucun (abandonné)",
    "Passerelle de réseau virtuel"
   ],
   "a": 1
  },
  {
   "l": "10.0.2.4",
   "o": [
    "Appliance virtuelle 10.0.3.4",
    "Réseau virtuel",
    "Aucun (abandonné)",
    "Internet"
   ],
   "a": 1
  }
 ],
 "expl": "<p>Azure choisit l'itinéraire au <b>préfixe le plus long</b>, quelle que soit son origine (système, BGP, UDR). À préfixe égal seulement, l'UDR l'emporte sur BGP, puis sur le système.</p><ul><li><b>10.1.5.10 :</b> R3 (10.1.5.0/24) est plus précis que R2 (/16) → appliance 10.0.3.4.</li><li><b>10.1.6.10 :</b> seul R2 (10.1.0.0/16 → Aucun) correspond ; il remplace l'itinéraire système d'appairage → abandonné.</li><li><b>192.168.20.5 :</b> la propagation des itinéraires de passerelle est désactivée sur RT1, donc l'itinéraire BGP 192.168.0.0/16 n'existe pas pour Subnet1. Il reste R1 (0.0.0.0/0) → appliance.</li><li><b>192.168.10.5 :</b> R4 (192.168.10.0/24 → Internet) est le plus précis → Internet (et le paquet n'arrivera pas au site local).</li><li><b>10.0.2.4 :</b> l'itinéraire système 10.0.0.0/16 (Réseau virtuel) est plus précis que R1 (/0) → livré directement dans le réseau virtuel.</li></ul>",
 "portal": {
  "path": [
   "Interfaces réseau",
   "vm-a-nic"
  ],
  "title": "vm-a-nic | Itinéraires effectifs",
  "menu": [
   "Vue d'ensemble",
   "Configurations IP",
   "*Itinéraires effectifs"
  ],
  "rows": [
   [
    "10.0.0.0/16",
    "Réseau virtuel (système)"
   ],
   [
    "*10.1.5.0/24",
    "Appliance virtuelle 10.0.3.4 (R3)"
   ],
   [
    "10.1.0.0/16",
    "Aucun (R2)"
   ],
   [
    "0.0.0.0/0",
    "Appliance virtuelle 10.0.3.4 (R1)"
   ]
  ]
 },
 "keep": "Préfixe le plus long d'abord ; à égalité : UDR > BGP > système. « Aucun » = abandon."
},
{
 "id": "D4-210",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Routage (cliquez sur l'onglet <b>Routage</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Routage",
   "h": "<p>VNet1 (10.0.0.0/16) est appairé à VNet2 (10.1.0.0/16). La passerelle VPN de VNet1 apprend le réseau du site local <b>192.168.0.0/16</b> par BGP.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Sous-réseau</th><th>Plage</th><th>Table de routage</th><th>Contenu</th></tr><tr><td>Subnet1</td><td>10.0.1.0/24</td><td>RT1</td><td>VM-A (10.0.1.4)</td></tr><tr><td>Subnet2</td><td>10.0.2.0/24</td><td>—</td><td>VM-B (10.0.2.4)</td></tr><tr><td>Subnet3</td><td>10.0.3.0/24</td><td>—</td><td>NVA1 (10.0.3.4), transfert IP activé</td></tr><tr><td>GatewaySubnet</td><td>10.0.255.0/27</td><td>—</td><td>Passerelle VPN</td></tr></table></div><p><b>RT1</b> — Propager les itinéraires de passerelle : <b>Non</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Préfixe</th><th>Type de tronçon suivant</th><th>Adresse du tronçon suivant</th></tr><tr><td>R1</td><td>0.0.0.0/0</td><td>Appliance virtuelle</td><td>10.0.3.4</td></tr><tr><td>R2</td><td>10.1.0.0/16</td><td>Aucun</td><td>—</td></tr><tr><td>R3</td><td>10.1.5.0/24</td><td>Appliance virtuelle</td><td>10.0.3.4</td></tr><tr><td>R4</td><td>192.168.10.0/24</td><td>Internet</td><td>—</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Le trafic de VM-B vers 192.168.20.5 passe par la passerelle VPN.",
   "a": 0
  },
  {
   "l": "Le trafic d'une VM de VNet2 vers VM-A passe par NVA1.",
   "a": 1
  },
  {
   "l": "RT1 peut être associée à un sous-réseau de VNet2 si VNet2 est dans la même région et le même abonnement.",
   "a": 0
  },
  {
   "l": "Si le transfert IP était désactivé sur l'interface de NVA1, VM-A pourrait toujours sortir sur Internet.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>VM-B → site local : Oui.</b> Subnet2 n'a pas de table de routage : il reçoit les itinéraires BGP de la passerelle (192.168.0.0/16 → passerelle de réseau virtuel).</li><li><b>VNet2 → VM-A via NVA1 : Non.</b> RT1 ne s'applique qu'au trafic qui <b>sort</b> de Subnet1. Une VM de VNet2 utilise l'itinéraire système d'appairage et arrive directement sur VM-A. (Le retour, lui, est abandonné par R2 sauf pour 10.1.5.0/24 : un routage asymétrique à corriger.)</li><li><b>RT1 dans VNet2 : Oui.</b> Une table de routage peut être associée à des sous-réseaux de n'importe quel réseau virtuel de <b>la même région et du même abonnement</b>.</li><li><b>Sans transfert IP : Non.</b> R1 envoie tout le trafic Internet de VM-A à NVA1. Si l'interface de NVA1 n'a pas le transfert IP, Azure abandonne les paquets qui ne lui sont pas adressés.</li></ul>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT1"
  ],
  "title": "RT1 | Sous-réseaux",
  "menu": [
   "Vue d'ensemble",
   "Itinéraires",
   "*Sous-réseaux",
   "Configuration"
  ],
  "rows": [
   [
    "VNet1/Subnet1",
    "Associé"
   ],
   [
    "*VNet2/…",
    "Possible (même région et abonnement)"
   ]
  ],
  "btn": "+ Associer"
 },
 "keep": "Une UDR agit sur le trafic sortant du sous-réseau associé, pas sur le trafic qui y entre."
},
{
 "id": "D4-211",
 "dom": 4,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Routage (cliquez sur l'onglet <b>Routage</b>).</p><p>Le trafic de Subnet1 vers le site local (192.168.0.0/16) doit passer par la passerelle VPN et non plus par NVA1. Le trafic vers Internet doit continuer à passer par NVA1.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Routage",
   "h": "<p>VNet1 (10.0.0.0/16) est appairé à VNet2 (10.1.0.0/16). La passerelle VPN de VNet1 apprend le réseau du site local <b>192.168.0.0/16</b> par BGP.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Sous-réseau</th><th>Plage</th><th>Table de routage</th><th>Contenu</th></tr><tr><td>Subnet1</td><td>10.0.1.0/24</td><td>RT1</td><td>VM-A (10.0.1.4)</td></tr><tr><td>Subnet2</td><td>10.0.2.0/24</td><td>—</td><td>VM-B (10.0.2.4)</td></tr><tr><td>Subnet3</td><td>10.0.3.0/24</td><td>—</td><td>NVA1 (10.0.3.4), transfert IP activé</td></tr><tr><td>GatewaySubnet</td><td>10.0.255.0/27</td><td>—</td><td>Passerelle VPN</td></tr></table></div><p><b>RT1</b> — Propager les itinéraires de passerelle : <b>Non</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Préfixe</th><th>Type de tronçon suivant</th><th>Adresse du tronçon suivant</th></tr><tr><td>R1</td><td>0.0.0.0/0</td><td>Appliance virtuelle</td><td>10.0.3.4</td></tr><tr><td>R2</td><td>10.1.0.0/16</td><td>Aucun</td><td>—</td></tr><tr><td>R3</td><td>10.1.5.0/24</td><td>Appliance virtuelle</td><td>10.0.3.4</td></tr><tr><td>R4</td><td>192.168.10.0/24</td><td>Internet</td><td>—</td></tr></table></div>"
  }
 ],
 "opts": [
  "Passer « Propager les itinéraires de passerelle » à Oui sur RT1",
  "Ajouter à RT1 192.168.0.0/16 → Passerelle de réseau virtuel",
  "Ajouter à RT1 192.168.0.0/16 → Réseau virtuel",
  "Supprimer R1 de RT1 et activer le transfert IP sur VM-A"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<ul><li><b>Propagation : oui.</b> Subnet1 reçoit alors l'itinéraire BGP 192.168.0.0/16 → passerelle. Son préfixe (/16) est plus long que R1 (/0) : il l'emporte. R1 continue de capter le trafic Internet.</li><li><b>UDR vers la passerelle : oui.</b> Même effet, sans dépendre de la propagation. (R4 continue d'envoyer 192.168.10.0/24 vers Internet : ce préfixe plus long reste prioritaire, ce que l'énoncé ne demande pas de changer.)</li><li><b>Réseau virtuel : non.</b> Ce type de tronçon livre le paquet à l'intérieur du réseau virtuel ; 192.168.0.0/16 n'y existe pas, le paquet est perdu.</li><li><b>Supprimer R1 : non.</b> Le trafic Internet ne passerait plus par NVA1 ; le transfert IP sur VM-A n'a aucun rapport.</li></ul>",
 "portal": {
  "path": [
   "Tables de routage",
   "RT1"
  ],
  "title": "RT1 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "Itinéraires",
   "Sous-réseaux",
   "*Configuration"
  ],
  "rows": [
   [
    "*Propager les itinéraires de passerelle",
    "Oui"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Un /16 appris en BGP bat une UDR 0.0.0.0/0 : la longueur du préfixe passe avant l'origine."
},
{
 "id": "D4-212",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stockage (cliquez sur l'onglet <b>Stockage</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Stockage",
   "h": "<p>VNet1 (France Central) contient Subnet1 et Subnet2. VNet2 est appairé à VNet1. Le site local est relié à VNet1 par un VPN ; sa sortie Internet utilise l'adresse publique 203.0.113.10.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Sous-réseau</th><th>Points de terminaison de service</th></tr><tr><td>VNet1/Subnet1</td><td>Microsoft.Storage</td></tr><tr><td>VNet1/Subnet2</td><td>—</td></tr><tr><td>VNet2/Subnet1</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Accès au réseau public</th><th>Règles</th><th>Point de terminaison privé</th></tr><tr><td>storage1</td><td>Activé à partir des réseaux sélectionnés</td><td>Réseau virtuel : VNet1/Subnet1 · Plage IP : 203.0.113.0/24</td><td>—</td></tr><tr><td>storage2</td><td>Désactivé</td><td>—</td><td>PE2 dans VNet1/Subnet2</td></tr><tr><td>storage3</td><td>Activé à partir de tous les réseaux</td><td>—</td><td>—</td></tr></table></div><p>La zone DNS privée <b>privatelink.blob.core.windows.net</b> contient l'enregistrement A de PE2. Elle est liée à <b>VNet1 uniquement</b>. Tous les réseaux virtuels utilisent le DNS fourni par Azure.</p>"
  }
 ],
 "rows": [
  {
   "l": "Une VM de VNet1/Subnet2 peut lire un blob de storage1.",
   "a": 1
  },
  {
   "l": "Une VM de VNet2 peut lire un blob de storage2 par le nom storage2.blob.core.windows.net.",
   "a": 1
  },
  {
   "l": "Un utilisateur du site local qui passe par Internet peut lire un blob de storage1.",
   "a": 0
  },
  {
   "l": "Une VM de VNet1/Subnet1 peut lire un blob de storage2.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Subnet2 → storage1 : Non.</b> Subnet2 n'a pas de point de terminaison de service : le trafic arrive avec une adresse publique Azure, qui n'est ni dans la règle de réseau virtuel (Subnet1 seulement) ni dans la plage 203.0.113.0/24.</li><li><b>VNet2 → storage2 : Non.</b> La zone privatelink n'est liée qu'à VNet1 : dans VNet2, le nom se résout en adresse <b>publique</b>, et l'accès public de storage2 est désactivé. L'appairage suffirait pour joindre PE2, mais seulement avec la bonne résolution DNS.</li><li><b>Site local par Internet → storage1 : Oui.</b> L'adresse 203.0.113.10 est dans la règle IP autorisée.</li><li><b>Subnet1 → storage2 : Oui.</b> VNet1 est lié à la zone privée : le nom se résout en adresse de PE2, joignable depuis tout le réseau virtuel.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage2"
  ],
  "title": "storage2 | Mise en réseau",
  "menu": [
   "Vue d'ensemble",
   "Clés d'accès",
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Accès au réseau public",
    "Désactivé"
   ]
  ]
 },
 "keep": "Point de terminaison privé = adresse privée + DNS : sans lien de la zone, le nom reste public."
},
{
 "id": "D4-213",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stockage (cliquez sur l'onglet <b>Stockage</b>).</p><p>Vous devez permettre l'accès à storage2 depuis les VM de VNet2, et l'accès à storage1 depuis les VM de VNet1/Subnet2. La solution doit limiter le nombre de ressources créées.</p><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Stockage",
   "h": "<p>VNet1 (France Central) contient Subnet1 et Subnet2. VNet2 est appairé à VNet1. Le site local est relié à VNet1 par un VPN ; sa sortie Internet utilise l'adresse publique 203.0.113.10.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Sous-réseau</th><th>Points de terminaison de service</th></tr><tr><td>VNet1/Subnet1</td><td>Microsoft.Storage</td></tr><tr><td>VNet1/Subnet2</td><td>—</td></tr><tr><td>VNet2/Subnet1</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Accès au réseau public</th><th>Règles</th><th>Point de terminaison privé</th></tr><tr><td>storage1</td><td>Activé à partir des réseaux sélectionnés</td><td>Réseau virtuel : VNet1/Subnet1 · Plage IP : 203.0.113.0/24</td><td>—</td></tr><tr><td>storage2</td><td>Désactivé</td><td>—</td><td>PE2 dans VNet1/Subnet2</td></tr><tr><td>storage3</td><td>Activé à partir de tous les réseaux</td><td>—</td><td>—</td></tr></table></div><p>La zone DNS privée <b>privatelink.blob.core.windows.net</b> contient l'enregistrement A de PE2. Elle est liée à <b>VNet1 uniquement</b>. Tous les réseaux virtuels utilisent le DNS fourni par Azure.</p>"
  }
 ],
 "rows": [
  {
   "l": "Pour storage2 depuis VNet2 :",
   "o": [
    "Lier la zone privatelink à VNet2",
    "Créer un second point de terminaison privé dans VNet2",
    "Activer l'accès public de storage2 pour VNet2",
    "Ajouter un point de terminaison de service sur VNet2"
   ],
   "a": 0
  },
  {
   "l": "Pour storage1 depuis Subnet2 :",
   "o": [
    "Ajouter 10.0.2.0/24 aux plages IP de storage1",
    "Point de terminaison de service sur Subnet2 et règle de VNet",
    "Lier la zone privatelink à Subnet2",
    "Activer l'exception des services Microsoft approuvés"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>storage2 :</b> PE2 est déjà joignable depuis VNet2 par l'appairage. Il manque la résolution : <b>lier la zone privatelink.blob.core.windows.net à VNet2</b>. Un second point de terminaison est inutile (et créerait une ressource de plus).</li><li><b>storage1 :</b> activer le point de terminaison de service Microsoft.Storage sur Subnet2, puis ajouter Subnet2 comme <b>règle de réseau virtuel</b> de storage1. Les règles IP du pare-feu de stockage n'acceptent pas les plages privées (10.x). Une zone DNS se lie à un réseau virtuel, pas à un sous-réseau. L'exception des services approuvés concerne des services Azure, pas des VM.</li></ul>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "privatelink.blob.core.windows.net"
  ],
  "title": "privatelink.blob.core.windows.net | Liens de réseau virtuel",
  "menu": [
   "Vue d'ensemble",
   "Jeux d'enregistrements",
   "*Liens de réseau virtuel"
  ],
  "rows": [
   [
    "link-vnet1",
    "VNet1"
   ],
   [
    "*link-vnet2",
    "VNet2"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Les règles IP du stockage refusent les adresses privées : pour un sous-réseau, point de terminaison de service + règle de VNet."
},
{
 "id": "D4-214",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stockage (cliquez sur l'onglet <b>Stockage</b>).</p><p>Les utilisateurs du site local doivent accéder à storage2 par le VPN. Les serveurs DNS du site local résolvent aujourd'hui storage2.blob.core.windows.net vers son adresse publique.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Stockage",
   "h": "<p>VNet1 (France Central) contient Subnet1 et Subnet2. VNet2 est appairé à VNet1. Le site local est relié à VNet1 par un VPN ; sa sortie Internet utilise l'adresse publique 203.0.113.10.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Sous-réseau</th><th>Points de terminaison de service</th></tr><tr><td>VNet1/Subnet1</td><td>Microsoft.Storage</td></tr><tr><td>VNet1/Subnet2</td><td>—</td></tr><tr><td>VNet2/Subnet1</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Accès au réseau public</th><th>Règles</th><th>Point de terminaison privé</th></tr><tr><td>storage1</td><td>Activé à partir des réseaux sélectionnés</td><td>Réseau virtuel : VNet1/Subnet1 · Plage IP : 203.0.113.0/24</td><td>—</td></tr><tr><td>storage2</td><td>Désactivé</td><td>—</td><td>PE2 dans VNet1/Subnet2</td></tr><tr><td>storage3</td><td>Activé à partir de tous les réseaux</td><td>—</td><td>—</td></tr></table></div><p>La zone DNS privée <b>privatelink.blob.core.windows.net</b> contient l'enregistrement A de PE2. Elle est liée à <b>VNet1 uniquement</b>. Tous les réseaux virtuels utilisent le DNS fourni par Azure.</p>"
  }
 ],
 "opts": [
  "Lier la zone privatelink.blob.core.windows.net au réseau du site local",
  "Ajouter l'adresse 203.0.113.10 aux règles de pare-feu de storage2",
  "Déployer un DNS Private Resolver et un redirecteur conditionnel local",
  "Activer un point de terminaison de service sur le GatewaySubnet"
 ],
 "ans": 2,
 "expl": "<p>Les serveurs DNS locaux ne peuvent pas interroger directement une zone privée Azure. Un <b>Azure DNS Private Resolver</b> avec un point de terminaison entrant dans VNet1 reçoit leurs requêtes ; un <b>redirecteur conditionnel</b> pour blob.core.windows.net vers ce point de terminaison renvoie l'adresse de PE2, joignable par le VPN.</p><ul><li>Une zone DNS privée ne se lie qu'à des réseaux virtuels Azure.</li><li>L'accès public de storage2 est désactivé : une règle IP n'aurait aucun effet, et le trafic passerait par Internet.</li><li>Un point de terminaison de service ne sert pas au trafic venu du site local.</li></ul>",
 "portal": {
  "path": [
   "DNS Private Resolver",
   "dnspr1"
  ],
  "title": "dnspr1 | Points de terminaison entrants",
  "menu": [
   "Vue d'ensemble",
   "*Points de terminaison entrants",
   "Points de terminaison sortants"
  ],
  "rows": [
   [
    "*in-1",
    "10.0.10.4 · cible du redirecteur conditionnel local"
   ]
  ]
 },
 "keep": "Site local → zone privée Azure = redirecteur conditionnel vers le point entrant du DNS Private Resolver."
},
{
 "id": "D4-215",
 "dom": 4,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stockage (cliquez sur l'onglet <b>Stockage</b>).</p><p>Vous devez empêcher tout accès à storage3 depuis Internet, sans couper l'accès des VM de VNet1/Subnet1.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Stockage",
   "h": "<p>VNet1 (France Central) contient Subnet1 et Subnet2. VNet2 est appairé à VNet1. Le site local est relié à VNet1 par un VPN ; sa sortie Internet utilise l'adresse publique 203.0.113.10.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Sous-réseau</th><th>Points de terminaison de service</th></tr><tr><td>VNet1/Subnet1</td><td>Microsoft.Storage</td></tr><tr><td>VNet1/Subnet2</td><td>—</td></tr><tr><td>VNet2/Subnet1</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Accès au réseau public</th><th>Règles</th><th>Point de terminaison privé</th></tr><tr><td>storage1</td><td>Activé à partir des réseaux sélectionnés</td><td>Réseau virtuel : VNet1/Subnet1 · Plage IP : 203.0.113.0/24</td><td>—</td></tr><tr><td>storage2</td><td>Désactivé</td><td>—</td><td>PE2 dans VNet1/Subnet2</td></tr><tr><td>storage3</td><td>Activé à partir de tous les réseaux</td><td>—</td><td>—</td></tr></table></div><p>La zone DNS privée <b>privatelink.blob.core.windows.net</b> contient l'enregistrement A de PE2. Elle est liée à <b>VNet1 uniquement</b>. Tous les réseaux virtuels utilisent le DNS fourni par Azure.</p>"
  }
 ],
 "opts": [
  "Passer l'accès au réseau public à « Activé à partir des réseaux sélectionnés »",
  "Ajouter VNet1/Subnet1 comme règle de réseau virtuel de storage3",
  "Ajouter la plage 10.0.1.0/24 aux règles de pare-feu IP de storage3",
  "Lier la zone privatelink.blob.core.windows.net à storage3"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>storage3 accepte aujourd'hui tous les réseaux. En passant à <b>« Activé à partir des réseaux sélectionnés »</b>, tout est refusé sauf les règles listées. Subnet1 a déjà le point de terminaison de service Microsoft.Storage : il suffit de l'ajouter comme <b>règle de réseau virtuel</b>.</p><ul><li>Les règles IP n'acceptent pas les plages privées (10.0.1.0/24).</li><li>Une zone DNS se lie à des réseaux virtuels, pas à un compte de stockage ; et storage3 n'a pas de point de terminaison privé.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage3"
  ],
  "title": "storage3 | Mise en réseau",
  "menu": [
   "Vue d'ensemble",
   "Clés d'accès",
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Accès au réseau public",
    "Activé à partir des réseaux sélectionnés · VNet1/Subnet1"
   ]
  ]
 },
 "keep": "« Réseaux sélectionnés » = refus par défaut + règles de VNet (points de terminaison de service) et règles IP publiques."
},
{
 "id": "D4-216",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Zones (cliquez sur l'onglet <b>Zones</b>).</p><p>La zone de disponibilité 1 de France Central subit une panne complète.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Zones",
   "h": "<p>Toutes les ressources sont en France Central, région qui a trois zones de disponibilité.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Zone</th></tr><tr><td>VM1</td><td>1</td></tr><tr><td>VM2</td><td>2</td></tr><tr><td>VM3</td><td>1</td></tr><tr><td>VM4</td><td>3</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Adresse IP publique</th><th>SKU</th><th>Zone</th></tr><tr><td>PIP1</td><td>Standard</td><td>Redondante interzone</td></tr><tr><td>PIP2</td><td>Standard</td><td>Zone 1</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Équilibreur</th><th>SKU</th><th>Adresse frontale</th><th>Pool principal</th><th>Sonde</th></tr><tr><td>LB1</td><td>Standard</td><td>PIP1</td><td>VM1, VM2, VM3</td><td>TCP 443</td></tr><tr><td>LB2</td><td>Standard</td><td>PIP2</td><td>VM2, VM4</td><td>TCP 443</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "LB1 continue de répondre aux clients sur PIP1.",
   "a": 0
  },
  {
   "l": "LB2 continue de répondre aux clients sur PIP2.",
   "a": 1
  },
  {
   "l": "Pendant la panne, VM2 est la seule VM qui reçoit le trafic de LB1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>LB1 : Oui.</b> PIP1 est <b>redondante interzone</b> : l'adresse frontale survit à la perte d'une zone. La sonde retire VM1 et VM3 (zone 1) ; VM2 (zone 2) reste saine.</li><li><b>LB2 : Non.</b> PIP2 est <b>zonale (zone 1)</b> : l'adresse frontale tombe avec sa zone, même si VM2 et VM4 sont saines dans d'autres zones.</li><li><b>VM2 seule : Oui.</b> C'est la seule VM du pool de LB1 hors de la zone 1.</li></ul>",
 "portal": {
  "path": [
   "Adresses IP publiques",
   "PIP2"
  ],
  "title": "PIP2 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Propriétés"
  ],
  "rows": [
   [
    "SKU",
    "Standard"
   ],
   [
    "*Zone de disponibilité",
    "1 (non modifiable)"
   ]
  ]
 },
 "keep": "Frontal zonal = tombe avec sa zone. Frontal redondant interzone = survit."
},
{
 "id": "D4-217",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Zones (cliquez sur l'onglet <b>Zones</b>).</p><p>LB2 doit survivre à la panne d'une zone, en gardant son pool principal actuel.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Zones",
   "h": "<p>Toutes les ressources sont en France Central, région qui a trois zones de disponibilité.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Zone</th></tr><tr><td>VM1</td><td>1</td></tr><tr><td>VM2</td><td>2</td></tr><tr><td>VM3</td><td>1</td></tr><tr><td>VM4</td><td>3</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Adresse IP publique</th><th>SKU</th><th>Zone</th></tr><tr><td>PIP1</td><td>Standard</td><td>Redondante interzone</td></tr><tr><td>PIP2</td><td>Standard</td><td>Zone 1</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Équilibreur</th><th>SKU</th><th>Adresse frontale</th><th>Pool principal</th><th>Sonde</th></tr><tr><td>LB1</td><td>Standard</td><td>PIP1</td><td>VM1, VM2, VM3</td><td>TCP 443</td></tr><tr><td>LB2</td><td>Standard</td><td>PIP2</td><td>VM2, VM4</td><td>TCP 443</td></tr></table></div>"
  }
 ],
 "opts": [
  "Modifier la zone de PIP2 pour la rendre redondante interzone",
  "Créer une IP redondante interzone et en faire le frontal de LB2",
  "Déplacer VM4 dans la zone 1, avec VM2, puis recréer la sonde",
  "Passer LB2 au SKU interrégional et garder PIP2 comme frontal"
 ],
 "ans": 1,
 "expl": "<p>La zone d'une adresse IP publique se choisit <b>à la création</b> et ne se modifie pas ensuite. Il faut créer une nouvelle adresse Standard <b>redondante interzone</b> et la mettre en adresse frontale de LB2 (puis mettre à jour le DNS ou les partenaires qui utilisaient PIP2).</p><ul><li>Regrouper les VM dans la zone 1 aggraverait le risque.</li><li>Un équilibreur interrégional est un autre déploiement (niveau global, devant des équilibreurs régionaux) ; il ne rend pas PIP2 redondante.</li></ul>",
 "portal": {
  "path": [
   "Adresses IP publiques",
   "PIP2"
  ],
  "title": "PIP2 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Propriétés"
  ],
  "rows": [
   [
    "SKU",
    "Standard"
   ],
   [
    "*Zone de disponibilité",
    "1 (non modifiable)"
   ]
  ]
 },
 "keep": "La zone d'une IP publique est figée à la création : on en crée une autre."
},
{
 "id": "D4-218",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document DNS (cliquez sur l'onglet <b>DNS</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "DNS",
   "h": "<p>VNet1, VNet2 et VNet3 utilisent le DNS fourni par Azure. VNet3 est appairé à VNet1. VM1 (dans VNet1) a été créée après les liens ci-dessous.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Zone DNS privée</th><th>Lien</th><th>Réseau virtuel</th><th>Inscription automatique</th></tr><tr><td>contoso.internal</td><td>link-1</td><td>VNet1</td><td>Activée</td></tr><tr><td>contoso.internal</td><td>link-2</td><td>VNet2</td><td>Désactivée</td></tr><tr><td>fabrikam.internal</td><td>link-3</td><td>VNet2</td><td>Désactivée</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Une VM créée dans VNet2 sera inscrite automatiquement dans contoso.internal.",
   "a": 1
  },
  {
   "l": "Une VM de VNet2 peut résoudre vm1.contoso.internal.",
   "a": 0
  },
  {
   "l": "Une VM de VNet3 peut résoudre vm1.contoso.internal.",
   "a": 1
  },
  {
   "l": "Vous pouvez lier VNet1 à fabrikam.internal avec l'inscription automatique activée.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Inscription depuis VNet2 : Non.</b> link-2 n'a pas l'inscription automatique : VNet2 peut résoudre la zone, mais ses VM n'y sont pas inscrites.</li><li><b>Résolution depuis VNet2 : Oui.</b> link-2 suffit pour la résolution, et vm1 a été inscrite par link-1.</li><li><b>Résolution depuis VNet3 : Non.</b> Être appairé à VNet1 ne donne pas accès à ses zones privées : il faut un lien de VNet3 vers la zone.</li><li><b>VNet1 → fabrikam.internal avec inscription : Non.</b> Un réseau virtuel ne peut avoir l'inscription automatique activée que vers <b>une seule</b> zone privée ; VNet1 l'a déjà vers contoso.internal. Un lien de résolution seule reste possible.</li></ul>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "contoso.internal"
  ],
  "title": "contoso.internal | Liens de réseau virtuel",
  "menu": [
   "Vue d'ensemble",
   "Jeux d'enregistrements",
   "*Liens de réseau virtuel"
  ],
  "rows": [
   [
    "link-1 · VNet1",
    "Inscription automatique : activée"
   ],
   [
    "link-2 · VNet2",
    "Inscription automatique : désactivée"
   ]
  ]
 },
 "keep": "Un VNet : inscription auto vers une seule zone. Appairage ≠ accès aux zones privées : il faut un lien."
},
{
 "id": "D4-219",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document DNS (cliquez sur l'onglet <b>DNS</b>).</p><p>Les nouvelles VM de VNet2 doivent être inscrites automatiquement dans contoso.internal. La solution doit limiter l'effort d'administration.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "DNS",
   "h": "<p>VNet1, VNet2 et VNet3 utilisent le DNS fourni par Azure. VNet3 est appairé à VNet1. VM1 (dans VNet1) a été créée après les liens ci-dessous.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Zone DNS privée</th><th>Lien</th><th>Réseau virtuel</th><th>Inscription automatique</th></tr><tr><td>contoso.internal</td><td>link-1</td><td>VNet1</td><td>Activée</td></tr><tr><td>contoso.internal</td><td>link-2</td><td>VNet2</td><td>Désactivée</td></tr><tr><td>fabrikam.internal</td><td>link-3</td><td>VNet2</td><td>Désactivée</td></tr></table></div>"
  }
 ],
 "opts": [
  "Activer l'inscription automatique sur link-2",
  "Supprimer link-3, puis activer l'inscription sur link-2",
  "Appairer VNet2 avec VNet1 pour utiliser link-1",
  "Créer pour chaque VM un enregistrement A dans la zone"
 ],
 "ans": 0,
 "expl": "<p>VNet2 n'a l'inscription automatique activée vers <b>aucune</b> zone (link-2 et link-3 sont en résolution seule). On peut donc l'activer sur <b>link-2</b>, en modifiant le lien existant.</p><ul><li>link-3 ne gêne pas : la limite porte sur les liens <b>avec inscription</b>, et link-3 n'en a pas.</li><li>Un appairage ne donne pas l'inscription par le lien d'un autre réseau.</li><li>Des enregistrements manuels demanderaient un effort à chaque création ou suppression de VM.</li></ul>",
 "portal": {
  "path": [
   "Zones DNS privées",
   "contoso.internal"
  ],
  "title": "contoso.internal | Liens de réseau virtuel",
  "menu": [
   "Vue d'ensemble",
   "Jeux d'enregistrements",
   "*Liens de réseau virtuel"
  ],
  "rows": [
   [
    "link-1 · VNet1",
    "Inscription automatique : activée"
   ],
   [
    "*link-2 · VNet2",
    "Inscription automatique : désactivée"
   ]
  ]
 },
 "keep": "La limite « une seule zone » ne vise que les liens avec inscription automatique."
},
{
 "id": "D4-220",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document VPN (cliquez sur l'onglet <b>VPN</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "VPN",
   "h": "<p>VNet1 contient la passerelle <b>VPNGW1</b> : SKU VpnGw1, type basé sur les routes, mode actif-passif, BGP désactivé.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Passerelle de réseau local</th><th>Adresse IP publique</th><th>Préfixes d'adresses</th></tr><tr><td>LNG-Paris</td><td>198.51.100.10</td><td>192.168.10.0/24</td></tr><tr><td>LNG-Lyon</td><td>203.0.113.20</td><td>192.168.20.0/24</td></tr><tr><td>LNG-Nice</td><td>198.51.100.30</td><td>192.168.10.0/24</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Connexion</th><th>Passerelle de réseau local</th><th>État</th></tr><tr><td>Conn-Paris</td><td>LNG-Paris</td><td>Connecté</td></tr><tr><td>Conn-Lyon</td><td>LNG-Lyon</td><td>Connecté</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Si le site de Lyon ajoute le réseau 192.168.21.0/24, les VM de VNet1 pourront le joindre sans modification dans Azure.",
   "a": 1
  },
  {
   "l": "Vous pouvez créer une connexion de VPNGW1 vers LNG-Nice sans modifier les passerelles de réseau local.",
   "a": 1
  },
  {
   "l": "Vous pouvez passer VPNGW1 en type basé sur les stratégies sans la supprimer.",
   "a": 1
  },
  {
   "l": "VPNGW1 peut accepter en plus des connexions point à site.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Nouveau réseau à Lyon : Non.</b> Sans BGP, Azure ne connaît que les préfixes listés dans LNG-Lyon : il faut y ajouter 192.168.21.0/24.</li><li><b>Connexion vers LNG-Nice : Non.</b> LNG-Nice annonce 192.168.10.0/24, déjà utilisé par LNG-Paris. Les préfixes des sites d'une même passerelle ne doivent pas se chevaucher : Azure ne saurait pas vers quel tunnel envoyer le trafic.</li><li><b>Changer le type : Non.</b> Le type de VPN (routes ou stratégies) ne se modifie pas : il faut supprimer et recréer la passerelle. Et le type basé sur les stratégies ne gère qu'un tunnel site à site.</li><li><b>Point à site : Oui.</b> Une passerelle basée sur les routes en SKU VpnGw1 prend en charge le point à site en plus des connexions site à site.</li></ul>",
 "portal": {
  "path": [
   "Passerelles de réseau local",
   "LNG-Lyon"
  ],
  "title": "LNG-Lyon | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Connexions"
  ],
  "rows": [
   [
    "Adresse IP",
    "203.0.113.20"
   ],
   [
    "*Espace d'adressage",
    "192.168.20.0/24, 192.168.21.0/24"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Sans BGP : préfixes à la main dans la passerelle de réseau local. Type de VPN non modifiable."
},
{
 "id": "D4-221",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document VPN (cliquez sur l'onglet <b>VPN</b>).</p><p>Les réseaux ajoutés au site de Lyon doivent être appris automatiquement par Azure, et inversement.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "VPN",
   "h": "<p>VNet1 contient la passerelle <b>VPNGW1</b> : SKU VpnGw1, type basé sur les routes, mode actif-passif, BGP désactivé.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Passerelle de réseau local</th><th>Adresse IP publique</th><th>Préfixes d'adresses</th></tr><tr><td>LNG-Paris</td><td>198.51.100.10</td><td>192.168.10.0/24</td></tr><tr><td>LNG-Lyon</td><td>203.0.113.20</td><td>192.168.20.0/24</td></tr><tr><td>LNG-Nice</td><td>198.51.100.30</td><td>192.168.10.0/24</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Connexion</th><th>Passerelle de réseau local</th><th>État</th></tr><tr><td>Conn-Paris</td><td>LNG-Paris</td><td>Connecté</td></tr><tr><td>Conn-Lyon</td><td>LNG-Lyon</td><td>Connecté</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Sur VPNGW1 :",
   "o": [
    "Passer en mode actif-actif",
    "Activer BGP avec un ASN",
    "Passer au SKU VpnGw2",
    "Changer le type en stratégies"
   ],
   "a": 1
  },
  {
   "l": "Sur LNG-Lyon :",
   "o": [
    "Ajouter 0.0.0.0/0 aux préfixes",
    "Changer l'adresse IP publique",
    "Renseigner l'ASN et l'IP d'homologue BGP",
    "Supprimer tous les préfixes"
   ],
   "a": 2
  },
  {
   "l": "Sur Conn-Lyon :",
   "o": [
    "Activer BGP",
    "Passer à IKEv1",
    "Activer les sélecteurs de trafic",
    "Changer la clé partagée"
   ],
   "a": 0
  }
 ],
 "expl": "<p>Le routage dynamique se configure à trois endroits :</p><ul><li><b>VPNGW1 :</b> activer BGP et lui donner un <b>ASN</b> (le SKU VpnGw1 le permet, contrairement au SKU De base).</li><li><b>LNG-Lyon :</b> indiquer l'<b>ASN</b> du périphérique de Lyon et son <b>adresse d'homologue BGP</b>. Les préfixes peuvent alors se réduire à l'adresse de cet homologue.</li><li><b>Conn-Lyon :</b> cocher <b>Activer BGP</b> sur la connexion.</li></ul><p>Le mode actif-actif sert à la haute disponibilité, pas à l'apprentissage des routes.</p>",
 "portal": {
  "path": [
   "Passerelles de réseau virtuel",
   "VPNGW1"
  ],
  "title": "VPNGW1 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration",
   "Connexions",
   "Configuration de point à site"
  ],
  "rows": [
   [
    "Mode actif-actif",
    "Désactivé"
   ],
   [
    "*Configurer le BGP",
    "Activé · ASN 65515"
   ]
  ]
 },
 "keep": "BGP = passerelle (ASN) + passerelle de réseau local (ASN, IP d'homologue) + connexion (case BGP)."
},
{
 "id": "D4-222",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Réseaux (cliquez sur l'onglet <b>Réseaux</b>).</p><p>Vous ajoutez l'espace d'adressage 10.4.0.0/16 à VNet-A. Les VM de VNet-Hub ne joignent pas les nouvelles ressources de 10.4.0.0/16.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Réseaux",
   "h": "<p><b>Réseaux virtuels</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Région</th><th>Espace d'adressage</th><th>Abonnement</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contient la passerelle VPN <b>VPNGW1</b> (basée sur les routes), reliée au site local 192.168.0.0/16 par une connexion site à site avec <b>BGP activé</b>. VNet-Hub contient aussi l'appliance virtuelle <b>NVA1</b> (10.0.1.4).</p><p><b>Appairages</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Appairage</th><th>De → vers</th><th>Autoriser le trafic transféré</th><th>Transit de passerelle</th><th>Utiliser la passerelle distante</th><th>État</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>Non</td><td>Non</td><td>Oui</td><td>Connecté</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>Non</td><td>Oui</td><td>Non</td><td>Connecté</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>Non</td><td>Non</td><td>Non</td><td>Connecté</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>Non</td><td>Oui</td><td>Non</td><td>Lancé</td></tr></table></div>"
  }
 ],
 "opts": [
  "Synchroniser l'appairage Hub-A depuis VNet-Hub",
  "Supprimer A-Hub, puis le recréer avec la passerelle distante",
  "Ajouter dans VNet-Hub une UDR 10.4.0.0/16 → Réseau virtuel",
  "Ajouter 10.4.0.0/16 aux préfixes du site local sur VPNGW1"
 ],
 "ans": 0,
 "expl": "<p>Après un changement d'espace d'adressage sur un réseau appairé, l'appairage du réseau <b>distant</b> passe à « Synchronisation requise ». Il faut <b>synchroniser</b> Hub-A (bouton Synchroniser, ou Sync-AzVirtualNetworkPeering) pour que VNet-Hub apprenne 10.4.0.0/16.</p><ul><li>Supprimer et recréer n'est plus nécessaire et couperait le trafic.</li><li>Le type Réseau virtuel ne livre qu'aux espaces du réseau lui-même : 10.4.0.0/16 n'est pas dans VNet-Hub.</li><li>Les préfixes du site local concernent les réseaux locaux, pas un réseau Azure.</li></ul>",
 "portal": {
  "path": [
   "Réseaux virtuels",
   "VNet-Hub"
  ],
  "title": "VNet-Hub | Peerings",
  "menu": [
   "Vue d'ensemble",
   "Espace d'adressage",
   "*Peerings"
  ],
  "rows": [
   [
    "*Hub-A",
    "Connecté · transit de passerelle"
   ],
   [
    "Hub-B",
    "Connecté · mondial · transit de passerelle"
   ],
   [
    "Hub-C",
    "Lancé (pas d'appairage retour)"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Nouvel espace sur un VNet appairé → « Synchronisation requise » côté distant → Synchroniser."
}
);
