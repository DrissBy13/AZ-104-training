/* Domaine 1 : identités et gouvernance (lot J : D1-421 à D1-430, scénarios longs) */
AZ.questions.push(
{
 "id": "D1-421",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso attribue ses licences par groupe dans Microsoft Entra ID. Le tableau suivant présente les groupes concernés :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Groupe</th><th>Licence attribuée</th><th>Membres</th></tr><tr><td>LIC-E3</td><td>Microsoft 365 E3 (toutes les options)</td><td>Tous les employés (2 000)</td></tr><tr><td>LIC-E5Sec</td><td>Microsoft 365 E5 Security</td><td>Équipe sécurité (40)</td></tr><tr><td>LIC-Visio</td><td>Visio Plan 2</td><td>Bureau d'études (60)</td></tr></table></div><p>Constats :</p><ul><li>15 utilisateurs de LIC-E3 sont en erreur « Plans de service en conflit » parce qu'ils ont aussi reçu directement une licence Office 365 E1 il y a deux ans ;</li><li>il ne reste que 50 licences Visio Plan 2 disponibles ;</li><li>la responsable financière veut retirer l'option Yammer (Viva Engage) de la licence E3 pour tout le monde ;</li><li>un utilisateur de LIC-E3 doit garder sa licence E3 attribuée directement, sans passer par le groupe.</li></ul><p>Qu'est-ce qui est vrai, et que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Conflit E1 / E3 :",
   "o": [
    "Retirer la licence E1 directe",
    "Attendre le retraitement automatique",
    "Ajouter E1 au groupe LIC-E3",
    "Retirer ces 15 utilisateurs de LIC-E3"
   ],
   "a": 0
  },
  {
   "l": "Visio (60 membres, 50 licences) :",
   "o": [
    "Les 50 premiers par ordre alphabétique",
    "10 membres en erreur, sans licence",
    "L'attribution échoue pour tout le groupe",
    "Les 60 reçoivent une licence en dépassement"
   ],
   "a": 1
  },
  {
   "l": "Retirer Yammer pour tous :",
   "o": [
    "Supprimer l'application Yammer de l'annuaire",
    "Retirer la licence E3 puis la réattribuer",
    "Créer une stratégie Azure",
    "Désactiver l'option dans l'attribution du groupe"
   ],
   "a": 3
  },
  {
   "l": "Licence directe conservée :",
   "o": [
    "Remplacée par la licence du groupe au prochain cycle",
    "Coexiste avec celle du groupe",
    "Bloquée",
    "Supprimée automatiquement après le retraitement"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Conflits.</b> Certains plans de service ne peuvent pas être attribués ensemble (par exemple Exchange Online dans E1 et E3). Il faut retirer la licence directe en conflit ou désactiver le plan en double, puis l'attribution est retraitée.<b>Licences insuffisantes.</b> Les membres pour lesquels aucune licence n'est disponible passent en erreur ; les autres la reçoivent.<b>Options.</b> Les plans de service peuvent être désactivés dans l'attribution de licence du groupe ; tous les membres sont mis à jour.<b>Direct et groupe.</b> Une licence peut être attribuée à la fois directement et par un groupe ; l'utilisateur ne consomme qu'une licence pour le même produit.",
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
    "*Conflit E1 / E3",
    "Retirer la licence E1 directe"
   ],
   [
    "Visio (60 membres, 50 licences)",
    "10 membres en erreur, sans licence"
   ],
   [
    "Retirer Yammer pour tous",
    "Désactiver l'option dans l'attribution du groupe"
   ],
   [
    "Licence directe conservée",
    "Coexiste avec celle du groupe"
   ]
  ]
 },
 "keep": "Conflit = retirer la licence en double. Pas assez de licences = erreur par membre. Option désactivée dans le groupe. Direct + groupe = une seule licence."
},
{
 "id": "D1-422",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam et son partenaire Northwind ont chacun leur locataire Microsoft Entra ID. Ils veulent :</p><ul><li>que les employés de Northwind puissent participer à des canaux partagés Teams de Fabrikam, sans compte invité dans le locataire Fabrikam ;</li><li>que d'autres employés de Northwind accèdent à l'application RH de Fabrikam avec un compte invité B2B classique ;</li><li>que les appareils conformes de Northwind (gérés par Intune chez Northwind) soient reconnus par les stratégies d'accès conditionnel de Fabrikam ;</li><li>que les utilisateurs de Fabrikam ne puissent pas être invités dans d'autres locataires que celui de Northwind.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Canaux partagés sans compte invité :",
   "o": [
    "Synchronisation interlocataire",
    "B2B Collaboration",
    "Microsoft Entra External ID pour les clients",
    "B2B Direct Connect"
   ],
   "a": 3
  },
  {
   "l": "Application RH :",
   "o": [
    "B2B Direct Connect",
    "Une fédération SAML directe",
    "B2B Collaboration (compte invité)",
    "Un compte membre créé à la main"
   ],
   "a": 2
  },
  {
   "l": "Appareils conformes de Northwind :",
   "o": [
    "Inscrire les appareils de Northwind dans Fabrikam",
    "Créer un groupe dynamique pour les appareils partenaires",
    "Approuver les appareils conformes",
    "Exclure Northwind"
   ],
   "a": 2
  },
  {
   "l": "Limiter les invitations sortantes :",
   "o": [
    "Sortant : bloquer, sauf Northwind",
    "Une stratégie Azure Deny sur le groupe racine",
    "Une stratégie d'accès conditionnel",
    "Restrictions de collaboration externe (liste d'autorisation)"
   ],
   "a": 0
  }
 ],
 "expl": "<b>B2B Direct Connect.</b> Relation de confiance mutuelle entre deux locataires, utilisée pour les canaux partagés Teams : pas d'objet invité dans le locataire de ressources.<b>B2B Collaboration.</b> L'utilisateur externe est représenté par un compte invité dans le locataire de ressources.<b>Paramètres entrants.</b> Ils permettent d'approuver la MFA, les appareils conformes et les appareils joints hybrides du locataire d'origine.<b>Paramètres sortants.</b> Ils contrôlent l'accès de vos utilisateurs aux autres organisations : on peut bloquer par défaut et autoriser une organisation précise.",
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
    "*Canaux partagés sans compte invité",
    "B2B Direct Connect"
   ],
   [
    "Application RH",
    "B2B Collaboration (compte invité)"
   ],
   [
    "Appareils conformes de Northwind",
    "Approuver les appareils conformes"
   ],
   [
    "Limiter les invitations sortantes",
    "Sortant : bloquer, sauf Northwind"
   ]
  ]
 },
 "keep": "Sans invité = Direct Connect. Invité = Collaboration. Appareils du partenaire = approbation entrante. Vos utilisateurs = paramètres sortants."
},
{
 "id": "D1-423",
 "dom": 1,
 "type": "hot",
 "stem": "<p>L'abonnement Prod de Contoso approche des limites d'attributions de rôles. L'audit montre :</p><ul><li>3 800 attributions de rôles dans l'abonnement, dont la plupart attribuent le rôle Reader à des utilisateurs individuels ;</li><li>200 développeurs ont chacun Contributor sur leur propre groupe de ressources ;</li><li>l'équipe veut réduire le nombre d'attributions sans changer les droits effectifs ;</li><li>un script tente de créer la 4 001e attribution dans l'abonnement et échoue.</li></ul><p>Que devez-vous recommander, et qu'explique l'échec ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Attributions Reader individuelles :",
   "o": [
    "Un groupe, une attribution",
    "Des attributions de refus sur les ressources",
    "Un rôle personnalisé créé pour chaque utilisateur",
    "Des attributions par ressource"
   ],
   "a": 0
  },
  {
   "l": "Mêmes droits à plus large étendue :",
   "o": [
    "Créer un second abonnement pour répartir",
    "Groupe d'administration parent",
    "Dupliquer par groupe",
    "Attribuer à chaque ressource individuellement"
   ],
   "a": 1
  },
  {
   "l": "Échec de la 4 001e :",
   "o": [
    "500 par groupe",
    "Le script n'a pas le rôle Owner sur l'abonnement",
    "Limite de 2 000 rôles personnalisés par locataire",
    "4 000 par abonnement"
   ],
   "a": 3
  },
  {
   "l": "Rôles des 200 développeurs :",
   "o": [
    "Une attribution avec condition",
    "200 groupes de sécurité, un par développeur",
    "Owner",
    "Une stratégie Deny sur les autres groupes de ressources"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Groupes.</b> Attribuer un rôle à un groupe plutôt qu'à chaque utilisateur réduit le nombre d'attributions.<b>Étendue.</b> Une attribution sur un groupe d'administration ne compte pas dans la limite de l'abonnement (la limite des groupes d'administration est distincte) et s'hérite.<b>Limite.</b> Un abonnement accepte jusqu'à 4 000 attributions de rôles Azure.<b>Conditions.</b> Une seule attribution avec une condition (par exemple sur une étiquette ou un attribut) peut remplacer des dizaines d'attributions ciblées ; les conditions sont prises en charge pour certains rôles et actions. (Selon les besoins, des groupes par équipe restent une option.)",
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
    "*Attributions Reader individuelles",
    "Un groupe, une attribution"
   ],
   [
    "Mêmes droits à plus large étendue",
    "Groupe d'administration parent"
   ],
   [
    "Échec de la 4 001e",
    "4 000 par abonnement"
   ],
   [
    "Rôles des 200 développeurs",
    "Une attribution avec condition"
   ]
  ]
 },
 "keep": "Groupes et étendue plus large = moins d'attributions. Limite = 4 000 par abonnement."
},
{
 "id": "D1-424",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Le coffre kv-apps de Contoso utilise le modèle d'autorisation « Contrôle d'accès en fonction du rôle Azure ». Les demandes :</p><ul><li>l'application App-Web (identité managée) doit lire des secrets, sans pouvoir les lister ni les modifier ;</li><li>l'équipe Sécurité doit créer, faire pivoter et supprimer des clés, mais ne doit pas lire les secrets ;</li><li>l'équipe Plateforme a le rôle Contributor sur le groupe de ressources du coffre ; elle s'étonne de ne pas voir le contenu des secrets ;</li><li>un administrateur propose de repasser le coffre en modèle « Stratégie d'accès du coffre » pour simplifier.</li></ul><p>Quel rôle devez-vous attribuer, et qu'est-ce qui est vrai ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "App-Web :",
   "o": [
    "Key Vault Secrets User",
    "Key Vault Administrator sur le secret",
    "Key Vault Reader",
    "Key Vault Secrets Officer sur le coffre"
   ],
   "a": 0
  },
  {
   "l": "Équipe Sécurité :",
   "o": [
    "Key Vault Crypto User",
    "Key Vault Crypto Officer",
    "Key Vault Secrets Officer",
    "Key Vault Administrator"
   ],
   "a": 1
  },
  {
   "l": "Contributor sans accès aux secrets :",
   "o": [
    "Normal : plan de gestion",
    "Bug : Contributor inclut le plan de données",
    "24 heures",
    "Il faut un point de terminaison privé sur le coffre"
   ],
   "a": 0
  },
  {
   "l": "Risque de Contributor sous stratégies d'accès :",
   "o": [
    "Il ne peut plus créer de coffre",
    "Aucun : les stratégies sont plus sûres",
    "Il perd l'accès au coffre",
    "Il peut s'accorder l'accès aux données"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Rôles de données.</b> Key Vault Secrets User lit le contenu des secrets ; Secrets Officer les gère ; Crypto Officer gère les clés sans accès aux secrets. Les rôles peuvent être attribués sur un secret précis.<b>Plans.</b> Contributor agit sur le plan de gestion (le coffre comme ressource), pas sur le plan de données.<b>Stratégies d'accès.</b> Avec ce modèle, quiconque a Contributor (Microsoft.KeyVault/vaults/write) peut modifier les stratégies d'accès et s'accorder l'accès aux données : c'est une raison de préférer le modèle RBAC.",
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
    "*App-Web",
    "Key Vault Secrets User"
   ],
   [
    "Équipe Sécurité",
    "Key Vault Crypto Officer"
   ],
   [
    "Contributor sans accès aux secrets",
    "Normal : plan de gestion"
   ],
   [
    "Risque de Contributor sous stratégies d'accès",
    "Il peut s'accorder l'accès aux données"
   ]
  ]
 },
 "keep": "Lire = Secrets User. Clés = Crypto Officer. Contributor = gestion seulement. Stratégies d'accès = Contributor peut s'auto-accorder."
},
{
 "id": "D1-425",
 "dom": 1,
 "type": "hot",
 "stem": "<p>L'équipe gouvernance de Fabrikam doit appliquer 12 stratégies de sécurité à tous les abonnements du groupe d'administration MG-Corp :</p><ul><li>les 12 stratégies doivent être attribuées et suivies ensemble, avec un seul score de conformité ;</li><li>la liste des régions autorisées, utilisée par trois des stratégies, doit être saisie une seule fois lors de l'attribution ;</li><li>deux stratégies utilisent DeployIfNotExists pour déployer l'agent Azure Monitor ; la tâche de correction échoue avec une erreur d'autorisation ;</li><li>l'équipe veut réutiliser l'ensemble dans un autre locataire.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Regroupement :",
   "o": [
    "Une définition d'initiative",
    "12 attributions séparées sur MG-Corp",
    "Un plan Azure Blueprints avec 12 artefacts",
    "Une exemption"
   ],
   "a": 0
  },
  {
   "l": "Régions saisies une fois :",
   "o": [
    "Un paramètre saisi à chaque attribution séparée",
    "Une étiquette",
    "Un paramètre d'initiative",
    "Une variable définie dans chaque stratégie"
   ],
   "a": 2
  },
  {
   "l": "Erreur de correction :",
   "o": [
    "La stratégie doit d'abord passer en mode Audit",
    "Un verrou",
    "Le mode d'application est désactivé sur MG-Corp",
    "Rôles manquants (identité)"
   ],
   "a": 3
  },
  {
   "l": "Réutiliser dans un autre locataire :",
   "o": [
    "Déplacer le groupe d'administration vers l'autre locataire",
    "Partager",
    "Exporter la définition",
    "Copier l'état de conformité vers l'autre locataire"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Initiative.</b> Une initiative (policySetDefinition) regroupe plusieurs stratégies attribuées et évaluées ensemble.<b>Paramètres.</b> Un paramètre d'initiative peut alimenter les paramètres de plusieurs stratégies membres.<b>Identité.</b> Les effets DeployIfNotExists et Modify utilisent l'identité managée de l'attribution ; elle doit avoir les rôles listés dans roleDefinitionIds (le portail les attribue à la création, mais pas toujours sur toutes les étendues nécessaires).<b>Réutilisation.</b> Les définitions sont propres à un locataire : on les exporte en JSON ou en code (Bicep, Terraform) pour les recréer ailleurs.",
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
    "*Regroupement",
    "Une définition d'initiative"
   ],
   [
    "Régions saisies une fois",
    "Un paramètre d'initiative"
   ],
   [
    "Erreur de correction",
    "Rôles manquants (identité)"
   ],
   [
    "Réutiliser dans un autre locataire",
    "Exporter la définition"
   ]
  ]
 },
 "keep": "Ensemble = initiative. Paramètre partagé = paramètre d'initiative. Correction = rôles de l'identité. Autre locataire = exporter."
},
{
 "id": "D1-426",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso veut réduire le coût de ses charges de calcul. Le tableau présente les charges :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Charge</th><th>Description</th></tr><tr><td>C1</td><td>40 VM Windows Server D-series, actives 24 h/24 pendant au moins 3 ans ; Contoso possède des licences Windows Server avec Software Assurance</td></tr><tr><td>C2</td><td>Calcul varié (VM, App Service, Functions Premium) dans plusieurs régions et familles, dépense horaire stable sur 3 ans</td></tr><tr><td>C3</td><td>Rendus vidéo interruptibles, relancés automatiquement en cas d'interruption</td></tr><tr><td>C4</td><td>VM de développement utilisées de 8 h à 19 h en semaine</td></tr></table></div><p>Quelle option d'économie devez-vous recommander pour chaque charge ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "C1 :",
   "o": [
    "Arrêt",
    "VM Spot avec éviction Libérer",
    "Réservation + Hybrid Benefit",
    "Plan d'économies seul, sans licence"
   ],
   "a": 2
  },
  {
   "l": "C2 :",
   "o": [
    "Azure Hybrid Benefit",
    "VM Spot",
    "Plan d'économies pour le calcul",
    "Réservations par famille de VM"
   ],
   "a": 2
  },
  {
   "l": "C3 :",
   "o": [
    "Hôte dédié",
    "Plan d'économies",
    "Réservation 1 an",
    "VM Spot"
   ],
   "a": 3
  },
  {
   "l": "C4 :",
   "o": [
    "VM Spot avec éviction Supprimer",
    "Démarrage/arrêt planifié",
    "Réservation 3 ans",
    "Hôte dédié"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Réservation.</b> Idéale pour une charge stable et une famille de VM connue ; Azure Hybrid Benefit supprime en plus le coût de la licence Windows Server (avec Software Assurance).<b>Plan d'économies.</b> Engagement de dépense horaire sur 1 ou 3 ans, appliqué automatiquement à plusieurs services, régions et familles : plus souple qu'une réservation.<b>Spot.</b> Capacité excédentaire très réduite, mais interruptible : adaptée aux traitements qui tolèrent l'éviction.<b>Planification.</b> Pour des VM utilisées une partie de la journée, l'arrêt (libération) hors des heures d'usage supprime le coût de calcul ; une réservation serait payée 24 h/24.",
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
    "*C1",
    "Réservation + Hybrid Benefit"
   ],
   [
    "C2",
    "Plan d'économies pour le calcul"
   ],
   [
    "C3",
    "VM Spot"
   ],
   [
    "C4",
    "Démarrage/arrêt planifié"
   ]
  ]
 },
 "keep": "Stable + licences = réservation + AHB. Varié = plan d'économies. Interruptible = Spot. Horaires = arrêt planifié."
},
{
 "id": "D1-427",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam utilise Azure Advisor pour optimiser ses coûts. L'équipe constate :</p><ul><li>Advisor recommande de redimensionner des VM qui servent pourtant de serveurs de secours, peu chargés la plupart du temps mais indispensables ;</li><li>l'équipe veut qu'Advisor ne recommande de redimensionner que les VM dont l'utilisation du processeur reste sous 10 %, sur une période d'observation plus longue que la valeur par défaut ;</li><li>une recommandation sur une VM précise est hors sujet ; elle doit disparaître définitivement ;</li><li>la direction veut être prévenue quand une nouvelle recommandation de coût apparaît.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Seuil et période :",
   "o": [
    "Configuration d'Advisor",
    "Une alerte de métrique sur l'UC de chaque VM",
    "Un budget",
    "Une stratégie Azure Audit sur les tailles de VM"
   ],
   "a": 0
  },
  {
   "l": "Recommandation hors sujet :",
   "o": [
    "La reporter de 7 jours",
    "La rejeter",
    "Exclure l'abonnement d'Advisor",
    "Supprimer la VM"
   ],
   "a": 1
  },
  {
   "l": "Notification des nouvelles recommandations :",
   "o": [
    "Alerte de budget",
    "Alerte du journal d'activité sur les VM",
    "Alerte Advisor + groupe d'actions",
    "Rapport Cost Management exporté"
   ],
   "a": 2
  },
  {
   "l": "Mesure globale de l'optimisation :",
   "o": [
    "Score de sécurité Defender",
    "Score de Microsoft Secure",
    "Score de conformité Policy",
    "Score Advisor"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Configuration.</b> Dans Advisor, la règle de redimensionnement des VM accepte un seuil d'utilisation du processeur et une période d'observation configurables, par abonnement.<b>Rejeter / reporter.</b> Une recommandation peut être reportée (pour une durée) ou rejetée (définitivement).<b>Alertes Advisor.</b> Elles déclenchent un groupe d'actions quand une nouvelle recommandation d'une catégorie donnée apparaît.<b>Score Advisor.</b> Il mesure, par catégorie (coût, sécurité, fiabilité, excellence opérationnelle, performance), la part des recommandations appliquées.",
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
    "*Seuil et période",
    "Configuration d'Advisor"
   ],
   [
    "Recommandation hors sujet",
    "La rejeter"
   ],
   [
    "Notification des nouvelles recommandations",
    "Alerte Advisor + groupe d'actions"
   ],
   [
    "Mesure globale de l'optimisation",
    "Score Advisor"
   ]
  ]
 },
 "keep": "Seuil UC et période = configuration Advisor. Définitif = rejeter. Nouvelles = alerte Advisor. Global = score Advisor."
},
{
 "id": "D1-428",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso doit réorganiser des ressources :</p><ul><li>la VM VM-App1 (avec son disque OS, sa carte réseau et son IP publique Standard) doit passer du groupe RG-Old au groupe RG-New, dans le même abonnement ;</li><li>après le déplacement, l'équipe s'attend à ce que VM-App1 soit en France Central, comme RG-New ; RG-Old et la VM sont en West Europe ;</li><li>le compte de stockage stdata doit passer dans l'abonnement Sub-B, d'un autre locataire Entra ID ;</li><li>avant un déplacement de 200 ressources vers Sub-C (même locataire), l'équipe veut vérifier qu'il réussira, sans rien déplacer.</li></ul><p>Qu'est-ce qui est vrai, et que devez-vous utiliser ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Ressources à déplacer avec VM-App1 :",
   "o": [
    "Le disque d'abord",
    "La VM, puis recréer la carte réseau et l'IP",
    "Ensemble, avec dépendances",
    "La VM seule, les dépendances suivent plus tard"
   ],
   "a": 2
  },
  {
   "l": "Région de VM-App1 après le déplacement :",
   "o": [
    "Reste en West Europe",
    "Passe en France Central",
    "Région associée",
    "Choisie lors du déplacement"
   ],
   "a": 0
  },
  {
   "l": "stdata vers un autre locataire :",
   "o": [
    "Déplacement de ressource direct vers Sub-B",
    "Changer le locataire",
    "Impossible directement",
    "Transfert de propriété de facturation de stdata"
   ],
   "a": 2
  },
  {
   "l": "Vérifier sans déplacer :",
   "o": [
    "What-if sur un modèle exporté des 200 ressources",
    "Azure Resource Mover vers la même région",
    "Exporter le modèle",
    "Validation du déplacement"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Dépendances.</b> Les ressources dépendantes doivent être déplacées ensemble (le portail les propose) ; pour les VM, disques et cartes réseau suivent la VM.<b>Région.</b> Déplacer une ressource vers un autre groupe ou abonnement ne change pas sa région ; le groupe de ressources ne stocke que des métadonnées.<b>Locataire.</b> Le déplacement de ressources entre abonnements exige le même locataire. Pour un autre locataire, on transfère l'abonnement entier ou on recrée la ressource et copie les données.<b>Validation.</b> L'API validateMoveResources (et la validation du portail) teste le déplacement sans l'effectuer. Azure Resource Mover sert à changer de région.",
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
    "*Ressources à déplacer avec VM-App1",
    "Ensemble, avec dépendances"
   ],
   [
    "Région de VM-App1 après le déplacement",
    "Reste en West Europe"
   ],
   [
    "stdata vers un autre locataire",
    "Impossible directement"
   ],
   [
    "Vérifier sans déplacer",
    "Validation du déplacement"
   ]
  ]
 },
 "keep": "Dépendances ensemble. La région ne change pas. Autre locataire = pas de déplacement direct. Tester = validation."
},
{
 "id": "D1-429",
 "dom": 1,
 "type": "hot",
 "stem": "<p>L'équipe sécurité de Fabrikam revoit les paramètres utilisateur par défaut de Microsoft Entra ID :</p><ul><li>les utilisateurs standard ne doivent pas pouvoir inscrire d'applications dans l'annuaire ;</li><li>les utilisateurs non administrateurs ne doivent pas pouvoir ouvrir le centre d'administration Microsoft Entra ;</li><li>les utilisateurs ne doivent pas pouvoir créer de nouveaux locataires ;</li><li>les utilisateurs ne doivent pas pouvoir accorder seuls à des applications tierces l'accès aux données de l'entreprise, sauf pour des autorisations à faible risque d'éditeurs vérifiés.</li></ul><p>Que devez-vous configurer ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Inscription d'applications :",
   "o": [
    "Une stratégie Azure Deny sur les inscriptions",
    "Inscription d'applications = Non",
    "Retirer un rôle",
    "Une stratégie d'accès conditionnel sur le portail"
   ],
   "a": 1
  },
  {
   "l": "Centre d'administration :",
   "o": [
    "Le rôle Directory Readers retiré à tous les utilisateurs",
    "Une stratégie Azure Deny sur le portail Entra",
    "Un verrou",
    "Restreindre l'accès = Oui"
   ],
   "a": 3
  },
  {
   "l": "Création de locataires :",
   "o": [
    "Rien : ce comportement ne peut pas être bloqué",
    "Un groupe fermé",
    "Création de locataires = Non",
    "Une stratégie Azure attribuée au groupe racine"
   ],
   "a": 2
  },
  {
   "l": "Consentement des utilisateurs :",
   "o": [
    "Éditeurs vérifiés, faible risque",
    "Ne pas autoriser le consentement des utilisateurs",
    "Consentement administrateur seul, sans flux de demande",
    "Tout autoriser"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Paramètres utilisateur.</b> Dans Entra ID, « Les utilisateurs peuvent inscrire des applications », « Restreindre l'accès au centre d'administration Microsoft Entra » et « Les utilisateurs peuvent créer des locataires » se règlent sur Oui ou Non.<b>Centre d'administration.</b> Ce réglage limite l'accès au portail d'administration, mais ne bloque pas l'accès aux données par PowerShell ou Graph.<b>Consentement.</b> Le réglage recommandé autorise le consentement pour les applications d'éditeurs vérifiés, pour des autorisations classées à faible risque ; les autres passent par un consentement administrateur.",
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
    "*Inscription d'applications",
    "Inscription d'applications = Non"
   ],
   [
    "Centre d'administration",
    "Restreindre l'accès = Oui"
   ],
   [
    "Création de locataires",
    "Création de locataires = Non"
   ],
   [
    "Consentement des utilisateurs",
    "Éditeurs vérifiés, faible risque"
   ]
  ]
 },
 "keep": "Inscription, centre d'administration, locataires = paramètres utilisateur Oui/Non. Consentement = éditeurs vérifiés, faible risque."
},
{
 "id": "D1-430",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso a attribué au groupe d'administration MG-Prod une stratégie DeployIfNotExists qui déploie des paramètres de diagnostic sur les coffres Key Vault, avec une identité managée attribuée par le système à l'attribution.</p><ul><li>La stratégie est attribuée depuis le portail ; la case de création de l'identité est cochée ;</li><li>les nouveaux coffres reçoivent bien les paramètres de diagnostic ;</li><li>les 150 coffres existants n'en ont toujours pas, une semaine plus tard ;</li><li>l'espace de travail Log Analytics de destination se trouve dans l'abonnement Sub-Logs, hors de MG-Prod, et la tâche de correction échoue pour les coffres.</li></ul><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "rows": [
  {
   "l": "Coffres existants :",
   "o": [
    "Réattribuer la stratégie",
    "Attendre le cycle de 24 heures",
    "Passer la stratégie en Audit",
    "Créer une tâche de correction"
   ],
   "a": 3
  },
  {
   "l": "Échec lié à Sub-Logs :",
   "o": [
    "Identité utilisateur",
    "Un rôle sur l'espace de travail",
    "Déplacer obligatoirement l'espace de travail dans MG-Prod",
    "Désactiver le mode d'application de l'attribution"
   ],
   "a": 1
  },
  {
   "l": "Rôle typique sur l'espace de travail :",
   "o": [
    "Reader",
    "Log Analytics Reader sur Sub-Logs",
    "Log Analytics Contributor",
    "Monitoring Reader sur l'espace de travail"
   ],
   "a": 2
  },
  {
   "l": "Qui exécute le déploiement :",
   "o": [
    "L'identité de l'attribution",
    "Le propriétaire de l'abonnement",
    "Le service Key Vault",
    "L'utilisateur qui a créé le coffre"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Correction.</b> Les effets DeployIfNotExists et Modify agissent sur les nouvelles ressources et les mises à jour ; les ressources existantes non conformes nécessitent une tâche de correction.<b>Autorisations.</b> L'identité managée de l'attribution exécute le déploiement : elle doit avoir les rôles nécessaires sur chaque étendue touchée, y compris l'espace de travail situé hors de l'étendue d'attribution (le portail n'attribue les rôles qu'à l'étendue de l'attribution).<b>Rôle.</b> Log Analytics Contributor permet de configurer l'envoi de diagnostics vers l'espace de travail ; les rôles de lecture ne suffisent pas.",
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
    "*Coffres existants",
    "Créer une tâche de correction"
   ],
   [
    "Échec lié à Sub-Logs",
    "Un rôle sur l'espace de travail"
   ],
   [
    "Rôle typique sur l'espace de travail",
    "Log Analytics Contributor"
   ],
   [
    "Qui exécute le déploiement",
    "L'identité de l'attribution"
   ]
  ]
 },
 "keep": "Existant = tâche de correction. Hors étendue = rôle à ajouter pour l'identité. L'identité de l'attribution déploie."
}
);
