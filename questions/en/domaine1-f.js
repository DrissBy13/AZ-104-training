/* Domain 1: identity and governance (batch F: D1-231 to D1-250, exam-style exhibit questions) */
AZ.questions.push(
{
 "id": "D1-231",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Roles exhibit (click the <b>Roles</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Roles",
   "h": "<p>Hierarchy: root group → <b>MG-Corp</b> → <b>MG-Prod</b> (subscriptions Sub-Prod1 and Sub-Prod2) and <b>MG-Dev</b> (subscription Sub-Dev). Sub-Prod1 contains RG-App (VM1, st1) and RG-Net (VNet1). RG-Net has a <b>CanNotDelete</b> lock.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Reader</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributor</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Owner</td><td>RG-App</td></tr><tr><td>User4</td><td>Virtual Machine Contributor</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>User Access Administrator</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Global Administrator (Microsoft Entra role)</td><td>Tenant</td></tr><tr><td>G1 (member: User7)</td><td>Contributor</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 can view the resources in Sub-Dev.",
   "a": 0
  },
  {
   "l": "User2 can create a virtual machine in Sub-Prod2.",
   "a": 0
  },
  {
   "l": "User2 can assign roles in Sub-Prod1.",
   "a": 1
  },
  {
   "l": "User3 can assign another user the Contributor role on st1.",
   "a": 0
  },
  {
   "l": "User6 can view Sub-Prod1's resources without any other action.",
   "a": 1
  }
 ],
 "expl": "<p>An Azure role assignment inherits downward: management group → subscriptions → resource groups → resources.</p><ul><li><b>User1: Yes.</b> Reader on MG-Corp covers MG-Dev and Sub-Dev.</li><li><b>User2 creates a VM: Yes.</b> Contributor on MG-Prod covers Sub-Prod2.</li><li><b>User2 assigns roles: No.</b> Contributor excludes Microsoft.Authorization/*/Write.</li><li><b>User3: Yes.</b> Owner on RG-App includes access management, and st1 is in RG-App.</li><li><b>User6: No.</b> Microsoft Entra roles and Azure roles are separate. A Global Administrator must first elevate access (Access management for Azure resources) to get User Access Administrator at the root.</li></ul>",
 "portal": {
  "path": [
   "Sub-Dev"
  ],
  "title": "Sub-Dev | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*User1",
    "Reader (inherited from MG-Corp)"
   ]
  ],
  "btn": "Check access"
 },
 "keep": "Downward inheritance. Contributor ≠ access management. Entra roles ≠ Azure roles."
},
{
 "id": "D1-232",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Roles exhibit (click the <b>Roles</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Roles",
   "h": "<p>Hierarchy: root group → <b>MG-Corp</b> → <b>MG-Prod</b> (subscriptions Sub-Prod1 and Sub-Prod2) and <b>MG-Dev</b> (subscription Sub-Dev). Sub-Prod1 contains RG-App (VM1, st1) and RG-Net (VNet1). RG-Net has a <b>CanNotDelete</b> lock.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Reader</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributor</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Owner</td><td>RG-App</td></tr><tr><td>User4</td><td>Virtual Machine Contributor</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>User Access Administrator</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Global Administrator (Microsoft Entra role)</td><td>Tenant</td></tr><tr><td>G1 (member: User7)</td><td>Contributor</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User4 can delete VM1.",
   "a": 0
  },
  {
   "l": "User4 can create a storage account in RG-App.",
   "a": 1
  },
  {
   "l": "User5 can create a virtual machine in Sub-Dev with their current rights.",
   "a": 1
  },
  {
   "l": "User7 can add a subnet to VNet1.",
   "a": 0
  },
  {
   "l": "User7 can delete VNet1.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User4 deletes VM1: Yes.</b> Virtual Machine Contributor manages VMs, including deleting them.</li><li><b>User4 creates a storage account: No.</b> That role doesn't cover Microsoft.Storage/storageAccounts/write.</li><li><b>User5: No.</b> User Access Administrator only manages role assignments. They could assign themselves Contributor, but that's not a current right.</li><li><b>User7 adds a subnet: Yes.</b> Contributor through G1, and a CanNotDelete lock allows changes.</li><li><b>User7 deletes VNet1: No.</b> RG-Net's lock applies to VNet1, whatever the role.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Net"
  ],
  "title": "RG-Net | Locks",
  "menu": [
   "Overview",
   "Access control (IAM)",
   "*Locks"
  ],
  "rows": [
   [
    "*lock-net",
    "Delete (CanNotDelete)"
   ]
  ]
 },
 "keep": "A lock overrides every role. CanNotDelete = changes allowed."
},
{
 "id": "D1-233",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Roles exhibit (click the <b>Roles</b> tab).</p><p>You must grant the access below following the principle of least privilege. Which role and scope should you choose?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Roles",
   "h": "<p>Hierarchy: root group → <b>MG-Corp</b> → <b>MG-Prod</b> (subscriptions Sub-Prod1 and Sub-Prod2) and <b>MG-Dev</b> (subscription Sub-Dev). Sub-Prod1 contains RG-App (VM1, st1) and RG-Net (VNet1). RG-Net has a <b>CanNotDelete</b> lock.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Reader</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributor</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Owner</td><td>RG-App</td></tr><tr><td>User4</td><td>Virtual Machine Contributor</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>User Access Administrator</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Global Administrator (Microsoft Entra role)</td><td>Tenant</td></tr><tr><td>G1 (member: User7)</td><td>Contributor</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User8 must manage VMs in every production subscription — role:",
   "o": [
    "Contributor",
    "Virtual Machine Contributor",
    "Owner",
    "Reader"
   ],
   "a": 1
  },
  {
   "l": "User8 — scope:",
   "o": [
    "MG-Corp",
    "MG-Prod",
    "Sub-Prod1",
    "RG-App"
   ],
   "a": 1
  },
  {
   "l": "User9 must assign roles in RG-App only — role:",
   "o": [
    "Owner",
    "User Access Administrator",
    "Contributor",
    "Reader"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>User8:</b> Virtual Machine Contributor is enough to manage VMs. Production subscriptions all sit under <b>MG-Prod</b>: one assignment covers them, now and later (MG-Corp would also include Sub-Dev).</li><li><b>User9:</b> User Access Administrator on RG-App lets them manage assignments without changing resources (Owner would grant both).</li></ul>",
 "portal": {
  "path": [
   "MG-Prod"
  ],
  "title": "MG-Prod | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*User8",
    "Virtual Machine Contributor"
   ]
  ],
  "btn": "Check access"
 },
 "keep": "Least privilege: the most specific role, at the highest scope that doesn't overreach."
},
{
 "id": "D1-234",
 "dom": 1,
 "type": "single",
 "stem": "<p>You have the environment shown in the Roles exhibit (click the <b>Roles</b> tab).</p><p>User6 must be able to assign Azure roles in every subscription for a one-off task.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Roles",
   "h": "<p>Hierarchy: root group → <b>MG-Corp</b> → <b>MG-Prod</b> (subscriptions Sub-Prod1 and Sub-Prod2) and <b>MG-Dev</b> (subscription Sub-Dev). Sub-Prod1 contains RG-App (VM1, st1) and RG-Net (VNet1). RG-Net has a <b>CanNotDelete</b> lock.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Reader</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributor</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Owner</td><td>RG-App</td></tr><tr><td>User4</td><td>Virtual Machine Contributor</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>User Access Administrator</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Global Administrator (Microsoft Entra role)</td><td>Tenant</td></tr><tr><td>G1 (member: User7)</td><td>Contributor</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "opts": [
  "Enable “Access management for Azure resources” for User6",
  "Assign User6 the Privileged Role Administrator role in Microsoft Entra",
  "Add User6 to group G1, Contributor on RG-Net",
  "Assign User6 the Reader role on the MG-Corp group"
 ],
 "ans": 0,
 "expl": "<p>A Global Administrator can <b>elevate access</b>: the “Access management for Azure resources” option (Microsoft Entra ID properties) grants them User Access Administrator at the root (/). Turn it off once the task is done.</p><ul><li>Privileged Role Administrator manages Microsoft Entra roles, not Azure roles.</li><li>Contributor or Reader can't assign roles.</li></ul>",
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
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Global Administrator → elevate access → User Access Administrator at the root."
},
{
 "id": "D1-235",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Policies exhibit (click the <b>Policies</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Policies",
   "h": "<p>Same hierarchy: MG-Corp contains MG-Prod (Sub-Prod1, Sub-Prod2) and MG-Dev (Sub-Dev). The RG-App group in Sub-Prod1 has the tag <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Assignment</th><th>Definition</th><th>Effect</th><th>Scope</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Allowed locations: France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Require a CostCenter tag on resource groups</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Inherit the CostCenter tag from the resource group if missing</td><td>Modify (managed identity with the required role)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Allowed virtual machine size SKUs: D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>Before PA3 and PA4, RG-App already contained the VM <b>VM-old</b> (size B2s, no tag).</p>"
  }
 ],
 "rows": [
  {
   "l": "You can create a storage account in North Europe in Sub-Dev.",
   "a": 0
  },
  {
   "l": "You can create a storage account in North Europe in Sub-Prod2.",
   "a": 1
  },
  {
   "l": "You can create a resource group with no tag in Sub-Prod1.",
   "a": 1
  },
  {
   "l": "You can create, in Sub-Prod1, a CostCenter-tagged resource group located in North Europe.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Sub-Dev: Yes.</b> Sub-Dev is excluded from PA1.</li><li><b>Sub-Prod2: No.</b> PA1, assigned on MG-Corp, applies to Sub-Prod2: North Europe isn't allowed.</li><li><b>Untagged group: No.</b> PA2 denies resource groups without CostCenter.</li><li><b>Group in North Europe: Yes.</b> The built-in “Allowed locations” policy doesn't apply to resource groups (there's a separate policy for them), and the tag satisfies PA2.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Policy | Compliance",
  "menu": [
   "Overview",
   "*Compliance",
   "Remediation",
   "Assignments"
  ],
  "rows": [
   [
    "PA3",
    "VM-old: non-compliant (missing tag)"
   ],
   [
    "*PA4",
    "VM-old: non-compliant (B2s)"
   ]
  ]
 },
 "keep": "“Allowed locations” ignores resource groups. An exclusion removes a scope from the assignment."
},
{
 "id": "D1-236",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Policies exhibit (click the <b>Policies</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Policies",
   "h": "<p>Same hierarchy: MG-Corp contains MG-Prod (Sub-Prod1, Sub-Prod2) and MG-Dev (Sub-Dev). The RG-App group in Sub-Prod1 has the tag <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Assignment</th><th>Definition</th><th>Effect</th><th>Scope</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Allowed locations: France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Require a CostCenter tag on resource groups</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Inherit the CostCenter tag from the resource group if missing</td><td>Modify (managed identity with the required role)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Allowed virtual machine size SKUs: D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>Before PA3 and PA4, RG-App already contained the VM <b>VM-old</b> (size B2s, no tag).</p>"
  }
 ],
 "rows": [
  {
   "l": "A new VM created in RG-App without a tag gets CostCenter = 42.",
   "a": 0
  },
  {
   "l": "VM-old automatically gets the CostCenter = 42 tag at the next evaluation.",
   "a": 1
  },
  {
   "l": "Creating a B2s VM in RG-App is denied.",
   "a": 1
  },
  {
   "l": "VM-old is flagged as non-compliant with PA4.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>New VM: Yes.</b> The Modify effect acts on create and update requests: the tag is added on the fly.</li><li><b>VM-old: No.</b> Existing resources are only changed by a <b>remediation task</b>.</li><li><b>B2s denied: No.</b> PA4 is Audit: creation succeeds, and the VM is flagged non-compliant.</li><li><b>VM-old non-compliant: Yes.</b> Evaluation also covers existing resources.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Policy | Compliance",
  "menu": [
   "Overview",
   "*Compliance",
   "Remediation",
   "Assignments"
  ],
  "rows": [
   [
    "PA3",
    "VM-old: non-compliant (missing tag)"
   ],
   [
    "*PA4",
    "VM-old: non-compliant (B2s)"
   ]
  ]
 },
 "keep": "Modify/DeployIfNotExists: new resources right away, existing ones through a remediation task."
},
{
 "id": "D1-237",
 "dom": 1,
 "type": "single",
 "stem": "<p>You have the environment shown in the Policies exhibit (click the <b>Policies</b> tab).</p><p>VM-old and the other existing resources in Sub-Prod1 must get their group's CostCenter tag.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Policies",
   "h": "<p>Same hierarchy: MG-Corp contains MG-Prod (Sub-Prod1, Sub-Prod2) and MG-Dev (Sub-Dev). The RG-App group in Sub-Prod1 has the tag <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Assignment</th><th>Definition</th><th>Effect</th><th>Scope</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Allowed locations: France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Require a CostCenter tag on resource groups</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Inherit the CostCenter tag from the resource group if missing</td><td>Modify (managed identity with the required role)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Allowed virtual machine size SKUs: D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>Before PA3 and PA4, RG-App already contained the VM <b>VM-old</b> (size B2s, no tag).</p>"
  }
 ],
 "opts": [
  "Create a remediation task for PA3",
  "Start an on-demand compliance scan",
  "Change PA3's effect from Modify to Append",
  "Delete and recreate the PA3 assignment"
 ],
 "ans": 0,
 "expl": "<p>A <b>remediation task</b> applies the Modify effect to existing non-compliant resources, using the assignment's managed identity.</p><ul><li>An on-demand scan refreshes compliance state without changing anything.</li><li>Append doesn't fix existing resources either.</li><li>Recreating the assignment doesn't touch existing resources.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Remediation"
  ],
  "title": "Policy | Remediation",
  "menu": [
   "Compliance",
   "*Remediation"
  ],
  "rows": [
   [
    "*PA3",
    "Resources to remediate: 12"
   ]
  ],
  "btn": "Remediate"
 },
 "keep": "Fix existing resources = remediation task."
},
{
 "id": "D1-238",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Policies exhibit (click the <b>Policies</b> tab).</p><p>What should you configure for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Policies",
   "h": "<p>Same hierarchy: MG-Corp contains MG-Prod (Sub-Prod1, Sub-Prod2) and MG-Dev (Sub-Dev). The RG-App group in Sub-Prod1 has the tag <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Assignment</th><th>Definition</th><th>Effect</th><th>Scope</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Allowed locations: France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Require a CostCenter tag on resource groups</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Inherit the CostCenter tag from the resource group if missing</td><td>Modify (managed identity with the required role)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Allowed virtual machine size SKUs: D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>Before PA3 and PA4, RG-App already contained the VM <b>VM-old</b> (size B2s, no tag).</p>"
  }
 ],
 "rows": [
  {
   "l": "Sub-Dev must no longer be subject to PA1, permanently:",
   "o": [
    "An exclusion",
    "An exemption with an end date",
    "A lock",
    "A remediation task"
   ],
   "a": 0
  },
  {
   "l": "RG-Lab must escape PA4 for 30 days only:",
   "o": [
    "An exclusion",
    "An exemption with an end date",
    "A lock",
    "A remediation task"
   ],
   "a": 1
  },
  {
   "l": "Test PA1 on Sub-Prod2 without blocking any creation:",
   "o": [
    "Policy enforcement: Disabled",
    "Deny effect",
    "A non-compliance message",
    "An exclusion of Sub-Prod2"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Permanent → exclusion</b> (notScopes) on the assignment.</li><li><b>Temporary → exemption</b>, with an expiration date and a category (Waiver or Mitigated).</li><li><b>Test without blocking → enforcement disabled</b> (DoNotEnforce): compliance is evaluated, but the Deny effect isn't applied.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Policy | Compliance",
  "menu": [
   "Overview",
   "*Compliance",
   "Remediation",
   "Assignments"
  ],
  "rows": [
   [
    "PA3",
    "VM-old: non-compliant (missing tag)"
   ],
   [
    "*PA4",
    "VM-old: non-compliant (B2s)"
   ]
  ]
 },
 "keep": "Exclusion = permanent. Exemption = tracked and time-bound. DoNotEnforce = testing."
},
{
 "id": "D1-239",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Locks exhibit (click the <b>Locks</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Locks",
   "h": "<p>Subscription Sub-Prod2: RG-Data has a <b>ReadOnly</b> lock; RG-Web has no lock. RG-Data contains VM2 (stopped and deallocated) and the st2 account; RG-Web contains the app1 app. Admin1 is Owner of Sub-Prod2. User1 has the Storage Blob Data Reader role on st2.</p>"
  }
 ],
 "rows": [
  {
   "l": "Admin1 can start VM2.",
   "a": 1
  },
  {
   "l": "User1 can read st2's blobs with their Microsoft Entra account.",
   "a": 0
  },
  {
   "l": "Admin1 can display st2's access keys in the portal.",
   "a": 1
  },
  {
   "l": "Admin1 can move app1 to RG-Data.",
   "a": 1
  }
 ],
 "expl": "<p>A ReadOnly lock blocks every management-plane write and delete operation, including POST actions, for everyone, even Owners.</p><ul><li><b>Start VM2: No.</b> Starting is a write action (POST start).</li><li><b>User1: Yes.</b> Locks don't apply to the data plane: reading blobs with Microsoft Entra works.</li><li><b>st2 keys: No.</b> Listing keys is a POST action (listKeys), so it's blocked.</li><li><b>Move app1: No.</b> The ReadOnly-locked target group refuses writes.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Data"
  ],
  "title": "RG-Data | Locks",
  "menu": [
   "Overview",
   "*Locks"
  ],
  "rows": [
   [
    "*freeze",
    "Read-only"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "ReadOnly: no writes or POSTs (start, listKeys). Data plane unaffected."
},
{
 "id": "D1-240",
 "dom": 1,
 "type": "single",
 "stem": "<p>You have the environment shown in the Locks exhibit (click the <b>Locks</b> tab).</p><p>Admin1 must resize VM2 today. The lock must protect RG-Data the rest of the time.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Locks",
   "h": "<p>Subscription Sub-Prod2: RG-Data has a <b>ReadOnly</b> lock; RG-Web has no lock. RG-Data contains VM2 (stopped and deallocated) and the st2 account; RG-Web contains the app1 app. Admin1 is Owner of Sub-Prod2. User1 has the Storage Blob Data Reader role on st2.</p>"
  }
 ],
 "opts": [
  "Delete the lock, resize VM2, then recreate the lock",
  "Assign Admin1 Virtual Machine Contributor on VM2 for the change",
  "Replace the lock with a lock on VM2 only",
  "Add an exclusion for VM2 to the lock on RG-Data"
 ],
 "ans": 0,
 "expl": "<p>No role bypasses a lock. Admin1, an Owner, has the Microsoft.Authorization/locks/delete action: they remove the lock, make the change, then recreate it.</p><ul><li>An extra role doesn't change the lock.</li><li>A lock on VM2 would also block it.</li><li>Locks have no exclusions.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Data"
  ],
  "title": "RG-Data | Locks",
  "menu": [
   "Overview",
   "*Locks"
  ],
  "rows": [
   [
    "*freeze",
    "Read-only"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Lock: remove it, act, put it back. No exclusions possible."
},
{
 "id": "D1-241",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Custom role exhibit (click the <b>Custom role</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Custom role",
   "h": "<p>Custom role <b>VM Operator</b>:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Property</th><th>Value</th></tr><tr><td>Actions</td><td>Microsoft.Compute/virtualMachines/read<br>Microsoft.Compute/virtualMachines/start/action<br>Microsoft.Compute/virtualMachines/restart/action<br>Microsoft.Compute/virtualMachines/deallocate/action</td></tr><tr><td>NotActions</td><td>—</td></tr><tr><td>AssignableScopes</td><td>/subscriptions/&lt;Sub-Prod1&gt;</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "You can assign VM Operator on a resource group in Sub-Prod1.",
   "a": 0
  },
  {
   "l": "You can assign VM Operator on Sub-Prod2.",
   "a": 1
  },
  {
   "l": "A user with VM Operator can resize a VM.",
   "a": 1
  },
  {
   "l": "A user with VM Operator and Reader on the same VM can stop (deallocate) it.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Group in Sub-Prod1: Yes.</b> A role is assignable on its AssignableScopes and any child scope.</li><li><b>Sub-Prod2: No.</b> Outside the assignable scopes.</li><li><b>Resize: No.</b> That needs Microsoft.Compute/virtualMachines/write.</li><li><b>Stop: Yes.</b> deallocate/action is granted; role permissions add up (Reader takes nothing away).</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub-Prod1",
   "Roles"
  ],
  "title": "VM Operator | Assignable scopes",
  "menu": [
   "Permissions",
   "*Assignable scopes",
   "JSON"
  ],
  "rows": [
   [
    "*/subscriptions/Sub-Prod1",
    "Assignable here and below"
   ]
  ]
 },
 "keep": "Assignable on AssignableScopes and below. Roles add up."
},
{
 "id": "D1-242",
 "dom": 1,
 "type": "single",
 "stem": "<p>You have the environment shown in the Custom role exhibit (click the <b>Custom role</b> tab).</p><p>Operators must use VM Operator in Sub-Prod1, Sub-Prod2, and any future MG-Prod subscription, with a single assignment.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Custom role",
   "h": "<p>Custom role <b>VM Operator</b>:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Property</th><th>Value</th></tr><tr><td>Actions</td><td>Microsoft.Compute/virtualMachines/read<br>Microsoft.Compute/virtualMachines/start/action<br>Microsoft.Compute/virtualMachines/restart/action<br>Microsoft.Compute/virtualMachines/deallocate/action</td></tr><tr><td>NotActions</td><td>—</td></tr><tr><td>AssignableScopes</td><td>/subscriptions/&lt;Sub-Prod1&gt;</td></tr></table></div>"
  }
 ],
 "opts": [
  "Add MG-Prod to AssignableScopes, then assign the role on MG-Prod",
  "Add Sub-Prod2 to AssignableScopes, then assign it twice",
  "Clone VM Operator into each subscription and assign it each time",
  "Assign VM Operator on Sub-Prod1: inheritance covers the others"
 ],
 "ans": 0,
 "expl": "<p>Adding the <b>MG-Prod</b> management group to AssignableScopes lets you assign the role on MG-Prod: the assignment inherits to all its subscriptions, including future ones. (This role has no DataActions, which allows a management group scope.)</p><ul><li>Adding Sub-Prod2 needs two assignments and doesn't cover future subscriptions.</li><li>Duplicating the role multiplies maintenance.</li><li>Inheritance flows down, not from one subscription to another.</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub-Prod1",
   "Roles"
  ],
  "title": "VM Operator | Assignable scopes",
  "menu": [
   "Permissions",
   "*Assignable scopes",
   "JSON"
  ],
  "rows": [
   [
    "*/subscriptions/Sub-Prod1",
    "Assignable here and below"
   ]
  ]
 },
 "keep": "One role for a management group: add it to AssignableScopes (no DataActions)."
},
{
 "id": "D1-243",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Costs exhibit (click the <b>Costs</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Costs",
   "h": "<p>Budget <b>B-Prod1</b> on Sub-Prod1: €1,000 per month.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Alert condition</th><th>Threshold</th><th>Recipient</th></tr><tr><td>Actual cost</td><td>80%</td><td>Email to the finance team</td></tr><tr><td>Forecasted cost</td><td>100%</td><td>Action group AG-Cost (runbook that stops RG-Test's VMs)</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "When actual cost reaches €1,000, all resources in Sub-Prod1 are stopped.",
   "a": 1
  },
  {
   "l": "The forecasted-cost alert can fire while actual cost is still below €1,000.",
   "a": 0
  },
  {
   "l": "When the forecasted-cost alert fires, RG-Test's VMs can be stopped automatically.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Stop everything: No.</b> A budget doesn't block or stop anything by itself: it alerts.</li><li><b>Forecast: Yes.</b> The alert fires when the end-of-period projection exceeds the threshold, before actual spending.</li><li><b>Runbook: Yes.</b> An action group tied to a budget alert can run a runbook, a function, or a webhook: that's how you automate a reaction.</li></ul>",
 "portal": {
  "path": [
   "Cost Management",
   "Budgets"
  ],
  "title": "B-Prod1 | Alerts",
  "menu": [
   "Overview",
   "*Alert conditions"
  ],
  "rows": [
   [
    "Actual 80%",
    "Email"
   ],
   [
    "*Forecasted 100%",
    "AG-Cost"
   ]
  ]
 },
 "keep": "Budget = alerts (actual or forecast), never an automatic stop without an action group."
},
{
 "id": "D1-244",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Directory exhibit (click the <b>Directory</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Directory",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Type</th><th>Source</th><th>Department</th></tr><tr><td>U1</td><td>Member</td><td>Synced from on-premises AD</td><td>Sales</td></tr><tr><td>U2</td><td>Member</td><td>Cloud</td><td>Sales</td></tr><tr><td>U3</td><td>Guest</td><td>Fabrikam (B2B)</td><td>—</td></tr><tr><td>A1</td><td>Member</td><td>Cloud</td><td>IT</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Object</th><th>Detail</th></tr><tr><td>G-Sales</td><td>Security group, dynamic membership: user.department -eq \"Sales\"</td></tr><tr><td>AU-Lyon</td><td>Administrative unit containing U1 and U2</td></tr><tr><td>A1</td><td>User Administrator, scoped to AU-Lyon</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "A1 can reset U2's password.",
   "a": 0
  },
  {
   "l": "A1 can reset U3's password.",
   "a": 1
  },
  {
   "l": "A1 can change U1's department in Microsoft Entra ID.",
   "a": 1
  },
  {
   "l": "You can add A1 to the G-Sales group manually.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>U2: Yes.</b> U2 is in AU-Lyon, where A1 is User Administrator.</li><li><b>U3: No.</b> U3 isn't in the administrative unit: A1's role doesn't cover them.</li><li><b>U1's department: No.</b> U1 is synced: its attributes are managed in on-premises AD, the source of authority.</li><li><b>G-Sales: No.</b> A dynamic group doesn't allow adding members by hand: only the rule decides.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Administrative units",
   "AU-Lyon"
  ],
  "title": "AU-Lyon | Roles and administrators",
  "menu": [
   "Users",
   "Groups",
   "*Roles and administrators"
  ],
  "rows": [
   [
    "*User Administrator",
    "A1"
   ]
  ]
 },
 "keep": "Role scoped to an administrative unit = its members only. Synced = edit in AD."
},
{
 "id": "D1-245",
 "dom": 1,
 "type": "single",
 "stem": "<p>You have the environment shown in the Directory exhibit (click the <b>Directory</b> tab).</p><p>A1 must be able to reset U3's password, without gaining rights over other users in the tenant.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Directory",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Type</th><th>Source</th><th>Department</th></tr><tr><td>U1</td><td>Member</td><td>Synced from on-premises AD</td><td>Sales</td></tr><tr><td>U2</td><td>Member</td><td>Cloud</td><td>Sales</td></tr><tr><td>U3</td><td>Guest</td><td>Fabrikam (B2B)</td><td>—</td></tr><tr><td>A1</td><td>Member</td><td>Cloud</td><td>IT</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Object</th><th>Detail</th></tr><tr><td>G-Sales</td><td>Security group, dynamic membership: user.department -eq \"Sales\"</td></tr><tr><td>AU-Lyon</td><td>Administrative unit containing U1 and U2</td></tr><tr><td>A1</td><td>User Administrator, scoped to AU-Lyon</td></tr></table></div>"
  }
 ],
 "opts": [
  "Add U3 to the AU-Lyon administrative unit",
  "Assign A1 User Administrator on the tenant",
  "Convert U3 to a member, then add them to G-Sales",
  "Assign A1 Privileged Role Administrator on AU-Lyon"
 ],
 "ans": 0,
 "expl": "<p>A1's role applies to AU-Lyon's members. Adding <b>U3 to AU-Lyon</b> extends it to U3, and only U3.</p><ul><li>A tenant-wide assignment would cover every user.</li><li>Membership in G-Sales doesn't place U3 in the administrative unit.</li><li>Privileged Role Administrator manages role assignments, not passwords.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Administrative units",
   "AU-Lyon"
  ],
  "title": "AU-Lyon | Roles and administrators",
  "menu": [
   "Users",
   "Groups",
   "*Roles and administrators"
  ],
  "rows": [
   [
    "*User Administrator",
    "A1"
   ]
  ]
 },
 "keep": "Extend a delegated role: add the object to the administrative unit."
},
{
 "id": "D1-246",
 "dom": 1,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Roles exhibit (click the <b>Roles</b> tab).</p><p>User10 must be able to read Azure Policy compliance and resources across all subscriptions, without changing anything.</p><p>Which <b>two</b> assignments each meet the need?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Roles",
   "h": "<p>Hierarchy: root group → <b>MG-Corp</b> → <b>MG-Prod</b> (subscriptions Sub-Prod1 and Sub-Prod2) and <b>MG-Dev</b> (subscription Sub-Dev). Sub-Prod1 contains RG-App (VM1, st1) and RG-Net (VNet1). RG-Net has a <b>CanNotDelete</b> lock.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Principal</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Reader</td><td>MG-Corp</td></tr><tr><td>User2</td><td>Contributor</td><td>MG-Prod</td></tr><tr><td>User3</td><td>Owner</td><td>RG-App</td></tr><tr><td>User4</td><td>Virtual Machine Contributor</td><td>Sub-Prod1</td></tr><tr><td>User5</td><td>User Access Administrator</td><td>Sub-Dev</td></tr><tr><td>User6</td><td>Global Administrator (Microsoft Entra role)</td><td>Tenant</td></tr><tr><td>G1 (member: User7)</td><td>Contributor</td><td>RG-Net</td></tr></table></div>"
  }
 ],
 "opts": [
  "Reader on the MG-Corp management group",
  "Reader on the root management group",
  "Resource Policy Contributor on MG-Corp",
  "Reader on Sub-Prod1, Sub-Prod2, and the RG-App group"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>Reader can read resources and compliance state. Assigned on <b>MG-Corp</b> or the <b>root</b>, it covers every current subscription (and future ones placed below).</p><ul><li>Resource Policy Contributor can change policies.</li><li>The subscription list misses Sub-Dev.</li></ul>",
 "portal": {
  "path": [
   "MG-Corp"
  ],
  "title": "MG-Corp | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*User10",
    "Reader"
   ]
  ],
  "btn": "Check access"
 },
 "keep": "Read everywhere: Reader on the highest useful management group."
},
{
 "id": "D1-247",
 "dom": 1,
 "type": "single",
 "stem": "<p>You have the environment shown in the Costs exhibit (click the <b>Costs</b> tab).</p><p>Management wants each project's monthly cost, knowing that several projects' resources share Sub-Prod1.</p><p>What should you do?</p>",
 "docs": [
  {
   "t": "Costs",
   "h": "<p>Budget <b>B-Prod1</b> on Sub-Prod1: €1,000 per month.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Alert condition</th><th>Threshold</th><th>Recipient</th></tr><tr><td>Actual cost</td><td>80%</td><td>Email to the finance team</td></tr><tr><td>Forecasted cost</td><td>100%</td><td>Action group AG-Cost (runbook that stops RG-Test's VMs)</td></tr></table></div>"
  }
 ],
 "opts": [
  "Tag resources by project, then group cost analysis by tag",
  "Create one budget per project on Sub-Prod1, with the same amount",
  "Create a management group per project for Sub-Prod1",
  "Add one lock per project on Sub-Prod1's resources"
 ],
 "ans": 0,
 "expl": "<p><b>Tags</b> (for example Project = Orion) let you filter and group cost analysis when several projects share a subscription. A policy (for example inheriting the group's tag) helps keep them complete.</p><ul><li>A budget alerts, it doesn't split costs.</li><li>A subscription can only be in one management group.</li><li>A lock has nothing to do with costs.</li></ul>",
 "portal": {
  "path": [
   "Cost Management",
   "Budgets"
  ],
  "title": "B-Prod1 | Alerts",
  "menu": [
   "Overview",
   "*Alert conditions"
  ],
  "rows": [
   [
    "Actual 80%",
    "Email"
   ],
   [
    "*Forecasted 100%",
    "AG-Cost"
   ]
  ]
 },
 "keep": "Split costs within a shared subscription: tags."
},
{
 "id": "D1-248",
 "dom": 1,
 "type": "multi",
 "stem": "<p>You have the environment shown in the Policies exhibit (click the <b>Policies</b> tab).</p><p>PA3 was assigned, but the remediation task fails with an authorization error.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Policies",
   "h": "<p>Same hierarchy: MG-Corp contains MG-Prod (Sub-Prod1, Sub-Prod2) and MG-Dev (Sub-Dev). The RG-App group in Sub-Prod1 has the tag <b>CostCenter = 42</b>.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Assignment</th><th>Definition</th><th>Effect</th><th>Scope</th><th>Exclusion</th></tr><tr><td>PA1</td><td>Allowed locations: France Central, West Europe</td><td>Deny</td><td>MG-Corp</td><td>Sub-Dev</td></tr><tr><td>PA2</td><td>Require a CostCenter tag on resource groups</td><td>Deny</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA3</td><td>Inherit the CostCenter tag from the resource group if missing</td><td>Modify (managed identity with the required role)</td><td>Sub-Prod1</td><td>—</td></tr><tr><td>PA4</td><td>Allowed virtual machine size SKUs: D2s_v5, D4s_v5</td><td>Audit</td><td>RG-App</td><td>—</td></tr></table></div><p>Before PA3 and PA4, RG-App already contained the VM <b>VM-old</b> (size B2s, no tag).</p>"
  }
 ],
 "opts": [
  "Check that the PA3 assignment has a managed identity",
  "Give that identity the role the definition requires, on Sub-Prod1",
  "Switch PA3's effect to Audit to clear the error",
  "Assign Owner on Sub-Prod1 to the user running the task"
 ],
 "ans": [
  0,
  1
 ],
 "pick": 2,
 "expl": "<p>A Modify or DeployIfNotExists remediation acts with the <b>assignment's managed identity</b>, not the user's account. That identity must exist and hold, on the scope, the roles listed in the definition's <code>roleDefinitionIds</code> (Tag Contributor, for example).</p><ul><li>The Audit effect fixes nothing.</li><li>The user's rights aren't the ones used to change resources.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Policy | Compliance",
  "menu": [
   "Overview",
   "*Compliance",
   "Remediation",
   "Assignments"
  ],
  "rows": [
   [
    "PA3",
    "VM-old: non-compliant (missing tag)"
   ],
   [
    "*PA4",
    "VM-old: non-compliant (B2s)"
   ]
  ]
 },
 "keep": "Remediation = assignment's managed identity + roleDefinitionIds roles."
},
{
 "id": "D1-249",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You have the environment shown in the Custom role exhibit (click the <b>Custom role</b> tab).</p><p>You're extending VM Operator. What should you change for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Custom role",
   "h": "<p>Custom role <b>VM Operator</b>:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Property</th><th>Value</th></tr><tr><td>Actions</td><td>Microsoft.Compute/virtualMachines/read<br>Microsoft.Compute/virtualMachines/start/action<br>Microsoft.Compute/virtualMachines/restart/action<br>Microsoft.Compute/virtualMachines/deallocate/action</td></tr><tr><td>NotActions</td><td>—</td></tr><tr><td>AssignableScopes</td><td>/subscriptions/&lt;Sub-Prod1&gt;</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "Also allow resizing VMs:",
   "o": [
    "Add virtualMachines/write to Actions",
    "Add virtualMachines/* to NotActions",
    "Add a DataAction",
    "Add MG-Prod to AssignableScopes"
   ],
   "a": 0
  },
  {
   "l": "Make the role assignable in Sub-Dev:",
   "o": [
    "Add /subscriptions/Sub-Dev to AssignableScopes",
    "Assign the role on MG-Dev with no other change",
    "Clone the built-in Contributor role",
    "Add Sub-Dev to NotActions"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Resize:</b> a size change is a write on the VM (<code>Microsoft.Compute/virtualMachines/write</code>). NotActions removes rights, and DataActions are about data, not management.</li><li><b>Sub-Dev:</b> the role is only assignable on its AssignableScopes and below; add Sub-Dev there (or a parent management group). Assigning on MG-Dev would fail until it's listed.</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub-Prod1",
   "Roles"
  ],
  "title": "VM Operator | Assignable scopes",
  "menu": [
   "Permissions",
   "*Assignable scopes",
   "JSON"
  ],
  "rows": [
   [
    "*/subscriptions/Sub-Prod1",
    "Assignable here and below"
   ]
  ]
 },
 "keep": "Actions = what you can do. AssignableScopes = where you can assign it."
},
{
 "id": "D1-250",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the environment shown in the Directory exhibit (click the <b>Directory</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Directory",
   "h": "<div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Type</th><th>Source</th><th>Department</th></tr><tr><td>U1</td><td>Member</td><td>Synced from on-premises AD</td><td>Sales</td></tr><tr><td>U2</td><td>Member</td><td>Cloud</td><td>Sales</td></tr><tr><td>U3</td><td>Guest</td><td>Fabrikam (B2B)</td><td>—</td></tr><tr><td>A1</td><td>Member</td><td>Cloud</td><td>IT</td></tr></table></div><div class=\"tw\"><table class=\"tbl\"><tr><th>Object</th><th>Detail</th></tr><tr><td>G-Sales</td><td>Security group, dynamic membership: user.department -eq \"Sales\"</td></tr><tr><td>AU-Lyon</td><td>Administrative unit containing U1 and U2</td></tr><tr><td>A1</td><td>User Administrator, scoped to AU-Lyon</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "U2 becomes a member of G-Sales without manual action.",
   "a": 0
  },
  {
   "l": "If U2's department changes to Marketing, U2 leaves G-Sales automatically.",
   "a": 0
  },
  {
   "l": "A dynamic membership rule requires Microsoft Entra ID P1 licenses for the users it covers.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>U2 in G-Sales: Yes.</b> Their department is Sales: the rule adds them.</li><li><b>Department change: Yes.</b> The rule is re-evaluated: U2 leaves the group.</li><li><b>P1 license: Yes.</b> Dynamic groups are part of Microsoft Entra ID P1 (or P2): each user in a dynamic group must be covered.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "G-Sales"
  ],
  "title": "G-Sales | Dynamic membership rules",
  "menu": [
   "Members",
   "*Dynamic membership rules"
  ],
  "rows": [
   [
    "*Rule",
    "user.department -eq \"Sales\""
   ]
  ]
 },
 "keep": "Dynamic group: the rule adds and removes; P1 license required."
}
);
