/* Domaine 4 : Réseau virtuel */
AZ.questions.push(
{
 "id": "D4-001",
 "dom": 4,
 "type": "single",
 "stem": "<p>You create in VNet1 a subnet named Subnet3 with the range 10.0.3.0/26.</p><p>How many IP addresses can be assigned to virtual machines in Subnet3?</p>",
 "opts": [
  "64",
  "62",
  "59",
  "251"
 ],
 "ans": 2,
 "expl": "<p>A <b>/26</b> prefix leaves 32 − 26 = 6 bits for hosts, so 2⁶ = <b>64</b> addresses.</p><p>Azure <b>reserves 5 addresses</b> in each subnet: the first (network address, .0), the next three (.1 default gateway, .2 and .3 for Azure DNS), and the last (broadcast, .63).</p><p>That leaves 64 − 5 = <b>59</b> usable addresses. (Not 62 as in classic networking, where only 2 addresses are removed.)</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Subnets",
  "menu": [
   "Overview",
   "Address space",
   "*Subnets"
  ],
  "rows": [
   [
    "*Subnet3",
    "10.0.3.0/26 · 59 available addresses"
   ],
   [
    "Reserved",
    "10.0.3.0 to .3, and 10.0.3.63"
   ]
  ],
  "btn": "+ Subnet"
 },
 "keep": "Usable addresses = 2^(32 − prefix) − 5. /24 = 251, /26 = 59, /27 = 27, /29 = 3."
},
{
 "id": "D4-002",
 "dom": 4,
 "type": "hot",
 "docs": [
  {
   "t": "NSG1",
   "h": "<p>Inbound security rules of NSG1 (associated with VM1's subnet, address 10.0.1.4):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Priority</th><th>Name</th><th>Port</th><th>Protocol</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>100</td><td>Rule1</td><td>3389</td><td>TCP</td><td>Internet</td><td>Any</td><td>Deny</td></tr><tr><td>200</td><td>Rule2</td><td>3389</td><td>TCP</td><td>VirtualNetwork</td><td>Any</td><td>Allow</td></tr><tr><td>300</td><td>Rule3</td><td>80,443</td><td>TCP</td><td>Any</td><td>Any</td><td>Allow</td></tr><tr><td>65000</td><td>AllowVnetInBound</td><td>Any</td><td>Any</td><td>VirtualNetwork</td><td>VirtualNetwork</td><td>Allow</td></tr><tr><td>65001</td><td>AllowAzureLoadBalancerInBound</td><td>Any</td><td>Any</td><td>AzureLoadBalancer</td><td>Any</td><td>Allow</td></tr><tr><td>65500</td><td>DenyAllInBound</td><td>Any</td><td>Any</td><td>Any</td><td>Any</td><td>Deny</td></tr></table></div>"
  }
 ],
 "stem": "<p>You have a virtual machine named VM1. The network security group NSG1 is configured as shown in the NSG1 document (click the <b>NSG1</b> tab).</p><p>What is the result of each connection to VM1? To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "RDP from an address on the internet:",
   "o": [
    "Allowed",
    "Denied"
   ],
   "a": 1
  },
  {
   "l": "RDP from VM2 (10.0.2.4), in the same VNet:",
   "o": [
    "Allowed",
    "Denied"
   ],
   "a": 0
  },
  {
   "l": "HTTP from an address on the internet:",
   "o": [
    "Allowed",
    "Denied"
   ],
   "a": 0
  }
 ],
 "expl": "<p>NSG rules are read in <b>ascending priority</b> (lowest number first). The <b>first rule that matches</b> the traffic decides; the rest are ignored.</p><ul><li><b>RDP from the internet: denied.</b> Rule1 (priority 100, source Internet, port 3389) matches: deny.</li><li><b>RDP from VM2: allowed.</b> Rule1 doesn't match (the source is VirtualNetwork, not Internet). Rule2 (priority 200, source VirtualNetwork) allows.</li><li><b>HTTP from the internet: allowed.</b> Rule1 and Rule2 only target port 3389. Rule3 (ports 80 and 443, any source) allows.</li></ul>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG1"
  ],
  "title": "NSG1 | Inbound security rules",
  "menu": [
   "Overview",
   "*Inbound security rules",
   "Outbound security rules"
  ],
  "rows": [
   [
    "*100 · Rule1",
    "3389 · Internet · Deny"
   ],
   [
    "200 · Rule2",
    "3389 · VirtualNetwork · Allow"
   ],
   [
    "300 · Rule3",
    "80,443 · Any · Allow"
   ],
   [
    "65500 · DenyAllInBound",
    "Deny"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "NSG: lowest priority first, first matching rule = decision."
},
{
 "id": "D4-003",
 "dom": 4,
 "type": "single",
 "stem": "<p>VNet1 is peered with VNet2. VNet2 is peered with VNet3. The address spaces don't overlap. VM1 (VNet1) can't reach VM3 (VNet3).</p><p>You need to enable communication between VM1 and VM3. The solution must minimize administrative effort.</p><p>What should you do?</p>",
 "opts": [
  "Enable gateway transit on the peerings",
  "Add a route to VNet3 in a route table of VNet1",
  "Create a peering between VNet1 and VNet3",
  "Move VM3 to VNet2"
 ],
 "ans": 2,
 "expl": "<p>Virtual network peering is <b>not transitive</b>: VNet1 ↔ VNet2 and VNet2 ↔ VNet3 don't give VNet1 ↔ VNet3. VNet2 doesn't relay traffic on its own.</p><p>The simplest solution is a <b>direct peering</b> between VNet1 and VNet3.</p><ul><li>A <b>route</b> to VNet3 would have no effect without a routing device in VNet2 (virtual appliance or gateway), to deploy and manage.</li><li><b>Gateway transit</b> is for sharing a VPN gateway, not for relaying between two peerings.</li><li><b>Moving VM3</b> would change the architecture.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Peerings",
  "menu": [
   "Overview",
   "*Peerings"
  ],
  "rows": [
   [
    "vnet1-to-vnet2",
    "Connected"
   ],
   [
    "*vnet1-to-vnet3",
    "To create (no transitivity)"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Non-transitive peering: direct peering, or a hub with an appliance/gateway that routes."
},
{
 "id": "D4-004",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You have two virtual networks: VNet1, which contains a VPN gateway connected to the on-premises site, and VNet2, which has no gateway.</p><p>You create a peering between VNet1 and VNet2. Virtual machines in VNet2 must reach the on-premises site by using VNet1's VPN gateway.</p><p>How should you configure the peering? To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "VNet1 | Add peering",
  "sub": "Virtual network",
  "rows": [
   {
    "k": "head",
    "t": "Remote virtual network settings (VNet2)"
   },
   {
    "k": "text",
    "l": "Peering link name",
    "t": "vnet2-to-vnet1"
   },
   {
    "k": "check",
    "l": "Allow “VNet2” to access “VNet1”",
    "d": true,
    "a": true
   },
   {
    "k": "check",
    "l": "Allow “VNet2” to receive forwarded traffic from “VNet1”",
    "d": false,
    "a": null
   },
   {
    "k": "check",
    "l": "Allow gateway in “VNet2” to forward traffic to “VNet1”",
    "d": false,
    "a": false
   },
   {
    "k": "check",
    "l": "Enable “VNet2” to use “VNet1's” remote gateway",
    "d": false,
    "a": true
   },
   {
    "k": "head",
    "t": "Local virtual network settings (VNet1)"
   },
   {
    "k": "text",
    "l": "Peering link name",
    "t": "vnet1-to-vnet2"
   },
   {
    "k": "check",
    "l": "Allow “VNet1” to access “VNet2”",
    "d": true,
    "a": true
   },
   {
    "k": "check",
    "l": "Allow “VNet1” to receive forwarded traffic from “VNet2”",
    "d": false,
    "a": null
   },
   {
    "k": "check",
    "l": "Allow gateway in “VNet1” to forward traffic to “VNet2”",
    "d": false,
    "a": true
   },
   {
    "k": "check",
    "l": "Enable “VNet1” to use “VNet2's” remote gateway",
    "d": false,
    "a": false
   }
  ]
 },
 "expl": "<p><b>Gateway transit</b> lets a network with no gateway use its neighbor's. It's set on both sides of the peering:</p><ul><li>On the <b>VNet1</b> side (which owns the gateway): check <b>Allow gateway in VNet1 to forward traffic to VNet2</b>. VNet1 “lends” its gateway.</li><li>On the <b>VNet2</b> side (no gateway): check <b>Enable VNet2 to use VNet1's remote gateway</b>. VNet2 “borrows”.</li></ul><p>Access between the two networks stays checked on both sides. The “forwarded traffic” boxes concern traffic relayed by an appliance: they're not scored here.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Peerings",
  "menu": [
   "Overview",
   "*Peerings"
  ],
  "rows": [
   [
    "*VNet1",
    "Allow gateway to forward traffic"
   ],
   [
    "*VNet2",
    "Use remote gateway"
   ]
  ]
 },
 "keep": "Gateway transit: the owner “allows the gateway”, the other “uses the remote gateway”."
},
{
 "id": "D4-005",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You create a route table named RT1, associated with Subnet1. A network virtual appliance (firewall) has the address 10.0.5.4. VNet1 is connected to the on-premises site by a VPN gateway.</p><p>Which next hop type should you use for each route? To answer, drag the appropriate type to each route. Each type may be used once, more than once, or not at all.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "srcLabel": "Next hop types",
 "tgtHead": [
  "Route",
  "Next hop"
 ],
 "srcs": [
  "Virtual appliance",
  "Virtual network gateway",
  "Internet",
  "Virtual network",
  "None"
 ],
 "tgts": [
  {
   "l": "0.0.0.0/0: all internet traffic must be inspected by the firewall",
   "a": 0
  },
  {
   "l": "192.168.0.0/16: traffic to the on-premises site",
   "a": 1
  },
  {
   "l": "10.50.0.0/16: all traffic to this network must be blocked",
   "a": 4
  }
 ],
 "expl": "<p>Next hop types for a custom route:</p><ul><li><b>Virtual appliance</b>: sends traffic to an IP address (firewall, router). You must specify the address (10.0.5.4) and enable <b>IP forwarding</b> on the appliance's network interface.</li><li><b>Virtual network gateway</b>: sends to the VPN gateway, so the on-premises site.</li><li><b>None</b>: packets are dropped. That's how you block a destination through routing.</li></ul><p>Internet and Virtual network also exist, but don't match these needs.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT1"
  ],
  "title": "RT1 | Routes",
  "menu": [
   "Overview",
   "*Routes",
   "Subnets"
  ],
  "rows": [
   [
    "*0.0.0.0/0",
    "Virtual appliance · 10.0.5.4"
   ],
   [
    "192.168.0.0/16",
    "Virtual network gateway"
   ],
   [
    "10.50.0.0/16",
    "None"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Firewall = Virtual appliance (+ IP forwarding). On-premises = Gateway. Block = None."
},
{
 "id": "D4-006",
 "dom": 4,
 "type": "single",
 "stem": "<p>Your on-premises site is connected to VNet1 by a site-to-site VPN. Users at the site must access the storage account storage1 through a private IP address. Public access to storage1 must be disabled.</p><p>What should you create?</p>",
 "opts": [
  "A service endpoint on a subnet of VNet1",
  "A Standard public IP address for storage1",
  "A storage1 firewall rule with the site's public address",
  "A private endpoint for storage1 in VNet1"
 ],
 "ans": 3,
 "expl": "<p>A <b>private endpoint</b> creates a network interface with a <b>private IP address</b> from VNet1 for storage1. The on-premises site reaches it through the VPN. You can then disable public access. You need DNS resolution to the private address (privatelink.blob.core.windows.net zone and DNS forwarding from on-premises).</p><p>A <b>service endpoint</b> only benefits traffic leaving an Azure subnet, and the account keeps its public address. A firewall rule with the site's public IP would go over the internet.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Private endpoint",
    "VNet1 · 10.0.4.5"
   ],
   [
    "Public network access",
    "Disabled"
   ]
  ],
  "btn": "+ Private endpoint"
 },
 "keep": "Private access from on-premises = private endpoint + DNS."
},
{
 "id": "D4-007",
 "dom": 4,
 "type": "single",
 "stem": "<p>You will deploy Azure Bastion in VNet1.</p><p>Which subnet should you create?</p>",
 "opts": [
  "BastionSubnet, with a /27 prefix",
  "GatewaySubnet, with a /26 prefix",
  "AzureBastionSubnet, with a /26 prefix",
  "AzureBastionSubnet, with a /29 prefix"
 ],
 "ans": 2,
 "expl": "<p>Azure Bastion requires a subnet with the <b>exact</b> name <b>AzureBastionSubnet</b>, at least <b>/26</b> in size. Bastion is deployed there and provides RDP and SSH through the portal, with no public IP address on the VMs.</p><p>Other reserved subnets to know: <b>GatewaySubnet</b> (VPN and ExpressRoute gateways) and <b>AzureFirewallSubnet</b> (Azure Firewall, /26 minimum).</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Subnets › Add",
  "menu": [
   "*Subnets"
  ],
  "rows": [
   [
    "*Subnet purpose",
    "Azure Bastion"
   ],
   [
    "*Name",
    "AzureBastionSubnet"
   ],
   [
    "*Size",
    "/26 minimum"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Bastion = AzureBastionSubnet /26; VPN = GatewaySubnet; Firewall = AzureFirewallSubnet /26."
},
{
 "id": "D4-008",
 "dom": 4,
 "type": "single",
 "stem": "<p>You have two peered virtual networks, VNet1 and VNet2. Virtual machines in both networks must be registered automatically and reach each other by name in the contoso.local domain.</p><p>The solution must minimize administrative effort. What should you use?</p>",
 "opts": [
  "A contoso.local public DNS zone",
  "A contoso.local private DNS zone with one virtual network link per VNet, autoregistration enabled",
  "A DNS server on a virtual machine in VNet1",
  "Azure-provided name resolution"
 ],
 "ans": 1,
 "expl": "<p>A <b>private DNS zone</b> contoso.local, with a <b>virtual network link</b> to VNet1 and to VNet2, and <b>autoregistration</b> enabled on the links: each VM is registered automatically, and all VMs in both networks resolve names in the zone.</p><ul><li><b>Azure-provided resolution</b> only works within a single virtual network.</li><li>A <b>DNS server on a VM</b> works but requires administration.</li><li>A <b>public zone</b> is resolved on the internet, not suited to internal names.</li></ul>",
 "portal": {
  "path": [
   "Private DNS zones",
   "contoso.local"
  ],
  "title": "contoso.local | Virtual network links",
  "menu": [
   "Overview",
   "Recordsets",
   "*Virtual network links"
  ],
  "rows": [
   [
    "*link-vnet1",
    "VNet1 · Auto registration: Enabled"
   ],
   [
    "*link-vnet2",
    "VNet2 · Auto registration: Enabled"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Internal names across VNets = private DNS zone + links + autoregistration."
},
{
 "id": "D4-009",
 "dom": 4,
 "type": "multi",
 "pick": 2,
 "stem": "<p>A Standard public load balancer named LB1 distributes HTTPS traffic to VM1 and VM2. The site responds correctly locally on each VM, but LB1 no longer sends any traffic to either VM.</p><p>What are two possible causes? Each correct answer presents a complete solution.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "opts": [
  "The health probe queries an incorrect port or path",
  "LB1's public IP address is static",
  "An NSG blocks the probe traffic or port 443 to the VMs",
  "No private DNS zone is linked to VNet1"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<p>A load balancer only sends traffic to instances that its <b>health probe</b> considers healthy.</p><ul><li><b>Misconfigured probe: yes.</b> If it queries the wrong port or path, all VMs are considered failed and removed from rotation.</li><li><b>Blocking NSG: yes.</b> The Standard load balancer is “closed by default”: an NSG must allow the application port (443) and probe traffic (AzureLoadBalancer service tag, allowed by the default rule unless a higher-priority rule blocks it).</li><li>A <b>static IP</b> is normal (required in Standard). <b>Private DNS</b> plays no role.</li></ul>",
 "portal": {
  "path": [
   "Load balancers",
   "LB1"
  ],
  "title": "LB1 | Health probes",
  "menu": [
   "Overview",
   "Backend pools",
   "*Health probes",
   "Load balancing rules"
  ],
  "rows": [
   [
    "*probe-https",
    "HTTPS · port 443 · path /health"
   ],
   [
    "Instance health",
    "0 / 2 healthy"
   ]
  ]
 },
 "keep": "No more traffic to the VMs = misconfigured probe or blocking NSG."
}
);
