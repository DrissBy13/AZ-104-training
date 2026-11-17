/* Domain 2: storage (batch G: D2-401 to D2-410, long scenarios) */
AZ.questions.push(
{
 "id": "D2-401",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso creates four storage accounts in France Central (paired region: France South). Each workload's requirements are as follows:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Content</th><th>Requirements</th></tr><tr><td>st-portal</td><td>Public site images (GPv2)</td><td>Stay available for reads and writes if a France Central datacenter fails; be able to read data from France South during a regional outage, without waiting for a failover</td></tr><tr><td>st-archive</td><td>Backups kept 10 years (GPv2)</td><td>Minimum cost, Archive tier for most blobs; copy in a second region</td></tr><tr><td>st-iot</td><td>Telemetry ingestion (Premium block blobs)</td><td>Low latency and survival of a zone loss</td></tr><tr><td>st-dev</td><td>Regenerable test data (GPv2)</td><td>Lowest possible cost</td></tr></table></div><p>Which redundancy should you choose for each account?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "st-portal:",
   "o": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS",
    "GZRS",
    "RA-GZRS"
   ],
   "a": 5
  },
  {
   "l": "st-archive:",
   "o": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS",
    "GZRS",
    "RA-GZRS"
   ],
   "a": 2
  },
  {
   "l": "st-iot:",
   "o": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS",
    "GZRS",
    "RA-GZRS"
   ],
   "a": 1
  },
  {
   "l": "st-dev:",
   "o": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS",
    "GZRS",
    "RA-GZRS"
   ],
   "a": 0
  }
 ],
 "expl": "<b>st-portal.</b> Losing a datacenter (a zone) requires cross-zone replication (ZRS or GZRS); reading in the secondary region without failover requires the RA option. Only RA-GZRS combines both.<b>st-archive.</b> The Archive tier isn't supported on ZRS, GZRS and RA-GZRS accounts: it stays LRS, GRS or RA-GRS. GRS gives the regional copy at the lowest cost (no secondary read is required).<b>st-iot.</b> Premium accounts (BlockBlobStorage) only offer LRS and ZRS; ZRS survives a zone loss.<b>st-dev.</b> LRS is the cheapest option.",
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
    "*st-portal",
    "RA-GZRS"
   ],
   [
    "st-archive",
    "GRS"
   ],
   [
    "st-iot",
    "ZRS"
   ],
   [
    "st-dev",
    "LRS"
   ]
  ]
 },
 "keep": "Zone + secondary read = RA-GZRS. Archive = no ZRS/GZRS. Premium = LRS or ZRS."
},
{
 "id": "D2-402",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The stfinance account (GPv2, GRS, default access tier: hot) contains the following blobs:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Blob</th><th>Tier</th><th>Situation</th></tr><tr><td>rapport-2019.pdf</td><td>Archive</td><td>An auditor needs it within the hour; size 2 GiB</td></tr><tr><td>scan-2020.tif</td><td>Archive</td><td>Needed by the day after tomorrow; it must stay in Archive for compliance</td></tr><tr><td>export-mars.csv</td><td>Cold</td><td>Moved to this tier 40 days ago; we want to delete it</td></tr><tr><td>log-avril.json</td><td>Cool</td><td>Moved to this tier 12 days ago; we want to move it to Archive</td></tr></table></div><p>What should you do, and what are the consequences?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "rapport-2019.pdf:",
   "o": [
    "Download it directly from Archive",
    "Enable secondary read access",
    "Rehydrate, Standard priority",
    "Rehydrate with High priority"
   ],
   "a": 3
  },
  {
   "l": "scan-2020.tif:",
   "o": [
    "Copy it to an online tier",
    "Change its tier to Hot",
    "Read it from the secondary region",
    "Create a blob snapshot"
   ],
   "a": 0
  },
  {
   "l": "Deleting export-mars.csv:",
   "o": [
    "Deletion blocked until day 90",
    "Prorated charge for 50 days",
    "Charge for 140 remaining days (Archive minimum)",
    "No charge: the 30-day minimum is exceeded"
   ],
   "a": 1
  },
  {
   "l": "log-avril.json to Archive:",
   "o": [
    "Only possible through a lifecycle rule",
    "Not possible before 30 days",
    "Early deletion charge (18 days)",
    "No charge: free change"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Rehydration.</b> An Archive blob can't be read. High priority can rehydrate objects under 10 GiB in under an hour; Standard priority can take up to 15 hours.<b>Copy.</b> Copying the archived blob to a destination blob in an online tier leaves the original in Archive; changing the blob's tier would take it out of Archive.<b>Early deletion.</b> Minimum durations: 30 days (cool), 90 days (cold), 180 days (archive). Deleting or moving before that charges the remaining days prorated: 90 − 40 = 50 days for export-mars, 30 − 12 = 18 days for log-avril. The operation isn't blocked.",
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
    "*rapport-2019.pdf",
    "Rehydrate with High priority"
   ],
   [
    "scan-2020.tif",
    "Copy it to an online tier"
   ],
   [
    "Deleting export-mars.csv",
    "Prorated charge for 50 days"
   ],
   [
    "log-avril.json to Archive",
    "Early deletion charge (18 days)"
   ]
  ]
 },
 "keep": "High = under 1 h (< 10 GiB). Keep the original = copy. Minimums: 30 / 90 / 180 days, prorated."
},
{
 "id": "D2-403",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The stlogs account (GPv2, LRS) receives logs daily in the logs container and documents in the docs container. You are writing a lifecycle management policy.</p><p>Requirements:</p><ul><li>logs: move to cool 30 days after last modification, to Archive after 90 days, delete after 365 days;</li><li>docs: move to cool documents that haven't been read for 60 days, and automatically bring them back to hot if they're read again;</li><li>previous versions of docs blobs (versioning is enabled) must be deleted 30 days after becoming previous versions;</li><li>the logs rule must only apply to blobs whose name starts with logs/app1/.</li></ul><p>The policy was saved two hours ago, and no blob has changed tier yet.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Condition for docs:",
   "o": [
    "daysAfterLastAccessTimeGreaterThan",
    "daysAfterLastTierChangeGreaterThan",
    "daysAfterModificationGreaterThan",
    "daysAfterCreationGreaterThan"
   ],
   "a": 0
  },
  {
   "l": "Prerequisite for docs:",
   "o": [
    "Enable blob soft delete",
    "Enable blob index on the container",
    "Enable last access time tracking",
    "Enable the account change feed"
   ],
   "a": 2
  },
  {
   "l": "logs filter:",
   "o": [
    "blobIndexMatch = logs/app1",
    "blobTypes = appendBlob",
    "prefixMatch = app1/",
    "prefixMatch = logs/app1/"
   ],
   "a": 3
  },
  {
   "l": "No blob has changed tier:",
   "o": [
    "The policy only applies to new blobs",
    "The policy can take up to 24 h",
    "The policy must be run manually",
    "The account must be restarted"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Last access.</b> The daysAfterLastAccessTimeGreaterThan condition requires last access time tracking on the account; the enableAutoTierToHotFromCool option moves the blob back to hot when it's read again.<b>Versions.</b> Actions on previous versions use daysAfterCreationGreaterThan on the version (the date it became previous).<b>Filter.</b> prefixMatch includes the container name: logs/app1/.<b>Delay.</b> A new or modified policy can take up to 24 hours to take effect; it also applies to existing blobs.",
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
    "*Condition for docs",
    "daysAfterLastAccessTimeGreaterThan"
   ],
   [
    "Prerequisite for docs",
    "Enable last access time tracking"
   ],
   [
    "logs filter",
    "prefixMatch = logs/app1/"
   ],
   [
    "No blob has changed tier",
    "The policy can take up to 24 h"
   ]
  ]
 },
 "keep": "Not read = last access (tracking enabled). Prefix = container/path. Up to 24 h, existing blobs included."
},
{
 "id": "D2-404",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam's Data team must grant temporary access to the stdata account (GPv2):</p><ul><li>Partner A: read-only access to the exports container for 3 days; Fabrikam wants this token signed with Microsoft Entra credentials rather than an account key;</li><li>Partner B: write access to the uploads container for 6 months; Fabrikam wants to be able to revoke this token alone at any time without changing the account keys;</li><li>Migration tool: read access on the account's Blob, File and Table services with a single token;</li><li>the security team is considering disabling shared key authorization on stdata.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Partner A:",
   "o": [
    "User delegation SAS",
    "Service SAS signed with the secondary key",
    "Account SAS limited to the Blob service",
    "Account access key, rotated after 3 days"
   ],
   "a": 0
  },
  {
   "l": "Partner B:",
   "o": [
    "6-month user delegation SAS",
    "Ad hoc SAS, rotate keys if needed",
    "Service SAS + stored access policy",
    "Account SAS on a single service"
   ],
   "a": 2
  },
  {
   "l": "Migration tool:",
   "o": [
    "Account SAS",
    "Storage Blob Data Reader role",
    "User delegation SAS",
    "Three service SAS"
   ],
   "a": 0
  },
  {
   "l": "If shared key is disabled:",
   "o": [
    "All SAS stop working",
    "Only A's and B's SAS remain valid",
    "No impact on existing SAS",
    "Only the delegation SAS (A) works"
   ],
   "a": 3
  }
 ],
 "expl": "<b>User delegation.</b> Signed with a delegation key obtained through Entra ID; it covers Blob (and Data Lake) and its maximum lifetime is 7 days, which fits 3 days.<b>Stored access policy.</b> A service SAS that references it can be revoked by deleting or changing the policy (up to 5 per container), without touching the keys.<b>Account SAS.</b> The only type that covers several services with one token.<b>Shared key disabled.</b> Account and service SAS, signed with an account key, are rejected; the user delegation SAS stays valid.",
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
    "*Partner A",
    "User delegation SAS"
   ],
   [
    "Partner B",
    "Service SAS + stored access policy"
   ],
   [
    "Migration tool",
    "Account SAS"
   ],
   [
    "If shared key is disabled",
    "Only the delegation SAS (A) works"
   ]
  ]
 },
 "keep": "Entra = user delegation (7 days max). Revocable = stored policy. Multi-service = account SAS."
},
{
 "id": "D2-405",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The stsecure account (GPv2) holds sensitive data. Its current network setting is “Enabled from all networks”. You must apply the following requirements:</p><ul><li>VMs in the snet-app subnet (VNet-App, France Central) must access the account over the Azure backbone, without a private IP dedicated to the account;</li><li>headquarters servers, connected by ExpressRoute private peering to VNet-Hub, must access the account through a private IP;</li><li>one specific Azure Synapse workspace (and only it among resources of that type) must be able to read the account with its managed identity;</li><li>all other public access must be denied.</li></ul><p>After creating the private endpoint, headquarters servers still resolve stsecure.blob.core.windows.net to the public address.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "snet-app:",
   "o": [
    "A NAT gateway attached to snet-app",
    "Public IP rule for VNet-App",
    "Microsoft.Storage service endpoint",
    "Private endpoint in snet-app"
   ],
   "a": 2
  },
  {
   "l": "Synapse workspace:",
   "o": [
    "Owner role on the account",
    "“Trusted services” exception",
    "Resource instance rule",
    "Synapse IP rule"
   ],
   "a": 2
  },
  {
   "l": "Public access:",
   "o": [
    "Enabled from all networks",
    "Disabled for all networks",
    "Enabled from selected networks",
    "Anonymous access disabled only"
   ],
   "a": 2
  },
  {
   "l": "DNS resolution at HQ:",
   "o": [
    "A CNAME in the public core.windows.net zone",
    "An A record in the public blob zone",
    "A user-defined route to the endpoint",
    "privatelink.blob zone + conditional forwarding"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Service endpoint.</b> Subnet traffic reaches the account over the Azure backbone, with the account's public address; the subnet must also be added in the account firewall.<b>Instance rule.</b> It allows one specific resource (by ID); the “trusted services” exception would allow every instance of those services in the tenant, which is broader.<b>Public access.</b> “Disabled” would also block the service endpoint and the instance rule; “Enabled from selected networks” applies the firewall. The private endpoint works in both cases.<b>DNS.</b> On-premises servers must resolve the name through the privatelink.blob.core.windows.net private zone linked to VNet-Hub, for example with conditional forwarding to an Azure DNS Private Resolver.",
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
    "*snet-app",
    "Microsoft.Storage service endpoint"
   ],
   [
    "Synapse workspace",
    "Resource instance rule"
   ],
   [
    "Public access",
    "Enabled from selected networks"
   ],
   [
    "DNS resolution at HQ",
    "privatelink.blob zone + conditional forwarding"
   ]
  ]
 },
 "keep": "No private IP = service endpoint. One specific resource = instance rule. On-prem DNS = privatelink zone + forwarding."
},
{
 "id": "D2-406",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso is migrating its file server to an Azure Files share (share-rh in the strh account). The context:</p><ul><li>users are hybrid identities (on-premises AD DS synced with Entra Connect);</li><li>their devices are Microsoft Entra joined only, with no line of sight to the domain controllers;</li><li>the RH-Gestion group must be able to modify files, the RH-Lecture group only read them; the IT-Admins group must be able to change NTFS ACLs;</li><li>existing NTFS permissions, migrated with Robocopy, must keep applying at the folder level;</li><li>a user reports the share is unreachable from home; their ISP blocks a port.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Account identity source:",
   "o": [
    "Storage account key",
    "Microsoft Entra Kerberos",
    "On-premises AD DS",
    "Microsoft Entra Domain Services"
   ],
   "a": 1
  },
  {
   "l": "RH-Gestion:",
   "o": [
    "Storage Blob Data Contributor on strh",
    "Storage File Data SMB Share Contributor",
    "Storage File Data SMB Share Reader",
    "Storage Account Contributor on strh"
   ],
   "a": 1
  },
  {
   "l": "IT-Admins:",
   "o": [
    "SMB Share Elevated Contributor",
    "Owner on the strh storage account",
    "Storage File Data SMB Share Contributor",
    "Storage File Data Privileged Contributor"
   ],
   "a": 0
  },
  {
   "l": "Blocked port:",
   "o": [
    "TCP 443",
    "TCP 445",
    "UDP 3389",
    "TCP 2049"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Entra Kerberos.</b> It lets hybrid identities access the share from Entra-joined devices, with no line of sight to a domain controller. AD DS authentication would require that line of sight.<b>Share roles.</b> SMB Share Reader = read; SMB Share Contributor = read, write, delete; SMB Share Elevated Contributor = additionally, change NTFS ACLs. Share (RBAC) and NTFS permissions combine: the most restrictive wins.<b>Port 445.</b> SMB uses TCP 445, often blocked by ISPs; use a VPN, or Azure File Sync with an on-premises server. TCP 2049 is NFS.",
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
    "*Account identity source",
    "Microsoft Entra Kerberos"
   ],
   [
    "RH-Gestion",
    "Storage File Data SMB Share Contributor"
   ],
   [
    "IT-Admins",
    "SMB Share Elevated Contributor"
   ],
   [
    "Blocked port",
    "TCP 445"
   ]
  ]
 },
 "keep": "Hybrid + Entra-joined = Entra Kerberos. Change ACLs = Elevated Contributor. SMB = TCP 445."
},
{
 "id": "D2-407",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam is deploying Azure File Sync for three branches. The Azure Files share share-projets (stfiles account) must be synced with servers FS-Paris, FS-Lyon and FS-Nantes.</p><ul><li>The three servers must share the same content.</li><li>FS-Nantes has a small disk: only recent files must stay locally, keeping at least 20% free space on the volume.</li><li>FS-Lyon is already registered with another Storage Sync Service, Sync-Test, used for a trial.</li><li>An administrator copied 2,000 files directly into share-projets with the portal; they don't show up on the servers yet the next morning.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Layout:",
   "o": [
    "A single sync group for all three",
    "Three shares linked by object replication",
    "Three groups, one per branch server",
    "One group per server, same cloud endpoint"
   ],
   "a": 0
  },
  {
   "l": "FS-Nantes:",
   "o": [
    "Data deduplication alone",
    "Read-only endpoint",
    "Cloud tiering, 20% free space",
    "80% NTFS quota on the volume"
   ],
   "a": 2
  },
  {
   "l": "FS-Lyon:",
   "o": [
    "Unregister it from Sync-Test, then register",
    "Reinstall Windows Server",
    "Add Sync-Test as a cloud endpoint",
    "Register it with the new service as well"
   ],
   "a": 0
  },
  {
   "l": "Files copied in the portal:",
   "o": [
    "They will never be synced to the servers",
    "They require a share snapshot to come down",
    "Detected within 24 h, or by manual detection",
    "The agent must be restarted on each server"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Sync group.</b> A group has a single cloud endpoint (the share) and one or more server endpoints; all sync the same content.<b>Cloud tiering.</b> The volume free space policy (here 20%) and, optionally, a date policy keep recent files locally; the others become pointers recalled on demand.<b>Registration.</b> A server can only be registered with one Storage Sync Service at a time.<b>Detection.</b> Changes made directly in the share are detected by a job that runs every 24 hours; Invoke-AzStorageSyncChangeDetection runs it immediately.",
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
    "*Layout",
    "A single sync group for all three"
   ],
   [
    "FS-Nantes",
    "Cloud tiering, 20% free space"
   ],
   [
    "FS-Lyon",
    "Unregister it from Sync-Test, then register"
   ],
   [
    "Files copied in the portal",
    "Detected within 24 h, or by manual detection"
   ]
  ]
 },
 "keep": "1 group = 1 cloud endpoint + N servers. Small disk = tiering. 1 server = 1 service. Cloud changes = 24 h."
},
{
 "id": "D2-408",
 "dom": 2,
 "type": "hot",
 "stem": "<p>The stlegal account (GPv2, LRS, no hierarchical namespace) stores contracts. After an incident where a script overwrote and deleted blobs, management requires:</p><ul><li>being able to restore the exact state of the contracts container as it was at any point in the last 14 days, in a single operation;</li><li>being able to recover a deleted blob for 21 days;</li><li>blobs in the signed container must be unmodifiable and undeletable for 7 years, with no one, not even an administrator, able to shorten that period;</li><li>a folder subject to legal proceedings must be protected with no end date, until the case is closed.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Container restore to a date:",
   "o": [
    "Azure Backup of file shares",
    "Point-in-time restore of block blobs",
    "Object replication to a second account",
    "Daily snapshots of each blob"
   ],
   "a": 1
  },
  {
   "l": "Restore prerequisites:",
   "o": [
    "Versioning + change feed + soft delete",
    "Blob soft delete, on its own",
    "Moving the account to GRS with secondary read",
    "Versioning and blob index"
   ],
   "a": 0
  },
  {
   "l": "Soft delete retention:",
   "o": [
    "14 days",
    "21 days",
    "7 days",
    "13 days"
   ],
   "a": 1
  },
  {
   "l": "signed container:",
   "o": [
    "CanNotDelete lock on the account",
    "Time-based retention, unlocked",
    "Legal hold",
    "Time-based retention, locked"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Point-in-time restore.</b> It restores block blobs to their state at a given date. It requires versioning, the change feed and blob soft delete; its period must be shorter than the soft delete retention.<b>21 days.</b> The soft delete retention must cover 21 days, which is also longer than the 14-day restore.<b>Immutability.</b> A locked time-based policy can no longer be shortened or deleted (only extended). A legal hold, with no end date, fits the legal case. A resource lock doesn't protect blob data.",
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
    "*Container restore to a date",
    "Point-in-time restore of block blobs"
   ],
   [
    "Restore prerequisites",
    "Versioning + change feed + soft delete"
   ],
   [
    "Soft delete retention",
    "21 days"
   ],
   [
    "signed container",
    "Time-based retention, locked"
   ]
  ]
 },
 "keep": "Point-in-time = versioning + change feed + soft delete (longer). Can't shorten = locked policy. No end = legal hold."
},
{
 "id": "D2-409",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Contoso has two accounts: stsrc (GPv2, France Central, LRS) and stdst (GPv2, Canada Central, LRS). The needs:</p><ul><li>blobs in the media container of stsrc must be copied automatically and asynchronously to the media container of stdst, only blobs whose name starts with video/;</li><li>the stweb account (GPv2, RA-GRS, France Central) must be able to be failed over to the secondary region by Contoso during a regional outage;</li><li>before failing stweb over, the team wants to know which writes could be lost.</li></ul><p>What should you configure, and what will happen?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Automatic copy prerequisites:",
   "o": [
    "Soft delete enabled on stdst",
    "Versioning (both) + source change feed",
    "Move stsrc to GRS and stdst to read-only",
    "Change feed enabled on both sides"
   ],
   "a": 1
  },
  {
   "l": "video/ filter:",
   "o": [
    "Blob index tags on stsrc",
    "Lifecycle rule applied on stdst",
    "The replication rule's prefix filter",
    "An encryption scope dedicated to video/"
   ],
   "a": 2
  },
  {
   "l": "Writes at risk:",
   "o": [
    "Those after the “Last sync time”",
    "None: geo-replication is synchronous",
    "All from the last 15 minutes",
    "Only those on Archive tier blobs"
   ],
   "a": 0
  },
  {
   "l": "After the unplanned failover:",
   "o": [
    "It fails back by itself after the outage",
    "It stays RA-GRS, roles swapped",
    "It becomes ZRS in the secondary region",
    "It becomes LRS in the new region"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Object replication.</b> It asynchronously copies block blobs between accounts; it requires versioning on both source and destination and the change feed on the source. Rules can filter by prefix.<b>Last sync time.</b> Geo-replication is asynchronous: writes later than the Last Sync Time may not be in the secondary region yet.<b>After failover.</b> The secondary region becomes the primary and the account is set to LRS; geo-redundancy must be reconfigured, then failback is possible.",
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
    "*Automatic copy prerequisites",
    "Versioning (both) + source change feed"
   ],
   [
    "video/ filter",
    "The replication rule's prefix filter"
   ],
   [
    "Writes at risk",
    "Those after the “Last sync time”"
   ],
   [
    "After the unplanned failover",
    "It becomes LRS in the new region"
   ]
  ]
 },
 "keep": "Object replication = versioning on both + source change feed. Loss = after Last Sync Time. Failover = LRS."
},
{
 "id": "D2-410",
 "dom": 2,
 "type": "hot",
 "stem": "<p>Fabrikam must move data into Azure Storage. The table shows the needs:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Transfer</th><th>Volume</th><th>Context</th></tr><tr><td>T1</td><td>40 TB</td><td>Datacenter archives; 50 Mbps Internet link; one month deadline</td></tr><tr><td>T2</td><td>200 GB</td><td>A local folder that changes often; only changes must be copied nightly to a container, and files deleted locally must also be deleted in the container</td></tr><tr><td>T3</td><td>1 TB</td><td>Copying a container from one account to another account in another region, without going through a local machine</td></tr><tr><td>T4</td><td>A few files</td><td>A non-technical user must browse containers and download files with a GUI on macOS</td></tr></table></div><p>Which tool or command should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "T1:",
   "o": [
    "AzCopy from the datacenter",
    "Azure Data Box",
    "Azure Storage Explorer",
    "Azure File Sync"
   ],
   "a": 1
  },
  {
   "l": "T2:",
   "o": [
    "azcopy copy --recursive --include-after=yesterday",
    "azcopy remove --recursive then azcopy copy",
    "azcopy sync --delete-destination=true",
    "azcopy copy --recursive --overwrite=ifSourceNewer"
   ],
   "a": 2
  },
  {
   "l": "T3:",
   "o": [
    "RA-GRS geo-replication",
    "Azure Import/Export",
    "AzCopy service-to-service copy",
    "Download then reupload with AzCopy"
   ],
   "a": 2
  },
  {
   "l": "T4:",
   "o": [
    "Azure Data Box Disk",
    "Azure Storage Explorer",
    "AzCopy",
    "Cloud Shell avec az storage"
   ],
   "a": 1
  }
 ],
 "expl": "<b>T1.</b> At 50 Mbps, 40 TB would take over two months: offline transfer with Data Box is required.<b>T2.</b> azcopy sync only copies what changed; --delete-destination=true removes from the destination what no longer exists at the source.<b>T3.</b> AzCopy copies between accounts server to server: data doesn't go through the machine running the command.<b>T4.</b> Storage Explorer is the cross-platform GUI app (Windows, macOS, Linux) to browse and transfer data.",
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
    "*T1",
    "Azure Data Box"
   ],
   [
    "T2",
    "azcopy sync --delete-destination=true"
   ],
   [
    "T3",
    "AzCopy service-to-service copy"
   ],
   [
    "T4",
    "Azure Storage Explorer"
   ]
  ]
 },
 "keep": "Big volume, slow link = Data Box. Mirror = sync --delete-destination. Account to account = server to server. GUI = Storage Explorer."
}
);
