/* Domaine 2 : stockage (lot D : D2-130 à D2-180) */
AZ.questions.push(
{
 "id": "D2-130",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le compte de stockage storage59 a plusieurs points de terminaison.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Accès aux partages de fichiers :",
   "o": [
    "storage59.file.core.windows.net",
    "storage59.dfs.core.windows.net",
    "storage59.blob.core.windows.net"
   ],
   "a": 0
  },
  {
   "l": "Accès Data Lake Storage Gen2 (espace de noms hiérarchique) :",
   "o": [
    "storage59.file.core.windows.net",
    "storage59.web.core.windows.net",
    "storage59.dfs.core.windows.net"
   ],
   "a": 2
  },
  {
   "l": "Accès aux messages d'une file d'attente :",
   "o": [
    "storage59.blob.core.windows.net",
    "storage59.table.core.windows.net",
    "storage59.queue.core.windows.net"
   ],
   "a": 2
  }
 ],
 "expl": "<p>Chaque service a son point de terminaison : <b>blob</b>, <b>file</b>, <b>queue</b>, <b>table</b>, <b>dfs</b> (Data Lake Gen2) et <b>web</b> (site web statique, avec un numéro de zone). Le nom du compte, unique dans Azure, sert de préfixe.</p>"
},
{
 "id": "D2-131",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous migrez vers Azure une application qui lit et écrit des fichiers sur un partage réseau <code>\\\\serveur\\donnees</code> en SMB. Vous ne pouvez pas modifier le code.</p><p>Quel service de stockage devez-vous utiliser ?</p>",
 "opts": [
  "Azure Files",
  "Stockage Table",
  "Stockage Blob avec un conteneur privé",
  "Stockage File d'attente"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Files</b> fournit des partages accessibles en <b>SMB</b> (et NFS), montés comme un lecteur réseau : l'application continue d'utiliser un chemin UNC sans modification.</p><p>Le stockage blob s'utilise par API REST ou SDK, ce qui demanderait de modifier le code. Les files d'attente et les tables ne sont pas des systèmes de fichiers.</p>"
},
{
 "id": "D2-132",
 "dom": 2,
 "type": "single",
 "stem": "<p>Votre entreprise a 10 agences, chacune avec un serveur de fichiers local. Elle veut un seul ensemble de données central dans Azure, avec un accès local rapide aux fichiers chauds dans chaque agence.</p><p>Que devez-vous recommander ?</p>",
 "opts": [
  "Un compte de stockage par agence",
  "Azure Files avec Azure File Sync et la hiérarchisation cloud",
  "Azure Data Box",
  "AzCopy planifié dans chaque agence"
 ],
 "ans": 1,
 "expl": "<p><b>Azure File Sync</b> synchronise plusieurs serveurs (un point de terminaison serveur par agence) avec le même partage Azure (point de terminaison cloud). La <b>hiérarchisation cloud</b> garde en local les fichiers les plus utilisés.</p><p>Un compte par agence ne centralise rien. AzCopy ne fait pas de synchronisation multidirectionnelle. Data Box est un transfert ponctuel.</p>"
},
{
 "id": "D2-133",
 "dom": 2,
 "type": "single",
 "stem": "<p>Le même fichier rapport.docx a été modifié en même temps sur deux serveurs de la même synchronisation Azure File Sync, FS-PARIS et FS-LYON.</p><p>Que fait Azure File Sync ?</p>",
 "opts": [
  "Il bloque la synchronisation jusqu'à une décision manuelle",
  "Il fusionne le contenu des deux fichiers",
  "Il garde les deux versions : l'une avec son nom d'origine, l'autre renommée avec un suffixe (par exemple le nom du serveur)",
  "Il garde uniquement la version la plus récente"
 ],
 "ans": 2,
 "expl": "<p>En cas de conflit, File Sync ne perd aucune modification : il conserve les deux fichiers. La version qui « gagne » garde le nom d'origine ; l'autre est renommée avec le nom du point de terminaison (serveur ou cloud) et un numéro, par exemple <code>rapport-FS-LYON.docx</code>.</p>"
},
{
 "id": "D2-134",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un administrateur copie des fichiers directement dans le partage Azure share14 depuis le portail. Ce partage est le point de terminaison cloud d'un groupe Azure File Sync. Les fichiers n'apparaissent pas tout de suite sur le serveur.</p><p>Pourquoi ?</p>",
 "opts": [
  "Le portail ne peut pas écrire dans un partage synchronisé",
  "La hiérarchisation cloud bloque les nouveaux fichiers",
  "Il faut redémarrer l'agent",
  "Les modifications faites directement dans le partage Azure sont détectées par une tâche qui s'exécute toutes les 24 heures"
 ],
 "ans": 3,
 "expl": "<p>Les changements faits sur un <b>serveur</b> sont détectés en temps réel par l'agent. Ceux faits <b>directement dans le partage Azure</b> (portail, SMB direct, API) sont détectés par une <b>tâche de détection des modifications</b> qui s'exécute une fois toutes les 24 heures. On peut la lancer à la demande avec <code>Invoke-AzStorageSyncChangeDetection</code>.</p>"
},
{
 "id": "D2-135",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez transférer 25 To vers Azure. Votre équipe préfère des disques SSD qu'elle peut connecter en USB à un serveur.</p><p>Quelle offre Data Box convient le mieux ?</p>",
 "opts": [
  "Data Box Disk",
  "Data Box Heavy",
  "Azure Import/Export avec vos propres bandes",
  "Data Box Gateway"
 ],
 "ans": 0,
 "expl": "<p><b>Data Box Disk</b> : des disques SSD chiffrés (environ 8 To utilisables chacun, jusqu'à 5 disques par commande, soit environ 35 To) connectés en USB ou SATA. Adapté à quelques dizaines de To.</p><p><b>Data Box</b> (appareil) vise ~80 To et <b>Data Box Heavy</b> environ 1 Po. <b>Data Box Gateway</b> est une appliance virtuelle de transfert en ligne. Import/Export n'accepte pas de bandes.</p>"
},
{
 "id": "D2-136",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un blob est placé au niveau <b>Froid (Cool)</b>. 10 jours plus tard, une règle de cycle de vie le déplace vers <b>Archive</b>.</p><p>Que se passe-t-il pour la facturation ?</p>",
 "opts": [
  "Le déplacement est refusé avant 30 jours",
  "Des frais de suppression anticipée de 20 jours au niveau Froid sont facturés",
  "Aucun frais supplémentaire",
  "Des frais de 180 jours au niveau Archive sont facturés immédiatement"
 ],
 "ans": 1,
 "expl": "<p>Le niveau Froid a une durée minimale de <b>30 jours</b>. Le blob y est resté 10 jours : on paie les <b>20 jours restants</b> (frais de suppression anticipée). Ensuite, le compteur des 180 jours du niveau Archive démarre.</p><p>Le déplacement n'est jamais refusé ; seule la facturation en tient compte.</p>"
},
{
 "id": "D2-137",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous avez réhydraté un blob du niveau Archive vers le niveau Froid. Le lendemain, votre règle de cycle de vie (« Archiver après 90 jours depuis la dernière modification ») le renvoie aussitôt au niveau Archive.</p><p>Quelle condition devez-vous ajouter à la règle pour éviter cela ?</p>",
 "opts": [
  "daysAfterCreationGreaterThan",
  "prefixMatch",
  "daysAfterLastTierChangeGreaterThan",
  "blobTypes"
 ],
 "ans": 2,
 "expl": "<p>La condition <b>daysAfterLastTierChangeGreaterThan</b> (jours depuis le dernier changement de niveau) s'utilise avec tierToArchive : un blob qui vient d'être réhydraté ne sera pas réarchivé avant le délai choisi.</p><p>La date de création et la date de modification ne changent pas lors d'une réhydratation, d'où le problème.</p>"
},
{
 "id": "D2-138",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous avez lancé la réhydratation d'un blob archivé avec la priorité <b>Standard</b>. L'utilisateur en a finalement besoin d'urgence.</p><p>Que pouvez-vous faire ?</p>",
 "opts": [
  "Rien : la priorité ne peut pas être modifiée",
  "Copier le blob archivé vers un autre conteneur au niveau Archive",
  "Annuler et attendre 24 heures",
  "Relancer l'opération avec la priorité Élevée : la priorité peut être augmentée pendant la réhydratation"
 ],
 "ans": 3,
 "expl": "<p>Pendant une réhydratation en attente, on peut <b>passer de Standard à Élevée</b> (en refaisant Set Blob Tier avec la priorité High). On ne peut pas faire l'inverse. La priorité Élevée coûte plus cher.</p>"
},
{
 "id": "D2-139",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez lire un blob archivé sans modifier le blob d'origine, qui doit rester au niveau Archive.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Copier le blob archivé vers un nouveau blob au niveau Chaud ou Froid",
  "Créer un instantané du blob archivé et le lire",
  "Lire le blob avec une SAS",
  "Changer le niveau du blob d'origine"
 ],
 "ans": 0,
 "expl": "<p>La <b>copie</b> d'un blob archivé vers un nouveau blob en ligne (opération Copy Blob avec un niveau cible) réhydrate la copie, tandis que l'original reste au niveau Archive.</p><p>Changer le niveau modifierait l'original. Un instantané d'un blob archivé est lui aussi hors ligne. Une SAS ne rend pas un blob archivé lisible.</p>"
},
{
 "id": "D2-140",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Le contrôle de version des blobs est activé sur storage60.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Chaque écriture d'un blob crée une nouvelle version.",
   "a": 0
  },
  {
   "l": "Supprimer un blob supprime aussi toutes ses versions précédentes.",
   "a": 1
  },
  {
   "l": "Vous pouvez promouvoir une version précédente pour qu'elle redevienne la version actuelle.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Nouvelle version : Oui.</b> Chaque modification conserve automatiquement l'état précédent comme version.</li><li><b>Suppression : Non.</b> Supprimer le blob transforme la version actuelle en version précédente ; les versions restent (et sont facturées) jusqu'à ce qu'on les supprime explicitement ou par une règle de cycle de vie.</li><li><b>Promouvoir : Oui.</b> On copie la version voulue sur le blob de base.</li></ul>"
},
{
 "id": "D2-141",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous voulez appliquer des stratégies d'immuabilité différentes à des blobs précis d'un même conteneur, et non au conteneur entier.</p><p>Quel prérequis devez-vous activer ?</p>",
 "opts": [
  "La géoredondance",
  "Le contrôle de version des blobs, avec la prise en charge de l'immuabilité au niveau de la version",
  "La suppression réversible des conteneurs",
  "L'espace de noms hiérarchique"
 ],
 "ans": 1,
 "expl": "<p>L'<b>immuabilité au niveau de la version</b> permet d'appliquer une stratégie de rétention ou une conservation légale à un blob ou une version précis. Elle exige le <b>contrôle de version</b> et s'active sur le compte ou le conteneur.</p><p>Sans elle, les stratégies s'appliquent au niveau du conteneur.</p>"
},
{
 "id": "D2-142",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous configurez la réplication d'objets de storage61 (locataire Contoso) vers storage62 (locataire Fabrikam). La création de la stratégie échoue.</p><p>Quel paramètre devez-vous vérifier ?</p>",
 "opts": [
  "L'accès anonyme aux blobs",
  "Le chiffrement d'infrastructure",
  "Autoriser la réplication entre locataires sur les comptes de stockage",
  "Le niveau d'accès par défaut"
 ],
 "ans": 2,
 "expl": "<p>La réplication d'objets vers un compte d'un <b>autre locataire Microsoft Entra</b> doit être autorisée par le paramètre <b>Autoriser la réplication entre locataires</b> (AllowCrossTenantReplication), désactivé par défaut sur les nouveaux comptes.</p>"
},
{
 "id": "D2-143",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous créez une stratégie de réplication d'objets sur un conteneur qui contient déjà 10 000 blobs.</p><p>Que se passe-t-il pour les blobs existants ?</p>",
 "opts": [
  "Ils sont toujours répliqués en premier",
  "Ils ne sont jamais répliqués",
  "Ils sont déplacés et supprimés de la source",
  "Selon l'option choisie, vous pouvez copier tous les objets, uniquement les nouveaux, ou ceux créés après une date"
 ],
 "ans": 3,
 "expl": "<p>Une règle de réplication d'objets propose de <b>copier tous les objets</b>, <b>uniquement les nouveaux objets</b>, ou un filtre de date personnalisé. La réplication <b>copie</b> les blobs ; elle ne les supprime jamais de la source.</p>"
},
{
 "id": "D2-144",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous utilisez des clés gérées par le client dans Key Vault pour storage63. Vous voulez que le compte utilise automatiquement chaque nouvelle version de la clé après une rotation.</p><p>Comment devez-vous configurer la clé dans le compte ?</p>",
 "opts": [
  "Indiquer l'URI de la clé sans version (mise à jour automatique de la version)",
  "Copier la clé dans le compte de stockage",
  "Indiquer l'URI d'une version précise",
  "Utiliser une SAS"
 ],
 "ans": 0,
 "expl": "<p>Si l'on indique l'URI de la clé <b>sans numéro de version</b>, Azure Storage vérifie régulièrement et adopte automatiquement la dernière version. Avec une version précise, il faut mettre à jour le compte à chaque rotation.</p>"
},
{
 "id": "D2-145",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un utilisateur a le rôle <b>Contributeur de partage SMB</b> au niveau du partage share15. Les permissions NTFS du dossier Paie ne lui donnent que la lecture.</p><p>Que peut-il faire dans Paie ?</p>",
 "opts": [
  "Lire et écrire",
  "Lire seulement",
  "Rien",
  "Modifier les permissions NTFS"
 ],
 "ans": 1,
 "expl": "<p>Les permissions <b>au niveau du partage</b> (RBAC) et les permissions <b>NTFS</b> s'appliquent toutes les deux : le résultat est le <b>plus restrictif</b> des deux. Le partage autorise l'écriture, mais NTFS ne donne que la lecture : il peut seulement lire.</p>"
},
{
 "id": "D2-146",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez configurer les permissions NTFS racine du partage share16, qui utilise l'authentification AD DS.</p><p>Quelle méthode Microsoft recommande-t-elle pour la configuration initiale ?</p>",
 "opts": [
  "Utiliser une SAS de compte",
  "Configurer les permissions dans le pare-feu",
  "Monter le partage avec un compte qui a le rôle Contributeur élevé de partage SMB (ou avec la clé du compte), puis utiliser l'Explorateur Windows ou icacls",
  "Configurer les permissions dans le portail Azure"
 ],
 "ans": 2,
 "expl": "<p>Les ACL NTFS se gèrent depuis un client Windows : on monte le partage avec une identité qui a le droit de modifier les ACL (<b>Contributeur élevé de partage SMB</b>, ou la clé du compte, qui agit en super-utilisateur), puis on utilise l'<b>Explorateur Windows</b> ou <b>icacls</b>.</p><p>Le portail ne gère pas les ACL NTFS d'Azure Files.</p>"
},
{
 "id": "D2-147",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une application web en JavaScript, hébergée sur www.contoso.com, doit charger directement des fichiers dans storage64 depuis le navigateur. Le navigateur bloque les requêtes.</p><p>Que devez-vous configurer sur le service blob ?</p>",
 "opts": [
  "L'accès anonyme en écriture",
  "Un point de terminaison privé",
  "La redondance RA-GRS",
  "Une règle CORS autorisant l'origine https://www.contoso.com"
 ],
 "ans": 3,
 "expl": "<p>Les navigateurs bloquent les requêtes vers un autre domaine sauf si le serveur les autorise par <b>CORS</b> (partage des ressources entre origines). Une règle CORS sur le service blob, avec l'origine, les méthodes (PUT, GET…) et les en-têtes autorisés, résout le problème. L'authentification passera par une SAS ou Entra.</p>"
},
{
 "id": "D2-148",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous hébergez un site web statique dans storage65. Il doit être accessible en HTTPS sur www.contoso.com.</p><p>Que devez-vous ajouter ?</p>",
 "opts": [
  "Azure Front Door (ou Azure CDN) avec le domaine personnalisé et un certificat",
  "La suppression réversible",
  "Un point de terminaison privé",
  "Une SAS"
 ],
 "ans": 0,
 "expl": "<p>Le site web statique accepte un domaine personnalisé en HTTP, mais <b>pas en HTTPS</b> avec un certificat personnalisé. Pour HTTPS sur votre domaine, on place <b>Azure Front Door</b> (ou Azure CDN) devant le compte, qui gère le certificat.</p>"
},
{
 "id": "D2-149",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez bloquer par défaut tout accès réseau à storage66, puis autoriser Subnet1 de VNet1, avec Azure CLI.</p><p>Comment devez-vous compléter les commandes ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az storage account update --name storage66 --resource-group RG1 --default-action {0}<br>az storage account {1} add --account-name storage66 --resource-group RG1 --vnet-name VNet1 --subnet Subnet1",
 "rows": [
  {
   "l": "Action par défaut",
   "o": [
    "Deny",
    "Allow",
    "Disabled"
   ],
   "a": 0
  },
  {
   "l": "Sous-groupe",
   "o": [
    "network-rule",
    "private-endpoint",
    "firewall"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>--default-action Deny</code> fait passer le compte en « réseaux sélectionnés ». <code>az storage account network-rule add</code> ajoute une règle de réseau virtuel (ou d'adresse IP avec <code>--ip-address</code>).</p><p>Le sous-réseau doit avoir le point de terminaison de service Microsoft.Storage. Les sous-groupes <code>firewall</code> et <code>private-endpoint</code> n'existent pas sous <code>az storage account</code>.</p>"
},
{
 "id": "D2-150",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez interdire l'accès anonyme aux blobs pour tout le compte storage67, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0} -ResourceGroupName RG1 -Name storage67 {1} $false",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Set-AzStorageAccount",
    "New-AzStorageAccount",
    "Set-AzStorageContainerAcl"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "-AllowBlobPublicAccess",
    "-EnableHttpsTrafficOnly",
    "-AllowSharedKeyAccess"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>Set-AzStorageAccount -AllowBlobPublicAccess $false</code> interdit l'accès anonyme au niveau du compte, quels que soient les réglages des conteneurs.</p><p>Set-AzStorageContainerAcl règle un seul conteneur. -EnableHttpsTrafficOnly concerne le transfert sécurisé ; -AllowSharedKeyAccess l'accès par clé.</p>"
},
{
 "id": "D2-151",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez régénérer key1 de storage68 avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0} -ResourceGroupName RG1 -Name storage68 -KeyName {1}",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzStorageAccountKey",
    "Get-AzStorageAccountKey",
    "Set-AzStorageAccount"
   ],
   "a": 0
  },
  {
   "l": "Clé",
   "o": [
    "key1",
    "primary",
    "kerb1"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>New-AzStorageAccountKey -KeyName key1</code> régénère la clé. Get-AzStorageAccountKey ne fait que lire les clés. Les noms des clés d'accès sont <b>key1</b> et <b>key2</b> (kerb1 et kerb2 sont des clés Kerberos utilisées par Azure Files avec AD DS).</p>"
},
{
 "id": "D2-152",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez migrer storage69 de France Central vers West Europe, sans perdre sa configuration.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Exporter le modèle ARM de storage69",
  "Modifier le modèle (région, nom du compte) et le déployer dans West Europe",
  "Copier les données avec AzCopy de l'ancien compte vers le nouveau",
  "Mettre à jour les applications, puis supprimer l'ancien compte",
  "Lancer un basculement géographique",
  "Changer la région dans les propriétés du compte"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>Un compte ne change jamais de région. On <b>exporte le modèle</b>, on le <b>déploie</b> dans la nouvelle région avec un nouveau nom, on <b>copie les données</b>, puis on <b>bascule les applications</b> et on supprime l'ancien compte.</p><p>Le basculement géographique ne va que vers la région jumelée, et la région n'est pas modifiable dans les propriétés.</p>"
},
{
 "id": "D2-153",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez configurer storage70 pour utiliser des clés gérées par le client stockées dans KV2.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Activer la suppression réversible et la protection contre le vidage sur KV2",
  "Créer une clé RSA dans KV2",
  "Donner à l'identité managée de storage70 le rôle Utilisateur du service de chiffrement Key Vault sur la clé",
  "Choisir Clés gérées par le client dans Chiffrement et sélectionner la clé",
  "Générer une SAS de compte",
  "Activer l'accès anonyme"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>Le coffre doit avoir la <b>protection contre le vidage</b>, on crée la <b>clé</b>, on donne à l'<b>identité du compte</b> le droit d'utiliser la clé (wrap/unwrap), puis on <b>configure le chiffrement</b> du compte avec cette clé.</p><p>SAS et accès anonyme ne sont pas liés au chiffrement.</p>"
},
{
 "id": "D2-154",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la fonctionnalité de protection des données adaptée à chaque risque.</p><p>Pour répondre, faites glisser la fonctionnalité appropriée vers chaque risque. Chaque fonctionnalité peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Fonctionnalités",
 "srcs": [
  "Suppression réversible des blobs",
  "Contrôle de version",
  "Suppression réversible des conteneurs",
  "Verrou Suppression impossible",
  "Immuabilité"
 ],
 "tgtHead": [
  "Risque",
  "Fonctionnalité"
 ],
 "tgts": [
  {
   "l": "Un administrateur supprime le compte de stockage",
   "a": 3
  },
  {
   "l": "Un script supprime un conteneur entier",
   "a": 2
  },
  {
   "l": "Une application écrase un fichier avec un contenu erroné",
   "a": 1
  },
  {
   "l": "Un rançongiciel tente de chiffrer les sauvegardes conservées dans un conteneur",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Verrou</b> : protège le compte (plan de contrôle) contre la suppression.</li><li><b>Suppression réversible des conteneurs</b> : restaure un conteneur supprimé.</li><li><b>Contrôle de version</b> : retrouve le contenu avant écrasement.</li><li><b>Immuabilité</b> : empêche toute modification ou suppression pendant la rétention, même avec des droits d'écriture. C'est la protection adaptée contre les rançongiciels.</li></ul>"
},
{
 "id": "D2-155",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer la durée maximale ou la limite de chaque fonctionnalité.</p><p>Pour répondre, faites glisser la valeur appropriée vers chaque fonctionnalité. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Valeurs",
 "srcs": [
  "5",
  "7 jours",
  "14 jours",
  "200",
  "365 jours"
 ],
 "tgtHead": [
  "Fonctionnalité",
  "Valeur"
 ],
 "tgts": [
  {
   "l": "Rétention maximale de la suppression réversible des blobs",
   "a": 4
  },
  {
   "l": "Validité maximale d'une SAS de délégation d'utilisateur",
   "a": 1
  },
  {
   "l": "Nombre maximal d'instantanés d'un partage de fichiers",
   "a": 3
  },
  {
   "l": "Nombre maximal de stratégies d'accès stockées par conteneur",
   "a": 0
  }
 ],
 "expl": "<ul><li>Suppression réversible des blobs : de 1 à <b>365 jours</b>.</li><li>SAS de délégation d'utilisateur : <b>7 jours</b> maximum.</li><li>Instantanés de partage : <b>200</b> par partage.</li><li>Stratégies d'accès stockées : <b>5</b> par conteneur, partage, file d'attente ou table.</li></ul><p>14 jours est le délai de récupération d'un compte de stockage supprimé.</p>"
},
{
 "id": "D2-156",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Un compte de stockage a le pare-feu activé (réseaux sélectionnés). Un utilisateur reçoit l'erreur « Cette requête n'est pas autorisée » en ouvrant un conteneur dans le portail, depuis son bureau.</p><p>Quelles <b>deux</b> solutions permettent l'accès ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Désactiver la suppression réversible",
  "Ajouter l'adresse IP publique du bureau dans le pare-feu",
  "Se connecter depuis une VM d'un sous-réseau autorisé",
  "Lui attribuer le rôle Propriétaire du compte"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<p>L'erreur vient du <b>réseau</b>, pas des autorisations : le navigateur appelle le point de terminaison du stockage depuis l'adresse IP de l'utilisateur.</p><ul><li><b>Adresse IP du bureau : oui.</b></li><li><b>VM d'un sous-réseau autorisé : oui</b>, son trafic est accepté.</li><li><b>Propriétaire : non</b>, aucun rôle ne contourne le pare-feu.</li><li><b>Suppression réversible : non</b>, sans rapport.</li></ul>"
},
{
 "id": "D2-157",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez choisir les fonctionnalités qui exigent l'<b>espace de noms hiérarchique</b> sur un compte de stockage.</p><p>Quelles <b>deux</b> fonctionnalités l'exigent ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Site web statique",
  "NFS 3.0 pour le stockage blob",
  "Réplication d'objets",
  "SFTP pour le stockage blob"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>SFTP : oui.</b></li><li><b>NFS 3.0 sur blob : oui.</b></li><li><b>Réplication d'objets : non</b>, elle n'est au contraire <b>pas compatible</b> avec l'espace de noms hiérarchique.</li><li><b>Site web statique : non</b>, il fonctionne avec ou sans.</li></ul>"
},
{
 "id": "D2-158",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous voulez convertir un compte universel v2 existant en compte Data Lake Storage Gen2. Il utilise le contrôle de version et la réplication d'objets.</p><p>Que se passe-t-il au lancement de la mise à niveau ?</p>",
 "opts": [
  "La mise à niveau crée un nouveau compte",
  "La validation échoue : il faut d'abord désactiver les fonctions incompatibles",
  "La mise à niveau réussit et désactive ces fonctions automatiquement",
  "La mise à niveau est réversible à tout moment"
 ],
 "ans": 1,
 "expl": "<p>La mise à niveau vers l'espace de noms hiérarchique commence par une <b>validation</b>. Les fonctions incompatibles (comme la réplication d'objets, certaines options de contrôle de version ou de restauration) doivent être désactivées avant. La mise à niveau est <b>irréversible</b> et se fait sur le même compte.</p>"
},
{
 "id": "D2-159",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez permettre à un partenaire d'envoyer des messages dans la file d'attente commandes de storage71 pendant une semaine, sans lire ni supprimer de messages.</p><p>Quelle autorisation SAS devez-vous donner ?</p>",
 "opts": [
  "Lecture (r) et Traitement (p)",
  "Liste (l) sur le compte",
  "Ajouter (a) sur la file d'attente commandes",
  "Suppression (d)"
 ],
 "ans": 2,
 "expl": "<p>Pour une file d'attente, l'autorisation <b>Ajouter</b> permet d'insérer des messages. <b>Lecture</b> permet de consulter les messages, <b>Traitement</b> (process) de les retirer (Get + Delete). Une SAS de service limitée à la file commandes, avec l'autorisation Ajouter et une expiration à 7 jours, suffit.</p>"
},
{
 "id": "D2-160",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un message ajouté à une file d'attente Azure sans préciser de durée de vie n'est jamais traité.</p><p>Combien de temps reste-t-il dans la file par défaut ?</p>",
 "opts": [
  "24 heures",
  "Indéfiniment",
  "30 jours",
  "7 jours"
 ],
 "ans": 3,
 "expl": "<p>La durée de vie par défaut d'un message de file d'attente est de <b>7 jours</b>. On peut la modifier lors de l'ajout (y compris -1 pour ne jamais expirer).</p>"
},
{
 "id": "D2-161",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous voulez savoir combien de gigaoctets de données contient le compte storage72, et comment ce volume évolue depuis un mois.</p><p>Où devez-vous regarder ?</p>",
 "opts": [
  "Les métriques du compte (Capacité utilisée) dans Azure Monitor",
  "Les clés d'accès",
  "Le journal d'activité",
  "La page Redondance"
 ],
 "ans": 0,
 "expl": "<p>La métrique <b>Capacité utilisée</b> (Used capacity), et par service la capacité blob ou fichier, montre le volume stocké et son évolution dans le temps. Les métriques de capacité sont mises à jour une fois par jour environ.</p>"
},
{
 "id": "D2-162",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous gérez un compte <b>Premium objets blob de blocs</b>. Vous voulez qu'une règle de cycle de vie déplace les anciens blobs vers le niveau Froid.</p><p>Que se passe-t-il ?</p>",
 "opts": [
  "Le compte devient Standard",
  "Les comptes Premium n'ont pas de niveaux d'accès : seule l'action de suppression est disponible",
  "Les blobs passent en Archive",
  "La règle fonctionne normalement"
 ],
 "ans": 1,
 "expl": "<p>Les comptes <b>Premium</b> ne prennent pas en charge les niveaux Chaud, Froid, Très froid et Archive. La gestion du cycle de vie y permet seulement de <b>supprimer</b> des blobs. Pour hiérarchiser, il faut copier les données vers un compte Standard.</p>"
},
{
 "id": "D2-163",
 "dom": 2,
 "type": "single",
 "stem": "<p>Une équipe doit supprimer tous les blobs du dossier temp/ du conteneur data, avec AzCopy.</p><p>Quelle commande devez-vous utiliser ?</p>",
 "opts": [
  "azcopy make",
  "azcopy copy --overwrite=false",
  "azcopy remove \"https://storage73.blob.core.windows.net/data/temp?&lt;SAS&gt;\" --recursive",
  "azcopy sync --delete-destination=true"
 ],
 "ans": 2,
 "expl": "<p><code>azcopy remove</code> avec <code>--recursive</code> supprime tous les blobs sous le préfixe indiqué.</p><p>sync supprime seulement ce qui n'existe plus à la source. make crée un conteneur. copy ne supprime jamais rien.</p>"
},
{
 "id": "D2-164",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un développeur doit se connecter à un seul conteneur avec Azure Storage Explorer. Vous lui avez fourni une URL de SAS de service.</p><p>Comment doit-il se connecter ?</p>",
 "opts": [
  "Avec la clé du compte uniquement",
  "Avec son compte Microsoft Entra uniquement",
  "Avec un point de terminaison privé",
  "Avec l'option « Conteneur d'objets blob » ou « URL de signature d'accès partagé (SAS) »"
 ],
 "ans": 3,
 "expl": "<p>Storage Explorer peut se connecter de plusieurs façons : compte Microsoft Entra (abonnements), clé et nom du compte, chaîne de connexion, ou <b>URL SAS</b> d'une ressource (compte, conteneur, partage, file). Avec une SAS de conteneur, il ne voit que ce conteneur.</p>"
},
{
 "id": "D2-165",
 "dom": 2,
 "type": "single",
 "stem": "<p>Les données de storage74 sont chiffrées au repos. Un auditeur demande quel algorithme est utilisé par défaut.</p><p>Que devez-vous répondre ?</p>",
 "opts": [
  "AES 256 bits, avec des clés gérées par Microsoft par défaut",
  "3DES",
  "Aucun chiffrement par défaut",
  "RSA 2048 bits"
 ],
 "ans": 0,
 "expl": "<p>Le <b>chiffrement du service de stockage</b> (SSE) chiffre toujours les données au repos avec <b>AES 256 bits</b>. Il ne peut pas être désactivé. Les clés sont gérées par Microsoft par défaut, ou par vous (clés gérées par le client).</p>"
},
{
 "id": "D2-166",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez permettre à une application de lire un blob une seule fois, pendant 10 minutes, avec une URL. Le compte interdit l'accès par clé partagée.</p><p>Quel type de SAS devez-vous générer ?</p>",
 "opts": [
  "Aucune SAS n'est possible",
  "Une SAS de délégation d'utilisateur",
  "Une SAS de compte",
  "Une SAS de service"
 ],
 "ans": 1,
 "expl": "<p>Quand l'accès par <b>clé partagée</b> est désactivé, les SAS de compte et de service (signées par une clé du compte) sont refusées. La <b>SAS de délégation d'utilisateur</b>, signée via Microsoft Entra, reste utilisable.</p>"
},
{
 "id": "D2-167",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous voulez que les nouveaux blobs de storage75 soient au niveau <b>Froid</b> par défaut, et que seuls certains soient en Chaud.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une stratégie d'immuabilité",
  "Une SAS par blob",
  "Le niveau d'accès par défaut du compte à Froid",
  "La redondance ZRS"
 ],
 "ans": 2,
 "expl": "<p>Le <b>niveau d'accès par défaut</b> du compte (Configuration) s'applique aux blobs dont le niveau n'est pas défini explicitement. On peut ensuite fixer le niveau Chaud sur certains blobs, ou utiliser une règle de cycle de vie.</p>"
},
{
 "id": "D2-168",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous gérez le stockage blob.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Les niveaux d'accès ne s'appliquent qu'aux blobs de blocs.",
   "a": 0
  },
  {
   "l": "Un conteneur peut contenir des blobs de niveaux différents.",
   "a": 0
  },
  {
   "l": "Un blob archivé peut être lu directement avec l'API Get Blob.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Blobs de blocs : Oui.</b> Les blobs d'ajout et de pages n'ont pas de niveau d'accès.</li><li><b>Niveaux mélangés : Oui.</b> Le niveau se règle par blob.</li><li><b>Lecture d'un blob archivé : Non.</b> Il faut d'abord le réhydrater.</li></ul>"
},
{
 "id": "D2-169",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Le partage de fichiers share17 utilise l'authentification AD DS. User23 a le rôle Lecteur de partage SMB sur share17.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "User23 peut lire un fichier si les ACL NTFS le lui permettent.",
   "a": 0
  },
  {
   "l": "User23 peut écrire un fichier si les ACL NTFS lui donnent le contrôle total.",
   "a": 1
  },
  {
   "l": "Un utilisateur sans rôle peut accéder au partage si une permission par défaut au niveau du partage est configurée.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Lecture : Oui</b>, partage et NTFS l'autorisent.</li><li><b>Écriture : Non.</b> Le niveau du partage ne donne que la lecture ; le plus restrictif l'emporte.</li><li><b>Permission par défaut : Oui</b>, elle s'applique aux identités authentifiées sans rôle explicite.</li></ul>"
},
{
 "id": "D2-170",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous devez estimer le délai de lecture de blobs archivés.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Réhydratation d'un blob de 3 Go, priorité Élevée :",
   "o": [
    "Moins d'une heure",
    "Jusqu'à 15 heures",
    "Plusieurs jours"
   ],
   "a": 0
  },
  {
   "l": "Réhydratation d'un blob de 3 Go, priorité Standard :",
   "o": [
    "Moins d'une heure",
    "Jusqu'à 15 heures",
    "Plusieurs jours"
   ],
   "a": 1
  },
  {
   "l": "Le blob réhydraté peut aller vers :",
   "o": [
    "Archive uniquement",
    "Premium uniquement",
    "Chaud, Froid ou Très froid"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Élevée</b> : généralement moins d'une heure pour les objets de moins de 10 Go.</li><li><b>Standard</b> : jusqu'à 15 heures.</li><li>Le blob réhydraté va vers un niveau <b>en ligne</b> : Chaud, Froid ou Très froid.</li></ul>"
},
{
 "id": "D2-171",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous devez choisir l'option qui répond à chaque besoin d'accès réseau à storage76.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "VM Azure d'un sous-réseau, sans adresse privée pour le compte, gratuit :",
   "o": [
    "Point de terminaison de service",
    "Règle d'adresse IP",
    "Point de terminaison privé"
   ],
   "a": 0
  },
  {
   "l": "Serveurs locaux par VPN, sans passer par Internet :",
   "o": [
    "Point de terminaison privé",
    "Point de terminaison de service",
    "Règle d'adresse IP"
   ],
   "a": 0
  },
  {
   "l": "Un partenaire sur Internet dont l'adresse publique est fixe :",
   "o": [
    "Point de terminaison de service",
    "Règle d'adresse IP",
    "Point de terminaison privé"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Point de terminaison de service</b> : pour des sous-réseaux Azure, gratuit, le compte garde son adresse publique.</li><li><b>Point de terminaison privé</b> : adresse privée, joignable depuis le site local par VPN ou ExpressRoute.</li><li><b>Règle d'adresse IP</b> : pour des clients sur Internet avec une adresse publique connue.</li></ul>"
},
{
 "id": "D2-172",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous créez une règle de cycle de vie pour le conteneur rapports de storage77. Les blobs doivent passer au niveau Froid 30 jours après leur création, et être supprimés 2 ans après leur création.</p><p>Comment devez-vous configurer la règle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Ajouter une règle",
  "sub": "Gestion du cycle de vie",
  "rows": [
   {
    "k": "head",
    "t": "Détails"
   },
   {
    "k": "radio",
    "l": "Étendue de la règle",
    "opts": [
     "Appliquer la règle à tous les objets blob de votre compte de stockage",
     "Limiter les objets blob avec des filtres"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Type d'objet blob",
    "o": [
     "Objets blob de blocs",
     "Objets blob d'ajout"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Objets blob de base"
   },
   {
    "k": "select",
    "l": "Si les objets blob de base étaient",
    "o": [
     "Dernière modification",
     "Créé",
     "Dernier accès"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Plus de (jours)",
    "o": [
     "30",
     "90",
     "730"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Alors",
    "o": [
     "Déplacer vers le stockage froid",
     "Déplacer vers le stockage archive",
     "Supprimer l'objet blob"
    ],
    "a": 0
   },
   {
    "k": "head",
    "t": "Filtre"
   },
   {
    "k": "select",
    "l": "Préfixe d'objet blob",
    "o": [
     "rapports/",
     "rapports",
     "/rapports/*"
    ],
    "a": 0
   }
  ]
 },
 "expl": "<ul><li><b>Limiter avec des filtres</b> pour ne cibler que le conteneur rapports, avec le préfixe <code>rapports/</code> (nom du conteneur suivi d'une barre oblique ; pas de caractère générique).</li><li>Condition <b>Créé</b>, <b>30</b> jours, <b>Déplacer vers le stockage froid</b>. La suppression à 730 jours s'ajoute comme seconde condition dans la même règle.</li></ul><p>Le préfixe « rapports » sans barre oblique toucherait aussi un conteneur nommé rapports2.</p>"
},
{
 "id": "D2-173",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous créez un point de terminaison privé pour le service de fichiers de storage78 dans Subnet-PE de VNet1. Les VM de VNet1 doivent résoudre le nom du compte vers l'adresse privée automatiquement.</p><p>Comment devez-vous configurer le point de terminaison ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Créer un point de terminaison privé",
  "sub": "Centre Private Link",
  "rows": [
   {
    "k": "head",
    "t": "Ressource"
   },
   {
    "k": "text",
    "l": "Ressource",
    "t": "storage78"
   },
   {
    "k": "select",
    "l": "Sous-ressource cible",
    "o": [
     "blob",
     "file",
     "queue",
     "dfs"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "Réseau virtuel"
   },
   {
    "k": "select",
    "l": "Sous-réseau",
    "o": [
     "VNet1/GatewaySubnet",
     "VNet1/Subnet-PE",
     "VNet1/AzureBastionSubnet"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "DNS"
   },
   {
    "k": "radio",
    "l": "Intégrer à une zone DNS privée",
    "opts": [
     "Oui",
     "Non"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Zone DNS privée",
    "o": [
     "privatelink.file.core.windows.net",
     "privatelink.blob.core.windows.net",
     "file.core.windows.net"
    ],
    "a": 0
   }
  ]
 },
 "expl": "<ul><li><b>Sous-ressource file</b> pour Azure Files.</li><li><b>Subnet-PE</b> : les sous-réseaux réservés (GatewaySubnet, AzureBastionSubnet) ne doivent pas accueillir de point de terminaison privé.</li><li><b>Intégration DNS : Oui</b>, avec la zone <b>privatelink.file.core.windows.net</b>, liée à VNet1. Le nom public est alors redirigé (CNAME) vers cette zone qui renvoie l'adresse privée.</li></ul>"
},
{
 "id": "D2-174",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez créer une SAS de délégation d'utilisateur pour un seul blob depuis le portail.</p><p>Quelle option devez-vous sélectionner dans le menu contextuel du blob ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "rapport.pdf | Objet blob",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Versions",
     "Instantanés",
     "Modifier",
     "Générer une SAS",
     "Propriétés",
     "Métadonnées",
     "Modifier le niveau",
     "Acquérir un bail",
     "Supprimer"
    ]
   }
  ]
 },
 "ans": "Générer une SAS",
 "expl": "<p><b>Générer une SAS</b> au niveau du blob propose la méthode de signature : <b>Clé de délégation d'utilisateur</b> (avec votre compte Entra) ou une clé du compte, puis les autorisations, l'expiration, les adresses IP et le protocole.</p><p><b>Modifier le niveau</b> change le niveau d'accès. <b>Acquérir un bail</b> verrouille le blob en écriture pour un client.</p>"
},
{
 "id": "D2-175",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez empêcher que deux processus modifient le même blob en même temps : le premier doit obtenir un verrou exclusif en écriture.</p><p>Quelle fonctionnalité devez-vous utiliser ?</p>",
 "opts": [
  "Une SAS en lecture seule",
  "Une conservation légale",
  "Un verrou de ressource Azure",
  "Un bail (lease) sur le blob"
 ],
 "ans": 3,
 "expl": "<p>Un <b>bail</b> donne à un client un verrou exclusif en écriture et en suppression sur un blob (ou un conteneur), pour une durée de 15 à 60 secondes ou infinie. Les autres clients doivent présenter l'ID du bail pour écrire.</p><p>La conservation légale bloque tout le monde. Un verrou de ressource agit sur le plan de contrôle. Une SAS en lecture seule n'empêche pas les autres d'écrire.</p>"
},
{
 "id": "D2-176",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un développeur stocke la date d'expiration d'un document dans une propriété du blob, et voudrait rechercher tous les blobs expirés du compte sans les parcourir un par un.</p><p>Que devez-vous lui conseiller d'utiliser ?</p>",
 "opts": [
  "Des étiquettes d'index de blob",
  "Des métadonnées de blob",
  "Les propriétés système",
  "Le nom du conteneur"
 ],
 "ans": 0,
 "expl": "<p>Les <b>étiquettes d'index</b> sont indexées par le service : l'opération <b>Find Blobs by Tags</b> retrouve les blobs correspondants dans tout le compte. Elles servent aussi de filtre aux règles de cycle de vie.</p><p>Les <b>métadonnées</b> sont stockées avec le blob mais ne sont pas indexées : il faudrait lire chaque blob.</p>"
},
{
 "id": "D2-177",
 "dom": 2,
 "type": "single",
 "stem": "<p>Votre application doit continuer à <b>écrire</b> dans le stockage même si la région primaire tombe en panne, sans intervention.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "ZRS écrit dans la région jumelée",
  "Aucune redondance ne permet d'écrire automatiquement dans la région secondaire : il faut un basculement",
  "GZRS bascule automatiquement les écritures",
  "RA-GRS permet d'écrire dans la région secondaire"
 ],
 "ans": 1,
 "expl": "<p>La région secondaire des comptes géoredondants est en <b>lecture seule</b> (avec RA-) jusqu'à un <b>basculement</b>, qui doit être lancé (par le client, ou par Microsoft dans des cas extrêmes). RA-GRS et RA-GZRS ne permettent que la lecture.</p><p>ZRS reste dans une seule région. Pour écrire sans interruption dans plusieurs régions, il faut une architecture applicative (par exemple deux comptes).</p>"
},
{
 "id": "D2-178",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous devez permettre à un serveur local d'utiliser Azure File Sync. Le serveur exécute Windows Server 2022.</p><p>Quel composant devez-vous installer sur le serveur ?</p>",
 "opts": [
  "L'agent Azure Monitor",
  "AzCopy",
  "L'agent Azure File Sync",
  "Microsoft Entra Connect"
 ],
 "ans": 2,
 "expl": "<p>L'<b>agent Azure File Sync</b> s'installe sur chaque serveur Windows Server pris en charge. Il inscrit le serveur auprès du service de synchronisation de stockage et gère la synchronisation et la hiérarchisation cloud.</p><p>Les autres composants ne participent pas à File Sync.</p>"
},
{
 "id": "D2-179",
 "dom": 2,
 "type": "single",
 "stem": "<p>Vous retirez un serveur d'une synchronisation Azure File Sync. Vous voulez que les fichiers hiérarchisés restent utilisables sur ce serveur.</p><p>Que devez-vous faire avant de supprimer le point de terminaison serveur ?</p>",
 "opts": [
  "Désinstaller l'agent immédiatement",
  "Supprimer le partage Azure",
  "Supprimer le service de synchronisation",
  "Rappeler tous les fichiers hiérarchisés (Invoke-StorageSyncFileRecall) ou désactiver la hiérarchisation et attendre le rappel"
 ],
 "ans": 3,
 "expl": "<p>Les fichiers hiérarchisés ne sont que des <b>pointeurs</b> vers Azure. Si on supprime le point de terminaison sans les rappeler, ils deviennent inaccessibles sur le serveur. On les <b>rappelle</b> d'abord, par exemple avec <code>Invoke-StorageSyncFileRecall</code>.</p><p>Supprimer le partage ou le service détruirait les données ou la configuration.</p>"
},
{
 "id": "D2-180",
 "dom": 2,
 "type": "single",
 "stem": "<p>Un compte de stockage contient 20 To de vidéos lues tous les jours pendant leur premier mois, puis presque jamais, mais qui doivent rester lisibles immédiatement pendant 3 ans.</p><p>Quelle stratégie est la plus économique ?</p>",
 "opts": [
  "Niveau Chaud au départ, règle de cycle de vie vers Froid après 30 jours puis Très froid après 90 jours, suppression après 3 ans",
  "Compte Premium objets blob de blocs",
  "Niveau Archive dès le chargement",
  "Niveau Chaud pendant 3 ans"
 ],
 "ans": 0,
 "expl": "<p>Les vidéos sont chaudes au début puis froides : une règle de cycle de vie les fait descendre progressivement vers des niveaux <b>en ligne</b> moins chers (Froid puis Très froid), et les supprime à 3 ans.</p><p>Archive empêcherait la lecture immédiate. Rester en Chaud ou en Premium coûterait beaucoup plus cher.</p>"
}
);
