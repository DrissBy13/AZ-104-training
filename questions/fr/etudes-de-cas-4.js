/* Études de cas (lot 4 : C007 et C008, supervision et sauvegarde) */
AZ.cases.push(
{
 "id": "C007",
 "title": "Fabrikam Retail",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Fabrikam Retail est une enseigne de distribution dont les applications tournent dans Azure, en France Central. Après une attaque par rançongiciel chez un concurrent, la direction veut renforcer la sauvegarde et la reprise d'activité, au coût le plus bas possible.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Machines virtuelles</b> (toutes en France Central, groupe RG-Prod)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Système</th><th>Rôle</th><th>Particularités</th></tr><tr><td>VM-SQL1</td><td>Windows Server 2022</td><td>SQL Server 2022, base Ventes</td><td>Disques de données 2 × 1 To SSD Premium</td></tr><tr><td>VM-Web1</td><td>Ubuntu 22.04</td><td>Serveur web NGINX</td><td>Zone de disponibilité 1</td></tr><tr><td>VM-Web2</td><td>Ubuntu 22.04</td><td>Serveur web NGINX</td><td>Zone de disponibilité 2</td></tr><tr><td>VM-App4</td><td>Windows Server 2022</td><td>Service de commandes</td><td>Lancement fiable (Trusted Launch), non sauvegardée</td></tr></table></div><p><b>Coffres</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Coffre</th><th>Type</th><th>Région</th><th>Configuration</th></tr><tr><td>RSV-FC</td><td>Recovery Services</td><td>France Central</td><td>Redondance GRS, restauration interrégion désactivée, suppression réversible activée (14 jours), immuabilité désactivée</td></tr><tr><td>BV-FC</td><td>Coffre de sauvegarde</td><td>France Central</td><td>Redondance LRS, aucune instance protégée</td></tr></table></div><p><b>Stratégies</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Stratégie</th><th>Coffre</th><th>Planification</th><th>Rétention</th></tr><tr><td>Pol-Std</td><td>RSV-FC</td><td>VM, standard, chaque jour à 23 h</td><td>30 jours ; instantanés de restauration instantanée : 2 jours</td></tr><tr><td>Pol-Enh4h</td><td>RSV-FC</td><td>VM, améliorée, toutes les 4 heures</td><td>7 jours</td></tr><tr><td>Pol-Disk4h</td><td>BV-FC</td><td>Disque managé, toutes les 4 heures</td><td>7 jours</td></tr></table></div><p>VM-SQL1, VM-Web1 et VM-Web2 sont protégées dans RSV-FC avec Pol-Std.</p><p><b>Stockage</b> : le compte stfabdocs (StorageV2, France Central) contient le partage Azure Files <b>contrats</b> et le conteneur blob <b>factures</b>. Aucun des deux n'est sauvegardé.</p>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>La base Ventes doit avoir un RPO de 15 minutes et pouvoir être restaurée à une minute précise.</li><li>VM-Web1 et VM-Web2 doivent pouvoir redémarrer ensemble en West Europe, avec un RPO inférieur à 15 minutes, et rester réparties entre deux zones de disponibilité. La reprise doit être testée chaque trimestre sans impact sur la production.</li><li>Aucune donnée de sauvegarde de RSV-FC ne doit pouvoir être supprimée avant son expiration, même par un administrateur, et ce réglage ne doit pas pouvoir être annulé.</li><li>La désactivation de la suppression réversible doit exiger l'approbation de l'équipe Sécurité, qui gère son propre abonnement.</li><li>Les sauvegardes de RSV-FC doivent pouvoir être restaurées en France South lors d'un exercice, même si France Central fonctionne.</li><li>VM-App4 doit être sauvegardée toutes les 4 heures, avec tous ses disques.</li><li>Les factures doivent pouvoir être restaurées à n'importe quel moment des 30 derniers jours ; un fichier du partage contrats doit pouvoir être restauré seul, avec 90 jours de rétention.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C007-1",
   "dom": 5,
   "type": "yngrid",
   "stem": "<p>Vous examinez la configuration actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Vous pouvez aujourd'hui restaurer VM-Web1 en France South.",
     "a": 1
    },
    {
     "l": "Vous pouvez activer la restauration interrégion sur RSV-FC sans recréer le coffre.",
     "a": 0
    },
    {
     "l": "Vous pouvez passer RSV-FC en LRS pour réduire son coût.",
     "a": 1
    },
    {
     "l": "Une restauration de VM-Web1 à partir du point d'hier utilise des instantanés, sans lecture depuis le niveau coffre.",
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Restaurer en France South : Non.</b> Le coffre est en GRS, donc les données sont bien copiées dans la région jumelée, mais la restauration interrégion est désactivée : l'option Région secondaire n'apparaît pas.</li><li><b>Activer la restauration interrégion : Oui.</b> Elle s'active à tout moment sur un coffre GRS, même avec des éléments protégés.</li><li><b>Passer en LRS : Non.</b> La redondance du stockage d'un coffre ne se change plus dès qu'un élément y est protégé.</li><li><b>Point d'hier : Oui.</b> Pol-Std garde les instantanés de restauration instantanée 2 jours : le point d'hier existe encore au niveau instantané, d'où une restauration rapide.</li></ul>",
   "portal": {
    "path": [
     "Coffres Recovery Services",
     "RSV-FC"
    ],
    "title": "RSV-FC | Propriétés",
    "menu": [
     "Vue d'ensemble",
     "Éléments de sauvegarde",
     "*Propriétés"
    ],
    "rows": [
     [
      "*Redondance du stockage de sauvegarde",
      "Géoredondant"
     ],
     [
      "Restauration interrégion",
      "Désactivée"
     ]
    ]
   },
   "keep": "Redondance figée dès le premier élément protégé ; restauration interrégion activable à tout moment sur un coffre GRS."
  },
  {
   "id": "C007-2",
   "dom": 5,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre aux exigences 1, 2 et 7. Quelle solution devez-vous utiliser pour chaque charge ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Solutions",
   "tgtHead": [
    "Charge",
    "Solution"
   ],
   "srcs": [
    "Sauvegarde de la VM avec une stratégie améliorée",
    "Sauvegarde SQL Server dans une VM Azure",
    "Azure Site Recovery",
    "Sauvegarde opérationnelle des blobs",
    "Azure Backup pour Azure Files",
    "Réplication d'objets vers un autre compte",
    "Agent MARS"
   ],
   "tgts": [
    {
     "l": "Base Ventes de VM-SQL1",
     "a": 1
    },
    {
     "l": "VM-Web1 et VM-Web2",
     "a": 2
    },
    {
     "l": "Conteneur factures",
     "a": 3
    },
    {
     "l": "Partage contrats",
     "a": 4
    }
   ],
   "expl": "<ul><li><b>Base Ventes :</b> seule la sauvegarde « SQL Server dans une VM Azure » sauvegarde les journaux de transactions (jusqu'à toutes les 15 minutes) et permet une restauration à un point dans le temps. Une sauvegarde de VM, même améliorée, descend au mieux à 4 heures.</li><li><b>VM web :</b> un RPO de quelques minutes dans une autre région, c'est la réplication continue de Site Recovery, pas une sauvegarde.</li><li><b>factures :</b> la sauvegarde opérationnelle (dans un coffre de sauvegarde) permet la restauration à un point dans le temps sur la période choisie. La réplication d'objets copie les blobs, mais ne permet pas de revenir à un instant donné.</li><li><b>contrats :</b> Azure Backup pour Azure Files, avec des instantanés et la restauration d'un fichier seul. L'agent MARS sert aux serveurs, pas aux partages Azure.</li></ul>",
   "portal": {
    "path": [
     "Centre de continuité d'activité",
     "Protection"
    ],
    "title": "Configurer la protection",
    "menu": [
     "*Protection",
     "Éléments protégés"
    ],
    "rows": [
     [
      "*SQL dans une VM Azure",
      "RSV-FC"
     ],
     [
      "Blobs (opérationnelle)",
      "BV-FC"
     ],
     [
      "Azure Files",
      "RSV-FC"
     ]
    ]
   },
   "keep": "Journaux SQL toutes les 15 min → sauvegarde SQL dans la VM. RPO de minutes ailleurs → Site Recovery. Blobs à un instant donné → sauvegarde opérationnelle."
  },
  {
   "id": "C007-3",
   "dom": 5,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 3, 4 et 5.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Exigence 3, immuabilité de RSV-FC :",
     "o": [
      "Activée",
      "Activée et verrouillée",
      "Suppression réversible améliorée seule",
      "Verrou Suppression impossible"
     ],
     "a": 1
    },
    {
     "l": "Exigence 4 :",
     "o": [
      "Un Resource Guard dans l'abonnement Sécurité",
      "Un rôle Opérateur de sauvegarde pour les administrateurs",
      "Une stratégie Azure Policy de refus",
      "Une alerte de journal d'activité"
     ],
     "a": 0
    },
    {
     "l": "Exigence 5, sur RSV-FC :",
     "o": [
      "Passer la redondance en ZRS",
      "Créer un coffre en France South",
      "Activer la restauration interrégion",
      "Activer la réplication d'objets"
     ],
     "a": 2
    }
   ],
   "expl": "<ul><li><b>Exigence 3 :</b> l'immuabilité « Activée » empêche de supprimer des points avant expiration, mais un administrateur peut la désactiver. Seul l'état <b>verrouillé</b> est irréversible. Un verrou de ressource n'empêche pas de supprimer des données de sauvegarde, et la suppression réversible laisse les données récupérables sans empêcher l'opération.</li><li><b>Exigence 4 :</b> l'autorisation multi-utilisateur protège les opérations critiques (désactiver la suppression réversible, réduire la rétention…) par un <b>Resource Guard</b>, placé dans un autre abonnement et géré par une autre équipe. Un rôle ou une alerte n'imposent pas d'approbation.</li><li><b>Exigence 5 :</b> RSV-FC est déjà en GRS : il suffit d'activer la <b>restauration interrégion</b>. Un nouveau coffre en France South ne contiendrait pas les points existants.</li></ul>",
   "portal": {
    "path": [
     "Coffres Recovery Services",
     "RSV-FC"
    ],
    "title": "RSV-FC | Propriétés",
    "menu": [
     "*Propriétés",
     "Paramètres de sécurité"
    ],
    "rows": [
     [
      "*Coffre immuable",
      "Activé et verrouillé"
     ],
     [
      "Autorisation multi-utilisateur",
      "RG-Guard (abonnement Sécurité)"
     ],
     [
      "Restauration interrégion",
      "Activée"
     ]
    ]
   },
   "keep": "Immuable verrouillé = irréversible. Approbation d'une autre équipe = Resource Guard. Région jumelée = GRS + restauration interrégion."
  },
  {
   "id": "C007-4",
   "dom": 5,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence 2.</p><p>Quelles <b>quatre</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Créer un coffre Recovery Services en West Europe",
    "Activer la réplication de VM-Web1 et VM-Web2 vers West Europe, avec une zone cible distincte pour chacune",
    "Créer un plan de récupération qui contient VM-Web1 et VM-Web2",
    "Lancer un test de basculement du plan vers un réseau virtuel isolé",
    "Activer la réplication depuis RSV-FC",
    "Lancer un basculement planifié du plan, puis la reprotection"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>Pour la réplication vers une autre région, le coffre Recovery Services doit se trouver dans la <b>région cible</b> : RSV-FC, en France Central, ne convient pas. On active ensuite la réplication des deux VM en choisissant une <b>zone de disponibilité cible</b> pour chacune, ce qui garde la répartition entre zones. Le <b>plan de récupération</b> fait basculer les deux VM ensemble. Le <b>test de basculement</b> vers un réseau isolé valide la reprise sans arrêter la production ni la réplication ; un basculement planifié arrêterait les VM sources.</p>",
   "portal": {
    "path": [
     "Coffres Recovery Services",
     "RSV-WE",
     "Plans de récupération"
    ],
    "title": "RP-Web | Test de basculement",
    "menu": [
     "Éléments répliqués",
     "*Plans de récupération"
    ],
    "rows": [
     [
      "*Point de récupération",
      "Dernier traité"
     ],
     [
      "Réseau virtuel Azure",
      "VNet-Test-WE (isolé)"
     ]
    ],
    "btn": "OK"
   },
   "keep": "Site Recovery : coffre dans la région cible, zone cible par VM, plan de récupération, test vers un réseau isolé."
  },
  {
   "id": "C007-5",
   "dom": 5,
   "type": "cmd",
   "stem": "<p>Vous devez répondre à l'exigence 6. Comment devez-vous compléter la commande ?</p>",
   "rows": [
    {
     "l": "--vault-name",
     "o": [
      "RSV-FC",
      "BV-FC",
      "RSV-WE",
      "RSV-FS"
     ],
     "a": 0
    },
    {
     "l": "--policy-name",
     "o": [
      "Pol-Std",
      "Pol-Enh4h",
      "Pol-Disk4h",
      "DefaultPolicy"
     ],
     "a": 1
    }
   ],
   "tpl": "az backup protection enable-for-vm --resource-group RG-Prod --vm VM-App4 --vault-name {0} --policy-name {1}",
   "expl": "<p>VM-App4 utilise le <b>lancement fiable</b> : elle ne peut être sauvegardée qu'avec une <b>stratégie améliorée</b>, qui permet aussi plusieurs sauvegardes par jour. Pol-Enh4h, dans RSV-FC, répond aux deux contraintes. Pol-Disk4h (dans BV-FC) ne sauvegarderait qu'un disque à la fois, sans cohérence entre les disques de la VM, alors que l'exigence demande tous les disques. Pol-Std et DefaultPolicy sont des stratégies standard quotidiennes.</p>",
   "portal": {
    "path": [
     "Coffres Recovery Services",
     "RSV-FC",
     "Éléments de sauvegarde"
    ],
    "title": "VM-App4 | Sauvegarde",
    "menu": [
     "*Éléments de sauvegarde",
     "Stratégies de sauvegarde"
    ],
    "rows": [
     [
      "*Stratégie",
      "Pol-Enh4h (améliorée)"
     ],
     [
      "Type de sécurité",
      "Lancement fiable"
     ]
    ]
   },
   "keep": "Lancement fiable ou plusieurs sauvegardes par jour → stratégie améliorée."
  },
  {
   "id": "C007-6",
   "dom": 5,
   "type": "hotspot",
   "stem": "<p>Vous devez répondre à l'exigence 1. Dans RSV-FC, vous sélectionnez <b>+ Sauvegarde</b>. Que devez-vous sélectionner ? Pour répondre, sélectionnez l'élément approprié.</p>",
   "ans": "SQL Server dans une machine virtuelle Azure",
   "win": {
    "title": "Objectif de sauvegarde",
    "nav": [
     {
      "g": "Où s'exécute votre charge de travail ?",
      "items": [
       "Azure",
       "Azure Stack Hub",
       "Local"
      ]
     },
     {
      "g": "Que voulez-vous sauvegarder ?",
      "items": [
       "Machine virtuelle",
       "Partage de fichiers Azure",
       "SQL Server dans une machine virtuelle Azure",
       "SAP HANA dans une machine virtuelle Azure",
       "SAP ASE (Sybase) dans une machine virtuelle Azure"
      ]
     }
    ]
   },
   "expl": "<p>La charge s'exécute dans Azure, et c'est la base, pas la VM, qu'il faut sauvegarder : <b>SQL Server dans une machine virtuelle Azure</b>. Azure Backup découvre les instances, installe l'extension de charge de travail, puis applique une stratégie avec des sauvegardes complètes et des sauvegardes de journaux toutes les 15 minutes. La sauvegarde de la VM entière, déjà en place, ne donne pas de restauration à la minute.</p>",
   "portal": {
    "path": [
     "Coffres Recovery Services",
     "RSV-FC",
     "Sauvegarde"
    ],
    "title": "Objectif de sauvegarde",
    "menu": [
     "*Sauvegarde"
    ],
    "rows": [
     [
      "Charge de travail",
      "Azure"
     ],
     [
      "*Élément à sauvegarder",
      "SQL Server dans une machine virtuelle Azure"
     ]
    ],
    "btn": "Sauvegarder"
   },
   "keep": "Restauration d'une base à la minute → SQL Server dans une VM Azure (journaux toutes les 15 min)."
  },
  {
   "id": "C007-7",
   "dom": 5,
   "type": "single",
   "stem": "<p>Pendant le test trimestriel de l'exigence 2, VM-Web1 démarre en West Europe, mais l'équipe constate que VM-Web1 et VM-Web2 sont dans la même zone. Que devez-vous modifier ?</p>",
   "opts": [
    "La stratégie de réplication commune aux deux VM web",
    "La zone cible dans les paramètres de calcul de VM-Web2",
    "Le mappage réseau entre France Central et West Europe",
    "L'ordre des groupes dans le plan de récupération RP-Web"
   ],
   "ans": 1,
   "expl": "<p>La zone de disponibilité de la VM de basculement fait partie des <b>paramètres de calcul</b> de l'élément répliqué (avec la taille et le groupe de ressources cible). Il faut donner à VM-Web2 une zone différente de celle de VM-Web1. La stratégie de réplication règle les points de récupération, le mappage réseau le réseau cible, et le plan l'ordre de démarrage : aucun ne place une VM dans une zone.</p>",
   "portal": {
    "path": [
     "Coffres Recovery Services",
     "RSV-WE",
     "Éléments répliqués",
     "VM-Web2"
    ],
    "title": "VM-Web2 | Calcul",
    "menu": [
     "Vue d'ensemble",
     "*Calcul",
     "Réseau"
    ],
    "rows": [
     [
      "Taille",
      "Standard_D2s_v5"
     ],
     [
      "*Zone de disponibilité",
      "2"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Taille et zone de la VM de basculement : paramètres de calcul de l'élément répliqué."
  }
 ]
},
{
 "id": "C008",
 "title": "Contoso Pharma",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Contoso Pharma, un laboratoire soumis à des audits réglementaires, centralise sa supervision dans un espace de travail Log Analytics. La facture d'ingestion a doublé en un an, et les auditeurs ont relevé des journaux de sécurité conservés trop peu de temps.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>LAW-Prod</b> (France Central) : paiement à l'utilisation, environ 150 Go ingérés par jour, aucun plafond quotidien, mode de contrôle d'accès « Exiger les autorisations d'espace de travail ».</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Table</th><th>Plan</th><th>Rétention interactive</th><th>Rétention totale</th></tr><tr><td>SecurityEvent</td><td>Analytics</td><td>90 jours</td><td>90 jours</td></tr><tr><td>Perf</td><td>Analytics</td><td>30 jours</td><td>30 jours</td></tr><tr><td>Syslog</td><td>Analytics</td><td>30 jours</td><td>30 jours</td></tr></table></div><p><b>Collecte</b></p><ul><li>40 VM Windows de RG-Prod : agent Azure Monitor, règle <b>DCR-Win</b> (journal Système : Erreur et Avertissement ; journal Sécurité : tous les événements ; compteurs de performances toutes les 10 secondes).</li><li>15 VM Linux de RG-Prod : agent Log Analytics (MMA/OMS), configuré par les paramètres hérités de l'espace de travail.</li></ul><p><b>Alertes</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Type</th><th>Configuration</th></tr><tr><td>AR-CPU</td><td>Alerte de métrique</td><td>CPU > 90 % (seuil statique), VM de RG-Prod, Sev2, groupe d'actions AG-Ops</td></tr><tr><td>AR-Del</td><td>Alerte de journal d'activité</td><td>Supprimer une machine virtuelle, étendue Sub1, Sev1, AG-Ops</td></tr><tr><td>APR-Maint</td><td>Règle de traitement des alertes</td><td>Supprimer les notifications, étendue RG-Prod, chaque samedi de 22 h à 2 h</td></tr></table></div><p><b>AG-Ops</b> : e-mail à ops@contoso.com. L'application web <b>app-contoso</b> est publique. Les développeurs du groupe <b>Dev-App</b> ont le rôle Lecteur sur RG-App.</p>"
  },
  {
   "t": "Exigences",
   "h": "<ol><li>Les événements de sécurité doivent rester interrogeables 1 an, puis être conservés jusqu'à 5 ans, au coût le plus bas.</li><li>Le coût d'ingestion doit baisser sans perdre d'événement d'erreur ni d'événement de sécurité, et sans export.</li><li>Les membres de Dev-App ne doivent voir dans LAW-Prod que les journaux des ressources de RG-App, sans nouvelle attribution de rôle.</li><li>L'astreinte doit être appelée au téléphone si app-contoso ne répond plus depuis au moins deux emplacements.</li><li>Les VM Linux doivent envoyer à LAW-Prod le Syslog de la facility auth, niveau Avertissement et plus, avec un agent pris en charge.</li><li>Les alertes Sev0 doivent notifier même pendant la maintenance du samedi.</li><li>AR-CPU déclenche trop de fausses alertes : la charge varie fortement selon les heures.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C008-1",
   "dom": 5,
   "type": "yngrid",
   "stem": "<p>Vous examinez la configuration actuelle, avant toute modification.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Un membre de Dev-App peut interroger dans LAW-Prod les journaux des VM de RG-App.",
     "a": 1
    },
    {
     "l": "Si AR-CPU se déclenche un samedi à 23 h, ops@contoso.com reçoit un e-mail.",
     "a": 1
    },
    {
     "l": "Si AR-CPU se déclenche un samedi à 23 h, l'alerte est visible dans le portail.",
     "a": 0
    },
    {
     "l": "Les événements de sécurité d'il y a 6 mois peuvent encore être retrouvés dans LAW-Prod.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Dev-App : Non.</b> Le rôle Lecteur sur RG-App ne donne accès aux journaux qu'en contexte de ressource, et le mode « Exiger les autorisations d'espace de travail » l'interdit : il faudrait un rôle sur l'espace.</li><li><b>E-mail le samedi : Non.</b> APR-Maint supprime les notifications des alertes de RG-Prod pendant la fenêtre.</li><li><b>Visible dans le portail : Oui.</b> Une règle de traitement ne supprime que les actions : l'alerte est créée et visible.</li><li><b>Événements d'il y a 6 mois : Non.</b> La rétention totale de SecurityEvent est de 90 jours : ces données sont supprimées.</li></ul>",
   "portal": {
    "path": [
     "Espaces de travail Log Analytics",
     "LAW-Prod"
    ],
    "title": "LAW-Prod | Vue d'ensemble",
    "menu": [
     "*Vue d'ensemble",
     "Journaux",
     "Tables"
    ],
    "rows": [
     [
      "*Mode de contrôle d'accès",
      "Exiger les autorisations d'espace de travail"
     ],
     [
      "Niveau tarifaire",
      "Paiement à l'utilisation"
     ]
    ]
   },
   "keep": "Contexte de ressource bloqué par « Exiger les autorisations d'espace de travail ». Règle de traitement : actions supprimées, alerte visible."
  },
  {
   "id": "C008-2",
   "dom": 5,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences 1 et 2.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "SecurityEvent, rétention interactive :",
     "o": [
      "90 jours",
      "365 jours",
      "2 ans",
      "5 ans"
     ],
     "a": 1
    },
    {
     "l": "SecurityEvent, rétention totale :",
     "o": [
      "365 jours",
      "2 ans",
      "5 ans",
      "12 ans"
     ],
     "a": 2
    },
    {
     "l": "Dans DCR-Win :",
     "o": [
      "Collecter les compteurs toutes les 60 secondes",
      "Ne plus collecter le journal Système",
      "Passer SecurityEvent au plan Basic",
      "Ajouter un plafond quotidien de 100 Go"
     ],
     "a": 0
    },
    {
     "l": "Niveau tarifaire de LAW-Prod :",
     "o": [
      "Paiement à l'utilisation",
      "Niveau d'engagement 100 Go/jour",
      "Niveau d'engagement 200 Go/jour",
      "Niveau d'engagement 500 Go/jour"
     ],
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Rétention :</b> 365 jours de rétention interactive, puis une rétention totale de 5 ans : la période au-delà de l'interactif est conservée à bas coût (rétention à long terme), interrogeable par une tâche de recherche ou une restauration, sans export.</li><li><b>DCR-Win :</b> collecter les compteurs toutes les 60 secondes au lieu de 10 divise leur volume par six sans toucher aux événements. Le journal Système contient les erreurs, le plan Basic limiterait l'interactif à 30 jours (exigence 1), et un plafond quotidien perdrait des données.</li><li><b>Tarification :</b> avec environ 150 Go par jour, le niveau 100 Go/jour est le plus intéressant : le dépassement est facturé au même prix par Go que le niveau. Le niveau 200 Go/jour ferait payer 200 Go chaque jour.</li></ul>",
   "portal": {
    "path": [
     "Espaces de travail Log Analytics",
     "LAW-Prod",
     "Tables"
    ],
    "title": "SecurityEvent | Gérer la table",
    "menu": [
     "*Tables"
    ],
    "rows": [
     [
      "Plan de la table",
      "Analytics"
     ],
     [
      "*Rétention interactive",
      "365 jours"
     ],
     [
      "Rétention totale",
      "5 ans"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Interactif jusqu'à 2 ans, total jusqu'à 12 ans. Niveau d'engagement : choisir le palier inférieur au volume, dépassement au même prix."
  },
  {
   "id": "C008-3",
   "dom": 5,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence 5 sans interrompre la collecte.</p><p>Quelles <b>quatre</b> actions devez-vous effectuer dans l'ordre ? Pour répondre, placez les actions appropriées dans la liste de réponses et classez-les dans le bon ordre.</p>",
   "acts": [
    "Créer une DCR Syslog (facility auth, niveau Avertissement) vers LAW-Prod",
    "Associer la DCR aux 15 VM Linux, ce qui installe l'agent Azure Monitor",
    "Vérifier que la table Heartbeat montre l'agent Azure Monitor sur les 15 VM",
    "Désinstaller l'agent Log Analytics des 15 VM",
    "Configurer Syslog dans les paramètres hérités des agents de LAW-Prod",
    "Créer sur chaque VM un paramètre de diagnostic vers LAW-Prod"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>L'agent Log Analytics est retiré depuis août 2024 : il faut migrer vers l'<b>agent Azure Monitor</b>, qui se configure par une <b>règle de collecte de données</b>. On crée la DCR, on l'associe aux VM (le portail installe l'agent), on vérifie que les données arrivent (catégorie « Azure Monitor Agent » dans Heartbeat), et seulement ensuite on désinstalle l'ancien agent, pour ne jamais perdre de données. Les paramètres hérités ne pilotent que l'ancien agent, et un paramètre de diagnostic de VM ne collecte pas le Syslog invité.</p>",
   "portal": {
    "path": [
     "Moniteur",
     "Règles de collecte de données"
    ],
    "title": "DCR-Linux | Sources de données",
    "menu": [
     "Ressources",
     "*Sources de données"
    ],
    "rows": [
     [
      "*Syslog · auth",
      "LOG_WARNING"
     ],
     [
      "Destination",
      "LAW-Prod"
     ]
    ]
   },
   "keep": "Migration MMA → AMA : DCR, association, vérification, puis désinstallation de l'ancien agent."
  },
  {
   "id": "C008-4",
   "dom": 5,
   "type": "dragdrop",
   "stem": "<p>Vous devez répondre aux exigences 4, 6 et 7. Que devez-vous configurer pour chaque objectif ?</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Objectif",
    "Configuration"
   ],
   "srcs": [
    "Un test de disponibilité standard avec une règle d'alerte",
    "Une alerte Resource Health sur app-contoso",
    "Une action Voix dans un groupe d'actions",
    "Un filtre Gravité différente de Sev0 sur APR-Maint",
    "Une seconde règle APR qui ajoute AG-Ops aux alertes Sev0",
    "Un seuil dynamique sur AR-CPU",
    "Un seuil statique plus élevé sur AR-CPU"
   ],
   "tgts": [
    {
     "l": "Détecter qu'app-contoso ne répond plus depuis deux emplacements",
     "a": 0
    },
    {
     "l": "Appeler l'astreinte au téléphone",
     "a": 2
    },
    {
     "l": "Sev0 notifie pendant la maintenance du samedi",
     "a": 3
    },
    {
     "l": "Moins de fausses alertes sur AR-CPU",
     "a": 5
    }
   ],
   "expl": "<ul><li><b>Disponibilité :</b> un test de disponibilité standard (Application Insights) interroge l'URL depuis plusieurs emplacements, et sa règle d'alerte se déclenche selon le nombre d'emplacements en échec. Resource Health ne voit que l'état de la plateforme, pas une réponse HTTP en erreur.</li><li><b>Téléphone :</b> notification Voix d'un groupe d'actions.</li><li><b>Sev0 :</b> une règle de suppression l'emporte sur les règles qui ajoutent des groupes d'actions : une seconde règle n'enverrait rien. Il faut exclure Sev0 de la suppression par un filtre Gravité.</li><li><b>AR-CPU :</b> un seuil dynamique apprend le comportement par heure et par jour. Relever le seuil statique masquerait les vrais pics.</li></ul>",
   "portal": {
    "path": [
     "Moniteur",
     "Alertes",
     "Règles de traitement des alertes"
    ],
    "title": "APR-Maint | Étendue",
    "menu": [
     "*Étendue",
     "Règles",
     "Planification"
    ],
    "rows": [
     [
      "Étendue",
      "RG-Prod"
     ],
     [
      "*Filtre",
      "Gravité ≠ Sev0"
     ],
     [
      "Action",
      "Supprimer les notifications"
     ]
    ]
   },
   "keep": "La suppression l'emporte : exclure par filtre ce qui doit notifier. Charge variable → seuil dynamique."
  },
  {
   "id": "C008-5",
   "dom": 5,
   "type": "cmd",
   "stem": "<p>Les auditeurs demandent, pour les dernières 24 heures, le nombre d'échecs d'ouverture de session par compte. Comment devez-vous compléter la requête ?</p>",
   "rows": [
    {
     "l": "{0}",
     "o": [
      "ago(1d)",
      "now(1d)",
      "bin(1d)",
      "startofday(1d)"
     ],
     "a": 0
    },
    {
     "l": "{1}",
     "o": [
      "4624",
      "4625",
      "4634",
      "4740"
     ],
     "a": 1
    },
    {
     "l": "{2}",
     "o": [
      "TargetAccount",
      "Computer",
      "EventID",
      "bin(TimeGenerated, 1d)"
     ],
     "a": 0
    }
   ],
   "tpl": "SecurityEvent | where TimeGenerated > {0} | where EventID == {1} | summarize Echecs = count() by {2} | sort by Echecs desc",
   "expl": "<ul><li><b>ago(1d)</b> renvoie l'instant d'il y a 24 heures ; now() ne prend pas de durée en paramètre, bin() arrondit une valeur et startofday() attend une date.</li><li><b>4625</b> : échec d'ouverture de session (4624 est une réussite, 4634 une fermeture, 4740 un verrouillage de compte).</li><li><b>TargetAccount</b> : le compte visé par la tentative. Regrouper par Computer compterait par machine.</li></ul>",
   "portal": {
    "path": [
     "Espaces de travail Log Analytics",
     "LAW-Prod"
    ],
    "title": "LAW-Prod | Journaux",
    "menu": [
     "Vue d'ensemble",
     "*Journaux"
    ],
    "rows": [
     [
      "*EventID",
      "4625"
     ],
     [
      "Regroupement",
      "TargetAccount"
     ]
    ],
    "btn": "Exécuter"
   },
   "keep": "ago() pour une fenêtre glissante ; 4625 = échec d'ouverture de session."
  },
  {
   "id": "C008-6",
   "dom": 5,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence 3. Que devez-vous faire ?</p>",
   "opts": [
    "Donner à Dev-App le rôle Lecteur Log Analytics sur LAW-Prod",
    "Passer LAW-Prod en mode « ressource ou espace de travail »",
    "Créer un espace de travail réservé aux ressources de RG-App",
    "Donner à Dev-App Lecteur de surveillance sur RG-App"
   ],
   "ans": 1,
   "expl": "<p>En mode « Utiliser les autorisations de ressource ou d'espace de travail », un utilisateur sans rôle sur l'espace voit, en contexte de ressource, les journaux des ressources qu'il peut lire. Le rôle Lecteur sur RG-App suffit alors, sans nouvelle attribution. Lecteur Log Analytics sur l'espace donnerait tous les journaux, Lecteur de surveillance serait une nouvelle attribution, et un nouvel espace obligerait à changer la collecte.</p>",
   "portal": {
    "path": [
     "Espaces de travail Log Analytics",
     "LAW-Prod"
    ],
    "title": "LAW-Prod | Propriétés",
    "menu": [
     "Vue d'ensemble",
     "*Propriétés"
    ],
    "rows": [
     [
      "*Mode de contrôle d'accès",
      "Utiliser les autorisations de ressource ou d'espace de travail"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Droits sur la ressource = droits sur ses journaux, si le mode « ressource ou espace » est actif."
  },
  {
   "id": "C008-7",
   "dom": 5,
   "type": "hotspot",
   "stem": "<p>Vous devez appliquer le niveau tarifaire choisi pour LAW-Prod. Quel élément du menu devez-vous sélectionner ? Pour répondre, sélectionnez l'élément approprié du menu.</p>",
   "ans": "Utilisation et estimation des coûts",
   "win": {
    "title": "LAW-Prod",
    "nav": [
     {
      "g": "Général",
      "items": [
       "Vue d'ensemble",
       "Journal d'activité",
       "Journaux"
      ]
     },
     {
      "g": "Paramètres",
      "items": [
       "Tables",
       "Agents",
       "Utilisation et estimation des coûts",
       "Exportation des données",
       "Isolement réseau",
       "Propriétés"
      ]
     },
     {
      "g": "Classiques",
      "items": [
       "Paramètres hérités des agents",
       "Solutions héritées"
      ]
     }
    ]
   },
   "expl": "<p>Le niveau tarifaire (paiement à l'utilisation ou niveau d'engagement) se règle dans <b>Utilisation et estimation des coûts</b>, qui affiche aussi le volume ingéré par jour et une estimation pour chaque niveau. La rétention se règle dans Tables, le mode d'accès dans Propriétés.</p>",
   "portal": {
    "path": [
     "Espaces de travail Log Analytics",
     "LAW-Prod"
    ],
    "title": "LAW-Prod | Utilisation et estimation des coûts",
    "menu": [
     "Tables",
     "*Utilisation et estimation des coûts"
    ],
    "rows": [
     [
      "*Niveau tarifaire",
      "Niveau d'engagement 100 Go/jour"
     ],
     [
      "Ingestion moyenne",
      "≈ 150 Go/jour"
     ]
    ],
    "btn": "OK"
   },
   "keep": "Niveau tarifaire : Utilisation et estimation des coûts. Rétention : Tables. Mode d'accès : Propriétés."
  }
 ]
}
);
