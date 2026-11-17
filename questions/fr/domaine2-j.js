/* Domaine 2 : stockage (lot J : D2-431 à D2-440, scénarios longs) */
AZ.questions.push(
{
 "id": "D2-431",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le pare-feu du compte stpartner (GPv2, France Central) est configuré en « Activé depuis certains réseaux ». Plusieurs demandes sont en cours :</p><ul><li>le partenaire Delta accède depuis son réseau 203.0.113.0/24 ; une règle IP pour cette plage fonctionne ;</li><li>l'équipe réseau a ajouté une règle IP 10.20.0.0/16 pour autoriser VNet-App (France Central), mais les VM de ce réseau sont toujours refusées ;</li><li>les VM de snet-app, qui ont un point de terminaison de service Microsoft.Storage, ne doivent pouvoir écrire que dans stpartner et dans aucun autre compte de stockage d'Azure, pour limiter l'exfiltration ;</li><li>les utilisateurs d'Asie téléchargent de gros fichiers ; Contoso veut que leur trafic entre le plus tôt possible sur le réseau mondial de Microsoft.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Pourquoi la règle 10.20.0.0/16 échoue :",
   "o": [
    "Une règle IP doit viser un /24 au plus",
    "Les règles IP exigent un redémarrage du compte",
    "Plages privées non admises en règle IP",
    "La plage chevauche celle du partenaire Delta"
   ],
   "a": 2
  },
  {
   "l": "Correction pour VNet-App :",
   "o": [
    "Une seconde règle IP plus large, en /8",
    "Règle IP sur l'adresse publique des VM",
    "Exception « services Azure approuvés »",
    "Règle de réseau virtuel pour snet-app"
   ],
   "a": 3
  },
  {
   "l": "Limiter à stpartner seulement :",
   "o": [
    "Un verrou ReadOnly sur les autres comptes",
    "Une règle d'instance de ressource",
    "Stratégie de point de terminaison de service",
    "Un NSG avec l'étiquette de service Storage"
   ],
   "a": 2
  },
  {
   "l": "Utilisateurs d'Asie :",
   "o": [
    "Routage réseau Microsoft",
    "Un point de terminaison privé en Asie",
    "Préférence de routage : transit Internet",
    "Un second compte RA-GRS en Asie"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Règles IP.</b> Elles n'acceptent que des adresses publiques ; les plages privées (RFC 1918) ne sont pas admises. Les VM d'une même région joignent le compte par des adresses privées : il faut une règle de réseau virtuel avec un point de terminaison de service (ou un point de terminaison privé).<b>Stratégie de point de terminaison de service.</b> Associée au sous-réseau, elle limite le trafic du point de terminaison de service vers les comptes de stockage listés. Un NSG avec l'étiquette Storage autorise tous les comptes.<b>Préférence de routage.</b> Avec le routage réseau Microsoft (par défaut), le trafic entre sur le réseau Microsoft au point de présence le plus proche de l'utilisateur ; le routage Internet le fait transiter le plus longtemps possible par Internet.",
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
    "*Pourquoi la règle 10.20.0.0/16 échoue",
    "Plages privées non admises en règle IP"
   ],
   [
    "Correction pour VNet-App",
    "Règle de réseau virtuel pour snet-app"
   ],
   [
    "Limiter à stpartner seulement",
    "Stratégie de point de terminaison de service"
   ],
   [
    "Utilisateurs d'Asie",
    "Routage réseau Microsoft"
   ]
  ]
 },
 "keep": "Règle IP = publique uniquement. VNet = règle de réseau virtuel. Anti-exfiltration = stratégie de point de terminaison de service. Entrée rapide = routage Microsoft."
},
{
 "id": "D2-432",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Un développeur génère un SAS de service pour le conteneur invoices du compte stbilling. Les problèmes et exigences :</p><ul><li>le SAS a été généré avec une heure de début égale à l'heure actuelle ; certains clients reçoivent une erreur 403 pendant les premières minutes ;</li><li>l'application cliente doit pouvoir lister les blobs du conteneur et les télécharger, sans pouvoir écrire ;</li><li>le SAS ne doit être utilisable que depuis l'adresse publique 198.51.100.10 de l'application ;</li><li>le jeton ne doit jamais circuler en clair sur le réseau.</li></ul><p>Que devez-vous définir ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Erreurs 403 au début :",
   "o": [
    "Heure de début 15 min plus tôt",
    "Régénérer la clé du compte",
    "Créer le SAS après la propagation DNS",
    "Expiration plus lointaine"
   ],
   "a": 0
  },
  {
   "l": "Autorisations (sp) :",
   "o": [
    "rl",
    "r",
    "rwl",
    "racwdl"
   ],
   "a": 0
  },
  {
   "l": "Adresse autorisée :",
   "o": [
    "sr=198.51.100.10",
    "spr=198.51.100.10",
    "si=198.51.100.10",
    "sip=198.51.100.10"
   ],
   "a": 3
  },
  {
   "l": "Protocole :",
   "o": [
    "spr=https",
    "spr=https,http",
    "sv=https",
    "ss=https"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Décalage d'horloge.</b> Une heure de début égale à l'heure actuelle peut échouer à cause de légers écarts d'horloge entre serveurs : on la fixe environ 15 minutes plus tôt, ou on l'omet (le SAS est alors valide immédiatement).<b>Autorisations.</b> r = lecture, l = liste. Sans l, le client ne peut pas lister le conteneur.<b>Paramètres.</b> sip limite les adresses IP sources, spr les protocoles (https seul refuse HTTP), si référence une stratégie d'accès stockée, sr la ressource visée (b, c…).",
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
    "*Erreurs 403 au début",
    "Heure de début 15 min plus tôt"
   ],
   [
    "Autorisations (sp)",
    "rl"
   ],
   [
    "Adresse autorisée",
    "sip=198.51.100.10"
   ],
   [
    "Protocole",
    "spr=https"
   ]
  ]
 },
 "keep": "Début -15 min. Lister = l. IP = sip. HTTPS = spr=https."
},
{
 "id": "D2-433",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Le vendredi, un administrateur a supprimé par erreur le compte de stockage stinvoices (GPv2) du groupe RG-Finance ; le groupe de ressources existe toujours. Le lundi suivant, la direction demande :</p><ul><li>de récupérer le compte, avec ses données ;</li><li>d'empêcher qu'un compte de stockage de RG-Finance soit à nouveau supprimé, tout en laissant les équipes modifier sa configuration et ses données ;</li><li>un collègue propose un verrou ReadOnly à la place ; vous devez évaluer l'effet sur les applications qui accèdent aux données avec la clé du compte récupérée par l'API ;</li><li>le compte ststage doit pouvoir être supprimé par son équipe, qui a le rôle Owner, malgré un verrou hérité du groupe.</li></ul><p>Que devez-vous faire, et que se passera-t-il ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Compte supprimé :",
   "o": [
    "Le restaurer (dans les 14 jours)",
    "Impossible : la suppression est définitive",
    "Le recréer avec le même nom, données incluses",
    "Ouvrir un ticket, seul recours possible"
   ],
   "a": 0
  },
  {
   "l": "Empêcher la suppression :",
   "o": [
    "Verrou CanNotDelete sur RG-Finance",
    "Retirer le rôle Contributor aux équipes",
    "Une stratégie Azure Audit",
    "Verrou ReadOnly sur RG-Finance"
   ],
   "a": 0
  },
  {
   "l": "Effet d'un verrou ReadOnly :",
   "o": [
    "Les blobs deviennent immuables",
    "Le compte passe en lecture seule pour tous",
    "Aucun effet sur l'accès aux clés",
    "listKeys est bloqué (requête POST)"
   ],
   "a": 3
  },
  {
   "l": "Suppression de ststage :",
   "o": [
    "Retirer d'abord le verrou du groupe",
    "Owner suffit malgré le verrou",
    "Ajouter un verrou CanDelete sur ststage",
    "Déplacer d'abord le verrou sur le compte"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Restauration.</b> Un compte supprimé peut être restauré pendant 14 jours depuis le portail (ou le support), si aucun compte du même nom n'a été recréé et si le groupe de ressources existe.<b>CanNotDelete.</b> Il empêche la suppression mais autorise la lecture et la modification ; hérité par les ressources du groupe.<b>ReadOnly.</b> Il bloque les opérations de gestion qui modifient, y compris les requêtes POST comme listKeys : les applications qui récupèrent la clé par l'API échouent, et le portail ne peut plus utiliser la clé.<b>Verrous.</b> Ils s'appliquent à tous les utilisateurs, Owner compris : il faut retirer le verrou (droit Microsoft.Authorization/locks/delete) avant de supprimer. Il n'existe pas de verrou « CanDelete ».",
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
    "*Compte supprimé",
    "Le restaurer (dans les 14 jours)"
   ],
   [
    "Empêcher la suppression",
    "Verrou CanNotDelete sur RG-Finance"
   ],
   [
    "Effet d'un verrou ReadOnly",
    "listKeys est bloqué (requête POST)"
   ],
   [
    "Suppression de ststage",
    "Retirer d'abord le verrou du groupe"
   ]
  ]
 },
 "keep": "Compte supprimé = 14 jours. Pas de suppression = CanNotDelete. ReadOnly = bloque listKeys. Verrou = s'applique aussi à Owner."
},
{
 "id": "D2-434",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam veut déclencher un traitement automatique chaque fois qu'une facture PDF est déposée dans le compte stinbox (GPv2) :</p><ul><li>seuls les blobs créés dans le conteneur incoming doivent déclencher le traitement, pas ceux des autres conteneurs ni les suppressions ;</li><li>seuls les fichiers .pdf doivent être pris en compte ;</li><li>le traitement est une fonction Azure qui doit être appelée en mode push, sans interroger le compte en boucle ;</li><li>si la fonction est indisponible pendant une heure, aucun événement ne doit être perdu.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Mécanisme :",
   "o": [
    "Un abonnement Event Grid sur le compte",
    "Une règle de cycle de vie sur incoming",
    "Le flux de modifications lu chaque minute",
    "Une alerte de métrique sur Transactions"
   ],
   "a": 0
  },
  {
   "l": "Type d'événement :",
   "o": [
    "Microsoft.Resources.ResourceWriteSuccess",
    "Microsoft.Storage.BlobDeleted",
    "Microsoft.Storage.BlobTierChanged",
    "Microsoft.Storage.BlobCreated"
   ],
   "a": 3
  },
  {
   "l": "Filtre d'objet :",
   "o": [
    "Début : …/containers/incoming/ ; fin : .pdf",
    "Début : /incoming/*.pdf, sans filtre de fin",
    "Contient : stinbox/incoming ; fin : *.pdf",
    "Début : incoming/ ; fin : pdf (sans le point)"
   ],
   "a": 0
  },
  {
   "l": "Indisponibilité d'une heure :",
   "o": [
    "Rien : les événements sont perdus après 5 min",
    "Nouvelles tentatives + lettres mortes",
    "Le flux de modifications seul",
    "Une seconde fonction en veille"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Event Grid.</b> Les comptes GPv2 publient des événements dans une rubrique système ; un abonnement pousse les événements vers un gestionnaire (fonction, webhook, file…).<b>Filtres.</b> BlobCreated pour les créations ; le filtre d'objet utilise le chemin complet /blobServices/default/containers/incoming/blobs/… : « commence par » le conteneur, « se termine par » .pdf.<b>Fiabilité.</b> Event Grid réessaie pendant 24 heures par défaut (politique de nouvelles tentatives réglable) ; la destination de lettres mortes (un conteneur de stockage) conserve les événements non remis.",
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
    "*Mécanisme",
    "Un abonnement Event Grid sur le compte"
   ],
   [
    "Type d'événement",
    "Microsoft.Storage.BlobCreated"
   ],
   [
    "Filtre d'objet",
    "Début : …/containers/incoming/ ; fin : .pdf"
   ],
   [
    "Indisponibilité d'une heure",
    "Nouvelles tentatives + lettres mortes"
   ]
  ]
 },
 "keep": "Push = Event Grid. Création = BlobCreated. Filtre = chemin complet + suffixe. Fiabilité = nouvelles tentatives + lettres mortes."
},
{
 "id": "D2-435",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso possède encore des comptes de stockage anciens :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Compte</th><th>Type</th><th>Besoin</th></tr><tr><td>stlegacy1</td><td>Usage général v1 (GPv1)</td><td>Utiliser les niveaux d'accès et la gestion du cycle de vie</td></tr><tr><td>stlegacy2</td><td>BlobStorage (ancien type)</td><td>Ajouter des partages Azure Files dans le même compte</td></tr><tr><td>stlegacy3</td><td>GPv2, niveau par défaut Chaud</td><td>La plupart des blobs n'ont pas de niveau explicite ; l'équipe veut passer le niveau par défaut du compte à Froid (cool)</td></tr></table></div><p>Avant de passer stlegacy1 en GPv2, l'équipe veut savoir si l'opération est réversible et si elle provoque une interruption.</p><p>Que devez-vous faire, et que se passera-t-il ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "stlegacy1 :",
   "o": [
    "Basculement vers la région secondaire",
    "Mise à niveau sur place vers GPv2",
    "Nouveau compte GPv2 + copie AzCopy",
    "Conversion vers BlobStorage"
   ],
   "a": 1
  },
  {
   "l": "Réversibilité et interruption :",
   "o": [
    "Réversible pendant 14 jours",
    "Irréversible, avec interruption",
    "Réversible, sans interruption",
    "Irréversible, sans interruption"
   ],
   "a": 3
  },
  {
   "l": "stlegacy2 :",
   "o": [
    "Mise à niveau vers GPv2",
    "Impossible avec ce type",
    "Créer un compte FileStorage lié",
    "Activer Azure Files dans le compte"
   ],
   "a": 0
  },
  {
   "l": "stlegacy3 :",
   "o": [
    "Tous les blobs, même explicites, passent en froid",
    "Seuls les nouveaux blobs seront en froid",
    "Les blobs déduits passent en froid (frais)",
    "Aucun effet sur la facturation actuelle"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Mise à niveau.</b> GPv1 et BlobStorage se mettent à niveau sur place vers GPv2, sans interruption ni perte de données ; l'opération est irréversible. GPv2 prend en charge niveaux d'accès, cycle de vie et tous les services (Blob, Files, Queue, Table).<b>Niveau par défaut.</b> Les blobs sans niveau explicite héritent (niveau « déduit ») du niveau par défaut du compte : le changer les fait tous changer de niveau, avec les frais d'écriture ou de lecture correspondants.",
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
    "*stlegacy1",
    "Mise à niveau sur place vers GPv2"
   ],
   [
    "Réversibilité et interruption",
    "Irréversible, sans interruption"
   ],
   [
    "stlegacy2",
    "Mise à niveau vers GPv2"
   ],
   [
    "stlegacy3",
    "Les blobs déduits passent en froid (frais)"
   ]
  ]
 },
 "keep": "GPv1/BlobStorage → GPv2 : sur place, irréversible, sans interruption. Niveau par défaut = blobs déduits, avec frais."
},
{
 "id": "D2-436",
 "dom": 2,
 "type": "hot",
 "stem": "<p>L'équipe sécurité de Fabrikam renforce les paramètres SMB des partages Azure Files du compte stsecfiles :</p><ul><li>seules les versions SMB qui chiffrent les données en transit doivent être acceptées, avec l'algorithme de chiffrement de canal le plus fort ;</li><li>les tickets Kerberos doivent utiliser AES-256 et NTLMv2 doit être refusé ;</li><li>un ancien serveur Windows Server 2008 R2 (SMB 2.1) de l'agence de Nantes monte aujourd'hui un partage depuis l'agence, par Internet ;</li><li>une VM Windows Server 2022 dans la même région Azure monte le même partage.</li></ul><p>Quel paramètre devez-vous choisir, et quel sera l'effet ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Profil SMB :",
   "o": [
    "Sécurité maximale",
    "Aucun : réglage impossible",
    "Personnalisé, SMB 2.1 inclus",
    "Compatibilité maximale"
   ],
   "a": 0
  },
  {
   "l": "Chiffrement de canal :",
   "o": [
    "AES-256-GCM",
    "AES-128-CCM",
    "RC4-HMAC",
    "Aucun"
   ],
   "a": 0
  },
  {
   "l": "Serveur de Nantes :",
   "o": [
    "Ne peut plus monter le partage",
    "Bascule seul en NFS",
    "Continue sans changement",
    "Monte le partage en lecture seule"
   ],
   "a": 0
  },
  {
   "l": "VM Windows Server 2022 :",
   "o": [
    "Doit passer par un VPN",
    "Doit utiliser NTLMv2",
    "Ne peut plus monter le partage",
    "Continue avec SMB 3.1.1"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Sécurité maximale.</b> Ce profil n'accepte que SMB 3.1.1, le chiffrement de canal AES-256-GCM, Kerberos (tickets AES-256) et refuse NTLMv2.<b>SMB 2.1.</b> Il ne chiffre pas les données en transit : il n'est utilisable que depuis la même région Azure et sans « Transfert sécurisé requis ». Depuis Internet, il ne pouvait déjà pas monter le partage avec le transfert sécurisé ; avec le profil maximal, il est refusé dans tous les cas.<b>Windows Server 2022.</b> Il prend en charge SMB 3.1.1 et AES-256-GCM.",
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
    "*Profil SMB",
    "Sécurité maximale"
   ],
   [
    "Chiffrement de canal",
    "AES-256-GCM"
   ],
   [
    "Serveur de Nantes",
    "Ne peut plus monter le partage"
   ],
   [
    "VM Windows Server 2022",
    "Continue avec SMB 3.1.1"
   ]
  ]
 },
 "keep": "Sécurité maximale = SMB 3.1.1, AES-256-GCM, Kerberos AES-256, pas de NTLMv2. SMB 2.1 = refusé."
},
{
 "id": "D2-437",
 "dom": 2,
 "type": "hot",
 "stem": "<p>La direction financière de Contoso demande de réduire la facture de stockage du compte stmedia (GPv2, LRS, niveau par défaut Chaud, 800 To). L'analyse montre :</p><ul><li>600 To de vidéos ne sont jamais relues après 90 jours, mais doivent être conservées 7 ans ;</li><li>150 To de miniatures sont lues en permanence ;</li><li>des milliers d'instantanés de blobs créés par un ancien script n'ont plus d'utilité ;</li><li>la consommation de 150 To de miniatures en niveau Chaud restera stable pendant au moins trois ans.</li></ul><p>Que devez-vous recommander ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Vidéos :",
   "o": [
    "Passer le compte en Premium",
    "Passer le compte par défaut en Froid",
    "Cycle de vie : Archive après 90 jours",
    "Supprimer les vidéos après 90 jours"
   ],
   "a": 2
  },
  {
   "l": "Miniatures :",
   "o": [
    "Rester en Chaud",
    "Passer en Froid (cold)",
    "Passer en Archive",
    "Passer en Froid (cool)"
   ],
   "a": 0
  },
  {
   "l": "Instantanés :",
   "o": [
    "Activer la suppression réversible",
    "Passer le compte en ZRS",
    "Activer le contrôle de version",
    "Une règle de cycle de vie"
   ],
   "a": 3
  },
  {
   "l": "Consommation stable sur trois ans :",
   "o": [
    "Des instances réservées de VM",
    "Capacité réservée de stockage (3 ans)",
    "Un plan d'économies pour le calcul",
    "Une remise Dev/Test sur l'abonnement"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Archive.</b> Les données jamais relues mais conservées longtemps vont en Archive par une règle de cycle de vie (le compte est LRS, ce qui le permet).<b>Miniatures.</b> Les données lues en permanence coûtent moins cher en Chaud : les niveaux froids facturent davantage les lectures.<b>Instantanés.</b> Une règle de cycle de vie peut supprimer les instantanés au-delà d'un âge donné (action sur snapshot).<b>Capacité réservée.</b> Azure Storage propose une réservation de capacité d'un ou trois ans pour les blobs (par paliers de 100 To ou 1 Po), avec une remise sur le stockage.",
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
    "*Vidéos",
    "Cycle de vie : Archive après 90 jours"
   ],
   [
    "Miniatures",
    "Rester en Chaud"
   ],
   [
    "Instantanés",
    "Une règle de cycle de vie"
   ],
   [
    "Consommation stable sur trois ans",
    "Capacité réservée de stockage (3 ans)"
   ]
  ]
 },
 "keep": "Jamais relu = Archive par cycle de vie. Lu en permanence = Chaud. Instantanés = cycle de vie. Stable = capacité réservée."
},
{
 "id": "D2-438",
 "dom": 2,
 "type": "hot",
 "stem": "<p>L'équipe de gouvernance des données de Fabrikam a besoin de plusieurs informations sur le compte stlake2 (GPv2, 400 millions de blobs) :</p><ul><li>chaque semaine, une liste de tous les blobs avec leur taille, leur niveau d'accès et leur date de dernière modification, sous forme de fichier exploitable par Synapse, sans script qui parcourt le compte ;</li><li>un journal ordonné et durable de toutes les créations, modifications et suppressions de blobs, que l'équipe pourra relire dans six mois ;</li><li>la répartition de la capacité par niveau d'accès, sous forme de graphique dans le portail.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Liste hebdomadaire :",
   "o": [
    "azcopy list exécuté chaque semaine",
    "Inventaire de blobs (CSV ou Parquet)",
    "Un paramètre de diagnostic StorageRead",
    "Le flux de modifications du compte"
   ],
   "a": 1
  },
  {
   "l": "Journal des modifications :",
   "o": [
    "Flux de modifications",
    "Journal d'activité",
    "Métrique Transactions",
    "Inventaire de blobs"
   ],
   "a": 0
  },
  {
   "l": "Rétention du journal :",
   "o": [
    "Fixée à 90 jours, non modifiable",
    "Fixée à 7 jours, comme la suppression",
    "Réglable ou illimitée",
    "Limitée à 30 jours au maximum"
   ],
   "a": 2
  },
  {
   "l": "Capacité par niveau :",
   "o": [
    "Recommandations d'Azure Advisor",
    "Analyse des coûts de Cost Management",
    "Journal d'activité filtré par niveau",
    "Métrique Blob Capacity, par Tier"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Inventaire.</b> L'inventaire de blobs produit chaque jour ou chaque semaine un rapport CSV ou Parquet des blobs (taille, niveau, dates…) dans un conteneur, sans parcourir le compte soi-même.<b>Flux de modifications.</b> Il enregistre de façon ordonnée, durable et en lecture seule les modifications des blobs et de leurs métadonnées, dans le conteneur $blobchangefeed ; sa rétention est réglable ou illimitée. Le journal d'activité ne contient que les opérations de gestion.<b>Métriques.</b> La métrique Blob Capacity se divise par la dimension Tier (et BlobType) dans Metrics Explorer.",
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
    "*Liste hebdomadaire",
    "Inventaire de blobs (CSV ou Parquet)"
   ],
   [
    "Journal des modifications",
    "Flux de modifications"
   ],
   [
    "Rétention du journal",
    "Réglable ou illimitée"
   ],
   [
    "Capacité par niveau",
    "Métrique Blob Capacity, par Tier"
   ]
  ]
 },
 "keep": "Liste de blobs = inventaire. Journal des modifications = flux de modifications. Capacité par niveau = Blob Capacity / Tier."
},
{
 "id": "D2-439",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso conçoit le stockage d'une nouvelle application de gestion de commandes et veut le service Azure Storage le plus adapté à chaque besoin :</p><ul><li>Besoin 1 : le serveur web dépose des messages que des processus de traitement liront de façon asynchrone ; chaque message fait moins de 64 Ko et des millions de messages peuvent s'accumuler ;</li><li>Besoin 2 : stocker des millions de petites entités (identifiant client, préférences) consultées par clé, avec un schéma souple et un coût minimal ;</li><li>Besoin 3 : stocker les factures PDF accessibles par URL HTTPS ;</li><li>Besoin 4 : une application héritée qui écrit dans un lecteur réseau mappé (Z:) avec des verrous de fichiers.</li></ul><p>Quel service devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Besoin 1 :",
   "o": [
    "Objets blob d'ajout, un par processus",
    "Stockage Table avec une entité par message",
    "Azure Files avec un fichier par message",
    "Stockage File d'attente (Queue)"
   ],
   "a": 3
  },
  {
   "l": "Besoin 2 :",
   "o": [
    "Stockage File d'attente",
    "Objets blob de blocs",
    "Stockage Table",
    "Disques managés"
   ],
   "a": 2
  },
  {
   "l": "Besoin 3 :",
   "o": [
    "Disques managés",
    "Objets blob de blocs",
    "Objets blob de pages",
    "Stockage Table"
   ],
   "a": 1
  },
  {
   "l": "Besoin 4 :",
   "o": [
    "Azure Files (SMB)",
    "Stockage File d'attente",
    "Stockage Table",
    "Objets blob avec BlobFuse"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Queue.</b> Le stockage File d'attente gère des messages de 64 Ko au plus, en très grand nombre, pour découpler des composants.<b>Table.</b> Magasin NoSQL clé/attribut sans schéma fixe, peu coûteux, adapté aux petites entités consultées par clé (PartitionKey, RowKey).<b>Blob.</b> Les objets blob de blocs stockent des fichiers accessibles par URL HTTPS.<b>Azure Files.</b> Partages SMB montables comme lecteur réseau, avec verrouillage de fichiers ; BlobFuse ne fournit pas la même sémantique.",
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
    "*Besoin 1",
    "Stockage File d'attente (Queue)"
   ],
   [
    "Besoin 2",
    "Stockage Table"
   ],
   [
    "Besoin 3",
    "Objets blob de blocs"
   ],
   [
    "Besoin 4",
    "Azure Files (SMB)"
   ]
  ]
 },
 "keep": "Messages = Queue. Entités par clé = Table. Fichiers par URL = Blob. Lecteur réseau = Azure Files."
},
{
 "id": "D2-440",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Vous devez créer le compte stcorp2026 avec Azure CLI. Les exigences :</p><ul><li>redondance entre zones dans la région principale, réplication vers la région associée et lecture possible dans la région secondaire à tout moment ;</li><li>usage général v2 ;</li><li>niveau d'accès par défaut : Froid (cool) ;</li><li>espace de noms hiérarchique activé ;</li><li>aucun accès anonyme aux blobs possible, quel que soit le réglage des conteneurs.</li></ul><p>Complétez la commande :</p><code>az storage account create -n stcorp2026 -g RG-Data -l francecentral --sku [1] --kind [2] --access-tier Cool --enable-hierarchical-namespace [3] --allow-blob-public-access [4]</code><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "[1] :",
   "o": [
    "Standard_RAGZRS",
    "Standard_GZRS",
    "Standard_RAGRS",
    "Premium_ZRS"
   ],
   "a": 0
  },
  {
   "l": "[2] :",
   "o": [
    "Storage",
    "BlobStorage",
    "BlockBlobStorage",
    "StorageV2"
   ],
   "a": 3
  },
  {
   "l": "[3] :",
   "o": [
    "true",
    "false",
    "enabled",
    "1"
   ],
   "a": 0
  },
  {
   "l": "[4] :",
   "o": [
    "false",
    "true",
    "disabled",
    "none"
   ],
   "a": 0
  }
 ],
 "expl": "<b>SKU.</b> RA-GZRS = zones dans la région principale + réplication géographique + lecture secondaire : Standard_RAGZRS. Standard_GZRS n'offre pas la lecture secondaire sans basculement.<b>Type.</b> StorageV2 correspond à GPv2 ; Storage est l'ancien GPv1.<b>Paramètres.</b> --enable-hierarchical-namespace true active l'espace de noms hiérarchique ; --allow-blob-public-access false interdit l'accès anonyme au niveau du compte, quel que soit le niveau d'accès des conteneurs.",
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
    "*[1]",
    "Standard_RAGZRS"
   ],
   [
    "[2]",
    "StorageV2"
   ],
   [
    "[3]",
    "true"
   ],
   [
    "[4]",
    "false"
   ]
  ]
 },
 "keep": "Standard_RAGZRS, StorageV2, HNS true, accès public false."
}
);
