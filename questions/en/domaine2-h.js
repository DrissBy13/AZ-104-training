/* Domain 2: storage (batch H: D2-411 to D2-420, long scenarios) */
AZ.questions.push(
{
 "id": "D2-411",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso must create four storage accounts. For each one, you must choose the right account type and creation options:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Usage</th></tr><tr><td>st-profiles</td><td>SMB shares for Azure Virtual Desktop FSLogix profiles; low latency and high IOPS required</td></tr><tr><td>st-lake</td><td>Spark analytics with atomic directory renames and per-folder POSIX ACLs</td></tr><tr><td>st-partner</td><td>A partner drops files over SFTP with an SSH key, with no Entra ID account</td></tr><tr><td>st-iotfast</td><td>Very large numbers of small blobs written, minimal write latency; no need for SMB files</td></tr></table></div><p>Which account type or option should you choose?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "st-profiles:",
   "o": [
    "Standard GPv2, hot share tier",
    "Standard GPv2, transaction-optimized shares",
    "Premium, page blobs",
    "Premium, file shares"
   ],
   "a": 3
  },
  {
   "l": "st-lake:",
   "o": [
    "Hierarchical namespace",
    "Blob versioning",
    "Blob index with per-folder tags",
    "Change feed and immutability"
   ],
   "a": 0
  },
  {
   "l": "st-partner:",
   "o": [
    "Account SAS emailed to the partner",
    "SFTP on a GPv2 account with no special option",
    "Hierarchical namespace + SFTP",
    "Azure Files with the NFS 4.1 protocol"
   ],
   "a": 2
  },
  {
   "l": "st-iotfast:",
   "o": [
    "Standard GPv2 with RA-GZRS",
    "Premium, file shares",
    "Standard GPv2, hot tier",
    "Premium, block blobs"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Premium, file shares.</b> The FileStorage type (SSD) is recommended for FSLogix profiles: low latency and provisioned IOPS.<b>Hierarchical namespace.</b> It turns the account into Data Lake Storage: real directories (atomic rename) and POSIX ACLs.<b>SFTP.</b> It requires the hierarchical namespace; access uses the account's local users (SSH key or password), independent of Entra ID.<b>Premium, block blobs.</b> The BlockBlobStorage type (SSD) targets high-transaction, low-latency workloads.",
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
    "*st-profiles",
    "Premium, file shares"
   ],
   [
    "st-lake",
    "Hierarchical namespace"
   ],
   [
    "st-partner",
    "Hierarchical namespace + SFTP"
   ],
   [
    "st-iotfast",
    "Premium, block blobs"
   ]
  ]
 },
 "keep": "FSLogix = Premium files. POSIX ACLs = hierarchical namespace. SFTP = hierarchical namespace + local user. Blob latency = Premium block."
},
{
 "id": "D2-412",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam's compliance team imposes new encryption rules on storage accounts:</p><ul><li>stcompta (existing) must be encrypted with a key managed by Fabrikam, stored in kv-crypto; the account must access the key without a secret;</li><li>during configuration, the portal rejects kv-crypto: the vault's required protection isn't enabled;</li><li>stbank (to be created) must have two layers of encryption at rest, with two different algorithms and keys;</li><li>in stshared (existing), the client-a container must be encrypted with a key specific to customer A and the client-b container with the Microsoft-managed key, without creating a second account.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "stcompta's access to the key:",
   "o": [
    "An account key stored in kv-crypto",
    "An account SAS with Read permission",
    "The storage account's managed identity",
    "A service principal with a client secret"
   ],
   "a": 2
  },
  {
   "l": "Required protection on kv-crypto:",
   "o": [
    "The vault firewall limited to stcompta",
    "A read-only vault access policy",
    "Soft delete + purge protection",
    "A CanNotDelete lock on the vault"
   ],
   "a": 2
  },
  {
   "l": "stbank:",
   "o": [
    "Encryption at host on the account",
    "Azure Disk Encryption double encryption",
    "A second key added after creation",
    "Infrastructure encryption, at creation"
   ],
   "a": 3
  },
  {
   "l": "stshared:",
   "o": [
    "A customer-provided key on each request",
    "Encryption scopes",
    "Two accounts in the same resource group",
    "A disk encryption set per container"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Customer-managed key.</b> The account uses a managed identity (system- or user-assigned) that is granted the Key Vault Crypto Service Encryption User role (or get, wrapKey, unwrapKey permissions).<b>Vault.</b> Soft delete and purge protection are mandatory for a vault that protects storage encryption keys.<b>Infrastructure encryption.</b> A second AES-256 encryption at the infrastructure level, with another key; it can only be enabled when the account is created.<b>Encryption scopes.</b> They allow different keys per container or per blob in the same account.",
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
    "*stcompta's access to the key",
    "The storage account's managed identity"
   ],
   [
    "Required protection on kv-crypto",
    "Soft delete + purge protection"
   ],
   [
    "stbank",
    "Infrastructure encryption, at creation"
   ],
   [
    "stshared",
    "Encryption scopes"
   ]
  ]
 },
 "keep": "CMK = managed identity + vault with purge protection. Double layer = infrastructure, at creation. Key per container = encryption scope."
},
{
 "id": "D2-413",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The stdocs account (GPv2) hosts the public-docs and internal-docs containers. Several requests come in:</p><ul><li>Alice must be able to read internal-docs blobs from the Azure portal with her Entra ID account, without access to the account keys and without write access;</li><li>when Alice opens the container in the portal, the message “You don't have permissions to list the data using your user account with Microsoft Entra ID” appears, although she already has a data role on the container;</li><li>Bob, an administrator, must be able to manage the account configuration (redundancy, network), but the security team wants him unable to read the data;</li><li>the security team also wants a warning if the account keys haven't been rotated for 90 days.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Alice's data role:",
   "o": [
    "Storage Blob Data Reader",
    "Storage Blob Data Contributor on the container",
    "Storage Account Contributor on the account",
    "Reader on the resource group, alone"
   ],
   "a": 0
  },
  {
   "l": "Alice's error message:",
   "o": [
    "Enable anonymous access on internal-docs",
    "Wait for the Entra Connect sync",
    "Grant her Storage Account Key Operator",
    "Add the Reader role on the stdocs account"
   ],
   "a": 3
  },
  {
   "l": "Bob, without reading data:",
   "o": [
    "Owner on the account, with an ABAC condition",
    "Contributor + shared key disabled",
    "Storage Blob Data Owner on the account",
    "Storage Account Contributor, nothing else"
   ],
   "a": 1
  },
  {
   "l": "Key rotation reminder:",
   "o": [
    "A ReadOnly lock on the account",
    "An account key expiration policy",
    "Key Vault automatic rotation every 90 days",
    "An activity log alert on listKeys"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Data role.</b> Storage Blob Data Reader grants reading blobs through Entra ID, without write access.<b>Portal.</b> Browsing the account in the portal also requires a management role that allows access to it (Reader at least). Without it, the portal may also try to use the account key.<b>Bob.</b> Storage Account Contributor includes the listKeys action: with a key, Bob can reach the data. Disabling shared key authorization removes that path; he has no data role.<b>Expiration.</b> The key expiration policy (keyExpirationPeriodInDays) flags keys that haven't been rotated within the period; Azure Policy can audit it.",
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
    "*Alice's data role",
    "Storage Blob Data Reader"
   ],
   [
    "Alice's error message",
    "Add the Reader role on the stdocs account"
   ],
   [
    "Bob, without reading data",
    "Contributor + shared key disabled"
   ],
   [
    "Key rotation reminder",
    "An account key expiration policy"
   ]
  ]
 },
 "keep": "Entra read = Blob Data Reader + Reader for the portal. Account Contributor = key access. 90 days = expiration policy."
},
{
 "id": "D2-414",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The Azure Files share share-compta (standard GPv2 account, Transaction optimized tier) is used by the accounting department. The needs:</p><ul><li>reduce cost: files are mostly stored and rarely accessed, with a few accesses per week;</li><li>an accountant overwrote an Excel file yesterday; he wants to recover the version from the day before yesterday himself, from Windows Explorer, without opening a ticket;</li><li>the whole share was deleted by mistake 3 days ago by a script;</li><li>management wants a managed backup with 12-month retention and file-level restores, driven from a vault.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Share tier:",
   "o": [
    "Hot",
    "Premium, after migrating the share",
    "Cool",
    "Transaction optimized, with a lower quota"
   ],
   "a": 2
  },
  {
   "l": "Self-service restore:",
   "o": [
    "Blob versioning",
    "The local Windows Server recycle bin",
    "Blob point-in-time restore",
    "Share snapshots (Previous Versions)"
   ],
   "a": 3
  },
  {
   "l": "Deleted share:",
   "o": [
    "Restore from the secondary region",
    "Restore from a share snapshot",
    "Soft delete for file shares",
    "Open a ticket with Microsoft support"
   ],
   "a": 2
  },
  {
   "l": "Managed backup:",
   "o": [
    "Azure Site Recovery on the account",
    "Azure Backup (Recovery Services vault)",
    "A nightly scheduled AzCopy task",
    "Object replication to another account"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Cool tier.</b> For standard shares, the cool tier offers the cheapest storage with more expensive transactions; it fits rarely accessed data.<b>Snapshots.</b> Share snapshots show up in Windows' Previous Versions tab; the user restores a file himself.<b>Soft delete.</b> It lets you restore a deleted share during the retention period. Snapshots are deleted with the share if soft delete is off.<b>Azure Backup.</b> Azure Files backup is managed from a Recovery Services vault, with long retention and file restores.",
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
    "*Share tier",
    "Cool"
   ],
   [
    "Self-service restore",
    "Share snapshots (Previous Versions)"
   ],
   [
    "Deleted share",
    "Soft delete for file shares"
   ],
   [
    "Managed backup",
    "Azure Backup (Recovery Services vault)"
   ]
  ]
 },
 "keep": "Rarely accessed = cool. Previous Versions = snapshots. Deleted share = soft delete. Managed backup = Azure Backup."
},
{
 "id": "D2-415",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam hosts several kinds of content in the stweb account (GPv2):</p><ul><li>a static brochure site (HTML, CSS, JS) must be served straight from the account, with a custom home page and error page;</li><li>the site must be reachable over HTTPS on www.fabrikam.com;</li><li>a JavaScript app hosted on https://app.fabrikam.com calls stweb's Blob API from the browser; calls fail with an origin-related error;</li><li>a service continuously writes log lines at the end of existing files, never changing earlier lines;</li><li>a legacy tool stores virtual disks that receive random 512-byte writes.</li></ul><p>What should you configure or use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Static site:",
   "o": [
    "An App Service app linked to the account",
    "An Azure Files share published over HTTP",
    "Static website ($web container)",
    "A public container with Container anonymous access"
   ],
   "a": 2
  },
  {
   "l": "HTTPS on www.fabrikam.com:",
   "o": [
    "A custom domain set directly on the account",
    "Azure Front Door with the custom domain",
    "An A record to the account's address",
    "A certificate imported into the storage account"
   ],
   "a": 1
  },
  {
   "l": "Origin error:",
   "o": [
    "An account SAS embedded in the JavaScript",
    "A private endpoint for the app",
    "A CORS rule on the Blob service",
    "Anonymous access at the account level"
   ],
   "a": 2
  },
  {
   "l": "Logs, then virtual disks:",
   "o": [
    "Block, then append",
    "Page, then block",
    "Append, then block",
    "Append, then page"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Static website.</b> It serves files from the $web container, with a configurable index document and 404 error document.<b>Custom HTTPS.</b> The static website endpoint doesn't support HTTPS with a custom domain on its own: put Azure Front Door (or a CDN) in front, which handles the certificate.<b>CORS.</b> The browser blocks cross-origin calls unless the Blob service declares a CORS rule allowing https://app.fabrikam.com.<b>Blob types.</b> An append blob is optimized for appending at the end; a page blob (512-byte pages) is designed for the random writes of virtual disks.",
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
    "*Static site",
    "Static website ($web container)"
   ],
   [
    "HTTPS on www.fabrikam.com",
    "Azure Front Door with the custom domain"
   ],
   [
    "Origin error",
    "A CORS rule on the Blob service"
   ],
   [
    "Logs, then virtual disks",
    "Append, then page"
   ]
  ]
 },
 "keep": "Static site = $web. HTTPS + domain = Front Door. Other origin = CORS. Append = logs, page = disks."
},
{
 "id": "D2-416",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The stlake account (GPv2, hierarchical namespace enabled) contains the raw container with the /sales/2026/ tree. The current rights:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identity</th><th>RBAC</th><th>ACL</th></tr><tr><td>Analysts group</td><td>No data role</td><td>r-x on /sales/2026, no entry on /sales or the root</td></tr><tr><td>App-ETL (managed identity)</td><td>Storage Blob Data Owner on the account</td><td>None</td></tr><tr><td>Finance group</td><td>Storage Blob Data Reader on the container</td><td>None</td></tr></table></div><p>Findings:</p><ul><li>Analysts can't list /sales/2026;</li><li>an administrator added an r-x ACL for Analysts on /sales/2025; new folders created afterwards under /sales/2025 aren't accessible to Analysts;</li><li>the security team wants to remove Finance's read access to one specific folder with an ACL denying access.</li></ul><p>What is true?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "For Analysts on /sales/2026:",
   "o": [
    "Add --x on the root and /sales",
    "Add the Reader role on the raw container",
    "Add rwx on /sales/2026 only",
    "Add r-- on the root, recursively"
   ],
   "a": 0
  },
  {
   "l": "New folders under /sales/2025:",
   "o": [
    "ACL mask set to rwx",
    "RBAC inheritance, which is automatic",
    "Storage Blob Data Reader role on the folder",
    "Default ACL"
   ],
   "a": 3
  },
  {
   "l": "App-ETL:",
   "o": [
    "Full access, ACLs ignored",
    "Access denied by the mask",
    "Read-only by default",
    "Blocked until an ACL exists"
   ],
   "a": 0
  },
  {
   "l": "ACL denying Finance:",
   "o": [
    "Ineffective: RBAC is evaluated first",
    "Effective if set on the target folder",
    "Effective with a mask set to ---",
    "Effective if applied recursively"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Execute.</b> To reach a folder, you need execute permission (--x) on every parent folder, root included.<b>Default ACL.</b> Access ACLs only apply to the item; a folder's default ACLs are copied to new children. They don't change existing children.<b>Evaluation order.</b> RBAC is evaluated before ACLs: if a role grants access, ACLs aren't checked. Storage Blob Data Owner is a superuser; Finance keeps read access through its role, which no ACL can remove.",
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
    "*For Analysts on /sales/2026",
    "Add --x on the root and /sales"
   ],
   [
    "New folders under /sales/2025",
    "Default ACL"
   ],
   [
    "App-ETL",
    "Full access, ACLs ignored"
   ],
   [
    "ACL denying Finance",
    "Ineffective: RBAC is evaluated first"
   ]
  ]
 },
 "keep": "Parents = --x. New children = default ACL. RBAC first: a role can't be removed by ACL."
},
{
 "id": "D2-417",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso is reorganizing its storage accounts:</p><ul><li>stapp (GPv2, LRS, France Central) must move to ZRS with no application downtime; it holds only hot and cool blobs;</li><li>starch (GPv2, GRS, France Central) must also move to GZRS, but it holds blobs in the Archive tier;</li><li>stold (GPv2, West Europe) must be moved to France Central;</li><li>stproj must be renamed to stprojets.</li></ul><p>What can you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "stapp:",
   "o": [
    "Recreate the account and copy with AzCopy",
    "Move to GRS, then to ZRS",
    "Start a conversion to ZRS",
    "Not possible for an existing account"
   ],
   "a": 2
  },
  {
   "l": "starch:",
   "o": [
    "Convert directly, Archive stays on GRS",
    "Move the account to RA-GRS first",
    "The conversion moves archived blobs by itself",
    "Rehydrate or move the archived blobs first"
   ],
   "a": 3
  },
  {
   "l": "stold:",
   "o": [
    "Change the region in the account properties",
    "Fail the account over to its paired region",
    "Create a target account and copy the data",
    "Move the resource to France Central"
   ],
   "a": 2
  },
  {
   "l": "stproj:",
   "o": [
    "Move it to a new group named stprojets",
    "New account + copy",
    "Rename the account in the portal",
    "Rename with Set-AzStorageAccount"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Conversion.</b> Moving from LRS to ZRS can be done with a conversion started from the portal, CLI or PowerShell, without downtime.<b>Archive.</b> ZRS, GZRS and RA-GZRS don't support the Archive tier: archived blobs must be rehydrated (or deleted) before conversion.<b>Region.</b> A storage account doesn't move to another region: create a target account (for example from an exported template) and copy the data.<b>Name.</b> A storage account's globally unique name can't be changed.",
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
    "*stapp",
    "Start a conversion to ZRS"
   ],
   [
    "starch",
    "Rehydrate or move the archived blobs first"
   ],
   [
    "stold",
    "Create a target account and copy the data"
   ],
   [
    "stproj",
    "New account + copy"
   ]
  ]
 },
 "keep": "LRS → ZRS = conversion. Archive = move out before ZRS/GZRS. Region or name = new account + copy."
},
{
 "id": "D2-418",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam uses two Azure Files shares:</p><ul><li>share-office (standard GPv2 account, SMB) is mounted by headquarters PCs, connected to Azure by a site-to-site VPN to VNet-Hub; the network team wants SMB traffic to go through the VPN and the account to no longer be reachable from the Internet;</li><li>share-hpc must be mounted by Linux compute VMs with the NFS protocol, with high performance.</li></ul><p>After creating the NFS share, mounting fails from the VMs, although the network rules allow the subnet.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "share-office:",
   "o": [
    "Azure File Sync on each HQ PC",
    "Service endpoint on the gateway subnet",
    "An IP rule for the HQ public address",
    "Private endpoint in VNet-Hub"
   ],
   "a": 3
  },
  {
   "l": "share-hpc account:",
   "o": [
    "Premium, file shares",
    "Standard GPv2, hot tier",
    "Premium, block blobs with NFS",
    "Standard GPv2, hierarchical namespace"
   ],
   "a": 0
  },
  {
   "l": "NFS authentication:",
   "o": [
    "Storage account key",
    "Microsoft Entra Kerberos",
    "Network-based",
    "Service SAS"
   ],
   "a": 2
  },
  {
   "l": "Mount failure:",
   "o": [
    "Account key missing from /etc/fstab",
    "Port 445 blocked between VMs and the account",
    "Kerberos not set up on the VMs",
    "“Secure transfer required” enabled"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Private endpoint.</b> The share gets a private address in VNet-Hub, reachable over the VPN; public access is then disabled (with suitable DNS resolution at HQ).<b>NFS.</b> Azure Files NFS shares require a Premium FileStorage account; they don't use identity-based authentication: access is controlled by network rules (private or service endpoint).<b>Secure transfer.</b> Historically, NFS 4.1 wasn't encrypted in transit and mounting failed if “Secure transfer required” was enabled; in-transit encryption for NFS now exists with a dedicated mount helper.",
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
    "*share-office",
    "Private endpoint in VNet-Hub"
   ],
   [
    "share-hpc account",
    "Premium, file shares"
   ],
   [
    "NFS authentication",
    "Network-based"
   ],
   [
    "Mount failure",
    "“Secure transfer required” enabled"
   ]
  ]
 },
 "keep": "SMB over VPN = private endpoint. NFS = Premium, network security. NFS mount refused = secure transfer."
},
{
 "id": "D2-419",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The stmarket account (GPv2) contains the following containers. The account setting “Allow Blob anonymous access” is currently enabled.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Container</th><th>Access level</th><th>Need</th></tr><tr><td>catalog</td><td>Private</td><td>Site visitors must download an image whose URL they know, without being able to list the container</td></tr><tr><td>press</td><td>Container</td><td>Journalists must be able to list and download files anonymously</td></tr><tr><td>contracts</td><td>Blob</td><td>No anonymous access must be possible</td></tr></table></div><p>Also, the Data team wants to find every blob in the account tagged project = alpha, whatever the container, without walking the names.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "catalog:",
   "o": [
    "Container",
    "Private + anonymous access disabled",
    "Blob",
    "Private, unchanged"
   ],
   "a": 2
  },
  {
   "l": "contracts:",
   "o": [
    "Blob, unchanged",
    "Blob, with a revoked SAS",
    "Container, with a stored policy",
    "Private"
   ],
   "a": 3
  },
  {
   "l": "If anonymous access were disabled on the account:",
   "o": [
    "No anonymous access at all, for any container",
    "No effect on existing containers",
    "Only catalog would stay accessible",
    "press would stay anonymously accessible"
   ],
   "a": 0
  },
  {
   "l": "Search project = alpha:",
   "o": [
    "Blob index tags",
    "Blob metadata",
    "Blob name prefixes",
    "Azure tags on the account"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Access levels.</b> Blob = anonymous read of blobs by URL, no listing; Container = read and list; Private = no anonymous access.<b>Account setting.</b> When anonymous access is disabled on the account, it overrides each container's access level: no anonymous access is possible anymore.<b>Index tags.</b> Blob index tags are indexed and queryable across the account (Find Blobs by Tags); metadata isn't indexed. Azure tags apply to resources, not blobs.",
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
    "*catalog",
    "Blob"
   ],
   [
    "contracts",
    "Private"
   ],
   [
    "If anonymous access were disabled on the account",
    "No anonymous access at all, for any container"
   ],
   [
    "Search project = alpha",
    "Blob index tags"
   ]
  ]
 },
 "keep": "Blob = URL without listing. Container = listing. The account setting wins. Search = index tags."
},
{
 "id": "D2-420",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso must open the stexchange account (GPv2) to several partners:</p><ul><li>partner Alpha drops files over SFTP; it must only have access to the alpha/ folder of the inbound container, which must be its landing folder at login;</li><li>partner Beta wants to authenticate with a password rather than a key;</li><li>a Linux compute cluster must mount a blob container as an NFS 3.0 file system;</li><li>finance asks why the account bill went up while the data volume is stable, since SFTP was enabled.</li></ul><p>What should you configure, and what explains the increase?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Partner Alpha:",
   "o": [
    "Local user, home directory inbound/alpha",
    "A POSIX ACL for Alpha's Entra user",
    "An Entra ID guest account with a data role",
    "A service SAS on inbound/alpha"
   ],
   "a": 0
  },
  {
   "l": "Partner Beta:",
   "o": [
    "Local user with a password",
    "Entra ID password authentication",
    "Account access key as a password",
    "Not possible: SFTP only accepts SSH keys"
   ],
   "a": 0
  },
  {
   "l": "NFS 3.0 mount:",
   "o": [
    "BlobFuse with an account key",
    "Hierarchical namespace + NFS 3.0 + network",
    "An Azure Files NFS share in the same account",
    "A container SAS passed at mount time"
   ],
   "a": 1
  },
  {
   "l": "Bill increase:",
   "o": [
    "SFTP requires GRS redundancy",
    "SFTP requires the Premium tier",
    "SFTP doubles stored volume",
    "The SFTP endpoint is billed per hour"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Local users.</b> SFTP relies on the account's local users, with per-container permissions and a home directory; authentication uses an SSH key or an Azure-generated password.<b>NFS 3.0 on Blob.</b> It requires the hierarchical namespace and enabling NFS 3.0 at account creation, with access limited to the network (private or service endpoint); there is no identity-based authentication.<b>Cost.</b> The SFTP endpoint is billed per hour while enabled, on top of storage and transactions: it can be disabled when not in use.",
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
    "*Partner Alpha",
    "Local user, home directory inbound/alpha"
   ],
   [
    "Partner Beta",
    "Local user with a password"
   ],
   [
    "NFS 3.0 mount",
    "Hierarchical namespace + NFS 3.0 + network"
   ],
   [
    "Bill increase",
    "The SFTP endpoint is billed per hour"
   ]
  ]
 },
 "keep": "SFTP = local users (key or password), billed per hour. NFS 3.0 Blob = hierarchical namespace + network."
}
);
