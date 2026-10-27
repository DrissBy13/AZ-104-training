/* Domain 2: storage (batch B : D2-010 to D2-069) */
AZ.questions.push(
{
 "id": "D2-010",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to create a storage account that hosts <b>Premium</b> Azure file shares with the NFS protocol.</p><p>Which type of storage account should you create?</p>",
 "opts": [
  "Premium, File shares account type (FileStorage)",
  "Premium, Block blobs account type",
  "Premium, Page blobs account type",
  "Standard general-purpose v2"
 ],
 "ans": 0,
 "expl": "<p><b>Premium</b> file shares (SSD) only exist in a <b>Premium File shares</b> account (FileStorage). It's also the only type that supports <b>NFS</b> shares.</p><ul><li><b>Standard general-purpose v2</b>: standard SMB shares (HDD), no NFS for Azure Files.</li><li><b>Premium block blobs</b>: low-latency blobs, no file shares.</li><li><b>Premium page blobs</b>: mostly for unmanaged disks.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "*Basics",
   "Advanced"
  ],
  "rows": [
   [
    "*Performance",
    "Premium"
   ],
   [
    "*Premium account type",
    "File shares"
   ],
   [
    "Redundancy",
    "LRS or ZRS"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Premium or NFS shares = Premium account of type File shares (FileStorage)."
},
{
 "id": "D2-011",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate storage account type for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Account types",
 "srcs": [
  "Standard general-purpose v2",
  "Premium block blobs",
  "Premium file shares",
  "Premium page blobs"
 ],
 "tgtHead": [
  "Need",
  "Account type"
 ],
 "tgts": [
  {
   "l": "Store blobs, queues, and tables, with the Hot, Cool, and Archive tiers",
   "a": 0
  },
  {
   "l": "Write millions of small blobs with very low latency (IoT analytics)",
   "a": 1
  },
  {
   "l": "Host a high-performance SMB share for SQL Server databases",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Standard general-purpose v2</b>: the default type. It supports every service (blobs, files, queues, tables) and the access tiers, including Archive.</li><li><b>Premium block blobs</b>: SSD, low latency, ideal for many transactions on small objects. No access tiers.</li><li><b>Premium file shares</b>: SMB or NFS shares on SSD.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "Performance: Standard",
    "General-purpose v2 (all services, access tiers)"
   ],
   [
    "*Performance: Premium",
    "Block blobs · File shares · Page blobs"
   ]
  ]
 },
 "keep": "Standard v2 = everything + tiers. Premium block blobs = fast small blobs. Premium file shares = SSD SMB/NFS."
},
{
 "id": "D2-012",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to name a new storage account.</p><p>Which name is valid?</p>",
 "opts": [
  "st",
  "storageprod01",
  "storage_prod_01",
  "Storage-Prod01"
 ],
 "ans": 1,
 "expl": "<p>A storage account name must have <b>3 to 24 characters</b>, only <b>lowercase letters and numbers</b>, and be <b>unique across all of Azure</b>, because it's part of the URL (<code>storageprod01.blob.core.windows.net</code>).</p><p>Uppercase letters, hyphens, and underscores are forbidden. “st” has only 2 characters.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*Storage account name",
    "storageprod01"
   ],
   [
    "Rule",
    "3 to 24 characters, lowercase and numbers, unique in Azure"
   ]
  ]
 },
 "keep": "Account name: 3-24 characters, lowercase + numbers, globally unique (it's in the URL)."
},
{
 "id": "D2-013",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate redundancy option for each requirement. Each solution must be as cheap as possible.</p><p>To answer, drag the appropriate redundancy to each requirement. Each redundancy may be used once, more than once, or not at all.</p>",
 "srcLabel": "Redundancy",
 "srcs": [
  "LRS",
  "ZRS",
  "GRS",
  "RA-GRS",
  "GZRS"
 ],
 "tgtHead": [
  "Requirement",
  "Redundancy"
 ],
 "tgts": [
  {
   "l": "Withstand a datacenter failure, with no copy in another region",
   "a": 1
  },
  {
   "l": "Read data in the secondary region even without a failover",
   "a": 3
  },
  {
   "l": "Test data that's easy to recreate",
   "a": 0
  },
  {
   "l": "Withstand the failure of a zone and of an entire region",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>LRS</b>: 3 copies in a single datacenter. The cheapest.</li><li><b>ZRS</b>: 3 copies across 3 availability zones in the region: withstands losing a zone (a datacenter).</li><li><b>GRS</b>: LRS + asynchronous copy to the paired region. The secondary is readable only after a failover.</li><li><b>RA-GRS</b>: GRS with permanent <b>read access</b> to the secondary.</li><li><b>GZRS</b>: ZRS in the primary region + a copy in the paired region.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Redundancy",
  "menu": [
   "Overview",
   "*Redundancy"
  ],
  "rows": [
   [
    "LRS",
    "3 copies, 1 datacenter"
   ],
   [
    "ZRS",
    "3 zones"
   ],
   [
    "GRS / RA-GRS",
    "+ paired region (RA = read)"
   ],
   [
    "*GZRS",
    "3 zones + paired region"
   ]
  ]
 },
 "keep": "Cheapest that fits: LRS < ZRS < GRS < RA-GRS ≈ GZRS < RA-GZRS."
},
{
 "id": "D2-014",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>The storage account storage2 uses <b>RA-GRS</b> redundancy in France Central.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Data is copied synchronously to the secondary region.",
   "a": 1
  },
  {
   "l": "An application can read blobs through the endpoint storage2-secondary.blob.core.windows.net.",
   "a": 0
  },
  {
   "l": "The Last sync time property shows how far the secondary is up to date.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Synchronous: No.</b> The copy to the secondary region is <b>asynchronous</b>: the latest writes may be missing after a disaster. Within the primary region, the 3 LRS copies are synchronous.</li><li><b>Secondary endpoint: Yes.</b> With RA-GRS, you read at the <code>&lt;account&gt;-secondary</code> address.</li><li><b>Last sync time: Yes.</b> All writes before it are available in the secondary.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage2"
  ],
  "title": "storage2 | Redundancy",
  "menu": [
   "Overview",
   "*Redundancy"
  ],
  "rows": [
   [
    "Redundancy",
    "RA-GRS"
   ],
   [
    "*Secondary endpoint",
    "storage2-secondary.blob.core.windows.net"
   ],
   [
    "*Last sync time",
    "2026-10-27 09:42 UTC"
   ]
  ]
 },
 "keep": "Copy to the secondary is asynchronous; Last sync time = consistency point."
},
{
 "id": "D2-015",
 "dom": 2,
 "type": "single",
 "stem": "<p>The storage account storage3 uses GRS redundancy. The primary region suffers a prolonged outage. You start a customer-managed (unplanned) <b>geo-failover</b>.</p><p>What is storage3's redundancy right after the failover?</p>",
 "opts": [
  "ZRS, in the new primary region",
  "RA-GRS, in the former primary region",
  "LRS, in the new primary region",
  "GRS, in the new primary region"
 ],
 "ans": 2,
 "expl": "<p>After an unplanned failover, the secondary region becomes primary and the account is configured as <b>LRS</b>. It has no geo copy until you reconfigure GRS (which starts a full copy to a new secondary).</p><p>Key points: the failover can cause <b>loss of data</b> written after the last sync time, and you should only start it if the outage lasts.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage3"
  ],
  "title": "storage3 | Redundancy",
  "menu": [
   "Overview",
   "*Redundancy"
  ],
  "rows": [
   [
    "*Prepare for failover",
    "Type: unplanned (customer-managed)"
   ],
   [
    "After failover",
    "LRS in the former secondary region"
   ]
  ],
  "btn": "Prepare for failover"
 },
 "keep": "After an unplanned failover: LRS in the new primary; reconfigure GRS afterward."
},
{
 "id": "D2-016",
 "dom": 2,
 "type": "single",
 "stem": "<p>The storage account storage4 uses LRS redundancy. You need to switch to <b>ZRS</b> without interrupting access to the data.</p><p>What should you do?</p>",
 "opts": [
  "Change the redundancy in Configuration, as when switching to GRS",
  "Enable geo-replication in the firewall",
  "Delete and recreate the account as ZRS",
  "Request a conversion to ZRS (Microsoft-managed conversion or started from the portal)"
 ],
 "ans": 3,
 "expl": "<p>Switching from LRS to GRS is a single click in <b>Configuration</b>. But switching to <b>ZRS</b> changes the physical layout in the region: it needs a <b>conversion</b> (started from the portal's Redundancy page or through a support request), done without downtime.</p><p>You can also migrate manually (new account + copy with AzCopy), but that requires downtime. The firewall has nothing to do with redundancy.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage4"
  ],
  "title": "storage4 | Redundancy",
  "menu": [
   "Overview",
   "*Redundancy"
  ],
  "rows": [
   [
    "Current redundancy",
    "LRS"
   ],
   [
    "*New redundancy",
    "ZRS (conversion, no downtime)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Adding G (geo) = simple change. Adding Z (zones) = conversion."
},
{
 "id": "D2-017",
 "dom": 2,
 "type": "single",
 "stem": "<p>You create a <b>Premium block blobs</b> storage account.</p><p>Which redundancy options are available?</p>",
 "opts": [
  "LRS and ZRS only",
  "LRS, ZRS, GRS, and GZRS",
  "All, including RA-GZRS",
  "GRS and RA-GRS only"
 ],
 "ans": 0,
 "expl": "<p><b>Premium</b> accounts (block blobs, file shares, page blobs) support only <b>LRS and ZRS</b>. Geo-redundancy (GRS, GZRS, and their RA- versions) is reserved for Standard general-purpose v2 accounts.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "Performance",
    "Premium"
   ],
   [
    "*Redundancy offered",
    "LRS · ZRS"
   ]
  ]
 },
 "keep": "Premium = LRS or ZRS only; geo-redundancy is Standard only."
},
{
 "id": "D2-018",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to store 10-year legal archives that nobody accesses, at the lowest cost. Waiting several hours to read them again is acceptable.</p><p>Which access tier should you use?</p>",
 "opts": [
  "Cool",
  "Archive",
  "Hot",
  "Cold"
 ],
 "ans": 1,
 "expl": "<p>The <b>Archive</b> tier has the lowest storage cost. In exchange, data is <b>offline</b>: you must rehydrate it (up to 15 hours at standard priority) before reading, and reading is expensive. Minimum duration: 180 days.</p><ul><li><b>Hot</b>: frequently used data. Most expensive storage, cheapest access.</li><li><b>Cool</b>: infrequent access, 30-day minimum.</li><li><b>Cold</b>: rare access, 90-day minimum, but still online.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "archives"
  ],
  "title": "Change tier",
  "rows": [
   [
    "*Access tier",
    "Archive"
   ],
   [
    "Reading",
    "After rehydration (hours)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Cheapest for data you never read = Archive (offline, 180-day minimum)."
},
{
 "id": "D2-019",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You manage blob access tiers.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Minimum billed storage duration for the Cool tier:",
   "o": [
    "30 days",
    "90 days",
    "180 days"
   ],
   "a": 0
  },
  {
   "l": "Minimum billed storage duration for the Cold tier:",
   "o": [
    "30 days",
    "90 days",
    "180 days"
   ],
   "a": 1
  },
  {
   "l": "Minimum billed storage duration for the Archive tier:",
   "o": [
    "30 days",
    "90 days",
    "180 days"
   ],
   "a": 2
  }
 ],
 "expl": "<p>If a blob leaves a tier (deletion or tier change) before the minimum duration, an early deletion fee is billed for the remaining days, prorated.</p><ul><li><b>Cool: 30 days.</b></li><li><b>Cold: 90 days.</b></li><li><b>Archive: 180 days.</b></li></ul><p>The Hot tier has no minimum duration.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers"
  ],
  "title": "Access tiers",
  "rows": [
   [
    "Hot",
    "No minimum"
   ],
   [
    "*Cool",
    "30 days"
   ],
   [
    "*Cold",
    "90 days"
   ],
   [
    "*Archive",
    "180 days"
   ]
  ]
 },
 "keep": "30 / 90 / 180 days: know them by heart."
},
{
 "id": "D2-020",
 "dom": 2,
 "type": "single",
 "stem": "<p>A 2 GB blob is in the Archive tier. An auditor needs to read it within the hour.</p><p>What should you do?</p>",
 "opts": [
  "Rehydrate it to the Hot tier with Standard priority",
  "Copy it to another account in the Archive tier",
  "Rehydrate it to the Hot tier with High priority",
  "Read it directly: it's accessible read-only"
 ],
 "ans": 2,
 "expl": "<p>An archived blob is <b>offline</b>: you can neither read nor download it. You must <b>rehydrate</b> it to an online tier (Hot, Cool, or Cold), either by changing its tier or by copying it to a new blob.</p><p><b>High</b> priority rehydrates objects under 10 GB in less than an hour. <b>Standard</b> priority can take up to 15 hours. A copy that stays in Archive is useless.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "audit"
  ],
  "title": "Change tier",
  "rows": [
   [
    "Access tier",
    "Hot"
   ],
   [
    "*Rehydrate priority",
    "High (< 1 h for < 10 GB)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Archive = offline; Standard rehydration (≤ 15 h) or High (< 1 h)."
},
{
 "id": "D2-021",
 "dom": 2,
 "type": "single",
 "stem": "<p>Blobs in the logs container must move to the Cool tier 30 days after their last modification, to the Archive tier after 90 days, and be deleted after 365 days, automatically.</p><p>What should you configure?</p>",
 "opts": [
  "Blob soft delete",
  "An immutability policy",
  "Object replication",
  "A lifecycle management policy"
 ],
 "ans": 3,
 "expl": "<p><b>Lifecycle management</b> applies rules (filtered by prefix, blob type, or index tag) that move blobs between tiers or delete them based on age: days since modification, creation, or last access.</p><p>Immutability prevents modification and deletion. Soft delete keeps deleted blobs. Object replication copies to another account.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Lifecycle management",
  "menu": [
   "Data protection",
   "*Lifecycle management"
  ],
  "rows": [
   [
    "Filter",
    "Prefix logs/"
   ],
   [
    "*Last modified more than 30 days ago",
    "Move to cool storage"
   ],
   [
    "*More than 90 days",
    "Move to archive storage"
   ],
   [
    "*More than 365 days",
    "Delete the blob"
   ]
  ],
  "btn": "Add a rule"
 },
 "keep": "Move or delete based on age = lifecycle management."
},
{
 "id": "D2-022",
 "dom": 2,
 "type": "single",
 "stem": "<p>You want a lifecycle rule to move to the Cool tier the blobs that haven't been <b>read</b> for 60 days, even if they were created long ago.</p><p>Which prerequisite should you enable on the storage account?</p>",
 "opts": [
  "Last access time tracking",
  "Hierarchical namespace",
  "Change feed",
  "Blob versioning"
 ],
 "ans": 0,
 "expl": "<p>The <code>daysAfterLastAccessTimeGreaterThan</code> condition relies on the last access time, which is only recorded if <b>last access time tracking</b> is enabled on the account.</p><p>Versioning, change feed, and hierarchical namespace don't provide this information.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Lifecycle management",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "*Enable access tracking",
    "Checked"
   ],
   [
    "Condition",
    "Last accessed more than 60 days ago"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Rule on “last access” = enable last access time tracking."
},
{
 "id": "D2-023",
 "dom": 2,
 "type": "single",
 "stem": "<p>You just created a lifecycle management policy that deletes blobs older than 30 days. An hour later, the old blobs are still there.</p><p>Why?</p>",
 "opts": [
  "The storage account must be restarted",
  "The policy runs once a day and can take up to 24 hours to apply the first time",
  "Soft delete prevents the policy from working",
  "Policies apply only to new blobs"
 ],
 "ans": 1,
 "expl": "<p>The lifecycle engine processes policies <b>once a day</b>. After a policy is created or changed, allow up to 24 hours for it to take effect, and then processing itself can take time depending on the number of blobs.</p><p>A storage account can't be restarted. The policy also applies to existing blobs. Soft delete keeps deleted blobs for its retention period, but doesn't prevent the policy.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Lifecycle management",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "Rule",
    "delete-30d · Enabled"
   ],
   [
    "*Run",
    "Once a day, up to 24 h before the first effect"
   ]
  ]
 },
 "keep": "Lifecycle: daily processing, up to 24 h before the first effect."
},
{
 "id": "D2-024",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to be able to recover blobs in storage5 that were <b>overwritten</b> or <b>deleted</b> by mistake in the last 30 days.</p><p>Which <b>two</b> features should you enable?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Blob soft delete with 30-day retention",
  "Immutability policy with legal hold",
  "Blob versioning",
  "Object replication"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<ul><li><b>Versioning: yes.</b> Each overwrite keeps the previous version: you can restore it.</li><li><b>Blob soft delete: yes.</b> A deleted blob is kept for 30 days and can be restored.</li><li><b>Legal hold: no.</b> It prevents any modification, which would block normal activity.</li><li><b>Object replication: no.</b> It copies to another account, and a deletion would replicate too.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage5"
  ],
  "title": "storage5 | Data protection",
  "menu": [
   "*Data protection"
  ],
  "rows": [
   [
    "*Blob soft delete",
    "30 days"
   ],
   [
    "*Blob versioning",
    "Enabled"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Overwritten = versions; deleted = soft delete."
},
{
 "id": "D2-025",
 "dom": 2,
 "type": "single",
 "stem": "<p>A user deleted the projects container from storage6, with all its blobs, 3 days ago. <b>Blob</b> soft delete is enabled with 7 days of retention, but <b>container</b> soft delete isn't.</p><p>Can you recover the data?</p>",
 "opts": [
  "Yes, with point-in-time restore",
  "Yes, by restoring the container from the list of deleted containers",
  "No, because container soft delete wasn't enabled",
  "Yes, by restoring each deleted blob"
 ],
 "ans": 2,
 "expl": "<p><b>Blob</b> soft delete protects blobs deleted one by one. When an entire <b>container</b> is deleted, only <b>container</b> soft delete lets you restore it. It wasn't enabled: the data is lost.</p><p>Point-in-time restore doesn't restore a deleted container either. Best practice: enable both soft deletes, and a lock on the account against deleting the account itself.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage6"
  ],
  "title": "storage6 | Data protection",
  "menu": [
   "*Data protection"
  ],
  "rows": [
   [
    "Blob soft delete",
    "7 days"
   ],
   [
    "*Container soft delete",
    "Disabled"
   ]
  ]
 },
 "keep": "Deleted container = only container soft delete can save it."
},
{
 "id": "D2-026",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to be able to put <b>all</b> block blobs of a storage account back in the state they were in at a specific date within the last 14 days, after corruption by an application.</p><p>Which feature should you use?</p>",
 "opts": [
  "Geo-failover",
  "Manual blob snapshots",
  "Object replication",
  "Point-in-time restore for containers"
 ],
 "ans": 3,
 "expl": "<p><b>Point-in-time restore</b> puts containers (or blob ranges) of block blobs back in their state at a chosen date. It requires <b>versioning</b>, <b>change feed</b>, and <b>blob soft delete</b>, with a restore period shorter than the soft delete retention.</p><p>Manual snapshots require blob-by-blob management. Replication and failover would copy the corruption too.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Data protection",
  "menu": [
   "*Data protection"
  ],
  "rows": [
   [
    "*Point-in-time restore",
    "Enabled · 14 days"
   ],
   [
    "Prerequisites",
    "Versioning, change feed, soft delete"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Returning a whole account to a date = point-in-time restore (block blobs)."
},
{
 "id": "D2-027",
 "dom": 2,
 "type": "single",
 "stem": "<p>A regulator requires that financial reports can be neither modified nor deleted for 7 years, even by an administrator. The rule itself must not be shortenable.</p><p>What should you configure on the container?</p>",
 "opts": [
  "A 7-year time-based retention policy, then lock it",
  "A legal hold",
  "An unlocked time-based retention policy",
  "A CanNotDelete lock on the account"
 ],
 "ans": 0,
 "expl": "<p>A <b>time-based retention policy</b> makes blobs immutable (WORM: write once, read many) for the chosen period. Once <b>locked</b>, it can no longer be deleted or shortened; it can only be extended.</p><ul><li>A <b>legal hold</b> has no duration: it lasts until it's removed.</li><li>An <b>unlocked</b> policy can be changed or deleted: it's for testing.</li><li>A <b>lock</b> protects the account, not the data.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "finance"
  ],
  "title": "finance | Access policy",
  "menu": [
   "*Access policy"
  ],
  "rows": [
   [
    "*Time-based retention",
    "2,555 days (7 years)"
   ],
   [
    "*State",
    "Locked"
   ]
  ],
  "btn": "Lock policy"
 },
 "keep": "Locked retention: can't be deleted or shortened, even by an admin."
},
{
 "id": "D2-028",
 "dom": 2,
 "type": "single",
 "stem": "<p>Documents for a court case must be protected against any modification or deletion <b>until the end of the trial</b>, whose date is unknown.</p><p>What should you configure?</p>",
 "opts": [
  "A 10-year time-based retention policy",
  "A legal hold with a tag",
  "Soft delete with 365 days",
  "A Read-only lock"
 ],
 "ans": 1,
 "expl": "<p>A <b>legal hold</b> makes data immutable as long as it's in place, with no fixed duration. You identify it with one or more tags (for example the case number) and remove it at the end of the trial.</p><p>A 10-year retention would block too long or not long enough. Soft delete doesn't prevent modification. A lock doesn't protect data.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "case"
  ],
  "title": "case | Access policy",
  "menu": [
   "*Access policy"
  ],
  "rows": [
   [
    "*Legal hold",
    "Tag: Case2026"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Unknown end = legal hold; remove it at the end."
},
{
 "id": "D2-029",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to automatically copy new blobs from the src container of the storageA account (France Central) to the dst container of the storageB account (West Europe).</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Enable versioning on storageA and storageB",
  "Enable change feed on storageA",
  "Create the object replication policy from src to dst",
  "Enable hierarchical namespace on storageB",
  "Configure storageA as RA-GRS"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p><b>Object replication</b> requires <b>versioning</b> on both accounts and <b>change feed</b> on the source account. You then create the policy with the container pairs.</p><p>Hierarchical namespace is <b>not</b> supported by object replication. RA-GRS copies to the paired region, with no choice of target account.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storageA"
  ],
  "title": "storageA | Object replication",
  "menu": [
   "*Object replication"
  ],
  "rows": [
   [
    "Destination account",
    "storageB"
   ],
   [
    "*Container pair",
    "src → dst"
   ]
  ],
  "btn": "Create replication rules"
 },
 "keep": "Object replication: versions (both accounts), change feed (source), no hierarchical namespace."
},
{
 "id": "D2-030",
 "dom": 2,
 "type": "single",
 "stem": "<p>A client application must be able to download a single blob for 2 hours, without receiving an account access key.</p><p>What should you provide?</p>",
 "opts": [
  "The Contributor role on the storage account",
  "The account's access key key1",
  "A shared access signature (SAS) on the blob, with Read permission and an expiry in 2 hours",
  "The blob's URL, after making the container public"
 ],
 "ans": 2,
 "expl": "<p>A <b>SAS</b> grants limited access: a resource (here a blob), permissions (here <code>sp=r</code>), and a duration (<code>se</code>). The application never gets the account key.</p><p>The account key gives full, permanent access. Contributor manages the account without giving data access with its identity. Making the container public would expose all its blobs to everyone, with no time limit.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "docs",
   "contract.pdf"
  ],
  "title": "Generate SAS",
  "rows": [
   [
    "*Permissions",
    "Read"
   ],
   [
    "*Expiry",
    "In 2 hours"
   ],
   [
    "Allowed protocols",
    "HTTPS only"
   ]
  ],
  "btn": "Generate SAS token and URL"
 },
 "keep": "Access limited to one resource, one action, one duration = SAS."
},
{
 "id": "D2-031",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate type of shared access signature (SAS) for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "SAS types",
 "srcs": [
  "User delegation SAS",
  "Service SAS",
  "Account SAS"
 ],
 "tgtHead": [
  "Need",
  "SAS type"
 ],
 "tgts": [
  {
   "l": "Sign the SAS with Microsoft Entra credentials rather than with an account key",
   "a": 0
  },
  {
   "l": "Grant access to the account's blobs, queues, and tables at the same time",
   "a": 2
  },
  {
   "l": "Grant access to a single file share, tied to a stored access policy",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User delegation</b>: signed with a key obtained through a Microsoft Entra identity. It's the recommended type. It only works with <b>blob</b> storage (and Data Lake).</li><li><b>Account</b>: signed with an account key; can cover several services and service-level operations.</li><li><b>Service</b>: signed with an account key; limited to one service (blob, file, queue, or table). It can rely on a <b>stored access policy</b>.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "data"
  ],
  "title": "Generate SAS",
  "rows": [
   [
    "*Signing method",
    "User delegation key (Entra)"
   ],
   [
    "Other choice",
    "Account key"
   ]
  ]
 },
 "keep": "User delegation = Entra, blobs only, recommended. Service = one service. Account = several services."
},
{
 "id": "D2-032",
 "dom": 2,
 "type": "single",
 "stem": "<p>You distributed several service SAS on the share container to partners, all tied to the stored access policy PolPartners. You need to revoke these SAS immediately, without affecting the other applications that use the account keys.</p><p>What should you do?</p>",
 "opts": [
  "Regenerate key1 and key2",
  "Delete the share container",
  "Enable the storage account firewall",
  "Delete or modify the stored access policy PolPartners"
 ],
 "ans": 3,
 "expl": "<p>A service SAS tied to a <b>stored access policy</b> gets its permissions and expiry from that policy. By deleting the policy (or changing its expiry), you revoke all associated SAS.</p><p>Regenerating the keys would also revoke these SAS, but would break every application that uses the keys. Deleting the container destroys the data. The firewall filters the network, not SAS.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "share"
  ],
  "title": "share | Access policy",
  "menu": [
   "*Access policy"
  ],
  "rows": [
   [
    "*PolPartners",
    "Delete or change the expiry"
   ]
  ],
  "btn": "Save"
 },
 "keep": "SAS tied to a stored access policy = revoked by deleting the policy."
},
{
 "id": "D2-033",
 "dom": 2,
 "type": "single",
 "stem": "<p>You issued an <b>account SAS</b> signed with key1. It leaked. No stored access policy is used.</p><p>How do you revoke it?</p>",
 "opts": [
  "Regenerate key1",
  "Regenerate key2",
  "Delete the stored access policy",
  "Change the account's access tier"
 ],
 "ans": 0,
 "expl": "<p>An account SAS is signed with an account key. The only way to invalidate it before it expires is to <b>regenerate the key that signed it</b>, here key1. All SAS signed with key1 become invalid.</p><p>That's why there are two keys: you switch applications to key2, then regenerate key1. Account SAS can't use a stored access policy.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Access keys",
  "menu": [
   "*Access keys"
  ],
  "rows": [
   [
    "*key1",
    "Rotate key"
   ]
  ],
  "btn": "Rotate key"
 },
 "keep": "Account SAS = revoked by regenerating its key; switch applications to the other key first."
},
{
 "id": "D2-034",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You review the following SAS URL:</p><pre>https://storage7.blob.core.windows.net/reports/q3.pdf?sv=2022-11-02&amp;sr=b&amp;sp=r&amp;st=2026-10-01T08:00Z&amp;se=2026-10-01T18:00Z&amp;sip=203.0.113.10&amp;spr=https&amp;sig=...</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "The SAS allows:",
   "o": [
    "reading and writing in the reports container",
    "reading q3.pdf only",
    "reading all blobs in the account"
   ],
   "a": 1
  },
  {
   "l": "A user whose public IP address is 198.51.100.5 can use it:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "The SAS can be used with http://:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><code>sr=b</code>: the resource is a <b>blob</b> (q3.pdf). <code>sp=r</code>: read only.</li><li><code>sip=203.0.113.10</code>: only this IP address is allowed. 198.51.100.5 is denied.</li><li><code>spr=https</code>: HTTPS only.</li></ul><p><code>st</code> and <code>se</code> are the start and end of validity, here 8 AM to 6 PM (UTC).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage7",
   "Containers",
   "reports",
   "q3.pdf"
  ],
  "title": "Generate SAS",
  "rows": [
   [
    "sr=b · sp=r",
    "Blob q3.pdf, read"
   ],
   [
    "*sip",
    "203.0.113.10"
   ],
   [
    "*spr",
    "https"
   ]
  ]
 },
 "keep": "sr resource, sp permissions, st/se dates, sip IP, spr protocol."
},
{
 "id": "D2-035",
 "dom": 2,
 "type": "single",
 "stem": "<p>Your security policy forbids access to storage8's data with the account keys and SAS signed by those keys. Only Microsoft Entra authentication must be possible.</p><p>What should you configure?</p>",
 "opts": [
  "Disable secure transfer required",
  "Disable “Allow storage account key access” (Shared Key)",
  "Regenerate both keys every day",
  "Enable hierarchical namespace"
 ],
 "ans": 1,
 "expl": "<p>The <b>Allow storage account key access</b> setting (AllowSharedKeyAccess = false) blocks every request authorized with a shared key, including account and service SAS. User delegation SAS, signed through Entra, keep working.</p><p>Regenerating keys doesn't forbid them. Hierarchical namespace is for Data Lake. Disabling secure transfer would allow HTTP: the opposite of security.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage8"
  ],
  "title": "storage8 | Configuration",
  "menu": [
   "Overview",
   "*Configuration"
  ],
  "rows": [
   [
    "*Allow storage account key access",
    "Disabled"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Forbidding keys and key-signed SAS = disable shared key access."
},
{
 "id": "D2-036",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to let anyone on the internet read the images in the images container of storage9, without authentication. Other containers must stay private.</p><p>The account's “Allow Blob anonymous access” setting is disabled. What should you do?</p>",
 "opts": [
  "Enable static website",
  "Create a SAS with no expiry date",
  "Enable anonymous access on the account, then set the images container to the Blob access level",
  "Set the images container to the Container access level, without touching the account"
 ],
 "ans": 2,
 "expl": "<p>Anonymous access is set at two levels. The <b>account</b> must allow it; otherwise, container settings are ignored. Then each <b>container</b> has an access level: <b>Private</b>, <b>Blob</b> (anonymous read of blobs, without listing), or <b>Container</b> (read and list blobs).</p><p>Setting only the container isn't enough when the account forbids it. A SAS always has an expiry. Static website uses the $web container, not images.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage9"
  ],
  "title": "storage9 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Allow Blob anonymous access",
    "Enabled"
   ],
   [
    "images container · Access level",
    "Blob"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Anonymous access: allowed on the account, then Blob or Container level on the container."
},
{
 "id": "D2-037",
 "dom": 2,
 "type": "single",
 "stem": "<p>Virtual machines in the subnet Subnet1 of VNet1 must access storage10. All other network access must be denied. You don't want a private IP address for the storage account.</p><p>What should you configure?</p>",
 "opts": [
  "A private endpoint in Subnet1",
  "An outbound network security group rule to the internet",
  "A NAT gateway on Subnet1",
  "A Microsoft.Storage service endpoint on Subnet1, and a virtual network rule in storage10's firewall"
 ],
 "ans": 3,
 "expl": "<p>A <b>service endpoint</b> routes the subnet's traffic to storage over the Azure network, identifying it as coming from Subnet1. You then add Subnet1 to the account's <b>firewall</b> (“Enabled from selected virtual networks and IP addresses”). The account keeps its public address.</p><p>A private endpoint would give the account a private IP address, which isn't wanted. An NSG or a NAT gateway doesn't restrict access on the account side.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage10"
  ],
  "title": "storage10 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "Public network access",
    "Selected virtual networks and IP addresses"
   ],
   [
    "*Virtual network",
    "VNet1 / Subnet1 (Microsoft.Storage endpoint)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Service endpoint = public address kept, access filtered by subnet."
},
{
 "id": "D2-038",
 "dom": 2,
 "type": "single",
 "stem": "<p>Servers in your on-premises site, connected to VNet1 by a site-to-site VPN, must access storage11 through a <b>private</b> IP address, without going over the internet.</p><p>What should you configure?</p>",
 "opts": [
  "A private endpoint for storage11 in VNet1, with DNS resolution of privatelink.blob.core.windows.net",
  "An IP rule for the on-premises site in the firewall",
  "The Archive access tier",
  "A service endpoint on the GatewaySubnet"
 ],
 "ans": 0,
 "expl": "<p>A <b>private endpoint</b> creates a network interface with a private IP address from VNet1 for the account. The on-premises site reaches it through the VPN. The name <code>storage11.blob.core.windows.net</code> must resolve to this private address: private DNS zone <code>privatelink.blob.core.windows.net</code>, and DNS forwarding from the on-premises site.</p><p>Service endpoints don't work from on-premises. An IP rule would go over the internet.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage11"
  ],
  "title": "storage11 | Networking › Private endpoint connections",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Target sub-resource",
    "blob"
   ],
   [
    "Network",
    "VNet1"
   ],
   [
    "*Private DNS zone",
    "privatelink.blob.core.windows.net"
   ]
  ],
  "btn": "+ Private endpoint"
 },
 "keep": "Private IP, access from on-premises = private endpoint + private DNS."
},
{
 "id": "D2-039",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>The firewall of storage12 is set to “Enabled from selected virtual networks and IP addresses”. Only Subnet1 of VNet1 is allowed, through a service endpoint.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A VM in Subnet2 (VNet1, no service endpoint) can access the blobs.",
   "a": 1
  },
  {
   "l": "An administrator can browse the blobs from the Azure portal, on their computer at home.",
   "a": 1
  },
  {
   "l": "You can add the office's public IP address to the firewall to allow it.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Subnet2: No.</b> Only Subnet1 is allowed.</li><li><b>Portal at home: No.</b> The browser accesses data from the computer's IP address, which isn't allowed. (The portal then shows a network authorization error.)</li><li><b>Office IP address: Yes.</b> Public IP address (or CIDR range) rules are designed for this.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage12"
  ],
  "title": "storage12 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "Virtual networks",
    "VNet1 / Subnet1"
   ],
   [
    "*Firewall · Address range",
    "Office public IP address"
   ]
  ],
  "btn": "Save"
 },
 "keep": "The portal reads data from your IP: it must be allowed."
},
{
 "id": "D2-040",
 "dom": 2,
 "type": "single",
 "stem": "<p>The firewall of storage13 allows only some virtual networks. Azure Backup and Azure Monitor must still be able to write to it.</p><p>What should you enable?</p>",
 "opts": [
  "Static website",
  "The exception “Allow Azure services on the trusted services list to access this storage account”",
  "Anonymous blob access",
  "Geo-redundancy"
 ],
 "ans": 1,
 "expl": "<p>The <b>trusted services</b> exception (trusted Microsoft services) lets through certain Azure services (Backup, Monitor, Event Grid…) that can't go through your virtual networks. You can also use resource instance rules, which are more precise.</p><p>Anonymous access would expose the data to everyone. The other two options are unrelated.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage13"
  ],
  "title": "storage13 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "#Exceptions",
    ""
   ],
   [
    "*Allow Azure services on the trusted services list",
    "Checked"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Backup, Monitor… behind the firewall = trusted services exception."
},
{
 "id": "D2-041",
 "dom": 2,
 "type": "single",
 "stem": "<p>Your policy requires that storage14's data encryption keys be under your control, with rotation that you manage.</p><p>What should you configure?</p>",
 "opts": [
  "A user delegation SAS",
  "Secure transfer required",
  "Customer-managed keys, stored in Azure Key Vault",
  "Microsoft-managed encryption (default)"
 ],
 "ans": 2,
 "expl": "<p>Storage Service Encryption (SSE) is always on. By default, Microsoft manages the keys. With <b>customer-managed keys</b>, the encryption key lives in your <b>key vault</b> (or a managed HSM): you control its rotation and can revoke access.</p><p>The vault must have <b>soft delete</b> and <b>purge protection</b>, and the storage account uses a managed identity to read the key.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage14"
  ],
  "title": "storage14 | Encryption",
  "menu": [
   "*Encryption"
  ],
  "rows": [
   [
    "*Encryption type",
    "Customer-managed keys"
   ],
   [
    "Key vault",
    "KV-Storage / sse-key"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Controlling the encryption key = customer-managed keys in Key Vault."
},
{
 "id": "D2-042",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You configure customer-managed keys for storage15, with the key vault KV1.</p><p>Which <b>two</b> conditions must KV1 and storage15 meet?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "storage15 must use GRS redundancy",
  "storage15's managed identity must be able to read and use the key in KV1",
  "KV1 must be in another subscription",
  "KV1 must have soft delete and purge protection"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>Soft delete and purge protection: yes.</b> They prevent permanent loss of the key, which would make the data unreadable.</li><li><b>Managed identity access: yes</b>, for example with the Key Vault Crypto Service Encryption User role.</li><li>The vault can be in the same subscription, and redundancy doesn't matter.</li></ul>",
 "portal": {
  "path": [
   "Key vaults",
   "KV1"
  ],
  "title": "KV1 | Properties",
  "menu": [
   "*Properties"
  ],
  "rows": [
   [
    "*Soft delete",
    "Enabled"
   ],
   [
    "*Purge protection",
    "Enabled"
   ]
  ]
 },
 "keep": "CMK: vault with soft delete + purge protection, account identity authorized."
},
{
 "id": "D2-043",
 "dom": 2,
 "type": "single",
 "stem": "<p>An internal standard requires double encryption of data, at the service level and at the infrastructure level, for a new storage account.</p><p>When must you enable infrastructure encryption?</p>",
 "opts": [
  "It's enabled by default",
  "After copying the data",
  "At any time from Encryption",
  "When creating the storage account"
 ],
 "ans": 3,
 "expl": "<p><b>Infrastructure encryption</b> adds a second layer of encryption with a different key and algorithm. It can be chosen <b>only when creating</b> the account (Encryption tab) and can't be enabled afterward.</p><p>It's not enabled by default. For an existing account, you must create a new account and copy the data into it.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "Basics",
   "*Encryption"
  ],
  "rows": [
   [
    "*Enable infrastructure encryption",
    "Checked (at creation only)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Infrastructure encryption = at creation only."
},
{
 "id": "D2-044",
 "dom": 2,
 "type": "single",
 "stem": "<p>Two teams share storage16. Each team's data must be encrypted with a different key, at the container level.</p><p>What should you use?</p>",
 "opts": [
  "Encryption scopes",
  "Two storage accounts",
  "Different SAS",
  "Infrastructure encryption"
 ],
 "ans": 0,
 "expl": "<p><b>Encryption scopes</b> let you use different keys (Microsoft-managed or customer-managed) at the level of a container or blob, within the same account.</p><p>Two accounts would work but don't meet “at the container level”. A SAS encrypts nothing. Infrastructure encryption applies to the whole account.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage16"
  ],
  "title": "storage16 | Encryption › Encryption scopes",
  "menu": [
   "*Encryption"
  ],
  "rows": [
   [
    "*team-A",
    "Customer-managed key"
   ],
   [
    "*team-B",
    "Microsoft-managed key"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Different keys per container in one account = encryption scopes."
},
{
 "id": "D2-045",
 "dom": 2,
 "type": "single",
 "stem": "<p>Windows servers in your on-premises site must mount the Azure file share share1, on storage17, with the SMB protocol. The mount fails.</p><p>What is the most common cause?</p>",
 "opts": [
  "TCP port 3389 is closed",
  "Outbound TCP port 445 is blocked by the ISP or the firewall",
  "storage17 uses LRS redundancy",
  "The share is in the Hot tier"
 ],
 "ans": 1,
 "expl": "<p>SMB uses <b>TCP port 445</b>. Many ISPs and corporate firewalls block it to the internet. Solutions: open the port, go through a VPN or ExpressRoute with a private endpoint, or use Azure File Sync.</p><p>The tier and the redundancy don't prevent mounting. Port 3389 is for RDP.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage17",
   "File shares",
   "share1"
  ],
  "title": "share1 | Connect",
  "rows": [
   [
    "Drive letter",
    "Z"
   ],
   [
    "*Prerequisite",
    "Outbound TCP port 445 open"
   ]
  ]
 },
 "keep": "SMB = port 445; often blocked by ISPs."
},
{
 "id": "D2-046",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Files share tier for each use, in a Standard general-purpose v2 or Premium account.</p><p>To answer, drag the appropriate tier to each use. Each tier may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tiers",
 "srcs": [
  "Premium",
  "Transaction optimized",
  "Hot",
  "Cool"
 ],
 "tgtHead": [
  "Use",
  "Tier"
 ],
 "tgts": [
  {
   "l": "Database on an SMB share with latency of a few milliseconds",
   "a": 0
  },
  {
   "l": "Application that makes a huge number of transactions, without needing very low latency",
   "a": 1
  },
  {
   "l": "Team file share used every day",
   "a": 2
  },
  {
   "l": "Rarely accessed online archives, synced by Azure File Sync",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Premium</b>: SSD, low latency, FileStorage account.</li><li><b>Transaction optimized</b>: HDD, cheapest transactions, more expensive storage.</li><li><b>Hot</b>: general use, team shares.</li><li><b>Cool</b>: cheapest storage, more expensive transactions; suited to online archiving.</li></ul><p>The last three tiers are in a Standard general-purpose v2 account, and you can change tiers without recreating the share.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares"
  ],
  "title": "New file share",
  "rows": [
   [
    "*Access tier",
    "Transaction optimized · Hot · Cool"
   ],
   [
    "Premium",
    "FileStorage account"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Premium = SSD. Transaction optimized / Hot / Cool = Standard, changeable on the fly."
},
{
 "id": "D2-047",
 "dom": 2,
 "type": "single",
 "stem": "<p>A user overwrote an Excel file in the share share2 2 days ago. Share snapshots are taken every night.</p><p>How can the user recover the file themselves from Windows?</p>",
 "opts": [
  "By rehydrating the file from the Archive tier",
  "By asking Microsoft for a restore",
  "With the Previous Versions tab of the file's properties",
  "With the Windows Recycle Bin"
 ],
 "ans": 2,
 "expl": "<p>Azure Files <b>share snapshots</b> are exposed in Windows on the <b>Previous Versions</b> tab: the user can open or restore an older version.</p><p>The Windows Recycle Bin doesn't see files on the network share. Azure Files has no Archive tier.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares",
   "share2"
  ],
  "title": "share2 | Snapshots",
  "menu": [
   "Overview",
   "*Snapshots"
  ],
  "rows": [
   [
    "*Last night's snapshot",
    "Visible in Previous Versions"
   ]
  ]
 },
 "keep": "Share snapshots = Previous Versions in Windows."
},
{
 "id": "D2-048",
 "dom": 2,
 "type": "single",
 "stem": "<p>The file share share3 was deleted by mistake this morning. Soft delete for file shares is enabled with 14 days of retention.</p><p>What should you do?</p>",
 "opts": [
  "Restore share3 from a snapshot of share3",
  "Create a new share3 share: the data reappears",
  "Nothing: a deleted share can't be restored",
  "Show deleted shares in the storage account and undelete share3"
 ],
 "ans": 3,
 "expl": "<p>With <b>share soft delete</b>, a deleted share is kept for the retention period. You display it in the share list (“Show deleted shares” option) and <b>undelete</b> it, with its snapshots.</p><p>Snapshots are deleted with the share when there's no soft delete. Creating a share with the same name restores nothing.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "File shares",
  "menu": [
   "*File shares"
  ],
  "rows": [
   [
    "*Show deleted shares",
    "On"
   ],
   [
    "share3",
    "Deleted · Undelete"
   ]
  ],
  "btn": "Undelete"
 },
 "keep": "Deleted share = undelete (if share soft delete is on)."
},
{
 "id": "D2-049",
 "dom": 2,
 "type": "single",
 "stem": "<p>Users in your AD DS domain, synchronized with Microsoft Entra ID, must access the share share4 with their domain account and NTFS permissions.</p><p>What should you configure first on the storage account?</p>",
 "opts": [
  "Identity-based authentication with AD DS (joining the storage account to the domain)",
  "The NFS protocol",
  "Anonymous access",
  "An account SAS"
 ],
 "ans": 0,
 "expl": "<p>To use domain accounts, you enable the storage account's <b>identity-based authentication</b>: on-premises AD DS (the storage account is represented by a computer object in the domain, for example with the AzFilesHybrid module), Microsoft Entra Domain Services, or Microsoft Entra Kerberos for hybrid identities.</p><p>You then assign share-level permissions (RBAC roles), then NTFS permissions on folders and files.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares"
  ],
  "title": "Identity-based access",
  "rows": [
   [
    "*Active Directory Domain Services (AD DS)",
    "Set up"
   ],
   [
    "Microsoft Entra Domain Services",
    "No"
   ],
   [
    "Microsoft Entra Kerberos",
    "No"
   ]
  ]
 },
 "keep": "Domain accounts on Azure Files = AD DS authentication (account joined to the domain)."
},
{
 "id": "D2-050",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Users access the share share5 with their AD DS identity. You need to assign share-level permissions, following the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "srcs": [
  "Storage File Data SMB Share Reader",
  "Storage File Data SMB Share Contributor",
  "Storage File Data SMB Share Elevated Contributor",
  "Storage Account Contributor"
 ],
 "tgtHead": [
  "Need",
  "Role"
 ],
 "tgts": [
  {
   "l": "Accountants read the files",
   "a": 0
  },
  {
   "l": "Managers create, modify, and delete files",
   "a": 1
  },
  {
   "l": "Administrators modify NTFS access control lists",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>SMB Share Reader</b>: read.</li><li><b>SMB Share Contributor</b>: read, write, and delete.</li><li><b>SMB Share Elevated Contributor</b>: also modifies NTFS ACLs.</li></ul><p><b>Storage Account Contributor</b> manages the account (control plane), not the share's data with the user's identity.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares",
   "share5"
  ],
  "title": "share5 | Access Control (IAM)",
  "menu": [
   "*Access Control (IAM)"
  ],
  "rows": [
   [
    "SMB Share Reader",
    "Accountants"
   ],
   [
    "SMB Share Contributor",
    "Managers"
   ],
   [
    "*SMB Share Elevated Contributor",
    "Administrators (ACLs)"
   ]
  ]
 },
 "keep": "SMB Share Reader / Contributor / Elevated Contributor (NTFS ACLs)."
},
{
 "id": "D2-051",
 "dom": 2,
 "type": "single",
 "stem": "<p>All authenticated users in your domain must have at least share-level read access on all shares of storage18, without assigning a role to each group.</p><p>What should you configure?</p>",
 "opts": [
  "Anonymous access at the container level",
  "A default share-level permission",
  "A read account SAS",
  "The Reader role on the storage account"
 ],
 "ans": 1,
 "expl": "<p>The <b>default share-level permission</b> applies to all authenticated identities that have no explicit role (for example SMB Share Reader). NTFS permissions apply next.</p><p>Anonymous access is for blobs. A SAS doesn't use the user's identity. The Reader role gives read access to the control plane, not to files.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage18",
   "File shares"
  ],
  "title": "Default share-level permissions",
  "rows": [
   [
    "*Enable permissions for all authenticated users and groups",
    "SMB Share Reader"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Baseline access for all authenticated users = default share-level permission."
},
{
 "id": "D2-052",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to sync the folder D:\\Data on the file server FS1 with the Azure share share6, keeping rarely used files only in Azure.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Deploy a Storage Sync Service",
  "Install the Azure File Sync agent on FS1 and register the server",
  "Create a sync group with share6 as the cloud endpoint",
  "Add D:\\Data as a server endpoint, with cloud tiering enabled",
  "Create a private endpoint for FS1",
  "Install the DFS Replication role on FS1"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>You create the <b>Storage Sync Service</b> (an Azure resource), install the <b>agent</b> on FS1 and register it with that service, create a <b>sync group</b> with the share as the cloud endpoint, then add the <b>server endpoint</b> (local path) with <b>cloud tiering</b>.</p><p>No private endpoint is needed. DFS-R isn't used by Azure File Sync.</p>",
 "portal": {
  "path": [
   "Storage Sync Services",
   "Sync1",
   "Sync groups"
  ],
  "title": "Group-Data",
  "rows": [
   [
    "Cloud endpoint",
    "share6"
   ],
   [
    "*Server endpoint",
    "FS1 · D:\\Data · cloud tiering enabled"
   ]
  ],
  "btn": "+ Add server endpoint"
 },
 "keep": "File Sync: service, agent + registration, sync group (1 share), server endpoint."
},
{
 "id": "D2-053",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You deploy Azure File Sync with the Storage Sync Service Sync1.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A sync group can contain several cloud endpoints.",
   "a": 1
  },
  {
   "l": "A sync group can contain server endpoints on several servers.",
   "a": 0
  },
  {
   "l": "A server registered with Sync1 can also be registered with a second Storage Sync Service.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Several cloud endpoints: No.</b> A sync group has <b>a single</b> cloud endpoint (an Azure share).</li><li><b>Several servers: Yes.</b> That's how you sync several sites around the same share.</li><li><b>Two services: No.</b> A server can be registered with only <b>one</b> Storage Sync Service at a time.</li></ul>",
 "portal": {
  "path": [
   "Storage Sync Services",
   "Sync1"
  ],
  "title": "Sync1 | Sync groups",
  "menu": [
   "*Sync groups",
   "Registered servers"
  ],
  "rows": [
   [
    "Cloud endpoint",
    "Only 1"
   ],
   [
    "*Server endpoints",
    "Several servers possible"
   ]
  ]
 },
 "keep": "1 group = 1 share + N servers; 1 server = only 1 Storage Sync Service."
},
{
 "id": "D2-054",
 "dom": 2,
 "type": "single",
 "stem": "<p>The server FS2 uses Azure File Sync with cloud tiering. Volume D: must always keep at least 20% free space.</p><p>Which setting should you configure?</p>",
 "opts": [
  "The date policy at 20 days",
  "The Azure share quota at 20%",
  "The volume free space policy at 20%",
  "The soft delete retention at 20 days"
 ],
 "ans": 2,
 "expl": "<p>The <b>volume free space policy</b> makes File Sync tier (keep only a local pointer for) the least used files to maintain the desired free space. The <b>date policy</b> also tiers files not accessed for a number of days.</p><p>The quota limits the share's size in Azure. Soft delete is unrelated.</p>",
 "portal": {
  "path": [
   "Storage Sync Services",
   "Sync1",
   "Group1",
   "FS2"
  ],
  "title": "Server endpoint",
  "rows": [
   [
    "Cloud tiering",
    "Enabled"
   ],
   [
    "*Volume free space",
    "20%"
   ],
   [
    "Date policy",
    "Optional"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Keep X% free = volume free space policy; old files = date policy."
},
{
 "id": "D2-055",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to copy the entire content of the local folder C:\\Exports, including subfolders, to the exports container of storage19, with AzCopy and a SAS.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "azcopy {0} \"C:\\Exports\" \"https://storage19.{1}.core.windows.net/exports?&lt;SAS&gt;\" {2}",
 "rows": [
  {
   "l": "Command",
   "o": [
    "copy",
    "make",
    "remove"
   ],
   "a": 0
  },
  {
   "l": "Service",
   "o": [
    "blob",
    "file",
    "dfs-share"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "--recursive",
    "--include-subfolders",
    "--all"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>azcopy copy \"C:\\Exports\" \"https://storage19.blob.core.windows.net/exports?&lt;SAS&gt;\" --recursive</code>.</p><ul><li><b>copy</b> copies; <b>make</b> creates a container or share; <b>remove</b> deletes.</li><li>A container belongs to the <b>blob</b> service. (The Azure Files address would be <code>file.core.windows.net</code>.)</li><li><b>--recursive</b> includes subfolders. The other two options don't exist.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage19",
   "Containers",
   "exports"
  ],
  "title": "exports | Overview",
  "rows": [
   [
    "*URL",
    "https://storage19.blob.core.windows.net/exports"
   ],
   [
    "Command",
    "azcopy copy … --recursive"
   ]
  ]
 },
 "keep": "AzCopy: copy / sync / make / remove; --recursive for subfolders."
},
{
 "id": "D2-056",
 "dom": 2,
 "type": "single",
 "stem": "<p>Every night, you need to update the backup container with new or changed files from the folder D:\\Backup, and delete from the container the files that no longer exist locally.</p><p>Which AzCopy command should you use?</p>",
 "opts": [
  "azcopy make",
  "azcopy copy with --recursive",
  "azcopy copy with --overwrite=false",
  "azcopy sync with --delete-destination=true"
 ],
 "ans": 3,
 "expl": "<p><b>azcopy sync</b> compares source and destination (by last modified time) and copies only the differences. With <b>--delete-destination=true</b>, it deletes from the destination what no longer exists at the source.</p><p><code>azcopy copy</code> copies everything again and never deletes. <code>--overwrite=false</code> avoids overwriting, but doesn't copy changed files and deletes nothing. <code>make</code> creates a container. Note: sync is <b>one-way</b>.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "backup"
  ],
  "title": "backup | Overview",
  "rows": [
   [
    "*Nightly sync",
    "azcopy sync D:\\Backup <URL> --delete-destination=true"
   ]
  ]
 },
 "keep": "One-way mirror = azcopy sync (+ --delete-destination to delete)."
},
{
 "id": "D2-057",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to copy 500 GB of blobs from the account storageA to the account storageB, in another region, as fast as possible and without the data passing through your computer.</p><p>What should you use?</p>",
 "opts": [
  "AzCopy copy between the two URLs (server-to-server copy)",
  "Robocopy",
  "Azure Import/Export",
  "Download the blobs with Storage Explorer, then upload them"
 ],
 "ans": 0,
 "expl": "<p>When both source and destination are Azure storage URLs, <b>AzCopy</b> uses the <b>server-to-server</b> copy APIs: data goes directly from one account to the other, without passing through the machine running the command.</p><p>Downloading then uploading routes the data through your computer. Import/Export uses physical disks. Robocopy can't write to blobs.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storageB"
  ],
  "title": "Server-to-server copy",
  "rows": [
   [
    "*Source",
    "https://storageA.blob.core.windows.net/…?SAS"
   ],
   [
    "Destination",
    "https://storageB.blob.core.windows.net/…?SAS"
   ]
  ]
 },
 "keep": "Between two Azure accounts, AzCopy copies server to server."
},
{
 "id": "D2-058",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to transfer 60 TB of data from a datacenter to Azure. The internet connection is 100 Mbps and the transfer must be finished in two weeks.</p><p>Which solution should you use?</p>",
 "opts": [
  "Azure File Sync",
  "Azure Data Box",
  "A site-to-site VPN",
  "AzCopy over the internet"
 ],
 "ans": 1,
 "expl": "<p>At 100 Mbps, 60 TB would take more than <b>55 days</b> of continuous transfer. <b>Azure Data Box</b> is a physical device that Microsoft ships to you: you copy the data over your local network, ship it back, and Microsoft uploads it to your storage account.</p><p>AzCopy, File Sync, and a VPN all go through the same too-slow connection.</p>",
 "portal": {
  "path": [
   "Azure Data Box",
   "Order"
  ],
  "title": "Order a Data Box",
  "rows": [
   [
    "*Product",
    "Data Box (≈ 80 TB usable)"
   ],
   [
    "Destination",
    "Storage account"
   ]
  ],
  "btn": "Order"
 },
 "keep": "Large volume + slow link = Data Box (compute it: 60 TB at 100 Mbps ≈ 55 days)."
},
{
 "id": "D2-059",
 "dom": 2,
 "type": "single",
 "stem": "<p>You use the <b>Azure Import/Export</b> service to import data from your own disks.</p><p>Which tool should you use to prepare the disks before shipping them?</p>",
 "opts": [
  "Robocopy alone",
  "Azure Storage Explorer",
  "WAImportExport",
  "AzCopy"
 ],
 "ans": 2,
 "expl": "<p>The <b>WAImportExport</b> tool prepares the disks: it copies the data, encrypts it with <b>BitLocker</b>, and generates the journal files needed for the import job. (For Azure Files, a CSV file describes the data.)</p><p>AzCopy and Storage Explorer transfer over the network. Robocopy alone produces neither encryption nor an import journal.</p>",
 "portal": {
  "path": [
   "Import/export jobs",
   "Create"
  ],
  "title": "Create an import job",
  "rows": [
   [
    "*Journal file",
    "Generated by WAImportExport"
   ],
   [
    "Encryption",
    "BitLocker"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Import/Export with your own disks = WAImportExport (BitLocker + journals)."
},
{
 "id": "D2-060",
 "dom": 2,
 "type": "single",
 "stem": "<p>A developer wants to browse the blobs, file shares, and queues of several storage accounts from a desktop application, and manage SAS.</p><p>What should you recommend?</p>",
 "opts": [
  "Azure Data Box",
  "Microsoft Entra Connect",
  "Azure File Sync",
  "Azure Storage Explorer"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Storage Explorer</b> is a free application (Windows, macOS, Linux) for managing blobs, files, queues, and tables, creating SAS, changing access tiers, and so on. It uses AzCopy for transfers.</p><p>Data Box is a transfer device, File Sync syncs servers, Entra Connect syncs identities.</p>",
 "portal": {
  "path": [
   "Azure Storage Explorer"
  ],
  "title": "Azure Storage Explorer",
  "rows": [
   [
    "*Explorer",
    "Accounts · Blobs · Files · Queues · Tables"
   ],
   [
    "Right-click",
    "Get Shared Access Signature"
   ]
  ]
 },
 "keep": "Desktop app for storage = Azure Storage Explorer."
},
{
 "id": "D2-061",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to host a static website (HTML, CSS, JavaScript) in storage20, at the lowest cost.</p><p>Where should you upload the files after enabling the Static website feature?</p>",
 "opts": [
  "In the $web container",
  "In the $root container",
  "In a file share named www",
  "In a table named web"
 ],
 "ans": 0,
 "expl": "<p>Enabling <b>static website</b> creates the <b>$web</b> container. You upload the files there, and set the index document (index.html) and the 404 error page. The site is served at <code>&lt;account&gt;.z&lt;n&gt;.web.core.windows.net</code>.</p><p>The $root container is for the root address of the blob service, not for the static website.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage20"
  ],
  "title": "storage20 | Static website",
  "menu": [
   "*Static website"
  ],
  "rows": [
   [
    "*Static website",
    "Enabled · $web container"
   ],
   [
    "Index document name",
    "index.html"
   ],
   [
    "Error document path",
    "404.html"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Static website = $web container."
},
{
 "id": "D2-062",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to store data for Azure Synapse with real folders (renaming a folder must be a single, fast operation) and POSIX access control lists.</p><p>Which option should you enable on the Standard general-purpose v2 account?</p>",
 "opts": [
  "Blob versioning",
  "Hierarchical namespace (Data Lake Storage Gen2)",
  "NFS 3.0 protocol only",
  "Encryption scopes"
 ],
 "ans": 1,
 "expl": "<p><b>Hierarchical namespace</b> turns blob storage into <b>Azure Data Lake Storage Gen2</b>: real directories (renaming or deleting a folder is atomic), POSIX-like ACLs on folders and files, <code>dfs.core.windows.net</code> endpoint.</p><p>You enable it at creation, or through an irreversible upgrade of an existing account. Some blob features (such as object replication) aren't compatible.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "Basics",
   "*Advanced"
  ],
  "rows": [
   [
    "*Enable hierarchical namespace",
    "Checked (Data Lake Storage Gen2)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Real folders + POSIX ACLs = hierarchical namespace (Data Lake Gen2)."
},
{
 "id": "D2-063",
 "dom": 2,
 "type": "single",
 "stem": "<p>Linux machines must mount a blob container with the <b>NFS 3.0</b> protocol.</p><p>Which condition must the storage account meet?</p>",
 "opts": [
  "Be a Premium file shares account",
  "Use GRS redundancy",
  "Have hierarchical namespace enabled and network access restricted to virtual networks",
  "Have anonymous access enabled"
 ],
 "ans": 2,
 "expl": "<p>NFS 3.0 on <b>blob</b> storage requires <b>hierarchical namespace</b>, enabled at creation with the NFS v3 option, and restricted network access (selected virtual networks or a private endpoint), because NFS 3.0 doesn't use account authentication.</p><p>The Premium file shares account concerns NFS on <b>Azure Files</b>, a different service. Redundancy and anonymous access aren't relevant.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "Basics",
   "*Advanced",
   "Networking"
  ],
  "rows": [
   [
    "*Hierarchical namespace",
    "Enabled"
   ],
   [
    "*Enable network file system v3",
    "Checked"
   ],
   [
    "Network access",
    "Selected virtual networks"
   ]
  ]
 },
 "keep": "NFS 3.0 on blobs = hierarchical namespace + restricted network access."
},
{
 "id": "D2-064",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to let a partner drop files into a blob container with an <b>SFTP</b> client, without using a SAS or an access key.</p><p>What should you configure?</p>",
 "opts": [
  "Enable static website",
  "Create an NFS share",
  "Enable anonymous write access",
  "Enable SFTP on an account with hierarchical namespace and create a local user"
 ],
 "ans": 3,
 "expl": "<p><b>SFTP support</b> for Azure Blob Storage requires <b>hierarchical namespace</b>. You create <b>local users</b> (with a password or SSH key) and grant them permissions on containers.</p><p>Static website is read-only. NFS isn't SFTP. Anonymous access never allows writing.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | SFTP",
  "menu": [
   "*SFTP"
  ],
  "rows": [
   [
    "*SFTP",
    "Enabled"
   ],
   [
    "*Local user",
    "partner1 · SSH key · drop container"
   ]
  ],
  "btn": "+ Add local user"
 },
 "keep": "SFTP on blobs = hierarchical namespace + local users."
},
{
 "id": "D2-065",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You need to indicate the appropriate blob type for each use.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Log files to which lines are appended continuously:",
   "o": [
    "Append blob",
    "Page blob",
    "Block blob"
   ],
   "a": 0
  },
  {
   "l": "Images, videos, and documents:",
   "o": [
    "Block blob",
    "Append blob",
    "Page blob"
   ],
   "a": 0
  },
  {
   "l": "VHD files used as random-access disks:",
   "o": [
    "Append blob",
    "Page blob",
    "Block blob"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Append blob</b>: optimized for adding data at the end, without changing existing data. Ideal for logging.</li><li><b>Block blob</b>: the general type for files (up to about 190 TiB). The only type that supports access tiers.</li><li><b>Page blob</b>: 512-byte pages with random read-write, used for VHDs.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "data"
  ],
  "title": "Upload blob › Advanced",
  "rows": [
   [
    "*Blob type",
    "Block blob · Append blob · Page blob"
   ]
  ],
  "btn": "Upload"
 },
 "keep": "Logs = append. Files = block. VHD = page."
},
{
 "id": "D2-066",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You create the storage account storage21. It must withstand the failure of an availability zone and of the region, without reading the secondary region. It must accept only HTTPS and TLS 1.2 minimum.</p><p>How should you configure the account?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create a storage account",
  "sub": "Storage",
  "rows": [
   {
    "k": "head",
    "t": "Basics"
   },
   {
    "k": "text",
    "l": "Account name",
    "t": "storage21"
   },
   {
    "k": "select",
    "l": "Performance",
    "o": [
     "Standard",
     "Premium"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Redundancy",
    "o": [
     "LRS",
     "ZRS",
     "GRS",
     "GZRS",
     "RA-GZRS"
    ],
    "d": 2,
    "a": 3
   },
   {
    "k": "head",
    "t": "Advanced"
   },
   {
    "k": "check",
    "l": "Require secure transfer for REST API operations",
    "d": true,
    "a": true
   },
   {
    "k": "select",
    "l": "Minimum TLS version",
    "o": [
     "Version 1.0",
     "Version 1.1",
     "Version 1.2"
    ],
    "d": 2,
    "a": 2
   }
  ]
 },
 "expl": "<ul><li><b>Standard</b>: the only tier that offers geo-redundancy.</li><li><b>GZRS</b>: ZRS in the primary region (zone failure) + a copy in the paired region (region failure), with no secondary read. RA-GZRS would add reading.</li><li><b>Secure transfer</b>: rejects HTTP.</li><li><b>TLS 1.2</b>: rejects older versions.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "Basics",
   "*Advanced"
  ],
  "rows": [
   [
    "Performance",
    "Standard"
   ],
   [
    "*Redundancy",
    "GZRS"
   ],
   [
    "*Require secure transfer",
    "Checked"
   ],
   [
    "*Minimum TLS version",
    "1.2"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Zone + region without secondary read = GZRS; HTTPS = secure transfer."
},
{
 "id": "D2-067",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You configure data protection for storage22: deleted blobs must be recoverable for 14 days, deleted containers for 7 days, and previous versions of overwritten blobs must be kept. Point-in-time restore isn't requested.</p><p>How should you configure the page?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Data protection",
  "sub": "storage22",
  "rows": [
   {
    "k": "head",
    "t": "Recovery"
   },
   {
    "k": "check",
    "l": "Enable point-in-time restore for containers",
    "a": false
   },
   {
    "k": "check",
    "l": "Enable soft delete for blobs",
    "a": true
   },
   {
    "k": "select",
    "l": "Days to retain deleted blobs",
    "o": [
     "7",
     "14",
     "30"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "check",
    "l": "Enable soft delete for containers",
    "a": true
   },
   {
    "k": "select",
    "l": "Days to retain deleted containers",
    "o": [
     "7",
     "14",
     "30"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Tracking"
   },
   {
    "k": "check",
    "l": "Enable versioning for blobs",
    "a": true
   },
   {
    "k": "check",
    "l": "Enable blob change feed",
    "a": null
   }
  ]
 },
 "expl": "<ul><li><b>Blob soft delete: 14 days.</b></li><li><b>Container soft delete: 7 days.</b></li><li><b>Versioning</b>: keeps previous versions on overwrite.</li><li>Point-in-time restore isn't requested. Change feed isn't scored here: it's only useful for point-in-time restore, object replication, or auditing changes.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage22"
  ],
  "title": "storage22 | Data protection",
  "menu": [
   "*Data protection"
  ],
  "rows": [
   [
    "*Blob soft delete",
    "14 days"
   ],
   [
    "*Container soft delete",
    "7 days"
   ],
   [
    "*Versioning",
    "Enabled"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Three independent protections: blobs, containers, versions."
},
{
 "id": "D2-068",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to regenerate key2 of the storage account storage23.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "storage23 | Storage account",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access Control (IAM)",
     "Storage browser"
    ]
   },
   {
    "g": "Security + networking",
    "items": [
     "Networking",
     "Access keys",
     "Shared access signature",
     "Encryption",
     "Microsoft Defender for Cloud"
    ]
   },
   {
    "g": "Data management",
    "items": [
     "Redundancy",
     "Data protection",
     "Object replication",
     "Lifecycle management"
    ]
   }
  ]
 },
 "ans": "Access keys",
 "expl": "<p><b>Access keys</b> shows key1 and key2 with their connection strings, and lets you <b>rotate</b> (regenerate) them. You can also set a rotation reminder there.</p><p><b>Shared access signature</b> generates account SAS; <b>Encryption</b> manages data encryption keys, not access keys.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage23"
  ],
  "title": "storage23 | Access keys",
  "menu": [
   "Networking",
   "*Access keys",
   "Shared access signature"
  ],
  "rows": [
   [
    "key2",
    "Rotate key"
   ]
  ],
  "btn": "Rotate key"
 },
 "keep": "Access keys = key1/key2, rotation and reminder."
},
{
 "id": "D2-069",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to configure storage24 so that blobs move automatically to the Archive tier after 180 days without modification.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "storage24 | Storage account",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Tags"
    ]
   },
   {
    "g": "Data storage",
    "items": [
     "Containers",
     "File shares",
     "Queues",
     "Tables"
    ]
   },
   {
    "g": "Data management",
    "items": [
     "Redundancy",
     "Data protection",
     "Object replication",
     "Blob inventory",
     "Static website",
     "Lifecycle management"
    ]
   }
  ]
 },
 "ans": "Lifecycle management",
 "expl": "<p><b>Lifecycle management</b> holds the rules for moving between tiers and deleting. A rule “Last modified &gt; 180 days → Move to archive storage” meets the need.</p><p><b>Data protection</b> manages soft delete and versioning. <b>Blob inventory</b> produces reports on content.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage24"
  ],
  "title": "storage24 | Lifecycle management",
  "menu": [
   "Data protection",
   "*Lifecycle management"
  ],
  "rows": [
   [
    "*If",
    "Last modified more than 180 days ago"
   ],
   [
    "*Then",
    "Move to archive storage"
   ]
  ],
  "btn": "Add a rule"
 },
 "keep": "Automatic tier change = Lifecycle management."
}
);
