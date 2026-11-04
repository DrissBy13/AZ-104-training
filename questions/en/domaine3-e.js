/* Domain 3: compute (batch E : D3-177 to D3-230) */
AZ.questions.push(
{
 "id": "D3-177",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to create an Ubuntu VM with SSH key authentication, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Image",
   "o": [
    "Ubuntu2204",
    "Win2022Datacenter",
    "UbuntuServer.vhdx"
   ],
   "a": 0
  },
  {
   "l": "Authentication",
   "o": [
    "--generate-ssh-keys",
    "--admin-password-ssh",
    "--ssh-only"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm create ... --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys</code> creates the VM and generates an SSH key pair in <code>~/.ssh</code> if none exists (or reuses the existing key).</p><p>Ubuntu2204 is an image alias. The other parameters don't exist.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Command",
    "az vm create … --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys"
   ]
  ]
 },
 "keep": "Linux VM with SSH key in the CLI = --generate-ssh-keys (or --ssh-key-values).",
 "tpl": "az vm create --resource-group RG1 --name VM35 --image {0} --size Standard_B2s --admin-username azureuser {1}"
},
{
 "id": "D3-178",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to resize VM36 to Standard_D4s_v5 with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Subcommand",
   "o": [
    "resize",
    "update",
    "scale"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--size",
    "--sku",
    "--vm-size"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm resize --size Standard_D4s_v5</code>. You can first list the possible sizes on the current cluster with <code>az vm list-vm-resize-options</code>.</p><p>In PowerShell: change <code>$vm.HardwareProfile.VmSize</code> then run <code>Update-AzVM</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az vm resize",
    "--size Standard_D4s_v5"
   ],
   [
    "Possible sizes",
    "az vm list-vm-resize-options"
   ]
  ]
 },
 "keep": "Resizing in the CLI = az vm resize --size.",
 "tpl": "az vm {0} --resource-group RG1 --name VM36 {1} Standard_D4s_v5"
},
{
 "id": "D3-179",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to manually set the scale set VMSS7 to 6 instances, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Subcommand",
   "o": [
    "scale",
    "resize",
    "update-instances"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--new-capacity",
    "--instance-count",
    "--count"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vmss scale --new-capacity 6</code> sets the instance count. If autoscale is active, it may then change it according to its rules.</p><p><code>update-instances</code> applies the latest model to existing instances (manual upgrade).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az vmss scale",
    "--new-capacity 6"
   ],
   [
    "az vmss update-instances",
    "Apply the new model"
   ]
  ]
 },
 "keep": "Manual instance count = az vmss scale --new-capacity.",
 "tpl": "az vmss {0} --resource-group RG1 --name VMSS7 {1} 6"
},
{
 "id": "D3-180",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to attach a new 256 GiB data disk to VM37, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Subcommand",
   "o": [
    "attach",
    "create",
    "add"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "--new",
    "--empty",
    "--create"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az vm disk attach ... --new --size-gb 256</code> creates an empty managed disk and attaches it. Without <code>--new</code>, the command attaches an existing disk with that name.</p><p>In PowerShell: <code>Add-AzVMDataDisk</code> then <code>Update-AzVM</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az vm disk attach",
    "--new --size-gb 256 --sku Premium_LRS"
   ]
  ]
 },
 "keep": "New attached disk in the CLI = az vm disk attach --new.",
 "tpl": "az vm disk {0} --resource-group RG1 --vm-name VM37 --name VM37-data1 {1} --size-gb 256 --sku Premium_LRS"
},
{
 "id": "D3-181",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to stop and deallocate VM38 with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Stop-AzVM",
    "Remove-AzVM",
    "Update-AzVM"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "-Force",
    "-StayProvisioned",
    "-Deallocate:$false"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>Stop-AzVM -Force</code> stops and <b>deallocates</b> the VM, without asking for confirmation. With <code>-StayProvisioned</code>, the VM would be stopped without being deallocated (compute would stay billed).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | PowerShell",
  "rows": [
   [
    "*Stop-AzVM -Force",
    "Stopped (deallocated)"
   ],
   [
    "Stop-AzVM -StayProvisioned",
    "Stopped (billed)"
   ]
  ]
 },
 "keep": "Stop-AzVM deallocates by default; -StayProvisioned doesn't.",
 "tpl": "{0} -ResourceGroupName RG1 -Name VM38 {1}"
},
{
 "id": "D3-182",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the VMs shown in the VM document (click the VM tab).</p><p>You want to add VM-C to the availability set AS1 without recreating it. What should you do?</p>",
 "docs": [
  {
   "t": "VM",
   "h": "<p><b>Virtual machines</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Region</th><th>Availability set</th><th>Zone</th></tr><tr><td>VM-A</td><td>France Central</td><td>AS1</td><td>—</td></tr><tr><td>VM-B</td><td>France Central</td><td>AS1</td><td>—</td></tr><tr><td>VM-C</td><td>France Central</td><td>—</td><td>—</td></tr></table></div>"
  }
 ],
 "opts": [
  "Impossible: VM-C must be recreated in AS1",
  "Move VM-C to the resource group that contains AS1",
  "Restart VM-C after selecting AS1 in its settings",
  "Change VM-C's Availability property"
 ],
 "ans": 0,
 "expl": "<p>The availability set is fixed at the VM's <b>creation</b>. Without recreating it, it's impossible. You can recreate VM-C in AS1 by reusing its disks.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-C"
  ],
  "title": "VM-C | Availability + scaling",
  "menu": [
   "*Availability + scaling"
  ],
  "rows": [
   [
    "*Availability set",
    "Can't be changed after creation"
   ]
  ]
 },
 "keep": "Availability set = at creation; otherwise recreate."
},
{
 "id": "D3-183",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You have the apps shown in the Apps document (click the Apps tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "docs": [
  {
   "t": "Apps",
   "h": "<p><b>Web apps</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>App</th><th>Plan</th><th>Plan tier</th><th>OS</th><th>Region</th></tr><tr><td>App1</td><td>ASP1</td><td>Standard S1</td><td>Windows</td><td>France Central</td></tr><tr><td>App2</td><td>ASP1</td><td>Standard S1</td><td>Windows</td><td>France Central</td></tr><tr><td>App3</td><td>ASP2</td><td>Basic B1</td><td>Linux</td><td>France Central</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "You can add a deployment slot to App3.",
   "a": 1
  },
  {
   "l": "App1 and App2 share the same compute instances.",
   "a": 0
  },
  {
   "l": "You can move App3 into ASP1.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Slot for App3: No.</b> ASP2 is Basic; slots require Standard or higher.</li><li><b>Shared instances: Yes.</b> App1 and App2 are in the same plan.</li><li><b>App3 into ASP1: No.</b> ASP1 is a Windows plan, App3 a Linux app.</li></ul>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP2"
  ],
  "title": "ASP2 | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "Tier",
    "Basic B1 (no slots)"
   ],
   [
    "*OS",
    "Linux (can't join Windows ASP1)"
   ]
  ]
 },
 "keep": "Slots = Standard+; one plan = one OS."
},
{
 "id": "D3-184",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You have the scale set VMSS8, whose autoscale is shown in the Rules document (click the Rules tab). VMSS8 currently has 4 instances.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "docs": [
  {
   "t": "Rules",
   "h": "<p><b>Default profile</b>: minimum 2, maximum 6, default 3.</p><ul><li>Rule 1: average CPU &gt; 80% for 5 minutes → increase by 2 instances. Cool down 5 minutes.</li><li>Rule 2: average CPU &lt; 25% for 10 minutes → decrease by 1 instance. Cool down 5 minutes.</li></ul>"
  }
 ],
 "rows": [
  {
   "l": "CPU stays at 90% for 20 minutes. Number of instances afterward:",
   "o": [
    "6",
    "8",
    "10"
   ],
   "a": 0
  },
  {
   "l": "CPU then stays at 10% for 2 hours. Number of instances:",
   "o": [
    "0",
    "2",
    "3"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>6</b>: rule 1 adds 2 instances (4 → 6), then the <b>maximum</b> of 6 blocks any further increase.</li><li><b>2</b>: rule 2 removes one instance about every 15 minutes (10 minutes of observation + cool down) down to the <b>minimum</b> of 2.</li></ul><p>The default value (3) is only used if the metric is unavailable.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS8"
  ],
  "title": "VMSS8 | Scale history",
  "menu": [
   "*Scaling"
  ],
  "rows": [
   [
    "CPU 90%",
    "4 → 6 (ceiling)"
   ],
   [
    "*CPU 10%",
    "6 → … → 2 (floor)"
   ]
  ]
 },
 "keep": "Rules always stop at the minimum and maximum."
},
{
 "id": "D3-197",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate scaling option for each situation.</p><p>To answer, drag the appropriate option to each situation. Each option may be used once, more than once, or not at all.</p>",
 "srcLabel": "Options",
 "tgtHead": [
  "Situation",
  "Option"
 ],
 "srcs": [
  "Scale up (vertical)",
  "Scale out (horizontal)",
  "Scheduled scaling"
 ],
 "tgts": [
  {
   "l": "A single-instance app needs more memory",
   "a": 0
  },
  {
   "l": "The number of concurrent users doubles unpredictably",
   "a": 1
  },
  {
   "l": "Traffic triples every Monday morning",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Vertical</b>: more resources per instance (larger size or tier).</li><li><b>Horizontal</b>: more instances, triggered by metrics for unpredictable load.</li><li><b>Scheduled</b>: time-based profile for predictable load.</li></ul>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP1"
  ],
  "title": "Scaling",
  "rows": [
   [
    "*Scale up",
    "More resources per instance"
   ],
   [
    "Scale out",
    "More instances (metrics)"
   ],
   [
    "Scheduled",
    "Time-based profile"
   ]
  ]
 },
 "keep": "Memory = up; unpredictable load = out; predictable load = scheduled."
},
{
 "id": "D3-198",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate redundancy option for each level of VM protection.</p><p>To answer, drag the appropriate option to each level. Each option may be used once, more than once, or not at all.</p>",
 "srcLabel": "Options",
 "tgtHead": [
  "Protection",
  "Option"
 ],
 "srcs": [
  "Fault domains",
  "Update domains",
  "Availability zones",
  "Azure Site Recovery to another region"
 ],
 "tgts": [
  {
   "l": "Power failure of a rack",
   "a": 0
  },
  {
   "l": "Planned host maintenance that restarts servers",
   "a": 1
  },
  {
   "l": "Fire in a datacenter",
   "a": 2
  },
  {
   "l": "Disaster affecting the whole region",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Fault domains</b>: separate racks (power and network).</li><li><b>Update domains</b>: groups restarted in turn.</li><li><b>Zones</b>: separate datacenters in the region.</li><li><b>Site Recovery</b>: replication to another region, with failover.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Resilience",
  "rows": [
   [
    "*Fault domains",
    "Rack"
   ],
   [
    "Update domains",
    "Maintenance"
   ],
   [
    "Zones",
    "Datacenter"
   ],
   [
    "Site Recovery",
    "Region"
   ]
  ]
 },
 "keep": "Rack, maintenance, datacenter, region: four levels, four tools."
},
{
 "id": "D3-199",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to deploy a containerized app to Azure Container Apps from your local source code, with a private registry.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>The <b>registry</b> must exist to receive the image; you <b>build and push</b> the image; finally you create the <b>app</b> that pulls the image (with a managed identity that has AcrPull). The <code>az containerapp up</code> command can automate all these steps.</p><p>An App Service plan and an availability set don't apply to Container Apps.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "1",
    "az acr create"
   ],
   [
    "2",
    "az acr build"
   ],
   [
    "*3",
    "az containerapp create (AcrPull identity)"
   ],
   [
    "Shortcut",
    "az containerapp up"
   ]
  ]
 },
 "keep": "Container Apps from code: registry, build, app.",
 "acts": [
  "Create an Azure Container Registry",
  "Build the image and push it to the registry (az acr build)",
  "Create the Container Apps app from the image, with an identity that has AcrPull",
  "Create an App Service plan",
  "Create an availability set"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D3-200",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to set up HTTPS on the domain www.fabrikam.com for WebApp25, with a free managed certificate. WebApp25 is in a Free plan.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>The Free plan doesn't support custom domains: you <b>move to Basic</b>. You create the verification and routing <b>DNS records</b>, <b>add the domain</b>, then create the <b>managed certificate</b> and the <b>TLS binding</b> (SNI).</p><p>A managed certificate can't be exported, and no slot is needed.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp25"
  ],
  "title": "WebApp25 | Custom domains",
  "menu": [
   "*Custom domains",
   "Certificates"
  ],
  "rows": [
   [
    "Plan",
    "Basic (required)"
   ],
   [
    "*www.fabrikam.com",
    "SNI binding · managed certificate"
   ]
  ]
 },
 "keep": "Free HTTPS: Basic, DNS, domain, managed certificate + binding.",
 "acts": [
  "Move the plan to the Basic tier or higher",
  "Create the CNAME and TXT asuid.www DNS records",
  "Add the custom domain www.fabrikam.com to WebApp25",
  "Create an App Service managed certificate and bind it with an SNI binding",
  "Create a deployment slot",
  "Export the managed certificate"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D3-206",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You use deployment slots on WebApp27.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A deployment slot has its own URL.",
   "a": 0
  },
  {
   "l": "Slots use the instances of the same App Service plan.",
   "a": 0
  },
  {
   "l": "A slot can be placed in a different region from the app.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Own URL: Yes</b>, for example <code>webapp27-staging.azurewebsites.net</code>.</li><li><b>Same plan: Yes.</b> A slot consumes the resources of the app's plan.</li><li><b>Other region: No.</b> Slots are in the same plan, hence the same region.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "WebApp27"
  ],
  "title": "WebApp27 | Deployment slots",
  "menu": [
   "*Deployment slots"
  ],
  "rows": [
   [
    "*staging",
    "webapp27-staging.azurewebsites.net"
   ],
   [
    "Plan / region",
    "The app's"
   ]
  ]
 },
 "keep": "Slot = own URL, same plan, same region."
},
{
 "id": "D3-207",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You manage ARM and Bicep templates.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A Bicep file is compiled to ARM JSON before deployment.",
   "a": 0
  },
  {
   "l": "Incremental mode deletes resources missing from the template.",
   "a": 1
  },
  {
   "l": "Redeploying the same template unchanged doesn't duplicate resources.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Compilation: Yes.</b> Bicep is transpiled to ARM JSON (automatically by Azure CLI and PowerShell).</li><li><b>Incremental and deletion: No.</b> It's Complete mode that deletes.</li><li><b>Idempotence: Yes.</b> Deployments are <b>idempotent</b>: redeploying the same template gives the same result.</li></ul>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Deployment",
  "rows": [
   [
    "*Bicep",
    "Compiled to ARM JSON"
   ],
   [
    "Incremental",
    "Deletes nothing"
   ],
   [
    "Redeployment",
    "Idempotent"
   ]
  ]
 },
 "keep": "Bicep → JSON; Incremental doesn't delete; deployments are idempotent."
},
{
 "id": "D3-208",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You manage a VM with a temporary disk.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "The temporary disk's content survives a simple restart of the VM from the operating system.",
   "a": 0
  },
  {
   "l": "The temporary disk's content survives a stop with deallocation.",
   "a": 1
  },
  {
   "l": "The temporary disk is included in the VM's Azure Backup backups.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Restart: Yes</b>, usually: the VM stays on the same host. (It's not guaranteed during maintenance, though.)</li><li><b>Deallocation: No.</b> The VM may restart on another host: the temporary disk is empty.</li><li><b>Backup: No.</b> Azure Backup doesn't back up the temporary disk.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*Temporary disk",
    "Lost on deallocation; not backed up"
   ]
  ]
 },
 "keep": "Temporary disk: usually survives a restart, never a deallocation; no backup."
},
{
 "id": "D3-209",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You review the following partial definition of a VM in an ARM template:</p><pre>\"storageProfile\": {\n  \"imageReference\": { \"publisher\": \"MicrosoftWindowsServer\", \"offer\": \"WindowsServer\", \"sku\": \"2022-datacenter-azure-edition\", \"version\": \"latest\" },\n  \"osDisk\": { \"createOption\": \"FromImage\", \"caching\": \"ReadWrite\", \"managedDisk\": { \"storageAccountType\": \"StandardSSD_LRS\" } },\n  \"dataDisks\": [ { \"lun\": 0, \"createOption\": \"Empty\", \"diskSizeGB\": 1024, \"caching\": \"ReadOnly\", \"managedDisk\": { \"storageAccountType\": \"Premium_LRS\" } } ]\n}</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "OS disk type:",
   "o": [
    "Premium SSD",
    "Standard HDD",
    "Standard SSD"
   ],
   "a": 2
  },
  {
   "l": "The data disk is:",
   "o": [
    "a copy of the image",
    "a new empty 1 TiB disk",
    "an existing disk"
   ],
   "a": 1
  },
  {
   "l": "The data disk's caching suits:",
   "o": [
    "log writes",
    "the temporary disk",
    "frequent reads"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><code>StandardSSD_LRS</code>: <b>Standard SSD</b>.</li><li><code>createOption: Empty</code>: an <b>empty disk</b> of 1,024 GiB (1 TiB). <code>Attach</code> would attach an existing disk; <code>FromImage</code> creates the disk from the image.</li><li><code>ReadOnly</code> caching: ideal for <b>frequent reads</b> (data files).</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "OS disk",
    "Standard SSD · Read/write"
   ],
   [
    "*Data disk LUN 0",
    "Premium SSD · 1 TiB · Read-only"
   ]
  ]
 },
 "keep": "StandardSSD_LRS = Standard SSD; Empty = new empty disk; ReadOnly = reads."
},
{
 "id": "D3-210",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You deploy containers with the following command:</p><pre>az container create --resource-group RG1 --name batch1 \\\n  --image contoso.azurecr.io/batch:2.1 --cpu 2 --memory 4 \\\n  --restart-policy OnFailure \\\n  --azure-file-volume-share-name results --azure-file-volume-account-name storage80 \\\n  --azure-file-volume-mount-path /mnt/results</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "If the job ends with code 0, the container:",
   "o": [
    "restarts",
    "stops",
    "is deleted with the group"
   ],
   "a": 1
  },
  {
   "l": "Files written to /mnt/results are stored:",
   "o": [
    "on the temporary disk",
    "in a blob container",
    "in the Azure Files share results"
   ],
   "a": 2
  },
  {
   "l": "The image is pulled from:",
   "o": [
    "Microsoft Container Registry",
    "Azure Container Registry",
    "Docker Hub"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>OnFailure</b>: with exit code 0 (success), the container stops without restarting. The group remains (in a terminated state) until it's deleted.</li><li>The mounted volume is the <b>Azure Files share</b> results.</li><li><code>contoso.azurecr.io</code>: an <b>ACR</b> registry.</li></ul>",
 "portal": {
  "path": [
   "Container instances",
   "batch1"
  ],
  "title": "batch1 | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Restart policy",
    "OnFailure → stopped after success"
   ],
   [
    "Volume",
    "Azure Files: results"
   ],
   [
    "Image",
    "contoso.azurecr.io (ACR)"
   ]
  ]
 },
 "keep": "OnFailure + code 0 = stop; volume = Azure Files share."
},
{
 "id": "D3-211",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You create a container registry for production. It must be replicated to West Europe and reachable only through a private endpoint. The admin account must stay disabled.</p><p>How should you configure the registry?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li><b>Premium</b>: the only tier that offers geo-replication and private endpoints.</li><li><b>Private access</b>: private endpoint, public access disabled.</li><li><b>Admin user</b>: left disabled; use identities with AcrPull and AcrPush.</li><li><b>Geo-replication</b> to West Europe.</li></ul>",
 "portal": {
  "path": [
   "Container registries",
   "Create"
  ],
  "title": "Create container registry",
  "menu": [
   "*Basics",
   "Networking"
  ],
  "rows": [
   [
    "*SKU",
    "Premium"
   ],
   [
    "*Connectivity",
    "Private access"
   ],
   [
    "Admin user",
    "Disabled"
   ],
   [
    "*Geo-replication",
    "West Europe"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Private, replicated production registry = Premium.",
 "win": {
  "title": "Create container registry",
  "sub": "Container registries",
  "rows": [
   {
    "k": "text",
    "l": "Registry name",
    "t": "contosoprod"
   },
   {
    "k": "select",
    "l": "Pricing plan (SKU)",
    "o": [
     "Basic",
     "Standard",
     "Premium"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Networking"
   },
   {
    "k": "radio",
    "l": "Connectivity",
    "opts": [
     "Public access (all networks)",
     "Private access (recommended)"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "head",
    "t": "After creation"
   },
   {
    "k": "check",
    "l": "Admin user",
    "d": false,
    "a": false
   },
   {
    "k": "select",
    "l": "Geo-replications",
    "o": [
     "None",
     "West Europe"
    ],
    "d": 0,
    "a": 1
   }
  ]
 }
},
{
 "id": "D3-212",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You create an Azure Container Apps app for a public API. It must be reachable on the internet over HTTPS on port 443 (the container listens on port 8080), and scale down to zero replicas at night.</p><p>How should you configure the app?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li><b>Ingress enabled</b>, traffic <b>from anywhere</b> (external). Container Apps exposes HTTPS on 443 and forwards to the container's <b>target port 8080</b>.</li><li><b>Minimum 0</b>: scale to zero replicas with no traffic.</li></ul><p>The maximum isn't scored here.</p>",
 "portal": {
  "path": [
   "Container Apps",
   "Create"
  ],
  "title": "Create container app",
  "menu": [
   "Basics",
   "*Ingress",
   "Scale"
  ],
  "rows": [
   [
    "*Ingress traffic",
    "From anywhere"
   ],
   [
    "*Target port",
    "8080"
   ],
   [
    "*Min replicas",
    "0"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "External ingress: HTTPS 443 → container's target port; min 0 = scale to zero.",
 "win": {
  "title": "Create container app",
  "sub": "Container Apps",
  "rows": [
   {
    "k": "head",
    "t": "Ingress"
   },
   {
    "k": "check",
    "l": "Ingress enabled",
    "a": true
   },
   {
    "k": "radio",
    "l": "Ingress traffic",
    "opts": [
     "Limited to Container Apps Environment",
     "Accepting traffic from anywhere"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Target port",
    "o": [
     "80",
     "443",
     "8080"
    ],
    "a": 2
   },
   {
    "k": "head",
    "t": "Scale"
   },
   {
    "k": "select",
    "l": "Min replicas",
    "o": [
     "0",
     "1",
     "3"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Max replicas",
    "o": [
     "1",
     "10",
     "300"
    ],
    "d": 1,
    "a": null
   }
  ]
 }
},
{
 "id": "D3-213",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to configure autoscale for the App Service plan that hosts WebApp28.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Scale out (App Service plan)",
 "expl": "<p><b>Scale out</b> sets the number of instances: manual or autoscale with rules. <b>Scale up</b> changes the plan's tier and size.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp28"
  ],
  "title": "WebApp28 | Scale out (App Service plan)",
  "menu": [
   "Scale up (App Service plan)",
   "*Scale out (App Service plan)"
  ],
  "rows": [
   [
    "*Method",
    "Custom autoscale"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Instance count = Scale out; size and tier = Scale up.",
 "win": {
  "title": "WebApp28 | App Service",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log"
    ]
   },
   {
    "g": "Deployment",
    "items": [
     "Deployment slots",
     "Deployment Center"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Environment variables",
     "Configuration",
     "Networking",
     "Scale up (App Service plan)",
     "Scale out (App Service plan)",
     "Backups"
    ]
   }
  ]
 }
},
{
 "id": "D3-214",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to see the output of the Custom Script extension installed on VM40.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Extensions + applications",
 "expl": "<p><b>Extensions + applications</b> lists installed extensions, their status, and their detailed messages (output and error for Custom Script). You can also add or uninstall an extension there.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM40"
  ],
  "title": "VM40 | Extensions + applications",
  "menu": [
   "Disks",
   "*Extensions + applications"
  ],
  "rows": [
   [
    "*CustomScriptExtension",
    "Provisioning succeeded · View detailed status"
   ]
  ]
 },
 "keep": "An extension's output = Extensions + applications.",
 "win": {
  "title": "VM40 | Virtual machine",
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
     "Availability + scaling",
     "Configuration",
     "Identity"
    ]
   },
   {
    "g": "Help",
    "items": [
     "Boot diagnostics",
     "Serial console",
     "Run command"
    ]
   }
  ]
 }
},
{
 "id": "D3-215",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>VM41 is in a <b>Failed</b> state after an interrupted operation. You want to bring it back to a consistent state without moving it or losing data.</p><p>For each of the following actions, select Yes if it can help. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Rerun the last operation (for example a resize)",
   "a": 0
  },
  {
   "l": "Reapply the VM's state",
   "a": 0
  },
  {
   "l": "Export the OS disk",
   "a": 1
  },
  {
   "l": "Delete the VM and its disks, then recreate it from a template",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Reapply: yes.</b> It reruns the VM's provisioning on the same host, often enough to leave the Failed state.</li><li><b>Rerun the operation: yes.</b> A VM update (even with no change) often brings the state back to consistency.</li><li><b>Delete: no</b>, destructive.</li><li><b>Export: no</b>, fixes nothing.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM41"
  ],
  "title": "VM41 | Redeploy + reapply",
  "menu": [
   "*Redeploy + reapply"
  ],
  "rows": [
   [
    "Status",
    "Failed"
   ],
   [
    "*Reapply",
    "Same host, state resynchronized"
   ]
  ],
  "btn": "Reapply"
 },
 "keep": "VM in Failed state = Reapply or rerun the operation."
},
{
 "id": "D3-216",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You need to let a web app read Key Vault secrets without storing credentials.</p><p>For each of the following actions, select Yes if it's required. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Put the vault's access key in an app setting",
   "a": 1
  },
  {
   "l": "Key Vault Secrets User for that identity",
   "a": 0
  },
  {
   "l": "Enable the system-assigned managed identity",
   "a": 0
  },
  {
   "l": "Contributor on the vault for all users",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Managed identity: yes</b>, it gives the app an Entra identity, with no secret.</li><li><b>Key Vault Secrets User: yes</b>, it allows reading secret values (vault in RBAC mode).</li><li>A vault has no “key” to put in settings. Contributor for everyone would be dangerous and doesn't grant secret access in RBAC mode.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Identity",
  "menu": [
   "*Identity"
  ],
  "rows": [
   [
    "*System assigned",
    "On"
   ],
   [
    "Role on the vault",
    "Key Vault Secrets User"
   ]
  ],
  "btn": "Save"
 },
 "keep": "App → Key Vault with no secret = managed identity + role on the vault."
}
);
