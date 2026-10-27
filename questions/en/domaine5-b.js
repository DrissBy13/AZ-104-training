/* Domain 5: monitoring and backup (batch B : D5-009 to D5-060) */
AZ.questions.push(
{
 "id": "D5-009",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Monitor data source for each need.</p><p>To answer, drag the appropriate source to each need. Each source may be used once, more than once, or not at all.</p>",
 "srcLabel": "Sources",
 "srcs": [
  "Platform metrics",
  "Activity log",
  "Resource logs",
  "Guest logs (through the Azure Monitor agent)"
 ],
 "tgtHead": [
  "Need",
  "Source"
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
 "id": "D5-010",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to keep subscription Sub1's activity log for 2 years and query it with KQL together with other logs.</p><p>What should you configure?</p>",
 "opts": [
  "An activity log diagnostic setting to a Log Analytics workspace, with suitable retention",
  "Azure Advisor",
  "An activity log alert",
  "Nothing: the activity log is kept 2 years"
 ],
 "ans": 0,
 "expl": "<p>The activity log is only kept <b>90 days</b>. To go further, you create a subscription-level <b>diagnostic setting</b> that sends it to a <b>Log Analytics</b> workspace (AzureActivity table, queryable in KQL), a storage account (archiving), or Event Hubs.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Activity log"
  ],
  "title": "Export activity log",
  "rows": [
   [
    "*Diagnostic setting",
    "Sub1 → LAW-Audit"
   ],
   [
    "Table retention",
    "2 years"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Activity log > 90 days = diagnostic setting to Log Analytics."
},
{
 "id": "D5-011",
 "dom": 5,
 "type": "single",
 "stem": "<p>A key vault's resource logs aren't collected anywhere.</p><p>What should you create to send them to Log Analytics?</p>",
 "opts": [
  "A workbook",
  "A diagnostic setting on the key vault",
  "A metric alert",
  "A VM data collection rule"
 ],
 "ans": 1,
 "expl": "<p><b>Resource logs</b> aren't collected by default. You create a <b>diagnostic setting</b> on the resource, choose the categories (for example AuditEvent) and the destinations: Log Analytics, storage account, Event Hubs, or partner solution.</p><p>A resource can have up to 5 diagnostic settings.</p>",
 "portal": {
  "path": [
   "Key vaults",
   "kv1"
  ],
  "title": "kv1 | Diagnostic settings",
  "menu": [
   "*Diagnostic settings"
  ],
  "rows": [
   [
    "*Categories",
    "AuditEvent"
   ],
   [
    "Destination",
    "Send to Log Analytics"
   ]
  ],
  "btn": "+ Add diagnostic setting"
 },
 "keep": "Resource logs = diagnostic setting on the resource."
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
 "id": "D5-013",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to collect performance counters (available memory, disk space) and the System log from 50 Windows VMs, to workspace WS1.</p><p>What should you deploy?</p>",
 "opts": [
  "The Log Analytics agent (MMA)",
  "A diagnostic setting on each VM only",
  "The Azure Monitor agent and a data collection rule (DCR) associated with the 50 VMs",
  "Boot diagnostics"
 ],
 "ans": 2,
 "expl": "<p>The <b>Azure Monitor agent</b> (AMA) collects guest data according to <b>data collection rules</b> (DCRs): which data (counters, events, Syslog, log files), and to which destination. The same DCR can be associated with many VMs.</p><p>The Log Analytics agent (MMA) was retired in August 2024. A VM's diagnostic setting only collects host metrics, not operating system data.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules"
  ],
  "title": "Create data collection rule",
  "rows": [
   [
    "*Resources",
    "50 VMs (Azure Monitor agent)"
   ],
   [
    "Sources",
    "Counters + System log"
   ],
   [
    "Destination",
    "WS1"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Guest data = AMA + DCR (MMA retired)."
},
{
 "id": "D5-014",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to see the network dependencies between your VMs' processes (which servers talk to which servers, on which ports) and preconfigured performance charts.</p><p>What should you enable?</p>",
 "opts": [
  "Azure Advisor",
  "Network Watcher Next hop",
  "Boot diagnostics",
  "VM Insights, with the Map feature"
 ],
 "ans": 3,
 "expl": "<p><b>VM Insights</b> provides performance dashboards (CPU, memory, disk, network) and, with the <b>Dependency agent</b>, the <b>Map</b> of processes and connections between machines.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Virtual Machines insights"
  ],
  "title": "Virtual Machines insights",
  "menu": [
   "Performance",
   "*Map"
  ],
  "rows": [
   [
    "*Map",
    "Processes and connections"
   ]
  ]
 },
 "keep": "Dependencies between VMs = VM Insights, Map."
},
{
 "id": "D5-015",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to be notified by email when VM2's average CPU exceeds 85% for 15 minutes.</p><p>Which type of alert should you create?</p>",
 "opts": [
  "A metric alert",
  "An activity log alert",
  "A service health alert",
  "A budget alert"
 ],
 "ans": 0,
 "expl": "<p>A <b>metric alert</b> regularly evaluates a metric (here Percentage CPU, average over 15 minutes) against a threshold, and triggers an <b>action group</b> (email, SMS…). It reacts in near real time.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM2"
  ],
  "title": "Create an alert rule",
  "rows": [
   [
    "*Signal",
    "Percentage CPU"
   ],
   [
    "Condition",
    "Average > 85 · 15 min"
   ],
   [
    "Actions",
    "Email action group"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Threshold on a value = metric alert."
},
{
 "id": "D5-016",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to be alerted when someone <b>deletes</b> a virtual machine in subscription Sub1.</p><p>Which type of alert should you create?</p>",
 "opts": [
  "A resource health alert",
  "An activity log alert on the Delete Virtual Machine operation",
  "A metric alert",
  "A budget alert"
 ],
 "ans": 1,
 "expl": "<p>A deletion is a control plane operation, recorded in the <b>activity log</b>. An <b>activity log alert</b> filtered on the operation <code>Microsoft.Compute/virtualMachines/delete</code> fires on each deletion.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Create an alert rule",
  "rows": [
   [
    "*Signal",
    "Delete Virtual Machine (activity log)"
   ],
   [
    "Scope",
    "Sub1"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Management operation = activity log alert."
},
{
 "id": "D5-017",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to be notified when planned maintenance or an Azure platform incident affects the App Service services in France Central used by your subscription.</p><p>What should you configure?</p>",
 "opts": [
  "A budget alert",
  "A diagnostic setting",
  "A Service Health alert",
  "A metric alert on CPU"
 ],
 "ans": 2,
 "expl": "<p><b>Service Health</b> informs you of incidents, planned maintenance, health advisories, and security advisories that affect <b>the services and regions</b> you use. A <b>Service Health alert</b>, filtered on App Service and France Central, sends the notification.</p>",
 "portal": {
  "path": [
   "Service Health"
  ],
  "title": "Service Health | Health alerts",
  "menu": [
   "Service issues",
   "Planned maintenance",
   "*Health alerts"
  ],
  "rows": [
   [
    "*Services",
    "App Service"
   ],
   [
    "Regions",
    "France Central"
   ]
  ],
  "btn": "+ Create service health alert"
 },
 "keep": "Azure incidents and maintenance = Service Health."
},
{
 "id": "D5-018",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM3 became unavailable for 10 minutes last night. You want to know whether the cause comes from the Azure platform (host issue) or your VM.</p><p>What should you look at?</p>",
 "opts": [
  "Azure Advisor",
  "The storage account metrics",
  "Cost analysis",
  "VM3's Resource Health"
 ],
 "ans": 3,
 "expl": "<p><b>Resource Health</b> shows the state of a specific resource (Available, Unavailable, Degraded, Unknown) and its history, with the cause when it's platform-related (for example a host reboot).</p><p>Service Health is global to services and regions; Resource Health concerns <b>your</b> resource.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM3"
  ],
  "title": "VM3 | Resource health",
  "menu": [
   "*Resource health"
  ],
  "rows": [
   [
    "*Last night 02:10",
    "Unavailable · host reboot (platform)"
   ]
  ]
 },
 "keep": "My resource and the platform = Resource Health."
},
{
 "id": "D5-019",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate alert type for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Alert types",
 "srcs": [
  "Metric alert",
  "Log search alert",
  "Activity log alert",
  "Service Health alert",
  "Resource Health alert"
 ],
 "tgtHead": [
  "Need",
  "Type"
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
 "id": "D5-020",
 "dom": 5,
 "type": "single",
 "stem": "<p>Three alerts must send an email to the on-call team, an SMS to the manager, and call a webhook to the ticketing tool.</p><p>How do you reduce configuration effort?</p>",
 "opts": [
  "Create a single action group with these three actions and associate it with the three alerts",
  "Create three workspaces",
  "Create a workbook",
  "Configure notifications in each alert separately"
 ],
 "ans": 0,
 "expl": "<p>An <b>action group</b> groups notifications (email, SMS, push notification, voice call) and actions (webhook, Automation runbook, function, logic app, ITSM, Event Hubs). It can be reused by as many alerts as needed.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Action groups"
  ],
  "title": "Create action group",
  "rows": [
   [
    "*Notifications",
    "Email + SMS"
   ],
   [
    "Actions",
    "Webhook"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Reusable notifications = action group."
},
{
 "id": "D5-021",
 "dom": 5,
 "type": "single",
 "stem": "<p>During a planned maintenance window every Saturday from 10 PM to 2 AM, alerts for VMs in RG-Prod must send no notifications, but must stay visible in the portal.</p><p>What should you configure?</p>",
 "opts": [
  "A lock on RG-Prod",
  "An alert processing rule that suppresses action groups on a schedule",
  "Disable each alert rule on Saturday",
  "Delete the action group"
 ],
 "ans": 1,
 "expl": "<p>An <b>alert processing rule</b> can, over a scope and schedule, <b>suppress notifications</b> (alerts keep being created) or <b>add action groups</b> to alerts.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Create an alert processing rule",
  "rows": [
   [
    "Scope",
    "RG-Prod"
   ],
   [
    "*Rule type",
    "Suppress notifications"
   ],
   [
    "Schedule",
    "Saturday 22:00 → 02:00"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Scheduled silence = alert processing rule."
},
{
 "id": "D5-022",
 "dom": 5,
 "type": "single",
 "stem": "<p>An application's CPU load varies widely by hour and day. A fixed threshold generates too many false alerts.</p><p>Which threshold type should you use in the metric alert?</p>",
 "opts": [
  "A lower static threshold",
  "A Service Health alert",
  "A dynamic threshold",
  "An activity log alert"
 ],
 "ans": 2,
 "expl": "<p><b>Dynamic thresholds</b> learn the metric's usual behavior (including hourly and weekly cycles) and alert on abnormal deviations, with adjustable sensitivity (high, medium, low).</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Condition",
  "rows": [
   [
    "*Threshold type",
    "Dynamic"
   ],
   [
    "Sensitivity",
    "Medium"
   ]
  ]
 },
 "keep": "Cyclical load = dynamic threshold."
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
 "tpl": "Event<br>| where TimeGenerated &gt; {0}(24h) and EventLevelName == \"Error\"<br>| {1} ErrorCount = count() by Computer<br>| {2} by ErrorCount desc",
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
 "keep": "ago = period; summarize = aggregate; sort/order = sort."
},
{
 "id": "D5-025",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to display the 10 VMs with the highest average CPU over the last hour, from the Perf table.</p><p>How should you complete the KQL query?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "Perf<br>| where TimeGenerated &gt; ago(1h) and ObjectName == \"Processor\" and CounterName == \"% Processor Time\"<br>| summarize AvgCpu = {0}(CounterValue) by Computer<br>| {1} 10 by AvgCpu desc",
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
 "keep": "top = sort + limit; take/limit = no sort."
},
{
 "id": "D5-026",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to display a KQL query's result as a time chart in Log Analytics.</p><p>Which operator should you add at the end of the query?</p>",
 "opts": [
  "extend graph",
  "project chart",
  "summarize timechart",
  "render timechart"
 ],
 "ans": 3,
 "expl": "<p><code>render</code> chooses the visualization: <code>timechart</code>, <code>barchart</code>, <code>piechart</code>… It's often used after a <code>summarize ... by bin(TimeGenerated, 5m)</code> that groups data into time intervals.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Results",
  "rows": [
   [
    "*render timechart",
    "Time chart"
   ]
  ]
 },
 "keep": "Chart = render."
},
{
 "id": "D5-027",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to count the number of HTTP requests per 5-minute slot over the last day.</p><p>Which function should you use in the summarize?</p>",
 "opts": [
  "bin(TimeGenerated, 5m)",
  "ago(5m)",
  "now(5m)",
  "range(5m)"
 ],
 "ans": 0,
 "expl": "<p><code>bin()</code> rounds a value down to the chosen interval: <code>summarize count() by bin(TimeGenerated, 5m)</code> gives a count per 5-minute slot. <code>ago()</code> is used to filter a relative period.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Query",
  "rows": [
   [
    "*bin(TimeGenerated, 5m)",
    "5-minute slots"
   ]
  ]
 },
 "keep": "Grouping by interval = bin()."
},
{
 "id": "D5-028",
 "dom": 5,
 "type": "single",
 "stem": "<p>A team wants an interactive report that combines KQL queries, metrics, parameters (subscription selection), and explanatory text, shared with other administrators.</p><p>What should you create?</p>",
 "opts": [
  "A metric alert",
  "An Azure Monitor workbook",
  "A data collection rule",
  "An action group"
 ],
 "ans": 1,
 "expl": "<p><b>Workbooks</b> combine text, log queries, metrics, and parameters in interactive, shareable reports. Azure <b>dashboards</b> pin views, with less interactivity.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Workbooks"
  ],
  "title": "New workbook",
  "menu": [
   "*Workbooks"
  ],
  "rows": [
   [
    "*Content",
    "Text, queries, metrics, parameters"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Shared interactive report = workbook."
},
{
 "id": "D5-029",
 "dom": 5,
 "type": "single",
 "stem": "<p>Data in the SecurityEvent table must stay queryable for 1 year, then be kept at low cost for up to 7 years, without being exported.</p><p>What should you configure on the table?</p>",
 "opts": [
  "A storage account",
  "A second workspace",
  "An interactive retention of 365 days and a total retention of 7 years (long-term retention)",
  "An alert processing rule"
 ],
 "ans": 2,
 "expl": "<p>Each table in a workspace has an <b>interactive retention</b> (data queryable normally, up to 2 years) and a <b>total retention</b> (up to 12 years). In between, data is in <b>long-term retention</b> (archive), cheaper, accessible through search jobs or a restore.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1",
   "Tables"
  ],
  "title": "SecurityEvent | Manage table",
  "rows": [
   [
    "*Interactive retention",
    "365 days"
   ],
   [
    "*Total retention",
    "7 years"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Queryable then archive = interactive + total retention."
},
{
 "id": "D5-030",
 "dom": 5,
 "type": "single",
 "stem": "<p>Members of the Web team must only see, in the shared workspace WS2, the logs of resources they have rights on.</p><p>Which workspace access control mode allows this?</p>",
 "opts": [
  "A shared workspace key",
  "One workspace per user",
  "Require workspace permissions only",
  "Use resource or workspace permissions (resource-context)"
 ],
 "ans": 3,
 "expl": "<p>With the <b>“Use resource or workspace permissions”</b> mode, a user who opens logs from a resource (resource-context) sees data for resources they have read access to, without rights on the whole workspace. You can also define table-level RBAC.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS2"
  ],
  "title": "WS2 | Properties",
  "rows": [
   [
    "*Access control mode",
    "Use resource or workspace permissions"
   ]
  ]
 },
 "keep": "Seeing only your resources = resource-context."
},
{
 "id": "D5-031",
 "dom": 5,
 "type": "single",
 "stem": "<p>A team must create and modify alert rules and action groups, without being able to modify the monitored resources.</p><p>Which role should you assign to it?</p>",
 "opts": [
  "Monitoring Contributor",
  "Log Analytics Contributor",
  "Monitoring Reader",
  "Contributor"
 ],
 "ans": 0,
 "expl": "<p><b>Monitoring Contributor</b> reads all monitoring data and manages monitoring settings (alerts, action groups, diagnostic settings). <b>Monitoring Reader</b> only reads. <b>Contributor</b> gives access to the resources.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Add role assignment",
  "rows": [
   [
    "*Role",
    "Monitoring Contributor"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Managing alerts without touching resources = Monitoring Contributor."
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
 "id": "D5-033",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to monitor the availability and performance of a web application (response time, exceptions, dependencies), and test its URL from several regions of the world.</p><p>What should you use?</p>",
 "opts": [
  "Azure Advisor",
  "Application Insights with availability tests",
  "Network Watcher",
  "VM Insights"
 ],
 "ans": 1,
 "expl": "<p><b>Application Insights</b> (an Azure Monitor feature, based on a Log Analytics workspace) collects application telemetry: requests, response times, exceptions, dependencies. <b>Availability tests</b> query the URL from several locations and alert on failure.</p>",
 "portal": {
  "path": [
   "Application Insights",
   "appi-web"
  ],
  "title": "appi-web | Availability",
  "menu": [
   "*Availability",
   "Performance",
   "Failures"
  ],
  "rows": [
   [
    "*Standard test",
    "5 locations"
   ]
  ],
  "btn": "+ Add Standard test"
 },
 "keep": "Application telemetry + URL test = Application Insights."
},
{
 "id": "D5-034",
 "dom": 5,
 "type": "single",
 "stem": "<p>A network configuration changed yesterday and an application no longer works. You want to quickly see resource property changes over the last few days.</p><p>What should you use?</p>",
 "opts": [
  "Boot diagnostics",
  "Azure Backup",
  "Change Analysis / resource change history",
  "A budget alert"
 ],
 "ans": 2,
 "expl": "<p><b>Change Analysis</b> (or change history in the activity log and Resource Graph) shows resource configuration changes (before and after), whether they come from the portal, a template, or a script. It's often the fastest way to find the cause of a regression.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Change Analysis"
  ],
  "title": "Changes",
  "rows": [
   [
    "*Yesterday 17:05",
    "nsg-app · rule 200 modified"
   ]
  ]
 },
 "keep": "What changed = Change Analysis."
},
{
 "id": "D5-035",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to back up 20 Azure VMs in France Central every night, with 30-day retention.</p><p>Where should you create the Recovery Services vault?</p>",
 "opts": [
  "In West Europe, for redundancy",
  "In any region",
  "In the paired region France South",
  "In the France Central region"
 ],
 "ans": 3,
 "expl": "<p>To back up Azure VMs, the vault must be in the <b>same region</b> as the VMs. Protection against a regional outage comes from the vault's redundancy (<b>GRS</b>) and <b>cross-region restore</b>.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Create"
  ],
  "title": "Create vault",
  "rows": [
   [
    "*Region",
    "France Central"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "VM backup = vault in the VMs' region."
},
{
 "id": "D5-036",
 "dom": 5,
 "type": "single",
 "stem": "<p>You must be able to restore backed-up VMs in the paired region, even if the primary region is still available (for example for a drill).</p><p>What should you enable on the Recovery Services vault?</p>",
 "opts": [
  "GRS redundancy and Cross Region Restore",
  "Soft delete",
  "Immutable mode",
  "LRS redundancy"
 ],
 "ans": 0,
 "expl": "<p>With a <b>GRS</b> vault, backup data is replicated to the paired region. <b>Cross Region Restore</b> lets you restore from that secondary region at any time, not only after an outage declared by Microsoft.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Vault1 | Properties",
  "rows": [
   [
    "Redundancy",
    "Geo-redundant"
   ],
   [
    "*Cross Region Restore",
    "Enable"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Restoring in the paired region = GRS + Cross Region Restore."
},
{
 "id": "D5-037",
 "dom": 5,
 "type": "single",
 "stem": "<p>You created a Recovery Services vault with the default redundancy and protected 10 VMs. You now want to switch the vault to LRS to reduce costs.</p><p>What happens?</p>",
 "opts": [
  "You must change each VM's redundancy",
  "It isn't possible once items are protected: you must stop protection and delete the data, or create a new vault",
  "You can change the redundancy at any time",
  "The vault switches to LRS at the next restart"
 ],
 "ans": 1,
 "expl": "<p>A vault's <b>storage redundancy</b> (GRS by default, LRS, or ZRS) must be chosen <b>before</b> the first backup. Once items are registered, it can no longer be changed (except by stopping protection and deleting the data). You often create a new vault.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Backup configuration",
  "rows": [
   [
    "*Storage redundancy",
    "Locked (protected items)"
   ]
  ]
 },
 "keep": "Vault redundancy: choose it before the first backup."
},
{
 "id": "D5-038",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate vault type for each workload.</p><p>To answer, drag the appropriate type to each workload. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Vaults",
 "srcs": [
  "Recovery Services vault",
  "Backup vault"
 ],
 "tgtHead": [
  "Workload",
  "Vault"
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
 "id": "D5-039",
 "dom": 5,
 "type": "single",
 "stem": "<p>A Windows VM runs SQL Server. You want Azure Backup backups of the VM to be application-consistent.</p><p>Which mechanism does Azure Backup use on Windows?</p>",
 "opts": [
  "A mandatory pre-post script",
  "The temporary disk",
  "The VSS (Volume Shadow Copy Service)",
  "Boot diagnostics"
 ],
 "ans": 2,
 "expl": "<p>On Windows, Azure Backup coordinates with <b>VSS</b> to obtain an <b>application-consistent</b> backup (applications flush their writes). On Linux, pre and post scripts are used to obtain the same consistency; otherwise the backup is file-system consistent.</p><p>For SQL Server, the dedicated “SQL Server in Azure VM” backup also allows log backups.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1",
   "Backup jobs"
  ],
  "title": "VM-SQL backup",
  "rows": [
   [
    "*Consistency",
    "Application (VSS)"
   ]
  ]
 },
 "keep": "Application consistency on Windows = VSS."
},
{
 "id": "D5-040",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Backup restore option for each need.</p><p>To answer, drag the appropriate option to each need. Each option may be used once, more than once, or not at all.</p>",
 "srcLabel": "Options",
 "srcs": [
  "Create virtual machine",
  "Restore disks",
  "Replace existing",
  "File recovery"
 ],
 "tgtHead": [
  "Need",
  "Option"
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
 ],
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
 "keep": "Point → script → copy → unmount."
},
{
 "id": "D5-042",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to quickly restore a VM from yesterday's backup, with the shortest delay.</p><p>Where do the fastest restores come from?</p>",
 "opts": [
  "From boot diagnostics",
  "From the GRS vault tier only",
  "From the vault storage account in Archive",
  "From local snapshots kept for a few days (instant restore)"
 ],
 "ans": 3,
 "expl": "<p>Azure Backup keeps disk <b>snapshots</b> for a few days (1 to 5 days with the standard policy, more with the enhanced policy): <b>instant restore</b> from these snapshots is much faster than from the vault.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM1"
  ],
  "title": "Restore points",
  "rows": [
   [
    "*Snapshot",
    "Yesterday · instant restore"
   ],
   [
    "Vault",
    "Slower"
   ]
  ]
 },
 "keep": "Fastest restore = snapshots (instant restore)."
},
{
 "id": "D5-043",
 "dom": 5,
 "type": "single",
 "stem": "<p>A critical application must be backed up every 4 hours, with recovery points kept for 7 days.</p><p>Which type of VM backup policy should you use?</p>",
 "opts": [
  "An Enhanced policy, with an hourly schedule",
  "A daily standard policy",
  "A lifecycle policy",
  "An alert processing rule"
 ],
 "ans": 0,
 "expl": "<p>The <b>Enhanced policy</b> allows several backups a day (every 4, 6, 8, or 12 hours), longer snapshot retention, and supports Trusted Launch VMs. The <b>Standard</b> policy does only one backup a day.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Create policy",
  "rows": [
   [
    "*Policy sub type",
    "Enhanced"
   ],
   [
    "Frequency",
    "Every 4 hours"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Several backups a day = Enhanced policy."
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
 "id": "D5-045",
 "dom": 5,
 "type": "single",
 "stem": "<p>A malicious administrator stops protection of a VM and deletes its backup data.</p><p>Which feature lets you recover this data for a period of time?</p>",
 "opts": [
  "A metric alert",
  "Vault soft delete (14 days by default, more with enhanced soft delete)",
  "Boot diagnostics",
  "LRS redundancy"
 ],
 "ans": 1,
 "expl": "<p>With <b>soft delete</b> (enabled by default), deleted backup data stays recoverable for <b>14 days</b> at no extra cost. <b>Enhanced</b> soft delete allows up to 180 days and can be made always-on (irreversible).</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Security settings",
  "rows": [
   [
    "*Soft delete",
    "Enabled · 14 days"
   ]
  ]
 },
 "keep": "Deleted backup recoverable = soft delete."
},
{
 "id": "D5-046",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want no backup data in the vault to be deletable or shortened before its expiry date, even by an administrator, to protect against ransomware.</p><p>What should you enable, then lock?</p>",
 "opts": [
  "Cross Region Restore",
  "An alert",
  "Immutable vault",
  "ZRS redundancy"
 ],
 "ans": 2,
 "expl": "<p>An <b>immutable vault</b> prevents operations that could lose recovery points (deletion, retention reduction). Once <b>locked</b>, this setting is irreversible.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Properties › Immutability",
  "rows": [
   [
    "*Immutable vault",
    "Enabled and locked"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Nothing can shorten backups = locked immutable vault."
},
{
 "id": "D5-047",
 "dom": 5,
 "type": "single",
 "stem": "<p>Critical vault operations (disabling soft delete, reducing retention) must require the approval of another team, owner of a guard resource in another subscription.</p><p>What should you configure?</p>",
 "opts": [
  "A second vault",
  "A ReadOnly lock on the vault",
  "An activity log alert",
  "Multi-user authorization (MUA) with a Resource Guard"
 ],
 "ans": 3,
 "expl": "<p><b>Multi-user authorization</b> associates the vault with a <b>Resource Guard</b> managed by another team. Protected operations then require authorization on the Resource Guard (often through PIM), in addition to rights on the vault.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Multi-user authorization",
  "rows": [
   [
    "*Resource Guard",
    "rg-guard (another subscription)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Another team's approval = MUA + Resource Guard."
},
{
 "id": "D5-048",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to back up folders of an <b>on-premises</b> file server (not an Azure VM) to Azure every day, with no intermediate backup server.</p><p>What should you install on the server?</p>",
 "opts": [
  "The Microsoft Azure Recovery Services (MARS) agent",
  "The Azure Monitor agent",
  "The Dependency agent",
  "Azure File Sync"
 ],
 "ans": 0,
 "expl": "<p>The <b>MARS agent</b> backs up files, folders, and system state of a Windows server (on-premises or VM) directly to a Recovery Services vault, up to 3 times a day.</p><p>For full application workloads (SQL, Hyper-V…), you use <b>Microsoft Azure Backup Server</b> (MABS) or DPM.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Backup goal",
  "rows": [
   [
    "Where",
    "On-premises"
   ],
   [
    "*What",
    "Files and folders → MARS agent"
   ]
  ]
 },
 "keep": "Files on an on-premises server, no intermediate server = MARS."
},
{
 "id": "D5-049",
 "dom": 5,
 "type": "single",
 "stem": "<p>You install the MARS agent on an on-premises server. The registration wizard asks you for a file.</p><p>Which file should you provide, and where do you get it?</p>",
 "opts": [
  "An SSL certificate for the server",
  "The vault credentials, downloaded from the Recovery Services vault",
  "A storage account access key",
  "An ARM parameters file"
 ],
 "ans": 1,
 "expl": "<p>You download the <b>vault credentials</b> from the Recovery Services vault. They're only valid for a limited time: download them just before registration. The agent also asks for an encryption <b>passphrase</b>, to keep safe: without it, restore is impossible.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Prepare infrastructure",
  "rows": [
   [
    "*Vault credentials",
    "Download"
   ],
   [
    "Passphrase",
    "Keep it safe"
   ]
  ],
  "btn": "Download"
 },
 "keep": "MARS registration = vault credentials + passphrase."
},
{
 "id": "D5-050",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to back up the Azure Files share share1 every day, with 30-day retention and the ability to restore a single file.</p><p>What should you configure?</p>",
 "opts": [
  "Object replication",
  "The MARS agent on each client",
  "Azure Backup for Azure Files, in a Recovery Services vault in the same region",
  "Azure Site Recovery"
 ],
 "ans": 2,
 "expl": "<p>Azure Backup's <b>Azure Files</b> backup (Recovery Services vault) schedules <b>share snapshots</b> (or a vaulted backup), manages their retention, and lets you restore the whole share or individual files, to the original or another location.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stfiles"
  ],
  "title": "share1 | Backup",
  "rows": [
   [
    "*Vault",
    "Recovery Services (same region)"
   ],
   [
    "Retention",
    "30 days"
   ]
  ],
  "btn": "Enable backup"
 },
 "keep": "Backing up Azure Files = Azure Backup (Recovery Services vault)."
},
{
 "id": "D5-051",
 "dom": 5,
 "type": "single",
 "stem": "<p>You must be able to restore a storage account's blobs to any point in the last 14 days, without copying the data elsewhere.</p><p>Which type of blob backup should you configure in a Backup vault?</p>",
 "opts": [
  "The MARS agent",
  "Azure Site Recovery",
  "Vaulted backup only",
  "Operational backup (based on point-in-time restore, versioning, and soft delete)"
 ],
 "ans": 3,
 "expl": "<p><b>Operational backup</b> for blobs is local: it relies on account features (point-in-time restore, versioning, soft delete, change feed) and allows continuous restore. <b>Vaulted backup</b> copies data into the vault, which also protects against losing the account.</p>",
 "portal": {
  "path": [
   "Backup vaults",
   "bv1"
  ],
  "title": "Configure backup",
  "rows": [
   [
    "Datasource",
    "Blobs"
   ],
   [
    "*Type",
    "Operational · 14 days"
   ]
  ],
  "btn": "Review + configure"
 },
 "keep": "Local continuous blob restore = operational backup."
},
{
 "id": "D5-052",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to stop backing up VM5, which is decommissioned, but keep the existing recovery points according to their retention.</p><p>Which option should you choose?</p>",
 "opts": [
  "Stop backup and retain backup data",
  "Stop backup and delete backup data",
  "Delete the vault",
  "Suspend the policy for all VMs"
 ],
 "ans": 0,
 "expl": "<p><b>Stop backup and retain data</b>: no new backups, but existing points remain restorable (per the policy, or indefinitely depending on the option chosen). Storage keeps being billed.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM5"
  ],
  "title": "Stop backup",
  "rows": [
   [
    "*Option",
    "Retain backup data"
   ]
  ],
  "btn": "Stop backup"
 },
 "keep": "No more backups but keep points = stop and retain."
},
{
 "id": "D5-053",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to delete the Recovery Services vault Vault2. The deletion fails.</p><p>What is the most likely cause?</p>",
 "opts": [
  "The vault is in a resource group with a ReadOnly lock only",
  "The vault still contains protected items or soft-deleted data",
  "The vault is GRS",
  "The vault has no alert"
 ],
 "ans": 1,
 "expl": "<p>A vault can't be deleted while it contains <b>protected items</b>, <b>backup data</b> (including soft-deleted), registered servers, or Site Recovery replication items. You must stop and delete everything, then wait for soft delete to end or purge it.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault2"
  ],
  "title": "Delete vault",
  "rows": [
   [
    "*Protected items",
    "3"
   ],
   [
    "Soft-deleted",
    "2"
   ]
  ]
 },
 "keep": "Empty the vault (including soft-deleted) before deleting it."
},
{
 "id": "D5-054",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to check in one place the backup status of 15 vaults spread across several subscriptions and regions, with failed jobs.</p><p>What should you use?</p>",
 "opts": [
  "The activity log",
  "Azure Advisor only",
  "Azure Business Continuity Center (or Backup center)",
  "Each vault separately"
 ],
 "ans": 2,
 "expl": "<p><b>Business Continuity Center</b>, which replaces Backup center, offers a unified view of protection (Backup and Site Recovery) across several vaults, subscriptions, and regions: protected items, jobs, alerts, policies.</p>",
 "portal": {
  "path": [
   "Business Continuity Center"
  ],
  "title": "Overview",
  "rows": [
   [
    "*Vaults",
    "15 · several subscriptions"
   ],
   [
    "Failed jobs",
    "4"
   ]
  ]
 },
 "keep": "Multi-vault view = Business Continuity Center."
},
{
 "id": "D5-055",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want reports on backup storage consumption, job trends, and protected items over the last 6 months.</p><p>What should you configure?</p>",
 "opts": [
  "A metric alert",
  "A lifecycle rule",
  "Change feed",
  "Backup reports, with the vaults' diagnostic settings sent to a Log Analytics workspace"
 ],
 "ans": 3,
 "expl": "<p><b>Backup reports</b> (workbook-based) rely on data sent by the vaults' <b>diagnostic settings</b> to <b>Log Analytics</b>. They cover consumption, jobs, policies, and optimization.</p>",
 "portal": {
  "path": [
   "Business Continuity Center",
   "Reports"
  ],
  "title": "Backup reports",
  "rows": [
   [
    "*Source",
    "Vault diagnostics → Log Analytics"
   ]
  ]
 },
 "keep": "Backup reports = vault diagnostics to Log Analytics."
},
{
 "id": "D5-056",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM6's backups fail with an error related to the VM agent.</p><p>What should you check first?</p>",
 "opts": [
  "That the Azure VM agent is installed, up to date, and running, and that the VM can reach Azure services (including 168.63.129.16)",
  "That the vault is LRS",
  "That the VM is in an availability set",
  "That the VM has a public IP address"
 ],
 "ans": 0,
 "expl": "<p>Azure Backup uses an extension that depends on the <b>VM agent</b>. Failures often come from a stopped or outdated agent, or a network block (NSG, proxy, firewall) to Azure services and the address 168.63.129.16.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM6"
  ],
  "title": "VM6 | Properties",
  "rows": [
   [
    "*Agent status",
    "Not ready"
   ],
   [
    "Network",
    "168.63.129.16 reachable?"
   ]
  ]
 },
 "keep": "Agent-related backup failure = VM agent + network."
},
{
 "id": "D5-057",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM7 is encrypted with Azure Disk Encryption (keys in Key Vault). Backup configuration fails.</p><p>What should you check?</p>",
 "opts": [
  "That the key vault is public",
  "That the Backup Management Service has access to the key vault's keys and secrets",
  "That the Recovery Services vault is in another region",
  "That VM7 has no data disk"
 ],
 "ans": 1,
 "expl": "<p>To back up an ADE-encrypted VM, Azure Backup must be able to read the <b>keys and secrets</b> in the key vault: you must grant access to the <b>Backup Management Service</b> (access policy or role). The portal offers it during enablement.</p>",
 "portal": {
  "path": [
   "Key vaults",
   "kv-ade"
  ],
  "title": "Access policies",
  "rows": [
   [
    "*Backup Management Service",
    "Keys + secrets"
   ]
  ]
 },
 "keep": "ADE VM = Backup Management Service access to the key vault."
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
},
{
 "id": "D5-059",
 "dom": 5,
 "type": "single",
 "stem": "<p>You run an on-demand backup of VM8 before a risky update. Which expiry date can you choose for this recovery point?</p>",
 "opts": [
  "None: it's kept indefinitely",
  "Always 30 days",
  "A retention date chosen when the on-demand backup is run",
  "Always the daily policy's"
 ],
 "ans": 2,
 "expl": "<p>An <b>on-demand backup</b> (Backup now) lets you choose a <b>retention date</b> specific to this recovery point, independently of the policy.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM8"
  ],
  "title": "Backup Now",
  "rows": [
   [
    "*Retain Backup Till",
    "Date of your choice"
   ]
  ],
  "btn": "OK"
 },
 "keep": "On-demand backup = retention date of your choice."
},
{
 "id": "D5-060",
 "dom": 5,
 "type": "single",
 "stem": "<p>Backups of 200 VMs must be enabled automatically as soon as they're created, for all VMs that carry the tag Backup=Yes.</p><p>What should you use?</p>",
 "opts": [
  "An alert processing rule",
  "A script run manually every week",
  "An activity log alert",
  "A built-in DeployIfNotExists Azure Policy that configures backup for VMs with this tag"
 ],
 "ans": 3,
 "expl": "<p>Azure offers built-in <b>DeployIfNotExists</b> policies that configure VM backup (with or without a tag filter) to a given vault and policy. Existing VMs are fixed with a remediation task.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assign policy"
  ],
  "title": "Configure backup on VMs with a given tag",
  "rows": [
   [
    "*Effect",
    "DeployIfNotExists"
   ],
   [
    "Tag",
    "Backup=Yes"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Automatic backup on creation = Azure Policy DeployIfNotExists."
}
);
