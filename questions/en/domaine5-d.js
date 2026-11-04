/* Domain 5: monitoring and backup (batch D : D5-111 to D5-160) */
AZ.questions.push(
{
 "id": "D5-111",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to assign the appropriate Azure Backup role for each need, following the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "tgtHead": [
  "Need",
  "Role"
 ],
 "srcs": [
  "Backup Reader",
  "Backup Operator",
  "Backup Contributor",
  "Owner"
 ],
 "tgts": [
  {
   "l": "View backup job status, without changing anything",
   "a": 0
  },
  {
   "l": "Run backups and restores, without removing protection",
   "a": 1
  },
  {
   "l": "Create policies and manage protection, without managing vault access",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Backup Reader</b>: viewing.</li><li><b>Backup Operator</b>: back up, restore, enable protection, but not delete backup or create policies.</li><li><b>Backup Contributor</b>: full backup management, except deleting the vault and managing access.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Add role assignment",
  "rows": [
   [
    "Backup Reader",
    "View"
   ],
   [
    "*Backup Operator",
    "Back up / restore"
   ],
   [
    "Backup Contributor",
    "Policies + protection"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Reader = view; Operator = back up/restore; Contributor = manage (no access)."
},
{
 "id": "D5-121",
 "dom": 5,
 "type": "hot",
 "stem": "<p>The activity log contains several event categories.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Creation, modification, and deletion of resources:",
   "o": [
    "Policy",
    "Autoscale",
    "Administrative"
   ],
   "a": 2
  },
  {
   "l": "Azure Policy Deny or Audit effect actions:",
   "o": [
    "Recommendation",
    "Administrative",
    "Policy"
   ],
   "a": 2
  },
  {
   "l": "Instances added by a scale rule:",
   "o": [
    "Service Health",
    "Security",
    "Autoscale"
   ],
   "a": 2
  }
 ],
 "expl": "<p>Activity log categories: <b>Administrative</b>, <b>Service Health</b>, <b>Resource Health</b>, <b>Alert</b>, <b>Autoscale</b>, <b>Recommendation</b> (Advisor), <b>Security</b> (Defender), <b>Policy</b> (Azure Policy).</p>",
 "portal": {
  "path": [
   "Monitor",
   "Activity log"
  ],
  "title": "Event category",
  "rows": [
   [
    "*Administrative",
    "Create / modify / delete"
   ],
   [
    "Policy",
    "Azure Policy"
   ],
   [
    "Autoscale",
    "Instances"
   ]
  ]
 },
 "keep": "Categories: Administrative, Policy, Autoscale, Service Health, Security…"
},
{
 "id": "D5-131",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage Log Analytics workspaces.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Retention can be set differently for each table.",
   "a": 0
  },
  {
   "l": "A VM can send data to several workspaces with the Azure Monitor agent.",
   "a": 0
  },
  {
   "l": "Deleting a workspace deletes it immediately and permanently, with no possibility of recovery.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Per-table retention: Yes.</b></li><li><b>Several workspaces: Yes</b>, with several DCRs or destinations (the old agent was limited).</li><li><b>Deletion: No.</b> A deleted workspace goes into <b>soft delete</b> for 14 days and can be recovered (unless force-deleted).</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Properties",
  "rows": [
   [
    "Retention",
    "Per table"
   ],
   [
    "*Deletion",
    "Soft delete · 14 days"
   ]
  ]
 },
 "keep": "Per-table retention; several destinations; 14-day soft delete."
},
{
 "id": "D5-132",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage metric alerts.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A single metric alert rule can monitor several VMs of the same region and type.",
   "a": 0
  },
  {
   "l": "A metric alert can use several conditions (for example CPU and network).",
   "a": 0
  },
  {
   "l": "A metric alert can only notify by email.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Several resources: Yes</b>, multi-resource metric alerts work for one resource type in one region.</li><li><b>Several conditions: Yes</b>, combined with AND.</li><li><b>Email only: No</b>, everything the action group offers can be used.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Metric alert rule",
  "rows": [
   [
    "*Scope",
    "10 VMs · same region"
   ],
   [
    "Conditions",
    "CPU AND network"
   ]
  ]
 },
 "keep": "Metric: multi-resource, multi-condition, all actions."
},
{
 "id": "D5-133",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You choose between Service Health, Resource Health, and Advisor.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "An Azure Storage outage affects the whole West Europe region:",
   "o": [
    "Service Health",
    "Advisor",
    "Resource Health"
   ],
   "a": 0
  },
  {
   "l": "Your VM VM19 is unavailable because of a host reboot:",
   "o": [
    "Service Health",
    "Advisor",
    "Resource Health"
   ],
   "a": 2
  },
  {
   "l": "Your VMs have no backup configured:",
   "o": [
    "Advisor",
    "Resource Health",
    "Service Health"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Service Health</b>: incidents and maintenance of Azure services in the regions you use.</li><li><b>Resource Health</b>: the state of one of your resources.</li><li><b>Advisor</b>: recommendations, for example enabling backup (Reliability category).</li></ul>",
 "portal": {
  "path": [
   "Monitor"
  ],
  "title": "Health",
  "rows": [
   [
    "*Service Health",
    "Regional outage"
   ],
   [
    "Resource Health",
    "My resource"
   ],
   [
    "Advisor",
    "Recommendations"
   ]
  ]
 },
 "keep": "Region = Service Health; resource = Resource Health; advice = Advisor."
},
{
 "id": "D5-134",
 "dom": 5,
 "type": "hot",
 "stem": "<p>A VM backup policy is configured with a daily backup at 9 PM and 7-day retention. An on-demand backup was run today with retention until December 31.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Is the daily point from 10 days ago still available?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "Will today's on-demand point be available in 3 weeks (before December 31)?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  },
  {
   "l": "The policy also applies to new VMs associated with it later:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>10 days: No</b>, daily retention is 7 days.</li><li><b>On-demand point: Yes</b>, it has its own retention date.</li><li><b>New VMs: Yes</b>, a policy can protect several VMs.</li></ul>",
 "portal": {
  "path": [
   "Backup items",
   "VM1"
  ],
  "title": "Restore points",
  "rows": [
   [
    "Daily",
    "7 days"
   ],
   [
    "*On-demand",
    "Until December 31"
   ]
  ]
 },
 "keep": "On-demand point = its own date; shareable policy."
},
{
 "id": "D5-135",
 "dom": 5,
 "type": "screen",
 "stem": "<p>You create a log search alert on workspace WS5. It must run every 10 minutes over the last 10 minutes, and fire if the query returns more than 5 rows.</p><p>How should you configure the condition?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li>Measure <b>Table rows</b>, aggregation <b>Count</b>.</li><li>Period <b>10 minutes</b> and frequency <b>10 minutes</b>.</li><li><b>Greater than 5</b>.</li></ul><p>Event 4625 is a failed Windows sign-in.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS5"
  ],
  "title": "Condition",
  "rows": [
   [
    "*Table rows · Count",
    "> 5"
   ],
   [
    "Period / frequency",
    "10 min / 10 min"
   ]
  ]
 },
 "keep": "Log alert: measure + aggregation + period + frequency + threshold.",
 "win": {
  "title": "Create an alert rule",
  "sub": "WS5 | Log search",
  "rows": [
   {
    "k": "text",
    "l": "Query",
    "t": "SecurityEvent | where EventID == 4625"
   },
   {
    "k": "select",
    "l": "Measure",
    "o": [
     "Table rows",
     "CounterValue"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Aggregation type",
    "o": [
     "Count",
     "Average",
     "Maximum"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Aggregation granularity (period)",
    "o": [
     "5 minutes",
     "10 minutes",
     "1 hour"
    ],
    "a": 1
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
    "l": "Threshold value",
    "o": [
     "0",
     "5",
     "10"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Frequency of evaluation",
    "o": [
     "1 minute",
     "10 minutes",
     "1 hour"
    ],
    "a": 1
   }
  ]
 }
},
{
 "id": "D5-136",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>You need to enable Cross Region Restore on vault Vault5.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Properties",
 "expl": "<p>In <b>Properties</b>, <b>Backup Configuration</b> lets you choose storage redundancy (before any protection) and enable <b>Cross Region Restore</b>. You also find security settings there (soft delete, immutability, multi-user authorization).</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault5"
  ],
  "title": "Vault5 | Properties",
  "menu": [
   "*Properties"
  ],
  "rows": [
   [
    "*Backup Configuration",
    "Update"
   ]
  ]
 },
 "keep": "Redundancy and Cross Region Restore = vault Properties.",
 "win": {
  "title": "Vault5 | Recovery Services vault",
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
    "g": "Protected items",
    "items": [
     "Backup items",
     "Replicated items"
    ]
   },
   {
    "g": "Manage",
    "items": [
     "Backup policies",
     "Backup Infrastructure",
     "Recovery Plans (Site Recovery)"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Identity",
     "Networking",
     "Properties",
     "Locks"
    ]
   }
  ]
 }
},
{
 "id": "D5-137",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>You need to query the logs of workspace WS6 with KQL.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Logs",
 "expl": "<p><b>Logs</b> opens the KQL query editor. <b>Tables</b> is used to set each table's plan and retention. <b>Usage and estimated costs</b> shows the ingested volume and lets you set the daily cap and pricing tier.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS6"
  ],
  "title": "WS6 | Logs",
  "menu": [
   "*Logs",
   "Tables"
  ],
  "rows": [
   [
    "*KQL editor",
    "New query"
   ]
  ]
 },
 "keep": "KQL queries = Logs.",
 "win": {
  "title": "WS6 | Log Analytics workspace",
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
    "g": "",
    "items": [
     "Logs",
     "Summary"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Tables",
     "Agents",
     "Usage and estimated costs",
     "Diagnostic settings"
    ]
   },
   {
    "g": "Classic",
    "items": [
     "Legacy solutions"
    ]
   }
  ]
 }
},
{
 "id": "D5-139",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You need to limit the restore time of a critical VM after a human error, while keeping points over 1 year.</p><p>For each of the following actions, select Yes if it's part of the solution. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Disable soft delete to reduce cost",
   "a": 1
  },
  {
   "l": "Switch the vault to LRS to keep more points",
   "a": 1
  },
  {
   "l": "An Enhanced policy, several backups a day",
   "a": 0
  },
  {
   "l": "Configure a 12-month monthly retention",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Enhanced policy: yes</b>, frequent points and fast instant restore from snapshots.</li><li><b>12-month monthly retention: yes</b>, to keep points over a year.</li><li>LRS reduces protection. Disabling soft delete reduces security.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Enhanced policy",
  "rows": [
   [
    "*Frequency",
    "Every 4 h"
   ],
   [
    "Snapshots",
    "7 days"
   ],
   [
    "*Monthly",
    "12 months"
   ]
  ]
 },
 "keep": "Short RTO = Enhanced policy; 1 year = monthly retention."
},
{
 "id": "D5-140",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to send the subscription's activity log to workspace WS7, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Scope",
   "o": [
    "subscription",
    "resource",
    "tenant"
   ],
   "a": 0
  },
  {
   "l": "Destination",
   "o": [
    "--workspace",
    "--resource",
    "--scope"
   ],
   "a": 0
  }
 ],
 "expl": "<p>The activity log is at the <b>subscription</b> level: you use <code>az monitor diagnostic-settings subscription create</code>, with <code>--workspace</code> for the Log Analytics destination and the desired categories (Administrative, Policy, Security…). Resource diagnostic settings use <code>az monitor diagnostic-settings create --resource ...</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az monitor diagnostic-settings subscription create",
    "--workspace"
   ]
  ]
 },
 "keep": "Activity log = diagnostic-settings subscription create.",
 "tpl": "az monitor diagnostic-settings {0} create --name activity-to-ws7 --location francecentral {1} &lt;WS7 id&gt; --logs '[{\"category\": \"Administrative\", \"enabled\": true}]'"
},
{
 "id": "D5-141",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to display the number of VMs that sent a Heartbeat signal in the last hour, by operating system.</p><p>How should you complete the KQL query?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Function",
   "o": [
    "dcount",
    "count",
    "sum"
   ],
   "a": 0
  },
  {
   "l": "Grouping",
   "o": [
    "OSType",
    "TimeGenerated",
    "Computer"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>dcount(Computer)</code> counts <b>distinct</b> computers (each VM sends a signal every minute: <code>count()</code> would count signals, not VMs). You group by <b>OSType</b> (Windows or Linux).</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Logs",
  "rows": [
   [
    "*dcount(Computer)",
    "Distinct VMs"
   ],
   [
    "by OSType",
    "Windows / Linux"
   ]
  ]
 },
 "keep": "Counting distinct items = dcount.",
 "tpl": "Heartbeat<br>| where TimeGenerated &gt; ago(1h)<br>| summarize VMCount = {0}(Computer) by {1}"
},
{
 "id": "D5-142",
 "dom": 5,
 "type": "order",
 "stem": "<p>You need to collect the Application event logs of 40 Windows VMs in a workspace that doesn't exist yet.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>The <b>destination</b> must exist, then you create the <b>DCR</b>, then <b>associate</b> it with the VMs (the portal installs the Azure Monitor agent if needed).</p><p>The MMA agent is retired. A VM's diagnostic setting doesn't collect operating system logs.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules"
  ],
  "title": "Create a DCR",
  "rows": [
   [
    "1",
    "Workspace"
   ],
   [
    "*2",
    "DCR · Application"
   ],
   [
    "3",
    "Associate 40 VMs"
   ]
  ]
 },
 "keep": "Destination → DCR → association.",
 "acts": [
  "Create the Log Analytics workspace",
  "Create a data collection rule (Windows event logs, Application) with the workspace as destination",
  "Associate the DCR with the 40 VMs (the Azure Monitor agent is installed)",
  "Install the Log Analytics agent (MMA)",
  "Create a diagnostic setting on each VM"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D5-143",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate destination for the metrics or logs of each scenario.</p><p>To answer, drag the appropriate solution to each scenario. Each solution may be used once, more than once, or not at all.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Scenario",
  "Solution"
 ],
 "srcs": [
  "Metric alert",
  "Log search alert",
  "Workbook",
  "Diagnostic setting to storage"
 ],
 "tgts": [
  {
   "l": "Be notified in under a minute when a disk exceeds 95% usage",
   "a": 0
  },
  {
   "l": "Be notified when a specific error appears in application logs",
   "a": 1
  },
  {
   "l": "Present a monthly availability report to management",
   "a": 2
  },
  {
   "l": "Keep a key vault's audit logs for 7 years",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Metric alert</b>: fast reaction on a numeric threshold.</li><li><b>Log search alert</b>: condition on log content.</li><li><b>Workbook</b>: interactive report.</li><li><b>Storage</b>: low-cost long-term archiving.</li></ul>",
 "portal": {
  "path": [
   "Monitor"
  ],
  "title": "Choose",
  "rows": [
   [
    "*Fast threshold",
    "Metric alert"
   ],
   [
    "Log content",
    "Log search"
   ],
   [
    "Report",
    "Workbook"
   ],
   [
    "7 years",
    "Storage"
   ]
  ]
 },
 "keep": "Threshold = metric; text = logs; report = workbook; archive = storage."
}
);
