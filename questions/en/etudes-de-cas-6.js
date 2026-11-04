/* Case studies (batch 6: C011 and C012, compute) */
AZ.cases.push(
{
 "id": "C011",
 "title": "Adatum Manufacturing",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Adatum Manufacturing makes car parts. Its ERP and supplier portal run on Azure VMs in France Central (three availability zones). An audit found insufficient availability and incomplete encryption.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Virtual machines</b> (RG-ERP group)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Size</th><th>Availability</th><th>Disks</th></tr><tr><td>VM-ERP1</td><td>Standard_D4s_v5</td><td>Zone 1</td><td>OS P10; ERP-Data P30, Read-only cache; ERP-Log P20 (transaction logs), Read/write cache</td></tr><tr><td>VM-ERP2</td><td>Standard_D4s_v5</td><td>Availability set AS-ERP (2 fault domains, 5 update domains), no zone</td><td>OS P10; data P30</td></tr></table></div><p><b>VMSS-Web</b> (RG-Web group): Uniform orchestration, zone 1 only, 2 to 10 instances. Autoscale: a single rule, +1 instance if CPU > 70% for 10 minutes. Upgrade policy: Manual. Image: web-image definition in the GAL1 gallery; version 1.1.0 was just published and replicated to France Central. No health extension.</p><p><b>Quotas</b> (France Central): Standard DSv5 family, 40 vCPUs, 32 used. Regional total: 100 vCPUs, 40 used.</p>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>The ERP must stay available if an entire zone fails.</li><li>VM-ERP1's disks must follow Microsoft's recommendations for SQL Server.</li><li>VM-ERP1's temp disk and disk caches must be encrypted, with no agent in the VM.</li><li>VMSS-Web must be spread across the three zones and return to 2 instances when load drops. On scale-in, the newest instances must be kept. An instance running a long export must not be removed.</li><li>VMSS-Web instances must move to version 1.1.0 in batches, each batch healthy before the next.</li><li>A new VM, VM-ERP3, in the same family as VM-ERP1, must use Trusted Launch and Premium SSD disks, in a different zone from VM-ERP1.</li><li>The BI team wants to deploy four more Standard_D4s_v5 VMs.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C011-1",
   "dom": 3,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current configuration, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "VM-ERP2 can be placed in zone 2 without being recreated.",
     "a": 1
    },
    {
     "l": "Planned maintenance can reboot VM-ERP1 and VM-ERP2 at the same time.",
     "a": 0
    },
    {
     "l": "You can deploy two more Standard_D4s_v5 VMs without a quota request.",
     "a": 0
    },
    {
     "l": "VMSS-Web stays available if zone 1 fails.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>VM-ERP2 to zone 2: No.</b> A VM in an availability set can't move into a zone: it must be recreated in the zone from its disks (or a copy).</li><li><b>Simultaneous maintenance: Yes.</b> Update domains only coordinate VMs in the same availability set. VM-ERP1 isn't in AS-ERP: nothing prevents both VMs from rebooting at once, hence requirement 1.</li><li><b>Two more VMs: Yes.</b> 2 × 4 = 8 vCPUs; 32 + 8 = 40, which reaches but doesn't exceed the family quota.</li><li><b>Zone 1 failure: No.</b> All instances are in zone 1.</li></ul>",
   "portal": {
    "path": [
     "Subscriptions",
     "Sub-Prod",
     "Usage + quotas"
    ],
    "title": "Usage + quotas",
    "menu": [
     "*Usage + quotas"
    ],
    "rows": [
     [
      "*Standard DSv5 Family · France Central",
      "32 / 40"
     ],
     [
      "Total Regional vCPUs",
      "40 / 100"
     ]
    ]
   },
   "keep": "Update domains: only within one availability set. Quota: per family and per region."
  },
  {
   "id": "C011-2",
   "dom": 3,
   "type": "hot",
   "stem": "<p>You need to meet requirements 2 and 3.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "ERP-Log, host caching:",
     "o": [
      "None",
      "Read-only",
      "Read/write"
     ],
     "a": 0
    },
    {
     "l": "ERP-Data, host caching:",
     "o": [
      "None",
      "Read-only",
      "Read/write"
     ],
     "a": 1
    },
    {
     "l": "Requirement 3, first on the subscription:",
     "o": [
      "Register the EncryptionAtHost feature",
      "Create a disk encryption set",
      "Enable Azure Disk Encryption",
      "Enable Defender for Servers"
     ],
     "a": 0
    },
    {
     "l": "Requirement 3, on VM-ERP1 during enablement:",
     "o": [
      "Stop (deallocate) the VM",
      "Restart the VM without deallocating",
      "Detach the data disks",
      "No interruption"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Logs: None.</b> Sequential log writes don't benefit from caching, and Read/write caching can lose writes. Microsoft recommends None for logs.</li><li><b>Data: Read-only.</b> Data files, mostly read, benefit from read caching.</li><li><b>Encryption at host:</b> it encrypts the temp disk and caches with no agent, but the EncryptionAtHost feature must first be registered on the subscription. Azure Disk Encryption uses BitLocker inside the VM; an encryption set doesn't cover the temp disk.</li><li><b>Interruption:</b> the property can only be changed on a deallocated VM.</li></ul>",
   "portal": {
    "path": [
     "Virtual machines",
     "VM-ERP1"
    ],
    "title": "VM-ERP1 | Disks",
    "menu": [
     "Overview",
     "*Disks"
    ],
    "rows": [
     [
      "ERP-Data",
      "Read-only"
     ],
     [
      "*ERP-Log",
      "None"
     ],
     [
      "Encryption at host",
      "Enabled"
     ]
    ],
    "btn": "Save"
   },
   "keep": "SQL: data Read-only, logs no caching. Encryption at host: feature registered, VM deallocated."
  },
  {
   "id": "C011-3",
   "dom": 3,
   "type": "order",
   "stem": "<p>You need to meet requirement 5.</p><p>Which <b>trois</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Add the application health extension to VMSS-Web's model",
    "Set VMSS-Web's upgrade policy to Rolling",
    "Update VMSS-Web's model to web-image version 1.1.0",
    "Reimage all instances at once",
    "Switch VMSS-Web to Flexible orchestration",
    "Delete and recreate VMSS-Web with version 1.1.0"
   ],
   "seq": [
    0,
    1,
    2
   ],
   "expl": "<p>A <b>rolling</b> upgrade replaces instances in batches and waits for each batch to be healthy: it requires a health signal (application health extension or load balancer probe), configured first. Once the policy is Rolling, updating the model to version 1.1.0 triggers the batched rollout. Reimaging the whole set at once would cut service.</p>",
   "portal": {
    "path": [
     "Virtual machine scale sets",
     "VMSS-Web"
    ],
    "title": "VMSS-Web | Upgrade policy",
    "menu": [
     "Instances",
     "*Upgrade policy",
     "Health and repair"
    ],
    "rows": [
     [
      "*Mode",
      "Rolling"
     ],
     [
      "Maximum batch size",
      "20%"
     ],
     [
      "Health",
      "Application health extension"
     ]
    ]
   },
   "keep": "Rolling = health signal required, then model update."
  },
  {
   "id": "C011-4",
   "dom": 3,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirement 4. What should you do for each goal?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Actions",
   "tgtHead": [
    "Goal",
    "Action"
   ],
   "srcs": [
    "Recreate the scale set with zones 1, 2, and 3",
    "Add a zone-redundant load balancer",
    "Add a scale-in rule (CPU < 30%)",
    "Lengthen the cooldown",
    "OldestVM scale-in policy",
    "NewestVM scale-in policy",
    "Scale-in protection on the instance"
   ],
   "tgts": [
    {
     "l": "Spread across the three zones",
     "a": 0
    },
    {
     "l": "Back to 2 instances when load drops",
     "a": 2
    },
    {
     "l": "Keep the newest instances",
     "a": 4
    },
    {
     "l": "Don't remove the export instance",
     "a": 6
    }
   ],
   "expl": "<ul><li><b>Zones:</b> a scale set's zones are set at creation; a zone-redundant load balancer doesn't move instances.</li><li><b>Back to 2:</b> a scale-out rule without a scale-in rule never lowers the instance count.</li><li><b>Newest instances:</b> OldestVM removes the oldest first, so it keeps the newest. NewestVM would do the opposite.</li><li><b>Export:</b> scale-in protection excludes an instance from autoscale removals.</li></ul>",
   "portal": {
    "path": [
     "Virtual machine scale sets",
     "VMSS-Web2"
    ],
    "title": "VMSS-Web2 | Scaling",
    "menu": [
     "Instances",
     "*Scaling"
    ],
    "rows": [
     [
      "Zones",
      "1, 2, 3"
     ],
     [
      "*Scale-in policy",
      "OldestVM"
     ],
     [
      "Rules",
      "+1 if CPU > 70% · −1 if CPU < 30%"
     ]
    ]
   },
   "keep": "OldestVM keeps the newest. Always a scale-in rule. Scale-in protection per instance."
  },
  {
   "id": "C011-5",
   "dom": 3,
   "type": "cmd",
   "stem": "<p>You need to meet requirement 6. How should you complete the command?</p>",
   "rows": [
    {
     "l": "--size",
     "o": [
      "Standard_D4_v5",
      "Standard_D4s_v5",
      "Standard_F4",
      "Standard_A4_v2"
     ],
     "a": 1
    },
    {
     "l": "--zone",
     "o": [
      "1",
      "2",
      "0"
     ],
     "a": 1
    },
    {
     "l": "--security-type",
     "o": [
      "Standard",
      "TrustedLaunch",
      "ConfidentialVM"
     ],
     "a": 1
    }
   ],
   "tpl": "az vm create --resource-group RG-ERP --name VM-ERP3 --image Win2022Datacenter --size {0} --zone {1} --security-type {2} --admin-username adatumadmin",
   "expl": "<ul><li><b>Standard_D4s_v5:</b> same family as VM-ERP1; the “s” means Premium SSD support, which D4_v5 lacks.</li><li><b>Zone 2:</b> a different zone from VM-ERP1 (zone 1). 0 isn't a zone.</li><li><b>TrustedLaunch:</b> Secure Boot and vTPM, on a generation 2 image. ConfidentialVM requires dedicated sizes (DC or EC series).</li></ul>",
   "portal": {
    "path": [
     "Virtual machines",
     "VM-ERP3"
    ],
    "title": "VM-ERP3 | Overview",
    "menu": [
     "*Overview"
    ],
    "rows": [
     [
      "*Size",
      "Standard_D4s_v5"
     ],
     [
      "Availability zone",
      "2"
     ],
     [
      "Security type",
      "Trusted launch"
     ]
    ]
   },
   "keep": "“s” in the size = Premium SSD. Trusted Launch = generation 2."
  },
  {
   "id": "C011-6",
   "dom": 3,
   "type": "single",
   "stem": "<p>You need to meet requirement 7. VM-ERP3 is already deployed. What should you do?</p>",
   "opts": [
    "Request a DSv5 vCPU quota increase for the region",
    "Deploy the four VMs in another resource group",
    "Deploy the four VMs in an availability set",
    "Deploy the template in Complete mode to free vCPUs"
   ],
   "ans": 0,
   "expl": "<p>With VM-ERP3, the DSv5 family uses 36 of 40 vCPUs. Four 4-vCPU VMs need 16: 52 exceeds the family quota, even though the regional total (100) would allow it. Quota applies per subscription and region, whatever the resource group. Complete mode would delete unrelated resources.</p>",
   "portal": {
    "path": [
     "Quotas",
     "Compute"
    ],
    "title": "Quotas | Compute",
    "menu": [
     "*Compute"
    ],
    "rows": [
     [
      "*Standard DSv5 Family · France Central",
      "36 / 40 · Request increase"
     ]
    ]
   },
   "keep": "Two quotas apply: the family and the regional total."
  },
  {
   "id": "C011-7",
   "dom": 3,
   "type": "hotspot",
   "stem": "<p>You need to change ERP-Log's host caching. Which VM-ERP1 menu item should you select? To answer, select the appropriate menu item.</p>",
   "ans": "Disks",
   "win": {
    "title": "VM-ERP1",
    "nav": [
     {
      "g": "Settings",
      "items": [
       "Networking",
       "Disks",
       "Size",
       "Configuration",
       "Identity",
       "Properties"
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
       "Boot diagnostics",
       "Serial console",
       "Reset password",
       "Redeploy + reapply"
      ]
     }
    ]
   },
   "expl": "<p>Host caching is set per disk, on the VM's <b>Disks</b> page (Host caching column). Encryption at host is also on that page, under additional settings, while Configuration holds other VM options.</p>",
   "portal": {
    "path": [
     "Virtual machines",
     "VM-ERP1"
    ],
    "title": "VM-ERP1 | Disks",
    "menu": [
     "*Disks"
    ],
    "rows": [
     [
      "*ERP-Log · Host caching",
      "None"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Host caching: per disk, Disks page."
  }
 ]
},
{
 "id": "C012",
 "title": "Wingtip Toys",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Wingtip Toys sells toys online. Its shop, API, and admin tool run in App Service in France Central. The company is preparing for the holidays and wants zero-downtime deployments, protected secrets, and a recovery plan in West Europe.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Resource</th><th>Configuration</th></tr><tr><td>ASP-Web</td><td>Windows App Service plan, Standard S1, 2 instances; hosts wingtip-shop (.NET) and wingtip-api</td></tr><tr><td>ASP-Lin</td><td>Linux App Service plan, Basic B1; hosts wingtip-admin (container pulled from acrwingtip)</td></tr><tr><td>acrwingtip</td><td>Basic Container Registry, admin account disabled</td></tr><tr><td>kv-wing</td><td>Key vault, Azure RBAC permission model; SqlConn secret</td></tr><tr><td>VNet-Wing</td><td>Subnet-Int (10.20.1.0/27, empty), Subnet-Data (VM SQL1, 10.20.2.10)</td></tr><tr><td>cae-wing</td><td>Container Apps environment, integrated with VNet-Wing</td></tr></table></div><p>wingtip-shop currently reads SqlConn in plain text from its connection strings. The Wingtip office uses public addresses 198.51.100.0/24.</p>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>New wingtip-shop versions must be warmed up outside production, tested by 10% of users, then released with no downtime, with a quick rollback.</li><li>wingtip-shop must read SqlConn from kv-wing, with no secret in its configuration.</li><li>wingtip-api must call SQL1 on its private address.</li><li>wingtip-admin must be reachable only from the office, on admin.wingtip.com over HTTPS, with a free certificate.</li><li>The invoice-gen container must run every night at 1 AM in cae-wing; it takes about 20 minutes and must be stopped if it exceeds 30 minutes.</li><li>acrwingtip images must be available from West Europe under the same registry name.</li><li>wingtip-shop needs 6 instances Monday to Friday from 9 AM to 6 PM, and 2 the rest of the time.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C012-1",
   "dom": 3,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current configuration, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "You can create a deployment slot for wingtip-shop without changing tiers.",
     "a": 0
    },
    {
     "l": "You can move wingtip-admin into ASP-Web.",
     "a": 1
    },
    {
     "l": "wingtip-admin can use an App Service managed certificate for admin.wingtip.com.",
     "a": 0
    },
    {
     "l": "You can add a West Europe geo-replica to acrwingtip without changing tiers.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Slot: Yes.</b> The Standard tier offers up to 5 slots per app.</li><li><b>wingtip-admin in ASP-Web: No.</b> A plan is either Windows or Linux; a Linux app can't go in a Windows plan.</li><li><b>Managed certificate: Yes.</b> Custom domains and free managed certificates are available from the Basic tier.</li><li><b>Geo-replication: No.</b> It's reserved for the Premium Container Registry tier.</li></ul>",
   "portal": {
    "path": [
     "App Service plans",
     "ASP-Web"
    ],
    "title": "ASP-Web | Scale up",
    "menu": [
     "Overview",
     "*Scale up (App Service plan)"
    ],
    "rows": [
     [
      "*Tier",
      "Standard S1"
     ],
     [
      "Slots",
      "5 per app"
     ],
     [
      "OS",
      "Windows"
     ]
    ]
   },
   "keep": "Slots: Standard and up. Managed certificate: Basic and up. ACR geo-replication: Premium."
  },
  {
   "id": "C012-2",
   "dom": 3,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirements 1 and 2. What should you configure for each goal?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Goal",
    "Configuration"
   ],
   "srcs": [
    "Deploy to a staging slot",
    "Swap staging and production",
    "Route 10% of traffic to staging",
    "wingtip-shop's managed identity",
    "Key Vault Secrets User role on kv-wing",
    "An @Microsoft.KeyVault reference in the setting",
    "A Get access policy on kv-wing",
    "The setting marked “Deployment slot setting”"
   ],
   "tgts": [
    {
     "l": "Warm up the version outside production",
     "a": 0
    },
    {
     "l": "Have 10% of users test the version",
     "a": 2
    },
    {
     "l": "Quickly roll back to the previous version",
     "a": 1
    },
    {
     "l": "wingtip-shop authenticates to kv-wing with no secret",
     "a": 3
    },
    {
     "l": "Allow reading SqlConn",
     "a": 4
    },
    {
     "l": "No secret in the configuration",
     "a": 5
    }
   ],
   "expl": "<ul><li><b>Warm-up:</b> deploy to staging, which starts and warms up without production traffic.</li><li><b>10%:</b> traffic routing (testing in production) sends a percentage of users to staging.</li><li><b>Rollback:</b> after the swap, the old version stays in staging; swapping again puts it back in production.</li><li><b>Key Vault:</b> the managed identity authenticates the app; because kv-wing uses the RBAC model, a role (Key Vault Secrets User) is needed, not an access policy. The Key Vault reference replaces the setting's plain-text value.</li></ul>",
   "portal": {
    "path": [
     "App Services",
     "wingtip-shop"
    ],
    "title": "wingtip-shop | Environment variables",
    "menu": [
     "*Environment variables",
     "Identity",
     "Deployment slots"
    ],
    "rows": [
     [
      "*SqlConn",
      "@Microsoft.KeyVault(SecretUri=https://kv-wing.vault.azure.net/secrets/SqlConn/)"
     ],
     [
      "Source",
      "Key Vault reference ✓"
     ]
    ]
   },
   "keep": "Staging, % routing, swap. Key Vault RBAC = role, not access policy."
  },
  {
   "id": "C012-3",
   "dom": 3,
   "type": "hot",
   "stem": "<p>You need to meet requirements 3 and 4.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "wingtip-api to SQL1:",
     "o": [
      "Virtual network integration in Subnet-Int",
      "Private endpoint in Subnet-Int",
      "Hybrid connections to SQL1",
      "Access restrictions on wingtip-api"
     ],
     "a": 0
    },
    {
     "l": "wingtip-admin, office-only access:",
     "o": [
      "Access restriction Allow 198.51.100.0/24",
      "An NSG on Subnet-Int",
      "A private endpoint",
      "Virtual network integration"
     ],
     "a": 0
    },
    {
     "l": "admin.wingtip.com, DNS records:",
     "o": [
      "CNAME admin and TXT asuid.admin",
      "An A record admin only",
      "CNAME asuid.admin only",
      "TXT admin only"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>To SQL1:</b> virtual network integration (empty delegated subnet, Subnet-Int) gives the app <b>outbound</b> traffic into VNet-Wing. A private endpoint only handles <b>inbound</b> traffic to the app.</li><li><b>Office only:</b> access restrictions filter inbound traffic by IP address. An NSG on the integration subnet doesn't filter the app's inbound traffic; a private endpoint would cut off the office, which comes over the internet.</li><li><b>Domain:</b> a CNAME to wingtip-admin.azurewebsites.net, and the asuid.admin TXT that proves domain ownership.</li></ul>",
   "portal": {
    "path": [
     "App Services",
     "wingtip-admin"
    ],
    "title": "wingtip-admin | Networking",
    "menu": [
     "*Networking",
     "Custom domains",
     "Certificates"
    ],
    "rows": [
     [
      "*Access restrictions",
      "Allow 198.51.100.0/24 · Deny all"
     ],
     [
      "Domain",
      "admin.wingtip.com · Managed certificate"
     ]
    ]
   },
   "keep": "Outbound to a VNet = integration. Private inbound = private endpoint. Inbound IP filter = access restrictions."
  },
  {
   "id": "C012-4",
   "dom": 3,
   "type": "cmd",
   "stem": "<p>You need to meet requirement 5. How should you complete the command?</p>",
   "rows": [
    {
     "l": "--trigger-type",
     "o": [
      "Manual",
      "Schedule",
      "Event"
     ],
     "a": 1
    },
    {
     "l": "--cron-expression",
     "o": [
      "0 1 * * *",
      "1 0 * * *",
      "* 1 * * *",
      "0 0 1 * *"
     ],
     "a": 0
    },
    {
     "l": "--replica-timeout",
     "o": [
      "600",
      "1200",
      "1800",
      "86400"
     ],
     "a": 2
    }
   ],
   "tpl": "az containerapp job create --resource-group RG-Wing --name invoice-gen --environment cae-wing --image acrwingtip.azurecr.io/invoice:1.0 --trigger-type {0} --cron-expression \"{1}\" --replica-timeout {2}",
   "expl": "<ul><li><b>Schedule:</b> a scheduled Container Apps job starts on a cron expression, then stops when processing ends.</li><li><b>0 1 * * *:</b> minute 0, hour 1, every day. “1 0 * * *” would run at 12:01 AM, “* 1 * * *” every minute between 1:00 and 1:59, and “0 0 1 * *” on the 1st of each month.</li><li><b>1800:</b> the timeout is in seconds; 30 minutes = 1,800. 1,200 (20 minutes) would stop slightly long normal runs.</li></ul>",
   "portal": {
    "path": [
     "Container Apps jobs",
     "invoice-gen"
    ],
    "title": "invoice-gen | Overview",
    "menu": [
     "*Overview",
     "Execution history"
    ],
    "rows": [
     [
      "*Trigger type",
      "Schedule · 0 1 * * *"
     ],
     [
      "Replica timeout",
      "1800 s"
     ]
    ]
   },
   "keep": "cron = minute hour day month weekday. Timeout in seconds."
  },
  {
   "id": "C012-5",
   "dom": 3,
   "type": "single",
   "stem": "<p>You need to meet requirement 7. What should you configure in ASP-Web's autoscale?</p>",
   "opts": [
    "A recurring weekday profile from 9 AM to 6 PM, with 6 instances",
    "A rule that adds 4 instances when CPU exceeds 70%",
    "The Premium v3 tier with 6 instances at all times, no rule",
    "A fixed-date profile created for each business day of the year"
   ],
   "ans": 0,
   "expl": "<p>The need follows the schedule, not measured load: a <b>recurring profile</b> (Monday to Friday, 9 AM-6 PM, 6 instances) applies without waiting for CPU to rise, and the default profile keeps 2 instances otherwise. A CPU rule would react after the fact, 6 instances at all times would cost too much, and fixed-date profiles for every day would be unmanageable.</p>",
   "portal": {
    "path": [
     "App Service plans",
     "ASP-Web"
    ],
    "title": "ASP-Web | Scale out",
    "menu": [
     "*Scale out (App Service plan)"
    ],
    "rows": [
     [
      "*Business hours profile",
      "Mon-Fri 9 AM-6 PM · 6 instances"
     ],
     [
      "Default profile",
      "2 instances"
     ]
    ]
   },
   "keep": "Need known in advance → recurring profile. Load-driven need → rule."
  },
  {
   "id": "C012-6",
   "dom": 3,
   "type": "order",
   "stem": "<p>You need to meet requirement 6.</p><p>Which <b>trois</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Upgrade acrwingtip to the Premium tier",
    "Add a West Europe geo-replica to acrwingtip",
    "Check that the West Europe replica is Ready",
    "Create a second registry acrwingtipwe in West Europe",
    "Enable acrwingtip's admin account",
    "Import the images into a Basic registry in West Europe"
   ],
   "seq": [
    0,
    1,
    2
   ],
   "expl": "<p>Geo-replication keeps <b>a single registry name</b> (acrwingtip.azurecr.io) and serves pulls from the nearest replica. It requires the Premium tier, obtained by changing the tier in place. Then add the replica and wait for it to be Ready before relying on it. A second registry would have another name.</p>",
   "portal": {
    "path": [
     "Container registries",
     "acrwingtip"
    ],
    "title": "acrwingtip | Geo-replications",
    "menu": [
     "Overview",
     "*Geo-replications"
    ],
    "rows": [
     [
      "France Central",
      "Ready (home)"
     ],
     [
      "*West Europe",
      "Ready"
     ]
    ]
   },
   "keep": "Same registry name in several regions = Premium + geo-replication."
  },
  {
   "id": "C012-7",
   "dom": 3,
   "type": "hotspot",
   "stem": "<p>You need to configure requirement 1's 10%. Which wingtip-shop menu item should you select? To answer, select the appropriate menu item.</p>",
   "ans": "Deployment slots",
   "win": {
    "title": "wingtip-shop",
    "nav": [
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
       "Identity",
       "Certificates",
       "Custom domains",
       "Networking",
       "Scale out (App Service plan)"
      ]
     },
     {
      "g": "Monitoring",
      "items": [
       "Log stream",
       "Diagnostic settings"
      ]
     }
    ]
   },
   "expl": "<p>The traffic percentage is set in <b>Deployment slots</b>, in each slot's “Traffic %” column. That's also where you start the swap. Deployment Center configures the code source (GitHub, container…).</p>",
   "portal": {
    "path": [
     "App Services",
     "wingtip-shop"
    ],
    "title": "wingtip-shop | Deployment slots",
    "menu": [
     "*Deployment slots"
    ],
    "rows": [
     [
      "wingtip-shop (production)",
      "90%"
     ],
     [
      "*wingtip-shop-staging",
      "10%"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Traffic % and swap: Deployment slots page."
  }
 ]
}
);
