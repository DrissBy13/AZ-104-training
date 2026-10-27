/* Domaine 1 : Identités et gouvernance */
AZ.questions.push(
{
 "id": "D1-001",
 "dom": 1,
 "type": "single",
 "stem": "<p>You have an Azure subscription that contains a resource group named RG1. RG1 contains virtual machines, virtual networks, and storage accounts.</p><p>User1 must be able to create, start, stop, and delete the virtual machines in RG1. User1 must not be able to manage the virtual networks or the storage accounts.</p><p>The solution must follow the principle of least privilege.</p><p>Which role should you assign to User1, and at which scope?</p>",
 "opts": [
  "Contributor on RG1",
  "Virtual Machine Contributor on RG1",
  "Owner on RG1",
  "Virtual Machine Contributor on the subscription"
 ],
 "ans": 1,
 "expl": "<p>The built-in <b>Virtual Machine Contributor</b> role lets you create, start, stop, resize, and delete VMs. It grants <b>no</b> right to modify virtual networks or storage accounts (it can only “join” a network interface to an existing subnet), and it does not let you manage access.</p><p>Assigned on <b>RG1</b>, it applies to that resource group only: that is least privilege.</p><ul><li><b>Contributor on RG1</b>: manages <i>all</i> resources in RG1, including networks and storage. Too broad.</li><li><b>Owner on RG1</b>: like Contributor, plus access management. Even broader.</li><li><b>Virtual Machine Contributor on the subscription</b>: right role, wrong scope (every VM in the subscription).</li></ul>",
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
    "#Add role assignment",
    ""
   ],
   [
    "*Role",
    "Virtual Machine Contributor"
   ],
   [
    "Assign access to",
    "User, group, or service principal"
   ],
   [
    "Members",
    "User1"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Least privilege = the most specific role (here Virtual Machine Contributor) at the smallest scope that covers the need (here RG1)."
},
{
 "id": "D1-002",
 "dom": 1,
 "type": "yngrid",
 "docs": [
  {
   "t": "Hierarchy",
   "h": "<p>Your Azure environment is organized as follows:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Object</th><th>Type</th><th>Parent</th></tr><tr><td>MG1</td><td>Management group</td><td>Tenant root group</td></tr><tr><td>Sub1</td><td>Subscription</td><td>MG1</td></tr><tr><td>Sub2</td><td>Subscription</td><td>MG1</td></tr><tr><td>RG1</td><td>Resource group</td><td>Sub1</td></tr><tr><td>RG2</td><td>Resource group</td><td>Sub1</td></tr></table></div><p>Role assignments:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Reader</td><td>MG1</td></tr><tr><td>User1</td><td>Contributor</td><td>RG1</td></tr></table></div>"
  }
 ],
 "stem": "<p>You have the Azure environment shown in the Hierarchy exhibit (click the <b>Hierarchy</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "User1 can create a storage account in RG1.",
   "a": 0
  },
  {
   "l": "User1 can create a resource group in Sub1.",
   "a": 1
  },
  {
   "l": "User1 can view the resources in Sub2.",
   "a": 0
  }
 ],
 "expl": "<p>Two rules are enough: Azure roles are <b>inherited downward</b> (management group → subscription → resource group → resource) and they are <b>additive</b>.</p><ul><li><b>Storage account in RG1: Yes.</b> On RG1, User1 has both Reader (inherited from MG1) and Contributor (assigned on RG1). Contributor can create resources.</li><li><b>Resource group in Sub1: No.</b> Creating a resource group is a write operation <i>on the subscription</i>. On Sub1, User1 only has Reader (inherited from MG1).</li><li><b>View the resources in Sub2: Yes.</b> Sub2 is under MG1: the inherited Reader role is enough to see its resources.</li></ul>",
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
    "#Check access › User1",
    ""
   ],
   [
    "*Reader",
    "Inherited (MG1)"
   ],
   [
    "*Contributor",
    "This resource (RG1)"
   ]
  ]
 },
 "keep": "A role assigned high up flows down to everything below; roles received at several levels add up. Creating a resource group requires rights on the subscription."
},
{
 "id": "D1-003",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You manage an Azure subscription. You need to meet the following requirements.</p><p>Which feature should you use for each requirement? To answer, drag the appropriate feature to each requirement. Each feature may be used once, more than once, or not at all.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "srcLabel": "Features",
 "tgtHead": [
  "Requirement",
  "Feature"
 ],
 "srcs": [
  "Azure Policy",
  "Resource lock",
  "Tag",
  "Role-based access control (RBAC)",
  "Cost Management budget"
 ],
 "tgts": [
  {
   "l": "Prevent the accidental deletion of a storage account",
   "a": 1
  },
  {
   "l": "Prevent any deployment outside France Central",
   "a": 0
  },
  {
   "l": "Split the bill by company department",
   "a": 2
  },
  {
   "l": "Allow a user to restart virtual machines",
   "a": 3
  },
  {
   "l": "Be notified before monthly spending is exceeded",
   "a": 4
  }
 ],
 "expl": "<p>Each governance tool answers a different question:</p><ul><li><b>Resource lock</b>: “can this resource be deleted or modified?” A CanNotDelete lock blocks deletion, even for an Owner.</li><li><b>Azure Policy</b>: “which configurations are allowed?” The Allowed locations policy with the Deny effect rejects any deployment outside France Central, for everyone.</li><li><b>Tag</b>: “who does this resource belong to?” A Department tag lets you filter and group cost analysis.</li><li><b>RBAC</b>: “who can do what?” A role such as Virtual Machine Contributor grants the right to restart VMs.</li><li><b>Budget</b>: “how much are we spending?” It sends alerts on actual or forecasted cost, without blocking anything.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Locks",
  "menu": [
   "Overview",
   "Access control (IAM)",
   "#Settings",
   "Configuration",
   "*Locks"
  ],
  "rows": [
   [
    "#Add lock",
    ""
   ],
   [
    "Lock name",
    "DoNotDelete"
   ],
   [
    "*Lock type",
    "Delete"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Lock = protect a resource; Policy = enforce rules; tag = classify and split costs; RBAC = grant rights; budget = get warned about spending."
},
{
 "id": "D1-004",
 "dom": 1,
 "type": "single",
 "docs": [
  {
   "t": "Role1",
   "h": "<p>Definition of the custom role Role1:</p><pre class=\"code\">{\n  \"Name\": \"Role1\",\n  \"IsCustom\": true,\n  \"Actions\": [\n    \"Microsoft.Compute/virtualMachines/read\",\n    \"Microsoft.Compute/virtualMachines/start/action\",\n    \"Microsoft.Compute/virtualMachines/restart/action\"\n  ],\n  \"NotActions\": [],\n  \"DataActions\": [],\n  \"AssignableScopes\": [ \"/subscriptions/Sub1\" ]\n}</pre>"
  }
 ],
 "stem": "<p>You have an Azure subscription named Sub1 that contains a resource group named RG1.</p><p>You create a custom role named Role1 as shown in the Role1 exhibit (click the <b>Role1</b> tab). You assign Role1 to User1 on RG1.</p><p>Which operations can User1 perform?</p>",
 "opts": [
  "Start and restart the virtual machines in RG1, but not stop them",
  "Start, restart, and stop (deallocate) the virtual machines in RG1",
  "Create virtual machines in RG1",
  "Start the virtual machines in every resource group of Sub1"
 ],
 "ans": 0,
 "expl": "<p>A custom role allows <b>only</b> the actions listed in <code>Actions</code>:</p><ul><li><code>virtualMachines/read</code>: view the VMs;</li><li><code>start/action</code>: start them;</li><li><code>restart/action</code>: restart them.</li></ul><p><code>powerOff/action</code> (stop) and <code>deallocate/action</code> (stop and deallocate) are missing: User1 cannot stop the VMs. <code>virtualMachines/write</code> is missing too: he cannot create any.</p><p>Finally, the role is <b>assigned on RG1</b>: it does not apply to the other resource groups of Sub1. <code>AssignableScopes</code> only says <i>where the role can be assigned</i>, not where it applies.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Access control (IAM) › Roles",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "#Role1 › Permissions",
    ""
   ],
   [
    "*Microsoft.Compute/virtualMachines/start/action",
    "Start Virtual Machine"
   ],
   [
    "*Microsoft.Compute/virtualMachines/restart/action",
    "Restart Virtual Machine"
   ],
   [
    "Microsoft.Compute/virtualMachines/read",
    "Get Virtual Machine"
   ]
  ]
 },
 "keep": "A custom role allows only what is written in Actions. Start ≠ powerOff ≠ deallocate: each operation has its own action."
},
{
 "id": "D1-005",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You have a Microsoft Entra tenant named contoso.com. Currently, all users can invite external users.</p><p>You need to ensure that only users who have the Guest Inviter, User Administrator, or Global Administrator role can invite guest users.</p><p>How should you configure the settings? To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "External collaboration settings",
  "sub": "Microsoft Entra ID | External Identities",
  "rows": [
   {
    "k": "head",
    "t": "Guest invite restrictions"
   },
   {
    "k": "radio",
    "l": "",
    "opts": [
     "Anyone in the organization can invite guest users including guests and non-admins (most inclusive)",
     "Member users and users assigned to specific admin roles can invite guest users including guests with member permissions",
     "Only users assigned to specific admin roles can invite guest users",
     "No one in the organization can invite guest users including admins (most restrictive)"
    ],
    "d": 0,
    "a": 2,
    "name": "Guest invite restrictions"
   }
  ]
 },
 "expl": "<p>The setting is in <b>Microsoft Entra ID → External Identities → External collaboration settings</b>, under <b>Guest invite restrictions</b>.</p><ul><li>Option 1 (current value): everyone can invite, even guests.</li><li>Option 2: all <b>members</b> can still invite. Does not meet the requirement.</li><li><b>Option 3: only specific admin roles</b> (Guest Inviter, User Administrator, Global Administrator…) can invite. This is the right one.</li><li>Option 4: no one, not even admins. Too restrictive.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "External Identities"
  ],
  "title": "External collaboration settings",
  "menu": [
   "Overview",
   "All identity providers",
   "*External collaboration settings",
   "Cross-tenant access settings"
  ],
  "rows": [
   [
    "#Guest invite restrictions",
    ""
   ],
   [
    "*Choice",
    "Only users assigned to specific admin roles can invite guest users"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Who can invite: Guest invite restrictions. Which domains: Collaboration restrictions. What guests can see: Guest user access restrictions."
},
{
 "id": "D1-006",
 "dom": 1,
 "type": "single",
 "stem": "<p>You try to assign a Microsoft 365 license to a new user named User5. The assignment fails.</p><p>Which property of User5 should you set?</p>",
 "opts": [
  "Department",
  "Job title",
  "Usage location",
  "Manager"
 ],
 "ans": 2,
 "expl": "<p>Microsoft 365 needs to know <b>in which country</b> the license will be used, because some services are not available everywhere. Without a <b>usage location</b> (usageLocation), the license assignment fails.</p><p>Department, job title, and manager are descriptive attributes: they do not block the assignment.</p><p>Tip: with group-based licensing, a user without a usage location inherits the tenant's location, but the error is still a classic on the exam.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "User5"
  ],
  "title": "User5 | Properties",
  "menu": [
   "Overview",
   "*Properties",
   "Licenses",
   "Groups"
  ],
  "rows": [
   [
    "#Settings",
    ""
   ],
   [
    "Account enabled",
    "Yes"
   ],
   [
    "*Usage location",
    "France"
   ]
  ]
 },
 "keep": "Can't assign a license? Check the user's usage location first."
},
{
 "id": "D1-007",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to prevent the accidental deletion of resources by using resource locks.</p><p>At which two scopes can you apply a lock? Each correct answer presents a complete solution.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "opts": [
  "A subscription",
  "A management group",
  "A resource group",
  "The Microsoft Entra tenant"
 ],
 "ans": [
  0,
  2
 ],
 "expl": "<p>A resource lock can be applied to a <b>subscription</b>, a <b>resource group</b>, or a <b>resource</b>. It is inherited by everything below.</p><ul><li><b>Management group: no.</b> There are no locks at this level; to protect a hierarchy, use Azure Policy or deny assignments (deployment stacks).</li><li><b>Microsoft Entra tenant: no.</b> Locks apply to Azure resources, not to the directory.</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Resource locks",
  "menu": [
   "Overview",
   "Access control (IAM)",
   "#Settings",
   "Resource groups",
   "*Resource locks"
  ],
  "rows": [
   [
    "#Add lock",
    ""
   ],
   [
    "*Lock type",
    "Delete"
   ],
   [
    "Notes",
    "Protects the whole subscription"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Locks: subscription, resource group, or resource. Never a management group or the tenant."
},
{
 "id": "D1-008",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You assign an Azure Policy named Policy1 to the management group MG1. Policy1 is configured as follows:</p><ul><li>Definition: Allowed locations</li><li>Parameter: France Central</li><li>Effect: Deny</li><li>Exclusion: the resource group RG-Test</li></ul><p>MG1 contains the subscription Sub1. Sub1 contains RG-Test and RG-Prod. Before the assignment, RG-Prod already contained a virtual machine named VM9 in West Europe.</p><p>What happens in each of the following cases? To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Creating a VM in West Europe in RG-Test:",
   "o": [
    "Succeeds",
    "Fails"
   ],
   "a": 0
  },
  {
   "l": "Creating a VM in West Europe in RG-Prod:",
   "o": [
    "Succeeds",
    "Fails"
   ],
   "a": 1
  },
  {
   "l": "VM9:",
   "o": [
    "Is deleted",
    "Is stopped",
    "Keeps running and is flagged as non-compliant"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>VM in RG-Test: succeeds.</b> RG-Test is in the assignment's <b>exclusions</b>: it is not evaluated.</li><li><b>VM in RG-Prod: fails.</b> The policy, assigned to MG1, flows down to Sub1 and RG-Prod. The <b>Deny</b> effect rejects the creation outside France Central.</li><li><b>VM9: keeps running and is flagged as non-compliant.</b> Azure Policy never acts on existing resources with Deny: it doesn't delete or stop anything. VM9 simply shows up in the compliance dashboard.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy",
  "menu": [
   "Overview",
   "Compliance",
   "*Assignments",
   "Definitions"
  ],
  "rows": [
   [
    "Scope",
    "MG1"
   ],
   [
    "*Exclusions",
    "Sub1/RG-Test"
   ],
   [
    "Policy definition",
    "Allowed locations"
   ],
   [
    "Allowed locations",
    "France Central"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Deny blocks new creations and updates, never existing resources. An exclusion removes a scope from evaluation."
},
{
 "id": "D1-009",
 "dom": 1,
 "type": "single",
 "stem": "<p>Admin1 is a Global Administrator of the Microsoft Entra tenant. Admin1 cannot see any Azure subscription in the portal.</p><p>Admin1 must be able to assign Azure roles in every subscription of the tenant.</p><p>What should you do?</p>",
 "opts": [
  "Assign the User Administrator role to Admin1",
  "Enable Access management for Azure resources in the Microsoft Entra ID properties",
  "Create a management group and add Admin1 to it",
  "Assign a Microsoft Entra ID P2 license to Admin1"
 ],
 "ans": 1,
 "expl": "<p><b>Microsoft Entra roles</b> (such as Global Administrator) manage the directory. <b>Azure roles</b> manage resources. By default, a Global Administrator has <b>no</b> Azure role, so he sees no subscription.</p><p>By enabling <b>Access management for Azure resources</b> in the Entra ID properties, he <b>elevates</b> his access: he receives the <b>User Access Administrator</b> role at the root scope <code>/</code>, and can then assign roles in every subscription and management group.</p><ul><li>User Administrator: an Entra role, with no effect on Azure.</li><li>You don't “add” a user to a management group.</li><li>A P2 license grants no rights on resources.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID"
  ],
  "title": "Microsoft Entra ID | Properties",
  "menu": [
   "Overview",
   "Users",
   "Groups",
   "#Manage",
   "*Properties"
  ],
  "rows": [
   [
    "Name",
    "Contoso"
   ],
   [
    "Tenant ID",
    "00000000-…"
   ],
   [
    "*Access management for Azure resources",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Global Administrator ≠ Azure access. To manage every subscription, he must elevate access (User Access Administrator at the root), then turn it off afterwards."
},
{
 "id": "D1-010",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to be notified by email when the <b>forecasted</b> cost of the resource group RG1 for the current month exceeds 80% of €1,000.</p><p>What should you configure?</p>",
 "opts": [
  "An Azure Advisor recommendation",
  "An Azure Policy with the Audit effect",
  "A budget on RG1 with an alert based on forecasted cost",
  "A metric alert on RG1"
 ],
 "ans": 2,
 "expl": "<p>A Cost Management <b>budget</b> sets an amount (here €1,000 per month) and <b>alert conditions</b> as a percentage, on <b>Actual</b> cost (already spent) or <b>Forecasted</b> cost (end-of-period projection). Here: type Forecasted, threshold 80%, with an email or an action group.</p><ul><li><b>Advisor</b> recommends savings, but does not alert on a threshold.</li><li><b>Azure Policy</b> controls resource configuration, not costs.</li><li><b>A metric alert</b> monitors technical values (CPU, requests…), not spending.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Budgets › Create budget",
  "menu": [
   "Overview",
   "#Cost Management",
   "Cost analysis",
   "Cost alerts",
   "*Budgets"
  ],
  "rows": [
   [
    "Amount",
    "€1,000"
   ],
   [
    "Reset period",
    "Monthly"
   ],
   [
    "#Alert conditions",
    ""
   ],
   [
    "*Type",
    "Forecasted"
   ],
   [
    "*% of budget",
    "80"
   ],
   [
    "Alert recipients",
    "finance@contoso.com"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Budget = alerts on actual or forecasted cost, at a percentage of the amount. It warns, it never blocks."
}
);
