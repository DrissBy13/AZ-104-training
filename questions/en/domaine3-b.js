/* Domain 3: compute (batch B : D3-012 to D3-066) */
AZ.questions.push(
{
 "id": "D3-014",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You write an ARM template. You need to place each element in the right section.</p><p>To answer, drag the appropriate section to each element. Each section may be used once, more than once, or not at all.</p>",
 "srcLabel": "Sections",
 "tgtHead": [
  "Element",
  "Section"
 ],
 "srcs": [
  "parameters",
  "variables",
  "resources",
  "outputs"
 ],
 "tgts": [
  {
   "l": "The administrator password entered at deployment",
   "a": 0
  },
  {
   "l": "A name computed from a prefix and uniqueString()",
   "a": 1
  },
  {
   "l": "The storage account definition",
   "a": 2
  },
  {
   "l": "The VM's public IP address, to display at the end of the deployment",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>parameters</b>: values provided at deployment (with type, default value, allowed values; <code>securestring</code> for a password).</li><li><b>variables</b>: values computed in the template, reused several times.</li><li><b>resources</b>: the resources to deploy.</li><li><b>outputs</b>: values returned after deployment.</li></ul>",
 "portal": {
  "path": [
   "Custom deployment",
   "Edit template"
  ],
  "title": "Edit template",
  "rows": [
   [
    "*parameters",
    "Entered at deployment"
   ],
   [
    "variables",
    "Computed"
   ],
   [
    "resources",
    "Resources"
   ],
   [
    "outputs",
    "Returned at the end"
   ]
  ]
 },
 "keep": "parameters = inputs; variables = computations; resources; outputs = outputs."
},
{
 "id": "D3-020",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to deploy the file main.bicep to the resource group RG1, with the parameter file prod.bicepparam, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Scope",
   "o": [
    "group",
    "sub",
    "mg"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--template-file",
    "--template-uri",
    "--bicep"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az deployment group create --resource-group RG1 --template-file main.bicep --parameters prod.bicepparam</code>.</p><ul><li><b>group</b> deploys to a resource group; <b>sub</b> at subscription scope; <b>mg</b> at management group scope; <b>tenant</b> at tenant scope.</li><li><b>--template-file</b> for a local file (JSON or Bicep); <b>--template-uri</b> for a file reachable by URL.</li></ul>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Command",
    "az deployment group create -g RG1 --template-file main.bicep --parameters prod.bicepparam"
   ]
  ]
 },
 "keep": "Scopes: group, sub, mg, tenant. Local file = --template-file.",
 "tpl": "az deployment {0} create --resource-group RG1 {1} main.bicep --parameters prod.bicepparam"
},
{
 "id": "D3-021",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to deploy template.json to RG2 with Azure PowerShell, in Complete mode.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzResourceGroupDeployment",
    "New-AzDeployment",
    "New-AzResourceGroup"
   ],
   "a": 0
  },
  {
   "l": "Mode",
   "o": [
    "Complete",
    "Incremental",
    "Full"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>New-AzResourceGroupDeployment -ResourceGroupName RG2 -TemplateFile template.json -Mode Complete</code>.</p><p><b>New-AzDeployment</b> (or New-AzSubscriptionDeployment) deploys at subscription scope. New-AzResourceGroup creates an empty group. The modes are <b>Incremental</b> (default) and <b>Complete</b>; “Full” doesn't exist.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | PowerShell",
  "rows": [
   [
    "*Command",
    "New-AzResourceGroupDeployment -ResourceGroupName RG2 -TemplateFile template.json -Mode Complete"
   ]
  ]
 },
 "keep": "Deploying to a group in PowerShell = New-AzResourceGroupDeployment (-Mode Incremental|Complete).",
 "tpl": "{0} -ResourceGroupName RG2 -TemplateFile template.json -Mode {1}"
},
{
 "id": "D3-022",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You review the following Bicep file:</p><pre>param location string = resourceGroup().location\nparam prefix string\n\nvar storageName = '${prefix}${uniqueString(resourceGroup().id)}'\n\nresource sa 'Microsoft.Storage/storageAccounts@2023-01-01' = {\n  name: storageName\n  location: location\n  sku: { name: 'Standard_LRS' }\n  kind: 'StorageV2'\n}\n\noutput blobEndpoint string = sa.properties.primaryEndpoints.blob</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "At deployment, you must provide:",
   "o": [
    "prefix",
    "storageName",
    "location"
   ],
   "a": 0
  },
  {
   "l": "The storage account is deployed in:",
   "o": [
    "France Central, always",
    "the resource group's region, by default",
    "the subscription's region"
   ],
   "a": 1
  },
  {
   "l": "blobEndpoint is:",
   "o": [
    "an input parameter",
    "a resource",
    "a value returned after deployment"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>prefix</b> has no default value: it's required. <b>location</b> has a default value. <b>storageName</b> is a computed variable.</li><li><code>resourceGroup().location</code>: the target resource group's region.</li><li><b>output</b>: value returned at the end of deployment.</li></ul>",
 "portal": {
  "path": [
   "Custom deployment"
  ],
  "title": "Template parameters",
  "rows": [
   [
    "*prefix",
    "Required (no default value)"
   ],
   [
    "location",
    "Default: the group's region"
   ],
   [
    "Outputs",
    "blobEndpoint"
   ]
  ]
 },
 "keep": "param with no default = required; var = computation; output = returned value."
},
{
 "id": "D3-028",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate VM size family for each workload.</p><p>To answer, drag the appropriate family to each workload. Each family may be used once, more than once, or not at all.</p>",
 "srcLabel": "Families",
 "tgtHead": [
  "Workload",
  "Family"
 ],
 "srcs": [
  "B-series",
  "D-series",
  "E-series",
  "F-series",
  "N-series"
 ],
 "tgts": [
  {
   "l": "Lightly used test web server, with occasional spikes",
   "a": 0
  },
  {
   "l": "In-memory database that needs a lot of RAM",
   "a": 2
  },
  {
   "l": "3D rendering and machine learning on GPU",
   "a": 4
  },
  {
   "l": "Batch processing server that needs a lot of CPU",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>B</b> (burstable): accumulates CPU credits when idle and spends them during spikes. Cheap.</li><li><b>D</b>: general purpose, balanced CPU/memory.</li><li><b>E</b>: memory optimized.</li><li><b>F</b>: compute optimized (more CPU per GB of RAM).</li><li><b>N</b>: GPU.</li></ul><p>Other families: M (very large memory), L (high-throughput storage).</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Select a VM size",
  "rows": [
   [
    "B",
    "Burstable"
   ],
   [
    "D",
    "General purpose"
   ],
   [
    "*E",
    "Memory"
   ],
   [
    "F",
    "Compute"
   ],
   [
    "N",
    "GPU"
   ]
  ]
 },
 "keep": "B spikes, D general, E memory, F CPU, N GPU, M very large memory, L storage."
},
{
 "id": "D3-030",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You deploy 12 VMs in an availability set configured with <b>2 fault domains</b> and <b>4 update domains</b>.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Maximum number of VMs affected by a rack failure:",
   "o": [
    "3",
    "4",
    "6"
   ],
   "a": 2
  },
  {
   "l": "Maximum number of VMs restarted at the same time during planned maintenance:",
   "o": [
    "3",
    "4",
    "6"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Fault domains</b>: 12 VMs spread across 2 racks, so 6 per rack. A rack failure affects <b>6</b> VMs.</li><li><b>Update domains</b>: 12 VMs spread across 4 domains, so 3 per domain. Maintenance restarts one domain at a time, so <b>3</b> VMs.</li></ul>",
 "portal": {
  "path": [
   "Availability sets",
   "AS2"
  ],
  "title": "AS2 | Virtual machines",
  "menu": [
   "*Virtual machines"
  ],
  "rows": [
   [
    "*12 VMs / 2 fault domains",
    "6 per rack"
   ],
   [
    "*12 VMs / 4 update domains",
    "3 per domain"
   ]
  ]
 },
 "keep": "Affected VMs = number of VMs ÷ number of domains involved."
},
{
 "id": "D3-032",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to indicate the connectivity SLA of each virtual machine configuration.</p><p>To answer, drag the appropriate SLA to each configuration. Each SLA may be used once, more than once, or not at all.</p>",
 "srcLabel": "SLA",
 "tgtHead": [
  "Configuration",
  "SLA"
 ],
 "srcs": [
  "99.9%",
  "99.95%",
  "99.99%",
  "No SLA"
 ],
 "tgts": [
  {
   "l": "Two or more VMs spread across at least two availability zones",
   "a": 2
  },
  {
   "l": "Two or more VMs in an availability set",
   "a": 1
  },
  {
   "l": "A single VM with Premium SSD disks",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Availability zones</b>: 99.99%.</li><li><b>Availability set</b> (or same placement domain): 99.95%.</li><li><b>Single VM</b> with Premium SSD, Premium SSD v2, or Ultra for all disks: 99.9%. (With Standard SSD: 99.5%; with Standard HDD: 95%.)</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Availability options",
  "rows": [
   [
    "*Zones",
    "99.99%"
   ],
   [
    "Availability set",
    "99.95%"
   ],
   [
    "Single VM Premium SSD",
    "99.9%"
   ]
  ]
 },
 "keep": "99.99 / 99.95 / 99.9 (Standard SSD 99.5; HDD 95)."
},
{
 "id": "D3-045",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate managed disk type for each need, at the lowest cost.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Disk types",
 "tgtHead": [
  "Need",
  "Disk type"
 ],
 "srcs": [
  "Standard HDD",
  "Standard SSD",
  "Premium SSD",
  "Ultra Disk"
 ],
 "tgts": [
  {
   "l": "Backups and rarely read data, with no performance requirement",
   "a": 0
  },
  {
   "l": "Lightly loaded web server or test environment",
   "a": 1
  },
  {
   "l": "Production database with a single-VM SLA of 99.9%",
   "a": 2
  },
  {
   "l": "SAP HANA with hundreds of thousands of IOPS and sub-millisecond latency",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Standard HDD</b>: the cheapest, for insensitive workloads.</li><li><b>Standard SSD</b>: consistent performance for light workloads.</li><li><b>Premium SSD</b>: production, low latency; required for the 99.9% single-VM SLA.</li><li><b>Ultra Disk</b>: the highest performance, IOPS and throughput tunable independently of size.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "Create a disk",
  "rows": [
   [
    "Standard HDD",
    "Cheapest"
   ],
   [
    "Standard SSD",
    "Light workloads"
   ],
   [
    "*Premium SSD",
    "Production"
   ],
   [
    "Ultra Disk",
    "Extreme IOPS"
   ]
  ],
  "btn": "OK"
 },
 "keep": "HDD < Standard SSD < Premium SSD < Ultra (and Premium v2)."
},
{
 "id": "D3-049",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to create a custom Windows image from VM13, then share it with several subscriptions and regions, with versions.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>For a <b>generalized</b> image, you run <b>Sysprep</b> (or waagent -deprovision on Linux), stop the VM, and mark it as generalized. You create the <b>image definition</b> (publisher, offer, SKU, OS, generation) in an <b>Azure Compute Gallery</b>, then a <b>version</b> replicated to the desired regions. The gallery is shared with Azure access control.</p><p>The temporary disk isn't captured. Redeploying plays no role here.</p>",
 "portal": {
  "path": [
   "Azure compute galleries",
   "Gallery1"
  ],
  "title": "Create an image version",
  "rows": [
   [
    "Definition",
    "win2022-app (generalized)"
   ],
   [
    "*Source",
    "VM13 (Sysprep)"
   ],
   [
    "Replication",
    "France Central, West Europe"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Shared image: Sysprep, gallery, definition, replicated version.",
 "acts": [
  "Run Sysprep in VM13 to generalize it",
  "Stop (deallocate) VM13 and mark it as generalized",
  "Create an image definition in an Azure Compute Gallery",
  "Create an image version from VM13 and replicate it to the target regions",
  "Create a snapshot of the temporary disk",
  "Redeploy VM13"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D3-053",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You manage the disks of the VM VM16.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "You can detach a data disk from VM16 and attach it to VM17 in the same region.",
   "a": 0
  },
  {
   "l": "The maximum number of data disks depends on VM16's size.",
   "a": 0
  },
  {
   "l": "You can switch a Standard SSD disk to Premium SSD without stopping VM16, in every case.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Detach and attach: Yes.</b> A managed disk is an independent resource.</li><li><b>Number of disks: Yes.</b> Each VM size has a maximum number of data disks (and an IOPS and throughput limit).</li><li><b>Changing type while running: No.</b> Changing a disk's type usually requires deallocating the VM (or detaching the disk). And the VM size must support Premium storage (letter <b>s</b> in the name, for example D2<b>s</b>_v5).</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM16"
  ],
  "title": "VM16 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "Data disk",
    "Detach / attach"
   ],
   [
    "*Storage type",
    "Editable when the VM is deallocated"
   ]
  ]
 },
 "keep": "Managed disk = independent; changing its type usually requires deallocating the VM."
},
{
 "id": "D3-065",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You manage VM24's state.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "State in which compute is no longer billed:",
   "o": [
    "Stopped (deallocated)",
    "Stopped",
    "Running"
   ],
   "a": 0
  },
  {
   "l": "Azure CLI command to deallocate the VM:",
   "o": [
    "az vm restart",
    "az vm deallocate",
    "az vm stop"
   ],
   "a": 1
  },
  {
   "l": "Azure CLI command that stops the VM without deallocating it:",
   "o": [
    "az vm deallocate",
    "az vm redeploy",
    "az vm stop"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Stopped (deallocated)</b>: compute no longer billed.</li><li><b>az vm deallocate</b> deallocates the VM (like the portal's Stop button).</li><li><b>az vm stop</b> shuts down the OS, but the VM keeps its hardware resources and compute stays billed. The PowerShell equivalent is <code>Stop-AzVM -StayProvisioned</code>.</li></ul>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az vm deallocate",
    "Stopped (deallocated)"
   ],
   [
    "az vm stop",
    "Stopped (still billed)"
   ]
  ]
 },
 "keep": "deallocate = no longer billed; stop = billed."
}
);
