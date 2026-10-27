/* Domain 2: storage (batch C : D2-070 to D2-129) */
AZ.questions.push(
{
 "id": "D2-070",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to create a general-purpose v2 storage account with RA-GRS redundancy, with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "New-AzStorageAccount -ResourceGroupName RG1 -Name storage25 -Location francecentral -SkuName {0} -Kind {1}",
 "rows": [
  {
   "l": "SKU",
   "o": [
    "Standard_RAGRS",
    "Standard_GRS",
    "Premium_LRS"
   ],
   "a": 0
  },
  {
   "l": "Kind",
   "o": [
    "StorageV2",
    "Storage",
    "BlobStorage"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>-SkuName Standard_RAGRS -Kind StorageV2</code>.</p><ul><li>Redundancy is part of the SKU name: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Standard_GZRS, Standard_RAGZRS, Premium_LRS, Premium_ZRS.</li><li><b>StorageV2</b> is general-purpose v2. <b>Storage</b> is the old general-purpose v1 and <b>BlobStorage</b> an old blob-only type, both discouraged.</li></ul>",
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
    "Standard (StorageV2)"
   ],
   [
    "*Redundancy",
    "Geo-redundant storage (GRS) + read access"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "SKU = performance + redundancy (Standard_RAGRS, Premium_ZRS…). Kind = StorageV2 by default."
},
{
 "id": "D2-071",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to move the blob report.pdf to the Archive tier immediately, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az storage blob {0} --account-name storage26 --container-name docs --name report.pdf --tier {1} --auth-mode login",
 "rows": [
  {
   "l": "Command",
   "o": [
    "set-tier",
    "update",
    "copy start"
   ],
   "a": 0
  },
  {
   "l": "Tier",
   "o": [
    "Archive",
    "Cold",
    "Premium"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az storage blob set-tier ... --tier Archive</code> changes a block blob's tier. To rehydrate from Archive, you use the same command with <code>--tier Hot</code> and <code>--rehydrate-priority High</code> or <code>Standard</code>.</p><p><code>update</code> changes properties such as the content type. <code>copy start</code> copies a blob. Premium isn't a blob access tier.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage26",
   "Containers",
   "docs"
  ],
  "title": "report.pdf | Change tier",
  "rows": [
   [
    "*Access tier",
    "Archive"
   ],
   [
    "CLI",
    "az storage blob set-tier --tier Archive"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Changing a blob's tier = set-tier; rehydrating = set-tier to Hot with --rehydrate-priority."
},
{
 "id": "D2-072",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to create a private container named invoices with Azure PowerShell. The storage context is in $ctx.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0} -Name invoices -Context $ctx -Permission {1}",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzStorageContainer",
    "New-AzStorageShare",
    "New-AzStorageAccount"
   ],
   "a": 0
  },
  {
   "l": "Permission",
   "o": [
    "Off",
    "Blob",
    "Container"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>New-AzStorageContainer -Name invoices -Context $ctx -Permission Off</code>.</p><p>The -Permission parameter matches the anonymous access level: <b>Off</b> (private), <b>Blob</b> (anonymous read of blobs), or <b>Container</b> (read and list). New-AzStorageShare creates a file share.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers"
  ],
  "title": "New container",
  "rows": [
   [
    "Name",
    "invoices"
   ],
   [
    "*Anonymous access level",
    "Private (no anonymous access)"
   ]
  ],
  "btn": "Create"
 },
 "keep": "-Permission Off / Blob / Container = Private / read blobs / read + list."
},
{
 "id": "D2-073",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to create a 1 TiB file share named team in storage27, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az storage {0} create --storage-account storage27 --resource-group RG1 --name team {1} 1024",
 "rows": [
  {
   "l": "Resource",
   "o": [
    "share-rm",
    "container",
    "queue"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--quota",
    "--size",
    "--capacity"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az storage share-rm create ... --quota 1024</code> creates a share through the control plane (Azure Resource Manager), with a quota in GiB. You can also set <code>--access-tier</code> (TransactionOptimized, Hot, Cool).</p><p><code>container</code> and <code>queue</code> are for blobs and queues. <code>--size</code> and <code>--capacity</code> don't exist for this command.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage27",
   "File shares"
  ],
  "title": "New file share",
  "rows": [
   [
    "Name",
    "team"
   ],
   [
    "*Quota (GiB)",
    "1024"
   ],
   [
    "Tier",
    "Transaction optimized"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Share through ARM = az storage share-rm create --quota (GiB)."
},
{
 "id": "D2-074",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You review the following lifecycle management rule, applied to storage28:</p><pre>{\n \"rules\": [{\n  \"name\": \"rule1\",\n  \"enabled\": true,\n  \"type\": \"Lifecycle\",\n  \"definition\": {\n   \"filters\": { \"blobTypes\": [\"blockBlob\"], \"prefixMatch\": [\"logs/\"] },\n   \"actions\": { \"baseBlob\": {\n     \"tierToCool\":    { \"daysAfterModificationGreaterThan\": 30 },\n     \"tierToArchive\": { \"daysAfterModificationGreaterThan\": 90 },\n     \"delete\":        { \"daysAfterModificationGreaterThan\": 365 }\n   }}\n  }\n }]\n}</pre><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "A blob logs/app.txt modified 100 days ago is in the tier:",
   "o": [
    "Hot",
    "Cool",
    "Archive"
   ],
   "a": 2
  },
  {
   "l": "A blob data/app.txt modified 400 days ago is:",
   "o": [
    "deleted",
    "in the Archive tier",
    "unchanged"
   ],
   "a": 2
  },
  {
   "l": "An append blob logs/trace.log modified 400 days ago is:",
   "o": [
    "unchanged",
    "deleted",
    "in the Archive tier"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>logs/app.txt, 100 days: Archive.</b> It's past 30 and 90 days; the most advanced action (Archive) applies.</li><li><b>data/app.txt: unchanged.</b> It doesn't start with the <code>logs/</code> prefix (the prefix includes the container name).</li><li><b>Append blob: unchanged.</b> The filter targets only block blobs.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage28"
  ],
  "title": "storage28 | Lifecycle management",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "*Filter",
    "blockBlob, prefix logs/"
   ],
   [
    "30 / 90 / 365 days",
    "Cool / Archive / Delete"
   ]
  ]
 },
 "keep": "A rule only affects blobs that pass its filters (type, container/folder prefix)."
},
{
 "id": "D2-075",
 "dom": 2,
 "type": "single",
 "stem": "<p>The storage account storage29 uses <b>ZRS</b> redundancy. You want to configure a lifecycle rule that moves old blobs to the Archive tier.</p><p>What happens?</p>",
 "opts": [
  "The Archive tier isn't supported with ZRS: you need LRS, GRS, or RA-GRS",
  "The blobs are converted to LRS and then archived",
  "The blobs are archived in the paired region",
  "The rule works normally"
 ],
 "ans": 0,
 "expl": "<p>The <b>Archive</b> tier is only available with <b>LRS, GRS, and RA-GRS</b>. It isn't supported with ZRS, GZRS, or RA-GZRS. You must change the account's redundancy or use the Cold tier instead.</p><p>Azure doesn't convert redundancy or move data to another region for you.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage29"
  ],
  "title": "storage29 | Redundancy",
  "menu": [
   "*Redundancy"
  ],
  "rows": [
   [
    "Redundancy",
    "ZRS"
   ],
   [
    "*Archive tier",
    "Not supported (LRS, GRS, RA-GRS only)"
   ]
  ]
 },
 "keep": "Archive = LRS, GRS, or RA-GRS; never with ZRS/GZRS."
},
{
 "id": "D2-076",
 "dom": 2,
 "type": "single",
 "stem": "<p>The default access tier of the storage account storage30 is <b>Hot</b>. You change it to <b>Cool</b>.</p><p>Which blobs are affected?</p>",
 "opts": [
  "None: each blob must be changed",
  "Blobs whose tier is inferred from the account (no explicit tier)",
  "Only new blobs created after the change",
  "All blobs, including those in the Archive tier"
 ],
 "ans": 1,
 "expl": "<p>Blobs with no explicit tier have a tier <b>inferred</b> from the account's default tier. Changing the account tier moves them all to Cool, as well as new blobs. Blobs whose tier was set explicitly (for example Archive or Hot) don't change.</p><p>Watch the cost: this change is billed as a write operation on each affected blob.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage30"
  ],
  "title": "storage30 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Default access tier",
    "Cool"
   ],
   [
    "Affected blobs",
    "Those with an inferred tier (no explicit tier)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Account tier = inferred tier of blobs with no explicit tier."
},
{
 "id": "D2-077",
 "dom": 2,
 "type": "single",
 "stem": "<p>A lifecycle policy must archive blobs that have the index tag <b>status = done</b>, whatever their folder.</p><p>Which filter should you use in the rule?</p>",
 "opts": [
  "prefixMatch",
  "containerName",
  "blobIndexMatch",
  "blobTypes"
 ],
 "ans": 2,
 "expl": "<p>The <b>blobIndexMatch</b> filter selects blobs by their <b>index tags</b> (name, operator, value). Index tags are indexed, queryable key/value pairs, different from metadata.</p><p><b>prefixMatch</b> filters by name prefix, <b>blobTypes</b> by blob type. containerName isn't a lifecycle filter.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Lifecycle management | Filters",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "*Blob index match",
    "status == done"
   ],
   [
    "Action",
    "Move to archive storage"
   ]
  ]
 },
 "keep": "Filtering by index tag = blobIndexMatch."
},
{
 "id": "D2-078",
 "dom": 2,
 "type": "single",
 "stem": "<p>Versioning is enabled on storage31. Old versions pile up and push the bill up.</p><p>What should you do?</p>",
 "opts": [
  "Lower the redundancy to LRS",
  "Disable soft delete",
  "Enable immutability",
  "Add a lifecycle rule with an action on versions (version: delete after N days)"
 ],
 "ans": 3,
 "expl": "<p>A lifecycle rule can act on the base blob, on previous <b>versions</b>, and on <b>snapshots</b>. An action “delete versions older than 90 days” (<code>daysAfterCreationGreaterThan</code> on version) limits the buildup.</p><p>Soft delete concerns deleted blobs. LRS lowers the cost a bit but not the buildup. Immutability would prevent any deletion.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage31"
  ],
  "title": "Lifecycle management | Add a rule",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "*Applies to",
    "Previous versions"
   ],
   [
    "Action",
    "Delete after 90 days"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Versions and snapshots pile up: lifecycle can delete them too."
},
{
 "id": "D2-079",
 "dom": 2,
 "type": "single",
 "stem": "<p>A user deleted the storage account storage32 3 days ago. No other account has been created with that name.</p><p>What can you do?</p>",
 "opts": [
  "Restore it from the portal (Restore deleted account), since it's recoverable for 14 days",
  "Nothing: deleting an account is permanent",
  "Restore it from the activity log",
  "Restore it with blob soft delete"
 ],
 "ans": 0,
 "expl": "<p>A deleted storage account can be <b>recovered for 14 days</b>, as long as no account with the same name has been recreated and the resource group still exists. Data isn't guaranteed if it had been deleted before the account.</p><p>Blob soft delete doesn't protect against deleting the account: for that, you use a CanNotDelete <b>lock</b>.</p>",
 "portal": {
  "path": [
   "Storage accounts"
  ],
  "title": "Storage accounts",
  "rows": [
   [
    "*Restore deleted account",
    "storage32 · deleted 3 days ago"
   ]
  ],
  "btn": "Restore"
 },
 "keep": "Deleted account: recoverable for 14 days (if the name is free). Better: a lock."
},
{
 "id": "D2-080",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to prevent an administrator from deleting the storage account storage33 by mistake; it contains production data.</p><p>What is the simplest solution?</p>",
 "opts": [
  "RA-GRS redundancy",
  "A CanNotDelete lock on storage33",
  "Blob soft delete",
  "A time-based retention policy"
 ],
 "ans": 1,
 "expl": "<p>A <b>CanNotDelete lock</b> prevents deleting the account, even by an Owner, until the lock is removed.</p><p>Soft delete and immutability protect the <b>data</b>, not the account. RA-GRS protects against a regional outage, not a deletion.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage33"
  ],
  "title": "storage33 | Locks",
  "menu": [
   "*Locks"
  ],
  "rows": [
   [
    "*Lock type",
    "Delete"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Protect the account = lock; protect the data = soft delete, versions, immutability."
},
{
 "id": "D2-081",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to move the storage account storage34 from France Central to West Europe.</p><p>Which method should you use?</p>",
 "opts": [
  "Start a geo-failover",
  "Use the Move to another resource group option",
  "Export the account's template, create an account in West Europe, then copy the data with AzCopy",
  "Change the region in Configuration"
 ],
 "ans": 2,
 "expl": "<p>A storage account can't change region. You <b>export its template</b> (to recreate the same configuration), create the new account in the target region, then <b>copy the data</b> (AzCopy, server-to-server), before deleting the old account.</p><p>Moving to another resource group doesn't change the region. A geo-failover switches to the paired region (France South), not West Europe, and it isn't a migration method.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage34"
  ],
  "title": "storage34 | Export template",
  "menu": [
   "*Export template"
  ],
  "rows": [
   [
    "Next step",
    "Create the account in West Europe"
   ],
   [
    "*Data copy",
    "AzCopy server to server"
   ]
  ]
 },
 "keep": "Changing region = new account + copy. The account itself doesn't move."
},
{
 "id": "D2-082",
 "dom": 2,
 "type": "single",
 "stem": "<p>A storage account is <b>general-purpose v1</b> (Storage). You want to use the Hot, Cool, and Archive access tiers.</p><p>What should you do?</p>",
 "opts": [
  "Change the redundancy to GRS",
  "Enable hierarchical namespace",
  "Recreate the account as Premium",
  "Upgrade the account to general-purpose v2"
 ],
 "ans": 3,
 "expl": "<p>Access tiers are only available in <b>general-purpose v2</b> accounts (and legacy BlobStorage accounts). The <b>upgrade</b> to v2 is done from the Configuration page, without downtime, but it's <b>irreversible</b>.</p><p>Premium accounts have no access tiers. Hierarchical namespace and redundancy don't add tiers.</p>",
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
    "Account kind",
    "Storage (general purpose v1)"
   ],
   [
    "*Upgrade",
    "General-purpose v2 (irreversible)"
   ]
  ],
  "btn": "Upgrade"
 },
 "keep": "Access tiers = general-purpose v2; upgrading from v1 can't be undone."
},
{
 "id": "D2-083",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to store the messages sent by a web application to a background processing service, to process them in order of arrival, simply and cheaply.</p><p>Which storage account service should you use?</p>",
 "opts": [
  "Queue storage",
  "Azure Files",
  "Append blob",
  "Table storage"
 ],
 "ans": 0,
 "expl": "<p><b>Queue storage</b> stores messages (up to 64 KB each) that one component drops and another picks up to process. It's the simple way to decouple two components of an application.</p><p>Table storage stores key/attribute NoSQL data. Azure Files is for SMB/NFS shares. An append blob is a file, not a message queue.</p>",
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
 "keep": "Messages between components = Queue. Key/attribute NoSQL = Table."
},
{
 "id": "D2-084",
 "dom": 2,
 "type": "single",
 "stem": "<p>An application must store millions of device profiles as key/attribute pairs, with no fixed schema, at the lowest cost, in a storage account.</p><p>Which service should you use?</p>",
 "opts": [
  "Page blob",
  "Table storage",
  "Azure Files",
  "Queue storage"
 ],
 "ans": 1,
 "expl": "<p><b>Table storage</b> is a schemaless key/attribute NoSQL store: each entity has a partition key and a row key, plus free-form properties. It's very cheap for large volumes of simple structured data.</p><p>Queues carry messages. Azure Files hosts files. Page blobs are for disks.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Tables"
  ],
  "title": "devices | Table",
  "rows": [
   [
    "*PartitionKey + RowKey",
    "Entity key"
   ],
   [
    "Properties",
    "Free-form (schemaless)"
   ]
  ]
 },
 "keep": "Table = key/attribute NoSQL, very cheap."
},
{
 "id": "D2-085",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to create a <b>50 TiB</b> Standard Azure file share in a general-purpose v2 account created two years ago.</p><p>What should you enable on the account?</p>",
 "opts": [
  "Infrastructure encryption",
  "Hierarchical namespace",
  "Large file shares",
  "The NFS protocol"
 ],
 "ans": 2,
 "expl": "<p>Without the <b>Large file shares</b> option, a Standard share is limited to 5 TiB. With it, it can reach <b>100 TiB</b>. Recent accounts often have it on by default; on an old account, you enable it in Configuration (it can't be turned off).</p><p>The other options are unrelated to share size.</p>",
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
 "keep": "Standard share > 5 TiB = large file shares."
},
{
 "id": "D2-086",
 "dom": 2,
 "type": "single",
 "stem": "<p>An Azure file share has a 500 GiB quota. Users get an “insufficient space” error even though the storage account hasn't reached any limit.</p><p>What should you do?</p>",
 "opts": [
  "Enable soft delete",
  "Change the account's redundancy",
  "Switch the account to Premium",
  "Increase the share's quota"
 ],
 "ans": 3,
 "expl": "<p>A file share's <b>quota</b> limits its size, independently of the account's capacity. You increase it in the share's properties (up to 100 TiB with large file shares).</p><p>For a provisioned Premium share, increasing the quota also increases performance (and cost).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares",
   "share1"
  ],
  "title": "share1 | Edit quota",
  "rows": [
   [
    "*Quota",
    "500 → 2048 GiB"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Space error on a share = the share's quota."
},
{
 "id": "D2-087",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to mount the share share7 of storage35 on a Windows computer, persistently, with the account key.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Check that outbound TCP port 445 is open",
  "Save the credentials with cmdkey (user localhost\\storage35, password = account key)",
  "Mount the share with net use Z: \\\\storage35.file.core.windows.net\\share7 /persistent:yes",
  "Enable anonymous access on the account",
  "Open TCP port 3389"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>The connection script offered by the portal follows this logic: <b>test port 445</b> (Test-NetConnection), <b>save the credentials</b> with cmdkey so they survive a reboot, then <b>mount the drive</b> persistently.</p><p>Azure Files offers no anonymous access. Port 3389 is RDP's.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage35",
   "File shares",
   "share7"
  ],
  "title": "share7 | Connect",
  "rows": [
   [
    "1",
    "Test-NetConnection -Port 445"
   ],
   [
    "2",
    "cmdkey /add:storage35.file.core.windows.net"
   ],
   [
    "*3",
    "net use Z: … /persistent:yes"
   ]
  ]
 },
 "keep": "Mounting a share: port 445, cmdkey, persistent net use."
},
{
 "id": "D2-088",
 "dom": 2,
 "type": "single",
 "stem": "<p><b>Microsoft Entra joined</b> computers (with no reachable domain controller) must access the share share8 with the user's hybrid identity and NTFS ACLs.</p><p>Which identity-based authentication method should you enable on the storage account?</p>",
 "opts": [
  "Microsoft Entra Kerberos",
  "On-premises AD DS",
  "Account SAS",
  "Account access key"
 ],
 "ans": 0,
 "expl": "<p><b>Microsoft Entra Kerberos</b> lets Entra joined (or hybrid joined) clients get Kerberos tickets from Entra to access Azure Files, with no network line of sight to a domain controller. It works with hybrid identities (synchronized from AD DS).</p><p>AD DS authentication requires the client to see a domain controller. The key and SAS don't go through the user's identity.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares"
  ],
  "title": "Identity-based access",
  "rows": [
   [
    "*Microsoft Entra Kerberos",
    "Configured"
   ],
   [
    "For",
    "Entra joined clients, hybrid identities"
   ]
  ]
 },
 "keep": "Entra clients with no reachable DC = Microsoft Entra Kerberos."
},
{
 "id": "D2-089",
 "dom": 2,
 "type": "single",
 "stem": "<p>Your organization has no on-premises Active Directory. VMs joined to the Microsoft Entra Domain Services domain must access share9 with users' accounts.</p><p>Which identity source should you enable on the storage account?</p>",
 "opts": [
  "None: use the account key",
  "Microsoft Entra Domain Services",
  "Microsoft Entra Connect",
  "On-premises AD DS"
 ],
 "ans": 1,
 "expl": "<p><b>Microsoft Entra Domain Services</b> provides a managed domain (Kerberos, NTLM) synchronized with Microsoft Entra ID. Azure Files can use it as an identity source for VMs joined to that domain.</p><p>There's no on-premises AD. The account key doesn't go through the user's identity. Entra Connect is a sync tool, not an identity source for Azure Files.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares"
  ],
  "title": "Identity-based access",
  "rows": [
   [
    "*Microsoft Entra Domain Services",
    "Configured"
   ]
  ]
 },
 "keep": "No on-premises AD, VMs joined to a managed domain = Entra Domain Services."
},
{
 "id": "D2-090",
 "dom": 2,
 "type": "single",
 "stem": "<p>Servers in your on-premises site access share10 through a private endpoint. They still resolve storage36.file.core.windows.net to the public IP address.</p><p>What should you fix?</p>",
 "opts": [
  "The NTFS permissions",
  "The account's redundancy",
  "DNS resolution: resolve the name to the private address (privatelink.file.core.windows.net zone and a conditional forwarder)",
  "The share's tier"
 ],
 "ans": 2,
 "expl": "<p>The private endpoint works, but the client must resolve <code>storage36.file.core.windows.net</code> to the <b>private address</b>. In Azure, the private DNS zone <code>privatelink.file.core.windows.net</code> linked to the virtual network handles it. From on-premises, you need a <b>conditional forwarder</b> to a DNS resolver in Azure (Azure DNS Private Resolver or a DNS server).</p>",
 "portal": {
  "path": [
   "Private DNS zones",
   "privatelink.file.core.windows.net"
  ],
  "title": "privatelink.file.core.windows.net",
  "rows": [
   [
    "*storage36",
    "A · 10.0.2.5"
   ],
   [
    "On-premises",
    "Conditional forwarder to Azure"
   ]
  ]
 },
 "keep": "Private endpoint = private DNS; from on-premises, a conditional forwarder."
},
{
 "id": "D2-091",
 "dom": 2,
 "type": "single",
 "stem": "<p>You create a private endpoint for storage37 with the target sub-resource <b>blob</b>. An application must also reach storage37's file share through a private address.</p><p>What should you do?</p>",
 "opts": [
  "Enable a service endpoint on the subnet",
  "Add the file service to the firewall",
  "Nothing: the blob endpoint covers every service",
  "Create a second private endpoint with the file sub-resource"
 ],
 "ans": 3,
 "expl": "<p>A private endpoint targets <b>a single sub-resource</b>: blob, file, queue, table, dfs, or web. For Azure Files, you need a second private endpoint with the <b>file</b> sub-resource (and the privatelink.file.core.windows.net DNS zone).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage37"
  ],
  "title": "Create a private endpoint",
  "menu": [
   "Basics",
   "*Resource"
  ],
  "rows": [
   [
    "*Target sub-resource",
    "file"
   ]
  ],
  "btn": "Create"
 },
 "keep": "One private endpoint per sub-resource (blob, file, queue, table, dfs, web)."
},
{
 "id": "D2-092",
 "dom": 2,
 "type": "single",
 "stem": "<p>Only one Azure Synapse instance in your subscription must be able to access storage38, whose firewall blocks everything except some virtual networks. The other Synapse instances must not access it.</p><p>What should you configure?</p>",
 "opts": [
  "A resource instance rule in storage38's firewall",
  "An account SAS",
  "Anonymous access",
  "The exception for all trusted services"
 ],
 "ans": 0,
 "expl": "<p>A <b>resource instance rule</b> allows one specific instance of an Azure service (identified by its resource ID), relying on its managed identity and roles. It's more precise than the “trusted services” exception, which lets through every service of a type.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage38"
  ],
  "title": "storage38 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "#Resource instances",
    ""
   ],
   [
    "*Resource type",
    "Microsoft.Synapse/workspaces"
   ],
   [
    "Instance name",
    "synapse-prod"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Allowing one specific instance of a service = resource instance rule."
},
{
 "id": "D2-093",
 "dom": 2,
 "type": "single",
 "stem": "<p>You want storage39 to be accessible <b>only</b> through private endpoints.</p><p>Which networking setting should you choose?</p>",
 "opts": [
  "Enabled from selected virtual networks and IP addresses, with no rules",
  "Public network access: Disabled",
  "Enabled from selected virtual networks with a service endpoint",
  "Enabled from all networks"
 ],
 "ans": 1,
 "expl": "<p><b>Disabled</b> blocks all access through the public endpoint. Only private endpoints remain usable.</p><p>“Selected networks with no rules” also blocks almost everything, but exceptions (trusted services, instance rules) can let public traffic through. Service endpoints go through the public address.</p>",
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
 "keep": "Private only = public network access disabled."
},
{
 "id": "D2-094",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to limit which storage accounts the VMs in Subnet1 can reach through their service endpoint: only accounts in RG-Data must be reachable.</p><p>What should you configure?</p>",
 "opts": [
  "A route table",
  "A firewall on each account",
  "A service endpoint policy",
  "An NSG rule with the Storage service tag"
 ],
 "ans": 2,
 "expl": "<p>A <b>service endpoint policy</b>, associated with the subnet, lists the storage accounts (or resource groups, subscriptions) allowed through the service endpoint. It prevents exfiltration to any storage account.</p><p>The Storage service tag in an NSG covers <b>all</b> storage accounts in Azure (or a region), not a specific list.</p>",
 "portal": {
  "path": [
   "Service endpoint policies"
  ],
  "title": "Create a policy",
  "rows": [
   [
    "*Allowed resources",
    "Storage accounts in RG-Data"
   ],
   [
    "Associated with",
    "VNet1 / Subnet1"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Limiting accounts reachable through a service endpoint = service endpoint policy."
},
{
 "id": "D2-095",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to create a user delegation SAS valid for <b>30 days</b>.</p><p>What happens?</p>",
 "opts": [
  "The SAS is created with no expiry",
  "A stored access policy is required",
  "The SAS is created for 30 days",
  "The creation fails: a user delegation SAS is valid for at most 7 days"
 ],
 "ans": 3,
 "expl": "<p>A user delegation SAS is signed by a <b>user delegation key</b>, valid for at most <b>7 days</b>. The SAS can't last longer than this key.</p><p>User delegation SAS don't support stored access policies. For long-lived access, prefer giving a role to an identity.</p>",
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
    "Signing method",
    "User delegation key"
   ],
   [
    "*Expiry",
    "7 days maximum"
   ]
  ]
 },
 "keep": "User delegation SAS: 7 days maximum."
},
{
 "id": "D2-096",
 "dom": 2,
 "type": "single",
 "stem": "<p>You want to create 8 stored access policies on the partners container, one per partner.</p><p>What happens?</p>",
 "opts": [
  "Only 5 policies are possible per container",
  "You need one container per policy",
  "Policies must be created at the account level",
  "All 8 policies are created"
 ],
 "ans": 0,
 "expl": "<p>A container (or a share, queue, or table) can have at most <b>5 stored access policies</b>. For 8 partners, you can group partners, use several containers, or prefer user delegation SAS.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "partners"
  ],
  "title": "partners | Access policy",
  "menu": [
   "*Access policy"
  ],
  "rows": [
   [
    "*Stored access policies",
    "5 maximum"
   ]
  ]
 },
 "keep": "5 stored access policies max per container, share, queue, or table."
},
{
 "id": "D2-097",
 "dom": 2,
 "type": "single",
 "stem": "<p>User22 has the <b>Reader</b> role on storage40. In the portal's storage browser, he sees the containers but gets an error when opening a blob with the “Microsoft Entra user account” authentication method.</p><p>What should you assign him?</p>",
 "opts": [
  "Owner",
  "Storage Blob Data Reader",
  "Contributor",
  "Reader and Data Access"
 ],
 "ans": 1,
 "expl": "<p>Reader only gives the control plane. To read blobs with his Entra identity, he needs a <b>data</b> role: <b>Storage Blob Data Reader</b>.</p><p>Contributor and Owner can list the account keys and so access data with the key, but that's too many rights. The Reader and Data Access role allows listing keys: it also gives too much access.</p>",
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
 "keep": "Seeing the account = Reader; reading blobs with Entra = data role."
},
{
 "id": "D2-098",
 "dom": 2,
 "type": "single",
 "stem": "<p>An application uses AzCopy with <code>azcopy login</code> (Microsoft Entra authentication) to upload files to the upload container. The upload fails with a 403 error.</p><p>Which role is the identity most likely missing?</p>",
 "opts": [
  "Storage Account Contributor",
  "Network Contributor",
  "Storage Blob Data Contributor",
  "Reader"
 ],
 "ans": 2,
 "expl": "<p>With Entra authentication, AzCopy acts with the identity's rights on the <b>data</b>. To write blobs, you need <b>Storage Blob Data Contributor</b> (or Storage Blob Data Owner) on the container or account.</p><p>Storage Account Contributor manages the account, but doesn't grant data access with the identity. Neither do Reader and Network Contributor.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "upload"
  ],
  "title": "upload | Access Control (IAM)",
  "menu": [
   "*Access Control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Storage Blob Data Contributor"
   ],
   [
    "Members",
    "Application identity"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "AzCopy with Entra = data role (Storage Blob Data Contributor to write)."
},
{
 "id": "D2-099",
 "dom": 2,
 "type": "single",
 "stem": "<p>A 2 TB AzCopy transfer was interrupted by a network outage at 70%.</p><p>How do you resume without starting over?</p>",
 "opts": [
  "Run azcopy copy again with --overwrite=true",
  "Delete the container and start again",
  "Use azcopy make",
  "azcopy jobs resume &lt;job id&gt;"
 ],
 "ans": 3,
 "expl": "<p>AzCopy saves the state of each job. <code>azcopy jobs list</code> shows the jobs and <code>azcopy jobs resume &lt;id&gt;</code> picks up where the transfer stopped (supplying the SAS again if needed).</p><p>Running again with --overwrite=true would copy everything again. The other options resume nothing.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "AzCopy",
  "rows": [
   [
    "azcopy jobs list",
    "List of jobs"
   ],
   [
    "*azcopy jobs resume <id>",
    "Resume after interruption"
   ]
  ]
 },
 "keep": "Interrupted transfer = azcopy jobs resume."
},
{
 "id": "D2-100",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to export 20 TB of blobs from storage41 to your premises, on disks, because the connection is too slow.</p><p>Which service should you use?</p>",
 "opts": [
  "Azure Import/Export (export job) or Azure Data Box",
  "AzCopy sync",
  "Azure File Sync",
  "Object replication"
 ],
 "ans": 0,
 "expl": "<p>An Import/Export <b>export job</b> copies blobs to disks that Microsoft ships back to you. Azure Data Box also offers export. Note: Import/Export exports only <b>blobs</b>, not Azure Files.</p><p>File Sync, AzCopy, and replication go over the network.</p>",
 "portal": {
  "path": [
   "Import/export jobs",
   "Create"
  ],
  "title": "Create an export job",
  "rows": [
   [
    "*Type",
    "Export from Azure"
   ],
   [
    "Source",
    "storage41 (blobs only)"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Taking large volumes out offline = Import/Export (blobs) or Data Box."
},
{
 "id": "D2-101",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate transfer solution for each situation.</p><p>To answer, drag the appropriate solution to each situation. Each solution may be used once, more than once, or not at all.</p>",
 "srcLabel": "Solutions",
 "srcs": [
  "AzCopy",
  "Azure Data Box",
  "Azure File Sync",
  "Azure Storage Explorer"
 ],
 "tgtHead": [
  "Situation",
  "Solution"
 ],
 "tgts": [
  {
   "l": "Scheduled script that copies backups to a container every night",
   "a": 0
  },
  {
   "l": "Initial migration of 200 TB over a 50 Mbps connection",
   "a": 1
  },
  {
   "l": "Keep an on-premises file server with a cache of hot files, the rest in Azure",
   "a": 2
  },
  {
   "l": "An administrator uploads a few files by hand with a graphical interface",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>AzCopy</b>: command-line tool, scriptable.</li><li><b>Data Box</b>: offline transfer of large volumes.</li><li><b>File Sync</b>: continuous sync and cloud tiering of a file server.</li><li><b>Storage Explorer</b>: graphical interface for one-off operations.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Transfer tools",
  "rows": [
   [
    "*AzCopy",
    "Script, command line"
   ],
   [
    "Data Box",
    "Offline, large volumes"
   ],
   [
    "File Sync",
    "File server + cache"
   ],
   [
    "Storage Explorer",
    "Graphical interface"
   ]
  ]
 },
 "keep": "Script = AzCopy; large volume = Data Box; local cache = File Sync; clicks = Storage Explorer."
},
{
 "id": "D2-102",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to give a team of researchers read and write access to only the research container of storage42, with their Microsoft Entra accounts.</p><p>Which <b>two</b> actions are required?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Assign the Storage Blob Data Contributor role to the researchers' group",
  "Make the container public",
  "Give them key1",
  "Choose the research container as the assignment's scope"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<ul><li><b>Storage Blob Data Contributor: yes</b>, it allows reading, writing, and deleting blobs.</li><li><b>Container scope: yes</b>, to limit access to research. Data roles can be assigned at the container level.</li><li><b>key1: no</b>, it gives access to the whole account.</li><li><b>Public container: no</b>, it would be readable by everyone and anonymous access doesn't allow writing.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage42",
   "Containers",
   "research"
  ],
  "title": "research | Access Control (IAM)",
  "menu": [
   "*Access Control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Storage Blob Data Contributor"
   ],
   [
    "*Scope",
    "research container"
   ],
   [
    "Members",
    "GRP-Researchers"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Data role + container scope = access limited to one container."
},
{
 "id": "D2-103",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to reduce the costs of a storage account holding 50 TB of blobs, 80% of which haven't been read for 6 months but must remain readable immediately.</p><p>Which <b>two</b> actions fit?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Switch the account to Premium",
  "Move the blobs to the Archive tier",
  "Create a lifecycle rule that moves blobs not read for 90 days to the Cold tier",
  "Enable last access time tracking"
 ],
 "ans": [
  2,
  3
 ],
 "expl": "<ul><li><b>Last access tracking: yes</b>, it lets the rule rely on reads rather than modifications.</li><li><b>Rule to Cold: yes.</b> This tier is cheaper than Hot and Cool, and data stays <b>online</b>.</li><li><b>Archive: no</b>, data would no longer be readable immediately.</li><li><b>Premium: no</b>, it's more expensive.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Lifecycle management",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "*Enable access tracking",
    "Checked"
   ],
   [
    "*Last accessed > 90 days",
    "Move to cold storage"
   ]
  ]
 },
 "keep": "Cheaper but immediately readable = Cold; rule based on last access."
},
{
 "id": "D2-104",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to configure point-in-time restore on storage43.</p><p>Which <b>two</b> features must also be enabled? (In addition to blob soft delete.)</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Hierarchical namespace",
  "Blob versioning",
  "Object replication",
  "Change feed"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<p>Point-in-time restore relies on three features: <b>blob soft delete</b>, <b>versioning</b>, and <b>change feed</b>. The restore period must be shorter than the soft delete retention.</p><p>Hierarchical namespace isn't compatible with this feature. Object replication is unrelated.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage43"
  ],
  "title": "storage43 | Data protection",
  "menu": [
   "*Data protection"
  ],
  "rows": [
   [
    "*Point-in-time restore",
    "Enabled"
   ],
   [
    "Enabled automatically",
    "Versioning, change feed, soft delete"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Point in time = soft delete + versioning + change feed."
},
{
 "id": "D2-105",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>A <b>locked</b> 5-year time-based retention policy is applied to the archives container.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "You can add new blobs to the container.",
   "a": 0
  },
  {
   "l": "You can shorten the retention period to 3 years.",
   "a": 1
  },
  {
   "l": "You can extend the retention period to 7 years.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Add blobs: Yes.</b> Immutability prevents modifying and deleting, not creating (WORM principle: write once).</li><li><b>Shorten: No.</b> A locked policy can never be reduced or deleted.</li><li><b>Extend: Yes.</b> You can increase the period of a locked policy (a limited number of times).</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "archives"
  ],
  "title": "archives | Access policy",
  "menu": [
   "*Access policy"
  ],
  "rows": [
   [
    "*Retention",
    "5 years · Locked"
   ],
   [
    "Extend",
    "Possible"
   ],
   [
    "Shorten / delete",
    "Not possible"
   ]
  ]
 },
 "keep": "Locked policy: you can create blobs and extend, never shorten."
},
{
 "id": "D2-106",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Blob soft delete is enabled on storage44 with 7 days of retention.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A blob deleted 5 days ago can be restored.",
   "a": 0
  },
  {
   "l": "A blob overwritten (with no versioning) 2 days ago can be restored to its previous version.",
   "a": 0
  },
  {
   "l": "Soft-deleted blobs aren't billed.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>5 days: Yes</b>, within the retention period.</li><li><b>Overwrite with no versioning: Yes.</b> Without versioning, soft delete creates a <b>soft-deleted snapshot</b> on overwrite, which you can restore. (With versioning, versions play this role.)</li><li><b>Not billed: No.</b> Retained data is billed like active data.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage44",
   "Containers",
   "data"
  ],
  "title": "data | Show deleted blobs",
  "rows": [
   [
    "*report.pdf",
    "Deleted 5 days ago · Undelete"
   ]
  ],
  "btn": "Undelete"
 },
 "keep": "Soft delete: restore is possible, but the data is billed."
},
{
 "id": "D2-107",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You compare service endpoints and private endpoints for Azure Storage.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A private endpoint gives the account a private IP address from the virtual network.",
   "a": 0
  },
  {
   "l": "A service endpoint can be used from an on-premises site connected by VPN.",
   "a": 1
  },
  {
   "l": "A service endpoint is free.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Private address: Yes.</b> The private endpoint is a network interface in the subnet.</li><li><b>On-premises: No.</b> A service endpoint only applies to traffic leaving the configured Azure subnet. From on-premises, you need a private endpoint.</li><li><b>Free: Yes.</b> Service endpoints have no cost. Private endpoints are billed per hour and per volume.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "Service endpoint",
    "Free, public address, from an Azure subnet"
   ],
   [
    "*Private endpoint",
    "Private IP, paid, reachable from on-premises"
   ]
  ]
 },
 "keep": "On-premises or private IP = private endpoint."
},
{
 "id": "D2-108",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You use Azure File Sync with cloud tiering on the server FS3.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A tiered file remains visible in FS3's Windows Explorer.",
   "a": 0
  },
  {
   "l": "When a user opens a tiered file, it's recalled from Azure.",
   "a": 0
  },
  {
   "l": "Cloud tiering works on the system volume C:.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Visible: Yes.</b> The file is replaced by a pointer (reparse point), but it appears normally.</li><li><b>Recall: Yes.</b> On open, the content is downloaded from the Azure share.</li><li><b>System volume: No.</b> Cloud tiering isn't supported on the system volume.</li></ul>",
 "portal": {
  "path": [
   "Storage Sync Services",
   "Sync1"
  ],
  "title": "Server endpoint | FS3",
  "rows": [
   [
    "*Cloud tiering",
    "Enabled (D:)"
   ],
   [
    "System volume C:",
    "Not supported"
   ]
  ]
 },
 "keep": "Tiered file = visible pointer, recalled on open; not on C:."
},
{
 "id": "D2-109",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You need to choose the appropriate redundancy for each storage account.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "A Premium file shares account that must withstand a zone failure:",
   "o": [
    "LRS",
    "ZRS",
    "GZRS"
   ],
   "a": 1
  },
  {
   "l": "A Standard account whose data must remain readable during a regional outage:",
   "o": [
    "RA-GRS",
    "GRS",
    "ZRS"
   ],
   "a": 0
  },
  {
   "l": "A Standard account that must use the Archive tier and survive a regional outage:",
   "o": [
    "GZRS",
    "ZRS",
    "GRS"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Premium + zone: ZRS.</b> Premium accounts offer only LRS and ZRS.</li><li><b>Readable during a regional outage: RA-GRS</b> (or RA-GZRS), which gives read access to the secondary region.</li><li><b>Archive + regional outage: GRS.</b> Archive isn't supported with ZRS and GZRS.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Redundancy",
  "rows": [
   [
    "Premium",
    "LRS, ZRS"
   ],
   [
    "*Readable during a regional outage",
    "RA-GRS, RA-GZRS"
   ],
   [
    "*Archive",
    "LRS, GRS, RA-GRS"
   ]
  ]
 },
 "keep": "Premium = LRS/ZRS. Archive = no Z. Secondary read = RA-."
},
{
 "id": "D2-110",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You manage access to storage45.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "To revoke all account SAS signed with key2:",
   "o": [
    "Regenerate key2",
    "Regenerate key1",
    "Delete the stored access policies"
   ],
   "a": 0
  },
  {
   "l": "To revoke a user delegation SAS:",
   "o": [
    "Regenerate key1 and key2",
    "Revoke the user delegation keys or remove the identity's role",
    "Delete the container"
   ],
   "a": 1
  },
  {
   "l": "To revoke a service SAS tied to a stored access policy:",
   "o": [
    "Change the access tier",
    "Delete or modify the policy",
    "Disable the firewall"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Account SAS</b>: signed by an account key; regenerate the key that signed it.</li><li><b>User delegation SAS</b>: signed by a delegation key obtained through Entra. You revoke all delegation keys (Revoke User Delegation Keys) or remove the rights of the identity that created it. Regenerating key1 and key2 doesn't affect it.</li><li><b>Service SAS with a policy</b>: delete or modify the stored access policy.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage45"
  ],
  "title": "Revoke a SAS",
  "rows": [
   [
    "Account SAS",
    "Regenerate the key"
   ],
   [
    "*User delegation",
    "Revoke delegation keys"
   ],
   [
    "Service SAS + policy",
    "Modify the policy"
   ]
  ]
 },
 "keep": "Each SAS type has its own revocation method."
},
{
 "id": "D2-111",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You need to choose the anonymous access level of each container in storage46. The account allows anonymous access.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "images container: anyone must be able to view an image whose URL they know, without being able to list the container:",
   "o": [
    "Blob",
    "Private",
    "Container"
   ],
   "a": 0
  },
  {
   "l": "catalog container: anyone must be able to list and read all files:",
   "o": [
    "Container",
    "Private",
    "Blob"
   ],
   "a": 0
  },
  {
   "l": "hr container: access reserved for authenticated users:",
   "o": [
    "Blob",
    "Private",
    "Container"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Blob</b>: anonymous read of a blob whose URL is known, with no listing.</li><li><b>Container</b>: anonymous read and listing of the content.</li><li><b>Private</b>: no anonymous access.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage46",
   "Containers"
  ],
  "title": "Change access level",
  "rows": [
   [
    "*Private",
    "No anonymous access"
   ],
   [
    "*Blob",
    "Anonymous read of blobs"
   ],
   [
    "*Container",
    "Anonymous read + list"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Private / Blob (read) / Container (read + list)."
},
{
 "id": "D2-112",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You create an account SAS for an application that must only <b>read and list</b> the blobs and files of storage47, over HTTPS, for 24 hours.</p><p>How should you configure the SAS?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Shared access signature",
  "sub": "storage47",
  "rows": [
   {
    "k": "check",
    "l": "Allowed services: Blob",
    "a": true
   },
   {
    "k": "check",
    "l": "Allowed services: File",
    "a": true
   },
   {
    "k": "check",
    "l": "Allowed services: Queue",
    "a": false
   },
   {
    "k": "check",
    "l": "Allowed permissions: Read",
    "a": true
   },
   {
    "k": "check",
    "l": "Allowed permissions: Write",
    "a": false
   },
   {
    "k": "check",
    "l": "Allowed permissions: List",
    "a": true
   },
   {
    "k": "check",
    "l": "Allowed permissions: Delete",
    "a": false
   },
   {
    "k": "radio",
    "l": "Allowed protocols",
    "opts": [
     "HTTPS only",
     "HTTPS and HTTP"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Signing key",
    "o": [
     "key1",
     "key2"
    ],
    "d": 0,
    "a": null
   }
  ]
 },
 "expl": "<p>Only the <b>Blob</b> and <b>File</b> services, and the <b>Read</b> and <b>List</b> permissions, are needed. You restrict the protocol to <b>HTTPS</b>. The signing key choice isn't scored: just remember that you'll have to regenerate that key to revoke the SAS before it expires.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage47"
  ],
  "title": "storage47 | Shared access signature",
  "menu": [
   "*Shared access signature"
  ],
  "rows": [
   [
    "*Services",
    "Blob, File"
   ],
   [
    "*Permissions",
    "Read, List"
   ],
   [
    "*Protocols",
    "HTTPS only"
   ]
  ],
  "btn": "Generate SAS and connection string"
 },
 "keep": "Minimal SAS: services, permissions, duration, HTTPS."
},
{
 "id": "D2-113",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You configure networking for storage48. Only Subnet1 of VNet1 and your office's public IP address (203.0.113.50) must access the account. Azure Backup must be able to access it.</p><p>How should you configure the page?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Networking",
  "sub": "storage48",
  "rows": [
   {
    "k": "radio",
    "l": "Public network access",
    "opts": [
     "Enabled from all networks",
     "Enabled from selected virtual networks and IP addresses",
     "Disabled"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Virtual networks",
    "o": [
     "None",
     "VNet1 / Subnet1"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Firewall address range",
    "o": [
     "None",
     "203.0.113.50",
     "10.0.1.0/24"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "check",
    "l": "Allow Azure services on the trusted services list to access this storage account",
    "a": true
   }
  ]
 },
 "expl": "<ul><li><b>Selected networks</b>: only the defined rules are let through.</li><li><b>VNet1 / Subnet1</b>: adds the virtual network rule (and enables the Microsoft.Storage service endpoint on the subnet if needed).</li><li><b>203.0.113.50</b>: the office's public address. A private range like 10.0.1.0/24 makes no sense in IP rules, which only apply to public addresses.</li><li><b>Trusted services</b>: for Azure Backup.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage48"
  ],
  "title": "storage48 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Public network access",
    "Selected networks and IPs"
   ],
   [
    "Virtual networks",
    "VNet1 / Subnet1"
   ],
   [
    "Address range",
    "203.0.113.50"
   ],
   [
    "*Trusted services",
    "Checked"
   ]
  ],
  "btn": "Save"
 },
 "keep": "IP rules = public addresses only; Azure services = trusted services exception."
},
{
 "id": "D2-114",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to configure the change of storage49 from LRS to ZRS redundancy.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "storage49 | Storage account",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access Control (IAM)"
    ]
   },
   {
    "g": "Security + networking",
    "items": [
     "Networking",
     "Access keys",
     "Encryption"
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
   },
   {
    "g": "Settings",
    "items": [
     "Configuration",
     "Properties",
     "Locks"
    ]
   }
  ]
 },
 "ans": "Redundancy",
 "expl": "<p>The <b>Redundancy</b> page shows the primary and secondary region, the last sync time, and lets you change redundancy, including starting a conversion to ZRS. Geo-failover is also started from here.</p><p><b>Configuration</b> holds other settings (default tier, minimum TLS, secure transfer, key access).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage49"
  ],
  "title": "storage49 | Redundancy",
  "menu": [
   "Data protection",
   "*Redundancy"
  ],
  "rows": [
   [
    "Redundancy",
    "LRS → ZRS (conversion)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Redundancy, last sync, failover = Redundancy page."
},
{
 "id": "D2-115",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to allow the share share11 to be restored for 30 days after a deletion.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "storage50 | File shares",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log"
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
     "Lifecycle management"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Configuration",
     "Locks"
    ]
   }
  ]
 },
 "ans": "File shares",
 "expl": "<p>Soft delete for <b>file shares</b> is configured on the <b>File shares</b> page (“Soft delete” link at the top of the list), not in Data protection, which concerns blobs and containers.</p><p>It's a classic trap: the two soft deletes aren't in the same place.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage50"
  ],
  "title": "storage50 | File shares",
  "menu": [
   "Containers",
   "*File shares",
   "Data protection"
  ],
  "rows": [
   [
    "*Soft delete",
    "Enabled · 30 days"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Share soft delete = File shares page, not Data protection."
},
{
 "id": "D2-116",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to check how much data has been replicated to the secondary region of storage51 (GRS) and as of when.</p><p>Which information should you look at?</p>",
 "opts": [
  "Transaction metrics",
  "Last Sync Time",
  "Change feed",
  "Activity log"
 ],
 "ans": 1,
 "expl": "<p>The <b>Last Sync Time</b>, shown on the Redundancy page (and through PowerShell or CLI), guarantees that all earlier writes are in the secondary region. Later writes could be lost in a failover.</p>",
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
 "keep": "Where the secondary stands = Last Sync Time."
},
{
 "id": "D2-117",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to let Linux users mount the share share12 (SMB) of storage52.</p><p>Which Linux command should you use?</p>",
 "opts": [
  "mount -t nfs storage52.blob.core.windows.net:/share12 /mnt/share12",
  "net use Z: \\\\storage52.file.core.windows.net\\share12",
  "mount -t cifs //storage52.file.core.windows.net/share12 /mnt/share12 -o ...",
  "azcopy mount share12"
 ],
 "ans": 2,
 "expl": "<p>On Linux, an SMB share is mounted with <b>mount -t cifs</b> (cifs-utils package), with the account name and key (or a credentials file) and SMB version 3.x.</p><p>NFS is a different protocol and the blob address doesn't match Azure Files. net use is a Windows command. AzCopy doesn't mount shares.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage52",
   "File shares",
   "share12"
  ],
  "title": "share12 | Connect › Linux",
  "rows": [
   [
    "*Command",
    "sudo mount -t cifs //storage52.file.core.windows.net/share12 /mnt/share12 -o vers=3.1.1,credentials=…"
   ]
  ]
 },
 "keep": "SMB on Linux = mount -t cifs."
},
{
 "id": "D2-118",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to keep up to 200 restore points of an Azure file share, taken on demand or on a schedule.</p><p>Which feature should you use?</p>",
 "opts": [
  "Object replication",
  "Change feed",
  "Blob versioning",
  "Share snapshots"
 ],
 "ans": 3,
 "expl": "<p>An Azure file share can have up to <b>200 snapshots</b>. They're read-only, incremental copies of the share at a point in time. Azure Backup uses them to schedule and manage retention.</p><p>Versioning, object replication, and change feed are blob features.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares",
   "share1"
  ],
  "title": "share1 | Snapshots",
  "menu": [
   "*Snapshots"
  ],
  "rows": [
   [
    "*Limit",
    "200 snapshots per share"
   ]
  ],
  "btn": "+ Add snapshot"
 },
 "keep": "Share snapshots: 200 max, incremental, used by Azure Backup."
},
{
 "id": "D2-119",
 "dom": 2,
 "type": "single",
 "stem": "<p>A Premium share must offer better performance to Windows clients that open several connections in parallel.</p><p>Which feature should you enable?</p>",
 "opts": [
  "SMB Multichannel",
  "The NFS protocol",
  "Anonymous access",
  "Geo-redundancy"
 ],
 "ans": 0,
 "expl": "<p><b>SMB Multichannel</b> lets an SMB 3.x client use several network connections to a Premium share, which increases throughput and IOPS. It's enabled in the FileStorage account's file share settings.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stfiles"
  ],
  "title": "stfiles | File share settings",
  "menu": [
   "*File share settings"
  ],
  "rows": [
   [
    "*SMB Multichannel",
    "On"
   ]
  ],
  "btn": "Save"
 },
 "keep": "More SMB throughput on Premium = SMB Multichannel."
},
{
 "id": "D2-120",
 "dom": 2,
 "type": "single",
 "stem": "<p>An administrator must regularly rotate the access keys of storage53. He wants an automatic reminder every 90 days.</p><p>What should he configure?</p>",
 "opts": [
  "A lifecycle policy",
  "A key expiration policy (rotation reminder) in Access keys",
  "A budget alert",
  "A stored access policy"
 ],
 "ans": 1,
 "expl": "<p>In <b>Access keys</b>, the <b>Set rotation reminder</b> option creates a key expiration policy: past the deadline, Azure flags the key as due for rotation (and an Azure Policy can enforce this rule). For fully automatic rotation, you can also hand the keys to Key Vault or, better, use Entra ID.</p>",
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
 "keep": "Key rotation reminder = Access keys > Set rotation reminder."
},
{
 "id": "D2-121",
 "dom": 2,
 "type": "single",
 "stem": "<p>An application must be notified every time a new blob is created in the upload container, to start processing.</p><p>What should you configure?</p>",
 "opts": [
  "A private endpoint",
  "A lifecycle policy",
  "An Event Grid event subscription on the storage account",
  "Object replication"
 ],
 "ans": 2,
 "expl": "<p>Blob storage publishes events (<code>BlobCreated</code>, <code>BlobDeleted</code>…) to <b>Azure Event Grid</b>. An event subscription, filtered on the container, can trigger a function, a logic app, or a webhook.</p><p>The other options notify nothing.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Events",
  "menu": [
   "*Events"
  ],
  "rows": [
   [
    "*Event type",
    "Blob Created"
   ],
   [
    "Filter",
    "upload container"
   ],
   [
    "Endpoint",
    "Azure Function"
   ]
  ],
  "btn": "+ Event subscription"
 },
 "keep": "Reacting to a new blob = Event Grid."
},
{
 "id": "D2-122",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to get a weekly CSV file listing all blobs in storage54 with their size, tier, and modification date.</p><p>Which feature should you use?</p>",
 "opts": [
  "Diagnostic logs",
  "Change feed",
  "Lifecycle management",
  "Blob inventory"
 ],
 "ans": 3,
 "expl": "<p><b>Blob inventory</b> generates, on a daily or weekly schedule, a CSV or Parquet report of all blobs (or containers) with the chosen fields.</p><p>Change feed records changes. Diagnostic logs record requests. Lifecycle moves or deletes blobs.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage54"
  ],
  "title": "storage54 | Blob inventory",
  "menu": [
   "*Blob inventory"
  ],
  "rows": [
   [
    "*Frequency",
    "Weekly"
   ],
   [
    "Format",
    "CSV"
   ],
   [
    "Fields",
    "Name, size, tier, last modified"
   ]
  ],
  "btn": "Add a rule"
 },
 "keep": "Periodic list of blobs = blob inventory."
},
{
 "id": "D2-123",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to record every blob read and delete in storage55, with the caller's identity, and analyze these records with KQL.</p><p>What should you configure?</p>",
 "opts": [
  "A diagnostic setting for the blob service, StorageRead and StorageDelete categories, to a Log Analytics workspace",
  "Last access time tracking",
  "The account's activity log",
  "A metric alert on transactions"
 ],
 "ans": 0,
 "expl": "<p>Storage <b>resource logs</b> (StorageRead, StorageWrite, StorageDelete) record operations on data. You enable them with a <b>diagnostic setting</b> on the blob service and send them to Log Analytics to query with KQL.</p><p>The activity log only records the control plane. Last access tracking doesn't give the caller. A metric doesn't contain the detail of each request.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage55"
  ],
  "title": "blob | Diagnostic setting",
  "menu": [
   "*Diagnostic settings"
  ],
  "rows": [
   [
    "*Categories",
    "StorageRead, StorageDelete"
   ],
   [
    "Destination",
    "Log Analytics workspace"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Recording data access = diagnostic setting on the service (blob, file…)."
},
{
 "id": "D2-124",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to give an application access to Data Lake Storage Gen2 files at the level of a specific <b>subfolder</b>, not the whole container.</p><p>What should you use?</p>",
 "opts": [
  "An RBAC role on the subfolder",
  "POSIX access control lists (ACLs) on the folder",
  "A stored access policy",
  "The Container access level"
 ],
 "ans": 1,
 "expl": "<p>With hierarchical namespace, you can assign <b>POSIX ACLs</b> (read, write, execute) on each folder and file. RBAC roles can be assigned at most at the container level, not on a folder.</p><p>The two mechanisms combine: RBAC is evaluated first, then ACLs.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stlake",
   "Containers",
   "data",
   "sales"
  ],
  "title": "sales | Manage ACL",
  "rows": [
   [
    "*app-reporting",
    "Read, Execute"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Per-folder rights in Data Lake = POSIX ACLs; RBAC at best per container."
},
{
 "id": "D2-125",
 "dom": 2,
 "type": "single",
 "stem": "<p>An application reads data in the secondary region of an RA-GZRS account. The data read is sometimes slightly behind the primary region.</p><p>Why?</p>",
 "opts": [
  "Secondary read uses the Archive tier",
  "The secondary region is write-only",
  "Replication to the secondary region is asynchronous",
  "RA-GZRS replicates only at night"
 ],
 "ans": 2,
 "expl": "<p>Geo-replication is <b>asynchronous</b>: the secondary region can be a few minutes behind (the recovery point objective is usually under 15 minutes, with no guarantee). The application must tolerate this eventual consistency.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stra"
  ],
  "title": "stra | Redundancy",
  "menu": [
   "*Redundancy"
  ],
  "rows": [
   [
    "Geo-replication",
    "Asynchronous"
   ],
   [
    "*Possible lag",
    "A few minutes (RPO usually < 15 min)"
   ]
  ]
 },
 "keep": "Secondary read = eventual consistency."
},
{
 "id": "D2-126",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to let an application write blobs to storage56 for 1 year, securely and without managing a secret. The application runs on an Azure VM.</p><p>Which solution is recommended?</p>",
 "opts": [
  "Store key1 in the code",
  "An account SAS valid for 1 year",
  "A user delegation SAS valid for 1 year",
  "Enable a managed identity on the VM and assign it Storage Blob Data Contributor"
 ],
 "ans": 3,
 "expl": "<p>A <b>managed identity</b> avoids any secret: Azure provides tokens to the VM, and the data role grants the right to write. It's the recommended method for applications running in Azure.</p><p>A 1-year SAS is a long-lived secret that's hard to revoke. A key in the code is the worst option. A user delegation SAS can't exceed 7 days.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-App"
  ],
  "title": "VM-App | Identity",
  "menu": [
   "*Identity"
  ],
  "rows": [
   [
    "*System assigned",
    "On"
   ],
   [
    "Role",
    "Storage Blob Data Contributor on storage56"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Application in Azure = managed identity + data role; no secret."
},
{
 "id": "D2-127",
 "dom": 2,
 "type": "single",
 "stem": "<p>You change the tier of the file share share13 from <b>Hot</b> to <b>Cool</b>.</p><p>What is the impact?</p>",
 "opts": [
  "The share stays accessible; storage cost goes down and transaction cost goes up",
  "Files must be rehydrated before reading",
  "The share becomes Premium",
  "The share is offline during the conversion"
 ],
 "ans": 0,
 "expl": "<p>Changing the tier of a Standard share happens <b>online</b>. The Cool tier has cheaper storage and more expensive transactions. A tier change generates transaction fees to move the data.</p><p>Azure Files has no offline tier like Archive. You can't switch a Standard share to Premium: you need another account.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares",
   "share13"
  ],
  "title": "share13 | Change tier",
  "rows": [
   [
    "*Tier",
    "Hot → Cool (online)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Standard share tier: changeable online, never offline."
},
{
 "id": "D2-128",
 "dom": 2,
 "type": "single",
 "stem": "<p>An application must be able to create user delegation SAS for storage57.</p><p>Which permission does the application's identity need at a minimum, in addition to data rights?</p>",
 "opts": [
  "Owner on the subscription",
  "The generateUserDelegationKey action, included for example in Storage Blob Delegator",
  "Listing the account keys",
  "Global Administrator"
 ],
 "ans": 1,
 "expl": "<p>To get a user delegation key, the identity must be able to call <code>Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action</code>, included in the <b>Storage Blob Delegator</b> role (and in the Storage Blob Data Contributor, Owner, and Reader roles). The SAS then can't grant more rights than the identity has on the data.</p><p>No access to the account keys is needed: that's the whole point of this SAS type.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage57"
  ],
  "title": "storage57 | Access Control (IAM)",
  "menu": [
   "*Access Control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Storage Blob Delegator"
   ],
   [
    "Members",
    "Application identity"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Creating delegation SAS = generateUserDelegationKey (Storage Blob Delegator)."
},
{
 "id": "D2-129",
 "dom": 2,
 "type": "single",
 "stem": "<p>storage58's data must be readable from the secondary region only if the primary region fails, at the lowest cost, and the account must withstand the loss of a zone.</p><p>Which redundancy should you choose?</p>",
 "opts": [
  "GRS",
  "RA-GZRS",
  "GZRS",
  "ZRS"
 ],
 "ans": 2,
 "expl": "<p><b>GZRS</b>: ZRS in the primary region (withstands the loss of a zone) and a copy in the secondary region, accessible after failover. RA-GZRS costs more for permanent reading that isn't requested.</p><p>ZRS has no copy in another region. GRS doesn't protect against losing a zone in the primary region (LRS in a single datacenter).</p>",
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
    "*Redundancy",
    "GZRS"
   ],
   [
    "Permanent secondary read",
    "No (no RA)"
   ]
  ]
 },
 "keep": "Zone + region, read only after failover = GZRS."
}
);
