/* Domaine 5 : Supervision et sauvegarde */
AZ.questions.push(
{
 "id": "D5-002",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You configure monitoring for your Azure subscription.</p><p>Which component should you use for each requirement? To answer, drag the appropriate component to each requirement. Each component may be used once, more than once, or not at all.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "srcLabel": "Components",
 "tgtHead": [
  "Requirement",
  "Component"
 ],
 "srcs": [
  "Alert rule",
  "Action group",
  "Alert processing rule",
  "Diagnostic setting",
  "Data collection rule"
 ],
 "tgts": [
  {
   "l": "Trigger an alert when VM1's CPU exceeds 85%",
   "a": 0
  },
  {
   "l": "Send an SMS to the on-call team",
   "a": 1
  },
  {
   "l": "Notify no one during Sunday maintenance",
   "a": 2
  },
  {
   "l": "Send storage1's resource logs to Log Analytics",
   "a": 3
  },
  {
   "l": "Collect VM1's Windows System log",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Alert rule</b>: the condition (CPU > 85%) and the monitored resource.</li><li><b>Action group</b>: who to notify and how (SMS, email, call, webhook, runbook, Logic App).</li><li><b>Alert processing rule</b>: changes fired alerts, for example suppresses notifications during a scheduled maintenance window.</li><li><b>Diagnostic setting</b>: sends an Azure service's resource logs to Log Analytics, storage, or Event Hubs.</li><li><b>Data collection rule</b> (with the Azure Monitor agent): collects what happens <b>inside</b> the VMs' OS (events, counters).</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Monitor | Alerts",
  "menu": [
   "*Alert rules",
   "*Action groups",
   "*Alert processing rules"
  ],
  "rows": [
   [
    "Rule",
    "CPU > 85% · VM1"
   ],
   [
    "Action group",
    "On-call SMS"
   ],
   [
    "Processing",
    "Suppression · Sunday"
   ]
  ]
 },
 "keep": "When = alert rule; who = action group; silence = processing rule."
},
{
 "id": "D5-003",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>Your subscription contains 20 virtual networks and 500 virtual machines. VM501 can't communicate with VM20 on TCP port 1433. You suspect a network security group is blocking the communication.</p><p>You need to identify the rule that blocks the traffic. The solution must minimize administrative effort.</p><p>Which tool should you use? To answer, select the appropriate tool in the answer area.</p>",
 "ans": "IP flow verify",
 "expl": "<p><b>IP flow verify</b> tests a specific flow (VM, direction, protocol, addresses, and ports) and answers Allowed or Denied, with the <b>name of the NSG rule</b> that decides. It's the most direct tool here.</p><ul><li><b>Next hop</b>: routing, not filtering.</li><li><b>Effective security rules</b>: the full list of an interface's rules, to analyze manually.</li><li><b>Flow logs</b> and <b>packet capture</b>: much heavier to set up and read.</li></ul>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "IP flow verify",
  "menu": [
   "*IP flow verify"
  ],
  "rows": [
   [
    "VM501 → VM20",
    "TCP 1433 · outbound"
   ],
   [
    "*Result",
    "Denied · NSG-DB / Deny-SQL"
   ]
  ],
  "btn": "Check"
 },
 "keep": "Which NSG rule blocks a flow = IP flow verify.",
 "win": {
  "title": "Network Watcher",
  "nav": [
   {
    "g": "Monitoring",
    "items": [
     "Topology",
     "Connection monitor"
    ]
   },
   {
    "g": "Network diagnostic tools",
    "items": [
     "IP flow verify",
     "Next hop",
     "Effective security rules",
     "VPN troubleshoot",
     "Packet capture",
     "Connection troubleshoot"
    ]
   },
   {
    "g": "Logs",
    "items": [
     "Flow logs",
     "Traffic Analytics"
    ]
   }
  ]
 }
},
{
 "id": "D5-005",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to display, in a Log Analytics workspace, the date and author of each resource deletion in the subscription.</p><p>How should you complete the query? To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "o": [
    "Perf",
    "Heartbeat",
    "AzureActivity",
    "Event"
   ],
   "a": 2,
   "l": "Table"
  },
  {
   "o": [
    "summarize",
    "project",
    "render",
    "take"
   ],
   "a": 1,
   "l": "Operator"
  }
 ],
 "expl": "<p><b>AzureActivity</b> is the activity log table, once it's sent to Log Analytics. You filter with <code>where</code> on deletion operations, then <b>project</b> chooses the columns to display (date, author, resource).</p><ul><li><code>summarize</code> groups and computes (count, avg…).</li><li><code>render</code> draws a chart; <code>take</code> limits the number of rows.</li><li><b>Perf</b>, <b>Heartbeat</b>, and <b>Event</b> hold machine data: performance counters, agent presence, Windows events.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "LAW1"
  ],
  "title": "LAW1 | Logs",
  "menu": [
   "*Logs"
  ],
  "rows": [
   [
    "*AzureActivity",
    "| where … contains \"delete\""
   ],
   [
    "| project",
    "TimeGenerated, Caller, ResourceId"
   ]
  ],
  "btn": "Run"
 },
 "keep": "Activity log in KQL = AzureActivity; columns = project.",
 "tpl": "{0}<br>| where OperationNameValue contains \"delete\"<br>| {1} TimeGenerated, Caller, ResourceId"
},
{
 "id": "D5-008",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage the protection of VM1, as shown in the Replication document (click the <b>Replication</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Replication",
   "h": "<p>VM1 (France Central) is protected by Azure Site Recovery to France South. Current state:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Item</th><th>Value</th></tr><tr><td>Source region</td><td>France Central</td></tr><tr><td>Target region</td><td>France South</td></tr><tr><td>Replication health</td><td>Protected</td></tr><tr><td>Last test failover</td><td>Never</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A test failover stops VM1 in France Central.",
   "a": 1
  },
  {
   "l": "The Recovery Services vault used for this protection is located in France South.",
   "a": 0
  },
  {
   "l": "After a failover, reprotection is possible as soon as the failover is committed.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Test failover: No.</b> It creates a copy of VM1 in an isolated network in the target region, without touching production.</li><li><b>Vault in France South: Yes.</b> For cross-region Site Recovery, the vault is in the <b>target region</b>.</li><li><b>Reprotection: Yes.</b> The cycle is fail over, <b>commit</b>, then reprotect to replicate in the other direction.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault-FRS",
   "Replicated items",
   "VM1"
  ],
  "title": "VM1 | Overview",
  "rows": [
   [
    "Status",
    "Protected"
   ],
   [
    "*Test failover",
    "Isolated network · production untouched"
   ]
  ],
  "btn": "Test failover"
 },
 "keep": "Test = isolated network; ASR vault in the target region; fail over → commit → reprotect."
}
);
