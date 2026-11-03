/* Domain 5: monitoring and backup (batch E: D5-201 to D5-220, exam-style exhibit questions) */
AZ.questions.push(
{
 "id": "D5-201",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Backup exhibit (click the <b>Backup</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Backup",
   "h": "<p>Paired regions: France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Region</th><th>OS</th><th>Detail</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Data disk Disk3 (managed disk)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Vault</th><th>Type</th><th>Region</th><th>Redundancy</th><th>Cross Region Restore</th><th>Protected items</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Enabled</td><td>VM1 (daily policy, 30 days), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>None</td></tr><tr><td>BV1</td><td>Backup vault</td><td>France Central</td><td>LRS</td><td>—</td><td>None</td></tr></table></div><p>The storage account <b>stdata</b> (France Central) contains the Azure Files share share1 and blob containers.</p>"
  }
 ],
 "rows": [
  {
   "l": "You can protect VM2 with RSV1.",
   "a": 1
  },
  {
   "l": "You can protect VM3, as a virtual machine, with BV1.",
   "a": 1
  },
  {
   "l": "You can restore VM1 in West Europe from RSV1.",
   "a": 1
  },
  {
   "l": "You can restore VM1 in France South from RSV1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM2 in RSV1: No.</b> A VM is backed up to a vault in <b>its own region</b>. VM2 is in West Europe; RSV1 is in France Central.</li><li><b>VM3 in BV1: No.</b> A Backup vault doesn't protect virtual machines: it's for managed disks, blobs, PostgreSQL, or AKS. VM backup uses a Recovery Services vault.</li><li><b>VM1 in West Europe: No.</b> Cross Region Restore restores to the vault's <b>paired region</b>, not to a region of your choice. For France Central, that's France South.</li><li><b>VM1 in France South: Yes.</b> RSV1 is GRS with Cross Region Restore enabled.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "RSV1"
  ],
  "title": "RSV1 | Properties",
  "menu": [
   "Overview",
   "Backup items",
   "*Properties"
  ],
  "rows": [
   [
    "*Cross Region Restore",
    "Enabled · secondary region: France South"
   ]
  ]
 },
 "keep": "VM = Recovery Services vault in its region. Cross-region = paired region only."
},
{
 "id": "D5-202",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Backup exhibit (click the <b>Backup</b> tab).</p><p>You need to protect the items below. Which vault should you use for each?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Backup",
   "h": "<p>Paired regions: France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Region</th><th>OS</th><th>Detail</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Data disk Disk3 (managed disk)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Vault</th><th>Type</th><th>Region</th><th>Redundancy</th><th>Cross Region Restore</th><th>Protected items</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Enabled</td><td>VM1 (daily policy, 30 days), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>None</td></tr><tr><td>BV1</td><td>Backup vault</td><td>France Central</td><td>LRS</td><td>—</td><td>None</td></tr></table></div><p>The storage account <b>stdata</b> (France Central) contains the Azure Files share share1 and blob containers.</p>"
  }
 ],
 "rows": [
  {
   "l": "VM2:",
   "o": [
    "RSV1",
    "RSV2",
    "BV1"
   ],
   "a": 1
  },
  {
   "l": "Disk3 alone, several times a day:",
   "o": [
    "RSV1",
    "RSV2",
    "BV1"
   ],
   "a": 2
  },
  {
   "l": "share1:",
   "o": [
    "RSV1",
    "RSV2",
    "BV1"
   ],
   "a": 0
  },
  {
   "l": "stdata's blobs (operational backup):",
   "o": [
    "RSV1",
    "RSV2",
    "BV1"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>VM2 → RSV2:</b> Recovery Services vault in the same region (West Europe).</li><li><b>Disk3 → BV1:</b> managed disk backup (Azure Disk Backup, snapshot-based, up to several times a day) uses a <b>Backup vault</b> in the same region.</li><li><b>share1 → RSV1:</b> Azure Files backup uses a <b>Recovery Services</b> vault in the same region as the storage account.</li><li><b>Blobs → BV1:</b> blob backup (operational or vaulted) uses a <b>Backup vault</b>.</li></ul>",
 "portal": {
  "path": [
   "Business Continuity Center"
  ],
  "title": "Business Continuity Center | Protect",
  "menu": [
   "Overview",
   "*Protect",
   "Protected items"
  ],
  "rows": [
   [
    "Virtual machines, Azure Files",
    "Recovery Services vault"
   ],
   [
    "*Disks, blobs, PostgreSQL, AKS",
    "Backup vault"
   ]
  ]
 },
 "keep": "Recovery Services: VMs, Azure Files, SQL in VM. Backup vault: disks, blobs, PostgreSQL, AKS."
},
{
 "id": "D5-203",
 "dom": 5,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Backup exhibit (click the <b>Backup</b> tab).</p><p>You'll protect VM2. Its backups must be restorable in the paired region, even while West Europe stays available.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Backup",
   "h": "<p>Paired regions: France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Region</th><th>OS</th><th>Detail</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Data disk Disk3 (managed disk)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Vault</th><th>Type</th><th>Region</th><th>Redundancy</th><th>Cross Region Restore</th><th>Protected items</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Enabled</td><td>VM1 (daily policy, 30 days), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>None</td></tr><tr><td>BV1</td><td>Backup vault</td><td>France Central</td><td>LRS</td><td>—</td><td>None</td></tr></table></div><p>The storage account <b>stdata</b> (France Central) contains the Azure Files share share1 and blob containers.</p>"
  }
 ],
 "opts": [
  "Switch RSV2 to GRS before protecting VM2",
  "Enable Cross Region Restore on RSV2",
  "Create a second vault in North Europe and copy the points",
  "Switch RSV2 to ZRS, then enable immutability"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>Restoring to the paired region (North Europe) requires a <b>GRS</b> vault with <b>Cross Region Restore</b> enabled. RSV2 protects nothing yet, so its redundancy can still be changed (it's locked once an item is protected).</p><ul><li>A second vault wouldn't receive RSV2's points: there's no manual copy of points between vaults.</li><li>ZRS protects against losing a zone, not a region; immutability prevents deleting points.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "RSV2"
  ],
  "title": "RSV2 | Properties",
  "menu": [
   "Overview",
   "Backup items",
   "*Properties"
  ],
  "rows": [
   [
    "*Backup configuration",
    "Geo-redundant · Cross Region Restore enabled"
   ]
  ]
 },
 "keep": "Vault redundancy: choose it before the first protected item."
},
{
 "id": "D5-204",
 "dom": 5,
 "type": "single",
 "stem": "<p>You have the environment shown in the Backup exhibit (click the <b>Backup</b> tab).</p><p>You need to configure Azure Site Recovery to replicate VM4 to West Europe.</p><p>Which vault should you use?</p>",
 "docs": [
  {
   "t": "Backup",
   "h": "<p>Paired regions: France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Region</th><th>OS</th><th>Detail</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Data disk Disk3 (managed disk)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Vault</th><th>Type</th><th>Region</th><th>Redundancy</th><th>Cross Region Restore</th><th>Protected items</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Enabled</td><td>VM1 (daily policy, 30 days), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>None</td></tr><tr><td>BV1</td><td>Backup vault</td><td>France Central</td><td>LRS</td><td>—</td><td>None</td></tr></table></div><p>The storage account <b>stdata</b> (France Central) contains the Azure Files share share1 and blob containers.</p>"
  }
 ],
 "opts": [
  "RSV1, which already protects VM4 in France Central",
  "RSV2, the Recovery Services vault in West Europe",
  "BV1, the Backup vault in France Central",
  "A new Backup vault in France South"
 ],
 "ans": 1,
 "expl": "<p>For cross-region Site Recovery, the Recovery Services vault must be <b>outside the source region</b>, in practice in the target region: <b>RSV2</b> (West Europe). If the source region fails, the vault is still available to start the failover.</p><ul><li>RSV1 is in the source region, even though it already backs up VM4 (backup and replication are independent).</li><li>A Backup vault doesn't do Site Recovery.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "RSV2"
  ],
  "title": "RSV2 | Replicated items",
  "menu": [
   "Overview",
   "*Replicated items",
   "Recovery plans"
  ],
  "rows": [
   [
    "*VM4",
    "France Central → West Europe"
   ]
  ],
  "btn": "+ Replicate"
 },
 "keep": "Site Recovery: vault in the target region. Backup: vault in the source region."
},
{
 "id": "D5-205",
 "dom": 5,
 "type": "single",
 "stem": "<p>You have the environment shown in the Backup exhibit (click the <b>Backup</b> tab).</p><p>The administrators want to switch RSV1 to LRS to cut costs without losing VM1's and VM4's recovery points.</p><p>What happens?</p>",
 "docs": [
  {
   "t": "Backup",
   "h": "<p>Paired regions: France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Region</th><th>OS</th><th>Detail</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Data disk Disk3 (managed disk)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Vault</th><th>Type</th><th>Region</th><th>Redundancy</th><th>Cross Region Restore</th><th>Protected items</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Enabled</td><td>VM1 (daily policy, 30 days), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>None</td></tr><tr><td>BV1</td><td>Backup vault</td><td>France Central</td><td>LRS</td><td>—</td><td>None</td></tr></table></div><p>The storage account <b>stdata</b> (France Central) contains the Azure Files share share1 and blob containers.</p>"
  }
 ],
 "opts": [
  "Redundancy changes, and existing GRS points stay GRS",
  "It's impossible while items are protected in RSV1",
  "Redundancy changes at the next backup job",
  "You must first disable Cross Region Restore, then change it"
 ],
 "ans": 1,
 "expl": "<p>A Recovery Services vault's storage redundancy can no longer change once an item is protected in it. You'd have to stop protection and delete the data (losing the points), or create a new LRS vault for future backups.</p><p>Disabling Cross Region Restore doesn't lift this limit (and once enabled, that option can't be disabled).</p>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "RSV1"
  ],
  "title": "RSV1 | Properties",
  "menu": [
   "Overview",
   "Backup items",
   "*Properties"
  ],
  "rows": [
   [
    "*Storage redundancy",
    "GRS · locked (protected items)"
   ]
  ]
 },
 "keep": "Protected items = vault redundancy locked."
},
{
 "id": "D5-206",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Items exhibit (click the <b>Items</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Items",
   "h": "<p>The Recovery Services vault <b>RSV5</b> (France Central) has standard soft delete (14 days). Today is the 10th of the month.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Item</th><th>Protection state</th><th>Last backup</th><th>Note</th></tr><tr><td>VM10</td><td>Protection active</td><td>The 9th</td><td>Daily policy, 30 days</td></tr><tr><td>VM11</td><td>Protection stopped, data retained</td><td>The 1st</td><td>—</td></tr><tr><td>VM12</td><td>Soft deleted</td><td>The 4th</td><td>Data deleted on the 5th</td></tr><tr><td>VM13</td><td>Protection active</td><td>The 9th</td><td>VM deleted by mistake on the evening of the 9th</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "You can restore VM11 from its recovery point of the 1st.",
   "a": 0
  },
  {
   "l": "You can undelete VM12's data today.",
   "a": 0
  },
  {
   "l": "You'll still be able to undelete VM12's data on the 25th.",
   "a": 1
  },
  {
   "l": "You can delete RSV5 today.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>VM11: Yes.</b> “Protection stopped, data retained” keeps the existing points, which stay restorable (and billed).</li><li><b>VM12 today: Yes.</b> Data deleted on the 5th stays recoverable for 14 days, until the 19th.</li><li><b>VM12 on the 25th: No.</b> On the 19th, the data is permanently deleted.</li><li><b>Delete RSV5: No.</b> A vault holding protected items, even stopped ones, or soft-deleted data can't be deleted.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "RSV5"
  ],
  "title": "RSV5 | Backup items",
  "menu": [
   "Overview",
   "*Backup items",
   "Backup jobs"
  ],
  "rows": [
   [
    "VM11",
    "Protection stopped"
   ],
   [
    "*VM12",
    "Soft deleted · 9 days remaining"
   ]
  ]
 },
 "keep": "Standard soft delete = 14 days. A vault can only be deleted once empty."
},
{
 "id": "D5-207",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Items exhibit (click the <b>Items</b> tab).</p><p>What should you do for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Items",
   "h": "<p>The Recovery Services vault <b>RSV5</b> (France Central) has standard soft delete (14 days). Today is the 10th of the month.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Item</th><th>Protection state</th><th>Last backup</th><th>Note</th></tr><tr><td>VM10</td><td>Protection active</td><td>The 9th</td><td>Daily policy, 30 days</td></tr><tr><td>VM11</td><td>Protection stopped, data retained</td><td>The 1st</td><td>—</td></tr><tr><td>VM12</td><td>Soft deleted</td><td>The 4th</td><td>Data deleted on the 5th</td></tr><tr><td>VM13</td><td>Protection active</td><td>The 9th</td><td>VM deleted by mistake on the evening of the 9th</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Bring VM13 back:",
   "o": [
    "Restore with “Create new VM”",
    "Restore with “Replace existing”",
    "Undelete VM13",
    "Run an on-demand backup"
   ],
   "a": 0
  },
  {
   "l": "Recover one file from VM10 of the 9th:",
   "o": [
    "File Recovery (script)",
    "Restore disks",
    "Create new VM",
    "Undelete"
   ],
   "a": 0
  },
  {
   "l": "Resume VM11's protection:",
   "o": [
    "Resume backup",
    "Undelete",
    "Re-register the MARS agent",
    "Create a new vault"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM13:</b> the VM no longer exists, but its recovery points are in the vault. “Replace existing” requires the VM to still exist. Restore with <b>Create new virtual machine</b> (or Restore disks).</li><li><b>One file from VM10:</b> <b>File Recovery</b> mounts the recovery point's disks as drives through a script, without restoring the whole VM.</li><li><b>VM11:</b> protection was stopped with data retained: <b>Resume backup</b> and pick a policy.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "RSV5"
  ],
  "title": "RSV5 | Backup items",
  "menu": [
   "Overview",
   "*Backup items",
   "Backup jobs"
  ],
  "rows": [
   [
    "VM11",
    "Protection stopped"
   ],
   [
    "*VM12",
    "Soft deleted · 9 days remaining"
   ]
  ]
 },
 "keep": "Deleted VM → Create new VM. One file → File Recovery. Stopped protection → Resume."
},
{
 "id": "D5-208",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Access exhibit (click the <b>Access</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Access",
   "h": "<p>Subscription Sub1 contains RG1 (VM1 and VM2) and RG2 (the LAW2 workspace). VM1 sends its logs to the LAW1 workspace, whose access control mode is <b>Use resource or workspace permissions</b>. LAW2 is in <b>Require workspace permissions</b> mode.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Monitoring Reader</td><td>Sub1</td></tr><tr><td>User2</td><td>Monitoring Contributor</td><td>RG1</td></tr><tr><td>User3</td><td>Reader</td><td>VM1</td></tr><tr><td>User4</td><td>Log Analytics Reader</td><td>LAW2</td></tr><tr><td>User5</td><td>Reader</td><td>VM2</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 can create a metric alert rule on VM1.",
   "a": 1
  },
  {
   "l": "User2 can create a metric alert rule on VM2 and an action group in RG1.",
   "a": 0
  },
  {
   "l": "User3 can query VM1's logs from VM1's Logs blade.",
   "a": 0
  },
  {
   "l": "User3 can query all tables in LAW1 from the workspace.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User1: No.</b> Monitoring Reader can read monitoring data and settings, not create rules.</li><li><b>User2: Yes.</b> Monitoring Contributor can create alert rules and action groups without modifying the VMs themselves.</li><li><b>User3 from VM1: Yes.</b> In “resource or workspace permissions” mode, a <b>resource-context</b> query only returns that resource's data, and the Reader role on the VM is enough.</li><li><b>User3 on all of LAW1: No.</b> They have no role on the workspace.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "LAW1"
  ],
  "title": "LAW1 | Properties",
  "menu": [
   "Overview",
   "Logs",
   "*Properties"
  ],
  "rows": [
   [
    "*Access control mode",
    "Use resource or workspace permissions"
   ]
  ]
 },
 "keep": "Resource context: reading the resource is enough to see its logs (if the mode allows it)."
},
{
 "id": "D5-209",
 "dom": 5,
 "type": "single",
 "stem": "<p>You have the environment shown in the Access exhibit (click the <b>Access</b> tab).</p><p>User5 must view VM2's logs sent to LAW2, and nothing else in LAW2.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Access",
   "h": "<p>Subscription Sub1 contains RG1 (VM1 and VM2) and RG2 (the LAW2 workspace). VM1 sends its logs to the LAW1 workspace, whose access control mode is <b>Use resource or workspace permissions</b>. LAW2 is in <b>Require workspace permissions</b> mode.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Monitoring Reader</td><td>Sub1</td></tr><tr><td>User2</td><td>Monitoring Contributor</td><td>RG1</td></tr><tr><td>User3</td><td>Reader</td><td>VM1</td></tr><tr><td>User4</td><td>Log Analytics Reader</td><td>LAW2</td></tr><tr><td>User5</td><td>Reader</td><td>VM2</td></tr></table></div>"
  }
 ],
 "opts": [
  "Nothing: Reader on VM2 is enough in resource context",
  "Switch LAW2 to “resource or workspace permissions” mode",
  "Assign User5 Log Analytics Reader on the LAW2 workspace",
  "Assign User5 Monitoring Reader on the Sub1 subscription"
 ],
 "ans": 1,
 "expl": "<p>LAW2 requires workspace permissions: resource context doesn't work there, and Reader on VM2 isn't enough. Switching LAW2 to <b>Use resource or workspace permissions</b> lets User5 read VM2's logs through their role on VM2, without seeing the rest.</p><ul><li>Log Analytics Reader or Monitoring Reader would give access to <b>all</b> the workspace's data.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "LAW2"
  ],
  "title": "LAW2 | Properties",
  "menu": [
   "Overview",
   "*Properties"
  ],
  "rows": [
   [
    "*Access control mode",
    "Use resource or workspace permissions"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Per-resource access = “resource or workspace permissions” mode."
},
{
 "id": "D5-210",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Alerts exhibit (click the <b>Alerts</b> tab).</p><p>Which action groups are notified in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Alerts",
   "h": "<p>VM1 is in RG1, VM3 is in RG2. Both resource groups are in Sub1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Alert rule</th><th>Type</th><th>Target</th><th>Severity</th><th>Action group</th></tr><tr><td>AR1</td><td>Metric (CPU &gt; 80%)</td><td>VM1</td><td>Sev2</td><td>AG-Ops</td></tr><tr><td>AR2</td><td>Log search</td><td>VM3</td><td>Sev0</td><td>—</td></tr><tr><td>AR3</td><td>Metric (disk)</td><td>VM1</td><td>Sev0</td><td>AG-Ops</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Alert processing rule</th><th>Scope</th><th>Filter</th><th>Action</th><th>Schedule</th></tr><tr><td>APR1</td><td>RG1</td><td>—</td><td>Suppress notifications</td><td>Saturday and Sunday, all day</td></tr><tr><td>APR2</td><td>Sub1</td><td>Severity = Sev0</td><td>Apply action group AG-Ticket</td><td>Always</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "AR1 fires on a Tuesday:",
   "o": [
    "None",
    "AG-Ops",
    "AG-Ticket",
    "AG-Ops and AG-Ticket"
   ],
   "a": 1
  },
  {
   "l": "AR2 fires on a Tuesday:",
   "o": [
    "None",
    "AG-Ops",
    "AG-Ticket",
    "AG-Ops and AG-Ticket"
   ],
   "a": 2
  },
  {
   "l": "AR3 fires on a Tuesday:",
   "o": [
    "None",
    "AG-Ops",
    "AG-Ticket",
    "AG-Ops and AG-Ticket"
   ],
   "a": 3
  },
  {
   "l": "AR3 fires on a Saturday:",
   "o": [
    "None",
    "AG-Ops",
    "AG-Ticket",
    "AG-Ops and AG-Ticket"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>AR1 Tuesday:</b> APR1 isn't active, and APR2 only targets Sev0 → its own group, <b>AG-Ops</b>.</li><li><b>AR2 Tuesday:</b> no action in the rule, but APR2 (Sev0, scope Sub1 which contains VM3) applies <b>AG-Ticket</b>.</li><li><b>AR3 Tuesday:</b> AG-Ops (rule) + AG-Ticket (APR2) → <b>both</b>.</li><li><b>AR3 Saturday:</b> APR1 suppresses notifications for RG1. <b>Suppression wins</b> over applying action groups: no group is notified. The alert is still visible in the portal.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts",
   "Alert processing rules"
  ],
  "title": "Alert processing rules",
  "menu": [
   "Alerts",
   "Alert rules",
   "*Alert processing rules"
  ],
  "rows": [
   [
    "*APR1 · RG1",
    "Suppress notifications · weekend"
   ],
   [
    "APR2 · Sub1",
    "Apply AG-Ticket · Sev0"
   ]
  ]
 },
 "keep": "Processing rules: suppression takes precedence over applying action groups."
},
{
 "id": "D5-211",
 "dom": 5,
 "type": "single",
 "stem": "<p>You have the environment shown in the Alerts exhibit (click the <b>Alerts</b> tab).</p><p>On weekends, Sev0 alerts in RG1 must still notify AG-Ticket. Other alerts in RG1 must stay silent on weekends.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Alerts",
   "h": "<p>VM1 is in RG1, VM3 is in RG2. Both resource groups are in Sub1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Alert rule</th><th>Type</th><th>Target</th><th>Severity</th><th>Action group</th></tr><tr><td>AR1</td><td>Metric (CPU &gt; 80%)</td><td>VM1</td><td>Sev2</td><td>AG-Ops</td></tr><tr><td>AR2</td><td>Log search</td><td>VM3</td><td>Sev0</td><td>—</td></tr><tr><td>AR3</td><td>Metric (disk)</td><td>VM1</td><td>Sev0</td><td>AG-Ops</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Alert processing rule</th><th>Scope</th><th>Filter</th><th>Action</th><th>Schedule</th></tr><tr><td>APR1</td><td>RG1</td><td>—</td><td>Suppress notifications</td><td>Saturday and Sunday, all day</td></tr><tr><td>APR2</td><td>Sub1</td><td>Severity = Sev0</td><td>Apply action group AG-Ticket</td><td>Always</td></tr></table></div>"
  }
 ],
 "opts": [
  "Give APR2 a higher priority than APR1",
  "Add a Severity not equal to Sev0 filter to APR1",
  "Add AG-Ticket as an action group in AR3",
  "Move APR1 to RG2 and limit it to Sev2 alerts"
 ],
 "ans": 1,
 "expl": "<p>Processing rules have no priority order: if a suppression rule applies, suppression always wins. So APR1 must <b>no longer apply</b> to Sev0 alerts: add a <b>Severity ≠ Sev0</b> filter to APR1.</p><ul><li>Adding AG-Ticket in AR3 doesn't help: APR1's suppression also blocks the rule's own groups.</li><li>Moving APR1 out of RG1 would make all RG1 alerts notify on weekends.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alert processing rules",
   "APR1"
  ],
  "title": "APR1 | Edit",
  "menu": [
   "Scope",
   "*Filter",
   "Rules",
   "Scheduling"
  ],
  "rows": [
   [
    "*Severity",
    "≠ Sev0"
   ]
  ],
  "btn": "Save"
 },
 "keep": "To exempt alerts from suppression, filter the suppression rule."
},
{
 "id": "D5-212",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Collection exhibit (click the <b>Collection</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Collection",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Machine</th><th>Type</th><th>OS</th><th>Installed agent</th></tr><tr><td>VMW1</td><td>Azure VM</td><td>Windows</td><td>Azure Monitor agent</td></tr><tr><td>VMW2</td><td>Azure VM</td><td>Windows</td><td>Log Analytics agent (MMA) only</td></tr><tr><td>VML1</td><td>Azure VM</td><td>Linux</td><td>Azure Monitor agent</td></tr><tr><td>SRV1</td><td>On-premises server</td><td>Windows</td><td>Azure Connected Machine agent (Arc) and Azure Monitor agent</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Data collection rule</th><th>Sources</th><th>Destination</th><th>Associated resources</th></tr><tr><td>DCR-Win</td><td>System and Application logs, performance counters</td><td>LAW1</td><td>VMW1, VMW2, SRV1</td></tr><tr><td>DCR-Syslog</td><td>Syslog</td><td>LAW1</td><td>VML1, VMW1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "VMW2 sends its System logs to LAW1 through DCR-Win.",
   "a": 1
  },
  {
   "l": "SRV1 sends its System logs to LAW1 through DCR-Win.",
   "a": 0
  },
  {
   "l": "VMW1 sends Syslog messages to LAW1 through DCR-Syslog.",
   "a": 1
  },
  {
   "l": "VMW1 can't be associated with two data collection rules at once.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>VMW2: No.</b> DCRs only apply to the <b>Azure Monitor agent</b>. The old Log Analytics agent (MMA, retired) doesn't read DCRs.</li><li><b>SRV1: Yes.</b> An on-premises server managed by Azure Arc, with the Azure Monitor agent, associates with DCRs like an Azure VM.</li><li><b>VMW1 Syslog: No.</b> Syslog is a Linux source; a Windows machine doesn't produce it. The association creates no data.</li><li><b>Two DCRs: No</b> (the statement is false). A machine can be associated with several DCRs, and a DCR with several machines.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules",
   "DCR-Win"
  ],
  "title": "DCR-Win | Resources",
  "menu": [
   "Overview",
   "*Resources",
   "Data sources"
  ],
  "rows": [
   [
    "VMW1",
    "Azure Monitor agent · data received"
   ],
   [
    "*VMW2",
    "No Azure Monitor agent"
   ],
   [
    "SRV1",
    "Azure Arc · data received"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "DCR = Azure Monitor agent (VM or Arc server). Several DCRs per machine are allowed."
},
{
 "id": "D5-213",
 "dom": 5,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Collection exhibit (click the <b>Collection</b> tab).</p><p>VMW2 must send its logs to LAW1 with DCR-Win, and only event 4625 from VMW1's Security log must be added.</p><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Collection",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>Machine</th><th>Type</th><th>OS</th><th>Installed agent</th></tr><tr><td>VMW1</td><td>Azure VM</td><td>Windows</td><td>Azure Monitor agent</td></tr><tr><td>VMW2</td><td>Azure VM</td><td>Windows</td><td>Log Analytics agent (MMA) only</td></tr><tr><td>VML1</td><td>Azure VM</td><td>Linux</td><td>Azure Monitor agent</td></tr><tr><td>SRV1</td><td>On-premises server</td><td>Windows</td><td>Azure Connected Machine agent (Arc) and Azure Monitor agent</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Data collection rule</th><th>Sources</th><th>Destination</th><th>Associated resources</th></tr><tr><td>DCR-Win</td><td>System and Application logs, performance counters</td><td>LAW1</td><td>VMW1, VMW2, SRV1</td></tr><tr><td>DCR-Syslog</td><td>Syslog</td><td>LAW1</td><td>VML1, VMW1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "For VMW2:",
   "o": [
    "Install the Azure Monitor agent",
    "Recreate DCR-Win in VMW2's region",
    "Add VMW2 to DCR-Syslog",
    "Enable boot diagnostics"
   ],
   "a": 0
  },
  {
   "l": "For event 4625:",
   "o": [
    "An XPath query in a DCR",
    "A diagnostic setting on VMW1",
    "An activity log alert",
    "A transformation in LAW1 only"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VMW2:</b> the association already exists; the <b>Azure Monitor agent</b> is missing (with a managed identity, which the portal enables at install).</li><li><b>4625:</b> a “Windows event logs” source in a DCR, with an <b>XPath query</b> like <code>Security!*[System[(EventID=4625)]]</code>, filters at the source: only those rows are sent and billed. A diagnostic setting doesn't collect guest logs.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Data collection rules",
   "DCR-Win"
  ],
  "title": "DCR-Win | Resources",
  "menu": [
   "Overview",
   "*Resources",
   "Data sources"
  ],
  "rows": [
   [
    "VMW1",
    "Azure Monitor agent · data received"
   ],
   [
    "*VMW2",
    "No Azure Monitor agent"
   ],
   [
    "SRV1",
    "Azure Arc · data received"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Filter as early as possible: XPath in the DCR."
},
{
 "id": "D5-214",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Retention exhibit (click the <b>Retention</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Retention",
   "h": "<p>Workspace <b>LAW1</b>, daily cap: 10 GB.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Table</th><th>Plan</th><th>Interactive retention</th><th>Total retention</th></tr><tr><td>Perf</td><td>Analytics</td><td>30 days</td><td>30 days</td></tr><tr><td>SecurityEvent</td><td>Analytics</td><td>90 days</td><td>2 years</td></tr><tr><td>AppTraces</td><td>Basic</td><td>30 days</td><td>1 year</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A normal KQL query can read SecurityEvent rows from a year ago.",
   "a": 1
  },
  {
   "l": "Perf rows from 45 days ago are still stored.",
   "a": 1
  },
  {
   "l": "You can raise SecurityEvent's interactive retention to 2 years.",
   "a": 0
  },
  {
   "l": "When the 10 GB cap is reached, ingestion of most data stops until the reset.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>SecurityEvent at 1 year: No.</b> Beyond 90 days, data is in <b>long-term retention</b>: you read it through a search job or a restore, not an interactive query.</li><li><b>Perf at 45 days: No.</b> Total retention is 30 days: the data is deleted.</li><li><b>Interactive at 2 years: Yes.</b> An Analytics table supports up to 730 days of interactive retention (and up to 12 years total).</li><li><b>Cap: Yes.</b> Once reached, ingestion stops until the reset time (except a few exempt data types). It's a cost guardrail that loses data.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "LAW1"
  ],
  "title": "LAW1 | Tables",
  "menu": [
   "Overview",
   "Logs",
   "*Tables",
   "Usage and estimated costs"
  ],
  "rows": [
   [
    "Perf",
    "Analytics · 30 d / 30 d"
   ],
   [
    "*SecurityEvent",
    "Analytics · 90 d / 2 years"
   ]
  ]
 },
 "keep": "Interactive = queries; long-term = search job or restore. Cap reached = data lost."
},
{
 "id": "D5-215",
 "dom": 5,
 "type": "single",
 "stem": "<p>You have the environment shown in the Retention exhibit (click the <b>Retention</b> tab).</p><p>An auditor asks for one account's failed sign-ins from 14 months ago, from SecurityEvent. The solution must minimize cost.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Retention",
   "h": "<p>Workspace <b>LAW1</b>, daily cap: 10 GB.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Table</th><th>Plan</th><th>Interactive retention</th><th>Total retention</th></tr><tr><td>Perf</td><td>Analytics</td><td>30 days</td><td>30 days</td></tr><tr><td>SecurityEvent</td><td>Analytics</td><td>90 days</td><td>2 years</td></tr><tr><td>AppTraces</td><td>Basic</td><td>30 days</td><td>1 year</td></tr></table></div>"
  }
 ],
 "opts": [
  "Run a search job on SecurityEvent",
  "Raise interactive retention to 2 years, then query",
  "Switch SecurityEvent to the Basic plan and query it",
  "Restore the whole LAW1 workspace into a new one"
 ],
 "ans": 0,
 "expl": "<p>A <b>search job</b> scans long-term retention and copies only the matching rows into a new table (_SRCH suffix), which you then query normally. It's the tool for finding a few old rows.</p><ul><li>Extending interactive retention doesn't bring back data already in long-term storage, and raises ongoing cost.</li><li>The Basic plan doesn't make old data queryable.</li><li>A restore targets a table and time range, not the whole workspace, and costs more for such a targeted need.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "LAW1"
  ],
  "title": "LAW1 | Tables",
  "menu": [
   "Overview",
   "Logs",
   "*Tables",
   "Usage and estimated costs"
  ],
  "rows": [
   [
    "Perf",
    "Analytics · 30 d / 30 d"
   ],
   [
    "*SecurityEvent",
    "Analytics · 90 d / 2 years"
   ]
  ]
 },
 "keep": "A few old rows: search job. A whole period to analyze: restore."
},
{
 "id": "D5-216",
 "dom": 5,
 "type": "single",
 "stem": "<p>You have the environment shown in the Backup exhibit (click the <b>Backup</b> tab).</p><p>Disk3 must be backed up every 4 hours, without backing up the rest of VM3.</p><p>What should you configure?</p>",
 "docs": [
  {
   "t": "Backup",
   "h": "<p>Paired regions: France Central ↔ France South, West Europe ↔ North Europe.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>VM</th><th>Region</th><th>OS</th><th>Detail</th></tr><tr><td>VM1</td><td>France Central</td><td>Windows Server</td><td>—</td></tr><tr><td>VM2</td><td>West Europe</td><td>Ubuntu</td><td>—</td></tr><tr><td>VM3</td><td>France Central</td><td>Windows Server</td><td>Data disk Disk3 (managed disk)</td></tr><tr><td>VM4</td><td>France Central</td><td>Windows Server</td><td>—</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Vault</th><th>Type</th><th>Region</th><th>Redundancy</th><th>Cross Region Restore</th><th>Protected items</th></tr><tr><td>RSV1</td><td>Recovery Services</td><td>France Central</td><td>GRS</td><td>Enabled</td><td>VM1 (daily policy, 30 days), VM4</td></tr><tr><td>RSV2</td><td>Recovery Services</td><td>West Europe</td><td>LRS</td><td>—</td><td>None</td></tr><tr><td>BV1</td><td>Backup vault</td><td>France Central</td><td>LRS</td><td>—</td><td>None</td></tr></table></div><p>The storage account <b>stdata</b> (France Central) contains the Azure Files share share1 and blob containers.</p>"
  }
 ],
 "opts": [
  "A disk backup in BV1, with a 4-hour policy",
  "An Enhanced VM policy in RSV1, excluding the other disks",
  "A standard VM policy in RSV1, run six times a day",
  "The MARS agent in VM3, limited to Disk3's volume"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Disk Backup</b>, in a Backup vault in the same region (BV1), backs up a managed disk with incremental snapshots, with a frequency of 1, 2, 4, 6, 8, or 12 hours, agentless.</p><ul><li>VM backup can exclude disks, but the OS disk is always included: that's not “Disk3 alone”.</li><li>A standard policy is daily (one backup a day).</li><li>MARS backs up files and folders, not a managed disk.</li></ul>",
 "portal": {
  "path": [
   "Backup vaults",
   "BV1"
  ],
  "title": "BV1 | Backup policies",
  "menu": [
   "Overview",
   "Backup instances",
   "*Backup policies"
  ],
  "rows": [
   [
    "*Azure Disks",
    "Every 4 hours · 7-day retention"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "One disk alone, several times a day: Azure Disk Backup (Backup vault)."
},
{
 "id": "D5-217",
 "dom": 5,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Access exhibit (click the <b>Access</b> tab).</p><p>User1 must be able to create and edit alert rules and action groups across Sub1, without being able to modify the VMs. You must follow the principle of least privilege.</p><p>Which <b>two</b> assignments each meet the need?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Access",
   "h": "<p>Subscription Sub1 contains RG1 (VM1 and VM2) and RG2 (the LAW2 workspace). VM1 sends its logs to the LAW1 workspace, whose access control mode is <b>Use resource or workspace permissions</b>. LAW2 is in <b>Require workspace permissions</b> mode.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Monitoring Reader</td><td>Sub1</td></tr><tr><td>User2</td><td>Monitoring Contributor</td><td>RG1</td></tr><tr><td>User3</td><td>Reader</td><td>VM1</td></tr><tr><td>User4</td><td>Log Analytics Reader</td><td>LAW2</td></tr><tr><td>User5</td><td>Reader</td><td>VM2</td></tr></table></div>"
  }
 ],
 "opts": [
  "Monitoring Contributor on Sub1, replacing Monitoring Reader",
  "Monitoring Contributor on Sub1, in addition to Monitoring Reader",
  "Log Analytics Contributor on LAW1 and LAW2, on top of the current role",
  "Virtual Machine Contributor on RG1 and RG2, on top of the current role"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p><b>Monitoring Contributor</b> on Sub1 grants creating alert rules and action groups across the subscription, with no write access to the VMs. Whether it replaces Monitoring Reader or is added to it, the effective permissions are the same (Monitoring Contributor includes read).</p><ul><li>Log Analytics Contributor covers workspaces (and collection settings), not alert rules across the subscription.</li><li>Virtual Machine Contributor would allow modifying the VMs.</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*User1",
    "Monitoring Contributor"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Alerts and action groups without touching resources: Monitoring Contributor."
},
{
 "id": "D5-218",
 "dom": 5,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Alerts exhibit (click the <b>Alerts</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Alerts",
   "h": "<p>VM1 is in RG1, VM3 is in RG2. Both resource groups are in Sub1.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Alert rule</th><th>Type</th><th>Target</th><th>Severity</th><th>Action group</th></tr><tr><td>AR1</td><td>Metric (CPU &gt; 80%)</td><td>VM1</td><td>Sev2</td><td>AG-Ops</td></tr><tr><td>AR2</td><td>Log search</td><td>VM3</td><td>Sev0</td><td>—</td></tr><tr><td>AR3</td><td>Metric (disk)</td><td>VM1</td><td>Sev0</td><td>AG-Ops</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Alert processing rule</th><th>Scope</th><th>Filter</th><th>Action</th><th>Schedule</th></tr><tr><td>APR1</td><td>RG1</td><td>—</td><td>Suppress notifications</td><td>Saturday and Sunday, all day</td></tr><tr><td>APR2</td><td>Sub1</td><td>Severity = Sev0</td><td>Apply action group AG-Ticket</td><td>Always</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "On Saturday, a fired AR1 alert appears in the portal's alert list.",
   "a": 0
  },
  {
   "l": "If VM1 is moved to RG2, APR1 no longer applies to VM1's alerts.",
   "a": 0
  },
  {
   "l": "AR2 must have an action group in order to fire.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Visible on Saturday: Yes.</b> A suppression rule only blocks <b>notifications</b>; the alert is created and visible.</li><li><b>VM1 in RG2: Yes.</b> A processing rule's scope applies to the alert's target resource. Outside RG1, VM1 is no longer covered by APR1.</li><li><b>Action group required: No.</b> A rule without an action group still fires; here, APR2 even adds AG-Ticket to it.</li></ul>",
 "portal": {
  "path": [
   "Monitor",
   "Alerts"
  ],
  "title": "Monitor | Alerts",
  "menu": [
   "*Alerts",
   "Alert rules",
   "Alert processing rules"
  ],
  "rows": [
   [
    "*AR1 · VM1 · Sev2",
    "Fired · notifications suppressed (APR1)"
   ]
  ]
 },
 "keep": "Suppression = no notification, but the alert exists."
},
{
 "id": "D5-219",
 "dom": 5,
 "type": "single",
 "stem": "<p>You have the environment shown in the Items exhibit (click the <b>Items</b> tab).</p><p>VM10 was just corrupted by an update. You must bring it back to its state of the 9th while keeping the same VM (name, network interface, IP address).</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Items",
   "h": "<p>The Recovery Services vault <b>RSV5</b> (France Central) has standard soft delete (14 days). Today is the 10th of the month.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Item</th><th>Protection state</th><th>Last backup</th><th>Note</th></tr><tr><td>VM10</td><td>Protection active</td><td>The 9th</td><td>Daily policy, 30 days</td></tr><tr><td>VM11</td><td>Protection stopped, data retained</td><td>The 1st</td><td>—</td></tr><tr><td>VM12</td><td>Soft deleted</td><td>The 4th</td><td>Data deleted on the 5th</td></tr><tr><td>VM13</td><td>Protection active</td><td>The 9th</td><td>VM deleted by mistake on the evening of the 9th</td></tr></table></div>"
  }
 ],
 "opts": [
  "Restore the point of the 9th with Replace existing",
  "Restore the point of the 9th with Create new VM",
  "Undelete VM10 in the RSV5 vault",
  "Run File Recovery on the point of the 9th"
 ],
 "ans": 0,
 "expl": "<p><b>Replace existing</b> swaps the existing VM's disks for the recovery point's, keeping the VM, its interface and network configuration. The VM must still exist, which it does.</p><ul><li>Create new VM would produce a new VM (different name, different interface).</li><li>Undelete is for deleted backup data, not a corrupted VM.</li><li>File Recovery only returns files.</li></ul>",
 "portal": {
  "path": [
   "Recovery Services vaults",
   "RSV5"
  ],
  "title": "RSV5 | Backup items",
  "menu": [
   "Overview",
   "*Backup items",
   "Backup jobs"
  ],
  "rows": [
   [
    "VM11",
    "Protection stopped"
   ],
   [
    "*VM12",
    "Soft deleted · 9 days remaining"
   ]
  ]
 },
 "keep": "Keep the same VM: Replace existing (the VM must exist)."
},
{
 "id": "D5-220",
 "dom": 5,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Retention exhibit (click the <b>Retention</b> tab).</p><p>LAW1's ingestion cost doubled because of the AppTraces table, which is only checked during incidents. Incident queries must remain possible over 30 days.</p><p>Which <b>two</b> actions reduce the cost?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Retention",
   "h": "<p>Workspace <b>LAW1</b>, daily cap: 10 GB.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Table</th><th>Plan</th><th>Interactive retention</th><th>Total retention</th></tr><tr><td>Perf</td><td>Analytics</td><td>30 days</td><td>30 days</td></tr><tr><td>SecurityEvent</td><td>Analytics</td><td>90 days</td><td>2 years</td></tr><tr><td>AppTraces</td><td>Basic</td><td>30 days</td><td>1 year</td></tr></table></div>"
  }
 ],
 "opts": [
  "Filter out unneeded traces with an ingestion-time transformation",
  "Reduce the trace volume sent by the app (log level)",
  "Increase AppTraces' interactive retention to 90 days",
  "Move AppTraces back to the Analytics plan to use the cap"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>Ingestion cost depends on the ingested <b>volume</b>. A <b>transformation</b> that drops useless rows before storage, or <b>lowering the app's log level</b>, reduces that volume.</p><ul><li>Extending retention adds cost.</li><li>AppTraces is already on the Basic plan, cheaper to ingest than Analytics; moving back to Analytics would raise the cost. The daily cap is a guardrail, not a discount.</li></ul>",
 "portal": {
  "path": [
   "Log Analytics workspaces",
   "LAW1"
  ],
  "title": "LAW1 | Tables",
  "menu": [
   "Overview",
   "Logs",
   "*Tables",
   "Usage and estimated costs"
  ],
  "rows": [
   [
    "Perf",
    "Analytics · 30 d / 30 d"
   ],
   [
    "*SecurityEvent",
    "Analytics · 90 d / 2 years"
   ]
  ]
 },
 "keep": "Pay less for ingestion = ingest less (filter, lower verbosity) or a cheaper plan."
}
);
