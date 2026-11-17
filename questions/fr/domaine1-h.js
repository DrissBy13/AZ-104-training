/* Domaine 1 : identités et gouvernance (lot H : D1-401 à D1-410, scénarios longs) */
AZ.questions.push(
{
 "id": "D1-401",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso (licences Microsoft Entra ID P1) réorganise ses groupes :</p><ul><li>le groupe GRP-Ventes doit contenir automatiquement tous les utilisateurs dont le service est « Ventes » et le pays « France », sans intervention des administrateurs ;</li><li>un responsable veut ajouter manuellement un consultant externe dans GRP-Ventes ;</li><li>les licences Microsoft 365 E3 doivent être attribuées à GRP-Ventes ; l'équipe propose d'attribuer plutôt les licences au groupe GRP-Commercial, qui contient GRP-Ventes comme groupe imbriqué ;</li><li>après l'attribution, l'utilisateur Paul, membre de GRP-Ventes, n'a pas de licence et le portail affiche une erreur.</li></ul><p>Que devez-vous configurer, et qu'est-ce qui explique les problèmes ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Règle d'appartenance :",
   "o": [
    "(user.memberOf -eq \"Ventes\") -and (user.country -eq \"France\")",
    "(user.department -eq \"Ventes\") -and (user.country -eq \"France\")",
    "(user.department -eq \"Ventes\") -or (user.country -eq \"France\")",
    "user.department -contains \"Ventes,France\""
   ],
   "a": 1
  },
  {
   "l": "Ajout manuel du consultant :",
   "o": [
    "Possible avec le rôle Groups Administrator",
    "Impossible dans un groupe dynamique",
    "Possible après une synchronisation",
    "Possible si le responsable est propriétaire"
   ],
   "a": 1
  },
  {
   "l": "Licences sur GRP-Commercial :",
   "o": [
    "Les membres imbriqués les reçoivent aussi",
    "Il faut un groupe Microsoft 365",
    "Il faut des licences P2",
    "Les membres imbriqués ne les reçoivent pas"
   ],
   "a": 3
  },
  {
   "l": "Erreur pour Paul :",
   "o": [
    "Emplacement d'utilisation non défini",
    "Paul est un compte synchronisé",
    "Paul n'a pas de boîte aux lettres",
    "Paul n'a pas de méthode MFA"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Règle.</b> Les deux conditions doivent être vraies : -and. memberOf n'est pas une propriété utilisable de cette façon.<b>Groupe dynamique.</b> Les membres sont gérés uniquement par la règle : on ne peut pas ajouter ni retirer de membres manuellement. Il faut un autre groupe (ou une règle qui inclut le consultant).<b>Licences par groupe.</b> L'attribution de licences par groupe ne s'applique pas aux membres des groupes imbriqués : seuls les membres directs les reçoivent.<b>Emplacement d'utilisation.</b> Une licence ne peut pas être attribuée à un utilisateur sans emplacement d'utilisation (usageLocation) ; l'attribution par groupe se met en erreur pour cet utilisateur.",
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
    "*Règle d'appartenance",
    "(user.department -eq \"Ventes\") -and (user.country -eq \"France\")"
   ],
   [
    "Ajout manuel du consultant",
    "Impossible dans un groupe dynamique"
   ],
   [
    "Licences sur GRP-Commercial",
    "Les membres imbriqués ne les reçoivent pas"
   ],
   [
    "Erreur pour Paul",
    "Emplacement d'utilisation non défini"
   ]
  ]
 },
 "keep": "Dynamique = pas d'ajout manuel. Licences par groupe = pas d'imbrication. Licence = emplacement d'utilisation requis."
},
{
 "id": "D1-402",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam collabore avec des partenaires externes via Microsoft Entra B2B. Les exigences :</p><ul><li>seuls les utilisateurs des domaines partner1.com et partner2.com peuvent être invités ; toute invitation vers un autre domaine doit être refusée ;</li><li>seuls les membres du service Achats, qui ont le rôle Guest Inviter, doivent pouvoir inviter ; les autres utilisateurs membres ne doivent pas pouvoir inviter ;</li><li>les invités ne doivent pas pouvoir parcourir l'annuaire : ils doivent seulement voir leurs propres objets ;</li><li>les invités de partner1.com ont déjà fait une MFA dans leur propre locataire ; Fabrikam veut que cette MFA soit acceptée sans en redemander une.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Domaines autorisés :",
   "o": [
    "Restrictions de collaboration externe",
    "Un groupe dynamique par domaine",
    "Une stratégie d'accès conditionnel par domaine partenaire",
    "Des unités administratives par partenaire invité"
   ],
   "a": 0
  },
  {
   "l": "Qui peut inviter :",
   "o": [
    "Personne : invitations par l'API seulement",
    "Membres et invités membres d'un groupe",
    "Tous les membres, y compris les invités",
    "Seuls les rôles d'administrateur spécifiques"
   ],
   "a": 3
  },
  {
   "l": "Accès des invités à l'annuaire :",
   "o": [
    "Accès limité aux groupes",
    "Limité à leurs propres objets",
    "Accès complet en lecture à tous les objets",
    "Mêmes droits que les membres de l'annuaire"
   ],
   "a": 1
  },
  {
   "l": "MFA de partner1.com :",
   "o": [
    "Désactiver la MFA pour tous les invités",
    "Approuver la MFA (accès entrant interlocataire)",
    "Exclure partner1.com de l'accès conditionnel",
    "Créer des comptes membres à la place"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Restrictions de collaboration.</b> Les paramètres de collaboration externe permettent une liste d'autorisation (ou de refus) de domaines pour les invitations.<b>Invitations.</b> Le réglage « Seuls les utilisateurs ayant des rôles d'administrateur spécifiques peuvent inviter » limite les invitations aux rôles comme Guest Inviter.<b>Accès invité.</b> Le niveau le plus restrictif limite les invités aux propriétés et appartenances de leurs propres objets.<b>Accès interlocataire.</b> Les paramètres d'accès entrant d'une organisation peuvent approuver la MFA (et la conformité des appareils) faite dans le locataire d'origine.",
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
    "*Domaines autorisés",
    "Restrictions de collaboration externe"
   ],
   [
    "Qui peut inviter",
    "Seuls les rôles d'administrateur spécifiques"
   ],
   [
    "Accès des invités à l'annuaire",
    "Limité à leurs propres objets"
   ],
   [
    "MFA de partner1.com",
    "Approuver la MFA (accès entrant interlocataire)"
   ]
  ]
 },
 "keep": "Domaines = restrictions de collaboration. Invitations = rôles spécifiques. Invités = leurs objets. MFA du partenaire = approbation entrante."
},
{
 "id": "D1-403",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso déploie la réinitialisation de mot de passe en libre-service (SSPR). Le contexte :</p><ul><li>les comptes sont synchronisés depuis AD DS avec Microsoft Entra Connect ; les licences sont Microsoft Entra ID P1 ;</li><li>dans un premier temps, seul le groupe Pilote-SSPR doit pouvoir utiliser SSPR ;</li><li>les utilisateurs doivent prouver leur identité avec deux méthodes parmi : application Microsoft Authenticator, SMS, questions de sécurité ;</li><li>un mot de passe réinitialisé dans le cloud doit fonctionner immédiatement pour ouvrir une session sur les postes du domaine ;</li><li>un administrateur du support (Helpdesk Administrator) se plaint de ne pas pouvoir utiliser les questions de sécurité.</li></ul><p>Que devez-vous configurer, et qu'est-ce qui explique le problème ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Étendue de SSPR :",
   "o": [
    "Sélectionné : Pilote-SSPR",
    "Tous les utilisateurs, puis exclure",
    "Aucun, puis activer par utilisateur",
    "Unité administrative Pilote"
   ],
   "a": 0
  },
  {
   "l": "Méthodes requises :",
   "o": [
    "2",
    "1",
    "3",
    "4"
   ],
   "a": 0
  },
  {
   "l": "Mot de passe utilisable sur site :",
   "o": [
    "Authentification directe seule",
    "Une GPO de mot de passe",
    "Réécriture du mot de passe",
    "Synchronisation du hachage seule"
   ],
   "a": 2
  },
  {
   "l": "Questions de sécurité refusées :",
   "o": [
    "Il faut au moins 5 questions enregistrées par l'admin",
    "La licence P1 n'inclut pas les questions de sécurité",
    "Stratégie fixe pour les admins",
    "Les questions exigent la réécriture"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Étendue.</b> SSPR peut être activé pour un groupe sélectionné (un seul groupe) avant la généralisation.<b>Méthodes.</b> Le nombre de méthodes requises pour réinitialiser est 1 ou 2.<b>Réécriture.</b> La réécriture du mot de passe (Entra Connect ou Cloud Sync) écrit le nouveau mot de passe dans AD DS.<b>Administrateurs.</b> Les rôles d'administrateur sont soumis à une stratégie à deux méthodes fixée par Microsoft, sans questions de sécurité, quel que soit le paramétrage pour les utilisateurs.",
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
    "*Étendue de SSPR",
    "Sélectionné : Pilote-SSPR"
   ],
   [
    "Méthodes requises",
    "2"
   ],
   [
    "Mot de passe utilisable sur site",
    "Réécriture du mot de passe"
   ],
   [
    "Questions de sécurité refusées",
    "Stratégie fixe pour les admins"
   ]
  ]
 },
 "keep": "Pilote = groupe sélectionné. Méthodes = 1 ou 2. Sur site = réécriture. Admins = stratégie fixe sans questions."
},
{
 "id": "D1-404",
 "dom": 1,
 "type": "hot",
 "stem": "<p>L'équipe RH de Fabrikam vous transmet plusieurs demandes sur les comptes Microsoft Entra ID (cloud uniquement) :</p><ul><li>créer 300 comptes de stagiaires à partir d'un fichier fourni par l'école ;</li><li>le compte de Julie a été supprimé il y a 12 jours par erreur ; il doit être récupéré avec ses appartenances aux groupes ;</li><li>le compte de Marc, qui quitte l'entreprise ce soir, doit être bloqué immédiatement, et ses sessions ouvertes sur ses appareils doivent être invalidées ;</li><li>le compte d'un ancien prestataire, supprimé il y a 45 jours, doit être restauré.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "300 stagiaires :",
   "o": [
    "Création en bloc (CSV)",
    "Une synchronisation Entra Connect",
    "Un groupe dynamique",
    "Invitation en bloc d'invités"
   ],
   "a": 0
  },
  {
   "l": "Compte de Julie :",
   "o": [
    "Ouvrir un ticket auprès du support Microsoft",
    "Le recréer avec le même UPN et les mêmes groupes",
    "Restaurer l'utilisateur supprimé",
    "Impossible après 7 jours"
   ],
   "a": 2
  },
  {
   "l": "Compte de Marc :",
   "o": [
    "Bloquer + révoquer les sessions",
    "Retirer ses licences",
    "Réinitialiser le mot de passe, sans autre action",
    "Supprimer le compte définitivement, sans délai"
   ],
   "a": 0
  },
  {
   "l": "Prestataire supprimé il y a 45 jours :",
   "o": [
    "Restaurer depuis les utilisateurs supprimés",
    "Restaurer avec le rôle Global Administrator",
    "Impossible : délai de 30 jours dépassé",
    "Restaurer avec PowerShell uniquement"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Opérations en bloc.</b> Le portail Entra propose la création en bloc à partir d'un modèle CSV.<b>Suppression réversible.</b> Un utilisateur supprimé reste 30 jours dans « Utilisateurs supprimés » ; la restauration récupère ses attributs et ses appartenances. Au-delà, il est supprimé définitivement.<b>Départ.</b> Bloquer la connexion empêche de nouvelles authentifications ; « Révoquer les sessions » invalide les jetons d'actualisation et les cookies de session existants.",
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
    "*300 stagiaires",
    "Création en bloc (CSV)"
   ],
   [
    "Compte de Julie",
    "Restaurer l'utilisateur supprimé"
   ],
   [
    "Compte de Marc",
    "Bloquer + révoquer les sessions"
   ],
   [
    "Prestataire supprimé il y a 45 jours",
    "Impossible : délai de 30 jours dépassé"
   ]
  ]
 },
 "keep": "En bloc = CSV. Supprimé = 30 jours. Départ = bloquer + révoquer."
},
{
 "id": "D1-405",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso doit attribuer des rôles Azure dans l'abonnement Prod en respectant le principe du moindre privilège :</p><ul><li>l'équipe Réseau doit gérer les réseaux virtuels, NSG et passerelles, mais pas les VM ni les comptes de stockage ;</li><li>l'équipe Exploitation doit démarrer, arrêter et redimensionner les VM, mais ne doit pas pouvoir gérer le réseau virtuel ni le compte de stockage auxquels elles sont connectées ;</li><li>le responsable Sécurité doit pouvoir accorder des rôles Azure aux autres, mais uniquement les rôles Reader et Virtual Machine Contributor, sans pouvoir créer de ressources ;</li><li>l'auditeur externe doit tout voir sans rien modifier.</li></ul><p>Quel rôle intégré devez-vous attribuer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Équipe Réseau :",
   "o": [
    "Network Contributor",
    "Contributor",
    "Virtual Machine Contributor",
    "Owner"
   ],
   "a": 0
  },
  {
   "l": "Équipe Exploitation :",
   "o": [
    "Classic Virtual Machine Contributor",
    "Owner",
    "Virtual Machine Contributor",
    "Contributor"
   ],
   "a": 2
  },
  {
   "l": "Responsable Sécurité :",
   "o": [
    "User Access Administrator sur l'abonnement",
    "Security Admin sur le groupe d'administration",
    "Owner",
    "RBAC Administrator + condition"
   ],
   "a": 3
  },
  {
   "l": "Auditeur :",
   "o": [
    "Reader",
    "Contributor",
    "Security Reader",
    "Monitoring Contributor"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Network Contributor.</b> Gère les ressources réseau, sans accès aux VM ni au stockage.<b>Virtual Machine Contributor.</b> Gère les VM, mais pas le réseau virtuel ni le compte de stockage auxquels elles sont connectées.<b>RBAC Administrator.</b> Le rôle Role Based Access Control Administrator gère les attributions de rôles ; une condition peut limiter les rôles qu'il peut attribuer (et à qui). User Access Administrator ou Owner n'ont pas cette limite ; Owner peut aussi créer des ressources.<b>Reader.</b> Lecture de toutes les ressources de gestion, sans modification.",
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
    "*Équipe Réseau",
    "Network Contributor"
   ],
   [
    "Équipe Exploitation",
    "Virtual Machine Contributor"
   ],
   [
    "Responsable Sécurité",
    "RBAC Administrator + condition"
   ],
   [
    "Auditeur",
    "Reader"
   ]
  ]
 },
 "keep": "Réseau = Network Contributor. VM seules = VM Contributor. Attribuer des rôles limités = RBAC Administrator + condition. Tout voir = Reader."
},
{
 "id": "D1-406",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Vous créez un rôle personnalisé « Opérateur VM » pour l'équipe de garde de Fabrikam. Il doit :</p><ul><li>permettre de lire toutes les ressources, de démarrer, redémarrer et libérer les VM ;</li><li>interdire la suppression des VM, même si une autre partie du rôle l'autorise par un caractère générique ;</li><li>permettre de se connecter aux VM Linux avec le rôle de connexion Entra ID (opération sur les données de la VM) ;</li><li>être attribuable dans les abonnements Prod et Dev et au niveau du groupe d'administration MG-Corp.</li></ul><p>Le JSON suivant est proposé :</p><code>\"Actions\": [\"*/read\", \"Microsoft.Compute/virtualMachines/*\"], \"NotActions\": [\"Microsoft.Compute/virtualMachines/delete\"], \"DataActions\": [\"Microsoft.Compute/virtualMachines/login/action\"], \"AssignableScopes\": [\"/subscriptions/{prod}\", \"/subscriptions/{dev}\", \"/providers/Microsoft.Management/managementGroups/MG-Corp\"]</code><p>Qu'est-ce qui est vrai ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "NotActions sur delete :",
   "o": [
    "Retire delete de ce rôle seulement",
    "Refuse delete, même via un autre rôle",
    "N'a aucun effet avec un caractère générique",
    "Bloque delete pour tout l'abonnement"
   ],
   "a": 0
  },
  {
   "l": "Si l'utilisateur a aussi Contributor :",
   "o": [
    "Il peut supprimer les VM",
    "Les deux rôles s'annulent",
    "Le rôle personnalisé prévaut",
    "Il ne peut pas supprimer les VM"
   ],
   "a": 0
  },
  {
   "l": "AssignableScopes avec MG-Corp :",
   "o": [
    "Accepté seulement si MG-Corp est la racine",
    "Accepté sans aucune restriction de portée",
    "Refusé : deux abonnements au maximum",
    "Refusé (DataActions + MG)"
   ],
   "a": 3
  },
  {
   "l": "Création du rôle :",
   "o": [
    "az role assignment create --role role.json",
    "New-AzRoleDefinition -InputFile role.json",
    "New-AzRoleAssignment -InputFile role.json",
    "Set-AzRoleDefinition -Name role.json"
   ],
   "a": 1
  }
 ],
 "expl": "<b>NotActions.</b> Ce n'est pas un refus : NotActions soustrait des opérations des Actions de ce rôle. Si un autre rôle accorde delete, l'utilisateur peut supprimer. Seule une affectation de refus (deny assignment) bloque.<b>Groupe d'administration.</b> Un rôle personnalisé avec des DataActions ne peut pas avoir de groupe d'administration dans ses AssignableScopes ; et un seul groupe d'administration peut y figurer.<b>Création.</b> New-AzRoleDefinition (ou az role definition create) crée le rôle à partir du JSON ; New-AzRoleAssignment l'attribue.",
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
    "*NotActions sur delete",
    "Retire delete de ce rôle seulement"
   ],
   [
    "Si l'utilisateur a aussi Contributor",
    "Il peut supprimer les VM"
   ],
   [
    "AssignableScopes avec MG-Corp",
    "Refusé (DataActions + MG)"
   ],
   [
    "Création du rôle",
    "New-AzRoleDefinition -InputFile role.json"
   ]
  ]
 },
 "keep": "NotActions ≠ refus. DataActions = pas de groupe d'administration. Créer = New-AzRoleDefinition."
},
{
 "id": "D1-407",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso distingue les rôles Microsoft Entra et les rôles Azure. Plusieurs situations se présentent :</p><ul><li>Léa est Global Administrator dans Entra ID ; elle doit gérer les attributions de rôles dans tous les abonnements, mais ne voit aucun abonnement dans le portail ;</li><li>une fois sa tâche terminée, Léa doit perdre cet accès ;</li><li>Hugo doit réinitialiser les mots de passe des utilisateurs non administrateurs et gérer leurs demandes de support, avec le moins de privilèges ;</li><li>Inès doit pouvoir lire toute la configuration d'Entra ID (paramètres, utilisateurs, stratégies) sans rien modifier.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Accès de Léa aux abonnements :",
   "o": [
    "Lui attribuer Owner sur chaque abonnement à la main",
    "Lui attribuer Privileged Role Administrator",
    "Activer l'élévation d'accès",
    "Rien : actualiser le portail après déconnexion"
   ],
   "a": 2
  },
  {
   "l": "Rôle obtenu et étendue :",
   "o": [
    "Contributor sur tous les abonnements",
    "Owner sur le groupe d'administration racine",
    "Global Reader sur les ressources Azure",
    "User Access Administrator à la racine (/)"
   ],
   "a": 3
  },
  {
   "l": "Hugo :",
   "o": [
    "Authentication Policy Administrator",
    "Global Administrator",
    "Helpdesk Administrator",
    "User Administrator"
   ],
   "a": 2
  },
  {
   "l": "Inès :",
   "o": [
    "Directory Readers",
    "Global Reader",
    "Reader (rôle Azure) sur l'abonnement",
    "Security Reader"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Élévation.</b> Les rôles Entra ne donnent pas d'accès aux ressources Azure. Un Global Administrator peut activer « Gestion de l'accès aux ressources Azure » : il reçoit User Access Administrator à l'étendue racine (/), puis peut s'attribuer d'autres rôles. Il désactive le paramètre ensuite pour retirer cet accès.<b>Helpdesk Administrator.</b> Réinitialise les mots de passe des non-administrateurs (et de certains rôles limités) et gère les demandes de support ; User Administrator a plus de droits (création, groupes…).<b>Global Reader.</b> Lecture de tout ce que peut voir un Global Administrator, sans modification. Directory Readers ne lit que des informations de base de l'annuaire.",
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
    "*Accès de Léa aux abonnements",
    "Activer l'élévation d'accès"
   ],
   [
    "Rôle obtenu et étendue",
    "User Access Administrator à la racine (/)"
   ],
   [
    "Hugo",
    "Helpdesk Administrator"
   ],
   [
    "Inès",
    "Global Reader"
   ]
  ]
 },
 "keep": "Global Admin → ressources Azure = élévation (UAA à la racine). Mots de passe = Helpdesk Admin. Tout lire = Global Reader."
},
{
 "id": "D1-408",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam compte 12 000 utilisateurs répartis en filiales. La filiale Espagne a son propre support informatique, qui doit gérer ses utilisateurs sans toucher aux autres :</p><ul><li>le support espagnol doit réinitialiser les mots de passe et modifier les propriétés des seuls utilisateurs de la filiale ;</li><li>les utilisateurs de la filiale doivent être ajoutés automatiquement à l'étendue de gestion selon l'attribut country = Spain ;</li><li>les comptes du comité de direction espagnol doivent être protégés : même un User Administrator au niveau du locataire ne doit pas pouvoir les modifier, seuls des administrateurs désignés pour eux ;</li><li>le support espagnol doit aussi pouvoir gérer les groupes de la filiale.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Étendue de gestion :",
   "o": [
    "Un groupe d'administration Azure Espagne",
    "Une unité administrative",
    "Un locataire Entra séparé pour l'Espagne",
    "Un groupe de sécurité"
   ],
   "a": 1
  },
  {
   "l": "Ajout automatique :",
   "o": [
    "Un script Microsoft Graph planifié chaque nuit",
    "Appartenance dynamique de l'unité",
    "Une règle d'accès conditionnel",
    "Un groupe dynamique imbriqué dans l'unité"
   ],
   "a": 1
  },
  {
   "l": "Comité de direction :",
   "o": [
    "Un groupe assignable à un rôle pour le comité",
    "Un verrou sur les comptes",
    "Des comptes invités pour le comité de direction",
    "Unité de gestion restreinte"
   ],
   "a": 3
  },
  {
   "l": "Rôles du support espagnol :",
   "o": [
    "Owner sur le groupe d'administration Espagne",
    "Rôles étendus à l'unité",
    "Global Administrator étendu à l'unité Espagne",
    "Helpdesk Administrator"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Unité administrative.</b> Elle limite l'étendue de rôles Entra à un sous-ensemble d'utilisateurs, de groupes ou d'appareils. Les groupes d'administration concernent les abonnements Azure.<b>Appartenance dynamique.</b> Une unité administrative peut avoir une règle dynamique (licence P1).<b>Gestion restreinte.</b> Dans une unité de gestion restreinte, seuls les administrateurs dont le rôle est attribué à l'étendue de l'unité peuvent modifier ses objets ; les administrateurs du locataire ne le peuvent pas (sauf exceptions comme Privileged Authentication Administrator).<b>Rôles étendus.</b> User Administrator et Groups Administrator peuvent être attribués à l'étendue d'une unité ; Global Administrator ne peut pas l'être.",
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
    "*Étendue de gestion",
    "Une unité administrative"
   ],
   [
    "Ajout automatique",
    "Appartenance dynamique de l'unité"
   ],
   [
    "Comité de direction",
    "Unité de gestion restreinte"
   ],
   [
    "Rôles du support espagnol",
    "Rôles étendus à l'unité"
   ]
  ]
 },
 "keep": "Sous-ensemble d'utilisateurs = unité administrative (dynamique possible). Protégé du locataire = gestion restreinte."
},
{
 "id": "D1-409",
 "dom": 1,
 "type": "hot",
 "stem": "<p>L'équipe gouvernance de Contoso déploie Azure Policy sur le groupe d'administration MG-Prod. Les exigences :</p><ul><li>les comptes de stockage dont l'accès public aux blobs est activé doivent être signalés, sans bloquer leur création ;</li><li>la création de VM d'une taille de la série M doit être bloquée ;</li><li>chaque VM doit avoir des paramètres de diagnostic envoyés à l'espace de travail LAW-Prod ; les VM existantes doivent aussi être corrigées ;</li><li>l'abonnement Sandbox, qui fait partie de MG-Prod, doit être dispensé de la règle sur les tailles pendant 30 jours, avec une trace de la raison.</li></ul><p>Quel effet ou quelle fonctionnalité devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Stockage public :",
   "o": [
    "Audit",
    "Deny",
    "Append",
    "Disabled"
   ],
   "a": 0
  },
  {
   "l": "Série M :",
   "o": [
    "AuditIfNotExists",
    "Deny",
    "Modify",
    "Audit"
   ],
   "a": 1
  },
  {
   "l": "Diagnostics des VM :",
   "o": [
    "AuditIfNotExists, sans tâche de correction",
    "Append + identité managée",
    "Modify + verrou CanNotDelete sur les VM",
    "DeployIfNotExists + correction"
   ],
   "a": 3
  },
  {
   "l": "Sandbox :",
   "o": [
    "Supprimer l'attribution",
    "Exemption (Waiver, 30 jours)",
    "Exclusion permanente de l'abonnement dans l'attribution",
    "Mode d'application désactivé sur l'attribution"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Audit / Deny.</b> Audit signale les ressources non conformes dans le journal d'activité et l'état de conformité ; Deny bloque la requête de création ou de modification.<b>DeployIfNotExists.</b> Il déploie la ressource liée si elle manque (ici le paramètre de diagnostic) à l'aide d'une identité managée ; les ressources existantes sont corrigées par une tâche de correction.<b>Exemption.</b> Elle dispense une étendue d'une attribution, avec une catégorie (Waiver ou Mitigated), une description et une date d'expiration. Une exclusion n'a ni catégorie ni expiration.",
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
    "*Stockage public",
    "Audit"
   ],
   [
    "Série M",
    "Deny"
   ],
   [
    "Diagnostics des VM",
    "DeployIfNotExists + correction"
   ],
   [
    "Sandbox",
    "Exemption (Waiver, 30 jours)"
   ]
  ]
 },
 "keep": "Signaler = Audit. Bloquer = Deny. Déployer + existants = DeployIfNotExists + correction. Dispense datée = exemption."
},
{
 "id": "D1-410",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam veut que chaque ressource porte les étiquettes CostCenter et Environment, utilisées dans Cost Management :</p><ul><li>chaque groupe de ressources porte déjà ces deux étiquettes ; les ressources doivent les recevoir automatiquement depuis leur groupe si elles ne les ont pas ;</li><li>4 000 ressources existantes n'ont pas d'étiquettes ;</li><li>l'équipe veut aussi empêcher la création d'un groupe de ressources sans l'étiquette CostCenter ;</li><li>l'équipe finance demande pourquoi les coûts du mois dernier n'apparaissent pas sous l'étiquette CostCenter, alors que les étiquettes ont été ajoutées ce matin.</li></ul><p>Que devez-vous configurer, et qu'est-ce qui explique la situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Héritage depuis le groupe :",
   "o": [
    "Rien : les étiquettes sont héritées par défaut",
    "Stratégie Modify d'héritage",
    "Un verrou sur chaque groupe",
    "Une stratégie Deny sur les ressources sans étiquette"
   ],
   "a": 1
  },
  {
   "l": "4 000 ressources existantes :",
   "o": [
    "Redéployer chaque ressource",
    "Un verrou ReadOnly",
    "Rien : la stratégie s'applique seule",
    "Une tâche de correction"
   ],
   "a": 3
  },
  {
   "l": "Groupe sans CostCenter :",
   "o": [
    "Audit sur les groupes sans étiquette CostCenter",
    "Exiger l'étiquette (Deny)",
    "Une exemption sur le groupe",
    "Hériter l'étiquette de l'abonnement (Modify)"
   ],
   "a": 1
  },
  {
   "l": "Coûts du mois dernier :",
   "o": [
    "Les étiquettes ne sont pas rétroactives",
    "Il faut attendre 72 heures",
    "Il faut une licence P2",
    "Cost Management ignore les étiquettes"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Héritage.</b> Les ressources n'héritent pas des étiquettes de leur groupe par défaut. La stratégie intégrée « Hériter une étiquette du groupe de ressources si elle est manquante » utilise l'effet Modify.<b>Correction.</b> Modify s'applique aux créations et mises à jour ; les ressources existantes sont corrigées par une tâche de correction (avec l'identité managée de l'attribution).<b>Deny.</b> « Exiger une étiquette sur les groupes de ressources » bloque la création d'un groupe sans l'étiquette.<b>Coûts.</b> Les étiquettes s'appliquent aux données d'utilisation à partir du moment où elles sont posées ; les coûts passés ne sont pas réétiquetés.",
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
    "*Héritage depuis le groupe",
    "Stratégie Modify d'héritage"
   ],
   [
    "4 000 ressources existantes",
    "Une tâche de correction"
   ],
   [
    "Groupe sans CostCenter",
    "Exiger l'étiquette (Deny)"
   ],
   [
    "Coûts du mois dernier",
    "Les étiquettes ne sont pas rétroactives"
   ]
  ]
 },
 "keep": "Héritage = Modify (pas par défaut). Existants = correction. Groupe sans étiquette = Deny. Étiquettes non rétroactives."
}
);
