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
 "expl": "10 VM sur <b>5 domaines de mise à jour</b> = 2 par domaine. Azure redémarre un domaine de mise à jour à la fois : <b>2 VM</b>. Les domaines d'erreur concernent les pannes matérielles."
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
 "expl": "3 + 2 = <b>5</b>. 9 + 2 = 11, plafonné au maximum : <b>10</b>. À 2 instances, le minimum est atteint : il reste <b>2</b>."
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
 "expl": "1 VM SSD Premium : <b>99,9 %</b>. Groupe à haute disponibilité (2 VM ou plus) : <b>99,95 %</b>, quel que soit le nombre de VM. Zones (2 VM ou plus) : <b>99,99 %</b>."
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
 "expl": "En mode <b>Complete</b>, le groupe est aligné sur le modèle : ce qui n'y est pas est <b>supprimé</b> (VM2). En mode Incremental (par défaut), VM2 aurait été conservée."
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
 "expl": "<b>Redéployer</b> arrête VM1, la déplace vers un autre nœud du même centre de données, puis la redémarre (le disque temporaire est vidé). <b>Réappliquer</b>, dans le même menu, reste sur le même hôte. Taille change la puissance ; Récupération d'urgence configure Site Recovery vers une autre région."
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
 "expl": "L'ID de ressource contient l'abonnement et le groupe : il <b>change</b>. Déplacer ne change jamais la région (pour cela : Azure Resource Mover)."
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
 "expl": "<code>az bicep decompile</code> convertit un ARM JSON en Bicep. <code>az bicep build</code> fait l'inverse ; <code>az deployment group create</code> déploie."
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
 "expl": "La <b>géoréplication</b> d'un registre n'existe qu'en <b>Premium</b>."
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
 "expl": "Les enregistrements <b>TXT</b> (asuid) et <b>CNAME</b> prouvent la propriété du domaine : ils doivent exister avant d'ajouter le domaine. Le certificat managé se crée pour un domaine déjà validé, puis on le lie. Le niveau Gratuit ne prend pas en charge les domaines personnalisés ; MX sert au courrier."
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
 "expl": "<b>Publier : Conteneur</b> pour une image Docker (la pile d'exécution n'est demandée que pour du code). <b>Linux</b> pour une image Linux. Scale-out automatique et emplacements de déploiement : à partir de <b>Standard</b>, le moins cher qui les propose."
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
 "expl": "Le <b>chiffrement sur l'hôte</b> couvre le disque temporaire et les caches, sans agent. Il faut d'abord <b>enregistrer la fonctionnalité</b> sur l'abonnement. Azure Disk Encryption chiffre dans l'OS (BitLocker)."
}
);
