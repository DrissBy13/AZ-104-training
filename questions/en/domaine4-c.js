/* Domain 4: virtual networking (batch C : D4-065 to D4-119) */
AZ.questions.push(
{
 "id": "D4-065",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate load-balancing service for each need.</p><p>To answer, drag the appropriate service to each need. Each service may be used once, more than once, or not at all.</p>",
 "srcLabel": "Services",
 "tgtHead": [
  "Need",
  "Service"
 ],
 "srcs": [
  "Azure Load Balancer",
  "Application Gateway",
  "Traffic Manager",
  "Azure Front Door"
 ],
 "tgts": [
  {
   "l": "Distribute TCP traffic (port 1433) between two SQL VMs in the same region",
   "a": 0
  },
  {
   "l": "Route /images to one server pool and /api to another, in one region, with a WAF",
   "a": 1
  },
  {
   "l": "Direct users to the nearest region, through DNS, for any protocol",
   "a": 2
  },
  {
   "l": "Global HTTP entry point with caching, acceleration, and WAF",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Load Balancer</b>: layer 4 (TCP/UDP), regional.</li><li><b>Application Gateway</b>: layer 7 (HTTP/HTTPS), regional, path-based or host-based routing, TLS termination, WAF.</li><li><b>Traffic Manager</b>: global distribution through <b>DNS</b>, for any protocol.</li><li><b>Front Door</b>: global layer 7, with CDN, acceleration, and WAF.</li></ul>",
 "portal": {
  "path": [
   "Load balancing"
  ],
  "title": "Load balancing | Compare",
  "rows": [
   [
    "*Load Balancer",
    "Layer 4 · regional"
   ],
   [
    "Application Gateway",
    "Layer 7 · regional · WAF"
   ],
   [
    "Traffic Manager",
    "DNS · global"
   ],
   [
    "Front Door",
    "Layer 7 · global · CDN · WAF"
   ]
  ]
 },
 "keep": "Regional L4 = LB; regional L7 = AppGW; global DNS = TM; global L7 = Front Door."
},
{
 "id": "D4-066",
 "dom": 4,
 "type": "order",
 "stem": "<p>You need to distribute HTTP traffic between VM1 and VM2 with a newly created Standard public load balancer, LB1.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>A load balancer consists of a <b>frontend address</b> (where traffic arrives), a <b>backend pool</b> (where it's distributed), a <b>health probe</b> (which instances are healthy), and a <b>rule</b> that ties the three together for a protocol and port. The rule needs the other three, hence the order.</p><p>Don't forget an <b>NSG</b> that allows port 80: with the Standard SKU, inbound traffic is denied by default.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB1"
  ],
  "title": "LB1 | Load balancing rules",
  "menu": [
   "Frontend IP configuration",
   "Backend pools",
   "Health probes",
   "*Load balancing rules"
  ],
  "rows": [
   [
    "*rule-http",
    "Frontend · pool · probe · port 80"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Frontend → pool → probe → rule (which ties the three).",
 "acts": [
  "Create a frontend IP configuration with a Standard public IP address",
  "Create a backend pool containing VM1 and VM2",
  "Create an HTTP health probe on port 80",
  "Create a port 80 load-balancing rule that uses the frontend, pool, and probe",
  "Create a NAT gateway",
  "Create a peering"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D4-071",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You compare Azure Load Balancer SKUs.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "The Standard SKU supports availability zones.",
   "a": 0
  },
  {
   "l": "The backend pool of a Standard load balancer can contain VMs from several non-peered virtual networks.",
   "a": 1
  },
  {
   "l": "A Standard load balancer blocks inbound traffic if no NSG allows it.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Zones: Yes</b>, zone-redundant or zonal frontend.</li><li><b>Several virtual networks: No.</b> Pool members must be in a single virtual network (an IP-based pool can reference peered networks, but not unconnected networks).</li><li><b>Secure by default: Yes.</b> The Standard SKU is closed until an NSG allows traffic.</li></ul><p>The Basic SKU was retired in September 2025.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "Create"
  ],
  "title": "Standard SKU",
  "rows": [
   [
    "*Zones",
    "Zone-redundant or zonal"
   ],
   [
    "Pool",
    "A single virtual network"
   ],
   [
    "*Security",
    "Closed by default (NSG required)"
   ]
  ]
 },
 "keep": "Standard: zones, one VNet per pool, secure by default."
},
{
 "id": "D4-075",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You configure Application Gateway AG1.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Component that receives requests on a port and protocol (with the TLS certificate):",
   "o": [
    "Backend HTTP settings",
    "Listener",
    "Backend pool"
   ],
   "a": 1
  },
  {
   "l": "Component that defines the port, protocol, and cookie-based affinity to the servers:",
   "o": [
    "Listener",
    "Backend HTTP settings",
    "Routing rule"
   ],
   "a": 1
  },
  {
   "l": "Component that ties a listener to a pool and settings:",
   "o": [
    "Health probe",
    "Frontend IP",
    "Routing rule"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Listener</b>: frontend address + port + protocol (+ certificate for HTTPS, + host name for multi-site).</li><li><b>Backend HTTP settings</b> (backend settings): how to reach the servers (port, HTTP/HTTPS, cookie-based affinity, timeout, custom probe).</li><li><b>Routing rule</b>: ties the listener to a pool and settings, basic or path-based.</li></ul>",
 "portal": {
  "path": [
   "Application gateways",
   "AG1"
  ],
  "title": "AG1",
  "menu": [
   "Backend pools",
   "*Backend settings",
   "*Listeners",
   "*Rules"
  ],
  "rows": [
   [
    "Listener",
    "Port, protocol, certificate"
   ],
   [
    "Backend settings",
    "Port, protocol, cookie affinity"
   ],
   [
    "Rule",
    "Listener → pool + settings"
   ]
  ]
 },
 "keep": "Listener (in) → rule → pool + backend settings (out)."
},
{
 "id": "D4-079",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Traffic Manager routing method for each need.</p><p>To answer, drag the appropriate method to each need. Each method may be used once, more than once, or not at all.</p>",
 "srcLabel": "Methods",
 "tgtHead": [
  "Need",
  "Method"
 ],
 "srcs": [
  "Priority",
  "Weighted",
  "Performance",
  "Geographic",
  "Subnet"
 ],
 "tgts": [
  {
   "l": "Send users to the region with the lowest latency",
   "a": 2
  },
  {
   "l": "Send 10% of traffic to a new version to test it",
   "a": 1
  },
  {
   "l": "Force European users to use servers located in Europe (sovereignty)",
   "a": 3
  },
  {
   "l": "Use a backup site only if the primary site goes down",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Performance</b>: endpoint with the lowest network latency for the user.</li><li><b>Weighted</b>: distribution by weights.</li><li><b>Geographic</b>: by the geographic origin of the DNS query.</li><li><b>Priority</b>: primary and backup.</li></ul><p><b>Subnet</b> maps client IP address ranges to endpoints. There's also the <b>MultiValue</b> method.</p>",
 "portal": {
  "path": [
   "Traffic Manager profiles",
   "Create"
  ],
  "title": "Routing method",
  "rows": [
   [
    "*Performance",
    "Lowest latency"
   ],
   [
    "Weighted",
    "Weights"
   ],
   [
    "Geographic",
    "User origin"
   ],
   [
    "Priority",
    "Backup"
   ]
  ]
 },
 "keep": "Latency = Performance; % = Weighted; sovereignty = Geographic; backup = Priority."
},
{
 "id": "D4-082",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You configure rules in an Azure Firewall policy.</p><p>To answer, drag the appropriate rule type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Rule types",
 "tgtHead": [
  "Need",
  "Rule type"
 ],
 "srcs": [
  "DNAT rule",
  "Network rule",
  "Application rule"
 ],
 "tgts": [
  {
   "l": "Publish an internal VM's port 3389 to the internet through the firewall's public address",
   "a": 0
  },
  {
   "l": "Allow UDP 123 (NTP) traffic to a specific server",
   "a": 1
  },
  {
   "l": "Allow HTTPS access to *.windowsupdate.com",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>DNAT</b>: destination address translation for inbound traffic.</li><li><b>Network</b>: layer 3/4 filtering (addresses, ports, protocols, service tags).</li><li><b>Application</b>: FQDN filtering for HTTP, HTTPS, and MSSQL (and FQDN tags such as WindowsUpdate).</li></ul><p>Processing order: DNAT, then network, then application.</p>",
 "portal": {
  "path": [
   "Firewall policies",
   "FWP1"
  ],
  "title": "FWP1 | Rules",
  "menu": [
   "*DNAT rules",
   "*Network rules",
   "*Application rules"
  ],
  "rows": [
   [
    "DNAT",
    "3389 published"
   ],
   [
    "Network",
    "UDP 123"
   ],
   [
    "Application",
    "*.windowsupdate.com"
   ]
  ]
 },
 "keep": "Published inbound = DNAT; IP/port = network; FQDN = application."
},
{
 "id": "D4-090",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You plan the addressing of VNet-Prod, which will contain 4 subnets of 250 VMs each, a VPN gateway, and Azure Bastion.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Minimum size of each 250-VM subnet:",
   "o": [
    "/25",
    "/24",
    "/23"
   ],
   "a": 1
  },
  {
   "l": "Minimum virtual network address space (leaving room for special subnets):",
   "o": [
    "/21",
    "/24",
    "/22"
   ],
   "a": 0
  },
  {
   "l": "Suitable range to avoid conflicts with the on-premises site at 10.0.0.0/16:",
   "o": [
    "10.0.0.0/21",
    "10.20.0.0/21",
    "10.0.128.0/21"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li>250 VMs + 5 reserved = 255: a <b>/24</b> (251 usable) is just enough; a /25 gives only 123.</li><li>4 × /24 = a full /22, with no room for GatewaySubnet (/27) and AzureBastionSubnet (/26): you need a <b>/21</b>.</li><li>10.0.0.0/21 and 10.0.128.0/21 are within 10.0.0.0/16: overlap. <b>10.20.0.0/21</b> fits.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "Create"
  ],
  "title": "IP addresses",
  "rows": [
   [
    "*Address space",
    "10.20.0.0/21"
   ],
   [
    "4 subnets",
    "/24 each"
   ],
   [
    "GatewaySubnet + AzureBastionSubnet",
    "/27 + /26"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Add up the subnets (including special ones) then avoid overlaps."
},
{
 "id": "D4-092",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You manage network security groups.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "The same NSG can be associated with several subnets and network interfaces.",
   "a": 0
  },
  {
   "l": "An NSG can be associated with a subnet of a virtual network in another region.",
   "a": 1
  },
  {
   "l": "NSGs are stateful: the response to allowed traffic is automatically allowed.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Several associations: Yes.</b></li><li><b>Another region: No.</b> An NSG can only be associated with resources in its own region.</li><li><b>Stateful: Yes.</b> If an inbound connection is allowed, its return traffic is too, with no outbound rule.</li></ul>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG1"
  ],
  "title": "NSG1 | Subnets",
  "menu": [
   "Network interfaces",
   "*Subnets"
  ],
  "rows": [
   [
    "*Associations",
    "Several, same region"
   ],
   [
    "Behavior",
    "Stateful"
   ]
  ]
 },
 "keep": "NSG: several associations, same region, stateful."
},
{
 "id": "D4-099",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You deploy a site-to-site VPN between VNet1 and the Bordeaux site. You need to give the Bordeaux network team the information required to configure their firewall.</p><p>For each of the following, select Yes if you must give it to the Bordeaux team. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The private IP address of each VM in VNet1",
   "a": 1
  },
  {
   "l": "The Azure VPN gateway's public IP address",
   "a": 0
  },
  {
   "l": "The name of VNet1's resource group",
   "a": 1
  },
  {
   "l": "The connection's shared key",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Azure gateway public address: yes</b>, it's the Azure-side tunnel endpoint.</li><li><b>Shared key: yes</b>, it must be identical on both sides.</li><li>They also need the virtual network's <b>address space</b> (for traffic selectors), but not each VM's address or the resource group name.</li></ul>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet1-GW"
  ],
  "title": "VNet1-GW | Overview",
  "rows": [
   [
    "*Public IP address",
    "20.x.x.x"
   ],
   [
    "*Shared key",
    "In the connection"
   ],
   [
    "Address space",
    "10.0.0.0/16"
   ]
  ]
 },
 "keep": "For the remote site: gateway public IP + shared key (+ ranges)."
},
{
 "id": "D4-100",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>VMs in VNet-Spoke must reach the internet only through the Azure Firewall in VNet-Hub (private address 10.0.0.4).</p><p>For each of the following actions, select Yes if it's part of the solution. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Create rules in the firewall policy that allow the traffic",
   "a": 0
  },
  {
   "l": "Enable “Use remote gateway” on the spoke-to-hub peering",
   "a": 1
  },
  {
   "l": "Associate a 0.0.0.0/0 → 10.0.0.4 UDR with the spoke's subnets",
   "a": 0
  },
  {
   "l": "Create a NAT gateway in the spoke, associated with its subnets",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>0.0.0.0/0 route to the firewall: yes</b>, it forces internet traffic to the hub (the peering must be connected).</li><li><b>Firewall rules: yes</b>, Azure Firewall denies everything by default.</li><li>“Use remote gateway” concerns a VPN gateway. A NAT gateway in the spoke would send traffic out without going through the firewall.</li></ul>",
 "portal": {
  "path": [
   "Route tables",
   "RT-Spoke"
  ],
  "title": "RT-Spoke | Routes",
  "menu": [
   "*Routes"
  ],
  "rows": [
   [
    "*0.0.0.0/0",
    "Virtual appliance · 10.0.0.4"
   ],
   [
    "Firewall",
    "Allow rules"
   ]
  ]
 },
 "keep": "Egress through the firewall = UDR 0.0.0.0/0 + rules (deny by default)."
},
{
 "id": "D4-101",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You deploy Azure Bastion in VNet1.</p><p>For each of the following, select Yes if it's a required condition. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "An AzureBastionSubnet subnet of size /26 or larger",
   "a": 0
  },
  {
   "l": "A VPN gateway in the same network's GatewaySubnet",
   "a": 1
  },
  {
   "l": "A Standard public IP address on each target VM",
   "a": 1
  },
  {
   "l": "A Standard public IP address for Bastion",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>AzureBastionSubnet /26: yes.</b></li><li><b>Standard public IP address: yes</b>, for Bastion itself (the Developer SKU doesn't need one).</li><li>VMs <b>don't</b> need a public address: that's the whole point of Bastion. No VPN gateway is needed.</li></ul>",
 "portal": {
  "path": [
   "Bastions",
   "Create"
  ],
  "title": "Create a Bastion",
  "rows": [
   [
    "*Subnet",
    "AzureBastionSubnet /26"
   ],
   [
    "*Public IP address",
    "Standard"
   ],
   [
    "VMs",
    "No public IP"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Bastion: AzureBastionSubnet /26 + Standard public IP."
},
{
 "id": "D4-102",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>You need to create a virtual network with a subnet, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Address space",
   "o": [
    "--address-prefixes",
    "--address-space",
    "--cidr"
   ],
   "a": 0
  },
  {
   "l": "Subnet prefix",
   "o": [
    "--subnet-prefixes",
    "--subnet-range",
    "--prefix"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az network vnet create --address-prefixes 10.6.0.0/16 --subnet-name Subnet1 --subnet-prefixes 10.6.1.0/24</code>. To add more subnets: <code>az network vnet subnet create --address-prefixes ...</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*--address-prefixes",
    "VNet space"
   ],
   [
    "*--subnet-prefixes",
    "Subnet range"
   ]
  ]
 },
 "keep": "az network vnet create --address-prefixes … --subnet-prefixes …",
 "tpl": "az network vnet create --resource-group RG1 --name VNet6 {0} 10.6.0.0/16 --subnet-name Subnet1 {1} 10.6.1.0/24"
},
{
 "id": "D4-103",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>You need to create the peering from VNet1 to VNet2, with virtual network access allowed, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Subgroup",
   "o": [
    "peering",
    "link",
    "connection"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--remote-vnet",
    "--target-vnet",
    "--peer"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az network vnet peering create --vnet-name VNet1 --remote-vnet VNet2 --allow-vnet-access</code>. You must also create the reverse peering (from VNet2 to VNet1). Other options: <code>--allow-forwarded-traffic</code>, <code>--allow-gateway-transit</code>, <code>--use-remote-gateways</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az network vnet peering create",
    "--remote-vnet VNet2"
   ],
   [
    "Remember",
    "The reverse peering"
   ]
  ]
 },
 "keep": "az network vnet peering create --remote-vnet (in both directions).",
 "tpl": "az network vnet {0} create --resource-group RG1 --name VNet1-to-VNet2 --vnet-name VNet1 {1} VNet2 --allow-vnet-access"
},
{
 "id": "D4-104",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>You need to add to NSG NSG5 a rule that allows inbound HTTPS from the internet, by using Azure PowerShell. $nsg contains NSG5.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Add-AzNetworkSecurityRuleConfig",
    "New-AzNetworkSecurityGroup",
    "Set-AzRouteConfig"
   ],
   "a": 0
  },
  {
   "l": "Direction",
   "o": [
    "Inbound",
    "Outbound",
    "Both"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>Add-AzNetworkSecurityRuleConfig</b> adds a rule to the NSG object in memory, then <b>Set-AzNetworkSecurityGroup</b> saves the change in Azure. The direction is <b>Inbound</b> or <b>Outbound</b> (not “Both”).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "PowerShell",
  "rows": [
   [
    "*Add-AzNetworkSecurityRuleConfig",
    "Adds the rule in memory"
   ],
   [
    "Set-AzNetworkSecurityGroup",
    "Saves"
   ]
  ]
 },
 "keep": "Add-…RuleConfig then Set-AzNetworkSecurityGroup.",
 "tpl": "$nsg | {0} -Name Allow-HTTPS -Access Allow -Protocol Tcp -Direction {1} -Priority 200 -SourceAddressPrefix Internet -SourcePortRange * -DestinationAddressPrefix * -DestinationPortRange 443 | Set-AzNetworkSecurityGroup"
},
{
 "id": "D4-105",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>You need to create a route that sends 0.0.0.0/0 to the firewall 10.0.0.4 in route table RT5, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Next hop type",
   "o": [
    "VirtualAppliance",
    "VirtualNetworkGateway",
    "Internet"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--next-hop-ip-address",
    "--gateway-ip",
    "--destination"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>--next-hop-type VirtualAppliance --next-hop-ip-address 10.0.0.4</code>. The IP address is only used with the VirtualAppliance type. You then associate the table with the subnet with <code>az network vnet subnet update --route-table RT5</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*--next-hop-type",
    "VirtualAppliance"
   ],
   [
    "--next-hop-ip-address",
    "10.0.0.4"
   ]
  ]
 },
 "keep": "Route to an NVA = VirtualAppliance + --next-hop-ip-address.",
 "tpl": "az network route-table route create --resource-group RG1 --route-table-name RT5 --name To-FW --address-prefix 0.0.0.0/0 --next-hop-type {0} {1} 10.0.0.4"
},
{
 "id": "D4-106",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You create an inbound security rule in NSG6. Only servers in the application security group ASG-Admin must be able to reach the VMs in ASG-Web over SSH. The rule must be evaluated before a deny rule with priority 500.</p><p>How should you configure the rule?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li>Source and destination: <b>application security groups</b> ASG-Admin to ASG-Web.</li><li>Service <b>SSH</b> (TCP 22), action <b>Allow</b>.</li><li>Priority <b>100</b>: a number smaller than 500 is evaluated before the deny rule. 600 and 4096 would be evaluated after the deny.</li></ul>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG6"
  ],
  "title": "Inbound rules",
  "rows": [
   [
    "*100 · SSH",
    "ASG-Admin → ASG-Web · Allow"
   ],
   [
    "500",
    "Deny"
   ]
  ]
 },
 "keep": "Role-based exception = source/destination ASG + smaller number.",
 "win": {
  "title": "Add inbound security rule",
  "sub": "NSG6",
  "rows": [
   {
    "k": "select",
    "l": "Source",
    "o": [
     "Any",
     "IP Addresses",
     "Service Tag",
     "Application security group"
    ],
    "a": 3
   },
   {
    "k": "select",
    "l": "Source application security groups",
    "o": [
     "ASG-Admin",
     "ASG-Web"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Destination",
    "o": [
     "Any",
     "Application security group",
     "VirtualNetwork"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Destination application security group",
    "o": [
     "ASG-Admin",
     "ASG-Web"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Service",
    "o": [
     "HTTPS",
     "SSH",
     "RDP"
    ],
    "a": 1
   },
   {
    "k": "radio",
    "l": "Action",
    "opts": [
     "Allow",
     "Deny"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Priority",
    "o": [
     "100",
     "600",
     "4096"
    ],
    "a": 0
   }
  ]
 }
},
{
 "id": "D4-107",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You configure the peering from the spoke VNet-S3 to the hub VNet-Hub, which has a VPN gateway to the on-premises site. VNet-S3 must reach the on-premises site through this gateway and receive traffic forwarded by the hub's firewall.</p><p>How should you configure the options of the link from VNet-S3 to VNet-Hub?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li><b>Access</b>: required to communicate.</li><li><b>Receive forwarded traffic</b>: accepts traffic that transits through the hub's firewall.</li><li><b>VNet-S3 gateway transit: no</b>, VNet-S3 has no gateway.</li><li><b>Use remote gateway: yes</b>, to reach on-premises through the hub's gateway (which, on its side, must allow transit).</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-S3"
  ],
  "title": "VNet-S3 | Peerings",
  "rows": [
   [
    "Access",
    "Yes"
   ],
   [
    "Forwarded traffic",
    "Yes"
   ],
   [
    "*Use remote gateway",
    "Yes"
   ],
   [
    "Gateway transit",
    "No"
   ]
  ]
 },
 "keep": "Spoke: access + forwarded traffic + remote gateway.",
 "win": {
  "title": "Add peering",
  "sub": "VNet-S3 | Peerings",
  "rows": [
   {
    "k": "head",
    "t": "This virtual network (VNet-S3 → VNet-Hub)"
   },
   {
    "k": "check",
    "l": "Allow VNet-S3 to access VNet-Hub",
    "d": true,
    "a": true
   },
   {
    "k": "check",
    "l": "Allow VNet-S3 to receive forwarded traffic from VNet-Hub",
    "a": true
   },
   {
    "k": "check",
    "l": "Allow gateway in VNet-S3 to forward traffic to VNet-Hub",
    "a": false
   },
   {
    "k": "check",
    "l": "Enable VNet-S3 to use VNet-Hub's remote gateway",
    "a": true
   }
  ]
 }
},
{
 "id": "D4-108",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>You need to associate route table RT6 with the subnet Subnet-App.</p><p>In RT6, which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Subnets",
 "expl": "<p><b>Subnets</b> lets you associate or dissociate the table with subnets. <b>Routes</b> is for adding routes. <b>Configuration</b> holds the gateway route propagation option.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT6"
  ],
  "title": "RT6 | Subnets",
  "menu": [
   "Routes",
   "*Subnets"
  ],
  "rows": [
   [
    "*Subnet-App",
    "+ Associate"
   ]
  ]
 },
 "keep": "Associating a table = Subnets blade.",
 "win": {
  "title": "RT6 | Route table",
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
     "Configuration",
     "Routes",
     "Subnets",
     "Properties",
     "Locks"
    ]
   },
   {
    "g": "Monitoring",
    "items": [
     "Alerts",
     "Diagnose and solve problems"
    ]
   }
  ]
 }
},
{
 "id": "D4-109",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>You need to check whether traffic from VM12 to 8.8.8.8 goes through Azure Firewall or out directly.</p><p>In Network Watcher, which tool should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Next hop",
 "expl": "<p><b>Next hop</b> shows, for a VM and a destination, the next hop type (Internet, Virtual appliance, Gateway…), its address, and the route table used. If the next hop is the firewall's address, traffic goes through it.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Next hop",
  "menu": [
   "*Next hop"
  ],
  "rows": [
   [
    "VM12 → 8.8.8.8",
    "*Virtual appliance · 10.0.0.4"
   ]
  ],
  "btn": "Next hop"
 },
 "keep": "Where traffic goes = Next hop.",
 "win": {
  "title": "Network Watcher",
  "nav": [
   {
    "g": "Monitoring",
    "items": [
     "Topology",
     "Connection monitor"
    ]
   },
   {
    "g": "Network diagnostic tools",
    "items": [
     "IP flow verify",
     "NSG diagnostics",
     "Next hop",
     "Effective security rules",
     "VPN troubleshoot",
     "Packet capture",
     "Connection troubleshoot"
    ]
   },
   {
    "g": "Logs",
    "items": [
     "Flow logs",
     "Traffic Analytics"
    ]
   }
  ]
 }
}
);
