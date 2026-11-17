/* Domain 4: networking (batch H: D4-411 to D4-420, long scenarios) */
AZ.questions.push(
{
 "id": "D4-411",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Adventure Works manages 60 Windows and Linux VMs spread across VNet-Hub and VNet-Spoke, which is peered with the hub. No VM has a public IP address. You deploy Azure Bastion in VNet-Hub.</p><p>Needs:</p><ul><li>1. Windows admins want to open sessions from the Remote Desktop client on their computer (mstsc), not in the browser;</li><li>2. a contractor with no Azure account must be able to connect to VM-Erp for one week, through a URL;</li><li>3. audit requires video recording of sessions to a storage account.</li></ul><p>VNet-Hub still has the free ranges 10.0.10.0/24 and 10.0.11.0/28.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Bastion tier:",
   "o": [
    "Developer",
    "Basic",
    "Standard",
    "Premium"
   ],
   "a": 3
  },
  {
   "l": "AzureBastionSubnet:",
   "o": [
    "10.0.11.0/28",
    "A /26 carved from 10.0.10.0/24",
    "A subnet in VNet-Spoke",
    "The VMs' subnet"
   ],
   "a": 1
  },
  {
   "l": "For VNet-Spoke VMs:",
   "o": [
    "A second Bastion in VNet-Spoke",
    "Nothing: Bastion reaches VMs in peered networks",
    "Enable gateway transit",
    "An NSG rule from Internet on 3389"
   ],
   "a": 1
  },
  {
   "l": "Option for need 1:",
   "o": [
    "Shareable link",
    "Native client support",
    "IP-based connection",
    "Copy/paste"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Tier.</b> The native client and shareable link need at least Standard, but <b>session recording</b> only exists in <b>Premium</b>: the most demanding need sets the tier.<b>Subnet.</b> AzureBastionSubnet must be at least /26; the free /28 is too small.<b>Spoke.</b> Bastion connects to VMs in peered networks, with no second deployment.<b>Native client.</b> The “Native client support” option enables az network bastion rdp, which launches mstsc. The shareable link (need 2) is also enabled, but it's a different option.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Bastion tier",
    "Premium"
   ],
   [
    "AzureBastionSubnet",
    "A /26 carved from 10.0.10.0/24"
   ],
   [
    "For VNet-Spoke VMs",
    "Nothing: Bastion reaches VMs in peered networks"
   ],
   [
    "Option for need 1",
    "Native client support"
   ]
  ]
 },
 "keep": "Bastion: native client and shareable link = Standard; recording = Premium; /26 minimum; peered VNets covered."
},
{
 "id": "D4-412",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You are designing VNet-Prod for a new application in France Central. The addressing plan must be final, because the headquarters network team reserves ranges on its routers.</p><ul><li>Subnet-App hosts 72 VMs today, with no planned growth.</li><li>VNet-Prod will host an Azure Firewall.</li><li>VNet-Prod's gateway will carry both an ExpressRoute circuit and a backup site-to-site VPN.</li><li>VNet1, already peered with VNet2, is short of addresses: you add the 10.21.0.0/16 space to it. VNet2 VMs can't reach the new VMs in 10.21.0.0/16.</li></ul><p>What should you choose or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Subnet-App:",
   "o": [
    "/26",
    "/25",
    "/24",
    "/27"
   ],
   "a": 1
  },
  {
   "l": "AzureFirewallSubnet:",
   "o": [
    "/28",
    "/27",
    "/26",
    "/29"
   ],
   "a": 2
  },
  {
   "l": "GatewaySubnet:",
   "o": [
    "/29",
    "/28",
    "/27 or larger",
    "/30"
   ],
   "a": 2
  },
  {
   "l": "For VNet2:",
   "o": [
    "Delete and recreate the peering",
    "Sync the peering on the VNet2 side",
    "Restart VNet2's VMs",
    "Add a route to 10.21.0.0/16"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Subnet-App.</b> Azure reserves 5 addresses per subnet: 72 + 5 = 77. A /26 offers only 64, a /25 offers 128: it's the smallest that fits.<b>Firewall.</b> AzureFirewallSubnet must be at least /26.<b>Gateway.</b> For ExpressRoute and VPN to coexist, GatewaySubnet must be /27 or larger (Microsoft recommends /27 in all cases for headroom).<b>Peering.</b> After changing a peered network's address space, the peering on the other side moves to “Sync required”. Just sync it, with no outage or recreation.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Subnet-App",
    "/25"
   ],
   [
    "AzureFirewallSubnet",
    "/26"
   ],
   [
    "GatewaySubnet",
    "/27 or larger"
   ],
   [
    "For VNet2",
    "Sync the peering on the VNet2 side"
   ]
  ]
 },
 "keep": "5 reserved addresses per subnet. Firewall /26, gateway /27, Bastion /26. Changed space = sync the remote peering."
},
{
 "id": "D4-413",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Subnet-App (VNet-Prod, 10.0.0.0/16) is associated with route table RT-App:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Prefix</th><th>Next hop type</th></tr><tr><td>0.0.0.0/0</td><td>Virtual appliance 10.0.1.4</td></tr><tr><td>10.50.0.0/16</td><td>None</td></tr></table></div><p>Gateway route propagation is enabled. VNet-Prod is peered with VNet-Data (10.60.0.0/16). Its VPN gateway learns the route 10.50.1.0/24 to the Nantes site over BGP.</p><p>For each destination of a packet sent by a Subnet-App VM, what is the next hop?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "10.50.1.20:",
   "o": [
    "Virtual appliance 10.0.1.4",
    "Virtual network gateway",
    "Virtual network peering",
    "None (packet dropped)",
    "Internet"
   ],
   "a": 1
  },
  {
   "l": "10.50.2.20:",
   "o": [
    "Virtual appliance 10.0.1.4",
    "Virtual network gateway",
    "Virtual network peering",
    "None (packet dropped)",
    "Internet"
   ],
   "a": 3
  },
  {
   "l": "10.60.3.4:",
   "o": [
    "Virtual appliance 10.0.1.4",
    "Virtual network gateway",
    "Virtual network peering",
    "None (packet dropped)",
    "Internet"
   ],
   "a": 2
  },
  {
   "l": "8.8.8.8:",
   "o": [
    "Virtual appliance 10.0.1.4",
    "Virtual network gateway",
    "Virtual network peering",
    "None (packet dropped)",
    "Internet"
   ],
   "a": 0
  }
 ],
 "expl": "<p>Azure picks the <b>longest prefix</b> first. Only at equal length is the order: user-defined route, then BGP, then system route.</p><b>10.50.1.20.</b> The BGP route 10.50.1.0/24 is more specific than the user route 10.50.0.0/16: virtual network gateway.<b>10.50.2.20.</b> Only 10.50.0.0/16 (None) matches: the packet is dropped.<b>10.60.3.4.</b> The peering system route (10.60.0.0/16) is more specific than 0.0.0.0/0: virtual network peering. To force this traffic through the firewall, a 10.60.0.0/16 route to 10.0.1.4 would be needed.<b>8.8.8.8.</b> Only 0.0.0.0/0 matches, and the user route overrides the internet system route: virtual appliance.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*10.50.1.20",
    "Virtual network gateway"
   ],
   [
    "10.50.2.20",
    "None (packet dropped)"
   ],
   [
    "10.60.3.4",
    "Virtual network peering"
   ],
   [
    "8.8.8.8",
    "Virtual appliance 10.0.1.4"
   ]
  ]
 },
 "keep": "Longest prefix first; on a tie: user > BGP > system. 0.0.0.0/0 doesn't capture peering traffic."
},
{
 "id": "D4-414",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso keeps its Active Directory domain corp.local on-premises, with DNS servers 192.168.1.10 and 192.168.1.11. The site is connected to VNet-Hub by ExpressRoute. VNet-Spoke1 and VNet-Spoke2 are peered with the hub. All virtual networks use Azure-provided DNS, and that must not change.</p><p>The privatelink.* private DNS zones are linked to all three virtual networks.</p><p>Requirements:</p><ul><li>VMs in all three virtual networks must resolve corp.local names;</li><li>on-premises computers must resolve private endpoints (privatelink);</li><li>no VM may act as a DNS server.</li></ul><p>You deploy Azure DNS Private Resolver in VNet-Hub.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For corp.local from Azure:",
   "o": [
    "An inbound endpoint",
    "A corp.local private zone",
    "An outbound endpoint and a forwarding ruleset to 192.168.1.10 and .11",
    "DNS servers 192.168.1.10 on the virtual networks"
   ],
   "a": 2
  },
  {
   "l": "The ruleset must be linked to:",
   "o": [
    "VNet-Hub only",
    "VNet-Hub, VNet-Spoke1, and VNet-Spoke2",
    "The ExpressRoute gateway",
    "No network: it applies to the resolver"
   ],
   "a": 1
  },
  {
   "l": "On the site DNS servers:",
   "o": [
    "A conditional forwarder to 168.63.129.16",
    "A privatelink secondary zone",
    "A conditional forwarder to the inbound endpoint IP",
    "Nothing"
   ],
   "a": 2
  },
  {
   "l": "Resolver subnets:",
   "o": [
    "One dedicated, delegated subnet per endpoint",
    "A single subnet shared with VMs",
    "GatewaySubnet",
    "AzureFirewallSubnet"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Azure to corp.local.</b> The <b>outbound endpoint</b> sends queries, and the <b>forwarding ruleset</b> says which ones (corp.local → 192.168.1.10 and .11). Networks keep Azure DNS.<b>Links.</b> A ruleset only applies to virtual networks linked to it; you can link it to spokes in the same region, with no other resolver.<b>On-premises to Azure.</b> 168.63.129.16 isn't reachable from on-premises. The <b>inbound endpoint</b> provides a private IP in VNet-Hub, to which site DNS servers forward the privatelink zones (or the matching public zones, such as blob.core.windows.net).<b>Subnets.</b> Each endpoint needs its own subnet (at least /28), delegated to Microsoft.Network/dnsResolvers with no other resource.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*For corp.local from Azure",
    "An outbound endpoint and a forwarding ruleset to 192.168.1.10 and .11"
   ],
   [
    "The ruleset must be linked to",
    "VNet-Hub, VNet-Spoke1, and VNet-Spoke2"
   ],
   [
    "On the site DNS servers",
    "A conditional forwarder to the inbound endpoint IP"
   ],
   [
    "Resolver subnets",
    "One dedicated, delegated subnet per endpoint"
   ]
  ]
 },
 "keep": "Resolver: outbound + ruleset (Azure → site), inbound (site → Azure), one delegated subnet per endpoint."
},
{
 "id": "D4-415",
 "dom": 4,
 "type": "hot",
 "stem": "<p>The Payroll application has three tiers, all in VNet-Paie: web VMs, application VMs, and database VMs. VMs of the same tier are spread across several subnets, and new VMs are added every month by templates. A single NSG, NSG-Paie, is associated with all subnets.</p><p>Requirements:</p><ul><li>only web VMs may reach application VMs on TCP 8443, with no address list to maintain;</li><li>all other traffic between VNet-Paie VMs must be denied, without breaking load balancer probes;</li><li>application VMs must reach Azure SQL Database in France Central, and nothing else on the internet;</li><li>a web VM in VNet-Partner, peered with VNet-Paie, must be treated like the other web VMs.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Web to application rule:",
   "o": [
    "Source VirtualNetwork, destination VirtualNetwork",
    "Source ASG-Web, destination ASG-App",
    "Source web subnets, destination app subnets",
    "Source Internet, destination ASG-App"
   ],
   "a": 1
  },
  {
   "l": "For other internal traffic:",
   "o": [
    "Delete the default AllowVnetInBound rule",
    "Allow AzureLoadBalancer (3900), then Deny VirtualNetwork → VirtualNetwork (4000)",
    "A Deny Any → Any rule at priority 100",
    "A Deny AzureLoadBalancer rule"
   ],
   "a": 1
  },
  {
   "l": "Application VM outbound:",
   "o": [
    "Allow Sql.FranceCentral, then deny Internet",
    "Allow Sql, then deny Internet",
    "Allow AzureCloud",
    "Deny Internet only"
   ],
   "a": 0
  },
  {
   "l": "VNet-Partner web VM:",
   "o": [
    "Add it to ASG-Web",
    "Not possible with an ASG: use its IP address",
    "Create ASG-Web in VNet-Partner",
    "Enable gateway transit"
   ],
   "a": 1
  }
 ],
 "expl": "<b>ASG.</b> Application security groups group network interfaces by role: an ASG-Web → ASG-App rule automatically follows new VMs added to the groups, whatever their subnet.<b>Internal traffic.</b> Default rules can't be deleted; you override them with a Deny VirtualNetwork → VirtualNetwork rule with a smaller number (4000), placed after the allow rules. But the VirtualNetwork tag includes the host virtual IP (168.63.129.16), where probes come from: so explicitly allow AzureLoadBalancer just before (3900). A Deny Any → Any at priority 100 would block everything.<b>SQL.</b> The regional tag Sql.FranceCentral limits to Azure SQL addresses in the region; you must then deny Internet, or AllowInternetOutBound lets everything through.<b>VNet-Partner.</b> All network interfaces in an ASG must belong to the same virtual network; a VM in a peered network can't join it.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Web to application rule",
    "Source ASG-Web, destination ASG-App"
   ],
   [
    "For other internal traffic",
    "Allow AzureLoadBalancer (3900), then Deny VirtualNetwork → VirtualNetwork (4000)"
   ],
   [
    "Application VM outbound",
    "Allow Sql.FranceCentral, then deny Internet"
   ],
   [
    "VNet-Partner web VM",
    "Not possible with an ASG: use its IP address"
   ]
  ]
 },
 "keep": "ASG: by role, same VNet only. Default rules: override, don't delete. Regional tag + Deny Internet."
},
{
 "id": "D4-416",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso bought the contoso.com domain from a third-party registrar, which currently hosts public DNS. You create the public DNS zone contoso.com in Azure DNS.</p><p>Requirements:</p><ul><li>the Azure zone must become authoritative for contoso.com;</li><li>the contoso.com apex must point to AppGW1's public IP address, which can change if the gateway is recreated;</li><li>the Dev team alone manages the dev.contoso.com subdomain in a zone in its own subscription;</li><li>nobody must be able to delete the contoso.com zone by mistake, but DNS admins must be able to change records.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "At the registrar:",
   "o": [
    "A CNAME record to the Azure zone",
    "Replace the name servers with the Azure zone's four NS servers",
    "A TXT verification record",
    "A zone transfer to Azure"
   ],
   "a": 1
  },
  {
   "l": "For the apex:",
   "o": [
    "A CNAME @ record",
    "A static A record",
    "An alias record set to the public IP resource",
    "An SRV record"
   ],
   "a": 2
  },
  {
   "l": "For dev.contoso.com:",
   "o": [
    "“dev” NS records in contoso.com pointing to the dev zone's servers",
    "A “dev” CNAME record",
    "DNS Zone Contributor on contoso.com",
    "A private zone"
   ],
   "a": 0
  },
  {
   "l": "Zone protection:",
   "o": [
    "A Read-only lock on the zone",
    "A Delete lock on the zone",
    "Reader for the admins",
    "A Deny policy"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Delegation.</b> The zone becomes authoritative when the registrar publishes the Azure DNS name servers (ns1-xx.azure-dns.com, etc.).<b>Apex.</b> A CNAME isn't allowed at the apex. An <b>alias</b> record points to the public IP resource itself: if the address changes, the record follows.<b>Subdomain.</b> Delegate dev.contoso.com by creating, in the parent zone, a “dev” NS set with the child zone's servers.<b>Lock.</b> Delete prevents deleting the zone but allows changing records. Read-only would block changes too.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*At the registrar",
    "Replace the name servers with the Azure zone's four NS servers"
   ],
   [
    "For the apex",
    "An alias record set to the public IP resource"
   ],
   [
    "For dev.contoso.com",
    "“dev” NS records in contoso.com pointing to the dev zone's servers"
   ],
   [
    "Zone protection",
    "A Delete lock on the zone"
   ]
  ]
 },
 "keep": "Delegation = NS at the registrar. Apex to an Azure resource = alias. Subdomain = NS in the parent zone."
},
{
 "id": "D4-417",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Two third-party firewall appliances, NVA1 (10.0.1.4) and NVA2 (10.0.1.5), filter all traffic between spokes and to the internet. They're in Subnet-NVA of VNet-Hub, in active-active mode. Today, spoke route tables send 0.0.0.0/0 to 10.0.1.4: if NVA1 fails, all traffic is lost.</p><p>Requirements:</p><ul><li>spread traffic across NVA1 and NVA2 and automatically remove a failed appliance;</li><li>cover all protocols and all ports with no per-port rule;</li><li>the appliances must be able to relay packets they are neither the source nor the destination of.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Load balancer:",
   "o": [
    "Standard internal",
    "Basic internal",
    "Standard public",
    "Gateway Load Balancer"
   ],
   "a": 0
  },
  {
   "l": "Load-balancing rule:",
   "o": [
    "A TCP 443 rule",
    "HA ports",
    "Inbound NAT rules",
    "An outbound rule"
   ],
   "a": 1
  },
  {
   "l": "Spoke routes' next hop:",
   "o": [
    "Virtual appliance: load balancer frontend IP",
    "Virtual appliance: 10.0.1.5",
    "Virtual network gateway",
    "Internet"
   ],
   "a": 0
  },
  {
   "l": "On NVA1 and NVA2 network interfaces:",
   "o": [
    "Accelerated networking",
    "IP forwarding",
    "A public IP",
    "An ASG"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Load balancer.</b> HA ports exist only on a <b>Standard internal</b> load balancer. Gateway Load Balancer chains appliances transparently behind a public load balancer, which isn't the model described.<b>HA ports.</b> A single rule covers all TCP and UDP ports; the probe removes a failed appliance.<b>Routes.</b> The routes' next hop becomes the internal load balancer frontend address, type “Virtual appliance”.<b>IP forwarding.</b> Without IP forwarding on the Azure network interface, the platform drops packets whose destination address isn't the VM's.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Load balancer",
    "Standard internal"
   ],
   [
    "Load-balancing rule",
    "HA ports"
   ],
   [
    "Spoke routes' next hop",
    "Virtual appliance: load balancer frontend IP"
   ],
   [
    "On NVA1 and NVA2 network interfaces",
    "IP forwarding"
   ]
  ]
 },
 "keep": "NVA HA: Standard internal LB, HA ports, route to the frontend IP, IP forwarding on NICs."
},
{
 "id": "D4-418",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Northwind has a Standard SKU ExpressRoute circuit in Paris, connected to VNet-Hub (France Central). A second circuit connects its Lyon site, in Marseille.</p><p>New needs:</p><ul><li>connect VNet-Asia, a virtual network in Japan East, to the Paris circuit;</li><li>let the Paris and Lyon sites communicate over Microsoft's network, without using their own WAN;</li><li>if the Paris circuit fails, VNet-Hub must remain reachable from headquarters over the internet, automatically.</li></ul><p>VNet-Hub already contains an ErGw1AZ ExpressRoute gateway in a /27 GatewaySubnet.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For VNet-Asia:",
   "o": [
    "Upgrade the Paris circuit to Premium",
    "Peer VNet-Asia with VNet-Hub, with transit",
    "A Local circuit",
    "Nothing: Standard covers all regions"
   ],
   "a": 0
  },
  {
   "l": "Between Paris and Lyon:",
   "o": [
    "A site-to-site VPN between sites",
    "ExpressRoute Global Reach between the two circuits",
    "Microsoft peering",
    "Virtual network peering"
   ],
   "a": 1
  },
  {
   "l": "Internet backup:",
   "o": [
    "A VPN gateway in the same GatewaySubnet, with a site-to-site connection",
    "A second ExpressRoute gateway",
    "A VPN gateway in another virtual network",
    "A NAT gateway"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Japan East.</b> A Standard circuit only connects virtual networks in the same geopolitical region. Another region requires the <b>Premium</b> add-on.<b>Paris ↔ Lyon.</b> Global Reach links two ExpressRoute circuits so sites communicate over Microsoft's network.<b>Backup.</b> ExpressRoute + VPN coexistence uses a VPN gateway in the same GatewaySubnet (/27 minimum, which is the case). ExpressRoute routes are preferred; if the circuit fails, traffic fails over to the VPN. A virtual network has only one gateway of each type.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*For VNet-Asia",
    "Upgrade the Paris circuit to Premium"
   ],
   [
    "Between Paris and Lyon",
    "ExpressRoute Global Reach between the two circuits"
   ],
   [
    "Internet backup",
    "A VPN gateway in the same GatewaySubnet, with a site-to-site connection"
   ]
  ]
 },
 "keep": "Other geopolitical region = Premium. Site ↔ site over Microsoft = Global Reach. Backup = coexisting VPN, same GatewaySubnet."
},
{
 "id": "D4-419",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Fabrikam has 30 virtual networks in two regions, 25 branches connected by VPN, and one ExpressRoute circuit. The peering mesh and route tables have become unmanageable. The team wants to move to Azure Virtual WAN.</p><p>Requirements:</p><ul><li>branches must communicate with each other and with all virtual networks, including those in the other region;</li><li>all private and all internet traffic must go through an Azure Firewall, with no route tables to maintain in the spokes;</li><li>spokes must not have their own gateway.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Virtual WAN type:",
   "o": [
    "Basic",
    "Standard"
   ],
   "a": 1
  },
  {
   "l": "Hubs:",
   "o": [
    "One virtual hub per region",
    "One hub for both regions",
    "One hub per branch",
    "One hub per virtual network"
   ],
   "a": 0
  },
  {
   "l": "Inspection:",
   "o": [
    "0.0.0.0/0 user routes in each spoke",
    "Secured hubs with routing intent (private and internet traffic)",
    "A firewall in each spoke",
    "NSGs on the connections"
   ],
   "a": 1
  },
  {
   "l": "Spokes:",
   "o": [
    "Virtual network connections to their region's hub",
    "A peering with every other spoke",
    "A VPN gateway per spoke",
    "An ExpressRoute circuit per spoke"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Standard.</b> Basic virtual WAN only handles site-to-site VPN; ExpressRoute, VNet-to-VNet and hub-to-hub transit, and Azure Firewall require Standard.<b>Hubs.</b> One hub per region; hubs in a Standard WAN are meshed automatically.<b>Routing intent.</b> With a secured hub (Azure Firewall in the hub), routing policies for private and internet traffic send everything to the firewall, with no route table in the spokes.<b>Spokes.</b> A virtual network connection links each spoke to its hub, which provides the gateways.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Virtual WAN type",
    "Standard"
   ],
   [
    "Hubs",
    "One virtual hub per region"
   ],
   [
    "Inspection",
    "Secured hubs with routing intent (private and internet traffic)"
   ],
   [
    "Spokes",
    "Virtual network connections to their region's hub"
   ]
  ]
 },
 "keep": "Standard Virtual WAN, one hub per region, secured hub + routing intent."
},
{
 "id": "D4-420",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Tailspin runs three services in two regions, France Central and East US. Each region has its own back ends.</p><ul><li>Service 1: a game server on TCP 7777, behind a Standard public load balancer in each region. Players must use a single fixed IP address, and traffic must fail over to the other region within seconds.</li><li>Service 2: the public site www.tailspin.com over HTTPS, with an edge web application firewall, image caching, and acceleration for visitors worldwide.</li><li>Service 3: an internal portal whose standby server is in Tailspin's datacenter, outside Azure; failover can take a few minutes, at DNS level.</li></ul><p>Which service should you use for each?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Service 1:",
   "o": [
    "Azure Traffic Manager",
    "A cross-region load balancer (Global tier)",
    "Azure Front Door",
    "Application Gateway"
   ],
   "a": 1
  },
  {
   "l": "Service 2:",
   "o": [
    "Azure Traffic Manager",
    "A cross-region load balancer (Global tier)",
    "Azure Front Door",
    "Application Gateway"
   ],
   "a": 2
  },
  {
   "l": "Service 3:",
   "o": [
    "Azure Traffic Manager",
    "A cross-region load balancer (Global tier)",
    "Azure Front Door",
    "Application Gateway"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Service 1.</b> Non-HTTP TCP, a single anycast IP, and fast failover: the <b>cross-region</b> load balancer (Global tier) puts regional Standard load balancers behind one IP. Traffic Manager depends on client DNS caching, so it fails over more slowly.<b>Service 2.</b> Global HTTP(S) with WAF, caching, and acceleration: <b>Azure Front Door</b>. Application Gateway is regional.<b>Service 3.</b> An endpoint outside Azure and acceptable DNS failover: <b>Traffic Manager</b>, with an external endpoint.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Service 1",
    "A cross-region load balancer (Global tier)"
   ],
   [
    "Service 2",
    "Azure Front Door"
   ],
   [
    "Service 3",
    "Azure Traffic Manager"
   ]
  ]
 },
 "keep": "Global TCP/UDP + single IP = cross-region LB. Global HTTP + WAF + cache = Front Door. DNS + external = Traffic Manager."
}
);
