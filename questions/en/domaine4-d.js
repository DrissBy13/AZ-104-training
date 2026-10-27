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
 "id": "D4-123",
 "dom": 4,
 "type": "single",
 "stem": "<p>You manage VNet1's route-based VPN gateway, with BGP disabled. You want new networks added on-premises and in Azure to be learned automatically on both sides.</p><p>What should you do?</p>",
 "opts": [
  "Add a route table with each network manually",
  "Enable BGP on the gateway and the connection, with an ASN for each side",
  "Switch the gateway to policy-based mode",
  "Create a peering"
 ],
 "ans": 1,
 "expl": "<p><b>BGP</b> dynamically exchanges routes between the Azure gateway and the on-premises device. Each side has an <b>autonomous system number (ASN)</b>, and the local network gateway specifies the on-premises BGP peer's ASN and address. New networks are then advertised automatically.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet1-GW"
  ],
  "title": "VNet1-GW | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Configure BGP",
    "Enabled · ASN 65515"
   ],
   [
    "Local gateway",
    "ASN + BGP peer address"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Routes learned automatically = BGP (ASN on both sides)."
},
{
 "id": "D4-124",
 "dom": 4,
 "type": "single",
 "stem": "<p>An employee leaves the company. He used the point-to-site VPN with a client certificate. Other employees must keep their access.</p><p>What should you do?</p>",
 "opts": [
  "Delete the root certificate from the gateway",
  "Delete the VPN gateway",
  "Add his client certificate's thumbprint to the gateway's revoked certificates list",
  "Change the client address pool"
 ],
 "ans": 2,
 "expl": "<p>The point-to-site configuration contains a list of <b>revoked certificates</b> (by thumbprint). The affected client can no longer connect, with no impact on the others. Deleting the root certificate would cut off all users.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet1-GW"
  ],
  "title": "Point-to-site configuration",
  "rows": [
   [
    "Root certificates",
    "Kept"
   ],
   [
    "*Revoked certificates",
    "+ client thumbprint"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Cutting off a single P2S client = revoked certificate."
},
{
 "id": "D4-125",
 "dom": 4,
 "type": "single",
 "stem": "<p>You changed the VPN gateway's point-to-site configuration (new root certificate and tunnel type). Users can no longer connect.</p><p>What should they do?</p>",
 "opts": [
  "Change their Microsoft Entra password",
  "Only restart their computer",
  "Nothing: the configuration is pushed automatically",
  "Download and reinstall the new VPN client configuration package"
 ],
 "ans": 3,
 "expl": "<p>After changing the point-to-site configuration (tunnel type, certificate, addresses, routes), you must <b>regenerate and reinstall the VPN client configuration package</b> on each computer.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet1-GW"
  ],
  "title": "Point-to-site configuration",
  "rows": [
   [
    "*Download VPN client",
    "New package"
   ]
  ],
  "btn": "Download VPN client"
 },
 "keep": "P2S config changed = reinstall the client package."
},
{
 "id": "D4-126",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your Paris and New York branches are each connected to Azure by their own ExpressRoute circuit. They must communicate with each other over the Microsoft network.</p><p>Which feature should you enable?</p>",
 "opts": [
  "ExpressRoute Global Reach",
  "Virtual network peering",
  "ExpressRoute FastPath",
  "A NAT gateway"
 ],
 "ans": 0,
 "expl": "<p><b>Global Reach</b> links two ExpressRoute circuits so that on-premises sites communicate with each other over the Microsoft backbone.</p><p><b>FastPath</b> sends traffic directly to VMs, bypassing the ExpressRoute gateway, for better performance.</p>",
 "portal": {
  "path": [
   "ExpressRoute circuits",
   "ER-Paris"
  ],
  "title": "ER-Paris | Global Reach configuration",
  "menu": [
   "*Global Reach"
  ],
  "rows": [
   [
    "*ER-NewYork",
    "Connected"
   ]
  ],
  "btn": "Add Global Reach"
 },
 "keep": "Site ↔ site through two ExpressRoute circuits = Global Reach."
},
{
 "id": "D4-127",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your ExpressRoute circuit must allow access to the VMs in your virtual networks.</p><p>Which ExpressRoute peering type should you configure?</p>",
 "opts": [
  "Microsoft peering",
  "Azure private peering",
  "Azure public peering",
  "Virtual network peering"
 ],
 "ans": 1,
 "expl": "<p><b>Private peering</b> connects on-premises to virtual networks (private addresses). <b>Microsoft peering</b> gives access to Microsoft public services (Microsoft 365, public addresses of PaaS services). Azure public peering is retired.</p>",
 "portal": {
  "path": [
   "ExpressRoute circuits",
   "ER1"
  ],
  "title": "ER1 | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "*Azure private",
    "To virtual networks"
   ],
   [
    "Microsoft",
    "Microsoft 365, public PaaS"
   ]
  ]
 },
 "keep": "VNets = private peering; public Microsoft services = Microsoft peering."
},
{
 "id": "D4-128",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in VNet1 are connected to the on-premises site by VPN. A security policy requires <b>all</b> internet traffic from the VMs to go through the on-premises firewall for inspection.</p><p>What should you configure?</p>",
 "opts": [
  "Azure Bastion",
  "A NAT gateway",
  "Forced tunneling: a 0.0.0.0/0 route to the virtual network gateway (or default route advertised through BGP)",
  "A public load balancer"
 ],
 "ans": 2,
 "expl": "<p><b>Forced tunneling</b> sends internet traffic to the on-premises site through the VPN: with a route table 0.0.0.0/0 → Virtual network gateway (and a default site on the gateway), or by receiving the default route through BGP.</p><p>A NAT gateway would send traffic straight out of Azure.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT1"
  ],
  "title": "RT1 | Routes",
  "menu": [
   "*Routes"
  ],
  "rows": [
   [
    "*0.0.0.0/0",
    "Virtual network gateway"
   ]
  ]
 },
 "keep": "Internet through on-premises = forced tunneling."
},
{
 "id": "D4-129",
 "dom": 4,
 "type": "single",
 "stem": "<p>Load balancer LB4 must distribute traffic between VMs in VNet1 using only their private IP addresses, without referencing their network interfaces.</p><p>Which type of backend pool should you use?</p>",
 "opts": [
  "An availability set pool",
  "A gateway pool",
  "A NIC-based pool",
  "An IP address-based backend pool"
 ],
 "ans": 3,
 "expl": "<p>A Standard load balancer offers a backend pool configured <b>by network interface</b> (default) or <b>by IP address</b> (specifying the virtual network and addresses). The IP-based pool simplifies some deployments (containers, pre-provisioned resources).</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB4"
  ],
  "title": "Add backend pool",
  "rows": [
   [
    "*Backend pool configuration",
    "IP address"
   ],
   [
    "Virtual network",
    "VNet1"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Pool by private addresses = IP-based pool."
},
{
 "id": "D4-130",
 "dom": 4,
 "type": "single",
 "stem": "<p>The WAF of Application Gateway AG3 has just been enabled. You first want to observe which requests would be blocked, without blocking anything, to tune the rules.</p><p>Which mode should you choose?</p>",
 "opts": [
  "Detection",
  "Policy audit",
  "Prevention",
  "Disabled"
 ],
 "ans": 0,
 "expl": "<p>In <b>Detection</b> mode, the WAF logs detected threats without blocking them. After tuning (exclusions, custom rules), you switch to <b>Prevention</b> mode to block.</p>",
 "portal": {
  "path": [
   "WAF policies",
   "WAF-AG3"
  ],
  "title": "WAF-AG3 | Overview",
  "rows": [
   [
    "*Policy mode",
    "Detection"
   ]
  ],
  "btn": "Switch to prevention mode"
 },
 "keep": "Observe without blocking = Detection; block = Prevention."
},
{
 "id": "D4-131",
 "dom": 4,
 "type": "single",
 "stem": "<p>Application Gateway v2 must add or remove instances automatically based on traffic, between 2 and 10 instances.</p><p>What should you configure?</p>",
 "opts": [
  "An outbound rule",
  "Autoscaling with a minimum of 2 and a maximum of 10",
  "A virtual machine scale set",
  "A health probe"
 ],
 "ans": 1,
 "expl": "<p>The Application Gateway <b>v2</b> SKU supports built-in <b>autoscaling</b>, with minimum and maximum instance bounds. The v1 SKU only allowed a fixed number of instances.</p>",
 "portal": {
  "path": [
   "Application gateways",
   "AG1"
  ],
  "title": "AG1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Autoscaling",
    "Yes · min 2 · max 10"
   ]
  ],
  "btn": "Save"
 },
 "keep": "AppGW v2 = autoscaling (min/max)."
},
{
 "id": "D4-132",
 "dom": 4,
 "type": "single",
 "stem": "<p>You change the priority endpoint of a Traffic Manager profile. Some users keep being sent to the old endpoint for a few minutes.</p><p>Why?</p>",
 "opts": [
  "Traffic Manager takes 24 hours to update",
  "Traffic Manager keeps TCP sessions open",
  "DNS responses are cached by clients and resolvers for the time to live (TTL)",
  "Clients use a VPN tunnel"
 ],
 "ans": 2,
 "expl": "<p>Traffic Manager works through <b>DNS</b>: it returns the name of the chosen endpoint, and that response stays cached for the profile's <b>TTL</b> (60 seconds by default, configurable). Connections never go through Traffic Manager.</p>",
 "portal": {
  "path": [
   "Traffic Manager profiles",
   "TM1"
  ],
  "title": "TM1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*DNS time to live (TTL)",
    "60 s"
   ]
  ]
 },
 "keep": "Traffic Manager = DNS; change visible after the TTL."
},
{
 "id": "D4-133",
 "dom": 4,
 "type": "single",
 "stem": "<p>A Traffic Manager profile must include a site hosted by another cloud provider, in addition to your Azure web apps.</p><p>Which endpoint type should you add?</p>",
 "opts": [
  "Nested endpoint",
  "Private endpoint",
  "Azure endpoint",
  "External endpoint"
 ],
 "ans": 3,
 "expl": "<p>Traffic Manager accepts <b>Azure</b> endpoints (Azure resources), <b>external</b> endpoints (FQDN or IP address outside Azure), and <b>nested</b> endpoints (another Traffic Manager profile, to combine routing methods).</p>",
 "portal": {
  "path": [
   "Traffic Manager profiles",
   "TM1"
  ],
  "title": "Add endpoint",
  "rows": [
   [
    "*Type",
    "External endpoint"
   ],
   [
    "FQDN",
    "app.othercloud.com"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Outside Azure = external endpoint."
},
{
 "id": "D4-134",
 "dom": 4,
 "type": "single",
 "stem": "<p>An application must use the Performance method to choose the region, then the Weighted method between two versions in each region.</p><p>How should you configure Traffic Manager?</p>",
 "opts": [
  "With nested profiles: a Performance parent profile whose endpoints are Weighted child profiles",
  "With two public DNS zones",
  "With Application Gateway",
  "With a single profile using two methods"
 ],
 "ans": 0,
 "expl": "<p>A profile has only one routing method. <b>Nested profiles</b> let you combine methods: the parent profile (Performance) sends to nested endpoints, which are child profiles (Weighted).</p>",
 "portal": {
  "path": [
   "Traffic Manager profiles",
   "TM-Parent"
  ],
  "title": "TM-Parent | Endpoints",
  "rows": [
   [
    "Method",
    "Performance"
   ],
   [
    "*TM-Europe",
    "Nested · Weighted"
   ],
   [
    "*TM-USA",
    "Nested · Weighted"
   ]
  ]
 },
 "keep": "Combining methods = nested profiles."
},
{
 "id": "D4-135",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to protect VNet1's public IP addresses against distributed denial-of-service attacks, with reports, alerts, and help from a rapid response team.</p><p>What should you enable?</p>",
 "opts": [
  "An NSG on each subnet",
  "Azure DDoS Network Protection (DDoS protection plan associated with the virtual network)",
  "Azure Bastion",
  "A NAT gateway"
 ],
 "ans": 1,
 "expl": "<p>Basic (infrastructure) DDoS protection exists for everyone. <b>DDoS Network Protection</b>, through a <b>DDoS protection plan</b> associated with virtual networks, adds adaptive tuning, telemetry, alerts, cost protection, and access to the DDoS Rapid Response team. DDoS IP Protection protects specific IP addresses.</p>",
 "portal": {
  "path": [
   "DDoS protection plans",
   "Create"
  ],
  "title": "Create a DDoS protection plan",
  "rows": [
   [
    "*Virtual networks",
    "VNet1"
   ],
   [
    "Included",
    "Telemetry, alerts, Rapid Response"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "DDoS with alerts + response team = DDoS Network Protection."
},
{
 "id": "D4-136",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your VMs use a custom DNS server (10.0.0.4) in VNet1. They must also resolve names in an Azure private DNS zone linked to VNet1.</p><p>How should you configure DNS server 10.0.0.4?</p>",
 "opts": [
  "With a forwarder to 8.8.8.8",
  "No configuration: the VMs query the private zone directly",
  "With a forwarder to 168.63.129.16 (Azure-provided DNS)",
  "With an NS record to the private zone"
 ],
 "ans": 2,
 "expl": "<p>Private DNS zones are resolved by <b>Azure-provided DNS</b>. If VMs use a custom DNS server, it must <b>forward</b> queries (at least for these zones) to <b>168.63.129.16</b>. The server itself must be in a virtual network linked to the zone.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "DNS1"
  ],
  "title": "DNS Manager › Forwarders",
  "rows": [
   [
    "*Forwarder",
    "168.63.129.16"
   ]
  ]
 },
 "keep": "Custom DNS + private zone = forwarder to 168.63.129.16."
},
{
 "id": "D4-137",
 "dom": 4,
 "type": "single",
 "stem": "<p>You change the A record www.contoso.com in Azure DNS (TTL of 3,600 seconds). Some users see the old address for almost an hour.</p><p>What can you do for future changes?</p>",
 "opts": [
  "Add an NS record",
  "Use an MX record",
  "Delete and recreate the zone",
  "Lower the record set's TTL before the change (for example to 300 seconds)"
 ],
 "ans": 3,
 "expl": "<p>The <b>TTL</b> indicates how long resolvers can cache the response. Lowering it a few hours before a planned change allows faster propagation. You can raise it again afterward.</p>",
 "portal": {
  "path": [
   "DNS zones",
   "contoso.com"
  ],
  "title": "Edit record set www",
  "rows": [
   [
    "*TTL",
    "300 seconds"
   ],
   [
    "IP",
    "New address"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Fast propagation = lower the TTL before the change."
},
{
 "id": "D4-138",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to prevent an administrator from accidentally deleting the public DNS zone contoso.com and its critical records.</p><p>What should you use?</p>",
 "opts": [
  "A Delete resource lock on the zone (or on the record sets)",
  "A longer TTL",
  "A private DNS zone",
  "An SOA record"
 ],
 "ans": 0,
 "expl": "<p><b>Locks</b> protect DNS zones and even specific record sets against deletion. It's a best practice for production zones, because deleting a zone can make all services unreachable.</p>",
 "portal": {
  "path": [
   "DNS zones",
   "contoso.com"
  ],
  "title": "contoso.com | Locks",
  "menu": [
   "*Locks"
  ],
  "rows": [
   [
    "*no-delete",
    "Delete"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Protecting a DNS zone = Delete lock."
},
{
 "id": "D4-139",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to delegate the subdomain paris.contoso.com to another Azure DNS zone, managed by the Paris team. The contoso.com zone is also in Azure DNS.</p><p>What should you create in the contoso.com zone?</p>",
 "opts": [
  "A virtual network link",
  "An NS record set “paris” with the name servers of the paris.contoso.com zone",
  "A CNAME record paris",
  "An MX record paris"
 ],
 "ans": 1,
 "expl": "<p>To delegate a subdomain, you create the child zone (paris.contoso.com), then, in the parent zone, an <b>NS</b> record set named <b>paris</b> that contains the child zone's name servers.</p>",
 "portal": {
  "path": [
   "DNS zones",
   "contoso.com"
  ],
  "title": "Add record set",
  "rows": [
   [
    "Name",
    "paris"
   ],
   [
    "*Type",
    "NS"
   ],
   [
    "Value",
    "ns1-07.azure-dns.com …"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Delegating a subdomain = NS in the parent zone."
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
 "id": "D4-141",
 "dom": 4,
 "type": "single",
 "stem": "<p>You deploy Azure Firewall with forced tunneling to the on-premises site, as security requires.</p><p>Which additional configuration does the firewall require?</p>",
 "opts": [
  "An additional GatewaySubnet",
  "An internal load balancer in front of the firewall",
  "An AzureFirewallManagementSubnet subnet with its own public IP address (management mode)",
  "A NAT gateway on AzureFirewallSubnet"
 ],
 "ans": 2,
 "expl": "<p>With forced tunneling, the firewall's management traffic must stay separate: you enable the <b>management NIC</b>, which uses the <b>AzureFirewallManagementSubnet</b> subnet (/26) and a dedicated public IP address, with direct internet egress.</p>",
 "portal": {
  "path": [
   "Firewalls",
   "FW1"
  ],
  "title": "Create a firewall",
  "rows": [
   [
    "*Firewall management NIC",
    "Enabled"
   ],
   [
    "Subnet",
    "AzureFirewallManagementSubnet /26"
   ],
   [
    "Management public IP",
    "fw-mgmt-pip"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Firewall + forced tunneling = AzureFirewallManagementSubnet."
},
{
 "id": "D4-142",
 "dom": 4,
 "type": "single",
 "stem": "<p>Azure Firewall's FQDN application rules must also correctly filter FQDN-based network rules. VMs must use the firewall for DNS resolution.</p><p>Which firewall feature should you enable?</p>",
 "opts": [
  "An FQDN tag",
  "DNAT mode",
  "TLS inspection",
  "DNS proxy, then configure the firewall's private address as the virtual networks' DNS server"
 ],
 "ans": 3,
 "expl": "<p>FQDNs in <b>network rules</b> require the firewall and clients to resolve names the same way. With <b>DNS proxy</b>, the firewall receives DNS queries from the VMs (its private address is configured as the DNS server) and forwards them to the configured DNS.</p>",
 "portal": {
  "path": [
   "Firewall policies",
   "FWP1"
  ],
  "title": "FWP1 | DNS",
  "menu": [
   "*DNS"
  ],
  "rows": [
   [
    "*DNS Proxy",
    "Enabled"
   ],
   [
    "VNets",
    "DNS = 10.0.0.4 (firewall)"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "FQDNs in network rules = DNS proxy."
},
{
 "id": "D4-143",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to inspect the content of outbound HTTPS traffic (TLS decryption), detect intrusions (IDPS), and filter by full URL.</p><p>Which Azure Firewall SKU should you choose?</p>",
 "opts": [
  "Premium",
  "Standard",
  "None: it isn't possible",
  "Basic"
 ],
 "ans": 0,
 "expl": "<p>The <b>Premium</b> SKU adds <b>TLS inspection</b>, <b>IDPS</b> (signature-based intrusion detection and prevention), full <b>URL filtering</b>, and web categories. Standard filters by FQDN and uses threat intelligence. Basic targets small businesses.</p>",
 "portal": {
  "path": [
   "Firewalls",
   "Create"
  ],
  "title": "Create a firewall",
  "rows": [
   [
    "*Tier",
    "Premium"
   ],
   [
    "Features",
    "TLS inspection, IDPS, URL filtering"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "TLS + IDPS + URL = Firewall Premium."
},
{
 "id": "D4-144",
 "dom": 4,
 "type": "single",
 "stem": "<p>Several Azure firewalls, in different regions and subscriptions, must share the same base rules, with additional local rules.</p><p>What should you use?</p>",
 "opts": [
  "A manual copy of the rules on each firewall",
  "Hierarchical firewall policies (a parent policy inherited by child policies), managed with Azure Firewall Manager",
  "Azure Policy only",
  "NSGs"
 ],
 "ans": 1,
 "expl": "<p>A <b>firewall policy</b> can inherit from a <b>parent policy</b>: base rules are defined once, and each child policy adds its own rules. <b>Azure Firewall Manager</b> centralizes management.</p>",
 "portal": {
  "path": [
   "Firewall Manager",
   "Policies"
  ],
  "title": "Create firewall policy",
  "rows": [
   [
    "*Parent policy",
    "FWP-Base"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Common + local rules = parent / child policies."
},
{
 "id": "D4-145",
 "dom": 4,
 "type": "single",
 "stem": "<p>A VM needs a public IPv6 address in addition to its IPv4 address.</p><p>What should you configure?</p>",
 "opts": [
  "An IPv6 VPN gateway",
  "A private DNS zone",
  "A dual-stack virtual network and subnet (IPv4 and IPv6 space), and an IPv6 IP configuration on the network interface",
  "A second IPv6-only virtual network"
 ],
 "ans": 2,
 "expl": "<p>Azure supports <b>dual stack</b>: you add an IPv6 address space (for example /48) to the virtual network, a /64 prefix to the subnet, then an IPv6 IP configuration (with a Standard IPv6 public address if needed) on the network interface.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Address space",
  "menu": [
   "*Address space"
  ],
  "rows": [
   [
    "IPv4",
    "10.0.0.0/16"
   ],
   [
    "*IPv6",
    "ace:cab:deca::/48"
   ]
  ],
  "btn": "Save"
 },
 "keep": "IPv6 = dual-stack VNet + subnet + IPv6 IP config."
},
{
 "id": "D4-146",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Network Watcher tool for each question.</p><p>To answer, drag the appropriate tool to each question. Each tool may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tools",
 "srcs": [
  "IP flow verify",
  "Next hop",
  "Connection troubleshoot",
  "Packet capture",
  "VPN troubleshoot"
 ],
 "tgtHead": [
  "Question",
  "Tool"
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
 "srcs": [
  "Virtual network peering",
  "Site-to-site VPN",
  "Point-to-site VPN",
  "ExpressRoute"
 ],
 "tgtHead": [
  "Situation",
  "Solution"
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
 ],
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
 "keep": "Routes → association → firewall rule."
},
{
 "id": "D4-149",
 "dom": 4,
 "type": "order",
 "stem": "<p>You need to have the public DNS zone fabrikam.com, hosted at a former provider, managed by Azure DNS, with no interruption.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 ],
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
 "keep": "Zone → records → delegation (never the reverse)."
},
{
 "id": "D4-150",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>VMs in Subnet-DB must access a storage account without traffic going over the internet, and you want to prevent access to any other storage account from this subnet.</p><p>Which <b>two</b> solutions meet the need?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "An NSG rule that allows the Storage tag",
  "A private endpoint for the account, and outbound NSG rules that only allow its private address (denying the Storage tag)",
  "A NAT gateway",
  "A Microsoft.Storage service endpoint with a service endpoint policy listing the allowed account"
 ],
 "ans": [
  1,
  3
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>You publish a web application to the internet behind Application Gateway v2 with WAF. The web VMs must only receive traffic from the gateway.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Remove the public IP addresses from the web VMs",
  "Place the VMs in the Application Gateway subnet",
  "Create an NSG on the VMs' subnet that only allows inbound traffic from the Application Gateway subnet on the web ports",
  "Enable a NAT gateway on the Application Gateway subnet"
 ],
 "ans": [
  0,
  2
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
 "id": "D4-152",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to allow outbound traffic from the VMs only to Microsoft Entra ID address ranges, in an NSG, without maintaining an address list.</p><p>Which destination should you use in the rule?</p>",
 "opts": [
  "The Internet tag",
  "The address 168.63.129.16",
  "An application security group",
  "The AzureActiveDirectory service tag"
 ],
 "ans": 3,
 "expl": "<p>The <b>AzureActiveDirectory</b> service tag represents Microsoft Entra ID address ranges, kept up to date by Microsoft. Service tags are used as the source or destination of NSG rules, Azure Firewall rules, and even in user-defined routes.</p>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG1"
  ],
  "title": "Add outbound security rule",
  "rows": [
   [
    "*Destination",
    "Service tag: AzureActiveDirectory"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Entra ID ranges = AzureActiveDirectory tag."
},
{
 "id": "D4-153",
 "dom": 4,
 "type": "single",
 "stem": "<p>You create a route table in subscription Sub1 and want to associate it with a subnet of a virtual network in subscription Sub2, in the same region.</p><p>What happens?</p>",
 "opts": [
  "It's impossible: the route table and the virtual network must be in the same subscription and region",
  "You need a peering",
  "You need a VPN gateway",
  "The association works"
 ],
 "ans": 0,
 "expl": "<p>A route table can only be associated with subnets of virtual networks in the <b>same subscription</b> and <b>same region</b>. Same rule for NSGs (same region).</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-Sub2",
   "Subnet"
  ],
  "title": "Edit subnet",
  "rows": [
   [
    "*Route table",
    "Only Sub2 tables / same region"
   ]
  ]
 },
 "keep": "Route table = same subscription and region as the VNet."
},
{
 "id": "D4-154",
 "dom": 4,
 "type": "single",
 "stem": "<p>A third-party firewall VM (NVA) is alone in the hub. If it fails, all spoke traffic is cut off.</p><p>How do you make the NVA highly available?</p>",
 "opts": [
  "Enable IP forwarding on the spokes",
  "Deploy two NVAs behind a Standard internal load balancer with an HA ports rule, and point the routes to the load balancer's frontend address",
  "Add a second network interface to the NVA",
  "Use a Basic public load balancer"
 ],
 "ans": 1,
 "expl": "<p>The recommended pattern: two (or more) NVAs in a pool of a <b>Standard internal load balancer</b> with <b>HA ports</b>. Spoke routes target the load balancer's <b>frontend address</b>, which sends traffic to a healthy NVA thanks to the health probe.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB-NVA"
  ],
  "title": "LB-NVA | Rules",
  "rows": [
   [
    "*HA ports",
    "NVA1, NVA2"
   ],
   [
    "Spoke routes",
    "→ 10.0.0.10 (frontend)"
   ]
  ]
 },
 "keep": "HA NVA = 2 NVAs + internal LB with HA ports; UDR to the frontend."
},
{
 "id": "D4-155",
 "dom": 4,
 "type": "single",
 "stem": "<p>A VM has a Standard public IP address. No NSG is associated with its network interface or subnet.</p><p>Can a client on the internet reach the VM on port 80?</p>",
 "opts": [
  "No, because a VM can't have a Standard public address",
  "Yes, because without an NSG everything is allowed",
  "No, because Standard public IP addresses block inbound traffic until an NSG allows it",
  "Yes, but only over HTTPS"
 ],
 "ans": 2,
 "expl": "<p><b>Standard</b> public IP addresses are <b>secure by default</b>: without an NSG that allows traffic, inbound connections are denied. (With the old Basic SKU, the VM was open without an NSG.)</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Networking",
  "rows": [
   [
    "Public IP",
    "Standard"
   ],
   [
    "*Inbound",
    "Denied (no NSG)"
   ]
  ]
 },
 "keep": "Standard IP with no NSG = nothing gets in."
},
{
 "id": "D4-156",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want traffic between two peered virtual networks to be encrypted, without a VPN gateway.</p><p>Which feature can you enable?</p>",
 "opts": [
  "A NAT gateway",
  "A DNS record",
  "An NSG",
  "Virtual network encryption on both networks, with compatible VM sizes"
 ],
 "ans": 3,
 "expl": "<p><b>Virtual network encryption</b> encrypts traffic between VMs (including between peered networks) with DTLS, at the infrastructure level, for VM sizes that support accelerated networking. Otherwise peering traffic isn't encrypted (but it stays private, on the Microsoft network).</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Encryption",
  "menu": [
   "*Encryption"
  ],
  "rows": [
   [
    "*Virtual network encryption",
    "Enabled"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Encrypting between VNets with no VPN = virtual network encryption."
},
{
 "id": "D4-157",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in a public load balancer pool receive connections fine, but the application logs show all requests coming from the load balancer's address.</p><p>Which statement is true?</p>",
 "opts": [
  "Azure Load Balancer preserves the client's source IP address: another upstream component (proxy) hides the address",
  "You must enable session persistence to see the client's address",
  "Azure Load Balancer always replaces the source address",
  "You need a Basic load balancer"
 ],
 "ans": 0,
 "expl": "<p>Azure Load Balancer works at layer 4 and <b>preserves the source IP address</b> of clients (no proxy). If the application sees another address, another component (proxy, Application Gateway) is upstream. Application Gateway passes the client address in the <b>X-Forwarded-For</b> header.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB1"
  ],
  "title": "Flow",
  "rows": [
   [
    "*Load Balancer",
    "Source address preserved"
   ],
   [
    "Application Gateway",
    "X-Forwarded-For"
   ]
  ]
 },
 "keep": "LB preserves the client IP; AppGW puts it in X-Forwarded-For."
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
 },
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
 "keep": "Multi-site + P2S + zones + BGP = route-based VPN + AZ SKU + BGP."
},
{
 "id": "D4-161",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You create a load-balancing rule on the public load balancer LB5. HTTPS traffic (443) must be distributed to port 8443 on the VMs, and the same client must stay on the same VM.</p><p>How should you configure the rule?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 },
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
 "keep": "Frontend port ≠ backend port; the probe tests the backend port."
},
{
 "id": "D4-162",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>You need to add a virtual network link to the private DNS zone corp.contoso.local.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "Linking a private zone = Virtual Network Links."
},
{
 "id": "D4-163",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>You need to associate NSG NSG8 with the subnet Subnet-Web.</p><p>In NSG8, which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "Associating an NSG = Subnets or Network interfaces."
},
{
 "id": "D4-164",
 "dom": 4,
 "type": "single",
 "stem": "<p>A web app in App Service must be reachable from the internet only through Azure Front Door, never directly.</p><p>What should you configure on the web app?</p>",
 "opts": [
  "A DNAT rule",
  "Access restrictions with the AzureFrontDoor.Backend service tag and a filter on your profile's X-Azure-FDID header",
  "A NAT gateway",
  "An NSG associated with the app"
 ],
 "ans": 1,
 "expl": "<p>App Service <b>access restrictions</b> allow the <b>AzureFrontDoor.Backend</b> tag. Since all Front Door instances share these addresses, you also filter on the <b>X-Azure-FDID</b> header (your profile ID). You can also use Front Door Premium with a private endpoint.</p>",
 "portal": {
  "path": [
   "App Services",
   "web1"
  ],
  "title": "web1 | Access restrictions",
  "rows": [
   [
    "*AzureFrontDoor.Backend",
    "Allow · X-Azure-FDID = <ID>"
   ],
   [
    "Everything else",
    "Deny"
   ]
  ]
 },
 "keep": "Only through Front Door = AzureFrontDoor.Backend tag + X-Azure-FDID."
},
{
 "id": "D4-165",
 "dom": 4,
 "type": "single",
 "stem": "<p>On-premises users incorrectly resolve the names of Azure resources that use private endpoints. You deployed Azure DNS Private Resolver with an inbound endpoint (10.0.10.4).</p><p>What should you configure on the on-premises DNS servers?</p>",
 "opts": [
  "Manual A records to the public addresses",
  "A forwarder to 168.63.129.16",
  "Conditional forwarders for the services' public zones (for example blob.core.windows.net) to 10.0.10.4",
  "A public DNS zone"
 ],
 "ans": 2,
 "expl": "<p>On-premises servers forward queries for the relevant domains (for example <code>blob.core.windows.net</code> or <code>privatelink.blob.core.windows.net</code>) to the resolver's <b>inbound endpoint</b>, which resolves them with the linked private zones. 168.63.129.16 isn't reachable from on-premises.</p>",
 "portal": {
  "path": [
   "On-premises DNS servers"
  ],
  "title": "Conditional forwarders",
  "rows": [
   [
    "*blob.core.windows.net",
    "→ 10.0.10.4"
   ]
  ]
 },
 "keep": "On-premises DNS → resolver inbound endpoint."
},
{
 "id": "D4-166",
 "dom": 4,
 "type": "single",
 "stem": "<p>You deploy a Standard internal load balancer. VMs in the pool must keep reaching the internet.</p><p>Which statement is true?</p>",
 "opts": [
  "The internal load balancer automatically provides internet egress",
  "VMs in the internal pool can never reach the internet",
  "You need a Basic load balancer",
  "An internal load balancer doesn't provide internet egress: you need a NAT gateway, public addresses, or a firewall"
 ],
 "ans": 3,
 "expl": "<p>An <b>internal</b> load balancer has no public address, so no SNAT to the internet. You need an explicit egress method: <b>NAT gateway</b> (recommended), instance public addresses, public load balancer with outbound rules, or firewall.</p>",
 "portal": {
  "path": [
   "NAT gateways",
   "NAT-Pool"
  ],
  "title": "Subnets",
  "rows": [
   [
    "*Subnet-Pool",
    "Associated"
   ],
   [
    "Internal LB",
    "No internet egress"
   ]
  ]
 },
 "keep": "Internal LB = no egress: NAT gateway."
},
{
 "id": "D4-167",
 "dom": 4,
 "type": "single",
 "stem": "<p>Two teams created virtual networks with the same address space, 10.0.0.0/16. They now need to communicate.</p><p>What is the cleanest solution?</p>",
 "opts": [
  "Re-address one of the virtual networks (new space, migrate resources), then peer them",
  "Add an NSG",
  "Create a shared private DNS zone",
  "Peer them directly"
 ],
 "ans": 0,
 "expl": "<p>Overlapping spaces prevent peering and routing. The clean solution is to <b>re-address</b> one of the networks. Workarounds exist (NAT on a VPN gateway, Private Link to expose specific services), but they complicate the architecture. Hence the importance of an addressing plan from the start.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-Team2"
  ],
  "title": "Address space",
  "rows": [
   [
    "Old",
    "10.0.0.0/16"
   ],
   [
    "*New",
    "10.50.0.0/16"
   ]
  ]
 },
 "keep": "Overlap = re-address, then peer."
},
{
 "id": "D4-168",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to shrink the range of subnet Subnet7 from 10.0.1.0/24 to 10.0.1.0/25. Three VMs are deployed in it, with addresses between 10.0.1.4 and 10.0.1.6.</p><p>Which condition must be met to change the range?</p>",
 "opts": [
  "The virtual network must not be peered",
  "The subnet must contain no deployed resources",
  "No used address must be outside the new range, even if VMs are in it",
  "The subnet must be delegated"
 ],
 "ans": 1,
 "expl": "<p>A subnet's address range can only be changed if it contains <b>no deployed resources</b>. Otherwise, you must first move the resources to another subnet (or delete them), change the range, then move them back.</p><p>Hence the value of sizing subnets correctly from the start. Peering and delegation are unrelated.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1",
   "Subnet7"
  ],
  "title": "Edit subnet",
  "rows": [
   [
    "*Range",
    "Can't be changed: resources deployed"
   ]
  ]
 },
 "keep": "Changing a subnet's range = empty it first."
},
{
 "id": "D4-169",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to delete the virtual network VNet9. The deletion fails.</p><p>What is the most likely cause?</p>",
 "opts": [
  "VNet9 has too many subnets",
  "An NSG isn't associated with any subnet",
  "Resources are still connected (network interfaces, gateway, private endpoints) or a lock applies",
  "VNet9 uses Azure-provided DNS"
 ],
 "ans": 2,
 "expl": "<p>You can't delete a virtual network while resources use it (VM network interfaces, gateways, Bastion, private endpoints, delegated services…) or if a <b>lock</b> protects it. You must first delete or move those resources.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet9"
  ],
  "title": "VNet9 | Connected devices",
  "menu": [
   "*Connected devices"
  ],
  "rows": [
   [
    "*vm1-nic",
    "Network interface"
   ],
   [
    "pe-sql",
    "Private endpoint"
   ]
  ]
 },
 "keep": "Deleting a VNet = no more connected resources, no lock."
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
 "id": "D4-172",
 "dom": 4,
 "type": "single",
 "stem": "<p>A policy forbids putting NSGs on subnets that contain private endpoints, since they have no effect. Your team still wants to filter traffic to these endpoints with NSGs and UDRs.</p><p>What should you enable on the subnet?</p>",
 "opts": [
  "Service endpoints",
  "Private subnet",
  "Subnet delegation",
  "Private endpoint network policies (privateEndpointNetworkPolicies)"
 ],
 "ans": 3,
 "expl": "<p>By default, NSGs and user-defined routes don't apply to <b>private endpoints</b>. By enabling <b>private endpoint network policies</b> on the subnet, NSGs and UDRs apply to them.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1",
   "Subnet-PE"
  ],
  "title": "Edit subnet",
  "rows": [
   [
    "*Private endpoint network policy",
    "NSG + route tables"
   ]
  ],
  "btn": "Save"
 },
 "keep": "NSG/UDR on a private endpoint = enable its network policies."
},
{
 "id": "D4-173",
 "dom": 4,
 "type": "single",
 "stem": "<p>An Application Gateway must forward requests over HTTPS end to end to the backend servers, which use a certificate from an internal authority.</p><p>What should you configure in the backend settings?</p>",
 "opts": [
  "The HTTPS protocol and the internal authority's trusted root certificate",
  "A public IP address on each server",
  "The HTTP protocol only",
  "A DNAT rule"
 ],
 "ans": 0,
 "expl": "<p>For <b>end-to-end encryption</b>, the backend settings use <b>HTTPS</b>. With v2, if the servers' certificate isn't issued by a well-known public authority, you upload the internal authority's <b>trusted root certificate</b>.</p>",
 "portal": {
  "path": [
   "Application gateways",
   "AG1"
  ],
  "title": "Backend settings",
  "rows": [
   [
    "*Protocol",
    "HTTPS"
   ],
   [
    "*Trusted root certificate",
    "Internal-CA.cer"
   ]
  ],
  "btn": "Save"
 },
 "keep": "End-to-end TLS + internal CA = HTTPS + trusted root."
},
{
 "id": "D4-174",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want Application Gateway to route /video/* to the pool Pool-Video and everything else to Pool-Default.</p><p>Which type of routing rule should you use?</p>",
 "opts": [
  "An inbound NAT rule",
  "A path-based rule, with a default target of Pool-Default",
  "A basic rule",
  "An outbound rule"
 ],
 "ans": 1,
 "expl": "<p>A <b>path-based</b> rule maps path patterns (/video/*) to pools and settings. Requests that don't match any path go to the <b>default target</b>.</p>",
 "portal": {
  "path": [
   "Application gateways",
   "AG1"
  ],
  "title": "Path-based rule",
  "rows": [
   [
    "*/video/*",
    "Pool-Video"
   ],
   [
    "Default target",
    "Pool-Default"
   ]
  ]
 },
 "keep": "URL-based routing = path-based rule + default target."
},
{
 "id": "D4-175",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want a development subscription to never be able to create a VPN gateway or an ExpressRoute circuit, to avoid uncontrolled connections to on-premises.</p><p>Which solution is the most suitable?</p>",
 "opts": [
  "An NSG on each virtual network",
  "A private DNS zone",
  "An Azure Policy Not allowed resource types (virtual network gateways, ExpressRoute circuits)",
  "A route table"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Policy</b> with the <b>Not allowed resource types</b> policy prevents creating these resources in the subscription, whatever the user's role.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assign policy"
  ],
  "title": "Not allowed resource types",
  "rows": [
   [
    "*Types",
    "virtualNetworkGateways, expressRouteCircuits"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Forbidding a resource type = Azure Policy."
},
{
 "id": "D4-176",
 "dom": 4,
 "type": "single",
 "stem": "<p>You manage a hub-and-spoke topology with 15 spokes. You want to automatically create and manage peerings and connectivity between network groups, with centralized security rules.</p><p>Which service should you use?</p>",
 "opts": [
  "Network Watcher",
  "Traffic Manager",
  "Azure DNS",
  "Azure Virtual Network Manager"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Virtual Network Manager</b> groups virtual networks (network groups, static or dynamic through Azure Policy), deploys <b>connectivity configurations</b> (hub-and-spoke or mesh) and <b>security admin rules</b> that take precedence over NSGs.</p>",
 "portal": {
  "path": [
   "Network Managers",
   "AVNM1"
  ],
  "title": "AVNM1 | Configurations",
  "menu": [
   "Network groups",
   "*Configurations"
  ],
  "rows": [
   [
    "*Connectivity",
    "Hub and spoke · 15 spokes"
   ]
  ],
  "btn": "Deploy"
 },
 "keep": "Connectivity at scale = Azure Virtual Network Manager."
},
{
 "id": "D4-177",
 "dom": 4,
 "type": "single",
 "stem": "<p>A security team wants to enforce rules that block certain ports (for example 23 and 445 from the internet) in all virtual networks, without NSG owners being able to override them.</p><p>What should you use?</p>",
 "opts": [
  "Azure Virtual Network Manager security admin rules",
  "User-defined routes",
  "Application security groups",
  "NSGs with priority 4096"
 ],
 "ans": 0,
 "expl": "<p>Azure Virtual Network Manager <b>security admin rules</b> are evaluated <b>before</b> NSGs. An “Always deny” rule can't be overridden by an NSG rule.</p>",
 "portal": {
  "path": [
   "Network Managers",
   "AVNM1"
  ],
  "title": "Security admin configuration",
  "rows": [
   [
    "*Block 23 and 445",
    "Always deny"
   ]
  ]
 },
 "keep": "Rules NSGs can't override = security admin rules."
},
{
 "id": "D4-178",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in VNet1 must access Azure SQL Database through a private address, and the SQL server must deny all public access.</p><p>Which SQL server setting should you configure after creating the private endpoint?</p>",
 "opts": [
  "Allow Azure services access",
  "Disable public network access",
  "Add a 0.0.0.0 firewall rule",
  "Add a service endpoint"
 ],
 "ans": 1,
 "expl": "<p>Once the <b>private endpoint</b> is in place, you <b>disable public network access</b>: only connections through private endpoints remain possible. Allowing Azure services or an IP rule would reopen public access.</p>",
 "portal": {
  "path": [
   "SQL servers",
   "sql1"
  ],
  "title": "sql1 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Public network access",
    "Disable"
   ],
   [
    "Private endpoints",
    "pe-sql1"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Private endpoint + disable public access."
},
{
 "id": "D4-179",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to analyze which VMs communicate most with the internet, and detect unnecessarily open ports, from flow logs.</p><p>Which feature should you enable?</p>",
 "opts": [
  "Connection monitor",
  "Topology",
  "Traffic Analytics, with a Log Analytics workspace",
  "Packet capture"
 ],
 "ans": 2,
 "expl": "<p><b>Traffic Analytics</b> processes flow logs and shows dashboards in Log Analytics: flows by VM, country, ports, malicious traffic, unused open ports.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Traffic Analytics",
  "menu": [
   "*Traffic Analytics"
  ],
  "rows": [
   [
    "*Top VMs",
    "Internet flows"
   ],
   [
    "Open ports",
    "Unused"
   ]
  ]
 },
 "keep": "Analyzing flows = Traffic Analytics."
},
{
 "id": "D4-180",
 "dom": 4,
 "type": "single",
 "stem": "<p>A VM has two network interfaces in two subnets. It doesn't respond to traffic received on the secondary interface.</p><p>What is the most common cause?</p>",
 "opts": [
  "The VM has no public address",
  "The secondary interface has no NSG",
  "The secondary interface must be in another virtual network",
  "The default gateway is only configured for the primary interface: you must add routes in the operating system"
 ],
 "ans": 3,
 "expl": "<p>Azure only provides the default gateway on the <b>primary</b> interface. Responses to traffic received on the secondary interface leave through the primary interface, which breaks communication. You must configure <b>routing</b> in the operating system (routes or per-interface route tables).</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "Operating system",
  "rows": [
   [
    "Primary NIC",
    "Default gateway"
   ],
   [
    "*Secondary NIC",
    "Routes to add in the OS"
   ]
  ]
 },
 "keep": "Second NIC not responding = routing in the OS."
},
{
 "id": "D4-181",
 "dom": 4,
 "type": "single",
 "stem": "<p>You deploy an ExpressRoute gateway and a VPN gateway in VNet1.</p><p>Which condition must the GatewaySubnet meet?</p>",
 "opts": [
  "Be large enough for both gateways, at least /27",
  "It must have an NSG that blocks everything",
  "It must be /29",
  "You need two GatewaySubnets"
 ],
 "ans": 0,
 "expl": "<p>ExpressRoute and VPN gateways coexist in the <b>same</b> GatewaySubnet, which must be at least <b>/27</b>. Associating an NSG with the GatewaySubnet isn't recommended.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "GatewaySubnet",
  "rows": [
   [
    "*Size",
    "/27 minimum"
   ],
   [
    "Gateways",
    "ExpressRoute + VPN"
   ]
  ]
 },
 "keep": "ER + VPN coexistence = one GatewaySubnet /27+."
},
{
 "id": "D4-182",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to connect two virtual networks in two regions with IPsec encryption, because a standard requires it.</p><p>What should you use?</p>",
 "opts": [
  "Global peering",
  "A VNet-to-VNet VPN connection between two VPN gateways",
  "A NAT gateway",
  "Azure Front Door"
 ],
 "ans": 1,
 "expl": "<p>A <b>VNet-to-VNet</b> connection links two VPN gateways with an <b>IPsec/IKE</b> tunnel. Peering doesn't use IPsec (traffic stays private on the Microsoft network, but isn't IPsec-encrypted).</p>",
 "portal": {
  "path": [
   "Connections",
   "Create"
  ],
  "title": "Create connection",
  "rows": [
   [
    "*Type",
    "VNet-to-VNet"
   ],
   [
    "Encryption",
    "IPsec/IKE"
   ]
  ],
  "btn": "Create"
 },
 "keep": "IPsec between VNets = VNet-to-VNet connection."
},
{
 "id": "D4-183",
 "dom": 4,
 "type": "single",
 "stem": "<p>You manage a Standard public load balancer with two frontend addresses. VMs must reach the internet through the second address only.</p><p>What should you configure?</p>",
 "opts": [
  "A health probe",
  "Session persistence",
  "An outbound rule that uses the second frontend address, and disable implicit SNAT in the load-balancing rule",
  "An inbound NAT rule"
 ],
 "ans": 2,
 "expl": "<p><b>Outbound rules</b> explicitly define which frontend addresses are used for SNAT. You disable the default SNAT of load-balancing rules (option “use outbound rules”) so they don't also provide egress.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB1"
  ],
  "title": "Outbound rules",
  "rows": [
   [
    "*outbound-2",
    "Frontend 2"
   ],
   [
    "Load-balancing rule",
    "SNAT: use outbound rules"
   ]
  ]
 },
 "keep": "Choosing the egress IP = outbound rule + implicit SNAT disabled."
},
{
 "id": "D4-184",
 "dom": 4,
 "type": "single",
 "stem": "<p>A subscription must use at most 50 public IP addresses in France Central. A creation fails.</p><p>What should you check?</p>",
 "opts": [
  "The GatewaySubnet size",
  "The number of NSGs",
  "The VM SKU",
  "The subscription's public IP address quota in the region (Usage + quotas)"
 ],
 "ans": 3,
 "expl": "<p>Network resources also have <b>quotas</b> per subscription and region (public IP addresses, virtual networks, NSGs…). You view them in <b>Usage + quotas</b> and request an increase if needed.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Usage + quotas",
  "menu": [
   "*Usage + quotas"
  ],
  "rows": [
   [
    "*Public IP addresses · France Central",
    "50 / 50"
   ]
  ],
  "btn": "New quota request"
 },
 "keep": "Creation denied = check network quotas."
},
{
 "id": "D4-185",
 "dom": 4,
 "type": "single",
 "stem": "<p>A VM must be reachable from the internet by the name vm-demo.francecentral.cloudapp.azure.com.</p><p>What should you configure?</p>",
 "opts": [
  "A DNS name label on the VM's public IP address",
  "A private endpoint",
  "A private DNS zone",
  "An MX record"
 ],
 "ans": 0,
 "expl": "<p>A public IP address can have a <b>DNS name label</b>, which creates the name <code>&lt;label&gt;.&lt;region&gt;.cloudapp.azure.com</code> pointing to it. For a name in your own domain, you then create a CNAME to that name (or an alias in Azure DNS).</p>",
 "portal": {
  "path": [
   "Public IP addresses",
   "vm-demo-pip"
  ],
  "title": "vm-demo-pip | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*DNS name label",
    "vm-demo"
   ]
  ],
  "btn": "Save"
 },
 "keep": "cloudapp.azure.com name = public IP DNS label."
},
{
 "id": "D4-186",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in VNet1 must access VMs in VNet2 (peered) only on port 443, and the rest of the traffic between the two networks must be blocked.</p><p>What should you configure?</p>",
 "opts": [
  "A route table",
  "NSGs that allow 443 from VNet1's space and deny the rest of that traffic, with a higher priority than AllowVnetInBound",
  "Disable the peering",
  "A service endpoint"
 ],
 "ans": 1,
 "expl": "<p>Peering doesn't filter anything: the default <b>AllowVnetInBound</b> rule allows traffic from peered networks. To filter, you add custom NSG rules (priority below 65000): allow 443 from VNet1's 10.x range, then deny the rest coming from that range.</p>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG-VNet2"
  ],
  "title": "Inbound rules",
  "rows": [
   [
    "*100",
    "VNet1 → 443 · Allow"
   ],
   [
    "200",
    "VNet1 → Any · Deny"
   ]
  ]
 },
 "keep": "Peering = everything open; filter with NSGs before 65000."
},
{
 "id": "D4-187",
 "dom": 4,
 "type": "single",
 "stem": "<p>A critical application in France Central must keep running if a datacenter is lost. It uses a Standard load balancer.</p><p>How should the load balancer's frontend address be configured?</p>",
 "opts": [
  "With a Basic address",
  "Zonal in zone 1",
  "Zone-redundant",
  "No zone"
 ],
 "ans": 2,
 "expl": "<p>A <b>zone-redundant</b> frontend address is served by all zones: it survives the loss of a zone. The pool VMs must also be spread across several zones.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "Create"
  ],
  "title": "Frontend IP configuration",
  "rows": [
   [
    "*Availability zone",
    "Zone-redundant"
   ]
  ]
 },
 "keep": "Surviving a zone = zone-redundant frontend."
},
{
 "id": "D4-188",
 "dom": 4,
 "type": "single",
 "stem": "<p>An internal web application must be published on a private IP address only, with TLS termination and path-based routing.</p><p>What should you deploy?</p>",
 "opts": [
  "Azure Front Door",
  "A public load balancer",
  "Traffic Manager",
  "Application Gateway v2 with a private frontend IP address"
 ],
 "ans": 3,
 "expl": "<p>Application Gateway can have a <b>private frontend address</b> (with or without a public frontend depending on the configuration) to publish internal applications, with all its layer 7 features. Front Door and Traffic Manager are global public services.</p>",
 "portal": {
  "path": [
   "Application gateways",
   "AG-Int"
  ],
  "title": "Frontends",
  "rows": [
   [
    "*IP address type",
    "Private · 10.0.5.10"
   ]
  ]
 },
 "keep": "Internal L7 app = AppGW with a private frontend."
},
{
 "id": "D4-189",
 "dom": 4,
 "type": "single",
 "stem": "<p>An administrator must see the Azure Firewall rule logs (rules that allowed or denied flows) and query them.</p><p>What should you configure?</p>",
 "opts": [
  "A firewall diagnostic setting to a Log Analytics workspace (structured tables)",
  "A packet capture",
  "The activity log",
  "NSG flow logs"
 ],
 "ans": 0,
 "expl": "<p>Azure Firewall sends its logs (application, network, DNAT, DNS proxy, IDPS rules) through a <b>diagnostic setting</b>. With Log Analytics and <b>resource-specific tables</b> (AZFWNetworkRule, AZFWApplicationRule…), you query them in KQL, and built-in workbooks visualize them.</p>",
 "portal": {
  "path": [
   "Firewalls",
   "FW1"
  ],
  "title": "Diagnostic settings",
  "rows": [
   [
    "*Destination",
    "Log Analytics · resource-specific tables"
   ],
   [
    "Tables",
    "AZFWNetworkRule, AZFWApplicationRule"
   ]
  ]
 },
 "keep": "Firewall logs = diagnostic setting → Log Analytics."
},
{
 "id": "D4-190",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You design the connection of an on-premises site to Azure. It must be encrypted and use the internet, at the lowest cost, with high availability.</p><p>Which <b>two</b> actions are suitable?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Use a policy-based gateway",
  "Deploy a route-based VPN gateway in active-active mode",
  "Order an ExpressRoute circuit",
  "Configure two on-premises VPN devices (or two tunnels) to the gateway's two instances"
 ],
 "ans": [
  1,
  3
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>You troubleshoot a VM that can't be reached over RDP through Azure Bastion.</p><p>Which <b>two</b> checks are relevant?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "The RDP service is running and Windows Firewall allows it",
  "The storage account is RA-GRS",
  "The VM's NSG allows port 3389 from AzureBastionSubnet",
  "The VM has a public IP address"
 ],
 "ans": [
  0,
  2
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
},
{
 "id": "D4-192",
 "dom": 4,
 "type": "single",
 "stem": "<p>A Traffic Manager profile monitors two web apps. One returns 500 errors, but Traffic Manager still considers it healthy.</p><p>What should you check?</p>",
 "opts": [
  "The routing method",
  "The profile's monitoring settings: protocol, port, and path (for example /health) and expected status codes",
  "The number of endpoints",
  "The DNS TTL"
 ],
 "ans": 1,
 "expl": "<p>Traffic Manager judges an endpoint's state from its <b>monitoring</b> (HTTP, HTTPS, or TCP, port, path, expected codes). If the monitored path (for example the root) returns 200 while the application fails elsewhere, you must monitor a more representative health path.</p>",
 "portal": {
  "path": [
   "Traffic Manager profiles",
   "TM1"
  ],
  "title": "TM1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Path",
    "/health"
   ],
   [
    "Expected codes",
    "200-299"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Endpoint misjudged = monitoring settings."
},
{
 "id": "D4-193",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want VMs in Subnet-Batch to use 4 fixed public IP addresses for their many outbound connections, to avoid SNAT port exhaustion.</p><p>What should you configure?</p>",
 "opts": [
  "An inbound NAT rule",
  "An application security group",
  "A NAT gateway with 4 public IP addresses (or a prefix)",
  "An internal load balancer"
 ],
 "ans": 2,
 "expl": "<p>Each public address of a <b>NAT gateway</b> provides about 64,000 SNAT ports, shared dynamically among all VMs in the subnet. Adding addresses (up to 16) increases capacity and reduces the risk of exhaustion.</p>",
 "portal": {
  "path": [
   "NAT gateways",
   "NAT-Batch"
  ],
  "title": "Outbound IP",
  "rows": [
   [
    "*Public IP addresses",
    "4 (≈ 256,000 SNAT ports)"
   ]
  ]
 },
 "keep": "SNAT exhaustion = more IPs on the NAT gateway."
},
{
 "id": "D4-194",
 "dom": 4,
 "type": "single",
 "stem": "<p>VM16 is behind a Standard public load balancer and on a subnet with a NAT gateway. Through which address does its outbound internet traffic leave?</p>",
 "opts": [
  "Through the load balancer's frontend address",
  "It's blocked",
  "Through the address 168.63.129.16",
  "Through the NAT gateway"
 ],
 "ans": 3,
 "expl": "<p>The <b>NAT gateway</b> takes precedence over other egress methods (load balancer outbound rules, instance public addresses). <b>Inbound</b> traffic through the load balancer keeps working, and its responses go back through the load balancer.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM16"
  ],
  "title": "Internet egress",
  "rows": [
   [
    "*NAT gateway",
    "Takes precedence"
   ],
   [
    "LB",
    "Inbound + responses"
   ]
  ]
 },
 "keep": "NAT gateway = takes precedence for egress."
},
{
 "id": "D4-195",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to filter traffic between two subnets of the same virtual network through a firewall (NVA), not directly.</p><p>What should you configure?</p>",
 "opts": [
  "User-defined routes in each subnet, with the other subnet's prefix pointing to the NVA",
  "An NSG only",
  "A peering between the subnets",
  "A NAT gateway"
 ],
 "ans": 0,
 "expl": "<p>By default, traffic between subnets follows the virtual network system route. A more specific <b>user-defined route</b> (the other subnet's prefix, next hop Virtual appliance) forces traffic through the NVA. The subnet prefix is longer than the virtual network's, so it takes precedence.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT-SubA"
  ],
  "title": "Routes",
  "rows": [
   [
    "*10.0.2.0/24",
    "Virtual appliance · NVA"
   ]
  ]
 },
 "keep": "Inter-subnet through an NVA = UDR with the subnet prefix."
},
{
 "id": "D4-196",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to know whether an NSG rule applied to a VM is too permissive, and get automatic recommendations about management ports open to the internet.</p><p>Which service should you consult?</p>",
 "opts": [
  "Azure DNS",
  "Microsoft Defender for Cloud (network recommendations)",
  "Traffic Manager",
  "Azure Resource Mover"
 ],
 "ans": 1,
 "expl": "<p><b>Microsoft Defender for Cloud</b> assesses configuration (including NSGs) and makes recommendations, for example closing management ports exposed to the internet, enabling just-in-time access, or hardening NSG rules.</p>",
 "portal": {
  "path": [
   "Microsoft Defender for Cloud"
  ],
  "title": "Recommendations",
  "rows": [
   [
    "*Management ports",
    "Close to the internet / JIT"
   ]
  ]
 },
 "keep": "NSG recommendations = Defender for Cloud."
},
{
 "id": "D4-197",
 "dom": 4,
 "type": "single",
 "stem": "<p>You manage an App Service app integrated with virtual network VNet3. It must resolve names in a private DNS zone linked to VNet3.</p><p>Which statement is true?</p>",
 "opts": [
  "App Service can never resolve a private zone",
  "You need a service endpoint",
  "With virtual network integration, the app uses the virtual network's DNS configuration, so the linked private zone",
  "You need a public IP address"
 ],
 "ans": 2,
 "expl": "<p>With <b>virtual network integration</b>, the app inherits the DNS servers configured on the virtual network (Azure DNS by default, which resolves linked private zones). That's what makes it possible to use private endpoints from App Service.</p>",
 "portal": {
  "path": [
   "App Services",
   "app3"
  ],
  "title": "app3 | Networking",
  "rows": [
   [
    "*Virtual network integration",
    "VNet3"
   ],
   [
    "DNS",
    "The VNet's (private zones)"
   ]
  ]
 },
 "keep": "App Service + VNet integration = the VNet's DNS."
},
{
 "id": "D4-198",
 "dom": 4,
 "type": "single",
 "stem": "<p>A developer wants to test access from a VM to storage91.blob.core.windows.net and see the resolved IP address.</p><p>Which command can he use in the Windows VM?</p>",
 "opts": [
  "ipconfig /release",
  "tracert 168.63.129.16",
  "netstat -r",
  "nslookup storage91.blob.core.windows.net"
 ],
 "ans": 3,
 "expl": "<p><code>nslookup</code> (or <code>Resolve-DnsName</code> in PowerShell) shows the resolved address: a private address (with the privatelink CNAME) if the private endpoint and DNS are configured correctly, otherwise a public address. <code>Test-NetConnection -Port 443</code> then checks the connection.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "Command Prompt",
  "rows": [
   [
    "*nslookup storage91.blob…",
    "10.0.1.8 (privatelink)"
   ]
  ]
 },
 "keep": "Seeing the resolved IP = nslookup / Resolve-DnsName."
},
{
 "id": "D4-199",
 "dom": 4,
 "type": "single",
 "stem": "<p>A company wants to publish an application to the internet at layer 4 (TCP) in three regions, with a single global public IP address (anycast) and instant failover between regions.</p><p>What should you use?</p>",
 "opts": [
  "A cross-region load balancer (global tier)",
  "Application Gateway",
  "Traffic Manager",
  "A NAT gateway"
 ],
 "ans": 0,
 "expl": "<p>The <b>cross-region load balancer</b> (Global tier) provides a global <b>anycast</b> IP address in front of regional Standard load balancers, for TCP/UDP traffic, with failover that doesn't depend on DNS caching.</p><p>Traffic Manager is DNS-based (failover subject to TTL). Application Gateway is regional and HTTP.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "Create"
  ],
  "title": "Create load balancer",
  "rows": [
   [
    "*Tier",
    "Global (cross-region)"
   ],
   [
    "Frontend",
    "Anycast IP"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Global L4 anycast = cross-region load balancer."
},
{
 "id": "D4-200",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in VNet-Prod must never communicate with those in VNet-Dev. Both networks are in the same subscription, with no peering or VPN.</p><p>What should you do?</p>",
 "opts": [
  "Add a None route table",
  "Nothing: with no peering or gateway, two virtual networks are isolated",
  "Add an NSG that blocks VNet-Dev",
  "Place them in two different subscriptions"
 ],
 "ans": 1,
 "expl": "<p>A virtual network is an <b>isolation boundary</b>: with no peering, VPN, or other connection, its resources can't reach those of another network through private addresses. (They could reach each other through their public addresses, if they have any.)</p>",
 "portal": {
  "path": [
   "Virtual networks"
  ],
  "title": "Virtual networks",
  "rows": [
   [
    "VNet-Prod",
    "No peering"
   ],
   [
    "*VNet-Dev",
    "Isolated"
   ]
  ]
 },
 "keep": "A VNet is isolated by default."
}
);
