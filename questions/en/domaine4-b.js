/* Domain 4: virtual networking (batch B : D4-010 to D4-064) */
AZ.questions.push(
{
 "id": "D4-010",
 "dom": 4,
 "type": "single",
 "stem": "<p>You create in VNet1 the subnet Subnet4 with the range <b>10.1.4.0/28</b>.</p><p>How many IP addresses can you assign to resources in Subnet4?</p>",
 "opts": [
  "11",
  "14",
  "16",
  "13"
 ],
 "ans": 0,
 "expl": "<p>A /28 contains 2<sup>4</sup> = <b>16</b> addresses. Azure reserves <b>5</b> in each subnet: the first (network address, .0), the next three (.1 default gateway, .2 and .3 for Azure DNS), and the last (.15, broadcast). That leaves 16 − 5 = <b>11</b> addresses.</p><p>14 would be the classic calculation outside Azure (16 − 2).</p>",
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
    "*Subnet4",
    "10.1.4.0/28 · 11 available addresses"
   ]
  ],
  "btn": "+ Subnet"
 },
 "keep": "/28 = 16 − 5 = 11 usable addresses."
},
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
 "id": "D4-012",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to create the smallest possible subnet in an Azure virtual network.</p><p>Which prefix size is the smallest allowed?</p>",
 "opts": [
  "/29",
  "/30",
  "/31",
  "/32"
 ],
 "ans": 0,
 "expl": "<p>The smallest IPv4 subnet allowed is a <b>/29</b>: 8 addresses, 5 of them reserved, so 3 usable. The largest is a /2. /30, /31, and /32 are rejected.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "Add a subnet",
  "rows": [
   [
    "*Minimum size",
    "/29 (3 usable addresses)"
   ],
   [
    "Maximum size",
    "/2"
   ]
  ]
 },
 "keep": "Smallest IPv4 subnet = /29."
},
{
 "id": "D4-013",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to indicate the exact name and recommended minimum size of dedicated subnets.</p><p>To answer, drag the appropriate value to each service. Each value may be used once, more than once, or not at all.</p>",
 "srcLabel": "Subnets",
 "srcs": [
  "GatewaySubnet, /27",
  "AzureBastionSubnet, /26",
  "AzureFirewallSubnet, /26",
  "AppGatewaySubnet, /24"
 ],
 "tgtHead": [
  "Service",
  "Subnet"
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
 "id": "D4-014",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1 (10.0.0.0/16) is peered with VNet2 (10.1.0.0/16). You need to add the address space 10.2.0.0/16 to VNet1.</p><p>What should you do after adding it?</p>",
 "opts": [
  "Create a VPN gateway",
  "Sync the peering so VNet2 learns the new space",
  "Nothing: the peering updates automatically with no action",
  "Delete and recreate the peering in every case"
 ],
 "ans": 1,
 "expl": "<p>You can change the address space of a peered virtual network. The peering then moves to the “sync required” state: you must run a <b>sync</b> (Sync button or <code>Sync-AzVirtualNetworkPeering</code>) so the remote network learns the new space.</p><p>Deleting and recreating the peering is no longer necessary.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Peerings",
  "menu": [
   "Address space",
   "*Peerings"
  ],
  "rows": [
   [
    "vnet1-to-vnet2",
    "Sync required"
   ]
  ],
  "btn": "Sync"
 },
 "keep": "Address space changed on a peered VNet = sync the peering."
},
{
 "id": "D4-015",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to peer VNet3 (10.10.0.0/16) with VNet4 (10.10.128.0/17).</p><p>What happens?</p>",
 "opts": [
  "The peering works normally",
  "The peering works, but only in one direction",
  "The peering is impossible because the address spaces overlap",
  "The peering works if both networks are in the same region"
 ],
 "ans": 2,
 "expl": "<p>10.10.128.0/17 is included in 10.10.0.0/16: the spaces <b>overlap</b>. Two overlapping virtual networks can't be peered (or connected by VPN without NAT). Plan distinct ranges from the start.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet3"
  ],
  "title": "Add peering",
  "rows": [
   [
    "*Error",
    "Address spaces overlap (10.10.0.0/16 ⊃ 10.10.128.0/17)"
   ]
  ]
 },
 "keep": "Overlapping spaces = no peering."
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
 "id": "D4-017",
 "dom": 4,
 "type": "single",
 "stem": "<p>In a hub-and-spoke topology, the hub VNet-Hub contains a VPN gateway to the on-premises site. The spokes VNet-S1 and VNet-S2 must reach the on-premises site through this gateway.</p><p>Which peering settings should you enable?</p>",
 "opts": [
  "“Allow forwarded traffic” only",
  "“Use remote gateway” on the hub, and “Allow gateway transit” on the spokes",
  "None: peering allows it by default",
  "“Allow gateway transit” on the hub's peerings, and “Use remote gateway” on the spokes' peerings"
 ],
 "ans": 3,
 "expl": "<p>The network that <b>owns</b> the gateway (the hub) allows <b>gateway transit</b>. Networks that want to <b>use</b> it (the spokes) enable <b>Use remote gateway</b> (and must not have their own gateway). The on-premises site then learns the spokes' ranges (through BGP or by adding them to the local configuration).</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-Hub"
  ],
  "title": "VNet-Hub | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "*Hub",
    "Allow gateway transit"
   ],
   [
    "*Spokes",
    "Use remote gateway"
   ]
  ]
 },
 "keep": "Hub = gateway transit; spokes = remote gateway."
},
{
 "id": "D4-018",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet-Spoke1 and VNet-Spoke2 are peered with VNet-Hub, which contains a network virtual appliance (NVA) at 10.0.1.4. You want Spoke1 and Spoke2 to communicate through the NVA.</p><p>Which combination of configuration is required?</p>",
 "opts": [
  "Route tables in the spokes with next hop Virtual appliance 10.0.1.4, “Allow forwarded traffic” on the peerings, and IP forwarding on the NVA's network interface",
  "Transitive peering enabled on the hub",
  "A NAT gateway in the hub",
  "A public load balancer in each spoke"
 ],
 "ans": 0,
 "expl": "<ul><li><b>User-defined routes</b> in each spoke send traffic for the other spoke to the NVA.</li><li><b>Allow forwarded traffic</b> on the peerings accepts traffic that doesn't come directly from the peered network.</li><li><b>IP forwarding</b> on the NVA's network interface (and in its OS) lets it route packets not addressed to it.</li></ul><p>“Transitive peering” doesn't exist.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT-Spoke1"
  ],
  "title": "RT-Spoke1 | Routes",
  "menu": [
   "*Routes"
  ],
  "rows": [
   [
    "*To Spoke2 (10.2.0.0/16)",
    "Virtual appliance · 10.0.1.4"
   ],
   [
    "Peerings",
    "Allow forwarded traffic"
   ],
   [
    "NVA",
    "IP forwarding enabled"
   ]
  ]
 },
 "keep": "Spoke-to-spoke through an NVA: UDRs + forwarded traffic + IP forwarding."
},
{
 "id": "D4-019",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1 is in France Central and VNet2 in Japan East. VMs in both networks must communicate over the Microsoft network, with low latency, without a gateway.</p><p>What should you configure?</p>",
 "opts": [
  "A VNet-to-VNet VPN gateway",
  "Global virtual network peering",
  "A NAT gateway",
  "A load balancer"
 ],
 "ans": 1,
 "expl": "<p><b>Global peering</b> connects virtual networks in <b>different regions</b> over the Microsoft backbone, with no gateway or IPsec encryption, and low latency. Cross-region traffic is billed (inbound and outbound).</p><p>A VNet-to-VNet VPN would also work, but with a gateway, limited bandwidth, and more latency.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "Add peering",
  "rows": [
   [
    "*Remote network",
    "VNet2 (Japan East)"
   ],
   [
    "Type",
    "Global peering"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Different regions, no gateway = global peering."
},
{
 "id": "D4-020",
 "dom": 4,
 "type": "single",
 "stem": "<p>You create a peering from VNet1 to VNet2, but not the peering from VNet2 to VNet1.</p><p>What is the peering's state on VNet1?</p>",
 "opts": [
  "Disconnected",
  "Synchronized",
  "Initiated",
  "Connected"
 ],
 "ans": 2,
 "expl": "<p>A peering has two links, one in each network. After the first link is created, the state is <b>Initiated</b>. It becomes <b>Connected</b> when the second link is created. The portal usually creates both links in one operation. The <b>Disconnected</b> state appears if one of the links is deleted.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "*vnet1-to-vnet2",
    "Initiated"
   ]
  ]
 },
 "keep": "Initiated = one link only; Connected = both; Disconnected = a link deleted."
},
{
 "id": "D4-021",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1 is in the subscription Sub1 (Contoso tenant) and VNet2 in the subscription Sub2 (Fabrikam tenant).</p><p>Can you peer these two virtual networks?</p>",
 "opts": [
  "No, peering is only possible within the same tenant",
  "Yes, but only with a VPN gateway",
  "No, peering is only possible within the same subscription",
  "Yes, peering across subscriptions and tenants is supported, with the required permissions on both sides"
 ],
 "ans": 3,
 "expl": "<p>Peering works across <b>subscriptions</b> and even across Microsoft Entra <b>tenants</b>. The administrator on each side must have the right to create the peering link (for example Network Contributor), often with a guest account in the other tenant.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "Add peering",
  "rows": [
   [
    "*I know my resource ID",
    "Checked"
   ],
   [
    "Resource ID",
    "/subscriptions/<Sub2>/…/VNet2 (Fabrikam tenant)"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Peering across subscriptions and tenants = possible, with rights on both sides."
},
{
 "id": "D4-022",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to configure a site-to-site VPN connection between VNet1 and the Lyon on-premises site.</p><p>To answer, drag the appropriate resource to each piece of information. Each resource may be used once, more than once, or not at all.</p>",
 "srcLabel": "Resources",
 "srcs": [
  "Virtual network gateway",
  "Local network gateway",
  "Connection",
  "GatewaySubnet"
 ],
 "tgtHead": [
  "Information",
  "Resource"
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
 ],
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
 "keep": "S2S: GatewaySubnet → gateway → local gateway → connection."
},
{
 "id": "D4-024",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your VPN gateway must connect VNet1 to 3 on-premises sites at the same time, and accept point-to-site connections.</p><p>Which VPN type should you choose for the gateway?</p>",
 "opts": [
  "Route-based",
  "ExpressRoute",
  "Static",
  "Policy-based"
 ],
 "ans": 0,
 "expl": "<p><b>Route-based</b> supports multiple site-to-site connections, point-to-site, VNet-to-VNet, BGP, and coexistence with ExpressRoute. It's the default choice.</p><p><b>Policy-based</b> allows only one site-to-site tunnel (Basic SKU) and no point-to-site. It's reserved for older devices.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "Create"
  ],
  "title": "Create virtual network gateway",
  "rows": [
   [
    "*VPN type",
    "Route-based"
   ],
   [
    "Policy-based",
    "1 tunnel, no P2S"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Several sites, P2S, BGP = route-based."
},
{
 "id": "D4-025",
 "dom": 4,
 "type": "single",
 "stem": "<p>Remote employees must connect to VNet1 from their laptop, from anywhere, with their Microsoft Entra account.</p><p>What should you configure?</p>",
 "opts": [
  "ExpressRoute",
  "A point-to-site VPN on the VPN gateway, with the OpenVPN tunnel type and Microsoft Entra ID authentication",
  "Virtual network peering",
  "A site-to-site VPN to each home"
 ],
 "ans": 1,
 "expl": "<p>A <b>point-to-site VPN</b> connects a computer to a virtual network. You define a <b>client address pool</b>, the tunnel type, and authentication. <b>Microsoft Entra ID</b> authentication requires the <b>OpenVPN</b> tunnel type and the Azure VPN client.</p><p>Site-to-site connects networks (one VPN device per site). ExpressRoute is an enterprise private circuit.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet1-GW"
  ],
  "title": "VNet1-GW | Point-to-site configuration",
  "menu": [
   "*Point-to-site configuration"
  ],
  "rows": [
   [
    "Address pool",
    "172.16.201.0/24"
   ],
   [
    "*Tunnel type",
    "OpenVPN (SSL)"
   ],
   [
    "*Authentication type",
    "Microsoft Entra ID"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Remote work with an Entra account = P2S, OpenVPN, Entra ID authentication."
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
 "id": "D4-027",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your company wants a private connection between its datacenter and Azure that doesn't go over the internet, with guaranteed bandwidth of 1 Gbps and an SLA.</p><p>What should you recommend?</p>",
 "opts": [
  "A point-to-site VPN",
  "A site-to-site VPN",
  "Azure ExpressRoute",
  "Global peering"
 ],
 "ans": 2,
 "expl": "<p><b>ExpressRoute</b> is a private circuit provided by a partner carrier: it doesn't go over the internet, offers dedicated bandwidth (from 50 Mbps to 100 Gbps), and an SLA. You connect it to the virtual network through an ExpressRoute-type gateway.</p><p>A site-to-site VPN goes over the internet (encrypted with IPsec).</p>",
 "portal": {
  "path": [
   "ExpressRoute circuits",
   "Create"
  ],
  "title": "Create ExpressRoute circuit",
  "rows": [
   [
    "*Provider",
    "Orange Business"
   ],
   [
    "Bandwidth",
    "1 Gbps"
   ],
   [
    "Peering location",
    "Paris"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Private, no internet, guaranteed bandwidth + SLA = ExpressRoute."
},
{
 "id": "D4-028",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your on-premises site is connected to VNet1 by ExpressRoute. You want an automatic backup connection if the circuit goes down.</p><p>What should you add?</p>",
 "opts": [
  "A load balancer",
  "A second peering",
  "A NAT gateway",
  "A site-to-site VPN gateway in the same virtual network (ExpressRoute and VPN coexistence)"
 ],
 "ans": 3,
 "expl": "<p>A <b>VPN</b> gateway and an <b>ExpressRoute</b> gateway can coexist in the same GatewaySubnet. The site-to-site VPN serves as the <b>backup</b> path: ExpressRoute is preferred while it's available.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | GatewaySubnet",
  "rows": [
   [
    "*ExpressRoute gateway",
    "Primary"
   ],
   [
    "*VPN gateway",
    "Backup (coexistence)"
   ]
  ]
 },
 "keep": "ExpressRoute backup = site-to-site VPN in the same GatewaySubnet."
},
{
 "id": "D4-029",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1's VPN gateway must stay available even if a gateway instance is under maintenance, with two active tunnels to the on-premises site.</p><p>Which configuration should you enable?</p>",
 "opts": [
  "Active-active mode",
  "A second gateway in another GatewaySubnet of the same virtual network",
  "The Basic SKU",
  "Policy-based mode"
 ],
 "ans": 0,
 "expl": "<p>By default, a VPN gateway runs <b>active-standby</b>: a standby instance takes over in case of a problem, with a short interruption. In <b>active-active</b>, both instances each have a public IP address and each establish a tunnel: no interruption during maintenance.</p><p>A virtual network can have only one GatewaySubnet and a single VPN gateway.</p>",
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
    "*Active-active mode",
    "Enabled"
   ],
   [
    "Public IP addresses",
    "2"
   ]
  ],
  "btn": "Save"
 },
 "keep": "No interruption during maintenance = active-active gateway."
},
{
 "id": "D4-030",
 "dom": 4,
 "type": "single",
 "stem": "<p>The site-to-site VPN connection between VNet1 and the Nantes site shows the state <b>Not connected</b>. The on-premises firewall is configured correctly.</p><p>Which tool should you use to diagnose the connection?</p>",
 "opts": [
  "Azure Advisor",
  "Network Watcher: VPN troubleshoot",
  "Boot diagnostics",
  "Cost analysis"
 ],
 "ans": 1,
 "expl": "<p>Network Watcher's <b>VPN troubleshoot</b> analyzes the gateway and connection, and produces a report (IKE logs, shared key or policy setting errors). Common causes: different shared key, wrong public IP address or address ranges in the local network gateway.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Network Watcher | VPN troubleshoot",
  "menu": [
   "*VPN troubleshoot"
  ],
  "rows": [
   [
    "*Resource",
    "Connection VNet1-Nantes"
   ],
   [
    "Result",
    "Shared key mismatch"
   ]
  ],
  "btn": "Start troubleshooting"
 },
 "keep": "Diagnosing a VPN = Network Watcher, VPN troubleshoot."
},
{
 "id": "D4-031",
 "dom": 4,
 "type": "single",
 "stem": "<p>The VPN device at the Rennes site changes its public IP address.</p><p>Which Azure resource should you update?</p>",
 "opts": [
  "VNet1's route table",
  "The GatewaySubnet",
  "The Rennes local network gateway",
  "The virtual network gateway"
 ],
 "ans": 2,
 "expl": "<p>The <b>local network gateway</b> holds the public IP address (or FQDN) of the on-premises device and its address ranges. You update it when either changes. You can also use an FQDN for a site with a dynamic address.</p>",
 "portal": {
  "path": [
   "Local network gateways",
   "LNG-Rennes"
  ],
  "title": "LNG-Rennes | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*IP address",
    "New public address"
   ],
   [
    "Address space",
    "Rennes ranges"
   ]
  ],
  "btn": "Save"
 },
 "keep": "On-premises site info (IP, ranges) = local network gateway."
},
{
 "id": "D4-032",
 "dom": 4,
 "type": "single",
 "stem": "<p>The Toulouse on-premises site adds a new network, 192.168.50.0/24. VMs in VNet1 can't reach it through the existing site-to-site VPN (no BGP).</p><p>What should you do?</p>",
 "opts": [
  "Create a peering",
  "Add 192.168.50.0/24 to VNet1's address space",
  "Change the gateway SKU",
  "Add 192.168.50.0/24 to the address prefixes of the Toulouse local network gateway"
 ],
 "ans": 3,
 "expl": "<p>Without BGP, Azure only knows the on-premises networks through the list of <b>prefixes</b> in the local network gateway. You must add the new network there. With BGP, it would be learned automatically.</p><p>Adding this range to VNet1 would create an overlap.</p>",
 "portal": {
  "path": [
   "Local network gateways",
   "LNG-Toulouse"
  ],
  "title": "LNG-Toulouse | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Address space",
    "+ 192.168.50.0/24"
   ]
  ],
  "btn": "Save"
 },
 "keep": "New on-premises network without BGP = add it to the local network gateway."
},
{
 "id": "D4-033",
 "dom": 4,
 "type": "single",
 "stem": "<p>You create a route table RT1 with the route 0.0.0.0/0, next hop <b>Virtual appliance</b> 10.0.2.4. You associate RT1 with Subnet1.</p><p>What happens to outbound internet traffic from the VMs in Subnet1?</p>",
 "opts": [
  "It's sent to the appliance 10.0.2.4",
  "It goes directly to the internet",
  "It's sent to the VPN gateway",
  "It's blocked"
 ],
 "ans": 0,
 "expl": "<p>A user-defined route replaces the default system route 0.0.0.0/0 → Internet. Any traffic that doesn't match a more specific route (such as the virtual network's) goes to the <b>appliance</b>, often a firewall, which must have IP forwarding enabled.</p>",
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
    "Virtual appliance · 10.0.2.4"
   ]
  ]
 },
 "keep": "UDR 0.0.0.0/0 → appliance = all internet traffic goes through the firewall."
},
{
 "id": "D4-034",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You create routes in a route table. You need to choose the appropriate next hop type for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Next hop types",
 "srcs": [
  "Virtual appliance",
  "Virtual network gateway",
  "Internet",
  "None",
  "Virtual network"
 ],
 "tgtHead": [
  "Need",
  "Next hop"
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
 "id": "D4-035",
 "dom": 4,
 "type": "single",
 "stem": "<p>A route table RT2 is associated with Subnet2. You want it to also apply to the VMs in Subnet3.</p><p>What should you do?</p>",
 "opts": [
  "Associate RT2 with each VM's network interface",
  "Associate RT2 with Subnet3",
  "You must create a copy of RT2 for Subnet3",
  "Associate RT2 with the virtual network"
 ],
 "ans": 1,
 "expl": "<p>A route table is associated with <b>subnets</b>, and the same table can be associated with <b>several</b> subnets (in virtual networks of the same region and subscription). It isn't associated with network interfaces or the whole virtual network.</p><p>A subnet, however, has only <b>one</b> route table at a time.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT2"
  ],
  "title": "RT2 | Subnets",
  "menu": [
   "Routes",
   "*Subnets"
  ],
  "rows": [
   [
    "Subnet2",
    "Associated"
   ],
   [
    "*Subnet3",
    "+ Associate"
   ]
  ]
 },
 "keep": "One table can serve several subnets; one subnet = one table."
},
{
 "id": "D4-036",
 "dom": 4,
 "type": "single",
 "stem": "<p>VM1 in Subnet1 can't reach 10.20.1.10. You want to know which route actually applies to its network interface, combining system, BGP, and user-defined routes.</p><p>What should you look at?</p>",
 "opts": [
  "VM1's metrics",
  "The activity log",
  "The effective routes of VM1's network interface (or Network Watcher: Next hop)",
  "The effective security rules only"
 ],
 "ans": 2,
 "expl": "<p>A network interface's <b>effective routes</b> list all applied routes and show which are active. Network Watcher's <b>Next hop</b> directly gives the next hop and route table used for a specific destination.</p><p>Effective security rules concern NSGs, not routing.</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm1-nic"
  ],
  "title": "vm1-nic | Effective routes",
  "menu": [
   "*Effective routes",
   "Effective security rules"
  ],
  "rows": [
   [
    "10.0.0.0/16",
    "Virtual network · Active"
   ],
   [
    "*10.20.0.0/16",
    "No route"
   ]
  ]
 },
 "keep": "Which route applies = effective routes (or Next hop)."
},
{
 "id": "D4-037",
 "dom": 4,
 "type": "single",
 "stem": "<p>A route table contains two routes: 10.0.0.0/8 → Virtual appliance 10.1.0.4, and 10.2.0.0/16 → Virtual network gateway.</p><p>Where does a packet to 10.2.5.20 go?</p>",
 "opts": [
  "To the appliance 10.1.0.4",
  "To the internet",
  "It's dropped",
  "To the virtual network gateway"
 ],
 "ans": 3,
 "expl": "<p>Azure chooses the route with the <b>longest prefix</b> (the most specific) that matches the destination. 10.2.5.20 matches /8 and /16; /16 is more specific, so the packet goes to the <b>gateway</b>.</p><p>With equal prefixes, the order of preference is: user-defined route, then BGP, then system.</p>",
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
    "10.0.0.0/8",
    "Appliance · 10.1.0.4"
   ],
   [
    "*10.2.0.0/16",
    "Gateway (longest prefix)"
   ]
  ]
 },
 "keep": "Longest prefix wins; on a tie: UDR > BGP > system."
},
{
 "id": "D4-038",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in Subnet-App must always go through Azure Firewall, even for on-premises networks learned through BGP from the VPN gateway.</p><p>Which route table setting should you configure?</p>",
 "opts": [
  "Disable gateway route propagation (Propagate gateway routes: No)",
  "Enable accelerated networking",
  "Increase the route priority",
  "Enable IP forwarding"
 ],
 "ans": 0,
 "expl": "<p>With <b>Propagate gateway routes</b> set to No, routes learned through BGP (and on-premises ranges) aren't added to the subnets associated with the table. Only your routes (for example 0.0.0.0/0 and on-premises ranges to the firewall) apply.</p><p>Routes have no numeric priority.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT-App"
  ],
  "title": "RT-App | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Propagate gateway routes",
    "No"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Ignoring the gateway's BGP routes = Propagate gateway routes: No."
},
{
 "id": "D4-039",
 "dom": 4,
 "type": "single",
 "stem": "<p>You deploy a Linux VM that acts as a router between two subnets. Packets not addressed to it are dropped by Azure.</p><p>What should you enable in Azure?</p>",
 "opts": [
  "Accelerated networking",
  "IP forwarding on the VM's network interface",
  "A network security group",
  "A public IP address"
 ],
 "ans": 1,
 "expl": "<p>By default, Azure drops packets whose destination address isn't the network interface's. <b>IP forwarding</b> on the network interface lifts this restriction. You must also enable routing in the OS (for example <code>net.ipv4.ip_forward=1</code>).</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "router-nic"
  ],
  "title": "router-nic | IP configurations",
  "menu": [
   "*IP configurations"
  ],
  "rows": [
   [
    "*IP forwarding",
    "Enabled"
   ]
  ],
  "btn": "Save"
 },
 "keep": "VM that routes = IP forwarding (Azure + OS)."
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
 "id": "D4-041",
 "dom": 4,
 "type": "single",
 "stem": "<p>NSG-Sub is associated with Subnet1 and allows inbound RDP from the internet. NSG-NIC is associated with the network interface of VM3, in Subnet1, and contains only the default rules.</p><p>Can an administrator connect to VM3 over RDP from the internet?</p>",
 "opts": [
  "No, because a subnet can't have an NSG",
  "Yes, because the network interface's NSG is ignored",
  "No, because inbound traffic must be allowed by both NSGs",
  "Yes, because the subnet's NSG allows it"
 ],
 "ans": 2,
 "expl": "<p>For <b>inbound</b> traffic, Azure evaluates the <b>subnet</b> NSG first, then the <b>network interface</b> NSG. Traffic must be allowed by <b>both</b>. NSG-NIC has only the default rules, including <b>DenyAllInBound</b> (65500), which denies RDP from the internet.</p><p>For outbound traffic, the order is reversed: network interface then subnet.</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm3-nic"
  ],
  "title": "vm3-nic | Effective security rules",
  "menu": [
   "*Effective security rules"
  ],
  "rows": [
   [
    "NSG-Sub",
    "RDP Internet · Allow"
   ],
   [
    "*NSG-NIC",
    "DenyAllInBound · Deny"
   ]
  ]
 },
 "keep": "Inbound: subnet NSG then NIC NSG; both must allow."
},
{
 "id": "D4-042",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to indicate the priority of each default security rule of an NSG.</p><p>To answer, drag the appropriate priority to each rule. Each priority may be used once, more than once, or not at all.</p>",
 "srcLabel": "Priorities",
 "srcs": [
  "65000",
  "65001",
  "65500",
  "4096"
 ],
 "tgtHead": [
  "Default rule (inbound)",
  "Priority"
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
 "id": "D4-044",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to allow web VMs to reach database VMs on port 1433, without using IP addresses in the rules. Both groups of VMs are in the same virtual network and their addresses change often.</p><p>What should you use?</p>",
 "opts": [
  "User-defined routes",
  "Service tags",
  "Azure resource tags",
  "Application security groups (ASG-Web and ASG-SQL) as the source and destination of the NSG rule"
 ],
 "ans": 3,
 "expl": "<p>An <b>application security group</b> groups network interfaces. You write the rule with the ASGs as source and destination (“ASG-Web to ASG-SQL on 1433”); adding a VM to the group is enough, with no rule changes. Network interfaces in an ASG must be in the same virtual network.</p><p>Service tags represent Azure services (Storage, Sql…), not your VMs.</p>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG-App"
  ],
  "title": "Add inbound security rule",
  "rows": [
   [
    "*Source",
    "Application security group: ASG-Web"
   ],
   [
    "*Destination",
    "Application security group: ASG-SQL"
   ],
   [
    "Port",
    "1433"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Rules by VM role, no IPs = application security groups."
},
{
 "id": "D4-045",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in Subnet-App must be able to reach all Azure storage accounts in the France Central region, and nothing else on the internet.</p><p>How should you write the NSG's outbound rules?</p>",
 "opts": [
  "Allow the destination service tag Storage.FranceCentral, then deny the Internet destination with a lower priority",
  "Allow 0.0.0.0/0 to port 443",
  "Allow the VirtualNetwork destination only",
  "Deny the Storage tag"
 ],
 "ans": 0,
 "expl": "<p>A <b>service tag</b> represents an Azure service's address ranges, kept up to date by Microsoft. <b>Storage.FranceCentral</b> limits it to the region. You then add a rule that <b>denies Internet</b> with a higher priority number, to block the rest (the default AllowInternetOutBound rule would otherwise allow it).</p>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG-App"
  ],
  "title": "Outbound security rules",
  "rows": [
   [
    "*100",
    "Storage.FranceCentral · Allow"
   ],
   [
    "200",
    "Internet · Deny"
   ]
  ]
 },
 "keep": "Destination = Azure service = service tag (regional if needed)."
},
{
 "id": "D4-046",
 "dom": 4,
 "type": "single",
 "stem": "<p>An administrator can't reach VM4 on port 22. You want to know exactly which NSG rule allows or blocks this traffic, from his IP address.</p><p>Which Network Watcher tool should you use?</p>",
 "opts": [
  "Connection monitor",
  "IP flow verify",
  "Next hop",
  "Packet capture"
 ],
 "ans": 1,
 "expl": "<p><b>IP flow verify</b> simulates a packet (direction, protocol, addresses, and ports) to or from a VM, and tells you whether it's allowed or denied, and by <b>which NSG rule</b>.</p><p>Next hop concerns routing. Packet capture records real traffic. Connection monitor watches connectivity over time.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "IP flow verify",
  "menu": [
   "*IP flow verify"
  ],
  "rows": [
   [
    "VM",
    "VM4 · TCP 22 · inbound"
   ],
   [
    "*Result",
    "Denied · DenyAllInBound rule"
   ]
  ],
  "btn": "Check"
 },
 "keep": "Which NSG rule blocks = IP flow verify."
},
{
 "id": "D4-047",
 "dom": 4,
 "type": "single",
 "stem": "<p>VM5 can't reach an on-premises server. You want to test the TCP connection end to end and see at which hop it fails (NSG, routing, or a server that doesn't respond).</p><p>Which tool should you use?</p>",
 "opts": [
  "The activity log",
  "IP flow verify only",
  "Network Watcher: Connection troubleshoot",
  "Azure Advisor"
 ],
 "ans": 2,
 "expl": "<p><b>Connection troubleshoot</b> tests a TCP or ICMP connection from a VM to a destination, shows the hops, latency, and the likely cause of a failure (NSG rule, route, unreachable destination).</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Connection troubleshoot",
  "menu": [
   "*Connection troubleshoot"
  ],
  "rows": [
   [
    "Source",
    "VM5"
   ],
   [
    "Destination",
    "192.168.10.20:443"
   ],
   [
    "*Result",
    "Unreachable · hop 3"
   ]
  ],
  "btn": "Test connection"
 },
 "keep": "End-to-end test with hops = connection troubleshoot."
},
{
 "id": "D4-048",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to record all accepted and denied IP traffic in VNet1 for a security analysis, and analyze it with Traffic Analytics.</p><p>What should you enable?</p>",
 "opts": [
  "Boot diagnostics",
  "The activity log",
  "A permanent packet capture",
  "Network Watcher virtual network flow logs (VNet flow logs), to a storage account, with Traffic Analytics"
 ],
 "ans": 3,
 "expl": "<p><b>Flow logs</b> record IP flows (source, destination, ports, decision). <b>Virtual network</b> flow logs replace NSG flow logs (being retired). They're written to a storage account, and <b>Traffic Analytics</b> analyzes them in Log Analytics.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Flow logs › Create",
  "menu": [
   "*Flow logs"
  ],
  "rows": [
   [
    "*Flow log type",
    "Virtual network (VNet1)"
   ],
   [
    "Storage",
    "stflowlogs"
   ],
   [
    "Traffic Analytics",
    "Enabled · Log Analytics"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Recording and analyzing flows = VNet flow logs + Traffic Analytics."
},
{
 "id": "D4-049",
 "dom": 4,
 "type": "single",
 "stem": "<p>Administrators must connect over RDP and SSH to VMs in VNet1 from the Azure portal, over HTTPS, with no public IP address on the VMs.</p><p>What should you deploy?</p>",
 "opts": [
  "Azure Bastion in AzureBastionSubnet",
  "A NAT gateway",
  "A public load balancer",
  "A public IP address on each VM"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Bastion</b> is a managed service deployed in the <b>AzureBastionSubnet</b> subnet (/26 minimum) with a Standard public IP address. Administrators open the RDP or SSH session in the browser, over HTTPS (443), and the VMs only need a private address.</p>",
 "portal": {
  "path": [
   "Bastions",
   "Create"
  ],
  "title": "Create a Bastion",
  "rows": [
   [
    "Virtual network",
    "VNet1"
   ],
   [
    "*Subnet",
    "AzureBastionSubnet (/26)"
   ],
   [
    "Public IP address",
    "Standard"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "RDP/SSH through the browser, no public IP on VMs = Bastion."
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
 "id": "D4-051",
 "dom": 4,
 "type": "single",
 "stem": "<p>Bastion is deployed in VNet-Hub. VNet-Spoke is peered with VNet-Hub.</p><p>Can you use this Bastion to connect to VMs in VNet-Spoke?</p>",
 "opts": [
  "No, you need one Bastion per virtual network",
  "Yes, Bastion works with peered virtual networks",
  "No, except with a VPN gateway",
  "Yes, but only with the Premium SKU"
 ],
 "ans": 1,
 "expl": "<p>Azure Bastion supports <b>peered networks</b> (including global peering). A single Bastion in the hub is enough for a whole hub-and-spoke topology, which reduces costs.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Spoke1"
  ],
  "title": "VM-Spoke1 | Bastion",
  "menu": [
   "*Connect"
  ],
  "rows": [
   [
    "*Bastion",
    "Bastion-Hub (peered network)"
   ]
  ],
  "btn": "Connect"
 },
 "keep": "One Bastion in the hub serves all peered spokes."
},
{
 "id": "D4-052",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in Subnet-Private have no public IP address. They must access the internet outbound with one or more fixed public IP addresses, which partners will allowlist. No inbound traffic must be possible.</p><p>What should you deploy?</p>",
 "opts": [
  "A VPN gateway",
  "Azure Bastion",
  "A NAT gateway associated with Subnet-Private",
  "A public load balancer with inbound rules"
 ],
 "ans": 2,
 "expl": "<p>A <b>NAT gateway</b> provides <b>outbound</b> connectivity for one or more subnets through static <b>Standard</b> public IP addresses (or a prefix). It doesn't accept unsolicited inbound connections. It's the recommended method for internet egress.</p>",
 "portal": {
  "path": [
   "NAT gateways",
   "Create"
  ],
  "title": "Create NAT gateway",
  "rows": [
   [
    "*Outbound IP",
    "Standard public address (or prefix)"
   ],
   [
    "*Subnet",
    "Subnet-Private"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Internet egress with fixed IPs, no inbound = NAT gateway."
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
 "id": "D4-054",
 "dom": 4,
 "type": "single",
 "stem": "<p>You create a public IP address for a Standard load balancer.</p><p>Which statement is true?</p>",
 "opts": [
  "A Standard address is open to all inbound traffic by default",
  "A Standard address can only be used with a VM",
  "A Standard public IP address can be dynamic",
  "A Standard public IP address is always static"
 ],
 "ans": 3,
 "expl": "<p><b>Standard</b> public IP addresses are <b>always static</b>. They're “secure by default”: inbound traffic is denied until an NSG allows it. They support zones and are required by Standard load balancers, NAT gateways, and Bastion.</p><p>The Basic SKU (dynamic or static, open by default) was retired in September 2025.</p>",
 "portal": {
  "path": [
   "Public IP addresses",
   "Create"
  ],
  "title": "Create public IP address",
  "rows": [
   [
    "SKU",
    "Standard"
   ],
   [
    "*Assignment",
    "Static (only option)"
   ],
   [
    "Inbound",
    "Closed by default (NSG)"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Standard public IP = always static, secure by default."
},
{
 "id": "D4-055",
 "dom": 4,
 "type": "single",
 "stem": "<p>A VM must keep the same <b>private</b> IP address even after a stop with deallocation.</p><p>What should you configure?</p>",
 "opts": [
  "A Static private address assignment in the network interface's IP configuration",
  "A static public IP address",
  "A DHCP reservation on a DNS server",
  "A fixed IP address in Windows network settings"
 ],
 "ans": 0,
 "expl": "<p>In the <b>network interface</b>'s IP configuration, <b>Static</b> assignment reserves the private address for the interface, even after the VM is deallocated. Azure keeps handing it out through DHCP.</p><p>You must <b>never</b> configure the IP address manually in the OS: you risk losing connectivity.</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm-nic"
  ],
  "title": "vm-nic | IP configurations › ipconfig1",
  "rows": [
   [
    "*Assignment",
    "Static"
   ],
   [
    "Private IP address",
    "10.0.1.10"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Fixed private IP = Static on the network interface, never in the OS."
},
{
 "id": "D4-056",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to provide a partner with a contiguous range of 16 public IP addresses that you'll use gradually for your resources.</p><p>What should you create?</p>",
 "opts": [
  "A /28 NAT gateway",
  "A /28 public IP address prefix",
  "A /28 subnet",
  "16 dynamic public IP addresses"
 ],
 "ans": 1,
 "expl": "<p>A <b>public IP address prefix</b> reserves a contiguous range of Standard addresses (/28 = 16 addresses). You then create public IP addresses from this prefix. The partner can allow the whole range at once.</p>",
 "portal": {
  "path": [
   "Public IP prefixes",
   "Create"
  ],
  "title": "Create a public IP prefix",
  "rows": [
   [
    "*Prefix size",
    "/28 (16 addresses)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Contiguous public range = public IP address prefix."
},
{
 "id": "D4-057",
 "dom": 4,
 "type": "single",
 "stem": "<p>You need to host the public DNS zone contoso.com in Azure.</p><p>What should you do after creating the zone in Azure DNS?</p>",
 "opts": [
  "Create a virtual network link",
  "Create a PTR record",
  "Update the NS records at the domain registrar with the zone's Azure name servers",
  "Enable autoregistration"
 ],
 "ans": 2,
 "expl": "<p>For the Azure zone to be authoritative, you must <b>delegate</b> the domain: at the registrar, replace the name servers with the 4 <b>NS</b> servers assigned to the Azure zone (ns1-xx.azure-dns.com, etc.).</p><p>Virtual network links and autoregistration concern <b>private</b> zones.</p>",
 "portal": {
  "path": [
   "DNS zones",
   "contoso.com"
  ],
  "title": "contoso.com | Overview",
  "menu": [
   "*Overview",
   "Recordsets"
  ],
  "rows": [
   [
    "*Name servers",
    "ns1-04.azure-dns.com … ns4-04.azure-dns.info"
   ],
   [
    "Action",
    "Set them at the registrar"
   ]
  ]
 },
 "keep": "Azure public zone = delegate (NS) at the registrar."
},
{
 "id": "D4-058",
 "dom": 4,
 "type": "single",
 "stem": "<p>VMs in VNet1 must find each other by name, under the <b>corp.contoso.local</b> suffix, with records created and deleted automatically with the VMs.</p><p>What should you configure?</p>",
 "opts": [
  "One A record per VM in the hosts file",
  "A contoso.com public DNS zone",
  "A custom DNS server on each VM",
  "A corp.contoso.local private DNS zone linked to VNet1 with autoregistration enabled"
 ],
 "ans": 3,
 "expl": "<p>A <b>private DNS zone</b> is only resolved in linked virtual networks. With <b>autoregistration</b> on the link, Azure creates an A record for each VM in the network and deletes it when the VM is deleted.</p><p>A virtual network can have autoregistration on only <b>one</b> private zone, but can be linked to several zones for resolution.</p>",
 "portal": {
  "path": [
   "Private DNS zones",
   "corp.contoso.local"
  ],
  "title": "Add virtual network link",
  "rows": [
   [
    "Virtual network",
    "VNet1"
   ],
   [
    "*Enable auto registration",
    "Checked"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Automatic internal names = private zone + link + autoregistration (1 zone per VNet)."
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
 "id": "D4-060",
 "dom": 4,
 "type": "single",
 "stem": "<p>You configure VNet1 to use your own DNS servers (10.0.0.4 and 10.0.0.5) instead of Azure-provided DNS. Existing VMs keep using the old server.</p><p>What should you do?</p>",
 "opts": [
  "Restart the VMs (or renew the DHCP lease) so they receive the new DNS servers",
  "Edit each VM's hosts file",
  "Create a private DNS zone",
  "Delete and recreate the VMs"
 ],
 "ans": 0,
 "expl": "<p>DNS servers are handed out through <b>DHCP</b>. Existing VMs only pick up the change after a <b>restart</b> or a lease renewal (<code>ipconfig /renew</code>).</p><p>You can also set DNS servers at the network interface level, which takes precedence over the virtual network's.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | DNS servers",
  "menu": [
   "*DNS servers"
  ],
  "rows": [
   [
    "*Custom",
    "10.0.0.4, 10.0.0.5"
   ],
   [
    "Applied",
    "Restart or DHCP renewal"
   ]
  ],
  "btn": "Save"
 },
 "keep": "New VNet DNS = restart the VMs (DHCP)."
},
{
 "id": "D4-061",
 "dom": 4,
 "type": "single",
 "stem": "<p>What is the virtual IP address of the Azure-provided DNS service (and of the platform health service), reachable from any VM?</p>",
 "opts": [
  "168.63.129.16",
  "169.254.169.254",
  "8.8.8.8",
  "10.0.0.1"
 ],
 "ans": 0,
 "expl": "<p><b>168.63.129.16</b> is the Azure platform's virtual IP address: Azure-provided DNS resolver, load balancer health probes, VM agent heartbeat. Don't block it.</p><p><b>169.254.169.254</b> is the Instance Metadata Service (IMDS).</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "Platform addresses",
  "rows": [
   [
    "*168.63.129.16",
    "Azure DNS, probes, agent"
   ],
   [
    "169.254.169.254",
    "IMDS"
   ]
  ]
 },
 "keep": "168.63.129.16 = platform virtual IP; 169.254.169.254 = IMDS."
},
{
 "id": "D4-062",
 "dom": 4,
 "type": "single",
 "stem": "<p>On-premises DNS servers must resolve names in an Azure private DNS zone (privatelink.blob.core.windows.net), and Azure VMs must resolve the on-premises AD domain, without deploying DNS VMs.</p><p>What should you deploy?</p>",
 "opts": [
  "Azure Bastion",
  "Azure DNS Private Resolver with an inbound endpoint and an outbound endpoint (and forwarding rules)",
  "A NAT gateway",
  "A public DNS zone"
 ],
 "ans": 1,
 "expl": "<p><b>Azure DNS Private Resolver</b> is a managed service. Its <b>inbound endpoint</b> receives queries from on-premises (through a conditional forwarder) and resolves them with the linked private zones. Its <b>outbound endpoint</b>, with a <b>forwarding ruleset</b>, sends queries for the on-premises domain to on-premises DNS.</p>",
 "portal": {
  "path": [
   "DNS private resolvers",
   "Create"
  ],
  "title": "Create a DNS private resolver",
  "rows": [
   [
    "*Inbound endpoint",
    "For on-premises"
   ],
   [
    "*Outbound endpoint",
    "+ forwarding ruleset to on-premises AD"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Hybrid DNS with no VMs = Azure DNS Private Resolver (inbound + outbound)."
},
{
 "id": "D4-063",
 "dom": 4,
 "type": "single",
 "stem": "<p>The root domain contoso.com, hosted in Azure DNS, must point to the Azure Front Door endpoint. A CNAME isn't allowed at a zone's root.</p><p>Which record type should you use?</p>",
 "opts": [
  "A TXT record",
  "An MX record",
  "An alias record to the Front Door resource",
  "A CNAME record at the root"
 ],
 "ans": 2,
 "expl": "<p>Azure DNS <b>alias record sets</b> point to an Azure resource (public IP address, Traffic Manager profile, Front Door or CDN endpoint) and can be used at the zone's <b>root</b>. They automatically follow changes to the resource's address.</p>",
 "portal": {
  "path": [
   "DNS zones",
   "contoso.com"
  ],
  "title": "Add record set",
  "rows": [
   [
    "Name",
    "@"
   ],
   [
    "*Alias record set",
    "Yes · Front Door"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Root to an Azure resource = alias record."
},
{
 "id": "D4-064",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate DNS record type for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Types",
 "srcs": [
  "A",
  "CNAME",
  "MX",
  "TXT",
  "NS"
 ],
 "tgtHead": [
  "Need",
  "Type"
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
