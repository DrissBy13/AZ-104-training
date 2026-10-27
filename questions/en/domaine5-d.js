/* Domain 5: monitoring and backup (batch D : D5-111 to D5-160) */
AZ.questions.push(
{
 "id": "D5-111",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to assign the appropriate Azure Backup role for each need, following the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "srcs": [
  "Backup Reader",
  "Backup Operator",
  "Backup Contributor",
  "Owner"
 ],
 "tgtHead": [
  "Need",
  "Role"
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
 "id": "D5-112",
 "dom": 5,
 "type": "single",
 "stem": "<p>You configure managed disk backup with a Backup vault. Configuration fails because of permissions.</p><p>Which roles must the vault's managed identity have?</p>",
 "opts": [
  "Disk Backup Reader on the disk, and Disk Snapshot Contributor on the snapshot resource group",
  "Virtual Machine Contributor on the VM",
  "Reader on the vault",
  "Subscription Owner"
 ],
 "ans": 0,
 "expl": "<p>Disk backup creates <b>incremental snapshots</b> in a chosen resource group. The vault's managed identity needs <b>Disk Backup Reader</b> on each disk and <b>Disk Snapshot Contributor</b> on the snapshot resource group. The portal offers to assign them.</p>",
 "portal": {
  "path": [
   "Backup vaults",
   "bv1"
  ],
  "title": "Configure backup › Disks",
  "rows": [
   [
    "*Disk",
    "Disk Backup Reader"
   ],
   [
    "*Snapshot RG",
    "Disk Snapshot Contributor"
   ]
  ],
  "btn": "Assign missing roles"
 },
 "keep": "Disk backup = vault identity roles on the disk + snapshot RG."
},
{
 "id": "D5-113",
 "dom": 5,
 "type": "single",
 "stem": "<p>A SQL Server database runs on VM16. You want daily full backups and log backups every 15 minutes, managed by Azure Backup.</p><p>Which solution should you configure?</p>",
 "opts": [
  "The MARS agent",
  "“SQL Server in Azure VM” backup in a Recovery Services vault",
  "VM backup only",
  "Azure Site Recovery"
 ],
 "ans": 1,
 "expl": "<p><b>SQL Server in Azure VM</b> backup uses the SQL workload extension: it discovers databases, and allows full, differential, and <b>log</b> backups (up to every 15 minutes), with point-in-time restore.</p><p>VM backup alone doesn't capture transaction logs every 15 minutes.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Backup goal",
  "rows": [
   [
    "*What",
    "SQL Server in Azure VM"
   ],
   [
    "Logs",
    "Every 15 min"
   ]
  ]
 },
 "keep": "SQL with logs = SQL Server in Azure VM backup."
},
{
 "id": "D5-114",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to back up on-premises workloads (Hyper-V servers, SQL Server, Exchange) with an on-premises backup server, then send copies to Azure.</p><p>What should you deploy?</p>",
 "opts": [
  "Azure File Sync",
  "Azure Site Recovery only",
  "Microsoft Azure Backup Server (MABS)",
  "The MARS agent alone"
 ],
 "ans": 2,
 "expl": "<p><b>MABS</b> (or System Center DPM) backs up on-premises application workloads to disk, then sends copies to a Recovery Services vault. The MARS agent alone only backs up files, folders, and system state.</p>",
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
    "Hyper-V, SQL, Exchange → MABS"
   ]
  ]
 },
 "keep": "On-premises application workloads = MABS/DPM."
},
{
 "id": "D5-115",
 "dom": 5,
 "type": "single",
 "stem": "<p>Using file restore, you restored the Payroll folder of share2 to another share, share-restore, in another storage account.</p><p>What is this type of restore called?</p>",
 "opts": [
  "Reprotection",
  "Failover",
  "Original location restore",
  "Alternate location restore"
 ],
 "ans": 3,
 "expl": "<p>Azure Files backup lets you restore a whole share or files to the <b>original location</b> (overwriting or keeping conflicting files) or to an <b>alternate location</b> (another share, possibly in another account in the same region).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stfiles",
   "share2"
  ],
  "title": "File Recovery",
  "rows": [
   [
    "*Recovery destination",
    "Alternate location · share-restore"
   ]
  ],
  "btn": "Restore"
 },
 "keep": "Restoring elsewhere = alternate location restore."
},
{
 "id": "D5-116",
 "dom": 5,
 "type": "single",
 "stem": "<p>A Linux VM hosts a MySQL database. You want the Azure backup of the VM to be application-consistent.</p><p>What should you configure?</p>",
 "opts": [
  "Pre and post scripts (pre/post backup script framework) that freeze then thaw the database",
  "A metric alert",
  "The VSS service",
  "The serial console"
 ],
 "ans": 0,
 "expl": "<p>Linux has no VSS. Azure Backup provides a <b>pre/post script framework</b>: the pre script freezes the application (flush and lock), the snapshot is taken, then the post script thaws the application. Without scripts, the backup is <b>file-system</b> consistent.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "vm-mysql"
  ],
  "title": "/etc/azure/VMSnapshotScriptPluginConfig.json",
  "rows": [
   [
    "*preScriptLocation",
    "/opt/scripts/freeze.sh"
   ],
   [
    "postScriptLocation",
    "/opt/scripts/thaw.sh"
   ]
  ]
 },
 "keep": "Linux application consistency = pre/post scripts."
},
{
 "id": "D5-117",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to restore a VM in the paired region from a GRS vault, but the Secondary Region option doesn't appear.</p><p>What should you check?</p>",
 "opts": [
  "That the policy is daily",
  "That Cross Region Restore is enabled on the vault",
  "That the vault is LRS",
  "That the VM is stopped"
 ],
 "ans": 1,
 "expl": "<p><b>Cross Region Restore</b> must be enabled in the vault's properties (which must be GRS). Then replicated recovery points appear under the Secondary Region option, with a slight replication delay.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Backup Configuration",
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
 "keep": "Secondary Region option = enable Cross Region Restore."
},
{
 "id": "D5-118",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to know how many days remain before a VM's soft-deleted backup data is permanently deleted.</p><p>Where should you look?</p>",
 "opts": [
  "In Network Watcher",
  "In Azure Advisor",
  "In the vault's backup item (Soft deleted state)",
  "In the VM's activity log"
 ],
 "ans": 2,
 "expl": "<p>Soft-deleted items stay visible in the vault, with the <b>Soft deleted</b> state and the number of days remaining. You can <b>undelete</b> them to resume protection.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM1"
  ],
  "title": "VM1",
  "rows": [
   [
    "*Status",
    "Soft deleted · 9 days remaining"
   ]
  ],
  "btn": "Undelete"
 },
 "keep": "Days remaining = backup item in soft delete."
},
{
 "id": "D5-119",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM17 was deleted by mistake yesterday. It was protected by Azure Backup, and its backup data still exists.</p><p>What should you do?</p>",
 "opts": [
  "Use Azure Site Recovery",
  "Recreate the VM and wait for the next backup",
  "Nothing is possible, since the VM no longer exists",
  "Restore from the backup item with the Create new virtual machine option"
 ],
 "ans": 3,
 "expl": "<p>Recovery points stay in the vault even if the VM is deleted. You open the backup item and <b>create a new VM</b> (or restore the disks) from the latest point.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM17"
  ],
  "title": "Restore Virtual Machine",
  "rows": [
   [
    "*Configuration",
    "Create new virtual machine"
   ],
   [
    "Point",
    "Latest"
   ]
  ],
  "btn": "Restore"
 },
 "keep": "Deleted but backed-up VM = restore from the vault."
},
{
 "id": "D5-120",
 "dom": 5,
 "type": "single",
 "stem": "<p>VM18's backup worked, but you want to run file recovery from a machine running another operating system.</p><p>Which condition must be met?</p>",
 "opts": [
  "The machine that runs the script must have an OS compatible with the backed-up disk's file systems",
  "You must stop VM18",
  "The vault must be LRS",
  "The machine must be in the same resource group"
 ],
 "ans": 0,
 "expl": "<p>The file recovery script mounts the volumes: the machine running it must be able to read their <b>file systems</b> (for example a recent Windows Server for NTFS, a compatible Linux distribution for ext4 or LVM). It must also be able to reach the recovery service over the network.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM18"
  ],
  "title": "File Recovery",
  "rows": [
   [
    "*Script machine",
    "OS compatible with the file systems"
   ]
  ]
 },
 "keep": "Recovery script = a machine that reads those file systems."
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
 "id": "D5-122",
 "dom": 5,
 "type": "single",
 "stem": "<p>VMs in an isolated network (no internet access) must send their data to Log Analytics through private addresses.</p><p>What should you configure?</p>",
 "opts": [
  "A NAT gateway",
  "An Azure Monitor Private Link Scope (AMPLS) with a private endpoint",
  "A Microsoft.Storage service endpoint",
  "A public load balancer"
 ],
 "ans": 1,
 "expl": "<p>An <b>Azure Monitor Private Link Scope</b> groups Azure Monitor resources (workspaces, data collection endpoints, Application Insights) and exposes them through a <b>private endpoint</b> in your virtual network. The agent then sends its data without going over the internet.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Private Link Scopes"
  ],
  "title": "Create an AMPLS",
  "rows": [
   [
    "*Resources",
    "LAW1, DCE1"
   ],
   [
    "Private endpoint",
    "vnet-isolated"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Monitoring with no internet = AMPLS + private endpoint."
},
{
 "id": "D5-123",
 "dom": 5,
 "type": "single",
 "stem": "<p>A data collection rule collects many useless Windows events, and ingestion is expensive.</p><p>How do you reduce the volume as early as possible?</p>",
 "opts": [
  "Disable the agent only on weekends",
  "Increase retention",
  "Filter events in the DCR (XPath query or KQL transformation)",
  "Add a second workspace"
 ],
 "ans": 2,
 "expl": "<p>A <b>data collection rule</b> can filter events with <b>XPath queries</b>, and apply a <b>KQL transformation</b> to remove rows or columns before ingestion. You only pay for what's ingested.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules"
  ],
  "title": "Data source › Windows event logs",
  "rows": [
   [
    "*XPath",
    "Application!*[System[(Level=1 or Level=2)]]"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Reducing ingestion = XPath filter / transformation in the DCR."
},
{
 "id": "D5-124",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to display a Windows VM's available memory in Metrics Explorer, alongside the VM's other metrics.</p><p>What should you do?</p>",
 "opts": [
  "Nothing: available memory is a platform metric of all VMs, always available with the same detail",
  "Create an activity log alert",
  "Enable boot diagnostics",
  "Collect guest counters with the Azure Monitor agent and a DCR that sends to Azure Monitor Metrics"
 ],
 "ans": 3,
 "expl": "<p>Guest counters (memory, disk space per volume…) are collected by the <b>Azure Monitor agent</b>. A DCR can send them to <b>Azure Monitor Metrics</b> (guest metrics namespace) or to Log Analytics. The platform now provides an “Available Memory Bytes” metric for many VMs, but guest detail goes through the agent.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules"
  ],
  "title": "Destination",
  "rows": [
   [
    "*Azure Monitor Metrics",
    "Guest counters"
   ]
  ]
 },
 "keep": "Guest counters in Metrics Explorer = AMA + DCR to Azure Monitor Metrics."
},
{
 "id": "D5-125",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want a score that globally measures how well Azure best practices (reliability, security, performance, cost, operational excellence) are applied across your subscriptions.</p><p>What should you look at?</p>",
 "opts": [
  "The Azure Advisor score",
  "Resource Health",
  "The activity log",
  "The Azure Policy compliance score"
 ],
 "ans": 0,
 "expl": "<p>The <b>Advisor score</b> shows, as a percentage, how well your resources follow Advisor recommendations, by category and overall, with its trend over time.</p>",
 "portal": {
  "path": [
   "Advisor"
  ],
  "title": "Advisor | Score",
  "menu": [
   "*Advisor score"
  ],
  "rows": [
   [
    "*Overall score",
    "78%"
   ]
  ]
 },
 "keep": "Best practices score = Advisor score."
},
{
 "id": "D5-126",
 "dom": 5,
 "type": "single",
 "stem": "<p>An Advisor alert must notify the team as soon as a new high-impact cost recommendation appears.</p><p>What should you configure?</p>",
 "opts": [
  "A backup policy",
  "An Advisor alert (based on the activity log) with an action group",
  "A metric alert",
  "A data collection rule"
 ],
 "ans": 1,
 "expl": "<p><b>Advisor alerts</b> fire when a new recommendation is created, filtered by category and impact. They rely on the activity log's <b>Recommendation</b> category and use action groups.</p>",
 "portal": {
  "path": [
   "Advisor",
   "Alerts"
  ],
  "title": "New Advisor alert",
  "rows": [
   [
    "*Category",
    "Cost · high impact"
   ],
   [
    "Action group",
    "AG-Finance"
   ]
  ],
  "btn": "Create"
 },
 "keep": "New recommendation = Advisor alert."
},
{
 "id": "D5-127",
 "dom": 5,
 "type": "single",
 "stem": "<p>A developer must be able to read all data in a Log Analytics workspace and run queries, without changing its configuration.</p><p>Which role should you assign on the workspace?</p>",
 "opts": [
  "Owner",
  "Monitoring Contributor",
  "Log Analytics Reader",
  "Log Analytics Contributor"
 ],
 "ans": 2,
 "expl": "<p><b>Log Analytics Reader</b> lets you view and query all monitoring data and settings. <b>Log Analytics Contributor</b> also lets you change the configuration (agents, solutions, settings).</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Add role assignment",
  "rows": [
   [
    "*Role",
    "Log Analytics Reader"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Read and query = Log Analytics Reader."
},
{
 "id": "D5-128",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to query two workspaces, WS-Paris and WS-Lyon, in a single KQL query.</p><p>Which function should you use?</p>",
 "opts": [
  "join kind=workspace",
  "ago(\"WS-Lyon\")",
  "bin(\"WS-Lyon\")",
  "workspace(\"WS-Lyon\").Event, combined with union"
 ],
 "ans": 3,
 "expl": "<p>The <b>workspace()</b> function references a table in another workspace: <code>union Event, workspace(\"WS-Lyon\").Event</code>. You need read access to both workspaces.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS-Paris"
  ],
  "title": "Logs",
  "rows": [
   [
    "*union Event, workspace(\"WS-Lyon\").Event",
    ""
   ]
  ],
  "btn": "Run"
 },
 "keep": "Several workspaces = workspace() + union."
},
{
 "id": "D5-129",
 "dom": 5,
 "type": "single",
 "stem": "<p>A KQL query must show, for each computer, the number of events and the last event received.</p><p>Which line matches?</p>",
 "opts": [
  "| summarize Count = count(), Last = max(TimeGenerated) by Computer",
  "| project Count = count() by Computer",
  "| where count() by Computer",
  "| extend Count = count() by Computer"
 ],
 "ans": 0,
 "expl": "<p><b>summarize</b> accepts several aggregations at once, separated by commas, grouped by one or more columns. <code>project</code>, <code>extend</code>, and <code>where</code> don't group.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Logs",
  "rows": [
   [
    "*summarize",
    "count(), max(TimeGenerated) by Computer"
   ]
  ]
 },
 "keep": "Several aggregations = summarize a, b by …"
},
{
 "id": "D5-130",
 "dom": 5,
 "type": "single",
 "stem": "<p>You write a KQL query that must return only events whose message contains the word “timeout”, case-insensitive.</p><p>Which operator should you use?</p>",
 "opts": [
  "where RenderedDescription == \"timeout\"",
  "where RenderedDescription contains \"timeout\"",
  "summarize contains \"timeout\"",
  "project RenderedDescription has_cs \"timeout\""
 ],
 "ans": 1,
 "expl": "<p><b>contains</b> searches for a substring, case-insensitive. <b>==</b> requires an exact match. <b>has</b> searches for a whole term (faster); the <b>_cs</b> variants are case-sensitive.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Logs",
  "rows": [
   [
    "*contains",
    "Substring, case-insensitive"
   ],
   [
    "has",
    "Whole term"
   ],
   [
    "==",
    "Exact match"
   ]
  ]
 },
 "keep": "contains = substring; has = word; _cs = case-sensitive."
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
 },
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
 "keep": "Log alert: measure + aggregation + period + frequency + threshold."
},
{
 "id": "D5-136",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>You need to enable Cross Region Restore on vault Vault5.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "Redundancy and Cross Region Restore = vault Properties."
},
{
 "id": "D5-137",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>You need to query the logs of workspace WS6 with KQL.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "KQL queries = Logs."
},
{
 "id": "D5-138",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to reduce the cost of a Log Analytics workspace that ingests a lot of useless performance data.</p><p>Which <b>two</b> actions are suitable?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Reduce the sampling frequency and number of counters in the data collection rule",
  "Increase interactive retention",
  "Use a KQL transformation in the DCR to drop unneeded data",
  "Create a second workspace as a copy"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<ul><li><b>Fewer counters and less frequent sampling: yes</b>.</li><li><b>Transformation: yes</b>, filtered data isn't ingested.</li><li>Increasing retention costs more. A second workspace would double costs.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules"
  ],
  "title": "Performance counters",
  "rows": [
   [
    "*Sample rate",
    "300 s"
   ],
   [
    "Transformation",
    "source | where …"
   ]
  ]
 },
 "keep": "Collect less = fewer counters + transformation."
},
{
 "id": "D5-139",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to limit the restore time of a critical VM after a human error, while keeping points over 1 year.</p><p>Which <b>two</b> actions are suitable?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Disable soft delete",
  "Switch the vault to LRS",
  "Use an Enhanced policy with several backups a day and snapshots kept for several days",
  "Configure a 12-month monthly retention"
 ],
 "ans": [
  2,
  3
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
 "tpl": "az monitor diagnostic-settings {0} create --name activity-to-ws7 --location francecentral {1} &lt;WS7 id&gt; --logs '[{\"category\": \"Administrative\", \"enabled\": true}]'",
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
 "keep": "Activity log = diagnostic-settings subscription create."
},
{
 "id": "D5-141",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to display the number of VMs that sent a Heartbeat signal in the last hour, by operating system.</p><p>How should you complete the KQL query?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "Heartbeat<br>| where TimeGenerated &gt; ago(1h)<br>| summarize VMCount = {0}(Computer) by {1}",
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
 "keep": "Counting distinct items = dcount."
},
{
 "id": "D5-142",
 "dom": 5,
 "type": "order",
 "stem": "<p>You need to collect the Application event logs of 40 Windows VMs in a workspace that doesn't exist yet.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 ],
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
 "keep": "Destination → DCR → association."
},
{
 "id": "D5-143",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate destination for the metrics or logs of each scenario.</p><p>To answer, drag the appropriate solution to each scenario. Each solution may be used once, more than once, or not at all.</p>",
 "srcLabel": "Solutions",
 "srcs": [
  "Metric alert",
  "Log search alert",
  "Workbook",
  "Diagnostic setting to storage"
 ],
 "tgtHead": [
  "Scenario",
  "Solution"
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
},
{
 "id": "D5-144",
 "dom": 5,
 "type": "single",
 "stem": "<p>There are too many alerts: the same problems generate dozens of notifications per hour.</p><p>Which best practice should you apply first?</p>",
 "opts": [
  "Disable Azure Monitor",
  "Delete all action groups",
  "Tune thresholds and use stateful alerts (or dynamic thresholds)",
  "Increase log retention"
 ],
 "ans": 2,
 "expl": "<p><b>Stateful</b> alerts don't send another notification until the alert is resolved. <b>Dynamic</b> or better-calibrated thresholds reduce false positives. A processing rule can also suppress notifications during maintenance.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Alert rule",
  "rows": [
   [
    "*Automatically resolve alerts",
    "Yes (stateful)"
   ],
   [
    "Threshold",
    "Dynamic"
   ]
  ]
 },
 "keep": "Too many notifications = stateful + tuned thresholds."
},
{
 "id": "D5-145",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to know why the scale set VMSS12 added instances yesterday at 2 PM.</p><p>Where do you find this information?</p>",
 "opts": [
  "In the Recovery Services vault",
  "In boot diagnostics",
  "In Azure Advisor",
  "In the autoscale run history and in the activity log (Autoscale category)"
 ],
 "ans": 3,
 "expl": "<p>Autoscale operations are recorded in the <b>activity log</b> (Autoscale category) and in the scaling configuration's <b>run history</b>, with the triggered rule and the metric value. You can also enable autoscale resource logs.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS12"
  ],
  "title": "Scaling › Run history",
  "rows": [
   [
    "*Yesterday 14:00",
    "+2 instances · CPU > 75%"
   ]
  ]
 },
 "keep": "Why a scale-out happened = run history + activity log."
},
{
 "id": "D5-146",
 "dom": 5,
 "type": "single",
 "stem": "<p>An organization requires monitoring data to stay in the European Union.</p><p>Which choice determines where logs collected in Log Analytics are stored?</p>",
 "opts": [
  "The Log Analytics workspace's region",
  "The action group's region",
  "The monitored VMs' region",
  "The Microsoft Entra tenant's region"
 ],
 "ans": 0,
 "expl": "<p>A workspace's data is stored in the <b>workspace's region</b>. For sovereignty, you create the workspace in an EU region, even if monitored resources are elsewhere.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "Create"
  ],
  "title": "Create workspace",
  "rows": [
   [
    "*Region",
    "France Central (EU)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Log sovereignty = workspace region."
},
{
 "id": "D5-147",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to restore a blob container to its state from 3 days ago, using the operational blob backup configured in Backup vault Vault6.</p><p>What happens to blobs created after that date?</p>",
 "opts": [
  "They're kept in addition to the old ones",
  "They're deleted: the container returns exactly to the chosen state",
  "They're moved to another container",
  "They're archived"
 ],
 "ans": 1,
 "expl": "<p>Operational restore uses <b>point-in-time restore</b>: the content of the restored containers returns to the exact state of the chosen date. Blobs created afterward are deleted, and modified blobs get their old content back.</p>",
 "portal": {
  "path": [
   "Backup vaults",
   "Vault6"
  ],
  "title": "Restore",
  "rows": [
   [
    "*Point in time",
    "3 days ago"
   ],
   [
    "Newer blobs",
    "Deleted"
   ]
  ]
 },
 "keep": "Point-in-time restore = exact state (new blobs disappear)."
},
{
 "id": "D5-148",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to be alerted if more than 20% of requests to a storage account fail with an authorization error.</p><p>Which approach is the simplest?</p>",
 "opts": [
  "A Resource Health alert",
  "A Service Health alert",
  "A metric alert on Transactions, filtered (ResponseType dimension) on authorization errors",
  "A budget alert"
 ],
 "ans": 2,
 "expl": "<p>A storage account's <b>Transactions</b> metric has <b>dimensions</b> (ResponseType, ApiName, Authentication…). A metric alert can filter by dimension, for example AuthorizationError responses.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1"
  ],
  "title": "Condition",
  "rows": [
   [
    "Signal",
    "Transactions"
   ],
   [
    "*Dimension",
    "ResponseType = AuthorizationError"
   ]
  ]
 },
 "keep": "Filtering a metric = dimensions."
},
{
 "id": "D5-149",
 "dom": 5,
 "type": "single",
 "stem": "<p>The security team wants to receive logs from all the organization's subscriptions in a Microsoft SIEM, with threat detection.</p><p>Which Microsoft solution relies on Log Analytics for this?</p>",
 "opts": [
  "Azure Site Recovery",
  "Azure Advisor",
  "Azure Backup",
  "Microsoft Sentinel"
 ],
 "ans": 3,
 "expl": "<p><b>Microsoft Sentinel</b> is Microsoft's SIEM/SOAR. It's enabled on a Log Analytics workspace and uses connectors to ingest logs, then analytics rules to detect threats. It isn't core AZ-104 content, but you should know where it fits.</p>",
 "portal": {
  "path": [
   "Microsoft Sentinel"
  ],
  "title": "Add Sentinel",
  "rows": [
   [
    "*Workspace",
    "LAW-SOC"
   ]
  ],
  "btn": "Add"
 },
 "keep": "SIEM on Log Analytics = Microsoft Sentinel."
},
{
 "id": "D5-150",
 "dom": 5,
 "type": "single",
 "stem": "<p>A VM protected by Site Recovery was resized in the source region. You want the failover VM to also use the new size.</p><p>Where should you check the target size?</p>",
 "opts": [
  "In the replicated item's compute settings",
  "In the App Service plan",
  "In the backup policy",
  "In the activity log"
 ],
 "ans": 0,
 "expl": "<p>A replicated item's <b>compute and network settings</b> define the size, resource group, network, and availability of the target VM. You should check them after changes on the source.</p>",
 "portal": {
  "path": [
   "Replicated items",
   "VM1"
  ],
  "title": "Compute and Network",
  "rows": [
   [
    "*Target size",
    "Standard_D4s_v5"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Failover VM size = compute and network."
},
{
 "id": "D5-151",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to include in a Site Recovery recovery plan a step that automatically updates a DNS record after the web VMs fail over.</p><p>What should you add to the plan?</p>",
 "opts": [
  "A snapshot",
  "A script (Azure Automation runbook) after the web VM group",
  "A metric alert",
  "A data collection rule"
 ],
 "ans": 1,
 "expl": "<p>Recovery plans accept <b>scripts</b> (Azure Automation runbooks) before or after each group, and <b>manual actions</b>. Updating DNS or a load balancer is a typical case.</p>",
 "portal": {
  "path": [
   "Recovery Plans",
   "RP-Web"
  ],
  "title": "Customize",
  "rows": [
   [
    "Group 2",
    "Web VMs"
   ],
   [
    "*After",
    "Update-DNS runbook"
   ]
  ]
 },
 "keep": "Automating a recovery step = runbook in the plan."
},
{
 "id": "D5-152",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to test every quarter the disaster recovery of an application protected by Site Recovery, with a report for the audit.</p><p>Which operation should you schedule?</p>",
 "opts": [
  "An Azure Backup restore",
  "Disabling replication",
  "A test failover of the recovery plan in an isolated network, then cleaning up the test",
  "A real unplanned failover"
 ],
 "ans": 2,
 "expl": "<p>A <b>test failover</b> of a <b>recovery plan</b> validates the whole sequence (order, scripts, network) with no impact on production. After checking, you run <b>Cleanup test failover</b>, recording the notes, which serve as evidence for the audit.</p>",
 "portal": {
  "path": [
   "Recovery Plans",
   "RP-App"
  ],
  "title": "Test failover",
  "rows": [
   [
    "*Network",
    "Isolated"
   ],
   [
    "Then",
    "Cleanup test + notes"
   ]
  ]
 },
 "keep": "Auditable recovery drill = recovery plan test failover."
},
{
 "id": "D5-153",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to monitor on-premises and other-cloud servers with Azure Monitor, Azure Policy, and Update Manager, like Azure resources.</p><p>What should you install on these servers?</p>",
 "opts": [
  "The MARS agent",
  "The Mobility service",
  "Azure File Sync",
  "The Azure Connected Machine agent (Azure Arc)"
 ],
 "ans": 3,
 "expl": "<p>With <b>Azure Arc</b>, the <b>Connected Machine</b> agent projects the server as an Azure resource: you can then deploy the Azure Monitor agent to it, apply Azure Policy (machine configuration), and manage updates with Update Manager.</p>",
 "portal": {
  "path": [
   "Azure Arc",
   "Machines"
  ],
  "title": "Add a server",
  "rows": [
   [
    "*Agent",
    "Azure Connected Machine"
   ]
  ],
  "btn": "Generate script"
 },
 "keep": "Non-Azure servers managed like Azure = Azure Arc."
},
{
 "id": "D5-154",
 "dom": 5,
 "type": "single",
 "stem": "<p>An administrator accidentally deletes the metric alert CPU-Prod.</p><p>How do you find out who deleted it?</p>",
 "opts": [
  "Check the activity log (Delete Metric Alert operation)",
  "Check Network Watcher",
  "Check the Recovery Services vault",
  "Check Resource Health"
 ],
 "ans": 0,
 "expl": "<p>Alert rules are Azure resources: their deletion is recorded in the <b>activity log</b> (<code>Microsoft.Insights/metricAlerts/delete</code>) with the caller.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Activity log"
  ],
  "title": "Activity log",
  "rows": [
   [
    "*Operation",
    "Delete Metric Alert"
   ],
   [
    "Event initiated by",
    "admin2@contoso.com"
   ]
  ]
 },
 "keep": "Who deleted an alert = activity log."
},
{
 "id": "D5-155",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want alerts to be created automatically according to Microsoft best practices for all your resources (VMs, storage, network) in a landing zone, with Azure Policy.</p><p>Which Microsoft initiative is available?</p>",
 "opts": [
  "Microsoft Sentinel",
  "Azure Monitor Baseline Alerts (AMBA)",
  "The daily cap",
  "Azure Advisor score"
 ],
 "ans": 1,
 "expl": "<p><b>Azure Monitor Baseline Alerts</b> provides Azure Policy definitions and initiatives that automatically deploy recommended alerts (metrics, activity logs, Service Health) and action groups, at organization scale.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assign initiative"
  ],
  "title": "Azure Monitor Baseline Alerts",
  "rows": [
   [
    "*Scope",
    "Management group"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Recommended alerts at scale = AMBA."
},
{
 "id": "D5-156",
 "dom": 5,
 "type": "single",
 "stem": "<p>A VM restore with the Replace existing option fails.</p><p>Which condition should you check?</p>",
 "opts": [
  "That the VM is in another region",
  "That the VM was never backed up",
  "That the VM still exists (it wasn't deleted) and the staging location (storage account) is available",
  "That the vault is LRS"
 ],
 "ans": 2,
 "expl": "<p><b>Replace existing</b> replaces the disks of a VM that <b>still exists</b>. It takes a snapshot of the current disks (kept in the vault) then replaces them. If the VM was deleted, you must create a new VM or restore the disks.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM1"
  ],
  "title": "Restore › Replace existing",
  "rows": [
   [
    "*VM",
    "Must exist"
   ],
   [
    "Staging location",
    "stagingst1"
   ]
  ]
 },
 "keep": "Replace existing = the VM must exist."
},
{
 "id": "D5-157",
 "dom": 5,
 "type": "single",
 "stem": "<p>Azure Files backups of share3 use snapshots. An administrator deletes the storage account that contains share3.</p><p>What happens to the backup?</p>",
 "opts": [
  "Backup continues normally",
  "Points are still kept in the vault",
  "Points are copied to the paired region",
  "With snapshot-only backup, points are lost with the account; a vaulted backup would protect against this risk"
 ],
 "ans": 3,
 "expl": "<p><b>Snapshot</b>-based Azure Files backup stores points in the storage account itself. If the account is deleted, the snapshots are too. <b>Vaulted backup</b> copies data into the vault and protects against this risk. A <b>lock</b> on the account is also recommended (Azure Backup adds one automatically).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stfiles"
  ],
  "title": "Locks",
  "rows": [
   [
    "*AzureBackupProtectionLock",
    "Delete"
   ]
  ]
 },
 "keep": "Share snapshots = in the account; vaulted = outside the account."
},
{
 "id": "D5-158",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to temporarily disable a metric alert rule during a migration, without deleting it.</p><p>What should you do?</p>",
 "opts": [
  "Disable the alert rule (Disabled state), then re-enable it afterward",
  "Delete the monitored resource",
  "Delete the action group",
  "Raise the threshold to 1,000"
 ],
 "ans": 0,
 "expl": "<p>An alert rule can be <b>disabled</b> then <b>re-enabled</b>. For several rules or a scheduled window, an <b>alert processing rule</b> is more convenient.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alert rules"
  ],
  "title": "CPU-Prod",
  "rows": [
   [
    "*Status",
    "Disabled"
   ]
  ],
  "btn": "Enable"
 },
 "keep": "Pausing an alert = disable the rule."
},
{
 "id": "D5-159",
 "dom": 5,
 "type": "single",
 "stem": "<p>A VM's metrics are needed over 6 months for a capacity study, but the metrics database only keeps 93 days.</p><p>What should you do?</p>",
 "opts": [
  "Nothing: metrics are kept 2 years",
  "Send the metrics to Log Analytics (diagnostic setting or DCR) with suitable retention",
  "Enable boot diagnostics",
  "Create a metric alert"
 ],
 "ans": 1,
 "expl": "<p>To keep metrics longer than <b>93 days</b>, you send them to <b>Log Analytics</b> (AzureMetrics or InsightsMetrics/Perf table), where retention is configurable, or to a storage account.</p>",
 "portal": {
  "path": [
   "Resource",
   "Diagnostic settings"
  ],
  "title": "AllMetrics",
  "rows": [
   [
    "*Destination",
    "Log Analytics · 1 year"
   ]
  ]
 },
 "keep": "Metrics > 93 days = Log Analytics or storage."
},
{
 "id": "D5-160",
 "dom": 5,
 "type": "single",
 "stem": "<p>Your continuity plan requires: 24-hour RPO and 30-day retention for 50 non-critical VMs, and an RPO of a few minutes with recovery in another region for 5 critical VMs.</p><p>Which combination is the most suitable?</p>",
 "opts": [
  "Availability sets for all VMs",
  "Azure Site Recovery for all 55 VMs",
  "Daily Azure Backup for the 50 VMs; Azure Site Recovery (plus Azure Backup) for the 5 critical VMs",
  "Manual snapshots for all VMs"
 ],
 "ans": 2,
 "expl": "<p>For non-critical VMs, daily <b>Azure Backup</b> is enough (24 h RPO, 30-day retention), at lower cost. For critical VMs, <b>Site Recovery</b> offers an RPO of a few minutes and recovery in another region; Azure Backup remains useful for restoring old data.</p><p>Site Recovery for everything would cost more for no need. Availability sets don't protect against data loss.</p>",
 "portal": {
  "path": [
   "Business Continuity Center"
  ],
  "title": "Protection",
  "rows": [
   [
    "50 VMs",
    "Daily Backup"
   ],
   [
    "*5 critical VMs",
    "Site Recovery + Backup"
   ]
  ]
 },
 "keep": "Protection based on each VM's RPO/RTO."
}
);
