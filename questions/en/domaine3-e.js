/* Domain 3: compute (batch E : D3-177 to D3-230) */
AZ.questions.push(
{
 "id": "D3-177",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to create an Ubuntu VM with SSH key authentication, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az vm create --resource-group RG1 --name VM35 --image {0} --size Standard_B2s --admin-username azureuser {1}",
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
 "keep": "Linux VM with SSH key in the CLI = --generate-ssh-keys (or --ssh-key-values)."
},
{
 "id": "D3-178",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to resize VM36 to Standard_D4s_v5 with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az vm {0} --resource-group RG1 --name VM36 {1} Standard_D4s_v5",
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
 "keep": "Resizing in the CLI = az vm resize --size."
},
{
 "id": "D3-179",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to manually set the scale set VMSS7 to 6 instances, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az vmss {0} --resource-group RG1 --name VMSS7 {1} 6",
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
 "keep": "Manual instance count = az vmss scale --new-capacity."
},
{
 "id": "D3-180",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to attach a new 256 GiB data disk to VM37, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az vm disk {0} --resource-group RG1 --vm-name VM37 --name VM37-data1 {1} --size-gb 256 --sku Premium_LRS",
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
 "keep": "New attached disk in the CLI = az vm disk attach --new."
},
{
 "id": "D3-181",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to stop and deallocate VM38 with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0} -ResourceGroupName RG1 -Name VM38 {1}",
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
 "keep": "Stop-AzVM deallocates by default; -StayProvisioned doesn't."
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
  "It's impossible: VM-C must be recreated in AS1",
  "Move VM-C to AS1's resource group",
  "Restart VM-C",
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
 "id": "D3-185",
 "dom": 3,
 "type": "single",
 "stem": "<p>You manage a VM VM39 in zone 2. It uses a Standard SKU public IP address. You want the public IP address to survive the loss of any zone.</p><p>How must the public IP address be configured?</p>",
 "opts": [
  "Dynamic",
  "Zone-redundant",
  "Basic SKU",
  "Zonal in zone 2"
 ],
 "ans": 1,
 "expl": "<p>A Standard public IP address can be <b>zone-redundant</b> (served by all zones), <b>zonal</b> (tied to one zone), or non-zonal. A zone-redundant address stays available if a zone goes down.</p><p>The Basic SKU is retired and doesn't support zones.</p>",
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
    "*Availability zone",
    "Zone-redundant"
   ]
  ],
  "btn": "Create"
 },
 "keep": "IP that survives a zone = Standard, zone-redundant."
},
{
 "id": "D3-186",
 "dom": 3,
 "type": "single",
 "stem": "<p>An application needs 3 web VMs behind a load balancer, spread to withstand a zone failure. The budget allows no more than 3 VMs.</p><p>Which configuration offers the best availability?</p>",
 "opts": [
  "Three VMs in zone 1",
  "Three VMs in an availability set",
  "One VM in each of zones 1, 2, and 3, with a Standard load balancer",
  "Three VMs in a proximity placement group"
 ],
 "ans": 2,
 "expl": "<p>One VM per zone, behind a zone-redundant <b>Standard load balancer</b>: if a zone goes down, two VMs keep serving. 99.99% SLA.</p><p>An availability set withstands a rack failure but not a datacenter failure. Three VMs in the same zone share the same risk.</p>",
 "portal": {
  "path": [
   "Load balancers",
   "lb-web"
  ],
  "title": "lb-web | Backend pools",
  "menu": [
   "*Backend pools"
  ],
  "rows": [
   [
    "*VM-Z1, VM-Z2, VM-Z3",
    "One VM per zone"
   ],
   [
    "SKU",
    "Standard (zone-redundant)"
   ]
  ]
 },
 "keep": "3 VMs and zone resilience = 1 VM per zone + Standard load balancer."
},
{
 "id": "D3-187",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app receives very short spikes (a few seconds). You want new VMSS9 instances to be ready faster.</p><p>Which option can help?</p>",
 "opts": [
  "Lengthen the cool down",
  "Reduce the maximum instance count",
  "Switch to the Manual upgrade policy",
  "Use a preconfigured custom image (gallery) rather than lengthy extension configuration at startup"
 ],
 "ans": 3,
 "expl": "<p>A <b>preconfigured</b> image (software already installed) avoids running long extensions on each new instance: the delay between the scale decision and the ready instance shrinks. You can also keep a higher minimum instance count.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS9"
  ],
  "title": "VMSS9 | Operating system",
  "rows": [
   [
    "*Image",
    "Azure Compute Gallery · app-ready:2.0"
   ],
   [
    "Startup extensions",
    "Reduced"
   ]
  ]
 },
 "keep": "Instances ready faster = preconfigured image."
},
{
 "id": "D3-188",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy a new image version to VMSS10, which uses the <b>Manual</b> upgrade policy. Existing instances keep the old image.</p><p>What should you do?</p>",
 "opts": [
  "Upgrade the instances (for example az vmss update-instances --instance-ids '*')",
  "Redeploy the VMSS",
  "Increase the cool down",
  "Nothing: they'll be updated at the next restart"
 ],
 "ans": 0,
 "expl": "<p>In <b>Manual</b> mode, the set's model is updated, but each instance keeps the old model until you <b>upgrade</b> it (portal: Upgrade, or CLI <code>az vmss update-instances</code>). New instances created by scaling use the new model directly.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS10",
   "Instances"
  ],
  "title": "Instances",
  "rows": [
   [
    "*Latest model applied",
    "No"
   ]
  ],
  "btn": "Upgrade"
 },
 "keep": "Manual mode = upgrade instances yourself."
},
{
 "id": "D3-189",
 "dom": 3,
 "type": "single",
 "stem": "<p>You restored an App Service backup of WebApp23 to a new app, WebApp23-test, to investigate a problem.</p><p>Which feature did you use?</p>",
 "opts": [
  "A deployment slot",
  "Restore a backup to another app",
  "A Template Spec",
  "Azure Site Recovery"
 ],
 "ans": 1,
 "expl": "<p>An App Service backup can be restored to the original app, to a <b>slot</b>, or to <b>another app</b> (new or existing). It's handy for testing without touching production.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp23"
  ],
  "title": "WebApp23 | Backups › Restore",
  "menu": [
   "*Backups"
  ],
  "rows": [
   [
    "*Target",
    "Another app: WebApp23-test"
   ]
  ],
  "btn": "Restore"
 },
 "keep": "Restoring an App Service backup to another app = risk-free testing."
},
{
 "id": "D3-190",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to create a copy of WebApp24 (code and configuration) in another region, to prepare for global scale.</p><p>Which App Service feature fits best?</p>",
 "opts": [
  "Move the app to the other region from Properties",
  "Increase the number of instances",
  "Clone the app (or restore a backup to an app in the other region)",
  "A deployment slot in the other region"
 ],
 "ans": 2,
 "expl": "<p>App <b>cloning</b> (Standard tier or higher) creates a copy of the content and configuration in another plan, possibly in another region. You can also restore a backup to an app in another region.</p><p>A slot is always in the same region as its app. An app doesn't change region.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp24"
  ],
  "title": "WebApp24 | Clone app",
  "rows": [
   [
    "*Target plan",
    "ASP-Asia (Southeast Asia)"
   ],
   [
    "Content",
    "Code + configuration"
   ]
  ],
  "btn": "Clone"
 },
 "keep": "Copying an app to another region = cloning (or restore)."
},
{
 "id": "D3-191",
 "dom": 3,
 "type": "single",
 "stem": "<p>A containerized web app must be redeployed automatically each time a new app:latest image is pushed to ACR9.</p><p>What should you enable?</p>",
 "opts": [
  "Always On",
  "Geo-replication",
  "Auto swap",
  "Continuous deployment in Deployment Center (ACR webhook)"
 ],
 "ans": 3,
 "expl": "<p>With <b>continuous deployment</b> enabled for a container, App Service creates a <b>webhook</b> in ACR: on each push of the tracked image, the app pulls the new image and restarts.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp-Container"
  ],
  "title": "Deployment Center",
  "menu": [
   "*Deployment Center"
  ],
  "rows": [
   [
    "Source",
    "Azure Container Registry · app:latest"
   ],
   [
    "*Continuous deployment",
    "On (ACR webhook)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Redeploying on each image push = continuous deployment (ACR webhook)."
},
{
 "id": "D3-192",
 "dom": 3,
 "type": "single",
 "stem": "<p>Teams in Europe and Asia pull the same images from ACR10, located in France Central. Pulls from Asia are slow and incur data egress charges.</p><p>What should you do?</p>",
 "opts": [
  "Move ACR10 to Premium and enable geo-replication to an Asian region",
  "Enable the retention policy",
  "Increase the VM size in Asia",
  "Create a second, unrelated Basic registry"
 ],
 "ans": 0,
 "expl": "<p><b>Geo-replication</b> (Premium) creates replicas of the registry in other regions, with a single login name. Clients pull from the nearest replica: faster and with no cross-region egress charges. Pushes are replicated automatically.</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR10"
  ],
  "title": "ACR10 | Geo-replications",
  "menu": [
   "*Geo-replications"
  ],
  "rows": [
   [
    "France Central",
    "Home"
   ],
   [
    "*Southeast Asia",
    "Replica"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Nearby pulls for several regions = geo-replication (Premium)."
},
{
 "id": "D3-193",
 "dom": 3,
 "type": "single",
 "stem": "<p>The registry ACR11 must only be reachable from VNet5, through a private IP address.</p><p>What should you configure?</p>",
 "opts": [
  "The admin account",
  "A private endpoint (Premium tier) and disable public access",
  "A retention policy",
  "The Basic tier"
 ],
 "ans": 1,
 "expl": "<p>ACR <b>private endpoints</b> require the <b>Premium</b> tier. You then disable public network access. The private DNS zone is <code>privatelink.azurecr.io</code>.</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR11"
  ],
  "title": "ACR11 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Public access",
    "Disabled"
   ],
   [
    "*Private endpoint connections",
    "VNet5"
   ],
   [
    "DNS zone",
    "privatelink.azurecr.io"
   ]
  ]
 },
 "keep": "Private ACR = Premium + private endpoint."
},
{
 "id": "D3-194",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to deploy an Azure Container Apps application that reads a database password, without writing it in clear text in the app definition.</p><p>What should you use?</p>",
 "opts": [
  "A resource tag",
  "The revision name",
  "A Container Apps secret (optionally referenced from Key Vault), exposed as an environment variable",
  "A setting of the Log Analytics environment"
 ],
 "ans": 2,
 "expl": "<p>Container Apps manages <b>secrets</b> at the app level, which can reference a <b>Key Vault</b> secret with the app's managed identity. An environment variable references them with <code>secretRef</code>.</p>",
 "portal": {
  "path": [
   "Container Apps",
   "app1"
  ],
  "title": "app1 | Secrets",
  "menu": [
   "*Secrets"
  ],
  "rows": [
   [
    "*db-password",
    "Key Vault reference (managed identity)"
   ],
   [
    "Variable",
    "DB_PASSWORD → secretRef: db-password"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Secret in Container Apps = app secret (Key Vault possible) + secretRef."
},
{
 "id": "D3-195",
 "dom": 3,
 "type": "single",
 "stem": "<p>A developer wants to expose an API from an ACI container on port 8080.</p><p>What must he configure when creating the container group?</p>",
 "opts": [
  "An App Service plan",
  "A required load balancer",
  "A scale rule",
  "Port 8080 in the exposed ports of the container and the group (and a public IP address if the API must be on the internet)"
 ],
 "ans": 3,
 "expl": "<p>Ports to open are declared in the container and in the container group (<code>--ports 8080</code> parameter). A public IP address or a virtual network deployment makes the group reachable. No load balancer is needed.</p>",
 "portal": {
  "path": [
   "Container instances",
   "Create"
  ],
  "title": "Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Ports",
    "8080 / TCP"
   ],
   [
    "Networking type",
    "Public"
   ]
  ]
 },
 "keep": "Exposing an ACI port = declare it in the group's ports."
},
{
 "id": "D3-196",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to run a Windows container in Azure Container Instances.</p><p>Which constraint must you know?</p>",
 "opts": [
  "The container group can contain only one Windows container",
  "Windows containers aren't supported",
  "Windows containers require an Ultra disk",
  "Windows containers must be in an App Service plan"
 ],
 "ans": 0,
 "expl": "<p>ACI supports <b>Windows</b> containers, but a Windows group contains only <b>one</b> container. Features such as multi-container groups or some volumes are Linux-only.</p>",
 "portal": {
  "path": [
   "Container instances",
   "Create"
  ],
  "title": "Create container instance",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*OS type",
    "Windows · 1 container per group"
   ]
  ]
 },
 "keep": "Windows ACI = one container per group."
},
{
 "id": "D3-197",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate scaling option for each situation.</p><p>To answer, drag the appropriate option to each situation. Each option may be used once, more than once, or not at all.</p>",
 "srcLabel": "Options",
 "srcs": [
  "Scale up (vertical)",
  "Scale out (horizontal)",
  "Scheduled scaling"
 ],
 "tgtHead": [
  "Situation",
  "Option"
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
 "srcs": [
  "Fault domains",
  "Update domains",
  "Availability zones",
  "Azure Site Recovery to another region"
 ],
 "tgtHead": [
  "Protection",
  "Option"
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
 ],
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
 "keep": "Container Apps from code: registry, build, app."
},
{
 "id": "D3-200",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to set up HTTPS on the domain www.fabrikam.com for WebApp25, with a free managed certificate. WebApp25 is in a Free plan.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 ],
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
 "keep": "Free HTTPS: Basic, DNS, domain, managed certificate + binding."
},
{
 "id": "D3-201",
 "dom": 3,
 "type": "single",
 "stem": "<p>Your company must host web apps in a fully isolated environment, inside its own virtual network, with a very large number of instances.</p><p>What should you deploy?</p>",
 "opts": [
  "A Premium v3 plan with virtual network integration",
  "An App Service Environment v3 (Isolated v2 plans)",
  "ACI containers",
  "A Standard plan with access restrictions"
 ],
 "ans": 1,
 "expl": "<p>An <b>App Service Environment</b> v3 is a <b>single-tenant</b> App Service deployment, injected into a subnet of your virtual network, with <b>Isolated v2</b> plans. It suits strong isolation and large-scale requirements.</p><p>A Premium plan's virtual network integration only concerns outbound traffic; the infrastructure stays shared.</p>",
 "portal": {
  "path": [
   "App Service Environments",
   "Create"
  ],
  "title": "Create App Service Environment v3",
  "rows": [
   [
    "*Virtual network",
    "VNet-ASE / snet-ase"
   ],
   [
    "Plans",
    "Isolated v2"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Full isolation in your VNet = App Service Environment v3."
},
{
 "id": "D3-202",
 "dom": 3,
 "type": "single",
 "stem": "<p>A developer wants to deploy his code to a web app over FTPS. The connection is refused.</p><p>Which App Service setting should you check?</p>",
 "opts": [
  "Always On",
  "ARR affinity",
  "The FTP state (FTP/FTPS allowed, FTPS only, or disabled) and basic publishing credentials",
  "Health check"
 ],
 "ans": 2,
 "expl": "<p>In <b>Configuration > General settings</b>, the <b>FTP state</b> can be set to “FTPS only” or “Disabled”, and basic authentication (used by FTP) can be disabled. For security, Microsoft recommends disabling FTP and preferring other deployment methods.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "Configuration › General settings",
  "rows": [
   [
    "*FTP state",
    "FTPS only"
   ],
   [
    "FTP basic auth publishing credentials",
    "On"
   ]
  ],
  "btn": "Save"
 },
 "keep": "FTP refused = FTP state or basic authentication disabled."
},
{
 "id": "D3-203",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want all HTTP requests to WebApp26 to be redirected to HTTPS.</p><p>Which setting should you enable?</p>",
 "opts": [
  "ARR affinity",
  "Always On",
  "Minimum TLS version 1.0",
  "HTTPS only"
 ],
 "ans": 3,
 "expl": "<p>The <b>HTTPS only</b> setting automatically redirects HTTP requests to HTTPS. You also set the <b>minimum TLS version</b> (1.2 recommended) to reject older protocols.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp26"
  ],
  "title": "Configuration › General settings",
  "rows": [
   [
    "*HTTPS only",
    "On"
   ],
   [
    "Minimum TLS version",
    "1.2"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Redirecting HTTP to HTTPS = HTTPS only."
},
{
 "id": "D3-204",
 "dom": 3,
 "type": "single",
 "stem": "<p>A Linux web app must run a .NET image with a custom startup command.</p><p>Where should you specify the command?</p>",
 "opts": [
  "Configuration > General settings > Startup command",
  "In the App Service plan",
  "In an Azure tag",
  "In Deployment Center only"
 ],
 "ans": 0,
 "expl": "<p>For Linux apps, the <b>startup command</b> is set in the configuration's general settings (or with <code>az webapp config set --startup-file</code>).</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp-Linux"
  ],
  "title": "Configuration › General settings",
  "rows": [
   [
    "*Startup command",
    "dotnet MyApp.dll"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Linux startup command = General settings."
},
{
 "id": "D3-205",
 "dom": 3,
 "type": "single",
 "stem": "<p>The App Service plan ASP4 (Standard S1, 3 instances) hosts 6 apps. One of them uses almost all the CPU and slows down the others.</p><p>What is the best solution?</p>",
 "opts": [
  "Enable ARR affinity",
  "Move the resource-hungry app to its own plan",
  "Add a deployment slot",
  "Disable Always On"
 ],
 "ans": 1,
 "expl": "<p>All apps in a plan share the same instances. Isolating the resource-hungry app in a <b>dedicated plan</b> lets you scale it separately without penalizing the others.</p><p>Note: deployment slots also share the plan's resources.</p>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP-Dedicated"
  ],
  "title": "Create App Service plan",
  "rows": [
   [
    "*App moved",
    "hungry-app"
   ],
   [
    "Tier",
    "As needed"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Neighbor app too hungry = move it to its own plan."
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
 },
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
 "keep": "Private, replicated production registry = Premium."
},
{
 "id": "D3-212",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You create an Azure Container Apps app for a public API. It must be reachable on the internet over HTTPS on port 443 (the container listens on port 8080), and scale down to zero replicas at night.</p><p>How should you configure the app?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 },
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
 "keep": "External ingress: HTTPS 443 → container's target port; min 0 = scale to zero."
},
{
 "id": "D3-213",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to configure autoscale for the App Service plan that hosts WebApp28.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "Instance count = Scale out; size and tier = Scale up."
},
{
 "id": "D3-214",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to see the output of the Custom Script extension installed on VM40.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "An extension's output = Extensions + applications."
},
{
 "id": "D3-215",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>VM41 is in a <b>Failed</b> state after an interrupted operation. You want to bring it back to a consistent state without moving it or losing data.</p><p>Which <b>two</b> actions can help?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Rerun the last operation (for example a resize or VM update)",
  "Reapply the VM's state",
  "Export the OS disk",
  "Delete the VM and its disks"
 ],
 "ans": [
  0,
  1
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to let a web app read Key Vault secrets without storing credentials.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Put the vault's key in an app setting",
  "Assign that identity the Key Vault Secrets User role on the vault",
  "Enable the web app's system-assigned managed identity",
  "Assign the Contributor role on the vault to all users"
 ],
 "ans": [
  1,
  2
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
},
{
 "id": "D3-217",
 "dom": 3,
 "type": "single",
 "stem": "<p>A critical application runs on VM42, with no redundancy. You want to be warned 15 minutes before planned maintenance that will restart the host, to shut the application down cleanly.</p><p>What should you use in the VM?</p>",
 "opts": [
  "The serial console",
  "Boot diagnostics",
  "The Scheduled Events service (instance metadata)",
  "A budget alert"
 ],
 "ans": 2,
 "expl": "<p><b>Scheduled Events</b>, exposed by the Instance Metadata Service (IMDS, <code>169.254.169.254</code>), informs the VM of upcoming events (reboot, redeploy, Spot eviction) with advance notice. The application can prepare for them.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM42"
  ],
  "title": "Instance Metadata Service",
  "rows": [
   [
    "*Endpoint",
    "http://169.254.169.254/metadata/scheduledevents"
   ],
   [
    "Events",
    "Reboot, Redeploy, Freeze, Preempt"
   ]
  ]
 },
 "keep": "Maintenance notice inside the VM = Scheduled Events (IMDS)."
},
{
 "id": "D3-218",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want to control when platform updates are applied to the hosts of your dedicated VMs, within a 5-hour window on Sunday.</p><p>What should you configure?</p>",
 "opts": [
  "Boot diagnostics",
  "An availability set",
  "A Rolling upgrade policy",
  "A Maintenance Configuration with a scheduled window"
 ],
 "ans": 3,
 "expl": "<p><b>Maintenance Configurations</b> let you control platform updates for dedicated hosts and isolated VMs, or schedule guest patching, within a defined window.</p>",
 "portal": {
  "path": [
   "Maintenance Configurations",
   "Create"
  ],
  "title": "Create a maintenance configuration",
  "rows": [
   [
    "*Scope",
    "Host"
   ],
   [
    "Window",
    "Sunday 01:00 · 5 hours"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Controlling the maintenance window = maintenance configuration."
},
{
 "id": "D3-219",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to automatically apply Windows and Linux patches on 200 VMs, on a schedule, with a compliance report.</p><p>Which service should you use?</p>",
 "opts": [
  "Azure Update Manager",
  "Azure Advisor",
  "Azure Site Recovery",
  "Azure Resource Mover"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Update Manager</b> assesses missing updates, deploys them on schedules (maintenance configurations), and shows compliance, for Azure VMs and Arc servers. It replaces Azure Automation Update Management.</p>",
 "portal": {
  "path": [
   "Azure Update Manager"
  ],
  "title": "Azure Update Manager | Machines",
  "menu": [
   "Overview",
   "*Machines",
   "Schedules"
  ],
  "rows": [
   [
    "*Schedule",
    "Patch-Tuesday · 200 machines"
   ],
   [
    "Compliance",
    "Missing updates"
   ]
  ]
 },
 "keep": "Scheduled patching and compliance = Azure Update Manager."
},
{
 "id": "D3-220",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy 20 VMs with an ARM template. The deployment fails with a regional vCPU quota error.</p><p>What should you do?</p>",
 "opts": [
  "Add a dependsOn",
  "Request a vCPU quota increase for the family and region, or choose another size family",
  "Create a new resource group",
  "Switch to Complete mode"
 ],
 "ans": 1,
 "expl": "<p>vCPU <b>quotas</b> (regional total and per family) limit the number of VMs. You request an increase in <b>Usage + quotas</b>, or choose a family that still has quota. The deployment mode and resource group change nothing.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Usage + quotas",
  "menu": [
   "*Usage + quotas"
  ],
  "rows": [
   [
    "*Total Regional vCPUs",
    "100 / 100"
   ],
   [
    "Standard DSv5 Family vCPUs",
    "40 / 40"
   ]
  ],
  "btn": "New quota request"
 },
 "keep": "vCPU quota error = quota increase or another family."
},
{
 "id": "D3-221",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want development VMs to shut down every evening at 7 PM, with a notification to developers 30 minutes before.</p><p>Which VM feature should you configure?</p>",
 "opts": [
  "Redeploy",
  "Boot diagnostics",
  "Auto-shutdown with notification",
  "Availability set"
 ],
 "ans": 2,
 "expl": "<p><b>Auto-shutdown</b> stops and deallocates the VM every day at the chosen time (with the time zone), and can send an email or webhook notification before shutdown.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Dev1"
  ],
  "title": "VM-Dev1 | Auto-shutdown",
  "menu": [
   "*Auto-shutdown"
  ],
  "rows": [
   [
    "*Scheduled shutdown",
    "7:00 PM"
   ],
   [
    "Send notification",
    "Yes · 30 minutes before"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Daily shutdown + notice = Auto-shutdown."
},
{
 "id": "D3-222",
 "dom": 3,
 "type": "single",
 "stem": "<p>You review the sizes Standard_D2s_v5 and Standard_D2as_v5.</p><p>What does the letter <b>a</b> in D2<b>a</b>s_v5 mean?</p>",
 "opts": [
  "Accelerated networking",
  "An ARM VM",
  "An included Ultra disk",
  "An AMD processor"
 ],
 "ans": 3,
 "expl": "<p>In size names, <b>a</b> means an <b>AMD</b> processor, <b>s</b> Premium storage support, <b>d</b> a local temporary disk, <b>p</b> an ARM processor, <b>l</b> reduced memory. The number (2) is the vCPU count, and v5 the version.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Select a size",
  "rows": [
   [
    "*a",
    "AMD"
   ],
   [
    "s",
    "Premium storage"
   ],
   [
    "d",
    "Local temporary disk"
   ],
   [
    "p",
    "ARM"
   ]
  ]
 },
 "keep": "Size letters: a AMD, s Premium, d local disk, p ARM, l low memory."
},
{
 "id": "D3-223",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want D-series VMs with a local temporary disk. Which size includes a temporary disk?</p>",
 "opts": [
  "Standard_D4ds_v5",
  "Standard_D4ps_v5",
  "Standard_D4s_v5",
  "Standard_D4as_v5"
 ],
 "ans": 0,
 "expl": "<p>The letter <b>d</b> (D4<b>d</b>s_v5) indicates a <b>local temporary disk</b>. Since the v4 generation, sizes without “d” no longer have a temporary disk.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Select a size",
  "rows": [
   [
    "*Standard_D4ds_v5",
    "With temporary disk"
   ],
   [
    "Standard_D4s_v5",
    "No temporary disk"
   ]
  ]
 },
 "keep": "“d” in the name = local temporary disk."
},
{
 "id": "D3-224",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app stores user sessions in memory, on the instance. You go from 1 to 3 instances and users are randomly signed out.</p><p>Which quick fix can you apply?</p>",
 "opts": [
  "Enable HTTPS only",
  "Enable ARR affinity (sticky sessions)",
  "Disable Always On",
  "Move to the Basic plan"
 ],
 "ans": 1,
 "expl": "<p><b>ARR affinity</b> sends each user back to the same instance with a cookie: the in-memory session stays available. The real long-term fix is to store sessions outside the instance (for example Azure Cache for Redis).</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "Configuration › General settings",
  "rows": [
   [
    "*ARR affinity",
    "On"
   ]
  ],
  "btn": "Save"
 },
 "keep": "In-memory sessions on several instances = ARR affinity (until Redis)."
},
{
 "id": "D3-225",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app's logs must be kept for 90 days and queried with KQL along with those of other resources.</p><p>What should you configure?</p>",
 "opts": [
  "Application logging to the file system",
  "Log stream",
  "A diagnostic setting to a Log Analytics workspace (AppServiceHTTPLogs, AppServiceConsoleLogs… categories)",
  "Scheduled backups"
 ],
 "ans": 2,
 "expl": "<p>A <b>diagnostic setting</b> sends App Service logs (HTTP, console, application, audit…) to <b>Log Analytics</b>, where you set retention and query them in KQL with other sources.</p><p>File system logging turns itself off after 12 hours. Log stream is live, with no retention.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Diagnostic settings",
  "menu": [
   "*Diagnostic settings"
  ],
  "rows": [
   [
    "*Categories",
    "AppServiceHTTPLogs, AppServiceConsoleLogs"
   ],
   [
    "Destination",
    "Log Analytics (90-day retention)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Retained, queryable logs = diagnostic setting to Log Analytics."
},
{
 "id": "D3-226",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to deploy several identical VMs in a region where a size family is in high demand. You want to reserve the capacity in advance, without a 1- or 3-year price commitment.</p><p>What should you use?</p>",
 "opts": [
  "An Azure reservation (discount)",
  "Spot VMs",
  "A proximity placement group",
  "An on-demand capacity reservation"
 ],
 "ans": 3,
 "expl": "<p>An <b>on-demand capacity reservation</b> guarantees that compute capacity will be available for a size and region (or zone), billed at the normal rate as long as it exists, with no term commitment.</p><p>An <b>Azure reservation</b> is a <b>discount</b> in exchange for a commitment, with no capacity guarantee (unless the priority option is chosen). Spot VMs are the opposite: no guarantee.</p>",
 "portal": {
  "path": [
   "Capacity reservation groups",
   "Create"
  ],
  "title": "Create a capacity reservation",
  "rows": [
   [
    "*Size",
    "Standard_D8s_v5"
   ],
   [
    "Quantity",
    "20"
   ],
   [
    "Commitment",
    "None"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Guaranteed capacity with no commitment = on-demand capacity reservation."
},
{
 "id": "D3-227",
 "dom": 3,
 "type": "single",
 "stem": "<p>A team wants a Windows desktop VM reachable from a browser, with minimal management, for 50 users sharing the same session hosts.</p><p>Which service fits best?</p>",
 "opts": [
  "Azure Virtual Desktop",
  "Azure Container Instances",
  "Azure Batch",
  "Azure App Service"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Virtual Desktop</b> provides virtual Windows desktops and apps, with shared multi-session hosts, reachable through a client or browser. This service isn't central to AZ-104, but it's good to recognize it among the other compute options.</p>",
 "portal": {
  "path": [
   "Azure Virtual Desktop"
  ],
  "title": "Host pools › Create",
  "rows": [
   [
    "*Host pool type",
    "Pooled (multi-session)"
   ],
   [
    "Access",
    "Client or browser"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Shared virtual Windows desktops = Azure Virtual Desktop."
},
{
 "id": "D3-228",
 "dom": 3,
 "type": "single",
 "stem": "<p>An application runs on a single VM. You want it automatically replicated to another region, with failover in minutes in case of disaster.</p><p>Which service should you configure?</p>",
 "opts": [
  "Azure Backup only",
  "Azure Site Recovery",
  "A deployment slot",
  "An availability set"
 ],
 "ans": 1,
 "expl": "<p><b>Azure Site Recovery</b> continuously replicates the VM's disks to a target region and allows a <b>failover</b> (and failback) with an RPO of seconds to minutes.</p><p>Azure Backup lets you restore, but with a longer delay and an RPO tied to backup frequency.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-App"
  ],
  "title": "VM-App | Disaster recovery",
  "menu": [
   "*Disaster recovery"
  ],
  "rows": [
   [
    "*Target region",
    "West Europe"
   ],
   [
    "Replication",
    "Continuous"
   ]
  ],
  "btn": "Review + Start replication"
 },
 "keep": "VM failover to another region = Azure Site Recovery."
},
{
 "id": "D3-229",
 "dom": 3,
 "type": "single",
 "stem": "<p>You manage VMSS11's applications with a template. A new software version must be installed on all instances, including future ones.</p><p>Where should you define it?</p>",
 "opts": [
  "In a tag",
  "On each instance, by hand",
  "In the scale set model (image or extension), then upgrade the instances",
  "In the App Service plan"
 ],
 "ans": 2,
 "expl": "<p>The set's <b>model</b> (image, extensions, VM applications) describes all instances. You update it, then <b>upgrade</b> the existing instances according to the upgrade policy. New instances use the new model automatically.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS11"
  ],
  "title": "VMSS11 | Extensions + applications",
  "menu": [
   "*Extensions + applications"
  ],
  "rows": [
   [
    "*VM application",
    "software:3.2 (model)"
   ],
   [
    "Instances",
    "To be upgraded"
   ]
  ]
 },
 "keep": "Anything that must be on every instance = in the set's model."
},
{
 "id": "D3-230",
 "dom": 3,
 "type": "single",
 "stem": "<p>A compute application needs 500 VMs for 2 hours every night for parallel simulations, then none.</p><p>Which solution fits best?</p>",
 "opts": [
  "A single ACI container",
  "An App Service Premium plan",
  "500 individual VMs running all the time",
  "A virtual machine scale set (or Azure Batch) that scales to 500 instances then back to 0"
 ],
 "ans": 3,
 "expl": "<p>A <b>virtual machine scale set</b> creates and deletes hundreds of identical VMs on demand (scheduled or automatic), down to zero. <b>Azure Batch</b> drives this kind of large-scale parallel compute. Combining with Spot VMs cuts cost further.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS-HPC"
  ],
  "title": "VMSS-HPC | Scaling",
  "menu": [
   "*Scaling"
  ],
  "rows": [
   [
    "*Night profile",
    "500 instances · 01:00-03:00"
   ],
   [
    "Day profile",
    "0 instances"
   ]
  ]
 },
 "keep": "Many identical VMs occasionally = VMSS (or Batch), down to zero."
}
);
