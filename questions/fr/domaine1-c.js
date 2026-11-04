/* Domaine 1 : identités et gouvernance (lot C : D1-061 à D1-110) */
AZ.questions.push(
{
 "id": "D1-065",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous devez créer 150 utilisateurs <b>membres</b> dans Microsoft Entra ID à partir d'une liste fournie par les RH.</p><p>Pour chacune des méthodes suivantes, sélectionnez Oui si elle convient. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "L'opération Inviter des utilisateurs en bloc (invités)",
   "a": 1
  },
  {
   "l": "Un script Microsoft Graph PowerShell (New-MgUser)",
   "a": 0
  },
  {
   "l": "Créer des utilisateurs en bloc (modèle CSV)",
   "a": 0
  },
  {
   "l": "Une stratégie Azure Policy DeployIfNotExists",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Créer des utilisateurs en bloc : oui.</b> On télécharge le modèle CSV, on le remplit (nom, UPN, mot de passe initial…) et on l'importe.</li><li><b>New-MgUser : oui.</b> Le module PowerShell Microsoft Graph permet de boucler sur un fichier CSV pour créer les comptes.</li><li><b>Inviter en bloc : non.</b> Cette opération crée des <b>invités</b>, pas des membres.</li><li><b>Azure Policy : non.</b> Elle ne crée pas d'utilisateurs Entra.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Utilisateurs",
   "Tous les utilisateurs"
  ],
  "title": "Créer des utilisateurs en bloc",
  "menu": [
   "Tous les utilisateurs",
   "*Opérations en bloc"
  ],
  "rows": [
   [
    "1. Télécharger le fichier CSV",
    "Modèle de création"
   ],
   [
    "*2. Charger votre fichier CSV",
    "nouveaux-rh.csv"
   ]
  ],
  "btn": "Envoyer"
 },
 "keep": "Membres en masse = Créer en bloc (CSV) ou PowerShell Graph (New-MgUser). Invités en masse = Inviter en bloc."
},
{
 "id": "D1-067",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous configurez la réinitialisation de mot de passe en libre-service (SSPR) dans un locataire synchronisé avec un Active Directory local par Microsoft Entra Connect.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Pour qu'un mot de passe réinitialisé dans le cloud soit appliqué dans l'AD local, il faut activer la réécriture du mot de passe.",
   "a": 0
  },
  {
   "l": "Les questions de sécurité sont disponibles comme méthode pour les comptes administrateurs.",
   "a": 1
  },
  {
   "l": "Les utilisateurs doivent s'inscrire à SSPR en enregistrant leurs méthodes d'authentification.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Réécriture : Oui.</b> La <b>réécriture du mot de passe</b> (password writeback) renvoie le nouveau mot de passe vers l'AD local. Elle se configure dans Microsoft Entra Connect (ou Cloud Sync) et demande au moins P1.</li><li><b>Questions de sécurité pour les admins : Non.</b> Les administrateurs suivent une stratégie à deux méthodes fortes ; les questions de sécurité ne leur sont pas proposées.</li><li><b>Inscription : Oui.</b> L'utilisateur doit enregistrer ses méthodes (téléphone, application, e-mail…) avant de pouvoir réinitialiser. On peut l'y obliger à la connexion.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Réinitialisation du mot de passe"
  ],
  "title": "Réinitialisation du mot de passe | Intégration locale",
  "menu": [
   "Propriétés",
   "Méthodes d'authentification",
   "Inscription",
   "*Intégration locale"
  ],
  "rows": [
   [
    "*Réécrire les mots de passe dans votre annuaire local",
    "Oui"
   ],
   [
    "Autoriser les utilisateurs à déverrouiller leur compte sans réinitialiser",
    "Oui"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "SSPR avec AD local = réécriture du mot de passe (Entra Connect ou Cloud Sync). Les admins n'ont jamais les questions de sécurité."
},
{
 "id": "D1-070",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous créez un rôle personnalisé Azure avec la définition suivante :</p><pre>{\n  \"Name\": \"Operateur VM\",\n  \"Actions\": [\n    \"Microsoft.Compute/virtualMachines/read\",\n    \"Microsoft.Compute/virtualMachines/start/action\",\n    \"Microsoft.Compute/virtualMachines/restart/action\"\n  ],\n  \"NotActions\": [],\n  \"AssignableScopes\": [\"/subscriptions/&lt;id Sub1&gt;\"]\n}</pre><p>Vous attribuez ce rôle à User8 sur RG1, dans Sub1.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "User8 peut redémarrer VM1, dans RG1 :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  },
  {
   "l": "User8 peut arrêter et libérer VM1 :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "Le rôle peut être attribué sur un groupe de ressources de Sub2 :",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Redémarrer : Oui.</b> L'action <code>restart/action</code> figure dans Actions, et RG1 fait partie de Sub1.</li><li><b>Arrêter et libérer : Non.</b> Il faudrait <code>deallocate/action</code> (ou <code>powerOff/action</code> pour un simple arrêt), absente du rôle.</li><li><b>Sub2 : Non.</b> AssignableScopes ne contient que Sub1 ; le rôle n'est même pas visible dans Sub2.</li></ul>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1",
   "Contrôle d'accès (IAM)"
  ],
  "title": "Operateur VM | Autorisations",
  "menu": [
   "Informations de base",
   "*Autorisations",
   "Étendues attribuables"
  ],
  "rows": [
   [
    "Microsoft.Compute/virtualMachines/read",
    "Autorisé"
   ],
   [
    "*Microsoft.Compute/virtualMachines/restart/action",
    "Autorisé"
   ],
   [
    "Microsoft.Compute/virtualMachines/deallocate/action",
    "Absent"
   ]
  ]
 },
 "keep": "Un rôle personnalisé ne permet que les actions listées. AssignableScopes limite où il est visible et attribuable."
},
{
 "id": "D1-074",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez attribuer le rôle Azure intégré adapté à chaque besoin. La solution doit respecter le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "tgtHead": [
  "Besoin",
  "Rôle"
 ],
 "srcs": [
  "Propriétaire",
  "Contributeur",
  "Lecteur",
  "Contributeur de réseau",
  "Contributeur de compte de stockage"
 ],
 "tgts": [
  {
   "l": "Créer des réseaux virtuels, des NSG et des passerelles dans RG-Net",
   "a": 3
  },
  {
   "l": "Gérer toutes les ressources de RG-App et donner des accès à d'autres utilisateurs",
   "a": 0
  },
  {
   "l": "Consulter les ressources de l'abonnement pour un audit",
   "a": 2
  },
  {
   "l": "Gérer les comptes de stockage de RG-Data, y compris la rotation des clés",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Contributeur de réseau</b> : gère les ressources réseau, sans accès aux autres types de ressources.</li><li><b>Propriétaire</b> : gère tout <i>et</i> attribue des rôles. Contributeur ne pourrait pas donner d'accès.</li><li><b>Lecteur</b> : consultation seule.</li><li><b>Contributeur de compte de stockage</b> : gère les comptes de stockage, y compris les clés d'accès, sans les autres ressources.</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG-Net"
  ],
  "title": "RG-Net | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Rôle",
    "Contributeur de réseau"
   ],
   [
    "Membres",
    "Équipe réseau"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Gérer + donner des accès = Propriétaire. Un seul type de ressource = rôle spécialisé (Contributeur de réseau, de compte de stockage…)."
},
{
 "id": "D1-078",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous attribuez à l'abonnement Sub1 l'initiative Init1, qui contient trois stratégies avec l'effet Audit. Vous excluez le groupe de ressources RG-Lab de l'affectation.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Les ressources de RG-Lab apparaissent comme non conformes si elles enfreignent Init1.",
   "a": 1
  },
  {
   "l": "Vous pouvez remplacer l'exclusion par une exemption, qui documente la raison et peut expirer.",
   "a": 0
  },
  {
   "l": "Un nouveau groupe de ressources créé dans Sub1 est évalué par Init1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>RG-Lab non conforme : Non.</b> Une ressource exclue n'est pas évaluée du tout ; elle n'apparaît pas dans les résultats.</li><li><b>Exemption : Oui.</b> Une exemption (catégorie Dérogation ou Atténué) garde une trace de la raison et peut avoir une date d'expiration. La ressource apparaît alors comme exemptée.</li><li><b>Nouveau groupe : Oui.</b> L'affectation porte sur tout Sub1, sauf les exclusions explicites.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Exemptions"
  ],
  "title": "Créer une exemption",
  "menu": [
   "Vue d'ensemble",
   "Conformité",
   "*Exemptions"
  ],
  "rows": [
   [
    "Étendue",
    "Sub1/RG-Lab"
   ],
   [
    "*Catégorie d'exemption",
    "Dérogation"
   ],
   [
    "*Date d'expiration",
    "31/12/2026"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Exclusion = non évalué. Exemption = évalué comme « exempté », avec raison et date d'expiration."
},
{
 "id": "D1-081",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous devez appliquer les étiquettes <b>Environnement</b> et <b>Service</b> à toutes les ressources de l'abonnement Sub1, et rejeter toute ressource créée sans l'étiquette Environnement.</p><p>Pour chacune des stratégies suivantes, sélectionnez Oui si vous devez l'attribuer. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Emplacements autorisés pour les ressources",
   "a": 1
  },
  {
   "l": "Exiger une étiquette (Environnement)",
   "a": 0
  },
  {
   "l": "Références SKU de machine virtuelle autorisées",
   "a": 1
  },
  {
   "l": "Hériter d'une étiquette du groupe (Service)",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Exiger une étiquette : oui.</b> Effet Deny : toute ressource créée sans l'étiquette Environnement est refusée.</li><li><b>Hériter d'une étiquette du groupe de ressources : oui.</b> Effet Modify : l'étiquette Service est copiée depuis le groupe de ressources, sans bloquer.</li><li><b>Emplacements autorisés</b> et <b>SKU de VM autorisées</b> contrôlent la région et la taille, pas les étiquettes.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Définitions"
  ],
  "title": "Définitions | Catégorie Étiquettes",
  "menu": [
   "Vue d'ensemble",
   "*Définitions"
  ],
  "rows": [
   [
    "*Exiger une étiquette sur les ressources",
    "Deny"
   ],
   [
    "*Hériter d'une étiquette du groupe de ressources si elle est manquante",
    "Modify"
   ]
  ]
 },
 "keep": "Rejeter sans étiquette = « Exiger une étiquette » (Deny). Compléter sans bloquer = « Hériter d'une étiquette » (Modify)."
},
{
 "id": "D1-083",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous gérez des étiquettes Azure.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une ressource peut avoir au maximum 50 paires nom/valeur d'étiquettes.",
   "a": 0
  },
  {
   "l": "Toutes les ressources Azure prennent en charge les étiquettes.",
   "a": 1
  },
  {
   "l": "Les étiquettes peuvent servir à filtrer l'analyse des coûts.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>50 étiquettes : Oui.</b> C'est la limite par ressource, groupe de ressources ou abonnement.</li><li><b>Toutes les ressources : Non.</b> Certains types ne prennent pas en charge les étiquettes, et toutes les ressources qui en ont ne les remontent pas dans la facturation.</li><li><b>Analyse des coûts : Oui.</b> On peut filtrer et grouper les coûts par étiquette, ce qui est l'un des usages principaux des étiquettes.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Étiquettes",
  "menu": [
   "Vue d'ensemble",
   "*Étiquettes"
  ],
  "rows": [
   [
    "Environnement",
    "Prod"
   ],
   [
    "Service",
    "Finance"
   ],
   [
    "*Limite",
    "50 paires nom/valeur par ressource"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "50 étiquettes maximum par ressource ; utilisables pour filtrer l'analyse des coûts ; pas supportées partout."
},
{
 "id": "D1-090",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous créez un budget de 2 000 € par mois sur l'abonnement Sub1, avec trois conditions d'alerte : Réel à 50 %, Réel à 90 % et Prévu à 100 %.</p><p>Au 10 du mois, le coût réel est de 1 100 € et le coût prévu pour le mois est de 3 200 €.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "L'alerte Réel 50 % a-t-elle été déclenchée ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  },
  {
   "l": "L'alerte Réel 90 % a-t-elle été déclenchée ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "L'alerte Prévu 100 % a-t-elle été déclenchée ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Réel 50 % : Oui.</b> 50 % de 2 000 € = 1 000 €, et le réel est de 1 100 €.</li><li><b>Réel 90 % : Non.</b> Le seuil serait 1 800 €.</li><li><b>Prévu 100 % : Oui.</b> La prévision de 3 200 € dépasse 2 000 €.</li></ul><p>C'est tout l'intérêt de l'alerte sur le coût prévu : être prévenu dès le 10 du mois qu'on va dépasser.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Sub1 | Budgets",
  "menu": [
   "Vue d'ensemble",
   "*Budgets"
  ],
  "rows": [
   [
    "Budget",
    "2 000 €"
   ],
   [
    "*Réel 50 % (1 000 €)",
    "Déclenchée · 1 100 €"
   ],
   [
    "Réel 90 % (1 800 €)",
    "Non déclenchée"
   ],
   [
    "*Prévu 100 % (2 000 €)",
    "Déclenchée · 3 200 €"
   ]
  ]
 },
 "keep": "Seuil = % × montant du budget ; Réel compare le dépensé, Prévu compare la projection de fin de période."
},
{
 "id": "D1-096",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous comparez les identités managées attribuées par le système et attribuées par l'utilisateur.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Une identité attribuée par le système est supprimée avec la ressource qui la porte.",
   "a": 0
  },
  {
   "l": "Une même identité attribuée par l'utilisateur peut être associée à plusieurs machines virtuelles.",
   "a": 0
  },
  {
   "l": "Une machine virtuelle ne peut avoir qu'un seul type d'identité managée à la fois.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Cycle de vie : Oui.</b> L'identité attribuée par le système est liée à la ressource : elle naît et meurt avec elle.</li><li><b>Partage : Oui.</b> L'identité attribuée par l'utilisateur est une ressource Azure indépendante, réutilisable par plusieurs ressources.</li><li><b>Un seul type : Non.</b> Une VM peut avoir à la fois une identité système et une ou plusieurs identités utilisateur.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Identité",
  "menu": [
   "Vue d'ensemble",
   "*Identité"
  ],
  "rows": [
   [
    "#Onglet Affectée par le système",
    ""
   ],
   [
    "État",
    "Activé (supprimée avec VM1)"
   ],
   [
    "#Onglet Affectée par l'utilisateur",
    ""
   ],
   [
    "*id-app-partagee",
    "Partagée avec VM2 et VM3"
   ]
  ]
 },
 "keep": "Système = 1 ressource, même cycle de vie. Utilisateur = ressource indépendante, partageable. Les deux peuvent coexister."
},
{
 "id": "D1-100",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'outil de gouvernance adapté à chaque besoin.</p><p>Pour répondre, faites glisser l'outil approprié vers chaque besoin. Chaque outil peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Outils",
 "tgtHead": [
  "Besoin",
  "Outil"
 ],
 "srcs": [
  "Azure Policy",
  "Verrou de ressource",
  "Contrôle d'accès en fonction du rôle (RBAC)",
  "Étiquette",
  "Groupe d'administration"
 ],
 "tgts": [
  {
   "l": "Empêcher même un Propriétaire de supprimer la base de données de production",
   "a": 1
  },
  {
   "l": "Interdire les VM de série M dans tout l'abonnement",
   "a": 0
  },
  {
   "l": "Permettre à l'équipe Data de gérer seulement les comptes de stockage",
   "a": 2
  },
  {
   "l": "Répartir la facture par centre de coût",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Verrou</b> : protège une ressource contre la suppression ou la modification, quels que soient les rôles.</li><li><b>Azure Policy</b> : impose des règles sur les propriétés des ressources (taille, région, SKU…).</li><li><b>RBAC</b> : définit <i>qui</i> peut faire <i>quoi</i>, et <i>où</i>.</li><li><b>Étiquette</b> : métadonnée qui permet de filtrer et de ventiler les coûts.</li></ul><p>Le groupe d'administration organise les abonnements ; il n'est la réponse à aucun de ces besoins pris seul.</p>",
 "portal": {
  "path": [
   "Bases de données SQL",
   "sql-prod"
  ],
  "title": "sql-prod | Verrous",
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
    "S'applique à",
    "Tout le monde, y compris le Propriétaire"
   ]
  ]
 },
 "keep": "Verrou = protéger. Policy = règles sur les propriétés. RBAC = qui fait quoi. Étiquette = ventiler les coûts."
},
{
 "id": "D1-110",
 "dom": 1,
 "type": "order",
 "stem": "<p>Vous devez garantir que toutes les ressources existantes et futures de l'abonnement Sub1 aient l'étiquette Environnement=Prod, copiée depuis l'abonnement.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>D'abord, l'étiquette doit exister sur l'<b>abonnement</b>, puisque la stratégie la copie depuis lui. Ensuite, on attribue la stratégie (effet Modify) avec une identité managée qui reçoit un rôle suffisant, par exemple Contributeur d'étiquettes. Enfin, la <b>tâche de correction</b> applique l'étiquette aux ressources déjà présentes.</p><p>Un verrou ReadOnly bloquerait justement la correction. Le rôle Lecteur ne permet pas de modifier les étiquettes.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Affectations"
  ],
  "title": "Affecter une stratégie | Correction",
  "menu": [
   "Informations de base",
   "Paramètres",
   "*Correction"
  ],
  "rows": [
   [
    "Définition",
    "Hériter d'une étiquette de l'abonnement si elle est manquante"
   ],
   [
    "*Créer une tâche de correction",
    "Coché"
   ],
   [
    "Identité managée",
    "Système · Contributeur d'étiquettes"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Étiquette sur la source, stratégie Modify avec identité, puis tâche de correction pour l'existant.",
 "acts": [
  "Ajouter l'étiquette Environnement=Prod à l'abonnement Sub1",
  "Attribuer à Sub1 la stratégie « Hériter d'une étiquette de l'abonnement si elle est manquante », avec une identité managée",
  "Créer une tâche de correction pour les ressources existantes",
  "Appliquer un verrou ReadOnly à Sub1",
  "Attribuer le rôle Lecteur à l'identité managée"
 ],
 "seq": [
  0,
  1,
  2
 ]
}
);
