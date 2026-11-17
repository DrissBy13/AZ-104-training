/* Domain 2: storage (batch J: D2-431 to D2-440, long scenarios) */
AZ.questions.push(
{
 "id": "D2-431",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The firewall of the stpartner account (GPv2, France Central) is set to “Enabled from selected networks”. Several requests are pending:</p><ul><li>partner Delta connects from its network 203.0.113.0/24; an IP rule for that range works;</li><li>the network team added an IP rule 10.20.0.0/16 to allow VNet-App (France Central), but VMs on that network are still denied;</li><li>VMs in snet-app, which has a Microsoft.Storage service endpoint, must only be able to write to stpartner and to no other Azure storage account, to limit exfiltration;</li><li>users in Asia download large files; Contoso wants their traffic to enter Microsoft's global network as early as possible.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Why the 10.20.0.0/16 rule fails:",
   "o": [
    "An IP rule must target a /24 at most",
    "IP rules require an account restart",
    "Private ranges aren't allowed as IP rules",
    "The range overlaps partner Delta's range"
   ],
   "a": 2
  },
  {
   "l": "Fix for VNet-App:",
   "o": [
    "A second, wider /8 IP rule",
    "IP rule on the VMs' public address",
    "“Trusted Azure services” exception",
    "Virtual network rule for snet-app"
   ],
   "a": 3
  },
  {
   "l": "Limit to stpartner only:",
   "o": [
    "A ReadOnly lock on other accounts",
    "A resource instance rule",
    "Service endpoint policy",
    "An NSG with the Storage service tag"
   ],
   "a": 2
  },
  {
   "l": "Users in Asia:",
   "o": [
    "Microsoft network routing",
    "A private endpoint in Asia",
    "Routing preference: Internet transit",
    "A second RA-GRS account in Asia"
   ],
   "a": 0
  }
 ],
 "expl": "<b>IP rules.</b> They only accept public addresses; private ranges (RFC 1918) aren't allowed. VMs in the same region reach the account with private addresses: use a virtual network rule with a service endpoint (or a private endpoint).<b>Service endpoint policy.</b> Attached to the subnet, it limits service endpoint traffic to the listed storage accounts. An NSG with the Storage tag allows every account.<b>Routing preference.</b> With Microsoft network routing (the default), traffic enters the Microsoft network at the point of presence closest to the user; Internet routing keeps it on the Internet as long as possible.",
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
    "*Why the 10.20.0.0/16 rule fails",
    "Private ranges aren't allowed as IP rules"
   ],
   [
    "Fix for VNet-App",
    "Virtual network rule for snet-app"
   ],
   [
    "Limit to stpartner only",
    "Service endpoint policy"
   ],
   [
    "Users in Asia",
    "Microsoft network routing"
   ]
  ]
 },
 "keep": "IP rule = public only. VNet = virtual network rule. Anti-exfiltration = service endpoint policy. Early entry = Microsoft routing."
},
{
 "id": "D2-432",
 "dom": 2,
 "type": "hot",
 "stem": "<p>A developer generates a service SAS for the invoices container of the stbilling account. The problems and requirements:</p><ul><li>the SAS was generated with a start time equal to the current time; some clients get a 403 error during the first minutes;</li><li>the client app must be able to list the container's blobs and download them, without being able to write;</li><li>the SAS must only be usable from the app's public address 198.51.100.10;</li><li>the token must never travel in clear text on the network.</li></ul><p>What should you set?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Early 403 errors:",
   "o": [
    "Start time 15 min earlier",
    "Regenerate the account key",
    "Create the SAS after DNS propagation",
    "A later expiry"
   ],
   "a": 0
  },
  {
   "l": "Permissions (sp):",
   "o": [
    "rl",
    "r",
    "rwl",
    "racwdl"
   ],
   "a": 0
  },
  {
   "l": "Allowed address:",
   "o": [
    "sr=198.51.100.10",
    "spr=198.51.100.10",
    "si=198.51.100.10",
    "sip=198.51.100.10"
   ],
   "a": 3
  },
  {
   "l": "Protocol:",
   "o": [
    "spr=https",
    "spr=https,http",
    "sv=https",
    "ss=https"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Clock skew.</b> A start time equal to the current time can fail because of slight clock differences between servers: set it about 15 minutes earlier, or omit it (the SAS is then valid immediately).<b>Permissions.</b> r = read, l = list. Without l, the client can't list the container.<b>Parameters.</b> sip restricts source IP addresses, spr the protocols (https only refuses HTTP), si references a stored access policy, sr the target resource (b, c…).",
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
    "*Early 403 errors",
    "Start time 15 min earlier"
   ],
   [
    "Permissions (sp)",
    "rl"
   ],
   [
    "Allowed address",
    "sip=198.51.100.10"
   ],
   [
    "Protocol",
    "spr=https"
   ]
  ]
 },
 "keep": "Start -15 min. List = l. IP = sip. HTTPS = spr=https."
},
{
 "id": "D2-433",
 "dom": 2,
 "type": "hot",
 "stem": "<p>On Friday, an administrator accidentally deleted the storage account stinvoices (GPv2) from the RG-Finance group; the resource group still exists. The following Monday, management asks:</p><ul><li>to recover the account, with its data;</li><li>to prevent a RG-Finance storage account from being deleted again, while letting teams change its configuration and data;</li><li>a colleague suggests a ReadOnly lock instead; you must assess the impact on apps that access data with the account key retrieved through the API;</li><li>the ststage account must be deletable by its team, which has the Owner role, despite a lock inherited from the group.</li></ul><p>What should you do, and what will happen?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Deleted account:",
   "o": [
    "Restore it (within 14 days)",
    "Not possible: deletion is permanent",
    "Recreate it with the same name, data included",
    "Open a ticket, the only option"
   ],
   "a": 0
  },
  {
   "l": "Prevent deletion:",
   "o": [
    "CanNotDelete lock on RG-Finance",
    "Remove the Contributor role from teams",
    "An Azure Audit policy",
    "ReadOnly lock on RG-Finance"
   ],
   "a": 0
  },
  {
   "l": "Effect of a ReadOnly lock:",
   "o": [
    "Blobs become immutable",
    "The account becomes read-only for everyone",
    "No effect on key access",
    "listKeys is blocked (POST request)"
   ],
   "a": 3
  },
  {
   "l": "Deleting ststage:",
   "o": [
    "Remove the group's lock first",
    "Owner is enough despite the lock",
    "Add a CanDelete lock on ststage",
    "Move the lock onto the account first"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Restore.</b> A deleted account can be restored for 14 days from the portal (or support), if no account with the same name was recreated and the resource group exists.<b>CanNotDelete.</b> It prevents deletion but allows reads and changes; inherited by the group's resources.<b>ReadOnly.</b> It blocks management operations that modify, including POST requests like listKeys: apps that retrieve the key through the API fail, and the portal can no longer use the key.<b>Locks.</b> They apply to every user, Owner included: remove the lock (Microsoft.Authorization/locks/delete permission) before deleting. There's no “CanDelete” lock.",
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
    "*Deleted account",
    "Restore it (within 14 days)"
   ],
   [
    "Prevent deletion",
    "CanNotDelete lock on RG-Finance"
   ],
   [
    "Effect of a ReadOnly lock",
    "listKeys is blocked (POST request)"
   ],
   [
    "Deleting ststage",
    "Remove the group's lock first"
   ]
  ]
 },
 "keep": "Deleted account = 14 days. No deletion = CanNotDelete. ReadOnly = blocks listKeys. Lock = applies to Owner too."
},
{
 "id": "D2-434",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam wants to trigger automatic processing each time a PDF invoice is dropped in the stinbox account (GPv2):</p><ul><li>only blobs created in the incoming container must trigger processing, not those in other containers nor deletions;</li><li>only .pdf files must be considered;</li><li>the processing is an Azure function that must be called in push mode, without polling the account;</li><li>if the function is unavailable for an hour, no event must be lost.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Mechanism:",
   "o": [
    "An Event Grid subscription (push)",
    "A lifecycle rule on incoming",
    "The change feed read every minute",
    "A metric alert on Transactions"
   ],
   "a": 0
  },
  {
   "l": "Event type:",
   "o": [
    "Microsoft.Resources.ResourceWriteSuccess",
    "Microsoft.Storage.BlobDeleted",
    "Microsoft.Storage.BlobTierChanged",
    "Microsoft.Storage.BlobCreated"
   ],
   "a": 3
  },
  {
   "l": "Subject filter:",
   "o": [
    "Begins: …/containers/incoming/; ends: .pdf",
    "Begins: /incoming/*.pdf, no end filter",
    "Contains: stinbox/incoming; ends: *.pdf",
    "Begins: incoming/; ends: pdf (no dot)"
   ],
   "a": 0
  },
  {
   "l": "One-hour outage:",
   "o": [
    "Nothing: events are lost after 5 min",
    "Retries + dead-lettering",
    "The change feed alone",
    "A second standby function"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Event Grid.</b> GPv2 accounts publish events to a system topic; a subscription pushes events to a handler (function, webhook, queue…).<b>Filters.</b> BlobCreated for creations; the subject filter uses the full path /blobServices/default/containers/incoming/blobs/…: “begins with” the container, “ends with” .pdf.<b>Reliability.</b> Event Grid retries for 24 hours by default (adjustable retry policy); the dead-letter destination (a storage container) keeps undelivered events.",
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
    "*Mechanism",
    "An Event Grid subscription (push)"
   ],
   [
    "Event type",
    "Microsoft.Storage.BlobCreated"
   ],
   [
    "Subject filter",
    "Begins: …/containers/incoming/; ends: .pdf"
   ],
   [
    "One-hour outage",
    "Retries + dead-lettering"
   ]
  ]
 },
 "keep": "Push = Event Grid. Creation = BlobCreated. Filter = full path + suffix. Reliability = retries + dead-letter."
},
{
 "id": "D2-435",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso still has old storage accounts:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Type</th><th>Need</th></tr><tr><td>stlegacy1</td><td>General-purpose v1 (GPv1)</td><td>Use access tiers and lifecycle management</td></tr><tr><td>stlegacy2</td><td>BlobStorage (legacy type)</td><td>Add Azure Files shares in the same account</td></tr><tr><td>stlegacy3</td><td>GPv2, default tier Hot</td><td>Most blobs have no explicit tier; the team wants to switch the account's default tier to Cool</td></tr></table></div><p>Before moving stlegacy1 to GPv2, the team wants to know whether the operation is reversible and whether it causes downtime.</p><p>What should you do, and what will happen?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "stlegacy1:",
   "o": [
    "Failover to the secondary region",
    "In-place upgrade to GPv2",
    "New GPv2 account + AzCopy copy",
    "Conversion to BlobStorage"
   ],
   "a": 1
  },
  {
   "l": "Reversibility and downtime:",
   "o": [
    "Reversible for 14 days",
    "Irreversible, with downtime",
    "Reversible, no downtime",
    "Irreversible, no downtime"
   ],
   "a": 3
  },
  {
   "l": "stlegacy2:",
   "o": [
    "Upgrade to GPv2",
    "Not possible with this type",
    "Create a linked FileStorage account",
    "Enable Azure Files in the account"
   ],
   "a": 0
  },
  {
   "l": "stlegacy3:",
   "o": [
    "All blobs, even explicit ones, move to cool",
    "Only new blobs will be cool",
    "Inferred blobs move to cool (charged)",
    "No effect on current billing"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Upgrade.</b> GPv1 and BlobStorage are upgraded in place to GPv2, with no downtime or data loss; the operation is irreversible. GPv2 supports access tiers, lifecycle and every service (Blob, Files, Queue, Table).<b>Default tier.</b> Blobs with no explicit tier inherit (“inferred” tier) the account's default tier: changing it moves them all to the new tier, with the matching write or read charges.",
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
    "*stlegacy1",
    "In-place upgrade to GPv2"
   ],
   [
    "Reversibility and downtime",
    "Irreversible, no downtime"
   ],
   [
    "stlegacy2",
    "Upgrade to GPv2"
   ],
   [
    "stlegacy3",
    "Inferred blobs move to cool (charged)"
   ]
  ]
 },
 "keep": "GPv1/BlobStorage → GPv2: in place, irreversible, no downtime. Default tier = inferred blobs, with charges."
},
{
 "id": "D2-436",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam's security team is hardening the SMB settings of the Azure Files shares in the stsecfiles account:</p><ul><li>only SMB versions that encrypt data in transit must be accepted, with the strongest channel encryption algorithm;</li><li>Kerberos tickets must use AES-256 and NTLMv2 must be refused;</li><li>an old Windows Server 2008 R2 server (SMB 2.1) at the Nantes branch currently mounts a share from the branch, over the Internet;</li><li>a Windows Server 2022 VM in the same Azure region mounts the same share.</li></ul><p>Which setting should you choose, and what will the effect be?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "SMB profile:",
   "o": [
    "Maximum security",
    "None: can't be configured",
    "Custom, SMB 2.1 included",
    "Maximum compatibility"
   ],
   "a": 0
  },
  {
   "l": "Channel encryption:",
   "o": [
    "AES-256-GCM",
    "AES-128-CCM",
    "RC4-HMAC",
    "None"
   ],
   "a": 0
  },
  {
   "l": "Nantes server:",
   "o": [
    "Can no longer mount the share",
    "Falls back to NFS by itself",
    "Keeps working unchanged",
    "Mounts the share read-only"
   ],
   "a": 0
  },
  {
   "l": "Windows Server 2022 VM:",
   "o": [
    "Must go through a VPN",
    "Must use NTLMv2",
    "Can no longer mount the share",
    "Keeps working with SMB 3.1.1"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Maximum security.</b> This profile only accepts SMB 3.1.1, AES-256-GCM channel encryption, Kerberos (AES-256 tickets) and refuses NTLMv2.<b>SMB 2.1.</b> It doesn't encrypt data in transit: it's only usable from the same Azure region and without “Secure transfer required”. From the Internet, it already couldn't mount the share with secure transfer; with the maximum profile, it's refused in every case.<b>Windows Server 2022.</b> It supports SMB 3.1.1 and AES-256-GCM.",
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
    "*SMB profile",
    "Maximum security"
   ],
   [
    "Channel encryption",
    "AES-256-GCM"
   ],
   [
    "Nantes server",
    "Can no longer mount the share"
   ],
   [
    "Windows Server 2022 VM",
    "Keeps working with SMB 3.1.1"
   ]
  ]
 },
 "keep": "Maximum security = SMB 3.1.1, AES-256-GCM, Kerberos AES-256, no NTLMv2. SMB 2.1 = refused."
},
{
 "id": "D2-437",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso's finance department asks to reduce the storage bill of the stmedia account (GPv2, LRS, default tier Hot, 800 TB). The analysis shows:</p><ul><li>600 TB of videos are never read again after 90 days, but must be kept 7 years;</li><li>150 TB of thumbnails are read constantly;</li><li>thousands of blob snapshots created by an old script are no longer useful;</li><li>usage of 150 TB of Hot thumbnails will stay stable for at least three years.</li></ul><p>What should you recommend?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Videos:",
   "o": [
    "Move the account to Premium",
    "Switch the account default to Cool",
    "Lifecycle: Archive after 90 days",
    "Delete videos after 90 days"
   ],
   "a": 2
  },
  {
   "l": "Thumbnails:",
   "o": [
    "Stay Hot",
    "Move to Cold",
    "Move to Archive",
    "Move to Cool"
   ],
   "a": 0
  },
  {
   "l": "Snapshots:",
   "o": [
    "Enable blob soft delete",
    "Move the account to ZRS",
    "Enable blob versioning",
    "A lifecycle rule"
   ],
   "a": 3
  },
  {
   "l": "Stable usage for three years:",
   "o": [
    "VM reserved instances",
    "Storage reserved capacity (3 years)",
    "A compute savings plan",
    "A Dev/Test subscription discount"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Archive.</b> Data never read again but kept for a long time goes to Archive through a lifecycle rule (the account is LRS, which allows it).<b>Thumbnails.</b> Constantly read data costs less in Hot: cooler tiers charge more for reads.<b>Snapshots.</b> A lifecycle rule can delete snapshots past a given age (action on snapshot).<b>Reserved capacity.</b> Azure Storage offers one- or three-year capacity reservations for blobs (in 100 TB or 1 PB units), with a storage discount.",
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
    "*Videos",
    "Lifecycle: Archive after 90 days"
   ],
   [
    "Thumbnails",
    "Stay Hot"
   ],
   [
    "Snapshots",
    "A lifecycle rule"
   ],
   [
    "Stable usage for three years",
    "Storage reserved capacity (3 years)"
   ]
  ]
 },
 "keep": "Never read = Archive via lifecycle. Constantly read = Hot. Snapshots = lifecycle. Stable = reserved capacity."
},
{
 "id": "D2-438",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam's data governance team needs several pieces of information about the stlake2 account (GPv2, 400 million blobs):</p><ul><li>every week, a list of all blobs with their size, access tier and last modified date, as a file usable by Synapse, without a script walking the account;</li><li>an ordered, durable log of all blob creations, changes and deletions, that the team can reread in six months;</li><li>the capacity breakdown by access tier, as a chart in the portal.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Weekly list:",
   "o": [
    "azcopy list run every week",
    "Blob inventory (CSV or Parquet)",
    "A StorageRead diagnostic setting",
    "The account change feed"
   ],
   "a": 1
  },
  {
   "l": "Change log:",
   "o": [
    "Change feed",
    "Activity log",
    "Transactions metric",
    "Blob inventory"
   ],
   "a": 0
  },
  {
   "l": "Log retention:",
   "o": [
    "Fixed at 90 days, not changeable",
    "Fixed at 7 days, like soft delete",
    "Configurable or unlimited",
    "Limited to 30 days at most"
   ],
   "a": 2
  },
  {
   "l": "Capacity by tier:",
   "o": [
    "Azure Advisor recommendations",
    "Cost Management cost analysis",
    "Activity log filtered by tier",
    "Blob Capacity metric, by Tier"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Inventory.</b> Blob inventory produces a daily or weekly CSV or Parquet report of blobs (size, tier, dates…) in a container, without walking the account yourself.<b>Change feed.</b> It records blob and metadata changes in an ordered, durable, read-only way, in the $blobchangefeed container; its retention is configurable or unlimited. The activity log only has management operations.<b>Metrics.</b> The Blob Capacity metric splits by the Tier (and BlobType) dimension in Metrics Explorer.",
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
    "*Weekly list",
    "Blob inventory (CSV or Parquet)"
   ],
   [
    "Change log",
    "Change feed"
   ],
   [
    "Log retention",
    "Configurable or unlimited"
   ],
   [
    "Capacity by tier",
    "Blob Capacity metric, by Tier"
   ]
  ]
 },
 "keep": "Blob list = inventory. Change log = change feed. Capacity by tier = Blob Capacity / Tier."
},
{
 "id": "D2-439",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso is designing storage for a new order management app and wants the most suitable Azure Storage service for each need:</p><ul><li>Need 1: the web server drops messages that processing workers will read asynchronously; each message is under 64 KB and millions of messages may pile up;</li><li>Need 2: store millions of small entities (customer ID, preferences) accessed by key, with a flexible schema and minimal cost;</li><li>Need 3: store PDF invoices reachable by HTTPS URL;</li><li>Need 4: a legacy app that writes to a mapped network drive (Z:) with file locks.</li></ul><p>Which service should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Need 1:",
   "o": [
    "Append blobs, one per worker",
    "Table storage with one entity per message",
    "Azure Files with one file per message",
    "Queue storage (Azure Queues)"
   ],
   "a": 3
  },
  {
   "l": "Need 2:",
   "o": [
    "Queue storage",
    "Block blobs",
    "Table storage",
    "Managed disks"
   ],
   "a": 2
  },
  {
   "l": "Need 3:",
   "o": [
    "Managed disks",
    "Block blobs",
    "Page blobs",
    "Table storage"
   ],
   "a": 1
  },
  {
   "l": "Need 4:",
   "o": [
    "Azure Files (SMB)",
    "Queue storage",
    "Table storage",
    "Blobs with BlobFuse"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Queue.</b> Queue storage handles messages up to 64 KB, in very large numbers, to decouple components.<b>Table.</b> A schemaless NoSQL key/attribute store, low cost, suited to small entities accessed by key (PartitionKey, RowKey).<b>Blob.</b> Block blobs store files reachable by HTTPS URL.<b>Azure Files.</b> SMB shares mountable as a network drive, with file locking; BlobFuse doesn't provide the same semantics.",
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
    "*Need 1",
    "Queue storage (Azure Queues)"
   ],
   [
    "Need 2",
    "Table storage"
   ],
   [
    "Need 3",
    "Block blobs"
   ],
   [
    "Need 4",
    "Azure Files (SMB)"
   ]
  ]
 },
 "keep": "Messages = Queue. Entities by key = Table. Files by URL = Blob. Network drive = Azure Files."
},
{
 "id": "D2-440",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You must create the stcorp2026 account with Azure CLI. The requirements:</p><ul><li>cross-zone redundancy in the primary region, replication to the paired region and read access in the secondary region at any time;</li><li>general-purpose v2;</li><li>default access tier: Cool;</li><li>hierarchical namespace enabled;</li><li>no anonymous blob access possible, whatever the container settings.</li></ul><p>Complete the command:</p><code>az storage account create -n stcorp2026 -g RG-Data -l francecentral --sku [1] --kind [2] --access-tier Cool --enable-hierarchical-namespace [3] --allow-blob-public-access [4]</code><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "[1]:",
   "o": [
    "Standard_RAGZRS",
    "Standard_GZRS",
    "Standard_RAGRS",
    "Premium_ZRS"
   ],
   "a": 0
  },
  {
   "l": "[2]:",
   "o": [
    "Storage",
    "BlobStorage",
    "BlockBlobStorage",
    "StorageV2"
   ],
   "a": 3
  },
  {
   "l": "[3]:",
   "o": [
    "true",
    "false",
    "enabled",
    "1"
   ],
   "a": 0
  },
  {
   "l": "[4]:",
   "o": [
    "false",
    "true",
    "disabled",
    "none"
   ],
   "a": 0
  }
 ],
 "expl": "<b>SKU.</b> RA-GZRS = zones in the primary region + geo-replication + secondary read: Standard_RAGZRS. Standard_GZRS doesn't offer secondary reads without failover.<b>Kind.</b> StorageV2 is GPv2; Storage is the old GPv1.<b>Parameters.</b> --enable-hierarchical-namespace true enables the hierarchical namespace; --allow-blob-public-access false forbids anonymous access at the account level, whatever the containers' access level.",
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
    "*[1]",
    "Standard_RAGZRS"
   ],
   [
    "[2]",
    "StorageV2"
   ],
   [
    "[3]",
    "true"
   ],
   [
    "[4]",
    "false"
   ]
  ]
 },
 "keep": "Standard_RAGZRS, StorageV2, HNS true, public access false."
}
);
