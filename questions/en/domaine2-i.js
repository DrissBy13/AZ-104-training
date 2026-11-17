/* Domain 2: storage (batch I: D2-421 to D2-430, long scenarios) */
AZ.questions.push(
{
 "id": "D2-421",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Following an audit, Contoso must harden the storage accounts in the Prod subscription:</p><ul><li>old clients connecting with TLS 1.0 or 1.1 must be refused;</li><li>unencrypted HTTP requests to the REST API must be rejected;</li><li>a malicious administrator must not be able to set up object replication to a storage account in another Entra ID tenant;</li><li>files uploaded to the uploads container of stportal by external customers must be scanned for malware as soon as they're uploaded;</li><li>new accounts created in the subscription must automatically comply with the minimum TLS version.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "TLS 1.0/1.1 and HTTP:",
   "o": [
    "Minimum TLS 1.2 + secure transfer required",
    "An NSG blocking port 80 to Storage",
    "Microsoft network routing on the account",
    "A private endpoint for each client"
   ],
   "a": 0
  },
  {
   "l": "Replication to another tenant:",
   "o": [
    "Disable cross-tenant replication",
    "A ReadOnly lock on the account",
    "Disable the change feed",
    "Disable blob versioning"
   ],
   "a": 0
  },
  {
   "l": "Scanning uploaded files:",
   "o": [
    "A lifecycle rule moving blobs to Archive",
    "An immutability policy on uploads",
    "Microsoft Antimalware enabled on the account",
    "Defender for Storage (on-upload scan)"
   ],
   "a": 3
  },
  {
   "l": "New accounts:",
   "o": [
    "A lock on the subscription",
    "An ARM template imposed on teams",
    "Azure Policy (Deny or Modify)",
    "An activity log alert"
   ],
   "a": 2
  }
 ],
 "expl": "<b>TLS and HTTPS.</b> The minimum TLS version setting rejects older connections; “Secure transfer required” rejects HTTP requests.<b>Cross-tenant replication.</b> The AllowCrossTenantReplication setting, disabled, blocks object replication policies whose other account is in another tenant.<b>Defender for Storage.</b> On-upload malware scanning scans each uploaded blob and can add an index tag with the result.<b>Azure Policy.</b> Built-in definitions enforce or remediate the minimum TLS version of new accounts.",
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
    "*TLS 1.0/1.1 and HTTP",
    "Minimum TLS 1.2 + secure transfer required"
   ],
   [
    "Replication to another tenant",
    "Disable cross-tenant replication"
   ],
   [
    "Scanning uploaded files",
    "Defender for Storage (on-upload scan)"
   ],
   [
    "New accounts",
    "Azure Policy (Deny or Modify)"
   ]
  ]
 },
 "keep": "TLS 1.2 + secure transfer. Other tenant = cross-tenant replication off. Malware = Defender for Storage. New accounts = Azure Policy."
},
{
 "id": "D2-422",
 "dom": 2,
 "type": "hot",
 "stem": "<p>A nightly script runs on the VM VM-Batch (system-assigned managed identity) and copies files to the archive container of the stbatch account with AzCopy. Several problems are reported:</p><ul><li>the script currently contains a clear-text SAS valid for two years; the security team wants to remove every secret;</li><li>only the *.parquet files of the source folder must be copied;</li><li>the 2 TB copy was interrupted at 70% by a VM restart; the team wants to avoid starting over;</li><li>during the day, the copy saturates the branch WAN link and slows users down.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Authentication:",
   "o": [
    "The account key in an encrypted file on the VM",
    "A one-year SAS stored in an environment variable",
    "azcopy login --identity + a data role",
    "azcopy login with an administrator's account"
   ],
   "a": 2
  },
  {
   "l": "*.parquet files only:",
   "o": [
    "--include-after \"*.parquet\"",
    "--list-of-files \"*.parquet\"",
    "--exclude-path \"*.parquet\"",
    "--include-pattern \"*.parquet\""
   ],
   "a": 3
  },
  {
   "l": "Resume after interruption:",
   "o": [
    "azcopy jobs clean, then rerun the copy",
    "azcopy copy --overwrite=false on the whole folder",
    "azcopy jobs resume <job ID>",
    "azcopy sync, which always resumes where it stopped"
   ],
   "a": 2
  },
  {
   "l": "Link saturation:",
   "o": [
    "--check-length=false",
    "--block-size-mb",
    "--cap-mbps",
    "--log-level=ERROR"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Managed identity.</b> azcopy login --identity uses the VM's identity; a data role (Storage Blob Data Contributor) is needed on the account or container. No secret is stored.<b>Filter.</b> --include-pattern accepts wildcards on file names.<b>Resume.</b> AzCopy keeps a job plan: azcopy jobs list then azcopy jobs resume resumes the job without recopying what succeeded (with a SAS, it must be passed again).<b>Throughput.</b> --cap-mbps caps the transfer rate in megabits per second.",
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
    "*Authentication",
    "azcopy login --identity + a data role"
   ],
   [
    "*.parquet files only",
    "--include-pattern \"*.parquet\""
   ],
   [
    "Resume after interruption",
    "azcopy jobs resume <job ID>"
   ],
   [
    "Link saturation",
    "--cap-mbps"
   ]
  ]
 },
 "keep": "No secret = --identity + data role. Filter = --include-pattern. Resume = jobs resume. Throughput = --cap-mbps."
},
{
 "id": "D2-423",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The stdocs account (GPv2) has blob versioning enabled and blob soft delete enabled (14 days). Container soft delete is enabled (7 days). Several incidents occur:</p><ul><li>Monday, a user overwrites contrat.docx with a wrong version;</li><li>Tuesday, a script deletes offre.pdf;</li><li>Wednesday, an administrator deletes the drafts container;</li><li>Thursday, a developer deletes a previous version of budget.xlsx.</li></ul><p>How should you recover each item?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "contrat.docx:",
   "o": [
    "Restore the container to Sunday's date",
    "Undelete the blob",
    "Restore Monday's automatic snapshot",
    "Promote the previous version to current"
   ],
   "a": 3
  },
  {
   "l": "offre.pdf:",
   "o": [
    "Not possible: the current blob no longer exists",
    "Copy a previous version onto the blob",
    "Undelete with Undelete Blob on its own",
    "Restore the blob from the secondary region"
   ],
   "a": 1
  },
  {
   "l": "drafts container:",
   "o": [
    "Not possible: soft delete covers blobs",
    "Restore the deleted container (same name)",
    "Restore each blob with Undelete",
    "Restore the container's previous version"
   ],
   "a": 1
  },
  {
   "l": "budget.xlsx version:",
   "o": [
    "Restore the account snapshot",
    "Undelete the version",
    "Promote the current version",
    "Not possible: versions aren't protected"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Overwrite.</b> With versioning, each write creates a previous version; you promote it to current (copy onto the base blob).<b>Deletion with versions.</b> Deleting a versioned blob turns the current version into a previous version: there's no current version anymore. Restore by copying a previous version onto the base blob. Undelete Blob doesn't apply to versions in that case.<b>Container.</b> Container soft delete restores the container and its contents, provided no container with the same name was recreated.<b>Deleted version.</b> Blob soft delete also protects deleted previous versions, which can be restored with Undelete.",
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
    "*contrat.docx",
    "Promote the previous version to current"
   ],
   [
    "offre.pdf",
    "Copy a previous version onto the blob"
   ],
   [
    "drafts container",
    "Restore the deleted container (same name)"
   ],
   [
    "budget.xlsx version",
    "Undelete the version"
   ]
  ]
 },
 "keep": "Overwritten or deleted with versions = copy a previous version. Container = container soft delete. Deleted version = Undelete."
},
{
 "id": "D2-424",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso hosts two Azure Files shares:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Share</th><th>Account</th><th>Provisioned size / quota</th><th>Finding</th></tr><tr><td>share-vdi</td><td>Premium FileStorage (provisioned v1 model)</td><td>1 TiB</td><td>AVD profiles are slow in the morning: the share's IOPS limit is reached</td></tr><tr><td>share-archive</td><td>Standard GPv2, LRS</td><td>5 TiB quota</td><td>The share must reach 60 TiB</td></tr></table></div><p>The AVD VMs are multi-core Windows VMs, and the team also wants to increase throughput per SMB client.</p><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "share-vdi IOPS limit:",
   "o": [
    "Increase the share quota only",
    "Move the account to ZRS",
    "Enable cloud tiering",
    "Increase the provisioned size"
   ],
   "a": 3
  },
  {
   "l": "share-vdi billing:",
   "o": [
    "By data actually stored",
    "By number of transactions",
    "By provisioned size",
    "By number of clients"
   ],
   "a": 2
  },
  {
   "l": "Throughput per SMB client:",
   "o": [
    "AES-128-CCM encryption",
    "SMB 1.0 on clients",
    "SMB Multichannel",
    "A second share per client"
   ],
   "a": 2
  },
  {
   "l": "share-archive at 60 TiB:",
   "o": [
    "Enable large file shares (100 TiB)",
    "Move the account to Premium FileStorage",
    "Not possible beyond 5 TiB on standard",
    "Create twelve shares of 5 TiB each"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Premium (provisioned v1).</b> Baseline IOPS and throughput depend on provisioned size: increase the size to get more IOPS. Billing is on provisioned size, whatever the usage. (The provisioned v2 model lets you set IOPS and throughput separately.)<b>SMB Multichannel.</b> Available on Premium shares, it opens several network connections per client and increases throughput for multi-core clients.<b>Large shares.</b> On a standard account, the large file shares option raises a share's limit from 5 TiB to 100 TiB; it can't be disabled afterwards.",
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
    "*share-vdi IOPS limit",
    "Increase the provisioned size"
   ],
   [
    "share-vdi billing",
    "By provisioned size"
   ],
   [
    "Throughput per SMB client",
    "SMB Multichannel"
   ],
   [
    "share-archive at 60 TiB",
    "Enable large file shares (100 TiB)"
   ]
  ]
 },
 "keep": "Premium v1: more IOPS = more size, billed on provisioned. Client throughput = Multichannel. > 5 TiB standard = large file shares."
},
{
 "id": "D2-425",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The payroll app, hosted on VM-Paie (system-assigned managed identity), must read blobs in the sthr account. The security team's requirements:</p><ul><li>the app must only be able to read the payroll container, not the account's other containers;</li><li>among payroll blobs, it must only read those whose country blob index tag equals FR;</li><li>no secret must be stored on the VM;</li><li>the team wants to check, without signing in to the VM, that the identity does get access to the blob payroll/fr/janvier.pdf.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Role and scope:",
   "o": [
    "Storage Blob Data Reader on the sthr account",
    "Storage Blob Data Reader on payroll",
    "Reader on the payroll container",
    "Storage Account Contributor on sthr"
   ],
   "a": 1
  },
  {
   "l": "country = FR restriction:",
   "o": [
    "A service SAS limited to tags",
    "A stored access policy on payroll",
    "A POSIX ACL on the fr/ folder",
    "A condition on the role assignment"
   ],
   "a": 3
  },
  {
   "l": "Getting the token on the VM:",
   "o": [
    "The VM's IMDS endpoint",
    "The managed identity's password",
    "A client certificate installed on the VM",
    "An account key stored in Key Vault"
   ],
   "a": 0
  },
  {
   "l": "Check without signing in:",
   "o": [
    "Azure Advisor recommendations",
    "Check access, in the IAM pane",
    "Entra ID sign-in logs",
    "The sthr account's activity log"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Scope.</b> Data roles can be assigned at the container level: the identity only reads payroll.<b>Condition.</b> Attribute-based access control (ABAC) adds a condition to the role assignment, for example on a blob index tag; it applies to Blob data roles.<b>IMDS.</b> The app gets an Entra ID token from the Instance Metadata Service, with no secret.<b>Check access.</b> In the Access control (IAM) pane, “Check access” shows an identity's effective assignments, including a managed identity's. (ABAC conditions are evaluated at request time.)",
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
    "*Role and scope",
    "Storage Blob Data Reader on payroll"
   ],
   [
    "country = FR restriction",
    "A condition on the role assignment"
   ],
   [
    "Getting the token on the VM",
    "The VM's IMDS endpoint"
   ],
   [
    "Check without signing in",
    "Check access, in the IAM pane"
   ]
  ]
 },
 "keep": "One container = container-scoped role. Tag = ABAC condition. Token = IMDS. Check = Check access."
},
{
 "id": "D2-426",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam wants to use on-premises AD DS authentication for the Azure Files share share-legal (stlegal account). Devices are joined to the fabrikam.local domain and see the domain controllers over a VPN.</p><ul><li>You must register the storage account in AD DS;</li><li>all authenticated domain users must be able to read the share, without individual role assignments; the Juristes group must be able to write;</li><li>the security team mandates AES-256 for Kerberos tickets;</li><li>after six months, users suddenly lose access: the storage account's computer object has a password expired by the domain policy.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Account registration:",
   "o": [
    "Join an account VM to the domain",
    "Enable Microsoft Entra Domain Services",
    "Join-AzStorageAccount",
    "Create an SRV record in AD DNS"
   ],
   "a": 2
  },
  {
   "l": "Read for everyone:",
   "o": [
    "NTFS ACL Everyone: Read, alone",
    "Reader role on the account for Domain Users",
    "Share-level anonymous access",
    "Default share-level permission"
   ],
   "a": 3
  },
  {
   "l": "Juristes group:",
   "o": [
    "SMB Share Reader + Write ACL",
    "Storage Account Contributor for the group",
    "SMB Share Contributor (synced group)",
    "SMB Share Contributor on the local-only group"
   ],
   "a": 2
  },
  {
   "l": "Expired password:",
   "o": [
    "Delete and recreate the share-legal share",
    "Disable Kerberos on the storage account",
    "Rotate the AD object's password",
    "Regenerate both account access keys"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Registration.</b> Join-AzStorageAccount creates in AD DS an object (computer or service account) that represents the storage account.<b>Default permission.</b> A share-level permission can apply to all authenticated identities, without individual assignments.<b>Group.</b> Share permissions rely on Entra ID: the group must be synced from AD DS. AES-256 is set on the AD object (Update-AzStorageAccountAuthForAES256).<b>Password.</b> If the domain policy expires the object's password, rotate it (Update-AzStorageAccountADObjectPassword) or exclude the object from the policy.",
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
    "*Account registration",
    "Join-AzStorageAccount"
   ],
   [
    "Read for everyone",
    "Default share-level permission"
   ],
   [
    "Juristes group",
    "SMB Share Contributor (synced group)"
   ],
   [
    "Expired password",
    "Rotate the AD object's password"
   ]
  ]
 },
 "keep": "AD DS = Join-AzStorageAccount. Everyone = default permission. Group = synced. Password = Update-AzStorageAccountADObjectPassword."
},
{
 "id": "D2-427",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso's operations team must monitor the stapi account (GPv2), used by a public API:</p><ul><li>developers complain of slowness; you must separate storage-side processing time from time spent on the network and at the client;</li><li>you must know how many requests fail because of throttling;</li><li>the security team wants to keep, in a Log Analytics workspace, the details of each blob read and delete, with the caller's identity;</li><li>an alert must warn if the account's used capacity exceeds 40 TB.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Slowness:",
   "o": [
    "UsedCapacity vs blob count",
    "Ingress vs Egress traffic",
    "Server vs end-to-end latency",
    "Availability vs Transactions"
   ],
   "a": 2
  },
  {
   "l": "Throttling:",
   "o": [
    "Transactions, split by ResponseType",
    "BlobCount, split by the BlobType dimension",
    "Availability alone, averaged over 1 h",
    "Egress, split by the GeoType dimension"
   ],
   "a": 0
  },
  {
   "l": "Read and delete details:",
   "o": [
    "Account diagnostic setting, metrics",
    "Blob service diagnostic setting",
    "Activity log to Log Analytics",
    "Storage Insights alone"
   ],
   "a": 1
  },
  {
   "l": "Capacity alert:",
   "o": [
    "Cost Management budget alert",
    "Resource Health alert",
    "Activity log alert",
    "Metric alert on UsedCapacity"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Latency.</b> SuccessServerLatency measures processing time by Azure Storage; SuccessE2ELatency adds the network and client read time. A large gap points to the network or client.<b>Throttling.</b> The Transactions metric, split by the ResponseType dimension (for example ServerBusyError, ClientThrottlingError), counts throttled requests.<b>Resource logs.</b> They're configured per service (blob, file, queue, table): StorageRead, StorageWrite, StorageDelete categories, with the caller's identity. The activity log only has management operations.<b>Capacity.</b> UsedCapacity is an account metric, usable in a metric alert (it's updated hourly).",
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
    "*Slowness",
    "Server vs end-to-end latency"
   ],
   [
    "Throttling",
    "Transactions, split by ResponseType"
   ],
   [
    "Read and delete details",
    "Blob service diagnostic setting"
   ],
   [
    "Capacity alert",
    "Metric alert on UsedCapacity"
   ]
  ]
 },
 "keep": "Server vs end to end = latencies. Throttling = ResponseType. Reads = blob service diagnostics. Capacity = UsedCapacity."
},
{
 "id": "D2-428",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso wants to protect the blobs of the stclaims account (GPv2, LRS) with Azure Backup. The requirements:</p><ul><li>restore blobs to any point in the last 30 days, directly in the account, with no copy of the data elsewhere;</li><li>also protect against deletion of the whole storage account or ransomware encrypting the account: a copy must be kept 12 months outside the account;</li><li>backups must be managed from a vault;</li><li>the team wants to prevent an administrator from deleting backups before their retention ends.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "30 days in the account:",
   "o": [
    "Object replication",
    "Vaulted backup",
    "Operational backup",
    "Manual snapshots"
   ],
   "a": 2
  },
  {
   "l": "Copy outside the account, 12 months:",
   "o": [
    "Moving the account to GRS",
    "365-day operational backup",
    "CanNotDelete lock",
    "Vaulted backup"
   ],
   "a": 3
  },
  {
   "l": "Vault type:",
   "o": [
    "A Site Recovery managed vault",
    "A Backup vault",
    "An Azure Key Vault",
    "A Recovery Services vault"
   ],
   "a": 1
  },
  {
   "l": "Prevent early deletion:",
   "o": [
    "Account soft delete",
    "Vault immutability (locked)",
    "Backup Reader role for everyone",
    "A ReadOnly lock on the account"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Operational backup.</b> A local, continuous solution: it relies on the account's point-in-time restore, versioning and soft delete; data stays in the account.<b>Vaulted backup.</b> It copies data to the vault on a schedule, with long retention: it protects against loss or corruption of the account.<b>Vault.</b> Blob backups are managed from a Backup vault, not a Recovery Services vault.<b>Immutability.</b> Once locked, vault immutability prevents deleting recovery points before they expire.",
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
    "*30 days in the account",
    "Operational backup"
   ],
   [
    "Copy outside the account, 12 months",
    "Vaulted backup"
   ],
   [
    "Vault type",
    "A Backup vault"
   ],
   [
    "Prevent early deletion",
    "Vault immutability (locked)"
   ]
  ]
 },
 "keep": "In the account = operational. Outside the account = vaulted. Blobs = Backup vault. No deletion = locked immutability."
},
{
 "id": "D2-429",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam is migrating the file server FS-01 (Windows Server, 3 TB, complex NTFS ACLs) to the Azure Files share share-data. The constraints:</p><ul><li>NTFS ACLs, owners and timestamps must be preserved;</li><li>migration must happen in several passes: an initial copy, then nightly differential copies, and a final pass on cutover day that also deletes in share-data the files deleted on FS-01;</li><li>the team then wants a local cache at the Lyon branch, on a new server, with frequently used files.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Copy with Robocopy:",
   "o": [
    "robocopy /MOV /COPY:DAT /E",
    "robocopy /MIR /COPY:DATSO",
    "robocopy /E /COPY:D /R:0 /W:0",
    "robocopy /XO /COPY:DT /E /Z"
   ],
   "a": 1
  },
  {
   "l": "AzCopy alternative:",
   "o": [
    "--overwrite=ifSourceNewer --recursive --put-md5",
    "--put-md5 --check-length=true --recursive=true",
    "--recursive --preserve-last-modified-time=true",
    "--preserve-smb-permissions --preserve-smb-info"
   ],
   "a": 3
  },
  {
   "l": "Final pass:",
   "o": [
    "A /MOV pass is needed",
    "/MIR also deletes at the destination",
    "A manual deletion is needed",
    "/MIR never deletes at the destination"
   ],
   "a": 1
  },
  {
   "l": "Cache in Lyon:",
   "o": [
    "A second share replicated to Lyon",
    "Azure File Sync, cloud tiering",
    "A nightly Robocopy copy to Lyon",
    "BranchCache on the Azure share"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Robocopy.</b> /MIR copies the tree and deletes at the destination what no longer exists at the source; /COPY:DATSO copies data, attributes, timestamps, security (ACLs) and owner; /DCOPY:DAT does the same for folders. Rerun, the command only copies differences.<b>AzCopy.</b> To Azure Files, --preserve-smb-permissions keeps ACLs and --preserve-smb-info keeps attributes and timestamps.<b>Cache.</b> Azure File Sync with cloud tiering keeps used files locally and recalls the others on demand.",
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
    "*Copy with Robocopy",
    "robocopy /MIR /COPY:DATSO"
   ],
   [
    "AzCopy alternative",
    "--preserve-smb-permissions --preserve-smb-info"
   ],
   [
    "Final pass",
    "/MIR also deletes at the destination"
   ],
   [
    "Cache in Lyon",
    "Azure File Sync, cloud tiering"
   ]
  ]
 },
 "keep": "Robocopy /MIR /COPY:DATSO. AzCopy --preserve-smb-*. Local cache = File Sync."
},
{
 "id": "D2-430",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The staudit account (GPv2) stores a bank's audit logs. The regulatory requirements:</p><ul><li>logs are written by continuous appends to append blobs in the audit-logs container; they must be write-protected for 5 years, but the app must still be able to append lines;</li><li>in the reports container, each version of a report must have its own retention period, set at write time;</li><li>one specific report, involved in an investigation, must be protected indefinitely, on top of its retention;</li><li>the 5-year retention on audit-logs was set to 50 years by mistake and locked.</li></ul><p>What should you configure, and what can you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "audit-logs:",
   "o": [
    "Retention + protected appends",
    "ReadOnly lock on the staudit account",
    "Time-based retention, on its own",
    "Legal hold on the container"
   ],
   "a": 0
  },
  {
   "l": "reports:",
   "o": [
    "An encryption scope per version",
    "Version-level immutability",
    "A lifecycle rule per version",
    "A 5-year container policy"
   ],
   "a": 1
  },
  {
   "l": "Report under investigation:",
   "o": [
    "Extend retention to 99 years",
    "A CanNotDelete lock on the blob",
    "Copy it to another account",
    "Legal hold on the version"
   ],
   "a": 3
  },
  {
   "l": "Locked 50-year retention:",
   "o": [
    "It can't be shortened, only extended",
    "Shorten it through Microsoft support",
    "Unlock it with the Owner role",
    "Delete and recreate the container"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Protected appends.</b> The “Allow protected append writes” option of a time-based policy lets blocks be appended to append blobs without being able to modify or delete existing data.<b>Version level.</b> Version-level immutability (versioning required) allows a different policy per version.<b>Legal hold.</b> It protects with no end date and adds to retention; it's lifted explicitly.<b>Lock.</b> A locked time-based policy can only be extended: neither shortened nor deleted, and the account can't be deleted while data remains protected.",
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
    "*audit-logs",
    "Retention + protected appends"
   ],
   [
    "reports",
    "Version-level immutability"
   ],
   [
    "Report under investigation",
    "Legal hold on the version"
   ],
   [
    "Locked 50-year retention",
    "It can't be shortened, only extended"
   ]
  ]
 },
 "keep": "Appends = protected append writes. Per version = version-level immutability. Indefinite = legal hold. Locked = extend only."
}
);
