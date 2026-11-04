/* Domaine 1 : Identités et gouvernance */
AZ.questions.push(
{
 "id": "D1-002",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement Azure présenté dans le document Hiérarchie (cliquez sur l'onglet <b>Hiérarchie</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si l'affirmation est vraie. Sinon, sélectionnez Non.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Hiérarchie",
   "h": "<p>Votre environnement Azure est organisé comme suit :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Objet</th><th>Type</th><th>Parent</th></tr><tr><td>MG1</td><td>Groupe d'administration</td><td>Groupe d'administration racine</td></tr><tr><td>Sub1</td><td>Abonnement</td><td>MG1</td></tr><tr><td>Sub2</td><td>Abonnement</td><td>MG1</td></tr><tr><td>RG1</td><td>Groupe de ressources</td><td>Sub1</td></tr><tr><td>RG2</td><td>Groupe de ressources</td><td>Sub1</td></tr></table></div><p>Attributions de rôles :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur</td><td>MG1</td></tr><tr><td>User1</td><td>Contributeur</td><td>RG1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 peut créer un compte de stockage dans RG1.",
   "a": 0
  },
  {
   "l": "User1 peut créer un groupe de ressources dans Sub1.",
   "a": 1
  },
  {
   "l": "User1 peut afficher les ressources de Sub2.",
   "a": 0
  }
 ],
 "expl": "<p>Deux règles suffisent : les rôles Azure sont <b>hérités vers le bas</b> (groupe d'administration → abonnement → groupe de ressources → ressource) et ils <b>s'additionnent</b>.</p><ul><li><b>Compte de stockage dans RG1 : Oui.</b> Sur RG1, User1 cumule Lecteur (hérité de MG1) et Contributeur (attribué sur RG1). Contributeur permet de créer des ressources.</li><li><b>Groupe de ressources dans Sub1 : Non.</b> Créer un groupe de ressources est une opération d'écriture <i>sur l'abonnement</i>. Sur Sub1, User1 n'a que Lecteur (hérité de MG1).</li><li><b>Afficher les ressources de Sub2 : Oui.</b> Sub2 est sous MG1 : le rôle Lecteur hérité suffit pour voir ses ressources.</li></ul>",
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
    "#Vérifier l'accès › User1",
    ""
   ],
   [
    "*Lecteur",
    "Hérité (MG1)"
   ],
   [
    "*Contributeur",
    "Cette ressource (RG1)"
   ]
  ]
 },
 "keep": "Un rôle attribué en haut descend partout dessous ; les rôles reçus à plusieurs niveaux s'additionnent. Créer un groupe de ressources demande des droits sur l'abonnement."
},
{
 "id": "D1-003",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous gérez un abonnement Azure. Vous devez répondre aux exigences suivantes.</p><p>Quelle fonctionnalité devez-vous utiliser pour chaque exigence ? Pour répondre, faites glisser la fonctionnalité appropriée vers chaque exigence. Chaque fonctionnalité peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Fonctionnalités",
 "tgtHead": [
  "Exigence",
  "Fonctionnalité"
 ],
 "srcs": [
  "Azure Policy",
  "Verrou de ressource",
  "Étiquette",
  "Contrôle d'accès en fonction du rôle (RBAC)",
  "Budget Cost Management"
 ],
 "tgts": [
  {
   "l": "Empêcher la suppression accidentelle d'un compte de stockage",
   "a": 1
  },
  {
   "l": "Interdire tout déploiement en dehors de France Central",
   "a": 0
  },
  {
   "l": "Répartir la facture par service de l'entreprise",
   "a": 2
  },
  {
   "l": "Autoriser un utilisateur à redémarrer des machines virtuelles",
   "a": 3
  },
  {
   "l": "Être averti avant un dépassement des dépenses mensuelles",
   "a": 4
  }
 ],
 "expl": "<p>Chaque outil de gouvernance répond à une question différente :</p><ul><li><b>Verrou de ressource</b> : « peut-on supprimer ou modifier cette ressource ? » Un verrou Suppression impossible bloque la suppression même pour un Propriétaire.</li><li><b>Azure Policy</b> : « quelles configurations sont autorisées ? » La stratégie Emplacements autorisés avec l'effet Deny refuse tout déploiement hors de France Central, pour tout le monde.</li><li><b>Étiquette</b> : « à qui appartient cette ressource ? » Une étiquette Service permet de filtrer et regrouper l'analyse des coûts.</li><li><b>RBAC</b> : « qui peut faire quoi ? » Un rôle comme Contributeur de machines virtuelles donne le droit de redémarrer des VM.</li><li><b>Budget</b> : « combien dépense-t-on ? » Il envoie des alertes sur le coût réel ou prévu, sans rien bloquer.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Verrous",
  "menu": [
   "Vue d'ensemble",
   "Contrôle d'accès (IAM)",
   "#Paramètres",
   "Configuration",
   "*Verrous"
  ],
  "rows": [
   [
    "#Ajouter un verrou",
    ""
   ],
   [
    "Nom du verrou",
    "NePasSupprimer"
   ],
   [
    "*Type de verrou",
    "Supprimer"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Verrou = protéger une ressource ; Policy = imposer des règles ; étiquette = classer et ventiler les coûts ; RBAC = donner des droits ; budget = être prévenu des dépenses."
},
{
 "id": "D1-004",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous disposez d'un abonnement Azure nommé Sub1 qui contient un groupe de ressources nommé RG1.</p><p>Vous créez un rôle personnalisé nommé Role1, comme indiqué dans le document Role1 (cliquez sur l'onglet <b>Role1</b>). Vous attribuez Role1 à User1 sur RG1.</p><p>Quelles opérations User1 peut-il effectuer ?</p>",
 "docs": [
  {
   "t": "Role1",
   "h": "<p>Définition du rôle personnalisé Role1 :</p><pre class=\"code\">{\n  \"Name\": \"Role1\",\n  \"IsCustom\": true,\n  \"Actions\": [\n    \"Microsoft.Compute/virtualMachines/read\",\n    \"Microsoft.Compute/virtualMachines/start/action\",\n    \"Microsoft.Compute/virtualMachines/restart/action\"\n  ],\n  \"NotActions\": [],\n  \"DataActions\": [],\n  \"AssignableScopes\": [ \"/subscriptions/Sub1\" ]\n}</pre>"
  }
 ],
 "opts": [
  "Démarrer et redémarrer les VM de RG1, sans les arrêter",
  "Démarrer, redémarrer et arrêter (libérer) les VM de RG1",
  "Créer et supprimer des machines virtuelles dans RG1",
  "Démarrer les VM de tous les groupes de ressources de Sub1"
 ],
 "ans": 0,
 "expl": "<p>Un rôle personnalisé ne permet <b>que</b> les actions listées dans <code>Actions</code> :</p><ul><li><code>virtualMachines/read</code> : voir les VM ;</li><li><code>start/action</code> : les démarrer ;</li><li><code>restart/action</code> : les redémarrer.</li></ul><p>Il manque <code>powerOff/action</code> (arrêter) et <code>deallocate/action</code> (arrêter et libérer) : User1 ne peut pas arrêter les VM. Il manque aussi <code>virtualMachines/write</code> : il ne peut pas en créer.</p><p>Enfin, le rôle est <b>attribué sur RG1</b> : il ne s'applique pas aux autres groupes de Sub1. <code>AssignableScopes</code> indique seulement <i>où le rôle peut être attribué</i>, pas où il s'applique.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Sub1 | Contrôle d'accès (IAM) › Rôles",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "#Role1 › Autorisations",
    ""
   ],
   [
    "*Microsoft.Compute/virtualMachines/start/action",
    "Démarrer la machine virtuelle"
   ],
   [
    "*Microsoft.Compute/virtualMachines/restart/action",
    "Redémarrer la machine virtuelle"
   ],
   [
    "Microsoft.Compute/virtualMachines/read",
    "Lire la machine virtuelle"
   ]
  ]
 },
 "keep": "Un rôle personnalisé n'autorise que ce qui est écrit dans Actions. Start ≠ powerOff ≠ deallocate : chaque opération a sa propre action."
},
{
 "id": "D1-005",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous disposez d'un locataire Microsoft Entra nommé contoso.com. Actuellement, tous les utilisateurs peuvent inviter des utilisateurs externes.</p><p>Vous devez vous assurer que seuls les utilisateurs ayant les rôles Inviteur d'invités, Administrateur d'utilisateurs ou Administrateur général peuvent inviter des utilisateurs invités.</p><p>Comment devez-vous configurer les paramètres ? Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "expl": "<p>Le réglage se trouve dans <b>Microsoft Entra ID → Identités externes → Paramètres de collaboration externe</b>, section <b>Restrictions d'invitation des invités</b>.</p><ul><li>Option 1 (valeur actuelle) : tout le monde peut inviter, même les invités.</li><li>Option 2 : tous les <b>membres</b> peuvent encore inviter. Ne répond pas au besoin.</li><li><b>Option 3 : seuls les rôles d'administrateur spécifiques</b> (Inviteur d'invités, Administrateur d'utilisateurs, Administrateur général…) peuvent inviter. C'est la bonne.</li><li>Option 4 : personne, pas même les administrateurs. Trop restrictif.</li></ul>",
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
    "#Restrictions d'invitation des invités",
    ""
   ],
   [
    "*Choix",
    "Seuls les utilisateurs affectés à des rôles d'administrateur spécifiques peuvent inviter des utilisateurs invités"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Qui peut inviter : Restrictions d'invitation des invités. Vers quels domaines : Restrictions de collaboration. Ce que voient les invités : Restrictions d'accès des utilisateurs invités.",
 "win": {
  "title": "Paramètres de collaboration externe",
  "sub": "Microsoft Entra ID | Identités externes",
  "rows": [
   {
    "k": "head",
    "t": "Restrictions d'invitation des invités"
   },
   {
    "k": "radio",
    "l": "",
    "opts": [
     "Toute personne de l'organisation peut inviter des utilisateurs invités, y compris les invités et les non-administrateurs (plus inclusif)",
     "Les utilisateurs membres et les utilisateurs affectés à des rôles d'administrateur spécifiques peuvent inviter des utilisateurs invités, y compris les invités avec des autorisations de membre",
     "Seuls les utilisateurs affectés à des rôles d'administrateur spécifiques peuvent inviter des utilisateurs invités",
     "Personne dans l'organisation ne peut inviter des utilisateurs invités, y compris les administrateurs (plus restrictif)"
    ],
    "d": 0,
    "a": 2,
    "name": "Restrictions d'invitation"
   }
  ]
 }
},
{
 "id": "D1-007",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous devez empêcher la suppression accidentelle de ressources à l'aide de verrous de ressources.</p><p>À quelles deux étendues pouvez-vous appliquer un verrou ? Chaque réponse correcte présente une solution complète.</p><p>Pour chacune des étendues suivantes, sélectionnez Oui si vous pouvez y appliquer un verrou. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un abonnement",
   "a": 0
  },
  {
   "l": "Un groupe d'administration",
   "a": 1
  },
  {
   "l": "Un groupe de ressources",
   "a": 0
  },
  {
   "l": "Le locataire Microsoft Entra",
   "a": 1
  }
 ],
 "expl": "<p>Un verrou de ressource peut être appliqué à un <b>abonnement</b>, à un <b>groupe de ressources</b> ou à une <b>ressource</b>. Il est hérité par tout ce qui est dessous.</p><ul><li><b>Groupe d'administration : non.</b> Il n'y a pas de verrou à ce niveau ; pour protéger une hiérarchie, on utilise Azure Policy ou des affectations de refus (piles de déploiement).</li><li><b>Locataire Microsoft Entra : non.</b> Les verrous concernent les ressources Azure, pas l'annuaire.</li></ul>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Sub1 | Verrous",
  "menu": [
   "Vue d'ensemble",
   "Contrôle d'accès (IAM)",
   "#Paramètres",
   "Groupes de ressources",
   "*Verrous"
  ],
  "rows": [
   [
    "#Ajouter un verrou",
    ""
   ],
   [
    "*Type de verrou",
    "Supprimer"
   ],
   [
    "Notes",
    "Protège tout l'abonnement"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Verrous : abonnement, groupe de ressources ou ressource. Jamais groupe d'administration ni locataire."
},
{
 "id": "D1-008",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous attribuez au groupe d'administration MG1 une stratégie Azure Policy nommée Policy1, définie comme suit :</p><ul><li>Définition : Emplacements autorisés</li><li>Paramètre : France Central</li><li>Effet : Deny</li><li>Exclusion : le groupe de ressources RG-Test</li></ul><p>MG1 contient l'abonnement Sub1. Sub1 contient RG-Test et RG-Prod. Avant l'attribution, RG-Prod contenait déjà une machine virtuelle nommée VM9, en Europe Ouest.</p><p>Que se passe-t-il dans chacun des cas suivants ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Création d'une VM en Europe Ouest dans RG-Test :",
   "o": [
    "Réussit",
    "Échoue"
   ],
   "a": 0
  },
  {
   "l": "Création d'une VM en Europe Ouest dans RG-Prod :",
   "o": [
    "Réussit",
    "Échoue"
   ],
   "a": 1
  },
  {
   "l": "VM9 :",
   "o": [
    "Est supprimée",
    "Est arrêtée",
    "Continue de fonctionner et est signalée non conforme"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>VM dans RG-Test : réussit.</b> RG-Test est dans les <b>exclusions</b> de l'affectation : il n'est pas évalué.</li><li><b>VM dans RG-Prod : échoue.</b> La stratégie, attribuée à MG1, descend vers Sub1 et RG-Prod. L'effet <b>Deny</b> refuse la création hors de France Central.</li><li><b>VM9 : continue de fonctionner et est signalée non conforme.</b> Azure Policy n'agit jamais sur l'existant avec Deny : il ne supprime ni n'arrête rien. VM9 apparaît simplement dans le tableau de conformité.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Affecter une stratégie",
  "menu": [
   "Vue d'ensemble",
   "Conformité",
   "*Affectations",
   "Définitions"
  ],
  "rows": [
   [
    "Étendue",
    "MG1"
   ],
   [
    "*Exclusions",
    "Sub1/RG-Test"
   ],
   [
    "Définition de stratégie",
    "Emplacements autorisés"
   ],
   [
    "Emplacements autorisés",
    "France Central"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Deny bloque les nouvelles créations et modifications, jamais l'existant. Une exclusion retire une étendue de l'évaluation."
}
);
