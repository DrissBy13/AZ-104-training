/* Domaine 1 : Identités et gouvernance */
AZ.questions.push(
{
 "id": "D1-001",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous disposez d'un abonnement Azure qui contient un groupe de ressources nommé RG1. RG1 contient des machines virtuelles, des réseaux virtuels et des comptes de stockage.</p><p>User1 doit pouvoir créer, démarrer, arrêter et supprimer les machines virtuelles de RG1. User1 ne doit pas pouvoir gérer les réseaux virtuels ni les comptes de stockage.</p><p>La solution doit respecter le principe du privilège minimum.</p><p>Quel rôle devez-vous attribuer à User1, et à quelle étendue ?</p>",
 "opts": [
  "Contributeur sur RG1",
  "Contributeur de machines virtuelles sur RG1",
  "Propriétaire sur RG1",
  "Contributeur de machines virtuelles sur l'abonnement"
 ],
 "ans": 1,
 "expl": "Le rôle intégré <b>Contributeur de machines virtuelles</b> permet de gérer les VM, mais pas les réseaux virtuels ni les comptes de stockage auxquels elles sont reliées, ni les accès. Posé sur <b>RG1</b>, il ne vaut que pour ce groupe. Contributeur sur RG1 donne la main sur tout le groupe ; Propriétaire ajoute la gestion des droits ; sur l'abonnement, l'étendue est trop large."
},
{
 "id": "D1-002",
 "dom": 1,
 "type": "yngrid",
 "docs": [
  {
   "t": "Hiérarchie",
   "h": "<p>Votre environnement Azure est organisé comme suit :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Objet</th><th>Type</th><th>Parent</th></tr><tr><td>MG1</td><td>Groupe d'administration</td><td>Groupe d'administration racine</td></tr><tr><td>Sub1</td><td>Abonnement</td><td>MG1</td></tr><tr><td>Sub2</td><td>Abonnement</td><td>MG1</td></tr><tr><td>RG1</td><td>Groupe de ressources</td><td>Sub1</td></tr><tr><td>RG2</td><td>Groupe de ressources</td><td>Sub1</td></tr></table></div><p>Attributions de rôles :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur</td><td>MG1</td></tr><tr><td>User1</td><td>Contributeur</td><td>RG1</td></tr></table></div>"
  }
 ],
 "stem": "<p>Vous disposez de l'environnement Azure présenté dans le document Hiérarchie (cliquez sur l'onglet <b>Hiérarchie</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si l'affirmation est vraie. Sinon, sélectionnez Non.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
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
 "expl": "Les rôles descendent et s'additionnent. Sur RG1, User1 a Lecteur (hérité de MG1) + Contributeur : il peut créer. Sur Sub1, il n'a que Lecteur : créer un groupe de ressources est une écriture au niveau de l'abonnement, refusée. Sub2 est sous MG1 : le Lecteur hérité lui permet d'en afficher les ressources."
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
 "expl": "<b>Verrou</b> : empêche la suppression, même par un Propriétaire. <b>Azure Policy</b> : impose des règles à tous (ex. emplacements autorisés, effet Deny). <b>Étiquette</b> : classe les ressources pour découper les coûts. <b>RBAC</b> : donne des droits d'action à des personnes. <b>Budget</b> : prévient selon le coût réel ou prévu, sans rien bloquer."
},
{
 "id": "D1-004",
 "dom": 1,
 "type": "single",
 "docs": [
  {
   "t": "Role1",
   "h": "<p>Définition du rôle personnalisé Role1 :</p><pre class=\"code\">{\n  \"Name\": \"Role1\",\n  \"IsCustom\": true,\n  \"Actions\": [\n    \"Microsoft.Compute/virtualMachines/read\",\n    \"Microsoft.Compute/virtualMachines/start/action\",\n    \"Microsoft.Compute/virtualMachines/restart/action\"\n  ],\n  \"NotActions\": [],\n  \"DataActions\": [],\n  \"AssignableScopes\": [ \"/subscriptions/Sub1\" ]\n}</pre>"
  }
 ],
 "stem": "<p>Vous disposez d'un abonnement Azure nommé Sub1 qui contient un groupe de ressources nommé RG1.</p><p>Vous créez un rôle personnalisé nommé Role1, comme indiqué dans le document Role1 (cliquez sur l'onglet <b>Role1</b>). Vous attribuez Role1 à User1 sur RG1.</p><p>Quelles opérations User1 peut-il effectuer ?</p>",
 "opts": [
  "Démarrer et redémarrer les machines virtuelles de RG1, sans pouvoir les arrêter",
  "Démarrer, redémarrer et arrêter (libérer) les machines virtuelles de RG1",
  "Créer des machines virtuelles dans RG1",
  "Démarrer les machines virtuelles de tous les groupes de ressources de Sub1"
 ],
 "ans": 0,
 "expl": "Le rôle n'autorise que <code>read</code>, <code>start/action</code> et <code>restart/action</code>. Arrêter ou libérer demande <code>powerOff/action</code> ou <code>deallocate/action</code> ; créer demande <code>write</code>. L'attribution est faite sur RG1 : elle ne s'étend pas aux autres groupes de Sub1. AssignableScopes dit seulement <b>où</b> le rôle peut être attribué."
},
{
 "id": "D1-005",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous disposez d'un locataire Microsoft Entra nommé contoso.com. Actuellement, tous les utilisateurs peuvent inviter des utilisateurs externes.</p><p>Vous devez vous assurer que seuls les utilisateurs ayant les rôles Inviteur d'invités, Administrateur d'utilisateurs ou Administrateur général peuvent inviter des utilisateurs invités.</p><p>Comment devez-vous configurer les paramètres ? Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
 "expl": "Dans <b>Entra ID → Identités externes → Paramètres de collaboration externe</b>, l'option « Seuls les utilisateurs affectés à des rôles d'administrateur spécifiques » limite l'invitation aux rôles Inviteur d'invités, Administrateur d'utilisateurs et Administrateur général. La 2ᵉ option laisse encore inviter tous les membres ; la dernière bloque même les administrateurs."
},
{
 "id": "D1-006",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous essayez d'attribuer une licence Microsoft 365 à un nouvel utilisateur nommé User5. L'attribution échoue.</p><p>Quelle propriété de User5 devez-vous renseigner ?</p>",
 "opts": [
  "Service",
  "Fonction",
  "Emplacement d'utilisation",
  "Responsable"
 ],
 "ans": 2,
 "expl": "Une licence ne peut être attribuée qu'à un utilisateur dont l'<b>emplacement d'utilisation</b> est renseigné : il détermine quels services sont disponibles dans le pays. Les autres propriétés sont descriptives."
},
{
 "id": "D1-007",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez empêcher la suppression accidentelle de ressources à l'aide de verrous de ressources.</p><p>À quelles deux étendues pouvez-vous appliquer un verrou ? Chaque réponse correcte présente une solution complète.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Un abonnement",
  "Un groupe d'administration",
  "Un groupe de ressources",
  "Le locataire Microsoft Entra"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "Un verrou se pose sur un <b>abonnement</b>, un <b>groupe de ressources</b> ou une ressource, et il est hérité vers le bas. Pas sur un groupe d'administration ni sur le locataire."
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
 "expl": "La stratégie descend de MG1 vers Sub1 et ses groupes, <b>sauf</b> RG-Test qui est exclu : la création y réussit. Dans RG-Prod, l'effet Deny bloque la création. L'existant n'est jamais supprimé ni arrêté : VM9 apparaît <b>non conforme</b>."
},
{
 "id": "D1-009",
 "dom": 1,
 "type": "single",
 "stem": "<p>Admin1 est Administrateur général du locataire Microsoft Entra. Admin1 ne voit aucun abonnement Azure dans le portail.</p><p>Admin1 doit pouvoir attribuer des rôles Azure dans tous les abonnements du locataire.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Attribuer à Admin1 le rôle Administrateur d'utilisateurs",
  "Activer la Gestion de l'accès pour les ressources Azure dans les propriétés de Microsoft Entra ID",
  "Créer un groupe d'administration et y ajouter Admin1",
  "Attribuer à Admin1 une licence Microsoft Entra ID P2"
 ],
 "ans": 1,
 "expl": "Rôles Entra et rôles Azure sont séparés. Dans <b>Entra ID → Propriétés → Gestion de l'accès pour les ressources Azure</b>, l'Administrateur général s'<b>élève</b> : il reçoit Administrateur de l'accès utilisateur à la racine et peut attribuer des rôles partout."
},
{
 "id": "D1-010",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez être averti par e-mail lorsque le coût <b>prévu</b> du groupe de ressources RG1 pour le mois en cours dépasse 80 % de 1 000 €.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une recommandation Azure Advisor",
  "Une Azure Policy avec l'effet Audit",
  "Un budget sur RG1 avec une alerte basée sur le coût prévu",
  "Une alerte de métrique sur RG1"
 ],
 "ans": 2,
 "expl": "Un <b>budget</b> Cost Management peut avoir des alertes sur le coût réel ou sur le coût <b>prévu</b>. Advisor recommande, Policy contrôle la conformité, une alerte de métrique surveille des chiffres techniques."
}
);
