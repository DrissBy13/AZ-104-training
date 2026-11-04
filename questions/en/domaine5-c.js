/* Domain 5: monitoring and backup (batch C : D5-061 to D5-110) */
AZ.questions.push(
{
 "id": "D5-063",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You compare Recovery Services vaults for Azure Backup and Azure Site Recovery (Azure VMs).</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Vault to back up VMs in France Central:",
   "o": [
    "Anywhere",
    "In West Europe",
    "In France Central"
   ],
   "a": 2
  },
  {
   "l": "Vault to replicate VMs from France Central to West Europe with Site Recovery:",
   "o": [
    "In West Europe",
    "Anywhere",
    "In France Central"
   ],
   "a": 0
  },
  {
   "l": "Cache storage account used by Site Recovery:",
   "o": [
    "In the vault",
    "In the target region",
    "In the source region"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Backup</b>: vault in the <b>same region</b> as the VMs.</li><li><b>Site Recovery</b>: vault in the <b>target region</b> (different from the source).</li><li>Site Recovery uses a <b>cache storage account</b> in the <b>source region</b> to collect changes before sending them to the target.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults"
  ],
  "title": "Locations",
  "rows": [
   [
    "*Backup",
    "VMs' region"
   ],
   [
    "Site Recovery",
    "Target region"
   ],
   [
    "ASR cache",
    "Source region"
   ]
  ]
 },
 "keep": "Backup = same region; ASR = target; cache = source."
},
{
 "id": "D5-065",
 "dom": 5,
 "type": "order",
 "stem": "<p>The source region is available again after a Site Recovery failover to the target region. You need to return to the source region.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>After the failover, you <b>commit</b> it. You <b>reprotect</b> to replicate in the other direction (target → source). When ready, you <b>fail over to the source</b> (failback), then <b>commit and reprotect</b> again to return to the original configuration.</p>",
 "portal": {
  "path": [
   "Replicated items",
   "VM9"
  ],
  "title": "VM9 | Overview",
  "rows": [
   [
    "1",
    "Commit"
   ],
   [
    "*2",
    "Re-protect"
   ],
   [
    "3",
    "Fail over to source"
   ],
   [
    "4",
    "Commit + re-protect"
   ]
  ]
 },
 "keep": "Commit → reprotect → failback → commit + reprotect.",
 "acts": [
  "Commit the failover to the target region",
  "Reprotect the VMs (replication from target to source)",
  "Fail over to the source region (failback)",
  "Commit then reprotect again to the target region",
  "Delete the vault",
  "Create a test failover in the source region"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D5-072",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You compare Azure Backup and Azure Site Recovery.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Azure Backup protects against accidental data deletion or corruption, with old points.",
   "a": 0
  },
  {
   "l": "Azure Site Recovery keeps recovery points for several years.",
   "a": 1
  },
  {
   "l": "You can use both services for the same VM.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Backup: Yes.</b> It keeps points over days, months, and years.</li><li><b>Site Recovery and years: No.</b> It keeps recent points (15 days at most): its goal is <b>continuity</b> (fail over fast), not archiving.</li><li><b>Both: Yes.</b> It's even recommended: Backup to restore data, Site Recovery to resume operations.</li></ul>",
 "portal": {
  "path": [
   "Business Continuity Center"
  ],
  "title": "Compare",
  "rows": [
   [
    "*Backup",
    "Points over years"
   ],
   [
    "Site Recovery",
    "Recent points · failover"
   ]
  ]
 },
 "keep": "Backup = restore data; ASR = resume operations. Both together."
},
{
 "id": "D5-073",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to match each concept to its definition.</p><p>To answer, drag the appropriate concept to each definition. Each concept may be used once, more than once, or not at all.</p>",
 "srcLabel": "Concepts",
 "tgtHead": [
  "Definition",
  "Concept"
 ],
 "srcs": [
  "RPO",
  "RTO",
  "Failover",
  "Failback"
 ],
 "tgts": [
  {
   "l": "Maximum amount of data you accept to lose, expressed in time",
   "a": 0
  },
  {
   "l": "Maximum acceptable time to restore service",
   "a": 1
  },
  {
   "l": "Run the workload in the backup site",
   "a": 2
  },
  {
   "l": "Return to the original site after recovery",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>RPO</b> (Recovery Point Objective): for example 15 minutes of lost data at most.</li><li><b>RTO</b> (Recovery Time Objective): for example 1 hour to restart.</li><li><b>Failover</b>: switching to the secondary site.</li><li><b>Failback</b>: returning to the primary site.</li></ul>",
 "portal": {
  "path": [
   "Business continuity"
  ],
  "title": "Concepts",
  "rows": [
   [
    "*RPO",
    "Max data lost"
   ],
   [
    "RTO",
    "Max recovery time"
   ],
   [
    "Failback",
    "Back to the original site"
   ]
  ]
 },
 "keep": "RPO = data; RTO = time."
},
{
 "id": "D5-083",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You examine the following KQL query:</p><pre>Perf\n| where TimeGenerated &gt; ago(1d)\n| where CounterName == \"% Free Space\" and InstanceName == \"C:\"\n| summarize FreeSpace = min(CounterValue) by Computer\n| where FreeSpace &lt; 10</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "The query analyzes:",
   "o": [
    "the last 24 hours",
    "all data",
    "the last month"
   ],
   "a": 0
  },
  {
   "l": "For each computer, it computes:",
   "o": [
    "the minimum free space of C:",
    "the number of measurements",
    "the average free space of all disks"
   ],
   "a": 0
  },
  {
   "l": "The result lists:",
   "o": [
    "computers whose C: dropped below 10% free space",
    "all computers",
    "the first 10 computers"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><code>ago(1d)</code>: the last 24 hours.</li><li><code>min(CounterValue) by Computer</code>: the lowest free space percentage of C: for each computer.</li><li>The last <code>where</code> keeps only those below 10%.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Results",
  "rows": [
   [
    "*VM-Files2",
    "FreeSpace 6.3"
   ],
   [
    "VM-Web4",
    "FreeSpace 8.9"
   ]
  ]
 },
 "keep": "ago = period; min by = per machine; final where = filter on the result."
},
{
 "id": "D5-084",
 "dom": 5,
 "type": "screen",
 "stem": "<p>You create a metric alert on VM10: it must fire when average CPU exceeds 90% over 5 minutes, be evaluated every minute, with severity 1, and notify the action group AG-OnCall.</p><p>How should you configure the alert?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li>Signal <b>Percentage CPU</b>, aggregation <b>Average</b>, <b>Greater than 90</b>.</li><li><b>Aggregation granularity</b> (lookback period) <b>5 minutes</b>; <b>frequency of evaluation</b> <b>1 minute</b>.</li><li>Action group <b>AG-OnCall</b>, severity <b>1 - Error</b>.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM10"
  ],
  "title": "Alert rule",
  "rows": [
   [
    "*Condition",
    "Average CPU > 90 · 5 min · every 1 min"
   ],
   [
    "Severity",
    "1 - Error"
   ],
   [
    "Actions",
    "AG-OnCall"
   ]
  ]
 },
 "keep": "Granularity = window; frequency = how often it's evaluated.",
 "win": {
  "title": "Create an alert rule",
  "sub": "VM10",
  "rows": [
   {
    "k": "head",
    "t": "Condition"
   },
   {
    "k": "select",
    "l": "Signal",
    "o": [
     "Percentage CPU",
     "Available Memory Bytes",
     "Disk Read Bytes"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Aggregation",
    "o": [
     "Average",
     "Maximum",
     "Total"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Operator",
    "o": [
     "Greater than",
     "Less than"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Threshold",
    "o": [
     "80",
     "90",
     "95"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Aggregation granularity",
    "o": [
     "1 minute",
     "5 minutes",
     "15 minutes"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Frequency of evaluation",
    "o": [
     "1 minute",
     "5 minutes",
     "15 minutes"
    ],
    "a": 0
   },
   {
    "k": "head",
    "t": "Actions and details"
   },
   {
    "k": "select",
    "l": "Action group",
    "o": [
     "AG-OnCall",
     "AG-Finance"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Severity",
    "o": [
     "0 - Critical",
     "1 - Error",
     "2 - Warning",
     "3 - Informational"
    ],
    "a": 1
   }
  ]
 }
},
{
 "id": "D5-085",
 "dom": 5,
 "type": "screen",
 "stem": "<p>You create a diagnostic setting on key vault KV3. Audit logs must go to workspace WS1, in specific tables, and be archived in storage95.</p><p>How should you configure the setting?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li>Category <b>AuditEvent</b>: all operations on the vault.</li><li>Destination <b>Log Analytics</b> with <b>resource-specific</b> tables, and <b>archive</b> to storage95.</li><li>No event hub. Metrics aren't scored here.</li></ul>",
 "portal": {
  "path": [
   "Key vaults",
   "KV3"
  ],
  "title": "Diagnostic setting",
  "rows": [
   [
    "*AuditEvent",
    "WS1 · resource specific"
   ],
   [
    "Archive",
    "storage95"
   ]
  ],
  "btn": "Save"
 },
 "keep": "A diagnostic setting can have several destinations.",
 "win": {
  "title": "Diagnostic setting",
  "sub": "KV3",
  "rows": [
   {
    "k": "head",
    "t": "Logs"
   },
   {
    "k": "check",
    "l": "Category: AuditEvent",
    "a": true
   },
   {
    "k": "check",
    "l": "Metrics: AllMetrics",
    "a": null
   },
   {
    "k": "head",
    "t": "Destination details"
   },
   {
    "k": "check",
    "l": "Send to Log Analytics workspace (WS1)",
    "a": true
   },
   {
    "k": "radio",
    "l": "Destination table",
    "opts": [
     "Azure diagnostics",
     "Resource specific"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "check",
    "l": "Archive to a storage account (storage95)",
    "a": true
   },
   {
    "k": "check",
    "l": "Stream to an event hub",
    "a": false
   }
  ]
 }
},
{
 "id": "D5-086",
 "dom": 5,
 "type": "screen",
 "stem": "<p>You configure backup for VM11. The backup must run every day at 10 PM, keep daily points for 14 days and Sunday weekly points for 8 weeks, with instant restore snapshots kept for 2 days.</p><p>How should you configure the policy?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li><b>Daily</b> frequency at <b>10 PM</b>.</li><li>Instant restore snapshots: <b>2 days</b>.</li><li>Daily retention <b>14 days</b>, weekly (Sunday) <b>8 weeks</b>.</li></ul><p>The policy type isn't scored: a single daily backup works with both.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault3"
  ],
  "title": "Policy",
  "rows": [
   [
    "*Daily",
    "22:00"
   ],
   [
    "Snapshots",
    "2 days"
   ],
   [
    "Daily / weekly",
    "14 d / 8 wk"
   ]
  ]
 },
 "keep": "Schedule + snapshots + retentions in the policy.",
 "win": {
  "title": "Create policy",
  "sub": "Vault3 | Backup policies",
  "rows": [
   {
    "k": "select",
    "l": "Policy type",
    "o": [
     "Standard",
     "Enhanced"
    ],
    "d": 0,
    "a": null
   },
   {
    "k": "select",
    "l": "Frequency",
    "o": [
     "Daily",
     "Weekly",
     "Hourly"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Time",
    "o": [
     "10:00 PM",
     "11:00 PM"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Retain instant recovery snapshot(s) for (days)",
    "o": [
     "1",
     "2",
     "5"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Retention of daily backup point (days)",
    "o": [
     "7",
     "14",
     "30"
    ],
    "a": 1
   },
   {
    "k": "check",
    "l": "Retention of weekly backup point (Sunday)",
    "a": true
   },
   {
    "k": "select",
    "l": "For (weeks)",
    "o": [
     "4",
     "8",
     "12"
    ],
    "a": 1
   }
  ]
 }
},
{
 "id": "D5-087",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>You need to enable backup for VM12 from the VM's page.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Backup",
 "expl": "<p><b>Backup</b> enables Azure Backup (choice of vault and policy). <b>Disaster recovery</b> enables Azure Site Recovery replication to another region or zone.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM12"
  ],
  "title": "VM12 | Backup",
  "menu": [
   "*Backup",
   "Disaster recovery"
  ],
  "rows": [
   [
    "Vault",
    "Vault1"
   ],
   [
    "Policy",
    "DefaultPolicy"
   ]
  ],
  "btn": "Enable backup"
 },
 "keep": "Backup = Backup; Disaster recovery = Site Recovery.",
 "win": {
  "title": "VM12 | Virtual machine",
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
     "Extensions + applications"
    ]
   },
   {
    "g": "Operations",
    "items": [
     "Bastion",
     "Auto-shutdown",
     "Backup",
     "Disaster recovery",
     "Updates"
    ]
   },
   {
    "g": "Monitoring",
    "items": [
     "Insights",
     "Alerts",
     "Metrics",
     "Diagnostic settings"
    ]
   }
  ]
 }
},
{
 "id": "D5-088",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>You need to create an alert that notifies the team when planned Azure platform maintenance affects your resources.</p><p>In the portal, which service should you open?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Service Health",
 "expl": "<p><b>Service Health</b> shows incidents, planned maintenance, and advisories, and lets you create <b>service health alerts</b> filtered by service, region, and event type.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Service Health"
  ],
  "title": "Service Health",
  "menu": [
   "*Service Health"
  ],
  "rows": [
   [
    "*Planned maintenance",
    "Health alert"
   ]
  ],
  "btn": "+ Create service health alert"
 },
 "keep": "Planned maintenance = Service Health.",
 "win": {
  "title": "Monitor | Overview",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Alerts",
     "Metrics",
     "Logs",
     "Service Health",
     "Workbooks"
    ]
   },
   {
    "g": "Insights",
    "items": [
     "Applications",
     "Virtual Machines",
     "Containers",
     "Networks"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Diagnostic settings",
     "Data Collection Rules",
     "Action groups"
    ]
   }
  ]
 }
},
{
 "id": "D5-091",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You prepare Azure Site Recovery for 10 VMs from France Central to West Europe.</p><p>For each of the following resources, select Yes if it must exist or be created. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A Recovery Services vault in West Europe",
   "a": 0
  },
  {
   "l": "A VPN gateway between the two regions",
   "a": 1
  },
  {
   "l": "A Backup vault in France Central, next to the VMs",
   "a": 1
  },
  {
   "l": "A target virtual network in West Europe",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Vault in West Europe: yes.</b></li><li><b>Target virtual network: yes</b>, to start the VMs in at failover (Site Recovery can create it).</li><li>The Backup vault isn't used by Site Recovery. No VPN gateway is needed: replication goes over the Azure network.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "Disaster recovery",
  "rows": [
   [
    "*Vault",
    "West Europe"
   ],
   [
    "*Target network",
    "vnet-weu (auto)"
   ]
  ]
 },
 "keep": "ASR: target vault + target network; no VPN."
},
{
 "id": "D5-100",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage action groups and alerts.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "An action group can be used by alerts from several subscriptions.",
   "a": 0
  },
  {
   "l": "An alert rule can call several action groups.",
   "a": 0
  },
  {
   "l": "An alert processing rule can add an action group to all alerts in a subscription.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Several subscriptions: Yes</b>, an action group is referenced by its resource ID.</li><li><b>Several groups: Yes</b>, for example one for on-call and one for tickets.</li><li><b>Processing rule: Yes</b>, it can add action groups (or suppress them) over a scope.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Action groups"
  ],
  "title": "AG-OnCall",
  "rows": [
   [
    "*Used by",
    "Alerts from 3 subscriptions"
   ]
  ]
 },
 "keep": "Action groups reusable everywhere."
},
{
 "id": "D5-101",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage Azure Site Recovery.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A test failover interrupts VM replication.",
   "a": 1
  },
  {
   "l": "After a failover, you must reprotect the VMs to replicate in the other direction.",
   "a": 0
  },
  {
   "l": "Site Recovery can replicate Azure VMs to another Azure region.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Test and replication: No</b>, replication continues during a test.</li><li><b>Reprotection: Yes</b>, it starts replication from the new active region to the old one.</li><li><b>Region to region: Yes</b>, it's the main scenario for Azure VMs.</li></ul>",
 "portal": {
  "path": [
   "Replicated items",
   "VM1"
  ],
  "title": "Overview",
  "rows": [
   [
    "*Test failover",
    "Replication continues"
   ],
   [
    "After failover",
    "Re-protect"
   ]
  ]
 },
 "keep": "A test doesn't stop replication."
},
{
 "id": "D5-102",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You choose a protection solution for each need.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Restore a file deleted 3 months ago on a VM:",
   "o": [
    "Availability set",
    "Azure Site Recovery",
    "Azure Backup"
   ],
   "a": 2
  },
  {
   "l": "Restart the whole application in another region in 30 minutes:",
   "o": [
    "Azure Site Recovery",
    "Availability zones",
    "Azure Backup"
   ],
   "a": 0
  },
  {
   "l": "Keep running without interruption if a datacenter goes down:",
   "o": [
    "Azure Backup",
    "Availability zones",
    "Azure Site Recovery"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Backup</b>: restore old data.</li><li><b>Site Recovery</b>: disaster recovery, with failover to another region.</li><li><b>Availability zones</b>: high availability, with no manual failover, against the loss of a datacenter.</li></ul>",
 "portal": {
  "path": [
   "Business continuity"
  ],
  "title": "Choose",
  "rows": [
   [
    "*Old file",
    "Backup"
   ],
   [
    "Another region",
    "Site Recovery"
   ],
   [
    "Datacenter lost",
    "Zones"
   ]
  ]
 },
 "keep": "Data = Backup; regional disaster = ASR; datacenter = zones."
},
{
 "id": "D5-103",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to enable backup for VM13 in vault Vault4 with the DefaultPolicy policy, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Subgroup",
   "o": [
    "protection",
    "item",
    "vault"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--policy-name",
    "--schedule",
    "--retention"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az backup protection enable-for-azurevm --vault-name Vault4 --vm VM13 --policy-name DefaultPolicy</code>. You then run an on-demand backup with <code>az backup protection backup-now</code>.</p><p>In PowerShell: <code>Enable-AzRecoveryServicesBackupProtection</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az backup protection enable-for-azurevm",
    "--policy-name"
   ]
  ]
 },
 "keep": "az backup protection enable-for-azurevm --policy-name.",
 "tpl": "az backup {0} enable-for-azurevm --resource-group RG1 --vault-name Vault4 --vm VM13 {1} DefaultPolicy"
},
{
 "id": "D5-104",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to create an action group that sends an email to oncall@contoso.com, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Resource",
   "o": [
    "action-group",
    "alert",
    "diagnostic-settings"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--action",
    "--receiver",
    "--notify"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az monitor action-group create ... --action email Team oncall@contoso.com</code>. The <b>short name</b> (12 characters max) appears in SMS and emails.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az monitor action-group create",
    "--action email …"
   ]
  ]
 },
 "keep": "az monitor action-group create --action.",
 "tpl": "az monitor {0} create --resource-group RG1 --name AG-OnCall --short-name OnCall {1} email Team oncall@contoso.com"
},
{
 "id": "D5-105",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to create a metric alert on VM14 by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Resource",
   "o": [
    "metrics alert",
    "activity-log alert",
    "log-analytics"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--condition",
    "--query",
    "--threshold-only"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az monitor metrics alert create --condition \"avg Percentage CPU &gt; 90\" --window-size 5m --evaluation-frequency 1m</code>. <code>activity-log alert</code> creates an activity log alert; log alerts use <code>az monitor scheduled-query</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az monitor metrics alert create",
    "--condition \"avg … > 90\""
   ]
  ]
 },
 "keep": "az monitor metrics alert create --condition.",
 "tpl": "az monitor {0} create --resource-group RG1 --name CPU-VM14 --scopes &lt;VM14 id&gt; {1} \"avg Percentage CPU &gt; 90\" --window-size 5m --evaluation-frequency 1m --action AG-OnCall"
},
{
 "id": "D5-106",
 "dom": 5,
 "type": "order",
 "stem": "<p>You need to be alerted by SMS if a network security rule is deleted in the subscription.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>The <b>action group</b> exists first (it can also be created in the wizard), then the <b>activity log alert rule</b> (signal: <code>Microsoft.Network/networkSecurityGroups/securityRules/delete</code>), to which you <b>associate</b> the action group.</p><p>Deleting a rule is a control plane operation, visible in the activity log with no diagnostic setting. NSGs have no suitable metric.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Create an alert rule",
  "rows": [
   [
    "1",
    "Action group (SMS)"
   ],
   [
    "*2",
    "Signal: Delete Security Rule"
   ],
   [
    "3",
    "Associate and enable"
   ]
  ]
 },
 "keep": "Action group → activity log rule → association.",
 "acts": [
  "Create an action group with an SMS notification",
  "Create an activity log alert rule on the Delete Security Rule operation",
  "Associate the action group with the rule and enable it",
  "Create a diagnostic setting on the NSG",
  "Create a metric alert on the NSG"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D5-107",
 "dom": 5,
 "type": "order",
 "stem": "<p>You need to restore VM15 from yesterday's backup, as a new VM named VM15-R in the same network.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>You open the backed-up item, start <b>Restore VM</b>, choose the <b>restore point</b>, then the configuration: <b>Create new virtual machine</b> with its name, network, and a staging location (storage account) if needed.</p><p>The original VM doesn't need to be stopped to create a new VM.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM15"
  ],
  "title": "Restore Virtual Machine",
  "rows": [
   [
    "Point",
    "Yesterday"
   ],
   [
    "*Configuration",
    "Create new · VM15-R"
   ]
  ],
  "btn": "Restore"
 },
 "keep": "Restore VM → point → Create new VM.",
 "acts": [
  "Open VM15's backup item and choose Restore VM",
  "Select yesterday's restore point",
  "Choose Create new virtual machine, name it VM15-R, and choose the network and staging location",
  "Stop VM15",
  "Delete the vault"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D5-108",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to match each monitoring tool to its use.</p><p>To answer, drag the appropriate tool to each use. Each tool may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tools",
 "tgtHead": [
  "Use",
  "Tool"
 ],
 "srcs": [
  "Metrics Explorer",
  "Log Analytics",
  "Workbooks",
  "Azure Advisor"
 ],
 "tgts": [
  {
   "l": "Quickly chart a disk's IOPS",
   "a": 0
  },
  {
   "l": "Join logs from several tables with KQL",
   "a": 1
  },
  {
   "l": "Publish an interactive report with parameters",
   "a": 2
  },
  {
   "l": "Get reliability and cost recommendations",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Metrics Explorer</b>: metric charts.</li><li><b>Log Analytics</b>: KQL queries on logs.</li><li><b>Workbooks</b>: interactive reports.</li><li><b>Advisor</b>: recommendations.</li></ul>",
 "portal": {
  "path": [
   "Monitor"
  ],
  "title": "Tools",
  "rows": [
   [
    "*Metrics Explorer",
    "Charts"
   ],
   [
    "Log Analytics",
    "KQL"
   ],
   [
    "Workbooks",
    "Reports"
   ],
   [
    "Advisor",
    "Recommendations"
   ]
  ]
 },
 "keep": "Metrics / KQL / reports / recommendations."
},
{
 "id": "D5-109",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate KQL operator for each need.</p><p>To answer, drag the appropriate operator to each need. Each operator may be used once, more than once, or not at all.</p>",
 "srcLabel": "Operators",
 "tgtHead": [
  "Need",
  "Operator"
 ],
 "srcs": [
  "where",
  "project",
  "extend",
  "summarize",
  "join"
 ],
 "tgts": [
  {
   "l": "Keep only rows where Computer equals VM1",
   "a": 0
  },
  {
   "l": "Keep only the TimeGenerated and Computer columns",
   "a": 1
  },
  {
   "l": "Add a computed RoundedCPU column",
   "a": 2
  },
  {
   "l": "Count rows per computer",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>where</b>: filters rows.</li><li><b>project</b>: chooses (and renames) columns.</li><li><b>extend</b>: adds computed columns.</li><li><b>summarize</b>: aggregates (count, avg, max…) by groups.</li></ul><p><b>join</b> combines two tables.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "KQL",
  "rows": [
   [
    "*where",
    "Rows"
   ],
   [
    "project",
    "Columns"
   ],
   [
    "extend",
    "Computed column"
   ],
   [
    "summarize",
    "Aggregation"
   ]
  ]
 },
 "keep": "where rows; project columns; extend compute; summarize aggregates."
}
);
