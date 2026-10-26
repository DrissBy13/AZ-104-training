/* Domaine 1 : identités et gouvernance (lot B : D1-011 à D1-060) */
AZ.questions.push(
{
 "id": "D1-011",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre locataire Microsoft Entra contient 500 utilisateurs. L'attribut <b>Service</b> (department) de chaque utilisateur est renseigné.</p><p>Vous devez créer un groupe nommé Ventes dont les membres sont ajoutés et retirés automatiquement selon la valeur <b>Ventes</b> de cet attribut.</p><p>Quel type d'appartenance devez-vous choisir lors de la création du groupe ?</p>",
 "opts": [
  "Utilisateur dynamique",
  "Synchronisé depuis AD DS",
  "Appareil dynamique",
  "Attribué"
 ],
 "ans": 0,
 "expl": "<p>Un groupe à appartenance <b>Utilisateur dynamique</b> évalue une règle sur les attributs des utilisateurs, par exemple <code>(user.department -eq \"Ventes\")</code>, et ajoute ou retire les membres tout seul. Il demande une licence Microsoft Entra ID P1.</p><ul><li><b>Attribué</b> : les membres sont ajoutés à la main, rien n'est automatique.</li><li><b>Appareil dynamique</b> : la règle porte sur les attributs des appareils, et le groupe ne peut contenir que des appareils.</li><li><b>Synchronisé depuis AD DS</b> n'est pas un type d'appartenance qu'on choisit dans Entra : c'est l'origine d'un groupe créé dans l'Active Directory local.</li></ul>"
},
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
 "expl": "<p>Un groupe <b>Microsoft 365</b> ne contient que des <b>utilisateurs</b>, membres ou invités.</p><ul><li><b>Invités : Oui.</b> Un invité est un objet utilisateur ; il peut rejoindre un groupe Microsoft 365.</li><li><b>Groupe imbriqué : Non.</b> Les groupes Microsoft 365 ne prennent pas en charge l'imbrication. Seul un groupe de sécurité peut contenir d'autres groupes.</li><li><b>Appareils : Non.</b> Seul un groupe de sécurité peut contenir des appareils (en appartenance attribuée ou appareil dynamique).</li></ul>"
},
{
 "id": "D1-013",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous créez l'utilisateur User1 dans Microsoft Entra ID. Vous devez lui attribuer une licence Microsoft 365 E3 depuis le portail Azure.</p><p>Quelle propriété de User1 devez-vous renseigner avant de pouvoir lui attribuer la licence ?</p>",
 "opts": [
  "Le service (department)",
  "L'emplacement d'utilisation",
  "Le nom d'utilisateur principal",
  "Le responsable (manager)"
 ],
 "ans": 1,
 "expl": "<p>L'<b>emplacement d'utilisation</b> (usageLocation) est obligatoire : certains services ne sont pas disponibles partout, et Microsoft doit savoir dans quel pays la licence sera utilisée. Sans lui, l'attribution échoue.</p><p>Le service et le responsable sont facultatifs. Le nom d'utilisateur principal (UPN) existe déjà, puisqu'il est obligatoire à la création de tout utilisateur.</p>"
},
{
 "id": "D1-014",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre organisation achète 200 licences Microsoft 365 E3. Vous devez faire en sorte que tout utilisateur ajouté au groupe de sécurité Compta reçoive automatiquement une licence, et la perde lorsqu'il quitte le groupe.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Créer une règle d'appartenance dynamique",
  "Attribuer le rôle Administrateur de licences",
  "Attribuer la licence au groupe Compta",
  "Créer une stratégie Azure Policy"
 ],
 "ans": 2,
 "expl": "<p>Les <b>licences basées sur les groupes</b> permettent d'attribuer une licence à un groupe : chaque membre la reçoit, et la perd en quittant le groupe. Cette fonction demande Microsoft Entra ID P1 (ou une offre qui l'inclut, comme Microsoft 365 E3).</p><ul><li>Une <b>règle dynamique</b> gère qui est membre du groupe, pas les licences.</li><li><b>Azure Policy</b> s'applique aux ressources Azure, pas aux utilisateurs ni aux licences.</li><li>Le rôle <b>Administrateur de licences</b> donne le droit de gérer les licences à quelqu'un ; il n'automatise rien.</li></ul>"
},
{
 "id": "D1-015",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous activez la réinitialisation de mot de passe en libre-service (SSPR) pour tous les utilisateurs de votre locataire Microsoft Entra. Le nombre de méthodes requises pour la réinitialisation est fixé à 2.</p><p>Quelles <b>deux</b> méthodes d'authentification pouvez-vous proposer aux utilisateurs ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Adresse IP du réseau de l'entreprise",
  "Code de vérification envoyé par e-mail",
  "Certificat de l'ordinateur de l'utilisateur",
  "Notification dans l'application Microsoft Authenticator"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<p>SSPR propose : notification ou code de l'application mobile, e-mail, téléphone mobile (SMS ou appel), téléphone de bureau et questions de sécurité.</p><ul><li><b>Notification Authenticator : oui.</b></li><li><b>Code par e-mail : oui.</b> L'adresse doit être une adresse externe au locataire, puisque l'utilisateur ne peut pas lire sa boîte s'il a perdu son mot de passe.</li><li><b>Certificat de l'ordinateur : non.</b> Ce n'est pas une méthode SSPR.</li><li><b>Adresse IP : non.</b> Un emplacement réseau sert dans l'accès conditionnel, il ne prouve pas l'identité.</li></ul>"
},
{
 "id": "D1-016",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous configurez la réinitialisation de mot de passe en libre-service (SSPR) dans Microsoft Entra ID. Seuls les membres du groupe Pilote doivent pouvoir l'utiliser pendant le test.</p><p>Quelle valeur devez-vous choisir pour <b>Réinitialisation du mot de passe en libre-service activée</b> ?</p>",
 "opts": [
  "Invités uniquement",
  "Tous",
  "Aucun",
  "Sélectionné"
 ],
 "ans": 3,
 "expl": "<p>Le paramètre propose trois valeurs : <b>Aucun</b>, <b>Sélectionné</b> et <b>Tous</b>. <b>Sélectionné</b> limite SSPR aux membres d'un groupe choisi, ici Pilote.</p><p><b>Aucun</b> désactive SSPR pour les utilisateurs ; <b>Tous</b> l'active pour tout le monde. « Invités uniquement » n'existe pas.</p><p>À retenir : les administrateurs ont toujours SSPR activé, avec une stratégie plus stricte (deux méthodes), quel que soit ce réglage.</p>"
},
{
 "id": "D1-017",
 "dom": 1,
 "type": "single",
 "stem": "<p>Votre locataire Microsoft Entra contient les utilisateurs de trois agences : Paris, Lyon et Lille. Vous devez permettre à Admin2 de réinitialiser les mots de passe des utilisateurs de <b>Lyon uniquement</b>.</p><p>La solution doit respecter le principe du privilège minimum. Que devez-vous faire ?</p>",
 "opts": [
  "Créer une unité administrative Lyon et y attribuer à Admin2 le rôle Administrateur du support technique",
  "Attribuer à Admin2 le rôle Administrateur du support technique pour tout le locataire",
  "Créer un groupe de sécurité Lyon et rendre Admin2 propriétaire du groupe",
  "Créer un groupe d'administration Lyon et y attribuer à Admin2 le rôle Contributeur"
 ],
 "ans": 0,
 "expl": "<p>Une <b>unité administrative</b> limite la portée d'un rôle Microsoft Entra à un ensemble d'utilisateurs, de groupes ou d'appareils. Le rôle <b>Administrateur du support technique</b> (Helpdesk Administrator) attribué sur l'unité Lyon permet de réinitialiser les mots de passe des seuls utilisateurs de Lyon.</p><ul><li>Le même rôle sur <b>tout le locataire</b> donne trop de droits.</li><li>Le <b>propriétaire d'un groupe</b> gère les membres du groupe, pas leurs mots de passe.</li><li>Un <b>groupe d'administration</b> organise des abonnements Azure ; il ne sert pas à gérer des utilisateurs Entra, et Contributeur est un rôle Azure, pas un rôle Entra.</li></ul>"
},
{
 "id": "D1-018",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez attribuer à chaque administrateur le rôle Microsoft Entra intégré adapté. La solution doit respecter le principe du privilège minimum.</p><p>Quel rôle devez-vous attribuer pour chaque besoin ?</p><p>Pour répondre, faites glisser le rôle approprié vers chaque besoin. Chaque rôle peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Rôles",
 "srcs": [
  "Administrateur général",
  "Administrateur d'utilisateurs",
  "Administrateur du support technique",
  "Administrateur de groupes",
  "Lecteur général"
 ],
 "tgtHead": [
  "Besoin",
  "Rôle"
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
 "expl": "<ul><li><b>Administrateur d'utilisateurs</b> : crée, modifie et supprime les utilisateurs et les groupes, et réinitialise les mots de passe de certains administrateurs.</li><li><b>Administrateur du support technique</b> : réinitialise les mots de passe des utilisateurs non administrateurs (et des autres administrateurs du support). C'est le rôle le plus restreint pour ce besoin.</li><li><b>Administrateur de groupes</b> : gère les groupes et leurs paramètres, comme l'expiration et la stratégie de nommage.</li><li><b>Lecteur général</b> : lit tout ce que peut lire un administrateur général, sans rien modifier.</li></ul><p><b>Administrateur général</b> conviendrait partout, mais donne beaucoup trop de droits.</p>"
},
{
 "id": "D1-019",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez inviter 300 partenaires externes comme utilisateurs invités dans votre locataire Microsoft Entra, en une seule opération.</p><p>Que devez-vous utiliser dans le portail ?</p>",
 "opts": [
  "Créer des utilisateurs en bloc avec un fichier CSV",
  "Inviter des utilisateurs en bloc avec un fichier CSV",
  "Importer les utilisateurs depuis un groupe dynamique",
  "Synchroniser les utilisateurs avec Microsoft Entra Connect"
 ],
 "ans": 1,
 "expl": "<p>L'opération <b>Inviter des utilisateurs en bloc</b> (Bulk invite) utilise un modèle CSV téléchargeable : adresse e-mail, URL de redirection, envoi ou non du message d'invitation. Elle crée des comptes <b>invités</b>.</p><ul><li><b>Créer des utilisateurs en bloc</b> crée des comptes <b>membres</b> internes au locataire, pas des invités.</li><li>Un <b>groupe dynamique</b> regroupe des utilisateurs existants ; il n'en crée pas.</li><li><b>Microsoft Entra Connect</b> synchronise les comptes de votre Active Directory local, pas des personnes externes.</li></ul>"
},
{
 "id": "D1-020",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les utilisateurs de votre locataire Microsoft Entra doivent pouvoir inviter des invités uniquement s'ils appartiennent aux domaines <b>fabrikam.com</b> et <b>tailspin.com</b>.</p><p>Quel paramètre des <b>Paramètres de collaboration externe</b> devez-vous configurer ?</p>",
 "opts": [
  "Restrictions d'invitation des invités",
  "Restrictions d'accès des utilisateurs invités",
  "Restrictions de collaboration",
  "Paramètres d'accès interlocataire"
 ],
 "ans": 2,
 "expl": "<p>Les <b>Restrictions de collaboration</b> permettent d'autoriser les invitations vers une liste de domaines (liste d'autorisation) ou de les bloquer pour certains domaines (liste de refus). Ici, on choisit « Autoriser les invitations uniquement aux domaines spécifiés ».</p><ul><li><b>Restrictions d'accès des utilisateurs invités</b> : ce que les invités peuvent voir dans l'annuaire.</li><li><b>Restrictions d'invitation des invités</b> : <i>qui</i> chez vous peut inviter (tout le monde, les membres, certains rôles, personne), pas <i>quels domaines</i>.</li><li><b>Paramètres d'accès interlocataire</b> : règles B2B avec d'autres locataires Entra (approbation de l'authentification multifacteur, etc.), un réglage plus large que la liste de domaines demandée.</li></ul>"
},
{
 "id": "D1-021",
 "dom": 1,
 "type": "single",
 "stem": "<p>Dans les paramètres de collaboration externe, les <b>Restrictions d'invitation des invités</b> sont réglées sur « Seuls les utilisateurs ayant des rôles d'administrateur spécifiques peuvent inviter des utilisateurs invités ».</p><p>User3 n'est pas administrateur. Il doit pouvoir inviter des invités. La solution doit respecter le principe du privilège minimum.</p><p>Quel rôle devez-vous attribuer à User3 ?</p>",
 "opts": [
  "Administrateur de groupes",
  "Administrateur d'applications",
  "Administrateur d'utilisateurs",
  "Inviteur d'invités"
 ],
 "ans": 3,
 "expl": "<p>Le rôle <b>Inviteur d'invités</b> (Guest Inviter) ne permet qu'une chose : inviter des utilisateurs invités. C'est le privilège minimum, et il fait partie des rôles reconnus par ce réglage.</p><p>Administrateur d'utilisateurs peut aussi inviter, mais il peut en plus créer, modifier et supprimer des utilisateurs : trop de droits. Administrateur de groupes et Administrateur d'applications ne servent pas à inviter des invités.</p>"
},
{
 "id": "D1-022",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Votre entreprise gère plusieurs types d'appareils. Vous devez choisir l'état d'appareil Microsoft Entra adapté à chaque situation.</p><p>Pour répondre, faites glisser l'état approprié vers chaque situation. Chaque état peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "États",
 "srcs": [
  "Inscrit à Microsoft Entra",
  "Joint à Microsoft Entra",
  "Joint à Microsoft Entra hybride"
 ],
 "tgtHead": [
  "Situation",
  "État"
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
 "expl": "<ul><li><b>Inscrit (registered)</b> : appareils personnels (BYOD). L'utilisateur se connecte avec son compte personnel de l'appareil et ajoute son compte professionnel.</li><li><b>Joint (joined)</b> : appareils de l'entreprise, Windows 10/11, gérés uniquement depuis le cloud. On s'y connecte avec son compte Entra.</li><li><b>Joint hybride</b> : appareils joints au domaine Active Directory local <i>et</i> enregistrés dans Microsoft Entra ID, en général par Microsoft Entra Connect.</li></ul>"
},
{
 "id": "D1-023",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez empêcher les utilisateurs de joindre plus de <b>5</b> appareils à Microsoft Entra ID.</p><p>Où configurez-vous ce réglage ?</p>",
 "opts": [
  "Dans Appareils > Paramètres de l'appareil",
  "Dans Utilisateurs > Paramètres utilisateur",
  "Dans une stratégie Azure Policy",
  "Dans les propriétés de chaque utilisateur"
 ],
 "ans": 0,
 "expl": "<p>La page <b>Appareils > Paramètres de l'appareil</b> contient « Nombre maximal d'appareils par utilisateur » (20 par défaut), ainsi que les réglages « Les utilisateurs peuvent joindre des appareils à Microsoft Entra » et « Les utilisateurs peuvent inscrire leurs appareils ».</p><p>Azure Policy gouverne les ressources Azure, pas les appareils Entra. Les paramètres utilisateur et les propriétés d'un utilisateur ne contiennent pas cette limite.</p>"
},
{
 "id": "D1-024",
 "dom": 1,
 "type": "single",
 "stem": "<p>User4 a le rôle <b>Contributeur</b> sur l'abonnement Sub1. Il doit aussi pouvoir attribuer des rôles Azure aux autres utilisateurs sur Sub1.</p><p>La solution doit respecter le principe du privilège minimum. Quel rôle supplémentaire devez-vous lui attribuer sur Sub1 ?</p>",
 "opts": [
  "Administrateur général",
  "Administrateur de l'accès utilisateur",
  "Propriétaire",
  "Lecteur"
 ],
 "ans": 1,
 "expl": "<p><b>Contributeur</b> gère toutes les ressources, mais ne peut pas attribuer de rôles : il n'a pas les actions <code>Microsoft.Authorization/roleAssignments/write</code>. <b>Administrateur de l'accès utilisateur</b> ajoute précisément la gestion des accès, sans autre droit.</p><ul><li><b>Propriétaire</b> fonctionnerait aussi (gestion des ressources + des accès), mais remplacer ou cumuler avec Contributeur donne plus que le besoin exprimé.</li><li><b>Administrateur général</b> est un rôle Microsoft Entra, pas un rôle Azure sur un abonnement.</li><li><b>Lecteur</b> ne permet que la lecture.</li></ul><p>Le rôle plus récent <b>Administrateur du contrôle d'accès en fonction du rôle</b> permet aussi d'attribuer des rôles, avec des conditions possibles ; il serait une bonne réponse s'il était proposé.</p>"
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
 "expl": "<p>Les rôles Azure sont <b>hérités</b> vers le bas : groupe d'administration → abonnement → groupe de ressources → ressource.</p><ul><li><b>User1 : Oui.</b> Lecteur sur MG1 s'applique à tout ce qui est dessous, donc à VM1.</li><li><b>User2 : Oui.</b> Contributeur sur RG1 peut créer n'importe quelle ressource dans RG1.</li><li><b>User3 : Non.</b> Son rôle est attribué sur la ressource VM1 seulement. Créer une VM est une action sur le groupe de ressources, en dehors de son étendue.</li></ul>"
},
{
 "id": "D1-026",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous créez un rôle personnalisé Azure. Il doit pouvoir être attribué dans les abonnements Sub1 et Sub2 uniquement.</p><p>Quelle propriété de la définition du rôle devez-vous configurer ?</p>",
 "opts": [
  "Actions",
  "DataActions",
  "AssignableScopes",
  "NotActions"
 ],
 "ans": 2,
 "expl": "<p><b>AssignableScopes</b> indique où le rôle peut être attribué : ici <code>/subscriptions/&lt;id Sub1&gt;</code> et <code>/subscriptions/&lt;id Sub2&gt;</code>. On peut aussi y mettre un groupe d'administration ou un groupe de ressources.</p><ul><li><b>Actions</b> : opérations autorisées sur le plan de contrôle (gestion des ressources).</li><li><b>NotActions</b> : opérations retirées des Actions. Ce n'est pas un refus : un autre rôle peut toujours les accorder.</li><li><b>DataActions</b> : opérations sur les données, par exemple lire un blob.</li></ul>"
},
{
 "id": "D1-027",
 "dom": 1,
 "type": "single",
 "stem": "<p>Une application doit lire les blobs du conteneur data du compte de stockage storage1 avec son identité Microsoft Entra. Elle ne doit pas pouvoir les modifier, ni gérer le compte de stockage.</p><p>Quel rôle devez-vous attribuer à l'identité de l'application ?</p>",
 "opts": [
  "Lecteur sur storage1",
  "Contributeur de compte de stockage sur storage1",
  "Contributeur aux données blob du stockage sur le conteneur data",
  "Lecteur des données blob du stockage sur le conteneur data"
 ],
 "ans": 3,
 "expl": "<p>Lire le contenu d'un blob est une opération sur les <b>données</b> (DataActions). Le rôle <b>Lecteur des données blob du stockage</b> l'accorde, et l'étendue du conteneur limite l'accès à data.</p><ul><li><b>Lecteur</b> ne donne que le plan de contrôle : on voit le compte et ses propriétés, mais pas le contenu des blobs avec son identité.</li><li><b>Contributeur de compte de stockage</b> gère le compte (et peut lire les clés d'accès) : trop de droits.</li><li><b>Contributeur aux données blob</b> permet aussi d'écrire et de supprimer.</li></ul>"
},
{
 "id": "D1-028",
 "dom": 1,
 "type": "single",
 "stem": "<p>Admin1 est <b>Administrateur général</b> de votre locataire Microsoft Entra. Il doit pouvoir gérer l'accès à <b>tous</b> les abonnements et groupes d'administration du locataire, y compris ceux sur lesquels il n'a aucun rôle Azure.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Activer « Gestion de l'accès pour les ressources Azure » dans les propriétés de Microsoft Entra ID",
  "Ajouter Admin1 au groupe d'administration racine",
  "Attribuer à Admin1 le rôle Propriétaire sur chaque abonnement",
  "Attribuer à Admin1 le rôle Administrateur de rôle privilégié"
 ],
 "ans": 0,
 "expl": "<p>Le réglage <b>Gestion de l'accès pour les ressources Azure</b> (élévation d'accès), dans les propriétés de Microsoft Entra ID, donne à l'administrateur général le rôle <b>Administrateur de l'accès utilisateur</b> à l'étendue racine <code>/</code>. Il peut alors s'attribuer les rôles nécessaires sur tout abonnement ou groupe d'administration.</p><ul><li>Pour attribuer Propriétaire sur chaque abonnement, il faudrait déjà avoir les droits sur ces abonnements.</li><li><b>Administrateur de rôle privilégié</b> gère les rôles Microsoft Entra, pas les rôles Azure.</li><li>On n'« ajoute » pas un utilisateur à un groupe d'administration : on lui attribue un rôle dessus, ce qui demande déjà des droits.</li></ul>"
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
 "expl": "<p>Il faut distinguer deux familles de rôles :</p><ul><li>les <b>rôles Microsoft Entra</b> gèrent l'annuaire : utilisateurs, groupes, mots de passe, licences ;</li><li>les <b>rôles Azure (RBAC)</b> gèrent les ressources Azure : VM, stockage, réseau, facturation de l'abonnement.</li></ul><p>Réinitialiser un mot de passe relève d'Entra : <b>Administrateur du support technique</b>. Démarrer des VM relève d'Azure : <b>Contributeur de machines virtuelles</b>. Voir les factures : <b>Lecteur de facturation</b>, rôle Azure dédié. Lecteur de répertoire lit l'annuaire, pas la facturation.</p>"
},
{
 "id": "D1-030",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous attribuez sur l'abonnement Sub1 une stratégie Azure Policy avec l'effet <b>Deny</b>, qui interdit les machines virtuelles d'une taille supérieure à Standard_D4s_v5. Sub1 contient déjà VM1, de taille Standard_D8s_v5.</p><p>Que se passe-t-il pour VM1 ?</p>",
 "opts": [
  "VM1 est supprimée lors de la prochaine évaluation",
  "VM1 continue de fonctionner et est signalée non conforme",
  "VM1 est arrêtée puis libérée automatiquement",
  "VM1 est redimensionnée en Standard_D4s_v5"
 ],
 "ans": 1,
 "expl": "<p>L'effet <b>Deny</b> bloque les <b>nouvelles</b> créations et modifications non conformes. Il n'agit pas sur les ressources existantes : VM1 continue de fonctionner et apparaît <b>non conforme</b> dans le tableau de bord de conformité.</p><p>Azure Policy n'arrête, ne redimensionne et ne supprime jamais une ressource existante. Pour corriger des ressources existantes, on utilise une tâche de correction, et seulement avec les effets Modify ou DeployIfNotExists.</p>"
},
{
 "id": "D1-031",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'effet Azure Policy adapté à chaque exigence.</p><p>Pour répondre, faites glisser l'effet approprié vers chaque exigence. Chaque effet peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Effets",
 "srcs": [
  "Audit",
  "Deny",
  "Modify",
  "DeployIfNotExists",
  "Disabled"
 ],
 "tgtHead": [
  "Exigence",
  "Effet"
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
 "expl": "<ul><li><b>Deny</b> : refuse la requête de création ou de modification non conforme.</li><li><b>Modify</b> : ajoute, remplace ou supprime des propriétés ou des étiquettes pendant la création ou la mise à jour.</li><li><b>Audit</b> : laisse passer, mais marque la ressource non conforme et écrit un avertissement dans le journal d'activité.</li><li><b>DeployIfNotExists</b> : déploie une ressource liée (extension, paramètre de diagnostic…) quand elle n'existe pas.</li></ul><p><b>Disabled</b> désactive la stratégie, ce qui sert surtout pour tester ou suspendre une affectation paramétrée.</p>"
},
{
 "id": "D1-032",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous attribuez une stratégie Azure Policy avec l'effet <b>Modify</b> pour ajouter l'étiquette Environnement aux groupes de ressources existants. Vous créez une tâche de correction, mais elle échoue faute d'autorisations.</p><p>Que devez-vous vérifier ?</p>",
 "opts": [
  "Que vous avez le rôle Lecteur sur l'abonnement",
  "Que les groupes de ressources ne contiennent aucune ressource",
  "Que l'affectation possède une identité managée avec un rôle suffisant",
  "Que la stratégie fait partie d'une initiative"
 ],
 "ans": 2,
 "expl": "<p>Les effets <b>Modify</b> et <b>DeployIfNotExists</b> agissent à votre place sur les ressources. Pour cela, l'affectation utilise une <b>identité managée</b> (attribuée par le système ou par l'utilisateur) qui doit avoir un rôle suffisant, par exemple Contributeur d'étiquettes ou Contributeur, sur l'étendue concernée.</p><p>Le rôle Lecteur ne permet pas de corriger. Une stratégie seule fonctionne aussi bien qu'une initiative. Le contenu des groupes de ressources n'a aucun rapport.</p>"
},
{
 "id": "D1-033",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez attribuer ensemble 12 définitions de stratégie liées à la conformité ISO 27001, et suivre leur conformité comme un tout.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Un groupe d'administration",
  "Une étiquette de ressource",
  "Un plan Azure Blueprints",
  "Une définition d'initiative"
 ],
 "ans": 3,
 "expl": "<p>Une <b>initiative</b> (policy set) regroupe plusieurs définitions de stratégie. On l'attribue en une fois, et la conformité est calculée pour l'ensemble. Azure propose des initiatives intégrées pour des référentiels comme ISO 27001.</p><p>Un groupe d'administration organise des abonnements. Azure Blueprints est en cours de retrait (remplacé par les Template Specs et les piles de déploiement). Une étiquette ne regroupe pas de stratégies.</p>"
},
{
 "id": "D1-034",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous attribuez sur l'abonnement Sub1 une stratégie qui n'autorise que la région France Central. Le groupe de ressources RG-DR doit pouvoir contenir des ressources en France South.</p><p>Que devez-vous faire, avec un minimum d'effort ?</p>",
 "opts": [
  "Ajouter RG-DR aux exclusions de l'affectation",
  "Créer une seconde affectation sur RG-DR",
  "Déplacer RG-DR dans un autre abonnement",
  "Attribuer à RG-DR un verrou en lecture seule"
 ],
 "ans": 0,
 "expl": "<p>Une affectation de stratégie peut avoir des <b>exclusions</b> : des groupes de ressources ou des ressources de l'étendue qui ne sont pas évalués. Ajouter RG-DR aux exclusions suffit.</p><ul><li>Une <b>seconde affectation</b> qui autorise France South n'annule pas la première : les deux s'appliquent et la première refuse toujours.</li><li><b>Déplacer RG-DR</b> vers un autre abonnement marche, mais demande bien plus d'effort.</li><li>Un <b>verrou</b> protège contre les modifications ; il ne touche pas aux stratégies.</li></ul><p>Pour une dérogation documentée et limitée dans le temps sur une ressource précise, il existe aussi les <b>exemptions</b>.</p>"
},
{
 "id": "D1-035",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>L'abonnement Sub1 contient le groupe de ressources RG1. Vous devez faire en sorte que chaque ressource créée dans RG1 reçoive l'étiquette <b>CentreDeCout</b> avec la même valeur que celle de RG1.</p><p>Quelles <b>deux</b> affirmations sont vraies ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Une tâche de correction est nécessaire pour les ressources déjà présentes dans RG1",
  "Un verrou sur RG1 copie ses étiquettes vers les ressources",
  "Les ressources héritent automatiquement des étiquettes de RG1",
  "La stratégie intégrée « Hériter d'une étiquette du groupe de ressources si elle est manquante » répond au besoin"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<ul><li><b>Héritage automatique : faux.</b> Dans Azure, les étiquettes ne sont jamais héritées par défaut.</li><li><b>Stratégie « Hériter d'une étiquette du groupe de ressources » : vrai.</b> Elle utilise l'effet Modify pour copier l'étiquette lors de la création ou de la mise à jour d'une ressource.</li><li><b>Tâche de correction : vrai.</b> Modify n'agit seul que sur les ressources créées ou modifiées. Pour les ressources existantes, il faut lancer une tâche de correction.</li><li><b>Verrou : faux.</b> Un verrou empêche la suppression ou la modification ; il ne touche pas aux étiquettes.</li></ul>"
},
{
 "id": "D1-036",
 "dom": 1,
 "type": "single",
 "stem": "<p>Un responsable financier doit pouvoir ajouter et modifier les étiquettes de toutes les ressources de l'abonnement Sub1, sans pouvoir modifier les ressources elles-mêmes.</p><p>Quel rôle devez-vous lui attribuer ?</p>",
 "opts": [
  "Contributeur",
  "Contributeur d'étiquettes",
  "Lecteur",
  "Contributeur de stratégie de ressource"
 ],
 "ans": 1,
 "expl": "<p><b>Contributeur d'étiquettes</b> (Tag Contributor) permet de gérer les étiquettes des ressources sans accéder aux ressources elles-mêmes.</p><p>Contributeur peut tout modifier. Lecteur ne peut rien modifier, pas même les étiquettes. Contributeur de stratégie de ressource gère les stratégies Azure Policy, pas les étiquettes.</p>"
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
 "expl": "<p>Un verrou <b>Lecture seule</b> bloque toute opération d'écriture sur le <b>plan de contrôle</b>, pour tout le monde, même le Propriétaire.</p><ul><li><b>Démarrer VM1 : Non.</b> Démarrer est une requête POST, considérée comme une écriture.</li><li><b>Lister les clés : Non.</b> L'opération listKeys est aussi un POST : elle est bloquée.</li><li><b>Lire un blob avec une SAS : Oui.</b> Les verrous ne protègent que le plan de contrôle. Les opérations sur les données (lire, et même écrire un blob) ne sont pas concernées.</li></ul>"
},
{
 "id": "D1-038",
 "dom": 1,
 "type": "single",
 "stem": "<p>Le groupe de ressources RG1 contient VM1. Un verrou <b>Suppression impossible</b> (CanNotDelete) est appliqué à VM1. Un administrateur essaie de supprimer RG1.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "Toutes les ressources sauf VM1 sont supprimées, puis RG1",
  "VM1 est déplacée dans un nouveau groupe de ressources",
  "La suppression de RG1 échoue",
  "RG1 et toutes ses ressources sont supprimés"
 ],
 "ans": 2,
 "expl": "<p>Supprimer un groupe de ressources revient à supprimer chacune de ses ressources. Comme VM1 ne peut pas être supprimée, l'opération sur RG1 <b>échoue</b>. Pour supprimer RG1, il faut d'abord retirer le verrou.</p><p>Azure ne déplace jamais une ressource tout seul. Selon l'ordre de traitement, certaines ressources sans verrou peuvent déjà avoir été supprimées avant l'échec, d'où l'intérêt de verrouiller le groupe de ressources entier pour les environnements importants.</p>"
},
{
 "id": "D1-039",
 "dom": 1,
 "type": "single",
 "stem": "<p>User2 a le rôle <b>Contributeur</b> sur l'abonnement Sub1. Il essaie de supprimer un verrou appliqué à un groupe de ressources de Sub1, sans succès.</p><p>Pourquoi ?</p>",
 "opts": [
  "Il faut d'abord supprimer les ressources du groupe",
  "Les verrous ne peuvent être supprimés que par leur créateur",
  "Un verrou ne peut pas être supprimé pendant 24 heures",
  "Contributeur n'a pas l'action Microsoft.Authorization/locks/delete"
 ],
 "ans": 3,
 "expl": "<p>Créer ou supprimer un verrou demande les actions <code>Microsoft.Authorization/locks/*</code>. Elles sont incluses dans les rôles <b>Propriétaire</b> et <b>Administrateur de l'accès utilisateur</b>, mais <b>pas</b> dans Contributeur, qui exclut toutes les actions Microsoft.Authorization.</p><p>N'importe qui ayant ces droits peut supprimer un verrou, pas seulement son créateur. Il n'y a aucun délai de 24 heures, et on supprime un verrou sans toucher aux ressources.</p>"
},
{
 "id": "D1-040",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez organiser 40 abonnements en hiérarchie pour appliquer des stratégies Azure Policy et des rôles par département.</p><p>Combien de niveaux de groupes d'administration pouvez-vous créer sous le groupe d'administration racine ?</p>",
 "opts": [
  "6 niveaux",
  "3 niveaux",
  "Aucune limite",
  "10 niveaux"
 ],
 "ans": 0,
 "expl": "<p>Une hiérarchie de groupes d'administration peut avoir <b>6 niveaux</b> de profondeur, sans compter le groupe racine ni le niveau des abonnements.</p><p>Autres limites à connaître : 10 000 groupes d'administration par annuaire, et chaque groupe d'administration ou abonnement n'a qu'<b>un seul parent</b>.</p>"
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
 "expl": "<ul><li><b>Deux parents : Non.</b> Chaque abonnement et chaque groupe d'administration a un seul parent.</li><li><b>Héritage : Oui.</b> Les stratégies et les rôles attribués à un groupe d'administration s'appliquent à tout ce qui est dessous.</li><li><b>Racine par défaut : Oui.</b> Sauf si vous définissez un autre groupe d'administration par défaut dans les paramètres de la hiérarchie.</li></ul>"
},
{
 "id": "D1-042",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez être alerté lorsque les dépenses <b>prévues</b> de l'abonnement Sub1 pour le mois dépassent 5 000 €. Les machines virtuelles ne doivent pas être arrêtées automatiquement.</p><p>Que devez-vous créer dans Gestion des coûts ?</p>",
 "opts": [
  "Une stratégie Azure Policy avec l'effet Deny",
  "Un budget avec une alerte sur le coût prévu",
  "Une réservation Azure",
  "Une alerte de journal d'activité"
 ],
 "ans": 1,
 "expl": "<p>Un <b>budget</b> dans Gestion des coûts peut déclencher des alertes sur le coût <b>réel</b> ou <b>prévu</b> (forecast), en pourcentage du montant. Un budget n'arrête jamais une ressource tout seul ; il prévient (e-mail, groupe d'actions).</p><p>Azure Policy ne connaît pas les coûts. Le journal d'activité trace les opérations, pas les dépenses. Une réservation réduit les coûts mais ne prévient de rien.</p>"
},
{
 "id": "D1-043",
 "dom": 1,
 "type": "single",
 "stem": "<p>Les machines virtuelles de l'abonnement Sub1 tournent en continu. Votre responsable demande une liste des VM sous-utilisées, avec des recommandations de redimensionnement ou d'arrêt.</p><p>Quel service devez-vous consulter ?</p>",
 "opts": [
  "Azure Resource Graph",
  "Microsoft Entra ID",
  "Azure Advisor",
  "Azure Policy"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Advisor</b> analyse l'utilisation des ressources et donne des recommandations par catégorie : Coût, Sécurité, Fiabilité, Excellence opérationnelle et Performances. Dans la catégorie Coût, il signale les VM sous-utilisées et propose de les redimensionner ou de les arrêter.</p><p>Azure Policy vérifie des règles de conformité. Entra ID gère les identités. Resource Graph permet de requêter l'inventaire des ressources, mais ne donne pas de recommandation.</p>"
},
{
 "id": "D1-044",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Vous devez réduire les coûts Azure de votre entreprise. Quelle option correspond à chaque situation ?</p><p>Pour répondre, faites glisser l'option appropriée vers chaque situation. Chaque option peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Options",
 "srcs": [
  "Réservation Azure",
  "Azure Hybrid Benefit",
  "Machine virtuelle Spot",
  "Arrêt automatique planifié"
 ],
 "tgtHead": [
  "Situation",
  "Option"
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
 "expl": "<ul><li><b>Réservation</b> : engagement sur 1 ou 3 ans pour une taille et une région, avec une forte remise. Idéal pour une charge stable et continue.</li><li><b>Azure Hybrid Benefit</b> : réutilise vos licences Windows Server ou SQL Server couvertes par Software Assurance ; vous ne payez plus la licence dans le prix de la VM.</li><li><b>VM Spot</b> : capacité inutilisée d'Azure, très bon marché, mais Azure peut récupérer la VM à tout moment. Bien pour les traitements interruptibles.</li><li><b>Arrêt automatique</b> : une VM arrêtée et libérée ne coûte plus le calcul (les disques restent facturés).</li></ul>"
},
{
 "id": "D1-045",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez estimer le coût mensuel de 3 machines virtuelles, d'un compte de stockage et d'une passerelle VPN <b>avant</b> de les déployer.</p><p>Quel outil devez-vous utiliser ?</p>",
 "opts": [
  "Les budgets de Gestion des coûts",
  "Azure Advisor",
  "Analyse des coûts",
  "La calculatrice de prix Azure"
 ],
 "ans": 3,
 "expl": "<p>La <b>calculatrice de prix</b> estime le coût de services pas encore déployés : on choisit les services, la région, les tailles et les quantités.</p><p>L'<b>Analyse des coûts</b> et les <b>budgets</b> portent sur les dépenses réelles des ressources existantes. <b>Advisor</b> recommande des économies sur ce qui est déjà déployé.</p>"
},
{
 "id": "D1-046",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous déplacez le compte de stockage storage1 du groupe de ressources RG1 (région France Central) vers le groupe de ressources RG2 (région West Europe).</p><p>Dans quelle région se trouve storage1 après le déplacement ?</p>",
 "opts": [
  "France Central",
  "West Europe",
  "Les deux, par géoréplication",
  "Vous devez choisir la région pendant le déplacement"
 ],
 "ans": 0,
 "expl": "<p>Déplacer une ressource vers un autre groupe de ressources ne change <b>pas</b> sa région : storage1 reste en France Central. La région d'un groupe de ressources ne sert qu'à stocker ses <b>métadonnées</b> ; un groupe peut contenir des ressources de n'importe quelle région.</p><p>Pour changer de région, il faut un autre outil, comme Azure Resource Mover, ou recréer la ressource.</p>"
},
{
 "id": "D1-047",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous lancez le déplacement de plusieurs ressources de RG1 vers RG2.</p><p>Pendant le déplacement, que se passe-t-il pour RG1 et RG2 ?</p>",
 "opts": [
  "Rien : les deux groupes restent entièrement modifiables",
  "Les deux groupes sont bloqués pour les opérations d'écriture et de suppression",
  "Seul RG2 est en lecture seule",
  "Les ressources déplacées sont arrêtées"
 ],
 "ans": 1,
 "expl": "<p>Pendant un déplacement, le groupe source et le groupe cible sont <b>verrouillés</b> : on ne peut pas y créer, modifier ou supprimer de ressources jusqu'à la fin de l'opération (au maximum quatre heures).</p><p>Les ressources, elles, <b>continuent de fonctionner</b> : une VM reste démarrée, une application web reste en ligne.</p>"
},
{
 "id": "D1-048",
 "dom": 1,
 "type": "single",
 "stem": "<p>Avant de déplacer 30 ressources de RG1 vers un autre abonnement, vous voulez savoir si le déplacement réussira, sans rien déplacer.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un verrou en lecture seule sur RG1",
  "Le journal d'activité de RG1",
  "L'opération validateMoveResources",
  "Une stratégie Azure Policy en mode Audit"
 ],
 "ans": 2,
 "expl": "<p>L'API <b>validateMoveResources</b> teste le déplacement : elle vérifie que les ressources le prennent en charge et que les dépendances sont incluses, sans rien modifier. Le portail lance aussi une validation automatique avant tout déplacement.</p><p>Le journal d'activité montre ce qui s'est passé, pas ce qui va se passer. Un verrou en lecture seule ferait même échouer le déplacement. Azure Policy ne teste pas les déplacements.</p>"
},
{
 "id": "D1-049",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous transférez l'abonnement Sub1 vers un autre locataire Microsoft Entra.</p><p>Que devient l'attribution du rôle Contributeur faite à User1 (utilisateur de l'ancien locataire) sur Sub1 ?</p>",
 "opts": [
  "Elle est conservée",
  "Elle devient une attribution Lecteur",
  "Elle est transférée au compte invité de User1",
  "Elle est supprimée"
 ],
 "ans": 3,
 "expl": "<p>Quand un abonnement change de locataire, <b>toutes les attributions de rôles Azure sont supprimées</b>, car les utilisateurs, groupes et identités de l'ancien annuaire n'existent pas dans le nouveau. Il faut les recréer.</p><p>Il en va de même pour les identités managées, et les coffres de clés doivent être mis à jour avec le nouvel ID de locataire. Rien n'est converti ni transféré automatiquement.</p>"
},
{
 "id": "D1-050",
 "dom": 1,
 "type": "order",
 "stem": "<p>Vous devez permettre à l'équipe Réseau (groupe Microsoft Entra existant nommé GRP-Reseau) de gérer uniquement les réseaux virtuels de l'abonnement Sub1, avec un rôle personnalisé qui n'existe pas encore.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
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
 ],
 "expl": "<p>Un rôle personnalisé se crée en trois temps : on <b>rédige</b> sa définition (Actions, NotActions, AssignableScopes contenant Sub1), on le <b>crée</b> (portail, <code>New-AzRoleDefinition</code> ou <code>az role definition create</code>), puis on l'<b>attribue</b> à un principal sur une étendue.</p><p>Les unités administratives et les rôles Microsoft Entra concernent l'annuaire, pas les ressources Azure comme les réseaux virtuels.</p>"
},
{
 "id": "D1-051",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez attribuer le rôle Lecteur au groupe GRP-Audit sur le groupe de ressources RG1, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az role {0} create --assignee-object-id &lt;id GRP-Audit&gt; --assignee-principal-type Group --role {1} {2} RG1",
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
 "expl": "<p>La commande complète est : <code>az role assignment create --assignee-object-id &lt;id&gt; --assignee-principal-type Group --role \"Reader\" --resource-group RG1</code>.</p><ul><li><b>assignment</b> crée une attribution ; <b>definition</b> sert aux définitions de rôles personnalisés. <code>az role policy</code> n'existe pas.</li><li><b>Reader</b> est le nom anglais du rôle Lecteur.</li><li>L'étendue se donne avec <code>--scope</code> (chemin complet) ou <code>--resource-group</code>. <code>--scope-name</code> n'existe pas et <code>--location</code> désigne une région.</li></ul>"
},
{
 "id": "D1-052",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>Vous devez appliquer un verrou qui empêche la suppression du groupe de ressources RG1, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0} -LockName ProtectRG1 -LockLevel {1} -ResourceGroupName RG1",
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
 "expl": "<p><code>New-AzResourceLock -LockName ProtectRG1 -LockLevel CanNotDelete -ResourceGroupName RG1</code>.</p><ul><li><b>New-AzResourceLock</b> crée un verrou. Set-AzResourceGroup modifie les étiquettes d'un groupe ; New-AzPolicyAssignment attribue une stratégie.</li><li><b>CanNotDelete</b> empêche la suppression mais autorise les modifications. <b>ReadOnly</b> bloquerait aussi toute modification. <b>DoNotDelete</b> n'existe pas : c'est un piège fréquent.</li></ul>"
},
{
 "id": "D1-053",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez lister, en une seule requête, toutes les machines virtuelles des 40 abonnements de votre organisation qui n'ont pas l'étiquette <b>Proprietaire</b>.</p><p>Quel service devez-vous utiliser ?</p>",
 "opts": [
  "Azure Resource Graph",
  "Le journal d'activité",
  "Analyse des coûts",
  "Azure Advisor"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Resource Graph</b> interroge l'inventaire des ressources de plusieurs abonnements en même temps, avec le langage KQL. Il répond en quelques secondes, ce qui en fait l'outil adapté pour ce type d'inventaire.</p><p>Advisor donne des recommandations. L'Analyse des coûts montre des dépenses. Le journal d'activité trace des opérations, pas l'état actuel des ressources.</p>"
},
{
 "id": "D1-054",
 "dom": 1,
 "type": "single",
 "stem": "<p>User5 a le rôle Contributeur sur RG1. Pourtant, il ne peut pas supprimer certaines ressources de RG1. Dans l'onglet <b>Contrôle d'accès (IAM)</b> de RG1, vous trouvez une <b>affectation de refus</b> (deny assignment).</p><p>Quelle affirmation sur les affectations de refus est vraie ?</p>",
 "opts": [
  "Une affectation de refus s'applique uniquement aux rôles Microsoft Entra",
  "Les affectations de refus sont créées par Azure, par exemple par les piles de déploiement",
  "Vous pouvez créer vous-même une affectation de refus depuis le portail",
  "Une affectation de refus est plus faible qu'une attribution de rôle"
 ],
 "ans": 1,
 "expl": "<p>Les <b>affectations de refus</b> bloquent des actions même si un rôle les autorise : elles sont évaluées <b>avant</b> les attributions de rôles. Mais on ne peut pas en créer directement : elles sont créées et gérées par Azure, par exemple par les <b>piles de déploiement</b> (deployment stacks) ou des applications managées.</p><p>Elles concernent les ressources Azure, pas les rôles Microsoft Entra. Pour protéger des ressources vous-même, utilisez plutôt des verrous ou Azure Policy.</p>"
},
{
 "id": "D1-055",
 "dom": 1,
 "type": "single",
 "stem": "<p>User6 est membre de deux groupes. Le groupe A a le rôle <b>Lecteur</b> sur RG1. Le groupe B a le rôle <b>Contributeur</b> sur RG1.</p><p>Quelles autorisations effectives User6 a-t-il sur RG1 ?</p>",
 "opts": [
  "Celles du rôle attribué en premier",
  "Lecteur, car le rôle le plus restrictif l'emporte",
  "Contributeur, car les autorisations s'additionnent",
  "Aucune, car les deux rôles se contredisent"
 ],
 "ans": 2,
 "expl": "<p>Le contrôle d'accès en fonction du rôle Azure est <b>additif</b> : les autorisations de toutes les attributions s'additionnent. User6 a donc les droits de Contributeur, qui incluent ceux de Lecteur.</p><p>Seules les <b>affectations de refus</b> peuvent retirer une autorisation. L'ordre des attributions n'a aucune importance, et deux rôles ne se « contredisent » jamais.</p>"
},
{
 "id": "D1-056",
 "dom": 1,
 "type": "screen",
 "stem": "<p>Vous devez créer une alerte de budget pour le groupe de ressources RG-Dev. Le budget est de 1 000 € par mois. L'équipe Dev doit recevoir un e-mail dès que le coût <b>réel</b> atteint 80 % du budget.</p><p>Comment devez-vous configurer la condition d'alerte ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 },
 "expl": "<p>Le budget est <b>mensuel</b> de 1 000 €. La condition d'alerte utilise le type <b>Réel</b> (le coût déjà consommé) et le seuil <b>80 %</b>.</p><p>Le type <b>Prévu</b> alerterait sur la projection de fin de mois, ce qui n'est pas demandé. Et un budget ne sait <b>pas</b> arrêter les ressources : il prévient seulement. Pour agir automatiquement, on associe un groupe d'actions qui déclenche un runbook ou une fonction, mais ce n'est pas une case du budget.</p>"
},
{
 "id": "D1-057",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>Vous devez autoriser les utilisateurs de votre locataire à inscrire au maximum 10 appareils chacun.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
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
 },
 "ans": "Paramètres de l'appareil",
 "expl": "<p>La limite « Nombre maximal d'appareils par utilisateur » se règle dans <b>Paramètres de l'appareil</b>. On y trouve aussi qui peut joindre ou inscrire des appareils, et l'exigence d'authentification multifacteur pour joindre un appareil.</p><p>Enterprise State Roaming synchronise les paramètres Windows. Les clés BitLocker et les journaux d'audit ne contiennent pas de réglage de limite.</p>"
},
{
 "id": "D1-058",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous devez empêcher, dans tout le groupe d'administration MG-Prod, la création de comptes de stockage qui autorisent l'accès réseau public. La règle doit aussi s'appliquer aux abonnements ajoutés plus tard à MG-Prod.</p><p>Où devez-vous attribuer la stratégie ?</p>",
 "opts": [
  "À chaque groupe de ressources",
  "Au locataire Microsoft Entra",
  "À chaque abonnement de MG-Prod",
  "Au groupe d'administration MG-Prod"
 ],
 "ans": 3,
 "expl": "<p>Une stratégie attribuée au <b>groupe d'administration MG-Prod</b> s'applique à tous ses abonnements, présents et <b>futurs</b>, grâce à l'héritage.</p><p>L'attribuer abonnement par abonnement oublierait les nouveaux abonnements. Les groupes de ressources sont encore plus bas. On n'attribue pas de stratégie Azure Policy au locataire Microsoft Entra : la plus haute étendue est le groupe d'administration racine.</p>"
},
{
 "id": "D1-059",
 "dom": 1,
 "type": "single",
 "stem": "<p>Vous supprimez par erreur l'utilisateur User7 de Microsoft Entra ID il y a 10 jours.</p><p>Que pouvez-vous faire ?</p>",
 "opts": [
  "Restaurer User7 depuis Utilisateurs supprimés, car il y reste 30 jours",
  "Recréer User7 : il récupère automatiquement ses groupes et licences",
  "Restaurer User7 depuis le journal d'activité Azure",
  "Rien : la suppression est immédiate et définitive"
 ],
 "ans": 0,
 "expl": "<p>Un utilisateur supprimé reste <b>30 jours</b> dans <b>Utilisateurs supprimés</b> (suppression réversible). Pendant ce délai, on peut le restaurer avec ses appartenances aux groupes et ses licences.</p><p>Le journal d'activité Azure trace les opérations sur les ressources, il ne restaure rien. Un utilisateur recréé est un <b>nouvel objet</b> avec un nouvel identifiant : il ne retrouve ni ses groupes, ni ses licences, ni ses rôles.</p>"
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
 "expl": "<ul><li><b>Ajout manuel : Non.</b> Dans un groupe dynamique, seule la règle décide des membres. Pour un cas particulier, il faut modifier la règle ou utiliser un autre groupe.</li><li><b>Mise à jour automatique : Oui.</b> Entra réévalue la règle quand les attributs changent (avec un délai variable selon la taille du locataire).</li><li><b>Rôle Azure : Oui.</b> Un groupe de sécurité, dynamique ou non, peut recevoir des rôles Azure.</li></ul>"
}
);
