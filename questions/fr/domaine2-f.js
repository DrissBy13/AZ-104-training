/* Domaine 2 : stockage (lot F : D2-301 à D2-324, questions à réponses multiples issues de la fusion des QCM) */
AZ.questions.push(
{
 "id": "D2-301",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous optimisez le coût des blobs de plusieurs comptes de stockage universels v2. Que devez-vous répondre ou choisir pour chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Blob placé au niveau Froid, supprimé 10 jours plus tard — jours de suppression anticipée facturés :",
   "o": [
    "0 jour",
    "10 jours",
    "20 jours",
    "30 jours"
   ],
   "a": 2
  },
  {
   "l": "Archives légales de 10 ans jamais lues, relecture en plusieurs heures acceptable — niveau :",
   "o": [
    "Froid (Cool)",
    "Archive",
    "Chaud (Hot)",
    "Très froid (Cold)"
   ],
   "a": 1
  },
  {
   "l": "20 To de vidéos lues le premier mois, puis presque jamais, lisibles immédiatement 3 ans :",
   "o": [
    "Chaud, puis Froid à 30 j, Très froid à 90 j, suppression à 3 ans",
    "Un compte Premium objets blob de blocs pendant 3 ans",
    "Le niveau Archive dès le chargement, puis suppression à 3 ans",
    "Le niveau Chaud pendant 3 ans, puis suppression"
   ],
   "a": 0
  },
  {
   "l": "Le niveau par défaut de storage30 passe de Chaud à Froid — blobs concernés :",
   "o": [
    "Aucun : il faut changer chaque blob un par un",
    "Les blobs dont le niveau est déduit du compte",
    "Uniquement les blobs créés après la modification",
    "Tous les blobs, y compris ceux au niveau Archive"
   ],
   "a": 1
  },
  {
   "l": "Nouveaux blobs de storage75 en Froid par défaut, certains seulement en Chaud :",
   "o": [
    "Une stratégie d'immuabilité sur le conteneur",
    "Une SAS par blob, avec niveau Froid",
    "Le niveau d'accès par défaut à Froid",
    "La redondance ZRS du compte"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Blob placé au niveau Froid, supprimé 10 jours plus tard — jours de suppression anticipée facturés :</b></p><p>Chaque niveau froid a une <b>durée minimale de conservation</b> : Froid (Cool) 30 jours, Cold 90 jours, Archive 180 jours. Si on supprime (ou déplace) le blob avant, Azure facture les jours restants.</p><p>Ici : 30 − 10 = <b>20 jours</b> facturés en plus.</p><p>Le niveau Chaud n'a pas de minimum.</p><p><b>2. Archives légales de 10 ans jamais lues, relecture en plusieurs heures acceptable — niveau :</b></p><p>Le niveau <b>Archive</b> a le coût de stockage le plus bas. En échange, les données sont <b>hors ligne</b> : il faut les réhydrater (jusqu'à 15 heures en priorité standard) avant de les lire, et la lecture coûte cher. Durée minimale : 180 jours.</p><ul><li><b>Chaud</b> : données utilisées souvent. Stockage le plus cher, accès le moins cher.</li><li><b>Froid (Cool)</b> : accès peu fréquent, minimum 30 jours.</li><li><b>Très froid (Cold)</b> : accès rare, minimum 90 jours, mais encore en ligne.</li></ul><p><b>3. 20 To de vidéos lues le premier mois, puis presque jamais, lisibles immédiatement 3 ans :</b></p><p>Les vidéos sont chaudes au début puis froides : une règle de cycle de vie les fait descendre progressivement vers des niveaux <b>en ligne</b> moins chers (Froid puis Très froid), et les supprime à 3 ans.</p><p>Archive empêcherait la lecture immédiate. Rester en Chaud ou en Premium coûterait beaucoup plus cher.</p><p><b>4. Le niveau par défaut de storage30 passe de Chaud à Froid — blobs concernés :</b></p><p>Les blobs sans niveau explicite ont un niveau <b>déduit</b> (inferred) du niveau par défaut du compte. Changer le niveau du compte les fait tous passer au niveau Froid, ainsi que les nouveaux blobs. Les blobs dont le niveau a été défini explicitement (par exemple Archive ou Chaud) ne changent pas.</p><p>Attention au coût : ce changement est facturé comme une opération d'écriture sur chaque blob concerné.</p><p><b>5. Nouveaux blobs de storage75 en Froid par défaut, certains seulement en Chaud :</b></p><p>Le <b>niveau d'accès par défaut</b> du compte (Configuration) s'applique aux blobs dont le niveau n'est pas défini explicitement. On peut ensuite fixer le niveau Chaud sur certains blobs, ou utiliser une règle de cycle de vie.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "data"
  ],
  "title": "rapport.pdf | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble",
   "Versions",
   "Instantanés"
  ],
  "rows": [
   [
    "*Niveau d'accès",
    "Froid (Cool) · minimum 30 jours"
   ],
   [
    "Âge du blob",
    "10 jours"
   ],
   [
    "Supprimer maintenant",
    "20 jours de suppression anticipée facturés"
   ]
  ]
 },
 "keep": "Minimums : Froid 30 j, Cold 90 j, Archive 180 j. Supprimer avant = jours restants facturés. Le moins cher pour ne jamais lire = Archive (hors ligne, 180 jours minimum). Données qui refroidissent mais restent lisibles = cycle de vie Chaud → Froid → Cold. Niveau du compte = niveau déduit des blobs sans niveau explicite. Niveau par défaut du compte = niveau des blobs sans niveau explicite."
},
{
 "id": "D2-302",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Plusieurs blobs de storage41 sont au niveau Archive. Que devez-vous faire ou configurer dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un auditeur doit lire un blob archivé de 2 Go dans l'heure :",
   "o": [
    "Le réhydrater vers le niveau Chaud avec la priorité Standard",
    "Le copier vers un autre compte au niveau Archive",
    "Le réhydrater vers le niveau Chaud avec la priorité Élevée",
    "Le lire directement : il est accessible en lecture seule"
   ],
   "a": 2
  },
  {
   "l": "Une réhydratation lancée en priorité Standard devient urgente :",
   "o": [
    "Rien : la priorité ne peut pas être modifiée",
    "Copier le blob vers un autre conteneur au niveau Archive",
    "Annuler la réhydratation et attendre 24 heures",
    "Relancer l'opération avec la priorité Élevée"
   ],
   "a": 3
  },
  {
   "l": "Lire un blob archivé sans changer le blob d'origine :",
   "o": [
    "Copier le blob archivé vers un blob Chaud ou Froid",
    "Créer un instantané du blob archivé et le lire",
    "Lire le blob archivé avec une SAS de service",
    "Changer le niveau du blob d'origine en Chaud"
   ],
   "a": 0
  },
  {
   "l": "La règle « Archiver après 90 jours » renvoie aussitôt en Archive un blob réhydraté — condition à ajouter :",
   "o": [
    "daysAfterCreationGreaterThan",
    "prefixMatch",
    "daysAfterLastTierChangeGreaterThan",
    "daysAfterLastAccessTimeGreaterThan"
   ],
   "a": 2
  },
  {
   "l": "Sur un compte Premium objets blob de blocs, une règle doit déplacer les blobs vers Froid :",
   "o": [
    "Le compte devient Standard pour appliquer la règle",
    "Premium n'a pas de niveaux : seule la suppression existe",
    "Les blobs passent en Archive comme prévu",
    "La règle fonctionne normalement, sans changement"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Un auditeur doit lire un blob archivé de 2 Go dans l'heure :</b></p><p>Un blob archivé est <b>hors ligne</b> : on ne peut ni le lire ni le télécharger. Il faut le <b>réhydrater</b> vers un niveau en ligne (Chaud, Froid ou Très froid), soit en changeant son niveau, soit en le copiant vers un nouveau blob.</p><p>La priorité <b>Élevée</b> réhydrate en moins d'une heure les objets de moins de 10 Go. La priorité <b>Standard</b> peut prendre jusqu'à 15 heures. Une copie qui reste en Archive ne sert à rien.</p><p><b>2. Une réhydratation lancée en priorité Standard devient urgente :</b></p><p>Pendant une réhydratation en attente, on peut <b>passer de Standard à Élevée</b> (en refaisant Set Blob Tier avec la priorité High). On ne peut pas faire l'inverse. La priorité Élevée coûte plus cher.</p><p><b>3. Lire un blob archivé sans changer le blob d'origine :</b></p><p>La <b>copie</b> d'un blob archivé vers un nouveau blob en ligne (opération Copy Blob avec un niveau cible) réhydrate la copie, tandis que l'original reste au niveau Archive.</p><p>Changer le niveau modifierait l'original. Un instantané d'un blob archivé est lui aussi hors ligne. Une SAS ne rend pas un blob archivé lisible.</p><p><b>4. La règle « Archiver après 90 jours » renvoie aussitôt en Archive un blob réhydraté — condition à ajouter :</b></p><p>La condition <b>daysAfterLastTierChangeGreaterThan</b> (jours depuis le dernier changement de niveau) s'utilise avec tierToArchive : un blob qui vient d'être réhydraté ne sera pas réarchivé avant le délai choisi.</p><p>La date de création et la date de modification ne changent pas lors d'une réhydratation, d'où le problème.</p><p><b>5. Sur un compte Premium objets blob de blocs, une règle doit déplacer les blobs vers Froid :</b></p><p>Les comptes <b>Premium</b> ne prennent pas en charge les niveaux Chaud, Froid, Très froid et Archive. La gestion du cycle de vie y permet seulement de <b>supprimer</b> des blobs. Pour hiérarchiser, il faut copier les données vers un compte Standard.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "audit"
  ],
  "title": "Modifier le niveau",
  "rows": [
   [
    "Niveau d'accès",
    "Chaud"
   ],
   [
    "*Priorité de réhydratation",
    "Élevée (< 1 h pour < 10 Go)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Archive = hors ligne ; réhydratation Standard (≤ 15 h) ou Élevée (< 1 h). Réhydratation en cours : on peut passer de Standard à Élevée, pas l'inverse. Lire sans toucher l'original archivé = copie vers un niveau en ligne. Éviter de réarchiver un blob réhydraté = daysAfterLastTierChangeGreaterThan. Premium : pas de niveaux, le cycle de vie ne peut que supprimer."
},
{
 "id": "D2-303",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous automatisez la gestion des données du compte storage54. Que devez-vous utiliser pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Froid à 30 jours, Archive à 90 jours, suppression à 365 jours, automatiquement :",
   "o": [
    "La suppression réversible des blobs",
    "Une stratégie d'immuabilité temporelle",
    "La réplication d'objets vers un compte moins cher",
    "Une stratégie de gestion du cycle de vie"
   ],
   "a": 3
  },
  {
   "l": "Une règle de suppression créée il y a une heure n'a encore rien supprimé — raison :",
   "o": [
    "Il faut redémarrer le compte de stockage pour activer la règle",
    "La stratégie s'exécute une fois par jour (jusqu'à 24 h la 1re fois)",
    "La suppression réversible empêche la stratégie de fonctionner",
    "Les stratégies ne s'appliquent qu'aux nouveaux blobs"
   ],
   "a": 1
  },
  {
   "l": "Archiver les blobs étiquetés statut = termine, quel que soit leur dossier — filtre :",
   "o": [
    "prefixMatch",
    "containerName",
    "blobIndexMatch",
    "daysAfterModificationGreaterThan"
   ],
   "a": 2
  },
  {
   "l": "Un CSV hebdomadaire de tous les blobs avec taille, niveau et date de modification :",
   "o": [
    "Les journaux de diagnostic du service blob",
    "Le flux de modification",
    "La gestion du cycle de vie",
    "L'inventaire des objets blob"
   ],
   "a": 3
  },
  {
   "l": "Rechercher les blobs expirés du compte sans les parcourir un par un :",
   "o": [
    "Des étiquettes d'index de blob",
    "Des métadonnées de blob",
    "Les propriétés système des blobs",
    "Le nom du conteneur de chaque blob"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Froid à 30 jours, Archive à 90 jours, suppression à 365 jours, automatiquement :</b></p><p>La <b>gestion du cycle de vie</b> applique des règles (filtrées par préfixe, type de blob ou étiquette d'index) qui déplacent les blobs entre niveaux ou les suppriment selon leur âge : jours depuis la modification, la création ou le dernier accès.</p><p>L'immuabilité empêche la modification et la suppression. La suppression réversible garde les blobs supprimés. La réplication d'objets copie vers un autre compte.</p><p><b>2. Une règle de suppression créée il y a une heure n'a encore rien supprimé — raison :</b></p><p>Le moteur de cycle de vie traite les stratégies <b>une fois par jour</b>. Après création ou modification d'une stratégie, il faut compter jusqu'à 24 heures pour qu'elle prenne effet, puis le traitement lui-même peut durer selon le nombre de blobs.</p><p>Un compte de stockage ne se redémarre pas. La stratégie s'applique aussi aux blobs existants. La suppression réversible garde les blobs supprimés pendant sa durée de rétention, mais n'empêche pas la stratégie.</p><p><b>3. Archiver les blobs étiquetés statut = termine, quel que soit leur dossier — filtre :</b></p><p>Le filtre <b>blobIndexMatch</b> sélectionne les blobs selon leurs <b>étiquettes d'index</b> (nom, opérateur, valeur). Les étiquettes d'index sont des paires clé/valeur indexées et interrogeables, différentes des métadonnées.</p><p><b>prefixMatch</b> filtre par préfixe de nom, <b>blobTypes</b> par type de blob. containerName n'est pas un filtre de cycle de vie.</p><p><b>4. Un CSV hebdomadaire de tous les blobs avec taille, niveau et date de modification :</b></p><p>L'<b>inventaire des objets blob</b> génère, selon une planification quotidienne ou hebdomadaire, un rapport CSV ou Parquet de tous les blobs (ou conteneurs) avec les champs choisis.</p><p>Le flux de modification trace les changements. Les journaux de diagnostic tracent les requêtes. Le cycle de vie déplace ou supprime des blobs.</p><p><b>5. Rechercher les blobs expirés du compte sans les parcourir un par un :</b></p><p>Les <b>étiquettes d'index</b> sont indexées par le service : l'opération <b>Find Blobs by Tags</b> retrouve les blobs correspondants dans tout le compte. Elles servent aussi de filtre aux règles de cycle de vie.</p><p>Les <b>métadonnées</b> sont stockées avec le blob mais ne sont pas indexées : il faudrait lire chaque blob.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Gestion du cycle de vie",
  "menu": [
   "Protection des données",
   "*Gestion du cycle de vie"
  ],
  "rows": [
   [
    "Filtre",
    "Préfixe logs/"
   ],
   [
    "*Modifié il y a plus de 30 jours",
    "Déplacer vers le stockage froid"
   ],
   [
    "*Plus de 90 jours",
    "Déplacer vers le stockage archive"
   ],
   [
    "*Plus de 365 jours",
    "Supprimer l'objet blob"
   ]
  ],
  "btn": "Ajouter une règle"
 },
 "keep": "Déplacer ou supprimer selon l'âge = gestion du cycle de vie. Cycle de vie : traitement quotidien, jusqu'à 24 h avant le premier effet. Filtrer par étiquette d'index = blobIndexMatch. Liste périodique des blobs = inventaire des objets blob. Recherche sur tout le compte = étiquettes d'index (Find Blobs by Tags)."
},
{
 "id": "D2-304",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Des données de production ont été supprimées ou corrompues. Que pouvez-vous faire dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Remettre tous les blobs de blocs dans leur état d'une date des 14 derniers jours :",
   "o": [
    "Le basculement géographique du compte",
    "Des instantanés de blobs manuels",
    "La réplication d'objets vers un autre compte",
    "La restauration à un point dans le temps"
   ],
   "a": 3
  },
  {
   "l": "Conteneur supprimé il y a 3 jours ; suppression réversible des blobs seule (7 jours) :",
   "o": [
    "Oui, avec la restauration à un point dans le temps",
    "Oui, en restaurant le conteneur depuis la liste des conteneurs supprimés",
    "Non, car la suppression réversible des conteneurs n'était pas activée",
    "Oui, en restaurant chaque blob supprimé"
   ],
   "a": 2
  },
  {
   "l": "Partage share3 supprimé ce matin ; suppression réversible des partages à 14 jours :",
   "o": [
    "Restaurer share3 depuis un instantané de share3",
    "Créer un nouveau partage share3 : les données reviennent",
    "Rien : un partage supprimé ne peut pas être restauré",
    "Afficher les partages supprimés et annuler la suppression"
   ],
   "a": 3
  },
  {
   "l": "Compte storage32 supprimé il y a 3 jours, nom non réutilisé :",
   "o": [
    "Le restaurer depuis le portail (compte supprimé)",
    "Rien : la suppression d'un compte est définitive",
    "Le restaurer depuis le journal d'activité de l'abonnement",
    "Le restaurer avec la suppression réversible des blobs"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Remettre tous les blobs de blocs dans leur état d'une date des 14 derniers jours :</b></p><p>La <b>restauration à un point dans le temps</b> remet des conteneurs (ou des plages de blobs) de blobs de blocs dans leur état à une date choisie. Elle exige le <b>contrôle de version</b>, le <b>flux de modification</b> et la <b>suppression réversible des blobs</b>, avec une période de restauration inférieure à la rétention de la suppression réversible.</p><p>Les instantanés manuels demandent une gestion blob par blob. La réplication et le basculement copieraient aussi la corruption.</p><p><b>2. Conteneur supprimé il y a 3 jours ; suppression réversible des blobs seule (7 jours) :</b></p><p>La suppression réversible des <b>blobs</b> protège les blobs supprimés un par un. Quand on supprime un <b>conteneur</b> entier, seule la suppression réversible des <b>conteneurs</b> permet de le restaurer. Elle n'était pas activée : les données sont perdues.</p><p>La restauration à un point dans le temps ne restaure pas non plus un conteneur supprimé. Bonne pratique : activer les deux suppressions réversibles, et un verrou sur le compte contre la suppression du compte lui-même.</p><p><b>3. Partage share3 supprimé ce matin ; suppression réversible des partages à 14 jours :</b></p><p>Avec la <b>suppression réversible des partages</b>, un partage supprimé est conservé pendant la durée de rétention. On l'affiche dans la liste des partages (option « Afficher les partages supprimés ») et on <b>annule la suppression</b>, avec ses instantanés.</p><p>Les instantanés sont supprimés avec le partage s'il n'y a pas de suppression réversible. Créer un partage du même nom ne restaure rien.</p><p><b>4. Compte storage32 supprimé il y a 3 jours, nom non réutilisé :</b></p><p>Un compte de stockage supprimé peut être <b>récupéré pendant 14 jours</b>, à condition qu'aucun compte du même nom n'ait été recréé et que le groupe de ressources existe encore. Les données ne sont pas garanties si elles avaient été supprimées avant le compte.</p><p>La suppression réversible des blobs ne protège pas contre la suppression du compte : pour cela, on utilise un <b>verrou</b> Suppression impossible.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Protection des données",
  "menu": [
   "*Protection des données"
  ],
  "rows": [
   [
    "*Restauration à un point dans le temps",
    "Activée · 14 jours"
   ],
   [
    "Prérequis",
    "Versioning, flux de modification, suppression réversible"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Revenir à une date pour tout un compte = restauration à un point dans le temps (blobs de blocs). Conteneur supprimé = seule la suppression réversible des conteneurs le sauve. Partage supprimé = annuler la suppression (si suppression réversible des partages). Compte supprimé : récupérable 14 jours (si le nom est libre). Mieux : un verrou."
},
{
 "id": "D2-305",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Les utilisateurs de vos partages de fichiers Azure signalent plusieurs problèmes. Que devez-vous faire ou vérifier dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Un fichier écrasé il y a 2 jours, instantanés pris chaque nuit — l'utilisateur le récupère lui-même :",
   "o": [
    "En réhydratant le fichier depuis le niveau Archive",
    "En ouvrant une demande de restauration auprès de Microsoft",
    "Avec l'onglet Versions précédentes du fichier",
    "Avec la corbeille de Windows du poste client"
   ],
   "a": 2
  },
  {
   "l": "Jusqu'à 200 points de restauration d'un partage, planifiés ou à la demande :",
   "o": [
    "La réplication d'objets",
    "Le flux de modification",
    "Le contrôle de version des blobs",
    "Les instantanés de partage"
   ],
   "a": 3
  },
  {
   "l": "Erreur « espace insuffisant » sur un partage de 500 Gio, compte sans limite atteinte :",
   "o": [
    "Activer la suppression réversible",
    "Changer la redondance du compte",
    "Passer le compte en Premium",
    "Augmenter le quota du partage"
   ],
   "a": 3
  },
  {
   "l": "Le montage SMB depuis le site local échoue — cause la plus fréquente :",
   "o": [
    "Le port TCP 3389 est fermé sur le poste",
    "Le port TCP 445 sortant est bloqué",
    "storage17 utilise la redondance LRS, pas ZRS",
    "Le partage est au niveau Chaud, pas Optimisé"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Un fichier écrasé il y a 2 jours, instantanés pris chaque nuit — l'utilisateur le récupère lui-même :</b></p><p>Les <b>instantanés de partage</b> Azure Files sont exposés dans Windows sous l'onglet <b>Versions précédentes</b> : l'utilisateur peut ouvrir ou restaurer une ancienne version.</p><p>La corbeille de Windows ne voit pas les fichiers du partage réseau. Azure Files n'a pas de niveau Archive.</p><p><b>2. Jusqu'à 200 points de restauration d'un partage, planifiés ou à la demande :</b></p><p>Un partage de fichiers Azure peut avoir jusqu'à <b>200 instantanés</b>. Ce sont des copies en lecture seule, incrémentielles, du partage à un instant donné. Azure Backup les utilise pour planifier et gérer la rétention.</p><p>Le contrôle de version, la réplication d'objets et le flux de modification sont des fonctions des blobs.</p><p><b>3. Erreur « espace insuffisant » sur un partage de 500 Gio, compte sans limite atteinte :</b></p><p>Le <b>quota</b> d'un partage de fichiers limite sa taille, indépendamment de la capacité du compte. On l'augmente dans les propriétés du partage (jusqu'à 100 Tio avec les partages volumineux).</p><p>Pour un partage Premium approvisionné, augmenter le quota augmente aussi les performances (et le coût).</p><p><b>4. Le montage SMB depuis le site local échoue — cause la plus fréquente :</b></p><p>SMB utilise le port <b>TCP 445</b>. Beaucoup de fournisseurs d'accès et de pare-feu d'entreprise le bloquent vers Internet. Solutions : ouvrir le port, passer par un VPN ou ExpressRoute avec un point de terminaison privé, ou utiliser Azure File Sync.</p><p>Le niveau et la redondance n'empêchent pas le montage. Le port 3389 concerne RDP.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers",
   "share2"
  ],
  "title": "share2 | Instantanés",
  "menu": [
   "Vue d'ensemble",
   "*Instantanés"
  ],
  "rows": [
   [
    "*Instantané d'hier soir",
    "Visible dans Versions précédentes"
   ]
  ]
 },
 "keep": "Instantanés de partage = Versions précédentes dans Windows. Instantanés de partage : 200 maximum, incrémentiels, utilisés par Azure Backup. Erreur d'espace sur un partage = quota du partage. SMB = port 445 ; souvent bloqué par les FAI."
},
{
 "id": "D2-306",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous distribuez et révoquez des signatures d'accès partagé (SAS). Que devez-vous faire ou répondre dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Révoquer toutes les SAS liées à PolPartenaires, sans toucher aux clés :",
   "o": [
    "Régénérer key1 et key2 du compte",
    "Supprimer le conteneur partage et le recréer",
    "Activer le pare-feu du compte de stockage",
    "Modifier la stratégie d'accès stockée"
   ],
   "a": 3
  },
  {
   "l": "Une SAS de compte signée par key1, sans stratégie stockée, a fuité :",
   "o": [
    "Régénérer key1",
    "Régénérer key2",
    "Supprimer la stratégie d'accès stockée",
    "Changer le niveau d'accès du compte"
   ],
   "a": 0
  },
  {
   "l": "Créer une SAS de délégation d'utilisateur valable 30 jours :",
   "o": [
    "La SAS est créée sans date d'expiration",
    "Il faut une stratégie d'accès stockée sur le conteneur",
    "La SAS est créée pour 30 jours, comme demandé",
    "La création échoue : 7 jours maximum"
   ],
   "a": 3
  },
  {
   "l": "Créer 8 stratégies d'accès stockées sur un même conteneur :",
   "o": [
    "Seules 5 stratégies sont possibles par conteneur",
    "Il faut un conteneur par stratégie",
    "Les stratégies doivent être créées au niveau du compte",
    "Les 8 stratégies sont créées"
   ],
   "a": 0
  },
  {
   "l": "Une application doit télécharger un seul blob pendant 2 heures, sans clé du compte :",
   "o": [
    "Le rôle Contributeur sur le compte de stockage",
    "La clé d'accès key1 du compte, à révoquer ensuite",
    "Une SAS en lecture sur le blob, valable 2 heures",
    "L'URL du blob, après avoir rendu le conteneur public"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Révoquer toutes les SAS liées à PolPartenaires, sans toucher aux clés :</b></p><p>Une SAS de service associée à une <b>stratégie d'accès stockée</b> tire ses autorisations et son expiration de cette stratégie. En supprimant la stratégie (ou en changeant son expiration), on révoque toutes les SAS associées.</p><p>Régénérer les clés révoquerait aussi ces SAS, mais casserait toutes les applications qui utilisent les clés. Supprimer le conteneur détruit les données. Le pare-feu filtre le réseau, pas les SAS.</p><p><b>2. Une SAS de compte signée par key1, sans stratégie stockée, a fuité :</b></p><p>Une SAS de compte est signée avec une clé du compte. La seule façon de l'invalider avant son expiration est de <b>régénérer la clé qui l'a signée</b>, ici key1. Toutes les SAS signées avec key1 deviennent invalides.</p><p>C'est pour faciliter cette opération qu'il y a deux clés : on bascule les applications sur key2, puis on régénère key1. Les SAS de compte ne peuvent pas utiliser de stratégie d'accès stockée.</p><p><b>3. Créer une SAS de délégation d'utilisateur valable 30 jours :</b></p><p>Une SAS de délégation d'utilisateur est signée par une <b>clé de délégation d'utilisateur</b>, valable au maximum <b>7 jours</b>. La SAS ne peut pas durer plus longtemps que cette clé.</p><p>Les SAS de délégation d'utilisateur ne prennent pas en charge les stratégies d'accès stockées. Pour des accès longs, on préfère donner un rôle à une identité.</p><p><b>4. Créer 8 stratégies d'accès stockées sur un même conteneur :</b></p><p>Un conteneur (ou un partage, une file d'attente, une table) peut avoir au maximum <b>5 stratégies d'accès stockées</b>. Pour 8 partenaires, on peut regrouper des partenaires, utiliser plusieurs conteneurs, ou préférer des SAS de délégation d'utilisateur.</p><p><b>5. Une application doit télécharger un seul blob pendant 2 heures, sans clé du compte :</b></p><p>Une <b>SAS</b> donne un accès limité : une ressource (ici un blob), des autorisations (ici <code>sp=r</code>) et une durée (<code>se</code>). L'application n'a jamais la clé du compte.</p><p>La clé du compte donne un accès total et permanent. Contributeur gère le compte sans donner accès aux données avec son identité. Rendre le conteneur public exposerait tous ses blobs à tout le monde, sans limite de durée.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "partage"
  ],
  "title": "partage | Stratégie d'accès",
  "menu": [
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "*PolPartenaires",
    "Supprimer ou changer l'expiration"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "SAS liées à une stratégie d'accès stockée = révoquées en supprimant la stratégie. SAS de compte = révoquée en régénérant sa clé ; basculer d'abord les applications sur l'autre clé. SAS de délégation d'utilisateur : 7 jours maximum. 5 stratégies d'accès stockées maximum par conteneur, partage, file ou table. Accès limité à une ressource, une action, une durée = SAS."
},
{
 "id": "D2-307",
 "dom": 2,
 "type": "hot",
 "stem": "<p>La sécurité veut réduire l'usage des clés de compte de stockage. Que devez-vous configurer ou attribuer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Rappel automatique pour faire tourner les clés de storage53 tous les 90 jours :",
   "o": [
    "Une stratégie de cycle de vie sur les clés",
    "Une stratégie d'expiration de clé",
    "Une alerte de budget sur le compte de stockage",
    "Une stratégie d'accès stockée de 90 jours"
   ],
   "a": 1
  },
  {
   "l": "Une application doit créer des SAS de délégation d'utilisateur — autorisation minimale :",
   "o": [
    "Propriétaire sur l'abonnement",
    "L'action generateUserDelegationKey",
    "Le droit de lister les clés du compte (listKeys)",
    "Administrateur général du locataire"
   ],
   "a": 1
  },
  {
   "l": "URL de lecture d'un blob pendant 10 minutes, accès par clé partagée interdit :",
   "o": [
    "Aucune SAS n'est possible",
    "Une SAS de délégation d'utilisateur",
    "Une SAS de compte signée par key1",
    "Une SAS de service signée par key1"
   ],
   "a": 1
  },
  {
   "l": "Seule l'authentification Microsoft Entra doit être possible sur storage8 :",
   "o": [
    "Désactiver le transfert sécurisé obligatoire",
    "Désactiver l'accès par clé du compte (Shared Key)",
    "Régénérer les deux clés d'accès chaque jour",
    "Activer l'espace de noms hiérarchique du compte"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Rappel automatique pour faire tourner les clés de storage53 tous les 90 jours :</b></p><p>Dans <b>Clés d'accès</b>, l'option <b>Définir un rappel de rotation</b> crée une stratégie d'expiration de clé : passé le délai, Azure signale la clé comme à faire pivoter (et une stratégie Azure Policy peut contrôler cette règle). Pour une rotation entièrement automatique, on peut aussi confier les clés à Key Vault ou, mieux, utiliser Entra ID.</p><p><b>2. Une application doit créer des SAS de délégation d'utilisateur — autorisation minimale :</b></p><p>Pour obtenir une clé de délégation d'utilisateur, l'identité doit pouvoir appeler <code>Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action</code>, incluse dans le rôle <b>Délégateur Blob du stockage</b> (et dans les rôles de données blob Contributeur, Propriétaire, Lecteur). La SAS ne peut ensuite pas donner plus de droits que l'identité n'en a sur les données.</p><p>Aucun accès aux clés du compte n'est nécessaire : c'est tout l'intérêt de ce type de SAS.</p><p><b>3. URL de lecture d'un blob pendant 10 minutes, accès par clé partagée interdit :</b></p><p>Quand l'accès par <b>clé partagée</b> est désactivé, les SAS de compte et de service (signées par une clé du compte) sont refusées. La <b>SAS de délégation d'utilisateur</b>, signée via Microsoft Entra, reste utilisable.</p><p><b>4. Seule l'authentification Microsoft Entra doit être possible sur storage8 :</b></p><p>Le paramètre <b>Autoriser l'accès à la clé du compte de stockage</b> (AllowSharedKeyAccess = false) bloque toute requête autorisée par clé partagée, y compris les SAS de compte et de service. Les SAS de délégation d'utilisateur, signées via Entra, continuent de fonctionner.</p><p>Régénérer les clés ne les interdit pas. L'espace de noms hiérarchique concerne Data Lake. Désactiver le transfert sécurisé autoriserait HTTP : l'inverse de la sécurité.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage53"
  ],
  "title": "storage53 | Clés d'accès",
  "menu": [
   "*Clés d'accès"
  ],
  "rows": [
   [
    "*Définir un rappel de rotation",
    "Tous les 90 jours"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Rappel de rotation des clés = Clés d'accès > Définir un rappel. Créer des SAS de délégation = generateUserDelegationKey (Délégateur Blob). Clé partagée désactivée = seule la SAS de délégation d'utilisateur fonctionne. Interdire clés et SAS signées par clé = désactiver l'accès par clé partagée."
},
{
 "id": "D2-308",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous déployez Azure File Sync entre les serveurs FS-PARIS et FS-LYON et le partage Azure share14. Que devez-vous répondre ou faire dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "rapport.docx est modifié en même temps sur les deux serveurs :",
   "o": [
    "Il bloque la synchronisation jusqu'à une décision manuelle",
    "Il fusionne le contenu des deux fichiers en conflit",
    "Il garde les deux : l'un est renommé avec un suffixe",
    "Il garde uniquement la version la plus récente"
   ],
   "a": 2
  },
  {
   "l": "Des fichiers copiés dans share14 depuis le portail n'apparaissent pas sur les serveurs :",
   "o": [
    "Le portail ne peut pas écrire dans un partage synchronisé",
    "La hiérarchisation cloud bloque les nouveaux fichiers",
    "Il faut redémarrer l'agent sur le serveur",
    "Une tâche détecte ces changements toutes les 24 h"
   ],
   "a": 3
  },
  {
   "l": "Composant à installer sur un nouveau serveur Windows Server 2022 :",
   "o": [
    "L'agent Azure Monitor",
    "AzCopy planifié",
    "L'agent Azure File Sync",
    "Microsoft Entra Connect"
   ],
   "a": 2
  },
  {
   "l": "Retirer un serveur en gardant ses fichiers hiérarchisés utilisables — avant de supprimer le point de terminaison :",
   "o": [
    "Désinstaller l'agent immédiatement",
    "Supprimer le partage Azure synchronisé",
    "Supprimer le service de synchronisation de stockage",
    "Rappeler tous les fichiers hiérarchisés"
   ],
   "a": 3
  },
  {
   "l": "Le volume D: doit toujours garder 20 % d'espace libre :",
   "o": [
    "La stratégie de date à 20 jours",
    "Le quota du partage Azure à 20 %",
    "La stratégie d'espace libre du volume à 20 %",
    "La rétention de la suppression réversible à 20 jours"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. rapport.docx est modifié en même temps sur les deux serveurs :</b></p><p>En cas de conflit, File Sync ne perd aucune modification : il conserve les deux fichiers. La version qui « gagne » garde le nom d'origine ; l'autre est renommée avec le nom du point de terminaison (serveur ou cloud) et un numéro, par exemple <code>rapport-FS-LYON.docx</code>.</p><p><b>2. Des fichiers copiés dans share14 depuis le portail n'apparaissent pas sur les serveurs :</b></p><p>Les changements faits sur un <b>serveur</b> sont détectés en temps réel par l'agent. Ceux faits <b>directement dans le partage Azure</b> (portail, SMB direct, API) sont détectés par une <b>tâche de détection des modifications</b> qui s'exécute une fois toutes les 24 heures. On peut la lancer à la demande avec <code>Invoke-AzStorageSyncChangeDetection</code>.</p><p><b>3. Composant à installer sur un nouveau serveur Windows Server 2022 :</b></p><p>L'<b>agent Azure File Sync</b> s'installe sur chaque serveur Windows Server pris en charge. Il inscrit le serveur auprès du service de synchronisation de stockage et gère la synchronisation et la hiérarchisation cloud.</p><p>Les autres composants ne participent pas à File Sync.</p><p><b>4. Retirer un serveur en gardant ses fichiers hiérarchisés utilisables — avant de supprimer le point de terminaison :</b></p><p>Les fichiers hiérarchisés ne sont que des <b>pointeurs</b> vers Azure. Si on supprime le point de terminaison sans les rappeler, ils deviennent inaccessibles sur le serveur. On les <b>rappelle</b> d'abord, par exemple avec <code>Invoke-StorageSyncFileRecall</code>.</p><p>Supprimer le partage ou le service détruirait les données ou la configuration.</p><p><b>5. Le volume D: doit toujours garder 20 % d'espace libre :</b></p><p>La <b>stratégie d'espace libre du volume</b> fait que File Sync hiérarchise (ne garde qu'un pointeur local) les fichiers les moins utilisés pour maintenir l'espace libre voulu. La <b>stratégie de date</b> hiérarchise en plus les fichiers non consultés depuis un nombre de jours.</p><p>Le quota limite la taille du partage dans Azure. La suppression réversible n'a pas de rapport.</p>",
 "portal": {
  "path": [
   "Partage-central",
   "Rapports"
  ],
  "title": "Explorateur de fichiers",
  "rows": [
   [
    "rapport.docx",
    "Version gagnante"
   ],
   [
    "*rapport-FS-LYON.docx",
    "Version en conflit, conservée"
   ]
  ]
 },
 "keep": "Conflit File Sync : les deux fichiers sont gardés, le perdant est renommé. Modifs directes dans le partage Azure = détection toutes les 24 h (ou à la demande). File Sync sur un serveur = agent Azure File Sync + inscription. Retirer un serveur : rappeler les fichiers hiérarchisés d'abord. Garder X % libre = stratégie d'espace libre du volume ; vieux fichiers = stratégie de date."
},
{
 "id": "D2-309",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous sécurisez l'accès réseau aux comptes de stockage depuis VNet1 et le site local relié par VPN. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Subnet1 seul accède à storage10, sans adresse IP privée pour le compte :",
   "o": [
    "Un point de terminaison privé dans Subnet1, sans zone DNS",
    "Une règle NSG sortante vers l'étiquette Internet",
    "Une passerelle NAT sur Subnet1 avec une IP autorisée",
    "Un point de terminaison de service et une règle de VNet"
   ],
   "a": 3
  },
  {
   "l": "Le site local accède à storage11 par une adresse IP privée :",
   "o": [
    "Un point de terminaison privé et la zone privatelink.blob",
    "Une règle d'adresse IP du site local dans le pare-feu",
    "Le niveau d'accès Archive pour les blobs sensibles",
    "Un point de terminaison de service sur le GatewaySubnet"
   ],
   "a": 0
  },
  {
   "l": "Les serveurs locaux résolvent toujours storage36.file.core.windows.net en adresse publique :",
   "o": [
    "Les permissions NTFS du dossier racine",
    "La redondance du compte de stockage",
    "La résolution DNS vers l'adresse privée",
    "Le niveau du partage (Optimisé pour les transactions)"
   ],
   "a": 2
  },
  {
   "l": "storage37 a un point de terminaison privé blob ; le partage de fichiers doit aussi être privé :",
   "o": [
    "Activer un point de terminaison de service",
    "Ajouter le service file dans le pare-feu du compte",
    "Rien : le point de terminaison blob couvre tous les services",
    "Un second point de terminaison privé (sous-ressource file)"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Subnet1 seul accède à storage10, sans adresse IP privée pour le compte :</b></p><p>Un <b>point de terminaison de service</b> fait passer le trafic du sous-réseau vers le stockage par le réseau Azure, en l'identifiant comme venant de Subnet1. On ajoute ensuite Subnet1 dans le <b>pare-feu</b> du compte (« Activé à partir des réseaux virtuels et adresses IP sélectionnés »). Le compte garde son adresse publique.</p><p>Un point de terminaison privé donnerait une adresse IP privée au compte, ce qui n'est pas voulu. Un NSG ou une passerelle NAT ne restreignent pas l'accès côté compte.</p><p><b>2. Le site local accède à storage11 par une adresse IP privée :</b></p><p>Un <b>point de terminaison privé</b> crée une interface réseau avec une adresse IP privée de VNet1 pour le compte. Le site local y accède à travers le VPN. Il faut que le nom <code>storage11.blob.core.windows.net</code> soit résolu vers cette adresse privée : zone DNS privée <code>privatelink.blob.core.windows.net</code>, et redirection DNS depuis le site local.</p><p>Les points de terminaison de service ne fonctionnent pas depuis le site local. Une règle IP passerait par Internet.</p><p><b>3. Les serveurs locaux résolvent toujours storage36.file.core.windows.net en adresse publique :</b></p><p>Le point de terminaison privé fonctionne, mais le client doit résoudre <code>storage36.file.core.windows.net</code> vers l'<b>adresse privée</b>. Dans Azure, la zone DNS privée <code>privatelink.file.core.windows.net</code> liée au réseau virtuel s'en charge. Depuis le site local, il faut un <b>redirecteur conditionnel</b> vers un résolveur DNS dans Azure (Azure DNS Private Resolver ou un serveur DNS).</p><p><b>4. storage37 a un point de terminaison privé blob ; le partage de fichiers doit aussi être privé :</b></p><p>Un point de terminaison privé cible <b>une seule sous-ressource</b> : blob, file, queue, table, dfs ou web. Pour Azure Files, il faut un second point de terminaison privé avec la sous-ressource <b>file</b> (et la zone DNS privatelink.file.core.windows.net).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage10"
  ],
  "title": "storage10 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "Accès réseau public",
    "Réseaux virtuels et IP sélectionnés"
   ],
   [
    "*Réseau virtuel",
    "VNet1 / Subnet1 (point de terminaison Microsoft.Storage)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Point de terminaison de service = adresse publique conservée, accès filtré par sous-réseau. IP privée, accès depuis le site local = point de terminaison privé + DNS privé. Point de terminaison privé = DNS privé ; depuis le site local, redirecteur conditionnel. Un point de terminaison privé par sous-ressource (blob, file, queue, table, dfs, web)."
},
{
 "id": "D2-310",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous configurez le pare-feu de plusieurs comptes de stockage. Que devez-vous choisir pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "storage39 accessible uniquement par des points de terminaison privés :",
   "o": [
    "Activé à partir des réseaux virtuels et adresses IP sélectionnés, sans aucune règle",
    "Accès réseau public : Désactivé",
    "Activé à partir des réseaux virtuels sélectionnés avec un point de terminaison de service",
    "Activé à partir de tous les réseaux"
   ],
   "a": 1
  },
  {
   "l": "Depuis Subnet1, seuls les comptes de RG-Data sont joignables par le point de terminaison de service :",
   "o": [
    "Une table de routage",
    "Un pare-feu sur chaque compte",
    "Une stratégie de point de terminaison de service",
    "Une règle NSG avec l'étiquette de service Storage"
   ],
   "a": 2
  },
  {
   "l": "Azure Backup et Azure Monitor doivent écrire dans storage13 malgré le pare-feu :",
   "o": [
    "Le site web statique du compte",
    "L'exception des services Azure approuvés",
    "L'accès anonyme aux blobs du conteneur",
    "La géoredondance avec lecture secondaire"
   ],
   "a": 1
  },
  {
   "l": "Une seule instance Synapse doit accéder à storage38 :",
   "o": [
    "Une règle d'instance de ressource",
    "Une SAS de compte en lecture",
    "L'accès anonyme au conteneur",
    "L'exception pour tous les services approuvés"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. storage39 accessible uniquement par des points de terminaison privés :</b></p><p><b>Désactivé</b> bloque tout accès par le point de terminaison public. Seuls les points de terminaison privés restent utilisables.</p><p>« Réseaux sélectionnés sans règle » bloque presque tout aussi, mais les exceptions (services approuvés, règles d'instance) peuvent laisser passer du trafic public. Les points de terminaison de service passent par l'adresse publique.</p><p><b>2. Depuis Subnet1, seuls les comptes de RG-Data sont joignables par le point de terminaison de service :</b></p><p>Une <b>stratégie de point de terminaison de service</b>, associée au sous-réseau, liste les comptes de stockage (ou groupes de ressources, abonnements) autorisés par le point de terminaison de service. Elle empêche l'exfiltration vers n'importe quel compte de stockage.</p><p>L'étiquette de service Storage dans un NSG couvre <b>tous</b> les comptes de stockage d'Azure (ou d'une région), pas une liste précise.</p><p><b>3. Azure Backup et Azure Monitor doivent écrire dans storage13 malgré le pare-feu :</b></p><p>L'exception pour les <b>services approuvés</b> (trusted Microsoft services) laisse passer certains services Azure (Backup, Monitor, Event Grid…) qui ne peuvent pas passer par vos réseaux virtuels. On peut aussi utiliser des règles d'instance de ressource, plus précises.</p><p>L'accès anonyme exposerait les données à tous. Les deux autres options n'ont pas de rapport.</p><p><b>4. Une seule instance Synapse doit accéder à storage38 :</b></p><p>Une <b>règle d'instance de ressource</b> autorise une instance précise d'un service Azure (identifiée par son ID de ressource), en s'appuyant sur son identité managée et ses rôles. C'est plus précis que l'exception « services approuvés », qui laisse passer tous les services d'un type.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage39"
  ],
  "title": "storage39 | Mise en réseau",
  "menu": [
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Accès réseau public",
    "Désactivé"
   ],
   [
    "Points de terminaison privés",
    "Seul accès possible"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Uniquement privé = accès réseau public désactivé. Limiter les comptes joignables par point de terminaison de service = stratégie de point de terminaison de service. Backup, Monitor… derrière le pare-feu = exception des services approuvés. Autoriser une instance précise d'un service = règle d'instance de ressource."
},
{
 "id": "D2-311",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous exposez des contenus de stockage blob à des utilisateurs externes. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Images du conteneur images lisibles sans authentification ; accès anonyme désactivé sur le compte :",
   "o": [
    "Activer le site web statique sur le compte",
    "Créer une SAS sans date d'expiration pour images",
    "Accès anonyme sur le compte, conteneur au niveau Blob",
    "Régler le conteneur au niveau Conteneur, sans toucher au compte"
   ],
   "a": 2
  },
  {
   "l": "Site web statique au coût le plus bas — emplacement des fichiers :",
   "o": [
    "Dans le conteneur $web",
    "Dans le conteneur $root",
    "Dans un partage de fichiers nommé www",
    "Dans une table nommée web"
   ],
   "a": 0
  },
  {
   "l": "Un partenaire dépose des fichiers avec un client SFTP, sans SAS ni clé :",
   "o": [
    "Activer le site web statique avec un dossier d'upload",
    "Créer un partage NFS accessible depuis Internet",
    "Activer l'accès anonyme en écriture sur le conteneur",
    "Activer SFTP et créer un utilisateur local"
   ],
   "a": 3
  },
  {
   "l": "Un JavaScript de www.contoso.com charge des fichiers dans storage64, le navigateur bloque :",
   "o": [
    "L'accès anonyme en écriture sur le conteneur",
    "Un point de terminaison privé pour le compte",
    "La redondance RA-GRS pour la lecture",
    "Une règle CORS pour https://www.contoso.com"
   ],
   "a": 3
  },
  {
   "l": "Le site statique de storage65 en HTTPS sur www.contoso.com :",
   "o": [
    "Azure Front Door avec le domaine et un certificat",
    "La suppression réversible des blobs du site",
    "Un point de terminaison privé sur le site web",
    "Une SAS de compte ajoutée aux URL du site"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Images du conteneur images lisibles sans authentification ; accès anonyme désactivé sur le compte :</b></p><p>L'accès anonyme se règle à deux niveaux. Le <b>compte</b> doit l'autoriser ; sinon, les réglages des conteneurs sont ignorés. Ensuite, chaque <b>conteneur</b> a un niveau d'accès : <b>Privé</b>, <b>Blob</b> (lecture anonyme des blobs, sans pouvoir lister) ou <b>Conteneur</b> (lecture et liste des blobs).</p><p>Régler seulement le conteneur ne suffit pas quand le compte l'interdit. Une SAS a toujours une expiration. Le site web statique utilise le conteneur $web, pas images.</p><p><b>2. Site web statique au coût le plus bas — emplacement des fichiers :</b></p><p>L'activation du <b>site web statique</b> crée le conteneur <b>$web</b>. On y charge les fichiers, et on indique le document d'index (index.html) et la page d'erreur 404. Le site est servi à l'adresse <code>&lt;compte&gt;.z&lt;n&gt;.web.core.windows.net</code>.</p><p>Le conteneur $root sert à l'adresse racine du service blob, pas au site web statique.</p><p><b>3. Un partenaire dépose des fichiers avec un client SFTP, sans SAS ni clé :</b></p><p>Le <b>support SFTP</b> d'Azure Blob Storage exige l'<b>espace de noms hiérarchique</b>. On crée des <b>utilisateurs locaux</b> (avec mot de passe ou clé SSH) auxquels on donne des autorisations sur des conteneurs.</p><p>Le site web statique est en lecture seule. NFS n'est pas SFTP. L'accès anonyme ne permet jamais l'écriture.</p><p><b>4. Un JavaScript de www.contoso.com charge des fichiers dans storage64, le navigateur bloque :</b></p><p>Les navigateurs bloquent les requêtes vers un autre domaine sauf si le serveur les autorise par <b>CORS</b> (partage des ressources entre origines). Une règle CORS sur le service blob, avec l'origine, les méthodes (PUT, GET…) et les en-têtes autorisés, résout le problème. L'authentification passera par une SAS ou Entra.</p><p><b>5. Le site statique de storage65 en HTTPS sur www.contoso.com :</b></p><p>Le site web statique accepte un domaine personnalisé en HTTP, mais <b>pas en HTTPS</b> avec un certificat personnalisé. Pour HTTPS sur votre domaine, on place <b>Azure Front Door</b> (ou Azure CDN) devant le compte, qui gère le certificat.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage9"
  ],
  "title": "storage9 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Autoriser l'accès anonyme aux objets blob",
    "Activé"
   ],
   [
    "Conteneur images · Niveau d'accès",
    "Blob"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Accès anonyme : autorisé sur le compte, puis niveau Blob ou Conteneur sur le conteneur. Site statique = conteneur $web. SFTP sur blobs = espace de noms hiérarchique + utilisateurs locaux. Navigateur qui bloque un appel vers le stockage = règle CORS. HTTPS sur un domaine personnalisé pour un site statique = Front Door ou CDN."
},
{
 "id": "D2-312",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous supervisez plusieurs comptes de stockage. Que devez-vous consulter ou configurer pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Jusqu'à quelle heure les données de storage51 (GRS) sont répliquées vers le secondaire :",
   "o": [
    "Les métriques de transactions du compte",
    "L'heure de dernière synchronisation",
    "Le flux de modification du compte",
    "Le journal d'activité de l'abonnement"
   ],
   "a": 1
  },
  {
   "l": "Tracer chaque lecture et suppression de blob avec l'appelant, analysé en KQL :",
   "o": [
    "Un diagnostic blob (StorageRead, StorageDelete)",
    "Le suivi de l'heure du dernier accès",
    "Le journal d'activité du compte de stockage, exporté",
    "Une alerte de métrique sur les transactions blob"
   ],
   "a": 0
  },
  {
   "l": "Volume de données de storage72 et son évolution sur un mois :",
   "o": [
    "Les métriques du compte (Capacité utilisée)",
    "Les clés d'accès du compte",
    "Le journal d'activité de l'abonnement",
    "La page Redondance du compte de stockage"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Jusqu'à quelle heure les données de storage51 (GRS) sont répliquées vers le secondaire :</b></p><p>L'<b>heure de dernière synchronisation</b>, affichée dans la page Redondance (et via PowerShell ou CLI), garantit que toutes les écritures antérieures sont dans la région secondaire. Les écritures postérieures pourraient être perdues en cas de basculement.</p><p><b>2. Tracer chaque lecture et suppression de blob avec l'appelant, analysé en KQL :</b></p><p>Les <b>journaux de ressources</b> du stockage (StorageRead, StorageWrite, StorageDelete) tracent les opérations sur les données. On les active avec un <b>paramètre de diagnostic</b> sur le service blob et on les envoie vers Log Analytics pour les interroger en KQL.</p><p>Le journal d'activité ne trace que le plan de contrôle. Le suivi du dernier accès ne donne pas l'appelant. Une métrique ne contient pas le détail de chaque requête.</p><p><b>3. Volume de données de storage72 et son évolution sur un mois :</b></p><p>La métrique <b>Capacité utilisée</b> (Used capacity), et par service la capacité blob ou fichier, montre le volume stocké et son évolution dans le temps. Les métriques de capacité sont mises à jour une fois par jour environ.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage51"
  ],
  "title": "storage51 | Redondance",
  "menu": [
   "*Redondance"
  ],
  "rows": [
   [
    "*Heure de dernière synchronisation",
    "2026-10-27 10:05 UTC"
   ]
  ]
 },
 "keep": "Où en est la secondaire = Last Sync Time. Tracer les accès aux données = paramètre de diagnostic sur le service (blob, file…). Volume stocké et évolution = métrique Capacité utilisée."
},
{
 "id": "D2-313",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous reliez storage61 à d'autres services et comptes. Que devez-vous répondre ou configurer pour chaque situation ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "La stratégie de réplication d'objets vers un compte du locataire Fabrikam échoue :",
   "o": [
    "L'accès anonyme aux blobs",
    "Le chiffrement d'infrastructure",
    "La réplication entre locataires",
    "Le niveau d'accès par défaut des comptes"
   ],
   "a": 2
  },
  {
   "l": "Une réplication d'objets est créée sur un conteneur de 10 000 blobs — blobs existants :",
   "o": [
    "Ils sont toujours répliqués en premier",
    "Ils ne sont jamais répliqués",
    "Ils sont déplacés vers la destination et supprimés de la source",
    "Selon l'option : tous, nouveaux seuls, ou après une date"
   ],
   "a": 3
  },
  {
   "l": "Une application doit être prévenue de chaque nouveau blob du conteneur upload :",
   "o": [
    "Un point de terminaison privé sur le compte",
    "Une stratégie de cycle de vie qui lance l'action",
    "Un abonnement aux événements Event Grid",
    "La réplication d'objets vers un compte de traitement"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. La stratégie de réplication d'objets vers un compte du locataire Fabrikam échoue :</b></p><p>La réplication d'objets vers un compte d'un <b>autre locataire Microsoft Entra</b> doit être autorisée par le paramètre <b>Autoriser la réplication entre locataires</b> (AllowCrossTenantReplication), désactivé par défaut sur les nouveaux comptes.</p><p><b>2. Une réplication d'objets est créée sur un conteneur de 10 000 blobs — blobs existants :</b></p><p>Une règle de réplication d'objets propose de <b>copier tous les objets</b>, <b>uniquement les nouveaux objets</b>, ou un filtre de date personnalisé. La réplication <b>copie</b> les blobs ; elle ne les supprime jamais de la source.</p><p><b>3. Une application doit être prévenue de chaque nouveau blob du conteneur upload :</b></p><p>Le stockage blob publie des événements (<code>BlobCreated</code>, <code>BlobDeleted</code>…) dans <b>Azure Event Grid</b>. Un abonnement aux événements, filtré sur le conteneur, peut déclencher une fonction, une application logique ou un webhook.</p><p>Les autres options ne notifient rien.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage61"
  ],
  "title": "storage61 | Réplication d'objets",
  "menu": [
   "*Réplication d'objets"
  ],
  "rows": [
   [
    "*Autoriser la réplication entre locataires",
    "Activé"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Réplication vers un autre locataire = AllowCrossTenantReplication. La réplication copie, ne supprime jamais ; l'existant selon l'option choisie. Réagir à un nouveau blob = Event Grid."
},
{
 "id": "D2-314",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Les utilisateurs du domaine accèdent aux partages Azure Files avec leur identité. Que devez-vous configurer ou répondre dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "share4 avec les comptes AD DS (synchronisés) et les autorisations NTFS — à configurer d'abord :",
   "o": [
    "L'authentification par identité avec AD DS",
    "Le protocole NFS 4.1 sur un compte Premium",
    "L'accès anonyme au partage en lecture",
    "Une SAS de compte distribuée aux utilisateurs"
   ],
   "a": 0
  },
  {
   "l": "Pas d'AD local, VM jointes à Microsoft Entra Domain Services — source d'identité :",
   "o": [
    "Aucune : utilisez la clé du compte",
    "Microsoft Entra Domain Services",
    "Microsoft Entra Connect Sync seul",
    "AD DS local"
   ],
   "a": 1
  },
  {
   "l": "Contributeur de partage SMB sur share15, NTFS en lecture seule sur Paie — dans Paie :",
   "o": [
    "Lire et écrire",
    "Lire seulement",
    "Rien",
    "Modifier les permissions NTFS"
   ],
   "a": 1
  },
  {
   "l": "Configuration initiale des permissions NTFS racine de share16 :",
   "o": [
    "Utiliser une SAS de compte en écriture",
    "Configurer les permissions dans le pare-feu",
    "Monter avec Contributeur élevé (ou la clé), puis icacls",
    "Configurer les permissions NTFS dans le portail Azure"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. share4 avec les comptes AD DS (synchronisés) et les autorisations NTFS — à configurer d'abord :</b></p><p>Pour utiliser les comptes du domaine, on active l'<b>authentification basée sur l'identité</b> du compte de stockage : AD DS local (le compte de stockage est représenté par un objet ordinateur dans le domaine, par exemple avec le module AzFilesHybrid), Microsoft Entra Domain Services, ou Microsoft Entra Kerberos pour les identités hybrides.</p><p>On attribue ensuite les permissions au niveau du partage (rôles RBAC) puis les permissions NTFS sur les dossiers et fichiers.</p><p><b>2. Pas d'AD local, VM jointes à Microsoft Entra Domain Services — source d'identité :</b></p><p><b>Microsoft Entra Domain Services</b> fournit un domaine managé (Kerberos, NTLM) synchronisé avec Microsoft Entra ID. Azure Files peut l'utiliser comme source d'identité pour les VM jointes à ce domaine.</p><p>Il n'y a pas d'AD local. La clé du compte ne passe pas par l'identité de l'utilisateur. Entra Connect est un outil de synchronisation, pas une source d'identité pour Azure Files.</p><p><b>3. Contributeur de partage SMB sur share15, NTFS en lecture seule sur Paie — dans Paie :</b></p><p>Les permissions <b>au niveau du partage</b> (RBAC) et les permissions <b>NTFS</b> s'appliquent toutes les deux : le résultat est le <b>plus restrictif</b> des deux. Le partage autorise l'écriture, mais NTFS ne donne que la lecture : il peut seulement lire.</p><p><b>4. Configuration initiale des permissions NTFS racine de share16 :</b></p><p>Les ACL NTFS se gèrent depuis un client Windows : on monte le partage avec une identité qui a le droit de modifier les ACL (<b>Contributeur élevé de partage SMB</b>, ou la clé du compte, qui agit en super-utilisateur), puis on utilise l'<b>Explorateur Windows</b> ou <b>icacls</b>.</p><p>Le portail ne gère pas les ACL NTFS d'Azure Files.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Partages de fichiers"
  ],
  "title": "Accès basé sur l'identité",
  "rows": [
   [
    "*Active Directory Domain Services (AD DS)",
    "Configurer"
   ],
   [
    "Microsoft Entra Domain Services",
    "Non"
   ],
   [
    "Microsoft Entra Kerberos",
    "Non"
   ]
  ]
 },
 "keep": "Comptes du domaine sur Azure Files = authentification AD DS (compte joint au domaine). Pas d'AD local, VM jointes à un domaine managé = Entra Domain Services. Partage + NTFS = le plus restrictif des deux. ACL NTFS d'Azure Files = depuis Windows (Explorateur/icacls), pas le portail."
},
{
 "id": "D2-315",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Des utilisateurs et des applications accèdent aux données blob et Data Lake. Que devez-vous attribuer ou utiliser dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "User22 (Lecteur) voit les conteneurs mais ne peut pas ouvrir un blob avec son compte Entra :",
   "o": [
    "Propriétaire",
    "Lecteur des données blob du stockage",
    "Contributeur sur le compte de stockage",
    "Lecteur et accès aux données (clés)"
   ],
   "a": 1
  },
  {
   "l": "azcopy login, chargement dans upload en erreur 403 — rôle manquant :",
   "o": [
    "Contributeur de compte de stockage",
    "Contributeur de réseau",
    "Contributeur aux données blob du stockage",
    "Lecteur et accès aux données"
   ],
   "a": 2
  },
  {
   "l": "Accès d'une application à un sous-dossier précis de Data Lake Storage Gen2 :",
   "o": [
    "Un rôle RBAC sur le sous-dossier",
    "Les ACL POSIX sur le dossier",
    "Une stratégie d'accès stockée sur le conteneur",
    "Le niveau d'accès Conteneur"
   ],
   "a": 1
  },
  {
   "l": "Un processus obtient un verrou exclusif en écriture sur un blob :",
   "o": [
    "Une SAS en lecture seule",
    "Une conservation légale",
    "Un verrou de ressource Azure",
    "Un bail (lease) sur le blob"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. User22 (Lecteur) voit les conteneurs mais ne peut pas ouvrir un blob avec son compte Entra :</b></p><p>Lecteur ne donne que le plan de contrôle. Pour lire des blobs avec son identité Entra, il faut un rôle de <b>données</b> : <b>Lecteur des données blob du stockage</b>.</p><p>Contributeur et Propriétaire peuvent lister les clés du compte et donc accéder aux données par clé, mais c'est trop de droits. Le rôle Lecteur et accès aux données permet de lister les clés : il donne aussi trop d'accès.</p><p><b>2. azcopy login, chargement dans upload en erreur 403 — rôle manquant :</b></p><p>Avec l'authentification Entra, AzCopy agit avec les droits de l'identité sur les <b>données</b>. Pour écrire des blobs, il faut <b>Contributeur aux données blob du stockage</b> (ou Propriétaire des données blob) sur le conteneur ou le compte.</p><p>Contributeur de compte de stockage gère le compte, mais n'accorde pas d'accès aux données avec l'identité. Lecteur et Contributeur de réseau non plus.</p><p><b>3. Accès d'une application à un sous-dossier précis de Data Lake Storage Gen2 :</b></p><p>Avec l'espace de noms hiérarchique, on peut attribuer des <b>ACL POSIX</b> (lecture, écriture, exécution) sur chaque dossier et fichier. Les rôles RBAC s'attribuent au plus finement sur un conteneur, pas sur un dossier.</p><p>Les deux mécanismes se combinent : le RBAC est évalué d'abord, puis les ACL.</p><p><b>4. Un processus obtient un verrou exclusif en écriture sur un blob :</b></p><p>Un <b>bail</b> donne à un client un verrou exclusif en écriture et en suppression sur un blob (ou un conteneur), pour une durée de 15 à 60 secondes ou infinie. Les autres clients doivent présenter l'ID du bail pour écrire.</p><p>La conservation légale bloque tout le monde. Un verrou de ressource agit sur le plan de contrôle. Une SAS en lecture seule n'empêche pas les autres d'écrire.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage40"
  ],
  "title": "storage40 | Contrôle d'accès (IAM)",
  "menu": [
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*Rôle",
    "Lecteur des données blob du stockage"
   ],
   [
    "Membres",
    "User22"
   ]
  ],
  "btn": "Vérifier + attribuer"
 },
 "keep": "Voir le compte = Lecteur ; lire les blobs avec Entra = rôle de données. AzCopy avec Entra = rôle de données (Contributeur aux données blob pour écrire). Droits par dossier dans Data Lake = ACL POSIX ; RBAC au mieux par conteneur. Verrou d'écriture exclusif sur un blob = bail."
},
{
 "id": "D2-316",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous devez transférer des données vers ou depuis Azure. Quelle solution devez-vous utiliser pour chaque transfert ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "500 Go entre storageA et storageB, dans deux régions, sans passer par votre poste :",
   "o": [
    "AzCopy copy entre les deux URL (copie de serveur à serveur)",
    "Robocopy",
    "Azure Import/Export",
    "Télécharger les blobs avec l'Explorateur Stockage puis les charger"
   ],
   "a": 0
  },
  {
   "l": "60 To en deux semaines, avec une connexion de 100 Mbit/s :",
   "o": [
    "Azure File Sync",
    "Azure Data Box",
    "Un VPN site à site",
    "AzCopy sur Internet"
   ],
   "a": 1
  },
  {
   "l": "Préparer vos propres disques pour Azure Import/Export — outil :",
   "o": [
    "Robocopy seul",
    "Azure Storage Explorer",
    "WAImportExport",
    "AzCopy"
   ],
   "a": 2
  },
  {
   "l": "Exporter 20 To de storage41 vers vos locaux sur des disques :",
   "o": [
    "Azure Import/Export ou Azure Data Box",
    "AzCopy sync sur une liaison de 100 Mbit/s",
    "Azure File Sync avec la hiérarchisation",
    "La réplication d'objets vers le site local"
   ],
   "a": 0
  },
  {
   "l": "25 To sur des disques SSD branchés en USB à un serveur :",
   "o": [
    "Data Box Disk",
    "Data Box Next Gen 525",
    "Azure Import/Export avec vos propres bandes",
    "Data Box Gateway"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. 500 Go entre storageA et storageB, dans deux régions, sans passer par votre poste :</b></p><p>Quand la source et la destination sont toutes deux des URL de stockage Azure, <b>AzCopy</b> utilise les API de copie de <b>serveur à serveur</b> : les données vont directement d'un compte à l'autre, sans passer par la machine qui lance la commande.</p><p>Télécharger puis charger fait transiter les données par votre poste. Import/Export utilise des disques physiques. Robocopy ne sait pas écrire dans des blobs.</p><p><b>2. 60 To en deux semaines, avec une connexion de 100 Mbit/s :</b></p><p>À 100 Mbit/s, 60 To prendraient plus de <b>55 jours</b> de transfert continu. <b>Azure Data Box</b> est un appareil physique que Microsoft vous envoie : vous y copiez les données sur votre réseau local, vous le renvoyez, et Microsoft les charge dans votre compte de stockage.</p><p>AzCopy, File Sync et un VPN passent tous par la même connexion trop lente.</p><p><b>3. Préparer vos propres disques pour Azure Import/Export — outil :</b></p><p>L'outil <b>WAImportExport</b> prépare les disques : il copie les données, les chiffre avec <b>BitLocker</b> et génère les fichiers journaux nécessaires à la tâche d'importation. (Pour Azure Files, un fichier CSV décrit les données.)</p><p>AzCopy et Storage Explorer transfèrent par le réseau. Robocopy seul ne produit ni chiffrement ni journal d'importation.</p><p><b>4. Exporter 20 To de storage41 vers vos locaux sur des disques :</b></p><p>Une <b>tâche d'exportation</b> Import/Export copie des blobs sur des disques que Microsoft vous renvoie. Azure Data Box propose aussi l'exportation. Attention : Import/Export n'exporte que des <b>blobs</b>, pas Azure Files.</p><p>File Sync, AzCopy et la réplication passent par le réseau.</p><p><b>5. 25 To sur des disques SSD branchés en USB à un serveur :</b></p><p><b>Data Box Disk</b> : des disques SSD chiffrés (environ 7 To utilisables chacun, jusqu'à 5 disques par commande, soit environ 35 To) connectés en USB ou SATA. Adapté à quelques dizaines de To.</p><p>Les appareils <b>Data Box Next Gen</b> visent des volumes bien plus grands (120 To ou 525 To utilisables). <b>Data Box Gateway</b> est une appliance virtuelle de transfert en ligne. Import/Export n'accepte pas de bandes.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storageB"
  ],
  "title": "Copie de serveur à serveur",
  "rows": [
   [
    "*Source",
    "https://storageA.blob.core.windows.net/…?SAS"
   ],
   [
    "Destination",
    "https://storageB.blob.core.windows.net/…?SAS"
   ]
  ]
 },
 "keep": "Entre deux comptes Azure, AzCopy copie de serveur à serveur. Gros volume + lien lent = Data Box (calculer : 60 To à 100 Mbit/s ≈ 55 jours). Import/Export avec vos disques = WAImportExport (BitLocker + journaux). Sortir de gros volumes hors ligne = Import/Export (blobs) ou Data Box. Quelques dizaines de To en SSD USB = Data Box Disk."
},
{
 "id": "D2-317",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Vous migrez plusieurs applications et usages vers Azure Storage. Vous devez choisir le service ou l'outil qui répond à chaque exigence.</p><p>Pour répondre, faites glisser les valeurs appropriées vers les exigences correspondantes. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "srcLabel": "Services et outils",
 "tgtHead": [
  "Exigence",
  "Service"
 ],
 "srcs": [
  "Stockage File d'attente",
  "Stockage Table",
  "Azure Files",
  "Azure Storage Explorer",
  "Azure File Sync avec hiérarchisation cloud",
  "Stockage Blob (blob d'ajout)",
  "Azure Data Box"
 ],
 "tgts": [
  {
   "l": "Messages d'une application web vers un traitement en arrière-plan, dans l'ordre d'arrivée",
   "a": 0
  },
  {
   "l": "Millions de profils d'appareils en paires clé/attributs, sans schéma, au plus bas coût",
   "a": 1
  },
  {
   "l": "Une application lit et écrit sur \\\\serveur\\donnees en SMB, code non modifiable",
   "a": 2
  },
  {
   "l": "Parcourir blobs, partages et files de plusieurs comptes depuis le bureau, et gérer des SAS",
   "a": 3
  },
  {
   "l": "10 agences : données centrales dans Azure, accès local rapide aux fichiers chauds",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Messages d'une application web vers un traitement en arrière-plan, dans l'ordre d'arrivée</b></p><p>Le <b>stockage File d'attente</b> stocke des messages (jusqu'à 64 Ko chacun) qu'un composant dépose et qu'un autre retire pour les traiter. C'est la solution simple pour découpler deux composants d'une application.</p><p>Le stockage Table stocke des données NoSQL clé/attributs. Azure Files sert aux partages SMB/NFS. Un blob d'ajout est un fichier, pas une file de messages.</p><p><b>2. Millions de profils d'appareils en paires clé/attributs, sans schéma, au plus bas coût</b></p><p>Le <b>stockage Table</b> est une base NoSQL clé/attributs, sans schéma : chaque entité a une clé de partition et une clé de ligne, et des propriétés libres. Il est très économique pour de grands volumes de données structurées simples.</p><p>Les files d'attente transportent des messages. Azure Files héberge des fichiers. Les blobs de pages servent aux disques.</p><p><b>3. Une application lit et écrit sur \\\\serveur\\donnees en SMB, code non modifiable</b></p><p><b>Azure Files</b> fournit des partages accessibles en <b>SMB</b> (et NFS), montés comme un lecteur réseau : l'application continue d'utiliser un chemin UNC sans modification.</p><p>Le stockage blob s'utilise par API REST ou SDK, ce qui demanderait de modifier le code. Les files d'attente et les tables ne sont pas des systèmes de fichiers.</p><p><b>4. Parcourir blobs, partages et files de plusieurs comptes depuis le bureau, et gérer des SAS</b></p><p><b>Azure Storage Explorer</b> est une application gratuite (Windows, macOS, Linux) pour gérer les blobs, fichiers, files d'attente et tables, créer des SAS, modifier les niveaux d'accès, etc. Elle utilise AzCopy pour les transferts.</p><p>Data Box est un appareil de transfert, File Sync synchronise des serveurs, Entra Connect synchronise des identités.</p><p><b>5. 10 agences : données centrales dans Azure, accès local rapide aux fichiers chauds</b></p><p><b>Azure File Sync</b> synchronise plusieurs serveurs (un point de terminaison serveur par agence) avec le même partage Azure (point de terminaison cloud). La <b>hiérarchisation cloud</b> garde en local les fichiers les plus utilisés.</p><p>Un compte par agence ne centralise rien. AzCopy ne fait pas de synchronisation multidirectionnelle. Data Box est un transfert ponctuel.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Files d'attente"
  ],
  "title": "commandes | File d'attente",
  "rows": [
   [
    "*Messages",
    "Jusqu'à 64 Ko chacun"
   ],
   [
    "Usage",
    "Découpler les composants"
   ]
  ],
  "btn": "+ Ajouter un message"
 },
 "keep": "Messages entre composants = Queue. NoSQL clé/attributs = Table. Table = NoSQL clé/attributs, très économique. Application qui utilise un partage SMB sans changement de code = Azure Files. Application de bureau pour le stockage = Azure Storage Explorer. Plusieurs sites + un jeu de données central + cache local = Azure File Sync."
},
{
 "id": "D2-318",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous automatisez des transferts avec AzCopy et donnez accès aux partages. Que devez-vous utiliser dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Chaque nuit, refléter D:\\Backup dans le conteneur backup, suppressions comprises :",
   "o": [
    "azcopy make sur le conteneur cible",
    "azcopy copy avec --recursive",
    "azcopy copy avec --overwrite=false",
    "azcopy sync --delete-destination=true"
   ],
   "a": 3
  },
  {
   "l": "Reprendre un transfert de 2 To interrompu à 70 % :",
   "o": [
    "Relancer azcopy copy avec --overwrite=true",
    "Supprimer le conteneur et relancer",
    "Utiliser azcopy make",
    "azcopy jobs resume &lt;id du travail&gt;"
   ],
   "a": 3
  },
  {
   "l": "Supprimer tous les blobs du dossier temp/ du conteneur data :",
   "o": [
    "azcopy make \"https://storage73.blob.core.windows.net/data/temp\"",
    "azcopy copy --overwrite=false sur le dossier temp",
    "azcopy remove \"…/data/temp?xSASx\" --recursive",
    "azcopy sync --delete-destination=true vers le dossier temp"
   ],
   "a": 2
  },
  {
   "l": "Monter share12 (SMB) depuis Linux :",
   "o": [
    "mount -t nfs storage52.blob.core.windows.net:/share12 /mnt/share12",
    "net use Z: \\\\storage52.file.core.windows.net\\share12 /persistent",
    "mount -t cifs //storage52.file.core.windows.net/share12 /mnt/share12",
    "azcopy mount https://storage52.file.core.windows.net/share12"
   ],
   "a": 2
  },
  {
   "l": "Se connecter à un seul conteneur dans Storage Explorer avec une URL de SAS de service :",
   "o": [
    "Avec la clé du compte uniquement",
    "Avec son compte Microsoft Entra uniquement",
    "Avec un point de terminaison privé du compte",
    "Avec « Conteneur d'objets blob » ou « URL SAS »"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Chaque nuit, refléter D:\\Backup dans le conteneur backup, suppressions comprises :</b></p><p><b>azcopy sync</b> compare la source et la destination (par la date de dernière modification) et ne copie que les différences. Avec <b>--delete-destination=true</b>, il supprime de la destination ce qui n'existe plus à la source.</p><p><code>azcopy copy</code> recopie tout et ne supprime jamais. <code>--overwrite=false</code> évite d'écraser, mais ne copie pas les fichiers modifiés et ne supprime rien. <code>make</code> crée un conteneur. Attention : sync est <b>unidirectionnel</b>.</p><p><b>2. Reprendre un transfert de 2 To interrompu à 70 % :</b></p><p>AzCopy enregistre l'état de chaque travail. <code>azcopy jobs list</code> affiche les travaux et <code>azcopy jobs resume &lt;id&gt;</code> reprend là où le transfert s'est arrêté (en refournissant la SAS si nécessaire).</p><p>Relancer avec --overwrite=true recopierait tout. Les autres options ne reprennent rien.</p><p><b>3. Supprimer tous les blobs du dossier temp/ du conteneur data :</b></p><p><code>azcopy remove</code> avec <code>--recursive</code> supprime tous les blobs sous le préfixe indiqué.</p><p>sync supprime seulement ce qui n'existe plus à la source. make crée un conteneur. copy ne supprime jamais rien.</p><p><b>4. Monter share12 (SMB) depuis Linux :</b></p><p>Sous Linux, un partage SMB se monte avec <b>mount -t cifs</b> (paquet cifs-utils), avec le nom du compte et la clé (ou un fichier d'informations d'identification) et la version SMB 3.x.</p><p>NFS est un autre protocole et l'adresse blob ne correspond pas à Azure Files. net use est une commande Windows. AzCopy ne monte pas de partage.</p><p><b>5. Se connecter à un seul conteneur dans Storage Explorer avec une URL de SAS de service :</b></p><p>Storage Explorer peut se connecter de plusieurs façons : compte Microsoft Entra (abonnements), clé et nom du compte, chaîne de connexion, ou <b>URL SAS</b> d'une ressource (compte, conteneur, partage, file). Avec une SAS de conteneur, il ne voit que ce conteneur.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "backup"
  ],
  "title": "backup | Vue d'ensemble",
  "rows": [
   [
    "*Synchronisation nocturne",
    "azcopy sync D:\\Backup <URL> --delete-destination=true"
   ]
  ]
 },
 "keep": "Miroir unidirectionnel = azcopy sync (+ --delete-destination pour supprimer). Transfert interrompu = azcopy jobs resume. Supprimer en masse = azcopy remove --recursive. SMB sous Linux = mount -t cifs. Storage Explorer accepte une URL SAS pour une seule ressource."
},
{
 "id": "D2-319",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous créez des comptes de stockage pour des charges spécialisées. Que devez-vous choisir pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Dossiers réels (renommage atomique) et ACL POSIX pour Azure Synapse :",
   "o": [
    "Le contrôle de version des blobs",
    "L'espace de noms hiérarchique",
    "Le protocole NFS 3.0 uniquement, sans espace de noms",
    "Les étendues de chiffrement par conteneur"
   ],
   "a": 1
  },
  {
   "l": "Montage d'un conteneur blob en NFS 3.0 depuis Linux — condition :",
   "o": [
    "Être un compte Premium de partages de fichiers",
    "Utiliser la redondance GRS ou RA-GRS",
    "Espace de noms hiérarchique et accès réseau limité",
    "Avoir l'accès anonyme activé sur le conteneur"
   ],
   "a": 2
  },
  {
   "l": "Partages Azure Files Premium en NFS — type de compte :",
   "o": [
    "Premium, type Partages de fichiers",
    "Premium, type Objets blob de blocs",
    "Premium, type Objets blob de pages",
    "Standard universel v2 avec partages volumineux"
   ],
   "a": 0
  },
  {
   "l": "Mise à niveau vers Data Lake Gen2 d'un compte avec contrôle de version et réplication d'objets :",
   "o": [
    "La mise à niveau crée un nouveau compte à côté",
    "La validation échoue : désactivez d'abord ces fonctions",
    "La mise à niveau réussit et désactive ces fonctions seule",
    "La mise à niveau est réversible à tout moment"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Dossiers réels (renommage atomique) et ACL POSIX pour Azure Synapse :</b></p><p>L'<b>espace de noms hiérarchique</b> transforme le stockage blob en <b>Azure Data Lake Storage Gen2</b> : vrais répertoires (renommer ou supprimer un dossier est atomique), ACL de type POSIX sur les dossiers et fichiers, point de terminaison <code>dfs.core.windows.net</code>.</p><p>On l'active à la création, ou par une mise à niveau irréversible d'un compte existant. Certaines fonctions blob (comme la réplication d'objets) ne sont pas compatibles.</p><p><b>2. Montage d'un conteneur blob en NFS 3.0 depuis Linux — condition :</b></p><p>NFS 3.0 sur le stockage <b>blob</b> exige l'<b>espace de noms hiérarchique</b>, activé à la création avec l'option NFS v3, et un accès réseau restreint (réseaux virtuels sélectionnés ou point de terminaison privé), car NFS 3.0 n'utilise pas d'authentification par compte.</p><p>Le compte Premium partages de fichiers concerne NFS sur <b>Azure Files</b>, un autre service. La redondance et l'accès anonyme ne sont pas en cause.</p><p><b>3. Partages Azure Files Premium en NFS — type de compte :</b></p><p>Les partages de fichiers <b>Premium</b> (SSD) n'existent que dans un compte <b>Premium de type Partages de fichiers</b> (FileStorage). C'est aussi le seul type qui prend en charge les partages <b>NFS</b>.</p><ul><li><b>Standard universel v2</b> : partages SMB standard (HDD), pas de NFS pour Azure Files.</li><li><b>Objets blob de blocs Premium</b> : blobs à faible latence, pas de partages de fichiers.</li><li><b>Objets blob de pages Premium</b> : surtout pour des disques non managés.</li></ul><p><b>4. Mise à niveau vers Data Lake Gen2 d'un compte avec contrôle de version et réplication d'objets :</b></p><p>La mise à niveau vers l'espace de noms hiérarchique commence par une <b>validation</b>. Les fonctions incompatibles (comme la réplication d'objets, certaines options de contrôle de version ou de restauration) doivent être désactivées avant. La mise à niveau est <b>irréversible</b> et se fait sur le même compte.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Créer un compte de stockage",
  "menu": [
   "Informations de base",
   "*Avancé"
  ],
  "rows": [
   [
    "*Activer l'espace de noms hiérarchique",
    "Coché (Data Lake Storage Gen2)"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Vrais dossiers + ACL POSIX = espace de noms hiérarchique (Data Lake Gen2). NFS 3.0 sur blobs = espace de noms hiérarchique + accès réseau restreint. Partages Premium ou NFS = compte Premium de type Partages de fichiers (FileStorage). Mise à niveau Data Lake : validation, fonctions incompatibles à désactiver, irréversible."
},
{
 "id": "D2-320",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous dimensionnez des partages de fichiers Azure. Que devez-vous choisir ou répondre pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Partage Standard de 50 Tio dans un compte v2 créé il y a deux ans :",
   "o": [
    "Le chiffrement d'infrastructure du compte",
    "L'espace de noms hiérarchique",
    "Les partages de fichiers volumineux",
    "Le protocole NFS"
   ],
   "a": 2
  },
  {
   "l": "Partage Premium plus rapide pour des clients Windows aux connexions parallèles :",
   "o": [
    "SMB Multichannel",
    "Le protocole NFS",
    "L'accès anonyme",
    "La géoredondance"
   ],
   "a": 0
  },
  {
   "l": "share13 passe du niveau Chaud à Froid — impact :",
   "o": [
    "Le partage reste accessible ; stockage moins cher, transactions plus chères",
    "Les fichiers doivent être réhydratés depuis le niveau froid avant d'être lus",
    "Le partage devient Premium",
    "Le partage est hors ligne pendant la conversion de niveau"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Partage Standard de 50 Tio dans un compte v2 créé il y a deux ans :</b></p><p>Sans l'option <b>Partages de fichiers volumineux</b>, un partage Standard est limité à 5 Tio. Avec elle, il peut atteindre <b>100 Tio</b>. Les comptes récents l'ont souvent activée par défaut ; sur un ancien compte, on l'active dans Configuration (sans retour arrière possible).</p><p>Les autres options n'ont pas de lien avec la taille des partages.</p><p><b>2. Partage Premium plus rapide pour des clients Windows aux connexions parallèles :</b></p><p><b>SMB Multichannel</b> permet à un client SMB 3.x d'utiliser plusieurs connexions réseau vers un partage Premium, ce qui augmente le débit et les IOPS. Il s'active dans les paramètres de partage de fichiers du compte FileStorage.</p><p><b>3. share13 passe du niveau Chaud à Froid — impact :</b></p><p>Le changement de niveau d'un partage Standard se fait <b>en ligne</b>. Le niveau Froid a un stockage moins cher et des transactions plus chères. Un changement de niveau génère des frais de transaction pour déplacer les données.</p><p>Azure Files n'a pas de niveau hors ligne comme Archive. On ne passe pas un partage Standard en Premium : il faut un autre compte.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1"
  ],
  "title": "storage1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Partages de fichiers volumineux",
    "Activé (jusqu'à 100 Tio)"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Partage Standard > 5 Tio = partages de fichiers volumineux. Plus de débit SMB sur Premium = SMB Multichannel. Niveau d'un partage Standard : changeable en ligne, sans hors ligne."
},
{
 "id": "D2-321",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous administrez plusieurs comptes de stockage et leurs files d'attente. Que devez-vous faire ou répondre pour chaque demande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Nom valide pour un nouveau compte :",
   "o": [
    "st",
    "stockageprod01",
    "stockage_prod_01",
    "Stockage-Prod01"
   ],
   "a": 1
  },
  {
   "l": "Déplacer storage34 de France Central vers West Europe :",
   "o": [
    "Lancer un basculement géographique vers West Europe",
    "Utiliser l'option Déplacer vers un autre groupe de ressources",
    "Recréer le compte en West Europe et copier avec AzCopy",
    "Changer la région dans la page Configuration"
   ],
   "a": 2
  },
  {
   "l": "Passer storage4 de LRS à ZRS sans interrompre l'accès :",
   "o": [
    "Modifier la redondance dans Configuration, comme pour GRS",
    "Activer la géoréplication dans le pare-feu du compte",
    "Supprimer le compte et le recréer en ZRS",
    "Demander une conversion vers ZRS"
   ],
   "a": 3
  },
  {
   "l": "Un partenaire envoie des messages dans la file commandes sans lire ni supprimer — autorisation SAS :",
   "o": [
    "Lecture (r) et Traitement (p)",
    "Liste (l) sur le compte",
    "Ajouter (a) sur la file commandes",
    "Suppression (d) sur la file commandes"
   ],
   "a": 2
  },
  {
   "l": "Durée de vie par défaut d'un message de file d'attente :",
   "o": [
    "24 heures",
    "Indéfiniment",
    "30 jours",
    "7 jours"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Nom valide pour un nouveau compte :</b></p><p>Un nom de compte de stockage doit contenir <b>3 à 24 caractères</b>, uniquement des <b>lettres minuscules et des chiffres</b>, et être <b>unique dans tout Azure</b>, car il fait partie de l'URL (<code>stockageprod01.blob.core.windows.net</code>).</p><p>Les majuscules, tirets et traits de soulignement sont interdits. « st » ne fait que 2 caractères.</p><p><b>2. Déplacer storage34 de France Central vers West Europe :</b></p><p>Un compte de stockage ne peut pas changer de région. On <b>exporte son modèle</b> (pour recréer la même configuration), on crée le nouveau compte dans la région cible, puis on <b>copie les données</b> (AzCopy, copie de serveur à serveur), avant de supprimer l'ancien compte.</p><p>Déplacer vers un autre groupe de ressources ne change pas la région. Un basculement géographique bascule vers la région jumelée (France South), pas vers West Europe, et ce n'est pas une méthode de migration.</p><p><b>3. Passer storage4 de LRS à ZRS sans interrompre l'accès :</b></p><p>Passer de LRS à GRS se fait d'un simple clic dans <b>Configuration</b>. Mais passer à <b>ZRS</b> change la répartition physique dans la région : il faut une <b>conversion</b> (lancée depuis la page Redondance du portail ou via une demande de support), réalisée sans interruption.</p><p>On peut aussi migrer manuellement (nouveau compte + copie avec AzCopy), mais cela demande une interruption. Le pare-feu n'a aucun lien avec la redondance.</p><p><b>4. Un partenaire envoie des messages dans la file commandes sans lire ni supprimer — autorisation SAS :</b></p><p>Pour une file d'attente, l'autorisation <b>Ajouter</b> permet d'insérer des messages. <b>Lecture</b> permet de consulter les messages, <b>Traitement</b> (process) de les retirer (Get + Delete). Une SAS de service limitée à la file commandes, avec l'autorisation Ajouter et une expiration à 7 jours, suffit.</p><p><b>5. Durée de vie par défaut d'un message de file d'attente :</b></p><p>La durée de vie par défaut d'un message de file d'attente est de <b>7 jours</b>. On peut la modifier lors de l'ajout (y compris -1 pour ne jamais expirer).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "Créer"
  ],
  "title": "Créer un compte de stockage",
  "menu": [
   "*Informations de base"
  ],
  "rows": [
   [
    "*Nom du compte de stockage",
    "stockageprod01"
   ],
   [
    "Règle",
    "3 à 24 caractères, minuscules et chiffres, unique dans Azure"
   ]
  ]
 },
 "keep": "Nom de compte : 3-24 caractères, minuscules + chiffres, unique mondialement (il est dans l'URL). Changer de région = nouveau compte + copie. Le compte ne se déplace pas. Ajouter G (géo) = simple changement. Ajouter Z (zones) = conversion. Déposer des messages = autorisation Ajouter ; les retirer = Traitement. Message de file d'attente : 7 jours par défaut."
},
{
 "id": "D2-322",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Des documents réglementés et des comptes de production doivent être protégés. Que devez-vous configurer pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "legal1 : ni modification ni suppression tant que dure un litige de durée inconnue :",
   "o": [
    "Une stratégie de rétention basée sur le temps",
    "Un verrou de type Supprimer sur le compte",
    "Une règle de gestion du cycle de vie",
    "Une conservation légale sur le conteneur"
   ],
   "a": 3
  },
  {
   "l": "Rapports non modifiables 7 ans, même par un administrateur, règle non raccourcissable :",
   "o": [
    "Une rétention temporelle de 7 ans, verrouillée",
    "Une conservation légale sur le conteneur",
    "Une rétention temporelle de 7 ans, déverrouillée",
    "Un verrou Suppression impossible sur le compte"
   ],
   "a": 0
  },
  {
   "l": "Empêcher la suppression accidentelle du compte storage33 :",
   "o": [
    "La redondance RA-GRS du compte",
    "Un verrou Suppression impossible",
    "La suppression réversible des blobs et conteneurs",
    "Une stratégie de rétention temporelle"
   ],
   "a": 1
  },
  {
   "l": "Stratégies d'immuabilité différentes pour des blobs d'un même conteneur — prérequis :",
   "o": [
    "La géoredondance avec lecture dans la région secondaire",
    "Le contrôle de version et l'immuabilité par version",
    "La suppression réversible des conteneurs",
    "L'espace de noms hiérarchique du compte"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. legal1 : ni modification ni suppression tant que dure un litige de durée inconnue :</b></p><p>Le stockage <b>immuable</b> (WORM : écriture unique, lectures multiples) propose deux types de stratégies sur un conteneur :</p><ul><li><b>Rétention basée sur le temps</b> : les blobs sont protégés pendant une durée fixée (par exemple 7 ans).</li><li><b>Conservation légale</b> : les blobs sont protégés sans durée, jusqu'à ce que la conservation soit retirée. C'est fait pour un litige dont on ne connaît pas la fin.</li></ul><p>Un verrou de ressource protège le compte sur le plan de contrôle, pas les fichiers. Le cycle de vie déplace ou supprime des blobs, il ne protège rien.</p><p><b>2. Rapports non modifiables 7 ans, même par un administrateur, règle non raccourcissable :</b></p><p>Une <b>stratégie de rétention temporelle</b> rend les blobs immuables (WORM : écriture unique, lectures multiples) pendant la durée choisie. Une fois <b>verrouillée</b>, elle ne peut plus être supprimée ni raccourcie ; on peut seulement l'allonger.</p><ul><li>Une <b>conservation légale</b> n'a pas de durée : elle dure jusqu'à ce qu'on la retire.</li><li>Une stratégie <b>déverrouillée</b> peut être modifiée ou supprimée : elle sert aux tests.</li><li>Un <b>verrou</b> protège le compte, pas les données.</li></ul><p><b>3. Empêcher la suppression accidentelle du compte storage33 :</b></p><p>Un <b>verrou Suppression impossible</b> empêche la suppression du compte, même par un Propriétaire, tant que le verrou n'est pas retiré.</p><p>La suppression réversible et l'immuabilité protègent les <b>données</b>, pas le compte. RA-GRS protège contre une panne régionale, pas contre une suppression.</p><p><b>4. Stratégies d'immuabilité différentes pour des blobs d'un même conteneur — prérequis :</b></p><p>L'<b>immuabilité au niveau de la version</b> permet d'appliquer une stratégie de rétention ou une conservation légale à un blob ou une version précis. Elle exige le <b>contrôle de version</b> et s'active sur le compte ou le conteneur.</p><p>Sans elle, les stratégies s'appliquent au niveau du conteneur.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage1",
   "Conteneurs",
   "legal1"
  ],
  "title": "legal1 | Stratégie d'accès",
  "menu": [
   "Vue d'ensemble",
   "*Stratégie d'accès"
  ],
  "rows": [
   [
    "#Stockage d'objets blob immuable",
    ""
   ],
   [
    "*Type de stratégie",
    "Conservation légale"
   ],
   [
    "Étiquette",
    "Litige-2026"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Durée connue = rétention basée sur le temps. Durée inconnue = conservation légale. Rétention verrouillée : ni suppression ni raccourcissement possible, même par un admin. Protéger le compte = verrou ; protéger les données = suppression réversible, versions, immuabilité. Immuabilité par blob = immuabilité au niveau de la version (versioning requis)."
},
{
 "id": "D2-323",
 "dom": 2,
 "type": "hot",
 "stem": "<p>L'équipe sécurité définit le chiffrement des comptes de stockage. Que devez-vous configurer ou répondre pour chaque exigence ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Clés de chiffrement de storage14 sous votre contrôle, rotation gérée par vous :",
   "o": [
    "Une SAS de délégation d'utilisateur",
    "Le transfert sécurisé obligatoire",
    "Des clés gérées par le client (Key Vault)",
    "Le chiffrement géré par Microsoft (par défaut)"
   ],
   "a": 2
  },
  {
   "l": "Le compte utilise automatiquement chaque nouvelle version de la clé :",
   "o": [
    "Indiquer l'URI de la clé sans version",
    "Copier la clé dans le compte de stockage",
    "Indiquer l'URI d'une version précise de la clé",
    "Utiliser une SAS de compte à la place"
   ],
   "a": 0
  },
  {
   "l": "Algorithme de chiffrement au repos utilisé par défaut :",
   "o": [
    "AES 256 bits, clés gérées par Microsoft",
    "3DES, clés gérées par le client",
    "Aucun chiffrement par défaut",
    "RSA 2048 bits, clés gérées par Microsoft"
   ],
   "a": 0
  },
  {
   "l": "Double chiffrement (service et infrastructure) — moment de l'activation :",
   "o": [
    "Il est activé par défaut sur tous les comptes",
    "Après avoir copié les données dans le compte",
    "À tout moment, depuis la page Chiffrement",
    "À la création du compte de stockage"
   ],
   "a": 3
  },
  {
   "l": "Une clé différente par équipe, au niveau du conteneur :",
   "o": [
    "Des étendues de chiffrement",
    "Deux comptes de stockage",
    "Des SAS différentes",
    "Le chiffrement d'infrastructure"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Clés de chiffrement de storage14 sous votre contrôle, rotation gérée par vous :</b></p><p>Le chiffrement du service de stockage (SSE) est toujours actif. Par défaut, Microsoft gère les clés. Avec des <b>clés gérées par le client</b>, la clé de chiffrement est dans votre <b>coffre de clés</b> (ou un HSM managé) : vous contrôlez sa rotation et pouvez révoquer l'accès.</p><p>Le coffre doit avoir la <b>suppression réversible</b> et la <b>protection contre le vidage</b>, et le compte de stockage utilise une identité managée pour lire la clé.</p><p><b>2. Le compte utilise automatiquement chaque nouvelle version de la clé :</b></p><p>Si l'on indique l'URI de la clé <b>sans numéro de version</b>, Azure Storage vérifie régulièrement et adopte automatiquement la dernière version. Avec une version précise, il faut mettre à jour le compte à chaque rotation.</p><p><b>3. Algorithme de chiffrement au repos utilisé par défaut :</b></p><p>Le <b>chiffrement du service de stockage</b> (SSE) chiffre toujours les données au repos avec <b>AES 256 bits</b>. Il ne peut pas être désactivé. Les clés sont gérées par Microsoft par défaut, ou par vous (clés gérées par le client).</p><p><b>4. Double chiffrement (service et infrastructure) — moment de l'activation :</b></p><p>Le <b>chiffrement d'infrastructure</b> ajoute une seconde couche de chiffrement avec une autre clé et un autre algorithme. Il se choisit <b>uniquement à la création</b> du compte (onglet Chiffrement) et ne peut pas être activé ensuite.</p><p>Il n'est pas activé par défaut. Pour un compte existant, il faut créer un nouveau compte et y copier les données.</p><p><b>5. Une clé différente par équipe, au niveau du conteneur :</b></p><p>Les <b>étendues de chiffrement</b> (encryption scopes) permettent d'utiliser des clés différentes (gérées par Microsoft ou par le client) au niveau d'un conteneur ou d'un blob, dans un même compte.</p><p>Deux comptes marcheraient mais ne répondent pas à « au niveau du conteneur ». Une SAS ne chiffre rien. Le chiffrement d'infrastructure s'applique à tout le compte.</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage14"
  ],
  "title": "storage14 | Chiffrement",
  "menu": [
   "*Chiffrement"
  ],
  "rows": [
   [
    "*Type de chiffrement",
    "Clés gérées par le client"
   ],
   [
    "Coffre de clés",
    "KV-Stockage / cle-sse"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Contrôler la clé de chiffrement = clés gérées par le client dans Key Vault. Rotation automatique = URI de clé sans version. SSE = AES-256, toujours actif, clés Microsoft ou client. Chiffrement d'infrastructure = à la création seulement. Clés différentes par conteneur dans un même compte = étendues de chiffrement."
},
{
 "id": "D2-324",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous choisissez la redondance de plusieurs comptes de stockage. Que devez-vous choisir ou répondre dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "storage3 (GRS) après un basculement géré par le client — redondance :",
   "o": [
    "ZRS, dans la nouvelle région primaire",
    "RA-GRS, dans l'ancienne région primaire",
    "LRS, dans la nouvelle région primaire",
    "GRS, dans la nouvelle région primaire"
   ],
   "a": 2
  },
  {
   "l": "Compte Premium objets blob de blocs — redondances disponibles :",
   "o": [
    "LRS et ZRS uniquement",
    "LRS, ZRS, GRS et GZRS",
    "Toutes, y compris RA-GZRS",
    "GRS et RA-GRS uniquement"
   ],
   "a": 0
  },
  {
   "l": "Lectures RA-GZRS en retard sur le primaire — raison :",
   "o": [
    "La lecture secondaire passe par le niveau Archive",
    "La région secondaire n'est accessible qu'en écriture",
    "La réplication vers le secondaire est asynchrone",
    "RA-GZRS ne réplique que la nuit, en heures creuses"
   ],
   "a": 2
  },
  {
   "l": "Lecture secondaire seulement après une panne, perte d'une zone tolérée, coût minimal :",
   "o": [
    "GRS",
    "RA-GZRS",
    "GZRS",
    "ZRS"
   ],
   "a": 2
  },
  {
   "l": "Continuer à écrire sans intervention si la région primaire tombe :",
   "o": [
    "ZRS écrit aussi dans la région jumelée",
    "Aucune : il faut un basculement",
    "GZRS bascule automatiquement les écritures",
    "RA-GRS permet d'écrire dans le secondaire"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. storage3 (GRS) après un basculement géré par le client — redondance :</b></p><p>Après un basculement non planifié, la région secondaire devient primaire et le compte est configuré en <b>LRS</b>. Il n'a plus de copie géographique tant que vous ne reconfigurez pas GRS (ce qui relance une copie complète vers une nouvelle secondaire).</p><p>Points à retenir : le basculement peut entraîner une <b>perte des données</b> écrites après l'heure de dernière synchronisation, et il ne faut le lancer que si la panne dure.</p><p><b>2. Compte Premium objets blob de blocs — redondances disponibles :</b></p><p>Les comptes <b>Premium</b> (objets blob de blocs, partages de fichiers, objets blob de pages) ne prennent en charge que <b>LRS et ZRS</b>. La géoredondance (GRS, GZRS et leurs versions RA-) est réservée aux comptes Standard universel v2.</p><p><b>3. Lectures RA-GZRS en retard sur le primaire — raison :</b></p><p>La réplication géographique est <b>asynchrone</b> : la région secondaire peut avoir quelques minutes de retard (l'objectif de point de récupération est généralement inférieur à 15 minutes, sans garantie). L'application doit tolérer cette cohérence éventuelle.</p><p><b>4. Lecture secondaire seulement après une panne, perte d'une zone tolérée, coût minimal :</b></p><p><b>GZRS</b> : ZRS dans la région primaire (résiste à la perte d'une zone) et copie dans la région secondaire, accessible après basculement. RA-GZRS coûte plus cher pour une lecture permanente non demandée.</p><p>ZRS n'a pas de copie dans une autre région. GRS ne protège pas contre la perte d'une zone dans la région primaire (LRS dans un seul centre de données).</p><p><b>5. Continuer à écrire sans intervention si la région primaire tombe :</b></p><p>La région secondaire des comptes géoredondants est en <b>lecture seule</b> (avec RA-) jusqu'à un <b>basculement</b>, qui doit être lancé (par le client, ou par Microsoft dans des cas extrêmes). RA-GRS et RA-GZRS ne permettent que la lecture.</p><p>ZRS reste dans une seule région. Pour écrire sans interruption dans plusieurs régions, il faut une architecture applicative (par exemple deux comptes).</p>",
 "portal": {
  "path": [
   "Comptes de stockage",
   "storage3"
  ],
  "title": "storage3 | Redondance",
  "menu": [
   "Vue d'ensemble",
   "*Redondance"
  ],
  "rows": [
   [
    "*Préparer le basculement",
    "Type : non planifié (géré par le client)"
   ],
   [
    "Après basculement",
    "LRS dans l'ancienne région secondaire"
   ]
  ],
  "btn": "Préparer le basculement"
 },
 "keep": "Après basculement non planifié : LRS dans la nouvelle primaire ; reconfigurer GRS ensuite. Premium = LRS ou ZRS uniquement ; la géoredondance est réservée au Standard. Lecture secondaire = cohérence éventuelle. Zone + région, lecture après basculement seulement = GZRS. Secondaire = lecture seule ; écrire = basculement."
}
);
