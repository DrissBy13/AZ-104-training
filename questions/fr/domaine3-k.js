/* Domaine 3 : calcul (lot K : D3-431 à D3-440, scénarios longs) */
AZ.questions.push(
{
 "id": "D3-431",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'application web app-shop (plan Premium v3, Linux) est déployée aujourd'hui par FTP depuis le poste d'un développeur. Plusieurs incidents ont eu lieu :</p><ul><li>une mise en production a laissé des fichiers d'une ancienne version dans wwwroot, ce qui a cassé une page ;</li><li>un développeur a modifié un fichier directement sur le serveur via Kudu, et la modification a été perdue au déploiement suivant sans que personne ne sache qu'elle existait ;</li><li>une mise en production en heure ouvrée a provoqué deux minutes d'erreurs 503 pendant le redémarrage.</li></ul><p>L'équipe veut : un déploiement atomique d'un paquet unique et un contenu de site en lecture seule ; une mise en production sans interruption avec un retour arrière immédiat ; un déploiement déclenché par chaque fusion dans la branche main du dépôt GitHub, sans stocker de mot de passe dans GitHub ; une chaîne de connexion de préproduction qui ne doit jamais partir en production.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Paquet atomique, contenu en lecture seule :",
   "o": [
    "Désactiver FTP et garder Kudu",
    "Déploiement local Git",
    "WEBSITE_RUN_FROM_PACKAGE = 1",
    "Un partage Azure Files monté"
   ],
   "a": 2
  },
  {
   "l": "Sans interruption, retour arrière immédiat :",
   "o": [
    "Augmenter le nombre d'instances",
    "Activer Always On",
    "Emplacement de préproduction + échange",
    "Un second plan derrière Traffic Manager"
   ],
   "a": 2
  },
  {
   "l": "GitHub sans mot de passe stocké :",
   "o": [
    "GitHub Actions avec une identité fédérée",
    "Un jeton SAS du compte de stockage de l'appli",
    "Identifiants FTP stockés en secret GitHub",
    "Profil de publication stocké en secret GitHub"
   ],
   "a": 0
  },
  {
   "l": "Chaîne de connexion de préproduction :",
   "o": [
    "Paramètre d'application standard",
    "Étiquette sur l'emplacement",
    "Paramètre d'emplacement (sticky)",
    "Fichier appsettings.json du paquet"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Run from package.</b> Avec WEBSITE_RUN_FROM_PACKAGE = 1 (déploiement ZIP), le paquet est monté tel quel : wwwroot est en lecture seule, le déploiement est atomique et aucun fichier résiduel ne subsiste. Les modifications via Kudu deviennent impossibles, ce qui supprime les écarts invisibles.<b>Emplacement + échange.</b> L'échange préchauffe les instances de l'emplacement avant de basculer le trafic ; un nouvel échange suffit pour revenir en arrière.<b>OIDC.</b> GitHub Actions peut s'authentifier par identité fédérée (OpenID Connect) sur une application Entra ID ou une identité managée affectée par l'utilisateur : aucun secret de longue durée n'est stocké. Le profil de publication est un secret.<b>Paramètre d'emplacement.</b> Coché « Paramètre d'emplacement de déploiement », il reste attaché à l'emplacement lors de l'échange.",
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
    "*Paquet atomique, contenu en lecture seule",
    "WEBSITE_RUN_FROM_PACKAGE = 1"
   ],
   [
    "Sans interruption, retour arrière immédiat",
    "Emplacement de préproduction + échange"
   ],
   [
    "GitHub sans mot de passe stocké",
    "GitHub Actions avec une identité fédérée"
   ],
   [
    "Chaîne de connexion de préproduction",
    "Paramètre d'emplacement (sticky)"
   ]
  ]
 },
 "keep": "Run from package = atomique et lecture seule. Échange = zéro interruption. OIDC = pas de secret. Sticky = reste sur l'emplacement."
},
{
 "id": "D3-432",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'application app-api (App Service, plan Premium v3) doit être mise en conformité avec la politique de sécurité de Contoso :</p><ul><li>les secrets (chaîne de connexion SQL, clé d'API partenaire) ne doivent plus apparaître en clair dans les paramètres de l'application ; ils sont stockés dans le coffre kv-prod, configuré avec le modèle d'autorisation RBAC Azure ;</li><li>l'application ne doit utiliser aucun identifiant pour accéder au coffre, et l'identité doit disparaître automatiquement si l'application est supprimée ;</li><li>l'application doit joindre une base SQL qui n'est accessible que par un point de terminaison privé dans VNet-Data ;</li><li>l'application elle-même ne doit être accessible que depuis le réseau de l'entreprise (VNet-Corp, peeré), plus aucun accès Internet entrant.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Identité et rôle sur kv-prod :",
   "o": [
    "Identité attribuée par le système + Key Vault Secrets User",
    "Principal de service avec secret + Contributor",
    "Identité attribuée par l'utilisateur + Key Vault Reader",
    "Identité attribuée par le système + Key Vault Administrator"
   ],
   "a": 0
  },
  {
   "l": "Valeur du paramètre d'application :",
   "o": [
    "$(KeyVault:kv-prod:secrets:sql-conn)",
    "[reference('kv-prod').secrets.sqlConn]",
    "keyvault://kv-prod/secrets/sql-conn",
    "@Microsoft.KeyVault(SecretUri=…)"
   ],
   "a": 3
  },
  {
   "l": "Vers la base SQL (sortant) :",
   "o": [
    "Intégration au réseau virtuel",
    "Restrictions d'accès",
    "Connexions hybrides vers SQL",
    "Point de terminaison privé sur l'application"
   ],
   "a": 0
  },
  {
   "l": "Accès entrant depuis VNet-Corp seulement :",
   "o": [
    "Intégration au réseau virtuel régionale",
    "Une règle de pare-feu sur le coffre kv-prod",
    "Point de terminaison privé",
    "Un NSG sur le sous-réseau d'intégration"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Identité.</b> L'identité attribuée par le système est liée au cycle de vie de l'application. Avec le modèle RBAC, le rôle Key Vault Secrets User suffit pour lire les secrets ; Key Vault Reader ne donne accès qu'aux métadonnées.<b>Référence Key Vault.</b> La syntaxe @Microsoft.KeyVault(SecretUri=…) (ou VaultName=…;SecretName=…) fait résoudre le secret par la plateforme avec l'identité managée.<b>Sortant / entrant.</b> L'intégration au réseau virtuel concerne le trafic sortant de l'application ; le point de terminaison privé concerne le trafic entrant. Les deux sont souvent combinés, sur des sous-réseaux différents.",
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
    "*Identité et rôle sur kv-prod",
    "Identité attribuée par le système + Key Vault Secrets User"
   ],
   [
    "Valeur du paramètre d'application",
    "@Microsoft.KeyVault(SecretUri=…)"
   ],
   [
    "Vers la base SQL (sortant)",
    "Intégration au réseau virtuel"
   ],
   [
    "Accès entrant depuis VNet-Corp seulement",
    "Point de terminaison privé"
   ]
  ]
 },
 "keep": "Système = cycle de vie lié. Secrets User = lire. VNet integration = sortant. Point de terminaison privé = entrant."
},
{
 "id": "D3-433",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Fabrikam modernise quatre traitements et veut le service de calcul le plus simple adapté à chacun, sans gérer de VM ni de cluster :</p><ul><li>Traitement 1 : un conteneur Linux qui convertit un lot de fichiers ; il tourne environ 20 minutes une fois par jour, déclenché par un script externe, et doit s'arrêter une fois terminé ; aucune mise à l'échelle n'est nécessaire.</li><li>Traitement 2 : une tâche planifiée chaque nuit, packagée en conteneur, qui fait partie d'une plateforme de microservices déjà hébergée sur le même environnement et qui partage ses réseaux et ses journaux.</li><li>Traitement 3 : un script PowerShell qui doit tourner en continu à côté d'une application web existante, sur le même plan App Service, et accéder à ses fichiers.</li><li>Traitement 4 : un microservice HTTP en conteneur dont la charge varie de zéro à plusieurs centaines de requêtes par seconde ; il doit pouvoir descendre à zéro instance la nuit.</li></ul><p>Quel service devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Traitement 1 :",
   "o": [
    "Groupe de machines virtuelles identiques",
    "Azure Kubernetes Service",
    "App Service pour conteneurs",
    "Azure Container Instances"
   ],
   "a": 3
  },
  {
   "l": "Traitement 2 :",
   "o": [
    "Un WebJob déclenché sur un plan séparé",
    "Une instance ACI planifiée par Logic Apps",
    "Un travail Container Apps planifié",
    "Une VM avec le Planificateur de tâches"
   ],
   "a": 2
  },
  {
   "l": "Traitement 3 :",
   "o": [
    "Azure Batch",
    "Un travail Container Apps",
    "Azure Container Instances",
    "Un WebJob continu"
   ],
   "a": 3
  },
  {
   "l": "Traitement 4 :",
   "o": [
    "App Service Premium v3 avec autoscale",
    "Un WebJob continu sur le plan existant",
    "Azure Container Instances avec 4 vCPU",
    "Azure Container Apps"
   ],
   "a": 3
  }
 ],
 "expl": "<b>ACI.</b> Le moyen le plus simple d'exécuter un conteneur à la demande ; avec la stratégie de redémarrage Never ou OnFailure, le groupe s'arrête une fois le traitement fini et la facturation s'arrête.<b>Travail Container Apps.</b> Les travaux (manuel, planifié ou événementiel) s'exécutent dans le même environnement Container Apps que les applications, avec le même réseau et les mêmes journaux.<b>WebJob.</b> Il tourne dans le contexte de l'application App Service, sur son plan, avec accès à son système de fichiers ; le mode continu nécessite Always On.<b>Container Apps.</b> Mise à l'échelle par règles KEDA (HTTP, files…), avec un minimum possible de zéro réplica.",
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
    "*Traitement 1",
    "Azure Container Instances"
   ],
   [
    "Traitement 2",
    "Un travail Container Apps planifié"
   ],
   [
    "Traitement 3",
    "Un WebJob continu"
   ],
   [
    "Traitement 4",
    "Azure Container Apps"
   ]
  ]
 },
 "keep": "Conteneur ponctuel = ACI. Tâche dans l'environnement = travail Container Apps. À côté d'une appli web = WebJob. Zéro à N = Container Apps."
},
{
 "id": "D3-434",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'équipe sécurité de Contoso impose de nouvelles exigences pour les VM de RG-Sec :</p><ul><li>les VM doivent être protégées contre les rootkits et les bootkits, avec une mesure de l'intégrité du démarrage que Microsoft Defender for Cloud peut vérifier ;</li><li>les disques temporaires et les caches de disque doivent aussi être chiffrés, au repos, sans agent ni extension dans la VM ;</li><li>les disques managés doivent être chiffrés avec des clés gérées par Contoso, stockées dans kv-keys, avec une rotation automatique ;</li><li>les données d'une application de calcul financier doivent rester chiffrées en mémoire pendant leur traitement, y compris vis-à-vis de l'hyperviseur.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Rootkits, intégrité du démarrage :",
   "o": [
    "Azure Disk Encryption sur le disque OS",
    "Un hôte dédié avec maintenance contrôlée",
    "Lancement fiable (démarrage sécurisé, vTPM)",
    "Microsoft Antimalware avec analyse planifiée"
   ],
   "a": 2
  },
  {
   "l": "Disques temporaires et caches, sans agent :",
   "o": [
    "Chiffrement sur l'hôte",
    "Chiffrement double au niveau du compte",
    "Chiffrement côté serveur, clé de plateforme",
    "Azure Disk Encryption (BitLocker / dm-crypt)"
   ],
   "a": 0
  },
  {
   "l": "Clés Contoso, rotation automatique :",
   "o": [
    "Une clé gérée par la plateforme, double chiffrement",
    "Un jeu de chiffrement de disque (clé client)",
    "Une étendue de chiffrement sur le compte",
    "Azure Disk Encryption avec une clé KEK"
   ],
   "a": 1
  },
  {
   "l": "Chiffrement en mémoire :",
   "o": [
    "VM confidentielle",
    "Lancement fiable",
    "Hôte dédié isolé",
    "Chiffrement sur l'hôte"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Lancement fiable.</b> Démarrage sécurisé (Secure Boot) et vTPM protègent contre les bootkits et rootkits ; l'attestation de démarrage est remontée dans Defender for Cloud.<b>Chiffrement sur l'hôte.</b> Le chiffrement côté serveur porte sur les disques stockés ; le chiffrement sur l'hôte étend la protection aux disques temporaires et aux caches, sans rien installer dans la VM. Azure Disk Encryption, lui, repose sur une extension dans l'invité.<b>Jeu de chiffrement de disque.</b> Il référence une clé de Key Vault (ou HSM managé) et peut suivre automatiquement la dernière version de la clé.<b>VM confidentielle.</b> Basée sur AMD SEV-SNP ou Intel TDX, elle chiffre la mémoire avec des clés générées par le matériel, inaccessibles à l'hyperviseur.",
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
    "*Rootkits, intégrité du démarrage",
    "Lancement fiable (démarrage sécurisé, vTPM)"
   ],
   [
    "Disques temporaires et caches, sans agent",
    "Chiffrement sur l'hôte"
   ],
   [
    "Clés Contoso, rotation automatique",
    "Un jeu de chiffrement de disque (clé client)"
   ],
   [
    "Chiffrement en mémoire",
    "VM confidentielle"
   ]
  ]
 },
 "keep": "Bootkits = lancement fiable. Temporaire + cache = chiffrement sur l'hôte. Clé client = jeu de chiffrement. Mémoire = VM confidentielle."
},
{
 "id": "D3-435",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Un cluster de basculement Windows Server (deux nœuds, VM-N1 et VM-N2) héberge une instance SQL Server en cluster dans France Central. Le cluster a besoin d'un stockage partagé ; les deux VM sont réparties dans deux zones de disponibilité (zone 1 et zone 2).</p><p>Le tableau présente les disques envisagés :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Disque</th><th>Rôle</th><th>Exigence</th></tr><tr><td>Disk-Quorum</td><td>Témoin</td><td>Partagé par les deux nœuds</td></tr><tr><td>Disk-Data</td><td>Données SQL</td><td>Partagé, doit survivre à la perte d'une zone</td></tr><tr><td>Disk-Log</td><td>Journaux</td><td>Débit à ajuster sans arrêt selon la période</td></tr><tr><td>Disk-OS</td><td>Système</td><td>Taille actuelle 128 Gio, besoin de 256 Gio</td></tr></table></div><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Partage d'un disque entre nœuds :",
   "o": [
    "Un disque non managé dans un blob",
    "Attacher le disque en lecture seule",
    "Propriété maxShares = 2",
    "Mise en cache en lecture/écriture"
   ],
   "a": 2
  },
  {
   "l": "Disk-Data, perte d'une zone :",
   "o": [
    "Disque Ultra",
    "SSD Premium LRS",
    "SSD Standard LRS",
    "SSD Premium ZRS"
   ],
   "a": 3
  },
  {
   "l": "Disk-Log, débit ajustable sans arrêt :",
   "o": [
    "SSD Premium avec bursting",
    "HDD Standard",
    "SSD Premium v2",
    "SSD Standard ZRS"
   ],
   "a": 2
  },
  {
   "l": "Disk-OS à 256 Gio :",
   "o": [
    "Remplacer le disque OS par un nouveau disque vide",
    "Réduire le disque, puis le réagrandir",
    "Agrandir à chaud depuis le portail",
    "Libérer la VM, puis agrandir le disque"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Disques partagés.</b> Un disque managé avec maxShares supérieur à 1 peut être attaché à plusieurs VM ; le cluster gère l'accès via les réservations SCSI persistantes.<b>ZRS.</b> Les disques SSD Premium et Standard en ZRS sont répliqués de façon synchrone sur trois zones ; un disque partagé ZRS peut être attaché à des VM de zones différentes.<b>SSD Premium v2.</b> Les IOPS et le débit se règlent indépendamment de la taille, sans interruption (dans une limite de fréquence de modification).<b>Disque OS.</b> L'agrandissement à chaud concerne les disques de données ; pour un disque OS, il faut libérer la VM. Un disque managé ne peut pas être réduit.",
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
    "*Partage d'un disque entre nœuds",
    "Propriété maxShares = 2"
   ],
   [
    "Disk-Data, perte d'une zone",
    "SSD Premium ZRS"
   ],
   [
    "Disk-Log, débit ajustable sans arrêt",
    "SSD Premium v2"
   ],
   [
    "Disk-OS à 256 Gio",
    "Libérer la VM, puis agrandir le disque"
   ]
  ]
 },
 "keep": "Partagé = maxShares. Survit à une zone = ZRS. Débit à chaud = Premium v2. Disque OS = libérer d'abord."
},
{
 "id": "D3-436",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous déployez un groupe de conteneurs ACI nommé cg-ingest pour un traitement d'ingestion :</p><ul><li>le groupe contient deux conteneurs Linux : ingest (traitement) et sidecar (envoi de métriques), qui doivent communiquer entre eux par localhost ;</li><li>ingest doit écrire ses résultats dans un stockage persistant qui survit à la suppression du groupe ;</li><li>le groupe doit atteindre une base de données accessible uniquement depuis le sous-réseau snet-aci de VNet-Data ;</li><li>le traitement doit être relancé automatiquement s'il se termine en erreur, mais pas s'il réussit ;</li><li>l'image se trouve dans le registre privé acrcontoso, et aucun mot de passe de registre ne doit figurer dans la définition du déploiement.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Stockage persistant :",
   "o": [
    "Volume secret monté en lecture seule",
    "Partage Azure Files",
    "Volume emptyDir du groupe",
    "Volume gitRepo cloné au démarrage"
   ],
   "a": 1
  },
  {
   "l": "Accès à la base de données :",
   "o": [
    "Un peering vers le groupe",
    "Déployer le groupe dans snet-aci",
    "Un point de terminaison de service sur le groupe",
    "Une adresse IP publique avec DNS"
   ],
   "a": 1
  },
  {
   "l": "Stratégie de redémarrage :",
   "o": [
    "Always",
    "OnFailure",
    "Never",
    "UnlessStopped"
   ],
   "a": 1
  },
  {
   "l": "Extraction de l'image :",
   "o": [
    "Utilisateur administrateur du registre",
    "Accès anonyme en extraction activé",
    "Identité managée avec le rôle AcrPull",
    "Mot de passe du registre en variable sécurisée"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Groupe de conteneurs.</b> Les conteneurs d'un groupe partagent cycle de vie, réseau (localhost) et volumes.<b>Azure Files.</b> Le volume de partage Azure Files persiste au-delà du groupe ; emptyDir disparaît avec lui. Le montage Azure Files est pris en charge pour les conteneurs Linux.<b>Réseau virtuel.</b> Le groupe est déployé dans un sous-réseau délégué à Microsoft.ContainerInstance/containerGroups et obtient une adresse privée.<b>OnFailure.</b> Redémarre seulement si le conteneur se termine avec un code d'erreur ; Never ne redémarre jamais, Always toujours.<b>AcrPull.</b> Une identité managée affectée au groupe avec le rôle AcrPull sur le registre évite tout mot de passe.",
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
    "*Stockage persistant",
    "Partage Azure Files"
   ],
   [
    "Accès à la base de données",
    "Déployer le groupe dans snet-aci"
   ],
   [
    "Stratégie de redémarrage",
    "OnFailure"
   ],
   [
    "Extraction de l'image",
    "Identité managée avec le rôle AcrPull"
   ]
  ]
 },
 "keep": "Persistant = Azure Files. Réseau privé = sous-réseau délégué. Erreur seulement = OnFailure. Sans mot de passe = identité + AcrPull."
},
{
 "id": "D3-437",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso centralise ses images de conteneurs dans Azure Container Registry. Les besoins exprimés :</p><ul><li>les clusters AKS de France Central et de Canada Central doivent extraire les images depuis un point de terminaison proche, avec une seule URL de registre ;</li><li>le registre ne doit pas être accessible depuis Internet : uniquement depuis VNet-Hub et les réseaux peerés ;</li><li>chaque fois que l'image de base Ubuntu est mise à jour, les images applicatives doivent être reconstruites automatiquement dans Azure ;</li><li>le pipeline de l'équipe Data ne doit pouvoir envoyer des images que dans le référentiel data/*, pas dans les autres.</li></ul><p>Le registre actuel est en niveau Standard.</p><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Proximité, URL unique :",
   "o": [
    "Un second registre Standard au Canada",
    "Un CDN devant le registre",
    "Importer les images chaque nuit",
    "Passer en Premium + géoréplication"
   ],
   "a": 3
  },
  {
   "l": "Pas d'accès Internet :",
   "o": [
    "Le rôle AcrPull accordé aux seuls clusters",
    "Point de terminaison privé, accès public coupé",
    "Désactiver l'utilisateur administrateur",
    "Un NSG sur le sous-réseau des nœuds AKS"
   ],
   "a": 1
  },
  {
   "l": "Reconstruction automatique :",
   "o": [
    "Une stratégie Azure sur les images",
    "Un webhook du registre sur l'événement push",
    "Une tâche ACR suivant l'image de base",
    "Un verrou de contenu sur l'image de base"
   ],
   "a": 2
  },
  {
   "l": "Envoi limité à data/* :",
   "o": [
    "Utilisateur administrateur",
    "Rôle Owner sur le groupe",
    "Jeton avec carte d'étendue",
    "Rôle AcrPush sur le registre"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Géoréplication.</b> Réservée au niveau Premium : un seul registre (une URL) avec des réplicas régionaux ; les extractions sont servies par le réplica le plus proche.<b>Point de terminaison privé.</b> Également réservé au Premium ; combiné à la désactivation de l'accès public, le registre n'est joignable que par réseau privé.<b>Tâches ACR.</b> Une tâche peut suivre l'image de base et reconstruire automatiquement l'image dépendante quand la base change.<b>Jeton + carte d'étendue.</b> Un jeton de registre associé à une carte d'étendue donne des droits (lecture, écriture) limités à certains référentiels. Le rôle AcrPush s'applique au registre entier (hors fonctionnalités récentes de RBAC par référentiel).",
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
    "*Proximité, URL unique",
    "Passer en Premium + géoréplication"
   ],
   [
    "Pas d'accès Internet",
    "Point de terminaison privé, accès public coupé"
   ],
   [
    "Reconstruction automatique",
    "Une tâche ACR suivant l'image de base"
   ],
   [
    "Envoi limité à data/*",
    "Jeton avec carte d'étendue"
   ]
  ]
 },
 "keep": "Géoréplication et point de terminaison privé = Premium. Image de base = tâche ACR. Référentiel précis = jeton + carte d'étendue."
},
{
 "id": "D3-438",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso héberge plusieurs applications App Service et cherche le niveau de plan le moins coûteux qui satisfait chaque besoin :</p><ul><li>App-Intranet : un site interne avec un domaine personnalisé et un certificat TLS lié ; une seule instance suffit, mais elle ne doit pas être partagée avec d'autres clients Azure ;</li><li>App-Portal : deux emplacements de déploiement (préproduction et test) et une mise à l'échelle automatique jusqu'à 8 instances ;</li><li>App-Batch : une mise à l'échelle jusqu'à 25 instances, avec des emplacements de déploiement ;</li><li>App-Gov : une isolation réseau et de calcul complète sur un matériel dédié, avec jusqu'à 60 instances.</li></ul><p>Quel niveau de plan devez-vous choisir ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "App-Intranet :",
   "o": [
    "Free",
    "Shared",
    "Basic",
    "Standard"
   ],
   "a": 2
  },
  {
   "l": "App-Portal :",
   "o": [
    "Basic",
    "Standard",
    "Premium v3",
    "Isolated v2"
   ],
   "a": 1
  },
  {
   "l": "App-Batch :",
   "o": [
    "Basic",
    "Standard",
    "Premium v3",
    "Isolated v2"
   ],
   "a": 2
  },
  {
   "l": "App-Gov :",
   "o": [
    "Premium v3",
    "Isolated v2 (ASE v3)",
    "Premium v3 avec 60 instances",
    "Standard"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Basic.</b> Premier niveau à calcul dédié (Free et Shared partagent les VM avec d'autres clients), avec domaine personnalisé et liaison TLS ; mise à l'échelle manuelle jusqu'à 3 instances, sans emplacement.<b>Standard.</b> Emplacements de déploiement (5) et mise à l'échelle automatique jusqu'à 10 instances.<b>Premium v3.</b> Jusqu'à 30 instances et 20 emplacements.<b>Isolated v2.</b> Plan d'un App Service Environment v3 : isolation dans votre réseau virtuel sur du calcul dédié, jusqu'à 100 instances.",
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
    "*App-Intranet",
    "Basic"
   ],
   [
    "App-Portal",
    "Standard"
   ],
   [
    "App-Batch",
    "Premium v3"
   ],
   [
    "App-Gov",
    "Isolated v2 (ASE v3)"
   ]
  ]
 },
 "keep": "Dédié = Basic. Emplacements + autoscale = Standard (10). 30 instances = Premium v3. 100 et isolé = Isolated v2."
},
{
 "id": "D3-439",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Le groupe de machines virtuelles identiques vmss-web (orchestration Uniforme, 10 instances, derrière un équilibreur de charge Standard) héberge un site web. Lors de la dernière mise à jour du modèle (nouvelle image), toutes les instances ont redémarré en même temps et le site a été indisponible.</p><p>L'équipe veut :</p><ul><li>appliquer les futures mises à jour du modèle par lots, en ne passant au lot suivant que si les instances mises à jour sont saines ;</li><li>que la plateforme sache si l'application répond, et pas seulement si la VM tourne ;</li><li>que l'instance 3, qui exécute une tâche de longue durée, ne soit jamais supprimée lors d'une réduction automatique ;</li><li>que la réduction automatique supprime d'abord les instances les plus récentes, en conservant l'équilibre entre les zones.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Stratégie de mise à niveau :",
   "o": [
    "Surprovisionnement",
    "Automatique",
    "Propagée (rolling)",
    "Manuelle"
   ],
   "a": 2
  },
  {
   "l": "Santé de l'application :",
   "o": [
    "L'extension Intégrité de l'application",
    "La réparation automatique, seule",
    "Diagnostics de démarrage sur chaque instance",
    "Une alerte de métrique sur l'UC moyenne"
   ],
   "a": 0
  },
  {
   "l": "Instance 3 :",
   "o": [
    "Verrou CanNotDelete sur l'instance",
    "Protection contre la réduction",
    "Libérer l'instance 3",
    "Protection contre les actions du groupe"
   ],
   "a": 1
  },
  {
   "l": "Ordre de réduction :",
   "o": [
    "Default",
    "NewestVM",
    "OldestVM",
    "Random"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Propagée.</b> La stratégie Rolling met à jour les instances par lots, avec un pourcentage maximal d'instances non saines ; elle nécessite une sonde d'intégrité ou l'extension Intégrité de l'application.<b>Intégrité de l'application.</b> L'extension interroge un point de terminaison de l'application dans chaque instance ; elle sert aussi à la réparation automatique.<b>Protection contre la réduction.</b> L'instance n'est pas supprimée par la mise à l'échelle automatique. La protection contre les actions du groupe bloque en plus les mises à niveau, la réimageuse ou la libération lancées au niveau du groupe — plus large que le besoin.<b>NewestVM.</b> Supprime les instances les plus récentes en premier, après avoir équilibré entre zones ; OldestVM fait l'inverse.",
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
    "*Stratégie de mise à niveau",
    "Propagée (rolling)"
   ],
   [
    "Santé de l'application",
    "L'extension Intégrité de l'application"
   ],
   [
    "Instance 3",
    "Protection contre la réduction"
   ],
   [
    "Ordre de réduction",
    "NewestVM"
   ]
  ]
 },
 "keep": "Par lots = Rolling. Santé applicative = extension. Une instance à garder = protection contre la réduction. Plus récentes d'abord = NewestVM."
},
{
 "id": "D3-440",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'équipe plateforme de Fabrikam gère RG-Net avec un modèle ARM, main.json. Le groupe contient aujourd'hui un réseau virtuel, deux NSG et une adresse IP publique ajoutée manuellement par un collègue (non présente dans le modèle).</p><p>Les besoins :</p><ul><li>avant chaque déploiement, voir la liste des ressources qui seraient créées, modifiées ou supprimées, sans rien changer ;</li><li>déployer main.json sans risquer de supprimer l'adresse IP publique ajoutée manuellement ;</li><li>à terme, faire en sorte que RG-Net contienne exactement ce que décrit le modèle et rien d'autre ;</li><li>publier main.json dans Azure pour que l'équipe Applications puisse le déployer avec ses propres droits, sans accès au dépôt Git, en contrôlant l'accès par RBAC et en gérant des versions.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Aperçu sans modification :",
   "o": [
    "az deployment group export",
    "az deployment group validate",
    "az deployment group what-if",
    "az deployment group show"
   ],
   "a": 2
  },
  {
   "l": "Déploiement sans supprimer l'IP :",
   "o": [
    "Un déploiement au niveau abonnement",
    "Un verrou ReadOnly sur RG-Net",
    "Mode Complet",
    "Mode Incrémentiel"
   ],
   "a": 3
  },
  {
   "l": "Exactement le contenu du modèle :",
   "o": [
    "Mode Incrémentiel",
    "Une stratégie Azure Deny",
    "Un verrou CanNotDelete",
    "Mode Complet"
   ],
   "a": 3
  },
  {
   "l": "Publier le modèle avec versions et RBAC :",
   "o": [
    "Un blob public dans un compte de stockage",
    "Une spécification de modèle",
    "Un runbook Automation",
    "Une définition d'initiative"
   ],
   "a": 1
  }
 ],
 "expl": "<b>What-if.</b> L'opération what-if affiche les créations, modifications et suppressions prévues sans rien déployer ; validate vérifie seulement la syntaxe et la cohérence.<b>Incrémentiel / Complet.</b> En mode Incrémentiel (par défaut), les ressources absentes du modèle sont laissées intactes. En mode Complet, elles sont supprimées : le groupe reflète exactement le modèle (sauf ressources protégées par un verrou, qui font échouer la suppression).<b>Spécification de modèle.</b> Ressource Azure qui stocke un modèle versionné ; l'accès se donne par RBAC (Lecteur pour le déployer).",
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
    "*Aperçu sans modification",
    "az deployment group what-if"
   ],
   [
    "Déploiement sans supprimer l'IP",
    "Mode Incrémentiel"
   ],
   [
    "Exactement le contenu du modèle",
    "Mode Complet"
   ],
   [
    "Publier le modèle avec versions et RBAC",
    "Une spécification de modèle"
   ]
  ]
 },
 "keep": "Aperçu = what-if. Garder l'existant = Incrémentiel. Miroir exact = Complet. Partager avec versions = spécification de modèle."
}
);
