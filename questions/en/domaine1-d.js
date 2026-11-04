/* Domain 1: identities and governance (batch D : D1-111 to D1-160) */
AZ.questions.push(
{
 "id": "D1-113",
 "dom": 1,
 "type": "order",
 "stem": "<p>Your Microsoft Entra tenant uses the domain contoso.onmicrosoft.com. You need to ensure that users sign in with an address ending in <b>@contoso.com</b>.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>You <b>add</b> the domain in Entra, which provides a <b>TXT</b> (or MX) record to create at the domain's public DNS host. Once the record is in place, you <b>verify</b> the domain, which proves you own it. Finally, you can change the users' <b>UPN</b>.</p><p>A <b>private DNS zone</b> is only for name resolution inside virtual networks: Microsoft can't query it to verify the domain.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Custom domain names"
  ],
  "title": "contoso.com",
  "menu": [
   "*Custom domain names"
  ],
  "rows": [
   [
    "*Record type",
    "TXT"
   ],
   [
    "Value",
    "MS=ms12345678"
   ],
   [
    "Status",
    "Unverified"
   ]
  ],
  "btn": "Verify"
 },
 "keep": "Custom domain: add it, publish the TXT at the public DNS, verify, then change the UPNs.",
 "acts": [
  "Add contoso.com in Custom domain names",
  "Create, at the registrar, the DNS TXT record provided by Microsoft",
  "Verify the domain in the portal",
  "Change the users' user principal name (UPN) to the @contoso.com suffix",
  "Create a contoso.com private DNS zone in Azure"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ]
},
{
 "id": "D1-122",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to choose the minimum Microsoft Entra ID edition for each feature.</p><p>To answer, drag the appropriate edition to each feature. Each edition may be used once, more than once, or not at all.</p>",
 "srcLabel": "Editions",
 "tgtHead": [
  "Feature",
  "Minimum edition"
 ],
 "srcs": [
  "Microsoft Entra ID Free",
  "Microsoft Entra ID P1",
  "Microsoft Entra ID P2"
 ],
 "tgts": [
  {
   "l": "Create users and groups with assigned membership",
   "a": 0
  },
  {
   "l": "Groups with dynamic membership",
   "a": 1
  },
  {
   "l": "Privileged Identity Management (eligible roles)",
   "a": 2
  },
  {
   "l": "Conditional Access",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Free</b>: basic user and group management, basic single sign-on.</li><li><b>P1</b>: dynamic groups, group-based licensing, Conditional Access, password writeback.</li><li><b>P2</b>: everything in P1, plus Privileged Identity Management, ID Protection (risk detection), and access reviews.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Overview"
  ],
  "title": "Microsoft Entra ID | Licenses",
  "menu": [
   "Overview",
   "*Licenses"
  ],
  "rows": [
   [
    "Free",
    "Users, assigned groups"
   ],
   [
    "*P1",
    "Dynamic groups, Conditional Access, group-based licensing"
   ],
   [
    "*P2",
    "PIM, ID Protection, access reviews"
   ]
  ]
 },
 "keep": "P1 = dynamic + Conditional Access. P2 = PIM + risk + access reviews."
},
{
 "id": "D1-127",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>The storage account storage1 has a <b>Delete</b> (CanNotDelete) lock.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A user with the Storage Blob Data Contributor role can delete a blob in storage1.",
   "a": 0
  },
  {
   "l": "An Owner can change the redundancy level of storage1.",
   "a": 0
  },
  {
   "l": "An Owner can delete storage1 without removing the lock.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Delete a blob: Yes.</b> The lock protects the resource on the control plane. Data operations (reading, writing, deleting a blob) aren't affected. To protect data, use soft delete or immutability.</li><li><b>Change redundancy: Yes.</b> A Delete lock allows changes.</li><li><b>Delete storage1: No.</b> Even an Owner must first remove the lock.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Locks",
  "menu": [
   "Overview",
   "*Locks"
  ],
  "rows": [
   [
    "*Lock type",
    "Delete"
   ],
   [
    "Change redundancy",
    "Allowed"
   ],
   [
    "Delete a blob (data plane)",
    "Allowed"
   ]
  ]
 },
 "keep": "Delete lock: changes allowed, resource deletion blocked, data not protected."
},
{
 "id": "D1-130",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You need to move resources from the subscription Sub1 to the subscription Sub2.</p><p>For each of the following conditions, select Yes if it must be met. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Sub1 and Sub2 must be in the same management group",
   "a": 1
  },
  {
   "l": "The resources' providers must be registered in Sub2",
   "a": 0
  },
  {
   "l": "The resources must be stopped during the move",
   "a": 1
  },
  {
   "l": "Sub1 and Sub2 must be in the same tenant",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Same tenant: yes.</b> You can't move resources directly to a subscription in another tenant (you would first have to transfer the subscription).</li><li><b>Registered providers: yes.</b> Sub2 must be able to host that resource type.</li><li><b>Same management group: no.</b> The governance hierarchy doesn't matter.</li><li><b>Stopped resources: no.</b> Resources keep running during the move.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "Move to another subscription",
  "menu": [
   "*Resources",
   "Validate",
   "Review"
  ],
  "rows": [
   [
    "*Target subscription",
    "Sub2 (same tenant)"
   ],
   [
    "Required providers",
    "Registered in Sub2"
   ]
  ],
  "btn": "Next"
 },
 "keep": "Moving between subscriptions: same tenant, providers registered in the target."
},
{
 "id": "D1-133",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to add the tag Project=Alpha to the resource group RG1, <b>without removing</b> its existing tags.</p><p>How should you complete the Azure CLI command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Command",
   "o": [
    "update",
    "create",
    "add-value"
   ],
   "a": 0
  },
  {
   "l": "Operation",
   "o": [
    "Replace",
    "Merge",
    "Delete"
   ],
   "a": 1
  }
 ],
 "expl": "<p><code>az tag update --operation Merge</code> adds or updates the given tags without touching the others.</p><ul><li><b>Replace</b> would replace all tags with Project=Alpha alone.</li><li><b>Delete</b> would remove the tag.</li><li><code>az tag create --resource-id</code> also replaces the whole set of tags. <code>add-value</code> is for the subscription's old predefined tags.</li></ul><p>The PowerShell equivalent is <code>Update-AzTag -Operation Merge</code>.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Tags",
  "menu": [
   "Overview",
   "*Tags"
  ],
  "rows": [
   [
    "Environment",
    "Prod (kept)"
   ],
   [
    "*Project",
    "Alpha (added)"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Adding without overwriting = az tag update --operation Merge (Update-AzTag -Operation Merge).",
 "tpl": "az tag {0} --resource-id /subscriptions/&lt;id&gt;/resourceGroups/RG1 --operation {1} --tags Project=Alpha"
},
{
 "id": "D1-135",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You manage a management group hierarchy.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "The root management group can be deleted.",
   "a": 1
  },
  {
   "l": "A management group's display name can be changed.",
   "a": 0
  },
  {
   "l": "A management group's ID can be changed after it is created.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Delete the root: No.</b> The root group can be neither deleted nor moved.</li><li><b>Display name: Yes.</b> The name shown in the portal can be changed.</li><li><b>ID: No.</b> The ID is the unique identifier used in scope paths: it is set at creation.</li></ul>",
 "portal": {
  "path": [
   "Management groups",
   "MG-Prod"
  ],
  "title": "MG-Prod | Details",
  "menu": [
   "*Details",
   "Subscriptions"
  ],
  "rows": [
   [
    "ID",
    "mg-prod (fixed)"
   ],
   [
    "*Display name",
    "Production (editable)"
   ]
  ],
  "btn": "Rename"
 },
 "keep": "Management group: display name editable, ID fixed; the root can't be deleted."
},
{
 "id": "D1-139",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>The key vault KV1 uses the <b>Azure role-based access control</b> permission model. You need to assign the appropriate built-in role for each need, following the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "tgtHead": [
  "Need",
  "Role"
 ],
 "srcs": [
  "Key Vault Administrator",
  "Key Vault Secrets Officer",
  "Key Vault Secrets User",
  "Key Vault Reader"
 ],
 "tgts": [
  {
   "l": "An application reads a secret's value",
   "a": 2
  },
  {
   "l": "A developer creates, modifies, and deletes secrets",
   "a": 1
  },
  {
   "l": "An auditor sees secrets' metadata, without their values",
   "a": 3
  },
  {
   "l": "The security team manages all of the vault's data: keys, secrets, and certificates",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Secrets User</b>: reads secret contents.</li><li><b>Secrets Officer</b>: any action on secrets, except managing permissions.</li><li><b>Key Vault Reader</b>: reads metadata (names, dates…), never values.</li><li><b>Key Vault Administrator</b>: all operations on the vault's data (keys, secrets, certificates).</li></ul>",
 "portal": {
  "path": [
   "Key vaults",
   "KV1"
  ],
  "title": "KV1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)",
   "Secrets"
  ],
  "rows": [
   [
    "*Key Vault Secrets User",
    "app-web"
   ],
   [
    "Key Vault Secrets Officer",
    "dev1"
   ],
   [
    "Key Vault Reader",
    "auditor"
   ]
  ]
 },
 "keep": "Secrets: User = read, Officer = manage, Reader = metadata, Administrator = the whole data plane."
},
{
 "id": "D1-145",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You assign the built-in <b>Allowed locations</b> policy to the management group MG-EU. Only the France Central and West Europe regions must be allowed. The resource group RG-Sandbox must not be evaluated. The policy must block deployments right away.</p><p>How should you configure the assignment?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li><b>Exclusions: RG-Sandbox.</b> The resource group isn't evaluated.</li><li><b>Policy enforcement: Enabled.</b> With <b>Disabled</b> (enforcementMode DoNotEnforce), the Deny effect isn't applied: compliance is only calculated, which is used to test a policy.</li><li><b>Locations: France Central ; West Europe.</b></li><li><b>Managed identity: no.</b> It's only useful for Modify and DeployIfNotExists. Allowed locations uses Deny.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy",
  "menu": [
   "*Basics",
   "Parameters",
   "Remediation"
  ],
  "rows": [
   [
    "Scope",
    "MG-EU"
   ],
   [
    "*Exclusions",
    "RG-Sandbox"
   ],
   [
    "*Policy enforcement",
    "Enabled"
   ],
   [
    "Allowed locations",
    "France Central ; West Europe"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Policy enforcement Disabled = test mode (DoNotEnforce): nothing is blocked.",
 "win": {
  "title": "Assign policy",
  "sub": "Allowed locations",
  "rows": [
   {
    "k": "head",
    "t": "Basics"
   },
   {
    "k": "text",
    "l": "Scope",
    "t": "MG-EU"
   },
   {
    "k": "select",
    "l": "Exclusions",
    "o": [
     "None",
     "RG-Sandbox",
     "MG-EU"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Policy enforcement",
    "o": [
     "Enabled",
     "Disabled"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Parameters"
   },
   {
    "k": "select",
    "l": "Allowed locations",
    "o": [
     "France Central",
     "France Central ; West Europe",
     "All regions"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "Remediation"
   },
   {
    "k": "check",
    "l": "Create a Managed Identity",
    "a": false
   }
  ]
 }
},
{
 "id": "D1-146",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need to check which users have an Azure role on the resource group RG1, and add a new one.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Access control (IAM)",
 "expl": "<p><b>Access control (IAM)</b> shows role assignments (including inherited ones), lets you add some, and gives access to role definitions, deny assignments, and the Check access tool.</p><p><b>Policies</b> shows Azure Policy compliance; <b>Locks</b> manages locks; the activity log records operations.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Access control (IAM)",
  "menu": [
   "Overview",
   "Activity log",
   "*Access control (IAM)",
   "Tags"
  ],
  "rows": [
   [
    "Tabs",
    "Check access · Role assignments · Roles · Deny assignments"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Viewing and adding Azure roles = the scope's Access control (IAM).",
 "win": {
  "title": "RG1 | Resource group",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access control (IAM)",
     "Tags",
     "Resource visualizer",
     "Events"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Deployments",
     "Security",
     "Policies",
     "Properties",
     "Locks"
    ]
   },
   {
    "g": "Cost Management",
    "items": [
     "Cost analysis",
     "Cost alerts",
     "Budgets"
    ]
   }
  ]
 }
},
{
 "id": "D1-150",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You manage the identities of your Microsoft Entra tenant.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "A deleted user can be restored for:",
   "o": [
    "7 days",
    "30 days",
    "90 days"
   ],
   "a": 1
  },
  {
   "l": "A deleted security group can be restored for:",
   "o": [
    "0 days (permanent deletion)",
    "30 days",
    "90 days"
   ],
   "a": 0
  },
  {
   "l": "The Azure activity log keeps events for:",
   "o": [
    "30 days",
    "90 days",
    "365 days"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Users: 30 days</b> in Deleted users.</li><li><b>Security groups: immediate permanent deletion.</b> Only Microsoft 365 groups stay soft-deleted for 30 days.</li><li><b>Activity log: 90 days.</b> To keep it longer, send it to Log Analytics or a storage account with a diagnostic setting.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users"
  ],
  "title": "Deleted users",
  "menu": [
   "All users",
   "*Deleted users"
  ],
  "rows": [
   [
    "*User",
    "30 days"
   ],
   [
    "Microsoft 365 group",
    "30 days"
   ],
   [
    "Security group",
    "0 days"
   ],
   [
    "Azure activity log",
    "90 days"
   ]
  ]
 },
 "keep": "User and Microsoft 365 group: 30 days. Security group: none. Activity log: 90 days."
},
{
 "id": "D1-155",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Your company wants to lower the bill for 20 production Windows Server VMs that will run continuously for 3 years. It owns Windows Server licenses with Software Assurance.</p><p>For each of the following actions, select Yes if it's part of the combination. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Enable Azure Hybrid Benefit on the VMs",
   "a": 0
  },
  {
   "l": "Switch all disks to Standard HDD",
   "a": 1
  },
  {
   "l": "Convert the production VMs to Spot VMs",
   "a": 1
  },
  {
   "l": "Buy 3-year VM reservations",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>3-year reservations: yes.</b> They greatly reduce compute cost for a continuous workload.</li><li><b>Azure Hybrid Benefit: yes.</b> It removes the Windows license cost. The two discounts stack.</li><li><b>Spot VMs: no.</b> They can be interrupted, which is unacceptable in production.</li><li><b>Standard HDD: no.</b> The savings are small and it degrades production performance.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Prod1"
  ],
  "title": "VM-Prod1 | Configuration",
  "menu": [
   "Overview",
   "*Configuration"
  ],
  "rows": [
   [
    "*Licensing · Use existing Windows Server license",
    "Yes (Azure Hybrid Benefit)"
   ],
   [
    "Reservation",
    "3 years · shared scope"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Reservations and Hybrid Benefit stack: the first lowers compute, the second the license."
},
{
 "id": "D1-158",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You compare Microsoft Entra roles and Azure roles.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "The Global Administrator role gives access to all Azure resources in the subscriptions by default.",
   "a": 1
  },
  {
   "l": "The Owner role on a subscription allows creating users in Microsoft Entra ID.",
   "a": 1
  },
  {
   "l": "The same user can have both Microsoft Entra roles and Azure roles.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Global Administrator and resources: No.</b> They have no access to Azure resources by default; they must elevate their access (User Access Administrator at the root).</li><li><b>Owner and users: No.</b> An Azure role grants no rights on the directory.</li><li><b>Both at once: Yes.</b> The two systems are independent and can be combined.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Properties"
  ],
  "title": "Microsoft Entra ID | Properties",
  "menu": [
   "Overview",
   "*Properties"
  ],
  "rows": [
   [
    "*Access management for Azure resources",
    "No (default)"
   ]
  ]
 },
 "keep": "Entra roles and Azure roles are separate and can be combined; a Global Administrator must elevate access."
}
);
