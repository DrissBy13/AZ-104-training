/* Domain 4: virtual networking (batch D : D4-120 to D4-200) */
AZ.questions.push(
{
 "id": "D4-120",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the virtual networks shown in the Networks document (click the Networks tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "docs": [
  {
   "t": "Networks",
   "h": "<p><b>Virtual networks</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Region</th><th>Address space</th><th>Peered with</th></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>VNet-B</td></tr><tr><td>VNet-B</td><td>France Central</td><td>10.2.0.0/16</td><td>VNet-A, VNet-C</td></tr><tr><td>VNet-C</td><td>West Europe</td><td>10.3.0.0/16</td><td>VNet-B</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.0.0/16</td><td>—</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A VM in VNet-A can communicate with a VM in VNet-C.",
   "a": 1
  },
  {
   "l": "A VM in VNet-B can communicate with a VM in VNet-C.",
   "a": 0
  },
  {
   "l": "You can peer VNet-D with VNet-B.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>A ↔ C: No.</b> A and C are only peered with B; peering isn't transitive.</li><li><b>B ↔ C: Yes.</b> Global peering (two regions), which works like local peering.</li><li><b>D with B: No.</b> D's and B's spaces don't overlap, but B is already peered with VNet-A, which has <b>the same space</b> as D (10.1.0.0/16). Azure doesn't allow a network to be peered with two networks whose spaces overlap: B wouldn't know where to send 10.1.x.x.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-B"
  ],
  "title": "VNet-B | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "VNet-A (10.1.0.0/16)",
    "Connected"
   ],
   [
    "VNet-C (10.3.0.0/16)",
    "Connected · global"
   ],
   [
    "*VNet-D (10.1.0.0/16)",
    "Rejected: overlaps VNet-A"
   ]
  ]
 },
 "keep": "No transitivity; a VNet can't be peered with two overlapping networks."
},
{
 "id": "D4-121",
 "dom": 4,
 "type": "hot",
 "stem": "<p>NSG7 is associated with Subnet1. It contains the inbound rules shown in the Rules document (click the Rules tab). VM13 (10.0.1.10) is in Subnet1.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "docs": [
  {
   "t": "Rules",
   "h": "<p><b>NSG7, inbound rules</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Priority</th><th>Name</th><th>Port</th><th>Protocol</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>100</td><td>R1</td><td>80</td><td>TCP</td><td>Internet</td><td>Any</td><td>Allow</td></tr><tr><td>150</td><td>R2</td><td>Any</td><td>Any</td><td>203.0.113.0/24</td><td>Any</td><td>Deny</td></tr><tr><td>200</td><td>R3</td><td>443</td><td>TCP</td><td>Any</td><td>Any</td><td>Allow</td></tr><tr><td>65000</td><td>AllowVnetInBound</td><td>Any</td><td>Any</td><td>VirtualNetwork</td><td>VirtualNetwork</td><td>Allow</td></tr><tr><td>65500</td><td>DenyAllInBound</td><td>Any</td><td>Any</td><td>Any</td><td>Any</td><td>Deny</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A client at 203.0.113.5 reaches VM13 on port 80:",
   "o": [
    "Denied",
    "Allowed"
   ],
   "a": 1
  },
  {
   "l": "A client at 203.0.113.5 reaches VM13 on port 443:",
   "o": [
    "Denied",
    "Allowed"
   ],
   "a": 0
  },
  {
   "l": "A client at 198.51.100.7 reaches VM13 on port 3389:",
   "o": [
    "Allowed",
    "Denied"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Port 80 from 203.0.113.5: allowed.</b> 203.0.113.5 is an internet address: R1 (priority 100) matches first.</li><li><b>Port 443: denied.</b> R1 only covers port 80; R2 (150) denies everything from 203.0.113.0/24 before R3 (200).</li><li><b>Port 3389 from 198.51.100.7: denied.</b> No custom rule allows it; DenyAllInBound applies.</li></ul>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "IP flow verify",
  "rows": [
   [
    "203.0.113.5 → 80",
    "Allowed · R1"
   ],
   [
    "*203.0.113.5 → 443",
    "Denied · R2"
   ],
   [
    "198.51.100.7 → 3389",
    "Denied · DenyAllInBound"
   ]
  ]
 },
 "keep": "First matching rule (smallest number) = decision."
},
{
 "id": "D4-122",
 "dom": 4,
 "type": "single",
 "stem": "<p>You have the route table shown in the RT7 document (click the RT7 tab), associated with Subnet-App. VM14 in Subnet-App sends a packet to 10.20.3.5.</p><p>What is the next hop?</p>",
 "docs": [
  {
   "t": "RT7",
   "h": "<p><b>RT7 routes</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Prefix</th><th>Next hop type</th><th>Next hop address</th></tr><tr><td>Default</td><td>0.0.0.0/0</td><td>Virtual appliance</td><td>10.0.0.4</td></tr><tr><td>On-Prem</td><td>10.20.0.0/16</td><td>Virtual network gateway</td><td>—</td></tr><tr><td>Block-Lab</td><td>10.20.3.0/24</td><td>None</td><td>—</td></tr></table></div>"
  }
 ],
 "opts": [
  "None: the packet is dropped",
  "The appliance 10.0.0.4",
  "The virtual network gateway",
  "Internet"
 ],
 "ans": 0,
 "expl": "<p>10.20.3.5 matches all three routes, but the most specific (longest prefix) is <b>10.20.3.0/24</b>, whose next hop is <b>None</b>: the packet is <b>dropped</b>.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Next hop",
  "rows": [
   [
    "*VM14 → 10.20.3.5",
    "None · Block-Lab (10.20.3.0/24)"
   ]
  ]
 },
 "keep": "Longest prefix; “None” hop = drop."
},
{
 "id": "D4-140",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You manage Azure DNS.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Azure DNS lets you buy and register a domain name.",
   "a": 1
  },
  {
   "l": "A private DNS zone can be linked to virtual networks in different regions.",
   "a": 0
  },
  {
   "l": "The same private zone name (corp.local) can exist in two different resource groups.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Buying a domain: No.</b> Azure DNS hosts zones; purchase happens at a registrar (or through App Service Domains, another service).</li><li><b>Different regions: Yes.</b> Private zones are global resources, linkable to networks in any region.</li><li><b>Same name: Yes</b>, in different resource groups (but a virtual network can't be linked to two private zones with the same name).</li></ul>",
 "portal": {
  "path": [
   "Private DNS zones",
   "corp.local"
  ],
  "title": "corp.local | Overview",
  "rows": [
   [
    "*Location",
    "Global"
   ],
   [
    "Links",
    "VNets in any region"
   ]
  ]
 },
 "keep": "Azure DNS doesn't sell domains; private zones are global."
},
{
 "id": "D4-146",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Network Watcher tool for each question.</p><p>To answer, drag the appropriate tool to each question. Each tool may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tools",
 "tgtHead": [
  "Question",
  "Tool"
 ],
 "srcs": [
  "IP flow verify",
  "Next hop",
  "Connection troubleshoot",
  "Packet capture",
  "VPN troubleshoot"
 ],
 "tgts": [
  {
   "l": "Which NSG rule blocks port 1433 to VM15?",
   "a": 0
  },
  {
   "l": "Does VM15's traffic to 0.0.0.0/0 go to the firewall?",
   "a": 1
  },
  {
   "l": "Why won't the IPsec tunnel to Lyon come up?",
   "a": 4
  },
  {
   "l": "What is the exact content of the exchanged packets?",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>IP flow verify</b>: allowed or denied, and by which rule.</li><li><b>Next hop</b>: routing.</li><li><b>VPN troubleshoot</b>: gateway and connection diagnostics.</li><li><b>Packet capture</b>: traffic content.</li></ul><p>Connection troubleshoot tests an end-to-end connection.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Network diagnostic tools",
  "rows": [
   [
    "*IP flow verify",
    "Which NSG rule"
   ],
   [
    "Next hop",
    "Routing"
   ],
   [
    "VPN troubleshoot",
    "Tunnel"
   ],
   [
    "Packet capture",
    "Content"
   ]
  ]
 },
 "keep": "Rule = IP flow; route = next hop; tunnel = VPN; content = capture."
},
{
 "id": "D4-147",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate connectivity solution for each situation.</p><p>To answer, drag the appropriate solution to each situation. Each solution may be used once, more than once, or not at all.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Situation",
  "Solution"
 ],
 "srcs": [
  "Virtual network peering",
  "Site-to-site VPN",
  "Point-to-site VPN",
  "ExpressRoute"
 ],
 "tgts": [
  {
   "l": "Connect two Azure virtual networks with the lowest latency",
   "a": 0
  },
  {
   "l": "Connect a small branch over the internet with an IPsec-capable router",
   "a": 1
  },
  {
   "l": "A consultant connects from his laptop at a hotel",
   "a": 2
  },
  {
   "l": "A datacenter needs 10 Gbps private with an SLA",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Peering</b>: Microsoft backbone, minimal latency, no gateway.</li><li><b>Site-to-site</b>: IPsec tunnel between a site and Azure, over the internet.</li><li><b>Point-to-site</b>: an individual computer.</li><li><b>ExpressRoute</b>: high-bandwidth private circuit with SLA.</li></ul>",
 "portal": {
  "path": [
   "Networking"
  ],
  "title": "Connectivity",
  "rows": [
   [
    "*VNet ↔ VNet",
    "Peering"
   ],
   [
    "Branch",
    "S2S"
   ],
   [
    "Laptop",
    "P2S"
   ],
   [
    "10 Gbps private",
    "ExpressRoute"
   ]
  ]
 },
 "keep": "VNet = peering; site = S2S; PC = P2S; private + SLA = ExpressRoute."
},
{
 "id": "D4-148",
 "dom": 4,
 "type": "order",
 "stem": "<p>You need to let VMs in VNet-Spoke1 and VNet-Spoke2 communicate through the Azure Firewall in VNet-Hub (10.0.0.4). The hub-spoke peerings already exist.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>You create the <b>routes</b>, <b>associate</b> them with the subnets, then <b>allow</b> the traffic in the firewall, which denies everything by default. (Firewall rules can be created before or after the routes; traffic only flows once all three are in place.)</p><p>A direct peering would bypass the firewall. “Use remote gateway” concerns a VPN gateway.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT-Spoke1"
  ],
  "title": "RT-Spoke1 | Routes",
  "menu": [
   "*Routes",
   "Subnets"
  ],
  "rows": [
   [
    "*To Spoke2",
    "Virtual appliance · 10.0.0.4"
   ]
  ]
 },
 "keep": "Routes → association → firewall rule.",
 "acts": [
  "Create a route table in each spoke with the route to the other spoke, next hop Virtual appliance 10.0.0.4",
  "Associate each route table with its spoke's subnets",
  "Create a network rule in the firewall policy that allows traffic between the two spokes",
  "Peer Spoke1 and Spoke2 directly",
  "Enable “Use remote gateway”"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D4-149",
 "dom": 4,
 "type": "order",
 "stem": "<p>You need to have the public DNS zone fabrikam.com, hosted at a former provider, managed by Azure DNS, with no interruption.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>You create the <b>zone</b>, <b>copy the records</b> into it (Azure CLI can import a zone file), and only then <b>change the delegation</b> at the registrar. If you delegate before the records exist, names become unresolvable.</p><p>Virtual network links and autoregistration concern private zones.</p>",
 "portal": {
  "path": [
   "DNS zones",
   "fabrikam.com"
  ],
  "title": "fabrikam.com | Recordsets",
  "rows": [
   [
    "*Records",
    "Imported"
   ],
   [
    "Next step",
    "Change NS at the registrar"
   ]
  ]
 },
 "keep": "Zone → records → delegation (never the reverse).",
 "acts": [
  "Create the fabrikam.com zone in Azure DNS",
  "Recreate (or import) all existing records in the Azure zone",
  "Replace the name servers at the registrar with Azure's NS servers",
  "Link the zone to a virtual network",
  "Enable autoregistration"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D4-150",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>VMs in Subnet-DB must access a storage account without traffic going over the internet, and you want to prevent access to any other storage account from this subnet.</p><p>For each of the following solutions, select Yes if it meets the need on its own. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "An outbound NSG rule that allows the region's Storage tag",
   "a": 1
  },
  {
   "l": "A private endpoint and NSG rules limited to its address",
   "a": 0
  },
  {
   "l": "A NAT gateway with an address allowed in the account firewall",
   "a": 1
  },
  {
   "l": "A service endpoint with a policy listing the account",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Service endpoint + policy: yes.</b> The policy limits which accounts are reachable through the service endpoint.</li><li><b>Private endpoint + NSG: yes.</b> Traffic stays private, and the NSG blocks other accounts.</li><li><b>NAT gateway: no</b>, it goes out over the internet.</li><li><b>Storage tag: no</b>, it allows all storage accounts.</li></ul>",
 "portal": {
  "path": [
   "Service endpoint policies",
   "SEP1"
  ],
  "title": "SEP1 | Policy definitions",
  "rows": [
   [
    "*Service",
    "Microsoft.Storage"
   ],
   [
    "Resources",
    "stdb01 only"
   ]
  ]
 },
 "keep": "Limiting to one account: service endpoint policy, or private endpoint + NSG."
},
{
 "id": "D4-151",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You publish a web application to the internet behind Application Gateway v2 with WAF. The web VMs must only receive traffic from the gateway.</p><p>For each of the following actions, select Yes if it's part of the solution. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Remove the public IP addresses from the web VMs",
   "a": 0
  },
  {
   "l": "Place the web VMs in the Application Gateway subnet",
   "a": 1
  },
  {
   "l": "An NSG on the VMs that only admits the gateway's subnet",
   "a": 0
  },
  {
   "l": "Enable a NAT gateway on the Application Gateway's subnet",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>No public address: yes</b>, the VMs are no longer directly reachable from the internet.</li><li><b>NSG limited to the gateway subnet: yes.</b></li><li>The VMs must <b>not</b> be in the gateway's dedicated subnet. A NAT gateway isn't supported on the Application Gateway v2 subnet.</li></ul>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG-Web"
  ],
  "title": "Inbound rules",
  "rows": [
   [
    "*100",
    "snet-appgw → 443 · Allow"
   ],
   [
    "4000",
    "Any · Deny"
   ]
  ]
 },
 "keep": "VMs behind AppGW: no public IP + NSG limited to the AppGW subnet."
},
{
 "id": "D4-158",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You need to choose the appropriate service for each application.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Online game over UDP, single region, low latency:",
   "o": [
    "Azure Load Balancer",
    "Azure Front Door",
    "Application Gateway"
   ],
   "a": 0
  },
  {
   "l": "REST API in two regions, with global WAF and cache:",
   "o": [
    "Traffic Manager",
    "Azure Front Door",
    "Azure Load Balancer"
   ],
   "a": 1
  },
  {
   "l": "SMTP server in three regions, DNS-based failover:",
   "o": [
    "Azure Front Door",
    "Application Gateway",
    "Traffic Manager"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Regional UDP</b>: Load Balancer (layer 4).</li><li><b>Global HTTP with WAF and cache</b>: Front Door.</li><li><b>Non-HTTP protocol, multi-region</b>: Traffic Manager (DNS).</li></ul>",
 "portal": {
  "path": [
   "Load balancing"
  ],
  "title": "Choose",
  "rows": [
   [
    "*Regional UDP",
    "Load Balancer"
   ],
   [
    "Global HTTP + WAF",
    "Front Door"
   ],
   [
    "Non-HTTP multi-region",
    "Traffic Manager"
   ]
  ]
 },
 "keep": "Non-HTTP protocol + global = Traffic Manager."
},
{
 "id": "D4-159",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VNet-Hub contains a VPN gateway. VNet-S5 is peered with the hub.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Setting on the link from the hub to VNet-S5:",
   "o": [
    "Allow gateway transit",
    "None",
    "Use remote gateway"
   ],
   "a": 0
  },
  {
   "l": "Setting on the link from VNet-S5 to the hub:",
   "o": [
    "Use remote gateway",
    "Allow gateway transit",
    "None"
   ],
   "a": 0
  },
  {
   "l": "If VNet-S5 already has its own VPN gateway, “Use remote gateway”:",
   "o": [
    "replaces its gateway automatically",
    "is impossible",
    "works in parallel"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li>The <b>hub</b>, which owns the gateway, <b>allows transit</b>.</li><li>The <b>spoke</b> <b>uses the remote gateway</b>.</li><li>A network that already has its own gateway can't use a remote gateway.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-Hub"
  ],
  "title": "Peerings",
  "rows": [
   [
    "*Hub → S5",
    "Gateway transit"
   ],
   [
    "*S5 → Hub",
    "Remote gateway"
   ],
   [
    "S5 with a gateway",
    "Impossible"
   ]
  ]
 },
 "keep": "A spoke with its own gateway can't use the remote gateway."
},
{
 "id": "D4-160",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You create a VPN gateway for VNet7. It must accept several site-to-site and point-to-site connections, withstand a zone failure, and use BGP.</p><p>How should you configure the gateway?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li>Type <b>VPN</b>, <b>route-based</b> (several sites, point-to-site, BGP).</li><li>SKU <b>VpnGw2AZ</b>: zone-redundant.</li><li><b>BGP enabled</b>.</li></ul><p>Active-active mode is recommended but not required here.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet7-GW"
  ],
  "title": "Overview",
  "rows": [
   [
    "Type",
    "VPN · route-based"
   ],
   [
    "*SKU",
    "VpnGw2AZ"
   ],
   [
    "BGP",
    "Enabled"
   ]
  ]
 },
 "keep": "Multi-site + P2S + zones + BGP = route-based VPN + AZ SKU + BGP.",
 "win": {
  "title": "Create virtual network gateway",
  "sub": "Virtual network gateways",
  "rows": [
   {
    "k": "select",
    "l": "Gateway type",
    "o": [
     "VPN",
     "ExpressRoute"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "VPN type",
    "o": [
     "Route-based",
     "Policy-based"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "SKU",
    "o": [
     "Basic",
     "VpnGw2",
     "VpnGw2AZ"
    ],
    "a": 2
   },
   {
    "k": "text",
    "l": "Virtual network",
    "t": "VNet7 (GatewaySubnet 10.7.255.0/27)"
   },
   {
    "k": "select",
    "l": "Configure BGP",
    "o": [
     "Enabled",
     "Disabled"
    ],
    "d": 1,
    "a": 0
   },
   {
    "k": "select",
    "l": "Active-active mode",
    "o": [
     "Enabled",
     "Disabled"
    ],
    "d": 1,
    "a": null
   }
  ]
 }
},
{
 "id": "D4-161",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You create a load-balancing rule on the public load balancer LB5. HTTPS traffic (443) must be distributed to port 8443 on the VMs, and the same client must stay on the same VM.</p><p>How should you configure the rule?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li>Frontend <b>port</b> 443 and <b>backend port</b> (on the VMs) 8443.</li><li><b>“Client IP” persistence</b>: a client stays on the same VM.</li><li>The <b>probe</b> must test the port actually served: 8443.</li></ul>",
 "portal": {
  "path": [
   "Load balancers",
   "LB5"
  ],
  "title": "LB5 | Rules",
  "rows": [
   [
    "*443 → 8443",
    "Pool-Web · Probe-8443"
   ],
   [
    "Persistence",
    "Client IP"
   ]
  ]
 },
 "keep": "Frontend port ≠ backend port; the probe tests the backend port.",
 "win": {
  "title": "Add load balancing rule",
  "sub": "LB5",
  "rows": [
   {
    "k": "select",
    "l": "Frontend IP address",
    "o": [
     "LB5-frontend (52.10.20.30)"
    ],
    "d": 0,
    "a": null
   },
   {
    "k": "select",
    "l": "Backend pool",
    "o": [
     "Pool-Web"
    ],
    "d": 0,
    "a": null
   },
   {
    "k": "select",
    "l": "Protocol",
    "o": [
     "TCP",
     "UDP"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Port",
    "o": [
     "443",
     "8443"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Backend port",
    "o": [
     "443",
     "8443"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Session persistence",
    "o": [
     "None",
     "Client IP",
     "Client IP and protocol"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Health probe",
    "o": [
     "Probe-8443 (TCP 8443)",
     "Probe-22 (TCP 22)"
    ],
    "a": 0
   }
  ]
 }
},
{
 "id": "D4-162",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>You need to add a virtual network link to the private DNS zone corp.contoso.local.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Virtual Network Links",
 "expl": "<p><b>Virtual Network Links</b> lets you link the zone to virtual networks, with or without <b>autoregistration</b>.</p>",
 "portal": {
  "path": [
   "Private DNS zones",
   "corp.contoso.local"
  ],
  "title": "Virtual Network Links",
  "menu": [
   "Recordsets",
   "*Virtual Network Links"
  ],
  "rows": [
   [
    "*VNet1",
    "+ Add"
   ]
  ]
 },
 "keep": "Linking a private zone = Virtual Network Links.",
 "win": {
  "title": "corp.contoso.local | Private DNS zone",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access control (IAM)"
    ]
   },
   {
    "g": "DNS Management",
    "items": [
     "Recordsets",
     "Virtual Network Links"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Properties",
     "Locks"
    ]
   }
  ]
 }
},
{
 "id": "D4-163",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>You need to associate NSG NSG8 with the subnet Subnet-Web.</p><p>In NSG8, which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Subnets",
 "expl": "<p><b>Subnets</b> associates the NSG with a subnet. <b>Network interfaces</b> associates it with a network interface. You can also make the association from the subnet's page in the virtual network.</p>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG8"
  ],
  "title": "NSG8 | Subnets",
  "menu": [
   "Network interfaces",
   "*Subnets"
  ],
  "rows": [
   [
    "*Subnet-Web",
    "+ Associate"
   ]
  ]
 },
 "keep": "Associating an NSG = Subnets or Network interfaces.",
 "win": {
  "title": "NSG8 | Network security group",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access control (IAM)"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Inbound security rules",
     "Outbound security rules",
     "Network interfaces",
     "Subnets",
     "Properties",
     "Locks"
    ]
   },
   {
    "g": "Monitoring",
    "items": [
     "Diagnostic settings",
     "NSG flow logs"
    ]
   }
  ]
 }
},
{
 "id": "D4-170",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You manage Azure Bastion (Standard SKU) in VNet-Hub.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Target VMs must allow RDP or SSH from AzureBastionSubnet in their NSG.",
   "a": 0
  },
  {
   "l": "Users must have port 3389 open to the internet on their computer.",
   "a": 1
  },
  {
   "l": "You can increase the number of Bastion instances for more concurrent sessions.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM NSG: Yes.</b> RDP/SSH traffic comes from the private addresses of the Bastion subnet.</li><li><b>Port 3389 on the client: No.</b> The client uses HTTPS (443) to Bastion.</li><li><b>Scale units: Yes</b>, with Standard and Premium (2 to 50 instances).</li></ul>",
 "portal": {
  "path": [
   "Bastions",
   "Bastion-Hub"
  ],
  "title": "Bastion-Hub | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Instance count",
    "2 to 50"
   ],
   [
    "VM NSG",
    "3389/22 from AzureBastionSubnet"
   ]
  ]
 },
 "keep": "Client on 443; VMs open from AzureBastionSubnet; scale units."
},
{
 "id": "D4-171",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You use application security groups (ASGs).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A network interface can belong to several ASGs.",
   "a": 0
  },
  {
   "l": "Network interfaces in the same ASG can belong to different virtual networks.",
   "a": 1
  },
  {
   "l": "An ASG is used as a source or destination in an NSG rule.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Several ASGs: Yes</b>, for example ASG-Web and ASG-Linux.</li><li><b>Different networks: No.</b> All interfaces in an ASG are in the same virtual network (that of the first interface added).</li><li><b>Source or destination: Yes.</b></li></ul>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm-nic"
  ],
  "title": "Application security groups",
  "rows": [
   [
    "*ASG-Web",
    "Member"
   ],
   [
    "*ASG-Linux",
    "Member"
   ]
  ]
 },
 "keep": "ASG: several per NIC, a single VNet, source or destination."
},
{
 "id": "D4-190",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You design the connection of an on-premises site to Azure. It must be encrypted and use the internet, at the lowest cost, with high availability.</p><p>For each of the following actions, select Yes if it's suitable. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Use a policy-based gateway with two tunnels",
   "a": 1
  },
  {
   "l": "A route-based gateway in active-active mode",
   "a": 0
  },
  {
   "l": "Order an ExpressRoute circuit on top of the VPN",
   "a": 1
  },
  {
   "l": "Connect two local devices to both instances",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Active-active: yes</b>, two instances each with a tunnel.</li><li><b>Two tunnels on-premises: yes</b>, ideally two devices, for redundancy on both sides.</li><li><b>ExpressRoute: no</b>, more expensive and not over the internet.</li><li><b>Policy-based: no</b>, no active-active or multiple connections.</li></ul>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet1-GW"
  ],
  "title": "Configuration",
  "rows": [
   [
    "*Active-active",
    "Enabled"
   ],
   [
    "*On-premises site",
    "2 devices / 2 tunnels"
   ]
  ]
 },
 "keep": "Cheap HA VPN = active-active + two on-premises tunnels."
},
{
 "id": "D4-191",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You troubleshoot a VM that can't be reached over RDP through Azure Bastion.</p><p>For each of the following checks, select Yes if it's relevant. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The RDP service runs and Windows Firewall allows it",
   "a": 0
  },
  {
   "l": "The boot diagnostics storage account is RA-GRS",
   "a": 1
  },
  {
   "l": "The VM's NSG allows 3389 from AzureBastionSubnet",
   "a": 0
  },
  {
   "l": "The VM has a Standard public IP on its interface",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>NSG: yes</b>, traffic comes from the Bastion subnet.</li><li><b>Service and Windows Firewall: yes.</b> Run command or the serial console help check.</li><li>A public address is <b>not</b> needed with Bastion. Storage is unrelated.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "Bastion troubleshooting",
  "rows": [
   [
    "*NSG",
    "3389 from AzureBastionSubnet"
   ],
   [
    "*OS",
    "RDP service + Windows Firewall"
   ]
  ]
 },
 "keep": "Bastion fails: NSG from AzureBastionSubnet + RDP in the OS."
}
);
