/* Domain 2: storage (batch D : D2-130 to D2-180) */
AZ.questions.push(
{
 "id": "D2-130",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The storage account storage59 has several endpoints.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Access to file shares:",
   "o": [
    "storage59.file.core.windows.net",
    "storage59.dfs.core.windows.net",
    "storage59.blob.core.windows.net"
   ],
   "a": 0
  },
  {
   "l": "Data Lake Storage Gen2 access (hierarchical namespace):",
   "o": [
    "storage59.file.core.windows.net",
    "storage59.web.core.windows.net",
    "storage59.dfs.core.windows.net"
   ],
   "a": 2
  },
  {
   "l": "Access to a queue's messages:",
   "o": [
    "storage59.blob.core.windows.net",
    "storage59.table.core.windows.net",
    "storage59.queue.core.windows.net"
   ],
   "a": 2
  }
 ],
 "expl": "<p>Each service has its own endpoint: <b>blob</b>, <b>file</b>, <b>queue</b>, <b>table</b>, <b>dfs</b> (Data Lake Gen2), and <b>web</b> (static website, with a zone number). The account name, unique in Azure, is the prefix.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage59"
  ],
  "title": "storage59 | Endpoints",
  "menu": [
   "*Endpoints"
  ],
  "rows": [
   [
    "Blob",
    "storage59.blob.core.windows.net"
   ],
   [
    "*File",
    "storage59.file.core.windows.net"
   ],
   [
    "*Data Lake Storage",
    "storage59.dfs.core.windows.net"
   ],
   [
    "*Queue",
    "storage59.queue.core.windows.net"
   ]
  ]
 },
 "keep": "blob, file, queue, table, dfs (Data Lake), web (static site)."
},
{
 "id": "D2-131",
 "dom": 2,
 "type": "single",
 "stem": "<p>You migrate to Azure an application that reads and writes files on a network share <code>\\\\server\\data</code> over SMB. You can't change the code.</p><p>Which storage service should you use?</p>",
 "opts": [
  "Azure Files",
  "Table storage",
  "Blob storage with a private container",
  "Queue storage"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Files</b> provides shares accessible over <b>SMB</b> (and NFS), mounted like a network drive: the application keeps using a UNC path without changes.</p><p>Blob storage is used through the REST API or SDK, which would require code changes. Queues and tables aren't file systems.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares"
  ],
  "title": "data | Connect",
  "rows": [
   [
    "*UNC path",
    "\\\\storage1.file.core.windows.net\\data"
   ],
   [
    "Protocol",
    "SMB 3.x"
   ]
  ]
 },
 "keep": "Application using an SMB share with no code change = Azure Files."
},
{
 "id": "D2-132",
 "dom": 2,
 "type": "single",
 "stem": "<p>Your company has 10 branches, each with an on-premises file server. It wants a single central dataset in Azure, with fast local access to hot files in each branch.</p><p>What should you recommend?</p>",
 "opts": [
  "One storage account per branch",
  "Azure Files with Azure File Sync and cloud tiering",
  "Azure Data Box",
  "Scheduled AzCopy in each branch"
 ],
 "ans": 1,
 "expl": "<p><b>Azure File Sync</b> syncs several servers (one server endpoint per branch) with the same Azure share (cloud endpoint). <b>Cloud tiering</b> keeps the most used files locally.</p><p>One account per branch centralizes nothing. AzCopy doesn't do multi-directional sync. Data Box is a one-off transfer.</p>",
 "portal": {
  "path": [
   "Storage Sync Services",
   "Sync1",
   "Central-Group"
  ],
  "title": "Central-Group",
  "rows": [
   [
    "Cloud endpoint",
    "central-share"
   ],
   [
    "*Server endpoints",
    "10 branch servers, cloud tiering"
   ]
  ]
 },
 "keep": "Several sites + one central dataset + local cache = Azure File Sync."
},
{
 "id": "D2-133",
 "dom": 2,
 "type": "single",
 "stem": "<p>The same file report.docx was modified at the same time on two servers in the same Azure File Sync sync group, FS-PARIS and FS-LYON.</p><p>What does Azure File Sync do?</p>",
 "opts": [
  "It blocks sync until a manual decision",
  "It merges the content of both files",
  "It keeps both versions: one with its original name, the other renamed with a suffix (for example the server name)",
  "It keeps only the most recent version"
 ],
 "ans": 2,
 "expl": "<p>On a conflict, File Sync loses no changes: it keeps both files. The “winning” version keeps the original name; the other is renamed with the endpoint name (server or cloud) and a number, for example <code>report-FS-LYON.docx</code>.</p>",
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
 "keep": "File Sync conflict: both files are kept, the loser is renamed."
},
{
 "id": "D2-134",
 "dom": 2,
 "type": "single",
 "stem": "<p>An administrator copies files directly into the Azure share share14 from the portal. This share is the cloud endpoint of an Azure File Sync group. The files don't appear on the server right away.</p><p>Why?</p>",
 "opts": [
  "The portal can't write to a synced share",
  "Cloud tiering blocks new files",
  "The agent must be restarted",
  "Changes made directly in the Azure share are detected by a job that runs every 24 hours"
 ],
 "ans": 3,
 "expl": "<p>Changes made on a <b>server</b> are detected in real time by the agent. Those made <b>directly in the Azure share</b> (portal, direct SMB, API) are detected by a <b>change detection job</b> that runs once every 24 hours. You can start it on demand with <code>Invoke-AzStorageSyncChangeDetection</code>.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "PowerShell",
  "rows": [
   [
    "Cloud change detection",
    "Every 24 h"
   ],
   [
    "*On demand",
    "Invoke-AzStorageSyncChangeDetection"
   ]
  ]
 },
 "keep": "Direct changes in the Azure share = detected every 24 h (or on demand)."
},
{
 "id": "D2-135",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to transfer 25 TB to Azure. Your team prefers SSD disks they can connect over USB to a server.</p><p>Which Data Box offer fits best?</p>",
 "opts": [
  "Data Box Disk",
  "Data Box Next Gen 525",
  "Azure Import/Export with your own tapes",
  "Data Box Gateway"
 ],
 "ans": 0,
 "expl": "<p><b>Data Box Disk</b>: encrypted SSD disks (about 7 TB usable each, up to 5 disks per order, about 35 TB) connected over USB or SATA. Suited to a few tens of TB.</p><p><b>Data Box Next Gen</b> devices target much larger volumes (120 TB or 525 TB usable). <b>Data Box Gateway</b> is a virtual appliance for online transfer. Import/Export doesn't accept tapes.</p>",
 "portal": {
  "path": [
   "Azure Data Box",
   "Order"
  ],
  "title": "Select your product",
  "rows": [
   [
    "*Data Box Disk",
    "≈ 7 TB per disk, up to 5 disks (USB/SATA)"
   ],
   [
    "Data Box Next Gen",
    "120 TB or 525 TB"
   ]
  ],
  "btn": "Select"
 },
 "keep": "A few tens of TB on USB SSDs = Data Box Disk."
},
{
 "id": "D2-136",
 "dom": 2,
 "type": "single",
 "stem": "<p>A blob is placed in the <b>Cool</b> tier. 10 days later, a lifecycle rule moves it to <b>Archive</b>.</p><p>What happens with billing?</p>",
 "opts": [
  "The move is denied before 30 days",
  "Early deletion fees for 20 days in the Cool tier are billed",
  "No extra fees",
  "Fees for 180 days in the Archive tier are billed immediately"
 ],
 "ans": 1,
 "expl": "<p>The Cool tier has a minimum duration of <b>30 days</b>. The blob stayed there 10 days: you pay the <b>remaining 20 days</b> (early deletion fees). Then the Archive tier's 180-day counter starts.</p><p>The move is never denied; only billing accounts for it.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "data"
  ],
  "title": "video.mp4 | Overview",
  "rows": [
   [
    "Previous tier",
    "Cool · 10 days"
   ],
   [
    "*Early deletion fee",
    "20 days in the Cool tier"
   ],
   [
    "Current tier",
    "Archive"
   ]
  ]
 },
 "keep": "Leaving a tier too early = remaining days billed, even when moving cooler."
},
{
 "id": "D2-137",
 "dom": 2,
 "type": "single",
 "stem": "<p>You rehydrated a blob from the Archive tier to the Cool tier. The next day, your lifecycle rule (“Archive 90 days after last modification”) immediately sends it back to Archive.</p><p>Which condition should you add to the rule to avoid this?</p>",
 "opts": [
  "daysAfterCreationGreaterThan",
  "prefixMatch",
  "daysAfterLastTierChangeGreaterThan",
  "blobTypes"
 ],
 "ans": 2,
 "expl": "<p>The <b>daysAfterLastTierChangeGreaterThan</b> condition (days since the last tier change) is used with tierToArchive: a blob that was just rehydrated won't be re-archived before the chosen delay.</p><p>The creation date and modification date don't change during rehydration, hence the problem.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Lifecycle management | Condition",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "Archive if last modified more than",
    "90 days ago"
   ],
   [
    "*And last tier change more than",
    "7 days ago"
   ]
  ]
 },
 "keep": "Avoid re-archiving a rehydrated blob = daysAfterLastTierChangeGreaterThan."
},
{
 "id": "D2-138",
 "dom": 2,
 "type": "single",
 "stem": "<p>You started rehydrating an archived blob with <b>Standard</b> priority. The user ends up needing it urgently.</p><p>What can you do?</p>",
 "opts": [
  "Nothing: the priority can't be changed",
  "Copy the archived blob to another container in the Archive tier",
  "Cancel and wait 24 hours",
  "Rerun the operation with High priority: priority can be raised during rehydration"
 ],
 "ans": 3,
 "expl": "<p>During a pending rehydration, you can <b>switch from Standard to High</b> (by running Set Blob Tier again with High priority). You can't do the reverse. High priority costs more.</p>",
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
    "Status",
    "Rehydration pending (Standard)"
   ],
   [
    "*Rehydrate priority",
    "High"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Rehydration in progress: you can go from Standard to High, not the reverse."
},
{
 "id": "D2-139",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to read an archived blob without changing the original blob, which must stay in the Archive tier.</p><p>What should you do?</p>",
 "opts": [
  "Copy the archived blob to a new blob in the Hot or Cool tier",
  "Create a snapshot of the archived blob and read it",
  "Read the blob with a SAS",
  "Change the original blob's tier"
 ],
 "ans": 0,
 "expl": "<p><b>Copying</b> an archived blob to a new online blob (Copy Blob operation with a target tier) rehydrates the copy, while the original stays in the Archive tier.</p><p>Changing the tier would modify the original. A snapshot of an archived blob is also offline. A SAS doesn't make an archived blob readable.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "archives"
  ],
  "title": "Copy blob",
  "rows": [
   [
    "Source",
    "contract.pdf (Archive)"
   ],
   [
    "*Destination",
    "read/contract.pdf · Hot tier"
   ]
  ],
  "btn": "Copy"
 },
 "keep": "Reading without touching the archived original = copy to an online tier."
},
{
 "id": "D2-140",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>Blob versioning is enabled on storage60.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Each write to a blob creates a new version.",
   "a": 0
  },
  {
   "l": "Deleting a blob also deletes all its previous versions.",
   "a": 1
  },
  {
   "l": "You can promote a previous version so it becomes the current version again.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>New version: Yes.</b> Each modification automatically keeps the previous state as a version.</li><li><b>Deletion: No.</b> Deleting the blob turns the current version into a previous version; versions remain (and are billed) until they're deleted explicitly or by a lifecycle rule.</li><li><b>Promote: Yes.</b> You copy the desired version over the base blob.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage60",
   "Containers",
   "data"
  ],
  "title": "doc.txt | Versions",
  "menu": [
   "Overview",
   "*Versions"
  ],
  "rows": [
   [
    "Current version",
    "2026-10-27 10:12"
   ],
   [
    "*Previous version",
    "2026-10-26 18:40 · Make current version"
   ]
  ],
  "btn": "Make current version"
 },
 "keep": "Versions: created on each write, kept after deletion, promotable."
},
{
 "id": "D2-141",
 "dom": 2,
 "type": "single",
 "stem": "<p>You want to apply different immutability policies to specific blobs in the same container, not to the whole container.</p><p>Which prerequisite should you enable?</p>",
 "opts": [
  "Geo-redundancy",
  "Blob versioning, with version-level immutability support",
  "Container soft delete",
  "Hierarchical namespace"
 ],
 "ans": 1,
 "expl": "<p><b>Version-level immutability</b> lets you apply a retention policy or legal hold to a specific blob or version. It requires <b>versioning</b> and is enabled on the account or container.</p><p>Without it, policies apply at the container level.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "evidence"
  ],
  "title": "New container",
  "rows": [
   [
    "*Enable version-level immutability support",
    "Checked"
   ],
   [
    "Prerequisite",
    "Versioning enabled"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Per-blob immutability = version-level immutability (versioning required)."
},
{
 "id": "D2-142",
 "dom": 2,
 "type": "single",
 "stem": "<p>You configure object replication from storage61 (Contoso tenant) to storage62 (Fabrikam tenant). Creating the policy fails.</p><p>Which setting should you check?</p>",
 "opts": [
  "Anonymous blob access",
  "Infrastructure encryption",
  "Allow cross-tenant replication on the storage accounts",
  "The default access tier"
 ],
 "ans": 2,
 "expl": "<p>Object replication to an account in <b>another Microsoft Entra tenant</b> must be allowed by the <b>Allow cross-tenant replication</b> setting (AllowCrossTenantReplication), disabled by default on new accounts.</p>",
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
 "keep": "Replication to another tenant = AllowCrossTenantReplication."
},
{
 "id": "D2-143",
 "dom": 2,
 "type": "single",
 "stem": "<p>You create an object replication policy on a container that already holds 10,000 blobs.</p><p>What happens to the existing blobs?</p>",
 "opts": [
  "They are always replicated first",
  "They are never replicated",
  "They are moved and deleted from the source",
  "Depending on the option chosen, you can copy all objects, only new ones, or those created after a date"
 ],
 "ans": 3,
 "expl": "<p>An object replication rule offers to <b>copy all objects</b>, <b>only new objects</b>, or a custom date filter. Replication <b>copies</b> blobs; it never deletes them from the source.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Create a replication rule",
  "menu": [
   "*Object replication"
  ],
  "rows": [
   [
    "*Copy over blobs",
    "All · Only new · Custom (date)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Replication copies, never deletes; existing blobs depend on the chosen option."
},
{
 "id": "D2-144",
 "dom": 2,
 "type": "single",
 "stem": "<p>You use customer-managed keys in Key Vault for storage63. You want the account to automatically use each new version of the key after a rotation.</p><p>How should you configure the key in the account?</p>",
 "opts": [
  "Specify the key URI without a version (automatic version update)",
  "Copy the key into the storage account",
  "Specify the URI of a specific version",
  "Use a SAS"
 ],
 "ans": 0,
 "expl": "<p>If you specify the key URI <b>without a version number</b>, Azure Storage checks regularly and automatically adopts the latest version. With a specific version, you must update the account at each rotation.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage63"
  ],
  "title": "storage63 | Encryption",
  "menu": [
   "*Encryption"
  ],
  "rows": [
   [
    "*Key URI",
    "https://kv.vault.azure.net/keys/sse-key (no version)"
   ],
   [
    "Version update",
    "Automatic"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Automatic rotation = key URI without a version."
},
{
 "id": "D2-145",
 "dom": 2,
 "type": "single",
 "stem": "<p>A user has the <b>SMB Share Contributor</b> role at the share level on share15. The NTFS permissions on the Payroll folder give him read only.</p><p>What can he do in Payroll?</p>",
 "opts": [
  "Read and write",
  "Read only",
  "Nothing",
  "Change NTFS permissions"
 ],
 "ans": 1,
 "expl": "<p><b>Share-level</b> (RBAC) and <b>NTFS</b> permissions both apply: the result is the <b>most restrictive</b> of the two. The share allows writing, but NTFS gives only reading: he can only read.</p>",
 "portal": {
  "path": [
   "share15",
   "Payroll"
  ],
  "title": "Properties › Security",
  "rows": [
   [
    "Share level (RBAC)",
    "SMB Share Contributor"
   ],
   [
    "*NTFS",
    "Read"
   ],
   [
    "Effective",
    "Read (most restrictive)"
   ]
  ]
 },
 "keep": "Share + NTFS = the more restrictive of the two."
},
{
 "id": "D2-146",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to configure the root NTFS permissions of the share share16, which uses AD DS authentication.</p><p>Which method does Microsoft recommend for the initial configuration?</p>",
 "opts": [
  "Use an account SAS",
  "Configure the permissions in the firewall",
  "Mount the share with an account that has the SMB Share Elevated Contributor role (or with the account key), then use Windows Explorer or icacls",
  "Configure the permissions in the Azure portal"
 ],
 "ans": 2,
 "expl": "<p>NTFS ACLs are managed from a Windows client: you mount the share with an identity allowed to change ACLs (<b>SMB Share Elevated Contributor</b>, or the account key, which acts as a superuser), then use <b>Windows Explorer</b> or <b>icacls</b>.</p><p>The portal doesn't manage Azure Files NTFS ACLs.</p>",
 "portal": {
  "path": [
   "Windows",
   "Explorer"
  ],
  "title": "Z:\\ (share16) › Properties › Security",
  "rows": [
   [
    "*Mounted with",
    "SMB Share Elevated Contributor (or account key)"
   ],
   [
    "Tool",
    "Explorer or icacls"
   ]
  ]
 },
 "keep": "Azure Files NTFS ACLs = from Windows (Explorer/icacls), not the portal."
},
{
 "id": "D2-147",
 "dom": 2,
 "type": "single",
 "stem": "<p>A JavaScript web application, hosted on www.contoso.com, must upload files directly to storage64 from the browser. The browser blocks the requests.</p><p>What should you configure on the blob service?</p>",
 "opts": [
  "Anonymous write access",
  "A private endpoint",
  "RA-GRS redundancy",
  "A CORS rule allowing the origin https://www.contoso.com"
 ],
 "ans": 3,
 "expl": "<p>Browsers block requests to another domain unless the server allows them through <b>CORS</b> (cross-origin resource sharing). A CORS rule on the blob service, with the allowed origin, methods (PUT, GET…), and headers, solves the problem. Authentication will go through a SAS or Entra.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage64"
  ],
  "title": "storage64 | Resource sharing (CORS)",
  "menu": [
   "*Resource sharing (CORS)"
  ],
  "rows": [
   [
    "*Allowed origins",
    "https://www.contoso.com"
   ],
   [
    "Allowed methods",
    "GET, PUT"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Browser blocking a call to storage = CORS rule."
},
{
 "id": "D2-148",
 "dom": 2,
 "type": "single",
 "stem": "<p>You host a static website in storage65. It must be accessible over HTTPS on www.contoso.com.</p><p>What should you add?</p>",
 "opts": [
  "Azure Front Door (or Azure CDN) with the custom domain and a certificate",
  "Soft delete",
  "A private endpoint",
  "A SAS"
 ],
 "ans": 0,
 "expl": "<p>The static website accepts a custom domain over HTTP, but <b>not over HTTPS</b> with a custom certificate. For HTTPS on your domain, you put <b>Azure Front Door</b> (or Azure CDN) in front of the account, which manages the certificate.</p>",
 "portal": {
  "path": [
   "Front Door and CDN",
   "fd-site"
  ],
  "title": "Domains › Add",
  "rows": [
   [
    "*Custom domain",
    "www.contoso.com"
   ],
   [
    "Certificate",
    "Front Door managed"
   ],
   [
    "Origin",
    "storage65 (static site)"
   ]
  ],
  "btn": "Add"
 },
 "keep": "HTTPS on a custom domain for a static site = Front Door or CDN."
},
{
 "id": "D2-149",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to block all network access to storage66 by default, then allow Subnet1 of VNet1, with Azure CLI.</p><p>How should you complete the commands?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az storage account update --name storage66 --resource-group RG1 --default-action {0}<br>az storage account {1} add --account-name storage66 --resource-group RG1 --vnet-name VNet1 --subnet Subnet1",
 "rows": [
  {
   "l": "Default action",
   "o": [
    "Deny",
    "Allow",
    "Disabled"
   ],
   "a": 0
  },
  {
   "l": "Subgroup",
   "o": [
    "network-rule",
    "private-endpoint",
    "firewall"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>--default-action Deny</code> switches the account to “selected networks”. <code>az storage account network-rule add</code> adds a virtual network rule (or an IP rule with <code>--ip-address</code>).</p><p>The subnet must have the Microsoft.Storage service endpoint. The <code>firewall</code> and <code>private-endpoint</code> subgroups don't exist under <code>az storage account</code>.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage66"
  ],
  "title": "storage66 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*--default-action Deny",
    "Selected networks"
   ],
   [
    "*network-rule add",
    "VNet1 / Subnet1"
   ]
  ],
  "btn": "Save"
 },
 "keep": "CLI: --default-action Deny then az storage account network-rule add."
},
{
 "id": "D2-150",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to forbid anonymous blob access for the whole account storage67, with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0} -ResourceGroupName RG1 -Name storage67 {1} $false",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Set-AzStorageAccount",
    "New-AzStorageAccount",
    "Set-AzStorageContainerAcl"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "-AllowBlobPublicAccess",
    "-EnableHttpsTrafficOnly",
    "-AllowSharedKeyAccess"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>Set-AzStorageAccount -AllowBlobPublicAccess $false</code> forbids anonymous access at the account level, whatever the container settings.</p><p>Set-AzStorageContainerAcl sets a single container. -EnableHttpsTrafficOnly is for secure transfer; -AllowSharedKeyAccess for key access.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage67"
  ],
  "title": "storage67 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Allow Blob anonymous access",
    "Disabled"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Forbidding anonymous access for the whole account = AllowBlobPublicAccess $false."
},
{
 "id": "D2-151",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to regenerate key1 of storage68 with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0} -ResourceGroupName RG1 -Name storage68 -KeyName {1}",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzStorageAccountKey",
    "Get-AzStorageAccountKey",
    "Set-AzStorageAccount"
   ],
   "a": 0
  },
  {
   "l": "Key",
   "o": [
    "key1",
    "primary",
    "kerb1"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>New-AzStorageAccountKey -KeyName key1</code> regenerates the key. Get-AzStorageAccountKey only reads the keys. Access key names are <b>key1</b> and <b>key2</b> (kerb1 and kerb2 are Kerberos keys used by Azure Files with AD DS).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage68"
  ],
  "title": "storage68 | Access keys",
  "menu": [
   "*Access keys"
  ],
  "rows": [
   [
    "*key1",
    "Rotate (New-AzStorageAccountKey)"
   ]
  ],
  "btn": "Rotate key"
 },
 "keep": "Regenerate = New-AzStorageAccountKey -KeyName key1|key2."
},
{
 "id": "D2-152",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to migrate storage69 from France Central to West Europe, without losing its configuration.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Export the ARM template of storage69",
  "Edit the template (region, account name) and deploy it in West Europe",
  "Copy the data with AzCopy from the old account to the new one",
  "Update the applications, then delete the old account",
  "Start a geo-failover",
  "Change the region in the account's properties"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>An account never changes region. You <b>export the template</b>, <b>deploy</b> it in the new region with a new name, <b>copy the data</b>, then <b>switch the applications</b> and delete the old account.</p><p>Geo-failover only goes to the paired region, and the region can't be edited in the properties.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage69"
  ],
  "title": "storage69 | Export template",
  "menu": [
   "*Export template"
  ],
  "rows": [
   [
    "1",
    "Export"
   ],
   [
    "2",
    "Deploy in West Europe"
   ],
   [
    "3",
    "AzCopy"
   ],
   [
    "4",
    "Switch applications, delete the old one"
   ]
  ]
 },
 "keep": "Region migration: template, new account, copy, switch over."
},
{
 "id": "D2-153",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to configure storage70 to use customer-managed keys stored in KV2.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Enable soft delete and purge protection on KV2",
  "Create an RSA key in KV2",
  "Give storage70's managed identity the Key Vault Crypto Service Encryption User role on the key",
  "Choose Customer-managed keys in Encryption and select the key",
  "Generate an account SAS",
  "Enable anonymous access"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>The vault must have <b>purge protection</b>, you create the <b>key</b>, give the <b>account's identity</b> the right to use the key (wrap/unwrap), then <b>configure the account's encryption</b> with this key.</p><p>SAS and anonymous access aren't related to encryption.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage70"
  ],
  "title": "storage70 | Encryption",
  "menu": [
   "*Encryption"
  ],
  "rows": [
   [
    "Vault",
    "KV2 (purge protection)"
   ],
   [
    "*Encryption type",
    "Customer-managed keys"
   ],
   [
    "Identity",
    "Key Vault Crypto Service Encryption User"
   ]
  ],
  "btn": "Save"
 },
 "keep": "CMK: protected vault, key, right for the identity, then the account setting."
},
{
 "id": "D2-154",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate data protection feature for each risk.</p><p>To answer, drag the appropriate feature to each risk. Each feature may be used once, more than once, or not at all.</p>",
 "srcLabel": "Features",
 "srcs": [
  "Blob soft delete",
  "Versioning",
  "Container soft delete",
  "CanNotDelete lock",
  "Immutability"
 ],
 "tgtHead": [
  "Risk",
  "Feature"
 ],
 "tgts": [
  {
   "l": "An administrator deletes the storage account",
   "a": 3
  },
  {
   "l": "A script deletes an entire container",
   "a": 2
  },
  {
   "l": "An application overwrites a file with wrong content",
   "a": 1
  },
  {
   "l": "Ransomware tries to encrypt the backups kept in a container",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Lock</b>: protects the account (control plane) against deletion.</li><li><b>Container soft delete</b>: restores a deleted container.</li><li><b>Versioning</b>: recovers the content before an overwrite.</li><li><b>Immutability</b>: prevents any modification or deletion during retention, even with write rights. It's the right protection against ransomware.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Protections",
  "rows": [
   [
    "*Deleted account",
    "Lock"
   ],
   [
    "Deleted container",
    "Container soft delete"
   ],
   [
    "Overwritten blob",
    "Versions"
   ],
   [
    "*Ransomware",
    "Immutability"
   ]
  ]
 },
 "keep": "Ransomware = immutability; account deletion = lock."
},
{
 "id": "D2-155",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to indicate the maximum duration or limit of each feature.</p><p>To answer, drag the appropriate value to each feature. Each value may be used once, more than once, or not at all.</p>",
 "srcLabel": "Values",
 "srcs": [
  "5",
  "7 days",
  "14 days",
  "200",
  "365 days"
 ],
 "tgtHead": [
  "Feature",
  "Value"
 ],
 "tgts": [
  {
   "l": "Maximum blob soft delete retention",
   "a": 4
  },
  {
   "l": "Maximum validity of a user delegation SAS",
   "a": 1
  },
  {
   "l": "Maximum number of snapshots of a file share",
   "a": 3
  },
  {
   "l": "Maximum number of stored access policies per container",
   "a": 0
  }
 ],
 "expl": "<ul><li>Blob soft delete: 1 to <b>365 days</b>.</li><li>User delegation SAS: <b>7 days</b> maximum.</li><li>Share snapshots: <b>200</b> per share.</li><li>Stored access policies: <b>5</b> per container, share, queue, or table.</li></ul><p>14 days is the recovery window for a deleted storage account.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Limits to remember",
  "rows": [
   [
    "Blob soft delete",
    "1 to 365 days"
   ],
   [
    "*Delegation SAS",
    "7 days"
   ],
   [
    "Share snapshots",
    "200"
   ],
   [
    "Stored access policies",
    "5"
   ]
  ]
 },
 "keep": "365 d, 7 d, 200, 5 (and 14 d to recover an account)."
},
{
 "id": "D2-156",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>A storage account has its firewall enabled (selected networks). A user gets the error “This request is not authorized” when opening a container in the portal, from their office.</p><p>Which <b>two</b> solutions give access?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Disable soft delete",
  "Add the office's public IP address to the firewall",
  "Connect from a VM in an allowed subnet",
  "Assign them the Owner role on the account"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<p>The error comes from the <b>network</b>, not permissions: the browser calls the storage endpoint from the user's IP address.</p><ul><li><b>Office IP address: yes.</b></li><li><b>VM in an allowed subnet: yes</b>, its traffic is accepted.</li><li><b>Owner: no</b>, no role bypasses the firewall.</li><li><b>Soft delete: no</b>, unrelated.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers"
  ],
  "title": "Authorization error",
  "rows": [
   [
    "*This request is not authorized",
    "Client IP address not allowed"
   ],
   [
    "Fix",
    "Add the IP or go through an allowed network"
   ]
  ]
 },
 "keep": "Portal network error = your IP isn't allowed by the firewall."
},
{
 "id": "D2-157",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to pick the features that require <b>hierarchical namespace</b> on a storage account.</p><p>Which <b>two</b> features require it?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Static website",
  "NFS 3.0 for blob storage",
  "Object replication",
  "SFTP for blob storage"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>SFTP: yes.</b></li><li><b>NFS 3.0 on blob: yes.</b></li><li><b>Object replication: no</b>, it's actually <b>not compatible</b> with hierarchical namespace.</li><li><b>Static website: no</b>, it works with or without it.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Advanced",
  "menu": [
   "*Advanced"
  ],
  "rows": [
   [
    "*Hierarchical namespace",
    "Required for SFTP, NFS 3.0"
   ],
   [
    "Incompatible with",
    "Object replication"
   ]
  ]
 },
 "keep": "SFTP and blob NFS 3.0 require hierarchical namespace."
},
{
 "id": "D2-158",
 "dom": 2,
 "type": "single",
 "stem": "<p>You want to convert an existing general-purpose v2 account to a Data Lake Storage Gen2 account. It uses versioning and object replication.</p><p>What happens when you start the upgrade?</p>",
 "opts": [
  "The upgrade creates a new account",
  "Validation fails: incompatible features must be disabled first",
  "The upgrade succeeds and disables these features automatically",
  "The upgrade can be reversed at any time"
 ],
 "ans": 1,
 "expl": "<p>The upgrade to hierarchical namespace starts with a <b>validation</b>. Incompatible features (such as object replication, some versioning or restore options) must be disabled first. The upgrade is <b>irreversible</b> and happens on the same account.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Upgrade to Data Lake Gen2",
  "menu": [
   "*Data Lake Gen2 upgrade"
  ],
  "rows": [
   [
    "*Validate agreement",
    "Failed: object replication enabled"
   ]
  ],
  "btn": "Start validation"
 },
 "keep": "Data Lake upgrade: validation, disable incompatible features, irreversible."
},
{
 "id": "D2-159",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to let a partner send messages to the orders queue of storage71 for one week, without reading or deleting messages.</p><p>Which SAS permission should you give?</p>",
 "opts": [
  "Read (r) and Process (p)",
  "List (l) on the account",
  "Add (a) on the orders queue",
  "Delete (d)"
 ],
 "ans": 2,
 "expl": "<p>For a queue, the <b>Add</b> permission allows inserting messages. <b>Read</b> lets you peek at messages, <b>Process</b> lets you remove them (Get + Delete). A service SAS limited to the orders queue, with the Add permission and a 7-day expiry, is enough.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage71",
   "Queues",
   "orders"
  ],
  "title": "Generate SAS",
  "rows": [
   [
    "*Permissions",
    "Add"
   ],
   [
    "Expiry",
    "In 7 days"
   ]
  ]
 },
 "keep": "Dropping messages = Add permission; removing them = Process."
},
{
 "id": "D2-160",
 "dom": 2,
 "type": "single",
 "stem": "<p>A message added to an Azure queue without specifying a time-to-live is never processed.</p><p>How long does it stay in the queue by default?</p>",
 "opts": [
  "24 hours",
  "Indefinitely",
  "30 days",
  "7 days"
 ],
 "ans": 3,
 "expl": "<p>The default time-to-live of a queue message is <b>7 days</b>. You can change it when adding the message (including -1 to never expire).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Queues",
   "orders"
  ],
  "title": "Add message",
  "rows": [
   [
    "*Expires in",
    "7 days (default)"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Queue message: 7 days by default."
},
{
 "id": "D2-161",
 "dom": 2,
 "type": "single",
 "stem": "<p>You want to know how many gigabytes of data the account storage72 holds, and how this volume has changed over the past month.</p><p>Where should you look?</p>",
 "opts": [
  "The account's metrics (Used capacity) in Azure Monitor",
  "The access keys",
  "The activity log",
  "The Redundancy page"
 ],
 "ans": 0,
 "expl": "<p>The <b>Used capacity</b> metric, and per service the blob or file capacity, shows the stored volume and its change over time. Capacity metrics are updated about once a day.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage72"
  ],
  "title": "storage72 | Metrics",
  "menu": [
   "*Metrics"
  ],
  "rows": [
   [
    "*Metric",
    "Used capacity"
   ],
   [
    "Time range",
    "Last 30 days"
   ]
  ]
 },
 "keep": "Stored volume and trend = Used capacity metric."
},
{
 "id": "D2-162",
 "dom": 2,
 "type": "single",
 "stem": "<p>You manage a <b>Premium block blobs</b> account. You want a lifecycle rule to move old blobs to the Cool tier.</p><p>What happens?</p>",
 "opts": [
  "The account becomes Standard",
  "Premium accounts have no access tiers: only the delete action is available",
  "The blobs move to Archive",
  "The rule works normally"
 ],
 "ans": 1,
 "expl": "<p><b>Premium</b> accounts don't support the Hot, Cool, Cold, and Archive tiers. Lifecycle management there can only <b>delete</b> blobs. To tier, you must copy the data to a Standard account.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stpremium"
  ],
  "title": "Lifecycle management",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "Account",
    "Premium block blobs"
   ],
   [
    "*Available actions",
    "Delete only"
   ]
  ]
 },
 "keep": "Premium: no tiers, lifecycle can only delete."
},
{
 "id": "D2-163",
 "dom": 2,
 "type": "single",
 "stem": "<p>A team must delete all blobs in the temp/ folder of the data container, with AzCopy.</p><p>Which command should you use?</p>",
 "opts": [
  "azcopy make",
  "azcopy copy --overwrite=false",
  "azcopy remove \"https://storage73.blob.core.windows.net/data/temp?&lt;SAS&gt;\" --recursive",
  "azcopy sync --delete-destination=true"
 ],
 "ans": 2,
 "expl": "<p><code>azcopy remove</code> with <code>--recursive</code> deletes all blobs under the given prefix.</p><p>sync only deletes what no longer exists at the source. make creates a container. copy never deletes anything.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "AzCopy",
  "rows": [
   [
    "*Command",
    "azcopy remove \"…/data/temp?<SAS>\" --recursive"
   ]
  ]
 },
 "keep": "Bulk delete = azcopy remove --recursive."
},
{
 "id": "D2-164",
 "dom": 2,
 "type": "single",
 "stem": "<p>A developer must connect to a single container with Azure Storage Explorer. You gave him a service SAS URL.</p><p>How should he connect?</p>",
 "opts": [
  "With the account key only",
  "With his Microsoft Entra account only",
  "With a private endpoint",
  "With the “Blob container” or “Shared access signature URL (SAS)” option"
 ],
 "ans": 3,
 "expl": "<p>Storage Explorer can connect in several ways: Microsoft Entra account (subscriptions), account name and key, connection string, or a resource's <b>SAS URL</b> (account, container, share, queue). With a container SAS, he sees only that container.</p>",
 "portal": {
  "path": [
   "Azure Storage Explorer"
  ],
  "title": "Connect to Azure Storage",
  "rows": [
   [
    "Subscription",
    "Entra account"
   ],
   [
    "*Blob container",
    "SAS URL"
   ],
   [
    "Storage account",
    "Name and key"
   ]
  ]
 },
 "keep": "Storage Explorer accepts a SAS URL for a single resource."
},
{
 "id": "D2-165",
 "dom": 2,
 "type": "single",
 "stem": "<p>storage74's data is encrypted at rest. An auditor asks which algorithm is used by default.</p><p>What should you answer?</p>",
 "opts": [
  "256-bit AES, with Microsoft-managed keys by default",
  "3DES",
  "No encryption by default",
  "2048-bit RSA"
 ],
 "ans": 0,
 "expl": "<p><b>Storage Service Encryption</b> (SSE) always encrypts data at rest with <b>256-bit AES</b>. It can't be disabled. Keys are managed by Microsoft by default, or by you (customer-managed keys).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage74"
  ],
  "title": "storage74 | Encryption",
  "menu": [
   "*Encryption"
  ],
  "rows": [
   [
    "*Algorithm",
    "256-bit AES (always on)"
   ],
   [
    "Encryption type",
    "Microsoft-managed keys"
   ]
  ]
 },
 "keep": "SSE = AES-256, always on, Microsoft or customer keys."
},
{
 "id": "D2-166",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to let an application read a blob once, for 10 minutes, with a URL. The account forbids shared key access.</p><p>Which type of SAS should you generate?</p>",
 "opts": [
  "No SAS is possible",
  "A user delegation SAS",
  "An account SAS",
  "A service SAS"
 ],
 "ans": 1,
 "expl": "<p>When <b>shared key</b> access is disabled, account and service SAS (signed by an account key) are rejected. The <b>user delegation SAS</b>, signed through Microsoft Entra, remains usable.</p>",
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
    "User delegation key"
   ],
   [
    "Account key",
    "Unavailable (key access disabled)"
   ]
  ]
 },
 "keep": "Shared key disabled = only the user delegation SAS works."
},
{
 "id": "D2-167",
 "dom": 2,
 "type": "single",
 "stem": "<p>You want new blobs in storage75 to be in the <b>Cool</b> tier by default, and only some in Hot.</p><p>What should you configure?</p>",
 "opts": [
  "An immutability policy",
  "A SAS per blob",
  "The account's default access tier set to Cool",
  "ZRS redundancy"
 ],
 "ans": 2,
 "expl": "<p>The account's <b>default access tier</b> (Configuration) applies to blobs whose tier isn't set explicitly. You can then set the Hot tier on some blobs, or use a lifecycle rule.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage75"
  ],
  "title": "storage75 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Default access tier",
    "Cool"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Account default tier = tier of blobs with no explicit tier."
},
{
 "id": "D2-168",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You manage blob storage.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Access tiers apply only to block blobs.",
   "a": 0
  },
  {
   "l": "A container can hold blobs in different tiers.",
   "a": 0
  },
  {
   "l": "An archived blob can be read directly with the Get Blob API.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Block blobs: Yes.</b> Append and page blobs have no access tier.</li><li><b>Mixed tiers: Yes.</b> The tier is set per blob.</li><li><b>Reading an archived blob: No.</b> It must be rehydrated first.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "data"
  ],
  "title": "data | Blobs",
  "rows": [
   [
    "a.mp4",
    "Block blob · Hot"
   ],
   [
    "b.mp4",
    "Block blob · Archive"
   ],
   [
    "*trace.log",
    "Append blob · no tier"
   ]
  ]
 },
 "keep": "Tiers = block blobs, per blob; Archive = rehydrate before reading."
},
{
 "id": "D2-169",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>The file share share17 uses AD DS authentication. User23 has the SMB Share Reader role on share17.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "User23 can read a file if the NTFS ACLs allow it.",
   "a": 0
  },
  {
   "l": "User23 can write a file if the NTFS ACLs give him full control.",
   "a": 1
  },
  {
   "l": "A user with no role can access the share if a default share-level permission is configured.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Read: Yes</b>, the share and NTFS allow it.</li><li><b>Write: No.</b> The share level gives only reading; the most restrictive wins.</li><li><b>Default permission: Yes</b>, it applies to authenticated identities with no explicit role.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares",
   "share17"
  ],
  "title": "share17 | Access Control (IAM)",
  "menu": [
   "*Access Control (IAM)"
  ],
  "rows": [
   [
    "*User23",
    "SMB Share Reader"
   ],
   [
    "Default permission",
    "Depending on configuration"
   ]
  ]
 },
 "keep": "The share level caps NTFS rights."
},
{
 "id": "D2-170",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You need to estimate the delay to read archived blobs.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Rehydrating a 3 GB blob, High priority:",
   "o": [
    "Less than an hour",
    "Up to 15 hours",
    "Several days"
   ],
   "a": 0
  },
  {
   "l": "Rehydrating a 3 GB blob, Standard priority:",
   "o": [
    "Less than an hour",
    "Up to 15 hours",
    "Several days"
   ],
   "a": 1
  },
  {
   "l": "The rehydrated blob can go to:",
   "o": [
    "Archive only",
    "Premium only",
    "Hot, Cool, or Cold"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>High</b>: usually less than an hour for objects under 10 GB.</li><li><b>Standard</b>: up to 15 hours.</li><li>The rehydrated blob goes to an <b>online</b> tier: Hot, Cool, or Cold.</li></ul>",
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
    "*Target tier",
    "Hot · Cool · Cold"
   ],
   [
    "High",
    "< 1 h (< 10 GB)"
   ],
   [
    "Standard",
    "≤ 15 h"
   ]
  ]
 },
 "keep": "Rehydration: High < 1 h, Standard ≤ 15 h, to an online tier."
},
{
 "id": "D2-171",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You need to choose the option that meets each network access need for storage76.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Azure VMs in a subnet, no private address for the account, free:",
   "o": [
    "Service endpoint",
    "IP address rule",
    "Private endpoint"
   ],
   "a": 0
  },
  {
   "l": "On-premises servers over VPN, without going through the internet:",
   "o": [
    "Private endpoint",
    "Service endpoint",
    "IP address rule"
   ],
   "a": 0
  },
  {
   "l": "A partner on the internet with a fixed public address:",
   "o": [
    "Service endpoint",
    "IP address rule",
    "Private endpoint"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Service endpoint</b>: for Azure subnets, free, the account keeps its public address.</li><li><b>Private endpoint</b>: private address, reachable from on-premises over VPN or ExpressRoute.</li><li><b>IP address rule</b>: for clients on the internet with a known public address.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage76"
  ],
  "title": "storage76 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Azure subnet",
    "Service endpoint"
   ],
   [
    "On-premises VPN",
    "Private endpoint"
   ],
   [
    "Internet partner",
    "IP address rule"
   ]
  ]
 },
 "keep": "Azure subnet = service; on-premises = private; internet = IP rule."
},
{
 "id": "D2-172",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You create a lifecycle rule for the reports container of storage77. Blobs must move to the Cool tier 30 days after creation, and be deleted 2 years after creation.</p><p>How should you configure the rule?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Add a rule",
  "sub": "Lifecycle management",
  "rows": [
   {
    "k": "head",
    "t": "Details"
   },
   {
    "k": "radio",
    "l": "Rule scope",
    "opts": [
     "Apply rule to all blobs in your storage account",
     "Limit blobs with filters"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Blob type",
    "o": [
     "Block blobs",
     "Append blobs"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Base blobs"
   },
   {
    "k": "select",
    "l": "If base blobs were",
    "o": [
     "Last modified",
     "Created",
     "Last accessed"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "More than (days ago)",
    "o": [
     "30",
     "90",
     "730"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Then",
    "o": [
     "Move to cool storage",
     "Move to archive storage",
     "Delete the blob"
    ],
    "a": 0
   },
   {
    "k": "head",
    "t": "Filter set"
   },
   {
    "k": "select",
    "l": "Blob prefix",
    "o": [
     "reports/",
     "reports",
     "/reports/*"
    ],
    "a": 0
   }
  ]
 },
 "expl": "<ul><li><b>Limit with filters</b> to target only the reports container, with the prefix <code>reports/</code> (container name followed by a slash; no wildcard).</li><li>Condition <b>Created</b>, <b>30</b> days, <b>Move to cool storage</b>. Deletion at 730 days is added as a second condition in the same rule.</li></ul><p>The prefix “reports” without a slash would also match a container named reports2.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage77"
  ],
  "title": "Lifecycle management | Add a rule",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "Scope",
    "Limit with filters"
   ],
   [
    "*Created more than 30 days ago",
    "Move to cool storage"
   ],
   [
    "*Created more than 730 days ago",
    "Delete the blob"
   ],
   [
    "*Prefix",
    "reports/"
   ]
  ],
  "btn": "Add"
 },
 "keep": "Prefix = container/folder, no wildcard; condition Created, Modified, or Last accessed."
},
{
 "id": "D2-173",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You create a private endpoint for the file service of storage78 in Subnet-PE of VNet1. VMs in VNet1 must resolve the account name to the private address automatically.</p><p>How should you configure the endpoint?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create a private endpoint",
  "sub": "Private Link Center",
  "rows": [
   {
    "k": "head",
    "t": "Resource"
   },
   {
    "k": "text",
    "l": "Resource",
    "t": "storage78"
   },
   {
    "k": "select",
    "l": "Target sub-resource",
    "o": [
     "blob",
     "file",
     "queue",
     "dfs"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "Virtual Network"
   },
   {
    "k": "select",
    "l": "Subnet",
    "o": [
     "VNet1/GatewaySubnet",
     "VNet1/Subnet-PE",
     "VNet1/AzureBastionSubnet"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "DNS"
   },
   {
    "k": "radio",
    "l": "Integrate with private DNS zone",
    "opts": [
     "Yes",
     "No"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Private DNS zone",
    "o": [
     "privatelink.file.core.windows.net",
     "privatelink.blob.core.windows.net",
     "file.core.windows.net"
    ],
    "a": 0
   }
  ]
 },
 "expl": "<ul><li><b>file sub-resource</b> for Azure Files.</li><li><b>Subnet-PE</b>: reserved subnets (GatewaySubnet, AzureBastionSubnet) must not host a private endpoint.</li><li><b>DNS integration: Yes</b>, with the <b>privatelink.file.core.windows.net</b> zone, linked to VNet1. The public name is then redirected (CNAME) to this zone, which returns the private address.</li></ul>",
 "portal": {
  "path": [
   "Private Link Center",
   "Create a private endpoint"
  ],
  "title": "Create a private endpoint",
  "menu": [
   "Basics",
   "Resource",
   "Virtual Network",
   "*DNS"
  ],
  "rows": [
   [
    "Target sub-resource",
    "file"
   ],
   [
    "Subnet",
    "VNet1/Subnet-PE"
   ],
   [
    "*Integrate with private DNS zone",
    "Yes · privatelink.file.core.windows.net"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Private endpoint: right sub-resource, normal subnet, privatelink.<service> zone."
},
{
 "id": "D2-174",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to create a user delegation SAS for a single blob from the portal.</p><p>Which option should you select in the blob's context menu?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "report.pdf | Blob",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Versions",
     "Snapshots",
     "Edit",
     "Generate SAS",
     "Properties",
     "Metadata",
     "Change tier",
     "Acquire lease",
     "Delete"
    ]
   }
  ]
 },
 "ans": "Generate SAS",
 "expl": "<p><b>Generate SAS</b> at the blob level offers the signing method: <b>User delegation key</b> (with your Entra account) or an account key, then permissions, expiry, IP addresses, and protocol.</p><p><b>Change tier</b> changes the access tier. <b>Acquire lease</b> locks the blob for writing by one client.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "docs",
   "report.pdf"
  ],
  "title": "report.pdf | Generate SAS",
  "menu": [
   "Overview",
   "Versions",
   "*Generate SAS"
  ],
  "rows": [
   [
    "*Signing method",
    "User delegation key"
   ]
  ],
  "btn": "Generate SAS token and URL"
 },
 "keep": "SAS for a blob = Generate SAS on the blob."
},
{
 "id": "D2-175",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to prevent two processes from modifying the same blob at the same time: the first must get an exclusive write lock.</p><p>Which feature should you use?</p>",
 "opts": [
  "A read-only SAS",
  "A legal hold",
  "An Azure resource lock",
  "A lease on the blob"
 ],
 "ans": 3,
 "expl": "<p>A <b>lease</b> gives a client an exclusive write and delete lock on a blob (or container), for 15 to 60 seconds or infinite. Other clients must present the lease ID to write.</p><p>A legal hold blocks everyone. A resource lock acts on the control plane. A read-only SAS doesn't stop others from writing.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "data"
  ],
  "title": "doc.json | Acquire lease",
  "rows": [
   [
    "*Duration",
    "15 to 60 s or infinite"
   ],
   [
    "Effect",
    "Write/delete reserved for the lease holder"
   ]
  ]
 },
 "keep": "Exclusive write lock on a blob = lease."
},
{
 "id": "D2-176",
 "dom": 2,
 "type": "single",
 "stem": "<p>A developer stores a document's expiry date in a blob property, and would like to find all expired blobs in the account without going through them one by one.</p><p>What should you advise him to use?</p>",
 "opts": [
  "Blob index tags",
  "Blob metadata",
  "System properties",
  "The container name"
 ],
 "ans": 0,
 "expl": "<p><b>Index tags</b> are indexed by the service: the <b>Find Blobs by Tags</b> operation finds matching blobs across the whole account. They also serve as a filter for lifecycle rules.</p><p><b>Metadata</b> is stored with the blob but isn't indexed: you'd have to read each blob.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "Find blobs by tags",
  "rows": [
   [
    "*Query",
    "expiry < '2026-10-27'"
   ],
   [
    "Index tags",
    "Indexed, queryable"
   ],
   [
    "Metadata",
    "Not indexed"
   ]
  ]
 },
 "keep": "Account-wide search = index tags (Find Blobs by Tags)."
},
{
 "id": "D2-177",
 "dom": 2,
 "type": "single",
 "stem": "<p>Your application must keep <b>writing</b> to storage even if the primary region fails, with no intervention.</p><p>Which statement is true?</p>",
 "opts": [
  "ZRS writes to the paired region",
  "No redundancy writes automatically to the secondary region: a failover is required",
  "GZRS fails writes over automatically",
  "RA-GRS allows writing to the secondary region"
 ],
 "ans": 1,
 "expl": "<p>The secondary region of geo-redundant accounts is <b>read-only</b> (with RA-) until a <b>failover</b>, which must be started (by the customer, or by Microsoft in extreme cases). RA-GRS and RA-GZRS only allow reading.</p><p>ZRS stays in a single region. To write without interruption in several regions, you need an application architecture (for example two accounts).</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stgeo"
  ],
  "title": "stgeo | Redundancy",
  "menu": [
   "*Redundancy"
  ],
  "rows": [
   [
    "Secondary",
    "Read-only (RA-)"
   ],
   [
    "*Writing to the secondary",
    "Only after failover"
   ]
  ]
 },
 "keep": "Secondary = read-only; writing = failover."
},
{
 "id": "D2-178",
 "dom": 2,
 "type": "single",
 "stem": "<p>You need to let an on-premises server use Azure File Sync. The server runs Windows Server 2022.</p><p>Which component should you install on the server?</p>",
 "opts": [
  "The Azure Monitor agent",
  "AzCopy",
  "The Azure File Sync agent",
  "Microsoft Entra Connect"
 ],
 "ans": 2,
 "expl": "<p>The <b>Azure File Sync agent</b> is installed on each supported Windows Server. It registers the server with the Storage Sync Service and handles sync and cloud tiering.</p><p>The other components don't take part in File Sync.</p>",
 "portal": {
  "path": [
   "Storage Sync Services",
   "Sync1"
  ],
  "title": "Registered servers",
  "menu": [
   "*Registered servers"
  ],
  "rows": [
   [
    "*FS1",
    "Azure File Sync agent installed, registered"
   ]
  ]
 },
 "keep": "File Sync on a server = Azure File Sync agent + registration."
},
{
 "id": "D2-179",
 "dom": 2,
 "type": "single",
 "stem": "<p>You remove a server from an Azure File Sync sync. You want tiered files to remain usable on this server.</p><p>What should you do before deleting the server endpoint?</p>",
 "opts": [
  "Uninstall the agent immediately",
  "Delete the Azure share",
  "Delete the Storage Sync Service",
  "Recall all tiered files (Invoke-StorageSyncFileRecall) or disable tiering and wait for the recall"
 ],
 "ans": 3,
 "expl": "<p>Tiered files are only <b>pointers</b> to Azure. If you delete the endpoint without recalling them, they become inaccessible on the server. You <b>recall</b> them first, for example with <code>Invoke-StorageSyncFileRecall</code>.</p><p>Deleting the share or the service would destroy data or configuration.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "PowerShell on the server",
  "rows": [
   [
    "*Recall",
    "Invoke-StorageSyncFileRecall -Path D:\\Data"
   ],
   [
    "Then",
    "Delete the server endpoint"
   ]
  ]
 },
 "keep": "Removing a server: recall tiered files first."
},
{
 "id": "D2-180",
 "dom": 2,
 "type": "single",
 "stem": "<p>A storage account holds 20 TB of videos read every day during their first month, then almost never, but they must remain immediately readable for 3 years.</p><p>Which strategy is the cheapest?</p>",
 "opts": [
  "Hot tier at first, lifecycle rule to Cool after 30 days then Cold after 90 days, deletion after 3 years",
  "Premium block blobs account",
  "Archive tier from upload",
  "Hot tier for 3 years"
 ],
 "ans": 0,
 "expl": "<p>The videos are hot at first, then cold: a lifecycle rule moves them gradually to cheaper <b>online</b> tiers (Cool then Cold), and deletes them at 3 years.</p><p>Archive would prevent immediate reading. Staying in Hot or Premium would cost much more.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "stvideo"
  ],
  "title": "Lifecycle management",
  "menu": [
   "*Lifecycle management"
  ],
  "rows": [
   [
    "> 30 days",
    "Cool"
   ],
   [
    "*> 90 days",
    "Cold"
   ],
   [
    "> 3 years",
    "Delete"
   ]
  ]
 },
 "keep": "Data that cools but stays readable = lifecycle Hot → Cool → Cold."
}
);
