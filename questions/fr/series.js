/* Séries de questions Oui/Non (même scénario, pas de retour en arrière) */
AZ.series.push(
{
 "id": "S001",
 "dom": 4,
 "title": "NSG et accès HTTPS à VM1",
 "scenario": "<p>Vous disposez d'un réseau virtuel nommé VNet1 qui contient un sous-réseau nommé Subnet1. Subnet1 n'a <b>aucun</b> groupe de sécurité réseau associé.</p><p>Subnet1 contient une machine virtuelle nommée VM1 qui exécute Windows Server et héberge un site web. VM1 possède une adresse IP publique de SKU Standard. Un groupe de sécurité réseau nommé NSG1, qui ne contient que les règles par défaut, est associé à l'interface réseau de VM1.</p><p>Des utilisateurs sur Internet doivent accéder au site web de VM1 en HTTPS (TCP 443). Actuellement, la connexion échoue.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous ajoutez à NSG1 une règle de sécurité de trafic entrant qui autorise TCP 443 depuis la source Internet, avec une priorité de 100.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> Subnet1 n'a pas de NSG : seul NSG1, sur l'interface de VM1, filtre le trafic. Ses règles par défaut se terminent par <b>DenyAllInBound</b> (65500), qui refuse ce qui vient d'Internet. Une règle « Autoriser TCP 443 depuis Internet » en priorité <b>100</b> est évaluée avant et laisse passer le HTTPS.</p><p>L'adresse publique Standard est fermée par défaut : c'est bien un NSG qui doit ouvrir le port.</p>",
   "portal": {
    "path": [
     "Groupes de sécurité réseau",
     "NSG1"
    ],
    "title": "NSG1 | Règles de sécurité de trafic entrant",
    "menu": [
     "*Règles de sécurité de trafic entrant"
    ],
    "rows": [
     [
      "*100 · Allow-HTTPS",
      "443 · Internet · Autoriser"
     ],
     [
      "65500 · DenyAllInBound",
      "Any · Refuser"
     ]
    ],
    "btn": "+ Ajouter"
   },
   "keep": "Ouvrir un port entrant = règle entrante avec un numéro plus petit que le refus."
  },
  {
   "solution": "<p><b>Solution :</b> vous ajoutez à NSG1 une règle de sécurité de trafic <b>sortant</b> qui autorise TCP 443 vers la destination Internet, avec une priorité de 100.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Le blocage est en <b>entrée</b> : les requêtes des internautes n'atteignent pas VM1. Une règle sortante ne change rien.</p><p>De plus, les NSG sont <b>avec état</b> : quand une connexion entrante est autorisée, ses réponses repartent automatiquement, sans règle sortante.</p>",
   "portal": {
    "path": [
     "Groupes de sécurité réseau",
     "NSG1"
    ],
    "title": "NSG1 | Règles de sécurité de trafic sortant",
    "menu": [
     "Règles de sécurité de trafic entrant",
     "*Règles de sécurité de trafic sortant"
    ],
    "rows": [
     [
      "*Sens du blocage",
      "Entrant"
     ]
    ]
   },
   "keep": "NSG avec état : la réponse d'un flux autorisé repart seule."
  },
  {
   "solution": "<p><b>Solution :</b> vous créez un groupe de sécurité réseau nommé NSG2, qui autorise en entrée TCP 443 depuis Internet, et vous l'associez à Subnet1.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Quand un sous-réseau <b>et</b> une interface ont chacun un NSG, le trafic entrant doit être autorisé par <b>les deux</b> (d'abord celui du sous-réseau, puis celui de l'interface). NSG2 laisse passer, mais NSG1 refuse toujours avec DenyAllInBound.</p>",
   "portal": {
    "path": [
     "Interfaces réseau",
     "vm1-nic"
    ],
    "title": "vm1-nic | Règles de sécurité effectives",
    "menu": [
     "*Règles de sécurité effectives"
    ],
    "rows": [
     [
      "NSG2 (Subnet1)",
      "443 · Autoriser"
     ],
     [
      "*NSG1 (interface)",
      "DenyAllInBound · Refuser"
     ]
    ]
   },
   "keep": "Entrant : NSG du sous-réseau puis de l'interface ; il faut l'accord des deux."
  }
 ]
}
);
