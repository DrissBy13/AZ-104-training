/* Domaine 3 : Calcul */
AZ.questions.push(
{
 "id": "D3-001",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy 10 virtual machines in an availability set configured with 2 fault domains and 5 update domains.</p><p>During planned Azure maintenance, what is the maximum number of virtual machines that can be unavailable at the same time?</p>",
 "opts": [
  "1",
  "2",
  "5",
  "10"
 ],
 "ans": 1,
 "expl": "<p>In an availability set, two concepts combine:</p><ul><li><b>Update domains</b>: groups of VMs restarted together during planned maintenance. Azure restarts only <b>one at a time</b>.</li><li><b>Fault domains</b>: groups of VMs sharing the same rack (power, network). They protect against hardware failures, not maintenance.</li></ul><p>10 VMs spread across 5 update domains = 2 VMs per domain. During maintenance, at most <b>2 VMs</b> are unavailable at the same time.</p>",
 "portal": {
  "path": [
   "Availability sets",
   "AS1"
  ],
  "title": "AS1 | Overview",
  "menu": [
   "*Overview",
   "Properties"
  ],
  "rows": [
   [
    "Fault domains",
    "2"
   ],
   [
    "*Update domains",
    "5"
   ],
   [
    "VMs per update domain",
    "2"
   ]
  ]
 },
 "keep": "Planned maintenance = 1 update domain at a time. Hardware failure = 1 fault domain."
},
{
 "id": "D3-002",
 "dom": 3,
 "type": "hot",
 "stem": "<p>A virtual machine scale set named VMSS1 has the following autoscale configuration:</p><ul><li>Minimum: 2 instances. Maximum: 10 instances.</li><li>If average CPU exceeds 75% for 10 minutes: add 2 instances.</li><li>If average CPU is below 25% for 10 minutes: remove 1 instance.</li></ul><p>How many instances will there be after the scale action? To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "3 instances, average CPU at 80% for 15 minutes:",
   "o": [
    "3",
    "4",
    "5",
    "6"
   ],
   "a": 2
  },
  {
   "l": "9 instances, average CPU at 85% for 15 minutes:",
   "o": [
    "9",
    "10",
    "11"
   ],
   "a": 1
  },
  {
   "l": "2 instances, average CPU at 10% for 15 minutes:",
   "o": [
    "1",
    "2",
    "3"
   ],
   "a": 1
  }
 ],
 "expl": "<p>Autoscale applies the rule, then <b>always respects the minimum and maximum limits</b>.</p><ul><li><b>3 instances, CPU at 80%</b>: scale-out rule, 3 + 2 = <b>5</b>.</li><li><b>9 instances, CPU at 85%</b>: 9 + 2 = 11, but the maximum is 10: <b>10</b>.</li><li><b>2 instances, CPU at 10%</b>: the rule would remove one instance, but the minimum is 2: <b>2</b> remain.</li></ul>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Scaling",
  "menu": [
   "Overview",
   "Instances",
   "*Scaling"
  ],
  "rows": [
   [
    "Instance limits",
    "Min 2 · Max 10"
   ],
   [
    "*Scale out",
    "CPU > 75% over 10 min → +2"
   ],
   [
    "Scale in",
    "CPU < 25% over 10 min → −1"
   ]
  ],
  "btn": "Save"
 },
 "keep": "The rule's result is always brought back between the minimum and maximum."
},
{
 "id": "D3-003",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You evaluate several virtual machine configurations.</p><p>Which connectivity SLA does Microsoft guarantee for each configuration? To answer, drag the appropriate value to each configuration. Each value may be used once, more than once, or not at all.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "srcLabel": "SLA",
 "tgtHead": [
  "Configuration",
  "SLA"
 ],
 "srcs": [
  "99.5%",
  "99.9%",
  "99.95%",
  "99.99%"
 ],
 "tgts": [
  {
   "l": "1 VM with all its disks on Premium SSD",
   "a": 1
  },
  {
   "l": "2 VMs in an availability set",
   "a": 2
  },
  {
   "l": "2 VMs in two different availability zones",
   "a": 3
  },
  {
   "l": "3 VMs in an availability set",
   "a": 2
  }
 ],
 "expl": "<p>VM connectivity SLAs, to know by heart:</p><ul><li><b>A single VM</b> with all its disks on Premium SSD (or Ultra, or Premium SSD v2): <b>99.9%</b>.</li><li><b>Two or more VMs in an availability set</b> (or spread across fault domains): <b>99.95%</b>. Going beyond 2 VMs changes nothing.</li><li><b>Two or more VMs in different availability zones</b>: <b>99.99%</b>.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "Create"
  ],
  "title": "Create a virtual machine | Availability",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "No redundancy (1 VM, Premium SSD)",
    "99.9%"
   ],
   [
    "Availability set",
    "99.95%"
   ],
   [
    "*Availability zones",
    "99.99%"
   ]
  ]
 },
 "keep": "99.9% (1 Premium VM) · 99.95% (availability set) · 99.99% (zones)."
},
{
 "id": "D3-004",
 "dom": 3,
 "type": "single",
 "docs": [
  {
   "t": "RG1",
   "h": "<p>Current content of RG1:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Type</th></tr><tr><td>VM1</td><td>Virtual machine</td></tr><tr><td>VM2</td><td>Virtual machine</td></tr></table></div>"
  },
  {
   "t": "Deployment",
   "h": "<p>The file vm1.json describes only one resource: VM1.</p><p>You run the following command:</p><pre class=\"code\">New-AzResourceGroupDeployment -ResourceGroupName RG1 `\n  -TemplateFile .\\vm1.json -Mode Complete</pre>"
  }
 ],
 "stem": "<p>You have the resource group RG1 shown in the RG1 document (click the <b>RG1</b> tab).</p><p>You deploy an ARM template as shown in the Deployment document (click the <b>Deployment</b> tab).</p><p>What is the result?</p>",
 "opts": [
  "VM1 is updated and VM2 is kept",
  "The deployment fails, because VM2 isn't in the template",
  "VM1 is updated and VM2 is deleted",
  "VM1 and VM2 are recreated"
 ],
 "ans": 2,
 "expl": "<p>An ARM deployment has two modes:</p><ul><li><b>Incremental</b> (default): resources in the template are created or updated; other resources in the group aren't touched.</li><li><b>Complete</b>: the resource group is aligned exactly with the template; any resource missing from the template is <b>deleted</b>.</li></ul><p>Here, the template contains only VM1, in Complete mode: VM1 is updated and <b>VM2 is deleted</b>. A dangerous trap in production.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Deployments",
  "menu": [
   "Overview",
   "*Deployments"
  ],
  "rows": [
   [
    "Mode",
    "Complete"
   ],
   [
    "VM1",
    "Updated"
   ],
   [
    "*VM2",
    "Deleted (not in the template)"
   ]
  ]
 },
 "keep": "Incremental = adds and updates. Complete = also deletes what isn't in the template."
},
{
 "id": "D3-005",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You have a virtual machine named VM1. You receive a notification that VM1's physical host will undergo maintenance.</p><p>You need to move VM1 to another physical host.</p><p>Which setting should you use? To answer, select the appropriate setting in the answer area.</p>",
 "win": {
  "title": "VM1 | Virtual machine",
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
     "Configuration"
    ]
   },
   {
    "g": "Operations",
    "items": [
     "Backup",
     "Disaster recovery",
     "Updates",
     "Run command"
    ]
   },
   {
    "g": "Help",
    "items": [
     "Redeploy + reapply",
     "Reset password",
     "Boot diagnostics"
    ]
   }
  ]
 },
 "ans": "Redeploy + reapply",
 "expl": "<p><b>Redeploy</b> stops the VM, moves it to <b>another host</b> in the same datacenter, then restarts it. It's the solution when the host is the problem. Note: the temporary disk is wiped.</p><p><b>Reapply</b>, in the same menu, reapplies the VM's state on the same host. <b>Size</b> changes the power (and may also move the VM, but that's not its purpose). <b>Disaster recovery</b> configures Azure Site Recovery to another region.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Redeploy + reapply",
  "menu": [
   "Overview",
   "Size",
   "*Redeploy + reapply"
  ],
  "rows": [
   [
    "*Redeploy",
    "New host, same datacenter"
   ],
   [
    "Reapply",
    "Same host"
   ],
   [
    "Note",
    "Temporary disk lost"
   ]
  ],
  "btn": "Redeploy"
 },
 "keep": "Changing physical host = Redeploy."
},
{
 "id": "D3-006",
 "dom": 3,
 "type": "single",
 "stem": "<p>You move VM1, with its disks and network interface, from the subscription Sub1 to the subscription Sub2, in the same tenant.</p><p>What changes for VM1?</p>",
 "opts": [
  "Its region",
  "Its size",
  "Its operating system",
  "Its resource ID"
 ],
 "ans": 3,
 "expl": "<p>The <b>resource ID</b> looks like <code>/subscriptions/&lt;id&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Compute/virtualMachines/VM1</code>. It contains the subscription and the resource group: it <b>changes</b> during the move. Scripts and alerts that use the old ID must be updated.</p><p>The region, size, and operating system don't change. To change region, you use Azure Resource Mover or Site Recovery.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Properties",
  "menu": [
   "Overview",
   "*Properties"
  ],
  "rows": [
   [
    "*Resource ID",
    "/subscriptions/<Sub2>/resourceGroups/RG2/…/VM1"
   ],
   [
    "Region",
    "Unchanged"
   ]
  ]
 },
 "keep": "A move changes the resource ID, never the region."
},
{
 "id": "D3-007",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You have an ARM template in JSON format named template.json. You need to convert it to a Bicep file.</p><p>How should you complete the command? To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az {0} {1} --file template.json",
 "rows": [
  {
   "o": [
    "deployment group",
    "bicep",
    "resource"
   ],
   "a": 1,
   "l": "Command group"
  },
  {
   "o": [
    "build",
    "create",
    "decompile",
    "export"
   ],
   "a": 2,
   "l": "Command"
  }
 ],
 "expl": "<p>The <b>az bicep</b> command group manages Bicep files:</p><ul><li><code>az bicep <b>decompile</b> --file template.json</code>: ARM JSON → Bicep.</li><li><code>az bicep <b>build</b> --file main.bicep</code>: Bicep → ARM JSON.</li></ul><p><code>az deployment group create</code> deploys a template (JSON or Bicep) to a resource group. Decompiling is “best effort”: review the result.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az bicep decompile",
    "JSON → Bicep"
   ],
   [
    "az bicep build",
    "Bicep → JSON"
   ]
  ]
 },
 "keep": "decompile = JSON to Bicep; build = Bicep to JSON."
},
{
 "id": "D3-008",
 "dom": 3,
 "type": "single",
 "stem": "<p>You create an Azure container registry named ACR1. Images must be replicated automatically to the France Central and West Europe regions, at the lowest cost.</p><p>Which service tier should you choose for ACR1?</p>",
 "opts": [
  "Basic",
  "Premium",
  "Standard",
  "Any tier"
 ],
 "ans": 1,
 "expl": "<p>Azure Container Registry has three tiers: <b>Basic</b>, <b>Standard</b>, and <b>Premium</b>. Only <b>Premium</b> offers <b>geo-replication</b> (one registry replicated across several regions), along with private endpoints and customer-managed keys.</p><p>Premium is therefore the cheapest tier that meets the need.</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR1"
  ],
  "title": "ACR1 | Geo-replications",
  "menu": [
   "Overview",
   "*Geo-replications"
  ],
  "rows": [
   [
    "*Tier",
    "Premium (required)"
   ],
   [
    "Regions",
    "France Central, West Europe"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "ACR geo-replication, private endpoints = Premium."
},
{
 "id": "D3-009",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to configure the custom domain www.contoso.com for the web app WebApp1, with a free TLS certificate managed by App Service. WebApp1 runs in a Standard tier plan.</p><p>Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Add and validate the custom domain in WebApp1",
  "Change the App Service plan to the Free tier",
  "Create the CNAME and TXT records at the DNS provider",
  "Add the TLS/SSL binding to the custom domain",
  "Create an MX record for www.contoso.com",
  "Create an App Service managed certificate for www.contoso.com"
 ],
 "seq": [
  2,
  0,
  5,
  3
 ],
 "expl": "<p>Logical order for a custom domain with a managed certificate:</p><ol><li>Create at the DNS provider the <b>CNAME</b> (www → webapp1.azurewebsites.net) and the <b>TXT</b> asuid.www (verification ID).</li><li><b>Add and validate</b> the domain in WebApp1.</li><li>Create the <b>App Service managed certificate</b> (free) for this domain.</li><li>Add the <b>TLS/SSL binding</b>.</li></ol><p>The Free tier doesn't support custom domains (the Standard plan does). An MX record is for mail.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Custom domains",
  "menu": [
   "Overview",
   "*Custom domains",
   "Certificates"
  ],
  "rows": [
   [
    "*www.contoso.com",
    "Secured · App Service managed certificate"
   ],
   [
    "DNS",
    "CNAME + TXT asuid.www"
   ]
  ],
  "btn": "+ Add custom domain"
 },
 "keep": "Custom domain: DNS (CNAME + TXT), add, certificate, binding."
},
{
 "id": "D3-010",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You need to deploy a web app in a Linux-based Docker container. The app must be able to scale out automatically and use deployment slots. The solution must minimize costs.</p><p>How should you configure the web app? To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create Web App",
  "sub": "Basics",
  "rows": [
   {
    "k": "head",
    "t": "Instance Details"
   },
   {
    "k": "text",
    "l": "Name",
    "t": "webapp1"
   },
   {
    "k": "select",
    "l": "Publish",
    "o": [
     "Code",
     "Container",
     "Static Web App"
    ],
    "a": 1
   },
   {
    "k": "radio",
    "l": "Operating System",
    "opts": [
     "Linux",
     "Windows"
    ],
    "a": 0
   },
   {
    "k": "head",
    "t": "Pricing plan"
   },
   {
    "k": "select",
    "l": "Pricing plan",
    "o": [
     "Free F1",
     "Basic B1",
     "Standard S1",
     "Premium P1v3"
    ],
    "a": 2
   }
  ]
 },
 "expl": "<ul><li><b>Publish: Container</b>, since you deploy a Docker image. (The runtime stack, such as .NET or Node, only matters in Code mode.)</li><li><b>Linux</b>, since the image is Linux-based.</li><li><b>Standard S1</b>: the cheapest tier that offers autoscale and deployment slots. Basic has neither; Premium has both, but costs more.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "Create"
  ],
  "title": "Create Web App",
  "menu": [
   "*Basics",
   "Container"
  ],
  "rows": [
   [
    "*Publish",
    "Container"
   ],
   [
    "*Operating System",
    "Linux"
   ],
   [
    "*Pricing plan",
    "Standard S1"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Autoscale + slots = Standard minimum. Docker image = Publish: Container."
},
{
 "id": "D3-011",
 "dom": 3,
 "type": "single",
 "stem": "<p>New virtual machines in your subscription must also encrypt their temporary disk and disk caches, without installing anything in the operating system.</p><p>What should you do first?</p>",
 "opts": [
  "Create a key vault and a key",
  "Enable Azure Disk Encryption on each VM",
  "Register the encryption at host feature on the subscription",
  "Convert the disks to Premium SSD"
 ],
 "ans": 2,
 "expl": "<p><b>Encryption at host</b> also encrypts the <b>temporary disk</b> and disk <b>caches</b>, on the physical host, with no agent or BitLocker in the VM.</p><p>Before enabling it on a VM, you must <b>register the EncryptionAtHost feature</b> on the subscription (<code>Register-AzProviderFeature -FeatureName EncryptionAtHost</code>).</p><p><b>Azure Disk Encryption</b> encrypts inside the OS (BitLocker or DM-Crypt): not what's asked. The disk type doesn't matter.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Preview features",
  "menu": [
   "Resource providers",
   "*Preview features"
  ],
  "rows": [
   [
    "*EncryptionAtHost",
    "Register"
   ],
   [
    "Then",
    "VM > Disks > Encryption at host: Yes"
   ]
  ],
  "btn": "Register"
 },
 "keep": "Temporary disk and caches encrypted with no agent = encryption at host (feature to register)."
}
);
