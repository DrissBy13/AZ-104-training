/* Domain 1: identities and governance (batch C : D1-061 to D1-110) */
AZ.questions.push(
{
 "id": "D1-061",
 "dom": 1,
 "type": "single",
 "stem": "<p>You create a group with dynamic membership. The rule must include all users whose department is <b>Sales</b> or <b>Marketing</b>.</p><p>Which rule should you use?</p>",
 "opts": [
  "(user.department -in [\"Sales\",\"Marketing\"])",
  "(user.department -eq \"Sales\") -and (user.department -eq \"Marketing\")",
  "(user.department -match \"Sales\") -and (user.jobTitle -eq \"Marketing\")",
  "(user.department -contains \"Sales,Marketing\")"
 ],
 "ans": 0,
 "expl": "<p>The <b>-in</b> operator tests whether the value is part of a list: <code>user.department -in [\"Sales\",\"Marketing\"]</code>. You could also write two conditions joined with <b>-or</b>.</p><ul><li>With <b>-and</b>, the department would have to be Sales and Marketing at the same time: no user matches.</li><li><b>-contains</b> looks for the string “Sales,Marketing” in the attribute: no department contains it.</li><li>The last rule mixes department and job title, and requires both.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "New group"
  ],
  "title": "Dynamic membership rules",
  "menu": [
   "*Rule builder",
   "Validate Rules"
  ],
  "rows": [
   [
    "Property",
    "department"
   ],
   [
    "*Operator",
    "In"
   ],
   [
    "Value",
    "[\"Sales\",\"Marketing\"]"
   ],
   [
    "Rule syntax",
    "(user.department -in [\"Sales\",\"Marketing\"])"
   ]
  ],
  "btn": "Save"
 },
 "keep": "One value among several = -in [list] or conditions joined with -or. -and requires every condition to be true."
},
{
 "id": "D1-062",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your Microsoft Entra tenant has only the <b>Microsoft Entra ID Free</b> license. You try to create a group with dynamic membership, but the option is grayed out.</p><p>What should you do?</p>",
 "opts": [
  "Assign the Groups Administrator role to your account",
  "Acquire Microsoft Entra ID P1 licenses",
  "Create a Microsoft 365 group instead of a security group",
  "Enable self-service password reset"
 ],
 "ans": 1,
 "expl": "<p>Dynamic groups require <b>Microsoft Entra ID P1</b> (or P2, or a plan that includes it). Each user who is a member of a dynamic group must be covered by a license.</p><p>The group type (security or Microsoft 365) doesn't change this requirement. SSPR is unrelated. And an admin role doesn't replace a missing license.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Overview"
  ],
  "title": "Microsoft Entra ID | Licenses",
  "menu": [
   "Overview",
   "*Licenses",
   "Groups"
  ],
  "rows": [
   [
    "Current license",
    "Microsoft Entra ID Free"
   ],
   [
    "*Required for dynamic groups",
    "Microsoft Entra ID P1 or P2"
   ]
  ]
 },
 "keep": "Dynamic groups, group-based licensing, Conditional Access = Microsoft Entra ID P1 minimum."
},
{
 "id": "D1-063",
 "dom": 1,
 "type": "single",
 "stem": "<p>A Microsoft 365 group named Project-X was deleted 12 days ago.</p><p>Can you restore it?</p>",
 "opts": [
  "No, because a group can only be restored within 7 days",
  "Yes, but only if it was a security group",
  "Yes, because Microsoft 365 groups stay in Deleted groups for 30 days",
  "No, groups are permanently deleted right away"
 ],
 "ans": 2,
 "expl": "<p>Deleted <b>Microsoft 365</b> groups stay in <b>Deleted groups</b> for <b>30 days</b> and can be restored with their members and content (mailbox, SharePoint site, team).</p><p>By contrast, a deleted <b>security group</b> is permanently deleted right away: a classic trap.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups"
  ],
  "title": "Groups | Deleted groups",
  "menu": [
   "All groups",
   "*Deleted groups",
   "Expiration"
  ],
  "rows": [
   [
    "*Project-X (Microsoft 365)",
    "Deleted 12 days ago · restorable for up to 30 days"
   ]
  ],
  "btn": "Restore group"
 },
 "keep": "Deleted Microsoft 365 group: 30 days to restore it. Deleted security group: gone permanently, right away."
},
{
 "id": "D1-064",
 "dom": 1,
 "type": "single",
 "stem": "<p>Unused Microsoft 365 groups are piling up in your tenant. You need to ensure that each group is deleted after 180 days, unless an owner renews it.</p><p>What should you configure?</p>",
 "opts": [
  "An Azure Policy with the Deny effect",
  "A group naming policy",
  "An access review on each group",
  "A group expiration policy"
 ],
 "ans": 3,
 "expl": "<p>The <b>expiration policy</b> (Groups > Expiration) sets a lifetime for Microsoft 365 groups. Owners are notified by email before the deadline and can renew the group; an active group is even renewed automatically.</p><p>The naming policy enforces a prefix or suffix. Azure Policy doesn't manage Entra groups. An access review has members checked; it doesn't delete the group.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups"
  ],
  "title": "Groups | Expiration",
  "menu": [
   "All groups",
   "Deleted groups",
   "*Expiration",
   "Naming policy"
  ],
  "rows": [
   [
    "*Group lifetime (in days)",
    "180"
   ],
   [
    "Email contact for groups with no owners",
    "admin@contoso.com"
   ],
   [
    "Enable expiration for these Microsoft 365 groups",
    "All"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Deleting unused Microsoft 365 groups after N days = expiration policy; owners renew."
},
{
 "id": "D1-065",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to create 150 <b>member</b> users in Microsoft Entra ID from a list provided by HR.</p><p>Which <b>two</b> methods can you use?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "The Bulk invite users operation",
  "A Microsoft Graph PowerShell script with New-MgUser",
  "The portal's Bulk create users operation, with the CSV template",
  "An Azure Policy with the DeployIfNotExists effect"
 ],
 "ans": [
  1,
  2
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
 "id": "D1-066",
 "dom": 1,
 "type": "single",
 "stem": "<p>A guest named partner@fabrikam.com accepted their invitation. They must now be able to manage the virtual machines in the resource group RG-Project.</p><p>What should you do?</p>",
 "opts": [
  "Assign the guest the Virtual Machine Contributor role on RG-Project",
  "Convert the guest to a member before any assignment",
  "Assign the guest a Microsoft Entra ID P2 license",
  "Add fabrikam.com as a custom domain"
 ],
 "ans": 0,
 "expl": "<p>A guest user is a security principal like any other: you can <b>assign Azure roles</b> to them directly. Virtual Machine Contributor on RG-Project is enough.</p><p>There is no need to convert them to a member. Adding fabrikam.com as a custom domain is impossible (that domain belongs to another organization). No P2 license is required for an Azure role.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Project"
  ],
  "title": "RG-Project | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Virtual Machine Contributor"
   ],
   [
    "Members",
    "partner_fabrikam.com#EXT#"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "A guest can receive Azure roles like any user, with no conversion or license."
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
 "id": "D1-068",
 "dom": 1,
 "type": "single",
 "stem": "<p>You manage the administrative unit AU-Lille. The administrators of AU-Lille must be the only ones able to manage some sensitive accounts within the unit, and tenant administrators must <b>not</b> be able to modify these accounts.</p><p>What should you use?</p>",
 "opts": [
  "A role-assignable security group",
  "A restricted management administrative unit",
  "A read-only resource lock",
  "An Azure deny assignment"
 ],
 "ans": 1,
 "expl": "<p>A <b>restricted management administrative unit</b> protects its objects: only administrators assigned <b>on that unit</b> can modify them. Even a tenant-level User Administrator can no longer manage them.</p><p>A role-assignable group is used to assign Entra roles to a group. Locks and deny assignments apply to Azure resources, not to directory objects.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Administrative units"
  ],
  "title": "Add administrative unit",
  "menu": [
   "*Properties",
   "Assign roles",
   "Review + create"
  ],
  "rows": [
   [
    "Name",
    "AU-Lille"
   ],
   [
    "*Restricted management administrative unit",
    "Yes"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Protecting accounts even from tenant admins = restricted management administrative unit."
},
{
 "id": "D1-069",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to assign the Microsoft Entra <b>Helpdesk Administrator</b> role to a group rather than to each user.</p><p>Which property must the group have?</p>",
 "opts": [
  "Contain guests only",
  "Have dynamic membership",
  "Have the “Microsoft Entra roles can be assigned to the group” option enabled when it is created",
  "Be a Microsoft 365 group"
 ],
 "ans": 2,
 "expl": "<p>Only groups created with the <b>“Microsoft Entra roles can be assigned to the group”</b> option (isAssignableToRole) can receive an Entra role. This option can only be chosen at creation and cannot be changed afterward.</p><p>These groups cannot have dynamic membership, so that a simple attribute change can't grant an admin role. The type can be security or Microsoft 365.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "New group"
  ],
  "title": "New group",
  "rows": [
   [
    "Group type",
    "Security"
   ],
   [
    "Group name",
    "GRP-Helpdesk"
   ],
   [
    "*Microsoft Entra roles can be assigned to the group",
    "Yes"
   ],
   [
    "Membership type",
    "Assigned (dynamic not possible)"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Entra role on a group = isAssignableToRole set at creation, assigned membership only."
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
 "id": "D1-071",
 "dom": 1,
 "type": "single",
 "stem": "<p>A custom role contains <code>\"Actions\": [\"Microsoft.Storage/*\"]</code> and <code>\"NotActions\": [\"Microsoft.Storage/storageAccounts/delete\"]</code>. User9 receives this role on RG1, along with the built-in <b>Contributor</b> role on RG1.</p><p>Can User9 delete a storage account in RG1?</p>",
 "opts": [
  "No, because NotActions forbids deletion",
  "No, because the most restrictive role wins",
  "Yes, but only after 24 hours",
  "Yes, because Contributor grants deletion"
 ],
 "ans": 3,
 "expl": "<p><b>NotActions is not a deny</b>: it only removes actions from the role where it is written. If another role grants the action, it is allowed. Contributor grants <code>*</code>, and therefore deletion.</p><p>Azure permissions are additive. Only a deny assignment would block the action despite Contributor.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Access control (IAM) › Check access",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "User9 · Custom role",
    "NotActions: storageAccounts/delete"
   ],
   [
    "*User9 · Contributor",
    "Actions: *"
   ],
   [
    "Deleting a storage account",
    "Allowed"
   ]
  ]
 },
 "keep": "NotActions is not a deny: another role can grant the action. Only a deny assignment blocks it."
},
{
 "id": "D1-072",
 "dom": 1,
 "type": "single",
 "stem": "<p>You want to create a custom role from the built-in <b>Virtual Machine Contributor</b> role, removing the right to delete VMs.</p><p>What is the fastest method in the portal?</p>",
 "opts": [
  "Clone the built-in role, then remove the permission in the editor",
  "Edit the built-in role directly",
  "Create an empty role and add the permissions one by one",
  "Assign the built-in role with a deny condition"
 ],
 "ans": 0,
 "expl": "<p>In <b>Access control (IAM) > Roles</b>, you can <b>clone</b> an existing role: the new role starts with its permissions, and you add <code>Microsoft.Compute/virtualMachines/delete</code> to the excluded permissions (NotActions).</p><p><b>Built-in</b> roles can't be edited. Starting from an empty role works but takes much longer. Assignment conditions apply only to some storage data actions and don't block deleting a VM.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1",
   "Access control (IAM)"
  ],
  "title": "Access control (IAM) | Roles",
  "menu": [
   "Overview",
   "Role assignments",
   "*Roles"
  ],
  "rows": [
   [
    "*Virtual Machine Contributor",
    "… › Clone"
   ],
   [
    "Exclude permissions",
    "Microsoft.Compute/virtualMachines/delete"
   ]
  ]
 },
 "keep": "Role close to a built-in one = Clone, then adjust. Built-in roles can never be edited."
},
{
 "id": "D1-073",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to know which Azure roles User10 has on the resource group RG2, including those inherited from the subscription and from the groups they belong to.</p><p>What should you use in the portal?</p>",
 "opts": [
  "RG2 > Activity log",
  "RG2 > Access control (IAM) > Check access",
  "Azure Advisor > Security",
  "Microsoft Entra ID > Roles and administrators"
 ],
 "ans": 1,
 "expl": "<p><b>Check access</b> in the IAM tab shows the effective assignments of a user, group, or identity at this scope, including inherited ones and those received through groups.</p><p>“Roles and administrators” lists <b>Microsoft Entra</b> roles, not Azure roles. The activity log shows operations. Advisor gives recommendations.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG2"
  ],
  "title": "RG2 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Check access",
    "User10"
   ],
   [
    "Result",
    "Direct, inherited, and group assignments"
   ]
  ]
 },
 "keep": "Someone's effective rights at a scope = IAM > Check access."
},
{
 "id": "D1-074",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to assign the appropriate built-in Azure role for each need. The solution must follow the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "srcs": [
  "Owner",
  "Contributor",
  "Reader",
  "Network Contributor",
  "Storage Account Contributor"
 ],
 "tgtHead": [
  "Need",
  "Role"
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
 "id": "D1-075",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow members of the Operations group to assign only the <b>Storage Blob Data Reader</b> role, and only to managed identities, on storage1.</p><p>Which solution follows the principle of least privilege?</p>",
 "opts": [
  "Assign them Storage Account Contributor on storage1",
  "Assign them User Access Administrator on the subscription",
  "Assign them Role Based Access Control Administrator with a condition that limits the roles and principal types",
  "Assign them Owner on storage1"
 ],
 "ans": 2,
 "expl": "<p>The <b>Role Based Access Control Administrator</b> role lets you assign roles, and accepts delegation <b>conditions</b>: which roles can be assigned, and to which principal types.</p><p>Owner and User Access Administrator would allow assigning any role. Storage Account Contributor doesn't allow assigning roles.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Add role assignment › Conditions",
  "menu": [
   "Role",
   "Members",
   "*Conditions",
   "Review + assign"
  ],
  "rows": [
   [
    "Role",
    "Role Based Access Control Administrator"
   ],
   [
    "*Allowed roles",
    "Storage Blob Data Reader"
   ],
   [
    "*Principal types",
    "Managed identities"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Delegating role assignment with limits = Role Based Access Control Administrator + conditions."
},
{
 "id": "D1-076",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assign the built-in <b>Allowed locations</b> policy to the subscription Sub1, with France Central as the only value. An administrator tries to create a resource group in West Europe.</p><p>What happens?</p>",
 "opts": [
  "The creation is denied",
  "The resource group is created in France Central instead",
  "The creation succeeds and the group is flagged as non-compliant",
  "The creation succeeds, because this policy doesn't apply to resource groups"
 ],
 "ans": 3,
 "expl": "<p>The <b>Allowed locations</b> policy excludes resource groups: it applies only to resources. To control the region of resource groups, there is a separate policy: <b>Allowed locations for resource groups</b>.</p><p>Azure Policy never changes a resource's region for you.</p>",
 "portal": {
  "path": [
   "Policy",
   "Definitions"
  ],
  "title": "Built-in policies",
  "menu": [
   "Overview",
   "*Definitions"
  ],
  "rows": [
   [
    "Allowed locations",
    "Resources (not resource groups)"
   ],
   [
    "*Allowed locations for resource groups",
    "Resource groups"
   ]
  ]
 },
 "keep": "“Allowed locations” ignores resource groups; there is a dedicated policy for them."
},
{
 "id": "D1-077",
 "dom": 1,
 "type": "single",
 "stem": "<p>You just assigned an Azure Policy in Audit mode on a subscription. You want to know the compliance state of existing resources immediately, without waiting for the normal evaluation cycle.</p><p>What should you do?</p>",
 "opts": [
  "Start an on-demand compliance scan",
  "Restart the affected resources",
  "Delete and recreate the assignment",
  "Create a remediation task"
 ],
 "ans": 0,
 "expl": "<p>An <b>on-demand scan</b> is started with <code>az policy state trigger-scan</code> or <code>Start-AzPolicyComplianceScan</code>. Otherwise, a full evaluation runs every 24 hours, and a new assignment is evaluated within minutes of its creation.</p><p>Recreating the assignment does no better. A remediation task modifies resources (Modify or DeployIfNotExists); it isn't for a simple Audit evaluation. Restarting resources has no effect.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell",
  "rows": [
   [
    "*Azure CLI",
    "az policy state trigger-scan --resource-group RG1"
   ],
   [
    "PowerShell",
    "Start-AzPolicyComplianceScan"
   ],
   [
    "Otherwise",
    "Automatic evaluation every 24 h"
   ]
  ]
 },
 "keep": "Evaluating compliance right now = on-demand scan (trigger-scan)."
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
 "id": "D1-079",
 "dom": 1,
 "type": "single",
 "stem": "<p>All virtual machines in the subscription Sub1 must send their logs to the Log Analytics workspace WS1. New VMs must be configured automatically.</p><p>Which effect should the policy you assign have?</p>",
 "opts": [
  "Audit",
  "DeployIfNotExists",
  "Append",
  "Deny"
 ],
 "ans": 1,
 "expl": "<p><b>DeployIfNotExists</b> checks that a related resource exists (here, the agent or the diagnostic setting) and deploys it if not, using the assignment's managed identity.</p><p>Audit only reports. Deny would block VM creation instead of configuring the VMs. Append adds fields to the create request, but can't deploy an extension.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy | Parameters",
  "menu": [
   "Basics",
   "*Parameters",
   "Remediation"
  ],
  "rows": [
   [
    "Definition",
    "Configure VMs to send logs to Log Analytics"
   ],
   [
    "*Effect",
    "DeployIfNotExists"
   ],
   [
    "Log Analytics workspace",
    "WS1"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Automatically configuring what's missing (agent, diagnostics) = DeployIfNotExists."
},
{
 "id": "D1-080",
 "dom": 1,
 "type": "single",
 "stem": "<p>A policy assigned to Sub1 has the <b>Audit</b> effect. You want it to block non-compliant creations from now on, without creating a new definition.</p><p>What is the best practice?</p>",
 "opts": [
  "Add a ReadOnly lock to Sub1",
  "Create a remediation task",
  "Parameterize the effect in the definition, then change the parameter in the assignment",
  "Add the subscription to the exclusions"
 ],
 "ans": 2,
 "expl": "<p>Many built-in policies have an <b>effect</b> parameter (Audit, Deny, Disabled…). You choose the value in the <b>assignment</b>: you can start in Audit to measure the impact, then switch to Deny without touching the definition.</p><p>A lock blocks all changes, not just non-compliant ones. A remediation task blocks nothing. An exclusion would remove the subscription from evaluation.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments",
   "Limited VM size"
  ],
  "title": "Edit assignment | Parameters",
  "menu": [
   "Basics",
   "*Parameters",
   "Remediation"
  ],
  "rows": [
   [
    "*Effect",
    "Deny (was Audit)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Best practice: deploy in Audit, measure, then switch the effect parameter to Deny in the assignment."
},
{
 "id": "D1-081",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to apply the <b>Environment</b> and <b>Department</b> tags to all resources in the subscription Sub1, and reject any resource created without the Environment tag.</p><p>Which <b>two</b> built-in policies should you assign?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Allowed locations",
  "Require a tag on resources (Environment)",
  "Allowed virtual machine size SKUs",
  "Inherit a tag from the resource group if missing (Department)"
 ],
 "ans": [
  1,
  3
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
 "id": "D1-082",
 "dom": 1,
 "type": "single",
 "stem": "<p>The resource group RG1 has the tag Department=Finance. You create the storage account storage2 in it, with no tags. No policy is assigned.</p><p>Which tags does storage2 have?</p>",
 "opts": [
  "Department=Finance",
  "Department=Finance only in the cost report",
  "Department=RG1",
  "None"
 ],
 "ans": 3,
 "expl": "<p>Without a policy, a resource <b>never</b> inherits its resource group's tags: storage2 has no tags.</p><p>A useful nuance: Cost Management offers a “Tag inheritance” option that applies group and subscription tags <b>in the cost data</b>, but it doesn't modify the resources. The expected answer is still “None”.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage2"
  ],
  "title": "storage2 | Tags",
  "menu": [
   "Overview",
   "*Tags"
  ],
  "rows": [
   [
    "*Tags",
    "None"
   ],
   [
    "Resource group RG1",
    "Department=Finance (not inherited)"
   ]
  ]
 },
 "keep": "Tags are never inherited without a policy."
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
 "id": "D1-084",
 "dom": 1,
 "type": "single",
 "stem": "<p>The resource group RG1 has a <b>Delete</b> (CanNotDelete) lock. The virtual machine VM1 in RG1 has a <b>Read-only</b> lock.</p><p>Which lock actually applies to VM1?</p>",
 "opts": [
  "Read-only, because the most restrictive lock applies",
  "The most recently created lock",
  "Delete, because the parent's lock wins",
  "None, because the two locks cancel each other out"
 ],
 "ans": 0,
 "expl": "<p>Locks are inherited, and when several apply, the <b>most restrictive</b> wins. Read-only is more restrictive than Delete: VM1 can be neither deleted nor modified.</p><p>Locks never cancel each other out, and creation order doesn't matter.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Locks",
  "menu": [
   "Overview",
   "*Locks"
  ],
  "rows": [
   [
    "Lock inherited from RG1",
    "Delete"
   ],
   [
    "*Lock on VM1",
    "Read-only"
   ],
   [
    "Effect",
    "Most restrictive: Read-only"
   ]
  ]
 },
 "keep": "Several locks: the most restrictive applies."
},
{
 "id": "D1-085",
 "dom": 1,
 "type": "single",
 "stem": "<p>You apply a <b>Read-only</b> lock to the web app WebApp1 (Azure App Service).</p><p>Which consequence should you expect?</p>",
 "opts": [
  "Users can no longer reach the site",
  "You can no longer change WebApp1's configuration or scale it",
  "The site's content is deleted",
  "WebApp1 automatically switches to the Free tier"
 ],
 "ans": 1,
 "expl": "<p>The Read-only lock blocks management operations that write: changing app settings, changing plans, adding an instance. It also prevents tools like Visual Studio Server Explorer from displaying the site's files, because that interaction requires write access.</p><p>The site itself keeps responding: locks don't touch user traffic. Nothing is deleted or modified.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Locks",
  "menu": [
   "Overview",
   "Configuration",
   "*Locks"
  ],
  "rows": [
   [
    "*Lock type",
    "Read-only"
   ],
   [
    "Configuration, scaling",
    "Blocked"
   ],
   [
    "User traffic",
    "Not affected"
   ]
  ]
 },
 "keep": "A lock blocks management, never the service delivered to users."
},
{
 "id": "D1-086",
 "dom": 1,
 "type": "single",
 "stem": "<p>You create the management group MG-Finance. You need to move the subscription Sub-Finance, which is under the root management group, into it.</p><p>Which permissions do you need, at a minimum?</p>",
 "opts": [
  "Global Administrator in Microsoft Entra ID only",
  "Contributor on Sub-Finance only",
  "Owner of Sub-Finance and Management Group Contributor on MG-Finance",
  "Reader on Sub-Finance only"
 ],
 "ans": 2,
 "expl": "<p>Moving a subscription requires rights on both sides: on the <b>subscription</b> (Owner) and on the <b>target management group</b> (Management Group Contributor or Owner), as well as on the current parent if it isn't the root.</p><p>Reader and Contributor are not enough. Global Administrator is an Entra role: it must first elevate its access to act on management groups.</p>",
 "portal": {
  "path": [
   "Management groups",
   "MG-Finance"
  ],
  "title": "MG-Finance | Subscriptions",
  "menu": [
   "Overview",
   "*Subscriptions",
   "Access control (IAM)"
  ],
  "rows": [
   [
    "*Add subscription",
    "Sub-Finance"
   ],
   [
    "Required rights",
    "Subscription Owner + Management Group Contributor on the target"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Moving a subscription: Owner of the subscription and write rights on the target management group (and the current parent)."
},
{
 "id": "D1-087",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your organization has several subscriptions. You need to group the Dev and Test subscriptions to apply the same policies to them, without affecting the production subscriptions.</p><p>What should you create?</p>",
 "opts": [
  "A shared resource group",
  "A Non-Prod tag on each subscription",
  "A separate Microsoft Entra tenant",
  "A Non-Prod management group containing Dev and Test"
 ],
 "ans": 3,
 "expl": "<p>A <b>management group</b> groups subscriptions so that policies and roles are inherited. Non-Prod will contain Dev and Test, and the production subscriptions will stay elsewhere.</p><p>A resource group lives in a single subscription. A separate tenant is far too heavy. Policies don't apply “by subscription tag”.</p>",
 "portal": {
  "path": [
   "Management groups"
  ],
  "title": "Create management group",
  "menu": [
   "*Management groups"
  ],
  "rows": [
   [
    "Management group ID",
    "Non-Prod"
   ],
   [
    "*Subscriptions",
    "Dev, Test"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Same policies for several subscriptions = management group."
},
{
 "id": "D1-088",
 "dom": 1,
 "type": "single",
 "stem": "<p>Cost analysis for the subscription Sub1 shows a sharp increase this month. You need to identify which <b>Azure service</b> is responsible.</p><p>What should you do in cost analysis?</p>",
 "opts": [
  "Group by Service name",
  "Create a budget",
  "Open the activity log",
  "Export the costs to a storage account"
 ],
 "ans": 0,
 "expl": "<p>In <b>cost analysis</b>, the <b>Group by</b> option (service name, resource group, resource, tag, location…) shows how spending is split. Grouping by service name reveals the one that increased.</p><p>A budget alerts for the future. An export is for archiving or analyzing elsewhere. The activity log contains no costs.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Cost analysis",
  "menu": [
   "Overview",
   "*Cost analysis",
   "Budgets"
  ],
  "rows": [
   [
    "*Group by",
    "Service name"
   ],
   [
    "Virtual Machines",
    "68%"
   ],
   [
    "Storage",
    "12%"
   ]
  ]
 },
 "keep": "Finding where an increase comes from = Cost analysis > Group by (service, resource, tag…)."
},
{
 "id": "D1-089",
 "dom": 1,
 "type": "single",
 "stem": "<p>The finance department wants to receive a daily CSV file of the Azure costs of the subscription Sub1, to import into its own tool.</p><p>What should you configure?</p>",
 "opts": [
  "A daily budget alert",
  "A scheduled export in Cost Management to a storage account",
  "A subscription diagnostic setting to Log Analytics",
  "An Azure Advisor recommendation"
 ],
 "ans": 1,
 "expl": "<p>Cost Management <b>exports</b> write cost data to a <b>storage account</b>, at a chosen frequency (daily, weekly, monthly), in CSV or Parquet format.</p><p>A budget alert sends a message, not a data file. Advisor doesn't produce a cost file. The subscription diagnostic setting sends the activity log, not costs.</p>",
 "portal": {
  "path": [
   "Cost Management + Billing"
  ],
  "title": "Exports › Create",
  "menu": [
   "Cost analysis",
   "Budgets",
   "*Exports"
  ],
  "rows": [
   [
    "*Metric",
    "Actual cost"
   ],
   [
    "*Frequency",
    "Daily export"
   ],
   [
    "Format",
    "CSV"
   ],
   [
    "Storage account",
    "stfinance"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Regular cost file = Cost Management export to a storage account."
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
 "id": "D1-091",
 "dom": 1,
 "type": "single",
 "stem": "<p>Besides sending an email, a budget alert must trigger an Azure Automation runbook that stops the development VMs.</p><p>What should you associate with the budget?</p>",
 "opts": [
  "An Azure Policy",
  "A resource lock",
  "An action group",
  "A reservation"
 ],
 "ans": 2,
 "expl": "<p>Budgets accept an Azure Monitor <b>action group</b>. An action group can send emails and SMS, but also start an Automation runbook, an Azure function, a logic app, or a webhook.</p><p>The other answers don't react to an alert.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1",
   "Budgets"
  ],
  "title": "Create budget | Set alerts",
  "menu": [
   "Create a budget",
   "*Set alerts"
  ],
  "rows": [
   [
    "Alert conditions",
    "Actual · 100%"
   ],
   [
    "*Action group",
    "AG-StopDev (Automation runbook)"
   ],
   [
    "Recipients",
    "finops@contoso.com"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Making a budget act (runbook, function, webhook) = action group."
},
{
 "id": "D1-092",
 "dom": 1,
 "type": "single",
 "stem": "<p>You move the virtual machine VM1 to another resource group in the same subscription. VM1 uses a managed disk, a network interface, and a public IP address, all in RG1. The virtual network stays in RG1.</p><p>What happens to VM1's public IP address?</p>",
 "opts": [
  "Its address changes automatically",
  "It stays in RG1 and can no longer be associated with VM1",
  "It must be deleted before the move",
  "It can be moved with VM1 and keeps the same address"
 ],
 "ans": 3,
 "expl": "<p>A move between resource groups changes neither the region nor the configuration: the public IP address can be moved with the VM, and its address doesn't change. The virtual network can stay in RG1: a network interface can reference a virtual network in another resource group.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "Move to another resource group",
  "menu": [
   "*Resources",
   "Validate",
   "Review"
  ],
  "rows": [
   [
    "VM1, disk, network interface",
    "To move"
   ],
   [
    "*Public IP",
    "To move · same address"
   ],
   [
    "Virtual network",
    "Stays in RG1"
   ]
  ],
  "btn": "Move"
 },
 "keep": "A move changes neither the IP address, nor the region, nor the configuration."
},
{
 "id": "D1-093",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow an external auditor to read the Microsoft Entra ID audit logs and the directory configuration, without changing anything.</p><p>Which Microsoft Entra role should you assign?</p>",
 "opts": [
  "Global Reader",
  "User",
  "Reader (Azure role) on the subscription",
  "Security Administrator"
 ],
 "ans": 0,
 "expl": "<p><b>Global Reader</b> can read everything a Global Administrator can read, including audit and sign-in logs, without being able to change anything.</p><p>The Azure Reader role applies to Azure resources, not to the directory. Security Administrator can change security settings. A plain user has no access to audit logs.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Roles and administrators"
  ],
  "title": "Global Reader | Assignments",
  "menu": [
   "*Assignments",
   "Description"
  ],
  "rows": [
   [
    "*Role",
    "Global Reader"
   ],
   [
    "Member",
    "auditor@firm.com"
   ]
  ],
  "btn": "+ Add assignments"
 },
 "keep": "Read everything in Entra (including logs), change nothing = Global Reader."
},
{
 "id": "D1-094",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow a Microsoft Entra application (service principal) to start and stop the VMs in RG1 from a script.</p><p>What should you do?</p>",
 "opts": [
  "Add the service principal to an administrative unit",
  "Assign an Azure role to the service principal on RG1",
  "Assign the service principal the Entra role Application Administrator",
  "Create an Azure Policy for the application"
 ],
 "ans": 1,
 "expl": "<p>A <b>service principal</b> is an identity like a user: you assign it an Azure role (for example Virtual Machine Contributor or a custom role) at the desired scope.</p><p>Administrative units and the Application Administrator role apply to the directory. Azure Policy grants no permissions.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "Role",
    "Virtual Machine Contributor"
   ],
   [
    "*Assign access to",
    "User, group, or service principal"
   ],
   [
    "Members",
    "app-scripts"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "A service principal receives Azure roles just like a user."
},
{
 "id": "D1-095",
 "dom": 1,
 "type": "single",
 "stem": "<p>A virtual machine must read secrets from a key vault without storing a password or certificate in its code.</p><p>What should you configure on the VM?</p>",
 "opts": [
  "A shared access key for the key vault",
  "A read-only lock on the key vault",
  "A managed identity, with a role that grants access to secrets on the vault",
  "A dedicated Microsoft Entra user account"
 ],
 "ans": 2,
 "expl": "<p>A <b>managed identity</b> gives the VM a Microsoft Entra identity whose credentials Azure manages. You then assign it a role, for example <b>Key Vault Secrets User</b>, on the vault.</p><p>A user account would require storing a password. Key vaults have no “shared access key”. A lock grants no access.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Identity",
  "menu": [
   "Overview",
   "Networking",
   "*Identity"
  ],
  "rows": [
   [
    "*System assigned · Status",
    "On"
   ],
   [
    "Azure role assignments",
    "Key Vault Secrets User on kv1"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Access to Azure with no secret in the code = managed identity + role on the target resource."
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
 "id": "D1-097",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your company wants the subscription Sub2 to be billed to another credit card and managed by another finance team, while staying in the same Microsoft Entra tenant.</p><p>Which statement is true?</p>",
 "opts": [
  "A tenant can have only one subscription",
  "Sub2 must be merged into Sub1",
  "You must create a second Microsoft Entra tenant",
  "A subscription has its own billing account, independent of the tenant"
 ],
 "ans": 3,
 "expl": "<p><b>Billing</b> and the <b>directory</b> are two separate things. Several subscriptions in the same tenant can be linked to different billing accounts or profiles, with different payment methods.</p><p>A tenant can contain many subscriptions, and each subscription trusts a single tenant. Subscriptions are not “merged”.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub2"
  ],
  "title": "Sub2 | Overview",
  "menu": [
   "*Overview",
   "Invoices",
   "Payment methods"
  ],
  "rows": [
   [
    "Directory",
    "contoso.com (unchanged)"
   ],
   [
    "*Billing profile",
    "Finance-Team2"
   ]
  ]
 },
 "keep": "Billing and directory are independent: several subscriptions in one tenant can be billed separately."
},
{
 "id": "D1-098",
 "dom": 1,
 "type": "single",
 "stem": "<p>The subscription Sub1 hits a quota limit: you can't create more than 20 vCPUs of the DSv5 family in France Central.</p><p>What should you do?</p>",
 "opts": [
  "Request a quota increase from the Usage + quotas page",
  "Buy a reservation",
  "Create a new resource group",
  "Remove the tags from existing VMs"
 ],
 "ans": 0,
 "expl": "<p>vCPU quotas are set <b>per subscription, per region, and per VM family</b>. You request an increase from <b>Subscription > Usage + quotas</b> (or through a support request). Many requests are approved automatically.</p><p>Changing resource groups doesn't change the subscription's quota. A reservation is a discount, not a quota. Tags have no effect.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Usage + quotas",
  "menu": [
   "Overview",
   "*Usage + quotas"
  ],
  "rows": [
   [
    "*Standard DSv5 Family vCPUs · France Central",
    "20 / 20"
   ]
  ],
  "btn": "New quota request"
 },
 "keep": "vCPU quota = per subscription, region, and family; request an increase in Usage + quotas."
},
{
 "id": "D1-099",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to prevent a guest user from seeing the list of other users and groups in your directory. They must see only the properties of their own account.</p><p>Which setting should you choose for <b>Guest user access restrictions</b>?</p>",
 "opts": [
  "Guest users have the same access as members",
  "Guest user access is restricted to properties and memberships of their own directory objects",
  "Guest users have limited access to properties and memberships of directory objects",
  "No guest can sign in"
 ],
 "ans": 1,
 "expl": "<p>The most restrictive setting, <b>“restricted to properties and memberships of their own directory objects”</b>, prevents guests from enumerating users, groups, and other directory objects.</p><ul><li>“Same access as members” is the most permissive.</li><li>“Limited access” (the default) prevents enumerating users, but still shows some information, such as the members of non-hidden groups.</li><li>“No guest can sign in” is not an option of this setting.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "External Identities"
  ],
  "title": "External collaboration settings",
  "menu": [
   "Overview",
   "*External collaboration settings"
  ],
  "rows": [
   [
    "#Guest user access restrictions",
    ""
   ],
   [
    "*Choice",
    "Guest user access is restricted to properties and memberships of their own directory objects (most restrictive)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Three levels for guests: same access as members, limited access (default), their own objects only."
},
{
 "id": "D1-100",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate governance tool for each need.</p><p>To answer, drag the appropriate tool to each need. Each tool may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tools",
 "srcs": [
  "Azure Policy",
  "Resource lock",
  "Role-based access control (RBAC)",
  "Tag",
  "Management group"
 ],
 "tgtHead": [
  "Need",
  "Tool"
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
 "id": "D1-101",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to list all Azure roles assigned to users who were deleted from Microsoft Entra ID.</p><p>How do these assignments appear in the Access control (IAM) tab?</p>",
 "opts": [
  "They are transferred to the user's manager",
  "They appear as group assignments",
  "They appear with the type “Unknown” and the name “Identity not found”",
  "They are deleted automatically with the user"
 ],
 "ans": 2,
 "expl": "<p>Deleting a user doesn't delete their Azure role assignments. They stay visible with the type <b>Unknown</b> and the label <b>Identity not found</b>. It's best to clean them up, since they count toward the subscription's assignment limit.</p>",
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
    "*Identity not found",
    "Type: Unknown · Contributor"
   ]
  ]
 },
 "keep": "Deleted user: their assignments remain, as “Identity not found”; clean them up."
},
{
 "id": "D1-102",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your subscription is approaching the limit on the number of Azure role assignments.</p><p>Which practice reduces the number of assignments the most?</p>",
 "opts": [
  "Create one custom role per user",
  "Assign roles on each resource rather than on the resource group",
  "Use tags instead of roles",
  "Assign roles to groups rather than to each user"
 ],
 "ans": 3,
 "expl": "<p>Assigning a role to a <b>group</b> creates a single assignment, whatever the number of members. It's also easier to manage: you just add or remove people from the group.</p><p>Assigning on each resource multiplies assignments. So does one role per user. Tags grant no permissions.</p>",
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
    "*GRP-Operations · Contributor",
    "1 assignment for 40 members"
   ]
  ]
 },
 "keep": "Assign to groups rather than people: fewer assignments, simpler management."
},
{
 "id": "D1-103",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to find out who assigned the Owner role to User11 on the subscription Sub1 last week.</p><p>Where should you look?</p>",
 "opts": [
  "In the activity log of Sub1, operation “Create role assignment”",
  "In the metrics of Sub1",
  "In Azure Advisor",
  "In the Microsoft Entra ID sign-in logs"
 ],
 "ans": 0,
 "expl": "<p>Azure role assignments are control plane operations: they are recorded in the <b>activity log</b> (Administrative category), with the author and date, for 90 days.</p><p>Sign-in logs show authentications. Advisor and metrics don't record operations.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Activity log",
  "menu": [
   "Overview",
   "*Activity log"
  ],
  "rows": [
   [
    "*Operation",
    "Create role assignment"
   ],
   [
    "Event initiated by",
    "admin2@contoso.com"
   ],
   [
    "Timespan",
    "Last 7 days"
   ]
  ]
 },
 "keep": "Who did what on the control plane (including roles) = activity log, 90 days."
},
{
 "id": "D1-104",
 "dom": 1,
 "type": "single",
 "stem": "<p>A developer must be able to create resource groups and resources in the subscription Sub-Dev, but must never be able to create a VPN gateway.</p><p>Which combination meets the need?</p>",
 "opts": [
  "Reader role on Sub-Dev",
  "Contributor role on Sub-Dev and an Azure Policy that denies the virtual network gateway resource type",
  "Network Contributor role on Sub-Dev",
  "Owner role on Sub-Dev and a ReadOnly lock"
 ],
 "ans": 1,
 "expl": "<p><b>Contributor</b> lets you create resource groups and resources. The built-in <b>Not allowed resource types</b> policy (Deny effect) with <code>Microsoft.Network/virtualNetworkGateways</code> blocks gateways for everyone in the subscription.</p><p>Reader doesn't allow creating. A ReadOnly lock would block any creation. Network Contributor allows only network resources, and gateways in particular.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy | Parameters",
  "menu": [
   "Basics",
   "*Parameters"
  ],
  "rows": [
   [
    "Definition",
    "Not allowed resource types"
   ],
   [
    "*Resource types",
    "Microsoft.Network/virtualNetworkGateways"
   ],
   [
    "Scope",
    "Sub-Dev"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "RBAC says who can act; Azure Policy forbids a resource type for everyone."
},
{
 "id": "D1-105",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow users to change their profile photo and mobile phone number in Microsoft Entra ID, but not their department or job title.</p><p>These attributes are synchronized from on-premises Active Directory. Where must the users' department be changed?</p>",
 "opts": [
  "In the My Account portal",
  "In an Azure Policy",
  "In on-premises Active Directory, since the attribute is synchronized",
  "In the user's properties in Microsoft Entra ID"
 ],
 "ans": 2,
 "expl": "<p>For a <b>synchronized</b> user, the source of authority is on-premises Active Directory: synchronized attributes (department, job title, name…) are changed <b>in AD DS</b>, then Microsoft Entra Connect carries the change to the cloud.</p><p>In the Entra portal, these fields are read-only for a synchronized account. Azure Policy doesn't manage users.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "User1"
  ],
  "title": "User1 | Properties",
  "menu": [
   "Overview",
   "*Properties"
  ],
  "rows": [
   [
    "Source",
    "Windows Server AD"
   ],
   [
    "*Department",
    "Read-only (synchronized)"
   ]
  ]
 },
 "keep": "Synchronized account: change attributes in on-premises AD; sync carries them over."
},
{
 "id": "D1-106",
 "dom": 1,
 "type": "single",
 "stem": "<p>You want new users in your tenant to be <b>unable</b> to create Microsoft Entra tenants or app registrations.</p><p>Where should you configure these restrictions?</p>",
 "opts": [
  "Root management group > Access control (IAM)",
  "Microsoft Entra ID > Devices > Device settings",
  "Subscription > Policies",
  "Microsoft Entra ID > Users > User settings"
 ],
 "ans": 3,
 "expl": "<p>The <b>User settings</b> page contains, among others, “Users can register applications”, “Restrict non-admin users from creating tenants”, and “Restrict access to Microsoft Entra admin center”.</p><p>Azure Policy and Azure access control apply to Azure resources. Device settings cover joining and registering devices.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users"
  ],
  "title": "Users | User settings",
  "menu": [
   "All users",
   "*User settings"
  ],
  "rows": [
   [
    "*Users can register applications",
    "No"
   ],
   [
    "*Restrict non-admin users from creating tenants",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "App registrations and tenant creation by users = User settings."
},
{
 "id": "D1-107",
 "dom": 1,
 "type": "single",
 "stem": "<p>User12 must be able to create, move, and delete the organization's management groups, but not manage the resources in the subscriptions.</p><p>Which Azure role should you assign on the root management group?</p>",
 "opts": [
  "Management Group Contributor",
  "Contributor",
  "User Access Administrator",
  "Management Group Reader"
 ],
 "ans": 0,
 "expl": "<p><b>Management Group Contributor</b> lets you create, move, and delete management groups, and move subscriptions between them, with no rights on the subscriptions' resources.</p><p>Contributor on the root would grant access to every resource. Management Group Reader only allows reading. User Access Administrator manages roles, not the hierarchy.</p>",
 "portal": {
  "path": [
   "Management groups",
   "Tenant root group"
  ],
  "title": "Tenant root group | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Management Group Contributor"
   ],
   [
    "Members",
    "User12"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Managing the hierarchy without touching resources = Management Group Contributor."
},
{
 "id": "D1-108",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to apply a custom policy to the subscription Sub1 that forbids public IP addresses on network interfaces. The definition doesn't exist yet.</p><p>Where should you save the definition so you can assign it to Sub1 and the other subscriptions of MG-Prod?</p>",
 "opts": [
  "In the Microsoft Entra tenant",
  "In the management group MG-Prod",
  "In the subscription Sub1",
  "In a resource group in Sub1"
 ],
 "ans": 1,
 "expl": "<p>The <b>definition location</b> determines where it can be assigned: at that scope and below. Saved in <b>MG-Prod</b>, it can be assigned to MG-Prod and all its subscriptions.</p><p>Saved in Sub1, it could be used only in Sub1. You can't save a definition in a resource group or in the Entra tenant.</p>",
 "portal": {
  "path": [
   "Policy",
   "Definitions"
  ],
  "title": "New policy definition",
  "menu": [
   "Overview",
   "*Definitions"
  ],
  "rows": [
   [
    "*Definition location",
    "MG-Prod"
   ],
   [
    "Name",
    "Deny public IPs on network interfaces"
   ]
  ],
  "btn": "Save"
 },
 "keep": "A definition can be assigned at its location and below: place it high enough."
},
{
 "id": "D1-109",
 "dom": 1,
 "type": "single",
 "stem": "<p>Members of the Support group must be able to open Azure support requests on the subscription Sub1, with no other rights.</p><p>Which role should you assign on Sub1?</p>",
 "opts": [
  "Contributor",
  "Reader",
  "Support Request Contributor",
  "Helpdesk Administrator"
 ],
 "ans": 2,
 "expl": "<p><b>Support Request Contributor</b> lets you create and manage support requests, and read the subscription. It's the least privilege.</p><p>Reader doesn't allow opening a request. Contributor grants far too many rights. <b>Helpdesk Administrator</b> is a Microsoft Entra role that resets passwords: a classic false friend.</p>",
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
    "*Role",
    "Support Request Contributor"
   ],
   [
    "Members",
    "Support"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Opening Azure tickets = Support Request Contributor (Azure role). Don't confuse with Helpdesk Administrator (Entra)."
},
{
 "id": "D1-110",
 "dom": 1,
 "type": "order",
 "stem": "<p>You need to ensure that all existing and future resources in the subscription Sub1 have the tag Environment=Prod, copied from the subscription.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 ],
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
 "keep": "Tag on the source, Modify policy with an identity, then a remediation task for existing resources."
}
);
