/* Domaine 3 : calcul (lot E : D3-177 à D3-230) */
AZ.questions.push(
{
 "id": "D3-177",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez créer une VM Ubuntu avec authentification par clé SSH, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Image",
   "o": [
    "Ubuntu2204",
    "Win2022Datacenter",
    "UbuntuServer.vhdx"
   ],
   "a": 0
  },
  {
   "l": "Authentification",
   "o": [
    "--generate-ssh-keys",
    "--admin-password-ssh",
    "--ssh-only"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm create ... --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys</code> crée la VM et génère une paire de clés SSH dans <code>~/.ssh</code> si elle n'existe pas (ou réutilise la clé existante).</p><p>Ubuntu2204 est un alias d'image. Les autres paramètres n'existent pas.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Commande",
    "az vm create … --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys"
   ]
  ]
 },
 "keep": "VM Linux avec clé SSH en CLI = --generate-ssh-keys (ou --ssh-key-values).",
 "tpl": "az vm create --resource-group RG1 --name VM35 --image {0} --size Standard_B2s --admin-username azureuser {1}"
},
{
 "id": "D3-178",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez redimensionner VM36 en Standard_D4s_v5 avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Sous-commande",
   "o": [
    "resize",
    "update",
    "scale"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--size",
    "--sku",
    "--vm-size"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm resize --size Standard_D4s_v5</code>. On peut d'abord lister les tailles possibles sur le cluster actuel avec <code>az vm list-vm-resize-options</code>.</p><p>En PowerShell : on modifie <code>$vm.HardwareProfile.VmSize</code> puis on exécute <code>Update-AzVM</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az vm resize",
    "--size Standard_D4s_v5"
   ],
   [
    "Tailles possibles",
    "az vm list-vm-resize-options"
   ]
  ]
 },
 "keep": "Redimensionner en CLI = az vm resize --size.",
 "tpl": "az vm {0} --resource-group RG1 --name VM36 {1} Standard_D4s_v5"
},
{
 "id": "D3-179",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez passer manuellement le groupe identique VMSS7 à 6 instances, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Sous-commande",
   "o": [
    "scale",
    "resize",
    "update-instances"
   ],
   "a": 0
  },
  {
   "l": "Paramètre",
   "o": [
    "--new-capacity",
    "--instance-count",
    "--count"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vmss scale --new-capacity 6</code> fixe le nombre d'instances. Si la mise à l'échelle automatique est active, elle peut ensuite le modifier selon ses règles.</p><p><code>update-instances</code> applique le dernier modèle aux instances existantes (mise à niveau manuelle).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az vmss scale",
    "--new-capacity 6"
   ],
   [
    "az vmss update-instances",
    "Appliquer le nouveau modèle"
   ]
  ]
 },
 "keep": "Nombre d'instances manuel = az vmss scale --new-capacity.",
 "tpl": "az vmss {0} --resource-group RG1 --name VMSS7 {1} 6"
},
{
 "id": "D3-180",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez attacher un nouveau disque de données de 256 Gio à VM37, avec Azure CLI.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Sous-commande",
   "o": [
    "attach",
    "create",
    "add"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "--new",
    "--empty",
    "--create"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm disk attach ... --new --size-gb 256</code> crée un disque managé vide et l'attache. Sans <code>--new</code>, la commande attache un disque existant portant ce nom.</p><p>En PowerShell : <code>Add-AzVMDataDisk</code> puis <code>Update-AzVM</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az vm disk attach",
    "--new --size-gb 256 --sku Premium_LRS"
   ]
  ]
 },
 "keep": "Nouveau disque attaché en CLI = az vm disk attach --new.",
 "tpl": "az vm disk {0} --resource-group RG1 --vm-name VM37 --name VM37-data1 {1} --size-gb 256 --sku Premium_LRS"
},
{
 "id": "D3-181",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous devez arrêter et libérer VM38 avec Azure PowerShell.</p><p>Comment devez-vous compléter la commande ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Stop-AzVM",
    "Remove-AzVM",
    "Update-AzVM"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "-Force",
    "-StayProvisioned",
    "-Deallocate:$false"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>Stop-AzVM -Force</code> arrête et <b>libère</b> la VM, sans demander de confirmation. Avec <code>-StayProvisioned</code>, la VM serait arrêtée sans être libérée (le calcul resterait facturé).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | PowerShell",
  "rows": [
   [
    "*Stop-AzVM -Force",
    "Arrêtée (libérée)"
   ],
   [
    "Stop-AzVM -StayProvisioned",
    "Arrêtée (facturée)"
   ]
  ]
 },
 "keep": "Stop-AzVM libère par défaut ; -StayProvisioned ne libère pas.",
 "tpl": "{0} -ResourceGroupName RG1 -Name VM38 {1}"
},
{
 "id": "D3-182",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez des VM présentées dans le document VM (cliquez sur l'onglet VM).</p><p>Vous voulez ajouter VM-C au groupe à haute disponibilité AS1 sans la recréer. Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "VM",
   "h": "<p><b>Machines virtuelles</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Région</th><th>Groupe à haute disponibilité</th><th>Zone</th></tr><tr><td>VM-A</td><td>France Central</td><td>AS1</td><td>—</td></tr><tr><td>VM-B</td><td>France Central</td><td>AS1</td><td>—</td></tr><tr><td>VM-C</td><td>France Central</td><td>—</td><td>—</td></tr></table></div>"
  }
 ],
 "opts": [
  "Impossible : il faut recréer VM-C dans AS1",
  "Déplacer VM-C dans le groupe de ressources de AS1",
  "Redémarrer VM-C après avoir choisi AS1",
  "Modifier la propriété Disponibilité de VM-C"
 ],
 "ans": 0,
 "expl": "<p>Le groupe à haute disponibilité est fixé à la <b>création</b> de la VM. Sans recréation, c'est impossible. On peut recréer VM-C dans AS1 en réutilisant ses disques.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM-C"
  ],
  "title": "VM-C | Disponibilité + mise à l'échelle",
  "menu": [
   "*Disponibilité + mise à l'échelle"
  ],
  "rows": [
   [
    "*Groupe à haute disponibilité",
    "Non modifiable après la création"
   ]
  ]
 },
 "keep": "Groupe à haute disponibilité = à la création ; sinon recréer."
},
{
 "id": "D3-183",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous disposez des applications présentées dans le document Applications (cliquez sur l'onglet Applications).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "docs": [
  {
   "t": "Applications",
   "h": "<p><b>Applications web</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Application</th><th>Plan</th><th>Niveau du plan</th><th>Système</th><th>Région</th></tr><tr><td>App1</td><td>ASP1</td><td>Standard S1</td><td>Windows</td><td>France Central</td></tr><tr><td>App2</td><td>ASP1</td><td>Standard S1</td><td>Windows</td><td>France Central</td></tr><tr><td>App3</td><td>ASP2</td><td>De base B1</td><td>Linux</td><td>France Central</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez ajouter un emplacement de déploiement à App3.",
   "a": 1
  },
  {
   "l": "App1 et App2 partagent les mêmes instances de calcul.",
   "a": 0
  },
  {
   "l": "Vous pouvez déplacer App3 dans ASP1.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Emplacement pour App3 : Non.</b> ASP2 est au niveau De base ; les emplacements demandent Standard ou plus.</li><li><b>Instances partagées : Oui.</b> App1 et App2 sont dans le même plan.</li><li><b>App3 dans ASP1 : Non.</b> ASP1 est un plan Windows, App3 une application Linux.</li></ul>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP2"
  ],
  "title": "ASP2 | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble"
  ],
  "rows": [
   [
    "Niveau",
    "De base B1 (pas d'emplacements)"
   ],
   [
    "*Système",
    "Linux (ne peut pas rejoindre ASP1 Windows)"
   ]
  ]
 },
 "keep": "Emplacements = Standard+ ; un plan = un OS."
},
{
 "id": "D3-184",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous disposez du groupe identique VMSS8, dont la mise à l'échelle automatique est présentée dans le document Règles (cliquez sur l'onglet Règles). VMSS8 a actuellement 4 instances.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "docs": [
  {
   "t": "Règles",
   "h": "<p><b>Profil par défaut</b> : minimum 2, maximum 6, par défaut 3.</p><ul><li>Règle 1 : CPU moyen &gt; 80 % pendant 5 minutes → augmenter de 2 instances. Refroidissement 5 minutes.</li><li>Règle 2 : CPU moyen &lt; 25 % pendant 10 minutes → diminuer de 1 instance. Refroidissement 5 minutes.</li></ul>"
  }
 ],
 "rows": [
  {
   "l": "Le CPU reste à 90 % pendant 20 minutes. Nombre d'instances ensuite :",
   "o": [
    "6",
    "8",
    "10"
   ],
   "a": 0
  },
  {
   "l": "Le CPU reste ensuite à 10 % pendant 2 heures. Nombre d'instances :",
   "o": [
    "0",
    "2",
    "3"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>6</b> : la règle 1 ajoute 2 instances (4 → 6), puis le <b>maximum</b> de 6 bloque toute nouvelle augmentation.</li><li><b>2</b> : la règle 2 retire une instance toutes les 15 minutes environ (10 minutes d'observation + refroidissement) jusqu'au <b>minimum</b> de 2.</li></ul><p>La valeur par défaut (3) ne sert que si la métrique est indisponible.</p>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS8"
  ],
  "title": "VMSS8 | Historique de mise à l'échelle",
  "menu": [
   "*Mise à l'échelle"
  ],
  "rows": [
   [
    "CPU 90 %",
    "4 → 6 (plafond)"
   ],
   [
    "*CPU 10 %",
    "6 → … → 2 (plancher)"
   ]
  ]
 },
 "keep": "Les règles s'arrêtent toujours au minimum et au maximum."
},
{
 "id": "D3-197",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'option de mise à l'échelle adaptée à chaque situation.</p><p>Pour répondre, faites glisser l'option appropriée vers chaque situation. Chaque option peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Options",
 "tgtHead": [
  "Situation",
  "Option"
 ],
 "srcs": [
  "Mise à l'échelle verticale (scale up)",
  "Mise à l'échelle horizontale (scale out)",
  "Mise à l'échelle planifiée"
 ],
 "tgts": [
  {
   "l": "Une application mono-instance a besoin de plus de mémoire",
   "a": 0
  },
  {
   "l": "Le nombre d'utilisateurs simultanés double de façon imprévisible",
   "a": 1
  },
  {
   "l": "Le trafic triple chaque lundi matin",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Verticale</b> : plus de ressources par instance (taille ou niveau supérieur).</li><li><b>Horizontale</b> : plus d'instances, déclenchée par des métriques pour une charge imprévisible.</li><li><b>Planifiée</b> : profil horaire pour une charge prévisible.</li></ul>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP1"
  ],
  "title": "Mise à l'échelle",
  "rows": [
   [
    "*Scale up",
    "Plus de ressources par instance"
   ],
   [
    "Scale out",
    "Plus d'instances (métriques)"
   ],
   [
    "Planifiée",
    "Profil horaire"
   ]
  ]
 },
 "keep": "Mémoire = up ; charge imprévisible = out ; charge prévisible = planifiée."
},
{
 "id": "D3-198",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous devez choisir l'option de redondance adaptée pour chaque niveau de protection d'une VM.</p><p>Pour répondre, faites glisser l'option appropriée vers chaque niveau. Chaque option peut être utilisée une fois, plusieurs fois ou pas du tout.</p>",
 "srcLabel": "Options",
 "tgtHead": [
  "Protection",
  "Option"
 ],
 "srcs": [
  "Domaines d'erreur",
  "Domaines de mise à jour",
  "Zones de disponibilité",
  "Azure Site Recovery vers une autre région"
 ],
 "tgts": [
  {
   "l": "Panne d'alimentation d'un rack",
   "a": 0
  },
  {
   "l": "Maintenance planifiée de l'hôte qui redémarre les serveurs",
   "a": 1
  },
  {
   "l": "Incendie dans un centre de données",
   "a": 2
  },
  {
   "l": "Catastrophe qui touche toute la région",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Domaines d'erreur</b> : racks séparés (alimentation et réseau).</li><li><b>Domaines de mise à jour</b> : groupes redémarrés à tour de rôle.</li><li><b>Zones</b> : centres de données séparés dans la région.</li><li><b>Site Recovery</b> : réplication vers une autre région, avec basculement.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "Créer"
  ],
  "title": "Résilience",
  "rows": [
   [
    "*Domaines d'erreur",
    "Rack"
   ],
   [
    "Domaines de mise à jour",
    "Maintenance"
   ],
   [
    "Zones",
    "Centre de données"
   ],
   [
    "Site Recovery",
    "Région"
   ]
  ]
 },
 "keep": "Rack, maintenance, centre de données, région : quatre niveaux, quatre outils."
},
{
 "id": "D3-199",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez déployer une application conteneurisée dans Azure Container Apps à partir de votre code source local, avec un registre privé.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Le <b>registre</b> doit exister pour recevoir l'image ; on <b>construit et pousse</b> l'image ; on crée enfin l'<b>application</b> qui tire l'image (avec une identité managée qui a AcrPull). La commande <code>az containerapp up</code> peut automatiser toutes ces étapes.</p><p>Un plan App Service et un groupe à haute disponibilité ne concernent pas Container Apps.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "1",
    "az acr create"
   ],
   [
    "2",
    "az acr build"
   ],
   [
    "*3",
    "az containerapp create (identité AcrPull)"
   ],
   [
    "Raccourci",
    "az containerapp up"
   ]
  ]
 },
 "keep": "Container Apps depuis le code : registre, build, application.",
 "acts": [
  "Créer un registre Azure Container Registry",
  "Construire l'image et la pousser dans le registre (az acr build)",
  "Créer l'application Container Apps à partir de l'image, avec une identité qui a AcrPull",
  "Créer un plan App Service",
  "Créer un groupe à haute disponibilité"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D3-200",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez mettre en place HTTPS sur le domaine www.fabrikam.com pour WebApp25, avec un certificat managé gratuit. WebApp25 est dans un plan Gratuit.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
 "expl": "<p>Le plan Gratuit ne prend pas en charge les domaines personnalisés : on <b>passe à De base</b>. On crée les <b>enregistrements DNS</b> de vérification et de redirection, on <b>ajoute le domaine</b>, puis on crée le <b>certificat managé</b> et la <b>liaison TLS</b> (SNI).</p><p>Un certificat managé ne peut pas être exporté, et aucun emplacement n'est nécessaire.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp25"
  ],
  "title": "WebApp25 | Domaines personnalisés",
  "menu": [
   "*Domaines personnalisés",
   "Certificats"
  ],
  "rows": [
   [
    "Plan",
    "De base (obligatoire)"
   ],
   [
    "*www.fabrikam.com",
    "Liaison SNI · certificat managé"
   ]
  ]
 },
 "keep": "HTTPS gratuit : De base, DNS, domaine, certificat managé + liaison.",
 "acts": [
  "Passer le plan au niveau De base ou supérieur",
  "Créer les enregistrements DNS CNAME et TXT asuid.www",
  "Ajouter le domaine personnalisé www.fabrikam.com à WebApp25",
  "Créer un certificat managé App Service et l'associer avec une liaison SNI",
  "Créer un emplacement de déploiement",
  "Exporter le certificat managé"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D3-206",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous utilisez des emplacements de déploiement sur WebApp27.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un emplacement de déploiement a sa propre URL.",
   "a": 0
  },
  {
   "l": "Les emplacements utilisent les instances du même plan App Service.",
   "a": 0
  },
  {
   "l": "Un emplacement peut être placé dans une autre région que l'application.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>URL propre : Oui</b>, par exemple <code>webapp27-staging.azurewebsites.net</code>.</li><li><b>Même plan : Oui.</b> Un emplacement consomme les ressources du plan de l'application.</li><li><b>Autre région : Non.</b> Les emplacements sont dans le même plan, donc la même région.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "WebApp27"
  ],
  "title": "WebApp27 | Emplacements de déploiement",
  "menu": [
   "*Emplacements de déploiement"
  ],
  "rows": [
   [
    "*staging",
    "webapp27-staging.azurewebsites.net"
   ],
   [
    "Plan / région",
    "Ceux de l'application"
   ]
  ]
 },
 "keep": "Emplacement = URL propre, même plan, même région."
},
{
 "id": "D3-207",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous gérez des modèles ARM et Bicep.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Un fichier Bicep est compilé en JSON ARM avant le déploiement.",
   "a": 0
  },
  {
   "l": "Le mode Incrémentiel supprime les ressources absentes du modèle.",
   "a": 1
  },
  {
   "l": "Redéployer le même modèle sans modification ne crée pas de doublon des ressources.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Compilation : Oui.</b> Bicep est transpilé en JSON ARM (automatiquement par Azure CLI et PowerShell).</li><li><b>Incrémentiel et suppression : Non.</b> C'est le mode Complet qui supprime.</li><li><b>Idempotence : Oui.</b> Les déploiements sont <b>idempotents</b> : redéployer le même modèle donne le même résultat.</li></ul>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Déploiement",
  "rows": [
   [
    "*Bicep",
    "Compilé en JSON ARM"
   ],
   [
    "Incrémentiel",
    "Ne supprime rien"
   ],
   [
    "Redéploiement",
    "Idempotent"
   ]
  ]
 },
 "keep": "Bicep → JSON ; Incrémentiel ne supprime pas ; déploiements idempotents."
},
{
 "id": "D3-208",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous gérez une VM avec un disque temporaire.</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
 "rows": [
  {
   "l": "Le contenu du disque temporaire survit à un simple redémarrage de la VM depuis le système d'exploitation.",
   "a": 0
  },
  {
   "l": "Le contenu du disque temporaire survit à un arrêt avec libération.",
   "a": 1
  },
  {
   "l": "Le disque temporaire est inclus dans les sauvegardes Azure Backup de la VM.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Redémarrage : Oui</b>, en général : la VM reste sur le même hôte. (Ce n'est toutefois pas garanti en cas de maintenance.)</li><li><b>Libération : Non.</b> La VM peut repartir sur un autre hôte : le disque temporaire est vide.</li><li><b>Sauvegarde : Non.</b> Azure Backup ne sauvegarde pas le disque temporaire.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Disques",
  "menu": [
   "*Disques"
  ],
  "rows": [
   [
    "*Disque temporaire",
    "Perdu à la libération ; non sauvegardé"
   ]
  ]
 },
 "keep": "Disque temporaire : survit en général au redémarrage, jamais à la libération ; pas de sauvegarde."
},
{
 "id": "D3-209",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous examinez la définition partielle suivante d'une VM dans un modèle ARM :</p><pre>\"storageProfile\": {\n  \"imageReference\": { \"publisher\": \"MicrosoftWindowsServer\", \"offer\": \"WindowsServer\", \"sku\": \"2022-datacenter-azure-edition\", \"version\": \"latest\" },\n  \"osDisk\": { \"createOption\": \"FromImage\", \"caching\": \"ReadWrite\", \"managedDisk\": { \"storageAccountType\": \"StandardSSD_LRS\" } },\n  \"dataDisks\": [ { \"lun\": 0, \"createOption\": \"Empty\", \"diskSizeGB\": 1024, \"caching\": \"ReadOnly\", \"managedDisk\": { \"storageAccountType\": \"Premium_LRS\" } } ]\n}</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Type du disque du système d'exploitation :",
   "o": [
    "SSD Premium",
    "HDD Standard",
    "SSD Standard"
   ],
   "a": 2
  },
  {
   "l": "Le disque de données est :",
   "o": [
    "une copie de l'image",
    "un nouveau disque vide de 1 Tio",
    "un disque existant"
   ],
   "a": 1
  },
  {
   "l": "Le cache du disque de données est adapté :",
   "o": [
    "aux écritures de journaux",
    "au disque temporaire",
    "aux lectures fréquentes"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><code>StandardSSD_LRS</code> : <b>SSD Standard</b>.</li><li><code>createOption: Empty</code> : un <b>disque vide</b> de 1 024 Gio (1 Tio). <code>Attach</code> attacherait un disque existant ; <code>FromImage</code> crée le disque à partir de l'image.</li><li>Cache <code>ReadOnly</code> : idéal pour des <b>lectures fréquentes</b> (fichiers de données).</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Disques",
  "menu": [
   "*Disques"
  ],
  "rows": [
   [
    "Disque OS",
    "SSD Standard · Lecture/écriture"
   ],
   [
    "*Disque de données LUN 0",
    "SSD Premium · 1 Tio · Lecture seule"
   ]
  ]
 },
 "keep": "StandardSSD_LRS = SSD Standard ; Empty = nouveau disque vide ; ReadOnly = lectures."
},
{
 "id": "D3-210",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous déployez des conteneurs avec la commande suivante :</p><pre>az container create --resource-group RG1 --name batch1 \\\n  --image contoso.azurecr.io/batch:2.1 --cpu 2 --memory 4 \\\n  --restart-policy OnFailure \\\n  --azure-file-volume-share-name resultats --azure-file-volume-account-name storage80 \\\n  --azure-file-volume-mount-path /mnt/resultats</pre><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "Si le traitement se termine avec le code 0, le conteneur :",
   "o": [
    "redémarre",
    "s'arrête",
    "est supprimé avec le groupe"
   ],
   "a": 1
  },
  {
   "l": "Les fichiers écrits dans /mnt/resultats sont stockés :",
   "o": [
    "sur le disque temporaire",
    "dans un conteneur blob",
    "dans le partage Azure Files resultats"
   ],
   "a": 2
  },
  {
   "l": "L'image est tirée depuis :",
   "o": [
    "Microsoft Container Registry",
    "Azure Container Registry",
    "Docker Hub"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>OnFailure</b> : avec un code de sortie 0 (succès), le conteneur s'arrête sans redémarrer. Le groupe reste (à l'état terminé) jusqu'à sa suppression.</li><li>Le volume monté est le <b>partage Azure Files</b> resultats.</li><li><code>contoso.azurecr.io</code> : un registre <b>ACR</b>.</li></ul>",
 "portal": {
  "path": [
   "Instances de conteneurs",
   "batch1"
  ],
  "title": "batch1 | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble"
  ],
  "rows": [
   [
    "*Stratégie de redémarrage",
    "OnFailure → arrêté après succès"
   ],
   [
    "Volume",
    "Azure Files : resultats"
   ],
   [
    "Image",
    "contoso.azurecr.io (ACR)"
   ]
  ]
 },
 "keep": "OnFailure + code 0 = arrêt ; volume = partage Azure Files."
},
{
 "id": "D3-211",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez un registre de conteneurs pour la production. Il doit être répliqué en West Europe et accessible uniquement par un point de terminaison privé. Le compte administrateur doit rester désactivé.</p><p>Comment devez-vous configurer le registre ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Premium</b> : seul niveau qui propose la géoréplication et les points de terminaison privés.</li><li><b>Accès privé</b> : point de terminaison privé, accès public désactivé.</li><li><b>Utilisateur administrateur</b> : laissé désactivé, on utilise des identités avec AcrPull et AcrPush.</li><li><b>Géoréplication</b> vers West Europe.</li></ul>",
 "portal": {
  "path": [
   "Registres de conteneurs",
   "Créer"
  ],
  "title": "Créer un registre de conteneurs",
  "menu": [
   "*Informations de base",
   "Mise en réseau"
  ],
  "rows": [
   [
    "*SKU",
    "Premium"
   ],
   [
    "*Connectivité",
    "Accès privé"
   ],
   [
    "Utilisateur administrateur",
    "Désactivé"
   ],
   [
    "*Géoréplication",
    "West Europe"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Registre de production privé et répliqué = Premium.",
 "win": {
  "title": "Créer un registre de conteneurs",
  "sub": "Registres de conteneurs",
  "rows": [
   {
    "k": "text",
    "l": "Nom du registre",
    "t": "contosoprod"
   },
   {
    "k": "select",
    "l": "Niveau tarifaire (SKU)",
    "o": [
     "De base",
     "Standard",
     "Premium"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Mise en réseau"
   },
   {
    "k": "radio",
    "l": "Connectivité",
    "opts": [
     "Accès public (tous les réseaux)",
     "Accès privé (recommandé)"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "head",
    "t": "Après la création"
   },
   {
    "k": "check",
    "l": "Utilisateur administrateur",
    "d": false,
    "a": false
   },
   {
    "k": "select",
    "l": "Géoréplications",
    "o": [
     "Aucune",
     "West Europe"
    ],
    "d": 0,
    "a": 1
   }
  ]
 }
},
{
 "id": "D3-212",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous créez une application Azure Container Apps pour une API publique. Elle doit être joignable sur Internet en HTTPS sur le port 443 (le conteneur écoute sur le port 8080), et descendre à zéro réplica la nuit.</p><p>Comment devez-vous configurer l'application ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "expl": "<ul><li><b>Entrée activée</b>, trafic <b>de n'importe où</b> (externe). Container Apps expose HTTPS sur 443 et redirige vers le <b>port cible 8080</b> du conteneur.</li><li><b>Minimum 0</b> : descente à zéro réplica sans trafic.</li></ul><p>Le maximum n'est pas noté ici.</p>",
 "portal": {
  "path": [
   "Container Apps",
   "Créer"
  ],
  "title": "Créer une application conteneur",
  "menu": [
   "Informations de base",
   "*Entrée",
   "Mise à l'échelle"
  ],
  "rows": [
   [
    "*Trafic entrant",
    "De n'importe où"
   ],
   [
    "*Port cible",
    "8080"
   ],
   [
    "*Réplicas min",
    "0"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Entrée externe : HTTPS 443 → port cible du conteneur ; min 0 = descente à zéro.",
 "win": {
  "title": "Créer une application conteneur",
  "sub": "Container Apps",
  "rows": [
   {
    "k": "head",
    "t": "Entrée"
   },
   {
    "k": "check",
    "l": "Entrée activée",
    "a": true
   },
   {
    "k": "radio",
    "l": "Trafic entrant",
    "opts": [
     "Limité à l'environnement Container Apps",
     "Accepter le trafic de n'importe où"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Port cible",
    "o": [
     "80",
     "443",
     "8080"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Mise à l'échelle"
   },
   {
    "k": "select",
    "l": "Nombre minimal de réplicas",
    "o": [
     "0",
     "1",
     "3"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Nombre maximal de réplicas",
    "o": [
     "1",
     "10",
     "300"
    ],
    "d": 1,
    "a": null
   }
  ]
 }
},
{
 "id": "D3-213",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez configurer la mise à l'échelle automatique du plan App Service qui héberge WebApp28.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Scale out (plan App Service)",
 "expl": "<p><b>Scale out</b> règle le nombre d'instances : manuel ou mise à l'échelle automatique avec règles. <b>Scale up</b> change le niveau et la taille du plan.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp28"
  ],
  "title": "WebApp28 | Scale out (plan App Service)",
  "menu": [
   "Scale up (plan App Service)",
   "*Scale out (plan App Service)"
  ],
  "rows": [
   [
    "*Méthode",
    "Mise à l'échelle automatique personnalisée"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Nombre d'instances = Scale out ; taille et niveau = Scale up.",
 "win": {
  "title": "WebApp28 | App Service",
  "nav": [
   {
    "g": "",
    "items": [
     "Vue d'ensemble",
     "Journal d'activité"
    ]
   },
   {
    "g": "Déploiement",
    "items": [
     "Emplacements de déploiement",
     "Centre de déploiement"
    ]
   },
   {
    "g": "Paramètres",
    "items": [
     "Variables d'environnement",
     "Configuration",
     "Mise en réseau",
     "Scale up (plan App Service)",
     "Scale out (plan App Service)",
     "Sauvegardes"
    ]
   }
  ]
 }
},
{
 "id": "D3-214",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous devez voir la sortie de l'extension Custom Script installée sur VM40.</p><p>Quelle option devez-vous sélectionner ?</p><p>Pour répondre, sélectionnez l'option appropriée dans la zone de réponse.</p>",
 "ans": "Extensions + applications",
 "expl": "<p><b>Extensions + applications</b> liste les extensions installées, leur état et leurs messages détaillés (sortie et erreur pour Custom Script). On peut aussi y ajouter ou désinstaller une extension.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM40"
  ],
  "title": "VM40 | Extensions + applications",
  "menu": [
   "Disques",
   "*Extensions + applications"
  ],
  "rows": [
   [
    "*CustomScriptExtension",
    "Provisionnement réussi · Afficher l'état détaillé"
   ]
  ]
 },
 "keep": "Sortie d'une extension = Extensions + applications.",
 "win": {
  "title": "VM40 | Machine virtuelle",
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
     "Disponibilité + mise à l'échelle",
     "Configuration",
     "Identité"
    ]
   },
   {
    "g": "Aide",
    "items": [
     "Diagnostics de démarrage",
     "Console série",
     "Exécuter la commande"
    ]
   }
  ]
 }
},
{
 "id": "D3-215",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>VM41 est en état <b>Échec</b> après une opération interrompue. Vous voulez la remettre dans un état cohérent sans la déplacer ni perdre de données.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle peut aider. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Relancer la dernière opération (par exemple un redimensionnement)",
   "a": 0
  },
  {
   "l": "Réappliquer (reapply) l'état de la VM",
   "a": 0
  },
  {
   "l": "Exporter le disque du système d'exploitation",
   "a": 1
  },
  {
   "l": "Supprimer la VM et ses disques, puis la recréer depuis un modèle",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Réappliquer : oui.</b> Il réexécute le provisionnement de la VM sur le même hôte, souvent suffisant pour sortir de l'état Échec.</li><li><b>Relancer l'opération : oui.</b> Une mise à jour de la VM (même sans changement) remet souvent l'état en cohérence.</li><li><b>Supprimer : non</b>, destructeur.</li><li><b>Exporter : non</b>, ne corrige rien.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM41"
  ],
  "title": "VM41 | Redéployer + réappliquer",
  "menu": [
   "*Redéployer + réappliquer"
  ],
  "rows": [
   [
    "État",
    "Échec"
   ],
   [
    "*Réappliquer",
    "Même hôte, état resynchronisé"
   ]
  ],
  "btn": "Réappliquer"
 },
 "keep": "VM en état Échec = Réappliquer ou relancer l'opération."
},
{
 "id": "D3-216",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous devez permettre à une application web de lire des secrets de Key Vault sans stocker d'identifiants.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle est nécessaire. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Mettre la clé d'accès du coffre dans un paramètre d'application",
   "a": 1
  },
  {
   "l": "Utilisateur des secrets Key Vault pour cette identité",
   "a": 0
  },
  {
   "l": "Activer l'identité managée attribuée par le système",
   "a": 0
  },
  {
   "l": "Contributeur sur le coffre pour tous les utilisateurs",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Identité managée : oui</b>, elle donne une identité Entra à l'application, sans secret.</li><li><b>Utilisateur des secrets Key Vault : oui</b>, il permet de lire les valeurs des secrets (coffre en mode RBAC).</li><li>Un coffre n'a pas de « clé » à mettre dans les paramètres. Contributeur pour tous serait dangereux et ne donne pas l'accès aux secrets en mode RBAC.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Identité",
  "menu": [
   "*Identité"
  ],
  "rows": [
   [
    "*Affectée par le système",
    "Activé"
   ],
   [
    "Rôle sur le coffre",
    "Utilisateur des secrets Key Vault"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Application → Key Vault sans secret = identité managée + rôle sur le coffre."
}
);
