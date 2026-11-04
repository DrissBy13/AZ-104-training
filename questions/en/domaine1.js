/* Domaine 1 : Identités et gouvernance */
AZ.questions.push(
{
 "id": "D1-002",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the Azure environment shown in the Hierarchy exhibit (click the <b>Hierarchy</b> tab).</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p><b>NOTE:</b> Each correct selection is worth one point.</p>",
 "docs": [
  {
   "t": "Hierarchy",
   "h": "<p>Your Azure environment is organized as follows:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Object</th><th>Type</th><th>Parent</th></tr><tr><td>MG1</td><td>Management group</td><td>Tenant root group</td></tr><tr><td>Sub1</td><td>Subscription</td><td>MG1</td></tr><tr><td>Sub2</td><td>Subscription</td><td>MG1</td></tr><tr><td>RG1</td><td>Resource group</td><td>Sub1</td></tr><tr><td>RG2</td><td>Resource group</td><td>Sub1</td></tr></table></div><p>Role assignments:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Reader</td><td>MG1</td></tr><tr><td>User1</td><td>Contributor</td><td>RG1</td></tr></table></div>"
  }
 ],
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
 "stem": "<p>You have an Azure subscription named Sub1 that contains a resource group named RG1.</p><p>You create a custom role named Role1 as shown in the Role1 exhibit (click the <b>Role1</b> tab). You assign Role1 to User1 on RG1.</p><p>Which operations can User1 perform?</p>",
 "docs": [
  {
   "t": "Role1",
   "h": "<p>Definition of the custom role Role1:</p><pre class=\"code\">{\n  \"Name\": \"Role1\",\n  \"IsCustom\": true,\n  \"Actions\": [\n    \"Microsoft.Compute/virtualMachines/read\",\n    \"Microsoft.Compute/virtualMachines/start/action\",\n    \"Microsoft.Compute/virtualMachines/restart/action\"\n  ],\n  \"NotActions\": [],\n  \"DataActions\": [],\n  \"AssignableScopes\": [ \"/subscriptions/Sub1\" ]\n}</pre>"
  }
 ],
 "opts": [
  "Start and restart the VMs in RG1, but not stop them",
  "Start, restart, and stop (deallocate) the VMs in RG1",
  "Create and delete virtual machines in RG1",
  "Start the VMs in every resource group of Sub1"
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
 "keep": "Who can invite: Guest invite restrictions. Which domains: Collaboration restrictions. What guests can see: Guest user access restrictions.",
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
 }
},
{
 "id": "D1-007",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You need to prevent the accidental deletion of resources by using resource locks.</p><p>At which two scopes can you apply a lock? Each correct answer presents a complete solution.</p><p>For each of the following scopes, select Yes if you can apply a lock to it. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A subscription",
   "a": 0
  },
  {
   "l": "A management group",
   "a": 1
  },
  {
   "l": "A resource group",
   "a": 0
  },
  {
   "l": "The Microsoft Entra tenant",
   "a": 1
  }
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
}
);
