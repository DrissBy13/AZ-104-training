/* Domain 4: virtual networking (batch C : D4-065 to D4-119) */
AZ.questions.push(
{
 "id": "D4-065",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate load-balancing service for each need.</p><p>To answer, drag the appropriate service to each need. Each service may be used once, more than once, or not at all.</p>",
 "srcLabel": "Services",
 "srcs": [
  "Azure Load Balancer",
  "Application Gateway",
  "Traffic Manager",
  "Azure Front Door"
 ],
 "tgtHead": [
  "Need",
  "Service"
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
 ],
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
 "keep": "Frontend → pool → probe → rule (which ties the three)."
},
{
 "id": "D4-067",
 "dom": 4,
 "type": "single",
 "stem": "<p>LB2, a Standard public load balancer, distributes port 443 to VM3 and VM4. VM4 is stopped for maintenance.</p><p>How does LB2 know it should stop sending traffic to VM4?</p>",
 "opts": [
  "Through the health probe, which marks VM4 as unhealthy",
  "Through the inbound NAT rule",
  "It keeps sending traffic to VM4",
  "Through session persistence"
 ],
 "ans": 0,
 "expl": "<p>The <b>health probe</b> regularly checks each instance (TCP, HTTP, or HTTPS). After a number of failures, the instance is removed from distribution until it responds again.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB2"
  ],
  "title": "LB2 | Health probes",
  "menu": [
   "*Health probes"
  ],
  "rows": [
   [
    "VM3",
    "Healthy"
   ],
   [
    "*VM4",
    "Unhealthy (removed)"
   ]
  ]
 },
 "keep": "Instance removed from distribution = failing health probe."
},
{
 "id": "D4-068",
 "dom": 4,
 "type": "single",
 "stem": "<p>A web application stores the user's session in memory on each VM. Behind a Standard load balancer, a user must always land on the same VM.</p><p>What should you configure in the load-balancing rule?</p>",
 "opts": [
  "A floating IP address",
  "“Client IP” session persistence",
  "HA ports",
  "An outbound rule"
 ],
 "ans": 1,
 "expl": "<p><b>Session persistence</b> (affinity) can be <b>None</b> (5-tuple hash, default), <b>Client IP</b> (2-tuple: source and destination), or <b>Client IP and protocol</b> (3-tuple). With Client IP, requests from the same client go to the same VM.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB1"
  ],
  "title": "Edit load balancing rule",
  "rows": [
   [
    "*Session persistence",
    "Client IP"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Always the same VM = “Client IP” persistence."
},
{
 "id": "D4-069",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to let administrators connect over RDP to each of the three VMs in a backend pool, through the public address of load balancer LB3, on ports 50001, 50002, and 50003.</p><p>What should you create?</p>",
 "opts": [
  "Health probes",
  "Load-balancing rules",
  "Inbound NAT rules",
  "Outbound rules"
 ],
 "ans": 2,
 "expl": "<p>An <b>inbound NAT rule</b> forwards a port of the frontend address to a port of a specific VM (for example 50001 → VM1:3389). A load-balancing rule, instead, <b>distributes</b> traffic across all VMs in the pool.</p><p>In production, Azure Bastion is a better solution for RDP.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB3"
  ],
  "title": "LB3 | Inbound NAT rules",
  "menu": [
   "*Inbound NAT rules"
  ],
  "rows": [
   [
    "*50001 → VM1:3389",
    ""
   ],
   [
    "50002 → VM2:3389",
    ""
   ],
   [
    "50003 → VM3:3389",
    ""
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "A load balancer port to a specific VM = inbound NAT rule."
},
{
 "id": "D4-070",
 "dom": 4,
 "type": "single",
 "stem": "<p>You create an <b>internal</b> load balancer in front of two network virtual appliances, which must receive all TCP and UDP traffic on all ports.</p><p>Which load-balancing rule option should you enable?</p>",
 "opts": [
  "Floating IP only",
  "An inbound NAT rule",
  "Session persistence",
  "HA (high availability) ports"
 ],
 "ans": 3,
 "expl": "<p>An <b>HA ports</b> rule (protocol “All”, port 0) on a <b>Standard internal</b> load balancer distributes all TCP and UDP flows on all ports. It's the classic pattern for making NVAs highly available.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB-NVA"
  ],
  "title": "Add load balancing rule",
  "rows": [
   [
    "Type",
    "Internal · Standard"
   ],
   [
    "*HA ports",
    "Enabled (all protocols, port 0)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "All traffic to NVAs = HA ports on a Standard internal LB."
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
 "id": "D4-072",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in the backend pool of a Standard public load balancer have no public IP address and no NAT gateway. They must reach the internet through the load balancer's address, with a controlled number of SNAT ports.</p><p>What should you configure?</p>",
 "opts": [
  "An outbound rule on the load balancer",
  "A health probe",
  "HA ports",
  "An inbound NAT rule"
 ],
 "ans": 0,
 "expl": "<p>A Standard public load balancer's <b>outbound rules</b> define SNAT translation for traffic leaving the pool: frontend addresses used and number of ports allocated per instance. The <b>NAT gateway</b> remains the recommended method for internet egress, when possible.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB1"
  ],
  "title": "LB1 | Outbound rules",
  "menu": [
   "*Outbound rules"
  ],
  "rows": [
   [
    "*outbound-1",
    "Public frontend · SNAT ports per instance"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Egress through the LB address with controlled SNAT = outbound rule."
},
{
 "id": "D4-073",
 "dom": 4,
 "type": "single",
 "stem": "<p>A web application in one region must be exposed over HTTPS with a certificate, route by URL path to two VM pools, and be protected against SQL injection.</p><p>What should you deploy?</p>",
 "opts": [
  "A NAT gateway",
  "Application Gateway v2 with WAF",
  "Traffic Manager",
  "Azure Load Balancer Standard"
 ],
 "ans": 1,
 "expl": "<p><b>Application Gateway</b> is a layer 7 load balancer: TLS termination, <b>path-based routing</b> (/images/*, /api/*), multi-site routing by host name, header rewrite. The <b>WAF</b> tier adds a web application firewall (OWASP rules against SQL injection, XSS…).</p><p>Load Balancer works at layer 4 and doesn't read URLs.</p>",
 "portal": {
  "path": [
   "Application gateways",
   "Create"
  ],
  "title": "Create application gateway",
  "rows": [
   [
    "*Tier",
    "WAF V2"
   ],
   [
    "Routing",
    "Path-based (/images, /api)"
   ],
   [
    "Listener",
    "HTTPS + certificate"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "HTTPS + URL path + WAF in one region = Application Gateway v2 WAF."
},
{
 "id": "D4-074",
 "dom": 4,
 "type": "single",
 "stem": "<p>A single Application Gateway must host three sites: www.contoso.com, www.fabrikam.com, and www.tailspin.com, each with its own server pool.</p><p>What should you configure?</p>",
 "opts": [
  "Three Application Gateways",
  "Three private IP addresses",
  "Three multi-site listeners (with the host name) and three routing rules",
  "Three health probes only"
 ],
 "ans": 2,
 "expl": "<p>A <b>multi-site listener</b> filters requests by host name (Host header). Each listener is associated with a <b>routing rule</b> that sends to the right backend pool. A single gateway can thus host several sites on the same IP address.</p>",
 "portal": {
  "path": [
   "Application gateways",
   "AG1"
  ],
  "title": "AG1 | Listeners",
  "menu": [
   "*Listeners",
   "Rules"
  ],
  "rows": [
   [
    "*lst-contoso",
    "Multi site · www.contoso.com"
   ],
   [
    "lst-fabrikam",
    "Multi site · www.fabrikam.com"
   ],
   [
    "lst-tailspin",
    "Multi site · www.tailspin.com"
   ]
  ]
 },
 "keep": "Several sites on one gateway = multi-site listeners + rules."
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
 "id": "D4-076",
 "dom": 4,
 "type": "single",
 "stem": "<p>Application Gateway AG2 must automatically redirect all HTTP requests (port 80) to HTTPS (port 443).</p><p>What should you configure?</p>",
 "opts": [
  "An HTTPS health probe",
  "An inbound NAT rule",
  "A NAT gateway",
  "An HTTP listener on port 80 with a redirection rule to the HTTPS listener"
 ],
 "ans": 3,
 "expl": "<p>Application Gateway handles <b>redirections</b>: a listener on port 80, and a rule that redirects to the HTTPS listener (permanent 301 redirection). You can also redirect to an external URL.</p>",
 "portal": {
  "path": [
   "Application gateways",
   "AG2"
  ],
  "title": "Add a routing rule",
  "rows": [
   [
    "Listener",
    "HTTP · 80"
   ],
   [
    "*Target type",
    "Redirection → HTTPS listener (301)"
   ]
  ],
  "btn": "Add"
 },
 "keep": "HTTP → HTTPS = port 80 listener + redirection rule."
},
{
 "id": "D4-077",
 "dom": 4,
 "type": "single",
 "stem": "<p>You deploy Application Gateway v2 in VNet1.</p><p>Which subnet requirement must you meet?</p>",
 "opts": [
  "A dedicated subnet that contains only Application Gateways",
  "The same subnet as the pool VMs",
  "The GatewaySubnet subnet",
  "The AzureBastionSubnet subnet"
 ],
 "ans": 0,
 "expl": "<p>Application Gateway requires a <b>dedicated subnet</b> (you can put several Application Gateways in it, but no other resources). For v2, a /24 is recommended for autoscaling. Its name is free; it must not be the GatewaySubnet, reserved for VPN and ExpressRoute gateways.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Subnets",
  "menu": [
   "*Subnets"
  ],
  "rows": [
   [
    "*snet-appgw",
    "/24 · dedicated to Application Gateway"
   ]
  ]
 },
 "keep": "Application Gateway = dedicated subnet (free name, /24 recommended for v2)."
},
{
 "id": "D4-078",
 "dom": 4,
 "type": "single",
 "stem": "<p>An application is deployed in France Central (primary) and in West Europe (backup). As long as France Central works, all traffic must go there. Clients use several protocols, not only HTTP.</p><p>Which solution and routing method should you use?</p>",
 "opts": [
  "Traffic Manager with the Weighted method at 50/50",
  "Traffic Manager with the Priority method",
  "Internal Load Balancer",
  "Application Gateway with path-based routing"
 ],
 "ans": 1,
 "expl": "<p><b>Traffic Manager</b> distributes through <b>DNS</b>, so for any protocol. The <b>Priority</b> method sends everything to the priority 1 endpoint as long as it's healthy, and fails over to the next one in case of an outage (detected by endpoint monitoring).</p>",
 "portal": {
  "path": [
   "Traffic Manager profiles",
   "Create"
  ],
  "title": "Create Traffic Manager profile",
  "rows": [
   [
    "*Routing method",
    "Priority"
   ],
   [
    "Priority 1",
    "France Central"
   ],
   [
    "Priority 2",
    "West Europe"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Primary/backup, any protocol = Traffic Manager Priority."
},
{
 "id": "D4-079",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Traffic Manager routing method for each need.</p><p>To answer, drag the appropriate method to each need. Each method may be used once, more than once, or not at all.</p>",
 "srcLabel": "Methods",
 "srcs": [
  "Priority",
  "Weighted",
  "Performance",
  "Geographic",
  "Subnet"
 ],
 "tgtHead": [
  "Need",
  "Method"
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
 "id": "D4-080",
 "dom": 4,
 "type": "single",
 "stem": "<p>Users worldwide access a website hosted in two regions. You want a single global HTTP entry point, with static content caching, dynamic traffic acceleration, and WAF.</p><p>What should you use?</p>",
 "opts": [
  "Traffic Manager",
  "Application Gateway",
  "Azure Front Door",
  "Azure Load Balancer"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Front Door</b> is a global layer 7 entry point on Microsoft's edge network: routing to the fastest origin, failover, caching (CDN), TLS termination, and WAF.</p><p>Traffic Manager only does DNS, with no cache or WAF. Application Gateway is regional.</p>",
 "portal": {
  "path": [
   "Front Door and CDN profiles",
   "Create"
  ],
  "title": "Create a Front Door profile",
  "rows": [
   [
    "*Tier",
    "Standard / Premium"
   ],
   [
    "Features",
    "Cache, acceleration, WAF"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Global HTTP entry point + cache + WAF = Front Door."
},
{
 "id": "D4-081",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to centrally filter all outbound traffic from several virtual networks to the internet, allowing only certain domain names (FQDNs), with logs.</p><p>What should you deploy?</p>",
 "opts": [
  "Application Gateway",
  "An NSG with FQDN rules",
  "A NAT gateway",
  "Azure Firewall in a hub network, with FQDN application rules and user-defined routes in the spokes"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Firewall</b> is a managed stateful firewall. Its <b>application rules</b> filter by FQDN (HTTP/HTTPS); its <b>network rules</b> by address and port; its <b>DNAT rules</b> publish services. You place it in the hub and direct spoke traffic to it with 0.0.0.0/0 routes.</p><p>NSGs don't filter by domain name.</p>",
 "portal": {
  "path": [
   "Firewall policies",
   "FWP-Hub"
  ],
  "title": "FWP-Hub | Application rules",
  "menu": [
   "DNAT rules",
   "Network rules",
   "*Application rules"
  ],
  "rows": [
   [
    "*Allow-Update",
    "*.windowsupdate.com · HTTPS"
   ]
  ],
  "btn": "+ Add a rule collection"
 },
 "keep": "Centralized FQDN filtering = Azure Firewall + UDRs in the spokes."
},
{
 "id": "D4-082",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You configure rules in an Azure Firewall policy.</p><p>To answer, drag the appropriate rule type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Rule types",
 "srcs": [
  "DNAT rule",
  "Network rule",
  "Application rule"
 ],
 "tgtHead": [
  "Need",
  "Rule type"
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
 "id": "D4-083",
 "dom": 4,
 "type": "single",
 "stem": "<p>An Azure SQL Database must be reachable from Subnet1 of VNet1 through a private IP address, and from the on-premises site through the VPN.</p><p>What should you configure?</p>",
 "opts": [
  "A private endpoint for the SQL server, with the privatelink.database.windows.net DNS zone",
  "A NAT gateway",
  "A Microsoft.Sql service endpoint on Subnet1 only",
  "A firewall rule with the on-premises site's public IP address"
 ],
 "ans": 0,
 "expl": "<p>The <b>private endpoint</b> gives the SQL server a <b>private address</b> in VNet1, also reachable from on-premises through the VPN (with suitable DNS resolution). A service endpoint doesn't work from on-premises. An IP firewall rule would go over the internet.</p>",
 "portal": {
  "path": [
   "SQL servers",
   "sql1"
  ],
  "title": "Create a private endpoint",
  "rows": [
   [
    "Target sub-resource",
    "sqlServer"
   ],
   [
    "*Subnet",
    "VNet1/Subnet1"
   ],
   [
    "Private DNS zone",
    "privatelink.database.windows.net"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Private IP also reachable from on-premises = private endpoint."
},
{
 "id": "D4-084",
 "dom": 4,
 "type": "single",
 "stem": "<p>You created a private endpoint for storage90 in VNet1, without DNS integration. VMs in VNet1 still resolve storage90.blob.core.windows.net to the public address.</p><p>What should you do?</p>",
 "opts": [
  "Restart the storage account",
  "Create the private DNS zone privatelink.blob.core.windows.net, link it to VNet1, and add the endpoint's A record to it",
  "Change the storage account SKU",
  "Add a service endpoint"
 ],
 "ans": 1,
 "expl": "<p>The public name is an alias (CNAME) to <code>storage90.privatelink.blob.core.windows.net</code>. For it to resolve to the private address, you need the matching <b>privatelink private DNS zone</b>, <b>linked</b> to the virtual network, with an A record (created automatically through a DNS zone group if you choose integration).</p>",
 "portal": {
  "path": [
   "Private DNS zones",
   "privatelink.blob.core.windows.net"
  ],
  "title": "Virtual network links",
  "menu": [
   "Recordsets",
   "*Virtual network links"
  ],
  "rows": [
   [
    "*VNet1",
    "Linked"
   ],
   [
    "A",
    "storage90 → 10.0.1.5"
   ]
  ]
 },
 "keep": "Private endpoint = linked privatelink zone + A record."
},
{
 "id": "D4-085",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to privately expose a service hosted behind a Standard internal load balancer in your subscription, so that clients in other tenants access it through a private endpoint in their own networks.</p><p>What should you create?</p>",
 "opts": [
  "Global peering",
  "A public IP address",
  "A Private Link service",
  "A VPN gateway per client"
 ],
 "ans": 2,
 "expl": "<p>A <b>Private Link service</b>, placed in front of a Standard internal load balancer, lets consumers (even in other tenants) create a <b>private endpoint</b> to your service, with no peering or public exposure, and even with overlapping address spaces.</p>",
 "portal": {
  "path": [
   "Private Link",
   "Create Private Link service"
  ],
  "title": "Create Private Link service",
  "rows": [
   [
    "*Load balancer",
    "Standard internal LB"
   ],
   [
    "Visibility",
    "Anyone with the alias"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Exposing your service to other tenants = Private Link service."
},
{
 "id": "D4-086",
 "dom": 4,
 "type": "single",
 "stem": "<p>A VM has two network interfaces. You want to add a third network interface.</p><p>Which condition must be met?</p>",
 "opts": [
  "The VM must have a public IP address",
  "The VM must be in an availability set",
  "The interfaces must be in different virtual networks",
  "The VM size must support 3 network interfaces, and the VM must be stopped (deallocated) to add it"
 ],
 "ans": 3,
 "expl": "<p>The maximum number of network interfaces depends on the VM <b>size</b>. You add or remove a secondary interface when the VM is <b>stopped (deallocated)</b>. All of a VM's interfaces must be in the <b>same virtual network</b> (in the same or different subnets).</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "Status",
    "Stopped (deallocated)"
   ],
   [
    "*Attach network interface",
    "Size: 3 NICs maximum"
   ]
  ],
  "btn": "Attach"
 },
 "keep": "Adding a NIC: size that allows it + deallocated VM + same VNet."
},
{
 "id": "D4-087",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to move a network interface from VM6 to VM7.</p><p>Which statement is true?</p>",
 "opts": [
  "You can't detach a VM's primary network interface; a secondary interface can be detached (VM deallocated) and attached to another VM in the same virtual network",
  "You must first delete VM6",
  "Network interfaces are never reusable",
  "Any network interface can be moved while running"
 ],
 "ans": 0,
 "expl": "<p>A VM always has a <b>primary</b> interface, which you can't detach. A <b>secondary</b> interface can be detached (VM stopped and deallocated) then attached to another VM in the <b>same virtual network</b> and region.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM6"
  ],
  "title": "VM6 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "vm6-nic1",
    "Primary (can't be detached)"
   ],
   [
    "*vm6-nic2",
    "Secondary · Detach"
   ]
  ]
 },
 "keep": "Primary NIC can't be detached; secondary = VM deallocated + same VNet."
},
{
 "id": "D4-088",
 "dom": 4,
 "type": "single",
 "stem": "<p>Azure resources in Subnet-Web must be reachable from the internet, but IP addresses in Subnet-DB must never have default internet egress, without relying on NSGs.</p><p>Which property of Subnet-DB should you enable?</p>",
 "opts": [
  "Private endpoint network policies",
  "Private subnet (disable default outbound access)",
  "Subnet delegation",
  "Service endpoints"
 ],
 "ans": 1,
 "expl": "<p>The <b>private subnet</b> option (defaultOutboundAccess = false) disables <b>default outbound access</b>: VMs no longer have implicit internet egress. You then need an explicit method (NAT gateway, public address, load balancer, firewall). Microsoft is retiring default outbound access for new virtual networks.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1",
   "Subnet-DB"
  ],
  "title": "Edit subnet",
  "rows": [
   [
    "*Private subnet",
    "Enabled (no default outbound access)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "No implicit internet egress = private subnet."
},
{
 "id": "D4-089",
 "dom": 4,
 "type": "single",
 "stem": "<p>You deploy ACI container groups in Subnet-ACI. The deployment fails because the subnet isn't configured for this service.</p><p>What should you configure on Subnet-ACI?</p>",
 "opts": [
  "An application security group",
  "A route table",
  "A subnet delegation to Microsoft.ContainerInstance/containerGroups",
  "A Microsoft.Storage service endpoint"
 ],
 "ans": 2,
 "expl": "<p><b>Subnet delegation</b> allows a PaaS service to create its resources in a subnet (ACI, App Service for virtual network integration, Azure SQL Managed Instance, Container Apps…). A delegated subnet is reserved for that service.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1",
   "Subnet-ACI"
  ],
  "title": "Edit subnet",
  "rows": [
   [
    "*Delegate subnet to a service",
    "Microsoft.ContainerInstance/containerGroups"
   ]
  ],
  "btn": "Save"
 },
 "keep": "PaaS service in a subnet = delegation."
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
 "id": "D4-091",
 "dom": 4,
 "type": "single",
 "stem": "<p>VM8 in VNet1 gets the address 10.0.1.4. You want to add a second private IP address, 10.0.1.10, on the same network interface.</p><p>What should you do?</p>",
 "opts": [
  "Create a second virtual network",
  "You must create a second network interface",
  "Change the address in the operating system only",
  "Add a secondary IP configuration to the network interface"
 ],
 "ans": 3,
 "expl": "<p>A network interface can have several <b>IP configurations</b>, each with a private address (and optionally a public one). You must then configure the secondary address in the operating system, because Azure DHCP only provides the primary address.</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm8-nic"
  ],
  "title": "vm8-nic | IP configurations",
  "menu": [
   "*IP configurations"
  ],
  "rows": [
   [
    "ipconfig1",
    "10.0.1.4 · Primary"
   ],
   [
    "*ipconfig2",
    "10.0.1.10 · Secondary"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Several IPs on one NIC = secondary IP configurations (+ OS)."
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
 "id": "D4-093",
 "dom": 4,
 "type": "single",
 "stem": "<p>An NSG rule must allow load balancer health probe traffic, even though a custom rule denies all inbound traffic at priority 4000.</p><p>Which source should you use in an allow rule with a priority lower than 4000?</p>",
 "opts": [
  "The AzureLoadBalancer service tag",
  "The address 169.254.169.254",
  "The Internet tag",
  "The VirtualNetwork tag"
 ],
 "ans": 0,
 "expl": "<p>Health probes come from the address <b>168.63.129.16</b>, represented by the <b>AzureLoadBalancer</b> service tag. The default rule AllowAzureLoadBalancerInBound (65001) allows them, but a custom deny rule overrides it: you need an explicit higher-priority rule.</p>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG1"
  ],
  "title": "Inbound rules",
  "rows": [
   [
    "*3900",
    "AzureLoadBalancer · Allow"
   ],
   [
    "4000",
    "Any · Deny"
   ]
  ]
 },
 "keep": "Load balancer probes = AzureLoadBalancer tag (168.63.129.16)."
},
{
 "id": "D4-094",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to see all security rules applied to VM9's network interface, combining the subnet's NSG and the interface's NSG, with the default rules.</p><p>What should you look at?</p>",
 "opts": [
  "The NSG's activity log",
  "The network interface's effective security rules",
  "The VM's metrics",
  "Effective routes"
 ],
 "ans": 1,
 "expl": "<p><b>Effective security rules</b> (on the network interface or in Network Watcher) show the combination of the subnet and interface NSGs, with service tags expanded into address ranges.</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm9-nic"
  ],
  "title": "vm9-nic | Effective security rules",
  "menu": [
   "Effective routes",
   "*Effective security rules"
  ],
  "rows": [
   [
    "Subnet NSG",
    "Combined rules"
   ],
   [
    "Interface NSG",
    "Combined rules"
   ]
  ]
 },
 "keep": "All applied NSG rules = effective security rules."
},
{
 "id": "D4-095",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to capture VM10's network traffic for 10 minutes to analyze it with Wireshark.</p><p>What should you use?</p>",
 "opts": [
  "Connection monitor",
  "Flow logs",
  "Network Watcher packet capture (Network Watcher extension on the VM)",
  "IP flow verify"
 ],
 "ans": 2,
 "expl": "<p>Network Watcher <b>packet capture</b> records a VM's traffic (with filters and duration) to a .cap file stored in a storage account or on the VM, to open with Wireshark. It uses the Network Watcher Agent extension.</p><p>Flow logs only record flow metadata, not packet contents.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Packet capture › Add",
  "menu": [
   "*Packet capture"
  ],
  "rows": [
   [
    "Target",
    "VM10"
   ],
   [
    "Duration",
    "600 s"
   ],
   [
    "*Output",
    ".cap file (storage)"
   ]
  ],
  "btn": "Start"
 },
 "keep": "Packet contents (Wireshark) = packet capture."
},
{
 "id": "D4-096",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to continuously monitor latency and availability of the connection between VM11 (Azure) and an on-premises server, with alerts if it degrades.</p><p>Which tool should you use?</p>",
 "opts": [
  "Packet capture",
  "IP flow verify",
  "Next hop",
  "Network Watcher connection monitor"
 ],
 "ans": 3,
 "expl": "<p><b>Connection monitor</b> regularly tests connections between sources (Azure VMs, on-premises machines with the agent) and destinations, records latency and loss, and enables Azure Monitor <b>alerts</b>.</p><p>The other tools do one-off tests.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Connection monitor › Create",
  "menu": [
   "*Connection monitor"
  ],
  "rows": [
   [
    "Source",
    "VM11"
   ],
   [
    "Destination",
    "On-premises server"
   ],
   [
    "*Alerts",
    "Enabled"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Continuous monitoring + alerts = connection monitor."
},
{
 "id": "D4-097",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to visualize the network resources of a virtual network (subnets, interfaces, NSGs, gateways) and their relationships as a diagram.</p><p>Which feature should you use?</p>",
 "opts": [
  "Network Watcher topology",
  "Packet capture",
  "The activity log",
  "Azure Advisor"
 ],
 "ans": 0,
 "expl": "<p>Network Watcher <b>topology</b> generates an interactive diagram of network resources and their links, across one or more subscriptions and regions.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Network Watcher | Topology",
  "menu": [
   "*Topology"
  ],
  "rows": [
   [
    "VNet1",
    "Subnets · NICs · NSGs · gateways"
   ]
  ]
 },
 "keep": "Diagram of network resources = topology."
},
{
 "id": "D4-098",
 "dom": 4,
 "type": "single",
 "stem": "<p>Network Watcher tools aren't available for a virtual network located in Norway East.</p><p>What should you check?</p>",
 "opts": [
  "That the VMs have a public IP address",
  "That Network Watcher is enabled in the Norway East region",
  "That the virtual network has a VPN gateway",
  "That the virtual network is peered"
 ],
 "ans": 1,
 "expl": "<p><b>Network Watcher</b> is a <b>regional</b> service: one instance is created per region (automatically when the first virtual network is created, in the NetworkWatcherRG resource group). If it was deleted or disabled, you must enable it in that region.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Network Watcher | Overview",
  "rows": [
   [
    "France Central",
    "Enabled"
   ],
   [
    "*Norway East",
    "Disabled"
   ]
  ]
 },
 "keep": "Network Watcher is regional (one instance per region)."
},
{
 "id": "D4-099",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You deploy a site-to-site VPN between VNet1 and the Bordeaux site. You need to give the Bordeaux network team the information required to configure their firewall.</p><p>Which <b>two</b> pieces of information should you provide?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "The private IP address of each VM",
  "The public IP address of the Azure VPN gateway",
  "The resource group name",
  "The connection's shared key"
 ],
 "ans": [
  1,
  3
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>VMs in VNet-Spoke must reach the internet only through the Azure Firewall in VNet-Hub (private address 10.0.0.4).</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Create rules (network or application) in the firewall policy to allow the desired traffic",
  "Enable “Use remote gateway” with no gateway in the hub",
  "Create a route table with 0.0.0.0/0 → Virtual appliance 10.0.0.4 and associate it with the spoke's subnets",
  "Create a NAT gateway in the spoke"
 ],
 "ans": [
  0,
  2
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>You deploy Azure Bastion in VNet1.</p><p>Which <b>two</b> conditions are required?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "A subnet named AzureBastionSubnet of size /26 or larger",
  "A VPN gateway",
  "A public IP address on each VM",
  "A Standard SKU public IP address (for the Basic SKU and above)"
 ],
 "ans": [
  0,
  3
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
 "tpl": "az network vnet create --resource-group RG1 --name VNet6 {0} 10.6.0.0/16 --subnet-name Subnet1 {1} 10.6.1.0/24",
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
 "keep": "az network vnet create --address-prefixes … --subnet-prefixes …"
},
{
 "id": "D4-103",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>You need to create the peering from VNet1 to VNet2, with virtual network access allowed, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az network vnet {0} create --resource-group RG1 --name VNet1-to-VNet2 --vnet-name VNet1 {1} VNet2 --allow-vnet-access",
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
 "keep": "az network vnet peering create --remote-vnet (in both directions)."
},
{
 "id": "D4-104",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>You need to add to NSG NSG5 a rule that allows inbound HTTPS from the internet, by using Azure PowerShell. $nsg contains NSG5.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "$nsg | {0} -Name Allow-HTTPS -Access Allow -Protocol Tcp -Direction {1} -Priority 200 -SourceAddressPrefix Internet -SourcePortRange * -DestinationAddressPrefix * -DestinationPortRange 443 | Set-AzNetworkSecurityGroup",
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
 "keep": "Add-…RuleConfig then Set-AzNetworkSecurityGroup."
},
{
 "id": "D4-105",
 "dom": 4,
 "type": "cmd",
 "stem": "<p>You need to create a route that sends 0.0.0.0/0 to the firewall 10.0.0.4 in route table RT5, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az network route-table route create --resource-group RG1 --route-table-name RT5 --name To-FW --address-prefix 0.0.0.0/0 --next-hop-type {0} {1} 10.0.0.4",
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
 "keep": "Route to an NVA = VirtualAppliance + --next-hop-ip-address."
},
{
 "id": "D4-106",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You create an inbound security rule in NSG6. Only servers in the application security group ASG-Admin must be able to reach the VMs in ASG-Web over SSH. The rule must be evaluated before a deny rule with priority 500.</p><p>How should you configure the rule?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 },
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
 "keep": "Role-based exception = source/destination ASG + smaller number."
},
{
 "id": "D4-107",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You configure the peering from the spoke VNet-S3 to the hub VNet-Hub, which has a VPN gateway to the on-premises site. VNet-S3 must reach the on-premises site through this gateway and receive traffic forwarded by the hub's firewall.</p><p>How should you configure the options of the link from VNet-S3 to VNet-Hub?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 },
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
 "keep": "Spoke: access + forwarded traffic + remote gateway."
},
{
 "id": "D4-108",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>You need to associate route table RT6 with the subnet Subnet-App.</p><p>In RT6, which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "Associating a table = Subnets blade."
},
{
 "id": "D4-109",
 "dom": 4,
 "type": "hotspot",
 "stem": "<p>You need to check whether traffic from VM12 to 8.8.8.8 goes through Azure Firewall or out directly.</p><p>In Network Watcher, which tool should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "Where traffic goes = Next hop."
},
{
 "id": "D4-110",
 "dom": 4,
 "type": "single",
 "stem": "<p>Two VMs in VNet1 in different subnets can't communicate. No NSG or route table is configured.</p><p>What is the most likely cause?</p>",
 "opts": [
  "You need a peering between the subnets",
  "You need a VPN gateway",
  "The VMs' operating system firewall (for example Windows Firewall blocking ICMP)",
  "Subnets in the same virtual network don't communicate by default"
 ],
 "ans": 2,
 "expl": "<p>By default, all subnets in a virtual network communicate through the virtual network system route. With no NSG or UDR, the likely cause is the <b>operating system firewall</b>: for example, Windows Firewall blocks ping (ICMP) by default.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "Windows Firewall",
  "rows": [
   [
    "*Inbound ICMP",
    "Blocked by default"
   ]
  ]
 },
 "keep": "Subnets in a VNet communicate by default; think of the OS firewall."
},
{
 "id": "D4-111",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want VMs in an internal load balancer pool to receive traffic addressed directly to the frontend address (for example for a SQL Always On cluster).</p><p>Which load-balancing rule option should you enable?</p>",
 "opts": [
  "An HTTP probe",
  "Outbound rules",
  "Session persistence",
  "Floating IP (direct server return)"
 ],
 "ans": 3,
 "expl": "<p><b>Floating IP</b> (Direct Server Return) forwards the packet without translating the destination address: the VM sees the frontend address and must have it configured on a loopback. It's required for SQL Server availability group listeners.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "LB-SQL"
  ],
  "title": "Edit load balancing rule",
  "rows": [
   [
    "*Floating IP",
    "Enabled"
   ]
  ],
  "btn": "Save"
 },
 "keep": "SQL Always On behind an LB = floating IP."
},
{
 "id": "D4-112",
 "dom": 4,
 "type": "single",
 "stem": "<p>An Application Gateway returns a 502 (Bad Gateway) error for all requests. The pool VMs work when queried directly.</p><p>What should you check first?</p>",
 "opts": [
  "Backend health (probe, Application Gateway subnet NSG, backend ports and certificates)",
  "The storage access tier",
  "A firewall's DNAT rules",
  "The VPN gateway"
 ],
 "ans": 0,
 "expl": "<p>A <b>502</b> error means Application Gateway can't reach a healthy backend. The <b>Backend health</b> page shows why: failing probe (path or expected code), blocking NSG, wrong port or host name, untrusted backend certificate in HTTPS.</p>",
 "portal": {
  "path": [
   "Application gateways",
   "AG1"
  ],
  "title": "AG1 | Backend health",
  "menu": [
   "*Backend health"
  ],
  "rows": [
   [
    "*10.0.2.4",
    "Unhealthy · probe: code 404"
   ]
  ]
 },
 "keep": "502 error = check backend health."
},
{
 "id": "D4-113",
 "dom": 4,
 "type": "single",
 "stem": "<p>You add an NSG to the Application Gateway v2 subnet. Afterward, the gateway stops working.</p><p>Which inbound rule should you allow?</p>",
 "opts": [
  "Port 3389 from the internet",
  "Ports 65200-65535 from the GatewayManager service tag",
  "Port 1433 from AzureCloud",
  "Port 22 from VirtualNetwork"
 ],
 "ans": 1,
 "expl": "<p>Application Gateway v2 requires ports <b>65200 to 65535</b> to be open inbound from the <b>GatewayManager</b> tag (communication with Azure infrastructure). You must also allow AzureLoadBalancer and client traffic on the listener ports.</p>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG-AppGW"
  ],
  "title": "Inbound rules",
  "rows": [
   [
    "*100",
    "GatewayManager · 65200-65535 · Allow"
   ],
   [
    "110",
    "AzureLoadBalancer · Allow"
   ]
  ]
 },
 "keep": "NSG on the AppGW v2 subnet = GatewayManager 65200-65535."
},
{
 "id": "D4-114",
 "dom": 4,
 "type": "single",
 "stem": "<p>A VpnGw1 SKU VPN gateway no longer offers enough bandwidth for traffic with the on-premises site.</p><p>What can you do?</p>",
 "opts": [
  "Add a second VPN gateway in the same virtual network",
  "Create a second GatewaySubnet",
  "Resize the gateway to a higher SKU of the same generation (for example VpnGw2)",
  "Increase the VM size"
 ],
 "ans": 2,
 "expl": "<p>You can <b>resize</b> a gateway to a higher SKU (VpnGw1 → VpnGw2 → VpnGw3…, or to the zone-redundant AZ versions). A virtual network has only one VPN gateway and one GatewaySubnet.</p>",
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
    "*SKU",
    "VpnGw1 → VpnGw2"
   ]
  ],
  "btn": "Save"
 },
 "keep": "More VPN bandwidth = resize the SKU."
},
{
 "id": "D4-115",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your VPN gateway must withstand the failure of an availability zone.</p><p>Which SKU should you choose?</p>",
 "opts": [
  "Basic",
  "Standard",
  "VpnGw2",
  "An AZ SKU, for example VpnGw2AZ"
 ],
 "ans": 3,
 "expl": "<p>SKUs ending in <b>AZ</b> (VpnGw1AZ to VpnGw5AZ) deploy the gateway's instances across several availability zones. Microsoft is migrating non-AZ SKUs to AZ SKUs in regions that have zones.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "Create"
  ],
  "title": "Create virtual network gateway",
  "rows": [
   [
    "*SKU",
    "VpnGw2AZ"
   ],
   [
    "Zones",
    "Zone-redundant"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Gateway resilient to zone failure = AZ SKU."
},
{
 "id": "D4-116",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your organization has 30 branches, several Azure regions, and mobile users. You want a managed network architecture that automatically interconnects all of it (VPN, ExpressRoute, virtual networks).</p><p>What should you recommend?</p>",
 "opts": [
  "Azure Virtual WAN",
  "A NAT gateway",
  "Azure Bastion",
  "A peering between each pair of virtual networks"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Virtual WAN</b> provides managed virtual hubs that interconnect VPN sites, ExpressRoute circuits, point-to-site users, and virtual networks, with automatic transitive routing between them.</p>",
 "portal": {
  "path": [
   "Virtual WAN",
   "Create"
  ],
  "title": "Create WAN",
  "rows": [
   [
    "*Type",
    "Standard"
   ],
   [
    "Hubs",
    "VPN, ExpressRoute, P2S, VNets"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Many sites + regions + mobile users, managed = Virtual WAN."
},
{
 "id": "D4-117",
 "dom": 4,
 "type": "single",
 "stem": "<p>Traffic between VNet1 and the on-premises site goes through the site-to-site VPN. An on-premises VM can't reach a VM in VNet1, but the reverse works.</p><p>What is the most likely cause?</p>",
 "opts": [
  "Peering isn't transitive",
  "An NSG that doesn't allow inbound traffic from the on-premises ranges (or the local firewall)",
  "Azure DNS doesn't work",
  "The VM has no public address"
 ],
 "ans": 1,
 "expl": "<p>The tunnel works (the reverse direction passes). <b>Inbound</b> traffic is therefore filtered: by an NSG (if the default rules were overridden, or if a higher-priority deny rule exists) or by the VM's or on-premises firewall. IP flow verify will confirm it.</p><p>The default AllowVnetInBound rule normally includes the on-premises ranges known by the gateway.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "IP flow verify",
  "rows": [
   [
    "*Inbound 192.168.1.10 → VM",
    "Denied · Deny-All rule"
   ]
  ]
 },
 "keep": "One direction works, not the other = inbound filtering (NSG or firewall)."
},
{
 "id": "D4-118",
 "dom": 4,
 "type": "single",
 "stem": "<p>You want to restrict public IP addresses on network interfaces across the whole subscription: no VM must be able to receive a public IP address.</p><p>Which solution is the most suitable?</p>",
 "opts": [
  "An NSG on each subnet",
  "A route table",
  "An Azure Policy that denies network interfaces with a public IP address",
  "A NAT gateway"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Policy</b> (for example the built-in policy “Network interfaces should not have public IPs”, Deny effect) prevents the configuration itself. An NSG filters traffic but doesn't prevent assigning an address.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assign policy"
  ],
  "title": "Assign policy",
  "rows": [
   [
    "*Definition",
    "Network interfaces should not have public IPs"
   ],
   [
    "Effect",
    "Deny"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Forbidding a configuration = Azure Policy (Deny)."
},
{
 "id": "D4-119",
 "dom": 4,
 "type": "single",
 "stem": "<p>A VM in VNet1 must resolve the names of VMs in VNet2, which is peered, without custom DNS.</p><p>Which solution is the simplest?</p>",
 "opts": [
  "A hosts file on each VM",
  "Azure-provided DNS is enough between peered networks",
  "A public DNS zone",
  "A private DNS zone linked to both virtual networks (autoregistration enabled for each)"
 ],
 "ans": 3,
 "expl": "<p>Azure-provided DNS only resolves short names within the same virtual network. A <b>private DNS zone</b> linked to both networks, with <b>autoregistration</b> enabled on each (a network can have only one registration zone), lets the VMs resolve each other.</p>",
 "portal": {
  "path": [
   "Private DNS zones",
   "corp.local"
  ],
  "title": "Virtual network links",
  "menu": [
   "*Virtual network links"
  ],
  "rows": [
   [
    "*VNet1",
    "Auto registration"
   ],
   [
    "*VNet2",
    "Auto registration"
   ]
  ]
 },
 "keep": "Resolution across VNets = private zone linked to both."
}
);
