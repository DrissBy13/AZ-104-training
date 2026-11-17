/* Domain 5: monitoring and backup (batch I: D5-421 to D5-430, long scenarios) */
AZ.questions.push(
{
 "id": "D5-421",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso wants to use Azure as the recovery site for two on-premises environments:</p><ul><li>a 4-host Hyper-V cluster, without System Center VMM, hosting 60 VMs;</li><li>a VMware vSphere farm of 120 VMs.</li></ul><p>Requirements:</p><ul><li>replication must use the current components Microsoft recommends;</li><li>after failover, VMs must start in VNet-DR (France Central), in the right subnets;</li><li>recovery must be tested without touching on-premises production.</li></ul><p>What should you deploy or configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For Hyper-V:",
   "o": [
    "Site Recovery provider and agent on each host",
    "Azure Migrate alone, with no vault",
    "The MARS agent in each guest VM, with no Hyper-V site",
    "A replication appliance on a VM"
   ],
   "a": 0
  },
  {
   "l": "For VMware:",
   "o": [
    "A classic configuration server",
    "The Site Recovery provider on vCenter",
    "The replication appliance (modernized)",
    "The Recovery Services agent on ESXi"
   ],
   "a": 2
  },
  {
   "l": "Failed-over VM network:",
   "o": [
    "A route table on VNet-DR",
    "A peering between VNet-DR and the site",
    "The replicated item's settings",
    "A private DNS zone for VNet-DR"
   ],
   "a": 2
  },
  {
   "l": "Test:",
   "o": [
    "An unplanned failover",
    "An isolated test failover",
    "A reverse reprotection",
    "A planned failover after hours"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Hyper-V without VMM.</b> Create a Hyper-V site in the vault and install the Azure Site Recovery provider and the Recovery Services agent, which replicates disks, on each host.<b>VMware.</b> The modernized architecture uses an Azure Site Recovery replication appliance (an on-premises VM); the classic configuration server is retired.<b>Network.</b> For replication to Azure, the target network and subnet are set in each replicated item's settings (or by default when enabling replication).<b>Test.</b> Test failover creates VMs in an isolated network, without stopping on-premises VMs or replication.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*For Hyper-V",
    "Site Recovery provider and agent on each host"
   ],
   [
    "For VMware",
    "The replication appliance (modernized)"
   ],
   [
    "Failed-over VM network",
    "The replicated item's settings"
   ],
   [
    "Test",
    "An isolated test failover"
   ]
  ]
 },
 "keep": "Hyper-V: provider + Recovery Services agent on hosts. VMware: replication appliance. Test: isolated network."
},
{
 "id": "D5-422",
 "dom": 5,
 "type": "hot",
 "stem": "<p>The Orders application has three VMs replicated by Site Recovery from France Central to West Europe: VM-Web, VM-App, and VM-Db. VM-Db uses Azure Disk Encryption (keys in KV-FC). The three VMs share transactions: after a failover, their data must match the same moment.</p><p>Failover must start VM-Db, then run a runbook that updates the connection string, then start VM-App and VM-Web.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Consistency across the three VMs:",
   "o": [
    "Crash-consistent points only",
    "A target availability set",
    "Multi-VM consistency",
    "One replication policy per VM"
   ],
   "a": 2
  },
  {
   "l": "For VM-Db (ADE):",
   "o": [
    "A target key vault in West Europe",
    "A VPN gateway to KV-FC",
    "Disable ADE before replication",
    "Use KV-FC from West Europe"
   ],
   "a": 0
  },
  {
   "l": "Order and script:",
   "o": [
    "Three successive manual failovers",
    "An ordered replication policy",
    "A recovery plan with a runbook",
    "An alert rule launching the runbook"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Multi-VM.</b> Multi-VM consistency puts the VMs in a replication group: their shared recovery points match the same moment. It costs some performance (VMs communicate on port 20004).<b>ADE.</b> For a VM encrypted by Azure Disk Encryption, Site Recovery needs a key vault in the target region; it copies keys and secrets there when replication is enabled.<b>Recovery plan.</b> It orders startup by groups and lets you insert Azure Automation runbooks or manual actions between groups.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Consistency across the three VMs",
    "Multi-VM consistency"
   ],
   [
    "For VM-Db (ADE)",
    "A target key vault in West Europe"
   ],
   [
    "Order and script",
    "A recovery plan with a runbook"
   ]
  ]
 },
 "keep": "Same moment for several VMs = multi-VM consistency. ADE = target key vault. Order + script = recovery plan."
},
{
 "id": "D5-423",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-Sql2 hosts SQL Server 2022 with 6 databases. Developers regularly create new ones. You're configuring “SQL Server in Azure VM” backup in RSV-Prod.</p><p>Requirements:</p><ul><li>all future databases on the instance must be protected with no action;</li><li>at most 15 minutes of data loss;</li><li>the Sales database must be restorable to 2:37 PM yesterday, under another name, on the same instance, without overwriting the original;</li><li>the BI team wants the .bak files from a backup point to copy elsewhere.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Future databases:",
   "o": [
    "Auto-protection",
    "A daily discovery alert",
    "A scheduled discovery script",
    "One policy per database"
   ],
   "a": 0
  },
  {
   "l": "Policy:",
   "o": [
    "Daily full, logs every 15 min",
    "Hourly differential, no logs",
    "Weekly full and differential",
    "Full every 15 minutes"
   ],
   "a": 0
  },
  {
   "l": "Sales database at 2:37 PM:",
   "o": [
    "Restore the whole VM",
    "Overwrite the existing database",
    "VM file recovery",
    "Point in time, alternate location"
   ],
   "a": 3
  },
  {
   "l": "The .bak files:",
   "o": [
    "Download the .bak from the vault",
    "Restore as files",
    "Copy from the vault's storage",
    "Not possible with Azure Backup"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Auto-protection.</b> Enabled at instance level, it detects and protects new databases (checked about every 8 hours).<b>RPO.</b> Log backups, as often as every 15 minutes, limit data loss; full and differential backups serve as the base.<b>Point in time.</b> Pick a date and time to the minute; restoring to an alternate location creates a database under a new name.<b>Files.</b> “Restore as files” writes the .bak files to a path on the target VM.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Future databases",
    "Auto-protection"
   ],
   [
    "Policy",
    "Daily full, logs every 15 min"
   ],
   [
    "Sales database at 2:37 PM",
    "Point in time, alternate location"
   ],
   [
    "The .bak files",
    "Restore as files"
   ]
  ]
 },
 "keep": "SQL in VM: auto-protection, logs every 15 min, point in time, restore as files."
},
{
 "id": "D5-424",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You're creating a metric alert on storage account stapp (Transactions metric, ResponseType dimension).</p><p>Requirements:</p><ul><li>the alert must track the total number of transactions failing authorization (ResponseType = AuthorizationError);</li><li>the condition must be evaluated every minute over the last 5 minutes;</li><li>an alert must fire only if the threshold is crossed in 3 of the last 4 evaluations, to ignore isolated spikes;</li><li>the team wants an email when the alert fires and when it resolves.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Aggregation and dimension:",
   "o": [
    "Maximum, split by API",
    "Average, no dimension",
    "Total, AuthorizationError filter",
    "Count, ResponseType = Success filter"
   ],
   "a": 2
  },
  {
   "l": "Frequency / granularity:",
   "o": [
    "1 min / 5 min",
    "5 min / 1 min",
    "1 min / 1 min",
    "5 min / 15 min"
   ],
   "a": 0
  },
  {
   "l": "3 violations out of 4:",
   "o": [
    "Dynamic threshold, 3 of 4 violations",
    "An alert processing rule",
    "An action group with a notification delay",
    "A 3-minute evaluation frequency"
   ],
   "a": 0
  },
  {
   "l": "Email on resolution:",
   "o": [
    "A second, inverse rule",
    "Not possible for a metric",
    "Automatic (stateful alert)",
    "An activity log alert"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Aggregation.</b> For a transaction count, use Total, filtered on the wanted dimension value.<b>Windows.</b> Evaluation frequency (1 minute) and aggregation granularity (5-minute lookback) are two separate settings.<b>Number of violations.</b> Dynamic thresholds let you alert only after X violations over Y periods. With a static threshold, that setting isn't available.<b>Resolution.</b> Metric alerts are stateful: the action group is notified on firing and on resolution.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Aggregation and dimension",
    "Total, AuthorizationError filter"
   ],
   [
    "Frequency / granularity",
    "1 min / 5 min"
   ],
   [
    "3 violations out of 4",
    "Dynamic threshold, 3 of 4 violations"
   ],
   [
    "Email on resolution",
    "Automatic (stateful alert)"
   ]
  ]
 },
 "keep": "Metric: right aggregation, dimension filter, frequency ≠ granularity, X of Y violations with dynamic threshold."
},
{
 "id": "D5-425",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Northwind wants several alerts based on the activity log, in subscription Sub-Prod.</p><ul><li>Alert 1: notify the team if an Azure incident or planned maintenance affects Azure SQL Database or App Service in France Central, and only those services and that region.</li><li>Alert 2: notify when VM-Erp becomes Unavailable or Degraded for a platform reason.</li><li>Alert 3: notify when someone deletes a role assignment in Sub-Prod.</li><li>Alert 4: notify when a resource becomes non-compliant with the “Allowed locations” policy.</li></ul><p>What should you create?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Alert 1:",
   "o": [
    "A VM Resource Health alert",
    "A filtered Service Health alert",
    "An availability metric alert",
    "An Azure Advisor recommendation"
   ],
   "a": 1
  },
  {
   "l": "Alert 2:",
   "o": [
    "A Service Health alert for the region",
    "A Resource Health alert on VM-Erp",
    "A CPU metric alert",
    "A standard availability test"
   ],
   "a": 1
  },
  {
   "l": "Alert 3:",
   "o": [
    "A Resource Health alert",
    "A Deny policy on role assignments",
    "Activity log, Administrative category",
    "A log alert on SigninLogs"
   ],
   "a": 2
  },
  {
   "l": "Alert 4:",
   "o": [
    "An Azure Policy compliance workbook",
    "Activity log, Policy category",
    "An Advisor recommendation",
    "A Service Health alert"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Service Health</b>: Azure incidents, maintenance, and advisories, filterable by service, region, and type.<b>Resource Health</b>: a specific resource's health, filterable by state (Available, Unavailable, Degraded, Unknown) and by cause (platform or user).<b>Activity log, Administrative category</b>: management operations, including Microsoft.Authorization/roleAssignments/delete.<b>Policy category</b>: Azure Policy evaluations, including non-compliance results.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Alert 1",
    "A filtered Service Health alert"
   ],
   [
    "Alert 2",
    "A Resource Health alert on VM-Erp"
   ],
   [
    "Alert 3",
    "Activity log, Administrative category"
   ],
   [
    "Alert 4",
    "Activity log, Policy category"
   ]
  ]
 },
 "keep": "Activity log alerts: Service Health, Resource Health, Administrative (operations), Policy (compliance)."
},
{
 "id": "D5-426",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Fabrikam is designing its Log Analytics workspace strategy. The company has subsidiaries in France and the United States.</p><ul><li>European resource logs must stay in the European Union; US resource logs in the United States.</li><li>Each subsidiary pays its own ingestion costs, but a single operations center must be able to query all data.</li><li>The Security team will use Microsoft Sentinel on European data.</li><li>Microsoft recommends keeping the number of workspaces low.</li></ul><p>What should you choose?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Number of workspaces:",
   "o": [
    "One per team and region",
    "Two, one per residency area",
    "One per monitored resource",
    "One, in the United States"
   ],
   "a": 1
  },
  {
   "l": "Billing per subsidiary:",
   "o": [
    "A cost tag per table",
    "One workspace per subsidiary is enough",
    "A daily cap per subsidiary",
    "Not possible with Log Analytics billing"
   ],
   "a": 1
  },
  {
   "l": "Operations center:",
   "o": [
    "A data export rule",
    "Copy the data every night",
    "Cross-workspace queries (workspace())",
    "A third central workspace fed by both"
   ],
   "a": 2
  },
  {
   "l": "Sentinel:",
   "o": [
    "Enabled at the Security subscription level",
    "Enabled on the US workspace",
    "A dedicated workspace required for Sentinel",
    "Enabled on the France Central workspace"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Residency.</b> Data is stored in the workspace's region: one workspace per residency area is needed, and no more.<b>Billing.</b> Each workspace is billed in its subscription; placing each workspace in its subsidiary's subscription splits costs.<b>Querying.</b> Cross-workspace queries (workspace(\"…\") or several selected workspaces) give a single view.<b>Sentinel.</b> It's enabled on an existing workspace; Microsoft recommends enabling it on the workspace that already holds the useful data rather than creating one.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Number of workspaces",
    "Two, one per residency area"
   ],
   [
    "Billing per subsidiary",
    "One workspace per subsidiary is enough"
   ],
   [
    "Operations center",
    "Cross-workspace queries (workspace())"
   ],
   [
    "Sentinel",
    "Enabled on the France Central workspace"
   ]
  ]
 },
 "keep": "One workspace per residency or billing requirement, no more. Cross-workspace queries for a single view."
},
{
 "id": "D5-427",
 "dom": 5,
 "type": "hot",
 "stem": "<p>LAW-Sec keeps SecurityEvent with 90 days of interactive retention and 7 years of total retention.</p><ul><li>Audit asks for all 4625 events for the admin-old account between March and May 2023, once.</li><li>Investigators then want to analyze, for two weeks, with full and fast KQL queries, all events from April 12, 2023.</li><li>The group SIEM must receive every new SecurityEvent continuously, as it's ingested.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Audit request:",
   "o": [
    "An export to storage",
    "A 3-month restore",
    "A search job",
    "A regular KQL query"
   ],
   "a": 2
  },
  {
   "l": "April 12 analysis:",
   "o": [
    "A daily search job",
    "A restore of the period",
    "A 7-year interactive retention",
    "An export to storage"
   ],
   "a": 1
  },
  {
   "l": "Feed to the SIEM:",
   "o": [
    "A workspace diagnostic setting",
    "A data export rule",
    "A scheduled search job",
    "A log alert per event"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Search job.</b> It scans long-term retention data (or large volumes) with a simple filter, asynchronously, and writes the result to a new table.<b>Restore.</b> It brings a period of long-term data back into a temporary table, queryable with full KQL and fast, until you delete it.<b>Export.</b> A data export rule continuously sends a table's new data to a storage account or Event Hubs. A workspace diagnostic setting only sends its own audit logs.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Audit request",
    "A search job"
   ],
   [
    "April 12 analysis",
    "A restore of the period"
   ],
   [
    "Feed to the SIEM",
    "A data export rule"
   ]
  ]
 },
 "keep": "Long-term retention: search job (filter) or restore (analyze). Continuous feed: data export rule."
},
{
 "id": "D5-428",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VNet-Isolé VMs (France Central) have no internet access, default or through a proxy. They must send logs to LAW-Iso with the Azure Monitor agent.</p><p>Requirements:</p><ul><li>data must transit only through private addresses;</li><li>LAW-Iso must no longer accept ingestion or queries from public networks;</li><li>VMs in the company's other networks must still reach other workspaces over the internet.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Private access:",
   "o": [
    "A service endpoint",
    "A peering to Azure Monitor's network",
    "A NAT gateway with a fixed IP",
    "An AMPLS and a private endpoint"
   ],
   "a": 3
  },
  {
   "l": "For the Azure Monitor agent:",
   "o": [
    "Nothing beyond the DCR",
    "A DCE in the AMPLS, associated with VMs",
    "The Log Analytics agent instead",
    "A diagnostic setting on each VM"
   ],
   "a": 1
  },
  {
   "l": "On LAW-Iso:",
   "o": [
    "A Read-only lock",
    "Deny public access (ingestion, queries)",
    "A daily cap on LAW-Iso ingestion",
    "Resource-context access control mode"
   ],
   "a": 1
  },
  {
   "l": "AMPLS access mode (ingestion and queries):",
   "o": [
    "Private only",
    "Open"
   ],
   "a": 0
  }
 ],
 "expl": "<b>AMPLS.</b> Azure Monitor Private Link uses a scope (AMPLS) grouping workspaces and DCEs, exposed through a private endpoint in the network.<b>DCE.</b> With private link, the Azure Monitor agent needs a data collection endpoint added to the AMPLS and associated with the machines, to fetch its configuration and send data privately.<b>Workspace.</b> In LAW-Iso's network isolation, deny public access for ingestion and queries.<b>Access mode.</b> “Private only” limits networks connected to the AMPLS to the scope's resources only, preventing leaks to other workspaces. It only applies to networks connected through the private endpoint (and those sharing its DNS zones): the company's other networks keep their public access.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Private access",
    "An AMPLS and a private endpoint"
   ],
   [
    "For the Azure Monitor agent",
    "A DCE in the AMPLS, associated with VMs"
   ],
   [
    "On LAW-Iso",
    "Deny public access (ingestion, queries)"
   ],
   [
    "AMPLS access mode (ingestion and queries)",
    "Private only"
   ]
  ]
 },
 "keep": "Private Azure Monitor: AMPLS + private endpoint + DCE for AMA + public access denied on the workspace."
},
{
 "id": "D5-429",
 "dom": 5,
 "type": "hot",
 "stem": "<p>RSV-Prod protects 300 VMs with a standard policy: daily for 30 days, weekly for 12 weeks, monthly for 7 years, yearly for 10 years. The backup storage bill is soaring because of the monthly and yearly points.</p><ul><li>Monthly and yearly points are almost never restored; a restore can wait several hours.</li><li>Management wants to know how long a point must stay in the target tier before leaving it with no extra charge.</li><li>The vault's redundancy is LRS; management wants protection against a zone loss, with no secondary region.</li></ul><p>What should you answer or configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For monthly and yearly points:",
   "o": [
    "The storage account's Cool tier",
    "The backup Archive tier",
    "A second, shorter policy",
    "Delete the monthly points"
   ],
   "a": 1
  },
  {
   "l": "Minimum time in that tier:",
   "o": [
    "30 days",
    "90 days",
    "180 days",
    "365 days"
   ],
   "a": 2
  },
  {
   "l": "Redundancy:",
   "o": [
    "A new ZRS vault from now on",
    "Switch RSV-Prod to ZRS in its properties",
    "Enable cross-region restore",
    "Switch RSV-Prod to GRS"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Archive.</b> Azure Backup can move a VM's long-term recovery points (monthly, yearly) to the vault's Archive tier, much cheaper, with several hours of rehydration before restore. “Recommended” points are those whose move saves money.<b>Duration.</b> A point must stay at least 180 days in Archive; early deletion is billed.<b>Redundancy.</b> A vault's redundancy can't change after the first protection; a new ZRS vault is needed.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*For monthly and yearly points",
    "The backup Archive tier"
   ],
   [
    "Minimum time in that tier",
    "180 days"
   ],
   [
    "Redundancy",
    "A new ZRS vault from now on"
   ]
  ]
 },
 "keep": "Rarely restored long-term points = backup Archive tier (180 days minimum)."
},
{
 "id": "D5-430",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-Fin1 (Windows) is encrypted with Azure Disk Encryption; the BEK and KEK keys are in KV-Fin (Vault access policy permission model). Configuring backup in RSV-Prod fails with a key vault access error.</p><p>Then:</p><ul><li>three months later, the KEK key is deleted by mistake, and the team must restore VM-Fin1 from a two-month-old point;</li><li>an auditor asks whether VM-Fin1's backups are readable without the keys.</li></ul><p>What should you do or answer?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Configuration error:",
   "o": [
    "Switch KV-Fin to the RBAC permission model",
    "Disable ADE while the backup runs",
    "An access policy for Backup Management Service",
    "Use an enhanced backup policy"
   ],
   "a": 2
  },
  {
   "l": "KEK deleted:",
   "o": [
    "Restore the VM without the key, then re-encrypt",
    "VM-Fin1 can't be restored",
    "Recreate a key with the same name",
    "Recover or restore the key, then the VM"
   ],
   "a": 3
  },
  {
   "l": "Backups readable without keys:",
   "o": [
    "Yes, after 90 days",
    "No: the disks stay encrypted",
    "Only with GRS",
    "Yes: Azure Backup decrypts them"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Access.</b> For an ADE VM, Azure Backup also backs up keys and secrets; with the Access policy model, a policy granting the Backup Management Service permissions on keys and secrets is needed.<b>Deleted key.</b> If the vault's soft delete is on, recover the key; otherwise, restore the keys and secrets backed up with the recovery point, then restore the VM. A new key with the same name isn't the same key.<b>Readability.</b> Backed-up disks stay encrypted: without the keys, they're unreadable.",
 "portal": {
  "path": [
   "Azure portal"
  ],
  "title": "Answer",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Configuration error",
    "An access policy for Backup Management Service"
   ],
   [
    "KEK deleted",
    "Recover or restore the key, then the VM"
   ],
   [
    "Backups readable without keys",
    "No: the disks stay encrypted"
   ]
  ]
 },
 "keep": "ADE VM: Backup Management Service needs key vault access; keys are backed up with the point."
}
);
