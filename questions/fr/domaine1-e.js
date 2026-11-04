/* Domaine 1 : identités et gouvernance (lot E : D1-161 à D1-230) */
AZ.questions.push(
{
 "id": "D1-161",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez créer un utilisateur avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Groupe de commandes",
   "o": [
    "ad",
    "account",
    "identity"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--user-principal-name",
    "--mail",
    "--upn-suffix"
   ],
   "a": 0
  }
 ],
 "expl": "<p>La commande est <code>az ad user create --display-name ... --user-principal-name marie@contoso.com --password ...</code>.</p><ul><li><b>az ad</b> gère les objets Microsoft Entra (utilisateurs, groupes, applications). <b>az account</b> gère les abonnements de votre session ; <b>az identity</b> gère les identités managées attribuées par l'utilisateur.</li><li>L'identifiant de connexion est le <b>nom d'utilisateur principal</b> (UPN). <code>--mail</code> et <code>--upn-suffix</code> ne sont pas des paramètres de cette commande.</li></ul>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Commande",
    "az ad user create --display-name \"Marie Durand\" --user-principal-name marie@contoso.com --password …"
   ],
   [
    "Résultat",
    "Utilisateur visible dans Entra ID > Utilisateurs"
   ]
  ]
 },
 "keep": "az ad = objets Entra (user, group, sp). az account = abonnements. az identity = identités managées.",
 "tpl": "az {0} user create --display-name \"Marie Durand\" {1} marie@contoso.com --password \"P@ssw0rd2026!\""
},
{
 "id": "D1-162",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez ajouter l'utilisateur dont l'ID d'objet est stocké dans $userId au groupe GRP-Support, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Add-AzADGroupMember",
    "New-AzRoleAssignment",
    "Set-AzADUser"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "-MemberObjectId",
    "-ObjectId",
    "-SignInName"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>Add-AzADGroupMember -TargetGroupObjectId $groupId -MemberObjectId $userId</code> ajoute un membre à un groupe Entra avec le module Az.</p><p>New-AzRoleAssignment attribue un rôle Azure ; Set-AzADUser modifie un utilisateur. Le paramètre qui désigne le membre ajouté est <b>-MemberObjectId</b> (ou -MemberUserPrincipalName).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | PowerShell",
  "rows": [
   [
    "*Commande",
    "Add-AzADGroupMember -TargetGroupObjectId $groupId -MemberObjectId $userId"
   ],
   [
    "Vérifier dans",
    "Entra ID > Groupes > GRP-Support > Membres"
   ]
  ]
 },
 "keep": "Ajouter un membre à un groupe Entra en Az PowerShell = Add-AzADGroupMember -MemberObjectId.",
 "tpl": "{0} -TargetGroupObjectId $groupId {1} $userId"
},
{
 "id": "D1-163",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez attribuer la stratégie intégrée dont la définition est dans $def à l'abonnement Sub1, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzPolicyAssignment",
    "New-AzPolicyDefinition",
    "Start-AzPolicyRemediation"
   ],
   "a": 0
  },
  {
   "l": "Étendue",
   "o": [
    "\"/subscriptions/&lt;id Sub1&gt;\"",
    "\"Sub1\"",
    "\"/providers/Microsoft.Management/Sub1\""
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>New-AzPolicyAssignment</b> crée une affectation ; New-AzPolicyDefinition crée une définition ; Start-AzPolicyRemediation lance une correction.</p><p>L'étendue est un <b>chemin de ressource</b> : <code>/subscriptions/&lt;id&gt;</code> pour un abonnement, <code>/subscriptions/&lt;id&gt;/resourceGroups/RG1</code> pour un groupe de ressources, <code>/providers/Microsoft.Management/managementGroups/&lt;id&gt;</code> pour un groupe d'administration. Le simple nom « Sub1 » ne suffit pas.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Stratégie | Affectations",
  "menu": [
   "Vue d'ensemble",
   "*Affectations",
   "Définitions"
  ],
  "rows": [
   [
    "*loc-fr",
    "Étendue : /subscriptions/<id Sub1>"
   ],
   [
    "Paramètre",
    "listOfAllowedLocations = francecentral"
   ]
  ]
 },
 "keep": "Une étendue s'écrit comme un chemin : /subscriptions/<id>, …/resourceGroups/RG1, /providers/Microsoft.Management/managementGroups/<id>.",
 "tpl": "{0} -Name \"loc-fr\" -PolicyDefinition $def -Scope {1} -PolicyParameterObject @{listOfAllowedLocations=@(\"francecentral\")}"
},
{
 "id": "D1-164",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez lister toutes les attributions de rôles de l'utilisateur user1@contoso.com, y compris celles héritées des étendues parentes, sur le groupe de ressources RG1.</p><p>Comment devez-vous compléter la commande Azure CLI ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Sous-commande",
   "o": [
    "list",
    "show",
    "create"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "--include-inherited",
    "--all-scopes",
    "--recursive"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az role assignment list --assignee ... --resource-group RG1 --include-inherited</code> liste les attributions sur RG1 et celles héritées de l'abonnement et des groupes d'administration.</p><p>On peut aussi ajouter <code>--include-groups</code> pour inclure les attributions reçues via les groupes. <code>--all-scopes</code> et <code>--recursive</code> n'existent pas.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "RG1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Équivalent CLI",
    "az role assignment list --assignee … --resource-group RG1 --include-inherited"
   ],
   [
    "Option utile",
    "--include-groups"
   ]
  ]
 },
 "keep": "Voir aussi l'hérité en CLI = --include-inherited ; les groupes = --include-groups.",
 "tpl": "az role assignment {0} --assignee user1@contoso.com --resource-group RG1 {1}"
},
{
 "id": "D1-165",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous créez un groupe pour les techniciens de Lyon. Il doit se remplir automatiquement avec les utilisateurs dont la ville est Lyon, et pouvoir recevoir des rôles Azure.</p><p>Comment devez-vous configurer le groupe ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Sécurité</b> : le type adapté pour attribuer des accès (rôles Azure, ressources).</li><li><b>Rôles Microsoft Entra attribuables : Non.</b> Ce réglage concerne les rôles Entra, pas les rôles Azure, et il interdit l'appartenance dynamique.</li><li><b>Utilisateur dynamique</b> avec la règle <code>(user.city -eq \"Lyon\")</code>.</li></ul><p><code>usageLocation</code> est un code pays à deux lettres (FR), pas une ville. Les appareils n'ont pas d'attribut city.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groupes",
   "Nouveau groupe"
  ],
  "title": "Nouveau groupe",
  "rows": [
   [
    "*Type de groupe",
    "Sécurité"
   ],
   [
    "Des rôles Microsoft Entra peuvent être attribués au groupe",
    "Non"
   ],
   [
    "*Type d'appartenance",
    "Utilisateur dynamique"
   ],
   [
    "*Règle",
    "(user.city -eq \"Lyon\")"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Rôles Azure sur un groupe : n'importe quel groupe de sécurité. isAssignableToRole ne sert qu'aux rôles Entra et interdit le dynamique.",
 "win": {
  "title": "Nouveau groupe",
  "sub": "Groupes | Tous les groupes",
  "rows": [
   {
    "k": "select",
    "l": "Type de groupe",
    "o": [
     "Sécurité",
     "Microsoft 365"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "text",
    "l": "Nom du groupe",
    "t": "Techniciens-Lyon"
   },
   {
    "k": "select",
    "l": "Des rôles Microsoft Entra peuvent être attribués au groupe",
    "o": [
     "Oui",
     "Non"
    ],
    "d": 1,
    "a": 1
   },
   {
    "k": "select",
    "l": "Type d'appartenance",
    "o": [
     "Attribué",
     "Utilisateur dynamique",
     "Appareil dynamique"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Règle",
    "o": [
     "(user.city -eq \"Lyon\")",
     "(device.city -eq \"Lyon\")",
     "(user.usageLocation -eq \"Lyon\")"
    ],
    "a": 0
   }
  ]
 }
},
{
 "id": "D1-166",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous configurez les paramètres de collaboration externe. Seuls les membres (pas les invités) doivent pouvoir inviter des invités. Les invités ne doivent voir que leur propre profil dans l'annuaire.</p><p>Comment devez-vous configurer la page ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Accès des invités</b> : le troisième choix, le plus restrictif, limite l'invité à ses propres objets.</li><li><b>Invitations</b> : le deuxième choix permet aux <b>membres</b> (et aux administrateurs concernés) d'inviter, mais pas aux invités ordinaires. Le premier choix laisserait aussi les invités inviter.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Identités externes"
  ],
  "title": "Paramètres de collaboration externe",
  "menu": [
   "Vue d'ensemble",
   "*Paramètres de collaboration externe"
  ],
  "rows": [
   [
    "*Accès des invités",
    "Limité à leurs propres objets"
   ],
   [
    "*Invitations",
    "Membres et administrateurs spécifiques (pas les invités)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Accès des invités et droit d'inviter : deux réglages distincts de la même page.",
 "win": {
  "title": "Paramètres de collaboration externe",
  "sub": "Identités externes",
  "rows": [
   {
    "k": "head",
    "t": "Accès des utilisateurs invités"
   },
   {
    "k": "radio",
    "l": "Restrictions d'accès des utilisateurs invités",
    "opts": [
     "Les utilisateurs invités disposent du même accès que les membres",
     "Les utilisateurs invités ont un accès limité aux propriétés et aux appartenances des objets d'annuaire",
     "L'accès des utilisateurs invités est limité aux propriétés et aux appartenances de leurs propres objets d'annuaire"
    ],
    "d": 1,
    "a": 2
   },
   {
    "k": "head",
    "t": "Paramètres d'invitation d'invités"
   },
   {
    "k": "radio",
    "l": "Restrictions d'invitation des invités",
    "opts": [
     "Tous les membres de l'organisation peuvent inviter des utilisateurs invités, y compris les invités et les non-administrateurs",
     "Les utilisateurs membres et les utilisateurs ayant des rôles d'administrateur spécifiques peuvent inviter des utilisateurs invités, y compris les invités disposant d'autorisations de membre",
     "Seuls les utilisateurs ayant des rôles d'administrateur spécifiques peuvent inviter des utilisateurs invités",
     "Personne dans l'organisation ne peut inviter des utilisateurs invités, y compris les administrateurs"
    ],
    "d": 0,
    "a": 1
   }
  ]
 }
},
{
 "id": "D1-167",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous ajoutez une attribution de rôle sur le groupe de ressources RG-Web. Les membres du groupe GRP-Web doivent pouvoir gérer les applications web de RG-Web, sans pouvoir attribuer de rôles ni gérer d'autres types de ressources.</p><p>Comment devez-vous configurer l'attribution ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<p><b>Contributeur de site web</b> gère les applications web (sans le plan App Service ni les autres ressources). On l'attribue à un <b>groupe</b>, donc via « Utilisateur, groupe ou principal de service », en sélectionnant GRP-Web.</p><p>Propriétaire et Contributeur donnent accès à tous les types de ressources. Lecteur ne permet pas de gérer. « Identité managée » sert aux ressources Azure, pas à un groupe d'utilisateurs.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG-Web"
  ],
  "title": "RG-Web | Ajouter une attribution de rôle",
  "menu": [
   "*Rôle",
   "Membres",
   "Vérifier + attribuer"
  ],
  "rows": [
   [
    "*Rôle",
    "Contributeur de site web"
   ],
   [
    "Attribuer l'accès à",
    "Utilisateur, groupe ou principal de service"
   ],
   [
    "Membres",
    "GRP-Web"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Gérer un seul type de ressource = rôle spécialisé (Contributeur de site web pour les applications web).",
 "win": {
  "title": "Ajouter une attribution de rôle",
  "sub": "RG-Web | Contrôle d'accès (IAM)",
  "rows": [
   {
    "k": "select",
    "l": "Rôle",
    "o": [
     "Propriétaire",
     "Contributeur",
     "Contributeur de site web",
     "Lecteur"
    ],
    "a": 2
   },
   {
    "k": "radio",
    "l": "Attribuer l'accès à",
    "opts": [
     "Utilisateur, groupe ou principal de service",
     "Identité managée"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Membres",
    "o": [
     "GRP-Web",
     "Tous les utilisateurs du locataire",
     "Identité de RG-Web"
    ],
    "a": 0
   }
  ]
 }
},
{
 "id": "D1-168",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez limiter les domaines vers lesquels les utilisateurs peuvent envoyer des invitations B2B.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Paramètres de collaboration externe",
 "expl": "<p>Les <b>Restrictions de collaboration</b> (liste d'autorisation ou de refus de domaines) se trouvent dans <b>Paramètres de collaboration externe</b>, avec les restrictions d'accès et d'invitation des invités.</p><p>Les paramètres d'accès interlocataire règlent la confiance avec d'autres locataires Entra précis. Les fournisseurs d'identité et les flux d'utilisateurs servent à l'inscription en libre-service.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Identités externes"
  ],
  "title": "Paramètres de collaboration externe",
  "menu": [
   "Vue d'ensemble",
   "Tous les fournisseurs d'identité",
   "*Paramètres de collaboration externe",
   "Paramètres d'accès interlocataire"
  ],
  "rows": [
   [
    "*Restrictions de collaboration",
    "Autoriser uniquement les domaines spécifiés"
   ]
  ]
 },
 "keep": "Domaines invitables = Paramètres de collaboration externe > Restrictions de collaboration.",
 "win": {
  "title": "Identités externes | Vue d'ensemble",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Configuration multilocataire"
    ]
   },
   {
    "g": "",
    "items": [
     "Tous les fournisseurs d'identité",
     "Paramètres de collaboration externe",
     "Flux d'utilisateurs",
     "Paramètres d'accès interlocataire",
     "Connecteurs d'API personnalisés"
    ]
   },
   {
    "g": "Abonnements",
    "items": [
     "Utilisation et licences"
    ]
   }
  ]
 }
},
{
 "id": "D1-169",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez permettre aux utilisateurs de réinitialiser leur mot de passe avec deux méthodes d'authentification au lieu d'une.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Méthodes d'authentification",
 "expl": "<p>La page <b>Méthodes d'authentification</b> contient « Nombre de méthodes requises pour la réinitialisation » (1 ou 2) et la liste des méthodes proposées.</p><ul><li><b>Propriétés</b> : qui a accès à SSPR (Aucun, Sélectionné, Tous).</li><li><b>Inscription</b> : obligation de s'inscrire à la connexion.</li><li><b>Intégration locale</b> : réécriture du mot de passe vers l'AD local.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Réinitialisation du mot de passe"
  ],
  "title": "Réinitialisation du mot de passe | Méthodes d'authentification",
  "menu": [
   "Propriétés",
   "*Méthodes d'authentification",
   "Inscription"
  ],
  "rows": [
   [
    "*Nombre de méthodes requises pour la réinitialisation",
    "2"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "SSPR : Propriétés = qui ; Méthodes = combien et lesquelles ; Inscription = obligation ; Intégration locale = réécriture.",
 "win": {
  "title": "Réinitialisation du mot de passe | Propriétés",
  "nav": [
   {
    "g": "Gérer",
    "items": [
     "Propriétés",
     "Méthodes d'authentification",
     "Inscription",
     "Notifications",
     "Personnalisation",
     "Intégration locale"
    ]
   },
   {
    "g": "Activité",
    "items": [
     "Journaux d'audit",
     "Utilisation et insights"
    ]
   }
  ]
 }
},
{
 "id": "D1-170",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez demander une augmentation du nombre de vCPU autorisés pour la famille Dsv5 dans l'abonnement Sub1.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Utilisation + quotas",
 "expl": "<p><b>Utilisation + quotas</b> affiche la consommation des quotas par région et famille de VM, et permet de demander une augmentation.</p><p><b>Fournisseurs de ressources</b> sert à inscrire un service (erreur MissingSubscriptionRegistration). Les autres options n'ont pas de lien avec les quotas.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Sub1 | Utilisation + quotas",
  "menu": [
   "Vue d'ensemble",
   "Fournisseurs de ressources",
   "*Utilisation + quotas"
  ],
  "rows": [
   [
    "*Standard DSv5 Family vCPUs",
    "20 / 20"
   ]
  ],
  "btn": "Nouvelle demande de quota"
 },
 "keep": "Quotas = Utilisation + quotas. Erreur d'inscription de service = Fournisseurs de ressources.",
 "win": {
  "title": "Sub1 | Abonnement",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité",
     "Contrôle d'accès (IAM)",
     "Étiquettes"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Ressources",
     "Groupes de ressources",
     "Fournisseurs de ressources",
     "Utilisation + quotas",
     "Stratégies",
     "Verrous"
    ]
   },
   {
    "g": "Gestion des coûts",
    "items": [
     "Analyse des coûts",
     "Budgets",
     "Advisor recommendations"
    ]
   }
  ]
 }
},
{
 "id": "D1-171",
 "dom": 1,
 "type": "order",
 "stem": "<p>Les membres du groupe GRP-Helpdesk de Lille doivent réinitialiser les mots de passe des seuls utilisateurs de Lille. Rien n'existe encore.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>On crée l'<b>unité administrative</b>, on y place les <b>utilisateurs</b> concernés (manuellement ou par une règle dynamique), puis on attribue le rôle Entra <b>Administrateur du support technique</b> avec l'étendue de l'unité. Le groupe doit pouvoir recevoir des rôles Entra (option choisie à sa création).</p><p>Contributeur et les groupes d'administration relèvent des ressources Azure, pas de l'annuaire.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Unités administratives",
   "AU-Lille"
  ],
  "title": "AU-Lille | Rôles et administrateurs",
  "menu": [
   "Vue d'ensemble",
   "Utilisateurs",
   "*Rôles et administrateurs"
  ],
  "rows": [
   [
    "*Rôle",
    "Administrateur du support technique"
   ],
   [
    "Affectation",
    "GRP-Helpdesk"
   ]
  ],
  "btn": "+ Ajouter des affectations"
 },
 "keep": "Délégation par agence : unité administrative, ses membres, puis rôle Entra limité à l'unité.",
 "acts": [
  "Créer l'unité administrative AU-Lille",
  "Ajouter les utilisateurs de Lille à AU-Lille",
  "Attribuer le rôle Administrateur du support technique à GRP-Helpdesk avec l'étendue AU-Lille",
  "Attribuer le rôle Contributeur à GRP-Helpdesk sur l'abonnement",
  "Créer un groupe d'administration Lille"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D1-172",
 "dom": 1,
 "type": "order",
 "stem": "<p>Vous devez mettre en place un budget sur RG-Prod qui envoie un SMS à l'astreinte quand 90 % du budget est consommé. Aucun groupe d'actions n'existe.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Le <b>groupe d'actions</b> doit exister pour être sélectionné dans le budget (on peut aussi le créer pendant l'assistant, mais il reste un prérequis logique). On crée ensuite le <b>budget</b>, puis la <b>condition d'alerte</b> à 90 % qui utilise ce groupe d'actions.</p><p>Azure Policy et les verrous ne servent pas aux alertes de coût.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG-Prod"
  ],
  "title": "RG-Prod | Budgets › Définir des alertes",
  "menu": [
   "Créer un budget",
   "*Définir des alertes"
  ],
  "rows": [
   [
    "*Type",
    "Réel"
   ],
   [
    "*% du budget",
    "90"
   ],
   [
    "*Groupe d'actions",
    "AG-Astreinte (SMS)"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Budget qui prévient par SMS : groupe d'actions, budget, puis condition d'alerte liée.",
 "acts": [
  "Créer un groupe d'actions avec une notification SMS",
  "Créer le budget sur RG-Prod avec le montant mensuel",
  "Ajouter une condition d'alerte Réel à 90 % liée au groupe d'actions",
  "Créer une stratégie Azure Policy avec l'effet Deny",
  "Appliquer un verrou ReadOnly sur RG-Prod"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D1-173",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'étendue minimale d'attribution pour chaque besoin.</p><p>Pour répondre, faites glisser l'étendue appropriée vers chaque besoin. Chaque étendue peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Étendues",
 "tgtHead": [
  "Besoin",
  "Étendue"
 ],
 "srcs": [
  "Groupe d'administration",
  "Abonnement",
  "Groupe de ressources",
  "Ressource"
 ],
 "tgts": [
  {
   "l": "Un auditeur doit lire les ressources de tous les abonnements de la division Finance",
   "a": 0
  },
  {
   "l": "Un développeur gère toutes les ressources du projet Alpha, regroupées dans un même conteneur",
   "a": 2
  },
  {
   "l": "Un opérateur redémarre uniquement la VM SQL01",
   "a": 3
  },
  {
   "l": "L'équipe réseau gère les réseaux de tout l'abonnement Prod",
   "a": 1
  }
 ],
 "expl": "<ul><li>Plusieurs abonnements : <b>groupe d'administration</b> qui les contient.</li><li>Ressources d'un projet regroupées : <b>groupe de ressources</b>.</li><li>Une seule VM : <b>ressource</b>.</li><li>Tout un abonnement : <b>abonnement</b>.</li></ul><p>Le principe : attribuer au plus bas niveau qui couvre tout le besoin, puisque les rôles s'héritent vers le bas.</p>",
 "portal": {
  "path": [
   "Groupes d'administration",
   "MG-Finance"
  ],
  "title": "MG-Finance | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "Abonnements",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Rôle",
    "Lecteur"
   ],
   [
    "Membres",
    "Auditeur"
   ],
   [
    "Hérité par",
    "Tous les abonnements de MG-Finance"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Attribuer au plus bas niveau qui couvre tout le besoin : plusieurs abonnements = groupe d'administration ; une VM = ressource."
},
{
 "id": "D1-174",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez associer chaque type d'identité à sa description.</p><p>Pour répondre, faites glisser le type approprié vers chaque description. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Identités",
 "tgtHead": [
  "Description",
  "Type"
 ],
 "srcs": [
  "Utilisateur membre",
  "Utilisateur invité",
  "Principal de service",
  "Identité managée"
 ],
 "tgts": [
  {
   "l": "Identité d'une application inscrite, qui s'authentifie avec un secret ou un certificat",
   "a": 2
  },
  {
   "l": "Identité d'une ressource Azure dont Azure gère automatiquement les informations d'identification",
   "a": 3
  },
  {
   "l": "Personne d'une organisation partenaire, qui se connecte avec son propre compte",
   "a": 1
  },
  {
   "l": "Employé dont le compte appartient à votre locataire",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Principal de service</b> : l'instance d'une application dans le locataire. Vous gérez son secret ou son certificat.</li><li><b>Identité managée</b> : un principal de service particulier, lié à une ressource, sans secret à gérer.</li><li><b>Invité</b> : compte B2B qui s'authentifie dans son organisation d'origine.</li><li><b>Membre</b> : compte interne.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Applications d'entreprise"
  ],
  "title": "Applications d'entreprise | Toutes les applications",
  "menu": [
   "*Toutes les applications"
  ],
  "rows": [
   [
    "Type d'application",
    "Applications d'entreprise · Identités managées"
   ],
   [
    "*Principal de service",
    "Secret ou certificat à gérer"
   ],
   [
    "*Identité managée",
    "Informations d'identification gérées par Azure"
   ]
  ]
 },
 "keep": "Principal de service = identité d'application avec secret. Identité managée = principal de service sans secret, lié à Azure."
},
{
 "id": "D1-175",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer où se trouve chaque paramètre dans Microsoft Entra ID.</p><p>Pour répondre, faites glisser l'emplacement approprié vers chaque paramètre. Chaque emplacement peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Emplacements",
 "tgtHead": [
  "Paramètre",
  "Emplacement"
 ],
 "srcs": [
  "Paramètres utilisateur",
  "Paramètres de l'appareil",
  "Paramètres de collaboration externe",
  "Groupes > Expiration"
 ],
 "tgts": [
  {
   "l": "Les utilisateurs peuvent inscrire des applications",
   "a": 0
  },
  {
   "l": "Exiger l'authentification multifacteur pour joindre des appareils",
   "a": 1
  },
  {
   "l": "Durée de vie des groupes Microsoft 365",
   "a": 3
  },
  {
   "l": "Qui peut inviter des invités",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Paramètres utilisateur</b> : inscription d'applications, création de locataires, accès au centre d'administration.</li><li><b>Paramètres de l'appareil</b> : jonction, inscription, authentification multifacteur pour joindre, nombre maximal d'appareils.</li><li><b>Groupes > Expiration</b> : durée de vie des groupes Microsoft 365.</li><li><b>Collaboration externe</b> : invitations et accès des invités.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Utilisateurs"
  ],
  "title": "Utilisateurs | Paramètres utilisateur",
  "menu": [
   "Tous les utilisateurs",
   "*Paramètres utilisateur"
  ],
  "rows": [
   [
    "*Les utilisateurs peuvent inscrire des applications",
    "Oui / Non"
   ],
   [
    "Ailleurs",
    "Appareils, Groupes > Expiration, Collaboration externe"
   ]
  ]
 },
 "keep": "Applications et locataires = Paramètres utilisateur ; MFA pour joindre = Paramètres de l'appareil ; durée des groupes = Expiration ; invitations = Collaboration externe."
},
{
 "id": "D1-176",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>User16 est membre du groupe GRP-A. GRP-A est membre du groupe GRP-B. Le rôle Contributeur est attribué à GRP-B sur RG1.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "User16 a le rôle Contributeur sur RG1.",
   "a": 0
  },
  {
   "l": "Si User16 quitte GRP-A, il perd le rôle Contributeur sur RG1.",
   "a": 0
  },
  {
   "l": "Pour donner ce rôle à User16, il faut obligatoirement l'attribuer directement à son compte.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Contributeur : Oui.</b> Les attributions de rôles Azure prennent en compte les <b>groupes imbriqués</b> : un membre de GRP-A, lui-même membre de GRP-B, reçoit le rôle de GRP-B. (C'est différent des licences par groupe, qui ignorent l'imbrication.)</li><li><b>Quitter GRP-A : Oui.</b> Il n'est alors plus membre, même indirect, de GRP-B.</li><li><b>Attribution directe obligatoire : Non.</b> Passer par les groupes est justement la bonne pratique.</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "RG1 | Vérifier l'accès › User16",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Contributeur",
    "Via GRP-B (membre via GRP-A)"
   ]
  ]
 },
 "keep": "Rôles Azure : les groupes imbriqués comptent. Licences par groupe : non."
},
{
 "id": "D1-177",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous configurez la réinitialisation de mot de passe en libre-service.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Avec la valeur « Sélectionné », vous pouvez choisir plusieurs groupes.",
   "a": 1
  },
  {
   "l": "Les utilisateurs peuvent être avertis par e-mail lorsque leur mot de passe est réinitialisé.",
   "a": 0
  },
  {
   "l": "Les administrateurs peuvent être avertis quand un autre administrateur réinitialise son mot de passe.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Plusieurs groupes : Non.</b> Le portail ne permet de choisir qu'<b>un seul groupe</b> pour l'étendue « Sélectionné ». Pour plusieurs équipes, on les regroupe dans un groupe parent.</li><li><b>Notification utilisateur : Oui.</b> Réglage « Notifier les utilisateurs lors de la réinitialisation de mot de passe ».</li><li><b>Notification des administrateurs : Oui.</b> Réglage « Notifier tous les administrateurs lorsque d'autres administrateurs réinitialisent leur mot de passe ».</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Réinitialisation du mot de passe"
  ],
  "title": "Réinitialisation du mot de passe | Notifications",
  "menu": [
   "Propriétés",
   "Méthodes d'authentification",
   "Inscription",
   "*Notifications"
  ],
  "rows": [
   [
    "*Notifier les utilisateurs lors de la réinitialisation de mot de passe",
    "Oui"
   ],
   [
    "*Notifier tous les administrateurs lorsque d'autres administrateurs réinitialisent leur mot de passe",
    "Oui"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "SSPR « Sélectionné » = un seul groupe. Deux notifications possibles : utilisateur et administrateurs."
},
{
 "id": "D1-178",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>L'abonnement Sub1 contient RG1. Un verrou <b>Lecture seule</b> est appliqué à RG1.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un Propriétaire de Sub1 peut créer une nouvelle ressource dans RG1.",
   "a": 1
  },
  {
   "l": "Un Propriétaire de Sub1 peut supprimer le verrou.",
   "a": 0
  },
  {
   "l": "Un Lecteur peut toujours consulter les ressources de RG1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Créer une ressource : Non.</b> La lecture seule bloque toute écriture dans RG1, quel que soit le rôle.</li><li><b>Supprimer le verrou : Oui.</b> Le Propriétaire a les actions Microsoft.Authorization/locks/*. Le verrou n'empêche pas sa propre suppression.</li><li><b>Consulter : Oui.</b> La lecture n'est jamais bloquée.</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "RG1 | Verrous",
  "menu": [
   "Vue d'ensemble",
   "*Verrous"
  ],
  "rows": [
   [
    "*Type de verrou",
    "Lecture seule"
   ],
   [
    "Créer une ressource",
    "Bloqué"
   ],
   [
    "Supprimer le verrou (Propriétaire)",
    "Autorisé"
   ]
  ]
 },
 "keep": "Lecture seule bloque toute écriture, sauf la suppression du verrou par qui en a le droit."
},
{
 "id": "D1-179",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous attribuez une stratégie <b>Exiger une étiquette sur les ressources</b> (étiquette Service, effet Deny) au groupe de ressources RG2. RG2 contient déjà VM1, sans étiquette.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "VM1 continue de fonctionner.",
   "a": 0
  },
  {
   "l": "Vous pouvez créer un disque dans RG2 sans l'étiquette Service.",
   "a": 1
  },
  {
   "l": "Modifier une propriété de VM1 sans lui ajouter l'étiquette sera refusé.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM1 fonctionne : Oui.</b> Deny n'agit pas sur l'existant ; VM1 est seulement non conforme.</li><li><b>Disque sans étiquette : Non.</b> Toute nouvelle ressource de RG2 doit porter l'étiquette.</li><li><b>Modifier VM1 : Oui (refusé).</b> Une mise à jour d'une ressource non conforme est évaluée comme une création : sans l'étiquette, elle est refusée. C'est un effet de bord fréquent de Deny sur l'existant.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration"
  ],
  "rows": [
   [
    "Enregistrer une modification",
    "Échec : RequestDisallowedByPolicy"
   ],
   [
    "*Raison",
    "Étiquette Service manquante"
   ]
  ]
 },
 "keep": "Deny et l'existant : rien ne s'arrête, mais toute mise à jour non conforme est refusée."
},
{
 "id": "D1-180",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous examinez la définition de rôle suivante :</p><pre>{\n  \"Name\": \"Support Stockage\",\n  \"Actions\": [\"Microsoft.Storage/storageAccounts/*\"],\n  \"NotActions\": [\"Microsoft.Storage/storageAccounts/delete\",\n                 \"Microsoft.Storage/storageAccounts/listKeys/action\"],\n  \"DataActions\": [],\n  \"AssignableScopes\": [\"/subscriptions/&lt;id Sub1&gt;\"]\n}</pre><p>Le rôle est attribué à User17 sur Sub1, et c'est son seul rôle.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "User17 peut créer un compte de stockage :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  },
  {
   "l": "User17 peut lister les clés d'accès d'un compte :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "User17 peut lire un blob avec son identité Microsoft Entra :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Créer : Oui.</b> <code>storageAccounts/*</code> inclut write.</li><li><b>Lister les clés : Non.</b> listKeys est exclu par NotActions, et aucun autre rôle ne l'accorde.</li><li><b>Lire un blob : Non.</b> DataActions est vide : aucun accès aux données avec son identité.</li></ul>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1",
   "Contrôle d'accès (IAM)"
  ],
  "title": "Support Stockage | Autorisations",
  "menu": [
   "Informations de base",
   "*Autorisations"
  ],
  "rows": [
   [
    "Microsoft.Storage/storageAccounts/*",
    "Autorisé"
   ],
   [
    "*listKeys/action",
    "Exclu (NotActions)"
   ],
   [
    "*DataActions",
    "Aucune"
   ]
  ]
 },
 "keep": "Sans DataActions, aucun accès aux données avec son identité ; sans listKeys, pas de clés non plus."
},
{
 "id": "D1-181",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous devez choisir l'outil adapté à chaque besoin de gestion des coûts.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Comparer le coût d'un datacenter local à celui d'Azure avant une migration :",
   "o": [
    "Analyse des coûts",
    "Calculatrice du coût total de possession (TCO)",
    "Budgets"
   ],
   "a": 1
  },
  {
   "l": "Voir la répartition des dépenses du mois dernier par groupe de ressources :",
   "o": [
    "Azure Advisor",
    "Calculatrice de prix",
    "Analyse des coûts"
   ],
   "a": 2
  },
  {
   "l": "Obtenir des recommandations pour redimensionner des VM :",
   "o": [
    "Calculatrice TCO",
    "Azure Advisor",
    "Exports de coûts"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Calculatrice TCO</b> : compare le coût d'une infrastructure locale (matériel, électricité, personnel) avec Azure.</li><li><b>Analyse des coûts</b> : dépenses réelles, groupées par service, groupe de ressources, étiquette…</li><li><b>Azure Advisor</b> : recommandations, dont le redimensionnement des VM sous-utilisées.</li></ul>",
 "portal": {
  "path": [
   "Gestion des coûts + Facturation"
  ],
  "title": "Gestion des coûts | Analyse des coûts",
  "menu": [
   "*Analyse des coûts",
   "Budgets",
   "Advisor recommendations"
  ],
  "rows": [
   [
    "*Grouper par",
    "Groupe de ressources"
   ],
   [
    "Période",
    "Mois dernier"
   ]
  ]
 },
 "keep": "Avant migration = calculatrice TCO. Dépenses réelles = analyse des coûts. Recommandations = Advisor."
},
{
 "id": "D1-182",
 "dom": 1,
 "type": "hot",
 "stem": "<p>La hiérarchie de votre organisation est la suivante : le groupe racine contient MG-Corp, qui contient MG-Prod et MG-Dev. MG-Prod contient Sub-Prod1. MG-Dev contient Sub-Dev1.</p><p>Une stratégie Deny « Emplacements autorisés : France Central » est attribuée à MG-Corp. Une stratégie Audit « Exiger l'étiquette Owner » est attribuée à MG-Dev.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Dans Sub-Prod1, une ressource en West Europe est :",
   "o": [
    "autorisée et non conforme",
    "autorisée et conforme",
    "refusée"
   ],
   "a": 2
  },
  {
   "l": "Dans Sub-Dev1, une ressource en France Central sans étiquette Owner est :",
   "o": [
    "refusée",
    "autorisée et non conforme",
    "autorisée et conforme"
   ],
   "a": 1
  },
  {
   "l": "Dans Sub-Prod1, une ressource en France Central sans étiquette Owner est :",
   "o": [
    "autorisée et non conforme",
    "refusée",
    "autorisée et conforme"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Sub-Prod1, West Europe : refusée.</b> La stratégie de MG-Corp s'applique à tous les abonnements de dessous.</li><li><b>Sub-Dev1 sans étiquette : autorisée et non conforme.</b> La région est bonne ; la stratégie d'étiquette est en Audit.</li><li><b>Sub-Prod1 sans étiquette : autorisée et conforme.</b> La stratégie d'étiquette n'est attribuée qu'à MG-Dev, elle ne concerne pas MG-Prod.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Stratégie | Affectations",
  "menu": [
   "Vue d'ensemble",
   "*Affectations"
  ],
  "rows": [
   [
    "*Emplacements autorisés (Deny)",
    "MG-Corp → MG-Prod, MG-Dev"
   ],
   [
    "*Exiger l'étiquette Owner (Audit)",
    "MG-Dev uniquement"
   ]
  ]
 },
 "keep": "Une stratégie s'applique à son étendue et en dessous, jamais aux branches voisines."
},
{
 "id": "D1-183",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous devez gérer les utilisateurs de votre locataire avec le moins d'effort possible.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Ajouter 50 consultants externes en une fois :",
   "o": [
    "Inviter des utilisateurs en bloc",
    "Microsoft Entra Connect",
    "Créer des utilisateurs en bloc"
   ],
   "a": 0
  },
  {
   "l": "Supprimer 200 comptes de stagiaires listés dans un fichier :",
   "o": [
    "Supprimer des utilisateurs en bloc",
    "Une stratégie d'expiration",
    "Un verrou"
   ],
   "a": 0
  },
  {
   "l": "Donner à chaque nouvel employé du service RH l'accès aux applications RH :",
   "o": [
    "Un groupe dynamique sur le service, avec les accès attribués au groupe",
    "Une attribution individuelle à chaque arrivée",
    "Une unité administrative RH"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Inviter en bloc</b> crée des comptes invités pour des personnes externes.</li><li><b>Supprimer en bloc</b> prend un fichier CSV des UPN à supprimer. L'expiration ne concerne que les groupes Microsoft 365.</li><li><b>Groupe dynamique</b> : chaque nouvel employé dont le service vaut RH devient membre et reçoit les accès du groupe, sans intervention. Une unité administrative délègue la gestion, elle ne donne pas d'accès.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Utilisateurs",
   "Tous les utilisateurs"
  ],
  "title": "Opérations en bloc",
  "menu": [
   "Tous les utilisateurs",
   "*Opérations en bloc"
  ],
  "rows": [
   [
    "*Inviter en bloc",
    "Externes"
   ],
   [
    "*Supprimer en bloc",
    "CSV des UPN"
   ],
   [
    "Créer en bloc",
    "Membres"
   ]
  ]
 },
 "keep": "Bloc : créer (membres), inviter (externes), supprimer (CSV). Accès automatiques = groupe dynamique."
},
{
 "id": "D1-184",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous devez permettre à User18 de gérer les verrous de toutes les ressources de l'abonnement Sub1, sans autre droit de gestion des ressources.</p><p>Pour chacune des solutions suivantes, sélectionnez Oui si elle convient. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Attribuer le rôle intégré Contributeur",
   "a": 1
  },
  {
   "l": "Attribuer Contributeur de stratégie de ressource",
   "a": 1
  },
  {
   "l": "Un rôle personnalisé avec locks/*",
   "a": 0
  },
  {
   "l": "Attribuer Administrateur de l'accès utilisateur",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Rôle personnalisé locks/* : oui</b>, c'est la solution la plus précise.</li><li><b>Administrateur de l'accès utilisateur : oui.</b> Il a <code>Microsoft.Authorization/*</code>, donc les verrous, sans droit sur les ressources elles-mêmes (mais il peut attribuer des rôles, d'où l'intérêt du rôle personnalisé pour le privilège minimum).</li><li><b>Contributeur : non.</b> Il exclut justement Microsoft.Authorization/*.</li><li><b>Contributeur de stratégie de ressource : non.</b> Il gère les stratégies, pas les verrous.</li></ul>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1",
   "Contrôle d'accès (IAM)"
  ],
  "title": "Créer un rôle personnalisé | Autorisations",
  "menu": [
   "Informations de base",
   "*Autorisations"
  ],
  "rows": [
   [
    "*Microsoft.Authorization/locks/*",
    "Lire, écrire, supprimer les verrous"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Gérer les verrous = Microsoft.Authorization/locks/* (Propriétaire, Administrateur de l'accès utilisateur, ou rôle personnalisé)."
},
{
 "id": "D1-186",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Votre locataire contient des utilisateurs cloud et des utilisateurs synchronisés depuis l'AD local. Vous devez permettre à <b>tous</b> les utilisateurs de réinitialiser eux-mêmes leur mot de passe, et que le nouveau mot de passe fonctionne aussi sur les postes du domaine local.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle est nécessaire. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Convertir les utilisateurs synchronisés en comptes cloud",
   "a": 1
  },
  {
   "l": "Créer une unité administrative pour les comptes synchronisés",
   "a": 1
  },
  {
   "l": "Activer la réécriture du mot de passe",
   "a": 0
  },
  {
   "l": "Activer SSPR pour Tous les utilisateurs",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>SSPR pour Tous : oui.</b></li><li><b>Réécriture du mot de passe : oui.</b> Sans elle, les utilisateurs synchronisés ne peuvent pas réinitialiser leur mot de passe depuis le cloud, puisque l'AD local en est la source d'autorité.</li><li><b>Unité administrative : non.</b> Elle délègue l'administration, sans rapport avec SSPR.</li><li><b>Conversion : non.</b> Elle casserait la synchronisation et l'accès aux ressources locales.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Réinitialisation du mot de passe"
  ],
  "title": "Réinitialisation du mot de passe | Intégration locale",
  "menu": [
   "*Propriétés",
   "Intégration locale"
  ],
  "rows": [
   [
    "*SSPR activée",
    "Tous"
   ],
   [
    "*Réécrire les mots de passe dans votre annuaire local",
    "Oui"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "SSPR pour des comptes synchronisés = réécriture du mot de passe obligatoire."
},
{
 "id": "D1-187",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous devez lister les actions qui sont bloquées par un verrou <b>Lecture seule</b> sur une machine virtuelle.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle est bloquée. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Se connecter en RDP à la VM",
   "a": 1
  },
  {
   "l": "Redémarrer la VM",
   "a": 0
  },
  {
   "l": "Redimensionner la VM",
   "a": 0
  },
  {
   "l": "Ajouter une étiquette à la VM",
   "a": 0
  },
  {
   "l": "Afficher les métriques de la VM",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Redimensionner, redémarrer, étiqueter : bloqués.</b> Ce sont des écritures (PUT, PATCH ou POST) sur le plan de contrôle.</li><li><b>Afficher les métriques : autorisé.</b> C'est une lecture.</li><li><b>RDP : autorisé.</b> La connexion au système d'exploitation passe par le réseau, pas par le plan de contrôle Azure.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Verrous",
  "menu": [
   "Vue d'ensemble",
   "*Verrous"
  ],
  "rows": [
   [
    "*Lecture seule",
    "Redimensionner, redémarrer, étiqueter : bloqués"
   ],
   [
    "Autorisés",
    "Métriques (lecture), RDP (réseau)"
   ]
  ]
 },
 "keep": "Lecture seule bloque PUT/PATCH/POST du plan de contrôle ; lecture et accès réseau restent possibles."
},
{
 "id": "D1-191",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez déléguer la gestion des stratégies Azure Policy (créer des définitions et des affectations) à l'équipe Gouvernance, sur le groupe d'administration MG-Corp, sans lui donner d'accès aux ressources.</p><p>Quel rôle devez-vous attribuer ?</p>",
 "opts": [
  "Contributeur sur le groupe d'administration",
  "Propriétaire",
  "Administrateur de la sécurité",
  "Contributeur de stratégie de ressource"
 ],
 "ans": 3,
 "expl": "<p><b>Contributeur de stratégie de ressource</b> crée et gère les définitions et les affectations de stratégies. Attention : pour les affectations qui utilisent une identité managée (Modify, DeployIfNotExists), il faut aussi pouvoir attribuer un rôle à cette identité.</p><p>Contributeur et Propriétaire donnent accès aux ressources. Administrateur de la sécurité est un rôle Entra.</p>",
 "portal": {
  "path": [
   "Groupes d'administration",
   "MG-Corp"
  ],
  "title": "MG-Corp | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Rôle",
    "Contributeur de stratégie de ressource"
   ],
   [
    "Membres",
    "Équipe Gouvernance"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Gérer définitions et affectations Policy = Contributeur de stratégie de ressource."
}
);
