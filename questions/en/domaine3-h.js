/* Domain 3: compute (batch H: D3-401 to D3-410, long scenarios) */
AZ.questions.push(
{
 "id": "D3-401",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Fabrikam is deploying the billing app on three VM tiers in France Central (three availability zones). Management requires, for each tier, the connectivity service level agreement (SLA) shown:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Tier</th><th>VM count</th><th>Required SLA</th><th>Constraints</th></tr><tr><td>Web</td><td>4</td><td>99.99%</td><td>Must survive the loss of a whole datacenter</td></tr><tr><td>Batch</td><td>1</td><td>99.9%</td><td>A single VM, lowest cost</td></tr><tr><td>Database</td><td>2 (SQL cluster)</td><td>99.95%</td><td>Lowest latency between the two nodes; no requirement to survive a zone loss</td></tr></table></div><p>All VMs use Premium SSD disks.</p><p>What should you choose for each tier?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Web tier:",
   "o": [
    "At least two availability zones",
    "A 4-VM availability set",
    "A proximity placement group",
    "A single zone, two fault domains"
   ],
   "a": 0
  },
  {
   "l": "Batch tier:",
   "o": [
    "One VM in each zone of the region",
    "A Spot VM with Standard disks",
    "Two VMs in an availability set",
    "A single VM with Premium SSD disks"
   ],
   "a": 3
  },
  {
   "l": "Database tier:",
   "o": [
    "Two different zones",
    "Two paired regions",
    "One VM with a shared disk",
    "An availability set"
   ],
   "a": 3
  }
 ],
 "expl": "<b>99.99%.</b> That's the SLA for two or more VMs spread across at least two availability zones; only zones protect against losing a datacenter.<b>99.9%.</b> A single VM whose disks are all Premium SSD (or Ultra) has this SLA; no redundancy is needed.<b>99.95%.</b> That's the SLA for an availability set (two or more VMs). Both nodes stay in the same datacenter, with lower latency than across zones.",
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
    "*Web tier",
    "At least two availability zones"
   ],
   [
    "Batch tier",
    "A single VM with Premium SSD disks"
   ],
   [
    "Database tier",
    "An availability set"
   ]
  ]
 },
 "keep": "SLA: single Premium SSD VM 99.9%; availability set 99.95%; zones 99.99%."
},
{
 "id": "D3-402",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You're preparing disks for three new workloads in France Central.</p><ul><li>Workload A: a SAP HANA database needing 80,000 IOPS and 1,200 MB/s on a 2 TiB disk; the team must be able to adjust IOPS and throughput without changing size.</li><li>Workload B: a file server whose 512 GiB disk (P20) needs, during month-end close, P40 performance, without changing size or redundancy.</li><li>Workload C: a 1 TiB data disk on which the team wants to enable read host caching.</li></ul><p>What should you choose or configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Workload A:",
   "o": [
    "Premium SSD P40 with caching",
    "Standard HDD in RAID",
    "Standard SSD with bursting",
    "Ultra Disk"
   ],
   "a": 3
  },
  {
   "l": "Workload B:",
   "o": [
    "Enable on-demand bursting on the P20",
    "The P40 performance tier on the disk",
    "Grow the disk to 2 TiB during close",
    "Switch to Ultra Disk during close"
   ],
   "a": 1
  },
  {
   "l": "Workload C, compatible disk type:",
   "o": [
    "Premium SSD v2",
    "Ultra Disk",
    "Premium SSD",
    "No managed disk type"
   ],
   "a": 2
  }
 ],
 "expl": "<b>A.</b> Ultra Disks (and Premium SSD v2) let you set size, IOPS, and throughput independently. 80,000 IOPS and 1,200 MB/s exceed what a P40 gives (7,500 IOPS).<b>B.</b> A Premium SSD's performance tier can be raised (P20 → P40) without changing size, then lowered after close. On-demand bursting only exists for disks over 512 GiB and is time-limited.<b>C.</b> Host caching isn't supported on Ultra Disks or Premium SSD v2; it is on Premium SSD (and Standard).",
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
    "*Workload A",
    "Ultra Disk"
   ],
   [
    "Workload B",
    "The P40 performance tier on the disk"
   ],
   [
    "Workload C, compatible disk type",
    "Premium SSD"
   ]
  ]
 },
 "keep": "Ultra / Premium v2: adjustable IOPS, no caching. Performance tier: more performance without growing."
},
{
 "id": "D3-403",
 "dom": 3,
 "type": "hot",
 "stem": "<p>VM-Files (Windows, Standard_D8s_v5) has a 512 GiB data disk, nearly full. Users work continuously.</p><ul><li>The disk must grow to 1 TiB, avoiding any downtime.</li><li>The team then wants to shrink the 256 GiB OS disk to 128 GiB to save money.</li><li>An auditor must get a copy of the data disk as a VHD, downloadable for 24 hours.</li><li>The team wants fast, cheap backups of the data disk before each update, paying only for changed blocks.</li></ul><p>What should you do or answer?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Grow to 1 TiB:",
   "o": [
    "Expand live, then extend the volume",
    "Not possible beyond 512 GiB on this type",
    "Deallocate the VM, expand, then restart",
    "Create a 1 TiB disk and copy the data"
   ],
   "a": 0
  },
  {
   "l": "Shrink the OS disk:",
   "o": [
    "Possible by changing tier",
    "Reduce the size in the portal, VM deallocated",
    "Possible after a snapshot",
    "Not possible: a managed disk can't shrink"
   ],
   "a": 3
  },
  {
   "l": "Copy for the auditor:",
   "o": [
    "A shared Azure Backup backup",
    "Reader access to the disk for the auditor",
    "An Azure Files share holding the copied VHD",
    "An export SAS URL for the disk"
   ],
   "a": 3
  },
  {
   "l": "Backups before updates:",
   "o": [
    "Incremental snapshots",
    "Full disk snapshots",
    "A generalized VM image",
    "A full copy of the managed disk"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Growth.</b> A data disk can be expanded without deallocating the VM (live expansion doesn't apply to the OS disk); then extend the partition in the guest OS.<b>Shrinking.</b> A managed disk's size can't be reduced. You'd need to create a smaller disk and migrate the data.<b>Export.</b> Generate an export SAS URL, valid for the chosen duration, on the disk (VM deallocated) or better on a snapshot, without stopping the VM.<b>Incremental snapshots.</b> They bill only blocks changed since the previous one, on Standard storage.",
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
    "*Grow to 1 TiB",
    "Expand live, then extend the volume"
   ],
   [
    "Shrink the OS disk",
    "Not possible: a managed disk can't shrink"
   ],
   [
    "Copy for the auditor",
    "An export SAS URL for the disk"
   ],
   [
    "Backups before updates",
    "Incremental snapshots"
   ]
  ]
 },
 "keep": "Managed disks: expand live, never shrink. Export by SAS. Incremental snapshots."
},
{
 "id": "D3-404",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You must configure 40 Windows VMs and 30 Linux VMs right after an ARM template deploys them.</p><ul><li>Linux VMs must install nginx and create a user at the very first boot, from a YAML file passed at creation.</li><li>Windows VMs must download a PowerShell script from a storage account and run it; the script contains a password that must not appear in the portal or in deployment logs.</li><li>An admin must occasionally run “ipconfig /all” on VM-12, with no RDP or network connection to the VM.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Linux VMs:",
   "o": [
    "cloud-init (custom data)",
    "Run Command after deployment",
    "Azure Automation State Configuration",
    "The Custom Script extension for Linux"
   ],
   "a": 0
  },
  {
   "l": "Windows script password:",
   "o": [
    "In the extension's protected settings",
    "In the extension's public settings",
    "In an encrypted VM tag",
    "In the downloaded file name"
   ],
   "a": 0
  },
  {
   "l": "ipconfig on VM-12:",
   "o": [
    "Azure Bastion with RDP",
    "Run Command",
    "Serial console",
    "The Custom Script extension with a new script"
   ],
   "a": 1
  }
 ],
 "expl": "<b>cloud-init.</b> On Linux, custom data in cloud-config format is processed by cloud-init at first boot (packages, users, files).<b>protectedSettings.</b> An extension's protected settings are encrypted and only decrypted inside the VM; they don't appear in the portal or in deployment history, unlike public settings.<b>Run Command.</b> It runs a script or command in the VM through the agent, with no network connection to the VM; ideal for one-off diagnostics. Serial console requires an interactive session.",
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
    "*Linux VMs",
    "cloud-init (custom data)"
   ],
   [
    "Windows script password",
    "In the extension's protected settings"
   ],
   [
    "ipconfig on VM-12",
    "Run Command"
   ]
  ]
 },
 "keep": "Linux first boot = cloud-init. Extension secret = protectedSettings. One-off command = Run Command."
},
{
 "id": "D3-405",
 "dom": 3,
 "type": "hot",
 "stem": "<p>VMSS-API is a Uniform orchestration scale set, 6 instances, behind a Standard load balancer with an HTTP probe. The upgrade policy is Manual.</p><p>Requirements:</p><ul><li>instances must automatically receive new Ubuntu image versions published by Canonical, in batches, with no action;</li><li>an instance whose app stops responding must be deleted and recreated automatically;</li><li>to cut costs, 70% of instances beyond the first 2 must be Spot VMs.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "New images:",
   "o": [
    "A new version in a Compute Gallery",
    "A monthly instance reimage runbook",
    "A Manual upgrade policy",
    "Automatic OS image upgrade"
   ],
   "a": 3
  },
  {
   "l": "Failed instance:",
   "o": [
    "Instance overprovisioning",
    "Automatic instance repairs",
    "Scale-in protection",
    "An autoscale rule on the probe"
   ],
   "a": 1
  },
  {
   "l": "Spot VMs:",
   "o": [
    "A second, Spot-only autoscale rule",
    "Spot priority mix (Flexible)",
    "Uniform mode, partial Spot priority",
    "Reserved instances for the base"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Images.</b> Automatic OS image upgrade applies new platform image versions in batches, relying on the health signal (probe or extension).<b>Repairs.</b> Automatic repairs delete and recreate an instance found unhealthy during the defined grace period.<b>Spot.</b> Spot priority mix, which sets a base of standard instances then a Spot percentage, only exists in Flexible orchestration: VMSS-API will need to be recreated in that mode.",
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
    "*New images",
    "Automatic OS image upgrade"
   ],
   [
    "Failed instance",
    "Automatic instance repairs"
   ],
   [
    "Spot VMs",
    "Spot priority mix (Flexible)"
   ]
  ]
 },
 "keep": "Scale sets: automatic OS image upgrade, automatic repairs, Spot mix in Flexible."
},
{
 "id": "D3-406",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Your ARM template deploys a storage account, a virtual network, and five VMs. Several issues appear.</p><ul><li>The five VMs must be named web-0 to web-4 without repeating the resource.</li><li>Deployment sometimes fails because a VM is created before its network interface.</li><li>The admin password must be read from key vault KV-Deploy, without appearing in the parameters file.</li><li>The diagnostic storage account must be created only if the enableDiag parameter is true.</li></ul><p>Which template element should you use for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Five VMs:",
   "o": [
    "dependsOn with five names",
    "Five deployments of one template",
    "copy and copyIndex()",
    "A loop in the parameters file"
   ],
   "a": 2
  },
  {
   "l": "Creation order:",
   "o": [
    "An output of the interface",
    "Complete deployment mode",
    "dependsOn",
    "condition on the network interface"
   ],
   "a": 2
  },
  {
   "l": "Password:",
   "o": [
    "An encrypted template variable",
    "A template output marked secure",
    "A default value in the template",
    "A Key Vault reference (parameters)"
   ],
   "a": 3
  },
  {
   "l": "Diagnostic account:",
   "o": [
    "dependsOn on enableDiag",
    "copy with a zero count",
    "condition",
    "A linked template, called separately"
   ],
   "a": 2
  }
 ],
 "expl": "<b>copy.</b> The copy element creates several instances of a resource; copyIndex() gives the index for the name.<b>dependsOn.</b> It enforces deployment order between resources in the same template (the VM waits for its NIC).<b>Key Vault reference.</b> In the parameters file, a securestring parameter can reference a vault secret (vault ID and secret name); the vault must allow Azure Resource Manager for template deployment.<b>condition.</b> A resource with a condition is deployed only if the expression is true.",
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
    "*Five VMs",
    "copy and copyIndex()"
   ],
   [
    "Creation order",
    "dependsOn"
   ],
   [
    "Password",
    "A Key Vault reference (parameters)"
   ],
   [
    "Diagnostic account",
    "condition"
   ]
  ]
 },
 "keep": "ARM: copy for multiple instances, dependsOn for order, Key Vault reference for secrets, condition for optional."
},
{
 "id": "D3-407",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The platform team manages RG-Shared deployments with Bicep.</p><ul><li>It wants to see, before deploying a new file version, which resources will be created, modified, or deleted.</li><li>RG-Shared also contains VM-Legacy, which isn't in the file. An engineer proposes Complete mode to “clean up”; management wants to keep VM-Legacy.</li><li>The validated network template must be shared with 12 teams, versioned, and only some teams may deploy it.</li><li>Resources deployed by the template must be managed as a unit; nobody may delete them outside the template.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Before deployment:",
   "o": [
    "Complete mode as a test",
    "The what-if operation",
    "Template export",
    "Template validation alone"
   ],
   "a": 1
  },
  {
   "l": "Deployment mode:",
   "o": [
    "Validate only",
    "Complete",
    "Incremental",
    "Complete, with a lock on VM-Legacy"
   ],
   "a": 2
  },
  {
   "l": "Template sharing:",
   "o": [
    "A template spec",
    "A public GitHub repository",
    "A storage account with a SAS per team",
    "An exported template sent to each team"
   ],
   "a": 0
  },
  {
   "l": "Unit management:",
   "o": [
    "A Delete lock on the group",
    "A management group for the resources",
    "A Deny policy on RG-Shared",
    "A deployment stack with deny settings"
   ],
   "a": 3
  }
 ],
 "expl": "<b>what-if.</b> It compares the template with the current state and lists creations, changes, and deletions, deploying nothing.<b>Incremental.</b> The default mode leaves resources missing from the template untouched; Complete mode would delete VM-Legacy (a lock would make the deployment fail, which isn't a solution).<b>Template spec.</b> A versioned Azure resource, shared through RBAC: Reader is enough to deploy it.<b>Deployment stack.</b> It manages resources as a unit and can deny their change or deletion outside the stack (denySettings).",
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
    "*Before deployment",
    "The what-if operation"
   ],
   [
    "Deployment mode",
    "Incremental"
   ],
   [
    "Template sharing",
    "A template spec"
   ],
   [
    "Unit management",
    "A deployment stack with deny settings"
   ]
  ]
 },
 "keep": "what-if to preview, Incremental by default, template spec to share, deployment stack to protect."
},
{
 "id": "D3-408",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You're writing main.bicep for the Data team.</p><ul><li>Network VNet-Core already exists in RG-Network (same subscription); you must add subnet snet-data without redeploying VNet-Core.</li><li>The file must create resource group RG-Data, then deploy a storage account and a network module into it.</li><li>The env parameter must accept only dev, test, or prod.</li><li>The storage.bicep module, maintained by the platform team, must be reused as is in 20 projects.</li></ul><p>What should you write?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For VNet-Core:",
   "o": [
    "An existing reference with scope",
    "Redeclare VNet-Core with the new subnet",
    "An output that returns VNet-Core",
    "A module that redeploys all of VNet-Core"
   ],
   "a": 0
  },
  {
   "l": "File scope:",
   "o": [
    "targetScope = 'managementGroup'",
    "targetScope = 'tenant'",
    "targetScope = 'subscription'",
    "targetScope = 'resourceGroup'"
   ],
   "a": 2
  },
  {
   "l": "env parameter:",
   "o": [
    "@minLength(3)",
    "@description('dev, test, prod')",
    "@secure()",
    "@allowed(['dev','test','prod'])"
   ],
   "a": 3
  },
  {
   "l": "Reusing storage.bicep:",
   "o": [
    "A template spec per project",
    "A module published in a Bicep registry",
    "Copy the content into each project",
    "An exported ARM template, decompiled"
   ],
   "a": 1
  }
 ],
 "expl": "<b>existing.</b> The existing keyword references an already deployed resource, possibly in another group (scope), without redeploying it; you add a subnet with parent: vnet. Redeclaring VNet-Core could overwrite its other subnets.<b>Scope.</b> Creating a resource group requires subscription scope; modules are then deployed with scope: resourceGroup('RG-Data').<b>@allowed.</b> Restricts accepted values.<b>Registry.</b> A private Bicep registry (in Azure Container Registry) publishes versioned modules that projects reference.",
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
    "*For VNet-Core",
    "An existing reference with scope"
   ],
   [
    "File scope",
    "targetScope = 'subscription'"
   ],
   [
    "env parameter",
    "@allowed(['dev','test','prod'])"
   ],
   [
    "Reusing storage.bicep",
    "A module published in a Bicep registry"
   ]
  ]
 },
 "keep": "Bicep: existing for an existing resource, subscription targetScope to create a group, @allowed, registry modules."
},
{
 "id": "D3-409",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Wingtip hosts 12 web apps in App Service. The following needs arrive:</p><ul><li>App A: 5 deployment slots, autoscale up to 10 instances, lowest possible cost.</li><li>App B: 20 deployment slots and up to 30 instances, with virtual network integration.</li><li>App C: a showcase site with no custom domain or SLA, for testing; it can stop when idle.</li><li>App D: must be fully isolated in a dedicated virtual network, with private-only inbound access, for strict compliance, and scale up to 100 instances.</li></ul><p>Which App Service plan tier should you choose for each app?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "App A:",
   "o": [
    "Standard (S1)",
    "Basic (B1)",
    "Free (F1)",
    "Premium v3 (P1v3)"
   ],
   "a": 0
  },
  {
   "l": "App B:",
   "o": [
    "Premium v3 (P1v3)",
    "Basic (B1)",
    "Isolated v2 (I1v2)",
    "Standard (S1)"
   ],
   "a": 0
  },
  {
   "l": "App C:",
   "o": [
    "Free (F1)",
    "Standard (S1)",
    "Premium v3 (P1v3)",
    "Basic (B1)"
   ],
   "a": 0
  },
  {
   "l": "App D:",
   "o": [
    "Premium v3 (P1v3), with private endpoint",
    "Standard (S1), with restrictions",
    "Basic (B1), with VNet integration",
    "Isolated v2 (App Service Environment v3)"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Standard</b>: 5 slots, autoscale up to 10 instances; it's the cheapest offering both.<b>Premium v3</b>: 20 slots, up to 30 instances (more on request).<b>Free</b>: no custom domain or SLA, compute quotas; enough for testing.<b>Isolated v2</b>: the plan of an App Service Environment v3, deployed in your virtual network, isolated and dedicated, up to 100 instances.",
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
    "*App A",
    "Standard (S1)"
   ],
   [
    "App B",
    "Premium v3 (P1v3)"
   ],
   [
    "App C",
    "Free (F1)"
   ],
   [
    "App D",
    "Isolated v2 (App Service Environment v3)"
   ]
  ]
 },
 "keep": "App Service: Standard 5 slots / 10 instances; Premium 20 / 30; Isolated (ASE v3) 100 instances, dedicated network."
},
{
 "id": "D3-410",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The shop web app (Premium v3 plan, Windows) has two slots: production and staging.</p><ul><li>App settings ApiUrl and Feature_X must stay with their slot during swaps; other settings must follow the code.</li><li>Before each swap, staging must be warmed up with production configuration, then the team validates manually before completing the swap.</li><li>Traffic must be split 90% production / 10% staging for a beta.</li><li>After the swap, the old version must be able to come back within seconds.</li></ul><p>What should you configure or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "ApiUrl and Feature_X:",
   "o": [
    "Duplicate them in a key vault",
    "Put them in connection strings",
    "A deployment slot setting",
    "Set them in each slot's web.config"
   ],
   "a": 2
  },
  {
   "l": "Warm-up and validation:",
   "o": [
    "A staging restart before swapping",
    "Auto swap to production",
    "A direct swap, then a test",
    "Multi-phase swap with preview"
   ],
   "a": 3
  },
  {
   "l": "90 / 10:",
   "o": [
    "Azure Front Door with two weighted origins",
    "Two App Service plans behind a load balancer",
    "A rewrite rule on the Host header",
    "Traffic % on staging"
   ],
   "a": 3
  },
  {
   "l": "Rollback:",
   "o": [
    "Swap the slots again",
    "Restore a backup",
    "Redeploy the old version from Git",
    "Restart production"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Slot setting.</b> When checked, it stays with the slot; otherwise it follows the content during a swap.<b>Swap with preview.</b> Phase one applies production settings to staging and warms it up; you validate, then complete (or cancel) the swap. Auto swap waits for no validation.<b>Traffic %.</b> In Deployment slots, give a slot a percentage of production traffic.<b>Rollback.</b> The old version is in staging after the swap: swapping again puts it back in production immediately.",
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
    "*ApiUrl and Feature_X",
    "A deployment slot setting"
   ],
   [
    "Warm-up and validation",
    "Multi-phase swap with preview"
   ],
   [
    "90 / 10",
    "Traffic % on staging"
   ],
   [
    "Rollback",
    "Swap the slots again"
   ]
  ]
 },
 "keep": "Slots: slot setting, swap with preview, traffic %, rollback by swapping again."
}
);
