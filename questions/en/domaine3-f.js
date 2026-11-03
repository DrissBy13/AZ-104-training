/* Domain 3: compute (batch F: D3-231 to D3-250, exam-style exhibit questions) */
AZ.questions.push(
{
 "id": "D3-231",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Virtual machines exhibit (click the <b>Virtual machines</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Virtual machines",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Size</th><th>Region</th><th>Zone</th><th>Availability set</th><th>OS disk</th></tr><tr><td>VM1</td><td>Standard_D4s_v5</td><td>France Central</td><td>1</td><td>—</td><td>Premium SSD</td></tr><tr><td>VM2</td><td>Standard_D4s_v5</td><td>France Central</td><td>2</td><td>—</td><td>Premium SSD</td></tr><tr><td>VM3</td><td>Standard_D4_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>Standard SSD</td></tr><tr><td>VM4</td><td>Standard_D4s_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>Premium SSD</td></tr><tr><td>VM5</td><td>Standard_B2s</td><td>West Europe</td><td>—</td><td>—</td><td>Standard HDD</td></tr></table></div><p>AS1: 2 fault domains, 5 update domains. VM1 and VM2 sit behind a zone-redundant Standard load balancer; VM3 and VM4 behind another one.</p>"
  }
 ],
 "rows": [
  {
   "l": "You can attach a Premium SSD data disk to VM3.",
   "a": 1
  },
  {
   "l": "You can add VM1 to AS1.",
   "a": 1
  },
  {
   "l": "VM1 and VM2 are covered by the 99.99% SLA for VMs spread across zones.",
   "a": 0
  },
  {
   "l": "If a rack fails, at least one of VM3 and VM4 stays available.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Premium on VM3: No.</b> The D4_v5 size has no “s”: it doesn't support Premium storage. You'd need D4s_v5.</li><li><b>VM1 in AS1: No.</b> A VM can't be both zonal and in an availability set, and an existing VM can't be added to a set (it must be recreated).</li><li><b>99.99%: Yes.</b> Two or more instances in at least two zones of the same region.</li><li><b>Rack: Yes.</b> With 2 fault domains, Azure places VM3 and VM4 on different racks (separate power and network).</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM3"
  ],
  "title": "VM3 | Size",
  "menu": [
   "Overview",
   "Disks",
   "*Size",
   "Availability + scale"
  ],
  "rows": [
   [
    "*Standard_D4_v5",
    "Premium storage: not supported"
   ]
  ]
 },
 "keep": "“s” in the size = Premium allowed. Zone OR availability set, chosen at creation."
},
{
 "id": "D3-232",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Virtual machines exhibit (click the <b>Virtual machines</b> tab).</p><p>You're deploying three new applications. Which availability option fits each one?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Virtual machines",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Size</th><th>Region</th><th>Zone</th><th>Availability set</th><th>OS disk</th></tr><tr><td>VM1</td><td>Standard_D4s_v5</td><td>France Central</td><td>1</td><td>—</td><td>Premium SSD</td></tr><tr><td>VM2</td><td>Standard_D4s_v5</td><td>France Central</td><td>2</td><td>—</td><td>Premium SSD</td></tr><tr><td>VM3</td><td>Standard_D4_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>Standard SSD</td></tr><tr><td>VM4</td><td>Standard_D4s_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>Premium SSD</td></tr><tr><td>VM5</td><td>Standard_B2s</td><td>West Europe</td><td>—</td><td>—</td><td>Standard HDD</td></tr></table></div><p>AS1: 2 fault domains, 5 update domains. VM1 and VM2 sit behind a zone-redundant Standard load balancer; VM3 and VM4 behind another one.</p>"
  }
 ],
 "rows": [
  {
   "l": "Survive the loss of a datacenter in the region:",
   "o": [
    "Availability zones",
    "Availability set",
    "Proximity placement group"
   ],
   "a": 0
  },
  {
   "l": "Survive a rack failure, region without zones:",
   "o": [
    "Availability zones",
    "Availability set",
    "Proximity placement group"
   ],
   "a": 1
  },
  {
   "l": "Minimal network latency between compute VMs:",
   "o": [
    "Availability zones",
    "Availability set",
    "Proximity placement group"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Datacenter:</b> zones are separate datacenters in the same region.</li><li><b>Rack, no zones:</b> an availability set spreads VMs across fault domains (racks).</li><li><b>Latency:</b> a proximity placement group puts VMs physically close, at the cost of resilience.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Availability + scale",
  "menu": [
   "Overview",
   "Disks",
   "*Availability + scale",
   "Availability + scale"
  ],
  "rows": [
   [
    "*Availability zone",
    "1"
   ]
  ]
 },
 "keep": "Zone = datacenter. Availability set = rack. Proximity = latency."
},
{
 "id": "D3-233",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the environment shown in the Virtual machines exhibit (click the <b>Virtual machines</b> tab).</p><p>VM3 must get a Premium SSD data disk. It must stay in AS1.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Virtual machines",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Size</th><th>Region</th><th>Zone</th><th>Availability set</th><th>OS disk</th></tr><tr><td>VM1</td><td>Standard_D4s_v5</td><td>France Central</td><td>1</td><td>—</td><td>Premium SSD</td></tr><tr><td>VM2</td><td>Standard_D4s_v5</td><td>France Central</td><td>2</td><td>—</td><td>Premium SSD</td></tr><tr><td>VM3</td><td>Standard_D4_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>Standard SSD</td></tr><tr><td>VM4</td><td>Standard_D4s_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>Premium SSD</td></tr><tr><td>VM5</td><td>Standard_B2s</td><td>West Europe</td><td>—</td><td>—</td><td>Standard HDD</td></tr></table></div><p>AS1: 2 fault domains, 5 update domains. VM1 and VM2 sit behind a zone-redundant Standard load balancer; VM3 and VM4 behind another one.</p>"
  }
 ],
 "opts": [
  "Stop (deallocate) VM3, resize it to D4s_v5, then add the disk",
  "First convert VM3's OS disk to Premium SSD",
  "Recreate VM3 in zone 1 with the D4s_v5 size",
  "Add the Premium disk: the size changes automatically"
 ],
 "ans": 0,
 "expl": "<p>You need a Premium-capable size (with “s”). Resizing keeps the VM in AS1; if the new size isn't available on the set's hardware cluster, you must stop (deallocate) the set's VMs before resizing.</p><ul><li>The OS disk type isn't the issue: the size is the blocker.</li><li>Recreating VM3 in a zone would take it out of AS1.</li><li>Azure never changes the size by itself.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM3"
  ],
  "title": "VM3 | Size",
  "menu": [
   "Overview",
   "Disks",
   "*Size",
   "Availability + scale"
  ],
  "rows": [
   [
    "*Standard_D4s_v5",
    "Premium storage: supported"
   ]
  ]
 },
 "keep": "Premium disk refused? Check the size's “s”."
},
{
 "id": "D3-234",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Scaling exhibit (click the <b>Scaling</b> tab).</p><p>How many instances does VMSS1 have after a single autoscale evaluation in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Scaling",
   "h": "<p>Virtual machine scale set <b>VMSS1</b>: minimum 2, maximum 10, default 2 instances. Cool down: 5 minutes. Upgrade policy: <b>Manual</b>. Scale-in policy: <b>Default</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Rule</th><th>Condition</th><th>Action</th></tr><tr><td>Scale out</td><td>Average CPU &gt; 75% over 10 minutes</td><td>Add 2 instances</td></tr><tr><td>Scale in</td><td>Average CPU &lt; 25% over 10 minutes</td><td>Remove 1 instance</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "4 instances, average CPU at 80%:",
   "o": [
    "2",
    "4",
    "5",
    "6",
    "9",
    "10",
    "11"
   ],
   "a": 3
  },
  {
   "l": "9 instances, average CPU at 90%:",
   "o": [
    "2",
    "4",
    "5",
    "6",
    "9",
    "10",
    "11"
   ],
   "a": 5
  },
  {
   "l": "2 instances, average CPU at 10%:",
   "o": [
    "2",
    "4",
    "5",
    "6",
    "9",
    "10",
    "11"
   ],
   "a": 0
  },
  {
   "l": "5 instances, average CPU at 50%:",
   "o": [
    "2",
    "4",
    "5",
    "6",
    "9",
    "10",
    "11"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>4 at 80% → 6:</b> the scale-out rule adds 2 instances.</li><li><b>9 at 90% → 10:</b> +2 would give 11, but the <b>maximum</b> is 10.</li><li><b>2 at 10% → 2:</b> the <b>minimum</b> is 2, no instance is removed.</li><li><b>5 at 50% → 5:</b> no rule fires (between 25% and 75%).</li></ul>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Scaling",
  "menu": [
   "Overview",
   "Instances",
   "*Scaling",
   "Upgrade policy"
  ],
  "rows": [
   [
    "*Limits",
    "Min 2 · Max 10 · Default 2"
   ]
  ]
 },
 "keep": "Actions always stay between the minimum and maximum."
},
{
 "id": "D3-235",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Scaling exhibit (click the <b>Scaling</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Scaling",
   "h": "<p>Virtual machine scale set <b>VMSS1</b>: minimum 2, maximum 10, default 2 instances. Cool down: 5 minutes. Upgrade policy: <b>Manual</b>. Scale-in policy: <b>Default</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Rule</th><th>Condition</th><th>Action</th></tr><tr><td>Scale out</td><td>Average CPU &gt; 75% over 10 minutes</td><td>Add 2 instances</td></tr><tr><td>Scale in</td><td>Average CPU &lt; 25% over 10 minutes</td><td>Remove 1 instance</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "If you change the image in VMSS1's model, existing instances are updated automatically.",
   "a": 1
  },
  {
   "l": "Right after adding 2 instances, no new action can happen for 5 minutes.",
   "a": 0
  },
  {
   "l": "With the Default scale-in policy, Azure removes the newest instance first.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Model: No.</b> With the <b>Manual</b> policy, existing instances keep the old model until you upgrade them (for example <code>az vmss update-instances</code>). New instances use the new model.</li><li><b>Cool down: Yes.</b> After an action, autoscale waits for the cool down (5 minutes) before starting another one.</li><li><b>Default scale-in: No.</b> It first balances instances across zones and fault domains, then removes the instance with the highest ID. To remove the newest or oldest, choose NewestVM or OldestVM.</li></ul>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Instances",
  "menu": [
   "Overview",
   "*Instances",
   "Scaling"
  ],
  "rows": [
   [
    "*vmss1_3",
    "Latest model: No"
   ]
  ],
  "btn": "Upgrade"
 },
 "keep": "Manual policy = upgrade instances by hand. Default scale-in ≠ newest."
},
{
 "id": "D3-236",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the environment shown in the Scaling exhibit (click the <b>Scaling</b> tab).</p><p>During scale-in, VMSS1 must keep the newest instances, which carry the latest fixes.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Scaling",
   "h": "<p>Virtual machine scale set <b>VMSS1</b>: minimum 2, maximum 10, default 2 instances. Cool down: 5 minutes. Upgrade policy: <b>Manual</b>. Scale-in policy: <b>Default</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Rule</th><th>Condition</th><th>Action</th></tr><tr><td>Scale out</td><td>Average CPU &gt; 75% over 10 minutes</td><td>Add 2 instances</td></tr><tr><td>Scale in</td><td>Average CPU &lt; 25% over 10 minutes</td><td>Remove 1 instance</td></tr></table></div>"
  }
 ],
 "opts": [
  "Set the scale-in policy to OldestVM",
  "Set the scale-in policy to NewestVM",
  "Enable scale-in protection on every instance",
  "Set the upgrade policy to Automatic"
 ],
 "ans": 0,
 "expl": "<p><b>OldestVM</b> removes the <b>oldest</b> instances first, so it keeps the newest ones (after balancing across zones).</p><ul><li>NewestVM does the opposite.</li><li>Protecting every instance would block any scale-in.</li><li>The upgrade policy doesn't choose which instances are removed.</li></ul>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Scaling",
  "menu": [
   "Overview",
   "Instances",
   "*Scaling",
   "Upgrade policy"
  ],
  "rows": [
   [
    "*Limits",
    "Min 2 · Max 10 · Default 2"
   ]
  ]
 },
 "keep": "OldestVM = removes the oldest. NewestVM = removes the newest."
},
{
 "id": "D3-237",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the App Service exhibit (click the <b>App Service</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "App Service",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Plan</th><th>OS</th><th>Tier</th><th>Region</th><th>Resource group</th><th>Zone redundancy</th></tr><tr><td>ASP1</td><td>Windows</td><td>Standard S1 (3 instances)</td><td>France Central</td><td>RG1</td><td>No</td></tr><tr><td>ASP2</td><td>Linux</td><td>Basic B1</td><td>France Central</td><td>RG1</td><td>No</td></tr><tr><td>ASP3</td><td>Windows</td><td>Free F1</td><td>West Europe</td><td>RG2</td><td>No</td></tr><tr><td>ASP4</td><td>Windows</td><td>Premium v3 P1v3 (3 instances)</td><td>France Central</td><td>RG1</td><td>Yes</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>App</th><th>Plan</th><th>Slots</th></tr><tr><td>App1</td><td>ASP1</td><td>production, staging</td></tr><tr><td>App2</td><td>ASP2</td><td>production</td></tr><tr><td>App3</td><td>ASP3</td><td>production</td></tr><tr><td>App4</td><td>ASP4</td><td>production</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "You can create a deployment slot for App2.",
   "a": 1
  },
  {
   "l": "You can map a custom domain to App3.",
   "a": 1
  },
  {
   "l": "You can move App1 to ASP4.",
   "a": 0
  },
  {
   "l": "You can move App1 to ASP2.",
   "a": 1
  },
  {
   "l": "App2 can use virtual network integration.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Slot for App2: No.</b> Deployment slots require the <b>Standard</b> tier or higher; ASP2 is Basic.</li><li><b>Domain for App3: No.</b> The Free tier doesn't accept custom domains (Shared or higher is needed, and Basic for a TLS binding).</li><li><b>App1 → ASP4: Yes.</b> Same region, same resource group, same OS (Windows).</li><li><b>App1 → ASP2: No.</b> ASP2 is a Linux plan; App1 runs on Windows.</li><li><b>VNet integration for App2: Yes.</b> Available from the Basic tier.</li></ul>",
 "portal": {
  "path": [
   "Web apps",
   "App1"
  ],
  "title": "App1 | Change App Service plan",
  "menu": [
   "Overview",
   "Deployment slots",
   "*Change App Service plan"
  ],
  "rows": [
   [
    "*ASP4",
    "Windows · France Central · RG1 · compatible"
   ]
  ]
 },
 "keep": "Slots: Standard+. Domain: Shared+ (TLS: Basic+). Change plan: same region, group, and OS."
},
{
 "id": "D3-238",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Slots exhibit (click the <b>Slots</b> tab).</p><p>You swap staging and production. What values does the production slot have afterward?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Slots",
   "h": "<p><b>App1</b> application settings:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Slot</th><th>Setting</th><th>Value</th><th>Deployment slot setting</th></tr><tr><td>production</td><td>DB</td><td>prod-db</td><td>Yes</td></tr><tr><td>production</td><td>FEATURE</td><td>on</td><td>No</td></tr><tr><td>staging</td><td>DB</td><td>test-db</td><td>Yes</td></tr><tr><td>staging</td><td>FEATURE</td><td>off</td><td>No</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "DB :",
   "o": [
    "prod-db",
    "test-db"
   ],
   "a": 0
  },
  {
   "l": "FEATURE :",
   "o": [
    "on",
    "off"
   ],
   "a": 1
  }
 ],
 "expl": "<p>A swap exchanges the slots' <b>content</b> (code and unmarked settings). Settings marked <b>Deployment slot setting</b> stay with their slot.</p><ul><li><b>DB</b> is sticky: production keeps prod-db.</li><li><b>FEATURE</b> isn't sticky: it follows the code from staging, so production becomes off.</li></ul>",
 "portal": {
  "path": [
   "Web apps",
   "App1"
  ],
  "title": "App1 | Environment variables",
  "menu": [
   "Deployment slots",
   "*Environment variables"
  ],
  "rows": [
   [
    "*DB",
    "prod-db · slot setting"
   ],
   [
    "FEATURE",
    "off"
   ]
  ]
 },
 "keep": "Swap: slot settings stay, the others follow the code."
},
{
 "id": "D3-239",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the environment shown in the App Service exhibit (click the <b>App Service</b> tab).</p><p>App3 must be published on www.contoso.com over HTTPS with its own certificate. The solution must minimize cost.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "App Service",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Plan</th><th>OS</th><th>Tier</th><th>Region</th><th>Resource group</th><th>Zone redundancy</th></tr><tr><td>ASP1</td><td>Windows</td><td>Standard S1 (3 instances)</td><td>France Central</td><td>RG1</td><td>No</td></tr><tr><td>ASP2</td><td>Linux</td><td>Basic B1</td><td>France Central</td><td>RG1</td><td>No</td></tr><tr><td>ASP3</td><td>Windows</td><td>Free F1</td><td>West Europe</td><td>RG2</td><td>No</td></tr><tr><td>ASP4</td><td>Windows</td><td>Premium v3 P1v3 (3 instances)</td><td>France Central</td><td>RG1</td><td>Yes</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>App</th><th>Plan</th><th>Slots</th></tr><tr><td>App1</td><td>ASP1</td><td>production, staging</td></tr><tr><td>App2</td><td>ASP2</td><td>production</td></tr><tr><td>App3</td><td>ASP3</td><td>production</td></tr><tr><td>App4</td><td>ASP4</td><td>production</td></tr></table></div>"
  }
 ],
 "opts": [
  "Move ASP3 to the Basic tier (B1)",
  "Move ASP3 to the Shared tier (D1)",
  "Move ASP3 to the Standard tier (S1)",
  "Move App3 to ASP4"
 ],
 "ans": 0,
 "expl": "<p>The <b>Basic</b> tier is the cheapest that supports both a custom domain and a TLS (SNI) binding.</p><ul><li>Shared supports a custom domain, but no certificate binding.</li><li>Standard works but costs more.</li><li>App3 can't move to ASP4: different region and resource group (and it would cost more).</li></ul>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP3"
  ],
  "title": "ASP3 | Scale up",
  "menu": [
   "Overview",
   "*Scale up (App Service plan)"
  ],
  "rows": [
   [
    "*Basic B1",
    "Custom domains · TLS bindings"
   ]
  ],
  "btn": "Select"
 },
 "keep": "Domain + TLS at the lowest cost: Basic."
},
{
 "id": "D3-240",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You have the environment shown in the App Service exhibit (click the <b>App Service</b> tab).</p><p>New apps must be hosted in France Central. Which existing plan fits each one, at the lowest cost?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "App Service",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Plan</th><th>OS</th><th>Tier</th><th>Region</th><th>Resource group</th><th>Zone redundancy</th></tr><tr><td>ASP1</td><td>Windows</td><td>Standard S1 (3 instances)</td><td>France Central</td><td>RG1</td><td>No</td></tr><tr><td>ASP2</td><td>Linux</td><td>Basic B1</td><td>France Central</td><td>RG1</td><td>No</td></tr><tr><td>ASP3</td><td>Windows</td><td>Free F1</td><td>West Europe</td><td>RG2</td><td>No</td></tr><tr><td>ASP4</td><td>Windows</td><td>Premium v3 P1v3 (3 instances)</td><td>France Central</td><td>RG1</td><td>Yes</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>App</th><th>Plan</th><th>Slots</th></tr><tr><td>App1</td><td>ASP1</td><td>production, staging</td></tr><tr><td>App2</td><td>ASP2</td><td>production</td></tr><tr><td>App3</td><td>ASP3</td><td>production</td></tr><tr><td>App4</td><td>ASP4</td><td>production</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Windows app with slots and autoscale:",
   "o": [
    "ASP1",
    "ASP2",
    "ASP4"
   ],
   "a": 0
  },
  {
   "l": "Windows app that must survive losing a zone:",
   "o": [
    "ASP1",
    "ASP2",
    "ASP4"
   ],
   "a": 2
  },
  {
   "l": "Python API on Linux, no slots:",
   "o": [
    "ASP1",
    "ASP2",
    "ASP4"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Slots and autoscale → ASP1:</b> Standard provides them; Premium v3 does too, but costs more.</li><li><b>Zone loss → ASP4:</b> the only zone-redundant plan (Premium v3, at least 2 instances).</li><li><b>Linux → ASP2:</b> the only Linux plan; Basic is enough without slots.</li></ul>",
 "portal": {
  "path": [
   "Web apps",
   "App4"
  ],
  "title": "App4 | Change App Service plan",
  "menu": [
   "Overview",
   "Deployment slots",
   "*Change App Service plan"
  ],
  "rows": [
   [
    "*ASP4",
    "Zone-redundant · 3 instances"
   ]
  ]
 },
 "keep": "Standard: slots + autoscale. Premium v3: zone redundancy."
},
{
 "id": "D3-241",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Containers exhibit (click the <b>Containers</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Containers",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Resource</th><th>Type</th><th>Detail</th></tr><tr><td>acr1</td><td>Container registry</td><td>Basic</td></tr><tr><td>acr2</td><td>Container registry</td><td>Premium, geo-replication to West Europe, private endpoint, public access disabled</td></tr><tr><td>cg1</td><td>Container group (ACI)</td><td>Linux, web and sidecar containers, public IP address</td></tr><tr><td>ca1</td><td>Container Apps app</td><td>Environment env1, ingress enabled, traffic limited to the environment</td></tr><tr><td>ca2</td><td>Container Apps app</td><td>Environment env1, external ingress, min replicas 1, max 5</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "You can create a private endpoint for acr1.",
   "a": 1
  },
  {
   "l": "cg1's containers can talk to each other over localhost.",
   "a": 0
  },
  {
   "l": "A client on the internet can call ca1.",
   "a": 1
  },
  {
   "l": "ca2 can call ca1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>acr1: No.</b> A private endpoint (like geo-replication) requires the <b>Premium</b> tier.</li><li><b>cg1: Yes.</b> Containers in one group share the host, network, and lifecycle: they reach each other over localhost on different ports.</li><li><b>Internet → ca1: No.</b> Ingress limited to the environment: ca1 is only reachable from env1.</li><li><b>ca2 → ca1: Yes.</b> ca2 is in the same env1 environment.</li></ul>",
 "portal": {
  "path": [
   "Container Apps",
   "ca1"
  ],
  "title": "ca1 | Ingress",
  "menu": [
   "Overview",
   "*Ingress",
   "Scale"
  ],
  "rows": [
   [
    "*Ingress traffic",
    "Limited to Container Apps environment"
   ]
  ]
 },
 "keep": "ACR Premium: private and geo-replication. Internal ingress = reachable from the environment only."
},
{
 "id": "D3-242",
 "dom": 3,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Containers exhibit (click the <b>Containers</b> tab).</p><p>ca2 must cost nothing in compute when nobody uses it, and scale up to 5 replicas based on HTTP request count.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Containers",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Resource</th><th>Type</th><th>Detail</th></tr><tr><td>acr1</td><td>Container registry</td><td>Basic</td></tr><tr><td>acr2</td><td>Container registry</td><td>Premium, geo-replication to West Europe, private endpoint, public access disabled</td></tr><tr><td>cg1</td><td>Container group (ACI)</td><td>Linux, web and sidecar containers, public IP address</td></tr><tr><td>ca1</td><td>Container Apps app</td><td>Environment env1, ingress enabled, traffic limited to the environment</td></tr><tr><td>ca2</td><td>Container Apps app</td><td>Environment env1, external ingress, min replicas 1, max 5</td></tr></table></div>"
  }
 ],
 "opts": [
  "Set the minimum replica count to 0",
  "Add an HTTP scale rule (concurrent requests)",
  "Switch ca2's ingress to environment-internal",
  "Move ca2 to an on-demand ACI container group"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<ul><li><b>Minimum 0: yes.</b> With 0 minimum replicas, the app scales to zero without traffic (no active compute billing).</li><li><b>HTTP rule: yes.</b> It adds replicas based on concurrent requests, up to the maximum of 5.</li><li>Internal ingress would cut off external clients.</li><li>ACI doesn't autoscale on requests.</li></ul>",
 "portal": {
  "path": [
   "Container Apps",
   "ca2"
  ],
  "title": "ca2 | Scale",
  "menu": [
   "Overview",
   "Ingress",
   "*Scale"
  ],
  "rows": [
   [
    "*Replicas",
    "Min 0 · Max 5 · HTTP rule"
   ]
  ]
 },
 "keep": "Container Apps: minimum 0 replicas = scale to zero; HTTP rule to scale out."
},
{
 "id": "D3-243",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the environment shown in the Containers exhibit (click the <b>Containers</b> tab).</p><p>Teams in Northern Europe pull images from acr1 with slow downloads. They must pull from a nearby replica, with the same registry name.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Containers",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Resource</th><th>Type</th><th>Detail</th></tr><tr><td>acr1</td><td>Container registry</td><td>Basic</td></tr><tr><td>acr2</td><td>Container registry</td><td>Premium, geo-replication to West Europe, private endpoint, public access disabled</td></tr><tr><td>cg1</td><td>Container group (ACI)</td><td>Linux, web and sidecar containers, public IP address</td></tr><tr><td>ca1</td><td>Container Apps app</td><td>Environment env1, ingress enabled, traffic limited to the environment</td></tr><tr><td>ca2</td><td>Container Apps app</td><td>Environment env1, external ingress, min replicas 1, max 5</td></tr></table></div>"
  }
 ],
 "opts": [
  "Move acr1 to Premium and add a geo-replication",
  "Create a second Basic registry in North Europe",
  "Enable a retention policy on acr1",
  "Create a private endpoint for acr1 in North Europe"
 ],
 "ans": 0,
 "expl": "<p><b>Geo-replication</b> (Premium tier) creates regional replicas of the same registry: one login server name, and each client pulls from the nearest replica.</p><ul><li>A second registry would have a different name and require syncing images.</li><li>Retention cleans up manifests, with no effect on latency.</li><li>A private endpoint doesn't move data closer, and also requires Premium.</li></ul>",
 "portal": {
  "path": [
   "Container registries",
   "acr1"
  ],
  "title": "acr1 | Geo-replications",
  "menu": [
   "Overview",
   "*Geo-replications"
  ],
  "rows": [
   [
    "*North Europe",
    "Ready"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Same name, regional replicas: geo-replication (Premium)."
},
{
 "id": "D3-244",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Deployment exhibit (click the <b>Deployment</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Deployment",
   "h": "<p>Resource group <b>RG1</b> contains: VM1, VNet1 (10.0.0.0/16), and the storage account st1. No locks.</p><p>Template <b>T1</b> declares: VNet1 (10.0.0.0/16, with a new subnet Subnet9) and a storage account st2.</p>"
  }
 ],
 "rows": [
  {
   "l": "If you deploy T1 in Incremental mode, VM1 still exists after the deployment.",
   "a": 0
  },
  {
   "l": "If you deploy T1 in Complete mode, st1 is deleted.",
   "a": 0
  },
  {
   "l": "In Complete mode, VNet1 is deleted and recreated.",
   "a": 1
  },
  {
   "l": "A what-if operation shows these changes without deploying anything.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Incremental: Yes.</b> Resources missing from the template are left as they are.</li><li><b>Complete and st1: Yes.</b> In Complete mode, resources in the group that aren't in the template are <b>deleted</b> (VM1 and st1).</li><li><b>VNet1 recreated: No.</b> A resource present in the template is updated in place (Subnet9 added), not deleted.</li><li><b>what-if: Yes.</b> It previews creations, changes, and deletions.</li></ul>",
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
    "*T1 · Complete",
    "Deleted: VM1, st1"
   ]
  ]
 },
 "keep": "Complete = deletes what isn't in the template. Always run what-if first."
},
{
 "id": "D3-245",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the environment shown in the Deployment exhibit (click the <b>Deployment</b> tab).</p><p>You must deploy T1 without any risk of deleting VM1 or st1, and add Subnet9 to VNet1 without touching its existing subnets.</p><p>What should you check before deploying in Incremental mode?</p>",
 "docs": [
  {
   "t": "Deployment",
   "h": "<p>Resource group <b>RG1</b> contains: VM1, VNet1 (10.0.0.0/16), and the storage account st1. No locks.</p><p>Template <b>T1</b> declares: VNet1 (10.0.0.0/16, with a new subnet Subnet9) and a storage account st2.</p>"
  }
 ],
 "opts": [
  "That T1 also declares all of VNet1's existing subnets",
  "That T1 also declares VM1 and st1 with their properties",
  "That a ReadOnly lock is set on VNet1",
  "That T1 uses Complete mode on VNet1 only"
 ],
 "ans": 0,
 "expl": "<p>In Incremental mode, a declared resource is redeployed with the template's properties: VNet1's <code>subnets</code> property is <b>replaced</b> by the template's list. If T1 only lists Subnet9, Azure tries to remove the other subnets (and fails if interfaces use them). So declare all existing subnets, or add Subnet9 as a separate child resource.</p><ul><li>VM1 and st1 are safe in Incremental mode.</li><li>A ReadOnly lock would block the deployment.</li><li>The mode applies to the whole deployment.</li></ul>",
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
    "*T1 · Complete",
    "Deleted: VM1, st1"
   ]
  ]
 },
 "keep": "Incremental: declared properties replace what exists (beware arrays like subnets)."
},
{
 "id": "D3-246",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the environment shown in the Virtual machines exhibit (click the <b>Virtual machines</b> tab).</p><p>VM5 must move to France Central, in zone 1, with its disks.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Virtual machines",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Size</th><th>Region</th><th>Zone</th><th>Availability set</th><th>OS disk</th></tr><tr><td>VM1</td><td>Standard_D4s_v5</td><td>France Central</td><td>1</td><td>—</td><td>Premium SSD</td></tr><tr><td>VM2</td><td>Standard_D4s_v5</td><td>France Central</td><td>2</td><td>—</td><td>Premium SSD</td></tr><tr><td>VM3</td><td>Standard_D4_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>Standard SSD</td></tr><tr><td>VM4</td><td>Standard_D4s_v5</td><td>France Central</td><td>—</td><td>AS1</td><td>Premium SSD</td></tr><tr><td>VM5</td><td>Standard_B2s</td><td>West Europe</td><td>—</td><td>—</td><td>Standard HDD</td></tr></table></div><p>AS1: 2 fault domains, 5 update domains. VM1 and VM2 sit behind a zone-redundant Standard load balancer; VM3 and VM4 behind another one.</p>"
  }
 ],
 "opts": [
  "Use Azure Resource Mover to France Central",
  "Change VM5's region in its properties",
  "Redeploy VM5 and pick zone 1",
  "Move VM5 to a France Central resource group"
 ],
 "ans": 0,
 "expl": "<p>A VM doesn't change region through a simple property. <b>Azure Resource Mover</b> (built on Site Recovery) prepares, replicates, and recreates the VM and its dependencies in the target region, letting you pick a zone.</p><ul><li>Redeploy moves the VM to another host in the same region.</li><li>Changing resource group doesn't change the resources' region.</li></ul>",
 "portal": {
  "path": [
   "Azure Resource Mover"
  ],
  "title": "Resource Mover | Across regions",
  "menu": [
   "Overview",
   "*Across regions"
  ],
  "rows": [
   [
    "*VM5",
    "West Europe → France Central · zone 1"
   ]
  ],
  "btn": "Prepare"
 },
 "keep": "Change region: Resource Mover (or Site Recovery), not a property."
},
{
 "id": "D3-247",
 "dom": 3,
 "type": "multi",
 "stem": "<p>You have the environment shown in the App Service exhibit (click the <b>App Service</b> tab).</p><p>App1 must be deployed with no downtime: the new version is warmed up before receiving traffic, then 10% of users test it before everyone.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "App Service",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Plan</th><th>OS</th><th>Tier</th><th>Region</th><th>Resource group</th><th>Zone redundancy</th></tr><tr><td>ASP1</td><td>Windows</td><td>Standard S1 (3 instances)</td><td>France Central</td><td>RG1</td><td>No</td></tr><tr><td>ASP2</td><td>Linux</td><td>Basic B1</td><td>France Central</td><td>RG1</td><td>No</td></tr><tr><td>ASP3</td><td>Windows</td><td>Free F1</td><td>West Europe</td><td>RG2</td><td>No</td></tr><tr><td>ASP4</td><td>Windows</td><td>Premium v3 P1v3 (3 instances)</td><td>France Central</td><td>RG1</td><td>Yes</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>App</th><th>Plan</th><th>Slots</th></tr><tr><td>App1</td><td>ASP1</td><td>production, staging</td></tr><tr><td>App2</td><td>ASP2</td><td>production</td></tr><tr><td>App3</td><td>ASP3</td><td>production</td></tr><tr><td>App4</td><td>ASP4</td><td>production</td></tr></table></div>"
  }
 ],
 "opts": [
  "Deploy to staging, then swap with production",
  "Route 10% of traffic to staging (testing in production)",
  "Add an instance to ASP1 before each deployment",
  "Create App1-v2 in ASP2 and change DNS by hand"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<ul><li><b>10% routing: yes.</b> Testing in production sends a percentage of users to staging.</li><li><b>Swap: yes.</b> Staging is warmed up before the swap, which happens with no downtime.</li><li>Adding an instance doesn't create a separate environment.</li><li>ASP2 is a Basic Linux plan, and a DNS change is neither gradual nor instant.</li></ul>",
 "portal": {
  "path": [
   "Web apps",
   "App1"
  ],
  "title": "App1 | Deployment slots",
  "menu": [
   "Overview",
   "*Deployment slots"
  ],
  "rows": [
   [
    "production",
    "90%"
   ],
   [
    "*staging",
    "10%"
   ]
  ],
  "btn": "Swap"
 },
 "keep": "Percentage of users: traffic routing. No downtime: swap."
},
{
 "id": "D3-248",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the environment shown in the Scaling exhibit (click the <b>Scaling</b> tab).</p><p>Every Monday from 8 to 10 AM, VMSS1 must run at least 8 instances, whatever the CPU. The rest of the time, the current rules apply.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Scaling",
   "h": "<p>Virtual machine scale set <b>VMSS1</b>: minimum 2, maximum 10, default 2 instances. Cool down: 5 minutes. Upgrade policy: <b>Manual</b>. Scale-in policy: <b>Default</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Rule</th><th>Condition</th><th>Action</th></tr><tr><td>Scale out</td><td>Average CPU &gt; 75% over 10 minutes</td><td>Add 2 instances</td></tr><tr><td>Scale in</td><td>Average CPU &lt; 25% over 10 minutes</td><td>Remove 1 instance</td></tr></table></div>"
  }
 ],
 "opts": [
  "Add a recurring Monday 8-10 AM profile, minimum 8",
  "Raise the default profile's minimum to 8 instances",
  "Add a +6 scale-out rule on Mondays",
  "Lower the cool down to 1 minute on Mondays"
 ],
 "ans": 0,
 "expl": "<p>A <b>recurring scale profile</b> (weekly schedule) replaces the default profile during its window, with its own limits (minimum 8) and optionally its own rules. Outside the window, the default profile resumes.</p><ul><li>Changing the default minimum would force 8 instances all the time.</li><li>A rule fires on a metric, not a schedule.</li><li>The cool down guarantees no instance count.</li></ul>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Scaling",
  "menu": [
   "Overview",
   "Instances",
   "*Scaling",
   "Upgrade policy"
  ],
  "rows": [
   [
    "*Limits",
    "Min 2 · Max 10 · Default 2"
   ]
  ]
 },
 "keep": "Known schedule: a scheduled or recurring profile."
},
{
 "id": "D3-249",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Deployment exhibit (click the <b>Deployment</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Deployment",
   "h": "<p>Resource group <b>RG1</b> contains: VM1, VNet1 (10.0.0.0/16), and the storage account st1. No locks.</p><p>Template <b>T1</b> declares: VNet1 (10.0.0.0/16, with a new subnet Subnet9) and a storage account st2.</p>"
  }
 ],
 "rows": [
  {
   "l": "A CanNotDelete lock on st1 prevents a Complete mode deployment from deleting it.",
   "a": 0
  },
  {
   "l": "Complete mode is available for resource group-scoped deployments.",
   "a": 0
  },
  {
   "l": "Incremental mode deletes child resources the template doesn't mention, like an NSG's rules.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Lock: Yes.</b> A lock applies to all operations, including Resource Manager's: st1 isn't deleted (the deployment reports that deletion as failed).</li><li><b>Resource group: Yes.</b> Complete mode exists for resource group deployments (not for subscription or management group deployments).</li><li><b>Child resources: No</b> in general: a separately deployed child resource isn't deleted. But if the rules are declared as a <b>property</b> of the NSG in the template, the template's list replaces the existing one.</li></ul>",
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
    "*T1 · Complete",
    "Deleted: VM1, st1"
   ]
  ]
 },
 "keep": "Lock > Complete mode. Complete: resource group scope only."
},
{
 "id": "D3-250",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have the environment shown in the Containers exhibit (click the <b>Containers</b> tab).</p><p>cg1 must pull an image from acr2. acr2's public access is disabled.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Containers",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Resource</th><th>Type</th><th>Detail</th></tr><tr><td>acr1</td><td>Container registry</td><td>Basic</td></tr><tr><td>acr2</td><td>Container registry</td><td>Premium, geo-replication to West Europe, private endpoint, public access disabled</td></tr><tr><td>cg1</td><td>Container group (ACI)</td><td>Linux, web and sidecar containers, public IP address</td></tr><tr><td>ca1</td><td>Container Apps app</td><td>Environment env1, ingress enabled, traffic limited to the environment</td></tr><tr><td>ca2</td><td>Container Apps app</td><td>Environment env1, external ingress, min replicas 1, max 5</td></tr></table></div>"
  }
 ],
 "opts": [
  "Redeploy cg1 in a subnet that reaches acr2's private endpoint",
  "Enable acr2's admin account and keep cg1's public IP",
  "Give cg1 the AcrPull role on acr2, with no other change",
  "Add cg1's public IP address to acr2's firewall"
 ],
 "ans": 0,
 "expl": "<p>With public access disabled, acr2 is only reachable through its <b>private endpoint</b>. So cg1 must be deployed in a delegated subnet of a virtual network that reaches that endpoint (and resolves the private name), with an identity allowed to pull (AcrPull).</p><ul><li>A credential (admin or AcrPull) isn't enough without a network path.</li><li>IP rules don't apply when public access is disabled; and a public ACI IP isn't fixed.</li></ul>",
 "portal": {
  "path": [
   "Container registries",
   "acr2"
  ],
  "title": "acr2 | Networking",
  "menu": [
   "Overview",
   "*Networking"
  ],
  "rows": [
   [
    "*Public access",
    "Disabled · private endpoint only"
   ]
  ]
 },
 "keep": "Private registry: you need a private network path AND an authorized identity."
}
);
