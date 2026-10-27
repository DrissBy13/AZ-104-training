/* Domaine 3 : Calcul */
AZ.questions.push(
{
 "id": "D3-001",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déployez 10 machines virtuelles dans un groupe à haute disponibilité configuré avec 2 domaines d'erreur et 5 domaines de mise à jour.</p><p>Pendant une maintenance planifiée d'Azure, combien de machines virtuelles au maximum peuvent être indisponibles en même temps ?</p>",
 "opts": [
  "1",
  "2",
  "5",
  "10"
 ],
 "ans": 1,
 "expl": "<p>Dans un groupe à haute disponibilité, deux notions se combinent :</p><ul><li><b>Domaines de mise à jour</b> : groupes de VM redémarrés ensemble pendant une maintenance planifiée. Azure n'en redémarre qu'<b>un à la fois</b>.</li><li><b>Domaines d'erreur</b> : groupes de VM qui partagent le même rack (alimentation, réseau). Ils protègent des pannes matérielles, pas de la maintenance.</li></ul><p>10 VM réparties sur 5 domaines de mise à jour = 2 VM par domaine. Pendant la maintenance, au plus <b>2 VM</b> sont indisponibles en même temps.</p>",
 "portal": {
  "path": [
   "Groupes à haute disponibilité",
   "AS1"
  ],
  "title": "AS1 | Vue d'ensemble",
  "menu": [
   "*Vue d'ensemble",
   "Propriétés"
  ],
  "rows": [
   [
    "Domaines d'erreur",
    "2"
   ],
   [
    "*Domaines de mise à jour",
    "5"
   ],
   [
    "VM par domaine de mise à jour",
    "2"
   ]
  ]
 },
 "keep": "Maintenance planifiée = 1 domaine de mise à jour à la fois. Panne matérielle = 1 domaine d'erreur."
},
{
 "id": "D3-002",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Un groupe de machines virtuelles identiques nommé VMSS1 a la configuration de mise à l'échelle automatique suivante :</p><ul><li>Minimum : 2 instances. Maximum : 10 instances.</li><li>Si le CPU moyen dépasse 75 % pendant 10 minutes : ajouter 2 instances.</li><li>Si le CPU moyen est inférieur à 25 % pendant 10 minutes : retirer 1 instance.</li></ul><p>Combien d'instances y aura-t-il après l'action de mise à l'échelle ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "rows": [
  {
   "l": "3 instances, CPU moyen à 80 % pendant 15 minutes :",
   "o": [
    "3",
    "4",
    "5",
    "6"
   ],
   "a": 2
  },
  {
   "l": "9 instances, CPU moyen à 85 % pendant 15 minutes :",
   "o": [
    "9",
    "10",
    "11"
   ],
   "a": 1
  },
  {
   "l": "2 instances, CPU moyen à 10 % pendant 15 minutes :",
   "o": [
    "1",
    "2",
    "3"
   ],
   "a": 1
  }
 ],
 "expl": "<p>La mise à l'échelle automatique applique la règle, puis <b>respecte toujours les limites</b> minimum et maximum.</p><ul><li><b>3 instances, CPU à 80 %</b> : règle d'augmentation, 3 + 2 = <b>5</b>.</li><li><b>9 instances, CPU à 85 %</b> : 9 + 2 = 11, mais le maximum est 10 : <b>10</b>.</li><li><b>2 instances, CPU à 10 %</b> : la règle voudrait retirer une instance, mais le minimum est 2 : il reste <b>2</b>.</li></ul>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS1"
  ],
  "title": "VMSS1 | Mise à l'échelle",
  "menu": [
   "Vue d'ensemble",
   "Instances",
   "*Mise à l'échelle"
  ],
  "rows": [
   [
    "Limites d'instances",
    "Min 2 · Max 10"
   ],
   [
    "*Augmenter",
    "CPU > 75 % sur 10 min → +2"
   ],
   [
    "Diminuer",
    "CPU < 25 % sur 10 min → −1"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Le résultat de la règle est toujours ramené entre le minimum et le maximum."
},
{
 "id": "D3-003",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Vous évaluez plusieurs configurations de machines virtuelles.</p><p>Quel SLA de connectivité Microsoft garantit-il pour chaque configuration ? Pour répondre, faites glisser la valeur appropriée vers chaque configuration. Chaque valeur peut être utilisée une fois, plusieurs fois ou pas du tout.</p><p><b>REMARQUE :</b> chaque sélection correcte vaut un point.</p>",
 "srcLabel": "SLA",
 "tgtHead": [
  "Configuration",
  "SLA"
 ],
 "srcs": [
  "99,5 %",
  "99,9 %",
  "99,95 %",
  "99,99 %"
 ],
 "tgts": [
  {
   "l": "1 VM avec tous ses disques en SSD Premium",
   "a": 1
  },
  {
   "l": "2 VM dans un groupe à haute disponibilité",
   "a": 2
  },
  {
   "l": "2 VM dans deux zones de disponibilité différentes",
   "a": 3
  },
  {
   "l": "3 VM dans un groupe à haute disponibilité",
   "a": 2
  }
 ],
 "expl": "<p>Les SLA de connectivité des VM, à connaître par cœur :</p><ul><li><b>Une seule VM</b> avec tous ses disques en SSD Premium (ou Ultra, ou SSD Premium v2) : <b>99,9 %</b>.</li><li><b>Deux VM ou plus dans un groupe à haute disponibilité</b> (ou réparties sur des domaines d'erreur) : <b>99,95 %</b>. Le nombre de VM au-delà de 2 ne change rien.</li><li><b>Deux VM ou plus dans des zones de disponibilité différentes</b> : <b>99,99 %</b>.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "Créer"
  ],
  "title": "Créer une machine virtuelle | Disponibilité",
  "menu": [
   "*Informations de base"
  ],
  "rows": [
   [
    "Aucune redondance (1 VM, SSD Premium)",
    "99,9 %"
   ],
   [
    "Groupe à haute disponibilité",
    "99,95 %"
   ],
   [
    "*Zones de disponibilité",
    "99,99 %"
   ]
  ]
 },
 "keep": "99,9 % (1 VM Premium) · 99,95 % (groupe à haute disponibilité) · 99,99 % (zones)."
},
{
 "id": "D3-004",
 "dom": 3,
 "type": "single",
 "docs": [
  {
   "t": "RG1",
   "h": "<p>Contenu actuel de RG1 :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Nom</th><th>Type</th></tr><tr><td>VM1</td><td>Machine virtuelle</td></tr><tr><td>VM2</td><td>Machine virtuelle</td></tr></table></div>"
  },
  {
   "t": "Déploiement",
   "h": "<p>Le fichier vm1.json ne décrit qu'une seule ressource : VM1.</p><p>Vous exécutez la commande suivante :</p><pre class=\"code\">New-AzResourceGroupDeployment -ResourceGroupName RG1 `\n  -TemplateFile .\\vm1.json -Mode Complete</pre>"
  }
 ],
 "stem": "<p>Vous disposez du groupe de ressources RG1 présenté dans le document RG1 (cliquez sur l'onglet <b>RG1</b>).</p><p>Vous déployez un modèle ARM comme indiqué dans le document Déploiement (cliquez sur l'onglet <b>Déploiement</b>).</p><p>Quel est le résultat ?</p>",
 "opts": [
  "VM1 est mise à jour et VM2 est conservée",
  "Le déploiement échoue, car VM2 n'est pas dans le modèle",
  "VM1 est mise à jour et VM2 est supprimée",
  "VM1 et VM2 sont recréées"
 ],
 "ans": 2,
 "expl": "<p>Un déploiement ARM a deux modes :</p><ul><li><b>Incremental</b> (par défaut) : les ressources du modèle sont créées ou mises à jour ; les autres ressources du groupe ne sont pas touchées.</li><li><b>Complete</b> : le groupe de ressources est aligné exactement sur le modèle ; toute ressource absente du modèle est <b>supprimée</b>.</li></ul><p>Ici, le modèle ne contient que VM1, en mode Complete : VM1 est mise à jour et <b>VM2 est supprimée</b>. C'est un piège dangereux en production.</p>",
 "portal": {
  "path": [
   "Groupes de ressources",
   "RG1"
  ],
  "title": "RG1 | Déploiements",
  "menu": [
   "Vue d'ensemble",
   "*Déploiements"
  ],
  "rows": [
   [
    "Mode",
    "Complete"
   ],
   [
    "VM1",
    "Mise à jour"
   ],
   [
    "*VM2",
    "Supprimée (absente du modèle)"
   ]
  ]
 },
 "keep": "Incremental = ajoute et modifie. Complete = supprime aussi ce qui n'est pas dans le modèle."
},
{
 "id": "D3-005",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>Vous disposez d'une machine virtuelle nommée VM1. Vous recevez une notification indiquant que l'hôte physique de VM1 va subir une maintenance.</p><p>Vous devez déplacer VM1 vers un autre hôte physique.</p><p>Quel paramètre devez-vous utiliser ? Pour répondre, sélectionnez le paramètre approprié dans la zone de réponse.</p>",
 "win": {
  "title": "VM1 | Machine virtuelle",
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
     "Configuration"
    ]
   },
   {
    "g": "Opérations",
    "items": [
     "Sauvegarde",
     "Récupération d'urgence",
     "Mises à jour",
     "Exécuter la commande"
    ]
   },
   {
    "g": "Aide",
    "items": [
     "Redéployer + réappliquer",
     "Réinitialiser le mot de passe",
     "Diagnostics de démarrage"
    ]
   }
  ]
 },
 "ans": "Redéployer + réappliquer",
 "expl": "<p><b>Redéployer</b> arrête la VM, la déplace vers un <b>autre hôte</b> du même centre de données, puis la redémarre. C'est la solution quand l'hôte pose problème. Attention : le disque temporaire est vidé.</p><p><b>Réappliquer</b>, dans le même menu, réapplique l'état de la VM sur le même hôte. <b>Taille</b> change la puissance (et peut aussi déplacer la VM, mais ce n'est pas le but). <b>Récupération d'urgence</b> configure Azure Site Recovery vers une autre région.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Redéployer + réappliquer",
  "menu": [
   "Vue d'ensemble",
   "Taille",
   "*Redéployer + réappliquer"
  ],
  "rows": [
   [
    "*Redéployer",
    "Nouvel hôte, même centre de données"
   ],
   [
    "Réappliquer",
    "Même hôte"
   ],
   [
    "Attention",
    "Disque temporaire perdu"
   ]
  ],
  "btn": "Redéployer"
 },
 "keep": "Changer d'hôte physique = Redéployer."
},
{
 "id": "D3-006",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous déplacez VM1, avec ses disques et son interface réseau, de l'abonnement Sub1 vers l'abonnement Sub2, dans le même locataire.</p><p>Qu'est-ce qui change pour VM1 ?</p>",
 "opts": [
  "Sa région",
  "Sa taille",
  "Son système d'exploitation",
  "Son ID de ressource"
 ],
 "ans": 3,
 "expl": "<p>L'<b>ID de ressource</b> a la forme <code>/subscriptions/&lt;id&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Compute/virtualMachines/VM1</code>. Il contient l'abonnement et le groupe de ressources : il <b>change</b> lors du déplacement. Les scripts et alertes qui utilisent l'ancien ID doivent être mis à jour.</p><p>La région, la taille et le système d'exploitation ne changent pas. Pour changer de région, on utilise Azure Resource Mover ou Site Recovery.</p>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "*Propriétés"
  ],
  "rows": [
   [
    "*ID de ressource",
    "/subscriptions/<Sub2>/resourceGroups/RG2/…/VM1"
   ],
   [
    "Région",
    "Inchangée"
   ]
  ]
 },
 "keep": "Déplacer change l'ID de ressource, jamais la région."
},
{
 "id": "D3-007",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>Vous disposez d'un modèle ARM au format JSON nommé template.json. Vous devez le convertir en fichier Bicep.</p><p>Comment devez-vous compléter la commande ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "tpl": "az {0} {1} --file template.json",
 "rows": [
  {
   "o": [
    "deployment group",
    "bicep",
    "resource"
   ],
   "a": 1,
   "l": "Groupe de commandes"
  },
  {
   "o": [
    "build",
    "create",
    "decompile",
    "export"
   ],
   "a": 2,
   "l": "Commande"
  }
 ],
 "expl": "<p>Le groupe de commandes <b>az bicep</b> gère les fichiers Bicep :</p><ul><li><code>az bicep <b>decompile</b> --file template.json</code> : ARM JSON → Bicep.</li><li><code>az bicep <b>build</b> --file main.bicep</code> : Bicep → ARM JSON.</li></ul><p><code>az deployment group create</code> déploie un modèle (JSON ou Bicep) dans un groupe de ressources. La décompilation est un « meilleur effort » : il faut relire le résultat.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az bicep decompile",
    "JSON → Bicep"
   ],
   [
    "az bicep build",
    "Bicep → JSON"
   ]
  ]
 },
 "keep": "decompile = JSON vers Bicep ; build = Bicep vers JSON."
},
{
 "id": "D3-008",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous créez un registre de conteneurs Azure nommé ACR1. Les images doivent être répliquées automatiquement dans les régions France Central et Europe Ouest, au moindre coût.</p><p>Quel niveau de service devez-vous choisir pour ACR1 ?</p>",
 "opts": [
  "De base",
  "Premium",
  "Standard",
  "N'importe quel niveau"
 ],
 "ans": 1,
 "expl": "<p>Azure Container Registry a trois niveaux : <b>De base</b>, <b>Standard</b> et <b>Premium</b>. Seul <b>Premium</b> propose la <b>géoréplication</b> (un même registre répliqué dans plusieurs régions), ainsi que les points de terminaison privés et les clés gérées par le client.</p><p>Premium est donc le niveau le moins cher qui répond au besoin.</p>",
 "portal": {
  "path": [
   "Registres de conteneurs",
   "ACR1"
  ],
  "title": "ACR1 | Géoréplications",
  "menu": [
   "Vue d'ensemble",
   "*Géoréplications"
  ],
  "rows": [
   [
    "*Niveau",
    "Premium (requis)"
   ],
   [
    "Régions",
    "France Central, West Europe"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Géoréplication ACR, points de terminaison privés = Premium."
},
{
 "id": "D3-009",
 "dom": 3,
 "type": "order",
 "stem": "<p>Vous devez configurer le domaine personnalisé www.contoso.com pour l'application web WebApp1, avec un certificat TLS gratuit géré par App Service. WebApp1 s'exécute dans un plan de niveau Standard.</p><p>Quelles quatre actions devez-vous effectuer dans l'ordre ? Pour répondre, déplacez les actions appropriées de la liste des actions vers la zone de réponse et classez-les dans le bon ordre.</p>",
 "acts": [
  "Ajouter et valider le domaine personnalisé dans WebApp1",
  "Passer le plan App Service au niveau Gratuit",
  "Créer les enregistrements CNAME et TXT chez le fournisseur DNS",
  "Ajouter la liaison TLS/SSL au domaine personnalisé",
  "Créer un enregistrement MX pour www.contoso.com",
  "Créer un certificat managé App Service pour www.contoso.com"
 ],
 "seq": [
  2,
  0,
  5,
  3
 ],
 "expl": "<p>Ordre logique pour un domaine personnalisé avec un certificat managé :</p><ol><li>Créer chez le fournisseur DNS le <b>CNAME</b> (www → webapp1.azurewebsites.net) et le <b>TXT</b> asuid.www (ID de vérification).</li><li><b>Ajouter et valider</b> le domaine dans WebApp1.</li><li>Créer le <b>certificat managé App Service</b> (gratuit) pour ce domaine.</li><li>Ajouter la <b>liaison TLS/SSL</b>.</li></ol><p>Le niveau Gratuit ne prend pas en charge les domaines personnalisés (le plan Standard le fait). Un enregistrement MX sert au courrier.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Domaines personnalisés",
  "menu": [
   "Vue d'ensemble",
   "*Domaines personnalisés",
   "Certificats"
  ],
  "rows": [
   [
    "*www.contoso.com",
    "Sécurisé · Certificat managé App Service"
   ],
   [
    "DNS",
    "CNAME + TXT asuid.www"
   ]
  ],
  "btn": "+ Ajouter un domaine personnalisé"
 },
 "keep": "Domaine personnalisé : DNS (CNAME + TXT), ajout, certificat, liaison."
},
{
 "id": "D3-010",
 "dom": 3,
 "type": "screen",
 "stem": "<p>Vous devez déployer une application web dans un conteneur Docker basé sur Linux. L'application doit pouvoir effectuer un scale-out automatique et utiliser des emplacements de déploiement. La solution doit minimiser les coûts.</p><p>Comment devez-vous configurer l'application web ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
 "win": {
  "title": "Créer une application web",
  "sub": "Notions de base",
  "rows": [
   {
    "k": "head",
    "t": "Détails de l'instance"
   },
   {
    "k": "text",
    "l": "Nom",
    "t": "webapp1"
   },
   {
    "k": "select",
    "l": "Publier",
    "o": [
     "Code",
     "Conteneur",
     "Application web statique"
    ],
    "a": 1
   },
   {
    "k": "radio",
    "l": "Système d'exploitation",
    "opts": [
     "Linux",
     "Windows"
    ],
    "a": 0
   },
   {
    "k": "head",
    "t": "Plan tarifaire"
   },
   {
    "k": "select",
    "l": "Plan tarifaire",
    "o": [
     "Gratuit F1",
     "De base B1",
     "Standard S1",
     "Premium P1v3"
    ],
    "a": 2
   }
  ]
 },
 "expl": "<ul><li><b>Publier : Conteneur</b>, puisqu'on déploie une image Docker. (La pile d'exécution, comme .NET ou Node, ne concerne que le mode Code.)</li><li><b>Linux</b>, puisque l'image est basée sur Linux.</li><li><b>Standard S1</b> : c'est le niveau le moins cher qui propose la mise à l'échelle automatique et les emplacements de déploiement. De base n'a ni l'un ni l'autre ; Premium les a aussi, mais coûte plus.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "Créer"
  ],
  "title": "Créer une application web",
  "menu": [
   "*Informations de base",
   "Conteneur"
  ],
  "rows": [
   [
    "*Publier",
    "Conteneur"
   ],
   [
    "*Système d'exploitation",
    "Linux"
   ],
   [
    "*Plan tarifaire",
    "Standard S1"
   ]
  ],
  "btn": "Vérifier + créer"
 },
 "keep": "Mise à l'échelle auto + emplacements = Standard minimum. Image Docker = Publier : Conteneur."
},
{
 "id": "D3-011",
 "dom": 3,
 "type": "single",
 "stem": "<p>Les nouvelles machines virtuelles de votre abonnement doivent chiffrer aussi leur disque temporaire et leurs caches de disque, sans rien installer dans le système d'exploitation.</p><p>Que devez-vous faire en premier ?</p>",
 "opts": [
  "Créer un coffre de clés et une clé",
  "Activer Azure Disk Encryption sur chaque VM",
  "Enregistrer la fonctionnalité de chiffrement sur l'hôte dans l'abonnement",
  "Convertir les disques en SSD Premium"
 ],
 "ans": 2,
 "expl": "<p>Le <b>chiffrement sur l'hôte</b> (encryption at host) chiffre aussi le <b>disque temporaire</b> et les <b>caches</b> de disque, sur l'hôte physique, sans agent ni BitLocker dans la VM.</p><p>Avant de l'activer sur une VM, il faut <b>enregistrer la fonctionnalité</b> EncryptionAtHost sur l'abonnement (<code>Register-AzProviderFeature -FeatureName EncryptionAtHost</code>).</p><p><b>Azure Disk Encryption</b> chiffre à l'intérieur de l'OS (BitLocker ou DM-Crypt) : ce n'est pas ce qui est demandé. Le type de disque n'a pas d'importance.</p>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Sub1 | Fonctionnalités en préversion",
  "menu": [
   "Fournisseurs de ressources",
   "*Fonctionnalités en préversion"
  ],
  "rows": [
   [
    "*EncryptionAtHost",
    "Inscrire"
   ],
   [
    "Ensuite",
    "VM > Disques > Chiffrement sur l'hôte : Oui"
   ]
  ],
  "btn": "Inscrire"
 },
 "keep": "Disque temporaire et caches chiffrés sans agent = chiffrement sur l'hôte (fonctionnalité à enregistrer)."
}
);
