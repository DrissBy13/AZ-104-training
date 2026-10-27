/* Études de cas */
AZ.cases.push(
{
 "id": "C001",
 "title": "Fabrikam",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Fabrikam est une entreprise de fabrication dont le siège est à Lyon. Elle possède un site de production à Grenoble. L'équipe informatique migre progressivement ses serveurs vers Azure.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Environnement Azure</b></p><p>Fabrikam dispose d'un locataire Microsoft Entra nommé fabrikam.com et des abonnements suivants :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Abonnement</th><th>Contenu</th></tr><tr><td>Sub-Prod</td><td>VNet-Prod (10.1.0.0/16, France Central), sous-réseaux Subnet-App et Subnet-Data ; VM-APP1, VM-APP2 et VM-SQL1, déployées sans zone de disponibilité ; compte de stockage stfabdocs (Standard, GRS)</td></tr><tr><td>Sub-Dev</td><td>VNet-Dev (10.2.0.0/16) et plusieurs groupes de ressources de test</td></tr></table></div><p><b>Environnement local</b></p><p>Le site de Lyon (192.168.0.0/16) est relié à VNet-Prod par un VPN site à site. Un groupe Microsoft Entra nommé Dev-Team contient tous les développeurs.</p>"
  },
  {
   "t": "Exigences",
   "h": "<p><b>Exigences techniques</b></p><ul><li>Les membres de Dev-Team doivent gérer toutes les ressources de Sub-Dev, sans pouvoir gérer les accès.</li><li>Les ressources de Sub-Dev ne doivent pouvoir être créées que dans la région France Central.</li><li>L'application hébergée sur VM-APP1 et VM-APP2 doit offrir un SLA d'au moins 99,99 %.</li><li>Les utilisateurs du site de Lyon doivent accéder à stfabdocs sans passer par Internet. L'accès public à stfabdocs doit être désactivé.</li><li>Les documents de stfabdocs non modifiés depuis 90 jours doivent passer automatiquement au niveau Archive.</li><li>VM-SQL1 doit être sauvegardée chaque jour. Les administrateurs doivent recevoir un e-mail en cas d'échec d'une sauvegarde.</li></ul><p><b>Contraintes</b></p><ul><li>Les solutions doivent minimiser les coûts et l'effort d'administration.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C001-1",
   "dom": 1,
   "type": "hot",
   "stem": "<p>Vous devez répondre à l'exigence concernant les membres de Dev-Team.</p><p>Que devez-vous attribuer à Dev-Team ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
   "rows": [
    {
     "l": "Rôle :",
     "o": [
      "Propriétaire",
      "Contributeur",
      "Lecteur",
      "Administrateur de l'accès utilisateur"
     ],
     "a": 1
    },
    {
     "l": "Étendue :",
     "o": [
      "Le groupe d'administration racine",
      "Sub-Dev",
      "Chaque groupe de ressources de Sub-Dev"
     ],
     "a": 1
    }
   ],
   "expl": "<p>« Gérer toutes les ressources, sans gérer les accès » correspond exactement au rôle <b>Contributeur</b>. Propriétaire et Administrateur de l'accès utilisateur gèrent les accès ; Lecteur ne modifie rien.</p><p>L'étendue <b>Sub-Dev</b> couvre en une seule attribution tous les groupes de ressources, y compris ceux créés plus tard. Le groupe d'administration racine donnerait accès à la production.</p>",
   "portal": {
    "path": [
     "Abonnements",
     "Sub-Dev"
    ],
    "title": "Ajouter une attribution de rôle",
    "rows": [
     [
      "*Rôle",
      "Contributeur"
     ],
     [
      "Membres",
      "Dev-Team"
     ],
     [
      "Étendue",
      "Sub-Dev"
     ]
    ],
    "btn": "Vérifier + attribuer"
   },
   "keep": "Tout gérer sauf les accès = Contributeur, à l'étendue la plus petite qui couvre le besoin."
  },
  {
   "id": "C001-2",
   "dom": 1,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence concernant les régions autorisées pour Sub-Dev.</p><p>Que devez-vous configurer ?</p>",
   "opts": [
    "Un verrou en lecture seule sur Sub-Dev",
    "Une Azure Policy Emplacements autorisés avec l'effet Deny, attribuée à Sub-Dev",
    "Le rôle Lecteur pour Dev-Team sur toutes les autres régions",
    "Un budget sur Sub-Dev"
   ],
   "ans": 1,
   "expl": "<p>La stratégie intégrée <b>Emplacements autorisés</b>, effet Deny, attribuée à <b>Sub-Dev</b>, bloque toute création hors de France Central, quel que soit le rôle de l'utilisateur.</p><p>Un verrou Lecture seule bloquerait toutes les modifications. Azure RBAC ne se configure pas par région. Un budget alerte sur les coûts mais ne bloque rien.</p>",
   "portal": {
    "path": [
     "Stratégie",
     "Affecter une stratégie"
    ],
    "title": "Emplacements autorisés",
    "rows": [
     [
      "*Étendue",
      "Sub-Dev"
     ],
     [
      "Emplacements",
      "France Central"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "Restreindre les régions = Azure Policy Emplacements autorisés."
  },
  {
   "id": "C001-3",
   "dom": 3,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence de disponibilité de l'application hébergée sur VM-APP1 et VM-APP2.</p><p>Que devez-vous faire ?</p>",
   "opts": [
    "Placer VM-APP1 et VM-APP2 dans un groupe à haute disponibilité",
    "Convertir les disques des deux VM en SSD Premium",
    "Redéployer VM-APP1 et VM-APP2 dans deux zones de disponibilité différentes",
    "Protéger les deux VM avec Azure Backup"
   ],
   "ans": 2,
   "expl": "<p>Le SLA de <b>99,99 %</b> exige au moins deux VM dans des <b>zones de disponibilité</b> différentes. Un groupe à haute disponibilité offre 99,95 %, des disques Premium seuls donnent 99,9 % pour une VM unique, et Azure Backup ne change pas la disponibilité.</p><p>La zone d'une VM se choisit à la création : les VM existantes, déployées sans zone, doivent être <b>redéployées</b>.</p>",
   "portal": {
    "path": [
     "Machines virtuelles",
     "Créer"
    ],
    "title": "Options de disponibilité",
    "rows": [
     [
      "*VM-APP1",
      "Zone 1"
     ],
     [
      "*VM-APP2",
      "Zone 2"
     ],
     [
      "SLA",
      "99,99 %"
     ]
    ]
   },
   "keep": "99,99 % = VM dans au moins deux zones."
  },
  {
   "id": "C001-4",
   "dom": 4,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence d'accès à stfabdocs depuis le site de Lyon.</p><p>Que devez-vous configurer ?</p>",
   "opts": [
    "Un point de terminaison de service Microsoft.Storage sur Subnet-App",
    "Une règle de pare-feu de stfabdocs avec l'adresse publique du site de Lyon",
    "Un peering entre VNet-Prod et VNet-Dev",
    "Un point de terminaison privé pour stfabdocs dans VNet-Prod et une zone DNS privée"
   ],
   "ans": 3,
   "expl": "<p>Le site de Lyon est relié à VNet-Prod par le VPN. Un <b>point de terminaison privé</b> pour stfabdocs dans VNet-Prod lui donne une adresse privée joignable par le tunnel. La <b>zone DNS privée</b> privatelink.blob.core.windows.net (et la résolution côté site) fait pointer le nom vers cette adresse. On peut alors désactiver l'accès public.</p><p>Un point de terminaison de service ne sert pas au trafic du site local ; une règle IP passerait par Internet.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stfabdocs"
    ],
    "title": "Créer un point de terminaison privé",
    "rows": [
     [
      "Sous-ressource cible",
      "blob"
     ],
     [
      "*Réseau virtuel",
      "VNet-Prod"
     ],
     [
      "DNS",
      "privatelink.blob.core.windows.net"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "Accès privé depuis un site relié par VPN = point de terminaison privé + DNS."
  },
  {
   "id": "C001-5",
   "dom": 2,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence concernant les documents non modifiés de stfabdocs.</p><p>Que devez-vous configurer ?</p>",
   "opts": [
    "Une règle de gestion du cycle de vie qui déplace vers Archive les blobs non modifiés depuis 90 jours",
    "Une stratégie d'immuabilité basée sur le temps de 90 jours",
    "Le niveau d'accès par défaut du compte sur Archive",
    "La réplication d'objets vers un second compte"
   ],
   "ans": 0,
   "expl": "<p>Une règle de <b>gestion du cycle de vie</b> déplace automatiquement les blobs vers <b>Archive</b> quand leur dernière modification date de plus de 90 jours.</p><p>L'immuabilité empêche la modification mais ne change pas le niveau. Archive ne peut pas être le niveau par défaut d'un compte (seulement Chaud ou Froid). La réplication d'objets copie, elle ne déplace pas de niveau.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stfabdocs"
    ],
    "title": "Gestion du cycle de vie › Ajouter une règle",
    "rows": [
     [
      "Si",
      "Dernière modification > 90 jours"
     ],
     [
      "*Alors",
      "Déplacer vers le stockage archive"
     ]
    ],
    "btn": "Ajouter"
   },
   "keep": "Changer de niveau selon l'âge = gestion du cycle de vie."
  },
  {
   "id": "C001-6",
   "dom": 5,
   "type": "single",
   "stem": "<p>Vous avez configuré la sauvegarde quotidienne de VM-SQL1 dans un coffre Recovery Services.</p><p>Vous devez répondre à l'exigence de notification des échecs de sauvegarde. Que devez-vous faire ?</p>",
   "opts": [
    "Créer un paramètre de diagnostic du coffre vers Event Hubs",
    "Activer la suppression réversible sur le coffre",
    "Créer une règle de traitement des alertes qui envoie les alertes Azure Backup vers un groupe d'actions",
    "Créer une règle d'alerte sur le journal d'activité de VM-SQL1"
   ],
   "ans": 2,
   "expl": "<p>Azure Backup crée <b>automatiquement</b> des alertes Azure Monitor quand une sauvegarde échoue, mais ne notifie personne par défaut. Une <b>règle de traitement des alertes</b> qui ajoute un <b>groupe d'actions</b> (e-mail) à ces alertes répond au besoin, sans effort.</p><p>Event Hubs sert à diffuser vers un outil tiers ; la suppression réversible protège les données ; le journal d'activité de la VM ne trace pas les échecs de travaux de sauvegarde.</p>",
   "portal": {
    "path": [
     "Moniteur",
     "Alertes"
    ],
    "title": "Créer une règle de traitement des alertes",
    "rows": [
     [
      "Étendue",
      "Coffre Recovery Services"
     ],
     [
      "*Type de règle",
      "Appliquer un groupe d'actions"
     ],
     [
      "Groupe d'actions",
      "AG-Admins (e-mail)"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "Notifier les échecs de sauvegarde = alertes Azure Backup + règle de traitement + groupe d'actions."
  }
 ]
}
);
