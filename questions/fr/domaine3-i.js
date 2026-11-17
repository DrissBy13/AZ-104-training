/* Domaine 3 : calcul (lot I : D3-411 à D3-420, scénarios longs) */
AZ.questions.push(
{
 "id": "D3-411",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'équipe Data exécute chaque nuit un conteneur de traitement dans Azure Container Instances (ACI). L'image se trouve dans le registre privé acrdata (Standard, compte administrateur désactivé).</p><ul><li>Le conteneur doit s'arrêter après le traitement, sans redémarrer, mais il doit redémarrer s'il plante avant la fin.</li><li>Les fichiers produits doivent être conservés après l'arrêt et lisibles par d'autres équipes en SMB.</li><li>Le conteneur doit lire une base Azure SQL qui n'est joignable que par un point de terminaison privé dans VNet-Data.</li><li>Aucun mot de passe ne doit servir à tirer l'image.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Stratégie de redémarrage :",
   "o": [
    "OnFailure",
    "Never",
    "Always",
    "Une sonde liveness avec Never"
   ],
   "a": 0
  },
  {
   "l": "Fichiers :",
   "o": [
    "Un volume gitRepo",
    "Le stockage local du conteneur",
    "Un volume Azure Files monté",
    "Un volume emptyDir"
   ],
   "a": 2
  },
  {
   "l": "Accès à la base :",
   "o": [
    "Une règle de pare-feu SQL pour l'IP d'ACI",
    "Une IP publique sur le groupe de conteneurs",
    "Un point de terminaison de service sur ACI",
    "Un sous-réseau délégué dans VNet-Data"
   ],
   "a": 3
  },
  {
   "l": "Tirage de l'image :",
   "o": [
    "Le compte administrateur d'acrdata",
    "Le registre en accès anonyme",
    "Une identité managée avec AcrPull",
    "Un jeton de portée en clair"
   ],
   "a": 2
  }
 ],
 "expl": "<b>OnFailure.</b> Le conteneur redémarre seulement s'il se termine en erreur ; un traitement réussi s'arrête. Always le relancerait sans fin.<b>Azure Files.</b> Un volume Azure Files persiste après l'arrêt et se lit en SMB. emptyDir disparaît avec le groupe.<b>Réseau virtuel.</b> Un groupe de conteneurs déployé dans un sous-réseau délégué à Microsoft.ContainerInstance/containerGroups reçoit une IP privée et joint le point de terminaison privé.<b>Identité.</b> ACI peut tirer une image avec une identité managée qui a le rôle AcrPull sur le registre, sans mot de passe.",
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
    "*Stratégie de redémarrage",
    "OnFailure"
   ],
   [
    "Fichiers",
    "Un volume Azure Files monté"
   ],
   [
    "Accès à la base",
    "Un sous-réseau délégué dans VNet-Data"
   ],
   [
    "Tirage de l'image",
    "Une identité managée avec AcrPull"
   ]
  ]
 },
 "keep": "ACI : OnFailure pour un traitement, Azure Files pour persister, sous-réseau délégué pour le privé, identité + AcrPull."
},
{
 "id": "D3-412",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'API Commandes tourne dans Azure Container Apps, dans l'environnement cae-prod (profil de consommation).</p><ul><li>Une nouvelle version doit recevoir 10 % du trafic pendant une semaine, l'ancienne 90 %.</li><li>Le nombre de réplicas doit suivre le nombre de messages en attente dans la file Service Bus orders, et tomber à zéro la nuit.</li><li>La chaîne de connexion Service Bus ne doit pas apparaître en clair dans la définition de l'application.</li><li>L'API ne doit être appelée que par les autres applications de cae-prod, jamais depuis Internet.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "10 % / 90 % :",
   "o": [
    "Mode révisions multiples avec poids de trafic",
    "Azure Front Door devant deux applications",
    "Deux environnements derrière un équilibreur",
    "Le mode à révision unique avec deux images"
   ],
   "a": 0
  },
  {
   "l": "Mise à l'échelle :",
   "o": [
    "Une règle HTTP sur la latence",
    "Un nombre fixe de 3 réplicas la nuit",
    "Une règle KEDA Service Bus, minimum 0",
    "Une règle CPU, minimum 1 réplica"
   ],
   "a": 2
  },
  {
   "l": "Chaîne de connexion :",
   "o": [
    "Une variable d'environnement en clair",
    "Une étiquette sur l'application",
    "Un secret de l'application conteneur",
    "Un argument de la commande du conteneur"
   ],
   "a": 2
  },
  {
   "l": "Entrée :",
   "o": [
    "Désactivée, appel par l'IP du réplica",
    "Interne",
    "Externe avec restrictions d'adresse IP",
    "Externe, avec un domaine personnalisé"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Révisions.</b> En mode à révisions multiples, plusieurs révisions sont actives et l'on répartit le trafic par pourcentage.<b>KEDA.</b> Container Apps s'appuie sur des règles KEDA ; la règle azure-servicebus suit la longueur de la file, et un minimum de 0 permet de s'arrêter. Une règle HTTP ne voit pas les messages.<b>Secret.</b> Les secrets de l'application (ou des références Key Vault) sont référencés par nom dans les règles et variables, sans valeur en clair.<b>Interne.</b> L'entrée interne n'est joignable que depuis l'environnement (et son réseau virtuel).",
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
    "*10 % / 90 %",
    "Mode révisions multiples avec poids de trafic"
   ],
   [
    "Mise à l'échelle",
    "Une règle KEDA Service Bus, minimum 0"
   ],
   [
    "Chaîne de connexion",
    "Un secret de l'application conteneur"
   ],
   [
    "Entrée",
    "Interne"
   ]
  ]
 },
 "keep": "Container Apps : révisions multiples et poids, règles KEDA, secrets, entrée interne."
},
{
 "id": "D3-413",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso utilise trois registres Azure Container Registry.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Registre</th><th>Niveau</th><th>Usage</th></tr><tr><td>acrdev</td><td>De base</td><td>Développement</td></tr><tr><td>acrprod</td><td>Standard</td><td>Production, France Central</td></tr><tr><td>acrpart</td><td>Standard</td><td>Images pour un partenaire</td></tr></table></div><p>Nouveaux besoins :</p><ul><li>acrprod doit être disponible en West Europe sous le même nom, et n'être joignable que par des adresses privées ;</li><li>les manifestes sans étiquette de acrprod doivent être supprimés automatiquement après 7 jours ;</li><li>le partenaire ne doit pouvoir tirer que le dépôt app-partner de acrpart, sans compte Microsoft Entra ;</li><li>l'image de base de app-web doit être reconstruite automatiquement dans acrprod quand l'image node:20 change.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "acrprod, géoréplication et accès privé :",
   "o": [
    "Rester en Standard",
    "Créer acrprodwe en West Europe",
    "Passer en Premium",
    "Passer en De base"
   ],
   "a": 2
  },
  {
   "l": "Manifestes sans étiquette :",
   "o": [
    "Une stratégie de cycle de vie du stockage",
    "Un runbook de purge",
    "Le verrouillage des images",
    "Une stratégie de rétention de 7 jours"
   ],
   "a": 3
  },
  {
   "l": "Partenaire :",
   "o": [
    "L'accès anonyme en lecture sur acrpart",
    "Le rôle AcrPull sur tout le registre acrpart",
    "Le compte administrateur de acrpart",
    "Un jeton de registre et une carte d'étendue"
   ],
   "a": 3
  },
  {
   "l": "Reconstruction de app-web :",
   "o": [
    "Un webhook ACR vers Docker Hub",
    "Un pipeline Azure DevOps déclenché à la main",
    "Une tâche ACR (image de base)",
    "Une tâche planifiée chaque nuit à 2 h"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Premium.</b> La géoréplication (même nom, plusieurs régions) et Private Link sont réservés au niveau Premium.<b>Rétention.</b> La stratégie de rétention supprime les manifestes sans étiquette après le nombre de jours choisi (fonction Premium aussi, d'où l'intérêt du changement de niveau).<b>Jeton.</b> Un jeton associé à une carte d'étendue donne des droits par dépôt (content/read), sans identité Entra ; le rôle AcrPull couvrirait tout le registre.<b>Tâche ACR.</b> Une tâche ACR peut se déclencher quand l'image de base référencée dans le Dockerfile est mise à jour.",
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
    "*acrprod, géoréplication et accès privé",
    "Passer en Premium"
   ],
   [
    "Manifestes sans étiquette",
    "Une stratégie de rétention de 7 jours"
   ],
   [
    "Partenaire",
    "Un jeton de registre et une carte d'étendue"
   ],
   [
    "Reconstruction de app-web",
    "Une tâche ACR (image de base)"
   ]
  ]
 },
 "keep": "ACR Premium : géoréplication, Private Link, rétention. Accès par dépôt = jeton + carte d'étendue. Image de base = tâche ACR."
},
{
 "id": "D3-414",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'application web portal (Premium v3) doit être reliée à plusieurs ressources réseau.</p><ul><li>portal doit appeler une API sur VM-Api (10.20.1.4, VNet-App), qui n'a pas d'adresse publique.</li><li>portal doit être joignable par les utilisateurs du siège, reliés à VNet-App par VPN, par une adresse privée ; tout accès Internet doit être bloqué.</li><li>Le site lit des fichiers sur un serveur Windows local, hors d'Azure, qui n'accepte aucune connexion entrante ; aucun VPN n'est prévu pour ce site.</li><li>Tout le trafic sortant de portal, y compris vers Internet, doit passer par le pare-feu de VNet-App.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Appel de VM-Api :",
   "o": [
    "L'intégration au réseau virtuel",
    "Un point de terminaison privé",
    "Des restrictions d'accès entrantes",
    "Une IP publique ajoutée sur VM-Api"
   ],
   "a": 0
  },
  {
   "l": "Accès des utilisateurs :",
   "o": [
    "Une passerelle NAT sur le sous-réseau",
    "Des restrictions d'accès sur l'IP du VPN",
    "L'intégration au réseau virtuel",
    "Un point de terminaison privé sur l'application"
   ],
   "a": 3
  },
  {
   "l": "Serveur local :",
   "o": [
    "Les connexions hybrides",
    "Un VPN point à site",
    "L'intégration au réseau virtuel",
    "Un point de terminaison privé"
   ],
   "a": 0
  },
  {
   "l": "Sortie par le pare-feu :",
   "o": [
    "Une règle de NSG entrante sur le sous-réseau",
    "« Tout acheminer » et une route 0.0.0.0/0",
    "Un point de terminaison privé dans VNet-App",
    "Une restriction d'accès vers le pare-feu"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Sortant vers un réseau virtuel.</b> L'intégration au réseau virtuel (sous-réseau délégué) donne à l'application un trafic sortant dans VNet-App.<b>Entrant privé.</b> Un point de terminaison privé donne à l'application une IP de VNet-App ; on désactive l'accès public pour bloquer Internet.<b>Connexions hybrides.</b> Elles s'appuient sur Azure Relay et un gestionnaire installé sur site, qui n'ouvre que des connexions sortantes : idéal sans VPN.<b>Tout acheminer.</b> Avec l'option « Tout acheminer » (route all), tout le trafic sortant, Internet compris, passe par le réseau virtuel, où une route 0.0.0.0/0 l'envoie au pare-feu.",
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
    "*Appel de VM-Api",
    "L'intégration au réseau virtuel"
   ],
   [
    "Accès des utilisateurs",
    "Un point de terminaison privé sur l'application"
   ],
   [
    "Serveur local",
    "Les connexions hybrides"
   ],
   [
    "Sortie par le pare-feu",
    "« Tout acheminer » et une route 0.0.0.0/0"
   ]
  ]
 },
 "keep": "App Service : intégration réseau (sortant), point de terminaison privé (entrant), connexions hybrides (local sans VPN), Tout acheminer."
},
{
 "id": "D3-415",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'application web shop (Standard S1) doit être publiée sur www.wingtip.com et sur wingtip.com.</p><ul><li>Le domaine est géré dans Azure DNS. www.wingtip.com doit être validé et associé à shop.</li><li>L'apex wingtip.com doit aussi pointer vers shop.</li><li>Un certificat TLS gratuit, renouvelé automatiquement, doit protéger www.wingtip.com.</li><li>La sécurité exige TLS 1.2 au minimum et le refus du HTTP.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "www.wingtip.com :",
   "o": [
    "Un CNAME asuid vers shop.azurewebsites.net",
    "Un enregistrement NS www vers App Service",
    "Un enregistrement A www vers l'IP de shop, seul",
    "CNAME www + TXT asuid.www"
   ],
   "a": 3
  },
  {
   "l": "Apex wingtip.com :",
   "o": [
    "Un CNAME @ vers shop.azurewebsites.net",
    "Un enregistrement NS @ vers App Service",
    "A vers l'IP entrante + TXT asuid",
    "Un enregistrement MX @ vers shop"
   ],
   "a": 2
  },
  {
   "l": "Certificat :",
   "o": [
    "Un certificat auto-signé",
    "Un certificat managé App Service",
    "Un certificat client",
    "Un certificat importé de Key Vault"
   ],
   "a": 1
  },
  {
   "l": "HTTP et TLS :",
   "o": [
    "Un certificat client obligatoire",
    "HTTPS uniquement + TLS 1.2 minimum",
    "Un NSG sur le plan App Service",
    "Une restriction d'accès qui bloque le port 80"
   ],
   "a": 1
  }
 ],
 "expl": "<b>www.</b> Un CNAME vers le nom par défaut, plus le TXT asuid.www qui prouve la propriété (identifiant de vérification du domaine).<b>Apex.</b> Un CNAME est interdit à l'apex : on utilise un enregistrement A vers l'adresse IP entrante de l'application, plus le TXT asuid.<b>Certificat managé.</b> Gratuit et renouvelé automatiquement, à partir du niveau De base ; il exige que le domaine pointe vers l'application.<b>HTTPS uniquement.</b> Redirige HTTP vers HTTPS ; la version TLS minimale se règle dans la configuration de l'application.",
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
    "*www.wingtip.com",
    "CNAME www + TXT asuid.www"
   ],
   [
    "Apex wingtip.com",
    "A vers l'IP entrante + TXT asuid"
   ],
   [
    "Certificat",
    "Un certificat managé App Service"
   ],
   [
    "HTTP et TLS",
    "HTTPS uniquement + TLS 1.2 minimum"
   ]
  ]
 },
 "keep": "Domaine App Service : CNAME (ou A à l'apex) + TXT asuid. Certificat managé gratuit. HTTPS uniquement + TLS minimal."
},
{
 "id": "D3-416",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Les développeurs de l'application api (App Service, Linux, conteneur) se plaignent :</p><ul><li>les erreurs 500 surviennent par vagues ; ils veulent une analyse guidée, avec des détecteurs qui proposent des causes ;</li><li>ils veulent voir en direct la sortie console du conteneur pendant qu'ils reproduisent un bug ;</li><li>les journaux HTTP et console doivent être conservés 90 jours et interrogés en KQL avec ceux des autres applications ;</li><li>une instance qui ne répond plus sur /healthz pendant 10 minutes doit être retirée de la répartition et remplacée.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Analyse guidée :",
   "o": [
    "Les recommandations d'Azure Advisor",
    "Le flux de journaux de l'application",
    "La console Kudu (outils avancés)",
    "Diagnostiquer et résoudre les problèmes"
   ],
   "a": 3
  },
  {
   "l": "Sortie console en direct :",
   "o": [
    "Un paramètre de diagnostic",
    "Le flux de journaux",
    "Diagnostiquer et résoudre les problèmes",
    "Application Insights Profiler"
   ],
   "a": 1
  },
  {
   "l": "Journaux sur 90 jours :",
   "o": [
    "Un paramètre de diagnostic vers Log Analytics",
    "La console Kudu avec un export",
    "Les journaux du système de fichiers",
    "Le flux de journaux de l'application"
   ],
   "a": 0
  },
  {
   "l": "Instance défaillante :",
   "o": [
    "L'affinité ARR désactivée",
    "Toujours actif (Always On)",
    "Le contrôle d'intégrité",
    "Une règle de mise à l'échelle sur /healthz"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Diagnostiquer et résoudre les problèmes.</b> Des détecteurs analysent disponibilité, performances et erreurs, et proposent des causes.<b>Flux de journaux.</b> Il affiche en direct la sortie des journaux de l'application (console du conteneur sous Linux).<b>Paramètre de diagnostic.</b> Il envoie AppServiceHTTPLogs, AppServiceConsoleLogs, etc. vers Log Analytics, où la rétention se règle et où KQL permet de croiser avec d'autres ressources.<b>Contrôle d'intégrité.</b> Une instance qui échoue au chemin indiqué est retirée de la répartition, puis remplacée si elle reste en échec (après environ une heure).",
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
    "*Analyse guidée",
    "Diagnostiquer et résoudre les problèmes"
   ],
   [
    "Sortie console en direct",
    "Le flux de journaux"
   ],
   [
    "Journaux sur 90 jours",
    "Un paramètre de diagnostic vers Log Analytics"
   ],
   [
    "Instance défaillante",
    "Le contrôle d'intégrité"
   ]
  ]
 },
 "keep": "App Service : détecteurs, flux de journaux, paramètre de diagnostic, contrôle d'intégrité."
},
{
 "id": "D3-417",
 "dom": 3,
 "type": "hot",
 "stem": "<p>L'application web crm (Premium v3, Windows) utilise une base Azure SQL et un compte de stockage. L'équipe veut :</p><ul><li>des sauvegardes de l'application (fichiers et configuration) toutes les heures, conservées 30 jours, y compris de la base SQL liée ;</li><li>une copie de crm, code et configuration, dans un autre plan App Service en West Europe, pour un environnement de démonstration ;</li><li>récupérer crm si elle est supprimée par erreur.</li></ul><p>Que devez-vous configurer ou utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Sauvegardes horaires avec la base :",
   "o": [
    "Des sauvegardes personnalisées vers un compte",
    "Azure Backup pour les VM du plan",
    "Un instantané du plan App Service",
    "Les sauvegardes automatiques seules"
   ],
   "a": 0
  },
  {
   "l": "Copie en West Europe :",
   "o": [
    "Exporter un modèle de l'application seulement",
    "Un emplacement de déploiement en West Europe",
    "Le clonage de l'application vers un autre plan",
    "Une géoréplication du plan App Service"
   ],
   "a": 2
  },
  {
   "l": "Application supprimée :",
   "o": [
    "Le journal d'activité, puis un redéploiement",
    "Restaurer l'application supprimée",
    "Impossible une fois l'application supprimée",
    "Un ticket de support obligatoire"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Sauvegardes.</b> Les sauvegardes automatiques (toutes les heures, sans base) sont incluses à partir du niveau De base ; pour inclure une base liée et choisir la rétention, il faut des sauvegardes personnalisées vers un compte de stockage.<b>Clonage.</b> Le clonage copie le contenu et la configuration d'une application vers un autre plan, éventuellement dans une autre région.<b>Suppression.</b> Une application supprimée peut être restaurée pendant 30 jours (Restore-AzDeletedWebApp ou commande CLI équivalente), dans un plan existant.",
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
    "*Sauvegardes horaires avec la base",
    "Des sauvegardes personnalisées vers un compte"
   ],
   [
    "Copie en West Europe",
    "Le clonage de l'application vers un autre plan"
   ],
   [
    "Application supprimée",
    "Restaurer l'application supprimée"
   ]
  ]
 },
 "keep": "App Service : sauvegardes personnalisées pour la base liée, clonage vers un autre plan, restauration d'une application supprimée."
},
{
 "id": "D3-418",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Une VM Windows, VM-Rdp, ne répond plus en RDP depuis une mise à jour. L'équipe n'a pas d'autre accès réseau à la VM.</p><ul><li>Il faut voir l'écran de démarrage pour savoir si Windows est bloqué sur une mise à jour.</li><li>Il faut ouvrir une invite de commande SAC (Special Administration Console) pour arrêter un service.</li><li>Si Windows ne démarre plus du tout, le disque système doit être réparé depuis une autre VM, puis remis en place.</li><li>Une VM Linux, VM-Nfs, ne démarre plus à cause d'une ligne erronée dans /etc/fstab.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Écran de démarrage :",
   "o": [
    "Les diagnostics de démarrage (capture d'écran)",
    "Les recommandations d'Azure Advisor",
    "La topologie de Network Watcher",
    "Le journal d'activité de VM-Rdp"
   ],
   "a": 0
  },
  {
   "l": "Invite SAC :",
   "o": [
    "Une extension Custom Script",
    "Run Command (commande d'exécution)",
    "La console série",
    "Azure Bastion en RDP"
   ],
   "a": 2
  },
  {
   "l": "Réparation du disque :",
   "o": [
    "Redéployer la VM sur un autre hôte",
    "az vm repair (VM de réparation)",
    "Réappliquer la configuration de la VM",
    "Redimensionner la VM pour la redémarrer"
   ],
   "a": 1
  },
  {
   "l": "VM-Nfs :",
   "o": [
    "L'extension Custom Script pour Linux",
    "Run Command (commande d'exécution)",
    "Azure Bastion en SSH",
    "La console série"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Diagnostics de démarrage.</b> La capture d'écran (et le journal série) montrent l'état du démarrage sans connexion réseau.<b>Console série.</b> Elle donne accès à la console de la VM (SAC sous Windows) même sans réseau ; elle exige les diagnostics de démarrage.<b>az vm repair.</b> Ces commandes créent une VM de réparation, y attachent une copie du disque système, puis remettent le disque réparé sur la VM d'origine.<b>fstab.</b> La VM ne démarre pas : Run Command (qui passe par l'agent) et SSH ne fonctionnent pas. La console série permet de démarrer en mode mono-utilisateur et de corriger le fichier.",
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
    "*Écran de démarrage",
    "Les diagnostics de démarrage (capture d'écran)"
   ],
   [
    "Invite SAC",
    "La console série"
   ],
   [
    "Réparation du disque",
    "az vm repair (VM de réparation)"
   ],
   [
    "VM-Nfs",
    "La console série"
   ]
  ]
 },
 "keep": "Sans réseau : diagnostics de démarrage, console série ; disque à réparer : az vm repair."
},
{
 "id": "D3-419",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso gère 300 VM en France Central.</p><ul><li>Les VM de développement doivent s'arrêter chaque soir à 20 h, avec un e-mail 30 minutes avant ; ce sont des VM isolées.</li><li>Les VM Windows et Linux doivent recevoir les correctifs critiques chaque deuxième mardi soir, avec un rapport de conformité.</li><li>Les hôtes dédiés de la plateforme SAP ne doivent recevoir les mises à jour de la plateforme Azure que le dimanche entre 2 h et 7 h.</li><li>L'accès RDP aux VM de production ne doit être ouvert que sur demande, pour 3 heures, depuis l'IP de l'administrateur.</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Arrêt des VM de développement :",
   "o": [
    "Une configuration de maintenance",
    "Une règle de mise à l'échelle",
    "L'arrêt automatique de chaque VM",
    "Azure Update Manager"
   ],
   "a": 2
  },
  {
   "l": "Correctifs :",
   "o": [
    "Une extension Custom Script mensuelle",
    "Azure Update Manager, évaluation périodique",
    "Une stratégie de sauvegarde mensuelle",
    "L'arrêt automatique de chaque VM"
   ],
   "a": 1
  },
  {
   "l": "Mises à jour de la plateforme :",
   "o": [
    "Le redéploiement des hôtes chaque dimanche",
    "Une stratégie Azure Policy sur les hôtes",
    "Azure Update Manager avec une planification",
    "Une configuration de maintenance"
   ],
   "a": 3
  },
  {
   "l": "RDP sur demande :",
   "o": [
    "Une règle NSG permanente pour l'administrateur",
    "Une IP publique sur chaque VM de production",
    "L'accès juste-à-temps (JIT) de Defender",
    "Azure Bastion Basic avec un lien partagé"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Arrêt automatique.</b> Une option de chaque VM, avec notification avant l'arrêt.<b>Update Manager.</b> Il évalue et installe les correctifs du système invité (Windows et Linux) selon des planifications, avec des rapports de conformité.<b>Configuration de maintenance.</b> Avec l'étendue Hôte (ou la portée correspondante), elle fixe la fenêtre où Azure applique les mises à jour de la plateforme aux hôtes dédiés et à certaines VM.<b>JIT.</b> L'accès juste-à-temps ouvre temporairement le port dans le NSG pour l'IP du demandeur, puis le referme.",
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
    "*Arrêt des VM de développement",
    "L'arrêt automatique de chaque VM"
   ],
   [
    "Correctifs",
    "Azure Update Manager, évaluation périodique"
   ],
   [
    "Mises à jour de la plateforme",
    "Une configuration de maintenance"
   ],
   [
    "RDP sur demande",
    "L'accès juste-à-temps (JIT) de Defender"
   ]
  ]
 },
 "keep": "Arrêt = arrêt automatique. Correctifs invités = Update Manager. Plateforme = configuration de maintenance. RDP ponctuel = JIT."
},
{
 "id": "D3-420",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso doit chiffrer les disques de trois groupes de VM selon des règles différentes.</p><ul><li>Groupe 1 : les volumes doivent être chiffrés dans le système invité, avec BitLocker et dm-crypt, clés dans un coffre de clés ; l'audit l'exige explicitement.</li><li>Groupe 2 : les disques de 40 VM doivent être chiffrés au repos avec une clé gérée par Contoso, stockée dans Key Vault, renouvelée automatiquement.</li><li>Groupe 3 : le disque temporaire, les caches et les flux entre l'hôte et le stockage doivent aussi être chiffrés, sans agent dans la VM.</li><li>Groupe 4 : les données doivent être protégées même contre l'hôte, avec un chiffrement lié au matériel (VM confidentielle).</li></ul><p>Que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Groupe 1 :",
   "o": [
    "Le chiffrement confidentiel",
    "Le chiffrement sur l'hôte",
    "Azure Disk Encryption",
    "Un jeu de chiffrement (CMK)"
   ],
   "a": 2
  },
  {
   "l": "Groupe 2 :",
   "o": [
    "Azure Disk Encryption",
    "Un jeu de chiffrement (CMK)",
    "Le chiffrement confidentiel",
    "Le chiffrement sur l'hôte"
   ],
   "a": 1
  },
  {
   "l": "Groupe 3 :",
   "o": [
    "Azure Disk Encryption",
    "Un jeu de chiffrement (CMK)",
    "Le chiffrement sur l'hôte",
    "Le chiffrement confidentiel"
   ],
   "a": 2
  },
  {
   "l": "Groupe 4 :",
   "o": [
    "Un jeu de chiffrement (CMK)",
    "Le chiffrement sur l'hôte",
    "Le chiffrement confidentiel",
    "Azure Disk Encryption"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Azure Disk Encryption.</b> BitLocker (Windows) ou dm-crypt (Linux) dans le système invité, clés dans Key Vault. Microsoft recommande désormais le chiffrement sur l'hôte pour les nouveaux déploiements, mais l'exigence porte ici explicitement sur le chiffrement invité.<b>Jeu de chiffrement de disque.</b> Il applique le chiffrement côté serveur avec une clé gérée par le client (et sa rotation automatique) à de nombreux disques.<b>Chiffrement sur l'hôte.</b> Il chiffre aussi le disque temporaire, les caches et les flux vers le stockage, sans agent.<b>Chiffrement confidentiel.</b> Pour les VM confidentielles, il lie les clés au vTPM de la VM, protégeant les données même vis-à-vis de l'hôte.",
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
    "*Groupe 1",
    "Azure Disk Encryption"
   ],
   [
    "Groupe 2",
    "Un jeu de chiffrement (CMK)"
   ],
   [
    "Groupe 3",
    "Le chiffrement sur l'hôte"
   ],
   [
    "Groupe 4",
    "Le chiffrement confidentiel"
   ]
  ]
 },
 "keep": "Invité = ADE. CMK à grande échelle = jeu de chiffrement. Temp et caches = chiffrement sur l'hôte. Contre l'hôte = confidentiel."
}
);
