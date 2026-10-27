/* Domain 3: compute (batch B : D3-012 to D3-066) */
AZ.questions.push(
{
 "id": "D3-012",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy an ARM template to the resource group RG1 in <b>Complete</b> mode. RG1 contains VM1, which isn't described in the template.</p><p>What happens to VM1?</p>",
 "opts": [
  "VM1 is deleted",
  "The deployment fails",
  "VM1 is kept unchanged",
  "VM1 is stopped"
 ],
 "ans": 0,
 "expl": "<p>In <b>Complete</b> mode, Resource Manager <b>deletes</b> resources in the resource group that aren't in the template (unless a lock prevents it). In <b>Incremental</b> mode, the default, resources missing from the template are kept.</p><p>Best practice: run a <b>what-if</b> operation first to see what would be deleted.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Deployments",
  "menu": [
   "*Deployments"
  ],
  "rows": [
   [
    "Mode",
    "Complete"
   ],
   [
    "*VM1 (not in template)",
    "Deleted"
   ]
  ]
 },
 "keep": "Complete mode = deletes what isn't in the template; test with what-if."
},
{
 "id": "D3-013",
 "dom": 3,
 "type": "single",
 "stem": "<p>Before deploying a modified Bicep template to RG-Prod, you want to see the list of resources that will be created, modified, or deleted, without changing anything.</p><p>What should you use?</p>",
 "opts": [
  "az group export",
  "az deployment group what-if",
  "az bicep decompile",
  "az deployment group validate only"
 ],
 "ans": 1,
 "expl": "<p><b>what-if</b> compares the template with the current state and shows the planned changes: creations, modifications (property by property), deletions (in Complete mode), without deploying anything.</p><p><b>validate</b> only checks that the template is valid and deployable. <b>decompile</b> converts JSON to Bicep. <b>export</b> produces a template from existing resources.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az deployment group what-if",
    "+ Create · ~ Modify · − Delete"
   ],
   [
    "az deployment group validate",
    "Validity only"
   ]
  ]
 },
 "keep": "See changes without deploying = what-if."
},
{
 "id": "D3-014",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You write an ARM template. You need to place each element in the right section.</p><p>To answer, drag the appropriate section to each element. Each section may be used once, more than once, or not at all.</p>",
 "srcLabel": "Sections",
 "srcs": [
  "parameters",
  "variables",
  "resources",
  "outputs"
 ],
 "tgtHead": [
  "Element",
  "Section"
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
 "id": "D3-015",
 "dom": 3,
 "type": "single",
 "stem": "<p>An ARM template must ask for a VM's administrator password without it appearing in the deployment history.</p><p>Which parameter type should you use?</p>",
 "opts": [
  "string",
  "secureobject with a default value",
  "securestring",
  "object"
 ],
 "ans": 2,
 "expl": "<p>The <b>securestring</b> type is neither logged nor returned in the deployment history. Even better: reference a <b>Key Vault</b> secret in the parameter file, so the password is never typed.</p><p>A <code>string</code> would appear in the history. A default value for a secret is bad practice.</p>",
 "portal": {
  "path": [
   "Custom deployment"
  ],
  "title": "Parameters",
  "rows": [
   [
    "*adminPassword",
    "securestring (masked, not logged)"
   ]
  ]
 },
 "keep": "Password in a template = securestring (or a Key Vault reference)."
},
{
 "id": "D3-016",
 "dom": 3,
 "type": "single",
 "stem": "<p>An ARM template parameter file must provide the administrator password from the key vault KV1, without copying it into the file.</p><p>Which condition must KV1 meet?</p>",
 "opts": [
  "KV1 must use access policies only",
  "KV1 must have its public endpoint disabled",
  "KV1 must be in the same resource group as the VM",
  "The “Azure Resource Manager for template deployment” option must be enabled on KV1"
 ],
 "ans": 3,
 "expl": "<p>For a deployment to read a secret by reference (<code>\"reference\": { \"keyVault\": { \"id\": ... }, \"secretName\": ... }</code>), the vault must have <b>enabledForTemplateDeployment</b> on, and the user deploying must have the <code>Microsoft.KeyVault/vaults/deploy/action</code> permission.</p><p>The vault can be in another resource group, and the permission model doesn't matter for this setting.</p>",
 "portal": {
  "path": [
   "Key vaults",
   "KV1"
  ],
  "title": "KV1 | Access configuration",
  "menu": [
   "*Access configuration"
  ],
  "rows": [
   [
    "*Azure Resource Manager for template deployment",
    "Checked"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Key Vault reference in a parameter file = enabledForTemplateDeployment."
},
{
 "id": "D3-017",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy a VM and its network interface with an ARM template. The deployment sometimes fails because the VM is created before the network interface.</p><p>What should you add to the VM resource?</p>",
 "opts": [
  "A dependsOn element that references the network interface",
  "A condition",
  "A copy element",
  "An output"
 ],
 "ans": 0,
 "expl": "<p><b>dependsOn</b> tells Resource Manager that a resource must wait until another finishes deploying. Without a dependency, resources are deployed in parallel.</p><p>In Bicep, dependencies are usually inferred automatically when a resource references a property of another (for example <code>nic.id</code>).</p>",
 "portal": {
  "path": [
   "Custom deployment",
   "Edit template"
  ],
  "title": "VM resource",
  "rows": [
   [
    "*dependsOn",
    "[resourceId('Microsoft.Network/networkInterfaces', 'nic1')]"
   ]
  ]
 },
 "keep": "Deployment order = dependsOn (implicit in Bicep through references)."
},
{
 "id": "D3-018",
 "dom": 3,
 "type": "single",
 "stem": "<p>An ARM template must create 5 identical storage accounts, named from an index.</p><p>Which element should you use?</p>",
 "opts": [
  "A different parameter file per account",
  "copy, with copyIndex() in the name",
  "condition",
  "dependsOn"
 ],
 "ans": 1,
 "expl": "<p>The <b>copy</b> element (with <code>count</code>) creates several instances of a resource; <b>copyIndex()</b> gives the iteration's index, usable in the name. In Bicep, you write a loop <code>[for i in range(0, 5): {...}]</code>.</p><p>condition decides whether to deploy a resource. Several parameter files would require several deployments.</p>",
 "portal": {
  "path": [
   "Custom deployment",
   "Edit template"
  ],
  "title": "Storage account resource",
  "rows": [
   [
    "*copy",
    "{ name: 'loop', count: 5 }"
   ],
   [
    "name",
    "concat('st', copyIndex())"
   ]
  ]
 },
 "keep": "N instances = copy + copyIndex() (for loop in Bicep)."
},
{
 "id": "D3-019",
 "dom": 3,
 "type": "single",
 "stem": "<p>You created a VM with its network by hand in the portal. You want an ARM template that describes it, to recreate it identically elsewhere.</p><p>What should you do?</p>",
 "opts": [
  "Use Azure Advisor",
  "Open the activity log",
  "Use Export template on the VM or on the resource group",
  "Create an image of the VM"
 ],
 "ans": 2,
 "expl": "<p><b>Export template</b> generates an ARM template (and offers a Bicep version) from existing resources, or from a deployment's history. The template often needs cleaning up and parameterizing before reuse.</p><p>An image captures the disk, not the Azure configuration (network, size…).</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Export template",
  "menu": [
   "Deployments",
   "*Export template"
  ],
  "rows": [
   [
    "Format",
    "ARM JSON · Bicep"
   ],
   [
    "*Include parameters",
    "Checked"
   ]
  ],
  "btn": "Download"
 },
 "keep": "Template from existing resources = Export template."
},
{
 "id": "D3-020",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to deploy the file main.bicep to the resource group RG1, with the parameter file prod.bicepparam, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az deployment {0} create --resource-group RG1 {1} main.bicep --parameters prod.bicepparam",
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
 "keep": "Scopes: group, sub, mg, tenant. Local file = --template-file."
},
{
 "id": "D3-021",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to deploy template.json to RG2 with Azure PowerShell, in Complete mode.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0} -ResourceGroupName RG2 -TemplateFile template.json -Mode {1}",
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
 "keep": "Deploying to a group in PowerShell = New-AzResourceGroupDeployment (-Mode Incremental|Complete)."
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
 "id": "D3-023",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to convert an existing ARM JSON template to a Bicep file to maintain it more easily.</p><p>Which command should you use?</p>",
 "opts": [
  "az bicep publish",
  "az bicep build --file template.json",
  "az deployment group export",
  "az bicep decompile --file template.json"
 ],
 "ans": 3,
 "expl": "<p><b>decompile</b> converts ARM JSON to Bicep (sometimes with warnings to fix). <b>build</b> does the reverse: it compiles a Bicep file to ARM JSON. <b>publish</b> publishes a module to a registry.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az bicep decompile --file template.json",
    "Generates template.bicep"
   ]
  ]
 },
 "keep": "JSON to Bicep = decompile."
},
{
 "id": "D3-024",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want to reuse the definition of a standard virtual network in several Bicep files.</p><p>What should you create?</p>",
 "opts": [
  "A Bicep module, called with the module keyword",
  "A global variable",
  "A resource lock",
  "An output in each file"
 ],
 "ans": 0,
 "expl": "<p>A <b>module</b> is a reusable Bicep file, called from another file with <code>module vnet './vnet.bicep' = { name: ..., params: {...} }</code>. You can store it locally, in a Bicep registry, or as a Template Spec.</p>",
 "portal": {
  "path": [
   "VS Code",
   "main.bicep"
  ],
  "title": "main.bicep",
  "rows": [
   [
    "*module vnet './vnet.bicep'",
    "{ name: 'vnet', params: { … } }"
   ]
  ]
 },
 "keep": "Reusing Bicep = module."
},
{
 "id": "D3-025",
 "dom": 3,
 "type": "single",
 "stem": "<p>A Bicep file must add a subnet to an <b>already existing</b> virtual network named VNet1, without redeploying it.</p><p>How should you reference VNet1?</p>",
 "opts": [
  "param vnet object",
  "resource vnet 'Microsoft.Network/virtualNetworks@2023-04-01' existing = { name: 'VNet1' }",
  "output vnet string",
  "module vnet './vnet.bicep'"
 ],
 "ans": 1,
 "expl": "<p>The <b>existing</b> keyword declares a resource that already exists: you can read its properties and use it as a parent (<code>parent: vnet</code>) without redeploying it.</p><p>An object parameter doesn't reference a resource. A module would redeploy the network. An output returns a value.</p>",
 "portal": {
  "path": [
   "VS Code",
   "subnet.bicep"
  ],
  "title": "subnet.bicep",
  "rows": [
   [
    "*resource vnet … existing",
    "{ name: 'VNet1' }"
   ],
   [
    "Subnet",
    "parent: vnet"
   ]
  ]
 },
 "keep": "Reference without redeploying = existing."
},
{
 "id": "D3-026",
 "dom": 3,
 "type": "single",
 "stem": "<p>Your team wants to share a validated ARM template with other teams, with versions, and control who can deploy it with Azure access control.</p><p>What should you use?</p>",
 "opts": [
  "Azure Advisor",
  "An email with the JSON file",
  "A Template Spec",
  "A public storage account"
 ],
 "ans": 2,
 "expl": "<p>A <b>Template Spec</b> is an Azure resource that stores a template (JSON or Bicep) with <b>versions</b>. You grant access with a role (for example Reader) and deploy directly from the Template Spec.</p>",
 "portal": {
  "path": [
   "Template specs"
  ],
  "title": "vm-baseline | Versions",
  "menu": [
   "Overview",
   "*Versions",
   "Access control (IAM)"
  ],
  "rows": [
   [
    "*1.0",
    "Published"
   ],
   [
    "1.1",
    "Published"
   ]
  ],
  "btn": "Deploy"
 },
 "keep": "Sharing a versioned template with RBAC = Template Spec."
},
{
 "id": "D3-027",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to resize VM1 from Standard_D2s_v5 to Standard_E8s_v5. The new size doesn't appear in the list of available sizes while the VM is running.</p><p>What should you do?</p>",
 "opts": [
  "Delete and recreate VM1",
  "Add a data disk",
  "Move VM1 to another resource group",
  "Stop (deallocate) VM1, then choose the new size"
 ],
 "ans": 3,
 "expl": "<p>A running VM can only take a size available on the <b>hardware cluster</b> it runs on. Once <b>stopped and deallocated</b>, it can be placed on another cluster: all sizes available in the region appear.</p><p>A resize always restarts the VM, even without deallocation.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Size",
  "menu": [
   "Overview",
   "*Size"
  ],
  "rows": [
   [
    "Current size",
    "Standard_D2s_v5"
   ],
   [
    "*E8s_v5",
    "Visible after stopping (deallocating)"
   ]
  ],
  "btn": "Resize"
 },
 "keep": "Size missing from the list = deallocate the VM to see all sizes in the region."
},
{
 "id": "D3-028",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate VM size family for each workload.</p><p>To answer, drag the appropriate family to each workload. Each family may be used once, more than once, or not at all.</p>",
 "srcLabel": "Families",
 "srcs": [
  "B-series",
  "D-series",
  "E-series",
  "F-series",
  "N-series"
 ],
 "tgtHead": [
  "Workload",
  "Family"
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
 "id": "D3-029",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy three VMs in an <b>availability set</b> with 3 fault domains and 5 update domains.</p><p>What does the availability set protect against?</p>",
 "opts": [
  "A hardware failure of a rack and planned host maintenance",
  "Accidental deletion of a VM",
  "The failure of an entire region",
  "The failure of an entire datacenter"
 ],
 "ans": 0,
 "expl": "<p><b>Fault domains</b> place VMs on different racks (separate power and network). <b>Update domains</b> keep all VMs from restarting at the same time during maintenance. SLA: 99.95%.</p><p>An availability set stays in <b>a single datacenter</b>. Against a datacenter failure, you use <b>availability zones</b> (99.99% SLA); against a region failure, another region.</p>",
 "portal": {
  "path": [
   "Availability sets",
   "AS1"
  ],
  "title": "AS1 | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Fault domains",
    "3 (racks)"
   ],
   [
    "*Update domains",
    "5 (maintenance)"
   ],
   [
    "Scope",
    "1 datacenter"
   ]
  ]
 },
 "keep": "Availability set = racks + maintenance, within 1 datacenter (99.95%)."
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
 "id": "D3-031",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to add the existing VM VM5 to an existing availability set, AS1.</p><p>What should you do?</p>",
 "opts": [
  "Move VM5 to AS1's resource group",
  "Recreate VM5 in AS1 (from its disks)",
  "Change VM5's Availability set property",
  "Resize VM5"
 ],
 "ans": 1,
 "expl": "<p>The availability set is chosen <b>when the VM is created</b>. To add an existing VM, you must <b>recreate</b> it in the set, for example by deleting the VM while keeping its disks, then creating a new VM that reuses them.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Create a virtual machine",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*Availability options",
    "Availability set: AS1"
   ],
   [
    "Disk",
    "Attach VM5's existing disk"
   ]
  ]
 },
 "keep": "Availability set = chosen at creation; otherwise recreate the VM."
},
{
 "id": "D3-032",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to indicate the connectivity SLA of each virtual machine configuration.</p><p>To answer, drag the appropriate SLA to each configuration. Each SLA may be used once, more than once, or not at all.</p>",
 "srcLabel": "SLA",
 "srcs": [
  "99.9%",
  "99.95%",
  "99.99%",
  "No SLA"
 ],
 "tgtHead": [
  "Configuration",
  "SLA"
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
 "id": "D3-033",
 "dom": 3,
 "type": "single",
 "stem": "<p>An application runs on two VMs in the France Central region. It must stay available if an entire datacenter in the region fails.</p><p>What should you do?</p>",
 "opts": [
  "Place the VMs in an availability set",
  "Use Premium SSD disks",
  "Deploy the VMs in two different availability zones",
  "Place the VMs in a proximity placement group"
 ],
 "ans": 2,
 "expl": "<p><b>Availability zones</b> are physically separate datacenters within a region, with independent power, cooling, and network. Two VMs in two zones survive the loss of a zone.</p><p>An availability set stays in a single datacenter. Premium disks improve a single VM's SLA. A proximity placement group brings VMs closer, the opposite of the need.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Create a virtual machine",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*Availability options",
    "Availability zone"
   ],
   [
    "Zones",
    "1, 2"
   ]
  ]
 },
 "keep": "Datacenter failure = availability zones."
},
{
 "id": "D3-034",
 "dom": 3,
 "type": "single",
 "stem": "<p>You create a virtual machine scale set (VMSS) VMSS1 with autoscale. You want at least 2 instances at all times, never more than 10, and 3 at startup.</p><p>Which settings should you configure?</p>",
 "opts": [
  "Minimum 3, Maximum 10, Default 2",
  "Minimum 2, Maximum 3, Default 10",
  "Minimum 0, Maximum 10, Default 3",
  "Minimum 2, Maximum 10, Default 3"
 ],
 "ans": 3,
 "expl": "<p>An autoscale profile's instance limits are: <b>Minimum</b> (never below), <b>Maximum</b> (never above), and <b>Default</b> (used if metrics can't be read).</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Scaling",
  "menu": [
   "*Scaling"
  ],
  "rows": [
   [
    "*Minimum",
    "2"
   ],
   [
    "*Maximum",
    "10"
   ],
   [
    "*Default",
    "3"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Minimum, Maximum, Default (if metrics are missing)."
},
{
 "id": "D3-035",
 "dom": 3,
 "type": "single",
 "stem": "<p>VMSS1 has a rule: “If average CPU exceeds 75% for 10 minutes, add 2 instances”, with a cool down of 5 minutes. CPU stays at 90% for an hour.</p><p>Why aren't instances added every minute?</p>",
 "opts": [
  "The cool down prevents a new action for 5 minutes after each scale action",
  "VMSS support only one action per hour",
  "The scale-in rule cancels the scale-out",
  "The default count is reached"
 ],
 "ans": 0,
 "expl": "<p>The <b>cool down</b> gives new instances time to start and metrics time to settle before a new evaluation. During this delay, no other scale action happens. The maximum instance count also limits scale-out.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "Scale rule",
  "rows": [
   [
    "Increase count by",
    "2"
   ],
   [
    "*Cool down (minutes)",
    "5"
   ]
  ],
  "btn": "Update"
 },
 "keep": "Cool down = pause after each scale action."
},
{
 "id": "D3-036",
 "dom": 3,
 "type": "single",
 "stem": "<p>VMSS1 has a single scale rule: add one instance when CPU exceeds 70%. After a load spike, the number of instances never goes back down.</p><p>What should you add?</p>",
 "opts": [
  "A longer cool down",
  "A scale-in rule, for example remove one instance when CPU is below 30%",
  "A lower maximum instance count",
  "A health probe"
 ],
 "ans": 1,
 "expl": "<p>Autoscale only removes instances if a <b>scale-in rule</b> exists. Best practice: always pair a scale-out rule with a scale-in rule, with enough of a gap between thresholds (for example 70% and 30%) to avoid flapping.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Scaling",
  "menu": [
   "*Scaling"
  ],
  "rows": [
   [
    "Scale out",
    "CPU > 70% → +1"
   ],
   [
    "*Scale in",
    "CPU < 30% → −1"
   ]
  ],
  "btn": "+ Add a rule"
 },
 "keep": "Always a scale-out rule AND a scale-in rule."
},
{
 "id": "D3-037",
 "dom": 3,
 "type": "single",
 "stem": "<p>VMSS2's instances must receive new image versions in batches, waiting for each batch to be healthy before moving to the next.</p><p>Which upgrade policy should you choose?</p>",
 "opts": [
  "Manual",
  "None",
  "Rolling",
  "Automatic"
 ],
 "ans": 2,
 "expl": "<p>The <b>Rolling</b> policy updates instances in batches, with a pause and a health check (probe or application health extension) between batches.</p><ul><li><b>Manual</b>: nothing is updated until you upgrade each instance.</li><li><b>Automatic</b>: all instances can be updated at the same time, in any order.</li></ul>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS2"
  ],
  "title": "VMSS2 | Upgrade policy",
  "menu": [
   "*Upgrade policy"
  ],
  "rows": [
   [
    "*Mode",
    "Rolling"
   ],
   [
    "Batch size",
    "20%"
   ],
   [
    "Pause between batches",
    "PT5S"
   ]
  ],
  "btn": "Save"
 },
 "keep": "In batches, with a health check = Rolling."
},
{
 "id": "D3-038",
 "dom": 3,
 "type": "single",
 "stem": "<p>You create a virtual machine scale set and want to mix different VM sizes, and add individually managed VMs.</p><p>Which orchestration mode should you choose?</p>",
 "opts": [
  "Availability set",
  "Uniform",
  "Classic",
  "Flexible"
 ],
 "ans": 3,
 "expl": "<p><b>Flexible</b> orchestration manages standard VMs (with their own resources), allows different sizes, and spreads across zones and fault domains. It's the recommended mode for new workloads.</p><p><b>Uniform</b> mode uses a single model: all instances are identical.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "Create"
  ],
  "title": "Create a scale set",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*Orchestration mode",
    "Flexible"
   ],
   [
    "Uniform",
    "All instances identical"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Mixed sizes, standard VMs = Flexible orchestration."
},
{
 "id": "D3-039",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to run a PowerShell script on 50 existing Windows VMs, right after they are deployed, to install IIS and copy files from a storage account.</p><p>What should you use?</p>",
 "opts": [
  "The Custom Script extension",
  "An availability set",
  "Boot diagnostics",
  "The serial console"
 ],
 "ans": 0,
 "expl": "<p>The <b>Custom Script extension</b> downloads and runs a script (from a storage account or GitHub) in the VM. It's deployed through the portal, PowerShell, CLI, or a template, and suits post-deployment configuration.</p><p>Boot diagnostics capture the boot screen. The serial console gives text access during a failure. An availability set configures nothing.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Extensions + applications",
  "menu": [
   "*Extensions + applications"
  ],
  "rows": [
   [
    "*Custom Script Extension",
    "install-iis.ps1 (storage account)"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Script after deployment = Custom Script extension."
},
{
 "id": "D3-040",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to configure Linux VMs automatically at <b>first boot</b> (install packages, create users), with a file passed when the VM is created.</p><p>What should you use?</p>",
 "opts": [
  "Run command",
  "cloud-init, through custom data",
  "Azure Advisor",
  "The VMAccess extension"
 ],
 "ans": 1,
 "expl": "<p><b>cloud-init</b> is the standard first-boot configuration tool for Linux distributions. You pass the cloud-config file in the <b>custom data</b> when creating the VM.</p><p>VMAccess is for resetting access (password, SSH key). Run command runs a one-off script on an existing VM.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Create a virtual machine",
  "menu": [
   "Basics",
   "*Advanced"
  ],
  "rows": [
   [
    "*Custom data",
    "#cloud-config …"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Linux configuration at first boot = cloud-init (custom data)."
},
{
 "id": "D3-041",
 "dom": 3,
 "type": "single",
 "stem": "<p>An administrator forgot the password of the local administrator account on VM6 (Windows). VM6 isn't joined to a domain.</p><p>What should you do?</p>",
 "opts": [
  "Restore VM6 from the latest backup",
  "Redeploy VM6",
  "Use “Reset password” in the portal",
  "Create a snapshot of the OS disk"
 ],
 "ans": 2,
 "expl": "<p><b>Reset password</b> (Help > Reset password) uses the <b>VMAccess</b> extension to set a new password, or reset the RDP configuration. For Linux, it can also reset an SSH key.</p><p>Redeploy moves the VM to another host. Restoring a backup is needlessly heavy. A snapshot doesn't change the password.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM6"
  ],
  "title": "VM6 | Reset password",
  "menu": [
   "*Reset password"
  ],
  "rows": [
   [
    "*Mode",
    "Reset password"
   ],
   [
    "Username",
    "localadmin"
   ]
  ],
  "btn": "Update"
 },
 "keep": "Forgotten local password = Reset password (VMAccess)."
},
{
 "id": "D3-042",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM7 no longer responds over RDP. You want to see a screenshot of the VM to know whether Windows is stuck at boot.</p><p>What should you use?</p>",
 "opts": [
  "Azure Advisor",
  "The activity log",
  "Network Watcher IP flow verify",
  "Boot diagnostics (screenshot)"
 ],
 "ans": 3,
 "expl": "<p><b>Boot diagnostics</b> keep a screenshot (and, for Linux, the console log). You see for example a blue screen, an update in progress, or a disk check prompt.</p><p>IP flow verify tests network rules. The activity log records Azure operations, not the OS state.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM7"
  ],
  "title": "VM7 | Boot diagnostics",
  "menu": [
   "*Boot diagnostics"
  ],
  "rows": [
   [
    "*Screenshot",
    "Windows boot screen"
   ],
   [
    "Serial log",
    "Linux"
   ]
  ]
 },
 "keep": "Seeing the boot screen = boot diagnostics."
},
{
 "id": "D3-043",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM8 has repeated problems related to the physical host it runs on. You want to migrate it to a new host, without changing its configuration.</p><p>What should you do?</p>",
 "opts": [
  "Redeploy VM8",
  "Resize VM8",
  "Reapply VM8's state",
  "Reset the password"
 ],
 "ans": 0,
 "expl": "<p><b>Redeploy</b> stops the VM, moves it to a new node in the infrastructure, then restarts it. Note: data on the <b>temporary disk</b> is lost and a dynamic public IP address may change.</p><p><b>Reapply</b> reruns the VM's provisioning without changing host: useful when the VM is in a failed state.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM8"
  ],
  "title": "VM8 | Redeploy + reapply",
  "menu": [
   "*Redeploy + reapply"
  ],
  "rows": [
   [
    "*Redeploy",
    "New host (temporary disk lost)"
   ],
   [
    "Reapply",
    "Same host"
   ]
  ],
  "btn": "Redeploy"
 },
 "keep": "New host = Redeploy; failed state = Reapply."
},
{
 "id": "D3-044",
 "dom": 3,
 "type": "single",
 "stem": "<p>An application stores cache files on the <b>D:</b> drive (temporary disk) of VM9, running Windows. After maintenance, the files are gone.</p><p>Why?</p>",
 "opts": [
  "The backup overwrote the disk",
  "The temporary disk isn't persistent: its content can be lost during maintenance, redeployment, or deallocation",
  "The D: drive is encrypted",
  "The D: drive is a Premium data disk"
 ],
 "ans": 1,
 "expl": "<p>The <b>temporary disk</b> is stored on the physical host. Its content is lost if the VM changes host (maintenance, redeployment, stop with deallocation, resize). It's fine for the page file or a rebuildable cache, never for data to keep.</p><p>For persistent data, use a <b>managed data disk</b>.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM9"
  ],
  "title": "VM9 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*Temporary disk (D:)",
    "Not persistent"
   ],
   [
    "Data disks",
    "Persistent"
   ]
  ]
 },
 "keep": "Temporary disk = never for data to keep."
},
{
 "id": "D3-045",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate managed disk type for each need, at the lowest cost.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Disk types",
 "srcs": [
  "Standard HDD",
  "Standard SSD",
  "Premium SSD",
  "Ultra Disk"
 ],
 "tgtHead": [
  "Need",
  "Disk type"
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
 "id": "D3-046",
 "dom": 3,
 "type": "single",
 "stem": "<p>The 256 GiB data disk of VM10 is full. You need to expand it to 512 GiB.</p><p>Which statement is true?</p>",
 "opts": [
  "A managed disk's size can never change",
  "You must create a new disk and copy the data",
  "You can increase the size in Azure, then extend the volume in the operating system",
  "You can shrink then grow the size freely"
 ],
 "ans": 2,
 "expl": "<p>You can <b>increase</b> a managed disk's size (often without stopping the VM for data disks, depending on type and size). You must then <b>extend the volume</b> in the OS (Disk Management or diskpart on Windows, growpart and resize2fs on Linux).</p><p>You can <b>never shrink</b> a managed disk.</p>",
 "portal": {
  "path": [
   "Disks",
   "VM10-data"
  ],
  "title": "VM10-data | Size + performance",
  "menu": [
   "*Size + performance"
  ],
  "rows": [
   [
    "*Size",
    "256 → 512 GiB"
   ],
   [
    "Then",
    "Extend the volume in the OS"
   ]
  ],
  "btn": "Resize"
 },
 "keep": "Disk: grow yes, shrink never; then extend the volume."
},
{
 "id": "D3-047",
 "dom": 3,
 "type": "single",
 "stem": "<p>A SQL Server database on VM11 uses one data disk for its data files, which are mostly read, and another for its transaction logs, which are mostly written.</p><p>Which host caching settings does Microsoft recommend?</p>",
 "opts": [
  "Read/write for data, Read-only for logs",
  "Read/write for both",
  "None for data, Read-only for logs",
  "Read-only for data, None for logs"
 ],
 "ans": 3,
 "expl": "<p><b>Read-only</b> caching speeds up repeated reads: ideal for data files. For logs, written sequentially, choose <b>None</b>. <b>Read/write</b> caching risks losing writes in a failure if the application doesn't manage cache flushing; it's reserved for the OS disk.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM11"
  ],
  "title": "VM11 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*SQL data",
    "Host caching: Read-only"
   ],
   [
    "*SQL logs",
    "Host caching: None"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Data = Read-only; logs = None; OS = Read/write."
},
{
 "id": "D3-048",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to back up VM12's OS disk once, before a risky update, quickly and cheaply.</p><p>What should you create?</p>",
 "opts": [
  "An incremental snapshot of the disk",
  "An Azure Compute Gallery",
  "An availability set",
  "A generalized managed image"
 ],
 "ans": 0,
 "expl": "<p>A <b>snapshot</b> is a point-in-time copy of a managed disk. An <b>incremental</b> snapshot bills only the changes since the previous one. You can create a new disk from the snapshot if the update fails.</p><p>A generalized image is for creating new VMs (with Sysprep, which makes the original VM unusable). A gallery is for sharing images.</p>",
 "portal": {
  "path": [
   "Disks",
   "VM12-osdisk"
  ],
  "title": "Create snapshot",
  "rows": [
   [
    "*Snapshot type",
    "Incremental"
   ],
   [
    "Source",
    "VM12-osdisk"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Quick restore point for a disk = incremental snapshot."
},
{
 "id": "D3-049",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to create a custom Windows image from VM13, then share it with several subscriptions and regions, with versions.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 ],
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
 "keep": "Shared image: Sysprep, gallery, definition, replicated version."
},
{
 "id": "D3-050",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to encrypt VM14's OS and data volumes (Windows) with BitLocker, keeping the keys in a key vault.</p><p>What should you use?</p>",
 "opts": [
  "A SAS",
  "Azure Disk Encryption",
  "Storage Service Encryption of a storage account",
  "Server-side encryption with platform-managed keys only"
 ],
 "ans": 1,
 "expl": "<p><b>Azure Disk Encryption</b> (ADE) encrypts volumes <b>inside the VM</b> with BitLocker (Windows) or DM-Crypt (Linux). Keys are stored in a <b>key vault</b>, which must have the “Azure Disk Encryption for volume encryption” option and be in the same region.</p><p>Server-side encryption (SSE) encrypts disks at the storage level, without BitLocker. Microsoft now recommends <b>encryption at host</b> instead for new VMs, as ADE is being retired.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM14"
  ],
  "title": "VM14 | Disks › Additional encryption",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*Azure Disk Encryption",
    "OS and data disks"
   ],
   [
    "Key vault",
    "KV-ADE"
   ]
  ],
  "btn": "Save"
 },
 "keep": "BitLocker/DM-Crypt inside the VM = Azure Disk Encryption."
},
{
 "id": "D3-051",
 "dom": 3,
 "type": "single",
 "stem": "<p>A standard requires that VM15's temporary disk and disk caches be encrypted end to end, with no agent in the VM.</p><p>What should you enable?</p>",
 "opts": [
  "Infrastructure encryption on a storage account",
  "Azure Disk Encryption",
  "Encryption at host",
  "Secure transfer required"
 ],
 "ans": 2,
 "expl": "<p><b>Encryption at host</b> encrypts data on the physical host: temporary disk, disk caches, and flows to storage. It uses no agent in the VM. You must first register the EncryptionAtHost feature on the subscription.</p><p>Azure Disk Encryption encrypts inside the VM with BitLocker or DM-Crypt. The other two options concern storage accounts.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM15"
  ],
  "title": "VM15 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*Encryption at host",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Temporary disk + caches with no agent = encryption at host."
},
{
 "id": "D3-052",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to encrypt the managed disks of several VMs with your own keys, stored in Key Vault, at the storage service level.</p><p>Which resource should you create and associate with the disks?</p>",
 "opts": [
  "A Template Spec",
  "An Azure Compute Gallery",
  "A proximity placement group",
  "A Disk Encryption Set"
 ],
 "ans": 3,
 "expl": "<p>A <b>Disk Encryption Set</b> references a Key Vault key and has a managed identity to use it. You associate it with managed disks for server-side encryption with <b>customer-managed keys</b>.</p>",
 "portal": {
  "path": [
   "Disk Encryption Sets",
   "Create"
  ],
  "title": "Create a disk encryption set",
  "rows": [
   [
    "*Encryption type",
    "Encryption at-rest with a customer-managed key"
   ],
   [
    "Key",
    "KV / disks-key"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Managed disks + customer key = Disk Encryption Set."
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
 "id": "D3-054",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want to attach a Premium SSD disk to VM18, of size Standard_D2_v4. The option isn't available.</p><p>Why?</p>",
 "opts": [
  "The D2_v4 size doesn't support Premium storage: you need a size with “s”, such as D2s_v4",
  "VM18 must run Linux",
  "Premium disks require an availability set",
  "Premium disks are only available in zones"
 ],
 "ans": 0,
 "expl": "<p>Premium storage can only be used with sizes that support it, shown by the letter <b>s</b> in their name (Ds, Es, Fs…). You must resize VM18 to D2<b>s</b>_v4 or another compatible size.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM18"
  ],
  "title": "VM18 | Size",
  "menu": [
   "*Size"
  ],
  "rows": [
   [
    "Current size",
    "D2_v4 (no Premium)"
   ],
   [
    "*Target",
    "D2s_v4"
   ]
  ],
  "btn": "Resize"
 },
 "keep": "“s” in the name = Premium storage possible."
},
{
 "id": "D3-055",
 "dom": 3,
 "type": "single",
 "stem": "<p>Two VMs in a Windows failover cluster must access the same managed disk at the same time.</p><p>Which feature should you use?</p>",
 "opts": [
  "A Premium Azure Files share",
  "Shared disks (maxShares greater than 1)",
  "A disk snapshot",
  "The temporary disk"
 ],
 "ans": 1,
 "expl": "<p><b>Shared disks</b> let you attach a managed disk (Premium SSD, Premium SSD v2, or Ultra) to several VMs at once, up to a maximum set by <b>maxShares</b>. The application (failover cluster, SCSI PR) manages concurrent access.</p><p>Azure Files is an SMB alternative, but it isn't a shared disk.</p>",
 "portal": {
  "path": [
   "Disks",
   "cluster-disk"
  ],
  "title": "cluster-disk | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Enable shared disk",
    "Yes"
   ],
   [
    "Max shares",
    "2"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Disk attached to several VMs = shared disk (maxShares)."
},
{
 "id": "D3-056",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to move VM19 from France Central to West Europe, with its disks and network configuration.</p><p>What should you use?</p>",
 "opts": [
  "The Redeploy option",
  "The Move to another resource group option",
  "Azure Resource Mover (or Azure Site Recovery)",
  "Changing the region in Properties"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Resource Mover</b> moves resources (VMs, disks, networks, IP addresses, load balancers…) to another region, handling dependencies. It relies on Azure Site Recovery to replicate VMs.</p><p>Moving to another resource group or subscription doesn't change the region. Redeploy changes host within the same region.</p>",
 "portal": {
  "path": [
   "Azure Resource Mover"
  ],
  "title": "Move across regions",
  "rows": [
   [
    "Source",
    "France Central"
   ],
   [
    "*Destination",
    "West Europe"
   ],
   [
    "Resources",
    "VM19, disks, network"
   ]
  ],
  "btn": "Next"
 },
 "keep": "Changing region = Resource Mover (or Site Recovery)."
},
{
 "id": "D3-057",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM20 is in Subnet1 of VNet1. You need to move it to Subnet2 of the same virtual network.</p><p>What should you do?</p>",
 "opts": [
  "Move the VM to another resource group",
  "Recreate the VM",
  "Create a peering between Subnet1 and Subnet2",
  "Change the network interface's IP configuration to choose Subnet2 (the VM restarts)"
 ],
 "ans": 3,
 "expl": "<p>Within the same virtual network, you can change the <b>subnet</b> of the network interface's IP configuration. The VM restarts and gets a new private IP address.</p><p>To change <b>virtual network</b>, however, you must recreate the VM (or use Resource Mover). Subnets aren't peered.</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm20-nic"
  ],
  "title": "vm20-nic | IP configurations",
  "menu": [
   "*IP configurations"
  ],
  "rows": [
   [
    "*Subnet",
    "Subnet1 → Subnet2"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Changing subnet = possible; changing VNet = recreate."
},
{
 "id": "D3-058",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to run a one-off script in VM21 to diagnose a network problem. RDP doesn't work, but the VM agent is operational.</p><p>What should you use?</p>",
 "opts": [
  "Run command",
  "A new DSC extension",
  "Boot diagnostics",
  "A snapshot"
 ],
 "ans": 0,
 "expl": "<p><b>Run command</b> runs a PowerShell or shell script in the VM through the VM agent, with no network connection to the VM. Ideal for diagnosing or fixing when RDP or SSH no longer works.</p><p>Boot diagnostics show the screen. DSC is for lasting desired state configuration. A snapshot copies a disk.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM21"
  ],
  "title": "VM21 | Run command",
  "menu": [
   "*Run command"
  ],
  "rows": [
   [
    "*RunPowerShellScript",
    "Test-NetConnection …"
   ]
  ],
  "btn": "Run"
 },
 "keep": "Script with no network, through the agent = Run command."
},
{
 "id": "D3-059",
 "dom": 3,
 "type": "single",
 "stem": "<p>The Linux VM VM22 no longer boots because of an error in /etc/fstab. You need to connect to the system to fix the file, with no network connection to the VM.</p><p>What should you use?</p>",
 "opts": [
  "Azure Bastion",
  "The serial console",
  "SSH through the public IP address",
  "The activity log"
 ],
 "ans": 1,
 "expl": "<p>The <b>serial console</b> gives text access to the VM's console (COM1 or ttyS0), even if the network or boot is broken. It requires boot diagnostics to be enabled and a local account with a password.</p><p>Bastion and SSH go through the network, unavailable as long as the system doesn't boot.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM22"
  ],
  "title": "VM22 | Serial console",
  "menu": [
   "*Serial console"
  ],
  "rows": [
   [
    "Prerequisites",
    "Boot diagnostics + local account with a password"
   ]
  ]
 },
 "keep": "OS that won't boot, no network = serial console."
},
{
 "id": "D3-060",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy batch computations that can be interrupted and resumed. You want to minimize cost, accepting that Azure may reclaim the VMs at any time.</p><p>Which option should you choose?</p>",
 "opts": [
  "VMs with a 3-year reservation",
  "Dedicated hosts",
  "Spot VMs with the Deallocate or Delete eviction policy",
  "B-series VMs"
 ],
 "ans": 2,
 "expl": "<p><b>Spot VMs</b> use Azure's unused capacity at a large discount. Azure can <b>evict</b> them with 30 seconds' notice when it needs the capacity or the price exceeds your maximum. The eviction policy chooses Deallocate (disks kept) or Delete.</p><p>A 3-year reservation commits to a continuous workload. Dedicated hosts cost more.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Create a virtual machine",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*Run with Azure Spot discount",
    "Checked"
   ],
   [
    "Eviction policy",
    "Deallocate"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Interruptible and very cheap = Spot."
},
{
 "id": "D3-061",
 "dom": 3,
 "type": "single",
 "stem": "<p>For compliance reasons, your VMs must not share their physical server with any other Azure customer.</p><p>What should you use?</p>",
 "opts": [
  "An availability set",
  "Spot VMs",
  "A proximity placement group",
  "Azure Dedicated Host"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Dedicated Host</b> provides physical servers reserved for your subscription: you choose the VMs that run on them, and you control maintenance.</p><p>The other options don't guarantee physical isolation.</p>",
 "portal": {
  "path": [
   "Dedicated hosts",
   "Create"
  ],
  "title": "Create a dedicated host",
  "rows": [
   [
    "*Host group",
    "HG1"
   ],
   [
    "Family",
    "Dsv5-Type1"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Reserved physical server = Dedicated Host."
},
{
 "id": "D3-062",
 "dom": 3,
 "type": "single",
 "stem": "<p>The VMs of a high-performance computing application must have the lowest possible network latency between them.</p><p>What should you use?</p>",
 "opts": [
  "A proximity placement group",
  "Different availability zones",
  "An availability set with 3 fault domains",
  "Different regions"
 ],
 "ans": 0,
 "expl": "<p>A <b>proximity placement group</b> places VMs physically close together in the same datacenter, which reduces latency. <b>Accelerated networking</b> also reduces latency.</p><p>Spreading across several zones or regions increases latency.</p>",
 "portal": {
  "path": [
   "Proximity placement groups",
   "Create"
  ],
  "title": "Create a proximity placement group",
  "rows": [
   [
    "*Name",
    "ppg-hpc"
   ],
   [
    "Region",
    "France Central"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Minimal latency between VMs = proximity placement group."
},
{
 "id": "D3-063",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to reduce the latency and CPU load of network traffic on a VM that does a lot of network exchanges.</p><p>Which network interface option should you enable?</p>",
 "opts": [
  "IP forwarding",
  "Accelerated networking",
  "A network security group",
  "A static public IP address"
 ],
 "ans": 1,
 "expl": "<p><b>Accelerated networking</b> (SR-IOV) routes traffic directly through the physical card, bypassing the host's virtual switch: lower latency, higher throughput, less CPU load. It depends on the VM size.</p><p>IP forwarding is for appliances that route traffic. The other two options don't improve performance.</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm-nic"
  ],
  "title": "vm-nic | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Accelerated networking",
    "Enabled"
   ]
  ]
 },
 "keep": "Faster network and less CPU = accelerated networking."
},
{
 "id": "D3-064",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to stop VM23 so you no longer pay for compute over the weekend. It must keep its disks.</p><p>What should you do?</p>",
 "opts": [
  "Restart the VM",
  "Shut it down from Windows (Shut down)",
  "Stop it from the portal (Stopped (deallocated) state)",
  "Delete the VM"
 ],
 "ans": 2,
 "expl": "<p>Stopping from the <b>portal</b> (or with <code>az vm deallocate</code>) <b>deallocates</b> the VM: compute is no longer billed, disks remain (and are billed). A dynamic public IP address is released.</p><p>Shutting down from the OS leaves the VM in the <b>Stopped</b> (not deallocated) state: compute keeps being billed.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM23"
  ],
  "title": "VM23 | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Status",
    "Stopped (deallocated)"
   ],
   [
    "Compute",
    "Not billed"
   ]
  ],
  "btn": "Start"
 },
 "keep": "Stop from the portal = deallocate = compute not billed."
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
},
{
 "id": "D3-066",
 "dom": 3,
 "type": "single",
 "stem": "<p>You create a VM and want to use Secure Boot and the vTPM of the Trusted Launch security type.</p><p>Which VM generation should you use?</p>",
 "opts": [
  "None: you need a confidential VM",
  "Both generations",
  "Generation 1",
  "Generation 2"
 ],
 "ans": 3,
 "expl": "<p><b>Trusted Launch</b> (Secure Boot, vTPM, boot integrity monitoring) requires <b>generation 2</b> VMs, which boot with UEFI. Generation 1 VMs use a classic BIOS.</p><p>The security type is chosen when the VM is created.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Create a virtual machine",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*Security type",
    "Trusted launch virtual machines"
   ],
   [
    "Image",
    "Gen 2"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Trusted Launch = generation 2 (UEFI)."
}
);
