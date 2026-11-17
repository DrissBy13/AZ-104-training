/* Domain 4: networking (batch I: D4-421 to D4-429, long scenarios) */
AZ.questions.push(
{
 "id": "D4-421",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso security requires all internet traffic from VNet-Spoke VMs to go through the headquarters proxy, reachable through VPN gateway VPNGW1 (route-based) in VNet-Hub. VNet-Spoke uses the hub's remote gateway. Headquarters doesn't advertise a default route over BGP.</p><p>After rollout, the team notices that:</p><ul><li>Windows activation on the VMs no longer works, while the headquarters proxy doesn't allow the KMS protocol;</li><li>Azure Bastion, deployed in VNet-Hub's AzureBastionSubnet, must keep working.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "On VNet-Spoke subnets:",
   "o": [
    "A NAT gateway",
    "A 0.0.0.0/0 route to the virtual network gateway",
    "An NSG denying Internet",
    "A 0.0.0.0/0 route, next hop Internet, with an NSG to the proxy"
   ],
   "a": 1
  },
  {
   "l": "For Windows activation:",
   "o": [
    "Disable route propagation",
    "Open outbound TCP 1688 in the spoke NSG to AzureCloud",
    "/32 routes to Azure KMS addresses, next hop Internet",
    "A public IP on each VM"
   ],
   "a": 2
  },
  {
   "l": "For AzureBastionSubnet:",
   "o": [
    "Associate the same route table",
    "An NSG denying GatewayManager",
    "Associate no route table",
    "A 0.0.0.0/0 route to VPNGW1"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Forced tunneling.</b> With no default route advertised over BGP, create a 0.0.0.0/0 route with next hop “Virtual network gateway” (route-based gateway). The spoke uses the hub gateway, so the route is valid.<b>KMS.</b> Activation uses azkms.core.windows.net (TCP 1688) to known Azure addresses. With forced tunneling, that traffic goes to headquarters and is blocked. /32 routes to those addresses with next hop Internet, more specific than 0.0.0.0/0, send it out directly.<b>Bastion.</b> User-defined routes aren't supported on AzureBastionSubnet: Bastion must reach the Azure control plane directly. Don't associate the table with it.",
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
    "*On VNet-Spoke subnets",
    "A 0.0.0.0/0 route to the virtual network gateway"
   ],
   [
    "For Windows activation",
    "/32 routes to Azure KMS addresses, next hop Internet"
   ],
   [
    "For AzureBastionSubnet",
    "Associate no route table"
   ]
  ]
 },
 "keep": "Forced tunneling: 0.0.0.0/0 to the gateway; /32 exceptions to Internet (KMS); never a route table on AzureBastionSubnet."
},
{
 "id": "D4-422",
 "dom": 4,
 "type": "hot",
 "stem": "<p>The site-to-site tunnel between VPNGW1 (France Central) and the Paris headquarters firewall has been connected for a year, without BGP. Local network gateway LNG-Paris contains the firewall's public address and the prefix 192.168.0.0/20.</p><p>This week:</p><ul><li>the headquarters network adds VLAN 192.168.50.0/24; its computers can't reach Azure, while other VLANs work;</li><li>the team wants to enable BGP; the firewall vendor proposes ASN 65515 for headquarters;</li><li>an engineer asks for the tool that collects the gateway's IKE logs to check the negotiated settings.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For 192.168.50.0/24:",
   "o": [
    "Add the prefix to LNG-Paris",
    "Add a route on GatewaySubnet",
    "Add an NSG rule",
    "Reset VPNGW1"
   ],
   "a": 0
  },
  {
   "l": "ASN 65515 for headquarters:",
   "o": [
    "Accept if VPNGW1 also uses 65515",
    "Accept",
    "Refuse: only public ASNs are accepted",
    "Refuse: 65515 is reserved by Azure"
   ],
   "a": 3
  },
  {
   "l": "IKE logs:",
   "o": [
    "Connection monitor",
    "VPN connection activity log",
    "VPN troubleshoot",
    "IP flow verify on the gateway"
   ],
   "a": 2
  }
 ],
 "expl": "<b>New VLAN.</b> Without BGP, Azure only knows the site through the local network gateway prefixes. 192.168.50.0/24 isn't in 192.168.0.0/20 (192.168.0.0 to 192.168.15.255): add it to LNG-Paris (and to the firewall's encryption domain).<b>ASN.</b> Azure reserves 65515 (its default ASN), plus 65517 to 65520, 8074, 8075, and 12076. Headquarters must use another private ASN.<b>Logs.</b> Network Watcher VPN troubleshoot tests the gateway and connection and writes detailed logs (IKE included) to a storage account.",
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
    "*For 192.168.50.0/24",
    "Add the prefix to LNG-Paris"
   ],
   [
    "ASN 65515 for headquarters",
    "Refuse: 65515 is reserved by Azure"
   ],
   [
    "IKE logs",
    "VPN troubleshoot"
   ]
  ]
 },
 "keep": "Without BGP: prefixes in the local network gateway. ASN 65515 reserved. IKE logs: VPN troubleshoot."
},
{
 "id": "D4-423",
 "dom": 4,
 "type": "hot",
 "stem": "<p>AppGW2 (Standard_v2) publishes three sites. Several issues appear:</p><ul><li>after NSG-AGW, which contains rule 4096 “Deny all inbound traffic”, is associated with its subnet, AppGW2 goes into a failed state;</li><li>the app-pool pool contains the App Service app shop.azurewebsites.net; the portal shows it “Unhealthy”, while the site answers when opened directly;</li><li>the reports pool contains a VM whose page takes about 45 seconds to generate; users get a 502 error;</li><li>all HTTP traffic for www.contoso.com must be redirected to HTTPS.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "In NSG-AGW:",
   "o": [
    "Allow AzureCloud on TCP 443, priority 100",
    "Delete rule 4096",
    "Allow GatewayManager on TCP 65200-65535",
    "Allow Internet on TCP 443 and 80 only"
   ],
   "a": 2
  },
  {
   "l": "For app-pool:",
   "o": [
    "Move AppGW2 to WAF_v2",
    "Add the app's outbound IP address to the pool",
    "Disable HTTPS on the app and probe over HTTP",
    "Back-end host name (settings and probe)"
   ],
   "a": 3
  },
  {
   "l": "For the reports pool:",
   "o": [
    "Raise the backend settings request timeout",
    "Add a second instance",
    "Enable connection draining",
    "Enable cookie-based affinity for the reports pool"
   ],
   "a": 0
  },
  {
   "l": "For HTTP to HTTPS:",
   "o": [
    "A second pool",
    "A redirect from listener 80 to listener 443",
    "A URL rewrite rule replacing http with https",
    "A WAF policy"
   ],
   "a": 1
  }
 ],
 "expl": "<b>NSG.</b> Application Gateway v2 requires allowing the GatewayManager tag inbound on TCP 65200-65535 (infrastructure management), plus AzureLoadBalancer. A “Deny all” rule without these exceptions breaks the gateway.<b>App Service.</b> App Service routes requests by Host header. AppGW2 sends the listener name by default, unknown to the app. Override the host name with the back end's (“Pick host name from backend target”), in the backend settings and the probe.<b>502.</b> The request timeout defaults to 20 seconds; beyond it, the gateway returns 502. Raise it (for example to 60 seconds).<b>Redirect.</b> A permanent redirect rule on the HTTP listener, to the HTTPS listener.",
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
    "*In NSG-AGW",
    "Allow GatewayManager on TCP 65200-65535"
   ],
   [
    "For app-pool",
    "Back-end host name (settings and probe)"
   ],
   [
    "For the reports pool",
    "Raise the backend settings request timeout"
   ],
   [
    "For HTTP to HTTPS",
    "A redirect from listener 80 to listener 443"
   ]
  ]
 },
 "keep": "AppGW v2: GatewayManager 65200-65535. App Service back end: back-end host name. Slow 502: request timeout (20 s default)."
},
{
 "id": "D4-424",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Woodgrove exposes several services to the internet from France Central.</p><ul><li>Partners filter inbound and outbound access on address lists. Woodgrove will add VMs in the coming months and wants contiguous public addresses, known in advance, with no further update request to partners.</li><li>LB-Web uses a Standard public IP created in zone 1. Management wants the load balancer to survive the loss of any zone.</li><li>VM5 has a dynamically allocated Basic public IP (52.143.10.20), registered with a customer. It must move to Standard while keeping its address.</li><li>VM6 had the private address 10.0.1.50, which the licensing app records; it changed after a stop with deallocation.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For partner addresses:",
   "o": [
    "Reserved dynamic public IPs",
    "A NAT gateway with no IP",
    "A public IP address prefix",
    "Service tags"
   ],
   "a": 2
  },
  {
   "l": "For LB-Web:",
   "o": [
    "Move the IP to Basic",
    "Create a zone-redundant IP and swap the frontend",
    "Add zones 2 and 3 to the existing IP",
    "Change the existing IP's zone to “zone-redundant”"
   ],
   "a": 1
  },
  {
   "l": "For VM5:",
   "o": [
    "Create a Standard IP and ask support for the same address",
    "Upgrade the IP directly",
    "Delete the IP and recreate it as Standard",
    "Set static, disassociate, upgrade, reassociate"
   ],
   "a": 3
  },
  {
   "l": "For VM6:",
   "o": [
    "Set the address inside Windows",
    "Static allocation on the Azure NIC",
    "Use a static public IP",
    "Reserve the address on a DHCP server"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Prefix.</b> A public IP address prefix reserves a contiguous range (for example /28) from which Standard IPs are then drawn: partners allow the range once and for all.<b>Zone.</b> A public IP's zone is set at creation and can't be changed. Create a zone-redundant IP, then replace the frontend configuration (or add one).<b>VM5.</b> Only a <b>static</b> Basic IP can be upgraded while keeping its address, and it must be disassociated during the upgrade. A dynamic IP must first be set to static (without changing address while it stays associated). Since Basic IPs were retired on September 30, 2025, this migration is no longer optional.<b>VM6.</b> Set the private address in Azure (static allocation of the IP configuration); never hard-code the IP inside the guest OS, or you risk losing connectivity.",
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
    "*For partner addresses",
    "A public IP address prefix"
   ],
   [
    "For LB-Web",
    "Create a zone-redundant IP and swap the frontend"
   ],
   [
    "For VM5",
    "Set static, disassociate, upgrade, reassociate"
   ],
   [
    "For VM6",
    "Static allocation on the Azure NIC"
   ]
  ]
 },
 "keep": "Contiguous range = prefix. IP zone: set at creation. Basic → Standard: static, disassociated. Fixed private IP: static on the Azure side."
},
{
 "id": "D4-425",
 "dom": 4,
 "type": "hot",
 "stem": "<p>LB-Pub, a public Standard load balancer with one frontend IP, distributes TCP 443 to a pool of 8 Windows VMs (Subnet-App). The load-balancing rule's implicit SNAT is used for internet outbound.</p><p>Problems and needs:</p><ul><li>VMs regularly fail to open outbound connections to a payment API at peak times; the team wants to guarantee 8,000 SNAT ports per VM and keep an outbound IP different from the site IP;</li><li>admins want to open RDP to each pool VM through the frontend IP, on ports 50001 to 50008, with no rule to create when a VM is added to the pool;</li><li>RDP must only be possible from the headquarters IP 203.0.113.10.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For outbound:",
   "o": [
    "Raise rule 443's idle timeout and enable TCP reset",
    "A Standard public IP on each of the 8 VMs",
    "An outbound rule (8,000 ports/VM), 2nd frontend IP",
    "Enable floating IP"
   ],
   "a": 2
  },
  {
   "l": "For RDP:",
   "o": [
    "An outbound rule",
    "A Standard public IP on each of the 8 VMs",
    "An inbound NAT rule on the pool, port range",
    "Eight load-balancing rules, one per port 50001 to 50008"
   ],
   "a": 2
  },
  {
   "l": "To restrict RDP to headquarters:",
   "o": [
    "An NSG rule on Subnet-App: 203.0.113.10 to 3389",
    "A source address filter on the inbound NAT rule",
    "An access restriction",
    "An NSG rule: 203.0.113.10 to 50001-50008"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Outbound.</b> Implicit SNAT doesn't guarantee port count. An <b>outbound rule</b> fixes the allocation (8 VMs × 8,000 = 64,000 ports, within one IP's 64,512); put it on a second frontend IP to separate outbound from the site, and disable rule 443's implicit SNAT (“Use outbound rules”).<b>RDP.</b> A “v2” inbound NAT rule targets a whole pool with a frontend port range: each new VM automatically gets its port.<b>Filter.</b> The NSG sees the packet after translation: the destination is the VM's port 3389, not 50001. The rule must therefore allow 203.0.113.10 to 3389.",
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
    "*For outbound",
    "An outbound rule (8,000 ports/VM), 2nd frontend IP"
   ],
   [
    "For RDP",
    "An inbound NAT rule on the pool, port range"
   ],
   [
    "To restrict RDP to headquarters",
    "An NSG rule on Subnet-App: 203.0.113.10 to 3389"
   ]
  ]
 },
 "keep": "Guaranteed SNAT ports = outbound rule. Per-VM RDP = inbound NAT on the pool. The NSG filters the VM port, after NAT."
},
{
 "id": "D4-426",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Litware publishes an API hosted on VMs behind LB-Int, a Standard internal load balancer, in VNet-Litware. A customer, Fabrikam, wants to consume the API from its own virtual network, in its own Microsoft Entra tenant. Both networks use 10.0.0.0/16.</p><p>Requirements:</p><ul><li>traffic must never cross the internet;</li><li>Litware must validate each new customer connection;</li><li>no peering or VPN may connect the two companies.</li></ul><p>What should you set up, and what will the API VMs see as the source address?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "On the Litware side:",
   "o": [
    "A Private Link service on LB-Int's frontend",
    "A service endpoint",
    "A private endpoint to LB-Int in VNet-Litware",
    "A public IP on LB-Int"
   ],
   "a": 0
  },
  {
   "l": "On the Fabrikam side:",
   "o": [
    "A private endpoint to the service alias",
    "An NSG rule",
    "A VPN gateway",
    "A peering with VNet-Litware after readdressing"
   ],
   "a": 0
  },
  {
   "l": "Connection validation:",
   "o": [
    "Azure Policy",
    "Manual approval in the Private Link service",
    "An NSG on LB-Int",
    "An auto-approval list with Fabrikam's subscription"
   ],
   "a": 1
  },
  {
   "l": "Source address seen by the API:",
   "o": [
    "A NAT IP of the Private Link service",
    "168.63.129.16",
    "The Fabrikam client's private IP, unchanged",
    "Fabrikam's public IP"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Private Link service.</b> It exposes a service behind a <b>Standard internal</b> load balancer. The customer creates a <b>private endpoint</b> to the service alias: traffic stays on Microsoft's network with no peering, and the overlapping 10.0.0.0/16 ranges aren't an issue.<b>Validation.</b> By default, each connection request waits for the service owner's approval; the auto-approval list would bypass it.<b>Source.</b> The service translates the source address to a NAT address from a VNet-Litware subnet. To learn the real client, you can enable proxy protocol v2 (TCP).",
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
    "*On the Litware side",
    "A Private Link service on LB-Int's frontend"
   ],
   [
    "On the Fabrikam side",
    "A private endpoint to the service alias"
   ],
   [
    "Connection validation",
    "Manual approval in the Private Link service"
   ],
   [
    "Source address seen by the API",
    "A NAT IP of the Private Link service"
   ]
  ]
 },
 "keep": "Expose your service privately: Private Link service (Standard internal LB) + private endpoint at the customer. Source = NAT IP."
},
{
 "id": "D4-427",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Contoso (contoso.com tenant) and Fabrikam (fabrikam.com tenant) are merging. You need to connect:</p><ul><li>VNet-A (Contoso, France Central, 10.1.0.0/16), which contains a Basic internal load balancer LB-Old;</li><li>VNet-B (Fabrikam, West Europe, 10.2.0.0/16);</li><li>VNet-C (Fabrikam, France Central, 10.1.0.0/16).</li></ul><p>You're Network Contributor on VNet-A. A Fabrikam admin added you as a B2B guest with Network Contributor on VNet-B and VNet-C.</p><p>What happens, or what should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VNet-A ↔ VNet-B peering:",
   "o": [
    "Create a single link from VNet-A",
    "Not possible across two different Microsoft Entra tenants",
    "Create both peering links, one on each side",
    "A VPN is mandatory"
   ],
   "a": 2
  },
  {
   "l": "Can VNet-B VMs reach LB-Old?",
   "o": [
    "No: cross-tenant peerings block load balancers",
    "No: no Basic load balancer over global peering",
    "Yes, if gateway transit is enabled",
    "Yes"
   ],
   "a": 1
  },
  {
   "l": "VNet-A ↔ VNet-C peering:",
   "o": [
    "Possible with global peering only",
    "Possible with “Allow forwarded traffic”",
    "Possible if VNet-C moves to the Contoso tenant",
    "Not possible: address spaces overlap"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Across tenants.</b> Peering is possible across tenants; create one link on each side, with rights (Network Contributor or a peering permission) on each network, for example as a B2B guest.<b>LB-Old.</b> VNet-A and VNet-B are in two regions: that's global peering. Resources behind a <b>Basic</b> load balancer aren't reachable over global peering; upgrade LB-Old to Standard.<b>VNet-C.</b> Two networks with overlapping address spaces can't be peered, whatever the tenant. Readdress one of them.",
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
    "*VNet-A ↔ VNet-B peering",
    "Create both peering links, one on each side"
   ],
   [
    "Can VNet-B VMs reach LB-Old?",
    "No: no Basic load balancer over global peering"
   ],
   [
    "VNet-A ↔ VNet-C peering",
    "Not possible: address spaces overlap"
   ]
  ]
 },
 "keep": "Cross-tenant peering: one link on each side. Global peering: no Basic load balancer. Overlapping ranges: no peering."
},
{
 "id": "D4-428",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Woodgrove's security team publishes new rules for the three Azure firewalls (France Central, West Europe, North Europe), currently Standard with three independent policies.</p><ul><li>1. Outbound HTTPS traffic from VMs must be decrypted and inspected, with an internal certificate authority.</li><li>2. Known attack signatures must be detected and blocked on traffic crossing the firewalls.</li><li>3. A common rule baseline must apply to all three firewalls; each region adds its own rules without being able to change the baseline.</li><li>4. Public IP addresses in production virtual networks must be protected against volumetric DDoS attacks, with access to Microsoft's rapid response team.</li></ul><p>What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Requirement 1:",
   "o": [
    "A WAF on Application Gateway",
    "HTTPS application rules on Standard",
    "Premium TLS inspection",
    "The DNS proxy"
   ],
   "a": 2
  },
  {
   "l": "Requirement 2:",
   "o": [
    "Threat intelligence filtering in Alert and deny mode",
    "Network rules",
    "Microsoft Defender for Cloud",
    "Azure Firewall Premium IDPS in Alert and deny mode"
   ],
   "a": 3
  },
  {
   "l": "Requirement 3:",
   "o": [
    "Azure Policy",
    "A management group",
    "Copy the baseline rules into each policy",
    "A parent policy, three child policies"
   ],
   "a": 3
  },
  {
   "l": "Requirement 4:",
   "o": [
    "Infrastructure DDoS protection (included)",
    "A WAF",
    "A DDoS Network Protection plan",
    "NSGs"
   ],
   "a": 2
  }
 ],
 "expl": "<b>TLS.</b> Decrypting outbound traffic is a <b>Premium</b> feature; the intermediate CA certificate is stored in Key Vault and read by a managed identity.<b>IDPS.</b> Signature-based detection is Premium's IDPS. Threat intelligence filtering (Standard) blocks known IPs and domains, not attack signatures.<b>Common baseline.</b> With Azure Firewall Manager, a parent policy is inherited by child policies: they add rules but don't change the parent's.<b>DDoS.</b> Basic infrastructure protection offers no per-application tuning or DDoS Rapid Response access. A DDoS Network Protection plan, associated with the virtual networks, protects their public IPs and provides that access.",
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
    "Premium TLS inspection"
   ],
   [
    "Requirement 2",
    "Azure Firewall Premium IDPS in Alert and deny mode"
   ],
   [
    "Requirement 3",
    "A parent policy, three child policies"
   ],
   [
    "Requirement 4",
    "A DDoS Network Protection plan"
   ]
  ]
 },
 "keep": "TLS and IDPS = Firewall Premium. Common baseline = parent policy. Advanced DDoS + DRR = DDoS Network Protection plan."
},
{
 "id": "D4-429",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VM7 (Standard_D4s_v5, 2 network interfaces maximum) is running in Subnet-App of VNet-Prod, with a single network interface. Security wants a second interface for administration, and maximum network performance for the production interface.</p><ul><li>The second interface, NIC-Mgmt, must go in Subnet-Mgmt.</li><li>An engineer proposes putting NIC-Mgmt in VNet-Mgmt, a separate network, for better admin isolation.</li><li>The production interface must offer the lowest latency and highest throughput possible.</li><li>Later, the team will want a third interface for backup.</li></ul><p>What should you answer or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "To attach NIC-Mgmt:",
   "o": [
    "Hot-attach it with the VM running, then restart",
    "Deallocate VM7, attach, restart",
    "Redeploy VM7",
    "Recreate VM7"
   ],
   "a": 1
  },
  {
   "l": "NIC-Mgmt in VNet-Mgmt:",
   "o": [
    "Possible if VNet-Mgmt is in the same region",
    "Possible with IP forwarding",
    "Not possible: all NICs share one virtual network",
    "Possible with a peering between VNet-Prod and VNet-Mgmt"
   ],
   "a": 2
  },
  {
   "l": "For the production interface:",
   "o": [
    "Add a second IP configuration",
    "Enable IP forwarding",
    "Add a public IP",
    "Enable accelerated networking"
   ],
   "a": 3
  },
  {
   "l": "Third interface:",
   "o": [
    "Add an IP configuration to NIC-Mgmt for backup",
    "Possible with no change",
    "Resize VM7 (a size with 3+ NICs)",
    "Not possible on Azure"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Attach.</b> You add or remove a network interface only when the VM is stopped (deallocated).<b>Network.</b> A VM's interfaces can be in different subnets, but all in the <b>same virtual network</b>.<b>Performance.</b> Accelerated networking (SR-IOV) bypasses the host virtual switch: lower latency, higher throughput, less CPU. It's supported on D4s_v5.<b>Third interface.</b> The number of interfaces depends on size: D4s_v5 supports 2. A larger size is needed (for example D8s_v5, 4 interfaces). A second IP configuration isn't a separate interface.",
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
    "*To attach NIC-Mgmt",
    "Deallocate VM7, attach, restart"
   ],
   [
    "NIC-Mgmt in VNet-Mgmt",
    "Not possible: all NICs share one virtual network"
   ],
   [
    "For the production interface",
    "Enable accelerated networking"
   ],
   [
    "Third interface",
    "Resize VM7 (a size with 3+ NICs)"
   ]
  ]
 },
 "keep": "Network interfaces: VM deallocated, same VNet, count by size. Performance = accelerated networking."
}
);
