/* Case studies (batch 4: C007 and C008, monitoring and backup) */
AZ.cases.push(
{
 "id": "C007",
 "title": "Fabrikam Retail",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Fabrikam Retail is a retail chain whose applications run in Azure, in France Central. After a ransomware attack on a competitor, management wants to strengthen backup and disaster recovery at the lowest possible cost.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Virtual machines</b> (all in France Central, RG-Prod group)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>OS</th><th>Role</th><th>Details</th></tr><tr><td>VM-SQL1</td><td>Windows Server 2022</td><td>SQL Server 2022, Sales database</td><td>Data disks 2 × 1 TB Premium SSD</td></tr><tr><td>VM-Web1</td><td>Ubuntu 22.04</td><td>NGINX web server</td><td>Availability zone 1</td></tr><tr><td>VM-Web2</td><td>Ubuntu 22.04</td><td>NGINX web server</td><td>Availability zone 2</td></tr><tr><td>VM-App4</td><td>Windows Server 2022</td><td>Ordering service</td><td>Trusted Launch, not backed up</td></tr></table></div><p><b>Vaults</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Vault</th><th>Type</th><th>Region</th><th>Configuration</th></tr><tr><td>RSV-FC</td><td>Recovery Services</td><td>France Central</td><td>GRS redundancy, cross-region restore disabled, soft delete enabled (14 days), immutability disabled</td></tr><tr><td>BV-FC</td><td>Backup vault</td><td>France Central</td><td>LRS redundancy, no protected instances</td></tr></table></div><p><b>Policies</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Policy</th><th>Vault</th><th>Schedule</th><th>Retention</th></tr><tr><td>Pol-Std</td><td>RSV-FC</td><td>VM, standard, daily at 11 PM</td><td>30 days; instant restore snapshots: 2 days</td></tr><tr><td>Pol-Enh4h</td><td>RSV-FC</td><td>VM, enhanced, every 4 hours</td><td>7 days</td></tr><tr><td>Pol-Disk4h</td><td>BV-FC</td><td>Managed disk, every 4 hours</td><td>7 days</td></tr></table></div><p>VM-SQL1, VM-Web1, and VM-Web2 are protected in RSV-FC with Pol-Std.</p><p><b>Storage</b>: the stfabdocs account (StorageV2, France Central) holds the Azure Files share <b>contracts</b> and the blob container <b>invoices</b>. Neither is backed up.</p>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>The Sales database must have a 15-minute RPO and be restorable to a precise minute.</li><li>VM-Web1 and VM-Web2 must be able to restart together in West Europe, with an RPO under 15 minutes, and stay spread across two availability zones. Recovery must be tested every quarter with no impact on production.</li><li>No RSV-FC backup data may be deleted before it expires, even by an administrator, and this setting must not be reversible.</li><li>Disabling soft delete must require approval from the Security team, which manages its own subscription.</li><li>RSV-FC backups must be restorable in France South during a drill, even while France Central is running.</li><li>VM-App4 must be backed up every 4 hours, with all its disks.</li><li>Invoices must be restorable to any point in the last 30 days; a single file from the contracts share must be restorable on its own, with 90 days of retention.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C007-1",
   "dom": 5,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current configuration, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "You can currently restore VM-Web1 in France South.",
     "a": 1
    },
    {
     "l": "You can enable cross-region restore on RSV-FC without recreating the vault.",
     "a": 0
    },
    {
     "l": "You can switch RSV-FC to LRS to reduce its cost.",
     "a": 1
    },
    {
     "l": "A restore of VM-Web1 from yesterday's point uses snapshots, with no read from the vault tier.",
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Restore in France South: No.</b> The vault is GRS, so data is copied to the paired region, but cross-region restore is disabled: the Secondary region option doesn't appear.</li><li><b>Enable cross-region restore: Yes.</b> It can be enabled at any time on a GRS vault, even with protected items.</li><li><b>Switch to LRS: No.</b> A vault's storage redundancy can't be changed once an item is protected in it.</li><li><b>Yesterday's point: Yes.</b> Pol-Std keeps instant restore snapshots for 2 days: yesterday's point still exists in the snapshot tier, hence a fast restore.</li></ul>",
   "portal": {
    "path": [
     "Recovery Services vaults",
     "RSV-FC"
    ],
    "title": "RSV-FC | Properties",
    "menu": [
     "Overview",
     "Backup items",
     "*Properties"
    ],
    "rows": [
     [
      "*Backup storage redundancy",
      "Geo-redundant"
     ],
     [
      "Cross region restore",
      "Disabled"
     ]
    ]
   },
   "keep": "Redundancy is fixed after the first protected item; cross-region restore can be enabled at any time on a GRS vault."
  },
  {
   "id": "C007-2",
   "dom": 5,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirements 1, 2, and 7. Which solution should you use for each workload?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Solutions",
   "tgtHead": [
    "Workload",
    "Solution"
   ],
   "srcs": [
    "VM backup with an enhanced policy",
    "SQL Server in Azure VM backup",
    "Azure Site Recovery",
    "Operational blob backup",
    "Azure Backup for Azure Files",
    "Object replication to another account",
    "MARS agent"
   ],
   "tgts": [
    {
     "l": "VM-SQL1's Sales database",
     "a": 1
    },
    {
     "l": "VM-Web1 and VM-Web2",
     "a": 2
    },
    {
     "l": "invoices container",
     "a": 3
    },
    {
     "l": "contracts share",
     "a": 4
    }
   ],
   "expl": "<ul><li><b>Sales database:</b> only SQL Server in Azure VM backup backs up transaction logs (as often as every 15 minutes) and allows point-in-time restore. A VM backup, even enhanced, goes down to 4 hours at best.</li><li><b>Web VMs:</b> an RPO of minutes in another region is Site Recovery's continuous replication, not a backup.</li><li><b>invoices:</b> operational backup (in a Backup vault) allows point-in-time restore over the chosen period. Object replication copies blobs but can't go back to a given moment.</li><li><b>contracts:</b> Azure Backup for Azure Files, with snapshots and single-file restore. The MARS agent is for servers, not Azure shares.</li></ul>",
   "portal": {
    "path": [
     "Business Continuity Center",
     "Protection"
    ],
    "title": "Configure protection",
    "menu": [
     "*Protection",
     "Protected items"
    ],
    "rows": [
     [
      "*SQL in Azure VM",
      "RSV-FC"
     ],
     [
      "Blobs (operational)",
      "BV-FC"
     ],
     [
      "Azure Files",
      "RSV-FC"
     ]
    ]
   },
   "keep": "SQL logs every 15 min → SQL in VM backup. Minutes RPO elsewhere → Site Recovery. Blobs to a moment → operational backup."
  },
  {
   "id": "C007-3",
   "dom": 5,
   "type": "hot",
   "stem": "<p>You need to meet requirements 3, 4, and 5.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "Requirement 3, RSV-FC immutability:",
     "o": [
      "Enabled",
      "Enabled and locked",
      "Enhanced soft delete only",
      "Delete lock"
     ],
     "a": 1
    },
    {
     "l": "Requirement 4:",
     "o": [
      "A Resource Guard in the Security subscription",
      "A Backup Operator role for the administrators",
      "An Azure Policy deny policy",
      "An activity log alert"
     ],
     "a": 0
    },
    {
     "l": "Requirement 5, on RSV-FC:",
     "o": [
      "Switch redundancy to ZRS",
      "Create a vault in France South",
      "Enable cross-region restore",
      "Enable object replication"
     ],
     "a": 2
    }
   ],
   "expl": "<ul><li><b>Requirement 3:</b> “Enabled” immutability prevents deleting points before they expire, but an administrator can disable it. Only the <b>locked</b> state is irreversible. A resource lock doesn't prevent deleting backup data, and soft delete keeps data recoverable without preventing the operation.</li><li><b>Requirement 4:</b> multi-user authorization protects critical operations (disabling soft delete, reducing retention…) with a <b>Resource Guard</b> placed in another subscription and managed by another team. A role or an alert doesn't require approval.</li><li><b>Requirement 5:</b> RSV-FC is already GRS: just enable <b>cross-region restore</b>. A new vault in France South wouldn't hold the existing points.</li></ul>",
   "portal": {
    "path": [
     "Recovery Services vaults",
     "RSV-FC"
    ],
    "title": "RSV-FC | Properties",
    "menu": [
     "*Properties",
     "Security settings"
    ],
    "rows": [
     [
      "*Immutable vault",
      "Enabled and locked"
     ],
     [
      "Multi-user authorization",
      "RG-Guard (Security subscription)"
     ],
     [
      "Cross region restore",
      "Enabled"
     ]
    ]
   },
   "keep": "Locked immutability = irreversible. Another team's approval = Resource Guard. Paired region = GRS + cross-region restore."
  },
  {
   "id": "C007-4",
   "dom": 5,
   "type": "order",
   "stem": "<p>You need to meet requirement 2.</p><p>Which <b>quatre</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Create a Recovery Services vault in West Europe",
    "Enable replication of VM-Web1 and VM-Web2 to West Europe, with a separate target zone for each",
    "Create a recovery plan that contains VM-Web1 and VM-Web2",
    "Run a test failover of the plan to an isolated virtual network",
    "Enable replication from RSV-FC",
    "Run a planned failover of the plan, then reprotect"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>For replication to another region, the Recovery Services vault must be in the <b>target region</b>: RSV-FC, in France Central, isn't suitable. Then enable replication of both VMs, choosing a <b>target availability zone</b> for each, which keeps the spread across zones. The <b>recovery plan</b> fails both VMs over together. A <b>test failover</b> to an isolated network validates recovery without stopping production or replication; a planned failover would shut down the source VMs.</p>",
   "portal": {
    "path": [
     "Recovery Services vaults",
     "RSV-WE",
     "Recovery plans"
    ],
    "title": "RP-Web | Test failover",
    "menu": [
     "Replicated items",
     "*Recovery plans"
    ],
    "rows": [
     [
      "*Recovery point",
      "Latest processed"
     ],
     [
      "Azure virtual network",
      "VNet-Test-WE (isolated)"
     ]
    ],
    "btn": "OK"
   },
   "keep": "Site Recovery: vault in the target region, target zone per VM, recovery plan, test to an isolated network."
  },
  {
   "id": "C007-5",
   "dom": 5,
   "type": "cmd",
   "stem": "<p>You need to meet requirement 6. How should you complete the command?</p>",
   "rows": [
    {
     "l": "--vault-name",
     "o": [
      "RSV-FC",
      "BV-FC",
      "RSV-WE",
      "RSV-FS"
     ],
     "a": 0
    },
    {
     "l": "--policy-name",
     "o": [
      "Pol-Std",
      "Pol-Enh4h",
      "Pol-Disk4h",
      "DefaultPolicy"
     ],
     "a": 1
    }
   ],
   "tpl": "az backup protection enable-for-vm --resource-group RG-Prod --vm VM-App4 --vault-name {0} --policy-name {1}",
   "expl": "<p>VM-App4 uses <b>Trusted Launch</b>: it can only be backed up with an <b>enhanced policy</b>, which also allows several backups a day. Pol-Enh4h, in RSV-FC, meets both constraints. Pol-Disk4h (in BV-FC) would back up one disk at a time, with no consistency across the VM's disks, while the requirement asks for all disks. Pol-Std and DefaultPolicy are daily standard policies.</p>",
   "portal": {
    "path": [
     "Recovery Services vaults",
     "RSV-FC",
     "Backup items"
    ],
    "title": "VM-App4 | Backup",
    "menu": [
     "*Backup items",
     "Backup policies"
    ],
    "rows": [
     [
      "*Policy",
      "Pol-Enh4h (enhanced)"
     ],
     [
      "Security type",
      "Trusted Launch"
     ]
    ]
   },
   "keep": "Trusted Launch or several backups a day → enhanced policy."
  },
  {
   "id": "C007-6",
   "dom": 5,
   "type": "hotspot",
   "stem": "<p>You need to meet requirement 1. In RSV-FC, you select <b>+ Backup</b>. What should you select? To answer, select the appropriate item.</p>",
   "ans": "SQL Server in Azure VM",
   "win": {
    "title": "Backup goal",
    "nav": [
     {
      "g": "Where is your workload running?",
      "items": [
       "Azure",
       "Azure Stack Hub",
       "On-premises"
      ]
     },
     {
      "g": "What do you want to back up?",
      "items": [
       "Virtual machine",
       "Azure file share",
       "SQL Server in Azure VM",
       "SAP HANA in Azure VM",
       "SAP ASE (Sybase) in Azure VM"
      ]
     }
    ]
   },
   "expl": "<p>The workload runs in Azure, and it's the database, not the VM, that must be backed up: <b>SQL Server in Azure VM</b>. Azure Backup discovers the instances, installs the workload extension, then applies a policy with full backups and log backups every 15 minutes. The existing full-VM backup doesn't give a restore to the minute.</p>",
   "portal": {
    "path": [
     "Recovery Services vaults",
     "RSV-FC",
     "Backup"
    ],
    "title": "Backup goal",
    "menu": [
     "*Backup"
    ],
    "rows": [
     [
      "Workload",
      "Azure"
     ],
     [
      "*What to back up",
      "SQL Server in Azure VM"
     ]
    ],
    "btn": "Backup"
   },
   "keep": "Database restore to the minute → SQL Server in Azure VM (logs every 15 min)."
  },
  {
   "id": "C007-7",
   "dom": 5,
   "type": "single",
   "stem": "<p>During the quarterly test for requirement 2, VM-Web1 starts in West Europe, but the team sees that VM-Web1 and VM-Web2 are in the same zone. What should you change?</p>",
   "opts": [
    "The replication policy shared by both web VMs",
    "The target zone in VM-Web2's compute settings",
    "The network mapping between France Central and West Europe",
    "The order of groups in the RP-Web recovery plan"
   ],
   "ans": 1,
   "expl": "<p>The failover VM's availability zone is part of the replicated item's <b>compute settings</b> (with the size and target resource group). Give VM-Web2 a different zone from VM-Web1. The replication policy controls recovery points, network mapping the target network, and the plan the boot order: none places a VM in a zone.</p>",
   "portal": {
    "path": [
     "Recovery Services vaults",
     "RSV-WE",
     "Replicated items",
     "VM-Web2"
    ],
    "title": "VM-Web2 | Compute",
    "menu": [
     "Overview",
     "*Compute",
     "Network"
    ],
    "rows": [
     [
      "Size",
      "Standard_D2s_v5"
     ],
     [
      "*Availability zone",
      "2"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Failover VM size and zone: the replicated item's compute settings."
  }
 ]
},
{
 "id": "C008",
 "title": "Contoso Pharma",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Contoso Pharma, a lab subject to regulatory audits, centralizes its monitoring in a Log Analytics workspace. The ingestion bill doubled in a year, and auditors found security logs kept for too short a time.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>LAW-Prod</b> (France Central): pay-as-you-go, about 150 GB ingested per day, no daily cap, access control mode “Require workspace permissions”.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Table</th><th>Plan</th><th>Interactive retention</th><th>Total retention</th></tr><tr><td>SecurityEvent</td><td>Analytics</td><td>90 days</td><td>90 days</td></tr><tr><td>Perf</td><td>Analytics</td><td>30 days</td><td>30 days</td></tr><tr><td>Syslog</td><td>Analytics</td><td>30 days</td><td>30 days</td></tr></table></div><p><b>Collection</b></p><ul><li>40 Windows VMs in RG-Prod: Azure Monitor agent, rule <b>DCR-Win</b> (System log: Error and Warning; Security log: all events; performance counters every 10 seconds).</li><li>15 Linux VMs in RG-Prod: Log Analytics agent (MMA/OMS), configured through the workspace's legacy settings.</li></ul><p><b>Alerts</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Name</th><th>Type</th><th>Configuration</th></tr><tr><td>AR-CPU</td><td>Metric alert</td><td>CPU > 90% (static threshold), RG-Prod VMs, Sev2, action group AG-Ops</td></tr><tr><td>AR-Del</td><td>Activity log alert</td><td>Delete virtual machine, scope Sub1, Sev1, AG-Ops</td></tr><tr><td>APR-Maint</td><td>Alert processing rule</td><td>Suppress notifications, scope RG-Prod, every Saturday 10 PM to 2 AM</td></tr></table></div><p><b>AG-Ops</b>: email to ops@contoso.com. The <b>app-contoso</b> web app is public. Developers in the <b>Dev-App</b> group have the Reader role on RG-App.</p>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>Security events must stay queryable for 1 year, then be kept for up to 5 years, at the lowest cost.</li><li>Ingestion cost must drop without losing any error or security event, and without export.</li><li>Dev-App members must see in LAW-Prod only the logs of RG-App resources, with no new role assignment.</li><li>On-call must get a phone call if app-contoso stops responding from at least two locations.</li><li>Linux VMs must send LAW-Prod the auth facility Syslog, Warning level and above, using a supported agent.</li><li>Sev0 alerts must notify even during Saturday maintenance.</li><li>AR-CPU fires too many false alerts: load varies widely by hour.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C008-1",
   "dom": 5,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current configuration, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "A Dev-App member can query RG-App VM logs in LAW-Prod.",
     "a": 1
    },
    {
     "l": "If AR-CPU fires on a Saturday at 11 PM, ops@contoso.com gets an email.",
     "a": 1
    },
    {
     "l": "If AR-CPU fires on a Saturday at 11 PM, the alert is visible in the portal.",
     "a": 0
    },
    {
     "l": "Security events from 6 months ago can still be found in LAW-Prod.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Dev-App: No.</b> The Reader role on RG-App only gives log access in resource context, and “Require workspace permissions” mode forbids it: a role on the workspace would be needed.</li><li><b>Saturday email: No.</b> APR-Maint suppresses RG-Prod alert notifications during the window.</li><li><b>Visible in the portal: Yes.</b> A processing rule only suppresses actions: the alert is created and visible.</li><li><b>Events from 6 months ago: No.</b> SecurityEvent's total retention is 90 days: that data is deleted.</li></ul>",
   "portal": {
    "path": [
     "Log Analytics workspaces",
     "LAW-Prod"
    ],
    "title": "LAW-Prod | Overview",
    "menu": [
     "*Overview",
     "Logs",
     "Tables"
    ],
    "rows": [
     [
      "*Access control mode",
      "Require workspace permissions"
     ],
     [
      "Pricing tier",
      "Pay-as-you-go"
     ]
    ]
   },
   "keep": "Resource context blocked by “Require workspace permissions”. Processing rule: actions suppressed, alert visible."
  },
  {
   "id": "C008-2",
   "dom": 5,
   "type": "hot",
   "stem": "<p>You need to meet requirements 1 and 2.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "SecurityEvent, interactive retention:",
     "o": [
      "90 days",
      "365 days",
      "2 years",
      "5 years"
     ],
     "a": 1
    },
    {
     "l": "SecurityEvent, total retention:",
     "o": [
      "365 days",
      "2 years",
      "5 years",
      "12 years"
     ],
     "a": 2
    },
    {
     "l": "In DCR-Win:",
     "o": [
      "Collect counters every 60 seconds",
      "Stop collecting the System log",
      "Switch SecurityEvent to the Basic plan",
      "Add a 100 GB daily cap"
     ],
     "a": 0
    },
    {
     "l": "LAW-Prod pricing tier:",
     "o": [
      "Pay-as-you-go",
      "100 GB/day commitment tier",
      "200 GB/day commitment tier",
      "500 GB/day commitment tier"
     ],
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Retention:</b> 365 days of interactive retention, then a total retention of 5 years: the period beyond interactive is kept at low cost (long-term retention), queryable with a search job or a restore, with no export.</li><li><b>DCR-Win:</b> collecting counters every 60 seconds instead of 10 cuts their volume by six without touching events. The System log holds the errors, the Basic plan would limit interactive retention to 30 days (requirement 1), and a daily cap would lose data.</li><li><b>Pricing:</b> at about 150 GB per day, the 100 GB/day tier is the best value: overage is billed at the same per-GB price as the tier. The 200 GB/day tier would bill 200 GB every day.</li></ul>",
   "portal": {
    "path": [
     "Log Analytics workspaces",
     "LAW-Prod",
     "Tables"
    ],
    "title": "SecurityEvent | Manage table",
    "menu": [
     "*Tables"
    ],
    "rows": [
     [
      "Table plan",
      "Analytics"
     ],
     [
      "*Interactive retention",
      "365 days"
     ],
     [
      "Total retention",
      "5 years"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Interactive up to 2 years, total up to 12 years. Commitment tier: pick the tier below your volume; overage at the same price."
  },
  {
   "id": "C008-3",
   "dom": 5,
   "type": "order",
   "stem": "<p>You need to meet requirement 5 without interrupting collection.</p><p>Which <b>quatre</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Create a Syslog DCR (auth facility, Warning level) to LAW-Prod",
    "Associate the DCR with the 15 Linux VMs, which installs the Azure Monitor agent",
    "Check that the Heartbeat table shows the Azure Monitor agent on the 15 VMs",
    "Uninstall the Log Analytics agent from the 15 VMs",
    "Configure Syslog in LAW-Prod's legacy agent settings",
    "Create a diagnostic setting to LAW-Prod on each VM"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>The Log Analytics agent has been retired since August 2024: migrate to the <b>Azure Monitor agent</b>, which is configured by a <b>data collection rule</b>. Create the DCR, associate it with the VMs (the portal installs the agent), check that data arrives (“Azure Monitor Agent” category in Heartbeat), and only then uninstall the old agent, so no data is lost. Legacy settings only drive the old agent, and a VM diagnostic setting doesn't collect guest Syslog.</p>",
   "portal": {
    "path": [
     "Monitor",
     "Data collection rules"
    ],
    "title": "DCR-Linux | Data sources",
    "menu": [
     "Resources",
     "*Data sources"
    ],
    "rows": [
     [
      "*Syslog · auth",
      "LOG_WARNING"
     ],
     [
      "Destination",
      "LAW-Prod"
     ]
    ]
   },
   "keep": "MMA → AMA migration: DCR, association, check, then uninstall the old agent."
  },
  {
   "id": "C008-4",
   "dom": 5,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirements 4, 6, and 7. What should you configure for each goal?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Goal",
    "Configuration"
   ],
   "srcs": [
    "A standard availability test with an alert rule",
    "A Resource Health alert on app-contoso",
    "A Voice action in an action group",
    "A Severity not equal to Sev0 filter on APR-Maint",
    "A second APR that adds AG-Ops to Sev0 alerts",
    "A dynamic threshold on AR-CPU",
    "A higher static threshold on AR-CPU"
   ],
   "tgts": [
    {
     "l": "Detect that app-contoso stops responding from two locations",
     "a": 0
    },
    {
     "l": "Phone on-call",
     "a": 2
    },
    {
     "l": "Sev0 notifies during Saturday maintenance",
     "a": 3
    },
    {
     "l": "Fewer false alerts on AR-CPU",
     "a": 5
    }
   ],
   "expl": "<ul><li><b>Availability:</b> a standard availability test (Application Insights) pings the URL from several locations, and its alert rule fires based on the number of failed locations. Resource Health only sees platform status, not an HTTP error response.</li><li><b>Phone:</b> an action group Voice notification.</li><li><b>Sev0:</b> a suppression rule wins over rules that add action groups: a second rule would send nothing. Exclude Sev0 from the suppression with a Severity filter.</li><li><b>AR-CPU:</b> a dynamic threshold learns hourly and daily behavior. Raising the static threshold would hide real spikes.</li></ul>",
   "portal": {
    "path": [
     "Monitor",
     "Alerts",
     "Alert processing rules"
    ],
    "title": "APR-Maint | Scope",
    "menu": [
     "*Scope",
     "Rules",
     "Scheduling"
    ],
    "rows": [
     [
      "Scope",
      "RG-Prod"
     ],
     [
      "*Filter",
      "Severity ≠ Sev0"
     ],
     [
      "Action",
      "Suppress notifications"
     ]
    ]
   },
   "keep": "Suppression wins: filter out what must still notify. Variable load → dynamic threshold."
  },
  {
   "id": "C008-5",
   "dom": 5,
   "type": "cmd",
   "stem": "<p>Auditors ask for the number of failed sign-ins per account over the last 24 hours. How should you complete the query?</p>",
   "rows": [
    {
     "l": "{0}",
     "o": [
      "ago(1d)",
      "now(1d)",
      "bin(1d)",
      "startofday(1d)"
     ],
     "a": 0
    },
    {
     "l": "{1}",
     "o": [
      "4624",
      "4625",
      "4634",
      "4740"
     ],
     "a": 1
    },
    {
     "l": "{2}",
     "o": [
      "TargetAccount",
      "Computer",
      "EventID",
      "bin(TimeGenerated, 1d)"
     ],
     "a": 0
    }
   ],
   "tpl": "SecurityEvent | where TimeGenerated > {0} | where EventID == {1} | summarize Echecs = count() by {2} | sort by Echecs desc",
   "expl": "<ul><li><b>ago(1d)</b> returns the moment 24 hours ago; now() doesn't take a duration, bin() rounds a value, and startofday() expects a date.</li><li><b>4625</b>: failed sign-in (4624 is a success, 4634 a sign-out, 4740 an account lockout).</li><li><b>TargetAccount</b>: the account the attempt targeted. Grouping by Computer would count per machine.</li></ul>",
   "portal": {
    "path": [
     "Log Analytics workspaces",
     "LAW-Prod"
    ],
    "title": "LAW-Prod | Logs",
    "menu": [
     "Overview",
     "*Logs"
    ],
    "rows": [
     [
      "*EventID",
      "4625"
     ],
     [
      "Grouping",
      "TargetAccount"
     ]
    ],
    "btn": "Run"
   },
   "keep": "ago() for a sliding window; 4625 = failed sign-in."
  },
  {
   "id": "C008-6",
   "dom": 5,
   "type": "single",
   "stem": "<p>You need to meet requirement 3. What should you do?</p>",
   "opts": [
    "Give Dev-App the Log Analytics Reader role on LAW-Prod",
    "Switch LAW-Prod to “resource or workspace” mode",
    "Create a workspace dedicated to RG-App resources",
    "Give Dev-App Monitoring Reader on RG-App"
   ],
   "ans": 1,
   "expl": "<p>In “Use resource or workspace permissions” mode, a user with no role on the workspace sees, in resource context, the logs of resources they can read. The Reader role on RG-App is then enough, with no new assignment. Log Analytics Reader on the workspace would give all logs, Monitoring Reader would be a new assignment, and a new workspace would mean changing collection.</p>",
   "portal": {
    "path": [
     "Log Analytics workspaces",
     "LAW-Prod"
    ],
    "title": "LAW-Prod | Properties",
    "menu": [
     "Overview",
     "*Properties"
    ],
    "rows": [
     [
      "*Access control mode",
      "Use resource or workspace permissions"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Rights on a resource = rights on its logs, if “resource or workspace” mode is on."
  },
  {
   "id": "C008-7",
   "dom": 5,
   "type": "hotspot",
   "stem": "<p>You need to apply the pricing tier chosen for LAW-Prod. Which menu item should you select? To answer, select the appropriate menu item.</p>",
   "ans": "Usage and estimated costs",
   "win": {
    "title": "LAW-Prod",
    "nav": [
     {
      "g": "General",
      "items": [
       "Overview",
       "Activity log",
       "Logs"
      ]
     },
     {
      "g": "Settings",
      "items": [
       "Tables",
       "Agents",
       "Usage and estimated costs",
       "Data export",
       "Network isolation",
       "Properties"
      ]
     },
     {
      "g": "Classic",
      "items": [
       "Legacy agents management",
       "Legacy solutions"
      ]
     }
    ]
   },
   "expl": "<p>The pricing tier (pay-as-you-go or commitment tier) is set in <b>Usage and estimated costs</b>, which also shows daily ingested volume and an estimate for each tier. Retention is set in Tables, the access mode in Properties.</p>",
   "portal": {
    "path": [
     "Log Analytics workspaces",
     "LAW-Prod"
    ],
    "title": "LAW-Prod | Usage and estimated costs",
    "menu": [
     "Tables",
     "*Usage and estimated costs"
    ],
    "rows": [
     [
      "*Pricing tier",
      "100 GB/day commitment tier"
     ],
     [
      "Average ingestion",
      "≈ 150 GB/day"
     ]
    ],
    "btn": "OK"
   },
   "keep": "Pricing tier: Usage and estimated costs. Retention: Tables. Access mode: Properties."
  }
 ]
}
);
