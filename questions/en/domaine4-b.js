/* Domain 4: virtual networking (batch B : D4-010 to D4-064) */
AZ.questions.push(
{
 "id": "D4-011",
 "dom": 4,
 "type": "hot",
 "stem": "<p>The subnet Subnet5 uses the range <b>192.168.10.0/24</b>.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "First address assignable to a VM:",
   "o": [
    "192.168.10.1",
    "192.168.10.4",
    "192.168.10.5"
   ],
   "a": 1
  },
  {
   "l": "Last address assignable to a VM:",
   "o": [
    "192.168.10.254",
    "192.168.10.255",
    "192.168.10.253"
   ],
   "a": 0
  },
  {
   "l": "Number of usable addresses:",
   "o": [
    "251",
    "254",
    "256"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>.0 to .3 are reserved: the first usable address is <b>.4</b>.</li><li>.255 is reserved: the last usable is <b>.254</b>.</li><li>256 − 5 = <b>251</b> addresses.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1",
   "Subnets"
  ],
  "title": "Subnet5",
  "rows": [
   [
    "Reserved",
    "192.168.10.0, .1, .2, .3, .255"
   ],
   [
    "*First / last usable",
    ".4 / .254"
   ],
   [
    "Available",
    "251"
   ]
  ]
 },
 "keep": "Reserved: .0 (network), .1 (gateway), .2-.3 (DNS), last (broadcast)."
},
{
 "id": "D4-013",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to indicate the exact name and recommended minimum size of dedicated subnets.</p><p>To answer, drag the appropriate value to each service. Each value may be used once, more than once, or not at all.</p>",
 "srcLabel": "Subnets",
 "tgtHead": [
  "Service",
  "Subnet"
 ],
 "srcs": [
  "GatewaySubnet, /27",
  "AzureBastionSubnet, /26",
  "AzureFirewallSubnet, /26",
  "AppGatewaySubnet, /24"
 ],
 "tgts": [
  {
   "l": "VPN or ExpressRoute gateway",
   "a": 0
  },
  {
   "l": "Azure Bastion",
   "a": 1
  },
  {
   "l": "Azure Firewall",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>GatewaySubnet</b>: required name for virtual network gateways; /27 or larger recommended.</li><li><b>AzureBastionSubnet</b>: required name; /26 minimum.</li><li><b>AzureFirewallSubnet</b>: required name; /26 minimum.</li></ul><p>Application Gateway needs a dedicated subnet, but its name is free (and /24 is recommended for v2, not required).</p>",
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
    "*GatewaySubnet",
    "/27 recommended"
   ],
   [
    "AzureBastionSubnet",
    "/26 minimum"
   ],
   [
    "AzureFirewallSubnet",
    "/26 minimum"
   ]
  ]
 },
 "keep": "Required names: GatewaySubnet, AzureBastionSubnet, AzureFirewallSubnet."
},
{
 "id": "D4-016",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>VNet-Hub is peered with VNet-A and VNet-B. VNet-A and VNet-B aren't peered with each other. No route table exists.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A VM in VNet-A can reach a VM in VNet-Hub.",
   "a": 0
  },
  {
   "l": "A VM in VNet-A can reach a VM in VNet-B.",
   "a": 1
  },
  {
   "l": "By adding a direct peering between VNet-A and VNet-B, their VMs can communicate.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>A ↔ Hub: Yes</b>, they're peered.</li><li><b>A ↔ B: No.</b> Peering is <b>not transitive</b>: going through the hub doesn't work without a routing appliance (NVA or Azure Firewall) and route tables.</li><li><b>Direct peering: Yes.</b> That's the other solution.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-A"
  ],
  "title": "VNet-A | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "vnetA-to-hub",
    "Connected"
   ],
   [
    "*VNet-B",
    "Not reachable (no transitivity)"
   ]
  ]
 },
 "keep": "Spoke ↔ spoke: direct peering, or an NVA/firewall in the hub + routes."
},
{
 "id": "D4-022",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to configure a site-to-site VPN connection between VNet1 and the Lyon on-premises site.</p><p>To answer, drag the appropriate resource to each piece of information. Each resource may be used once, more than once, or not at all.</p>",
 "srcLabel": "Resources",
 "tgtHead": [
  "Information",
  "Resource"
 ],
 "srcs": [
  "Virtual network gateway",
  "Local network gateway",
  "Connection",
  "GatewaySubnet"
 ],
 "tgts": [
  {
   "l": "Public IP address of the Lyon firewall and the site's address ranges",
   "a": 1
  },
  {
   "l": "IPsec shared key (PSK)",
   "a": 2
  },
  {
   "l": "Route-based VPN type and VpnGw2 SKU",
   "a": 0
  },
  {
   "l": "Range 10.0.255.0/27 in VNet1",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Local network gateway</b>: represents the on-premises site (public IP address of its VPN device or FQDN, and local address ranges or BGP settings).</li><li><b>Connection</b>: links the Azure gateway to the local gateway, with the <b>shared key</b> and the IKE protocol.</li><li><b>Virtual network gateway</b>: the Azure-side gateway, with its type and SKU.</li><li><b>GatewaySubnet</b>: the subnet where it's deployed.</li></ul>",
 "portal": {
  "path": [
   "Connections",
   "Lyon-S2S"
  ],
  "title": "Create connection",
  "rows": [
   [
    "Virtual network gateway",
    "VNet1-GW"
   ],
   [
    "*Local network gateway",
    "LNG-Lyon (public IP, ranges)"
   ],
   [
    "*Shared key (PSK)",
    "••••••••"
   ]
  ],
  "btn": "Create"
 },
 "keep": "S2S VPN: virtual gateway (Azure), local gateway (site), connection (shared key)."
},
{
 "id": "D4-023",
 "dom": 4,
 "type": "order",
 "stem": "<p>You need to connect VNet2 to the Lille on-premises site with a site-to-site VPN. VNet2 doesn't have a gateway subnet yet.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>The <b>GatewaySubnet</b> must exist before the <b>gateway</b> (which often takes 30 to 45 minutes to deploy). You create the <b>local network gateway</b> (it can be created in parallel), then the <b>connection</b>, and configure the on-premises device with the same shared key.</p><p>You don't “peer” an on-premises site, and Bastion plays no role here.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "Create"
  ],
  "title": "Create virtual network gateway",
  "rows": [
   [
    "Prerequisite",
    "GatewaySubnet"
   ],
   [
    "*Gateway type",
    "VPN"
   ],
   [
    "VPN type",
    "Route-based"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "S2S: GatewaySubnet → gateway → local gateway → connection.",
 "acts": [
  "Create the GatewaySubnet subnet in VNet2",
  "Create the virtual network gateway (VPN type)",
  "Create the local network gateway for Lille",
  "Create the site-to-site connection with the shared key, then configure the Lille VPN device",
  "Create a peering between VNet2 and the on-premises site",
  "Create AzureBastionSubnet"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D4-026",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You configure a point-to-site VPN on VNet1's VPN gateway (10.0.0.0/16).</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Client address pool:",
   "o": [
    "172.16.200.0/24",
    "10.0.5.0/24",
    "10.0.0.0/16"
   ],
   "a": 0
  },
  {
   "l": "Tunnel type for macOS, Windows, and Linux clients, with Entra authentication:",
   "o": [
    "IKEv2 only",
    "OpenVPN",
    "SSTP"
   ],
   "a": 1
  },
  {
   "l": "For certificate authentication, you upload to Azure:",
   "o": [
    "the root certificate's public key",
    "the client certificate's private key",
    "the web server certificate"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>The <b>client address pool</b> must not overlap the virtual network or the on-premises site: 172.16.200.0/24 fits; the other two are within 10.0.0.0/16.</li><li><b>OpenVPN</b> works on all systems and is required for Entra authentication. SSTP is Windows-only.</li><li>For certificate authentication, you upload the <b>root certificate's public key</b>; each client installs a client certificate signed by that root.</li></ul>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet1-GW"
  ],
  "title": "Point-to-site configuration",
  "rows": [
   [
    "*Address pool",
    "172.16.200.0/24 (outside the VNet)"
   ],
   [
    "*Tunnel type",
    "OpenVPN"
   ],
   [
    "Root certificates",
    "Public key"
   ]
  ],
  "btn": "Save"
 },
 "keep": "P2S pool with no overlap; OpenVPN is cross-platform; upload the root public key."
},
{
 "id": "D4-034",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You create routes in a route table. You need to choose the appropriate next hop type for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Next hop types",
 "tgtHead": [
  "Need",
  "Next hop"
 ],
 "srcs": [
  "Virtual appliance",
  "Virtual network gateway",
  "Internet",
  "None",
  "Virtual network"
 ],
 "tgts": [
  {
   "l": "Have traffic inspected by a third-party firewall on a VM",
   "a": 0
  },
  {
   "l": "Force internet traffic to the on-premises site through the VPN (forced tunneling)",
   "a": 1
  },
  {
   "l": "Block all traffic to 10.50.0.0/16",
   "a": 3
  },
  {
   "l": "Send Microsoft services traffic directly to the internet, despite a 0.0.0.0/0 route to the firewall",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Virtual appliance</b>: to the IP address of an NVA or Azure Firewall.</li><li><b>Virtual network gateway</b>: to the VPN gateway (forced tunneling to on-premises).</li><li><b>None</b>: traffic is dropped.</li><li><b>Internet</b>: direct egress; you can use it with a service tag (for example AzureCloud) as a more specific prefix than 0.0.0.0/0.</li></ul>",
 "portal": {
  "path": [
   "Route tables",
   "RT1"
  ],
  "title": "Add route",
  "rows": [
   [
    "*Virtual appliance",
    "NVA / firewall"
   ],
   [
    "Virtual network gateway",
    "Forced tunneling"
   ],
   [
    "None",
    "Drop"
   ],
   [
    "Internet",
    "Direct egress"
   ]
  ]
 },
 "keep": "Appliance, Gateway, Internet, None, Virtual network: the 5 next hops."
},
{
 "id": "D4-040",
 "dom": 4,
 "type": "hot",
 "stem": "<p>The NSG NSG2 is associated with VM2's network interface and contains the following inbound rules (in addition to the default rules):</p><pre>Priority  Name           Port  Source      Action\n100       Block-RDP      3389  Any         Deny\n200       Allow-RDP      3389  10.0.0.0/8  Allow\n300       Allow-Web      443   Internet    Allow</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "An administrator at 10.5.0.10 can connect to VM2 over RDP:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "A client on the internet can reach VM2 over HTTPS:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  },
  {
   "l": "To allow RDP from 10.0.0.0/8, you must:",
   "o": [
    "delete the Allow-Web rule",
    "give Allow-RDP priority 4096",
    "give Allow-RDP a priority lower than 100 (for example 90)"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li>Rules are processed in <b>ascending priority</b> and the first match applies. Rule 100 denies RDP for everyone before rule 200 is evaluated: <b>No</b>.</li><li>HTTPS from the internet: rule 300 allows it: <b>Yes</b>.</li><li>The allow rule must have a <b>smaller number</b> (so a higher priority) than the deny rule, for example 90.</li></ul>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG2"
  ],
  "title": "NSG2 | Inbound security rules",
  "menu": [
   "*Inbound security rules"
  ],
  "rows": [
   [
    "*90 · Allow-RDP",
    "3389 · 10.0.0.0/8 · Allow"
   ],
   [
    "100 · Block-RDP",
    "3389 · Any · Deny"
   ],
   [
    "300 · Allow-Web",
    "443 · Internet · Allow"
   ]
  ]
 },
 "keep": "Exception to a deny = allow rule with a smaller number."
},
{
 "id": "D4-042",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to indicate the priority of each default security rule of an NSG.</p><p>To answer, drag the appropriate priority to each rule. Each priority may be used once, more than once, or not at all.</p>",
 "srcLabel": "Priorities",
 "tgtHead": [
  "Default rule (inbound)",
  "Priority"
 ],
 "srcs": [
  "65000",
  "65001",
  "65500",
  "4096"
 ],
 "tgts": [
  {
   "l": "AllowVnetInBound",
   "a": 0
  },
  {
   "l": "AllowAzureLoadBalancerInBound",
   "a": 1
  },
  {
   "l": "DenyAllInBound",
   "a": 2
  }
 ],
 "expl": "<p>Default inbound rules: <b>AllowVnetInBound</b> (65000), <b>AllowAzureLoadBalancerInBound</b> (65001), <b>DenyAllInBound</b> (65500). Outbound rules: AllowVnetOutBound (65000), AllowInternetOutBound (65001), DenyAllOutBound (65500).</p><p>Custom rules have a priority of <b>100 to 4096</b>: they're always evaluated before the default rules, which can't be deleted.</p>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG1"
  ],
  "title": "Default rules (inbound)",
  "rows": [
   [
    "*65000",
    "AllowVnetInBound"
   ],
   [
    "*65001",
    "AllowAzureLoadBalancerInBound"
   ],
   [
    "*65500",
    "DenyAllInBound"
   ]
  ]
 },
 "keep": "Defaults: 65000 VNet, 65001 LB (or Internet outbound), 65500 deny. Custom: 100-4096."
},
{
 "id": "D4-043",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>An NSG contains only the default rules. It's associated with Subnet1 of VNet1.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A VM in Subnet2 of VNet1 can reach a VM in Subnet1 on any port.",
   "a": 0
  },
  {
   "l": "A VM in Subnet1 can browse the internet.",
   "a": 0
  },
  {
   "l": "A client on the internet can reach a VM in Subnet1 that has a public IP address.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Intra-network: Yes.</b> AllowVnetInBound allows traffic from the VirtualNetwork tag (the virtual network, peered networks, and on-premises connected through a gateway).</li><li><b>Outbound internet: Yes.</b> AllowInternetOutBound allows it.</li><li><b>Inbound internet: No.</b> DenyAllInBound blocks everything not allowed earlier.</li></ul>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG1"
  ],
  "title": "Default rules",
  "rows": [
   [
    "Inbound",
    "VNet allowed, Internet denied"
   ],
   [
    "*Outbound",
    "VNet and Internet allowed"
   ]
  ]
 },
 "keep": "By default: whole VNet open, outbound internet open, inbound internet closed."
},
{
 "id": "D4-050",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You choose the Azure Bastion SKU.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Connect with the native Windows RDP client (mstsc) or the CLI:",
   "o": [
    "Basic",
    "Standard",
    "Developer"
   ],
   "a": 1
  },
  {
   "l": "Connect to VMs in peered virtual networks:",
   "o": [
    "Basic and above",
    "Standard only",
    "No SKU"
   ],
   "a": 0
  },
  {
   "l": "Free SKU, with no dedicated subnet, for testing one VM at a time:",
   "o": [
    "Developer",
    "Premium",
    "Basic"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>The <b>native client</b> (mstsc, az network bastion rdp/ssh) requires the <b>Standard</b> SKU (or Premium). Standard also adds shareable links, IP-based connection, and instance scaling.</li><li>Connecting to VMs in <b>peered networks</b> works from the <b>Basic</b> SKU on.</li><li>The <b>Developer</b> SKU is free, shared, with no AzureBastionSubnet, limited to one connection at a time.</li></ul>",
 "portal": {
  "path": [
   "Bastions",
   "Bastion1"
  ],
  "title": "Bastion1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "Developer",
    "Free, 1 connection"
   ],
   [
    "Basic",
    "Peered networks"
   ],
   [
    "*Standard",
    "Native client, shareable links"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Native client = Standard; peered networks from Basic; Developer = free."
},
{
 "id": "D4-053",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You deploy a NAT gateway.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A NAT gateway can be associated with several subnets of the same virtual network.",
   "a": 0
  },
  {
   "l": "A NAT gateway can use a Basic SKU public IP address.",
   "a": 1
  },
  {
   "l": "A VM with its own public IP address on its network interface uses that address for outbound traffic, not the NAT gateway's.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Several subnets: Yes</b>, in the same virtual network.</li><li><b>Basic SKU: No.</b> Only Standard addresses (or prefixes) are supported.</li><li><b>Interface public address: No.</b> The NAT gateway <b>takes precedence</b> for outbound traffic over all other configurations (instance-level public IP, load balancer outbound rules). The VM's public address is then only used for <b>inbound</b> traffic.</li></ul>",
 "portal": {
  "path": [
   "NAT gateways",
   "NAT1"
  ],
  "title": "NAT1 | Subnets",
  "menu": [
   "*Subnets"
  ],
  "rows": [
   [
    "*Subnets",
    "Several (same VNet)"
   ],
   [
    "IP",
    "Standard only"
   ],
   [
    "Precedence",
    "Over all other egress"
   ]
  ]
 },
 "keep": "NAT: several subnets, Standard IPs, takes precedence for egress."
},
{
 "id": "D4-059",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>The private DNS zone corp.local is linked to VNet1 (autoregistration enabled) and to VNet2 (autoregistration disabled). VNet1 and VNet2 aren't peered.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "VMs in VNet2 have a record created automatically in corp.local.",
   "a": 1
  },
  {
   "l": "A VM in VNet2 can resolve the name of a VM in VNet1 in corp.local.",
   "a": 0
  },
  {
   "l": "A VM in VNet2 can connect to a VM in VNet1 thanks to the private zone.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>VNet2 records: No</b>, autoregistration isn't enabled on its link.</li><li><b>Resolution: Yes.</b> A resolution link is enough to query the zone.</li><li><b>Connection: No.</b> DNS gives an address, but with no peering or VPN, there's no network path between the two networks.</li></ul>",
 "portal": {
  "path": [
   "Private DNS zones",
   "corp.local"
  ],
  "title": "corp.local | Virtual network links",
  "menu": [
   "*Virtual network links"
  ],
  "rows": [
   [
    "VNet1",
    "Auto registration: enabled"
   ],
   [
    "*VNet2",
    "Auto registration: disabled (resolution only)"
   ]
  ]
 },
 "keep": "Link without registration = resolution only; DNS doesn't create a network path."
},
{
 "id": "D4-064",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate DNS record type for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Types",
 "tgtHead": [
  "Need",
  "Type"
 ],
 "srcs": [
  "A",
  "CNAME",
  "MX",
  "TXT",
  "NS"
 ],
 "tgts": [
  {
   "l": "Map www.contoso.com to the IPv4 address 52.1.2.3",
   "a": 0
  },
  {
   "l": "Make shop.contoso.com an alias of contoso.azurewebsites.net",
   "a": 1
  },
  {
   "l": "Specify the domain's mail server",
   "a": 2
  },
  {
   "l": "Prove domain ownership to a third-party service",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>A</b>: name to IPv4 address (AAAA for IPv6).</li><li><b>CNAME</b>: name to another name.</li><li><b>MX</b>: mail servers.</li><li><b>TXT</b>: free text, used for domain verification and SPF.</li></ul><p><b>NS</b> designates a zone's name servers (delegation).</p>",
 "portal": {
  "path": [
   "DNS zones",
   "contoso.com"
  ],
  "title": "Recordsets",
  "rows": [
   [
    "*A",
    "www → 52.1.2.3"
   ],
   [
    "CNAME",
    "shop → contoso.azurewebsites.net"
   ],
   [
    "MX",
    "Mail"
   ],
   [
    "TXT",
    "Verification"
   ]
  ]
 },
 "keep": "A = IP; CNAME = alias; MX = mail; TXT = verification; NS = delegation."
}
);
