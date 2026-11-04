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
 "expl": "<p>Chaque service a son point de terminaison : <b>blob</b>, <b>file</b>, <b>queue</b>, <b>table</b>, <b>dfs</b> (Data Lake Gen2) et <b>web</b> (site web statique, avec un numéro de zone). Le nom du compte, unique dans Azure, sert de préfixe.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage59"
  ],
  "title": "storage59 | Points de terminaison",
  "menu": [
   "*Points de terminaison"
  ],
  "rows": [
   [
    "Blob",
    "storage59.blob.core.windows.net"
   ],
   [
    "*Fichier",
    "storage59.file.core.windows.net"
   ],
   [
    "*Data Lake Storage",
    "storage59.dfs.core.windows.net"
   ],
   [
    "*File d'attente",
    "storage59.queue.core.windows.net"
   ]
  ]
 },
 "keep": "blob, file, queue, table, dfs (Data Lake), web (site statique)."
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
 "expl": "<ul><li><b>Nouvelle version : Oui.</b> Chaque modification conserve automatiquement l'état précédent comme version.</li><li><b>Suppression : Non.</b> Supprimer le blob transforme la version actuelle en version précédente ; les versions restent (et sont facturées) jusqu'à ce qu'on les supprime explicitement ou par une règle de cycle de vie.</li><li><b>Promouvoir : Oui.</b> On copie la version voulue sur le blob de base.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage60",
   "Conteneurs",
   "data"
  ],
  "title": "doc.txt | Versions",
  "menu": [
   "Vue d'ensemble",
   "*Versions"
  ],
  "rows": [
   [
    "Version actuelle",
    "2026-10-27 10:12"
   ],
   [
    "*Version précédente",
    "2026-10-26 18:40 · Rendre la version actuelle"
   ]
  ],
  "btn": "Rendre la version actuelle"
 },
 "keep": "Versions : créées à chaque écriture, gardées après suppression, promouvables."
},
{
 "id": "D2-149",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez bloquer par défaut tout accès réseau à storage66, puis autoriser Subnet1 de VNet1, avec Azure CLI.</p><p>Comment devez-vous compléter les commandes ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><code>--default-action Deny</code> fait passer le compte en « réseaux sélectionnés ». <code>az storage account network-rule add</code> ajoute une règle de réseau virtuel (ou d'adresse IP avec <code>--ip-address</code>).</p><p>Le sous-réseau doit avoir le point de terminaison de service Microsoft.Storage. Les sous-groupes <code>firewall</code> et <code>private-endpoint</code> n'existent pas sous <code>az storage account</code>.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage66"
  ],
  "title": "storage66 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*--default-action Deny",
    "Réseaux sélectionnés"
   ],
   [
    "*network-rule add",
    "VNet1 / Subnet1"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "CLI : --default-action Deny puis az storage account network-rule add.",
 "tpl": "az storage account update --name storage66 --resource-group RG1 --default-action {0}<br>az storage account {1} add --account-name storage66 --resource-group RG1 --vnet-name VNet1 --subnet Subnet1"
},
{
 "id": "D2-150",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez interdire l'accès anonyme aux blobs pour tout le compte storage67, avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><code>Set-AzStorageAccount -AllowBlobPublicAccess $false</code> interdit l'accès anonyme au niveau du compte, quels que soient les réglages des conteneurs.</p><p>Set-AzStorageContainerAcl règle un seul conteneur. -EnableHttpsTrafficOnly concerne le transfert sécurisé ; -AllowSharedKeyAccess l'accès par clé.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage67"
  ],
  "title": "storage67 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Autoriser l'accès anonyme aux objets blob",
    "Désactivé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Interdire l'anonyme pour tout le compte = AllowBlobPublicAccess $false.",
 "tpl": "{0} -ResourceGroupName RG1 -Name storage67 {1} $false"
},
{
 "id": "D2-151",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>Vous devez régénérer key1 de storage68 avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><code>New-AzStorageAccountKey -KeyName key1</code> régénère la clé. Get-AzStorageAccountKey ne fait que lire les clés. Les noms des clés d'accès sont <b>key1</b> et <b>key2</b> (kerb1 et kerb2 sont des clés Kerberos utilisées par Azure Files avec AD DS).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage68"
  ],
  "title": "storage68 | Clés d'accès",
  "menu": [
   "*Clés d'accès"
  ],
  "rows": [
   [
    "*key1",
    "Faire pivoter (New-AzStorageAccountKey)"
   ]
  ],
  "btn": "Faire pivoter la clé"
 },
 "keep": "Régénérer = New-AzStorageAccountKey -KeyName key1|key2.",
 "tpl": "{0} -ResourceGroupName RG1 -Name storage68 -KeyName {1}"
},
{
 "id": "D2-152",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez migrer storage69 de France Central vers West Europe, sans perdre sa configuration.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Un compte ne change jamais de région. On <b>exporte le modèle</b>, on le <b>déploie</b> dans la nouvelle région avec un nouveau nom, on <b>copie les données</b>, puis on <b>bascule les applications</b> et on supprime l'ancien compte.</p><p>Le basculement géographique ne va que vers la région jumelée, et la région n'est pas modifiable dans les propriétés.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage69"
  ],
  "title": "storage69 | Exporter le modèle",
  "menu": [
   "*Exporter le modèle"
  ],
  "rows": [
   [
    "1",
    "Exporter"
   ],
   [
    "2",
    "Déployer dans West Europe"
   ],
   [
    "3",
    "AzCopy"
   ],
   [
    "4",
    "Basculer les applications, supprimer l'ancien"
   ]
  ]
 },
 "keep": "Migration de région : modèle, nouveau compte, copie, bascule.",
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
 ]
},
{
 "id": "D2-153",
 "dom": 2,
 "type": "order",
 "stem": "<p>Vous devez configurer storage70 pour utiliser des clés gérées par le client stockées dans KV2.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Le coffre doit avoir la <b>protection contre le vidage</b>, on crée la <b>clé</b>, on donne à l'<b>identité du compte</b> le droit d'utiliser la clé (wrap/unwrap), puis on <b>configure le chiffrement</b> du compte avec cette clé.</p><p>SAS et accès anonyme ne sont pas liés au chiffrement.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage70"
  ],
  "title": "storage70 | Chiffrement",
  "menu": [
   "*Chiffrement"
  ],
  "rows": [
   [
    "Coffre",
    "KV2 (protection contre le vidage)"
   ],
   [
    "*Type de chiffrement",
    "Clés gérées par le client"
   ],
   [
    "Identité",
    "Utilisateur du service de chiffrement Key Vault"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "CMK : coffre protégé, clé, droit pour l'identité, puis réglage du compte.",
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
 ]
},
{
 "id": "D2-154",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la fonctionnalité de protection des données adaptée à chaque risque.</p><p>Pour répondre, faites glisser la fonctionnalité appropriée vers chaque risque. Chaque fonctionnalité peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Fonctionnalités",
 "tgtHead": [
  "Risque",
  "Fonctionnalité"
 ],
 "srcs": [
  "Suppression réversible des blobs",
  "Contrôle de version",
  "Suppression réversible des conteneurs",
  "Verrou Suppression impossible",
  "Immuabilité"
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
 "expl": "<ul><li><b>Verrou</b> : protège le compte (plan de contrôle) contre la suppression.</li><li><b>Suppression réversible des conteneurs</b> : restaure un conteneur supprimé.</li><li><b>Contrôle de version</b> : retrouve le contenu avant écrasement.</li><li><b>Immuabilité</b> : empêche toute modification ou suppression pendant la rétention, même avec des droits d'écriture. C'est la protection adaptée contre les rançongiciels.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "Protections",
  "rows": [
   [
    "*Compte supprimé",
    "Verrou"
   ],
   [
    "Conteneur supprimé",
    "Suppression réversible des conteneurs"
   ],
   [
    "Blob écrasé",
    "Versions"
   ],
   [
    "*Rançongiciel",
    "Immuabilité"
   ]
  ]
 },
 "keep": "Rançongiciel = immuabilité ; suppression du compte = verrou."
},
{
 "id": "D2-155",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer la durée maximale ou la limite de chaque fonctionnalité.</p><p>Pour répondre, faites glisser la valeur appropriée vers chaque fonctionnalité. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Valeurs",
 "tgtHead": [
  "Fonctionnalité",
  "Valeur"
 ],
 "srcs": [
  "5",
  "7 jours",
  "14 jours",
  "200",
  "365 jours"
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
 "expl": "<ul><li>Suppression réversible des blobs : de 1 à <b>365 jours</b>.</li><li>SAS de délégation d'utilisateur : <b>7 jours</b> maximum.</li><li>Instantanés de partage : <b>200</b> par partage.</li><li>Stratégies d'accès stockées : <b>5</b> par conteneur, partage, file d'attente ou table.</li></ul><p>14 jours est le délai de récupération d'un compte de stockage supprimé.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "Limites à retenir",
  "rows": [
   [
    "Suppression réversible des blobs",
    "1 à 365 jours"
   ],
   [
    "*SAS de délégation",
    "7 jours"
   ],
   [
    "Instantanés de partage",
    "200"
   ],
   [
    "Stratégies d'accès stockées",
    "5"
   ]
  ]
 },
 "keep": "365 j, 7 j, 200, 5 (et 14 j pour récupérer un compte)."
},
{
 "id": "D2-156",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Un compte de stockage a le pare-feu activé (réseaux sélectionnés). Un utilisateur reçoit l'erreur « Cette requête n'est pas autorisée » en ouvrant un conteneur dans le portail, depuis son bureau.</p><p>Pour chacune des solutions suivantes, sélectionnez Oui si elle permet l'accès. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Désactiver la suppression réversible des blobs",
   "a": 1
  },
  {
   "l": "Ajouter l'IP publique du bureau au pare-feu",
   "a": 0
  },
  {
   "l": "Se connecter depuis une VM d'un sous-réseau autorisé",
   "a": 0
  },
  {
   "l": "Lui attribuer le rôle Propriétaire sur le compte de stockage",
   "a": 1
  }
 ],
 "expl": "<p>L'erreur vient du <b>réseau</b>, pas des autorisations : le navigateur appelle le point de terminaison du stockage depuis l'adresse IP de l'utilisateur.</p><ul><li><b>Adresse IP du bureau : oui.</b></li><li><b>VM d'un sous-réseau autorisé : oui</b>, son trafic est accepté.</li><li><b>Propriétaire : non</b>, aucun rôle ne contourne le pare-feu.</li><li><b>Suppression réversible : non</b>, sans rapport.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs"
  ],
  "title": "Erreur d'autorisation",
  "rows": [
   [
    "*Cette requête n'est pas autorisée",
    "Adresse IP cliente non autorisée"
   ],
   [
    "Solution",
    "Ajouter l'IP ou passer par un réseau autorisé"
   ]
  ]
 },
 "keep": "Erreur réseau du portail = votre IP n'est pas autorisée par le pare-feu."
},
{
 "id": "D2-157",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Vous devez choisir les fonctionnalités qui exigent l'<b>espace de noms hiérarchique</b> sur un compte de stockage.</p><p>Pour chacune des fonctionnalités suivantes, sélectionnez Oui si elle exige l'espace de noms hiérarchique. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Site web statique",
   "a": 1
  },
  {
   "l": "NFS 3.0 pour le stockage blob",
   "a": 0
  },
  {
   "l": "Réplication d'objets entre comptes",
   "a": 1
  },
  {
   "l": "SFTP pour le stockage blob",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>SFTP : oui.</b></li><li><b>NFS 3.0 sur blob : oui.</b></li><li><b>Réplication d'objets : non</b>, elle n'est au contraire <b>pas compatible</b> avec l'espace de noms hiérarchique.</li><li><b>Site web statique : non</b>, il fonctionne avec ou sans.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Avancé",
  "menu": [
   "*Avancé"
  ],
  "rows": [
   [
    "*Espace de noms hiérarchique",
    "Requis pour SFTP, NFS 3.0"
   ],
   [
    "Incompatible avec",
    "Réplication d'objets"
   ]
  ]
 },
 "keep": "SFTP et NFS 3.0 blob exigent l'espace de noms hiérarchique."
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
 "expl": "<ul><li><b>Blobs de blocs : Oui.</b> Les blobs d'ajout et de pages n'ont pas de niveau d'accès.</li><li><b>Niveaux mélangés : Oui.</b> Le niveau se règle par blob.</li><li><b>Lecture d'un blob archivé : Non.</b> Il faut d'abord le réhydrater.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "data"
  ],
  "title": "data | Objets blob",
  "rows": [
   [
    "a.mp4",
    "Blob de blocs · Chaud"
   ],
   [
    "b.mp4",
    "Blob de blocs · Archive"
   ],
   [
    "*trace.log",
    "Blob d'ajout · pas de niveau"
   ]
  ]
 },
 "keep": "Niveaux = blobs de blocs, par blob ; Archive = réhydrater avant de lire."
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
 "expl": "<ul><li><b>Lecture : Oui</b>, partage et NTFS l'autorisent.</li><li><b>Écriture : Non.</b> Le niveau du partage ne donne que la lecture ; le plus restrictif l'emporte.</li><li><b>Permission par défaut : Oui</b>, elle s'applique aux identités authentifiées sans rôle explicite.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers",
   "share17"
  ],
  "title": "share17 | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*User23",
    "Lecteur de partage SMB"
   ],
   [
    "Permission par défaut",
    "Selon configuration"
   ]
  ]
 },
 "keep": "Le niveau partage plafonne les droits NTFS."
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
 "expl": "<ul><li><b>Élevée</b> : généralement moins d'une heure pour les objets de moins de 10 Go.</li><li><b>Standard</b> : jusqu'à 15 heures.</li><li>Le blob réhydraté va vers un niveau <b>en ligne</b> : Chaud, Froid ou Très froid.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "archives"
  ],
  "title": "Modifier le niveau",
  "rows": [
   [
    "*Niveau cible",
    "Chaud · Froid · Très froid"
   ],
   [
    "Élevée",
    "< 1 h (< 10 Go)"
   ],
   [
    "Standard",
    "≤ 15 h"
   ]
  ]
 },
 "keep": "Réhydratation : Élevée < 1 h, Standard ≤ 15 h, vers un niveau en ligne."
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
 "expl": "<ul><li><b>Point de terminaison de service</b> : pour des sous-réseaux Azure, gratuit, le compte garde son adresse publique.</li><li><b>Point de terminaison privé</b> : adresse privée, joignable depuis le site local par VPN ou ExpressRoute.</li><li><b>Règle d'adresse IP</b> : pour des clients sur Internet avec une adresse publique connue.</li></ul>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage76"
  ],
  "title": "storage76 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Sous-réseau Azure",
    "Point de terminaison de service"
   ],
   [
    "Site local VPN",
    "Point de terminaison privé"
   ],
   [
    "Partenaire Internet",
    "Règle d'adresse IP"
   ]
  ]
 },
 "keep": "Sous-réseau Azure = service ; site local = privé ; Internet = règle IP."
},
{
 "id": "D2-172",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous créez une règle de cycle de vie pour le conteneur rapports de storage77. Les blobs doivent passer au niveau Froid 30 jours après leur création, et être supprimés 2 ans après leur création.</p><p>Comment devez-vous configurer la règle ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Limiter avec des filtres</b> pour ne cibler que le conteneur rapports, avec le préfixe <code>rapports/</code> (nom du conteneur suivi d'une barre oblique ; pas de caractère générique).</li><li>Condition <b>Créé</b>, <b>30</b> jours, <b>Déplacer vers le stockage froid</b>. La suppression à 730 jours s'ajoute comme seconde condition dans la même règle.</li></ul><p>Le préfixe « rapports » sans barre oblique toucherait aussi un conteneur nommé rapports2.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage77"
  ],
  "title": "Gestion du cycle de vie | Ajouter une règle",
  "menu": [
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "Étendue",
    "Limiter avec des filtres"
   ],
   [
    "*Créé il y a plus de 30 jours",
    "Déplacer vers le stockage froid"
   ],
   [
    "*Créé il y a plus de 730 jours",
    "Supprimer l'objet blob"
   ],
   [
    "*Préfixe",
    "rapports/"
   ]
  ],
  "btn": "Ajouter"
 },
 "keep": "Préfixe = conteneur/dossier, sans caractère générique ; condition Créé, Modifié ou Dernier accès.",
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
 }
},
{
 "id": "D2-173",
 "dom": 2,
 "type": "screen",
 "stem": "<p>Vous créez un point de terminaison privé pour le service de fichiers de storage78 dans Subnet-PE de VNet1. Les VM de VNet1 doivent résoudre le nom du compte vers l'adresse privée automatiquement.</p><p>Comment devez-vous configurer le point de terminaison ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Sous-ressource file</b> pour Azure Files.</li><li><b>Subnet-PE</b> : les sous-réseaux réservés (GatewaySubnet, AzureBastionSubnet) ne doivent pas accueillir de point de terminaison privé.</li><li><b>Intégration DNS : Oui</b>, avec la zone <b>privatelink.file.core.windows.net</b>, liée à VNet1. Le nom public est alors redirigé (CNAME) vers cette zone qui renvoie l'adresse privée.</li></ul>",
 "portal": {
  "path": [
   "Centre Private Link",
   "Créer un point de terminaison privé"
  ],
  "title": "Créer un point de terminaison privé",
  "menu": [
   "Informations de base",
   "Ressource",
   "Réseau virtuel",
   "*DNS"
  ],
  "rows": [
   [
    "Sous-ressource cible",
    "file"
   ],
   [
    "Sous-réseau",
    "VNet1/Subnet-PE"
   ],
   [
    "*Intégrer à une zone DNS privée",
    "Oui · privatelink.file.core.windows.net"
   ]
  ],
  "btn": "Créer"
 },
 "keep": "Point de terminaison privé : bonne sous-ressource, sous-réseau normal, zone privatelink.<service>.",
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
 }
},
{
 "id": "D2-174",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>Vous devez créer une SAS de délégation d'utilisateur pour un seul blob depuis le portail.</p><p>Quelle option devez-vous sélectionner dans le menu contextuel du blob ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Générer une SAS",
 "expl": "<p><b>Générer une SAS</b> au niveau du blob propose la méthode de signature : <b>Clé de délégation d'utilisateur</b> (avec votre compte Entra) ou une clé du compte, puis les autorisations, l'expiration, les adresses IP et le protocole.</p><p><b>Modifier le niveau</b> change le niveau d'accès. <b>Acquérir un bail</b> verrouille le blob en écriture pour un client.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "docs",
   "rapport.pdf"
  ],
  "title": "rapport.pdf | Générer une SAS",
  "menu": [
   "Vue d'ensemble",
   "Versions",
   "*Générer une SAS"
  ],
  "rows": [
   [
    "*Méthode de signature",
    "Clé de délégation d'utilisateur"
   ]
  ],
  "btn": "Générer le jeton et l'URL SAS"
 },
 "keep": "SAS d'un blob = Générer une SAS sur le blob.",
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
 }
}
);
