/* Domaine 1 : identités et gouvernance (lot E : D1-161 à D1-230) */
AZ.questions.push(
{
 "id": "D1-161",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez créer un utilisateur avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az {0} user create --display-name \"Marie Durand\" {1} marie@contoso.com --password \"P@ssw0rd2026!\"",
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
 "expl": "<p>La commande est <code>az ad user create --display-name ... --user-principal-name marie@contoso.com --password ...</code>.</p><ul><li><b>az ad</b> gère les objets Microsoft Entra (utilisateurs, groupes, applications). <b>az account</b> gère les abonnements de votre session ; <b>az identity</b> gère les identités managées attribuées par l'utilisateur.</li><li>L'identifiant de connexion est le <b>nom d'utilisateur principal</b> (UPN). <code>--mail</code> et <code>--upn-suffix</code> ne sont pas des paramètres de cette commande.</li></ul>"
},
{
 "id": "D1-162",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez ajouter l'utilisateur dont l'ID d'objet est stocké dans $userId au groupe GRP-Support, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0} -TargetGroupObjectId $groupId {1} $userId",
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
 "expl": "<p><code>Add-AzADGroupMember -TargetGroupObjectId $groupId -MemberObjectId $userId</code> ajoute un membre à un groupe Entra avec le module Az.</p><p>New-AzRoleAssignment attribue un rôle Azure ; Set-AzADUser modifie un utilisateur. Le paramètre qui désigne le membre ajouté est <b>-MemberObjectId</b> (ou -MemberUserPrincipalName).</p>"
},
{
 "id": "D1-163",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez attribuer la stratégie intégrée dont la définition est dans $def à l'abonnement Sub1, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0} -Name \"loc-fr\" -PolicyDefinition $def -Scope {1} -PolicyParameterObject @{listOfAllowedLocations=@(\"francecentral\")}",
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
 "expl": "<p><b>New-AzPolicyAssignment</b> crée une affectation ; New-AzPolicyDefinition crée une définition ; Start-AzPolicyRemediation lance une correction.</p><p>L'étendue est un <b>chemin de ressource</b> : <code>/subscriptions/&lt;id&gt;</code> pour un abonnement, <code>/subscriptions/&lt;id&gt;/resourceGroups/RG1</code> pour un groupe de ressources, <code>/providers/Microsoft.Management/managementGroups/&lt;id&gt;</code> pour un groupe d'administration. Le simple nom « Sub1 » ne suffit pas.</p>"
},
{
 "id": "D1-164",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez lister toutes les attributions de rôles de l'utilisateur user1@contoso.com, y compris celles héritées des étendues parentes, sur le groupe de ressources RG1.</p><p>Comment devez-vous compléter la commande Azure CLI ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az role assignment {0} --assignee user1@contoso.com --resource-group RG1 {1}",
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
 "expl": "<p><code>az role assignment list --assignee ... --resource-group RG1 --include-inherited</code> liste les attributions sur RG1 et celles héritées de l'abonnement et des groupes d'administration.</p><p>On peut aussi ajouter <code>--include-groups</code> pour inclure les attributions reçues via les groupes. <code>--all-scopes</code> et <code>--recursive</code> n'existent pas.</p>"
},
{
 "id": "D1-165",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous créez un groupe pour les techniciens de Lyon. Il doit se remplir automatiquement avec les utilisateurs dont la ville est Lyon, et pouvoir recevoir des rôles Azure.</p><p>Comment devez-vous configurer le groupe ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "<ul><li><b>Sécurité</b> : le type adapté pour attribuer des accès (rôles Azure, ressources).</li><li><b>Rôles Microsoft Entra attribuables : Non.</b> Ce réglage concerne les rôles Entra, pas les rôles Azure, et il interdit l'appartenance dynamique.</li><li><b>Utilisateur dynamique</b> avec la règle <code>(user.city -eq \"Lyon\")</code>.</li></ul><p><code>usageLocation</code> est un code pays à deux lettres (FR), pas une ville. Les appareils n'ont pas d'attribut city.</p>"
},
{
 "id": "D1-166",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous configurez les paramètres de collaboration externe. Seuls les membres (pas les invités) doivent pouvoir inviter des invités. Les invités ne doivent voir que leur propre profil dans l'annuaire.</p><p>Comment devez-vous configurer la page ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "<ul><li><b>Accès des invités</b> : le troisième choix, le plus restrictif, limite l'invité à ses propres objets.</li><li><b>Invitations</b> : le deuxième choix permet aux <b>membres</b> (et aux administrateurs concernés) d'inviter, mais pas aux invités ordinaires. Le premier choix laisserait aussi les invités inviter.</li></ul>"
},
{
 "id": "D1-167",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous ajoutez une attribution de rôle sur le groupe de ressources RG-Web. Les membres du groupe GRP-Web doivent pouvoir gérer les applications web de RG-Web, sans pouvoir attribuer de rôles ni gérer d'autres types de ressources.</p><p>Comment devez-vous configurer l'attribution ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "<p><b>Contributeur de site web</b> gère les applications web (sans le plan App Service ni les autres ressources). On l'attribue à un <b>groupe</b>, donc via « Utilisateur, groupe ou principal de service », en sélectionnant GRP-Web.</p><p>Propriétaire et Contributeur donnent accès à tous les types de ressources. Lecteur ne permet pas de gérer. « Identité managée » sert aux ressources Azure, pas à un groupe d'utilisateurs.</p>"
},
{
 "id": "D1-168",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez limiter les domaines vers lesquels les utilisateurs peuvent envoyer des invitations B2B.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
 "ans": "Paramètres de collaboration externe",
 "expl": "<p>Les <b>Restrictions de collaboration</b> (liste d'autorisation ou de refus de domaines) se trouvent dans <b>Paramètres de collaboration externe</b>, avec les restrictions d'accès et d'invitation des invités.</p><p>Les paramètres d'accès interlocataire règlent la confiance avec d'autres locataires Entra précis. Les fournisseurs d'identité et les flux d'utilisateurs servent à l'inscription en libre-service.</p>"
},
{
 "id": "D1-169",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez permettre aux utilisateurs de réinitialiser leur mot de passe avec deux méthodes d'authentification au lieu d'une.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
 "ans": "Méthodes d'authentification",
 "expl": "<p>La page <b>Méthodes d'authentification</b> contient « Nombre de méthodes requises pour la réinitialisation » (1 ou 2) et la liste des méthodes proposées.</p><ul><li><b>Propriétés</b> : qui a accès à SSPR (Aucun, Sélectionné, Tous).</li><li><b>Inscription</b> : obligation de s'inscrire à la connexion.</li><li><b>Intégration locale</b> : réécriture du mot de passe vers l'AD local.</li></ul>"
},
{
 "id": "D1-170",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez demander une augmentation du nombre de vCPU autorisés pour la famille Dsv5 dans l'abonnement Sub1.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
 "ans": "Utilisation + quotas",
 "expl": "<p><b>Utilisation + quotas</b> affiche la consommation des quotas par région et famille de VM, et permet de demander une augmentation.</p><p><b>Fournisseurs de ressources</b> sert à inscrire un service (erreur MissingSubscriptionRegistration). Les autres options n'ont pas de lien avec les quotas.</p>"
},
{
 "id": "D1-171",
 "dom": 1,
 "type": "order",
 "stem": "<p>Les membres du groupe GRP-Helpdesk de Lille doivent réinitialiser les mots de passe des seuls utilisateurs de Lille. Rien n'existe encore.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
 "expl": "<p>On crée l'<b>unité administrative</b>, on y place les <b>utilisateurs</b> concernés (manuellement ou par une règle dynamique), puis on attribue le rôle Entra <b>Administrateur du support technique</b> avec l'étendue de l'unité. Le groupe doit pouvoir recevoir des rôles Entra (option choisie à sa création).</p><p>Contributeur et les groupes d'administration relèvent des ressources Azure, pas de l'annuaire.</p>"
},
{
 "id": "D1-172",
 "dom": 1,
 "type": "order",
 "stem": "<p>Vous devez mettre en place un budget sur RG-Prod qui envoie un SMS à l'astreinte quand 90 % du budget est consommé. Aucun groupe d'actions n'existe.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
 "expl": "<p>Le <b>groupe d'actions</b> doit exister pour être sélectionné dans le budget (on peut aussi le créer pendant l'assistant, mais il reste un prérequis logique). On crée ensuite le <b>budget</b>, puis la <b>condition d'alerte</b> à 90 % qui utilise ce groupe d'actions.</p><p>Azure Policy et les verrous ne servent pas aux alertes de coût.</p>"
},
{
 "id": "D1-173",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'étendue minimale d'attribution pour chaque besoin.</p><p>Pour répondre, faites glisser l'étendue appropriée vers chaque besoin. Chaque étendue peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Étendues",
 "srcs": [
  "Groupe d'administration",
  "Abonnement",
  "Groupe de ressources",
  "Ressource"
 ],
 "tgtHead": [
  "Besoin",
  "Étendue"
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
 "expl": "<ul><li>Plusieurs abonnements : <b>groupe d'administration</b> qui les contient.</li><li>Ressources d'un projet regroupées : <b>groupe de ressources</b>.</li><li>Une seule VM : <b>ressource</b>.</li><li>Tout un abonnement : <b>abonnement</b>.</li></ul><p>Le principe : attribuer au plus bas niveau qui couvre tout le besoin, puisque les rôles s'héritent vers le bas.</p>"
},
{
 "id": "D1-174",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez associer chaque type d'identité à sa description.</p><p>Pour répondre, faites glisser le type approprié vers chaque description. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Identités",
 "srcs": [
  "Utilisateur membre",
  "Utilisateur invité",
  "Principal de service",
  "Identité managée"
 ],
 "tgtHead": [
  "Description",
  "Type"
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
 "expl": "<ul><li><b>Principal de service</b> : l'instance d'une application dans le locataire. Vous gérez son secret ou son certificat.</li><li><b>Identité managée</b> : un principal de service particulier, lié à une ressource, sans secret à gérer.</li><li><b>Invité</b> : compte B2B qui s'authentifie dans son organisation d'origine.</li><li><b>Membre</b> : compte interne.</li></ul>"
},
{
 "id": "D1-175",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer où se trouve chaque paramètre dans Microsoft Entra ID.</p><p>Pour répondre, faites glisser l'emplacement approprié vers chaque paramètre. Chaque emplacement peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Emplacements",
 "srcs": [
  "Paramètres utilisateur",
  "Paramètres de l'appareil",
  "Paramètres de collaboration externe",
  "Groupes > Expiration"
 ],
 "tgtHead": [
  "Paramètre",
  "Emplacement"
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
 "expl": "<ul><li><b>Paramètres utilisateur</b> : inscription d'applications, création de locataires, accès au centre d'administration.</li><li><b>Paramètres de l'appareil</b> : jonction, inscription, authentification multifacteur pour joindre, nombre maximal d'appareils.</li><li><b>Groupes > Expiration</b> : durée de vie des groupes Microsoft 365.</li><li><b>Collaboration externe</b> : invitations et accès des invités.</li></ul>"
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
 "expl": "<ul><li><b>Contributeur : Oui.</b> Les attributions de rôles Azure prennent en compte les <b>groupes imbriqués</b> : un membre de GRP-A, lui-même membre de GRP-B, reçoit le rôle de GRP-B. (C'est différent des licences par groupe, qui ignorent l'imbrication.)</li><li><b>Quitter GRP-A : Oui.</b> Il n'est alors plus membre, même indirect, de GRP-B.</li><li><b>Attribution directe obligatoire : Non.</b> Passer par les groupes est justement la bonne pratique.</li></ul>"
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
 "expl": "<ul><li><b>Plusieurs groupes : Non.</b> Le portail ne permet de choisir qu'<b>un seul groupe</b> pour l'étendue « Sélectionné ». Pour plusieurs équipes, on les regroupe dans un groupe parent.</li><li><b>Notification utilisateur : Oui.</b> Réglage « Notifier les utilisateurs lors de la réinitialisation de mot de passe ».</li><li><b>Notification des administrateurs : Oui.</b> Réglage « Notifier tous les administrateurs lorsque d'autres administrateurs réinitialisent leur mot de passe ».</li></ul>"
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
 "expl": "<ul><li><b>Créer une ressource : Non.</b> La lecture seule bloque toute écriture dans RG1, quel que soit le rôle.</li><li><b>Supprimer le verrou : Oui.</b> Le Propriétaire a les actions Microsoft.Authorization/locks/*. Le verrou n'empêche pas sa propre suppression.</li><li><b>Consulter : Oui.</b> La lecture n'est jamais bloquée.</li></ul>"
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
 "expl": "<ul><li><b>VM1 fonctionne : Oui.</b> Deny n'agit pas sur l'existant ; VM1 est seulement non conforme.</li><li><b>Disque sans étiquette : Non.</b> Toute nouvelle ressource de RG2 doit porter l'étiquette.</li><li><b>Modifier VM1 : Oui (refusé).</b> Une mise à jour d'une ressource non conforme est évaluée comme une création : sans l'étiquette, elle est refusée. C'est un effet de bord fréquent de Deny sur l'existant.</li></ul>"
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
 "expl": "<ul><li><b>Créer : Oui.</b> <code>storageAccounts/*</code> inclut write.</li><li><b>Lister les clés : Non.</b> listKeys est exclu par NotActions, et aucun autre rôle ne l'accorde.</li><li><b>Lire un blob : Non.</b> DataActions est vide : aucun accès aux données avec son identité.</li></ul>"
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
 "expl": "<ul><li><b>Calculatrice TCO</b> : compare le coût d'une infrastructure locale (matériel, électricité, personnel) avec Azure.</li><li><b>Analyse des coûts</b> : dépenses réelles, groupées par service, groupe de ressources, étiquette…</li><li><b>Azure Advisor</b> : recommandations, dont le redimensionnement des VM sous-utilisées.</li></ul>"
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
 "expl": "<ul><li><b>Sub-Prod1, West Europe : refusée.</b> La stratégie de MG-Corp s'applique à tous les abonnements de dessous.</li><li><b>Sub-Dev1 sans étiquette : autorisée et non conforme.</b> La région est bonne ; la stratégie d'étiquette est en Audit.</li><li><b>Sub-Prod1 sans étiquette : autorisée et conforme.</b> La stratégie d'étiquette n'est attribuée qu'à MG-Dev, elle ne concerne pas MG-Prod.</li></ul>"
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
 "expl": "<ul><li><b>Inviter en bloc</b> crée des comptes invités pour des personnes externes.</li><li><b>Supprimer en bloc</b> prend un fichier CSV des UPN à supprimer. L'expiration ne concerne que les groupes Microsoft 365.</li><li><b>Groupe dynamique</b> : chaque nouvel employé dont le service vaut RH devient membre et reçoit les accès du groupe, sans intervention. Une unité administrative délègue la gestion, elle ne donne pas d'accès.</li></ul>"
},
{
 "id": "D1-184",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez permettre à User18 de gérer les verrous de toutes les ressources de l'abonnement Sub1, sans autre droit de gestion des ressources.</p><p>Quelles <b>deux</b> solutions conviennent ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Attribuer le rôle intégré Contributeur",
  "Attribuer le rôle intégré Contributeur de stratégie de ressource",
  "Attribuer un rôle personnalisé avec les actions Microsoft.Authorization/locks/*",
  "Attribuer le rôle intégré Administrateur de l'accès utilisateur"
 ],
 "ans": [
  2,
  3
 ],
 "expl": "<ul><li><b>Rôle personnalisé locks/* : oui</b>, c'est la solution la plus précise.</li><li><b>Administrateur de l'accès utilisateur : oui.</b> Il a <code>Microsoft.Authorization/*</code>, donc les verrous, sans droit sur les ressources elles-mêmes (mais il peut attribuer des rôles, d'où l'intérêt du rôle personnalisé pour le privilège minimum).</li><li><b>Contributeur : non.</b> Il exclut justement Microsoft.Authorization/*.</li><li><b>Contributeur de stratégie de ressource : non.</b> Il gère les stratégies, pas les verrous.</li></ul>"
},
{
 "id": "D1-185",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez permettre à un auditeur de voir la conformité Azure Policy de tout le groupe d'administration MG-Corp, sans rien modifier.</p><p>Quelles <b>deux</b> affirmations sont vraies ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Il doit être Administrateur général dans Microsoft Entra ID",
  "Le rôle Lecteur sur MG-Corp lui permet de voir la conformité",
  "L'attribution doit être faite sur MG-Corp pour couvrir tous les abonnements",
  "Il doit avoir le rôle Contributeur de stratégie de ressource"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<ul><li><b>Lecteur : oui.</b> Il lit les affectations, les définitions et les états de conformité.</li><li><b>Sur MG-Corp : oui.</b> L'héritage couvre tous les abonnements de MG-Corp.</li><li><b>Contributeur de stratégie : non.</b> Il permet de créer et modifier des stratégies, ce que l'auditeur ne doit pas faire.</li><li><b>Administrateur général : non.</b> Rôle Entra, sans rapport, et beaucoup trop puissant.</li></ul>"
},
{
 "id": "D1-186",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Votre locataire contient des utilisateurs cloud et des utilisateurs synchronisés depuis l'AD local. Vous devez permettre à <b>tous</b> les utilisateurs de réinitialiser eux-mêmes leur mot de passe, et que le nouveau mot de passe fonctionne aussi sur les postes du domaine local.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Convertir les utilisateurs synchronisés en utilisateurs cloud",
  "Créer une unité administrative pour les utilisateurs synchronisés",
  "Activer la réécriture du mot de passe dans Microsoft Entra Connect",
  "Activer SSPR pour Tous"
 ],
 "ans": [
  2,
  3
 ],
 "expl": "<ul><li><b>SSPR pour Tous : oui.</b></li><li><b>Réécriture du mot de passe : oui.</b> Sans elle, les utilisateurs synchronisés ne peuvent pas réinitialiser leur mot de passe depuis le cloud, puisque l'AD local en est la source d'autorité.</li><li><b>Unité administrative : non.</b> Elle délègue l'administration, sans rapport avec SSPR.</li><li><b>Conversion : non.</b> Elle casserait la synchronisation et l'accès aux ressources locales.</li></ul>"
},
{
 "id": "D1-187",
 "dom": 1,
 "type": "multi",
 "pick": 3,
 "stem": "<p>Vous devez lister les actions qui sont bloquées par un verrou <b>Lecture seule</b> sur une machine virtuelle.</p><p>Quelles <b>trois</b> actions sont bloquées ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Se connecter en RDP à la VM",
  "Redémarrer la VM",
  "Redimensionner la VM",
  "Ajouter une étiquette à la VM",
  "Afficher les métriques de la VM"
 ],
 "ans": [
  1,
  2,
  3
 ],
 "expl": "<ul><li><b>Redimensionner, redémarrer, étiqueter : bloqués.</b> Ce sont des écritures (PUT, PATCH ou POST) sur le plan de contrôle.</li><li><b>Afficher les métriques : autorisé.</b> C'est une lecture.</li><li><b>RDP : autorisé.</b> La connexion au système d'exploitation passe par le réseau, pas par le plan de contrôle Azure.</li></ul>"
},
{
 "id": "D1-188",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez donner à un développeur l'accès en lecture aux journaux et métriques d'Azure Monitor de l'abonnement Sub1, sans accès aux ressources.</p><p>Quel rôle respecte le principe du privilège minimum ?</p>",
 "opts": [
  "Lecteur de surveillance",
  "Contributeur de surveillance",
  "Contributeur Log Analytics",
  "Lecteur"
 ],
 "ans": 0,
 "expl": "<p><b>Lecteur de surveillance</b> (Monitoring Reader) lit toutes les données de supervision : métriques, journaux, paramètres d'alerte.</p><p>Contributeur de surveillance peut aussi modifier les paramètres de supervision. Lecteur donne en plus la lecture des ressources. Contributeur Log Analytics gère les espaces de travail.</p>"
},
{
 "id": "D1-189",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous gérez 30 abonnements. Une même stratégie personnalisée doit être appliquée à tous, et les abonnements créés plus tard doivent être couverts automatiquement.</p><p>Quelle approche demande le moins d'effort ?</p>",
 "opts": [
  "Utiliser un script planifié qui vérifie les abonnements chaque nuit",
  "Enregistrer la définition et l'attribuer au groupe d'administration racine (ou à un groupe parent commun)",
  "Appliquer un verrou sur chaque abonnement",
  "Créer la définition dans chaque abonnement et l'attribuer 30 fois"
 ],
 "ans": 1,
 "expl": "<p>Une définition enregistrée dans un <b>groupe d'administration</b> parent, et attribuée à ce groupe, s'applique à tous les abonnements présents et futurs de la hiérarchie.</p><p>30 attributions manuelles oublieraient les nouveaux abonnements. Un script refait ce qu'Azure Policy fait déjà. Un verrou ne remplace pas une stratégie.</p>"
},
{
 "id": "D1-190",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous créez l'utilisateur User19 dans Microsoft Entra ID. Vous ne lui attribuez aucun rôle.</p><p>Quelles ressources Azure User19 peut-il voir dans le portail ?</p>",
 "opts": [
  "Les ressources des abonnements dont il connaît l'ID",
  "Les ressources de son groupe de ressources par défaut",
  "Aucune ressource Azure",
  "Toutes les ressources du locataire en lecture"
 ],
 "ans": 2,
 "expl": "<p>L'accès aux ressources Azure est <b>refusé par défaut</b>. Sans attribution de rôle Azure, User19 ne voit aucun abonnement ni aucune ressource. Il peut seulement se connecter au portail et voir certaines informations de l'annuaire, selon les paramètres utilisateur.</p><p>Il n'existe pas de « groupe de ressources par défaut » par utilisateur, et connaître un ID ne donne aucun accès.</p>"
},
{
 "id": "D1-191",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez déléguer la gestion des stratégies Azure Policy (créer des définitions et des affectations) à l'équipe Gouvernance, sur le groupe d'administration MG-Corp, sans lui donner d'accès aux ressources.</p><p>Quel rôle devez-vous attribuer ?</p>",
 "opts": [
  "Contributeur",
  "Propriétaire",
  "Administrateur de la sécurité",
  "Contributeur de stratégie de ressource"
 ],
 "ans": 3,
 "expl": "<p><b>Contributeur de stratégie de ressource</b> crée et gère les définitions et les affectations de stratégies. Attention : pour les affectations qui utilisent une identité managée (Modify, DeployIfNotExists), il faut aussi pouvoir attribuer un rôle à cette identité.</p><p>Contributeur et Propriétaire donnent accès aux ressources. Administrateur de la sécurité est un rôle Entra.</p>"
},
{
 "id": "D1-192",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une stratégie avec l'effet DeployIfNotExists est attribuée à Sub1 avec une identité managée attribuée par le système. La tâche de correction échoue avec une erreur d'autorisation.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Attribuer à l'identité managée de l'affectation les rôles listés dans roleDefinitionIds de la définition, sur Sub1",
  "Passer l'effet en Audit",
  "Supprimer l'identité managée",
  "Attribuer le rôle Propriétaire à votre propre compte"
 ],
 "ans": 0,
 "expl": "<p>La définition d'une stratégie DeployIfNotExists ou Modify liste dans <b>roleDefinitionIds</b> les rôles dont l'identité a besoin. Le portail les attribue automatiquement à la création de l'affectation si vous en avez le droit ; sinon, il faut les attribuer à l'<b>identité managée</b> sur l'étendue.</p><p>Vos propres droits ne sont pas utilisés par la correction. Passer en Audit ou supprimer l'identité supprimerait la correction.</p>"
},
{
 "id": "D1-193",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre locataire Microsoft Entra compte 25 utilisateurs. Vous devez vous assurer qu'aucun utilisateur n'ait le rôle Administrateur général sans en avoir besoin.</p><p>Quelle recommandation Microsoft devez-vous suivre ?</p>",
 "opts": [
  "Supprimer tous les administrateurs généraux",
  "Limiter le nombre d'administrateurs généraux, idéalement à moins de cinq, et utiliser des rôles moins privilégiés",
  "Donner le rôle Administrateur général à tous les administrateurs",
  "Attribuer Administrateur général à un groupe dynamique"
 ],
 "ans": 1,
 "expl": "<p>Microsoft recommande d'avoir <b>moins de cinq</b> administrateurs généraux (mais au moins deux, dont un compte d'urgence) et d'utiliser des rôles plus spécifiques pour le reste.</p><p>Supprimer tous les administrateurs généraux est impossible et dangereux. Les groupes qui reçoivent des rôles Entra ne peuvent pas être dynamiques.</p>"
},
{
 "id": "D1-194",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les développeurs de Contoso doivent accéder au portail Azure avec leurs comptes de l'entreprise partenaire Fabrikam, qui dispose de son propre locataire Microsoft Entra. Vous ne devez gérer aucun mot de passe pour eux.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Synchroniser le locataire Fabrikam avec Microsoft Entra Connect",
  "Créer des comptes membres dans votre locataire",
  "Les inviter comme utilisateurs invités B2B et leur attribuer des rôles",
  "Créer des principaux de service pour chaque développeur"
 ],
 "ans": 2,
 "expl": "<p>Avec <b>Microsoft Entra B2B</b>, les invités s'authentifient dans leur propre locataire (Fabrikam) : vous ne gérez pas leurs mots de passe. Vous leur attribuez ensuite des rôles Azure comme à tout utilisateur.</p><p>Des comptes membres obligent à gérer des mots de passe. Microsoft Entra Connect synchronise un AD local, pas un autre locataire. Les principaux de service sont des identités d'applications.</p>"
},
{
 "id": "D1-195",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous attribuez à RG1 une stratégie <b>Modify</b> qui ajoute l'étiquette Env=Prod si elle manque. Un administrateur crée ensuite storage5 dans RG1 avec l'étiquette Env=Dev.</p><p>Quelle étiquette storage5 aura-t-il ?</p>",
 "opts": [
  "Env=Prod",
  "Env=Prod et Env=Dev",
  "Aucune : la création est refusée",
  "Env=Dev"
 ],
 "ans": 3,
 "expl": "<p>Une stratégie de type « ajouter l'étiquette <b>si elle manque</b> » utilise l'opération <code>addOrReplace</code> avec une condition sur l'absence de l'étiquette. Comme storage5 a déjà Env, la condition n'est pas remplie : la valeur <b>Env=Dev</b> est conservée.</p><p>Une stratégie sans cette condition, qui force la valeur, remplacerait Dev par Prod. Une étiquette ne peut pas avoir deux valeurs. Modify ne refuse jamais une requête.</p>"
},
{
 "id": "D1-196",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre à une application de créer des utilisateurs dans Microsoft Entra ID sans intervention humaine.</p><p>Que devez-vous lui accorder ?</p>",
 "opts": [
  "La permission d'application User.ReadWrite.All de Microsoft Graph, avec le consentement administrateur",
  "Une clé d'accès du compte de stockage",
  "Une identité managée sans autre configuration",
  "Le rôle Azure Contributeur sur l'abonnement"
 ],
 "ans": 0,
 "expl": "<p>Les opérations sur l'annuaire passent par <b>Microsoft Graph</b>. Une permission <b>d'application</b> (sans utilisateur connecté) comme <code>User.ReadWrite.All</code> doit recevoir le <b>consentement administrateur</b>. On peut aussi attribuer à l'application un rôle Entra comme Administrateur d'utilisateurs.</p><p>Un rôle Azure ne donne aucun droit sur l'annuaire. Une identité managée sans permission ne peut rien faire.</p>"
},
{
 "id": "D1-197",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous gérez trois environnements (Dev, Test, Prod) avec des stratégies, des budgets et des équipes différentes. Vous voulez séparer clairement leurs limites de facturation et de quotas.</p><p>Quelle organisation Microsoft recommande-t-elle ?</p>",
 "opts": [
  "Un seul abonnement avec des étiquettes Env",
  "Un abonnement par environnement, regroupés dans des groupes d'administration",
  "Un seul groupe de ressources pour tout",
  "Un locataire Microsoft Entra par environnement"
 ],
 "ans": 1,
 "expl": "<p>L'<b>abonnement</b> est une limite de facturation, de quotas et d'accès. Un abonnement par environnement, organisés en <b>groupes d'administration</b>, permet d'appliquer des stratégies et des rôles différents à chacun.</p><p>Un locataire par environnement compliquerait la gestion des identités. Les étiquettes aident à ventiler les coûts mais ne séparent ni les quotas ni les limites de sécurité.</p>"
},
{
 "id": "D1-198",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous gérez le groupe de ressources RG1 en France Central. La région France Central subit une panne complète.</p><p>Quel est l'impact sur la gestion des ressources de RG1 situées en West Europe ?</p>",
 "opts": [
  "Aucun impact possible",
  "Les ressources de West Europe s'arrêtent",
  "Les ressources de West Europe continuent de fonctionner, mais les opérations de gestion de RG1 peuvent être indisponibles",
  "RG1 est déplacé automatiquement en West Europe"
 ],
 "ans": 2,
 "expl": "<p>La région d'un groupe de ressources est celle où sont stockées ses <b>métadonnées</b>. Si elle est en panne, les ressources d'autres régions continuent de fonctionner, mais les opérations de gestion (déploiement, modification) qui dépendent de ces métadonnées peuvent échouer.</p><p>C'est pourquoi on place souvent le groupe de ressources dans la même région que ses ressources. Rien n'est déplacé automatiquement.</p>"
},
{
 "id": "D1-199",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre à un utilisateur de voir les factures et de gérer les moyens de paiement d'un contrat client Microsoft (MCA).</p><p>À quel niveau ces autorisations sont-elles gérées ?</p>",
 "opts": [
  "Dans les rôles Microsoft Entra uniquement",
  "Dans une stratégie Azure Policy",
  "Dans le contrôle d'accès (IAM) d'un groupe de ressources",
  "Dans les rôles du compte et du profil de facturation (Gestion des coûts + Facturation)"
 ],
 "ans": 3,
 "expl": "<p>Pour un contrat client Microsoft, les droits de facturation (factures, moyens de paiement, création d'abonnements) se gèrent dans <b>Gestion des coûts + Facturation</b>, avec des rôles propres au compte de facturation, au profil de facturation et à la section de facture (Propriétaire, Contributeur, Lecteur du profil de facturation…).</p><p>Le contrôle d'accès d'un groupe de ressources ne couvre pas la facturation. Azure Policy n'accorde aucun droit.</p>"
},
{
 "id": "D1-200",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un administrateur a configuré un budget mensuel de 10 000 € sur Sub1. Les dépenses atteignent 12 000 € à la fin du mois.</p><p>Que s'est-il passé pour les ressources de Sub1 ?</p>",
 "opts": [
  "Elles ont continué de fonctionner normalement",
  "Les nouvelles créations ont été bloquées",
  "Elles sont passées en lecture seule",
  "Elles ont été arrêtées à 10 000 €"
 ],
 "ans": 0,
 "expl": "<p>Un budget <b>n'impose aucune limite</b> : il surveille et envoie des alertes. Les ressources continuent de fonctionner et d'être facturées. Pour agir automatiquement, il faut un groupe d'actions relié à une automatisation.</p><p>Seuls certains abonnements à crédit (comme les offres d'évaluation ou les crédits Visual Studio) ont une limite de dépense qui désactive les ressources.</p>"
},
{
 "id": "D1-201",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre à un utilisateur de lire les secrets du coffre de clés KV2, qui utilise encore le modèle d'autorisation <b>Stratégie d'accès au coffre</b>.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Attribuer le rôle Lecteur sur KV2",
  "Ajouter une stratégie d'accès avec l'autorisation Get sur les secrets pour cet utilisateur",
  "Activer la suppression réversible",
  "Attribuer le rôle Utilisateur des secrets Key Vault à l'utilisateur"
 ],
 "ans": 1,
 "expl": "<p>Avec le modèle <b>Stratégie d'accès au coffre</b>, l'accès aux données se donne par des <b>stratégies d'accès</b> (Get, List, Set… par type d'objet). Les rôles de données RBAC comme Utilisateur des secrets n'ont <b>pas d'effet</b> tant que le coffre n'est pas passé au modèle RBAC.</p><p>Lecteur ne donne accès qu'au plan de contrôle. La suppression réversible protège contre la suppression, elle ne donne pas d'accès.</p>"
},
{
 "id": "D1-202",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous créez une identité managée <b>attribuée par l'utilisateur</b> nommée ID-App. Elle doit être utilisée par 5 applications web.</p><p>Où devez-vous attribuer les rôles nécessaires ?</p>",
 "opts": [
  "À l'administrateur qui a créé ID-App",
  "Au groupe de ressources des applications web",
  "À ID-App, une seule fois, sur les ressources cibles",
  "À chaque application web séparément"
 ],
 "ans": 2,
 "expl": "<p>L'identité attribuée par l'utilisateur est un principal unique : on lui attribue les rôles <b>une seule fois</b>, et les 5 applications qui l'utilisent en profitent. C'est l'avantage de ce type d'identité quand plusieurs ressources ont besoin des mêmes accès.</p>"
},
{
 "id": "D1-203",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un auditeur demande la preuve que la stratégie « Les comptes de stockage doivent utiliser un lien privé » est respectée dans l'abonnement Sub1 depuis trois mois.</p><p>Que devez-vous lui fournir ?</p>",
 "opts": [
  "Les journaux de connexion de Microsoft Entra ID",
  "La liste des verrous de Sub1",
  "Le rapport des recommandations Advisor",
  "L'historique de conformité d'Azure Policy pour cette affectation"
 ],
 "ans": 3,
 "expl": "<p>Azure Policy conserve l'<b>historique de conformité</b> de chaque affectation (graphique et états). On peut aussi exporter les états avec Azure Resource Graph.</p><p>Les journaux de connexion, Advisor et les verrous n'indiquent pas la conformité à une stratégie.</p>"
},
{
 "id": "D1-204",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les utilisateurs du groupe Stagiaires doivent pouvoir se connecter au portail Azure, mais ne doivent pas pouvoir consulter le centre d'administration Microsoft Entra.</p><p>Quel paramètre devez-vous activer ?</p>",
 "opts": [
  "Restreindre l'accès au centre d'administration Microsoft Entra",
  "Bloquer la connexion des utilisateurs",
  "Les utilisateurs peuvent inscrire des applications : Non",
  "Exiger l'inscription SSPR"
 ],
 "ans": 0,
 "expl": "<p>Le paramètre utilisateur <b>« Restreindre l'accès au centre d'administration Microsoft Entra »</b> empêche les non-administrateurs de parcourir l'annuaire dans le centre d'administration. Ce n'est pas une mesure de sécurité forte (Microsoft Graph et PowerShell restent utilisables), mais il répond au besoin.</p><p>Bloquer la connexion empêcherait tout accès. Les deux autres réglages n'ont pas d'effet sur la consultation de l'annuaire.</p>"
},
{
 "id": "D1-205",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez donner à User20 le droit de redémarrer les VM de tous les groupes de ressources de Sub1, actuels et futurs, mais aucun autre droit.</p><p>Quelle solution respecte le mieux le principe du privilège minimum ?</p>",
 "opts": [
  "Contributeur de machines virtuelles sur Sub1",
  "Un rôle personnalisé avec virtualMachines/read et virtualMachines/restart/action, attribué sur Sub1",
  "Un rôle personnalisé attribué sur chaque groupe de ressources",
  "Contributeur sur Sub1"
 ],
 "ans": 1,
 "expl": "<p>Un rôle personnalisé limité à la lecture et au redémarrage des VM, attribué sur <b>Sub1</b>, couvre tous les groupes de ressources, y compris les futurs.</p><p>Contributeur de machines virtuelles permet aussi de créer, modifier et supprimer des VM. L'attribuer par groupe oublierait les nouveaux groupes. Contributeur donne tous les droits.</p>"
},
{
 "id": "D1-206",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous voulez savoir si la stratégie Deny que vous allez attribuer bloquerait des ressources existantes, avant de l'appliquer réellement.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Lancer une tâche de correction",
  "Créer un verrou ReadOnly temporaire",
  "Attribuer la stratégie avec l'application de la stratégie désactivée (DoNotEnforce) et consulter la conformité",
  "Attribuer la stratégie en Deny et observer les erreurs"
 ],
 "ans": 2,
 "expl": "<p>Avec <b>Application de la stratégie : Désactivé</b> (enforcementMode = DoNotEnforce), l'affectation calcule la conformité sans bloquer. Vous voyez quelles ressources seraient non conformes, puis vous activez l'application quand vous êtes prêt.</p><p>On peut aussi utiliser un paramètre d'effet Audit. Attribuer directement en Deny risquerait de bloquer des déploiements.</p>"
},
{
 "id": "D1-207",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les administrateurs de votre organisation doivent prouver leur identité avec l'authentification multifacteur avant d'activer un rôle éligible dans Privileged Identity Management.</p><p>Où configurez-vous cette exigence ?</p>",
 "opts": [
  "Dans les paramètres de SSPR",
  "Dans Azure Policy",
  "Dans les paramètres de l'appareil",
  "Dans les paramètres du rôle dans PIM"
 ],
 "ans": 3,
 "expl": "<p>Chaque rôle géré par PIM a des <b>paramètres de rôle</b> : durée maximale d'activation, exigence d'authentification multifacteur, justification, approbation, notifications.</p><p>SSPR, Azure Policy et les paramètres de l'appareil ne contrôlent pas l'activation des rôles.</p>"
},
{
 "id": "D1-208",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une stratégie Azure Policy interdit les adresses IP publiques. Un ingénieur doit créer une adresse IP publique pour Azure Bastion dans RG-Bastion, et uniquement là, pour une durée de 6 mois, avec une trace de la justification.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Une exemption de stratégie sur RG-Bastion avec une date d'expiration",
  "Un verrou sur RG-Bastion",
  "Une seconde affectation avec l'effet Audit",
  "Un rôle personnalisé pour l'ingénieur"
 ],
 "ans": 0,
 "expl": "<p>Une <b>exemption</b> exempte une étendue d'une affectation, avec une catégorie (Dérogation ou Atténué), une description et une <b>date d'expiration</b>. C'est mieux qu'une exclusion pour un cas temporaire et justifié.</p><p>Une seconde affectation n'annule pas la première. Aucun rôle ne contourne une stratégie Deny. Un verrou n'a pas de lien.</p>"
},
{
 "id": "D1-209",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre aux utilisateurs de voir leurs licences et applications, de modifier leur mot de passe et d'enregistrer leurs méthodes d'authentification.</p><p>Vers quel portail devez-vous les diriger ?</p>",
 "opts": [
  "Le portail Azure DevOps",
  "Le portail Mon compte (myaccount.microsoft.com)",
  "Le centre d'administration Microsoft Entra",
  "Le portail Azure"
 ],
 "ans": 1,
 "expl": "<p>Le portail <b>Mon compte</b> permet à chaque utilisateur de gérer ses informations de sécurité, son mot de passe, ses appareils et de voir ses abonnements. Le portail Mes applications (myapps) liste les applications.</p><p>Le portail Azure et le centre d'administration Entra sont des outils d'administration.</p>"
},
{
 "id": "D1-210",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un administrateur a attribué par erreur le rôle Propriétaire sur l'abonnement de production à un groupe de 400 personnes. Vous devez corriger cela au plus vite.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Désactiver chaque compte du groupe",
  "Appliquer un verrou ReadOnly sur l'abonnement",
  "Supprimer l'attribution de rôle dans le contrôle d'accès (IAM) de l'abonnement",
  "Supprimer le groupe"
 ],
 "ans": 2,
 "expl": "<p>Supprimer l'<b>attribution</b> retire l'accès à tout le groupe en une opération, sans toucher au groupe lui-même, qui peut servir ailleurs.</p><p>Supprimer le groupe ou les comptes causerait d'autres dégâts. Un verrou ReadOnly bloquerait aussi les administrateurs légitimes, et ne retirerait pas le droit d'attribuer des rôles.</p>"
},
{
 "id": "D1-211",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez trouver tous les groupes de ressources de vos abonnements qui ne contiennent aucune ressource, pour les supprimer.</p><p>Quel outil permet de le faire en une seule requête ?</p>",
 "opts": [
  "Gestion des coûts",
  "Azure Policy en mode Deny",
  "Microsoft Entra ID",
  "Azure Resource Graph Explorer"
 ],
 "ans": 3,
 "expl": "<p><b>Resource Graph Explorer</b> exécute des requêtes KQL sur l'inventaire des ressources et des groupes de ressources de tous vos abonnements. Une jointure entre les tables <code>resourcecontainers</code> et <code>resources</code> trouve les groupes vides.</p><p>Gestion des coûts ne voit que ce qui coûte. Entra gère les identités. Azure Policy n'est pas un outil de requête.</p>"
},
{
 "id": "D1-212",
 "dom": 1,
 "type": "single",
 "stem": "<p>User21 a le rôle Lecteur sur l'abonnement Sub1 et le rôle Contributeur sur RG3, qui fait partie de Sub1.</p><p>Que peut-il faire ?</p>",
 "opts": [
  "Lire toutes les ressources de Sub1 et modifier celles de RG3",
  "Seulement lire les ressources de Sub1, car Lecteur est attribué plus haut",
  "Seulement modifier RG3, sans voir le reste",
  "Modifier toutes les ressources de Sub1"
 ],
 "ans": 0,
 "expl": "<p>Les rôles s'<b>additionnent</b> : Lecteur sur Sub1 donne la lecture partout, Contributeur sur RG3 ajoute la modification dans RG3.</p><p>Un rôle attribué plus haut ne restreint jamais un rôle attribué plus bas. Contributeur sur RG3 ne s'étend pas au reste de l'abonnement.</p>"
},
{
 "id": "D1-213",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre locataire Microsoft Entra contient un utilisateur nommé Admin3 qui a le rôle Administrateur d'utilisateurs. Admin3 veut réinitialiser le mot de passe d'un Administrateur général.</p><p>Peut-il le faire ?</p>",
 "opts": [
  "Oui, mais seulement si l'Administrateur général l'y autorise",
  "Non, seul un Administrateur général (ou Administrateur d'authentification privilégiée) peut le faire",
  "Oui, Administrateur d'utilisateurs peut réinitialiser tous les mots de passe",
  "Non, aucun mot de passe d'administrateur ne peut être réinitialisé"
 ],
 "ans": 1,
 "expl": "<p>Administrateur d'utilisateurs peut réinitialiser le mot de passe des utilisateurs non administrateurs et de certains rôles limités, mais <b>pas</b> celui d'un Administrateur général. Il faut un rôle au moins aussi privilégié : Administrateur général ou Administrateur d'authentification privilégiée.</p><p>Cette règle empêche un administrateur de prendre le contrôle d'un compte plus puissant que le sien.</p>"
},
{
 "id": "D1-214",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre à un utilisateur de consulter la liste des attributions de rôles Azure sur Sub1, sans pouvoir rien modifier, ni les ressources ni les accès.</p><p>Quel rôle suffit ?</p>",
 "opts": [
  "Propriétaire",
  "Contributeur",
  "Lecteur",
  "Administrateur de l'accès utilisateur"
 ],
 "ans": 2,
 "expl": "<p><b>Lecteur</b> inclut <code>*/read</code>, donc <code>Microsoft.Authorization/roleAssignments/read</code> : il voit les attributions de rôles dans l'onglet IAM, sans pouvoir en créer.</p><p>Les autres rôles permettent de modifier des ressources ou des accès.</p>"
},
{
 "id": "D1-215",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une entreprise veut appliquer automatiquement, dans chaque nouvel abonnement, un ensemble de stratégies, d'attributions de rôles et de ressources réseau de base. Azure Blueprints n'est plus recommandé.</p><p>Quelle approche Microsoft recommande-t-elle aujourd'hui ?</p>",
 "opts": [
  "Un script exécuté manuellement par chaque administrateur",
  "Des étiquettes sur les abonnements",
  "Des verrous sur la racine",
  "Des initiatives Azure Policy et des modèles (Template Specs ou piles de déploiement)"
 ],
 "ans": 3,
 "expl": "<p>Azure Blueprints est en cours de retrait. Microsoft recommande de combiner les <b>initiatives Azure Policy</b> (gouvernance) et des <b>modèles</b> ARM ou Bicep publiés en Template Specs, ou des <b>piles de déploiement</b> (deployment stacks), qui peuvent en plus protéger les ressources avec des affectations de refus.</p>"
},
{
 "id": "D1-216",
 "dom": 1,
 "type": "single",
 "stem": "<p>Dans le portail, l'option <b>Supprimer</b> du compte de stockage storage8 renvoie l'erreur : « The scope ... cannot perform delete operation because following scope(s) are locked ».</p><p>Que devez-vous faire pour supprimer storage8 ?</p>",
 "opts": [
  "Retirer le verrou du compte de stockage ou de son parent (groupe de ressources ou abonnement)",
  "Désactiver la suppression réversible",
  "Vider d'abord tous les conteneurs",
  "Attribuer le rôle Contributeur aux données blob du stockage"
 ],
 "ans": 0,
 "expl": "<p>Le message indique qu'un <b>verrou</b> s'applique, sur storage8 lui-même ou hérité de son groupe de ressources ou de son abonnement. Il faut le retirer (avec un rôle Propriétaire ou Administrateur de l'accès utilisateur), supprimer le compte, puis remettre le verrou si besoin.</p><p>Le contenu du compte, les rôles de données et la suppression réversible ne sont pas en cause.</p>"
},
{
 "id": "D1-217",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez attribuer automatiquement une licence Microsoft 365 à tous les utilisateurs dont le pays est la France, sans gestion manuelle des groupes.</p><p>Quelle combinaison devez-vous utiliser ?</p>",
 "opts": [
  "Un groupe Microsoft 365 à appartenance attribuée",
  "Un groupe dynamique (user.country -eq \"France\") avec une licence attribuée au groupe",
  "Une unité administrative France avec une licence",
  "Une stratégie Azure Policy sur l'emplacement"
 ],
 "ans": 1,
 "expl": "<p>Un <b>groupe dynamique</b> se remplit automatiquement selon l'attribut <b>country</b>, et les <b>licences basées sur les groupes</b> attribuent la licence à chaque membre. Les deux fonctions demandent Entra ID P1.</p><p>On ne peut pas attribuer de licence à une unité administrative. Azure Policy ne gère pas les licences. Un groupe attribué demande une gestion manuelle.</p>"
},
{
 "id": "D1-218",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les dépenses d'un projet doivent être suivies à travers trois abonnements. Chaque ressource du projet porte l'étiquette Projet=Orion.</p><p>Comment obtenir le coût total du projet ?</p>",
 "opts": [
  "Créer un groupe de ressources commun",
  "Additionner manuellement les budgets des trois abonnements",
  "Analyse des coûts à l'étendue du groupe d'administration ou du compte de facturation, filtrée sur l'étiquette Projet=Orion",
  "Consulter Azure Advisor"
 ],
 "ans": 2,
 "expl": "<p>L'<b>analyse des coûts</b> peut s'ouvrir à une étendue qui couvre plusieurs abonnements (groupe d'administration, compte ou profil de facturation) et se filtrer sur une <b>étiquette</b>.</p><p>Les budgets sont des seuils, pas des dépenses. Un groupe de ressources ne peut pas couvrir plusieurs abonnements. Advisor ne donne pas les dépenses.</p>"
},
{
 "id": "D1-219",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous déplacez l'abonnement Sub5 du groupe d'administration MG-Dev vers MG-Prod. MG-Prod a une stratégie Deny sur les tailles de VM.</p><p>Que se passe-t-il pour les VM existantes de Sub5 dont la taille est interdite dans MG-Prod ?</p>",
 "opts": [
  "Elles sont arrêtées",
  "Elles sont redimensionnées automatiquement",
  "Le déplacement de l'abonnement est refusé",
  "Elles continuent de fonctionner et deviennent non conformes"
 ],
 "ans": 3,
 "expl": "<p>Après le déplacement, Sub5 hérite des stratégies de MG-Prod. Les VM existantes ne sont ni arrêtées ni modifiées : elles apparaissent <b>non conformes</b>. Les nouvelles VM de taille interdite seront refusées.</p><p>Azure Policy n'empêche pas le déplacement d'un abonnement.</p>"
},
{
 "id": "D1-220",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un utilisateur invité a été ajouté il y a un an pour un projet terminé. Vous devez supprimer automatiquement les invités inactifs.</p><p>Quelle fonctionnalité convient le mieux ?</p>",
 "opts": [
  "Une révision d'accès des utilisateurs invités, avec l'application automatique des résultats",
  "Une alerte de budget",
  "Une stratégie d'expiration de groupe",
  "Un verrou de ressource"
 ],
 "ans": 0,
 "expl": "<p>Les <b>révisions d'accès</b> peuvent cibler les invités, demander une validation (ou se baser sur l'inactivité) et <b>appliquer automatiquement</b> les résultats : retirer l'accès ou bloquer puis supprimer les comptes refusés.</p><p>L'expiration concerne des groupes Microsoft 365, pas des comptes. Les deux autres options n'ont pas de lien.</p>"
},
{
 "id": "D1-221",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez créer 20 groupes de ressources identiques (mêmes étiquettes, verrous et attributions de rôles) pour 20 projets, de façon reproductible.</p><p>Quelle méthode convient le mieux ?</p>",
 "opts": [
  "Créer chaque groupe à la main dans le portail",
  "Un modèle Bicep déployé à l'étendue de l'abonnement",
  "Utiliser Azure Advisor",
  "Copier les groupes avec l'option Cloner du portail"
 ],
 "ans": 1,
 "expl": "<p>Un modèle <b>Bicep</b> (ou ARM) à l'étendue <b>abonnement</b> (<code>targetScope = 'subscription'</code>) peut créer des groupes de ressources, avec leurs étiquettes, verrous et attributions de rôles, de façon reproductible.</p><p>Le portail n'a pas d'option de clonage de groupe de ressources. La création manuelle est lente et sujette aux erreurs.</p>"
},
{
 "id": "D1-222",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre organisation veut que les nouveaux abonnements soient placés automatiquement sous MG-Sandbox, et non sous la racine.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une stratégie Azure Policy sur la racine",
  "Une étiquette sur MG-Sandbox",
  "Le groupe d'administration par défaut dans les paramètres de la hiérarchie",
  "Un verrou sur la racine"
 ],
 "ans": 2,
 "expl": "<p>Les <b>paramètres de la hiérarchie</b> permettent de choisir le <b>groupe d'administration par défaut</b> où sont placés les nouveaux abonnements. On peut aussi y exiger une autorisation pour créer des groupes d'administration.</p>"
},
{
 "id": "D1-223",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une application interne doit lire le profil des utilisateurs connectés, en leur nom, via Microsoft Graph.</p><p>Quel type de permission devez-vous configurer dans l'inscription d'application ?</p>",
 "opts": [
  "Une permission d'application User.ReadWrite.All",
  "Une identité managée",
  "Un rôle Azure Lecteur",
  "Une permission déléguée User.Read"
 ],
 "ans": 3,
 "expl": "<p>Une <b>permission déléguée</b> agit au nom de l'utilisateur connecté, avec au plus ses propres droits. <code>User.Read</code> permet de lire son profil, et ne demande pas de consentement administrateur.</p><p>Une permission d'application agit sans utilisateur, avec des droits sur tout l'annuaire : trop large. Les rôles Azure ne concernent pas Graph.</p>"
},
{
 "id": "D1-224",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous voulez empêcher les utilisateurs de consentir eux-mêmes aux applications tierces qui demandent l'accès à leurs données.</p><p>Où devez-vous configurer ce réglage ?</p>",
 "opts": [
  "Applications d'entreprise > Consentement et autorisations",
  "Abonnement > Stratégies",
  "Paramètres de l'appareil",
  "Paramètres de collaboration externe"
 ],
 "ans": 0,
 "expl": "<p>Le réglage <b>Consentement de l'utilisateur pour les applications</b> se trouve dans <b>Applications d'entreprise > Consentement et autorisations</b>. On peut le désactiver, ou le limiter aux éditeurs vérifiés et aux permissions à faible risque, et activer un workflow de demande d'approbation par un administrateur.</p>"
},
{
 "id": "D1-225",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez donner à une équipe externe l'accès à un seul groupe de ressources pendant 3 mois. L'accès doit disparaître automatiquement après.</p><p>Quelle solution, avec Microsoft Entra ID P2, demande le moins de gestion ?</p>",
 "opts": [
  "Un verrou sur le groupe de ressources",
  "Une attribution de rôle Azure active dans PIM avec une date de fin",
  "Une attribution classique, à supprimer dans 3 mois",
  "Un budget de 3 mois"
 ],
 "ans": 1,
 "expl": "<p>PIM permet de créer des attributions (actives ou éligibles) avec une <b>date de début et de fin</b>. À la date de fin, l'accès est retiré automatiquement.</p><p>Une attribution classique dépend de quelqu'un qui pense à la supprimer. Les deux autres options ne gèrent pas d'accès.</p>"
},
{
 "id": "D1-226",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un administrateur vous demande pourquoi le rôle intégré <b>Contributeur</b> ne lui permet pas d'attribuer des accès, alors qu'il donne « tous les droits ».</p><p>Quelle est la bonne explication ?</p>",
 "opts": [
  "Contributeur est un rôle Microsoft Entra",
  "Contributeur ne s'applique qu'aux groupes de ressources",
  "Contributeur contient Actions * mais NotActions Microsoft.Authorization/*/Delete, */Write et elevateAccess/Action",
  "Contributeur ne contient que des actions de lecture"
 ],
 "ans": 2,
 "expl": "<p>La définition de Contributeur accorde <code>*</code> dans Actions, mais exclut dans NotActions l'écriture et la suppression dans <code>Microsoft.Authorization</code> (attributions de rôles, verrous, stratégies d'autorisation) ainsi que l'élévation d'accès. Il gère donc tout, sauf les accès.</p><p>Contributeur peut être attribué à toute étendue et c'est un rôle Azure.</p>"
},
{
 "id": "D1-227",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez attribuer le même rôle personnalisé à un groupe dans 12 abonnements, sans répéter l'opération dans chaque abonnement.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Attribuer le rôle au locataire Microsoft Entra",
  "Créer 12 rôles personnalisés",
  "Utiliser une étiquette commune",
  "Inclure le groupe d'administration parent dans AssignableScopes et attribuer le rôle sur ce groupe d'administration"
 ],
 "ans": 3,
 "expl": "<p>Si les 12 abonnements sont sous le même <b>groupe d'administration</b>, le rôle personnalisé peut avoir ce groupe dans AssignableScopes (à condition de ne pas contenir de DataActions). Une seule attribution sur le groupe d'administration couvre les 12 abonnements.</p>"
},
{
 "id": "D1-228",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous constatez qu'un utilisateur a été supprimé de Microsoft Entra ID il y a 40 jours. Il devait être restauré.</p><p>Que pouvez-vous faire ?</p>",
 "opts": [
  "Recréer un nouveau compte : l'ancien est supprimé définitivement après 30 jours",
  "Le restaurer depuis Utilisateurs supprimés",
  "Le restaurer depuis une sauvegarde Azure Backup",
  "Le restaurer depuis le journal d'audit"
 ],
 "ans": 0,
 "expl": "<p>Après <b>30 jours</b>, un utilisateur supprimé est supprimé <b>définitivement</b>. Il faut recréer un compte, qui aura un nouvel identifiant d'objet : groupes, licences et rôles sont à réattribuer.</p><p>Azure Backup ne sauvegarde pas les objets Entra. Le journal d'audit trace la suppression mais ne restaure rien.</p>"
},
{
 "id": "D1-229",
 "dom": 1,
 "type": "single",
 "stem": "<p>L'équipe finance demande que toutes les ressources sans étiquette CentreDeCout soient visibles dans un tableau de bord, sans bloquer aucun déploiement.</p><p>Quelle solution convient ?</p>",
 "opts": [
  "Un verrou sur chaque groupe de ressources",
  "Une stratégie avec l'effet Audit, consultée dans la page Conformité",
  "Un budget par centre de coût",
  "Une stratégie avec l'effet Deny"
 ],
 "ans": 1,
 "expl": "<p>L'effet <b>Audit</b> marque les ressources sans l'étiquette comme non conformes, sans rien bloquer. La page <b>Conformité</b> d'Azure Policy sert de tableau de bord.</p><p>Deny bloquerait les déploiements, ce qui est exclu.</p>"
},
{
 "id": "D1-230",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre à un utilisateur de voir toutes les ressources d'un groupe de ressources, et de créer des tickets de support, sans rien modifier.</p><p>Quelle combinaison de rôles devez-vous attribuer sur le groupe de ressources ?</p>",
 "opts": [
  "Lecteur seul",
  "Contributeur",
  "Lecteur et Contributeur de demande de support",
  "Propriétaire"
 ],
 "ans": 2,
 "expl": "<p><b>Lecteur</b> permet de tout voir sans modifier. <b>Contributeur de demande de support</b> ajoute la création de demandes de support. Les rôles s'additionnent.</p><p>Contributeur et Propriétaire permettent de modifier. Lecteur seul ne permet pas d'ouvrir une demande de support.</p>"
}
);
