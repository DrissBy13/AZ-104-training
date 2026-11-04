/* Domaine 1 : identités et gouvernance (lot B : D1-011 à D1-060) */
AZ.questions.push(
{
 "id": "D1-012",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous créez dans Microsoft Entra ID un groupe nommé Group1 de type <b>Microsoft 365</b>, avec une appartenance de type <b>Attribué</b>.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Vous pouvez ajouter des utilisateurs invités (B2B) comme membres de Group1.",
   "a": 0
  },
  {
   "l": "Vous pouvez ajouter un groupe de sécurité comme membre de Group1.",
   "a": 1
  },
  {
   "l": "Vous pouvez ajouter des appareils comme membres de Group1.",
   "a": 1
  }
 ],
 "expl": "<p>Un groupe <b>Microsoft 365</b> ne contient que des <b>utilisateurs</b>, membres ou invités.</p><ul><li><b>Invités : Oui.</b> Un invité est un objet utilisateur ; il peut rejoindre un groupe Microsoft 365.</li><li><b>Groupe imbriqué : Non.</b> Les groupes Microsoft 365 ne prennent pas en charge l'imbrication. Seul un groupe de sécurité peut contenir d'autres groupes.</li><li><b>Appareils : Non.</b> Seul un groupe de sécurité peut contenir des appareils (en appartenance attribuée ou appareil dynamique).</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groupes",
   "Group1"
  ],
  "title": "Group1 | Membres",
  "menu": [
   "Vue d'ensemble",
   "*Membres",
   "Propriétaires",
   "Licences"
  ],
  "rows": [
   [
    "Type de groupe",
    "Microsoft 365"
   ],
   [
    "*Ajouter des membres",
    "Utilisateurs (membres ou invités) uniquement"
   ]
  ]
 },
 "keep": "Groupe Microsoft 365 : uniquement des utilisateurs (membres ou invités). Groupes imbriqués et appareils : seulement dans un groupe de sécurité."
},
{
 "id": "D1-015",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous activez la réinitialisation de mot de passe en libre-service (SSPR) pour tous les utilisateurs de votre locataire Microsoft Entra. Le nombre de méthodes requises pour la réinitialisation est fixé à 2.</p><p>Pour chacune des méthodes suivantes, sélectionnez Oui si vous pouvez la proposer. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Adresse IP du réseau de l'entreprise",
   "a": 1
  },
  {
   "l": "Code de vérification envoyé par e-mail",
   "a": 0
  },
  {
   "l": "Certificat installé sur l'ordinateur de l'utilisateur",
   "a": 1
  },
  {
   "l": "Notification dans Microsoft Authenticator",
   "a": 0
  }
 ],
 "expl": "<p>SSPR propose : notification ou code de l'application mobile, e-mail, téléphone mobile (SMS ou appel), téléphone de bureau et questions de sécurité.</p><ul><li><b>Notification Authenticator : oui.</b></li><li><b>Code par e-mail : oui.</b> L'adresse doit être une adresse externe au locataire, puisque l'utilisateur ne peut pas lire sa boîte s'il a perdu son mot de passe.</li><li><b>Certificat de l'ordinateur : non.</b> Ce n'est pas une méthode SSPR.</li><li><b>Adresse IP : non.</b> Un emplacement réseau sert dans l'accès conditionnel, il ne prouve pas l'identité.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Réinitialisation du mot de passe"
  ],
  "title": "Réinitialisation du mot de passe | Méthodes d'authentification",
  "menu": [
   "Propriétés",
   "*Méthodes d'authentification",
   "Inscription",
   "Notifications"
  ],
  "rows": [
   [
    "Nombre de méthodes requises pour la réinitialisation",
    "2"
   ],
   [
    "*Notification d'application mobile",
    "Coché"
   ],
   [
    "*E-mail",
    "Coché"
   ],
   [
    "Téléphone mobile",
    "Coché"
   ],
   [
    "Questions de sécurité",
    "Décoché"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Méthodes SSPR : application Authenticator (notification ou code), e-mail, téléphone mobile, téléphone de bureau, questions de sécurité. Pas de certificat ni d'adresse IP."
},
{
 "id": "D1-018",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez attribuer à chaque administrateur le rôle Microsoft Entra intégré adapté. La solution doit respecter le principe du privilège minimum.</p><p>Quel rôle devez-vous attribuer pour chaque besoin ?</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "tgtHead": [
  "Besoin",
  "Rôle"
 ],
 "srcs": [
  "Administrateur général",
  "Administrateur d'utilisateurs",
  "Administrateur du support technique",
  "Administrateur de groupes",
  "Lecteur général"
 ],
 "tgts": [
  {
   "l": "Créer et supprimer des utilisateurs",
   "a": 1
  },
  {
   "l": "Réinitialiser le mot de passe des utilisateurs non administrateurs",
   "a": 2
  },
  {
   "l": "Créer des groupes et gérer leurs paramètres d'expiration",
   "a": 3
  },
  {
   "l": "Consulter toute la configuration du locataire sans rien modifier",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Administrateur d'utilisateurs</b> : crée, modifie et supprime les utilisateurs et les groupes, et réinitialise les mots de passe de certains administrateurs.</li><li><b>Administrateur du support technique</b> : réinitialise les mots de passe des utilisateurs non administrateurs (et des autres administrateurs du support). C'est le rôle le plus restreint pour ce besoin.</li><li><b>Administrateur de groupes</b> : gère les groupes et leurs paramètres, comme l'expiration et la stratégie de nommage.</li><li><b>Lecteur général</b> : lit tout ce que peut lire un administrateur général, sans rien modifier.</li></ul><p><b>Administrateur général</b> conviendrait partout, mais donne beaucoup trop de droits.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Rôles et administrateurs"
  ],
  "title": "Rôles et administrateurs | Tous les rôles",
  "menu": [
   "Vue d'ensemble",
   "Utilisateurs",
   "Groupes",
   "*Rôles et administrateurs"
  ],
  "rows": [
   [
    "Administrateur d'utilisateurs",
    "Gérer les utilisateurs et les groupes"
   ],
   [
    "*Administrateur du support technique",
    "Réinitialiser les mots de passe des non-administrateurs"
   ],
   [
    "Administrateur de groupes",
    "Gérer les groupes et leurs paramètres"
   ],
   [
    "Lecteur général",
    "Tout lire, ne rien modifier"
   ]
  ]
 },
 "keep": "Mot de passe d'un utilisateur standard = Administrateur du support technique. Créer des comptes = Administrateur d'utilisateurs. Tout voir sans toucher = Lecteur général."
},
{
 "id": "D1-022",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Votre entreprise gère plusieurs types d'appareils. Vous devez choisir l'état d'appareil Microsoft Entra adapté à chaque situation.</p><p>Pour répondre, faites glisser l'état approprié vers chaque situation. Chaque état peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "États",
 "tgtHead": [
  "Situation",
  "État"
 ],
 "srcs": [
  "Inscrit à Microsoft Entra",
  "Joint à Microsoft Entra",
  "Joint à Microsoft Entra hybride"
 ],
 "tgts": [
  {
   "l": "Smartphone personnel d'un employé, utilisé pour lire ses e-mails professionnels",
   "a": 0
  },
  {
   "l": "Ordinateur portable Windows 11 de l'entreprise, sans Active Directory local",
   "a": 1
  },
  {
   "l": "Poste Windows joint au domaine AD DS local, qui doit aussi être connu de Microsoft Entra ID",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Inscrit (registered)</b> : appareils personnels (BYOD). L'utilisateur se connecte avec son compte personnel de l'appareil et ajoute son compte professionnel.</li><li><b>Joint (joined)</b> : appareils de l'entreprise, Windows 10/11, gérés uniquement depuis le cloud. On s'y connecte avec son compte Entra.</li><li><b>Joint hybride</b> : appareils joints au domaine Active Directory local <i>et</i> enregistrés dans Microsoft Entra ID, en général par Microsoft Entra Connect.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Appareils",
   "Tous les appareils"
  ],
  "title": "Appareils | Tous les appareils",
  "menu": [
   "Vue d'ensemble",
   "*Tous les appareils",
   "Paramètres de l'appareil"
  ],
  "rows": [
   [
    "#Colonne « Type de jointure »",
    ""
   ],
   [
    "*Inscrit à Microsoft Entra",
    "Téléphone personnel (BYOD)"
   ],
   [
    "*Joint à Microsoft Entra",
    "Portable de l'entreprise, 100 % cloud"
   ],
   [
    "*Joint à Microsoft Entra hybride",
    "Poste joint au domaine AD local"
   ]
  ]
 },
 "keep": "Personnel = inscrit. Entreprise sans AD = joint. Entreprise avec AD local = joint hybride."
},
{
 "id": "D1-025",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous disposez de la hiérarchie suivante : le groupe d'administration MG1 contient l'abonnement Sub1, qui contient le groupe de ressources RG1, qui contient la machine virtuelle VM1.</p><p>Vous effectuez les attributions de rôles suivantes :</p>",
 "docs": [
  {
   "t": "Attributions",
   "h": "<p><b>Attributions de rôles</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur</td><td>MG1</td></tr><tr><td>User2</td><td>Contributeur</td><td>RG1</td></tr><tr><td>User3</td><td>Contributeur de machines virtuelles</td><td>VM1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 peut afficher les propriétés de VM1.",
   "a": 0
  },
  {
   "l": "User2 peut créer un compte de stockage dans RG1.",
   "a": 0
  },
  {
   "l": "User3 peut créer une nouvelle machine virtuelle dans RG1.",
   "a": 1
  }
 ],
 "expl": "<p>Les rôles Azure sont <b>hérités</b> vers le bas : groupe d'administration → abonnement → groupe de ressources → ressource.</p><ul><li><b>User1 : Oui.</b> Lecteur sur MG1 s'applique à tout ce qui est dessous, donc à VM1.</li><li><b>User2 : Oui.</b> Contributeur sur RG1 peut créer n'importe quelle ressource dans RG1.</li><li><b>User3 : Non.</b> Son rôle est attribué sur la ressource VM1 seulement. Créer une VM est une action sur le groupe de ressources, en dehors de son étendue.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "#Attributions de rôles",
    ""
   ],
   [
    "User1 · Lecteur",
    "Hérité (MG1)"
   ],
   [
    "User2 · Contributeur",
    "Hérité (RG1)"
   ],
   [
    "*User3 · Contributeur de machines virtuelles",
    "Cette ressource"
   ]
  ]
 },
 "keep": "Un rôle attribué sur une ressource ne permet rien au-dessus d'elle : créer une ressource se fait au niveau du groupe de ressources."
},
{
 "id": "D1-029",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous gérez les accès de votre organisation. Les rôles doivent respecter le principe du privilège minimum.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Réinitialiser le mot de passe d'un utilisateur dans Microsoft Entra ID :",
   "o": [
    "Rôle Entra Administrateur du support technique",
    "Rôle Azure Contributeur",
    "Rôle Azure Propriétaire"
   ],
   "a": 0
  },
  {
   "l": "Démarrer et arrêter les machines virtuelles de RG1 :",
   "o": [
    "Rôle Azure Contributeur de machines virtuelles",
    "Rôle Azure Lecteur",
    "Rôle Entra Administrateur général"
   ],
   "a": 0
  },
  {
   "l": "Voir les factures de l'abonnement :",
   "o": [
    "Rôle Entra Lecteur de répertoire",
    "Rôle Azure Lecteur de facturation",
    "Rôle Azure Contributeur"
   ],
   "a": 1
  }
 ],
 "expl": "<p>Il faut distinguer deux familles de rôles :</p><ul><li>les <b>rôles Microsoft Entra</b> gèrent l'annuaire : utilisateurs, groupes, mots de passe, licences ;</li><li>les <b>rôles Azure (RBAC)</b> gèrent les ressources Azure : VM, stockage, réseau, facturation de l'abonnement.</li></ul><p>Réinitialiser un mot de passe relève d'Entra : <b>Administrateur du support technique</b>. Démarrer des VM relève d'Azure : <b>Contributeur de machines virtuelles</b>. Voir les factures : <b>Lecteur de facturation</b>, rôle Azure dédié. Lecteur de répertoire lit l'annuaire, pas la facturation.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Utilisateurs",
   "User1"
  ],
  "title": "User1 | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble",
   "Rôles attribués"
  ],
  "rows": [
   [
    "*Réinitialiser le mot de passe",
    "Action disponible avec Administrateur du support technique"
   ]
  ]
 },
 "keep": "Rôles Entra = annuaire (mots de passe, utilisateurs, licences). Rôles Azure = ressources (VM, stockage, facturation de l'abonnement)."
},
{
 "id": "D1-031",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'effet Azure Policy adapté à chaque exigence.</p><p>Pour répondre, faites glisser l'effet approprié vers chaque exigence. Chaque effet peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Effets",
 "tgtHead": [
  "Exigence",
  "Effet"
 ],
 "srcs": [
  "Audit",
  "Deny",
  "Modify",
  "DeployIfNotExists",
  "Disabled"
 ],
 "tgts": [
  {
   "l": "Empêcher la création de ressources hors de la région France Central",
   "a": 1
  },
  {
   "l": "Ajouter automatiquement l'étiquette Service si elle manque",
   "a": 2
  },
  {
   "l": "Signaler les comptes de stockage qui autorisent l'accès public, sans rien bloquer",
   "a": 0
  },
  {
   "l": "Installer l'extension de supervision sur les VM qui ne l'ont pas",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Deny</b> : refuse la requête de création ou de modification non conforme.</li><li><b>Modify</b> : ajoute, remplace ou supprime des propriétés ou des étiquettes pendant la création ou la mise à jour.</li><li><b>Audit</b> : laisse passer, mais marque la ressource non conforme et écrit un avertissement dans le journal d'activité.</li><li><b>DeployIfNotExists</b> : déploie une ressource liée (extension, paramètre de diagnostic…) quand elle n'existe pas.</li></ul><p><b>Disabled</b> désactive la stratégie, ce qui sert surtout pour tester ou suspendre une affectation paramétrée.</p>",
 "portal": {
  "path": [
   "Stratégie",
   "Définitions"
  ],
  "title": "Définition de stratégie",
  "menu": [
   "Vue d'ensemble",
   "Conformité",
   "Affectations",
   "*Définitions"
  ],
  "rows": [
   [
    "*Deny",
    "Refuse la création ou la modification"
   ],
   [
    "*Modify",
    "Ajoute ou change des propriétés et étiquettes"
   ],
   [
    "*Audit",
    "Signale sans bloquer"
   ],
   [
    "*DeployIfNotExists",
    "Déploie une ressource manquante"
   ]
  ]
 },
 "keep": "Deny bloque, Audit signale, Modify corrige les propriétés, DeployIfNotExists déploie ce qui manque."
},
{
 "id": "D1-035",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>L'abonnement Sub1 contient le groupe de ressources RG1. Vous devez faire en sorte que chaque ressource créée dans RG1 reçoive l'étiquette <b>CentreDeCout</b> avec la même valeur que celle de RG1.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Une tâche de correction est nécessaire pour l'existant",
   "a": 0
  },
  {
   "l": "Un verrou sur RG1 copie ses étiquettes vers ses ressources",
   "a": 1
  },
  {
   "l": "Les ressources héritent automatiquement des étiquettes de RG1",
   "a": 1
  },
  {
   "l": "La stratégie « Hériter d'une étiquette du groupe » convient",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Héritage automatique : faux.</b> Dans Azure, les étiquettes ne sont jamais héritées par défaut.</li><li><b>Stratégie « Hériter d'une étiquette du groupe de ressources » : vrai.</b> Elle utilise l'effet Modify pour copier l'étiquette lors de la création ou de la mise à jour d'une ressource.</li><li><b>Tâche de correction : vrai.</b> Modify n'agit seul que sur les ressources créées ou modifiées. Pour les ressources existantes, il faut lancer une tâche de correction.</li><li><b>Verrou : faux.</b> Un verrou empêche la suppression ou la modification ; il ne touche pas aux étiquettes.</li></ul>",
 "portal": {
  "path": [
   "Stratégie",
   "Correction"
  ],
  "title": "Nouvelle tâche de correction",
  "menu": [
   "Vue d'ensemble",
   "Conformité",
   "*Correction"
  ],
  "rows": [
   [
    "Affectation",
    "Hériter d'une étiquette du groupe de ressources si elle est manquante"
   ],
   [
    "*Ressources à corriger",
    "Ressources existantes de RG1"
   ]
  ],
  "btn": "Corriger"
 },
 "keep": "Les étiquettes ne s'héritent jamais seules : stratégie Modify « Hériter d'une étiquette », plus une tâche de correction pour l'existant."
},
{
 "id": "D1-037",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Le groupe de ressources RG1 contient le compte de stockage storage1 et la machine virtuelle VM1. Vous appliquez à RG1 un verrou de type <b>Lecture seule</b> (ReadOnly). User1 a le rôle Propriétaire sur RG1.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "User1 peut-il démarrer VM1 ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "User1 peut-il lister les clés d'accès de storage1 ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 1
  },
  {
   "l": "User1 peut-il lire un blob de storage1 avec une SAS déjà émise ?",
   "o": [
    "Oui",
    "Non"
   ],
   "a": 0
  }
 ],
 "expl": "<p>Un verrou <b>Lecture seule</b> bloque toute opération d'écriture sur le <b>plan de contrôle</b>, pour tout le monde, même le Propriétaire.</p><ul><li><b>Démarrer VM1 : Non.</b> Démarrer est une requête POST, considérée comme une écriture.</li><li><b>Lister les clés : Non.</b> L'opération listKeys est aussi un POST : elle est bloquée.</li><li><b>Lire un blob avec une SAS : Oui.</b> Les verrous ne protègent que le plan de contrôle. Les opérations sur les données (lire, et même écrire un blob) ne sont pas concernées.</li></ul>",
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
    "Nom du verrou",
    "LectureSeule"
   ],
   [
    "*Type de verrou",
    "Lecture seule"
   ],
   [
    "Étendue",
    "RG1"
   ]
  ]
 },
 "keep": "Verrou Lecture seule : bloque toute écriture du plan de contrôle (y compris démarrer une VM et lister les clés), jamais le plan de données."
},
{
 "id": "D1-041",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Vous gérez une hiérarchie de groupes d'administration.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un abonnement peut appartenir à deux groupes d'administration à la fois.",
   "a": 1
  },
  {
   "l": "Une stratégie attribuée à un groupe d'administration s'applique aux abonnements qu'il contient.",
   "a": 0
  },
  {
   "l": "Un nouvel abonnement est placé par défaut sous le groupe d'administration racine.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Deux parents : Non.</b> Chaque abonnement et chaque groupe d'administration a un seul parent.</li><li><b>Héritage : Oui.</b> Les stratégies et les rôles attribués à un groupe d'administration s'appliquent à tout ce qui est dessous.</li><li><b>Racine par défaut : Oui.</b> Sauf si vous définissez un autre groupe d'administration par défaut dans les paramètres de la hiérarchie.</li></ul>",
 "portal": {
  "path": [
   "Groupes d'administration"
  ],
  "title": "Groupes d'administration | Paramètres",
  "menu": [
   "Groupes d'administration",
   "*Paramètres"
  ],
  "rows": [
   [
    "*Groupe d'administration par défaut",
    "Groupe d'administration racine"
   ],
   [
    "Autorisations requises pour créer des groupes",
    "Désactivé"
   ]
  ]
 },
 "keep": "Un seul parent par abonnement ; les stratégies et rôles d'un groupe d'administration s'appliquent à ses abonnements."
},
{
 "id": "D1-044",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez réduire les coûts Azure de votre entreprise. Quelle option correspond à chaque situation ?</p><p>Pour répondre, faites glisser l'option appropriée vers chaque situation. Chaque option peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Options",
 "tgtHead": [
  "Situation",
  "Option"
 ],
 "srcs": [
  "Réservation Azure",
  "Azure Hybrid Benefit",
  "Machine virtuelle Spot",
  "Arrêt automatique planifié"
 ],
 "tgts": [
  {
   "l": "Des VM de production tourneront 24h/24 pendant les 3 prochaines années",
   "a": 0
  },
  {
   "l": "Vous possédez des licences Windows Server avec Software Assurance",
   "a": 1
  },
  {
   "l": "Des calculs par lots peuvent être interrompus à tout moment sans gêne",
   "a": 2
  },
  {
   "l": "Des VM de développement ne servent qu'en journée",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Réservation</b> : engagement sur 1 ou 3 ans pour une taille et une région, avec une forte remise. Idéal pour une charge stable et continue.</li><li><b>Azure Hybrid Benefit</b> : réutilise vos licences Windows Server ou SQL Server couvertes par Software Assurance ; vous ne payez plus la licence dans le prix de la VM.</li><li><b>VM Spot</b> : capacité inutilisée d'Azure, très bon marché, mais Azure peut récupérer la VM à tout moment. Bien pour les traitements interruptibles.</li><li><b>Arrêt automatique</b> : une VM arrêtée et libérée ne coûte plus le calcul (les disques restent facturés).</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM-Dev1"
  ],
  "title": "VM-Dev1 | Arrêt automatique",
  "menu": [
   "Vue d'ensemble",
   "Configuration",
   "*Arrêt automatique",
   "Sauvegarde"
  ],
  "rows": [
   [
    "*Activé",
    "Activé"
   ],
   [
    "Heure d'arrêt planifiée",
    "19:00"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Charge continue 1-3 ans = réservation. Licences existantes = Hybrid Benefit. Interruptible = Spot. Inutile la nuit = arrêt automatique."
},
{
 "id": "D1-050",
 "dom": 1,
 "type": "order",
 "stem": "<p>Vous devez permettre à l'équipe Réseau (groupe Microsoft Entra existant nommé GRP-Reseau) de gérer uniquement les réseaux virtuels de l'abonnement Sub1, avec un rôle personnalisé qui n'existe pas encore.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Un rôle personnalisé se crée en trois temps : on <b>rédige</b> sa définition (Actions, NotActions, AssignableScopes contenant Sub1), on le <b>crée</b> (portail, <code>New-AzRoleDefinition</code> ou <code>az role definition create</code>), puis on l'<b>attribue</b> à un principal sur une étendue.</p><p>Les unités administratives et les rôles Microsoft Entra concernent l'annuaire, pas les ressources Azure comme les réseaux virtuels.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1",
   "Contrôle d'accès (IAM)"
  ],
  "title": "Créer un rôle personnalisé | JSON",
  "menu": [
   "Informations de base",
   "Autorisations",
   "Étendues attribuables",
   "*JSON"
  ],
  "rows": [
   [
    "*Actions",
    "Microsoft.Network/virtualNetworks/*"
   ],
   [
    "AssignableScopes",
    "/subscriptions/<id Sub1>"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Rôle personnalisé : définir, créer, puis attribuer. Les rôles Entra et les unités administratives ne concernent pas les ressources Azure.",
 "acts": [
  "Rédiger la définition JSON du rôle avec les Actions Microsoft.Network/virtualNetworks/*",
  "Créer le rôle avec New-AzRoleDefinition",
  "Attribuer le rôle à GRP-Reseau sur Sub1",
  "Créer une unité administrative pour GRP-Reseau",
  "Attribuer le rôle Administrateur réseau dans Microsoft Entra ID"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D1-051",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez attribuer le rôle Lecteur au groupe GRP-Audit sur le groupe de ressources RG1, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Sous-commande",
   "o": [
    "assignment",
    "definition",
    "policy"
   ],
   "a": 0
  },
  {
   "l": "Rôle",
   "o": [
    "\"Reader\"",
    "\"Owner\"",
    "\"Contributor\""
   ],
   "a": 0
  },
  {
   "l": "Paramètre d'étendue",
   "o": [
    "--resource-group",
    "--scope-name",
    "--location"
   ],
   "a": 0
  }
 ],
 "expl": "<p>La commande complète est : <code>az role assignment create --assignee-object-id &lt;id&gt; --assignee-principal-type Group --role \"Reader\" --resource-group RG1</code>.</p><ul><li><b>assignment</b> crée une attribution ; <b>definition</b> sert aux définitions de rôles personnalisés. <code>az role policy</code> n'existe pas.</li><li><b>Reader</b> est le nom anglais du rôle Lecteur.</li><li>L'étendue se donne avec <code>--scope</code> (chemin complet) ou <code>--resource-group</code>. <code>--scope-name</code> n'existe pas et <code>--location</code> désigne une région.</li></ul>",
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
    "*Rôle",
    "Lecteur (Reader)"
   ],
   [
    "Membres",
    "GRP-Audit"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Attribuer un rôle en CLI : az role assignment create --assignee … --role … --resource-group ou --scope.",
 "tpl": "az role {0} create --assignee-object-id &lt;id GRP-Audit&gt; --assignee-principal-type Group --role {1} {2} RG1"
},
{
 "id": "D1-052",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez appliquer un verrou qui empêche la suppression du groupe de ressources RG1, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzResourceLock",
    "Set-AzResourceGroup",
    "New-AzPolicyAssignment"
   ],
   "a": 0
  },
  {
   "l": "Niveau",
   "o": [
    "ReadOnly",
    "CanNotDelete",
    "DoNotDelete"
   ],
   "a": 1
  }
 ],
 "expl": "<p><code>New-AzResourceLock -LockName ProtectRG1 -LockLevel CanNotDelete -ResourceGroupName RG1</code>.</p><ul><li><b>New-AzResourceLock</b> crée un verrou. Set-AzResourceGroup modifie les étiquettes d'un groupe ; New-AzPolicyAssignment attribue une stratégie.</li><li><b>CanNotDelete</b> empêche la suppression mais autorise les modifications. <b>ReadOnly</b> bloquerait aussi toute modification. <b>DoNotDelete</b> n'existe pas : c'est un piège fréquent.</li></ul>",
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
    "Nom du verrou",
    "ProtectRG1"
   ],
   [
    "*Type de verrou",
    "Supprimer (CanNotDelete)"
   ]
  ],
  "btn": "OK"
 },
 "keep": "New-AzResourceLock -LockLevel CanNotDelete (Supprimer) ou ReadOnly (Lecture seule). DoNotDelete n'existe pas.",
 "tpl": "{0} -LockName ProtectRG1 -LockLevel {1} -ResourceGroupName RG1"
},
{
 "id": "D1-056",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous devez créer une alerte de budget pour le groupe de ressources RG-Dev. Le budget est de 1 000 € par mois. L'équipe Dev doit recevoir un e-mail dès que le coût <b>réel</b> atteint 80 % du budget.</p><p>Comment devez-vous configurer la condition d'alerte ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<p>Le budget est <b>mensuel</b> de 1 000 €. La condition d'alerte utilise le type <b>Réel</b> (le coût déjà consommé) et le seuil <b>80 %</b>.</p><p>Le type <b>Prévu</b> alerterait sur la projection de fin de mois, ce qui n'est pas demandé. Et un budget ne sait <b>pas</b> arrêter les ressources : il prévient seulement. Pour agir automatiquement, on associe un groupe d'actions qui déclenche un runbook ou une fonction, mais ce n'est pas une case du budget.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG-Dev"
  ],
  "title": "RG-Dev | Budgets › Créer un budget",
  "menu": [
   "Vue d'ensemble",
   "*Budgets"
  ],
  "rows": [
   [
    "Période de réinitialisation",
    "Mensuel"
   ],
   [
    "Montant",
    "1 000 €"
   ],
   [
    "*Type",
    "Réel"
   ],
   [
    "*% du budget",
    "80"
   ],
   [
    "Destinataires d'alerte",
    "equipe-dev@contoso.com"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Réel = déjà dépensé ; Prévu = projection. Un budget prévient, il n'arrête rien.",
 "win": {
  "title": "Créer un budget",
  "sub": "RG-Dev | Budgets",
  "rows": [
   {
    "k": "head",
    "t": "Détails du budget"
   },
   {
    "k": "text",
    "l": "Nom",
    "t": "Budget-Dev"
   },
   {
    "k": "select",
    "l": "Période de réinitialisation",
    "o": [
     "Mensuel",
     "Trimestriel",
     "Annuel"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "text",
    "l": "Montant",
    "t": "1 000 €"
   },
   {
    "k": "head",
    "t": "Conditions d'alerte"
   },
   {
    "k": "select",
    "l": "Type",
    "o": [
     "Réel",
     "Prévu"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "% du budget",
    "o": [
     "50",
     "80",
     "100",
     "120"
    ],
    "a": 1
   },
   {
    "k": "check",
    "l": "Arrêter les ressources lorsque le seuil est atteint",
    "a": false
   }
  ]
 }
},
{
 "id": "D1-057",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez autoriser les utilisateurs de votre locataire à inscrire au maximum 10 appareils chacun.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Paramètres de l'appareil",
 "expl": "<p>La limite « Nombre maximal d'appareils par utilisateur » se règle dans <b>Paramètres de l'appareil</b>. On y trouve aussi qui peut joindre ou inscrire des appareils, et l'exigence d'authentification multifacteur pour joindre un appareil.</p><p>Enterprise State Roaming synchronise les paramètres Windows. Les clés BitLocker et les journaux d'audit ne contiennent pas de réglage de limite.</p>",
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
    "*Nombre maximal d'appareils par utilisateur",
    "10"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Toutes les règles de jonction et d'inscription des appareils sont dans Paramètres de l'appareil.",
 "win": {
  "title": "Appareils | Vue d'ensemble",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Tous les appareils"
    ]
   },
   {
    "g": "Gérer",
    "items": [
     "Paramètres de l'appareil",
     "Paramètres Enterprise State Roaming",
     "BitLocker keys (préversion)"
    ]
   },
   {
    "g": "Activité",
    "items": [
     "Journaux d'audit",
     "Inscriptions en bloc"
    ]
   }
  ]
 }
},
{
 "id": "D1-060",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Votre locataire Microsoft Entra dispose de licences Microsoft Entra ID P1. Vous créez un groupe de sécurité à appartenance <b>Utilisateur dynamique</b> nommé Group5, avec la règle <code>(user.jobTitle -eq \"Technicien\")</code>.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Vous pouvez ajouter manuellement un utilisateur dont le poste est Commercial à Group5.",
   "a": 1
  },
  {
   "l": "Un utilisateur dont le poste passe à Technicien est ajouté à Group5 sans action de votre part.",
   "a": 0
  },
  {
   "l": "Vous pouvez attribuer un rôle Azure à Group5.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Ajout manuel : Non.</b> Dans un groupe dynamique, seule la règle décide des membres. Pour un cas particulier, il faut modifier la règle ou utiliser un autre groupe.</li><li><b>Mise à jour automatique : Oui.</b> Entra réévalue la règle quand les attributs changent (avec un délai variable selon la taille du locataire).</li><li><b>Rôle Azure : Oui.</b> Un groupe de sécurité, dynamique ou non, peut recevoir des rôles Azure.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groupes",
   "Group5"
  ],
  "title": "Group5 | Règles d'appartenance dynamique",
  "menu": [
   "Vue d'ensemble",
   "Membres",
   "*Règles d'appartenance dynamique"
  ],
  "rows": [
   [
    "*Règle",
    "(user.jobTitle -eq \"Technicien\")"
   ],
   [
    "Ajouter des membres manuellement",
    "Non disponible (groupe dynamique)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Groupe dynamique : seule la règle décide des membres ; pas d'ajout manuel."
}
);
