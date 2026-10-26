/* Domaine 4 : Réseau virtuel */
AZ.questions.push(
{
 "id": "D4-001",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous créez dans VNet1 un sous-réseau nommé Subnet3 avec la plage 10.0.3.0/26.</p><p>Combien d'adresses IP peuvent être attribuées à des machines virtuelles dans Subnet3 ?</p>",
 "opts": [
  "64",
  "62",
  "59",
  "251"
 ],
 "ans": 2,
 "expl": "/26 = 64 adresses. Azure en réserve 5 par sous-réseau (la première, les trois suivantes et la dernière) : 64 − 5 = <b>59</b>."
},
{
 "id": "D4-002",
 "dom": 4,
 "type": "hot",
 "docs": [
  {
   "t": "NSG1",
   "h": "<p>Règles de sécurité de trafic entrant de NSG1 (associé au sous-réseau de VM1, adresse 10.0.1.4) :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Priorité</th><th>Nom</th><th>Port</th><th>Protocole</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>100</td><td>Rule1</td><td>3389</td><td>TCP</td><td>Internet</td><td>Tout</td><td>Refuser</td></tr><tr><td>200</td><td>Rule2</td><td>3389</td><td>TCP</td><td>VirtualNetwork</td><td>Tout</td><td>Autoriser</td></tr><tr><td>300</td><td>Rule3</td><td>80,443</td><td>TCP</td><td>Tout</td><td>Tout</td><td>Autoriser</td></tr><tr><td>65000</td><td>AllowVnetInBound</td><td>Tout</td><td>Tout</td><td>VirtualNetwork</td><td>VirtualNetwork</td><td>Autoriser</td></tr><tr><td>65001</td><td>AllowAzureLoadBalancerInBound</td><td>Tout</td><td>Tout</td><td>AzureLoadBalancer</td><td>Tout</td><td>Autoriser</td></tr><tr><td>65500</td><td>DenyAllInBound</td><td>Tout</td><td>Tout</td><td>Tout</td><td>Tout</td><td>Refuser</td></tr></table></div>"
  }
 ],
 "stem": "<p>Vous disposez d'une machine virtuelle nommée VM1. Le groupe de sécurité réseau NSG1 est configuré comme indiqué dans le document NSG1 (cliquez sur l'onglet <b>NSG1</b>).</p><p>Quel est le résultat de chaque connexion vers VM1 ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "Lecture par priorité croissante, la première règle qui <b>correspond</b> décide. RDP Internet : Rule1 → refusé. RDP depuis VM2 : Rule1 ne vise que la source Internet ; Rule2 (VirtualNetwork) → autorisé. HTTP Internet : Rule3 → autorisé."
},
{
 "id": "D4-003",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1 est appairé à VNet2. VNet2 est appairé à VNet3. Les espaces d'adressage ne se chevauchent pas. VM1 (VNet1) ne parvient pas à joindre VM3 (VNet3).</p><p>Vous devez permettre la communication entre VM1 et VM3. La solution doit limiter l'effort d'administration.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Activer le transit de passerelle sur les peerings",
  "Ajouter une route vers VNet3 dans une table de routage de VNet1",
  "Créer un peering entre VNet1 et VNet3",
  "Déplacer VM3 dans VNet2"
 ],
 "ans": 2,
 "expl": "Le peering n'est <b>pas transitif</b> : VNet2 ne relaie pas. Le plus simple est un <b>peering direct</b> VNet1 ↔ VNet3. Le transit de passerelle ne concerne que la passerelle VPN."
},
{
 "id": "D4-004",
 "dom": 4,
 "type": "screen",
 "stem": "<p>Vous disposez de deux réseaux virtuels : VNet1, qui contient une passerelle VPN reliée au site local, et VNet2, qui n'a pas de passerelle.</p><p>Vous créez un peering entre VNet1 et VNet2. Les machines virtuelles de VNet2 doivent joindre le site local en utilisant la passerelle VPN de VNet1.</p><p>Comment devez-vous configurer le peering ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "Le transit de passerelle se règle des deux côtés. Côté <b>VNet1</b>, qui possède la passerelle : <b>autoriser sa passerelle à transférer</b> le trafic vers VNet2 (« prêter »). Côté <b>VNet2</b>, qui n'en a pas : <b>utiliser la passerelle distante</b> de VNet1 (« emprunter »). L'accès entre les deux réseaux reste coché. Le trafic transféré n'est pas nécessaire ici (non noté)."
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
 "expl": "Vers le pare-feu : <b>Appliance virtuelle</b> (avec son adresse et le transfert IP activé sur son interface). Vers le site local : <b>Passerelle de réseau virtuel</b>. Bloquer une destination : <b>Aucun</b> (les paquets sont abandonnés)."
},
{
 "id": "D4-006",
 "dom": 4,
 "type": "single",
 "stem": "<p>Votre site local est relié à VNet1 par un VPN site à site. Les utilisateurs du site doivent accéder au compte de stockage storage1 par une adresse IP privée. L'accès public à storage1 doit être désactivé.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Un point de terminaison de service sur un sous-réseau de VNet1",
  "Une adresse IP publique Standard pour storage1",
  "Une règle de pare-feu de storage1 avec l'adresse publique du site",
  "Un point de terminaison privé pour storage1 dans VNet1"
 ],
 "ans": 3,
 "expl": "Le <b>point de terminaison privé</b> donne à storage1 une IP privée de VNet1, joignable par le VPN ; l'accès public peut être coupé (avec une zone DNS privée). Le point de terminaison de service ne profite qu'au trafic partant du sous-réseau Azure."
},
{
 "id": "D4-007",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous allez déployer Azure Bastion dans VNet1.</p><p>Quel sous-réseau devez-vous créer ?</p>",
 "opts": [
  "BastionSubnet, avec un préfixe /27",
  "GatewaySubnet, avec un préfixe /26",
  "AzureBastionSubnet, avec un préfixe /26",
  "AzureBastionSubnet, avec un préfixe /29"
 ],
 "ans": 2,
 "expl": "Nom imposé <b>AzureBastionSubnet</b>, taille <b>/26</b> minimum. GatewaySubnet est réservé aux passerelles VPN."
},
{
 "id": "D4-008",
 "dom": 4,
 "type": "single",
 "stem": "<p>Vous disposez de deux réseaux virtuels, VNet1 et VNet2, appairés. Les machines virtuelles des deux réseaux doivent être enregistrées automatiquement et se joindre par leur nom dans le domaine contoso.local.</p><p>La solution doit limiter l'effort d'administration. Que devez-vous utiliser ?</p>",
 "opts": [
  "Une zone DNS publique contoso.local",
  "Une zone DNS privée contoso.local avec un lien de réseau virtuel par VNet, inscription automatique activée",
  "Un serveur DNS sur une machine virtuelle dans VNet1",
  "La résolution de noms fournie par Azure"
 ],
 "ans": 1,
 "expl": "Zone <b>privée</b> + <b>lien de réseau virtuel</b> vers chaque VNet + <b>inscription automatique</b>. La résolution fournie par Azure ne fonctionne qu'à l'intérieur d'un VNet ; un serveur DNS sur VM demande de l'administration."
},
{
 "id": "D4-009",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Un équilibreur de charge public Standard nommé LB1 répartit le trafic HTTPS vers VM1 et VM2. Le site répond correctement en local sur chaque VM, mais LB1 n'envoie plus aucun trafic aux deux VM.</p><p>Quelles sont les deux causes possibles ? Chaque réponse correcte présente une solution complète.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "opts": [
  "La sonde d'intégrité interroge un port ou un chemin incorrect",
  "L'adresse IP publique de LB1 est statique",
  "Un NSG bloque le trafic de la sonde ou le port 443 vers les VM",
  "Aucune zone DNS privée n'est liée à VNet1"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "LB1 n'envoie du trafic qu'aux VM que sa <b>sonde</b> juge saines : mauvais port ou chemin = toutes les VM retirées. En Standard, tout est fermé par défaut : un <b>NSG</b> doit autoriser le port de l'application et la sonde (étiquette AzureLoadBalancer). Une IP statique est normale ; le DNS privé n'intervient pas."
}
);
