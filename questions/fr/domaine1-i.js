/* Domaine 1 : identités et gouvernance (lot I : D1-411 à D1-420, scénarios longs) */
AZ.questions.push(
{
 "id": "D1-411",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso organise ses 40 abonnements avec des groupes d'administration :</p><ul><li>le groupe racine du locataire contient MG-Corp, qui contient MG-Prod et MG-Dev ; chaque groupe reçoit des abonnements ;</li><li>une stratégie Deny attribuée à MG-Corp interdit les régions hors d'Europe ; un administrateur de l'abonnement Dev-01 (dans MG-Dev) tente de créer une VM en East US ;</li><li>tout nouvel abonnement créé dans le locataire doit atterrir automatiquement dans MG-Sandbox plutôt qu'à la racine ;</li><li>l'équipe veut ajouter quatre niveaux de groupes sous MG-Prod (au total six niveaux sous la racine) ; un architecte affirme que c'est impossible.</li></ul><p>Qu'est-ce qui est vrai, et que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM en East US dans Dev-01 :",
   "o": [
    "Autorisée : la stratégie vise MG-Corp seul",
    "Autorisée : les abonnements n'héritent pas",
    "Autorisée si l'administrateur est Owner",
    "Refusée (stratégie héritée)"
   ],
   "a": 3
  },
  {
   "l": "Nouveaux abonnements :",
   "o": [
    "Une stratégie Deny attribuée au groupe racine",
    "Groupe par défaut = MG-Sandbox",
    "Un runbook",
    "Une règle d'appartenance dynamique sur MG-Sandbox"
   ],
   "a": 1
  },
  {
   "l": "Six niveaux sous la racine :",
   "o": [
    "Possible : limite de six niveaux",
    "Impossible : limite de trois niveaux",
    "Possible : aucune limite de profondeur",
    "Impossible : limite de quatre niveaux"
   ],
   "a": 0
  },
  {
   "l": "Déplacer Dev-01 vers MG-Prod :",
   "o": [
    "Owner + écriture sur MG-Prod",
    "Contributor sur Dev-01, sans droit sur les groupes",
    "Global Administrator seul",
    "Reader sur MG-Prod et sur le groupe parent suffit"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Héritage.</b> Les attributions de stratégie et de rôle d'un groupe d'administration s'appliquent à tous les groupes enfants, abonnements et ressources.<b>Groupe par défaut.</b> Dans les paramètres de la hiérarchie, on peut choisir le groupe d'administration où atterrissent les nouveaux abonnements.<b>Profondeur.</b> Une hiérarchie peut avoir six niveaux de profondeur, sans compter la racine ni le niveau des abonnements.<b>Déplacement.</b> Il faut des droits sur l'abonnement (Owner) et sur le groupe cible (par exemple Management Group Contributor), ainsi que sur le groupe parent actuel.",
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
    "*VM en East US dans Dev-01",
    "Refusée (stratégie héritée)"
   ],
   [
    "Nouveaux abonnements",
    "Groupe par défaut = MG-Sandbox"
   ],
   [
    "Six niveaux sous la racine",
    "Possible : limite de six niveaux"
   ],
   [
    "Déplacer Dev-01 vers MG-Prod",
    "Owner + écriture sur MG-Prod"
   ]
  ]
 },
 "keep": "Stratégies héritées. Nouveaux abonnements = groupe par défaut. Six niveaux sous la racine."
},
{
 "id": "D1-412",
 "dom": 1,
 "type": "hot",
 "stem": "<p>La direction financière de Fabrikam veut maîtriser les dépenses de l'abonnement Projets (budget mensuel : 10 000 €) :</p><ul><li>les chefs de projet doivent être prévenus par courriel quand les dépenses réelles atteignent 80 % du budget ;</li><li>l'équipe finance veut être prévenue avant le dépassement, si la tendance du mois laisse prévoir plus de 100 % ;</li><li>à 100 % des dépenses réelles, les VM de développement doivent être arrêtées automatiquement ;</li><li>un chef de projet demande s'il suffit de créer le budget pour que les dépenses s'arrêtent à 10 000 €.</li></ul><p>Que devez-vous configurer, et quelle est la réponse au chef de projet ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Alerte à 80 % :",
   "o": [
    "Recommandation de coûts d'Azure Advisor",
    "Condition Prévu à 80 % du budget mensuel",
    "Condition Réel à 80 %",
    "Alerte d'anomalie"
   ],
   "a": 2
  },
  {
   "l": "Alerte avant dépassement :",
   "o": [
    "Un export quotidien des coûts vers un compte",
    "Condition Prévu à 100 %",
    "Une alerte de métrique",
    "Condition Réel à 100 % du budget mensuel"
   ],
   "a": 1
  },
  {
   "l": "Arrêt des VM :",
   "o": [
    "Le budget arrête lui-même les VM de développement",
    "Une stratégie Deny",
    "Un groupe d'actions",
    "Un verrou ReadOnly posé à 100 % du budget"
   ],
   "a": 2
  },
  {
   "l": "Le budget arrête-t-il les dépenses ?",
   "o": [
    "Oui, pour les abonnements payants",
    "Oui, après 24 heures",
    "Oui : les ressources sont bloquées",
    "Non : il ne fait qu'alerter"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Conditions.</b> Un budget peut avoir des alertes sur les coûts réels (Actual) ou prévus (Forecasted), avec des seuils en pourcentage.<b>Automatisation.</b> Une alerte de budget peut déclencher un groupe d'actions, qui lance un runbook Automation, une fonction ou une application logique pour arrêter des ressources.<b>Pas de plafond.</b> Les budgets n'arrêtent ni ne bloquent rien : ils déclenchent des notifications et des actions. (Seules certaines offres, comme les crédits gratuits, ont une limite de dépense.)",
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
    "*Alerte à 80 %",
    "Condition Réel à 80 %"
   ],
   [
    "Alerte avant dépassement",
    "Condition Prévu à 100 %"
   ],
   [
    "Arrêt des VM",
    "Un groupe d'actions"
   ],
   [
    "Le budget arrête-t-il les dépenses ?",
    "Non : il ne fait qu'alerter"
   ]
  ]
 },
 "keep": "Réel = dépensé. Prévu = tendance. Action = groupe d'actions. Un budget n'arrête rien."
},
{
 "id": "D1-413",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso généralise les étiquettes (tags). Les questions de l'équipe :</p><ul><li>l'équipe Finance a le rôle Reader sur l'abonnement ; elle doit pouvoir ajouter et modifier des étiquettes sur toutes les ressources, sans pouvoir modifier les ressources elles-mêmes ;</li><li>un script a créé l'étiquette « environment = Prod » sur certaines ressources et « Environment = prod » sur d'autres ; l'équipe veut savoir comment Azure les traite ;</li><li>une application ajoute 60 étiquettes différentes à chaque ressource ;</li><li>un administrateur veut ajouter l'étiquette Owner=IT à un groupe de ressources sans écraser les étiquettes existantes, avec Azure CLI.</li></ul><p>Qu'est-ce qui est vrai, et que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Équipe Finance :",
   "o": [
    "Contributor",
    "Tag Contributor",
    "Cost Management Contributor",
    "Resource Policy Contributor"
   ],
   "a": 1
  },
  {
   "l": "« environment » et « Environment » :",
   "o": [
    "Même valeur",
    "Erreur à la création de la seconde étiquette",
    "Même étiquette, deux valeurs",
    "Deux étiquettes distinctes sur chaque ressource"
   ],
   "a": 2
  },
  {
   "l": "60 étiquettes :",
   "o": [
    "Accepté : pas de limite",
    "Accepté, mais non affiché",
    "Accepté jusqu'à 100",
    "Refusé : 50 par ressource"
   ],
   "a": 3
  },
  {
   "l": "Commande CLI :",
   "o": [
    "az tag create --operation Replace",
    "az tag update --operation Merge",
    "az group update --set tags=Owner=IT",
    "az tag update --operation Delete"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Tag Contributor.</b> Permet de gérer les étiquettes des ressources sans accès aux ressources elles-mêmes.<b>Casse.</b> Les noms d'étiquettes ne sont pas sensibles à la casse pour les opérations ; les valeurs le sont.<b>Limite.</b> Une ressource, un groupe de ressources ou un abonnement peut avoir au plus 50 paires nom/valeur.<b>Fusion.</b> az tag update --operation Merge ajoute ou met à jour sans supprimer les autres étiquettes ; Replace remplace tout l'ensemble ; az group update --set tags=… remplace aussi les étiquettes.",
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
    "Tag Contributor"
   ],
   [
    "« environment » et « Environment »",
    "Même étiquette, deux valeurs"
   ],
   [
    "60 étiquettes",
    "Refusé : 50 par ressource"
   ],
   [
    "Commande CLI",
    "az tag update --operation Merge"
   ]
  ]
 },
 "keep": "Gérer les étiquettes seules = Tag Contributor. Noms insensibles à la casse, valeurs sensibles. 50 max. Merge pour ajouter."
},
{
 "id": "D1-414",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam définit les paramètres des appareils dans Microsoft Entra ID :</p><ul><li>seuls les membres du groupe IT-Postes doivent pouvoir joindre des appareils Windows à Microsoft Entra ID ;</li><li>les utilisateurs qui joignent un appareil ne doivent pas devenir administrateurs locaux de cet appareil ; seuls les membres de IT-Support doivent l'être sur tous les appareils joints ;</li><li>une MFA doit être exigée lors de la jonction d'un appareil ;</li><li>un nombre maximal de 10 appareils par utilisateur doit être imposé.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Qui peut joindre :",
   "o": [
    "Une stratégie Azure Deny sur les appareils joints",
    "Joindre = Sélectionné",
    "Une unité administrative",
    "Le rôle Cloud Device Administrator pour tous"
   ],
   "a": 1
  },
  {
   "l": "Administrateurs locaux :",
   "o": [
    "Une GPO locale sur chaque poste",
    "Rien : réglage impossible dans Entra",
    "Rôle Global Administrator pour IT-Support",
    "Désactiver pour l'utilisateur + IT-Support"
   ],
   "a": 3
  },
  {
   "l": "MFA à la jonction :",
   "o": [
    "Accès conditionnel (action)",
    "Une stratégie de mot de passe à 14 caractères",
    "Valeurs par défaut",
    "Le paramètre de MFA par utilisateur, seul"
   ],
   "a": 0
  },
  {
   "l": "Limite d'appareils :",
   "o": [
    "Quota d'appareils par utilisateur",
    "Une règle de groupe dynamique sur les appareils",
    "Un verrou",
    "Une licence par appareil"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Jonction.</b> Le paramètre « Les utilisateurs peuvent joindre des appareils à Microsoft Entra ID » accepte Tous, Sélectionné (un ou plusieurs groupes) ou Aucun.<b>Administrateurs locaux.</b> Les paramètres d'administrateur local permettent de ne pas ajouter l'utilisateur qui joint l'appareil et de désigner des administrateurs locaux supplémentaires sur tous les appareils joints.<b>MFA.</b> La méthode recommandée est une stratégie d'accès conditionnel ciblant l'action utilisateur « Inscrire ou joindre des appareils » (le paramètre d'appareil « Exiger la MFA » doit alors être désactivé).<b>Quota.</b> « Nombre maximal d'appareils par utilisateur » limite les appareils joints ou inscrits.",
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
    "*Qui peut joindre",
    "Joindre = Sélectionné"
   ],
   [
    "Administrateurs locaux",
    "Désactiver pour l'utilisateur + IT-Support"
   ],
   [
    "MFA à la jonction",
    "Accès conditionnel (action)"
   ],
   [
    "Limite d'appareils",
    "Quota d'appareils par utilisateur"
   ]
  ]
 },
 "keep": "Jonction = Sélectionné. Admin local = réglage d'appareil. MFA = accès conditionnel (action). Limite = quota par utilisateur."
},
{
 "id": "D1-415",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Plusieurs problèmes d'accès sont remontés dans l'abonnement Prod :</p><ul><li>Nadia a reçu le rôle Contributor sur RG-App il y a deux minutes ; elle obtient toujours « accès refusé » ;</li><li>Omar est Owner de l'abonnement, mais ne peut pas supprimer le compte de stockage stlogs ;</li><li>Sami est Contributor sur RG-App, mais la création d'une VM en East US échoue avec « RequestDisallowedByPolicy » ;</li><li>Yanis est Contributor sur l'abonnement, mais ne peut pas donner le rôle Reader à un collègue.</li></ul><p>Quelle est la cause la plus probable ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Nadia :",
   "o": [
    "Une stratégie Azure Deny",
    "Une licence Entra ID manquante",
    "Propagation (jusqu'à 10 min)",
    "Un verrou CanNotDelete sur RG-App"
   ],
   "a": 2
  },
  {
   "l": "Omar :",
   "o": [
    "Un verrou CanNotDelete",
    "Le rôle Owner exclut la suppression",
    "La propagation du rôle Owner",
    "Une stratégie Audit"
   ],
   "a": 0
  },
  {
   "l": "Sami :",
   "o": [
    "Un quota de vCPU atteint",
    "Un verrou ReadOnly sur l'abonnement",
    "Une stratégie Azure (Deny)",
    "Un rôle Reader hérité"
   ],
   "a": 2
  },
  {
   "l": "Yanis :",
   "o": [
    "Le collègue",
    "Un verrou bloque l'attribution de rôles",
    "Il doit d'abord être Global Administrator",
    "Contributor ne peut pas"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Propagation.</b> Une nouvelle attribution de rôle peut prendre jusqu'à environ 10 minutes pour s'appliquer (se déconnecter et se reconnecter aide).<b>Verrou.</b> Un verrou CanNotDelete s'applique à tous, y compris Owner.<b>Stratégie.</b> RequestDisallowedByPolicy indique qu'une stratégie avec l'effet Deny a bloqué la requête (par exemple, régions autorisées).<b>Contributor.</b> Le rôle exclut Microsoft.Authorization/*/Write : il ne peut pas attribuer de rôles. Il faut Owner, User Access Administrator ou Role Based Access Control Administrator.",
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
    "*Nadia",
    "Propagation (jusqu'à 10 min)"
   ],
   [
    "Omar",
    "Un verrou CanNotDelete"
   ],
   [
    "Sami",
    "Une stratégie Azure (Deny)"
   ],
   [
    "Yanis",
    "Contributor ne peut pas"
   ]
  ]
 },
 "keep": "Délai = propagation. Owner bloqué = verrou. RequestDisallowedByPolicy = stratégie Deny. Contributor ne donne pas de rôles."
},
{
 "id": "D1-416",
 "dom": 1,
 "type": "hot",
 "stem": "<p>À la suite d'une fusion, Contoso doit transférer l'abonnement Sub-Analytics de son locataire contoso.com vers le locataire fabrikam.com. L'abonnement contient :</p><ul><li>des VM qui utilisent des identités managées attribuées par le système pour lire des secrets dans un coffre Key Vault ;</li><li>des attributions de rôles Azure accordées à des utilisateurs et des groupes de contoso.com ;</li><li>un coffre Key Vault dont l'ID de locataire est celui de contoso.com.</li></ul><p>Par ailleurs, la responsabilité de facturation d'un autre abonnement, Sub-Web, doit passer à l'équipe financière de Contoso, sans changer de locataire.</p><p>Que se passera-t-il, et que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Attributions de rôles :",
   "o": [
    "Converties en invités",
    "Conservées pour les groupes",
    "Conservées, mappées par nom",
    "Supprimées : à recréer"
   ],
   "a": 3
  },
  {
   "l": "Identités managées :",
   "o": [
    "Recréer les VM",
    "Désactiver puis réactiver",
    "Aucune action requise après le transfert",
    "Les déplacer manuellement vers le locataire"
   ],
   "a": 1
  },
  {
   "l": "Coffre Key Vault :",
   "o": [
    "Ajouter un point de terminaison privé",
    "Aucune action : il suit l'abonnement",
    "Mettre à jour l'ID de locataire",
    "Recréer le coffre et les secrets"
   ],
   "a": 2
  },
  {
   "l": "Sub-Web :",
   "o": [
    "Attribution du rôle Owner seul",
    "Transfert de propriété de facturation",
    "Déplacement vers un groupe d'administration",
    "Changement d'annuaire"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Changement d'annuaire.</b> Lors du transfert d'un abonnement vers un autre locataire Entra ID, toutes les attributions de rôles Azure sont définitivement supprimées : il faut les sauvegarder et les recréer dans le nouveau locataire.<b>Identités managées.</b> Elles ne sont pas mises à jour : il faut désactiver puis réactiver les identités attribuées par le système (et recréer celles attribuées par l'utilisateur).<b>Key Vault.</b> Le coffre garde l'ID de l'ancien locataire : il faut le mettre à jour et redéfinir les accès.<b>Facturation.</b> Le transfert de propriété de facturation change qui paie, sans changer le locataire.",
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
    "*Attributions de rôles",
    "Supprimées : à recréer"
   ],
   [
    "Identités managées",
    "Désactiver puis réactiver"
   ],
   [
    "Coffre Key Vault",
    "Mettre à jour l'ID de locataire"
   ],
   [
    "Sub-Web",
    "Transfert de propriété de facturation"
   ]
  ]
 },
 "keep": "Changement de locataire : rôles perdus, identités à réactiver, Key Vault à mettre à jour. Qui paie = transfert de facturation."
},
{
 "id": "D1-417",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous rédigez une définition Azure Policy personnalisée pour Fabrikam. Elle doit refuser la création de comptes de stockage dont la SKU n'est pas dans une liste fournie lors de l'attribution.</p><code>\"if\": { \"allOf\": [ { \"field\": \"[1]\", \"equals\": \"Microsoft.Storage/storageAccounts\" }, { \"field\": \"Microsoft.Storage/storageAccounts/sku.name\", \"[2]\": \"[parameters('allowedSkus')]\" } ] }, \"then\": { \"effect\": \"[3]\" }</code><p>Le paramètre allowedSkus doit être de type [4].</p><p>Complétez la définition.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "[1] :",
   "o": [
    "type",
    "kind",
    "name",
    "location"
   ],
   "a": 0
  },
  {
   "l": "[2] :",
   "o": [
    "notIn",
    "in",
    "notEquals",
    "contains"
   ],
   "a": 0
  },
  {
   "l": "[3] :",
   "o": [
    "deny",
    "audit",
    "modify",
    "append"
   ],
   "a": 0
  },
  {
   "l": "[4] :",
   "o": [
    "Array",
    "String",
    "Object",
    "Boolean"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Champ type.</b> field = type filtre le type de ressource.<b>notIn.</b> La condition est vraie quand la SKU n'est pas dans la liste : l'effet s'applique alors aux SKU non autorisées.<b>deny.</b> Bloque la création ou la mise à jour.<b>Array.</b> Une liste de valeurs se passe dans un paramètre de type Array (avec éventuellement allowedValues).",
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
    "*[1]",
    "type"
   ],
   [
    "[2]",
    "notIn"
   ],
   [
    "[3]",
    "deny"
   ],
   [
    "[4]",
    "Array"
   ]
  ]
 },
 "keep": "type + notIn + deny + Array."
},
{
 "id": "D1-418",
 "dom": 1,
 "type": "hot",
 "stem": "<p>L'équipe gouvernance de Contoso a attribué ce matin la stratégie « Emplacements autorisés » (effet Deny, Europe uniquement) à l'abonnement Prod. Questions :</p><ul><li>25 ressources existantes sont en East US ; l'équipe veut savoir ce qui leur arrive ;</li><li>une heure après l'attribution, le tableau de conformité n'affiche encore aucun résultat ; l'équipe veut lancer l'évaluation immédiatement ;</li><li>l'équipe veut tester l'effet de la stratégie sur l'abonnement Test pendant une semaine, sans bloquer qui que ce soit, tout en voyant les résultats de conformité ;</li><li>dans six mois, une nouvelle VM sera créée en East US par un modèle ARM.</li></ul><p>Que se passera-t-il, et que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "25 ressources existantes :",
   "o": [
    "Supprimées automatiquement",
    "Bloquées en lecture seule",
    "Non conformes, mais intactes",
    "Déplacées vers une région européenne"
   ],
   "a": 2
  },
  {
   "l": "Évaluation immédiate :",
   "o": [
    "Supprimer et recréer l'attribution",
    "az policy state trigger-scan",
    "Redémarrer les ressources",
    "az policy assignment update"
   ],
   "a": 1
  },
  {
   "l": "Test sans blocage :",
   "o": [
    "Une exclusion de l'abonnement",
    "Effet Disabled",
    "Une exemption de l'abonnement",
    "Mode d'application désactivé"
   ],
   "a": 3
  },
  {
   "l": "VM créée dans six mois :",
   "o": [
    "VM créée en Europe à la place",
    "VM créée puis non conforme",
    "Déploiement refusé",
    "VM créée, alerte envoyée"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Existant.</b> Deny n'agit que sur les requêtes de création ou de mise à jour : les ressources existantes sont signalées non conformes, sans modification.<b>Évaluation.</b> Une nouvelle attribution est évaluée dans les 30 minutes environ ; l'évaluation standard a lieu toutes les 24 heures. az policy state trigger-scan (ou Start-AzPolicyComplianceScan) lance une analyse à la demande.<b>Mode d'application.</b> Désactivé (DoNotEnforce), il évalue la conformité sans appliquer l'effet. L'effet Disabled ne produit aucun résultat ; une exemption ou exclusion retire l'étendue de l'évaluation.",
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
    "*25 ressources existantes",
    "Non conformes, mais intactes"
   ],
   [
    "Évaluation immédiate",
    "az policy state trigger-scan"
   ],
   [
    "Test sans blocage",
    "Mode d'application désactivé"
   ],
   [
    "VM créée dans six mois",
    "Déploiement refusé"
   ]
  ]
 },
 "keep": "Deny n'agit pas sur l'existant. Analyse = trigger-scan. Tester = DoNotEnforce."
},
{
 "id": "D1-419",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso veut alléger la charge de son équipe d'administration Microsoft Entra ID :</p><ul><li>les responsables de service doivent gérer eux-mêmes les membres de leurs groupes de sécurité, sans rôle d'administrateur ;</li><li>les groupes Microsoft 365 inactifs doivent être supprimés automatiquement s'ils ne sont pas renouvelés par leur propriétaire tous les 180 jours ;</li><li>tous les nouveaux groupes Microsoft 365 doivent avoir un nom qui commence par GRP- ;</li><li>un groupe supprimé par erreur il y a 10 jours doit être restauré.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Responsables de service :",
   "o": [
    "Propriétaires des groupes",
    "Rôle Groups Administrator",
    "Rôle User Administrator",
    "Unité administrative"
   ],
   "a": 0
  },
  {
   "l": "Groupes inactifs :",
   "o": [
    "Une tâche planifiée Graph",
    "Une règle de cycle de vie Azure",
    "Révisions d'accès sur les groupes",
    "Stratégie d'expiration des groupes"
   ],
   "a": 3
  },
  {
   "l": "Préfixe GRP- :",
   "o": [
    "Stratégie de nommage",
    "Un groupe dynamique avec une règle de nom",
    "Un modèle",
    "Une stratégie Azure Deny sur les groupes"
   ],
   "a": 0
  },
  {
   "l": "Groupe supprimé il y a 10 jours :",
   "o": [
    "Seulement par le support Microsoft",
    "Oui, si groupe Microsoft 365",
    "Oui, quel que soit le type de groupe",
    "Impossible après 7 jours"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Propriétaires.</b> Les propriétaires d'un groupe gèrent ses membres sans rôle d'administrateur.<b>Expiration.</b> La stratégie d'expiration des groupes Microsoft 365 envoie des avis de renouvellement aux propriétaires ; un groupe non renouvelé est supprimé (et reste restaurable 30 jours). Les groupes actifs sont renouvelés automatiquement.<b>Nommage.</b> La stratégie de nommage ajoute un préfixe ou un suffixe et peut bloquer des mots ; elle s'applique aux groupes Microsoft 365.<b>Restauration.</b> Seuls les groupes Microsoft 365 supprimés sont restaurables (30 jours) ; un groupe de sécurité supprimé l'est définitivement.",
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
    "*Responsables de service",
    "Propriétaires des groupes"
   ],
   [
    "Groupes inactifs",
    "Stratégie d'expiration des groupes"
   ],
   [
    "Préfixe GRP-",
    "Stratégie de nommage"
   ],
   [
    "Groupe supprimé il y a 10 jours",
    "Oui, si groupe Microsoft 365"
   ]
  ]
 },
 "keep": "Gérer ses membres = propriétaire. Inactifs = expiration. Préfixe = nommage. Restaurable = groupes Microsoft 365 (30 jours)."
},
{
 "id": "D1-420",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam veut attribuer des rôles Microsoft Entra à des groupes plutôt qu'à des utilisateurs :</p><ul><li>le groupe Admins-Helpdesk doit recevoir le rôle Helpdesk Administrator ; ses membres doivent hériter du rôle ;</li><li>le groupe a été créé hier comme groupe de sécurité standard ; le portail ne propose pas ce groupe lors de l'attribution du rôle ;</li><li>l'équipe voudrait que l'appartenance au groupe soit dynamique, selon l'attribut jobTitle ;</li><li>un utilisateur avec le rôle User Administrator tente de modifier les membres du groupe et échoue.</li></ul><p>Qu'est-ce qui est vrai, et que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Groupe absent de la liste :",
   "o": [
    "Recréer le groupe",
    "Convertir le groupe existant avec PowerShell",
    "Passer le groupe en Microsoft 365, puis réessayer",
    "Attendre la synchronisation"
   ],
   "a": 0
  },
  {
   "l": "Appartenance dynamique :",
   "o": [
    "Possible avec une règle sur jobTitle",
    "Impossible",
    "Possible avec une licence P2",
    "Possible avec une licence P1 sur le locataire"
   ],
   "a": 1
  },
  {
   "l": "User Administrator :",
   "o": [
    "Doit attendre 10 minutes",
    "Peut gérer le groupe sans restriction",
    "Doit être propriétaire de l'abonnement",
    "Ne peut pas gérer ce groupe protégé"
   ],
   "a": 3
  },
  {
   "l": "Qui peut gérer le groupe :",
   "o": [
    "Privileged Role Admin, propriétaires",
    "Tout Groups Administrator du locataire",
    "Tout User Administrator du locataire",
    "Tout membre"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Groupe assignable à un rôle.</b> La propriété isAssignableToRole doit être définie à la création ; elle ne peut pas être ajoutée à un groupe existant.<b>Pas de dynamique.</b> Un groupe assignable à un rôle ne peut pas avoir d'appartenance dynamique.<b>Protection.</b> Ces groupes ne peuvent être gérés que par Privileged Role Administrator, Global Administrator ou leurs propriétaires : User Administrator et Groups Administrator ne peuvent pas modifier leurs membres, pour éviter une élévation de privilèges.",
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
    "*Groupe absent de la liste",
    "Recréer le groupe"
   ],
   [
    "Appartenance dynamique",
    "Impossible"
   ],
   [
    "User Administrator",
    "Ne peut pas gérer ce groupe protégé"
   ],
   [
    "Qui peut gérer le groupe",
    "Privileged Role Admin, propriétaires"
   ]
  ]
 },
 "keep": "Assignable à un rôle = à la création, pas dynamique, géré par Privileged Role Admin ou propriétaires."
}
);
