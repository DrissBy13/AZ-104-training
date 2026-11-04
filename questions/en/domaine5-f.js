/* Domain 5: monitoring and backup (batch F: D5-301 to D5-321, multi-answer questions merged from former multiple-choice items) */
AZ.questions.push(
{
 "id": "D5-301",
 "dom": 5,
 "type": "hot",
 "stem": "<p>The VMs in France Central are protected nightly by Azure Backup, with instant restore. Several restore requests arrive on the same day. What should you do or choose for each one?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Restore VM1 from yesterday's backup as fast as possible — recovery point source:",
   "o": [
    "From the VM's boot diagnostics",
    "From the GRS vault tier, in the paired region",
    "From the vault's Archive tier, rehydrated",
    "From local snapshots (instant restore)"
   ],
   "a": 3
  },
  {
   "l": "Recover a deleted file from VM1's data disk without interrupting VM1:",
   "o": [
    "Replace existing disks",
    "Use file recovery",
    "Create a new virtual machine from the backup",
    "Perform a test failover"
   ],
   "a": 1
  },
  {
   "l": "VM17 was deleted yesterday; its backup data still exists:",
   "o": [
    "Use Azure Site Recovery to recreate it",
    "Recreate the VM and wait for the next backup",
    "Nothing: the VM is gone, and so are its points",
    "Restore with the Create new virtual machine option"
   ],
   "a": 3
  },
  {
   "l": "Run file recovery for VM18 from a machine running another OS — requirement:",
   "o": [
    "An OS compatible with the disk's file systems",
    "You must stop VM18 during the recovery",
    "The vault must be LRS to mount the disks",
    "The machine must be in the same resource group as VM18"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Restore VM1 from yesterday's backup as fast as possible — recovery point source:</b></p><p>Azure Backup keeps disk <b>snapshots</b> for a few days (1 to 5 days with the standard policy, more with the enhanced policy): <b>instant restore</b> from these snapshots is much faster than from the vault.</p><p><b>2. Recover a deleted file from VM1's data disk without interrupting VM1:</b></p><p><b>File recovery</b> downloads a script that mounts a recovery point's disks as drives on a machine. You copy the file, then unmount. VM1 keeps running.</p><ul><li><b>Replace disks</b> stops VM1 and brings it entirely back to the backup's state.</li><li><b>Creating a VM</b> takes much longer for a single file.</li><li><b>Test failover</b> concerns Site Recovery.</li></ul><p><b>3. VM17 was deleted yesterday; its backup data still exists:</b></p><p>Recovery points stay in the vault even if the VM is deleted. You open the backup item and <b>create a new VM</b> (or restore the disks) from the latest point.</p><p><b>4. Run file recovery for VM18 from a machine running another OS — requirement:</b></p><p>The file recovery script mounts the volumes: the machine running it must be able to read their <b>file systems</b> (for example a recent Windows Server for NTFS, a compatible Linux distribution for ext4 or LVM). It must also be able to reach the recovery service over the network.</p>",
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
 "keep": "Fastest restore = snapshots (instant restore). One file without stopping the VM = file recovery. Deleted but backed-up VM = restore from the vault. Recovery script = a machine that reads those file systems."
},
{
 "id": "D5-302",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You protect the Azure Files shares and blobs in several storage accounts. What should you choose for each requirement or situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "share1: daily backup, 30-day retention, single-file restore:",
   "o": [
    "Object replication to another account",
    "The MARS agent on each client computer",
    "Azure Backup for Azure Files (same region)",
    "Azure Site Recovery for the storage account"
   ],
   "a": 2
  },
  {
   "l": "Blobs restorable to any point in the last 14 days, with no copy elsewhere:",
   "o": [
    "The MARS agent on a VM that mounts the container",
    "Azure Site Recovery for the account",
    "Vaulted backup only",
    "Operational backup for blobs"
   ],
   "a": 3
  },
  {
   "l": "Container restored to its state 3 days ago — blobs created since then:",
   "o": [
    "They're kept in addition to the old blobs",
    "They're deleted: back to the chosen state",
    "They're moved to another container",
    "They're archived in the Archive tier"
   ],
   "a": 1
  },
  {
   "l": "The account holding share3 (backed up with snapshots only) is deleted — the backup:",
   "o": [
    "Backup continues normally on the share",
    "The points are still kept in the vault",
    "The points are copied to the paired region",
    "Snapshots only: the points are lost"
   ],
   "a": 3
  },
  {
   "l": "share2's Payroll folder is restored to share-restore in another account — restore type:",
   "o": [
    "A reprotection",
    "A share failover",
    "An original location restore",
    "An alternate location restore"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. share1: daily backup, 30-day retention, single-file restore:</b></p><p>Azure Backup's <b>Azure Files</b> backup (Recovery Services vault) schedules <b>share snapshots</b> (or a vaulted backup), manages their retention, and lets you restore the whole share or individual files, to the original or another location.</p><p><b>2. Blobs restorable to any point in the last 14 days, with no copy elsewhere:</b></p><p><b>Operational backup</b> for blobs is local: it relies on account features (point-in-time restore, versioning, soft delete, change feed) and allows continuous restore. <b>Vaulted backup</b> copies data into the vault, which also protects against losing the account.</p><p><b>3. Container restored to its state 3 days ago — blobs created since then:</b></p><p>Operational restore uses <b>point-in-time restore</b>: the content of the restored containers returns to the exact state of the chosen date. Blobs created afterward are deleted, and modified blobs get their old content back.</p><p><b>4. The account holding share3 (backed up with snapshots only) is deleted — the backup:</b></p><p><b>Snapshot</b>-based Azure Files backup stores points in the storage account itself. If the account is deleted, the snapshots are too. <b>Vaulted backup</b> copies data into the vault and protects against this risk. A <b>lock</b> on the account is also recommended (Azure Backup adds one automatically).</p><p><b>5. share2's Payroll folder is restored to share-restore in another account — restore type:</b></p><p>Azure Files backup lets you restore a whole share or files to the <b>original location</b> (overwriting or keeping conflicting files) or to an <b>alternate location</b> (another share, possibly in another account in the same region).</p>",
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
 "keep": "Backing up Azure Files = Azure Backup (Recovery Services vault). Local continuous blob restore = operational backup. Point-in-time restore = exact state (new blobs disappear). Share snapshots = in the account; vaulted = outside the account. Restoring elsewhere = alternate location restore."
},
{
 "id": "D5-303",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Several incidents occurred yesterday in subscription Sub1. For each question from management, what should you check or do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Who deleted the resource group, with the least effort:",
   "o": [
    "Metrics explorer",
    "The activity log",
    "VM insights",
    "Virtual network flow logs"
   ],
   "a": 1
  },
  {
   "l": "VM3 unavailable for 10 minutes: platform or VM issue?",
   "o": [
    "Azure Advisor, Reliability tab",
    "VM3's disk metrics",
    "Last night's cost analysis",
    "VM3's Resource Health"
   ],
   "a": 3
  },
  {
   "l": "Which IP address was blocked to a VM, with no flow log enabled:",
   "o": [
    "Check the NSG's activity log",
    "Check yesterday's NSG metrics (denied packets)",
    "Nothing for yesterday: enable flow logs",
    "Check Azure Advisor, Security tab"
   ],
   "a": 2
  },
  {
   "l": "Why VMSS12 added instances at 2 PM:",
   "o": [
    "In the scale set's Recovery Services vault",
    "In the instances' boot diagnostics",
    "In Azure Advisor, Performance tab",
    "In the autoscale run history"
   ],
   "a": 3
  },
  {
   "l": "Which network properties changed in the last few days:",
   "o": [
    "The boot diagnostics of each resource",
    "Azure Backup and its restore points",
    "Resource Change Analysis",
    "A budget alert on the resource group"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Who deleted the resource group, with the least effort:</b></p><p>The <b>activity log</b> automatically records, for <b>90 days</b>, control plane operations on resources: who (Caller), what (Delete Resource Group), when, and with what result. Just filter on the operation and the period.</p><p>Metrics measure numeric values (CPU, throughput). VM insights monitors VM performance. Flow logs record network traffic.</p><p><b>2. VM3 unavailable for 10 minutes: platform or VM issue?</b></p><p><b>Resource Health</b> shows the state of a specific resource (Available, Unavailable, Degraded, Unknown) and its history, with the cause when it's platform-related (for example a host reboot).</p><p>Service Health is global to services and regions; Resource Health concerns <b>your</b> resource.</p><p><b>3. Which IP address was blocked to a VM, with no flow log enabled:</b></p><p>Network flows are only recorded if <b>flow logs</b> are enabled. Without them, there's no record of yesterday's denied connections. The activity log only records management operations, not traffic.</p><p><b>4. Why VMSS12 added instances at 2 PM:</b></p><p>Autoscale operations are recorded in the <b>activity log</b> (Autoscale category) and in the scaling configuration's <b>run history</b>, with the triggered rule and the metric value. You can also enable autoscale resource logs.</p><p><b>5. Which network properties changed in the last few days:</b></p><p><b>Change Analysis</b> (or change history in the activity log and Resource Graph) shows resource configuration changes (before and after), whether they come from the portal, a template, or a script. It's often the fastest way to find the cause of a regression.</p>",
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
 "keep": "Who did what on a resource = activity log (90 days). My resource and the platform = Resource Health. No flow log = no traffic history. Why a scale-out happened = run history + activity log. What changed = Change Analysis."
},
{
 "id": "D5-304",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You are preparing disaster recovery for several France Central applications with Azure Site Recovery. What should you use or configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Restart in West Europe within an hour, less than 5 minutes of data loss — service:",
   "o": [
    "Azure Site Recovery",
    "Manual snapshots",
    "Azure Backup with a daily backup",
    "An availability set"
   ],
   "a": 0
  },
  {
   "l": "App-consistent points every 2 hours, kept for 24 hours:",
   "o": [
    "In the replication policy",
    "In the application's recovery plan",
    "In the backup policy",
    "In the diagnostic setting"
   ],
   "a": 0
  },
  {
   "l": "Failed-over VMs must start in the right virtual network:",
   "o": [
    "In the network mapping (replication settings)",
    "In the Recovery Services vault's diagnostic setting",
    "In the VMs' backup policy",
    "In Azure Advisor, Reliability tab"
   ],
   "a": 0
  },
  {
   "l": "The failover VM must use the source VM's new size:",
   "o": [
    "In the replicated item's compute settings",
    "In the App Service plan of the failover target region",
    "In the source VM's backup policy",
    "In the source VM's activity log"
   ],
   "a": 0
  },
  {
   "l": "Fail over from zone 1 to zone 2 in the same region:",
   "o": [
    "ACR geo-replication",
    "Azure Backup with ZRS",
    "Zone-to-zone Site Recovery",
    "Virtual network peering"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Restart in West Europe within an hour, less than 5 minutes of data loss — service:</b></p><p><b>Azure Site Recovery</b> continuously replicates VM disks to the target region. The <b>RPO</b> (maximum data loss) is on the order of seconds to minutes, and the <b>RTO</b> (recovery time) a few minutes thanks to failover.</p><p>A daily backup would have a 24-hour RPO and a longer restore.</p><p><b>2. App-consistent points every 2 hours, kept for 24 hours:</b></p><p>Site Recovery's <b>replication policy</b> defines <b>recovery point retention</b> and <b>app-consistent snapshot frequency</b>. Crash-consistent points are created automatically every few minutes.</p><p><b>3. Failed-over VMs must start in the right virtual network:</b></p><p>The <b>target network</b> (and the subnet, IP address) is configured in the replicated item's <b>compute and network settings</b>, and <b>network mapping</b> associates a source network with a target network. Test failover uses a separate network, chosen at test time.</p><p><b>4. The failover VM must use the source VM's new size:</b></p><p>A replicated item's <b>compute and network settings</b> define the size, resource group, network, and availability of the target VM. You should check them after changes on the source.</p><p><b>5. Fail over from zone 1 to zone 2 in the same region:</b></p><p>Site Recovery supports <b>zone-to-zone</b> recovery within a region: zonal VMs are replicated to another zone, with failover in case of a zone outage.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-App1"
  ],
  "title": "VM-App1 | Disaster recovery",
  "menu": [
   "*Disaster recovery"
  ],
  "rows": [
   [
    "*Target region",
    "West Europe"
   ],
   [
    "RPO",
    "Seconds to minutes"
   ]
  ],
  "btn": "Review + Start replication"
 },
 "keep": "Resume in another region with short RPO/RTO = Site Recovery. Retention and app frequency = replication policy. Failover network = compute and network / network mapping. Failover VM size = compute and network. Zone outage = zone-to-zone Site Recovery."
},
{
 "id": "D5-305",
 "dom": 5,
 "type": "hot",
 "stem": "<p>The three-tier application App1 is replicated by Site Recovery from France Central to West Europe. What should you do in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Validate the recovery plan with no impact on production or replication:",
   "o": [
    "A planned failover during off-hours",
    "A reprotection back to the source region",
    "A test failover (isolated network)",
    "An unplanned failover with failback"
   ],
   "a": 2
  },
  {
   "l": "France Central is down and the source VMs are unavailable:",
   "o": [
    "A planned failover, source VMs shut down",
    "A failover, choosing the recovery point",
    "A test failover to the target network",
    "A reprotection to West Europe"
   ],
   "a": 1
  },
  {
   "l": "Start database, then app, then web tiers, with a script between steps:",
   "o": [
    "Three vaults, one per application tier",
    "A proximity placement group per tier",
    "A replication policy per VM, ordered by tier",
    "A recovery plan with groups and scripts"
   ],
   "a": 3
  },
  {
   "l": "Update a DNS record after the web VMs fail over:",
   "o": [
    "A snapshot of the web VMs",
    "A runbook after the web group",
    "A metric alert on DNS",
    "A data collection rule"
   ],
   "a": 1
  },
  {
   "l": "24-hour RPO for 50 non-critical VMs; minutes RPO and another region for 5 critical VMs:",
   "o": [
    "Availability sets for all VMs, with no backup at all",
    "Site Recovery for all 55 VMs, with no backup",
    "Backup for the 50 VMs; Site Recovery for the 5",
    "Daily manual snapshots for all VMs"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Validate the recovery plan with no impact on production or replication:</b></p><p>A <b>test failover</b> creates test VMs in the target region, in a chosen virtual network (preferably <b>isolated</b>), without stopping the source VMs or interrupting replication. You then clean up the test.</p><p><b>2. France Central is down and the source VMs are unavailable:</b></p><p>In a disaster, you run an unplanned <b>failover</b>, choosing the recovery point: latest (minimal RPO), latest processed (minimal RTO), or latest app-consistent. A <b>planned</b> failover cleanly shuts down the source VMs with no data loss, when the source is still available.</p><p><b>3. Start database, then app, then web tiers, with a script between steps:</b></p><p>A <b>recovery plan</b> groups VMs into <b>groups</b> that start in order, and lets you add <b>scripts</b> (Azure Automation runbooks) and <b>manual actions</b> between groups.</p><p><b>4. Update a DNS record after the web VMs fail over:</b></p><p>Recovery plans accept <b>scripts</b> (Azure Automation runbooks) before or after each group, and <b>manual actions</b>. Updating DNS or a load balancer is a typical case.</p><p><b>5. 24-hour RPO for 50 non-critical VMs; minutes RPO and another region for 5 critical VMs:</b></p><p>For non-critical VMs, daily <b>Azure Backup</b> is enough (24 h RPO, 30-day retention), at lower cost. For critical VMs, <b>Site Recovery</b> offers an RPO of a few minutes and recovery in another region; Azure Backup remains useful for restoring old data.</p><p>Site Recovery for everything would cost more for no need. Availability sets don't protect against data loss.</p>",
 "portal": {
  "path": [
   "Replicated items",
   "VM9"
  ],
  "title": "Test failover",
  "rows": [
   [
    "Recovery point",
    "Latest processed"
   ],
   [
    "*Virtual network",
    "vnet-test-isolated"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Test with no impact = test failover in an isolated network. Source lost = unplanned failover; source available = planned. Startup order + scripts = recovery plan. Automating a recovery step = runbook in the plan. Protection based on each VM's RPO/RTO."
},
{
 "id": "D5-306",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You write KQL queries in the Log Analytics workspace WS-Paris. Which element should you use in each query?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Count HTTP requests per 5-minute bucket:",
   "o": [
    "bin(TimeGenerated, 5m)",
    "ago(TimeGenerated, 5m)",
    "range(TimeGenerated, 5m)",
    "now(TimeGenerated) - 5m"
   ],
   "a": 0
  },
  {
   "l": "Also query workspace WS-Lyon in the same query:",
   "o": [
    "join kind=workspace (\"WS-Lyon\")",
    "ago(\"WS-Lyon\") in a where",
    "bin(\"WS-Lyon\") in a summarize",
    "union with workspace(\"WS-Lyon\")"
   ],
   "a": 3
  },
  {
   "l": "Event count and latest event per computer:",
   "o": [
    "| summarize Count = count(), Last = max(TimeGenerated) by Computer",
    "| project Count = count(), Last = max(TimeGenerated), Computer",
    "| where Count = count(), Last = max(TimeGenerated) by Computer",
    "| extend Count = count(), Last = max(TimeGenerated) by Computer"
   ],
   "a": 0
  },
  {
   "l": "Display the result as a time chart:",
   "o": [
    "extend graph",
    "project chart",
    "summarize timechart",
    "render timechart"
   ],
   "a": 3
  },
  {
   "l": "Keep only messages that contain \"timeout\", case-insensitive:",
   "o": [
    "where RenderedDescription == \"timeout\"",
    "where RenderedDescription contains \"timeout\"",
    "summarize contains \"timeout\"",
    "project RenderedDescription has_cs \"timeout\""
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Count HTTP requests per 5-minute bucket:</b></p><p><code>bin()</code> rounds a value down to the chosen interval: <code>summarize count() by bin(TimeGenerated, 5m)</code> gives a count per 5-minute slot. <code>ago()</code> is used to filter a relative period.</p><p><b>2. Also query workspace WS-Lyon in the same query:</b></p><p>The <b>workspace()</b> function references a table in another workspace: <code>union Event, workspace(\"WS-Lyon\").Event</code>. You need read access to both workspaces.</p><p><b>3. Event count and latest event per computer:</b></p><p><b>summarize</b> accepts several aggregations at once, separated by commas, grouped by one or more columns. <code>project</code>, <code>extend</code>, and <code>where</code> don't group.</p><p><b>4. Display the result as a time chart:</b></p><p><code>render</code> chooses the visualization: <code>timechart</code>, <code>barchart</code>, <code>piechart</code>… It's often used after a <code>summarize ... by bin(TimeGenerated, 5m)</code> that groups data into time intervals.</p><p><b>5. Keep only messages that contain \"timeout\", case-insensitive:</b></p><p><b>contains</b> searches for a substring, case-insensitive. <b>==</b> requires an exact match. <b>has</b> searches for a whole term (faster); the <b>_cs</b> variants are case-sensitive.</p>",
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
 "keep": "Grouping by interval = bin(). Several workspaces = workspace() + union. Several aggregations = summarize a, b by … Chart = render. contains = substring; has = word; _cs = case-sensitive."
},
{
 "id": "D5-307",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You are designing centralized monitoring for several subscriptions with Log Analytics. What should you choose for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "List last week's delete operations with the caller — table:",
   "o": [
    "AzureActivity",
    "AzureDiagnostics",
    "Heartbeat",
    "Perf"
   ],
   "a": 0
  },
  {
   "l": "Find VMs that stopped sending data 15 minutes ago — table:",
   "o": [
    "AzureActivity",
    "Heartbeat",
    "Usage",
    "SecurityEvent"
   ],
   "a": 1
  },
  {
   "l": "Logs must stay in the European Union — what sets their location:",
   "o": [
    "The workspace's region",
    "The action group's region",
    "The region of the VMs monitored by the agent",
    "The Entra tenant's region"
   ],
   "a": 0
  },
  {
   "l": "A single workspace for VMs in several subscriptions:",
   "o": [
    "A workspace can take several subscriptions and regions",
    "A workspace only receives its own subscription",
    "You must have one workspace per region and subscription",
    "You need one workspace per monitored VM"
   ],
   "a": 0
  },
  {
   "l": "Azure Container Apps console logs — destination:",
   "o": [
    "To the region's Recovery Services vault",
    "To the associated App Service plan",
    "To the environment's Log Analytics workspace",
    "To the container registry that hosts the image"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. List last week's delete operations with the caller — table:</b></p><p>The <b>AzureActivity</b> table contains the activity log sent by the subscription's diagnostic setting: <code>AzureActivity | where OperationNameValue endswith \"DELETE\" | project TimeGenerated, Caller, ResourceGroup, OperationNameValue</code>.</p><p>Perf holds performance counters, Heartbeat agent signals, Event Windows events.</p><p><b>2. Find VMs that stopped sending data 15 minutes ago — table:</b></p><p>Agents send a <b>Heartbeat</b> signal every minute. The query <code>Heartbeat | summarize Last = max(TimeGenerated) by Computer | where Last &lt; ago(15m)</code> lists silent machines. You can make it a log search alert.</p><p><b>3. Logs must stay in the European Union — what sets their location:</b></p><p>A workspace's data is stored in the <b>workspace's region</b>. For sovereignty, you create the workspace in an EU region, even if monitored resources are elsewhere.</p><p><b>4. A single workspace for VMs in several subscriptions:</b></p><p>A Log Analytics workspace can collect data from resources in <b>several subscriptions and regions</b>, even several tenants. Microsoft recommends limiting the number of workspaces, unless sovereignty, billing, or access constraints apply.</p><p><b>5. Azure Container Apps console logs — destination:</b></p><p>A Container Apps environment is associated with a log destination, usually a <b>Log Analytics</b> workspace: console (stdout/stderr) and system logs arrive there in dedicated tables. Metrics (CPU, memory, requests) are available in Azure Monitor.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Logs",
  "rows": [
   [
    "*AzureActivity",
    "where OperationNameValue endswith \"DELETE\""
   ]
  ],
  "btn": "Run"
 },
 "keep": "Management operations in KQL = AzureActivity. Silent machines = Heartbeat. Log sovereignty = workspace region. One workspace can cover several subscriptions. Container Apps logs = the environment's Log Analytics."
},
{
 "id": "D5-308",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Management wants to protect the backups in Recovery Services vault RSV1 against mistakes and attacks. What should you use or check for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Recover, for a period, VM backup data deleted by an admin:",
   "o": [
    "A metric alert on the vault",
    "The vault's soft delete",
    "The VM's boot diagnostics",
    "The vault's LRS redundancy"
   ],
   "a": 1
  },
  {
   "l": "No data deleted or shortened before expiry, even by an admin:",
   "o": [
    "Cross Region Restore",
    "An alert",
    "Immutable vault",
    "ZRS redundancy"
   ],
   "a": 2
  },
  {
   "l": "Critical operations require approval from another team, in another subscription:",
   "o": [
    "A second vault in the other subscription",
    "A ReadOnly lock on the vault",
    "An activity log alert on the vault's operations",
    "Multi-user authorization (Resource Guard)"
   ],
   "a": 3
  },
  {
   "l": "Deleting vault Vault2 fails — likely cause:",
   "o": [
    "The resource group has a ReadOnly lock",
    "Protected or soft-deleted items remain",
    "The vault is GRS and must first go back to LRS",
    "The vault has no associated alert rule"
   ],
   "a": 1
  },
  {
   "l": "Days left before soft-deleted backup data is purged:",
   "o": [
    "In Network Watcher",
    "In Azure Advisor, Cost tab",
    "In the vault's backup item",
    "In the VM's activity log"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Recover, for a period, VM backup data deleted by an admin:</b></p><p>With <b>soft delete</b> (enabled by default), deleted backup data stays recoverable for <b>14 days</b> at no extra cost. <b>Enhanced</b> soft delete allows up to 180 days and can be made always-on (irreversible).</p><p><b>2. No data deleted or shortened before expiry, even by an admin:</b></p><p>An <b>immutable vault</b> prevents operations that could lose recovery points (deletion, retention reduction). Once <b>locked</b>, this setting is irreversible.</p><p><b>3. Critical operations require approval from another team, in another subscription:</b></p><p><b>Multi-user authorization</b> associates the vault with a <b>Resource Guard</b> managed by another team. Protected operations then require authorization on the Resource Guard (often through PIM), in addition to rights on the vault.</p><p><b>4. Deleting vault Vault2 fails — likely cause:</b></p><p>A vault can't be deleted while it contains <b>protected items</b>, <b>backup data</b> (including soft-deleted), registered servers, or Site Recovery replication items. You must stop and delete everything, then wait for soft delete to end or purge it.</p><p><b>5. Days left before soft-deleted backup data is purged:</b></p><p>Soft-deleted items stay visible in the vault, with the <b>Soft deleted</b> state and the number of days remaining. You can <b>undelete</b> them to resume protection.</p>",
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
 "keep": "Deleted backup recoverable = soft delete. Nothing can shorten backups = locked immutable vault. Another team's approval = MUA + Resource Guard. Empty the vault (including soft-deleted) before deleting it. Days remaining = backup item in soft delete."
},
{
 "id": "D5-309",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Several VM backup and restore operations fail or don't offer the expected option. What should you check or configure in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM6 backups fail with an agent-related error:",
   "o": [
    "The Azure VM agent: installed, running, and reaching Azure",
    "That the vault is LRS, not GRS",
    "That the VM is in an availability set",
    "That the VM has a Standard public IP address to reach the vault"
   ],
   "a": 0
  },
  {
   "l": "VM7 (Azure Disk Encryption): backup configuration fails:",
   "o": [
    "That the key vault allows public access",
    "That Backup Management Service can reach keys and secrets",
    "That the Recovery Services vault is in another region than VM7",
    "That VM7 has no encrypted data disk"
   ],
   "a": 1
  },
  {
   "l": "A restore with the Replace existing option fails:",
   "o": [
    "That the VM is in a different region from the vault",
    "That the VM was never backed up before in this vault",
    "That the VM still exists, with the staging location",
    "That the vault is LRS rather than GRS"
   ],
   "a": 2
  },
  {
   "l": "Restore in the paired region even while the primary region is up:",
   "o": [
    "GRS redundancy and Cross Region Restore",
    "Enhanced soft delete on the vault",
    "Locked immutable mode on the vault",
    "LRS redundancy with a manual copy to the other region"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. VM6 backups fail with an agent-related error:</b></p><p>Azure Backup uses an extension that depends on the <b>VM agent</b>. Failures often come from a stopped or outdated agent, or a network block (NSG, proxy, firewall) to Azure services and the address 168.63.129.16.</p><p><b>2. VM7 (Azure Disk Encryption): backup configuration fails:</b></p><p>To back up an ADE-encrypted VM, Azure Backup must be able to read the <b>keys and secrets</b> in the key vault: you must grant access to the <b>Backup Management Service</b> (access policy or role). The portal offers it during enablement.</p><p><b>3. A restore with the Replace existing option fails:</b></p><p><b>Replace existing</b> replaces the disks of a VM that <b>still exists</b>. It takes a snapshot of the current disks (kept in the vault) then replaces them. If the VM was deleted, you must create a new VM or restore the disks.</p><p><b>4. Restore in the paired region even while the primary region is up:</b></p><p>With a <b>GRS</b> vault, backup data is replicated to the paired region. <b>Cross Region Restore</b> lets you restore from that secondary region at any time, not only after an outage declared by Microsoft.</p>",
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
 "keep": "Agent-related backup failure = VM agent + network. ADE VM = Backup Management Service access to the key vault. Replace existing = the VM must exist. Restoring in the paired region = GRS + Cross Region Restore."
},
{
 "id": "D5-310",
 "dom": 5,
 "type": "hot",
 "stem": "<p>The Log Analytics bill has risen sharply. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "SecurityEvent queryable for 1 year, then kept cheaply up to 7 years:",
   "o": [
    "A continuous data export to a storage account",
    "A second workspace for the archive",
    "Interactive retention 365 days, total 7 years",
    "An alert processing rule on the table"
   ],
   "a": 2
  },
  {
   "l": "The workspace ingests about 200 GB per day — pricing:",
   "o": [
    "Increase interactive retention",
    "A commitment tier (200 GB/day)",
    "A second regional workspace",
    "Pay-as-you-go only"
   ],
   "a": 1
  },
  {
   "l": "Large debug table, read only during incidents — plan:",
   "o": [
    "A higher commitment tier",
    "The table's Analytics plan",
    "The Basic (or Auxiliary) plan",
    "A 2-year retention on the table"
   ],
   "a": 2
  },
  {
   "l": "Prevent a misconfiguration from blowing up WS3's bill in one day:",
   "o": [
    "A Delete lock on WS3",
    "A shorter retention, with nothing else",
    "A proximity placement group",
    "A daily cap, with an alert"
   ],
   "a": 3
  },
  {
   "l": "A DCR collects many useless Windows events:",
   "o": [
    "Disable the agent only on weekends",
    "Increase retention to smooth the cost",
    "Filter in the DCR (XPath or transformation)",
    "Add a second, cheaper workspace"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. SecurityEvent queryable for 1 year, then kept cheaply up to 7 years:</b></p><p>Each table in a workspace has an <b>interactive retention</b> (data queryable normally, up to 2 years) and a <b>total retention</b> (up to 12 years). In between, data is in <b>long-term retention</b> (archive), cheaper, accessible through search jobs or a restore.</p><p><b>2. The workspace ingests about 200 GB per day — pricing:</b></p><p><b>Commitment tiers</b> (100, 200, 300 GB/day and more) offer a discount compared to pay-as-you-go, in exchange for a committed daily volume. You can also reduce ingestion (filter in data collection rules, Basic or Auxiliary table plan for rarely queried logs).</p><p><b>3. Large debug table, read only during incidents — plan:</b></p><p>The <b>Basic</b> and <b>Auxiliary</b> table plans cost much less to ingest than the <b>Analytics</b> plan, in exchange for limited query features and a per-query cost. They suit large, rarely queried logs.</p><p><b>4. Prevent a misconfiguration from blowing up WS3's bill in one day:</b></p><p>The <b>daily cap</b> stops collection (for most data types) when the day's volume reaches the limit, until the next day. Caution: data beyond it is lost. You pair it with an alert to be notified.</p><p><b>5. A DCR collects many useless Windows events:</b></p><p>A <b>data collection rule</b> can filter events with <b>XPath queries</b>, and apply a <b>KQL transformation</b> to remove rows or columns before ingestion. You only pay for what's ingested.</p>",
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
 "keep": "Queryable then archive = interactive + total retention. Large steady volume = commitment tier. Large rarely queried logs = Basic/Auxiliary plan. Limiting the ingestion bill = daily cap. Reducing ingestion = XPath filter / transformation in the DCR."
},
{
 "id": "D5-311",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You are configuring alerts for subscription Sub1. You need to choose the alert or threshold type for each requirement.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Alert types",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "Metric alert",
  "Activity log alert",
  "Service Health alert",
  "Dynamic threshold",
  "Resource Health alert",
  "Budget alert"
 ],
 "tgts": [
  {
   "l": "Email when VM2's average CPU exceeds 85% for 15 minutes",
   "a": 0
  },
  {
   "l": "Be notified when someone deletes a VM in Sub1",
   "a": 1
  },
  {
   "l": "Planned maintenance or an Azure incident affecting App Service in France Central",
   "a": 2
  },
  {
   "l": "CPU varies widely by hour: too many false alerts with a fixed threshold",
   "a": 3
  },
  {
   "l": "More than 20% of requests to a storage account fail with an authorization error",
   "a": 0
  }
 ],
 "expl": "<p><b>1. Email when VM2's average CPU exceeds 85% for 15 minutes</b></p><p>A <b>metric alert</b> regularly evaluates a metric (here Percentage CPU, average over 15 minutes) against a threshold, and triggers an <b>action group</b> (email, SMS…). It reacts in near real time.</p><p><b>2. Be notified when someone deletes a VM in Sub1</b></p><p>A deletion is a control plane operation, recorded in the <b>activity log</b>. An <b>activity log alert</b> filtered on the operation <code>Microsoft.Compute/virtualMachines/delete</code> fires on each deletion.</p><p><b>3. Planned maintenance or an Azure incident affecting App Service in France Central</b></p><p><b>Service Health</b> informs you of incidents, planned maintenance, health advisories, and security advisories that affect <b>the services and regions</b> you use. A <b>Service Health alert</b>, filtered on App Service and France Central, sends the notification.</p><p><b>4. CPU varies widely by hour: too many false alerts with a fixed threshold</b></p><p><b>Dynamic thresholds</b> learn the metric's usual behavior (including hourly and weekly cycles) and alert on abnormal deviations, with adjustable sensitivity (high, medium, low).</p><p><b>5. More than 20% of requests to a storage account fail with an authorization error</b></p><p>A storage account's <b>Transactions</b> metric has <b>dimensions</b> (ResponseType, ApiName, Authentication…). A metric alert can filter by dimension, for example AuthorizationError responses.</p>",
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
 "keep": "Threshold on a value = metric alert. Management operation = activity log alert. Azure incidents and maintenance = Service Health. Cyclical load = dynamic threshold. Filtering a metric = dimensions."
},
{
 "id": "D5-312",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You are refining the operations team's alerting strategy. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Log search every 5 minutes, fired as soon as one row is returned:",
   "o": [
    "Dynamic threshold on CPU, every 5 minutes",
    "One-hour granularity, at least one row",
    "Activity log alert every 5 minutes",
    "Number of rows > 0, frequency 5 minutes"
   ],
   "a": 3
  },
  {
   "l": "Public web service: alert if it stops returning HTTP 200 from 2 locations:",
   "o": [
    "A diagnostic setting on the app to Log Analytics",
    "A Resource Health alert on the app",
    "A standard availability test, with an alert",
    "An activity log alert on the app"
   ],
   "a": 2
  },
  {
   "l": "Email when a backup job fails, in every vault:",
   "o": [
    "A budget alert on each vault",
    "Built-in alerts, a processing rule and an action group",
    "A metric alert on the VMs' CPU",
    "Only the classic email notifications of each vault"
   ],
   "a": 1
  },
  {
   "l": "The same issues generate dozens of notifications per hour — first step:",
   "o": [
    "Disable Azure Monitor on the noisiest resources",
    "Delete all existing action groups",
    "Tune thresholds, use stateful or dynamic alerts",
    "Increase the alert logs' retention"
   ],
   "a": 2
  },
  {
   "l": "Common VM alerts (CPU, memory, disk) without writing them one by one:",
   "o": [
    "An alert processing rule",
    "A VM Insights workbook",
    "The recommended alert rules",
    "The VM's activity log"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Log search every 5 minutes, fired as soon as one row is returned:</b></p><p>A <b>log search alert</b> runs a KQL query at a frequency, over a period. The condition is on the <b>number of rows</b> or a computed measure (for example an average), compared to a threshold.</p><p><b>2. Public web service: alert if it stops returning HTTP 200 from 2 locations:</b></p><p>Application Insights <b>availability tests</b> (standard test or URL ping) query the URL from several Azure locations. The alert fires when a minimum number of locations fail.</p><p><b>3. Email when a backup job fails, in every vault:</b></p><p>Azure Backup generates <b>built-in alerts in Azure Monitor</b> (backup failures, restore failures, data deletion…). You route them with an <b>alert processing rule</b> to an <b>action group</b>. It's the recommended approach, which replaces the vault's classic alerts.</p><p><b>4. The same issues generate dozens of notifications per hour — first step:</b></p><p><b>Stateful</b> alerts don't send another notification until the alert is resolved. <b>Dynamic</b> or better-calibrated thresholds reduce false positives. A processing rule can also suppress notifications during maintenance.</p><p><b>5. Common VM alerts (CPU, memory, disk) without writing them one by one:</b></p><p>Azure offers <b>recommended alert rules</b> for VMs (and other resources): you enable them in a few clicks from the resource's Alerts page, with editable default thresholds. Azure Monitor Baseline Alerts (AMBA) does it at scale with Azure Policy.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Log search alert",
  "rows": [
   [
    "*Measure",
    "Table rows > 0"
   ],
   [
    "Frequency",
    "5 minutes"
   ]
  ]
 },
 "keep": "Log alert = query + frequency + threshold. Monitored public URL = availability test. Backup alerts = Azure Monitor + processing rule. Too many notifications = stateful + tuned thresholds. Standard alerts in one click = recommended alert rules."
},
{
 "id": "D5-313",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You manage how RG-Prod alerts notify teams. What should you do for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Three alerts: email on-call, SMS the manager, ticketing webhook, with the least effort:",
   "o": [
    "One action group, associated with the three alerts",
    "Three workspaces, one per recipient",
    "A workbook that groups the three alerts",
    "Notifications configured separately in each alert"
   ],
   "a": 0
  },
  {
   "l": "Automatically restart a service on the VM when the alert fires:",
   "o": [
    "An SMS to the VM owner",
    "An Azure Automation runbook",
    "A push notification to the app",
    "An email notification to on-call"
   ],
   "a": 1
  },
  {
   "l": "Call the team's phone for a critical alert:",
   "o": [
    "In an action group (Voice notification)",
    "In Service Health, with a phone contact",
    "In the data collection rule",
    "In the VM's diagnostic setting"
   ],
   "a": 0
  },
  {
   "l": "No notifications on Saturdays from 10 PM to 2 AM; alerts still visible in the portal:",
   "o": [
    "A ReadOnly lock on RG-Prod on weekends",
    "A processing rule that suppresses notifications",
    "Disable each alert rule on Saturday morning",
    "Delete the action group on Friday and recreate it Monday"
   ],
   "a": 1
  },
  {
   "l": "Pause a metric rule during a migration without deleting it:",
   "o": [
    "Disable the rule, then re-enable it",
    "Delete the monitored resource",
    "Delete the rule's action group",
    "Raise the rule's threshold to 1,000"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Three alerts: email on-call, SMS the manager, ticketing webhook, with the least effort:</b></p><p>An <b>action group</b> groups notifications (email, SMS, push notification, voice call) and actions (webhook, Automation runbook, function, logic app, ITSM, Event Hubs). It can be reused by as many alerts as needed.</p><p><b>2. Automatically restart a service on the VM when the alert fires:</b></p><p>An action group can trigger an <b>Automation runbook</b>, an <b>Azure function</b>, a <b>logic app</b>, or a <b>webhook</b>: that's the basis of automatic remediation.</p><p><b>3. Call the team's phone for a critical alert:</b></p><p><b>Action groups</b> offer <b>email</b>, <b>SMS</b>, <b>push notification</b> (Azure mobile app), and <b>voice call</b> notifications, with rate limits per number.</p><p><b>4. No notifications on Saturdays from 10 PM to 2 AM; alerts still visible in the portal:</b></p><p>An <b>alert processing rule</b> can, over a scope and schedule, <b>suppress notifications</b> (alerts keep being created) or <b>add action groups</b> to alerts.</p><p><b>5. Pause a metric rule during a migration without deleting it:</b></p><p>An alert rule can be <b>disabled</b> then <b>re-enabled</b>. For several rules or a scheduled window, an <b>alert processing rule</b> is more convenient.</p>",
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
 "keep": "Reusable notifications = action group. Automatic remediation = runbook / function / Logic App. Voice call = action group Voice notification. Scheduled silence = alert processing rule. Pausing an alert = disable the rule."
},
{
 "id": "D5-314",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Several platform logs and metrics aren't collected in Log Analytics yet. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Sub1 activity log kept for 2 years and queryable with KQL:",
   "o": [
    "A diagnostic setting to Log Analytics (2-year retention)",
    "Azure Advisor, with recommendation history",
    "An activity log alert on all write operations in Sub1",
    "Nothing: the activity log is kept 2 years by default"
   ],
   "a": 0
  },
  {
   "l": "Key vault resource logs to Log Analytics:",
   "o": [
    "A workbook linked to the key vault",
    "A diagnostic setting on the key vault",
    "A metric alert on the key vault",
    "A data collection rule for the vault's VMs"
   ],
   "a": 1
  },
  {
   "l": "Platform metrics joined with logs in a KQL query:",
   "o": [
    "The workspace's daily cap",
    "A diagnostic setting (AllMetrics)",
    "An alert processing rule",
    "A metric alert with an export to the workspace"
   ],
   "a": 1
  },
  {
   "l": "Tables specific to each resource type, easier to query — mode:",
   "o": [
    "Azure diagnostics mode (AzureDiagnostics)",
    "Archive mode to a storage account",
    "Event Hubs mode with a consumer",
    "Resource-specific mode"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Sub1 activity log kept for 2 years and queryable with KQL:</b></p><p>The activity log is only kept <b>90 days</b>. To go further, you create a subscription-level <b>diagnostic setting</b> that sends it to a <b>Log Analytics</b> workspace (AzureActivity table, queryable in KQL), a storage account (archiving), or Event Hubs.</p><p><b>2. Key vault resource logs to Log Analytics:</b></p><p><b>Resource logs</b> aren't collected by default. You create a <b>diagnostic setting</b> on the resource, choose the categories (for example AuditEvent) and the destinations: Log Analytics, storage account, Event Hubs, or partner solution.</p><p>A resource can have up to 5 diagnostic settings.</p><p><b>3. Platform metrics joined with logs in a KQL query:</b></p><p>A <b>diagnostic setting</b> can send <b>metrics</b> (AllMetrics) in addition to logs. They arrive in the <b>AzureMetrics</b> table in Log Analytics, queryable with KQL.</p><p><b>4. Tables specific to each resource type, easier to query — mode:</b></p><p><b>Resource-specific</b> mode writes to dedicated tables per category, with a clear schema. <b>Azure diagnostics</b> mode mixes many services in a single table, which performs worse and is harder to query. Microsoft recommends resource-specific mode when available.</p>",
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
 "keep": "Activity log > 90 days = diagnostic setting to Log Analytics. Resource logs = diagnostic setting on the resource. Metrics in KQL = AllMetrics diagnostic → AzureMetrics. Clear tables = resource-specific mode."
},
{
 "id": "D5-315",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You are deploying guest data collection for 50 Windows VMs. What should you do for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Performance counters and the System log to WS1 — deploy:",
   "o": [
    "The Log Analytics agent (MMA) with a workspace configuration",
    "A diagnostic setting on each VM, to WS1",
    "The Azure Monitor agent and a DCR associated with the 50 VMs",
    "Boot diagnostics to a storage account"
   ],
   "a": 2
  },
  {
   "l": "Available memory visible in Metrics Explorer:",
   "o": [
    "Nothing: available memory is a platform metric",
    "Create an activity log alert on the VM's memory",
    "Enable the VM's boot diagnostics",
    "Collect guest counters (agent and DCR to Metrics)"
   ],
   "a": 3
  },
  {
   "l": "Metrics needed for 6 months; the metrics store keeps only 93 days:",
   "o": [
    "Nothing: metrics are kept 2 years",
    "Send them to Log Analytics (suitable retention)",
    "Enable the VM's boot diagnostics",
    "Create a metric alert that archives them"
   ],
   "a": 1
  },
  {
   "l": "VMs in an isolated network send data over private addresses:",
   "o": [
    "A NAT gateway with an allowed fixed IP",
    "An Azure Monitor Private Link Scope (AMPLS)",
    "A Microsoft.Storage service endpoint",
    "A public load balancer with an outbound rule"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Performance counters and the System log to WS1 — deploy:</b></p><p>The <b>Azure Monitor agent</b> (AMA) collects guest data according to <b>data collection rules</b> (DCRs): which data (counters, events, Syslog, log files), and to which destination. The same DCR can be associated with many VMs.</p><p>The Log Analytics agent (MMA) was retired in August 2024. A VM's diagnostic setting only collects host metrics, not operating system data.</p><p><b>2. Available memory visible in Metrics Explorer:</b></p><p>Guest counters (memory, disk space per volume…) are collected by the <b>Azure Monitor agent</b>. A DCR can send them to <b>Azure Monitor Metrics</b> (guest metrics namespace) or to Log Analytics. The platform now provides an “Available Memory Bytes” metric for many VMs, but guest detail goes through the agent.</p><p><b>3. Metrics needed for 6 months; the metrics store keeps only 93 days:</b></p><p>To keep metrics longer than <b>93 days</b>, you send them to <b>Log Analytics</b> (AzureMetrics or InsightsMetrics/Perf table), where retention is configurable, or to a storage account.</p><p><b>4. VMs in an isolated network send data over private addresses:</b></p><p>An <b>Azure Monitor Private Link Scope</b> groups Azure Monitor resources (workspaces, data collection endpoints, Application Insights) and exposes them through a <b>private endpoint</b> in your virtual network. The agent then sends its data without going over the internet.</p>",
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
 "keep": "Guest data = AMA + DCR (MMA retired). Guest counters in Metrics Explorer = AMA + DCR to Azure Monitor Metrics. Metrics > 93 days = Log Analytics or storage. Monitoring with no internet = AMPLS + private endpoint."
},
{
 "id": "D5-316",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You are assigning access and automating protection. What should you choose for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Backup vault managed identity for managed disk backup — roles:",
   "o": [
    "Disk Backup Reader and Disk Snapshot Contributor",
    "Virtual Machine Contributor on the VM and Reader on the disk",
    "Reader on the vault and Contributor on the resource group",
    "Subscription Owner, for the lifetime of the backup"
   ],
   "a": 0
  },
  {
   "l": "Read all of a workspace's data and run queries, without configuring it:",
   "o": [
    "Owner",
    "Monitoring Contributor",
    "Log Analytics Reader",
    "Log Analytics Contributor"
   ],
   "a": 2
  },
  {
   "l": "In WS2, each user sees only logs of resources they have rights on:",
   "o": [
    "A shared workspace key",
    "A separate workspace for each user",
    "Require workspace permissions",
    "Resource or workspace permissions"
   ],
   "a": 3
  },
  {
   "l": "Backup enabled on creation for every VM tagged Backup=Yes:",
   "o": [
    "An alert processing rule on the tag",
    "A script run manually every week",
    "An activity log alert on VM creation",
    "A built-in DeployIfNotExists policy"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Backup vault managed identity for managed disk backup — roles:</b></p><p>Disk backup creates <b>incremental snapshots</b> in a chosen resource group. The vault's managed identity needs <b>Disk Backup Reader</b> on each disk and <b>Disk Snapshot Contributor</b> on the snapshot resource group. The portal offers to assign them.</p><p><b>2. Read all of a workspace's data and run queries, without configuring it:</b></p><p><b>Log Analytics Reader</b> lets you view and query all monitoring data and settings. <b>Log Analytics Contributor</b> also lets you change the configuration (agents, solutions, settings).</p><p><b>3. In WS2, each user sees only logs of resources they have rights on:</b></p><p>With the <b>“Use resource or workspace permissions”</b> mode, a user who opens logs from a resource (resource-context) sees data for resources they have read access to, without rights on the whole workspace. You can also define table-level RBAC.</p><p><b>4. Backup enabled on creation for every VM tagged Backup=Yes:</b></p><p>Azure offers built-in <b>DeployIfNotExists</b> policies that configure VM backup (with or without a tag filter) to a given vault and policy. Existing VMs are fixed with a remediation task.</p>",
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
 "keep": "Disk backup = vault identity roles on the disk + snapshot RG. Read and query = Log Analytics Reader. Seeing only your resources = resource-context. Automatic backup on creation = Azure Policy DeployIfNotExists."
},
{
 "id": "D5-317",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Your company keeps on-premises servers and workloads in other clouds. You need to choose the component to deploy or provide for each requirement.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Components",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "MARS agent",
  "Vault credentials",
  "Site Recovery replication appliance",
  "Azure Backup Server (MABS)",
  "Connected Machine agent (Arc)",
  "Azure File Sync"
 ],
 "tgts": [
  {
   "l": "Back up folders from an on-premises file server daily, with no intermediate server",
   "a": 0
  },
  {
   "l": "File requested by the backup agent's registration wizard",
   "a": 1
  },
  {
   "l": "Fail over on-premises VMware servers to Azure",
   "a": 2
  },
  {
   "l": "Back up Hyper-V, SQL Server, and Exchange locally, then copy to Azure",
   "a": 3
  },
  {
   "l": "Manage servers with Azure Monitor, Azure Policy, and Update Manager like Azure resources",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Back up folders from an on-premises file server daily, with no intermediate server</b></p><p>The <b>MARS agent</b> backs up files, folders, and system state of a Windows server (on-premises or VM) directly to a Recovery Services vault, up to 3 times a day.</p><p>For full application workloads (SQL, Hyper-V…), you use <b>Microsoft Azure Backup Server</b> (MABS) or DPM.</p><p><b>2. File requested by the backup agent's registration wizard</b></p><p>You download the <b>vault credentials</b> from the Recovery Services vault. They're only valid for a limited time: download them just before registration. The agent also asks for an encryption <b>passphrase</b>, to keep safe: without it, restore is impossible.</p><p><b>3. Fail over on-premises VMware servers to Azure</b></p><p>For VMware and physical servers, Site Recovery uses an on-premises <b>replication appliance</b> and the <b>Mobility service</b> installed on each protected machine. For Hyper-V, you install the Site Recovery provider and the Recovery Services agent on the hosts.</p><p><b>4. Back up Hyper-V, SQL Server, and Exchange locally, then copy to Azure</b></p><p><b>MABS</b> (or System Center DPM) backs up on-premises application workloads to disk, then sends copies to a Recovery Services vault. The MARS agent alone only backs up files, folders, and system state.</p><p><b>5. Manage servers with Azure Monitor, Azure Policy, and Update Manager like Azure resources</b></p><p>With <b>Azure Arc</b>, the <b>Connected Machine</b> agent projects the server as an Azure resource: you can then deploy the Azure Monitor agent to it, apply Azure Policy (machine configuration), and manage updates with Update Manager.</p>",
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
 "keep": "Files on an on-premises server, no intermediate server = MARS. MARS registration = vault credentials + passphrase. VMware/physical → Azure = replication appliance + Mobility. On-premises application workloads = MABS/DPM. Non-Azure servers managed like Azure = Azure Arc."
},
{
 "id": "D5-318",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>Several teams want monitoring views tailored to their work. You need to choose the solution that meets each requirement.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "VM Insights (Map)",
  "Application Insights",
  "Network Insights",
  "Azure Monitor workbook",
  "Shared Azure dashboard",
  "Microsoft Sentinel",
  "Network Watcher"
 ],
 "tgts": [
  {
   "l": "See which servers talk to which, on which ports, with prebuilt charts",
   "a": 0
  },
  {
   "l": "Response times, exceptions, and dependencies of a web app, tested from several regions",
   "a": 1
  },
  {
   "l": "Topology and health of gateways, load balancers, and connections in one view",
   "a": 2
  },
  {
   "l": "Interactive report: KQL queries, metrics, parameters, and text, shared",
   "a": 3
  },
  {
   "l": "A few charts and a query pinned from the portal, always on display",
   "a": 4
  },
  {
   "l": "Microsoft SIEM receiving logs from every subscription, with threat detection",
   "a": 5
  }
 ],
 "expl": "<p><b>1. See which servers talk to which, on which ports, with prebuilt charts</b></p><p><b>VM Insights</b> provides performance dashboards (CPU, memory, disk, network) and, with the <b>Dependency agent</b>, the <b>Map</b> of processes and connections between machines.</p><p><b>2. Response times, exceptions, and dependencies of a web app, tested from several regions</b></p><p><b>Application Insights</b> (an Azure Monitor feature, based on a Log Analytics workspace) collects application telemetry: requests, response times, exceptions, dependencies. <b>Availability tests</b> query the URL from several locations and alert on failure.</p><p><b>3. Topology and health of gateways, load balancers, and connections in one view</b></p><p><b>Network Insights</b> (Azure Monitor > Networks) shows the health and metrics of all network resources, with topology and access to Network Watcher tools.</p><p><b>4. Interactive report: KQL queries, metrics, parameters, and text, shared</b></p><p><b>Workbooks</b> combine text, log queries, metrics, and parameters in interactive, shareable reports. Azure <b>dashboards</b> pin views, with less interactivity.</p><p><b>5. A few charts and a query pinned from the portal, always on display</b></p><p><b>Azure dashboards</b> let you pin metric charts, query results, and other tiles, then share them (they're Azure resources, with access control). Workbooks are richer for interactive reports.</p><p><b>6. Microsoft SIEM receiving logs from every subscription, with threat detection</b></p><p><b>Microsoft Sentinel</b> is Microsoft's SIEM/SOAR. It's enabled on a Log Analytics workspace and uses connectors to ingest logs, then analytics rules to detect threats. It isn't core AZ-104 content, but you should know where it fits.</p>",
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
 "keep": "Dependencies between VMs = VM Insights, Map. Application telemetry + URL test = Application Insights. Network health view = Network Insights. Shared interactive report = workbook. Shared pinned charts = Azure dashboard. SIEM on Log Analytics = Microsoft Sentinel."
},
{
 "id": "D5-319",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You govern monitoring and backup across the organization. What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "An overall score for applying Azure best practices:",
   "o": [
    "The Azure Advisor score",
    "Resource Health",
    "The activity log",
    "The Azure Policy compliance score"
   ],
   "a": 0
  },
  {
   "l": "Alerts created automatically per best practices, with Azure Policy:",
   "o": [
    "Microsoft Sentinel",
    "Azure Monitor Baseline Alerts",
    "The daily cap of each workspace",
    "The Azure Advisor score per subscription"
   ],
   "a": 1
  },
  {
   "l": "Be notified when a high-impact cost recommendation appears:",
   "o": [
    "A backup policy with a report",
    "An Advisor alert with an action group",
    "A metric alert on cost",
    "An Advisor data collection rule"
   ],
   "a": 1
  },
  {
   "l": "Backup status of 15 vaults across subscriptions, in one place:",
   "o": [
    "Each subscription's activity log",
    "Azure Advisor, Reliability tab only",
    "Azure Business Continuity Center",
    "Each vault separately, one by one"
   ],
   "a": 2
  },
  {
   "l": "6-month reports: backup storage, jobs, protected items:",
   "o": [
    "A metric alert on each vault, with history kept",
    "A lifecycle rule on storage",
    "The vaults' change feed, exported monthly",
    "Backup reports (diagnostics to Log Analytics)"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. An overall score for applying Azure best practices:</b></p><p>The <b>Advisor score</b> shows, as a percentage, how well your resources follow Advisor recommendations, by category and overall, with its trend over time.</p><p><b>2. Alerts created automatically per best practices, with Azure Policy:</b></p><p><b>Azure Monitor Baseline Alerts</b> provides Azure Policy definitions and initiatives that automatically deploy recommended alerts (metrics, activity logs, Service Health) and action groups, at organization scale.</p><p><b>3. Be notified when a high-impact cost recommendation appears:</b></p><p><b>Advisor alerts</b> fire when a new recommendation is created, filtered by category and impact. They rely on the activity log's <b>Recommendation</b> category and use action groups.</p><p><b>4. Backup status of 15 vaults across subscriptions, in one place:</b></p><p><b>Business Continuity Center</b>, which replaces Backup center, offers a unified view of protection (Backup and Site Recovery) across several vaults, subscriptions, and regions: protected items, jobs, alerts, policies.</p><p><b>5. 6-month reports: backup storage, jobs, protected items:</b></p><p><b>Backup reports</b> (workbook-based) rely on data sent by the vaults' <b>diagnostic settings</b> to <b>Log Analytics</b>. They cover consumption, jobs, policies, and optimization.</p>",
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
 "keep": "Best practices score = Advisor score. Recommended alerts at scale = AMBA. New recommendation = Advisor alert. Multi-vault view = Business Continuity Center. Backup reports = vault diagnostics to Log Analytics."
},
{
 "id": "D5-320",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You protect application workloads hosted in VMs. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Windows VM running SQL Server, app-consistent backup — mechanism:",
   "o": [
    "A mandatory pre-post script in the VM",
    "The VM's temporary disk",
    "VSS (Volume Shadow Copy)",
    "Boot diagnostics"
   ],
   "a": 2
  },
  {
   "l": "VM16: daily full SQL backup and log backups every 15 minutes:",
   "o": [
    "The MARS agent installed in the SQL VM",
    "“SQL Server in Azure VM” backup",
    "Whole-VM backup, every 15 minutes",
    "Azure Site Recovery with continuous replication"
   ],
   "a": 1
  },
  {
   "l": "Linux VM running MySQL, app-consistent backup:",
   "o": [
    "Pre and post scripts that freeze the database",
    "A metric alert on the MySQL process",
    "The VSS service, installed in the Linux VM",
    "The serial console during backup"
   ],
   "a": 0
  },
  {
   "l": "Backup every 4 hours, points kept for 7 days — policy:",
   "o": [
    "An Enhanced policy, hourly",
    "A standard daily policy, run twice",
    "A lifecycle policy on the vault",
    "An hourly alert processing rule"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Windows VM running SQL Server, app-consistent backup — mechanism:</b></p><p>On Windows, Azure Backup coordinates with <b>VSS</b> to obtain an <b>application-consistent</b> backup (applications flush their writes). On Linux, pre and post scripts are used to obtain the same consistency; otherwise the backup is file-system consistent.</p><p>For SQL Server, the dedicated “SQL Server in Azure VM” backup also allows log backups.</p><p><b>2. VM16: daily full SQL backup and log backups every 15 minutes:</b></p><p><b>SQL Server in Azure VM</b> backup uses the SQL workload extension: it discovers databases, and allows full, differential, and <b>log</b> backups (up to every 15 minutes), with point-in-time restore.</p><p>VM backup alone doesn't capture transaction logs every 15 minutes.</p><p><b>3. Linux VM running MySQL, app-consistent backup:</b></p><p>Linux has no VSS. Azure Backup provides a <b>pre/post script framework</b>: the pre script freezes the application (flush and lock), the snapshot is taken, then the post script thaws the application. Without scripts, the backup is <b>file-system</b> consistent.</p><p><b>4. Backup every 4 hours, points kept for 7 days — policy:</b></p><p>The <b>Enhanced policy</b> allows several backups a day (every 4, 6, 8, or 12 hours), longer snapshot retention, and supports Trusted Launch VMs. The <b>Standard</b> policy does only one backup a day.</p>",
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
 "keep": "Application consistency on Windows = VSS. SQL with logs = SQL Server in Azure VM backup. Linux application consistency = pre/post scripts. Several backups a day = Enhanced policy."
},
{
 "id": "D5-321",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You manage the backup lifecycle of several VMs. What should you do or choose in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM5 decommissioned: stop backup and keep points per their retention:",
   "o": [
    "Stop backup and retain backup data",
    "Stop backup and delete backup data",
    "Delete the vault",
    "Suspend the policy for all VMs"
   ],
   "a": 0
  },
  {
   "l": "On-demand backup of VM8 before an update — point expiry:",
   "o": [
    "None: it's kept indefinitely",
    "Always 30 days, whatever policy is applied",
    "A date chosen when the backup is run",
    "Always the daily policy's retention"
   ],
   "a": 2
  },
  {
   "l": "VM1 (France Central): Vault1 (North Europe) isn't listed:",
   "o": [
    "Switch Vault1 to locally redundant storage (LRS)",
    "Install the Azure Monitor agent on VM1",
    "Enable cross-region restore on Vault1",
    "Create a vault in France Central"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. VM5 decommissioned: stop backup and keep points per their retention:</b></p><p><b>Stop backup and retain data</b>: no new backups, but existing points remain restorable (per the policy, or indefinitely depending on the option chosen). Storage keeps being billed.</p><p><b>2. On-demand backup of VM8 before an update — point expiry:</b></p><p>An <b>on-demand backup</b> (Backup now) lets you choose a <b>retention date</b> specific to this recovery point, independently of the policy.</p><p><b>3. VM1 (France Central): Vault1 (North Europe) isn't listed:</b></p><p>For <b>Azure Backup</b>, the Recovery Services vault must be in the <b>same region</b> as the VM to protect: Vault1 (North Europe) is therefore not offered for VM1 (France Central). You must create a vault in France Central.</p><p>The vault's redundancy (LRS, GRS) and cross-region restore don't change this rule. For <b>Site Recovery</b>, it's the reverse: the vault is in the <b>target</b> region.</p>",
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
 "keep": "No more backups but keep points = stop and retain. On-demand backup = retention date of your choice. Backup: vault in the VM's region; Site Recovery: vault in the target region."
}
);
