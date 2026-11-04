/* Domain 3: compute (batch D : D3-122 to D3-176) */
AZ.questions.push(
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
 "id": "D3-148",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the right tool for each task on a VM.</p><p>To answer, drag the appropriate tool to each task. Each tool may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tools",
 "tgtHead": [
  "Task",
  "Tool"
 ],
 "srcs": [
  "Custom Script extension",
  "Run command",
  "Reset password",
  "Redeploy",
  "Serial console"
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
 "keep": "Restoring an OS disk = disk from the snapshot + swap.",
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
 ]
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
 "keep": "Production with no public IP: administer through Bastion or VPN.",
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
 }
},
{
 "id": "D3-170",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You create a virtual machine scale set. Instances must be spread across zones 1, 2, and 3, update in batches with health checks, and be replaced automatically if they become unhealthy.</p><p>How should you configure the set?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Zones + Rolling + health/repairs = resilient scale set.",
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
 }
},
{
 "id": "D3-171",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to reset the SSH key of the azureuser account on the Linux VM VM32.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "Lost SSH key = Reset password (SSH key mode).",
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
 }
},
{
 "id": "D3-172",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to add a 512 GiB data disk to VM33.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "Adding a data disk = the VM's Disks page.",
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
 }
},
{
 "id": "D3-173",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You need to minimize the cost of a test environment of 10 VMs used only on weekdays from 8 AM to 6 PM.</p><p>For each of the following actions, select Yes if it's part of the solution. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Configure auto-shutdown at 6 PM",
   "a": 0
  },
  {
   "l": "Start the VMs at 8 AM with automation",
   "a": 0
  },
  {
   "l": "Buy 3-year reservations for the VMs",
   "a": 1
  },
  {
   "l": "Use Ultra disks instead of Premium",
   "a": 1
  }
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
}
);
