/* Domain 2: storage (batch B : D2-010 to D2-069) */
AZ.questions.push(
{
 "id": "D2-011",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate storage account type for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Account types",
 "tgtHead": [
  "Need",
  "Account type"
 ],
 "srcs": [
  "Standard general-purpose v2",
  "Premium block blobs",
  "Premium file shares",
  "Premium page blobs"
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
 "id": "D2-013",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate redundancy option for each requirement. Each solution must be as cheap as possible.</p><p>To answer, drag the appropriate redundancy to each requirement. Each redundancy may be used once, more than once, or not at all.</p>",
 "srcLabel": "Redundancy",
 "tgtHead": [
  "Requirement",
  "Redundancy"
 ],
 "srcs": [
  "LRS",
  "ZRS",
  "GRS",
  "RA-GRS",
  "GZRS"
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
 "id": "D2-024",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You need to be able to recover blobs in storage5 that were <b>overwritten</b> or <b>deleted</b> by mistake in the last 30 days.</p><p>For each of the following features, select Yes if it's part of the solution. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Blob soft delete (30 days)",
   "a": 0
  },
  {
   "l": "Immutability policy with a legal hold",
   "a": 1
  },
  {
   "l": "Blob versioning on the account",
   "a": 0
  },
  {
   "l": "Object replication to a second account",
   "a": 1
  }
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
 "id": "D2-029",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to automatically copy new blobs from the src container of the storageA account (France Central) to the dst container of the storageB account (West Europe).</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 "keep": "Object replication: versions (both accounts), change feed (source), no hierarchical namespace.",
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
 ]
},
{
 "id": "D2-031",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate type of shared access signature (SAS) for each need.</p><p>To answer, drag the appropriate type to each need. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "SAS types",
 "tgtHead": [
  "Need",
  "SAS type"
 ],
 "srcs": [
  "User delegation SAS",
  "Service SAS",
  "Account SAS"
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
 "id": "D2-042",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You configure customer-managed keys for storage15, with the key vault KV1.</p><p>For each of the following conditions, select Yes if it's required. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "storage15 must use GRS or GZRS redundancy",
   "a": 1
  },
  {
   "l": "storage15's identity must be able to use the key",
   "a": 0
  },
  {
   "l": "KV1 must be in a different subscription from storage15",
   "a": 1
  },
  {
   "l": "KV1 must have purge protection",
   "a": 0
  }
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
 "id": "D2-046",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Files share tier for each use, in a Standard general-purpose v2 or Premium account.</p><p>To answer, drag the appropriate tier to each use. Each tier may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tiers",
 "tgtHead": [
  "Use",
  "Tier"
 ],
 "srcs": [
  "Premium",
  "Transaction optimized",
  "Hot",
  "Cool"
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
 "id": "D2-050",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>Users access the share share5 with their AD DS identity. You need to assign share-level permissions, following the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "tgtHead": [
  "Need",
  "Role"
 ],
 "srcs": [
  "Storage File Data SMB Share Reader",
  "Storage File Data SMB Share Contributor",
  "Storage File Data SMB Share Elevated Contributor",
  "Storage Account Contributor"
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
 "id": "D2-052",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to sync the folder D:\\Data on the file server FS1 with the Azure share share6, keeping rarely used files only in Azure.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 "keep": "File Sync: service, agent + registration, sync group (1 share), server endpoint.",
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
 ]
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
 "id": "D2-055",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to copy the entire content of the local folder C:\\Exports, including subfolders, to the exports container of storage19, with AzCopy and a SAS.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "AzCopy: copy / sync / make / remove; --recursive for subfolders.",
 "tpl": "azcopy {0} \"C:\\Exports\" \"https://storage19.{1}.core.windows.net/exports?&lt;SAS&gt;\" {2}"
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
 "keep": "Zone + region without secondary read = GZRS; HTTPS = secure transfer.",
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
 }
},
{
 "id": "D2-067",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You configure data protection for storage22: deleted blobs must be recoverable for 14 days, deleted containers for 7 days, and previous versions of overwritten blobs must be kept. Point-in-time restore isn't requested.</p><p>How should you configure the page?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Three independent protections: blobs, containers, versions.",
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
 }
},
{
 "id": "D2-068",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to regenerate key2 of the storage account storage23.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "Access keys = key1/key2, rotation and reminder.",
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
 }
},
{
 "id": "D2-069",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to configure storage24 so that blobs move automatically to the Archive tier after 180 days without modification.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "Automatic tier change = Lifecycle management.",
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
 }
}
);
