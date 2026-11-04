/* Domain 5: monitoring and backup (batch B : D5-009 to D5-060) */
AZ.questions.push(
{
 "id": "D5-009",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Monitor data source for each need.</p><p>To answer, drag the appropriate source to each need. Each source may be used once, more than once, or not at all.</p>",
 "srcLabel": "Sources",
 "tgtHead": [
  "Need",
  "Source"
 ],
 "srcs": [
  "Platform metrics",
  "Activity log",
  "Resource logs",
  "Guest logs (through the Azure Monitor agent)"
 ],
 "tgts": [
  {
   "l": "A VM's CPU percentage, minute by minute, without installing anything",
   "a": 0
  },
  {
   "l": "Who restarted a VM from the portal",
   "a": 1
  },
  {
   "l": "Every read request made on a key vault",
   "a": 2
  },
  {
   "l": "Windows Application log events in a VM",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Platform metrics</b>: collected automatically for each resource (a VM's CPU seen from the host, storage transactions…).</li><li><b>Activity log</b>: operations on the subscription's control plane (create, modify, start, delete).</li><li><b>Resource logs</b>: operations inside a resource (data plane). They require a <b>diagnostic setting</b>.</li><li><b>Guest logs</b>: operating system data, collected by the <b>Azure Monitor agent</b> and a data collection rule.</li></ul>",
 "portal": {
  "path": [
   "Monitor"
  ],
  "title": "Data sources",
  "rows": [
   [
    "*Platform metrics",
    "Automatic"
   ],
   [
    "Activity log",
    "Control plane"
   ],
   [
    "Resource logs",
    "Diagnostic setting"
   ],
   [
    "Guest logs",
    "Azure Monitor agent"
   ]
  ]
 },
 "keep": "Metric automatic; who did what = activity; inside the resource = resource logs; inside the OS = agent."
},
{
 "id": "D5-012",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You choose the destination of a diagnostic setting.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Analyze logs with KQL and create log search alerts:",
   "o": [
    "Event Hubs",
    "Storage account",
    "Log Analytics workspace"
   ],
   "a": 2
  },
  {
   "l": "Archive logs at low cost for 7 years for an audit:",
   "o": [
    "Log Analytics workspace",
    "Storage account",
    "Event Hubs"
   ],
   "a": 1
  },
  {
   "l": "Stream logs continuously to a third-party SIEM:",
   "o": [
    "Event Hubs",
    "Storage account",
    "Log Analytics workspace"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Log Analytics</b>: KQL queries, workbooks, log alerts.</li><li><b>Storage account</b>: economical long-term archiving.</li><li><b>Event Hubs</b>: continuous streaming to external tools (SIEM, third-party solutions).</li></ul>",
 "portal": {
  "path": [
   "Resource",
   "Diagnostic settings"
  ],
  "title": "Destination details",
  "rows": [
   [
    "*Log Analytics",
    "KQL + alerts"
   ],
   [
    "Storage account",
    "Archive"
   ],
   [
    "Event Hubs",
    "Third-party SIEM"
   ]
  ]
 },
 "keep": "KQL = Log Analytics; archive = storage; external stream = Event Hubs."
},
{
 "id": "D5-019",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate alert type for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Alert types",
 "tgtHead": [
  "Need",
  "Type"
 ],
 "srcs": [
  "Metric alert",
  "Log search alert",
  "Activity log alert",
  "Service Health alert",
  "Resource Health alert"
 ],
 "tgts": [
  {
   "l": "More than 5 failed sign-ins in a VM's Security log in 10 minutes (data in Log Analytics)",
   "a": 1
  },
  {
   "l": "An administrator creates a role assignment",
   "a": 2
  },
  {
   "l": "A VM's free disk space drops below 10%",
   "a": 0
  },
  {
   "l": "A VM becomes unavailable because of a platform issue",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Log search</b>: a KQL query run at regular intervals on Log Analytics.</li><li><b>Activity log</b>: management operations (role assignment creation).</li><li><b>Metric</b>: threshold on a numeric value (guest counters can be sent as metrics).</li><li><b>Resource Health</b>: change in a resource's health state.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Signal types",
  "rows": [
   [
    "*Log search",
    "KQL"
   ],
   [
    "Activity log",
    "Operation"
   ],
   [
    "Metric",
    "Threshold"
   ],
   [
    "Resource Health",
    "Health"
   ]
  ]
 },
 "keep": "KQL = log search; operation = activity; threshold = metric."
},
{
 "id": "D5-023",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You create Azure Monitor alerts.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Highest (critical) severity:",
   "o": [
    "Sev4",
    "Sev0",
    "Sev10"
   ],
   "a": 1
  },
  {
   "l": "A stateful metric alert whose condition is no longer met moves to:",
   "o": [
    "Closed by the user only",
    "Resolved",
    "Deleted"
   ],
   "a": 1
  },
  {
   "l": "For the same alert, a new notification is sent as long as the condition stays true:",
   "o": [
    "No, with a stateful alert",
    "Yes, every 5 minutes",
    "Yes, at each evaluation, always"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>Severities range from <b>Sev0</b> (critical) to <b>Sev4</b> (verbose).</li><li>A <b>stateful</b> alert <b>resolves</b> automatically when the condition is no longer met (and can notify the resolution).</li><li>When stateful, it doesn't fire again until it's resolved, which avoids notification storms.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Alerts",
  "rows": [
   [
    "*Sev0",
    "Critical"
   ],
   [
    "Stateful",
    "Resolved automatically"
   ]
  ]
 },
 "keep": "Sev0 = critical; stateful = no repeats, auto-resolution."
},
{
 "id": "D5-024",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to display, in workspace WS1, the number of Error-level events per computer over the last 24 hours, from largest to smallest.</p><p>How should you complete the KQL query?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Time function",
   "o": [
    "ago",
    "now",
    "since"
   ],
   "a": 0
  },
  {
   "l": "Aggregation operator",
   "o": [
    "summarize",
    "project",
    "extend"
   ],
   "a": 0
  },
  {
   "l": "Sort operator",
   "o": [
    "sort",
    "where",
    "render"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><code>ago(24h)</code>: the current time minus 24 hours.</li><li><code>summarize ... by Computer</code>: aggregates (counts) per computer. <code>project</code> chooses columns; <code>extend</code> adds a computed column.</li><li><code>sort by ... desc</code> sorts (<code>order by</code> is a synonym). <code>where</code> filters rows; <code>render</code> chooses a chart.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "WS1 | Logs",
  "menu": [
   "*Logs"
  ],
  "rows": [
   [
    "*ago(24h)",
    "Period"
   ],
   [
    "summarize count() by",
    "Aggregation"
   ],
   [
    "sort by desc",
    "Sort"
   ]
  ],
  "btn": "Run"
 },
 "keep": "ago = period; summarize = aggregate; sort/order = sort.",
 "tpl": "Event<br>| where TimeGenerated &gt; {0}(24h) and EventLevelName == \"Error\"<br>| {1} ErrorCount = count() by Computer<br>| {2} by ErrorCount desc"
},
{
 "id": "D5-025",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to display the 10 VMs with the highest average CPU over the last hour, from the Perf table.</p><p>How should you complete the KQL query?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Function",
   "o": [
    "avg",
    "count",
    "sum"
   ],
   "a": 0
  },
  {
   "l": "Operator",
   "o": [
    "top",
    "take",
    "limit"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>avg()</code> computes the average. <code>top 10 by AvgCpu desc</code> sorts and keeps the first 10. <code>take</code> and <code>limit</code> return N <b>arbitrary</b> rows, without sorting.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "WS1 | Logs",
  "rows": [
   [
    "*avg(CounterValue)",
    "Average"
   ],
   [
    "top 10 by … desc",
    "Sort + limit"
   ]
  ],
  "btn": "Run"
 },
 "keep": "top = sort + limit; take/limit = no sort.",
 "tpl": "Perf<br>| where TimeGenerated &gt; ago(1h) and ObjectName == \"Processor\" and CounterName == \"% Processor Time\"<br>| summarize AvgCpu = {0}(CounterValue) by Computer<br>| {1} 10 by AvgCpu desc"
},
{
 "id": "D5-032",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage Azure Monitor.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Platform metrics are kept 93 days.",
   "a": 0
  },
  {
   "l": "The activity log is kept 90 days with no configuration.",
   "a": 0
  },
  {
   "l": "Resource logs are collected automatically without a diagnostic setting.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Metrics: Yes</b>, 93 days in the metrics database (the explorer shows up to 30 days per chart).</li><li><b>Activity log: Yes</b>, 90 days.</li><li><b>Resource logs: No</b>, you need a diagnostic setting.</li></ul>",
 "portal": {
  "path": [
   "Monitor"
  ],
  "title": "Default retention",
  "rows": [
   [
    "Metrics",
    "93 days"
   ],
   [
    "Activity log",
    "90 days"
   ],
   [
    "*Resource logs",
    "Diagnostic setting required"
   ]
  ]
 },
 "keep": "Metrics 93 d; activity 90 d; resource logs = nothing without diagnostics."
},
{
 "id": "D5-038",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate vault type for each workload.</p><p>To answer, drag the appropriate type to each workload. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Vaults",
 "tgtHead": [
  "Workload",
  "Vault"
 ],
 "srcs": [
  "Recovery Services vault",
  "Backup vault"
 ],
 "tgts": [
  {
   "l": "Azure virtual machines",
   "a": 0
  },
  {
   "l": "Azure Files shares",
   "a": 0
  },
  {
   "l": "Azure managed disks (disk backup)",
   "a": 1
  },
  {
   "l": "Azure blobs (operational or vaulted backup)",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Recovery Services vault</b>: Azure VMs, Azure Files, SQL Server and SAP HANA in VMs, MARS agent, and Azure Site Recovery.</li><li><b>Backup vault</b>: managed disks, blobs, Azure Database for PostgreSQL, AKS, and other newer workloads.</li></ul>",
 "portal": {
  "path": [
   "Business Continuity Center"
  ],
  "title": "Vaults",
  "rows": [
   [
    "*Recovery Services",
    "VMs, Azure Files, SQL/SAP, MARS, ASR"
   ],
   [
    "Backup vault",
    "Disks, blobs, PostgreSQL, AKS"
   ]
  ]
 },
 "keep": "VMs + Files = Recovery Services; disks + blobs = Backup vault."
},
{
 "id": "D5-040",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Backup restore option for each need.</p><p>To answer, drag the appropriate option to each need. Each option may be used once, more than once, or not at all.</p>",
 "srcLabel": "Options",
 "tgtHead": [
  "Need",
  "Option"
 ],
 "srcs": [
  "Create virtual machine",
  "Restore disks",
  "Replace existing",
  "File recovery"
 ],
 "tgts": [
  {
   "l": "Recover three deleted files without touching the VM",
   "a": 3
  },
  {
   "l": "Return the existing VM to yesterday's state, keeping its configuration",
   "a": 2
  },
  {
   "l": "Get the disks to create a custom VM with a template",
   "a": 1
  },
  {
   "l": "Quickly create a copy of the VM for a test",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>File recovery</b>: a script mounts the recovery point's disks as drives, and you copy the files.</li><li><b>Replace existing</b>: replaces the existing VM's disks with those of the recovery point.</li><li><b>Restore disks</b>: creates managed disks (and a template) to then create the VM your way.</li><li><b>Create a VM</b>: new VM with basic settings.</li></ul>",
 "portal": {
  "path": [
   "Backup items",
   "VM1"
  ],
  "title": "Restore Virtual Machine",
  "rows": [
   [
    "*Create new",
    "New VM"
   ],
   [
    "Restore disks",
    "Disks + template"
   ],
   [
    "Replace existing",
    "Same VM"
   ]
  ]
 },
 "keep": "Files = file recovery; same VM = replace; custom VM = disks."
},
{
 "id": "D5-041",
 "dom": 5,
 "type": "order",
 "stem": "<p>A user deleted a folder on the data disk of VM4, which is backed up every night. You need to recover this folder without restoring the VM.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p><b>File recovery</b>: you choose the <b>recovery point</b>, run the <b>script</b> (with the provided password) that mounts the disks over iSCSI, <b>copy</b> the files, then <b>unmount</b> the disks. The VM doesn't need to be stopped.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM4"
  ],
  "title": "File Recovery",
  "rows": [
   [
    "1",
    "Recovery point"
   ],
   [
    "*2",
    "Script + password"
   ],
   [
    "3",
    "Unmount disks"
   ]
  ],
  "btn": "Unmount Disks"
 },
 "keep": "Point → script → copy → unmount.",
 "acts": [
  "Open File Recovery and choose a recovery point",
  "Download and run the script on a machine (for example VM4)",
  "Copy the folder from the mounted drives",
  "Unmount the disks from the portal",
  "Stop VM4",
  "Restore VM4's disks"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D5-044",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You create the following backup policy: daily backup at 11 PM, daily retention 30 days, weekly (Sunday) 12 weeks, monthly (first Sunday) 12 months, yearly (first Sunday of January) 5 years.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Is a Tuesday point from 45 days ago still available?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "Is a Sunday point from 10 weeks ago still available?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  },
  {
   "l": "Is the point from the first Sunday of January 3 years ago still available?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Tuesday, 45 days: No.</b> Only the daily retention (30 days) covered it.</li><li><b>Sunday, 10 weeks: Yes.</b> Covered by the 12-week weekly retention.</li><li><b>January, 3 years: Yes.</b> Covered by the 5-year yearly retention.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Backup policy",
  "rows": [
   [
    "Daily",
    "30 days"
   ],
   [
    "*Weekly",
    "12 weeks"
   ],
   [
    "Monthly",
    "12 months"
   ],
   [
    "Yearly",
    "5 years"
   ]
  ]
 },
 "keep": "A point is kept if it falls within at least one retention."
},
{
 "id": "D5-058",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage Azure Backup for VMs.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A VM can be backed up by two Recovery Services vaults at the same time.",
   "a": 1
  },
  {
   "l": "The same backup policy can be applied to several VMs.",
   "a": 0
  },
  {
   "l": "The temporary disk is included in the backup.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Two vaults: No.</b> A VM is protected by only one vault at a time.</li><li><b>Shared policy: Yes.</b></li><li><b>Temporary disk: No</b>, it's never backed up.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Backup items",
  "rows": [
   [
    "*VM1",
    "A single vault"
   ],
   [
    "Policy",
    "Shared"
   ],
   [
    "Temporary disk",
    "Excluded"
   ]
  ]
 },
 "keep": "One vault per VM; shared policy; temporary disk never backed up."
}
);
