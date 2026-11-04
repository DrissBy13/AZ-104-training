/* Domaine 1 : identités et gouvernance (lot D : D1-111 à D1-160) */
AZ.questions.push(
{
 "id": "D1-113",
 "dom": 1,
 "type": "order",
 "stem": "<p>Votre locataire Microsoft Entra utilise le domaine contoso.onmicrosoft.com. Vous devez faire en sorte que les utilisateurs se connectent avec une adresse en <b>@contoso.com</b>.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>On <b>ajoute</b> le domaine dans Entra, qui fournit un enregistrement <b>TXT</b> (ou MX) à créer chez l'hébergeur DNS public du domaine. Une fois l'enregistrement en place, on <b>vérifie</b> le domaine, ce qui prouve qu'on le possède. On peut enfin changer l'<b>UPN</b> des utilisateurs.</p><p>Une <b>zone DNS privée</b> ne sert qu'à la résolution de noms dans des réseaux virtuels : Microsoft ne peut pas la consulter pour vérifier le domaine.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Noms de domaine personnalisés"
  ],
  "title": "contoso.com",
  "menu": [
   "*Noms de domaine personnalisés"
  ],
  "rows": [
   [
    "*Type d'enregistrement",
    "TXT"
   ],
   [
    "Valeur",
    "MS=ms12345678"
   ],
   [
    "État",
    "Non vérifié"
   ]
  ],
  "btn": "Vérifier"
 },
 "keep": "Domaine personnalisé : ajouter, publier le TXT chez le DNS public, vérifier, puis changer les UPN.",
 "acts": [
  "Ajouter contoso.com dans Noms de domaine personnalisés",
  "Créer chez le registraire l'enregistrement DNS TXT fourni par Microsoft",
  "Vérifier le domaine dans le portail",
  "Modifier le nom d'utilisateur principal (UPN) des utilisateurs avec le suffixe @contoso.com",
  "Créer une zone DNS privée contoso.com dans Azure"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D1-122",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'édition de Microsoft Entra ID minimale pour chaque fonctionnalité.</p><p>Pour répondre, faites glisser l'édition appropriée vers chaque fonctionnalité. Chaque édition peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Éditions",
 "tgtHead": [
  "Fonctionnalité",
  "Édition minimale"
 ],
 "srcs": [
  "Microsoft Entra ID Free",
  "Microsoft Entra ID P1",
  "Microsoft Entra ID P2"
 ],
 "tgts": [
  {
   "l": "Créer des utilisateurs et des groupes à appartenance attribuée",
   "a": 0
  },
  {
   "l": "Groupes à appartenance dynamique",
   "a": 1
  },
  {
   "l": "Privileged Identity Management (rôles éligibles)",
   "a": 2
  },
  {
   "l": "Accès conditionnel",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Free</b> : gestion de base des utilisateurs et groupes, authentification unique de base.</li><li><b>P1</b> : groupes dynamiques, licences basées sur les groupes, accès conditionnel, réécriture du mot de passe.</li><li><b>P2</b> : tout P1, plus Privileged Identity Management, ID Protection (détection des risques) et les révisions d'accès.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Vue d'ensemble"
  ],
  "title": "Microsoft Entra ID | Licences",
  "menu": [
   "Vue d'ensemble",
   "*Licences"
  ],
  "rows": [
   [
    "Free",
    "Utilisateurs, groupes attribués"
   ],
   [
    "*P1",
    "Groupes dynamiques, accès conditionnel, licences par groupe"
   ],
   [
    "*P2",
    "PIM, ID Protection, révisions d'accès"
   ]
  ]
 },
 "keep": "P1 = dynamique + accès conditionnel. P2 = PIM + risques + révisions d'accès."
},
{
 "id": "D1-127",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Le compte de stockage storage1 a un verrou <b>Suppression impossible</b>.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un utilisateur avec le rôle Contributeur aux données blob du stockage peut supprimer un blob de storage1.",
   "a": 0
  },
  {
   "l": "Un Propriétaire peut modifier le niveau de redondance de storage1.",
   "a": 0
  },
  {
   "l": "Un Propriétaire peut supprimer storage1 sans retirer le verrou.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Supprimer un blob : Oui.</b> Le verrou protège la ressource sur le plan de contrôle. Les opérations sur les données (lire, écrire, supprimer un blob) ne sont pas concernées. Pour protéger les données, on utilise la suppression réversible ou l'immuabilité.</li><li><b>Modifier la redondance : Oui.</b> Suppression impossible autorise les modifications.</li><li><b>Supprimer storage1 : Non.</b> Même un Propriétaire doit d'abord retirer le verrou.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Verrous",
  "menu": [
   "Vue d'ensemble",
   "*Verrous"
  ],
  "rows": [
   [
    "*Type de verrou",
    "Supprimer"
   ],
   [
    "Modifier la redondance",
    "Autorisé"
   ],
   [
    "Supprimer un blob (plan de données)",
    "Autorisé"
   ]
  ]
 },
 "keep": "Verrou Supprimer : modifications permises, suppression de la ressource bloquée, données non protégées."
},
{
 "id": "D1-130",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous devez déplacer des ressources de l'abonnement Sub1 vers l'abonnement Sub2.</p><p>Pour chacune des conditions suivantes, sélectionnez Oui si elle doit être remplie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Sub1 et Sub2 doivent être dans le même groupe d'administration",
   "a": 1
  },
  {
   "l": "Les fournisseurs des ressources doivent être inscrits dans Sub2",
   "a": 0
  },
  {
   "l": "Les ressources doivent être arrêtées pendant le déplacement",
   "a": 1
  },
  {
   "l": "Sub1 et Sub2 doivent être dans le même locataire",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Même locataire : oui.</b> On ne déplace pas directement des ressources vers un abonnement d'un autre locataire (il faudrait d'abord transférer l'abonnement).</li><li><b>Fournisseurs inscrits : oui.</b> Sub2 doit pouvoir héberger ce type de ressource.</li><li><b>Même groupe d'administration : non.</b> La hiérarchie de gouvernance ne compte pas.</li><li><b>Ressources arrêtées : non.</b> Les ressources continuent de fonctionner pendant le déplacement.</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "Déplacer vers un autre abonnement",
  "menu": [
   "*Ressources",
   "Valider",
   "Vérifier"
  ],
  "rows": [
   [
    "*Abonnement cible",
    "Sub2 (même locataire)"
   ],
   [
    "Fournisseurs requis",
    "Inscrits dans Sub2"
   ]
  ],
  "btn": "Suivant"
 },
 "keep": "Déplacer entre abonnements : même locataire, fournisseurs inscrits dans la cible."
},
{
 "id": "D1-133",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez ajouter l'étiquette Projet=Alpha au groupe de ressources RG1, <b>sans supprimer</b> ses étiquettes existantes.</p><p>Comment devez-vous compléter la commande Azure CLI ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Commande",
   "o": [
    "update",
    "create",
    "add-value"
   ],
   "a": 0
  },
  {
   "l": "Opération",
   "o": [
    "Replace",
    "Merge",
    "Delete"
   ],
   "a": 1
  }
 ],
 "expl": "<p><code>az tag update --operation Merge</code> ajoute ou met à jour les étiquettes fournies sans toucher aux autres.</p><ul><li><b>Replace</b> remplacerait toutes les étiquettes par Projet=Alpha seule.</li><li><b>Delete</b> retirerait l'étiquette.</li><li><code>az tag create --resource-id</code> remplace aussi l'ensemble des étiquettes. <code>add-value</code> concerne les anciennes étiquettes prédéfinies de l'abonnement.</li></ul><p>L'équivalent PowerShell est <code>Update-AzTag -Operation Merge</code>.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "RG1 | Étiquettes",
  "menu": [
   "Vue d'ensemble",
   "*Étiquettes"
  ],
  "rows": [
   [
    "Environnement",
    "Prod (conservée)"
   ],
   [
    "*Projet",
    "Alpha (ajoutée)"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "Ajouter sans écraser = az tag update --operation Merge (Update-AzTag -Operation Merge).",
 "tpl": "az tag {0} --resource-id /subscriptions/&lt;id&gt;/resourceGroups/RG1 --operation {1} --tags Projet=Alpha"
},
{
 "id": "D1-135",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous gérez une hiérarchie de groupes d'administration.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Le groupe d'administration racine peut être supprimé.",
   "a": 1
  },
  {
   "l": "Le nom d'affichage d'un groupe d'administration peut être modifié.",
   "a": 0
  },
  {
   "l": "L'ID d'un groupe d'administration peut être modifié après sa création.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Supprimer la racine : Non.</b> Le groupe racine ne peut être ni supprimé ni déplacé.</li><li><b>Nom d'affichage : Oui.</b> Le nom affiché dans le portail est modifiable.</li><li><b>ID : Non.</b> L'ID est l'identifiant unique utilisé dans les chemins d'étendue : il est fixé à la création.</li></ul>",
 "portal": {
  "path": [
   "Groupes d'administration",
   "MG-Prod"
  ],
  "title": "MG-Prod | Détails",
  "menu": [
   "*Détails",
   "Abonnements"
  ],
  "rows": [
   [
    "ID",
    "mg-prod (fixe)"
   ],
   [
    "*Nom d'affichage",
    "Production (modifiable)"
   ]
  ],
  "btn": "Renommer"
 },
 "keep": "Groupe d'administration : nom d'affichage modifiable, ID fixe ; racine indélébile."
},
{
 "id": "D1-139",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Le coffre de clés KV1 utilise le modèle d'autorisation <b>contrôle d'accès en fonction du rôle Azure</b>. Vous devez attribuer le rôle intégré adapté à chaque besoin, en respectant le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "tgtHead": [
  "Besoin",
  "Rôle"
 ],
 "srcs": [
  "Administrateur Key Vault",
  "Agent des secrets Key Vault",
  "Utilisateur des secrets Key Vault",
  "Lecteur Key Vault"
 ],
 "tgts": [
  {
   "l": "Une application lit la valeur d'un secret",
   "a": 2
  },
  {
   "l": "Un développeur crée, modifie et supprime des secrets",
   "a": 1
  },
  {
   "l": "Un auditeur voit les métadonnées des secrets, sans leur valeur",
   "a": 3
  },
  {
   "l": "L'équipe sécurité gère toutes les données du coffre : clés, secrets et certificats",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Utilisateur des secrets</b> : lit le contenu des secrets.</li><li><b>Agent des secrets</b> (Secrets Officer) : toute action sur les secrets, sauf gérer les autorisations.</li><li><b>Lecteur Key Vault</b> : lit les métadonnées (noms, dates…), jamais les valeurs.</li><li><b>Administrateur Key Vault</b> : toutes les opérations sur les données du coffre (clés, secrets, certificats).</li></ul>",
 "portal": {
  "path": [
   "Coffres de clés",
   "KV1"
  ],
  "title": "KV1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)",
   "Secrets"
  ],
  "rows": [
   [
    "*Utilisateur des secrets Key Vault",
    "app-web"
   ],
   [
    "Agent des secrets Key Vault",
    "dev1"
   ],
   [
    "Lecteur Key Vault",
    "auditeur"
   ]
  ]
 },
 "keep": "Secrets : Utilisateur = lire, Agent = gérer, Lecteur = métadonnées, Administrateur = tout le plan de données."
},
{
 "id": "D1-145",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous attribuez la stratégie intégrée <b>Emplacements autorisés</b> au groupe d'administration MG-EU. Seules les régions France Central et West Europe doivent être permises. Le groupe de ressources RG-Sandbox ne doit pas être évalué. La stratégie doit bloquer les déploiements dès maintenant.</p><p>Comment devez-vous configurer l'affectation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Exclusions : RG-Sandbox.</b> Le groupe de ressources n'est pas évalué.</li><li><b>Application de la stratégie : Activé.</b> Avec <b>Désactivé</b> (enforcementMode DoNotEnforce), l'effet Deny n'est pas appliqué : la conformité est seulement calculée, ce qui sert à tester une stratégie.</li><li><b>Emplacements : France Central ; West Europe.</b></li><li><b>Identité managée : non.</b> Elle n'est utile que pour Modify et DeployIfNotExists. Emplacements autorisés utilise Deny.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Attribuer une stratégie",
  "menu": [
   "*Informations de base",
   "Paramètres",
   "Correction"
  ],
  "rows": [
   [
    "Étendue",
    "MG-EU"
   ],
   [
    "*Exclusions",
    "RG-Sandbox"
   ],
   [
    "*Application de la stratégie",
    "Activé"
   ],
   [
    "Emplacements autorisés",
    "France Central ; West Europe"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Application de la stratégie Désactivé = mode test (DoNotEnforce) : rien n'est bloqué.",
 "win": {
  "title": "Attribuer une stratégie",
  "sub": "Emplacements autorisés",
  "rows": [
   {
    "k": "head",
    "t": "Informations de base"
   },
   {
    "k": "text",
    "l": "Étendue",
    "t": "MG-EU"
   },
   {
    "k": "select",
    "l": "Exclusions",
    "o": [
     "Aucune",
     "RG-Sandbox",
     "MG-EU"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Application de la stratégie",
    "o": [
     "Activé",
     "Désactivé"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Paramètres"
   },
   {
    "k": "select",
    "l": "Emplacements autorisés",
    "o": [
     "France Central",
     "France Central ; West Europe",
     "Toutes les régions"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "Correction"
   },
   {
    "k": "check",
    "l": "Créer une identité managée",
    "a": false
   }
  ]
 }
},
{
 "id": "D1-146",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez vérifier quels utilisateurs ont un rôle Azure sur le groupe de ressources RG1, et en ajouter un nouveau.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Contrôle d'accès (IAM)",
 "expl": "<p><b>Contrôle d'accès (IAM)</b> affiche les attributions de rôles (y compris héritées), permet d'en ajouter, de consulter les définitions de rôles, les affectations de refus et l'outil Vérifier l'accès.</p><p><b>Stratégies</b> montre la conformité Azure Policy ; <b>Verrous</b> gère les verrous ; le journal d'activité trace les opérations.</p>",
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
    "Onglets",
    "Vérifier l'accès · Attributions de rôles · Rôles · Affectations de refus"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Voir et ajouter des rôles Azure = Contrôle d'accès (IAM) de l'étendue.",
 "win": {
  "title": "RG1 | Groupe de ressources",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité",
     "Contrôle d'accès (IAM)",
     "Étiquettes",
     "Visualiseur de ressources",
     "Événements"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Déploiements",
     "Sécurité",
     "Stratégies",
     "Propriétés",
     "Verrous"
    ]
   },
   {
    "g": "Gestion des coûts",
    "items": [
     "Analyse des coûts",
     "Alertes de coûts",
     "Budgets"
    ]
   }
  ]
 }
},
{
 "id": "D1-150",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous gérez les identités de votre locataire Microsoft Entra.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Un utilisateur supprimé peut être restauré pendant :",
   "o": [
    "7 jours",
    "30 jours",
    "90 jours"
   ],
   "a": 1
  },
  {
   "l": "Un groupe de sécurité supprimé peut être restauré pendant :",
   "o": [
    "0 jour (suppression définitive)",
    "30 jours",
    "90 jours"
   ],
   "a": 0
  },
  {
   "l": "Le journal d'activité Azure conserve les événements pendant :",
   "o": [
    "30 jours",
    "90 jours",
    "365 jours"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Utilisateurs : 30 jours</b> dans Utilisateurs supprimés.</li><li><b>Groupes de sécurité : suppression définitive immédiate.</b> Seuls les groupes Microsoft 365 restent 30 jours en suppression réversible.</li><li><b>Journal d'activité : 90 jours.</b> Pour garder plus longtemps, on l'envoie vers Log Analytics ou un compte de stockage avec un paramètre de diagnostic.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Utilisateurs"
  ],
  "title": "Utilisateurs supprimés",
  "menu": [
   "Tous les utilisateurs",
   "*Utilisateurs supprimés"
  ],
  "rows": [
   [
    "*Utilisateur",
    "30 jours"
   ],
   [
    "Groupe Microsoft 365",
    "30 jours"
   ],
   [
    "Groupe de sécurité",
    "0 jour"
   ],
   [
    "Journal d'activité Azure",
    "90 jours"
   ]
  ]
 },
 "keep": "Utilisateur et groupe Microsoft 365 : 30 jours. Groupe de sécurité : aucun délai. Journal d'activité : 90 jours."
},
{
 "id": "D1-155",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Votre entreprise veut réduire la facture de 20 VM Windows Server de production qui tourneront en continu pendant 3 ans. Elle possède des licences Windows Server avec Software Assurance.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle fait partie de la combinaison. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Activer Azure Hybrid Benefit sur les VM",
   "a": 0
  },
  {
   "l": "Passer tous les disques en HDD Standard",
   "a": 1
  },
  {
   "l": "Convertir les VM de production en VM Spot",
   "a": 1
  },
  {
   "l": "Acheter des réservations de VM sur 3 ans",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Réservations sur 3 ans : oui.</b> Elles réduisent fortement le coût du calcul pour une charge continue.</li><li><b>Azure Hybrid Benefit : oui.</b> Il supprime le coût de la licence Windows. Les deux remises se cumulent.</li><li><b>VM Spot : non.</b> Elles peuvent être interrompues, ce qui est inacceptable en production.</li><li><b>HDD Standard : non.</b> L'économie est faible et dégrade les performances de production.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM-Prod1"
  ],
  "title": "VM-Prod1 | Configuration",
  "menu": [
   "Vue d'ensemble",
   "*Configuration"
  ],
  "rows": [
   [
    "*Licence · Utiliser une licence Windows Server existante",
    "Oui (Azure Hybrid Benefit)"
   ],
   [
    "Réservation",
    "3 ans · étendue partagée"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Réservation et Hybrid Benefit se cumulent : la première réduit le calcul, le second la licence."
},
{
 "id": "D1-158",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous comparez les rôles Microsoft Entra et les rôles Azure.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Le rôle Administrateur général donne par défaut accès à toutes les ressources Azure des abonnements.",
   "a": 1
  },
  {
   "l": "Le rôle Propriétaire d'un abonnement permet de créer des utilisateurs dans Microsoft Entra ID.",
   "a": 1
  },
  {
   "l": "Un même utilisateur peut avoir à la fois des rôles Microsoft Entra et des rôles Azure.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Administrateur général et ressources : Non.</b> Il n'a pas d'accès aux ressources Azure par défaut ; il doit élever son accès (Administrateur de l'accès utilisateur à la racine).</li><li><b>Propriétaire et utilisateurs : Non.</b> Un rôle Azure ne donne aucun droit sur l'annuaire.</li><li><b>Les deux à la fois : Oui.</b> Les deux systèmes sont indépendants et cumulables.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Propriétés"
  ],
  "title": "Microsoft Entra ID | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "*Propriétés"
  ],
  "rows": [
   [
    "*Gestion de l'accès pour les ressources Azure",
    "Non (par défaut)"
   ]
  ]
 },
 "keep": "Rôles Entra et rôles Azure sont séparés et cumulables ; l'admin général doit élever son accès."
}
);
