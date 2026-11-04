/* Domain 1: identities and governance (batch C : D1-061 to D1-110) */
AZ.questions.push(
{
 "id": "D1-065",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You need to create 150 <b>member</b> users in Microsoft Entra ID from a list provided by HR.</p><p>For each of the following methods, select Yes if it's suitable. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The Bulk invite users operation (guests)",
   "a": 1
  },
  {
   "l": "A Microsoft Graph PowerShell script (New-MgUser)",
   "a": 0
  },
  {
   "l": "Bulk create users (CSV template)",
   "a": 0
  },
  {
   "l": "An Azure Policy with DeployIfNotExists",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Bulk create users: yes.</b> You download the CSV template, fill it in (name, UPN, initial password…), and upload it.</li><li><b>New-MgUser: yes.</b> The Microsoft Graph PowerShell module can loop over a CSV file to create the accounts.</li><li><b>Bulk invite: no.</b> This operation creates <b>guests</b>, not members.</li><li><b>Azure Policy: no.</b> It doesn't create Entra users.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "All users"
  ],
  "title": "Bulk create users",
  "menu": [
   "All users",
   "*Bulk operations"
  ],
  "rows": [
   [
    "1. Download CSV template",
    "Create template"
   ],
   [
    "*2. Upload your CSV file",
    "new-hr.csv"
   ]
  ],
  "btn": "Submit"
 },
 "keep": "Many members = Bulk create (CSV) or Graph PowerShell (New-MgUser). Many guests = Bulk invite."
},
{
 "id": "D1-067",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You configure self-service password reset (SSPR) in a tenant synchronized with an on-premises Active Directory through Microsoft Entra Connect.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "For a password reset in the cloud to be applied in on-premises AD, you must enable password writeback.",
   "a": 0
  },
  {
   "l": "Security questions are available as a method for administrator accounts.",
   "a": 1
  },
  {
   "l": "Users must register for SSPR by recording their authentication methods.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Writeback: Yes.</b> <b>Password writeback</b> sends the new password back to on-premises AD. It is configured in Microsoft Entra Connect (or Cloud Sync) and requires at least P1.</li><li><b>Security questions for admins: No.</b> Administrators follow a policy with two strong methods; security questions are not offered to them.</li><li><b>Registration: Yes.</b> Users must record their methods (phone, app, email…) before they can reset. You can force registration at sign-in.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Password reset"
  ],
  "title": "Password reset | On-premises integration",
  "menu": [
   "Properties",
   "Authentication methods",
   "Registration",
   "*On-premises integration"
  ],
  "rows": [
   [
    "*Write back passwords to your on-premises directory",
    "Yes"
   ],
   [
    "Allow users to unlock accounts without resetting their password",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "SSPR with on-premises AD = password writeback (Entra Connect or Cloud Sync). Admins never get security questions."
},
{
 "id": "D1-070",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You create an Azure custom role with the following definition:</p><pre>{\n  \"Name\": \"VM Operator\",\n  \"Actions\": [\n    \"Microsoft.Compute/virtualMachines/read\",\n    \"Microsoft.Compute/virtualMachines/start/action\",\n    \"Microsoft.Compute/virtualMachines/restart/action\"\n  ],\n  \"NotActions\": [],\n  \"AssignableScopes\": [\"/subscriptions/&lt;Sub1 id&gt;\"]\n}</pre><p>You assign this role to User8 on RG1, in Sub1.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "User8 can restart VM1, in RG1:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  },
  {
   "l": "User8 can stop and deallocate VM1:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "The role can be assigned on a resource group in Sub2:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Restart: Yes.</b> The <code>restart/action</code> action is in Actions, and RG1 is part of Sub1.</li><li><b>Stop and deallocate: No.</b> That would need <code>deallocate/action</code> (or <code>powerOff/action</code> for a simple stop), which the role lacks.</li><li><b>Sub2: No.</b> AssignableScopes contains only Sub1; the role isn't even visible in Sub2.</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1",
   "Access control (IAM)"
  ],
  "title": "VM Operator | Permissions",
  "menu": [
   "Basics",
   "*Permissions",
   "Assignable scopes"
  ],
  "rows": [
   [
    "Microsoft.Compute/virtualMachines/read",
    "Allowed"
   ],
   [
    "*Microsoft.Compute/virtualMachines/restart/action",
    "Allowed"
   ],
   [
    "Microsoft.Compute/virtualMachines/deallocate/action",
    "Missing"
   ]
  ]
 },
 "keep": "A custom role allows only the listed actions. AssignableScopes limits where it is visible and assignable."
},
{
 "id": "D1-074",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to assign the appropriate built-in Azure role for each need. The solution must follow the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "tgtHead": [
  "Need",
  "Role"
 ],
 "srcs": [
  "Owner",
  "Contributor",
  "Reader",
  "Network Contributor",
  "Storage Account Contributor"
 ],
 "tgts": [
  {
   "l": "Create virtual networks, NSGs, and gateways in RG-Net",
   "a": 3
  },
  {
   "l": "Manage all resources in RG-App and grant access to other users",
   "a": 0
  },
  {
   "l": "View the subscription's resources for an audit",
   "a": 2
  },
  {
   "l": "Manage the storage accounts in RG-Data, including key rotation",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>Network Contributor</b>: manages network resources, with no access to other resource types.</li><li><b>Owner</b>: manages everything <i>and</i> assigns roles. Contributor couldn't grant access.</li><li><b>Reader</b>: view only.</li><li><b>Storage Account Contributor</b>: manages storage accounts, including access keys, without other resources.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Net"
  ],
  "title": "RG-Net | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Network Contributor"
   ],
   [
    "Members",
    "Network team"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Manage + grant access = Owner. A single resource type = specialized role (Network Contributor, Storage Account Contributor…)."
},
{
 "id": "D1-078",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You assign the initiative Init1, which contains three policies with the Audit effect, to the subscription Sub1. You exclude the resource group RG-Lab from the assignment.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "Resources in RG-Lab show as non-compliant if they violate Init1.",
   "a": 1
  },
  {
   "l": "You can replace the exclusion with an exemption, which documents the reason and can expire.",
   "a": 0
  },
  {
   "l": "A new resource group created in Sub1 is evaluated by Init1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>RG-Lab non-compliant: No.</b> An excluded resource isn't evaluated at all; it doesn't appear in the results.</li><li><b>Exemption: Yes.</b> An exemption (Waiver or Mitigated category) keeps track of the reason and can have an expiration date. The resource then shows as exempt.</li><li><b>New group: Yes.</b> The assignment covers all of Sub1, except explicit exclusions.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Exemptions"
  ],
  "title": "Create exemption",
  "menu": [
   "Overview",
   "Compliance",
   "*Exemptions"
  ],
  "rows": [
   [
    "Scope",
    "Sub1/RG-Lab"
   ],
   [
    "*Exemption category",
    "Waiver"
   ],
   [
    "*Expiration date",
    "12/31/2026"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Exclusion = not evaluated. Exemption = evaluated as “exempt”, with a reason and an expiration date."
},
{
 "id": "D1-081",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You need to apply the <b>Environment</b> and <b>Department</b> tags to all resources in the subscription Sub1, and reject any resource created without the Environment tag.</p><p>For each of the following policies, select Yes if you must assign it. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Allowed locations for resources",
   "a": 1
  },
  {
   "l": "Require a tag (Environment)",
   "a": 0
  },
  {
   "l": "Allowed virtual machine size SKUs",
   "a": 1
  },
  {
   "l": "Inherit a tag from the group (Department)",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Require a tag: yes.</b> Deny effect: any resource created without the Environment tag is rejected.</li><li><b>Inherit a tag from the resource group: yes.</b> Modify effect: the Department tag is copied from the resource group, without blocking.</li><li><b>Allowed locations</b> and <b>Allowed VM size SKUs</b> control region and size, not tags.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Definitions"
  ],
  "title": "Definitions | Tags category",
  "menu": [
   "Overview",
   "*Definitions"
  ],
  "rows": [
   [
    "*Require a tag on resources",
    "Deny"
   ],
   [
    "*Inherit a tag from the resource group if missing",
    "Modify"
   ]
  ]
 },
 "keep": "Reject when the tag is missing = “Require a tag” (Deny). Fill in without blocking = “Inherit a tag” (Modify)."
},
{
 "id": "D1-083",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You manage Azure tags.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A resource can have at most 50 tag name/value pairs.",
   "a": 0
  },
  {
   "l": "All Azure resources support tags.",
   "a": 1
  },
  {
   "l": "Tags can be used to filter cost analysis.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>50 tags: Yes.</b> That's the limit per resource, resource group, or subscription.</li><li><b>All resources: No.</b> Some types don't support tags, and not all resources that have them pass them to billing.</li><li><b>Cost analysis: Yes.</b> You can filter and group costs by tag, which is one of the main uses of tags.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Tags",
  "menu": [
   "Overview",
   "*Tags"
  ],
  "rows": [
   [
    "Environment",
    "Prod"
   ],
   [
    "Department",
    "Finance"
   ],
   [
    "*Limit",
    "50 name/value pairs per resource"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "50 tags max per resource; usable to filter cost analysis; not supported everywhere."
},
{
 "id": "D1-090",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You create a budget of €2,000 per month on the subscription Sub1, with three alert conditions: Actual at 50%, Actual at 90%, and Forecasted at 100%.</p><p>On the 10th of the month, actual cost is €1,100 and the forecasted cost for the month is €3,200.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Has the Actual 50% alert fired?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  },
  {
   "l": "Has the Actual 90% alert fired?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "Has the Forecasted 100% alert fired?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Actual 50%: Yes.</b> 50% of €2,000 = €1,000, and actual is €1,100.</li><li><b>Actual 90%: No.</b> The threshold would be €1,800.</li><li><b>Forecasted 100%: Yes.</b> The €3,200 forecast exceeds €2,000.</li></ul><p>That's the whole point of a forecasted cost alert: being warned on the 10th that you will overspend.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Budgets",
  "menu": [
   "Overview",
   "*Budgets"
  ],
  "rows": [
   [
    "Budget",
    "€2,000"
   ],
   [
    "*Actual 50% (€1,000)",
    "Fired · €1,100"
   ],
   [
    "Actual 90% (€1,800)",
    "Not fired"
   ],
   [
    "*Forecasted 100% (€2,000)",
    "Fired · €3,200"
   ]
  ]
 },
 "keep": "Threshold = % × budget amount; Actual compares spending, Forecasted compares the end-of-period projection."
},
{
 "id": "D1-096",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You compare system-assigned and user-assigned managed identities.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A system-assigned identity is deleted along with the resource it belongs to.",
   "a": 0
  },
  {
   "l": "The same user-assigned identity can be associated with several virtual machines.",
   "a": 0
  },
  {
   "l": "A virtual machine can have only one type of managed identity at a time.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Lifecycle: Yes.</b> A system-assigned identity is tied to the resource: it is created and deleted with it.</li><li><b>Sharing: Yes.</b> A user-assigned identity is a standalone Azure resource, reusable by several resources.</li><li><b>Only one type: No.</b> A VM can have both a system identity and one or more user identities.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Identity",
  "menu": [
   "Overview",
   "*Identity"
  ],
  "rows": [
   [
    "#System assigned tab",
    ""
   ],
   [
    "Status",
    "On (deleted with VM1)"
   ],
   [
    "#User assigned tab",
    ""
   ],
   [
    "*id-app-shared",
    "Shared with VM2 and VM3"
   ]
  ]
 },
 "keep": "System = 1 resource, same lifecycle. User = standalone resource, shareable. Both can coexist."
},
{
 "id": "D1-100",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate governance tool for each need.</p><p>To answer, drag the appropriate tool to each need. Each tool may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tools",
 "tgtHead": [
  "Need",
  "Tool"
 ],
 "srcs": [
  "Azure Policy",
  "Resource lock",
  "Role-based access control (RBAC)",
  "Tag",
  "Management group"
 ],
 "tgts": [
  {
   "l": "Prevent even an Owner from deleting the production database",
   "a": 1
  },
  {
   "l": "Forbid M-series VMs across the whole subscription",
   "a": 0
  },
  {
   "l": "Allow the Data team to manage only storage accounts",
   "a": 2
  },
  {
   "l": "Split the invoice by cost center",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Lock</b>: protects a resource against deletion or changes, whatever the roles.</li><li><b>Azure Policy</b>: enforces rules on resource properties (size, region, SKU…).</li><li><b>RBAC</b>: defines <i>who</i> can do <i>what</i>, and <i>where</i>.</li><li><b>Tag</b>: metadata used to filter and split costs.</li></ul><p>A management group organizes subscriptions; on its own, it answers none of these needs.</p>",
 "portal": {
  "path": [
   "SQL databases",
   "sql-prod"
  ],
  "title": "sql-prod | Locks",
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
    "Applies to",
    "Everyone, including the Owner"
   ]
  ]
 },
 "keep": "Lock = protect. Policy = rules on properties. RBAC = who does what. Tag = split costs."
},
{
 "id": "D1-110",
 "dom": 1,
 "type": "order",
 "stem": "<p>You need to ensure that all existing and future resources in the subscription Sub1 have the tag Environment=Prod, copied from the subscription.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>First, the tag must exist on the <b>subscription</b>, since the policy copies it from there. Next, you assign the policy (Modify effect) with a managed identity that receives a sufficient role, for example Tag Contributor. Finally, the <b>remediation task</b> applies the tag to resources already present.</p><p>A ReadOnly lock would block the remediation. The Reader role doesn't allow changing tags.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy | Remediation",
  "menu": [
   "Basics",
   "Parameters",
   "*Remediation"
  ],
  "rows": [
   [
    "Definition",
    "Inherit a tag from the subscription if missing"
   ],
   [
    "*Create a remediation task",
    "Checked"
   ],
   [
    "Managed identity",
    "System · Tag Contributor"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Tag on the source, Modify policy with an identity, then a remediation task for existing resources.",
 "acts": [
  "Add the tag Environment=Prod to the subscription Sub1",
  "Assign Sub1 the policy “Inherit a tag from the subscription if missing”, with a managed identity",
  "Create a remediation task for existing resources",
  "Apply a ReadOnly lock to Sub1",
  "Assign the Reader role to the managed identity"
 ],
 "seq": [
  0,
  1,
  2
 ]
}
);
