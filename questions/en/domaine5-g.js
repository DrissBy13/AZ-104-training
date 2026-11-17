/* Domain 5: monitoring and backup (batch G: D5-401 to D5-410, long scenarios) */
AZ.questions.push(
{
 "id": "D5-401",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Tailwind Traders must protect the following workloads in France Central with Azure Backup, keeping the number of vaults to a minimum:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Workload</th><th>Detail</th></tr><tr><td>VM-Sql1</td><td>SQL Server 2022 in an Azure VM, log backups every 15 minutes</td></tr><tr><td>Disk-Data7</td><td>Managed disk detached from a VM, snapshots every 4 hours</td></tr><tr><td>stinvoices</td><td>Blobs restorable to any moment in the last 30 days, with no copy outside the account</td></tr><tr><td>sharehr</td><td>Azure Files share, single-file restore</td></tr><tr><td>pg-orders</td><td>Azure Database for PostgreSQL – flexible server, 1-year retention</td></tr></table></div><p>Which vault type should you use for each workload?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM-Sql1 (SQL in the VM):",
   "o": [
    "Backup vault (data protection)",
    "Either one, as you prefer",
    "Recovery Services vault",
    "Neither: the service's native backup"
   ],
   "a": 2
  },
  {
   "l": "Disk-Data7:",
   "o": [
    "Backup vault (data protection)",
    "Either one, as you prefer",
    "Neither: the service's native backup",
    "Recovery Services vault"
   ],
   "a": 0
  },
  {
   "l": "stinvoices:",
   "o": [
    "Either one, as you prefer",
    "Recovery Services vault",
    "Neither: the service's native backup",
    "Backup vault (data protection)"
   ],
   "a": 3
  },
  {
   "l": "sharehr:",
   "o": [
    "Recovery Services vault",
    "Backup vault (data protection)",
    "Neither: the service's native backup",
    "Either one, as you prefer"
   ],
   "a": 0
  },
  {
   "l": "pg-orders:",
   "o": [
    "Either one, as you prefer",
    "Recovery Services vault",
    "Backup vault (data protection)",
    "Neither: the service's native backup"
   ],
   "a": 2
  }
 ],
 "expl": "<p>Azure Backup splits workloads between two vault types.</p><b>Recovery Services vault:</b> Azure VMs, SQL Server and SAP HANA in a VM, Azure Files shares, on-premises servers (MARS, MABS).<b>Backup vault:</b> managed disks, blobs (operational backup, which stays in the account, and vaulted backup), Azure Database for PostgreSQL (flexible server), AKS.<p>For stinvoices, operational backup (point-in-time restore, with no copy outside the account) uses a Backup vault.</p>",
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
    "*VM-Sql1 (SQL in the VM)",
    "Recovery Services vault"
   ],
   [
    "Disk-Data7",
    "Backup vault (data protection)"
   ],
   [
    "stinvoices",
    "Backup vault (data protection)"
   ],
   [
    "sharehr",
    "Recovery Services vault"
   ],
   [
    "pg-orders",
    "Backup vault (data protection)"
   ]
  ]
 },
 "keep": "Recovery Services: VMs, SQL/HANA in a VM, Azure Files, on-premises. Backup vault: disks, blobs, PostgreSQL, AKS."
},
{
 "id": "D5-402",
 "dom": 5,
 "type": "hot",
 "stem": "<p>RSV-Prod (France Central, GRS) protects 40 VMs with Pol-Daily: standard policy, daily backup at 10 PM, 30-day retention, instant restore snapshots kept for 2 days.</p><p>New needs:</p><ul><li>VM-Pay1, created with Trusted Launch, must be protected; the wizard rejects Pol-Daily;</li><li>VM-Pay2 must have a restore point every 4 hours during business hours;</li><li>restores from the last 5 days must be as fast as possible;</li><li>a monthly point must be kept for 12 months.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Policy type for VM-Pay1 and VM-Pay2:",
   "o": [
    "A MARS policy",
    "Standard",
    "Enhanced",
    "A disk policy"
   ],
   "a": 2
  },
  {
   "l": "VM-Pay2 schedule:",
   "o": [
    "Daily, at 8 AM and 4 PM via two policies",
    "Every 15 minutes, like SQL",
    "Weekly, with hourly snapshots",
    "Hourly, every 4 hours, over 12 hours"
   ],
   "a": 3
  },
  {
   "l": "Instant restore snapshot retention:",
   "o": [
    "1 day",
    "2 days",
    "5 days",
    "30 days"
   ],
   "a": 2
  },
  {
   "l": "Monthly point:",
   "o": [
    "A second monthly policy for these VMs",
    "A 12-month monthly retention",
    "An on-demand backup each month",
    "A monthly disk snapshot kept"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Enhanced.</b> Trusted Launch VMs are supported only with an enhanced policy, which also allows several backups a day (every 4, 6, 8, or 12 hours, in a defined window).<b>Instant restore.</b> Points still in the snapshot tier restore much faster. An enhanced policy keeps these snapshots up to 30 days; 5 days covers the need without unnecessary cost.<b>Retention.</b> A single policy combines daily, weekly, monthly, and yearly retention. An on-demand backup has its own expiry date and would need redoing every month.",
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
    "*Policy type for VM-Pay1 and VM-Pay2",
    "Enhanced"
   ],
   [
    "VM-Pay2 schedule",
    "Hourly, every 4 hours, over 12 hours"
   ],
   [
    "Instant restore snapshot retention",
    "5 days"
   ],
   [
    "Monthly point",
    "A 12-month monthly retention"
   ]
  ]
 },
 "keep": "Trusted Launch or several points a day = enhanced policy (snapshots up to 30 days)."
},
{
 "id": "D5-403",
 "dom": 5,
 "type": "hot",
 "stem": "<p>RSV-Prod (France Central, GRS, cross-region restore enabled) protects VM-App3 (Windows, two data disks) with a daily standard policy.</p><p>Today's requests:</p><ul><li>a user deleted the D:\\Exports folder on VM-App3 yesterday; only that folder must be recovered without restarting or changing VM-App3;</li><li>an admin wants to restore VM-App3 “over” itself with the Replace existing option; VM-App3 was deleted an hour ago;</li><li>the recovery team wants to create a copy of VM-App3 in France South, while France Central runs normally;</li><li>audit wants a copy of VM-App3 restored to another subscription in the same tenant.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "D:\\Exports folder:",
   "o": [
    "File recovery (mount script)",
    "Restore disks, then attach them to VM-App3",
    "Restore the whole VM to another group",
    "Yesterday's data disk snapshot"
   ],
   "a": 0
  },
  {
   "l": "Replace existing:",
   "o": [
    "Not possible: create a new VM",
    "Possible with cross-region restore",
    "Possible after undeleting the VM",
    "Works, the VM is recreated identically"
   ],
   "a": 0
  },
  {
   "l": "Copy in France South:",
   "o": [
    "Enable Site Recovery",
    "Copy the vault",
    "Restore from the secondary region",
    "Not possible while France Central works"
   ],
   "a": 2
  },
  {
   "l": "Copy in another subscription:",
   "o": [
    "Not possible: a vault only restores to its subscription",
    "Cross-subscription restore",
    "Export a VHD and copy it to the subscription",
    "Move the vault to the other subscription"
   ],
   "a": 1
  }
 ],
 "expl": "<b>File.</b> File recovery downloads a script that mounts the recovery point as drives on a machine (the VM or another one), without touching VM-App3.<b>Replace existing.</b> This option replaces the disks of an <b>existing</b> VM; if the VM was deleted, create a new VM or restore disks.<b>Secondary region.</b> Cross-region restore lets you restore in the paired region at any time, not only during a declared outage.<b>Another subscription.</b> Cross-subscription restore is enabled by default on a vault (it can be disabled) and targets a subscription in the same tenant.",
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
    "*D:\\Exports folder",
    "File recovery (mount script)"
   ],
   [
    "Replace existing",
    "Not possible: create a new VM"
   ],
   [
    "Copy in France South",
    "Restore from the secondary region"
   ],
   [
    "Copy in another subscription",
    "Cross-subscription restore"
   ]
  ]
 },
 "keep": "Single file = file recovery. Replace existing = VM present. CRR usable any time. Cross-subscription: same tenant."
},
{
 "id": "D5-404",
 "dom": 5,
 "type": "hot",
 "stem": "<p>After a ransomware attack on a competitor, Contoso management wants to harden RSV-Prod. Today: soft delete enabled (14 days), immutability disabled, no multi-user authorization.</p><p>Requirements:</p><ul><li>no administrator may disable soft delete, even with the Owner role;</li><li>deleted data must remain recoverable for 30 days;</li><li>no recovery point may be deleted before it expires, and this setting must be irreversible;</li><li>reducing a policy's retention must require approval from the Security team, which manages its own subscription.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Soft delete:",
   "o": [
    "Enabled, 14 days (current value)",
    "Always-on, 30 days",
    "Disabled in favor of immutability",
    "Enabled, 180 days, can be disabled"
   ],
   "a": 1
  },
  {
   "l": "Immutability:",
   "o": [
    "Disabled, with soft delete",
    "Enabled and locked",
    "A Delete resource lock",
    "Enabled, without lock"
   ],
   "a": 1
  },
  {
   "l": "Security approval:",
   "o": [
    "An Azure Policy Deny on backup policies",
    "A Resource Guard in the Security subscription",
    "The Backup Operator role for the admins",
    "An activity log alert sent to Security"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Soft delete.</b> The Always-on state prevents disabling it; retention is set from 14 to 180 days.<b>Immutability.</b> “Enabled” blocks early deletion of points but can be disabled; “locked” is permanent.<b>Multi-user authorization.</b> A Resource Guard in the Security team's subscription protects critical operations (reducing retention, disabling soft delete…): the backup admin must get temporary access to the Resource Guard, for example through PIM.",
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
    "*Soft delete",
    "Always-on, 30 days"
   ],
   [
    "Immutability",
    "Enabled and locked"
   ],
   [
    "Security approval",
    "A Resource Guard in the Security subscription"
   ]
  ]
 },
 "keep": "Always-on = soft delete can't be disabled. Locked immutability = permanent. Another team's approval = Resource Guard."
},
{
 "id": "D5-405",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso has two vaults in France Central:</p><ul><li>RSV-Old, LRS, protecting 12 VMs for two years;</li><li>RSV-New, created this morning, empty, GRS.</li></ul><p>Requirements:</p><ul><li>the 12 VMs' backups must be restorable in the paired region in case of a regional disaster;</li><li>new VMs must be protected in a vault that survives the loss of an availability zone, with no copy in another region;</li><li>cost must remain minimal.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For RSV-Old:",
   "o": [
    "Move the vault to France South",
    "Protect the 12 VMs in a new GRS vault",
    "Enable cross-region restore on RSV-Old",
    "Switch redundancy to GRS in properties"
   ],
   "a": 1
  },
  {
   "l": "For RSV-New:",
   "o": [
    "Switch it to ZRS while it's empty",
    "Keep it GRS, safer than ZRS",
    "Enable cross-region restore",
    "Delete it and recreate it as LRS"
   ],
   "a": 0
  },
  {
   "l": "Restore in the paired region, besides GRS:",
   "o": [
    "Nothing: GRS is enough to restore",
    "Enable cross-region restore",
    "A second policy in France South",
    "Site Recovery for the 12 VMs"
   ],
   "a": 1
  }
 ],
 "expl": "<b>RSV-Old.</b> A vault's storage redundancy can't be changed once an item has been protected. Protect the VMs in a GRS vault (stopping protection in RSV-Old, keeping or not the old data).<b>RSV-New.</b> Still empty, its redundancy can be changed: ZRS survives a zone loss with no copy out of region, and costs less than GRS.<b>Cross-region restore.</b> GRS copies data to the paired region, but only cross-region restore lets you restore there.",
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
    "*For RSV-Old",
    "Protect the 12 VMs in a new GRS vault"
   ],
   [
    "For RSV-New",
    "Switch it to ZRS while it's empty"
   ],
   [
    "Restore in the paired region, besides GRS",
    "Enable cross-region restore"
   ]
  ]
 },
 "keep": "Vault redundancy: changeable only while empty. ZRS = zones without another region. GRS + CRR = restore in the paired region."
},
{
 "id": "D5-406",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-ERP (France Central, zone 1) must be replicated to West Europe with Azure Site Recovery. It hosts a database; an app-consistent point is required every 4 hours, and recovery points must be kept for 48 hours.</p><p>Constraints:</p><ul><li>after a failover, VM-ERP must start with guaranteed compute capacity, even if West Europe is congested;</li><li>recovery must be tested every quarter without stopping replication or production;</li><li>after a real failover, once France Central is back, VM-ERP must return to its original region.</li></ul><p>What should you configure or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Replication policy:",
   "o": [
    "15-day retention, hourly",
    "48 h retention, app-consistent points every 4 h",
    "24 h retention, app-consistent points every 4 h",
    "48 h retention, crash-consistent points only"
   ],
   "a": 1
  },
  {
   "l": "Guaranteed capacity:",
   "o": [
    "Nothing: Site Recovery reserves target capacity",
    "An on-demand capacity reservation in West Europe",
    "A target availability set in West Europe",
    "A 3-year reserved instance in France Central"
   ],
   "a": 1
  },
  {
   "l": "Quarterly test:",
   "o": [
    "A test failover to an isolated network",
    "A reprotection with no failover",
    "An unplanned failover, then reprotection",
    "A planned failover, then a failback"
   ],
   "a": 0
  },
  {
   "l": "After a real failover, before going back:",
   "o": [
    "Commit, reprotect, then fail back",
    "Restore VM-ERP from Azure Backup",
    "Delete replication and re-enable it",
    "Redeploy VM-ERP in France Central"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Policy.</b> It sets point retention (here 48 hours) and app-consistent point frequency (here 4 hours); crash-consistent points are created continuously.<b>Capacity.</b> Site Recovery doesn't guarantee capacity in the target region. An on-demand capacity reservation, associated with the replicated item's compute settings, guarantees it (and is billed).<b>Test.</b> Test failover creates a copy in an isolated network without stopping replication; then clean it up.<b>Return.</b> After a failover, commit, reprotect in the other direction (West Europe → France Central), then fail back and reprotect again.",
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
    "*Replication policy",
    "48 h retention, app-consistent points every 4 h"
   ],
   [
    "Guaranteed capacity",
    "An on-demand capacity reservation in West Europe"
   ],
   [
    "Quarterly test",
    "A test failover to an isolated network"
   ],
   [
    "After a real failover, before going back",
    "Commit, reprotect, then fail back"
   ]
  ]
 },
 "keep": "Site Recovery: policy (retention + app consistency), capacity reservation, isolated test, commit → reprotect → failback."
},
{
 "id": "D5-407",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Fabrikam's operations team wants metric alerts on 120 VMs in RG-Prod (France Central), with as few rules as possible.</p><ul><li>Alert 1: average CPU above 85% for 15 minutes, on each VM, knowing which one is affected.</li><li>Alert 2: compute VMs have very variable load by hour; a fixed threshold generates too many false alerts.</li><li>Alert 3: 10 RG-Prod VMs are in West Europe; they must have the same CPU alert.</li><li>Alert 4: available memory on Linux VMs must fire below 500 MB; these VMs have no agent.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Alert 1:",
   "o": [
    "An activity log alert on RG-Prod",
    "A multi-resource rule on RG-Prod",
    "One rule per VM, created by a template",
    "A subscription rule, all regions"
   ],
   "a": 1
  },
  {
   "l": "Alert 2:",
   "o": [
    "A longer evaluation frequency",
    "An alert processing rule",
    "A dynamic threshold",
    "A higher static threshold"
   ],
   "a": 2
  },
  {
   "l": "Alert 3:",
   "o": [
    "Not possible with metric alerts",
    "An alert processing rule",
    "Add the West Europe VMs to the same rule",
    "A second rule for West Europe"
   ],
   "a": 3
  },
  {
   "l": "Alert 4:",
   "o": [
    "The Available Memory Bytes platform metric",
    "Deploy the Azure Monitor agent to collect guest memory",
    "Resource Health",
    "A load balancer probe"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Alert 1.</b> A multi-resource metric rule monitors all VMs in a scope (subscription or group) <b>in a single region</b>, and fires one alert per VM.<b>Alert 2.</b> A dynamic threshold learns each series' seasonal behavior (hour, day).<b>Alert 3.</b> A multi-resource rule covers only one region: a second rule is needed for West Europe.<b>Alert 4.</b> Available Memory Bytes is a VM platform (host) metric, with no agent, available for Windows and Linux. The agent would be needed for finer guest counters.",
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
    "A multi-resource rule on RG-Prod"
   ],
   [
    "Alert 2",
    "A dynamic threshold"
   ],
   [
    "Alert 3",
    "A second rule for West Europe"
   ],
   [
    "Alert 4",
    "The Available Memory Bytes platform metric"
   ]
  ]
 },
 "keep": "Multi-resource metric rule: same type, same region. Variable load = dynamic threshold. Memory: agentless platform metric."
},
{
 "id": "D5-408",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You're creating a log search alert rule on LAW-Prod. The query counts HTTP 500 errors per web app:</p><code>AppServiceHTTPLogs | where ScStatus == 500 | summarize Erreurs = count() by _ResourceId</code><p>Requirements:</p><ul><li>a separate alert per app exceeding 50 errors over the last 15 minutes;</li><li>evaluation must happen every 5 minutes;</li><li>the alert must resolve itself when the app drops below the threshold;</li><li>the team must receive the same JSON format for all its alerts, whatever their type.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Measure and splitting:",
   "o": [
    "Erreurs column, split by _ResourceId",
    "Table rows, with no dimension",
    "Table rows, split by the ScStatus column",
    "A separate rule per web app"
   ],
   "a": 0
  },
  {
   "l": "Frequency / lookback:",
   "o": [
    "5 min / 5 min",
    "5 min / 15 min",
    "15 min / 5 min",
    "1 min / 15 min"
   ],
   "a": 1
  },
  {
   "l": "Resolution:",
   "o": [
    "A second query that closes the alert",
    "A resolution processing rule",
    "Automatically resolve alerts",
    "Disable the rule every morning"
   ],
   "a": 2
  },
  {
   "l": "Format:",
   "o": [
    "A custom webhook per alert type",
    "The common alert schema in actions",
    "SMS format for every alert",
    "A logic app per alert rule"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Splitting.</b> Measure the aggregated Erreurs column and split by _ResourceId: each app becomes a series, with its own alert.<b>Windows.</b> Evaluation frequency (5 minutes) and lookback period (15 minutes) are separate; the lookback can be longer than the frequency.<b>Resolution.</b> “Automatically resolve alerts” makes the alert stateful: it resolves when the condition is no longer met.<b>Common schema.</b> Enabled in actions (email, webhook, logic app…), it gives the same JSON payload for metric, log, and activity log alerts.",
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
    "*Measure and splitting",
    "Erreurs column, split by _ResourceId"
   ],
   [
    "Frequency / lookback",
    "5 min / 15 min"
   ],
   [
    "Resolution",
    "Automatically resolve alerts"
   ],
   [
    "Format",
    "The common alert schema in actions"
   ]
  ]
 },
 "keep": "Log alert: measure + dimensions, frequency ≠ lookback, auto-resolve, common schema in actions."
},
{
 "id": "D5-409",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso is configuring notifications in RG-Prod.</p><ul><li>On-call must get a phone call for Sev0 alerts, and an SMS for Sev1.</li><li>During Saturday maintenance (10 PM – 2 AM), no notification may be sent for RG-Prod, except for Sev0 alerts; alerts must remain visible in the portal.</li><li>All Sub-Prod subscription alerts must also go to the ticketing tool through a webhook, without changing the 80 existing rules.</li><li>A developer is surprised to get only some SMS messages when an alert flaps several times a minute.</li></ul><p>What should you configure or answer?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Saturday maintenance:",
   "o": [
    "Suppress all, then a rule adding Sev0",
    "A Read-only lock on RG-Prod on Saturday",
    "Suppress notifications, Sev0 filtered out",
    "Disable RG-Prod rules on Saturday"
   ],
   "a": 2
  },
  {
   "l": "Webhook for all alerts:",
   "o": [
    "A subscription diagnostic setting",
    "Change the 80 rules to add the webhook",
    "A processing rule adding the action group",
    "A catch-all activity log alert"
   ],
   "a": 2
  },
  {
   "l": "Missing SMS:",
   "o": [
    "Limit of one SMS per number every 5 min",
    "The action group is partly failing",
    "SMS is disabled outside business hours",
    "A separate number per alert is needed"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Maintenance.</b> An alert processing rule of type “suppress notifications”, scheduled every Saturday, with a severity filter, spares Sev0. Alerts are still created and visible. A rule that adds actions doesn't lift a suppression: suppression wins.<b>Webhook.</b> A processing rule that “applies an action group” to all alerts in a scope avoids changing rules.<b>Limits.</b> Action groups limit SMS (and voice calls) to one every 5 minutes per number, and email to 100 per hour per address.",
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
    "*Saturday maintenance",
    "Suppress notifications, Sev0 filtered out"
   ],
   [
    "Webhook for all alerts",
    "A processing rule adding the action group"
   ],
   [
    "Missing SMS",
    "Limit of one SMS per number every 5 min"
   ]
  ]
 },
 "keep": "Processing rules: suppress (with filters) or add an action group to a scope. SMS: 1 / 5 min."
},
{
 "id": "D5-410",
 "dom": 5,
 "type": "hot",
 "stem": "<p>LAW-Corp (France Central) receives all teams' logs. The access control mode is “Use resource or workspace permissions”.</p><ul><li>The Web team (Contributor on RG-Web) must see their resources' logs, and only those.</li><li>The Security team must read only LAW-Corp's SecurityEvent table, not other tables.</li><li>SigninLogs audit logs must be queryable for 2 years, then kept up to 7 years.</li><li>The AppDebug table (500 GB/day) is only read during incidents, with simple queries; the team accepts limited query features and 30 days of interactive retention in exchange for a much lower ingestion cost.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Web team:",
   "o": [
    "Log Analytics Reader on LAW-Corp",
    "Log Analytics Contributor on LAW-Corp",
    "A workspace dedicated to the team",
    "Nothing: resource context is enough"
   ],
   "a": 3
  },
  {
   "l": "Security team:",
   "o": [
    "A role on the SecurityEvent table",
    "Log Analytics Reader on LAW-Corp",
    "Reader on the LAW-Corp resource",
    "Monitoring Reader on the subscription"
   ],
   "a": 0
  },
  {
   "l": "SigninLogs:",
   "o": [
    "Interactive 7 years, no long-term",
    "Interactive 2 years, total 7 years",
    "Continuous export to a storage account",
    "Basic plan, 7-year total retention"
   ],
   "a": 1
  },
  {
   "l": "AppDebug:",
   "o": [
    "Basic plan",
    "Daily cap",
    "Commitment tier",
    "Analytics plan"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Web.</b> In “resource or workspace” mode, a user who can read a resource sees its logs in resource context (from the resource, or in the workspace with only that data), with no workspace role.<b>Security.</b> Table-level RBAC grants access to a single table (custom role or role assigned at the table scope).<b>SigninLogs.</b> Interactive retention goes up to 2 years; total retention (long-term, low cost) up to 12 years.<b>AppDebug.</b> The Basic plan costs much less at ingestion, with limited queries (single table, per-query billing) and 30 days of interactive retention. A daily cap would lose data.",
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
    "*Web team",
    "Nothing: resource context is enough"
   ],
   [
    "Security team",
    "A role on the SecurityEvent table"
   ],
   [
    "SigninLogs",
    "Interactive 2 years, total 7 years"
   ],
   [
    "AppDebug",
    "Basic plan"
   ]
  ]
 },
 "keep": "Resource context, table-level RBAC, interactive ≤ 2 years / total ≤ 12 years, Basic plan for debug logs."
}
);
