/* Études de cas (lot 7 : C013 et C014, identités et gouvernance) */
AZ.cases.push(
{
 "id": "C013",
 "title": "Fourth Coffee",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Fourth Coffee est un torréfacteur avec un siège à Paris et une agence commerciale à Lyon. Son locataire Microsoft Entra, fourthcoffee.com, est synchronisé avec l'Active Directory local. L'entreprise veut déléguer l'administration, durcir les accès privilégiés et ouvrir son environnement à un partenaire.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Identité</b> : Microsoft Entra Connect, synchronisation du hachage de mot de passe, réécriture du mot de passe désactivée. Tous les utilisateurs ont une licence Microsoft Entra ID P1. La réinitialisation du mot de passe en libre-service (SSPR) est activée pour <b>Sélectionné : GRP-Pilote</b>.</p><p><b>Administrateurs</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle Microsoft Entra</th><th>Remarque</th></tr><tr><td>Ana</td><td>Administrateur général</td><td>—</td></tr><tr><td>Ben</td><td>Administrateur d'utilisateurs</td><td>—</td></tr><tr><td>Chloé</td><td>Administrateur du support technique</td><td>Rôle attribué sur le locataire</td></tr><tr><td>Dan</td><td>Aucun</td><td>Propriétaire de GRP-Ventes</td></tr></table></div><p><b>Groupes</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Groupe</th><th>Type</th><th>Appartenance</th><th>Remarque</th></tr><tr><td>GRP-Ventes</td><td>Sécurité</td><td>Attribuée, 40 membres</td><td>Licence Microsoft 365 E3 attribuée au groupe</td></tr><tr><td>GRP-Lyon</td><td>Microsoft 365</td><td>Dynamique : user.city -eq \"Lyon\"</td><td>—</td></tr><tr><td>GRP-Admins</td><td>Sécurité</td><td>Attribuée</td><td>Rôles Microsoft Entra attribuables : Non</td></tr></table></div><p><b>Licences Microsoft 365 E3</b> : 200 achetées, 195 attribuées.</p><p><b>Collaboration externe</b> : seuls les utilisateurs disposant de rôles d'administrateur spécifiques peuvent inviter des invités ; les invitations sont autorisées vers tous les domaines.</p>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>Chloé ne doit plus pouvoir réinitialiser que les mots de passe des commerciaux de Lyon.</li><li>Les administrateurs doivent activer leurs rôles à la demande, pour une durée limitée, avec l'approbation d'Ana.</li><li>Tous les utilisateurs doivent pouvoir réinitialiser leur mot de passe, et le nouveau mot de passe doit fonctionner sur les postes du domaine.</li><li>Seuls des utilisateurs de tailspintoys.com doivent pouvoir être invités. Dan doit pouvoir inviter des invités, avec le moins de privilèges possible.</li><li>Les membres de GRP-Admins doivent recevoir le rôle Administrateur du support technique par une seule attribution.</li><li>30 consultants de Tailspin doivent être invités en une seule opération et gérer les VM du groupe de ressources RG-Demo.</li><li>Un groupe de sécurité doit contenir automatiquement les utilisateurs du service Ventes situés à Lyon.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C013-1",
   "dom": 1,
   "type": "yngrid",
   "stem": "<p>Vous examinez la configuration actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Dan peut ajouter des membres à GRP-Ventes.",
     "a": 0
    },
    {
     "l": "Ben peut réinitialiser le mot de passe d'Ana.",
     "a": 1
    },
    {
     "l": "Un utilisateur dont la ville devient Lyon rejoint GRP-Lyon sans intervention.",
     "a": 0
    },
    {
     "l": "Vous pouvez attribuer le rôle Administrateur du support technique à GRP-Admins.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Dan : Oui.</b> Le propriétaire d'un groupe à appartenance attribuée peut en gérer les membres, sans rôle d'administrateur.</li><li><b>Ben : Non.</b> L'Administrateur d'utilisateurs ne peut pas réinitialiser le mot de passe d'un Administrateur général ; il faut un Administrateur général ou un Administrateur d'authentification privilégiée.</li><li><b>GRP-Lyon : Oui.</b> La règle dynamique (licence P1) est réévaluée quand l'attribut city change, y compris quand il est synchronisé depuis l'AD local.</li><li><b>GRP-Admins : Non.</b> Seul un groupe créé avec l'option « rôles Microsoft Entra attribuables » peut recevoir un rôle, et cette option ne se change pas après la création.</li></ul>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Groupes",
     "GRP-Admins"
    ],
    "title": "GRP-Admins | Propriétés",
    "menu": [
     "Vue d'ensemble",
     "*Propriétés",
     "Membres",
     "Propriétaires"
    ],
    "rows": [
     [
      "*Des rôles Microsoft Entra peuvent être attribués au groupe",
      "Non (non modifiable)"
     ]
    ]
   },
   "keep": "Groupe attribuable à des rôles : à la création seulement. Mot de passe d'un Administrateur général : Administrateur général ou d'authentification privilégiée."
  },
  {
   "id": "C013-2",
   "dom": 1,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 2, 3 et 5.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Exigence 2, licence nécessaire :",
     "o": [
      "Microsoft Entra ID P1, déjà en place",
      "Microsoft Entra ID P2 (ou ID Governance)",
      "Microsoft 365 E3, déjà en place",
      "Aucune licence supplémentaire"
     ],
     "a": 1
    },
    {
     "l": "Exigence 3, dans Microsoft Entra Connect :",
     "o": [
      "Activer la réécriture du mot de passe",
      "Activer l'authentification directe",
      "Activer l'écriture différée des groupes",
      "Activer l'écriture différée des appareils"
     ],
     "a": 0
    },
    {
     "l": "Exigence 3, SSPR activée pour :",
     "o": [
      "Aucun",
      "Sélectionné",
      "Tous"
     ],
     "a": 2
    },
    {
     "l": "Exigence 5 :",
     "o": [
      "Créer un nouveau groupe attribuable à des rôles",
      "Rendre GRP-Admins attribuable à des rôles",
      "Attribuer le rôle à chaque membre de GRP-Admins",
      "Placer GRP-Admins dans une unité administrative"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Exigence 2 :</b> l'activation à la demande, limitée dans le temps et approuvée, c'est Privileged Identity Management, qui exige Microsoft Entra ID P2 (ou Microsoft Entra ID Governance).</li><li><b>Exigence 3 :</b> pour qu'un mot de passe changé dans le cloud s'applique à l'AD local, il faut la <b>réécriture du mot de passe</b> dans Entra Connect, et SSPR activée pour <b>Tous</b>.</li><li><b>Exigence 5 :</b> GRP-Admins ne peut pas devenir attribuable à des rôles après sa création : on crée un nouveau groupe avec cette option, puis on lui attribue le rôle. Attribuer le rôle à chaque membre ne respecte pas « une seule attribution ».</li></ul>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Réinitialisation du mot de passe"
    ],
    "title": "Réinitialisation du mot de passe | Propriétés",
    "menu": [
     "*Propriétés",
     "Méthodes d'authentification",
     "Intégration locale"
    ],
    "rows": [
     [
      "*Réinitialisation du mot de passe en libre-service activée",
      "Tous"
     ],
     [
      "Réécriture du mot de passe",
      "Activée"
     ]
    ]
   },
   "keep": "PIM = P2. Mot de passe vers l'AD local = réécriture. Groupe attribuable : nouveau groupe."
  },
  {
   "id": "C013-3",
   "dom": 1,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre aux exigences 1 et 4. Que devez-vous configurer pour chaque objectif ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Objectif",
    "Configuration"
   ],
   "srcs": [
    "Une unité administrative qui contient les commerciaux de Lyon",
    "Le rôle Administrateur du support technique étendu à l'unité, à la place du rôle sur le locataire",
    "Le rôle Administrateur d'utilisateurs sur le locataire",
    "Autoriser les invitations uniquement vers tailspintoys.com",
    "Le rôle Inviteur d'invités pour Dan",
    "Le rôle Administrateur d'utilisateurs pour Dan",
    "Une stratégie d'accès conditionnel pour les invités"
   ],
   "tgts": [
    {
     "l": "Regrouper les comptes que Chloé gère",
     "a": 0
    },
    {
     "l": "Limiter Chloé à ces comptes",
     "a": 1
    },
    {
     "l": "N'inviter que des utilisateurs de Tailspin",
     "a": 3
    },
    {
     "l": "Permettre à Dan d'inviter",
     "a": 4
    }
   ],
   "expl": "<ul><li><b>Unité administrative :</b> elle délimite un ensemble d'utilisateurs ; un rôle attribué sur l'unité ne s'applique qu'à eux. Il faut aussi retirer le rôle attribué sur le locataire, sinon Chloé garde ses droits partout.</li><li><b>Tailspin :</b> les restrictions de collaboration (paramètres de collaboration externe) autorisent les invitations vers des domaines précis seulement.</li><li><b>Dan :</b> les invitations sont réservées à des rôles d'administrateur ; Inviteur d'invités est le rôle le moins privilégié qui le permet. Administrateur d'utilisateurs en donnerait bien plus.</li></ul>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Unités administratives",
     "AU-Lyon-Ventes"
    ],
    "title": "AU-Lyon-Ventes | Rôles et administrateurs",
    "menu": [
     "Utilisateurs",
     "*Rôles et administrateurs"
    ],
    "rows": [
     [
      "*Administrateur du support technique",
      "Chloé"
     ]
    ]
   },
   "keep": "Rôle limité à des comptes = unité administrative. Inviter avec le moins de droits = Inviteur d'invités."
  },
  {
   "id": "C013-4",
   "dom": 1,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence 6, après avoir appliqué l'exigence 4.</p><p>Quelles <b>quatre</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Télécharger le modèle CSV d'invitation en bloc",
    "Renseigner dans le fichier les adresses e-mail et les messages d'invitation",
    "Charger le fichier dans Inviter des utilisateurs en bloc",
    "Ajouter les invités à un groupe, puis attribuer au groupe Contributeur de machines virtuelles sur RG-Demo",
    "Créer les comptes avec Créer des utilisateurs en bloc",
    "Attribuer Contributeur de machines virtuelles à chaque invité, un par un"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>Les consultants ont leurs propres comptes Tailspin : on les <b>invite</b> (B2B), on ne crée pas de comptes membres. L'invitation en bloc part du modèle CSV téléchargé depuis le portail, rempli puis chargé. Une fois les invités créés, un groupe permet une seule attribution de rôle Azure sur RG-Demo, plus simple à maintenir que 30 attributions.</p>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Utilisateurs",
     "Opérations en bloc"
    ],
    "title": "Inviter des utilisateurs en bloc",
    "menu": [
     "*Inviter en bloc"
    ],
    "rows": [
     [
      "Modèle",
      "Télécharger"
     ],
     [
      "*Fichier CSV",
      "consultants-tailspin.csv"
     ]
    ],
    "btn": "Envoyer"
   },
   "keep": "Comptes d'un autre locataire = invitation B2B (en bloc par CSV), rôle attribué à un groupe."
  },
  {
   "id": "C013-5",
   "dom": 1,
   "type": "cmd",
   "stem": "<p>Vous devez répondre à l'exigence 7 avec Microsoft Graph PowerShell. Comment devez-vous compléter la commande ?</p>",
   "rows": [
    {
     "l": "-GroupTypes",
     "o": [
      "\"Unified\"",
      "\"DynamicMembership\"",
      "\"Assigned\""
     ],
     "a": 1
    },
    {
     "l": "opérateur",
     "o": [
      "-or",
      "-and",
      "-any",
      "-contains"
     ],
     "a": 1
    },
    {
     "l": "-MembershipRuleProcessingState",
     "o": [
      "\"Paused\"",
      "\"Enabled\"",
      "\"On\""
     ],
     "a": 2
    }
   ],
   "tpl": "New-MgGroup -DisplayName \"GRP-Lyon-Ventes\" -MailEnabled:$false -MailNickname \"lyonventes\" -SecurityEnabled -GroupTypes {0} -MembershipRule '(user.department -eq \"Ventes\") {1} (user.city -eq \"Lyon\")' -MembershipRuleProcessingState {2}",
   "expl": "<ul><li><b>DynamicMembership :</b> c'est ce type qui rend l'appartenance dynamique. Unified créerait un groupe Microsoft 365, et Assigned n'est pas une valeur de GroupTypes.</li><li><b>-and :</b> les deux conditions doivent être vraies (Ventes et Lyon) ; -or ajouterait tous les vendeurs et tous les Lyonnais.</li><li><b>On :</b> la règle est traitée ; Paused la suspend. Enabled n'est pas une valeur valide.</li></ul>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Groupes",
     "GRP-Lyon-Ventes"
    ],
    "title": "GRP-Lyon-Ventes | Règles d'appartenance dynamique",
    "menu": [
     "*Règles d'appartenance dynamique"
    ],
    "rows": [
     [
      "*Règle",
      "(user.department -eq \"Ventes\") -and (user.city -eq \"Lyon\")"
     ]
    ]
   },
   "keep": "Groupe dynamique : GroupTypes DynamicMembership, règle, état On."
  },
  {
   "id": "C013-6",
   "dom": 1,
   "type": "single",
   "stem": "<p>Les RH ajoutent 10 nouveaux commerciaux, avec un emplacement d'utilisation renseigné, à GRP-Ventes. Que se passe-t-il pour leurs licences ?</p>",
   "opts": [
    "5 reçoivent une licence E3, 5 sont en erreur",
    "Les 10 reçoivent une licence E3 en dépassement",
    "Aucun ne reçoit de licence tant qu'il en manque",
    "Les licences des 5 membres les plus anciens sont retirées"
   ],
   "ans": 0,
   "expl": "<p>Il reste 200 − 195 = 5 licences E3. L'attribution par groupe en donne tant qu'il en reste ; les autres membres passent en état d'erreur (licences insuffisantes) jusqu'à l'achat de licences ou la libération de licences existantes. Azure ne retire jamais une licence à un utilisateur pour la donner à un autre.</p>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Groupes",
     "GRP-Ventes"
    ],
    "title": "GRP-Ventes | Licences",
    "menu": [
     "*Licences"
    ],
    "rows": [
     [
      "Microsoft 365 E3",
      "Attribuée"
     ],
     [
      "*Utilisateurs en erreur",
      "5 · Licences insuffisantes"
     ]
    ]
   },
   "keep": "Licences de groupe : attribuées dans la limite du stock, le reste en erreur."
  },
  {
   "id": "C013-7",
   "dom": 1,
   "type": "hotspot",
   "stem": "<p>Vous devez limiter les invitations à tailspintoys.com pour l'exigence 4. Quel élément du centre d'administration Microsoft Entra devez-vous sélectionner ? Pour répondre, sélectionnez l'élément approprié du menu.</p>",
   "ans": "Paramètres de collaboration externe",
   "win": {
    "title": "Centre d'administration Microsoft Entra",
    "nav": [
     {
      "g": "Identité",
      "items": [
       "Utilisateurs",
       "Groupes",
       "Appareils",
       "Applications",
       "Rôles et administrateurs",
       "Unités administratives"
      ]
     },
     {
      "g": "Identités externes",
      "items": [
       "Toutes les identités",
       "Paramètres de collaboration externe",
       "Paramètres d'accès interlocataire"
      ]
     },
     {
      "g": "Protection",
      "items": [
       "Accès conditionnel",
       "Méthodes d'authentification",
       "Réinitialisation du mot de passe"
      ]
     }
    ]
   },
   "expl": "<p>Les <b>paramètres de collaboration externe</b> contiennent les restrictions de collaboration (autoriser ou refuser des domaines), qui invite peut inviter et les restrictions d'accès des invités. Les paramètres d'accès interlocataire règlent la confiance et l'accès B2B avec d'autres locataires Entra, pas la liste des domaines invitables.</p>",
   "portal": {
    "path": [
     "Identités externes",
     "Paramètres de collaboration externe"
    ],
    "title": "Paramètres de collaboration externe",
    "menu": [
     "*Paramètres de collaboration externe"
    ],
    "rows": [
     [
      "*Restrictions de collaboration",
      "Autoriser uniquement : tailspintoys.com"
     ],
     [
      "Paramètres d'invitation des invités",
      "Rôles d'administrateur spécifiques"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Domaines invitables : restrictions de collaboration, dans les paramètres de collaboration externe."
  }
 ]
},
{
 "id": "C014",
 "title": "Tailspin Toys",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Tailspin Toys fabrique des jouets et gère plusieurs abonnements Azure. La direction veut une gouvernance cohérente : rôles délégués, étiquettes de coût, contrôle des dépenses et exceptions tracées.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Groupes d'administration</b> : Racine → MG-Tailspin → MG-Prod (Sub-Prod1, Sub-Prod2) et MG-NonProd (Sub-Dev). Les nouveaux abonnements sont placés sous la racine.</p><p><b>Affectations Azure Policy</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Affectation</th><th>Définition</th><th>Étendue</th><th>Effet</th><th>Identité</th></tr><tr><td>PA1</td><td>Emplacements autorisés : France Central, West Europe</td><td>MG-Tailspin</td><td>Deny</td><td>—</td></tr><tr><td>PA2</td><td>Exiger l'étiquette CostCenter sur les groupes de ressources</td><td>MG-Prod</td><td>Deny</td><td>—</td></tr><tr><td>PA3</td><td>Hériter de l'étiquette CostCenter du groupe de ressources</td><td>MG-Prod</td><td>Modify</td><td>Attribuée par le système, sans rôle</td></tr></table></div><p><b>Rôles Azure</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Groupe</th><th>Rôle</th><th>Étendue</th></tr><tr><td>Ops</td><td>Contributeur</td><td>MG-Prod</td></tr><tr><td>Finance</td><td>Lecteur</td><td>Sub-Prod1</td></tr><tr><td>Dev</td><td>Propriétaire</td><td>Sub-Dev</td></tr></table></div><p>Rôle personnalisé <b>VM Operator</b> : Actions Microsoft.Compute/virtualMachines/read, start/action, restart/action, deallocate/action ; AssignableScopes : /subscriptions/Sub-Prod1.</p><p><b>Verrous</b> : RG-Core (Sub-Prod1) porte un verrou Suppression impossible ; VNet-Core, dans RG-Core, porte un verrou Lecture seule.</p>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>Ops doit utiliser VM Operator dans Sub-Prod1, Sub-Prod2 et tout futur abonnement de MG-Prod, avec une seule attribution.</li><li>Finance doit voir les coûts et budgets de tous les abonnements de production, sans voir les ressources.</li><li>Les ressources existantes de MG-Prod doivent recevoir l'étiquette CostCenter de leur groupe.</li><li>Les nouveaux abonnements doivent arriver automatiquement sous MG-NonProd.</li><li>Les développeurs doivent être prévenus quand le coût prévu de Sub-Dev dépasse 90 % de 5 000 €, et les VM de développement doivent alors s'arrêter automatiquement.</li><li>Aucune adresse IP publique ne doit être créée dans Sub-Dev, sauf dans RG-Bastion pendant 6 mois, avec une justification tracée.</li><li>Un sous-réseau doit être ajouté à VNet-Core ; le verrou doit protéger VNet-Core le reste du temps.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C014-1",
   "dom": 1,
   "type": "yngrid",
   "stem": "<p>Vous examinez la configuration actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Un membre d'Ops peut supprimer RG-Core.",
     "a": 1
    },
    {
     "l": "Un membre de Finance peut voir les VM de Sub-Prod1.",
     "a": 0
    },
    {
     "l": "Un groupe de ressources sans étiquette CostCenter peut être créé dans Sub-Prod2.",
     "a": 1
    },
    {
     "l": "Un abonnement créé aujourd'hui est soumis à PA1.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Supprimer RG-Core : Non.</b> Le verrou Suppression impossible bloque la suppression pour tous, propriétaires compris.</li><li><b>Finance : Oui.</b> Lecteur sur Sub-Prod1 permet de voir toutes ses ressources, ce que l'exigence 2 veut justement éviter.</li><li><b>Groupe sans étiquette : Non.</b> PA2 (Deny) est attribuée à MG-Prod, dont Sub-Prod2 hérite.</li><li><b>Nouvel abonnement : Non.</b> Il arrive sous la racine, hors de MG-Tailspin, où PA1 est attribuée.</li></ul>",
   "portal": {
    "path": [
     "Groupes d'administration"
    ],
    "title": "Groupes d'administration",
    "menu": [
     "*Groupes d'administration",
     "Paramètres"
    ],
    "rows": [
     [
      "Groupe racine du locataire",
      "Nouveaux abonnements"
     ],
     [
      "*MG-Tailspin",
      "PA1"
     ],
     [
      "MG-Prod",
      "PA2, PA3"
     ]
    ]
   },
   "keep": "Stratégies et rôles héritent vers le bas ; un abonnement sous la racine n'hérite que de la racine."
  },
  {
   "id": "C014-2",
   "dom": 1,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 1, 2 et 4.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Exigence 1, AssignableScopes de VM Operator :",
     "o": [
      "Ajouter le groupe d'administration MG-Prod",
      "Ajouter /subscriptions/Sub-Prod2",
      "Remplacer par « / »",
      "Aucune modification"
     ],
     "a": 0
    },
    {
     "l": "Exigence 1, attribution du rôle à Ops :",
     "o": [
      "Sur MG-Prod",
      "Sur chaque abonnement",
      "Sur le groupe racine",
      "Sur RG-Core"
     ],
     "a": 0
    },
    {
     "l": "Exigence 2, pour Finance :",
     "o": [
      "Lecteur Cost Management sur MG-Prod, et retirer Lecteur",
      "Lecteur sur MG-Prod",
      "Contributeur Cost Management sur Sub-Prod1",
      "Lecteur de facturation sur Sub-Prod1"
     ],
     "a": 0
    },
    {
     "l": "Exigence 4 :",
     "o": [
      "Définir MG-NonProd comme groupe d'administration par défaut",
      "Créer une stratégie qui déplace les abonnements",
      "Déplacer chaque abonnement à la main",
      "Attribuer PA1 au groupe racine"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Exigence 1 :</b> un rôle personnalisé sans DataActions peut avoir un groupe d'administration dans ses AssignableScopes. On y ajoute MG-Prod, puis on attribue le rôle une seule fois sur MG-Prod : les abonnements actuels et futurs en héritent.</li><li><b>Exigence 2 :</b> Lecteur Cost Management sur MG-Prod donne les coûts et budgets de tous les abonnements de production, sans les ressources ; il faut retirer Lecteur sur Sub-Prod1, qui les montre.</li><li><b>Exigence 4 :</b> le groupe d'administration par défaut (paramètres de la hiérarchie) reçoit automatiquement les nouveaux abonnements.</li></ul>",
   "portal": {
    "path": [
     "Groupes d'administration",
     "Paramètres"
    ],
    "title": "Paramètres de la hiérarchie",
    "menu": [
     "*Paramètres"
    ],
    "rows": [
     [
      "*Groupe d'administration par défaut",
      "MG-NonProd"
     ],
     [
      "Autorisation pour créer des groupes",
      "Exiger une autorisation"
     ]
    ]
   },
   "keep": "Rôle personnalisé sur un groupe d'administration : AssignableScopes, puis attribution sur le groupe."
  },
  {
   "id": "C014-3",
   "dom": 1,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence 3.</p><p>Quelles <b>trois</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Attribuer à l'identité de PA3, sur MG-Prod, le rôle indiqué par roleDefinitionIds dans la définition",
    "Créer une tâche de correction pour PA3",
    "Vérifier dans Conformité que les ressources de MG-Prod sont conformes",
    "Passer l'effet de PA3 en Deny",
    "Supprimer PA3 et la recréer sans identité",
    "Ajouter l'étiquette à chaque ressource à la main"
   ],
   "seq": [
    0,
    1,
    2
   ],
   "expl": "<p>Une stratégie Modify ne s'applique d'elle-même qu'aux créations et mises à jour. Pour les ressources existantes, il faut une <b>tâche de correction</b>, qui agit avec l'identité managée de l'affectation. Cette identité n'a encore aucun rôle : il faut d'abord lui donner, sur l'étendue de l'affectation, le rôle déclaré dans roleDefinitionIds, sinon la tâche échoue. On vérifie enfin la conformité.</p>",
   "portal": {
    "path": [
     "Stratégie",
     "Correction"
    ],
    "title": "Nouvelle tâche de correction",
    "menu": [
     "Conformité",
     "*Correction"
    ],
    "rows": [
     [
      "*Affectation",
      "PA3"
     ],
     [
      "Étendue",
      "MG-Prod"
     ],
     [
      "Identité",
      "Attribuée par le système · rôle attribué"
     ]
    ],
    "btn": "Corriger"
   },
   "keep": "Existant + Modify ou DeployIfNotExists = tâche de correction, avec une identité qui a le rôle requis."
  },
  {
   "id": "C014-4",
   "dom": 1,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre aux exigences 5, 6 et 7. Que devez-vous configurer pour chaque objectif ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Objectif",
    "Configuration"
   ],
   "srcs": [
    "Un budget de Sub-Dev avec une alerte sur le coût prévu à 90 %",
    "Un groupe d'actions qui lance un runbook d'arrêt",
    "Une stratégie Deny sur les adresses IP publiques, attribuée à Sub-Dev",
    "Une exemption de RG-Bastion, avec une date d'expiration",
    "Une exclusion de RG-Bastion dans l'affectation",
    "Supprimer le verrou de VNet-Core, ajouter le sous-réseau, recréer le verrou",
    "Donner à Ops Contributeur de réseau sur VNet-Core"
   ],
   "tgts": [
    {
     "l": "Prévenir avant le dépassement",
     "a": 0
    },
    {
     "l": "Arrêter automatiquement les VM de développement",
     "a": 1
    },
    {
     "l": "Interdire les IP publiques dans Sub-Dev",
     "a": 2
    },
    {
     "l": "Autoriser RG-Bastion 6 mois avec une justification",
     "a": 3
    },
    {
     "l": "Ajouter le sous-réseau à VNet-Core",
     "a": 5
    }
   ],
   "expl": "<ul><li><b>Budget :</b> une alerte sur le coût <b>prévu</b> prévient avant que le montant soit atteint. Un budget n'arrête rien seul : il faut un <b>groupe d'actions</b> qui lance un runbook.</li><li><b>IP publiques :</b> une stratégie Deny bloque la création. Pour RG-Bastion, une <b>exemption</b> porte une catégorie, une justification et une date d'expiration ; une exclusion n'a ni durée ni trace de justification.</li><li><b>VNet-Core :</b> un verrou Lecture seule bloque l'ajout d'un sous-réseau pour tous, quel que soit le rôle. Il faut le retirer le temps de la modification, puis le recréer.</li></ul>",
   "portal": {
    "path": [
     "Stratégie",
     "Exemptions"
    ],
    "title": "ex-bastion | Exemption",
    "menu": [
     "Affectations",
     "*Exemptions"
    ],
    "rows": [
     [
      "*Étendue",
      "Sub-Dev/RG-Bastion"
     ],
     [
      "Catégorie",
      "Dérogation"
     ],
     [
      "Expiration",
      "Dans 6 mois"
     ]
    ]
   },
   "keep": "Budget = alerte, groupe d'actions = action. Exception tracée et datée = exemption. Verrou Lecture seule : le retirer le temps du changement."
  },
  {
   "id": "C014-5",
   "dom": 1,
   "type": "cmd",
   "stem": "<p>Vous devez répondre à l'exigence 6 avec Azure CLI. L'exception de RG-Bastion est acceptée sans mesure compensatoire. Comment devez-vous compléter les commandes ?</p>",
   "rows": [
    {
     "l": "--scope",
     "o": [
      "/providers/Microsoft.Management/managementGroups/MG-NonProd",
      "/subscriptions/$subDevId/resourceGroups/RG-Bastion",
      "/subscriptions/$subDevId"
     ],
     "a": 2
    },
    {
     "l": "--enforcement-mode",
     "o": [
      "DoNotEnforce",
      "Default"
     ],
     "a": 1
    },
    {
     "l": "--exemption-category",
     "o": [
      "Mitigated",
      "Waiver"
     ],
     "a": 1
    }
   ],
   "tpl": "az policy assignment create --name deny-pip --policy $denyPipId --scope {0} --enforcement-mode {1} && az policy exemption create --name ex-bastion --policy-assignment $assignmentId --scope $rgBastionId --exemption-category {2} --expires-on 2027-05-01",
   "expl": "<ul><li><b>/subscriptions/Sub-Dev :</b> l'exigence vise Sub-Dev seul ; MG-NonProd couvrirait aussi les futurs abonnements arrivés sous ce groupe (exigence 4).</li><li><b>Default :</b> l'effet Deny est appliqué. DoNotEnforce ne ferait qu'évaluer la conformité.</li><li><b>Waiver :</b> la catégorie Dérogation correspond à une exception acceptée sans mesure compensatoire ; Mitigated signifie que l'objectif est atteint autrement.</li></ul>",
   "portal": {
    "path": [
     "Stratégie",
     "Affectations"
    ],
    "title": "deny-pip | Affectation",
    "menu": [
     "*Affectations",
     "Exemptions"
    ],
    "rows": [
     [
      "*Étendue",
      "Sub-Dev"
     ],
     [
      "Application de la stratégie",
      "Activée"
     ]
    ]
   },
   "keep": "Exemption : Waiver (dérogation) ou Mitigated (atténuée), avec une date d'expiration."
  },
  {
   "id": "C014-6",
   "dom": 1,
   "type": "single",
   "stem": "<p>Pour l'exigence 7, un membre d'Ops essaie de supprimer le verrou de VNet-Core et reçoit une erreur d'autorisation. Que devez-vous lui attribuer, avec le moins de privilèges ?</p>",
   "opts": [
    "Un rôle personnalisé avec locks/*",
    "Contributeur de réseau sur RG-Core",
    "Contributeur sur RG-Core, en plus de MG-Prod",
    "Contributeur de stratégie de ressource sur Sub-Prod1"
   ],
   "ans": 0,
   "expl": "<p>Gérer les verrous exige les actions Microsoft.Authorization/locks/*, que seuls Propriétaire, Administrateur de l'accès utilisateur et des rôles personnalisés incluent. Contributeur et Contributeur de réseau excluent Microsoft.Authorization (écriture) par leurs NotActions ; un second Contributeur n'y change rien. Un rôle personnalisé limité aux verrous donne le moins de privilèges.</p>",
   "portal": {
    "path": [
     "Abonnements",
     "Sub-Prod1",
     "Contrôle d'accès (IAM)"
    ],
    "title": "Rôle personnalisé Lock Operator",
    "menu": [
     "*Rôles"
    ],
    "rows": [
     [
      "*Actions",
      "Microsoft.Authorization/locks/*"
     ],
     [
      "AssignableScopes",
      "/subscriptions/Sub-Prod1"
     ]
    ]
   },
   "keep": "Verrous : locks/* (Propriétaire, Administrateur de l'accès utilisateur ou rôle personnalisé)."
  },
  {
   "id": "C014-7",
   "dom": 1,
   "type": "hotspot",
   "stem": "<p>Vous devez lancer la correction de l'exigence 3. Quel élément du menu Azure Policy devez-vous sélectionner ? Pour répondre, sélectionnez l'élément approprié du menu.</p>",
   "ans": "Correction",
   "win": {
    "title": "Stratégie",
    "nav": [
     {
      "g": "Création",
      "items": [
       "Définitions",
       "Affectations",
       "Exemptions"
      ]
     },
     {
      "g": "Analyse",
      "items": [
       "Vue d'ensemble",
       "Conformité",
       "Correction",
       "Événements"
      ]
     },
     {
      "g": "Associés",
      "items": [
       "Plans directeurs (blueprints)",
       "Graphe de ressources"
      ]
     }
    ]
   },
   "expl": "<p>La page <b>Correction</b> liste les affectations DeployIfNotExists et Modify qui ont des ressources non conformes, et permet de créer une tâche de correction. Conformité montre l'état des ressources, Exemptions les exceptions.</p>",
   "portal": {
    "path": [
     "Stratégie",
     "Correction"
    ],
    "title": "Correction",
    "menu": [
     "*Correction"
    ],
    "rows": [
     [
      "*PA3",
      "128 ressources à corriger"
     ]
    ],
    "btn": "Corriger"
   },
   "keep": "Tâche de correction : Stratégie > Correction."
  }
 ]
}
);
