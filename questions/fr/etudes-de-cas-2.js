/* Études de cas (lot 2 : C002 à C004) */
AZ.cases.push(
{
 "id": "C002",
 "title": "Litware",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Litware est un cabinet d'études de 400 employés, avec un siège à Paris et une agence à Nantes. Le cabinet utilise Microsoft 365 et a commencé à déplacer ses applications vers Azure il y a un an.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Identités</b></p><p>Le locataire Microsoft Entra litware.com dispose de licences Microsoft Entra ID P1. Les comptes sont créés dans le cloud (aucun Active Directory local). L'attribut Service (department) de chaque utilisateur est renseigné.</p><p><b>Azure</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Ressource</th><th>Détails</th></tr><tr><td>Abonnement Sub-Litware</td><td>Groupes de ressources RG-Etudes, RG-Web et RG-Shared</td></tr><tr><td>stlitwaredata</td><td>Compte de stockage universel v2, LRS, France Central, conteneur rapports</td></tr><tr><td>VNet-Litware</td><td>10.10.0.0/16, France Central, sous-réseaux Subnet-Web (10.10.1.0/24) et Subnet-Data (10.10.2.0/24)</td></tr><tr><td>WebApp-Portail</td><td>Application web, plan App Service De base B1</td></tr></table></div>"
  },
  {
   "t": "Exigences",
   "h": "<p><b>Exigences techniques</b></p><ul><li>Tous les utilisateurs dont le service est Études doivent être membres d'un groupe nommé GRP-Etudes, automatiquement.</li><li>Les membres de GRP-Etudes doivent lire les blobs du conteneur rapports avec leur compte Entra, sans pouvoir les modifier.</li><li>Les consultants externes du partenaire contoso.com doivent pouvoir être invités, et aucun autre domaine externe.</li><li>WebApp-Portail doit permettre de tester une nouvelle version sur une URL distincte avant la mise en production.</li><li>Seules les VM de Subnet-Data doivent pouvoir accéder à stlitwaredata ; le compte doit garder son adresse publique.</li><li>Les données de stlitwaredata doivent survivre à la panne d'un centre de données de la région.</li></ul><p><b>Contraintes</b></p><ul><li>Toutes les solutions doivent respecter le principe du privilège minimum et réduire les coûts.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C002-1",
   "dom": 1,
   "type": "hot",
   "stem": "<p>Vous devez répondre à l'exigence concernant GRP-Etudes.</p><p>Comment devez-vous configurer le groupe ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
   "rows": [
    {
     "l": "Type d'appartenance :",
     "o": [
      "Appareil dynamique",
      "Utilisateur dynamique",
      "Attribué"
     ],
     "a": 1
    },
    {
     "l": "Règle :",
     "o": [
      "(user.department -eq \"Études\")",
      "(device.department -eq \"Études\")",
      "(user.jobTitle -eq \"Études\")"
     ],
     "a": 0
    }
   ],
   "expl": "<p>Un groupe à appartenance <b>Utilisateur dynamique</b> (disponible avec la licence P1 de Litware) avec la règle <code>(user.department -eq \"Études\")</code> ajoute et retire automatiquement les membres selon l'attribut Service.</p>",
   "portal": {
    "path": [
     "Groupes",
     "Nouveau groupe"
    ],
    "title": "Nouveau groupe",
    "rows": [
     [
      "*Type d'appartenance",
      "Utilisateur dynamique"
     ],
     [
      "Requête dynamique",
      "(user.department -eq \"Études\")"
     ]
    ],
    "btn": "Créer"
   },
   "keep": "Appartenance automatique selon un attribut = groupe Utilisateur dynamique (P1)."
  },
  {
   "id": "C002-2",
   "dom": 2,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences suivantes. Que devez-vous configurer pour chacune ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Accès de GRP-Etudes au conteneur rapports :",
     "o": [
      "Lecteur à GRP-Etudes sur stlitwaredata",
      "Lecteur des données blob sur le conteneur rapports",
      "Contributeur aux données blob sur stlitwaredata",
      "Une SAS de compte en lecture pour GRP-Etudes"
     ],
     "a": 1
    },
    {
     "l": "Résilience de stlitwaredata, au coût le plus bas :",
     "o": [
      "ZRS",
      "RA-GZRS",
      "GRS",
      "LRS"
     ],
     "a": 0
    }
   ],
   "expl": "<p><b>1. Accès de GRP-Etudes au conteneur rapports :</b></p><p><b>Lecteur des données blob du stockage</b> donne la lecture des données avec l'identité Entra ; l'étendue <b>conteneur</b> limite l'accès à rapports. Lecteur ne donne pas accès aux données ; Contributeur aux données permet d'écrire ; une SAS n'utilise pas le compte Entra.</p><p><b>2. Résilience de stlitwaredata, au coût le plus bas :</b></p><p><b>ZRS</b> réplique les données dans trois zones de disponibilité de la région : il survit à la panne d'un centre de données. GRS ne protège pas contre la perte d'un centre de données dans la région primaire (LRS dans un seul centre), et RA-GZRS coûte plus cher que nécessaire.</p>",
   "portal": {
    "path": [
     "Comptes de stockage",
     "stlitwaredata",
     "rapports"
    ],
    "title": "rapports | Contrôle d'accès (IAM)",
    "rows": [
     [
      "*Rôle",
      "Lecteur des données blob du stockage"
     ],
     [
      "Membres",
      "GRP-Etudes"
     ],
     [
      "Étendue",
      "Conteneur rapports"
     ]
    ],
    "btn": "Vérifier + attribuer"
   },
   "keep": "Lire des blobs avec Entra = Lecteur des données blob, à l'étendue du conteneur. Survivre à un centre de données, au moindre coût = ZRS."
  },
  {
   "id": "C002-3",
   "dom": 1,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences suivantes. Que devez-vous configurer pour chacune ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Consultants externes :",
     "o": [
      "Une unité administrative contoso.com",
      "Les restrictions d'accès des utilisateurs invités",
      "Collaboration limitée à contoso.com",
      "Un domaine personnalisé contoso.com"
     ],
     "a": 2
    },
    {
     "l": "Accès réseau à stlitwaredata :",
     "o": [
      "Un NSG sur Subnet-Web qui bloque l'étiquette Storage en sortie",
      "Une passerelle NAT sur Subnet-Data, autorisée dans le pare-feu du compte",
      "Un point de terminaison privé dans Subnet-Data et l'accès public désactivé",
      "Un point de terminaison de service sur Subnet-Data et une règle de VNet"
     ],
     "a": 3
    }
   ],
   "expl": "<p><b>1. Consultants externes :</b></p><p>Les <b>restrictions de collaboration</b> des paramètres de collaboration externe permettent de n'autoriser les invitations que vers une liste de domaines. Les restrictions d'accès des invités définissent ce que voient les invités. contoso.com appartient à un autre organisme : on ne peut pas l'ajouter comme domaine personnalisé.</p><p><b>2. Accès réseau à stlitwaredata :</b></p><p>L'exigence demande de <b>garder l'adresse publique</b> : le <b>point de terminaison de service</b> avec une règle de réseau virtuel répond au besoin, gratuitement. Un point de terminaison privé fonctionnerait techniquement, mais il implique de désactiver l'accès public dans cette option et coûte plus cher.</p>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Identités externes"
    ],
    "title": "Paramètres de collaboration externe",
    "rows": [
     [
      "*Restrictions de collaboration",
      "Autoriser uniquement les domaines spécifiés"
     ],
     [
      "Domaines",
      "contoso.com"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Limiter les domaines invités = restrictions de collaboration. Limiter à un sous-réseau en gardant l'IP publique = point de terminaison de service + règle de réseau virtuel."
  },
  {
   "id": "C002-4",
   "dom": 3,
   "type": "yngrid",
   "stem": "<p>Vous devez répondre à l'exigence de test de WebApp-Portail.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle fait partie de la solution. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Créer une seconde application dans un plan De base",
     "a": 1
    },
    {
     "l": "Passer le plan App Service en Standard",
     "a": 0
    },
    {
     "l": "Créer un emplacement de déploiement test",
     "a": 0
    },
    {
     "l": "Activer la mise à l'échelle automatique du plan",
     "a": 1
    }
   ],
   "expl": "<p>Les <b>emplacements de déploiement</b> exigent le niveau <b>Standard</b> ou plus. L'emplacement test a sa propre URL, et une permutation met la version testée en production. Une seconde application fonctionnerait mais sans permutation, et la mise à l'échelle n'a pas de rapport.</p>",
   "portal": {
    "path": [
     "App Services",
     "WebApp-Portail"
    ],
    "title": "Emplacements de déploiement",
    "rows": [
     [
      "*Plan",
      "Standard S1 (requis)"
     ],
     [
      "*Emplacement",
      "test · URL distincte"
     ]
    ],
    "btn": "+ Ajouter un emplacement"
   },
   "keep": "Tester avant prod = emplacement de déploiement (Standard+) puis permutation."
  }
 ]
},
{
 "id": "C003",
 "title": "Tailwind Traders",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Tailwind Traders est une enseigne de magasins de bricolage avec une boutique en ligne. L'activité connaît de forts pics le samedi et pendant les soldes.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Azure</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Ressource</th><th>Détails</th></tr><tr><td>VMSS-Shop</td><td>Groupe de machines virtuelles identiques Linux, 2 instances, France Central, sans zone, derrière LB-Shop (équilibreur public Standard)</td></tr><tr><td>VM-ERP</td><td>VM Windows Server, SQL Server, disque de données SSD Premium, France Central</td></tr><tr><td>Vault-Tailwind</td><td>Coffre Recovery Services, France Central, GRS, sans élément protégé</td></tr><tr><td>WS-Tailwind</td><td>Espace de travail Log Analytics, France Central</td></tr><tr><td>ACR-Tailwind</td><td>Registre de conteneurs, niveau De base</td></tr></table></div>"
  },
  {
   "t": "Exigences",
   "h": "<p><b>Exigences techniques</b></p><ul><li>VMSS-Shop doit avoir entre 2 et 10 instances selon la charge CPU, et 6 instances chaque samedi de 8 h à 20 h.</li><li>VM-ERP doit être sauvegardée chaque jour, avec une rétention de 30 jours. Les sauvegardes doivent pouvoir être restaurées dans la région jumelée.</li><li>En cas de panne de France Central, VM-ERP doit redémarrer dans une autre région en moins d'une heure, avec moins de 15 minutes de données perdues.</li><li>Les équipes doivent être prévenues par SMS si le CPU de VM-ERP dépasse 90 % pendant 10 minutes.</li><li>Les images de conteneurs doivent être répliquées dans la région West Europe.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C003-1",
   "dom": 3,
   "type": "hot",
   "stem": "<p>Vous devez répondre à l'exigence de mise à l'échelle de VMSS-Shop.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
   "rows": [
    {
     "l": "Profil par défaut :",
     "o": [
      "Minimum 6, maximum 6",
      "Minimum 2, maximum 10, règles sur le CPU",
      "Minimum 0, maximum 10"
     ],
     "a": 1
    },
    {
     "l": "Pour le samedi :",
     "o": [
      "Une stratégie de mise à niveau Rolling",
      "Un profil planifié récurrent avec 6 instances",
      "Une règle CPU plus basse"
     ],
     "a": 1
    }
   ],
   "expl": "<p>Le profil par défaut fixe les limites (2 à 10) avec des règles d'augmentation et de diminution sur le CPU. Un <b>profil planifié récurrent</b> (chaque samedi de 8 h à 20 h) fixe 6 instances.</p>",
   "portal": {
    "path": [
     "Groupes identiques de machines virtuelles",
     "VMSS-Shop"
    ],
    "title": "Mise à l'échelle",
    "rows": [
     [
      "Profil par défaut",
      "Min 2 · Max 10 · règles CPU"
     ],
     [
      "*Profil Samedi",
      "Récurrent · 8 h-20 h · 6 instances"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Charge variable = règles ; horaires connus = profil planifié."
  },
  {
   "id": "C003-2",
   "dom": 5,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences suivantes. Que devez-vous configurer pour chacune ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Sauvegarde de VM-ERP, dans Vault-Tailwind :",
     "o": [
      "Passer le coffre en LRS, puis protéger VM-ERP",
      "Restauration interrégion, puis stratégie de 30 jours",
      "Configurer uniquement Azure Site Recovery pour VM-ERP",
      "Créer un coffre de sauvegarde (Backup vault) en West Europe"
     ],
     "a": 1
    },
    {
     "l": "Reprise de VM-ERP en cas de panne régionale :",
     "o": [
      "Uniquement la sauvegarde avec restauration interrégion",
      "Une zone de disponibilité pour VM-ERP, avec un disque ZRS",
      "Site Recovery vers une autre région (coffre cible)",
      "Un groupe à haute disponibilité pour VM-ERP"
     ],
     "a": 2
    }
   ],
   "expl": "<p><b>1. Sauvegarde de VM-ERP, dans Vault-Tailwind :</b></p><p>Le coffre est déjà en <b>GRS</b> et dans la même région que VM-ERP. Il suffit d'activer la <b>restauration interrégion</b> (pour restaurer dans la région jumelée) et de protéger la VM avec une stratégie quotidienne de 30 jours. Passer en LRS empêcherait la restauration interrégion.</p><p><b>2. Reprise de VM-ERP en cas de panne régionale :</b></p><p>Un RPO de 15 minutes et un RTO d'une heure exigent une <b>réplication continue</b> : <b>Azure Site Recovery</b>, avec un coffre dans la région cible. La sauvegarde quotidienne a un RPO de 24 heures. Les zones et groupes à haute disponibilité ne protègent pas contre la perte de la région.</p>",
   "portal": {
    "path": [
     "Coffres Recovery Services",
     "Vault-Tailwind"
    ],
    "title": "Configuration de la sauvegarde",
    "rows": [
     [
      "Redondance",
      "Géoredondant"
     ],
     [
      "*Restauration interrégion",
      "Activée"
     ]
    ],
    "btn": "Enregistrer"
   },
   "keep": "Restaurer dans la région jumelée = GRS + restauration interrégion. RPO de minutes + autre région = Site Recovery."
  },
  {
   "id": "C003-4",
   "dom": 5,
   "type": "order",
   "stem": "<p>Vous devez répondre à l'exigence d'alerte sur le CPU de VM-ERP.</p><p>Quelles trois actions devez-vous effectuer dans l'ordre ?</p><p>Pour répondre, déplacez les actions appropriées de la liste vers la zone de réponse et placez-les dans le bon ordre.</p>",
   "acts": [
    "Créer un groupe d'actions avec une notification SMS",
    "Créer une règle d'alerte de métrique Percentage CPU, moyenne, supérieur à 90, sur 10 minutes",
    "Associer le groupe d'actions à la règle d'alerte",
    "Créer une alerte de journal d'activité",
    "Créer un paramètre de diagnostic vers WS-Tailwind"
   ],
   "seq": [
    0,
    1,
    2
   ],
   "expl": "<p>Le CPU est une <b>métrique de plateforme</b> : une <b>alerte de métrique</b> suffit, sans paramètre de diagnostic. Le <b>groupe d'actions</b> porte la notification SMS.</p>",
   "portal": {
    "path": [
     "Machines virtuelles",
     "VM-ERP"
    ],
    "title": "Créer une règle d'alerte",
    "rows": [
     [
      "*Condition",
      "Moyenne CPU > 90 · 10 min"
     ],
     [
      "Actions",
      "Groupe d'actions · SMS"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "Seuil CPU = alerte de métrique + groupe d'actions."
  },
  {
   "id": "C003-5",
   "dom": 3,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence de réplication des images de conteneurs.</p><p>Que devez-vous faire ?</p>",
   "opts": [
    "Activer une stratégie de rétention sur ACR-Tailwind",
    "Créer un second registre De base en West Europe",
    "Activer le compte administrateur du registre",
    "ACR-Tailwind en Premium, géoréplication West Europe"
   ],
   "ans": 3,
   "expl": "<p>La <b>géoréplication</b> n'est disponible qu'au niveau <b>Premium</b>. Un second registre indépendant obligerait à pousser les images deux fois.</p>",
   "portal": {
    "path": [
     "Registres de conteneurs",
     "ACR-Tailwind"
    ],
    "title": "Géoréplications",
    "rows": [
     [
      "*Niveau",
      "Premium (requis)"
     ],
     [
      "Réplica",
      "West Europe"
     ]
    ],
    "btn": "+ Ajouter"
   },
   "keep": "Géoréplication ACR = Premium."
  },
  {
   "id": "C003-6",
   "dom": 3,
   "type": "yngrid",
   "stem": "<p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
   "rows": [
    {
     "l": "Vous pouvez répartir les instances existantes de VMSS-Shop sur plusieurs zones en modifiant une propriété, sans recréer le groupe.",
     "a": 1
    },
    {
     "l": "Les instances de VMSS-Shop reçoivent du trafic seulement si un NSG l'autorise.",
     "a": 0
    },
    {
     "l": "Vault-Tailwind peut aussi être utilisé pour Azure Site Recovery de VM-ERP vers une autre région.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Zones : Non.</b> Les zones se choisissent à la création du groupe identique.</li><li><b>NSG : Oui.</b> LB-Shop est un équilibreur Standard : le trafic entrant est refusé sans NSG qui l'autorise.</li><li><b>Site Recovery : Non.</b> Vault-Tailwind est dans la région source ; pour Site Recovery, le coffre doit être dans une autre région que la source.</li></ul>",
   "portal": {
    "path": [
     "Groupes identiques de machines virtuelles",
     "VMSS-Shop"
    ],
    "title": "Vue d'ensemble",
    "rows": [
     [
      "*Zones",
      "Choisies à la création"
     ],
     [
      "LB-Shop",
      "Standard (NSG requis)"
     ]
    ]
   },
   "keep": "Zones à la création ; LB Standard fermé sans NSG ; coffre ASR hors région source."
  }
 ]
},
{
 "id": "C004",
 "title": "Northwind",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Northwind est un distributeur alimentaire avec un centre de données à Lille, relié à Azure. L'entreprise centralise la sécurité réseau et veut limiter les accès d'administration.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Réseau</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Réseau</th><th>Espace d'adressage</th><th>Contenu</th></tr><tr><td>VNet-Hub (France Central)</td><td>10.0.0.0/16</td><td>GatewaySubnet, AzureFirewallSubnet ; passerelle VPN VPN-GW1 reliée à Lille ; Pare-feu Azure FW1 (10.0.1.4)</td></tr><tr><td>VNet-App (France Central)</td><td>10.1.0.0/16</td><td>Subnet-Front, Subnet-Back ; VM-WEB1, VM-WEB2, VM-API1</td></tr><tr><td>VNet-Data (West Europe)</td><td>10.2.0.0/16</td><td>Subnet-SQL ; VM-SQL2</td></tr><tr><td>Site de Lille</td><td>192.168.0.0/16</td><td>Serveurs locaux, DNS local</td></tr></table></div><p>VNet-App et VNet-Data sont appairés à VNet-Hub. Aucune table de routage n'existe. Les VM ont des adresses IP publiques.</p>"
  },
  {
   "t": "Exigences",
   "h": "<p><b>Exigences techniques</b></p><ul><li>Les VM de VNet-App et VNet-Data doivent joindre le site de Lille par VPN-GW1.</li><li>Tout le trafic entre VNet-App et VNet-Data doit passer par FW1.</li><li>Les administrateurs doivent se connecter en RDP et SSH aux VM depuis le portail, sans adresse IP publique sur les VM.</li><li>VM-WEB1 et VM-WEB2 doivent recevoir le trafic HTTPS d'Internet avec un WAF.</li><li>Les VM doivent résoudre les noms des autres VM sous le suffixe northwind.internal.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C004-1",
   "dom": 4,
   "type": "hot",
   "stem": "<p>Vous devez répondre à l'exigence d'accès au site de Lille depuis VNet-App.</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
   "rows": [
    {
     "l": "Sur l'appairage VNet-Hub → VNet-App :",
     "o": [
      "Autoriser l'accès uniquement",
      "Utiliser la passerelle distante",
      "Autoriser le transit de passerelle"
     ],
     "a": 2
    },
    {
     "l": "Sur l'appairage VNet-App → VNet-Hub :",
     "o": [
      "Utiliser la passerelle distante",
      "Autoriser le transit de passerelle",
      "Autoriser l'accès uniquement"
     ],
     "a": 0
    }
   ],
   "expl": "<p>Le hub, qui possède VPN-GW1, <b>autorise le transit de passerelle</b> ; le spoke <b>utilise la passerelle distante</b>. Le site de Lille doit aussi connaître la plage 10.1.0.0/16 (BGP ou configuration du périphérique local).</p>",
   "portal": {
    "path": [
     "Réseaux virtuels",
     "VNet-Hub"
    ],
    "title": "Peerings",
    "rows": [
     [
      "*Hub → App",
      "Transit de passerelle"
     ],
     [
      "*App → Hub",
      "Passerelle distante"
     ]
    ]
   },
   "keep": "Hub = transit ; spoke = passerelle distante."
  },
  {
   "id": "C004-2",
   "dom": 4,
   "type": "hot",
   "stem": "<p>Vous devez répondre aux exigences suivantes. Que devez-vous configurer pour chacune ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Passage par FW1 entre VNet-App et VNet-Data, dans VNet-App :",
     "o": [
      "Une table de routage 10.2.0.0/16 → 10.0.1.4 sur les sous-réseaux",
      "Un appairage direct entre VNet-App et VNet-Data, sans le hub",
      "Une passerelle NAT dans VNet-App, devant le pare-feu FW1",
      "Un NSG qui n'autorise 10.2.0.0/16 qu'à travers FW1"
     ],
     "a": 0
    },
    {
     "l": "Résolution de noms :",
     "o": [
      "Un fichier hosts tenu à jour sur chaque VM des deux réseaux",
      "Une zone DNS publique northwind.internal, avec délégation",
      "Une zone privée northwind.internal liée aux deux VNets (auto)",
      "Un enregistrement CNAME par VM dans une zone Azure DNS publique"
     ],
     "a": 2
    }
   ],
   "expl": "<p><b>1. Passage par FW1 entre VNet-App et VNet-Data, dans VNet-App :</b></p><p>Un <b>itinéraire défini par l'utilisateur</b> envoie le trafic destiné à VNet-Data vers FW1 (même chose dans VNet-Data vers 10.1.0.0/16), avec les règles correspondantes dans FW1. Un appairage direct contournerait le pare-feu.</p><p><b>2. Résolution de noms :</b></p><p>Une <b>zone DNS privée</b> liée aux réseaux, avec l'<b>inscription automatique</b>, crée et tient à jour les enregistrements des VM. Une zone privée est mondiale : elle peut être liée à des réseaux de France Central et de West Europe.</p>",
   "portal": {
    "path": [
     "Tables de routage",
     "RT-App"
    ],
    "title": "Itinéraires",
    "rows": [
     [
      "*10.2.0.0/16",
      "Appliance virtuelle · 10.0.1.4"
     ]
    ]
   },
   "keep": "Forcer le passage par le pare-feu = UDR vers son IP privée. Noms internes entre VNets = zone privée liée avec inscription automatique."
  },
  {
   "id": "C004-3",
   "dom": 4,
   "type": "yngrid",
   "stem": "<p>Vous devez répondre à l'exigence d'administration des VM.</p><p>Pour chacune des actions suivantes, sélectionnez Oui si elle fait partie de la solution. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
   "rows": [
    {
     "l": "Créer une passerelle NAT dans VNet-Hub",
     "a": 1
    },
    {
     "l": "Déployer Azure Bastion dans VNet-Hub",
     "a": 0
    },
    {
     "l": "Supprimer les adresses IP publiques des VM",
     "a": 0
    },
    {
     "l": "Ouvrir le port 3389 depuis Internet dans les NSG",
     "a": 1
    }
   ],
   "expl": "<p><b>Bastion</b> dans le hub sert aussi les réseaux appairés. On <b>supprime les adresses publiques</b> des VM, inutiles avec Bastion. Ouvrir 3389 sur Internet est l'inverse du besoin.</p>",
   "portal": {
    "path": [
     "Bastions",
     "Créer"
    ],
    "title": "Créer un Bastion",
    "rows": [
     [
      "*Sous-réseau",
      "VNet-Hub / AzureBastionSubnet"
     ],
     [
      "VM",
      "Adresses publiques supprimées"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "Bastion dans le hub + VM sans IP publique."
  },
  {
   "id": "C004-4",
   "dom": 4,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence de publication de VM-WEB1 et VM-WEB2.</p><p>Que devez-vous déployer ?</p>",
   "opts": [
    "Un équilibreur de charge public Standard dans VNet-App",
    "Application Gateway v2 avec WAF, sous-réseau dédié",
    "Une passerelle NAT et un NSG sur le sous-réseau web",
    "Traffic Manager avec deux points de terminaison externes"
   ],
   "ans": 1,
   "expl": "<p>Un <b>WAF</b> exige un service de couche 7 : <b>Application Gateway</b> (niveau WAF v2) dans un sous-réseau dédié, avec VM-WEB1 et VM-WEB2 dans le pool. Un équilibreur de charge et Traffic Manager n'ont pas de WAF.</p>",
   "portal": {
    "path": [
     "Passerelles d'application",
     "Créer"
    ],
    "title": "Créer une passerelle d'application",
    "rows": [
     [
      "*Niveau",
      "WAF V2"
     ],
     [
      "Sous-réseau",
      "VNet-App / snet-appgw (dédié)"
     ],
     [
      "Pool",
      "VM-WEB1, VM-WEB2"
     ]
    ],
    "btn": "Vérifier + créer"
   },
   "keep": "HTTPS + WAF régional = Application Gateway WAF v2."
  },
  {
   "id": "C004-6",
   "dom": 4,
   "type": "yngrid",
   "stem": "<p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p>",
   "rows": [
    {
     "l": "Avant toute modification, VM-API1 (VNet-App) peut joindre VM-SQL2 (VNet-Data).",
     "a": 1
    },
    {
     "l": "L'appairage entre VNet-Hub et VNet-Data est un appairage mondial.",
     "a": 0
    },
    {
     "l": "Le Bastion de VNet-Hub peut servir les VM de VNet-Data.",
     "a": 0
    }
   ],
   "expl": "<ul><li><b>VM-API1 → VM-SQL2 : Non.</b> Les deux spokes ne sont appairés qu'au hub, et aucun routage par FW1 n'existe encore : l'appairage n'est pas transitif.</li><li><b>Mondial : Oui</b>, France Central et West Europe.</li><li><b>Bastion : Oui</b>, il prend en charge les réseaux appairés, y compris par appairage mondial.</li></ul>",
   "portal": {
    "path": [
     "Réseaux virtuels",
     "VNet-Hub"
    ],
    "title": "Peerings",
    "rows": [
     [
      "VNet-App",
      "Connecté"
     ],
     [
      "*VNet-Data",
      "Connecté · mondial"
     ]
    ]
   },
   "keep": "Pas de transitivité ; appairage interrégion = mondial ; Bastion sert les réseaux appairés."
  }
 ]
}
);
