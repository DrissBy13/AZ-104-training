/* Séries de questions Oui/Non (lot 2 : S002 à S010) */
AZ.series.push(
{
 "id": "S002",
 "dom": 1,
 "title": "Gestion des VM de RG1",
 "scenario": "<p>Votre abonnement Azure contient le groupe de ressources RG1, qui contient des machines virtuelles, des réseaux virtuels et des comptes de stockage.</p><p>User1 doit pouvoir créer, démarrer, arrêter et supprimer les machines virtuelles de RG1. User1 ne doit pas pouvoir modifier les réseaux virtuels ni les comptes de stockage. La solution doit respecter le principe du privilège minimum.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous attribuez à User1 le rôle Contributeur de machines virtuelles sur RG1.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> <b>Contributeur de machines virtuelles</b> permet de créer, démarrer, arrêter et supprimer des VM. Il ne permet pas de modifier les réseaux virtuels ni les comptes de stockage : il peut seulement joindre une interface réseau à un sous-réseau existant. Il ne gère pas non plus les accès. Attribué sur <b>RG1</b>, il respecte le privilège minimum.</p>",
   "portal": {
    "path": [
     "Groupes de ressources",
     "RG1"
    ],
    "title": "Ajouter une attribution de rôle",
    "rows": [
     [
      "*Rôle",
      "Contributeur de machines virtuelles"
     ],
     [
      "Membre",
      "User1"
     ],
     [
      "Étendue",
      "RG1"
     ]
    ],
    "btn": "Vérifier + attribuer"
   },
   "keep": "Gérer des VM sans toucher au réseau ni au stockage = Contributeur de machines virtuelles."
  },
  {
   "solution": "<p><b>Solution :</b> vous attribuez à User1 le rôle Contributeur sur RG1.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> <b>Contributeur</b> donne le droit de gérer <b>toutes</b> les ressources de RG1, y compris les réseaux virtuels et les comptes de stockage. C'est trop large.</p>",
   "portal": {
    "path": [
     "Groupes de ressources",
     "RG1"
    ],
    "title": "Ajouter une attribution de rôle",
    "rows": [
     [
      "*Contributeur",
      "Toutes les ressources de RG1"
     ]
    ]
   },
   "keep": "Contributeur = tout gérer, sauf les accès."
  },
  {
   "solution": "<p><b>Solution :</b> vous attribuez à User1 le rôle Contributeur de machines virtuelles sur l'abonnement.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Le rôle est le bon, mais l'<b>étendue</b> est trop large : sur l'abonnement, User1 gérerait les VM de tous les groupes de ressources, pas seulement RG1.</p>",
   "portal": {
    "path": [
     "Abonnements",
     "Sub1"
    ],
    "title": "Attribution de rôle",
    "rows": [
     [
      "Rôle",
      "Contributeur de machines virtuelles"
     ],
     [
      "*Étendue",
      "Abonnement (trop large)"
     ]
    ]
   },
   "keep": "Privilège minimum = bon rôle ET plus petite étendue utile."
  },
  {
   "solution": "<p><b>Solution :</b> vous attribuez à User1 le rôle Administrateur général de Microsoft Entra ID.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Administrateur général est un rôle <b>Microsoft Entra</b> (l'annuaire), pas un rôle Azure RBAC : il ne donne aucun droit sur les ressources Azure par défaut. Et c'est le rôle le plus privilégié du locataire.</p>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Rôles et administrateurs"
    ],
    "title": "Administrateur général",
    "rows": [
     [
      "*Portée",
      "Annuaire, pas les ressources Azure"
     ]
    ]
   },
   "keep": "Rôles Entra = annuaire ; rôles Azure RBAC = ressources."
  }
 ]
},
{
 "id": "S003",
 "dom": 2,
 "title": "Récupération des blobs supprimés",
 "scenario": "<p>Vous disposez d'un compte de stockage universel v2 nommé storage1 qui contient le conteneur docs.</p><p>Les utilisateurs doivent pouvoir supprimer des blobs de docs. Vous devez pouvoir restaurer tout blob supprimé au cours des 14 derniers jours.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous activez la suppression réversible pour les objets blob, avec une rétention de 14 jours.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> La <b>suppression réversible des objets blob</b> conserve chaque blob supprimé (et ses instantanés) pendant la durée choisie. On le récupère avec « Annuler la suppression ». Les utilisateurs peuvent toujours supprimer.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "storage1"
    ],
    "title": "storage1 | Protection des données",
    "menu": [
     "*Protection des données"
    ],
    "rows": [
     [
      "*Suppression réversible des objets blob",
      "Activée · 14 jours"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Récupérer un blob supprimé = suppression réversible des blobs."
  },
  {
   "solution": "<p><b>Solution :</b> vous activez la suppression réversible pour les conteneurs, avec une rétention de 14 jours.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> La suppression réversible des <b>conteneurs</b> protège seulement contre la suppression d'un conteneur entier. Un blob supprimé dans un conteneur qui existe toujours n'est pas récupérable.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "storage1"
    ],
    "title": "Protection des données",
    "rows": [
     [
      "*Conteneurs",
      "Conteneur entier seulement"
     ],
     [
      "Objets blob",
      "Désactivée"
     ]
    ]
   },
   "keep": "Suppression réversible des conteneurs ≠ des blobs."
  },
  {
   "solution": "<p><b>Solution :</b> vous configurez sur docs une stratégie de rétention temporelle de 14 jours.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Une stratégie de <b>rétention temporelle</b> rend les blobs <b>immuables</b> (WORM) : personne ne peut les modifier ni les supprimer pendant 14 jours. Les utilisateurs doivent pouvoir supprimer : c'est contraire à l'exigence.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "storage1",
     "docs"
    ],
    "title": "Stratégie d'accès",
    "rows": [
     [
      "*Rétention temporelle",
      "Suppression interdite"
     ]
    ]
   },
   "keep": "Immuabilité = impossible de supprimer."
  },
  {
   "solution": "<p><b>Solution :</b> vous créez une règle de gestion du cycle de vie qui déplace les blobs vers le niveau Froid après 14 jours.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> La <b>gestion du cycle de vie</b> change le niveau d'accès ou supprime des blobs selon leur âge. Elle n'a aucun moyen de récupérer un blob déjà supprimé.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "storage1"
    ],
    "title": "Gestion du cycle de vie",
    "rows": [
     [
      "*Action",
      "Déplacer vers Froid · 14 jours"
     ]
    ]
   },
   "keep": "Cycle de vie = coûts, pas récupération."
  }
 ]
},
{
 "id": "S004",
 "dom": 3,
 "title": "Mise à l'échelle de WebApp1",
 "scenario": "<p>Vous disposez de l'application web WebApp1, hébergée dans un plan App Service.</p><p>WebApp1 doit passer automatiquement de 2 à 5 instances quand le CPU moyen dépasse 70 %, et revenir à 2 instances quand la charge baisse. La solution doit réduire les coûts au maximum.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous utilisez un plan Standard S1 et configurez une mise à l'échelle automatique personnalisée (minimum 2, maximum 5) avec une règle d'augmentation et une règle de diminution basées sur le CPU.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> La mise à l'échelle automatique d'App Service existe à partir du niveau <b>Standard</b>, le moins cher qui la propose. La règle d'<b>augmentation</b> (CPU > 70 %) ajoute des instances, la règle de <b>diminution</b> les retire quand la charge baisse, entre 2 et 5.</p>",
   "portal": {
    "path": [
     "Plans App Service",
     "Plan1"
    ],
    "title": "Plan1 | Montée en charge (scale-out)",
    "menu": [
     "*Montée en charge (scale-out)"
    ],
    "rows": [
     [
      "*Mise à l'échelle personnalisée",
      "Min 2 · Max 5"
     ],
     [
      "Règles",
      "CPU > 70 % : +1 · CPU < 30 % : −1"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Mise à l'échelle auto App Service = Standard ou plus, avec règles de montée ET de descente."
  },
  {
   "solution": "<p><b>Solution :</b> vous utilisez un plan De base B1 et réglez manuellement le nombre d'instances à 5.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Le niveau <b>De base</b> ne permet qu'une mise à l'échelle manuelle. Et 5 instances en permanence coûtent plus cher que 2 instances la plupart du temps.</p>",
   "portal": {
    "path": [
     "Plans App Service",
     "Plan1"
    ],
    "title": "Montée en charge (scale-out)",
    "rows": [
     [
      "*De base",
      "Manuelle uniquement"
     ]
    ]
   },
   "keep": "De base = pas de mise à l'échelle automatique."
  },
  {
   "solution": "<p><b>Solution :</b> vous utilisez un plan Premium v3 P3v3 avec une seule instance.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Passer à un plus gros plan est une mise à l'échelle <b>verticale</b> (scale-up). Le nombre d'instances reste à 1, et P3v3 est bien plus cher.</p>",
   "portal": {
    "path": [
     "Plans App Service",
     "Plan1"
    ],
    "title": "Monter en puissance (scale-up)",
    "rows": [
     [
      "*P3v3",
      "Plus puissant, pas plus d'instances"
     ]
    ]
   },
   "keep": "Scale-up = plus gros ; scale-out = plus d'instances."
  }
 ]
},
{
 "id": "S005",
 "dom": 4,
 "title": "Connectivité entre spokes",
 "scenario": "<p>Vous disposez de trois réseaux virtuels : VNet-Hub, VNet1 et VNet3. VNet1 et VNet3 sont appairés uniquement à VNet-Hub. Aucune appliance virtuelle ni table de routage n'existe. Les espaces d'adressage ne se chevauchent pas.</p><p>VM1 (VNet1) doit communiquer avec VM3 (VNet3).</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous créez un appairage entre VNet1 et VNet3.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> L'appairage n'est pas transitif, mais un <b>appairage direct</b> entre VNet1 et VNet3 crée le chemin manquant. Les espaces ne se chevauchent pas, donc c'est possible.</p>",
   "portal": {
    "path": [
     "Réseaux virtuels",
     "VNet1"
    ],
    "title": "Ajouter un peering",
    "rows": [
     [
      "*Réseau distant",
      "VNet3"
     ]
    ],
    "btn": "Ajouter"
   },
   "keep": "Spoke ↔ spoke = appairage direct (ou routage par le hub)."
  },
  {
   "solution": "<p><b>Solution :</b> vous activez « Autoriser le transit de passerelle » sur les appairages de VNet-Hub.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> <b>Autoriser le transit de passerelle</b> sert à partager une passerelle VPN ou ExpressRoute du hub avec les spokes. Il ne rend pas l'appairage transitif entre spokes.</p>",
   "portal": {
    "path": [
     "Réseaux virtuels",
     "VNet-Hub"
    ],
    "title": "Peerings",
    "rows": [
     [
      "*Transit de passerelle",
      "Concerne la passerelle VPN/ER"
     ]
    ]
   },
   "keep": "Transit de passerelle ≠ transitivité."
  },
  {
   "solution": "<p><b>Solution :</b> vous ajoutez à un NSG de VNet3 une règle qui autorise tout le trafic venant de VNet1.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Un NSG <b>filtre</b> le trafic, il ne crée pas de <b>route</b>. Sans appairage direct ni routage par le hub, aucun paquet de VNet1 n'arrive jusqu'à VNet3.</p>",
   "portal": {
    "path": [
     "Interfaces réseau",
     "vm1-nic"
    ],
    "title": "Itinéraires effectifs",
    "rows": [
     [
      "*VNet3 (10.3.0.0/16)",
      "Aucun itinéraire"
     ]
    ]
   },
   "keep": "NSG = filtrage ; routage = appairage ou UDR."
  },
  {
   "solution": "<p><b>Solution :</b> vous déployez un Pare-feu Azure dans VNet-Hub, créez dans VNet1 et VNet3 des tables de routage vers le pare-feu, activez « Autoriser le trafic transféré » et créez une règle de réseau qui autorise le trafic.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> C'est le modèle hub-and-spoke : les tables de routage des spokes envoient le trafic vers le <b>pare-feu</b> du hub, les appairages acceptent le <b>trafic transféré</b>, et une <b>règle de réseau</b> autorise le flux (le pare-feu refuse tout par défaut).</p>",
   "portal": {
    "path": [
     "Tables de routage",
     "RT-VNet1"
    ],
    "title": "Itinéraires",
    "rows": [
     [
      "*Vers VNet3",
      "Appliance virtuelle · pare-feu"
     ]
    ]
   },
   "keep": "Spoke-to-spoke filtré = UDR vers le pare-feu + trafic transféré + règle."
  }
 ]
},
{
 "id": "S006",
 "dom": 5,
 "title": "Alerte sur la suppression de VM",
 "scenario": "<p>Votre abonnement Azure contient 50 machines virtuelles.</p><p>L'équipe d'exploitation doit recevoir un e-mail chaque fois qu'une machine virtuelle est supprimée.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous créez une règle d'alerte de journal d'activité sur l'opération « Supprimer une machine virtuelle », avec un groupe d'actions qui envoie un e-mail.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> Supprimer une VM est une opération du <b>plan de contrôle</b>, enregistrée dans le <b>journal d'activité</b>. Une alerte de journal d'activité sur <code>Microsoft.Compute/virtualMachines/delete</code> et un groupe d'actions e-mail répondent au besoin, pour les 50 VM avec une seule règle.</p>",
   "portal": {
    "path": [
     "Moniteur",
     "Alertes"
    ],
    "title": "Créer une règle d'alerte",
    "rows": [
     [
      "*Signal",
      "Supprimer une machine virtuelle"
     ],
     [
      "Actions",
      "Groupe d'actions · e-mail"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "Suppression de ressource = alerte de journal d'activité."
  },
  {
   "solution": "<p><b>Solution :</b> vous créez une alerte de métrique sur la métrique Percentage CPU de chaque VM, avec un seuil de 0.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Une VM supprimée n'envoie plus de métrique : il n'y a plus rien à comparer au seuil. Les métriques mesurent des valeurs, pas des opérations de gestion.</p>",
   "portal": {
    "path": [
     "Machines virtuelles",
     "VM1"
    ],
    "title": "Alerte de métrique",
    "rows": [
     [
      "*VM supprimée",
      "Plus de données"
     ]
    ]
   },
   "keep": "Métrique = valeur ; opération = journal d'activité."
  },
  {
   "solution": "<p><b>Solution :</b> vous créez un paramètre de diagnostic du journal d'activité vers un compte de stockage.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Le paramètre de diagnostic <b>archive</b> le journal dans un compte de stockage, mais n'envoie aucune notification. Il faut une règle d'alerte.</p>",
   "portal": {
    "path": [
     "Moniteur",
     "Journal d'activité"
    ],
    "title": "Exporter le journal d'activité",
    "rows": [
     [
      "*Stockage",
      "Archivage, pas d'alerte"
     ]
    ]
   },
   "keep": "Diagnostic = stocker ; alerte = prévenir."
  }
 ]
},
{
 "id": "S007",
 "dom": 3,
 "title": "Disponibilité de l'application web",
 "scenario": "<p>Vous déployez une application web sur des machines virtuelles dans la région France Central, derrière un équilibreur de charge Standard.</p><p>L'application doit rester disponible si un centre de données entier de la région tombe en panne.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous déployez trois VM réparties dans les zones de disponibilité 1, 2 et 3.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> Chaque <b>zone de disponibilité</b> est un ou plusieurs centres de données indépendants (alimentation, refroidissement, réseau). Avec une VM par zone, la perte d'une zone laisse deux VM actives (SLA 99,99 %). L'équilibreur Standard redondant interzone continue de servir.</p>",
   "portal": {
    "path": [
     "Machines virtuelles",
     "Créer"
    ],
    "title": "Options de disponibilité",
    "rows": [
     [
      "*Zones de disponibilité",
      "1, 2, 3"
     ]
    ]
   },
   "keep": "Survivre à la perte d'un centre de données = zones."
  },
  {
   "solution": "<p><b>Solution :</b> vous déployez trois VM dans un groupe à haute disponibilité avec 3 domaines d'erreur.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Un <b>groupe à haute disponibilité</b> répartit les VM sur des racks (domaines d'erreur) d'un <b>même</b> centre de données. Il protège contre la panne d'un rack, pas d'un centre de données entier (SLA 99,95 %).</p>",
   "portal": {
    "path": [
     "Groupes à haute disponibilité",
     "AS1"
    ],
    "title": "AS1",
    "rows": [
     [
      "*Domaines d'erreur",
      "3 · même centre de données"
     ]
    ]
   },
   "keep": "Groupe à haute disponibilité = racks ; zones = centres de données."
  },
  {
   "solution": "<p><b>Solution :</b> vous déployez un groupe de machines virtuelles identiques de 3 instances, toutes dans la zone 1.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Les trois instances sont dans la <b>zone 1</b>. Si ce centre de données tombe, toutes les instances tombent avec lui.</p>",
   "portal": {
    "path": [
     "Groupes identiques de machines virtuelles",
     "VMSS1"
    ],
    "title": "Disponibilité",
    "rows": [
     [
      "*Zones",
      "1 seulement"
     ]
    ]
   },
   "keep": "Une seule zone = point de défaillance unique."
  },
  {
   "solution": "<p><b>Solution :</b> vous déployez un groupe de machines virtuelles identiques de 3 instances réparties sur les zones 1, 2 et 3.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> Un <b>groupe identique</b> réparti sur les zones 1, 2 et 3 garde des instances actives si une zone tombe. Il peut aussi recréer des instances dans les zones restantes.</p>",
   "portal": {
    "path": [
     "Groupes identiques de machines virtuelles",
     "Créer"
    ],
    "title": "Options de disponibilité",
    "rows": [
     [
      "*Zones",
      "1, 2, 3"
     ]
    ]
   },
   "keep": "VMSS multizone = haute disponibilité + mise à l'échelle."
  }
 ]
},
{
 "id": "S008",
 "dom": 2,
 "title": "Accès privé à Azure Files",
 "scenario": "<p>Vous disposez d'un compte de stockage nommé storage2 qui contient le partage de fichiers share1. Votre site local est relié à VNet1 par un VPN site à site.</p><p>Les serveurs du site local doivent accéder à share1 par une adresse IP privée, sans passer par Internet.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous créez dans VNet1 un point de terminaison privé pour le service file de storage2 et configurez la résolution DNS de privatelink.file.core.windows.net pour le site local.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> Le <b>point de terminaison privé</b> donne au service file de storage2 une adresse privée dans VNet1, joignable depuis le site local par le VPN. Il faut que le DNS local résolve <code>storage2.file.core.windows.net</code> vers cette adresse privée (zone privatelink + redirecteur ou résolveur DNS privé).</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "storage2"
    ],
    "title": "Créer un point de terminaison privé",
    "rows": [
     [
      "*Sous-ressource cible",
      "file"
     ],
     [
      "Réseau virtuel",
      "VNet1"
     ],
     [
      "DNS",
      "privatelink.file.core.windows.net"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "Accès privé depuis le site local = point de terminaison privé + DNS."
  },
  {
   "solution": "<p><b>Solution :</b> vous activez un point de terminaison de service Microsoft.Storage sur le GatewaySubnet de VNet1.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Un <b>point de terminaison de service</b> ne concerne que le trafic des sous-réseaux Azure où il est activé, et le compte garde son adresse <b>publique</b>. Le trafic du site local n'en profite pas.</p>",
   "portal": {
    "path": [
     "Réseaux virtuels",
     "VNet1",
     "GatewaySubnet"
    ],
    "title": "Points de terminaison de service",
    "rows": [
     [
      "*Microsoft.Storage",
      "Pas pour le site local"
     ]
    ]
   },
   "keep": "Point de terminaison de service = sous-réseaux Azure, adresse publique."
  },
  {
   "solution": "<p><b>Solution :</b> vous ajoutez l'adresse IP publique du site local dans le pare-feu de storage2.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Autoriser l'IP publique du site local dans le pare-feu du compte laisse le trafic passer par <b>Internet</b>, vers l'adresse publique du compte.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "storage2"
    ],
    "title": "Mise en réseau",
    "rows": [
     [
      "*Plage d'adresses",
      "IP publique du site (via Internet)"
     ]
    ]
   },
   "keep": "Règle IP du pare-feu = toujours par Internet."
  }
 ]
},
{
 "id": "S009",
 "dom": 1,
 "title": "Région autorisée pour les ressources",
 "scenario": "<p>Votre organisation possède le groupe d'administration MG-Corp, qui contient 10 abonnements. De nouveaux abonnements y seront ajoutés.</p><p>Vous devez empêcher la création de ressources en dehors de la région France Central dans tous les abonnements de MG-Corp, actuels et futurs.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous attribuez à MG-Corp la stratégie intégrée Emplacements autorisés avec la valeur France Central.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> Une stratégie attribuée à un <b>groupe d'administration</b> s'applique par <b>héritage</b> à tous ses abonnements, y compris ceux ajoutés plus tard. <b>Emplacements autorisés</b> (effet Deny) bloque la création hors de France Central.</p>",
   "portal": {
    "path": [
     "Stratégie",
     "Affecter une stratégie"
    ],
    "title": "Emplacements autorisés",
    "rows": [
     [
      "*Étendue",
      "MG-Corp"
     ],
     [
      "Emplacements",
      "France Central"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "Tous les abonnements, futurs compris = stratégie au groupe d'administration."
  },
  {
   "solution": "<p><b>Solution :</b> vous attribuez la stratégie Emplacements autorisés à chacun des 10 abonnements existants.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Les 10 abonnements actuels seraient couverts, mais pas ceux ajoutés ensuite à MG-Corp.</p>",
   "portal": {
    "path": [
     "Stratégie",
     "Affectations"
    ],
    "title": "Affectations",
    "rows": [
     [
      "*Étendue",
      "10 abonnements (pas les futurs)"
     ]
    ]
   },
   "keep": "Abonnement par abonnement = oublis assurés."
  },
  {
   "solution": "<p><b>Solution :</b> vous appliquez un verrou Lecture seule à MG-Corp.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> On ne pose pas de verrou sur un groupe d'administration. Et un verrou Lecture seule bloquerait toutes les modifications, pas seulement les créations hors de France Central.</p>",
   "portal": {
    "path": [
     "Groupes d'administration",
     "MG-Corp"
    ],
    "title": "MG-Corp",
    "rows": [
     [
      "*Verrous",
      "Non disponibles"
     ]
    ]
   },
   "keep": "Verrou = empêche de modifier/supprimer ; Policy = impose des règles."
  },
  {
   "solution": "<p><b>Solution :</b> vous attribuez à MG-Corp la stratégie Emplacements autorisés avec l'application de la stratégie Désactivée.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> Avec l'application de la stratégie <b>Désactivée</b> (DoNotEnforce), la conformité est évaluée et affichée, mais aucune création n'est bloquée.</p>",
   "portal": {
    "path": [
     "Stratégie",
     "Affecter une stratégie"
    ],
    "title": "Paramètres de base",
    "rows": [
     [
      "*Application de la stratégie",
      "Désactivée (rien n'est bloqué)"
     ]
    ]
   },
   "keep": "DoNotEnforce = mode test, sans blocage."
  }
 ]
},
{
 "id": "S010",
 "dom": 5,
 "title": "Restauration d'un fichier supprimé",
 "scenario": "<p>La machine virtuelle VM1 exécute Windows Server. Elle est sauvegardée chaque nuit par Azure Backup dans le coffre Vault1.</p><p>Un utilisateur a supprimé hier un fichier sur le disque de données de VM1. Vous devez récupérer ce fichier sans modifier ni arrêter VM1.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous utilisez la Récupération de fichiers, exécutez le script sur VM1 et copiez le fichier depuis le lecteur monté.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> La <b>récupération de fichiers</b> télécharge un script qui monte les disques du point de récupération comme lecteurs. On copie le fichier, puis on démonte. VM1 n'est ni arrêtée ni modifiée.</p>",
   "portal": {
    "path": [
     "Éléments de sauvegarde",
     "VM1"
    ],
    "title": "Récupération de fichiers",
    "rows": [
     [
      "*Point",
      "Hier"
     ],
     [
      "Script",
      "Monter les disques"
     ]
    ],
    "btn": "Télécharger l'exécutable"
   },
   "keep": "Un fichier sans toucher la VM = récupération de fichiers."
  },
  {
   "solution": "<p><b>Solution :</b> vous restaurez VM1 avec l'option Remplacer l'existant.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<p><b>Non.</b> <b>Remplacer l'existant</b> remplace les disques de VM1 par ceux du point de récupération et arrête la VM pendant l'opération. Tout ce qui a changé depuis la sauvegarde serait perdu.</p>",
   "portal": {
    "path": [
     "Éléments de sauvegarde",
     "VM1"
    ],
    "title": "Restaurer › Remplacer l'existant",
    "rows": [
     [
      "*Effet",
      "VM arrêtée, disques remplacés"
     ]
    ]
   },
   "keep": "Remplacer l'existant = retour arrière complet de la VM."
  },
  {
   "solution": "<p><b>Solution :</b> vous restaurez les disques dans un groupe de ressources temporaire, attachez le disque de données restauré à une autre VM et copiez le fichier.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<p><b>Oui.</b> <b>Restaurer les disques</b> crée des disques managés dans un groupe de ressources choisi. On attache le disque de données à une autre VM et on copie le fichier. C'est plus long, mais VM1 n'est pas touchée.</p>",
   "portal": {
    "path": [
     "Éléments de sauvegarde",
     "VM1"
    ],
    "title": "Restaurer › Restaurer les disques",
    "rows": [
     [
      "*Groupe de ressources",
      "RG-Temp"
     ]
    ],
    "btn": "Restaurer"
   },
   "keep": "Restaurer les disques = récupérer sans toucher la VM, en plus long."
  }
 ]
}
);
