/* Domain 3: compute (batch D : D3-122 to D3-176) */
AZ.questions.push(
{
 "id": "D3-122",
 "dom": 3,
 "type": "single",
 "stem": "<p>A Bicep template must create a resource group named RG-App, then deploy a storage account into it.</p><p>Which value should you give <b>targetScope</b> in the main file?</p>",
 "opts": [
  "'subscription'",
  "'managementGroup'",
  "'resourceGroup'",
  "'tenant'"
 ],
 "ans": 0,
 "expl": "<p>A resource group is created at the <b>subscription</b> scope: the main file uses <code>targetScope = 'subscription'</code>, creates the group, then calls a <b>module</b> with <code>scope: rg</code> to deploy the storage account into that group.</p><p>'resourceGroup' is the default value, but a template at that scope can't create its own resource group.</p>",
 "portal": {
  "path": [
   "VS Code",
   "main.bicep"
  ],
  "title": "main.bicep",
  "rows": [
   [
    "*targetScope",
    "'subscription'"
   ],
   [
    "resource rg",
    "Microsoft.Resources/resourceGroups"
   ],
   [
    "module storage",
    "scope: rg"
   ]
  ]
 },
 "keep": "Creating a resource group in Bicep = targetScope 'subscription' + module with scope."
},
{
 "id": "D3-123",
 "dom": 3,
 "type": "single",
 "stem": "<p>In a Bicep file, the <b>env</b> parameter must accept only the values dev, test, and prod.</p><p>Which decorator should you use?</p>",
 "opts": [
  "@description('dev, test, prod')",
  "@allowed(['dev', 'test', 'prod'])",
  "@secure()",
  "@minLength(3)"
 ],
 "ans": 1,
 "expl": "<p><b>@allowed</b> limits a parameter to a list of values: the deployment fails before starting if the value isn't in it.</p><p>@secure masks a sensitive value. @minLength enforces a minimum length. @description documents the parameter without checking anything.</p>",
 "portal": {
  "path": [
   "VS Code",
   "main.bicep"
  ],
  "title": "main.bicep",
  "rows": [
   [
    "*@allowed(['dev','test','prod'])",
    "param env string"
   ]
  ]
 },
 "keep": "List of allowed values = @allowed; secret = @secure."
},
{
 "id": "D3-124",
 "dom": 3,
 "type": "single",
 "stem": "<p>A Bicep file must deploy a public IP address only if the <b>publicAccess</b> parameter is true.</p><p>How should you write the resource?</p>",
 "opts": [
  "resource pip ... = [for i in range(0, publicAccess): { ... }]",
  "resource pip ... existing = { ... }",
  "resource pip 'Microsoft.Network/publicIPAddresses@2023-04-01' = if (publicAccess) { ... }",
  "module pip ... = { dependsOn: [publicAccess] }"
 ],
 "ans": 2,
 "expl": "<p>The <b>if</b> keyword after the equals sign creates a <b>conditional deployment</b> (equivalent to the <code>condition</code> element in ARM JSON). If the condition is false, the resource isn't deployed.</p><p>A loop over a boolean makes no sense. existing references an existing resource. dependsOn orders deployments.</p>",
 "portal": {
  "path": [
   "VS Code",
   "main.bicep"
  ],
  "title": "main.bicep",
  "rows": [
   [
    "*resource pip … = if (publicAccess)",
    "Conditional deployment"
   ]
  ]
 },
 "keep": "Deploy a resource or not = if (Bicep) / condition (JSON)."
},
{
 "id": "D3-125",
 "dom": 3,
 "type": "single",
 "stem": "<p>You review an ARM parameter file. How must the value of the vmSize parameter be written?</p>",
 "opts": [
  "\"vmSize\": { \"defaultValue\": \"Standard_D2s_v5\" }",
  "\"parameters\": { \"vmSize\": \"Standard_D2s_v5\" }",
  "\"variables\": { \"vmSize\": { \"value\": \"Standard_D2s_v5\" } }",
  "\"parameters\": { \"vmSize\": { \"value\": \"Standard_D2s_v5\" } }"
 ],
 "ans": 3,
 "expl": "<p>In a JSON <b>parameter file</b>, each parameter is an object with a <b>value</b> property (or <b>reference</b> for a Key Vault secret), in the <code>parameters</code> section.</p><p><code>defaultValue</code> is written in the <b>template</b>, not the parameter file. A parameter file has no variables section.</p>",
 "portal": {
  "path": [
   "Custom deployment"
  ],
  "title": "azuredeploy.parameters.json",
  "rows": [
   [
    "*parameters.vmSize",
    "{ \"value\": \"Standard_D2s_v5\" }"
   ],
   [
    "Secret",
    "{ \"reference\": { \"keyVault\": … } }"
   ]
  ]
 },
 "keep": "Parameter file: { \"value\": … } or { \"reference\": … }."
},
{
 "id": "D3-126",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You run a what-if operation before a deployment in Incremental mode.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "A resource in the template that doesn't exist yet shows as:",
   "o": [
    "Ignore",
    "Modify",
    "Create"
   ],
   "a": 2
  },
  {
   "l": "A resource in the group that's missing from the template shows as:",
   "o": [
    "Ignore",
    "Delete",
    "NoChange"
   ],
   "a": 0
  },
  {
   "l": "An existing resource with a property that differs from the template shows as:",
   "o": [
    "Deploy",
    "NoChange",
    "Modify"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Create</b>: the resource will be created.</li><li><b>Ignore</b>: in Incremental mode, resources missing from the template aren't touched. (In Complete mode, they would show as <b>Delete</b>.)</li><li><b>Modify</b>: properties will change; what-if details them.</li></ul><p>Other types: NoChange, Deploy (redeployed with no known change).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "what-if",
  "rows": [
   [
    "*+ Create",
    "New resource"
   ],
   [
    "* Ignore",
    "Not in the template (Incremental)"
   ],
   [
    "~ Modify",
    "Property changed"
   ]
  ]
 },
 "keep": "what-if: Create, Modify, Delete (Complete), Ignore (Incremental), NoChange."
},
{
 "id": "D3-127",
 "dom": 3,
 "type": "single",
 "stem": "<p>A resource group has received thousands of deployments. You worry about reaching the deployment history limit.</p><p>What does Azure do?</p>",
 "opts": [
  "It automatically deletes the oldest deployments when the history nears 800 entries",
  "It blocks any new deployment",
  "It deletes the oldest resources",
  "It archives the history to a storage account"
 ],
 "ans": 0,
 "expl": "<p>The history is limited to <b>800 deployments</b> per scope. Azure <b>automatically deletes</b> the oldest ones as you approach the limit (unless a lock prevents it). Resources are never deleted as a result.</p>",
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
    "*History",
    "800 maximum, oldest deleted automatically"
   ]
  ]
 },
 "keep": "Deployment history: 800 per scope, automatic cleanup."
},
{
 "id": "D3-128",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want to deploy a set of resources and prevent them from being deleted or modified outside the template, while managing their lifecycle as a whole.</p><p>What should you use?</p>",
 "opts": [
  "A deployment in Incremental mode",
  "A deployment stack with deny settings",
  "A Template Spec",
  "A lock on each resource"
 ],
 "ans": 1,
 "expl": "<p>A <b>deployment stack</b> manages a set of resources as a unit: it can delete resources removed from the template, and apply <b>deny assignments</b> (DenyDelete or DenyWriteAndDelete) that protect the managed resources.</p><p>A Template Spec stores a template, with no protection. Individual locks are heavier to manage.</p>",
 "portal": {
  "path": [
   "Deployment stacks",
   "stack-app"
  ],
  "title": "stack-app | Settings",
  "rows": [
   [
    "*Deny settings",
    "DenyWriteAndDelete"
   ],
   [
    "Action on unmanaged resources",
    "Delete"
   ]
  ]
 },
 "keep": "Managing and protecting a set = deployment stack (deny assignments)."
},
{
 "id": "D3-129",
 "dom": 3,
 "type": "single",
 "stem": "<p>In an ARM JSON template, you need to get the full identifier of a virtual network named VNet1 in the same resource group.</p><p>Which function should you use?</p>",
 "opts": [
  "reference('VNet1')",
  "uniqueString('VNet1')",
  "resourceId('Microsoft.Network/virtualNetworks', 'VNet1')",
  "concat('VNet1')"
 ],
 "ans": 2,
 "expl": "<p><b>resourceId()</b> builds a resource's full identifier from its type and name (and optionally subscription and group). <b>reference()</b> returns a resource's runtime state (properties). <b>uniqueString()</b> generates a deterministic hash for unique names.</p>",
 "portal": {
  "path": [
   "Custom deployment",
   "Edit template"
  ],
  "title": "Template functions",
  "rows": [
   [
    "*resourceId()",
    "Full ID"
   ],
   [
    "reference()",
    "Runtime properties"
   ],
   [
    "uniqueString()",
    "Deterministic hash"
   ]
  ]
 },
 "keep": "A resource's ID in a template = resourceId()."
},
{
 "id": "D3-130",
 "dom": 3,
 "type": "single",
 "stem": "<p>A virtual machine scale set's scale-in policy must always delete the newest VMs first.</p><p>Which scale-in policy should you choose?</p>",
 "opts": [
  "Default",
  "Manual",
  "OldestVM",
  "NewestVM"
 ],
 "ans": 3,
 "expl": "<p>A VMSS scale-in policy can be <b>Default</b> (balance across zones and fault domains, then delete the highest instance ID), <b>NewestVM</b> (newest first), or <b>OldestVM</b> (oldest first), always keeping balance across zones.</p>",
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
    "*Scale-in policy",
    "NewestVM"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Deletion order on scale-in = Default, NewestVM, or OldestVM."
},
{
 "id": "D3-131",
 "dom": 3,
 "type": "single",
 "stem": "<p>An instance of VMSS3 runs a critical long-running job. It must not be deleted during an automatic scale-in.</p><p>What should you configure?</p>",
 "opts": [
  "Instance scale-in protection",
  "The OldestVM policy",
  "A CanNotDelete lock on VMSS3",
  "A higher minimum instance count"
 ],
 "ans": 0,
 "expl": "<p><b>Scale-in protection</b> applies to a specific instance: autoscale won't delete it. (Protection from scale set actions also protects it from upgrades and reimages.)</p><p>A lock on VMSS3 would block all scale-ins. Raising the minimum doesn't protect a specific instance.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS3",
   "Instances"
  ],
  "title": "VMSS3_4 | Protection policy",
  "rows": [
   [
    "*Protect from scale-in",
    "Checked"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Keeping a specific instance = scale-in protection."
},
{
 "id": "D3-132",
 "dom": 3,
 "type": "single",
 "stem": "<p>VMSS4 instances sometimes suffer an application failure without the VM stopping. You want them replaced automatically.</p><p>What should you configure?</p>",
 "opts": [
  "Overprovisioning",
  "The Application Health extension (or a load balancer probe) and automatic instance repairs",
  "The cool down",
  "The Manual upgrade policy"
 ],
 "ans": 1,
 "expl": "<p><b>Automatic instance repairs</b> replace instances reported unhealthy by the <b>Application Health extension</b> or a load balancer probe, after a grace period.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS4"
  ],
  "title": "VMSS4 | Health and repair",
  "menu": [
   "*Health and repair"
  ],
  "rows": [
   [
    "*Application health monitoring",
    "Enabled"
   ],
   [
    "*Automatic repairs",
    "Enabled · 30-min grace period"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Replacing unhealthy instances = health extension + automatic repairs."
},
{
 "id": "D3-133",
 "dom": 3,
 "type": "single",
 "stem": "<p>Your online store's traffic always rises from 6 PM to 10 PM. You want VMSS5 to have 10 instances during that window and 3 the rest of the time, without waiting for CPU to rise.</p><p>What should you configure?</p>",
 "opts": [
  "A CPU-based rule",
  "A proximity placement group",
  "A scheduled (time-based) scale profile with an instance count of 10",
  "A reservation"
 ],
 "ans": 2,
 "expl": "<p>Autoscale accepts several <b>profiles</b>, including <b>scheduled</b> profiles (recurring days and hours) with a fixed instance count or their own rules. You thus anticipate predictable load.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS5"
  ],
  "title": "VMSS5 | Scaling",
  "menu": [
   "*Scaling"
  ],
  "rows": [
   [
    "Default profile",
    "3 instances"
   ],
   [
    "*Evening profile",
    "Mon-Sun 18:00-22:00 · 10 instances"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Predictable load = scheduled scale profile."
},
{
 "id": "D3-134",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You manage VM disks.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "An Ultra disk can be used as an OS disk.",
   "a": 1
  },
  {
   "l": "A Premium SSD v2 disk can be used as a data disk.",
   "a": 0
  },
  {
   "l": "A Premium SSD disk can be used as an OS disk.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Ultra as OS: No.</b> Ultra disks (and Premium SSD v2) can only be <b>data</b> disks.</li><li><b>Premium SSD v2 as data: Yes.</b></li><li><b>Premium SSD as OS: Yes.</b></li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "OS disk",
    "HDD, Standard SSD, Premium SSD"
   ],
   [
    "*Ultra Disk / Premium SSD v2",
    "Data only"
   ]
  ]
 },
 "keep": "Ultra and Premium v2 = data disks only."
},
{
 "id": "D3-135",
 "dom": 3,
 "type": "single",
 "stem": "<p>A Premium SSD P30 disk (1 TiB) on VM25 needs more IOPS during monthly close, but not more space.</p><p>What can you do without changing the disk size?</p>",
 "opts": [
  "Add a temporary disk",
  "Switch to Standard HDD",
  "Enable Read/write caching",
  "Change the disk's performance tier (for example to P40)"
 ],
 "ans": 3,
 "expl": "<p>For Premium SSDs, the <b>performance tier</b> can be raised independently of size (for example P30 → P40), then lowered later (after a minimum delay). On-demand <b>bursting</b> is another option for short spikes on large disks.</p><p>Standard HDD would be slower. Read/write caching isn't recommended for data.</p>",
 "portal": {
  "path": [
   "Disks",
   "VM25-data"
  ],
  "title": "VM25-data | Size + performance",
  "menu": [
   "*Size + performance"
  ],
  "rows": [
   [
    "Size",
    "1 TiB (P30)"
   ],
   [
    "*Performance tier",
    "P40"
   ]
  ],
  "btn": "Save"
 },
 "keep": "More IOPS without more space = performance tier (or bursting)."
},
{
 "id": "D3-136",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to upload an on-premises virtual disk to Azure to create a managed disk.</p><p>Which format must the file have?</p>",
 "opts": [
  "Fixed-size VHD",
  "Dynamic VHDX",
  "Dynamic VHD",
  "VMDK"
 ],
 "ans": 0,
 "expl": "<p>Azure only accepts disks in <b>fixed-size VHD</b> format. A VHDX or a dynamic disk must be converted (for example with <code>Convert-VHD</code> in Hyper-V), and a VMDK must be converted to VHD.</p>",
 "portal": {
  "path": [
   "Disks",
   "Create"
  ],
  "title": "Upload a disk",
  "rows": [
   [
    "*Format",
    "Fixed-size VHD"
   ],
   [
    "Convert",
    "Convert-VHD -VHDType Fixed"
   ]
  ]
 },
 "keep": "Disk to upload = fixed VHD only."
},
{
 "id": "D3-137",
 "dom": 3,
 "type": "single",
 "stem": "<p>An auditor wants to download a copy of VM26's OS disk in VHD format.</p><p>What should you do?</p>",
 "opts": [
  "Enable boot diagnostics",
  "Generate an export URL (SAS) for the managed disk, after stopping (deallocating) the VM or from a snapshot",
  "Use Azure File Sync",
  "Copy the C:\\Windows folder"
 ],
 "ans": 1,
 "expl": "<p>The <b>Export</b> option of a managed disk (or snapshot) generates a temporary <b>SAS URL</b> to download the VHD. The disk must not be attached to a running VM: deallocate the VM or export a snapshot.</p>",
 "portal": {
  "path": [
   "Disks",
   "VM26-osdisk"
  ],
  "title": "VM26-osdisk | Disk export",
  "menu": [
   "*Disk export"
  ],
  "rows": [
   [
    "*URL expires in",
    "3600 seconds"
   ]
  ],
  "btn": "Generate URL"
 },
 "keep": "Downloading a VHD = Export the disk (SAS URL), VM deallocated."
},
{
 "id": "D3-138",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to create a new VM from a snapshot of VM27's OS disk.</p><p>What should you do?</p>",
 "opts": [
  "Attach the snapshot as a data disk",
  "Restore the snapshot to a storage account",
  "Create a managed disk from the snapshot, then create a VM from that disk",
  "Create a VM and choose the snapshot as a Marketplace image"
 ],
 "ans": 2,
 "expl": "<p>You first create a <b>managed disk</b> from the snapshot, then a <b>VM from that disk</b> (Create VM option on the disk). The new VM is specialized: it keeps the original's computer name and accounts.</p>",
 "portal": {
  "path": [
   "Snapshots",
   "VM27-snap"
  ],
  "title": "Create managed disk",
  "rows": [
   [
    "*Source type",
    "Snapshot"
   ],
   [
    "Then",
    "Disk > Create VM"
   ]
  ],
  "btn": "Create"
 },
 "keep": "VM from a snapshot = managed disk, then a VM on that disk."
},
{
 "id": "D3-139",
 "dom": 3,
 "type": "single",
 "stem": "<p>Stateless VMs in a scale set must start very quickly and reset their system on each restart. Data on the OS disk doesn't need to be kept.</p><p>Which type of OS disk should you use?</p>",
 "opts": [
  "An Ultra disk",
  "A Premium SSD with Read/write caching",
  "A shared disk",
  "An ephemeral OS disk"
 ],
 "ans": 3,
 "expl": "<p>An <b>ephemeral OS disk</b> is created on the host's local storage (cache or temporary disk): faster reads and reimages, no storage cost. But it's lost if the VM changes host, and the VM can't be stopped with deallocation.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "Create"
  ],
  "title": "Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*Ephemeral OS disk",
    "Placement: cache disk"
   ]
  ]
 },
 "keep": "Fast startup, stateless = ephemeral OS disk."
},
{
 "id": "D3-140",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to create a generalized image of a <b>Linux</b> VM.</p><p>Which command should you run in the VM before capturing it?</p>",
 "opts": [
  "sudo waagent -deprovision+user",
  "az vm deallocate",
  "sudo shutdown -h now only",
  "sysprep /generalize"
 ],
 "ans": 0,
 "expl": "<p>On Linux, the Azure VM agent removes machine-specific information with <code>waagent -deprovision+user</code> (which also deletes the last user account). You then deallocate the VM, mark it generalized (<code>az vm generalize</code>), and capture the image.</p><p>Sysprep is the Windows tool.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Linux"
  ],
  "title": "Prepare a Linux image",
  "rows": [
   [
    "*1",
    "sudo waagent -deprovision+user"
   ],
   [
    "2",
    "az vm deallocate"
   ],
   [
    "3",
    "az vm generalize"
   ]
  ]
 },
 "keep": "Generalizing Linux = waagent -deprovision; Windows = Sysprep."
},
{
 "id": "D3-141",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want to capture a VM <b>without</b> generalizing it, to create copies that keep its accounts and configuration.</p><p>Which type of image definition should you create in the Azure Compute Gallery?</p>",
 "opts": [
  "Generalized",
  "Specialized",
  "Marketplace",
  "Ephemeral"
 ],
 "ans": 1,
 "expl": "<p>A <b>specialized</b> image keeps the computer name, accounts, and configuration. VMs created from it skip the provisioning step (no new administrator account).</p><p>A <b>generalized</b> image was prepared with Sysprep or waagent, and each new VM gets its own name and administrator account.</p>",
 "portal": {
  "path": [
   "Azure compute galleries",
   "Gallery1"
  ],
  "title": "Create an image definition",
  "rows": [
   [
    "*OS state",
    "Specialized"
   ],
   [
    "Generalized",
    "Sysprep / waagent"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Specialized = exact copy; generalized = new identities."
},
{
 "id": "D3-142",
 "dom": 3,
 "type": "single",
 "stem": "<p>VM28 no longer boots because of a faulty driver. You want to repair the OS disk from another VM.</p><p>Which approach does Microsoft recommend?</p>",
 "opts": [
  "Resize VM28",
  "Enable Always On",
  "Create a repair VM, attach a copy of the OS disk to it, fix it, then swap VM28's disk (for example with az vm repair)",
  "Delete VM28 and its disks"
 ],
 "ans": 2,
 "expl": "<p>The <b>az vm repair</b> command automates the approach: create a repair VM, attach a <b>copy</b> of the OS disk as a data disk, run fix scripts, then <b>swap the OS disk</b> of the original VM.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM28"
  ],
  "title": "VM28 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*Swap OS disk",
    "Repaired disk"
   ],
   [
    "Tool",
    "az vm repair create / run / restore"
   ]
  ]
 },
 "keep": "Repairing an OS that won't boot = repair VM + disk swap (az vm repair)."
},
{
 "id": "D3-143",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to apply and maintain a desired state configuration (Windows roles, files, services) on VMs, and report drift.</p><p>Which solution does Microsoft recommend today?</p>",
 "opts": [
  "Boot diagnostics",
  "The serial console",
  "A Template Spec",
  "Azure Machine Configuration (Azure Policy guest configuration)"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Machine Configuration</b> (formerly Azure Policy guest configuration) audits and applies DSC-based configurations inside Azure VMs and Arc servers, and reports compliance. It's gradually replacing Azure Automation State Configuration and the DSC extension.</p>",
 "portal": {
  "path": [
   "Machine Configuration"
  ],
  "title": "Machine Configuration",
  "rows": [
   [
    "*Configuration",
    "WebServerBaseline (DSC)"
   ],
   [
    "Mode",
    "Audit and apply"
   ]
  ]
 },
 "keep": "Desired state in VMs = Azure Machine Configuration."
},
{
 "id": "D3-144",
 "dom": 3,
 "type": "single",
 "stem": "<p>The Custom Script extension fails on VM29. You need to read the script's output and the error message.</p><p>Where do you find this information?</p>",
 "opts": [
  "In the extension's status (portal: Extensions + applications) and in the agent logs in the VM",
  "In Azure Advisor",
  "In the invoice",
  "In the storage account's metrics"
 ],
 "ans": 0,
 "expl": "<p>The portal shows the extension's <b>detailed status</b> (output and error). In the VM, logs are under <code>C:\\WindowsAzure\\Logs\\Plugins\\</code> (Windows) or <code>/var/log/azure/</code> (Linux). To rerun the same script, remove and reinstall the extension, or change a setting.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM29"
  ],
  "title": "VM29 | Extensions + applications",
  "menu": [
   "*Extensions + applications"
  ],
  "rows": [
   [
    "*CustomScriptExtension",
    "Provisioning failed · View detailed status"
   ],
   [
    "Logs",
    "C:\\WindowsAzure\\Logs\\Plugins"
   ]
  ]
 },
 "keep": "Extension error = detailed status in the portal + agent logs."
},
{
 "id": "D3-145",
 "dom": 3,
 "type": "single",
 "stem": "<p>You create a Windows Server VM and your company has Windows Server licenses with Software Assurance.</p><p>Which option should you check during creation to reduce cost?</p>",
 "opts": [
  "Azure Spot instance",
  "Use existing Windows Server license (Azure Hybrid Benefit)",
  "Accelerated networking",
  "Boot diagnostics"
 ],
 "ans": 1,
 "expl": "<p>The <b>Azure Hybrid Benefit</b> option (“Use existing Windows Server license”) bills the VM at a basic Linux VM rate, without the Windows license cost. It can also be enabled after creation.</p>",
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
    "*Use existing Windows Server license",
    "Checked"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Existing Windows licenses = Azure Hybrid Benefit."
},
{
 "id": "D3-146",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to ensure that VMSS6's critical VMs are spread across the region's three availability zones.</p><p>When must you configure the zones?</p>",
 "opts": [
  "When upgrading the instances",
  "At any time, by editing the properties",
  "When creating the scale set",
  "After adding a load balancer"
 ],
 "ans": 2,
 "expl": "<p>The <b>zones</b> of a virtual machine scale set (and of a VM) are chosen at <b>creation</b>. For an existing set, adding zones is limited; in practice, you recreate the set.</p><p>The load balancer must be the Standard SKU (zone redundant) to spread traffic across zones.</p>",
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
    "*Availability zone",
    "Zones 1, 2, 3"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Zones = chosen at creation."
},
{
 "id": "D3-147",
 "dom": 3,
 "type": "single",
 "stem": "<p>You move a VM to an availability zone even though it was created without a zone (regional).</p><p>Which statement is true?</p>",
 "opts": [
  "You just change the VM's Zone property",
  "You just restart the VM",
  "It's impossible, even by recreating the VM",
  "You must recreate the VM in the zone (Azure Resource Mover or recreation from the disks)"
 ],
 "ans": 3,
 "expl": "<p>A VM's zone is set at creation. To go from a regional VM to a zonal VM, you <b>recreate</b> it in the desired zone (Azure Resource Mover offers this scenario, or you recreate from disk snapshots).</p>",
 "portal": {
  "path": [
   "Azure Resource Mover"
  ],
  "title": "Move to a zone",
  "rows": [
   [
    "Source",
    "Regional VM"
   ],
   [
    "*Target",
    "Zone 1 (recreation)"
   ]
  ]
 },
 "keep": "Making a VM zonal = recreating it."
},
{
 "id": "D3-148",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the right tool for each task on a VM.</p><p>To answer, drag the appropriate tool to each task. Each tool may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tools",
 "srcs": [
  "Custom Script extension",
  "Run command",
  "Reset password",
  "Redeploy",
  "Serial console"
 ],
 "tgtHead": [
  "Task",
  "Tool"
 ],
 "tgts": [
  {
   "l": "Install software on 20 VMs when they're deployed by a template",
   "a": 0
  },
  {
   "l": "Run ipconfig /all once to diagnose",
   "a": 1
  },
  {
   "l": "Fix the RDP configuration that blocks connections",
   "a": 2
  },
  {
   "l": "Move the VM to a new host after hardware errors",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Custom Script</b>: automated configuration, ideal in a template.</li><li><b>Run command</b>: one-off diagnostic script.</li><li><b>Reset password</b>: also offers “Reset configuration only” for RDP (VMAccess).</li><li><b>Redeploy</b>: new host.</li></ul><p>The serial console is for when the VM has no network or normal boot.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM tools",
  "rows": [
   [
    "*Custom Script",
    "Automated configuration"
   ],
   [
    "Run command",
    "One-off diagnosis"
   ],
   [
    "Reset password",
    "Password, RDP"
   ],
   [
    "Redeploy",
    "New host"
   ]
  ]
 },
 "keep": "Deployment script, one-off command, VMAccess, redeploy: each has its use."
},
{
 "id": "D3-149",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to restore VM30 from a snapshot of its OS disk, without recreating the VM.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Create a managed disk from the snapshot",
  "Stop (deallocate) VM30",
  "Swap VM30's OS disk with the new disk",
  "Restart VM30",
  "Delete VM30",
  "Generalize the new disk with Sysprep"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>You create a <b>disk</b> from the snapshot, <b>deallocate</b> the VM, use <b>Swap OS disk</b>, then <b>start</b> the VM. The old disk stays available until you delete it.</p><p>You must neither delete the VM nor generalize the disk, which would make it unusable for this VM.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM30"
  ],
  "title": "VM30 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "1",
    "Disk from the snapshot"
   ],
   [
    "2",
    "Deallocate the VM"
   ],
   [
    "*3",
    "Swap OS disk"
   ],
   [
    "4",
    "Start"
   ]
  ]
 },
 "keep": "Restoring an OS disk = disk from the snapshot + swap."
},
{
 "id": "D3-150",
 "dom": 3,
 "type": "single",
 "stem": "<p>An Azure Compute Gallery contains an image version replicated in France Central only. You want to create VMs from it in West Europe.</p><p>What should you do?</p>",
 "opts": [
  "Add West Europe to the image version's replication regions",
  "Nothing: a gallery is global",
  "Create a new gallery in West Europe and start over",
  "Copy the image with AzCopy"
 ],
 "ans": 0,
 "expl": "<p>An <b>image version</b> must be <b>replicated</b> to each region where you want to use it. You add West Europe to the target regions (with a replica count suited to the number of VMs created at the same time).</p>",
 "portal": {
  "path": [
   "Azure compute galleries",
   "Gallery1",
   "win2022-app",
   "1.0.0"
  ],
  "title": "1.0.0 | Update replication",
  "rows": [
   [
    "France Central",
    "1 replica"
   ],
   [
    "*West Europe",
    "Add · 1 replica"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Using an image in a region = replicate it there."
},
{
 "id": "D3-151",
 "dom": 3,
 "type": "single",
 "stem": "<p>Thousands of VMs will be created at the same time from the same image version in West Europe. Creation slows down.</p><p>What should you increase?</p>",
 "opts": [
  "The number of fault domains",
  "The number of replicas of the image version in the region",
  "The VM size",
  "The storage quota"
 ],
 "ans": 1,
 "expl": "<p>Each <b>replica</b> of an image version can serve a limited number of simultaneous creations. Increasing the number of replicas in the region spreads the load and speeds up large-scale deployments.</p>",
 "portal": {
  "path": [
   "Azure compute galleries",
   "Gallery1",
   "win2022-app",
   "1.0.0"
  ],
  "title": "Replication",
  "rows": [
   [
    "*Replica count (West Europe)",
    "1 → 5"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Many simultaneous VMs = more replicas."
},
{
 "id": "D3-152",
 "dom": 3,
 "type": "single",
 "stem": "<p>A developer wants to open a command prompt in his web app's environment to inspect the deployed files.</p><p>Which App Service tool should he use?</p>",
 "opts": [
  "Azure Bastion",
  "The serial console",
  "The Kudu console (Advanced Tools, SCM site)",
  "RDP to the instance"
 ],
 "ans": 2,
 "expl": "<p><b>Kudu</b> (Advanced Tools, at <code>&lt;app&gt;.scm.azurewebsites.net</code>) gives a debug console, file explorer, environment variables, logs, and deployments. On Linux, SSH into the container is also available.</p><p>You don't RDP into App Service instances.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Advanced Tools",
  "menu": [
   "*Advanced Tools"
  ],
  "rows": [
   [
    "*Kudu",
    "webapp1.scm.azurewebsites.net"
   ],
   [
    "Debug console",
    "CMD / PowerShell"
   ]
  ],
  "btn": "Go"
 },
 "keep": "A web app's console and files = Kudu (SCM site)."
},
{
 "id": "D3-153",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app must continuously run a background processing script, on the same instances as the app.</p><p>Which App Service feature should you use?</p>",
 "opts": [
  "A deployment slot",
  "Health check",
  "A scheduled backup",
  "A continuous WebJob, with Always On enabled"
 ],
 "ans": 3,
 "expl": "<p><b>WebJobs</b> run scripts or programs in the background in the app's context, either <b>continuous</b> or <b>triggered</b> (scheduled). A continuous job requires <b>Always On</b> so it doesn't stop when the app unloads.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | WebJobs",
  "menu": [
   "*WebJobs"
  ],
  "rows": [
   [
    "*Type",
    "Continuous"
   ],
   [
    "Prerequisite",
    "Always On"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Continuous background work in App Service = continuous WebJob + Always On."
},
{
 "id": "D3-154",
 "dom": 3,
 "type": "single",
 "stem": "<p>A Windows web app and a Linux web app must be hosted.</p><p>Can they share the same App Service plan?</p>",
 "opts": [
  "No, a plan is either Windows or Linux",
  "Yes, if both apps use .NET",
  "Yes, with no restriction",
  "Yes, if the plan is Premium"
 ],
 "ans": 0,
 "expl": "<p>The operating system is a property of the <b>plan</b>: a Windows plan only hosts Windows apps, and a Linux plan only Linux apps (code or containers).</p>",
 "portal": {
  "path": [
   "App Service plans",
   "Create"
  ],
  "title": "Create App Service plan",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*Operating System",
    "Linux or Windows (for the whole plan)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "One plan = one OS."
},
{
 "id": "D3-155",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app hosted in Azure must reach an internal API on an on-premises server, without a VPN, with only outbound connections from the on-premises site.</p><p>What should you use?</p>",
 "opts": [
  "A deployment slot",
  "App Service Hybrid Connections",
  "Access restrictions",
  "A private endpoint"
 ],
 "ans": 1,
 "expl": "<p><b>Hybrid Connections</b> use Azure Relay: an agent (Hybrid Connection Manager) installed on-premises opens an outbound connection, and the app reaches a specific host and port, with no VPN or inbound port opening.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Hybrid connections",
  "menu": [
   "Networking",
   "*Hybrid connections"
  ],
  "rows": [
   [
    "*Endpoint",
    "srv-api.local:8443"
   ],
   [
    "On-premises agent",
    "Hybrid Connection Manager"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Reaching an on-premises server without VPN = Hybrid Connections."
},
{
 "id": "D3-156",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want to see a web app's logs live while you reproduce a bug.</p><p>What should you use?</p>",
 "opts": [
  "The activity log",
  "The Backups page",
  "Log stream, after enabling application logging",
  "Azure Advisor"
 ],
 "ans": 2,
 "expl": "<p><b>Log stream</b> shows application and web server logs in real time, provided logging is enabled in <b>App Service logs</b>. You can also follow them with <code>az webapp log tail</code>.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Log stream",
  "menu": [
   "App Service logs",
   "*Log stream"
  ],
  "rows": [
   [
    "Prerequisite",
    "Application logging enabled"
   ]
  ]
 },
 "keep": "Live logs = log stream."
},
{
 "id": "D3-157",
 "dom": 3,
 "type": "single",
 "stem": "<p>A slow web app returns 500 errors. You want a guided diagnosis with automatic analysis of common causes.</p><p>Which App Service tool should you open?</p>",
 "opts": [
  "Identity",
  "Custom domains",
  "Deployment Center",
  "Diagnose and solve problems"
 ],
 "ans": 3,
 "expl": "<p><b>Diagnose and solve problems</b> offers detectors (availability and performance, crashes, memory, CPU, configuration) that automatically analyze the app and suggest solutions.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Diagnose and solve problems",
  "menu": [
   "*Diagnose and solve problems"
  ],
  "rows": [
   [
    "*Availability and Performance",
    "HTTP 5xx errors"
   ],
   [
    "Crashes, memory, CPU",
    "Detectors"
   ]
  ]
 },
 "keep": "Guided diagnosis = Diagnose and solve problems."
},
{
 "id": "D3-158",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy a ZIP file containing an app's code to WebApp22, with Azure CLI.</p><p>Which command should you use?</p>",
 "opts": [
  "az webapp deploy --src-path app.zip --type zip",
  "az acr build app.zip",
  "az webapp create --zip app.zip",
  "az storage blob upload app.zip"
 ],
 "ans": 0,
 "expl": "<p><code>az webapp deploy --resource-group RG1 --name WebApp22 --src-path app.zip --type zip</code> deploys the package (ZIP deploy). The older <code>az webapp deployment source config-zip</code> command does the same.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az webapp deploy",
    "--src-path app.zip --type zip"
   ]
  ]
 },
 "keep": "ZIP deployment = az webapp deploy --type zip."
},
{
 "id": "D3-159",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want untagged images (orphaned manifests) in ACR6 to be deleted automatically after 7 days.</p><p>What should you configure?</p>",
 "opts": [
  "Geo-replication",
  "A retention policy for untagged manifests (Premium tier)",
  "A storage account lifecycle policy",
  "The admin account"
 ],
 "ans": 1,
 "expl": "<p>ACR's <b>retention policy</b> automatically deletes <b>untagged</b> manifests after a number of days. It's available in the <b>Premium</b> tier. You can also use scheduled ACR purge tasks (<code>acr purge</code>).</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR6"
  ],
  "title": "ACR6 | Retention policies",
  "menu": [
   "*Policies"
  ],
  "rows": [
   [
    "*Retention (untagged manifests)",
    "7 days"
   ],
   [
    "Tier",
    "Premium"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Purging orphaned manifests = retention policy (Premium) or acr purge."
},
{
 "id": "D3-160",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want your app's image to be rebuilt automatically in ACR7 each time the base image (for example node:20) is updated.</p><p>What should you use?</p>",
 "opts": [
  "Geo-replication",
  "A webhook to Azure Advisor",
  "An ACR task with a base image update trigger",
  "A retention policy"
 ],
 "ans": 2,
 "expl": "<p><b>ACR tasks</b> can be triggered by a source code commit, a schedule, or a <b>base image update</b>: they then automatically rebuild the dependent image, for example to apply security patches.</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR7"
  ],
  "title": "ACR7 | Tasks",
  "menu": [
   "*Tasks"
  ],
  "rows": [
   [
    "*Trigger",
    "Base image update"
   ],
   [
    "Image",
    "app:{{.Run.ID}}"
   ]
  ],
  "btn": "+ Create"
 },
 "keep": "Rebuilding when the base image changes = ACR task."
},
{
 "id": "D3-161",
 "dom": 3,
 "type": "single",
 "stem": "<p>A partner must be able to pull only the images in the partner-app repository of ACR8, and no other repository.</p><p>What should you create?</p>",
 "opts": [
  "A private endpoint",
  "The AcrPull role on the registry",
  "The admin account",
  "A repository-scoped token with a scope map that allows pull on partner-app"
 ],
 "ans": 3,
 "expl": "<p><b>Repository-scoped tokens</b>, tied to a <b>scope map</b>, grant rights (read, write) on specific repositories. The AcrPull role applies to <b>all</b> repositories in the registry.</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR8"
  ],
  "title": "ACR8 | Tokens",
  "menu": [
   "*Tokens",
   "Scope maps"
  ],
  "rows": [
   [
    "*Scope map",
    "partner-app: content/read"
   ],
   [
    "Token",
    "partner-token"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Per-repository rights = token + scope map."
},
{
 "id": "D3-162",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy an ACI container group with an app container and a logging container, from a definition file.</p><p>Which file format can you use with az container create --file?</p>",
 "opts": [
  "YAML",
  "a .bicepparam file",
  "CSV",
  "Dockerfile"
 ],
 "ans": 0,
 "expl": "<p>For a <b>multi-container</b> group, you describe the group in a <b>YAML</b> file (passed with <code>--file</code>) or in an ARM/Bicep template. The CLI alone, without a file, creates only one container.</p><p>A Dockerfile describes how to build an image, not a deployment.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "aci-group.yaml",
  "rows": [
   [
    "*apiVersion",
    "2021-10-01"
   ],
   [
    "containers",
    "app, logging"
   ]
  ]
 },
 "keep": "Multi-container ACI group = YAML file (or ARM/Bicep)."
},
{
 "id": "D3-163",
 "dom": 3,
 "type": "single",
 "stem": "<p>An Azure Container Apps application must be reachable only by the other apps in the same environment, never from the internet.</p><p>How should you configure ingress?</p>",
 "opts": [
  "Disabled",
  "Enabled, with traffic limited to the Container Apps environment (internal)",
  "Enabled, accepting traffic from anywhere",
  "Enabled with a static public IP address"
 ],
 "ans": 1,
 "expl": "<p><b>Internal ingress</b> (limited to the environment) makes the app reachable only by other apps in the environment, or by the environment's virtual network. <b>External</b> ingress would expose it to the internet. Without ingress, the app receives no HTTP requests (useful for background processing).</p>",
 "portal": {
  "path": [
   "Container Apps",
   "internal-api"
  ],
  "title": "internal-api | Ingress",
  "menu": [
   "*Ingress"
  ],
  "rows": [
   [
    "Ingress",
    "Enabled"
   ],
   [
    "*Ingress traffic",
    "Limited to Container Apps Environment"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Reachable only within the environment = internal ingress."
},
{
 "id": "D3-164",
 "dom": 3,
 "type": "single",
 "stem": "<p>Several Azure Container Apps applications must share the same virtual network and the same Log Analytics workspace.</p><p>Where do you define these common settings?</p>",
 "opts": [
  "In the container registry",
  "In the App Service plan",
  "In the Container Apps environment",
  "In each revision"
 ],
 "ans": 2,
 "expl": "<p>The Container Apps <b>environment</b> is the secure boundary that groups apps: it defines the virtual network, logging (Log Analytics), and workload profiles. Apps in the same environment communicate with each other.</p>",
 "portal": {
  "path": [
   "Container Apps Environments",
   "env-prod"
  ],
  "title": "env-prod | Overview",
  "menu": [
   "*Overview",
   "Networking",
   "Logging"
  ],
  "rows": [
   [
    "Virtual network",
    "VNet-Apps"
   ],
   [
    "*Log Analytics",
    "law-prod"
   ]
  ]
 },
 "keep": "Shared network and logs = Container Apps environment."
},
{
 "id": "D3-165",
 "dom": 3,
 "type": "single",
 "stem": "<p>A containerized job must run every night at 2 AM in Azure Container Apps, then stop.</p><p>What should you create?</p>",
 "opts": [
  "One revision per day",
  "An ACI container group with Always",
  "An app with external ingress",
  "A scheduled Container Apps job"
 ],
 "ans": 3,
 "expl": "<p>Container Apps <b>jobs</b> run containers that finish: <b>manual</b>, <b>scheduled</b> (cron expression), or <b>event-driven</b> triggers. They fit better than an app running all the time.</p>",
 "portal": {
  "path": [
   "Container Apps",
   "Jobs"
  ],
  "title": "Create a Container Apps job",
  "rows": [
   [
    "*Trigger type",
    "Schedule"
   ],
   [
    "Cron expression",
    "0 2 * * *"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Container that runs then stops = Container Apps job (manual, scheduled, event)."
},
{
 "id": "D3-166",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You deploy an app in Azure Container Apps.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Changing the container image creates a new revision.",
   "a": 0
  },
  {
   "l": "Changing a scale rule creates a new revision.",
   "a": 0
  },
  {
   "l": "You must manage the nodes of the underlying cluster.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Image: Yes.</b> “Template” changes (image, environment variables, resources, scale rules) create a new revision.</li><li><b>Scale rule: Yes</b>, it's part of the revision template.</li><li><b>Nodes: No.</b> Container Apps is serverless: Azure manages the infrastructure (Kubernetes) for you.</li></ul>",
 "portal": {
  "path": [
   "Container Apps",
   "app1"
  ],
  "title": "app1 | Revisions",
  "menu": [
   "*Revisions and replicas"
  ],
  "rows": [
   [
    "*Image, variables, scale",
    "New revision"
   ],
   [
    "Infrastructure",
    "Managed by Azure"
   ]
  ]
 },
 "keep": "Template changes = new revision; no nodes to manage."
},
{
 "id": "D3-167",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You review the following Bicep resource:</p><pre>param count int = 3\n\nresource disks 'Microsoft.Compute/disks@2023-04-02' = [for i in range(0, count): {\n  name: 'data-${i}'\n  location: resourceGroup().location\n  sku: { name: 'Premium_LRS' }\n  properties: {\n    creationData: { createOption: 'Empty' }\n    diskSizeGB: 128\n  }\n}]</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Number of disks created with the default value:",
   "o": [
    "1",
    "3",
    "4"
   ],
   "a": 1
  },
  {
   "l": "Name of the last disk:",
   "o": [
    "data-2",
    "data-3",
    "data-count"
   ],
   "a": 0
  },
  {
   "l": "Disk type:",
   "o": [
    "Premium SSD LRS",
    "Standard HDD",
    "Standard SSD"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><code>range(0, 3)</code> produces 0, 1, 2: <b>3 disks</b>.</li><li>The last one is named <b>data-2</b>.</li><li><code>Premium_LRS</code>: <b>Premium SSD</b> with local redundancy. (StandardSSD_LRS would be Standard SSD, Standard_LRS Standard HDD.)</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "Created disks",
  "rows": [
   [
    "*data-0, data-1, data-2",
    "Premium_LRS · 128 GiB"
   ]
  ]
 },
 "keep": "range(0, n) = 0 to n-1; Premium_LRS = Premium SSD."
},
{
 "id": "D3-168",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You choose an availability option for each application, at the lowest cost.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Internal app that tolerates a few hours of downtime per year:",
   "o": [
    "One VM with Premium SSD",
    "Availability zones",
    "Availability set"
   ],
   "a": 0
  },
  {
   "l": "App that must survive a rack failure:",
   "o": [
    "Two regions",
    "Availability set",
    "One VM with Premium SSD"
   ],
   "a": 1
  },
  {
   "l": "App that must survive the loss of a datacenter:",
   "o": [
    "One VM with Premium SSD",
    "Availability zones",
    "Availability set"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>One VM with Premium SSD</b>: 99.9% SLA (about 8.8 hours of downtime per year at most).</li><li><b>Availability set</b>: protects against a rack failure (fault domains) and maintenance.</li><li><b>Availability zones</b>: protects against the loss of a datacenter.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Availability options",
  "rows": [
   [
    "Single VM Premium SSD",
    "99.9%"
   ],
   [
    "*Availability set",
    "Rack + maintenance"
   ],
   [
    "*Zones",
    "Datacenter"
   ]
  ]
 },
 "keep": "Rack = availability set; datacenter = zones; region = two regions."
},
{
 "id": "D3-169",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You create the VM VM31 for a production web server. It must be in zone 1, with no public IP address, with a Premium SSD OS disk, and the company's existing Windows license.</p><p>How should you configure the VM?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create a virtual machine",
  "sub": "Virtual machines",
  "rows": [
   {
    "k": "head",
    "t": "Basics"
   },
   {
    "k": "select",
    "l": "Availability options",
    "o": [
     "No infrastructure redundancy required",
     "Availability zone",
     "Availability set"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Availability zone",
    "o": [
     "Zone 1",
     "Zone 2",
     "Zone 3"
    ],
    "a": 0
   },
   {
    "k": "check",
    "l": "Use existing Windows Server license",
    "a": true
   },
   {
    "k": "head",
    "t": "Disks"
   },
   {
    "k": "select",
    "l": "OS disk type",
    "o": [
     "Standard HDD",
     "Standard SSD",
     "Premium SSD"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Networking"
   },
   {
    "k": "select",
    "l": "Public IP",
    "o": [
     "(new) VM31-ip",
     "None"
    ],
    "d": 0,
    "a": 1
   }
  ]
 },
 "expl": "<ul><li><b>Availability zone</b>, <b>Zone 1</b>.</li><li><b>Existing license</b>: Azure Hybrid Benefit.</li><li><b>Premium SSD</b> for the OS disk.</li><li>Public IP: <b>None</b>. Administrative access will go through Azure Bastion or a VPN.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Create a virtual machine",
  "menu": [
   "*Basics",
   "Disks",
   "Networking"
  ],
  "rows": [
   [
    "*Zone",
    "Zone 1"
   ],
   [
    "*Existing license",
    "Checked"
   ],
   [
    "*OS disk",
    "Premium SSD"
   ],
   [
    "*Public IP",
    "None"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Production with no public IP: administer through Bastion or VPN."
},
{
 "id": "D3-170",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You create a virtual machine scale set. Instances must be spread across zones 1, 2, and 3, update in batches with health checks, and be replaced automatically if they become unhealthy.</p><p>How should you configure the set?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create a virtual machine scale set",
  "sub": "Virtual machine scale sets",
  "rows": [
   {
    "k": "select",
    "l": "Availability zone",
    "o": [
     "None",
     "Zone 1",
     "Zones 1, 2, 3"
    ],
    "a": 2
   },
   {
    "k": "select",
    "l": "Orchestration mode",
    "o": [
     "Uniform",
     "Flexible"
    ],
    "d": 1,
    "a": null
   },
   {
    "k": "head",
    "t": "Management"
   },
   {
    "k": "select",
    "l": "Upgrade mode",
    "o": [
     "Manual",
     "Automatic",
     "Rolling"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Health"
   },
   {
    "k": "check",
    "l": "Enable application health monitoring",
    "a": true
   },
   {
    "k": "check",
    "l": "Automatic repairs",
    "a": true
   }
  ]
 },
 "expl": "<ul><li><b>Zones 1, 2, 3</b>: spread across the three zones.</li><li><b>Rolling</b>: update in batches with health checks.</li><li><b>Health monitoring</b> and <b>automatic repairs</b>: replacing unhealthy instances.</li></ul><p>The orchestration mode isn't scored here: both allow it, with Flexible recommended.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "Create"
  ],
  "title": "Create a scale set",
  "menu": [
   "*Basics",
   "Management",
   "Health"
  ],
  "rows": [
   [
    "*Zones",
    "1, 2, 3"
   ],
   [
    "*Upgrade mode",
    "Rolling"
   ],
   [
    "*Automatic repairs",
    "Enabled"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Zones + Rolling + health/repairs = resilient scale set."
},
{
 "id": "D3-171",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to reset the SSH key of the azureuser account on the Linux VM VM32.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "VM32 | Virtual machine",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access control (IAM)"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Networking",
     "Disks",
     "Size",
     "Extensions + applications",
     "Configuration"
    ]
   },
   {
    "g": "Help",
    "items": [
     "Boot diagnostics",
     "Serial console",
     "Reset password",
     "Redeploy + reapply",
     "Run command"
    ]
   }
  ]
 },
 "ans": "Reset password",
 "expl": "<p><b>Reset password</b> offers, for Linux, resetting a password, an <b>SSH public key</b>, or only the SSH configuration. It relies on the VMAccess extension.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM32"
  ],
  "title": "VM32 | Reset password",
  "menu": [
   "*Reset password"
  ],
  "rows": [
   [
    "*Mode",
    "Reset SSH public key"
   ],
   [
    "Username",
    "azureuser"
   ]
  ],
  "btn": "Update"
 },
 "keep": "Lost SSH key = Reset password (SSH key mode)."
},
{
 "id": "D3-172",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to add a 512 GiB data disk to VM33.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "VM33 | Virtual machine",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Tags"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Networking",
     "Connect",
     "Disks",
     "Size",
     "Microsoft Defender for Cloud",
     "Extensions + applications",
     "Availability + scaling"
    ]
   },
   {
    "g": "Operations",
    "items": [
     "Auto-shutdown",
     "Backup",
     "Disaster recovery"
    ]
   }
  ]
 },
 "ans": "Disks",
 "expl": "<p>The <b>Disks</b> page lets you create and attach a new disk, attach an existing disk, detach, change host caching, and swap the OS disk.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM33"
  ],
  "title": "VM33 | Disks",
  "menu": [
   "Networking",
   "*Disks",
   "Size"
  ],
  "rows": [
   [
    "*Create and attach a new disk",
    "512 GiB · Premium SSD"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Adding a data disk = the VM's Disks page."
},
{
 "id": "D3-173",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to minimize the cost of a test environment of 10 VMs used only on weekdays from 8 AM to 6 PM.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Configure VM auto-shutdown at 6 PM",
  "Start the VMs at 8 AM with automation (for example Start/Stop VMs v2 or a runbook)",
  "Buy 3-year reservations",
  "Use Ultra disks"
 ],
 "ans": [
  0,
  1
 ],
 "expl": "<ul><li><b>Auto-shutdown: yes</b>, it deallocates the VMs every evening.</li><li><b>Automated start: yes</b>, the built-in auto-shutdown doesn't restart VMs; you need automation to start them in the morning.</li><li><b>Reservations: no</b>, they pay off for VMs that run continuously.</li><li><b>Ultra disks: no</b>, they're expensive.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Test1"
  ],
  "title": "VM-Test1 | Auto-shutdown",
  "menu": [
   "*Auto-shutdown"
  ],
  "rows": [
   [
    "*Shutdown",
    "18:00"
   ],
   [
    "Start",
    "Start/Stop VMs v2 · 08:00"
   ]
  ]
 },
 "keep": "Built-in auto-shutdown + automation for startup."
},
{
 "id": "D3-174",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You deploy an ARM template that contains an administrator password.</p><p>Which <b>two</b> practices best protect this secret?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Set the password as the parameter's default value",
  "Reference the secret from Key Vault in the parameter file",
  "Declare the parameter with the securestring type",
  "Return the password in an output"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<ul><li><b>securestring: yes</b>, the value doesn't appear in the history.</li><li><b>Key Vault reference: yes</b>, the secret is never written in a file.</li><li><b>Default value: no</b>, the secret would be in the template.</li><li><b>Output: no</b>, outputs are visible in the history.</li></ul>",
 "portal": {
  "path": [
   "Custom deployment"
  ],
  "title": "Parameters",
  "rows": [
   [
    "*adminPassword",
    "securestring"
   ],
   [
    "*Parameter file",
    "reference → Key Vault"
   ]
  ]
 },
 "keep": "Template secret = securestring + Key Vault reference; never as default or output."
},
{
 "id": "D3-175",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to deploy both a main template and several linked templates stored in a private storage account.</p><p>How can the main template access the linked templates?</p>",
 "opts": [
  "With a URL that contains a SAS token (templateLink.uri)",
  "With a local path C:\\templates",
  "Linked templates must be public, with no exception",
  "With the account key in the template"
 ],
 "ans": 0,
 "expl": "<p>A <b>linked template</b> is referenced by a URL (<code>templateLink.uri</code>) that Resource Manager must be able to read. For private storage, you add a <b>SAS token</b> to the URL (passed as a secure parameter). Template Specs and Bicep modules now avoid this need.</p>",
 "portal": {
  "path": [
   "Custom deployment",
   "Edit template"
  ],
  "title": "Linked template",
  "rows": [
   [
    "*templateLink.uri",
    "https://st…/templates/network.json?<SAS>"
   ]
  ]
 },
 "keep": "Private linked template = URL + SAS (or Template Spec / Bicep module)."
},
{
 "id": "D3-176",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to let administrators connect over RDP to VM34 only for 3 hours, on request, with port 3389 closed the rest of the time.</p><p>Which feature should you use?</p>",
 "opts": [
  "A deployment slot",
  "Microsoft Defender for Cloud just-in-time (JIT) VM access",
  "An availability set",
  "Boot diagnostics"
 ],
 "ans": 1,
 "expl": "<p><b>JIT access</b> closes management ports with NSG (or Azure Firewall) rules and opens them, on an approved request, only for the requester's IP address and a limited time. It requires Defender for Servers. Azure Bastion is another solution that avoids any open port.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM34"
  ],
  "title": "VM34 | Connect",
  "menu": [
   "*Connect"
  ],
  "rows": [
   [
    "*Just-in-time access",
    "Request access · 3 hours · my IP"
   ]
  ],
  "btn": "Request access"
 },
 "keep": "RDP port opened on demand = JIT access (Defender for Servers)."
}
);
