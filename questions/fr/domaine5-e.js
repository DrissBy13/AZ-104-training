/* Domaine 5 : supervision et sauvegarde (lot E : D5-201 à D5-220, questions à documents façon examen) */
AZ.questions.push(
{
 "id": "D5-201",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sauvegarde (cliquez sur l'onglet <b>Sauvegarde</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Sauvegarde",
   "h": "<p>Régions jumelées : France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Région</th><th>Système</th><th>Particularité</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Disque de données Disk3 (disque managé)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Coffre</th><th>Type</th><th>Région</th><th>Redondance</th><th>Restauration interrégion</th><th>Éléments protégés</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Activée</td><td>VM1 (stratégie quotidienne, 30 jours), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>Aucun</td></tr><tr><td>BV1</td><td>Coffre de sauvegarde (Backup vault)</td><td>France Central</td><td>LRS</td><td>—</td><td>Aucun</td></tr></table></div><p>Le compte de stockage <b>stdata</b> (France Central) contient le partage Azure Files share1 et des conteneurs de blobs.</p>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez protéger VM2 avec RSV1.",
   "a": 1
  },
  {
   "l": "Vous pouvez protéger VM3, en tant que machine virtuelle, avec BV1.",
   "a": 1
  },
  {
   "l": "Vous pouvez restaurer VM1 en West Europe à partir de RSV1.",
   "a": 1
  },
  {
   "l": "Vous pouvez restaurer VM1 en France South à partir de RSV1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM2 dans RSV1 : Non.</b> Une VM se sauvegarde dans un coffre de <b>sa région</b>. VM2 est en West Europe ; RSV1 en France Central.</li><li><b>VM3 dans BV1 : Non.</b> Un coffre de sauvegarde (Backup vault) ne protège pas les machines virtuelles : il sert aux disques managés, aux blobs, à PostgreSQL ou à AKS. La sauvegarde de VM passe par un coffre Recovery Services.</li><li><b>VM1 en West Europe : Non.</b> La restauration interrégion restaure dans la <b>région jumelée</b> du coffre, pas dans une région au choix. Pour France Central, c'est France South.</li><li><b>VM1 en France South : Oui.</b> RSV1 est en GRS avec la restauration interrégion activée.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "RSV1"
  ],
  "title": "RSV1 | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "Éléments de sauvegarde",
   "*Propriétés"
  ],
  "rows": [
   [
    "*Restauration interrégion",
    "Activée · région secondaire : France South"
   ]
  ]
 },
 "keep": "VM = coffre Recovery Services de sa région. Interrégion = région jumelée uniquement."
},
{
 "id": "D5-202",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sauvegarde (cliquez sur l'onglet <b>Sauvegarde</b>).</p><p>Vous devez protéger les éléments ci-dessous. Quel coffre devez-vous utiliser pour chacun ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Sauvegarde",
   "h": "<p>Régions jumelées : France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Région</th><th>Système</th><th>Particularité</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Disque de données Disk3 (disque managé)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Coffre</th><th>Type</th><th>Région</th><th>Redondance</th><th>Restauration interrégion</th><th>Éléments protégés</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Activée</td><td>VM1 (stratégie quotidienne, 30 jours), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>Aucun</td></tr><tr><td>BV1</td><td>Coffre de sauvegarde (Backup vault)</td><td>France Central</td><td>LRS</td><td>—</td><td>Aucun</td></tr></table></div><p>Le compte de stockage <b>stdata</b> (France Central) contient le partage Azure Files share1 et des conteneurs de blobs.</p>"
  }
 ],
 "rows": [
  {
   "l": "VM2 :",
   "o": [
    "RSV1",
    "RSV2",
    "BV1"
   ],
   "a": 1
  },
  {
   "l": "Disk3 seul, plusieurs fois par jour :",
   "o": [
    "RSV1",
    "RSV2",
    "BV1"
   ],
   "a": 2
  },
  {
   "l": "share1 :",
   "o": [
    "RSV1",
    "RSV2",
    "BV1"
   ],
   "a": 0
  },
  {
   "l": "Les blobs de stdata (sauvegarde opérationnelle) :",
   "o": [
    "RSV1",
    "RSV2",
    "BV1"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>VM2 → RSV2 :</b> coffre Recovery Services dans la même région (West Europe).</li><li><b>Disk3 → BV1 :</b> la sauvegarde de disque managé (Azure Disk Backup, par instantanés, jusqu'à plusieurs fois par jour) utilise un <b>coffre de sauvegarde</b> de la même région.</li><li><b>share1 → RSV1 :</b> la sauvegarde d'Azure Files utilise un coffre <b>Recovery Services</b> de la même région que le compte de stockage.</li><li><b>Blobs → BV1 :</b> la sauvegarde des blobs (opérationnelle ou en coffre) utilise un <b>coffre de sauvegarde</b>.</li></ul>",
 "portal": {
  "path": [
   "Centre de continuité d'activité"
  ],
  "title": "Centre de continuité d'activité | Protéger",
  "menu": [
   "Vue d'ensemble",
   "*Protéger",
   "Éléments protégés"
  ],
  "rows": [
   [
    "Machines virtuelles, Azure Files",
    "Coffre Recovery Services"
   ],
   [
    "*Disques, blobs, PostgreSQL, AKS",
    "Coffre de sauvegarde"
   ]
  ]
 },
 "keep": "Recovery Services : VM, Azure Files, SQL en VM. Coffre de sauvegarde : disques, blobs, PostgreSQL, AKS."
},
{
 "id": "D5-203",
 "dom": 5,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sauvegarde (cliquez sur l'onglet <b>Sauvegarde</b>).</p><p>Vous allez protéger VM2. Ses sauvegardes devront pouvoir être restaurées dans la région jumelée, même si West Europe reste disponible.</p><p>Quelles <b>deux</b> actions devez-vous effectuer ?</p><p>Chaque réponse correcte présente une partie de la solution.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Sauvegarde",
   "h": "<p>Régions jumelées : France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Région</th><th>Système</th><th>Particularité</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Disque de données Disk3 (disque managé)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Coffre</th><th>Type</th><th>Région</th><th>Redondance</th><th>Restauration interrégion</th><th>Éléments protégés</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Activée</td><td>VM1 (stratégie quotidienne, 30 jours), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>Aucun</td></tr><tr><td>BV1</td><td>Coffre de sauvegarde (Backup vault)</td><td>France Central</td><td>LRS</td><td>—</td><td>Aucun</td></tr></table></div><p>Le compte de stockage <b>stdata</b> (France Central) contient le partage Azure Files share1 et des conteneurs de blobs.</p>"
  }
 ],
 "opts": [
  "Passer la redondance de RSV2 en GRS avant de protéger VM2",
  "Activer la restauration interrégion sur RSV2",
  "Créer un second coffre en North Europe et y copier les points",
  "Passer la redondance de RSV2 en ZRS, puis activer l'immuabilité"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>La restauration dans la région jumelée (North Europe) demande un coffre <b>GRS</b> avec la <b>restauration interrégion</b> activée. RSV2 ne protège encore rien : sa redondance peut donc encore être changée (elle est figée dès qu'un élément est protégé).</p><ul><li>Un second coffre ne recevrait pas les points de RSV2 : il n'y a pas de copie manuelle de points entre coffres.</li><li>ZRS protège contre la perte d'une zone, pas d'une région ; l'immuabilité empêche la suppression des points.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "RSV2"
  ],
  "title": "RSV2 | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "Éléments de sauvegarde",
   "*Propriétés"
  ],
  "rows": [
   [
    "*Configuration de la sauvegarde",
    "Géoredondant · restauration interrégion activée"
   ]
  ]
 },
 "keep": "Redondance du coffre : à choisir avant le premier élément protégé."
},
{
 "id": "D5-204",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sauvegarde (cliquez sur l'onglet <b>Sauvegarde</b>).</p><p>Vous devez configurer Azure Site Recovery pour répliquer VM4 vers West Europe.</p><p>Quel coffre devez-vous utiliser ?</p>",
 "docs": [
  {
   "t": "Sauvegarde",
   "h": "<p>Régions jumelées : France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Région</th><th>Système</th><th>Particularité</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Disque de données Disk3 (disque managé)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Coffre</th><th>Type</th><th>Région</th><th>Redondance</th><th>Restauration interrégion</th><th>Éléments protégés</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Activée</td><td>VM1 (stratégie quotidienne, 30 jours), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>Aucun</td></tr><tr><td>BV1</td><td>Coffre de sauvegarde (Backup vault)</td><td>France Central</td><td>LRS</td><td>—</td><td>Aucun</td></tr></table></div><p>Le compte de stockage <b>stdata</b> (France Central) contient le partage Azure Files share1 et des conteneurs de blobs.</p>"
  }
 ],
 "opts": [
  "RSV1, qui protège déjà VM4 en France Central",
  "RSV2, le coffre Recovery Services de West Europe",
  "BV1, le coffre de sauvegarde de France Central",
  "Un nouveau coffre de sauvegarde en France South"
 ],
 "ans": 1,
 "expl": "<p>Pour Site Recovery entre régions, le coffre Recovery Services doit être <b>hors de la région source</b>, en pratique dans la région cible : <b>RSV2</b> (West Europe). Si la région source tombe, le coffre reste disponible pour lancer le basculement.</p><ul><li>RSV1 est dans la région source, même s'il sauvegarde déjà VM4 (sauvegarde et réplication sont indépendantes).</li><li>Un coffre de sauvegarde ne fait pas de Site Recovery.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "RSV2"
  ],
  "title": "RSV2 | Éléments répliqués",
  "menu": [
   "Vue d'ensemble",
   "*Éléments répliqués",
   "Plans de récupération"
  ],
  "rows": [
   [
    "*VM4",
    "France Central → West Europe"
   ]
  ],
  "btn": "+ Répliquer"
 },
 "keep": "Site Recovery : coffre dans la région cible. Sauvegarde : coffre dans la région source."
},
{
 "id": "D5-205",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sauvegarde (cliquez sur l'onglet <b>Sauvegarde</b>).</p><p>Les administrateurs veulent passer RSV1 en LRS pour réduire le coût, sans perdre les points de restauration de VM1 et VM4.</p><p>Que se passe-t-il ?</p>",
 "docs": [
  {
   "t": "Sauvegarde",
   "h": "<p>Régions jumelées : France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Région</th><th>Système</th><th>Particularité</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Disque de données Disk3 (disque managé)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Coffre</th><th>Type</th><th>Région</th><th>Redondance</th><th>Restauration interrégion</th><th>Éléments protégés</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Activée</td><td>VM1 (stratégie quotidienne, 30 jours), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>Aucun</td></tr><tr><td>BV1</td><td>Coffre de sauvegarde (Backup vault)</td><td>France Central</td><td>LRS</td><td>—</td><td>Aucun</td></tr></table></div><p>Le compte de stockage <b>stdata</b> (France Central) contient le partage Azure Files share1 et des conteneurs de blobs.</p>"
  }
 ],
 "opts": [
  "La redondance change, et les points GRS existants restent en GRS",
  "C'est impossible tant que des éléments sont protégés dans RSV1",
  "La redondance change au prochain travail de sauvegarde",
  "Il faut d'abord désactiver la restauration interrégion, puis changer"
 ],
 "ans": 1,
 "expl": "<p>La redondance du stockage d'un coffre Recovery Services ne se modifie plus dès qu'un élément y est protégé. Il faudrait arrêter la protection et supprimer les données (donc perdre les points), ou créer un nouveau coffre LRS pour les prochaines sauvegardes.</p><p>Désactiver la restauration interrégion ne lève pas cette limite (et cette option, une fois activée, ne se désactive pas).</p>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "RSV1"
  ],
  "title": "RSV1 | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "Éléments de sauvegarde",
   "*Propriétés"
  ],
  "rows": [
   [
    "*Redondance du stockage",
    "GRS · verrouillée (éléments protégés)"
   ]
  ]
 },
 "keep": "Éléments protégés = redondance du coffre verrouillée."
},
{
 "id": "D5-206",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Éléments (cliquez sur l'onglet <b>Éléments</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Éléments",
   "h": "<p>Le coffre Recovery Services <b>RSV5</b> (France Central) a la suppression réversible standard (14 jours). Nous sommes le 10 du mois.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Élément</th><th>État de la protection</th><th>Dernière sauvegarde</th><th>Remarque</th></tr><tr><td>VM10</td><td>Protection active</td><td>Le 9</td><td>Stratégie quotidienne, 30 jours</td></tr><tr><td>VM11</td><td>Protection arrêtée, données conservées</td><td>Le 1er</td><td>—</td></tr><tr><td>VM12</td><td>Supprimé de façon réversible</td><td>Le 4</td><td>Données supprimées le 5</td></tr><tr><td>VM13</td><td>Protection active</td><td>Le 9</td><td>VM supprimée par erreur le 9 au soir</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Vous pouvez restaurer VM11 à partir de son point du 1er.",
   "a": 0
  },
  {
   "l": "Vous pouvez annuler la suppression des données de VM12 aujourd'hui.",
   "a": 0
  },
  {
   "l": "Vous pourrez encore annuler la suppression des données de VM12 le 25.",
   "a": 1
  },
  {
   "l": "Vous pouvez supprimer RSV5 aujourd'hui.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>VM11 : Oui.</b> « Protection arrêtée, données conservées » garde les points existants, qui restent restaurables (et facturés).</li><li><b>VM12 aujourd'hui : Oui.</b> Les données supprimées le 5 restent récupérables 14 jours, jusqu'au 19.</li><li><b>VM12 le 25 : Non.</b> Le 19, les données sont supprimées définitivement.</li><li><b>Supprimer RSV5 : Non.</b> Un coffre qui contient des éléments protégés, même arrêtés, ou des données supprimées de façon réversible ne peut pas être supprimé.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "RSV5"
  ],
  "title": "RSV5 | Éléments de sauvegarde",
  "menu": [
   "Vue d'ensemble",
   "*Éléments de sauvegarde",
   "Travaux de sauvegarde"
  ],
  "rows": [
   [
    "VM11",
    "Protection arrêtée"
   ],
   [
    "*VM12",
    "Supprimé de façon réversible · 9 jours restants"
   ]
  ]
 },
 "keep": "Suppression réversible standard = 14 jours. Coffre supprimable seulement une fois vide."
},
{
 "id": "D5-207",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Éléments (cliquez sur l'onglet <b>Éléments</b>).</p><p>Que devez-vous faire pour chaque besoin ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Éléments",
   "h": "<p>Le coffre Recovery Services <b>RSV5</b> (France Central) a la suppression réversible standard (14 jours). Nous sommes le 10 du mois.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Élément</th><th>État de la protection</th><th>Dernière sauvegarde</th><th>Remarque</th></tr><tr><td>VM10</td><td>Protection active</td><td>Le 9</td><td>Stratégie quotidienne, 30 jours</td></tr><tr><td>VM11</td><td>Protection arrêtée, données conservées</td><td>Le 1er</td><td>—</td></tr><tr><td>VM12</td><td>Supprimé de façon réversible</td><td>Le 4</td><td>Données supprimées le 5</td></tr><tr><td>VM13</td><td>Protection active</td><td>Le 9</td><td>VM supprimée par erreur le 9 au soir</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Remettre VM13 en service :",
   "o": [
    "Restaurer avec « Créer une VM »",
    "Restaurer avec « Remplacer l'existant »",
    "Annuler la suppression de VM13",
    "Lancer une sauvegarde à la demande"
   ],
   "a": 0
  },
  {
   "l": "Récupérer un seul fichier de VM10 du 9 :",
   "o": [
    "Récupération de fichiers (script)",
    "Restaurer les disques",
    "Créer une VM",
    "Annuler la suppression"
   ],
   "a": 0
  },
  {
   "l": "Reprendre la protection de VM11 :",
   "o": [
    "Reprendre la sauvegarde",
    "Annuler la suppression",
    "Réinscrire l'agent MARS",
    "Créer un nouveau coffre"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM13 :</b> la VM n'existe plus, mais ses points de restauration sont dans le coffre. « Remplacer l'existant » exige que la VM existe encore. On restaure avec <b>Créer une machine virtuelle</b> (ou Restaurer les disques).</li><li><b>Un fichier de VM10 :</b> la <b>récupération de fichiers</b> monte les disques du point de restauration comme des lecteurs, via un script, sans restaurer toute la VM.</li><li><b>VM11 :</b> la protection a été arrêtée avec conservation des données : <b>Reprendre la sauvegarde</b> en choisissant une stratégie.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "RSV5"
  ],
  "title": "RSV5 | Éléments de sauvegarde",
  "menu": [
   "Vue d'ensemble",
   "*Éléments de sauvegarde",
   "Travaux de sauvegarde"
  ],
  "rows": [
   [
    "VM11",
    "Protection arrêtée"
   ],
   [
    "*VM12",
    "Supprimé de façon réversible · 9 jours restants"
   ]
  ]
 },
 "keep": "VM supprimée → Créer une VM. Un fichier → Récupération de fichiers. Protection arrêtée → Reprendre."
},
{
 "id": "D5-208",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Accès (cliquez sur l'onglet <b>Accès</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Accès",
   "h": "<p>L'abonnement Sub1 contient RG1 (VM1 et VM2) et RG2 (l'espace de travail LAW2). VM1 envoie ses journaux à l'espace LAW1, dont le mode de contrôle d'accès est <b>Utiliser les autorisations de ressource ou d'espace de travail</b>. LAW2 est en mode <b>Exiger les autorisations d'espace de travail</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur de surveillance</td><td>Sub1</td></tr><tr><td>User2</td><td>Contributeur de surveillance</td><td>RG1</td></tr><tr><td>User3</td><td>Lecteur</td><td>VM1</td></tr><tr><td>User4</td><td>Lecteur Log Analytics</td><td>LAW2</td></tr><tr><td>User5</td><td>Lecteur</td><td>VM2</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 peut créer une règle d'alerte de métrique sur VM1.",
   "a": 1
  },
  {
   "l": "User2 peut créer une règle d'alerte de métrique sur VM2 et un groupe d'actions dans RG1.",
   "a": 0
  },
  {
   "l": "User3 peut interroger les journaux de VM1 depuis le panneau Journaux de VM1.",
   "a": 0
  },
  {
   "l": "User3 peut interroger toutes les tables de LAW1 depuis l'espace de travail.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User1 : Non.</b> Lecteur de surveillance permet de lire les données et paramètres de supervision, pas de créer des règles.</li><li><b>User2 : Oui.</b> Contributeur de surveillance permet de créer règles d'alerte et groupes d'actions, sans modifier les VM elles-mêmes.</li><li><b>User3 depuis VM1 : Oui.</b> En mode « autorisations de ressource ou d'espace de travail », une requête en <b>contexte de ressource</b> ne renvoie que les données de cette ressource, et le rôle Lecteur sur la VM suffit.</li><li><b>User3 sur tout LAW1 : Non.</b> Il n'a aucun rôle sur l'espace de travail.</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "LAW1"
  ],
  "title": "LAW1 | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "Journaux",
   "*Propriétés"
  ],
  "rows": [
   [
    "*Mode de contrôle d'accès",
    "Utiliser les autorisations de ressource ou d'espace de travail"
   ]
  ]
 },
 "keep": "Contexte de ressource : lire la ressource suffit pour voir ses journaux (si le mode le permet)."
},
{
 "id": "D5-209",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Accès (cliquez sur l'onglet <b>Accès</b>).</p><p>User5 doit consulter les journaux de VM2 envoyés dans LAW2, et rien d'autre de LAW2.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Accès",
   "h": "<p>L'abonnement Sub1 contient RG1 (VM1 et VM2) et RG2 (l'espace de travail LAW2). VM1 envoie ses journaux à l'espace LAW1, dont le mode de contrôle d'accès est <b>Utiliser les autorisations de ressource ou d'espace de travail</b>. LAW2 est en mode <b>Exiger les autorisations d'espace de travail</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur de surveillance</td><td>Sub1</td></tr><tr><td>User2</td><td>Contributeur de surveillance</td><td>RG1</td></tr><tr><td>User3</td><td>Lecteur</td><td>VM1</td></tr><tr><td>User4</td><td>Lecteur Log Analytics</td><td>LAW2</td></tr><tr><td>User5</td><td>Lecteur</td><td>VM2</td></tr></table></div>"
  }
 ],
 "opts": [
  "Rien : le rôle Lecteur sur VM2 suffit en contexte de ressource",
  "Passer LAW2 en mode « autorisations de ressource ou d'espace »",
  "Attribuer à User5 Lecteur Log Analytics sur l'espace LAW2",
  "Attribuer à User5 Lecteur de surveillance sur l'abonnement Sub1"
 ],
 "ans": 1,
 "expl": "<p>LAW2 exige les autorisations d'espace de travail : le contexte de ressource n'y fonctionne pas, et le rôle Lecteur sur VM2 ne suffit pas. En passant LAW2 en mode <b>Utiliser les autorisations de ressource ou d'espace de travail</b>, User5 lit les journaux de VM2 grâce à son rôle sur VM2, sans voir le reste.</p><ul><li>Lecteur Log Analytics ou Lecteur de surveillance donneraient accès à <b>toutes</b> les données de l'espace.</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "LAW2"
  ],
  "title": "LAW2 | Propriétés",
  "menu": [
   "Vue d'ensemble",
   "*Propriétés"
  ],
  "rows": [
   [
    "*Mode de contrôle d'accès",
    "Utiliser les autorisations de ressource ou d'espace de travail"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Accès par ressource = mode « autorisations de ressource ou d'espace de travail »."
},
{
 "id": "D5-210",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Alertes (cliquez sur l'onglet <b>Alertes</b>).</p><p>Quels groupes d'actions sont notifiés dans chaque cas ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Alertes",
   "h": "<p>VM1 est dans RG1, VM3 dans RG2. Les deux groupes de ressources sont dans Sub1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle d'alerte</th><th>Type</th><th>Cible</th><th>Gravité</th><th>Groupe d'actions</th></tr><tr><td>AR1</td><td>Métrique (CPU &gt; 80 %)</td><td>VM1</td><td>Sev2</td><td>AG-Ops</td></tr><tr><td>AR2</td><td>Recherche de journaux</td><td>VM3</td><td>Sev0</td><td>—</td></tr><tr><td>AR3</td><td>Métrique (disque)</td><td>VM1</td><td>Sev0</td><td>AG-Ops</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle de traitement des alertes</th><th>Étendue</th><th>Filtre</th><th>Action</th><th>Planification</th></tr><tr><td>APR1</td><td>RG1</td><td>—</td><td>Supprimer les notifications</td><td>Samedi et dimanche, toute la journée</td></tr><tr><td>APR2</td><td>Sub1</td><td>Gravité = Sev0</td><td>Ajouter le groupe d'actions AG-Ticket</td><td>Toujours</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "AR1 se déclenche un mardi :",
   "o": [
    "Aucun",
    "AG-Ops",
    "AG-Ticket",
    "AG-Ops et AG-Ticket"
   ],
   "a": 1
  },
  {
   "l": "AR2 se déclenche un mardi :",
   "o": [
    "Aucun",
    "AG-Ops",
    "AG-Ticket",
    "AG-Ops et AG-Ticket"
   ],
   "a": 2
  },
  {
   "l": "AR3 se déclenche un mardi :",
   "o": [
    "Aucun",
    "AG-Ops",
    "AG-Ticket",
    "AG-Ops et AG-Ticket"
   ],
   "a": 3
  },
  {
   "l": "AR3 se déclenche un samedi :",
   "o": [
    "Aucun",
    "AG-Ops",
    "AG-Ticket",
    "AG-Ops et AG-Ticket"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>AR1 mardi :</b> APR1 n'est pas actif, APR2 ne vise que Sev0 → son propre groupe, <b>AG-Ops</b>.</li><li><b>AR2 mardi :</b> aucune action dans la règle, mais APR2 (Sev0, étendue Sub1 qui contient VM3) ajoute <b>AG-Ticket</b>.</li><li><b>AR3 mardi :</b> AG-Ops (règle) + AG-Ticket (APR2) → <b>les deux</b>.</li><li><b>AR3 samedi :</b> APR1 supprime les notifications pour RG1. La <b>suppression l'emporte</b> sur l'ajout de groupes d'actions : aucun groupe n'est notifié. L'alerte reste visible dans le portail.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alertes",
   "Règles de traitement des alertes"
  ],
  "title": "Règles de traitement des alertes",
  "menu": [
   "Alertes",
   "Règles d'alerte",
   "*Règles de traitement des alertes"
  ],
  "rows": [
   [
    "*APR1 · RG1",
    "Supprimer les notifications · week-end"
   ],
   [
    "APR2 · Sub1",
    "Ajouter AG-Ticket · Sev0"
   ]
  ]
 },
 "keep": "Règle de traitement : la suppression passe avant l'ajout de groupes d'actions."
},
{
 "id": "D5-211",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Alertes (cliquez sur l'onglet <b>Alertes</b>).</p><p>Le week-end, les alertes Sev0 de RG1 doivent quand même notifier AG-Ticket. Les autres alertes de RG1 doivent rester silencieuses le week-end.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Alertes",
   "h": "<p>VM1 est dans RG1, VM3 dans RG2. Les deux groupes de ressources sont dans Sub1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle d'alerte</th><th>Type</th><th>Cible</th><th>Gravité</th><th>Groupe d'actions</th></tr><tr><td>AR1</td><td>Métrique (CPU &gt; 80 %)</td><td>VM1</td><td>Sev2</td><td>AG-Ops</td></tr><tr><td>AR2</td><td>Recherche de journaux</td><td>VM3</td><td>Sev0</td><td>—</td></tr><tr><td>AR3</td><td>Métrique (disque)</td><td>VM1</td><td>Sev0</td><td>AG-Ops</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle de traitement des alertes</th><th>Étendue</th><th>Filtre</th><th>Action</th><th>Planification</th></tr><tr><td>APR1</td><td>RG1</td><td>—</td><td>Supprimer les notifications</td><td>Samedi et dimanche, toute la journée</td></tr><tr><td>APR2</td><td>Sub1</td><td>Gravité = Sev0</td><td>Ajouter le groupe d'actions AG-Ticket</td><td>Toujours</td></tr></table></div>"
  }
 ],
 "opts": [
  "Donner à APR2 une priorité plus élevée que celle d'APR1",
  "Ajouter à APR1 un filtre Gravité différente de Sev0",
  "Ajouter AG-Ticket comme groupe d'actions dans AR3",
  "Déplacer APR1 dans RG2 et le limiter aux alertes Sev2"
 ],
 "ans": 1,
 "expl": "<p>Les règles de traitement n'ont pas d'ordre de priorité : si une règle de suppression s'applique, la suppression gagne toujours. Il faut donc qu'APR1 <b>ne s'applique plus</b> aux alertes Sev0 : un filtre <b>Gravité ≠ Sev0</b> sur APR1.</p><ul><li>Ajouter AG-Ticket dans AR3 ne sert à rien : la suppression d'APR1 bloque aussi les groupes de la règle.</li><li>Déplacer APR1 hors de RG1 ferait sonner toutes les alertes de RG1 le week-end.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Règles de traitement des alertes",
   "APR1"
  ],
  "title": "APR1 | Modifier",
  "menu": [
   "Étendue",
   "*Filtre",
   "Règles",
   "Planification"
  ],
  "rows": [
   [
    "*Gravité",
    "≠ Sev0"
   ]
  ],
  "btn": "Enregistrer"
 },
 "keep": "Pour sortir des alertes d'une suppression, filtrez la règle de suppression."
},
{
 "id": "D5-212",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Collecte (cliquez sur l'onglet <b>Collecte</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Collecte",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Machine</th><th>Type</th><th>Système</th><th>Agent installé</th></tr><tr><td>VMW1</td><td>VM Azure</td><td>Windows</td><td>Agent Azure Monitor</td></tr><tr><td>VMW2</td><td>VM Azure</td><td>Windows</td><td>Agent Log Analytics (MMA) seul</td></tr><tr><td>VML1</td><td>VM Azure</td><td>Linux</td><td>Agent Azure Monitor</td></tr><tr><td>SRV1</td><td>Serveur local</td><td>Windows</td><td>Agent Azure Connected Machine (Arc) et agent Azure Monitor</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle de collecte de données</th><th>Sources</th><th>Destination</th><th>Ressources associées</th></tr><tr><td>DCR-Win</td><td>Journaux Système et Application, compteurs de performances</td><td>LAW1</td><td>VMW1, VMW2, SRV1</td></tr><tr><td>DCR-Syslog</td><td>Syslog</td><td>LAW1</td><td>VML1, VMW1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "VMW2 envoie ses journaux Système à LAW1 grâce à DCR-Win.",
   "a": 1
  },
  {
   "l": "SRV1 envoie ses journaux Système à LAW1 grâce à DCR-Win.",
   "a": 0
  },
  {
   "l": "VMW1 envoie des messages Syslog à LAW1 grâce à DCR-Syslog.",
   "a": 1
  },
  {
   "l": "VMW1 ne peut pas être associée à deux règles de collecte de données à la fois.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>VMW2 : Non.</b> Les DCR ne s'appliquent qu'à l'<b>agent Azure Monitor</b>. L'ancien agent Log Analytics (MMA, retiré) ne lit pas les DCR.</li><li><b>SRV1 : Oui.</b> Un serveur local géré par Azure Arc, avec l'agent Azure Monitor, s'associe aux DCR comme une VM Azure.</li><li><b>VMW1 en Syslog : Non.</b> Syslog est une source Linux ; une machine Windows n'en produit pas. L'association ne crée aucune donnée.</li><li><b>Deux DCR : Non</b> (l'affirmation est fausse). Une machine peut être associée à plusieurs DCR, et une DCR à plusieurs machines.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Règles de collecte de données",
   "DCR-Win"
  ],
  "title": "DCR-Win | Ressources",
  "menu": [
   "Vue d'ensemble",
   "*Ressources",
   "Sources de données"
  ],
  "rows": [
   [
    "VMW1",
    "Agent Azure Monitor · données reçues"
   ],
   [
    "*VMW2",
    "Aucun agent Azure Monitor"
   ],
   [
    "SRV1",
    "Azure Arc · données reçues"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "DCR = agent Azure Monitor (VM ou serveur Arc). Plusieurs DCR par machine possibles."
},
{
 "id": "D5-213",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Collecte (cliquez sur l'onglet <b>Collecte</b>).</p><p>VMW2 doit envoyer ses journaux à LAW1 avec DCR-Win, et seuls les événements 4625 du journal Sécurité de VMW1 doivent être ajoutés.</p><p>Que devez-vous faire ?</p><p>Pour répondre, sélectionnez les options appropriées dans la zone de réponse.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Collecte",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Machine</th><th>Type</th><th>Système</th><th>Agent installé</th></tr><tr><td>VMW1</td><td>VM Azure</td><td>Windows</td><td>Agent Azure Monitor</td></tr><tr><td>VMW2</td><td>VM Azure</td><td>Windows</td><td>Agent Log Analytics (MMA) seul</td></tr><tr><td>VML1</td><td>VM Azure</td><td>Linux</td><td>Agent Azure Monitor</td></tr><tr><td>SRV1</td><td>Serveur local</td><td>Windows</td><td>Agent Azure Connected Machine (Arc) et agent Azure Monitor</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle de collecte de données</th><th>Sources</th><th>Destination</th><th>Ressources associées</th></tr><tr><td>DCR-Win</td><td>Journaux Système et Application, compteurs de performances</td><td>LAW1</td><td>VMW1, VMW2, SRV1</td></tr><tr><td>DCR-Syslog</td><td>Syslog</td><td>LAW1</td><td>VML1, VMW1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Pour VMW2 :",
   "o": [
    "Installer l'agent Azure Monitor",
    "Recréer DCR-Win dans la région de VMW2",
    "Ajouter VMW2 à DCR-Syslog",
    "Activer les diagnostics de démarrage"
   ],
   "a": 0
  },
  {
   "l": "Pour l'événement 4625 :",
   "o": [
    "Une requête XPath dans une DCR",
    "Un paramètre de diagnostic sur VMW1",
    "Une alerte de journal d'activité",
    "Une transformation dans l'espace LAW1 seule"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VMW2 :</b> l'association existe déjà ; il manque l'<b>agent Azure Monitor</b> (avec une identité managée, que le portail active à l'installation).</li><li><b>4625 :</b> une source « Journaux des événements Windows » dans une DCR, avec une <b>requête XPath</b> du type <code>Security!*[System[(EventID=4625)]]</code>, filtre à la source : seules ces lignes sont envoyées et facturées. Un paramètre de diagnostic ne collecte pas les journaux invités.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Règles de collecte de données",
   "DCR-Win"
  ],
  "title": "DCR-Win | Ressources",
  "menu": [
   "Vue d'ensemble",
   "*Ressources",
   "Sources de données"
  ],
  "rows": [
   [
    "VMW1",
    "Agent Azure Monitor · données reçues"
   ],
   [
    "*VMW2",
    "Aucun agent Azure Monitor"
   ],
   [
    "SRV1",
    "Azure Arc · données reçues"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Filtrer au plus tôt : XPath dans la DCR."
},
{
 "id": "D5-214",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rétention (cliquez sur l'onglet <b>Rétention</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Rétention",
   "h": "<p>Espace de travail <b>LAW1</b>, plafond quotidien : 10 Go.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Table</th><th>Plan</th><th>Rétention interactive</th><th>Rétention totale</th></tr><tr><td>Perf</td><td>Analytics</td><td>30 jours</td><td>30 jours</td></tr><tr><td>SecurityEvent</td><td>Analytics</td><td>90 jours</td><td>2 ans</td></tr><tr><td>AppTraces</td><td>Basic</td><td>30 jours</td><td>1 an</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Une requête KQL normale peut lire des lignes de SecurityEvent vieilles d'un an.",
   "a": 1
  },
  {
   "l": "Les lignes de Perf vieilles de 45 jours sont encore stockées.",
   "a": 1
  },
  {
   "l": "Vous pouvez porter la rétention interactive de SecurityEvent à 2 ans.",
   "a": 0
  },
  {
   "l": "Quand le plafond de 10 Go est atteint, l'ingestion de la plupart des données s'arrête jusqu'à la réinitialisation.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>SecurityEvent à 1 an : Non.</b> Au-delà de 90 jours, les données sont en <b>rétention à long terme</b> : elles se lisent par une tâche de recherche (search job) ou une restauration, pas par une requête interactive.</li><li><b>Perf à 45 jours : Non.</b> Rétention totale de 30 jours : les données sont supprimées.</li><li><b>Interactive à 2 ans : Oui.</b> Une table Analytics accepte jusqu'à 730 jours de rétention interactive (et jusqu'à 12 ans au total).</li><li><b>Plafond : Oui.</b> Une fois atteint, l'ingestion s'arrête jusqu'à l'heure de réinitialisation (sauf quelques types de données exemptés). C'est un garde-fou de coût qui fait perdre des données.</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "LAW1"
  ],
  "title": "LAW1 | Tables",
  "menu": [
   "Vue d'ensemble",
   "Journaux",
   "*Tables",
   "Utilisation et coûts estimés"
  ],
  "rows": [
   [
    "Perf",
    "Analytics · 30 j / 30 j"
   ],
   [
    "*SecurityEvent",
    "Analytics · 90 j / 2 ans"
   ]
  ]
 },
 "keep": "Interactif = requêtes ; long terme = tâche de recherche ou restauration. Plafond atteint = données perdues."
},
{
 "id": "D5-215",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rétention (cliquez sur l'onglet <b>Rétention</b>).</p><p>Un auditeur demande les échecs de connexion d'un compte précis survenus il y a 14 mois, extraits de SecurityEvent. La solution doit limiter le coût.</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Rétention",
   "h": "<p>Espace de travail <b>LAW1</b>, plafond quotidien : 10 Go.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Table</th><th>Plan</th><th>Rétention interactive</th><th>Rétention totale</th></tr><tr><td>Perf</td><td>Analytics</td><td>30 jours</td><td>30 jours</td></tr><tr><td>SecurityEvent</td><td>Analytics</td><td>90 jours</td><td>2 ans</td></tr><tr><td>AppTraces</td><td>Basic</td><td>30 jours</td><td>1 an</td></tr></table></div>"
  }
 ],
 "opts": [
  "Lancer une tâche de recherche sur SecurityEvent",
  "Porter la rétention interactive à 2 ans, puis interroger",
  "Passer SecurityEvent au plan Basic et l'interroger",
  "Restaurer tout l'espace LAW1 dans un nouvel espace"
 ],
 "ans": 0,
 "expl": "<p>Une <b>tâche de recherche</b> parcourt la rétention à long terme et copie les seules lignes trouvées dans une nouvelle table (suffixe _SRCH), qu'on interroge ensuite normalement. C'est l'outil prévu pour retrouver quelques lignes anciennes.</p><ul><li>Allonger la rétention interactive ne remonte pas les données déjà passées en long terme et augmente le coût durable.</li><li>Le plan Basic ne rend pas les vieilles données interrogeables.</li><li>Une restauration porte sur une table et une période, pas sur l'espace entier, et coûte plus cher pour un besoin aussi ciblé.</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "LAW1"
  ],
  "title": "LAW1 | Tables",
  "menu": [
   "Vue d'ensemble",
   "Journaux",
   "*Tables",
   "Utilisation et coûts estimés"
  ],
  "rows": [
   [
    "Perf",
    "Analytics · 30 j / 30 j"
   ],
   [
    "*SecurityEvent",
    "Analytics · 90 j / 2 ans"
   ]
  ]
 },
 "keep": "Quelques lignes anciennes : tâche de recherche. Une période entière à analyser : restauration."
},
{
 "id": "D5-216",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Sauvegarde (cliquez sur l'onglet <b>Sauvegarde</b>).</p><p>Disk3 doit être sauvegardé toutes les 4 heures, sans sauvegarder le reste de VM3.</p><p>Que devez-vous configurer ?</p>",
 "docs": [
  {
   "t": "Sauvegarde",
   "h": "<p>Régions jumelées : France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Région</th><th>Système</th><th>Particularité</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Disque de données Disk3 (disque managé)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Coffre</th><th>Type</th><th>Région</th><th>Redondance</th><th>Restauration interrégion</th><th>Éléments protégés</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Activée</td><td>VM1 (stratégie quotidienne, 30 jours), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>Aucun</td></tr><tr><td>BV1</td><td>Coffre de sauvegarde (Backup vault)</td><td>France Central</td><td>LRS</td><td>—</td><td>Aucun</td></tr></table></div><p>Le compte de stockage <b>stdata</b> (France Central) contient le partage Azure Files share1 et des conteneurs de blobs.</p>"
  }
 ],
 "opts": [
  "Une sauvegarde de disque dans BV1, stratégie toutes les 4 heures",
  "Une stratégie améliorée de VM dans RSV1, en excluant les autres disques",
  "Une stratégie standard de VM dans RSV1, lancée six fois par jour",
  "L'agent MARS dans VM3, limité au volume de Disk3"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Disk Backup</b>, dans un coffre de sauvegarde de la même région (BV1), sauvegarde un disque managé par instantanés incrémentiels, avec une fréquence possible toutes les 1, 2, 4, 6, 8 ou 12 heures, sans agent.</p><ul><li>La sauvegarde de VM exclut des disques, mais le disque du système d'exploitation reste toujours inclus : ce n'est pas « Disk3 seul ».</li><li>Une stratégie standard est quotidienne (une sauvegarde par jour).</li><li>MARS sauvegarde des fichiers et dossiers, pas un disque managé.</li></ul>",
 "portal": {
  "path": [
   "Coffres de sauvegarde",
   "BV1"
  ],
  "title": "BV1 | Stratégies de sauvegarde",
  "menu": [
   "Vue d'ensemble",
   "Instances de sauvegarde",
   "*Stratégies de sauvegarde"
  ],
  "rows": [
   [
    "*Disques Azure",
    "Toutes les 4 heures · rétention 7 jours"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Un disque seul, plusieurs fois par jour : Azure Disk Backup (coffre de sauvegarde)."
},
{
 "id": "D5-217",
 "dom": 5,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Accès (cliquez sur l'onglet <b>Accès</b>).</p><p>User1 doit pouvoir créer et modifier des règles d'alerte et des groupes d'actions dans tout Sub1, sans pouvoir modifier les VM. Vous devez respecter le principe du moindre privilège.</p><p>Quelles <b>deux</b> attributions répondent chacune au besoin ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Accès",
   "h": "<p>L'abonnement Sub1 contient RG1 (VM1 et VM2) et RG2 (l'espace de travail LAW2). VM1 envoie ses journaux à l'espace LAW1, dont le mode de contrôle d'accès est <b>Utiliser les autorisations de ressource ou d'espace de travail</b>. LAW2 est en mode <b>Exiger les autorisations d'espace de travail</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Utilisateur</th><th>Rôle</th><th>Étendue</th></tr><tr><td>User1</td><td>Lecteur de surveillance</td><td>Sub1</td></tr><tr><td>User2</td><td>Contributeur de surveillance</td><td>RG1</td></tr><tr><td>User3</td><td>Lecteur</td><td>VM1</td></tr><tr><td>User4</td><td>Lecteur Log Analytics</td><td>LAW2</td></tr><tr><td>User5</td><td>Lecteur</td><td>VM2</td></tr></table></div>"
  }
 ],
 "opts": [
  "Contributeur de surveillance sur Sub1, à la place de Lecteur de surveillance",
  "Contributeur de surveillance sur Sub1, en plus de Lecteur de surveillance",
  "Contributeur Log Analytics sur LAW1 et LAW2, en plus du rôle actuel",
  "Contributeur de machines virtuelles sur RG1 et RG2, en plus du rôle actuel"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p><b>Contributeur de surveillance</b> sur Sub1 donne la création des règles d'alerte et des groupes d'actions sur tout l'abonnement, sans écriture sur les VM. Qu'il remplace Lecteur de surveillance ou s'y ajoute, les droits effectifs sont les mêmes (Contributeur de surveillance inclut la lecture).</p><ul><li>Contributeur Log Analytics porte sur les espaces de travail (et la configuration de collecte), pas sur les règles d'alerte de tout l'abonnement.</li><li>Contributeur de machines virtuelles permettrait de modifier les VM.</li></ul>",
 "portal": {
  "path": [
   "Abonnements",
   "Sub1"
  ],
  "title": "Sub1 | Contrôle d'accès (IAM)",
  "menu": [
   "Vue d'ensemble",
   "*Contrôle d'accès (IAM)"
  ],
  "rows": [
   [
    "*User1",
    "Contributeur de surveillance"
   ]
  ],
  "btn": "+ Ajouter"
 },
 "keep": "Alertes et groupes d'actions sans toucher aux ressources : Contributeur de surveillance."
},
{
 "id": "D5-218",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Alertes (cliquez sur l'onglet <b>Alertes</b>).</p><p>Pour chacune des affirmations suivantes, sélectionnez Oui si elle est vraie. Sinon, sélectionnez Non.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Alertes",
   "h": "<p>VM1 est dans RG1, VM3 dans RG2. Les deux groupes de ressources sont dans Sub1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle d'alerte</th><th>Type</th><th>Cible</th><th>Gravité</th><th>Groupe d'actions</th></tr><tr><td>AR1</td><td>Métrique (CPU &gt; 80 %)</td><td>VM1</td><td>Sev2</td><td>AG-Ops</td></tr><tr><td>AR2</td><td>Recherche de journaux</td><td>VM3</td><td>Sev0</td><td>—</td></tr><tr><td>AR3</td><td>Métrique (disque)</td><td>VM1</td><td>Sev0</td><td>AG-Ops</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Règle de traitement des alertes</th><th>Étendue</th><th>Filtre</th><th>Action</th><th>Planification</th></tr><tr><td>APR1</td><td>RG1</td><td>—</td><td>Supprimer les notifications</td><td>Samedi et dimanche, toute la journée</td></tr><tr><td>APR2</td><td>Sub1</td><td>Gravité = Sev0</td><td>Ajouter le groupe d'actions AG-Ticket</td><td>Toujours</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Le samedi, une alerte AR1 déclenchée apparaît dans la liste des alertes du portail.",
   "a": 0
  },
  {
   "l": "Si VM1 est déplacée dans RG2, APR1 ne s'applique plus aux alertes de VM1.",
   "a": 0
  },
  {
   "l": "AR2 doit avoir un groupe d'actions pour pouvoir se déclencher.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Visible le samedi : Oui.</b> Une règle de suppression ne bloque que les <b>notifications</b> ; l'alerte est créée et visible.</li><li><b>VM1 dans RG2 : Oui.</b> L'étendue d'une règle de traitement porte sur la ressource cible de l'alerte. Hors de RG1, VM1 n'est plus couverte par APR1.</li><li><b>Groupe d'actions obligatoire : Non.</b> Une règle sans groupe d'actions se déclenche quand même ; ici, APR2 lui ajoute d'ailleurs AG-Ticket.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alertes"
  ],
  "title": "Monitor | Alertes",
  "menu": [
   "*Alertes",
   "Règles d'alerte",
   "Règles de traitement des alertes"
  ],
  "rows": [
   [
    "*AR1 · VM1 · Sev2",
    "Déclenchée · notifications supprimées (APR1)"
   ]
  ]
 },
 "keep": "Suppression = pas de notification, mais l'alerte existe."
},
{
 "id": "D5-219",
 "dom": 5,
 "type": "single",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Éléments (cliquez sur l'onglet <b>Éléments</b>).</p><p>VM10 vient d'être corrompue par une mise à jour. Vous devez la remettre dans l'état du 9 en gardant la même VM (nom, interface réseau, adresse IP).</p><p>Que devez-vous faire ?</p>",
 "docs": [
  {
   "t": "Éléments",
   "h": "<p>Le coffre Recovery Services <b>RSV5</b> (France Central) a la suppression réversible standard (14 jours). Nous sommes le 10 du mois.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Élément</th><th>État de la protection</th><th>Dernière sauvegarde</th><th>Remarque</th></tr><tr><td>VM10</td><td>Protection active</td><td>Le 9</td><td>Stratégie quotidienne, 30 jours</td></tr><tr><td>VM11</td><td>Protection arrêtée, données conservées</td><td>Le 1er</td><td>—</td></tr><tr><td>VM12</td><td>Supprimé de façon réversible</td><td>Le 4</td><td>Données supprimées le 5</td></tr><tr><td>VM13</td><td>Protection active</td><td>Le 9</td><td>VM supprimée par erreur le 9 au soir</td></tr></table></div>"
  }
 ],
 "opts": [
  "Restaurer le point du 9 avec l'option Remplacer l'existant",
  "Restaurer le point du 9 avec l'option Créer une VM",
  "Annuler la suppression de VM10 dans le coffre RSV5",
  "Lancer la récupération de fichiers sur le point du 9"
 ],
 "ans": 0,
 "expl": "<p><b>Remplacer l'existant</b> remplace les disques de la VM existante par ceux du point de restauration et garde la VM, son interface et sa configuration réseau. Il faut que la VM existe encore, ce qui est le cas.</p><ul><li>Créer une VM produirait une nouvelle VM (autre nom, autre interface).</li><li>Annuler la suppression concerne des données de sauvegarde supprimées, pas une VM corrompue.</li><li>La récupération de fichiers ne rend que des fichiers.</li></ul>",
 "portal": {
  "path": [
   "Coffres Recovery Services",
   "RSV5"
  ],
  "title": "RSV5 | Éléments de sauvegarde",
  "menu": [
   "Vue d'ensemble",
   "*Éléments de sauvegarde",
   "Travaux de sauvegarde"
  ],
  "rows": [
   [
    "VM11",
    "Protection arrêtée"
   ],
   [
    "*VM12",
    "Supprimé de façon réversible · 9 jours restants"
   ]
  ]
 },
 "keep": "Garder la même VM : Remplacer l'existant (la VM doit exister)."
},
{
 "id": "D5-220",
 "dom": 5,
 "type": "multi",
 "stem": "<p>Vous disposez de l'environnement présenté dans le document Rétention (cliquez sur l'onglet <b>Rétention</b>).</p><p>Le coût d'ingestion de LAW1 a doublé à cause de la table AppTraces, consultée seulement en cas d'incident. Les requêtes d'incident doivent rester possibles sur 30 jours.</p><p>Quelles <b>deux</b> actions réduisent le coût ?</p><p>Chaque réponse correcte présente une solution complète.</p><p>REMARQUE : chaque sélection correcte vaut un point.</p>",
 "docs": [
  {
   "t": "Rétention",
   "h": "<p>Espace de travail <b>LAW1</b>, plafond quotidien : 10 Go.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Table</th><th>Plan</th><th>Rétention interactive</th><th>Rétention totale</th></tr><tr><td>Perf</td><td>Analytics</td><td>30 jours</td><td>30 jours</td></tr><tr><td>SecurityEvent</td><td>Analytics</td><td>90 jours</td><td>2 ans</td></tr><tr><td>AppTraces</td><td>Basic</td><td>30 jours</td><td>1 an</td></tr></table></div>"
  }
 ],
 "opts": [
  "Filtrer les traces inutiles par une transformation à l'ingestion",
  "Réduire le volume de traces envoyé par l'application (niveau de journal)",
  "Augmenter la rétention interactive d'AppTraces à 90 jours",
  "Repasser AppTraces au plan Analytics pour profiter du plafond"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>Le coût d'ingestion dépend du <b>volume</b> ingéré. Une <b>transformation</b> qui supprime les lignes inutiles avant le stockage, ou une <b>baisse du niveau de journalisation</b> de l'application, réduisent ce volume.</p><ul><li>Allonger la rétention ajoute du coût.</li><li>AppTraces est déjà en plan Basic, moins cher à l'ingestion qu'Analytics ; repasser en Analytics augmenterait le coût. Le plafond quotidien est un garde-fou, pas une remise.</li></ul>",
 "portal": {
  "path": [
   "Espaces de travail Log Analytics",
   "LAW1"
  ],
  "title": "LAW1 | Tables",
  "menu": [
   "Vue d'ensemble",
   "Journaux",
   "*Tables",
   "Utilisation et coûts estimés"
  ],
  "rows": [
   [
    "Perf",
    "Analytics · 30 j / 30 j"
   ],
   [
    "*SecurityEvent",
    "Analytics · 90 j / 2 ans"
   ]
  ]
 },
 "keep": "Moins payer l'ingestion = ingérer moins (filtrer, réduire la verbosité) ou un plan moins cher."
}
);
