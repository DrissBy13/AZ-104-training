/* Domaine 1 : identités et gouvernance (lot G : D1-301 à D1-331, questions à réponses multiples issues de la fusion des QCM) */
AZ.questions.push(
{
 "id": "D1-301",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous répartissez les rôles d'administration de Microsoft Entra ID. Que devez-vous faire ou répondre pour chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un administrateur général doit gérer tous les abonnements et groupes d'administration, même sans rôle Azure :",
   "o": [
    "Activer « Gestion de l'accès pour les ressources Azure »",
    "Ajouter Admin1 au groupe d'administration racine",
    "Attribuer à Admin1 Propriétaire sur chaque abonnement",
    "Attribuer à Admin1 Administrateur de rôle privilégié"
   ],
   "a": 0
  },
  {
   "l": "Admin3 (Administrateur d'utilisateurs) veut réinitialiser le mot de passe d'un Administrateur général :",
   "o": [
    "Oui, mais seulement si l'Administrateur général l'y autorise",
    "Non : Administrateur général ou d'authentification privilégiée",
    "Oui, Administrateur d'utilisateurs peut réinitialiser tous les mots de passe",
    "Non, aucun mot de passe d'administrateur ne peut être réinitialisé"
   ],
   "a": 1
  },
  {
   "l": "Aucun utilisateur ne doit avoir le rôle Administrateur général sans en avoir besoin — recommandation :",
   "o": [
    "Supprimer tous les administrateurs généraux",
    "Moins de cinq administrateurs généraux, rôles moins privilégiés",
    "Donner le rôle Administrateur général à tous les administrateurs",
    "Attribuer Administrateur général à un groupe dynamique"
   ],
   "a": 1
  },
  {
   "l": "User13, propriétaire du groupe attribué GRP-Projet, sans rôle d'administrateur, peut :",
   "o": [
    "Ajouter et retirer des membres de GRP-Projet",
    "Supprimer les comptes des membres de GRP-Projet",
    "Attribuer des licences aux membres de GRP-Projet",
    "Réinitialiser le mot de passe des membres de GRP-Projet"
   ],
   "a": 0
  },
  {
   "l": "Attribuer un rôle Microsoft Entra à un groupe — propriété requise :",
   "o": [
    "Contenir uniquement des utilisateurs invités",
    "Avoir une appartenance dynamique",
    "L'option « rôles Microsoft Entra attribuables » à la création",
    "Être un groupe Microsoft 365 avec une boîte aux lettres partagée"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Un administrateur général doit gérer tous les abonnements et groupes d'administration, même sans rôle Azure :</b></p><p>Le réglage <b>Gestion de l'accès pour les ressources Azure</b> (élévation d'accès), dans les propriétés de Microsoft Entra ID, donne à l'administrateur général le rôle <b>Administrateur de l'accès utilisateur</b> à l'étendue racine <code>/</code>. Il peut alors s'attribuer les rôles nécessaires sur tout abonnement ou groupe d'administration.</p><ul><li>Pour attribuer Propriétaire sur chaque abonnement, il faudrait déjà avoir les droits sur ces abonnements.</li><li><b>Administrateur de rôle privilégié</b> gère les rôles Microsoft Entra, pas les rôles Azure.</li><li>On n'« ajoute » pas un utilisateur à un groupe d'administration : on lui attribue un rôle dessus, ce qui demande déjà des droits.</li></ul><p><b>2. Admin3 (Administrateur d'utilisateurs) veut réinitialiser le mot de passe d'un Administrateur général :</b></p><p>Administrateur d'utilisateurs peut réinitialiser le mot de passe des utilisateurs non administrateurs et de certains rôles limités, mais <b>pas</b> celui d'un Administrateur général. Il faut un rôle au moins aussi privilégié : Administrateur général ou Administrateur d'authentification privilégiée.</p><p>Cette règle empêche un administrateur de prendre le contrôle d'un compte plus puissant que le sien.</p><p><b>3. Aucun utilisateur ne doit avoir le rôle Administrateur général sans en avoir besoin — recommandation :</b></p><p>Microsoft recommande d'avoir <b>moins de cinq</b> administrateurs généraux (mais au moins deux, dont un compte d'urgence) et d'utiliser des rôles plus spécifiques pour le reste.</p><p>Supprimer tous les administrateurs généraux est impossible et dangereux. Les groupes qui reçoivent des rôles Entra ne peuvent pas être dynamiques.</p><p><b>4. User13, propriétaire du groupe attribué GRP-Projet, sans rôle d'administrateur, peut :</b></p><p>Le <b>propriétaire</b> d'un groupe gère le groupe : membres, propriétaires, nom, description. Il peut aussi le supprimer.</p><p>Il n'a aucun droit sur les <b>comptes</b> des membres : réinitialiser leur mot de passe, leur attribuer des licences ou les supprimer demande un rôle Microsoft Entra adapté.</p><p><b>5. Attribuer un rôle Microsoft Entra à un groupe — propriété requise :</b></p><p>Seuls les groupes créés avec l'option <b>« Des rôles Microsoft Entra peuvent être attribués au groupe »</b> (isAssignableToRole) peuvent recevoir un rôle Entra. Cette option ne se choisit qu'à la création et ne peut plus être modifiée.</p><p>Ces groupes ne peuvent pas avoir d'appartenance dynamique, pour éviter qu'un simple changement d'attribut donne un rôle d'administrateur. Le type peut être sécurité ou Microsoft 365.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID"
  ],
  "title": "Microsoft Entra ID | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "*Propriétés"
  ],
  "rows": [
   [
    "*Gestion de l'accès pour les ressources Azure",
    "Oui"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Élévation d'accès = Administrateur de l'accès utilisateur à la racine « / ». À désactiver après usage. On ne réinitialise pas le mot de passe d'un rôle plus privilégié que le sien. Peu d'administrateurs généraux (2 à 4) ; des rôles ciblés pour le reste. Propriétaire d'un groupe = gère le groupe, jamais les comptes de ses membres. Rôle Entra sur un groupe = option isAssignableToRole cochée à la création, appartenance attribuée uniquement."
},
{
 "id": "D1-302",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>La direction financière veut maîtriser les coûts Azure. Vous devez choisir l'outil ou la configuration qui répond à chaque demande.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Outils",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "Azure Advisor",
  "La calculatrice de prix Azure",
  "Azure Resource Graph",
  "L'analyse des coûts groupée par service",
  "Un export planifié de Gestion des coûts",
  "Un budget avec une alerte sur le coût prévu",
  "Un groupe d'actions associé au budget",
  "Azure Policy"
 ],
 "tgts": [
  {
   "l": "Liste des VM sous-utilisées avec des recommandations de redimensionnement ou d'arrêt",
   "a": 0
  },
  {
   "l": "Coût mensuel de 3 VM, d'un compte de stockage et d'une passerelle VPN avant le déploiement",
   "a": 1
  },
  {
   "l": "VM des 40 abonnements qui n'ont pas l'étiquette Proprietaire, en une requête",
   "a": 2
  },
  {
   "l": "Identifier le service responsable d'une forte hausse ce mois-ci",
   "a": 3
  },
  {
   "l": "Un CSV quotidien des coûts de Sub1 pour un outil interne",
   "a": 4
  },
  {
   "l": "E-mail quand le coût prévu de RG1 dépasse 80 % de 1 000 €",
   "a": 5
  },
  {
   "l": "Déclencher un runbook qui arrête les VM de développement en plus de l'e-mail",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Liste des VM sous-utilisées avec des recommandations de redimensionnement ou d'arrêt</b></p><p><b>Azure Advisor</b> analyse l'utilisation des ressources et donne des recommandations par catégorie : Coût, Sécurité, Fiabilité, Excellence opérationnelle et Performances. Dans la catégorie Coût, il signale les VM sous-utilisées et propose de les redimensionner ou de les arrêter.</p><p>Azure Policy vérifie des règles de conformité. Entra ID gère les identités. Resource Graph permet de requêter l'inventaire des ressources, mais ne donne pas de recommandation.</p><p><b>2. Coût mensuel de 3 VM, d'un compte de stockage et d'une passerelle VPN avant le déploiement</b></p><p>La <b>calculatrice de prix</b> estime le coût de services pas encore déployés : on choisit les services, la région, les tailles et les quantités.</p><p>L'<b>Analyse des coûts</b> et les <b>budgets</b> portent sur les dépenses réelles des ressources existantes. <b>Advisor</b> recommande des économies sur ce qui est déjà déployé.</p><p><b>3. VM des 40 abonnements qui n'ont pas l'étiquette Proprietaire, en une requête</b></p><p><b>Azure Resource Graph</b> interroge l'inventaire des ressources de plusieurs abonnements en même temps, avec le langage KQL. Il répond en quelques secondes, ce qui en fait l'outil adapté pour ce type d'inventaire.</p><p>Advisor donne des recommandations. L'Analyse des coûts montre des dépenses. Le journal d'activité trace des opérations, pas l'état actuel des ressources.</p><p><b>4. Identifier le service responsable d'une forte hausse ce mois-ci</b></p><p>Dans l'<b>analyse des coûts</b>, l'option <b>Grouper par</b> (nom du service, groupe de ressources, ressource, étiquette, emplacement…) montre la répartition des dépenses. Grouper par nom du service révèle celui qui a augmenté.</p><p>Un budget alerte pour l'avenir. Un export sert à archiver ou à analyser ailleurs. Le journal d'activité ne contient pas de coûts.</p><p><b>5. Un CSV quotidien des coûts de Sub1 pour un outil interne</b></p><p>Les <b>exports</b> de Gestion des coûts écrivent les données de coût dans un <b>compte de stockage</b>, à une fréquence choisie (quotidienne, hebdomadaire, mensuelle), au format CSV ou Parquet.</p><p>Une alerte de budget envoie un message, pas un fichier de données. Advisor ne produit pas de fichier de coûts. Le paramètre de diagnostic de l'abonnement envoie le journal d'activité, pas les coûts.</p><p><b>6. E-mail quand le coût prévu de RG1 dépasse 80 % de 1 000 €</b></p><p>Un <b>budget</b> de Gestion des coûts fixe un montant (ici 1 000 € par mois) et des <b>conditions d'alerte</b> en pourcentage, sur le coût <b>Réel</b> (déjà dépensé) ou <b>Prévu</b> (projection de fin de période). Ici : type Prévu, seuil 80 %, avec un e-mail ou un groupe d'actions.</p><ul><li><b>Advisor</b> recommande des économies, mais n'alerte pas sur un seuil.</li><li><b>Azure Policy</b> contrôle la configuration des ressources, pas les coûts.</li><li><b>Une alerte de métrique</b> surveille des valeurs techniques (CPU, requêtes…), pas des dépenses.</li></ul><p><b>7. Déclencher un runbook qui arrête les VM de développement en plus de l'e-mail</b></p><p>Les budgets acceptent un <b>groupe d'actions</b> (action group) d'Azure Monitor. Un groupe d'actions peut envoyer des e-mails et des SMS, mais aussi lancer un runbook Automation, une fonction Azure, une application logique ou un webhook.</p><p>Les autres réponses ne réagissent pas à une alerte.</p>",
 "portal": {
  "path": [
   "Advisor"
  ],
  "title": "Advisor | Coût",
  "menu": [
   "Vue d'ensemble",
   "*Coût",
   "Sécurité",
   "Fiabilité",
   "Performances"
  ],
  "rows": [
   [
    "*Redimensionner ou arrêter les machines virtuelles sous-utilisées",
    "12 ressources concernées"
   ],
   [
    "Acheter des réservations de machines virtuelles",
    "Économies estimées"
   ]
  ]
 },
 "keep": "VM sous-utilisées, réservations conseillées = Azure Advisor, catégorie Coût. Coût avant déploiement = calculatrice de prix (azure.microsoft.com/pricing/calculator). Dépenses réelles = Gestion des coûts. Inventaire de ressources sur plusieurs abonnements en une requête KQL = Azure Resource Graph. Trouver d'où vient une hausse = Analyse des coûts > Grouper par (service, ressource, étiquette…). Fichier de coûts régulier = export Gestion des coûts vers un compte de stockage. Budget = alertes sur coût réel ou prévu, à un pourcentage du montant. Il prévient, il ne bloque jamais. Faire agir un budget (runbook, fonction, webhook) = groupe d'actions."
},
{
 "id": "D1-303",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Plusieurs utilisateurs cumulent des attributions de rôles Azure. Que peuvent-ils faire dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un Contributeur de Sub1 n'arrive pas à supprimer un verrou d'un groupe de ressources — raison :",
   "o": [
    "Il faut d'abord supprimer les ressources du groupe",
    "Les verrous ne peuvent être supprimés que par leur créateur",
    "Un verrou ne peut pas être supprimé pendant 24 heures",
    "Contributeur n'a pas l'action locks/delete"
   ],
   "a": 3
  },
  {
   "l": "User6 est dans le groupe A (Lecteur sur RG1) et le groupe B (Contributeur sur RG1) — autorisations :",
   "o": [
    "Celles du rôle attribué en premier",
    "Lecteur, car le rôle le plus restrictif l'emporte",
    "Contributeur : les autorisations s'additionnent",
    "Aucune, car les deux rôles se contredisent"
   ],
   "a": 2
  },
  {
   "l": "User9 a un rôle personnalisé dont les NotActions excluent la suppression des comptes, et Contributeur sur RG1 — peut-il supprimer un compte ?",
   "o": [
    "Non, car NotActions interdit la suppression",
    "Non, car le rôle le plus restrictif l'emporte",
    "Oui, mais seulement après 24 heures",
    "Oui, car Contributeur accorde la suppression"
   ],
   "a": 3
  },
  {
   "l": "User21 est Lecteur sur Sub1 et Contributeur sur RG3 (dans Sub1) :",
   "o": [
    "Lire toutes les ressources de Sub1 et modifier celles de RG3",
    "Seulement lire les ressources de Sub1, car Lecteur est attribué plus haut",
    "Seulement modifier RG3, sans voir le reste",
    "Modifier toutes les ressources de Sub1"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Un Contributeur de Sub1 n'arrive pas à supprimer un verrou d'un groupe de ressources — raison :</b></p><p>Créer ou supprimer un verrou demande les actions <code>Microsoft.Authorization/locks/*</code>. Elles sont incluses dans les rôles <b>Propriétaire</b> et <b>Administrateur de l'accès utilisateur</b>, mais <b>pas</b> dans Contributeur, qui exclut toutes les actions Microsoft.Authorization.</p><p>N'importe qui ayant ces droits peut supprimer un verrou, pas seulement son créateur. Il n'y a aucun délai de 24 heures, et on supprime un verrou sans toucher aux ressources.</p><p><b>2. User6 est dans le groupe A (Lecteur sur RG1) et le groupe B (Contributeur sur RG1) — autorisations :</b></p><p>Le contrôle d'accès en fonction du rôle Azure est <b>additif</b> : les autorisations de toutes les attributions s'additionnent. User6 a donc les droits de Contributeur, qui incluent ceux de Lecteur.</p><p>Seules les <b>affectations de refus</b> peuvent retirer une autorisation. L'ordre des attributions n'a aucune importance, et deux rôles ne se « contredisent » jamais.</p><p><b>3. User9 a un rôle personnalisé dont les NotActions excluent la suppression des comptes, et Contributeur sur RG1 — peut-il supprimer un compte ?</b></p><p><b>NotActions n'est pas un refus</b> : il retire seulement des actions du rôle où il est écrit. Si un autre rôle accorde l'action, elle est autorisée. Contributeur accorde <code>*</code>, donc la suppression.</p><p>Les autorisations Azure s'additionnent. Seule une affectation de refus bloquerait l'action malgré Contributeur.</p><p><b>4. User21 est Lecteur sur Sub1 et Contributeur sur RG3 (dans Sub1) :</b></p><p>Les rôles s'<b>additionnent</b> : Lecteur sur Sub1 donne la lecture partout, Contributeur sur RG3 ajoute la modification dans RG3.</p><p>Un rôle attribué plus haut ne restreint jamais un rôle attribué plus bas. Contributeur sur RG3 ne s'étend pas au reste de l'abonnement.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "RG1 | Verrous",
  "menu": [
   "Vue d'ensemble",
   "Contrôle d'accès (IAM)",
   "*Verrous"
  ],
  "rows": [
   [
    "*Supprimer le verrou",
    "Exige Microsoft.Authorization/locks/delete"
   ],
   [
    "Rôles qui l'ont",
    "Propriétaire, Administrateur de l'accès utilisateur"
   ]
  ]
 },
 "keep": "Gérer des verrous = Propriétaire ou Administrateur de l'accès utilisateur. Contributeur ne peut pas. RBAC est additif : les droits de tous les rôles s'additionnent. Seule une affectation de refus retire un droit. NotActions n'est pas un refus : un autre rôle peut accorder l'action. Seule une affectation de refus bloque. Les rôles s'additionnent ; un rôle plus haut ne limite jamais un rôle plus bas."
},
{
 "id": "D1-304",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Des utilisateurs signalent des problèmes d'accès aux ressources Azure. Que devez-vous répondre dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "User14 vient de recevoir Lecteur sur RG1 mais ne voit pas les ressources :",
   "o": [
    "L'attribution met quelques minutes : se reconnecter",
    "Contributeur ne permet pas de voir les ressources",
    "Il faut aussi lui attribuer une licence Microsoft Entra ID P2",
    "Le rôle doit être attribué deux fois pour être actif"
   ],
   "a": 0
  },
  {
   "l": "Contributeur donne « tous les droits » mais ne permet pas d'attribuer des accès :",
   "o": [
    "Contributeur est un rôle Microsoft Entra, pas Azure",
    "Contributeur ne s'applique qu'aux groupes de ressources",
    "Ses NotActions excluent Microsoft.Authorization (écriture)",
    "Contributeur ne contient que des actions de lecture"
   ],
   "a": 2
  },
  {
   "l": "Attributions de rôles d'utilisateurs supprimés d'Entra ID, dans l'onglet IAM :",
   "o": [
    "Elles sont transférées au responsable de l'utilisateur",
    "Elles apparaissent comme attributions de groupe",
    "Type « Inconnu », nom « Identité introuvable »",
    "Elles sont supprimées automatiquement avec l'utilisateur"
   ],
   "a": 2
  },
  {
   "l": "Nouvel utilisateur sans aucun rôle — ressources Azure visibles :",
   "o": [
    "Les ressources des abonnements dont il connaît l'ID",
    "Les ressources de son groupe de ressources par défaut",
    "Aucune ressource Azure, faute de rôle",
    "Toutes les ressources du locataire en lecture"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. User14 vient de recevoir Lecteur sur RG1 mais ne voit pas les ressources :</b></p><p>Une nouvelle attribution peut prendre jusqu'à une dizaine de minutes pour être prise en compte. Se déconnecter puis se reconnecter (ou actualiser le portail) force la récupération d'un nouveau jeton.</p><p>Aucune licence n'est requise pour un rôle Azure. Contributeur inclut la lecture.</p><p><b>2. Contributeur donne « tous les droits » mais ne permet pas d'attribuer des accès :</b></p><p>La définition de Contributeur accorde <code>*</code> dans Actions, mais exclut dans NotActions l'écriture et la suppression dans <code>Microsoft.Authorization</code> (attributions de rôles, verrous, stratégies d'autorisation) ainsi que l'élévation d'accès. Il gère donc tout, sauf les accès.</p><p>Contributeur peut être attribué à toute étendue et c'est un rôle Azure.</p><p><b>3. Attributions de rôles d'utilisateurs supprimés d'Entra ID, dans l'onglet IAM :</b></p><p>Supprimer un utilisateur ne supprime pas ses attributions de rôles Azure. Elles restent visibles avec le type <b>Inconnu</b> et la mention <b>Identité introuvable</b>. Il est conseillé de les nettoyer, car elles comptent dans la limite d'attributions de l'abonnement.</p><p><b>4. Nouvel utilisateur sans aucun rôle — ressources Azure visibles :</b></p><p>L'accès aux ressources Azure est <b>refusé par défaut</b>. Sans attribution de rôle Azure, User19 ne voit aucun abonnement ni aucune ressource. Il peut seulement se connecter au portail et voir certaines informations de l'annuaire, selon les paramètres utilisateur.</p><p>Il n'existe pas de « groupe de ressources par défaut » par utilisateur, et connaître un ID ne donne aucun accès.</p>",
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
    "*User14 · Contributeur",
    "Ajouté il y a 2 minutes"
   ],
   [
    "Propagation",
    "Jusqu'à ~10 minutes, actualiser ou se reconnecter"
   ]
  ]
 },
 "keep": "Une nouvelle attribution peut prendre quelques minutes : se reconnecter pour un nouveau jeton. Contributeur = tout sauf Microsoft.Authorization en écriture (rôles, verrous). Utilisateur supprimé : ses attributions restent, en « Identité introuvable » ; à nettoyer. Sans rôle Azure, on ne voit aucune ressource : l'accès est refusé par défaut."
},
{
 "id": "D1-305",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous attribuez des stratégies Azure Policy avec différents effets. Que se passe-t-il ou que devez-vous choisir dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Deux stratégies Modify et Deny sur les comptes de stockage — ordre d'évaluation :",
   "o": [
    "Dans l'ordre alphabétique des définitions",
    "Les deux en même temps, Deny l'emporte",
    "Modify, puis Deny",
    "Deny, puis Modify"
   ],
   "a": 2
  },
  {
   "l": "Une stratégie Append ajoute une règle IP au pare-feu des comptes créés :",
   "o": [
    "Append ajoute des champs à la requête",
    "Append déploie une ressource séparée après la création",
    "Append supprime les champs non conformes de la requête",
    "Append bloque la création si le champ est absent"
   ],
   "a": 0
  },
  {
   "l": "Stratégie qui ajoute Env=Prod si elle manque ; storage5 est créé avec Env=Dev :",
   "o": [
    "Env=Prod",
    "Env=Prod et Env=Dev",
    "Aucune : la création est refusée",
    "Env=Dev"
   ],
   "a": 3
  },
  {
   "l": "Les nouvelles VM doivent être reliées automatiquement à WS1 — effet :",
   "o": [
    "Audit",
    "DeployIfNotExists",
    "Append",
    "Deny"
   ],
   "a": 1
  },
  {
   "l": "Signaler les VM sans extension antivirus, sans rien déployer ni bloquer — effet :",
   "o": [
    "Modify",
    "AuditIfNotExists",
    "Deny",
    "DeployIfNotExists"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Deux stratégies Modify et Deny sur les comptes de stockage — ordre d'évaluation :</b></p><p>L'ordre d'évaluation est : <b>Disabled</b>, puis <b>Append et Modify</b>, puis <b>Deny</b>, puis <b>Audit</b>, et enfin, après la création, <b>AuditIfNotExists et DeployIfNotExists</b>.</p><p>Comme Modify passe avant Deny, une requête peut être corrigée par Modify puis acceptée par Deny, ce qui évite des refus inutiles.</p><p><b>2. Une stratégie Append ajoute une règle IP au pare-feu des comptes créés :</b></p><p><b>Append</b> ajoute des champs à la ressource pendant sa création ou sa mise à jour, par exemple une règle IP ou une valeur de propriété. Pour les étiquettes, l'effet <b>Modify</b> est aujourd'hui préféré.</p><p>Bloquer relève de <b>Deny</b>. Déployer une ressource séparée relève de <b>DeployIfNotExists</b>. Append n'enlève rien.</p><p><b>3. Stratégie qui ajoute Env=Prod si elle manque ; storage5 est créé avec Env=Dev :</b></p><p>Une stratégie de type « ajouter l'étiquette <b>si elle manque</b> » utilise l'opération <code>addOrReplace</code> avec une condition sur l'absence de l'étiquette. Comme storage5 a déjà Env, la condition n'est pas remplie : la valeur <b>Env=Dev</b> est conservée.</p><p>Une stratégie sans cette condition, qui force la valeur, remplacerait Dev par Prod. Une étiquette ne peut pas avoir deux valeurs. Modify ne refuse jamais une requête.</p><p><b>4. Les nouvelles VM doivent être reliées automatiquement à WS1 — effet :</b></p><p><b>DeployIfNotExists</b> vérifie qu'une ressource liée existe (ici, l'agent ou le paramètre de diagnostic) et la déploie sinon, à l'aide de l'identité managée de l'affectation.</p><p>Audit ne fait que signaler. Deny bloquerait la création des VM au lieu de les configurer. Append ajoute des champs à la requête de création, mais ne peut pas déployer d'extension.</p><p><b>5. Signaler les VM sans extension antivirus, sans rien déployer ni bloquer — effet :</b></p><p><b>AuditIfNotExists</b> vérifie l'existence d'une ressource liée (ici l'extension) et marque la VM non conforme si elle manque. Il ne déploie rien.</p><p>DeployIfNotExists l'installerait. Deny bloquerait la création des VM. Modify changerait des propriétés de la VM.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Définitions"
  ],
  "title": "Ordre d'évaluation",
  "menu": [
   "*Définitions"
  ],
  "rows": [
   [
    "1",
    "Disabled"
   ],
   [
    "*2",
    "Append, Modify"
   ],
   [
    "*3",
    "Deny"
   ],
   [
    "4",
    "Audit"
   ],
   [
    "5 (après création)",
    "AuditIfNotExists, DeployIfNotExists"
   ]
  ]
 },
 "keep": "Ordre : Disabled → Append/Modify → Deny → Audit → *IfNotExists. Append ajoute des champs à la requête ; il ne bloque ni ne déploie. « Ajouter si manquante » ne touche pas une étiquette déjà présente. Modify ne refuse jamais. Configurer automatiquement ce qui manque (agent, diagnostic) = DeployIfNotExists. Signaler l'absence d'une ressource liée = AuditIfNotExists ; la déployer = DeployIfNotExists."
},
{
 "id": "D1-306",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous renforcez la gouvernance des accès privilégiés et des ressources. Que devez-vous utiliser ou répondre pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Accès privilégié à activer pendant la clôture, avec Entra ID P2 — type d'attribution :",
   "o": [
    "Attribution par unité administrative",
    "Active permanente",
    "Active avec date de fin dans un an",
    "Éligible"
   ],
   "a": 3
  },
  {
   "l": "Accès accordé 3 mois puis retiré automatiquement, gestion minimale :",
   "o": [
    "Un verrou sur le groupe de ressources",
    "Une attribution active dans PIM avec une date de fin",
    "Une attribution classique, à supprimer dans 3 mois",
    "Un budget de 3 mois sur le groupe de ressources"
   ],
   "a": 1
  },
  {
   "l": "Activer un rôle seulement au besoin, pour une durée limitée, avec justification :",
   "o": [
    "Des unités administratives par équipe",
    "Une stratégie Azure Policy en mode Deny",
    "Privileged Identity Management (PIM)",
    "Des verrous sur les ressources critiques"
   ],
   "a": 2
  },
  {
   "l": "Comptes sensibles gérés seulement dans l'unité, intouchables par les administrateurs du locataire :",
   "o": [
    "Un groupe de sécurité attribuable à un rôle",
    "Une unité administrative de gestion restreinte",
    "Un verrou de ressource en lecture seule",
    "Une affectation de refus Azure sur le groupe"
   ],
   "a": 1
  },
  {
   "l": "Une affectation de refus apparaît dans l'IAM de RG1 :",
   "o": [
    "Une affectation de refus ne vise que les rôles Microsoft Entra",
    "Elles sont créées par Azure (par exemple piles de déploiement)",
    "Vous pouvez créer vous-même une affectation de refus dans le portail",
    "Une affectation de refus est plus faible qu'une attribution de rôle"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Accès privilégié à activer pendant la clôture, avec Entra ID P2 — type d'attribution :</b></p><p>Une attribution <b>éligible</b> ne donne pas le rôle en permanence : l'utilisateur l'<b>active</b> au moment voulu, pour une durée maximale définie (par exemple 8 heures), avec justification ou approbation.</p><p>Une attribution <b>active</b> donne le rôle en continu, même avec une date de fin. Une unité administrative limite la portée, pas la durée.</p><p><b>2. Accès accordé 3 mois puis retiré automatiquement, gestion minimale :</b></p><p>PIM permet de créer des attributions (actives ou éligibles) avec une <b>date de début et de fin</b>. À la date de fin, l'accès est retiré automatiquement.</p><p>Une attribution classique dépend de quelqu'un qui pense à la supprimer. Les deux autres options ne gèrent pas d'accès.</p><p><b>3. Activer un rôle seulement au besoin, pour une durée limitée, avec justification :</b></p><p><b>Privileged Identity Management</b> permet de rendre un rôle <b>éligible</b> au lieu de permanent : l'administrateur l'active pour une durée limitée, avec justification, authentification multifacteur ou approbation si besoin. PIM fonctionne pour les rôles Microsoft Entra et les rôles Azure. Il demande Microsoft Entra ID P2.</p><p>Les verrous, Azure Policy et les unités administratives ne gèrent pas l'activation temporaire des rôles.</p><p><b>4. Comptes sensibles gérés seulement dans l'unité, intouchables par les administrateurs du locataire :</b></p><p>Une <b>unité administrative de gestion restreinte</b> protège ses objets : seuls les administrateurs attribués <b>sur cette unité</b> peuvent les modifier. Même un administrateur d'utilisateurs au niveau du locataire ne peut plus les gérer.</p><p>Un groupe attribuable à un rôle sert à attribuer des rôles Entra à un groupe. Les verrous et les affectations de refus concernent les ressources Azure, pas les objets de l'annuaire.</p><p><b>5. Une affectation de refus apparaît dans l'IAM de RG1 :</b></p><p>Les <b>affectations de refus</b> bloquent des actions même si un rôle les autorise : elles sont évaluées <b>avant</b> les attributions de rôles. Mais on ne peut pas en créer directement : elles sont créées et gérées par Azure, par exemple par les <b>piles de déploiement</b> (deployment stacks) ou des applications managées.</p><p>Elles concernent les ressources Azure, pas les rôles Microsoft Entra. Pour protéger des ressources vous-même, utilisez plutôt des verrous ou Azure Policy.</p>",
 "portal": {
  "path": [
   "Privileged Identity Management",
   "Rôles Microsoft Entra"
  ],
  "title": "Ajouter des attributions | Paramètres",
  "menu": [
   "Membres",
   "*Paramètres"
  ],
  "rows": [
   [
    "*Type d'attribution",
    "Éligible"
   ],
   [
    "Durée maximale d'activation",
    "8 heures"
   ]
  ],
  "btn": "Attribuer"
 },
 "keep": "Rôle utilisé ponctuellement = attribution éligible dans PIM. Accès qui expire seul = attribution PIM avec date de fin. Rôle activé à la demande, limité dans le temps = PIM (Entra ID P2), pour rôles Entra et Azure. Protéger des comptes même contre les admins du locataire = unité administrative de gestion restreinte. Affectation de refus : prioritaire sur les rôles, créée uniquement par Azure (piles de déploiement, applications managées)."
},
{
 "id": "D1-307",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Des verrous de ressources protègent l'environnement de production. Que se passe-t-il ou que devez-vous faire dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Verrou Lecture seule sur WebApp1 — conséquence :",
   "o": [
    "Les utilisateurs ne peuvent plus accéder au site",
    "Plus de modification de configuration ni de mise à l'échelle",
    "Le contenu du site est supprimé à la pose du verrou",
    "WebApp1 passe automatiquement au niveau Gratuit"
   ],
   "a": 1
  },
  {
   "l": "VM1 a un verrou Suppression impossible ; un administrateur supprime RG1 :",
   "o": [
    "Toutes les ressources sauf VM1 sont supprimées, puis RG1",
    "VM1 est déplacée dans un nouveau groupe de ressources",
    "La suppression de RG1 échoue",
    "RG1 et toutes ses ressources sont supprimés"
   ],
   "a": 2
  },
  {
   "l": "Suppression impossible sur RG1 et Lecture seule sur VM1 — verrou effectif sur VM1 :",
   "o": [
    "Lecture seule, le verrou le plus restrictif",
    "Le verrou créé le plus récemment sur la ressource",
    "Suppression impossible, car le verrou du parent l'emporte",
    "Aucun, car les deux verrous s'annulent mutuellement"
   ],
   "a": 0
  },
  {
   "l": "Suppression impossible sur VNet1 ; suppression du sous-réseau vide Subnet3 :",
   "o": [
    "La suppression réussit après confirmation",
    "Le sous-réseau est vidé mais conservé",
    "Elle échoue : le verrou couvre les ressources enfants",
    "La suppression réussit, car le verrou ne protège que VNet1"
   ],
   "a": 2
  },
  {
   "l": "Erreur « scope(s) are locked » en supprimant storage8 :",
   "o": [
    "Retirer le verrou du compte ou de son parent",
    "Désactiver la suppression réversible des blobs",
    "Vider d'abord tous les conteneurs du compte",
    "Attribuer Contributeur aux données blob du stockage"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Verrou Lecture seule sur WebApp1 — conséquence :</b></p><p>Le verrou Lecture seule bloque les opérations de gestion qui écrivent : modifier les paramètres d'application, changer de plan, ajouter une instance. Il empêche aussi des outils comme l'Explorateur de serveurs de Visual Studio d'afficher les fichiers du site, car cette interaction demande un accès en écriture.</p><p>Le site, lui, continue de répondre : les verrous ne touchent pas au trafic des utilisateurs. Rien n'est supprimé ni modifié.</p><p><b>2. VM1 a un verrou Suppression impossible ; un administrateur supprime RG1 :</b></p><p>Supprimer un groupe de ressources revient à supprimer chacune de ses ressources. Comme VM1 ne peut pas être supprimée, l'opération sur RG1 <b>échoue</b>. Pour supprimer RG1, il faut d'abord retirer le verrou.</p><p>Azure ne déplace jamais une ressource tout seul. Selon l'ordre de traitement, certaines ressources sans verrou peuvent déjà avoir été supprimées avant l'échec, d'où l'intérêt de verrouiller le groupe de ressources entier pour les environnements importants.</p><p><b>3. Suppression impossible sur RG1 et Lecture seule sur VM1 — verrou effectif sur VM1 :</b></p><p>Les verrous sont hérités, et quand plusieurs s'appliquent, c'est le <b>plus restrictif</b> qui l'emporte. Lecture seule est plus restrictif que Suppression impossible : VM1 ne peut être ni supprimée ni modifiée.</p><p>Les verrous ne s'annulent jamais, et l'ordre de création ne compte pas.</p><p><b>4. Suppression impossible sur VNet1 ; suppression du sous-réseau vide Subnet3 :</b></p><p>Un verrou s'applique à la ressource <b>et à ses ressources enfants</b>. Un sous-réseau est une ressource enfant du réseau virtuel : sa suppression est bloquée.</p><p>Il faut retirer le verrou, supprimer le sous-réseau, puis remettre le verrou.</p><p><b>5. Erreur « scope(s) are locked » en supprimant storage8 :</b></p><p>Le message indique qu'un <b>verrou</b> s'applique, sur storage8 lui-même ou hérité de son groupe de ressources ou de son abonnement. Il faut le retirer (avec un rôle Propriétaire ou Administrateur de l'accès utilisateur), supprimer le compte, puis remettre le verrou si besoin.</p><p>Le contenu du compte, les rôles de données et la suppression réversible ne sont pas en cause.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Verrous",
  "menu": [
   "Vue d'ensemble",
   "Configuration",
   "*Verrous"
  ],
  "rows": [
   [
    "*Type de verrou",
    "Lecture seule"
   ],
   [
    "Configuration, mise à l'échelle",
    "Bloquées"
   ],
   [
    "Trafic des utilisateurs",
    "Non affecté"
   ]
  ]
 },
 "keep": "Un verrou bloque la gestion, jamais le service rendu aux utilisateurs. Une ressource verrouillée empêche la suppression de son groupe de ressources. Plusieurs verrous : le plus restrictif s'applique. Un verrou couvre la ressource et ses ressources enfants (sous-réseaux…). « scope(s) are locked » = un verrou, direct ou hérité ; le retirer avant de supprimer."
},
{
 "id": "D1-308",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Des applications et des VM doivent accéder à des ressources sans secret. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un principal de service démarre et arrête les VM de RG1 depuis un script :",
   "o": [
    "Ajouter le principal de service à une unité administrative",
    "Attribuer un rôle Azure au principal de service sur RG1",
    "Attribuer au principal de service le rôle Entra Administrateur d'applications",
    "Créer une stratégie Azure Policy pour l'application"
   ],
   "a": 1
  },
  {
   "l": "Une VM lit des secrets d'un coffre sans mot de passe ni certificat dans le code :",
   "o": [
    "Une clé d'accès partagé du coffre de clés",
    "Un verrou en lecture seule sur le coffre de clés",
    "Une identité managée avec un rôle sur les secrets",
    "Un compte utilisateur Microsoft Entra dédié à l'application"
   ],
   "a": 2
  },
  {
   "l": "L'identité attribuée par l'utilisateur ID-App sert à 5 applications web — attribution des rôles :",
   "o": [
    "À l'administrateur qui a créé ID-App",
    "Au groupe de ressources des applications web",
    "À ID-App, une seule fois, sur les cibles",
    "À chaque application web séparément"
   ],
   "a": 2
  },
  {
   "l": "Lire les secrets de KV2, qui utilise le modèle Stratégie d'accès au coffre :",
   "o": [
    "Attribuer le rôle Lecteur sur le coffre KV2",
    "Une stratégie d'accès Get sur les secrets",
    "Activer la suppression réversible sur KV2",
    "Utilisateur des secrets Key Vault sur KV2"
   ],
   "a": 1
  },
  {
   "l": "Connexion Entra à VM1 avec des droits d'administrateur local — rôle :",
   "o": [
    "Administrateur général",
    "Connexion de l'administrateur aux machines virtuelles",
    "Connexion de l'utilisateur aux machines virtuelles",
    "Contributeur de machines virtuelles"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Un principal de service démarre et arrête les VM de RG1 depuis un script :</b></p><p>Un <b>principal de service</b> est une identité comme un utilisateur : on lui attribue un rôle Azure (par exemple Contributeur de machines virtuelles ou un rôle personnalisé) sur l'étendue voulue.</p><p>Les unités administratives et le rôle Administrateur d'applications concernent l'annuaire. Azure Policy n'accorde aucune autorisation.</p><p><b>2. Une VM lit des secrets d'un coffre sans mot de passe ni certificat dans le code :</b></p><p>Une <b>identité managée</b> donne à la VM une identité Microsoft Entra dont Azure gère les informations d'identification. On lui attribue ensuite un rôle, par exemple <b>Utilisateur des secrets Key Vault</b>, sur le coffre.</p><p>Un compte utilisateur obligerait à stocker un mot de passe. Les coffres de clés n'ont pas de « clé d'accès partagé ». Un verrou ne donne aucun accès.</p><p><b>3. L'identité attribuée par l'utilisateur ID-App sert à 5 applications web — attribution des rôles :</b></p><p>L'identité attribuée par l'utilisateur est un principal unique : on lui attribue les rôles <b>une seule fois</b>, et les 5 applications qui l'utilisent en profitent. C'est l'avantage de ce type d'identité quand plusieurs ressources ont besoin des mêmes accès.</p><p><b>4. Lire les secrets de KV2, qui utilise le modèle Stratégie d'accès au coffre :</b></p><p>Avec le modèle <b>Stratégie d'accès au coffre</b>, l'accès aux données se donne par des <b>stratégies d'accès</b> (Get, List, Set… par type d'objet). Les rôles de données RBAC comme Utilisateur des secrets n'ont <b>pas d'effet</b> tant que le coffre n'est pas passé au modèle RBAC.</p><p>Lecteur ne donne accès qu'au plan de contrôle. La suppression réversible protège contre la suppression, elle ne donne pas d'accès.</p><p><b>5. Connexion Entra à VM1 avec des droits d'administrateur local — rôle :</b></p><p>La connexion avec un compte Entra à une VM est contrôlée par deux rôles Azure : <b>Connexion de l'administrateur aux machines virtuelles</b> (droits d'administrateur local) et <b>Connexion de l'utilisateur aux machines virtuelles</b> (droits d'utilisateur standard).</p><p><b>Contributeur de machines virtuelles</b> gère la ressource VM, mais ne permet pas de se connecter à son système d'exploitation. Administrateur général est un rôle Entra sans lien avec la connexion aux VM.</p>",
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
    "Rôle",
    "Contributeur de machines virtuelles"
   ],
   [
    "*Attribuer l'accès à",
    "Utilisateur, groupe ou principal de service"
   ],
   [
    "Membres",
    "app-scripts"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Un principal de service reçoit des rôles Azure comme un utilisateur. Accès à Azure sans secret dans le code = identité managée + rôle sur la ressource cible. Identité attribuée par l'utilisateur partagée : rôles attribués une fois à l'identité. Coffre en modèle stratégie d'accès : les rôles de données RBAC n'ont aucun effet. Connexion Entra à une VM : Connexion de l'administrateur (admin local) ou de l'utilisateur aux machines virtuelles."
},
{
 "id": "D1-309",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous inscrivez des applications dans Microsoft Entra ID. Que devez-vous accorder pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Une application crée des utilisateurs sans intervention humaine :",
   "o": [
    "La permission d'application User.ReadWrite.All (consentement)",
    "Une clé d'accès du compte de stockage de l'application",
    "Une identité managée, sans autre configuration",
    "Le rôle Azure Contributeur sur l'abonnement"
   ],
   "a": 0
  },
  {
   "l": "Une application lit le profil des utilisateurs connectés, en leur nom :",
   "o": [
    "Une permission d'application User.ReadWrite.All",
    "Une identité managée",
    "Un rôle Azure Lecteur",
    "Une permission déléguée User.Read"
   ],
   "a": 3
  },
  {
   "l": "Une application lit les blobs du conteneur data, sans les modifier ni gérer le compte :",
   "o": [
    "Lecteur sur storage1",
    "Contributeur de compte de stockage sur storage1",
    "Contributeur aux données blob du stockage sur le conteneur data",
    "Lecteur des données blob du stockage sur le conteneur data"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Une application crée des utilisateurs sans intervention humaine :</b></p><p>Les opérations sur l'annuaire passent par <b>Microsoft Graph</b>. Une permission <b>d'application</b> (sans utilisateur connecté) comme <code>User.ReadWrite.All</code> doit recevoir le <b>consentement administrateur</b>. On peut aussi attribuer à l'application un rôle Entra comme Administrateur d'utilisateurs.</p><p>Un rôle Azure ne donne aucun droit sur l'annuaire. Une identité managée sans permission ne peut rien faire.</p><p><b>2. Une application lit le profil des utilisateurs connectés, en leur nom :</b></p><p>Une <b>permission déléguée</b> agit au nom de l'utilisateur connecté, avec au plus ses propres droits. <code>User.Read</code> permet de lire son profil, et ne demande pas de consentement administrateur.</p><p>Une permission d'application agit sans utilisateur, avec des droits sur tout l'annuaire : trop large. Les rôles Azure ne concernent pas Graph.</p><p><b>3. Une application lit les blobs du conteneur data, sans les modifier ni gérer le compte :</b></p><p>Lire le contenu d'un blob est une opération sur les <b>données</b> (DataActions). Le rôle <b>Lecteur des données blob du stockage</b> l'accorde, et l'étendue du conteneur limite l'accès à data.</p><ul><li><b>Lecteur</b> ne donne que le plan de contrôle : on voit le compte et ses propriétés, mais pas le contenu des blobs avec son identité.</li><li><b>Contributeur de compte de stockage</b> gère le compte (et peut lire les clés d'accès) : trop de droits.</li><li><b>Contributeur aux données blob</b> permet aussi d'écrire et de supprimer.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Inscriptions d'applications",
   "App-Provisioning"
  ],
  "title": "App-Provisioning | API autorisées",
  "menu": [
   "Vue d'ensemble",
   "Certificats et secrets",
   "*API autorisées"
  ],
  "rows": [
   [
    "*Microsoft Graph · User.ReadWrite.All",
    "Application"
   ],
   [
    "État",
    "Consentement administrateur accordé"
   ]
  ],
  "btn": "Accorder un consentement d'administrateur"
 },
 "keep": "Agir sur l'annuaire sans utilisateur = permission d'application Graph + consentement administrateur. Au nom de l'utilisateur = permission déléguée. Sans utilisateur = permission d'application. Lire des blobs avec une identité Entra = rôle de données (Lecteur des données blob du stockage). Lecteur seul ne voit pas les données."
},
{
 "id": "D1-310",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous créez des définitions Azure Policy. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Regrouper 12 définitions ISO 27001 et suivre leur conformité comme un tout :",
   "o": [
    "Un groupe d'administration",
    "Une étiquette de ressource",
    "Un plan Azure Blueprints",
    "Une définition d'initiative"
   ],
   "a": 3
  },
  {
   "l": "Évaluer seulement les ressources qui prennent en charge étiquettes et emplacements — mode :",
   "o": [
    "Microsoft.Resources",
    "Tags",
    "All",
    "Indexed"
   ],
   "a": 3
  },
  {
   "l": "Interdire Cosmos DB et AKS sans affecter les autres services :",
   "o": [
    "Types de ressources autorisés, avec Cosmos DB et AKS",
    "Types de ressources non autorisés",
    "Référence SKU de machine virtuelle autorisée",
    "Emplacements autorisés"
   ],
   "a": 1
  },
  {
   "l": "Aucune ressource de RG-Dev hors de France Central, même si le modèle change :",
   "o": [
    "Une stratégie Emplacements autorisés attribuée à RG-Dev",
    "Un verrou Suppression impossible sur RG-Dev",
    "Un rôle personnalisé sans l'action Microsoft.Resources/deployments/write",
    "Une étiquette Region=FranceCentral sur RG-Dev"
   ],
   "a": 0
  },
  {
   "l": "Ressources sans CentreDeCout visibles dans un tableau de bord, sans bloquer :",
   "o": [
    "Un verrou sur chaque groupe de ressources",
    "Une stratégie Audit, vue dans Conformité",
    "Un budget par centre de coût",
    "Une stratégie avec l'effet Deny sur l'étiquette"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Regrouper 12 définitions ISO 27001 et suivre leur conformité comme un tout :</b></p><p>Une <b>initiative</b> (policy set) regroupe plusieurs définitions de stratégie. On l'attribue en une fois, et la conformité est calculée pour l'ensemble. Azure propose des initiatives intégrées pour des référentiels comme ISO 27001.</p><p>Un groupe d'administration organise des abonnements. Azure Blueprints est en cours de retrait (remplacé par les Template Specs et les piles de déploiement). Une étiquette ne regroupe pas de stratégies.</p><p><b>2. Évaluer seulement les ressources qui prennent en charge étiquettes et emplacements — mode :</b></p><p>Le mode <b>Indexed</b> n'évalue que les types de ressources qui prennent en charge les étiquettes et l'emplacement. Il est recommandé pour les stratégies qui portent sur les étiquettes ou les régions.</p><p>Le mode <b>All</b> évalue aussi les groupes de ressources, les abonnements et tous les types de ressources. Les deux autres valeurs ne sont pas des modes Azure Policy (il existe des modes de fournisseur de ressources, comme Microsoft.KeyVault.Data, mais pas ceux-ci).</p><p><b>3. Interdire Cosmos DB et AKS sans affecter les autres services :</b></p><p><b>Types de ressources non autorisés</b> (Not allowed resource types) bloque une liste de types : ici <code>Microsoft.DocumentDB/databaseAccounts</code> et <code>Microsoft.ContainerService/managedClusters</code>. Tout le reste reste permis.</p><p><b>Types de ressources autorisés</b> ferait l'inverse : n'autoriser <i>que</i> les types listés. Les deux autres stratégies portent sur la région et la taille des VM.</p><p><b>4. Aucune ressource de RG-Dev hors de France Central, même si le modèle change :</b></p><p>Azure Policy contrôle les <b>propriétés</b> des ressources au moment du déploiement, quelle que soit la méthode utilisée (portail, modèle, CLI). Emplacements autorisés refuse toute région autre que France Central.</p><p>Retirer l'action de déploiement empêcherait tout déploiement par modèle, sans contrôler la région. Un verrou empêche la suppression. Une étiquette est une métadonnée sans effet.</p><p><b>5. Ressources sans CentreDeCout visibles dans un tableau de bord, sans bloquer :</b></p><p>L'effet <b>Audit</b> marque les ressources sans l'étiquette comme non conformes, sans rien bloquer. La page <b>Conformité</b> d'Azure Policy sert de tableau de bord.</p><p>Deny bloquerait les déploiements, ce qui est exclu.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Définitions"
  ],
  "title": "Nouvelle définition d'initiative",
  "menu": [
   "Vue d'ensemble",
   "*Définitions",
   "Affectations"
  ],
  "rows": [
   [
    "Emplacement de la définition",
    "MG-Corp"
   ],
   [
    "*Définitions de stratégie",
    "12 définitions ISO 27001"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Plusieurs stratégies à gérer ensemble = initiative (policy set). Stratégie sur étiquettes ou emplacements = mode Indexed. Tout le reste = All. Interdire quelques types = « non autorisés ». N'autoriser que quelques types = « autorisés ». Azure Policy s'applique quel que soit l'outil de déploiement (portail, modèle, CLI). Voir sans bloquer = Audit + page Conformité."
},
{
 "id": "D1-311",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous organisez les ressources dans des groupes de ressources. Que se passe-t-il ou que devez-vous faire dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "storage2 est créé sans étiquette dans un groupe étiqueté, sans stratégie — étiquettes de storage2 :",
   "o": [
    "Service=Finance",
    "Service=Finance uniquement dans le rapport de coûts",
    "Service=RG1",
    "Aucune"
   ],
   "a": 3
  },
  {
   "l": "Renommer RG-Old en RG-Finance :",
   "o": [
    "Modifier l'étiquette Name de RG-Old",
    "Utiliser l'option Renommer du portail",
    "Créer RG-Finance, y déplacer, supprimer RG-Old",
    "Utiliser Set-AzResourceGroup -NewName RG-Finance"
   ],
   "a": 2
  },
  {
   "l": "Supprimer au plus vite toutes les ressources de test, seules dans RG-Test :",
   "o": [
    "Supprimer le groupe de ressources RG-Test",
    "Appliquer un verrou ReadOnly à RG-Test",
    "Déplacer les ressources dans un autre abonnement",
    "Supprimer chaque ressource une par une"
   ],
   "a": 0
  },
  {
   "l": "VM1 passe de RG1 à RG2 avec son IP publique, le réseau reste dans RG1 — l'IP publique :",
   "o": [
    "Elle change automatiquement d'adresse pendant le déplacement",
    "Elle reste dans RG1 et ne peut plus être associée à VM1",
    "Elle doit être supprimée avant le déplacement",
    "Elle se déplace avec VM1 et garde son adresse"
   ],
   "a": 3
  },
  {
   "l": "storage1 (France Central) passe dans RG2 (West Europe) — région après le déplacement :",
   "o": [
    "France Central",
    "West Europe",
    "Les deux, par géoréplication",
    "Vous devez choisir la région pendant le déplacement"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. storage2 est créé sans étiquette dans un groupe étiqueté, sans stratégie — étiquettes de storage2 :</b></p><p>Sans stratégie, une ressource n'hérite <b>jamais</b> des étiquettes de son groupe de ressources : storage2 n'a aucune étiquette.</p><p>Nuance utile : Gestion des coûts propose une option « Héritage des étiquettes » qui applique les étiquettes du groupe et de l'abonnement <b>dans les données de coût</b>, mais cela ne modifie pas les ressources. La réponse attendue reste « Aucune ».</p><p><b>2. Renommer RG-Old en RG-Finance :</b></p><p>Un groupe de ressources <b>ne peut pas être renommé</b>. La méthode consiste à créer le nouveau groupe, y <b>déplacer</b> les ressources (qui le prennent en charge), puis supprimer l'ancien.</p><p>L'étiquette Name n'est qu'une métadonnée. Set-AzResourceGroup n'a pas de paramètre -NewName.</p><p><b>3. Supprimer au plus vite toutes les ressources de test, seules dans RG-Test :</b></p><p>Supprimer un <b>groupe de ressources</b> supprime toutes les ressources qu'il contient, en une seule opération. C'est l'intérêt de regrouper les ressources qui partagent le même cycle de vie.</p><p>Supprimer une à une est plus long et risque d'oublier des dépendances. Un verrou empêcherait justement la suppression.</p><p><b>4. VM1 passe de RG1 à RG2 avec son IP publique, le réseau reste dans RG1 — l'IP publique :</b></p><p>Un déplacement entre groupes de ressources ne change ni la région ni la configuration : l'adresse IP publique peut être déplacée avec la VM, et son adresse ne change pas. Le réseau virtuel peut rester dans RG1 : une interface réseau peut référencer un réseau virtuel d'un autre groupe de ressources.</p><p><b>5. storage1 (France Central) passe dans RG2 (West Europe) — région après le déplacement :</b></p><p>Déplacer une ressource vers un autre groupe de ressources ne change <b>pas</b> sa région : storage1 reste en France Central. La région d'un groupe de ressources ne sert qu'à stocker ses <b>métadonnées</b> ; un groupe peut contenir des ressources de n'importe quelle région.</p><p>Pour changer de région, il faut un autre outil, comme Azure Resource Mover, ou recréer la ressource.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage2"
  ],
  "title": "storage2 | Étiquettes",
  "menu": [
   "Vue d'ensemble",
   "*Étiquettes"
  ],
  "rows": [
   [
    "*Étiquettes",
    "Aucune"
   ],
   [
    "Groupe de ressources RG1",
    "Service=Finance (non hérité)"
   ]
  ]
 },
 "keep": "Les étiquettes ne s'héritent jamais sans stratégie. Un groupe de ressources ne se renomme pas : nouveau groupe + déplacement. Même cycle de vie = même groupe de ressources : on supprime tout d'un coup. Un déplacement ne change ni l'adresse IP, ni la région, ni la configuration. Déplacer entre groupes de ressources ou abonnements ne change jamais la région."
},
{
 "id": "D1-312",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous industrialisez la gouvernance de nombreux projets. Que devez-vous utiliser ou recommander pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Réduire le nombre d'attributions de rôles d'un abonnement proche de la limite :",
   "o": [
    "Créer un rôle personnalisé par utilisateur",
    "Attribuer les rôles sur chaque ressource plutôt que sur le groupe de ressources",
    "Utiliser des étiquettes à la place des rôles",
    "Attribuer les rôles à des groupes plutôt qu'à chaque utilisateur"
   ],
   "a": 3
  },
  {
   "l": "Remplacer Azure Blueprints (rôles, stratégies, réseau de base) :",
   "o": [
    "Un script exécuté manuellement par chaque administrateur",
    "Des étiquettes sur les abonnements",
    "Des verrous sur le groupe racine",
    "Des initiatives Azure Policy et des modèles"
   ],
   "a": 3
  },
  {
   "l": "Groupes identiques (étiquettes, verrous, rôles) pour 20 projets, reproductibles :",
   "o": [
    "Créer chaque groupe à la main dans le portail",
    "Un modèle Bicep à l'étendue de l'abonnement",
    "Utiliser Azure Advisor pour générer les groupes",
    "Copier les groupes avec l'option Cloner du portail"
   ],
   "a": 1
  },
  {
   "l": "Séparer clairement facturation et quotas de plusieurs environnements :",
   "o": [
    "Un seul abonnement avec des étiquettes Env",
    "Un abonnement par environnement, en groupes d'administration",
    "Un seul groupe de ressources pour tous les environnements",
    "Un locataire Microsoft Entra par environnement"
   ],
   "a": 1
  },
  {
   "l": "Une équipe veut sa propre carte bancaire, dans le même locataire :",
   "o": [
    "Un locataire ne peut avoir qu'un seul abonnement",
    "Il faut fusionner Sub2 dans Sub1 pour la facturation",
    "Il faut créer un second locataire Microsoft Entra",
    "Un abonnement a sa propre facturation"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Réduire le nombre d'attributions de rôles d'un abonnement proche de la limite :</b></p><p>Attribuer un rôle à un <b>groupe</b> crée une seule attribution, quel que soit le nombre de membres. C'est aussi plus simple à gérer : il suffit d'ajouter ou de retirer des personnes du groupe.</p><p>Attribuer sur chaque ressource multiplie les attributions. Un rôle par utilisateur aussi. Les étiquettes ne donnent aucune autorisation.</p><p><b>2. Remplacer Azure Blueprints (rôles, stratégies, réseau de base) :</b></p><p>Azure Blueprints est en cours de retrait. Microsoft recommande de combiner les <b>initiatives Azure Policy</b> (gouvernance) et des <b>modèles</b> ARM ou Bicep publiés en Template Specs, ou des <b>piles de déploiement</b> (deployment stacks), qui peuvent en plus protéger les ressources avec des affectations de refus.</p><p><b>3. Groupes identiques (étiquettes, verrous, rôles) pour 20 projets, reproductibles :</b></p><p>Un modèle <b>Bicep</b> (ou ARM) à l'étendue <b>abonnement</b> (<code>targetScope = 'subscription'</code>) peut créer des groupes de ressources, avec leurs étiquettes, verrous et attributions de rôles, de façon reproductible.</p><p>Le portail n'a pas d'option de clonage de groupe de ressources. La création manuelle est lente et sujette aux erreurs.</p><p><b>4. Séparer clairement facturation et quotas de plusieurs environnements :</b></p><p>L'<b>abonnement</b> est une limite de facturation, de quotas et d'accès. Un abonnement par environnement, organisés en <b>groupes d'administration</b>, permet d'appliquer des stratégies et des rôles différents à chacun.</p><p>Un locataire par environnement compliquerait la gestion des identités. Les étiquettes aident à ventiler les coûts mais ne séparent ni les quotas ni les limites de sécurité.</p><p><b>5. Une équipe veut sa propre carte bancaire, dans le même locataire :</b></p><p>La <b>facturation</b> et l'<b>annuaire</b> sont deux choses distinctes. Plusieurs abonnements d'un même locataire peuvent être rattachés à des comptes ou profils de facturation différents, avec des moyens de paiement différents.</p><p>Un locataire peut contenir de nombreux abonnements, et chaque abonnement fait confiance à un seul locataire. Les abonnements ne se « fusionnent » pas.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Sub1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*GRP-Exploitation · Contributeur",
    "1 attribution pour 40 membres"
   ]
  ]
 },
 "keep": "Attribuer aux groupes plutôt qu'aux personnes : moins d'attributions, gestion plus simple. Remplaçant de Blueprints = initiatives Policy + Template Specs ou piles de déploiement. Créer des groupes de ressources par modèle = Bicep à l'étendue abonnement. Abonnement = limite de facturation, de quotas et d'accès. Un par environnement, rangés en groupes d'administration. Facturation et annuaire sont indépendants : plusieurs abonnements d'un locataire peuvent être facturés séparément."
},
{
 "id": "D1-313",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous créez des groupes à appartenance dynamique. Que devez-vous choisir ou faire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Membres ajoutés et retirés selon l'attribut service = Ventes — type d'appartenance :",
   "o": [
    "Utilisateur dynamique",
    "Synchronisé depuis AD DS",
    "Appareil dynamique",
    "Attribué"
   ],
   "a": 0
  },
  {
   "l": "Règle pour le service Ventes ou Marketing :",
   "o": [
    "(user.department -in [\"Ventes\",\"Marketing\"])",
    "(user.department -eq \"Ventes\") -and (user.department -eq \"Marketing\")",
    "(user.department -match \"Ventes\") -and (user.jobTitle -eq \"Marketing\")",
    "(user.department -contains \"Ventes,Marketing\")"
   ],
   "a": 0
  },
  {
   "l": "Règle pour tous les appareils Windows inscrits ou joints :",
   "o": [
    "(user.deviceOSType -eq \"Windows\")",
    "(device.deviceOSType -eq \"Windows\")",
    "(device.operatingSystem -contains \"Win\") -and (user.department -eq \"IT\")",
    "(device.displayName -eq \"Windows\")"
   ],
   "a": 1
  },
  {
   "l": "Option dynamique grisée avec Entra ID Free :",
   "o": [
    "Attribuer le rôle Administrateur de groupes à votre compte",
    "Acquérir des licences Microsoft Entra ID P1",
    "Créer un groupe Microsoft 365 au lieu d'un groupe de sécurité",
    "Activer la réinitialisation de mot de passe en libre-service"
   ],
   "a": 1
  },
  {
   "l": "Licence Microsoft 365 pour tous les utilisateurs en France, sans gestion manuelle :",
   "o": [
    "Un groupe Microsoft 365 à appartenance attribuée",
    "Un groupe dynamique (pays France) avec licence",
    "Une unité administrative France avec une licence",
    "Une stratégie Azure Policy sur l'emplacement"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Membres ajoutés et retirés selon l'attribut service = Ventes — type d'appartenance :</b></p><p>Un groupe à appartenance <b>Utilisateur dynamique</b> évalue une règle sur les attributs des utilisateurs, par exemple <code>(user.department -eq \"Ventes\")</code>, et ajoute ou retire les membres tout seul. Il demande une licence Microsoft Entra ID P1.</p><ul><li><b>Attribué</b> : les membres sont ajoutés à la main, rien n'est automatique.</li><li><b>Appareil dynamique</b> : la règle porte sur les attributs des appareils, et le groupe ne peut contenir que des appareils.</li><li><b>Synchronisé depuis AD DS</b> n'est pas un type d'appartenance qu'on choisit dans Entra : c'est l'origine d'un groupe créé dans l'Active Directory local.</li></ul><p><b>2. Règle pour le service Ventes ou Marketing :</b></p><p>L'opérateur <b>-in</b> teste si la valeur fait partie d'une liste : <code>user.department -in [\"Ventes\",\"Marketing\"]</code>. On aurait aussi pu écrire deux conditions reliées par <b>-or</b>.</p><ul><li>Avec <b>-and</b>, le service devrait valoir Ventes et Marketing en même temps : aucun utilisateur ne correspond.</li><li><b>-contains</b> cherche la chaîne « Ventes,Marketing » dans l'attribut : aucun service ne la contient.</li><li>La dernière règle mélange le service et le poste, et exige les deux.</li></ul><p><b>3. Règle pour tous les appareils Windows inscrits ou joints :</b></p><p>Une règle d'appareil commence par <b>device.</b> et l'attribut du système d'exploitation est <b>deviceOSType</b>. Le groupe doit être de type sécurité, avec l'appartenance <b>Appareil dynamique</b>.</p><ul><li><code>user.deviceOSType</code> n'existe pas : les attributs user. décrivent les utilisateurs.</li><li><code>device.displayName</code> est le nom de l'appareil, pas son système.</li><li>Une règle ne peut pas mélanger attributs d'utilisateur et d'appareil.</li></ul><p><b>4. Option dynamique grisée avec Entra ID Free :</b></p><p>Les groupes dynamiques demandent <b>Microsoft Entra ID P1</b> (ou P2, ou une offre qui l'inclut). Chaque utilisateur membre d'un groupe dynamique doit être couvert par une licence.</p><p>Le type de groupe (sécurité ou Microsoft 365) ne change rien à cette exigence. SSPR n'a aucun lien. Et un rôle d'administrateur ne remplace pas une licence manquante.</p><p><b>5. Licence Microsoft 365 pour tous les utilisateurs en France, sans gestion manuelle :</b></p><p>Un <b>groupe dynamique</b> se remplit automatiquement selon l'attribut <b>country</b>, et les <b>licences basées sur les groupes</b> attribuent la licence à chaque membre. Les deux fonctions demandent Entra ID P1.</p><p>On ne peut pas attribuer de licence à une unité administrative. Azure Policy ne gère pas les licences. Un groupe attribué demande une gestion manuelle.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groupes",
   "Tous les groupes"
  ],
  "title": "Nouveau groupe",
  "rows": [
   [
    "Type de groupe",
    "Sécurité"
   ],
   [
    "Nom du groupe",
    "Ventes"
   ],
   [
    "*Type d'appartenance",
    "Utilisateur dynamique"
   ],
   [
    "*Membres dynamiques",
    "(user.department -eq \"Ventes\")"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Membres ajoutés automatiquement selon un attribut = groupe dynamique (licence Entra ID P1). Attributs user.* pour des utilisateurs, device.* pour des appareils. Une valeur parmi plusieurs = -in [liste] ou des conditions reliées par -or. -and exige que toutes les conditions soient vraies. Groupe d'appareils = Appareil dynamique, règle en device.* (deviceOSType, deviceOwnership…). Groupes dynamiques, licences par groupe, accès conditionnel = Microsoft Entra ID P1 minimum. Licence automatique selon un attribut = groupe dynamique + licence attribuée au groupe."
},
{
 "id": "D1-314",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous gérez le cycle de vie des groupes et des invités. Que devez-vous configurer ou faire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Chaque groupe supprimé après 180 jours, sauf renouvellement par un propriétaire :",
   "o": [
    "Une stratégie Azure Policy avec l'effet Deny",
    "Une stratégie de nommage des groupes",
    "Une révision d'accès sur chaque groupe",
    "Une stratégie d'expiration des groupes"
   ],
   "a": 3
  },
  {
   "l": "Les responsables de chaque partenaire confirment ou refusent chaque accès :",
   "o": [
    "Une stratégie d'expiration de groupe",
    "Une alerte de budget",
    "Un groupe dynamique",
    "Une révision d'accès"
   ],
   "a": 3
  },
  {
   "l": "Supprimer automatiquement les invités inactifs d'un projet terminé :",
   "o": [
    "Une révision d'accès des invités, résultats appliqués",
    "Une alerte de budget sur les comptes invités",
    "Une stratégie d'expiration des groupes Microsoft 365",
    "Un verrou de ressource sur les comptes invités"
   ],
   "a": 0
  },
  {
   "l": "Invitation envoyée il y a une semaine, état En attente d'acceptation :",
   "o": [
    "Lui attribuer une licence Microsoft Entra ID P1",
    "Renvoyer l'invitation depuis le profil",
    "Supprimer puis rajouter le domaine de l'invité",
    "Convertir le compte invité en compte membre"
   ],
   "a": 1
  },
  {
   "l": "Un invité qui a accepté doit gérer les VM de RG-Projet :",
   "o": [
    "Contributeur de machines virtuelles sur RG-Projet",
    "Convertir l'invité en membre avant toute attribution",
    "Attribuer à l'invité une licence Microsoft Entra ID P2",
    "Ajouter fabrikam.com comme domaine personnalisé du locataire"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Chaque groupe supprimé après 180 jours, sauf renouvellement par un propriétaire :</b></p><p>La <b>stratégie d'expiration</b> (Groupes > Expiration) fixe une durée de vie pour les groupes Microsoft 365. Les propriétaires sont prévenus par e-mail avant l'échéance et peuvent renouveler le groupe ; un groupe actif est même renouvelé automatiquement.</p><p>La stratégie de nommage impose un préfixe ou un suffixe. Azure Policy ne gère pas les groupes Entra. Une révision d'accès fait vérifier les membres, elle ne supprime pas le groupe.</p><p><b>2. Les responsables de chaque partenaire confirment ou refusent chaque accès :</b></p><p>Une <b>révision d'accès</b> (Microsoft Entra ID Governance, licence P2 ou Governance) demande à des réviseurs de confirmer ou de refuser l'accès de chaque membre, selon une périodicité. Les accès refusés peuvent être retirés automatiquement.</p><p>L'expiration supprime le groupe entier, pas les membres un à un. Un groupe dynamique dépend d'attributs, pas d'une validation humaine.</p><p><b>3. Supprimer automatiquement les invités inactifs d'un projet terminé :</b></p><p>Les <b>révisions d'accès</b> peuvent cibler les invités, demander une validation (ou se baser sur l'inactivité) et <b>appliquer automatiquement</b> les résultats : retirer l'accès ou bloquer puis supprimer les comptes refusés.</p><p>L'expiration concerne des groupes Microsoft 365, pas des comptes. Les deux autres options n'ont pas de lien.</p><p><b>4. Invitation envoyée il y a une semaine, état En attente d'acceptation :</b></p><p>Le profil d'un invité dont l'invitation n'a pas été acceptée propose <b>Renvoyer l'invitation</b>. On peut aussi lui transmettre directement le lien d'acceptation.</p><p>Les autres actions ne lui permettent pas d'accepter l'invitation.</p><p><b>5. Un invité qui a accepté doit gérer les VM de RG-Projet :</b></p><p>Un utilisateur invité est un principal de sécurité comme un autre : on peut lui <b>attribuer des rôles Azure</b> directement. Contributeur de machines virtuelles sur RG-Projet suffit.</p><p>Il n'est pas nécessaire de le convertir en membre. Ajouter fabrikam.com comme domaine personnalisé est impossible (ce domaine appartient à une autre organisation). Aucune licence P2 n'est requise pour un rôle Azure.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groupes"
  ],
  "title": "Groupes | Expiration",
  "menu": [
   "Tous les groupes",
   "Groupes supprimés",
   "*Expiration",
   "Stratégie de nommage"
  ],
  "rows": [
   [
    "*Durée de vie du groupe (en jours)",
    "180"
   ],
   [
    "E-mail de notification si le groupe n'a pas de propriétaire",
    "admin@contoso.com"
   ],
   [
    "Activer l'expiration pour ces groupes Microsoft 365",
    "Tous"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Supprimer les groupes Microsoft 365 inutilisés après N jours = stratégie d'expiration ; les propriétaires renouvellent. Faire valider périodiquement les accès par des humains = révision d'accès. Nettoyer les invités inactifs = révision d'accès avec application automatique. Invitation perdue = Renvoyer l'invitation depuis le profil de l'invité. Un invité peut recevoir des rôles Azure comme n'importe quel utilisateur, sans conversion ni licence."
},
{
 "id": "D1-315",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous attribuez des stratégies à des ressources existantes. Que se passe-t-il dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Stratégie qui interdit les tailles au-delà de D4s_v5 ; VM1 est en D8s_v5 :",
   "o": [
    "VM1 est supprimée lors de la prochaine évaluation",
    "VM1 continue de fonctionner, signalée non conforme",
    "VM1 est arrêtée puis libérée automatiquement",
    "VM1 est redimensionnée en Standard_D4s_v5 par Azure"
   ],
   "a": 1
  },
  {
   "l": "Stratégie qui interdit les IP publiques sur RG1 ; création d'une VM avec « Nouvelle adresse IP publique » :",
   "o": [
    "La VM est créée avec l'IP publique et marquée non conforme",
    "La VM est créée sans adresse IP publique",
    "La stratégie ne s'applique pas aux machines virtuelles",
    "Échec : la création de l'IP publique est refusée"
   ],
   "a": 3
  },
  {
   "l": "Deny sur les tailles de VM dans MG-Prod ; VM existantes de Sub5 de taille interdite :",
   "o": [
    "Elles sont arrêtées par la stratégie",
    "Elles sont redimensionnées automatiquement",
    "Le déplacement de l'abonnement est refusé par Azure Policy",
    "Elles tournent et deviennent non conformes"
   ],
   "a": 3
  },
  {
   "l": "Emplacements autorisés = France Central ; création d'un groupe de ressources en West Europe :",
   "o": [
    "La création est refusée par la stratégie",
    "Le groupe de ressources est créé en France Central à la place",
    "La création réussit et le groupe est marqué non conforme",
    "La création réussit : la stratégie ignore les groupes"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Stratégie qui interdit les tailles au-delà de D4s_v5 ; VM1 est en D8s_v5 :</b></p><p>L'effet <b>Deny</b> bloque les <b>nouvelles</b> créations et modifications non conformes. Il n'agit pas sur les ressources existantes : VM1 continue de fonctionner et apparaît <b>non conforme</b> dans le tableau de bord de conformité.</p><p>Azure Policy n'arrête, ne redimensionne et ne supprime jamais une ressource existante. Pour corriger des ressources existantes, on utilise une tâche de correction, et seulement avec les effets Modify ou DeployIfNotExists.</p><p><b>2. Stratégie qui interdit les IP publiques sur RG1 ; création d'une VM avec « Nouvelle adresse IP publique » :</b></p><p>La création d'une VM avec une nouvelle adresse IP publique crée aussi une ressource <code>Microsoft.Network/publicIPAddresses</code>. Cette ressource est refusée, donc le <b>déploiement échoue</b>.</p><p>Azure Policy ne modifie pas le déploiement à votre place pour retirer l'adresse. Deny ne crée pas la ressource. La règle vise le type adresse IP publique, quel que soit le contexte de création.</p><p><b>3. Deny sur les tailles de VM dans MG-Prod ; VM existantes de Sub5 de taille interdite :</b></p><p>Après le déplacement, Sub5 hérite des stratégies de MG-Prod. Les VM existantes ne sont ni arrêtées ni modifiées : elles apparaissent <b>non conformes</b>. Les nouvelles VM de taille interdite seront refusées.</p><p>Azure Policy n'empêche pas le déplacement d'un abonnement.</p><p><b>4. Emplacements autorisés = France Central ; création d'un groupe de ressources en West Europe :</b></p><p>La stratégie <b>Emplacements autorisés</b> exclut les groupes de ressources : elle ne s'applique qu'aux ressources. Pour contrôler la région des groupes de ressources, il existe une stratégie distincte : <b>Emplacements autorisés pour les groupes de ressources</b>.</p><p>Azure Policy ne change jamais la région d'une ressource à votre place.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Conformité"
  ],
  "title": "Taille de VM limitée | Conformité",
  "menu": [
   "Vue d'ensemble",
   "*Conformité",
   "Affectations"
  ],
  "rows": [
   [
    "État de conformité",
    "Non conforme"
   ],
   [
    "*VM1",
    "Non conforme · Standard_D8s_v5"
   ]
  ]
 },
 "keep": "Deny protège l'avenir, jamais l'existant : la ressource existante devient simplement non conforme. Un Deny sur une ressource du déploiement fait échouer tout le déploiement. Changer d'étendue n'arrête rien : l'existant devient non conforme, le nouveau est refusé. « Emplacements autorisés » ignore les groupes de ressources ; il existe une stratégie dédiée pour eux."
},
{
 "id": "D1-316",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous déplacez des ressources et des abonnements. Que se passe-t-il ou que devez-vous utiliser dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pendant un déplacement de RG1 vers RG2 :",
   "o": [
    "Rien : les deux groupes restent entièrement modifiables",
    "Les deux groupes sont bloqués en écriture et suppression",
    "Seul RG2 est en lecture seule pendant le déplacement",
    "Les ressources déplacées sont arrêtées pendant l'opération"
   ],
   "a": 1
  },
  {
   "l": "Savoir si le déplacement de 30 ressources réussira, sans rien déplacer :",
   "o": [
    "Un verrou en lecture seule sur RG1 pendant le test",
    "Le journal d'activité de RG1 après le déplacement",
    "L'opération validateMoveResources",
    "Une stratégie Azure Policy en mode Audit sur RG1"
   ],
   "a": 2
  },
  {
   "l": "Panne complète de France Central (région de RG1) ; ressources de RG1 en West Europe :",
   "o": [
    "Aucun impact possible sur RG1 ni sur ses ressources",
    "Les ressources de West Europe s'arrêtent",
    "Les ressources tournent, la gestion de RG1 peut être indisponible",
    "RG1 est déplacé automatiquement en West Europe avec ses métadonnées"
   ],
   "a": 2
  },
  {
   "l": "Rattacher 3 abonnements d'un autre annuaire à contoso.com :",
   "o": [
    "Fusionner les deux locataires depuis le portail",
    "Changer l'annuaire des abonnements, puis recréer rôles et identités",
    "Ajouter fabrikam.com comme groupe d'administration",
    "Déplacer les ressources une par une vers vos abonnements, sans autre impact"
   ],
   "a": 1
  },
  {
   "l": "Sub1 passe dans un autre locataire — attribution Contributeur de User1 :",
   "o": [
    "Elle est conservée",
    "Elle devient une attribution Lecteur",
    "Elle est transférée au compte invité de User1",
    "Elle est supprimée"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Pendant un déplacement de RG1 vers RG2 :</b></p><p>Pendant un déplacement, le groupe source et le groupe cible sont <b>verrouillés</b> : on ne peut pas y créer, modifier ou supprimer de ressources jusqu'à la fin de l'opération (au maximum quatre heures).</p><p>Les ressources, elles, <b>continuent de fonctionner</b> : une VM reste démarrée, une application web reste en ligne.</p><p><b>2. Savoir si le déplacement de 30 ressources réussira, sans rien déplacer :</b></p><p>L'API <b>validateMoveResources</b> teste le déplacement : elle vérifie que les ressources le prennent en charge et que les dépendances sont incluses, sans rien modifier. Le portail lance aussi une validation automatique avant tout déplacement.</p><p>Le journal d'activité montre ce qui s'est passé, pas ce qui va se passer. Un verrou en lecture seule ferait même échouer le déplacement. Azure Policy ne teste pas les déplacements.</p><p><b>3. Panne complète de France Central (région de RG1) ; ressources de RG1 en West Europe :</b></p><p>La région d'un groupe de ressources est celle où sont stockées ses <b>métadonnées</b>. Si elle est en panne, les ressources d'autres régions continuent de fonctionner, mais les opérations de gestion (déploiement, modification) qui dépendent de ces métadonnées peuvent échouer.</p><p>C'est pourquoi on place souvent le groupe de ressources dans la même région que ses ressources. Rien n'est déplacé automatiquement.</p><p><b>4. Rattacher 3 abonnements d'un autre annuaire à contoso.com :</b></p><p>Chaque abonnement fait confiance à un seul locataire. Pour le rattacher à contoso.com, on <b>change son annuaire</b> (Changer de répertoire). Les attributions de rôles, les identités managées et les accès aux coffres de clés doivent ensuite être recréés ou mis à jour.</p><p>On ne déplace pas de ressources directement entre locataires. Les locataires ne se fusionnent pas. Un groupe d'administration n'est pas un domaine.</p><p><b>5. Sub1 passe dans un autre locataire — attribution Contributeur de User1 :</b></p><p>Quand un abonnement change de locataire, <b>toutes les attributions de rôles Azure sont supprimées</b>, car les utilisateurs, groupes et identités de l'ancien annuaire n'existent pas dans le nouveau. Il faut les recréer.</p><p>Il en va de même pour les identités managées, et les coffres de clés doivent être mis à jour avec le nouvel ID de locataire. Rien n'est converti ni transféré automatiquement.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "Déplacer des ressources",
  "menu": [
   "Ressources",
   "Valider",
   "*Vérifier"
  ],
  "rows": [
   [
    "*Pendant le déplacement",
    "RG1 et RG2 verrouillés en écriture"
   ],
   [
    "Les ressources",
    "Continuent de fonctionner"
   ]
  ]
 },
 "keep": "Pendant un déplacement, source et cible sont bloquées en écriture ; les ressources restent en ligne. Tester un déplacement sans rien changer = validation (validateMoveResources), lancée aussi par le portail. La région d'un groupe de ressources = où vivent ses métadonnées ; en panne, la gestion est touchée, pas les ressources d'autres régions. Rattacher un abonnement à un autre locataire = Changer de répertoire, puis recréer les accès. Changer de locataire = attributions de rôles et identités managées perdues ; à recréer."
},
{
 "id": "D1-317",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous gérez la facturation et les engagements d'achat. Que se passe-t-il ou que devez-vous choisir dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Sub3 est transféré à un autre administrateur de compte, même locataire — attributions de rôles :",
   "o": [
    "Elles sont converties en attributions Lecteur",
    "Elles sont toutes supprimées",
    "Seules les attributions Propriétaire sont supprimées",
    "Elles sont conservées"
   ],
   "a": 3
  },
  {
   "l": "Voir les factures et gérer les moyens de paiement d'un contrat MCA — niveau :",
   "o": [
    "Dans les rôles Microsoft Entra uniquement",
    "Dans une stratégie Azure Policy de facturation",
    "Dans le contrôle d'accès (IAM) d'un groupe de ressources",
    "Dans les rôles du compte et du profil de facturation"
   ],
   "a": 3
  },
  {
   "l": "Budget de 10 000 €, dépenses de 12 000 € en fin de mois — ressources :",
   "o": [
    "Elles ont continué de fonctionner normalement",
    "Les nouvelles créations ont été bloquées par le budget",
    "Elles sont passées en lecture seule au seuil",
    "Elles ont été arrêtées à 10 000 €"
   ],
   "a": 0
  },
  {
   "l": "Réservation utilisée par Sub1, Sub2 et Sub3 du même compte de facturation — étendue :",
   "o": [
    "Partagée",
    "Groupe d'administration racine uniquement",
    "Abonnement unique",
    "Groupe de ressources unique"
   ],
   "a": 0
  },
  {
   "l": "Réduction contre un engagement horaire, sans lien à une taille ni une région :",
   "o": [
    "Azure Hybrid Benefit sur les VM",
    "Un plan d'économies pour le calcul",
    "Des VM Spot pour toutes les charges",
    "Une réservation de VM par taille"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Sub3 est transféré à un autre administrateur de compte, même locataire — attributions de rôles :</b></p><p>Un transfert de <b>propriété de facturation</b> dans le même locataire ne change pas l'annuaire de confiance : les attributions de rôles sont <b>conservées</b>.</p><p>Ce sont les changements de <b>locataire</b> (changement d'annuaire) qui suppriment les attributions.</p><p><b>2. Voir les factures et gérer les moyens de paiement d'un contrat MCA — niveau :</b></p><p>Pour un contrat client Microsoft, les droits de facturation (factures, moyens de paiement, création d'abonnements) se gèrent dans <b>Gestion des coûts + Facturation</b>, avec des rôles propres au compte de facturation, au profil de facturation et à la section de facture (Propriétaire, Contributeur, Lecteur du profil de facturation…).</p><p>Le contrôle d'accès d'un groupe de ressources ne couvre pas la facturation. Azure Policy n'accorde aucun droit.</p><p><b>3. Budget de 10 000 €, dépenses de 12 000 € en fin de mois — ressources :</b></p><p>Un budget <b>n'impose aucune limite</b> : il surveille et envoie des alertes. Les ressources continuent de fonctionner et d'être facturées. Pour agir automatiquement, il faut un groupe d'actions relié à une automatisation.</p><p>Seuls certains abonnements à crédit (comme les offres d'évaluation ou les crédits Visual Studio) ont une limite de dépense qui désactive les ressources.</p><p><b>4. Réservation utilisée par Sub1, Sub2 et Sub3 du même compte de facturation — étendue :</b></p><p>L'étendue <b>Partagée</b> applique la remise aux ressources correspondantes de tous les abonnements éligibles du contexte de facturation. C'est la plus souple.</p><p>Abonnement unique et groupe de ressources unique limiteraient la remise à une seule cible. Il existe aussi une étendue « groupe d'administration », mais pas « racine uniquement ».</p><p><b>5. Réduction contre un engagement horaire, sans lien à une taille ni une région :</b></p><p>Le <b>plan d'économies pour le calcul</b> (savings plan) engage un montant horaire et applique la remise à plusieurs services de calcul, quelles que soient la taille et la région. Il convient aux charges qui évoluent.</p><p>Une <b>réservation</b> remise davantage, mais pour une famille de taille et une région précises. Les VM Spot peuvent être interrompues. Azure Hybrid Benefit dépend de licences existantes.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub3"
  ],
  "title": "Transférer la propriété de facturation",
  "menu": [
   "*Vue d'ensemble"
  ],
  "rows": [
   [
    "Nouveau propriétaire",
    "admin2@contoso.com"
   ],
   [
    "*Attributions de rôles",
    "Conservées (même locataire)"
   ]
  ],
  "btn": "Envoyer la demande de transfert"
 },
 "keep": "Transfert de facturation dans le même locataire = rôles conservés. Changement de locataire = rôles supprimés. Droits de facturation MCA = rôles du compte, du profil de facturation et de la section de facture. Un budget n'arrête jamais rien sans groupe d'actions et automatisation. Réservation pour plusieurs abonnements d'un même compte de facturation = étendue Partagée. Charges de calcul qui changent = plan d'économies. Taille et région fixes = réservation (plus forte remise)."
},
{
 "id": "D1-318",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Une stratégie DeployIfNotExists ou Modify doit corriger des ressources. Que devez-vous faire ou vérifier dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "La tâche de correction échoue faute d'autorisations :",
   "o": [
    "Que vous avez le rôle Lecteur sur l'abonnement",
    "Que les groupes de ressources ciblés ne contiennent aucune ressource",
    "Que l'affectation a une identité managée avec le bon rôle",
    "Que la stratégie fait partie d'une initiative attribuée"
   ],
   "a": 2
  },
  {
   "l": "RG-DR doit pouvoir contenir des ressources en France South, effort minimal :",
   "o": [
    "Ajouter RG-DR aux exclusions de l'affectation",
    "Créer une seconde affectation sur RG-DR, en Audit",
    "Déplacer RG-DR dans un autre abonnement",
    "Appliquer un verrou en lecture seule sur RG-DR"
   ],
   "a": 0
  },
  {
   "l": "État de conformité immédiat des ressources existantes :",
   "o": [
    "Lancer une analyse de conformité à la demande",
    "Redémarrer les ressources concernées",
    "Supprimer et recréer l'affectation de la stratégie",
    "Créer une tâche de correction sur l'affectation"
   ],
   "a": 0
  },
  {
   "l": "Passer une stratégie d'Audit à un blocage sans nouvelle définition :",
   "o": [
    "Ajouter un verrou ReadOnly sur Sub1",
    "Créer une tâche de correction sur l'affectation",
    "Paramétrer l'effet, puis le changer dans l'affectation",
    "Ajouter l'abonnement aux exclusions de l'affectation"
   ],
   "a": 2
  },
  {
   "l": "Les utilisateurs bloqués ne comprennent pas le nom technique de la stratégie :",
   "o": [
    "Un message de non-conformité",
    "Une exclusion sur l'affectation",
    "Une identité managée sur l'affectation",
    "L'effet Audit à la place de Deny"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. La tâche de correction échoue faute d'autorisations :</b></p><p>Les effets <b>Modify</b> et <b>DeployIfNotExists</b> agissent à votre place sur les ressources. Pour cela, l'affectation utilise une <b>identité managée</b> (attribuée par le système ou par l'utilisateur) qui doit avoir un rôle suffisant, par exemple Contributeur d'étiquettes ou Contributeur, sur l'étendue concernée.</p><p>Le rôle Lecteur ne permet pas de corriger. Une stratégie seule fonctionne aussi bien qu'une initiative. Le contenu des groupes de ressources n'a aucun rapport.</p><p><b>2. RG-DR doit pouvoir contenir des ressources en France South, effort minimal :</b></p><p>Une affectation de stratégie peut avoir des <b>exclusions</b> : des groupes de ressources ou des ressources de l'étendue qui ne sont pas évalués. Ajouter RG-DR aux exclusions suffit.</p><ul><li>Une <b>seconde affectation</b> qui autorise France South n'annule pas la première : les deux s'appliquent et la première refuse toujours.</li><li><b>Déplacer RG-DR</b> vers un autre abonnement marche, mais demande bien plus d'effort.</li><li>Un <b>verrou</b> protège contre les modifications ; il ne touche pas aux stratégies.</li></ul><p>Pour une dérogation documentée et limitée dans le temps sur une ressource précise, il existe aussi les <b>exemptions</b>.</p><p><b>3. État de conformité immédiat des ressources existantes :</b></p><p>Une <b>analyse à la demande</b> se lance avec <code>az policy state trigger-scan</code> ou <code>Start-AzPolicyComplianceScan</code>. Sinon, l'évaluation complète a lieu toutes les 24 heures, et une nouvelle affectation est évaluée dans les minutes qui suivent sa création.</p><p>Recréer l'affectation ne fait pas mieux. Une tâche de correction modifie des ressources (Modify ou DeployIfNotExists), elle ne sert pas à une simple évaluation en Audit. Redémarrer les ressources n'a aucun effet.</p><p><b>4. Passer une stratégie d'Audit à un blocage sans nouvelle définition :</b></p><p>Beaucoup de stratégies intégrées ont un paramètre <b>effect</b> (Audit, Deny, Disabled…). On choisit la valeur dans l'<b>affectation</b> : on peut commencer en Audit pour mesurer l'impact, puis passer à Deny sans toucher à la définition.</p><p>Un verrou bloque toutes les modifications, pas seulement les non conformes. Une tâche de correction ne bloque rien. Une exclusion retirerait l'abonnement de l'évaluation.</p><p><b>5. Les utilisateurs bloqués ne comprennent pas le nom technique de la stratégie :</b></p><p>Le <b>message de non-conformité</b> d'une affectation est affiché dans l'erreur de refus et dans les résultats de conformité. On y explique la règle, par exemple « Seule la région France Central est autorisée. Contactez l'équipe Cloud. »</p><p>Une exclusion ou l'effet Audit supprimeraient le blocage. L'identité managée sert aux corrections.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Affecter une stratégie | Correction",
  "menu": [
   "Informations de base",
   "Paramètres",
   "*Correction",
   "Messages de non-conformité"
  ],
  "rows": [
   [
    "*Créer une identité managée",
    "Coché"
   ],
   [
    "*Type d'identité",
    "Identité managée affectée par le système"
   ],
   [
    "Autorisations",
    "Contributeur d'étiquettes"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Modify et DeployIfNotExists ont besoin d'une identité managée avec un rôle suffisant pour corriger. Retirer une étendue d'une affectation = exclusion. Dérogation tracée et temporaire = exemption. Évaluer la conformité tout de suite = analyse à la demande (trigger-scan). Bonne pratique : déployer en Audit, mesurer, puis passer le paramètre effect à Deny dans l'affectation. Expliquer un refus aux utilisateurs = message de non-conformité de l'affectation."
},
{
 "id": "D1-319",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous pilotez le déploiement et le suivi des stratégies. Que devez-vous faire ou consulter pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Savoir si une stratégie Deny bloquerait des ressources existantes, avant de l'appliquer :",
   "o": [
    "Lancer une tâche de correction sur l'affectation",
    "Créer un verrou ReadOnly temporaire sur l'abonnement",
    "Attribuer en DoNotEnforce et consulter la conformité",
    "Attribuer la stratégie en Deny et observer les erreurs"
   ],
   "a": 2
  },
  {
   "l": "Autoriser Bastion dans RG-Bastion seulement, 6 mois, avec justification :",
   "o": [
    "Une exemption avec une date d'expiration",
    "Un verrou ReadOnly sur RG-Bastion",
    "Une seconde affectation avec l'effet Audit",
    "Un rôle personnalisé pour l'ingénieur"
   ],
   "a": 0
  },
  {
   "l": "Liste des ressources non conformes et raison de la non-conformité :",
   "o": [
    "Les métriques de l'abonnement",
    "Le journal d'activité, catégorie Sécurité",
    "Azure Policy > Conformité",
    "Azure Advisor > Fiabilité"
   ],
   "a": 2
  },
  {
   "l": "Prouver qu'une stratégie est respectée depuis trois mois :",
   "o": [
    "Les journaux de connexion de Microsoft Entra ID",
    "La liste des verrous de l'abonnement Sub1",
    "Le rapport des recommandations Advisor",
    "L'historique de conformité de l'affectation"
   ],
   "a": 3
  },
  {
   "l": "Qui a attribué Propriétaire à User11 sur Sub1 la semaine dernière :",
   "o": [
    "Dans le journal d'activité de Sub1",
    "Dans les métriques de l'abonnement Sub1",
    "Dans Azure Advisor, onglet Sécurité",
    "Dans les journaux de connexion de Microsoft Entra ID"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Savoir si une stratégie Deny bloquerait des ressources existantes, avant de l'appliquer :</b></p><p>Avec <b>Application de la stratégie : Désactivé</b> (enforcementMode = DoNotEnforce), l'affectation calcule la conformité sans bloquer. Vous voyez quelles ressources seraient non conformes, puis vous activez l'application quand vous êtes prêt.</p><p>On peut aussi utiliser un paramètre d'effet Audit. Attribuer directement en Deny risquerait de bloquer des déploiements.</p><p><b>2. Autoriser Bastion dans RG-Bastion seulement, 6 mois, avec justification :</b></p><p>Une <b>exemption</b> exempte une étendue d'une affectation, avec une catégorie (Dérogation ou Atténué), une description et une <b>date d'expiration</b>. C'est mieux qu'une exclusion pour un cas temporaire et justifié.</p><p>Une seconde affectation n'annule pas la première. Aucun rôle ne contourne une stratégie Deny. Un verrou n'a pas de lien.</p><p><b>3. Liste des ressources non conformes et raison de la non-conformité :</b></p><p>La page <b>Conformité</b> d'Azure Policy liste chaque affectation avec son pourcentage de conformité. En ouvrant l'affectation, on voit les ressources non conformes et, pour chacune, les <b>détails de conformité</b> (valeur attendue et valeur réelle).</p><p>L'effet Audit écrit aussi un événement dans le journal d'activité, mais de façon moins pratique. Advisor et les métriques ne montrent pas la conformité des stratégies.</p><p><b>4. Prouver qu'une stratégie est respectée depuis trois mois :</b></p><p>Azure Policy conserve l'<b>historique de conformité</b> de chaque affectation (graphique et états). On peut aussi exporter les états avec Azure Resource Graph.</p><p>Les journaux de connexion, Advisor et les verrous n'indiquent pas la conformité à une stratégie.</p><p><b>5. Qui a attribué Propriétaire à User11 sur Sub1 la semaine dernière :</b></p><p>Les attributions de rôles Azure sont des opérations sur le plan de contrôle : elles sont tracées dans le <b>journal d'activité</b> (catégorie Administratif), avec l'auteur et la date, pendant 90 jours.</p><p>Les journaux de connexion montrent les authentifications. Advisor et les métriques ne tracent pas les opérations.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Affecter une stratégie",
  "menu": [
   "*Informations de base",
   "Paramètres"
  ],
  "rows": [
   [
    "*Application de la stratégie",
    "Désactivé (DoNotEnforce)"
   ],
   [
    "Effet",
    "Conformité calculée, rien de bloqué"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Tester l'impact d'un Deny = Application de la stratégie : Désactivé, puis lire la conformité. Dérogation ciblée, tracée et temporaire = exemption avec date d'expiration. Ressources non conformes et raisons = Policy > Conformité > affectation > détails. Preuve de conformité dans le temps = historique de conformité Azure Policy (ou Resource Graph). Qui a fait quoi sur le plan de contrôle (dont les rôles) = journal d'activité, 90 jours."
},
{
 "id": "D1-320",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous gérez le cycle de vie des comptes utilisateurs. Que se passe-t-il ou que devez-vous faire dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Supprimer depuis le portail Entra le compte synchronisé de Jean :",
   "o": [
    "Jean est converti en compte cloud uniquement",
    "Suppression impossible ici : il faut le supprimer dans l'AD local",
    "La suppression réussit et Jean disparaît aussi de l'AD local",
    "La suppression réussit, mais Jean revient à la synchronisation"
   ],
   "a": 1
  },
  {
   "l": "Bloquer la connexion sans supprimer le compte et couper les sessions :",
   "o": [
    "Désactiver le compte, puis révoquer les sessions",
    "Le retirer de tous les groupes du locataire",
    "Supprimer toutes ses licences Microsoft 365",
    "Réinitialiser son mot de passe uniquement"
   ],
   "a": 0
  },
  {
   "l": "User7 supprimé par erreur il y a 10 jours :",
   "o": [
    "Restaurer User7 depuis Utilisateurs supprimés (30 jours)",
    "Recréer User7 : il récupère seul ses groupes et licences",
    "Restaurer User7 depuis le journal d'activité Azure",
    "Rien : la suppression est immédiate et définitive"
   ],
   "a": 0
  },
  {
   "l": "Groupe Microsoft 365 Projet-X supprimé il y a 12 jours :",
   "o": [
    "Non, car un groupe ne peut être restauré que dans les 7 jours",
    "Oui, mais seulement s'il s'agissait d'un groupe de sécurité",
    "Oui : un groupe Microsoft 365 reste 30 jours supprimé",
    "Non, les groupes sont supprimés définitivement tout de suite"
   ],
   "a": 2
  },
  {
   "l": "Utilisateur supprimé il y a 40 jours, à restaurer :",
   "o": [
    "Recréer le compte : l'ancien est supprimé après 30 jours",
    "Le restaurer depuis la page Utilisateurs supprimés, comme d'habitude",
    "Le restaurer depuis une sauvegarde Azure Backup",
    "Le restaurer depuis le journal d'audit"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Supprimer depuis le portail Entra le compte synchronisé de Jean :</b></p><p>Pour un objet <b>synchronisé</b>, la source d'autorité est l'AD local. Le portail ne permet pas de supprimer ni de modifier ses attributs synchronisés : il faut supprimer Jean dans l'<b>AD local</b>, et la suppression sera répercutée à la prochaine synchronisation.</p><p>Entra ne modifie jamais l'AD local de cette façon, et ne convertit pas l'objet en compte cloud.</p><p><b>2. Bloquer la connexion sans supprimer le compte et couper les sessions :</b></p><p>Désactiver <b>Compte activé</b> (bloquer la connexion) empêche toute nouvelle authentification. <b>Révoquer les sessions</b> invalide les jetons d'actualisation, ce qui force la déconnexion des sessions existantes.</p><p>Retirer les licences ou les groupes ne bloque pas la connexion. Réinitialiser le mot de passe seul ne coupe pas forcément les sessions déjà ouvertes.</p><p><b>3. User7 supprimé par erreur il y a 10 jours :</b></p><p>Un utilisateur supprimé reste <b>30 jours</b> dans <b>Utilisateurs supprimés</b> (suppression réversible). Pendant ce délai, on peut le restaurer avec ses appartenances aux groupes et ses licences.</p><p>Le journal d'activité Azure trace les opérations sur les ressources, il ne restaure rien. Un utilisateur recréé est un <b>nouvel objet</b> avec un nouvel identifiant : il ne retrouve ni ses groupes, ni ses licences, ni ses rôles.</p><p><b>4. Groupe Microsoft 365 Projet-X supprimé il y a 12 jours :</b></p><p>Les groupes <b>Microsoft 365</b> supprimés restent <b>30 jours</b> dans <b>Groupes supprimés</b> et peuvent être restaurés avec leurs membres et leur contenu (boîte aux lettres, site SharePoint, équipe).</p><p>À l'inverse, un <b>groupe de sécurité</b> supprimé est supprimé définitivement tout de suite : c'est un piège classique.</p><p><b>5. Utilisateur supprimé il y a 40 jours, à restaurer :</b></p><p>Après <b>30 jours</b>, un utilisateur supprimé est supprimé <b>définitivement</b>. Il faut recréer un compte, qui aura un nouvel identifiant d'objet : groupes, licences et rôles sont à réattribuer.</p><p>Azure Backup ne sauvegarde pas les objets Entra. Le journal d'audit trace la suppression mais ne restaure rien.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Utilisateurs",
   "Jean"
  ],
  "title": "Jean | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble",
   "Propriétés"
  ],
  "rows": [
   [
    "*Synchronisation locale activée",
    "Oui"
   ],
   [
    "Supprimer",
    "Indisponible (objet synchronisé)"
   ]
  ]
 },
 "keep": "Objet synchronisé = on le gère (et le supprime) dans l'AD local. Départ immédiat = bloquer la connexion + révoquer les sessions. Utilisateur supprimé : 30 jours pour le restaurer avec ses groupes et licences. Groupe Microsoft 365 supprimé : 30 jours pour le restaurer. Groupe de sécurité supprimé : définitivement, tout de suite. Au-delà de 30 jours, un utilisateur est perdu : nouveau compte, nouvel ID."
},
{
 "id": "D1-321",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous déployez la réinitialisation du mot de passe et l'authentification multifacteur. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "SSPR pour un groupe pilote seulement — valeur :",
   "o": [
    "Invités uniquement",
    "Tous",
    "Aucun",
    "Sélectionné"
   ],
   "a": 3
  },
  {
   "l": "Beaucoup d'utilisateurs n'ont jamais enregistré de méthode :",
   "o": [
    "Exiger l'inscription des utilisateurs lors de la connexion",
    "Augmenter le nombre de méthodes requises à 2",
    "Activer la réécriture du mot de passe",
    "Notifier les utilisateurs lors de la réinitialisation de mot de passe"
   ],
   "a": 0
  },
  {
   "l": "MFA pour le portail Azure, pas pour les autres applications :",
   "o": [
    "Un accès conditionnel ciblant Microsoft Azure Management",
    "La réinitialisation de mot de passe en libre-service",
    "Les paramètres de sécurité par défaut du locataire",
    "Une stratégie Azure Policy qui cible les comptes administrateurs"
   ],
   "a": 0
  },
  {
   "l": "Portail où les utilisateurs gèrent leur mot de passe et leurs méthodes :",
   "o": [
    "Le portail Azure DevOps",
    "Le portail Mon compte",
    "Le centre d'administration Microsoft Entra",
    "Le portail Azure, page Abonnements"
   ],
   "a": 1
  },
  {
   "l": "Service et poste synchronisés depuis l'AD local — où les modifier :",
   "o": [
    "Dans le portail Mon compte de l'utilisateur",
    "Dans une stratégie Azure Policy sur les utilisateurs",
    "Dans l'Active Directory local (attribut synchronisé)",
    "Dans les propriétés de l'utilisateur dans Microsoft Entra ID"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. SSPR pour un groupe pilote seulement — valeur :</b></p><p>Le paramètre propose trois valeurs : <b>Aucun</b>, <b>Sélectionné</b> et <b>Tous</b>. <b>Sélectionné</b> limite SSPR aux membres d'un groupe choisi, ici Pilote.</p><p><b>Aucun</b> désactive SSPR pour les utilisateurs ; <b>Tous</b> l'active pour tout le monde. « Invités uniquement » n'existe pas.</p><p>À retenir : les administrateurs ont toujours SSPR activé, avec une stratégie plus stricte (deux méthodes), quel que soit ce réglage.</p><p><b>2. Beaucoup d'utilisateurs n'ont jamais enregistré de méthode :</b></p><p>Dans <b>Réinitialisation du mot de passe > Inscription</b>, l'option <b>« Exiger l'inscription des utilisateurs lors de la connexion »</b> oblige chaque utilisateur à enregistrer ses méthodes à sa prochaine connexion. Un second réglage fixe le nombre de jours avant de redemander la confirmation des informations.</p><p>Les notifications préviennent après une réinitialisation. Exiger 2 méthodes ne fait pas s'inscrire les utilisateurs. La réécriture concerne l'Active Directory local.</p><p><b>3. MFA pour le portail Azure, pas pour les autres applications :</b></p><p>L'<b>accès conditionnel</b> (Entra ID P1) applique des conditions par application, utilisateur, emplacement ou appareil. Une stratégie qui cible les applications de gestion Azure et exige l'authentification multifacteur répond au besoin.</p><p>Les <b>paramètres de sécurité par défaut</b> s'appliquent à tout le locataire sans réglage fin. Azure Policy gouverne les ressources. SSPR concerne les mots de passe oubliés.</p><p><b>4. Portail où les utilisateurs gèrent leur mot de passe et leurs méthodes :</b></p><p>Le portail <b>Mon compte</b> permet à chaque utilisateur de gérer ses informations de sécurité, son mot de passe, ses appareils et de voir ses abonnements. Le portail Mes applications (myapps) liste les applications.</p><p>Le portail Azure et le centre d'administration Entra sont des outils d'administration.</p><p><b>5. Service et poste synchronisés depuis l'AD local — où les modifier :</b></p><p>Pour un utilisateur <b>synchronisé</b>, la source d'autorité est l'Active Directory local : les attributs synchronisés (service, poste, nom…) se modifient <b>dans AD DS</b>, puis Microsoft Entra Connect reporte la modification dans le cloud.</p><p>Dans le portail Entra, ces champs sont en lecture seule pour un compte synchronisé. Azure Policy ne gère pas les utilisateurs.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Réinitialisation du mot de passe"
  ],
  "title": "Réinitialisation du mot de passe | Propriétés",
  "menu": [
   "*Propriétés",
   "Méthodes d'authentification",
   "Inscription"
  ],
  "rows": [
   [
    "*Réinitialisation du mot de passe en libre-service activée",
    "Sélectionné"
   ],
   [
    "*Sélectionner un groupe",
    "Pilote"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "SSPR : Aucun, Sélectionné (un seul groupe) ou Tous. Les administrateurs l'ont toujours, avec une stratégie plus stricte. Forcer les utilisateurs à enregistrer leurs méthodes SSPR = Inscription > Exiger l'inscription à la connexion. MFA pour une application précise = accès conditionnel (P1). Sécurité par défaut = tout le locataire, sans réglage. Libre-service utilisateur = Mon compte (myaccount) ; applications = Mes applications (myapps). Compte synchronisé : on modifie les attributs dans l'AD local, la synchro les reporte."
},
{
 "id": "D1-322",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous collaborez avec des partenaires externes. Que devez-vous configurer ou attribuer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Inviter de nombreux invités en une seule opération :",
   "o": [
    "Créer des utilisateurs en bloc avec un fichier CSV",
    "Inviter des utilisateurs en bloc avec un fichier CSV",
    "Importer les utilisateurs depuis un groupe dynamique",
    "Synchroniser les utilisateurs avec Microsoft Entra Connect"
   ],
   "a": 1
  },
  {
   "l": "Employés de Fabrikam (leur propre locataire), sans gérer leurs mots de passe :",
   "o": [
    "Synchroniser le locataire Fabrikam avec Entra Connect",
    "Créer des comptes membres dans votre locataire",
    "Les inviter en B2B et leur attribuer des rôles",
    "Créer un principal de service par développeur"
   ],
   "a": 2
  },
  {
   "l": "N'inviter que des utilisateurs de fabrikam.com et tailspin.com :",
   "o": [
    "Restrictions d'invitation des invités",
    "Restrictions d'accès des utilisateurs invités",
    "Restrictions de collaboration",
    "Paramètres d'accès interlocataire"
   ],
   "a": 2
  },
  {
   "l": "User3 doit inviter des invités, privilège minimum — rôle :",
   "o": [
    "Administrateur de groupes",
    "Administrateur d'applications",
    "Administrateur d'utilisateurs",
    "Inviteur d'invités"
   ],
   "a": 3
  },
  {
   "l": "Un invité ne voit que les propriétés de son propre compte — réglage :",
   "o": [
    "Les utilisateurs invités disposent du même accès que les membres du locataire",
    "L'accès des utilisateurs invités est limité aux propriétés et aux appartenances de leurs propres objets d'annuaire",
    "Les utilisateurs invités ont un accès limité aux propriétés et aux appartenances des objets d'annuaire",
    "Aucun utilisateur invité ne peut plus se connecter au locataire"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Inviter de nombreux invités en une seule opération :</b></p><p>L'opération <b>Inviter des utilisateurs en bloc</b> (Bulk invite) utilise un modèle CSV téléchargeable : adresse e-mail, URL de redirection, envoi ou non du message d'invitation. Elle crée des comptes <b>invités</b>.</p><ul><li><b>Créer des utilisateurs en bloc</b> crée des comptes <b>membres</b> internes au locataire, pas des invités.</li><li>Un <b>groupe dynamique</b> regroupe des utilisateurs existants ; il n'en crée pas.</li><li><b>Microsoft Entra Connect</b> synchronise les comptes de votre Active Directory local, pas des personnes externes.</li></ul><p><b>2. Employés de Fabrikam (leur propre locataire), sans gérer leurs mots de passe :</b></p><p>Avec <b>Microsoft Entra B2B</b>, les invités s'authentifient dans leur propre locataire (Fabrikam) : vous ne gérez pas leurs mots de passe. Vous leur attribuez ensuite des rôles Azure comme à tout utilisateur.</p><p>Des comptes membres obligent à gérer des mots de passe. Microsoft Entra Connect synchronise un AD local, pas un autre locataire. Les principaux de service sont des identités d'applications.</p><p><b>3. N'inviter que des utilisateurs de fabrikam.com et tailspin.com :</b></p><p>Les <b>Restrictions de collaboration</b> permettent d'autoriser les invitations vers une liste de domaines (liste d'autorisation) ou de les bloquer pour certains domaines (liste de refus). Ici, on choisit « Autoriser les invitations uniquement aux domaines spécifiés ».</p><ul><li><b>Restrictions d'accès des utilisateurs invités</b> : ce que les invités peuvent voir dans l'annuaire.</li><li><b>Restrictions d'invitation des invités</b> : <i>qui</i> chez vous peut inviter (tout le monde, les membres, certains rôles, personne), pas <i>quels domaines</i>.</li><li><b>Paramètres d'accès interlocataire</b> : règles B2B avec d'autres locataires Entra (approbation de l'authentification multifacteur, etc.), un réglage plus large que la liste de domaines demandée.</li></ul><p><b>4. User3 doit inviter des invités, privilège minimum — rôle :</b></p><p>Le rôle <b>Inviteur d'invités</b> (Guest Inviter) ne permet qu'une chose : inviter des utilisateurs invités. C'est le privilège minimum, et il fait partie des rôles reconnus par ce réglage.</p><p>Administrateur d'utilisateurs peut aussi inviter, mais il peut en plus créer, modifier et supprimer des utilisateurs : trop de droits. Administrateur de groupes et Administrateur d'applications ne servent pas à inviter des invités.</p><p><b>5. Un invité ne voit que les propriétés de son propre compte — réglage :</b></p><p>Le réglage le plus restrictif, <b>« limité aux propriétés et aux appartenances de leurs propres objets »</b>, empêche l'invité d'énumérer les utilisateurs, groupes et autres objets de l'annuaire.</p><ul><li>« Même accès que les membres » est le plus permissif.</li><li>« Accès limité » (le réglage par défaut) empêche d'énumérer les utilisateurs, mais laisse voir certaines informations, comme les membres des groupes non masqués.</li><li>« Aucun invité ne peut se connecter » n'est pas une option de ce réglage.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Utilisateurs",
   "Tous les utilisateurs"
  ],
  "title": "Inviter des utilisateurs en bloc",
  "menu": [
   "Tous les utilisateurs",
   "Utilisateurs supprimés",
   "*Opérations en bloc"
  ],
  "rows": [
   [
    "1. Télécharger le fichier CSV",
    "Modèle d'invitation"
   ],
   [
    "*2. Charger votre fichier CSV",
    "partenaires.csv"
   ]
  ],
  "btn": "Envoyer"
 },
 "keep": "Invités en masse = Inviter des utilisateurs en bloc (CSV). Créer en bloc = comptes membres. Comptes d'une autre organisation, sans mot de passe à gérer = invités B2B. Limiter les domaines invités = Restrictions de collaboration (liste d'autorisation ou de refus). Seul droit d'inviter, sans rien d'autre = Inviteur d'invités. Trois niveaux pour les invités : même accès que les membres, accès limité (défaut), leurs propres objets uniquement."
},
{
 "id": "D1-323",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous configurez les paramètres du locataire Microsoft Entra. Vous devez indiquer où se trouve chaque réglage.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Emplacements",
 "tgtHead": [
  "Réglage",
  "Emplacement"
 ],
 "srcs": [
  "Appareils > Paramètres de l'appareil",
  "Identités externes > Paramètres de collaboration externe",
  "Utilisateurs > Paramètres utilisateur",
  "Groupes > Paramètres généraux",
  "Paramètres du rôle dans PIM",
  "Applications d'entreprise > Consentement et autorisations",
  "Accès conditionnel"
 ],
 "tgts": [
  {
   "l": "Pas plus de 5 appareils joints par utilisateur",
   "a": 0
  },
  {
   "l": "Les utilisateurs ne créent ni locataires ni inscriptions d'applications",
   "a": 2
  },
  {
   "l": "Les utilisateurs créent leurs propres groupes de sécurité",
   "a": 3
  },
  {
   "l": "MFA exigée avant l'activation d'un rôle éligible",
   "a": 4
  },
  {
   "l": "Les utilisateurs ne consentent plus eux-mêmes aux applications tierces",
   "a": 5
  },
  {
   "l": "Restreindre l'accès au centre d'administration Microsoft Entra",
   "a": 2
  }
 ],
 "expl": "<p><b>1. Pas plus de 5 appareils joints par utilisateur</b></p><p>La page <b>Appareils > Paramètres de l'appareil</b> contient « Nombre maximal d'appareils par utilisateur » (20 par défaut), ainsi que les réglages « Les utilisateurs peuvent joindre des appareils à Microsoft Entra » et « Les utilisateurs peuvent inscrire leurs appareils ».</p><p>Azure Policy gouverne les ressources Azure, pas les appareils Entra. Les paramètres utilisateur et les propriétés d'un utilisateur ne contiennent pas cette limite.</p><p><b>2. Les utilisateurs ne créent ni locataires ni inscriptions d'applications</b></p><p>La page <b>Paramètres utilisateur</b> contient notamment « Les utilisateurs peuvent inscrire des applications », « Empêcher les utilisateurs non administrateurs de créer des locataires » et « Restreindre l'accès au centre d'administration Microsoft Entra ».</p><p>Azure Policy et le contrôle d'accès Azure portent sur les ressources Azure. Les paramètres de l'appareil concernent la jonction et l'inscription des appareils.</p><p><b>3. Les utilisateurs créent leurs propres groupes de sécurité</b></p><p>Dans <b>Groupes > Paramètres généraux</b>, les réglages « Les utilisateurs peuvent créer des groupes de sécurité » et « Les utilisateurs peuvent créer des groupes Microsoft 365 » contrôlent la gestion de groupes en libre-service.</p><p>Les autres pages ne contiennent pas ces réglages. Le contrôle d'accès d'un abonnement gère les rôles Azure, pas la création de groupes Entra.</p><p><b>4. MFA exigée avant l'activation d'un rôle éligible</b></p><p>Chaque rôle géré par PIM a des <b>paramètres de rôle</b> : durée maximale d'activation, exigence d'authentification multifacteur, justification, approbation, notifications.</p><p>SSPR, Azure Policy et les paramètres de l'appareil ne contrôlent pas l'activation des rôles.</p><p><b>5. Les utilisateurs ne consentent plus eux-mêmes aux applications tierces</b></p><p>Le réglage <b>Consentement de l'utilisateur pour les applications</b> se trouve dans <b>Applications d'entreprise > Consentement et autorisations</b>. On peut le désactiver, ou le limiter aux éditeurs vérifiés et aux permissions à faible risque, et activer un workflow de demande d'approbation par un administrateur.</p><p><b>6. Restreindre l'accès au centre d'administration Microsoft Entra</b></p><p>Le paramètre utilisateur <b>« Restreindre l'accès au centre d'administration Microsoft Entra »</b> empêche les non-administrateurs de parcourir l'annuaire dans le centre d'administration. Ce n'est pas une mesure de sécurité forte (Microsoft Graph et PowerShell restent utilisables), mais il répond au besoin.</p><p>Bloquer la connexion empêcherait tout accès. Les deux autres réglages n'ont pas d'effet sur la consultation de l'annuaire.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Appareils"
  ],
  "title": "Appareils | Paramètres de l'appareil",
  "menu": [
   "Vue d'ensemble",
   "Tous les appareils",
   "*Paramètres de l'appareil"
  ],
  "rows": [
   [
    "Les utilisateurs peuvent joindre des appareils à Microsoft Entra",
    "Tous"
   ],
   [
    "*Nombre maximal d'appareils par utilisateur",
    "5"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Limite d'appareils par utilisateur = Appareils > Paramètres de l'appareil (20 par défaut). Inscriptions d'applications et création de locataires par les utilisateurs = Paramètres utilisateur. Autoriser les utilisateurs à créer des groupes = Groupes > Paramètres généraux. Règles d'activation (MFA, approbation, durée) = Paramètres du rôle dans PIM. Bloquer le consentement des utilisateurs = Applications d'entreprise > Consentement et autorisations. Cacher l'annuaire aux non-admins dans le centre d'administration = Restreindre l'accès au centre d'administration."
},
{
 "id": "D1-324",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous attribuez des licences Microsoft 365 et gérez les utilisateurs en masse. Que se passe-t-il ou que devez-vous faire dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "L'attribution d'une licence à User5 échoue — propriété à renseigner :",
   "o": [
    "Service",
    "Fonction",
    "Emplacement d'utilisation",
    "Responsable hiérarchique"
   ],
   "a": 2
  },
  {
   "l": "Licence reçue à l'entrée dans le groupe Compta, perdue à la sortie :",
   "o": [
    "Créer une règle d'appartenance dynamique sur Compta",
    "Attribuer le rôle Administrateur de licences",
    "Attribuer la licence au groupe Compta",
    "Créer une stratégie Azure Policy sur les licences"
   ],
   "a": 2
  },
  {
   "l": "Licence attribuée à GRP-Direction, qui contient le groupe imbriqué GRP-Assistants :",
   "o": [
    "Oui, mais seulement si GRP-Assistants est dynamique",
    "Non, sauf si GRP-Assistants est un groupe Microsoft 365",
    "Non : la licence de groupe ne vise que les membres directs",
    "Oui, les licences sont héritées par les groupes imbriqués"
   ],
   "a": 2
  },
  {
   "l": "Licence E3 attribuée à 120 membres avec 100 licences disponibles :",
   "o": [
    "Aucun membre ne reçoit de licence",
    "Les 120 reçoivent une licence, le surplus est facturé",
    "Azure achète automatiquement 20 licences de plus",
    "100 reçoivent une licence, 20 sont en erreur"
   ],
   "a": 3
  },
  {
   "l": "Exporter tous les utilisateurs du locataire en CSV depuis le portail :",
   "o": [
    "Exporter le journal d'audit de Microsoft Entra ID",
    "Créer un export de Gestion des coûts",
    "Télécharger des utilisateurs (en bloc)",
    "Exporter le modèle ARM du locataire"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. L'attribution d'une licence à User5 échoue — propriété à renseigner :</b></p><p>Microsoft 365 doit savoir <b>dans quel pays</b> la licence sera utilisée, car certains services ne sont pas disponibles partout. Sans <b>emplacement d'utilisation</b> (usageLocation), l'attribution d'une licence échoue.</p><p>Le service, la fonction et le responsable sont des attributs descriptifs : ils ne bloquent pas l'attribution.</p><p>Astuce : avec les licences par groupe, un utilisateur sans emplacement d'utilisation hérite de celui du locataire, mais l'erreur reste fréquente à l'examen.</p><p><b>2. Licence reçue à l'entrée dans le groupe Compta, perdue à la sortie :</b></p><p>Les <b>licences basées sur les groupes</b> permettent d'attribuer une licence à un groupe : chaque membre la reçoit, et la perd en quittant le groupe. Cette fonction demande Microsoft Entra ID P1 (ou une offre qui l'inclut, comme Microsoft 365 E3).</p><ul><li>Une <b>règle dynamique</b> gère qui est membre du groupe, pas les licences.</li><li><b>Azure Policy</b> s'applique aux ressources Azure, pas aux utilisateurs ni aux licences.</li><li>Le rôle <b>Administrateur de licences</b> donne le droit de gérer les licences à quelqu'un ; il n'automatise rien.</li></ul><p><b>3. Licence attribuée à GRP-Direction, qui contient le groupe imbriqué GRP-Assistants :</b></p><p>Les <b>licences basées sur les groupes</b> ne prennent pas en charge l'imbrication : seuls les <b>membres directs</b> de GRP-Direction reçoivent la licence. Pour couvrir les assistants, il faut aussi attribuer la licence à GRP-Assistants.</p><p>Le type ou le mode d'appartenance de GRP-Assistants ne change rien.</p><p><b>4. Licence E3 attribuée à 120 membres avec 100 licences disponibles :</b></p><p>Entra attribue les licences tant qu'il en reste. Les utilisateurs restants apparaissent en <b>erreur</b> (« nombre de licences insuffisant ») dans le groupe, et seront traités dès que des licences se libèrent ou sont achetées.</p><p>Aucune licence n'est achetée ni facturée automatiquement.</p><p><b>5. Exporter tous les utilisateurs du locataire en CSV depuis le portail :</b></p><p>Dans <b>Utilisateurs</b>, le menu des opérations en bloc propose <b>Télécharger des utilisateurs</b>, qui génère un fichier CSV des utilisateurs et de leurs propriétés.</p><p>Le journal d'audit contient des événements, pas la liste des comptes. Les exports de coûts concernent la facturation. Un locataire Entra ne s'exporte pas en modèle ARM.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Utilisateurs",
   "User5"
  ],
  "title": "User5 | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "*Propriétés",
   "Licences",
   "Groupes"
  ],
  "rows": [
   [
    "#Paramètres",
    ""
   ],
   [
    "Compte activé",
    "Oui"
   ],
   [
    "*Emplacement d'utilisation",
    "France"
   ]
  ]
 },
 "keep": "Licence impossible à attribuer ? Vérifiez d'abord l'emplacement d'utilisation de l'utilisateur. Licence attribuée à un groupe : chaque membre la reçoit, et la perd en quittant le groupe. Fonction incluse dans Entra ID P1. Licences par groupe : membres directs seulement, pas d'imbrication. Pas assez de licences : les premiers sont servis, les autres sont en erreur ; rien n'est acheté. Liste des utilisateurs en CSV = Opérations en bloc > Télécharger des utilisateurs."
},
{
 "id": "D1-325",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous appliquez le principe du privilège minimum dans Sub1. Quel rôle devez-vous attribuer pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "User1 gère les VM de RG1, sans gérer les réseaux ni les comptes de stockage :",
   "o": [
    "Contributeur sur RG1",
    "Contributeur de machines virtuelles sur RG1",
    "Propriétaire sur RG1",
    "Contributeur de machines virtuelles sur l'abonnement"
   ],
   "a": 1
  },
  {
   "l": "Un utilisateur doit gérer les accès des autres utilisateurs sur Sub1 — rôle supplémentaire :",
   "o": [
    "Administrateur général dans Microsoft Entra ID",
    "Administrateur de l'accès utilisateur",
    "Propriétaire sur le groupe de ressources",
    "Lecteur"
   ],
   "a": 1
  },
  {
   "l": "Gérer les étiquettes de toutes les ressources sans modifier les ressources :",
   "o": [
    "Contributeur",
    "Contributeur d'étiquettes",
    "Lecteur",
    "Contributeur de stratégie de ressource"
   ],
   "a": 1
  },
  {
   "l": "Ouvrir des demandes de support sans autre droit :",
   "o": [
    "Contributeur",
    "Lecteur",
    "Contributeur de demande de support",
    "Administrateur du support technique"
   ],
   "a": 2
  },
  {
   "l": "Un consultant voit coûts et budgets sans voir les ressources :",
   "o": [
    "Lecteur de facturation",
    "Lecteur Cost Management",
    "Lecteur",
    "Contributeur Cost Management"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. User1 gère les VM de RG1, sans gérer les réseaux ni les comptes de stockage :</b></p><p>Le rôle intégré <b>Contributeur de machines virtuelles</b> permet de créer, démarrer, arrêter, redimensionner et supprimer des VM. Il ne donne <b>aucun</b> droit de modifier les réseaux virtuels ni les comptes de stockage (il peut seulement « joindre » une interface réseau à un sous-réseau existant), et il ne permet pas de gérer les accès.</p><p>Attribué sur <b>RG1</b>, il ne vaut que pour ce groupe de ressources : c'est le privilège minimum.</p><ul><li><b>Contributeur sur RG1</b> : gère <i>toutes</i> les ressources de RG1, y compris les réseaux et le stockage. Trop large.</li><li><b>Propriétaire sur RG1</b> : comme Contributeur, plus la gestion des accès. Encore plus large.</li><li><b>Contributeur de machines virtuelles sur l'abonnement</b> : bon rôle, mais mauvaise étendue (toutes les VM de l'abonnement).</li></ul><p><b>2. Un utilisateur doit gérer les accès des autres utilisateurs sur Sub1 — rôle supplémentaire :</b></p><p><b>Contributeur</b> gère toutes les ressources, mais ne peut pas attribuer de rôles : il n'a pas les actions <code>Microsoft.Authorization/roleAssignments/write</code>. <b>Administrateur de l'accès utilisateur</b> ajoute précisément la gestion des accès, sans autre droit.</p><ul><li><b>Propriétaire</b> fonctionnerait aussi (gestion des ressources + des accès), mais remplacer ou cumuler avec Contributeur donne plus que le besoin exprimé.</li><li><b>Administrateur général</b> est un rôle Microsoft Entra, pas un rôle Azure sur un abonnement.</li><li><b>Lecteur</b> ne permet que la lecture.</li></ul><p>Le rôle plus récent <b>Administrateur du contrôle d'accès en fonction du rôle</b> permet aussi d'attribuer des rôles, avec des conditions possibles ; il serait une bonne réponse s'il était proposé.</p><p><b>3. Gérer les étiquettes de toutes les ressources sans modifier les ressources :</b></p><p><b>Contributeur d'étiquettes</b> (Tag Contributor) permet de gérer les étiquettes des ressources sans accéder aux ressources elles-mêmes.</p><p>Contributeur peut tout modifier. Lecteur ne peut rien modifier, pas même les étiquettes. Contributeur de stratégie de ressource gère les stratégies Azure Policy, pas les étiquettes.</p><p><b>4. Ouvrir des demandes de support sans autre droit :</b></p><p><b>Contributeur de demande de support</b> (Support Request Contributor) permet de créer et gérer des demandes de support, et de lire l'abonnement. C'est le privilège minimum.</p><p>Lecteur ne permet pas d'ouvrir de demande. Contributeur donne beaucoup trop de droits. <b>Administrateur du support technique</b> est un rôle Microsoft Entra qui réinitialise des mots de passe : un faux ami classique.</p><p><b>5. Un consultant voit coûts et budgets sans voir les ressources :</b></p><p><b>Lecteur Cost Management</b> permet de consulter les coûts, les budgets et les recommandations de coût, sans accès aux ressources elles-mêmes.</p><ul><li><b>Lecteur</b> donne aussi accès aux ressources en lecture.</li><li><b>Contributeur Cost Management</b> permet en plus de créer et modifier des budgets et des exports.</li><li><b>Lecteur de facturation</b> donne accès aux factures, pas à l'analyse des coûts ni aux budgets.</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "RG1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "Journal d'activité",
   "*Contrôle d'accès (IAM)",
   "Étiquettes"
  ],
  "rows": [
   [
    "#Ajouter une attribution de rôle",
    ""
   ],
   [
    "*Rôle",
    "Contributeur de machines virtuelles"
   ],
   [
    "Attribuer l'accès à",
    "Utilisateur, groupe ou principal de service"
   ],
   [
    "Membres",
    "User1"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Privilège minimum = le rôle le plus précis (ici Contributeur de machines virtuelles) sur la plus petite étendue qui couvre le besoin (ici RG1). Contributeur gère tout sauf les accès. Ajouter seulement la gestion des accès = Administrateur de l'accès utilisateur (ou Administrateur du contrôle d'accès en fonction du rôle). Gérer les étiquettes sans toucher aux ressources = Contributeur d'étiquettes. Ouvrir des tickets Azure = Contributeur de demande de support (rôle Azure). Ne pas confondre avec Administrateur du support technique (Entra). Voir coûts et budgets = Lecteur Cost Management ; les créer = Contributeur Cost Management ; factures = Lecteur de facturation."
},
{
 "id": "D1-326",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Plusieurs équipes ont besoin d'accès en lecture ou de gestion limitée. Quel rôle devez-vous attribuer pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Lire les journaux d'audit et la configuration d'Entra ID, sans rien modifier — rôle Entra :",
   "o": [
    "Lecteur général",
    "Utilisateur",
    "Lecteur (rôle Azure) sur l'abonnement",
    "Administrateur de la sécurité"
   ],
   "a": 0
  },
  {
   "l": "Gérer la hiérarchie des groupes d'administration, pas les ressources — rôle sur la racine :",
   "o": [
    "Contributeur de groupe d'administration",
    "Contributeur sur chaque abonnement",
    "Administrateur de l'accès utilisateur",
    "Lecteur de groupe d'administration"
   ],
   "a": 0
  },
  {
   "l": "Lire journaux et métriques Azure Monitor de Sub1 sans accès aux ressources :",
   "o": [
    "Lecteur de surveillance",
    "Contributeur de surveillance",
    "Contributeur Log Analytics",
    "Lecteur"
   ],
   "a": 0
  },
  {
   "l": "Consulter les attributions de rôles de Sub1 sans rien modifier :",
   "o": [
    "Propriétaire",
    "Contributeur",
    "Lecteur",
    "Administrateur de l'accès utilisateur"
   ],
   "a": 2
  },
  {
   "l": "Lire les ressources d'un groupe et créer des tickets de support :",
   "o": [
    "Lecteur seul sur l'abonnement",
    "Contributeur sur l'abonnement de production",
    "Lecteur et Contributeur de demande de support",
    "Propriétaire sur l'abonnement"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Lire les journaux d'audit et la configuration d'Entra ID, sans rien modifier — rôle Entra :</b></p><p><b>Lecteur général</b> (Global Reader) peut lire tout ce que peut lire un administrateur général, y compris les journaux d'audit et de connexion, sans pouvoir modifier quoi que ce soit.</p><p>Le rôle Azure Lecteur porte sur les ressources Azure, pas sur l'annuaire. Administrateur de la sécurité peut modifier des paramètres de sécurité. Un simple utilisateur n'a pas accès aux journaux d'audit.</p><p><b>2. Gérer la hiérarchie des groupes d'administration, pas les ressources — rôle sur la racine :</b></p><p><b>Contributeur de groupe d'administration</b> permet de créer, déplacer et supprimer des groupes d'administration, et de déplacer des abonnements entre eux, sans droit sur les ressources des abonnements.</p><p>Contributeur sur la racine donnerait accès à toutes les ressources. Lecteur de groupe d'administration ne permet que la lecture. Administrateur de l'accès utilisateur gère les rôles, pas la hiérarchie.</p><p><b>3. Lire journaux et métriques Azure Monitor de Sub1 sans accès aux ressources :</b></p><p><b>Lecteur de surveillance</b> (Monitoring Reader) lit toutes les données de supervision : métriques, journaux, paramètres d'alerte.</p><p>Contributeur de surveillance peut aussi modifier les paramètres de supervision. Lecteur donne en plus la lecture des ressources. Contributeur Log Analytics gère les espaces de travail.</p><p><b>4. Consulter les attributions de rôles de Sub1 sans rien modifier :</b></p><p><b>Lecteur</b> inclut <code>*/read</code>, donc <code>Microsoft.Authorization/roleAssignments/read</code> : il voit les attributions de rôles dans l'onglet IAM, sans pouvoir en créer.</p><p>Les autres rôles permettent de modifier des ressources ou des accès.</p><p><b>5. Lire les ressources d'un groupe et créer des tickets de support :</b></p><p><b>Lecteur</b> permet de tout voir sans modifier. <b>Contributeur de demande de support</b> ajoute la création de demandes de support. Les rôles s'additionnent.</p><p>Contributeur et Propriétaire permettent de modifier. Lecteur seul ne permet pas d'ouvrir une demande de support.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Rôles et administrateurs"
  ],
  "title": "Lecteur général | Attributions",
  "menu": [
   "*Attributions",
   "Description"
  ],
  "rows": [
   [
    "*Rôle",
    "Lecteur général"
   ],
   [
    "Membre",
    "auditeur@cabinet.fr"
   ]
  ],
  "btn": "+ Ajouter des attributions"
 },
 "keep": "Tout lire dans Entra (y compris journaux), rien modifier = Lecteur général. Gérer la hiérarchie sans toucher aux ressources = Contributeur de groupe d'administration. Lire métriques et journaux = Lecteur de surveillance ; modifier la supervision = Contributeur de surveillance. Lecteur voit aussi les attributions de rôles (roleAssignments/read). Combiner des rôles restreints plutôt qu'un rôle large : les droits s'additionnent."
},
{
 "id": "D1-327",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Les rôles intégrés ne correspondent pas à certains besoins. Que devez-vous faire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Tout créer dans Sub-Dev sauf des passerelles VPN :",
   "o": [
    "Rôle Lecteur sur Sub-Dev",
    "Contributeur et une stratégie qui refuse les passerelles",
    "Rôle Contributeur de réseau sur Sub-Dev",
    "Rôle Propriétaire sur Sub-Dev et verrou ReadOnly"
   ],
   "a": 1
  },
  {
   "l": "Créer des groupes de ressources et gérer seulement leurs ressources :",
   "o": [
    "Lui attribuer Lecteur sur Sub1",
    "Lui attribuer un rôle personnalisé avec Microsoft.Resources/subscriptions/resourceGroups/write sur Sub1 ; il devient Propriétaire des groupes qu'il crée",
    "Lui attribuer un rôle personnalisé sur Sub1 qui permet de créer des groupes de ressources, puis lui attribuer Contributeur sur chaque nouveau groupe",
    "Lui attribuer Contributeur sur Sub1"
   ],
   "a": 2
  },
  {
   "l": "Lire et redémarrer les VM des groupes actuels et futurs de Sub1, rien d'autre :",
   "o": [
    "Contributeur de machines virtuelles sur Sub1",
    "Un rôle personnalisé (read, restart) sur Sub1",
    "Un rôle personnalisé attribué sur chaque groupe de ressources",
    "Contributeur sur l'abonnement Sub1"
   ],
   "a": 1
  },
  {
   "l": "Copier Contributeur de machines virtuelles sans le droit de supprimer — méthode la plus rapide :",
   "o": [
    "Cloner le rôle intégré, puis retirer l'autorisation",
    "Modifier directement la définition du rôle intégré",
    "Créer un rôle vide et ajouter les autorisations une par une",
    "Attribuer le rôle intégré avec une condition de refus"
   ],
   "a": 0
  },
  {
   "l": "Propriétaire attribué par erreur à 400 personnes sur la production :",
   "o": [
    "Désactiver chaque compte du groupe",
    "Appliquer un verrou ReadOnly sur l'abonnement",
    "Supprimer l'attribution de rôle (IAM)",
    "Supprimer le groupe de Microsoft Entra ID"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Tout créer dans Sub-Dev sauf des passerelles VPN :</b></p><p><b>Contributeur</b> permet de créer des groupes de ressources et des ressources. La stratégie intégrée <b>Types de ressources non autorisés</b> (effet Deny) avec <code>Microsoft.Network/virtualNetworkGateways</code> bloque les passerelles pour tout le monde dans l'abonnement.</p><p>Lecteur ne permet pas de créer. Un verrou ReadOnly bloquerait toute création. Contributeur de réseau ne permet que les ressources réseau, et justement les passerelles.</p><p><b>2. Créer des groupes de ressources et gérer seulement leurs ressources :</b></p><p>Un rôle sur Sub1 qui permet seulement de <b>créer des groupes de ressources</b> ne donne aucun droit sur les ressources existantes. Il faut ensuite lui attribuer <b>Contributeur sur chaque nouveau groupe</b>.</p><ul><li>Contributeur sur Sub1 donnerait accès à tous les groupes existants.</li><li>Le créateur d'un groupe de ressources ne devient <b>pas</b> automatiquement Propriétaire : Azure n'attribue aucun rôle de façon implicite.</li><li>Lecteur ne permet pas de créer.</li></ul><p><b>3. Lire et redémarrer les VM des groupes actuels et futurs de Sub1, rien d'autre :</b></p><p>Un rôle personnalisé limité à la lecture et au redémarrage des VM, attribué sur <b>Sub1</b>, couvre tous les groupes de ressources, y compris les futurs.</p><p>Contributeur de machines virtuelles permet aussi de créer, modifier et supprimer des VM. L'attribuer par groupe oublierait les nouveaux groupes. Contributeur donne tous les droits.</p><p><b>4. Copier Contributeur de machines virtuelles sans le droit de supprimer — méthode la plus rapide :</b></p><p>Dans <b>Contrôle d'accès (IAM) > Rôles</b>, on peut <b>cloner</b> un rôle existant : le nouveau rôle reprend ses autorisations, et on ajoute <code>Microsoft.Compute/virtualMachines/delete</code> dans les autorisations exclues (NotActions).</p><p>Les rôles <b>intégrés</b> ne sont pas modifiables. Partir d'un rôle vide marche mais prend beaucoup plus de temps. Les conditions d'attribution ne s'appliquent qu'à certaines actions de données de stockage et ne bloquent pas la suppression d'une VM.</p><p><b>5. Propriétaire attribué par erreur à 400 personnes sur la production :</b></p><p>Supprimer l'<b>attribution</b> retire l'accès à tout le groupe en une opération, sans toucher au groupe lui-même, qui peut servir ailleurs.</p><p>Supprimer le groupe ou les comptes causerait d'autres dégâts. Un verrou ReadOnly bloquerait aussi les administrateurs légitimes, et ne retirerait pas le droit d'attribuer des rôles.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Affecter une stratégie | Paramètres",
  "menu": [
   "Informations de base",
   "*Paramètres"
  ],
  "rows": [
   [
    "Définition",
    "Types de ressources non autorisés"
   ],
   [
    "*Types de ressources",
    "Microsoft.Network/virtualNetworkGateways"
   ],
   [
    "Étendue",
    "Sub-Dev"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "RBAC dit qui peut agir ; Azure Policy interdit un type de ressource à tout le monde. Créer une ressource ne donne aucun rôle implicite : il faut attribuer les droits ensuite. Privilège minimum = rôle personnalisé minimal, attribué à l'étendue qui couvre aussi le futur. Rôle proche d'un rôle intégré = Cloner, puis ajuster. Les rôles intégrés ne sont jamais modifiables. Retirer un accès donné à un groupe = supprimer l'attribution, pas le groupe."
},
{
 "id": "D1-328",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous organisez les abonnements en groupes d'administration. Que devez-vous faire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "La stratégie doit couvrir aussi les abonnements ajoutés plus tard à MG-Prod :",
   "o": [
    "À chaque groupe de ressources de MG-Prod",
    "Au locataire Microsoft Entra",
    "À chaque abonnement de MG-Prod",
    "Au groupe d'administration MG-Prod"
   ],
   "a": 3
  },
  {
   "l": "Mêmes stratégies pour Dev et Test, sans toucher la production :",
   "o": [
    "Un groupe de ressources commun aux deux",
    "Une étiquette Non-Prod sur chaque abonnement",
    "Un locataire Microsoft Entra séparé",
    "Un groupe d'administration Non-Prod"
   ],
   "a": 3
  },
  {
   "l": "Enregistrer une nouvelle définition attribuable à tous les abonnements de MG-Prod :",
   "o": [
    "Dans le locataire Microsoft Entra",
    "Dans le groupe d'administration MG-Prod",
    "Dans l'abonnement Sub1",
    "Dans un groupe de ressources de Sub1"
   ],
   "a": 1
  },
  {
   "l": "Stratégie pour tous les abonnements, futurs compris, effort minimal :",
   "o": [
    "Un script planifié qui vérifie les abonnements chaque nuit",
    "Attribuer la définition au groupe d'administration racine",
    "Appliquer un verrou ReadOnly sur chaque abonnement",
    "Créer la définition dans chaque abonnement, 30 fois"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. La stratégie doit couvrir aussi les abonnements ajoutés plus tard à MG-Prod :</b></p><p>Une stratégie attribuée au <b>groupe d'administration MG-Prod</b> s'applique à tous ses abonnements, présents et <b>futurs</b>, grâce à l'héritage.</p><p>L'attribuer abonnement par abonnement oublierait les nouveaux abonnements. Les groupes de ressources sont encore plus bas. On n'attribue pas de stratégie Azure Policy au locataire Microsoft Entra : la plus haute étendue est le groupe d'administration racine.</p><p><b>2. Mêmes stratégies pour Dev et Test, sans toucher la production :</b></p><p>Un <b>groupe d'administration</b> regroupe des abonnements pour leur appliquer des stratégies et des rôles hérités. Non-Prod contiendra Dev et Test, et les abonnements de production resteront ailleurs.</p><p>Un groupe de ressources est dans un seul abonnement. Un locataire séparé est beaucoup trop lourd. Les stratégies ne s'appliquent pas « par étiquette d'abonnement ».</p><p><b>3. Enregistrer une nouvelle définition attribuable à tous les abonnements de MG-Prod :</b></p><p>L'<b>emplacement de la définition</b> détermine où elle peut être attribuée : à cette étendue et en dessous. Enregistrée dans <b>MG-Prod</b>, elle peut être attribuée à MG-Prod et à tous ses abonnements.</p><p>Enregistrée dans Sub1, elle ne serait utilisable que dans Sub1. On ne peut pas enregistrer une définition dans un groupe de ressources ni dans le locataire Entra.</p><p><b>4. Stratégie pour tous les abonnements, futurs compris, effort minimal :</b></p><p>Une définition enregistrée dans un <b>groupe d'administration</b> parent, et attribuée à ce groupe, s'applique à tous les abonnements présents et futurs de la hiérarchie.</p><p>30 attributions manuelles oublieraient les nouveaux abonnements. Un script refait ce qu'Azure Policy fait déjà. Un verrou ne remplace pas une stratégie.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Affecter une stratégie",
  "menu": [
   "*Informations de base",
   "Paramètres"
  ],
  "rows": [
   [
    "*Étendue",
    "MG-Prod"
   ],
   [
    "Définition de stratégie",
    "Les comptes de stockage doivent désactiver l'accès réseau public"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Couvrir les abonnements futurs = attribuer au groupe d'administration parent. Mêmes stratégies pour plusieurs abonnements = groupe d'administration. Une définition est attribuable à son emplacement et en dessous : la placer assez haut. Couvrir tous les abonnements, futurs compris = définition et affectation sur un groupe d'administration parent."
},
{
 "id": "D1-329",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous administrez les abonnements et la hiérarchie de l'organisation. Que devez-vous faire ou répondre dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Niveaux de groupes d'administration possibles sous la racine :",
   "o": [
    "6 niveaux",
    "3 niveaux",
    "Aucune limite",
    "10 niveaux"
   ],
   "a": 0
  },
  {
   "l": "Nouveaux abonnements placés automatiquement sous MG-Sandbox :",
   "o": [
    "Une stratégie Azure Policy sur le groupe racine",
    "Une étiquette sur le groupe MG-Sandbox",
    "Le groupe d'administration par défaut",
    "Un verrou sur le groupe d'administration racine"
   ],
   "a": 2
  },
  {
   "l": "Déplacer Sub-Finance sous MG-Finance — autorisations minimales :",
   "o": [
    "Administrateur général dans Microsoft Entra ID uniquement",
    "Contributeur sur Sub-Finance uniquement",
    "Propriétaire de Sub-Finance et Contributeur sur MG-Finance",
    "Lecteur sur Sub-Finance et sur MG-Finance"
   ],
   "a": 2
  },
  {
   "l": "Limite de 20 vCPU DSv5 atteinte en France Central :",
   "o": [
    "Demander une augmentation de quota (Utilisation + quotas)",
    "Acheter une réservation pour la famille de VM",
    "Créer un nouveau groupe de ressources pour les VM",
    "Supprimer les étiquettes des VM existantes"
   ],
   "a": 0
  },
  {
   "l": "Erreur MissingSubscriptionRegistration pour Container Apps :",
   "o": [
    "Retirer les verrous de l'abonnement Sub2",
    "Demander une augmentation de quota dans Sub2",
    "Attribuer le rôle Lecteur sur Sub2",
    "Inscrire le fournisseur Microsoft.App"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Niveaux de groupes d'administration possibles sous la racine :</b></p><p>Une hiérarchie de groupes d'administration peut avoir <b>6 niveaux</b> de profondeur, sans compter le groupe racine ni le niveau des abonnements.</p><p>Autres limites à connaître : 10 000 groupes d'administration par annuaire, et chaque groupe d'administration ou abonnement n'a qu'<b>un seul parent</b>.</p><p><b>2. Nouveaux abonnements placés automatiquement sous MG-Sandbox :</b></p><p>Les <b>paramètres de la hiérarchie</b> permettent de choisir le <b>groupe d'administration par défaut</b> où sont placés les nouveaux abonnements. On peut aussi y exiger une autorisation pour créer des groupes d'administration.</p><p><b>3. Déplacer Sub-Finance sous MG-Finance — autorisations minimales :</b></p><p>Déplacer un abonnement demande des droits des deux côtés : sur l'<b>abonnement</b> (Propriétaire) et sur le <b>groupe d'administration cible</b> (Contributeur de groupe d'administration ou Propriétaire), ainsi que sur le parent actuel s'il ne s'agit pas de la racine.</p><p>Lecteur et Contributeur ne suffisent pas. Administrateur général est un rôle Entra : il doit d'abord élever son accès pour agir sur les groupes d'administration.</p><p><b>4. Limite de 20 vCPU DSv5 atteinte en France Central :</b></p><p>Les quotas de vCPU sont fixés <b>par abonnement, par région et par famille</b> de VM. On demande une augmentation depuis <b>Abonnement > Utilisation + quotas</b> (ou par une demande de support). Beaucoup de demandes sont approuvées automatiquement.</p><p>Changer de groupe de ressources ne change pas le quota de l'abonnement. Une réservation est une remise, pas un quota. Les étiquettes n'ont aucun effet.</p><p><b>5. Erreur MissingSubscriptionRegistration pour Container Apps :</b></p><p>Chaque service Azure dépend d'un <b>fournisseur de ressources</b> (Microsoft.Compute, Microsoft.Storage, Microsoft.App…). S'il n'est pas inscrit dans l'abonnement, l'erreur MissingSubscriptionRegistration apparaît. On l'inscrit dans <b>Abonnement > Fournisseurs de ressources</b> ou avec <code>az provider register --namespace Microsoft.App</code>.</p><p>Un quota, un verrou ou un rôle Lecteur n'ont pas de lien avec cette erreur.</p>",
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
    "Groupe d'administration racine",
    "Niveau 0"
   ],
   [
    "MG-Corp › MG-Prod › …",
    "*Jusqu'à 6 niveaux"
   ],
   [
    "Abonnements",
    "Sous le dernier niveau"
   ]
  ]
 },
 "keep": "Groupes d'administration : 6 niveaux sous la racine, un seul parent, 10 000 groupes maximum. Destination des nouveaux abonnements = groupe d'administration par défaut. Déplacer un abonnement : Propriétaire de l'abonnement et droits d'écriture sur le groupe d'administration cible (et le parent actuel). Quota de vCPU = par abonnement, région et famille ; on demande une augmentation dans Utilisation + quotas. MissingSubscriptionRegistration = inscrire le fournisseur de ressources dans l'abonnement."
},
{
 "id": "D1-330",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous répondez à des demandes d'audit sur les accès et les coûts. Que devez-vous utiliser pour chaque demande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Toutes les attributions de User sur RG2, héritées comprises :",
   "o": [
    "RG2 > Journal d'activité",
    "RG2 > Contrôle d'accès (IAM) > Vérifier l'accès",
    "Azure Advisor > Sécurité",
    "Microsoft Entra ID > Rôles et administrateurs"
   ],
   "a": 1
  },
  {
   "l": "Lister en une requête les groupes de ressources vides de tous les abonnements :",
   "o": [
    "Gestion des coûts, par étiquette",
    "Azure Policy en mode Deny",
    "Microsoft Entra ID, journal d'audit",
    "Azure Resource Graph Explorer"
   ],
   "a": 3
  },
  {
   "l": "Coût total du projet Orion, étiqueté dans trois abonnements :",
   "o": [
    "Créer un groupe de ressources commun aux trois",
    "Additionner à la main les budgets des trois abonnements",
    "Analyse des coûts au niveau du groupe, filtre Projet=Orion",
    "Consulter Azure Advisor, onglet Coût"
   ],
   "a": 2
  },
  {
   "l": "Déléguer l'attribution de Lecteur des données blob aux seules identités managées :",
   "o": [
    "Contributeur de compte de stockage sur storage1",
    "Administrateur de l'accès utilisateur sur l'abonnement",
    "Administrateur RBAC avec une condition sur les rôles",
    "Propriétaire sur storage1, sans condition"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Toutes les attributions de User sur RG2, héritées comprises :</b></p><p><b>Vérifier l'accès</b> (Check access) dans l'onglet IAM affiche les attributions effectives d'un utilisateur, d'un groupe ou d'une identité sur cette étendue, y compris celles héritées et celles reçues par les groupes.</p><p>« Rôles et administrateurs » liste les rôles <b>Microsoft Entra</b>, pas les rôles Azure. Le journal d'activité montre les opérations. Advisor donne des recommandations.</p><p><b>2. Lister en une requête les groupes de ressources vides de tous les abonnements :</b></p><p><b>Resource Graph Explorer</b> exécute des requêtes KQL sur l'inventaire des ressources et des groupes de ressources de tous vos abonnements. Une jointure entre les tables <code>resourcecontainers</code> et <code>resources</code> trouve les groupes vides.</p><p>Gestion des coûts ne voit que ce qui coûte. Entra gère les identités. Azure Policy n'est pas un outil de requête.</p><p><b>3. Coût total du projet Orion, étiqueté dans trois abonnements :</b></p><p>L'<b>analyse des coûts</b> peut s'ouvrir à une étendue qui couvre plusieurs abonnements (groupe d'administration, compte ou profil de facturation) et se filtrer sur une <b>étiquette</b>.</p><p>Les budgets sont des seuils, pas des dépenses. Un groupe de ressources ne peut pas couvrir plusieurs abonnements. Advisor ne donne pas les dépenses.</p><p><b>4. Déléguer l'attribution de Lecteur des données blob aux seules identités managées :</b></p><p>Le rôle <b>Administrateur du contrôle d'accès en fonction du rôle</b> (Role Based Access Control Administrator) permet d'attribuer des rôles, et accepte des <b>conditions</b> de délégation : quels rôles peuvent être attribués, et à quels types de principaux.</p><p>Propriétaire et Administrateur de l'accès utilisateur permettraient d'attribuer n'importe quel rôle. Contributeur de compte de stockage ne permet pas d'attribuer de rôle.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG2"
  ],
  "title": "RG2 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Vérifier l'accès",
    "User10"
   ],
   [
    "Résultat",
    "Attributions directes, héritées et par groupe"
   ]
  ]
 },
 "keep": "Droits effectifs de quelqu'un sur une étendue = IAM > Vérifier l'accès. Requête d'inventaire sur tous les abonnements = Resource Graph (tables resources, resourcecontainers). Coût multi-abonnements = analyse des coûts à une étendue large + filtre par étiquette. Déléguer l'attribution de rôles avec des limites = Administrateur du contrôle d'accès en fonction du rôle + conditions."
},
{
 "id": "D1-331",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous déléguez l'administration et préparez le locataire. Que devez-vous faire ou répondre pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Admin2 réinitialise les mots de passe des utilisateurs de Lyon uniquement :",
   "o": [
    "Une unité administrative Lyon, Admin2 Administrateur du support technique",
    "Admin2 Administrateur du support technique pour tout le locataire",
    "Un groupe de sécurité Lyon dont Admin2 est propriétaire",
    "Un groupe d'administration Lyon, avec Admin2 Contributeur sur ce groupe"
   ],
   "a": 0
  },
  {
   "l": "Rôle personnalisé attribuable dans Sub1 et Sub2 seulement — propriété :",
   "o": [
    "Actions",
    "DataActions",
    "AssignableScopes",
    "NotActions"
   ],
   "a": 2
  },
  {
   "l": "Rôle avec DataActions et le groupe MG-Data dans AssignableScopes :",
   "o": [
    "Réussite, mais le rôle ne s'attribue qu'à des groupes",
    "Échec : les DataActions sont réservées aux rôles intégrés",
    "La création réussit sans restriction",
    "Échec : DataActions interdites sur un groupe d'administration"
   ],
   "a": 3
  },
  {
   "l": "Domaine personnalisé resté Non vérifié — enregistrement DNS :",
   "o": [
    "Un enregistrement PTR pour contoso.com",
    "Un enregistrement A vers une adresse IP Azure",
    "Un TXT ou MX avec la valeur de Microsoft",
    "Un CNAME vers contoso.onmicrosoft.com"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Admin2 réinitialise les mots de passe des utilisateurs de Lyon uniquement :</b></p><p>Une <b>unité administrative</b> limite la portée d'un rôle Microsoft Entra à un ensemble d'utilisateurs, de groupes ou d'appareils. Le rôle <b>Administrateur du support technique</b> (Helpdesk Administrator) attribué sur l'unité Lyon permet de réinitialiser les mots de passe des seuls utilisateurs de Lyon.</p><ul><li>Le même rôle sur <b>tout le locataire</b> donne trop de droits.</li><li>Le <b>propriétaire d'un groupe</b> gère les membres du groupe, pas leurs mots de passe.</li><li>Un <b>groupe d'administration</b> organise des abonnements Azure ; il ne sert pas à gérer des utilisateurs Entra, et Contributeur est un rôle Azure, pas un rôle Entra.</li></ul><p><b>2. Rôle personnalisé attribuable dans Sub1 et Sub2 seulement — propriété :</b></p><p><b>AssignableScopes</b> indique où le rôle peut être attribué : ici <code>/subscriptions/&lt;id Sub1&gt;</code> et <code>/subscriptions/&lt;id Sub2&gt;</code>. On peut aussi y mettre un groupe d'administration ou un groupe de ressources.</p><ul><li><b>Actions</b> : opérations autorisées sur le plan de contrôle (gestion des ressources).</li><li><b>NotActions</b> : opérations retirées des Actions. Ce n'est pas un refus : un autre rôle peut toujours les accorder.</li><li><b>DataActions</b> : opérations sur les données, par exemple lire un blob.</li></ul><p><b>3. Rôle avec DataActions et le groupe MG-Data dans AssignableScopes :</b></p><p>Un rôle personnalisé peut avoir un groupe d'administration dans ses AssignableScopes, mais alors <b>sans DataActions</b>. Il faut ici utiliser des abonnements ou des groupes de ressources comme étendues attribuables.</p><p>Autre limite : un seul groupe d'administration par rôle personnalisé. Les DataActions sont tout à fait possibles dans les rôles personnalisés en dehors de ce cas.</p><p><b>4. Domaine personnalisé resté Non vérifié — enregistrement DNS :</b></p><p>Microsoft fournit une valeur unique du type <code>MS=ms12345678</code> à publier dans un enregistrement <b>TXT</b> (ou, à défaut, <b>MX</b>). Sa présence prouve que vous contrôlez le domaine.</p><p>Les enregistrements A, CNAME et PTR ne servent pas à cette vérification.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Unités administratives",
   "Lyon"
  ],
  "title": "Lyon | Rôles et administrateurs",
  "menu": [
   "Vue d'ensemble",
   "Utilisateurs",
   "Groupes",
   "*Rôles et administrateurs"
  ],
  "rows": [
   [
    "*Rôle",
    "Administrateur du support technique"
   ],
   [
    "Affectations",
    "Admin2"
   ],
   [
    "Étendue",
    "Unité administrative : Lyon"
   ]
  ],
  "btn": "+ Ajouter des affectations"
 },
 "keep": "Limiter un rôle Entra à une partie des utilisateurs (agence, service) = unité administrative. AssignableScopes = où le rôle peut être attribué. Actions/NotActions = plan de contrôle. DataActions = données. Rôle personnalisé avec DataActions : pas de groupe d'administration en étendue attribuable. Vérifier un domaine = enregistrement TXT (ou MX) chez le DNS public."
}
);
