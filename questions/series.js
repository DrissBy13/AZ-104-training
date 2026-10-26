/* Séries de questions Oui/Non (même scénario, pas de retour en arrière) */
AZ.series.push(
{
 "id": "S001",
 "dom": 4,
 "title": "NSG et accès HTTPS à VM1",
 "scenario": "<p>Vous disposez d'un réseau virtuel nommé VNet1 qui contient un sous-réseau nommé Subnet1. Subnet1 n'a <b>aucun</b> groupe de sécurité réseau associé.</p><p>Subnet1 contient une machine virtuelle nommée VM1 qui exécute Windows Server et héberge un site web. VM1 possède une adresse IP publique de SKU Standard. Un groupe de sécurité réseau nommé NSG1, qui ne contient que les règles par défaut, est associé à l'interface réseau de VM1.</p><p>Des utilisateurs sur Internet doivent accéder au site web de VM1 en HTTPS (TCP 443). Actuellement, la connexion échoue.</p>",
 "items": [
  {
   "solution": "<p><b>Solution :</b> vous ajoutez à NSG1 une règle de sécurité de trafic entrant qui autorise TCP 443 depuis la source Internet, avec une priorité de 100.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 0,
   "expl": "<b>Oui.</b> Seul NSG1 filtre (Subnet1 n'a pas de NSG). Sa règle par défaut refuse l'entrée depuis Internet ; une règle « Autoriser 443 depuis Internet » en priorité 100 passe avant."
  },
  {
   "solution": "<p><b>Solution :</b> vous ajoutez à NSG1 une règle de sécurité de trafic <b>sortant</b> qui autorise TCP 443 vers la destination Internet, avec une priorité de 100.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<b>Non.</b> Le blocage est en <b>entrée</b>. Et le NSG est avec état : les réponses repartent sans règle sortante."
  },
  {
   "solution": "<p><b>Solution :</b> vous créez un groupe de sécurité réseau nommé NSG2, qui autorise en entrée TCP 443 depuis Internet, et vous l'associez à Subnet1.</p><p>Cette solution répond-elle à l'objectif ?</p>",
   "ans": 1,
   "expl": "<b>Non.</b> Sous-réseau ET interface : il faut l'accord des deux. NSG1 refuse toujours l'entrée depuis Internet."
  }
 ]
}
);
