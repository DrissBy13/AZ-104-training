/* Domain 2: storage (batch C : D2-070 to D2-129) */
AZ.questions.push(
{
 "id": "D2-070",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to create a general-purpose v2 storage account with RA-GRS redundancy, with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "SKU = performance + redundancy (Standard_RAGRS, Premium_ZRS…). Kind = StorageV2 by default.",
 "tpl": "New-AzStorageAccount -ResourceGroupName RG1 -Name storage25 -Location francecentral -SkuName {0} -Kind {1}"
},
{
 "id": "D2-071",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to move the blob report.pdf to the Archive tier immediately, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Changing a blob's tier = set-tier; rehydrating = set-tier to Hot with --rehydrate-priority.",
 "tpl": "az storage blob {0} --account-name storage26 --container-name docs --name report.pdf --tier {1} --auth-mode login"
},
{
 "id": "D2-072",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to create a private container named invoices with Azure PowerShell. The storage context is in $ctx.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "-Permission Off / Blob / Container = Private / read blobs / read + list.",
 "tpl": "{0} -Name invoices -Context $ctx -Permission {1}"
},
{
 "id": "D2-073",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to create a 1 TiB file share named team in storage27, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Share through ARM = az storage share-rm create --quota (GiB).",
 "tpl": "az storage {0} create --storage-account storage27 --resource-group RG1 --name team {1} 1024"
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
 "id": "D2-087",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to mount the share share7 of storage35 on a Windows computer, persistently, with the account key.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 "keep": "Mounting a share: port 445, cmdkey, persistent net use.",
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
 ]
},
{
 "id": "D2-101",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate transfer solution for each situation.</p><p>To answer, drag the appropriate solution to each situation. Each solution may be used once, more than once, or not at all.</p>",
 "srcLabel": "Solutions",
 "tgtHead": [
  "Situation",
  "Solution"
 ],
 "srcs": [
  "AzCopy",
  "Azure Data Box",
  "Azure File Sync",
  "Azure Storage Explorer"
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
 "type": "yngrid",
 "stem": "<p>You need to give a team of researchers read and write access to only the research container of storage42, with their Microsoft Entra accounts.</p><p>For each of the following actions, select Yes if it's required. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Assign Storage Blob Data Contributor to the group",
   "a": 0
  },
  {
   "l": "Make the container public for the project",
   "a": 1
  },
  {
   "l": "Give them key1 through a key vault",
   "a": 1
  },
  {
   "l": "Choose the research container as the scope",
   "a": 0
  }
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
 "type": "yngrid",
 "stem": "<p>You need to reduce the costs of a storage account holding 50 TB of blobs, 80% of which haven't been read for 6 months but must remain readable immediately.</p><p>For each of the following actions, select Yes if it's suitable. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Switch the account to Premium block blobs",
   "a": 1
  },
  {
   "l": "Move all blobs to the Archive tier",
   "a": 1
  },
  {
   "l": "A rule to Cold after 90 days without reads",
   "a": 0
  },
  {
   "l": "Enable last access time tracking",
   "a": 0
  }
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
 "type": "yngrid",
 "stem": "<p>You need to configure point-in-time restore on storage43.</p><p>For each of the following features, select Yes if it must be enabled. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The account's hierarchical namespace",
   "a": 1
  },
  {
   "l": "Blob versioning on both accounts",
   "a": 0
  },
  {
   "l": "Object replication to a backup account",
   "a": 1
  },
  {
   "l": "Change feed on the source account",
   "a": 0
  }
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
 "keep": "Minimal SAS: services, permissions, duration, HTTPS.",
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
 }
},
{
 "id": "D2-113",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You configure networking for storage48. Only Subnet1 of VNet1 and your office's public IP address (203.0.113.50) must access the account. Azure Backup must be able to access it.</p><p>How should you configure the page?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "IP rules = public addresses only; Azure services = trusted services exception.",
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
 }
},
{
 "id": "D2-114",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to configure the change of storage49 from LRS to ZRS redundancy.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "Redundancy, last sync, failover = Redundancy page.",
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
 }
},
{
 "id": "D2-115",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to allow the share share11 to be restored for 30 days after a deletion.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "Share soft delete = File shares page, not Data protection.",
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
 }
}
);
