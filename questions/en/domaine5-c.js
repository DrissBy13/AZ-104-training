/* Domain 5: monitoring and backup (batch C : D5-061 to D5-110) */
AZ.questions.push(
{
 "id": "D5-061",
 "dom": 5,
 "type": "single",
 "stem": "<p>An application runs on three VMs in France Central. In a regional disaster, it must restart in West Europe in under an hour, with less than 5 minutes of data lost.</p><p>Which service should you use?</p>",
 "opts": [
  "Azure Site Recovery",
  "Manual snapshots",
  "Azure Backup with a daily backup",
  "An availability set"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Site Recovery</b> continuously replicates VM disks to the target region. The <b>RPO</b> (maximum data loss) is on the order of seconds to minutes, and the <b>RTO</b> (recovery time) a few minutes thanks to failover.</p><p>A daily backup would have a 24-hour RPO and a longer restore.</p>",
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
 "keep": "Resume in another region with short RPO/RTO = Site Recovery."
},
{
 "id": "D5-062",
 "dom": 5,
 "type": "single",
 "stem": "<p>You configure Azure Site Recovery for VM9 from France Central to West Europe.</p><p>Where is the Recovery Services vault?</p>",
 "opts": [
  "Necessarily in the source region",
  "In the target region (West Europe), or at least not in the source region",
  "In any region, including the source",
  "In VM9's resource group"
 ],
 "ans": 1,
 "expl": "<p>For Site Recovery between Azure regions, the vault must be in a region <b>different from the source region</b>, generally the <b>target region</b>: if it were in the disaster region, it would be unavailable at failover time.</p><p>It's the reverse of Azure Backup, where the vault is in the same region as the VMs.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Create"
  ],
  "title": "Create a vault for Site Recovery",
  "rows": [
   [
    "*Region",
    "West Europe (target)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "ASR vault = target region (never the source)."
},
{
 "id": "D5-063",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You compare Recovery Services vaults for Azure Backup and Azure Site Recovery (Azure VMs).</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Vault to back up VMs in France Central:",
   "o": [
    "Anywhere",
    "In West Europe",
    "In France Central"
   ],
   "a": 2
  },
  {
   "l": "Vault to replicate VMs from France Central to West Europe with Site Recovery:",
   "o": [
    "In West Europe",
    "Anywhere",
    "In France Central"
   ],
   "a": 0
  },
  {
   "l": "Cache storage account used by Site Recovery:",
   "o": [
    "In the vault",
    "In the target region",
    "In the source region"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Backup</b>: vault in the <b>same region</b> as the VMs.</li><li><b>Site Recovery</b>: vault in the <b>target region</b> (different from the source).</li><li>Site Recovery uses a <b>cache storage account</b> in the <b>source region</b> to collect changes before sending them to the target.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults"
  ],
  "title": "Locations",
  "rows": [
   [
    "*Backup",
    "VMs' region"
   ],
   [
    "Site Recovery",
    "Target region"
   ],
   [
    "ASR cache",
    "Source region"
   ]
  ]
 },
 "keep": "Backup = same region; ASR = target; cache = source."
},
{
 "id": "D5-064",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to check that the recovery plan works, with no impact on production or on ongoing replication.</p><p>Which Site Recovery operation should you run?</p>",
 "opts": [
  "A planned failover",
  "A reprotection",
  "A test failover to an isolated virtual network",
  "An unplanned failover"
 ],
 "ans": 2,
 "expl": "<p>A <b>test failover</b> creates test VMs in the target region, in a chosen virtual network (preferably <b>isolated</b>), without stopping the source VMs or interrupting replication. You then clean up the test.</p>",
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
 "keep": "Test with no impact = test failover in an isolated network."
},
{
 "id": "D5-065",
 "dom": 5,
 "type": "order",
 "stem": "<p>The source region is available again after a Site Recovery failover to the target region. You need to return to the source region.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Commit the failover to the target region",
  "Reprotect the VMs (replication from target to source)",
  "Fail over to the source region (failback)",
  "Commit then reprotect again to the target region",
  "Delete the vault",
  "Create a test failover in the source region"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>After the failover, you <b>commit</b> it. You <b>reprotect</b> to replicate in the other direction (target → source). When ready, you <b>fail over to the source</b> (failback), then <b>commit and reprotect</b> again to return to the original configuration.</p>",
 "portal": {
  "path": [
   "Replicated items",
   "VM9"
  ],
  "title": "VM9 | Overview",
  "rows": [
   [
    "1",
    "Commit"
   ],
   [
    "*2",
    "Re-protect"
   ],
   [
    "3",
    "Fail over to source"
   ],
   [
    "4",
    "Commit + re-protect"
   ]
  ]
 },
 "keep": "Commit → reprotect → failback → commit + reprotect."
},
{
 "id": "D5-066",
 "dom": 5,
 "type": "single",
 "stem": "<p>During a failover, a three-tier application must start in order: database, then application server, then web servers, with a script between steps.</p><p>What should you create in Site Recovery?</p>",
 "opts": [
  "Three vaults",
  "A proximity placement group",
  "A replication policy per VM",
  "A recovery plan with groups and scripts or manual actions"
 ],
 "ans": 3,
 "expl": "<p>A <b>recovery plan</b> groups VMs into <b>groups</b> that start in order, and lets you add <b>scripts</b> (Azure Automation runbooks) and <b>manual actions</b> between groups.</p>",
 "portal": {
  "path": [
   "Recovery Plans",
   "RP-App"
  ],
  "title": "Customize",
  "rows": [
   [
    "Group 1",
    "SQL"
   ],
   [
    "*Script",
    "Runbook"
   ],
   [
    "Group 2",
    "App"
   ],
   [
    "Group 3",
    "Web"
   ]
  ]
 },
 "keep": "Startup order + scripts = recovery plan."
},
{
 "id": "D5-067",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want Site Recovery app-consistent recovery points to be created every 2 hours, and points to be kept for 24 hours.</p><p>Where do you set these parameters?</p>",
 "opts": [
  "In the replication policy",
  "In the recovery plan",
  "In the backup policy",
  "In the diagnostic setting"
 ],
 "ans": 0,
 "expl": "<p>Site Recovery's <b>replication policy</b> defines <b>recovery point retention</b> and <b>app-consistent snapshot frequency</b>. Crash-consistent points are created automatically every few minutes.</p>",
 "portal": {
  "path": [
   "Site Recovery infrastructure",
   "Replication policies"
  ],
  "title": "Create replication policy",
  "rows": [
   [
    "*Recovery point retention",
    "24 hours"
   ],
   [
    "App-consistent frequency",
    "2 hours"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Retention and app frequency = replication policy."
},
{
 "id": "D5-068",
 "dom": 5,
 "type": "single",
 "stem": "<p>A major regional outage hits France Central. The source VMs are unavailable. You need to start the VMs in West Europe.</p><p>Which type of failover should you run?</p>",
 "opts": [
  "A planned failover with source VMs shut down",
  "An (unplanned) failover, choosing the recovery point (latest or latest app-consistent)",
  "A test failover",
  "A reprotection"
 ],
 "ans": 1,
 "expl": "<p>In a disaster, you run an unplanned <b>failover</b>, choosing the recovery point: latest (minimal RPO), latest processed (minimal RTO), or latest app-consistent. A <b>planned</b> failover cleanly shuts down the source VMs with no data loss, when the source is still available.</p>",
 "portal": {
  "path": [
   "Replicated items",
   "VM9"
  ],
  "title": "Failover",
  "rows": [
   [
    "*Recovery point",
    "Latest / latest app-consistent"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Source lost = unplanned failover; source available = planned."
},
{
 "id": "D5-069",
 "dom": 5,
 "type": "single",
 "stem": "<p>A critical application is in zone 1 of France Central. You want to replicate it to zone 2 of the same region, for failover in case of a zone outage.</p><p>What should you use?</p>",
 "opts": [
  "ACR geo-replication",
  "Azure Backup with LRS",
  "Zone-to-zone Azure Site Recovery",
  "Virtual network peering"
 ],
 "ans": 2,
 "expl": "<p>Site Recovery supports <b>zone-to-zone</b> recovery within a region: zonal VMs are replicated to another zone, with failover in case of a zone outage.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Z1"
  ],
  "title": "Disaster recovery",
  "rows": [
   [
    "*Disaster recovery between availability zones",
    "Yes · zone 2"
   ]
  ],
  "btn": "Review + Start replication"
 },
 "keep": "Zone outage = zone-to-zone Site Recovery."
},
{
 "id": "D5-070",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to protect on-premises VMware servers with Azure Site Recovery, with failover to Azure.</p><p>Which component should you deploy on-premises?</p>",
 "opts": [
  "A NAT gateway",
  "The MARS agent only",
  "Azure File Sync",
  "An Azure Site Recovery replication appliance (with the Mobility service on the machines)"
 ],
 "ans": 3,
 "expl": "<p>For VMware and physical servers, Site Recovery uses an on-premises <b>replication appliance</b> and the <b>Mobility service</b> installed on each protected machine. For Hyper-V, you install the Site Recovery provider and the Recovery Services agent on the hosts.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault-DR"
  ],
  "title": "Prepare infrastructure",
  "rows": [
   [
    "Source",
    "VMware"
   ],
   [
    "*Replication appliance",
    "On-premises"
   ],
   [
    "Machines",
    "Mobility service"
   ]
  ]
 },
 "keep": "VMware/physical → Azure = replication appliance + Mobility."
},
{
 "id": "D5-071",
 "dom": 5,
 "type": "single",
 "stem": "<p>After a Site Recovery failover, the VMs start in West Europe in the wrong virtual network.</p><p>Where do you define the target network used during failover?</p>",
 "opts": [
  "In the replication settings (target network and network mapping) of each item or the vault",
  "In the diagnostic setting",
  "In the backup policy",
  "In Azure Advisor"
 ],
 "ans": 0,
 "expl": "<p>The <b>target network</b> (and the subnet, IP address) is configured in the replicated item's <b>compute and network settings</b>, and <b>network mapping</b> associates a source network with a target network. Test failover uses a separate network, chosen at test time.</p>",
 "portal": {
  "path": [
   "Replicated items",
   "VM9"
  ],
  "title": "Compute and Network",
  "menu": [
   "*Compute and Network"
  ],
  "rows": [
   [
    "*Target network",
    "vnet-weu-prod"
   ],
   [
    "Test network",
    "vnet-weu-test"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Failover network = compute and network / network mapping."
},
{
 "id": "D5-072",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You compare Azure Backup and Azure Site Recovery.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Azure Backup protects against accidental data deletion or corruption, with old points.",
   "a": 0
  },
  {
   "l": "Azure Site Recovery keeps recovery points for several years.",
   "a": 1
  },
  {
   "l": "You can use both services for the same VM.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Backup: Yes.</b> It keeps points over days, months, and years.</li><li><b>Site Recovery and years: No.</b> It keeps recent points (15 days at most): its goal is <b>continuity</b> (fail over fast), not archiving.</li><li><b>Both: Yes.</b> It's even recommended: Backup to restore data, Site Recovery to resume operations.</li></ul>",
 "portal": {
  "path": [
   "Business Continuity Center"
  ],
  "title": "Compare",
  "rows": [
   [
    "*Backup",
    "Points over years"
   ],
   [
    "Site Recovery",
    "Recent points · failover"
   ]
  ]
 },
 "keep": "Backup = restore data; ASR = resume operations. Both together."
},
{
 "id": "D5-073",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to match each concept to its definition.</p><p>To answer, drag the appropriate concept to each definition. Each concept may be used once, more than once, or not at all.</p>",
 "srcLabel": "Concepts",
 "srcs": [
  "RPO",
  "RTO",
  "Failover",
  "Failback"
 ],
 "tgtHead": [
  "Definition",
  "Concept"
 ],
 "tgts": [
  {
   "l": "Maximum amount of data you accept to lose, expressed in time",
   "a": 0
  },
  {
   "l": "Maximum acceptable time to restore service",
   "a": 1
  },
  {
   "l": "Run the workload in the backup site",
   "a": 2
  },
  {
   "l": "Return to the original site after recovery",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>RPO</b> (Recovery Point Objective): for example 15 minutes of lost data at most.</li><li><b>RTO</b> (Recovery Time Objective): for example 1 hour to restart.</li><li><b>Failover</b>: switching to the secondary site.</li><li><b>Failback</b>: returning to the primary site.</li></ul>",
 "portal": {
  "path": [
   "Business continuity"
  ],
  "title": "Concepts",
  "rows": [
   [
    "*RPO",
    "Max data lost"
   ],
   [
    "RTO",
    "Max recovery time"
   ],
   [
    "Failback",
    "Back to the original site"
   ]
  ]
 },
 "keep": "RPO = data; RTO = time."
},
{
 "id": "D5-074",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to be alerted by email if a VM backup job fails, across all your vaults.</p><p>What does Microsoft recommend?</p>",
 "opts": [
  "A budget alert",
  "Azure Monitor built-in alerts for Azure Backup, with an alert processing rule and an action group",
  "A metric alert on CPU",
  "Only each vault's classic email notifications"
 ],
 "ans": 1,
 "expl": "<p>Azure Backup generates <b>built-in alerts in Azure Monitor</b> (backup failures, restore failures, data deletion…). You route them with an <b>alert processing rule</b> to an <b>action group</b>. It's the recommended approach, which replaces the vault's classic alerts.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Azure Backup alerts",
  "rows": [
   [
    "*Source",
    "Azure Monitor built-in alerts"
   ],
   [
    "Routing",
    "Processing rule → action group"
   ]
  ]
 },
 "keep": "Backup alerts = Azure Monitor + processing rule."
},
{
 "id": "D5-075",
 "dom": 5,
 "type": "single",
 "stem": "<p>A virtual network has no flow log, and you want to know which IP address was blocked to a VM yesterday.</p><p>What can you do?</p>",
 "opts": [
  "Check the activity log",
  "Check the NSG's metrics",
  "Nothing for yesterday: you must enable flow logs for next time",
  "Check Azure Advisor"
 ],
 "ans": 2,
 "expl": "<p>Network flows are only recorded if <b>flow logs</b> are enabled. Without them, there's no record of yesterday's denied connections. The activity log only records management operations, not traffic.</p>",
 "portal": {
  "path": [
   "Network Watcher"
  ],
  "title": "Flow logs",
  "rows": [
   [
    "*VNet1",
    "No flow log"
   ]
  ],
  "btn": "+ Create"
 },
 "keep": "No flow log = no traffic history."
},
{
 "id": "D5-076",
 "dom": 5,
 "type": "single",
 "stem": "<p>Diagnostic logs from several services arrive in tables such as AzureDiagnostics or dedicated tables (for example AppServiceHTTPLogs).</p><p>Which diagnostic setting mode creates tables specific to each resource type, easier to query?</p>",
 "opts": [
  "Azure diagnostics mode (AzureDiagnostics)",
  "Archive mode",
  "Event Hubs mode",
  "Resource-specific mode"
 ],
 "ans": 3,
 "expl": "<p><b>Resource-specific</b> mode writes to dedicated tables per category, with a clear schema. <b>Azure diagnostics</b> mode mixes many services in a single table, which performs worse and is harder to query. Microsoft recommends resource-specific mode when available.</p>",
 "portal": {
  "path": [
   "Resource",
   "Diagnostic settings"
  ],
  "title": "Destination table",
  "rows": [
   [
    "Azure diagnostics",
    "One shared table"
   ],
   [
    "*Resource specific",
    "Dedicated tables"
   ]
  ]
 },
 "keep": "Clear tables = resource-specific mode."
},
{
 "id": "D5-077",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to monitor VMs from several subscriptions with a single Log Analytics workspace.</p><p>Which statement is true?</p>",
 "opts": [
  "A workspace can receive data from resources in several subscriptions and regions",
  "A workspace only receives data from its own subscription",
  "You must have one workspace per region",
  "You need one workspace per VM"
 ],
 "ans": 0,
 "expl": "<p>A Log Analytics workspace can collect data from resources in <b>several subscriptions and regions</b>, even several tenants. Microsoft recommends limiting the number of workspaces, unless sovereignty, billing, or access constraints apply.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "LAW-Central"
  ],
  "title": "Sources",
  "rows": [
   [
    "*Subscriptions",
    "Several"
   ],
   [
    "Regions",
    "Several"
   ]
  ]
 },
 "keep": "One workspace can cover several subscriptions."
},
{
 "id": "D5-078",
 "dom": 5,
 "type": "single",
 "stem": "<p>Your Log Analytics workspace ingests about 200 GB per day. You want to reduce ingestion cost.</p><p>Which pricing option should you consider?</p>",
 "opts": [
  "Increase retention",
  "A commitment tier, for example 200 GB per day",
  "A second workspace",
  "Pay-as-you-go only"
 ],
 "ans": 1,
 "expl": "<p><b>Commitment tiers</b> (100, 200, 300 GB/day and more) offer a discount compared to pay-as-you-go, in exchange for a committed daily volume. You can also reduce ingestion (filter in data collection rules, Basic or Auxiliary table plan for rarely queried logs).</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Pricing tier",
  "menu": [
   "*Usage and estimated costs"
  ],
  "rows": [
   [
    "*Commitment tier",
    "200 GB/day"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Large steady volume = commitment tier."
},
{
 "id": "D5-079",
 "dom": 5,
 "type": "single",
 "stem": "<p>A very large debug log table is only consulted during incidents, with simple queries.</p><p>Which table plan greatly reduces ingestion cost?</p>",
 "opts": [
  "A higher commitment tier",
  "The Analytics plan",
  "The table's Basic (or Auxiliary) plan",
  "A 2-year retention"
 ],
 "ans": 2,
 "expl": "<p>The <b>Basic</b> and <b>Auxiliary</b> table plans cost much less to ingest than the <b>Analytics</b> plan, in exchange for limited query features and a per-query cost. They suit large, rarely queried logs.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1",
   "Tables"
  ],
  "title": "DebugLogs_CL | Manage table",
  "rows": [
   [
    "*Table plan",
    "Basic"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Large rarely queried logs = Basic/Auxiliary plan."
},
{
 "id": "D5-080",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to prevent a configuration error from blowing up the bill of workspace WS3 in a single day.</p><p>What can you configure?</p>",
 "opts": [
  "A lock on the workspace",
  "A shorter retention only",
  "A proximity placement group",
  "A daily cap on the workspace, with an alert"
 ],
 "ans": 3,
 "expl": "<p>The <b>daily cap</b> stops collection (for most data types) when the day's volume reaches the limit, until the next day. Caution: data beyond it is lost. You pair it with an alert to be notified.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS3"
  ],
  "title": "Daily cap",
  "rows": [
   [
    "*Daily cap",
    "On · 50 GB"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Limiting the ingestion bill = daily cap."
},
{
 "id": "D5-081",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to list, in Log Analytics, all deletion operations performed in the subscription last week, with the caller.</p><p>Which table should you query?</p>",
 "opts": [
  "AzureActivity",
  "Event",
  "Heartbeat",
  "Perf"
 ],
 "ans": 0,
 "expl": "<p>The <b>AzureActivity</b> table contains the activity log sent by the subscription's diagnostic setting: <code>AzureActivity | where OperationNameValue endswith \"DELETE\" | project TimeGenerated, Caller, ResourceGroup, OperationNameValue</code>.</p><p>Perf holds performance counters, Heartbeat agent signals, Event Windows events.</p>",
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
 "keep": "Management operations in KQL = AzureActivity."
},
{
 "id": "D5-082",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to know which VMs stopped sending data to Log Analytics more than 15 minutes ago.</p><p>Which table should you query?</p>",
 "opts": [
  "AzureActivity",
  "Heartbeat",
  "Usage",
  "SecurityEvent"
 ],
 "ans": 1,
 "expl": "<p>Agents send a <b>Heartbeat</b> signal every minute. The query <code>Heartbeat | summarize Last = max(TimeGenerated) by Computer | where Last &lt; ago(15m)</code> lists silent machines. You can make it a log search alert.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Logs",
  "rows": [
   [
    "*Heartbeat",
    "max(TimeGenerated) < ago(15m)"
   ]
  ],
  "btn": "Run"
 },
 "keep": "Silent machines = Heartbeat."
},
{
 "id": "D5-083",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You examine the following KQL query:</p><pre>Perf\n| where TimeGenerated &gt; ago(1d)\n| where CounterName == \"% Free Space\" and InstanceName == \"C:\"\n| summarize FreeSpace = min(CounterValue) by Computer\n| where FreeSpace &lt; 10</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "The query analyzes:",
   "o": [
    "the last 24 hours",
    "all data",
    "the last month"
   ],
   "a": 0
  },
  {
   "l": "For each computer, it computes:",
   "o": [
    "the minimum free space of C:",
    "the number of measurements",
    "the average free space of all disks"
   ],
   "a": 0
  },
  {
   "l": "The result lists:",
   "o": [
    "computers whose C: dropped below 10% free space",
    "all computers",
    "the first 10 computers"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><code>ago(1d)</code>: the last 24 hours.</li><li><code>min(CounterValue) by Computer</code>: the lowest free space percentage of C: for each computer.</li><li>The last <code>where</code> keeps only those below 10%.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "Results",
  "rows": [
   [
    "*VM-Files2",
    "FreeSpace 6.3"
   ],
   [
    "VM-Web4",
    "FreeSpace 8.9"
   ]
  ]
 },
 "keep": "ago = period; min by = per machine; final where = filter on the result."
},
{
 "id": "D5-084",
 "dom": 5,
 "type": "screen",
 "stem": "<p>You create a metric alert on VM10: it must fire when average CPU exceeds 90% over 5 minutes, be evaluated every minute, with severity 1, and notify the action group AG-OnCall.</p><p>How should you configure the alert?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create an alert rule",
  "sub": "VM10",
  "rows": [
   {
    "k": "head",
    "t": "Condition"
   },
   {
    "k": "select",
    "l": "Signal",
    "o": [
     "Percentage CPU",
     "Available Memory Bytes",
     "Disk Read Bytes"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Aggregation",
    "o": [
     "Average",
     "Maximum",
     "Total"
    ],
    "a": 0
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
    "l": "Threshold",
    "o": [
     "80",
     "90",
     "95"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Aggregation granularity",
    "o": [
     "1 minute",
     "5 minutes",
     "15 minutes"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Frequency of evaluation",
    "o": [
     "1 minute",
     "5 minutes",
     "15 minutes"
    ],
    "a": 0
   },
   {
    "k": "head",
    "t": "Actions and details"
   },
   {
    "k": "select",
    "l": "Action group",
    "o": [
     "AG-OnCall",
     "AG-Finance"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Severity",
    "o": [
     "0 - Critical",
     "1 - Error",
     "2 - Warning",
     "3 - Informational"
    ],
    "a": 1
   }
  ]
 },
 "expl": "<ul><li>Signal <b>Percentage CPU</b>, aggregation <b>Average</b>, <b>Greater than 90</b>.</li><li><b>Aggregation granularity</b> (lookback period) <b>5 minutes</b>; <b>frequency of evaluation</b> <b>1 minute</b>.</li><li>Action group <b>AG-OnCall</b>, severity <b>1 - Error</b>.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM10"
  ],
  "title": "Alert rule",
  "rows": [
   [
    "*Condition",
    "Average CPU > 90 · 5 min · every 1 min"
   ],
   [
    "Severity",
    "1 - Error"
   ],
   [
    "Actions",
    "AG-OnCall"
   ]
  ]
 },
 "keep": "Granularity = window; frequency = how often it's evaluated."
},
{
 "id": "D5-085",
 "dom": 5,
 "type": "screen",
 "stem": "<p>You create a diagnostic setting on key vault KV3. Audit logs must go to workspace WS1, in specific tables, and be archived in storage95.</p><p>How should you configure the setting?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Diagnostic setting",
  "sub": "KV3",
  "rows": [
   {
    "k": "head",
    "t": "Logs"
   },
   {
    "k": "check",
    "l": "Category: AuditEvent",
    "a": true
   },
   {
    "k": "check",
    "l": "Metrics: AllMetrics",
    "a": null
   },
   {
    "k": "head",
    "t": "Destination details"
   },
   {
    "k": "check",
    "l": "Send to Log Analytics workspace (WS1)",
    "a": true
   },
   {
    "k": "radio",
    "l": "Destination table",
    "opts": [
     "Azure diagnostics",
     "Resource specific"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "check",
    "l": "Archive to a storage account (storage95)",
    "a": true
   },
   {
    "k": "check",
    "l": "Stream to an event hub",
    "a": false
   }
  ]
 },
 "expl": "<ul><li>Category <b>AuditEvent</b>: all operations on the vault.</li><li>Destination <b>Log Analytics</b> with <b>resource-specific</b> tables, and <b>archive</b> to storage95.</li><li>No event hub. Metrics aren't scored here.</li></ul>",
 "portal": {
  "path": [
   "Key vaults",
   "KV3"
  ],
  "title": "Diagnostic setting",
  "rows": [
   [
    "*AuditEvent",
    "WS1 · resource specific"
   ],
   [
    "Archive",
    "storage95"
   ]
  ],
  "btn": "Save"
 },
 "keep": "A diagnostic setting can have several destinations."
},
{
 "id": "D5-086",
 "dom": 5,
 "type": "screen",
 "stem": "<p>You configure backup for VM11. The backup must run every day at 10 PM, keep daily points for 14 days and Sunday weekly points for 8 weeks, with instant restore snapshots kept for 2 days.</p><p>How should you configure the policy?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create policy",
  "sub": "Vault3 | Backup policies",
  "rows": [
   {
    "k": "select",
    "l": "Policy type",
    "o": [
     "Standard",
     "Enhanced"
    ],
    "d": 0,
    "a": null
   },
   {
    "k": "select",
    "l": "Frequency",
    "o": [
     "Daily",
     "Weekly",
     "Hourly"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Time",
    "o": [
     "10:00 PM",
     "11:00 PM"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Retain instant recovery snapshot(s) for (days)",
    "o": [
     "1",
     "2",
     "5"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Retention of daily backup point (days)",
    "o": [
     "7",
     "14",
     "30"
    ],
    "a": 1
   },
   {
    "k": "check",
    "l": "Retention of weekly backup point (Sunday)",
    "a": true
   },
   {
    "k": "select",
    "l": "For (weeks)",
    "o": [
     "4",
     "8",
     "12"
    ],
    "a": 1
   }
  ]
 },
 "expl": "<ul><li><b>Daily</b> frequency at <b>10 PM</b>.</li><li>Instant restore snapshots: <b>2 days</b>.</li><li>Daily retention <b>14 days</b>, weekly (Sunday) <b>8 weeks</b>.</li></ul><p>The policy type isn't scored: a single daily backup works with both.</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault3"
  ],
  "title": "Policy",
  "rows": [
   [
    "*Daily",
    "22:00"
   ],
   [
    "Snapshots",
    "2 days"
   ],
   [
    "Daily / weekly",
    "14 d / 8 wk"
   ]
  ]
 },
 "keep": "Schedule + snapshots + retentions in the policy."
},
{
 "id": "D5-087",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>You need to enable backup for VM12 from the VM's page.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "VM12 | Virtual machine",
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
    "g": "Settings",
    "items": [
     "Networking",
     "Disks",
     "Size",
     "Extensions + applications"
    ]
   },
   {
    "g": "Operations",
    "items": [
     "Bastion",
     "Auto-shutdown",
     "Backup",
     "Disaster recovery",
     "Updates"
    ]
   },
   {
    "g": "Monitoring",
    "items": [
     "Insights",
     "Alerts",
     "Metrics",
     "Diagnostic settings"
    ]
   }
  ]
 },
 "ans": "Backup",
 "expl": "<p><b>Backup</b> enables Azure Backup (choice of vault and policy). <b>Disaster recovery</b> enables Azure Site Recovery replication to another region or zone.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM12"
  ],
  "title": "VM12 | Backup",
  "menu": [
   "*Backup",
   "Disaster recovery"
  ],
  "rows": [
   [
    "Vault",
    "Vault1"
   ],
   [
    "Policy",
    "DefaultPolicy"
   ]
  ],
  "btn": "Enable backup"
 },
 "keep": "Backup = Backup; Disaster recovery = Site Recovery."
},
{
 "id": "D5-088",
 "dom": 5,
 "type": "hotspot",
 "stem": "<p>You need to create an alert that notifies the team when planned Azure platform maintenance affects your resources.</p><p>In the portal, which service should you open?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "Monitor | Overview",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Alerts",
     "Metrics",
     "Logs",
     "Service Health",
     "Workbooks"
    ]
   },
   {
    "g": "Insights",
    "items": [
     "Applications",
     "Virtual Machines",
     "Containers",
     "Networks"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Diagnostic settings",
     "Data Collection Rules",
     "Action groups"
    ]
   }
  ]
 },
 "ans": "Service Health",
 "expl": "<p><b>Service Health</b> shows incidents, planned maintenance, and advisories, and lets you create <b>service health alerts</b> filtered by service, region, and event type.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Service Health"
  ],
  "title": "Service Health",
  "menu": [
   "*Service Health"
  ],
  "rows": [
   [
    "*Planned maintenance",
    "Health alert"
   ]
  ],
  "btn": "+ Create service health alert"
 },
 "keep": "Planned maintenance = Service Health."
},
{
 "id": "D5-089",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to collect the Syslog of 30 Linux VMs to workspace WS4.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Create a diagnostic setting on the workspace",
  "Install the Azure Monitor agent on the VMs (often automatically through the DCR association)",
  "Create a data collection rule with the Syslog source and the WS4 destination",
  "Enable boot diagnostics"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<ul><li><b>Azure Monitor agent: yes.</b></li><li><b>Syslog data collection rule to WS4: yes</b>, associated with the 30 VMs.</li><li>Boot diagnostics concern the boot console. A workspace diagnostic setting sends its own logs, not the VMs'.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules"
  ],
  "title": "Create a DCR",
  "rows": [
   [
    "*Source",
    "Syslog"
   ],
   [
    "Destination",
    "WS4"
   ],
   [
    "Resources",
    "30 Linux VMs (AMA)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Syslog = AMA + DCR."
},
{
 "id": "D5-090",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to protect VM backups against a malicious administrator who would want to delete them.</p><p>Which <b>two</b> vault features should you use?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Always-on (enhanced) soft delete",
  "Vault immutability (locked)",
  "A metric alert on CPU",
  "LRS redundancy"
 ],
 "ans": [
  0,
  1
 ],
 "expl": "<ul><li><b>Always-on soft delete: yes</b>, deleted data stays recoverable and the setting can't be disabled.</li><li><b>Locked immutable vault: yes</b>, it prevents deleting points before they expire.</li><li>Multi-user authorization would be a good third choice. LRS and a CPU alert add nothing here.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "Vault1"
  ],
  "title": "Security settings",
  "rows": [
   [
    "*Soft delete",
    "Always-on"
   ],
   [
    "*Immutability",
    "Locked"
   ]
  ]
 },
 "keep": "Against a malicious admin = always-on soft delete + immutability (+ MUA)."
},
{
 "id": "D5-091",
 "dom": 5,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You prepare Azure Site Recovery for 10 VMs from France Central to West Europe.</p><p>Which <b>two</b> resources must exist or be created?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "A Recovery Services vault in West Europe",
  "A VPN gateway between the two regions",
  "A Backup vault in France Central",
  "A target virtual network in West Europe (created automatically or chosen)"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<ul><li><b>Vault in West Europe: yes.</b></li><li><b>Target virtual network: yes</b>, to start the VMs in at failover (Site Recovery can create it).</li><li>The Backup vault isn't used by Site Recovery. No VPN gateway is needed: replication goes over the Azure network.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "Disaster recovery",
  "rows": [
   [
    "*Vault",
    "West Europe"
   ],
   [
    "*Target network",
    "vnet-weu (auto)"
   ]
  ]
 },
 "keep": "ASR: target vault + target network; no VPN."
},
{
 "id": "D5-092",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want metric alerts to be created automatically for common problems on your VMs (CPU, memory, disk, availability), without writing them one by one.</p><p>What can you use?</p>",
 "opts": [
  "An alert processing rule",
  "A workbook",
  "The VM's recommended alert rules",
  "The activity log"
 ],
 "ans": 2,
 "expl": "<p>Azure offers <b>recommended alert rules</b> for VMs (and other resources): you enable them in a few clicks from the resource's Alerts page, with editable default thresholds. Azure Monitor Baseline Alerts (AMBA) does it at scale with Azure Policy.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Alerts",
  "rows": [
   [
    "*Recommended alert rules",
    "CPU, memory, disk, availability"
   ]
  ],
  "btn": "Enable"
 },
 "keep": "Standard alerts in one click = recommended alert rules."
},
{
 "id": "D5-093",
 "dom": 5,
 "type": "single",
 "stem": "<p>A log search alert must run every 5 minutes and fire if the query returns at least one row.</p><p>Which settings match?</p>",
 "opts": [
  "Dynamic threshold on CPU",
  "One-hour granularity",
  "Activity log alert",
  "Measure: number of rows, operator Greater than 0, evaluation frequency 5 minutes"
 ],
 "ans": 3,
 "expl": "<p>A <b>log search alert</b> runs a KQL query at a frequency, over a period. The condition is on the <b>number of rows</b> or a computed measure (for example an average), compared to a threshold.</p>",
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
 "keep": "Log alert = query + frequency + threshold."
},
{
 "id": "D5-094",
 "dom": 5,
 "type": "single",
 "stem": "<p>The application team wants to receive a phone call (voice call) when a critical alert fires.</p><p>Where should you configure this?</p>",
 "opts": [
  "In an action group, with a Voice notification",
  "In Service Health only",
  "In the data collection rule",
  "In the diagnostic setting"
 ],
 "ans": 0,
 "expl": "<p><b>Action groups</b> offer <b>email</b>, <b>SMS</b>, <b>push notification</b> (Azure mobile app), and <b>voice call</b> notifications, with rate limits per number.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Action groups"
  ],
  "title": "Notifications",
  "rows": [
   [
    "*Voice",
    "+33 6 …"
   ]
  ]
 },
 "keep": "Voice call = action group Voice notification."
},
{
 "id": "D5-095",
 "dom": 5,
 "type": "single",
 "stem": "<p>When an alert fires, a script must automatically restart a service on a VM.</p><p>Which action group action should you use?</p>",
 "opts": [
  "An SMS",
  "An Azure Automation runbook (or an Azure function)",
  "A push notification",
  "An email notification"
 ],
 "ans": 1,
 "expl": "<p>An action group can trigger an <b>Automation runbook</b>, an <b>Azure function</b>, a <b>logic app</b>, or a <b>webhook</b>: that's the basis of automatic remediation.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Action groups"
  ],
  "title": "Actions",
  "rows": [
   [
    "*Automation Runbook",
    "Restart-Service"
   ]
  ]
 },
 "keep": "Automatic remediation = runbook / function / Logic App."
},
{
 "id": "D5-096",
 "dom": 5,
 "type": "single",
 "stem": "<p>A public web service must be monitored from the internet: if it stops responding with HTTP 200 from at least 2 locations, an alert must fire.</p><p>What should you configure?</p>",
 "opts": [
  "A diagnostic setting",
  "A Resource Health alert",
  "A standard availability test in Application Insights, with an alert",
  "An activity log alert"
 ],
 "ans": 2,
 "expl": "<p>Application Insights <b>availability tests</b> (standard test or URL ping) query the URL from several Azure locations. The alert fires when a minimum number of locations fail.</p>",
 "portal": {
  "path": [
   "Application Insights",
   "appi1"
  ],
  "title": "Availability",
  "rows": [
   [
    "*Standard test",
    "5 locations · threshold 2"
   ]
  ],
  "btn": "+ Add Standard test"
 },
 "keep": "Monitored public URL = availability test."
},
{
 "id": "D5-097",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to see the topology and health of networks (gateways, load balancers, connections) across your subscriptions in a single view.</p><p>What should you open?</p>",
 "opts": [
  "Application Insights",
  "Container Insights",
  "VM Insights",
  "Azure Monitor Network Insights"
 ],
 "ans": 3,
 "expl": "<p><b>Network Insights</b> (Azure Monitor > Networks) shows the health and metrics of all network resources, with topology and access to Network Watcher tools.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Networks"
  ],
  "title": "Network Insights",
  "rows": [
   [
    "*Health",
    "Gateways, LBs, connections"
   ]
  ]
 },
 "keep": "Network health view = Network Insights."
},
{
 "id": "D5-098",
 "dom": 5,
 "type": "single",
 "stem": "<p>A team wants a shared dashboard that permanently shows a few metric charts and a log query, pinned from the portal.</p><p>Which solution is the simplest?</p>",
 "opts": [
  "A shared Azure dashboard",
  "An action group",
  "A backup policy",
  "An alert processing rule"
 ],
 "ans": 0,
 "expl": "<p><b>Azure dashboards</b> let you pin metric charts, query results, and other tiles, then share them (they're Azure resources, with access control). Workbooks are richer for interactive reports.</p>",
 "portal": {
  "path": [
   "Dashboard"
  ],
  "title": "Shared dashboard",
  "rows": [
   [
    "*Tiles",
    "Metrics + query"
   ]
  ],
  "btn": "Share"
 },
 "keep": "Shared pinned charts = Azure dashboard."
},
{
 "id": "D5-099",
 "dom": 5,
 "type": "single",
 "stem": "<p>You want to export a resource's platform metrics to Log Analytics to correlate them with logs in a KQL query.</p><p>What should you configure?</p>",
 "opts": [
  "The daily cap",
  "A diagnostic setting with the AllMetrics category to the workspace",
  "An alert processing rule",
  "A metric alert"
 ],
 "ans": 1,
 "expl": "<p>A <b>diagnostic setting</b> can send <b>metrics</b> (AllMetrics) in addition to logs. They arrive in the <b>AzureMetrics</b> table in Log Analytics, queryable with KQL.</p>",
 "portal": {
  "path": [
   "Resource",
   "Diagnostic settings"
  ],
  "title": "Diagnostic setting",
  "rows": [
   [
    "*AllMetrics",
    "→ LAW (AzureMetrics table)"
   ]
  ]
 },
 "keep": "Metrics in KQL = AllMetrics diagnostic → AzureMetrics."
},
{
 "id": "D5-100",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage action groups and alerts.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "An action group can be used by alerts from several subscriptions.",
   "a": 0
  },
  {
   "l": "An alert rule can call several action groups.",
   "a": 0
  },
  {
   "l": "An alert processing rule can add an action group to all alerts in a subscription.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Several subscriptions: Yes</b>, an action group is referenced by its resource ID.</li><li><b>Several groups: Yes</b>, for example one for on-call and one for tickets.</li><li><b>Processing rule: Yes</b>, it can add action groups (or suppress them) over a scope.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Action groups"
  ],
  "title": "AG-OnCall",
  "rows": [
   [
    "*Used by",
    "Alerts from 3 subscriptions"
   ]
  ]
 },
 "keep": "Action groups reusable everywhere."
},
{
 "id": "D5-101",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You manage Azure Site Recovery.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A test failover interrupts VM replication.",
   "a": 1
  },
  {
   "l": "After a failover, you must reprotect the VMs to replicate in the other direction.",
   "a": 0
  },
  {
   "l": "Site Recovery can replicate Azure VMs to another Azure region.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Test and replication: No</b>, replication continues during a test.</li><li><b>Reprotection: Yes</b>, it starts replication from the new active region to the old one.</li><li><b>Region to region: Yes</b>, it's the main scenario for Azure VMs.</li></ul>",
 "portal": {
  "path": [
   "Replicated items",
   "VM1"
  ],
  "title": "Overview",
  "rows": [
   [
    "*Test failover",
    "Replication continues"
   ],
   [
    "After failover",
    "Re-protect"
   ]
  ]
 },
 "keep": "A test doesn't stop replication."
},
{
 "id": "D5-102",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You choose a protection solution for each need.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Restore a file deleted 3 months ago on a VM:",
   "o": [
    "Availability set",
    "Azure Site Recovery",
    "Azure Backup"
   ],
   "a": 2
  },
  {
   "l": "Restart the whole application in another region in 30 minutes:",
   "o": [
    "Azure Site Recovery",
    "Availability zones",
    "Azure Backup"
   ],
   "a": 0
  },
  {
   "l": "Keep running without interruption if a datacenter goes down:",
   "o": [
    "Azure Backup",
    "Availability zones",
    "Azure Site Recovery"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Backup</b>: restore old data.</li><li><b>Site Recovery</b>: disaster recovery, with failover to another region.</li><li><b>Availability zones</b>: high availability, with no manual failover, against the loss of a datacenter.</li></ul>",
 "portal": {
  "path": [
   "Business continuity"
  ],
  "title": "Choose",
  "rows": [
   [
    "*Old file",
    "Backup"
   ],
   [
    "Another region",
    "Site Recovery"
   ],
   [
    "Datacenter lost",
    "Zones"
   ]
  ]
 },
 "keep": "Data = Backup; regional disaster = ASR; datacenter = zones."
},
{
 "id": "D5-103",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to enable backup for VM13 in vault Vault4 with the DefaultPolicy policy, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az backup {0} enable-for-azurevm --resource-group RG1 --vault-name Vault4 --vm VM13 {1} DefaultPolicy",
 "rows": [
  {
   "l": "Subgroup",
   "o": [
    "protection",
    "item",
    "vault"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--policy-name",
    "--schedule",
    "--retention"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az backup protection enable-for-azurevm --vault-name Vault4 --vm VM13 --policy-name DefaultPolicy</code>. You then run an on-demand backup with <code>az backup protection backup-now</code>.</p><p>In PowerShell: <code>Enable-AzRecoveryServicesBackupProtection</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az backup protection enable-for-azurevm",
    "--policy-name"
   ]
  ]
 },
 "keep": "az backup protection enable-for-azurevm --policy-name."
},
{
 "id": "D5-104",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to create an action group that sends an email to oncall@contoso.com, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az monitor {0} create --resource-group RG1 --name AG-OnCall --short-name OnCall {1} email Team oncall@contoso.com",
 "rows": [
  {
   "l": "Resource",
   "o": [
    "action-group",
    "alert",
    "diagnostic-settings"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--action",
    "--receiver",
    "--notify"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az monitor action-group create ... --action email Team oncall@contoso.com</code>. The <b>short name</b> (12 characters max) appears in SMS and emails.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az monitor action-group create",
    "--action email …"
   ]
  ]
 },
 "keep": "az monitor action-group create --action."
},
{
 "id": "D5-105",
 "dom": 5,
 "type": "cmd",
 "stem": "<p>You need to create a metric alert on VM14 by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az monitor {0} create --resource-group RG1 --name CPU-VM14 --scopes &lt;VM14 id&gt; {1} \"avg Percentage CPU &gt; 90\" --window-size 5m --evaluation-frequency 1m --action AG-OnCall",
 "rows": [
  {
   "l": "Resource",
   "o": [
    "metrics alert",
    "activity-log alert",
    "log-analytics"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--condition",
    "--query",
    "--threshold-only"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az monitor metrics alert create --condition \"avg Percentage CPU &gt; 90\" --window-size 5m --evaluation-frequency 1m</code>. <code>activity-log alert</code> creates an activity log alert; log alerts use <code>az monitor scheduled-query</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Bash",
  "rows": [
   [
    "*az monitor metrics alert create",
    "--condition \"avg … > 90\""
   ]
  ]
 },
 "keep": "az monitor metrics alert create --condition."
},
{
 "id": "D5-106",
 "dom": 5,
 "type": "order",
 "stem": "<p>You need to be alerted by SMS if a network security rule is deleted in the subscription.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Create an action group with an SMS notification",
  "Create an activity log alert rule on the Delete Security Rule operation",
  "Associate the action group with the rule and enable it",
  "Create a diagnostic setting on the NSG",
  "Create a metric alert on the NSG"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>The <b>action group</b> exists first (it can also be created in the wizard), then the <b>activity log alert rule</b> (signal: <code>Microsoft.Network/networkSecurityGroups/securityRules/delete</code>), to which you <b>associate</b> the action group.</p><p>Deleting a rule is a control plane operation, visible in the activity log with no diagnostic setting. NSGs have no suitable metric.</p>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Create an alert rule",
  "rows": [
   [
    "1",
    "Action group (SMS)"
   ],
   [
    "*2",
    "Signal: Delete Security Rule"
   ],
   [
    "3",
    "Associate and enable"
   ]
  ]
 },
 "keep": "Action group → activity log rule → association."
},
{
 "id": "D5-107",
 "dom": 5,
 "type": "order",
 "stem": "<p>You need to restore VM15 from yesterday's backup, as a new VM named VM15-R in the same network.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Open VM15's backup item and choose Restore VM",
  "Select yesterday's restore point",
  "Choose Create new virtual machine, name it VM15-R, and choose the network and staging location",
  "Stop VM15",
  "Delete the vault"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>You open the backed-up item, start <b>Restore VM</b>, choose the <b>restore point</b>, then the configuration: <b>Create new virtual machine</b> with its name, network, and a staging location (storage account) if needed.</p><p>The original VM doesn't need to be stopped to create a new VM.</p>",
 "portal": {
  "path": [
   "Backup items",
   "VM15"
  ],
  "title": "Restore Virtual Machine",
  "rows": [
   [
    "Point",
    "Yesterday"
   ],
   [
    "*Configuration",
    "Create new · VM15-R"
   ]
  ],
  "btn": "Restore"
 },
 "keep": "Restore VM → point → Create new VM."
},
{
 "id": "D5-108",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to match each monitoring tool to its use.</p><p>To answer, drag the appropriate tool to each use. Each tool may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tools",
 "srcs": [
  "Metrics Explorer",
  "Log Analytics",
  "Workbooks",
  "Azure Advisor"
 ],
 "tgtHead": [
  "Use",
  "Tool"
 ],
 "tgts": [
  {
   "l": "Quickly chart a disk's IOPS",
   "a": 0
  },
  {
   "l": "Join logs from several tables with KQL",
   "a": 1
  },
  {
   "l": "Publish an interactive report with parameters",
   "a": 2
  },
  {
   "l": "Get reliability and cost recommendations",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Metrics Explorer</b>: metric charts.</li><li><b>Log Analytics</b>: KQL queries on logs.</li><li><b>Workbooks</b>: interactive reports.</li><li><b>Advisor</b>: recommendations.</li></ul>",
 "portal": {
  "path": [
   "Monitor"
  ],
  "title": "Tools",
  "rows": [
   [
    "*Metrics Explorer",
    "Charts"
   ],
   [
    "Log Analytics",
    "KQL"
   ],
   [
    "Workbooks",
    "Reports"
   ],
   [
    "Advisor",
    "Recommendations"
   ]
  ]
 },
 "keep": "Metrics / KQL / reports / recommendations."
},
{
 "id": "D5-109",
 "dom": 5,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate KQL operator for each need.</p><p>To answer, drag the appropriate operator to each need. Each operator may be used once, more than once, or not at all.</p>",
 "srcLabel": "Operators",
 "srcs": [
  "where",
  "project",
  "extend",
  "summarize",
  "join"
 ],
 "tgtHead": [
  "Need",
  "Operator"
 ],
 "tgts": [
  {
   "l": "Keep only rows where Computer equals VM1",
   "a": 0
  },
  {
   "l": "Keep only the TimeGenerated and Computer columns",
   "a": 1
  },
  {
   "l": "Add a computed RoundedCPU column",
   "a": 2
  },
  {
   "l": "Count rows per computer",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>where</b>: filters rows.</li><li><b>project</b>: chooses (and renames) columns.</li><li><b>extend</b>: adds computed columns.</li><li><b>summarize</b>: aggregates (count, avg, max…) by groups.</li></ul><p><b>join</b> combines two tables.</p>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "WS1"
  ],
  "title": "KQL",
  "rows": [
   [
    "*where",
    "Rows"
   ],
   [
    "project",
    "Columns"
   ],
   [
    "extend",
    "Computed column"
   ],
   [
    "summarize",
    "Aggregation"
   ]
  ]
 },
 "keep": "where rows; project columns; extend compute; summarize aggregates."
},
{
 "id": "D5-110",
 "dom": 5,
 "type": "single",
 "stem": "<p>You need to monitor CPU and memory usage of container groups and Container Apps applications, with centralized console logs.</p><p>Where are Azure Container Apps console logs sent?</p>",
 "opts": [
  "To the Recovery Services vault",
  "To an App Service plan",
  "To the Log Analytics workspace configured on the Container Apps environment",
  "To the container registry"
 ],
 "ans": 2,
 "expl": "<p>A Container Apps environment is associated with a log destination, usually a <b>Log Analytics</b> workspace: console (stdout/stderr) and system logs arrive there in dedicated tables. Metrics (CPU, memory, requests) are available in Azure Monitor.</p>",
 "portal": {
  "path": [
   "Container Apps environments",
   "cae1"
  ],
  "title": "cae1 | Logging options",
  "rows": [
   [
    "*Destination",
    "Log Analytics"
   ]
  ]
 },
 "keep": "Container Apps logs = the environment's Log Analytics."
}
);
