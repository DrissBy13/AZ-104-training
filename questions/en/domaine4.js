/* Domaine 4 : Réseau virtuel */
AZ.questions.push(
{
 "id": "D4-002",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You have a virtual machine named VM1. The network security group NSG1 is configured as shown in the NSG1 document (click the <b>NSG1</b> tab).</p><p>What is the result of each connection to VM1? To answer, select the appropriate options in the answer area.</p>",
 "docs": [
  {
   "t": "NSG1",
   "h": "<p>Inbound security rules of NSG1 (associated with VM1's subnet, address 10.0.1.4):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Priority</th><th>Name</th><th>Port</th><th>Protocol</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>100</td><td>Rule1</td><td>3389</td><td>TCP</td><td>Internet</td><td>Any</td><td>Deny</td></tr><tr><td>200</td><td>Rule2</td><td>3389</td><td>TCP</td><td>VirtualNetwork</td><td>Any</td><td>Allow</td></tr><tr><td>300</td><td>Rule3</td><td>80,443</td><td>TCP</td><td>Any</td><td>Any</td><td>Allow</td></tr><tr><td>65000</td><td>AllowVnetInBound</td><td>Any</td><td>Any</td><td>VirtualNetwork</td><td>VirtualNetwork</td><td>Allow</td></tr><tr><td>65001</td><td>AllowAzureLoadBalancerInBound</td><td>Any</td><td>Any</td><td>AzureLoadBalancer</td><td>Any</td><td>Allow</td></tr><tr><td>65500</td><td>DenyAllInBound</td><td>Any</td><td>Any</td><td>Any</td><td>Any</td><td>Deny</td></tr></table></div>"
  }
 ],
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
 "id": "D4-004",
 "dom": 4,
 "type": "screen",
 "stem": "<p>You have two virtual networks: VNet1, which contains a VPN gateway connected to the on-premises site, and VNet2, which has no gateway.</p><p>You create a peering between VNet1 and VNet2. Virtual machines in VNet2 must reach the on-premises site by using VNet1's VPN gateway.</p><p>How should you configure the peering? To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Gateway transit: the owner “allows the gateway”, the other “uses the remote gateway”.",
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
 }
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
 "id": "D4-009",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>A Standard public load balancer named LB1 distributes HTTPS traffic to VM1 and VM2. The site responds correctly locally on each VM, but LB1 no longer sends any traffic to either VM.</p><p>For each of the following, select Yes if it's a possible cause. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The health probe queries an incorrect port or path",
   "a": 0
  },
  {
   "l": "LB1's frontend public IP address is static, not dynamic",
   "a": 1
  },
  {
   "l": "An NSG blocks the probe or port 443 to the VMs",
   "a": 0
  },
  {
   "l": "No private DNS zone is linked to the VNet1 virtual network",
   "a": 1
  }
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
