/* Études de cas (lot 6 : C011 et C012, calcul) */
AZ.cases.push(
{
 "id": "C011",
 "title": "Adatum Manufacturing",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Adatum Manufacturing fabrique des pièces automobiles. Son ERP et son portail fournisseurs tournent sur des VM Azure en France Central (trois zones de disponibilité). Un audit a relevé une disponibilité insuffisante et un chiffrement incomplet.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Machines virtuelles</b> (groupe RG-ERP)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Taille</th><th>Disponibilité</th><th>Disques</th></tr><tr><td>VM-ERP1</td><td>Standard_D4s_v5</td><td>Zone 1</td><td>Système P10 ; ERP-Data P30, cache Lecture seule ; ERP-Log P20 (journaux de transactions), cache Lecture/écriture</td></tr><tr><td>VM-ERP2</td><td>Standard_D4s_v5</td><td>Groupe à haute disponibilité AS-ERP (2 domaines d'erreur, 5 de mise à jour), sans zone</td><td>Système P10 ; données P30</td></tr></table></div><p><b>VMSS-Web</b> (groupe RG-Web) : orchestration Uniforme, zone 1 uniquement, de 2 à 10 instances. Mise à l'échelle automatique : une seule règle, +1 instance si CPU > 70 % pendant 10 minutes. Stratégie de mise à niveau : Manuelle. Image : définition web-image de la galerie GAL1 ; la version 1.1.0 vient d'être publiée et répliquée en France Central. Aucune extension d'intégrité.</p><p><b>Quotas</b> (France Central) : famille Standard DSv5, 40 vCPU, dont 32 utilisés. Total régional : 100 vCPU, dont 40 utilisés.</p>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>L'ERP doit rester disponible si une zone entière tombe en panne.</li><li>Les disques de VM-ERP1 doivent suivre les recommandations de Microsoft pour SQL Server.</li><li>Le disque temporaire et les caches de disque de VM-ERP1 doivent être chiffrés, sans agent dans la VM.</li><li>VMSS-Web doit être réparti sur les trois zones et revenir à 2 instances quand la charge baisse. Lors des diminutions, les instances les plus récentes doivent être gardées. Une instance qui exécute un export de longue durée ne doit pas être supprimée.</li><li>Les instances de VMSS-Web doivent passer à la version 1.1.0 par lots, chaque lot devant être sain avant le suivant.</li><li>Une nouvelle VM, VM-ERP3, de la même famille que VM-ERP1, doit utiliser le lancement fiable et des disques SSD Premium, dans une autre zone que VM-ERP1.</li><li>L'équipe BI veut déployer quatre VM Standard_D4s_v5 de plus.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C011-1",
   "dom": 3,
   "type": "yngrid",
   "stem": "<p>Vous examinez la configuration actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "VM-ERP2 peut être placée dans la zone 2 sans être recréée.",
     "a": 1
    },
    {
     "l": "Une maintenance planifiée peut redémarrer VM-ERP1 et VM-ERP2 en même temps.",
     "a": 0
    },
    {
     "l": "Vous pouvez déployer deux VM Standard_D4s_v5 de plus sans demande de quota.",
     "a": 0
    },
    {
     "l": "VMSS-Web reste disponible si la zone 1 tombe en panne.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>VM-ERP2 en zone 2 : Non.</b> Une VM d'un groupe à haute disponibilité ne peut pas passer dans une zone : il faut la recréer dans la zone, à partir de ses disques (ou d'une copie).</li><li><b>Maintenance simultanée : Oui.</b> Les domaines de mise à jour ne coordonnent que les VM d'un même groupe à haute disponibilité. VM-ERP1 n'est pas dans AS-ERP : rien n'empêche les deux VM d'être redémarrées en même temps, d'où l'exigence 1.</li><li><b>Deux VM de plus : Oui.</b> 2 × 4 = 8 vCPU ; 32 + 8 = 40, ce qui atteint sans dépasser le quota de la famille.</li><li><b>Panne de la zone 1 : Non.</b> Toutes les instances sont dans la zone 1.</li></ul>",
   "portal": {
    "path": [
     "Abonnements",
     "Sub-Prod",
     "Utilisation + quotas"
    ],
    "title": "Utilisation + quotas",
    "menu": [
     "*Utilisation + quotas"
    ],
    "rows": [
     [
      "*Famille Standard DSv5 · France Central",
      "32 / 40"
     ],
     [
      "Total régional des vCPU",
      "40 / 100"
     ]
    ]
   },
   "keep": "Domaines de mise à jour : seulement au sein d'un même groupe à haute disponibilité. Quota : par famille et par région."
  },
  {
   "id": "C011-2",
   "dom": 3,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 2 et 3.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "ERP-Log, mise en cache de l'hôte :",
     "o": [
      "Aucun",
      "Lecture seule",
      "Lecture/écriture"
     ],
     "a": 0
    },
    {
     "l": "ERP-Data, mise en cache de l'hôte :",
     "o": [
      "Aucun",
      "Lecture seule",
      "Lecture/écriture"
     ],
     "a": 1
    },
    {
     "l": "Exigence 3, d'abord sur l'abonnement :",
     "o": [
      "Enregistrer la fonctionnalité EncryptionAtHost",
      "Créer un jeu de chiffrement de disque",
      "Activer Azure Disk Encryption",
      "Activer Defender pour les serveurs"
     ],
     "a": 0
    },
    {
     "l": "Exigence 3, sur VM-ERP1 pendant l'activation :",
     "o": [
      "Arrêter (libérer) la VM",
      "Redémarrer la VM sans la libérer",
      "Détacher les disques de données",
      "Aucune interruption"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Journaux : Aucun.</b> Les écritures séquentielles des journaux ne profitent pas du cache, et le cache Lecture/écriture risque de perdre des écritures. Microsoft recommande Aucun pour les journaux.</li><li><b>Données : Lecture seule.</b> Les fichiers de données, surtout lus, profitent du cache en lecture.</li><li><b>Chiffrement sur l'hôte :</b> il chiffre le disque temporaire et les caches sans agent, mais la fonctionnalité EncryptionAtHost doit d'abord être enregistrée sur l'abonnement. Azure Disk Encryption utilise BitLocker dans la VM ; un jeu de chiffrement ne couvre pas le disque temporaire.</li><li><b>Interruption :</b> la propriété ne se change que sur une VM libérée.</li></ul>",
   "portal": {
    "path": [
     "Machines virtuelles",
     "VM-ERP1"
    ],
    "title": "VM-ERP1 | Disques",
    "menu": [
     "Vue d'ensemble",
     "*Disques"
    ],
    "rows": [
     [
      "ERP-Data",
      "Lecture seule"
     ],
     [
      "*ERP-Log",
      "Aucun"
     ],
     [
      "Chiffrement sur l'hôte",
      "Activé"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "SQL : données en Lecture seule, journaux sans cache. Chiffrement sur l'hôte : fonctionnalité enregistrée, VM libérée."
  },
  {
   "id": "C011-3",
   "dom": 3,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence 5.</p><p>Quelles <b>trois</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Ajouter l'extension d'intégrité de l'application au modèle de VMSS-Web",
    "Passer la stratégie de mise à niveau de VMSS-Web en Propagée",
    "Mettre à jour le modèle de VMSS-Web vers la version 1.1.0 de web-image",
    "Réimager toutes les instances en même temps",
    "Passer VMSS-Web en orchestration Flexible",
    "Supprimer puis recréer VMSS-Web avec la version 1.1.0"
   ],
   "seq": [
    0,
    1,
    2
   ],
   "expl": "<p>La mise à niveau <b>propagée</b> remplace les instances par lots et attend que chaque lot soit sain : elle exige un signal d'intégrité (extension d'intégrité de l'application ou sonde d'équilibreur), à configurer d'abord. Une fois la stratégie en Propagée, la mise à jour du modèle vers la version 1.1.0 déclenche le déploiement par lots. Réimager tout le groupe en même temps couperait le service.</p>",
   "portal": {
    "path": [
     "Groupes de machines virtuelles identiques",
     "VMSS-Web"
    ],
    "title": "VMSS-Web | Stratégie de mise à niveau",
    "menu": [
     "Instances",
     "*Stratégie de mise à niveau",
     "Intégrité et réparation"
    ],
    "rows": [
     [
      "*Mode",
      "Propagée"
     ],
     [
      "Taille maximale d'un lot",
      "20 %"
     ],
     [
      "Intégrité",
      "Extension d'intégrité de l'application"
     ]
    ]
   },
   "keep": "Propagée = signal d'intégrité obligatoire, puis mise à jour du modèle."
  },
  {
   "id": "C011-4",
   "dom": 3,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre à l'exigence 4. Que devez-vous faire pour chaque objectif ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Actions",
   "tgtHead": [
    "Objectif",
    "Action"
   ],
   "srcs": [
    "Recréer le groupe identique avec les zones 1, 2 et 3",
    "Ajouter un équilibreur de charge redondant interzone",
    "Ajouter une règle de diminution (CPU < 30 %)",
    "Allonger le temps de refroidissement",
    "Stratégie de diminution OldestVM",
    "Stratégie de diminution NewestVM",
    "Protection contre la diminution sur l'instance"
   ],
   "tgts": [
    {
     "l": "Répartition sur les trois zones",
     "a": 0
    },
    {
     "l": "Retour à 2 instances quand la charge baisse",
     "a": 2
    },
    {
     "l": "Garder les instances les plus récentes",
     "a": 4
    },
    {
     "l": "Ne pas supprimer l'instance de l'export",
     "a": 6
    }
   ],
   "expl": "<ul><li><b>Zones :</b> les zones d'un groupe identique se définissent à sa création ; un équilibreur redondant interzone ne déplace pas les instances.</li><li><b>Retour à 2 :</b> une règle d'augmentation sans règle de diminution ne fait jamais baisser le nombre d'instances.</li><li><b>Instances récentes :</b> OldestVM supprime d'abord les plus anciennes, donc garde les plus récentes. NewestVM ferait l'inverse.</li><li><b>Export :</b> la protection contre la diminution exclut une instance des suppressions de la mise à l'échelle automatique.</li></ul>",
   "portal": {
    "path": [
     "Groupes de machines virtuelles identiques",
     "VMSS-Web2"
    ],
    "title": "VMSS-Web2 | Mise à l'échelle",
    "menu": [
     "Instances",
     "*Mise à l'échelle"
    ],
    "rows": [
     [
      "Zones",
      "1, 2, 3"
     ],
     [
      "*Stratégie de diminution",
      "OldestVM"
     ],
     [
      "Règles",
      "+1 si CPU > 70 % · −1 si CPU < 30 %"
     ]
    ]
   },
   "keep": "OldestVM garde les récentes. Toujours une règle de diminution. Protection contre la diminution par instance."
  },
  {
   "id": "C011-5",
   "dom": 3,
   "type": "cmd",
   "stem": "<p>Vous devez répondre à l'exigence 6. Comment devez-vous compléter la commande ?</p>",
   "rows": [
    {
     "l": "--size",
     "o": [
      "Standard_D4_v5",
      "Standard_D4s_v5",
      "Standard_F4",
      "Standard_A4_v2"
     ],
     "a": 1
    },
    {
     "l": "--zone",
     "o": [
      "1",
      "2",
      "0"
     ],
     "a": 1
    },
    {
     "l": "--security-type",
     "o": [
      "Standard",
      "TrustedLaunch",
      "ConfidentialVM"
     ],
     "a": 1
    }
   ],
   "tpl": "az vm create --resource-group RG-ERP --name VM-ERP3 --image Win2022Datacenter --size {0} --zone {1} --security-type {2} --admin-username adatumadmin",
   "expl": "<ul><li><b>Standard_D4s_v5 :</b> même famille que VM-ERP1 ; le « s » indique la prise en charge des disques SSD Premium, que D4_v5 n'a pas.</li><li><b>Zone 2 :</b> une zone différente de celle de VM-ERP1 (zone 1). 0 n'est pas une zone.</li><li><b>TrustedLaunch :</b> démarrage sécurisé et vTPM, sur une image de génération 2. ConfidentialVM exige des tailles dédiées (série DC ou EC).</li></ul>",
   "portal": {
    "path": [
     "Machines virtuelles",
     "VM-ERP3"
    ],
    "title": "VM-ERP3 | Vue d'ensemble",
    "menu": [
     "*Vue d'ensemble"
    ],
    "rows": [
     [
      "*Taille",
      "Standard_D4s_v5"
     ],
     [
      "Zone de disponibilité",
      "2"
     ],
     [
      "Type de sécurité",
      "Lancement fiable"
     ]
    ]
   },
   "keep": "« s » dans la taille = SSD Premium. Lancement fiable = génération 2."
  },
  {
   "id": "C011-6",
   "dom": 3,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence 7. VM-ERP3 est déjà déployée. Que devez-vous faire ?</p>",
   "opts": [
    "Demander une augmentation du quota de vCPU DSv5 de la région",
    "Déployer les quatre VM dans un autre groupe de ressources",
    "Déployer les quatre VM dans un groupe à haute disponibilité",
    "Déployer le modèle en mode Complet pour libérer des vCPU"
   ],
   "ans": 0,
   "expl": "<p>Avec VM-ERP3, la famille DSv5 utilise 36 vCPU sur 40. Quatre VM de 4 vCPU en demandent 16 : 52 dépasse le quota de la famille, même si le total régional (100) le permettrait. Le quota s'applique à l'abonnement et à la région, quel que soit le groupe de ressources. Le mode Complet supprimerait des ressources sans rapport.</p>",
   "portal": {
    "path": [
     "Quotas",
     "Calcul"
    ],
    "title": "Quotas | Calcul",
    "menu": [
     "*Calcul"
    ],
    "rows": [
     [
      "*Famille Standard DSv5 · France Central",
      "36 / 40 · Demander une augmentation"
     ]
    ]
   },
   "keep": "Deux quotas à respecter : la famille et le total régional."
  },
  {
   "id": "C011-7",
   "dom": 3,
   "type": "hotspot",
   "stem": "<p>Vous devez modifier la mise en cache de l'hôte de ERP-Log. Quel élément du menu de VM-ERP1 devez-vous sélectionner ? Pour répondre, sélectionnez l'élément approprié du menu.</p>",
   "ans": "Disques",
   "win": {
    "title": "VM-ERP1",
    "nav": [
     {
      "g": "Paramètres",
      "items": [
       "Mise en réseau",
       "Disques",
       "Taille",
       "Configuration",
       "Identité",
       "Propriétés"
      ]
     },
     {
      "g": "Opérations",
      "items": [
       "Sauvegarde",
       "Récupération d'urgence",
       "Mises à jour",
       "Exécuter la commande"
      ]
     },
     {
      "g": "Aide",
      "items": [
       "Diagnostics de démarrage",
       "Console série",
       "Réinitialiser le mot de passe",
       "Redéployer + réappliquer"
      ]
     }
    ]
   },
   "expl": "<p>La mise en cache de l'hôte se règle par disque, dans la page <b>Disques</b> de la VM (colonne Mise en cache de l'hôte). Le chiffrement sur l'hôte se trouve aussi dans cette page, dans les paramètres supplémentaires, alors que Configuration regroupe d'autres options de la VM.</p>",
   "portal": {
    "path": [
     "Machines virtuelles",
     "VM-ERP1"
    ],
    "title": "VM-ERP1 | Disques",
    "menu": [
     "*Disques"
    ],
    "rows": [
     [
      "*ERP-Log · Mise en cache de l'hôte",
      "Aucun"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Cache de l'hôte : par disque, page Disques."
  }
 ]
},
{
 "id": "C012",
 "title": "Wingtip Toys",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Wingtip Toys vend des jouets en ligne. Sa boutique, son API et son outil d'administration tournent dans App Service en France Central. L'entreprise prépare les fêtes de fin d'année et veut des déploiements sans interruption, des secrets protégés et un plan de reprise en West Europe.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Ressource</th><th>Configuration</th></tr><tr><td>ASP-Web</td><td>Plan App Service Windows, Standard S1, 2 instances ; héberge wingtip-shop (.NET) et wingtip-api</td></tr><tr><td>ASP-Lin</td><td>Plan App Service Linux, De base B1 ; héberge wingtip-admin (conteneur tiré de acrwingtip)</td></tr><tr><td>acrwingtip</td><td>Container Registry De base, compte administrateur désactivé</td></tr><tr><td>kv-wing</td><td>Coffre de clés, modèle d'autorisation RBAC Azure ; secret SqlConn</td></tr><tr><td>VNet-Wing</td><td>Subnet-Int (10.20.1.0/27, vide), Subnet-Data (VM SQL1, 10.20.2.10)</td></tr><tr><td>cae-wing</td><td>Environnement Container Apps, intégré à VNet-Wing</td></tr></table></div><p>wingtip-shop lit aujourd'hui SqlConn en clair dans ses chaînes de connexion. Le bureau de Wingtip utilise les adresses publiques 198.51.100.0/24.</p>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>Les nouvelles versions de wingtip-shop doivent être préchauffées hors production, testées par 10 % des utilisateurs, puis mises en production sans interruption, avec un retour arrière rapide.</li><li>wingtip-shop doit lire SqlConn dans kv-wing, sans aucun secret dans sa configuration.</li><li>wingtip-api doit appeler SQL1 sur son adresse privée.</li><li>wingtip-admin ne doit être accessible que depuis le bureau, sur admin.wingtip.com en HTTPS, avec un certificat gratuit.</li><li>Le conteneur invoice-gen doit s'exécuter chaque nuit à 1 h dans cae-wing ; il dure environ 20 minutes et doit être arrêté s'il dépasse 30 minutes.</li><li>Les images de acrwingtip doivent être disponibles depuis West Europe sous le même nom de registre.</li><li>wingtip-shop a besoin de 6 instances du lundi au vendredi de 9 h à 18 h, et de 2 le reste du temps.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C012-1",
   "dom": 3,
   "type": "yngrid",
   "stem": "<p>Vous examinez la configuration actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Vous pouvez créer un emplacement de déploiement pour wingtip-shop sans changer de niveau.",
     "a": 0
    },
    {
     "l": "Vous pouvez déplacer wingtip-admin dans ASP-Web.",
     "a": 1
    },
    {
     "l": "wingtip-admin peut utiliser un certificat managé App Service pour admin.wingtip.com.",
     "a": 0
    },
    {
     "l": "Vous pouvez ajouter une géoréplication en West Europe à acrwingtip sans changer de niveau.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Emplacement : Oui.</b> Le niveau Standard offre jusqu'à 5 emplacements par application.</li><li><b>wingtip-admin dans ASP-Web : Non.</b> Un plan est soit Windows soit Linux ; une application Linux ne peut pas aller dans un plan Windows.</li><li><b>Certificat managé : Oui.</b> Les domaines personnalisés et les certificats managés gratuits sont disponibles dès le niveau De base.</li><li><b>Géoréplication : Non.</b> Elle est réservée au niveau Premium de Container Registry.</li></ul>",
   "portal": {
    "path": [
     "Plans App Service",
     "ASP-Web"
    ],
    "title": "ASP-Web | Monter en puissance",
    "menu": [
     "Vue d'ensemble",
     "*Monter en puissance (plan App Service)"
    ],
    "rows": [
     [
      "*Niveau",
      "Standard S1"
     ],
     [
      "Emplacements",
      "5 par application"
     ],
     [
      "Système",
      "Windows"
     ]
    ]
   },
   "keep": "Emplacements : Standard et plus. Certificat managé : De base et plus. Géoréplication ACR : Premium."
  },
  {
   "id": "C012-2",
   "dom": 3,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre aux exigences 1 et 2. Que devez-vous configurer pour chaque objectif ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Objectif",
    "Configuration"
   ],
   "srcs": [
    "Déployer dans un emplacement staging",
    "Permuter staging et production",
    "Router 10 % du trafic vers staging",
    "L'identité managée de wingtip-shop",
    "Le rôle Utilisateur des secrets Key Vault sur kv-wing",
    "Une référence @Microsoft.KeyVault dans le paramètre",
    "Une stratégie d'accès Get sur kv-wing",
    "Le paramètre marqué « Paramètre d'emplacement »"
   ],
   "tgts": [
    {
     "l": "Préchauffer la version hors production",
     "a": 0
    },
    {
     "l": "Faire tester la version par 10 % des utilisateurs",
     "a": 2
    },
    {
     "l": "Revenir rapidement à la version précédente",
     "a": 1
    },
    {
     "l": "wingtip-shop s'authentifie auprès de kv-wing sans secret",
     "a": 3
    },
    {
     "l": "Autoriser la lecture de SqlConn",
     "a": 4
    },
    {
     "l": "Aucun secret dans la configuration",
     "a": 5
    }
   ],
   "expl": "<ul><li><b>Préchauffage :</b> on déploie dans staging, qui démarre et se réchauffe sans recevoir le trafic de production.</li><li><b>10 % :</b> le routage du trafic (test en production) envoie un pourcentage des utilisateurs vers staging.</li><li><b>Retour arrière :</b> après la permutation, l'ancienne version reste dans staging ; une nouvelle permutation la remet en production.</li><li><b>Key Vault :</b> l'identité managée authentifie l'application ; comme kv-wing utilise le modèle RBAC, il faut un rôle (Utilisateur des secrets Key Vault), pas une stratégie d'accès. La référence Key Vault remplace la valeur en clair du paramètre.</li></ul>",
   "portal": {
    "path": [
     "App Services",
     "wingtip-shop"
    ],
    "title": "wingtip-shop | Variables d'environnement",
    "menu": [
     "*Variables d'environnement",
     "Identité",
     "Emplacements de déploiement"
    ],
    "rows": [
     [
      "*SqlConn",
      "@Microsoft.KeyVault(SecretUri=https://kv-wing.vault.azure.net/secrets/SqlConn/)"
     ],
     [
      "Source",
      "Référence Key Vault ✓"
     ]
    ]
   },
   "keep": "Staging, routage %, permutation. Key Vault RBAC = rôle, pas stratégie d'accès."
  },
  {
   "id": "C012-3",
   "dom": 3,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 3 et 4.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "wingtip-api vers SQL1 :",
     "o": [
      "Intégration au réseau virtuel dans Subnet-Int",
      "Point de terminaison privé dans Subnet-Int",
      "Connexions hybrides vers SQL1",
      "Restrictions d'accès sur wingtip-api"
     ],
     "a": 0
    },
    {
     "l": "wingtip-admin, accès depuis le bureau seulement :",
     "o": [
      "Restriction d'accès Autoriser 198.51.100.0/24",
      "Un NSG sur Subnet-Int",
      "Un point de terminaison privé",
      "L'intégration au réseau virtuel"
     ],
     "a": 0
    },
    {
     "l": "admin.wingtip.com, enregistrements DNS :",
     "o": [
      "CNAME admin et TXT asuid.admin",
      "Un enregistrement A admin seul",
      "CNAME asuid.admin seul",
      "TXT admin seul"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Vers SQL1 :</b> l'intégration au réseau virtuel (sous-réseau délégué vide, Subnet-Int) donne à l'application un trafic <b>sortant</b> dans VNet-Wing. Un point de terminaison privé ne gère que le trafic <b>entrant</b> vers l'application.</li><li><b>Bureau seulement :</b> les restrictions d'accès filtrent le trafic entrant par adresse IP. Un NSG sur le sous-réseau d'intégration ne filtre pas le trafic entrant de l'application ; un point de terminaison privé couperait le bureau, qui arrive par Internet.</li><li><b>Domaine :</b> un CNAME vers wingtip-admin.azurewebsites.net, et le TXT asuid.admin qui prouve la propriété du domaine.</li></ul>",
   "portal": {
    "path": [
     "App Services",
     "wingtip-admin"
    ],
    "title": "wingtip-admin | Mise en réseau",
    "menu": [
     "*Mise en réseau",
     "Domaines personnalisés",
     "Certificats"
    ],
    "rows": [
     [
      "*Restrictions d'accès",
      "Autoriser 198.51.100.0/24 · Refuser tout"
     ],
     [
      "Domaine",
      "admin.wingtip.com · Certificat managé"
     ]
    ]
   },
   "keep": "Sortant vers un VNet = intégration. Entrant privé = point de terminaison privé. Filtre IP entrant = restrictions d'accès."
  },
  {
   "id": "C012-4",
   "dom": 3,
   "type": "cmd",
   "stem": "<p>Vous devez répondre à l'exigence 5. Comment devez-vous compléter la commande ?</p>",
   "rows": [
    {
     "l": "--trigger-type",
     "o": [
      "Manual",
      "Schedule",
      "Event"
     ],
     "a": 1
    },
    {
     "l": "--cron-expression",
     "o": [
      "0 1 * * *",
      "1 0 * * *",
      "* 1 * * *",
      "0 0 1 * *"
     ],
     "a": 0
    },
    {
     "l": "--replica-timeout",
     "o": [
      "600",
      "1200",
      "1800",
      "86400"
     ],
     "a": 2
    }
   ],
   "tpl": "az containerapp job create --resource-group RG-Wing --name invoice-gen --environment cae-wing --image acrwingtip.azurecr.io/invoice:1.0 --trigger-type {0} --cron-expression \"{1}\" --replica-timeout {2}",
   "expl": "<ul><li><b>Schedule :</b> un travail Container Apps planifié démarre selon une expression cron, puis s'arrête à la fin du traitement.</li><li><b>0 1 * * * :</b> minute 0, heure 1, chaque jour. « 1 0 * * * » lancerait le travail à 0 h 01, « * 1 * * * » chaque minute entre 1 h et 1 h 59, et « 0 0 1 * * » le 1er de chaque mois.</li><li><b>1800 :</b> le délai d'expiration est en secondes ; 30 minutes = 1 800. 1 200 (20 minutes) arrêterait les exécutions normales un peu longues.</li></ul>",
   "portal": {
    "path": [
     "Travaux Container Apps",
     "invoice-gen"
    ],
    "title": "invoice-gen | Vue d'ensemble",
    "menu": [
     "*Vue d'ensemble",
     "Historique d'exécution"
    ],
    "rows": [
     [
      "*Type de déclencheur",
      "Planification · 0 1 * * *"
     ],
     [
      "Délai d'expiration du réplica",
      "1800 s"
     ]
    ]
   },
   "keep": "cron = minute heure jour mois jour-de-semaine. Délai d'expiration en secondes."
  },
  {
   "id": "C012-5",
   "dom": 3,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence 7. Que devez-vous configurer dans la mise à l'échelle automatique d'ASP-Web ?</p>",
   "opts": [
    "Un profil récurrent en semaine de 9 h à 18 h, avec 6 instances",
    "Une règle qui ajoute 4 instances quand le CPU dépasse 70 %",
    "Le niveau Premium v3 avec 6 instances en permanence, sans règle",
    "Un profil à date fixe créé pour chaque jour ouvré de l'année"
   ],
   "ans": 0,
   "expl": "<p>Le besoin est lié à l'horaire, pas à la charge mesurée : un <b>profil récurrent</b> (lundi au vendredi, 9 h-18 h, 6 instances) s'applique sans attendre que le CPU monte, et le profil par défaut garde 2 instances le reste du temps. Une règle CPU réagirait après coup, 6 instances en permanence coûteraient trop, et des profils à date fixe pour chaque jour seraient ingérables.</p>",
   "portal": {
    "path": [
     "Plans App Service",
     "ASP-Web"
    ],
    "title": "ASP-Web | Scale-out",
    "menu": [
     "*Scale-out (plan App Service)"
    ],
    "rows": [
     [
      "*Profil Heures ouvrées",
      "Lun-Ven 9 h-18 h · 6 instances"
     ],
     [
      "Profil par défaut",
      "2 instances"
     ]
    ]
   },
   "keep": "Besoin connu à l'avance → profil récurrent. Besoin selon la charge → règle."
  },
  {
   "id": "C012-6",
   "dom": 3,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence 6.</p><p>Quelles <b>trois</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Passer acrwingtip au niveau Premium",
    "Ajouter une géoréplication West Europe à acrwingtip",
    "Vérifier que la réplication West Europe est à l'état Prêt",
    "Créer un second registre acrwingtipwe en West Europe",
    "Activer le compte administrateur de acrwingtip",
    "Importer les images dans un registre De base de West Europe"
   ],
   "seq": [
    0,
    1,
    2
   ],
   "expl": "<p>La géoréplication garde <b>un seul nom de registre</b> (acrwingtip.azurecr.io) et sert les tirages depuis le réplica le plus proche. Elle exige le niveau Premium, qu'on obtient en changeant le niveau sur place. On ajoute ensuite le réplica, puis on attend son état Prêt avant de s'y fier. Un second registre aurait un autre nom.</p>",
   "portal": {
    "path": [
     "Registres de conteneurs",
     "acrwingtip"
    ],
    "title": "acrwingtip | Géoréplications",
    "menu": [
     "Vue d'ensemble",
     "*Géoréplications"
    ],
    "rows": [
     [
      "France Central",
      "Prêt (domicile)"
     ],
     [
      "*West Europe",
      "Prêt"
     ]
    ]
   },
   "keep": "Même nom de registre dans plusieurs régions = Premium + géoréplication."
  },
  {
   "id": "C012-7",
   "dom": 3,
   "type": "hotspot",
   "stem": "<p>Vous devez configurer les 10 % de l'exigence 1. Quel élément du menu de wingtip-shop devez-vous sélectionner ? Pour répondre, sélectionnez l'élément approprié du menu.</p>",
   "ans": "Emplacements de déploiement",
   "win": {
    "title": "wingtip-shop",
    "nav": [
     {
      "g": "Déploiement",
      "items": [
       "Emplacements de déploiement",
       "Centre de déploiement"
      ]
     },
     {
      "g": "Paramètres",
      "items": [
       "Variables d'environnement",
       "Configuration",
       "Identité",
       "Certificats",
       "Domaines personnalisés",
       "Mise en réseau",
       "Scale-out (plan App Service)"
      ]
     },
     {
      "g": "Surveillance",
      "items": [
       "Flux de journaux",
       "Paramètres de diagnostic"
      ]
     }
    ]
   },
   "expl": "<p>Le pourcentage de trafic se règle dans <b>Emplacements de déploiement</b>, colonne « Trafic % » de chaque emplacement. C'est aussi là qu'on lance la permutation. Le Centre de déploiement configure la source du code (GitHub, conteneur…).</p>",
   "portal": {
    "path": [
     "App Services",
     "wingtip-shop"
    ],
    "title": "wingtip-shop | Emplacements de déploiement",
    "menu": [
     "*Emplacements de déploiement"
    ],
    "rows": [
     [
      "wingtip-shop (production)",
      "90 %"
     ],
     [
      "*wingtip-shop-staging",
      "10 %"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Trafic % et permutation : page Emplacements de déploiement."
  }
 ]
}
);
