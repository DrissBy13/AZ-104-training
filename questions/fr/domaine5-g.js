/* Domaine 5 : supervision et sauvegarde (lot G : D5-401 à D5-410, scénarios longs) */
AZ.questions.push(
{
 "id": "D5-401",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Tailwind Traders doit protéger, en France Central, les charges suivantes avec Azure Backup, en réduisant le nombre de coffres au minimum :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Charge</th><th>Détail</th></tr><tr><td>VM-Sql1</td><td>SQL Server 2022 dans une VM Azure, sauvegarde des journaux toutes les 15 minutes</td></tr><tr><td>Disk-Data7</td><td>Disque managé détaché d'une VM, instantanés toutes les 4 heures</td></tr><tr><td>stinvoices</td><td>Blobs à restaurer à n'importe quel instant des 30 derniers jours, sans copie hors du compte</td></tr><tr><td>sharehr</td><td>Partage Azure Files, restauration d'un fichier seul</td></tr><tr><td>pg-orders</td><td>Azure Database for PostgreSQL – serveur flexible, rétention 1 an</td></tr></table></div><p>Quel type de coffre devez-vous utiliser pour chaque charge ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM-Sql1 (SQL dans la VM) :",
   "o": [
    "Coffre de sauvegarde (Backup vault)",
    "L'un ou l'autre, au choix",
    "Coffre Recovery Services",
    "Aucun : sauvegarde native du service"
   ],
   "a": 2
  },
  {
   "l": "Disk-Data7 :",
   "o": [
    "Coffre de sauvegarde (Backup vault)",
    "L'un ou l'autre, au choix",
    "Aucun : sauvegarde native du service",
    "Coffre Recovery Services"
   ],
   "a": 0
  },
  {
   "l": "stinvoices :",
   "o": [
    "L'un ou l'autre, au choix",
    "Coffre Recovery Services",
    "Aucun : sauvegarde native du service",
    "Coffre de sauvegarde (Backup vault)"
   ],
   "a": 3
  },
  {
   "l": "sharehr :",
   "o": [
    "Coffre Recovery Services",
    "Coffre de sauvegarde (Backup vault)",
    "Aucun : sauvegarde native du service",
    "L'un ou l'autre, au choix"
   ],
   "a": 0
  },
  {
   "l": "pg-orders :",
   "o": [
    "L'un ou l'autre, au choix",
    "Coffre Recovery Services",
    "Coffre de sauvegarde (Backup vault)",
    "Aucun : sauvegarde native du service"
   ],
   "a": 2
  }
 ],
 "expl": "<p>Azure Backup répartit les charges entre deux types de coffres.</p><b>Coffre Recovery Services :</b> VM Azure, SQL Server et SAP HANA dans une VM, partages Azure Files, serveurs locaux (MARS, MABS).<b>Coffre de sauvegarde :</b> disques managés, blobs (sauvegarde opérationnelle, celle qui reste dans le compte, et sauvegarde dans le coffre), Azure Database for PostgreSQL (serveur flexible), AKS.<p>Pour stinvoices, la sauvegarde opérationnelle (restauration à un point dans le temps, sans copie hors du compte) passe par un coffre de sauvegarde.</p>",
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
    "*VM-Sql1 (SQL dans la VM)",
    "Coffre Recovery Services"
   ],
   [
    "Disk-Data7",
    "Coffre de sauvegarde (Backup vault)"
   ],
   [
    "stinvoices",
    "Coffre de sauvegarde (Backup vault)"
   ],
   [
    "sharehr",
    "Coffre Recovery Services"
   ],
   [
    "pg-orders",
    "Coffre de sauvegarde (Backup vault)"
   ]
  ]
 },
 "keep": "Recovery Services : VM, SQL/HANA dans une VM, Azure Files, local. Coffre de sauvegarde : disques, blobs, PostgreSQL, AKS."
},
{
 "id": "D5-402",
 "dom": 5,
 "type": "hot",
 "stem": "<p>RSV-Prod (France Central, GRS) protège 40 VM avec Pol-Daily : stratégie standard, sauvegarde quotidienne à 22 h, rétention de 30 jours, instantanés de restauration instantanée conservés 2 jours.</p><p>Nouveaux besoins :</p><ul><li>VM-Pay1, créée avec le lancement fiable, doit être protégée ; l'assistant refuse Pol-Daily ;</li><li>VM-Pay2 doit avoir un point de restauration toutes les 4 heures pendant les heures ouvrées ;</li><li>les restaurations des 5 derniers jours doivent être aussi rapides que possible ;</li><li>un point mensuel doit être conservé 12 mois.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Type de stratégie pour VM-Pay1 et VM-Pay2 :",
   "o": [
    "Une stratégie MARS",
    "Standard",
    "Améliorée",
    "Une stratégie de disque"
   ],
   "a": 2
  },
  {
   "l": "Planification de VM-Pay2 :",
   "o": [
    "Quotidienne, à 8 h et à 16 h par deux stratégies",
    "Toutes les 15 minutes, comme SQL",
    "Hebdomadaire, avec instantanés horaires",
    "Horaire, toutes les 4 heures, sur 12 heures"
   ],
   "a": 3
  },
  {
   "l": "Rétention des instantanés de restauration instantanée :",
   "o": [
    "1 jour",
    "2 jours",
    "5 jours",
    "30 jours"
   ],
   "a": 2
  },
  {
   "l": "Point mensuel :",
   "o": [
    "Une seconde stratégie mensuelle pour ces VM",
    "Une rétention mensuelle de 12 mois",
    "Une sauvegarde à la demande chaque mois",
    "Un instantané de disque mensuel conservé"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Améliorée.</b> Les VM à lancement fiable ne sont prises en charge qu'avec une stratégie améliorée, qui permet aussi plusieurs sauvegardes par jour (toutes les 4, 6, 8 ou 12 heures, dans une fenêtre définie).<b>Restauration instantanée.</b> Les points encore au niveau instantané se restaurent beaucoup plus vite. Une stratégie améliorée permet de garder ces instantanés jusqu'à 30 jours ; 5 jours couvrent le besoin sans surcoût inutile.<b>Rétention.</b> Une même stratégie combine rétentions quotidienne, hebdomadaire, mensuelle et annuelle. Une sauvegarde à la demande a sa propre date d'expiration et serait à refaire chaque mois.",
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
    "*Type de stratégie pour VM-Pay1 et VM-Pay2",
    "Améliorée"
   ],
   [
    "Planification de VM-Pay2",
    "Horaire, toutes les 4 heures, sur 12 heures"
   ],
   [
    "Rétention des instantanés de restauration instantanée",
    "5 jours"
   ],
   [
    "Point mensuel",
    "Une rétention mensuelle de 12 mois"
   ]
  ]
 },
 "keep": "Lancement fiable ou plusieurs points par jour = stratégie améliorée (instantanés jusqu'à 30 jours)."
},
{
 "id": "D5-403",
 "dom": 5,
 "type": "hot",
 "stem": "<p>RSV-Prod (France Central, GRS, restauration interrégion activée) protège VM-App3 (Windows, deux disques de données) avec une stratégie standard quotidienne.</p><p>Demandes du jour :</p><ul><li>un utilisateur a supprimé le dossier D:\\Exports de VM-App3 hier ; il faut récupérer ce seul dossier sans redémarrer ni modifier VM-App3 ;</li><li>un administrateur veut restaurer VM-App3 « par-dessus » elle-même, avec l'option Remplacer l'existant ; VM-App3 a été supprimée il y a une heure ;</li><li>l'équipe de reprise veut créer une copie de VM-App3 en France South, alors que France Central fonctionne normalement ;</li><li>l'audit veut une copie de VM-App3 restaurée dans un autre abonnement du même locataire.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Dossier D:\\Exports :",
   "o": [
    "Récupération de fichiers (script de montage)",
    "Restaurer les disques puis les attacher à VM-App3",
    "Restaurer la VM entière dans un autre groupe",
    "Un instantané du disque de données d'hier"
   ],
   "a": 0
  },
  {
   "l": "Remplacer l'existant :",
   "o": [
    "Impossible : créer une nouvelle VM",
    "Possible avec la restauration interrégion",
    "Possible après avoir annulé la suppression",
    "Fonctionne, la VM est recréée à l'identique"
   ],
   "a": 0
  },
  {
   "l": "Copie en France South :",
   "o": [
    "Activer Site Recovery",
    "Copier le coffre",
    "Restaurer depuis la région secondaire",
    "Impossible tant que France Central fonctionne"
   ],
   "a": 2
  },
  {
   "l": "Copie dans un autre abonnement :",
   "o": [
    "Impossible : un coffre ne restaure que dans son abonnement",
    "Restauration inter-abonnements",
    "Exporter un VHD et le copier dans l'abonnement",
    "Déplacer le coffre dans l'autre abonnement"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Fichier.</b> La récupération de fichiers télécharge un script qui monte le point de récupération comme des lecteurs sur une machine (la VM ou une autre), sans toucher à VM-App3.<b>Remplacer l'existant.</b> Cette option remplace les disques d'une VM <b>existante</b> ; si la VM a été supprimée, il faut créer une nouvelle VM ou restaurer les disques.<b>Région secondaire.</b> La restauration interrégion permet de restaurer dans la région jumelée à tout moment, pas seulement en cas de panne déclarée.<b>Autre abonnement.</b> La restauration inter-abonnements est activée par défaut sur un coffre (elle peut être désactivée) et cible un abonnement du même locataire.",
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
    "*Dossier D:\\Exports",
    "Récupération de fichiers (script de montage)"
   ],
   [
    "Remplacer l'existant",
    "Impossible : créer une nouvelle VM"
   ],
   [
    "Copie en France South",
    "Restaurer depuis la région secondaire"
   ],
   [
    "Copie dans un autre abonnement",
    "Restauration inter-abonnements"
   ]
  ]
 },
 "keep": "Fichier seul = récupération de fichiers. Remplacer l'existant = VM présente. CRR utilisable à tout moment. Inter-abonnements : même locataire."
},
{
 "id": "D5-404",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Après une attaque par rançongiciel chez un concurrent, la direction de Contoso veut durcir RSV-Prod. Aujourd'hui : suppression réversible activée (14 jours), immuabilité désactivée, aucune autorisation multi-utilisateur.</p><p>Exigences :</p><ul><li>aucun administrateur ne doit pouvoir désactiver la suppression réversible, même avec le rôle Propriétaire ;</li><li>les données supprimées doivent rester récupérables 30 jours ;</li><li>aucun point de récupération ne doit pouvoir être supprimé avant son expiration, et ce réglage doit être irréversible ;</li><li>réduire la rétention d'une stratégie doit exiger l'approbation de l'équipe Sécurité, qui gère son propre abonnement.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Suppression réversible :",
   "o": [
    "Activée, 14 jours (valeur actuelle)",
    "Toujours active, 30 jours",
    "Désactivée au profit de l'immuabilité",
    "Activée, 180 jours, désactivable"
   ],
   "a": 1
  },
  {
   "l": "Immuabilité :",
   "o": [
    "Désactivée, avec suppression réversible",
    "Activée et verrouillée",
    "Un verrou Suppression impossible",
    "Activée, sans verrou"
   ],
   "a": 1
  },
  {
   "l": "Approbation de la Sécurité :",
   "o": [
    "Une stratégie Azure Policy Deny sur les stratégies",
    "Un Resource Guard dans l'abonnement Sécurité",
    "Le rôle Opérateur de sauvegarde pour les administrateurs",
    "Une alerte du journal d'activité vers la Sécurité"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Suppression réversible.</b> L'état « toujours active » (Always-on) empêche de la désactiver ; la durée de conservation se règle de 14 à 180 jours.<b>Immuabilité.</b> « Activée » bloque la suppression anticipée des points mais peut être désactivée ; « verrouillée » est définitive.<b>Autorisation multi-utilisateur.</b> Un Resource Guard, placé dans l'abonnement de l'équipe Sécurité, protège les opérations critiques (réduction de rétention, désactivation de la suppression réversible…) : l'administrateur de sauvegarde doit obtenir un accès temporaire, par exemple via PIM, au Resource Guard.",
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
    "*Suppression réversible",
    "Toujours active, 30 jours"
   ],
   [
    "Immuabilité",
    "Activée et verrouillée"
   ],
   [
    "Approbation de la Sécurité",
    "Un Resource Guard dans l'abonnement Sécurité"
   ]
  ]
 },
 "keep": "Toujours active = suppression réversible non désactivable. Immuable verrouillé = définitif. Approbation d'une autre équipe = Resource Guard."
},
{
 "id": "D5-405",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso a deux coffres en France Central :</p><ul><li>RSV-Old, en LRS, qui protège 12 VM depuis deux ans ;</li><li>RSV-New, créé ce matin, vide, en GRS.</li></ul><p>Exigences :</p><ul><li>les sauvegardes des 12 VM doivent être restaurables dans la région jumelée en cas de sinistre régional ;</li><li>les nouvelles VM doivent être protégées dans un coffre qui résiste à la perte d'une zone de disponibilité, sans copie dans une autre région ;</li><li>le coût doit rester minimal.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pour RSV-Old :",
   "o": [
    "Déplacer le coffre en France South",
    "Protéger les 12 VM dans un nouveau coffre GRS",
    "Activer la restauration interrégion sur RSV-Old",
    "Passer la redondance en GRS dans les propriétés"
   ],
   "a": 1
  },
  {
   "l": "Pour RSV-New :",
   "o": [
    "Le passer en ZRS tant qu'il est vide",
    "Le garder en GRS, plus sûr que ZRS",
    "Activer la restauration interrégion",
    "Le supprimer et le recréer en LRS"
   ],
   "a": 0
  },
  {
   "l": "Restauration dans la région jumelée, en plus du GRS :",
   "o": [
    "Rien : le GRS suffit pour restaurer",
    "Activer la restauration interrégion",
    "Une seconde stratégie en France South",
    "Site Recovery pour les 12 VM"
   ],
   "a": 1
  }
 ],
 "expl": "<b>RSV-Old.</b> La redondance du stockage d'un coffre ne se change plus dès qu'un élément y a été protégé. Il faut protéger les VM dans un coffre GRS (en arrêtant la protection dans RSV-Old, en gardant ou non les anciennes données).<b>RSV-New.</b> Encore vide, sa redondance peut être changée : ZRS résiste à la perte d'une zone sans copie hors région, et coûte moins cher que GRS.<b>Restauration interrégion.</b> Le GRS copie les données dans la région jumelée, mais seule la restauration interrégion permet de les restaurer là-bas.",
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
    "*Pour RSV-Old",
    "Protéger les 12 VM dans un nouveau coffre GRS"
   ],
   [
    "Pour RSV-New",
    "Le passer en ZRS tant qu'il est vide"
   ],
   [
    "Restauration dans la région jumelée, en plus du GRS",
    "Activer la restauration interrégion"
   ]
  ]
 },
 "keep": "Redondance du coffre : modifiable seulement s'il est vide. ZRS = zones sans autre région. GRS + CRR = restauration dans la région jumelée."
},
{
 "id": "D5-406",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-ERP (France Central, zone 1) doit être répliquée vers West Europe avec Azure Site Recovery. Elle porte une base de données ; un point cohérent avec les applications est requis toutes les 4 heures, et les points de récupération doivent être conservés 48 heures.</p><p>Contraintes :</p><ul><li>après un basculement, VM-ERP doit démarrer avec la capacité de calcul garantie, même si la région West Europe est saturée ;</li><li>la reprise doit être testée chaque trimestre sans arrêter la réplication ni la production ;</li><li>après un vrai basculement, une fois France Central rétablie, VM-ERP doit revenir à la région d'origine.</li></ul><p>Que devez-vous configurer ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Stratégie de réplication :",
   "o": [
    "Rétention 15 jours, toutes les heures",
    "Rétention 48 h, points cohérents avec les applications toutes les 4 h",
    "Rétention 24 h, points cohérents avec les applications toutes les 4 h",
    "Rétention 48 h, points cohérents en cas d'incident seulement"
   ],
   "a": 1
  },
  {
   "l": "Capacité garantie :",
   "o": [
    "Rien : Site Recovery réserve la capacité cible",
    "Une réservation de capacité à la demande en West Europe",
    "Un groupe à haute disponibilité cible en West Europe",
    "Une instance réservée de 3 ans en France Central"
   ],
   "a": 1
  },
  {
   "l": "Test trimestriel :",
   "o": [
    "Un test de basculement vers un réseau isolé",
    "Une reprotection sans basculement",
    "Un basculement non planifié, puis une reprotection",
    "Un basculement planifié, puis un retour"
   ],
   "a": 0
  },
  {
   "l": "Après un vrai basculement, avant le retour :",
   "o": [
    "Valider, reprotéger, puis basculer en retour",
    "Restaurer VM-ERP depuis Azure Backup",
    "Supprimer la réplication et la réactiver",
    "Redéployer VM-ERP en France Central"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Stratégie.</b> Elle fixe la rétention des points (ici 48 heures) et la fréquence des points cohérents avec les applications (ici 4 heures) ; les points cohérents en cas d'incident sont créés en continu.<b>Capacité.</b> Site Recovery ne garantit pas la capacité dans la région cible. Une réservation de capacité à la demande, associée aux paramètres de calcul de l'élément répliqué, la garantit (et elle est facturée).<b>Test.</b> Le test de basculement crée une copie dans un réseau isolé sans arrêter la réplication ; on le nettoie ensuite.<b>Retour.</b> Après un basculement, on valide (commit), on reprotège dans l'autre sens (West Europe → France Central), puis on bascule en retour (failback) et on reprotège à nouveau.",
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
    "*Stratégie de réplication",
    "Rétention 48 h, points cohérents avec les applications toutes les 4 h"
   ],
   [
    "Capacité garantie",
    "Une réservation de capacité à la demande en West Europe"
   ],
   [
    "Test trimestriel",
    "Un test de basculement vers un réseau isolé"
   ],
   [
    "Après un vrai basculement, avant le retour",
    "Valider, reprotéger, puis basculer en retour"
   ]
  ]
 },
 "keep": "Site Recovery : stratégie (rétention + cohérence applicative), réservation de capacité, test isolé, commit → reprotection → retour."
},
{
 "id": "D5-407",
 "dom": 5,
 "type": "hot",
 "stem": "<p>L'équipe d'exploitation de Fabrikam veut des alertes de métrique sur 120 VM de RG-Prod (France Central), avec le moins de règles possible.</p><ul><li>Alerte 1 : CPU moyen supérieur à 85 % pendant 15 minutes, sur chaque VM, en sachant laquelle est concernée.</li><li>Alerte 2 : les VM de calcul ont une charge très variable selon l'heure ; un seuil fixe génère trop de fausses alertes.</li><li>Alerte 3 : 10 VM de RG-Prod sont en West Europe ; elles doivent avoir la même alerte de CPU.</li><li>Alerte 4 : la mémoire disponible des VM Linux doit déclencher une alerte sous 500 Mo ; ces VM n'ont aucun agent.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Alerte 1 :",
   "o": [
    "Une alerte de journal d'activité sur RG-Prod",
    "Une règle multi-ressource sur RG-Prod",
    "Une règle par VM, créée par un modèle",
    "Une règle sur l'abonnement, toutes régions"
   ],
   "a": 1
  },
  {
   "l": "Alerte 2 :",
   "o": [
    "Une fréquence d'évaluation plus longue",
    "Une règle de traitement des alertes",
    "Un seuil dynamique",
    "Un seuil statique plus élevé"
   ],
   "a": 2
  },
  {
   "l": "Alerte 3 :",
   "o": [
    "Impossible avec des alertes de métrique",
    "Une règle de traitement des alertes",
    "Ajouter les VM de West Europe à la même règle",
    "Une seconde règle pour West Europe"
   ],
   "a": 3
  },
  {
   "l": "Alerte 4 :",
   "o": [
    "La métrique de plateforme Available Memory Bytes",
    "Déployer l'agent Azure Monitor pour collecter la mémoire invitée",
    "Resource Health",
    "Une sonde de l'équilibreur"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Alerte 1.</b> Une règle de métrique multi-ressource surveille toutes les VM d'une étendue (abonnement ou groupe) <b>dans une seule région</b>, et déclenche une alerte par VM.<b>Alerte 2.</b> Le seuil dynamique apprend le comportement saisonnier (heure, jour) de chaque série.<b>Alerte 3.</b> Une règle multi-ressource ne couvre qu'une région : il faut une seconde règle pour West Europe.<b>Alerte 4.</b> Available Memory Bytes est une métrique de plateforme (hôte) des VM, sans agent, disponible pour Windows et Linux. L'agent serait nécessaire pour des compteurs invités plus fins.",
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
    "*Alerte 1",
    "Une règle multi-ressource sur RG-Prod"
   ],
   [
    "Alerte 2",
    "Un seuil dynamique"
   ],
   [
    "Alerte 3",
    "Une seconde règle pour West Europe"
   ],
   [
    "Alerte 4",
    "La métrique de plateforme Available Memory Bytes"
   ]
  ]
 },
 "keep": "Règle de métrique multi-ressource : même type, même région. Charge variable = seuil dynamique. Mémoire : métrique de plateforme sans agent."
},
{
 "id": "D5-408",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous créez une règle d'alerte de recherche dans les journaux sur LAW-Prod. La requête compte les erreurs HTTP 500 par application web :</p><code>AppServiceHTTPLogs | where ScStatus == 500 | summarize Erreurs = count() by _ResourceId</code><p>Exigences :</p><ul><li>une alerte distincte par application qui dépasse 50 erreurs sur les 15 dernières minutes ;</li><li>l'évaluation doit avoir lieu toutes les 5 minutes ;</li><li>l'alerte doit se résoudre d'elle-même quand l'application repasse sous le seuil ;</li><li>l'équipe doit recevoir le même format JSON pour toutes ses alertes, quel que soit leur type.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Mesure et fractionnement :",
   "o": [
    "Colonne Erreurs, fractionnée par _ResourceId",
    "Nombre de lignes, sans dimension",
    "Nombre de lignes, fractionné par ScStatus",
    "Une règle distincte par application web"
   ],
   "a": 0
  },
  {
   "l": "Fréquence / période :",
   "o": [
    "5 min / 5 min",
    "5 min / 15 min",
    "15 min / 5 min",
    "1 min / 15 min"
   ],
   "a": 1
  },
  {
   "l": "Résolution :",
   "o": [
    "Une seconde requête qui ferme l'alerte",
    "Une règle de traitement de résolution",
    "Résoudre automatiquement les alertes",
    "Désactiver la règle chaque matin"
   ],
   "a": 2
  },
  {
   "l": "Format :",
   "o": [
    "Un webhook personnalisé par type d'alerte",
    "Le schéma d'alerte commun dans les actions",
    "Le format SMS pour toutes les alertes",
    "Une application logique par règle d'alerte"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Fractionnement.</b> On mesure la colonne agrégée Erreurs et on fractionne par _ResourceId : chaque application devient une série, avec sa propre alerte.<b>Fenêtres.</b> La fréquence d'évaluation (5 minutes) et la période de recherche (15 minutes) sont distinctes ; la période peut être plus longue que la fréquence.<b>Résolution.</b> L'option « Résoudre automatiquement les alertes » rend l'alerte avec état : elle se résout quand la condition n'est plus remplie.<b>Schéma commun.</b> Activé dans les actions (e-mail, webhook, application logique…), il donne la même charge utile JSON pour les alertes de métrique, de journaux et de journal d'activité.",
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
    "*Mesure et fractionnement",
    "Colonne Erreurs, fractionnée par _ResourceId"
   ],
   [
    "Fréquence / période",
    "5 min / 15 min"
   ],
   [
    "Résolution",
    "Résoudre automatiquement les alertes"
   ],
   [
    "Format",
    "Le schéma d'alerte commun dans les actions"
   ]
  ]
 },
 "keep": "Alerte de journaux : mesure + dimensions, fréquence ≠ période, résolution automatique, schéma commun dans les actions."
},
{
 "id": "D5-409",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso configure ses notifications dans RG-Prod.</p><ul><li>L'astreinte doit être appelée sur son téléphone pour les alertes Sev0, et recevoir un SMS pour les Sev1.</li><li>Pendant la maintenance du samedi (22 h – 2 h), aucune notification ne doit partir pour RG-Prod, sauf pour les alertes Sev0 ; les alertes doivent rester visibles dans le portail.</li><li>Toutes les alertes de l'abonnement Sub-Prod doivent aussi être envoyées à l'outil de tickets par un webhook, sans modifier les 80 règles existantes.</li><li>Un développeur s'étonne de ne recevoir qu'une partie des SMS quand une alerte bascule plusieurs fois par minute.</li></ul><p>Que devez-vous configurer ou répondre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Maintenance du samedi :",
   "o": [
    "Tout supprimer, puis une règle qui ajoute Sev0",
    "Un verrou Lecture seule sur RG-Prod le samedi",
    "Supprimer les notifications, filtre Sev0 exclu",
    "Désactiver les règles de RG-Prod le samedi"
   ],
   "a": 2
  },
  {
   "l": "Webhook pour toutes les alertes :",
   "o": [
    "Un paramètre de diagnostic de l'abonnement",
    "Modifier les 80 règles pour ajouter le webhook",
    "Une règle de traitement qui ajoute le groupe",
    "Une alerte de journal d'activité générale"
   ],
   "a": 2
  },
  {
   "l": "SMS manquants :",
   "o": [
    "Limite d'un SMS par numéro toutes les 5 min",
    "Le groupe d'actions est en échec partiel",
    "Les SMS sont désactivés en dehors des heures",
    "Il faut un numéro distinct par alerte"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Maintenance.</b> Une règle de traitement des alertes de type « supprimer les notifications », planifiée chaque samedi, avec un filtre de gravité, épargne Sev0. Les alertes restent créées et visibles. Une règle qui rajoute des actions ne lève pas une suppression : la suppression l'emporte.<b>Webhook.</b> Une règle de traitement qui « applique un groupe d'actions » à toutes les alertes d'une étendue évite de modifier les règles.<b>Limites.</b> Les groupes d'actions limitent les SMS (et les appels vocaux) à un toutes les 5 minutes par numéro, et les e-mails à 100 par heure et par adresse.",
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
    "*Maintenance du samedi",
    "Supprimer les notifications, filtre Sev0 exclu"
   ],
   [
    "Webhook pour toutes les alertes",
    "Une règle de traitement qui ajoute le groupe"
   ],
   [
    "SMS manquants",
    "Limite d'un SMS par numéro toutes les 5 min"
   ]
  ]
 },
 "keep": "Règles de traitement : supprimer (avec filtres) ou ajouter un groupe d'actions à une étendue. SMS : 1 / 5 min."
},
{
 "id": "D5-410",
 "dom": 5,
 "type": "hot",
 "stem": "<p>LAW-Corp (France Central) reçoit les journaux de toutes les équipes. Le mode de contrôle d'accès est « Utiliser les autorisations de ressource ou d'espace de travail ».</p><ul><li>L'équipe Web (rôle Contributeur sur RG-Web) doit voir les journaux de ses ressources, et seulement eux.</li><li>L'équipe Sécurité doit lire uniquement la table SecurityEvent de LAW-Corp, pas les autres tables.</li><li>Les journaux d'audit SigninLogs doivent être interrogeables 2 ans, puis conservés jusqu'à 7 ans.</li><li>La table AppDebug (500 Go/jour) n'est consultée qu'en cas d'incident, par des requêtes simples ; l'équipe accepte des fonctionnalités de requête limitées et 30 jours de rétention interactive en échange d'un coût d'ingestion bien plus bas.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Équipe Web :",
   "o": [
    "Lecteur Log Analytics sur LAW-Corp",
    "Contributeur Log Analytics sur LAW-Corp",
    "Un espace de travail dédié à l'équipe",
    "Rien : le contexte de ressource suffit"
   ],
   "a": 3
  },
  {
   "l": "Équipe Sécurité :",
   "o": [
    "Un rôle sur la table SecurityEvent",
    "Lecteur Log Analytics sur LAW-Corp",
    "Lecteur sur la ressource LAW-Corp",
    "Lecteur de surveillance sur l'abonnement"
   ],
   "a": 0
  },
  {
   "l": "SigninLogs :",
   "o": [
    "Interactive 7 ans, sans rétention longue",
    "Interactive 2 ans, totale 7 ans",
    "Export continu vers un compte de stockage",
    "Plan Basic, rétention totale 7 ans"
   ],
   "a": 1
  },
  {
   "l": "AppDebug :",
   "o": [
    "Plan Basic",
    "Plafond quotidien",
    "Niveau d'engagement",
    "Plan Analytics"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Web.</b> En mode « ressource ou espace de travail », un utilisateur qui lit une ressource voit ses journaux en contexte de ressource (depuis la ressource, ou dans l'espace de travail avec seulement ces données), sans rôle sur l'espace.<b>Sécurité.</b> Le RBAC au niveau de la table permet de donner l'accès à une seule table (rôle personnalisé ou rôle attribué à l'étendue de la table).<b>SigninLogs.</b> La rétention interactive va jusqu'à 2 ans ; la rétention totale (long terme, à bas coût) jusqu'à 12 ans.<b>AppDebug.</b> Le plan Basic coûte beaucoup moins à l'ingestion, avec des requêtes limitées (une seule table, facturation à la requête) et 30 jours de rétention interactive. Un plafond quotidien perdrait des données.",
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
    "*Équipe Web",
    "Rien : le contexte de ressource suffit"
   ],
   [
    "Équipe Sécurité",
    "Un rôle sur la table SecurityEvent"
   ],
   [
    "SigninLogs",
    "Interactive 2 ans, totale 7 ans"
   ],
   [
    "AppDebug",
    "Plan Basic"
   ]
  ]
 },
 "keep": "Contexte de ressource, RBAC par table, interactif ≤ 2 ans / total ≤ 12 ans, plan Basic pour les journaux de débogage."
}
);
