/* Domaine 1 : identités et gouvernance (lot F : D1-231 à D1-250, questions à documents façon examen) */
AZ.questions.push(
{
 "id": "D1-231",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rôles (cliquez sur l'onglet <b>Rôles</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Rôles",
   "h": "<p>Hiérarchie : groupe racine → <b>MG-Corp</b> → <b>MG-Prod</b> (abonnements Sub-Prod1 et Sub-Prod2) et <b>MG-Dev</b> (abonnement Sub-Dev). Sub-Prod1 contient RG-App (VM1, st1) et RG-Net (VNet1). RG-Net a un verrou <b>Suppression impossible</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributeur</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Propriétaire</td><td>RG-App</td></tr><tr><td>User4</td><td>Contributeur de machines virtuelles</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>Administrateur de l'accès utilisateur</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Administrateur général (rôle Microsoft Entra)</td><td>Locataire</td></tr><tr><td>G1 (membre : User7)</td><td>Contributeur</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 peut voir les ressources de Sub-Dev.",
   "a": 0
  },
  {
   "l": "User2 peut créer une machine virtuelle dans Sub-Prod2.",
   "a": 0
  },
  {
   "l": "User2 peut attribuer des rôles dans Sub-Prod1.",
   "a": 1
  },
  {
   "l": "User3 peut attribuer à un autre utilisateur le rôle Contributeur sur st1.",
   "a": 0
  },
  {
   "l": "User6 peut voir les ressources de Sub-Prod1 sans autre action.",
   "a": 1
  }
 ],
 "expl": "<p>Une attribution de rôle Azure s'hérite vers le bas : groupe d'administration → abonnements → groupes de ressources → ressources.</p><ul><li><b>User1 : Oui.</b> Lecteur sur MG-Corp couvre MG-Dev et Sub-Dev.</li><li><b>User2 crée une VM : Oui.</b> Contributeur sur MG-Prod couvre Sub-Prod2.</li><li><b>User2 attribue des rôles : Non.</b> Contributeur exclut Microsoft.Authorization/*/Write.</li><li><b>User3 : Oui.</b> Propriétaire sur RG-App inclut la gestion des accès, et st1 est dans RG-App.</li><li><b>User6 : Non.</b> Les rôles Microsoft Entra et les rôles Azure sont séparés. Un Administrateur général doit d'abord élever son accès (Gestion de l'accès pour les ressources Azure) pour obtenir Administrateur de l'accès utilisateur à la racine.</li></ul>",
 "portal": {
  "path": [
   "Sub-Dev"
  ],
  "title": "Sub-Dev | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*User1",
    "Lecteur (hérité de MG-Corp)"
   ]
  ],
  "btn": "Vérifier l'accès"
 },
 "keep": "Héritage vers le bas. Contributeur ≠ gestion des accès. Rôles Entra ≠ rôles Azure."
},
{
 "id": "D1-232",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rôles (cliquez sur l'onglet <b>Rôles</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Rôles",
   "h": "<p>Hiérarchie : groupe racine → <b>MG-Corp</b> → <b>MG-Prod</b> (abonnements Sub-Prod1 et Sub-Prod2) et <b>MG-Dev</b> (abonnement Sub-Dev). Sub-Prod1 contient RG-App (VM1, st1) et RG-Net (VNet1). RG-Net a un verrou <b>Suppression impossible</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributeur</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Propriétaire</td><td>RG-App</td></tr><tr><td>User4</td><td>Contributeur de machines virtuelles</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>Administrateur de l'accès utilisateur</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Administrateur général (rôle Microsoft Entra)</td><td>Locataire</td></tr><tr><td>G1 (membre : User7)</td><td>Contributeur</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User4 peut supprimer VM1.",
   "a": 0
  },
  {
   "l": "User4 peut créer un compte de stockage dans RG-App.",
   "a": 1
  },
  {
   "l": "User5 peut créer une machine virtuelle dans Sub-Dev avec ses droits actuels.",
   "a": 1
  },
  {
   "l": "User7 peut ajouter un sous-réseau à VNet1.",
   "a": 0
  },
  {
   "l": "User7 peut supprimer VNet1.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User4 supprime VM1 : Oui.</b> Contributeur de machines virtuelles gère les VM, y compris leur suppression.</li><li><b>User4 crée un compte de stockage : Non.</b> Ce rôle ne couvre pas Microsoft.Storage/storageAccounts/write.</li><li><b>User5 : Non.</b> Administrateur de l'accès utilisateur ne gère que les attributions de rôles. Il pourrait s'attribuer Contributeur, mais ce n'est pas un droit actuel.</li><li><b>User7 ajoute un sous-réseau : Oui.</b> Contributeur via G1, et un verrou Suppression impossible autorise les modifications.</li><li><b>User7 supprime VNet1 : Non.</b> Le verrou de RG-Net s'applique à VNet1, quel que soit le rôle.</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG-Net"
  ],
  "title": "RG-Net | Verrous",
  "menu": [
   "Vue d'ensemble",
   "Contrôle d'accès (IAM)",
   "*Verrous"
  ],
  "rows": [
   [
    "*lock-net",
    "Suppression impossible"
   ]
  ]
 },
 "keep": "Un verrou s'impose à tous les rôles. Suppression impossible = modification permise."
},
{
 "id": "D1-233",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rôles (cliquez sur l'onglet <b>Rôles</b>).</p><p>Vous devez accorder les accès ci-dessous en respectant le principe du moindre privilège. Quel rôle et quelle étendue devez-vous choisir ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Rôles",
   "h": "<p>Hiérarchie : groupe racine → <b>MG-Corp</b> → <b>MG-Prod</b> (abonnements Sub-Prod1 et Sub-Prod2) et <b>MG-Dev</b> (abonnement Sub-Dev). Sub-Prod1 contient RG-App (VM1, st1) et RG-Net (VNet1). RG-Net a un verrou <b>Suppression impossible</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributeur</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Propriétaire</td><td>RG-App</td></tr><tr><td>User4</td><td>Contributeur de machines virtuelles</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>Administrateur de l'accès utilisateur</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Administrateur général (rôle Microsoft Entra)</td><td>Locataire</td></tr><tr><td>G1 (membre : User7)</td><td>Contributeur</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User8 doit gérer les VM de tous les abonnements de production — rôle :",
   "o": [
    "Contributeur",
    "Contributeur de machines virtuelles",
    "Propriétaire",
    "Lecteur"
   ],
   "a": 1
  },
  {
   "l": "User8 — étendue :",
   "o": [
    "MG-Corp",
    "MG-Prod",
    "Sub-Prod1",
    "RG-App"
   ],
   "a": 1
  },
  {
   "l": "User9 doit attribuer des rôles dans RG-App uniquement — rôle :",
   "o": [
    "Propriétaire",
    "Administrateur de l'accès utilisateur",
    "Contributeur",
    "Lecteur"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User8 :</b> Contributeur de machines virtuelles suffit pour gérer les VM. Les abonnements de production sont tous sous <b>MG-Prod</b> : une seule attribution les couvre, aujourd'hui et demain (MG-Corp inclurait aussi Sub-Dev).</li><li><b>User9 :</b> Administrateur de l'accès utilisateur sur RG-App permet de gérer les attributions sans pouvoir modifier les ressources (Propriétaire donnerait les deux).</li></ul>",
 "portal": {
  "path": [
   "MG-Prod"
  ],
  "title": "MG-Prod | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*User8",
    "Contributeur de machines virtuelles"
   ]
  ],
  "btn": "Vérifier l'accès"
 },
 "keep": "Moindre privilège : le rôle le plus précis, à l'étendue la plus haute qui ne déborde pas."
},
{
 "id": "D1-234",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rôles (cliquez sur l'onglet <b>Rôles</b>).</p><p>User6 doit pouvoir attribuer des rôles Azure dans tous les abonnements pour une opération ponctuelle.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Rôles",
   "h": "<p>Hiérarchie : groupe racine → <b>MG-Corp</b> → <b>MG-Prod</b> (abonnements Sub-Prod1 et Sub-Prod2) et <b>MG-Dev</b> (abonnement Sub-Dev). Sub-Prod1 contient RG-App (VM1, st1) et RG-Net (VNet1). RG-Net a un verrou <b>Suppression impossible</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributeur</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Propriétaire</td><td>RG-App</td></tr><tr><td>User4</td><td>Contributeur de machines virtuelles</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>Administrateur de l'accès utilisateur</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Administrateur général (rôle Microsoft Entra)</td><td>Locataire</td></tr><tr><td>G1 (membre : User7)</td><td>Contributeur</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "opts": [
  "Activer « Gestion de l'accès pour les ressources Azure » pour User6",
  "Attribuer à User6 le rôle Administrateur de rôle privilégié",
  "Ajouter User6 au groupe G1, Contributeur sur RG-Net",
  "Attribuer à User6 le rôle Lecteur sur le groupe MG-Corp"
 ],
 "ans": 0,
 "expl": "<p>Un Administrateur général peut <b>élever son accès</b> : l'option « Gestion de l'accès pour les ressources Azure » (propriétés de Microsoft Entra ID) lui attribue Administrateur de l'accès utilisateur sur la racine (/). Il faut la désactiver une fois la tâche finie.</p><ul><li>Administrateur de rôle privilégié gère les rôles Microsoft Entra, pas les rôles Azure.</li><li>Contributeur ou Lecteur ne permettent pas d'attribuer des rôles.</li></ul>",
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
    "Oui"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Administrateur général → élévation d'accès → Administrateur de l'accès utilisateur à la racine."
},
{
 "id": "D1-235",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stratégies (cliquez sur l'onglet <b>Stratégies</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Stratégies",
   "h": "<p>Même hiérarchie : MG-Corp contient MG-Prod (Sub-Prod1, Sub-Prod2) et MG-Dev (Sub-Dev). Le groupe RG-App de Sub-Prod1 a l'étiquette <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Affectation</th><th>Définition</th><th>Effet</th><th>Étendue</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Emplacements autorisés : France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Exiger une étiquette CostCenter sur les groupes de ressources</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Hériter de l'étiquette CostCenter du groupe de ressources si elle est manquante</td><td>Modify (identité managée avec le rôle requis)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Références SKU de machine virtuelle autorisées : D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>RG-App contenait déjà, avant PA3 et PA4, la VM <b>VM-old</b> (taille B2s, sans étiquette).</p>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez créer un compte de stockage en North Europe dans Sub-Dev.",
   "a": 0
  },
  {
   "l": "Vous pouvez créer un compte de stockage en North Europe dans Sub-Prod2.",
   "a": 1
  },
  {
   "l": "Vous pouvez créer un groupe de ressources sans étiquette dans Sub-Prod1.",
   "a": 1
  },
  {
   "l": "Vous pouvez créer, dans Sub-Prod1, un groupe de ressources étiqueté CostCenter situé en North Europe.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Sub-Dev : Oui.</b> Sub-Dev est exclu de PA1.</li><li><b>Sub-Prod2 : Non.</b> PA1, attribuée sur MG-Corp, s'applique à Sub-Prod2 : North Europe n'est pas autorisée.</li><li><b>Groupe sans étiquette : Non.</b> PA2 refuse les groupes de ressources sans CostCenter.</li><li><b>Groupe en North Europe : Oui.</b> La stratégie intégrée « Emplacements autorisés » ne s'applique pas aux groupes de ressources (il existe une stratégie séparée pour eux), et l'étiquette satisfait PA2.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Conformité"
  ],
  "title": "Stratégie | Conformité",
  "menu": [
   "Vue d'ensemble",
   "*Conformité",
   "Correction",
   "Affectations"
  ],
  "rows": [
   [
    "PA3",
    "VM-old : non conforme (étiquette manquante)"
   ],
   [
    "*PA4",
    "VM-old : non conforme (B2s)"
   ]
  ]
 },
 "keep": "« Emplacements autorisés » ignore les groupes de ressources. Une exclusion retire une étendue de l'affectation."
},
{
 "id": "D1-236",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stratégies (cliquez sur l'onglet <b>Stratégies</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Stratégies",
   "h": "<p>Même hiérarchie : MG-Corp contient MG-Prod (Sub-Prod1, Sub-Prod2) et MG-Dev (Sub-Dev). Le groupe RG-App de Sub-Prod1 a l'étiquette <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Affectation</th><th>Définition</th><th>Effet</th><th>Étendue</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Emplacements autorisés : France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Exiger une étiquette CostCenter sur les groupes de ressources</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Hériter de l'étiquette CostCenter du groupe de ressources si elle est manquante</td><td>Modify (identité managée avec le rôle requis)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Références SKU de machine virtuelle autorisées : D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>RG-App contenait déjà, avant PA3 et PA4, la VM <b>VM-old</b> (taille B2s, sans étiquette).</p>"
  }
 ],
 "rows": [
  {
   "l": "Une nouvelle VM créée dans RG-App sans étiquette reçoit CostCenter = 42.",
   "a": 0
  },
  {
   "l": "VM-old reçoit automatiquement l'étiquette CostCenter = 42 à la prochaine évaluation.",
   "a": 1
  },
  {
   "l": "La création d'une VM de taille B2s dans RG-App est refusée.",
   "a": 1
  },
  {
   "l": "VM-old est signalée non conforme à PA4.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Nouvelle VM : Oui.</b> L'effet Modify agit sur les requêtes de création et de mise à jour : l'étiquette est ajoutée à la volée.</li><li><b>VM-old : Non.</b> Les ressources existantes ne sont modifiées que par une <b>tâche de correction</b>.</li><li><b>B2s refusée : Non.</b> PA4 est en Audit : la création réussit, la VM est signalée non conforme.</li><li><b>VM-old non conforme : Oui.</b> L'évaluation porte aussi sur les ressources existantes.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Conformité"
  ],
  "title": "Stratégie | Conformité",
  "menu": [
   "Vue d'ensemble",
   "*Conformité",
   "Correction",
   "Affectations"
  ],
  "rows": [
   [
    "PA3",
    "VM-old : non conforme (étiquette manquante)"
   ],
   [
    "*PA4",
    "VM-old : non conforme (B2s)"
   ]
  ]
 },
 "keep": "Modify/DeployIfNotExists : nouvelles ressources tout de suite, existantes par une tâche de correction."
},
{
 "id": "D1-237",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stratégies (cliquez sur l'onglet <b>Stratégies</b>).</p><p>VM-old et les autres ressources existantes de Sub-Prod1 doivent recevoir l'étiquette CostCenter de leur groupe.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Stratégies",
   "h": "<p>Même hiérarchie : MG-Corp contient MG-Prod (Sub-Prod1, Sub-Prod2) et MG-Dev (Sub-Dev). Le groupe RG-App de Sub-Prod1 a l'étiquette <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Affectation</th><th>Définition</th><th>Effet</th><th>Étendue</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Emplacements autorisés : France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Exiger une étiquette CostCenter sur les groupes de ressources</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Hériter de l'étiquette CostCenter du groupe de ressources si elle est manquante</td><td>Modify (identité managée avec le rôle requis)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Références SKU de machine virtuelle autorisées : D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>RG-App contenait déjà, avant PA3 et PA4, la VM <b>VM-old</b> (taille B2s, sans étiquette).</p>"
  }
 ],
 "opts": [
  "Créer une tâche de correction pour PA3",
  "Lancer une analyse de conformité à la demande",
  "Passer l'effet de PA3 de Modify à Append",
  "Supprimer et recréer l'affectation PA3"
 ],
 "ans": 0,
 "expl": "<p>Une <b>tâche de correction</b> applique l'effet Modify aux ressources existantes non conformes, avec l'identité managée de l'affectation.</p><ul><li>Une analyse à la demande met à jour l'état de conformité sans rien modifier.</li><li>Append ne corrige pas non plus l'existant.</li><li>Recréer l'affectation ne touche pas aux ressources existantes.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Correction"
  ],
  "title": "Stratégie | Correction",
  "menu": [
   "Conformité",
   "*Correction"
  ],
  "rows": [
   [
    "*PA3",
    "Ressources à corriger : 12"
   ]
  ],
  "btn": "Corriger"
 },
 "keep": "Corriger l'existant = tâche de correction."
},
{
 "id": "D1-238",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stratégies (cliquez sur l'onglet <b>Stratégies</b>).</p><p>Que devez-vous configurer pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Stratégies",
   "h": "<p>Même hiérarchie : MG-Corp contient MG-Prod (Sub-Prod1, Sub-Prod2) et MG-Dev (Sub-Dev). Le groupe RG-App de Sub-Prod1 a l'étiquette <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Affectation</th><th>Définition</th><th>Effet</th><th>Étendue</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Emplacements autorisés : France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Exiger une étiquette CostCenter sur les groupes de ressources</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Hériter de l'étiquette CostCenter du groupe de ressources si elle est manquante</td><td>Modify (identité managée avec le rôle requis)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Références SKU de machine virtuelle autorisées : D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>RG-App contenait déjà, avant PA3 et PA4, la VM <b>VM-old</b> (taille B2s, sans étiquette).</p>"
  }
 ],
 "rows": [
  {
   "l": "Sub-Dev ne doit plus être soumis à PA1, définitivement :",
   "o": [
    "Une exclusion",
    "Une exemption avec date de fin",
    "Un verrou",
    "Une tâche de correction"
   ],
   "a": 0
  },
  {
   "l": "RG-Lab doit échapper à PA4 pendant 30 jours seulement :",
   "o": [
    "Une exclusion",
    "Une exemption avec date de fin",
    "Un verrou",
    "Une tâche de correction"
   ],
   "a": 1
  },
  {
   "l": "Tester PA1 sur Sub-Prod2 sans bloquer de création :",
   "o": [
    "Application de la stratégie : Désactivée",
    "Effet Deny",
    "Un message de non-conformité",
    "Une exclusion de Sub-Prod2"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Définitif → exclusion</b> (notScopes) sur l'affectation.</li><li><b>Temporaire → exemption</b>, avec une date d'expiration et une catégorie (Dérogation ou Atténuée).</li><li><b>Test sans blocage → application désactivée</b> (DoNotEnforce) : la conformité est évaluée, mais l'effet Deny n'est pas appliqué.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Conformité"
  ],
  "title": "Stratégie | Conformité",
  "menu": [
   "Vue d'ensemble",
   "*Conformité",
   "Correction",
   "Affectations"
  ],
  "rows": [
   [
    "PA3",
    "VM-old : non conforme (étiquette manquante)"
   ],
   [
    "*PA4",
    "VM-old : non conforme (B2s)"
   ]
  ]
 },
 "keep": "Exclusion = définitif. Exemption = suivi et datable. DoNotEnforce = test."
},
{
 "id": "D1-239",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Verrous (cliquez sur l'onglet <b>Verrous</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Verrous",
   "h": "<p>Abonnement Sub-Prod2 : RG-Data a un verrou <b>Lecture seule</b> ; RG-Web n'a aucun verrou. RG-Data contient VM2 (arrêtée et libérée) et le compte st2 ; RG-Web contient l'application app1. Admin1 est Propriétaire de Sub-Prod2. User1 a le rôle Lecteur des données blob du stockage sur st2.</p>"
  }
 ],
 "rows": [
  {
   "l": "Admin1 peut démarrer VM2.",
   "a": 1
  },
  {
   "l": "User1 peut lire les blobs de st2 avec son compte Microsoft Entra.",
   "a": 0
  },
  {
   "l": "Admin1 peut afficher les clés d'accès de st2 dans le portail.",
   "a": 1
  },
  {
   "l": "Admin1 peut déplacer app1 dans RG-Data.",
   "a": 1
  }
 ],
 "expl": "<p>Un verrou Lecture seule bloque toutes les opérations d'écriture et de suppression du plan de gestion, y compris les actions POST, pour tous les utilisateurs, même Propriétaire.</p><ul><li><b>Démarrer VM2 : Non.</b> Le démarrage est une action d'écriture (POST start).</li><li><b>User1 : Oui.</b> Les verrous ne s'appliquent pas au plan de données : la lecture des blobs avec Microsoft Entra fonctionne.</li><li><b>Clés de st2 : Non.</b> Lister les clés est une action POST (listKeys), bloquée.</li><li><b>Déplacer app1 : Non.</b> Le groupe cible verrouillé en Lecture seule refuse l'écriture.</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG-Data"
  ],
  "title": "RG-Data | Verrous",
  "menu": [
   "Vue d'ensemble",
   "*Verrous"
  ],
  "rows": [
   [
    "*freeze",
    "Lecture seule"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Lecture seule : plus d'écriture ni de POST (démarrage, listKeys). Plan de données non concerné."
},
{
 "id": "D1-240",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Verrous (cliquez sur l'onglet <b>Verrous</b>).</p><p>Admin1 doit redimensionner VM2 aujourd'hui. Le verrou doit protéger RG-Data le reste du temps.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Verrous",
   "h": "<p>Abonnement Sub-Prod2 : RG-Data a un verrou <b>Lecture seule</b> ; RG-Web n'a aucun verrou. RG-Data contient VM2 (arrêtée et libérée) et le compte st2 ; RG-Web contient l'application app1. Admin1 est Propriétaire de Sub-Prod2. User1 a le rôle Lecteur des données blob du stockage sur st2.</p>"
  }
 ],
 "opts": [
  "Supprimer le verrou, redimensionner VM2, puis recréer le verrou",
  "Attribuer à Admin1 Contributeur de machines virtuelles sur VM2",
  "Remplacer le verrou par un verrou sur VM2 seulement",
  "Ajouter une exclusion pour VM2 dans le verrou de RG-Data"
 ],
 "ans": 0,
 "expl": "<p>Aucun rôle ne contourne un verrou. Admin1, Propriétaire, a l'action Microsoft.Authorization/locks/delete : il supprime le verrou, fait le changement, puis le recrée.</p><ul><li>Un rôle supplémentaire ne change rien au verrou.</li><li>Un verrou sur VM2 la bloquerait aussi.</li><li>Les verrous n'ont pas d'exclusions.</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG-Data"
  ],
  "title": "RG-Data | Verrous",
  "menu": [
   "Vue d'ensemble",
   "*Verrous"
  ],
  "rows": [
   [
    "*freeze",
    "Lecture seule"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Verrou : le retirer, agir, le remettre. Pas d'exclusion possible."
},
{
 "id": "D1-241",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rôle personnalisé (cliquez sur l'onglet <b>Rôle personnalisé</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Rôle personnalisé",
   "h": "<p>Rôle personnalisé <b>VM Operator</b> :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Propriété</th><th>Valeur</th></tr><tr><td>Actions</td><td>Microsoft.Compute/virtualMachines/read<br>Microsoft.Compute/virtualMachines/start/action<br>Microsoft.Compute/virtualMachines/restart/action<br>Microsoft.Compute/virtualMachines/deallocate/action</td></tr><tr><td>NotActions</td><td>—</td></tr><tr><td>AssignableScopes</td><td>/subscriptions/&lt;Sub-Prod1&gt;</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez attribuer VM Operator sur un groupe de ressources de Sub-Prod1.",
   "a": 0
  },
  {
   "l": "Vous pouvez attribuer VM Operator sur Sub-Prod2.",
   "a": 1
  },
  {
   "l": "Un utilisateur avec VM Operator peut redimensionner une VM.",
   "a": 1
  },
  {
   "l": "Un utilisateur avec VM Operator et Lecteur sur la même VM peut l'arrêter (libérer).",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Groupe de Sub-Prod1 : Oui.</b> Un rôle est attribuable sur ses AssignableScopes et sur toute étendue enfant.</li><li><b>Sub-Prod2 : Non.</b> Hors des étendues attribuables.</li><li><b>Redimensionner : Non.</b> Il faudrait Microsoft.Compute/virtualMachines/write.</li><li><b>Arrêter : Oui.</b> deallocate/action est accordé ; les autorisations des rôles s'additionnent (Lecteur ne retire rien).</li></ul>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub-Prod1",
   "Rôles"
  ],
  "title": "VM Operator | Étendues attribuables",
  "menu": [
   "Autorisations",
   "*Étendues attribuables",
   "JSON"
  ],
  "rows": [
   [
    "*/subscriptions/Sub-Prod1",
    "Attribuable ici et en dessous"
   ]
  ]
 },
 "keep": "Attribuable sur AssignableScopes et en dessous. Les rôles s'additionnent."
},
{
 "id": "D1-242",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rôle personnalisé (cliquez sur l'onglet <b>Rôle personnalisé</b>).</p><p>Les opérateurs doivent utiliser VM Operator dans Sub-Prod1, Sub-Prod2 et tout futur abonnement de MG-Prod, avec une seule attribution.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Rôle personnalisé",
   "h": "<p>Rôle personnalisé <b>VM Operator</b> :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Propriété</th><th>Valeur</th></tr><tr><td>Actions</td><td>Microsoft.Compute/virtualMachines/read<br>Microsoft.Compute/virtualMachines/start/action<br>Microsoft.Compute/virtualMachines/restart/action<br>Microsoft.Compute/virtualMachines/deallocate/action</td></tr><tr><td>NotActions</td><td>—</td></tr><tr><td>AssignableScopes</td><td>/subscriptions/&lt;Sub-Prod1&gt;</td></tr></table></div>"
  }
 ],
 "opts": [
  "Ajouter MG-Prod aux AssignableScopes, puis attribuer le rôle sur MG-Prod",
  "Ajouter Sub-Prod2 aux AssignableScopes, puis l'attribuer deux fois",
  "Cloner VM Operator dans chaque abonnement et l'attribuer à chaque fois",
  "Attribuer VM Operator sur Sub-Prod1 : l'héritage couvre les autres"
 ],
 "ans": 0,
 "expl": "<p>En ajoutant le groupe d'administration <b>MG-Prod</b> aux AssignableScopes, on peut attribuer le rôle sur MG-Prod : l'attribution s'hérite sur tous ses abonnements, y compris les futurs. (Ce rôle n'a pas de DataActions, ce qui permet une étendue de groupe d'administration.)</p><ul><li>Ajouter Sub-Prod2 demande deux attributions et ne couvre pas les futurs abonnements.</li><li>Dupliquer le rôle multiplie la maintenance.</li><li>L'héritage descend, il ne passe pas d'un abonnement à l'autre.</li></ul>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub-Prod1",
   "Rôles"
  ],
  "title": "VM Operator | Étendues attribuables",
  "menu": [
   "Autorisations",
   "*Étendues attribuables",
   "JSON"
  ],
  "rows": [
   [
    "*/subscriptions/Sub-Prod1",
    "Attribuable ici et en dessous"
   ]
  ]
 },
 "keep": "Un rôle pour un groupe d'administration : l'ajouter aux AssignableScopes (sans DataActions)."
},
{
 "id": "D1-243",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Coûts (cliquez sur l'onglet <b>Coûts</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Coûts",
   "h": "<p>Budget <b>B-Prod1</b> sur Sub-Prod1 : montant 1 000 € par mois.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Condition d'alerte</th><th>Seuil</th><th>Destinataire</th></tr><tr><td>Coût réel</td><td>80 %</td><td>E-mail à l'équipe financière</td></tr><tr><td>Coût prévu</td><td>100 %</td><td>Groupe d'actions AG-Cost (runbook qui arrête les VM de RG-Test)</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Quand le coût réel atteint 1 000 €, toutes les ressources de Sub-Prod1 sont arrêtées.",
   "a": 1
  },
  {
   "l": "L'alerte sur le coût prévu peut se déclencher alors que le coût réel est encore sous 1 000 €.",
   "a": 0
  },
  {
   "l": "Quand l'alerte sur le coût prévu se déclenche, les VM de RG-Test peuvent être arrêtées automatiquement.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Arrêt de tout : Non.</b> Un budget ne bloque ni n'arrête rien par lui-même : il alerte.</li><li><b>Coût prévu : Oui.</b> L'alerte se déclenche quand la projection de fin de période dépasse le seuil, avant la dépense réelle.</li><li><b>Runbook : Oui.</b> Un groupe d'actions associé à une alerte de budget peut lancer un runbook, une fonction ou un webhook : c'est la façon d'automatiser une réaction.</li></ul>",
 "portal": {
  "path": [
   "Gestion des coûts",
   "Budgets"
  ],
  "title": "B-Prod1 | Alertes",
  "menu": [
   "Vue d'ensemble",
   "*Conditions d'alerte"
  ],
  "rows": [
   [
    "Réel 80 %",
    "E-mail"
   ],
   [
    "*Prévu 100 %",
    "AG-Cost"
   ]
  ]
 },
 "keep": "Budget = alertes (réel ou prévu), jamais d'arrêt automatique sans groupe d'actions."
},
{
 "id": "D1-244",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Annuaire (cliquez sur l'onglet <b>Annuaire</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Annuaire",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Type</th><th>Origine</th><th>Service</th></tr><tr><td>U1</td><td>Membre</td><td>Synchronisé depuis l'AD local</td><td>Ventes</td></tr><tr><td>U2</td><td>Membre</td><td>Cloud</td><td>Ventes</td></tr><tr><td>U3</td><td>Invité</td><td>Fabrikam (B2B)</td><td>—</td></tr><tr><td>A1</td><td>Membre</td><td>Cloud</td><td>IT</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Objet</th><th>Détail</th></tr><tr><td>G-Sales</td><td>Groupe de sécurité, appartenance dynamique : user.department -eq \"Ventes\"</td></tr><tr><td>AU-Lyon</td><td>Unité administrative contenant U1 et U2</td></tr><tr><td>A1</td><td>Administrateur d'utilisateurs, étendue AU-Lyon</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A1 peut réinitialiser le mot de passe de U2.",
   "a": 0
  },
  {
   "l": "A1 peut réinitialiser le mot de passe de U3.",
   "a": 1
  },
  {
   "l": "A1 peut modifier le service de U1 dans Microsoft Entra ID.",
   "a": 1
  },
  {
   "l": "Vous pouvez ajouter A1 manuellement au groupe G-Sales.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>U2 : Oui.</b> U2 est dans AU-Lyon, où A1 est Administrateur d'utilisateurs.</li><li><b>U3 : Non.</b> U3 n'est pas dans l'unité administrative : le rôle de A1 ne la couvre pas.</li><li><b>Service de U1 : Non.</b> U1 est synchronisé : ses attributs sont gérés dans l'AD local, la source d'autorité.</li><li><b>G-Sales : Non.</b> Un groupe dynamique ne permet pas d'ajouter des membres à la main : seule la règle décide.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Unités administratives",
   "AU-Lyon"
  ],
  "title": "AU-Lyon | Rôles et administrateurs",
  "menu": [
   "Utilisateurs",
   "Groupes",
   "*Rôles et administrateurs"
  ],
  "rows": [
   [
    "*Administrateur d'utilisateurs",
    "A1"
   ]
  ]
 },
 "keep": "Rôle à l'étendue d'une unité administrative = seulement ses membres. Synchronisé = modifier dans l'AD."
},
{
 "id": "D1-245",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Annuaire (cliquez sur l'onglet <b>Annuaire</b>).</p><p>A1 doit pouvoir réinitialiser le mot de passe de U3, sans obtenir de droits sur les autres utilisateurs du locataire.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Annuaire",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Type</th><th>Origine</th><th>Service</th></tr><tr><td>U1</td><td>Membre</td><td>Synchronisé depuis l'AD local</td><td>Ventes</td></tr><tr><td>U2</td><td>Membre</td><td>Cloud</td><td>Ventes</td></tr><tr><td>U3</td><td>Invité</td><td>Fabrikam (B2B)</td><td>—</td></tr><tr><td>A1</td><td>Membre</td><td>Cloud</td><td>IT</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Objet</th><th>Détail</th></tr><tr><td>G-Sales</td><td>Groupe de sécurité, appartenance dynamique : user.department -eq \"Ventes\"</td></tr><tr><td>AU-Lyon</td><td>Unité administrative contenant U1 et U2</td></tr><tr><td>A1</td><td>Administrateur d'utilisateurs, étendue AU-Lyon</td></tr></table></div>"
  }
 ],
 "opts": [
  "Ajouter U3 à l'unité administrative AU-Lyon",
  "Attribuer à A1 Administrateur d'utilisateurs sur le locataire",
  "Convertir U3 en membre, puis l'ajouter à G-Sales",
  "Attribuer à A1 Administrateur de rôle privilégié sur AU-Lyon"
 ],
 "ans": 0,
 "expl": "<p>Le rôle de A1 s'applique aux membres d'AU-Lyon. Ajouter <b>U3 à AU-Lyon</b> l'étend à U3, et seulement à U3.</p><ul><li>Une attribution sur le locataire couvrirait tous les utilisateurs.</li><li>Être membre de G-Sales ne place pas U3 dans l'unité administrative.</li><li>Administrateur de rôle privilégié gère les attributions de rôles, pas les mots de passe.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Unités administratives",
   "AU-Lyon"
  ],
  "title": "AU-Lyon | Rôles et administrateurs",
  "menu": [
   "Utilisateurs",
   "Groupes",
   "*Rôles et administrateurs"
  ],
  "rows": [
   [
    "*Administrateur d'utilisateurs",
    "A1"
   ]
  ]
 },
 "keep": "Étendre un rôle délégué : ajouter l'objet à l'unité administrative."
},
{
 "id": "D1-246",
 "dom": 1,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rôles (cliquez sur l'onglet <b>Rôles</b>).</p><p>User10 doit pouvoir lire la conformité Azure Policy et les ressources de tous les abonnements, sans rien modifier.</p><p>Quelles <b>deux</b> attributions répondent chacune au besoin ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Rôles",
   "h": "<p>Hiérarchie : groupe racine → <b>MG-Corp</b> → <b>MG-Prod</b> (abonnements Sub-Prod1 et Sub-Prod2) et <b>MG-Dev</b> (abonnement Sub-Dev). Sub-Prod1 contient RG-App (VM1, st1) et RG-Net (VNet1). RG-Net a un verrou <b>Suppression impossible</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributeur</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Propriétaire</td><td>RG-App</td></tr><tr><td>User4</td><td>Contributeur de machines virtuelles</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>Administrateur de l'accès utilisateur</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Administrateur général (rôle Microsoft Entra)</td><td>Locataire</td></tr><tr><td>G1 (membre : User7)</td><td>Contributeur</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "opts": [
  "Lecteur sur le groupe d'administration MG-Corp",
  "Lecteur sur le groupe d'administration racine",
  "Contributeur de stratégie de ressource sur MG-Corp",
  "Lecteur sur Sub-Prod1, Sub-Prod2 et RG-App"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>Lecteur permet de lire les ressources et l'état de conformité. Attribué sur <b>MG-Corp</b> ou sur la <b>racine</b>, il couvre tous les abonnements actuels (et futurs placés dessous).</p><ul><li>Contributeur de stratégie de ressource permet de modifier les stratégies.</li><li>La liste d'abonnements oublie Sub-Dev.</li></ul>",
 "portal": {
  "path": [
   "MG-Corp"
  ],
  "title": "MG-Corp | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*User10",
    "Lecteur"
   ]
  ],
  "btn": "Vérifier l'accès"
 },
 "keep": "Lecture partout : Lecteur au plus haut groupe d'administration utile."
},
{
 "id": "D1-247",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Coûts (cliquez sur l'onglet <b>Coûts</b>).</p><p>La direction veut connaître chaque mois le coût par projet, sachant que les ressources de plusieurs projets partagent Sub-Prod1.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Coûts",
   "h": "<p>Budget <b>B-Prod1</b> sur Sub-Prod1 : montant 1 000 € par mois.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Condition d'alerte</th><th>Seuil</th><th>Destinataire</th></tr><tr><td>Coût réel</td><td>80 %</td><td>E-mail à l'équipe financière</td></tr><tr><td>Coût prévu</td><td>100 %</td><td>Groupe d'actions AG-Cost (runbook qui arrête les VM de RG-Test)</td></tr></table></div>"
  }
 ],
 "opts": [
  "Étiqueter les ressources par projet, puis grouper l'analyse des coûts",
  "Créer un budget par projet sur Sub-Prod1, au même montant",
  "Créer un groupe d'administration par projet pour Sub-Prod1",
  "Ajouter un verrou par projet sur les ressources de Sub-Prod1"
 ],
 "ans": 0,
 "expl": "<p>Les <b>étiquettes</b> (par exemple Projet = Orion) permettent de filtrer et de grouper l'analyse des coûts quand plusieurs projets partagent un abonnement. Une stratégie (par exemple héritage de l'étiquette du groupe) aide à ne pas en oublier.</p><ul><li>Un budget alerte, il ne ventile pas les coûts.</li><li>Un abonnement ne peut être que dans un seul groupe d'administration.</li><li>Un verrou n'a rien à voir avec les coûts.</li></ul>",
 "portal": {
  "path": [
   "Gestion des coûts",
   "Budgets"
  ],
  "title": "B-Prod1 | Alertes",
  "menu": [
   "Vue d'ensemble",
   "*Conditions d'alerte"
  ],
  "rows": [
   [
    "Réel 80 %",
    "E-mail"
   ],
   [
    "*Prévu 100 %",
    "AG-Cost"
   ]
  ]
 },
 "keep": "Ventiler les coûts dans un abonnement partagé : étiquettes."
},
{
 "id": "D1-248",
 "dom": 1,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Stratégies (cliquez sur l'onglet <b>Stratégies</b>).</p><p>PA3 a été attribuée, mais la tâche de correction échoue avec une erreur d'autorisation.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Stratégies",
   "h": "<p>Même hiérarchie : MG-Corp contient MG-Prod (Sub-Prod1, Sub-Prod2) et MG-Dev (Sub-Dev). Le groupe RG-App de Sub-Prod1 a l'étiquette <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Affectation</th><th>Définition</th><th>Effet</th><th>Étendue</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Emplacements autorisés : France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Exiger une étiquette CostCenter sur les groupes de ressources</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Hériter de l'étiquette CostCenter du groupe de ressources si elle est manquante</td><td>Modify (identité managée avec le rôle requis)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Références SKU de machine virtuelle autorisées : D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>RG-App contenait déjà, avant PA3 et PA4, la VM <b>VM-old</b> (taille B2s, sans étiquette).</p>"
  }
 ],
 "opts": [
  "Vérifier que l'affectation PA3 a une identité managée",
  "Donner à cette identité le rôle requis par la définition, sur Sub-Prod1",
  "Passer l'effet de PA3 en Audit pour lever l'erreur",
  "Attribuer Propriétaire sur Sub-Prod1 à l'utilisateur qui lance la tâche"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>Une correction Modify ou DeployIfNotExists agit avec l'<b>identité managée de l'affectation</b>, pas avec le compte de l'utilisateur. Cette identité doit exister et avoir, sur l'étendue, les rôles listés dans <code>roleDefinitionIds</code> de la définition (Contributeur d'étiquettes, par exemple).</p><ul><li>L'effet Audit ne corrige rien.</li><li>Les droits de l'utilisateur ne sont pas ceux utilisés pour modifier les ressources.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Conformité"
  ],
  "title": "Stratégie | Conformité",
  "menu": [
   "Vue d'ensemble",
   "*Conformité",
   "Correction",
   "Affectations"
  ],
  "rows": [
   [
    "PA3",
    "VM-old : non conforme (étiquette manquante)"
   ],
   [
    "*PA4",
    "VM-old : non conforme (B2s)"
   ]
  ]
 },
 "keep": "Correction = identité managée de l'affectation + rôles de roleDefinitionIds."
},
{
 "id": "D1-249",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rôle personnalisé (cliquez sur l'onglet <b>Rôle personnalisé</b>).</p><p>Vous complétez VM Operator. Que devez-vous modifier pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Rôle personnalisé",
   "h": "<p>Rôle personnalisé <b>VM Operator</b> :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Propriété</th><th>Valeur</th></tr><tr><td>Actions</td><td>Microsoft.Compute/virtualMachines/read<br>Microsoft.Compute/virtualMachines/start/action<br>Microsoft.Compute/virtualMachines/restart/action<br>Microsoft.Compute/virtualMachines/deallocate/action</td></tr><tr><td>NotActions</td><td>—</td></tr><tr><td>AssignableScopes</td><td>/subscriptions/&lt;Sub-Prod1&gt;</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Permettre aussi de redimensionner les VM :",
   "o": [
    "Ajouter virtualMachines/write aux Actions",
    "Ajouter virtualMachines/* aux NotActions",
    "Ajouter une DataAction",
    "Ajouter MG-Prod aux AssignableScopes"
   ],
   "a": 0
  },
  {
   "l": "Rendre le rôle attribuable dans Sub-Dev :",
   "o": [
    "Ajouter /subscriptions/Sub-Dev aux AssignableScopes",
    "Attribuer le rôle sur MG-Dev sans autre changement",
    "Cloner le rôle intégré Contributeur",
    "Ajouter Sub-Dev aux NotActions"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Redimensionner :</b> le changement de taille passe par une écriture sur la VM (<code>Microsoft.Compute/virtualMachines/write</code>). NotActions retire des droits, et les DataActions concernent les données, pas la gestion.</li><li><b>Sub-Dev :</b> le rôle n'est attribuable que sur ses AssignableScopes et en dessous ; il faut y ajouter Sub-Dev (ou un groupe d'administration parent). Attribuer sur MG-Dev échouerait tant qu'il n'y figure pas.</li></ul>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub-Prod1",
   "Rôles"
  ],
  "title": "VM Operator | Étendues attribuables",
  "menu": [
   "Autorisations",
   "*Étendues attribuables",
   "JSON"
  ],
  "rows": [
   [
    "*/subscriptions/Sub-Prod1",
    "Attribuable ici et en dessous"
   ]
  ]
 },
 "keep": "Actions = ce qu'on peut faire. AssignableScopes = où on peut l'attribuer."
},
{
 "id": "D1-250",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Annuaire (cliquez sur l'onglet <b>Annuaire</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Annuaire",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Type</th><th>Origine</th><th>Service</th></tr><tr><td>U1</td><td>Membre</td><td>Synchronisé depuis l'AD local</td><td>Ventes</td></tr><tr><td>U2</td><td>Membre</td><td>Cloud</td><td>Ventes</td></tr><tr><td>U3</td><td>Invité</td><td>Fabrikam (B2B)</td><td>—</td></tr><tr><td>A1</td><td>Membre</td><td>Cloud</td><td>IT</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Objet</th><th>Détail</th></tr><tr><td>G-Sales</td><td>Groupe de sécurité, appartenance dynamique : user.department -eq \"Ventes\"</td></tr><tr><td>AU-Lyon</td><td>Unité administrative contenant U1 et U2</td></tr><tr><td>A1</td><td>Administrateur d'utilisateurs, étendue AU-Lyon</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "U2 devient membre de G-Sales sans action manuelle.",
   "a": 0
  },
  {
   "l": "Si le service de U2 passe à Marketing, U2 quitte G-Sales automatiquement.",
   "a": 0
  },
  {
   "l": "Une règle d'appartenance dynamique exige des licences Microsoft Entra ID P1 pour les membres concernés.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>U2 dans G-Sales : Oui.</b> Son service vaut Ventes : la règle l'ajoute.</li><li><b>Changement de service : Oui.</b> La règle est réévaluée : U2 sort du groupe.</li><li><b>Licence P1 : Oui.</b> Les groupes dynamiques font partie de Microsoft Entra ID P1 (ou P2) : chaque utilisateur membre d'un groupe dynamique doit être couvert.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groupes",
   "G-Sales"
  ],
  "title": "G-Sales | Règles d'appartenance dynamique",
  "menu": [
   "Membres",
   "*Règles d'appartenance dynamique"
  ],
  "rows": [
   [
    "*Règle",
    "user.department -eq \"Ventes\""
   ]
  ]
 },
 "keep": "Groupe dynamique : la règle ajoute et retire ; licence P1 requise."
}
);
