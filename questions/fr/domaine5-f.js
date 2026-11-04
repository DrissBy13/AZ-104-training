/* Domaine 5 : supervision et sauvegarde (lot F : D5-301 à D5-321, questions à réponses multiples issues de la fusion des QCM) */
AZ.questions.push(
{
 "id": "D5-301",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Les VM de France Central sont protégées chaque nuit par Azure Backup, avec la restauration instantanée. Plusieurs demandes de restauration arrivent le même jour. Que devez-vous faire ou choisir pour chacune ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Restaurer VM1 depuis la sauvegarde d'hier, le plus vite possible — source des points :",
   "o": [
    "Des diagnostics de démarrage de la VM",
    "Du niveau coffre en GRS, dans la région jumelée",
    "Du niveau Archive du coffre, réhydraté",
    "Des instantanés locaux (restauration instantanée)"
   ],
   "a": 3
  },
  {
   "l": "Récupérer un fichier supprimé du disque de données de VM1, sans interrompre VM1 :",
   "o": [
    "Remplacer les disques existants",
    "Utiliser la récupération de fichiers",
    "Créer une nouvelle machine virtuelle à partir de la sauvegarde",
    "Effectuer un test de basculement"
   ],
   "a": 1
  },
  {
   "l": "VM17 a été supprimée hier, ses données de sauvegarde existent encore :",
   "o": [
    "Utiliser Azure Site Recovery pour la recréer",
    "Recréer la VM et attendre la prochaine sauvegarde",
    "Rien : la VM n'existe plus, ses points non plus",
    "Restaurer avec l'option Créer une machine virtuelle"
   ],
   "a": 3
  },
  {
   "l": "Lancer la récupération de fichiers de VM18 depuis une machine sous un autre système — condition :",
   "o": [
    "Un système compatible avec les systèmes de fichiers du disque",
    "Il faut arrêter VM18 pendant la récupération",
    "Le coffre doit être en LRS pour monter les disques",
    "La machine doit être dans le même groupe de ressources que VM18"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Restaurer VM1 depuis la sauvegarde d'hier, le plus vite possible — source des points :</b></p><p>Azure Backup garde des <b>instantanés</b> des disques pendant quelques jours (1 à 5 jours en stratégie standard, plus en stratégie améliorée) : la <b>restauration instantanée</b> à partir de ces instantanés est beaucoup plus rapide que depuis le coffre.</p><p><b>2. Récupérer un fichier supprimé du disque de données de VM1, sans interrompre VM1 :</b></p><p>La <b>récupération de fichiers</b> télécharge un script qui monte les disques d'un point de restauration comme des lecteurs sur une machine. On copie le fichier, puis on démonte. VM1 continue de tourner.</p><ul><li><b>Remplacer les disques</b> arrête VM1 et la ramène entièrement à l'état de la sauvegarde.</li><li><b>Créer une VM</b> est bien plus long pour un seul fichier.</li><li>Le <b>test de basculement</b> concerne Site Recovery.</li></ul><p><b>3. VM17 a été supprimée hier, ses données de sauvegarde existent encore :</b></p><p>Les points de récupération restent dans le coffre même si la VM est supprimée. On ouvre l'élément de sauvegarde et on <b>crée une nouvelle VM</b> (ou on restaure les disques) à partir du dernier point.</p><p><b>4. Lancer la récupération de fichiers de VM18 depuis une machine sous un autre système — condition :</b></p><p>Le script de récupération de fichiers monte les volumes : la machine qui l'exécute doit pouvoir lire leurs <b>systèmes de fichiers</b> (par exemple un serveur Windows récent pour NTFS, une distribution Linux compatible pour ext4 ou LVM). Elle doit aussi pouvoir joindre le service de récupération par le réseau.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM1"
  ],
  "title": "Points de restauration",
  "rows": [
   [
    "*Instantané",
    "Hier · restauration instantanée"
   ],
   [
    "Coffre",
    "Plus lent"
   ]
  ]
 },
 "keep": "Restauration la plus rapide = instantanés (restauration instantanée). Un fichier sans arrêter la VM = récupération de fichiers. VM supprimée mais sauvegardée = restaurer depuis le coffre. Script de récupération = machine qui lit ces systèmes de fichiers."
},
{
 "id": "D5-302",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous protégez les partages Azure Files et les blobs de plusieurs comptes de stockage. Que devez-vous choisir pour chaque exigence ou chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "share1 : sauvegarde quotidienne, rétention 30 jours, restauration d'un seul fichier :",
   "o": [
    "La réplication d'objets vers un autre compte",
    "L'agent MARS sur chaque poste client",
    "Azure Backup pour Azure Files (même région)",
    "Azure Site Recovery pour le compte de stockage"
   ],
   "a": 2
  },
  {
   "l": "Blobs restaurables à n'importe quel moment des 14 derniers jours, sans copie ailleurs :",
   "o": [
    "L'agent MARS sur une VM qui monte le conteneur",
    "Azure Site Recovery pour le compte",
    "La sauvegarde en coffre uniquement",
    "La sauvegarde opérationnelle des blobs"
   ],
   "a": 3
  },
  {
   "l": "Conteneur restauré à l'état d'il y a 3 jours — blobs créés depuis :",
   "o": [
    "Ils sont conservés en plus des anciens blobs",
    "Ils sont supprimés : retour à l'état choisi",
    "Ils sont déplacés dans un autre conteneur",
    "Ils sont archivés dans le niveau Archive"
   ],
   "a": 1
  },
  {
   "l": "Le compte qui contient share3 (sauvegardé par instantanés seuls) est supprimé — la sauvegarde :",
   "o": [
    "La sauvegarde continue normalement sur le partage",
    "Les points restent conservés dans le coffre",
    "Les points sont copiés dans la région jumelée",
    "Instantanés seuls : les points sont perdus"
   ],
   "a": 3
  },
  {
   "l": "Le dossier Paie de share2 est restauré vers share-restore, dans un autre compte — type de restauration :",
   "o": [
    "Une reprotection",
    "Un basculement de partage",
    "Une restauration à l'emplacement d'origine",
    "Une restauration vers un autre emplacement"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. share1 : sauvegarde quotidienne, rétention 30 jours, restauration d'un seul fichier :</b></p><p>La sauvegarde <b>Azure Files</b> d'Azure Backup (coffre Recovery Services) planifie des <b>instantanés de partage</b> (ou une sauvegarde en coffre), gère leur rétention, et permet de restaurer tout le partage ou des fichiers individuels, vers l'emplacement d'origine ou un autre.</p><p><b>2. Blobs restaurables à n'importe quel moment des 14 derniers jours, sans copie ailleurs :</b></p><p>La <b>sauvegarde opérationnelle</b> des blobs est locale : elle s'appuie sur les fonctions du compte (restauration à un point dans le temps, contrôle de version, suppression réversible, flux de modification) et permet une restauration continue. La <b>sauvegarde en coffre</b> copie les données dans le coffre, ce qui protège aussi contre la perte du compte.</p><p><b>3. Conteneur restauré à l'état d'il y a 3 jours — blobs créés depuis :</b></p><p>La restauration opérationnelle utilise la <b>restauration à un point dans le temps</b> : le contenu des conteneurs restaurés revient à l'état exact de la date choisie. Les blobs créés après sont supprimés, et les blobs modifiés retrouvent leur ancien contenu.</p><p><b>4. Le compte qui contient share3 (sauvegardé par instantanés seuls) est supprimé — la sauvegarde :</b></p><p>La sauvegarde Azure Files <b>par instantanés</b> stocke les points dans le compte de stockage lui-même. Si le compte est supprimé, les instantanés le sont aussi. La <b>sauvegarde en coffre</b> copie les données dans le coffre et protège contre ce risque. Un <b>verrou</b> sur le compte est aussi recommandé (Azure Backup en ajoute un automatiquement).</p><p><b>5. Le dossier Paie de share2 est restauré vers share-restore, dans un autre compte — type de restauration :</b></p><p>La sauvegarde Azure Files permet de restaurer un partage entier ou des fichiers à l'<b>emplacement d'origine</b> (en écrasant ou en conservant les fichiers en conflit) ou vers un <b>autre emplacement</b> (autre partage, éventuellement dans un autre compte de la même région).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "stfiles"
  ],
  "title": "share1 | Sauvegarde",
  "rows": [
   [
    "*Coffre",
    "Recovery Services (même région)"
   ],
   [
    "Rétention",
    "30 jours"
   ]
  ],
  "btn": "Activer la sauvegarde"
 },
 "keep": "Sauvegarder Azure Files = Azure Backup (coffre Recovery Services). Restauration continue locale des blobs = sauvegarde opérationnelle. Restauration à un point = état exact (les nouveaux blobs disparaissent). Instantanés de partage = dans le compte ; coffre (vaulted) = hors du compte. Restaurer ailleurs = restauration vers un autre emplacement."
},
{
 "id": "D5-303",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Plusieurs incidents ont eu lieu hier dans l'abonnement Sub1. Pour chaque question posée par la direction, que devez-vous consulter ou faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Qui a supprimé le groupe de ressources, avec le moins d'effort :",
   "o": [
    "L'explorateur de métriques",
    "Le journal d'activité",
    "VM insights",
    "Les journaux de flux de réseau virtuel"
   ],
   "a": 1
  },
  {
   "l": "VM3 indisponible 10 minutes : panne de la plateforme ou de la VM ?",
   "o": [
    "Azure Advisor, onglet Fiabilité",
    "Les métriques du disque de VM3",
    "L'analyse des coûts de la nuit",
    "Resource Health de VM3"
   ],
   "a": 3
  },
  {
   "l": "Quelle adresse IP a été bloquée vers une VM, sans journal de flux activé :",
   "o": [
    "Consulter le journal d'activité du NSG",
    "Consulter les métriques du NSG d'hier (paquets refusés)",
    "Rien pour hier : activer les journaux de flux",
    "Consulter Azure Advisor, onglet Sécurité"
   ],
   "a": 2
  },
  {
   "l": "Pourquoi VMSS12 a ajouté des instances à 14 h :",
   "o": [
    "Dans le coffre Recovery Services du groupe",
    "Dans les diagnostics de démarrage des instances",
    "Dans Azure Advisor, onglet Performances",
    "Dans l'historique de mise à l'échelle automatique"
   ],
   "a": 3
  },
  {
   "l": "Quelles propriétés réseau ont changé ces derniers jours :",
   "o": [
    "Les diagnostics de démarrage de chaque ressource",
    "Azure Backup et ses points de restauration",
    "L'analyse des modifications des ressources",
    "Une alerte de budget sur le groupe de ressources"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Qui a supprimé le groupe de ressources, avec le moins d'effort :</b></p><p>Le <b>journal d'activité</b> enregistre automatiquement, pendant <b>90 jours</b>, les opérations du plan de contrôle sur les ressources : qui (Caller), quoi (Delete Resource Group), quand et avec quel résultat. Il suffit de filtrer sur l'opération et la période.</p><p>Les métriques mesurent des valeurs numériques (CPU, débit). VM insights surveille les performances des VM. Les journaux de flux enregistrent le trafic réseau.</p><p><b>2. VM3 indisponible 10 minutes : panne de la plateforme ou de la VM ?</b></p><p><b>Resource Health</b> indique l'état d'une ressource précise (Disponible, Indisponible, Dégradé, Inconnu) et son historique, avec la cause lorsqu'elle est liée à la plateforme (par exemple un redémarrage de l'hôte).</p><p>Service Health est global aux services et régions ; Resource Health concerne <b>votre</b> ressource.</p><p><b>3. Quelle adresse IP a été bloquée vers une VM, sans journal de flux activé :</b></p><p>Les flux réseau ne sont enregistrés que si les <b>journaux de flux</b> sont activés. Sans eux, il n'existe aucune trace des connexions refusées hier. Le journal d'activité ne trace que les opérations de gestion, pas le trafic.</p><p><b>4. Pourquoi VMSS12 a ajouté des instances à 14 h :</b></p><p>Les opérations de mise à l'échelle automatique sont tracées dans le <b>journal d'activité</b> (catégorie Mise à l'échelle automatique) et dans l'<b>historique d'exécution</b> de la configuration de mise à l'échelle, avec la règle déclenchée et la valeur de la métrique. On peut aussi activer les journaux de ressources de la mise à l'échelle automatique.</p><p><b>5. Quelles propriétés réseau ont changé ces derniers jours :</b></p><p>L'<b>analyse des modifications</b> (ou l'historique des modifications dans le journal d'activité et Resource Graph) montre les changements de configuration des ressources (avant et après), qu'ils viennent du portail, d'un modèle ou d'un script. C'est souvent le moyen le plus rapide de trouver la cause d'une régression.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Journal d'activité"
  ],
  "title": "Journal d'activité",
  "menu": [
   "*Journal d'activité",
   "Alertes",
   "Métriques"
  ],
  "rows": [
   [
    "Opération",
    "Delete Resource Group"
   ],
   [
    "*Événement initié par",
    "alex@contoso.com"
   ],
   [
    "Horodatage",
    "Hier 16:42"
   ]
  ]
 },
 "keep": "Qui a fait quoi sur une ressource = journal d'activité (90 jours). Ma ressource et la plateforme = Resource Health. Pas de journal de flux = pas d'historique du trafic. Pourquoi une mise à l'échelle = historique d'exécution + journal d'activité. Qu'est-ce qui a changé = analyse des modifications."
},
{
 "id": "D5-304",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous préparez la reprise d'activité de plusieurs applications de France Central avec Azure Site Recovery. Que devez-vous utiliser ou configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Redémarrer en West Europe en moins d'une heure, moins de 5 minutes de données perdues — service :",
   "o": [
    "Azure Site Recovery",
    "Des instantanés manuels",
    "Azure Backup avec une sauvegarde quotidienne",
    "Un groupe à haute disponibilité"
   ],
   "a": 0
  },
  {
   "l": "Points cohérents avec les applications toutes les 2 heures, conservés 24 heures :",
   "o": [
    "Dans la stratégie de réplication",
    "Dans le plan de récupération de l'application",
    "Dans la stratégie de sauvegarde",
    "Dans le paramètre de diagnostic"
   ],
   "a": 0
  },
  {
   "l": "Les VM basculées doivent démarrer dans le bon réseau virtuel :",
   "o": [
    "Dans le mappage réseau (paramètres de réplication)",
    "Dans le paramètre de diagnostic du coffre Recovery Services",
    "Dans la stratégie de sauvegarde des VM",
    "Dans Azure Advisor, onglet Fiabilité"
   ],
   "a": 0
  },
  {
   "l": "La VM de basculement doit reprendre la nouvelle taille de la VM source :",
   "o": [
    "Dans les paramètres de calcul de l'élément répliqué",
    "Dans le plan App Service de la région cible du basculement",
    "Dans la stratégie de sauvegarde de la VM source",
    "Dans le journal d'activité de la VM source"
   ],
   "a": 0
  },
  {
   "l": "Basculer de la zone 1 vers la zone 2 de la même région :",
   "o": [
    "La géoréplication d'ACR",
    "Azure Backup en ZRS",
    "Site Recovery de zone à zone",
    "Un appairage de réseaux virtuels"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Redémarrer en West Europe en moins d'une heure, moins de 5 minutes de données perdues — service :</b></p><p><b>Azure Site Recovery</b> réplique en continu les disques des VM vers la région cible. Le <b>RPO</b> (perte de données maximale) est de l'ordre de quelques secondes à minutes, et le <b>RTO</b> (temps de reprise) de quelques minutes grâce au basculement.</p><p>Une sauvegarde quotidienne aurait un RPO de 24 heures et une restauration plus longue.</p><p><b>2. Points cohérents avec les applications toutes les 2 heures, conservés 24 heures :</b></p><p>La <b>stratégie de réplication</b> de Site Recovery définit la <b>rétention des points de récupération</b> et la <b>fréquence des instantanés cohérents avec les applications</b>. Les points cohérents en cas d'incident sont créés automatiquement toutes les quelques minutes.</p><p><b>3. Les VM basculées doivent démarrer dans le bon réseau virtuel :</b></p><p>Le <b>réseau cible</b> (et le sous-réseau, l'adresse IP) se configure dans les <b>paramètres de calcul et de réseau</b> de l'élément répliqué, et le <b>mappage réseau</b> associe un réseau source à un réseau cible. Le test de basculement utilise un réseau séparé, choisi au moment du test.</p><p><b>4. La VM de basculement doit reprendre la nouvelle taille de la VM source :</b></p><p>Les <b>paramètres de calcul et de réseau</b> d'un élément répliqué définissent la taille, le groupe de ressources, le réseau et la disponibilité de la VM cible. Il faut les vérifier après des changements sur la source.</p><p><b>5. Basculer de la zone 1 vers la zone 2 de la même région :</b></p><p>Site Recovery prend en charge la reprise <b>de zone à zone</b> dans une même région : les VM zonales sont répliquées vers une autre zone, avec un basculement en cas de panne de zone.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM-App1"
  ],
  "title": "VM-App1 | Récupération d'urgence",
  "menu": [
   "*Récupération d'urgence"
  ],
  "rows": [
   [
    "*Région cible",
    "West Europe"
   ],
   [
    "RPO",
    "Quelques secondes à minutes"
   ]
  ],
  "btn": "Vérifier + démarrer la réplication"
 },
 "keep": "Reprendre dans une autre région avec RPO/RTO courts = Site Recovery. Rétention et fréquence app = stratégie de réplication. Réseau de basculement = calcul et réseau / mappage réseau. Taille de la VM de basculement = calcul et réseau. Panne de zone = Site Recovery de zone à zone."
},
{
 "id": "D5-305",
 "dom": 5,
 "type": "hot",
 "stem": "<p>L'application à trois niveaux App1 est répliquée par Site Recovery de France Central vers West Europe. Que devez-vous faire pour chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Vérifier le plan de reprise sans impact sur la production ni la réplication :",
   "o": [
    "Un basculement planifié en heures creuses",
    "Une reprotection vers la région source",
    "Un test de basculement (réseau isolé)",
    "Un basculement non planifié avec retour"
   ],
   "a": 2
  },
  {
   "l": "France Central est en panne, les VM sources sont indisponibles :",
   "o": [
    "Un basculement planifié, VM sources arrêtées",
    "Un basculement, en choisissant le point",
    "Un test de basculement vers le réseau cible",
    "Une reprotection vers West Europe"
   ],
   "a": 1
  },
  {
   "l": "Démarrer base de données, puis applications, puis web, avec un script entre les étapes :",
   "o": [
    "Trois coffres, un par niveau de l'application",
    "Un groupe de placement de proximité par niveau",
    "Une stratégie de réplication par VM, ordonnée par niveau",
    "Un plan de récupération avec groupes et scripts"
   ],
   "a": 3
  },
  {
   "l": "Mettre à jour un enregistrement DNS après le basculement des VM web :",
   "o": [
    "Un instantané des VM web",
    "Un runbook après le groupe web",
    "Une alerte de métrique sur le DNS",
    "Une règle de collecte de données"
   ],
   "a": 1
  },
  {
   "l": "RPO 24 h pour 50 VM non critiques ; RPO de minutes et autre région pour 5 VM critiques :",
   "o": [
    "Des groupes à haute disponibilité pour toutes les VM, sans sauvegarde",
    "Azure Site Recovery pour les 55 VM, sans sauvegarde",
    "Backup pour les 50 VM ; Site Recovery pour les 5",
    "Des instantanés manuels quotidiens pour toutes les VM"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Vérifier le plan de reprise sans impact sur la production ni la réplication :</b></p><p>Le <b>test de basculement</b> crée des VM de test dans la région cible, dans un réseau virtuel choisi (de préférence <b>isolé</b>), sans arrêter les VM sources ni interrompre la réplication. On nettoie ensuite le test.</p><p><b>2. France Central est en panne, les VM sources sont indisponibles :</b></p><p>En cas de sinistre, on lance un <b>basculement</b> non planifié, en choisissant le point de récupération : le plus récent (RPO minimal), le dernier traité (RTO minimal) ou le dernier cohérent avec les applications. Le basculement <b>planifié</b>, lui, arrête proprement les VM sources sans perte de données, quand la source est encore disponible.</p><p><b>3. Démarrer base de données, puis applications, puis web, avec un script entre les étapes :</b></p><p>Un <b>plan de récupération</b> regroupe des VM en <b>groupes</b> qui démarrent dans l'ordre, et permet d'ajouter des <b>scripts</b> (runbooks Azure Automation) et des <b>actions manuelles</b> entre les groupes.</p><p><b>4. Mettre à jour un enregistrement DNS après le basculement des VM web :</b></p><p>Les plans de récupération acceptent des <b>scripts</b> (runbooks Azure Automation) avant ou après chaque groupe, et des <b>actions manuelles</b>. Mettre à jour le DNS ou un équilibreur est un cas typique.</p><p><b>5. RPO 24 h pour 50 VM non critiques ; RPO de minutes et autre région pour 5 VM critiques :</b></p><p>Pour les VM non critiques, <b>Azure Backup</b> quotidien suffit (RPO 24 h, rétention 30 jours), à moindre coût. Pour les VM critiques, <b>Site Recovery</b> offre un RPO de quelques minutes et une reprise dans une autre région ; Azure Backup reste utile pour restaurer des données anciennes.</p><p>Site Recovery pour tout coûterait plus cher sans besoin. Les groupes à haute disponibilité ne protègent pas contre la perte de données.</p>",
 "portal": {
  "path": [
   "Éléments répliqués",
   "VM9"
  ],
  "title": "Test de basculement",
  "rows": [
   [
    "Point de récupération",
    "Dernier traité"
   ],
   [
    "*Réseau virtuel",
    "vnet-test-isolé"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Tester sans impact = test de basculement en réseau isolé. Source perdue = basculement non planifié ; source dispo = planifié. Ordre de démarrage + scripts = plan de récupération. Automatiser une étape de reprise = runbook dans le plan. Protection selon le RPO/RTO de chaque VM."
},
{
 "id": "D5-306",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous écrivez des requêtes KQL dans l'espace de travail Log Analytics WS-Paris. Quel élément devez-vous utiliser dans chaque requête ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Compter les requêtes HTTP par tranche de 5 minutes :",
   "o": [
    "bin(TimeGenerated, 5m)",
    "ago(TimeGenerated, 5m)",
    "range(TimeGenerated, 5m)",
    "now(TimeGenerated) - 5m"
   ],
   "a": 0
  },
  {
   "l": "Interroger aussi l'espace WS-Lyon dans la même requête :",
   "o": [
    "join kind=workspace (\"WS-Lyon\")",
    "ago(\"WS-Lyon\") dans un where",
    "bin(\"WS-Lyon\") dans un summarize",
    "union avec workspace(\"WS-Lyon\")"
   ],
   "a": 3
  },
  {
   "l": "Nombre d'événements et dernier événement par ordinateur :",
   "o": [
    "| summarize Nombre = count(), Dernier = max(TimeGenerated) by Computer",
    "| project Nombre = count(), Dernier = max(TimeGenerated), Computer",
    "| where Nombre = count(), Dernier = max(TimeGenerated) by Computer",
    "| extend Nombre = count(), Dernier = max(TimeGenerated) by Computer"
   ],
   "a": 0
  },
  {
   "l": "Afficher le résultat en graphique temporel :",
   "o": [
    "extend graph",
    "project chart",
    "summarize timechart",
    "render timechart"
   ],
   "a": 3
  },
  {
   "l": "Ne garder que les messages qui contiennent « timeout », sans tenir compte de la casse :",
   "o": [
    "where RenderedDescription == \"timeout\"",
    "where RenderedDescription contains \"timeout\"",
    "summarize contains \"timeout\"",
    "project RenderedDescription has_cs \"timeout\""
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Compter les requêtes HTTP par tranche de 5 minutes :</b></p><p><code>bin()</code> arrondit une valeur à l'intervalle choisi : <code>summarize count() by bin(TimeGenerated, 5m)</code> donne un compte par tranche de 5 minutes. <code>ago()</code> sert à filtrer une période relative.</p><p><b>2. Interroger aussi l'espace WS-Lyon dans la même requête :</b></p><p>La fonction <b>workspace()</b> référence une table d'un autre espace de travail : <code>union Event, workspace(\"WS-Lyon\").Event</code>. On a besoin de l'accès en lecture aux deux espaces de travail.</p><p><b>3. Nombre d'événements et dernier événement par ordinateur :</b></p><p><b>summarize</b> accepte plusieurs agrégations à la fois, séparées par des virgules, regroupées par une ou plusieurs colonnes. <code>project</code>, <code>extend</code> et <code>where</code> ne regroupent pas.</p><p><b>4. Afficher le résultat en graphique temporel :</b></p><p><code>render</code> choisit la visualisation : <code>timechart</code>, <code>barchart</code>, <code>piechart</code>… On l'utilise souvent après un <code>summarize ... by bin(TimeGenerated, 5m)</code> qui regroupe les données par intervalles de temps.</p><p><b>5. Ne garder que les messages qui contiennent « timeout », sans tenir compte de la casse :</b></p><p><b>contains</b> cherche une sous-chaîne, sans tenir compte de la casse. <b>==</b> exige une égalité exacte. <b>has</b> cherche un terme entier (plus performant) ; les variantes <b>_cs</b> respectent la casse.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Requête",
  "rows": [
   [
    "*bin(TimeGenerated, 5m)",
    "Tranches de 5 min"
   ]
  ]
 },
 "keep": "Regrouper par intervalle = bin(). Plusieurs espaces de travail = workspace() + union. Plusieurs agrégations = summarize a, b by … Graphique = render. contains = sous-chaîne ; has = mot ; _cs = sensible à la casse."
},
{
 "id": "D5-307",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous concevez la supervision centralisée de plusieurs abonnements avec Log Analytics. Que devez-vous choisir pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Lister les suppressions de la semaine dernière, avec l'appelant — table :",
   "o": [
    "AzureActivity",
    "AzureDiagnostics",
    "Heartbeat",
    "Perf"
   ],
   "a": 0
  },
  {
   "l": "Trouver les VM qui n'envoient plus de données depuis 15 minutes — table :",
   "o": [
    "AzureActivity",
    "Heartbeat",
    "Usage",
    "SecurityEvent"
   ],
   "a": 1
  },
  {
   "l": "Les journaux doivent rester dans l'Union européenne — ce qui fixe leur emplacement :",
   "o": [
    "La région de l'espace de travail",
    "La région du groupe d'actions",
    "La région des VM supervisées par l'agent",
    "La région du locataire Entra"
   ],
   "a": 0
  },
  {
   "l": "Un seul espace pour les VM de plusieurs abonnements :",
   "o": [
    "Un espace peut recevoir plusieurs abonnements et régions",
    "Un espace de travail ne reçoit que son abonnement",
    "Il faut obligatoirement un espace de travail par région et abonnement",
    "Il faut un espace de travail par VM supervisée"
   ],
   "a": 0
  },
  {
   "l": "Journaux de console d'Azure Container Apps — destination :",
   "o": [
    "Dans le coffre Recovery Services de la région",
    "Dans le plan App Service associé",
    "Dans l'espace Log Analytics de l'environnement",
    "Dans le registre de conteneurs qui héberge l'image"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Lister les suppressions de la semaine dernière, avec l'appelant — table :</b></p><p>La table <b>AzureActivity</b> contient le journal d'activité envoyé par le paramètre de diagnostic de l'abonnement : <code>AzureActivity | where OperationNameValue endswith \"DELETE\" | project TimeGenerated, Caller, ResourceGroup, OperationNameValue</code>.</p><p>Perf contient les compteurs de performances, Heartbeat les signaux des agents, Event les événements Windows.</p><p><b>2. Trouver les VM qui n'envoient plus de données depuis 15 minutes — table :</b></p><p>Les agents envoient un signal <b>Heartbeat</b> chaque minute. La requête <code>Heartbeat | summarize Dernier = max(TimeGenerated) by Computer | where Dernier &lt; ago(15m)</code> liste les machines silencieuses. On peut en faire une alerte de recherche dans les journaux.</p><p><b>3. Les journaux doivent rester dans l'Union européenne — ce qui fixe leur emplacement :</b></p><p>Les données d'un espace de travail sont stockées dans la <b>région de l'espace de travail</b>. Pour la souveraineté, on crée l'espace de travail dans une région de l'UE, même si des ressources supervisées sont ailleurs.</p><p><b>4. Un seul espace pour les VM de plusieurs abonnements :</b></p><p>Un espace de travail Log Analytics peut collecter des données de ressources de <b>plusieurs abonnements et régions</b>, voire de plusieurs locataires. Microsoft recommande de limiter le nombre d'espaces de travail, sauf contrainte de souveraineté, de facturation ou d'accès.</p><p><b>5. Journaux de console d'Azure Container Apps — destination :</b></p><p>Un environnement Container Apps est associé à une destination de journaux, en général un espace de travail <b>Log Analytics</b> : les journaux de console (stdout/stderr) et système y arrivent dans des tables dédiées. Les métriques (CPU, mémoire, requêtes) sont disponibles dans Azure Monitor.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1"
  ],
  "title": "Journaux",
  "rows": [
   [
    "*AzureActivity",
    "where OperationNameValue endswith \"DELETE\""
   ]
  ],
  "btn": "Exécuter"
 },
 "keep": "Opérations de gestion en KQL = AzureActivity. Machines silencieuses = Heartbeat. Souveraineté des journaux = région de l'espace de travail. Un espace de travail peut couvrir plusieurs abonnements. Journaux Container Apps = Log Analytics de l'environnement."
},
{
 "id": "D5-308",
 "dom": 5,
 "type": "hot",
 "stem": "<p>La direction veut protéger les sauvegardes du coffre Recovery Services RSV1 contre les erreurs et les attaques. Que devez-vous utiliser ou vérifier pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Récupérer pendant un temps les données d'une VM supprimées par un administrateur :",
   "o": [
    "Une alerte de métrique sur le coffre",
    "La suppression réversible du coffre",
    "Les diagnostics de démarrage de la VM",
    "La redondance LRS du coffre"
   ],
   "a": 1
  },
  {
   "l": "Aucune donnée supprimée ni raccourcie avant expiration, même par un administrateur :",
   "o": [
    "La restauration interrégion",
    "Une alerte",
    "Le coffre immuable",
    "La redondance ZRS"
   ],
   "a": 2
  },
  {
   "l": "Les opérations critiques exigent l'approbation d'une autre équipe, dans un autre abonnement :",
   "o": [
    "Un second coffre dans l'autre abonnement",
    "Un verrou Lecture seule sur le coffre",
    "Une alerte de journal d'activité sur les opérations du coffre",
    "L'autorisation multi-utilisateur (Resource Guard)"
   ],
   "a": 3
  },
  {
   "l": "La suppression du coffre Vault2 échoue — cause probable :",
   "o": [
    "Le groupe de ressources a un verrou Lecture seule",
    "Il reste des éléments protégés ou supprimés (réversible)",
    "Le coffre est en GRS et doit d'abord repasser en LRS",
    "Le coffre n'a aucune règle d'alerte associée"
   ],
   "a": 1
  },
  {
   "l": "Jours restants avant la suppression définitive de données supprimées de façon réversible :",
   "o": [
    "Dans Network Watcher",
    "Dans Azure Advisor, onglet Coût",
    "Dans l'élément de sauvegarde du coffre",
    "Dans le journal d'activité de la VM"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Récupérer pendant un temps les données d'une VM supprimées par un administrateur :</b></p><p>Avec la <b>suppression réversible</b> (activée par défaut), les données de sauvegarde supprimées restent récupérables <b>14 jours</b> sans frais supplémentaires. La suppression réversible <b>améliorée</b> permet jusqu'à 180 jours et peut être rendue toujours active (irréversible).</p><p><b>2. Aucune donnée supprimée ni raccourcie avant expiration, même par un administrateur :</b></p><p>Un <b>coffre immuable</b> empêche les opérations qui pourraient faire perdre des points de récupération (suppression, réduction de la rétention). Une fois <b>verrouillé</b>, ce réglage est irréversible.</p><p><b>3. Les opérations critiques exigent l'approbation d'une autre équipe, dans un autre abonnement :</b></p><p>L'<b>autorisation multi-utilisateur</b> associe le coffre à une <b>Resource Guard</b> gérée par une autre équipe. Les opérations protégées exigent alors une autorisation sur la Resource Guard (souvent via PIM), en plus des droits sur le coffre.</p><p><b>4. La suppression du coffre Vault2 échoue — cause probable :</b></p><p>Un coffre ne peut pas être supprimé tant qu'il contient des <b>éléments protégés</b>, des <b>données de sauvegarde</b> (y compris en suppression réversible), des serveurs inscrits ou des éléments de réplication Site Recovery. Il faut tout arrêter et supprimer, puis attendre la fin de la suppression réversible ou la purger.</p><p><b>5. Jours restants avant la suppression définitive de données supprimées de façon réversible :</b></p><p>Les éléments supprimés de façon réversible restent visibles dans le coffre, avec l'état <b>Suppression réversible</b> et le nombre de jours restants. On peut les <b>annuler la suppression</b> pour reprendre la protection.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Paramètres de sécurité",
  "rows": [
   [
    "*Suppression réversible",
    "Activée · 14 jours"
   ]
  ]
 },
 "keep": "Sauvegarde supprimée récupérable = suppression réversible. Rien ne peut raccourcir les sauvegardes = coffre immuable verrouillé. Approbation d'une autre équipe = MUA + Resource Guard. Vider le coffre (y compris réversible) avant de le supprimer. Jours restants = élément de sauvegarde en suppression réversible."
},
{
 "id": "D5-309",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Plusieurs opérations de sauvegarde et de restauration de VM échouent ou ne proposent pas l'option attendue. Que devez-vous vérifier ou configurer dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Les sauvegardes de VM6 échouent avec une erreur liée à l'agent :",
   "o": [
    "L'agent de VM Azure : installé, démarré, et qui joint Azure",
    "Que le coffre est en LRS, et pas en GRS",
    "Que la VM est dans un groupe à haute disponibilité",
    "Que la VM a une adresse IP publique Standard pour joindre le coffre"
   ],
   "a": 0
  },
  {
   "l": "VM7 (Azure Disk Encryption) : la configuration de la sauvegarde échoue :",
   "o": [
    "Que le coffre de clés autorise l'accès public",
    "Que Backup Management Service accède aux clés et secrets",
    "Que le coffre Recovery Services est dans une autre région que VM7",
    "Que VM7 n'a pas de disque de données chiffré"
   ],
   "a": 1
  },
  {
   "l": "Une restauration avec l'option Remplacer l'existant échoue :",
   "o": [
    "Que la VM est dans une autre région que le coffre",
    "Que la VM n'a jamais été sauvegardée auparavant dans ce coffre",
    "Que la VM existe encore, avec l'emplacement intermédiaire",
    "Que le coffre est en LRS et non en GRS"
   ],
   "a": 2
  },
  {
   "l": "Restaurer dans la région jumelée, même si la région primaire fonctionne :",
   "o": [
    "La redondance GRS et la restauration interrégion",
    "La suppression réversible améliorée du coffre",
    "Le mode immuable verrouillé sur le coffre",
    "La redondance LRS avec une copie manuelle dans l'autre région"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Les sauvegardes de VM6 échouent avec une erreur liée à l'agent :</b></p><p>Azure Backup utilise une extension qui dépend de l'<b>agent de VM</b>. Les échecs viennent souvent d'un agent arrêté ou obsolète, ou d'un blocage réseau (NSG, proxy, pare-feu) vers les services Azure et l'adresse 168.63.129.16.</p><p><b>2. VM7 (Azure Disk Encryption) : la configuration de la sauvegarde échoue :</b></p><p>Pour sauvegarder une VM chiffrée par ADE, Azure Backup doit pouvoir lire les <b>clés et secrets</b> dans le coffre de clés : il faut donner l'accès au service <b>Backup Management Service</b> (stratégie d'accès ou rôle). Le portail le propose lors de l'activation.</p><p><b>3. Une restauration avec l'option Remplacer l'existant échoue :</b></p><p><b>Remplacer l'existant</b> remplace les disques d'une VM qui <b>existe encore</b>. Elle prend un instantané des disques actuels (conservé dans le coffre) puis les remplace. Si la VM a été supprimée, il faut créer une nouvelle VM ou restaurer les disques.</p><p><b>4. Restaurer dans la région jumelée, même si la région primaire fonctionne :</b></p><p>Avec un coffre en <b>GRS</b>, les données de sauvegarde sont répliquées dans la région jumelée. La <b>restauration interrégion</b> permet de restaurer depuis cette région secondaire à tout moment, pas seulement après une panne déclarée par Microsoft.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM6"
  ],
  "title": "VM6 | Propriétés",
  "rows": [
   [
    "*État de l'agent",
    "Pas prêt"
   ],
   [
    "Réseau",
    "168.63.129.16 joignable ?"
   ]
  ]
 },
 "keep": "Échec de sauvegarde lié à l'agent = agent de VM + réseau. VM ADE = accès de Backup Management Service au coffre de clés. Remplacer l'existant = la VM doit exister. Restaurer dans la région jumelée = GRS + restauration interrégion."
},
{
 "id": "D5-310",
 "dom": 5,
 "type": "hot",
 "stem": "<p>La facture de Log Analytics a fortement augmenté. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "SecurityEvent interrogeable 1 an, puis conservé à bas coût jusqu'à 7 ans :",
   "o": [
    "Un export continu des données vers un compte de stockage",
    "Un second espace de travail pour l'archive",
    "Rétention interactive 365 jours, totale 7 ans",
    "Une règle de traitement des alertes sur la table"
   ],
   "a": 2
  },
  {
   "l": "L'espace ingère environ 200 Go par jour — tarification :",
   "o": [
    "Augmenter la rétention interactive",
    "Un niveau d'engagement (200 Go/jour)",
    "Un second espace de travail en région",
    "Le paiement à l'utilisation uniquement"
   ],
   "a": 1
  },
  {
   "l": "Table de débogage volumineuse, consultée seulement en cas d'incident — plan :",
   "o": [
    "Un niveau d'engagement plus élevé",
    "Le plan Analytics de la table",
    "Le plan Basic (ou Auxiliary)",
    "Une rétention de 2 ans sur la table"
   ],
   "a": 2
  },
  {
   "l": "Éviter qu'une erreur de configuration fasse exploser la facture de WS3 en un jour :",
   "o": [
    "Un verrou Suppression impossible sur WS3",
    "Une rétention plus courte, sans autre réglage",
    "Un groupe de placement de proximité",
    "Un plafond quotidien, avec une alerte"
   ],
   "a": 3
  },
  {
   "l": "Une DCR collecte beaucoup d'événements Windows inutiles :",
   "o": [
    "Désactiver l'agent uniquement le week-end",
    "Augmenter la rétention pour lisser le coût",
    "Filtrer dans la DCR (XPath ou transformation)",
    "Ajouter un second espace de travail moins cher"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. SecurityEvent interrogeable 1 an, puis conservé à bas coût jusqu'à 7 ans :</b></p><p>Chaque table d'un espace de travail a une <b>rétention interactive</b> (données interrogeables normalement, jusqu'à 2 ans) et une <b>rétention totale</b> (jusqu'à 12 ans). Entre les deux, les données sont en <b>rétention à long terme</b> (archive), moins chère, accessibles par des travaux de recherche ou une restauration.</p><p><b>2. L'espace ingère environ 200 Go par jour — tarification :</b></p><p>Les <b>niveaux d'engagement</b> (100, 200, 300 Go/jour et plus) offrent une remise par rapport au paiement à l'utilisation, en échange d'un volume quotidien engagé. On peut aussi réduire l'ingestion (filtrer dans les règles de collecte de données, plan de table Basic ou Auxiliary pour des journaux peu interrogés).</p><p><b>3. Table de débogage volumineuse, consultée seulement en cas d'incident — plan :</b></p><p>Les plans de table <b>Basic</b> et <b>Auxiliary</b> coûtent bien moins cher à l'ingestion que le plan <b>Analytics</b>, en échange de fonctionnalités de requête limitées et d'un coût par requête. Ils conviennent aux journaux volumineux peu interrogés.</p><p><b>4. Éviter qu'une erreur de configuration fasse exploser la facture de WS3 en un jour :</b></p><p>Le <b>plafond quotidien</b> arrête la collecte (pour la plupart des types de données) quand le volume du jour atteint la limite, jusqu'au lendemain. Attention : les données au-delà sont perdues. On l'associe à une alerte pour être prévenu.</p><p><b>5. Une DCR collecte beaucoup d'événements Windows inutiles :</b></p><p>Une <b>règle de collecte de données</b> peut filtrer les événements avec des <b>requêtes XPath</b>, et appliquer une <b>transformation KQL</b> pour supprimer des lignes ou des colonnes avant l'ingestion. On ne paie que ce qui est ingéré.</p>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "WS1",
   "Tables"
  ],
  "title": "SecurityEvent | Gérer la table",
  "rows": [
   [
    "*Rétention interactive",
    "365 jours"
   ],
   [
    "*Rétention totale",
    "7 ans"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Interrogeable puis archive = rétention interactive + totale. Gros volume régulier = niveau d'engagement. Journaux volumineux peu interrogés = plan Basic/Auxiliary. Limiter la facture d'ingestion = plafond quotidien. Réduire l'ingestion = filtre XPath / transformation dans la DCR."
},
{
 "id": "D5-311",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Vous configurez les alertes de l'abonnement Sub1. Vous devez choisir le type d'alerte ou de seuil pour chaque exigence.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Types d'alertes",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "Alerte de métrique",
  "Alerte de journal d'activité",
  "Alerte Service Health",
  "Seuil dynamique",
  "Alerte Resource Health",
  "Alerte de budget"
 ],
 "tgts": [
  {
   "l": "E-mail quand le CPU moyen de VM2 dépasse 85 % pendant 15 minutes",
   "a": 0
  },
  {
   "l": "Être prévenu quand quelqu'un supprime une VM dans Sub1",
   "a": 1
  },
  {
   "l": "Maintenance planifiée ou incident Azure qui touche App Service en France Central",
   "a": 2
  },
  {
   "l": "CPU très variable selon les heures : trop de fausses alertes avec un seuil fixe",
   "a": 3
  },
  {
   "l": "Plus de 20 % des requêtes vers un compte de stockage échouent pour autorisation",
   "a": 0
  }
 ],
 "expl": "<p><b>1. E-mail quand le CPU moyen de VM2 dépasse 85 % pendant 15 minutes</b></p><p>Une <b>alerte de métrique</b> évalue régulièrement une métrique (ici Percentage CPU, moyenne sur 15 minutes) par rapport à un seuil, et déclenche un <b>groupe d'actions</b> (e-mail, SMS…). Elle réagit en quasi temps réel.</p><p><b>2. Être prévenu quand quelqu'un supprime une VM dans Sub1</b></p><p>Une suppression est une opération du plan de contrôle, tracée dans le <b>journal d'activité</b>. Une <b>alerte de journal d'activité</b> filtrée sur l'opération <code>Microsoft.Compute/virtualMachines/delete</code> se déclenche à chaque suppression.</p><p><b>3. Maintenance planifiée ou incident Azure qui touche App Service en France Central</b></p><p><b>Service Health</b> informe des incidents, maintenances planifiées, avis d'intégrité et avis de sécurité qui concernent <b>les services et régions</b> que vous utilisez. Une <b>alerte Service Health</b>, filtrée sur App Service et France Central, envoie la notification.</p><p><b>4. CPU très variable selon les heures : trop de fausses alertes avec un seuil fixe</b></p><p>Les <b>seuils dynamiques</b> apprennent le comportement habituel de la métrique (y compris les cycles horaires et hebdomadaires) et alertent sur les écarts anormaux, avec une sensibilité réglable (élevée, moyenne, faible).</p><p><b>5. Plus de 20 % des requêtes vers un compte de stockage échouent pour autorisation</b></p><p>La métrique <b>Transactions</b> d'un compte de stockage a des <b>dimensions</b> (ResponseType, ApiName, Authentication…). Une alerte de métrique peut filtrer par dimension, par exemple les réponses AuthorizationError.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM2"
  ],
  "title": "Créer une règle d'alerte",
  "rows": [
   [
    "*Signal",
    "Percentage CPU"
   ],
   [
    "Condition",
    "Moyenne > 85 · 15 min"
   ],
   [
    "Actions",
    "Groupe d'actions e-mail"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Seuil sur une valeur = alerte de métrique. Opération de gestion = alerte de journal d'activité. Incidents et maintenance Azure = Service Health. Charge cyclique = seuil dynamique. Filtrer une métrique = dimensions."
},
{
 "id": "D5-312",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous affinez la stratégie d'alerte de l'équipe d'exploitation. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Recherche dans les journaux toutes les 5 minutes, déclenchée dès qu'une ligne est renvoyée :",
   "o": [
    "Seuil dynamique sur le CPU, toutes les 5 minutes",
    "Granularité d'une heure, au moins une ligne",
    "Alerte de journal d'activité toutes les 5 minutes",
    "Nombre de lignes > 0, fréquence 5 minutes"
   ],
   "a": 3
  },
  {
   "l": "Service web public : alerte s'il ne répond plus en HTTP 200 depuis 2 emplacements :",
   "o": [
    "Un paramètre de diagnostic de l'application vers Log Analytics",
    "Une alerte Resource Health sur l'application",
    "Un test de disponibilité standard, avec alerte",
    "Une alerte de journal d'activité sur l'application"
   ],
   "a": 2
  },
  {
   "l": "E-mail en cas d'échec d'un travail de sauvegarde, dans tous les coffres :",
   "o": [
    "Une alerte de budget sur chaque coffre",
    "Alertes intégrées, règle de traitement et groupe d'actions",
    "Une alerte de métrique sur le CPU des VM",
    "Les seules notifications par e-mail classiques de chaque coffre"
   ],
   "a": 1
  },
  {
   "l": "Les mêmes problèmes génèrent des dizaines de notifications par heure — en premier :",
   "o": [
    "Désactiver Azure Monitor sur les ressources les plus bruyantes",
    "Supprimer tous les groupes d'actions existants",
    "Ajuster les seuils, alertes avec état ou dynamiques",
    "Augmenter la rétention des journaux d'alertes"
   ],
   "a": 2
  },
  {
   "l": "Alertes de VM courantes (CPU, mémoire, disque) sans les écrire une par une :",
   "o": [
    "Une règle de traitement des alertes",
    "Un classeur de VM Insights",
    "Les règles d'alerte recommandées",
    "Le journal d'activité de la VM"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Recherche dans les journaux toutes les 5 minutes, déclenchée dès qu'une ligne est renvoyée :</b></p><p>Une <b>alerte de recherche dans les journaux</b> exécute une requête KQL selon une fréquence, sur une période. La condition porte sur le <b>nombre de lignes</b> ou une mesure calculée (par exemple une moyenne), comparée à un seuil.</p><p><b>2. Service web public : alerte s'il ne répond plus en HTTP 200 depuis 2 emplacements :</b></p><p>Les <b>tests de disponibilité</b> d'Application Insights (test standard ou ping d'URL) interrogent l'URL depuis plusieurs emplacements Azure. L'alerte se déclenche quand un nombre minimal d'emplacements échoue.</p><p><b>3. E-mail en cas d'échec d'un travail de sauvegarde, dans tous les coffres :</b></p><p>Azure Backup génère des <b>alertes intégrées dans Azure Monitor</b> (échecs de sauvegarde, de restauration, suppression de données…). On les achemine avec une <b>règle de traitement des alertes</b> vers un <b>groupe d'actions</b>. C'est l'approche recommandée, qui remplace les alertes classiques du coffre.</p><p><b>4. Les mêmes problèmes génèrent des dizaines de notifications par heure — en premier :</b></p><p>Les alertes <b>avec état</b> ne renvoient pas de notification tant que l'alerte n'est pas résolue. Des <b>seuils dynamiques</b> ou mieux calibrés réduisent les faux positifs. Une règle de traitement peut aussi supprimer les notifications pendant les maintenances.</p><p><b>5. Alertes de VM courantes (CPU, mémoire, disque) sans les écrire une par une :</b></p><p>Azure propose des <b>règles d'alerte recommandées</b> pour les VM (et d'autres ressources) : on les active en quelques clics depuis la page Alertes de la ressource, avec des seuils par défaut modifiables. Azure Monitor Baseline Alerts (AMBA) permet de le faire à grande échelle avec Azure Policy.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Alertes"
  ],
  "title": "Alerte de recherche dans les journaux",
  "rows": [
   [
    "*Mesure",
    "Nombre de lignes > 0"
   ],
   [
    "Fréquence",
    "5 minutes"
   ]
  ]
 },
 "keep": "Alerte de journal = requête + fréquence + seuil. URL publique surveillée = test de disponibilité. Alertes de sauvegarde = Azure Monitor + règle de traitement. Trop de notifications = avec état + seuils ajustés. Alertes standard en un clic = règles d'alerte recommandées."
},
{
 "id": "D5-313",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous gérez la façon dont les alertes de RG-Prod notifient les équipes. Que devez-vous faire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Trois alertes : e-mail à l'astreinte, SMS au responsable, webhook de tickets, avec le moins d'effort :",
   "o": [
    "Un seul groupe d'actions, associé aux trois alertes",
    "Trois espaces de travail, un par destinataire",
    "Un classeur qui regroupe les trois alertes",
    "Des notifications réglées séparément dans chaque alerte"
   ],
   "a": 0
  },
  {
   "l": "Redémarrer automatiquement un service sur la VM quand l'alerte se déclenche :",
   "o": [
    "Un SMS au propriétaire de la VM",
    "Un runbook Azure Automation",
    "Une notification push à l'application",
    "Une notification e-mail à l'astreinte"
   ],
   "a": 1
  },
  {
   "l": "Appeler l'équipe sur son téléphone pour une alerte critique :",
   "o": [
    "Dans un groupe d'actions (notification Voix)",
    "Dans Service Health, avec un contact téléphonique",
    "Dans la règle de collecte de données",
    "Dans le paramètre de diagnostic de la VM"
   ],
   "a": 0
  },
  {
   "l": "Aucune notification le samedi de 22 h à 2 h, alertes visibles dans le portail :",
   "o": [
    "Un verrou Lecture seule sur RG-Prod le week-end",
    "Une règle de traitement qui supprime les notifications",
    "Désactiver chaque règle d'alerte le samedi matin",
    "Supprimer le groupe d'actions vendredi, puis le recréer lundi"
   ],
   "a": 1
  },
  {
   "l": "Suspendre une règle de métrique pendant une migration, sans la supprimer :",
   "o": [
    "Désactiver la règle, puis la réactiver",
    "Supprimer la ressource surveillée",
    "Supprimer le groupe d'actions de la règle",
    "Augmenter le seuil de la règle à 1 000"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Trois alertes : e-mail à l'astreinte, SMS au responsable, webhook de tickets, avec le moins d'effort :</b></p><p>Un <b>groupe d'actions</b> regroupe des notifications (e-mail, SMS, notification push, appel vocal) et des actions (webhook, runbook Automation, fonction, application logique, ITSM, Event Hubs). Il est réutilisable par autant d'alertes que nécessaire.</p><p><b>2. Redémarrer automatiquement un service sur la VM quand l'alerte se déclenche :</b></p><p>Un groupe d'actions peut déclencher un <b>runbook Automation</b>, une <b>fonction Azure</b>, une <b>application logique</b> ou un <b>webhook</b> : c'est la base de la remédiation automatique.</p><p><b>3. Appeler l'équipe sur son téléphone pour une alerte critique :</b></p><p>Les <b>groupes d'actions</b> proposent les notifications <b>e-mail</b>, <b>SMS</b>, <b>notification push</b> (application mobile Azure) et <b>appel vocal</b>, avec des limites de fréquence par numéro.</p><p><b>4. Aucune notification le samedi de 22 h à 2 h, alertes visibles dans le portail :</b></p><p>Une <b>règle de traitement des alertes</b> (alert processing rule) peut, sur une étendue et une planification, <b>supprimer les notifications</b> (les alertes continuent d'être créées) ou <b>ajouter des groupes d'actions</b> à des alertes.</p><p><b>5. Suspendre une règle de métrique pendant une migration, sans la supprimer :</b></p><p>Une règle d'alerte peut être <b>désactivée</b> puis <b>réactivée</b>. Pour plusieurs règles ou une fenêtre planifiée, une <b>règle de traitement des alertes</b> est plus pratique.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Groupes d'actions"
  ],
  "title": "Créer un groupe d'actions",
  "rows": [
   [
    "*Notifications",
    "E-mail + SMS"
   ],
   [
    "Actions",
    "Webhook"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Notifications réutilisables = groupe d'actions. Remédiation automatique = runbook / fonction / Logic App. Appel vocal = notification Voix du groupe d'actions. Silence planifié = règle de traitement des alertes. Pause d'une alerte = désactiver la règle."
},
{
 "id": "D5-314",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Plusieurs journaux et métriques de plateforme ne sont pas encore collectés dans Log Analytics. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Journal d'activité de Sub1 conservé 2 ans et interrogeable en KQL :",
   "o": [
    "Un paramètre de diagnostic vers Log Analytics (rétention 2 ans)",
    "Azure Advisor, avec l'historique des recommandations",
    "Une alerte de journal d'activité sur toutes les opérations d'écriture",
    "Rien : le journal d'activité est conservé 2 ans par défaut"
   ],
   "a": 0
  },
  {
   "l": "Journaux de ressources d'un coffre de clés vers Log Analytics :",
   "o": [
    "Un classeur lié au coffre de clés",
    "Un paramètre de diagnostic sur le coffre",
    "Une alerte de métrique sur le coffre",
    "Une règle de collecte de données pour les VM du coffre"
   ],
   "a": 1
  },
  {
   "l": "Métriques de plateforme croisées avec des journaux dans une requête KQL :",
   "o": [
    "Le plafond quotidien de l'espace de travail",
    "Un paramètre de diagnostic (AllMetrics)",
    "Une règle de traitement des alertes",
    "Une alerte de métrique avec un export vers l'espace"
   ],
   "a": 1
  },
  {
   "l": "Tables propres à chaque type de ressource, plus faciles à interroger — mode :",
   "o": [
    "Le mode Diagnostics Azure (AzureDiagnostics)",
    "Le mode Archive vers un compte de stockage",
    "Le mode Event Hubs avec un consommateur",
    "Le mode Spécifique à la ressource"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Journal d'activité de Sub1 conservé 2 ans et interrogeable en KQL :</b></p><p>Le journal d'activité n'est conservé que <b>90 jours</b>. Pour aller plus loin, on crée un <b>paramètre de diagnostic</b> au niveau de l'abonnement qui l'envoie vers un espace de travail <b>Log Analytics</b> (table AzureActivity, interrogeable en KQL), un compte de stockage (archivage) ou Event Hubs.</p><p><b>2. Journaux de ressources d'un coffre de clés vers Log Analytics :</b></p><p>Les <b>journaux de ressources</b> ne sont pas collectés par défaut. On crée un <b>paramètre de diagnostic</b> sur la ressource, on choisit les catégories (par exemple AuditEvent) et les destinations : Log Analytics, compte de stockage, Event Hubs ou solution partenaire.</p><p>Une ressource peut avoir jusqu'à 5 paramètres de diagnostic.</p><p><b>3. Métriques de plateforme croisées avec des journaux dans une requête KQL :</b></p><p>Un <b>paramètre de diagnostic</b> peut envoyer les <b>métriques</b> (AllMetrics) en plus des journaux. Elles arrivent dans la table <b>AzureMetrics</b> de Log Analytics, interrogeable avec KQL.</p><p><b>4. Tables propres à chaque type de ressource, plus faciles à interroger — mode :</b></p><p>Le mode <b>spécifique à la ressource</b> écrit dans des tables dédiées par catégorie, avec un schéma clair. Le mode <b>Diagnostics Azure</b> mélange beaucoup de services dans une seule table, ce qui est moins performant et plus difficile à interroger. Microsoft recommande le mode spécifique à la ressource quand il est disponible.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Journal d'activité"
  ],
  "title": "Exporter le journal d'activité",
  "rows": [
   [
    "*Paramètre de diagnostic",
    "Sub1 → LAW-Audit"
   ],
   [
    "Rétention de la table",
    "2 ans"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Journal d'activité > 90 jours = paramètre de diagnostic vers Log Analytics. Journaux de ressources = paramètre de diagnostic sur la ressource. Métriques dans KQL = diagnostic AllMetrics → AzureMetrics. Tables claires = mode spécifique à la ressource."
},
{
 "id": "D5-315",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous déployez la collecte des données invitées de 50 VM Windows. Que devez-vous faire pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Compteurs de performances et journal Système vers WS1 — à déployer :",
   "o": [
    "L'agent Log Analytics (MMA) avec une configuration d'espace de travail",
    "Un paramètre de diagnostic sur chaque VM, vers WS1",
    "L'agent Azure Monitor et une DCR associée aux 50 VM",
    "Les diagnostics de démarrage vers un compte de stockage"
   ],
   "a": 2
  },
  {
   "l": "Mémoire disponible visible dans Metrics Explorer :",
   "o": [
    "Rien : la mémoire disponible est une métrique de plateforme",
    "Créer une alerte de journal d'activité sur la mémoire de la VM",
    "Activer les diagnostics de démarrage de la VM",
    "Collecter les compteurs invités (agent et DCR vers Metrics)"
   ],
   "a": 3
  },
  {
   "l": "Métriques nécessaires sur 6 mois, la base de métriques n'en garde que 93 jours :",
   "o": [
    "Rien : les métriques sont gardées 2 ans",
    "Les envoyer vers Log Analytics (rétention adaptée)",
    "Activer les diagnostics de démarrage de la VM",
    "Créer une alerte de métrique qui les archive"
   ],
   "a": 1
  },
  {
   "l": "VM d'un réseau isolé, envoi des données par des adresses privées :",
   "o": [
    "Une passerelle NAT avec une IP fixe autorisée",
    "Un Azure Monitor Private Link Scope (AMPLS)",
    "Un point de terminaison de service Microsoft.Storage",
    "Un équilibreur de charge public avec une règle sortante"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Compteurs de performances et journal Système vers WS1 — à déployer :</b></p><p>L'<b>agent Azure Monitor</b> (AMA) collecte les données invitées selon des <b>règles de collecte de données</b> (DCR) : quelles données (compteurs, événements, Syslog, fichiers journaux), et vers quelle destination. Une même DCR peut être associée à de nombreuses VM.</p><p>L'agent Log Analytics (MMA) a été retiré en août 2024. Le paramètre de diagnostic d'une VM ne collecte que des métriques de l'hôte, pas les données du système d'exploitation.</p><p><b>2. Mémoire disponible visible dans Metrics Explorer :</b></p><p>Les compteurs invités (mémoire, espace disque par volume…) sont collectés par l'<b>agent Azure Monitor</b>. Une DCR peut les envoyer vers <b>Azure Monitor Metrics</b> (espace de noms de métriques invitées) ou vers Log Analytics. La plateforme fournit aujourd'hui une métrique « Available Memory Bytes » pour de nombreuses VM, mais le détail invité passe par l'agent.</p><p><b>3. Métriques nécessaires sur 6 mois, la base de métriques n'en garde que 93 jours :</b></p><p>Pour garder les métriques plus de <b>93 jours</b>, on les envoie vers <b>Log Analytics</b> (table AzureMetrics ou InsightsMetrics/Perf), où la rétention est réglable, ou vers un compte de stockage.</p><p><b>4. VM d'un réseau isolé, envoi des données par des adresses privées :</b></p><p>Un <b>Azure Monitor Private Link Scope</b> regroupe des ressources Azure Monitor (espaces de travail, points de terminaison de collecte de données, Application Insights) et les expose par un <b>point de terminaison privé</b> dans votre réseau virtuel. L'agent envoie alors ses données sans passer par Internet.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Règles de collecte de données"
  ],
  "title": "Créer une règle de collecte de données",
  "rows": [
   [
    "*Ressources",
    "50 VM (agent Azure Monitor)"
   ],
   [
    "Sources",
    "Compteurs + journal Système"
   ],
   [
    "Destination",
    "WS1"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Données invitées = AMA + DCR (MMA retiré). Compteurs invités dans Metrics Explorer = AMA + DCR vers Azure Monitor Metrics. Métriques > 93 jours = Log Analytics ou stockage. Supervision sans Internet = AMPLS + point de terminaison privé."
},
{
 "id": "D5-316",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous attribuez les accès et automatisez la protection. Que devez-vous choisir pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Identité managée du coffre de sauvegarde pour sauvegarder des disques managés — rôles :",
   "o": [
    "Lecteur de sauvegarde de disque et Contributeur d'instantané de disque",
    "Contributeur de machines virtuelles sur la VM et Lecteur sur le disque",
    "Lecteur sur le coffre et Contributeur sur le groupe de ressources",
    "Propriétaire de l'abonnement, sur toute la durée de la sauvegarde"
   ],
   "a": 0
  },
  {
   "l": "Lire toutes les données d'un espace et exécuter des requêtes, sans le configurer :",
   "o": [
    "Propriétaire",
    "Contributeur de surveillance",
    "Lecteur Log Analytics",
    "Contributeur Log Analytics"
   ],
   "a": 2
  },
  {
   "l": "Dans WS2, chacun ne voit que les journaux des ressources sur lesquelles il a des droits :",
   "o": [
    "Une clé partagée de l'espace de travail",
    "Un espace de travail distinct pour chaque utilisateur",
    "Exiger les autorisations d'espace de travail",
    "Autorisations de ressource ou d'espace de travail"
   ],
   "a": 3
  },
  {
   "l": "Sauvegarde activée dès la création de toute VM étiquetée Backup=Oui :",
   "o": [
    "Une règle de traitement des alertes sur l'étiquette",
    "Un script exécuté à la main chaque semaine",
    "Une alerte de journal d'activité à la création de VM",
    "Une stratégie DeployIfNotExists intégrée"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Identité managée du coffre de sauvegarde pour sauvegarder des disques managés — rôles :</b></p><p>La sauvegarde de disques crée des <b>instantanés incrémentiels</b> dans un groupe de ressources choisi. L'identité managée du coffre a besoin de <b>Lecteur de sauvegarde de disque</b> sur chaque disque et de <b>Contributeur d'instantané de disque</b> sur le groupe de ressources des instantanés. Le portail propose de les attribuer.</p><p><b>2. Lire toutes les données d'un espace et exécuter des requêtes, sans le configurer :</b></p><p><b>Lecteur Log Analytics</b> permet de voir et d'interroger toutes les données de supervision et les paramètres. <b>Contributeur Log Analytics</b> permet aussi de modifier la configuration (agents, solutions, paramètres).</p><p><b>3. Dans WS2, chacun ne voit que les journaux des ressources sur lesquelles il a des droits :</b></p><p>Avec le mode <b>« Utiliser les autorisations de ressource ou d'espace de travail »</b>, un utilisateur qui ouvre les journaux depuis une ressource (contexte de ressource) voit les données des ressources sur lesquelles il a un accès en lecture, sans droit sur tout l'espace de travail. On peut aussi définir des RBAC au niveau des tables.</p><p><b>4. Sauvegarde activée dès la création de toute VM étiquetée Backup=Oui :</b></p><p>Azure propose des stratégies intégrées <b>DeployIfNotExists</b> qui configurent la sauvegarde des VM (avec ou sans filtre d'étiquette) vers un coffre et une stratégie donnés. Les VM existantes sont corrigées avec une tâche de correction.</p>",
 "portal": {
  "path": [
   "Coffres de sauvegarde",
   "bv1"
  ],
  "title": "Configurer la sauvegarde › Disques",
  "rows": [
   [
    "*Disque",
    "Lecteur de sauvegarde de disque"
   ],
   [
    "*RG des instantanés",
    "Contributeur d'instantané de disque"
   ]
  ],
  "btn": "Attribuer les rôles manquants"
 },
 "keep": "Sauvegarde de disques = rôles de l'identité du coffre sur disque + RG d'instantanés. Lire et interroger = Lecteur Log Analytics. Voir seulement ses ressources = contexte de ressource. Sauvegarde automatique à la création = Azure Policy DeployIfNotExists."
},
{
 "id": "D5-317",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Votre entreprise conserve des serveurs locaux et des charges dans d'autres clouds. Vous devez choisir le composant à déployer ou à fournir pour chaque exigence.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Composants",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "Agent MARS",
  "Informations d'identification du coffre",
  "Appliance de réplication Site Recovery",
  "Azure Backup Server (MABS)",
  "Agent Connected Machine (Arc)",
  "Azure File Sync"
 ],
 "tgts": [
  {
   "l": "Sauvegarder chaque jour des dossiers d'un serveur de fichiers local, sans serveur intermédiaire",
   "a": 0
  },
  {
   "l": "Fichier demandé par l'assistant d'inscription de l'agent de sauvegarde",
   "a": 1
  },
  {
   "l": "Basculer des serveurs VMware locaux vers Azure",
   "a": 2
  },
  {
   "l": "Sauvegarder Hyper-V, SQL Server et Exchange localement, puis copier vers Azure",
   "a": 3
  },
  {
   "l": "Gérer les serveurs avec Azure Monitor, Azure Policy et Update Manager comme des ressources Azure",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Sauvegarder chaque jour des dossiers d'un serveur de fichiers local, sans serveur intermédiaire</b></p><p>L'<b>agent MARS</b> sauvegarde des fichiers, des dossiers et l'état du système d'un serveur Windows (local ou VM) directement vers un coffre Recovery Services, jusqu'à 3 fois par jour.</p><p>Pour des charges applicatives complètes (SQL, Hyper-V…), on utilise <b>Microsoft Azure Backup Server</b> (MABS) ou DPM.</p><p><b>2. Fichier demandé par l'assistant d'inscription de l'agent de sauvegarde</b></p><p>On télécharge les <b>informations d'identification du coffre</b> (vault credentials) depuis le coffre Recovery Services. Elles ne sont valables que pour une durée limitée : il faut les télécharger juste avant l'inscription. L'agent demande aussi une <b>phrase secrète</b> de chiffrement, à conserver précieusement : sans elle, la restauration est impossible.</p><p><b>3. Basculer des serveurs VMware locaux vers Azure</b></p><p>Pour VMware et les serveurs physiques, Site Recovery utilise une <b>appliance de réplication</b> locale et le <b>service Mobility</b> installé sur chaque machine protégée. Pour Hyper-V, on installe le fournisseur Site Recovery et l'agent Recovery Services sur les hôtes.</p><p><b>4. Sauvegarder Hyper-V, SQL Server et Exchange localement, puis copier vers Azure</b></p><p><b>MABS</b> (ou System Center DPM) sauvegarde des charges applicatives locales sur disque, puis envoie des copies vers un coffre Recovery Services. L'agent MARS seul ne sauvegarde que des fichiers, des dossiers et l'état du système.</p><p><b>5. Gérer les serveurs avec Azure Monitor, Azure Policy et Update Manager comme des ressources Azure</b></p><p>Avec <b>Azure Arc</b>, l'agent <b>Connected Machine</b> projette le serveur comme une ressource Azure : on peut ensuite y déployer l'agent Azure Monitor, appliquer Azure Policy (configuration de machine) et gérer les mises à jour avec Update Manager.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1"
  ],
  "title": "Objectif de sauvegarde",
  "rows": [
   [
    "Où",
    "Local"
   ],
   [
    "*Quoi",
    "Fichiers et dossiers → agent MARS"
   ]
  ]
 },
 "keep": "Fichiers d'un serveur local, sans serveur intermédiaire = MARS. Inscription MARS = informations d'identification du coffre + phrase secrète. VMware/physique → Azure = appliance de réplication + Mobility. Charges applicatives locales = MABS/DPM. Serveurs hors Azure gérés comme Azure = Azure Arc."
},
{
 "id": "D5-318",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Plusieurs équipes veulent des vues de supervision adaptées à leur métier. Vous devez choisir la solution qui répond à chaque exigence.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Exigence",
  "Solution"
 ],
 "srcs": [
  "VM Insights (Carte)",
  "Application Insights",
  "Network Insights",
  "Classeur Azure Monitor",
  "Tableau de bord Azure partagé",
  "Microsoft Sentinel",
  "Network Watcher"
 ],
 "tgts": [
  {
   "l": "Voir quels serveurs parlent à quels serveurs, sur quels ports, avec des graphiques préconfigurés",
   "a": 0
  },
  {
   "l": "Temps de réponse, exceptions et dépendances d'une application web, testée depuis plusieurs régions",
   "a": 1
  },
  {
   "l": "Topologie et santé des passerelles, équilibreurs et connexions dans une vue unique",
   "a": 2
  },
  {
   "l": "Rapport interactif : requêtes KQL, métriques, paramètres et texte, partagé",
   "a": 3
  },
  {
   "l": "Quelques graphiques et une requête épinglés depuis le portail, affichés en permanence",
   "a": 4
  },
  {
   "l": "SIEM Microsoft qui reçoit les journaux de tous les abonnements, avec détection des menaces",
   "a": 5
  }
 ],
 "expl": "<p><b>1. Voir quels serveurs parlent à quels serveurs, sur quels ports, avec des graphiques préconfigurés</b></p><p><b>VM Insights</b> fournit des tableaux de bord de performances (CPU, mémoire, disque, réseau) et, avec l'<b>agent de dépendances</b>, la <b>Carte</b> des processus et des connexions entre machines.</p><p><b>2. Temps de réponse, exceptions et dépendances d'une application web, testée depuis plusieurs régions</b></p><p><b>Application Insights</b> (fonction d'Azure Monitor, basée sur un espace de travail Log Analytics) collecte la télémétrie applicative : requêtes, temps de réponse, exceptions, dépendances. Les <b>tests de disponibilité</b> interrogent l'URL depuis plusieurs emplacements et alertent en cas d'échec.</p><p><b>3. Topologie et santé des passerelles, équilibreurs et connexions dans une vue unique</b></p><p><b>Network Insights</b> (Azure Monitor > Réseaux) présente l'intégrité et les métriques de toutes les ressources réseau, avec la topologie et l'accès aux outils de Network Watcher.</p><p><b>4. Rapport interactif : requêtes KQL, métriques, paramètres et texte, partagé</b></p><p>Les <b>classeurs</b> (Workbooks) combinent texte, requêtes de journaux, métriques et paramètres dans des rapports interactifs, partageables. Les <b>tableaux de bord</b> Azure épinglent des vues, avec moins d'interactivité.</p><p><b>5. Quelques graphiques et une requête épinglés depuis le portail, affichés en permanence</b></p><p>Les <b>tableaux de bord Azure</b> permettent d'épingler des graphiques de métriques, des résultats de requêtes et d'autres vignettes, puis de les partager (ce sont des ressources Azure, avec un contrôle d'accès). Les classeurs sont plus riches pour des rapports interactifs.</p><p><b>6. SIEM Microsoft qui reçoit les journaux de tous les abonnements, avec détection des menaces</b></p><p><b>Microsoft Sentinel</b> est le SIEM/SOAR de Microsoft. Il s'active sur un espace de travail Log Analytics et utilise des connecteurs pour ingérer les journaux, puis des règles d'analyse pour détecter les menaces. Ce n'est pas au cœur de l'AZ-104, mais il faut savoir le situer.</p>",
 "portal": {
  "path": [
   "Moniteur",
   "Insights des machines virtuelles"
  ],
  "title": "Insights des machines virtuelles",
  "menu": [
   "Performances",
   "*Carte"
  ],
  "rows": [
   [
    "*Carte",
    "Processus et connexions"
   ]
  ]
 },
 "keep": "Dépendances entre VM = VM Insights, Carte. Télémétrie applicative + test d'URL = Application Insights. Vue santé du réseau = Network Insights. Rapport interactif partagé = classeur. Graphiques épinglés partagés = tableau de bord Azure. SIEM sur Log Analytics = Microsoft Sentinel."
},
{
 "id": "D5-319",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous pilotez la gouvernance de la supervision et de la sauvegarde de toute l'organisation. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un score global d'application des bonnes pratiques Azure :",
   "o": [
    "Le score Azure Advisor",
    "Resource Health",
    "Le journal d'activité",
    "Le score de conformité Azure Policy"
   ],
   "a": 0
  },
  {
   "l": "Alertes créées automatiquement selon les bonnes pratiques, avec Azure Policy :",
   "o": [
    "Microsoft Sentinel",
    "Azure Monitor Baseline Alerts",
    "Le plafond quotidien de chaque espace",
    "Le score Azure Advisor par abonnement"
   ],
   "a": 1
  },
  {
   "l": "Être prévenu dès qu'une recommandation de coût élevé apparaît :",
   "o": [
    "Une stratégie de sauvegarde avec rapport",
    "Une alerte Advisor avec un groupe d'actions",
    "Une alerte de métrique sur le coût",
    "Une règle de collecte de données Advisor"
   ],
   "a": 1
  },
  {
   "l": "État des sauvegardes de 15 coffres de plusieurs abonnements, en un seul endroit :",
   "o": [
    "Le journal d'activité de chaque abonnement",
    "Azure Advisor, onglet Fiabilité uniquement",
    "Le centre de continuité d'activité Azure",
    "Chaque coffre séparément, un par un"
   ],
   "a": 2
  },
  {
   "l": "Rapports sur 6 mois : stockage de sauvegarde, travaux, éléments protégés :",
   "o": [
    "Une alerte de métrique sur chaque coffre, avec historique",
    "Une règle de cycle de vie sur le stockage",
    "Le flux de modification des coffres, exporté chaque mois",
    "Les rapports de sauvegarde (diagnostic vers Log Analytics)"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Un score global d'application des bonnes pratiques Azure :</b></p><p>Le <b>score Advisor</b> indique, en pourcentage, dans quelle mesure vos ressources suivent les recommandations d'Advisor, par catégorie et globalement, avec son évolution dans le temps.</p><p><b>2. Alertes créées automatiquement selon les bonnes pratiques, avec Azure Policy :</b></p><p><b>Azure Monitor Baseline Alerts</b> fournit des définitions et initiatives Azure Policy qui déploient automatiquement des alertes recommandées (métriques, journaux d'activité, Service Health) et des groupes d'actions, à l'échelle d'une organisation.</p><p><b>3. Être prévenu dès qu'une recommandation de coût élevé apparaît :</b></p><p>Les <b>alertes Advisor</b> se déclenchent quand une nouvelle recommandation est créée, filtrée par catégorie et impact. Elles reposent sur la catégorie <b>Recommandation</b> du journal d'activité et utilisent des groupes d'actions.</p><p><b>4. État des sauvegardes de 15 coffres de plusieurs abonnements, en un seul endroit :</b></p><p>Le <b>Centre de continuité d'activité</b> (Business Continuity Center), qui remplace le Centre de sauvegarde, offre une vue unifiée de la protection (Backup et Site Recovery) sur plusieurs coffres, abonnements et régions : éléments protégés, travaux, alertes, stratégies.</p><p><b>5. Rapports sur 6 mois : stockage de sauvegarde, travaux, éléments protégés :</b></p><p>Les <b>rapports de sauvegarde</b> (basés sur des classeurs) s'appuient sur les données envoyées par les <b>paramètres de diagnostic</b> des coffres vers <b>Log Analytics</b>. Ils couvrent la consommation, les travaux, les stratégies et l'optimisation.</p>",
 "portal": {
  "path": [
   "Advisor"
  ],
  "title": "Advisor | Score",
  "menu": [
   "*Score Advisor"
  ],
  "rows": [
   [
    "*Score global",
    "78 %"
   ]
  ]
 },
 "keep": "Score des bonnes pratiques = score Advisor. Alertes recommandées à l'échelle = AMBA. Nouvelle recommandation = alerte Advisor. Vue multicoffres = Centre de continuité d'activité. Rapports de sauvegarde = diagnostics des coffres vers Log Analytics."
},
{
 "id": "D5-320",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous protégez des charges applicatives hébergées dans des VM. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM Windows avec SQL Server, sauvegarde cohérente avec les applications — mécanisme :",
   "o": [
    "Un script pre-post obligatoire dans la VM",
    "Le disque temporaire de la VM",
    "Le service VSS (clichés instantanés)",
    "Les diagnostics de démarrage"
   ],
   "a": 2
  },
  {
   "l": "VM16 : sauvegarde SQL complète quotidienne et journaux toutes les 15 minutes :",
   "o": [
    "L'agent MARS installé dans la VM SQL",
    "La sauvegarde « SQL Server dans une VM Azure »",
    "La sauvegarde de la VM entière, toutes les 15 min",
    "Azure Site Recovery avec réplication continue"
   ],
   "a": 1
  },
  {
   "l": "VM Linux avec MySQL, sauvegarde cohérente avec l'application :",
   "o": [
    "Des scripts pre et post qui figent la base",
    "Une alerte de métrique sur le processus MySQL",
    "Le service VSS, installé dans la VM Linux",
    "La console série pendant la sauvegarde"
   ],
   "a": 0
  },
  {
   "l": "Sauvegarde toutes les 4 heures, points conservés 7 jours — stratégie :",
   "o": [
    "Une stratégie améliorée (Enhanced), horaire",
    "Une stratégie standard quotidienne, deux fois",
    "Une stratégie de cycle de vie sur le coffre",
    "Une règle de traitement des alertes horaire"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. VM Windows avec SQL Server, sauvegarde cohérente avec les applications — mécanisme :</b></p><p>Sur Windows, Azure Backup coordonne avec le <b>VSS</b> pour obtenir une sauvegarde <b>cohérente avec les applications</b> (les applications vident leurs écritures). Sur Linux, on utilise des scripts pre et post pour obtenir la même cohérence ; sinon la sauvegarde est cohérente avec le système de fichiers.</p><p>Pour SQL Server, la sauvegarde dédiée « SQL Server dans une VM Azure » permet en plus les sauvegardes de journaux.</p><p><b>2. VM16 : sauvegarde SQL complète quotidienne et journaux toutes les 15 minutes :</b></p><p>La sauvegarde <b>SQL Server dans une VM Azure</b> utilise l'extension de charge de travail SQL : elle découvre les bases, et permet des sauvegardes complètes, différentielles et de <b>journaux</b> (jusqu'à toutes les 15 minutes), avec restauration à un point dans le temps.</p><p>La sauvegarde de la VM seule ne capture pas les journaux de transactions toutes les 15 minutes.</p><p><b>3. VM Linux avec MySQL, sauvegarde cohérente avec l'application :</b></p><p>Linux n'a pas de VSS. Azure Backup fournit un <b>framework de scripts pre/post</b> : le script pre fige l'application (vidage et verrouillage), l'instantané est pris, puis le script post libère l'application. Sans scripts, la sauvegarde est cohérente avec le <b>système de fichiers</b>.</p><p><b>4. Sauvegarde toutes les 4 heures, points conservés 7 jours — stratégie :</b></p><p>La <b>stratégie améliorée</b> permet plusieurs sauvegardes par jour (toutes les 4, 6, 8 ou 12 heures), une rétention plus longue des instantanés, et prend en charge les VM avec Lancement fiable. La stratégie <b>standard</b> ne fait qu'une sauvegarde par jour.</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "Vault1",
   "Travaux"
  ],
  "title": "Sauvegarde VM-SQL",
  "rows": [
   [
    "*Cohérence",
    "Application (VSS)"
   ]
  ]
 },
 "keep": "Cohérence applicative sous Windows = VSS. SQL avec journaux = sauvegarde SQL Server dans une VM Azure. Cohérence applicative Linux = scripts pre/post. Plusieurs sauvegardes par jour = stratégie améliorée."
},
{
 "id": "D5-321",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous gérez le cycle de vie des sauvegardes de plusieurs VM. Que devez-vous faire ou choisir pour chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "VM5 décommissionnée : arrêter la sauvegarde, garder les points selon leur rétention :",
   "o": [
    "Arrêter la sauvegarde en conservant les données de sauvegarde",
    "Arrêter la sauvegarde en supprimant les données de sauvegarde",
    "Supprimer le coffre",
    "Suspendre la stratégie pour toutes les VM"
   ],
   "a": 0
  },
  {
   "l": "Sauvegarde à la demande de VM8 avant une mise à jour — expiration du point :",
   "o": [
    "Aucune : il est conservé indéfiniment",
    "Toujours 30 jours, quelle que soit la stratégie appliquée",
    "Une date choisie au lancement de la sauvegarde",
    "Toujours celle de la stratégie quotidienne"
   ],
   "a": 2
  },
  {
   "l": "VM1 (France Central) : Vault1 (Europe Nord) n'apparaît pas dans la liste :",
   "o": [
    "Passer Vault1 en stockage localement redondant (LRS)",
    "Installer l'agent Azure Monitor sur VM1",
    "Activer la restauration interrégion sur Vault1",
    "Créer un coffre en France Central"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. VM5 décommissionnée : arrêter la sauvegarde, garder les points selon leur rétention :</b></p><p><b>Arrêter la sauvegarde et conserver les données</b> : plus aucune nouvelle sauvegarde, mais les points existants restent restaurables (selon la stratégie, ou indéfiniment selon l'option choisie). Le stockage reste facturé.</p><p><b>2. Sauvegarde à la demande de VM8 avant une mise à jour — expiration du point :</b></p><p>Une <b>sauvegarde à la demande</b> (Sauvegarder maintenant) permet de choisir une <b>date de conservation</b> propre à ce point de récupération, indépendamment de la stratégie.</p><p><b>3. VM1 (France Central) : Vault1 (Europe Nord) n'apparaît pas dans la liste :</b></p><p>Pour <b>Azure Backup</b>, le coffre Recovery Services doit être dans la <b>même région</b> que la VM à protéger : Vault1 (Europe Nord) n'est donc pas proposé pour VM1 (France Central). Il faut créer un coffre en France Central.</p><p>La redondance du coffre (LRS, GRS) et la restauration interrégion ne changent pas cette règle. Pour <b>Site Recovery</b>, c'est l'inverse : le coffre est dans la région <b>cible</b>.</p>",
 "portal": {
  "path": [
   "Éléments de sauvegarde",
   "VM5"
  ],
  "title": "Arrêter la sauvegarde",
  "rows": [
   [
    "*Option",
    "Conserver les données de sauvegarde"
   ]
  ],
  "btn": "Arrêter la sauvegarde"
 },
 "keep": "Plus de sauvegardes mais garder les points = arrêter en conservant. Sauvegarde à la demande = date de conservation au choix. Backup : coffre dans la région de la VM ; Site Recovery : coffre dans la région cible."
}
);
