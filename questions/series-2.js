/* Séries de questions Oui/Non (lot 2 : S002 à S010) */
AZ.series.push(
{
 id: "S002", dom: 1, title: "Gestion des VM de RG1",
 scenario: "<p>Votre abonnement Azure contient le groupe de ressources RG1, qui contient des machines virtuelles, des réseaux virtuels et des comptes de stockage.</p><p>User1 doit pouvoir créer, démarrer, arrêter et supprimer les machines virtuelles de RG1. User1 ne doit pas pouvoir modifier les réseaux virtuels ni les comptes de stockage. La solution doit respecter le principe du privilège minimum.</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous attribuez à User1 le rôle Contributeur de machines virtuelles sur RG1.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> Contributeur de machines virtuelles gère les VM, sans droit de modifier les réseaux virtuels ni les comptes de stockage (il peut seulement joindre une interface réseau à un sous-réseau existant), et sans gérer les accès." },
  { solution: "<p><b>Solution :</b> vous attribuez à User1 le rôle Contributeur sur RG1.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Contributeur permet de gérer <b>toutes</b> les ressources de RG1, y compris les réseaux virtuels et les comptes de stockage." },
  { solution: "<p><b>Solution :</b> vous attribuez à User1 le rôle Contributeur de machines virtuelles sur l'abonnement.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Le rôle est le bon, mais l'étendue (l'abonnement) dépasse RG1 : le principe du privilège minimum n'est pas respecté." },
  { solution: "<p><b>Solution :</b> vous attribuez à User1 le rôle Administrateur général de Microsoft Entra ID.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> C'est un rôle de l'annuaire, qui ne donne aucun accès aux ressources Azure par défaut, et qui est beaucoup trop privilégié." }
 ]
},
{
 id: "S003", dom: 2, title: "Récupération des blobs supprimés",
 scenario: "<p>Vous disposez d'un compte de stockage universel v2 nommé storage1 qui contient le conteneur docs.</p><p>Les utilisateurs doivent pouvoir supprimer des blobs de docs. Vous devez pouvoir restaurer tout blob supprimé au cours des 14 derniers jours.</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous activez la suppression réversible pour les objets blob, avec une rétention de 14 jours.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> Les blobs supprimés sont conservés 14 jours et peuvent être restaurés (annuler la suppression)." },
  { solution: "<p><b>Solution :</b> vous activez la suppression réversible pour les conteneurs, avec une rétention de 14 jours.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Elle ne protège que contre la suppression d'un <b>conteneur</b> entier, pas d'un blob isolé." },
  { solution: "<p><b>Solution :</b> vous configurez sur docs une stratégie de rétention temporelle de 14 jours.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Les blobs deviendraient immuables : les utilisateurs ne pourraient plus les supprimer pendant 14 jours, ce qui ne respecte pas l'exigence." },
  { solution: "<p><b>Solution :</b> vous créez une règle de gestion du cycle de vie qui déplace les blobs vers le niveau Froid après 14 jours.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Le cycle de vie déplace ou supprime des blobs ; il ne permet pas de récupérer un blob supprimé." }
 ]
},
{
 id: "S004", dom: 3, title: "Mise à l'échelle de WebApp1",
 scenario: "<p>Vous disposez de l'application web WebApp1, hébergée dans un plan App Service.</p><p>WebApp1 doit passer automatiquement de 2 à 5 instances quand le CPU moyen dépasse 70 %, et revenir à 2 instances quand la charge baisse. La solution doit réduire les coûts au maximum.</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous utilisez un plan Standard S1 et configurez une mise à l'échelle automatique personnalisée (minimum 2, maximum 5) avec une règle d'augmentation et une règle de diminution basées sur le CPU.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> Standard est le niveau le moins cher qui propose la mise à l'échelle automatique, et les deux règles assurent la montée et la descente." },
  { solution: "<p><b>Solution :</b> vous utilisez un plan De base B1 et réglez manuellement le nombre d'instances à 5.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Le niveau De base n'a pas de mise à l'échelle automatique, et 5 instances en permanence coûtent plus cher." },
  { solution: "<p><b>Solution :</b> vous utilisez un plan Premium v3 P3v3 avec une seule instance.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> C'est une mise à l'échelle verticale, plus chère, et le nombre d'instances ne varie pas." }
 ]
},
{
 id: "S005", dom: 4, title: "Connectivité entre spokes",
 scenario: "<p>Vous disposez de trois réseaux virtuels : VNet-Hub, VNet1 et VNet3. VNet1 et VNet3 sont appairés uniquement à VNet-Hub. Aucune appliance virtuelle ni table de routage n'existe. Les espaces d'adressage ne se chevauchent pas.</p><p>VM1 (VNet1) doit communiquer avec VM3 (VNet3).</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous créez un appairage entre VNet1 et VNet3.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> Un appairage direct permet la communication entre les deux réseaux." },
  { solution: "<p><b>Solution :</b> vous activez « Autoriser le transit de passerelle » sur les appairages de VNet-Hub.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Ce réglage concerne l'utilisation d'une passerelle VPN ou ExpressRoute du hub. Il ne rend pas l'appairage transitif." },
  { solution: "<p><b>Solution :</b> vous ajoutez à un NSG de VNet3 une règle qui autorise tout le trafic venant de VNet1.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Il n'existe aucun chemin réseau entre VNet1 et VNet3 : l'appairage n'est pas transitif. Un NSG filtre, il ne crée pas de route." },
  { solution: "<p><b>Solution :</b> vous déployez un Pare-feu Azure dans VNet-Hub, créez dans VNet1 et VNet3 des tables de routage vers le pare-feu, activez « Autoriser le trafic transféré » et créez une règle de réseau qui autorise le trafic.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> C'est l'architecture hub-and-spoke classique : le pare-feu du hub route (et filtre) le trafic entre spokes." }
 ]
},
{
 id: "S006", dom: 5, title: "Alerte sur la suppression de VM",
 scenario: "<p>Votre abonnement Azure contient 50 machines virtuelles.</p><p>L'équipe d'exploitation doit recevoir un e-mail chaque fois qu'une machine virtuelle est supprimée.</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous créez une règle d'alerte de journal d'activité sur l'opération « Supprimer une machine virtuelle », avec un groupe d'actions qui envoie un e-mail.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> La suppression est une opération du plan de contrôle, tracée dans le journal d'activité." },
  { solution: "<p><b>Solution :</b> vous créez une alerte de métrique sur la métrique Percentage CPU de chaque VM, avec un seuil de 0.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Une VM supprimée n'émet plus de métrique : l'alerte ne se déclenche pas de façon fiable, et ce n'est pas la bonne source." },
  { solution: "<p><b>Solution :</b> vous créez un paramètre de diagnostic du journal d'activité vers un compte de stockage.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Il archive le journal, mais n'envoie aucune notification." }
 ]
},
{
 id: "S007", dom: 3, title: "Disponibilité de l'application web",
 scenario: "<p>Vous déployez une application web sur des machines virtuelles dans la région France Central, derrière un équilibreur de charge Standard.</p><p>L'application doit rester disponible si un centre de données entier de la région tombe en panne.</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous déployez trois VM réparties dans les zones de disponibilité 1, 2 et 3.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> Chaque zone est un centre de données distinct : la perte d'une zone laisse deux VM disponibles (SLA 99,99 %)." },
  { solution: "<p><b>Solution :</b> vous déployez trois VM dans un groupe à haute disponibilité avec 3 domaines d'erreur.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Un groupe à haute disponibilité reste dans un seul centre de données : il protège contre la panne d'un rack, pas d'un centre de données." },
  { solution: "<p><b>Solution :</b> vous déployez un groupe de machines virtuelles identiques de 3 instances, toutes dans la zone 1.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Toutes les instances sont dans la même zone : la perte de cette zone arrête l'application." },
  { solution: "<p><b>Solution :</b> vous déployez un groupe de machines virtuelles identiques de 3 instances réparties sur les zones 1, 2 et 3.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> Le groupe identique réparti sur trois zones survit à la perte d'une zone." }
 ]
},
{
 id: "S008", dom: 2, title: "Accès privé à Azure Files",
 scenario: "<p>Vous disposez d'un compte de stockage nommé storage2 qui contient le partage de fichiers share1. Votre site local est relié à VNet1 par un VPN site à site.</p><p>Les serveurs du site local doivent accéder à share1 par une adresse IP privée, sans passer par Internet.</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous créez dans VNet1 un point de terminaison privé pour le service file de storage2 et configurez la résolution DNS de privatelink.file.core.windows.net pour le site local.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> Le point de terminaison privé donne une adresse privée au service file, joignable par le VPN, et le DNS fait pointer le nom vers cette adresse." },
  { solution: "<p><b>Solution :</b> vous activez un point de terminaison de service Microsoft.Storage sur le GatewaySubnet de VNet1.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Les points de terminaison de service ne s'appliquent pas au trafic venant du site local, et le compte garde son adresse publique." },
  { solution: "<p><b>Solution :</b> vous ajoutez l'adresse IP publique du site local dans le pare-feu de storage2.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Le trafic passerait toujours par Internet, vers l'adresse publique du compte." }
 ]
},
{
 id: "S009", dom: 1, title: "Région autorisée pour les ressources",
 scenario: "<p>Votre organisation possède le groupe d'administration MG-Corp, qui contient 10 abonnements. De nouveaux abonnements y seront ajoutés.</p><p>Vous devez empêcher la création de ressources en dehors de la région France Central dans tous les abonnements de MG-Corp, actuels et futurs.</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous attribuez à MG-Corp la stratégie intégrée Emplacements autorisés avec la valeur France Central.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> La stratégie (effet Deny) s'applique par héritage à tous les abonnements de MG-Corp, y compris les futurs." },
  { solution: "<p><b>Solution :</b> vous attribuez la stratégie Emplacements autorisés à chacun des 10 abonnements existants.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Les abonnements ajoutés plus tard ne seraient pas couverts." },
  { solution: "<p><b>Solution :</b> vous appliquez un verrou Lecture seule à MG-Corp.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> On n'applique pas de verrou à un groupe d'administration, et un verrou bloquerait toutes les créations, pas seulement celles hors de France Central." },
  { solution: "<p><b>Solution :</b> vous attribuez à MG-Corp la stratégie Emplacements autorisés avec l'application de la stratégie Désactivée.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Avec l'application désactivée (DoNotEnforce), la conformité est évaluée mais rien n'est bloqué." }
 ]
},
{
 id: "S010", dom: 5, title: "Restauration d'un fichier supprimé",
 scenario: "<p>La machine virtuelle VM1 exécute Windows Server. Elle est sauvegardée chaque nuit par Azure Backup dans le coffre Vault1.</p><p>Un utilisateur a supprimé hier un fichier sur le disque de données de VM1. Vous devez récupérer ce fichier sans modifier ni arrêter VM1.</p>",
 items: [
  { solution: "<p><b>Solution :</b> vous utilisez la Récupération de fichiers, exécutez le script sur VM1 et copiez le fichier depuis le lecteur monté.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> La récupération de fichiers monte les disques du point de récupération sans toucher à la VM." },
  { solution: "<p><b>Solution :</b> vous restaurez VM1 avec l'option Remplacer l'existant.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 1,
    expl: "<b>Non.</b> Cette option remplace les disques de VM1 (et l'arrête pendant l'opération) : toutes les modifications depuis la sauvegarde seraient perdues." },
  { solution: "<p><b>Solution :</b> vous restaurez les disques dans un groupe de ressources temporaire, attachez le disque de données restauré à une autre VM et copiez le fichier.</p><p>Cette solution répond-elle à l'objectif ?</p>", ans: 0,
    expl: "<b>Oui.</b> C'est plus long que la récupération de fichiers, mais cela fonctionne sans modifier VM1." }
 ]
}
);
