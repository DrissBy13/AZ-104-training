/* Domaine 3 : calcul (lot D : D3-122 à D3-176) */
AZ.questions.push(
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
 "expl": "<ul><li><b>Create</b> : la ressource sera créée.</li><li><b>Ignore</b> : en mode Incrémentiel, les ressources absentes du modèle ne sont pas touchées. (En mode Complet, elles apparaîtraient comme <b>Delete</b>.)</li><li><b>Modify</b> : des propriétés vont changer ; what-if les détaille.</li></ul><p>Autres types : NoChange, Deploy (redéployée sans changement connu).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "what-if",
  "rows": [
   [
    "*+ Create",
    "Nouvelle ressource"
   ],
   [
    "* Ignore",
    "Absente du modèle (Incrémentiel)"
   ],
   [
    "~ Modify",
    "Propriété modifiée"
   ]
  ]
 },
 "keep": "what-if : Create, Modify, Delete (Complet), Ignore (Incrémentiel), NoChange."
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
 "expl": "<ul><li><b>Ultra comme OS : Non.</b> Les disques Ultra (et SSD Premium v2) ne peuvent être que des disques de <b>données</b>.</li><li><b>SSD Premium v2 en données : Oui.</b></li><li><b>SSD Premium comme OS : Oui.</b></li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "Créer"
  ],
  "title": "Disques",
  "menu": [
   "*Disques"
  ],
  "rows": [
   [
    "Disque du système d'exploitation",
    "HDD, SSD Standard, SSD Premium"
   ],
   [
    "*Disque Ultra / SSD Premium v2",
    "Données uniquement"
   ]
  ]
 },
 "keep": "Ultra et Premium v2 = disques de données seulement."
},
{
 "id": "D3-148",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'outil adapté pour chaque tâche sur une VM.</p><p>Pour répondre, faites glisser l'outil approprié vers chaque tâche. Chaque outil peut être utilisé une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Outils",
 "tgtHead": [
  "Tâche",
  "Outil"
 ],
 "srcs": [
  "Extension Custom Script",
  "Exécuter la commande",
  "Réinitialiser le mot de passe",
  "Redéployer",
  "Console série"
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
 "expl": "<ul><li><b>Custom Script</b> : configuration automatisée, idéale dans un modèle.</li><li><b>Exécuter la commande</b> : script ponctuel de diagnostic.</li><li><b>Réinitialiser le mot de passe</b> : propose aussi « Réinitialiser la configuration uniquement » pour RDP (VMAccess).</li><li><b>Redéployer</b> : nouvel hôte.</li></ul><p>La console série sert quand la VM n'a plus de réseau ni de démarrage normal.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "Outils de la VM",
  "rows": [
   [
    "*Custom Script",
    "Configuration automatisée"
   ],
   [
    "Exécuter la commande",
    "Diagnostic ponctuel"
   ],
   [
    "Réinitialiser le mot de passe",
    "Mot de passe, RDP"
   ],
   [
    "Redéployer",
    "Nouvel hôte"
   ]
  ]
 },
 "keep": "Script de déploiement, commande ponctuelle, VMAccess, redéploiement : chacun son usage."
},
{
 "id": "D3-149",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez restaurer VM30 à partir d'un instantané de son disque du système d'exploitation, sans recréer la VM.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>On crée un <b>disque</b> depuis l'instantané, on <b>libère</b> la VM, on utilise <b>Échanger le disque du système d'exploitation</b> (swap OS disk), puis on <b>démarre</b> la VM. L'ancien disque reste disponible tant qu'on ne le supprime pas.</p><p>Il ne faut ni supprimer la VM ni généraliser le disque, ce qui le rendrait inutilisable pour cette VM.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM30"
  ],
  "title": "VM30 | Disques",
  "menu": [
   "*Disques"
  ],
  "rows": [
   [
    "1",
    "Disque depuis l'instantané"
   ],
   [
    "2",
    "Libérer la VM"
   ],
   [
    "*3",
    "Échanger le disque du système d'exploitation"
   ],
   [
    "4",
    "Démarrer"
   ]
  ]
 },
 "keep": "Restaurer un disque OS = disque depuis l'instantané + échange.",
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
 ]
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
 "expl": "<ul><li><b>Image : Oui.</b> Les changements de « modèle » (image, variables d'environnement, ressources, règles de mise à l'échelle) créent une nouvelle révision.</li><li><b>Règle de mise à l'échelle : Oui</b>, elle fait partie du modèle de révision.</li><li><b>Nœuds : Non.</b> Container Apps est serverless : Azure gère l'infrastructure (Kubernetes) pour vous.</li></ul>",
 "portal": {
  "path": [
   "Container Apps",
   "app1"
  ],
  "title": "app1 | Révisions",
  "menu": [
   "*Révisions et réplicas"
  ],
  "rows": [
   [
    "*Image, variables, mise à l'échelle",
    "Nouvelle révision"
   ],
   [
    "Infrastructure",
    "Gérée par Azure"
   ]
  ]
 },
 "keep": "Changements du modèle = nouvelle révision ; aucun nœud à gérer."
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
 "expl": "<ul><li><code>range(0, 3)</code> produit 0, 1, 2 : <b>3 disques</b>.</li><li>Le dernier se nomme <b>data-2</b>.</li><li><code>Premium_LRS</code> : <b>SSD Premium</b> en redondance locale. (StandardSSD_LRS serait du SSD Standard, Standard_LRS du HDD Standard.)</li></ul>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "Disques créés",
  "rows": [
   [
    "*data-0, data-1, data-2",
    "Premium_LRS · 128 Gio"
   ]
  ]
 },
 "keep": "range(0, n) = 0 à n-1 ; Premium_LRS = SSD Premium."
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
 "expl": "<ul><li><b>Une VM avec SSD Premium</b> : SLA de 99,9 % (environ 8,8 heures d'arrêt par an au maximum).</li><li><b>Groupe à haute disponibilité</b> : protège contre la panne d'un rack (domaines d'erreur) et la maintenance.</li><li><b>Zones de disponibilité</b> : protège contre la perte d'un centre de données.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "Créer"
  ],
  "title": "Options de disponibilité",
  "rows": [
   [
    "VM unique SSD Premium",
    "99,9 %"
   ],
   [
    "*Groupe à haute disponibilité",
    "Rack + maintenance"
   ],
   [
    "*Zones",
    "Centre de données"
   ]
  ]
 },
 "keep": "Rack = groupe à haute disponibilité ; centre de données = zones ; région = deux régions."
},
{
 "id": "D3-169",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez la VM VM31 pour un serveur web de production. Elle doit être dans la zone 1, sans adresse IP publique, avec un disque du système d'exploitation SSD Premium, et la licence Windows existante de l'entreprise.</p><p>Comment devez-vous configurer la VM ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Zone de disponibilité</b>, <b>Zone 1</b>.</li><li><b>Licence existante</b> : Azure Hybrid Benefit.</li><li><b>SSD Premium</b> pour le disque du système d'exploitation.</li><li>Adresse IP publique : <b>Aucun</b>. L'accès d'administration passera par Azure Bastion ou un VPN.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "Créer"
  ],
  "title": "Créer une machine virtuelle",
  "menu": [
   "*Informations de base",
   "Disques",
   "Mise en réseau"
  ],
  "rows": [
   [
    "*Zone",
    "Zone 1"
   ],
   [
    "*Licence existante",
    "Coché"
   ],
   [
    "*Disque OS",
    "SSD Premium"
   ],
   [
    "*IP publique",
    "Aucun"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Production sans IP publique : administration par Bastion ou VPN.",
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
 }
},
{
 "id": "D3-170",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez un groupe de machines virtuelles identiques. Les instances doivent être réparties sur les zones 1, 2 et 3, se mettre à jour par lots en vérifiant l'intégrité, et être remplacées automatiquement si elles deviennent défaillantes.</p><p>Comment devez-vous configurer le groupe ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Zones 1, 2, 3</b> : répartition sur les trois zones.</li><li><b>Propagé</b> : mise à jour par lots avec vérification de l'intégrité.</li><li><b>Supervision de l'intégrité</b> et <b>réparations automatiques</b> : remplacement des instances défaillantes.</li></ul><p>Le mode d'orchestration n'est pas noté ici : les deux le permettent, Flexible étant recommandé.</p>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "Créer"
  ],
  "title": "Créer un groupe identique",
  "menu": [
   "*Informations de base",
   "Gestion",
   "Intégrité"
  ],
  "rows": [
   [
    "*Zones",
    "1, 2, 3"
   ],
   [
    "*Mode de mise à niveau",
    "Propagé"
   ],
   [
    "*Réparations automatiques",
    "Activées"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Zones + Propagé + intégrité/réparations = groupe identique résilient.",
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
 }
},
{
 "id": "D3-171",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez réinitialiser la clé SSH du compte azureuser sur la VM Linux VM32.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Réinitialiser le mot de passe",
 "expl": "<p><b>Réinitialiser le mot de passe</b> propose, pour Linux, de réinitialiser un mot de passe, une <b>clé publique SSH</b>, ou seulement la configuration SSH. Il s'appuie sur l'extension VMAccess.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM32"
  ],
  "title": "VM32 | Réinitialiser le mot de passe",
  "menu": [
   "*Réinitialiser le mot de passe"
  ],
  "rows": [
   [
    "*Mode",
    "Réinitialiser la clé publique SSH"
   ],
   [
    "Nom d'utilisateur",
    "azureuser"
   ]
  ],
  "btn": "Mettre à jour"
 },
 "keep": "Clé SSH perdue = Réinitialiser le mot de passe (mode clé SSH).",
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
 }
},
{
 "id": "D3-172",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez ajouter un disque de données de 512 Gio à VM33.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Disques",
 "expl": "<p>La page <b>Disques</b> permet de créer et attacher un nouveau disque, d'attacher un disque existant, de détacher, de changer le cache de l'hôte et d'échanger le disque du système d'exploitation.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM33"
  ],
  "title": "VM33 | Disques",
  "menu": [
   "Mise en réseau",
   "*Disques",
   "Taille"
  ],
  "rows": [
   [
    "*Créer et attacher un nouveau disque",
    "512 Gio · SSD Premium"
   ]
  ],
  "btn": "Appliquer"
 },
 "keep": "Ajouter un disque de données = page Disques de la VM.",
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
 }
},
{
 "id": "D3-173",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous devez réduire au minimum le coût d'un environnement de test de 10 VM utilisé uniquement en semaine de 8 h à 18 h.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle fait partie de la solution. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Configurer l'arrêt automatique à 18 h",
   "a": 0
  },
  {
   "l": "Démarrer les VM à 8 h par une automatisation",
   "a": 0
  },
  {
   "l": "Acheter des réservations de 3 ans pour les VM",
   "a": 1
  },
  {
   "l": "Utiliser des disques Ultra à la place des Premium",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Arrêt automatique : oui</b>, il libère les VM chaque soir.</li><li><b>Démarrage automatisé : oui</b>, l'arrêt automatique intégré ne redémarre pas les VM ; il faut une automatisation pour les démarrer le matin.</li><li><b>Réservations : non</b>, elles sont rentables pour des VM qui tournent en continu.</li><li><b>Disques Ultra : non</b>, ils sont chers.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM-Test1"
  ],
  "title": "VM-Test1 | Arrêt automatique",
  "menu": [
   "*Arrêt automatique"
  ],
  "rows": [
   [
    "*Arrêt",
    "18:00"
   ],
   [
    "Démarrage",
    "Start/Stop VMs v2 · 08:00"
   ]
  ]
 },
 "keep": "Arrêt automatique intégré + automatisation pour le démarrage."
}
);
