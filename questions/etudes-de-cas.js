/* Études de cas */
AZ.cases.push(
{
 "id": "C001",
 "title": "Fabrikam",
 "docs": [
  {
   "t": "Présentation",
   "h": "<p><b>Présentation</b></p><p>Fabrikam est une entreprise de fabrication dont le siège est à Lyon. Elle possède un site de production à Grenoble. L'équipe informatique migre progressivement ses serveurs vers Azure.</p>"
  },
  {
   "t": "Environnement existant",
   "h": "<p><b>Environnement Azure</b></p><p>Fabrikam dispose d'un locataire Microsoft Entra nommé fabrikam.com et des abonnements suivants :</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Abonnement</th><th>Contenu</th></tr><tr><td>Sub-Prod</td><td>VNet-Prod (10.1.0.0/16, France Central), sous-réseaux Subnet-App et Subnet-Data ; VM-APP1, VM-APP2 et VM-SQL1, déployées sans zone de disponibilité ; compte de stockage stfabdocs (Standard, GRS)</td></tr><tr><td>Sub-Dev</td><td>VNet-Dev (10.2.0.0/16) et plusieurs groupes de ressources de test</td></tr></table></div><p><b>Environnement local</b></p><p>Le site de Lyon (192.168.0.0/16) est relié à VNet-Prod par un VPN site à site. Un groupe Microsoft Entra nommé Dev-Team contient tous les développeurs.</p>"
  },
  {
   "t": "Exigences",
   "h": "<p><b>Exigences techniques</b></p><ul><li>Les membres de Dev-Team doivent gérer toutes les ressources de Sub-Dev, sans pouvoir gérer les accès.</li><li>Les ressources de Sub-Dev ne doivent pouvoir être créées que dans la région France Central.</li><li>L'application hébergée sur VM-APP1 et VM-APP2 doit offrir un SLA d'au moins 99,99 %.</li><li>Les utilisateurs du site de Lyon doivent accéder à stfabdocs sans passer par Internet. L'accès public à stfabdocs doit être désactivé.</li><li>Les documents de stfabdocs non modifiés depuis 90 jours doivent passer automatiquement au niveau Archive.</li><li>VM-SQL1 doit être sauvegardée chaque jour. Les administrateurs doivent recevoir un e-mail en cas d'échec d'une sauvegarde.</li></ul><p><b>Contraintes</b></p><ul><li>Les solutions doivent minimiser les coûts et l'effort d'administration.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C001-1",
   "dom": 1,
   "type": "hot",
   "stem": "<p>Vous devez répondre à l'exigence concernant les membres de Dev-Team.</p><p>Que devez-vous attribuer à Dev-Team ? Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p>",
   "rows": [
    {
     "l": "Rôle :",
     "o": [
      "Propriétaire",
      "Contributeur",
      "Lecteur",
      "Administrateur de l'accès utilisateur"
     ],
     "a": 1
    },
    {
     "l": "Étendue :",
     "o": [
      "Le groupe d'administration racine",
      "Sub-Dev",
      "Chaque groupe de ressources de Sub-Dev"
     ],
     "a": 1
    }
   ],
   "expl": "« Gérer toutes les ressources, sans gérer les accès » = <b>Contributeur</b>. Sur <b>Sub-Dev</b> : une seule attribution qui couvre aussi les futurs groupes. La racine donnerait accès à la production."
  },
  {
   "id": "C001-2",
   "dom": 1,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence concernant les régions autorisées pour Sub-Dev.</p><p>Que devez-vous configurer ?</p>",
   "opts": [
    "Un verrou en lecture seule sur Sub-Dev",
    "Une Azure Policy Emplacements autorisés avec l'effet Deny, attribuée à Sub-Dev",
    "Le rôle Lecteur pour Dev-Team sur toutes les autres régions",
    "Un budget sur Sub-Dev"
   ],
   "ans": 1,
   "expl": "<b>Azure Policy</b> « Emplacements autorisés » (Deny) bloque toute création hors de France Central, pour tout le monde. Un verrou bloquerait tout ; RBAC ne se pose pas par région ; un budget ne bloque rien."
  },
  {
   "id": "C001-3",
   "dom": 3,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence de disponibilité de l'application hébergée sur VM-APP1 et VM-APP2.</p><p>Que devez-vous faire ?</p>",
   "opts": [
    "Placer VM-APP1 et VM-APP2 dans un groupe à haute disponibilité",
    "Convertir les disques des deux VM en SSD Premium",
    "Redéployer VM-APP1 et VM-APP2 dans deux zones de disponibilité différentes",
    "Protéger les deux VM avec Azure Backup"
   ],
   "ans": 2,
   "expl": "<b>99,99 %</b> = deux VM dans des <b>zones</b> différentes. Groupe à haute disponibilité : 99,95 %. La zone se choisit à la création : il faut redéployer."
  },
  {
   "id": "C001-4",
   "dom": 4,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence d'accès à stfabdocs depuis le site de Lyon.</p><p>Que devez-vous configurer ?</p>",
   "opts": [
    "Un point de terminaison de service Microsoft.Storage sur Subnet-App",
    "Une règle de pare-feu de stfabdocs avec l'adresse publique du site de Lyon",
    "Un peering entre VNet-Prod et VNet-Dev",
    "Un point de terminaison privé pour stfabdocs dans VNet-Prod et une zone DNS privée"
   ],
   "ans": 3,
   "expl": "Le site est relié à VNet-Prod par VPN : un <b>point de terminaison privé</b> donne une IP privée joignable par le tunnel, et la <b>zone DNS privée</b> fait résoudre le nom vers elle. L'accès public peut alors être désactivé."
  },
  {
   "id": "C001-5",
   "dom": 2,
   "type": "single",
   "stem": "<p>Vous devez répondre à l'exigence concernant les documents non modifiés de stfabdocs.</p><p>Que devez-vous configurer ?</p>",
   "opts": [
    "Une règle de gestion du cycle de vie qui déplace vers Archive les blobs non modifiés depuis 90 jours",
    "Une stratégie d'immuabilité basée sur le temps de 90 jours",
    "Le niveau d'accès par défaut du compte sur Archive",
    "La réplication d'objets vers un second compte"
   ],
   "ans": 0,
   "expl": "La <b>gestion du cycle de vie</b> change le niveau selon l'âge (dernière modification > 90 jours → Archive). Archive ne peut pas être le niveau par défaut d'un compte."
  },
  {
   "id": "C001-6",
   "dom": 5,
   "type": "single",
   "stem": "<p>Vous avez configuré la sauvegarde quotidienne de VM-SQL1 dans un coffre Recovery Services.</p><p>Vous devez répondre à l'exigence de notification des échecs de sauvegarde. Que devez-vous faire ?</p>",
   "opts": [
    "Créer un paramètre de diagnostic du coffre vers Event Hubs",
    "Activer la suppression réversible sur le coffre",
    "Créer une règle de traitement des alertes qui envoie les alertes Azure Backup vers un groupe d'actions",
    "Créer une règle d'alerte sur le journal d'activité de VM-SQL1"
   ],
   "ans": 2,
   "expl": "Azure Backup génère <b>automatiquement</b> des alertes Azure Monitor en cas d'échec, sans notifier personne. Une <b>règle de traitement des alertes</b> vers un <b>groupe d'actions</b> (e-mail) suffit."
  }
 ]
}
);
