/* Domain 4: virtual networking (batch F: D4-301 to D4-327, multi-answer questions merged from former multiple-choice items) */
AZ.questions.push(
{
 "id": "D4-301",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>Your company connects its sites, users, and virtual networks to Azure. You need to choose a connectivity solution for each requirement.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "Point-to-site VPN",
  "Site-to-site VPN",
  "Azure ExpressRoute",
  "ExpressRoute Global Reach",
  "Azure Virtual WAN",
  "Global virtual network peering",
  "VNet-to-VNet VPN connection",
  "Virtual network encryption"
 ],
 "tgts": [
  {
   "l": "Remote workers connect to VNet1 from anywhere, with their Microsoft Entra account",
   "a": 0
  },
  {
   "l": "The datacenter connects to Azure without the internet, with a guaranteed 1 Gbps and an SLA",
   "a": 2
  },
  {
   "l": "The Paris and New York branches, each with its own ExpressRoute circuit, communicate over the Microsoft network",
   "a": 3
  },
  {
   "l": "30 branches, several regions, and mobile users are interconnected by a managed architecture",
   "a": 4
  },
  {
   "l": "VNet1 (France Central) and VNet2 (Japan East) communicate over the Microsoft network, with no gateway",
   "a": 5
  },
  {
   "l": "Two networks in two regions are connected with IPsec encryption required by a standard",
   "a": 6
  },
  {
   "l": "Traffic between two peered networks is encrypted, with no VPN gateway",
   "a": 7
  }
 ],
 "expl": "<p><b>1. Remote workers connect to VNet1 from anywhere, with their Microsoft Entra account</b></p><p>A <b>point-to-site VPN</b> connects a computer to a virtual network. You define a <b>client address pool</b>, the tunnel type, and authentication. <b>Microsoft Entra ID</b> authentication requires the <b>OpenVPN</b> tunnel type and the Azure VPN client.</p><p>Site-to-site connects networks (one VPN device per site). ExpressRoute is an enterprise private circuit.</p><p><b>2. The datacenter connects to Azure without the internet, with a guaranteed 1 Gbps and an SLA</b></p><p><b>ExpressRoute</b> is a private circuit provided by a partner carrier: it doesn't go over the internet, offers dedicated bandwidth (from 50 Mbps to 100 Gbps), and an SLA. You connect it to the virtual network through an ExpressRoute-type gateway.</p><p>A site-to-site VPN goes over the internet (encrypted with IPsec).</p><p><b>3. The Paris and New York branches, each with its own ExpressRoute circuit, communicate over the Microsoft network</b></p><p><b>Global Reach</b> links two ExpressRoute circuits so that on-premises sites communicate with each other over the Microsoft backbone.</p><p><b>FastPath</b> sends traffic directly to VMs, bypassing the ExpressRoute gateway, for better performance.</p><p><b>4. 30 branches, several regions, and mobile users are interconnected by a managed architecture</b></p><p><b>Azure Virtual WAN</b> provides managed virtual hubs that interconnect VPN sites, ExpressRoute circuits, point-to-site users, and virtual networks, with automatic transitive routing between them.</p><p><b>5. VNet1 (France Central) and VNet2 (Japan East) communicate over the Microsoft network, with no gateway</b></p><p><b>Global peering</b> connects virtual networks in <b>different regions</b> over the Microsoft backbone, with no gateway or IPsec encryption, and low latency. Cross-region traffic is billed (inbound and outbound).</p><p>A VNet-to-VNet VPN would also work, but with a gateway, limited bandwidth, and more latency.</p><p><b>6. Two networks in two regions are connected with IPsec encryption required by a standard</b></p><p>A <b>VNet-to-VNet</b> connection links two VPN gateways with an <b>IPsec/IKE</b> tunnel. Peering doesn't use IPsec (traffic stays private on the Microsoft network, but isn't IPsec-encrypted).</p><p><b>7. Traffic between two peered networks is encrypted, with no VPN gateway</b></p><p><b>Virtual network encryption</b> encrypts traffic between VMs (including between peered networks) with DTLS, at the infrastructure level, for VM sizes that support accelerated networking. Otherwise peering traffic isn't encrypted (but it stays private, on the Microsoft network).</p>",
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
 "keep": "Remote work with an Entra account = P2S, OpenVPN, Entra ID authentication. Private, no internet, guaranteed bandwidth + SLA = ExpressRoute. Site ↔ site through two ExpressRoute circuits = Global Reach. Many sites + regions + mobile users, managed = Virtual WAN. Different regions, no gateway = global peering. IPsec between VNets = VNet-to-VNet connection. Encrypting between VNets with no VPN = virtual network encryption."
},
{
 "id": "D4-302",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You manage VNet1's VPN gateway, which connects to several on-premises sites. What should you choose for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Connect 3 sites at once and accept point-to-site — VPN type:",
   "o": [
    "Route-based",
    "Policy-based",
    "Static, with a fixed IP address",
    "Active-passive with a single tunnel"
   ],
   "a": 0
  },
  {
   "l": "Stay available during an instance's maintenance, with two active tunnels:",
   "o": [
    "The gateway's active-active mode",
    "A second gateway in the same VNet",
    "The Basic SKU with two connections",
    "Policy-based mode on the gateway"
   ],
   "a": 0
  },
  {
   "l": "Survive an availability zone outage — SKU:",
   "o": [
    "Basic, in active-active mode",
    "Standard, with two instances",
    "VpnGw2, in active-active mode on two sites",
    "An AZ SKU, for example VpnGw2AZ"
   ],
   "a": 3
  },
  {
   "l": "VpnGw1 no longer provides enough bandwidth:",
   "o": [
    "Add a second VPN gateway in the same virtual network",
    "Create a second GatewaySubnet and deploy a gateway in it",
    "Resize the gateway to VpnGw2 (same generation)",
    "Increase the size of the VMs that talk to on-premises"
   ],
   "a": 2
  },
  {
   "l": "Learn new networks automatically on both sides:",
   "o": [
    "Manually add each network to a route table",
    "Enable BGP on the gateway and connection (one ASN per side)",
    "Switch the gateway to policy-based mode, with IKEv2",
    "Create a peering between VNet1 and the on-premises network"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Connect 3 sites at once and accept point-to-site — VPN type:</b></p><p><b>Route-based</b> supports multiple site-to-site connections, point-to-site, VNet-to-VNet, BGP, and coexistence with ExpressRoute. It's the default choice.</p><p><b>Policy-based</b> allows only one site-to-site tunnel (Basic SKU) and no point-to-site. It's reserved for older devices.</p><p><b>2. Stay available during an instance's maintenance, with two active tunnels:</b></p><p>By default, a VPN gateway runs <b>active-standby</b>: a standby instance takes over in case of a problem, with a short interruption. In <b>active-active</b>, both instances each have a public IP address and each establish a tunnel: no interruption during maintenance.</p><p>A virtual network can have only one GatewaySubnet and a single VPN gateway.</p><p><b>3. Survive an availability zone outage — SKU:</b></p><p>SKUs ending in <b>AZ</b> (VpnGw1AZ to VpnGw5AZ) deploy the gateway's instances across several availability zones. Microsoft is migrating non-AZ SKUs to AZ SKUs in regions that have zones.</p><p><b>4. VpnGw1 no longer provides enough bandwidth:</b></p><p>You can <b>resize</b> a gateway to a higher SKU (VpnGw1 → VpnGw2 → VpnGw3…, or to the zone-redundant AZ versions). A virtual network has only one VPN gateway and one GatewaySubnet.</p><p><b>5. Learn new networks automatically on both sides:</b></p><p><b>BGP</b> dynamically exchanges routes between the Azure gateway and the on-premises device. Each side has an <b>autonomous system number (ASN)</b>, and the local network gateway specifies the on-premises BGP peer's ASN and address. New networks are then advertised automatically.</p>",
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
 "keep": "Several sites, P2S, BGP = route-based. No interruption during maintenance = active-active gateway. Gateway resilient to zone failure = AZ SKU. More VPN bandwidth = resize the SKU. Routes learned automatically = BGP (ASN on both sides)."
},
{
 "id": "D4-303",
 "dom": 4,
 "type": "hot",
 "stem": "<p>VNet1 connects to several on-premises sites through site-to-site VPNs without BGP, and to headquarters through an ExpressRoute circuit. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The Rennes VPN device changes its public IP address — resource to update:",
   "o": [
    "The route table associated with the GatewaySubnet",
    "VNet1's GatewaySubnet",
    "The Rennes local network gateway",
    "VNet1's virtual network gateway"
   ],
   "a": 2
  },
  {
   "l": "The Toulouse site adds the 192.168.50.0/24 network:",
   "o": [
    "Create a peering to the 192.168.50.0/24 network",
    "Add 192.168.50.0/24 to VNet1's address space",
    "Move the VPN gateway to a higher SKU, with BGP",
    "Add 192.168.50.0/24 to the local network gateway"
   ],
   "a": 3
  },
  {
   "l": "Automatic failover is required if the ExpressRoute circuit fails:",
   "o": [
    "A load balancer between the circuit and VNet1",
    "A second private peering configured on the same circuit",
    "A NAT gateway on VNet1's GatewaySubnet",
    "A site-to-site VPN gateway in VNet1 (coexistence)"
   ],
   "a": 3
  },
  {
   "l": "VNet1 must host an ExpressRoute gateway and a VPN gateway — GatewaySubnet:",
   "o": [
    "Be large enough for both gateways (at least /27)",
    "Have an NSG that blocks all inbound traffic",
    "Be a /29, the size reserved for gateways",
    "Be doubled: one GatewaySubnet per type of gateway to deploy"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. The Rennes VPN device changes its public IP address — resource to update:</b></p><p>The <b>local network gateway</b> holds the public IP address (or FQDN) of the on-premises device and its address ranges. You update it when either changes. You can also use an FQDN for a site with a dynamic address.</p><p><b>2. The Toulouse site adds the 192.168.50.0/24 network:</b></p><p>Without BGP, Azure only knows the on-premises networks through the list of <b>prefixes</b> in the local network gateway. You must add the new network there. With BGP, it would be learned automatically.</p><p>Adding this range to VNet1 would create an overlap.</p><p><b>3. Automatic failover is required if the ExpressRoute circuit fails:</b></p><p>A <b>VPN</b> gateway and an <b>ExpressRoute</b> gateway can coexist in the same GatewaySubnet. The site-to-site VPN serves as the <b>backup</b> path: ExpressRoute is preferred while it's available.</p><p><b>4. VNet1 must host an ExpressRoute gateway and a VPN gateway — GatewaySubnet:</b></p><p>ExpressRoute and VPN gateways coexist in the <b>same</b> GatewaySubnet, which must be at least <b>/27</b>. Associating an NSG with the GatewaySubnet isn't recommended.</p>",
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
 "keep": "On-premises site info (IP, ranges) = local network gateway. New on-premises network without BGP = add it to the local network gateway. ExpressRoute backup = site-to-site VPN in the same GatewaySubnet. ER + VPN coexistence = one GatewaySubnet /27+."
},
{
 "id": "D4-304",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You manage remote access to VNet1: a certificate-based point-to-site VPN for employees and an ExpressRoute circuit for headquarters. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "An employee who used a client certificate leaves; the others keep access:",
   "o": [
    "Delete the root certificate uploaded to the gateway",
    "Delete and recreate the VPN gateway with a new pool",
    "Revoke his client certificate (thumbprint) on the gateway",
    "Change the client address pool of the P2S configuration"
   ],
   "a": 2
  },
  {
   "l": "After a root certificate and tunnel type change, nobody can connect — users must:",
   "o": [
    "Change their Microsoft Entra password and reconnect",
    "Restart their computer to reload the VPN profile",
    "Nothing: the new configuration is pushed automatically",
    "Download and reinstall the new VPN client package"
   ],
   "a": 3
  },
  {
   "l": "The circuit must give access to the virtual networks' VMs — peering type:",
   "o": [
    "Microsoft peering",
    "Azure private peering",
    "Azure public peering",
    "Virtual network peering"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. An employee who used a client certificate leaves; the others keep access:</b></p><p>The point-to-site configuration contains a list of <b>revoked certificates</b> (by thumbprint). The affected client can no longer connect, with no impact on the others. Deleting the root certificate would cut off all users.</p><p><b>2. After a root certificate and tunnel type change, nobody can connect — users must:</b></p><p>After changing the point-to-site configuration (tunnel type, certificate, addresses, routes), you must <b>regenerate and reinstall the VPN client configuration package</b> on each computer.</p><p><b>3. The circuit must give access to the virtual networks' VMs — peering type:</b></p><p><b>Private peering</b> connects on-premises to virtual networks (private addresses). <b>Microsoft peering</b> gives access to Microsoft public services (Microsoft 365, public addresses of PaaS services). Azure public peering is retired.</p>",
 "portal": {
  "path": [
   "Virtual network gateways",
   "VNet1-GW"
  ],
  "title": "Point-to-site configuration",
  "rows": [
   [
    "Root certificates",
    "Kept"
   ],
   [
    "*Revoked certificates",
    "+ client thumbprint"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Cutting off a single P2S client = revoked certificate. P2S config changed = reinstall the client package. VNets = private peering; public Microsoft services = Microsoft peering."
},
{
 "id": "D4-305",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>VNet1 connects to the on-premises site through a site-to-site VPN. Storage accounts and an Azure SQL Database must be consumed through private addresses. What should you use for each requirement?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "A private endpoint",
  "A service endpoint",
  "A privatelink zone linked to the virtual network",
  "Disable public network access",
  "Private endpoint network policies",
  "An IP firewall rule"
 ],
 "tgts": [
  {
   "l": "The on-premises site reaches storage1 through a private address; storage1's public access is disabled",
   "a": 0
  },
  {
   "l": "Azure SQL Database is reachable from Subnet1 and from on-premises through a private address",
   "a": 0
  },
  {
   "l": "Despite its private endpoint, storage90 still resolves to its public address in VNet1",
   "a": 2
  },
  {
   "l": "Once the private endpoint exists, the SQL server refuses all public access",
   "a": 3
  },
  {
   "l": "Traffic to a subnet's private endpoints is filtered with NSGs and UDRs",
   "a": 4
  }
 ],
 "expl": "<p><b>1. The on-premises site reaches storage1 through a private address; storage1's public access is disabled</b></p><p>A <b>private endpoint</b> creates a network interface with a <b>private IP address</b> from VNet1 for storage1. The on-premises site reaches it through the VPN. You can then disable public access. You need DNS resolution to the private address (privatelink.blob.core.windows.net zone and DNS forwarding from on-premises).</p><p>A <b>service endpoint</b> only benefits traffic leaving an Azure subnet, and the account keeps its public address. A firewall rule with the site's public IP would go over the internet.</p><p><b>2. Azure SQL Database is reachable from Subnet1 and from on-premises through a private address</b></p><p>The <b>private endpoint</b> gives the SQL server a <b>private address</b> in VNet1, also reachable from on-premises through the VPN (with suitable DNS resolution). A service endpoint doesn't work from on-premises. An IP firewall rule would go over the internet.</p><p><b>3. Despite its private endpoint, storage90 still resolves to its public address in VNet1</b></p><p>The public name is an alias (CNAME) to <code>storage90.privatelink.blob.core.windows.net</code>. For it to resolve to the private address, you need the matching <b>privatelink private DNS zone</b>, <b>linked</b> to the virtual network, with an A record (created automatically through a DNS zone group if you choose integration).</p><p><b>4. Once the private endpoint exists, the SQL server refuses all public access</b></p><p>Once the <b>private endpoint</b> is in place, you <b>disable public network access</b>: only connections through private endpoints remain possible. Allowing Azure services or an IP rule would reopen public access.</p><p><b>5. Traffic to a subnet's private endpoints is filtered with NSGs and UDRs</b></p><p>By default, NSGs and user-defined routes don't apply to <b>private endpoints</b>. By enabling <b>private endpoint network policies</b> on the subnet, NSGs and UDRs apply to them.</p>",
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
 "keep": "Private access from on-premises = private endpoint + DNS. Private IP also reachable from on-premises = private endpoint. Private endpoint = linked privatelink zone + A record. Private endpoint + disable public access. NSG/UDR on a private endpoint = enable its network policies."
},
{
 "id": "D4-306",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You manage name resolution and subnets in a hybrid environment: VNet1 connects to the on-premises site, which has its own DNS servers and AD domain. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "On-premises DNS resolves an Azure private zone and VMs resolve the AD domain, with no DNS VM:",
   "o": [
    "Azure Bastion with a dedicated subnet",
    "Azure DNS Private Resolver (in and out)",
    "A NAT gateway and two private DNS zones",
    "A public DNS zone for the on-premises AD domain"
   ],
   "a": 1
  },
  {
   "l": "A DNS Private Resolver (inbound 10.0.10.4) is deployed — on the on-premises DNS servers:",
   "o": [
    "Manual A records to the services' public addresses",
    "A forwarder to 168.63.129.16 from the on-premises DNS servers",
    "Conditional forwarders for the services' zones to 10.0.10.4",
    "A public blob.core.windows.net zone on the on-premises servers"
   ],
   "a": 2
  },
  {
   "l": "VNet1's custom DNS 10.0.0.4 must also resolve a private zone linked to VNet1:",
   "o": [
    "With a forwarder to 8.8.8.8 for everything else",
    "None: the VMs query the private zone directly",
    "With a forwarder to 168.63.129.16 (Azure DNS)",
    "With an NS record that delegates to the private zone"
   ],
   "a": 2
  },
  {
   "l": "Subnet-DB must never have default internet egress, without relying on NSGs:",
   "o": [
    "Private endpoint network policies on the subnet",
    "Private subnet (no default outbound access)",
    "Delegating the subnet to a managed service",
    "The subnet's service endpoints for storage"
   ],
   "a": 1
  },
  {
   "l": "Deploying ACI groups to Subnet-ACI fails because the subnet isn't configured:",
   "o": [
    "A dedicated application security group",
    "A route table to the ACI service",
    "A delegation to Microsoft.ContainerInstance",
    "A Microsoft.Storage service endpoint"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. On-premises DNS resolves an Azure private zone and VMs resolve the AD domain, with no DNS VM:</b></p><p><b>Azure DNS Private Resolver</b> is a managed service. Its <b>inbound endpoint</b> receives queries from on-premises (through a conditional forwarder) and resolves them with the linked private zones. Its <b>outbound endpoint</b>, with a <b>forwarding ruleset</b>, sends queries for the on-premises domain to on-premises DNS.</p><p><b>2. A DNS Private Resolver (inbound 10.0.10.4) is deployed — on the on-premises DNS servers:</b></p><p>On-premises servers forward queries for the relevant domains (for example <code>blob.core.windows.net</code> or <code>privatelink.blob.core.windows.net</code>) to the resolver's <b>inbound endpoint</b>, which resolves them with the linked private zones. 168.63.129.16 isn't reachable from on-premises.</p><p><b>3. VNet1's custom DNS 10.0.0.4 must also resolve a private zone linked to VNet1:</b></p><p>Private DNS zones are resolved by <b>Azure-provided DNS</b>. If VMs use a custom DNS server, it must <b>forward</b> queries (at least for these zones) to <b>168.63.129.16</b>. The server itself must be in a virtual network linked to the zone.</p><p><b>4. Subnet-DB must never have default internet egress, without relying on NSGs:</b></p><p>The <b>private subnet</b> option (defaultOutboundAccess = false) disables <b>default outbound access</b>: VMs no longer have implicit internet egress. You then need an explicit method (NAT gateway, public address, load balancer, firewall). Microsoft is retiring default outbound access for new virtual networks.</p><p><b>5. Deploying ACI groups to Subnet-ACI fails because the subnet isn't configured:</b></p><p><b>Subnet delegation</b> allows a PaaS service to create its resources in a subnet (ACI, App Service for virtual network integration, Azure SQL Managed Instance, Container Apps…). A delegated subnet is reserved for that service.</p>",
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
 "keep": "Hybrid DNS with no VMs = Azure DNS Private Resolver (inbound + outbound). On-premises DNS → resolver inbound endpoint. Custom DNS + private zone = forwarder to 168.63.129.16. No implicit internet egress = private subnet. PaaS service in a subnet = delegation."
},
{
 "id": "D4-307",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You're configuring Standard load balancers, public and internal, for several applications in VNet1. What should you configure for each requirement?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Configurations",
 "tgtHead": [
  "Requirement",
  "Configuration"
 ],
 "srcs": [
  "A health probe",
  "“Client IP” session persistence",
  "HA ports",
  "Floating IP",
  "An outbound rule",
  "Inbound NAT rules",
  "An IP address-based backend pool",
  "A NIC-based backend pool"
 ],
 "tgts": [
  {
   "l": "Stop sending traffic to a VM stopped for maintenance",
   "a": 0
  },
  {
   "l": "A user always lands on the same VM (session kept in memory)",
   "a": 1
  },
  {
   "l": "Two NVAs behind an internal load balancer receive all TCP and UDP traffic, on every port",
   "a": 2
  },
  {
   "l": "SQL Always On cluster nodes receive traffic addressed to the frontend address",
   "a": 3
  },
  {
   "l": "VMs without a public IP egress through the load balancer's address, with a controlled number of SNAT ports",
   "a": 4
  },
  {
   "l": "RDP to each of the three VMs through ports 50001 to 50003 of the public address",
   "a": 5
  },
  {
   "l": "Distribute to VMs referenced only by their private IP addresses, without referencing their interfaces",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Stop sending traffic to a VM stopped for maintenance</b></p><p>The <b>health probe</b> regularly checks each instance (TCP, HTTP, or HTTPS). After a number of failures, the instance is removed from distribution until it responds again.</p><p><b>2. A user always lands on the same VM (session kept in memory)</b></p><p><b>Session persistence</b> (affinity) can be <b>None</b> (5-tuple hash, default), <b>Client IP</b> (2-tuple: source and destination), or <b>Client IP and protocol</b> (3-tuple). With Client IP, requests from the same client go to the same VM.</p><p><b>3. Two NVAs behind an internal load balancer receive all TCP and UDP traffic, on every port</b></p><p>An <b>HA ports</b> rule (protocol “All”, port 0) on a <b>Standard internal</b> load balancer distributes all TCP and UDP flows on all ports. It's the classic pattern for making NVAs highly available.</p><p><b>4. SQL Always On cluster nodes receive traffic addressed to the frontend address</b></p><p><b>Floating IP</b> (Direct Server Return) forwards the packet without translating the destination address: the VM sees the frontend address and must have it configured on a loopback. It's required for SQL Server availability group listeners.</p><p><b>5. VMs without a public IP egress through the load balancer's address, with a controlled number of SNAT ports</b></p><p>A Standard public load balancer's <b>outbound rules</b> define SNAT translation for traffic leaving the pool: frontend addresses used and number of ports allocated per instance. The <b>NAT gateway</b> remains the recommended method for internet egress, when possible.</p><p><b>6. RDP to each of the three VMs through ports 50001 to 50003 of the public address</b></p><p>An <b>inbound NAT rule</b> forwards a port of the frontend address to a port of a specific VM (for example 50001 → VM1:3389). A load-balancing rule, instead, <b>distributes</b> traffic across all VMs in the pool.</p><p>In production, Azure Bastion is a better solution for RDP.</p><p><b>7. Distribute to VMs referenced only by their private IP addresses, without referencing their interfaces</b></p><p>A Standard load balancer offers a backend pool configured <b>by network interface</b> (default) or <b>by IP address</b> (specifying the virtual network and addresses). The IP-based pool simplifies some deployments (containers, pre-provisioned resources).</p>",
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
 "keep": "Instance removed from distribution = failing health probe. Always the same VM = “Client IP” persistence. All traffic to NVAs = HA ports on a Standard internal LB. SQL Always On behind an LB = floating IP. Egress through the LB address with controlled SNAT = outbound rule. A load balancer port to a specific VM = inbound NAT rule. Pool by private addresses = IP-based pool."
},
{
 "id": "D4-308",
 "dom": 4,
 "type": "hot",
 "stem": "<p>Application Gateway v2 AG1 publishes several web applications. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Host www.contoso.com, www.fabrikam.com, and www.tailspin.com, each with its own pool:",
   "o": [
    "Three Application Gateways, one per site",
    "Three private frontend IPs and one rule",
    "Three multi-site listeners and three rules",
    "Three health probes and one basic listener"
   ],
   "a": 2
  },
  {
   "l": "Redirect every HTTP (80) request to HTTPS (443):",
   "o": [
    "An HTTPS health probe on the backend pool",
    "An inbound NAT rule from port 80 to port 443",
    "A NAT gateway on the gateway's subnet",
    "An HTTP listener with a redirection rule"
   ],
   "a": 3
  },
  {
   "l": "Route /video/* to Pool-Video and everything else to Pool-Default — rule type:",
   "o": [
    "An inbound NAT rule per path",
    "A path-based rule",
    "A basic rule with two pools",
    "An outbound rule to Pool-Video"
   ],
   "a": 1
  },
  {
   "l": "End-to-end HTTPS to servers with a certificate from an internal CA — backend settings:",
   "o": [
    "The HTTPS protocol and the authority's root certificate",
    "A public IP address on each backend server",
    "The HTTP protocol only, behind an HTTPS listener",
    "A DNAT rule to port 443 on each server"
   ],
   "a": 0
  },
  {
   "l": "Add or remove instances based on traffic, between 2 and 10:",
   "o": [
    "An outbound rule with 10 frontend addresses",
    "Autoscaling (minimum 2, maximum 10)",
    "A virtual machine scale set of 2 to 10",
    "A health probe per instance (2 to 10)"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Host www.contoso.com, www.fabrikam.com, and www.tailspin.com, each with its own pool:</b></p><p>A <b>multi-site listener</b> filters requests by host name (Host header). Each listener is associated with a <b>routing rule</b> that sends to the right backend pool. A single gateway can thus host several sites on the same IP address.</p><p><b>2. Redirect every HTTP (80) request to HTTPS (443):</b></p><p>Application Gateway handles <b>redirections</b>: a listener on port 80, and a rule that redirects to the HTTPS listener (permanent 301 redirection). You can also redirect to an external URL.</p><p><b>3. Route /video/* to Pool-Video and everything else to Pool-Default — rule type:</b></p><p>A <b>path-based</b> rule maps path patterns (/video/*) to pools and settings. Requests that don't match any path go to the <b>default target</b>.</p><p><b>4. End-to-end HTTPS to servers with a certificate from an internal CA — backend settings:</b></p><p>For <b>end-to-end encryption</b>, the backend settings use <b>HTTPS</b>. With v2, if the servers' certificate isn't issued by a well-known public authority, you upload the internal authority's <b>trusted root certificate</b>.</p><p><b>5. Add or remove instances based on traffic, between 2 and 10:</b></p><p>The Application Gateway <b>v2</b> SKU supports built-in <b>autoscaling</b>, with minimum and maximum instance bounds. The v1 SKU only allowed a fixed number of instances.</p>",
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
 "keep": "Several sites on one gateway = multi-site listeners + rules. HTTP → HTTPS = port 80 listener + redirection rule. URL-based routing = path-based rule + default target. End-to-end TLS + internal CA = HTTPS + trusted root. AppGW v2 = autoscaling (min/max)."
},
{
 "id": "D4-309",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You're deploying and troubleshooting Application Gateway v2 AG2, with WAF, in VNet1. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Subnet requirement for the deployment:",
   "o": [
    "A subnet dedicated to Application Gateways",
    "The same subnet as the backend pool VMs",
    "The GatewaySubnet subnet, at least /27",
    "The AzureBastionSubnet subnet, as a /26"
   ],
   "a": 0
  },
  {
   "l": "After adding an NSG to its subnet, AG2 stops working — inbound rule to allow:",
   "o": [
    "Port 3389 from the Internet tag",
    "Ports 65200-65535 from GatewayManager",
    "Port 1433 from the AzureCloud tag",
    "Port 22 from the VirtualNetwork tag"
   ],
   "a": 1
  },
  {
   "l": "Watch the requests the WAF would block, without blocking anything — mode:",
   "o": [
    "Detection",
    "Policy audit",
    "Prevention",
    "Disabled"
   ],
   "a": 0
  },
  {
   "l": "AG2 returns 502 while the VMs answer directly — check first:",
   "o": [
    "Backend health (probe, NSG, ports, certificates)",
    "The access tier of the log storage account",
    "The DNAT rules of the firewall in front of the gateway",
    "The VPN gateway and the routes to on-premises"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Subnet requirement for the deployment:</b></p><p>Application Gateway requires a <b>dedicated subnet</b> (you can put several Application Gateways in it, but no other resources). For v2, a /24 is recommended for autoscaling. Its name is free; it must not be the GatewaySubnet, reserved for VPN and ExpressRoute gateways.</p><p><b>2. After adding an NSG to its subnet, AG2 stops working — inbound rule to allow:</b></p><p>Application Gateway v2 requires ports <b>65200 to 65535</b> to be open inbound from the <b>GatewayManager</b> tag (communication with Azure infrastructure). You must also allow AzureLoadBalancer and client traffic on the listener ports.</p><p><b>3. Watch the requests the WAF would block, without blocking anything — mode:</b></p><p>In <b>Detection</b> mode, the WAF logs detected threats without blocking them. After tuning (exclusions, custom rules), you switch to <b>Prevention</b> mode to block.</p><p><b>4. AG2 returns 502 while the VMs answer directly — check first:</b></p><p>A <b>502</b> error means Application Gateway can't reach a healthy backend. The <b>Backend health</b> page shows why: failing probe (path or expected code), blocking NSG, wrong port or host name, untrusted backend certificate in HTTPS.</p>",
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
 "keep": "Application Gateway = dedicated subnet (free name, /24 recommended for v2). NSG on the AppGW v2 subnet = GatewayManager 65200-65535. Observe without blocking = Detection; block = Prevention. 502 error = check backend health."
},
{
 "id": "D4-310",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You need to publish several applications. Which traffic distribution solution should you use for each?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Application",
  "Solution"
 ],
 "srcs": [
  "Application Gateway v2 with WAF",
  "Application Gateway v2 with a private frontend",
  "Azure Front Door",
  "Traffic Manager, Priority method",
  "Traffic Manager, nested profiles",
  "A cross-region load balancer",
  "A Standard internal load balancer"
 ],
 "tgts": [
  {
   "l": "One region: HTTPS with a certificate, path-based routing to two pools, SQL injection protection",
   "a": 0
  },
  {
   "l": "Internal app on a private address only, with TLS termination and path-based routing",
   "a": 1
  },
  {
   "l": "Single global HTTP entry point, static caching, dynamic acceleration, and WAF",
   "a": 2
  },
  {
   "l": "Everything to France Central while it works, West Europe as backup, several protocols",
   "a": 3
  },
  {
   "l": "Performance method to pick the region, then Weighted between two versions per region",
   "a": 4
  },
  {
   "l": "TCP app in three regions, one global anycast public IP, instant failover",
   "a": 5
  }
 ],
 "expl": "<p><b>1. One region: HTTPS with a certificate, path-based routing to two pools, SQL injection protection</b></p><p><b>Application Gateway</b> is a layer 7 load balancer: TLS termination, <b>path-based routing</b> (/images/*, /api/*), multi-site routing by host name, header rewrite. The <b>WAF</b> tier adds a web application firewall (OWASP rules against SQL injection, XSS…).</p><p>Load Balancer works at layer 4 and doesn't read URLs.</p><p><b>2. Internal app on a private address only, with TLS termination and path-based routing</b></p><p>Application Gateway can have a <b>private frontend address</b> (with or without a public frontend depending on the configuration) to publish internal applications, with all its layer 7 features. Front Door and Traffic Manager are global public services.</p><p><b>3. Single global HTTP entry point, static caching, dynamic acceleration, and WAF</b></p><p><b>Azure Front Door</b> is a global layer 7 entry point on Microsoft's edge network: routing to the fastest origin, failover, caching (CDN), TLS termination, and WAF.</p><p>Traffic Manager only does DNS, with no cache or WAF. Application Gateway is regional.</p><p><b>4. Everything to France Central while it works, West Europe as backup, several protocols</b></p><p><b>Traffic Manager</b> distributes through <b>DNS</b>, so for any protocol. The <b>Priority</b> method sends everything to the priority 1 endpoint as long as it's healthy, and fails over to the next one in case of an outage (detected by endpoint monitoring).</p><p><b>5. Performance method to pick the region, then Weighted between two versions per region</b></p><p>A profile has only one routing method. <b>Nested profiles</b> let you combine methods: the parent profile (Performance) sends to nested endpoints, which are child profiles (Weighted).</p><p><b>6. TCP app in three regions, one global anycast public IP, instant failover</b></p><p>The <b>cross-region load balancer</b> (Global tier) provides a global <b>anycast</b> IP address in front of regional Standard load balancers, for TCP/UDP traffic, with failover that doesn't depend on DNS caching.</p><p>Traffic Manager is DNS-based (failover subject to TTL). Application Gateway is regional and HTTP.</p>",
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
 "keep": "HTTPS + URL path + WAF in one region = Application Gateway v2 WAF. Internal L7 app = AppGW with a private frontend. Global HTTP entry point + cache + WAF = Front Door. Primary/backup, any protocol = Traffic Manager Priority. Combining methods = nested profiles. Global L4 anycast = cross-region load balancer."
},
{
 "id": "D4-311",
 "dom": 4,
 "type": "hot",
 "stem": "<p>One app is published in two regions with Traffic Manager, and another behind Azure Front Door. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "After a priority change, some clients still go to the old endpoint for a few minutes — reason:",
   "o": [
    "Traffic Manager takes 24 hours to propagate a priority change",
    "Traffic Manager keeps existing clients' TCP sessions open",
    "Clients and resolvers keep the DNS response cached (TTL)",
    "The affected clients use a VPN tunnel that bypasses DNS"
   ],
   "a": 2
  },
  {
   "l": "Include a site hosted by another cloud provider — endpoint type:",
   "o": [
    "Nested endpoint",
    "Private endpoint",
    "Azure endpoint",
    "External endpoint"
   ],
   "a": 3
  },
  {
   "l": "An endpoint returns 500 errors but stays “healthy” — check:",
   "o": [
    "The profile's routing method (Priority or Weighted)",
    "The profile's monitoring: protocol, port, path, codes",
    "The number of active endpoints in the profile",
    "The profile's DNS TTL, to be lowered to 0 to force the status"
   ],
   "a": 1
  },
  {
   "l": "The App Service app must only be reachable through Azure Front Door:",
   "o": [
    "A DNAT rule on a firewall placed in front of the web app",
    "Access restrictions with AzureFrontDoor.Backend and X-Azure-FDID",
    "A NAT gateway with Front Door's address allowed in the app",
    "An NSG associated with the app that only allows Front Door"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. After a priority change, some clients still go to the old endpoint for a few minutes — reason:</b></p><p>Traffic Manager works through <b>DNS</b>: it returns the name of the chosen endpoint, and that response stays cached for the profile's <b>TTL</b> (60 seconds by default, configurable). Connections never go through Traffic Manager.</p><p><b>2. Include a site hosted by another cloud provider — endpoint type:</b></p><p>Traffic Manager accepts <b>Azure</b> endpoints (Azure resources), <b>external</b> endpoints (FQDN or IP address outside Azure), and <b>nested</b> endpoints (another Traffic Manager profile, to combine routing methods).</p><p><b>3. An endpoint returns 500 errors but stays “healthy” — check:</b></p><p>Traffic Manager judges an endpoint's state from its <b>monitoring</b> (HTTP, HTTPS, or TCP, port, path, expected codes). If the monitored path (for example the root) returns 200 while the application fails elsewhere, you must monitor a more representative health path.</p><p><b>4. The App Service app must only be reachable through Azure Front Door:</b></p><p>App Service <b>access restrictions</b> allow the <b>AzureFrontDoor.Backend</b> tag. Since all Front Door instances share these addresses, you also filter on the <b>X-Azure-FDID</b> header (your profile ID). You can also use Front Door Premium with a private endpoint.</p>",
 "portal": {
  "path": [
   "Traffic Manager profiles",
   "TM1"
  ],
  "title": "TM1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*DNS time to live (TTL)",
    "60 s"
   ]
  ]
 },
 "keep": "Traffic Manager = DNS; change visible after the TTL. Outside Azure = external endpoint. Endpoint misjudged = monitoring settings. Only through Front Door = AzureFrontDoor.Backend tag + X-Azure-FDID."
},
{
 "id": "D4-312",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You're troubleshooting connectivity for several VMs in VNet1 and the on-premises site. Which Network Watcher tool should you use for each need?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Tools",
 "tgtHead": [
  "Need",
  "Tool"
 ],
 "srcs": [
  "IP flow verify",
  "Next hop",
  "Connection troubleshoot",
  "Packet capture",
  "Connection monitor",
  "Topology",
  "VPN troubleshoot"
 ],
 "tgts": [
  {
   "l": "Find which NSG rule allows or blocks port 22 to VM4 from a given address",
   "a": 0
  },
  {
   "l": "Test an end-to-end TCP connection to an on-premises server and see which hop fails",
   "a": 2
  },
  {
   "l": "Capture 10 minutes of VM10's traffic to analyze in Wireshark",
   "a": 3
  },
  {
   "l": "Continuously monitor latency and availability between VM11 and an on-premises server, with alerts",
   "a": 4
  },
  {
   "l": "See a diagram of a virtual network's resources and their relationships",
   "a": 5
  },
  {
   "l": "Diagnose a “Not connected” site-to-site connection while the on-premises firewall is correct",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Find which NSG rule allows or blocks port 22 to VM4 from a given address</b></p><p><b>IP flow verify</b> simulates a packet (direction, protocol, addresses, and ports) to or from a VM, and tells you whether it's allowed or denied, and by <b>which NSG rule</b>.</p><p>Next hop concerns routing. Packet capture records real traffic. Connection monitor watches connectivity over time.</p><p><b>2. Test an end-to-end TCP connection to an on-premises server and see which hop fails</b></p><p><b>Connection troubleshoot</b> tests a TCP or ICMP connection from a VM to a destination, shows the hops, latency, and the likely cause of a failure (NSG rule, route, unreachable destination).</p><p><b>3. Capture 10 minutes of VM10's traffic to analyze in Wireshark</b></p><p>Network Watcher <b>packet capture</b> records a VM's traffic (with filters and duration) to a .cap file stored in a storage account or on the VM, to open with Wireshark. It uses the Network Watcher Agent extension.</p><p>Flow logs only record flow metadata, not packet contents.</p><p><b>4. Continuously monitor latency and availability between VM11 and an on-premises server, with alerts</b></p><p><b>Connection monitor</b> regularly tests connections between sources (Azure VMs, on-premises machines with the agent) and destinations, records latency and loss, and enables Azure Monitor <b>alerts</b>.</p><p>The other tools do one-off tests.</p><p><b>5. See a diagram of a virtual network's resources and their relationships</b></p><p>Network Watcher <b>topology</b> generates an interactive diagram of network resources and their links, across one or more subscriptions and regions.</p><p><b>6. Diagnose a “Not connected” site-to-site connection while the on-premises firewall is correct</b></p><p>Network Watcher's <b>VPN troubleshoot</b> analyzes the gateway and connection, and produces a report (IKE logs, shared key or policy setting errors). Common causes: different shared key, wrong public IP address or address ranges in the local network gateway.</p>",
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
 "keep": "Which NSG rule blocks = IP flow verify. End-to-end test with hops = connection troubleshoot. Packet contents (Wireshark) = packet capture. Continuous monitoring + alerts = connection monitor. Diagram of network resources = topology. Diagnosing a VPN = Network Watcher, VPN troubleshoot."
},
{
 "id": "D4-313",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>The security team wants to analyze VNet1's traffic and effective configuration. What should you use for each need?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Features",
 "tgtHead": [
  "Need",
  "Feature"
 ],
 "srcs": [
  "Virtual network flow logs",
  "Traffic Analytics",
  "Effective routes",
  "Effective security rules",
  "A diagnostic setting to Log Analytics",
  "The activity log"
 ],
 "tgts": [
  {
   "l": "Record all accepted and denied IP traffic in VNet1",
   "a": 0
  },
  {
   "l": "Spot the VMs that talk most with the internet and unnecessarily open ports",
   "a": 1
  },
  {
   "l": "See the route actually applied to VM1's interface (system, BGP, and UDR combined)",
   "a": 2
  },
  {
   "l": "See every rule applied to VM9's interface, subnet and interface NSGs combined",
   "a": 3
  },
  {
   "l": "Query the logs of the Azure Firewall rules that allowed or denied flows",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Record all accepted and denied IP traffic in VNet1</b></p><p><b>Flow logs</b> record IP flows (source, destination, ports, decision). <b>Virtual network</b> flow logs replace NSG flow logs (being retired). They're written to a storage account, and <b>Traffic Analytics</b> analyzes them in Log Analytics.</p><p><b>2. Spot the VMs that talk most with the internet and unnecessarily open ports</b></p><p><b>Traffic Analytics</b> processes flow logs and shows dashboards in Log Analytics: flows by VM, country, ports, malicious traffic, unused open ports.</p><p><b>3. See the route actually applied to VM1's interface (system, BGP, and UDR combined)</b></p><p>A network interface's <b>effective routes</b> list all applied routes and show which are active. Network Watcher's <b>Next hop</b> directly gives the next hop and route table used for a specific destination.</p><p>Effective security rules concern NSGs, not routing.</p><p><b>4. See every rule applied to VM9's interface, subnet and interface NSGs combined</b></p><p><b>Effective security rules</b> (on the network interface or in Network Watcher) show the combination of the subnet and interface NSGs, with service tags expanded into address ranges.</p><p><b>5. Query the logs of the Azure Firewall rules that allowed or denied flows</b></p><p>Azure Firewall sends its logs (application, network, DNAT, DNS proxy, IDPS rules) through a <b>diagnostic setting</b>. With Log Analytics and <b>resource-specific tables</b> (AZFWNetworkRule, AZFWApplicationRule…), you query them in KQL, and built-in workbooks visualize them.</p>",
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
 "keep": "Recording and analyzing flows = VNet flow logs + Traffic Analytics. Analyzing flows = Traffic Analytics. Which route applies = effective routes (or Next hop). All applied NSG rules = effective security rules. Firewall logs = diagnostic setting → Log Analytics."
},
{
 "id": "D4-314",
 "dom": 4,
 "type": "yngrid",
 "stem": "<p>You manage VMs, public IP addresses, and Standard load balancers in VNet1.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A Standard public IP address is always static.",
   "a": 0
  },
  {
   "l": "A VM with a Standard public IP and no NSG is reachable from the internet on port 80.",
   "a": 1
  },
  {
   "l": "A VM behind a Standard public load balancer, on a subnet with a NAT gateway, egresses to the internet through the NAT gateway's address.",
   "a": 0
  },
  {
   "l": "A Standard internal load balancer gives the VMs in its pool outbound internet access.",
   "a": 1
  },
  {
   "l": "Azure Load Balancer preserves the client's source IP address.",
   "a": 0
  },
  {
   "l": "You can detach a VM's primary network interface and attach it to another VM.",
   "a": 1
  }
 ],
 "expl": "<p><b>1. A Standard public IP address is always static.</b></p><p><b>Standard</b> public IP addresses are <b>always static</b>. They're “secure by default”: inbound traffic is denied until an NSG allows it. They support zones and are required by Standard load balancers, NAT gateways, and Bastion.</p><p>The Basic SKU (dynamic or static, open by default) was retired in September 2025.</p><p><b>2. A VM with a Standard public IP and no NSG is reachable from the internet on port 80.</b></p><p><b>Standard</b> public IP addresses are <b>secure by default</b>: without an NSG that allows traffic, inbound connections are denied. (With the old Basic SKU, the VM was open without an NSG.)</p><p><b>3. A VM behind a Standard public load balancer, on a subnet with a NAT gateway, egresses to the internet through the NAT gateway's address.</b></p><p>The <b>NAT gateway</b> takes precedence over other egress methods (load balancer outbound rules, instance public addresses). <b>Inbound</b> traffic through the load balancer keeps working, and its responses go back through the load balancer.</p><p><b>4. A Standard internal load balancer gives the VMs in its pool outbound internet access.</b></p><p>An <b>internal</b> load balancer has no public address, so no SNAT to the internet. You need an explicit egress method: <b>NAT gateway</b> (recommended), instance public addresses, public load balancer with outbound rules, or firewall.</p><p><b>5. Azure Load Balancer preserves the client's source IP address.</b></p><p>Azure Load Balancer works at layer 4 and <b>preserves the source IP address</b> of clients (no proxy). If the application sees another address, another component (proxy, Application Gateway) is upstream. Application Gateway passes the client address in the <b>X-Forwarded-For</b> header.</p><p><b>6. You can detach a VM's primary network interface and attach it to another VM.</b></p><p>A VM always has a <b>primary</b> interface, which you can't detach. A <b>secondary</b> interface can be detached (VM stopped and deallocated) then attached to another VM in the <b>same virtual network</b> and region.</p>",
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
 "keep": "Standard public IP = always static, secure by default. Standard IP with no NSG = nothing gets in. NAT gateway = takes precedence for egress. Internal LB = no egress: NAT gateway. LB preserves the client IP; AppGW puts it in X-Forwarded-For. Primary NIC can't be detached; secondary = VM deallocated + same VNet."
},
{
 "id": "D4-315",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You manage how VNet1's resources are exposed to and from the internet. What should you use for each requirement?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "A NAT gateway",
  "Azure Bastion",
  "A public IP address prefix",
  "A Private Link service",
  "Azure DDoS Network Protection",
  "A public load balancer",
  "A VPN gateway"
 ],
 "tgts": [
  {
   "l": "Subnet-Private VMs egress through fixed IPs known to partners, with no inbound traffic",
   "a": 0
  },
  {
   "l": "Subnet-Batch VMs use 4 fixed public IPs outbound to avoid SNAT port exhaustion",
   "a": 0
  },
  {
   "l": "RDP and SSH to the VMs from the portal, over HTTPS, with no public IP on the VMs",
   "a": 1
  },
  {
   "l": "Reserve a contiguous range of 16 public addresses to give to a partner",
   "a": 2
  },
  {
   "l": "Privately expose a service behind an internal load balancer to customers in other tenants",
   "a": 3
  },
  {
   "l": "Protect VNet1's public IPs against DDoS, with reports, alerts, and a rapid response team",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Subnet-Private VMs egress through fixed IPs known to partners, with no inbound traffic</b></p><p>A <b>NAT gateway</b> provides <b>outbound</b> connectivity for one or more subnets through static <b>Standard</b> public IP addresses (or a prefix). It doesn't accept unsolicited inbound connections. It's the recommended method for internet egress.</p><p><b>2. Subnet-Batch VMs use 4 fixed public IPs outbound to avoid SNAT port exhaustion</b></p><p>Each public address of a <b>NAT gateway</b> provides about 64,000 SNAT ports, shared dynamically among all VMs in the subnet. Adding addresses (up to 16) increases capacity and reduces the risk of exhaustion.</p><p><b>3. RDP and SSH to the VMs from the portal, over HTTPS, with no public IP on the VMs</b></p><p><b>Azure Bastion</b> is a managed service deployed in the <b>AzureBastionSubnet</b> subnet (/26 minimum) with a Standard public IP address. Administrators open the RDP or SSH session in the browser, over HTTPS (443), and the VMs only need a private address.</p><p><b>4. Reserve a contiguous range of 16 public addresses to give to a partner</b></p><p>A <b>public IP address prefix</b> reserves a contiguous range of Standard addresses (/28 = 16 addresses). You then create public IP addresses from this prefix. The partner can allow the whole range at once.</p><p><b>5. Privately expose a service behind an internal load balancer to customers in other tenants</b></p><p>A <b>Private Link service</b>, placed in front of a Standard internal load balancer, lets consumers (even in other tenants) create a <b>private endpoint</b> to your service, with no peering or public exposure, and even with overlapping address spaces.</p><p><b>6. Protect VNet1's public IPs against DDoS, with reports, alerts, and a rapid response team</b></p><p>Basic (infrastructure) DDoS protection exists for everyone. <b>DDoS Network Protection</b>, through a <b>DDoS protection plan</b> associated with virtual networks, adds adaptive tuning, telemetry, alerts, cost protection, and access to the DDoS Rapid Response team. DDoS IP Protection protects specific IP addresses.</p>",
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
 "keep": "Internet egress with fixed IPs, no inbound = NAT gateway. SNAT exhaustion = more IPs on the NAT gateway. RDP/SSH through the browser, no public IP on VMs = Bastion. Contiguous public range = public IP address prefix. Exposing your service to other tenants = Private Link service. DDoS with alerts + response team = DDoS Network Protection."
},
{
 "id": "D4-316",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You govern the network resources of a production subscription and a development subscription. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A VM must be reachable as vm-demo.francecentral.cloudapp.azure.com:",
   "o": [
    "A DNS name label on its public IP",
    "A private endpoint for the VM",
    "A cloudapp.azure.com private DNS zone",
    "An MX record to the VM's address"
   ],
   "a": 0
  },
  {
   "l": "No VM in the subscription may receive a public IP:",
   "o": [
    "An NSG denying all inbound traffic on each subnet",
    "A 0.0.0.0/0 → None route table on each subnet",
    "An Azure Policy denying public IPs on network interfaces",
    "A NAT gateway on every subnet in the subscription, with no inbound IP"
   ],
   "a": 2
  },
  {
   "l": "The development subscription must never create a VPN gateway or an ExpressRoute circuit:",
   "o": [
    "An NSG blocking the IPsec ports on each virtual network",
    "A private DNS zone hiding the VPN endpoints",
    "A Not allowed resource types policy (Azure Policy)",
    "A route table that removes the routes to on-premises"
   ],
   "a": 2
  },
  {
   "l": "Creating a public IP in France Central fails (limit of 50) — check:",
   "o": [
    "The GatewaySubnet size of each virtual network",
    "The number of NSGs associated with the interfaces",
    "The SKU family of the VMs receiving the addresses",
    "The subscription's public IP quota in the region"
   ],
   "a": 3
  },
  {
   "l": "Spot overly permissive NSG rules and management ports open to the internet:",
   "o": [
    "Azure DNS and its query logs",
    "Microsoft Defender for Cloud",
    "Traffic Manager, overview",
    "Azure Resource Mover assessment"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. A VM must be reachable as vm-demo.francecentral.cloudapp.azure.com:</b></p><p>A public IP address can have a <b>DNS name label</b>, which creates the name <code>&lt;label&gt;.&lt;region&gt;.cloudapp.azure.com</code> pointing to it. For a name in your own domain, you then create a CNAME to that name (or an alias in Azure DNS).</p><p><b>2. No VM in the subscription may receive a public IP:</b></p><p><b>Azure Policy</b> (for example the built-in policy “Network interfaces should not have public IPs”, Deny effect) prevents the configuration itself. An NSG filters traffic but doesn't prevent assigning an address.</p><p><b>3. The development subscription must never create a VPN gateway or an ExpressRoute circuit:</b></p><p><b>Azure Policy</b> with the <b>Not allowed resource types</b> policy prevents creating these resources in the subscription, whatever the user's role.</p><p><b>4. Creating a public IP in France Central fails (limit of 50) — check:</b></p><p>Network resources also have <b>quotas</b> per subscription and region (public IP addresses, virtual networks, NSGs…). You view them in <b>Usage + quotas</b> and request an increase if needed.</p><p><b>5. Spot overly permissive NSG rules and management ports open to the internet:</b></p><p><b>Microsoft Defender for Cloud</b> assesses configuration (including NSGs) and makes recommendations, for example closing management ports exposed to the internet, enabling just-in-time access, or hardening NSG rules.</p>",
 "portal": {
  "path": [
   "Public IP addresses",
   "vm-demo-pip"
  ],
  "title": "vm-demo-pip | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*DNS name label",
    "vm-demo"
   ]
  ],
  "btn": "Save"
 },
 "keep": "cloudapp.azure.com name = public IP DNS label. Forbidding a configuration = Azure Policy (Deny). Forbidding a resource type = Azure Policy. Creation denied = check network quotas. NSG recommendations = Defender for Cloud."
},
{
 "id": "D4-317",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You manage VNet1's route tables. What's the result or the required action in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "RT1 (0.0.0.0/0 → appliance 10.0.2.4) is associated with Subnet1 — VMs' internet traffic:",
   "o": [
    "It's sent to the appliance 10.0.2.4",
    "It goes directly to the internet through the system route",
    "It's sent to the VPN gateway",
    "It's dropped, for lack of a route"
   ],
   "a": 0
  },
  {
   "l": "Routes 10.0.0.0/8 → appliance 10.1.0.4 and 10.2.0.0/16 → gateway — packet to 10.2.5.20:",
   "o": [
    "To the virtual appliance 10.1.0.4",
    "To the internet, through the system route",
    "It's dropped (conflicting routes)",
    "To the virtual network gateway"
   ],
   "a": 3
  },
  {
   "l": "RT2, associated with Subnet2, must also apply to Subnet3's VMs:",
   "o": [
    "Associate RT2 with each VM's network interface",
    "Associate RT2 with Subnet3",
    "You must create a copy of RT2 for Subnet3",
    "Associate RT2 with the virtual network"
   ],
   "a": 1
  },
  {
   "l": "Associate a Sub1 route table with a subnet of a Sub2 network, same region:",
   "o": [
    "It's impossible: they need the same subscription and region",
    "You must first peer the virtual networks of both subscriptions",
    "You need a VPN gateway between the two subscriptions",
    "The association works, since both are in the same region"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. RT1 (0.0.0.0/0 → appliance 10.0.2.4) is associated with Subnet1 — VMs' internet traffic:</b></p><p>A user-defined route replaces the default system route 0.0.0.0/0 → Internet. Any traffic that doesn't match a more specific route (such as the virtual network's) goes to the <b>appliance</b>, often a firewall, which must have IP forwarding enabled.</p><p><b>2. Routes 10.0.0.0/8 → appliance 10.1.0.4 and 10.2.0.0/16 → gateway — packet to 10.2.5.20:</b></p><p>Azure chooses the route with the <b>longest prefix</b> (the most specific) that matches the destination. 10.2.5.20 matches /8 and /16; /16 is more specific, so the packet goes to the <b>gateway</b>.</p><p>With equal prefixes, the order of preference is: user-defined route, then BGP, then system.</p><p><b>3. RT2, associated with Subnet2, must also apply to Subnet3's VMs:</b></p><p>A route table is associated with <b>subnets</b>, and the same table can be associated with <b>several</b> subnets (in virtual networks of the same region and subscription). It isn't associated with network interfaces or the whole virtual network.</p><p>A subnet, however, has only <b>one</b> route table at a time.</p><p><b>4. Associate a Sub1 route table with a subnet of a Sub2 network, same region:</b></p><p>A route table can only be associated with subnets of virtual networks in the <b>same subscription</b> and <b>same region</b>. Same rule for NSGs (same region).</p>",
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
 "keep": "UDR 0.0.0.0/0 → appliance = all internet traffic goes through the firewall. Longest prefix wins; on a tie: UDR > BGP > system. One table can serve several subnets; one subnet = one table. Route table = same subscription and region as the VNet."
},
{
 "id": "D4-318",
 "dom": 4,
 "type": "dragdrop",
 "stem": "<p>You're designing routing and filtering for a hub-and-spoke topology connected to on-premises. What should you configure for each requirement?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Configurations",
 "tgtHead": [
  "Requirement",
  "Configuration"
 ],
 "srcs": [
  "UDRs to the appliance",
  "IP forwarding on the interface",
  "Propagate gateway routes: No",
  "Forced tunneling to the VPN gateway",
  "An AzureFirewallManagementSubnet",
  "Two NVAs behind an internal load balancer with HA ports",
  "Azure Firewall in the hub with FQDN rules",
  "A NAT gateway"
 ],
 "tgts": [
  {
   "l": "Filter traffic between two subnets of one network through an NVA",
   "a": 0
  },
  {
   "l": "A Linux VM acts as a router, but Azure drops packets not addressed to it",
   "a": 1
  },
  {
   "l": "Subnet-App VMs go through the firewall, even for on-premises networks learned through BGP",
   "a": 2
  },
  {
   "l": "All VM internet traffic goes through the on-premises firewall for inspection",
   "a": 3
  },
  {
   "l": "Azure Firewall must work with forced tunneling to on-premises",
   "a": 4
  },
  {
   "l": "The hub's single NVA must no longer be a single point of failure",
   "a": 5
  },
  {
   "l": "Centrally filter internet egress from several networks by FQDN, with logs",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Filter traffic between two subnets of one network through an NVA</b></p><p>By default, traffic between subnets follows the virtual network system route. A more specific <b>user-defined route</b> (the other subnet's prefix, next hop Virtual appliance) forces traffic through the NVA. The subnet prefix is longer than the virtual network's, so it takes precedence.</p><p><b>2. A Linux VM acts as a router, but Azure drops packets not addressed to it</b></p><p>By default, Azure drops packets whose destination address isn't the network interface's. <b>IP forwarding</b> on the network interface lifts this restriction. You must also enable routing in the OS (for example <code>net.ipv4.ip_forward=1</code>).</p><p><b>3. Subnet-App VMs go through the firewall, even for on-premises networks learned through BGP</b></p><p>With <b>Propagate gateway routes</b> set to No, routes learned through BGP (and on-premises ranges) aren't added to the subnets associated with the table. Only your routes (for example 0.0.0.0/0 and on-premises ranges to the firewall) apply.</p><p>Routes have no numeric priority.</p><p><b>4. All VM internet traffic goes through the on-premises firewall for inspection</b></p><p><b>Forced tunneling</b> sends internet traffic to the on-premises site through the VPN: with a route table 0.0.0.0/0 → Virtual network gateway (and a default site on the gateway), or by receiving the default route through BGP.</p><p>A NAT gateway would send traffic straight out of Azure.</p><p><b>5. Azure Firewall must work with forced tunneling to on-premises</b></p><p>With forced tunneling, the firewall's management traffic must stay separate: you enable the <b>management NIC</b>, which uses the <b>AzureFirewallManagementSubnet</b> subnet (/26) and a dedicated public IP address, with direct internet egress.</p><p><b>6. The hub's single NVA must no longer be a single point of failure</b></p><p>The recommended pattern: two (or more) NVAs in a pool of a <b>Standard internal load balancer</b> with <b>HA ports</b>. Spoke routes target the load balancer's <b>frontend address</b>, which sends traffic to a healthy NVA thanks to the health probe.</p><p><b>7. Centrally filter internet egress from several networks by FQDN, with logs</b></p><p><b>Azure Firewall</b> is a managed stateful firewall. Its <b>application rules</b> filter by FQDN (HTTP/HTTPS); its <b>network rules</b> by address and port; its <b>DNAT rules</b> publish services. You place it in the hub and direct spoke traffic to it with 0.0.0.0/0 routes.</p><p>NSGs don't filter by domain name.</p>",
 "portal": {
  "path": [
   "Route tables",
   "RT-SubA"
  ],
  "title": "Routes",
  "rows": [
   [
    "*10.0.2.0/24",
    "Virtual appliance · NVA"
   ]
  ]
 },
 "keep": "Inter-subnet through an NVA = UDR with the subnet prefix. VM that routes = IP forwarding (Azure + OS). Ignoring the gateway's BGP routes = Propagate gateway routes: No. Internet through on-premises = forced tunneling. Firewall + forced tunneling = AzureFirewallManagementSubnet. HA NVA = 2 NVAs + internal LB with HA ports; UDR to the frontend. Centralized FQDN filtering = Azure Firewall + UDRs in the spokes."
},
{
 "id": "D4-319",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You're deploying Azure Firewall in the hubs of several regions and subscriptions. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "FQDN-based network rules work; VMs resolve names through the firewall:",
   "o": [
    "An FQDN tag in the network rule",
    "DNAT mode on the firewall's private address",
    "TLS inspection with an intermediate certificate",
    "DNS proxy, with the firewall as DNS server"
   ],
   "a": 3
  },
  {
   "l": "TLS decryption, IDPS, and full URL filtering — SKU:",
   "o": [
    "Premium",
    "Standard",
    "None: it isn't possible",
    "Basic"
   ],
   "a": 0
  },
  {
   "l": "The firewalls share base rules, with local rules on top:",
   "o": [
    "A manual copy of the rules on each firewall, region by region",
    "Parent and child firewall policies (Firewall Manager)",
    "Azure Policy only, with one initiative per region",
    "Shared NSGs associated with the firewalls' subnets"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. FQDN-based network rules work; VMs resolve names through the firewall:</b></p><p>FQDNs in <b>network rules</b> require the firewall and clients to resolve names the same way. With <b>DNS proxy</b>, the firewall receives DNS queries from the VMs (its private address is configured as the DNS server) and forwards them to the configured DNS.</p><p><b>2. TLS decryption, IDPS, and full URL filtering — SKU:</b></p><p>The <b>Premium</b> SKU adds <b>TLS inspection</b>, <b>IDPS</b> (signature-based intrusion detection and prevention), full <b>URL filtering</b>, and web categories. Standard filters by FQDN and uses threat intelligence. Basic targets small businesses.</p><p><b>3. The firewalls share base rules, with local rules on top:</b></p><p>A <b>firewall policy</b> can inherit from a <b>parent policy</b>: base rules are defined once, and each child policy adds its own rules. <b>Azure Firewall Manager</b> centralizes management.</p>",
 "portal": {
  "path": [
   "Firewall policies",
   "FWP1"
  ],
  "title": "FWP1 | DNS",
  "menu": [
   "*DNS"
  ],
  "rows": [
   [
    "*DNS Proxy",
    "Enabled"
   ],
   [
    "VNets",
    "DNS = 10.0.0.4 (firewall)"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "FQDNs in network rules = DNS proxy. TLS + IDPS + URL = Firewall Premium. Common + local rules = parent / child policies."
},
{
 "id": "D4-320",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You manage several virtual networks and their peerings. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VNet1-VNet2 and VNet2-VNet3 are peered; VM1 (VNet1) must reach VM3 (VNet3) with the least effort:",
   "o": [
    "Enable gateway transit on both peerings",
    "Add a route to VNet3 in a route table of VNet1",
    "Create a peering between VNet1 and VNet3",
    "Move VM3 to VNet2 and delete VNet3"
   ],
   "a": 2
  },
  {
   "l": "Two networks both use 10.0.0.0/16 and must communicate:",
   "o": [
    "Re-address one of the virtual networks, then peer them",
    "Add an NSG that translates the duplicate addresses between them",
    "Create a private DNS zone shared by both networks",
    "Peer them directly, then adjust the routes"
   ],
   "a": 0
  },
  {
   "l": "VNet-Prod and VNet-Dev, with no peering or VPN, must never communicate:",
   "o": [
    "Add a route table to None in each network",
    "Nothing: with no peering or gateway, they're isolated",
    "Add an NSG to VNet-Prod that blocks VNet-Dev's space",
    "Place them in two different subscriptions"
   ],
   "a": 1
  },
  {
   "l": "VNet1 (Contoso tenant) and VNet2 (Fabrikam tenant) must be peered:",
   "o": [
    "No, peering is only possible within the same tenant",
    "Yes, but only with a VPN gateway on each side",
    "No, peering is only possible within one subscription",
    "Yes, with the required permissions in both tenants"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. VNet1-VNet2 and VNet2-VNet3 are peered; VM1 (VNet1) must reach VM3 (VNet3) with the least effort:</b></p><p>Virtual network peering is <b>not transitive</b>: VNet1 ↔ VNet2 and VNet2 ↔ VNet3 don't give VNet1 ↔ VNet3. VNet2 doesn't relay traffic on its own.</p><p>The simplest solution is a <b>direct peering</b> between VNet1 and VNet3.</p><ul><li>A <b>route</b> to VNet3 would have no effect without a routing device in VNet2 (virtual appliance or gateway), to deploy and manage.</li><li><b>Gateway transit</b> is for sharing a VPN gateway, not for relaying between two peerings.</li><li><b>Moving VM3</b> would change the architecture.</li></ul><p><b>2. Two networks both use 10.0.0.0/16 and must communicate:</b></p><p>Overlapping spaces prevent peering and routing. The clean solution is to <b>re-address</b> one of the networks. Workarounds exist (NAT on a VPN gateway, Private Link to expose specific services), but they complicate the architecture. Hence the importance of an addressing plan from the start.</p><p><b>3. VNet-Prod and VNet-Dev, with no peering or VPN, must never communicate:</b></p><p>A virtual network is an <b>isolation boundary</b>: with no peering, VPN, or other connection, its resources can't reach those of another network through private addresses. (They could reach each other through their public addresses, if they have any.)</p><p><b>4. VNet1 (Contoso tenant) and VNet2 (Fabrikam tenant) must be peered:</b></p><p>Peering works across <b>subscriptions</b> and even across Microsoft Entra <b>tenants</b>. The administrator on each side must have the right to create the peering link (for example Network Contributor), often with a guest account in the other tenant.</p>",
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
 "keep": "Non-transitive peering: direct peering, or a hub with an appliance/gateway that routes. Overlap = re-address, then peer. A VNet is isolated by default. Peering across subscriptions and tenants = possible, with rights on both sides."
},
{
 "id": "D4-321",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You're troubleshooting connectivity across several virtual networks. What's the answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Bastion is in VNet-Hub and VNet-Spoke is peered with it — connecting to the spoke's VMs:",
   "o": [
    "No, you need one Bastion per virtual network",
    "Yes, Bastion works with peered VNets",
    "No, except with a VPN gateway in the hub",
    "Yes, but only with the Premium SKU"
   ],
   "a": 1
  },
  {
   "l": "Two VMs in different VNet1 subnets, with no NSG or route table, can't communicate — likely cause:",
   "o": [
    "You need a peering between the two subnets",
    "You need a VPN gateway between the subnets",
    "The VMs' operating system firewall",
    "Subnets in one VNet are isolated by default"
   ],
   "a": 2
  },
  {
   "l": "An on-premises VM can't reach a VNet1 VM over the VPN, the reverse works — likely cause:",
   "o": [
    "Peering isn't transitive to on-premises",
    "An NSG blocking inbound traffic from the site",
    "Azure-provided DNS doesn't resolve the site's names",
    "The VM in VNet1 has no public IP address"
   ],
   "a": 1
  },
  {
   "l": "Deleting VNet9 fails — likely cause:",
   "o": [
    "VNet9 has too many subnets to be deleted at once",
    "An NSG in the resource group isn't associated with any subnet",
    "Resources are still connected to it, or a lock applies",
    "VNet9 uses Azure-provided DNS instead of a custom DNS"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Bastion is in VNet-Hub and VNet-Spoke is peered with it — connecting to the spoke's VMs:</b></p><p>Azure Bastion supports <b>peered networks</b> (including global peering). A single Bastion in the hub is enough for a whole hub-and-spoke topology, which reduces costs.</p><p><b>2. Two VMs in different VNet1 subnets, with no NSG or route table, can't communicate — likely cause:</b></p><p>By default, all subnets in a virtual network communicate through the virtual network system route. With no NSG or UDR, the likely cause is the <b>operating system firewall</b>: for example, Windows Firewall blocks ping (ICMP) by default.</p><p><b>3. An on-premises VM can't reach a VNet1 VM over the VPN, the reverse works — likely cause:</b></p><p>The tunnel works (the reverse direction passes). <b>Inbound</b> traffic is therefore filtered: by an NSG (if the default rules were overridden, or if a higher-priority deny rule exists) or by the VM's or on-premises firewall. IP flow verify will confirm it.</p><p>The default AllowVnetInBound rule normally includes the on-premises ranges known by the gateway.</p><p><b>4. Deleting VNet9 fails — likely cause:</b></p><p>You can't delete a virtual network while resources use it (VM network interfaces, gateways, Bastion, private endpoints, delegated services…) or if a <b>lock</b> protects it. You must first delete or move those resources.</p>",
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
 "keep": "One Bastion in the hub serves all peered spokes. Subnets in a VNet communicate by default; think of the OS firewall. One direction works, not the other = inbound filtering (NSG or firewall). Deleting a VNet = no more connected resources, no lock."
},
{
 "id": "D4-322",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You manage the contoso.com public DNS zone in Azure DNS. What should you do for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The zone was just created in Azure DNS and must become effective:",
   "o": [
    "Create a virtual network link to each VNet",
    "Create a PTR record for the zone",
    "Update the NS records at the registrar",
    "Enable autoregistration on the zone"
   ],
   "a": 2
  },
  {
   "l": "The contoso.com apex must point to the Azure Front Door endpoint:",
   "o": [
    "A TXT record at the zone apex",
    "An MX record to the endpoint",
    "An alias record to Front Door",
    "A CNAME record at the apex (@)"
   ],
   "a": 2
  },
  {
   "l": "Clients must see the old address for less time during future changes:",
   "o": [
    "Add an NS record that points to the new address",
    "Use an MX record instead of the A record",
    "Delete and recreate the zone before each change",
    "Lower the record set's TTL before the change"
   ],
   "a": 3
  },
  {
   "l": "The zone must not be deletable by mistake:",
   "o": [
    "A Delete (CanNotDelete) lock on the zone",
    "A longer TTL on the critical records",
    "A private DNS zone copying the public zone",
    "An SOA record protected as read-only"
   ],
   "a": 0
  },
  {
   "l": "paris.contoso.com must be delegated to another Azure DNS zone — in contoso.com:",
   "o": [
    "A virtual network link to the paris.contoso.com zone",
    "An NS record set “paris” with the child zone's name servers",
    "A CNAME record “paris” pointing to the child zone paris.contoso.com",
    "An MX record “paris” to the Paris servers"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. The zone was just created in Azure DNS and must become effective:</b></p><p>For the Azure zone to be authoritative, you must <b>delegate</b> the domain: at the registrar, replace the name servers with the 4 <b>NS</b> servers assigned to the Azure zone (ns1-xx.azure-dns.com, etc.).</p><p>Virtual network links and autoregistration concern <b>private</b> zones.</p><p><b>2. The contoso.com apex must point to the Azure Front Door endpoint:</b></p><p>Azure DNS <b>alias record sets</b> point to an Azure resource (public IP address, Traffic Manager profile, Front Door or CDN endpoint) and can be used at the zone's <b>root</b>. They automatically follow changes to the resource's address.</p><p><b>3. Clients must see the old address for less time during future changes:</b></p><p>The <b>TTL</b> indicates how long resolvers can cache the response. Lowering it a few hours before a planned change allows faster propagation. You can raise it again afterward.</p><p><b>4. The zone must not be deletable by mistake:</b></p><p><b>Locks</b> protect DNS zones and even specific record sets against deletion. It's a best practice for production zones, because deleting a zone can make all services unreachable.</p><p><b>5. paris.contoso.com must be delegated to another Azure DNS zone — in contoso.com:</b></p><p>To delegate a subdomain, you create the child zone (paris.contoso.com), then, in the parent zone, an <b>NS</b> record set named <b>paris</b> that contains the child zone's name servers.</p>",
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
 "keep": "Azure public zone = delegate (NS) at the registrar. Root to an Azure resource = alias record. Fast propagation = lower the TTL before the change. Protecting a DNS zone = Delete lock. Delegating a subdomain = NS in the parent zone."
},
{
 "id": "D4-323",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You manage private name resolution for several virtual networks. What should you do or use in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VMs in peered VNet1 and VNet2 register automatically and reach each other by name in contoso.local:",
   "o": [
    "A contoso.local public DNS zone delegated by the registrar",
    "A contoso.local private DNS zone linked to the VNets, autoregistration on",
    "A DNS server on a VM in VNet1, used by both VNets",
    "Azure-provided name resolution, with the contoso.local suffix"
   ],
   "a": 1
  },
  {
   "l": "VNet1 switches to custom DNS; existing VMs still use the old server:",
   "o": [
    "Restart the VMs (or renew the DHCP lease)",
    "Add the servers to each VM's hosts file",
    "Create a private DNS zone linked to the VNet",
    "Delete and recreate the VMs in the virtual network"
   ],
   "a": 0
  },
  {
   "l": "An App Service app integrated with VNet3 must resolve a private zone linked to VNet3:",
   "o": [
    "App Service can never resolve a private DNS zone",
    "You need a Microsoft.Web service endpoint",
    "The app uses the VNet's DNS, so the linked zone",
    "You need a dedicated outbound public IP for the app"
   ],
   "a": 2
  },
  {
   "l": "Virtual address of Azure-provided DNS, reachable from any VM:",
   "o": [
    "168.63.129.16",
    "169.254.169.254",
    "8.8.8.8",
    "10.0.0.1"
   ],
   "a": 0
  },
  {
   "l": "See from a Windows VM the address resolved for storage91.blob.core.windows.net:",
   "o": [
    "ipconfig /release then ipconfig /renew",
    "tracert 168.63.129.16",
    "netstat -r (routing table)",
    "nslookup storage91.blob.core.windows.net"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. VMs in peered VNet1 and VNet2 register automatically and reach each other by name in contoso.local:</b></p><p>A <b>private DNS zone</b> contoso.local, with a <b>virtual network link</b> to VNet1 and to VNet2, and <b>autoregistration</b> enabled on the links: each VM is registered automatically, and all VMs in both networks resolve names in the zone.</p><ul><li><b>Azure-provided resolution</b> only works within a single virtual network.</li><li>A <b>DNS server on a VM</b> works but requires administration.</li><li>A <b>public zone</b> is resolved on the internet, not suited to internal names.</li></ul><p><b>2. VNet1 switches to custom DNS; existing VMs still use the old server:</b></p><p>DNS servers are handed out through <b>DHCP</b>. Existing VMs only pick up the change after a <b>restart</b> or a lease renewal (<code>ipconfig /renew</code>).</p><p>You can also set DNS servers at the network interface level, which takes precedence over the virtual network's.</p><p><b>3. An App Service app integrated with VNet3 must resolve a private zone linked to VNet3:</b></p><p>With <b>virtual network integration</b>, the app inherits the DNS servers configured on the virtual network (Azure DNS by default, which resolves linked private zones). That's what makes it possible to use private endpoints from App Service.</p><p><b>4. Virtual address of Azure-provided DNS, reachable from any VM:</b></p><p><b>168.63.129.16</b> is the Azure platform's virtual IP address: Azure-provided DNS resolver, load balancer health probes, VM agent heartbeat. Don't block it.</p><p><b>169.254.169.254</b> is the Instance Metadata Service (IMDS).</p><p><b>5. See from a Windows VM the address resolved for storage91.blob.core.windows.net:</b></p><p><code>nslookup</code> (or <code>Resolve-DnsName</code> in PowerShell) shows the resolved address: a private address (with the privatelink CNAME) if the private endpoint and DNS are configured correctly, otherwise a public address. <code>Test-NetConnection -Port 443</code> then checks the connection.</p>",
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
 "keep": "Internal names across VNets = private DNS zone + links + autoregistration. New VNet DNS = restart the VMs (DHCP). App Service + VNet integration = the VNet's DNS. 168.63.129.16 = platform virtual IP; 169.254.169.254 = IMDS. Seeing the resolved IP = nslookup / Resolve-DnsName."
},
{
 "id": "D4-324",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You're planning VNet1's subnet addressing. What's the answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Addresses assignable to VMs in the 10.0.3.0/26 subnet:",
   "o": [
    "64",
    "62",
    "59",
    "251"
   ],
   "a": 2
  },
  {
   "l": "Smallest prefix allowed for a subnet:",
   "o": [
    "/29",
    "/30",
    "/31",
    "/32"
   ],
   "a": 0
  },
  {
   "l": "Shrink Subnet7 from /24 to /25, with three VMs between 10.0.1.4 and 10.0.1.6 — condition:",
   "o": [
    "The virtual network must not be peered",
    "The subnet must contain no resources",
    "No used address must be outside the new range",
    "The subnet must be delegated to a service"
   ],
   "a": 1
  },
  {
   "l": "Subnet to create for Azure Bastion:",
   "o": [
    "BastionSubnet, with a /27 prefix",
    "GatewaySubnet, with a /26 prefix",
    "AzureBastionSubnet, with a /26 prefix",
    "AzureBastionSubnet, with a /29 prefix"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Addresses assignable to VMs in the 10.0.3.0/26 subnet:</b></p><p>A <b>/26</b> prefix leaves 32 − 26 = 6 bits for hosts, so 2⁶ = <b>64</b> addresses.</p><p>Azure <b>reserves 5 addresses</b> in each subnet: the first (network address, .0), the next three (.1 default gateway, .2 and .3 for Azure DNS), and the last (broadcast, .63).</p><p>That leaves 64 − 5 = <b>59</b> usable addresses. (Not 62 as in classic networking, where only 2 addresses are removed.)</p><p><b>2. Smallest prefix allowed for a subnet:</b></p><p>The smallest IPv4 subnet allowed is a <b>/29</b>: 8 addresses, 5 of them reserved, so 3 usable. The largest is a /2. /30, /31, and /32 are rejected.</p><p><b>3. Shrink Subnet7 from /24 to /25, with three VMs between 10.0.1.4 and 10.0.1.6 — condition:</b></p><p>A subnet's address range can only be changed if it contains <b>no deployed resources</b>. Otherwise, you must first move the resources to another subnet (or delete them), change the range, then move them back.</p><p>Hence the value of sizing subnets correctly from the start. Peering and delegation are unrelated.</p><p><b>4. Subnet to create for Azure Bastion:</b></p><p>Azure Bastion requires a subnet with the <b>exact</b> name <b>AzureBastionSubnet</b>, at least <b>/26</b> in size. Bastion is deployed there and provides RDP and SSH through the portal, with no public IP address on the VMs.</p><p>Other reserved subnets to know: <b>GatewaySubnet</b> (VPN and ExpressRoute gateways) and <b>AzureFirewallSubnet</b> (Azure Firewall, /26 minimum).</p>",
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
 "keep": "Usable addresses = 2^(32 − prefix) − 5. /24 = 251, /26 = 59, /27 = 27, /29 = 3. Smallest IPv4 subnet = /29. Changing a subnet's range = empty it first. Bastion = AzureBastionSubnet /26; VPN = GatewaySubnet; Firewall = AzureFirewallSubnet /26."
},
{
 "id": "D4-325",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You're configuring the network interfaces and IP addresses of VNet1's VMs. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM8 (10.0.1.4) needs a second private address 10.0.1.10 on the same interface:",
   "o": [
    "Create a second virtual network",
    "You must create a second network interface",
    "Change the address in the operating system only",
    "Add a secondary IP configuration to the network interface"
   ],
   "a": 3
  },
  {
   "l": "A VM needs a public IPv6 address in addition to its IPv4:",
   "o": [
    "An IPv6 VPN gateway in the virtual network",
    "A private DNS zone with an AAAA record",
    "A dual-stack VNet and an IPv6 IP configuration",
    "A second IPv6-only virtual network, peered"
   ],
   "a": 2
  },
  {
   "l": "A VM must keep the same private address after a stop with deallocation:",
   "o": [
    "A Static private address on the network interface",
    "A static public IP address on the VM",
    "A DHCP reservation on a DNS server in the VNet",
    "A fixed IP address in Windows network settings"
   ],
   "a": 0
  },
  {
   "l": "Add a third interface to a VM that has two — condition:",
   "o": [
    "The VM must have a public IP address on each interface",
    "The VM must be in an availability set",
    "The interfaces must be in different virtual networks",
    "The size must support 3 interfaces, and the VM be deallocated"
   ],
   "a": 3
  },
  {
   "l": "A VM with two interfaces doesn't answer on the secondary — most common cause:",
   "o": [
    "The VM has no public IP address on the secondary interface",
    "The secondary interface has no NSG allowing the traffic",
    "The secondary interface must be in another virtual network",
    "The OS only has a default gateway on the primary interface"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. VM8 (10.0.1.4) needs a second private address 10.0.1.10 on the same interface:</b></p><p>A network interface can have several <b>IP configurations</b>, each with a private address (and optionally a public one). You must then configure the secondary address in the operating system, because Azure DHCP only provides the primary address.</p><p><b>2. A VM needs a public IPv6 address in addition to its IPv4:</b></p><p>Azure supports <b>dual stack</b>: you add an IPv6 address space (for example /48) to the virtual network, a /64 prefix to the subnet, then an IPv6 IP configuration (with a Standard IPv6 public address if needed) on the network interface.</p><p><b>3. A VM must keep the same private address after a stop with deallocation:</b></p><p>In the <b>network interface</b>'s IP configuration, <b>Static</b> assignment reserves the private address for the interface, even after the VM is deallocated. Azure keeps handing it out through DHCP.</p><p>You must <b>never</b> configure the IP address manually in the OS: you risk losing connectivity.</p><p><b>4. Add a third interface to a VM that has two — condition:</b></p><p>The maximum number of network interfaces depends on the VM <b>size</b>. You add or remove a secondary interface when the VM is <b>stopped (deallocated)</b>. All of a VM's interfaces must be in the <b>same virtual network</b> (in the same or different subnets).</p><p><b>5. A VM with two interfaces doesn't answer on the secondary — most common cause:</b></p><p>Azure only provides the default gateway on the <b>primary</b> interface. Responses to traffic received on the secondary interface leave through the primary interface, which breaks communication. You must configure <b>routing</b> in the operating system (routes or per-interface route tables).</p>",
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
 "keep": "Several IPs on one NIC = secondary IP configurations (+ OS). IPv6 = dual-stack VNet + subnet + IPv6 IP config. Fixed private IP = Static on the network interface, never in the OS. Adding a NIC: size that allows it + deallocated VM + same VNet. Second NIC not responding = routing in the OS."
},
{
 "id": "D4-326",
 "dom": 4,
 "type": "hot",
 "stem": "<p>You're writing the network security group (NSG) rules for VNet1. What's the answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "NSG-Sub (Subnet1) allows RDP from the internet; VM3's NSG-NIC has only default rules — RDP to VM3:",
   "o": [
    "No, because a subnet can't have an NSG",
    "Yes, because the network interface's NSG is ignored",
    "No, because traffic must be allowed by both NSGs",
    "Yes, because the subnet's NSG allows port 3389"
   ],
   "a": 2
  },
  {
   "l": "Peered VNet1 and VNet2 must exchange only port 443:",
   "o": [
    "A route table that only sends port 443 to VNet2",
    "NSGs: 443 allowed, the rest denied, before AllowVnetInBound",
    "Disable the peering and publish VNet2 on a public IP",
    "A service endpoint on VNet2's subnets"
   ],
   "a": 1
  },
  {
   "l": "Web VMs reach SQL VMs on 1433, without IP addresses in the rules:",
   "o": [
    "User-defined routes for each group of VMs",
    "Custom service tags named Web and SQL in the rule",
    "Azure resource tags (Role=Web, Role=SQL) in the rule",
    "Application security groups as source and destination"
   ],
   "a": 3
  },
  {
   "l": "Subnet-App VMs reach France Central storage accounts and nothing else on the internet:",
   "o": [
    "Allow Storage.FranceCentral, then deny Internet at a lower priority",
    "Allow 0.0.0.0/0 to port 443 only, then deny all other traffic",
    "Allow the VirtualNetwork destination only, then deny Internet",
    "Deny the Storage tag, then allow Internet at a lower priority"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. NSG-Sub (Subnet1) allows RDP from the internet; VM3's NSG-NIC has only default rules — RDP to VM3:</b></p><p>For <b>inbound</b> traffic, Azure evaluates the <b>subnet</b> NSG first, then the <b>network interface</b> NSG. Traffic must be allowed by <b>both</b>. NSG-NIC has only the default rules, including <b>DenyAllInBound</b> (65500), which denies RDP from the internet.</p><p>For outbound traffic, the order is reversed: network interface then subnet.</p><p><b>2. Peered VNet1 and VNet2 must exchange only port 443:</b></p><p>Peering doesn't filter anything: the default <b>AllowVnetInBound</b> rule allows traffic from peered networks. To filter, you add custom NSG rules (priority below 65000): allow 443 from VNet1's 10.x range, then deny the rest coming from that range.</p><p><b>3. Web VMs reach SQL VMs on 1433, without IP addresses in the rules:</b></p><p>An <b>application security group</b> groups network interfaces. You write the rule with the ASGs as source and destination (“ASG-Web to ASG-SQL on 1433”); adding a VM to the group is enough, with no rule changes. Network interfaces in an ASG must be in the same virtual network.</p><p>Service tags represent Azure services (Storage, Sql…), not your VMs.</p><p><b>4. Subnet-App VMs reach France Central storage accounts and nothing else on the internet:</b></p><p>A <b>service tag</b> represents an Azure service's address ranges, kept up to date by Microsoft. <b>Storage.FranceCentral</b> limits it to the region. You then add a rule that <b>denies Internet</b> with a higher priority number, to block the rest (the default AllowInternetOutBound rule would otherwise allow it).</p>",
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
 "keep": "Inbound: subnet NSG then NIC NSG; both must allow. Peering = everything open; filter with NSGs before 65000. Rules by VM role, no IPs = application security groups. Destination = Azure service = service tag (regional if needed)."
},
{
 "id": "D4-327",
 "dom": 4,
 "type": "hot",
 "stem": "<p>The security team is centralizing filtering for 15 hub-and-spoke virtual networks. What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Allow load balancer probes despite a deny-all inbound rule at priority 4000 — source:",
   "o": [
    "The AzureLoadBalancer tag",
    "The address 169.254.169.254",
    "The Internet service tag",
    "The VirtualNetwork tag"
   ],
   "a": 0
  },
  {
   "l": "Allow outbound only to Microsoft Entra ID, with no address list — destination:",
   "o": [
    "The Internet service tag",
    "The virtual address 168.63.129.16",
    "An application security group",
    "The AzureActiveDirectory tag"
   ],
   "a": 3
  },
  {
   "l": "Block certain ports in every network, with no bypass by NSG owners:",
   "o": [
    "Security admin rules (Virtual Network Manager)",
    "User-defined routes to a filtering appliance",
    "Application security groups in each existing NSG",
    "NSGs with a deny rule at priority 4096 in each VNet"
   ],
   "a": 0
  },
  {
   "l": "Automatically create and manage the 15 spokes' peerings, with centralized rules:",
   "o": [
    "Network Watcher and its topology",
    "Traffic Manager with profiles",
    "Azure DNS with private zones",
    "Azure Virtual Network Manager"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Allow load balancer probes despite a deny-all inbound rule at priority 4000 — source:</b></p><p>Health probes come from the address <b>168.63.129.16</b>, represented by the <b>AzureLoadBalancer</b> service tag. The default rule AllowAzureLoadBalancerInBound (65001) allows them, but a custom deny rule overrides it: you need an explicit higher-priority rule.</p><p><b>2. Allow outbound only to Microsoft Entra ID, with no address list — destination:</b></p><p>The <b>AzureActiveDirectory</b> service tag represents Microsoft Entra ID address ranges, kept up to date by Microsoft. Service tags are used as the source or destination of NSG rules, Azure Firewall rules, and even in user-defined routes.</p><p><b>3. Block certain ports in every network, with no bypass by NSG owners:</b></p><p>Azure Virtual Network Manager <b>security admin rules</b> are evaluated <b>before</b> NSGs. An “Always deny” rule can't be overridden by an NSG rule.</p><p><b>4. Automatically create and manage the 15 spokes' peerings, with centralized rules:</b></p><p><b>Azure Virtual Network Manager</b> groups virtual networks (network groups, static or dynamic through Azure Policy), deploys <b>connectivity configurations</b> (hub-and-spoke or mesh) and <b>security admin rules</b> that take precedence over NSGs.</p>",
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
 "keep": "Load balancer probes = AzureLoadBalancer tag (168.63.129.16). Entra ID ranges = AzureActiveDirectory tag. Rules NSGs can't override = security admin rules. Connectivity at scale = Azure Virtual Network Manager."
}
);
