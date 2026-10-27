/* Yes/No question series (batch 2 : S002 to S010) */
AZ.series.push(
{
 "id": "S002",
 "dom": 1,
 "title": "Managing RG1's VMs",
 "scenario": "<p>Your Azure subscription contains the resource group RG1, which contains virtual machines, virtual networks, and storage accounts.</p><p>User1 must be able to create, start, stop, and delete the virtual machines in RG1. User1 must not be able to modify the virtual networks or the storage accounts. The solution must follow the principle of least privilege.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You assign User1 the Virtual Machine Contributor role on RG1.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> <b>Virtual Machine Contributor</b> lets you create, start, stop, and delete VMs. It doesn't allow modifying virtual networks or storage accounts: it can only join a network interface to an existing subnet. It doesn't manage access either. Assigned on <b>RG1</b>, it follows least privilege.</p>",
   "portal": {
    "path": [
     "Resource groups",
     "RG1"
    ],
    "title": "Add role assignment",
    "rows": [
     [
      "*Role",
      "Virtual Machine Contributor"
     ],
     [
      "Member",
      "User1"
     ],
     [
      "Scope",
      "RG1"
     ]
    ],
    "btn": "Review + assign"
   },
   "keep": "Managing VMs without touching network or storage = Virtual Machine Contributor."
  },
  {
   "solution": "<p><b>Solution:</b> You assign User1 the Contributor role on RG1.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> <b>Contributor</b> grants the right to manage <b>all</b> resources in RG1, including virtual networks and storage accounts. It's too broad.</p>",
   "portal": {
    "path": [
     "Resource groups",
     "RG1"
    ],
    "title": "Add role assignment",
    "rows": [
     [
      "*Contributor",
      "All resources in RG1"
     ]
    ]
   },
   "keep": "Contributor = manage everything except access."
  },
  {
   "solution": "<p><b>Solution:</b> You assign User1 the Virtual Machine Contributor role on the subscription.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> The role is right, but the <b>scope</b> is too broad: on the subscription, User1 would manage VMs in every resource group, not only RG1.</p>",
   "portal": {
    "path": [
     "Subscriptions",
     "Sub1"
    ],
    "title": "Role assignment",
    "rows": [
     [
      "Role",
      "Virtual Machine Contributor"
     ],
     [
      "*Scope",
      "Subscription (too broad)"
     ]
    ]
   },
   "keep": "Least privilege = right role AND smallest useful scope."
  },
  {
   "solution": "<p><b>Solution:</b> You assign User1 the Microsoft Entra Global Administrator role.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> Global Administrator is a <b>Microsoft Entra</b> (directory) role, not an Azure RBAC role: it grants no rights on Azure resources by default. And it's the most privileged role in the tenant.</p>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Roles and administrators"
    ],
    "title": "Global Administrator",
    "rows": [
     [
      "*Scope",
      "Directory, not Azure resources"
     ]
    ]
   },
   "keep": "Entra roles = directory; Azure RBAC roles = resources."
  }
 ]
},
{
 "id": "S003",
 "dom": 2,
 "title": "Recovering deleted blobs",
 "scenario": "<p>You have a general-purpose v2 storage account named storage1 that contains the container docs.</p><p>Users must be able to delete blobs in docs. You must be able to restore any blob deleted in the last 14 days.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You enable soft delete for blobs, with a 14-day retention.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> <b>Blob soft delete</b> keeps each deleted blob (and its snapshots) for the chosen period. You recover it with “Undelete”. Users can still delete.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "storage1"
    ],
    "title": "storage1 | Data protection",
    "menu": [
     "*Data protection"
    ],
    "rows": [
     [
      "*Soft delete for blobs",
      "Enabled · 14 days"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Recovering a deleted blob = blob soft delete."
  },
  {
   "solution": "<p><b>Solution:</b> You enable soft delete for containers, with a 14-day retention.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> <b>Container</b> soft delete only protects against deleting a whole container. A blob deleted from a container that still exists can't be recovered.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "storage1"
    ],
    "title": "Data protection",
    "rows": [
     [
      "*Containers",
      "Whole container only"
     ],
     [
      "Blobs",
      "Disabled"
     ]
    ]
   },
   "keep": "Container soft delete ≠ blob soft delete."
  },
  {
   "solution": "<p><b>Solution:</b> You configure a 14-day time-based retention policy on docs.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> A <b>time-based retention</b> policy makes blobs <b>immutable</b> (WORM): no one can modify or delete them for 14 days. Users must be able to delete: this contradicts the requirement.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "storage1",
     "docs"
    ],
    "title": "Access policy",
    "rows": [
     [
      "*Time-based retention",
      "Deletion blocked"
     ]
    ]
   },
   "keep": "Immutability = can't delete."
  },
  {
   "solution": "<p><b>Solution:</b> You create a lifecycle management rule that moves blobs to the Cool tier after 14 days.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> <b>Lifecycle management</b> changes the access tier or deletes blobs based on their age. It has no way to recover an already deleted blob.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "storage1"
    ],
    "title": "Lifecycle management",
    "rows": [
     [
      "*Action",
      "Move to Cool · 14 days"
     ]
    ]
   },
   "keep": "Lifecycle = costs, not recovery."
  }
 ]
},
{
 "id": "S004",
 "dom": 3,
 "title": "Scaling WebApp1",
 "scenario": "<p>You have the web app WebApp1, hosted in an App Service plan.</p><p>WebApp1 must automatically scale from 2 to 5 instances when average CPU exceeds 70%, and return to 2 instances when the load drops. The solution must minimize costs.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You use a Standard S1 plan and configure custom autoscale (minimum 2, maximum 5) with a scale-out rule and a scale-in rule based on CPU.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> App Service autoscale is available from the <b>Standard</b> tier, the cheapest one that offers it. The <b>scale-out</b> rule (CPU > 70%) adds instances, the <b>scale-in</b> rule removes them when the load drops, between 2 and 5.</p>",
   "portal": {
    "path": [
     "App Service plans",
     "Plan1"
    ],
    "title": "Plan1 | Scale out (App Service plan)",
    "menu": [
     "*Scale out (App Service plan)"
    ],
    "rows": [
     [
      "*Custom autoscale",
      "Min 2 · Max 5"
     ],
     [
      "Rules",
      "CPU > 70%: +1 · CPU < 30%: −1"
     ]
    ],
    "btn": "Save"
   },
   "keep": "App Service autoscale = Standard or higher, with scale-out AND scale-in rules."
  },
  {
   "solution": "<p><b>Solution:</b> You use a Basic B1 plan and manually set the instance count to 5.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> The <b>Basic</b> tier only allows manual scaling. And 5 instances all the time cost more than 2 instances most of the time.</p>",
   "portal": {
    "path": [
     "App Service plans",
     "Plan1"
    ],
    "title": "Scale out",
    "rows": [
     [
      "*Basic",
      "Manual only"
     ]
    ]
   },
   "keep": "Basic = no autoscale."
  },
  {
   "solution": "<p><b>Solution:</b> You use a Premium v3 P3v3 plan with a single instance.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> Moving to a bigger plan is <b>vertical</b> scaling (scale up). The instance count stays at 1, and P3v3 is much more expensive.</p>",
   "portal": {
    "path": [
     "App Service plans",
     "Plan1"
    ],
    "title": "Scale up",
    "rows": [
     [
      "*P3v3",
      "More powerful, not more instances"
     ]
    ]
   },
   "keep": "Scale up = bigger; scale out = more instances."
  }
 ]
},
{
 "id": "S005",
 "dom": 4,
 "title": "Connectivity between spokes",
 "scenario": "<p>You have three virtual networks: VNet-Hub, VNet1, and VNet3. VNet1 and VNet3 are peered only with VNet-Hub. No virtual appliance or route table exists. The address spaces don't overlap.</p><p>VM1 (VNet1) must communicate with VM3 (VNet3).</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You create a peering between VNet1 and VNet3.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> Peering isn't transitive, but a <b>direct peering</b> between VNet1 and VNet3 creates the missing path. The spaces don't overlap, so it's possible.</p>",
   "portal": {
    "path": [
     "Virtual networks",
     "VNet1"
    ],
    "title": "Add peering",
    "rows": [
     [
      "*Remote network",
      "VNet3"
     ]
    ],
    "btn": "Add"
   },
   "keep": "Spoke ↔ spoke = direct peering (or routing through the hub)."
  },
  {
   "solution": "<p><b>Solution:</b> You enable “Allow gateway transit” on VNet-Hub's peerings.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> <b>Allow gateway transit</b> is used to share the hub's VPN or ExpressRoute gateway with the spokes. It doesn't make peering transitive between spokes.</p>",
   "portal": {
    "path": [
     "Virtual networks",
     "VNet-Hub"
    ],
    "title": "Peerings",
    "rows": [
     [
      "*Gateway transit",
      "Concerns the VPN/ER gateway"
     ]
    ]
   },
   "keep": "Gateway transit ≠ transitivity."
  },
  {
   "solution": "<p><b>Solution:</b> You add to an NSG in VNet3 a rule that allows all traffic coming from VNet1.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> An NSG <b>filters</b> traffic, it doesn't create a <b>route</b>. With no direct peering or routing through the hub, no packet from VNet1 reaches VNet3.</p>",
   "portal": {
    "path": [
     "Network interfaces",
     "vm1-nic"
    ],
    "title": "Effective routes",
    "rows": [
     [
      "*VNet3 (10.3.0.0/16)",
      "No route"
     ]
    ]
   },
   "keep": "NSG = filtering; routing = peering or UDR."
  },
  {
   "solution": "<p><b>Solution:</b> You deploy Azure Firewall in VNet-Hub, create route tables in VNet1 and VNet3 to the firewall, enable “Allow forwarded traffic”, and create a network rule that allows the traffic.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> This is the hub-and-spoke model: the spokes' route tables send traffic to the hub's <b>firewall</b>, the peerings accept <b>forwarded traffic</b>, and a <b>network rule</b> allows the flow (the firewall denies everything by default).</p>",
   "portal": {
    "path": [
     "Route tables",
     "RT-VNet1"
    ],
    "title": "Routes",
    "rows": [
     [
      "*To VNet3",
      "Virtual appliance · firewall"
     ]
    ]
   },
   "keep": "Filtered spoke-to-spoke = UDR to the firewall + forwarded traffic + rule."
  }
 ]
},
{
 "id": "S006",
 "dom": 5,
 "title": "Alert on VM deletion",
 "scenario": "<p>Your Azure subscription contains 50 virtual machines.</p><p>The operations team must receive an email each time a virtual machine is deleted.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You create an activity log alert rule on the “Delete Virtual Machine” operation, with an action group that sends an email.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> Deleting a VM is a <b>control plane</b> operation, recorded in the <b>activity log</b>. An activity log alert on <code>Microsoft.Compute/virtualMachines/delete</code> and an email action group meet the need, for all 50 VMs with a single rule.</p>",
   "portal": {
    "path": [
     "Monitor",
     "Alerts"
    ],
    "title": "Create an alert rule",
    "rows": [
     [
      "*Signal",
      "Delete Virtual Machine"
     ],
     [
      "Actions",
      "Action group · email"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "Resource deletion = activity log alert."
  },
  {
   "solution": "<p><b>Solution:</b> You create a metric alert on each VM's Percentage CPU metric, with a threshold of 0.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> A deleted VM no longer sends metrics: there's nothing left to compare to the threshold. Metrics measure values, not management operations.</p>",
   "portal": {
    "path": [
     "Virtual machines",
     "VM1"
    ],
    "title": "Metric alert",
    "rows": [
     [
      "*Deleted VM",
      "No more data"
     ]
    ]
   },
   "keep": "Metric = value; operation = activity log."
  },
  {
   "solution": "<p><b>Solution:</b> You create an activity log diagnostic setting to a storage account.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> The diagnostic setting <b>archives</b> the log in a storage account, but sends no notification. You need an alert rule.</p>",
   "portal": {
    "path": [
     "Monitor",
     "Activity log"
    ],
    "title": "Export activity log",
    "rows": [
     [
      "*Storage",
      "Archive, no alert"
     ]
    ]
   },
   "keep": "Diagnostic = store; alert = notify."
  }
 ]
},
{
 "id": "S007",
 "dom": 3,
 "title": "Web application availability",
 "scenario": "<p>You deploy a web application on virtual machines in the France Central region, behind a Standard load balancer.</p><p>The application must stay available if an entire datacenter in the region fails.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You deploy three VMs spread across availability zones 1, 2, and 3.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> Each <b>availability zone</b> is one or more independent datacenters (power, cooling, network). With one VM per zone, losing a zone leaves two active VMs (99.99% SLA). The zone-redundant Standard load balancer keeps serving.</p>",
   "portal": {
    "path": [
     "Virtual machines",
     "Create"
    ],
    "title": "Availability options",
    "rows": [
     [
      "*Availability zones",
      "1, 2, 3"
     ]
    ]
   },
   "keep": "Surviving the loss of a datacenter = zones."
  },
  {
   "solution": "<p><b>Solution:</b> You deploy three VMs in an availability set with 3 fault domains.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> An <b>availability set</b> spreads VMs across racks (fault domains) of the <b>same</b> datacenter. It protects against a rack failure, not a whole datacenter (99.95% SLA).</p>",
   "portal": {
    "path": [
     "Availability sets",
     "AS1"
    ],
    "title": "AS1",
    "rows": [
     [
      "*Fault domains",
      "3 · same datacenter"
     ]
    ]
   },
   "keep": "Availability set = racks; zones = datacenters."
  },
  {
   "solution": "<p><b>Solution:</b> You deploy a virtual machine scale set of 3 instances, all in zone 1.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> All three instances are in <b>zone 1</b>. If that datacenter goes down, all instances go down with it.</p>",
   "portal": {
    "path": [
     "Virtual machine scale sets",
     "VMSS1"
    ],
    "title": "Availability",
    "rows": [
     [
      "*Zones",
      "1 only"
     ]
    ]
   },
   "keep": "A single zone = single point of failure."
  },
  {
   "solution": "<p><b>Solution:</b> You deploy a virtual machine scale set of 3 instances spread across zones 1, 2, and 3.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> A <b>scale set</b> spread across zones 1, 2, and 3 keeps active instances if a zone goes down. It can also recreate instances in the remaining zones.</p>",
   "portal": {
    "path": [
     "Virtual machine scale sets",
     "Create"
    ],
    "title": "Availability options",
    "rows": [
     [
      "*Zones",
      "1, 2, 3"
     ]
    ]
   },
   "keep": "Multi-zone VMSS = high availability + scaling."
  }
 ]
},
{
 "id": "S008",
 "dom": 2,
 "title": "Private access to Azure Files",
 "scenario": "<p>You have a storage account named storage2 that contains the file share share1. Your on-premises site is connected to VNet1 by a site-to-site VPN.</p><p>On-premises servers must access share1 through a private IP address, without going over the internet.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You create in VNet1 a private endpoint for storage2's file service and configure DNS resolution of privatelink.file.core.windows.net for the on-premises site.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> The <b>private endpoint</b> gives storage2's file service a private address in VNet1, reachable from on-premises through the VPN. On-premises DNS must resolve <code>storage2.file.core.windows.net</code> to that private address (privatelink zone + forwarder or DNS private resolver).</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "storage2"
    ],
    "title": "Create a private endpoint",
    "rows": [
     [
      "*Target sub-resource",
      "file"
     ],
     [
      "Virtual network",
      "VNet1"
     ],
     [
      "DNS",
      "privatelink.file.core.windows.net"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "Private access from on-premises = private endpoint + DNS."
  },
  {
   "solution": "<p><b>Solution:</b> You enable a Microsoft.Storage service endpoint on VNet1's GatewaySubnet.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> A <b>service endpoint</b> only concerns traffic from the Azure subnets where it's enabled, and the account keeps its <b>public</b> address. On-premises traffic doesn't benefit from it.</p>",
   "portal": {
    "path": [
     "Virtual networks",
     "VNet1",
     "GatewaySubnet"
    ],
    "title": "Service endpoints",
    "rows": [
     [
      "*Microsoft.Storage",
      "Not for on-premises"
     ]
    ]
   },
   "keep": "Service endpoint = Azure subnets, public address."
  },
  {
   "solution": "<p><b>Solution:</b> You add the on-premises site's public IP address to storage2's firewall.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> Allowing the on-premises public IP in the account's firewall leaves traffic going over the <b>internet</b>, to the account's public address.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "storage2"
    ],
    "title": "Networking",
    "rows": [
     [
      "*Address range",
      "Site public IP (over the internet)"
     ]
    ]
   },
   "keep": "Firewall IP rule = still over the internet."
  }
 ]
},
{
 "id": "S009",
 "dom": 1,
 "title": "Allowed region for resources",
 "scenario": "<p>Your organization has the management group MG-Corp, which contains 10 subscriptions. New subscriptions will be added to it.</p><p>You must prevent resources from being created outside the France Central region in all MG-Corp subscriptions, current and future.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You assign to MG-Corp the built-in Allowed locations policy with the value France Central.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> A policy assigned to a <b>management group</b> applies through <b>inheritance</b> to all its subscriptions, including those added later. <b>Allowed locations</b> (Deny effect) blocks creation outside France Central.</p>",
   "portal": {
    "path": [
     "Policy",
     "Assign policy"
    ],
    "title": "Allowed locations",
    "rows": [
     [
      "*Scope",
      "MG-Corp"
     ],
     [
      "Locations",
      "France Central"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "All subscriptions, future included = policy on the management group."
  },
  {
   "solution": "<p><b>Solution:</b> You assign the Allowed locations policy to each of the 10 existing subscriptions.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> The 10 current subscriptions would be covered, but not those added to MG-Corp later.</p>",
   "portal": {
    "path": [
     "Policy",
     "Assignments"
    ],
    "title": "Assignments",
    "rows": [
     [
      "*Scope",
      "10 subscriptions (not future ones)"
     ]
    ]
   },
   "keep": "Subscription by subscription = guaranteed gaps."
  },
  {
   "solution": "<p><b>Solution:</b> You apply a ReadOnly lock to MG-Corp.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> You can't put a lock on a management group. And a ReadOnly lock would block all changes, not only creations outside France Central.</p>",
   "portal": {
    "path": [
     "Management groups",
     "MG-Corp"
    ],
    "title": "MG-Corp",
    "rows": [
     [
      "*Locks",
      "Not available"
     ]
    ]
   },
   "keep": "Lock = prevents change/delete; Policy = enforces rules."
  },
  {
   "solution": "<p><b>Solution:</b> You assign to MG-Corp the Allowed locations policy with policy enforcement Disabled.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> With policy enforcement <b>Disabled</b> (DoNotEnforce), compliance is evaluated and displayed, but no creation is blocked.</p>",
   "portal": {
    "path": [
     "Policy",
     "Assign policy"
    ],
    "title": "Basics",
    "rows": [
     [
      "*Policy enforcement",
      "Disabled (nothing blocked)"
     ]
    ]
   },
   "keep": "DoNotEnforce = test mode, no blocking."
  }
 ]
},
{
 "id": "S010",
 "dom": 5,
 "title": "Restoring a deleted file",
 "scenario": "<p>The virtual machine VM1 runs Windows Server. It's backed up every night by Azure Backup to the vault Vault1.</p><p>A user deleted a file on VM1's data disk yesterday. You need to recover this file without modifying or stopping VM1.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You use File Recovery, run the script on VM1, and copy the file from the mounted drive.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> <b>File recovery</b> downloads a script that mounts the recovery point's disks as drives. You copy the file, then unmount. VM1 is neither stopped nor modified.</p>",
   "portal": {
    "path": [
     "Backup items",
     "VM1"
    ],
    "title": "File Recovery",
    "rows": [
     [
      "*Point",
      "Yesterday"
     ],
     [
      "Script",
      "Mount disks"
     ]
    ],
    "btn": "Download Executable"
   },
   "keep": "One file without touching the VM = file recovery."
  },
  {
   "solution": "<p><b>Solution:</b> You restore VM1 with the Replace existing option.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> <b>Replace existing</b> replaces VM1's disks with those of the recovery point and stops the VM during the operation. Everything that changed since the backup would be lost.</p>",
   "portal": {
    "path": [
     "Backup items",
     "VM1"
    ],
    "title": "Restore › Replace existing",
    "rows": [
     [
      "*Effect",
      "VM stopped, disks replaced"
     ]
    ]
   },
   "keep": "Replace existing = full rollback of the VM."
  },
  {
   "solution": "<p><b>Solution:</b> You restore the disks to a temporary resource group, attach the restored data disk to another VM, and copy the file.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> <b>Restore disks</b> creates managed disks in a chosen resource group. You attach the data disk to another VM and copy the file. It takes longer, but VM1 isn't touched.</p>",
   "portal": {
    "path": [
     "Backup items",
     "VM1"
    ],
    "title": "Restore › Restore disks",
    "rows": [
     [
      "*Resource group",
      "RG-Temp"
     ]
    ],
    "btn": "Restore"
   },
   "keep": "Restore disks = recover without touching the VM, more slowly."
  }
 ]
}
);
