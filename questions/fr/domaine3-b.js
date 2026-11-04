/* Domaine 3 : calcul (lot B : D3-012 à D3-066) */
AZ.questions.push(
{
 "id": "D3-014",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous écrivez un modèle ARM. Vous devez placer chaque élément dans la bonne section.</p><p>Pour répondre, faites glisser la section appropriée vers chaque élément. Chaque section peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Sections",
 "tgtHead": [
  "Élément",
  "Section"
 ],
 "srcs": [
  "parameters",
  "variables",
  "resources",
  "outputs"
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
 "expl": "<ul><li><b>parameters</b> : valeurs fournies au déploiement (avec type, valeur par défaut, valeurs autorisées ; <code>securestring</code> pour un mot de passe).</li><li><b>variables</b> : valeurs calculées dans le modèle, réutilisées plusieurs fois.</li><li><b>resources</b> : les ressources à déployer.</li><li><b>outputs</b> : valeurs renvoyées après le déploiement.</li></ul>",
 "portal": {
  "path": [
   "Déploiement personnalisé",
   "Modifier le modèle"
  ],
  "title": "Modifier le modèle",
  "rows": [
   [
    "*parameters",
    "Saisis au déploiement"
   ],
   [
    "variables",
    "Calculées"
   ],
   [
    "resources",
    "Ressources"
   ],
   [
    "outputs",
    "Renvoyées à la fin"
   ]
  ]
 },
 "keep": "parameters = entrées ; variables = calculs ; resources ; outputs = sorties."
},
{
 "id": "D3-020",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez déployer le fichier main.bicep dans le groupe de ressources RG1, avec le fichier de paramètres prod.bicepparam, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><code>az deployment group create --resource-group RG1 --template-file main.bicep --parameters prod.bicepparam</code>.</p><ul><li><b>group</b> déploie dans un groupe de ressources ; <b>sub</b> à l'échelle d'un abonnement ; <b>mg</b> d'un groupe d'administration ; <b>tenant</b> du locataire.</li><li><b>--template-file</b> pour un fichier local (JSON ou Bicep) ; <b>--template-uri</b> pour un fichier accessible par URL.</li></ul>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Commande",
    "az deployment group create -g RG1 --template-file main.bicep --parameters prod.bicepparam"
   ]
  ]
 },
 "keep": "Étendues : group, sub, mg, tenant. Fichier local = --template-file.",
 "tpl": "az deployment {0} create --resource-group RG1 {1} main.bicep --parameters prod.bicepparam"
},
{
 "id": "D3-021",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez déployer template.json dans RG2 avec Azure PowerShell, en mode Complet.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
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
 "expl": "<p><code>New-AzResourceGroupDeployment -ResourceGroupName RG2 -TemplateFile template.json -Mode Complete</code>.</p><p><b>New-AzDeployment</b> (ou New-AzSubscriptionDeployment) déploie à l'échelle de l'abonnement. New-AzResourceGroup crée un groupe vide. Les modes sont <b>Incremental</b> (par défaut) et <b>Complete</b> ; « Full » n'existe pas.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | PowerShell",
  "rows": [
   [
    "*Commande",
    "New-AzResourceGroupDeployment -ResourceGroupName RG2 -TemplateFile template.json -Mode Complete"
   ]
  ]
 },
 "keep": "Déploiement dans un groupe en PowerShell = New-AzResourceGroupDeployment (-Mode Incremental|Complete).",
 "tpl": "{0} -ResourceGroupName RG2 -TemplateFile template.json -Mode {1}"
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
 "expl": "<ul><li><b>prefix</b> n'a pas de valeur par défaut : il est obligatoire. <b>location</b> a une valeur par défaut. <b>storageName</b> est une variable calculée.</li><li><code>resourceGroup().location</code> : la région du groupe de ressources cible.</li><li><b>output</b> : valeur renvoyée à la fin du déploiement.</li></ul>",
 "portal": {
  "path": [
   "Déploiement personnalisé"
  ],
  "title": "Paramètres du modèle",
  "rows": [
   [
    "*prefix",
    "Obligatoire (pas de valeur par défaut)"
   ],
   [
    "location",
    "Par défaut : région du groupe"
   ],
   [
    "Sorties",
    "blobEndpoint"
   ]
  ]
 },
 "keep": "param sans défaut = obligatoire ; var = calcul ; output = valeur renvoyée."
},
{
 "id": "D3-028",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir la famille de tailles de VM adaptée à chaque charge de travail.</p><p>Pour répondre, faites glisser la famille appropriée vers chaque charge. Chaque famille peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Familles",
 "tgtHead": [
  "Charge de travail",
  "Famille"
 ],
 "srcs": [
  "Série B",
  "Série D",
  "Série E",
  "Série F",
  "Série N"
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
 "expl": "<ul><li><b>B</b> (burstable) : accumule des crédits CPU quand elle est peu utilisée et les dépense lors des pics. Bon marché.</li><li><b>D</b> : usage général, équilibre CPU/mémoire.</li><li><b>E</b> : optimisée pour la mémoire.</li><li><b>F</b> : optimisée pour le calcul (plus de CPU par Go de RAM).</li><li><b>N</b> : GPU.</li></ul><p>Autres familles : M (très grande mémoire), L (stockage à haut débit).</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "Créer"
  ],
  "title": "Sélectionner une taille de VM",
  "rows": [
   [
    "B",
    "Burstable"
   ],
   [
    "D",
    "Usage général"
   ],
   [
    "*E",
    "Mémoire"
   ],
   [
    "F",
    "Calcul"
   ],
   [
    "N",
    "GPU"
   ]
  ]
 },
 "keep": "B pics, D général, E mémoire, F CPU, N GPU, M très grande mémoire, L stockage."
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
 "expl": "<ul><li><b>Domaines d'erreur</b> : 12 VM réparties sur 2 racks, soit 6 par rack. Une panne de rack touche <b>6</b> VM.</li><li><b>Domaines de mise à jour</b> : 12 VM réparties sur 4 domaines, soit 3 par domaine. La maintenance redémarre un domaine à la fois, donc <b>3</b> VM.</li></ul>",
 "portal": {
  "path": [
   "Groupes à haute disponibilité",
   "AS2"
  ],
  "title": "AS2 | Machines virtuelles",
  "menu": [
   "*Machines virtuelles"
  ],
  "rows": [
   [
    "*12 VM / 2 domaines d'erreur",
    "6 par rack"
   ],
   [
    "*12 VM / 4 domaines de mise à jour",
    "3 par domaine"
   ]
  ]
 },
 "keep": "VM touchées = nombre de VM ÷ nombre de domaines concernés."
},
{
 "id": "D3-032",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez indiquer le SLA de connectivité de chaque configuration de machines virtuelles.</p><p>Pour répondre, faites glisser le SLA approprié vers chaque configuration. Chaque SLA peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "SLA",
 "tgtHead": [
  "Configuration",
  "SLA"
 ],
 "srcs": [
  "99,9 %",
  "99,95 %",
  "99,99 %",
  "Aucun SLA"
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
 "expl": "<ul><li><b>Zones de disponibilité</b> : 99,99 %.</li><li><b>Groupe à haute disponibilité</b> (ou même domaine de placement) : 99,95 %.</li><li><b>VM unique</b> avec SSD Premium, SSD Premium v2 ou Ultra pour tous les disques : 99,9 %. (Avec SSD Standard : 99,5 % ; avec HDD Standard : 95 %.)</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "Créer"
  ],
  "title": "Options de disponibilité",
  "rows": [
   [
    "*Zones",
    "99,99 %"
   ],
   [
    "Groupe à haute disponibilité",
    "99,95 %"
   ],
   [
    "VM unique SSD Premium",
    "99,9 %"
   ]
  ]
 },
 "keep": "99,99 / 99,95 / 99,9 (SSD Standard 99,5 ; HDD 95)."
},
{
 "id": "D3-045",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir le type de disque managé adapté à chaque besoin, au coût le plus bas.</p><p>Pour répondre, faites glisser le type approprié vers chaque besoin. Chaque type peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Types de disque",
 "tgtHead": [
  "Besoin",
  "Type de disque"
 ],
 "srcs": [
  "HDD Standard",
  "SSD Standard",
  "SSD Premium",
  "Disque Ultra"
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
 "expl": "<ul><li><b>HDD Standard</b> : le moins cher, pour des charges peu sensibles.</li><li><b>SSD Standard</b> : performances régulières pour des charges légères.</li><li><b>SSD Premium</b> : production, faible latence ; nécessaire pour le SLA de 99,9 % d'une VM unique.</li><li><b>Disque Ultra</b> : les plus hautes performances, IOPS et débit réglables séparément de la taille.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "Créer un disque",
  "rows": [
   [
    "HDD Standard",
    "Le moins cher"
   ],
   [
    "SSD Standard",
    "Charges légères"
   ],
   [
    "*SSD Premium",
    "Production"
   ],
   [
    "Disque Ultra",
    "IOPS extrêmes"
   ]
  ],
  "btn": "OK"
 },
 "keep": "HDD < SSD Standard < SSD Premium < Ultra (et Premium v2)."
},
{
 "id": "D3-049",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez créer une image Windows personnalisée à partir de VM13, puis la partager avec plusieurs abonnements et régions, avec des versions.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Pour une image <b>généralisée</b>, on exécute <b>Sysprep</b> (ou waagent -deprovision sous Linux), on arrête la VM et on la marque comme généralisée. On crée la <b>définition d'image</b> (éditeur, offre, SKU, système, génération) dans une <b>galerie Azure Compute</b>, puis une <b>version</b> répliquée dans les régions voulues. La galerie se partage avec le contrôle d'accès Azure.</p><p>Le disque temporaire ne se capture pas. Redéployer n'a pas de rôle ici.</p>",
 "portal": {
  "path": [
   "Galeries Azure Compute",
   "Galerie1"
  ],
  "title": "Créer une version d'image",
  "rows": [
   [
    "Définition",
    "win2022-app (généralisée)"
   ],
   [
    "*Source",
    "VM13 (Sysprep)"
   ],
   [
    "Réplication",
    "France Central, West Europe"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Image partagée : Sysprep, galerie, définition, version répliquée.",
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
 ]
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
 "expl": "<ul><li><b>Détacher et attacher : Oui.</b> Un disque managé est une ressource indépendante.</li><li><b>Nombre de disques : Oui.</b> Chaque taille de VM a un nombre maximal de disques de données (et une limite d'IOPS et de débit).</li><li><b>Changement de type à chaud : Non.</b> Changer le type d'un disque demande en général de libérer la VM (ou de détacher le disque). Et la taille de VM doit prendre en charge le stockage Premium (lettre <b>s</b> dans le nom, par exemple D2<b>s</b>_v5).</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM16"
  ],
  "title": "VM16 | Disques",
  "menu": [
   "*Disques"
  ],
  "rows": [
   [
    "Disque de données",
    "Détacher / attacher"
   ],
   [
    "*Type de stockage",
    "Modifiable VM libérée"
   ]
  ]
 },
 "keep": "Disque managé = indépendant ; changer son type demande en général de libérer la VM."
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
 "expl": "<ul><li><b>Arrêtée (libérée)</b> : plus de facturation du calcul.</li><li><b>az vm deallocate</b> libère la VM (comme le bouton Arrêter du portail).</li><li><b>az vm stop</b> arrête le système d'exploitation, mais la VM garde ses ressources matérielles et le calcul reste facturé. L'équivalent PowerShell est <code>Stop-AzVM -StayProvisioned</code>.</li></ul>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az vm deallocate",
    "Arrêtée (libérée)"
   ],
   [
    "az vm stop",
    "Arrêtée (toujours facturée)"
   ]
  ]
 },
 "keep": "deallocate = plus facturé ; stop = facturé."
}
);
