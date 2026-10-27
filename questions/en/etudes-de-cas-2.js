/* Case studies (batch 2 : C002 to C004) */
AZ.cases.push(
{
 "id": "C002",
 "title": "Litware",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Litware is a research firm of 400 employees, with headquarters in Paris and a branch in Nantes. The firm uses Microsoft 365 and started moving its applications to Azure a year ago.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Identities</b></p><p>The Microsoft Entra tenant litware.com has Microsoft Entra ID P1 licenses. Accounts are created in the cloud (no on-premises Active Directory). Each user's Department attribute is filled in.</p><p><b>Azure</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Resource</th><th>Details</th></tr><tr><td>Subscription Sub-Litware</td><td>Resource groups RG-Etudes, RG-Web, and RG-Shared</td></tr><tr><td>stlitwaredata</td><td>General-purpose v2 storage account, LRS, France Central, container reports</td></tr><tr><td>VNet-Litware</td><td>10.10.0.0/16, France Central, subnets Subnet-Web (10.10.1.0/24) and Subnet-Data (10.10.2.0/24)</td></tr><tr><td>WebApp-Portail</td><td>Web app, Basic B1 App Service plan</td></tr></table></div>"
  },
  {
   "t": "Requirements",
   "h": "<p><b>Technical requirements</b></p><ul><li>All users whose department is Études (Research) must be members of a group named GRP-Etudes, automatically.</li><li>GRP-Etudes members must read blobs in the reports container with their Entra account, without being able to modify them.</li><li>External consultants from the partner contoso.com must be invitable, and no other external domain.</li><li>WebApp-Portail must allow testing a new version on a separate URL before going to production.</li><li>Only VMs in Subnet-Data must be able to access stlitwaredata; the account must keep its public address.</li><li>Data in stlitwaredata must survive the failure of a datacenter in the region.</li></ul><p><b>Constraints</b></p><ul><li>All solutions must follow the principle of least privilege and minimize costs.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C002-1",
   "dom": 1,
   "type": "hot",
   "stem": "<p>You need to meet the requirement for GRP-Etudes.</p><p>How should you configure the group? To answer, select the appropriate options in the answer area.</p>",
   "rows": [
    {
     "l": "Membership type:",
     "o": [
      "Dynamic Device",
      "Dynamic User",
      "Assigned"
     ],
     "a": 1
    },
    {
     "l": "Rule:",
     "o": [
      "(user.department -eq \"Études\")",
      "(device.department -eq \"Études\")",
      "(user.jobTitle -eq \"Études\")"
     ],
     "a": 0
    }
   ],
   "expl": "<p>A <b>Dynamic User</b> membership group (available with Litware's P1 license) with the rule <code>(user.department -eq \"Études\")</code> automatically adds and removes members based on the Department attribute.</p>",
   "portal": {
    "path": [
     "Groups",
     "New group"
    ],
    "title": "New Group",
    "rows": [
     [
      "*Membership type",
      "Dynamic User"
     ],
     [
      "Dynamic query",
      "(user.department -eq \"Études\")"
     ]
    ],
    "btn": "Create"
   },
   "keep": "Automatic membership based on an attribute = Dynamic User group (P1)."
  },
  {
   "id": "C002-2",
   "dom": 2,
   "type": "single",
   "stem": "<p>You need to meet the GRP-Etudes access requirement for the reports container.</p><p>What should you do?</p>",
   "opts": [
    "Assign the Reader role to GRP-Etudes on stlitwaredata",
    "Assign the Storage Blob Data Reader role to GRP-Etudes on the reports container",
    "Assign the Storage Blob Data Contributor role to GRP-Etudes on stlitwaredata",
    "Generate a read account SAS for GRP-Etudes"
   ],
   "ans": 1,
   "expl": "<p><b>Storage Blob Data Reader</b> grants read access to data with the Entra identity; the <b>container</b> scope limits access to reports. Reader doesn't give access to data; Data Contributor allows writing; a SAS doesn't use the Entra account.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitwaredata",
     "reports"
    ],
    "title": "reports | Access Control (IAM)",
    "rows": [
     [
      "*Role",
      "Storage Blob Data Reader"
     ],
     [
      "Members",
      "GRP-Etudes"
     ],
     [
      "Scope",
      "reports container"
     ]
    ],
    "btn": "Review + assign"
   },
   "keep": "Reading blobs with Entra = Storage Blob Data Reader, at container scope."
  },
  {
   "id": "C002-3",
   "dom": 1,
   "type": "single",
   "stem": "<p>You need to meet the requirement for external consultants.</p><p>What should you configure?</p>",
   "opts": [
    "A contoso.com administrative unit",
    "Guest user access restrictions",
    "Collaboration restrictions, allowing only contoso.com",
    "A contoso.com custom domain"
   ],
   "ans": 2,
   "expl": "<p><b>Collaboration restrictions</b> in external collaboration settings let you allow invitations only to a list of domains. Guest user access restrictions define what guests can see. contoso.com belongs to another organization: you can't add it as a custom domain.</p>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "External Identities"
    ],
    "title": "External collaboration settings",
    "rows": [
     [
      "*Collaboration restrictions",
      "Allow invitations only to the specified domains"
     ],
     [
      "Domains",
      "contoso.com"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Limiting invited domains = collaboration restrictions."
  },
  {
   "id": "C002-4",
   "dom": 3,
   "type": "multi",
   "pick": 2,
   "stem": "<p>You need to meet the testing requirement for WebApp-Portail.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "opts": [
    "Create a second app in a Basic plan",
    "Move the App Service plan to the Standard tier",
    "Create a deployment slot named test",
    "Enable autoscale"
   ],
   "ans": [
    1,
    2
   ],
   "expl": "<p><b>Deployment slots</b> require the <b>Standard</b> tier or higher. The test slot has its own URL, and a swap puts the tested version into production. A second app would work but with no swap, and scaling is unrelated.</p>",
   "portal": {
    "path": [
     "App Services",
     "WebApp-Portail"
    ],
    "title": "Deployment slots",
    "rows": [
     [
      "*Plan",
      "Standard S1 (required)"
     ],
     [
      "*Slot",
      "test · separate URL"
     ]
    ],
    "btn": "+ Add Slot"
   },
   "keep": "Test before production = deployment slot (Standard+) then swap."
  },
  {
   "id": "C002-5",
   "dom": 4,
   "type": "single",
   "stem": "<p>You need to meet the network access requirement for stlitwaredata.</p><p>What should you configure?</p>",
   "opts": [
    "An NSG on Subnet-Web that blocks storage",
    "A NAT gateway on Subnet-Data",
    "A private endpoint in Subnet-Data and disabling public access",
    "A Microsoft.Storage service endpoint on Subnet-Data and a virtual network rule in stlitwaredata's firewall"
   ],
   "ans": 3,
   "expl": "<p>The requirement asks to <b>keep the public address</b>: a <b>service endpoint</b> with a virtual network rule meets the need, at no cost. A private endpoint would technically work, but this option includes disabling public access, and it costs more.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitwaredata"
    ],
    "title": "Networking",
    "rows": [
     [
      "*Virtual networks",
      "VNet-Litware / Subnet-Data"
     ],
     [
      "Public address",
      "Kept"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Limit to one subnet while keeping the public IP = service endpoint + virtual network rule."
  },
  {
   "id": "C002-6",
   "dom": 2,
   "type": "single",
   "stem": "<p>You need to meet the resilience requirement for stlitwaredata, at the lowest cost.</p><p>Which redundancy should you configure?</p>",
   "opts": [
    "ZRS",
    "RA-GZRS",
    "GRS",
    "LRS"
   ],
   "ans": 0,
   "expl": "<p><b>ZRS</b> replicates data across three availability zones in the region: it survives a datacenter failure. GRS doesn't protect against losing a datacenter in the primary region (LRS within a single datacenter), and RA-GZRS costs more than needed.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitwaredata"
    ],
    "title": "Redundancy",
    "rows": [
     [
      "*Redundancy",
      "Zone-redundant storage (ZRS)"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Survive a datacenter, at lowest cost = ZRS."
  }
 ]
},
{
 "id": "C003",
 "title": "Tailwind Traders",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Tailwind Traders is a chain of home improvement stores with an online shop. Business peaks sharply on Saturdays and during sales.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Azure</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Resource</th><th>Details</th></tr><tr><td>VMSS-Shop</td><td>Linux virtual machine scale set, 2 instances, France Central, no zone, behind LB-Shop (Standard public load balancer)</td></tr><tr><td>VM-ERP</td><td>Windows Server VM, SQL Server, Premium SSD data disk, France Central</td></tr><tr><td>Vault-Tailwind</td><td>Recovery Services vault, France Central, GRS, no protected items</td></tr><tr><td>WS-Tailwind</td><td>Log Analytics workspace, France Central</td></tr><tr><td>ACR-Tailwind</td><td>Container registry, Basic tier</td></tr></table></div>"
  },
  {
   "t": "Requirements",
   "h": "<p><b>Technical requirements</b></p><ul><li>VMSS-Shop must have between 2 and 10 instances based on CPU load, and 6 instances every Saturday from 8 AM to 8 PM.</li><li>VM-ERP must be backed up every day, with 30-day retention. Backups must be restorable in the paired region.</li><li>If France Central fails, VM-ERP must restart in another region in under an hour, with less than 15 minutes of data lost.</li><li>Teams must be notified by SMS if VM-ERP's CPU exceeds 90% for 10 minutes.</li><li>Container images must be replicated to the West Europe region.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C003-1",
   "dom": 3,
   "type": "hot",
   "stem": "<p>You need to meet the scaling requirement for VMSS-Shop.</p><p>To answer, select the appropriate options in the answer area.</p>",
   "rows": [
    {
     "l": "Default profile:",
     "o": [
      "Minimum 6, maximum 6",
      "Minimum 2, maximum 10, CPU rules",
      "Minimum 0, maximum 10"
     ],
     "a": 1
    },
    {
     "l": "For Saturday:",
     "o": [
      "A Rolling upgrade policy",
      "A recurring scheduled profile with 6 instances",
      "A lower CPU rule"
     ],
     "a": 1
    }
   ],
   "expl": "<p>The default profile sets the limits (2 to 10) with scale-out and scale-in rules on CPU. A <b>recurring scheduled profile</b> (every Saturday from 8 AM to 8 PM) sets 6 instances.</p>",
   "portal": {
    "path": [
     "Virtual machine scale sets",
     "VMSS-Shop"
    ],
    "title": "Scaling",
    "rows": [
     [
      "Default profile",
      "Min 2 · Max 10 · CPU rules"
     ],
     [
      "*Saturday profile",
      "Recurring · 8 AM-8 PM · 6 instances"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Variable load = rules; known hours = scheduled profile."
  },
  {
   "id": "C003-2",
   "dom": 5,
   "type": "single",
   "stem": "<p>You need to meet the backup requirement for VM-ERP.</p><p>What should you do in Vault-Tailwind?</p>",
   "opts": [
    "Switch the vault to LRS, then protect VM-ERP",
    "Enable Cross Region Restore, then protect VM-ERP with a 30-day daily policy",
    "Configure Azure Site Recovery only",
    "Create a Backup vault in West Europe"
   ],
   "ans": 1,
   "expl": "<p>The vault is already <b>GRS</b> and in the same region as VM-ERP. You only need to enable <b>Cross Region Restore</b> (to restore in the paired region) and protect the VM with a 30-day daily policy. Switching to LRS would prevent cross-region restore.</p>",
   "portal": {
    "path": [
     "Recovery Services vaults",
     "Vault-Tailwind"
    ],
    "title": "Backup Configuration",
    "rows": [
     [
      "Redundancy",
      "Geo-redundant"
     ],
     [
      "*Cross Region Restore",
      "Enabled"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Restore in the paired region = GRS + Cross Region Restore."
  },
  {
   "id": "C003-3",
   "dom": 5,
   "type": "single",
   "stem": "<p>You need to meet the recovery requirement for VM-ERP in a regional outage.</p><p>What should you configure?</p>",
   "opts": [
    "Only the daily backup with cross-region restore",
    "An availability zone for VM-ERP",
    "Azure Site Recovery to another region, with a Recovery Services vault in the target region",
    "An availability set"
   ],
   "ans": 2,
   "expl": "<p>A 15-minute RPO and a one-hour RTO require <b>continuous replication</b>: <b>Azure Site Recovery</b>, with a vault in the target region. A daily backup has a 24-hour RPO. Zones and availability sets don't protect against losing the region.</p>",
   "portal": {
    "path": [
     "Virtual machines",
     "VM-ERP"
    ],
    "title": "Disaster recovery",
    "rows": [
     [
      "*Target region",
      "West Europe"
     ],
     [
      "Vault",
      "In the target region"
     ]
    ],
    "btn": "Review + Start replication"
   },
   "keep": "RPO of minutes + another region = Site Recovery."
  },
  {
   "id": "C003-4",
   "dom": 5,
   "type": "order",
   "stem": "<p>You need to meet the alert requirement for VM-ERP's CPU.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Create an action group with an SMS notification",
    "Create a Percentage CPU metric alert rule, average, greater than 90, over 10 minutes",
    "Associate the action group with the alert rule",
    "Create an activity log alert",
    "Create a diagnostic setting to WS-Tailwind"
   ],
   "seq": [
    0,
    1,
    2
   ],
   "expl": "<p>CPU is a <b>platform metric</b>: a <b>metric alert</b> is enough, with no diagnostic setting. The <b>action group</b> carries the SMS notification.</p>",
   "portal": {
    "path": [
     "Virtual machines",
     "VM-ERP"
    ],
    "title": "Create an alert rule",
    "rows": [
     [
      "*Condition",
      "Average CPU > 90 · 10 min"
     ],
     [
      "Actions",
      "Action group · SMS"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "CPU threshold = metric alert + action group."
  },
  {
   "id": "C003-5",
   "dom": 3,
   "type": "single",
   "stem": "<p>You need to meet the container image replication requirement.</p><p>What should you do?</p>",
   "opts": [
    "Enable a retention policy",
    "Create a second Basic registry in West Europe",
    "Enable the admin account",
    "Upgrade ACR-Tailwind to the Premium tier and add a geo-replication in West Europe"
   ],
   "ans": 3,
   "expl": "<p><b>Geo-replication</b> is only available in the <b>Premium</b> tier. A second independent registry would require pushing images twice.</p>",
   "portal": {
    "path": [
     "Container registries",
     "ACR-Tailwind"
    ],
    "title": "Geo-replications",
    "rows": [
     [
      "*Tier",
      "Premium (required)"
     ],
     [
      "Replica",
      "West Europe"
     ]
    ],
    "btn": "+ Add"
   },
   "keep": "ACR geo-replication = Premium."
  },
  {
   "id": "C003-6",
   "dom": 3,
   "type": "yngrid",
   "stem": "<p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
   "rows": [
    {
     "l": "You can spread VMSS-Shop's existing instances across several zones by changing a property, without recreating the scale set.",
     "a": 1
    },
    {
     "l": "VMSS-Shop instances receive traffic only if an NSG allows it.",
     "a": 0
    },
    {
     "l": "Vault-Tailwind can also be used for Azure Site Recovery of VM-ERP to another region.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Zones: No.</b> Zones are chosen when the scale set is created.</li><li><b>NSG: Yes.</b> LB-Shop is a Standard load balancer: inbound traffic is denied without an NSG that allows it.</li><li><b>Site Recovery: No.</b> Vault-Tailwind is in the source region; for Site Recovery, the vault must be in a region other than the source.</li></ul>",
   "portal": {
    "path": [
     "Virtual machine scale sets",
     "VMSS-Shop"
    ],
    "title": "Overview",
    "rows": [
     [
      "*Zones",
      "Chosen at creation"
     ],
     [
      "LB-Shop",
      "Standard (NSG required)"
     ]
    ]
   },
   "keep": "Zones at creation; Standard LB closed without NSG; ASR vault outside the source region."
  }
 ]
},
{
 "id": "C004",
 "title": "Northwind",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Northwind is a food distributor with a datacenter in Lille, connected to Azure. The company centralizes network security and wants to limit administrative access.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Network</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Network</th><th>Address space</th><th>Content</th></tr><tr><td>VNet-Hub (France Central)</td><td>10.0.0.0/16</td><td>GatewaySubnet, AzureFirewallSubnet; VPN gateway VPN-GW1 connected to Lille; Azure Firewall FW1 (10.0.1.4)</td></tr><tr><td>VNet-App (France Central)</td><td>10.1.0.0/16</td><td>Subnet-Front, Subnet-Back; VM-WEB1, VM-WEB2, VM-API1</td></tr><tr><td>VNet-Data (West Europe)</td><td>10.2.0.0/16</td><td>Subnet-SQL; VM-SQL2</td></tr><tr><td>Lille site</td><td>192.168.0.0/16</td><td>On-premises servers, on-premises DNS</td></tr></table></div><p>VNet-App and VNet-Data are peered with VNet-Hub. No route table exists. The VMs have public IP addresses.</p>"
  },
  {
   "t": "Requirements",
   "h": "<p><b>Technical requirements</b></p><ul><li>VMs in VNet-App and VNet-Data must reach the Lille site through VPN-GW1.</li><li>All traffic between VNet-App and VNet-Data must go through FW1.</li><li>Administrators must connect over RDP and SSH to the VMs from the portal, with no public IP address on the VMs.</li><li>VM-WEB1 and VM-WEB2 must receive HTTPS traffic from the internet with a WAF.</li><li>VMs must resolve other VMs' names under the suffix northwind.internal.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C004-1",
   "dom": 4,
   "type": "hot",
   "stem": "<p>You need to meet the requirement for access to the Lille site from VNet-App.</p><p>To answer, select the appropriate options in the answer area.</p>",
   "rows": [
    {
     "l": "On the VNet-Hub → VNet-App peering:",
     "o": [
      "Allow access only",
      "Use remote gateway",
      "Allow gateway transit"
     ],
     "a": 2
    },
    {
     "l": "On the VNet-App → VNet-Hub peering:",
     "o": [
      "Use remote gateway",
      "Allow gateway transit",
      "Allow access only"
     ],
     "a": 0
    }
   ],
   "expl": "<p>The hub, which owns VPN-GW1, <b>allows gateway transit</b>; the spoke <b>uses the remote gateway</b>. The Lille site must also know the 10.1.0.0/16 range (BGP or on-premises device configuration).</p>",
   "portal": {
    "path": [
     "Virtual networks",
     "VNet-Hub"
    ],
    "title": "Peerings",
    "rows": [
     [
      "*Hub → App",
      "Gateway transit"
     ],
     [
      "*App → Hub",
      "Remote gateway"
     ]
    ]
   },
   "keep": "Hub = transit; spoke = remote gateway."
  },
  {
   "id": "C004-2",
   "dom": 4,
   "type": "single",
   "stem": "<p>You need to meet the requirement that traffic between VNet-App and VNet-Data go through FW1.</p><p>What should you configure in VNet-App?</p>",
   "opts": [
    "A route table with 10.2.0.0/16 → Virtual appliance 10.0.1.4, associated with VNet-App's subnets",
    "A direct peering between VNet-App and VNet-Data",
    "A NAT gateway",
    "An NSG that allows 10.2.0.0/16"
   ],
   "ans": 0,
   "expl": "<p>A <b>user-defined route</b> sends traffic bound for VNet-Data to FW1 (same in VNet-Data toward 10.1.0.0/16), with the matching rules in FW1. A direct peering would bypass the firewall.</p>",
   "portal": {
    "path": [
     "Route tables",
     "RT-App"
    ],
    "title": "Routes",
    "rows": [
     [
      "*10.2.0.0/16",
      "Virtual appliance · 10.0.1.4"
     ]
    ]
   },
   "keep": "Forcing traffic through the firewall = UDR to its private IP."
  },
  {
   "id": "C004-3",
   "dom": 4,
   "type": "multi",
   "pick": 2,
   "stem": "<p>You need to meet the VM administration requirement.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "opts": [
    "Create a NAT gateway in VNet-Hub",
    "Deploy Azure Bastion in an AzureBastionSubnet subnet in VNet-Hub",
    "Remove the VMs' public IP addresses",
    "Open port 3389 from the internet in the NSGs"
   ],
   "ans": [
    1,
    2
   ],
   "expl": "<p><b>Bastion</b> in the hub also serves peered networks. You <b>remove the public addresses</b> from the VMs, which are unnecessary with Bastion. Opening 3389 to the internet is the opposite of the need.</p>",
   "portal": {
    "path": [
     "Bastions",
     "Create"
    ],
    "title": "Create a Bastion",
    "rows": [
     [
      "*Subnet",
      "VNet-Hub / AzureBastionSubnet"
     ],
     [
      "VMs",
      "Public addresses removed"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "Bastion in the hub + VMs with no public IP."
  },
  {
   "id": "C004-4",
   "dom": 4,
   "type": "single",
   "stem": "<p>You need to meet the publishing requirement for VM-WEB1 and VM-WEB2.</p><p>What should you deploy?</p>",
   "opts": [
    "A Standard public load balancer",
    "Application Gateway v2 with WAF in a dedicated subnet of VNet-App",
    "A NAT gateway",
    "Traffic Manager"
   ],
   "ans": 1,
   "expl": "<p>A <b>WAF</b> requires a layer 7 service: <b>Application Gateway</b> (WAF v2 tier) in a dedicated subnet, with VM-WEB1 and VM-WEB2 in the pool. A load balancer and Traffic Manager have no WAF.</p>",
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
      "Subnet",
      "VNet-App / snet-appgw (dedicated)"
     ],
     [
      "Pool",
      "VM-WEB1, VM-WEB2"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "HTTPS + regional WAF = Application Gateway WAF v2."
  },
  {
   "id": "C004-5",
   "dom": 4,
   "type": "single",
   "stem": "<p>You need to meet the name resolution requirement.</p><p>What should you configure?</p>",
   "opts": [
    "A hosts file on each VM",
    "A northwind.internal public DNS zone",
    "A northwind.internal private DNS zone linked to VNet-App and VNet-Data with autoregistration",
    "A CNAME record per VM in public Azure DNS"
   ],
   "ans": 2,
   "expl": "<p>A <b>private DNS zone</b> linked to the networks, with <b>autoregistration</b>, creates and maintains the VMs' records. A private zone is global: it can be linked to networks in France Central and West Europe.</p>",
   "portal": {
    "path": [
     "Private DNS zones",
     "northwind.internal"
    ],
    "title": "Virtual Network Links",
    "rows": [
     [
      "*VNet-App",
      "Auto registration"
     ],
     [
      "*VNet-Data",
      "Auto registration"
     ]
    ]
   },
   "keep": "Internal names across VNets = linked private zone with autoregistration."
  },
  {
   "id": "C004-6",
   "dom": 4,
   "type": "yngrid",
   "stem": "<p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
   "rows": [
    {
     "l": "Before any change, VM-API1 (VNet-App) can reach VM-SQL2 (VNet-Data).",
     "a": 1
    },
    {
     "l": "The peering between VNet-Hub and VNet-Data is a global peering.",
     "a": 0
    },
    {
     "l": "The Bastion in VNet-Hub can serve the VMs in VNet-Data.",
     "a": 0
    }
   ],
   "expl": "<ul><li><b>VM-API1 → VM-SQL2: No.</b> The two spokes are only peered with the hub, and no routing through FW1 exists yet: peering isn't transitive.</li><li><b>Global: Yes</b>, France Central and West Europe.</li><li><b>Bastion: Yes</b>, it supports peered networks, including global peering.</li></ul>",
   "portal": {
    "path": [
     "Virtual networks",
     "VNet-Hub"
    ],
    "title": "Peerings",
    "rows": [
     [
      "VNet-App",
      "Connected"
     ],
     [
      "*VNet-Data",
      "Connected · global"
     ]
    ]
   },
   "keep": "No transitivity; cross-region peering = global; Bastion serves peered networks."
  }
 ]
}
);
