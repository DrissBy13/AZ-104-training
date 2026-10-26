/* Domaine 1 : identités et gouvernance (lot C : D1-061 à D1-110) */
AZ.questions.push(
{
 "id": "D1-061",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous créez un groupe à appartenance dynamique. La règle doit inclure tous les utilisateurs dont le service est <b>Ventes</b> ou <b>Marketing</b>.</p><p>Quelle règle devez-vous utiliser ?</p>",
 "opts": [
  "(user.department -in [\"Ventes\",\"Marketing\"])",
  "(user.department -eq \"Ventes\") -and (user.department -eq \"Marketing\")",
  "(user.department -match \"Ventes\") -and (user.jobTitle -eq \"Marketing\")",
  "(user.department -contains \"Ventes,Marketing\")"
 ],
 "ans": 0,
 "expl": "<p>L'opérateur <b>-in</b> teste si la valeur fait partie d'une liste : <code>user.department -in [\"Ventes\",\"Marketing\"]</code>. On aurait aussi pu écrire deux conditions reliées par <b>-or</b>.</p><ul><li>Avec <b>-and</b>, le service devrait valoir Ventes et Marketing en même temps : aucun utilisateur ne correspond.</li><li><b>-contains</b> cherche la chaîne « Ventes,Marketing » dans l'attribut : aucun service ne la contient.</li><li>La dernière règle mélange le service et le poste, et exige les deux.</li></ul>"
},
{
 "id": "D1-062",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre locataire Microsoft Entra n'a que la licence <b>Microsoft Entra ID Free</b>. Vous essayez de créer un groupe à appartenance dynamique, mais l'option est grisée.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Attribuer le rôle Administrateur de groupes à votre compte",
  "Acquérir des licences Microsoft Entra ID P1",
  "Créer un groupe Microsoft 365 au lieu d'un groupe de sécurité",
  "Activer la réinitialisation de mot de passe en libre-service"
 ],
 "ans": 1,
 "expl": "<p>Les groupes dynamiques demandent <b>Microsoft Entra ID P1</b> (ou P2, ou une offre qui l'inclut). Chaque utilisateur membre d'un groupe dynamique doit être couvert par une licence.</p><p>Le type de groupe (sécurité ou Microsoft 365) ne change rien à cette exigence. SSPR n'a aucun lien. Et un rôle d'administrateur ne remplace pas une licence manquante.</p>"
},
{
 "id": "D1-063",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un groupe Microsoft 365 nommé Projet-X a été supprimé il y a 12 jours.</p><p>Pouvez-vous le restaurer ?</p>",
 "opts": [
  "Non, car un groupe ne peut être restauré que dans les 7 jours",
  "Oui, mais seulement s'il s'agissait d'un groupe de sécurité",
  "Oui, car les groupes Microsoft 365 restent 30 jours dans Groupes supprimés",
  "Non, les groupes sont supprimés définitivement tout de suite"
 ],
 "ans": 2,
 "expl": "<p>Les groupes <b>Microsoft 365</b> supprimés restent <b>30 jours</b> dans <b>Groupes supprimés</b> et peuvent être restaurés avec leurs membres et leur contenu (boîte aux lettres, site SharePoint, équipe).</p><p>À l'inverse, un <b>groupe de sécurité</b> supprimé est supprimé définitivement tout de suite : c'est un piège classique.</p>"
},
{
 "id": "D1-064",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les groupes Microsoft 365 inutilisés s'accumulent dans votre locataire. Vous devez faire en sorte que chaque groupe soit supprimé après 180 jours, sauf si un propriétaire le renouvelle.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une stratégie Azure Policy avec l'effet Deny",
  "Une stratégie de nommage des groupes",
  "Une révision d'accès sur chaque groupe",
  "Une stratégie d'expiration des groupes"
 ],
 "ans": 3,
 "expl": "<p>La <b>stratégie d'expiration</b> (Groupes > Expiration) fixe une durée de vie pour les groupes Microsoft 365. Les propriétaires sont prévenus par e-mail avant l'échéance et peuvent renouveler le groupe ; un groupe actif est même renouvelé automatiquement.</p><p>La stratégie de nommage impose un préfixe ou un suffixe. Azure Policy ne gère pas les groupes Entra. Une révision d'accès fait vérifier les membres, elle ne supprime pas le groupe.</p>"
},
{
 "id": "D1-065",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez créer 150 utilisateurs <b>membres</b> dans Microsoft Entra ID à partir d'une liste fournie par les RH.</p><p>Quelles <b>deux</b> méthodes pouvez-vous utiliser ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "L'opération Inviter des utilisateurs en bloc",
  "Un script PowerShell Microsoft Graph avec New-MgUser",
  "L'opération Créer des utilisateurs en bloc du portail, avec le modèle CSV",
  "Une stratégie Azure Policy avec l'effet DeployIfNotExists"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<ul><li><b>Créer des utilisateurs en bloc : oui.</b> On télécharge le modèle CSV, on le remplit (nom, UPN, mot de passe initial…) et on l'importe.</li><li><b>New-MgUser : oui.</b> Le module PowerShell Microsoft Graph permet de boucler sur un fichier CSV pour créer les comptes.</li><li><b>Inviter en bloc : non.</b> Cette opération crée des <b>invités</b>, pas des membres.</li><li><b>Azure Policy : non.</b> Elle ne crée pas d'utilisateurs Entra.</li></ul>"
},
{
 "id": "D1-066",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un invité nommé partenaire@fabrikam.com a accepté son invitation. Il doit maintenant pouvoir gérer les machines virtuelles du groupe de ressources RG-Projet.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Attribuer à l'invité le rôle Contributeur de machines virtuelles sur RG-Projet",
  "Convertir l'invité en membre avant toute attribution",
  "Attribuer à l'invité une licence Microsoft Entra ID P2",
  "Ajouter fabrikam.com comme domaine personnalisé"
 ],
 "ans": 0,
 "expl": "<p>Un utilisateur invité est un principal de sécurité comme un autre : on peut lui <b>attribuer des rôles Azure</b> directement. Contributeur de machines virtuelles sur RG-Projet suffit.</p><p>Il n'est pas nécessaire de le convertir en membre. Ajouter fabrikam.com comme domaine personnalisé est impossible (ce domaine appartient à une autre organisation). Aucune licence P2 n'est requise pour un rôle Azure.</p>"
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
 "expl": "<ul><li><b>Réécriture : Oui.</b> La <b>réécriture du mot de passe</b> (password writeback) renvoie le nouveau mot de passe vers l'AD local. Elle se configure dans Microsoft Entra Connect (ou Cloud Sync) et demande au moins P1.</li><li><b>Questions de sécurité pour les admins : Non.</b> Les administrateurs suivent une stratégie à deux méthodes fortes ; les questions de sécurité ne leur sont pas proposées.</li><li><b>Inscription : Oui.</b> L'utilisateur doit enregistrer ses méthodes (téléphone, application, e-mail…) avant de pouvoir réinitialiser. On peut l'y obliger à la connexion.</li></ul>"
},
{
 "id": "D1-068",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous gérez l'unité administrative AU-Lille. Les administrateurs de AU-Lille ne doivent pouvoir gérer certains comptes sensibles qu'au sein de l'unité, et les administrateurs du locataire ne doivent <b>pas</b> pouvoir modifier ces comptes.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un groupe de sécurité attribuable à un rôle",
  "Une unité administrative de gestion restreinte",
  "Un verrou de ressource en lecture seule",
  "Une affectation de refus Azure"
 ],
 "ans": 1,
 "expl": "<p>Une <b>unité administrative de gestion restreinte</b> protège ses objets : seuls les administrateurs attribués <b>sur cette unité</b> peuvent les modifier. Même un administrateur d'utilisateurs au niveau du locataire ne peut plus les gérer.</p><p>Un groupe attribuable à un rôle sert à attribuer des rôles Entra à un groupe. Les verrous et les affectations de refus concernent les ressources Azure, pas les objets de l'annuaire.</p>"
},
{
 "id": "D1-069",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez attribuer le rôle Microsoft Entra <b>Administrateur du support technique</b> à un groupe plutôt qu'à chaque utilisateur.</p><p>Quelle propriété le groupe doit-il avoir ?</p>",
 "opts": [
  "Contenir uniquement des invités",
  "Avoir une appartenance dynamique",
  "Avoir l'option « Des rôles Microsoft Entra peuvent être attribués au groupe » activée à sa création",
  "Être un groupe Microsoft 365"
 ],
 "ans": 2,
 "expl": "<p>Seuls les groupes créés avec l'option <b>« Des rôles Microsoft Entra peuvent être attribués au groupe »</b> (isAssignableToRole) peuvent recevoir un rôle Entra. Cette option ne se choisit qu'à la création et ne peut plus être modifiée.</p><p>Ces groupes ne peuvent pas avoir d'appartenance dynamique, pour éviter qu'un simple changement d'attribut donne un rôle d'administrateur. Le type peut être sécurité ou Microsoft 365.</p>"
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
 "expl": "<ul><li><b>Redémarrer : Oui.</b> L'action <code>restart/action</code> figure dans Actions, et RG1 fait partie de Sub1.</li><li><b>Arrêter et libérer : Non.</b> Il faudrait <code>deallocate/action</code> (ou <code>powerOff/action</code> pour un simple arrêt), absente du rôle.</li><li><b>Sub2 : Non.</b> AssignableScopes ne contient que Sub1 ; le rôle n'est même pas visible dans Sub2.</li></ul>"
},
{
 "id": "D1-071",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un rôle personnalisé contient <code>\"Actions\": [\"Microsoft.Storage/*\"]</code> et <code>\"NotActions\": [\"Microsoft.Storage/storageAccounts/delete\"]</code>. User9 reçoit ce rôle sur RG1, ainsi que le rôle intégré <b>Contributeur</b> sur RG1.</p><p>User9 peut-il supprimer un compte de stockage de RG1 ?</p>",
 "opts": [
  "Non, car NotActions interdit la suppression",
  "Non, car le rôle le plus restrictif l'emporte",
  "Oui, mais seulement après 24 heures",
  "Oui, car Contributeur accorde la suppression"
 ],
 "ans": 3,
 "expl": "<p><b>NotActions n'est pas un refus</b> : il retire seulement des actions du rôle où il est écrit. Si un autre rôle accorde l'action, elle est autorisée. Contributeur accorde <code>*</code>, donc la suppression.</p><p>Les autorisations Azure s'additionnent. Seule une affectation de refus bloquerait l'action malgré Contributeur.</p>"
},
{
 "id": "D1-072",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous voulez créer un rôle personnalisé à partir du rôle intégré <b>Contributeur de machines virtuelles</b>, en retirant le droit de supprimer des VM.</p><p>Quelle est la méthode la plus rapide dans le portail ?</p>",
 "opts": [
  "Cloner le rôle intégré, puis retirer l'autorisation dans l'éditeur",
  "Modifier directement le rôle intégré",
  "Créer un rôle vide et ajouter les autorisations une par une",
  "Attribuer le rôle intégré avec une condition de refus"
 ],
 "ans": 0,
 "expl": "<p>Dans <b>Contrôle d'accès (IAM) > Rôles</b>, on peut <b>cloner</b> un rôle existant : le nouveau rôle reprend ses autorisations, et on ajoute <code>Microsoft.Compute/virtualMachines/delete</code> dans les autorisations exclues (NotActions).</p><p>Les rôles <b>intégrés</b> ne sont pas modifiables. Partir d'un rôle vide marche mais prend beaucoup plus de temps. Les conditions d'attribution ne s'appliquent qu'à certaines actions de données de stockage et ne bloquent pas la suppression d'une VM.</p>"
},
{
 "id": "D1-073",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez savoir quels rôles Azure User10 possède sur le groupe de ressources RG2, y compris ceux hérités de l'abonnement et des groupes dont il est membre.</p><p>Que devez-vous utiliser dans le portail ?</p>",
 "opts": [
  "RG2 > Journal d'activité",
  "RG2 > Contrôle d'accès (IAM) > Vérifier l'accès",
  "Azure Advisor > Sécurité",
  "Microsoft Entra ID > Rôles et administrateurs"
 ],
 "ans": 1,
 "expl": "<p><b>Vérifier l'accès</b> (Check access) dans l'onglet IAM affiche les attributions effectives d'un utilisateur, d'un groupe ou d'une identité sur cette étendue, y compris celles héritées et celles reçues par les groupes.</p><p>« Rôles et administrateurs » liste les rôles <b>Microsoft Entra</b>, pas les rôles Azure. Le journal d'activité montre les opérations. Advisor donne des recommandations.</p>"
},
{
 "id": "D1-074",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez attribuer le rôle Azure intégré adapté à chaque besoin. La solution doit respecter le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "srcs": [
  "Propriétaire",
  "Contributeur",
  "Lecteur",
  "Contributeur de réseau",
  "Contributeur de compte de stockage"
 ],
 "tgtHead": [
  "Besoin",
  "Rôle"
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
 "expl": "<ul><li><b>Contributeur de réseau</b> : gère les ressources réseau, sans accès aux autres types de ressources.</li><li><b>Propriétaire</b> : gère tout <i>et</i> attribue des rôles. Contributeur ne pourrait pas donner d'accès.</li><li><b>Lecteur</b> : consultation seule.</li><li><b>Contributeur de compte de stockage</b> : gère les comptes de stockage, y compris les clés d'accès, sans les autres ressources.</li></ul>"
},
{
 "id": "D1-075",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez autoriser les membres du groupe Exploitation à attribuer uniquement le rôle <b>Lecteur des données blob du stockage</b>, et uniquement à des identités managées, sur storage1.</p><p>Quelle solution respecte le principe du privilège minimum ?</p>",
 "opts": [
  "Leur attribuer Contributeur de compte de stockage sur storage1",
  "Leur attribuer Administrateur de l'accès utilisateur sur l'abonnement",
  "Leur attribuer Administrateur du contrôle d'accès en fonction du rôle avec une condition qui limite les rôles et les types de principaux",
  "Leur attribuer Propriétaire sur storage1"
 ],
 "ans": 2,
 "expl": "<p>Le rôle <b>Administrateur du contrôle d'accès en fonction du rôle</b> (Role Based Access Control Administrator) permet d'attribuer des rôles, et accepte des <b>conditions</b> de délégation : quels rôles peuvent être attribués, et à quels types de principaux.</p><p>Propriétaire et Administrateur de l'accès utilisateur permettraient d'attribuer n'importe quel rôle. Contributeur de compte de stockage ne permet pas d'attribuer de rôle.</p>"
},
{
 "id": "D1-076",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous attribuez sur l'abonnement Sub1 la stratégie intégrée <b>Emplacements autorisés</b> avec la seule valeur France Central. Un administrateur essaie de créer un groupe de ressources en West Europe.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "La création est refusée",
  "Le groupe de ressources est créé en France Central à la place",
  "La création réussit et le groupe est marqué non conforme",
  "La création réussit, car cette stratégie ne s'applique pas aux groupes de ressources"
 ],
 "ans": 3,
 "expl": "<p>La stratégie <b>Emplacements autorisés</b> exclut les groupes de ressources : elle ne s'applique qu'aux ressources. Pour contrôler la région des groupes de ressources, il existe une stratégie distincte : <b>Emplacements autorisés pour les groupes de ressources</b>.</p><p>Azure Policy ne change jamais la région d'une ressource à votre place.</p>"
},
{
 "id": "D1-077",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous venez d'attribuer une stratégie Azure Policy en mode Audit sur un abonnement. Vous voulez connaître immédiatement l'état de conformité des ressources existantes, sans attendre le cycle d'évaluation normal.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Lancer une analyse de conformité à la demande",
  "Redémarrer les ressources concernées",
  "Supprimer et recréer l'affectation",
  "Créer une tâche de correction"
 ],
 "ans": 0,
 "expl": "<p>Une <b>analyse à la demande</b> se lance avec <code>az policy state trigger-scan</code> ou <code>Start-AzPolicyComplianceScan</code>. Sinon, l'évaluation complète a lieu toutes les 24 heures, et une nouvelle affectation est évaluée dans les minutes qui suivent sa création.</p><p>Recréer l'affectation ne fait pas mieux. Une tâche de correction modifie des ressources (Modify ou DeployIfNotExists), elle ne sert pas à une simple évaluation en Audit. Redémarrer les ressources n'a aucun effet.</p>"
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
 "expl": "<ul><li><b>RG-Lab non conforme : Non.</b> Une ressource exclue n'est pas évaluée du tout ; elle n'apparaît pas dans les résultats.</li><li><b>Exemption : Oui.</b> Une exemption (catégorie Dérogation ou Atténué) garde une trace de la raison et peut avoir une date d'expiration. La ressource apparaît alors comme exemptée.</li><li><b>Nouveau groupe : Oui.</b> L'affectation porte sur tout Sub1, sauf les exclusions explicites.</li></ul>"
},
{
 "id": "D1-079",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les machines virtuelles de l'abonnement Sub1 doivent toutes envoyer leurs journaux vers l'espace de travail Log Analytics WS1. Les nouvelles VM doivent être configurées automatiquement.</p><p>Quel effet doit avoir la stratégie que vous attribuez ?</p>",
 "opts": [
  "Audit",
  "DeployIfNotExists",
  "Append",
  "Deny"
 ],
 "ans": 1,
 "expl": "<p><b>DeployIfNotExists</b> vérifie qu'une ressource liée existe (ici, l'agent ou le paramètre de diagnostic) et la déploie sinon, à l'aide de l'identité managée de l'affectation.</p><p>Audit ne fait que signaler. Deny bloquerait la création des VM au lieu de les configurer. Append ajoute des champs à la requête de création, mais ne peut pas déployer d'extension.</p>"
},
{
 "id": "D1-080",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une stratégie attribuée à Sub1 a l'effet <b>Audit</b>. Vous voulez qu'elle bloque désormais les créations non conformes, sans créer une nouvelle définition.</p><p>Quelle est la bonne pratique ?</p>",
 "opts": [
  "Ajouter un verrou ReadOnly sur Sub1",
  "Créer une tâche de correction",
  "Paramétrer l'effet dans la définition, puis modifier le paramètre dans l'affectation",
  "Ajouter l'abonnement aux exclusions"
 ],
 "ans": 2,
 "expl": "<p>Beaucoup de stratégies intégrées ont un paramètre <b>effect</b> (Audit, Deny, Disabled…). On choisit la valeur dans l'<b>affectation</b> : on peut commencer en Audit pour mesurer l'impact, puis passer à Deny sans toucher à la définition.</p><p>Un verrou bloque toutes les modifications, pas seulement les non conformes. Une tâche de correction ne bloque rien. Une exclusion retirerait l'abonnement de l'évaluation.</p>"
},
{
 "id": "D1-081",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez appliquer les étiquettes <b>Environnement</b> et <b>Service</b> à toutes les ressources de l'abonnement Sub1, et rejeter toute ressource créée sans l'étiquette Environnement.</p><p>Quelles <b>deux</b> stratégies intégrées devez-vous attribuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Emplacements autorisés",
  "Exiger une étiquette sur les ressources (Environnement)",
  "Référence SKU de machine virtuelle autorisée",
  "Hériter d'une étiquette du groupe de ressources si elle est manquante (Service)"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>Exiger une étiquette : oui.</b> Effet Deny : toute ressource créée sans l'étiquette Environnement est refusée.</li><li><b>Hériter d'une étiquette du groupe de ressources : oui.</b> Effet Modify : l'étiquette Service est copiée depuis le groupe de ressources, sans bloquer.</li><li><b>Emplacements autorisés</b> et <b>SKU de VM autorisées</b> contrôlent la région et la taille, pas les étiquettes.</li></ul>"
},
{
 "id": "D1-082",
 "dom": 1,
 "type": "single",
 "stem": "<p>Le groupe de ressources RG1 porte l'étiquette Service=Finance. Vous y créez le compte de stockage storage2, sans étiquette. Aucune stratégie n'est attribuée.</p><p>Quelles étiquettes storage2 possède-t-il ?</p>",
 "opts": [
  "Service=Finance",
  "Service=Finance uniquement dans le rapport de coûts",
  "Service=RG1",
  "Aucune"
 ],
 "ans": 3,
 "expl": "<p>Sans stratégie, une ressource n'hérite <b>jamais</b> des étiquettes de son groupe de ressources : storage2 n'a aucune étiquette.</p><p>Nuance utile : Gestion des coûts propose une option « Héritage des étiquettes » qui applique les étiquettes du groupe et de l'abonnement <b>dans les données de coût</b>, mais cela ne modifie pas les ressources. La réponse attendue reste « Aucune ».</p>"
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
 "expl": "<ul><li><b>50 étiquettes : Oui.</b> C'est la limite par ressource, groupe de ressources ou abonnement.</li><li><b>Toutes les ressources : Non.</b> Certains types ne prennent pas en charge les étiquettes, et toutes les ressources qui en ont ne les remontent pas dans la facturation.</li><li><b>Analyse des coûts : Oui.</b> On peut filtrer et grouper les coûts par étiquette, ce qui est l'un des usages principaux des étiquettes.</li></ul>"
},
{
 "id": "D1-084",
 "dom": 1,
 "type": "single",
 "stem": "<p>Le groupe de ressources RG1 a un verrou <b>Suppression impossible</b>. La machine virtuelle VM1 de RG1 a un verrou <b>Lecture seule</b>.</p><p>Quel verrou s'applique effectivement à VM1 ?</p>",
 "opts": [
  "Lecture seule, car le verrou le plus restrictif s'applique",
  "Le verrou créé le plus récemment",
  "Suppression impossible, car le verrou du parent l'emporte",
  "Aucun, car les deux verrous s'annulent"
 ],
 "ans": 0,
 "expl": "<p>Les verrous sont hérités, et quand plusieurs s'appliquent, c'est le <b>plus restrictif</b> qui l'emporte. Lecture seule est plus restrictif que Suppression impossible : VM1 ne peut être ni supprimée ni modifiée.</p><p>Les verrous ne s'annulent jamais, et l'ordre de création ne compte pas.</p>"
},
{
 "id": "D1-085",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous appliquez un verrou <b>Lecture seule</b> sur l'application web WebApp1 (Azure App Service).</p><p>Quelle conséquence devez-vous anticiper ?</p>",
 "opts": [
  "Les utilisateurs ne peuvent plus accéder au site",
  "Vous ne pouvez plus modifier la configuration de WebApp1 ni la mettre à l'échelle",
  "Le contenu du site est supprimé",
  "WebApp1 passe automatiquement au niveau Gratuit"
 ],
 "ans": 1,
 "expl": "<p>Le verrou Lecture seule bloque les opérations de gestion qui écrivent : modifier les paramètres d'application, changer de plan, ajouter une instance. Il empêche aussi des outils comme l'Explorateur de serveurs de Visual Studio d'afficher les fichiers du site, car cette interaction demande un accès en écriture.</p><p>Le site, lui, continue de répondre : les verrous ne touchent pas au trafic des utilisateurs. Rien n'est supprimé ni modifié.</p>"
},
{
 "id": "D1-086",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous créez le groupe d'administration MG-Finance. Vous devez y déplacer l'abonnement Sub-Finance, qui se trouve sous le groupe d'administration racine.</p><p>De quelles autorisations avez-vous besoin, au minimum ?</p>",
 "opts": [
  "Administrateur général dans Microsoft Entra ID uniquement",
  "Contributeur sur Sub-Finance uniquement",
  "Propriétaire de Sub-Finance et Contributeur de groupe d'administration sur MG-Finance",
  "Lecteur sur Sub-Finance uniquement"
 ],
 "ans": 2,
 "expl": "<p>Déplacer un abonnement demande des droits des deux côtés : sur l'<b>abonnement</b> (Propriétaire) et sur le <b>groupe d'administration cible</b> (Contributeur de groupe d'administration ou Propriétaire), ainsi que sur le parent actuel s'il ne s'agit pas de la racine.</p><p>Lecteur et Contributeur ne suffisent pas. Administrateur général est un rôle Entra : il doit d'abord élever son accès pour agir sur les groupes d'administration.</p>"
},
{
 "id": "D1-087",
 "dom": 1,
 "type": "single",
 "stem": "<p>Dans le portail, votre organisation a plusieurs abonnements. Vous devez regrouper les abonnements Dev et Test pour leur appliquer les mêmes stratégies, sans toucher aux abonnements de production.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Un groupe de ressources commun",
  "Une étiquette Non-Prod sur chaque abonnement",
  "Un locataire Microsoft Entra séparé",
  "Un groupe d'administration Non-Prod contenant Dev et Test"
 ],
 "ans": 3,
 "expl": "<p>Un <b>groupe d'administration</b> regroupe des abonnements pour leur appliquer des stratégies et des rôles hérités. Non-Prod contiendra Dev et Test, et les abonnements de production resteront ailleurs.</p><p>Un groupe de ressources est dans un seul abonnement. Un locataire séparé est beaucoup trop lourd. Les stratégies ne s'appliquent pas « par étiquette d'abonnement ».</p>"
},
{
 "id": "D1-088",
 "dom": 1,
 "type": "single",
 "stem": "<p>L'analyse des coûts de l'abonnement Sub1 montre une forte hausse ce mois-ci. Vous devez identifier quel <b>service Azure</b> en est responsable.</p><p>Que devez-vous faire dans l'analyse des coûts ?</p>",
 "opts": [
  "Grouper par Nom du service",
  "Créer un budget",
  "Ouvrir le journal d'activité",
  "Exporter les coûts vers un compte de stockage"
 ],
 "ans": 0,
 "expl": "<p>Dans l'<b>analyse des coûts</b>, l'option <b>Grouper par</b> (nom du service, groupe de ressources, ressource, étiquette, emplacement…) montre la répartition des dépenses. Grouper par nom du service révèle celui qui a augmenté.</p><p>Un budget alerte pour l'avenir. Un export sert à archiver ou à analyser ailleurs. Le journal d'activité ne contient pas de coûts.</p>"
},
{
 "id": "D1-089",
 "dom": 1,
 "type": "single",
 "stem": "<p>Le service financier veut recevoir chaque jour un fichier CSV des coûts Azure de l'abonnement Sub1, pour l'importer dans son propre outil.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une alerte de budget quotidienne",
  "Un export planifié dans Gestion des coûts vers un compte de stockage",
  "Un paramètre de diagnostic de l'abonnement vers Log Analytics",
  "Une recommandation Azure Advisor"
 ],
 "ans": 1,
 "expl": "<p>Les <b>exports</b> de Gestion des coûts écrivent les données de coût dans un <b>compte de stockage</b>, à une fréquence choisie (quotidienne, hebdomadaire, mensuelle), au format CSV ou Parquet.</p><p>Une alerte de budget envoie un message, pas un fichier de données. Advisor ne produit pas de fichier de coûts. Le paramètre de diagnostic de l'abonnement envoie le journal d'activité, pas les coûts.</p>"
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
 "expl": "<ul><li><b>Réel 50 % : Oui.</b> 50 % de 2 000 € = 1 000 €, et le réel est de 1 100 €.</li><li><b>Réel 90 % : Non.</b> Le seuil serait 1 800 €.</li><li><b>Prévu 100 % : Oui.</b> La prévision de 3 200 € dépasse 2 000 €.</li></ul><p>C'est tout l'intérêt de l'alerte sur le coût prévu : être prévenu dès le 10 du mois qu'on va dépasser.</p>"
},
{
 "id": "D1-091",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une alerte de budget doit, en plus d'envoyer un e-mail, déclencher un runbook Azure Automation qui arrête les VM de développement.</p><p>Que devez-vous associer au budget ?</p>",
 "opts": [
  "Une stratégie Azure Policy",
  "Un verrou de ressource",
  "Un groupe d'actions",
  "Une réservation"
 ],
 "ans": 2,
 "expl": "<p>Les budgets acceptent un <b>groupe d'actions</b> (action group) d'Azure Monitor. Un groupe d'actions peut envoyer des e-mails et des SMS, mais aussi lancer un runbook Automation, une fonction Azure, une application logique ou un webhook.</p><p>Les autres réponses ne réagissent pas à une alerte.</p>"
},
{
 "id": "D1-092",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous déplacez la machine virtuelle VM1 vers un autre groupe de ressources du même abonnement. VM1 utilise un disque managé, une interface réseau et une adresse IP publique, tous dans RG1. Le réseau virtuel reste dans RG1.</p><p>Que se passe-t-il pour l'adresse IP publique de VM1 ?</p>",
 "opts": [
  "Elle change automatiquement d'adresse",
  "Elle reste dans RG1 et ne peut plus être associée à VM1",
  "Elle doit être supprimée avant le déplacement",
  "Elle peut être déplacée avec VM1 et garde la même adresse"
 ],
 "ans": 3,
 "expl": "<p>Un déplacement entre groupes de ressources ne change ni la région ni la configuration : l'adresse IP publique peut être déplacée avec la VM, et son adresse ne change pas. Le réseau virtuel peut rester dans RG1 : une interface réseau peut référencer un réseau virtuel d'un autre groupe de ressources.</p>"
},
{
 "id": "D1-093",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre à un auditeur externe de lire les journaux d'audit de Microsoft Entra ID et la configuration de l'annuaire, sans rien modifier.</p><p>Quel rôle Microsoft Entra devez-vous lui attribuer ?</p>",
 "opts": [
  "Lecteur général",
  "Utilisateur",
  "Lecteur (rôle Azure) sur l'abonnement",
  "Administrateur de la sécurité"
 ],
 "ans": 0,
 "expl": "<p><b>Lecteur général</b> (Global Reader) peut lire tout ce que peut lire un administrateur général, y compris les journaux d'audit et de connexion, sans pouvoir modifier quoi que ce soit.</p><p>Le rôle Azure Lecteur porte sur les ressources Azure, pas sur l'annuaire. Administrateur de la sécurité peut modifier des paramètres de sécurité. Un simple utilisateur n'a pas accès aux journaux d'audit.</p>"
},
{
 "id": "D1-094",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre à une application Microsoft Entra (principal de service) de démarrer et arrêter les VM de RG1 depuis un script.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Ajouter le principal de service à une unité administrative",
  "Attribuer un rôle Azure au principal de service sur RG1",
  "Attribuer au principal de service le rôle Entra Administrateur d'applications",
  "Créer une stratégie Azure Policy pour l'application"
 ],
 "ans": 1,
 "expl": "<p>Un <b>principal de service</b> est une identité comme un utilisateur : on lui attribue un rôle Azure (par exemple Contributeur de machines virtuelles ou un rôle personnalisé) sur l'étendue voulue.</p><p>Les unités administratives et le rôle Administrateur d'applications concernent l'annuaire. Azure Policy n'accorde aucune autorisation.</p>"
},
{
 "id": "D1-095",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une machine virtuelle doit lire des secrets dans un coffre de clés sans stocker de mot de passe ni de certificat dans son code.</p><p>Que devez-vous configurer sur la VM ?</p>",
 "opts": [
  "Une clé d'accès partagé du coffre de clés",
  "Un verrou en lecture seule sur le coffre de clés",
  "Une identité managée, avec un rôle d'accès aux secrets sur le coffre",
  "Un compte utilisateur Microsoft Entra dédié"
 ],
 "ans": 2,
 "expl": "<p>Une <b>identité managée</b> donne à la VM une identité Microsoft Entra dont Azure gère les informations d'identification. On lui attribue ensuite un rôle, par exemple <b>Utilisateur des secrets Key Vault</b>, sur le coffre.</p><p>Un compte utilisateur obligerait à stocker un mot de passe. Les coffres de clés n'ont pas de « clé d'accès partagé ». Un verrou ne donne aucun accès.</p>"
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
 "expl": "<ul><li><b>Cycle de vie : Oui.</b> L'identité attribuée par le système est liée à la ressource : elle naît et meurt avec elle.</li><li><b>Partage : Oui.</b> L'identité attribuée par l'utilisateur est une ressource Azure indépendante, réutilisable par plusieurs ressources.</li><li><b>Un seul type : Non.</b> Une VM peut avoir à la fois une identité système et une ou plusieurs identités utilisateur.</li></ul>"
},
{
 "id": "D1-097",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre entreprise veut que l'abonnement Sub2 soit facturé sur une autre carte bancaire et géré par une autre équipe financière, tout en restant dans le même locataire Microsoft Entra.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "Un locataire ne peut avoir qu'un seul abonnement",
  "Il faut fusionner Sub2 dans Sub1",
  "Il faut créer un second locataire Microsoft Entra",
  "Un abonnement a un compte de facturation propre, indépendant du locataire"
 ],
 "ans": 3,
 "expl": "<p>La <b>facturation</b> et l'<b>annuaire</b> sont deux choses distinctes. Plusieurs abonnements d'un même locataire peuvent être rattachés à des comptes ou profils de facturation différents, avec des moyens de paiement différents.</p><p>Un locataire peut contenir de nombreux abonnements, et chaque abonnement fait confiance à un seul locataire. Les abonnements ne se « fusionnent » pas.</p>"
},
{
 "id": "D1-098",
 "dom": 1,
 "type": "single",
 "stem": "<p>L'abonnement Sub1 atteint une limite de quota : vous ne pouvez pas créer plus de 20 vCPU de la famille DSv5 en France Central.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Demander une augmentation de quota depuis la page Utilisation + quotas",
  "Acheter une réservation",
  "Créer un nouveau groupe de ressources",
  "Supprimer les étiquettes des VM existantes"
 ],
 "ans": 0,
 "expl": "<p>Les quotas de vCPU sont fixés <b>par abonnement, par région et par famille</b> de VM. On demande une augmentation depuis <b>Abonnement > Utilisation + quotas</b> (ou par une demande de support). Beaucoup de demandes sont approuvées automatiquement.</p><p>Changer de groupe de ressources ne change pas le quota de l'abonnement. Une réservation est une remise, pas un quota. Les étiquettes n'ont aucun effet.</p>"
},
{
 "id": "D1-099",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez empêcher un utilisateur invité de voir la liste des autres utilisateurs et groupes de votre annuaire. Il doit seulement voir les propriétés de son propre compte.</p><p>Quel réglage devez-vous choisir pour <b>Restrictions d'accès des utilisateurs invités</b> ?</p>",
 "opts": [
  "Les utilisateurs invités disposent du même accès que les membres",
  "L'accès des utilisateurs invités est limité aux propriétés et aux appartenances de leurs propres objets d'annuaire",
  "Les utilisateurs invités ont un accès limité aux propriétés et aux appartenances des objets d'annuaire",
  "Aucun invité ne peut se connecter"
 ],
 "ans": 1,
 "expl": "<p>Le réglage le plus restrictif, <b>« limité aux propriétés et aux appartenances de leurs propres objets »</b>, empêche l'invité d'énumérer les utilisateurs, groupes et autres objets de l'annuaire.</p><ul><li>« Même accès que les membres » est le plus permissif.</li><li>« Accès limité » (le réglage par défaut) empêche d'énumérer les utilisateurs, mais laisse voir certaines informations, comme les membres des groupes non masqués.</li><li>« Aucun invité ne peut se connecter » n'est pas une option de ce réglage.</li></ul>"
},
{
 "id": "D1-100",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'outil de gouvernance adapté à chaque besoin.</p><p>Pour répondre, faites glisser l'outil approprié vers chaque besoin. Chaque outil peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Outils",
 "srcs": [
  "Azure Policy",
  "Verrou de ressource",
  "Contrôle d'accès en fonction du rôle (RBAC)",
  "Étiquette",
  "Groupe d'administration"
 ],
 "tgtHead": [
  "Besoin",
  "Outil"
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
 "expl": "<ul><li><b>Verrou</b> : protège une ressource contre la suppression ou la modification, quels que soient les rôles.</li><li><b>Azure Policy</b> : impose des règles sur les propriétés des ressources (taille, région, SKU…).</li><li><b>RBAC</b> : définit <i>qui</i> peut faire <i>quoi</i>, et <i>où</i>.</li><li><b>Étiquette</b> : métadonnée qui permet de filtrer et de ventiler les coûts.</li></ul><p>Le groupe d'administration organise les abonnements ; il n'est la réponse à aucun de ces besoins pris seul.</p>"
},
{
 "id": "D1-101",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez répertorier tous les rôles Azure attribués à des utilisateurs qui ont été supprimés de Microsoft Entra ID.</p><p>Comment ces attributions apparaissent-elles dans l'onglet Contrôle d'accès (IAM) ?</p>",
 "opts": [
  "Elles sont transférées au responsable de l'utilisateur",
  "Elles apparaissent comme attributions de groupe",
  "Elles apparaissent avec le type « Inconnu » et le nom « Identité introuvable »",
  "Elles sont supprimées automatiquement avec l'utilisateur"
 ],
 "ans": 2,
 "expl": "<p>Supprimer un utilisateur ne supprime pas ses attributions de rôles Azure. Elles restent visibles avec le type <b>Inconnu</b> et la mention <b>Identité introuvable</b>. Il est conseillé de les nettoyer, car elles comptent dans la limite d'attributions de l'abonnement.</p>"
},
{
 "id": "D1-102",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre abonnement approche de la limite du nombre d'attributions de rôles Azure.</p><p>Quelle pratique réduit le plus le nombre d'attributions ?</p>",
 "opts": [
  "Créer un rôle personnalisé par utilisateur",
  "Attribuer les rôles sur chaque ressource plutôt que sur le groupe de ressources",
  "Utiliser des étiquettes à la place des rôles",
  "Attribuer les rôles à des groupes plutôt qu'à chaque utilisateur"
 ],
 "ans": 3,
 "expl": "<p>Attribuer un rôle à un <b>groupe</b> crée une seule attribution, quel que soit le nombre de membres. C'est aussi plus simple à gérer : il suffit d'ajouter ou de retirer des personnes du groupe.</p><p>Attribuer sur chaque ressource multiplie les attributions. Un rôle par utilisateur aussi. Les étiquettes ne donnent aucune autorisation.</p>"
},
{
 "id": "D1-103",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez retrouver qui a attribué le rôle Propriétaire à User11 sur l'abonnement Sub1, la semaine dernière.</p><p>Où devez-vous chercher ?</p>",
 "opts": [
  "Dans le journal d'activité de Sub1, opération « Créer une attribution de rôle »",
  "Dans les métriques de Sub1",
  "Dans Azure Advisor",
  "Dans les journaux de connexion de Microsoft Entra ID"
 ],
 "ans": 0,
 "expl": "<p>Les attributions de rôles Azure sont des opérations sur le plan de contrôle : elles sont tracées dans le <b>journal d'activité</b> (catégorie Administratif), avec l'auteur et la date, pendant 90 jours.</p><p>Les journaux de connexion montrent les authentifications. Advisor et les métriques ne tracent pas les opérations.</p>"
},
{
 "id": "D1-104",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un développeur doit pouvoir créer des groupes de ressources et des ressources dans l'abonnement Sub-Dev, mais ne doit jamais pouvoir créer de passerelle VPN.</p><p>Quelle combinaison répond au besoin ?</p>",
 "opts": [
  "Rôle Lecteur sur Sub-Dev",
  "Rôle Contributeur sur Sub-Dev et stratégie Azure Policy qui refuse le type de ressource passerelle de réseau virtuel",
  "Rôle Contributeur de réseau sur Sub-Dev",
  "Rôle Propriétaire sur Sub-Dev et verrou ReadOnly"
 ],
 "ans": 1,
 "expl": "<p><b>Contributeur</b> permet de créer des groupes de ressources et des ressources. La stratégie intégrée <b>Types de ressources non autorisés</b> (effet Deny) avec <code>Microsoft.Network/virtualNetworkGateways</code> bloque les passerelles pour tout le monde dans l'abonnement.</p><p>Lecteur ne permet pas de créer. Un verrou ReadOnly bloquerait toute création. Contributeur de réseau ne permet que les ressources réseau, et justement les passerelles.</p>"
},
{
 "id": "D1-105",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre aux utilisateurs de modifier leur photo de profil et leur numéro de téléphone mobile dans Microsoft Entra ID, mais pas leur service ni leur poste.</p><p>Ces attributs sont synchronisés depuis l'Active Directory local. Où les utilisateurs doivent-ils modifier leur service ?</p>",
 "opts": [
  "Dans le portail Mon compte",
  "Dans une stratégie Azure Policy",
  "Dans l'Active Directory local, l'attribut étant synchronisé",
  "Dans les propriétés de l'utilisateur dans Microsoft Entra ID"
 ],
 "ans": 2,
 "expl": "<p>Pour un utilisateur <b>synchronisé</b>, la source d'autorité est l'Active Directory local : les attributs synchronisés (service, poste, nom…) se modifient <b>dans AD DS</b>, puis Microsoft Entra Connect reporte la modification dans le cloud.</p><p>Dans le portail Entra, ces champs sont en lecture seule pour un compte synchronisé. Azure Policy ne gère pas les utilisateurs.</p>"
},
{
 "id": "D1-106",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous voulez que les nouveaux utilisateurs de votre locataire ne puissent <b>pas</b> créer de locataires Microsoft Entra ni d'inscriptions d'applications.</p><p>Où devez-vous configurer ces restrictions ?</p>",
 "opts": [
  "Groupe d'administration racine > Contrôle d'accès (IAM)",
  "Microsoft Entra ID > Appareils > Paramètres de l'appareil",
  "Abonnement > Stratégies",
  "Microsoft Entra ID > Utilisateurs > Paramètres utilisateur"
 ],
 "ans": 3,
 "expl": "<p>La page <b>Paramètres utilisateur</b> contient notamment « Les utilisateurs peuvent inscrire des applications », « Empêcher les utilisateurs non administrateurs de créer des locataires » et « Restreindre l'accès au centre d'administration Microsoft Entra ».</p><p>Azure Policy et le contrôle d'accès Azure portent sur les ressources Azure. Les paramètres de l'appareil concernent la jonction et l'inscription des appareils.</p>"
},
{
 "id": "D1-107",
 "dom": 1,
 "type": "single",
 "stem": "<p>User12 doit pouvoir créer, déplacer et supprimer les groupes d'administration de l'organisation, mais pas gérer les ressources des abonnements.</p><p>Quel rôle Azure devez-vous lui attribuer sur le groupe d'administration racine ?</p>",
 "opts": [
  "Contributeur de groupe d'administration",
  "Contributeur",
  "Administrateur de l'accès utilisateur",
  "Lecteur de groupe d'administration"
 ],
 "ans": 0,
 "expl": "<p><b>Contributeur de groupe d'administration</b> permet de créer, déplacer et supprimer des groupes d'administration, et de déplacer des abonnements entre eux, sans droit sur les ressources des abonnements.</p><p>Contributeur sur la racine donnerait accès à toutes les ressources. Lecteur de groupe d'administration ne permet que la lecture. Administrateur de l'accès utilisateur gère les rôles, pas la hiérarchie.</p>"
},
{
 "id": "D1-108",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez appliquer à l'abonnement Sub1 une stratégie personnalisée qui interdit les adresses IP publiques sur les interfaces réseau. La définition n'existe pas encore.</p><p>Où devez-vous enregistrer la définition pour pouvoir l'attribuer à Sub1 et aux autres abonnements de MG-Prod ?</p>",
 "opts": [
  "Dans le locataire Microsoft Entra",
  "Dans le groupe d'administration MG-Prod",
  "Dans l'abonnement Sub1",
  "Dans un groupe de ressources de Sub1"
 ],
 "ans": 1,
 "expl": "<p>L'<b>emplacement de la définition</b> détermine où elle peut être attribuée : à cette étendue et en dessous. Enregistrée dans <b>MG-Prod</b>, elle peut être attribuée à MG-Prod et à tous ses abonnements.</p><p>Enregistrée dans Sub1, elle ne serait utilisable que dans Sub1. On ne peut pas enregistrer une définition dans un groupe de ressources ni dans le locataire Entra.</p>"
},
{
 "id": "D1-109",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les membres du groupe Support doivent pouvoir ouvrir des demandes de support Azure sur l'abonnement Sub1, sans autre droit.</p><p>Quel rôle devez-vous leur attribuer sur Sub1 ?</p>",
 "opts": [
  "Contributeur",
  "Lecteur",
  "Contributeur de demande de support",
  "Administrateur du support technique"
 ],
 "ans": 2,
 "expl": "<p><b>Contributeur de demande de support</b> (Support Request Contributor) permet de créer et gérer des demandes de support, et de lire l'abonnement. C'est le privilège minimum.</p><p>Lecteur ne permet pas d'ouvrir de demande. Contributeur donne beaucoup trop de droits. <b>Administrateur du support technique</b> est un rôle Microsoft Entra qui réinitialise des mots de passe : un faux ami classique.</p>"
},
{
 "id": "D1-110",
 "dom": 1,
 "type": "order",
 "stem": "<p>Vous devez garantir que toutes les ressources existantes et futures de l'abonnement Sub1 aient l'étiquette Environnement=Prod, copiée depuis l'abonnement.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
 "expl": "<p>D'abord, l'étiquette doit exister sur l'<b>abonnement</b>, puisque la stratégie la copie depuis lui. Ensuite, on attribue la stratégie (effet Modify) avec une identité managée qui reçoit un rôle suffisant, par exemple Contributeur d'étiquettes. Enfin, la <b>tâche de correction</b> applique l'étiquette aux ressources déjà présentes.</p><p>Un verrou ReadOnly bloquerait justement la correction. Le rôle Lecteur ne permet pas de modifier les étiquettes.</p>"
}
);
