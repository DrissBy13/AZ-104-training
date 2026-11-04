/* Études de cas (lot 5 : C009 et C010, stockage) */
AZ.cases.push(
{
 "id": "C009",
 "title": "Litware Media",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Litware Media produit des vidéos pour la télévision. Ses rushs, ses vidéos publiées et ses contrats sont stockés dans Azure. Le siège de Paris est relié au réseau virtuel VNet-Media par un VPN site à site. La facture de stockage et un audit de sécurité imposent une refonte.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Comptes de stockage</b> (France Central)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Type</th><th>Redondance</th><th>Configuration</th></tr><tr><td>stlitmedia</td><td>Universel v2</td><td>GRS</td><td>Niveau par défaut Chaud ; contrôle de version désactivé ; suppression réversible des blobs 7 jours, des conteneurs désactivée ; accès au réseau public activé à partir de tous les réseaux ; accès par clé de compte autorisé</td></tr><tr><td>stlitlake</td><td>Universel v2, espace de noms hiérarchique</td><td>ZRS</td><td>Conteneur analytics, avec les dossiers /finance et /marketing</td></tr><tr><td>stlitold</td><td>Universel v1 (Storage)</td><td>LRS</td><td>Archives des anciennes émissions, utilisées par une application par leur URL</td></tr></table></div><p>stlitmedia contient les conteneurs <b>raw</b> (rushs, 40 To), <b>published</b> (vidéos publiées) et <b>contracts</b> (contrats PDF).</p><p><b>Réseau</b> : VNet-Media contient Subnet-Enc (VM d'encodage, auxquelles est attribuée l'identité managée UAI-Enc) et Subnet-PE (vide). Les serveurs DNS du siège sont des contrôleurs de domaine Windows. Les VM d'encodage écrivent dans raw avec key1, stockée dans un fichier de configuration.</p>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>Les rushs de raw sont lus intensément pendant 15 jours après leur dernière modification, puis rarement mais doivent rester lisibles immédiatement jusqu'à 1 an. Ils sont ensuite conservés 5 ans de plus au coût le plus bas (une relecture en 24 heures est acceptable), puis supprimés.</li><li>Les contrats ne doivent pouvoir être ni modifiés ni supprimés pendant 10 ans, même par un administrateur, et la règle ne doit pas pouvoir être raccourcie.</li><li>Le contenu de published doit pouvoir être remis dans son état de n'importe quel moment des 14 derniers jours.</li><li>Les VM d'encodage doivent écrire dans raw sans aucun secret. À terme, aucune clé de compte ne doit plus pouvoir être utilisée sur stlitmedia.</li><li>Le siège de Paris doit accéder à stlitmedia par une adresse IP privée, et stlitmedia ne doit plus être joignable depuis Internet.</li><li>Seul le groupe Finance doit lire et écrire dans /finance de stlitlake ; les autres analystes gardent leur accès au reste du conteneur.</li><li>stlitold doit pouvoir utiliser les niveaux d'accès et la gestion du cycle de vie, sans changer les URL utilisées par l'application.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C009-1",
   "dom": 2,
   "type": "yngrid",
   "stem": "<p>Vous examinez la configuration actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Un blob de raw peut être placé au niveau Archive.",
     "a": 0
    },
    {
     "l": "Un blob de stlitlake peut être placé au niveau Archive.",
     "a": 1
    },
    {
     "l": "Si le conteneur published est supprimé, ses blobs peuvent être récupérés pendant 7 jours.",
     "a": 1
    },
    {
     "l": "Les VM d'encodage peuvent recevoir une SAS de délégation d'utilisateur valable 30 jours.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>raw en Archive : Oui.</b> Le niveau Archive est pris en charge en LRS, GRS et RA-GRS : stlitmedia est en GRS.</li><li><b>stlitlake en Archive : Non.</b> Archive n'est pas pris en charge sur un compte ZRS (ni GZRS, RA-GZRS).</li><li><b>Conteneur supprimé : Non.</b> La suppression réversible des blobs ne protège pas la suppression d'un conteneur : il faut celle des conteneurs, désactivée ici.</li><li><b>SAS de 30 jours : Non.</b> Une SAS de délégation d'utilisateur ne peut pas dépasser 7 jours, la durée maximale de la clé de délégation.</li></ul>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stlitmedia"
    ],
    "title": "stlitmedia | Protection des données",
    "menu": [
     "Vue d'ensemble",
     "*Protection des données"
    ],
    "rows": [
     [
      "Suppression réversible des blobs",
      "7 jours"
     ],
     [
      "*Suppression réversible des conteneurs",
      "Désactivée"
     ]
    ]
   },
   "keep": "Archive : LRS, GRS, RA-GRS seulement. Conteneur supprimé : suppression réversible des conteneurs. SAS de délégation : 7 jours au plus."
  },
  {
   "id": "C009-2",
   "dom": 2,
   "type": "hot",
   "stem": "<p>Vous créez la règle de cycle de vie de raw pour répondre à l'exigence 1. Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "15 jours après la dernière modification :",
     "o": [
      "Déplacer vers Froid",
      "Déplacer vers Très froid",
      "Déplacer vers Archive",
      "Ne rien faire"
     ],
     "a": 1
    },
    {
     "l": "365 jours après la dernière modification :",
     "o": [
      "Déplacer vers Froid",
      "Déplacer vers Très froid",
      "Déplacer vers Archive",
      "Supprimer le blob"
     ],
     "a": 2
    },
    {
     "l": "Suppression, condition :",
     "o": [
      "daysAfterModificationGreaterThan 1825",
      "daysAfterModificationGreaterThan 2190",
      "daysAfterCreationGreaterThan 365",
      "daysAfterLastAccessTimeGreaterThan 1825"
     ],
     "a": 1
    }
   ],
   "expl": "<ul><li><b>15 jours : Très froid.</b> Les rushs doivent rester lisibles immédiatement : Archive est exclu. Très froid coûte moins cher en stockage que Froid ; sa durée minimale de 90 jours ne gêne pas, puisque les blobs y restent environ un an.</li><li><b>365 jours : Archive.</b> Une relecture en 24 heures est acceptable : c'est le niveau le moins cher. La réhydratation standard prend jusqu'à 15 heures.</li><li><b>Suppression :</b> 1 an, plus 5 ans de conservation, soit 6 ans = <b>2 190 jours</b> après la dernière modification. 1 825 jours (5 ans) supprimerait un an trop tôt. Le dernier accès n'est pas suivi sur le compte, et la création ne correspond pas à l'exigence.</li></ul>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stlitmedia",
     "Gestion du cycle de vie"
    ],
    "title": "Règle raw-tiering",
    "menu": [
     "*Gestion du cycle de vie"
    ],
    "rows": [
     [
      "Très froid",
      "> 15 jours"
     ],
     [
      "Archive",
      "> 365 jours"
     ],
     [
      "*Supprimer",
      "> 2190 jours"
     ]
    ],
    "btn": "Ajouter"
   },
   "keep": "Les jours d'une règle se comptent depuis la date de référence (modification), pas depuis l'étape précédente."
  },
  {
   "id": "C009-3",
   "dom": 2,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre aux exigences 2, 3, 6 et 7. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Exigence",
    "Configuration"
   ],
   "srcs": [
    "Une rétention temporelle de 10 ans, verrouillée",
    "Une conservation légale",
    "La restauration à un point dans le temps",
    "La suppression réversible des conteneurs",
    "La mise à niveau vers universel v2",
    "Un nouveau compte v2 et une copie AzCopy",
    "Des ACL POSIX sur /finance",
    "Le rôle Contributeur aux données blob sur analytics"
   ],
   "tgts": [
    {
     "l": "Exigence 2 (contracts)",
     "a": 0
    },
    {
     "l": "Exigence 3 (published)",
     "a": 2
    },
    {
     "l": "Exigence 6 (stlitlake)",
     "a": 6
    },
    {
     "l": "Exigence 7 (stlitold)",
     "a": 4
    }
   ],
   "expl": "<ul><li><b>Exigence 2 :</b> une stratégie de rétention temporelle verrouillée ne peut plus être raccourcie ni supprimée. Une conservation légale n'a pas de durée et peut être levée.</li><li><b>Exigence 3 :</b> la restauration à un point dans le temps remet un ensemble de blobs de blocs dans un état passé. Elle exige le contrôle de version, le flux de modification et la suppression réversible des blobs (avec une rétention supérieure à la période de restauration).</li><li><b>Exigence 6 :</b> le RBAC s'arrête au conteneur. Dans un compte à espace de noms hiérarchique, les ACL POSIX donnent des droits au niveau d'un dossier.</li><li><b>Exigence 7 :</b> la mise à niveau vers v2 se fait sur place, sans changer les points de terminaison ni les URL. Un nouveau compte changerait le nom, donc les URL.</li></ul>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stlitmedia",
     "Conteneurs",
     "contracts"
    ],
    "title": "contracts | Stratégie d'accès",
    "menu": [
     "*Stratégie d'accès"
    ],
    "rows": [
     [
      "*Rétention temporelle",
      "3 650 jours · Verrouillée"
     ]
    ]
   },
   "keep": "Verrouillée = non raccourcissable. Droits par dossier = ACL POSIX. v1 → v2 sur place, URL inchangées."
  },
  {
   "id": "C009-4",
   "dom": 2,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence 4 sans interrompre l'encodage.</p><p>Quelles <b>quatre</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Attribuer à UAI-Enc le rôle Contributeur aux données blob du stockage sur le conteneur raw",
    "Modifier l'application d'encodage pour s'authentifier avec UAI-Enc au lieu de key1",
    "Vérifier dans les journaux StorageWrite qu'aucune requête n'utilise plus la clé partagée",
    "Désactiver « Autoriser l'accès par clé de compte de stockage » sur stlitmedia",
    "Régénérer key1 et key2 de stlitmedia",
    "Remplacer key1 par une SAS de compte valable 1 an"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>L'identité managée remplace le secret : on lui donne d'abord un rôle de <b>données</b> sur raw (le rôle Contributeur du plan de contrôle ne suffit pas), puis on bascule l'application. Avant de désactiver la clé partagée, Microsoft recommande de vérifier dans les journaux (champ AuthenticationType) qu'aucun client ne l'utilise encore, sinon des applications oubliées tomberaient. La désactivation bloque aussi les SAS signées par les clés : une SAS de compte ne répond pas à l'exigence. Régénérer les clés n'empêche pas d'en utiliser de nouvelles.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stlitmedia"
    ],
    "title": "stlitmedia | Configuration",
    "menu": [
     "Vue d'ensemble",
     "*Configuration"
    ],
    "rows": [
     [
      "*Autoriser l'accès par clé de compte de stockage",
      "Désactivé"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Rôle de données, bascule de l'application, vérification des journaux, puis désactivation de la clé partagée."
  },
  {
   "id": "C009-5",
   "dom": 2,
   "type": "cmd",
   "stem": "<p>Vous devez répondre à l'exigence 5. Comment devez-vous compléter les commandes ?</p>",
   "rows": [
    {
     "l": "--subnet",
     "o": [
      "GatewaySubnet",
      "Subnet-PE",
      "Subnet-Enc",
      "AzureFirewallSubnet"
     ],
     "a": 1
    },
    {
     "l": "--group-id",
     "o": [
      "blob",
      "file",
      "dfs",
      "web"
     ],
     "a": 0
    },
    {
     "l": "--public-network-access",
     "o": [
      "Enabled",
      "Disabled",
      "SecuredByPerimeter",
      "None"
     ],
     "a": 1
    }
   ],
   "tpl": "az network private-endpoint create --resource-group RG-Media --name pe-media --vnet-name VNet-Media --subnet {0} --private-connection-resource-id $saId --group-id {1} --connection-name pe-media-conn && az storage account update --resource-group RG-Media --name stlitmedia --public-network-access {2}",
   "expl": "<ul><li><b>Subnet-PE :</b> un point de terminaison privé ne peut pas aller dans GatewaySubnet. Subnet-PE est prévu pour cela (Subnet-Enc fonctionnerait aussi techniquement, mais mélanger les rôles complique les NSG).</li><li><b>blob :</b> les vidéos sont des blobs, la sous-ressource cible est blob (dfs servirait à l'espace de noms hiérarchique, absent sur stlitmedia).</li><li><b>Disabled :</b> l'accès au réseau public désactivé, seuls les points de terminaison privés restent utilisables.</li></ul>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stlitmedia"
    ],
    "title": "stlitmedia | Mise en réseau",
    "menu": [
     "*Mise en réseau"
    ],
    "rows": [
     [
      "*Accès au réseau public",
      "Désactivé"
     ],
     [
      "Points de terminaison privés",
      "pe-media (blob) · Approuvé"
     ]
    ]
   },
   "keep": "Un point de terminaison privé par sous-ressource (blob, file, dfs…), puis accès public désactivé."
  },
  {
   "id": "C009-6",
   "dom": 2,
   "type": "single",
   "stem": "<p>Après le déploiement de pe-media, les VM de VNet-Media résolvent stlitmedia.blob.core.windows.net vers l'adresse privée, mais les postes de Paris obtiennent toujours l'adresse publique. Que devez-vous configurer ?</p>",
   "opts": [
    "Un redirecteur conditionnel vers un DNS Private Resolver",
    "Un enregistrement A public de stlitmedia vers l'adresse privée",
    "Une règle IP du compte pour l'adresse publique de Paris",
    "Un point de terminaison de service sur le GatewaySubnet"
   ],
   "ans": 0,
   "expl": "<p>La zone privée privatelink.blob.core.windows.net n'est visible que depuis les réseaux virtuels liés. Les DNS de Paris doivent transférer blob.core.windows.net (redirecteur conditionnel) vers le <b>point de terminaison entrant d'un DNS Private Resolver</b> de VNet-Media, qui résout avec la zone privée. On ne modifie pas un DNS public, et une règle IP ou un point de terminaison de service ne donnent pas d'adresse privée.</p>",
   "portal": {
    "path": [
     "DNS Private Resolver",
     "dnspr-media"
    ],
    "title": "dnspr-media | Points de terminaison entrants",
    "menu": [
     "*Points de terminaison entrants"
    ],
    "rows": [
     [
      "*in-media",
      "10.50.2.4"
     ]
    ]
   },
   "keep": "Résolution privée depuis le site local : redirecteur conditionnel vers le point entrant du DNS Private Resolver."
  },
  {
   "id": "C009-7",
   "dom": 2,
   "type": "hotspot",
   "stem": "<p>Vous devez activer les prérequis de l'exigence 3 sur stlitmedia. Quel élément du menu devez-vous sélectionner ? Pour répondre, sélectionnez l'élément approprié du menu.</p>",
   "ans": "Protection des données",
   "win": {
    "title": "stlitmedia",
    "nav": [
     {
      "g": "Stockage des données",
      "items": [
       "Conteneurs",
       "Partages de fichiers",
       "Files d'attente",
       "Tables"
      ]
     },
     {
      "g": "Gestion des données",
      "items": [
       "Redondance",
       "Protection des données",
       "Gestion du cycle de vie",
       "Réplication d'objets",
       "Inventaire des objets blob",
       "Site web statique"
      ]
     },
     {
      "g": "Sécurité + réseau",
      "items": [
       "Mise en réseau",
       "Clés d'accès",
       "Signature d'accès partagé",
       "Chiffrement"
      ]
     }
    ]
   },
   "expl": "<p>La page <b>Protection des données</b> regroupe la restauration à un point dans le temps, la suppression réversible des blobs et des conteneurs, le contrôle de version et le flux de modification. Cocher la restauration à un point dans le temps active automatiquement les trois autres prérequis.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stlitmedia"
    ],
    "title": "stlitmedia | Protection des données",
    "menu": [
     "*Protection des données"
    ],
    "rows": [
     [
      "*Restauration à un point dans le temps",
      "14 jours"
     ],
     [
      "Contrôle de version",
      "Activé"
     ],
     [
      "Flux de modification",
      "Activé"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Restauration à un point dans le temps = versions + flux de modification + suppression réversible."
  }
 ]
},
{
 "id": "C010",
 "title": "Proseware Engineering",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Proseware Engineering est un bureau d'études avec un siège à Lyon et une agence à Nantes. Ses plans sont stockés sur le serveur de fichiers FS-LYON. L'entreprise veut centraliser ses fichiers dans Azure Files tout en gardant un accès rapide dans chaque site.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Identité</b> : domaine AD DS proseware.local, synchronisé avec Microsoft Entra ID par Microsoft Entra Connect. Les postes sont joints au domaine.</p><p><b>Serveurs</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Serveur</th><th>Site</th><th>Système</th><th>Données</th></tr><tr><td>FS-LYON</td><td>Lyon</td><td>Windows Server 2019</td><td>D:\\Plans, 18 To, ACL NTFS par dossier de projet</td></tr><tr><td>FS-NANTES</td><td>Nantes</td><td>Windows Server 2022</td><td>Volume D: de 4 To, vide</td></tr></table></div><p>Le siège dispose d'une liaison Internet de 200 Mbit/s, déjà utilisée en journée. Le port TCP 445 sortant est autorisé sur les deux sites.</p><p><b>Azure</b> (France Central)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Ressource</th><th>Configuration</th></tr><tr><td>stproseng</td><td>Universel v2, LRS ; partages de fichiers volumineux : désactivé ; accès basé sur l'identité : non configuré</td></tr><tr><td>plans</td><td>Partage de stproseng, Optimisé pour les transactions, quota 5 Tio</td></tr><tr><td>SSS1</td><td>Service de synchronisation de stockage, groupe SG-Plans dont le point de terminaison cloud est plans ; aucun serveur inscrit</td></tr></table></div>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>Les 18 To de D:\\Plans doivent être dans Azure en moins d'une semaine, sans saturer la liaison du siège.</li><li>Les utilisateurs du domaine doivent accéder à plans avec leur compte AD DS, selon les ACL NTFS existantes. Tous les utilisateurs authentifiés doivent obtenir au moins la lecture au niveau du partage sans attribution par groupe ; le groupe Ingenieurs doit pouvoir modifier.</li><li>FS-NANTES doit présenter tous les plans aux utilisateurs de Nantes, avec un accès local rapide aux fichiers récents, et garder au moins 1 To libre sur D:.</li><li>Les stations Linux du bureau d'études doivent monter plans en SMB.</li><li>Le logiciel de CAO doit disposer d'un nouveau partage cad à faible latence, utilisé par des clients Windows qui ouvrent de nombreuses connexions parallèles.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C010-1",
   "dom": 2,
   "type": "yngrid",
   "stem": "<p>Vous examinez la configuration actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Le quota de plans peut être porté à 20 Tio sans autre modification.",
     "a": 1
    },
    {
     "l": "Un utilisateur du domaine peut aujourd'hui monter plans avec son compte AD DS.",
     "a": 1
    },
    {
     "l": "FS-LYON peut être inscrit auprès de SSS1 avec son système actuel.",
     "a": 0
    },
    {
     "l": "Un fichier copié dans plans depuis le portail apparaîtra immédiatement sur les serveurs synchronisés.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Quota de 20 Tio : Non.</b> Sans les partages de fichiers volumineux, un partage Standard est limité à 5 Tio. Il faut d'abord activer cette option sur stproseng (possible en LRS), puis augmenter le quota.</li><li><b>Compte AD DS : Non.</b> L'accès basé sur l'identité n'est pas configuré : il faut joindre stproseng à AD DS.</li><li><b>Windows Server 2019 : Oui.</b> L'agent Azure File Sync prend en charge Windows Server 2016 et ultérieur.</li><li><b>Copie depuis le portail : Non.</b> Les modifications faites directement dans le partage Azure sont détectées par une tâche qui s'exécute toutes les 24 heures.</li></ul>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stproseng"
    ],
    "title": "stproseng | Configuration",
    "menu": [
     "Vue d'ensemble",
     "*Configuration"
    ],
    "rows": [
     [
      "*Partages de fichiers volumineux",
      "Désactivé"
     ],
     [
      "Accès basé sur l'identité",
      "Non configuré"
     ]
    ]
   },
   "keep": "Au-delà de 5 Tio en Standard : partages de fichiers volumineux. Modifications côté cloud : détectées toutes les 24 h."
  },
  {
   "id": "C010-2",
   "dom": 2,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre à l'exigence 2. Que devez-vous configurer pour chaque objectif ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Objectif",
    "Configuration"
   ],
   "srcs": [
    "Joindre stproseng à AD DS (AzFilesHybrid)",
    "Activer Microsoft Entra Kerberos",
    "Permission de partage par défaut : Lecteur de partage SMB",
    "Contributeur de partage SMB attribué au groupe Ingenieurs",
    "Contributeur de partage SMB avec élévation attribué à tous",
    "Monter plans avec un compte autorisé et régler les ACL racine avec icacls",
    "Distribuer une SAS de compte aux postes"
   ],
   "tgts": [
    {
     "l": "Le compte de stockage authentifie les comptes du domaine",
     "a": 0
    },
    {
     "l": "Lecture au niveau du partage pour tous les utilisateurs authentifiés",
     "a": 2
    },
    {
     "l": "Modification au niveau du partage pour Ingenieurs",
     "a": 3
    },
    {
     "l": "Droits fins à la racine du partage",
     "a": 5
    }
   ],
   "expl": "<ul><li><b>Authentification :</b> les postes joints au domaine joignent un contrôleur : on joint le compte de stockage à AD DS (module AzFilesHybrid). Microsoft Entra Kerberos sert surtout aux postes joints à Entra sans contrôleur joignable.</li><li><b>Lecture pour tous :</b> la permission par défaut au niveau du partage s'applique à tous les utilisateurs authentifiés, sans attribution de rôle.</li><li><b>Ingenieurs :</b> Contributeur de partage SMB au niveau du partage ; ce sont ensuite les ACL NTFS qui limitent par dossier. L'élévation pour tous permettrait à chacun de changer les ACL.</li><li><b>Racine :</b> les ACL de la racine se règlent en montant le partage (avec la clé ou un compte avec élévation) puis avec icacls ou l'Explorateur. Les ACL des dossiers synchronisés depuis FS-LYON sont conservées.</li></ul>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stproseng",
     "Partages de fichiers"
    ],
    "title": "plans | Contrôle d'accès (IAM)",
    "menu": [
     "Vue d'ensemble",
     "*Contrôle d'accès (IAM)"
    ],
    "rows": [
     [
      "*Ingenieurs",
      "Contributeur de partage SMB de données de fichier de stockage"
     ],
     [
      "Permission par défaut",
      "Lecteur de partage SMB"
     ]
    ]
   },
   "keep": "Deux niveaux : rôle (ou permission par défaut) au niveau du partage, puis ACL NTFS sur les fichiers."
  },
  {
   "id": "C010-3",
   "dom": 2,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 1 et 3.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Copie initiale des 18 To :",
     "o": [
      "AzCopy sur la liaison de 200 Mbit/s",
      "Azure Data Box",
      "Robocopy vers le partage monté",
      "Data Box Gateway"
     ],
     "a": 1
    },
    {
     "l": "Pour FS-NANTES :",
     "o": [
      "Un point de terminaison serveur dans SG-Plans, hiérarchisation activée",
      "Un second groupe de synchronisation sur plans",
      "Une réplication DFS-R depuis FS-LYON",
      "Un azcopy sync planifié chaque nuit"
     ],
     "a": 0
    },
    {
     "l": "Stratégie d'espace libre du volume de FS-NANTES :",
     "o": [
      "10 %",
      "20 %",
      "25 %",
      "50 %"
     ],
     "a": 2
    }
   ],
   "expl": "<ul><li><b>Copie initiale :</b> même à pleine vitesse, 200 Mbit/s transfèrent environ 2 To par jour : 18 To prendraient plus de 8 jours, en saturant la liaison. Azure Data Box (jusqu'à 80 To utiles) respecte le délai. Data Box Gateway passe aussi par le réseau.</li><li><b>FS-NANTES :</b> un serveur s'ajoute au groupe existant comme nouveau point de terminaison serveur ; la hiérarchisation cloud garde localement les fichiers récents et laisse les autres dans Azure. Un partage ne peut être le point de terminaison cloud que d'un seul groupe.</li><li><b>Espace libre :</b> 1 To sur un volume de 4 To = <b>25 %</b>.</li></ul>",
   "portal": {
    "path": [
     "Services de synchronisation de stockage",
     "SSS1",
     "SG-Plans"
    ],
    "title": "SG-Plans | Points de terminaison serveur",
    "menu": [
     "*Points de terminaison serveur"
    ],
    "rows": [
     [
      "FS-LYON",
      "D:\\Plans"
     ],
     [
      "*FS-NANTES",
      "D:\\Plans · hiérarchisation 25 % d'espace libre"
     ]
    ]
   },
   "keep": "Débit × délai trop court → Data Box. Nouveau site → point de terminaison serveur dans le même groupe."
  },
  {
   "id": "C010-4",
   "dom": 2,
   "type": "order",
   "stem": "<p>Après la copie initiale, vous ajoutez FS-NANTES à la synchronisation de plans.</p><p>Quelles <b>quatre</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Installer l'agent Azure File Sync sur FS-NANTES",
    "Inscrire FS-NANTES auprès de SSS1",
    "Créer dans SG-Plans le point de terminaison serveur D:\\Plans de FS-NANTES, avec la hiérarchisation cloud",
    "Vérifier l'état d'intégrité de la synchronisation du point de terminaison",
    "Créer un nouveau service de synchronisation de stockage pour Nantes",
    "Créer un point de terminaison cloud supplémentaire sur plans"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>L'agent s'installe d'abord, et l'assistant qui suit inscrit le serveur auprès du service de synchronisation <b>SSS1</b> : un serveur ne peut être inscrit qu'à un seul service, et le groupe SG-Plans s'y trouve déjà. On crée ensuite le point de terminaison serveur dans le groupe existant, puis on suit l'intégrité de la synchronisation (téléchargement de l'espace de noms). Un groupe n'a qu'un seul point de terminaison cloud.</p>",
   "portal": {
    "path": [
     "Services de synchronisation de stockage",
     "SSS1"
    ],
    "title": "SSS1 | Serveurs inscrits",
    "menu": [
     "Vue d'ensemble",
     "Groupes de synchronisation",
     "*Serveurs inscrits"
    ],
    "rows": [
     [
      "FS-LYON",
      "En ligne"
     ],
     [
      "*FS-NANTES",
      "En ligne"
     ]
    ]
   },
   "keep": "Agent, inscription au service, point de terminaison serveur, contrôle de l'intégrité."
  },
  {
   "id": "C010-5",
   "dom": 2,
   "type": "cmd",
   "stem": "<p>Vous devez répondre à l'exigence 4. Comment devez-vous compléter la commande ?</p>",
   "rows": [
    {
     "l": "-t",
     "o": [
      "nfs",
      "cifs",
      "smb3fs",
      "azurefile"
     ],
     "a": 1
    },
    {
     "l": "vers=",
     "o": [
      "1.0",
      "2.1",
      "3.1.1",
      "4.1"
     ],
     "a": 2
    }
   ],
   "tpl": "sudo mount -t {0} //stproseng.file.core.windows.net/plans /mnt/plans -o vers={1},credentials=/etc/smbcredentials/stproseng.cred,dir_mode=0777,file_mode=0777,serverino",
   "expl": "<p>Sous Linux, un partage Azure Files SMB se monte avec le type de système de fichiers <b>cifs</b> (paquet cifs-utils). Depuis un site local, il faut SMB 3.x, qui chiffre le trafic : <b>3.1.1</b> est la version recommandée. SMB 2.1 n'est accepté que depuis la même région Azure, sans chiffrement, et 4.1 est une version de NFS.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stproseng",
     "Partages de fichiers",
     "plans"
    ],
    "title": "plans | Se connecter",
    "menu": [
     "Vue d'ensemble",
     "*Se connecter"
    ],
    "rows": [
     [
      "Système",
      "Linux"
     ],
     [
      "*Commande",
      "mount -t cifs … vers=3.1.1"
     ]
    ]
   },
   "keep": "Linux + SMB = mount -t cifs, SMB 3.x depuis l'extérieur d'Azure."
  },
  {
   "id": "C010-6",
   "dom": 2,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence 5. Que devez-vous créer ?</p>",
   "opts": [
    "Un compte FileStorage Premium, avec SMB Multichannel",
    "Un partage Optimisé pour les transactions dans stproseng",
    "Un partage Chaud dans stproseng, avec les partages volumineux",
    "Un compte Premium objets blob de blocs, monté en NFS 3.0"
   ],
   "ans": 0,
   "expl": "<p>La faible latence impose des partages <b>Premium</b> (SSD), qui exigent un compte de type FileStorage : stproseng, Standard, ne convient pas. <b>SMB Multichannel</b>, disponible uniquement sur les partages Premium, ouvre plusieurs connexions parallèles par client et augmente le débit. Un compte objets blob monté en NFS n'offre pas SMB aux clients Windows.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stprosecad"
    ],
    "title": "stprosecad | Partages de fichiers",
    "menu": [
     "*Partages de fichiers"
    ],
    "rows": [
     [
      "Type de compte",
      "FileStorage (Premium)"
     ],
     [
      "*SMB Multichannel",
      "Activé"
     ]
    ]
   },
   "keep": "Latence faible = Premium (FileStorage). Connexions parallèles = SMB Multichannel."
  },
  {
   "id": "C010-7",
   "dom": 2,
   "type": "hotspot",
   "stem": "<p>Vous devez configurer l'accès basé sur l'identité de stproseng pour l'exigence 2. Quel élément du menu devez-vous sélectionner ? Pour répondre, sélectionnez l'élément approprié du menu.</p>",
   "ans": "Partages de fichiers",
   "win": {
    "title": "stproseng",
    "nav": [
     {
      "g": "Stockage des données",
      "items": [
       "Conteneurs",
       "Partages de fichiers",
       "Files d'attente",
       "Tables"
      ]
     },
     {
      "g": "Sécurité + réseau",
      "items": [
       "Mise en réseau",
       "Clés d'accès",
       "Signature d'accès partagé",
       "Chiffrement"
      ]
     },
     {
      "g": "Paramètres",
      "items": [
       "Configuration",
       "Verrous",
       "Propriétés"
      ]
     }
    ]
   },
   "expl": "<p>La page <b>Partages de fichiers</b> du compte affiche « Accès basé sur l'identité : Non configuré » ; c'est là qu'on choisit la source (AD DS, Microsoft Entra Domain Services ou Microsoft Entra Kerberos) et la permission par défaut au niveau du partage. La jonction à AD DS se fait ensuite avec le module AzFilesHybrid.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stproseng"
    ],
    "title": "stproseng | Partages de fichiers",
    "menu": [
     "*Partages de fichiers"
    ],
    "rows": [
     [
      "*Accès basé sur l'identité",
      "Configurer"
     ],
     [
      "Permission par défaut",
      "Lecteur de partage SMB"
     ]
    ]
   },
   "keep": "Accès basé sur l'identité et permission par défaut : page Partages de fichiers du compte."
  }
 ]
}
);
