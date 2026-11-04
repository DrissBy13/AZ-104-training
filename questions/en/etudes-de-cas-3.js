/* Case studies (batch 3: C005 and C006, networking) */
AZ.cases.push(
{
 "id": "C005",
 "title": "Tailwind Logistics",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Tailwind Logistics is a carrier headquartered in Lyon. The company migrated its applications to Azure using a hub-and-spoke topology and is preparing a recovery site in West Europe.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Virtual networks</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Network</th><th>Region</th><th>Address space</th><th>Subnets</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.10.0.0/16</td><td>GatewaySubnet 10.10.255.0/27, AzureFirewallSubnet 10.10.1.0/26</td></tr><tr><td>VNet-App</td><td>France Central</td><td>10.20.0.0/16</td><td>Subnet-Web 10.20.1.0/24, Subnet-API 10.20.2.0/24</td></tr><tr><td>VNet-Data</td><td>France Central</td><td>10.30.0.0/16</td><td>Subnet-SQL 10.30.1.0/24</td></tr><tr><td>VNet-DR</td><td>West Europe</td><td>10.20.0.0/16</td><td>Subnet-DR 10.20.1.0/24</td></tr></table></div><p><b>Peerings</b> (all Connected)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Peering</th><th>Allow forwarded traffic</th><th>Gateway transit</th><th>Use remote gateway</th></tr><tr><td>VNet-Hub → VNet-App</td><td>Yes</td><td>Yes</td><td>—</td></tr><tr><td>VNet-App → VNet-Hub</td><td>Yes</td><td>—</td><td>Yes</td></tr><tr><td>VNet-Hub → VNet-Data</td><td>Yes</td><td>Yes</td><td>—</td></tr><tr><td>VNet-Data → VNet-Hub</td><td>Yes</td><td>—</td><td>No</td></tr></table></div><p><b>Other resources</b></p><ul><li><b>FW1</b>: Azure Firewall Standard in VNet-Hub, private address 10.10.1.4.</li><li><b>RT-App</b>: route table associated with Subnet-Web and Subnet-API, with the route 0.0.0.0/0 → Virtual appliance 10.10.1.4. “Propagate gateway routes”: Yes.</li><li><b>VPNGW1</b>: VpnGw2 VPN gateway, route-based, active-standby, BGP enabled, connected to Lyon headquarters (192.168.0.0/16).</li><li>Subnet-Data has no route table. No VM has a public IP address.</li><li><b>sttaildocs</b>: storage account, public network access enabled from all networks.</li></ul>"
  },
  {
   "t": "Requirements",
   "h": "<p><b>Technical requirements</b></p><ol><li>VNet-DR must be peered with VNet-Hub for disaster recovery.</li><li>All traffic between VNet-App and VNet-Data must go through FW1, in both directions.</li><li>Administrators must connect over RDP to VMs in every network from the Azure portal, with no public IP address on the VMs.</li><li>Subnet-SQL VMs and Lyon users must reach sttaildocs through a private IP address. Public access to sttaildocs must be disabled.</li><li>The VPN connection must survive the loss of an availability zone.</li><li>FW1 must inspect outbound HTTPS traffic and filter by full URL.</li><li>The Subnet-Web website must be published to the internet behind a web application firewall (WAF); the web VMs must only receive traffic from that service.</li></ol><p>Solutions must minimize administrative effort.</p>"
  }
 ],
 "questions": [
  {
   "id": "C005-1",
   "dom": 4,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current connectivity, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "A Subnet-Web VM can reach a server at Lyon headquarters.",
     "a": 0
    },
    {
     "l": "A Subnet-SQL VM can reach a server at Lyon headquarters.",
     "a": 1
    },
    {
     "l": "A packet from a Subnet-Web VM to a Subnet-SQL VM is sent to FW1.",
     "a": 0
    },
    {
     "l": "A Subnet-SQL VM can reply to a Subnet-Web VM.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Subnet-Web → Lyon: Yes.</b> VNet-App uses the remote gateway and the hub allows transit. RT-App propagates gateway routes: Subnet-Web gets 192.168.0.0/16 through BGP. That prefix is longer than 0.0.0.0/0, so traffic goes straight to VPNGW1, not to FW1.</li><li><b>Subnet-SQL → Lyon: No.</b> “Use remote gateway” is No on VNet-Data → VNet-Hub: VNet-Data doesn't learn the VPN routes.</li><li><b>Web → SQL sent to FW1: Yes.</b> VNet-App isn't peered with VNet-Data: there's no route to 10.30.0.0/16, only 0.0.0.0/0 → 10.10.1.4 matches.</li><li><b>SQL replies to Web: No.</b> Subnet-SQL has no route table and VNet-Data doesn't know 10.20.0.0/16: the reply follows the 0.0.0.0/0 system route to the internet and never arrives. A 10.20.0.0/16 → 10.10.1.4 UDR is missing on Subnet-SQL.</li></ul>",
   "portal": {
    "path": [
     "Network interfaces",
     "vm-web1-nic"
    ],
    "title": "vm-web1-nic | Effective routes",
    "menu": [
     "IP configurations",
     "*Effective routes"
    ],
    "rows": [
     [
      "*192.168.0.0/16",
      "Virtual network gateway (BGP)"
     ],
     [
      "0.0.0.0/0",
      "Virtual appliance 10.10.1.4"
     ]
    ]
   },
   "keep": "Longest prefix wins: a /16 learned through BGP bypasses a 0.0.0.0/0 UDR. Return traffic needs its own route."
  },
  {
   "id": "C005-2",
   "dom": 4,
   "type": "multi",
   "stem": "<p>You need to meet requirement 2.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "opts": [
    "Associate a UDR 10.20.0.0/16 → Virtual appliance 10.10.1.4 with Subnet-SQL",
    "Create an FW1 network rule allowing 10.20.0.0/16 ↔ 10.30.1.0/24",
    "Create a peering between VNet-App and VNet-Data, with forwarded traffic allowed",
    "Enable “Use remote gateway” on the VNet-Data → VNet-Hub peering"
   ],
   "ans": [
    0,
    1
   ],
   "pick": 2,
   "expl": "<ul><li><b>UDR on Subnet-SQL: yes.</b> VNet-App → VNet-Data already goes through FW1 (RT-App's 0.0.0.0/0). Return traffic needs the same path, otherwise the flow is asymmetric and the stateful firewall drops it.</li><li><b>Network rule: yes.</b> Azure Firewall denies everything by default: without a rule, flows reach FW1 and are dropped.</li><li>A direct App ↔ Data peering would create a system route more specific than 0.0.0.0/0: traffic would bypass FW1.</li><li>“Use remote gateway” is about VPN access, not spoke-to-spoke traffic.</li></ul>",
   "portal": {
    "path": [
     "Route tables",
     "RT-Data"
    ],
    "title": "RT-Data | Routes",
    "menu": [
     "Overview",
     "*Routes",
     "Subnets"
    ],
    "rows": [
     [
      "*ToApp",
      "10.20.0.0/16 → Virtual appliance 10.10.1.4"
     ]
    ],
    "btn": "+ Add"
   },
   "keep": "Spoke ↔ spoke through a firewall: routes in both spokes + a firewall rule."
  },
  {
   "id": "C005-3",
   "dom": 4,
   "type": "single",
   "stem": "<p>You need to meet requirement 1. What should you do?</p>",
   "opts": [
    "Re-address VNet-DR outside the ranges of networks peered with the hub",
    "Create the VNet-DR → VNet-Hub peering with “Use remote gateway”",
    "Create the peering with virtual network encryption to isolate VNet-DR",
    "Create a VNet-to-VNet VPN connection between VNet-DR and VNet-Hub"
   ],
   "ans": 0,
   "expl": "<p>VNet-DR (10.20.0.0/16) doesn't overlap VNet-Hub, but it overlaps <b>VNet-App</b>, already peered with the hub. Azure won't peer a network with two overlapping networks: the hub wouldn't know where to send 10.20.0.0/16. Re-address VNet-DR (for example 10.40.0.0/16). A VNet-to-VNet connection would have the same routing problem, plus a gateway to pay for.</p>",
   "portal": {
    "path": [
     "Virtual networks",
     "VNet-DR"
    ],
    "title": "VNet-DR | Address space",
    "menu": [
     "Overview",
     "*Address space",
     "Peerings"
    ],
    "rows": [
     [
      "*10.20.0.0/16",
      "Overlaps VNet-App (peered with VNet-Hub)"
     ]
    ]
   },
   "keep": "No overlap with the peered network or with those already peered with it."
  },
  {
   "id": "C005-4",
   "dom": 4,
   "type": "hot",
   "stem": "<p>You need to meet requirements 3, 5, and 6.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "Requirement 3:",
     "o": [
      "Azure Bastion in a /26 AzureBastionSubnet of VNet-Hub",
      "Azure Bastion in each spoke virtual network",
      "An FW1 DNAT rule to port 3389 on each VM",
      "A point-to-site VPN reserved for administrators"
     ],
     "a": 0
    },
    {
     "l": "Requirement 5:",
     "o": [
      "VpnGw2 in active-active mode",
      "An AZ SKU, for example VpnGw2AZ",
      "VpnGw3, more powerful",
      "A second connection to Lyon"
     ],
     "a": 1
    },
    {
     "l": "Requirement 6:",
     "o": [
      "FW1 with DNS proxy",
      "FW1 on the Basic SKU",
      "FW1 on the Premium SKU",
      "A WAF in front of FW1"
     ],
     "a": 2
    }
   ],
   "expl": "<ul><li><b>Requirement 3:</b> one Bastion in the hub is enough: it reaches VMs in peered networks (Standard SKU or higher), from the portal, with no public IP on the VMs. One Bastion per spoke multiplies costs; a DNAT rule exposes 3389 to the internet.</li><li><b>Requirement 5:</b> only <b>AZ</b> SKUs spread the gateway's instances across zones. Active-active protects against losing an instance, not a zone.</li><li><b>Requirement 6:</b> TLS inspection and full URL filtering are <b>Premium</b> SKU features (with IDPS).</li></ul>",
   "portal": {
    "path": [
     "Firewalls",
     "FW1"
    ],
    "title": "FW1 | Overview",
    "menu": [
     "*Overview",
     "Firewall policy"
    ],
    "rows": [
     [
      "*Tier",
      "Premium (TLS inspection, IDPS, URL categories)"
     ]
    ]
   },
   "keep": "Hub Bastion = spoke VMs. Zone → AZ SKU. TLS and URL → Premium firewall."
  },
  {
   "id": "C005-5",
   "dom": 4,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirement 4. What should you configure for each goal?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Goal",
    "Configuration"
   ],
   "srcs": [
    "A blob private endpoint in Subnet-SQL",
    "Link the privatelink.blob.core.windows.net zone to VNet-Data and VNet-Hub",
    "A DNS Private Resolver (inbound endpoint in VNet-Hub) and a conditional forwarder in Lyon",
    "Enable “Use remote gateway” on VNet-Data → VNet-Hub",
    "Disable sttaildocs public network access",
    "A Microsoft.Storage service endpoint on Subnet-SQL",
    "Add 192.168.0.0/16 to sttaildocs IP rules"
   ],
   "tgts": [
    {
     "l": "Give sttaildocs a private address",
     "a": 0
    },
    {
     "l": "Subnet-SQL VMs resolve sttaildocs to the private address",
     "a": 1
    },
    {
     "l": "Lyon computers resolve sttaildocs to the private address",
     "a": 2
    },
    {
     "l": "Lyon traffic reaches the private address over the VPN",
     "a": 3
    },
    {
     "l": "No more access from the internet",
     "a": 4
    }
   ],
   "expl": "<ul><li><b>Private address:</b> a private endpoint (blob sub-resource) in Subnet-SQL.</li><li><b>Resolution in Azure:</b> the privatelink.blob zone must be linked to VNet-Data (SQL VMs) and VNet-Hub, where the resolver's inbound endpoint lives and resolves with its network's DNS.</li><li><b>Resolution in Lyon:</b> on-premises DNS can't see a private zone; it forwards blob.core.windows.net to the DNS Private Resolver's inbound endpoint.</li><li><b>Network path:</b> VNet-Data doesn't learn the VPN routes while “Use remote gateway” is No. (The hub already allows transit.)</li><li><b>Internet:</b> disable public network access. A service endpoint and IP rules don't give a private address, and IP rules reject private ranges.</li></ul>",
   "portal": {
    "path": [
     "Storage accounts",
     "sttaildocs"
    ],
    "title": "sttaildocs | Networking",
    "menu": [
     "Overview",
     "*Networking"
    ],
    "rows": [
     [
      "*Public network access",
      "Disabled"
     ],
     [
      "Private endpoint connections",
      "pe-sttaildocs-blob · Approved"
     ]
    ]
   },
   "keep": "Private endpoint = address + DNS (linked zone, resolver for on-premises) + network path."
  },
  {
   "id": "C005-6",
   "dom": 4,
   "type": "order",
   "stem": "<p>You need to meet requirement 7.</p><p>Which <b>four</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Create a dedicated Subnet-AppGw subnet in VNet-App",
    "Deploy Application Gateway v2 (WAF) with an HTTPS listener and the web VMs in the backend pool",
    "Check that backend health shows the web VMs as healthy",
    "Restrict Subnet-Web's NSG to traffic from Subnet-AppGw",
    "Deploy the gateway in VNet-Hub's GatewaySubnet",
    "Create an FW1 DNAT rule to the web VMs"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>Application Gateway requires a <b>dedicated subnet</b> (not GatewaySubnet, which is reserved for VPN and ExpressRoute gateways). Create it, deploy the gateway with WAF, listener, and pool, then check <b>backend health</b> before closing direct access: restricting the web VMs' NSG before checking would cut the site without knowing whether the gateway works. A DNAT rule would publish the VMs without a WAF.</p>",
   "portal": {
    "path": [
     "Application gateways",
     "agw-web"
    ],
    "title": "agw-web | Backend health",
    "menu": [
     "Overview",
     "*Backend health",
     "Web application firewall"
    ],
    "rows": [
     [
      "*pool-web",
      "vm-web1, vm-web2: Healthy"
     ]
    ]
   },
   "keep": "Application Gateway: dedicated subnet, then check backend health before locking down."
  },
  {
   "id": "C005-7",
   "dom": 4,
   "type": "cmd",
   "stem": "<p>You're creating the RT-Data route, associated with Subnet-SQL, for requirement 2. How should you complete the command?</p>",
   "rows": [
    {
     "l": "--address-prefix",
     "o": [
      "10.30.0.0/16",
      "10.20.0.0/16",
      "0.0.0.0/0",
      "10.10.1.0/26"
     ],
     "a": 1
    },
    {
     "l": "--next-hop-type",
     "o": [
      "VirtualNetworkGateway",
      "VnetLocal",
      "VirtualAppliance",
      "Internet"
     ],
     "a": 2
    },
    {
     "l": "--next-hop-ip-address",
     "o": [
      "10.10.1.4",
      "10.10.255.4",
      "10.20.1.4",
      "10.30.1.4"
     ],
     "a": 0
    }
   ],
   "tpl": "az network route-table route create --resource-group RG-Net --route-table-name RT-Data --name ToApp --address-prefix {0} --next-hop-type {1} --next-hop-ip-address {2}",
   "expl": "<p>The return path to VNet-App targets <b>10.20.0.0/16</b>, with the <b>VirtualAppliance</b> next hop and FW1's private address <b>10.10.1.4</b>. A 0.0.0.0/0 would also send VNet-Data's internet traffic to the firewall, which the requirement doesn't ask for. VirtualNetworkGateway would send traffic to the VPN.</p>",
   "portal": {
    "path": [
     "Route tables",
     "RT-Data"
    ],
    "title": "RT-Data | Routes",
    "menu": [
     "*Routes",
     "Subnets"
    ],
    "rows": [
     [
      "*ToApp",
      "10.20.0.0/16 → 10.10.1.4"
     ]
    ]
   },
   "keep": "UDR to a firewall: VirtualAppliance + its private address."
  }
 ]
},
{
 "id": "C006",
 "title": "Northwind Health",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Northwind Health publishes a medical appointment portal. The app runs in France Central, with a read copy in West Europe. It must stay available if a datacenter fails.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p>VNet-FR (France Central, 10.1.0.0/16: Subnet-Front 10.1.1.0/24, Subnet-Back 10.1.2.0/24) is peered with VNet-WE (West Europe, 10.2.0.0/16) through a connected global peering.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Network / subnet</th><th>Zone</th></tr><tr><td>VM-F1</td><td>VNet-FR / Subnet-Front</td><td>1</td></tr><tr><td>VM-F2</td><td>VNet-FR / Subnet-Front</td><td>2</td></tr><tr><td>VM-B1</td><td>VNet-FR / Subnet-Back</td><td>1</td></tr><tr><td>VM-B2</td><td>VNet-FR / Subnet-Back</td><td>3</td></tr><tr><td>VM-W1</td><td>VNet-WE</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Load balancer</th><th>Type</th><th>Frontend</th><th>Pool</th><th>Rule and probe</th></tr><tr><td>LB-Pub</td><td>Public Standard</td><td>PIP-Pub, zonal (zone 1)</td><td>VM-F1, VM-F2</td><td>TCP 443, HTTPS probe /health</td></tr><tr><td>LB-Int</td><td>Internal Standard</td><td>10.1.2.100, zone-redundant</td><td>VM-B1, VM-B2</td><td>TCP 8080, TCP probe 8080</td></tr></table></div><p><b>NSG-Back</b>, associated with Subnet-Back, has two custom inbound rules: priority 100, allow TCP 8080 from 10.1.1.0/24; priority 4000, deny all traffic from any source.</p><p><b>DNS</b>: the northwind.internal private zone is linked to VNet-FR (autoregistration enabled) and VNet-WE (autoregistration disabled). The northwind.com public zone was just created in Azure DNS; the domain is still served by the registrar's name servers.</p>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>The portal must survive the loss of an availability zone in France Central.</li><li>VM-W1 must be registered automatically in northwind.internal.</li><li>northwind.com and www.northwind.com must point to LB-Pub, with no manual update if its address changes.</li><li>VM-B1 and VM-B2 must call a vendor's API on the internet with a fixed public IP address that the vendor will allowlist.</li><li>Latency and availability between VM-W1 and 10.1.2.100 must be monitored continuously, with alerts.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C006-1",
   "dom": 4,
   "type": "yngrid",
   "stem": "<p>You're assessing the current environment.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "If zone 1 fails, LB-Pub keeps answering clients.",
     "a": 1
    },
    {
     "l": "LB-Int's probe marks VM-B1 and VM-B2 as healthy.",
     "a": 1
    },
    {
     "l": "VM-W1 can resolve vm-b1.northwind.internal.",
     "a": 0
    },
    {
     "l": "VM-W1 can reach LB-Int's frontend 10.1.2.100 over the global peering.",
     "a": 0
    }
   ],
   "expl": "<ul><li><b>LB-Pub: No.</b> Its frontend is <b>zonal (zone 1)</b>: it goes down with the zone, even though VM-F2 runs in zone 2.</li><li><b>LB-Int probe: No.</b> Probes come from 168.63.129.16 (AzureLoadBalancer tag). The default AllowAzureLoadBalancerInBound rule is at priority 65001: the 4000 “deny all” rule is evaluated first and blocks probes. Both VMs are marked down.</li><li><b>Resolution from VM-W1: Yes.</b> VNet-WE is linked to the zone (resolution without registration), and VM-B1 is registered through VNet-FR's link.</li><li><b>Internal load balancer and global peering: Yes.</b> A <b>Standard</b> internal load balancer is reachable from a peered network in another region (the Basic SKU couldn't do that).</li></ul>",
   "portal": {
    "path": [
     "Load balancers",
     "LB-Int"
    ],
    "title": "LB-Int | Backend pools",
    "menu": [
     "Frontend IP configuration",
     "*Backend pools",
     "Health probes"
    ],
    "rows": [
     [
      "*VM-B1, VM-B2",
      "Probe status: 0%"
     ]
    ]
   },
   "keep": "A “deny all” rule before 65001 blocks probes: allow AzureLoadBalancer ahead of it."
  },
  {
   "id": "C006-2",
   "dom": 4,
   "type": "cmd",
   "stem": "<p>You need to restore LB-Int's probes by adding a rule to NSG-Back. How should you complete the command?</p>",
   "rows": [
    {
     "l": "--priority",
     "o": [
      "100",
      "3900",
      "4010",
      "65001"
     ],
     "a": 1
    },
    {
     "l": "--source-address-prefixes",
     "o": [
      "Internet",
      "VirtualNetwork",
      "AzureLoadBalancer",
      "10.1.1.0/24"
     ],
     "a": 2
    },
    {
     "l": "--destination-port-ranges",
     "o": [
      "443",
      "8080",
      "80",
      "65200-65535"
     ],
     "a": 1
    }
   ],
   "tpl": "az network nsg rule create --resource-group RG-App --nsg-name NSG-Back --name AllowProbe --direction Inbound --access Allow --protocol Tcp --priority {0} --source-address-prefixes {1} --destination-port-ranges {2}",
   "expl": "<ul><li><b>Priority 3900:</b> the rule must come before the priority 4000 deny. Priority 100 is already taken by another rule (two rules can't share a priority in the same direction), 4010 would be too late, and 65001 is reserved for default rules.</li><li><b>Source AzureLoadBalancer:</b> the tag that covers the probes' address, 168.63.129.16.</li><li><b>Port 8080:</b> LB-Int's probe is TCP 8080.</li></ul>",
   "portal": {
    "path": [
     "Network security groups",
     "NSG-Back"
    ],
    "title": "NSG-Back | Inbound security rules",
    "menu": [
     "Overview",
     "*Inbound security rules"
    ],
    "rows": [
     [
      "100 · 8080 · 10.1.1.0/24",
      "Allow"
     ],
     [
      "*3900 · 8080 · AzureLoadBalancer",
      "Allow"
     ],
     [
      "4000 · Any",
      "Deny"
     ]
    ]
   },
   "keep": "Probes = AzureLoadBalancer, on the probe's port, before any deny."
  },
  {
   "id": "C006-3",
   "dom": 4,
   "type": "hot",
   "stem": "<p>You need to meet requirements 1 and 2.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "Requirement 1, for LB-Pub:",
     "o": [
      "Change PIP-Pub's zone to zone-redundant",
      "Create a zone-redundant public IP and make it the frontend",
      "Move VM-F1 to zone 3",
      "Add a second rule on port 443"
     ],
     "a": 1
    },
    {
     "l": "Requirement 2:",
     "o": [
      "Enable autoregistration on VNet-WE's link",
      "Create a northwind.internal zone linked to VNet-WE",
      "It's impossible: a zone only registers VMs from one network",
      "Add an A record in northwind.com"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Requirement 1:</b> a public IP's zone is chosen at creation and never changes. You need a new zone-redundant Standard IP as the frontend (then update DNS, which requirement 3 will make automatic). Moving VM-F1 doesn't protect the frontend.</li><li><b>Requirement 2:</b> a zone can have autoregistration from several networks; the limit is one registration zone <b>per network</b>. VNet-WE has none: enable it on its link. Two zones with the same name can't be linked to the same network.</li></ul>",
   "portal": {
    "path": [
     "Private DNS zones",
     "northwind.internal"
    ],
    "title": "northwind.internal | Virtual network links",
    "menu": [
     "Recordsets",
     "*Virtual network links"
    ],
    "rows": [
     [
      "link-fr · VNet-FR",
      "Registration: enabled"
     ],
     [
      "*link-we · VNet-WE",
      "Registration: enabled"
     ]
    ]
   },
   "keep": "Public IP: zone fixed at creation. Autoregistration: one zone per network, many networks per zone."
  },
  {
   "id": "C006-4",
   "dom": 4,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirement 3. What should you configure for each goal?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Goal",
    "Configuration"
   ],
   "srcs": [
    "Update the name servers at the registrar",
    "An alias record to the public IP resource",
    "A CNAME record to northwind.com",
    "An A record to the current address",
    "An NS record in the northwind.com zone",
    "A virtual network link to VNet-FR"
   ],
   "tgts": [
    {
     "l": "Internet queries for northwind.com reach Azure DNS",
     "a": 0
    },
    {
     "l": "northwind.com (apex) follows LB-Pub's address",
     "a": 1
    },
    {
     "l": "www.northwind.com follows the same target as the apex",
     "a": 2
    }
   ],
   "expl": "<ul><li><b>Delegation:</b> while the registrar advertises its own name servers, the Azure DNS zone is never queried. Put the Azure zone's four NS servers there.</li><li><b>Apex:</b> a CNAME isn't allowed at the apex. An <b>alias record</b> points to the public IP resource and follows its address automatically; a fixed A record would need manual updates.</li><li><b>www:</b> a CNAME to northwind.com follows the apex (an alias to the same IP would also work, but the CNAME keeps a single target to maintain).</li></ul>",
   "portal": {
    "path": [
     "DNS zones",
     "northwind.com"
    ],
    "title": "northwind.com | Recordsets",
    "menu": [
     "Overview",
     "*Recordsets"
    ],
    "rows": [
     [
      "*@ · A · alias",
      "pip-pub-zr"
     ],
     [
      "www · CNAME",
      "northwind.com"
     ]
    ]
   },
   "keep": "Apex → alias. An Azure DNS zone only works once delegated at the registrar."
  },
  {
   "id": "C006-5",
   "dom": 4,
   "type": "single",
   "stem": "<p>You need to meet requirement 4. What should you do?</p>",
   "opts": [
    "Associate a fixed-IP NAT gateway with Subnet-Back",
    "Add an outbound rule with a public address to LB-Int",
    "Assign a Basic SKU public IP to VM-B1 and VM-B2",
    "Enable IP forwarding on VM-B1's and VM-B2's interfaces"
   ],
   "ans": 0,
   "expl": "<p>A <b>NAT gateway</b> on Subnet-Back gives both VMs egress through a fixed public address, with no inbound traffic. An <b>internal</b> load balancer has no outbound rules (they only exist on a public load balancer), Basic IPs are retired and two different addresses would complicate the allowlist, and IP forwarding is for routing, not internet egress.</p>",
   "portal": {
    "path": [
     "NAT gateways",
     "nat-back"
    ],
    "title": "nat-back | Subnets",
    "menu": [
     "Outbound IP",
     "*Subnets"
    ],
    "rows": [
     [
      "*VNet-FR / Subnet-Back",
      "Associated"
     ]
    ]
   },
   "keep": "Fixed-IP egress for a subnet: NAT gateway. No outbound rules on an internal load balancer."
  },
  {
   "id": "C006-6",
   "dom": 4,
   "type": "hotspot",
   "stem": "<p>You need to meet requirement 5. In Network Watcher, which feature should you use? To answer, select the appropriate menu item.</p>",
   "ans": "Connection monitor",
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
       "Next hop",
       "Connection troubleshoot",
       "Packet capture",
       "VPN troubleshoot"
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
   "expl": "<p><b>Connection monitor</b> continuously tests latency, packet loss, and availability between a source (VM-W1, with the agent) and a destination (10.1.2.100, port 8080), and raises Azure Monitor alerts. Connection troubleshoot runs a one-off test, with no tracking over time.</p>",
   "portal": {
    "path": [
     "Network Watcher",
     "Connection monitor"
    ],
    "title": "Connection monitor | Create",
    "menu": [
     "*Connection monitor"
    ],
    "rows": [
     [
      "*Source",
      "VM-W1"
     ],
     [
      "Destination",
      "10.1.2.100:8080"
     ]
    ],
    "btn": "Create"
   },
   "keep": "Continuous tracking with alerts: connection monitor. One-off test: connection troubleshoot."
  }
 ]
}
);
