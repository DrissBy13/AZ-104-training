/* Domain 4: networking (batch J: D4-430 to D4-440, long scenarios) */
AZ.questions.push(
{
 "id": "D4-430",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VNet-Hub contains Subnet-PE, where the private endpoints of ten storage accounts and three Azure SQL databases are deployed. Spokes send 0.0.0.0/0 to AzFW1 (10.0.1.4), and NSG-PE is associated with Subnet-PE with a rule that only allows 10.1.0.0/16 to 1433.</p><p>Findings:</p><ul><li>a VM in 10.2.0.0/16 still reaches the SQL databases on 1433;</li><li>AzFW1 logs show no traffic from the spokes to the private endpoints, while security requires it to be inspected;</li><li>the network team asks how many Subnet-PE addresses each private endpoint uses.</li></ul><p>What should you answer or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For NSG-PE to apply:",
   "o": [
    "Move NSG-PE to priority 100",
    "Add an ASG",
    "Associate NSG-PE directly with each endpoint's network interface",
    "Enable NSG network policies on Subnet-PE"
   ],
   "a": 3
  },
  {
   "l": "To send traffic through AzFW1:",
   "o": [
    "A peering between spokes",
    "Routing policies, route to Subnet-PE via 10.0.1.4",
    "Nothing: 0.0.0.0/0 to 10.0.1.4 already covers the endpoints",
    "A /32 route per endpoint, in Subnet-PE's route tables"
   ],
   "a": 1
  },
  {
   "l": "Addresses per endpoint:",
   "o": [
    "One address per client",
    "One private IP address",
    "A whole /28 reserved for the endpoint",
    "None"
   ],
   "a": 1
  }
 ],
 "expl": "<b>NSG.</b> By default, network policies are disabled for private endpoints: the subnet's NSGs don't apply to their traffic. Enable the property (privateEndpointNetworkPolicies) on Subnet-PE.<b>Routing.</b> Each endpoint creates a /32 system route, more specific than 0.0.0.0/0: traffic bypasses the firewall. Once route table policies are enabled, a user route to the Subnet-PE prefix (wider than /32) overrides those /32s, with no per-endpoint route to maintain.<b>Addresses.</b> A private endpoint uses one IP address from the subnet for the target sub-resource (some services, such as Cosmos DB, use one per region).",
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
    "*For NSG-PE to apply",
    "Enable NSG network policies on Subnet-PE"
   ],
   [
    "To send traffic through AzFW1",
    "Routing policies, route to Subnet-PE via 10.0.1.4"
   ],
   [
    "Addresses per endpoint",
    "One private IP address"
   ]
  ]
 },
 "keep": "Private endpoint: NSGs and user routes are ignored until the subnet's network policies are enabled."
},
{
 "id": "D4-431",
 "dom": 4,
 "type": "hot",
 "stem": "<p>AzFW1 (Standard) connects Azure networks to headquarters over ExpressRoute. Headquarters internally uses the public range 52.10.0.0/16, bought long ago, in addition to 10.0.0.0/8. A partner is reached through a VPN behind AzFW1, on 172.20.0.0/16.</p><p>Findings and needs:</p><ul><li>license server 52.10.4.20, at headquarters, sees AzFW1's address as source instead of the VMs'; it refuses connections;</li><li>the partner, on the contrary, requires all traffic reaching it to come from a single address, the firewall's;</li><li>security wants AzFW1's internet traffic to go to headquarters too, over ExpressRoute.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "AzFW1 private ranges (no SNAT):",
   "o": [
    "0.0.0.0/0",
    "Default IANA private ranges, unchanged",
    "255.255.255.255/32",
    "IANA + 52.10.0.0/16 − 172.16.0.0/12"
   ],
   "a": 3
  },
  {
   "l": "Effect on the partner:",
   "o": [
    "Its traffic is no longer translated",
    "It's translated to AzFW1's private IP",
    "Its traffic is blocked",
    "Its traffic is translated to AzFW1's public IP"
   ],
   "a": 1
  },
  {
   "l": "For AzFW1's internet traffic:",
   "o": [
    "Forced tunneling with a management subnet and IP",
    "A NAT gateway on AzureFirewallSubnet",
    "A 0.0.0.0/0 route to the gateway on AzureFirewallSubnet, with no other change",
    "Disable AzFW1's public IP"
   ],
   "a": 0
  }
 ],
 "expl": "<b>SNAT.</b> Azure Firewall doesn't translate traffic whose destination is in its “private” ranges (by default, IANA RFC 1918 ranges and 100.64.0.0/10) for network rules. 52.10.0.0/16 is public: it's translated. Add it to the list.<b>Partner.</b> 172.20.0.0/16 is part of 172.16.0.0/12; by removing that range from the list, traffic to the partner is translated to the firewall's private address (VPN side).<b>Forced tunneling.</b> The firewall needs direct access for management: forced tunneling requires AzureFirewallManagementSubnet (/26) with its own public IP. A plain 0.0.0.0/0 route on AzureFirewallSubnet without a management NIC would break the firewall.",
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
    "*AzFW1 private ranges (no SNAT)",
    "IANA + 52.10.0.0/16 − 172.16.0.0/12"
   ],
   [
    "Effect on the partner",
    "It's translated to AzFW1's private IP"
   ],
   [
    "For AzFW1's internet traffic",
    "Forced tunneling with a management subnet and IP"
   ]
  ]
 },
 "keep": "Azure Firewall: no SNAT to declared private ranges (editable). Forced tunneling = management subnet."
},
{
 "id": "D4-432",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VPNGW1 (VNet-Hub) is currently Basic SKU. The 180 sales staff must connect point-to-site with the native Windows IKEv2 client and certificates. VNet-Hub uses 10.0.0.0/16; spokes 10.1.0.0/16 to 10.4.0.0/16 use the remote gateway; the Lyon headquarters uses 192.168.0.0/16 and is connected site-to-site, with BGP.</p><p>Yesterday, you added VNet-Spoke5 (10.5.0.0/16) with “Use remote gateways”. Sales staff already connected can't reach it, unlike the other spokes.</p><p>What should you choose or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VPNGW1 SKU:",
   "o": [
    "Basic",
    "VpnGw1 (recreate it)",
    "VpnGw1 (resize it in place)",
    "VpnGw3"
   ],
   "a": 1
  },
  {
   "l": "Client address pool:",
   "o": [
    "172.16.200.0/24",
    "10.5.200.0/24",
    "192.168.200.0/24",
    "10.0.200.0/24"
   ],
   "a": 0
  },
  {
   "l": "For VNet-Spoke5:",
   "o": [
    "Enable gateway transit on Spoke5",
    "Add a route to 10.5.0.0/16 on each computer",
    "Restart VPNGW1",
    "Reinstall the VPN client profile"
   ],
   "a": 3
  },
  {
   "l": "Sales staff access to Lyon headquarters:",
   "o": [
    "Already works, thanks to BGP",
    "Not possible point-to-site",
    "Requires a peering",
    "Requires a second dedicated tunnel"
   ],
   "a": 0
  }
 ],
 "expl": "<b>SKU.</b> Basic supports neither IKEv2 nor OpenVPN for point-to-site (only SSTP) and can't be resized to another SKU: delete and recreate the gateway as VpnGw1, which supports up to 250 IKEv2 connections.<b>Pool.</b> It must not overlap the Azure networks (10.0.0.0/16 to 10.5.0.0/16) or the site (192.168.0.0/16): 172.16.200.0/24 fits.<b>Spoke5.</b> Routes pushed to clients are fixed in the profile. After a topology change (new peering), download and reinstall the profile.<b>Lyon.</b> Point-to-site clients reach a site connected site-to-site when it uses BGP: its prefixes are then advertised to clients.",
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
    "*VPNGW1 SKU",
    "VpnGw1 (recreate it)"
   ],
   [
    "Client address pool",
    "172.16.200.0/24"
   ],
   [
    "For VNet-Spoke5",
    "Reinstall the VPN client profile"
   ],
   [
    "Sales staff access to Lyon headquarters",
    "Already works, thanks to BGP"
   ]
  ]
 },
 "keep": "Basic: SSTP only, no resize. New peering = new client profile. P2S to site = BGP on the S2S."
},
{
 "id": "D4-433",
 "dom": 4,
 "type": "hot",
 "stem": "<p>LB-App (Standard internal load balancer) distributes TCP 443 to VM-A and VM-B. The health probe is TCP on port 443.</p><p>Incidents:</p><ul><li>last night, VM-A's app process hung; port 443 stayed open and LB-App kept sending it requests for two hours;</li><li>tonight, the team must update VM-B; current sessions (long downloads) must not be cut, but no new session may reach VM-B;</li><li>after hardening, VM-A's Windows firewall only allows the client subnet on 443; VM-A is immediately marked “Unhealthy”.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For the app hang:",
   "o": [
    "Enable session persistence",
    "Add an inbound NAT rule",
    "Shorten the TCP 443 probe's interval and threshold",
    "An HTTPS probe on /health that tests the app"
   ],
   "a": 3
  },
  {
   "l": "For VM-B's update:",
   "o": [
    "Delete the load-balancing rule",
    "Remove VM-B from LB-App's backend pool",
    "Make the probe fail on VM-B",
    "Stop VM-B"
   ],
   "a": 2
  },
  {
   "l": "For VM-A:",
   "o": [
    "Disable Windows Firewall",
    "Allow 168.63.129.16 in Windows Firewall",
    "Allow the AzureLoadBalancer tag in Windows Firewall",
    "Change the probe port"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Hang.</b> A TCP probe only checks that the port is open. An HTTP(S) probe on a page that really tests the app (database, dependencies) removes the instance as soon as it stops returning 200.<b>Update.</b> On a Standard load balancer, when the probe fails, new flows stop going to the instance, but established TCP connections continue. Removing the VM from the pool would cut existing flows.<b>Guest firewall.</b> Probes come from 168.63.129.16. In the guest OS, allow that address; the AzureLoadBalancer tag only exists in NSGs.",
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
    "*For the app hang",
    "An HTTPS probe on /health that tests the app"
   ],
   [
    "For VM-B's update",
    "Make the probe fail on VM-B"
   ],
   [
    "For VM-A",
    "Allow 168.63.129.16 in Windows Firewall"
   ]
  ]
 },
 "keep": "HTTP probe to test the app. Failed probe: new flows stop, established flows continue. Guest firewall: 168.63.129.16."
},
{
 "id": "D4-434",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Northwind management wants to know which control to deploy for each network security need. The environment has a hub with Azure Firewall Standard, spokes with NSGs, and a WAF_v2 Application Gateway publishing the public site.</p><ul><li>Need 1: block SQL injection and cross-site scripting to the public site.</li><li>Need 2: allow VM internet outbound only to a list of FQDNs.</li><li>Need 3: isolate two subnets in the same spoke, port by port, without sending traffic through the hub.</li><li>Need 4: automatically block traffic to known malicious IP addresses and domains, updated by Microsoft.</li></ul><p>Which control should you use for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Need 1:",
   "o": [
    "Azure Firewall application rules",
    "Azure Firewall threat intelligence",
    "The Application Gateway WAF policy",
    "An NSG"
   ],
   "a": 2
  },
  {
   "l": "Need 2:",
   "o": [
    "An NSG",
    "Azure Firewall application rules",
    "The Application Gateway WAF policy",
    "Azure Firewall threat intelligence"
   ],
   "a": 1
  },
  {
   "l": "Need 3:",
   "o": [
    "Azure Firewall application rules",
    "An NSG",
    "Azure Firewall threat intelligence",
    "The Application Gateway WAF policy"
   ],
   "a": 1
  },
  {
   "l": "Need 4:",
   "o": [
    "Azure Firewall threat intelligence",
    "An NSG",
    "The Application Gateway WAF policy",
    "Azure Firewall application rules"
   ],
   "a": 0
  }
 ],
 "expl": "<b>1.</b> HTTP application attacks (OWASP: SQL injection, XSS) are the <b>WAF</b>'s job.<b>2.</b> Outbound FQDN filtering uses Azure Firewall application rules; an NSG only knows addresses and tags.<b>3.</b> Traffic between two subnets of the same virtual network doesn't go through the hub: an NSG (or a user route, which the requirement excludes) filters it port by port.<b>4.</b> Azure Firewall threat intelligence filtering uses Microsoft's feed of malicious addresses and domains; it's Alert only by default, hence Alert and deny.",
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
    "*Need 1",
    "The Application Gateway WAF policy"
   ],
   [
    "Need 2",
    "Azure Firewall application rules"
   ],
   [
    "Need 3",
    "An NSG"
   ],
   [
    "Need 4",
    "Azure Firewall threat intelligence"
   ]
  ]
 },
 "keep": "OWASP = WAF. Outbound FQDN = Firewall (application). Intra-VNet = NSG. Malicious IPs/domains = threat intelligence."
},
{
 "id": "D4-435",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VNet-A and VNet-B are peered and both use Azure-provided DNS. VNet-B apps call VNet-A servers by host name (for example VM-A1), without success, while ping by IP address works.</p><p>VNet-B is already linked, with auto-registration, to private zone b.internal, which must stay as is. You create private zone a.internal.</p><p>Requirements:</p><ul><li>VNet-A VMs must auto-register in a.internal;</li><li>VNet-B VMs must resolve a.internal names;</li><li>when a VNet-A VM is deleted, its record must not remain in the zone.</li></ul><p>What should you answer or configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Cause of the current failure:",
   "o": [
    "An outbound NSG rule on UDP 53 to VNet-A is missing",
    "DNS is disabled on VNet-A",
    "Azure DNS only resolves names within one VNet",
    "The peering doesn't pass DNS queries between networks"
   ],
   "a": 2
  },
  {
   "l": "a.internal link to VNet-A:",
   "o": [
    "No link",
    "With auto-registration",
    "Without auto-registration"
   ],
   "a": 1
  },
  {
   "l": "a.internal link to VNet-B:",
   "o": [
    "Without auto-registration",
    "With auto-registration",
    "No link: the peering is enough for resolution"
   ],
   "a": 0
  },
  {
   "l": "Deleting a VNet-A VM:",
   "o": [
    "The record must be deleted manually",
    "Its record is deleted automatically",
    "The link must be disabled",
    "The record expires after 30 days"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Cause.</b> Azure DNS host name resolution only works within the same virtual network; peering doesn't extend it.<b>VNet-A.</b> A link with auto-registration creates A records for VNet-A VMs.<b>VNet-B.</b> VNet-B already registers in b.internal, and a virtual network can register in only one zone: the link to a.internal must be resolution only, which meets the need.<b>Deletion.</b> Records created by auto-registration are deleted with the VM.",
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
    "*Cause of the current failure",
    "Azure DNS only resolves names within one VNet"
   ],
   [
    "a.internal link to VNet-A",
    "With auto-registration"
   ],
   [
    "a.internal link to VNet-B",
    "Without auto-registration"
   ],
   [
    "Deleting a VNet-A VM",
    "Its record is deleted automatically"
   ]
  ]
 },
 "keep": "Names across VNets: private zone. A VNet registers in one zone only, but can resolve several."
},
{
 "id": "D4-436",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VM-Web1 and VM-Web2 (Subnet-Web, VNet-Spoke1) are behind LB-Web, a public Standard load balancer, and answer on 443. To inspect internet outbound, the team associated with Subnet-Web a route table sending 0.0.0.0/0 to AzFW1 (10.0.1.4) in the hub.</p><p>Since that change, no internet client can load the site, while LB-Web's probes are healthy and AzFW1 logs denied SYN-ACK packets.</p><p>What should you answer or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Cause:",
   "o": [
    "AzFW1 blocks inbound port 443",
    "Asymmetric routing: the reply goes to AzFW1",
    "LB-Web's probes go through AzFW1 and are denied",
    "LB-Web doesn't support user routes"
   ],
   "a": 1
  },
  {
   "l": "Recommended fix:",
   "o": [
    "An AzFW1 DNAT rule to an internal load balancer",
    "Add a public IP to each VM",
    "Enable floating IP on LB-Web",
    "Remove Subnet-Web's route table and filter with NSGs"
   ],
   "a": 0
  },
  {
   "l": "With a DNAT rule:",
   "o": [
    "Translated traffic is allowed implicitly",
    "An application rule is needed",
    "Traffic is inspected by the WAF",
    "A network rule allowing the translated traffic is also needed"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Asymmetry.</b> The request enters through LB-Web's public IP and reaches the VM; the reply follows the 0.0.0.0/0 route to AzFW1, which never saw the session open and denies the SYN-ACK.<b>Fix.</b> Bring traffic in through the firewall itself: a DNAT rule on AzFW1's public IP to an <b>internal</b> load balancer (or the VMs). Both directions then go through the same firewall. Removing the route table would remove outbound inspection.<b>Implicit rule.</b> A DNAT rule automatically adds a network rule allowing the translated traffic.",
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
    "*Cause",
    "Asymmetric routing: the reply goes to AzFW1"
   ],
   [
    "Recommended fix",
    "An AzFW1 DNAT rule to an internal load balancer"
   ],
   [
    "With a DNAT rule",
    "Translated traffic is allowed implicitly"
   ]
  ]
 },
 "keep": "0.0.0.0/0 to a firewall + inbound through a public LB = asymmetry. Come in through the firewall's DNAT."
},
{
 "id": "D4-437",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Fabrikam just ordered an ExpressRoute circuit from its carrier. Subscription Sub-Network contains the circuit; subscription Sub-App contains VNet-App and its ExpressRoute gateway. Both subscriptions are in the same tenant, and the teams must not get rights on each other's subscription.</p><p>The portal shows for the circuit: circuit status “Enabled”, provider status “Not provisioned”.</p><p>You're preparing the private peering configuration.</p><p>What should you answer or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "“Not provisioned” status:",
   "o": [
    "Delete and recreate the circuit with the right provider",
    "Enable Global Reach",
    "Configure private peering now",
    "Wait for the carrier to provision it"
   ],
   "a": 3
  },
  {
   "l": "Private peering subnets (IPv4):",
   "o": [
    "Two /30s, one per link",
    "None",
    "One /29 shared by both links",
    "One /24"
   ],
   "a": 0
  },
  {
   "l": "Connect VNet-App to the circuit:",
   "o": [
    "Move the circuit to Sub-App",
    "A circuit authorization, then a connection with the key",
    "Give the App team Contributor on Sub-Network",
    "Peer VNet-App with a Sub-Network network linked to the circuit"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Provisioning.</b> After creation, send the service key to the carrier; until the provider status is “Provisioned”, peering can't be configured. The circuit is billed from creation.<b>Private peering.</b> Two /30 subnets (or /126 for IPv6) are needed, one per link, with a VLAN ID and an ASN.<b>Other subscription.</b> The circuit owner creates an authorization; the other subscription's team creates the connection with the circuit resource ID and the authorization key, with no rights on Sub-Network.",
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
    "*“Not provisioned” status",
    "Wait for the carrier to provision it"
   ],
   [
    "Private peering subnets (IPv4)",
    "Two /30s, one per link"
   ],
   [
    "Connect VNet-App to the circuit",
    "A circuit authorization, then a connection with the key"
   ]
  ]
 },
 "keep": "ExpressRoute: service key to the carrier, two /30s, authorization for another subscription."
},
{
 "id": "D4-438",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Basic load balancers were retired on September 30, 2025. Contoso is migrating LB-Legacy (public, Basic, one dynamic Basic public IP) to Standard. LB-Legacy distributes HTTP to VM1 and VM2, which have no public IP address and no NSG; they download updates from the internet through the load balancer.</p><p>Right after migration:</p><ul><li>the site no longer answers on 80;</li><li>the VMs can no longer download updates.</li></ul><p>What should you answer or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Recommended migration tool:",
   "o": [
    "Change the SKU in the portal, with no downtime",
    "The PowerShell load balancer upgrade module",
    "Recreate the load balancer by hand",
    "Azure Migrate"
   ],
   "a": 1
  },
  {
   "l": "The site no longer answers:",
   "o": [
    "One IP per VM is needed",
    "The probe must switch to HTTPS on port 443",
    "The pool must be recreated",
    "Associate an NSG allowing TCP 80"
   ],
   "a": 3
  },
  {
   "l": "VM updates:",
   "o": [
    "Add a probe",
    "An outbound rule or a NAT gateway",
    "Open 443 inbound",
    "They come back on their own after sync"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Tool.</b> Microsoft provides a PowerShell module that migrates a Basic load balancer to Standard (configuration, pools, IPs set to static and upgraded). The SKU can't be changed in the portal.<b>Inbound.</b> A Standard load balancer and its Standard IPs are secure by default: without an NSG allowing it, inbound traffic is denied.<b>Outbound.</b> A Basic load balancer gave implicit outbound access; a Standard one gives none without an outbound rule. The script can create one; otherwise, add an outbound rule or a NAT gateway.",
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
    "*Recommended migration tool",
    "The PowerShell load balancer upgrade module"
   ],
   [
    "The site no longer answers",
    "Associate an NSG allowing TCP 80"
   ],
   [
    "VM updates",
    "An outbound rule or a NAT gateway"
   ]
  ]
 },
 "keep": "Basic → Standard: PowerShell script, NSG required for inbound, explicit outbound (outbound rule or NAT)."
},
{
 "id": "D4-439",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso has two hubs: Hub1 (France Central) with VPN gateway VPNGW1, and Hub2 (West Europe) with VPN gateway VPNGW2. Gateway transit is enabled on the hub-to-spoke peerings.</p><ul><li>Spoke4 (France Central) already contains an old VPN gateway, VPNGW4, with no active connection. The team wants to enable “Use remote gateways” on its peering to Hub1.</li><li>Spoke5 (France Central) is peered with Hub1 and Hub2. The team wants it to use both gateways for redundancy.</li><li>Spoke6 (North Europe) is peered with Hub1, through global peering, and must reach on-premises through VPNGW1.</li></ul><p>What happens, or what should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Spoke4:",
   "o": [
    "Enable gateway transit on Spoke4",
    "Enable the option directly",
    "Disable BGP on VPNGW4",
    "Delete VPNGW4 first"
   ],
   "a": 3
  },
  {
   "l": "Spoke5:",
   "o": [
    "Possible with Basic Virtual WAN",
    "Only one peering can use a remote gateway",
    "Enable “Use remote gateways” on both peerings",
    "Possible if both gateways use BGP"
   ],
   "a": 1
  },
  {
   "l": "Spoke6:",
   "o": [
    "Requires a gateway in Spoke6",
    "Supported over global peering",
    "Not possible: transit requires the same region",
    "Requires ExpressRoute"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Spoke4.</b> You can't use a remote gateway if the virtual network already has its own gateway: delete VPNGW4.<b>Spoke5.</b> A virtual network can use the remote gateway of only one peering. For cross-region redundancy, another design is needed (active-active gateways, Standard Virtual WAN…).<b>Spoke6.</b> Gateway transit is supported over global peering, across regions.",
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
    "*Spoke4",
    "Delete VPNGW4 first"
   ],
   [
    "Spoke5",
    "Only one peering can use a remote gateway"
   ],
   [
    "Spoke6",
    "Supported over global peering"
   ]
  ]
 },
 "keep": "Remote gateway: no local gateway, a single peering, works over global peering."
},
{
 "id": "D4-440",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Woodgrove is deploying Azure Firewall in three environments:</p><ul><li>a small subsidiary with about ten VMs, under 100 Mbps of traffic, wanting the lowest cost while filtering by FQDN;</li><li>headquarters, which needs FQDN filtering, DNS proxy, and threat intelligence in Alert and deny mode;</li><li>the payment platform, subject to PCI DSS, which requires signature-based intrusion detection and inspection of decrypted HTTPS traffic.</li></ul><p>Which Azure Firewall tier should you choose for each?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Subsidiary:",
   "o": [
    "Basic",
    "Standard",
    "Premium"
   ],
   "a": 0
  },
  {
   "l": "Headquarters:",
   "o": [
    "Basic",
    "Standard",
    "Premium"
   ],
   "a": 1
  },
  {
   "l": "Payment platform:",
   "o": [
    "Basic",
    "Standard",
    "Premium"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Basic.</b> For small businesses (throughput capped at 250 Mbps), with FQDN application rules, but threat intelligence in Alert only and no DNS proxy.<b>Standard.</b> DNS proxy, FQDNs in network rules, threat intelligence in Alert and deny.<b>Premium.</b> Adds signature-based IDPS, TLS inspection, and full URL filtering, often required by PCI DSS. Domain-level web categories already exist in Standard.",
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
    "*Subsidiary",
    "Basic"
   ],
   [
    "Headquarters",
    "Standard"
   ],
   [
    "Payment platform",
    "Premium"
   ]
  ]
 },
 "keep": "Basic: small and cheap, alerts only. Standard: DNS proxy, Alert and deny. Premium: IDPS, TLS, URL."
}
);
