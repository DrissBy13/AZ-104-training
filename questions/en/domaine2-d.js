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
 "id": "D2-149",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to block all network access to storage66 by default, then allow Subnet1 of VNet1, with Azure CLI.</p><p>How should you complete the commands?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "CLI: --default-action Deny then az storage account network-rule add.",
 "tpl": "az storage account update --name storage66 --resource-group RG1 --default-action {0}<br>az storage account {1} add --account-name storage66 --resource-group RG1 --vnet-name VNet1 --subnet Subnet1"
},
{
 "id": "D2-150",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to forbid anonymous blob access for the whole account storage67, with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Forbidding anonymous access for the whole account = AllowBlobPublicAccess $false.",
 "tpl": "{0} -ResourceGroupName RG1 -Name storage67 {1} $false"
},
{
 "id": "D2-151",
 "dom": 2,
 "type": "cmd",
 "stem": "<p>You need to regenerate key1 of storage68 with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Regenerate = New-AzStorageAccountKey -KeyName key1|key2.",
 "tpl": "{0} -ResourceGroupName RG1 -Name storage68 -KeyName {1}"
},
{
 "id": "D2-152",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to migrate storage69 from France Central to West Europe, without losing its configuration.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 "keep": "Region migration: template, new account, copy, switch over.",
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
 ]
},
{
 "id": "D2-153",
 "dom": 2,
 "type": "order",
 "stem": "<p>You need to configure storage70 to use customer-managed keys stored in KV2.</p><p>Which four actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 "keep": "CMK: protected vault, key, right for the identity, then the account setting.",
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
 ]
},
{
 "id": "D2-154",
 "dom": 2,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate data protection feature for each risk.</p><p>To answer, drag the appropriate feature to each risk. Each feature may be used once, more than once, or not at all.</p>",
 "srcLabel": "Features",
 "tgtHead": [
  "Risk",
  "Feature"
 ],
 "srcs": [
  "Blob soft delete",
  "Versioning",
  "Container soft delete",
  "CanNotDelete lock",
  "Immutability"
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
 "tgtHead": [
  "Feature",
  "Value"
 ],
 "srcs": [
  "5",
  "7 days",
  "14 days",
  "200",
  "365 days"
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
 "type": "yngrid",
 "stem": "<p>A storage account has its firewall enabled (selected networks). A user gets the error “This request is not authorized” when opening a container in the portal, from their office.</p><p>For each of the following solutions, select Yes if it allows access. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Disable blob soft delete",
   "a": 1
  },
  {
   "l": "Add the office's public IP to the firewall",
   "a": 0
  },
  {
   "l": "Connect from a VM in an allowed subnet",
   "a": 0
  },
  {
   "l": "Assign them the Owner role on the storage account",
   "a": 1
  }
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
 "type": "yngrid",
 "stem": "<p>You need to pick the features that require <b>hierarchical namespace</b> on a storage account.</p><p>For each of the following features, select Yes if it requires the hierarchical namespace. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Static website",
   "a": 1
  },
  {
   "l": "NFS 3.0 for blob storage",
   "a": 0
  },
  {
   "l": "Object replication between accounts",
   "a": 1
  },
  {
   "l": "SFTP for blob storage",
   "a": 0
  }
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
 "keep": "Prefix = container/folder, no wildcard; condition Created, Modified, or Last accessed.",
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
 }
},
{
 "id": "D2-173",
 "dom": 2,
 "type": "screen",
 "stem": "<p>You create a private endpoint for the file service of storage78 in Subnet-PE of VNet1. VMs in VNet1 must resolve the account name to the private address automatically.</p><p>How should you configure the endpoint?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Private endpoint: right sub-resource, normal subnet, privatelink.<service> zone.",
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
 }
},
{
 "id": "D2-174",
 "dom": 2,
 "type": "hotspot",
 "stem": "<p>You need to create a user delegation SAS for a single blob from the portal.</p><p>Which option should you select in the blob's context menu?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "SAS for a blob = Generate SAS on the blob.",
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
 }
}
);
