/* Domain 5: monitoring and backup (batch J: D5-431 to D5-440, long scenarios) */
AZ.questions.push(
{
 "id": "D5-431",
 "dom": 5,
 "type": "hot",
 "stem": "<p>The operations team monitors 80 Windows VMs with the Azure Monitor agent and a DCR sending the logical disk “% Free Space” counter to LAW-Ops.</p><p>Requirements:</p><ul><li>an alert must fire within 2 minutes when a logical disk drops below 10% free space, with one alert per VM and per drive letter;</li><li>the alert must cost as little as possible;</li><li>data must remain available in LAW-Ops for reports.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "In the DCR:",
   "o": [
    "Replace LAW-Ops with Azure Monitor Metrics in the DCR",
    "Create a second DCR for the same counter, to LAW-Ops",
    "A transformation converting the counter to a metric",
    "Add the Azure Monitor Metrics destination"
   ],
   "a": 3
  },
  {
   "l": "Alert type:",
   "o": [
    "A metric alert on the guest metric",
    "An activity log alert on the VMs",
    "A log alert evaluated every minute",
    "A Resource Health alert on the disks"
   ],
   "a": 0
  },
  {
   "l": "One alert per VM and per drive:",
   "o": [
    "Split by computer and instance",
    "A separate action group per drive letter",
    "One rule per drive and VM, by template",
    "One alert processing rule per VM"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Destination.</b> A DCR can send a performance counter to both Log Analytics and Azure Monitor Metrics (the metrics store). Data stays in LAW-Ops for reports.<b>Metric alert.</b> On the guest metric, it evaluates in near real time and costs less than a log alert evaluated every minute.<b>Dimensions.</b> Guest metrics keep the computer and instance (drive letter) as dimensions: splitting gives one series, hence one alert, per combination.",
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
    "*In the DCR",
    "Add the Azure Monitor Metrics destination"
   ],
   [
    "Alert type",
    "A metric alert on the guest metric"
   ],
   [
    "One alert per VM and per drive",
    "Split by computer and instance"
   ]
  ]
 },
 "keep": "Guest counter to Azure Monitor Metrics = fast, cheap metric alert, with dimensions."
},
{
 "id": "D5-432",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VMSS-Web uses autoscale with two rules: +2 instances if average CPU exceeds 70% for 5 minutes, and −1 instance if average CPU drops below 60% for 5 minutes. Minimum 2, maximum 10. Cooldown: 5 minutes.</p><p>Findings:</p><ul><li>the instance count keeps flapping between 4 and 6 during the day;</li><li>the team wants an email and a call to its ticketing webhook on every scale operation;</li><li>the team wants to find, for an operation last night, the rule that triggered it and the measured value.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For the flapping:",
   "o": [
    "Keep the minimum at 6 instances at all times",
    "Widen the thresholds (scale in below 30%)",
    "Delete the profile's scale-in rule",
    "Shorten the cooldown to 1 minute"
   ],
   "a": 1
  },
  {
   "l": "Notifications:",
   "o": [
    "The autoscale setting notifications (email, webhook)",
    "An activity log alert on Microsoft.Insights/AutoscaleSettings",
    "A metric alert on instance count",
    "An alert processing rule"
   ],
   "a": 0
  },
  {
   "l": "Origin of an operation:",
   "o": [
    "The instances view and their state",
    "VMSS-Web's job history log",
    "AutoscaleEvaluations and action logs",
    "Azure Advisor recommendations"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Flapping.</b> With 70% and 60%, removing an instance pushes CPU back above the scale-out threshold. Microsoft recommends a sufficient gap between thresholds; the engine also estimates a scale-in's outcome to avoid one that would trigger a scale-out, but too small a gap leaves little room. Shortening the cooldown would make it worse.<b>Notifications.</b> The autoscale setting has its own notifications (email to admins, addresses, webhooks) on every operation.<b>Diagnostics.</b> AutoscaleEvaluations and AutoscaleScaleActions logs, sent through a diagnostic setting, detail the rule, the metric value, and the action.",
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
    "*For the flapping",
    "Widen the thresholds (scale in below 30%)"
   ],
   [
    "Notifications",
    "The autoscale setting notifications (email, webhook)"
   ],
   [
    "Origin of an operation",
    "AutoscaleEvaluations and action logs"
   ]
  ]
 },
 "keep": "Autoscale: well-separated thresholds, built-in notifications, AutoscaleEvaluations logs."
},
{
 "id": "D5-433",
 "dom": 5,
 "type": "hot",
 "stem": "<p>On a Tuesday, the Payroll app has been down since 6 AM. The team is looking for what changed.</p><ul><li>Question 1: which properties of VM-Paie's Azure configuration (size, disks, network) changed since yesterday, and when?</li><li>Question 2: who changed rule 200 of NSG-Paie last night?</li><li>Question 3: which software and Windows services were installed or changed inside VM-Paie last night?</li></ul><p>What should you use for each question?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Question 1:",
   "o": [
    "VM-Paie's backup job log",
    "Azure Advisor recommendations",
    "Change Tracking and Inventory in the VM",
    "Change history (Resource Graph)"
   ],
   "a": 3
  },
  {
   "l": "Question 2:",
   "o": [
    "Resource Graph change history",
    "Virtual network flow logs",
    "The activity log",
    "Azure Service Health events"
   ],
   "a": 2
  },
  {
   "l": "Question 3:",
   "o": [
    "VM-Paie's activity log",
    "The VM's boot diagnostics",
    "Change Tracking and Inventory",
    "Resource Graph change history"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Azure configuration.</b> Change history (Resource Graph, the resource's Changes tab) compares properties before and after each control-plane change.<b>Who.</b> The activity log gives the caller, operation, and time for management operations.<b>Inside the VM.</b> Change Tracking and Inventory, with the Azure Monitor agent and a dedicated DCR, tracks software, services, files, and registry keys in the guest OS. Neither the activity log nor Resource Graph sees inside the VM.",
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
    "*Question 1",
    "Change history (Resource Graph)"
   ],
   [
    "Question 2",
    "The activity log"
   ],
   [
    "Question 3",
    "Change Tracking and Inventory"
   ]
  ]
 },
 "keep": "Azure properties = change history. Who = activity log. Inside the guest = Change Tracking."
},
{
 "id": "D5-434",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso is automating its response to several alerts.</p><ul><li>Alert A: when VM-Files' D: drive is nearly full, a PowerShell script must clean temporary files in the VM.</li><li>Alert B: a ticket must be created in ServiceNow, and updated when the alert resolves.</li><li>Alert C: an internal API protected by Microsoft Entra ID must be called, with no secret in the URL.</li><li>Alert D: every alert must be sent to the group SIEM, which reads a message stream.</li><li>Alert E: a message must be posted to a Teams channel with custom formatting.</li></ul><p>Which action group action should you use for each alert?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Alert A:",
   "o": [
    "An event hub",
    "A secure webhook (Entra ID)",
    "A logic app",
    "An ITSM connector",
    "An Azure Automation runbook"
   ],
   "a": 4
  },
  {
   "l": "Alert B:",
   "o": [
    "An ITSM connector",
    "A logic app",
    "A secure webhook (Entra ID)",
    "An event hub",
    "An Azure Automation runbook"
   ],
   "a": 0
  },
  {
   "l": "Alert C:",
   "o": [
    "A secure webhook (Entra ID)",
    "A logic app",
    "An Azure Automation runbook",
    "An ITSM connector",
    "An event hub"
   ],
   "a": 0
  },
  {
   "l": "Alert D:",
   "o": [
    "A logic app",
    "An ITSM connector",
    "A secure webhook (Entra ID)",
    "An event hub",
    "An Azure Automation runbook"
   ],
   "a": 3
  },
  {
   "l": "Alert E:",
   "o": [
    "A logic app",
    "An event hub",
    "An ITSM connector",
    "An Azure Automation runbook",
    "A secure webhook (Entra ID)"
   ],
   "a": 0
  }
 ],
 "expl": "<b>A.</b> An Azure Automation runbook runs PowerShell, including inside a VM (Hybrid Runbook Worker or remote command).<b>B.</b> The ITSM connector creates and updates work items in ServiceNow and other tools.<b>C.</b> A secure webhook authenticates with Microsoft Entra ID, with no secret in the URL.<b>D.</b> The Event Hub action publishes the alert to a stream the SIEM consumes.<b>E.</b> A logic app formats and posts the message to Teams.",
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
    "*Alert A",
    "An Azure Automation runbook"
   ],
   [
    "Alert B",
    "An ITSM connector"
   ],
   [
    "Alert C",
    "A secure webhook (Entra ID)"
   ],
   [
    "Alert D",
    "An event hub"
   ],
   [
    "Alert E",
    "A logic app"
   ]
  ]
 },
 "keep": "Script = runbook. Tickets = ITSM. Entra API = secure webhook. SIEM stream = Event Hub. Formatting = logic app."
},
{
 "id": "D5-435",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-Erp (France Central) is replicated by Site Recovery to West Europe. France Central has a major outage. The portal offers the following recovery points for failover.</p><ul><li>Case 1: management wants to restart as fast as possible, even if a few more minutes are lost.</li><li>Case 2: the database must start in an application-consistent state, with no database recovery.</li><li>Case 3: the team wants the lowest possible data loss, even if startup takes longer.</li><li>Case 4: a corrupted file was replicated at 9:12 AM; you must go back to a point before that time.</li></ul><p>Which recovery point should you choose in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Case 1:",
   "o": [
    "Latest processed (lowest RTO)",
    "Latest (lowest RPO)",
    "Latest app-consistent",
    "Custom"
   ],
   "a": 0
  },
  {
   "l": "Case 2:",
   "o": [
    "Latest processed (lowest RTO)",
    "Custom",
    "Latest app-consistent",
    "Latest (lowest RPO)"
   ],
   "a": 2
  },
  {
   "l": "Case 3:",
   "o": [
    "Custom",
    "Latest (lowest RPO)",
    "Latest app-consistent",
    "Latest processed (lowest RTO)"
   ],
   "a": 1
  },
  {
   "l": "Case 4:",
   "o": [
    "Latest app-consistent",
    "Custom",
    "Latest (lowest RPO)",
    "Latest processed (lowest RTO)"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Latest processed</b>: the most recent point already processed by Site Recovery; immediate failover, lowest RTO.<b>Latest app-consistent</b>: the last point taken with VSS (or equivalent); applications start cleanly.<b>Latest</b>: Site Recovery first processes all received data; minimal loss (RPO), but slower startup.<b>Custom</b>: pick a specific point, for example just before the corruption.",
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
    "*Case 1",
    "Latest processed (lowest RTO)"
   ],
   [
    "Case 2",
    "Latest app-consistent"
   ],
   [
    "Case 3",
    "Latest (lowest RPO)"
   ],
   [
    "Case 4",
    "Custom"
   ]
  ]
 },
 "keep": "Latest = lowest RPO. Latest processed = lowest RTO. App-consistent = clean start. Custom = before an incident."
},
{
 "id": "D5-436",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Litware monitors its production storage accounts.</p><ul><li>Users complain about slowness; the team wants to know whether time is lost in the storage service or on the network and in the client.</li><li>Security wants to know who deleted blobs from stdata yesterday, with IP address and identity.</li><li>Management wants a single view of capacity, availability, and transactions for its 60 accounts, with nothing to configure on each.</li><li>An alert must fire when stdata exceeds 4 TB used.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Slowness:",
   "o": [
    "The Availability metric alone, hourly",
    "The Ingress metric over the last hour",
    "Transactions count per API name",
    "Compare E2E and server latency"
   ],
   "a": 3
  },
  {
   "l": "Deletions:",
   "o": [
    "The stdata account's activity log",
    "StorageBlobLogs (diagnostic setting)",
    "The daily blob inventory",
    "The Transactions metric filtered on Delete"
   ],
   "a": 1
  },
  {
   "l": "View of the 60 accounts:",
   "o": [
    "Storage Insights",
    "Azure Advisor recommendations",
    "A workbook built for each account",
    "A pinned dashboard per account"
   ],
   "a": 0
  },
  {
   "l": "Capacity alert:",
   "o": [
    "A metric alert on UsedCapacity",
    "An activity log alert",
    "A budget",
    "A log alert on StorageBlobLogs"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Latency.</b> SuccessServerLatency measures time spent in the service; SuccessE2ELatency adds the network and client. A large gap points to the network or the client app.<b>Deletions.</b> Data operations (reading, writing, deleting blobs) don't appear in the activity log: you need StorageBlobLogs resource logs, with the caller's identity and IP.<b>Global view.</b> Storage Insights relies on platform metrics, available with no configuration.<b>Capacity.</b> UsedCapacity is a platform metric (updated hourly) on which you set a metric alert.",
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
    "*Slowness",
    "Compare E2E and server latency"
   ],
   [
    "Deletions",
    "StorageBlobLogs (diagnostic setting)"
   ],
   [
    "View of the 60 accounts",
    "Storage Insights"
   ],
   [
    "Capacity alert",
    "A metric alert on UsedCapacity"
   ]
  ]
 },
 "keep": "Server vs E2E latency. Data operations = StorageBlobLogs. Global view = Storage Insights. Capacity = UsedCapacity."
},
{
 "id": "D5-437",
 "dom": 5,
 "type": "hot",
 "stem": "<p>LAW-Corp ingests 1.2 TB per day on average, pay-as-you-go. Management wants to cut the bill and protect the data.</p><ul><li>Data must be encrypted with a Contoso-managed key in Key Vault.</li><li>LAW-Corp and LAW-Sec (300 GB/day) must share their volume discount.</li><li>An admin proposes a 1 TB daily cap to avoid overruns; security objects.</li></ul><p>What should you choose or answer?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Customer-managed key:",
   "o": [
    "A dedicated cluster linked to both",
    "A key in LAW-Corp's properties",
    "Not possible: Microsoft always manages the key",
    "A linked storage account encrypted with CMK"
   ],
   "a": 0
  },
  {
   "l": "Shared discount:",
   "o": [
    "A commitment tier on the cluster",
    "A subscription shared by both workspaces",
    "Pooled pay-as-you-go",
    "Two commitment tiers, one per workspace"
   ],
   "a": 0
  },
  {
   "l": "Objection to the cap:",
   "o": [
    "The cap never reduces the monthly bill",
    "The cap disables the workspace's alert rules",
    "The cap deletes the oldest data",
    "Collection stops until the reset"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Dedicated cluster.</b> Customer-managed keys and sharing the discount across workspaces require a Log Analytics dedicated cluster (commitment tier from 100 GB/day for the cluster), to which workspaces are linked.<b>Discount.</b> The commitment tier is then held by the cluster, for the linked workspaces' combined volume.<b>Cap.</b> When the daily cap is reached, ingestion of billable data types stops until the reset time: security events would be lost. It's for runaway protection, not a cost-reduction tool.",
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
    "*Customer-managed key",
    "A dedicated cluster linked to both"
   ],
   [
    "Shared discount",
    "A commitment tier on the cluster"
   ],
   [
    "Objection to the cap",
    "Collection stops until the reset"
   ]
  ]
 },
 "keep": "CMK and shared discount = dedicated cluster. Daily cap = collection stops, not a saving."
},
{
 "id": "D5-438",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You're creating a log search alert rule, AR-Disk, in subscription Sub-Ops. Its query reads data from LAW-Prod (subscription Sub-Prod) and LAW-Lab (subscription Sub-Lab).</p><p>Requirements:</p><ul><li>the rule must run with an identity, not depend on the account of the admin who created it;</li><li>the identity must have minimal rights;</li><li>an alert must be produced for each affected VM, but the rule must never produce more alerts than needed for 600 VMs.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Rule identity:",
   "o": [
    "None",
    "The admin's account",
    "A managed identity for the rule",
    "A service principal with a secret"
   ],
   "a": 2
  },
  {
   "l": "Identity rights:",
   "o": [
    "Owner on LAW-Prod and on LAW-Lab",
    "Log Analytics Reader on both workspaces",
    "Monitoring Reader on the Sub-Ops subscription",
    "Contributor on Sub-Prod and on Sub-Lab"
   ],
   "a": 1
  },
  {
   "l": "One alert per VM:",
   "o": [
    "A separate action group for each VM",
    "One rule per VM, created by a template",
    "One alert processing rule per VM",
    "Split by _ResourceId"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Identity.</b> Log alert rules can use a managed identity (system- or user-assigned) to run the query, instead of their creator's rights.<b>Rights.</b> The identity must be able to read the queried data: Log Analytics Reader on both workspaces is enough.<b>Splitting.</b> Splitting by dimension produces one alert per resource, within the combination limit the rule supports; it's simpler and safer than 600 rules.",
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
    "*Rule identity",
    "A managed identity for the rule"
   ],
   [
    "Identity rights",
    "Log Analytics Reader on both workspaces"
   ],
   [
    "One alert per VM",
    "Split by _ResourceId"
   ]
  ]
 },
 "keep": "Log alert: managed identity + Log Analytics Reader; split by resource."
},
{
 "id": "D5-439",
 "dom": 5,
 "type": "hot",
 "stem": "<p>Contoso wants to guarantee that all production VMs are backed up, without depending on team discipline.</p><ul><li>Every VM tagged Backup=Gold, existing or future, must be protected automatically in vault RSV-Gold, in the same region, with policy Pol-Gold.</li><li>A report must show the Sub-Prod VMs that aren't backed up, changing nothing.</li><li>Existing tagged VMs must be protected right now.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Automatic protection:",
   "o": [
    "A nightly scheduled runbook on Sub-Prod",
    "A backup alert processing rule",
    "The built-in tag-based DeployIfNotExists policy",
    "An activity log alert on VM creation"
   ],
   "a": 2
  },
  {
   "l": "Report of unprotected VMs:",
   "o": [
    "The built-in backup audit policy",
    "Sub-Prod's subscription activity log",
    "RSV-Gold's backup reports",
    "Azure Advisor recommendations for VMs"
   ],
   "a": 0
  },
  {
   "l": "Existing VMs:",
   "o": [
    "Nothing: the policy applies to existing VMs alone",
    "Restart the VMs to trigger evaluation",
    "A remediation task",
    "Remove and re-add the tag on each VM"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Automatic protection.</b> Azure Policy offers a built-in definition that configures backup for VMs with a given tag to an existing vault in the same region (DeployIfNotExists effect).<b>Report.</b> The “Azure Backup should be enabled for virtual machines” definition (Audit) lists unprotected VMs in compliance, changing nothing.<b>Existing.</b> DeployIfNotExists only fixes created or updated resources on its own; existing ones need a remediation task, which acts with the assignment's managed identity (backup and VM roles).",
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
    "*Automatic protection",
    "The built-in tag-based DeployIfNotExists policy"
   ],
   [
    "Report of unprotected VMs",
    "The built-in backup audit policy"
   ],
   [
    "Existing VMs",
    "A remediation task"
   ]
  ]
 },
 "keep": "Backup by tag = DeployIfNotExists policy + remediation task. Report = Audit policy."
},
{
 "id": "D5-440",
 "dom": 5,
 "type": "hot",
 "stem": "<p>VM-App (10.1.2.15, Subnet-App in VNet-Prod, France Central) is replicated by Site Recovery to West Europe, into VNet-DR. VNet-DR uses the same address space (10.1.0.0/16) as VNet-Prod and contains Subnet-App with the same range.</p><p>Requirements after a failover:</p><ul><li>VM-App must keep the address 10.1.2.15;</li><li>VM-App must be reachable from the internet through a public IP address, as in production;</li><li>the DNS record app.contoso.com must point to the new public IP, automatically;</li><li>during test failovers, test VMs must never conflict with production.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Address 10.1.2.15:",
   "o": [
    "Nothing: same range, same IP",
    "A DHCP reservation for VM-App in VNet-DR",
    "A peering between VNet-Prod and VNet-DR",
    "A static IP set inside Windows"
   ],
   "a": 0
  },
  {
   "l": "Public IP:",
   "o": [
    "The production public IP, moved to West Europe",
    "A public IP in the replicated item",
    "A NAT rule on VNet-DR's VPN gateway",
    "A public IP added by hand after failover"
   ],
   "a": 1
  },
  {
   "l": "DNS:",
   "o": [
    "A one-second TTL on the current record",
    "An alias record to the production IP",
    "A private contoso.com zone linked to VNet-DR",
    "A runbook in the recovery plan"
   ],
   "a": 3
  },
  {
   "l": "Tests:",
   "o": [
    "An isolated test network",
    "VNet-DR itself, already ready for recovery",
    "VNet-Prod, to test with real data",
    "A network peered with VNet-Prod for DNS"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Address.</b> When the target subnet has the same range as the source subnet, Site Recovery assigns the same private IP to the failed-over VM (if free). An IP set inside Windows would break connectivity.<b>Public IP.</b> The replicated item's network settings let you associate a (Standard) public IP with the failover VM. A public IP can't change region.<b>DNS.</b> An Azure Automation runbook inserted into the recovery plan updates the record after VM-App starts.<b>Tests.</b> An isolated test network, with the same addressing but no connection, avoids any address or name conflict with production.",
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
    "*Address 10.1.2.15",
    "Nothing: same range, same IP"
   ],
   [
    "Public IP",
    "A public IP in the replicated item"
   ],
   [
    "DNS",
    "A runbook in the recovery plan"
   ],
   [
    "Tests",
    "An isolated test network"
   ]
  ]
 },
 "keep": "Same range = same IP. Public IP in the replicated item's network settings. DNS via runbook. Isolated tests."
}
);
