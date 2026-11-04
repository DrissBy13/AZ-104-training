/* Case studies (batch 5: C009 and C010, storage) */
AZ.cases.push(
{
 "id": "C009",
 "title": "Litware Media",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Litware Media produces TV videos. Its raw footage, published videos, and contracts are stored in Azure. Paris headquarters is connected to the VNet-Media virtual network by a site-to-site VPN. The storage bill and a security audit require an overhaul.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Storage accounts</b> (France Central)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Type</th><th>Redundancy</th><th>Configuration</th></tr><tr><td>stlitmedia</td><td>General-purpose v2</td><td>GRS</td><td>Default tier Hot; versioning disabled; blob soft delete 7 days, container soft delete disabled; public network access enabled from all networks; account key access allowed</td></tr><tr><td>stlitlake</td><td>General-purpose v2, hierarchical namespace</td><td>ZRS</td><td>analytics container, with /finance and /marketing folders</td></tr><tr><td>stlitold</td><td>General-purpose v1 (Storage)</td><td>LRS</td><td>Archives of old shows, used by an app through their URLs</td></tr></table></div><p>stlitmedia holds the <b>raw</b> (footage, 40 TB), <b>published</b> (published videos), and <b>contracts</b> (PDF contracts) containers.</p><p><b>Network</b>: VNet-Media contains Subnet-Enc (encoding VMs, assigned the UAI-Enc managed identity) and Subnet-PE (empty). Headquarters DNS servers are Windows domain controllers. Encoding VMs write to raw with key1, stored in a configuration file.</p>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>Footage in raw is read heavily for 15 days after its last modification, then rarely but must stay readable immediately for up to 1 year. It's then kept 5 more years at the lowest cost (a read-back within 24 hours is acceptable), then deleted.</li><li>Contracts must not be changed or deleted for 10 years, even by an administrator, and the rule must not be shortenable.</li><li>published content must be restorable to its state at any moment in the last 14 days.</li><li>Encoding VMs must write to raw with no secret at all. Eventually, no account key may be used on stlitmedia.</li><li>Paris headquarters must reach stlitmedia over a private IP address, and stlitmedia must no longer be reachable from the internet.</li><li>Only the Finance group may read and write in stlitlake's /finance; other analysts keep their access to the rest of the container.</li><li>stlitold must be able to use access tiers and lifecycle management without changing the URLs the app uses.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C009-1",
   "dom": 2,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current configuration, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "A blob in raw can be moved to the Archive tier.",
     "a": 0
    },
    {
     "l": "A blob in stlitlake can be moved to the Archive tier.",
     "a": 1
    },
    {
     "l": "If the published container is deleted, its blobs can be recovered for 7 days.",
     "a": 1
    },
    {
     "l": "The encoding VMs can be given a user delegation SAS valid for 30 days.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>raw in Archive: Yes.</b> The Archive tier is supported on LRS, GRS, and RA-GRS: stlitmedia is GRS.</li><li><b>stlitlake in Archive: No.</b> Archive isn't supported on a ZRS account (nor GZRS, RA-GZRS).</li><li><b>Deleted container: No.</b> Blob soft delete doesn't cover deleting a container: container soft delete is needed, and it's disabled here.</li><li><b>30-day SAS: No.</b> A user delegation SAS can't exceed 7 days, the delegation key's maximum lifetime.</li></ul>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitmedia"
    ],
    "title": "stlitmedia | Data protection",
    "menu": [
     "Overview",
     "*Data protection"
    ],
    "rows": [
     [
      "Blob soft delete",
      "7 days"
     ],
     [
      "*Container soft delete",
      "Disabled"
     ]
    ]
   },
   "keep": "Archive: LRS, GRS, RA-GRS only. Deleted container: container soft delete. Delegation SAS: 7 days max."
  },
  {
   "id": "C009-2",
   "dom": 2,
   "type": "hot",
   "stem": "<p>You're creating raw's lifecycle rule to meet requirement 1. What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "15 days after last modification:",
     "o": [
      "Move to Cool",
      "Move to Cold",
      "Move to Archive",
      "Do nothing"
     ],
     "a": 1
    },
    {
     "l": "365 days after last modification:",
     "o": [
      "Move to Cool",
      "Move to Cold",
      "Move to Archive",
      "Delete the blob"
     ],
     "a": 2
    },
    {
     "l": "Deletion, condition:",
     "o": [
      "daysAfterModificationGreaterThan 1825",
      "daysAfterModificationGreaterThan 2190",
      "daysAfterCreationGreaterThan 365",
      "daysAfterLastAccessTimeGreaterThan 1825"
     ],
     "a": 1
    }
   ],
   "expl": "<ul><li><b>15 days: Cold.</b> Footage must stay readable immediately: Archive is ruled out. Cold storage costs less than Cool; its 90-day minimum doesn't matter since blobs stay there about a year.</li><li><b>365 days: Archive.</b> A read-back within 24 hours is acceptable: it's the cheapest tier. Standard rehydration takes up to 15 hours.</li><li><b>Deletion:</b> 1 year plus 5 years of retention = 6 years = <b>2,190 days</b> after last modification. 1,825 days (5 years) would delete a year too early. Last access isn't tracked on the account, and creation doesn't match the requirement.</li></ul>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitmedia",
     "Lifecycle management"
    ],
    "title": "Rule raw-tiering",
    "menu": [
     "*Lifecycle management"
    ],
    "rows": [
     [
      "Cold",
      "> 15 days"
     ],
     [
      "Archive",
      "> 365 days"
     ],
     [
      "*Delete",
      "> 2190 days"
     ]
    ],
    "btn": "Add"
   },
   "keep": "A rule's days count from the reference date (modification), not from the previous step."
  },
  {
   "id": "C009-3",
   "dom": 2,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirements 2, 3, 6, and 7. What should you configure for each requirement?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Requirement",
    "Configuration"
   ],
   "srcs": [
    "A 10-year time-based retention, locked",
    "A legal hold",
    "Point-in-time restore",
    "Container soft delete",
    "Upgrade to general-purpose v2",
    "A new v2 account and an AzCopy copy",
    "POSIX ACLs on /finance",
    "Storage Blob Data Contributor on analytics"
   ],
   "tgts": [
    {
     "l": "Requirement 2 (contracts)",
     "a": 0
    },
    {
     "l": "Requirement 3 (published)",
     "a": 2
    },
    {
     "l": "Requirement 6 (stlitlake)",
     "a": 6
    },
    {
     "l": "Requirement 7 (stlitold)",
     "a": 4
    }
   ],
   "expl": "<ul><li><b>Requirement 2:</b> a locked time-based retention policy can no longer be shortened or removed. A legal hold has no duration and can be cleared.</li><li><b>Requirement 3:</b> point-in-time restore returns a set of block blobs to a past state. It requires versioning, change feed, and blob soft delete (with a retention longer than the restore period).</li><li><b>Requirement 6:</b> RBAC stops at the container. In a hierarchical-namespace account, POSIX ACLs grant rights at folder level.</li><li><b>Requirement 7:</b> upgrading to v2 happens in place, without changing endpoints or URLs. A new account would change the name, hence the URLs.</li></ul>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitmedia",
     "Containers",
     "contracts"
    ],
    "title": "contracts | Access policy",
    "menu": [
     "*Access policy"
    ],
    "rows": [
     [
      "*Time-based retention",
      "3,650 days · Locked"
     ]
    ]
   },
   "keep": "Locked = can't be shortened. Per-folder rights = POSIX ACLs. v1 → v2 in place, same URLs."
  },
  {
   "id": "C009-4",
   "dom": 2,
   "type": "order",
   "stem": "<p>You need to meet requirement 4 without interrupting encoding.</p><p>Which <b>quatre</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Assign UAI-Enc the Storage Blob Data Contributor role on the raw container",
    "Change the encoding app to authenticate with UAI-Enc instead of key1",
    "Check in the StorageWrite logs that no request uses the shared key anymore",
    "Disable “Allow storage account key access” on stlitmedia",
    "Regenerate stlitmedia's key1 and key2",
    "Replace key1 with a 1-year account SAS"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>The managed identity replaces the secret: first give it a <b>data</b> role on raw (the control-plane Contributor role isn't enough), then switch the app. Before disabling shared key, Microsoft recommends checking the logs (AuthenticationType field) that no client still uses it, or forgotten apps would break. Disabling it also blocks key-signed SAS: an account SAS doesn't meet the requirement. Regenerating keys doesn't stop new ones from being used.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitmedia"
    ],
    "title": "stlitmedia | Configuration",
    "menu": [
     "Overview",
     "*Configuration"
    ],
    "rows": [
     [
      "*Allow storage account key access",
      "Disabled"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Data role, app switch, log check, then disable shared key."
  },
  {
   "id": "C009-5",
   "dom": 2,
   "type": "cmd",
   "stem": "<p>You need to meet requirement 5. How should you complete the commands?</p>",
   "rows": [
    {
     "l": "--subnet",
     "o": [
      "GatewaySubnet",
      "Subnet-PE",
      "Subnet-Enc",
      "AzureFirewallSubnet"
     ],
     "a": 1
    },
    {
     "l": "--group-id",
     "o": [
      "blob",
      "file",
      "dfs",
      "web"
     ],
     "a": 0
    },
    {
     "l": "--public-network-access",
     "o": [
      "Enabled",
      "Disabled",
      "SecuredByPerimeter",
      "None"
     ],
     "a": 1
    }
   ],
   "tpl": "az network private-endpoint create --resource-group RG-Media --name pe-media --vnet-name VNet-Media --subnet {0} --private-connection-resource-id $saId --group-id {1} --connection-name pe-media-conn && az storage account update --resource-group RG-Media --name stlitmedia --public-network-access {2}",
   "expl": "<ul><li><b>Subnet-PE:</b> a private endpoint can't go in GatewaySubnet. Subnet-PE is planned for it (Subnet-Enc would technically work, but mixing roles complicates NSGs).</li><li><b>blob:</b> the videos are blobs, so the target sub-resource is blob (dfs would be for the hierarchical namespace, which stlitmedia doesn't have).</li><li><b>Disabled:</b> with public network access disabled, only private endpoints remain usable.</li></ul>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitmedia"
    ],
    "title": "stlitmedia | Networking",
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
      "pe-media (blob) · Approved"
     ]
    ]
   },
   "keep": "One private endpoint per sub-resource (blob, file, dfs…), then public access disabled."
  },
  {
   "id": "C009-6",
   "dom": 2,
   "type": "single",
   "stem": "<p>After pe-media is deployed, VNet-Media VMs resolve stlitmedia.blob.core.windows.net to the private address, but Paris computers still get the public address. What should you configure?</p>",
   "opts": [
    "A conditional forwarder to a DNS Private Resolver",
    "A public A record for stlitmedia to the private address",
    "An account IP rule for the Paris public address",
    "A service endpoint on the GatewaySubnet"
   ],
   "ans": 0,
   "expl": "<p>The private zone privatelink.blob.core.windows.net is only visible from linked virtual networks. Paris DNS servers must forward blob.core.windows.net (conditional forwarder) to a <b>DNS Private Resolver inbound endpoint</b> in VNet-Media, which resolves using the private zone. You don't edit public DNS, and an IP rule or service endpoint doesn't provide a private address.</p>",
   "portal": {
    "path": [
     "DNS Private Resolver",
     "dnspr-media"
    ],
    "title": "dnspr-media | Inbound endpoints",
    "menu": [
     "*Inbound endpoints"
    ],
    "rows": [
     [
      "*in-media",
      "10.50.2.4"
     ]
    ]
   },
   "keep": "Private resolution from on-premises: conditional forwarder to the DNS Private Resolver inbound endpoint."
  },
  {
   "id": "C009-7",
   "dom": 2,
   "type": "hotspot",
   "stem": "<p>You need to enable requirement 3's prerequisites on stlitmedia. Which menu item should you select? To answer, select the appropriate menu item.</p>",
   "ans": "Data protection",
   "win": {
    "title": "stlitmedia",
    "nav": [
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
       "Lifecycle management",
       "Object replication",
       "Blob inventory",
       "Static website"
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
     }
    ]
   },
   "expl": "<p>The <b>Data protection</b> page groups point-in-time restore, blob and container soft delete, versioning, and change feed. Selecting point-in-time restore automatically enables the other three prerequisites.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stlitmedia"
    ],
    "title": "stlitmedia | Data protection",
    "menu": [
     "*Data protection"
    ],
    "rows": [
     [
      "*Point-in-time restore",
      "14 days"
     ],
     [
      "Versioning",
      "Enabled"
     ],
     [
      "Change feed",
      "Enabled"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Point-in-time restore = versioning + change feed + soft delete."
  }
 ]
},
{
 "id": "C010",
 "title": "Proseware Engineering",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Proseware Engineering is an engineering firm with headquarters in Lyon and a branch in Nantes. Its plans are stored on the FS-LYON file server. The company wants to centralize its files in Azure Files while keeping fast access at each site.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Identity</b>: AD DS domain proseware.local, synced with Microsoft Entra ID by Microsoft Entra Connect. Computers are domain-joined.</p><p><b>Servers</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Server</th><th>Site</th><th>OS</th><th>Data</th></tr><tr><td>FS-LYON</td><td>Lyon</td><td>Windows Server 2019</td><td>D:\\Plans, 18 TB, NTFS ACLs per project folder</td></tr><tr><td>FS-NANTES</td><td>Nantes</td><td>Windows Server 2022</td><td>4 TB D: volume, empty</td></tr></table></div><p>Headquarters has a 200 Mbps internet link, already used during the day. Outbound TCP port 445 is allowed at both sites.</p><p><b>Azure</b> (France Central)</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Resource</th><th>Configuration</th></tr><tr><td>stproseng</td><td>General-purpose v2, LRS; large file shares: disabled; identity-based access: not configured</td></tr><tr><td>plans</td><td>stproseng share, Transaction optimized, 5 TiB quota</td></tr><tr><td>SSS1</td><td>Storage Sync Service, sync group SG-Plans whose cloud endpoint is plans; no registered server</td></tr></table></div>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>The 18 TB in D:\\Plans must be in Azure within a week, without saturating the headquarters link.</li><li>Domain users must access plans with their AD DS account, according to the existing NTFS ACLs. All authenticated users must get at least share-level read with no per-group assignment; the Ingenieurs group must be able to modify.</li><li>FS-NANTES must present all plans to Nantes users, with fast local access to recent files, and keep at least 1 TB free on D:.</li><li>The engineering Linux workstations must mount plans over SMB.</li><li>The CAD software must get a new low-latency cad share, used by Windows clients that open many parallel connections.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C010-1",
   "dom": 2,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current configuration, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "plans' quota can be raised to 20 TiB with no other change.",
     "a": 1
    },
    {
     "l": "A domain user can currently mount plans with their AD DS account.",
     "a": 1
    },
    {
     "l": "FS-LYON can be registered with SSS1 on its current OS.",
     "a": 0
    },
    {
     "l": "A file copied to plans from the portal will appear immediately on synced servers.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>20 TiB quota: No.</b> Without large file shares, a Standard share is limited to 5 TiB. First enable that option on stproseng (possible on LRS), then raise the quota.</li><li><b>AD DS account: No.</b> Identity-based access isn't configured: stproseng must be joined to AD DS.</li><li><b>Windows Server 2019: Yes.</b> The Azure File Sync agent supports Windows Server 2016 and later.</li><li><b>Copy from the portal: No.</b> Changes made directly in the Azure share are detected by a job that runs every 24 hours.</li></ul>",
   "portal": {
    "path": [
     "Storage accounts",
     "stproseng"
    ],
    "title": "stproseng | Configuration",
    "menu": [
     "Overview",
     "*Configuration"
    ],
    "rows": [
     [
      "*Large file shares",
      "Disabled"
     ],
     [
      "Identity-based access",
      "Not configured"
     ]
    ]
   },
   "keep": "Beyond 5 TiB on Standard: large file shares. Cloud-side changes: detected every 24 h."
  },
  {
   "id": "C010-2",
   "dom": 2,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirement 2. What should you configure for each goal?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Goal",
    "Configuration"
   ],
   "srcs": [
    "Join stproseng to AD DS (AzFilesHybrid)",
    "Enable Microsoft Entra Kerberos",
    "Default share-level permission: SMB Share Reader",
    "SMB Share Contributor assigned to the Ingenieurs group",
    "SMB Share Elevated Contributor assigned to everyone",
    "Mount plans with an authorized account and set root ACLs with icacls",
    "Deploy an account SAS to computers"
   ],
   "tgts": [
    {
     "l": "The storage account authenticates domain accounts",
     "a": 0
    },
    {
     "l": "Share-level read for all authenticated users",
     "a": 2
    },
    {
     "l": "Share-level modify for Ingenieurs",
     "a": 3
    },
    {
     "l": "Fine-grained rights at the share root",
     "a": 5
    }
   ],
   "expl": "<ul><li><b>Authentication:</b> domain-joined computers reach a domain controller: join the storage account to AD DS (AzFilesHybrid module). Microsoft Entra Kerberos is mainly for Entra-joined computers with no reachable controller.</li><li><b>Read for everyone:</b> the default share-level permission applies to all authenticated users, with no role assignment.</li><li><b>Ingenieurs:</b> SMB Share Contributor at share level; NTFS ACLs then restrict by folder. Elevated for everyone would let anyone change ACLs.</li><li><b>Root:</b> root ACLs are set by mounting the share (with the key or an elevated account) then using icacls or Explorer. ACLs of folders synced from FS-LYON are preserved.</li></ul>",
   "portal": {
    "path": [
     "Storage accounts",
     "stproseng",
     "File shares"
    ],
    "title": "plans | Access control (IAM)",
    "menu": [
     "Overview",
     "*Access control (IAM)"
    ],
    "rows": [
     [
      "*Ingenieurs",
      "Storage File Data SMB Share Contributor"
     ],
     [
      "Default permission",
      "SMB Share Reader"
     ]
    ]
   },
   "keep": "Two layers: share-level role (or default permission), then NTFS ACLs on files."
  },
  {
   "id": "C010-3",
   "dom": 2,
   "type": "hot",
   "stem": "<p>You need to meet requirements 1 and 3.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "Initial copy of the 18 TB:",
     "o": [
      "AzCopy over the 200 Mbps link",
      "Azure Data Box",
      "Robocopy to the mounted share",
      "Data Box Gateway"
     ],
     "a": 1
    },
    {
     "l": "For FS-NANTES:",
     "o": [
      "A server endpoint in SG-Plans, with cloud tiering",
      "A second sync group on plans",
      "DFS-R replication from FS-LYON",
      "A nightly scheduled azcopy sync"
     ],
     "a": 0
    },
    {
     "l": "FS-NANTES volume free space policy:",
     "o": [
      "10%",
      "20%",
      "25%",
      "50%"
     ],
     "a": 2
    }
   ],
   "expl": "<ul><li><b>Initial copy:</b> even at full speed, 200 Mbps moves about 2 TB per day: 18 TB would take over 8 days and saturate the link. Azure Data Box (up to 80 TB usable) meets the deadline. Data Box Gateway also goes over the network.</li><li><b>FS-NANTES:</b> a server joins the existing group as a new server endpoint; cloud tiering keeps recent files locally and leaves the rest in Azure. A share can be the cloud endpoint of only one group.</li><li><b>Free space:</b> 1 TB on a 4 TB volume = <b>25%</b>.</li></ul>",
   "portal": {
    "path": [
     "Storage Sync Services",
     "SSS1",
     "SG-Plans"
    ],
    "title": "SG-Plans | Server endpoints",
    "menu": [
     "*Server endpoints"
    ],
    "rows": [
     [
      "FS-LYON",
      "D:\\Plans"
     ],
     [
      "*FS-NANTES",
      "D:\\Plans · tiering 25% free space"
     ]
    ]
   },
   "keep": "Bandwidth × time too short → Data Box. New site → server endpoint in the same group."
  },
  {
   "id": "C010-4",
   "dom": 2,
   "type": "order",
   "stem": "<p>After the initial copy, you add FS-NANTES to the plans sync.</p><p>Which <b>quatre</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Install the Azure File Sync agent on FS-NANTES",
    "Register FS-NANTES with SSS1",
    "Create FS-NANTES's D:\\Plans server endpoint in SG-Plans, with cloud tiering",
    "Check the endpoint's sync health status",
    "Create a new Storage Sync Service for Nantes",
    "Create an additional cloud endpoint on plans"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>The agent is installed first, and the wizard that follows registers the server with Storage Sync Service <b>SSS1</b>: a server can be registered with only one service, and SG-Plans already lives there. Then create the server endpoint in the existing group and track sync health (namespace download). A group has only one cloud endpoint.</p>",
   "portal": {
    "path": [
     "Storage Sync Services",
     "SSS1"
    ],
    "title": "SSS1 | Registered servers",
    "menu": [
     "Overview",
     "Sync groups",
     "*Registered servers"
    ],
    "rows": [
     [
      "FS-LYON",
      "Online"
     ],
     [
      "*FS-NANTES",
      "Online"
     ]
    ]
   },
   "keep": "Agent, registration with the service, server endpoint, health check."
  },
  {
   "id": "C010-5",
   "dom": 2,
   "type": "cmd",
   "stem": "<p>You need to meet requirement 4. How should you complete the command?</p>",
   "rows": [
    {
     "l": "-t",
     "o": [
      "nfs",
      "cifs",
      "smb3fs",
      "azurefile"
     ],
     "a": 1
    },
    {
     "l": "vers=",
     "o": [
      "1.0",
      "2.1",
      "3.1.1",
      "4.1"
     ],
     "a": 2
    }
   ],
   "tpl": "sudo mount -t {0} //stproseng.file.core.windows.net/plans /mnt/plans -o vers={1},credentials=/etc/smbcredentials/stproseng.cred,dir_mode=0777,file_mode=0777,serverino",
   "expl": "<p>On Linux, an SMB Azure Files share is mounted with the <b>cifs</b> file system type (cifs-utils package). From on-premises, SMB 3.x is required, as it encrypts traffic: <b>3.1.1</b> is the recommended version. SMB 2.1 is only accepted from the same Azure region, unencrypted, and 4.1 is an NFS version.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stproseng",
     "File shares",
     "plans"
    ],
    "title": "plans | Connect",
    "menu": [
     "Overview",
     "*Connect"
    ],
    "rows": [
     [
      "OS",
      "Linux"
     ],
     [
      "*Command",
      "mount -t cifs … vers=3.1.1"
     ]
    ]
   },
   "keep": "Linux + SMB = mount -t cifs, SMB 3.x from outside Azure."
  },
  {
   "id": "C010-6",
   "dom": 2,
   "type": "single",
   "stem": "<p>You need to meet requirement 5. What should you create?</p>",
   "opts": [
    "A Premium FileStorage account, with SMB Multichannel",
    "A Transaction optimized share in stproseng",
    "A Hot share in stproseng, with large file shares",
    "A Premium block blob account, mounted over NFS 3.0"
   ],
   "ans": 0,
   "expl": "<p>Low latency requires <b>Premium</b> (SSD) shares, which need a FileStorage account: stproseng, Standard, isn't suitable. <b>SMB Multichannel</b>, available only on Premium shares, opens several parallel connections per client and increases throughput. A blob account mounted over NFS doesn't give SMB to Windows clients.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stprosecad"
    ],
    "title": "stprosecad | File shares",
    "menu": [
     "*File shares"
    ],
    "rows": [
     [
      "Account kind",
      "FileStorage (Premium)"
     ],
     [
      "*SMB Multichannel",
      "Enabled"
     ]
    ]
   },
   "keep": "Low latency = Premium (FileStorage). Parallel connections = SMB Multichannel."
  },
  {
   "id": "C010-7",
   "dom": 2,
   "type": "hotspot",
   "stem": "<p>You need to configure stproseng's identity-based access for requirement 2. Which menu item should you select? To answer, select the appropriate menu item.</p>",
   "ans": "File shares",
   "win": {
    "title": "stproseng",
    "nav": [
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
      "g": "Security + networking",
      "items": [
       "Networking",
       "Access keys",
       "Shared access signature",
       "Encryption"
      ]
     },
     {
      "g": "Settings",
      "items": [
       "Configuration",
       "Locks",
       "Properties"
      ]
     }
    ]
   },
   "expl": "<p>The account's <b>File shares</b> page shows “Identity-based access: Not configured”; that's where you choose the source (AD DS, Microsoft Entra Domain Services, or Microsoft Entra Kerberos) and the default share-level permission. The AD DS join is then done with the AzFilesHybrid module.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stproseng"
    ],
    "title": "stproseng | File shares",
    "menu": [
     "*File shares"
    ],
    "rows": [
     [
      "*Identity-based access",
      "Configure"
     ],
     [
      "Default permission",
      "SMB Share Reader"
     ]
    ]
   },
   "keep": "Identity-based access and default permission: the account's File shares page."
  }
 ]
}
);
