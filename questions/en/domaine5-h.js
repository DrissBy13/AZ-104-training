/* Domain 5: monitoring and backup (batch H: D5-411 to D5-420, long scenarios) */
AZ.questions.push(
{
 "id": "D5-411",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You're deploying guest data collection on 300 servers: 200 Windows Azure VMs, 60 Linux Azure VMs, and 40 on-premises physical servers running Windows Server 2022. Everything must land in LAW-Ops.</p><p>Requirements:</p><ul><li>new Azure VMs must get the agent and configuration automatically;</li><li>on Windows VMs, only Security events 4624 and 4625 must be collected;</li><li>before storage, the column holding the client IP address must be removed from events, to reduce volume;</li><li>on-premises servers must use exactly the same agent and configuration as Azure VMs.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Automatic deployment:",
   "o": [
    "An Azure Policy initiative (AMA + DCR)",
    "A startup script in each image",
    "A diagnostic setting on each VM",
    "The Log Analytics agent baked into the image"
   ],
   "a": 0
  },
  {
   "l": "Events 4624 and 4625:",
   "o": [
    "A where filter in each KQL query",
    "A daily cap on LAW-Ops",
    "An XPath query in the DCR",
    "An alert rule ignoring the rest"
   ],
   "a": 2
  },
  {
   "l": "Column removal:",
   "o": [
    "A saved KQL function",
    "A retention rule on the column",
    "A data export without the column",
    "A KQL transformation in the DCR"
   ],
   "a": 3
  },
  {
   "l": "On-premises servers:",
   "o": [
    "The Log Analytics agent, still supported",
    "Azure Arc, then AMA and the same DCR",
    "A diagnostic setting per server",
    "A central Syslog collector"
   ],
   "a": 1
  }
 ],
 "expl": "<b>At scale.</b> Built-in Azure Policy initiatives deploy the Azure Monitor agent and create the DCR association on existing (remediation task) and future VMs.<b>Filtering.</b> An XPath query in the DCR's “Windows Event Logs” data source collects only the wanted events, before they're even sent.<b>Transformation.</b> A KQL transformation in the DCR (for example project-away) changes data at ingestion; it reduces what is stored and billed.<b>On-premises.</b> The Azure Monitor agent installs outside Azure only on servers connected to Azure Arc; they're then treated like VMs, with the same DCR. The Log Analytics agent is retired.",
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
    "*Automatic deployment",
    "An Azure Policy initiative (AMA + DCR)"
   ],
   [
    "Events 4624 and 4625",
    "An XPath query in the DCR"
   ],
   [
    "Column removal",
    "A KQL transformation in the DCR"
   ],
   [
    "On-premises servers",
    "Azure Arc, then AMA and the same DCR"
   ]
  ]
 },
 "keep": "AMA + DCR: Policy for scale, XPath to filter, transformation to reduce, Arc for on-premises."
},
{
 "id": "D5-412",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso centralizes its platform logs.</p><ul><li>The activity log of the 12 subscriptions must be kept for 2 years and queryable in KQL.</li><li>Key vault KV-Prod must send its audit logs to LAW-Sec (security), LAW-Ops (operations), an archive storage account, and Event Hubs for the group SIEM. A diagnostic setting to LAW-Ops already exists.</li><li>Microsoft Entra sign-in logs (SigninLogs) must reach LAW-Sec. The tenant has only Microsoft Entra ID Free licenses.</li><li>Resource tables must be specific to each resource type, easier to query.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Activity log:",
   "o": [
    "A monthly CSV export from the portal",
    "Nothing: it's kept for 2 years",
    "An activity log alert",
    "A diagnostic setting per subscription"
   ],
   "a": 3
  },
  {
   "l": "KV-Prod:",
   "o": [
    "A second setting with the three destinations",
    "One setting per destination, with no count limit",
    "A data collection rule",
    "Not possible: one setting per resource"
   ],
   "a": 0
  },
  {
   "l": "SigninLogs:",
   "o": [
    "A P1 or P2 license, then an Entra setting",
    "The Azure Monitor agent on DCs",
    "An Entra diagnostic setting, no prerequisite",
    "The activity log export"
   ],
   "a": 0
  },
  {
   "l": "Table mode:",
   "o": [
    "Basic",
    "Resource specific",
    "Custom",
    "Azure diagnostics (shared table)"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Activity log.</b> It's kept for only 90 days. A diagnostic setting per subscription sends it to a workspace (AzureActivity table), where retention is set.<b>Diagnostic settings.</b> A resource can have up to 5. One setting sends to at most one workspace, one storage account, one event hub, and one partner solution. Since LAW-Ops already uses the first, a second setting carries LAW-Sec, storage, and Event Hubs.<b>Entra ID.</b> Exporting sign-in logs requires a Microsoft Entra ID P1 or P2 license.<b>Tables.</b> “Resource specific” mode creates dedicated tables (for example AZKVAuditLogs) instead of the generic AzureDiagnostics table.",
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
    "*Activity log",
    "A diagnostic setting per subscription"
   ],
   [
    "KV-Prod",
    "A second setting with the three destinations"
   ],
   [
    "SigninLogs",
    "A P1 or P2 license, then an Entra setting"
   ],
   [
    "Table mode",
    "Resource specific"
   ]
  ]
 },
 "keep": "Activity log: 90 days, then a diagnostic setting. 5 settings per resource, one destination of each type. Entra sign-ins: P1/P2."
},
{
 "id": "D5-413",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Wingtip's development team is launching the web app wingtip-shop (App Service, .NET) and wants application monitoring.</p><ul><li>Telemetry must be stored in LAW-Apps with the other logs, for shared queries.</li><li>The home page must be tested every 5 minutes from 5 regions; an alert must fire when at least 3 regions fail.</li><li>Telemetry volume from a very busy page must be reduced without skewing statistics.</li><li>An abnormal rise in the request failure rate must be flagged without writing a rule.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Application Insights resource:",
   "o": [
    "None: App Service logs are enough",
    "Workspace-based, linked to LAW-Apps",
    "Classic",
    "One per page"
   ],
   "a": 1
  },
  {
   "l": "Home page test:",
   "o": [
    "A metric alert on the plan's CPU",
    "A multi-step web test from 5 regions",
    "A Resource Health alert for the app",
    "A standard test, 5 locations, threshold 3"
   ],
   "a": 3
  },
  {
   "l": "Volume reduction:",
   "o": [
    "Deleting traces",
    "The Basic plan",
    "Sampling",
    "A daily cap"
   ],
   "a": 2
  },
  {
   "l": "Abnormal failure rise:",
   "o": [
    "Smart detection",
    "An activity log alert",
    "A failures workbook",
    "An Azure Advisor recommendation"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Workspace.</b> Classic Application Insights resources are retired; a workspace-based resource stores its data in LAW-Apps.<b>Availability.</b> The standard test pings a URL from several locations (5 recommended), and its alert rule fires based on the number of failed locations. Multi-step tests are deprecated.<b>Sampling.</b> It keeps only some items while statistically correcting counts. A daily cap would stop all collection once reached.<b>Smart detection.</b> It analyzes the failure rate and alerts on anomalies, with no rule to write.",
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
    "*Application Insights resource",
    "Workspace-based, linked to LAW-Apps"
   ],
   [
    "Home page test",
    "A standard test, 5 locations, threshold 3"
   ],
   [
    "Volume reduction",
    "Sampling"
   ],
   [
    "Abnormal failure rise",
    "Smart detection"
   ]
  ]
 },
 "keep": "Application Insights: workspace-based, multi-location standard test, sampling, smart detection."
},
{
 "id": "D5-414",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You need to enable VM Insights on 150 Windows and Linux VMs in Sub-Prod. The VMs already have the Azure Monitor agent, with a DCR collecting Windows events to LAW-Ops.</p><p>Requirements:</p><ul><li>VM Insights performance charts (CPU, memory, disk, network) must work;</li><li>the Map view must show processes and connections between servers;</li><li>all future Sub-Prod VMs must be enabled automatically;</li><li>VM Insights data must land in LAW-Ops, with no extra workspace.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Collection configuration:",
   "o": [
    "A VM Insights DCR to LAW-Ops",
    "Add memory to the existing DCR",
    "A diagnostic setting on each VM",
    "The Windows diagnostics extension"
   ],
   "a": 0
  },
  {
   "l": "For the Map view:",
   "o": [
    "Connection monitor",
    "Network Watcher in the region",
    "The Log Analytics agent alongside",
    "The Dependency agent"
   ],
   "a": 3
  },
  {
   "l": "Future VMs:",
   "o": [
    "Nothing: it's automatic for new Sub-Prod VMs",
    "An activity log alert",
    "The VM Insights Policy initiative with AMA",
    "A daily enablement runbook"
   ],
   "a": 2
  }
 ],
 "expl": "<b>DCR.</b> VM Insights uses a dedicated DCR, sending performance counters in InsightsMetrics format. A VM can be associated with several DCRs: the events DCR stays in place.<b>Map.</b> The Map view requires the Dependency agent, enabled by the “processes and dependencies” option of the VM Insights DCR.<b>Scale.</b> The built-in Azure Policy initiative installs the agent, the Dependency agent if requested, and associates the DCR with existing (remediation) and future VMs.",
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
    "*Collection configuration",
    "A VM Insights DCR to LAW-Ops"
   ],
   [
    "For the Map view",
    "The Dependency agent"
   ],
   [
    "Future VMs",
    "The VM Insights Policy initiative with AMA"
   ]
  ]
 },
 "keep": "VM Insights: dedicated DCR (InsightsMetrics), Dependency agent for Map, Policy initiative for scale."
},
{
 "id": "D5-415",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You're writing KQL queries in LAW-Ops for an operations report.</p><ul><li>Query A: the 5 computers that generated the most error events yesterday.</li><li>Query B: for each computer, the time of its last Heartbeat, to spot silent machines.</li><li>Query C: request counts per one-hour bucket over 7 days, shown as a time chart.</li><li>Query D: the same events in LAW-Ops and LAW-Lyon, in a single query.</li></ul><p>Which element should you use in each query?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Query A:",
   "o": [
    "take 5 | sort by count_",
    "summarize count() by Computer | top 5 by count_",
    "summarize count() by Computer | sort by Computer | take 5",
    "summarize count() by Computer | limit 5"
   ],
   "a": 1
  },
  {
   "l": "Query B:",
   "o": [
    "summarize count() by Computer",
    "summarize max(TimeGenerated) by Computer",
    "where TimeGenerated > ago(1h) | distinct Computer",
    "sort by TimeGenerated desc | take 1"
   ],
   "a": 1
  },
  {
   "l": "Query C:",
   "o": [
    "summarize count() by bin(TimeGenerated, 1d) | render table",
    "make-series count() on TimeGenerated step 1d",
    "summarize count() by TimeGenerated | render piechart",
    "summarize count() by bin(TimeGenerated, 1h) | render timechart"
   ],
   "a": 3
  },
  {
   "l": "Query D:",
   "o": [
    "Event | join kind=inner (LAW-Lyon) on Computer",
    "search in (Event) \"LAW-Lyon\"",
    "Event | lookup workspace(\"LAW-Lyon\")",
    "union Event, workspace(\"LAW-Lyon\").Event"
   ],
   "a": 3
  }
 ],
 "expl": "<b>A.</b> Count per computer, then top 5 sorts and keeps the first 5. take 5 returns any 5 rows.<b>B.</b> max(TimeGenerated) per computer gives the last heartbeat (arg_max(TimeGenerated, *) would return the whole row). An ago(1h) filter would hide exactly the silent machines.<b>C.</b> bin() groups by one-hour bucket; render timechart plots the series.<b>D.</b> union combines tables, and workspace(\"…\") refers to a table in another workspace. join would need a common key.",
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
    "*Query A",
    "summarize count() by Computer | top 5 by count_"
   ],
   [
    "Query B",
    "summarize max(TimeGenerated) by Computer"
   ],
   [
    "Query C",
    "summarize count() by bin(TimeGenerated, 1h) | render timechart"
   ],
   [
    "Query D",
    "union Event, workspace(\"LAW-Lyon\").Event"
   ]
  ]
 },
 "keep": "top N by, max()/arg_max() per entity, bin() + render timechart, union + workspace()."
},
{
 "id": "D5-416",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso management wants several monitoring views:</p><ul><li>View 1: an interactive report for the network team, with parameters (subscription, time range), KQL queries, metrics, and text explanations, shared in the portal.</li><li>View 2: a screen always shown in the operations center, with a few charts pinned from the portal and Metrics Explorer, no parameters.</li><li>View 3: the platform team already uses Grafana with Prometheus for Kubernetes and wants to add Azure Monitor metrics to the same dashboards, without managing a server.</li><li>View 4: the team wants to be notified as soon as an indicator crosses a threshold.</li></ul><p>What should you use for each view?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "View 1:",
   "o": [
    "A metric alert rule",
    "A shared Azure dashboard",
    "Azure Managed Grafana",
    "An Azure Monitor workbook"
   ],
   "a": 3
  },
  {
   "l": "View 2:",
   "o": [
    "An Azure Monitor workbook",
    "Azure Managed Grafana",
    "An Azure dashboard",
    "A metric alert"
   ],
   "a": 2
  },
  {
   "l": "View 3:",
   "o": [
    "An Azure Monitor workbook",
    "A metric alert",
    "An Azure dashboard",
    "Azure Managed Grafana"
   ],
   "a": 3
  },
  {
   "l": "View 4:",
   "o": [
    "Azure Managed Grafana",
    "A metric alert",
    "An Azure Monitor workbook",
    "An Azure dashboard"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Workbook.</b> It combines text, parameters, KQL queries, and metrics in a shareable interactive report.<b>Dashboard.</b> You pin tiles from the portal; it suits a permanent display with no interaction.<b>Managed Grafana.</b> An Azure-managed Grafana service, with the built-in Azure Monitor data source, alongside Prometheus.<b>Alert.</b> A visualization notifies nobody: an alert rule is needed.",
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
    "*View 1",
    "An Azure Monitor workbook"
   ],
   [
    "View 2",
    "An Azure dashboard"
   ],
   [
    "View 3",
    "Azure Managed Grafana"
   ],
   [
    "View 4",
    "A metric alert"
   ]
  ]
 },
 "keep": "Interactive report = workbook. Pinned screen = dashboard. Existing Grafana = Managed Grafana. Notify = alert."
},
{
 "id": "D5-417",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Several questions reach Fabrikam support this morning:</p><ul><li>Q1: “Has Microsoft planned maintenance that will reboot our France Central VMs next week?”</li><li>Q2: “VM-Erp was unavailable for 8 minutes last night: was it an Azure platform issue or something we did?”</li><li>Q3: “Which VMs are underused and could be resized to cut costs?”</li><li>Q4: “Who resized VM-Erp yesterday at 6 PM?”</li></ul><p>Where should you look for each question?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Q1:",
   "o": [
    "Activity log",
    "Azure Service Health",
    "Azure Advisor",
    "Azure Resource Health"
   ],
   "a": 1
  },
  {
   "l": "Q2:",
   "o": [
    "Activity log",
    "Azure Service Health",
    "Azure Resource Health",
    "Azure Advisor"
   ],
   "a": 2
  },
  {
   "l": "Q3:",
   "o": [
    "Azure Service Health",
    "Azure Advisor",
    "Azure Resource Health",
    "Activity log"
   ],
   "a": 1
  },
  {
   "l": "Q4:",
   "o": [
    "Azure Resource Health",
    "Activity log",
    "Azure Advisor",
    "Azure Service Health"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Service Health</b> covers incidents, planned maintenance, and advisories affecting the services and regions you use.<b>Resource Health</b> gives a specific resource's availability history and says whether an event came from the platform or a user action.<b>Advisor</b> recommends resizing or shutting down underused VMs (cost).<b>Activity log</b>: who did which management operation, and when.",
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
    "*Q1",
    "Azure Service Health"
   ],
   [
    "Q2",
    "Azure Resource Health"
   ],
   [
    "Q3",
    "Azure Advisor"
   ],
   [
    "Q4",
    "Activity log"
   ]
  ]
 },
 "keep": "Maintenance = Service Health. One resource = Resource Health. Costs = Advisor. Who did what = activity log."
},
{
 "id": "D5-418",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Storage account stdocs (France Central, LRS) contains the Azure Files share share-contrats (2 TiB). You're configuring Azure Backup.</p><p>Requirements:</p><ul><li>single-file restore by administrators;</li><li>a copy of the data must exist outside the storage account, to survive deletion or corruption of the account, with 10-year retention;</li><li>an administrator is surprised he can't delete stdocs, no longer needed after a test, even though he's Owner.</li></ul><p>What should you configure or answer?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Backup tier:",
   "o": [
    "Azure File Sync to a server",
    "Vaulted",
    "Operational blob backup",
    "Snapshots only, in the account"
   ],
   "a": 1
  },
  {
   "l": "Single-file restore:",
   "o": [
    "Mount a VHD of the recovery point",
    "Restore the whole share elsewhere",
    "Item-level restore",
    "AzCopy from the vault"
   ],
   "a": 2
  },
  {
   "l": "Can't delete stdocs:",
   "o": [
    "Azure Backup locked the account",
    "LRS redundancy blocks deletion",
    "The share is mounted by clients",
    "Owner isn't enough for storage"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Tier.</b> Snapshot-only backup keeps points in the account: if the account is deleted, they vanish. The vaulted tier copies data into the Recovery Services vault, outside the account, with long retention (up to 10 years).<b>Single file.</b> Item-level restore puts back a file or folder, to the original location or elsewhere.<b>Lock.</b> When you protect a share, Azure Backup puts a Delete lock on the storage account to avoid losing backups. Stop protection and remove the lock before deleting the account.",
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
    "*Backup tier",
    "Vaulted"
   ],
   [
    "Single-file restore",
    "Item-level restore"
   ],
   [
    "Can't delete stdocs",
    "Azure Backup locked the account"
   ]
  ]
 },
 "keep": "Azure Files: snapshot (in the account) or vaulted (outside the account). Azure Backup locks the storage account."
},
{
 "id": "D5-419",
 "dom": 5,
 "type": "hot",
 "stem": "<p>On-premises file server FS-Paris (Windows Server 2022, 4 TB) isn't in Azure. Management wants to back it up to RSV-OnPrem.</p><ul><li>D:\\Projets folders must be backed up three times a day, with no intermediate backup server.</li><li>System state must also be backed up.</li><li>Headquarters Hyper-V servers, with their VMs and SQL Server databases, must be backed up locally for fast restores, then copied to Azure.</li><li>An administrator asks what happens if he loses the passphrase set when installing FS-Paris's agent.</li></ul><p>What should you use or answer?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "FS-Paris (folders and system state):",
   "o": [
    "The VM backup extension",
    "Azure Backup Server (MABS)",
    "Azure File Sync",
    "The MARS agent"
   ],
   "a": 3
  },
  {
   "l": "Maximum frequency with this agent:",
   "o": [
    "Three times a day",
    "Every hour",
    "Once a day",
    "Every 15 minutes"
   ],
   "a": 0
  },
  {
   "l": "Hyper-V and SQL Server:",
   "o": [
    "Azure Arc",
    "The MARS agent on each host",
    "Azure Backup Server (MABS)",
    "Site Recovery"
   ],
   "a": 2
  },
  {
   "l": "Lost passphrase:",
   "o": [
    "Microsoft can reset it",
    "It's in Key Vault automatically",
    "The vault keeps a copy",
    "Existing points can't be recovered"
   ],
   "a": 3
  }
 ],
 "expl": "<b>MARS.</b> The Microsoft Azure Recovery Services agent backs up files, folders, and system state directly to the vault, with no intermediate server, up to three times a day.<b>MABS.</b> Azure Backup Server protects application workloads (Hyper-V, SQL Server, Exchange, SharePoint) to local disk, then sends copies to Azure.<b>Passphrase.</b> It encrypts data on the client side; Microsoft doesn't know it. Without it, existing points can't be decrypted. It can be stored in Azure Key Vault, but that must be configured.",
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
    "*FS-Paris (folders and system state)",
    "The MARS agent"
   ],
   [
    "Maximum frequency with this agent",
    "Three times a day"
   ],
   [
    "Hyper-V and SQL Server",
    "Azure Backup Server (MABS)"
   ],
   [
    "Lost passphrase",
    "Existing points can't be recovered"
   ]
  ]
 },
 "keep": "MARS: files and system state, 3 times a day, passphrase essential. MABS: on-premises applications."
},
{
 "id": "D5-420",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso's backup team manages 25 Recovery Services vaults and Backup vaults across 6 subscriptions.</p><ul><li>It wants email and Teams alerts when a backup job fails, in every vault, with the solution Microsoft recommends.</li><li>It wants monthly reports (storage consumed, successful jobs, protected items) over 12 months.</li><li>It wants a single view of the protection of all resources (including unprotected ones), backup and Site Recovery alike.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Failure alerts:",
   "o": [
    "A metric alert per vault",
    "The vaults' classic alerts",
    "Built-in alerts + processing rule",
    "A runbook that reads the backup jobs"
   ],
   "a": 2
  },
  {
   "l": "Report prerequisite:",
   "o": [
    "Nothing: reports are automatic in each vault",
    "A storage account per vault",
    "A Power BI Premium workspace",
    "Vault diagnostics to Log Analytics"
   ],
   "a": 3
  },
  {
   "l": "Single view:",
   "o": [
    "Business Continuity Center",
    "A Resource Graph query",
    "Azure Advisor recommendations",
    "Each vault's dashboard"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Alerts.</b> Classic alerts are retired; built-in Azure Monitor alerts for backup are generated automatically. An alert processing rule (subscription scope or wider) routes them to an action group (email, Teams through webhook or logic app).<b>Reports.</b> Backup reports read data sent by vault diagnostic settings to one or more workspaces, in resource-specific mode.<b>Single view.</b> Business Continuity Center brings together backup and Site Recovery, shows unprotected resources, and spans subscriptions.",
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
    "*Failure alerts",
    "Built-in alerts + processing rule"
   ],
   [
    "Report prerequisite",
    "Vault diagnostics to Log Analytics"
   ],
   [
    "Single view",
    "Business Continuity Center"
   ]
  ]
 },
 "keep": "Backup alerts: built-in Azure Monitor + processing rule. Reports: diagnostics to Log Analytics. Single view: Business Continuity Center."
}
);
