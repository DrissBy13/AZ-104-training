/* Domaine 2 : Stockage */
AZ.questions.push(
{
 "id": "D2-001",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to create a storage account named storage1 that meets the following requirements:</p><ul><li>Support blobs, file shares, queues, and tables.</li><li>Stay available if an availability zone or the whole region is lost.</li><li>Allow reading data in the secondary region at any time.</li></ul><p>How should you complete the command? To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az storage account create --name storage1 --resource-group RG1 --location francecentral --sku {0} --kind {1}",
 "rows": [
  {
   "o": [
    "Standard_LRS",
    "Standard_ZRS",
    "Standard_GRS",
    "Standard_RAGZRS",
    "Premium_LRS"
   ],
   "a": 3,
   "l": "--sku"
  },
  {
   "o": [
    "BlobStorage",
    "BlockBlobStorage",
    "FileStorage",
    "StorageV2"
   ],
   "a": 3,
   "l": "--kind"
  }
 ],
 "expl": "<p>Three requirements, three clues:</p><ul><li><b>Loss of a zone</b> → replication across zones (Z).</li><li><b>Loss of the whole region</b> → a copy in a secondary region (G).</li><li><b>Reading the secondary at any time</b> → read access (RA).</li></ul><p>Hence <b>Standard_RAGZRS</b>. Standard_GRS protects the region but not the zones, and doesn't let you read the secondary without a failover.</p><p>To get all four services (blob, files, queues, tables), you need a <b>StorageV2</b> (general-purpose v2) account. BlockBlobStorage and FileStorage are specialized Premium accounts; BlobStorage is a legacy type limited to blobs.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "Create"
  ],
  "title": "Create a storage account",
  "menu": [
   "*Basics",
   "Advanced",
   "Networking",
   "Data protection"
  ],
  "rows": [
   [
    "Storage account name",
    "storage1"
   ],
   [
    "Performance",
    "Standard (StorageV2)"
   ],
   [
    "*Redundancy",
    "Geo-zone-redundant storage (GZRS)"
   ],
   [
    "*Make read access to data available in the event of regional unavailability",
    "Checked (RA-GZRS)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "LRS = 1 datacenter, ZRS = 3 zones, GRS = + secondary region, GZRS = zones + region. RA prefix = read the secondary."
},
{
 "id": "D2-002",
 "dom": 2,
 "type": "single",
 "stem": "<p>A blob is placed in the Cool access tier. It is deleted 10 days later.</p><p>How many days of early deletion are billed?</p>",
 "opts": [
  "0 days",
  "10 days",
  "20 days",
  "30 days"
 ],
 "ans": 2,
 "expl": "<p>Each cooler tier has a <b>minimum retention period</b>: Cool 30 days, Cold 90 days, Archive 180 days. If you delete (or move) the blob earlier, Azure bills the remaining days.</p><p>Here: 30 − 10 = <b>20 days</b> billed extra.</p><p>The Hot tier has no minimum.</p>",
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
 "keep": "Minimums: Cool 30 d, Cold 90 d, Archive 180 d. Deleting earlier = remaining days billed."
},
{
 "id": "D2-003",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You have a storage account named storage1. Account shared access signatures (SAS) were distributed to several partners. One of them leaked.</p><p>You need to immediately revoke all account SAS signed with the key key1.</p><p>Which setting should you use? To answer, select the appropriate setting in the answer area.</p>",
 "win": {
  "title": "storage1 | Storage account",
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
    "g": "Data storage",
    "items": [
     "Containers",
     "File shares"
    ]
   },
   {
    "g": "Security + networking",
    "items": [
     "Networking",
     "Access keys",
     "Shared access signature",
     "Encryption"
    ]
   },
   {
    "g": "Data management",
    "items": [
     "Data protection",
     "Lifecycle management"
    ]
   }
  ]
 },
 "ans": "Access keys",
 "expl": "<p>An <b>account SAS</b> is signed with one of the two access keys (key1 or key2). Azure keeps no list of these SAS: you can't cancel just one.</p><p>The only way to revoke them is to <b>regenerate the key</b> that signed them, in <b>Access keys</b>. All SAS signed with key1 become invalid immediately. Note: applications that use key1 must then be updated.</p><p>The <b>Shared access signature</b> page is for generating SAS, not revoking them. To be able to revoke a specific SAS, you create a service SAS tied to a <b>stored access policy</b> on the container.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Access keys",
  "menu": [
   "Overview",
   "Shared access signature",
   "*Access keys",
   "Encryption"
  ],
  "rows": [
   [
    "*key1",
    "Rotate key"
   ],
   [
    "key2",
    "Unchanged"
   ]
  ],
  "btn": "Rotate key"
 },
 "keep": "Revoking account SAS = regenerate the key that signed them. SAS revocable one by one = stored access policy."
},
{
 "id": "D2-004",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The firewall of the storage account storage1 is set to <b>Enabled from selected virtual networks and IP addresses</b>. Only the subnet Subnet1 of VNet1 is added. No IP address is listed.</p><p>Each user below has a valid SAS for storage1.</p><p>What is the result of each access? To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "VM1, in Subnet1 of VNet1:",
   "o": [
    "Allowed",
    "Denied"
   ],
   "a": 0
  },
  {
   "l": "A user from the internet, at home:",
   "o": [
    "Allowed",
    "Denied"
   ],
   "a": 1
  },
  {
   "l": "VM2, in Subnet2 of VNet1:",
   "o": [
    "Allowed",
    "Denied"
   ],
   "a": 1
  }
 ],
 "expl": "<p>The storage firewall is checked <b>before</b> authorization: a valid SAS is useless if the network source isn't allowed.</p><ul><li><b>VM1 (Subnet1): allowed.</b> The subnet is in the list, with a Microsoft.Storage service endpoint.</li><li><b>Home: denied.</b> No public IP address is allowed.</li><li><b>VM2 (Subnet2): denied.</b> Each subnet must be added; being in the same VNet isn't enough.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Networking",
  "menu": [
   "Overview",
   "*Networking",
   "Access keys"
  ],
  "rows": [
   [
    "*Public network access",
    "Enabled from selected virtual networks and IP addresses"
   ],
   [
    "Virtual networks",
    "VNet1 / Subnet1"
   ],
   [
    "Address range",
    "(empty)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Storage firewall first, authorization second. Each subnet and each IP must be listed."
},
{
 "id": "D2-005",
 "dom": 2,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Your AD DS domain is synchronized with Microsoft Entra ID. The storage account storage1 contains an Azure Files share named share1.</p><p>Domain users must read and modify the files in share1 by using their AD DS credentials.</p><p>Which two actions should you perform? Each correct answer presents part of the solution.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "opts": [
  "Enable AD DS authentication on storage1",
  "Generate a SAS for each user",
  "Assign the Storage File Data SMB Share Contributor role on share1",
  "Assign the Reader role on storage1"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<p>Identity-based access to Azure Files works on three levels:</p><ol><li><b>Identity source</b> on the account: here <b>AD DS</b> (the storage account is joined to the domain).</li><li><b>Share-level permission</b> through an Azure role: <b>Storage File Data SMB Share Contributor</b> to read and modify.</li><li><b>NTFS permissions</b> on folders and files, to fine-tune.</li></ol><p>A SAS doesn't use the AD identity and doesn't work for an SMB mount. The Reader role covers the control plane: it gives no access to files.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "File shares"
  ],
  "title": "File shares | Identity-based access",
  "menu": [
   "*File shares"
  ],
  "rows": [
   [
    "*Active Directory Domain Services (AD DS)",
    "Configured"
   ],
   [
    "Microsoft Entra Kerberos",
    "Not configured"
   ]
  ],
  "btn": "Set up"
 },
 "keep": "Azure Files + identity: identity source on the account, SMB role on the share, then NTFS permissions."
},
{
 "id": "D2-006",
 "dom": 2,
 "type": "order",
 "stem": "<p>You have two storage accounts named source1 and dest1. You need to configure object replication from source1 to dest1.</p><p>Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Enable change feed on dest1",
  "Enable blob versioning on source1 and dest1",
  "Enable point-in-time restore on source1",
  "Enable change feed on source1",
  "Create the object replication rule from source1 to dest1"
 ],
 "seq": [
  1,
  3,
  4
 ],
 "expl": "<p>Object replication copies blobs asynchronously from a source account to a destination account. Its prerequisites:</p><ul><li><b>Blob versioning</b> on the source <b>and</b> the destination;</li><li><b>Change feed</b> on the <b>source</b> only.</li></ul><p>You then create the <b>replication rule</b> (source container → destination container, optional filters).</p><p>Change feed on the destination and point-in-time restore aren't required.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "source1"
  ],
  "title": "source1 | Object replication",
  "menu": [
   "Data protection",
   "*Object replication"
  ],
  "rows": [
   [
    "Destination account",
    "dest1"
   ],
   [
    "*Source → destination container",
    "data → data-copy"
   ],
   [
    "Prerequisites",
    "Versioning (both accounts), change feed (source)"
   ]
  ],
  "btn": "Create replication rules"
 },
 "keep": "Object replication: versioning on both sides, change feed on the source, then the rule."
},
{
 "id": "D2-007",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You have a storage account named storage1.</p><p>Users must be able to recover, for 14 days, a deleted blob and the previous version of an overwritten blob. Only the necessary features must be enabled.</p><p>How should you configure data protection? To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "storage1 | Data protection",
  "sub": "Storage account",
  "rows": [
   {
    "k": "head",
    "t": "Recovery"
   },
   {
    "k": "check",
    "l": "Enable point-in-time restore for containers",
    "d": false,
    "a": false
   },
   {
    "k": "check",
    "l": "Enable soft delete for blobs",
    "d": true,
    "a": true
   },
   {
    "k": "select",
    "l": "Keep deleted blobs for (in days)",
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
    "d": true,
    "a": false
   },
   {
    "k": "head",
    "t": "Tracking"
   },
   {
    "k": "check",
    "l": "Enable versioning for blobs",
    "d": false,
    "a": true
   },
   {
    "k": "check",
    "l": "Enable blob change feed",
    "d": false,
    "a": false
   }
  ]
 },
 "expl": "<p>Two needs, two features:</p><ul><li>Recovering a <b>deleted</b> blob → <b>soft delete for blobs</b>, with <b>14 days</b> of retention.</li><li>Recovering the previous version of an <b>overwritten</b> blob → <b>versioning</b>. (Soft delete alone keeps a snapshot on overwrite, but versioning is the feature designed for this.)</li></ul><p>Soft delete for <b>containers</b> is checked by default, but it isn't requested: uncheck it. Same for change feed and point-in-time restore.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Data protection",
  "menu": [
   "Overview",
   "*Data protection",
   "Object replication"
  ],
  "rows": [
   [
    "*Enable soft delete for blobs",
    "Checked · 14 days"
   ],
   [
    "*Enable versioning for blobs",
    "Checked"
   ],
   [
    "Enable soft delete for containers",
    "Unchecked"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Deleted blob = blob soft delete. Overwritten blob = versioning. Deleted container = container soft delete."
},
{
 "id": "D2-008",
 "dom": 2,
 "type": "single",
 "stem": "<p>The container legal1 holds documents related to litigation. They must be neither modified nor deleted while the litigation is ongoing. The length of the litigation is unknown.</p><p>What should you configure on legal1?</p>",
 "opts": [
  "A time-based retention policy",
  "A Delete lock on the account",
  "A lifecycle management rule",
  "A legal hold"
 ],
 "ans": 3,
 "expl": "<p><b>Immutable</b> storage (WORM: write once, read many) offers two types of policies on a container:</p><ul><li><b>Time-based retention</b>: blobs are protected for a fixed period (for example 7 years).</li><li><b>Legal hold</b>: blobs are protected with no duration, until the hold is removed. It's designed for litigation whose end isn't known.</li></ul><p>A resource lock protects the account on the control plane, not the files. Lifecycle management moves or deletes blobs; it protects nothing.</p>",
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
 "keep": "Known duration = time-based retention. Unknown duration = legal hold."
},
{
 "id": "D2-009",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You store different types of data in Blob storage accounts. You need to reduce costs while meeting access needs.</p><p>Which access tier should you use for each type of data? To answer, drag the appropriate tier to each data type. Each tier may be used once, more than once, or not at all.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "srcLabel": "Access tiers",
 "tgtHead": [
  "Data",
  "Access tier"
 ],
 "srcs": [
  "Hot",
  "Cool",
  "Cold",
  "Archive"
 ],
 "tgts": [
  {
   "l": "Logs read several times a day",
   "a": 0
  },
  {
   "l": "Backups rarely accessed, kept 60 days, immediate read required",
   "a": 1
  },
  {
   "l": "Reports viewed once a year, kept 1 year, immediate read required",
   "a": 2
  },
  {
   "l": "Legal archives kept 10 years, a delay of several hours is acceptable",
   "a": 3
  }
 ],
 "expl": "<p>Pick the cheapest tier that meets the access need and retention period:</p><ul><li><b>Hot</b>: frequent access, most expensive storage, cheapest access.</li><li><b>Cool</b>: rare access, 30-day minimum. For 60 days, Cold (90-day minimum) would cost more because of the penalty.</li><li><b>Cold</b>: very rare access, 90-day minimum, always readable immediately. Ideal for 1 year.</li><li><b>Archive</b>: offline, rehydration takes several hours, 180-day minimum. Only if the delay is acceptable.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers"
  ],
  "title": "Change tier",
  "rows": [
   [
    "*Access tier",
    "Hot · Cool · Cold · Archive"
   ],
   [
    "Archive",
    "Rehydration: up to 15 h (standard), < 1 h (high priority)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Hot > Cool (30 d) > Cold (90 d) > Archive (180 d, offline). Cooler = cheaper storage, more expensive access."
}
);
