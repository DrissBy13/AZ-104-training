/* Domaine 5 : Supervision et sauvegarde */
AZ.questions.push(
{
 "id": "D5-001",
 "dom": 5,
 "type": "single",
 "stem": "<p>A resource group was deleted yesterday in your subscription. You need to identify the user who deleted it, with the least effort.</p><p>What should you look at?</p>",
 "opts": [
  "Metrics explorer",
  "The activity log",
  "VM insights",
  "Virtual network flow logs"
 ],
 "ans": 1,
 "expl": "<p>The <b>activity log</b> automatically records, for <b>90 days</b>, control plane operations on resources: who (Caller), what (Delete Resource Group), when, and with what result. Just filter on the operation and the period.</p><p>Metrics measure numeric values (CPU, throughput). VM insights monitors VM performance. Flow logs record network traffic.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Activity log"
  ],
  "title": "Activity log",
  "menu": [
   "*Activity log",
   "Alerts",
   "Metrics"
  ],
  "rows": [
   [
    "Operation",
    "Delete Resource Group"
   ],
   [
    "*Event initiated by",
    "alex@contoso.com"
   ],
   [
    "Timestamp",
    "Yesterday 16:42"
   ]
  ]
 },
 "keep": "Who did what on a resource = activity log (90 days)."
},
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
 },
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
 "keep": "Which NSG rule blocks a flow = IP flow verify."
},
{
 "id": "D5-004",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM1 is in France Central. You want to back it up to a Recovery Services vault named Vault1, located in North Europe, but Vault1 doesn't appear in the list.</p><p>What should you do?</p>",
 "opts": [
  "Switch Vault1 to locally redundant storage",
  "Install the Azure Monitor agent on VM1",
  "Enable cross-region restore on Vault1",
  "Create a Recovery Services vault in France Central"
 ],
 "ans": 3,
 "expl": "<p>For <b>Azure Backup</b>, the Recovery Services vault must be in the <b>same region</b> as the VM to protect: Vault1 (North Europe) is therefore not offered for VM1 (France Central). You must create a vault in France Central.</p><p>The vault's redundancy (LRS, GRS) and cross-region restore don't change this rule. For <b>Site Recovery</b>, it's the reverse: the vault is in the <b>target</b> region.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Create"
  ],
  "title": "Create Recovery Services vault",
  "rows": [
   [
    "*Region",
    "France Central (same as VM1)"
   ],
   [
    "Name",
    "Vault-FRC"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Backup: vault in the VM's region; Site Recovery: vault in the target region."
},
{
 "id": "D5-005",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to display, in a Log Analytics workspace, the date and author of each resource deletion in the subscription.</p><p>How should you complete the query? To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0}<br>| where OperationNameValue contains \"delete\"<br>| {1} TimeGenerated, Caller, ResourceId",
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
 "keep": "Activity log in KQL = AzureActivity; columns = project."
},
{
 "id": "D5-006",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to collect events from VM1's Windows System log in a Log Analytics workspace.</p><p>Which two actions should you perform? Each correct answer presents part of the solution.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "opts": [
  "Install the Azure Monitor agent on VM1",
  "Create a diagnostic setting on VM1 to Event Hubs",
  "Enable Network Watcher in the region",
  "Create a data collection rule"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<p>What happens <b>inside</b> the operating system (event logs, counters, Syslog) is collected with the <b>Azure Monitor agent</b> and a <b>data collection rule</b> (DCR), which specifies what to collect (System log, levels) and to which workspace.</p><p>A diagnostic setting concerns platform logs, not the inside of the OS. Network Watcher is unrelated.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules"
  ],
  "title": "Create data collection rule",
  "rows": [
   [
    "*Resources",
    "VM1 (Azure Monitor agent)"
   ],
   [
    "*Source",
    "Windows event logs · System"
   ],
   [
    "Destination",
    "LAW1"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Inside a VM's OS = Azure Monitor agent + data collection rule."
},
{
 "id": "D5-007",
 "dom": 5,
 "type": "single",
 "stem": "<p>A user deleted a file on VM1's data disk. VM1 is backed up every night by Azure Backup.</p><p>You need to recover this file as quickly as possible, without interrupting VM1. What should you do?</p>",
 "opts": [
  "Replace existing disks",
  "Use file recovery",
  "Create a new virtual machine from the backup",
  "Perform a test failover"
 ],
 "ans": 1,
 "expl": "<p><b>File recovery</b> downloads a script that mounts a recovery point's disks as drives on a machine. You copy the file, then unmount. VM1 keeps running.</p><ul><li><b>Replace disks</b> stops VM1 and brings it entirely back to the backup's state.</li><li><b>Creating a VM</b> takes much longer for a single file.</li><li><b>Test failover</b> concerns Site Recovery.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1",
   "Backup items",
   "VM1"
  ],
  "title": "VM1 | File Recovery",
  "rows": [
   [
    "Recovery point",
    "Tonight 02:00"
   ],
   [
    "*Step 2",
    "Download script and mount disks"
   ]
  ],
  "btn": "Download Executable"
 },
 "keep": "One file without stopping the VM = file recovery."
},
{
 "id": "D5-008",
 "dom": 5,
 "type": "yngrid",
 "docs": [
  {
   "t": "Replication",
   "h": "<p>VM1 (France Central) is protected by Azure Site Recovery to France South. Current state:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Item</th><th>Value</th></tr><tr><td>Source region</td><td>France Central</td></tr><tr><td>Target region</td><td>France South</td></tr><tr><td>Replication health</td><td>Protected</td></tr><tr><td>Last test failover</td><td>Never</td></tr></table></div>"
  }
 ],
 "stem": "<p>You manage the protection of VM1, as shown in the Replication document (click the <b>Replication</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
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
