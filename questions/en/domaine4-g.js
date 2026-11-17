/* Domain 4: networking (batch G: D4-401 to D4-410, long scenarios) */
AZ.questions.push(
{
 "id": "D4-401",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso uses a hub-and-spoke topology in France Central. VNet-Hub (10.0.0.0/16) contains an Azure Firewall (private address 10.0.1.4) and the VPN gateway VPNGW1 (VpnGw2, route-based, BGP enabled), connected to the Lyon site (192.168.0.0/16). VNet-Spoke1 (10.1.0.0/16) and VNet-Spoke2 (10.2.0.0/16) are peered with the hub.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Peering</th><th>Allow gateway transit</th><th>Use remote gateways</th><th>Allow forwarded traffic</th></tr><tr><td>Hub → Spoke1</td><td>Yes</td><td>—</td><td>No</td></tr><tr><td>Hub → Spoke2</td><td>Yes</td><td>—</td><td>No</td></tr><tr><td>Spoke1 → Hub</td><td>—</td><td>Yes</td><td>No</td></tr><tr><td>Spoke2 → Hub</td><td>—</td><td>No</td><td>No</td></tr></table></div><p>No route table is associated. Spoke1 VMs already reach Lyon; Spoke2 VMs don't.</p><p>You need to ensure that: Spoke2 VMs reach Lyon through VPNGW1, with no new gateway; traffic between Spoke1 and Spoke2 goes through the firewall; traffic between Lyon and the spokes is also inspected by the firewall.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For Spoke2 to Lyon:",
   "o": [
    "Enable “Allow gateway transit” on Spoke2 → Hub",
    "Enable “Use remote gateways” on Spoke2 → Hub",
    "Create a VPN connection from Spoke2 to Lyon",
    "Enable BGP propagation on the peering"
   ],
   "a": 1
  },
  {
   "l": "On the spoke subnets:",
   "o": [
    "Nothing: the hub makes peerings transitive",
    "A route table with 0.0.0.0/0 to VPNGW1",
    "A route table with the other spoke to 10.0.1.4",
    "An NSG allowing 10.0.0.0/8"
   ],
   "a": 2
  },
  {
   "l": "On the Spoke1 → Hub and Spoke2 → Hub peerings:",
   "o": [
    "Disable “Use remote gateways”",
    "Enable “Allow forwarded traffic”",
    "Enable “Allow gateway transit”",
    "Change nothing"
   ],
   "a": 1
  },
  {
   "l": "On GatewaySubnet:",
   "o": [
    "A route table with 0.0.0.0/0 to 10.0.1.4",
    "An NSG denying 10.0.0.0/8",
    "A route table with 10.1.0.0/16 and 10.2.0.0/16 to 10.0.1.4",
    "Disable gateway route propagation"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Spoke2 to Lyon.</b> The hub already allows gateway transit to Spoke2; the other half is missing: “Use remote gateways” on the Spoke2 → Hub peering. Gateway transit is configured on the hub side, never on the spoke side.<b>Spoke1 ↔ Spoke2.</b> Peering isn't transitive: without routes, two spokes can't see each other. A user-defined route to the other spoke, with 10.0.1.4 as next hop (virtual appliance), sends traffic through the firewall. 0.0.0.0/0 to a VPN gateway isn't a valid next hop here and would break internet access.<b>Forwarded traffic.</b> A packet arriving in Spoke2 was relayed by the hub firewall: it doesn't come from VNet-Hub itself. The spoke-side peering must therefore allow forwarded traffic, or it's dropped.<b>GatewaySubnet.</b> To inspect traffic arriving from Lyon, put routes to the spoke prefixes on GatewaySubnet, with the firewall as next hop. A 0.0.0.0/0 route on GatewaySubnet isn't supported, and disabling route propagation would break the gateway's connectivity.",
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
    "*For Spoke2 to Lyon",
    "Enable “Use remote gateways” on Spoke2 → Hub"
   ],
   [
    "On the spoke subnets",
    "A route table with the other spoke to 10.0.1.4"
   ],
   [
    "On the Spoke1 → Hub and Spoke2 → Hub peerings",
    "Enable “Allow forwarded traffic”"
   ],
   [
    "On GatewaySubnet",
    "A route table with 10.1.0.0/16 and 10.2.0.0/16 to 10.0.1.4"
   ]
  ]
 },
 "keep": "Spoke: “Use remote gateways” + “forwarded traffic”. Spoke ↔ spoke: routes to the firewall. GatewaySubnet: routes to spoke prefixes, never 0.0.0.0/0."
},
{
 "id": "D4-402",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VM1 (10.0.1.10) is in Subnet1 of VNet1 (10.0.0.0/16). It has a Standard public IP address. Subnet1 is associated with NSG-Sub and VM1's network interface with NSG-NIC. VNet1 is connected to the on-premises site (192.168.0.0/16) by a VPN gateway. VM2 (10.0.2.4) is in Subnet2 of VNet1, with no NSG.</p><b>NSG-Sub, custom inbound rules</b>\n<div class=\"tw\"><table class=\"tbl\"><tr><th>Priority</th><th>Port</th><th>Source</th><th>Action</th></tr><tr><td>100</td><td>TCP 3389</td><td>192.168.0.0/16</td><td>Allow</td></tr><tr><td>200</td><td>TCP 443</td><td>VirtualNetwork</td><td>Deny</td></tr><tr><td>300</td><td>TCP 80</td><td>Internet</td><td>Allow</td></tr></table></div><b>NSG-NIC, custom inbound rules</b>\n<div class=\"tw\"><table class=\"tbl\"><tr><th>Priority</th><th>Port</th><th>Source</th><th>Action</th></tr><tr><td>100</td><td>TCP 443</td><td>10.0.2.0/24</td><td>Allow</td></tr><tr><td>150</td><td>TCP 3389</td><td>Any</td><td>Deny</td></tr><tr><td>200</td><td>TCP 80</td><td>Any</td><td>Allow</td></tr></table></div><p>Neither NSG has custom outbound rules.</p><p>For each flow, what is the result?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "An on-premises computer 192.168.10.5 opens RDP to VM1:",
   "o": [
    "Allowed",
    "Blocked by NSG-Sub",
    "Blocked by NSG-NIC"
   ],
   "a": 2
  },
  {
   "l": "VM2 opens HTTPS to VM1:",
   "o": [
    "Allowed",
    "Blocked by NSG-Sub",
    "Blocked by NSG-NIC"
   ],
   "a": 1
  },
  {
   "l": "An internet client opens HTTP to VM1's public IP:",
   "o": [
    "Allowed",
    "Blocked by NSG-Sub",
    "Blocked by NSG-NIC"
   ],
   "a": 0
  },
  {
   "l": "VM1 opens HTTPS to an internet site:",
   "o": [
    "Allowed",
    "Blocked by NSG-Sub",
    "Blocked by NSG-NIC"
   ],
   "a": 0
  }
 ],
 "expl": "<p>Inbound, the subnet NSG is evaluated first, then the network interface NSG: the flow must be allowed by both.</p><b>RDP from 192.168.10.5.</b> NSG-Sub allows it (100), but NSG-NIC denies it (150, source Any): blocked by NSG-NIC.<b>HTTPS from VM2.</b> The VirtualNetwork tag covers the whole virtual network address space, so 10.0.2.4. NSG-Sub denies (200) before NSG-NIC rule 100 is even evaluated: blocked by NSG-Sub.<b>HTTP from the internet.</b> NSG-Sub (300) then NSG-NIC (200) allow it, and a Standard public IP accepts only what the NSGs allow: allowed.<b>VM1 outbound.</b> Outbound, the order is reversed (interface then subnet), but the default AllowInternetOutBound rule applies in both: allowed.",
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
    "*An on-premises computer 192.168.10.5 opens RDP to VM1",
    "Blocked by NSG-NIC"
   ],
   [
    "VM2 opens HTTPS to VM1",
    "Blocked by NSG-Sub"
   ],
   [
    "An internet client opens HTTP to VM1's public IP",
    "Allowed"
   ],
   [
    "VM1 opens HTTPS to an internet site",
    "Allowed"
   ]
  ]
 },
 "keep": "Inbound: subnet then interface, both must allow. VirtualNetwork = the whole VNet space (and connected networks)."
},
{
 "id": "D4-403",
 "dom": 4,
 "type": "hot",
 "stem": "<p>The Orders application runs on VM-A and VM-B, in Subnet-App (VNet-Prod). They have no public IP address. You deployed LB-Pub, a public Standard load balancer, with a TCP 443 rule and an HTTP probe on /health (port 8080). Both VMs answer /health correctly.</p><p>Subnet-App is associated with NSG-App, which contains: 100 Allow TCP 443 from Internet; 4000 Deny all inbound traffic (Any → Any).</p><p>The portal shows both pool instances as “Unhealthy”. In addition:</p><ul><li>the VMs must download updates from the internet with a fixed public IP address, registered with a vendor, and the team expects more than 50,000 simultaneous outbound connections;</li><li>a client must stay on the same VM for its whole session, because the cart is stored in memory.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "In NSG-App:",
   "o": [
    "Allow the AzureLoadBalancer tag on 8080, priority lower than 4000",
    "Allow Internet on 8080, priority 4100",
    "Delete rule 100",
    "Allow VirtualNetwork on 443, priority 4100"
   ],
   "a": 0
  },
  {
   "l": "Internet outbound:",
   "o": [
    "A Standard public IP on each VM",
    "Azure default outbound access",
    "A NAT gateway with public IPs on Subnet-App",
    "An extra inbound rule on LB-Pub"
   ],
   "a": 2
  },
  {
   "l": "Rule 443 session persistence:",
   "o": [
    "None",
    "Client IP",
    "Floating IP enabled",
    "30-minute idle timeout"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Probes.</b> Probes come from 168.63.129.16, represented by the AzureLoadBalancer tag. The default AllowAzureLoadBalancerInBound rule (65001) exists, but rule 4000 “Deny all” is evaluated before it. You therefore need an allow rule with a priority number lower than 4000. Priority 4100 would be evaluated too late.<b>Outbound.</b> A Standard load balancer provides no outbound access without an outbound rule, and default outbound access offers no fixed IP or guarantee (it's retired for new networks). A NAT gateway provides one or more fixed IPs and 64,512 SNAT ports per public IP: with several IPs, it easily supports 50,000 connections. A public IP per VM would multiply the addresses to register.<b>Persistence.</b> “Client IP” affinity always sends the same client to the same VM. Floating IP is for SQL cluster-type scenarios, not persistence.",
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
    "*In NSG-App",
    "Allow the AzureLoadBalancer tag on 8080, priority lower than 4000"
   ],
   [
    "Internet outbound",
    "A NAT gateway with public IPs on Subnet-App"
   ],
   [
    "Rule 443 session persistence",
    "Client IP"
   ]
  ]
 },
 "keep": "Probe = AzureLoadBalancer, allow before any Deny. Fixed, high-volume outbound = NAT gateway. Same VM = client IP persistence."
},
{
 "id": "D4-404",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VPNGW1 is a route-based VpnGw1 VPN gateway in France Central, with a single public IP address. It carries:</p><ul><li>a site-to-site connection to Paris headquarters, terminated on a single firewall;</li><li>a point-to-site configuration: IKEv2 tunnel type, Azure certificate authentication.</li></ul><p>Management requires:</p><ul><li>that the 200 sales staff (Windows and macOS) connect with their Microsoft Entra account and multifactor authentication, with no certificate to distribute;</li><li>that headquarters add a second firewall and that the link survive the loss of any on-premises firewall or VPNGW1 instance, with no manual failover;</li><li>that headquarters routes be learned automatically.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Point-to-site, tunnel type:",
   "o": [
    "IKEv2",
    "SSTP",
    "OpenVPN (SSL)",
    "IKEv2 and SSTP"
   ],
   "a": 2
  },
  {
   "l": "Point-to-site, authentication:",
   "o": [
    "Microsoft Entra ID",
    "Azure certificate",
    "RADIUS with on-premises NPS"
   ],
   "a": 0
  },
  {
   "l": "High availability:",
   "o": [
    "A second VPN gateway in VNet-Hub",
    "Active-active mode with a second public IP, and two local network gateways",
    "Move to VpnGw1AZ keeping one IP",
    "A second connection to the same local network gateway"
   ],
   "a": 1
  },
  {
   "l": "Routing:",
   "o": [
    "Static prefixes on each local network gateway",
    "A route table on GatewaySubnet",
    "BGP on VPNGW1 and both firewalls",
    "Route propagation in the peering"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Entra ID.</b> Microsoft Entra authentication for point-to-site is supported only with the <b>OpenVPN</b> tunnel type and the Azure VPN Client (Windows, macOS). IKEv2 and SSTP only accept certificates or RADIUS. Conditional Access (MFA) then applies to the Azure VPN app.<b>High availability.</b> A gateway always has two instances, but in active-standby a failover drops the tunnel for tens of seconds. <b>Active-active</b> mode (two public IPs) establishes tunnels from each instance; with two firewalls, you get a full mesh of four tunnels. Each firewall is represented by its own local network gateway. Only one VPN gateway per virtual network is possible.<b>Routing.</b> With several active tunnels, BGP advertises and withdraws routes automatically when a link fails. Static prefixes can't fail over.",
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
    "*Point-to-site, tunnel type",
    "OpenVPN (SSL)"
   ],
   [
    "Point-to-site, authentication",
    "Microsoft Entra ID"
   ],
   [
    "High availability",
    "Active-active mode with a second public IP, and two local network gateways"
   ],
   [
    "Routing",
    "BGP on VPNGW1 and both firewalls"
   ]
  ]
 },
 "keep": "Entra ID in P2S = OpenVPN. Two on-premises devices = active-active + one local network gateway per device + BGP."
},
{
 "id": "D4-405",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Fabrikam deployed a private endpoint for storage account stfab (blob sub-resource) in VNet-App. The private DNS zone privatelink.blob.core.windows.net contains stfab's record; it's linked only to VNet-App.</p><p>VNet-Hub, peered with VNet-App, uses domain controllers DC1 and DC2 (10.0.2.4 and 10.0.2.5) as custom DNS servers, which forward all unknown queries to 168.63.129.16. The on-premises site, connected by VPN, also uses DC1 and DC2 as forwarders.</p><p>VNet-App is linked, with auto-registration enabled, to the private zone app.internal. The team wants VNet-App VMs to also auto-register in the new zone contoso.internal, which will replace app.internal.</p><p>Currently, on-premises computers and VNet-Hub VMs resolve stfab.blob.core.windows.net to the public address.</p><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "To fix stfab resolution:",
   "o": [
    "Create a blob.core.windows.net zone on DC1 and DC2",
    "Link the privatelink.blob.core.windows.net zone to VNet-Hub",
    "Enable auto-registration on the privatelink zone",
    "Set VNet-Hub to use Azure-provided DNS"
   ],
   "a": 1
  },
  {
   "l": "For the on-premises site, additionally:",
   "o": [
    "Nothing: computers already go through DC1 and DC2",
    "A hosts file on each computer",
    "Link the private zone to the local network gateway",
    "A conditional forwarder to 168.63.129.16 on the site DNS servers"
   ],
   "a": 0
  },
  {
   "l": "For contoso.internal:",
   "o": [
    "Create a second link with auto-registration",
    "Disable registration on app.internal, then enable it on the link to contoso.internal",
    "Add A records manually",
    "Link contoso.internal to VNet-Hub with registration"
   ],
   "a": 1
  }
 ],
 "expl": "<b>stfab.</b> DC1 and DC2 are in VNet-Hub and forward to 168.63.129.16: that Azure resolver only uses private zones linked to the network of the VM asking, here VNet-Hub. So link the privatelink zone to VNet-Hub. A blob.core.windows.net zone on the DCs would break resolution of every other storage account.<b>On-premises.</b> Computers already query DC1 and DC2, which will resolve correctly once the zone is linked: nothing else to do. 168.63.129.16 isn't reachable from on-premises.<b>contoso.internal.</b> A virtual network can auto-register in <b>only one</b> private zone. Disable it on app.internal before enabling it for contoso.internal.",
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
    "*To fix stfab resolution",
    "Link the privatelink.blob.core.windows.net zone to VNet-Hub"
   ],
   [
    "For the on-premises site, additionally",
    "Nothing: computers already go through DC1 and DC2"
   ],
   [
    "For contoso.internal",
    "Disable registration on app.internal, then enable it on the link to contoso.internal"
   ]
  ]
 },
 "keep": "168.63.129.16 only sees zones linked to the requester's VNet. Auto-registration: one zone per VNet."
},
{
 "id": "D4-406",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Wingtip publishes its site on two pools: VMs WEB1 and WEB2 for the site, and Azure Container Apps containers for the API (/api/*), on the same name www.wingtip.com. You deploy AppGW1, a WAF_v2 Application Gateway, in VNet-Front.</p><p>Constraints:</p><ul><li>the www.wingtip.com TLS certificate is stored in key vault KV-Front (RBAC permission model) and must be renewed automatically in AppGW1;</li><li>SQL injection-type attacks must be blocked, not just logged;</li><li>VNet-Front contains Subnet-Web (web VMs, NSG), Subnet-Bastion (AzureBastionSubnet), and free space 10.10.8.0/21.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "AppGW1 access to the certificate:",
   "o": [
    "A system-assigned identity, Key Vault Secrets User",
    "A user-assigned identity, Key Vault Secrets User",
    "A user-assigned identity, Get access policy",
    "The certificate exported as PFX and uploaded"
   ],
   "a": 1
  },
  {
   "l": "Routing rule:",
   "o": [
    "A basic rule to the web pool",
    "Two listeners, one per pool",
    "A path-based rule, /api/* to the API pool",
    "A redirect rule to the API"
   ],
   "a": 2
  },
  {
   "l": "WAF policy mode:",
   "o": [
    "Detection",
    "Prevention",
    "Disabled, with custom rules"
   ],
   "a": 1
  },
  {
   "l": "AppGW1 subnet:",
   "o": [
    "Subnet-Web",
    "AzureBastionSubnet",
    "A new dedicated 10.10.8.0/24 subnet",
    "GatewaySubnet"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Certificate.</b> Application Gateway supports only <b>user-assigned</b> managed identities to read Key Vault. With the RBAC model, the identity needs a role (Key Vault Secrets User, since the certificate is read as a secret), not an access policy. AppGW1 then polls the vault every 4 hours and picks up the new version: renewal is automatic, unlike an uploaded PFX.<b>Routing.</b> One host name and two back ends by path: a path-based rule, with /api/* to the API pool and everything else to the web pool.<b>WAF.</b> Only Prevention mode blocks; Detection only logs.<b>Subnet.</b> Application Gateway v2 requires a dedicated subnet with no other resource; Microsoft recommends /24 for scaling. GatewaySubnet and AzureBastionSubnet are reserved.",
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
    "*AppGW1 access to the certificate",
    "A user-assigned identity, Key Vault Secrets User"
   ],
   [
    "Routing rule",
    "A path-based rule, /api/* to the API pool"
   ],
   [
    "WAF policy mode",
    "Prevention"
   ],
   [
    "AppGW1 subnet",
    "A new dedicated 10.10.8.0/24 subnet"
   ]
  ]
 },
 "keep": "App Gateway + Key Vault = user-assigned identity. Block = Prevention. Dedicated subnet, /24 recommended."
},
{
 "id": "D4-407",
 "dom": 4,
 "type": "hot",
 "stem": "<p>AzFW1 (Azure Firewall Standard) is deployed in VNet-Hub. All spoke subnets send 0.0.0.0/0 to AzFW1. A firewall policy, FWP1, is attached.</p><p>The requirements are: 1. VMs must download updates from *.windowsupdate.microsoft.com over HTTPS; 2. Linux servers must reach time server 51.145.123.29 on UDP 123; 3. VM-Web's website (10.1.1.10) must be published to the internet on AzFW1's public IP address, port 443; 4. a rule must allow TCP 1433 to sql.partenaire.com, whose address changes often.</p><p>VMs currently use Azure-provided DNS.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Requirement 1:",
   "o": [
    "A network rule with a service tag",
    "An application rule with an FQDN",
    "A DNAT rule",
    "A network rule with the site IP"
   ],
   "a": 1
  },
  {
   "l": "Requirement 2:",
   "o": [
    "An application rule",
    "A DNAT rule",
    "A network rule",
    "None: allowed by default"
   ],
   "a": 2
  },
  {
   "l": "Requirement 3:",
   "o": [
    "A DNAT rule",
    "An application rule",
    "An inbound network rule",
    "A public IP on VM-Web"
   ],
   "a": 0
  },
  {
   "l": "Requirement 4, prerequisite:",
   "o": [
    "Upgrade AzFW1 to Premium",
    "An application rule on port 1433",
    "Enable AzFW1's DNS proxy and set it as the virtual networks' DNS",
    "A private DNS zone partenaire.com"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Updates.</b> A wildcard FQDN over HTTPS is filtered by an <b>application</b> rule (SNI inspection). The WindowsUpdate FQDN tag would also work in an application rule.<b>NTP.</b> UDP to an IP: <b>network</b> rule. Azure Firewall denies everything by default.<b>Publishing.</b> Inbound from the internet on the firewall public IP uses a <b>DNAT</b> rule, translating to 10.1.1.10:443. A public IP on VM-Web would bypass the firewall.<b>FQDN in a network rule.</b> Network rules accept FQDNs for any protocol (here TCP 1433, which application rules don't handle), provided the firewall resolves names like the clients do: enable the <b>DNS proxy</b> and point the virtual networks' DNS to the firewall private IP.",
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
    "*Requirement 1",
    "An application rule with an FQDN"
   ],
   [
    "Requirement 2",
    "A network rule"
   ],
   [
    "Requirement 3",
    "A DNAT rule"
   ],
   [
    "Requirement 4, prerequisite",
    "Enable AzFW1's DNS proxy and set it as the virtual networks' DNS"
   ]
  ]
 },
 "keep": "HTTP/S + FQDN = application. IP/port = network. Inbound = DNAT. FQDN in a network rule = DNS proxy."
},
{
 "id": "D4-408",
 "dom": 4,
 "type": "hot",
 "stem": "<p>One Monday morning, several incidents arrive at once on the Sub-Prod subscription (France Central). Network Watcher is enabled in the region.</p><ul><li>Incident A: VM-App1 can no longer reach VM-Db1 on TCP 1433. You want to know, for that exact packet, whether an NSG rule blocks it and which one.</li><li>Incident B: since a route table was added, VM-App2 no longer reaches 10.50.0.4 in a peered network. You want the next hop type and the route used.</li><li>Incident C: management wants to continuously track latency and failure rate between VM-App1 and a partner API, with an alert above 200 ms.</li><li>Incident D: security wants to analyze all inbound and outbound flows of virtual network VNet-Prod over 90 days, with statistics in Traffic Analytics.</li></ul><p>Which tool should you use for each incident?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Incident A:",
   "o": [
    "Next hop",
    "IP flow verify",
    "Connection monitor",
    "Packet capture"
   ],
   "a": 1
  },
  {
   "l": "Incident B:",
   "o": [
    "Next hop",
    "Topology",
    "IP flow verify",
    "VPN troubleshoot"
   ],
   "a": 0
  },
  {
   "l": "Incident C:",
   "o": [
    "Connection troubleshoot",
    "Connection monitor",
    "Next hop",
    "Flow logs"
   ],
   "a": 1
  },
  {
   "l": "Incident D:",
   "o": [
    "NSG flow logs",
    "Virtual network flow logs",
    "Packet capture",
    "Security group view"
   ],
   "a": 1
  }
 ],
 "expl": "<b>A.</b> IP flow verify tests a 5-tuple (IP, port, protocol, direction) and returns Allow or Deny with the name of the NSG rule responsible.<b>B.</b> Next hop returns the type (virtual appliance, peering, None…) and the ID of the route table used: ideal after adding a user-defined route.<b>C.</b> Connection monitor continuously measures latency and failures between a source and a destination, with thresholds and alerts. Connection troubleshoot only runs a one-off test.<b>D.</b> <b>Virtual network</b> flow logs cover the whole network and feed Traffic Analytics. NSG flow logs can no longer be created since June 2025 and will be retired: Microsoft recommends migrating to virtual network flow logs.",
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
    "*Incident A",
    "IP flow verify"
   ],
   [
    "Incident B",
    "Next hop"
   ],
   [
    "Incident C",
    "Connection monitor"
   ],
   [
    "Incident D",
    "Virtual network flow logs"
   ]
  ]
 },
 "keep": "Blocked packet → IP flow verify. Route → next hop. Continuous tracking → connection monitor. All flows → VNet flow logs."
},
{
 "id": "D4-409",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Subnet-Batch (VNet-Data, France Central) contains 40 compute VMs with no public IP address and VM-Legacy, which has a Basic SKU public IP address. You create NATGW1, a NAT gateway with one Standard public IP address, in France Central, with no zone.</p><p>When you associate NATGW1 with Subnet-Batch, the portal returns an error.</p><p>Also:</p><ul><li>the team sees outbound connection failures at peak times, each VM opening up to 3,000 simultaneous connections to the same API;</li><li>VM-Report, in Subnet-Batch, got its own Standard public IP address yesterday; a partner filters access on NATGW1's IP.</li></ul><p>What should you answer or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Cause of the association error:",
   "o": [
    "NATGW1 has no zone",
    "VM-Legacy's Basic public IP",
    "Subnet-Batch has more than 16 VMs",
    "A load balancer is missing"
   ],
   "a": 1
  },
  {
   "l": "Peak-time failures:",
   "o": [
    "Add public IP addresses to NATGW1",
    "Create a second NAT gateway on the same subnet",
    "Raise the idle timeout to 120 minutes",
    "Enable accelerated networking on the VMs"
   ],
   "a": 0
  },
  {
   "l": "Outbound traffic initiated by VM-Report:",
   "o": [
    "Uses VM-Report's public IP",
    "Uses NATGW1's IP",
    "Is split between both IPs",
    "Is blocked"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Error.</b> A NAT gateway isn't compatible with Basic resources: a subnet containing a Basic public IP (or Basic load balancer) can't be associated with it. Upgrade VM-Legacy's IP to Standard.<b>Peak.</b> 40 VMs × 3,000 connections to the same destination = 120,000 flows, while one public IP offers 64,512 SNAT ports. Add IPs (up to 16 per gateway). A subnet can have only one NAT gateway, and a longer idle timeout keeps ports busy longer: worse.<b>VM-Report.</b> For outbound traffic initiated by the VM, the NAT gateway takes precedence over the instance public IP: VM-Report goes out through NATGW1, which suits the partner. The VM's IP only serves inbound connections.",
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
    "*Cause of the association error",
    "VM-Legacy's Basic public IP"
   ],
   [
    "Peak-time failures",
    "Add public IP addresses to NATGW1"
   ],
   [
    "Outbound traffic initiated by VM-Report",
    "Uses NATGW1's IP"
   ]
  ]
 },
 "keep": "NAT gateway: incompatible with Basic, 64,512 ports per IP (16 IPs max), takes precedence outbound over the VM IP."
},
{
 "id": "D4-410",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Litware has VNet-App (France Central) with Subnet-App and an on-premises site connected by ExpressRoute. Three PaaS resources are used:</p><ul><li>stlogs, a storage account that Subnet-App VMs write logs to;</li><li>sql-litware, an Azure SQL Database server used from Subnet-App and from on-premises;</li><li>stpartner, a partner's storage account that the VMs must never be able to reach.</li></ul><p>Requirements:</p><ul><li>Subnet-App to stlogs traffic must stay on the Microsoft network, with no private IP for the account and no per-GB cost; stlogs must accept only Subnet-App;</li><li>the on-premises site must reach sql-litware over a private IP address;</li><li>from Subnet-App, only storage accounts in the Litware subscription must be reachable over the optimized path.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For stlogs:",
   "o": [
    "A private endpoint in Subnet-App",
    "A Microsoft.Storage service endpoint on Subnet-App and a virtual network rule on stlogs",
    "An IP rule on stlogs with Subnet-App's public IP",
    "A NAT gateway"
   ],
   "a": 1
  },
  {
   "l": "For sql-litware:",
   "o": [
    "A Microsoft.Sql service endpoint",
    "A firewall rule with the site's public IP",
    "A private endpoint and DNS resolution to the private address",
    "ExpressRoute Microsoft peering"
   ],
   "a": 2
  },
  {
   "l": "To limit reachable accounts:",
   "o": [
    "A service endpoint policy",
    "An NSG with the Storage tag",
    "A firewall rule on stpartner",
    "Azure Policy"
   ],
   "a": 0
  }
 ],
 "expl": "<b>stlogs.</b> A service endpoint keeps traffic on the Microsoft network, with no private IP for the account and no data processing charges; the virtual network rule restricts the account to Subnet-App. A private endpoint would give a private IP and is billed per GB.<b>sql-litware.</b> A service endpoint is only usable from the virtual network, not from on-premises. A private endpoint gives a private IP reachable over ExpressRoute (private peering), with matching DNS resolution.<b>Reachable accounts.</b> A service endpoint policy limits, from a subnet, the storage accounts reachable through the endpoint (by account, resource group, or subscription). An NSG's Storage tag covers every account in the region, stpartner included.",
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
    "*For stlogs",
    "A Microsoft.Storage service endpoint on Subnet-App and a virtual network rule on stlogs"
   ],
   [
    "For sql-litware",
    "A private endpoint and DNS resolution to the private address"
   ],
   [
    "To limit reachable accounts",
    "A service endpoint policy"
   ]
  ]
 },
 "keep": "Service endpoint: VNet only, free, no private IP. Private endpoint: private IP, reachable on-premises, paid. Limit accounts = service endpoint policy."
}
);
