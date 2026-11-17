/* Domaine 1 : identités et gouvernance (lot K : D1-431 à D1-440, scénarios longs) */
AZ.questions.push(
{
 "id": "D1-431",
 "dom": 1,
 "type": "hot",
 "stem": "<p>L'équipe gouvernance de Fabrikam rédige des stratégies Azure Policy sur les étiquettes et les règles réseau :</p><ul><li>l'étiquette Environment doit être forcée à la valeur « Prod » sur toutes les ressources de l'abonnement Prod, même si une autre valeur a été saisie ;</li><li>l'étiquette CreatedBy doit être ajoutée si elle manque, mais jamais remplacée si elle existe ;</li><li>une adresse IP d'administration doit être ajoutée à la liste des règles IP de chaque compte de stockage, sans supprimer les règles existantes ;</li><li>la stratégie qui modifie les étiquettes doit aussi s'appliquer aux groupes de ressources, qui ne prennent pas en charge l'emplacement.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Environment = Prod forcée :",
   "o": [
    "Append",
    "Modify (addOrReplace)",
    "Deny sur toute valeur différente de Prod",
    "Modify, opération add sur l'étiquette Environment"
   ],
   "a": 1
  },
  {
   "l": "CreatedBy si manquante :",
   "o": [
    "Modify, opération add",
    "AuditIfNotExists",
    "Modify, opération addOrReplace",
    "Deny"
   ],
   "a": 0
  },
  {
   "l": "Règle IP ajoutée à la liste :",
   "o": [
    "Modify addOrReplace sur la liste des règles IP",
    "DeployIfNotExists d'une règle réseau séparée",
    "Deny",
    "Append sur le tableau"
   ],
   "a": 3
  },
  {
   "l": "Mode de la stratégie d'étiquettes :",
   "o": [
    "All",
    "Microsoft.Resources.Data",
    "Indexed",
    "Microsoft.Network.Data"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Modify.</b> addOrReplace ajoute l'étiquette ou remplace sa valeur ; add l'ajoute seulement si elle n'existe pas. Modify exige une identité managée pour la correction.<b>Append.</b> Il ajoute des champs à la requête, par exemple un élément dans un tableau avec l'alias [*] ; il ne retire rien.<b>Mode.</b> Le mode Indexed n'évalue que les ressources qui prennent en charge les étiquettes et l'emplacement ; le mode All évalue aussi les groupes de ressources et les abonnements.",
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
    "*Environment = Prod forcée",
    "Modify (addOrReplace)"
   ],
   [
    "CreatedBy si manquante",
    "Modify, opération add"
   ],
   [
    "Règle IP ajoutée à la liste",
    "Append sur le tableau"
   ],
   [
    "Mode de la stratégie d'étiquettes",
    "All"
   ]
  ]
 },
 "keep": "Forcer = addOrReplace. Si manquant = add. Ajouter à un tableau = Append. Groupes de ressources = mode All."
},
{
 "id": "D1-432",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso veut retirer le rôle Global Administrator à plusieurs collaborateurs et leur donner le rôle Microsoft Entra le moins privilégié pour leur tâche :</p><ul><li>Alice attribue et retire les licences Microsoft 365 des utilisateurs ;</li><li>Bruno crée et gère tous les groupes de sécurité et Microsoft 365, sans gérer les utilisateurs ;</li><li>Chloé invite des partenaires externes, alors que les invitations sont réservées aux rôles d'administrateur ;</li><li>David achète des abonnements Microsoft 365, gère les factures et ouvre des demandes de support de facturation.</li></ul><p>Quel rôle devez-vous attribuer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Alice :",
   "o": [
    "Groups Administrator",
    "User Administrator",
    "Billing Administrator",
    "License Administrator"
   ],
   "a": 3
  },
  {
   "l": "Bruno :",
   "o": [
    "User Administrator",
    "Directory Writers",
    "Groups Administrator",
    "Teams Administrator"
   ],
   "a": 2
  },
  {
   "l": "Chloé :",
   "o": [
    "User Administrator",
    "Guest Inviter",
    "Helpdesk Administrator",
    "External Identity Provider Administrator"
   ],
   "a": 1
  },
  {
   "l": "David :",
   "o": [
    "Service Support Administrator",
    "Global Reader",
    "Billing Administrator",
    "License Administrator"
   ],
   "a": 2
  }
 ],
 "expl": "<b>License Administrator.</b> Gère les attributions de licences des utilisateurs et des groupes (avec l'emplacement d'utilisation), sans gérer les utilisateurs.<b>Groups Administrator.</b> Crée et gère les groupes et leurs paramètres (nommage, expiration).<b>Guest Inviter.</b> Peut inviter des invités quand les invitations sont réservées aux rôles d'administrateur.<b>Billing Administrator.</b> Effectue les achats, gère les abonnements et les factures, et ouvre des demandes de support de facturation.",
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
    "*Alice",
    "License Administrator"
   ],
   [
    "Bruno",
    "Groups Administrator"
   ],
   [
    "Chloé",
    "Guest Inviter"
   ],
   [
    "David",
    "Billing Administrator"
   ]
  ]
 },
 "keep": "Licences = License Admin. Groupes = Groups Admin. Invitations = Guest Inviter. Facturation = Billing Admin."
},
{
 "id": "D1-433",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam a activé SSPR pour tous les utilisateurs. L'équipe sécurité veut affiner la configuration :</p><ul><li>les utilisateurs doivent être obligés d'enregistrer leurs méthodes à leur prochaine connexion ;</li><li>ils doivent confirmer leurs informations d'authentification tous les 90 jours ;</li><li>chaque utilisateur doit recevoir un courriel quand son mot de passe est réinitialisé ;</li><li>les administrateurs généraux doivent être prévenus quand un autre administrateur réinitialise son mot de passe.</li></ul><p>Après la configuration, un utilisateur demande s'il peut utiliser un code envoyé par l'application Microsoft Authenticator comme une des méthodes.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Enregistrement à la connexion :",
   "o": [
    "Nombre de méthodes requises = 2",
    "Inscription à la connexion = Oui",
    "Une campagne d'inscription MFA, sans autre réglage",
    "Une stratégie"
   ],
   "a": 1
  },
  {
   "l": "Confirmation tous les 90 jours :",
   "o": [
    "Durée de session = 90",
    "Jours avant reconfirmation = 90",
    "Révision d'accès trimestrielle",
    "Expiration du mot de passe = 90"
   ],
   "a": 1
  },
  {
   "l": "Notifications :",
   "o": [
    "Un groupe d'actions",
    "Une alerte sur le journal d'audit d'Entra ID",
    "Notifier les administrateurs seulement, pas l'utilisateur",
    "Les deux notifications"
   ],
   "a": 3
  },
  {
   "l": "Code de l'application Authenticator :",
   "o": [
    "Non : seule la notification push est permise",
    "Oui (code de l'application)",
    "Non",
    "Oui, mais seulement pour les comptes administrateurs"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Inscription.</b> « Exiger l'inscription des utilisateurs lors de la connexion » les invite à enregistrer leurs méthodes.<b>Reconfirmation.</b> « Nombre de jours avant que les utilisateurs soient invités à reconfirmer » (180 par défaut, 0 pour jamais).<b>Notifications.</b> « Notifier les utilisateurs lors des réinitialisations de mot de passe » et « Notifier tous les administrateurs lorsque d'autres administrateurs réinitialisent leur mot de passe ».<b>Méthodes.</b> SSPR accepte notamment la notification et le code de l'application mobile, le courriel, le SMS, l'appel et les questions de sécurité.",
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
    "*Enregistrement à la connexion",
    "Inscription à la connexion = Oui"
   ],
   [
    "Confirmation tous les 90 jours",
    "Jours avant reconfirmation = 90"
   ],
   [
    "Notifications",
    "Les deux notifications"
   ],
   [
    "Code de l'application Authenticator",
    "Oui (code de l'application)"
   ]
  ]
 },
 "keep": "Inscription à la connexion, reconfirmation en jours, deux notifications, code Authenticator accepté."
},
{
 "id": "D1-434",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso définit qui peut consulter et gérer les coûts dans Cost Management :</p><ul><li>l'équipe Finance doit consulter les coûts et les prévisions de l'abonnement Prod, sans voir ni modifier les ressources, et sans créer de budgets ;</li><li>les chefs de projet doivent créer et modifier des budgets et des exportations planifiées sur leur groupe de ressources, sans gérer les ressources ;</li><li>l'équipe Exploitation, qui a déjà le rôle Reader sur l'abonnement, demande si elle doit recevoir un rôle supplémentaire pour voir les coûts ;</li><li>l'équipe Comptabilité doit recevoir chaque jour un fichier CSV des coûts de l'abonnement dans un compte de stockage, sans intervention.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Équipe Finance :",
   "o": [
    "Cost Management Contributor",
    "Billing Reader sur le locataire",
    "Cost Management Reader",
    "Reader sur l'abonnement"
   ],
   "a": 2
  },
  {
   "l": "Chefs de projet :",
   "o": [
    "Cost Management Reader sur le groupe",
    "Contributor sur le groupe",
    "Owner",
    "Cost Management Contributor"
   ],
   "a": 3
  },
  {
   "l": "Équipe Exploitation :",
   "o": [
    "Aucun : Reader voit déjà les coûts",
    "Billing Reader obligatoire",
    "Contributor obligatoire",
    "Cost Management Reader obligatoire"
   ],
   "a": 0
  },
  {
   "l": "Fichier quotidien :",
   "o": [
    "Une alerte de budget quotidienne par courriel",
    "Un paramètre de diagnostic de l'abonnement",
    "Une exportation planifiée",
    "Advisor"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Cost Management Reader.</b> Consulte coûts, prévisions et budgets, sans accès aux ressources.<b>Cost Management Contributor.</b> Gère en plus budgets et exportations, sans gérer les ressources.<b>Reader.</b> Les rôles Azure Owner, Contributor et Reader permettent aussi de voir les données de coûts de leur étendue (sous réserve des paramètres de facturation de certains contrats).<b>Exportation.</b> Une exportation planifiée (quotidienne, hebdomadaire, mensuelle) écrit un fichier CSV (ou Parquet) dans un compte de stockage.",
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
    "*Équipe Finance",
    "Cost Management Reader"
   ],
   [
    "Chefs de projet",
    "Cost Management Contributor"
   ],
   [
    "Équipe Exploitation",
    "Aucun : Reader voit déjà les coûts"
   ],
   [
    "Fichier quotidien",
    "Une exportation planifiée"
   ]
  ]
 },
 "keep": "Voir = Cost Management Reader. Budgets = Cost Management Contributor. Reader voit déjà les coûts. Fichier = exportation."
},
{
 "id": "D1-435",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Dans l'abonnement Prod de Fabrikam, plusieurs administrateurs avec le rôle Owner signalent des refus inattendus :</p><ul><li>sur le groupe RG-Core, déployé par une pile de déploiement (deployment stack) avec le paramètre « Refuser la suppression », Owner ne peut pas supprimer un réseau virtuel géré par la pile ;</li><li>dans le groupe de ressources géré d'une application managée achetée sur la Place de marché, Owner ne peut rien modifier ;</li><li>un administrateur veut créer lui-même une affectation de refus (deny assignment) sur RG-Data pour bloquer la suppression par un groupe précis ;</li><li>l'équipe veut permettre au pipeline CI/CD de continuer à modifier les ressources de RG-Core malgré la pile.</li></ul><p>Qu'est-ce qui est vrai, et que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Cause sur RG-Core :",
   "o": [
    "Un verrou CanNotDelete hérité",
    "Un rôle Reader hérité",
    "Une stratégie Azure Deny",
    "Affectation de refus de la pile"
   ],
   "a": 3
  },
  {
   "l": "Application managée :",
   "o": [
    "Une stratégie Deny de l'éditeur",
    "Affectation de refus posée par l'éditeur",
    "Un verrou ReadOnly de l'abonnement",
    "Owner ne s'applique pas aux applications"
   ],
   "a": 1
  },
  {
   "l": "Créer soi-même une affectation de refus :",
   "o": [
    "Possible avec Owner",
    "Impossible directement",
    "Possible avec un rôle personnalisé",
    "Possible avec User Access Administrator"
   ],
   "a": 1
  },
  {
   "l": "Pipeline CI/CD :",
   "o": [
    "Supprimer la pile avant chaque déploiement",
    "Principal exclu",
    "Désactiver",
    "Lui donner le rôle Owner sur RG-Core"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Affectations de refus.</b> Elles l'emportent sur les attributions de rôles. Elles sont créées par Azure pour des fonctionnalités comme les piles de déploiement (paramètres de refus) et les applications managées ; un utilisateur ne peut pas en créer directement.<b>Exclusions.</b> Les paramètres de refus d'une pile acceptent des principaux exclus (jusqu'à un certain nombre) et des actions exclues : le pipeline peut être exclu.<b>Verrous.</b> Un verrou produit une autre erreur (ScopeLocked) ; une stratégie produit RequestDisallowedByPolicy.",
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
    "*Cause sur RG-Core",
    "Affectation de refus de la pile"
   ],
   [
    "Application managée",
    "Affectation de refus posée par l'éditeur"
   ],
   [
    "Créer soi-même une affectation de refus",
    "Impossible directement"
   ],
   [
    "Pipeline CI/CD",
    "Principal exclu"
   ]
  ]
 },
 "keep": "Refus malgré Owner = affectation de refus (pile, application managée). Non créable à la main. Exclusion de principal."
},
{
 "id": "D1-436",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous devez automatiser des tâches de gouvernance dans l'abonnement Dev de Contoso. Pour chaque tâche, choisissez la commande correcte :</p><ul><li>attribuer le rôle Reader au groupe Auditeurs (ID d'objet connu) sur le groupe de ressources RG-Dev, avec PowerShell ;</li><li>attribuer le rôle Contributor à l'utilisateur dev1@contoso.com sur RG-Dev, avec Azure CLI ;</li><li>poser un verrou empêchant la suppression de RG-Dev, avec PowerShell ;</li><li>attribuer la stratégie « Emplacements autorisés » à RG-Dev avec le paramètre des régions, avec Azure CLI.</li></ul><p>Quelle commande devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Reader pour Auditeurs :",
   "o": [
    "New-AzRoleDefinition -ObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev",
    "Add-AzADGroupMember -TargetGroupObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev",
    "New-AzRoleAssignment -ObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev",
    "Set-AzRoleAssignment -ObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev"
   ],
   "a": 2
  },
  {
   "l": "Contributor pour dev1 :",
   "o": [
    "az group update --name RG-Dev --set tags.role=Contributor:dev1@contoso.com",
    "az role assignment create --assignee dev1@contoso.com --role Contributor --resource-group RG-Dev",
    "az ad user update --id dev1@contoso.com --set role=Contributor --resource-group RG-Dev",
    "az role definition create --assignee dev1@contoso.com --role Contributor --resource-group RG-Dev"
   ],
   "a": 1
  },
  {
   "l": "Verrou :",
   "o": [
    "New-AzResourceLock -LockLevel CanNotDelete -LockName NoDelete -ResourceGroupName RG-Dev",
    "Set-AzResourceGroup -Name RG-Dev -Lock CanNotDelete",
    "New-AzPolicyAssignment -Name NoDelete -Effect CanNotDelete -Scope RG-Dev",
    "New-AzResourceLock -LockLevel ReadOnly -LockName NoDelete -ResourceGroupName RG-Dev"
   ],
   "a": 0
  },
  {
   "l": "Stratégie :",
   "o": [
    "az policy assignment create --policy <définition> --scope <ID de RG-Dev> --params @params.json",
    "az policy definition create --policy <définition> --scope <ID de RG-Dev> --params @params.json",
    "az policy exemption create --policy <définition> --scope <ID de RG-Dev>",
    "az policy assignment create --role <définition> -g RG-Dev --params @params.json"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Rôles.</b> New-AzRoleAssignment et az role assignment create attribuent un rôle ; New-AzRoleDefinition et az role definition create créent un rôle personnalisé.<b>Verrou.</b> New-AzResourceLock avec -LockLevel CanNotDelete empêche la suppression ; ReadOnly bloquerait aussi les modifications.<b>Stratégie.</b> az policy assignment create attribue une définition (--policy) à une étendue (--scope) avec des paramètres (--params) ; az policy definition create crée une définition.",
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
    "*Reader pour Auditeurs",
    "New-AzRoleAssignment -ObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev"
   ],
   [
    "Contributor pour dev1",
    "az role assignment create --assignee dev1@contoso.com --role Contributor --resource-group RG-Dev"
   ],
   [
    "Verrou",
    "New-AzResourceLock -LockLevel CanNotDelete -LockName NoDelete -ResourceGroupName RG-Dev"
   ],
   [
    "Stratégie",
    "az policy assignment create --policy <définition> --scope <ID de RG-Dev> --params @params.json"
   ]
  ]
 },
 "keep": "Attribuer = *RoleAssignment / role assignment create. Verrou = New-AzResourceLock CanNotDelete. Stratégie = policy assignment create."
},
{
 "id": "D1-437",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam gère de nombreux invités B2B. Les situations suivantes se présentent :</p><ul><li>un partenaire n'a pas de compte Microsoft Entra ni de compte Microsoft, et son organisation n'utilise pas Google ; il doit pouvoir accepter l'invitation et se connecter ;</li><li>un invité dit n'avoir jamais reçu le courriel d'invitation, envoyé il y a trois semaines ;</li><li>un consultant externe, présent depuis deux ans, doit être traité comme un membre de l'annuaire (mêmes autorisations par défaut que les employés), tout en gardant son compte de son entreprise ;</li><li>un invité doit gérer les mots de passe des utilisateurs non administrateurs du service Ventes.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Partenaire sans compte :",
   "o": [
    "Créer un compte membre interne pour le partenaire",
    "Code à usage unique",
    "Impossible sans compte Microsoft Entra ou Microsoft",
    "Fédération Google"
   ],
   "a": 1
  },
  {
   "l": "Invitation jamais reçue :",
   "o": [
    "Attendre 30 jours",
    "Lui attribuer une licence",
    "Supprimer et recréer l'invité",
    "Renvoyer l'invitation"
   ],
   "a": 3
  },
  {
   "l": "Consultant traité comme membre :",
   "o": [
    "Lui créer un second compte interne",
    "Lui donner le rôle Directory Readers",
    "L'ajouter au groupe Employés",
    "Passer la propriété userType à Member"
   ],
   "a": 3
  },
  {
   "l": "Invité gérant des mots de passe :",
   "o": [
    "Global Admin",
    "Impossible : un invité ne peut pas avoir de rôle Entra",
    "Rôle étendu à une unité",
    "Owner sur l'abonnement de l'équipe Ventes"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Code à usage unique.</b> Quand l'invité n'a pas de compte Entra, Microsoft ou fournisseur fédéré, il reçoit un code par courriel pour se connecter.<b>Renvoi.</b> Une invitation non acceptée peut être renvoyée depuis la fiche de l'utilisateur.<b>userType.</b> La propriété userType (Guest ou Member) fixe les autorisations par défaut ; on peut la passer à Member sans changer la façon dont l'utilisateur s'authentifie.<b>Rôles.</b> Un invité peut recevoir des rôles Microsoft Entra, y compris étendus à une unité administrative.",
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
    "*Partenaire sans compte",
    "Code à usage unique"
   ],
   [
    "Invitation jamais reçue",
    "Renvoyer l'invitation"
   ],
   [
    "Consultant traité comme membre",
    "Passer la propriété userType à Member"
   ],
   [
    "Invité gérant des mots de passe",
    "Rôle étendu à une unité"
   ]
  ]
 },
 "keep": "Sans compte = code par courriel. Pas reçu = renvoyer. Comme un membre = userType Member. Un invité peut avoir un rôle."
},
{
 "id": "D1-438",
 "dom": 1,
 "type": "hot",
 "stem": "<p>La direction financière de Contoso (contrat client Microsoft) veut refacturer les coûts Azure aux services internes :</p><ul><li>chaque abonnement porte l'étiquette Department ; beaucoup de ressources ne l'ont pas, et l'équipe ne veut pas les modifier ;</li><li>les coûts d'un abonnement partagé (réseau hub, pare-feu) doivent être répartis entre les abonnements des services, au prorata de leurs coûts ;</li><li>chaque mois, la direction veut une vue des coûts groupée par Department, enregistrée et partagée avec les responsables ;</li><li>un responsable s'étonne que les coûts d'une ressource étiquetée ce matin apparaissent sous son service seulement à partir d'aujourd'hui.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Étiquette Department sans modifier les ressources :",
   "o": [
    "Héritage des étiquettes",
    "Une stratégie Modify appliquée à toutes les ressources",
    "Correction",
    "Un verrou ReadOnly posé sur chaque abonnement"
   ],
   "a": 0
  },
  {
   "l": "Abonnement partagé :",
   "o": [
    "Une exportation",
    "Un plan d'économies partagé entre les services",
    "Un budget par service, avec un seuil commun",
    "Règle de répartition"
   ],
   "a": 3
  },
  {
   "l": "Vue mensuelle partagée :",
   "o": [
    "Advisor",
    "Un rapport de conformité Azure Policy mensuel",
    "Vue enregistrée",
    "Un classeur Azure Monitor sur les métriques"
   ],
   "a": 2
  },
  {
   "l": "Coûts à partir d'aujourd'hui :",
   "o": [
    "Délai de traitement de 72 heures",
    "Non rétroactives",
    "Il faut une exportation pour voir les étiquettes",
    "Un bug"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Héritage des étiquettes.</b> Pour les contrats EA et MCA, Cost Management peut appliquer aux données d'utilisation les étiquettes de l'abonnement et du groupe de ressources, sans modifier les ressources.<b>Répartition.</b> Une règle de répartition des coûts redistribue les coûts d'abonnements ou de groupes de ressources partagés vers d'autres, de façon égale, fixe ou au prorata.<b>Vues.</b> L'analyse des coûts permet d'enregistrer des vues, de les épingler et de les partager.<b>Rétroactivité.</b> Les étiquettes s'appliquent aux enregistrements d'utilisation à partir du moment où elles existent.",
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
    "*Étiquette Department sans modifier les ressources",
    "Héritage des étiquettes"
   ],
   [
    "Abonnement partagé",
    "Règle de répartition"
   ],
   [
    "Vue mensuelle partagée",
    "Vue enregistrée"
   ],
   [
    "Coûts à partir d'aujourd'hui",
    "Non rétroactives"
   ]
  ]
 },
 "keep": "Sans modifier = héritage dans Cost Management. Partagé = règle de répartition. Vue = analyse enregistrée. Non rétroactif."
},
{
 "id": "D1-439",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso pose des verrous dans l'abonnement Prod. Le groupe RG-App contient la VM VM-Web, le compte de stockage stapp et un plan App Service. Questions de l'équipe :</p><ul><li>un verrou ReadOnly est posé sur RG-App ; l'équipe d'exploitation tente de redémarrer VM-Web ;</li><li>un verrou CanNotDelete est posé sur stapp ; un développeur supprime des blobs du conteneur images avec une clé du compte ;</li><li>l'équipe veut savoir qui peut créer ou supprimer des verrous ;</li><li>un verrou CanNotDelete est posé au niveau de l'abonnement ; l'équipe veut supprimer un groupe de ressources vide.</li></ul><p>Que se passera-t-il ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Redémarrage de VM-Web :",
   "o": [
    "Autorisé pour Owner seul",
    "Refusé",
    "Autorisé",
    "Autorisé si la VM est arrêtée"
   ],
   "a": 1
  },
  {
   "l": "Suppression des blobs :",
   "o": [
    "Mise en file pour validation",
    "Refusée sauf pour Owner",
    "Refusée",
    "Autorisée"
   ],
   "a": 3
  },
  {
   "l": "Gestion des verrous :",
   "o": [
    "Global Administrator seul, après élévation",
    "Owner ou UAA",
    "Tout utilisateur ayant le rôle Reader",
    "Contributor"
   ],
   "a": 1
  },
  {
   "l": "Groupe de ressources vide :",
   "o": [
    "Autorisé après 24 heures",
    "Refusé (verrou hérité)",
    "Autorisé : le groupe est vide",
    "Autorisé pour Owner"
   ],
   "a": 1
  }
 ],
 "expl": "<b>ReadOnly.</b> Il bloque les opérations de gestion qui modifient, y compris certaines actions POST : un verrou ReadOnly sur un groupe contenant une VM empêche de la démarrer ou de la redémarrer.<b>Plan de données.</b> Les verrous s'appliquent au plan de gestion. Supprimer des blobs (plan de données) reste possible avec CanNotDelete sur le compte.<b>Gestion.</b> Il faut Microsoft.Authorization/locks/* : Owner et User Access Administrator l'ont (ou un rôle personnalisé).<b>Héritage.</b> Un verrou hérité de l'abonnement s'applique à tous les groupes de ressources, même vides.",
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
    "*Redémarrage de VM-Web",
    "Refusé"
   ],
   [
    "Suppression des blobs",
    "Autorisée"
   ],
   [
    "Gestion des verrous",
    "Owner ou UAA"
   ],
   [
    "Groupe de ressources vide",
    "Refusé (verrou hérité)"
   ]
  ]
 },
 "keep": "ReadOnly = pas de redémarrage. Les verrous ne protègent pas les données. Owner / UAA gèrent les verrous. Hérités partout."
},
{
 "id": "D1-440",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam conçoit l'attribution de ses stratégies Azure Policy :</p><ul><li>la stratégie « Emplacements autorisés » (Deny, Europe) est attribuée au groupe d'administration MG-Corp ; le groupe de ressources RG-Global (abonnement Prod, sous MG-Corp) doit pouvoir déployer en East US de façon permanente ;</li><li>l'équipe de l'abonnement Prod tente d'attribuer à son abonnement une stratégie qui autorise East US pour annuler celle de MG-Corp ;</li><li>un utilisateur bloqué par la stratégie doit voir un message clair qui renvoie vers la page interne de demande d'exception ;</li><li>l'équipe veut savoir quel rôle permet de créer et d'attribuer des stratégies sans gérer les ressources.</li></ul><p>Que devez-vous configurer, et qu'est-ce qui est vrai ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "RG-Global :",
   "o": [
    "Exclusion de RG-Global",
    "Supprimer l'attribution de MG-Corp et la recréer",
    "Déplacer Prod",
    "Un verrou CanNotDelete posé sur RG-Global"
   ],
   "a": 0
  },
  {
   "l": "Stratégie « autoriser » sur Prod :",
   "o": [
    "Prioritaire car plus proche de la ressource",
    "Annule le Deny hérité de MG-Corp",
    "Refusée",
    "Sans effet"
   ],
   "a": 3
  },
  {
   "l": "Message pour l'utilisateur :",
   "o": [
    "Message de non-conformité",
    "Alerte du journal d'activité envoyée à l'utilisateur",
    "Étiquette",
    "Description de la définition de stratégie"
   ],
   "a": 0
  },
  {
   "l": "Rôle pour gérer les stratégies :",
   "o": [
    "Contributor",
    "Resource Policy Contributor",
    "Security Admin",
    "Policy Insights Data Writer"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Exclusion.</b> Une attribution peut exclure des étendues enfants (groupes de ressources, abonnements) de façon permanente ; une exemption sert plutôt aux dérogations motivées et datées.<b>Cumul.</b> Les stratégies se cumulent : une stratégie plus permissive à une étendue inférieure n'annule pas un Deny hérité. Il faut exclure ou exempter l'étendue dans l'attribution d'origine.<b>Message.</b> Le message de non-conformité de l'attribution s'affiche dans l'erreur de refus.<b>Resource Policy Contributor.</b> Crée et gère les définitions et attributions de stratégies, sans gérer les autres ressources.",
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
    "*RG-Global",
    "Exclusion de RG-Global"
   ],
   [
    "Stratégie « autoriser » sur Prod",
    "Sans effet"
   ],
   [
    "Message pour l'utilisateur",
    "Message de non-conformité"
   ],
   [
    "Rôle pour gérer les stratégies",
    "Resource Policy Contributor"
   ]
  ]
 },
 "keep": "Exception permanente = exclusion. Un Deny hérité ne s'annule pas plus bas. Message = non-conformité. Gérer = Resource Policy Contributor."
}
);
