/* Domain 2: storage (batch F: D2-301 to D2-324, multi-answer questions merged from former multiple-choice items) */
AZ.questions.push(
{
 "id": "D2-301",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are optimizing blob costs in several general-purpose v2 storage accounts. What should you answer or choose in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Blob placed in Cool, deleted 10 days later — early deletion days billed:",
   "o": [
    "0 days",
    "10 days",
    "20 days",
    "30 days"
   ],
   "a": 2
  },
  {
   "l": "10-year legal archives never read, hours to read back is fine — tier:",
   "o": [
    "Cool",
    "Archive",
    "Hot",
    "Cold"
   ],
   "a": 1
  },
  {
   "l": "20 TB of videos read in the first month, then almost never, readable immediately for 3 years:",
   "o": [
    "Hot, then Cool at 30 d, Cold at 90 d, deletion at 3 years",
    "A Premium block blobs account for 3 years",
    "Archive tier from upload, then deletion after 3 years",
    "Hot tier for 3 years, then deletion"
   ],
   "a": 0
  },
  {
   "l": "storage30's default tier changes from Hot to Cool — blobs affected:",
   "o": [
    "None: each blob must be changed one by one",
    "Blobs whose tier is inferred from the account",
    "Only blobs created after the change",
    "All blobs, including those in the Archive tier"
   ],
   "a": 1
  },
  {
   "l": "New storage75 blobs Cool by default, only some in Hot:",
   "o": [
    "An immutability policy on the container",
    "A SAS per blob, with the Cool tier",
    "The default access tier set to Cool",
    "The account's ZRS redundancy"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Blob placed in Cool, deleted 10 days later — early deletion days billed:</b></p><p>Each cooler tier has a <b>minimum retention period</b>: Cool 30 days, Cold 90 days, Archive 180 days. If you delete (or move) the blob earlier, Azure bills the remaining days.</p><p>Here: 30 − 10 = <b>20 days</b> billed extra.</p><p>The Hot tier has no minimum.</p><p><b>2. 10-year legal archives never read, hours to read back is fine — tier:</b></p><p>The <b>Archive</b> tier has the lowest storage cost. In exchange, data is <b>offline</b>: you must rehydrate it (up to 15 hours at standard priority) before reading, and reading is expensive. Minimum duration: 180 days.</p><ul><li><b>Hot</b>: frequently used data. Most expensive storage, cheapest access.</li><li><b>Cool</b>: infrequent access, 30-day minimum.</li><li><b>Cold</b>: rare access, 90-day minimum, but still online.</li></ul><p><b>3. 20 TB of videos read in the first month, then almost never, readable immediately for 3 years:</b></p><p>The videos are hot at first, then cold: a lifecycle rule moves them gradually to cheaper <b>online</b> tiers (Cool then Cold), and deletes them at 3 years.</p><p>Archive would prevent immediate reading. Staying in Hot or Premium would cost much more.</p><p><b>4. storage30's default tier changes from Hot to Cool — blobs affected:</b></p><p>Blobs with no explicit tier have a tier <b>inferred</b> from the account's default tier. Changing the account tier moves them all to Cool, as well as new blobs. Blobs whose tier was set explicitly (for example Archive or Hot) don't change.</p><p>Watch the cost: this change is billed as a write operation on each affected blob.</p><p><b>5. New storage75 blobs Cool by default, only some in Hot:</b></p><p>The account's <b>default access tier</b> (Configuration) applies to blobs whose tier isn't set explicitly. You can then set the Hot tier on some blobs, or use a lifecycle rule.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "data"
  ],
  "title": "report.pdf | Overview",
  "menu": [
   "*Overview",
   "Versions",
   "Snapshots"
  ],
  "rows": [
   [
    "*Access tier",
    "Cool · 30-day minimum"
   ],
   [
    "Blob age",
    "10 days"
   ],
   [
    "Delete now",
    "20 days of early deletion billed"
   ]
  ]
 },
 "keep": "Minimums: Cool 30 d, Cold 90 d, Archive 180 d. Deleting earlier = remaining days billed. Cheapest for data you never read = Archive (offline, 180-day minimum). Data that cools but stays readable = lifecycle Hot → Cool → Cold. Account tier = inferred tier of blobs with no explicit tier. Account default tier = tier of blobs with no explicit tier."
},
{
 "id": "D2-302",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Several storage41 blobs are in the Archive tier. What should you do or configure in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "An auditor must read a 2 GB archived blob within the hour:",
   "o": [
    "Rehydrate it to the Hot tier with Standard priority",
    "Copy it to another account in the Archive tier",
    "Rehydrate it to the Hot tier with High priority",
    "Read it directly: it's accessible read-only"
   ],
   "a": 2
  },
  {
   "l": "A rehydration started with Standard priority becomes urgent:",
   "o": [
    "Nothing: the priority can't be changed",
    "Copy the blob to another container in the Archive tier",
    "Cancel the rehydration and wait 24 hours",
    "Rerun the operation with High priority"
   ],
   "a": 3
  },
  {
   "l": "Read an archived blob without changing the original:",
   "o": [
    "Copy the archived blob to a Hot or Cool blob",
    "Create a snapshot of the archived blob and read it",
    "Read the archived blob with a service SAS",
    "Change the original blob's tier to Hot"
   ],
   "a": 0
  },
  {
   "l": "The “Archive after 90 days” rule immediately re-archives a rehydrated blob — condition to add:",
   "o": [
    "daysAfterCreationGreaterThan",
    "prefixMatch",
    "daysAfterLastTierChangeGreaterThan",
    "daysAfterLastAccessTimeGreaterThan"
   ],
   "a": 2
  },
  {
   "l": "On a Premium block blob account, a rule must move blobs to Cool:",
   "o": [
    "The account becomes Standard to apply the rule",
    "Premium has no tiers: only deletion is available",
    "The blobs move to Archive as planned",
    "The rule works normally, with no change"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. An auditor must read a 2 GB archived blob within the hour:</b></p><p>An archived blob is <b>offline</b>: you can neither read nor download it. You must <b>rehydrate</b> it to an online tier (Hot, Cool, or Cold), either by changing its tier or by copying it to a new blob.</p><p><b>High</b> priority rehydrates objects under 10 GB in less than an hour. <b>Standard</b> priority can take up to 15 hours. A copy that stays in Archive is useless.</p><p><b>2. A rehydration started with Standard priority becomes urgent:</b></p><p>During a pending rehydration, you can <b>switch from Standard to High</b> (by running Set Blob Tier again with High priority). You can't do the reverse. High priority costs more.</p><p><b>3. Read an archived blob without changing the original:</b></p><p><b>Copying</b> an archived blob to a new online blob (Copy Blob operation with a target tier) rehydrates the copy, while the original stays in the Archive tier.</p><p>Changing the tier would modify the original. A snapshot of an archived blob is also offline. A SAS doesn't make an archived blob readable.</p><p><b>4. The “Archive after 90 days” rule immediately re-archives a rehydrated blob — condition to add:</b></p><p>The <b>daysAfterLastTierChangeGreaterThan</b> condition (days since the last tier change) is used with tierToArchive: a blob that was just rehydrated won't be re-archived before the chosen delay.</p><p>The creation date and modification date don't change during rehydration, hence the problem.</p><p><b>5. On a Premium block blob account, a rule must move blobs to Cool:</b></p><p><b>Premium</b> accounts don't support the Hot, Cool, Cold, and Archive tiers. Lifecycle management there can only <b>delete</b> blobs. To tier, you must copy the data to a Standard account.</p>",
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
 "keep": "Archive = offline; Standard rehydration (≤ 15 h) or High (< 1 h). Rehydration in progress: you can go from Standard to High, not the reverse. Reading without touching the archived original = copy to an online tier. Avoid re-archiving a rehydrated blob = daysAfterLastTierChangeGreaterThan. Premium: no tiers, lifecycle can only delete."
},
{
 "id": "D2-303",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are automating data management for the storage54 account. What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Cool at 30 days, Archive at 90 days, delete at 365 days, automatically:",
   "o": [
    "Blob soft delete",
    "A time-based immutability policy",
    "Object replication to a cheaper account",
    "A lifecycle management policy"
   ],
   "a": 3
  },
  {
   "l": "A delete rule created an hour ago hasn't deleted anything yet — reason:",
   "o": [
    "The storage account must be restarted to activate the rule",
    "The policy runs once a day (up to 24 h the first time)",
    "Soft delete prevents the policy from working",
    "Policies only apply to new blobs"
   ],
   "a": 1
  },
  {
   "l": "Archive blobs tagged status = done, whatever their folder — filter:",
   "o": [
    "prefixMatch",
    "containerName",
    "blobIndexMatch",
    "daysAfterModificationGreaterThan"
   ],
   "a": 2
  },
  {
   "l": "A weekly CSV of all blobs with size, tier, and modified date:",
   "o": [
    "The blob service's diagnostic logs",
    "Change feed",
    "Lifecycle management",
    "Blob inventory"
   ],
   "a": 3
  },
  {
   "l": "Find the account's expired blobs without walking through them one by one:",
   "o": [
    "Blob index tags",
    "Blob metadata",
    "The blobs' system properties",
    "Each blob's container name"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Cool at 30 days, Archive at 90 days, delete at 365 days, automatically:</b></p><p><b>Lifecycle management</b> applies rules (filtered by prefix, blob type, or index tag) that move blobs between tiers or delete them based on age: days since modification, creation, or last access.</p><p>Immutability prevents modification and deletion. Soft delete keeps deleted blobs. Object replication copies to another account.</p><p><b>2. A delete rule created an hour ago hasn't deleted anything yet — reason:</b></p><p>The lifecycle engine processes policies <b>once a day</b>. After a policy is created or changed, allow up to 24 hours for it to take effect, and then processing itself can take time depending on the number of blobs.</p><p>A storage account can't be restarted. The policy also applies to existing blobs. Soft delete keeps deleted blobs for its retention period, but doesn't prevent the policy.</p><p><b>3. Archive blobs tagged status = done, whatever their folder — filter:</b></p><p>The <b>blobIndexMatch</b> filter selects blobs by their <b>index tags</b> (name, operator, value). Index tags are indexed, queryable key/value pairs, different from metadata.</p><p><b>prefixMatch</b> filters by name prefix, <b>blobTypes</b> by blob type. containerName isn't a lifecycle filter.</p><p><b>4. A weekly CSV of all blobs with size, tier, and modified date:</b></p><p><b>Blob inventory</b> generates, on a daily or weekly schedule, a CSV or Parquet report of all blobs (or containers) with the chosen fields.</p><p>Change feed records changes. Diagnostic logs record requests. Lifecycle moves or deletes blobs.</p><p><b>5. Find the account's expired blobs without walking through them one by one:</b></p><p><b>Index tags</b> are indexed by the service: the <b>Find Blobs by Tags</b> operation finds matching blobs across the whole account. They also serve as a filter for lifecycle rules.</p><p><b>Metadata</b> is stored with the blob but isn't indexed: you'd have to read each blob.</p>",
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
 "keep": "Move or delete based on age = lifecycle management. Lifecycle: daily processing, up to 24 h before the first effect. Filtering by index tag = blobIndexMatch. Periodic list of blobs = blob inventory. Account-wide search = index tags (Find Blobs by Tags)."
},
{
 "id": "D2-304",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Production data was deleted or corrupted. What can you do in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Return all block blobs to their state on a date in the last 14 days:",
   "o": [
    "Geo-failover of the account",
    "Manual blob snapshots",
    "Object replication to another account",
    "Point-in-time restore"
   ],
   "a": 3
  },
  {
   "l": "Container deleted 3 days ago; blob soft delete only (7 days):",
   "o": [
    "Yes, with point-in-time restore",
    "Yes, by restoring the container from the list of deleted containers",
    "No, because container soft delete wasn't enabled",
    "Yes, by restoring each deleted blob"
   ],
   "a": 2
  },
  {
   "l": "share3 deleted this morning; share soft delete at 14 days:",
   "o": [
    "Restore share3 from a snapshot of share3",
    "Create a new share3 share: the data comes back",
    "Nothing: a deleted share can't be restored",
    "Show deleted shares and undelete share3"
   ],
   "a": 3
  },
  {
   "l": "storage32 account deleted 3 days ago, name not reused:",
   "o": [
    "Restore it from the portal (deleted account)",
    "Nothing: deleting an account is permanent",
    "Restore it from the subscription's activity log",
    "Restore it with blob soft delete"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Return all block blobs to their state on a date in the last 14 days:</b></p><p><b>Point-in-time restore</b> puts containers (or blob ranges) of block blobs back in their state at a chosen date. It requires <b>versioning</b>, <b>change feed</b>, and <b>blob soft delete</b>, with a restore period shorter than the soft delete retention.</p><p>Manual snapshots require blob-by-blob management. Replication and failover would copy the corruption too.</p><p><b>2. Container deleted 3 days ago; blob soft delete only (7 days):</b></p><p><b>Blob</b> soft delete protects blobs deleted one by one. When an entire <b>container</b> is deleted, only <b>container</b> soft delete lets you restore it. It wasn't enabled: the data is lost.</p><p>Point-in-time restore doesn't restore a deleted container either. Best practice: enable both soft deletes, and a lock on the account against deleting the account itself.</p><p><b>3. share3 deleted this morning; share soft delete at 14 days:</b></p><p>With <b>share soft delete</b>, a deleted share is kept for the retention period. You display it in the share list (“Show deleted shares” option) and <b>undelete</b> it, with its snapshots.</p><p>Snapshots are deleted with the share when there's no soft delete. Creating a share with the same name restores nothing.</p><p><b>4. storage32 account deleted 3 days ago, name not reused:</b></p><p>A deleted storage account can be <b>recovered for 14 days</b>, as long as no account with the same name has been recreated and the resource group still exists. Data isn't guaranteed if it had been deleted before the account.</p><p>Blob soft delete doesn't protect against deleting the account: for that, you use a CanNotDelete <b>lock</b>.</p>",
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
 "keep": "Returning a whole account to a date = point-in-time restore (block blobs). Deleted container = only container soft delete can save it. Deleted share = undelete (if share soft delete is on). Deleted account: recoverable for 14 days (if the name is free). Better: a lock."
},
{
 "id": "D2-305",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Users of your Azure file shares report several issues. What should you do or check in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A file overwritten 2 days ago, nightly snapshots — the user recovers it themselves:",
   "o": [
    "By rehydrating the file from the Archive tier",
    "By opening a restore request with Microsoft",
    "With the file's Previous Versions tab",
    "With the client's Windows Recycle Bin"
   ],
   "a": 2
  },
  {
   "l": "Up to 200 restore points for a share, scheduled or on demand:",
   "o": [
    "Object replication",
    "Change feed",
    "Blob versioning",
    "Share snapshots"
   ],
   "a": 3
  },
  {
   "l": "“Insufficient space” error on a 500 GiB share, account under its limits:",
   "o": [
    "Enable soft delete",
    "Change the account's redundancy",
    "Switch the account to Premium",
    "Increase the share's quota"
   ],
   "a": 3
  },
  {
   "l": "SMB mount from on-premises fails — most frequent cause:",
   "o": [
    "TCP port 3389 is closed on the computer",
    "Outbound TCP port 445 is blocked",
    "storage17 uses LRS redundancy, not ZRS",
    "The share is in the Hot tier, not Optimized"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. A file overwritten 2 days ago, nightly snapshots — the user recovers it themselves:</b></p><p>Azure Files <b>share snapshots</b> are exposed in Windows on the <b>Previous Versions</b> tab: the user can open or restore an older version.</p><p>The Windows Recycle Bin doesn't see files on the network share. Azure Files has no Archive tier.</p><p><b>2. Up to 200 restore points for a share, scheduled or on demand:</b></p><p>An Azure file share can have up to <b>200 snapshots</b>. They're read-only, incremental copies of the share at a point in time. Azure Backup uses them to schedule and manage retention.</p><p>Versioning, object replication, and change feed are blob features.</p><p><b>3. “Insufficient space” error on a 500 GiB share, account under its limits:</b></p><p>A file share's <b>quota</b> limits its size, independently of the account's capacity. You increase it in the share's properties (up to 100 TiB with large file shares).</p><p>For a provisioned Premium share, increasing the quota also increases performance (and cost).</p><p><b>4. SMB mount from on-premises fails — most frequent cause:</b></p><p>SMB uses <b>TCP port 445</b>. Many ISPs and corporate firewalls block it to the internet. Solutions: open the port, go through a VPN or ExpressRoute with a private endpoint, or use Azure File Sync.</p><p>The tier and the redundancy don't prevent mounting. Port 3389 is for RDP.</p>",
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
 "keep": "Share snapshots = Previous Versions in Windows. Share snapshots: 200 max, incremental, used by Azure Backup. Space error on a share = the share's quota. SMB = port 445; often blocked by ISPs."
},
{
 "id": "D2-306",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You issue and revoke shared access signatures (SAS). What should you do or answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Revoke all SAS tied to PolPartenaires without touching the keys:",
   "o": [
    "Regenerate the account's key1 and key2",
    "Delete the share container and recreate it",
    "Enable the storage account firewall",
    "Modify the stored access policy"
   ],
   "a": 3
  },
  {
   "l": "An account SAS signed with key1, with no stored policy, leaked:",
   "o": [
    "Regenerate key1",
    "Regenerate key2",
    "Delete the stored access policy",
    "Change the account's access tier"
   ],
   "a": 0
  },
  {
   "l": "Create a user delegation SAS valid for 30 days:",
   "o": [
    "The SAS is created with no expiry date",
    "A stored access policy is required on the container",
    "The SAS is created for 30 days, as requested",
    "Creation fails: 7 days maximum"
   ],
   "a": 3
  },
  {
   "l": "Create 8 stored access policies on a single container:",
   "o": [
    "Only 5 policies are possible per container",
    "You need one container per policy",
    "Policies must be created at the account level",
    "All 8 policies are created"
   ],
   "a": 0
  },
  {
   "l": "An app must download a single blob for 2 hours without an account key:",
   "o": [
    "The Contributor role on the storage account",
    "The account's key1 access key, revoked afterward",
    "A read SAS on the blob, valid for 2 hours",
    "The blob's URL, after making the container public"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Revoke all SAS tied to PolPartenaires without touching the keys:</b></p><p>A service SAS tied to a <b>stored access policy</b> gets its permissions and expiry from that policy. By deleting the policy (or changing its expiry), you revoke all associated SAS.</p><p>Regenerating the keys would also revoke these SAS, but would break every application that uses the keys. Deleting the container destroys the data. The firewall filters the network, not SAS.</p><p><b>2. An account SAS signed with key1, with no stored policy, leaked:</b></p><p>An account SAS is signed with an account key. The only way to invalidate it before it expires is to <b>regenerate the key that signed it</b>, here key1. All SAS signed with key1 become invalid.</p><p>That's why there are two keys: you switch applications to key2, then regenerate key1. Account SAS can't use a stored access policy.</p><p><b>3. Create a user delegation SAS valid for 30 days:</b></p><p>A user delegation SAS is signed by a <b>user delegation key</b>, valid for at most <b>7 days</b>. The SAS can't last longer than this key.</p><p>User delegation SAS don't support stored access policies. For long-lived access, prefer giving a role to an identity.</p><p><b>4. Create 8 stored access policies on a single container:</b></p><p>A container (or a share, queue, or table) can have at most <b>5 stored access policies</b>. For 8 partners, you can group partners, use several containers, or prefer user delegation SAS.</p><p><b>5. An app must download a single blob for 2 hours without an account key:</b></p><p>A <b>SAS</b> grants limited access: a resource (here a blob), permissions (here <code>sp=r</code>), and a duration (<code>se</code>). The application never gets the account key.</p><p>The account key gives full, permanent access. Contributor manages the account without giving data access with its identity. Making the container public would expose all its blobs to everyone, with no time limit.</p>",
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
 "keep": "SAS tied to a stored access policy = revoked by deleting the policy. Account SAS = revoked by regenerating its key; switch applications to the other key first. User delegation SAS: 7 days maximum. 5 stored access policies max per container, share, queue, or table. Access limited to one resource, one action, one duration = SAS."
},
{
 "id": "D2-307",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Security wants to reduce the use of storage account keys. What should you configure or assign for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Automatic reminder to rotate storage53's keys every 90 days:",
   "o": [
    "A lifecycle policy on the keys",
    "A key expiration policy",
    "A budget alert on the storage account",
    "A 90-day stored access policy"
   ],
   "a": 1
  },
  {
   "l": "An app must create user delegation SAS — minimum permission:",
   "o": [
    "Owner on the subscription",
    "The generateUserDelegationKey action",
    "The right to list the account keys (listKeys)",
    "Global Administrator of the tenant"
   ],
   "a": 1
  },
  {
   "l": "URL to read a blob for 10 minutes, shared key access forbidden:",
   "o": [
    "No SAS is possible",
    "A user delegation SAS",
    "An account SAS signed with key1",
    "A service SAS signed with key1"
   ],
   "a": 1
  },
  {
   "l": "Only Microsoft Entra authentication must be possible on storage8:",
   "o": [
    "Disable secure transfer required",
    "Disable account key access (Shared Key)",
    "Regenerate both access keys every day",
    "Enable the account's hierarchical namespace"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Automatic reminder to rotate storage53's keys every 90 days:</b></p><p>In <b>Access keys</b>, the <b>Set rotation reminder</b> option creates a key expiration policy: past the deadline, Azure flags the key as due for rotation (and an Azure Policy can enforce this rule). For fully automatic rotation, you can also hand the keys to Key Vault or, better, use Entra ID.</p><p><b>2. An app must create user delegation SAS — minimum permission:</b></p><p>To get a user delegation key, the identity must be able to call <code>Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action</code>, included in the <b>Storage Blob Delegator</b> role (and in the Storage Blob Data Contributor, Owner, and Reader roles). The SAS then can't grant more rights than the identity has on the data.</p><p>No access to the account keys is needed: that's the whole point of this SAS type.</p><p><b>3. URL to read a blob for 10 minutes, shared key access forbidden:</b></p><p>When <b>shared key</b> access is disabled, account and service SAS (signed by an account key) are rejected. The <b>user delegation SAS</b>, signed through Microsoft Entra, remains usable.</p><p><b>4. Only Microsoft Entra authentication must be possible on storage8:</b></p><p>The <b>Allow storage account key access</b> setting (AllowSharedKeyAccess = false) blocks every request authorized with a shared key, including account and service SAS. User delegation SAS, signed through Entra, keep working.</p><p>Regenerating keys doesn't forbid them. Hierarchical namespace is for Data Lake. Disabling secure transfer would allow HTTP: the opposite of security.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage53"
  ],
  "title": "storage53 | Access keys",
  "menu": [
   "*Access keys"
  ],
  "rows": [
   [
    "*Set rotation reminder",
    "Every 90 days"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Key rotation reminder = Access keys > Set rotation reminder. Creating delegation SAS = generateUserDelegationKey (Storage Blob Delegator). Shared key disabled = only the user delegation SAS works. Forbidding keys and key-signed SAS = disable shared key access."
},
{
 "id": "D2-308",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are deploying Azure File Sync between servers FS-PARIS and FS-LYON and the Azure share share14. What should you answer or do in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "report.docx is changed at the same time on both servers:",
   "o": [
    "It blocks sync until a manual decision",
    "It merges the content of both conflicting files",
    "It keeps both: one is renamed with a suffix",
    "It keeps only the most recent version"
   ],
   "a": 2
  },
  {
   "l": "Files copied to share14 from the portal don't appear on the servers:",
   "o": [
    "The portal can't write to a synced share",
    "Cloud tiering blocks new files",
    "The agent must be restarted on the server",
    "A job detects these changes every 24 hours"
   ],
   "a": 3
  },
  {
   "l": "Component to install on a new Windows Server 2022 server:",
   "o": [
    "The Azure Monitor agent",
    "Scheduled AzCopy",
    "The Azure File Sync agent",
    "Microsoft Entra Connect"
   ],
   "a": 2
  },
  {
   "l": "Remove a server while keeping its tiered files usable — before deleting the endpoint:",
   "o": [
    "Uninstall the agent immediately",
    "Delete the synced Azure share",
    "Delete the Storage Sync Service",
    "Recall all tiered files"
   ],
   "a": 3
  },
  {
   "l": "Volume D: must always keep 20% free space:",
   "o": [
    "The date policy at 20 days",
    "The Azure share quota at 20%",
    "The volume free space policy at 20%",
    "The soft delete retention at 20 days"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. report.docx is changed at the same time on both servers:</b></p><p>On a conflict, File Sync loses no changes: it keeps both files. The “winning” version keeps the original name; the other is renamed with the endpoint name (server or cloud) and a number, for example <code>report-FS-LYON.docx</code>.</p><p><b>2. Files copied to share14 from the portal don't appear on the servers:</b></p><p>Changes made on a <b>server</b> are detected in real time by the agent. Those made <b>directly in the Azure share</b> (portal, direct SMB, API) are detected by a <b>change detection job</b> that runs once every 24 hours. You can start it on demand with <code>Invoke-AzStorageSyncChangeDetection</code>.</p><p><b>3. Component to install on a new Windows Server 2022 server:</b></p><p>The <b>Azure File Sync agent</b> is installed on each supported Windows Server. It registers the server with the Storage Sync Service and handles sync and cloud tiering.</p><p>The other components don't take part in File Sync.</p><p><b>4. Remove a server while keeping its tiered files usable — before deleting the endpoint:</b></p><p>Tiered files are only <b>pointers</b> to Azure. If you delete the endpoint without recalling them, they become inaccessible on the server. You <b>recall</b> them first, for example with <code>Invoke-StorageSyncFileRecall</code>.</p><p>Deleting the share or the service would destroy data or configuration.</p><p><b>5. Volume D: must always keep 20% free space:</b></p><p>The <b>volume free space policy</b> makes File Sync tier (keep only a local pointer for) the least used files to maintain the desired free space. The <b>date policy</b> also tiers files not accessed for a number of days.</p><p>The quota limits the share's size in Azure. Soft delete is unrelated.</p>",
 "portal": {
  "path": [
   "Central-share",
   "Reports"
  ],
  "title": "File Explorer",
  "rows": [
   [
    "report.docx",
    "Winning version"
   ],
   [
    "*report-FS-LYON.docx",
    "Conflicting version, kept"
   ]
  ]
 },
 "keep": "File Sync conflict: both files are kept, the loser is renamed. Direct changes in the Azure share = detected every 24 h (or on demand). File Sync on a server = Azure File Sync agent + registration. Removing a server: recall tiered files first. Keep X% free = volume free space policy; old files = date policy."
},
{
 "id": "D2-309",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are securing network access to storage accounts from VNet1 and the on-premises site connected by VPN. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Only Subnet1 reaches storage10, with no private IP for the account:",
   "o": [
    "A private endpoint in Subnet1, without a DNS zone",
    "An outbound NSG rule to the Internet tag",
    "A NAT gateway on Subnet1 with an allowed IP",
    "A service endpoint and a virtual network rule"
   ],
   "a": 3
  },
  {
   "l": "The on-premises site reaches storage11 over a private IP:",
   "o": [
    "A private endpoint and the privatelink.blob zone",
    "An IP rule for the on-premises site in the firewall",
    "The Archive access tier for sensitive blobs",
    "A service endpoint on the GatewaySubnet"
   ],
   "a": 0
  },
  {
   "l": "On-premises servers still resolve storage36.file.core.windows.net to the public address:",
   "o": [
    "The root folder's NTFS permissions",
    "The storage account's redundancy",
    "DNS resolution to the private address",
    "The share's tier (Transaction optimized)"
   ],
   "a": 2
  },
  {
   "l": "storage37 has a blob private endpoint; its file share must be private too:",
   "o": [
    "Enable a service endpoint",
    "Add the file service to the account firewall",
    "Nothing: the blob endpoint covers every service",
    "A second private endpoint (file sub-resource)"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Only Subnet1 reaches storage10, with no private IP for the account:</b></p><p>A <b>service endpoint</b> routes the subnet's traffic to storage over the Azure network, identifying it as coming from Subnet1. You then add Subnet1 to the account's <b>firewall</b> (“Enabled from selected virtual networks and IP addresses”). The account keeps its public address.</p><p>A private endpoint would give the account a private IP address, which isn't wanted. An NSG or a NAT gateway doesn't restrict access on the account side.</p><p><b>2. The on-premises site reaches storage11 over a private IP:</b></p><p>A <b>private endpoint</b> creates a network interface with a private IP address from VNet1 for the account. The on-premises site reaches it through the VPN. The name <code>storage11.blob.core.windows.net</code> must resolve to this private address: private DNS zone <code>privatelink.blob.core.windows.net</code>, and DNS forwarding from the on-premises site.</p><p>Service endpoints don't work from on-premises. An IP rule would go over the internet.</p><p><b>3. On-premises servers still resolve storage36.file.core.windows.net to the public address:</b></p><p>The private endpoint works, but the client must resolve <code>storage36.file.core.windows.net</code> to the <b>private address</b>. In Azure, the private DNS zone <code>privatelink.file.core.windows.net</code> linked to the virtual network handles it. From on-premises, you need a <b>conditional forwarder</b> to a DNS resolver in Azure (Azure DNS Private Resolver or a DNS server).</p><p><b>4. storage37 has a blob private endpoint; its file share must be private too:</b></p><p>A private endpoint targets <b>a single sub-resource</b>: blob, file, queue, table, dfs, or web. For Azure Files, you need a second private endpoint with the <b>file</b> sub-resource (and the privatelink.file.core.windows.net DNS zone).</p>",
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
 "keep": "Service endpoint = public address kept, access filtered by subnet. Private IP, access from on-premises = private endpoint + private DNS. Private endpoint = private DNS; from on-premises, a conditional forwarder. One private endpoint per sub-resource (blob, file, queue, table, dfs, web)."
},
{
 "id": "D2-310",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are configuring the firewall of several storage accounts. What should you choose for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "storage39 reachable only through private endpoints:",
   "o": [
    "Enabled from selected virtual networks and IP addresses, with no rules",
    "Public network access: Disabled",
    "Enabled from selected virtual networks with a service endpoint",
    "Enabled from all networks"
   ],
   "a": 1
  },
  {
   "l": "From Subnet1, only RG-Data accounts are reachable through the service endpoint:",
   "o": [
    "A route table",
    "A firewall on each account",
    "A service endpoint policy",
    "An NSG rule with the Storage service tag"
   ],
   "a": 2
  },
  {
   "l": "Azure Backup and Azure Monitor must write to storage13 despite the firewall:",
   "o": [
    "The account's static website",
    "The trusted Azure services exception",
    "Anonymous access to the container's blobs",
    "Geo-redundancy with secondary read"
   ],
   "a": 1
  },
  {
   "l": "Only one Synapse instance may reach storage38:",
   "o": [
    "A resource instance rule",
    "A read account SAS",
    "Anonymous access on the container",
    "The exception for all trusted services"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. storage39 reachable only through private endpoints:</b></p><p><b>Disabled</b> blocks all access through the public endpoint. Only private endpoints remain usable.</p><p>“Selected networks with no rules” also blocks almost everything, but exceptions (trusted services, instance rules) can let public traffic through. Service endpoints go through the public address.</p><p><b>2. From Subnet1, only RG-Data accounts are reachable through the service endpoint:</b></p><p>A <b>service endpoint policy</b>, associated with the subnet, lists the storage accounts (or resource groups, subscriptions) allowed through the service endpoint. It prevents exfiltration to any storage account.</p><p>The Storage service tag in an NSG covers <b>all</b> storage accounts in Azure (or a region), not a specific list.</p><p><b>3. Azure Backup and Azure Monitor must write to storage13 despite the firewall:</b></p><p>The <b>trusted services</b> exception (trusted Microsoft services) lets through certain Azure services (Backup, Monitor, Event Grid…) that can't go through your virtual networks. You can also use resource instance rules, which are more precise.</p><p>Anonymous access would expose the data to everyone. The other two options are unrelated.</p><p><b>4. Only one Synapse instance may reach storage38:</b></p><p>A <b>resource instance rule</b> allows one specific instance of an Azure service (identified by its resource ID), relying on its managed identity and roles. It's more precise than the “trusted services” exception, which lets through every service of a type.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage39"
  ],
  "title": "storage39 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Public network access",
    "Disabled"
   ],
   [
    "Private endpoints",
    "Only possible access"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Private only = public network access disabled. Limiting accounts reachable through a service endpoint = service endpoint policy. Backup, Monitor… behind the firewall = trusted services exception. Allowing one specific instance of a service = resource instance rule."
},
{
 "id": "D2-311",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are exposing blob storage content to external users. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "images container readable without authentication; anonymous access disabled on the account:",
   "o": [
    "Enable static website on the account",
    "Create a SAS with no expiry for images",
    "Anonymous access on the account, container at Blob level",
    "Set the container to Container level, without touching the account"
   ],
   "a": 2
  },
  {
   "l": "Lowest-cost static website — where to upload files:",
   "o": [
    "In the $web container",
    "In the $root container",
    "In a file share named www",
    "In a table named web"
   ],
   "a": 0
  },
  {
   "l": "A partner uploads files with an SFTP client, with no SAS or key:",
   "o": [
    "Enable static website with an upload folder",
    "Create an NFS share reachable from the internet",
    "Enable anonymous write access on the container",
    "Enable SFTP and create a local user"
   ],
   "a": 3
  },
  {
   "l": "JavaScript on www.contoso.com uploads files to storage64; the browser blocks it:",
   "o": [
    "Anonymous write access on the container",
    "A private endpoint for the account",
    "RA-GRS redundancy for reads",
    "A CORS rule for https://www.contoso.com"
   ],
   "a": 3
  },
  {
   "l": "storage65's static site over HTTPS on www.contoso.com:",
   "o": [
    "Azure Front Door with the domain and a certificate",
    "Soft delete for the site's blobs",
    "A private endpoint on the static website",
    "An account SAS added to the site's URLs"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. images container readable without authentication; anonymous access disabled on the account:</b></p><p>Anonymous access is set at two levels. The <b>account</b> must allow it; otherwise, container settings are ignored. Then each <b>container</b> has an access level: <b>Private</b>, <b>Blob</b> (anonymous read of blobs, without listing), or <b>Container</b> (read and list blobs).</p><p>Setting only the container isn't enough when the account forbids it. A SAS always has an expiry. Static website uses the $web container, not images.</p><p><b>2. Lowest-cost static website — where to upload files:</b></p><p>Enabling <b>static website</b> creates the <b>$web</b> container. You upload the files there, and set the index document (index.html) and the 404 error page. The site is served at <code>&lt;account&gt;.z&lt;n&gt;.web.core.windows.net</code>.</p><p>The $root container is for the root address of the blob service, not for the static website.</p><p><b>3. A partner uploads files with an SFTP client, with no SAS or key:</b></p><p><b>SFTP support</b> for Azure Blob Storage requires <b>hierarchical namespace</b>. You create <b>local users</b> (with a password or SSH key) and grant them permissions on containers.</p><p>Static website is read-only. NFS isn't SFTP. Anonymous access never allows writing.</p><p><b>4. JavaScript on www.contoso.com uploads files to storage64; the browser blocks it:</b></p><p>Browsers block requests to another domain unless the server allows them through <b>CORS</b> (cross-origin resource sharing). A CORS rule on the blob service, with the allowed origin, methods (PUT, GET…), and headers, solves the problem. Authentication will go through a SAS or Entra.</p><p><b>5. storage65's static site over HTTPS on www.contoso.com:</b></p><p>The static website accepts a custom domain over HTTP, but <b>not over HTTPS</b> with a custom certificate. For HTTPS on your domain, you put <b>Azure Front Door</b> (or Azure CDN) in front of the account, which manages the certificate.</p>",
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
 "keep": "Anonymous access: allowed on the account, then Blob or Container level on the container. Static website = $web container. SFTP on blobs = hierarchical namespace + local users. Browser blocking a call to storage = CORS rule. HTTPS on a custom domain for a static site = Front Door or CDN."
},
{
 "id": "D2-312",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You monitor several storage accounts. What should you check or configure for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Up to what time storage51 (GRS) data is replicated to the secondary:",
   "o": [
    "The account's transaction metrics",
    "Last Sync Time",
    "The account's change feed",
    "The subscription's activity log"
   ],
   "a": 1
  },
  {
   "l": "Trace each blob read and delete with the caller, analyzed in KQL:",
   "o": [
    "A blob diagnostic setting (StorageRead, StorageDelete)",
    "Last access time tracking",
    "The storage account's activity log, exported to a workspace",
    "A metric alert on blob transactions"
   ],
   "a": 0
  },
  {
   "l": "storage72's data volume and its trend over a month:",
   "o": [
    "The account's metrics (Used capacity)",
    "The account's access keys",
    "The subscription's activity log",
    "The storage account's Redundancy page"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Up to what time storage51 (GRS) data is replicated to the secondary:</b></p><p>The <b>Last Sync Time</b>, shown on the Redundancy page (and through PowerShell or CLI), guarantees that all earlier writes are in the secondary region. Later writes could be lost in a failover.</p><p><b>2. Trace each blob read and delete with the caller, analyzed in KQL:</b></p><p>Storage <b>resource logs</b> (StorageRead, StorageWrite, StorageDelete) record operations on data. You enable them with a <b>diagnostic setting</b> on the blob service and send them to Log Analytics to query with KQL.</p><p>The activity log only records the control plane. Last access tracking doesn't give the caller. A metric doesn't contain the detail of each request.</p><p><b>3. storage72's data volume and its trend over a month:</b></p><p>The <b>Used capacity</b> metric, and per service the blob or file capacity, shows the stored volume and its change over time. Capacity metrics are updated about once a day.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage51"
  ],
  "title": "storage51 | Redundancy",
  "menu": [
   "*Redundancy"
  ],
  "rows": [
   [
    "*Last sync time",
    "2026-10-27 10:05 UTC"
   ]
  ]
 },
 "keep": "Where the secondary stands = Last Sync Time. Recording data access = diagnostic setting on the service (blob, file…). Stored volume and trend = Used capacity metric."
},
{
 "id": "D2-313",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are connecting storage61 to other services and accounts. What should you answer or configure in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The object replication policy to an account in the Fabrikam tenant fails:",
   "o": [
    "Anonymous blob access",
    "Infrastructure encryption",
    "Cross-tenant replication",
    "The accounts' default access tier"
   ],
   "a": 2
  },
  {
   "l": "Object replication is created on a container with 10,000 blobs — existing blobs:",
   "o": [
    "They're always replicated first",
    "They're never replicated",
    "They're moved to the destination and deleted from the source",
    "Depending on the option: all, new only, or after a date"
   ],
   "a": 3
  },
  {
   "l": "An app must be notified of each new blob in the upload container:",
   "o": [
    "A private endpoint on the account",
    "A lifecycle policy that triggers the action",
    "An Event Grid event subscription",
    "Object replication to a processing account"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. The object replication policy to an account in the Fabrikam tenant fails:</b></p><p>Object replication to an account in <b>another Microsoft Entra tenant</b> must be allowed by the <b>Allow cross-tenant replication</b> setting (AllowCrossTenantReplication), disabled by default on new accounts.</p><p><b>2. Object replication is created on a container with 10,000 blobs — existing blobs:</b></p><p>An object replication rule offers to <b>copy all objects</b>, <b>only new objects</b>, or a custom date filter. Replication <b>copies</b> blobs; it never deletes them from the source.</p><p><b>3. An app must be notified of each new blob in the upload container:</b></p><p>Blob storage publishes events (<code>BlobCreated</code>, <code>BlobDeleted</code>…) to <b>Azure Event Grid</b>. An event subscription, filtered on the container, can trigger a function, a logic app, or a webhook.</p><p>The other options notify nothing.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage61"
  ],
  "title": "storage61 | Object replication",
  "menu": [
   "*Object replication"
  ],
  "rows": [
   [
    "*Allow cross-tenant replication",
    "Enabled"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Replication to another tenant = AllowCrossTenantReplication. Replication copies, never deletes; existing blobs depend on the chosen option. Reacting to a new blob = Event Grid."
},
{
 "id": "D2-314",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Domain users access Azure Files shares with their identity. What should you configure or answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "share4 with AD DS accounts (synced) and NTFS permissions — configure first:",
   "o": [
    "Identity-based authentication with AD DS",
    "The NFS 4.1 protocol on a Premium account",
    "Anonymous read access to the share",
    "An account SAS distributed to users"
   ],
   "a": 0
  },
  {
   "l": "No on-premises AD, VMs joined to Microsoft Entra Domain Services — identity source:",
   "o": [
    "None: use the account key",
    "Microsoft Entra Domain Services",
    "Microsoft Entra Connect Sync alone",
    "On-premises AD DS"
   ],
   "a": 1
  },
  {
   "l": "SMB Share Contributor on share15, read-only NTFS on Payroll — in Payroll:",
   "o": [
    "Read and write",
    "Read only",
    "Nothing",
    "Change NTFS permissions"
   ],
   "a": 1
  },
  {
   "l": "Initial configuration of share16's root NTFS permissions:",
   "o": [
    "Use a write account SAS",
    "Configure the permissions in the firewall",
    "Mount with Elevated Contributor (or the key), then icacls",
    "Configure the NTFS permissions in the Azure portal"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. share4 with AD DS accounts (synced) and NTFS permissions — configure first:</b></p><p>To use domain accounts, you enable the storage account's <b>identity-based authentication</b>: on-premises AD DS (the storage account is represented by a computer object in the domain, for example with the AzFilesHybrid module), Microsoft Entra Domain Services, or Microsoft Entra Kerberos for hybrid identities.</p><p>You then assign share-level permissions (RBAC roles), then NTFS permissions on folders and files.</p><p><b>2. No on-premises AD, VMs joined to Microsoft Entra Domain Services — identity source:</b></p><p><b>Microsoft Entra Domain Services</b> provides a managed domain (Kerberos, NTLM) synchronized with Microsoft Entra ID. Azure Files can use it as an identity source for VMs joined to that domain.</p><p>There's no on-premises AD. The account key doesn't go through the user's identity. Entra Connect is a sync tool, not an identity source for Azure Files.</p><p><b>3. SMB Share Contributor on share15, read-only NTFS on Payroll — in Payroll:</b></p><p><b>Share-level</b> (RBAC) and <b>NTFS</b> permissions both apply: the result is the <b>most restrictive</b> of the two. The share allows writing, but NTFS gives only reading: he can only read.</p><p><b>4. Initial configuration of share16's root NTFS permissions:</b></p><p>NTFS ACLs are managed from a Windows client: you mount the share with an identity allowed to change ACLs (<b>SMB Share Elevated Contributor</b>, or the account key, which acts as a superuser), then use <b>Windows Explorer</b> or <b>icacls</b>.</p><p>The portal doesn't manage Azure Files NTFS ACLs.</p>",
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
 "keep": "Domain accounts on Azure Files = AD DS authentication (account joined to the domain). No on-premises AD, VMs joined to a managed domain = Entra Domain Services. Share + NTFS = the more restrictive of the two. Azure Files NTFS ACLs = from Windows (Explorer/icacls), not the portal."
},
{
 "id": "D2-315",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Users and apps access blob and Data Lake data. What should you assign or use in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "User22 (Reader) sees containers but can't open a blob with their Entra account:",
   "o": [
    "Owner",
    "Storage Blob Data Reader",
    "Contributor on the storage account",
    "Reader and Data Access (keys)"
   ],
   "a": 1
  },
  {
   "l": "azcopy login, upload to upload fails with 403 — missing role:",
   "o": [
    "Storage Account Contributor",
    "Network Contributor",
    "Storage Blob Data Contributor",
    "Reader and Data Access"
   ],
   "a": 2
  },
  {
   "l": "App access to a specific Data Lake Storage Gen2 subfolder:",
   "o": [
    "An RBAC role on the subfolder",
    "POSIX ACLs on the folder",
    "A stored access policy on the container",
    "The Container access level"
   ],
   "a": 1
  },
  {
   "l": "A process gets an exclusive write lock on a blob:",
   "o": [
    "A read-only SAS",
    "A legal hold",
    "An Azure resource lock",
    "A lease on the blob"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. User22 (Reader) sees containers but can't open a blob with their Entra account:</b></p><p>Reader only gives the control plane. To read blobs with his Entra identity, he needs a <b>data</b> role: <b>Storage Blob Data Reader</b>.</p><p>Contributor and Owner can list the account keys and so access data with the key, but that's too many rights. The Reader and Data Access role allows listing keys: it also gives too much access.</p><p><b>2. azcopy login, upload to upload fails with 403 — missing role:</b></p><p>With Entra authentication, AzCopy acts with the identity's rights on the <b>data</b>. To write blobs, you need <b>Storage Blob Data Contributor</b> (or Storage Blob Data Owner) on the container or account.</p><p>Storage Account Contributor manages the account, but doesn't grant data access with the identity. Neither do Reader and Network Contributor.</p><p><b>3. App access to a specific Data Lake Storage Gen2 subfolder:</b></p><p>With hierarchical namespace, you can assign <b>POSIX ACLs</b> (read, write, execute) on each folder and file. RBAC roles can be assigned at most at the container level, not on a folder.</p><p>The two mechanisms combine: RBAC is evaluated first, then ACLs.</p><p><b>4. A process gets an exclusive write lock on a blob:</b></p><p>A <b>lease</b> gives a client an exclusive write and delete lock on a blob (or container), for 15 to 60 seconds or infinite. Other clients must present the lease ID to write.</p><p>A legal hold blocks everyone. A resource lock acts on the control plane. A read-only SAS doesn't stop others from writing.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage40"
  ],
  "title": "storage40 | Access Control (IAM)",
  "menu": [
   "*Access Control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Storage Blob Data Reader"
   ],
   [
    "Members",
    "User22"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Seeing the account = Reader; reading blobs with Entra = data role. AzCopy with Entra = data role (Storage Blob Data Contributor to write). Per-folder rights in Data Lake = POSIX ACLs; RBAC at best per container. Exclusive write lock on a blob = lease."
},
{
 "id": "D2-316",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You need to transfer data to or from Azure. Which solution should you use for each transfer?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "500 GB between storageA and storageB, in two regions, not through your computer:",
   "o": [
    "AzCopy copy between the two URLs (server-to-server copy)",
    "Robocopy",
    "Azure Import/Export",
    "Download the blobs with Storage Explorer, then upload them"
   ],
   "a": 0
  },
  {
   "l": "60 TB in two weeks over a 100 Mbps connection:",
   "o": [
    "Azure File Sync",
    "Azure Data Box",
    "A site-to-site VPN",
    "AzCopy over the internet"
   ],
   "a": 1
  },
  {
   "l": "Prepare your own disks for Azure Import/Export — tool:",
   "o": [
    "Robocopy alone",
    "Azure Storage Explorer",
    "WAImportExport",
    "AzCopy"
   ],
   "a": 2
  },
  {
   "l": "Export 20 TB from storage41 to your site on disks:",
   "o": [
    "Azure Import/Export or Azure Data Box",
    "AzCopy sync over a 100 Mbps link",
    "Azure File Sync with cloud tiering",
    "Object replication to the on-premises site"
   ],
   "a": 0
  },
  {
   "l": "25 TB on SSDs connected over USB to a server:",
   "o": [
    "Data Box Disk",
    "Data Box Next Gen 525",
    "Azure Import/Export with your own tapes",
    "Data Box Gateway"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. 500 GB between storageA and storageB, in two regions, not through your computer:</b></p><p>When both source and destination are Azure storage URLs, <b>AzCopy</b> uses the <b>server-to-server</b> copy APIs: data goes directly from one account to the other, without passing through the machine running the command.</p><p>Downloading then uploading routes the data through your computer. Import/Export uses physical disks. Robocopy can't write to blobs.</p><p><b>2. 60 TB in two weeks over a 100 Mbps connection:</b></p><p>At 100 Mbps, 60 TB would take more than <b>55 days</b> of continuous transfer. <b>Azure Data Box</b> is a physical device that Microsoft ships to you: you copy the data over your local network, ship it back, and Microsoft uploads it to your storage account.</p><p>AzCopy, File Sync, and a VPN all go through the same too-slow connection.</p><p><b>3. Prepare your own disks for Azure Import/Export — tool:</b></p><p>The <b>WAImportExport</b> tool prepares the disks: it copies the data, encrypts it with <b>BitLocker</b>, and generates the journal files needed for the import job. (For Azure Files, a CSV file describes the data.)</p><p>AzCopy and Storage Explorer transfer over the network. Robocopy alone produces neither encryption nor an import journal.</p><p><b>4. Export 20 TB from storage41 to your site on disks:</b></p><p>An Import/Export <b>export job</b> copies blobs to disks that Microsoft ships back to you. Azure Data Box also offers export. Note: Import/Export exports only <b>blobs</b>, not Azure Files.</p><p>File Sync, AzCopy, and replication go over the network.</p><p><b>5. 25 TB on SSDs connected over USB to a server:</b></p><p><b>Data Box Disk</b>: encrypted SSD disks (about 7 TB usable each, up to 5 disks per order, about 35 TB) connected over USB or SATA. Suited to a few tens of TB.</p><p><b>Data Box Next Gen</b> devices target much larger volumes (120 TB or 525 TB usable). <b>Data Box Gateway</b> is a virtual appliance for online transfer. Import/Export doesn't accept tapes.</p>",
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
 "keep": "Between two Azure accounts, AzCopy copies server to server. Large volume + slow link = Data Box (compute it: 60 TB at 100 Mbps ≈ 55 days). Import/Export with your own disks = WAImportExport (BitLocker + journals). Taking large volumes out offline = Import/Export (blobs) or Data Box. A few tens of TB on USB SSDs = Data Box Disk."
},
{
 "id": "D2-317",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You are migrating several apps and uses to Azure Storage. You need to choose the service or tool that meets each requirement.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Services and tools",
 "tgtHead": [
  "Requirement",
  "Service"
 ],
 "srcs": [
  "Queue storage",
  "Table storage",
  "Azure Files",
  "Azure Storage Explorer",
  "Azure File Sync with cloud tiering",
  "Blob storage (append blob)",
  "Azure Data Box"
 ],
 "tgts": [
  {
   "l": "Messages from a web app to a background worker, in arrival order",
   "a": 0
  },
  {
   "l": "Millions of device profiles as key/attribute pairs, schemaless, at the lowest cost",
   "a": 1
  },
  {
   "l": "An app reads and writes \\\\server\\data over SMB, code can't change",
   "a": 2
  },
  {
   "l": "Browse blobs, shares, and queues of several accounts from the desktop, and manage SAS",
   "a": 3
  },
  {
   "l": "10 branches: central data in Azure, fast local access to hot files",
   "a": 4
  }
 ],
 "expl": "<p><b>1. Messages from a web app to a background worker, in arrival order</b></p><p><b>Queue storage</b> stores messages (up to 64 KB each) that one component drops and another picks up to process. It's the simple way to decouple two components of an application.</p><p>Table storage stores key/attribute NoSQL data. Azure Files is for SMB/NFS shares. An append blob is a file, not a message queue.</p><p><b>2. Millions of device profiles as key/attribute pairs, schemaless, at the lowest cost</b></p><p><b>Table storage</b> is a schemaless key/attribute NoSQL store: each entity has a partition key and a row key, plus free-form properties. It's very cheap for large volumes of simple structured data.</p><p>Queues carry messages. Azure Files hosts files. Page blobs are for disks.</p><p><b>3. An app reads and writes \\\\server\\data over SMB, code can't change</b></p><p><b>Azure Files</b> provides shares accessible over <b>SMB</b> (and NFS), mounted like a network drive: the application keeps using a UNC path without changes.</p><p>Blob storage is used through the REST API or SDK, which would require code changes. Queues and tables aren't file systems.</p><p><b>4. Browse blobs, shares, and queues of several accounts from the desktop, and manage SAS</b></p><p><b>Azure Storage Explorer</b> is a free application (Windows, macOS, Linux) for managing blobs, files, queues, and tables, creating SAS, changing access tiers, and so on. It uses AzCopy for transfers.</p><p>Data Box is a transfer device, File Sync syncs servers, Entra Connect syncs identities.</p><p><b>5. 10 branches: central data in Azure, fast local access to hot files</b></p><p><b>Azure File Sync</b> syncs several servers (one server endpoint per branch) with the same Azure share (cloud endpoint). <b>Cloud tiering</b> keeps the most used files locally.</p><p>One account per branch centralizes nothing. AzCopy doesn't do multi-directional sync. Data Box is a one-off transfer.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Queues"
  ],
  "title": "orders | Queue",
  "rows": [
   [
    "*Messages",
    "Up to 64 KB each"
   ],
   [
    "Use",
    "Decouple components"
   ]
  ],
  "btn": "+ Add message"
 },
 "keep": "Messages between components = Queue. Key/attribute NoSQL = Table. Table = key/attribute NoSQL, very cheap. Application using an SMB share with no code change = Azure Files. Desktop app for storage = Azure Storage Explorer. Several sites + one central dataset + local cache = Azure File Sync."
},
{
 "id": "D2-318",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You automate transfers with AzCopy and give access to shares. What should you use in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Every night, mirror D:\\Backup to the backup container, deletions included:",
   "o": [
    "azcopy make on the target container",
    "azcopy copy with --recursive",
    "azcopy copy with --overwrite=false",
    "azcopy sync --delete-destination=true"
   ],
   "a": 3
  },
  {
   "l": "Resume a 2 TB transfer interrupted at 70%:",
   "o": [
    "Run azcopy copy again with --overwrite=true",
    "Delete the container and start again",
    "Use azcopy make",
    "azcopy jobs resume &lt;job id&gt;"
   ],
   "a": 3
  },
  {
   "l": "Delete all blobs in the temp/ folder of the data container:",
   "o": [
    "azcopy make \"https://storage73.blob.core.windows.net/data/temp\"",
    "azcopy copy --overwrite=false on the temp folder",
    "azcopy remove \"…/data/temp?xSASx\" --recursive",
    "azcopy sync --delete-destination=true to the temp folder"
   ],
   "a": 2
  },
  {
   "l": "Mount share12 (SMB) from Linux:",
   "o": [
    "mount -t nfs storage52.blob.core.windows.net:/share12 /mnt/share12",
    "net use Z: \\\\storage52.file.core.windows.net\\share12 /persistent",
    "mount -t cifs //storage52.file.core.windows.net/share12 /mnt/share12",
    "azcopy mount https://storage52.file.core.windows.net/share12"
   ],
   "a": 2
  },
  {
   "l": "Connect to a single container in Storage Explorer with a service SAS URL:",
   "o": [
    "With the account key only",
    "With his Microsoft Entra account only",
    "With a private endpoint of the account",
    "With “Blob container” or “SAS URL”"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Every night, mirror D:\\Backup to the backup container, deletions included:</b></p><p><b>azcopy sync</b> compares source and destination (by last modified time) and copies only the differences. With <b>--delete-destination=true</b>, it deletes from the destination what no longer exists at the source.</p><p><code>azcopy copy</code> copies everything again and never deletes. <code>--overwrite=false</code> avoids overwriting, but doesn't copy changed files and deletes nothing. <code>make</code> creates a container. Note: sync is <b>one-way</b>.</p><p><b>2. Resume a 2 TB transfer interrupted at 70%:</b></p><p>AzCopy saves the state of each job. <code>azcopy jobs list</code> shows the jobs and <code>azcopy jobs resume &lt;id&gt;</code> picks up where the transfer stopped (supplying the SAS again if needed).</p><p>Running again with --overwrite=true would copy everything again. The other options resume nothing.</p><p><b>3. Delete all blobs in the temp/ folder of the data container:</b></p><p><code>azcopy remove</code> with <code>--recursive</code> deletes all blobs under the given prefix.</p><p>sync only deletes what no longer exists at the source. make creates a container. copy never deletes anything.</p><p><b>4. Mount share12 (SMB) from Linux:</b></p><p>On Linux, an SMB share is mounted with <b>mount -t cifs</b> (cifs-utils package), with the account name and key (or a credentials file) and SMB version 3.x.</p><p>NFS is a different protocol and the blob address doesn't match Azure Files. net use is a Windows command. AzCopy doesn't mount shares.</p><p><b>5. Connect to a single container in Storage Explorer with a service SAS URL:</b></p><p>Storage Explorer can connect in several ways: Microsoft Entra account (subscriptions), account name and key, connection string, or a resource's <b>SAS URL</b> (account, container, share, queue). With a container SAS, he sees only that container.</p>",
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
 "keep": "One-way mirror = azcopy sync (+ --delete-destination to delete). Interrupted transfer = azcopy jobs resume. Bulk delete = azcopy remove --recursive. SMB on Linux = mount -t cifs. Storage Explorer accepts a SAS URL for a single resource."
},
{
 "id": "D2-319",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are creating storage accounts for specialized workloads. What should you choose for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Real folders (atomic rename) and POSIX ACLs for Azure Synapse:",
   "o": [
    "Blob versioning",
    "Hierarchical namespace",
    "NFS 3.0 protocol only, without the namespace",
    "Encryption scopes per container"
   ],
   "a": 1
  },
  {
   "l": "Mounting a blob container over NFS 3.0 from Linux — requirement:",
   "o": [
    "Be a Premium file shares account",
    "Use GRS or RA-GRS redundancy",
    "Hierarchical namespace and restricted network access",
    "Have anonymous access enabled on the container"
   ],
   "a": 2
  },
  {
   "l": "Premium Azure Files shares over NFS — account type:",
   "o": [
    "Premium, File shares account type",
    "Premium, Block blobs account type",
    "Premium, Page blobs account type",
    "Standard general-purpose v2 with large shares"
   ],
   "a": 0
  },
  {
   "l": "Upgrading to Data Lake Gen2 an account with versioning and object replication:",
   "o": [
    "The upgrade creates a new account alongside",
    "Validation fails: disable those features first",
    "The upgrade succeeds and disables those features itself",
    "The upgrade can be reversed at any time"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Real folders (atomic rename) and POSIX ACLs for Azure Synapse:</b></p><p><b>Hierarchical namespace</b> turns blob storage into <b>Azure Data Lake Storage Gen2</b>: real directories (renaming or deleting a folder is atomic), POSIX-like ACLs on folders and files, <code>dfs.core.windows.net</code> endpoint.</p><p>You enable it at creation, or through an irreversible upgrade of an existing account. Some blob features (such as object replication) aren't compatible.</p><p><b>2. Mounting a blob container over NFS 3.0 from Linux — requirement:</b></p><p>NFS 3.0 on <b>blob</b> storage requires <b>hierarchical namespace</b>, enabled at creation with the NFS v3 option, and restricted network access (selected virtual networks or a private endpoint), because NFS 3.0 doesn't use account authentication.</p><p>The Premium file shares account concerns NFS on <b>Azure Files</b>, a different service. Redundancy and anonymous access aren't relevant.</p><p><b>3. Premium Azure Files shares over NFS — account type:</b></p><p><b>Premium</b> file shares (SSD) only exist in a <b>Premium File shares</b> account (FileStorage). It's also the only type that supports <b>NFS</b> shares.</p><ul><li><b>Standard general-purpose v2</b>: standard SMB shares (HDD), no NFS for Azure Files.</li><li><b>Premium block blobs</b>: low-latency blobs, no file shares.</li><li><b>Premium page blobs</b>: mostly for unmanaged disks.</li></ul><p><b>4. Upgrading to Data Lake Gen2 an account with versioning and object replication:</b></p><p>The upgrade to hierarchical namespace starts with a <b>validation</b>. Incompatible features (such as object replication, some versioning or restore options) must be disabled first. The upgrade is <b>irreversible</b> and happens on the same account.</p>",
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
 "keep": "Real folders + POSIX ACLs = hierarchical namespace (Data Lake Gen2). NFS 3.0 on blobs = hierarchical namespace + restricted network access. Premium or NFS shares = Premium account of type File shares (FileStorage). Data Lake upgrade: validation, disable incompatible features, irreversible."
},
{
 "id": "D2-320",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are sizing Azure file shares. What should you choose or answer for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "50 TiB Standard share in a v2 account created two years ago:",
   "o": [
    "The account's infrastructure encryption",
    "Hierarchical namespace",
    "Large file shares",
    "The NFS protocol"
   ],
   "a": 2
  },
  {
   "l": "Faster Premium share for Windows clients with parallel connections:",
   "o": [
    "SMB Multichannel",
    "The NFS protocol",
    "Anonymous access",
    "Geo-redundancy"
   ],
   "a": 0
  },
  {
   "l": "share13 moves from Hot to Cool — impact:",
   "o": [
    "The share stays accessible; cheaper storage, costlier transactions",
    "Files must be rehydrated from the cool tier before they can be read",
    "The share becomes Premium",
    "The share is offline during the tier conversion"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. 50 TiB Standard share in a v2 account created two years ago:</b></p><p>Without the <b>Large file shares</b> option, a Standard share is limited to 5 TiB. With it, it can reach <b>100 TiB</b>. Recent accounts often have it on by default; on an old account, you enable it in Configuration (it can't be turned off).</p><p>The other options are unrelated to share size.</p><p><b>2. Faster Premium share for Windows clients with parallel connections:</b></p><p><b>SMB Multichannel</b> lets an SMB 3.x client use several network connections to a Premium share, which increases throughput and IOPS. It's enabled in the FileStorage account's file share settings.</p><p><b>3. share13 moves from Hot to Cool — impact:</b></p><p>Changing the tier of a Standard share happens <b>online</b>. The Cool tier has cheaper storage and more expensive transactions. A tier change generates transaction fees to move the data.</p><p>Azure Files has no offline tier like Archive. You can't switch a Standard share to Premium: you need another account.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Large file shares",
    "Enabled (up to 100 TiB)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Standard share > 5 TiB = large file shares. More SMB throughput on Premium = SMB Multichannel. Standard share tier: changeable online, never offline."
},
{
 "id": "D2-321",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You administer several storage accounts and their queues. What should you do or answer for each request?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Valid name for a new account:",
   "o": [
    "st",
    "storageprod01",
    "storage_prod_01",
    "Storage-Prod01"
   ],
   "a": 1
  },
  {
   "l": "Move storage34 from France Central to West Europe:",
   "o": [
    "Start a geo-failover to West Europe",
    "Use the portal option Move to another resource group",
    "Recreate the account in West Europe and copy with AzCopy",
    "Change the region on the Configuration page"
   ],
   "a": 2
  },
  {
   "l": "Change storage4 from LRS to ZRS without interrupting access:",
   "o": [
    "Change the redundancy in Configuration, as for GRS",
    "Enable geo-replication in the account firewall",
    "Delete the account and recreate it as ZRS",
    "Request a conversion to ZRS"
   ],
   "a": 3
  },
  {
   "l": "A partner sends messages to the orders queue without reading or deleting — SAS permission:",
   "o": [
    "Read (r) and Process (p)",
    "List (l) on the account",
    "Add (a) on the orders queue",
    "Delete (d) on the orders queue"
   ],
   "a": 2
  },
  {
   "l": "Default lifetime of a queue message:",
   "o": [
    "24 hours",
    "Indefinitely",
    "30 days",
    "7 days"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Valid name for a new account:</b></p><p>A storage account name must have <b>3 to 24 characters</b>, only <b>lowercase letters and numbers</b>, and be <b>unique across all of Azure</b>, because it's part of the URL (<code>storageprod01.blob.core.windows.net</code>).</p><p>Uppercase letters, hyphens, and underscores are forbidden. “st” has only 2 characters.</p><p><b>2. Move storage34 from France Central to West Europe:</b></p><p>A storage account can't change region. You <b>export its template</b> (to recreate the same configuration), create the new account in the target region, then <b>copy the data</b> (AzCopy, server-to-server), before deleting the old account.</p><p>Moving to another resource group doesn't change the region. A geo-failover switches to the paired region (France South), not West Europe, and it isn't a migration method.</p><p><b>3. Change storage4 from LRS to ZRS without interrupting access:</b></p><p>Switching from LRS to GRS is a single click in <b>Configuration</b>. But switching to <b>ZRS</b> changes the physical layout in the region: it needs a <b>conversion</b> (started from the portal's Redundancy page or through a support request), done without downtime.</p><p>You can also migrate manually (new account + copy with AzCopy), but that requires downtime. The firewall has nothing to do with redundancy.</p><p><b>4. A partner sends messages to the orders queue without reading or deleting — SAS permission:</b></p><p>For a queue, the <b>Add</b> permission allows inserting messages. <b>Read</b> lets you peek at messages, <b>Process</b> lets you remove them (Get + Delete). A service SAS limited to the orders queue, with the Add permission and a 7-day expiry, is enough.</p><p><b>5. Default lifetime of a queue message:</b></p><p>The default time-to-live of a queue message is <b>7 days</b>. You can change it when adding the message (including -1 to never expire).</p>",
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
 "keep": "Account name: 3-24 characters, lowercase + numbers, globally unique (it's in the URL). Changing region = new account + copy. The account itself doesn't move. Adding G (geo) = simple change. Adding Z (zones) = conversion. Dropping messages = Add permission; removing them = Process. Queue message: 7 days by default."
},
{
 "id": "D2-322",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Regulated documents and production accounts must be protected. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "legal1: no change or deletion while a lawsuit of unknown length lasts:",
   "o": [
    "A time-based retention policy",
    "A Delete lock on the account",
    "A lifecycle management rule",
    "A legal hold on the container"
   ],
   "a": 3
  },
  {
   "l": "Reports unchangeable for 7 years, even by an admin, rule can't be shortened:",
   "o": [
    "A locked 7-year time-based retention policy",
    "A legal hold on the container",
    "An unlocked 7-year time-based retention policy",
    "A CanNotDelete lock on the account"
   ],
   "a": 0
  },
  {
   "l": "Prevent accidental deletion of the storage33 account:",
   "o": [
    "The account's RA-GRS redundancy",
    "A CanNotDelete lock",
    "Blob and container soft delete",
    "A time-based retention policy"
   ],
   "a": 1
  },
  {
   "l": "Different immutability policies for blobs in one container — prerequisite:",
   "o": [
    "Geo-redundancy with reads in the secondary region",
    "Versioning and version-level immutability",
    "Container soft delete",
    "The account's hierarchical namespace"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. legal1: no change or deletion while a lawsuit of unknown length lasts:</b></p><p><b>Immutable</b> storage (WORM: write once, read many) offers two types of policies on a container:</p><ul><li><b>Time-based retention</b>: blobs are protected for a fixed period (for example 7 years).</li><li><b>Legal hold</b>: blobs are protected with no duration, until the hold is removed. It's designed for litigation whose end isn't known.</li></ul><p>A resource lock protects the account on the control plane, not the files. Lifecycle management moves or deletes blobs; it protects nothing.</p><p><b>2. Reports unchangeable for 7 years, even by an admin, rule can't be shortened:</b></p><p>A <b>time-based retention policy</b> makes blobs immutable (WORM: write once, read many) for the chosen period. Once <b>locked</b>, it can no longer be deleted or shortened; it can only be extended.</p><ul><li>A <b>legal hold</b> has no duration: it lasts until it's removed.</li><li>An <b>unlocked</b> policy can be changed or deleted: it's for testing.</li><li>A <b>lock</b> protects the account, not the data.</li></ul><p><b>3. Prevent accidental deletion of the storage33 account:</b></p><p>A <b>CanNotDelete lock</b> prevents deleting the account, even by an Owner, until the lock is removed.</p><p>Soft delete and immutability protect the <b>data</b>, not the account. RA-GRS protects against a regional outage, not a deletion.</p><p><b>4. Different immutability policies for blobs in one container — prerequisite:</b></p><p><b>Version-level immutability</b> lets you apply a retention policy or legal hold to a specific blob or version. It requires <b>versioning</b> and is enabled on the account or container.</p><p>Without it, policies apply at the container level.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "legal1"
  ],
  "title": "legal1 | Access policy",
  "menu": [
   "Overview",
   "*Access policy"
  ],
  "rows": [
   [
    "#Immutable blob storage",
    ""
   ],
   [
    "*Policy type",
    "Legal hold"
   ],
   [
    "Tag",
    "Litigation-2026"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Known duration = time-based retention. Unknown duration = legal hold. Locked retention: can't be deleted or shortened, even by an admin. Protect the account = lock; protect the data = soft delete, versions, immutability. Per-blob immutability = version-level immutability (versioning required)."
},
{
 "id": "D2-323",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The security team defines storage account encryption. What should you configure or answer for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "storage14 encryption keys under your control, rotation managed by you:",
   "o": [
    "A user delegation SAS",
    "Secure transfer required",
    "Customer-managed keys (Key Vault)",
    "Microsoft-managed encryption (default)"
   ],
   "a": 2
  },
  {
   "l": "The account automatically uses each new key version:",
   "o": [
    "Specify the key URI without a version",
    "Copy the key into the storage account",
    "Specify the URI of a specific key version",
    "Use an account SAS instead"
   ],
   "a": 0
  },
  {
   "l": "Encryption-at-rest algorithm used by default:",
   "o": [
    "256-bit AES, Microsoft-managed keys",
    "3DES, customer-managed keys",
    "No encryption by default",
    "2048-bit RSA, Microsoft-managed keys"
   ],
   "a": 0
  },
  {
   "l": "Double encryption (service and infrastructure) — when to enable:",
   "o": [
    "It's enabled by default on every account",
    "After copying the data into the account",
    "At any time, from the Encryption page",
    "When creating the storage account"
   ],
   "a": 3
  },
  {
   "l": "A different key per team, at container level:",
   "o": [
    "Encryption scopes",
    "Two storage accounts",
    "Different SAS",
    "Infrastructure encryption"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. storage14 encryption keys under your control, rotation managed by you:</b></p><p>Storage Service Encryption (SSE) is always on. By default, Microsoft manages the keys. With <b>customer-managed keys</b>, the encryption key lives in your <b>key vault</b> (or a managed HSM): you control its rotation and can revoke access.</p><p>The vault must have <b>soft delete</b> and <b>purge protection</b>, and the storage account uses a managed identity to read the key.</p><p><b>2. The account automatically uses each new key version:</b></p><p>If you specify the key URI <b>without a version number</b>, Azure Storage checks regularly and automatically adopts the latest version. With a specific version, you must update the account at each rotation.</p><p><b>3. Encryption-at-rest algorithm used by default:</b></p><p><b>Storage Service Encryption</b> (SSE) always encrypts data at rest with <b>256-bit AES</b>. It can't be disabled. Keys are managed by Microsoft by default, or by you (customer-managed keys).</p><p><b>4. Double encryption (service and infrastructure) — when to enable:</b></p><p><b>Infrastructure encryption</b> adds a second layer of encryption with a different key and algorithm. It can be chosen <b>only when creating</b> the account (Encryption tab) and can't be enabled afterward.</p><p>It's not enabled by default. For an existing account, you must create a new account and copy the data into it.</p><p><b>5. A different key per team, at container level:</b></p><p><b>Encryption scopes</b> let you use different keys (Microsoft-managed or customer-managed) at the level of a container or blob, within the same account.</p><p>Two accounts would work but don't meet “at the container level”. A SAS encrypts nothing. Infrastructure encryption applies to the whole account.</p>",
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
 "keep": "Controlling the encryption key = customer-managed keys in Key Vault. Automatic rotation = key URI without a version. SSE = AES-256, always on, Microsoft or customer keys. Infrastructure encryption = at creation only. Different keys per container in one account = encryption scopes."
},
{
 "id": "D2-324",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You are choosing redundancy for several storage accounts. What should you choose or answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "storage3 (GRS) after a customer-managed failover — redundancy:",
   "o": [
    "ZRS, in the new primary region",
    "RA-GRS, in the former primary region",
    "LRS, in the new primary region",
    "GRS, in the new primary region"
   ],
   "a": 2
  },
  {
   "l": "Premium block blob account — available redundancy:",
   "o": [
    "LRS and ZRS only",
    "LRS, ZRS, GRS, and GZRS",
    "All, including RA-GZRS",
    "GRS and RA-GRS only"
   ],
   "a": 0
  },
  {
   "l": "RA-GZRS reads lag behind the primary — reason:",
   "o": [
    "Secondary read goes through the Archive tier",
    "The secondary region is write-only",
    "Replication to the secondary is asynchronous",
    "RA-GZRS only replicates at night, off-peak"
   ],
   "a": 2
  },
  {
   "l": "Secondary read only after an outage, survives a zone loss, lowest cost:",
   "o": [
    "GRS",
    "RA-GZRS",
    "GZRS",
    "ZRS"
   ],
   "a": 2
  },
  {
   "l": "Keep writing with no intervention if the primary region fails:",
   "o": [
    "ZRS also writes to the paired region",
    "None: a failover is required",
    "GZRS fails writes over automatically",
    "RA-GRS allows writing to the secondary"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. storage3 (GRS) after a customer-managed failover — redundancy:</b></p><p>After an unplanned failover, the secondary region becomes primary and the account is configured as <b>LRS</b>. It has no geo copy until you reconfigure GRS (which starts a full copy to a new secondary).</p><p>Key points: the failover can cause <b>loss of data</b> written after the last sync time, and you should only start it if the outage lasts.</p><p><b>2. Premium block blob account — available redundancy:</b></p><p><b>Premium</b> accounts (block blobs, file shares, page blobs) support only <b>LRS and ZRS</b>. Geo-redundancy (GRS, GZRS, and their RA- versions) is reserved for Standard general-purpose v2 accounts.</p><p><b>3. RA-GZRS reads lag behind the primary — reason:</b></p><p>Geo-replication is <b>asynchronous</b>: the secondary region can be a few minutes behind (the recovery point objective is usually under 15 minutes, with no guarantee). The application must tolerate this eventual consistency.</p><p><b>4. Secondary read only after an outage, survives a zone loss, lowest cost:</b></p><p><b>GZRS</b>: ZRS in the primary region (withstands the loss of a zone) and a copy in the secondary region, accessible after failover. RA-GZRS costs more for permanent reading that isn't requested.</p><p>ZRS has no copy in another region. GRS doesn't protect against losing a zone in the primary region (LRS in a single datacenter).</p><p><b>5. Keep writing with no intervention if the primary region fails:</b></p><p>The secondary region of geo-redundant accounts is <b>read-only</b> (with RA-) until a <b>failover</b>, which must be started (by the customer, or by Microsoft in extreme cases). RA-GRS and RA-GZRS only allow reading.</p><p>ZRS stays in a single region. To write without interruption in several regions, you need an application architecture (for example two accounts).</p>",
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
 "keep": "After an unplanned failover: LRS in the new primary; reconfigure GRS afterward. Premium = LRS or ZRS only; geo-redundancy is Standard only. Secondary read = eventual consistency. Zone + region, read only after failover = GZRS. Secondary = read-only; writing = failover."
}
);
