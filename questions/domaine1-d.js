/* Domaine 1 : identités et gouvernance (lot D : D1-111 à D1-160) */
AZ.questions.push(
{
 "id": "D1-111",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous avez activé la réinitialisation de mot de passe en libre-service (SSPR) pour tous les utilisateurs. Beaucoup d'entre eux n'ont jamais enregistré de méthode et ne peuvent donc pas réinitialiser leur mot de passe.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Exiger l'inscription des utilisateurs lors de la connexion",
  "Augmenter le nombre de méthodes requises à 2",
  "Activer la réécriture du mot de passe",
  "Notifier les utilisateurs lors de la réinitialisation de mot de passe"
 ],
 "ans": 0,
 "expl": "<p>Dans <b>Réinitialisation du mot de passe > Inscription</b>, l'option <b>« Exiger l'inscription des utilisateurs lors de la connexion »</b> oblige chaque utilisateur à enregistrer ses méthodes à sa prochaine connexion. Un second réglage fixe le nombre de jours avant de redemander la confirmation des informations.</p><p>Les notifications préviennent après une réinitialisation. Exiger 2 méthodes ne fait pas s'inscrire les utilisateurs. La réécriture concerne l'Active Directory local.</p>"
},
{
 "id": "D1-112",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous créez l'utilisateur Jean dans l'Active Directory local. Microsoft Entra Connect synchronise l'annuaire toutes les 30 minutes. Une heure plus tard, vous voulez supprimer Jean depuis le portail Microsoft Entra.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "Jean est converti en compte cloud",
  "L'option de suppression n'est pas disponible : il faut supprimer Jean dans l'AD local",
  "La suppression réussit et Jean disparaît aussi de l'AD local",
  "La suppression réussit, mais Jean réapparaît à la prochaine synchronisation sans changement"
 ],
 "ans": 1,
 "expl": "<p>Pour un objet <b>synchronisé</b>, la source d'autorité est l'AD local. Le portail ne permet pas de supprimer ni de modifier ses attributs synchronisés : il faut supprimer Jean dans l'<b>AD local</b>, et la suppression sera répercutée à la prochaine synchronisation.</p><p>Entra ne modifie jamais l'AD local de cette façon, et ne convertit pas l'objet en compte cloud.</p>"
},
{
 "id": "D1-113",
 "dom": 1,
 "type": "order",
 "stem": "<p>Votre locataire Microsoft Entra utilise le domaine contoso.onmicrosoft.com. Vous devez faire en sorte que les utilisateurs se connectent avec une adresse en <b>@contoso.com</b>.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
 "expl": "<p>On <b>ajoute</b> le domaine dans Entra, qui fournit un enregistrement <b>TXT</b> (ou MX) à créer chez l'hébergeur DNS public du domaine. Une fois l'enregistrement en place, on <b>vérifie</b> le domaine, ce qui prouve qu'on le possède. On peut enfin changer l'<b>UPN</b> des utilisateurs.</p><p>Une <b>zone DNS privée</b> ne sert qu'à la résolution de noms dans des réseaux virtuels : Microsoft ne peut pas la consulter pour vérifier le domaine.</p>"
},
{
 "id": "D1-114",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous avez ajouté le domaine personnalisé contoso.com à Microsoft Entra ID. Il reste à l'état <b>Non vérifié</b>.</p><p>Quel type d'enregistrement DNS devez-vous créer chez votre hébergeur DNS public ?</p>",
 "opts": [
  "Un enregistrement PTR pour contoso.com",
  "Un enregistrement A pointant vers une adresse IP Azure",
  "Un enregistrement TXT ou MX avec la valeur fournie par Microsoft",
  "Un enregistrement CNAME pointant vers contoso.onmicrosoft.com"
 ],
 "ans": 2,
 "expl": "<p>Microsoft fournit une valeur unique du type <code>MS=ms12345678</code> à publier dans un enregistrement <b>TXT</b> (ou, à défaut, <b>MX</b>). Sa présence prouve que vous contrôlez le domaine.</p><p>Les enregistrements A, CNAME et PTR ne servent pas à cette vérification.</p>"
},
{
 "id": "D1-115",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les membres de chaque équipe doivent pouvoir créer leurs propres groupes de sécurité dans Microsoft Entra ID, sans rôle d'administrateur.</p><p>Où devez-vous configurer ce comportement ?</p>",
 "opts": [
  "Utilisateurs > Paramètres utilisateur",
  "Abonnement > Contrôle d'accès (IAM)",
  "Appareils > Paramètres de l'appareil",
  "Groupes > Paramètres généraux"
 ],
 "ans": 3,
 "expl": "<p>Dans <b>Groupes > Paramètres généraux</b>, les réglages « Les utilisateurs peuvent créer des groupes de sécurité » et « Les utilisateurs peuvent créer des groupes Microsoft 365 » contrôlent la gestion de groupes en libre-service.</p><p>Les autres pages ne contiennent pas ces réglages. Le contrôle d'accès d'un abonnement gère les rôles Azure, pas la création de groupes Entra.</p>"
},
{
 "id": "D1-116",
 "dom": 1,
 "type": "single",
 "stem": "<p>User13 est propriétaire du groupe de sécurité GRP-Projet, à appartenance attribuée. Il n'a aucun rôle d'administrateur.</p><p>Que peut-il faire ?</p>",
 "opts": [
  "Ajouter et retirer des membres de GRP-Projet",
  "Supprimer les comptes des membres de GRP-Projet",
  "Attribuer des licences aux membres de GRP-Projet",
  "Réinitialiser le mot de passe des membres de GRP-Projet"
 ],
 "ans": 0,
 "expl": "<p>Le <b>propriétaire</b> d'un groupe gère le groupe : membres, propriétaires, nom, description. Il peut aussi le supprimer.</p><p>Il n'a aucun droit sur les <b>comptes</b> des membres : réinitialiser leur mot de passe, leur attribuer des licences ou les supprimer demande un rôle Microsoft Entra adapté.</p>"
},
{
 "id": "D1-117",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez créer un groupe qui contient automatiquement tous les appareils Windows inscrits ou joints à Microsoft Entra ID.</p><p>Quelle règle d'appartenance dynamique devez-vous utiliser ?</p>",
 "opts": [
  "(user.deviceOSType -eq \"Windows\")",
  "(device.deviceOSType -eq \"Windows\")",
  "(device.operatingSystem -contains \"Win\") -and (user.department -eq \"IT\")",
  "(device.displayName -eq \"Windows\")"
 ],
 "ans": 1,
 "expl": "<p>Une règle d'appareil commence par <b>device.</b> et l'attribut du système d'exploitation est <b>deviceOSType</b>. Le groupe doit être de type sécurité, avec l'appartenance <b>Appareil dynamique</b>.</p><ul><li><code>user.deviceOSType</code> n'existe pas : les attributs user. décrivent les utilisateurs.</li><li><code>device.displayName</code> est le nom de l'appareil, pas son système.</li><li>Une règle ne peut pas mélanger attributs d'utilisateur et d'appareil.</li></ul>"
},
{
 "id": "D1-118",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous attribuez une licence Microsoft 365 E5 au groupe GRP-Direction. GRP-Direction contient le groupe imbriqué GRP-Assistants.</p><p>Les membres de GRP-Assistants reçoivent-ils la licence ?</p>",
 "opts": [
  "Oui, mais seulement si GRP-Assistants est dynamique",
  "Non, sauf si GRP-Assistants est un groupe Microsoft 365",
  "Non, les licences basées sur les groupes ne s'appliquent qu'aux membres directs",
  "Oui, les licences sont héritées par les groupes imbriqués"
 ],
 "ans": 2,
 "expl": "<p>Les <b>licences basées sur les groupes</b> ne prennent pas en charge l'imbrication : seuls les <b>membres directs</b> de GRP-Direction reçoivent la licence. Pour couvrir les assistants, il faut aussi attribuer la licence à GRP-Assistants.</p><p>Le type ou le mode d'appartenance de GRP-Assistants ne change rien.</p>"
},
{
 "id": "D1-119",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous attribuez une licence Microsoft 365 E3 au groupe GRP-Ventes, qui compte 120 membres. Il ne vous reste que 100 licences disponibles.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "Aucun membre ne reçoit de licence",
  "Les 120 membres reçoivent une licence et vous êtes facturé du surplus",
  "Azure achète automatiquement 20 licences supplémentaires",
  "100 membres reçoivent une licence ; les 20 autres sont en erreur d'attribution"
 ],
 "ans": 3,
 "expl": "<p>Entra attribue les licences tant qu'il en reste. Les utilisateurs restants apparaissent en <b>erreur</b> (« nombre de licences insuffisant ») dans le groupe, et seront traités dès que des licences se libèrent ou sont achetées.</p><p>Aucune licence n'est achetée ni facturée automatiquement.</p>"
},
{
 "id": "D1-120",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un employé a quitté l'entreprise ce matin. Vous devez l'empêcher immédiatement de se connecter, sans supprimer son compte, et invalider ses sessions en cours.</p><p>Quelles actions devez-vous effectuer dans Microsoft Entra ID ?</p>",
 "opts": [
  "Désactiver « Compte activé », puis révoquer les sessions",
  "Le retirer de tous les groupes",
  "Supprimer ses licences",
  "Réinitialiser son mot de passe uniquement"
 ],
 "ans": 0,
 "expl": "<p>Désactiver <b>Compte activé</b> (bloquer la connexion) empêche toute nouvelle authentification. <b>Révoquer les sessions</b> invalide les jetons d'actualisation, ce qui force la déconnexion des sessions existantes.</p><p>Retirer les licences ou les groupes ne bloque pas la connexion. Réinitialiser le mot de passe seul ne coupe pas forcément les sessions déjà ouvertes.</p>"
},
{
 "id": "D1-121",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un invité n'a pas reçu l'e-mail d'invitation envoyé il y a une semaine. Son compte apparaît dans l'annuaire avec l'état d'invitation <b>En attente d'acceptation</b>.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Lui attribuer une licence Microsoft Entra ID P1",
  "Renvoyer l'invitation depuis le profil de l'invité",
  "Supprimer le domaine de l'invité",
  "Convertir le compte en membre"
 ],
 "ans": 1,
 "expl": "<p>Le profil d'un invité dont l'invitation n'a pas été acceptée propose <b>Renvoyer l'invitation</b>. On peut aussi lui transmettre directement le lien d'acceptation.</p><p>Les autres actions ne lui permettent pas d'accepter l'invitation.</p>"
},
{
 "id": "D1-122",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'édition de Microsoft Entra ID minimale pour chaque fonctionnalité.</p><p>Pour répondre, faites glisser l'édition appropriée vers chaque fonctionnalité. Chaque édition peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Éditions",
 "srcs": [
  "Microsoft Entra ID Free",
  "Microsoft Entra ID P1",
  "Microsoft Entra ID P2"
 ],
 "tgtHead": [
  "Fonctionnalité",
  "Édition minimale"
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
 "expl": "<ul><li><b>Free</b> : gestion de base des utilisateurs et groupes, authentification unique de base.</li><li><b>P1</b> : groupes dynamiques, licences basées sur les groupes, accès conditionnel, réécriture du mot de passe.</li><li><b>P2</b> : tout P1, plus Privileged Identity Management, ID Protection (détection des risques) et les révisions d'accès.</li></ul>"
},
{
 "id": "D1-123",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les administrateurs de votre organisation ont le rôle Propriétaire sur les abonnements en permanence. Vous devez faire en sorte qu'ils activent ce rôle seulement quand ils en ont besoin, pour une durée limitée et avec une justification.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Des unités administratives",
  "Une stratégie Azure Policy en mode Deny",
  "Microsoft Entra Privileged Identity Management (PIM)",
  "Des verrous de ressources"
 ],
 "ans": 2,
 "expl": "<p><b>Privileged Identity Management</b> permet de rendre un rôle <b>éligible</b> au lieu de permanent : l'administrateur l'active pour une durée limitée, avec justification, authentification multifacteur ou approbation si besoin. PIM fonctionne pour les rôles Microsoft Entra et les rôles Azure. Il demande Microsoft Entra ID P2.</p><p>Les verrous, Azure Policy et les unités administratives ne gèrent pas l'activation temporaire des rôles.</p>"
},
{
 "id": "D1-124",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous écrivez une définition de stratégie Azure Policy personnalisée qui vérifie la présence d'une étiquette. Elle ne doit évaluer que les ressources qui prennent en charge les étiquettes et les emplacements.</p><p>Quelle valeur devez-vous donner à la propriété <b>mode</b> ?</p>",
 "opts": [
  "Microsoft.Resources",
  "Tags",
  "All",
  "Indexed"
 ],
 "ans": 3,
 "expl": "<p>Le mode <b>Indexed</b> n'évalue que les types de ressources qui prennent en charge les étiquettes et l'emplacement. Il est recommandé pour les stratégies qui portent sur les étiquettes ou les régions.</p><p>Le mode <b>All</b> évalue aussi les groupes de ressources, les abonnements et tous les types de ressources. Les deux autres valeurs ne sont pas des modes Azure Policy (il existe des modes de fournisseur de ressources, comme Microsoft.KeyVault.Data, mais pas ceux-ci).</p>"
},
{
 "id": "D1-125",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une stratégie avec l'effet Deny bloque régulièrement les déploiements des développeurs. Ils ne comprennent pas pourquoi : le message d'erreur ne cite que le nom technique de la stratégie.</p><p>Que devez-vous configurer dans l'affectation ?</p>",
 "opts": [
  "Un message de non-conformité",
  "Une exclusion",
  "Une identité managée",
  "L'effet Audit"
 ],
 "ans": 0,
 "expl": "<p>Le <b>message de non-conformité</b> d'une affectation est affiché dans l'erreur de refus et dans les résultats de conformité. On y explique la règle, par exemple « Seule la région France Central est autorisée. Contactez l'équipe Cloud. »</p><p>Une exclusion ou l'effet Audit supprimeraient le blocage. L'identité managée sert aux corrections.</p>"
},
{
 "id": "D1-126",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez interdire dans l'abonnement Sub1 la création de comptes Azure Cosmos DB et de clusters Azure Kubernetes Service, sans affecter les autres services.</p><p>Quelle stratégie intégrée devez-vous attribuer ?</p>",
 "opts": [
  "Types de ressources autorisés, avec Cosmos DB et AKS",
  "Types de ressources non autorisés",
  "Référence SKU de machine virtuelle autorisée",
  "Emplacements autorisés"
 ],
 "ans": 1,
 "expl": "<p><b>Types de ressources non autorisés</b> (Not allowed resource types) bloque une liste de types : ici <code>Microsoft.DocumentDB/databaseAccounts</code> et <code>Microsoft.ContainerService/managedClusters</code>. Tout le reste reste permis.</p><p><b>Types de ressources autorisés</b> ferait l'inverse : n'autoriser <i>que</i> les types listés. Les deux autres stratégies portent sur la région et la taille des VM.</p>"
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
 "expl": "<ul><li><b>Supprimer un blob : Oui.</b> Le verrou protège la ressource sur le plan de contrôle. Les opérations sur les données (lire, écrire, supprimer un blob) ne sont pas concernées. Pour protéger les données, on utilise la suppression réversible ou l'immuabilité.</li><li><b>Modifier la redondance : Oui.</b> Suppression impossible autorise les modifications.</li><li><b>Supprimer storage1 : Non.</b> Même un Propriétaire doit d'abord retirer le verrou.</li></ul>"
},
{
 "id": "D1-128",
 "dom": 1,
 "type": "single",
 "stem": "<p>Le réseau virtuel VNet1 a un verrou <b>Suppression impossible</b>. Un administrateur essaie de supprimer le sous-réseau Subnet3 de VNet1, qui ne contient aucune ressource.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "La suppression réussit après confirmation",
  "Le sous-réseau est vidé mais conservé",
  "La suppression échoue, car le verrou s'applique aussi aux ressources enfants",
  "La suppression réussit, car le verrou ne protège que VNet1"
 ],
 "ans": 2,
 "expl": "<p>Un verrou s'applique à la ressource <b>et à ses ressources enfants</b>. Un sous-réseau est une ressource enfant du réseau virtuel : sa suppression est bloquée.</p><p>Il faut retirer le verrou, supprimer le sous-réseau, puis remettre le verrou.</p>"
},
{
 "id": "D1-129",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous essayez de créer un environnement Azure Container Apps dans l'abonnement Sub2. Le déploiement échoue avec l'erreur <b>MissingSubscriptionRegistration</b>.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Retirer les verrous de Sub2",
  "Demander une augmentation de quota",
  "Attribuer le rôle Lecteur sur Sub2",
  "Inscrire le fournisseur de ressources Microsoft.App dans Sub2"
 ],
 "ans": 3,
 "expl": "<p>Chaque service Azure dépend d'un <b>fournisseur de ressources</b> (Microsoft.Compute, Microsoft.Storage, Microsoft.App…). S'il n'est pas inscrit dans l'abonnement, l'erreur MissingSubscriptionRegistration apparaît. On l'inscrit dans <b>Abonnement > Fournisseurs de ressources</b> ou avec <code>az provider register --namespace Microsoft.App</code>.</p><p>Un quota, un verrou ou un rôle Lecteur n'ont pas de lien avec cette erreur.</p>"
},
{
 "id": "D1-130",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez déplacer des ressources de l'abonnement Sub1 vers l'abonnement Sub2.</p><p>Quelles <b>deux</b> conditions doivent être remplies ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Sub1 et Sub2 doivent être dans le même groupe d'administration",
  "Les fournisseurs de ressources des ressources déplacées doivent être inscrits dans Sub2",
  "Les ressources doivent être arrêtées pendant le déplacement",
  "Sub1 et Sub2 doivent appartenir au même locataire Microsoft Entra"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>Même locataire : oui.</b> On ne déplace pas directement des ressources vers un abonnement d'un autre locataire (il faudrait d'abord transférer l'abonnement).</li><li><b>Fournisseurs inscrits : oui.</b> Sub2 doit pouvoir héberger ce type de ressource.</li><li><b>Même groupe d'administration : non.</b> La hiérarchie de gouvernance ne compte pas.</li><li><b>Ressources arrêtées : non.</b> Les ressources continuent de fonctionner pendant le déplacement.</li></ul>"
},
{
 "id": "D1-131",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous achetez une réservation de machines virtuelles de 3 ans. Elle doit profiter à toutes les VM correspondantes des abonnements Sub1, Sub2 et Sub3, qui partagent le même compte de facturation.</p><p>Quelle étendue devez-vous choisir pour la réservation ?</p>",
 "opts": [
  "Partagée",
  "Groupe d'administration racine uniquement",
  "Abonnement unique",
  "Groupe de ressources unique"
 ],
 "ans": 0,
 "expl": "<p>L'étendue <b>Partagée</b> applique la remise aux ressources correspondantes de tous les abonnements éligibles du contexte de facturation. C'est la plus souple.</p><p>Abonnement unique et groupe de ressources unique limiteraient la remise à une seule cible. Il existe aussi une étendue « groupe d'administration », mais pas « racine uniquement ».</p>"
},
{
 "id": "D1-132",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre entreprise utilise un mélange de VM, d'App Service et d'Azure Functions Premium dont les tailles changent souvent. Elle veut une remise en échange d'un engagement de dépense horaire sur 1 ou 3 ans, sans être liée à une taille ou une région de VM.</p><p>Que devez-vous recommander ?</p>",
 "opts": [
  "Azure Hybrid Benefit",
  "Un plan d'économies Azure pour le calcul",
  "Des VM Spot",
  "Une réservation de VM"
 ],
 "ans": 1,
 "expl": "<p>Le <b>plan d'économies pour le calcul</b> (savings plan) engage un montant horaire et applique la remise à plusieurs services de calcul, quelles que soient la taille et la région. Il convient aux charges qui évoluent.</p><p>Une <b>réservation</b> remise davantage, mais pour une famille de taille et une région précises. Les VM Spot peuvent être interrompues. Azure Hybrid Benefit dépend de licences existantes.</p>"
},
{
 "id": "D1-133",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez ajouter l'étiquette Projet=Alpha au groupe de ressources RG1, <b>sans supprimer</b> ses étiquettes existantes.</p><p>Comment devez-vous compléter la commande Azure CLI ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az tag {0} --resource-id /subscriptions/&lt;id&gt;/resourceGroups/RG1 --operation {1} --tags Projet=Alpha",
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
 "expl": "<p><code>az tag update --operation Merge</code> ajoute ou met à jour les étiquettes fournies sans toucher aux autres.</p><ul><li><b>Replace</b> remplacerait toutes les étiquettes par Projet=Alpha seule.</li><li><b>Delete</b> retirerait l'étiquette.</li><li><code>az tag create --resource-id</code> remplace aussi l'ensemble des étiquettes. <code>add-value</code> concerne les anciennes étiquettes prédéfinies de l'abonnement.</li></ul><p>L'équivalent PowerShell est <code>Update-AzTag -Operation Merge</code>.</p>"
},
{
 "id": "D1-134",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez renommer le groupe de ressources RG-Old en RG-Finance.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Modifier l'étiquette Name de RG-Old",
  "Utiliser l'option Renommer du portail",
  "Créer RG-Finance, y déplacer les ressources, puis supprimer RG-Old",
  "Utiliser Set-AzResourceGroup -NewName"
 ],
 "ans": 2,
 "expl": "<p>Un groupe de ressources <b>ne peut pas être renommé</b>. La méthode consiste à créer le nouveau groupe, y <b>déplacer</b> les ressources (qui le prennent en charge), puis supprimer l'ancien.</p><p>L'étiquette Name n'est qu'une métadonnée. Set-AzResourceGroup n'a pas de paramètre -NewName.</p>"
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
 "expl": "<ul><li><b>Supprimer la racine : Non.</b> Le groupe racine ne peut être ni supprimé ni déplacé.</li><li><b>Nom d'affichage : Oui.</b> Le nom affiché dans le portail est modifiable.</li><li><b>ID : Non.</b> L'ID est l'identifiant unique utilisé dans les chemins d'étendue : il est fixé à la création.</li></ul>"
},
{
 "id": "D1-136",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous créez un rôle personnalisé qui contient l'action de données <code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read</code>. Vous voulez que ses AssignableScopes contiennent le groupe d'administration MG-Data.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "La création réussit, mais le rôle ne peut être attribué qu'à des groupes",
  "La création échoue : les DataActions sont réservées aux rôles intégrés",
  "La création réussit",
  "La création échoue : un rôle personnalisé avec des DataActions ne peut pas être attribuable à un groupe d'administration"
 ],
 "ans": 3,
 "expl": "<p>Un rôle personnalisé peut avoir un groupe d'administration dans ses AssignableScopes, mais alors <b>sans DataActions</b>. Il faut ici utiliser des abonnements ou des groupes de ressources comme étendues attribuables.</p><p>Autre limite : un seul groupe d'administration par rôle personnalisé. Les DataActions sont tout à fait possibles dans les rôles personnalisés en dehors de ce cas.</p>"
},
{
 "id": "D1-137",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous venez d'attribuer le rôle Contributeur à User14 sur RG1. User14 indique qu'il ne voit toujours pas les ressources de RG1 dans le portail.</p><p>Quelle est la cause la plus probable ?</p>",
 "opts": [
  "Les attributions de rôles peuvent prendre quelques minutes à s'appliquer : il doit actualiser ou se reconnecter",
  "Contributeur ne permet pas de voir les ressources",
  "Il faut aussi lui attribuer une licence Microsoft Entra ID P2",
  "Le rôle doit être attribué deux fois"
 ],
 "ans": 0,
 "expl": "<p>Une nouvelle attribution peut prendre jusqu'à une dizaine de minutes pour être prise en compte. Se déconnecter puis se reconnecter (ou actualiser le portail) force la récupération d'un nouveau jeton.</p><p>Aucune licence n'est requise pour un rôle Azure. Contributeur inclut la lecture.</p>"
},
{
 "id": "D1-138",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les administrateurs doivent se connecter à la machine virtuelle Windows VM1 avec leur compte Microsoft Entra, avec les droits d'administrateur local. L'extension de connexion Microsoft Entra est installée sur VM1.</p><p>Quel rôle devez-vous leur attribuer sur VM1 ?</p>",
 "opts": [
  "Administrateur général",
  "Connexion de l'administrateur aux machines virtuelles",
  "Connexion de l'utilisateur aux machines virtuelles",
  "Contributeur de machines virtuelles"
 ],
 "ans": 1,
 "expl": "<p>La connexion avec un compte Entra à une VM est contrôlée par deux rôles Azure : <b>Connexion de l'administrateur aux machines virtuelles</b> (droits d'administrateur local) et <b>Connexion de l'utilisateur aux machines virtuelles</b> (droits d'utilisateur standard).</p><p><b>Contributeur de machines virtuelles</b> gère la ressource VM, mais ne permet pas de se connecter à son système d'exploitation. Administrateur général est un rôle Entra sans lien avec la connexion aux VM.</p>"
},
{
 "id": "D1-139",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Le coffre de clés KV1 utilise le modèle d'autorisation <b>contrôle d'accès en fonction du rôle Azure</b>. Vous devez attribuer le rôle intégré adapté à chaque besoin, en respectant le principe du privilège minimum.</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "srcs": [
  "Administrateur Key Vault",
  "Agent des secrets Key Vault",
  "Utilisateur des secrets Key Vault",
  "Lecteur Key Vault"
 ],
 "tgtHead": [
  "Besoin",
  "Rôle"
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
 "expl": "<ul><li><b>Utilisateur des secrets</b> : lit le contenu des secrets.</li><li><b>Agent des secrets</b> (Secrets Officer) : toute action sur les secrets, sauf gérer les autorisations.</li><li><b>Lecteur Key Vault</b> : lit les métadonnées (noms, dates…), jamais les valeurs.</li><li><b>Administrateur Key Vault</b> : toutes les opérations sur les données du coffre (clés, secrets, certificats).</li></ul>"
},
{
 "id": "D1-140",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez exporter la liste de tous les utilisateurs de votre locataire Microsoft Entra dans un fichier CSV, depuis le portail.</p><p>Quelle opération devez-vous utiliser ?</p>",
 "opts": [
  "Exporter le journal d'audit",
  "Créer un export de Gestion des coûts",
  "Télécharger des utilisateurs (opérations en bloc)",
  "Exporter le modèle ARM du locataire"
 ],
 "ans": 2,
 "expl": "<p>Dans <b>Utilisateurs</b>, le menu des opérations en bloc propose <b>Télécharger des utilisateurs</b>, qui génère un fichier CSV des utilisateurs et de leurs propriétés.</p><p>Le journal d'audit contient des événements, pas la liste des comptes. Les exports de coûts concernent la facturation. Un locataire Entra ne s'exporte pas en modèle ARM.</p>"
},
{
 "id": "D1-141",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre organisation veut vérifier tous les trimestres que les invités membres du groupe GRP-Partenaires en ont toujours besoin. Les responsables de chaque partenaire doivent confirmer ou refuser chaque accès.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une stratégie d'expiration de groupe",
  "Une alerte de budget",
  "Un groupe dynamique",
  "Une révision d'accès"
 ],
 "ans": 3,
 "expl": "<p>Une <b>révision d'accès</b> (Microsoft Entra ID Governance, licence P2 ou Governance) demande à des réviseurs de confirmer ou de refuser l'accès de chaque membre, selon une périodicité. Les accès refusés peuvent être retirés automatiquement.</p><p>L'expiration supprime le groupe entier, pas les membres un à un. Un groupe dynamique dépend d'attributs, pas d'une validation humaine.</p>"
},
{
 "id": "D1-142",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous attribuez à Sub1 une stratégie avec l'effet <b>Append</b> qui ajoute une règle d'adresse IP au pare-feu des comptes de stockage lors de leur création.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "Append ajoute des champs à la requête de création ou de mise à jour",
  "Append déploie une ressource séparée",
  "Append supprime les champs non conformes",
  "Append bloque la création si le champ est absent"
 ],
 "ans": 0,
 "expl": "<p><b>Append</b> ajoute des champs à la ressource pendant sa création ou sa mise à jour, par exemple une règle IP ou une valeur de propriété. Pour les étiquettes, l'effet <b>Modify</b> est aujourd'hui préféré.</p><p>Bloquer relève de <b>Deny</b>. Déployer une ressource séparée relève de <b>DeployIfNotExists</b>. Append n'enlève rien.</p>"
},
{
 "id": "D1-143",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez signaler les machines virtuelles qui n'ont <b>pas</b> l'extension antivirus installée, sans rien déployer ni bloquer.</p><p>Quel effet Azure Policy convient ?</p>",
 "opts": [
  "Modify",
  "AuditIfNotExists",
  "Deny",
  "DeployIfNotExists"
 ],
 "ans": 1,
 "expl": "<p><b>AuditIfNotExists</b> vérifie l'existence d'une ressource liée (ici l'extension) et marque la VM non conforme si elle manque. Il ne déploie rien.</p><p>DeployIfNotExists l'installerait. Deny bloquerait la création des VM. Modify changerait des propriétés de la VM.</p>"
},
{
 "id": "D1-144",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une affectation de stratégie contient deux stratégies sur les mêmes comptes de stockage : l'une avec l'effet Modify, l'autre avec l'effet Deny.</p><p>Dans quel ordre Azure Policy évalue-t-il ces effets lors d'une création ?</p>",
 "opts": [
  "Dans l'ordre alphabétique des définitions",
  "Les deux en même temps, Deny l'emporte",
  "Modify, puis Deny",
  "Deny, puis Modify"
 ],
 "ans": 2,
 "expl": "<p>L'ordre d'évaluation est : <b>Disabled</b>, puis <b>Append et Modify</b>, puis <b>Deny</b>, puis <b>Audit</b>, et enfin, après la création, <b>AuditIfNotExists et DeployIfNotExists</b>.</p><p>Comme Modify passe avant Deny, une requête peut être corrigée par Modify puis acceptée par Deny, ce qui évite des refus inutiles.</p>"
},
{
 "id": "D1-145",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous attribuez la stratégie intégrée <b>Emplacements autorisés</b> au groupe d'administration MG-EU. Seules les régions France Central et West Europe doivent être permises. Le groupe de ressources RG-Sandbox ne doit pas être évalué. La stratégie doit bloquer les déploiements dès maintenant.</p><p>Comment devez-vous configurer l'affectation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "<ul><li><b>Exclusions : RG-Sandbox.</b> Le groupe de ressources n'est pas évalué.</li><li><b>Application de la stratégie : Activé.</b> Avec <b>Désactivé</b> (enforcementMode DoNotEnforce), l'effet Deny n'est pas appliqué : la conformité est seulement calculée, ce qui sert à tester une stratégie.</li><li><b>Emplacements : France Central ; West Europe.</b></li><li><b>Identité managée : non.</b> Elle n'est utile que pour Modify et DeployIfNotExists. Emplacements autorisés utilise Deny.</li></ul>"
},
{
 "id": "D1-146",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez vérifier quels utilisateurs ont un rôle Azure sur le groupe de ressources RG1, et en ajouter un nouveau.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
 "ans": "Contrôle d'accès (IAM)",
 "expl": "<p><b>Contrôle d'accès (IAM)</b> affiche les attributions de rôles (y compris héritées), permet d'en ajouter, de consulter les définitions de rôles, les affectations de refus et l'outil Vérifier l'accès.</p><p><b>Stratégies</b> montre la conformité Azure Policy ; <b>Verrous</b> gère les verrous ; le journal d'activité trace les opérations.</p>"
},
{
 "id": "D1-147",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez transférer la propriété de facturation de l'abonnement Sub3 à un autre administrateur de compte, <b>dans le même locataire</b>.</p><p>Que deviennent les attributions de rôles Azure sur Sub3 ?</p>",
 "opts": [
  "Elles sont converties en attributions Lecteur",
  "Elles sont toutes supprimées",
  "Seules les attributions Propriétaire sont supprimées",
  "Elles sont conservées"
 ],
 "ans": 3,
 "expl": "<p>Un transfert de <b>propriété de facturation</b> dans le même locataire ne change pas l'annuaire de confiance : les attributions de rôles sont <b>conservées</b>.</p><p>Ce sont les changements de <b>locataire</b> (changement d'annuaire) qui suppriment les attributions.</p>"
},
{
 "id": "D1-148",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez supprimer un projet de test terminé. Toutes ses ressources (VM, disques, réseau, stockage) sont dans le groupe de ressources RG-Test, et aucune autre ressource ne s'y trouve.</p><p>Quelle est la méthode la plus rapide ?</p>",
 "opts": [
  "Supprimer le groupe de ressources RG-Test",
  "Appliquer un verrou ReadOnly à RG-Test",
  "Déplacer les ressources dans un autre abonnement",
  "Supprimer chaque ressource une par une"
 ],
 "ans": 0,
 "expl": "<p>Supprimer un <b>groupe de ressources</b> supprime toutes les ressources qu'il contient, en une seule opération. C'est l'intérêt de regrouper les ressources qui partagent le même cycle de vie.</p><p>Supprimer une à une est plus long et risque d'oublier des dépendances. Un verrou empêcherait justement la suppression.</p>"
},
{
 "id": "D1-149",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez permettre à un consultant de consulter les coûts et les budgets de l'abonnement Sub1, sans voir ni modifier les ressources.</p><p>Quel rôle devez-vous lui attribuer ?</p>",
 "opts": [
  "Lecteur de facturation",
  "Lecteur Cost Management",
  "Lecteur",
  "Contributeur Cost Management"
 ],
 "ans": 1,
 "expl": "<p><b>Lecteur Cost Management</b> permet de consulter les coûts, les budgets et les recommandations de coût, sans accès aux ressources elles-mêmes.</p><ul><li><b>Lecteur</b> donne aussi accès aux ressources en lecture.</li><li><b>Contributeur Cost Management</b> permet en plus de créer et modifier des budgets et des exports.</li><li><b>Lecteur de facturation</b> donne accès aux factures, pas à l'analyse des coûts ni aux budgets.</li></ul>"
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
 "expl": "<ul><li><b>Utilisateurs : 30 jours</b> dans Utilisateurs supprimés.</li><li><b>Groupes de sécurité : suppression définitive immédiate.</b> Seuls les groupes Microsoft 365 restent 30 jours en suppression réversible.</li><li><b>Journal d'activité : 90 jours.</b> Pour garder plus longtemps, on l'envoie vers Log Analytics ou un compte de stockage avec un paramètre de diagnostic.</li></ul>"
},
{
 "id": "D1-151",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez autoriser User15 à créer des groupes de ressources dans l'abonnement Sub1, et à gérer uniquement les ressources de ces nouveaux groupes. Il ne doit avoir aucun droit sur les groupes existants.</p><p>Quelle solution est la plus simple ?</p>",
 "opts": [
  "Lui attribuer Lecteur sur Sub1",
  "Lui attribuer un rôle personnalisé avec Microsoft.Resources/subscriptions/resourceGroups/write sur Sub1 ; il devient Propriétaire des groupes qu'il crée",
  "Lui attribuer un rôle personnalisé sur Sub1 qui permet de créer des groupes de ressources, puis lui attribuer Contributeur sur chaque nouveau groupe",
  "Lui attribuer Contributeur sur Sub1"
 ],
 "ans": 2,
 "expl": "<p>Un rôle sur Sub1 qui permet seulement de <b>créer des groupes de ressources</b> ne donne aucun droit sur les ressources existantes. Il faut ensuite lui attribuer <b>Contributeur sur chaque nouveau groupe</b>.</p><ul><li>Contributeur sur Sub1 donnerait accès à tous les groupes existants.</li><li>Le créateur d'un groupe de ressources ne devient <b>pas</b> automatiquement Propriétaire : Azure n'attribue aucun rôle de façon implicite.</li><li>Lecteur ne permet pas de créer.</li></ul>"
},
{
 "id": "D1-152",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un utilisateur a besoin d'un rôle Microsoft Entra uniquement pendant 8 heures chaque mois, pour une opération de clôture. Votre locataire dispose de Microsoft Entra ID P2.</p><p>Quel type d'attribution devez-vous créer dans Privileged Identity Management ?</p>",
 "opts": [
  "Attribution par unité administrative",
  "Active permanente",
  "Active avec date de fin dans un an",
  "Éligible"
 ],
 "ans": 3,
 "expl": "<p>Une attribution <b>éligible</b> ne donne pas le rôle en permanence : l'utilisateur l'<b>active</b> au moment voulu, pour une durée maximale définie (par exemple 8 heures), avec justification ou approbation.</p><p>Une attribution <b>active</b> donne le rôle en continu, même avec une date de fin. Une unité administrative limite la portée, pas la durée.</p>"
},
{
 "id": "D1-153",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les utilisateurs de votre locataire doivent utiliser l'authentification multifacteur pour accéder au portail Azure, mais pas pour les autres applications.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une stratégie d'accès conditionnel ciblant l'application Microsoft Azure Management (ou Microsoft Admin Portals)",
  "La réinitialisation de mot de passe en libre-service",
  "Les paramètres de sécurité par défaut",
  "Une stratégie Azure Policy"
 ],
 "ans": 0,
 "expl": "<p>L'<b>accès conditionnel</b> (Entra ID P1) applique des conditions par application, utilisateur, emplacement ou appareil. Une stratégie qui cible les applications de gestion Azure et exige l'authentification multifacteur répond au besoin.</p><p>Les <b>paramètres de sécurité par défaut</b> s'appliquent à tout le locataire sans réglage fin. Azure Policy gouverne les ressources. SSPR concerne les mots de passe oubliés.</p>"
},
{
 "id": "D1-154",
 "dom": 1,
 "type": "single",
 "stem": "<p>Le groupe de ressources RG-Shared contient des ressources utilisées par trois projets. Vous devez répartir la facture de RG-Shared entre ces projets selon leur consommation réelle de chaque ressource.</p><p>Quel est le prérequis indispensable pour que l'analyse des coûts puisse distinguer les projets ?</p>",
 "opts": [
  "Créer un budget par projet",
  "Appliquer une étiquette Projet sur chaque ressource",
  "Créer un abonnement par ressource",
  "Appliquer un verrou par projet"
 ],
 "ans": 1,
 "expl": "<p>Les <b>étiquettes</b> appliquées sur chaque ressource apparaissent dans les données de coût : on peut alors grouper ou filtrer l'analyse des coûts par Projet.</p><p>Un abonnement par ressource serait ingérable. Un budget suit un montant, il ne répartit rien. Un verrou n'a aucun lien avec les coûts.</p>"
},
{
 "id": "D1-155",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Votre entreprise veut réduire la facture de 20 VM Windows Server de production qui tourneront en continu pendant 3 ans. Elle possède des licences Windows Server avec Software Assurance.</p><p>Quelles <b>deux</b> actions combinées offrent la plus forte réduction ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Activer Azure Hybrid Benefit sur les VM",
  "Passer les disques en HDD Standard",
  "Convertir les VM en VM Spot",
  "Acheter des réservations de VM sur 3 ans"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<ul><li><b>Réservations sur 3 ans : oui.</b> Elles réduisent fortement le coût du calcul pour une charge continue.</li><li><b>Azure Hybrid Benefit : oui.</b> Il supprime le coût de la licence Windows. Les deux remises se cumulent.</li><li><b>VM Spot : non.</b> Elles peuvent être interrompues, ce qui est inacceptable en production.</li><li><b>HDD Standard : non.</b> L'économie est faible et dégrade les performances de production.</li></ul>"
},
{
 "id": "D1-156",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous avez attribué une stratégie avec l'effet Audit il y a deux jours. Vous devez obtenir la liste des ressources non conformes et la raison de leur non-conformité.</p><p>Où devez-vous regarder ?</p>",
 "opts": [
  "Les métriques de l'abonnement",
  "Le journal d'activité, catégorie Sécurité",
  "Azure Policy > Conformité, puis l'affectation concernée",
  "Azure Advisor > Fiabilité"
 ],
 "ans": 2,
 "expl": "<p>La page <b>Conformité</b> d'Azure Policy liste chaque affectation avec son pourcentage de conformité. En ouvrant l'affectation, on voit les ressources non conformes et, pour chacune, les <b>détails de conformité</b> (valeur attendue et valeur réelle).</p><p>L'effet Audit écrit aussi un événement dans le journal d'activité, mais de façon moins pratique. Advisor et les métriques ne montrent pas la conformité des stratégies.</p>"
},
{
 "id": "D1-157",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une stratégie personnalisée contient la règle suivante :</p><pre>\"if\": {\n  \"field\": \"type\",\n  \"equals\": \"Microsoft.Network/publicIPAddresses\"\n},\n\"then\": {\n  \"effect\": \"deny\"\n}</pre><p>Elle est attribuée à RG1. Que se passe-t-il quand un administrateur crée une machine virtuelle dans RG1 avec l'option « Nouvelle adresse IP publique » ?</p>",
 "opts": [
  "La VM est créée avec l'adresse IP publique et marquée non conforme",
  "La VM est créée sans adresse IP publique",
  "La stratégie ne s'applique pas aux VM",
  "Le déploiement échoue, car la création de l'adresse IP publique est refusée"
 ],
 "ans": 3,
 "expl": "<p>La création d'une VM avec une nouvelle adresse IP publique crée aussi une ressource <code>Microsoft.Network/publicIPAddresses</code>. Cette ressource est refusée, donc le <b>déploiement échoue</b>.</p><p>Azure Policy ne modifie pas le déploiement à votre place pour retirer l'adresse. Deny ne crée pas la ressource. La règle vise le type adresse IP publique, quel que soit le contexte de création.</p>"
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
 "expl": "<ul><li><b>Administrateur général et ressources : Non.</b> Il n'a pas d'accès aux ressources Azure par défaut ; il doit élever son accès (Administrateur de l'accès utilisateur à la racine).</li><li><b>Propriétaire et utilisateurs : Non.</b> Un rôle Azure ne donne aucun droit sur l'annuaire.</li><li><b>Les deux à la fois : Oui.</b> Les deux systèmes sont indépendants et cumulables.</li></ul>"
},
{
 "id": "D1-159",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre locataire contient un abonnement de production. Les développeurs disposent d'un rôle Contributeur sur RG-Dev. Vous devez empêcher que les ressources créées dans RG-Dev se trouvent hors de France Central, même si un développeur modifie le modèle de déploiement.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Une stratégie Emplacements autorisés attribuée à RG-Dev",
  "Un verrou Suppression impossible sur RG-Dev",
  "Un rôle personnalisé sans l'action Microsoft.Resources/deployments/write",
  "Une étiquette Region=FranceCentral sur RG-Dev"
 ],
 "ans": 0,
 "expl": "<p>Azure Policy contrôle les <b>propriétés</b> des ressources au moment du déploiement, quelle que soit la méthode utilisée (portail, modèle, CLI). Emplacements autorisés refuse toute région autre que France Central.</p><p>Retirer l'action de déploiement empêcherait tout déploiement par modèle, sans contrôler la région. Un verrou empêche la suppression. Une étiquette est une métadonnée sans effet.</p>"
},
{
 "id": "D1-160",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre entreprise rachète Fabrikam, qui dispose de son propre locataire Microsoft Entra et de 3 abonnements Azure. Vous devez rattacher ces abonnements à votre locataire contoso.com.</p><p>Que devez-vous prévoir ?</p>",
 "opts": [
  "Fusionner les deux locataires depuis le portail",
  "Changer l'annuaire de chaque abonnement, puis recréer les attributions de rôles et les identités managées",
  "Ajouter fabrikam.com comme groupe d'administration",
  "Déplacer les ressources une par une vers vos abonnements, sans autre impact"
 ],
 "ans": 1,
 "expl": "<p>Chaque abonnement fait confiance à un seul locataire. Pour le rattacher à contoso.com, on <b>change son annuaire</b> (Changer de répertoire). Les attributions de rôles, les identités managées et les accès aux coffres de clés doivent ensuite être recréés ou mis à jour.</p><p>On ne déplace pas de ressources directement entre locataires. Les locataires ne se fusionnent pas. Un groupe d'administration n'est pas un domaine.</p>"
}
);
