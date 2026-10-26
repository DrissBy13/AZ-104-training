/* Domaine 3 : calcul (lot D : D3-122 à D3-176) */
AZ.questions.push(
{
 "id": "D3-122",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un modèle Bicep doit créer un groupe de ressources nommé RG-App, puis y déployer un compte de stockage.</p><p>Quelle valeur devez-vous donner à <b>targetScope</b> dans le fichier principal ?</p>",
 "opts": [
  "'subscription'",
  "'managementGroup'",
  "'resourceGroup'",
  "'tenant'"
 ],
 "ans": 0,
 "expl": "<p>Un groupe de ressources se crée à l'échelle de l'<b>abonnement</b> : le fichier principal utilise <code>targetScope = 'subscription'</code>, crée le groupe, puis appelle un <b>module</b> avec <code>scope: rg</code> pour déployer le compte de stockage dans ce groupe.</p><p>'resourceGroup' est la valeur par défaut, mais un modèle à cette étendue ne peut pas créer son propre groupe de ressources.</p>"
},
{
 "id": "D3-123",
 "dom": 3,
 "type": "single",
 "stem": "<p>Dans un fichier Bicep, le paramètre <b>env</b> ne doit accepter que les valeurs dev, test et prod.</p><p>Quel décorateur devez-vous utiliser ?</p>",
 "opts": [
  "@description('dev, test, prod')",
  "@allowed(['dev', 'test', 'prod'])",
  "@secure()",
  "@minLength(3)"
 ],
 "ans": 1,
 "expl": "<p><b>@allowed</b> limite un paramètre à une liste de valeurs : le déploiement échoue avant de commencer si la valeur n'en fait pas partie.</p><p>@secure masque une valeur sensible. @minLength impose une longueur minimale. @description documente le paramètre sans rien contrôler.</p>"
},
{
 "id": "D3-124",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un fichier Bicep doit déployer une adresse IP publique uniquement si le paramètre <b>publicAccess</b> vaut true.</p><p>Comment devez-vous écrire la ressource ?</p>",
 "opts": [
  "resource pip ... = [for i in range(0, publicAccess): { ... }]",
  "resource pip ... existing = { ... }",
  "resource pip 'Microsoft.Network/publicIPAddresses@2023-04-01' = if (publicAccess) { ... }",
  "module pip ... = { dependsOn: [publicAccess] }"
 ],
 "ans": 2,
 "expl": "<p>Le mot-clé <b>if</b> après le signe égal crée un <b>déploiement conditionnel</b> (équivalent de l'élément <code>condition</code> en JSON ARM). Si la condition est fausse, la ressource n'est pas déployée.</p><p>Une boucle sur un booléen n'a pas de sens. existing référence une ressource existante. dependsOn ordonne des déploiements.</p>"
},
{
 "id": "D3-125",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous examinez un fichier de paramètres ARM. Comment la valeur du paramètre vmSize doit-elle être écrite ?</p>",
 "opts": [
  "\"vmSize\": { \"defaultValue\": \"Standard_D2s_v5\" }",
  "\"parameters\": { \"vmSize\": \"Standard_D2s_v5\" }",
  "\"variables\": { \"vmSize\": { \"value\": \"Standard_D2s_v5\" } }",
  "\"parameters\": { \"vmSize\": { \"value\": \"Standard_D2s_v5\" } }"
 ],
 "ans": 3,
 "expl": "<p>Dans un <b>fichier de paramètres</b> JSON, chaque paramètre est un objet avec une propriété <b>value</b> (ou <b>reference</b> pour un secret Key Vault), dans la section <code>parameters</code>.</p><p><code>defaultValue</code> s'écrit dans le <b>modèle</b>, pas dans le fichier de paramètres. Un fichier de paramètres n'a pas de section variables.</p>"
},
{
 "id": "D3-126",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous lancez une opération what-if avant un déploiement en mode Incrémentiel.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Une ressource du modèle qui n'existe pas encore apparaît comme :",
   "o": [
    "Ignore",
    "Modify",
    "Create"
   ],
   "a": 2
  },
  {
   "l": "Une ressource du groupe absente du modèle apparaît comme :",
   "o": [
    "Ignore",
    "Delete",
    "NoChange"
   ],
   "a": 0
  },
  {
   "l": "Une ressource existante dont une propriété du modèle diffère apparaît comme :",
   "o": [
    "Deploy",
    "NoChange",
    "Modify"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Create</b> : la ressource sera créée.</li><li><b>Ignore</b> : en mode Incrémentiel, les ressources absentes du modèle ne sont pas touchées. (En mode Complet, elles apparaîtraient comme <b>Delete</b>.)</li><li><b>Modify</b> : des propriétés vont changer ; what-if les détaille.</li></ul><p>Autres types : NoChange, Deploy (redéployée sans changement connu).</p>"
},
{
 "id": "D3-127",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un groupe de ressources a reçu des milliers de déploiements. Vous craignez d'atteindre la limite de l'historique des déploiements.</p><p>Que fait Azure ?</p>",
 "opts": [
  "Il supprime automatiquement les déploiements les plus anciens quand l'historique approche de 800 entrées",
  "Il bloque tout nouveau déploiement",
  "Il supprime les ressources les plus anciennes",
  "Il archive l'historique dans un compte de stockage"
 ],
 "ans": 0,
 "expl": "<p>L'historique est limité à <b>800 déploiements</b> par étendue. Azure <b>supprime automatiquement</b> les plus anciens quand on approche de la limite (sauf si un verrou l'en empêche). Les ressources ne sont jamais supprimées pour autant.</p>"
},
{
 "id": "D3-128",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez déployer un ensemble de ressources et empêcher leur suppression ou leur modification hors du modèle, tout en gérant leur cycle de vie comme un tout.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un déploiement en mode Incrémentiel",
  "Une pile de déploiement (deployment stack) avec des paramètres de refus",
  "Une Template Spec",
  "Un verrou sur chaque ressource"
 ],
 "ans": 1,
 "expl": "<p>Une <b>pile de déploiement</b> gère un ensemble de ressources comme une unité : elle peut supprimer les ressources retirées du modèle, et appliquer des <b>affectations de refus</b> (DenyDelete ou DenyWriteAndDelete) qui protègent les ressources gérées.</p><p>Une Template Spec stocke un modèle, sans protection. Des verrous individuels sont plus lourds à gérer.</p>"
},
{
 "id": "D3-129",
 "dom": 3,
 "type": "single",
 "stem": "<p>Dans un modèle ARM JSON, vous devez obtenir l'identifiant complet d'un réseau virtuel nommé VNet1 du même groupe de ressources.</p><p>Quelle fonction devez-vous utiliser ?</p>",
 "opts": [
  "reference('VNet1')",
  "uniqueString('VNet1')",
  "resourceId('Microsoft.Network/virtualNetworks', 'VNet1')",
  "concat('VNet1')"
 ],
 "ans": 2,
 "expl": "<p><b>resourceId()</b> construit l'identifiant complet d'une ressource à partir de son type et de son nom (et éventuellement de l'abonnement et du groupe). <b>reference()</b> renvoie l'état d'exécution (propriétés) d'une ressource. <b>uniqueString()</b> génère un hachage déterministe pour des noms uniques.</p>"
},
{
 "id": "D3-130",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une stratégie de réduction (scale-in) d'un groupe de machines virtuelles identiques doit toujours supprimer les VM les plus récentes en premier.</p><p>Quelle stratégie de diminution devez-vous choisir ?</p>",
 "opts": [
  "Default",
  "Manual",
  "OldestVM",
  "NewestVM"
 ],
 "ans": 3,
 "expl": "<p>La stratégie de diminution d'un VMSS peut être <b>Default</b> (équilibre entre zones et domaines d'erreur, puis supprime l'ID d'instance le plus élevé), <b>NewestVM</b> (les plus récentes d'abord) ou <b>OldestVM</b> (les plus anciennes d'abord), toujours en gardant l'équilibre entre zones.</p>"
},
{
 "id": "D3-131",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une instance de VMSS3 exécute un traitement critique de longue durée. Elle ne doit pas être supprimée lors d'une diminution automatique.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "La protection d'instance contre la diminution (scale-in protection)",
  "La stratégie OldestVM",
  "Un verrou Suppression impossible sur VMSS3",
  "Un nombre minimal d'instances plus élevé"
 ],
 "ans": 0,
 "expl": "<p>La <b>protection contre la diminution</b> s'applique à une instance précise : la mise à l'échelle automatique ne la supprimera pas. (La protection contre les actions du groupe la protège aussi des mises à niveau et réimages.)</p><p>Un verrou sur VMSS3 bloquerait toutes les diminutions. Augmenter le minimum ne protège pas une instance précise.</p>"
},
{
 "id": "D3-132",
 "dom": 3,
 "type": "single",
 "stem": "<p>Les instances de VMSS4 tombent parfois en panne applicative sans que la VM s'arrête. Vous voulez qu'elles soient remplacées automatiquement.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Le surprovisionnement",
  "L'extension d'intégrité de l'application (ou une sonde d'équilibreur) et les réparations automatiques d'instance",
  "Le temps de refroidissement",
  "La stratégie de mise à niveau Manuelle"
 ],
 "ans": 1,
 "expl": "<p>Les <b>réparations automatiques d'instance</b> remplacent les instances signalées non saines par l'<b>extension d'intégrité de l'application</b> ou la sonde d'un équilibreur de charge, après un délai de grâce.</p>"
},
{
 "id": "D3-133",
 "dom": 3,
 "type": "single",
 "stem": "<p>Le trafic de votre boutique en ligne augmente toujours de 18 h à 22 h. Vous voulez que VMSS5 ait 10 instances pendant ce créneau et 3 le reste du temps, sans attendre que le CPU monte.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "Une règle basée sur le CPU",
  "Un groupe de placement de proximité",
  "Un profil de mise à l'échelle planifié (basé sur l'heure) avec un nombre d'instances de 10",
  "Une réservation"
 ],
 "ans": 2,
 "expl": "<p>La mise à l'échelle automatique accepte plusieurs <b>profils</b>, dont des profils <b>planifiés</b> (jours et heures récurrents) avec un nombre d'instances fixe ou leurs propres règles. On anticipe ainsi une charge prévisible.</p>"
},
{
 "id": "D3-134",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous gérez les disques de VM.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un disque Ultra peut être utilisé comme disque du système d'exploitation.",
   "a": 1
  },
  {
   "l": "Un disque SSD Premium v2 peut être utilisé comme disque de données.",
   "a": 0
  },
  {
   "l": "Un disque SSD Premium peut être utilisé comme disque du système d'exploitation.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Ultra comme OS : Non.</b> Les disques Ultra (et SSD Premium v2) ne peuvent être que des disques de <b>données</b>.</li><li><b>SSD Premium v2 en données : Oui.</b></li><li><b>SSD Premium comme OS : Oui.</b></li></ul>"
},
{
 "id": "D3-135",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un disque SSD Premium P30 (1 Tio) de VM25 a besoin de plus d'IOPS pendant la clôture mensuelle, mais pas de plus d'espace.</p><p>Que pouvez-vous faire sans changer la taille du disque ?</p>",
 "opts": [
  "Ajouter un disque temporaire",
  "Passer en HDD Standard",
  "Activer le cache Lecture/écriture",
  "Changer le niveau de performance du disque (par exemple vers P40)"
 ],
 "ans": 3,
 "expl": "<p>Pour les SSD Premium, le <b>niveau de performance</b> peut être relevé indépendamment de la taille (par exemple P30 → P40), puis abaissé plus tard (après un délai minimal). Le <b>bursting</b> à la demande est une autre option pour des pics courts sur les grands disques.</p><p>Un HDD Standard serait plus lent. Le cache Lecture/écriture est déconseillé pour les données.</p>"
},
{
 "id": "D3-136",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez charger dans Azure un disque virtuel local pour créer un disque managé.</p><p>Quel format le fichier doit-il avoir ?</p>",
 "opts": [
  "VHD de taille fixe",
  "VHDX dynamique",
  "VHD dynamique",
  "VMDK"
 ],
 "ans": 0,
 "expl": "<p>Azure n'accepte que les disques au format <b>VHD de taille fixe</b>. Un VHDX ou un disque dynamique doit être converti (par exemple avec <code>Convert-VHD</code> sous Hyper-V), et un VMDK doit être converti en VHD.</p>"
},
{
 "id": "D3-137",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un auditeur veut télécharger une copie du disque du système d'exploitation de VM26 au format VHD.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Activer les diagnostics de démarrage",
  "Générer une URL d'exportation (SAS) pour le disque managé, après avoir arrêté (libéré) la VM ou à partir d'un instantané",
  "Utiliser Azure File Sync",
  "Copier le dossier C:\\Windows"
 ],
 "ans": 1,
 "expl": "<p>L'option <b>Exporter</b> d'un disque managé (ou d'un instantané) génère une <b>URL SAS</b> temporaire pour télécharger le VHD. Le disque ne doit pas être attaché à une VM en cours d'exécution : on libère la VM ou on exporte un instantané.</p>"
},
{
 "id": "D3-138",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez créer une nouvelle VM à partir d'un instantané du disque du système d'exploitation de VM27.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Attacher l'instantané comme disque de données",
  "Restaurer l'instantané dans un compte de stockage",
  "Créer un disque managé à partir de l'instantané, puis créer une VM à partir de ce disque",
  "Créer une VM et choisir l'instantané comme image de la Marketplace"
 ],
 "ans": 2,
 "expl": "<p>On crée d'abord un <b>disque managé</b> à partir de l'instantané, puis une <b>VM à partir de ce disque</b> (option Créer une VM sur le disque). La nouvelle VM est spécialisée : elle garde le nom d'ordinateur et les comptes de l'original.</p>"
},
{
 "id": "D3-139",
 "dom": 3,
 "type": "single",
 "stem": "<p>Des VM sans état d'un groupe identique doivent démarrer très vite et réinitialiser leur système à chaque redémarrage. Les données du disque du système d'exploitation n'ont pas besoin d'être conservées.</p><p>Quel type de disque du système d'exploitation devez-vous utiliser ?</p>",
 "opts": [
  "Un disque Ultra",
  "Un SSD Premium avec cache Lecture/écriture",
  "Un disque partagé",
  "Un disque de système d'exploitation éphémère"
 ],
 "ans": 3,
 "expl": "<p>Le <b>disque de système d'exploitation éphémère</b> est créé sur le stockage local de l'hôte (cache ou disque temporaire) : lecture et réimage plus rapides, pas de coût de stockage. Mais il est perdu si la VM change d'hôte, et la VM ne peut pas être arrêtée avec libération.</p>"
},
{
 "id": "D3-140",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez créer une image généralisée d'une VM <b>Linux</b>.</p><p>Quelle commande devez-vous exécuter dans la VM avant de la capturer ?</p>",
 "opts": [
  "sudo waagent -deprovision+user",
  "az vm deallocate",
  "sudo shutdown -h now uniquement",
  "sysprep /generalize"
 ],
 "ans": 0,
 "expl": "<p>Sous Linux, l'agent de VM Azure retire les informations propres à la machine avec <code>waagent -deprovision+user</code> (qui supprime aussi le dernier compte utilisateur). On libère ensuite la VM, on la marque généralisée (<code>az vm generalize</code>) et on capture l'image.</p><p>Sysprep est l'outil Windows.</p>"
},
{
 "id": "D3-141",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez capturer une VM <b>sans</b> la généraliser, pour créer des copies qui gardent ses comptes et sa configuration.</p><p>Quel type de définition d'image devez-vous créer dans la galerie Azure Compute ?</p>",
 "opts": [
  "Généralisée",
  "Spécialisée",
  "Marketplace",
  "Éphémère"
 ],
 "ans": 1,
 "expl": "<p>Une image <b>spécialisée</b> conserve le nom d'ordinateur, les comptes et la configuration. Les VM créées à partir d'elle ne passent pas par l'étape de provisionnement (pas de nouveau compte administrateur).</p><p>Une image <b>généralisée</b> a été préparée avec Sysprep ou waagent, et chaque nouvelle VM reçoit son propre nom et son compte administrateur.</p>"
},
{
 "id": "D3-142",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM28 ne démarre plus à cause d'un pilote défectueux. Vous voulez réparer le disque du système d'exploitation depuis une autre VM.</p><p>Quelle démarche Microsoft recommande-t-elle ?</p>",
 "opts": [
  "Redimensionner VM28",
  "Activer Always On",
  "Créer une VM de réparation, y attacher une copie du disque du système d'exploitation, corriger, puis remplacer le disque de VM28 (par exemple avec az vm repair)",
  "Supprimer VM28 et ses disques"
 ],
 "ans": 2,
 "expl": "<p>La commande <b>az vm repair</b> automatise la démarche : création d'une VM de réparation, attachement d'une <b>copie</b> du disque du système d'exploitation comme disque de données, exécution de scripts de correction, puis <b>échange du disque du système d'exploitation</b> de la VM d'origine (swap OS disk).</p>"
},
{
 "id": "D3-143",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez appliquer et maintenir une configuration d'état souhaité (rôles Windows, fichiers, services) sur des VM, et signaler les dérives.</p><p>Quelle solution Microsoft recommande-t-elle aujourd'hui ?</p>",
 "opts": [
  "Les diagnostics de démarrage",
  "La console série",
  "Une Template Spec",
  "Azure Machine Configuration (configuration invité d'Azure Policy)"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Machine Configuration</b> (anciennement configuration invité d'Azure Policy) audite et applique des configurations basées sur DSC dans les VM Azure et les serveurs Arc, et remonte la conformité. Il remplace progressivement Azure Automation State Configuration et l'extension DSC.</p>"
},
{
 "id": "D3-144",
 "dom": 3,
 "type": "single",
 "stem": "<p>L'extension Custom Script échoue sur VM29. Vous devez lire la sortie du script et le message d'erreur.</p><p>Où trouvez-vous ces informations ?</p>",
 "opts": [
  "Dans l'état de l'extension (portail : Extensions + applications) et dans les journaux de l'agent dans la VM",
  "Dans Azure Advisor",
  "Dans la facture",
  "Dans les métriques du compte de stockage"
 ],
 "ans": 0,
 "expl": "<p>Le portail affiche l'<b>état détaillé</b> de l'extension (sortie et erreur). Dans la VM, les journaux sont sous <code>C:\\WindowsAzure\\Logs\\Plugins\\</code> (Windows) ou <code>/var/log/azure/</code> (Linux). Pour réexécuter le même script, il faut supprimer puis réinstaller l'extension, ou changer un paramètre.</p>"
},
{
 "id": "D3-145",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous créez une VM Windows Server et votre entreprise a des licences Windows Server avec Software Assurance.</p><p>Quelle option devez-vous cocher lors de la création pour réduire le coût ?</p>",
 "opts": [
  "Instance Spot Azure",
  "Utiliser une licence Windows Server existante (Azure Hybrid Benefit)",
  "Mise en réseau accélérée",
  "Diagnostics de démarrage"
 ],
 "ans": 1,
 "expl": "<p>L'option <b>Azure Hybrid Benefit</b> (« Utiliser une licence Windows Server existante ») facture la VM au tarif d'une VM Linux de base, sans le coût de la licence Windows. Elle peut aussi être activée après la création.</p>"
},
{
 "id": "D3-146",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez garantir que les VM critiques de VMSS6 soient réparties dans les trois zones de disponibilité de la région.</p><p>Quand devez-vous configurer les zones ?</p>",
 "opts": [
  "Lors de la mise à niveau des instances",
  "À tout moment, en modifiant les propriétés",
  "À la création du groupe identique",
  "Après avoir ajouté un équilibreur de charge"
 ],
 "ans": 2,
 "expl": "<p>Les <b>zones</b> d'un groupe de machines virtuelles identiques (et d'une VM) se choisissent à la <b>création</b>. Pour un groupe existant, l'ajout de zones est limité ; en pratique, on recrée le groupe.</p><p>L'équilibreur de charge doit être de SKU Standard (redondant interzone) pour répartir le trafic entre zones.</p>"
},
{
 "id": "D3-147",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déplacez une VM vers une zone de disponibilité alors qu'elle a été créée sans zone (régionale).</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "Il suffit de modifier la propriété Zone de la VM",
  "Il suffit de redémarrer la VM",
  "C'est impossible, même en recréant la VM",
  "Il faut recréer la VM dans la zone (Azure Resource Mover ou recréation à partir des disques)"
 ],
 "ans": 3,
 "expl": "<p>La zone d'une VM est fixée à la création. Pour passer d'une VM régionale à une VM zonale, on la <b>recrée</b> dans la zone voulue (Azure Resource Mover propose ce scénario, ou on recrée à partir d'instantanés des disques).</p>"
},
{
 "id": "D3-148",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'outil adapté pour chaque tâche sur une VM.</p><p>Pour répondre, faites glisser l'outil approprié vers chaque tâche. Chaque outil peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Outils",
 "srcs": [
  "Extension Custom Script",
  "Exécuter la commande",
  "Réinitialiser le mot de passe",
  "Redéployer",
  "Console série"
 ],
 "tgtHead": [
  "Tâche",
  "Outil"
 ],
 "tgts": [
  {
   "l": "Installer un logiciel sur 20 VM au moment de leur déploiement par modèle",
   "a": 0
  },
  {
   "l": "Lancer ipconfig /all une fois pour diagnostiquer",
   "a": 1
  },
  {
   "l": "Corriger la configuration RDP qui bloque les connexions",
   "a": 2
  },
  {
   "l": "Déplacer la VM sur un nouvel hôte après des erreurs matérielles",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Custom Script</b> : configuration automatisée, idéale dans un modèle.</li><li><b>Exécuter la commande</b> : script ponctuel de diagnostic.</li><li><b>Réinitialiser le mot de passe</b> : propose aussi « Réinitialiser la configuration uniquement » pour RDP (VMAccess).</li><li><b>Redéployer</b> : nouvel hôte.</li></ul><p>La console série sert quand la VM n'a plus de réseau ni de démarrage normal.</p>"
},
{
 "id": "D3-149",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez restaurer VM30 à partir d'un instantané de son disque du système d'exploitation, sans recréer la VM.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Créer un disque managé à partir de l'instantané",
  "Arrêter (libérer) VM30",
  "Échanger le disque du système d'exploitation de VM30 avec le nouveau disque",
  "Redémarrer VM30",
  "Supprimer VM30",
  "Généraliser le nouveau disque avec Sysprep"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>On crée un <b>disque</b> depuis l'instantané, on <b>libère</b> la VM, on utilise <b>Échanger le disque du système d'exploitation</b> (swap OS disk), puis on <b>démarre</b> la VM. L'ancien disque reste disponible tant qu'on ne le supprime pas.</p><p>Il ne faut ni supprimer la VM ni généraliser le disque, ce qui le rendrait inutilisable pour cette VM.</p>"
},
{
 "id": "D3-150",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une galerie Azure Compute contient une version d'image répliquée en France Central uniquement. Vous voulez créer des VM à partir d'elle en West Europe.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Ajouter West Europe aux régions de réplication de la version d'image",
  "Rien : une galerie est mondiale",
  "Créer une nouvelle galerie en West Europe et recommencer depuis le début",
  "Copier l'image avec AzCopy"
 ],
 "ans": 0,
 "expl": "<p>Une <b>version d'image</b> doit être <b>répliquée</b> dans chaque région où l'on veut l'utiliser. On ajoute West Europe aux régions cibles (avec un nombre de réplicas adapté au nombre de VM créées en même temps).</p>"
},
{
 "id": "D3-151",
 "dom": 3,
 "type": "single",
 "stem": "<p>Des milliers de VM vont être créées en même temps à partir de la même version d'image dans West Europe. Les créations ralentissent.</p><p>Que devez-vous augmenter ?</p>",
 "opts": [
  "Le nombre de domaines d'erreur",
  "Le nombre de réplicas de la version d'image dans la région",
  "La taille des VM",
  "Le quota de stockage"
 ],
 "ans": 1,
 "expl": "<p>Chaque <b>réplica</b> d'une version d'image peut servir un nombre limité de créations simultanées. Augmenter le nombre de réplicas dans la région répartit la charge et accélère les déploiements à grande échelle.</p>"
},
{
 "id": "D3-152",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un développeur veut ouvrir une invite de commande dans l'environnement de son application web pour inspecter les fichiers déployés.</p><p>Quel outil d'App Service doit-il utiliser ?</p>",
 "opts": [
  "Azure Bastion",
  "La console série",
  "La console Kudu (Outils avancés, site SCM)",
  "RDP vers l'instance"
 ],
 "ans": 2,
 "expl": "<p><b>Kudu</b> (Outils avancés, à l'adresse <code>&lt;app&gt;.scm.azurewebsites.net</code>) donne une console de débogage, l'explorateur de fichiers, les variables d'environnement, les journaux et les déploiements. Sous Linux, on dispose aussi de SSH dans le conteneur.</p><p>On ne se connecte pas en RDP aux instances App Service.</p>"
},
{
 "id": "D3-153",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web doit exécuter en continu un script de traitement en arrière-plan, sur les mêmes instances que l'application.</p><p>Quelle fonctionnalité d'App Service devez-vous utiliser ?</p>",
 "opts": [
  "Un emplacement de déploiement",
  "Le contrôle d'intégrité",
  "Une sauvegarde planifiée",
  "Une tâche web (WebJob) continue, avec Always On activé"
 ],
 "ans": 3,
 "expl": "<p>Les <b>WebJobs</b> exécutent des scripts ou programmes en arrière-plan dans le contexte de l'application, de façon <b>continue</b> ou <b>déclenchée</b> (planifiée). Une tâche continue exige <b>Always On</b> pour ne pas s'arrêter quand l'application se décharge.</p>"
},
{
 "id": "D3-154",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web Windows et une application web Linux doivent être hébergées.</p><p>Peuvent-elles partager le même plan App Service ?</p>",
 "opts": [
  "Non, un plan est soit Windows soit Linux",
  "Oui, si les deux applications utilisent .NET",
  "Oui, sans restriction",
  "Oui, si le plan est Premium"
 ],
 "ans": 0,
 "expl": "<p>Le système d'exploitation est une propriété du <b>plan</b> : un plan Windows n'héberge que des applications Windows, et un plan Linux que des applications Linux (code ou conteneurs).</p>"
},
{
 "id": "D3-155",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web hébergée dans Azure doit accéder à une API interne d'un serveur local, sans VPN, avec seulement des connexions sortantes depuis le site local.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un emplacement de déploiement",
  "Les connexions hybrides d'App Service",
  "Des restrictions d'accès",
  "Un point de terminaison privé"
 ],
 "ans": 1,
 "expl": "<p>Les <b>connexions hybrides</b> utilisent Azure Relay : un agent (Hybrid Connection Manager) installé sur le site local ouvre une connexion sortante, et l'application atteint ainsi un hôte et un port précis, sans VPN ni ouverture de port entrant.</p>"
},
{
 "id": "D3-156",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez voir en direct les journaux d'une application web pendant que vous reproduisez un bug.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Le journal d'activité",
  "La page Sauvegardes",
  "Le flux de journaux (Log stream), après avoir activé la journalisation des applications",
  "Azure Advisor"
 ],
 "ans": 2,
 "expl": "<p>Le <b>flux de journaux</b> affiche en temps réel les journaux d'application et de serveur web, à condition que la journalisation soit activée dans <b>Journaux App Service</b>. On peut aussi les suivre avec <code>az webapp log tail</code>.</p>"
},
{
 "id": "D3-157",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application web lente renvoie des erreurs 500. Vous voulez un diagnostic guidé avec des analyses automatiques des causes courantes.</p><p>Quel outil d'App Service devez-vous ouvrir ?</p>",
 "opts": [
  "Identité",
  "Domaines personnalisés",
  "Centre de déploiement",
  "Diagnostiquer et résoudre les problèmes"
 ],
 "ans": 3,
 "expl": "<p><b>Diagnostiquer et résoudre les problèmes</b> propose des détecteurs (disponibilité et performances, plantages, mémoire, CPU, configuration) qui analysent automatiquement l'application et suggèrent des solutions.</p>"
},
{
 "id": "D3-158",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez un fichier ZIP contenant le code d'une application sur WebApp22, avec Azure CLI.</p><p>Quelle commande devez-vous utiliser ?</p>",
 "opts": [
  "az webapp deploy --src-path app.zip --type zip",
  "az acr build app.zip",
  "az webapp create --zip app.zip",
  "az storage blob upload app.zip"
 ],
 "ans": 0,
 "expl": "<p><code>az webapp deploy --resource-group RG1 --name WebApp22 --src-path app.zip --type zip</code> déploie le paquet (ZIP deploy). L'ancienne commande <code>az webapp deployment source config-zip</code> fait la même chose.</p>"
},
{
 "id": "D3-159",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez que les images non étiquetées (manifestes orphelins) de ACR6 soient supprimées automatiquement après 7 jours.</p><p>Que devez-vous configurer ?</p>",
 "opts": [
  "La géoréplication",
  "Une stratégie de rétention des manifestes non étiquetés (niveau Premium)",
  "Une stratégie de cycle de vie de compte de stockage",
  "Le compte administrateur"
 ],
 "ans": 1,
 "expl": "<p>La <b>stratégie de rétention</b> d'ACR supprime automatiquement les manifestes <b>non étiquetés</b> après un nombre de jours. Elle est disponible au niveau <b>Premium</b>. On peut aussi utiliser des tâches ACR de purge (<code>acr purge</code>) planifiées.</p>"
},
{
 "id": "D3-160",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez que l'image de votre application soit reconstruite automatiquement dans ACR7 chaque fois que l'image de base (par exemple node:20) est mise à jour.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "La géoréplication",
  "Un webhook vers Azure Advisor",
  "Une tâche ACR avec un déclencheur de mise à jour de l'image de base",
  "Une stratégie de rétention"
 ],
 "ans": 2,
 "expl": "<p>Les <b>tâches ACR</b> peuvent se déclencher sur un commit de code source, une planification ou la <b>mise à jour de l'image de base</b> : elles reconstruisent alors automatiquement l'image dépendante, par exemple pour appliquer des correctifs de sécurité.</p>"
},
{
 "id": "D3-161",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un partenaire doit pouvoir tirer uniquement les images du dépôt app-partenaire de ACR8, et aucun autre dépôt.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Un point de terminaison privé",
  "Le rôle AcrPull sur le registre",
  "Le compte administrateur",
  "Un jeton délimité au dépôt avec une carte d'étendue (scope map) qui autorise le tirage sur app-partenaire"
 ],
 "ans": 3,
 "expl": "<p>Les <b>jetons délimités aux dépôts</b>, associés à une <b>carte d'étendue</b>, donnent des droits (lecture, écriture) sur des dépôts précis. Le rôle AcrPull s'applique à <b>tous</b> les dépôts du registre.</p>"
},
{
 "id": "D3-162",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez un groupe de conteneurs ACI avec un conteneur d'application et un conteneur de journalisation, à partir d'un fichier de définition.</p><p>Quel format de fichier pouvez-vous utiliser avec az container create --file ?</p>",
 "opts": [
  "YAML",
  "fichier .bicepparam",
  "CSV",
  "Dockerfile"
 ],
 "ans": 0,
 "expl": "<p>Pour un groupe à <b>plusieurs conteneurs</b>, on décrit le groupe dans un fichier <b>YAML</b> (passé avec <code>--file</code>) ou dans un modèle ARM/Bicep. La CLI seule, sans fichier, ne crée qu'un conteneur.</p><p>Un Dockerfile décrit la construction d'une image, pas un déploiement.</p>"
},
{
 "id": "D3-163",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application Azure Container Apps ne doit être joignable que par les autres applications du même environnement, jamais depuis Internet.</p><p>Comment devez-vous configurer l'entrée (ingress) ?</p>",
 "opts": [
  "Désactivée",
  "Activée, avec un trafic limité à l'environnement Container Apps (interne)",
  "Activée, avec un trafic accepté de partout",
  "Activée avec une adresse IP publique statique"
 ],
 "ans": 1,
 "expl": "<p>L'<b>entrée interne</b> (limitée à l'environnement) rend l'application joignable uniquement par les autres applications de l'environnement, ou par le réseau virtuel de l'environnement. L'entrée <b>externe</b> l'exposerait à Internet. Sans entrée, l'application ne reçoit aucune requête HTTP (utile pour des traitements en arrière-plan).</p>"
},
{
 "id": "D3-164",
 "dom": 3,
 "type": "single",
 "stem": "<p>Plusieurs applications Azure Container Apps doivent partager le même réseau virtuel et le même espace de travail Log Analytics.</p><p>Où définissez-vous ces réglages communs ?</p>",
 "opts": [
  "Dans le registre de conteneurs",
  "Dans le plan App Service",
  "Dans l'environnement Container Apps",
  "Dans chaque révision"
 ],
 "ans": 2,
 "expl": "<p>L'<b>environnement</b> Container Apps est la limite sécurisée qui regroupe des applications : il définit le réseau virtuel, la journalisation (Log Analytics) et les profils de charge de travail. Les applications d'un même environnement communiquent entre elles.</p>"
},
{
 "id": "D3-165",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un traitement conteneurisé doit s'exécuter chaque nuit à 2 h dans Azure Container Apps, puis s'arrêter.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Une révision par jour",
  "Un groupe de conteneurs ACI avec Always",
  "Une application avec entrée externe",
  "Un travail (job) Container Apps de type planifié"
 ],
 "ans": 3,
 "expl": "<p>Les <b>travaux</b> Container Apps exécutent des conteneurs qui se terminent : déclenchement <b>manuel</b>, <b>planifié</b> (expression cron) ou <b>par événement</b>. Ils conviennent mieux qu'une application qui tourne en permanence.</p>"
},
{
 "id": "D3-166",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous déployez une application dans Azure Container Apps.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Modifier l'image du conteneur crée une nouvelle révision.",
   "a": 0
  },
  {
   "l": "Modifier une règle de mise à l'échelle crée une nouvelle révision.",
   "a": 0
  },
  {
   "l": "Vous devez gérer les nœuds du cluster sous-jacent.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Image : Oui.</b> Les changements de « modèle » (image, variables d'environnement, ressources, règles de mise à l'échelle) créent une nouvelle révision.</li><li><b>Règle de mise à l'échelle : Oui</b>, elle fait partie du modèle de révision.</li><li><b>Nœuds : Non.</b> Container Apps est serverless : Azure gère l'infrastructure (Kubernetes) pour vous.</li></ul>"
},
{
 "id": "D3-167",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous examinez la ressource Bicep suivante :</p><pre>param count int = 3\n\nresource disks 'Microsoft.Compute/disks@2023-04-02' = [for i in range(0, count): {\n  name: 'data-${i}'\n  location: resourceGroup().location\n  sku: { name: 'Premium_LRS' }\n  properties: {\n    creationData: { createOption: 'Empty' }\n    diskSizeGB: 128\n  }\n}]</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Nombre de disques créés avec la valeur par défaut :",
   "o": [
    "1",
    "3",
    "4"
   ],
   "a": 1
  },
  {
   "l": "Nom du dernier disque :",
   "o": [
    "data-2",
    "data-3",
    "data-count"
   ],
   "a": 0
  },
  {
   "l": "Type de disque :",
   "o": [
    "SSD Premium LRS",
    "HDD Standard",
    "SSD Standard"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><code>range(0, 3)</code> produit 0, 1, 2 : <b>3 disques</b>.</li><li>Le dernier se nomme <b>data-2</b>.</li><li><code>Premium_LRS</code> : <b>SSD Premium</b> en redondance locale. (StandardSSD_LRS serait du SSD Standard, Standard_LRS du HDD Standard.)</li></ul>"
},
{
 "id": "D3-168",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous choisissez une option de disponibilité pour chaque application, au coût le plus bas.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Application interne qui tolère quelques heures d'arrêt par an :",
   "o": [
    "Une VM avec SSD Premium",
    "Zones de disponibilité",
    "Groupe à haute disponibilité"
   ],
   "a": 0
  },
  {
   "l": "Application qui doit survivre à la panne d'un rack :",
   "o": [
    "Deux régions",
    "Groupe à haute disponibilité",
    "Une VM avec SSD Premium"
   ],
   "a": 1
  },
  {
   "l": "Application qui doit survivre à la perte d'un centre de données :",
   "o": [
    "Une VM avec SSD Premium",
    "Zones de disponibilité",
    "Groupe à haute disponibilité"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Une VM avec SSD Premium</b> : SLA de 99,9 % (environ 8,8 heures d'arrêt par an au maximum).</li><li><b>Groupe à haute disponibilité</b> : protège contre la panne d'un rack (domaines d'erreur) et la maintenance.</li><li><b>Zones de disponibilité</b> : protège contre la perte d'un centre de données.</li></ul>"
},
{
 "id": "D3-169",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez la VM VM31 pour un serveur web de production. Elle doit être dans la zone 1, sans adresse IP publique, avec un disque du système d'exploitation SSD Premium, et la licence Windows existante de l'entreprise.</p><p>Comment devez-vous configurer la VM ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Créer une machine virtuelle",
  "sub": "Machines virtuelles",
  "rows": [
   {
    "k": "head",
    "t": "Informations de base"
   },
   {
    "k": "select",
    "l": "Options de disponibilité",
    "o": [
     "Aucune redondance d'infrastructure requise",
     "Zone de disponibilité",
     "Groupe à haute disponibilité"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Zone de disponibilité",
    "o": [
     "Zone 1",
     "Zone 2",
     "Zone 3"
    ],
    "a": 0
   },
   {
    "k": "check",
    "l": "Utiliser une licence Windows Server existante",
    "a": true
   },
   {
    "k": "head",
    "t": "Disques"
   },
   {
    "k": "select",
    "l": "Type de disque du système d'exploitation",
    "o": [
     "HDD Standard",
     "SSD Standard",
     "SSD Premium"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Mise en réseau"
   },
   {
    "k": "select",
    "l": "Adresse IP publique",
    "o": [
     "(nouveau) VM31-ip",
     "Aucun"
    ],
    "d": 0,
    "a": 1
   }
  ]
 },
 "expl": "<ul><li><b>Zone de disponibilité</b>, <b>Zone 1</b>.</li><li><b>Licence existante</b> : Azure Hybrid Benefit.</li><li><b>SSD Premium</b> pour le disque du système d'exploitation.</li><li>Adresse IP publique : <b>Aucun</b>. L'accès d'administration passera par Azure Bastion ou un VPN.</li></ul>"
},
{
 "id": "D3-170",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez un groupe de machines virtuelles identiques. Les instances doivent être réparties sur les zones 1, 2 et 3, se mettre à jour par lots en vérifiant l'intégrité, et être remplacées automatiquement si elles deviennent défaillantes.</p><p>Comment devez-vous configurer le groupe ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Créer un groupe de machines virtuelles identiques",
  "sub": "Groupes de machines virtuelles identiques",
  "rows": [
   {
    "k": "select",
    "l": "Zone de disponibilité",
    "o": [
     "Aucune",
     "Zone 1",
     "Zones 1, 2, 3"
    ],
    "a": 2
   },
   {
    "k": "select",
    "l": "Mode d'orchestration",
    "o": [
     "Uniforme",
     "Flexible"
    ],
    "d": 1,
    "a": null
   },
   {
    "k": "head",
    "t": "Gestion"
   },
   {
    "k": "select",
    "l": "Mode de mise à niveau",
    "o": [
     "Manuel",
     "Automatique",
     "Propagé (Rolling)"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Intégrité"
   },
   {
    "k": "check",
    "l": "Activer la supervision de l'intégrité de l'application",
    "a": true
   },
   {
    "k": "check",
    "l": "Réparations automatiques",
    "a": true
   }
  ]
 },
 "expl": "<ul><li><b>Zones 1, 2, 3</b> : répartition sur les trois zones.</li><li><b>Propagé</b> : mise à jour par lots avec vérification de l'intégrité.</li><li><b>Supervision de l'intégrité</b> et <b>réparations automatiques</b> : remplacement des instances défaillantes.</li></ul><p>Le mode d'orchestration n'est pas noté ici : les deux le permettent, Flexible étant recommandé.</p>"
},
{
 "id": "D3-171",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez réinitialiser la clé SSH du compte azureuser sur la VM Linux VM32.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "VM32 | Machine virtuelle",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité",
     "Contrôle d'accès (IAM)"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Mise en réseau",
     "Disques",
     "Taille",
     "Extensions + applications",
     "Configuration"
    ]
   },
   {
    "g": "Aide",
    "items": [
     "Diagnostics de démarrage",
     "Console série",
     "Réinitialiser le mot de passe",
     "Redéployer + réappliquer",
     "Exécuter la commande"
    ]
   }
  ]
 },
 "ans": "Réinitialiser le mot de passe",
 "expl": "<p><b>Réinitialiser le mot de passe</b> propose, pour Linux, de réinitialiser un mot de passe, une <b>clé publique SSH</b>, ou seulement la configuration SSH. Il s'appuie sur l'extension VMAccess.</p>"
},
{
 "id": "D3-172",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez ajouter un disque de données de 512 Gio à VM33.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "win": {
  "title": "VM33 | Machine virtuelle",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité",
     "Étiquettes"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Mise en réseau",
     "Connecter",
     "Disques",
     "Taille",
     "Microsoft Defender pour le cloud",
     "Extensions + applications",
     "Disponibilité + mise à l'échelle"
    ]
   },
   {
    "g": "Opérations",
    "items": [
     "Arrêt automatique",
     "Sauvegarde",
     "Récupération d'urgence"
    ]
   }
  ]
 },
 "ans": "Disques",
 "expl": "<p>La page <b>Disques</b> permet de créer et attacher un nouveau disque, d'attacher un disque existant, de détacher, de changer le cache de l'hôte et d'échanger le disque du système d'exploitation.</p>"
},
{
 "id": "D3-173",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous devez réduire au minimum le coût d'un environnement de test de 10 VM utilisé uniquement en semaine de 8 h à 18 h.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Configurer l'arrêt automatique des VM à 18 h",
  "Démarrer les VM à 8 h avec une automatisation (par exemple Start/Stop VMs v2 ou un runbook)",
  "Acheter des réservations de 3 ans",
  "Utiliser des disques Ultra"
 ],
 "ans": [
  0,
  1
 ],
 "expl": "<ul><li><b>Arrêt automatique : oui</b>, il libère les VM chaque soir.</li><li><b>Démarrage automatisé : oui</b>, l'arrêt automatique intégré ne redémarre pas les VM ; il faut une automatisation pour les démarrer le matin.</li><li><b>Réservations : non</b>, elles sont rentables pour des VM qui tournent en continu.</li><li><b>Disques Ultra : non</b>, ils sont chers.</li></ul>"
},
{
 "id": "D3-174",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Vous déployez un modèle ARM qui contient un mot de passe administrateur.</p><p>Quelles <b>deux</b> pratiques protègent le mieux ce secret ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "opts": [
  "Définir le mot de passe comme valeur par défaut du paramètre",
  "Référencer le secret depuis Key Vault dans le fichier de paramètres",
  "Déclarer le paramètre avec le type securestring",
  "Renvoyer le mot de passe dans une sortie (output)"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<ul><li><b>securestring : oui</b>, la valeur n'apparaît pas dans l'historique.</li><li><b>Référence Key Vault : oui</b>, le secret n'est jamais écrit dans un fichier.</li><li><b>Valeur par défaut : non</b>, le secret serait dans le modèle.</li><li><b>Sortie : non</b>, les sorties sont visibles dans l'historique.</li></ul>"
},
{
 "id": "D3-175",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez déployer à la fois un modèle principal et plusieurs modèles liés stockés dans un compte de stockage privé.</p><p>Comment le modèle principal peut-il accéder aux modèles liés ?</p>",
 "opts": [
  "Avec une URL qui contient un jeton SAS (templateLink.uri)",
  "Avec un chemin local C:\\templates",
  "Les modèles liés doivent être publics, sans exception",
  "Avec la clé du compte dans le modèle"
 ],
 "ans": 0,
 "expl": "<p>Un <b>modèle lié</b> est référencé par une URL (<code>templateLink.uri</code>) que Resource Manager doit pouvoir lire. Pour un stockage privé, on ajoute un <b>jeton SAS</b> à l'URL (passé en paramètre sécurisé). Les Template Specs et les modules Bicep évitent aujourd'hui ce besoin.</p>"
},
{
 "id": "D3-176",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez permettre aux administrateurs de se connecter en RDP à VM34 uniquement pendant 3 heures, sur demande, avec le port 3389 fermé le reste du temps.</p><p>Quelle fonctionnalité devez-vous utiliser ?</p>",
 "opts": [
  "Un emplacement de déploiement",
  "L'accès juste-à-temps (JIT) aux VM de Microsoft Defender pour le cloud",
  "Un groupe à haute disponibilité",
  "Les diagnostics de démarrage"
 ],
 "ans": 1,
 "expl": "<p>L'<b>accès JIT</b> ferme les ports de gestion par des règles de NSG (ou du Pare-feu Azure) et ne les ouvre, sur demande approuvée, que pour l'adresse IP du demandeur et une durée limitée. Il demande Defender pour serveurs. Azure Bastion est une autre solution qui évite tout port ouvert.</p>"
}
);
