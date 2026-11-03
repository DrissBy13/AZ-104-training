/* Domaine 3 : calcul (lot F : D3-231 à D3-250, questions à documents façon examen) */
AZ.questions.push(
{
 "id": "D3-231",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Machines virtuelles (cliquez sur l'onglet <b>Machines virtuelles</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Machines virtuelles",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Taille</th><th>Région</th><th>Zone</th><th>Groupe à haute disponibilité</th><th>Disque du système</th></tr><tr><td>VM1</td><td>Standard_D4s_v5</td><td>France Central</td><td>1</td><td>—</td><td>SSD Premium</td></tr><tr><td>VM2</td><td>Standard_D4s_v5</td><td>France Central</td><td>2</td><td>—</td><td>SSD Premium</td></tr><tr><td>VM3</td><td>Standard_D4_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>SSD Standard</td></tr><tr><td>VM4</td><td>Standard_D4s_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>SSD Premium</td></tr><tr><td>VM5</td><td>Standard_B2s</td><td>West Europe</td><td>—</td><td>—</td><td>HDD Standard</td></tr></table></div><p>AS1 : 2 domaines d'erreur, 5 domaines de mise à jour. VM1 et VM2 sont derrière un équilibreur de charge Standard redondant interzone ; VM3 et VM4 derrière un autre.</p>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez attacher un disque de données SSD Premium à VM3.",
   "a": 1
  },
  {
   "l": "Vous pouvez ajouter VM1 à AS1.",
   "a": 1
  },
  {
   "l": "VM1 et VM2 sont couvertes par le contrat de niveau de service de 99,99 % pour des VM réparties dans plusieurs zones.",
   "a": 0
  },
  {
   "l": "Si un rack tombe en panne, au moins une des deux VM VM3 et VM4 reste disponible.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Premium sur VM3 : Non.</b> La taille D4_v5 n'a pas de « s » : elle ne prend pas en charge le stockage Premium. Il faudrait passer en D4s_v5.</li><li><b>VM1 dans AS1 : Non.</b> Une VM ne peut pas être à la fois dans une zone et dans un groupe à haute disponibilité, et une VM existante ne s'ajoute pas à un groupe (il faut la recréer).</li><li><b>99,99 % : Oui.</b> Deux instances ou plus dans au moins deux zones de la même région.</li><li><b>Rack : Oui.</b> Avec 2 domaines d'erreur, Azure place VM3 et VM4 sur des racks différents (alimentation et réseau séparés).</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM3"
  ],
  "title": "VM3 | Taille",
  "menu": [
   "Vue d'ensemble",
   "Disques",
   "*Taille",
   "Disponibilité + mise à l'échelle"
  ],
  "rows": [
   [
    "*Standard_D4_v5",
    "Stockage Premium : non pris en charge"
   ]
  ]
 },
 "keep": "« s » dans la taille = Premium possible. Zone OU groupe à haute disponibilité, choisi à la création."
},
{
 "id": "D3-232",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Machines virtuelles (cliquez sur l'onglet <b>Machines virtuelles</b>).</p><p>Vous déployez trois nouvelles applications. Quelle option de disponibilité convient à chacune ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Machines virtuelles",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Taille</th><th>Région</th><th>Zone</th><th>Groupe à haute disponibilité</th><th>Disque du système</th></tr><tr><td>VM1</td><td>Standard_D4s_v5</td><td>France Central</td><td>1</td><td>—</td><td>SSD Premium</td></tr><tr><td>VM2</td><td>Standard_D4s_v5</td><td>France Central</td><td>2</td><td>—</td><td>SSD Premium</td></tr><tr><td>VM3</td><td>Standard_D4_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>SSD Standard</td></tr><tr><td>VM4</td><td>Standard_D4s_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>SSD Premium</td></tr><tr><td>VM5</td><td>Standard_B2s</td><td>West Europe</td><td>—</td><td>—</td><td>HDD Standard</td></tr></table></div><p>AS1 : 2 domaines d'erreur, 5 domaines de mise à jour. VM1 et VM2 sont derrière un équilibreur de charge Standard redondant interzone ; VM3 et VM4 derrière un autre.</p>"
  }
 ],
 "rows": [
  {
   "l": "Survivre à la perte d'un centre de données de la région :",
   "o": [
    "Zones de disponibilité",
    "Groupe à haute disponibilité",
    "Groupe de placement de proximité"
   ],
   "a": 0
  },
  {
   "l": "Survivre à une panne de rack, région sans zones :",
   "o": [
    "Zones de disponibilité",
    "Groupe à haute disponibilité",
    "Groupe de placement de proximité"
   ],
   "a": 1
  },
  {
   "l": "Latence réseau minimale entre les VM d'un calcul :",
   "o": [
    "Zones de disponibilité",
    "Groupe à haute disponibilité",
    "Groupe de placement de proximité"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Centre de données :</b> les zones sont des centres de données séparés de la même région.</li><li><b>Rack, sans zones :</b> un groupe à haute disponibilité répartit les VM sur des domaines d'erreur (racks).</li><li><b>Latence :</b> un groupe de placement de proximité rapproche physiquement les VM, au détriment de la résilience.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM1"
  ],
  "title": "VM1 | Disponibilité + mise à l'échelle",
  "menu": [
   "Vue d'ensemble",
   "Disques",
   "*Disponibilité + mise à l'échelle",
   "Disponibilité + mise à l'échelle"
  ],
  "rows": [
   [
    "*Zone de disponibilité",
    "1"
   ]
  ]
 },
 "keep": "Zone = centre de données. Groupe à haute dispo = rack. Proximité = latence."
},
{
 "id": "D3-233",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Machines virtuelles (cliquez sur l'onglet <b>Machines virtuelles</b>).</p><p>VM3 doit recevoir un disque de données SSD Premium. Elle doit rester dans AS1.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Machines virtuelles",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Taille</th><th>Région</th><th>Zone</th><th>Groupe à haute disponibilité</th><th>Disque du système</th></tr><tr><td>VM1</td><td>Standard_D4s_v5</td><td>France Central</td><td>1</td><td>—</td><td>SSD Premium</td></tr><tr><td>VM2</td><td>Standard_D4s_v5</td><td>France Central</td><td>2</td><td>—</td><td>SSD Premium</td></tr><tr><td>VM3</td><td>Standard_D4_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>SSD Standard</td></tr><tr><td>VM4</td><td>Standard_D4s_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>SSD Premium</td></tr><tr><td>VM5</td><td>Standard_B2s</td><td>West Europe</td><td>—</td><td>—</td><td>HDD Standard</td></tr></table></div><p>AS1 : 2 domaines d'erreur, 5 domaines de mise à jour. VM1 et VM2 sont derrière un équilibreur de charge Standard redondant interzone ; VM3 et VM4 derrière un autre.</p>"
  }
 ],
 "opts": [
  "Arrêter (libérer) VM3, la passer en D4s_v5, puis ajouter le disque",
  "Convertir d'abord le disque système de VM3 en SSD Premium",
  "Recréer VM3 dans la zone 1 avec la taille D4s_v5",
  "Ajouter le disque Premium : la taille change automatiquement"
 ],
 "ans": 0,
 "expl": "<p>Il faut une taille compatible Premium (avec « s »). Le redimensionnement garde la VM dans AS1 ; si la nouvelle taille n'est pas disponible sur le cluster matériel du groupe, il faut arrêter (libérer) les VM du groupe avant de redimensionner.</p><ul><li>Le type du disque système n'est pas en cause : c'est la taille qui bloque.</li><li>Recréer VM3 en zone la sortirait d'AS1.</li><li>Azure ne change jamais la taille tout seul.</li></ul>",
 "portal": {
  "path": [
   "Machines virtuelles",
   "VM3"
  ],
  "title": "VM3 | Taille",
  "menu": [
   "Vue d'ensemble",
   "Disques",
   "*Taille",
   "Disponibilité + mise à l'échelle"
  ],
  "rows": [
   [
    "*Standard_D4s_v5",
    "Stockage Premium : pris en charge"
   ]
  ]
 },
 "keep": "Disque Premium refusé ? Vérifier le « s » de la taille."
},
{
 "id": "D3-234",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Mise à l'échelle (cliquez sur l'onglet <b>Mise à l'échelle</b>).</p><p>Combien d'instances VMSS1 a-t-il après une seule évaluation de la mise à l'échelle automatique dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Mise à l'échelle",
   "h": "<p>Groupe de machines virtuelles identiques <b>VMSS1</b> : minimum 2, maximum 10, par défaut 2 instances. Temps de refroidissement : 5 minutes. Stratégie de mise à niveau : <b>Manuelle</b>. Stratégie de diminution : <b>Par défaut</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle</th><th>Condition</th><th>Action</th></tr><tr><td>Augmenter</td><td>CPU moyen &gt; 75 % sur 10 minutes</td><td>Ajouter 2 instances</td></tr><tr><td>Diminuer</td><td>CPU moyen &lt; 25 % sur 10 minutes</td><td>Retirer 1 instance</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "4 instances, CPU moyen à 80 % :",
   "o": [
    "2",
    "4",
    "5",
    "6",
    "9",
    "10",
    "11"
   ],
   "a": 3
  },
  {
   "l": "9 instances, CPU moyen à 90 % :",
   "o": [
    "2",
    "4",
    "5",
    "6",
    "9",
    "10",
    "11"
   ],
   "a": 5
  },
  {
   "l": "2 instances, CPU moyen à 10 % :",
   "o": [
    "2",
    "4",
    "5",
    "6",
    "9",
    "10",
    "11"
   ],
   "a": 0
  },
  {
   "l": "5 instances, CPU moyen à 50 % :",
   "o": [
    "2",
    "4",
    "5",
    "6",
    "9",
    "10",
    "11"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>4 à 80 % → 6 :</b> la règle d'augmentation ajoute 2 instances.</li><li><b>9 à 90 % → 10 :</b> +2 donnerait 11, mais le <b>maximum</b> est 10.</li><li><b>2 à 10 % → 2 :</b> le <b>minimum</b> est 2, aucune instance n'est retirée.</li><li><b>5 à 50 % → 5 :</b> aucune règle ne se déclenche (entre 25 % et 75 %).</li></ul>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS1"
  ],
  "title": "VMSS1 | Mise à l'échelle",
  "menu": [
   "Vue d'ensemble",
   "Instances",
   "*Mise à l'échelle",
   "Mise à niveau"
  ],
  "rows": [
   [
    "*Limites",
    "Min 2 · Max 10 · Par défaut 2"
   ]
  ]
 },
 "keep": "Les actions restent toujours entre le minimum et le maximum."
},
{
 "id": "D3-235",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Mise à l'échelle (cliquez sur l'onglet <b>Mise à l'échelle</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Mise à l'échelle",
   "h": "<p>Groupe de machines virtuelles identiques <b>VMSS1</b> : minimum 2, maximum 10, par défaut 2 instances. Temps de refroidissement : 5 minutes. Stratégie de mise à niveau : <b>Manuelle</b>. Stratégie de diminution : <b>Par défaut</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle</th><th>Condition</th><th>Action</th></tr><tr><td>Augmenter</td><td>CPU moyen &gt; 75 % sur 10 minutes</td><td>Ajouter 2 instances</td></tr><tr><td>Diminuer</td><td>CPU moyen &lt; 25 % sur 10 minutes</td><td>Retirer 1 instance</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Si vous modifiez l'image du modèle de VMSS1, les instances existantes sont mises à jour automatiquement.",
   "a": 1
  },
  {
   "l": "Juste après l'ajout de 2 instances, une nouvelle action ne peut pas avoir lieu avant 5 minutes.",
   "a": 0
  },
  {
   "l": "Avec la stratégie de diminution Par défaut, Azure retire en priorité l'instance la plus récente.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Modèle : Non.</b> En stratégie <b>Manuelle</b>, les instances existantes gardent l'ancien modèle jusqu'à ce que vous les mettiez à niveau (par exemple <code>az vmss update-instances</code>). Les nouvelles instances utilisent le nouveau modèle.</li><li><b>Refroidissement : Oui.</b> Après une action, la mise à l'échelle automatique attend la durée de refroidissement (5 minutes) avant d'en lancer une autre.</li><li><b>Diminution Par défaut : Non.</b> Elle équilibre d'abord les instances entre zones et domaines d'erreur, puis retire l'instance dont l'ID est le plus élevé. Pour retirer la plus récente ou la plus ancienne, on choisit NewestVM ou OldestVM.</li></ul>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS1"
  ],
  "title": "VMSS1 | Instances",
  "menu": [
   "Vue d'ensemble",
   "*Instances",
   "Mise à l'échelle"
  ],
  "rows": [
   [
    "*vmss1_3",
    "Dernier modèle : Non"
   ]
  ],
  "btn": "Mettre à niveau"
 },
 "keep": "Stratégie Manuelle = mise à niveau des instances à la main. Diminution Par défaut ≠ plus récente."
},
{
 "id": "D3-236",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Mise à l'échelle (cliquez sur l'onglet <b>Mise à l'échelle</b>).</p><p>Lors des diminutions, VMSS1 doit garder les instances les plus récentes, qui portent les derniers correctifs.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Mise à l'échelle",
   "h": "<p>Groupe de machines virtuelles identiques <b>VMSS1</b> : minimum 2, maximum 10, par défaut 2 instances. Temps de refroidissement : 5 minutes. Stratégie de mise à niveau : <b>Manuelle</b>. Stratégie de diminution : <b>Par défaut</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle</th><th>Condition</th><th>Action</th></tr><tr><td>Augmenter</td><td>CPU moyen &gt; 75 % sur 10 minutes</td><td>Ajouter 2 instances</td></tr><tr><td>Diminuer</td><td>CPU moyen &lt; 25 % sur 10 minutes</td><td>Retirer 1 instance</td></tr></table></div>"
  }
 ],
 "opts": [
  "Passer la stratégie de diminution à OldestVM",
  "Passer la stratégie de diminution à NewestVM",
  "Activer la protection contre la diminution sur toutes les instances",
  "Passer la stratégie de mise à niveau en Automatique"
 ],
 "ans": 0,
 "expl": "<p><b>OldestVM</b> retire en priorité les instances les plus <b>anciennes</b>, donc garde les plus récentes (après équilibrage entre zones).</p><ul><li>NewestVM fait l'inverse.</li><li>Protéger toutes les instances empêcherait toute diminution.</li><li>La stratégie de mise à niveau ne choisit pas les instances retirées.</li></ul>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS1"
  ],
  "title": "VMSS1 | Mise à l'échelle",
  "menu": [
   "Vue d'ensemble",
   "Instances",
   "*Mise à l'échelle",
   "Mise à niveau"
  ],
  "rows": [
   [
    "*Limites",
    "Min 2 · Max 10 · Par défaut 2"
   ]
  ]
 },
 "keep": "OldestVM = supprime les plus anciennes. NewestVM = supprime les plus récentes."
},
{
 "id": "D3-237",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document App Service (cliquez sur l'onglet <b>App Service</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "App Service",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Plan</th><th>Système</th><th>Niveau</th><th>Région</th><th>Groupe de ressources</th><th>Redondance de zone</th></tr><tr><td>ASP1</td><td>Windows</td><td>Standard S1 (3 instances)</td><td>France Central</td><td>RG1</td><td>Non</td></tr><tr><td>ASP2</td><td>Linux</td><td>De base B1</td><td>France Central</td><td>RG1</td><td>Non</td></tr><tr><td>ASP3</td><td>Windows</td><td>Gratuit F1</td><td>West Europe</td><td>RG2</td><td>Non</td></tr><tr><td>ASP4</td><td>Windows</td><td>Premium v3 P1v3 (3 instances)</td><td>France Central</td><td>RG1</td><td>Oui</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Application</th><th>Plan</th><th>Emplacements</th></tr><tr><td>App1</td><td>ASP1</td><td>production, staging</td></tr><tr><td>App2</td><td>ASP2</td><td>production</td></tr><tr><td>App3</td><td>ASP3</td><td>production</td></tr><tr><td>App4</td><td>ASP4</td><td>production</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez créer un emplacement de déploiement pour App2.",
   "a": 1
  },
  {
   "l": "Vous pouvez associer un domaine personnalisé à App3.",
   "a": 1
  },
  {
   "l": "Vous pouvez déplacer App1 dans ASP4.",
   "a": 0
  },
  {
   "l": "Vous pouvez déplacer App1 dans ASP2.",
   "a": 1
  },
  {
   "l": "App2 peut utiliser l'intégration au réseau virtuel.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Emplacement pour App2 : Non.</b> Les emplacements de déploiement demandent le niveau <b>Standard</b> ou supérieur ; ASP2 est en De base.</li><li><b>Domaine pour App3 : Non.</b> Le niveau Gratuit n'accepte pas de domaine personnalisé (il faut Partagé ou plus, et De base pour une liaison TLS).</li><li><b>App1 → ASP4 : Oui.</b> Même région, même groupe de ressources, même système (Windows).</li><li><b>App1 → ASP2 : Non.</b> ASP2 est un plan Linux ; App1 tourne sous Windows.</li><li><b>Intégration VNet pour App2 : Oui.</b> Disponible dès le niveau De base.</li></ul>",
 "portal": {
  "path": [
   "Applications web",
   "App1"
  ],
  "title": "App1 | Changer de plan App Service",
  "menu": [
   "Vue d'ensemble",
   "Emplacements de déploiement",
   "*Changer de plan App Service"
  ],
  "rows": [
   [
    "*ASP4",
    "Windows · France Central · RG1 · compatible"
   ]
  ]
 },
 "keep": "Emplacements : Standard+. Domaine : Partagé+ (TLS : De base+). Changer de plan : même région, groupe et système."
},
{
 "id": "D3-238",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Emplacements (cliquez sur l'onglet <b>Emplacements</b>).</p><p>Vous permutez staging et production. Quelles valeurs l'emplacement de production a-t-il ensuite ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Emplacements",
   "h": "<p>Paramètres d'application de <b>App1</b> :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Emplacement</th><th>Paramètre</th><th>Valeur</th><th>Paramètre d'emplacement de déploiement</th></tr><tr><td>production</td><td>DB</td><td>prod-db</td><td>Oui</td></tr><tr><td>production</td><td>FEATURE</td><td>on</td><td>Non</td></tr><tr><td>staging</td><td>DB</td><td>test-db</td><td>Oui</td></tr><tr><td>staging</td><td>FEATURE</td><td>off</td><td>Non</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "DB :",
   "o": [
    "prod-db",
    "test-db"
   ],
   "a": 0
  },
  {
   "l": "FEATURE :",
   "o": [
    "on",
    "off"
   ],
   "a": 1
  }
 ],
 "expl": "<p>Une permutation échange le <b>contenu</b> des emplacements (code et paramètres non marqués). Les paramètres marqués <b>Paramètre d'emplacement de déploiement</b> restent attachés à leur emplacement.</p><ul><li><b>DB</b> est collant : la production garde prod-db.</li><li><b>FEATURE</b> n'est pas collant : il suit le code venu de staging, la production passe à off.</li></ul>",
 "portal": {
  "path": [
   "Applications web",
   "App1"
  ],
  "title": "App1 | Variables d'environnement",
  "menu": [
   "Emplacements de déploiement",
   "*Variables d'environnement"
  ],
  "rows": [
   [
    "*DB",
    "prod-db · paramètre d'emplacement"
   ],
   [
    "FEATURE",
    "off"
   ]
  ]
 },
 "keep": "Permutation : les paramètres d'emplacement restent, les autres suivent le code."
},
{
 "id": "D3-239",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document App Service (cliquez sur l'onglet <b>App Service</b>).</p><p>App3 doit être publiée sur www.contoso.com en HTTPS avec son propre certificat. La solution doit limiter le coût.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "App Service",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Plan</th><th>Système</th><th>Niveau</th><th>Région</th><th>Groupe de ressources</th><th>Redondance de zone</th></tr><tr><td>ASP1</td><td>Windows</td><td>Standard S1 (3 instances)</td><td>France Central</td><td>RG1</td><td>Non</td></tr><tr><td>ASP2</td><td>Linux</td><td>De base B1</td><td>France Central</td><td>RG1</td><td>Non</td></tr><tr><td>ASP3</td><td>Windows</td><td>Gratuit F1</td><td>West Europe</td><td>RG2</td><td>Non</td></tr><tr><td>ASP4</td><td>Windows</td><td>Premium v3 P1v3 (3 instances)</td><td>France Central</td><td>RG1</td><td>Oui</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Application</th><th>Plan</th><th>Emplacements</th></tr><tr><td>App1</td><td>ASP1</td><td>production, staging</td></tr><tr><td>App2</td><td>ASP2</td><td>production</td></tr><tr><td>App3</td><td>ASP3</td><td>production</td></tr><tr><td>App4</td><td>ASP4</td><td>production</td></tr></table></div>"
  }
 ],
 "opts": [
  "Passer ASP3 au niveau De base (B1)",
  "Passer ASP3 au niveau Partagé (D1)",
  "Passer ASP3 au niveau Standard (S1)",
  "Déplacer App3 dans ASP4"
 ],
 "ans": 0,
 "expl": "<p>Le niveau <b>De base</b> est le moins cher qui accepte à la fois un domaine personnalisé et une liaison TLS (SNI).</p><ul><li>Partagé accepte un domaine personnalisé, mais pas de liaison de certificat.</li><li>Standard fonctionne mais coûte plus cher.</li><li>App3 ne peut pas aller dans ASP4 : autre région et autre groupe de ressources (et ce serait plus cher).</li></ul>",
 "portal": {
  "path": [
   "Plans App Service",
   "ASP3"
  ],
  "title": "ASP3 | Monter en puissance",
  "menu": [
   "Vue d'ensemble",
   "*Monter en puissance (plan App Service)"
  ],
  "rows": [
   [
    "*De base B1",
    "Domaines personnalisés · liaisons TLS"
   ]
  ],
  "btn": "Sélectionner"
 },
 "keep": "Domaine + TLS au moindre coût : De base."
},
{
 "id": "D3-240",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document App Service (cliquez sur l'onglet <b>App Service</b>).</p><p>De nouvelles applications doivent être hébergées dans France Central. Quel plan existant convient à chacune, au moindre coût ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "App Service",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Plan</th><th>Système</th><th>Niveau</th><th>Région</th><th>Groupe de ressources</th><th>Redondance de zone</th></tr><tr><td>ASP1</td><td>Windows</td><td>Standard S1 (3 instances)</td><td>France Central</td><td>RG1</td><td>Non</td></tr><tr><td>ASP2</td><td>Linux</td><td>De base B1</td><td>France Central</td><td>RG1</td><td>Non</td></tr><tr><td>ASP3</td><td>Windows</td><td>Gratuit F1</td><td>West Europe</td><td>RG2</td><td>Non</td></tr><tr><td>ASP4</td><td>Windows</td><td>Premium v3 P1v3 (3 instances)</td><td>France Central</td><td>RG1</td><td>Oui</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Application</th><th>Plan</th><th>Emplacements</th></tr><tr><td>App1</td><td>ASP1</td><td>production, staging</td></tr><tr><td>App2</td><td>ASP2</td><td>production</td></tr><tr><td>App3</td><td>ASP3</td><td>production</td></tr><tr><td>App4</td><td>ASP4</td><td>production</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Application Windows avec emplacements et mise à l'échelle automatique :",
   "o": [
    "ASP1",
    "ASP2",
    "ASP4"
   ],
   "a": 0
  },
  {
   "l": "Application Windows qui doit survivre à la perte d'une zone :",
   "o": [
    "ASP1",
    "ASP2",
    "ASP4"
   ],
   "a": 2
  },
  {
   "l": "API Python sous Linux, sans emplacement :",
   "o": [
    "ASP1",
    "ASP2",
    "ASP4"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Emplacements et mise à l'échelle → ASP1 :</b> Standard les propose ; Premium v3 aussi, mais plus cher.</li><li><b>Perte de zone → ASP4 :</b> seul plan redondant interzone (Premium v3, au moins 2 instances).</li><li><b>Linux → ASP2 :</b> seul plan Linux ; De base suffit sans emplacements.</li></ul>",
 "portal": {
  "path": [
   "Applications web",
   "App4"
  ],
  "title": "App4 | Changer de plan App Service",
  "menu": [
   "Vue d'ensemble",
   "Emplacements de déploiement",
   "*Changer de plan App Service"
  ],
  "rows": [
   [
    "*ASP4",
    "Redondant interzone · 3 instances"
   ]
  ]
 },
 "keep": "Standard : emplacements + autoscale. Premium v3 : redondance de zone."
},
{
 "id": "D3-241",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Conteneurs (cliquez sur l'onglet <b>Conteneurs</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Conteneurs",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Ressource</th><th>Type</th><th>Détail</th></tr><tr><td>acr1</td><td>Registre de conteneurs</td><td>De base</td></tr><tr><td>acr2</td><td>Registre de conteneurs</td><td>Premium, géoréplication en West Europe, point de terminaison privé, accès public désactivé</td></tr><tr><td>cg1</td><td>Groupe de conteneurs (ACI)</td><td>Linux, conteneurs web et sidecar, adresse IP publique</td></tr><tr><td>ca1</td><td>Application Container Apps</td><td>Environnement env1, entrée activée, trafic limité à l'environnement</td></tr><tr><td>ca2</td><td>Application Container Apps</td><td>Environnement env1, entrée externe, réplicas minimum 1, maximum 5</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez créer un point de terminaison privé pour acr1.",
   "a": 1
  },
  {
   "l": "Les conteneurs de cg1 peuvent communiquer entre eux par localhost.",
   "a": 0
  },
  {
   "l": "Un client sur Internet peut appeler ca1.",
   "a": 1
  },
  {
   "l": "ca2 peut appeler ca1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>acr1 : Non.</b> Le point de terminaison privé (comme la géoréplication) demande le niveau <b>Premium</b>.</li><li><b>cg1 : Oui.</b> Les conteneurs d'un même groupe partagent l'hôte, le réseau et le cycle de vie : ils se joignent par localhost sur des ports différents.</li><li><b>Internet → ca1 : Non.</b> Entrée limitée à l'environnement : ca1 n'est joignable que depuis env1.</li><li><b>ca2 → ca1 : Oui.</b> ca2 est dans le même environnement env1.</li></ul>",
 "portal": {
  "path": [
   "Container Apps",
   "ca1"
  ],
  "title": "ca1 | Entrée",
  "menu": [
   "Vue d'ensemble",
   "*Entrée",
   "Mise à l'échelle"
  ],
  "rows": [
   [
    "*Trafic d'entrée",
    "Limité à l'environnement Container Apps"
   ]
  ]
 },
 "keep": "ACR Premium : privé et géoréplication. Entrée interne = joignable depuis l'environnement seulement."
},
{
 "id": "D3-242",
 "dom": 3,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Conteneurs (cliquez sur l'onglet <b>Conteneurs</b>).</p><p>ca2 ne doit rien coûter en calcul quand personne ne l'utilise, et monter jusqu'à 5 réplicas selon le nombre de requêtes HTTP.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Conteneurs",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Ressource</th><th>Type</th><th>Détail</th></tr><tr><td>acr1</td><td>Registre de conteneurs</td><td>De base</td></tr><tr><td>acr2</td><td>Registre de conteneurs</td><td>Premium, géoréplication en West Europe, point de terminaison privé, accès public désactivé</td></tr><tr><td>cg1</td><td>Groupe de conteneurs (ACI)</td><td>Linux, conteneurs web et sidecar, adresse IP publique</td></tr><tr><td>ca1</td><td>Application Container Apps</td><td>Environnement env1, entrée activée, trafic limité à l'environnement</td></tr><tr><td>ca2</td><td>Application Container Apps</td><td>Environnement env1, entrée externe, réplicas minimum 1, maximum 5</td></tr></table></div>"
  }
 ],
 "opts": [
  "Régler le nombre minimal de réplicas sur 0",
  "Ajouter une règle de mise à l'échelle HTTP (requêtes simultanées)",
  "Passer l'entrée de ca2 en mode interne à l'environnement",
  "Déplacer ca2 dans un groupe de conteneurs ACI à la demande"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<ul><li><b>Minimum 0 : oui.</b> Avec 0 réplica minimal, l'application descend à zéro sans trafic (pas de facturation du calcul actif).</li><li><b>Règle HTTP : oui.</b> Elle ajoute des réplicas selon les requêtes simultanées, jusqu'au maximum de 5.</li><li>L'entrée interne couperait les clients externes.</li><li>ACI ne fait pas de mise à l'échelle automatique selon les requêtes.</li></ul>",
 "portal": {
  "path": [
   "Container Apps",
   "ca2"
  ],
  "title": "ca2 | Mise à l'échelle",
  "menu": [
   "Vue d'ensemble",
   "Entrée",
   "*Mise à l'échelle"
  ],
  "rows": [
   [
    "*Réplicas",
    "Min 0 · Max 5 · règle HTTP"
   ]
  ]
 },
 "keep": "Container Apps : réplicas minimum 0 = mise à zéro ; règle HTTP pour monter."
},
{
 "id": "D3-243",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Conteneurs (cliquez sur l'onglet <b>Conteneurs</b>).</p><p>Des équipes en Europe du Nord tirent des images de acr1 avec des temps de téléchargement élevés. Elles doivent tirer depuis un réplica proche, avec le même nom de registre.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Conteneurs",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Ressource</th><th>Type</th><th>Détail</th></tr><tr><td>acr1</td><td>Registre de conteneurs</td><td>De base</td></tr><tr><td>acr2</td><td>Registre de conteneurs</td><td>Premium, géoréplication en West Europe, point de terminaison privé, accès public désactivé</td></tr><tr><td>cg1</td><td>Groupe de conteneurs (ACI)</td><td>Linux, conteneurs web et sidecar, adresse IP publique</td></tr><tr><td>ca1</td><td>Application Container Apps</td><td>Environnement env1, entrée activée, trafic limité à l'environnement</td></tr><tr><td>ca2</td><td>Application Container Apps</td><td>Environnement env1, entrée externe, réplicas minimum 1, maximum 5</td></tr></table></div>"
  }
 ],
 "opts": [
  "Passer acr1 en Premium et ajouter une géoréplication",
  "Créer un second registre De base en North Europe",
  "Activer une stratégie de rétention sur acr1",
  "Créer un point de terminaison privé pour acr1 en North Europe"
 ],
 "ans": 0,
 "expl": "<p>La <b>géoréplication</b> (niveau Premium) crée des réplicas régionaux d'un même registre : un seul nom de connexion, et chaque client tire depuis le réplica le plus proche.</p><ul><li>Un second registre aurait un autre nom et demanderait de synchroniser les images.</li><li>La rétention nettoie les manifestes, sans effet sur la latence.</li><li>Un point de terminaison privé ne rapproche pas les données, et demande lui aussi Premium.</li></ul>",
 "portal": {
  "path": [
   "Registres de conteneurs",
   "acr1"
  ],
  "title": "acr1 | Géoréplications",
  "menu": [
   "Vue d'ensemble",
   "*Géoréplications"
  ],
  "rows": [
   [
    "*North Europe",
    "Prêt"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Même nom, réplicas régionaux : géoréplication (Premium)."
},
{
 "id": "D3-244",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Déploiement (cliquez sur l'onglet <b>Déploiement</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Déploiement",
   "h": "<p>Le groupe de ressources <b>RG1</b> contient : VM1, VNet1 (10.0.0.0/16) et le compte de stockage st1. Aucun verrou.</p><p>Le modèle <b>T1</b> déclare : VNet1 (10.0.0.0/16, avec un nouveau sous-réseau Subnet9) et un compte de stockage st2.</p>"
  }
 ],
 "rows": [
  {
   "l": "Si vous déployez T1 en mode Incrémentiel, VM1 existe toujours après le déploiement.",
   "a": 0
  },
  {
   "l": "Si vous déployez T1 en mode Complet, st1 est supprimé.",
   "a": 0
  },
  {
   "l": "En mode Complet, VNet1 est supprimé puis recréé.",
   "a": 1
  },
  {
   "l": "Une opération what-if montre ces changements sans rien déployer.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Incrémentiel : Oui.</b> Les ressources absentes du modèle sont laissées telles quelles.</li><li><b>Complet et st1 : Oui.</b> En mode Complet, les ressources du groupe absentes du modèle sont <b>supprimées</b> (VM1 et st1).</li><li><b>VNet1 recréé : Non.</b> Une ressource présente dans le modèle est mise à jour en place (ajout de Subnet9), pas supprimée.</li><li><b>what-if : Oui.</b> Il prévisualise créations, modifications et suppressions.</li></ul>",
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
    "*T1 · Complet",
    "Supprimés : VM1, st1"
   ]
  ]
 },
 "keep": "Complet = supprime ce qui n'est pas dans le modèle. Toujours un what-if avant."
},
{
 "id": "D3-245",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Déploiement (cliquez sur l'onglet <b>Déploiement</b>).</p><p>Vous devez déployer T1 sans risque de supprimer VM1 ni st1, et ajouter Subnet9 à VNet1 sans toucher à ses sous-réseaux existants.</p><p>Que devez-vous vérifier avant de déployer en mode Incrémentiel ?</p>",
 "docs": [
  {
   "t": "Déploiement",
   "h": "<p>Le groupe de ressources <b>RG1</b> contient : VM1, VNet1 (10.0.0.0/16) et le compte de stockage st1. Aucun verrou.</p><p>Le modèle <b>T1</b> déclare : VNet1 (10.0.0.0/16, avec un nouveau sous-réseau Subnet9) et un compte de stockage st2.</p>"
  }
 ],
 "opts": [
  "Que T1 déclare aussi tous les sous-réseaux existants de VNet1",
  "Que T1 déclare aussi VM1 et st1 avec leurs propriétés",
  "Qu'un verrou Lecture seule est posé sur VNet1",
  "Que T1 utilise le mode Complet sur VNet1 uniquement"
 ],
 "ans": 0,
 "expl": "<p>En mode Incrémentiel, une ressource déclarée est redéployée avec les propriétés du modèle : la propriété <code>subnets</code> de VNet1 est <b>remplacée</b> par la liste du modèle. Si T1 ne liste que Subnet9, Azure tente de retirer les autres sous-réseaux (et échoue si des interfaces les utilisent). Il faut donc déclarer tous les sous-réseaux existants, ou ajouter Subnet9 comme ressource enfant séparée.</p><ul><li>VM1 et st1 ne risquent rien en Incrémentiel.</li><li>Un verrou Lecture seule bloquerait le déploiement.</li><li>Le mode s'applique à tout le déploiement.</li></ul>",
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
    "*T1 · Complet",
    "Supprimés : VM1, st1"
   ]
  ]
 },
 "keep": "Incrémentiel : les propriétés déclarées remplacent l'existant (attention aux tableaux comme subnets)."
},
{
 "id": "D3-246",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Machines virtuelles (cliquez sur l'onglet <b>Machines virtuelles</b>).</p><p>VM5 doit être déplacée en France Central, dans la zone 1, avec ses disques.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Machines virtuelles",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Taille</th><th>Région</th><th>Zone</th><th>Groupe à haute disponibilité</th><th>Disque du système</th></tr><tr><td>VM1</td><td>Standard_D4s_v5</td><td>France Central</td><td>1</td><td>—</td><td>SSD Premium</td></tr><tr><td>VM2</td><td>Standard_D4s_v5</td><td>France Central</td><td>2</td><td>—</td><td>SSD Premium</td></tr><tr><td>VM3</td><td>Standard_D4_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>SSD Standard</td></tr><tr><td>VM4</td><td>Standard_D4s_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>SSD Premium</td></tr><tr><td>VM5</td><td>Standard_B2s</td><td>West Europe</td><td>—</td><td>—</td><td>HDD Standard</td></tr></table></div><p>AS1 : 2 domaines d'erreur, 5 domaines de mise à jour. VM1 et VM2 sont derrière un équilibreur de charge Standard redondant interzone ; VM3 et VM4 derrière un autre.</p>"
  }
 ],
 "opts": [
  "Utiliser Azure Resource Mover vers France Central",
  "Changer la région de VM5 dans ses propriétés",
  "Redéployer VM5 en choisissant la zone 1",
  "Déplacer VM5 dans un groupe de ressources de France Central"
 ],
 "ans": 0,
 "expl": "<p>Une VM ne change pas de région par une simple propriété. <b>Azure Resource Mover</b> (qui s'appuie sur Site Recovery) prépare, réplique et recrée la VM et ses dépendances dans la région cible, en permettant de choisir une zone.</p><ul><li>Redéployer déplace la VM vers un autre hôte de la même région.</li><li>Changer de groupe de ressources ne change pas la région des ressources.</li></ul>",
 "portal": {
  "path": [
   "Azure Resource Mover"
  ],
  "title": "Resource Mover | Entre régions",
  "menu": [
   "Vue d'ensemble",
   "*Entre régions"
  ],
  "rows": [
   [
    "*VM5",
    "West Europe → France Central · zone 1"
   ]
  ],
  "btn": "Préparer"
 },
 "keep": "Changer de région : Resource Mover (ou Site Recovery), pas une propriété."
},
{
 "id": "D3-247",
 "dom": 3,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document App Service (cliquez sur l'onglet <b>App Service</b>).</p><p>App1 doit être déployée sans interruption : la nouvelle version est chauffée avant de recevoir le trafic, puis 10 % des utilisateurs la testent avant tout le monde.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "App Service",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Plan</th><th>Système</th><th>Niveau</th><th>Région</th><th>Groupe de ressources</th><th>Redondance de zone</th></tr><tr><td>ASP1</td><td>Windows</td><td>Standard S1 (3 instances)</td><td>France Central</td><td>RG1</td><td>Non</td></tr><tr><td>ASP2</td><td>Linux</td><td>De base B1</td><td>France Central</td><td>RG1</td><td>Non</td></tr><tr><td>ASP3</td><td>Windows</td><td>Gratuit F1</td><td>West Europe</td><td>RG2</td><td>Non</td></tr><tr><td>ASP4</td><td>Windows</td><td>Premium v3 P1v3 (3 instances)</td><td>France Central</td><td>RG1</td><td>Oui</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Application</th><th>Plan</th><th>Emplacements</th></tr><tr><td>App1</td><td>ASP1</td><td>production, staging</td></tr><tr><td>App2</td><td>ASP2</td><td>production</td></tr><tr><td>App3</td><td>ASP3</td><td>production</td></tr><tr><td>App4</td><td>ASP4</td><td>production</td></tr></table></div>"
  }
 ],
 "opts": [
  "Déployer dans staging, puis permuter avec la production",
  "Router 10 % du trafic vers staging (test en production)",
  "Ajouter une instance à ASP1 avant chaque déploiement",
  "Créer App1-v2 dans ASP2 et changer le DNS à la main"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<ul><li><b>Routage 10 % : oui.</b> Le test en production envoie un pourcentage des utilisateurs vers staging.</li><li><b>Permutation : oui.</b> Staging est chauffé avant la permutation, qui se fait sans interruption.</li><li>Ajouter une instance ne crée pas d'environnement séparé.</li><li>ASP2 est un plan Linux en De base, et un changement de DNS n'est ni progressif ni instantané.</li></ul>",
 "portal": {
  "path": [
   "Applications web",
   "App1"
  ],
  "title": "App1 | Emplacements de déploiement",
  "menu": [
   "Vue d'ensemble",
   "*Emplacements de déploiement"
  ],
  "rows": [
   [
    "production",
    "90 %"
   ],
   [
    "*staging",
    "10 %"
   ]
  ],
  "btn": "Permuter"
 },
 "keep": "Pourcentage d'utilisateurs : routage du trafic. Sans interruption : permutation."
},
{
 "id": "D3-248",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Mise à l'échelle (cliquez sur l'onglet <b>Mise à l'échelle</b>).</p><p>Chaque lundi de 8 h à 10 h, VMSS1 doit compter au moins 8 instances, quel que soit le CPU. Le reste du temps, les règles actuelles s'appliquent.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Mise à l'échelle",
   "h": "<p>Groupe de machines virtuelles identiques <b>VMSS1</b> : minimum 2, maximum 10, par défaut 2 instances. Temps de refroidissement : 5 minutes. Stratégie de mise à niveau : <b>Manuelle</b>. Stratégie de diminution : <b>Par défaut</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle</th><th>Condition</th><th>Action</th></tr><tr><td>Augmenter</td><td>CPU moyen &gt; 75 % sur 10 minutes</td><td>Ajouter 2 instances</td></tr><tr><td>Diminuer</td><td>CPU moyen &lt; 25 % sur 10 minutes</td><td>Retirer 1 instance</td></tr></table></div>"
  }
 ],
 "opts": [
  "Ajouter un profil récurrent le lundi 8 h-10 h, minimum 8",
  "Passer le minimum du profil par défaut à 8 instances",
  "Ajouter une règle d'augmentation de +6 instances le lundi",
  "Réduire le temps de refroidissement à 1 minute le lundi"
 ],
 "ans": 0,
 "expl": "<p>Un <b>profil de mise à l'échelle récurrent</b> (planification hebdomadaire) remplace le profil par défaut pendant sa fenêtre, avec ses propres limites (minimum 8) et éventuellement ses règles. Hors de la fenêtre, le profil par défaut reprend.</p><ul><li>Changer le minimum par défaut imposerait 8 instances tout le temps.</li><li>Une règle se déclenche sur une métrique, pas sur un horaire.</li><li>Le refroidissement ne garantit aucun nombre d'instances.</li></ul>",
 "portal": {
  "path": [
   "Groupes de machines virtuelles identiques",
   "VMSS1"
  ],
  "title": "VMSS1 | Mise à l'échelle",
  "menu": [
   "Vue d'ensemble",
   "Instances",
   "*Mise à l'échelle",
   "Mise à niveau"
  ],
  "rows": [
   [
    "*Limites",
    "Min 2 · Max 10 · Par défaut 2"
   ]
  ]
 },
 "keep": "Besoin horaire connu : profil planifié ou récurrent."
},
{
 "id": "D3-249",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Déploiement (cliquez sur l'onglet <b>Déploiement</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Déploiement",
   "h": "<p>Le groupe de ressources <b>RG1</b> contient : VM1, VNet1 (10.0.0.0/16) et le compte de stockage st1. Aucun verrou.</p><p>Le modèle <b>T1</b> déclare : VNet1 (10.0.0.0/16, avec un nouveau sous-réseau Subnet9) et un compte de stockage st2.</p>"
  }
 ],
 "rows": [
  {
   "l": "Un verrou Suppression impossible sur st1 l'empêche d'être supprimé par un déploiement en mode Complet.",
   "a": 0
  },
  {
   "l": "Le mode Complet est disponible pour les déploiements à l'étendue d'un groupe de ressources.",
   "a": 0
  },
  {
   "l": "Le mode Incrémentiel supprime les sous-ressources que le modèle ne mentionne pas, comme les règles d'un NSG.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Verrou : Oui.</b> Un verrou s'applique à toutes les opérations, y compris celles de Resource Manager : st1 n'est pas supprimé (le déploiement signale l'échec de cette suppression).</li><li><b>Groupe de ressources : Oui.</b> Le mode Complet existe pour les déploiements de groupe de ressources (pas pour ceux d'abonnement ou de groupe d'administration).</li><li><b>Sous-ressources : Non</b> en général : une ressource enfant déployée séparément n'est pas supprimée. Mais si les règles sont déclarées comme <b>propriété</b> du NSG dans le modèle, la liste du modèle remplace la liste existante.</li></ul>",
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
    "*T1 · Complet",
    "Supprimés : VM1, st1"
   ]
  ]
 },
 "keep": "Verrou > mode Complet. Complet : seulement à l'étendue d'un groupe de ressources."
},
{
 "id": "D3-250",
 "dom": 3,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Conteneurs (cliquez sur l'onglet <b>Conteneurs</b>).</p><p>cg1 doit tirer une image de acr2. L'accès public de acr2 est désactivé.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Conteneurs",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Ressource</th><th>Type</th><th>Détail</th></tr><tr><td>acr1</td><td>Registre de conteneurs</td><td>De base</td></tr><tr><td>acr2</td><td>Registre de conteneurs</td><td>Premium, géoréplication en West Europe, point de terminaison privé, accès public désactivé</td></tr><tr><td>cg1</td><td>Groupe de conteneurs (ACI)</td><td>Linux, conteneurs web et sidecar, adresse IP publique</td></tr><tr><td>ca1</td><td>Application Container Apps</td><td>Environnement env1, entrée activée, trafic limité à l'environnement</td></tr><tr><td>ca2</td><td>Application Container Apps</td><td>Environnement env1, entrée externe, réplicas minimum 1, maximum 5</td></tr></table></div>"
  }
 ],
 "opts": [
  "Redéployer cg1 dans un sous-réseau qui atteint le point privé d'acr2",
  "Activer le compte administrateur d'acr2 et garder l'IP publique de cg1",
  "Donner à cg1 le rôle AcrPull sur acr2, sans autre changement",
  "Ajouter l'adresse IP publique de cg1 au pare-feu d'acr2"
 ],
 "ans": 0,
 "expl": "<p>Avec l'accès public désactivé, acr2 n'est joignable que par son <b>point de terminaison privé</b>. cg1 doit donc être déployé dans un sous-réseau délégué d'un réseau virtuel qui atteint ce point de terminaison (et résout le nom privé), avec une identité autorisée à tirer (AcrPull).</p><ul><li>Un identifiant (administrateur ou AcrPull) ne suffit pas sans chemin réseau.</li><li>Les règles IP ne s'appliquent pas quand l'accès public est désactivé ; et une IP d'ACI publique n'est pas fixe.</li></ul>",
 "portal": {
  "path": [
   "Registres de conteneurs",
   "acr2"
  ],
  "title": "acr2 | Mise en réseau",
  "menu": [
   "Vue d'ensemble",
   "*Mise en réseau"
  ],
  "rows": [
   [
    "*Accès public",
    "Désactivé · point de terminaison privé uniquement"
   ]
  ]
 },
 "keep": "Registre privé : il faut un chemin réseau privé ET une identité autorisée."
}
);
