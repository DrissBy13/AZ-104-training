/* Domain 2: storage (batch E: D2-201 to D2-220, exam-style exhibit questions) */
AZ.questions.push(
{
 "id": "D2-201",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Accounts exhibit (click the <b>Accounts</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Accounts",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Kind</th><th>Performance</th><th>Redundancy</th><th>Hierarchical namespace</th><th>Region</th></tr><tr><td>st1</td><td>General-purpose v2</td><td>Standard</td><td>GRS</td><td>No</td><td>France Central</td></tr><tr><td>st2</td><td>General-purpose v2</td><td>Standard</td><td>ZRS</td><td>Yes</td><td>France Central</td></tr><tr><td>st3</td><td>Block blobs</td><td>Premium</td><td>LRS</td><td>No</td><td>France Central</td></tr><tr><td>st4</td><td>File shares</td><td>Premium</td><td>ZRS</td><td>No</td><td>France Central</td></tr><tr><td>st5</td><td>General-purpose v1</td><td>Standard</td><td>LRS</td><td>No</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "You can move blobs in st1 to the Archive tier.",
   "a": 0
  },
  {
   "l": "You can move blobs in st2 to the Archive tier.",
   "a": 1
  },
  {
   "l": "A lifecycle rule can move st3's blobs to the Cool tier.",
   "a": 1
  },
  {
   "l": "You can create an Azure Files share in st3.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>st1 to Archive: Yes.</b> General-purpose v2, Standard, GRS: the Hot, Cool, Cold, and Archive tiers are all available.</li><li><b>st2 to Archive: No.</b> The Archive tier isn't supported with <b>ZRS</b> redundancy (nor GZRS, RA-GZRS).</li><li><b>st3 to Cool: No.</b> A Premium account has no access tiers: a lifecycle rule can only delete there.</li><li><b>Share in st3: No.</b> A Premium “Block blobs” account only holds blobs; Premium shares go in a “File shares” account (like st4).</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st2"
  ],
  "title": "st2 | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Redundancy"
  ],
  "rows": [
   [
    "*Redundancy",
    "ZRS · Archive tier not available"
   ]
  ]
 },
 "keep": "Archive: not with ZRS/GZRS, not on Premium. Premium = no tiers."
},
{
 "id": "D2-202",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Accounts exhibit (click the <b>Accounts</b> tab).</p><p>You need to host the workloads below. Which account should you use for each?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Accounts",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Kind</th><th>Performance</th><th>Redundancy</th><th>Hierarchical namespace</th><th>Region</th></tr><tr><td>st1</td><td>General-purpose v2</td><td>Standard</td><td>GRS</td><td>No</td><td>France Central</td></tr><tr><td>st2</td><td>General-purpose v2</td><td>Standard</td><td>ZRS</td><td>Yes</td><td>France Central</td></tr><tr><td>st3</td><td>Block blobs</td><td>Premium</td><td>LRS</td><td>No</td><td>France Central</td></tr><tr><td>st4</td><td>File shares</td><td>Premium</td><td>ZRS</td><td>No</td><td>France Central</td></tr><tr><td>st5</td><td>General-purpose v1</td><td>Standard</td><td>LRS</td><td>No</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Partners dropping files over SFTP:",
   "o": [
    "st1",
    "st2",
    "st3",
    "st4"
   ],
   "a": 1
  },
  {
   "l": "NFS 4.1 share for demanding Linux servers:",
   "o": [
    "st1",
    "st2",
    "st3",
    "st4"
   ],
   "a": 3
  },
  {
   "l": "Archives kept 10 years at the lowest cost:",
   "o": [
    "st1",
    "st2",
    "st3",
    "st4"
   ],
   "a": 0
  },
  {
   "l": "Very low-latency blobs for an analytics app:",
   "o": [
    "st1",
    "st2",
    "st3",
    "st4"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>SFTP → st2:</b> SFTP for blob storage requires the <b>hierarchical namespace</b>, only enabled on st2.</li><li><b>NFS 4.1 → st4:</b> Azure Files NFS shares require a Premium <b>File shares</b> account.</li><li><b>Archives → st1:</b> the only account where the Archive tier is available (st2 is ZRS, st3 is Premium).</li><li><b>Low latency → st3:</b> Premium block blobs, on SSD.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st2"
  ],
  "title": "st2 | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Redundancy"
  ],
  "rows": [
   [
    "*SFTP",
    "Enabled (hierarchical namespace required)"
   ]
  ]
 },
 "keep": "SFTP and blob NFS 3.0 = hierarchical namespace. Azure Files NFS = Premium file shares."
},
{
 "id": "D2-203",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Accounts exhibit (click the <b>Accounts</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Accounts",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Kind</th><th>Performance</th><th>Redundancy</th><th>Hierarchical namespace</th><th>Region</th></tr><tr><td>st1</td><td>General-purpose v2</td><td>Standard</td><td>GRS</td><td>No</td><td>France Central</td></tr><tr><td>st2</td><td>General-purpose v2</td><td>Standard</td><td>ZRS</td><td>Yes</td><td>France Central</td></tr><tr><td>st3</td><td>Block blobs</td><td>Premium</td><td>LRS</td><td>No</td><td>France Central</td></tr><tr><td>st4</td><td>File shares</td><td>Premium</td><td>ZRS</td><td>No</td><td>France Central</td></tr><tr><td>st5</td><td>General-purpose v1</td><td>Standard</td><td>LRS</td><td>No</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "You can configure object replication from st1 to st2.",
   "a": 1
  },
  {
   "l": "You can create a lifecycle management rule on st5 without changing it.",
   "a": 1
  },
  {
   "l": "You can disable st2's hierarchical namespace.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>st1 → st2: No.</b> Object replication isn't supported when the hierarchical namespace is enabled, on the source or the destination.</li><li><b>Lifecycle on st5: No.</b> Lifecycle management requires a general-purpose v2 account (or Premium block blobs, or Blob Storage). st5 must first be upgraded to v2.</li><li><b>Disable the hierarchical namespace: No.</b> Enabling it (upgrading to Data Lake Storage) can't be undone.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st5"
  ],
  "title": "st5 | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Redundancy"
  ],
  "rows": [
   [
    "*Account kind",
    "StorageV1 · Upgrade to general-purpose v2"
   ]
  ]
 },
 "keep": "No object replication with hierarchical namespace. Lifecycle = v2."
},
{
 "id": "D2-204",
 "dom": 2,
 "type": "single",
 "stem": "<p>You have the environment shown in the Accounts exhibit (click the <b>Accounts</b> tab).</p><p>st2's data must move automatically to the Archive tier after 180 days. The solution must minimize administrative effort.</p><p>What should you do first?</p>",
 "docs": [
  {
   "t": "Accounts",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Kind</th><th>Performance</th><th>Redundancy</th><th>Hierarchical namespace</th><th>Region</th></tr><tr><td>st1</td><td>General-purpose v2</td><td>Standard</td><td>GRS</td><td>No</td><td>France Central</td></tr><tr><td>st2</td><td>General-purpose v2</td><td>Standard</td><td>ZRS</td><td>Yes</td><td>France Central</td></tr><tr><td>st3</td><td>Block blobs</td><td>Premium</td><td>LRS</td><td>No</td><td>France Central</td></tr><tr><td>st4</td><td>File shares</td><td>Premium</td><td>ZRS</td><td>No</td><td>France Central</td></tr><tr><td>st5</td><td>General-purpose v1</td><td>Standard</td><td>LRS</td><td>No</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "opts": [
  "Convert st2 to LRS (or GRS), then create the lifecycle rule",
  "Disable st2's hierarchical namespace, then create the rule",
  "Create the lifecycle rule on st2: it will convert the redundancy",
  "Upgrade st2 to Premium block blobs, then create the rule"
 ],
 "ans": 0,
 "expl": "<p>The blocker is <b>ZRS</b> redundancy, which is incompatible with Archive. Change st2's redundancy (to LRS, GRS, or RA-GRS), then a <code>tierToArchive</code> lifecycle rule after 180 days does the rest.</p><ul><li>The hierarchical namespace doesn't prevent Archive, and it can't be disabled.</li><li>A lifecycle rule never changes redundancy.</li><li>Premium has no tiers at all.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st2"
  ],
  "title": "st2 | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Redundancy"
  ],
  "rows": [
   [
    "*Redundancy",
    "ZRS → LRS (conversion requested)"
   ]
  ]
 },
 "keep": "Archive blocked on ZRS: change redundancy first."
},
{
 "id": "D2-205",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Access exhibit (click the <b>Access</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Access",
   "h": "<p>Resource group RG1 contains the <b>st1</b> account, with containers <b>c1</b> and <b>c2</b>. “Allow storage account key access” is <b>enabled</b> on st1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Storage Blob Data Reader</td><td>st1</td></tr><tr><td>User2</td><td>Storage Blob Data Contributor</td><td>Container c1</td></tr><tr><td>User3</td><td>Contributor</td><td>st1</td></tr><tr><td>User4</td><td>Reader</td><td>RG1</td></tr><tr><td>User5</td><td>Storage Blob Data Owner</td><td>RG1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 can read the blobs in c2.",
   "a": 0
  },
  {
   "l": "User2 can write blobs to c2.",
   "a": 1
  },
  {
   "l": "User3 can read the blobs in c1 from the portal.",
   "a": 0
  },
  {
   "l": "User4 can read the blobs in c1 from the portal.",
   "a": 1
  },
  {
   "l": "User5 can delete blobs in c2.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>User1: Yes.</b> A data role on the account is inherited by all its containers.</li><li><b>User2: No.</b> Their role is limited to container c1.</li><li><b>User3: Yes.</b> Contributor isn't a data role, but it can <b>list the account keys</b>. Since key access is enabled, the portal uses the key to show the data.</li><li><b>User4: No.</b> Reader grants neither a data role nor key access.</li><li><b>User5: Yes.</b> Storage Blob Data Owner on RG1 is inherited by st1 and its containers.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "Containers",
   "c2"
  ],
  "title": "c2 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "User1",
    "Storage Blob Data Reader (inherited from st1)"
   ],
   [
    "*User5",
    "Storage Blob Data Owner (inherited from RG1)"
   ]
  ]
 },
 "keep": "Data roles inherit downward. Contributor = key access, so data access if Shared Key is allowed."
},
{
 "id": "D2-206",
 "dom": 2,
 "type": "single",
 "stem": "<p>You have the environment shown in the Access exhibit (click the <b>Access</b> tab).</p><p>You disable “Allow storage account key access” on st1. User3 must keep reading and writing blobs in c1 and c2. You must follow the principle of least privilege.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Access",
   "h": "<p>Resource group RG1 contains the <b>st1</b> account, with containers <b>c1</b> and <b>c2</b>. “Allow storage account key access” is <b>enabled</b> on st1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Storage Blob Data Reader</td><td>st1</td></tr><tr><td>User2</td><td>Storage Blob Data Contributor</td><td>Container c1</td></tr><tr><td>User3</td><td>Contributor</td><td>st1</td></tr><tr><td>User4</td><td>Reader</td><td>RG1</td></tr><tr><td>User5</td><td>Storage Blob Data Owner</td><td>RG1</td></tr></table></div>"
  }
 ],
 "opts": [
  "Assign User3 Storage Blob Data Contributor on st1",
  "Assign User3 Storage Blob Data Owner on RG1",
  "Nothing: Contributor on st1 is still enough",
  "Assign User3 Owner on the st1 account"
 ],
 "ans": 0,
 "expl": "<p>Without key access, only Microsoft Entra authorization grants data access. <b>Storage Blob Data Contributor</b> on st1 covers reading and writing in c1 and c2, nothing more.</p><ul><li>Storage Blob Data Owner adds ACL management, and the RG1 scope exceeds the need.</li><li>Contributor or Owner are management roles: without the key, they can't read data.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "Containers",
   "c2"
  ],
  "title": "c2 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "User1",
    "Storage Blob Data Reader (inherited from st1)"
   ],
   [
    "*User5",
    "Storage Blob Data Owner (inherited from RG1)"
   ]
  ]
 },
 "keep": "Shared Key disabled: only data roles grant access to blobs."
},
{
 "id": "D2-207",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the SAS exhibit (click the <b>SAS</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "SAS",
   "h": "<p>Account <b>st1</b>, containers c1 and c2. Container c1 has a stored access policy <b>pol1</b> (read, expires December 31).</p><div class=\"tw\"><table class=\"tbl\"><tr><th>SAS</th><th>Type</th><th>Signed with</th><th>Scope</th><th>Permissions</th><th>Expiry</th></tr><tr><td>SAS1</td><td>Service SAS</td><td>key1, tied to pol1</td><td>c1</td><td>pol1's</td><td>pol1's</td></tr><tr><td>SAS2</td><td>Service SAS</td><td>key1</td><td>c2</td><td>Read, write</td><td>In 1 year</td></tr><tr><td>SAS3</td><td>User delegation SAS</td><td>User2's delegation key</td><td>c1</td><td>Read</td><td>In 3 days</td></tr><tr><td>SAS4</td><td>Account SAS</td><td>key2</td><td>Blob service</td><td>Read, list</td><td>In 6 months</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "If you regenerate key1, SAS2 stops working.",
   "a": 0
  },
  {
   "l": "If you regenerate key1, SAS3 stops working.",
   "a": 1
  },
  {
   "l": "If you delete pol1, SAS1 stops working and the other SASs keep working.",
   "a": 0
  },
  {
   "l": "SAS4 lets you list the blobs in c2.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>key1 and SAS2: Yes.</b> A service or account SAS is signed with an account key: regenerating it invalidates every SAS signed with it (SAS1 and SAS2).</li><li><b>key1 and SAS3: No.</b> A user delegation SAS is signed with a delegation key obtained with a Microsoft Entra account, not key1. You revoke it by revoking the user delegation keys.</li><li><b>pol1: Yes.</b> Deleting or changing the stored policy only revokes the SASs tied to it (SAS1).</li><li><b>SAS4: Yes.</b> An account SAS on the blob service with Read and List: it covers every container, including c2.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1"
  ],
  "title": "st1 | Access keys",
  "menu": [
   "Overview",
   "*Access keys",
   "Shared access signature"
  ],
  "rows": [
   [
    "*key1",
    "Rotate → SAS1 and SAS2 invalidated"
   ],
   [
    "key2",
    "SAS4"
   ]
  ]
 },
 "keep": "Rotating a key = all its SASs revoked. Stored policy = targeted revocation. Delegation = independent of keys."
},
{
 "id": "D2-208",
 "dom": 2,
 "type": "single",
 "stem": "<p>You have the environment shown in the SAS exhibit (click the <b>SAS</b> tab).</p><p>SAS2 has leaked. You must revoke it while affecting the other SASs as little as possible.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "SAS",
   "h": "<p>Account <b>st1</b>, containers c1 and c2. Container c1 has a stored access policy <b>pol1</b> (read, expires December 31).</p><div class=\"tw\"><table class=\"tbl\"><tr><th>SAS</th><th>Type</th><th>Signed with</th><th>Scope</th><th>Permissions</th><th>Expiry</th></tr><tr><td>SAS1</td><td>Service SAS</td><td>key1, tied to pol1</td><td>c1</td><td>pol1's</td><td>pol1's</td></tr><tr><td>SAS2</td><td>Service SAS</td><td>key1</td><td>c2</td><td>Read, write</td><td>In 1 year</td></tr><tr><td>SAS3</td><td>User delegation SAS</td><td>User2's delegation key</td><td>c1</td><td>Read</td><td>In 3 days</td></tr><tr><td>SAS4</td><td>Account SAS</td><td>key2</td><td>Blob service</td><td>Read, list</td><td>In 6 months</td></tr></table></div>"
  }
 ],
 "opts": [
  "Regenerate key1, then reissue SAS1 with the new key",
  "Delete the stored access policy pol1 from container c1",
  "Revoke the st1 account's user delegation keys",
  "Regenerate key2, then reissue SAS4 with the new key"
 ],
 "ans": 0,
 "expl": "<p>SAS2 is an ad hoc SAS signed with key1, without a stored policy: the only way to revoke it before expiry is to <b>regenerate key1</b>. That also invalidates SAS1, which must be reissued. SAS3 and SAS4 aren't affected.</p><ul><li>pol1 only covers SAS1.</li><li>Delegation keys only cover SAS3.</li><li>key2 only covers SAS4.</li></ul><p>To be able to revoke a SAS selectively in the future, tie it to a stored access policy.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1"
  ],
  "title": "st1 | Access keys",
  "menu": [
   "Overview",
   "*Access keys",
   "Shared access signature"
  ],
  "rows": [
   [
    "*key1",
    "Rotate → SAS1 and SAS2 invalidated"
   ],
   [
    "key2",
    "SAS4"
   ]
  ]
 },
 "keep": "Ad hoc SAS: revocation = regenerate the key that signed it."
},
{
 "id": "D2-209",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Lifecycle exhibit (click the <b>Lifecycle</b> tab).</p><p>The blobs below start in the Hot tier. What's their state once the rules have run?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Lifecycle",
   "h": "<p>Account <b>st1</b> (general-purpose v2, GRS). Last access time tracking is <b>disabled</b>. Lifecycle management rules (base blobs):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Rule</th><th>Filter</th><th>Action</th></tr><tr><td>R1</td><td>Prefix logs/</td><td>Cool 30 days after last modification; delete 365 days after last modification</td></tr><tr><td>R2</td><td>Prefix logs/archive/</td><td>Archive 90 days after last modification</td></tr><tr><td>R3</td><td>Index tag Project = Fin</td><td>Delete 7 days after creation</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "logs/app.log, modified 40 days ago:",
   "o": [
    "Hot",
    "Cool",
    "Archive",
    "Deleted"
   ],
   "a": 1
  },
  {
   "l": "logs/archive/2024.log, modified 100 days ago:",
   "o": [
    "Hot",
    "Cool",
    "Archive",
    "Deleted"
   ],
   "a": 2
  },
  {
   "l": "logs/app-old.log, modified 400 days ago:",
   "o": [
    "Hot",
    "Cool",
    "Archive",
    "Deleted"
   ],
   "a": 3
  },
  {
   "l": "data/report.pdf, modified 200 days ago, no tag:",
   "o": [
    "Hot",
    "Cool",
    "Archive",
    "Deleted"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>app.log (40 d) → Cool:</b> R1 applies (logs/ prefix, more than 30 days).</li><li><b>archive/2024.log (100 d) → Archive:</b> both R1 (Cool) and R2 (Archive) apply. When several actions target the same blob, the <b>cheapest</b> wins: Archive.</li><li><b>app-old.log (400 d) → Deleted:</b> R1 deletes after 365 days; deletion is the cheapest action.</li><li><b>data/report.pdf → Hot:</b> no rule matches (no logs/ prefix, no tag).</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1"
  ],
  "title": "st1 | Lifecycle management",
  "menu": [
   "Overview",
   "Data management",
   "*Lifecycle management"
  ],
  "rows": [
   [
    "R1 · logs/",
    "Cool at 30 d · delete at 365 d"
   ],
   [
    "*R2 · logs/archive/",
    "Archive at 90 d"
   ]
  ],
  "btn": "+ Add a rule"
 },
 "keep": "Several rules on a blob: the cheapest action wins (delete > Archive > Cool)."
},
{
 "id": "D2-210",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Lifecycle exhibit (click the <b>Lifecycle</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Lifecycle",
   "h": "<p>Account <b>st1</b> (general-purpose v2, GRS). Last access time tracking is <b>disabled</b>. Lifecycle management rules (base blobs):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Rule</th><th>Filter</th><th>Action</th></tr><tr><td>R1</td><td>Prefix logs/</td><td>Cool 30 days after last modification; delete 365 days after last modification</td></tr><tr><td>R2</td><td>Prefix logs/archive/</td><td>Archive 90 days after last modification</td></tr><tr><td>R3</td><td>Index tag Project = Fin</td><td>Delete 7 days after creation</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A blob tagged Project = Fin, created 10 days ago, is deleted.",
   "a": 0
  },
  {
   "l": "You can add a “Cool 60 days after last access” rule with no other change to the account.",
   "a": 1
  },
  {
   "l": "New rules apply within an hour of being saved.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Project = Fin tag: Yes.</b> R3 filters on an index tag (blobIndexMatch) and deletes 7 days after creation.</li><li><b>Last-access rule: No.</b> A daysAfterLastAccessTimeGreaterThan condition requires enabling <b>last access time tracking</b> first.</li><li><b>Within an hour: No.</b> The policy runs once a day; a new rule can take up to 24 hours to apply.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1"
  ],
  "title": "st1 | Lifecycle management",
  "menu": [
   "Overview",
   "Data management",
   "*Lifecycle management"
  ],
  "rows": [
   [
    "R1 · logs/",
    "Cool at 30 d · delete at 365 d"
   ],
   [
    "*R2 · logs/archive/",
    "Archive at 90 d"
   ]
  ],
  "btn": "+ Add a rule"
 },
 "keep": "“Last access” rules = last access tracking enabled. Runs daily."
},
{
 "id": "D2-211",
 "dom": 2,
 "type": "single",
 "stem": "<p>You have the environment shown in the Lifecycle exhibit (click the <b>Lifecycle</b> tab).</p><p>Logs in logs/ that nobody has read for 60 days must move to Cool, even if recently modified. The other rules must keep applying.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Lifecycle",
   "h": "<p>Account <b>st1</b> (general-purpose v2, GRS). Last access time tracking is <b>disabled</b>. Lifecycle management rules (base blobs):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Rule</th><th>Filter</th><th>Action</th></tr><tr><td>R1</td><td>Prefix logs/</td><td>Cool 30 days after last modification; delete 365 days after last modification</td></tr><tr><td>R2</td><td>Prefix logs/archive/</td><td>Archive 90 days after last modification</td></tr><tr><td>R3</td><td>Index tag Project = Fin</td><td>Delete 7 days after creation</td></tr></table></div>"
  }
 ],
 "opts": [
  "Enable last access tracking, then a last-access rule",
  "Replace R1's condition with “60 days after creation”",
  "Add a Read = No index tag to each blob in R1",
  "Enable change feed, then create a lifecycle rule based on reads"
 ],
 "ans": 0,
 "expl": "<p>The criterion is <b>reads</b>, not modifications. Enable <b>last access time tracking</b>, then a rule with daysAfterLastAccessTimeGreaterThan = 60 on the logs/ prefix.</p><ul><li>The creation date says nothing about reads.</li><li>Tagging each blob by hand doesn't track reads and takes ongoing effort.</li><li>Change feed records writes, not reads, and isn't a lifecycle condition.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1"
  ],
  "title": "st1 | Lifecycle management",
  "menu": [
   "Overview",
   "Data management",
   "*Lifecycle management"
  ],
  "rows": [
   [
    "R1 · logs/",
    "Cool at 30 d · delete at 365 d"
   ],
   [
    "*R2 · logs/archive/",
    "Archive at 90 d"
   ]
  ],
  "btn": "+ Add a rule"
 },
 "keep": "“Not read for N days” = last access tracking + daysAfterLastAccessTimeGreaterThan."
},
{
 "id": "D2-212",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Files exhibit (click the <b>Files</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Files",
   "h": "<p>The <b>st1</b> account contains shares <b>sh1</b> and <b>sh2</b>. <b>AD DS</b> identity-based authentication is enabled. Default share-level permission: <b>none</b>. UserA, UserB, and UserC are AD DS accounts synced to Microsoft Entra ID; UserD only exists in Microsoft Entra ID.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identity</th><th>Role</th><th>Scope</th></tr><tr><td>GroupA (UserA)</td><td>Storage File Data SMB Share Contributor</td><td>sh1</td></tr><tr><td>GroupB (UserB)</td><td>Storage File Data SMB Share Reader</td><td>st1</td></tr><tr><td>UserD</td><td>Storage File Data SMB Share Contributor</td><td>sh1</td></tr></table></div><p>On sh1, the <b>Finance</b> folder has NTFS permissions: GroupA Read, GroupB Modify.</p>"
  }
 ],
 "rows": [
  {
   "l": "UserA can modify a file in the Finance folder.",
   "a": 1
  },
  {
   "l": "UserB can modify a file in the Finance folder.",
   "a": 1
  },
  {
   "l": "UserB can read files in sh2 (if NTFS permissions allow it).",
   "a": 0
  },
  {
   "l": "UserC can mount sh1.",
   "a": 1
  },
  {
   "l": "UserD can mount sh1 with their identity.",
   "a": 1
  }
 ],
 "expl": "<p>Effective access is the <b>most restrictive</b> of the share-level permission (RBAC role) and the NTFS permissions.</p><ul><li><b>UserA: No.</b> Contributor at share level, but NTFS Read only on Finance.</li><li><b>UserB: No.</b> NTFS Modify, but only Reader at share level.</li><li><b>UserB on sh2: Yes.</b> Their role is assigned on the <b>account</b>, so on every share.</li><li><b>UserC: No.</b> No role and no default share-level permission.</li><li><b>UserD: No.</b> With AD DS, the identity must exist in AD DS (hybrid identity). A cloud-only account can't get a Kerberos ticket from the domain.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "File shares",
   "sh1"
  ],
  "title": "sh1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "GroupA",
    "SMB Share Contributor"
   ],
   [
    "*GroupB",
    "SMB Share Reader (inherited from st1)"
   ]
  ]
 },
 "keep": "Azure Files: access = minimum of share role and NTFS. AD DS = hybrid identities."
},
{
 "id": "D2-213",
 "dom": 2,
 "type": "single",
 "stem": "<p>You have the environment shown in the Files exhibit (click the <b>Files</b> tab).</p><p>All domain users must be able to read sh1 and sh2, according to NTFS permissions, without assigning a role to each one.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Files",
   "h": "<p>The <b>st1</b> account contains shares <b>sh1</b> and <b>sh2</b>. <b>AD DS</b> identity-based authentication is enabled. Default share-level permission: <b>none</b>. UserA, UserB, and UserC are AD DS accounts synced to Microsoft Entra ID; UserD only exists in Microsoft Entra ID.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identity</th><th>Role</th><th>Scope</th></tr><tr><td>GroupA (UserA)</td><td>Storage File Data SMB Share Contributor</td><td>sh1</td></tr><tr><td>GroupB (UserB)</td><td>Storage File Data SMB Share Reader</td><td>st1</td></tr><tr><td>UserD</td><td>Storage File Data SMB Share Contributor</td><td>sh1</td></tr></table></div><p>On sh1, the <b>Finance</b> folder has NTFS permissions: GroupA Read, GroupB Modify.</p>"
  }
 ],
 "opts": [
  "Set the default share-level permission to SMB Share Reader",
  "Assign each domain user SMB Share Reader on the st1 account",
  "Generate a read account SAS and deploy it to computers",
  "Add “Domain Users” to the NTFS ACLs on sh1 and sh2 only, with no role"
 ],
 "ans": 0,
 "expl": "<p>The <b>default share-level permission</b> applies to every authenticated identity without an explicit role. Setting it to SMB Share Reader lets all domain users read, then NTFS refines.</p><ul><li>A role per user contradicts the question.</li><li>A SAS isn't used for SMB mounting and bypasses identity.</li><li>NTFS alone isn't enough: without a share-level permission, access is denied.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "File shares"
  ],
  "title": "st1 | File shares",
  "menu": [
   "*File shares",
   "File share settings"
  ],
  "rows": [
   [
    "*Default share-level permission",
    "SMB Share Reader"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Everyone without an explicit role: default share-level permission."
},
{
 "id": "D2-214",
 "dom": 2,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Files exhibit (click the <b>Files</b> tab).</p><p>UserB must be able to modify files in Finance, and an administrator must be able to change sh1's NTFS permissions from Windows Explorer.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Files",
   "h": "<p>The <b>st1</b> account contains shares <b>sh1</b> and <b>sh2</b>. <b>AD DS</b> identity-based authentication is enabled. Default share-level permission: <b>none</b>. UserA, UserB, and UserC are AD DS accounts synced to Microsoft Entra ID; UserD only exists in Microsoft Entra ID.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identity</th><th>Role</th><th>Scope</th></tr><tr><td>GroupA (UserA)</td><td>Storage File Data SMB Share Contributor</td><td>sh1</td></tr><tr><td>GroupB (UserB)</td><td>Storage File Data SMB Share Reader</td><td>st1</td></tr><tr><td>UserD</td><td>Storage File Data SMB Share Contributor</td><td>sh1</td></tr></table></div><p>On sh1, the <b>Finance</b> folder has NTFS permissions: GroupA Read, GroupB Modify.</p>"
  }
 ],
 "rows": [
  {
   "l": "For UserB (GroupB):",
   "o": [
    "SMB Share Contributor on sh1",
    "NTFS Full control on Finance",
    "Storage Blob Data Reader on st1",
    "Contributor on st1"
   ],
   "a": 0
  },
  {
   "l": "For the administrator:",
   "o": [
    "SMB Share Elevated Contributor",
    "SMB Share Reader",
    "Storage Account Contributor",
    "Storage Blob Data Owner"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>UserB:</b> NTFS already grants Modify; what's missing is write permission <b>at share level</b>: SMB Share Contributor on sh1 (assigned to GroupB).</li><li><b>Administrator:</b> changing NTFS ACLs requires <b>SMB Share Elevated Contributor</b> (or mounting with the account key). Storage Account Contributor manages the account, not file ACLs.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "File shares",
   "sh1"
  ],
  "title": "sh1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "GroupA",
    "SMB Share Contributor"
   ],
   [
    "*GroupB",
    "SMB Share Reader (inherited from st1)"
   ]
  ]
 },
 "keep": "Write = SMB Share Contributor. Change NTFS ACLs = Elevated Contributor."
},
{
 "id": "D2-215",
 "dom": 2,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Access exhibit (click the <b>Access</b> tab).</p><p>An application on VM VM1 must write blobs to c1 only, with no secret stored in its code or on the VM.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Access",
   "h": "<p>Resource group RG1 contains the <b>st1</b> account, with containers <b>c1</b> and <b>c2</b>. “Allow storage account key access” is <b>enabled</b> on st1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Storage Blob Data Reader</td><td>st1</td></tr><tr><td>User2</td><td>Storage Blob Data Contributor</td><td>Container c1</td></tr><tr><td>User3</td><td>Contributor</td><td>st1</td></tr><tr><td>User4</td><td>Reader</td><td>RG1</td></tr><tr><td>User5</td><td>Storage Blob Data Owner</td><td>RG1</td></tr></table></div>"
  }
 ],
 "opts": [
  "Enable a managed identity on VM1",
  "Assign that identity Storage Blob Data Contributor on c1",
  "Store key1 in an environment variable on VM1",
  "Assign that identity Contributor on the st1 account"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>A <b>managed identity</b> gives the VM a Microsoft Entra identity with no secret to manage. The <b>Storage Blob Data Contributor</b> role scoped to <b>container c1</b> limits writes to that container.</p><ul><li>key1 is a secret that grants full access to the account.</li><li>Contributor on st1 is a management role, too broad, and only reaches data through the key.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "Containers",
   "c2"
  ],
  "title": "c2 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "User1",
    "Storage Blob Data Reader (inherited from st1)"
   ],
   [
    "*User5",
    "Storage Blob Data Owner (inherited from RG1)"
   ]
  ]
 },
 "keep": "Azure app → managed identity + data role at the smallest scope."
},
{
 "id": "D2-216",
 "dom": 2,
 "type": "single",
 "stem": "<p>You have the environment shown in the Accounts exhibit (click the <b>Accounts</b> tab).</p><p>st5 must use lifecycle management and the Cold tier. The applications' URLs must not change.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Accounts",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Account</th><th>Kind</th><th>Performance</th><th>Redundancy</th><th>Hierarchical namespace</th><th>Region</th></tr><tr><td>st1</td><td>General-purpose v2</td><td>Standard</td><td>GRS</td><td>No</td><td>France Central</td></tr><tr><td>st2</td><td>General-purpose v2</td><td>Standard</td><td>ZRS</td><td>Yes</td><td>France Central</td></tr><tr><td>st3</td><td>Block blobs</td><td>Premium</td><td>LRS</td><td>No</td><td>France Central</td></tr><tr><td>st4</td><td>File shares</td><td>Premium</td><td>ZRS</td><td>No</td><td>France Central</td></tr><tr><td>st5</td><td>General-purpose v1</td><td>Standard</td><td>LRS</td><td>No</td><td>West Europe</td></tr></table></div>"
  }
 ],
 "opts": [
  "Upgrade st5 to general-purpose v2",
  "Create a v2 account and copy the data",
  "Switch st5 to GRS, then create the rule",
  "Enable st5's hierarchical namespace"
 ],
 "ans": 0,
 "expl": "<p>The <b>upgrade to general-purpose v2</b> happens in place, with no downtime and no name or URL change, and unlocks access tiers and lifecycle management. It can't be undone.</p><ul><li>A new account would change the name and so the URLs.</li><li>Redundancy doesn't change the account kind.</li><li>The hierarchical namespace can't be enabled on a v1 account.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st5"
  ],
  "title": "st5 | Configuration",
  "menu": [
   "Overview",
   "*Configuration",
   "Redundancy"
  ],
  "rows": [
   [
    "*Account kind",
    "StorageV2 (upgraded)"
   ]
  ]
 },
 "keep": "v1 → v2: in place, same URLs, irreversible."
},
{
 "id": "D2-217",
 "dom": 2,
 "type": "single",
 "stem": "<p>You have the environment shown in the SAS exhibit (click the <b>SAS</b> tab).</p><p>From now on, you must be able to revoke a given SAS without regenerating a key or affecting the other SASs.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "SAS",
   "h": "<p>Account <b>st1</b>, containers c1 and c2. Container c1 has a stored access policy <b>pol1</b> (read, expires December 31).</p><div class=\"tw\"><table class=\"tbl\"><tr><th>SAS</th><th>Type</th><th>Signed with</th><th>Scope</th><th>Permissions</th><th>Expiry</th></tr><tr><td>SAS1</td><td>Service SAS</td><td>key1, tied to pol1</td><td>c1</td><td>pol1's</td><td>pol1's</td></tr><tr><td>SAS2</td><td>Service SAS</td><td>key1</td><td>c2</td><td>Read, write</td><td>In 1 year</td></tr><tr><td>SAS3</td><td>User delegation SAS</td><td>User2's delegation key</td><td>c1</td><td>Read</td><td>In 3 days</td></tr><tr><td>SAS4</td><td>Account SAS</td><td>key2</td><td>Blob service</td><td>Read, list</td><td>In 6 months</td></tr></table></div>"
  }
 ],
 "opts": [
  "Tie each service SAS to its own stored access policy",
  "Issue delegation SASs, then revoke the delegation keys",
  "Issue account SASs signed alternately with key1 and key2",
  "Issue service SASs with no expiry, signed with key2"
 ],
 "ans": 0,
 "expl": "<ul><li><b>One stored policy per SAS: yes.</b> Deleting or changing the policy only revokes the tied SAS (at most five policies per container).</li><li>Revoking the user delegation keys invalidates <b>all</b> the account's delegation SASs, not just one.</li><li>Account SASs can't be tied to a stored policy: only key regeneration revokes them, along with every other SAS signed with that key.</li><li>A SAS with no expiry is bad practice and can still only be revoked through the key.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "Containers",
   "c1"
  ],
  "title": "c1 | Access policy",
  "menu": [
   "Overview",
   "*Access policy"
  ],
  "rows": [
   [
    "*pol1",
    "Read · 12/31"
   ]
  ],
  "btn": "+ Add policy"
 },
 "keep": "Targeted revocation: stored access policy (service SAS). Account SAS: no policy."
},
{
 "id": "D2-218",
 "dom": 2,
 "type": "single",
 "stem": "<p>You have the environment shown in the Files exhibit (click the <b>Files</b> tab).</p><p>UserD, a cloud-only account, must access sh1 from a Microsoft Entra joined computer, with no reachable domain controller.</p><p>Which identity source should you enable instead of AD DS?</p>",
 "docs": [
  {
   "t": "Files",
   "h": "<p>The <b>st1</b> account contains shares <b>sh1</b> and <b>sh2</b>. <b>AD DS</b> identity-based authentication is enabled. Default share-level permission: <b>none</b>. UserA, UserB, and UserC are AD DS accounts synced to Microsoft Entra ID; UserD only exists in Microsoft Entra ID.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Identity</th><th>Role</th><th>Scope</th></tr><tr><td>GroupA (UserA)</td><td>Storage File Data SMB Share Contributor</td><td>sh1</td></tr><tr><td>GroupB (UserB)</td><td>Storage File Data SMB Share Reader</td><td>st1</td></tr><tr><td>UserD</td><td>Storage File Data SMB Share Contributor</td><td>sh1</td></tr></table></div><p>On sh1, the <b>Finance</b> folder has NTFS permissions: GroupA Read, GroupB Modify.</p>"
  }
 ],
 "opts": [
  "Microsoft Entra Kerberos",
  "Microsoft Entra Domain Services",
  "An account SAS per computer",
  "AD DS with a second domain"
 ],
 "ans": 0,
 "expl": "<p><b>Microsoft Entra Kerberos</b> lets Microsoft Entra joined (or hybrid joined) computers get Kerberos tickets for Azure Files, with no line of sight to a domain controller. It supports hybrid identities and, with a recent configuration, cloud-only identities.</p><ul><li>Microsoft Entra Domain Services requires VMs joined to that managed domain.</li><li>A SAS isn't used for SMB mounting.</li><li>AD DS assumes a reachable domain controller.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "File shares",
   "sh1"
  ],
  "title": "sh1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "GroupA",
    "SMB Share Contributor"
   ],
   [
    "*GroupB",
    "SMB Share Reader (inherited from st1)"
   ]
  ]
 },
 "keep": "Entra computers without a DC: Microsoft Entra Kerberos."
},
{
 "id": "D2-219",
 "dom": 2,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Access exhibit (click the <b>Access</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Access",
   "h": "<p>Resource group RG1 contains the <b>st1</b> account, with containers <b>c1</b> and <b>c2</b>. “Allow storage account key access” is <b>enabled</b> on st1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Storage Blob Data Reader</td><td>st1</td></tr><tr><td>User2</td><td>Storage Blob Data Contributor</td><td>Container c1</td></tr><tr><td>User3</td><td>Contributor</td><td>st1</td></tr><tr><td>User4</td><td>Reader</td><td>RG1</td></tr><tr><td>User5</td><td>Storage Blob Data Owner</td><td>RG1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User2 can generate a write user delegation SAS for c1, if their role includes the generateUserDelegationKey action.",
   "a": 0
  },
  {
   "l": "User4 can see st1's container list in the portal.",
   "a": 1
  },
  {
   "l": "If you remove User1's role on st1, they keep read access to c2.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User2: Yes.</b> A user delegation SAS never grants more than its creator's rights: User2 can write to c1, and Storage Blob Data Contributor includes generateUserDelegationKey.</li><li><b>User4: No.</b> Listing containers requires either a data role or key access; Reader has neither. The portal shows an authorization error.</li><li><b>User1: No.</b> Their only access came from the role on st1; no other role covers them on c2.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1",
   "Containers",
   "c2"
  ],
  "title": "c2 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "User1",
    "Storage Blob Data Reader (inherited from st1)"
   ],
   [
    "*User5",
    "Storage Blob Data Owner (inherited from RG1)"
   ]
  ]
 },
 "keep": "Delegation SAS ≤ creator's rights. Reader doesn't see data."
},
{
 "id": "D2-220",
 "dom": 2,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Lifecycle exhibit (click the <b>Lifecycle</b> tab).</p><p>Versioning is enabled on st1. Old versions of blobs in logs/ pile up and drive up the bill.</p><p>Which <b>two</b> lifecycle actions reduce cost without touching current versions?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Lifecycle",
   "h": "<p>Account <b>st1</b> (general-purpose v2, GRS). Last access time tracking is <b>disabled</b>. Lifecycle management rules (base blobs):</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Rule</th><th>Filter</th><th>Action</th></tr><tr><td>R1</td><td>Prefix logs/</td><td>Cool 30 days after last modification; delete 365 days after last modification</td></tr><tr><td>R2</td><td>Prefix logs/archive/</td><td>Archive 90 days after last modification</td></tr><tr><td>R3</td><td>Index tag Project = Fin</td><td>Delete 7 days after creation</td></tr></table></div>"
  }
 ],
 "opts": [
  "Delete previous versions 90 days after creation",
  "Move previous versions to Archive after 30 days",
  "Add to R1 a base blob deletion 90 days after modification",
  "Disable account versioning, which purges the existing versions"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>A lifecycle rule can act on <b>previous versions</b> (<code>version</code> block): delete them or move them to a cheaper tier, without touching the base blob.</p><ul><li>Deleting base blobs would touch current versions.</li><li>Disabling versioning doesn't delete existing versions: they remain and are still billed.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "st1"
  ],
  "title": "st1 | Lifecycle management",
  "menu": [
   "Overview",
   "Data management",
   "*Lifecycle management"
  ],
  "rows": [
   [
    "R1 · logs/",
    "Cool at 30 d · delete at 365 d"
   ],
   [
    "*R2 · logs/archive/",
    "Archive at 90 d"
   ]
  ],
  "btn": "+ Add a rule"
 },
 "keep": "Piling-up versions: a lifecycle rule on versions."
}
);
