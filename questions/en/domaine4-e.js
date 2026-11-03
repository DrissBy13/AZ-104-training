/* Domain 4: virtual networking (batch E: D4-201 to D4-222, exam-style exhibit questions) */
AZ.questions.push(
{
 "id": "D4-201",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Networks exhibit (click the <b>Networks</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Networks",
   "h": "<p><b>Virtual networks</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Region</th><th>Address space</th><th>Subscription</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contains the VPN gateway <b>VPNGW1</b> (route-based), connected to the on-premises site 192.168.0.0/16 by a site-to-site connection with <b>BGP enabled</b>. VNet-Hub also contains the network virtual appliance <b>NVA1</b> (10.0.1.4).</p><p><b>Peerings</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Peering</th><th>From → to</th><th>Allow forwarded traffic</th><th>Gateway transit</th><th>Use remote gateway</th><th>Status</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>No</td><td>No</td><td>Yes</td><td>Connected</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>No</td><td>No</td><td>No</td><td>Connected</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>No</td><td>Yes</td><td>No</td><td>Initiated</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A VM in VNet-A can reach an on-premises server (192.168.1.10) through VPNGW1.",
   "a": 0
  },
  {
   "l": "A VM in VNet-B can reach an on-premises server (192.168.1.10) through VPNGW1.",
   "a": 1
  },
  {
   "l": "A VM in VNet-A can communicate with a VM in VNet-B.",
   "a": 1
  },
  {
   "l": "A VM in VNet-C can communicate with a VM in VNet-Hub.",
   "a": 1
  }
 ],
 "expl": "<p>Gateway sharing needs <b>two matching settings</b>: “Allow gateway transit” on the hub-to-spoke peering, and “Use remote gateway” on the spoke-to-hub peering.</p><ul><li><b>VNet-A → on-premises: Yes.</b> Hub-A allows transit and A-Hub uses the remote gateway. With BGP, VPNGW1 also advertises 10.1.0.0/16 to on-premises, so return traffic works.</li><li><b>VNet-B → on-premises: No.</b> Hub-B does allow transit, but B-Hub doesn't have “Use remote gateway”. VNet-B being in another region and subscription isn't the issue: gateway transit also works with global peering.</li><li><b>VNet-A ↔ VNet-B: No.</b> Peering isn't transitive. You'd need a direct peering, or routes to NVA1 with forwarded traffic allowed.</li><li><b>VNet-C ↔ VNet-Hub: No.</b> Hub-C is <b>Initiated</b>: the reverse peering VNet-C → VNet-Hub doesn't exist. No traffic flows until both sides exist (Connected status).</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-Hub"
  ],
  "title": "VNet-Hub | Peerings",
  "menu": [
   "Overview",
   "Address space",
   "*Peerings"
  ],
  "rows": [
   [
    "Hub-A",
    "Connected · gateway transit"
   ],
   [
    "Hub-B",
    "Connected · global · gateway transit"
   ],
   [
    "*Hub-C",
    "Initiated (no reverse peering)"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Transit = “Allow gateway transit” on the hub + “Use remote gateway” on the spoke. “Initiated” = nothing flows."
},
{
 "id": "D4-202",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Networks exhibit (click the <b>Networks</b> tab).</p><p>The VMs in VNet-B must reach the on-premises site through VPNGW1. The solution must minimize administrative effort.</p><p>What should you change?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Networks",
   "h": "<p><b>Virtual networks</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Region</th><th>Address space</th><th>Subscription</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contains the VPN gateway <b>VPNGW1</b> (route-based), connected to the on-premises site 192.168.0.0/16 by a site-to-site connection with <b>BGP enabled</b>. VNet-Hub also contains the network virtual appliance <b>NVA1</b> (10.0.1.4).</p><p><b>Peerings</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Peering</th><th>From → to</th><th>Allow forwarded traffic</th><th>Gateway transit</th><th>Use remote gateway</th><th>Status</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>No</td><td>No</td><td>Yes</td><td>Connected</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>No</td><td>No</td><td>No</td><td>Connected</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>No</td><td>Yes</td><td>No</td><td>Initiated</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Peering to change:",
   "o": [
    "Hub-B",
    "B-Hub",
    "Hub-A",
    "Both peerings between VNet-Hub and VNet-B"
   ],
   "a": 1
  },
  {
   "l": "Setting to enable:",
   "o": [
    "Allow forwarded traffic",
    "Allow gateway transit",
    "Use remote gateway",
    "Allow access to the remote virtual network"
   ],
   "a": 2
  }
 ],
 "expl": "<p>On the hub side, <b>Hub-B</b> already allows gateway transit. The spoke-side setting is missing: on <b>B-Hub</b> (the peering from VNet-B to VNet-Hub), enable <b>Use remote gateway</b>.</p><ul><li>“Allow forwarded traffic” is for traffic relayed by an appliance (NVA), not for gateway sharing.</li><li>“Use remote gateway” is only possible if VNet-B doesn't have its own gateway, which is the case here.</li><li>With BGP on the site-to-site connection, the on-premises site learns 10.2.0.0/16 automatically.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-B",
   "Peerings"
  ],
  "title": "B-Hub | Settings",
  "menu": [
   "*Peering settings"
  ],
  "rows": [
   [
    "Allow forwarded traffic",
    "No"
   ],
   [
    "*Use remote gateway",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "“Use remote gateway” goes on the spoke-to-hub peering."
},
{
 "id": "D4-203",
 "dom": 4,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Networks exhibit (click the <b>Networks</b> tab).</p><p>You need to create a peering between VNet-D and another virtual network.</p><p>With which <b>two</b> virtual networks can the peering be created?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Networks",
   "h": "<p><b>Virtual networks</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Region</th><th>Address space</th><th>Subscription</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contains the VPN gateway <b>VPNGW1</b> (route-based), connected to the on-premises site 192.168.0.0/16 by a site-to-site connection with <b>BGP enabled</b>. VNet-Hub also contains the network virtual appliance <b>NVA1</b> (10.0.1.4).</p><p><b>Peerings</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Peering</th><th>From → to</th><th>Allow forwarded traffic</th><th>Gateway transit</th><th>Use remote gateway</th><th>Status</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>No</td><td>No</td><td>Yes</td><td>Connected</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>No</td><td>No</td><td>No</td><td>Connected</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>No</td><td>Yes</td><td>No</td><td>Initiated</td></tr></table></div>"
  }
 ],
 "opts": [
  "VNet-Hub",
  "VNet-A",
  "VNet-B",
  "VNet-C"
 ],
 "ans": [
  2,
  3
 ],
 "pick": 2,
 "expl": "<p>VNet-D (10.1.128.0/17) <b>overlaps</b> VNet-A (10.1.0.0/16).</p><ul><li><b>VNet-A: no.</b> Two networks with overlapping spaces can't be peered.</li><li><b>VNet-Hub: no.</b> D and the hub don't overlap, but the hub is already peered with VNet-A. Azure won't let a network be peered with two overlapping networks: the hub wouldn't know where to send 10.1.128.0/17.</li><li><b>VNet-B: yes.</b> B is only peered with the hub (10.0.0.0/16), with no overlap. A different region and subscription is allowed (global, cross-subscription peering).</li><li><b>VNet-C: yes.</b> C has no connected peering on its side yet (Hub-C is only initiated from the hub), and 10.3.0.0/16 doesn't overlap D.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-D"
  ],
  "title": "VNet-D | Peerings",
  "menu": [
   "*Peerings"
  ],
  "rows": [
   [
    "VNet-Hub",
    "Refused: already peered with VNet-A (overlap)"
   ],
   [
    "*VNet-B",
    "Possible"
   ],
   [
    "*VNet-C",
    "Possible"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "No overlap with the peered network AND with the networks already peered with it."
},
{
 "id": "D4-204",
 "dom": 4,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Networks exhibit (click the <b>Networks</b> tab).</p><p>The VMs in VNet-A and VNet-B must communicate with each other through NVA1. IP forwarding is already enabled on NVA1's network interface and in its operating system.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Networks",
   "h": "<p><b>Virtual networks</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Region</th><th>Address space</th><th>Subscription</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contains the VPN gateway <b>VPNGW1</b> (route-based), connected to the on-premises site 192.168.0.0/16 by a site-to-site connection with <b>BGP enabled</b>. VNet-Hub also contains the network virtual appliance <b>NVA1</b> (10.0.1.4).</p><p><b>Peerings</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Peering</th><th>From → to</th><th>Allow forwarded traffic</th><th>Gateway transit</th><th>Use remote gateway</th><th>Status</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>No</td><td>No</td><td>Yes</td><td>Connected</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>No</td><td>No</td><td>No</td><td>Connected</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>No</td><td>Yes</td><td>No</td><td>Initiated</td></tr></table></div>"
  }
 ],
 "opts": [
  "Enable “Allow forwarded traffic” on the A-Hub and B-Hub peerings",
  "Associate UDRs to 10.0.1.4 with the VNet-A and VNet-B subnets",
  "Enable gateway transit on the A-Hub and B-Hub peerings",
  "Create a direct peering between VNet-A and VNet-B, besides the hub"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<ul><li><b>Routes: yes.</b> Without UDRs, a VM in VNet-A has no route to 10.2.0.0/16. A route table in VNet-A (10.2.0.0/16 → Virtual appliance 10.0.1.4) and one in VNet-B (10.1.0.0/16 → 10.0.1.4) send the traffic to NVA1.</li><li><b>Forwarded traffic: yes.</b> The traffic NVA1 sends on to VNet-B doesn't originate in VNet-Hub itself (its source is 10.1.x.x). VNet-B only accepts it if the peering on its side (<b>B-Hub</b>) allows forwarded traffic; the same applies to A-Hub in the other direction.</li><li>Gateway transit is about the VPN gateway, not an NVA, and isn't set on the spoke's peering.</li><li>A direct peering would let A and B communicate <b>without</b> going through NVA1, which breaks the requirement.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-B",
   "Peerings"
  ],
  "title": "B-Hub | Settings",
  "menu": [
   "*Peering settings"
  ],
  "rows": [
   [
    "*Allow forwarded traffic",
    "Yes"
   ],
   [
    "Use remote gateway",
    "No"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Spoke ↔ spoke through an NVA = UDR to the NVA + “forwarded traffic” on the spokes + IP forwarding."
},
{
 "id": "D4-205",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Security exhibit (click the <b>Security</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Security",
   "h": "<p>VNet1 (10.0.0.0/16) contains Subnet1 (10.0.1.0/24) and Subnet2 (10.0.2.0/24). VNet2 is another virtual network in the same region.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Subnet</th><th>Private address</th><th>Public IP</th><th>Interface NSG</th><th>Application security group</th></tr><tr><td>VM1</td><td>VNet1/Subnet1</td><td>10.0.1.4</td><td>Standard</td><td>NSG-VM1</td><td>ASG-Web</td></tr><tr><td>VM2</td><td>VNet1/Subnet1</td><td>10.0.1.5</td><td>Standard</td><td>—</td><td>ASG-Web</td></tr><tr><td>VM3</td><td>VNet1/Subnet2</td><td>10.0.2.4</td><td>—</td><td>—</td><td>ASG-Data</td></tr><tr><td>VM4</td><td>VNet1/Subnet2</td><td>10.0.2.5</td><td>Standard</td><td>—</td><td>—</td></tr><tr><td>VM5</td><td>VNet2/Subnet1</td><td>10.1.1.4</td><td>—</td><td>—</td><td>—</td></tr></table></div><p>Only <b>Subnet1</b> has an NSG: <b>NSG-S1</b>. Custom inbound security rules (in addition to the default rules):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>NSG</th><th>Priority</th><th>Port</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>NSG-S1</td><td>100</td><td>TCP 443</td><td>Internet</td><td>ASG-Web</td><td>Allow</td></tr><tr><td>NSG-S1</td><td>200</td><td>TCP 3389</td><td>Any</td><td>Any</td><td>Deny</td></tr><tr><td>NSG-S1</td><td>300</td><td>TCP 3389</td><td>10.0.2.0/24</td><td>Any</td><td>Allow</td></tr><tr><td>NSG-VM1</td><td>100</td><td>TCP 3389</td><td>VirtualNetwork</td><td>Any</td><td>Allow</td></tr><tr><td>NSG-VM1</td><td>110</td><td>TCP 443</td><td>Internet</td><td>Any</td><td>Deny</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A client on the internet can reach VM2 over HTTPS (TCP 443) through its public IP address.",
   "a": 0
  },
  {
   "l": "A client on the internet can reach VM1 over HTTPS (TCP 443) through its public IP address.",
   "a": 1
  },
  {
   "l": "VM3 can connect to VM2 over RDP (TCP 3389).",
   "a": 1
  },
  {
   "l": "VM2 can connect to VM1 over RDP (TCP 3389).",
   "a": 1
  }
 ],
 "expl": "<p>For inbound traffic, Azure evaluates the <b>subnet</b> NSG first, then the <b>interface</b> NSG. Both must allow. In each NSG, the first matching rule (lowest priority number) decides.</p><ul><li><b>Internet → VM2 on 443: Yes.</b> NSG-S1 rule 100 (Internet to ASG-Web, which VM2 belongs to) allows. VM2 has no interface NSG.</li><li><b>Internet → VM1 on 443: No.</b> NSG-S1 allows (rule 100), but NSG-VM1 denies: its rule 100 only covers 3389, and its rule 110 denies 443 from Internet.</li><li><b>VM3 → VM2 over RDP: No.</b> In NSG-S1, rule 200 (deny 3389 from any) takes precedence over rule 300, which allows 10.0.2.0/24. Rule 300 is never reached.</li><li><b>VM2 → VM1 over RDP: No.</b> Trap: a subnet NSG also applies to traffic <b>between two VMs in the same subnet</b>. NSG-S1 rule 200 denies before NSG-VM1 is evaluated.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1",
   "Networking"
  ],
  "title": "VM1 | Effective security rules",
  "menu": [
   "Overview",
   "Network settings",
   "*Effective security rules"
  ],
  "rows": [
   [
    "NSG-S1 (subnet)",
    "evaluated first for inbound traffic"
   ],
   [
    "*NSG-VM1 (interface)",
    "evaluated next: both must allow"
   ]
  ]
 },
 "keep": "Inbound: subnet NSG, then interface NSG. A subnet NSG also filters intra-subnet traffic."
},
{
 "id": "D4-206",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Security exhibit (click the <b>Security</b> tab).</p><p>VM3 opens a TCP 443 connection to VM1 (10.0.1.4).</p><p>What's the result, and which rules decide in each NSG?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Security",
   "h": "<p>VNet1 (10.0.0.0/16) contains Subnet1 (10.0.1.0/24) and Subnet2 (10.0.2.0/24). VNet2 is another virtual network in the same region.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Subnet</th><th>Private address</th><th>Public IP</th><th>Interface NSG</th><th>Application security group</th></tr><tr><td>VM1</td><td>VNet1/Subnet1</td><td>10.0.1.4</td><td>Standard</td><td>NSG-VM1</td><td>ASG-Web</td></tr><tr><td>VM2</td><td>VNet1/Subnet1</td><td>10.0.1.5</td><td>Standard</td><td>—</td><td>ASG-Web</td></tr><tr><td>VM3</td><td>VNet1/Subnet2</td><td>10.0.2.4</td><td>—</td><td>—</td><td>ASG-Data</td></tr><tr><td>VM4</td><td>VNet1/Subnet2</td><td>10.0.2.5</td><td>Standard</td><td>—</td><td>—</td></tr><tr><td>VM5</td><td>VNet2/Subnet1</td><td>10.1.1.4</td><td>—</td><td>—</td><td>—</td></tr></table></div><p>Only <b>Subnet1</b> has an NSG: <b>NSG-S1</b>. Custom inbound security rules (in addition to the default rules):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>NSG</th><th>Priority</th><th>Port</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>NSG-S1</td><td>100</td><td>TCP 443</td><td>Internet</td><td>ASG-Web</td><td>Allow</td></tr><tr><td>NSG-S1</td><td>200</td><td>TCP 3389</td><td>Any</td><td>Any</td><td>Deny</td></tr><tr><td>NSG-S1</td><td>300</td><td>TCP 3389</td><td>10.0.2.0/24</td><td>Any</td><td>Allow</td></tr><tr><td>NSG-VM1</td><td>100</td><td>TCP 3389</td><td>VirtualNetwork</td><td>Any</td><td>Allow</td></tr><tr><td>NSG-VM1</td><td>110</td><td>TCP 443</td><td>Internet</td><td>Any</td><td>Deny</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Deciding rule in NSG-S1:",
   "o": [
    "100",
    "300",
    "AllowVnetInBound (65000)",
    "DenyAllInBound (65500)"
   ],
   "a": 2
  },
  {
   "l": "Deciding rule in NSG-VM1:",
   "o": [
    "100",
    "110",
    "AllowVnetInBound (65000)",
    "DenyAllInBound (65500)"
   ],
   "a": 2
  },
  {
   "l": "Connection result:",
   "o": [
    "Allowed",
    "Denied"
   ],
   "a": 0
  }
 ],
 "expl": "<p>The source is 10.0.2.4: it belongs to the <b>VirtualNetwork</b> tag, not <b>Internet</b>.</p><ul><li><b>NSG-S1:</b> rule 100 only targets the Internet source; rules 200 and 300 only target 3389. The first matching rule is the default rule <b>AllowVnetInBound</b>: allowed.</li><li><b>NSG-VM1:</b> rule 100 only targets 3389, and rule 110 only the Internet source. <b>AllowVnetInBound</b> allows.</li><li>Both NSGs allow: the connection goes through.</li></ul>",
 "portal": {
  "path": [
   "Network Watcher",
   "IP flow verify"
  ],
  "title": "Network Watcher | IP flow verify",
  "menu": [
   "Topology",
   "*IP flow verify",
   "Next hop"
  ],
  "rows": [
   [
    "VM1 · inbound · TCP 10.0.2.4 → 10.0.1.4:443",
    "Access allowed"
   ],
   [
    "*Rule",
    "AllowVnetInBound"
   ]
  ],
  "btn": "Check"
 },
 "keep": "A VNet address isn't “Internet”: a rule with an Internet source doesn't apply to it."
},
{
 "id": "D4-207",
 "dom": 4,
 "type": "single",
 "stem": "<p>You have the environment shown in the Security exhibit (click the <b>Security</b> tab).</p><p>Administrators working from Subnet2 must be able to connect to VM2 over RDP. No other traffic flow must change.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Security",
   "h": "<p>VNet1 (10.0.0.0/16) contains Subnet1 (10.0.1.0/24) and Subnet2 (10.0.2.0/24). VNet2 is another virtual network in the same region.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Subnet</th><th>Private address</th><th>Public IP</th><th>Interface NSG</th><th>Application security group</th></tr><tr><td>VM1</td><td>VNet1/Subnet1</td><td>10.0.1.4</td><td>Standard</td><td>NSG-VM1</td><td>ASG-Web</td></tr><tr><td>VM2</td><td>VNet1/Subnet1</td><td>10.0.1.5</td><td>Standard</td><td>—</td><td>ASG-Web</td></tr><tr><td>VM3</td><td>VNet1/Subnet2</td><td>10.0.2.4</td><td>—</td><td>—</td><td>ASG-Data</td></tr><tr><td>VM4</td><td>VNet1/Subnet2</td><td>10.0.2.5</td><td>Standard</td><td>—</td><td>—</td></tr><tr><td>VM5</td><td>VNet2/Subnet1</td><td>10.1.1.4</td><td>—</td><td>—</td><td>—</td></tr></table></div><p>Only <b>Subnet1</b> has an NSG: <b>NSG-S1</b>. Custom inbound security rules (in addition to the default rules):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>NSG</th><th>Priority</th><th>Port</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>NSG-S1</td><td>100</td><td>TCP 443</td><td>Internet</td><td>ASG-Web</td><td>Allow</td></tr><tr><td>NSG-S1</td><td>200</td><td>TCP 3389</td><td>Any</td><td>Any</td><td>Deny</td></tr><tr><td>NSG-S1</td><td>300</td><td>TCP 3389</td><td>10.0.2.0/24</td><td>Any</td><td>Allow</td></tr><tr><td>NSG-VM1</td><td>100</td><td>TCP 3389</td><td>VirtualNetwork</td><td>Any</td><td>Allow</td></tr><tr><td>NSG-VM1</td><td>110</td><td>TCP 443</td><td>Internet</td><td>Any</td><td>Deny</td></tr></table></div>"
  }
 ],
 "opts": [
  "Change the priority of NSG-S1 rule 300 to 150",
  "Add a rule to NSG-VM1 that allows 3389 from 10.0.2.0/24",
  "Delete NSG-S1 rule 200 and keep rule 300",
  "Associate an NSG with Subnet2 that allows outbound 3389"
 ],
 "ans": 0,
 "expl": "<p>Rule 300 (3389 from 10.0.2.0/24) is shadowed by rule 200 (deny 3389 from any). Giving it a priority <b>higher than 200</b> (150) gets it evaluated before the deny. All other RDP traffic stays denied.</p><ul><li>NSG-VM1 is <b>VM1's</b> interface NSG, not VM2's. And an allow in an interface NSG doesn't override a deny in the subnet NSG.</li><li>Deleting rule 200 would let RDP through from the whole virtual network (default rule AllowVnetInBound): other flows change.</li><li>Subnet2 has no NSG, so its outbound traffic is already allowed; the block is inbound, in NSG-S1.</li></ul>",
 "portal": {
  "path": [
   "Network security groups",
   "NSG-S1"
  ],
  "title": "NSG-S1 | Inbound security rules",
  "menu": [
   "Overview",
   "*Inbound security rules",
   "Subnets"
  ],
  "rows": [
   [
    "100 · 443 · Internet → ASG-Web",
    "Allow"
   ],
   [
    "*150 · 3389 · 10.0.2.0/24",
    "Allow"
   ],
   [
    "200 · 3389 · Any",
    "Deny"
   ]
  ]
 },
 "keep": "A rule shadowed by a higher-priority deny does nothing: change its priority."
},
{
 "id": "D4-208",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Security exhibit (click the <b>Security</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Security",
   "h": "<p>VNet1 (10.0.0.0/16) contains Subnet1 (10.0.1.0/24) and Subnet2 (10.0.2.0/24). VNet2 is another virtual network in the same region.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Subnet</th><th>Private address</th><th>Public IP</th><th>Interface NSG</th><th>Application security group</th></tr><tr><td>VM1</td><td>VNet1/Subnet1</td><td>10.0.1.4</td><td>Standard</td><td>NSG-VM1</td><td>ASG-Web</td></tr><tr><td>VM2</td><td>VNet1/Subnet1</td><td>10.0.1.5</td><td>Standard</td><td>—</td><td>ASG-Web</td></tr><tr><td>VM3</td><td>VNet1/Subnet2</td><td>10.0.2.4</td><td>—</td><td>—</td><td>ASG-Data</td></tr><tr><td>VM4</td><td>VNet1/Subnet2</td><td>10.0.2.5</td><td>Standard</td><td>—</td><td>—</td></tr><tr><td>VM5</td><td>VNet2/Subnet1</td><td>10.1.1.4</td><td>—</td><td>—</td><td>—</td></tr></table></div><p>Only <b>Subnet1</b> has an NSG: <b>NSG-S1</b>. Custom inbound security rules (in addition to the default rules):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>NSG</th><th>Priority</th><th>Port</th><th>Source</th><th>Destination</th><th>Action</th></tr><tr><td>NSG-S1</td><td>100</td><td>TCP 443</td><td>Internet</td><td>ASG-Web</td><td>Allow</td></tr><tr><td>NSG-S1</td><td>200</td><td>TCP 3389</td><td>Any</td><td>Any</td><td>Deny</td></tr><tr><td>NSG-S1</td><td>300</td><td>TCP 3389</td><td>10.0.2.0/24</td><td>Any</td><td>Allow</td></tr><tr><td>NSG-VM1</td><td>100</td><td>TCP 3389</td><td>VirtualNetwork</td><td>Any</td><td>Allow</td></tr><tr><td>NSG-VM1</td><td>110</td><td>TCP 443</td><td>Internet</td><td>Any</td><td>Deny</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "If you add VM4's interface to ASG-Web, a client on the internet will be able to reach VM4 over HTTPS.",
   "a": 1
  },
  {
   "l": "You can add VM5's network interface to ASG-Web.",
   "a": 1
  },
  {
   "l": "You can associate NSG-S1 with Subnet2 without dissociating it from Subnet1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM4 in ASG-Web: No.</b> VM4 is in Subnet2, which has <b>no</b> NSG, and neither does its interface: NSG-S1 rule 100 doesn't apply to it. And a <b>Standard</b> public IP address is closed to inbound traffic until an NSG allows it. ASG membership only matters in NSGs that reference the group.</li><li><b>VM5 in ASG-Web: No.</b> All interfaces in an application security group must be in <b>the same virtual network</b>. ASG-Web already holds interfaces from VNet1; VM5 is in VNet2.</li><li><b>NSG-S1 on two subnets: Yes.</b> One NSG can be associated with several subnets (and interfaces) in the same region.</li></ul>",
 "portal": {
  "path": [
   "Application security groups",
   "ASG-Web"
  ],
  "title": "ASG-Web | Network interfaces",
  "menu": [
   "Overview",
   "*Network interfaces"
  ],
  "rows": [
   [
    "vm1-nic",
    "VNet1/Subnet1"
   ],
   [
    "vm2-nic",
    "VNet1/Subnet1"
   ],
   [
    "*vm5-nic",
    "Refused: different virtual network (VNet2)"
   ]
  ]
 },
 "keep": "ASG = one VNet only. Standard public IP without an allowing NSG = closed."
},
{
 "id": "D4-209",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Routing exhibit (click the <b>Routing</b> tab).</p><p>VM-A (Subnet1) sends packets to the destinations below.</p><p>What's the next hop for each destination?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Routing",
   "h": "<p>VNet1 (10.0.0.0/16) is peered with VNet2 (10.1.0.0/16). VNet1's VPN gateway learns the on-premises network <b>192.168.0.0/16</b> through BGP.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Subnet</th><th>Range</th><th>Route table</th><th>Contents</th></tr><tr><td>Subnet1</td><td>10.0.1.0/24</td><td>RT1</td><td>VM-A (10.0.1.4)</td></tr><tr><td>Subnet2</td><td>10.0.2.0/24</td><td>—</td><td>VM-B (10.0.2.4)</td></tr><tr><td>Subnet3</td><td>10.0.3.0/24</td><td>—</td><td>NVA1 (10.0.3.4), IP forwarding enabled</td></tr><tr><td>GatewaySubnet</td><td>10.0.255.0/27</td><td>—</td><td>VPN gateway</td></tr></table></div><p><b>RT1</b> — Propagate gateway routes: <b>No</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Prefix</th><th>Next hop type</th><th>Next hop address</th></tr><tr><td>R1</td><td>0.0.0.0/0</td><td>Virtual appliance</td><td>10.0.3.4</td></tr><tr><td>R2</td><td>10.1.0.0/16</td><td>None</td><td>—</td></tr><tr><td>R3</td><td>10.1.5.0/24</td><td>Virtual appliance</td><td>10.0.3.4</td></tr><tr><td>R4</td><td>192.168.10.0/24</td><td>Internet</td><td>—</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "10.1.5.10",
   "o": [
    "Virtual appliance 10.0.3.4",
    "Virtual network peering",
    "None (dropped)",
    "Virtual network gateway"
   ],
   "a": 0
  },
  {
   "l": "10.1.6.10",
   "o": [
    "Virtual appliance 10.0.3.4",
    "Virtual network peering",
    "None (dropped)",
    "Virtual network gateway"
   ],
   "a": 2
  },
  {
   "l": "192.168.20.5",
   "o": [
    "Virtual appliance 10.0.3.4",
    "Internet",
    "None (dropped)",
    "Virtual network gateway"
   ],
   "a": 0
  },
  {
   "l": "192.168.10.5",
   "o": [
    "Virtual appliance 10.0.3.4",
    "Internet",
    "None (dropped)",
    "Virtual network gateway"
   ],
   "a": 1
  },
  {
   "l": "10.0.2.4",
   "o": [
    "Virtual appliance 10.0.3.4",
    "Virtual network",
    "None (dropped)",
    "Internet"
   ],
   "a": 1
  }
 ],
 "expl": "<p>Azure picks the route with the <b>longest prefix</b>, whatever its origin (system, BGP, UDR). Only for equal prefixes does a UDR beat BGP, then system.</p><ul><li><b>10.1.5.10:</b> R3 (10.1.5.0/24) is more specific than R2 (/16) → appliance 10.0.3.4.</li><li><b>10.1.6.10:</b> only R2 (10.1.0.0/16 → None) matches; it overrides the system peering route → dropped.</li><li><b>192.168.20.5:</b> gateway route propagation is disabled on RT1, so the BGP route 192.168.0.0/16 doesn't exist for Subnet1. R1 (0.0.0.0/0) is left → appliance.</li><li><b>192.168.10.5:</b> R4 (192.168.10.0/24 → Internet) is the most specific → Internet (and the packet won't reach on-premises).</li><li><b>10.0.2.4:</b> the system route 10.0.0.0/16 (Virtual network) is more specific than R1 (/0) → delivered directly inside the virtual network.</li></ul>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm-a-nic"
  ],
  "title": "vm-a-nic | Effective routes",
  "menu": [
   "Overview",
   "IP configurations",
   "*Effective routes"
  ],
  "rows": [
   [
    "10.0.0.0/16",
    "Virtual network (system)"
   ],
   [
    "*10.1.5.0/24",
    "Virtual appliance 10.0.3.4 (R3)"
   ],
   [
    "10.1.0.0/16",
    "None (R2)"
   ],
   [
    "0.0.0.0/0",
    "Virtual appliance 10.0.3.4 (R1)"
   ]
  ]
 },
 "keep": "Longest prefix first; on a tie: UDR > BGP > system. “None” = drop."
},
{
 "id": "D4-210",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Routing exhibit (click the <b>Routing</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Routing",
   "h": "<p>VNet1 (10.0.0.0/16) is peered with VNet2 (10.1.0.0/16). VNet1's VPN gateway learns the on-premises network <b>192.168.0.0/16</b> through BGP.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Subnet</th><th>Range</th><th>Route table</th><th>Contents</th></tr><tr><td>Subnet1</td><td>10.0.1.0/24</td><td>RT1</td><td>VM-A (10.0.1.4)</td></tr><tr><td>Subnet2</td><td>10.0.2.0/24</td><td>—</td><td>VM-B (10.0.2.4)</td></tr><tr><td>Subnet3</td><td>10.0.3.0/24</td><td>—</td><td>NVA1 (10.0.3.4), IP forwarding enabled</td></tr><tr><td>GatewaySubnet</td><td>10.0.255.0/27</td><td>—</td><td>VPN gateway</td></tr></table></div><p><b>RT1</b> — Propagate gateway routes: <b>No</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Prefix</th><th>Next hop type</th><th>Next hop address</th></tr><tr><td>R1</td><td>0.0.0.0/0</td><td>Virtual appliance</td><td>10.0.3.4</td></tr><tr><td>R2</td><td>10.1.0.0/16</td><td>None</td><td>—</td></tr><tr><td>R3</td><td>10.1.5.0/24</td><td>Virtual appliance</td><td>10.0.3.4</td></tr><tr><td>R4</td><td>192.168.10.0/24</td><td>Internet</td><td>—</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Traffic from VM-B to 192.168.20.5 goes through the VPN gateway.",
   "a": 0
  },
  {
   "l": "Traffic from a VM in VNet2 to VM-A goes through NVA1.",
   "a": 1
  },
  {
   "l": "RT1 can be associated with a subnet of VNet2 if VNet2 is in the same region and subscription.",
   "a": 0
  },
  {
   "l": "If IP forwarding were disabled on NVA1's interface, VM-A could still reach the internet.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>VM-B → on-premises: Yes.</b> Subnet2 has no route table: it gets the gateway's BGP routes (192.168.0.0/16 → virtual network gateway).</li><li><b>VNet2 → VM-A through NVA1: No.</b> RT1 only applies to traffic <b>leaving</b> Subnet1. A VM in VNet2 uses the system peering route and reaches VM-A directly. (Return traffic is dropped by R2 except for 10.1.5.0/24: asymmetric routing to fix.)</li><li><b>RT1 in VNet2: Yes.</b> A route table can be associated with subnets of any virtual network in <b>the same region and subscription</b>.</li><li><b>Without IP forwarding: No.</b> R1 sends all of VM-A's internet traffic to NVA1. If NVA1's interface doesn't have IP forwarding, Azure drops packets not addressed to it.</li></ul>",
 "portal": {
  "path": [
   "Route tables",
   "RT1"
  ],
  "title": "RT1 | Subnets",
  "menu": [
   "Overview",
   "Routes",
   "*Subnets",
   "Configuration"
  ],
  "rows": [
   [
    "VNet1/Subnet1",
    "Associated"
   ],
   [
    "*VNet2/…",
    "Possible (same region and subscription)"
   ]
  ],
  "btn": "+ Associate"
 },
 "keep": "A UDR acts on traffic leaving the associated subnet, not on traffic coming into it."
},
{
 "id": "D4-211",
 "dom": 4,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Routing exhibit (click the <b>Routing</b> tab).</p><p>Traffic from Subnet1 to the on-premises site (192.168.0.0/16) must go through the VPN gateway instead of NVA1. Internet traffic must keep going through NVA1.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Routing",
   "h": "<p>VNet1 (10.0.0.0/16) is peered with VNet2 (10.1.0.0/16). VNet1's VPN gateway learns the on-premises network <b>192.168.0.0/16</b> through BGP.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Subnet</th><th>Range</th><th>Route table</th><th>Contents</th></tr><tr><td>Subnet1</td><td>10.0.1.0/24</td><td>RT1</td><td>VM-A (10.0.1.4)</td></tr><tr><td>Subnet2</td><td>10.0.2.0/24</td><td>—</td><td>VM-B (10.0.2.4)</td></tr><tr><td>Subnet3</td><td>10.0.3.0/24</td><td>—</td><td>NVA1 (10.0.3.4), IP forwarding enabled</td></tr><tr><td>GatewaySubnet</td><td>10.0.255.0/27</td><td>—</td><td>VPN gateway</td></tr></table></div><p><b>RT1</b> — Propagate gateway routes: <b>No</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Prefix</th><th>Next hop type</th><th>Next hop address</th></tr><tr><td>R1</td><td>0.0.0.0/0</td><td>Virtual appliance</td><td>10.0.3.4</td></tr><tr><td>R2</td><td>10.1.0.0/16</td><td>None</td><td>—</td></tr><tr><td>R3</td><td>10.1.5.0/24</td><td>Virtual appliance</td><td>10.0.3.4</td></tr><tr><td>R4</td><td>192.168.10.0/24</td><td>Internet</td><td>—</td></tr></table></div>"
  }
 ],
 "opts": [
  "Set “Propagate gateway routes” to Yes on RT1",
  "Add 192.168.0.0/16 → Virtual network gateway to RT1",
  "Add 192.168.0.0/16 → Virtual network to RT1",
  "Remove R1 from RT1 and enable IP forwarding on VM-A"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<ul><li><b>Propagation: yes.</b> Subnet1 then gets the BGP route 192.168.0.0/16 → gateway. Its prefix (/16) is longer than R1 (/0), so it wins. R1 still catches internet traffic.</li><li><b>UDR to the gateway: yes.</b> Same effect, without relying on propagation. (R4 still sends 192.168.10.0/24 to the internet: that longer prefix keeps priority, which the question doesn't ask you to change.)</li><li><b>Virtual network: no.</b> That next hop type delivers the packet inside the virtual network; 192.168.0.0/16 doesn't exist there, so the packet is lost.</li><li><b>Remove R1: no.</b> Internet traffic would no longer go through NVA1; IP forwarding on VM-A is irrelevant.</li></ul>",
 "portal": {
  "path": [
   "Route tables",
   "RT1"
  ],
  "title": "RT1 | Configuration",
  "menu": [
   "Overview",
   "Routes",
   "Subnets",
   "*Configuration"
  ],
  "rows": [
   [
    "*Propagate gateway routes",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "A /16 learned through BGP beats a 0.0.0.0/0 UDR: prefix length comes before origin."
},
{
 "id": "D4-212",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Storage exhibit (click the <b>Storage</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Storage",
   "h": "<p>VNet1 (France Central) contains Subnet1 and Subnet2. VNet2 is peered with VNet1. The on-premises site connects to VNet1 through a VPN; its internet egress uses the public address 203.0.113.10.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Subnet</th><th>Service endpoints</th></tr><tr><td>VNet1/Subnet1</td><td>Microsoft.Storage</td></tr><tr><td>VNet1/Subnet2</td><td>—</td></tr><tr><td>VNet2/Subnet1</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Public network access</th><th>Rules</th><th>Private endpoint</th></tr><tr><td>storage1</td><td>Enabled from selected networks</td><td>Virtual network: VNet1/Subnet1 · IP range: 203.0.113.0/24</td><td>—</td></tr><tr><td>storage2</td><td>Disabled</td><td>—</td><td>PE2 in VNet1/Subnet2</td></tr><tr><td>storage3</td><td>Enabled from all networks</td><td>—</td><td>—</td></tr></table></div><p>The private DNS zone <b>privatelink.blob.core.windows.net</b> contains PE2's A record. It's linked to <b>VNet1 only</b>. All virtual networks use Azure-provided DNS.</p>"
  }
 ],
 "rows": [
  {
   "l": "A VM in VNet1/Subnet2 can read a blob in storage1.",
   "a": 1
  },
  {
   "l": "A VM in VNet2 can read a blob in storage2 through the name storage2.blob.core.windows.net.",
   "a": 1
  },
  {
   "l": "An on-premises user going through the internet can read a blob in storage1.",
   "a": 0
  },
  {
   "l": "A VM in VNet1/Subnet1 can read a blob in storage2.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Subnet2 → storage1: No.</b> Subnet2 has no service endpoint: traffic arrives with an Azure public address, which is neither in the virtual network rule (Subnet1 only) nor in the 203.0.113.0/24 range.</li><li><b>VNet2 → storage2: No.</b> The privatelink zone is only linked to VNet1: in VNet2, the name resolves to the <b>public</b> address, and storage2's public access is disabled. Peering would be enough to reach PE2, but only with the right DNS resolution.</li><li><b>On-premises over the internet → storage1: Yes.</b> The address 203.0.113.10 is in the allowed IP rule.</li><li><b>Subnet1 → storage2: Yes.</b> VNet1 is linked to the private zone: the name resolves to PE2's address, reachable from the whole virtual network.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage2"
  ],
  "title": "storage2 | Networking",
  "menu": [
   "Overview",
   "Access keys",
   "*Networking"
  ],
  "rows": [
   [
    "*Public network access",
    "Disabled"
   ]
  ]
 },
 "keep": "Private endpoint = private address + DNS: without a zone link, the name stays public."
},
{
 "id": "D4-213",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Storage exhibit (click the <b>Storage</b> tab).</p><p>You need to allow access to storage2 from the VMs in VNet2, and access to storage1 from the VMs in VNet1/Subnet2. The solution must minimize the number of resources created.</p><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Storage",
   "h": "<p>VNet1 (France Central) contains Subnet1 and Subnet2. VNet2 is peered with VNet1. The on-premises site connects to VNet1 through a VPN; its internet egress uses the public address 203.0.113.10.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Subnet</th><th>Service endpoints</th></tr><tr><td>VNet1/Subnet1</td><td>Microsoft.Storage</td></tr><tr><td>VNet1/Subnet2</td><td>—</td></tr><tr><td>VNet2/Subnet1</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Public network access</th><th>Rules</th><th>Private endpoint</th></tr><tr><td>storage1</td><td>Enabled from selected networks</td><td>Virtual network: VNet1/Subnet1 · IP range: 203.0.113.0/24</td><td>—</td></tr><tr><td>storage2</td><td>Disabled</td><td>—</td><td>PE2 in VNet1/Subnet2</td></tr><tr><td>storage3</td><td>Enabled from all networks</td><td>—</td><td>—</td></tr></table></div><p>The private DNS zone <b>privatelink.blob.core.windows.net</b> contains PE2's A record. It's linked to <b>VNet1 only</b>. All virtual networks use Azure-provided DNS.</p>"
  }
 ],
 "rows": [
  {
   "l": "For storage2 from VNet2:",
   "o": [
    "Link the privatelink zone to VNet2",
    "Create a second private endpoint in VNet2",
    "Enable storage2's public access for VNet2",
    "Add a service endpoint on VNet2"
   ],
   "a": 0
  },
  {
   "l": "For storage1 from Subnet2:",
   "o": [
    "Add 10.0.2.0/24 to storage1's IP ranges",
    "Service endpoint on Subnet2 and a VNet rule",
    "Link the privatelink zone to Subnet2",
    "Enable the trusted Microsoft services exception"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>storage2:</b> PE2 is already reachable from VNet2 through the peering. Name resolution is missing: <b>link the privatelink.blob.core.windows.net zone to VNet2</b>. A second endpoint is unnecessary (and adds a resource).</li><li><b>storage1:</b> enable the Microsoft.Storage service endpoint on Subnet2, then add Subnet2 as a <b>virtual network rule</b> on storage1. Storage firewall IP rules don't accept private ranges (10.x). A DNS zone links to a virtual network, not a subnet. The trusted services exception covers Azure services, not VMs.</li></ul>",
 "portal": {
  "path": [
   "Private DNS zones",
   "privatelink.blob.core.windows.net"
  ],
  "title": "privatelink.blob.core.windows.net | Virtual network links",
  "menu": [
   "Overview",
   "Recordsets",
   "*Virtual network links"
  ],
  "rows": [
   [
    "link-vnet1",
    "VNet1"
   ],
   [
    "*link-vnet2",
    "VNet2"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Storage IP rules reject private addresses: for a subnet, use a service endpoint + VNet rule."
},
{
 "id": "D4-214",
 "dom": 4,
 "type": "single",
 "stem": "<p>You have the environment shown in the Storage exhibit (click the <b>Storage</b> tab).</p><p>On-premises users must access storage2 through the VPN. The on-premises DNS servers currently resolve storage2.blob.core.windows.net to its public address.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Storage",
   "h": "<p>VNet1 (France Central) contains Subnet1 and Subnet2. VNet2 is peered with VNet1. The on-premises site connects to VNet1 through a VPN; its internet egress uses the public address 203.0.113.10.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Subnet</th><th>Service endpoints</th></tr><tr><td>VNet1/Subnet1</td><td>Microsoft.Storage</td></tr><tr><td>VNet1/Subnet2</td><td>—</td></tr><tr><td>VNet2/Subnet1</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Public network access</th><th>Rules</th><th>Private endpoint</th></tr><tr><td>storage1</td><td>Enabled from selected networks</td><td>Virtual network: VNet1/Subnet1 · IP range: 203.0.113.0/24</td><td>—</td></tr><tr><td>storage2</td><td>Disabled</td><td>—</td><td>PE2 in VNet1/Subnet2</td></tr><tr><td>storage3</td><td>Enabled from all networks</td><td>—</td><td>—</td></tr></table></div><p>The private DNS zone <b>privatelink.blob.core.windows.net</b> contains PE2's A record. It's linked to <b>VNet1 only</b>. All virtual networks use Azure-provided DNS.</p>"
  }
 ],
 "opts": [
  "Link the privatelink.blob.core.windows.net zone to the on-premises network",
  "Add 203.0.113.10 to storage2's firewall rules",
  "Deploy a DNS Private Resolver and an on-premises conditional forwarder",
  "Enable a service endpoint on the GatewaySubnet"
 ],
 "ans": 2,
 "expl": "<p>On-premises DNS servers can't query an Azure private zone directly. An <b>Azure DNS Private Resolver</b> with an inbound endpoint in VNet1 receives their queries; a <b>conditional forwarder</b> for blob.core.windows.net to that endpoint returns PE2's address, reachable through the VPN.</p><ul><li>A private DNS zone only links to Azure virtual networks.</li><li>storage2's public access is disabled: an IP rule would have no effect, and traffic would go over the internet.</li><li>A service endpoint doesn't serve traffic coming from on-premises.</li></ul>",
 "portal": {
  "path": [
   "DNS Private Resolver",
   "dnspr1"
  ],
  "title": "dnspr1 | Inbound endpoints",
  "menu": [
   "Overview",
   "*Inbound endpoints",
   "Outbound endpoints"
  ],
  "rows": [
   [
    "*in-1",
    "10.0.10.4 · target of the on-premises conditional forwarder"
   ]
  ]
 },
 "keep": "On-premises → Azure private zone = conditional forwarder to the DNS Private Resolver inbound endpoint."
},
{
 "id": "D4-215",
 "dom": 4,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Storage exhibit (click the <b>Storage</b> tab).</p><p>You need to block all access to storage3 from the internet, without cutting off the VMs in VNet1/Subnet1.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Storage",
   "h": "<p>VNet1 (France Central) contains Subnet1 and Subnet2. VNet2 is peered with VNet1. The on-premises site connects to VNet1 through a VPN; its internet egress uses the public address 203.0.113.10.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Subnet</th><th>Service endpoints</th></tr><tr><td>VNet1/Subnet1</td><td>Microsoft.Storage</td></tr><tr><td>VNet1/Subnet2</td><td>—</td></tr><tr><td>VNet2/Subnet1</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Public network access</th><th>Rules</th><th>Private endpoint</th></tr><tr><td>storage1</td><td>Enabled from selected networks</td><td>Virtual network: VNet1/Subnet1 · IP range: 203.0.113.0/24</td><td>—</td></tr><tr><td>storage2</td><td>Disabled</td><td>—</td><td>PE2 in VNet1/Subnet2</td></tr><tr><td>storage3</td><td>Enabled from all networks</td><td>—</td><td>—</td></tr></table></div><p>The private DNS zone <b>privatelink.blob.core.windows.net</b> contains PE2's A record. It's linked to <b>VNet1 only</b>. All virtual networks use Azure-provided DNS.</p>"
  }
 ],
 "opts": [
  "Set public network access to “Enabled from selected networks”",
  "Add VNet1/Subnet1 as a virtual network rule on storage3",
  "Add the 10.0.1.0/24 range to storage3's IP firewall rules",
  "Link the privatelink.blob.core.windows.net zone to storage3"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>storage3 currently accepts all networks. Switching to <b>“Enabled from selected networks”</b> denies everything except the listed rules. Subnet1 already has the Microsoft.Storage service endpoint: just add it as a <b>virtual network rule</b>.</p><ul><li>IP rules don't accept private ranges (10.0.1.0/24).</li><li>A DNS zone links to virtual networks, not to a storage account; and storage3 has no private endpoint.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage3"
  ],
  "title": "storage3 | Networking",
  "menu": [
   "Overview",
   "Access keys",
   "*Networking"
  ],
  "rows": [
   [
    "*Public network access",
    "Enabled from selected networks · VNet1/Subnet1"
   ]
  ]
 },
 "keep": "“Selected networks” = default deny + VNet rules (service endpoints) and public IP rules."
},
{
 "id": "D4-216",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Zones exhibit (click the <b>Zones</b> tab).</p><p>Availability zone 1 in France Central suffers a complete outage.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Zones",
   "h": "<p>All resources are in France Central, a region with three availability zones.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Zone</th></tr><tr><td>VM1</td><td>1</td></tr><tr><td>VM2</td><td>2</td></tr><tr><td>VM3</td><td>1</td></tr><tr><td>VM4</td><td>3</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Public IP address</th><th>SKU</th><th>Zone</th></tr><tr><td>PIP1</td><td>Standard</td><td>Zone-redundant</td></tr><tr><td>PIP2</td><td>Standard</td><td>Zone 1</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Load balancer</th><th>SKU</th><th>Frontend address</th><th>Backend pool</th><th>Probe</th></tr><tr><td>LB1</td><td>Standard</td><td>PIP1</td><td>VM1, VM2, VM3</td><td>TCP 443</td></tr><tr><td>LB2</td><td>Standard</td><td>PIP2</td><td>VM2, VM4</td><td>TCP 443</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "LB1 keeps answering clients on PIP1.",
   "a": 0
  },
  {
   "l": "LB2 keeps answering clients on PIP2.",
   "a": 1
  },
  {
   "l": "During the outage, VM2 is the only VM receiving LB1's traffic.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>LB1: Yes.</b> PIP1 is <b>zone-redundant</b>: the frontend survives the loss of a zone. The probe removes VM1 and VM3 (zone 1); VM2 (zone 2) stays healthy.</li><li><b>LB2: No.</b> PIP2 is <b>zonal (zone 1)</b>: the frontend goes down with its zone, even though VM2 and VM4 are healthy in other zones.</li><li><b>Only VM2: Yes.</b> It's the only VM in LB1's pool outside zone 1.</li></ul>",
 "portal": {
  "path": [
   "Public IP addresses",
   "PIP2"
  ],
  "title": "PIP2 | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Properties"
  ],
  "rows": [
   [
    "SKU",
    "Standard"
   ],
   [
    "*Availability zone",
    "1 (read-only)"
   ]
  ]
 },
 "keep": "Zonal frontend = goes down with its zone. Zone-redundant frontend = survives."
},
{
 "id": "D4-217",
 "dom": 4,
 "type": "single",
 "stem": "<p>You have the environment shown in the Zones exhibit (click the <b>Zones</b> tab).</p><p>LB2 must survive a zone outage while keeping its current backend pool.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Zones",
   "h": "<p>All resources are in France Central, a region with three availability zones.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Zone</th></tr><tr><td>VM1</td><td>1</td></tr><tr><td>VM2</td><td>2</td></tr><tr><td>VM3</td><td>1</td></tr><tr><td>VM4</td><td>3</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Public IP address</th><th>SKU</th><th>Zone</th></tr><tr><td>PIP1</td><td>Standard</td><td>Zone-redundant</td></tr><tr><td>PIP2</td><td>Standard</td><td>Zone 1</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Load balancer</th><th>SKU</th><th>Frontend address</th><th>Backend pool</th><th>Probe</th></tr><tr><td>LB1</td><td>Standard</td><td>PIP1</td><td>VM1, VM2, VM3</td><td>TCP 443</td></tr><tr><td>LB2</td><td>Standard</td><td>PIP2</td><td>VM2, VM4</td><td>TCP 443</td></tr></table></div>"
  }
 ],
 "opts": [
  "Change PIP2's zone to make it zone-redundant",
  "Create a zone-redundant IP and make it LB2's frontend",
  "Move VM4 to zone 1, with VM2, then recreate the probe",
  "Move LB2 to the cross-region tier and keep PIP2 as frontend"
 ],
 "ans": 1,
 "expl": "<p>A public IP address's zone is chosen <b>at creation</b> and can't be changed afterwards. You must create a new <b>zone-redundant</b> Standard address and make it LB2's frontend (then update the DNS or partners that used PIP2).</p><ul><li>Grouping the VMs in zone 1 would make the risk worse.</li><li>A cross-region load balancer is a different deployment (global tier, in front of regional load balancers); it doesn't make PIP2 redundant.</li></ul>",
 "portal": {
  "path": [
   "Public IP addresses",
   "PIP2"
  ],
  "title": "PIP2 | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Properties"
  ],
  "rows": [
   [
    "SKU",
    "Standard"
   ],
   [
    "*Availability zone",
    "1 (read-only)"
   ]
  ]
 },
 "keep": "A public IP's zone is fixed at creation: create another one."
},
{
 "id": "D4-218",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the DNS exhibit (click the <b>DNS</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "DNS",
   "h": "<p>VNet1, VNet2, and VNet3 use Azure-provided DNS. VNet3 is peered with VNet1. VM1 (in VNet1) was created after the links below.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Private DNS zone</th><th>Link</th><th>Virtual network</th><th>Autoregistration</th></tr><tr><td>contoso.internal</td><td>link-1</td><td>VNet1</td><td>Enabled</td></tr><tr><td>contoso.internal</td><td>link-2</td><td>VNet2</td><td>Disabled</td></tr><tr><td>fabrikam.internal</td><td>link-3</td><td>VNet2</td><td>Disabled</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A VM created in VNet2 will be registered automatically in contoso.internal.",
   "a": 1
  },
  {
   "l": "A VM in VNet2 can resolve vm1.contoso.internal.",
   "a": 0
  },
  {
   "l": "A VM in VNet3 can resolve vm1.contoso.internal.",
   "a": 1
  },
  {
   "l": "You can link VNet1 to fabrikam.internal with autoregistration enabled.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Registration from VNet2: No.</b> link-2 doesn't have autoregistration: VNet2 can resolve the zone, but its VMs aren't registered in it.</li><li><b>Resolution from VNet2: Yes.</b> link-2 is enough for resolution, and vm1 was registered through link-1.</li><li><b>Resolution from VNet3: No.</b> Being peered with VNet1 doesn't give access to its private zones: VNet3 needs its own link to the zone.</li><li><b>VNet1 → fabrikam.internal with registration: No.</b> A virtual network can have autoregistration enabled to <b>only one</b> private zone; VNet1 already has it to contoso.internal. A resolution-only link is still possible.</li></ul>",
 "portal": {
  "path": [
   "Private DNS zones",
   "contoso.internal"
  ],
  "title": "contoso.internal | Virtual network links",
  "menu": [
   "Overview",
   "Recordsets",
   "*Virtual network links"
  ],
  "rows": [
   [
    "link-1 · VNet1",
    "Autoregistration: enabled"
   ],
   [
    "link-2 · VNet2",
    "Autoregistration: disabled"
   ]
  ]
 },
 "keep": "One VNet: autoregistration to only one zone. Peering ≠ access to private zones: a link is needed."
},
{
 "id": "D4-219",
 "dom": 4,
 "type": "single",
 "stem": "<p>You have the environment shown in the DNS exhibit (click the <b>DNS</b> tab).</p><p>New VMs in VNet2 must be registered automatically in contoso.internal. The solution must minimize administrative effort.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "DNS",
   "h": "<p>VNet1, VNet2, and VNet3 use Azure-provided DNS. VNet3 is peered with VNet1. VM1 (in VNet1) was created after the links below.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Private DNS zone</th><th>Link</th><th>Virtual network</th><th>Autoregistration</th></tr><tr><td>contoso.internal</td><td>link-1</td><td>VNet1</td><td>Enabled</td></tr><tr><td>contoso.internal</td><td>link-2</td><td>VNet2</td><td>Disabled</td></tr><tr><td>fabrikam.internal</td><td>link-3</td><td>VNet2</td><td>Disabled</td></tr></table></div>"
  }
 ],
 "opts": [
  "Enable autoregistration on link-2",
  "Delete link-3, then enable registration on link-2",
  "Peer VNet2 with VNet1 to use link-1",
  "Create an A record in the zone for each VM"
 ],
 "ans": 0,
 "expl": "<p>VNet2 has autoregistration enabled to <b>no</b> zone (link-2 and link-3 are resolution-only). So you can enable it on <b>link-2</b>, by editing the existing link.</p><ul><li>link-3 isn't in the way: the limit is on links <b>with registration</b>, and link-3 doesn't have it.</li><li>Peering doesn't provide registration through another network's link.</li><li>Manual records would need work every time a VM is created or deleted.</li></ul>",
 "portal": {
  "path": [
   "Private DNS zones",
   "contoso.internal"
  ],
  "title": "contoso.internal | Virtual network links",
  "menu": [
   "Overview",
   "Recordsets",
   "*Virtual network links"
  ],
  "rows": [
   [
    "link-1 · VNet1",
    "Autoregistration: enabled"
   ],
   [
    "*link-2 · VNet2",
    "Autoregistration: disabled"
   ]
  ]
 },
 "keep": "The “only one zone” limit only applies to links with autoregistration."
},
{
 "id": "D4-220",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the VPN exhibit (click the <b>VPN</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "VPN",
   "h": "<p>VNet1 contains the gateway <b>VPNGW1</b>: VpnGw1 SKU, route-based, active-standby mode, BGP disabled.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Local network gateway</th><th>Public IP address</th><th>Address prefixes</th></tr><tr><td>LNG-Paris</td><td>198.51.100.10</td><td>192.168.10.0/24</td></tr><tr><td>LNG-Lyon</td><td>203.0.113.20</td><td>192.168.20.0/24</td></tr><tr><td>LNG-Nice</td><td>198.51.100.30</td><td>192.168.10.0/24</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Connection</th><th>Local network gateway</th><th>Status</th></tr><tr><td>Conn-Paris</td><td>LNG-Paris</td><td>Connected</td></tr><tr><td>Conn-Lyon</td><td>LNG-Lyon</td><td>Connected</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "If the Lyon site adds the 192.168.21.0/24 network, VNet1's VMs will reach it with no change in Azure.",
   "a": 1
  },
  {
   "l": "You can create a connection from VPNGW1 to LNG-Nice without changing the local network gateways.",
   "a": 1
  },
  {
   "l": "You can switch VPNGW1 to policy-based without deleting it.",
   "a": 1
  },
  {
   "l": "VPNGW1 can also accept point-to-site connections.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>New network in Lyon: No.</b> Without BGP, Azure only knows the prefixes listed in LNG-Lyon: 192.168.21.0/24 must be added there.</li><li><b>Connection to LNG-Nice: No.</b> LNG-Nice advertises 192.168.10.0/24, already used by LNG-Paris. The site prefixes on one gateway must not overlap: Azure wouldn't know which tunnel to send the traffic to.</li><li><b>Changing the type: No.</b> The VPN type (route-based or policy-based) can't be changed: you must delete and recreate the gateway. And policy-based only handles one site-to-site tunnel.</li><li><b>Point-to-site: Yes.</b> A route-based gateway on the VpnGw1 SKU supports point-to-site on top of site-to-site connections.</li></ul>",
 "portal": {
  "path": [
   "Local network gateways",
   "LNG-Lyon"
  ],
  "title": "LNG-Lyon | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Connections"
  ],
  "rows": [
   [
    "IP address",
    "203.0.113.20"
   ],
   [
    "*Address space",
    "192.168.20.0/24, 192.168.21.0/24"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Without BGP: prefixes by hand in the local network gateway. VPN type can't be changed."
},
{
 "id": "D4-221",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You have the environment shown in the VPN exhibit (click the <b>VPN</b> tab).</p><p>Networks added at the Lyon site must be learned automatically by Azure, and vice versa.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "VPN",
   "h": "<p>VNet1 contains the gateway <b>VPNGW1</b>: VpnGw1 SKU, route-based, active-standby mode, BGP disabled.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Local network gateway</th><th>Public IP address</th><th>Address prefixes</th></tr><tr><td>LNG-Paris</td><td>198.51.100.10</td><td>192.168.10.0/24</td></tr><tr><td>LNG-Lyon</td><td>203.0.113.20</td><td>192.168.20.0/24</td></tr><tr><td>LNG-Nice</td><td>198.51.100.30</td><td>192.168.10.0/24</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Connection</th><th>Local network gateway</th><th>Status</th></tr><tr><td>Conn-Paris</td><td>LNG-Paris</td><td>Connected</td></tr><tr><td>Conn-Lyon</td><td>LNG-Lyon</td><td>Connected</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "On VPNGW1:",
   "o": [
    "Switch to active-active mode",
    "Enable BGP with an ASN",
    "Move to the VpnGw2 SKU",
    "Change the type to policy-based"
   ],
   "a": 1
  },
  {
   "l": "On LNG-Lyon:",
   "o": [
    "Add 0.0.0.0/0 to the prefixes",
    "Change the public IP address",
    "Set the ASN and BGP peer IP",
    "Remove all prefixes"
   ],
   "a": 2
  },
  {
   "l": "On Conn-Lyon:",
   "o": [
    "Enable BGP",
    "Switch to IKEv1",
    "Enable traffic selectors",
    "Change the shared key"
   ],
   "a": 0
  }
 ],
 "expl": "<p>Dynamic routing is configured in three places:</p><ul><li><b>VPNGW1:</b> enable BGP and give it an <b>ASN</b> (the VpnGw1 SKU allows it, unlike the Basic SKU).</li><li><b>LNG-Lyon:</b> enter the Lyon device's <b>ASN</b> and its <b>BGP peer address</b>. The prefixes can then shrink to that peer's address.</li><li><b>Conn-Lyon:</b> check <b>Enable BGP</b> on the connection.</li></ul><p>Active-active mode is for high availability, not route learning.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VPNGW1"
  ],
  "title": "VPNGW1 | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Connections",
   "Point-to-site configuration"
  ],
  "rows": [
   [
    "Active-active mode",
    "Disabled"
   ],
   [
    "*Configure BGP",
    "Enabled · ASN 65515"
   ]
  ]
 },
 "keep": "BGP = gateway (ASN) + local network gateway (ASN, peer IP) + connection (BGP checkbox)."
},
{
 "id": "D4-222",
 "dom": 4,
 "type": "single",
 "stem": "<p>You have the environment shown in the Networks exhibit (click the <b>Networks</b> tab).</p><p>You add the address space 10.4.0.0/16 to VNet-A. The VMs in VNet-Hub can't reach the new resources in 10.4.0.0/16.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Networks",
   "h": "<p><b>Virtual networks</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Region</th><th>Address space</th><th>Subscription</th></tr><tr><td>VNet-Hub</td><td>France Central</td><td>10.0.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-A</td><td>France Central</td><td>10.1.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-B</td><td>West Europe</td><td>10.2.0.0/16</td><td>Sub2</td></tr><tr><td>VNet-C</td><td>France Central</td><td>10.3.0.0/16</td><td>Sub1</td></tr><tr><td>VNet-D</td><td>France Central</td><td>10.1.128.0/17</td><td>Sub1</td></tr></table></div><p>VNet-Hub contains the VPN gateway <b>VPNGW1</b> (route-based), connected to the on-premises site 192.168.0.0/16 by a site-to-site connection with <b>BGP enabled</b>. VNet-Hub also contains the network virtual appliance <b>NVA1</b> (10.0.1.4).</p><p><b>Peerings</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Peering</th><th>From → to</th><th>Allow forwarded traffic</th><th>Gateway transit</th><th>Use remote gateway</th><th>Status</th></tr><tr><td>Hub-A</td><td>VNet-Hub → VNet-A</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>A-Hub</td><td>VNet-A → VNet-Hub</td><td>No</td><td>No</td><td>Yes</td><td>Connected</td></tr><tr><td>Hub-B</td><td>VNet-Hub → VNet-B</td><td>No</td><td>Yes</td><td>No</td><td>Connected</td></tr><tr><td>B-Hub</td><td>VNet-B → VNet-Hub</td><td>No</td><td>No</td><td>No</td><td>Connected</td></tr><tr><td>Hub-C</td><td>VNet-Hub → VNet-C</td><td>No</td><td>Yes</td><td>No</td><td>Initiated</td></tr></table></div>"
  }
 ],
 "opts": [
  "Sync the Hub-A peering from VNet-Hub",
  "Delete A-Hub, then recreate it with the remote gateway",
  "Add a 10.4.0.0/16 → Virtual network UDR in VNet-Hub",
  "Add 10.4.0.0/16 to the on-premises prefixes on VPNGW1"
 ],
 "ans": 0,
 "expl": "<p>After an address space change on a peered network, the <b>remote</b> network's peering goes to “Sync required”. You must <b>sync</b> Hub-A (Sync button, or Sync-AzVirtualNetworkPeering) so VNet-Hub learns 10.4.0.0/16.</p><ul><li>Delete-and-recreate is no longer needed and would interrupt traffic.</li><li>The Virtual network next hop only delivers to the network's own spaces: 10.4.0.0/16 isn't in VNet-Hub.</li><li>On-premises prefixes describe local networks, not an Azure network.</li></ul>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet-Hub"
  ],
  "title": "VNet-Hub | Peerings",
  "menu": [
   "Overview",
   "Address space",
   "*Peerings"
  ],
  "rows": [
   [
    "*Hub-A",
    "Connected · gateway transit"
   ],
   [
    "Hub-B",
    "Connected · global · gateway transit"
   ],
   [
    "Hub-C",
    "Initiated (no reverse peering)"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "New space on a peered VNet → “Sync required” on the remote side → Sync."
}
);
