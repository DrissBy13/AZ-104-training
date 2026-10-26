/* Domaine 3 : calcul (lot B : D3-012 à D3-066) */
AZ.questions.push(
{
 "id": "D3-012",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez un modèle ARM dans le groupe de ressources RG1 en mode <b>Complet</b>. RG1 contient VM1, qui n'est pas décrite dans le modèle.</p><p>Que se passe-t-il pour VM1 ?</p>",
 "opts": [
  "VM1 est supprimée",
  "Le déploiement échoue",
  "VM1 est conservée sans changement",
  "VM1 est arrêtée"
 ],
 "ans": 0,
 "expl": "<p>En mode <b>Complet</b>, Resource Manager <b>supprime</b> les ressources du groupe de ressources qui ne sont pas dans le modèle (sauf si un verrou l'en empêche). En mode <b>Incrémentiel</b>, le mode par défaut, les ressources absentes du modèle sont conservées.</p><p>Bonne pratique : lancer d'abord une opération <b>what-if</b> pour voir ce qui serait supprimé.</p>"
},
{
 "id": "D3-013",
 "dom": 3,
 "type": "single",
 "stem": "<p>Avant de déployer un modèle Bicep modifié dans RG-Prod, vous voulez voir la liste des ressources qui seront créées, modifiées ou supprimées, sans rien changer.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "az group export",
  "az deployment group what-if",
  "az bicep decompile",
  "az deployment group validate uniquement"
 ],
 "ans": 1,
 "expl": "<p><b>what-if</b> compare le modèle à l'état actuel et affiche les changements prévus : créations, modifications (propriété par propriété), suppressions (en mode Complet), sans rien déployer.</p><p><b>validate</b> vérifie seulement que le modèle est valide et déployable. <b>decompile</b> convertit du JSON en Bicep. <b>export</b> produit un modèle à partir de l'existant.</p>"
},
{
 "id": "D3-014",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous écrivez un modèle ARM. Vous devez placer chaque élément dans la bonne section.</p><p>Pour répondre, faites glisser la section appropriée vers chaque élément. Chaque section peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Sections",
 "srcs": [
  "parameters",
  "variables",
  "resources",
  "outputs"
 ],
 "tgtHead": [
  "Élément",
  "Section"
 ],
 "tgts": [
  {
   "l": "Le mot de passe administrateur saisi au déploiement",
   "a": 0
  },
  {
   "l": "Un nom calculé à partir d'un préfixe et de uniqueString()",
   "a": 1
  },
  {
   "l": "La définition du compte de stockage",
   "a": 2
  },
  {
   "l": "L'adresse IP publique de la VM, à afficher à la fin du déploiement",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>parameters</b> : valeurs fournies au déploiement (avec type, valeur par défaut, valeurs autorisées ; <code>securestring</code> pour un mot de passe).</li><li><b>variables</b> : valeurs calculées dans le modèle, réutilisées plusieurs fois.</li><li><b>resources</b> : les ressources à déployer.</li><li><b>outputs</b> : valeurs renvoyées après le déploiement.</li></ul>"
},
{
 "id": "D3-015",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un modèle ARM doit demander le mot de passe administrateur d'une VM sans qu'il apparaisse dans l'historique des déploiements.</p><p>Quel type de paramètre devez-vous utiliser ?</p>",
 "opts": [
  "string",
  "secureobject avec valeur par défaut",
  "securestring",
  "object"
 ],
 "ans": 2,
 "expl": "<p>Le type <b>securestring</b> n'est ni journalisé ni renvoyé dans l'historique des déploiements. Mieux encore : référencer un secret de <b>Key Vault</b> dans le fichier de paramètres, pour ne jamais saisir le mot de passe.</p><p>Un <code>string</code> apparaîtrait dans l'historique. Une valeur par défaut pour un secret est une mauvaise pratique.</p>"
},
{
 "id": "D3-016",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un fichier de paramètres de modèle ARM doit fournir le mot de passe administrateur depuis le coffre de clés KV1, sans le copier dans le fichier.</p><p>Quelle condition KV1 doit-il remplir ?</p>",
 "opts": [
  "KV1 doit utiliser des stratégies d'accès uniquement",
  "KV1 doit avoir un point de terminaison public désactivé",
  "KV1 doit être dans le même groupe de ressources que la VM",
  "L'option « Azure Resource Manager pour le déploiement de modèles » doit être activée sur KV1"
 ],
 "ans": 3,
 "expl": "<p>Pour qu'un déploiement lise un secret par référence (<code>\"reference\": { \"keyVault\": { \"id\": ... }, \"secretName\": ... }</code>), le coffre doit avoir <b>enabledForTemplateDeployment</b> activé, et l'utilisateur qui déploie doit avoir l'autorisation <code>Microsoft.KeyVault/vaults/deploy/action</code>.</p><p>Le coffre peut être dans un autre groupe de ressources, et le modèle d'autorisation n'a pas d'importance pour ce réglage.</p>"
},
{
 "id": "D3-017",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez une VM et son interface réseau avec un modèle ARM. Le déploiement échoue parfois car la VM est créée avant l'interface réseau.</p><p>Que devez-vous ajouter à la ressource VM ?</p>",
 "opts": [
  "Un élément dependsOn qui référence l'interface réseau",
  "Une condition",
  "Un élément copy",
  "Une sortie (output)"
 ],
 "ans": 0,
 "expl": "<p><b>dependsOn</b> indique à Resource Manager qu'une ressource doit attendre la fin du déploiement d'une autre. Sans dépendance, les ressources sont déployées en parallèle.</p><p>En Bicep, les dépendances sont le plus souvent déduites automatiquement quand une ressource référence une propriété d'une autre (par exemple <code>nic.id</code>).</p>"
},
{
 "id": "D3-018",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un modèle ARM doit créer 5 comptes de stockage identiques, nommés à partir d'un index.</p><p>Quel élément devez-vous utiliser ?</p>",
 "opts": [
  "Un fichier de paramètres différent par compte",
  "copy, avec copyIndex() dans le nom",
  "condition",
  "dependsOn"
 ],
 "ans": 1,
 "expl": "<p>L'élément <b>copy</b> (avec <code>count</code>) crée plusieurs instances d'une ressource ; <b>copyIndex()</b> donne l'index de l'itération, utilisable dans le nom. En Bicep, on écrit une boucle <code>[for i in range(0, 5): {...}]</code>.</p><p>condition permet de déployer ou non une ressource. Plusieurs fichiers de paramètres demanderaient plusieurs déploiements.</p>"
},
{
 "id": "D3-019",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous avez créé à la main une VM avec son réseau dans le portail. Vous voulez obtenir un modèle ARM qui la décrit, pour la recréer à l'identique ailleurs.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Utiliser Azure Advisor",
  "Ouvrir le journal d'activité",
  "Utiliser Exporter le modèle sur la VM ou sur le groupe de ressources",
  "Créer une image de la VM"
 ],
 "ans": 2,
 "expl": "<p><b>Exporter le modèle</b> génère un modèle ARM (et propose une version Bicep) à partir de ressources existantes, ou de l'historique d'un déploiement. Le modèle doit souvent être nettoyé et paramétré avant réutilisation.</p><p>Une image capture le disque, pas la configuration Azure (réseau, taille…).</p>"
},
{
 "id": "D3-020",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez déployer le fichier main.bicep dans le groupe de ressources RG1, avec le fichier de paramètres prod.bicepparam, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az deployment {0} create --resource-group RG1 {1} main.bicep --parameters prod.bicepparam",
 "rows": [
  {
   "l": "Étendue",
   "o": [
    "group",
    "sub",
    "mg"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--template-file",
    "--template-uri",
    "--bicep"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az deployment group create --resource-group RG1 --template-file main.bicep --parameters prod.bicepparam</code>.</p><ul><li><b>group</b> déploie dans un groupe de ressources ; <b>sub</b> à l'échelle d'un abonnement ; <b>mg</b> d'un groupe d'administration ; <b>tenant</b> du locataire.</li><li><b>--template-file</b> pour un fichier local (JSON ou Bicep) ; <b>--template-uri</b> pour un fichier accessible par URL.</li></ul>"
},
{
 "id": "D3-021",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez déployer template.json dans RG2 avec Azure PowerShell, en mode Complet.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "{0} -ResourceGroupName RG2 -TemplateFile template.json -Mode {1}",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzResourceGroupDeployment",
    "New-AzDeployment",
    "New-AzResourceGroup"
   ],
   "a": 0
  },
  {
   "l": "Mode",
   "o": [
    "Complete",
    "Incremental",
    "Full"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>New-AzResourceGroupDeployment -ResourceGroupName RG2 -TemplateFile template.json -Mode Complete</code>.</p><p><b>New-AzDeployment</b> (ou New-AzSubscriptionDeployment) déploie à l'échelle de l'abonnement. New-AzResourceGroup crée un groupe vide. Les modes sont <b>Incremental</b> (par défaut) et <b>Complete</b> ; « Full » n'existe pas.</p>"
},
{
 "id": "D3-022",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous examinez le fichier Bicep suivant :</p><pre>param location string = resourceGroup().location\nparam prefix string\n\nvar storageName = '${prefix}${uniqueString(resourceGroup().id)}'\n\nresource sa 'Microsoft.Storage/storageAccounts@2023-01-01' = {\n  name: storageName\n  location: location\n  sku: { name: 'Standard_LRS' }\n  kind: 'StorageV2'\n}\n\noutput blobEndpoint string = sa.properties.primaryEndpoints.blob</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Au déploiement, vous devez obligatoirement fournir :",
   "o": [
    "prefix",
    "storageName",
    "location"
   ],
   "a": 0
  },
  {
   "l": "Le compte de stockage est déployé dans :",
   "o": [
    "France Central, toujours",
    "la région du groupe de ressources, par défaut",
    "la région de l'abonnement"
   ],
   "a": 1
  },
  {
   "l": "blobEndpoint est :",
   "o": [
    "un paramètre d'entrée",
    "une ressource",
    "une valeur renvoyée après le déploiement"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>prefix</b> n'a pas de valeur par défaut : il est obligatoire. <b>location</b> a une valeur par défaut. <b>storageName</b> est une variable calculée.</li><li><code>resourceGroup().location</code> : la région du groupe de ressources cible.</li><li><b>output</b> : valeur renvoyée à la fin du déploiement.</li></ul>"
},
{
 "id": "D3-023",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez convertir un modèle ARM JSON existant en fichier Bicep pour le maintenir plus facilement.</p><p>Quelle commande devez-vous utiliser ?</p>",
 "opts": [
  "az bicep publish",
  "az bicep build --file template.json",
  "az deployment group export",
  "az bicep decompile --file template.json"
 ],
 "ans": 3,
 "expl": "<p><b>decompile</b> convertit du JSON ARM en Bicep (avec parfois des avertissements à corriger). <b>build</b> fait l'inverse : il compile un fichier Bicep en JSON ARM. <b>publish</b> publie un module dans un registre.</p>"
},
{
 "id": "D3-024",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez réutiliser la définition d'un réseau virtuel standard dans plusieurs fichiers Bicep.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Un module Bicep, appelé avec le mot-clé module",
  "Une variable globale",
  "Un verrou de ressource",
  "Une sortie dans chaque fichier"
 ],
 "ans": 0,
 "expl": "<p>Un <b>module</b> est un fichier Bicep réutilisable, appelé depuis un autre fichier avec <code>module vnet './vnet.bicep' = { name: ..., params: {...} }</code>. On peut le stocker localement, dans un registre Bicep ou en Template Spec.</p>"
},
{
 "id": "D3-025",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un fichier Bicep doit ajouter un sous-réseau à un réseau virtuel <b>déjà existant</b> nommé VNet1, sans le redéployer.</p><p>Comment devez-vous référencer VNet1 ?</p>",
 "opts": [
  "param vnet object",
  "resource vnet 'Microsoft.Network/virtualNetworks@2023-04-01' existing = { name: 'VNet1' }",
  "output vnet string",
  "module vnet './vnet.bicep'"
 ],
 "ans": 1,
 "expl": "<p>Le mot-clé <b>existing</b> déclare une ressource qui existe déjà : on peut lire ses propriétés et l'utiliser comme parent (<code>parent: vnet</code>) sans la redéployer.</p><p>Un paramètre objet ne référence pas une ressource. Un module redéploierait le réseau. Une sortie renvoie une valeur.</p>"
},
{
 "id": "D3-026",
 "dom": 3,
 "type": "single",
 "stem": "<p>Votre équipe veut partager un modèle ARM validé avec d'autres équipes, avec des versions, et contrôler qui peut le déployer avec le contrôle d'accès Azure.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Azure Advisor",
  "Un e-mail avec le fichier JSON",
  "Une Template Spec",
  "Un compte de stockage public"
 ],
 "ans": 2,
 "expl": "<p>Une <b>Template Spec</b> est une ressource Azure qui stocke un modèle (JSON ou Bicep) avec des <b>versions</b>. On donne l'accès avec un rôle (par exemple Lecteur) et on déploie directement depuis la Template Spec.</p>"
},
{
 "id": "D3-027",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez redimensionner VM1 de Standard_D2s_v5 vers Standard_E8s_v5. La nouvelle taille n'apparaît pas dans la liste des tailles disponibles pendant que la VM est démarrée.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Supprimer et recréer VM1",
  "Ajouter un disque de données",
  "Déplacer VM1 dans un autre groupe de ressources",
  "Arrêter (libérer) VM1, puis choisir la nouvelle taille"
 ],
 "ans": 3,
 "expl": "<p>Une VM démarrée ne peut prendre qu'une taille disponible sur le <b>cluster matériel</b> où elle tourne. Une fois <b>arrêtée et libérée</b>, elle peut être placée sur un autre cluster : toutes les tailles disponibles dans la région apparaissent.</p><p>Un redimensionnement redémarre toujours la VM, même sans libération.</p>"
},
{
 "id": "D3-028",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la famille de tailles de VM adaptée à chaque charge de travail.</p><p>Pour répondre, faites glisser la famille appropriée vers chaque charge. Chaque famille peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Familles",
 "srcs": [
  "Série B",
  "Série D",
  "Série E",
  "Série F",
  "Série N"
 ],
 "tgtHead": [
  "Charge de travail",
  "Famille"
 ],
 "tgts": [
  {
   "l": "Serveur web de test peu sollicité, avec des pics occasionnels",
   "a": 0
  },
  {
   "l": "Base de données en mémoire qui demande beaucoup de RAM",
   "a": 2
  },
  {
   "l": "Rendu 3D et apprentissage automatique sur GPU",
   "a": 4
  },
  {
   "l": "Serveur de traitement par lots qui demande beaucoup de CPU",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>B</b> (burstable) : accumule des crédits CPU quand elle est peu utilisée et les dépense lors des pics. Bon marché.</li><li><b>D</b> : usage général, équilibre CPU/mémoire.</li><li><b>E</b> : optimisée pour la mémoire.</li><li><b>F</b> : optimisée pour le calcul (plus de CPU par Go de RAM).</li><li><b>N</b> : GPU.</li></ul><p>Autres familles : M (très grande mémoire), L (stockage à haut débit).</p>"
},
{
 "id": "D3-029",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez trois VM dans un <b>groupe à haute disponibilité</b> avec 3 domaines d'erreur et 5 domaines de mise à jour.</p><p>Contre quoi le groupe à haute disponibilité protège-t-il ?</p>",
 "opts": [
  "Une panne matérielle d'un rack et la maintenance planifiée de l'hôte",
  "La suppression accidentelle d'une VM",
  "La panne d'une région entière",
  "La panne d'un centre de données entier"
 ],
 "ans": 0,
 "expl": "<p>Les <b>domaines d'erreur</b> placent les VM sur des racks différents (alimentation et réseau séparés). Les <b>domaines de mise à jour</b> évitent que toutes les VM redémarrent en même temps lors d'une maintenance. SLA : 99,95 %.</p><p>Un groupe à haute disponibilité reste dans <b>un seul centre de données</b>. Contre la panne d'un centre de données, on utilise les <b>zones de disponibilité</b> (SLA 99,99 %) ; contre la panne d'une région, une autre région.</p>"
},
{
 "id": "D3-030",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous déployez 12 VM dans un groupe à haute disponibilité configuré avec <b>2 domaines d'erreur</b> et <b>4 domaines de mise à jour</b>.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Nombre maximal de VM touchées par la panne d'un rack :",
   "o": [
    "3",
    "4",
    "6"
   ],
   "a": 2
  },
  {
   "l": "Nombre maximal de VM redémarrées en même temps lors d'une maintenance planifiée :",
   "o": [
    "3",
    "4",
    "6"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Domaines d'erreur</b> : 12 VM réparties sur 2 racks, soit 6 par rack. Une panne de rack touche <b>6</b> VM.</li><li><b>Domaines de mise à jour</b> : 12 VM réparties sur 4 domaines, soit 3 par domaine. La maintenance redémarre un domaine à la fois, donc <b>3</b> VM.</li></ul>"
},
{
 "id": "D3-031",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez ajouter la VM existante VM5 à un groupe à haute disponibilité existant, AS1.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Déplacer VM5 dans le groupe de ressources de AS1",
  "Recréer VM5 dans AS1 (à partir de ses disques)",
  "Modifier la propriété Groupe à haute disponibilité de VM5",
  "Redimensionner VM5"
 ],
 "ans": 1,
 "expl": "<p>Le groupe à haute disponibilité se choisit <b>à la création</b> de la VM. Pour ajouter une VM existante, il faut la <b>recréer</b> dans le groupe, par exemple en supprimant la VM tout en gardant ses disques, puis en créant une nouvelle VM qui les réutilise.</p>"
},
{
 "id": "D3-032",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer le SLA de connectivité de chaque configuration de machines virtuelles.</p><p>Pour répondre, faites glisser le SLA approprié vers chaque configuration. Chaque SLA peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "SLA",
 "srcs": [
  "99,9 %",
  "99,95 %",
  "99,99 %",
  "Aucun SLA"
 ],
 "tgtHead": [
  "Configuration",
  "SLA"
 ],
 "tgts": [
  {
   "l": "Deux VM ou plus réparties sur au moins deux zones de disponibilité",
   "a": 2
  },
  {
   "l": "Deux VM ou plus dans un groupe à haute disponibilité",
   "a": 1
  },
  {
   "l": "Une seule VM avec des disques SSD Premium",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Zones de disponibilité</b> : 99,99 %.</li><li><b>Groupe à haute disponibilité</b> (ou même domaine de placement) : 99,95 %.</li><li><b>VM unique</b> avec SSD Premium, SSD Premium v2 ou Ultra pour tous les disques : 99,9 %. (Avec SSD Standard : 99,5 % ; avec HDD Standard : 95 %.)</li></ul>"
},
{
 "id": "D3-033",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application tourne sur deux VM dans la région France Central. Elle doit rester disponible en cas de panne d'un centre de données entier de la région.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Placer les VM dans un groupe à haute disponibilité",
  "Utiliser des disques SSD Premium",
  "Déployer les VM dans deux zones de disponibilité différentes",
  "Placer les VM dans un groupe de placement de proximité"
 ],
 "ans": 2,
 "expl": "<p>Les <b>zones de disponibilité</b> sont des centres de données physiquement séparés dans une même région, avec alimentation, refroidissement et réseau indépendants. Deux VM dans deux zones survivent à la perte d'une zone.</p><p>Un groupe à haute disponibilité reste dans un seul centre de données. Les disques Premium améliorent le SLA d'une VM seule. Un groupe de placement de proximité rapproche les VM, l'inverse du besoin.</p>"
},
{
 "id": "D3-034",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous créez un groupe de machines virtuelles identiques (VMSS) VMSS1 avec une mise à l'échelle automatique. Vous voulez qu'il y ait toujours au moins 2 instances, jamais plus de 10, et 3 au démarrage.</p><p>Quels paramètres devez-vous configurer ?</p>",
 "opts": [
  "Minimum 3, Maximum 10, Par défaut 2",
  "Minimum 2, Maximum 3, Par défaut 10",
  "Minimum 0, Maximum 10, Par défaut 3",
  "Minimum 2, Maximum 10, Par défaut 3"
 ],
 "ans": 3,
 "expl": "<p>Les limites d'instances d'un profil de mise à l'échelle automatique sont : <b>Minimum</b> (jamais en dessous), <b>Maximum</b> (jamais au-dessus) et <b>Par défaut</b> (utilisé si les métriques ne peuvent pas être lues).</p>"
},
{
 "id": "D3-035",
 "dom": 3,
 "type": "single",
 "stem": "<p>VMSS1 a une règle : « Si le CPU moyen dépasse 75 % pendant 10 minutes, ajouter 2 instances », avec un temps de refroidissement de 5 minutes. Le CPU reste à 90 % pendant une heure.</p><p>Pourquoi les instances ne sont-elles pas ajoutées toutes les minutes ?</p>",
 "opts": [
  "Le temps de refroidissement empêche une nouvelle action pendant 5 minutes après chaque mise à l'échelle",
  "Les VMSS ne prennent en charge qu'une action par heure",
  "La règle de diminution annule l'augmentation",
  "Le nombre par défaut est atteint"
 ],
 "ans": 0,
 "expl": "<p>Le <b>temps de refroidissement</b> (cool down) laisse aux nouvelles instances le temps de démarrer et aux métriques de se stabiliser avant une nouvelle évaluation. Pendant ce délai, aucune autre action de mise à l'échelle n'a lieu. Le nombre maximal d'instances limite aussi l'augmentation.</p>"
},
{
 "id": "D3-036",
 "dom": 3,
 "type": "single",
 "stem": "<p>VMSS1 a une seule règle de mise à l'échelle : ajouter une instance quand le CPU dépasse 70 %. Après un pic de charge, le nombre d'instances ne redescend jamais.</p><p>Que devez-vous ajouter ?</p>",
 "opts": [
  "Un temps de refroidissement plus long",
  "Une règle de diminution (scale in), par exemple retirer une instance quand le CPU est inférieur à 30 %",
  "Un nombre maximal d'instances plus bas",
  "Une sonde d'intégrité"
 ],
 "ans": 1,
 "expl": "<p>La mise à l'échelle automatique ne retire des instances que si une <b>règle de diminution</b> existe. Bonne pratique : toujours associer une règle d'augmentation et une règle de diminution, avec un écart suffisant entre les seuils (par exemple 70 % et 30 %) pour éviter des oscillations.</p>"
},
{
 "id": "D3-037",
 "dom": 3,
 "type": "single",
 "stem": "<p>Les instances de VMSS2 doivent recevoir les nouvelles versions de l'image par lots, en attendant que chaque lot soit sain avant de passer au suivant.</p><p>Quelle stratégie de mise à niveau devez-vous choisir ?</p>",
 "opts": [
  "Manuelle",
  "Aucune",
  "Propagée (Rolling)",
  "Automatique"
 ],
 "ans": 2,
 "expl": "<p>La stratégie <b>Propagée</b> met à jour les instances par lots, avec une pause et une vérification de l'intégrité (sonde ou extension d'intégrité de l'application) entre les lots.</p><ul><li><b>Manuelle</b> : rien n'est mis à jour tant que vous ne mettez pas à niveau chaque instance.</li><li><b>Automatique</b> : toutes les instances peuvent être mises à jour en même temps, dans un ordre quelconque.</li></ul>"
},
{
 "id": "D3-038",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous créez un groupe de machines virtuelles identiques et voulez pouvoir y mélanger différentes tailles de VM, et ajouter des VM gérées individuellement.</p><p>Quel mode d'orchestration devez-vous choisir ?</p>",
 "opts": [
  "Groupe à haute disponibilité",
  "Uniforme",
  "Classique",
  "Flexible"
 ],
 "ans": 3,
 "expl": "<p>Le mode d'orchestration <b>Flexible</b> gère des VM standard (avec leurs propres ressources), permet des tailles différentes et la répartition sur des zones et des domaines d'erreur. C'est le mode recommandé pour les nouvelles charges.</p><p>Le mode <b>Uniforme</b> utilise un modèle unique : toutes les instances sont identiques.</p>"
},
{
 "id": "D3-039",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez exécuter un script PowerShell sur 50 VM Windows existantes, juste après leur déploiement, pour installer IIS et copier des fichiers depuis un compte de stockage.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "L'extension Custom Script",
  "Un groupe à haute disponibilité",
  "Les diagnostics de démarrage",
  "La console série"
 ],
 "ans": 0,
 "expl": "<p>L'<b>extension Custom Script</b> télécharge et exécute un script (depuis un compte de stockage ou GitHub) dans la VM. Elle se déploie par le portail, PowerShell, CLI ou un modèle, et convient à la configuration après déploiement.</p><p>Les diagnostics de démarrage capturent l'écran de démarrage. La console série donne un accès texte en cas de panne. Un groupe à haute disponibilité ne configure rien.</p>"
},
{
 "id": "D3-040",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez configurer automatiquement des VM Linux au <b>premier démarrage</b> (installer des paquets, créer des utilisateurs), avec un fichier passé lors de la création de la VM.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "La commande Run (exécuter une commande)",
  "cloud-init, via les données personnalisées (custom data)",
  "Azure Advisor",
  "L'extension VMAccess"
 ],
 "ans": 1,
 "expl": "<p><b>cloud-init</b> est l'outil standard de configuration au premier démarrage des distributions Linux. On passe le fichier cloud-config dans les <b>données personnalisées</b> à la création de la VM.</p><p>VMAccess sert à réinitialiser l'accès (mot de passe, clé SSH). La commande Run exécute un script ponctuel sur une VM existante.</p>"
},
{
 "id": "D3-041",
 "dom": 3,
 "type": "single",
 "stem": "<p>Un administrateur a oublié le mot de passe du compte administrateur local de VM6 (Windows). VM6 n'est pas jointe à un domaine.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Restaurer VM6 depuis la dernière sauvegarde",
  "Redéployer VM6",
  "Utiliser « Réinitialiser le mot de passe » dans le portail",
  "Créer un instantané du disque du système d'exploitation"
 ],
 "ans": 2,
 "expl": "<p><b>Réinitialiser le mot de passe</b> (Aide > Réinitialiser le mot de passe) utilise l'extension <b>VMAccess</b> pour définir un nouveau mot de passe, ou réinitialiser la configuration RDP. Pour Linux, il permet aussi de réinitialiser une clé SSH.</p><p>Redéployer déplace la VM vers un autre hôte. Restaurer une sauvegarde est inutilement lourd. Un instantané ne change pas le mot de passe.</p>"
},
{
 "id": "D3-042",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM7 ne répond plus en RDP. Vous voulez voir une capture de l'écran de la VM pour savoir si Windows est bloqué au démarrage.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Azure Advisor",
  "Le journal d'activité",
  "Network Watcher Vérification du flux IP",
  "Les diagnostics de démarrage (capture d'écran)"
 ],
 "ans": 3,
 "expl": "<p>Les <b>diagnostics de démarrage</b> conservent une capture d'écran (et, pour Linux, le journal de la console). On voit par exemple un écran bleu, une mise à jour en cours ou une demande de vérification du disque.</p><p>Vérification du flux IP teste les règles réseau. Le journal d'activité trace les opérations Azure, pas l'état du système d'exploitation.</p>"
},
{
 "id": "D3-043",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM8 rencontre des problèmes répétés liés à l'hôte physique sur lequel elle tourne. Vous voulez la faire migrer vers un nouvel hôte, sans changer sa configuration.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Redéployer VM8",
  "Redimensionner VM8",
  "Réappliquer l'état de VM8",
  "Réinitialiser le mot de passe"
 ],
 "ans": 0,
 "expl": "<p><b>Redéployer</b> arrête la VM, la déplace vers un nouveau nœud de l'infrastructure, puis la redémarre. Attention : les données du <b>disque temporaire</b> sont perdues et l'adresse IP publique dynamique peut changer.</p><p><b>Réappliquer</b> réexécute le provisionnement de la VM sans changer d'hôte : utile quand la VM est en état d'échec.</p>"
},
{
 "id": "D3-044",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une application stocke des fichiers de cache sur le disque <b>D:</b> (disque temporaire) de VM9, sous Windows. Après une maintenance, les fichiers ont disparu.</p><p>Pourquoi ?</p>",
 "opts": [
  "La sauvegarde a écrasé le disque",
  "Le disque temporaire n'est pas persistant : son contenu peut être perdu lors d'une maintenance, d'un redéploiement ou d'une libération",
  "Le disque D: est chiffré",
  "Le disque D: est un disque de données Premium"
 ],
 "ans": 1,
 "expl": "<p>Le <b>disque temporaire</b> est stocké sur l'hôte physique. Son contenu est perdu si la VM change d'hôte (maintenance, redéploiement, arrêt avec libération, redimensionnement). Il convient pour le fichier d'échange ou un cache reconstructible, jamais pour des données à conserver.</p><p>Pour des données persistantes, on utilise un <b>disque de données managé</b>.</p>"
},
{
 "id": "D3-045",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type de disque managé adapté à chaque besoin, au coût le plus bas.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de disque",
 "srcs": [
  "HDD Standard",
  "SSD Standard",
  "SSD Premium",
  "Disque Ultra"
 ],
 "tgtHead": [
  "Besoin",
  "Type de disque"
 ],
 "tgts": [
  {
   "l": "Sauvegardes et données rarement lues, sans exigence de performance",
   "a": 0
  },
  {
   "l": "Serveur web peu chargé ou environnement de test",
   "a": 1
  },
  {
   "l": "Base de données de production avec un SLA de VM unique de 99,9 %",
   "a": 2
  },
  {
   "l": "SAP HANA avec des centaines de milliers d'IOPS et une latence inférieure à la milliseconde",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>HDD Standard</b> : le moins cher, pour des charges peu sensibles.</li><li><b>SSD Standard</b> : performances régulières pour des charges légères.</li><li><b>SSD Premium</b> : production, faible latence ; nécessaire pour le SLA de 99,9 % d'une VM unique.</li><li><b>Disque Ultra</b> : les plus hautes performances, IOPS et débit réglables séparément de la taille.</li></ul>"
},
{
 "id": "D3-046",
 "dom": 3,
 "type": "single",
 "stem": "<p>Le disque de données de 256 Gio de VM10 est plein. Vous devez l'agrandir à 512 Gio.</p><p>Quelle affirmation est vraie ?</p>",
 "opts": [
  "La taille d'un disque managé ne peut jamais changer",
  "Il faut créer un nouveau disque et copier les données",
  "Vous pouvez augmenter la taille dans Azure, puis étendre le volume dans le système d'exploitation",
  "Vous pouvez réduire puis augmenter la taille librement"
 ],
 "ans": 2,
 "expl": "<p>On peut <b>augmenter</b> la taille d'un disque managé (souvent sans arrêter la VM pour les disques de données, selon le type et la taille). Il faut ensuite <b>étendre le volume</b> dans le système d'exploitation (Gestion des disques ou diskpart sous Windows, growpart et resize2fs sous Linux).</p><p>On ne peut <b>jamais réduire</b> la taille d'un disque managé.</p>"
},
{
 "id": "D3-047",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une base de données SQL Server sur VM11 utilise un disque de données pour ses fichiers de données, qui sont surtout lus, et un autre pour ses journaux de transactions, surtout écrits.</p><p>Quels paramètres de mise en cache de l'hôte Microsoft recommande-t-il ?</p>",
 "opts": [
  "Lecture/écriture pour les données, Lecture seule pour les journaux",
  "Lecture/écriture pour les deux",
  "Aucun pour les données, Lecture seule pour les journaux",
  "Lecture seule pour les données, Aucun pour les journaux"
 ],
 "ans": 3,
 "expl": "<p>Le cache <b>Lecture seule</b> accélère les lectures répétées : idéal pour les fichiers de données. Pour les journaux, écrits séquentiellement, on choisit <b>Aucun</b>. Le cache <b>Lecture/écriture</b> risque de perdre des écritures en cas de panne si l'application ne gère pas le vidage du cache ; il est réservé au disque du système d'exploitation.</p>"
},
{
 "id": "D3-048",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez sauvegarder ponctuellement le disque du système d'exploitation de VM12 avant une mise à jour risquée, de façon rapide et peu coûteuse.</p><p>Que devez-vous créer ?</p>",
 "opts": [
  "Un instantané incrémentiel du disque",
  "Une galerie Azure Compute",
  "Un groupe à haute disponibilité",
  "Une image managée généralisée"
 ],
 "ans": 0,
 "expl": "<p>Un <b>instantané</b> est une copie à un instant donné d'un disque managé. L'instantané <b>incrémentiel</b> ne facture que les changements depuis le précédent. On peut créer un nouveau disque à partir de l'instantané si la mise à jour échoue.</p><p>Une image généralisée sert à créer de nouvelles VM (avec Sysprep, ce qui rend la VM d'origine inutilisable). Une galerie sert à partager des images.</p>"
},
{
 "id": "D3-049",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez créer une image Windows personnalisée à partir de VM13, puis la partager avec plusieurs abonnements et régions, avec des versions.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "acts": [
  "Exécuter Sysprep dans VM13 pour la généraliser",
  "Arrêter (libérer) VM13 et la marquer comme généralisée",
  "Créer une définition d'image dans une galerie Azure Compute",
  "Créer une version d'image à partir de VM13 et la répliquer vers les régions cibles",
  "Créer un instantané du disque temporaire",
  "Redéployer VM13"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>Pour une image <b>généralisée</b>, on exécute <b>Sysprep</b> (ou waagent -deprovision sous Linux), on arrête la VM et on la marque comme généralisée. On crée la <b>définition d'image</b> (éditeur, offre, SKU, système, génération) dans une <b>galerie Azure Compute</b>, puis une <b>version</b> répliquée dans les régions voulues. La galerie se partage avec le contrôle d'accès Azure.</p><p>Le disque temporaire ne se capture pas. Redéployer n'a pas de rôle ici.</p>"
},
{
 "id": "D3-050",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez chiffrer les volumes du système d'exploitation et de données de VM14 (Windows) avec BitLocker, en gardant les clés dans un coffre de clés.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Une SAS",
  "Azure Disk Encryption",
  "Le chiffrement du service de stockage d'un compte de stockage",
  "Le chiffrement côté serveur avec clés gérées par la plateforme uniquement"
 ],
 "ans": 1,
 "expl": "<p><b>Azure Disk Encryption</b> (ADE) chiffre les volumes <b>dans la VM</b> avec BitLocker (Windows) ou DM-Crypt (Linux). Les clés sont stockées dans un <b>coffre de clés</b>, qui doit avoir l'option « Azure Disk Encryption pour le chiffrement de volume » et être dans la même région.</p><p>Le chiffrement côté serveur (SSE) chiffre les disques au niveau du stockage, sans BitLocker. Microsoft recommande aujourd'hui plutôt le <b>chiffrement sur l'hôte</b> pour les nouvelles VM, ADE étant en voie de retrait.</p>"
},
{
 "id": "D3-051",
 "dom": 3,
 "type": "single",
 "stem": "<p>Une norme exige que le disque temporaire et les caches des disques de VM15 soient chiffrés de bout en bout, sans agent dans la VM.</p><p>Que devez-vous activer ?</p>",
 "opts": [
  "Le chiffrement d'infrastructure d'un compte de stockage",
  "Azure Disk Encryption",
  "Le chiffrement sur l'hôte (encryption at host)",
  "Le transfert sécurisé obligatoire"
 ],
 "ans": 2,
 "expl": "<p>Le <b>chiffrement sur l'hôte</b> chiffre les données sur l'hôte physique : disque temporaire, caches des disques et flux vers le stockage. Il n'utilise aucun agent dans la VM. Il faut d'abord inscrire la fonctionnalité EncryptionAtHost dans l'abonnement.</p><p>Azure Disk Encryption chiffre dans la VM avec BitLocker ou DM-Crypt. Les deux autres options concernent les comptes de stockage.</p>"
},
{
 "id": "D3-052",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez chiffrer les disques managés de plusieurs VM avec vos propres clés, stockées dans Key Vault, au niveau du service de stockage.</p><p>Quelle ressource devez-vous créer et associer aux disques ?</p>",
 "opts": [
  "Une Template Spec",
  "Une galerie Azure Compute",
  "Un groupe de placement de proximité",
  "Un jeu de chiffrement de disque (Disk Encryption Set)"
 ],
 "ans": 3,
 "expl": "<p>Un <b>jeu de chiffrement de disque</b> référence une clé de Key Vault et dispose d'une identité managée pour l'utiliser. On l'associe aux disques managés pour un chiffrement côté serveur avec <b>clés gérées par le client</b>.</p>"
},
{
 "id": "D3-053",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous gérez les disques de la VM VM16.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Vous pouvez détacher un disque de données de VM16 et l'attacher à VM17 dans la même région.",
   "a": 0
  },
  {
   "l": "Le nombre maximal de disques de données dépend de la taille de VM16.",
   "a": 0
  },
  {
   "l": "Vous pouvez passer un disque SSD Standard en SSD Premium sans arrêter VM16, quelle que soit la situation.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Détacher et attacher : Oui.</b> Un disque managé est une ressource indépendante.</li><li><b>Nombre de disques : Oui.</b> Chaque taille de VM a un nombre maximal de disques de données (et une limite d'IOPS et de débit).</li><li><b>Changement de type à chaud : Non.</b> Changer le type d'un disque demande en général de libérer la VM (ou de détacher le disque). Et la taille de VM doit prendre en charge le stockage Premium (lettre <b>s</b> dans le nom, par exemple D2<b>s</b>_v5).</li></ul>"
},
{
 "id": "D3-054",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous voulez attacher un disque SSD Premium à VM18, de taille Standard_D2_v4. L'option n'est pas disponible.</p><p>Pourquoi ?</p>",
 "opts": [
  "La taille D2_v4 ne prend pas en charge le stockage Premium : il faut une taille avec « s », comme D2s_v4",
  "VM18 doit être sous Linux",
  "Les disques Premium nécessitent un groupe à haute disponibilité",
  "Les disques Premium ne sont disponibles qu'en zone"
 ],
 "ans": 0,
 "expl": "<p>Le stockage Premium n'est utilisable qu'avec les tailles qui le prennent en charge, signalées par la lettre <b>s</b> dans leur nom (Ds, Es, Fs…). Il faut redimensionner VM18 vers D2<b>s</b>_v4 ou une autre taille compatible.</p>"
},
{
 "id": "D3-055",
 "dom": 3,
 "type": "single",
 "stem": "<p>Deux VM d'un cluster de basculement Windows doivent accéder en même temps au même disque managé.</p><p>Quelle fonctionnalité devez-vous utiliser ?</p>",
 "opts": [
  "Un partage Azure Files Premium",
  "Les disques partagés (maxShares supérieur à 1)",
  "Un instantané du disque",
  "Le disque temporaire"
 ],
 "ans": 1,
 "expl": "<p>Les <b>disques partagés</b> permettent d'attacher un disque managé (SSD Premium, SSD Premium v2 ou Ultra) à plusieurs VM en même temps, avec un nombre maximal défini par <b>maxShares</b>. L'application (cluster de basculement, SCSI PR) gère l'accès concurrent.</p><p>Azure Files est une alternative en SMB, mais ce n'est pas un disque partagé.</p>"
},
{
 "id": "D3-056",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez déplacer VM19 de France Central vers West Europe, avec ses disques et sa configuration réseau.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "L'option Redéployer",
  "L'option Déplacer vers un autre groupe de ressources",
  "Azure Resource Mover (ou Azure Site Recovery)",
  "Le changement de région dans Propriétés"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Resource Mover</b> déplace des ressources (VM, disques, réseaux, adresses IP, équilibreurs…) vers une autre région, en gérant les dépendances. Il s'appuie sur Azure Site Recovery pour répliquer les VM.</p><p>Déplacer vers un autre groupe de ressources ou un autre abonnement ne change pas la région. Redéployer change d'hôte dans la même région.</p>"
},
{
 "id": "D3-057",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM20 est dans Subnet1 de VNet1. Vous devez la déplacer dans Subnet2 du même réseau virtuel.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Déplacer la VM dans un autre groupe de ressources",
  "Recréer la VM",
  "Créer un appairage entre Subnet1 et Subnet2",
  "Modifier la configuration IP de l'interface réseau pour choisir Subnet2 (la VM redémarre)"
 ],
 "ans": 3,
 "expl": "<p>Dans le même réseau virtuel, on peut changer le <b>sous-réseau</b> de la configuration IP de l'interface réseau. La VM redémarre et reçoit une nouvelle adresse IP privée.</p><p>Pour changer de <b>réseau virtuel</b>, en revanche, il faut recréer la VM (ou utiliser Resource Mover). On n'appaire pas des sous-réseaux.</p>"
},
{
 "id": "D3-058",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez exécuter un script ponctuel dans VM21 pour diagnostiquer un problème réseau. RDP ne fonctionne pas, mais l'agent de VM est opérationnel.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Exécuter la commande (Run command)",
  "Une nouvelle extension DSC",
  "Les diagnostics de démarrage",
  "Un instantané"
 ],
 "ans": 0,
 "expl": "<p><b>Exécuter la commande</b> (Run command) lance un script PowerShell ou shell dans la VM via l'agent de VM, sans connexion réseau à la VM. C'est idéal pour diagnostiquer ou corriger quand RDP ou SSH ne fonctionne plus.</p><p>Les diagnostics de démarrage montrent l'écran. DSC sert à la configuration souhaitée durable. Un instantané copie un disque.</p>"
},
{
 "id": "D3-059",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM22 sous Linux ne démarre plus à cause d'une erreur dans /etc/fstab. Vous devez vous connecter au système pour corriger le fichier, sans connexion réseau à la VM.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Azure Bastion",
  "La console série",
  "SSH par l'adresse IP publique",
  "Le journal d'activité"
 ],
 "ans": 1,
 "expl": "<p>La <b>console série</b> donne un accès texte à la console de la VM (port COM1 ou ttyS0), même si le réseau ou le démarrage est en panne. Elle exige les diagnostics de démarrage activés et un compte local avec mot de passe.</p><p>Bastion et SSH passent par le réseau, indisponible tant que le système ne démarre pas.</p>"
},
{
 "id": "D3-060",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez des calculs par lots qui peuvent être interrompus et repris. Vous voulez réduire le coût au maximum, en acceptant qu'Azure récupère les VM à tout moment.</p><p>Quelle option devez-vous choisir ?</p>",
 "opts": [
  "Des VM avec une réservation de 3 ans",
  "Des hôtes dédiés",
  "Des VM Spot avec la stratégie d'éviction Libérer ou Supprimer",
  "Des VM de série B"
 ],
 "ans": 2,
 "expl": "<p>Les <b>VM Spot</b> utilisent la capacité inutilisée d'Azure avec une forte remise. Azure peut les <b>évincer</b> avec un préavis de 30 secondes quand il a besoin de la capacité ou que le prix dépasse votre maximum. La stratégie d'éviction choisit Libérer (on garde les disques) ou Supprimer.</p><p>Une réservation de 3 ans engage sur une charge continue. Les hôtes dédiés coûtent plus cher.</p>"
},
{
 "id": "D3-061",
 "dom": 3,
 "type": "single",
 "stem": "<p>Pour des raisons de conformité, vos VM ne doivent partager leur serveur physique avec aucun autre client Azure.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un groupe à haute disponibilité",
  "Des VM Spot",
  "Un groupe de placement de proximité",
  "Azure Dedicated Host"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Dedicated Host</b> fournit des serveurs physiques réservés à votre abonnement : vous choisissez les VM qui y tournent, et vous contrôlez la maintenance.</p><p>Les autres options ne garantissent pas l'isolement physique.</p>"
},
{
 "id": "D3-062",
 "dom": 3,
 "type": "single",
 "stem": "<p>Les VM d'une application de calcul haute performance doivent avoir la latence réseau la plus faible possible entre elles.</p><p>Que devez-vous utiliser ?</p>",
 "opts": [
  "Un groupe de placement de proximité",
  "Des zones de disponibilité différentes",
  "Un groupe à haute disponibilité avec 3 domaines d'erreur",
  "Des régions différentes"
 ],
 "ans": 0,
 "expl": "<p>Un <b>groupe de placement de proximité</b> place les VM physiquement proches dans le même centre de données, ce qui réduit la latence. La <b>mise en réseau accélérée</b> réduit aussi la latence.</p><p>Répartir sur plusieurs zones ou régions augmente la latence.</p>"
},
{
 "id": "D3-063",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez réduire la latence et la charge processeur du trafic réseau d'une VM qui fait beaucoup d'échanges réseau.</p><p>Quelle option de l'interface réseau devez-vous activer ?</p>",
 "opts": [
  "Le transfert IP",
  "La mise en réseau accélérée",
  "Un groupe de sécurité réseau",
  "Une adresse IP publique statique"
 ],
 "ans": 1,
 "expl": "<p>La <b>mise en réseau accélérée</b> (SR-IOV) fait passer le trafic directement par la carte physique, en contournant le commutateur virtuel de l'hôte : latence plus faible, débit plus élevé, moins de charge CPU. Elle dépend de la taille de VM.</p><p>Le transfert IP sert aux appliances qui routent du trafic. Les deux autres options n'améliorent pas les performances.</p>"
},
{
 "id": "D3-064",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous devez arrêter VM23 pour ne plus payer le calcul pendant le week-end. Elle doit garder ses disques.</p><p>Que devez-vous faire ?</p>",
 "opts": [
  "Redémarrer la VM",
  "L'arrêter depuis Windows (Arrêter le système)",
  "L'arrêter depuis le portail (état Arrêtée (libérée))",
  "Supprimer la VM"
 ],
 "ans": 2,
 "expl": "<p>Arrêter depuis le <b>portail</b> (ou avec <code>az vm deallocate</code>) <b>libère</b> la VM : le calcul n'est plus facturé, les disques restent (et sont facturés). L'adresse IP publique dynamique est libérée.</p><p>Arrêter depuis le système d'exploitation laisse la VM à l'état <b>Arrêtée</b> (non libérée) : le calcul continue d'être facturé.</p>"
},
{
 "id": "D3-065",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous gérez l'état de VM24.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "État dans lequel le calcul n'est plus facturé :",
   "o": [
    "Arrêtée (libérée)",
    "Arrêtée",
    "En cours d'exécution"
   ],
   "a": 0
  },
  {
   "l": "Commande Azure CLI pour libérer la VM :",
   "o": [
    "az vm restart",
    "az vm deallocate",
    "az vm stop"
   ],
   "a": 1
  },
  {
   "l": "Commande Azure CLI qui arrête la VM sans la libérer :",
   "o": [
    "az vm deallocate",
    "az vm redeploy",
    "az vm stop"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Arrêtée (libérée)</b> : plus de facturation du calcul.</li><li><b>az vm deallocate</b> libère la VM (comme le bouton Arrêter du portail).</li><li><b>az vm stop</b> arrête le système d'exploitation, mais la VM garde ses ressources matérielles et le calcul reste facturé. L'équivalent PowerShell est <code>Stop-AzVM -StayProvisioned</code>.</li></ul>"
},
{
 "id": "D3-066",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous créez une VM et voulez utiliser le démarrage sécurisé (Secure Boot) et le vTPM du type de sécurité Lancement fiable (Trusted Launch).</p><p>Quelle génération de VM devez-vous utiliser ?</p>",
 "opts": [
  "Aucune : il faut une VM confidentielle",
  "Les deux générations",
  "Génération 1",
  "Génération 2"
 ],
 "ans": 3,
 "expl": "<p>Le <b>Lancement fiable</b> (démarrage sécurisé, vTPM, surveillance de l'intégrité du démarrage) exige des VM de <b>génération 2</b>, qui démarrent en UEFI. Les VM de génération 1 utilisent un BIOS classique.</p><p>Le type de sécurité se choisit à la création de la VM.</p>"
}
);
