/* Domain 1: identities and governance (batch I: D1-411 to D1-420, long scenarios) */
AZ.questions.push(
{
 "id": "D1-411",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso organizes its 40 subscriptions with management groups:</p><ul><li>the tenant root group contains MG-Corp, which contains MG-Prod and MG-Dev; each group holds subscriptions;</li><li>a Deny policy assigned to MG-Corp forbids regions outside Europe; an administrator of the Dev-01 subscription (in MG-Dev) tries to create a VM in East US;</li><li>every new subscription created in the tenant must land automatically in MG-Sandbox rather than at the root;</li><li>the team wants to add four levels of groups under MG-Prod (six levels total under the root); an architect claims it's impossible.</li></ul><p>What is true, and what should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM in East US in Dev-01:",
   "o": [
    "Allowed: the policy targets MG-Corp only",
    "Allowed: subscriptions don't inherit",
    "Allowed if the administrator is Owner",
    "Denied (inherited policy)"
   ],
   "a": 3
  },
  {
   "l": "New subscriptions:",
   "o": [
    "A Deny policy assigned to the root group",
    "Default group = MG-Sandbox",
    "A runbook",
    "A dynamic membership rule on MG-Sandbox"
   ],
   "a": 1
  },
  {
   "l": "Six levels under the root:",
   "o": [
    "Possible: six-level limit",
    "Not possible: three-level limit",
    "Possible: no depth limit",
    "Not possible: four-level limit"
   ],
   "a": 0
  },
  {
   "l": "Moving Dev-01 to MG-Prod:",
   "o": [
    "Owner + write on MG-Prod",
    "Contributor on Dev-01, with no right on groups",
    "Global Administrator alone",
    "Reader on MG-Prod and the parent group is enough"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Inheritance.</b> Policy and role assignments on a management group apply to all child groups, subscriptions and resources.<b>Default group.</b> In the hierarchy settings, you can choose the management group where new subscriptions land.<b>Depth.</b> A hierarchy can be six levels deep, not counting the root or the subscription level.<b>Moving.</b> You need rights on the subscription (Owner) and on the target group (for example Management Group Contributor), as well as on the current parent group.",
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
    "*VM in East US in Dev-01",
    "Denied (inherited policy)"
   ],
   [
    "New subscriptions",
    "Default group = MG-Sandbox"
   ],
   [
    "Six levels under the root",
    "Possible: six-level limit"
   ],
   [
    "Moving Dev-01 to MG-Prod",
    "Owner + write on MG-Prod"
   ]
  ]
 },
 "keep": "Policies inherited. New subscriptions = default group. Six levels under the root."
},
{
 "id": "D1-412",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam's finance department wants to control spending on the Projets subscription (monthly budget: €10,000):</p><ul><li>project managers must be emailed when actual spending reaches 80% of the budget;</li><li>the finance team wants to be warned before overspending, if the month's trend predicts more than 100%;</li><li>at 100% of actual spending, development VMs must be shut down automatically;</li><li>a project manager asks whether creating the budget is enough to stop spending at €10,000.</li></ul><p>What should you configure, and what's the answer to the project manager?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "80% alert:",
   "o": [
    "Azure Advisor cost recommendation",
    "Forecasted condition at 80% of the budget",
    "Actual condition at 80%",
    "Anomaly alert"
   ],
   "a": 2
  },
  {
   "l": "Alert before overspending:",
   "o": [
    "A daily cost export to an account",
    "Forecasted at 100%",
    "A metric alert",
    "Actual condition at 100% of the budget"
   ],
   "a": 1
  },
  {
   "l": "Shutting down VMs:",
   "o": [
    "The budget itself stops the development VMs",
    "A Deny policy",
    "An action group",
    "A ReadOnly lock set at 100% of the budget"
   ],
   "a": 2
  },
  {
   "l": "Does the budget stop spending?",
   "o": [
    "Yes, for pay-as-you-go subscriptions",
    "Yes, after 24 hours",
    "Yes: resources are blocked",
    "No: it only alerts"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Conditions.</b> A budget can alert on actual or forecasted costs, with percentage thresholds.<b>Automation.</b> A budget alert can trigger an action group, which runs an Automation runbook, a function or a logic app to stop resources.<b>No cap.</b> Budgets don't stop or block anything: they trigger notifications and actions. (Only some offers, like free credits, have a spending limit.)",
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
    "*80% alert",
    "Actual condition at 80%"
   ],
   [
    "Alert before overspending",
    "Forecasted at 100%"
   ],
   [
    "Shutting down VMs",
    "An action group"
   ],
   [
    "Does the budget stop spending?",
    "No: it only alerts"
   ]
  ]
 },
 "keep": "Actual = spent. Forecasted = trend. Action = action group. A budget stops nothing."
},
{
 "id": "D1-413",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso is rolling out tags. The team's questions:</p><ul><li>the Finance team has the Reader role on the subscription; it must be able to add and change tags on all resources, without being able to modify the resources themselves;</li><li>a script created the tag “environment = Prod” on some resources and “Environment = prod” on others; the team wants to know how Azure treats them;</li><li>an app adds 60 different tags to each resource;</li><li>an administrator wants to add the tag Owner=IT to a resource group without overwriting existing tags, with Azure CLI.</li></ul><p>What is true, and what should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Finance team:",
   "o": [
    "Contributor",
    "Tag Contributor",
    "Cost Management Contributor",
    "Resource Policy Contributor"
   ],
   "a": 1
  },
  {
   "l": "“environment” and “Environment”:",
   "o": [
    "Same value",
    "Error when creating the second tag",
    "Same tag, two values",
    "Two separate tags on each resource"
   ],
   "a": 2
  },
  {
   "l": "60 tags:",
   "o": [
    "Accepted: no limit",
    "Accepted, but not shown",
    "Accepted up to 100",
    "Refused: 50 per resource"
   ],
   "a": 3
  },
  {
   "l": "CLI command:",
   "o": [
    "az tag create --operation Replace",
    "az tag update --operation Merge",
    "az group update --set tags=Owner=IT",
    "az tag update --operation Delete"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Tag Contributor.</b> Manages resource tags without access to the resources themselves.<b>Case.</b> Tag names are case-insensitive for operations; values are case-sensitive.<b>Limit.</b> A resource, resource group or subscription can have at most 50 name/value pairs.<b>Merge.</b> az tag update --operation Merge adds or updates without removing other tags; Replace replaces the whole set; az group update --set tags=… also replaces tags.",
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
    "*Finance team",
    "Tag Contributor"
   ],
   [
    "“environment” and “Environment”",
    "Same tag, two values"
   ],
   [
    "60 tags",
    "Refused: 50 per resource"
   ],
   [
    "CLI command",
    "az tag update --operation Merge"
   ]
  ]
 },
 "keep": "Tags only = Tag Contributor. Names case-insensitive, values case-sensitive. 50 max. Merge to add."
},
{
 "id": "D1-414",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam is defining device settings in Microsoft Entra ID:</p><ul><li>only members of the IT-Postes group must be able to join Windows devices to Microsoft Entra ID;</li><li>users who join a device must not become local administrators of that device; only IT-Support members must be, on every joined device;</li><li>MFA must be required when joining a device;</li><li>a maximum of 10 devices per user must be enforced.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Who can join:",
   "o": [
    "An Azure Deny policy on joined devices",
    "Join = Selected",
    "An administrative unit",
    "The Cloud Device Administrator role for everyone"
   ],
   "a": 1
  },
  {
   "l": "Local administrators:",
   "o": [
    "A local GPO on each device",
    "Nothing: can't be set in Entra",
    "Global Administrator role for IT-Support",
    "Disable for the user + IT-Support"
   ],
   "a": 3
  },
  {
   "l": "MFA at join:",
   "o": [
    "Conditional Access (action)",
    "A 14-character password policy",
    "Security defaults",
    "The per-user MFA setting, on its own"
   ],
   "a": 0
  },
  {
   "l": "Device limit:",
   "o": [
    "Per-user device quota",
    "A dynamic group rule on devices",
    "A lock",
    "One license per device"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Join.</b> The “Users may join devices to Microsoft Entra ID” setting accepts All, Selected (one or more groups) or None.<b>Local administrators.</b> Local administrator settings let you not add the joining user and designate additional local administrators on every joined device.<b>MFA.</b> The recommended method is a Conditional Access policy targeting the “Register or join devices” user action (the device setting “Require MFA” must then be off).<b>Quota.</b> “Maximum number of devices per user” limits joined or registered devices.",
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
    "*Who can join",
    "Join = Selected"
   ],
   [
    "Local administrators",
    "Disable for the user + IT-Support"
   ],
   [
    "MFA at join",
    "Conditional Access (action)"
   ],
   [
    "Device limit",
    "Per-user device quota"
   ]
  ]
 },
 "keep": "Join = Selected. Local admin = device setting. MFA = Conditional Access (action). Limit = per-user quota."
},
{
 "id": "D1-415",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Several access problems are reported in the Prod subscription:</p><ul><li>Nadia was given the Contributor role on RG-App two minutes ago; she still gets “access denied”;</li><li>Omar is Owner of the subscription, but can't delete the storage account stlogs;</li><li>Sami is Contributor on RG-App, but creating a VM in East US fails with “RequestDisallowedByPolicy”;</li><li>Yanis is Contributor on the subscription, but can't give the Reader role to a colleague.</li></ul><p>What's the most likely cause?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Nadia:",
   "o": [
    "An Azure Deny policy",
    "A missing Entra ID license",
    "Propagation (up to 10 min)",
    "A CanNotDelete lock on RG-App"
   ],
   "a": 2
  },
  {
   "l": "Omar:",
   "o": [
    "A CanNotDelete lock",
    "Owner excludes deletion",
    "Owner role propagation",
    "An Audit policy"
   ],
   "a": 0
  },
  {
   "l": "Sami:",
   "o": [
    "A vCPU quota reached",
    "A ReadOnly lock on the subscription",
    "An Azure policy (Deny)",
    "An inherited Reader role"
   ],
   "a": 2
  },
  {
   "l": "Yanis:",
   "o": [
    "The colleague",
    "A lock blocks role assignments",
    "He must be Global Administrator first",
    "Contributor can't"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Propagation.</b> A new role assignment can take up to about 10 minutes to apply (signing out and in helps).<b>Lock.</b> A CanNotDelete lock applies to everyone, Owner included.<b>Policy.</b> RequestDisallowedByPolicy means a policy with the Deny effect blocked the request (for example, allowed locations).<b>Contributor.</b> The role excludes Microsoft.Authorization/*/Write: it can't assign roles. Owner, User Access Administrator or Role Based Access Control Administrator is required.",
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
    "*Nadia",
    "Propagation (up to 10 min)"
   ],
   [
    "Omar",
    "A CanNotDelete lock"
   ],
   [
    "Sami",
    "An Azure policy (Deny)"
   ],
   [
    "Yanis",
    "Contributor can't"
   ]
  ]
 },
 "keep": "Delay = propagation. Owner blocked = lock. RequestDisallowedByPolicy = Deny policy. Contributor can't assign roles."
},
{
 "id": "D1-416",
 "dom": 1,
 "type": "hot",
 "stem": "<p>After a merger, Contoso must transfer the Sub-Analytics subscription from its contoso.com tenant to the fabrikam.com tenant. The subscription contains:</p><ul><li>VMs that use system-assigned managed identities to read secrets from a Key Vault;</li><li>Azure role assignments granted to contoso.com users and groups;</li><li>a Key Vault whose tenant ID is contoso.com's.</li></ul><p>Also, billing ownership of another subscription, Sub-Web, must move to Contoso's finance team, without changing tenants.</p><p>What will happen, and what should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Role assignments:",
   "o": [
    "Converted to guests",
    "Kept for groups",
    "Kept, mapped by name",
    "Deleted: recreate them"
   ],
   "a": 3
  },
  {
   "l": "Managed identities:",
   "o": [
    "Recreate the VMs",
    "Disable then re-enable",
    "No action required after the transfer",
    "Move them manually to the tenant"
   ],
   "a": 1
  },
  {
   "l": "Key Vault:",
   "o": [
    "Add a private endpoint",
    "No action: it follows the subscription",
    "Update the tenant ID",
    "Recreate the vault and secrets"
   ],
   "a": 2
  },
  {
   "l": "Sub-Web:",
   "o": [
    "Owner role assignment alone",
    "Billing ownership transfer",
    "Move to a management group",
    "Directory change"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Directory change.</b> When a subscription moves to another Entra ID tenant, all Azure role assignments are permanently deleted: back them up and recreate them in the new tenant.<b>Managed identities.</b> They aren't updated: disable then re-enable system-assigned identities (and recreate user-assigned ones).<b>Key Vault.</b> The vault keeps the old tenant ID: update it and redefine access.<b>Billing.</b> A billing ownership transfer changes who pays, without changing the tenant.",
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
    "*Role assignments",
    "Deleted: recreate them"
   ],
   [
    "Managed identities",
    "Disable then re-enable"
   ],
   [
    "Key Vault",
    "Update the tenant ID"
   ],
   [
    "Sub-Web",
    "Billing ownership transfer"
   ]
  ]
 },
 "keep": "Tenant change: roles lost, identities to re-enable, Key Vault to update. Who pays = billing transfer."
},
{
 "id": "D1-417",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are writing a custom Azure Policy definition for Fabrikam. It must deny creating storage accounts whose SKU isn't in a list provided at assignment.</p><code>\"if\": { \"allOf\": [ { \"field\": \"[1]\", \"equals\": \"Microsoft.Storage/storageAccounts\" }, { \"field\": \"Microsoft.Storage/storageAccounts/sku.name\", \"[2]\": \"[parameters('allowedSkus')]\" } ] }, \"then\": { \"effect\": \"[3]\" }</code><p>The allowedSkus parameter must be of type [4].</p><p>Complete the definition.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "[1]:",
   "o": [
    "type",
    "kind",
    "name",
    "location"
   ],
   "a": 0
  },
  {
   "l": "[2]:",
   "o": [
    "notIn",
    "in",
    "notEquals",
    "contains"
   ],
   "a": 0
  },
  {
   "l": "[3]:",
   "o": [
    "deny",
    "audit",
    "modify",
    "append"
   ],
   "a": 0
  },
  {
   "l": "[4]:",
   "o": [
    "Array",
    "String",
    "Object",
    "Boolean"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Type field.</b> field = type filters the resource type.<b>notIn.</b> The condition is true when the SKU isn't in the list: the effect then applies to non-allowed SKUs.<b>deny.</b> Blocks the create or update.<b>Array.</b> A list of values is passed in an Array parameter (optionally with allowedValues).",
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
    "*[1]",
    "type"
   ],
   [
    "[2]",
    "notIn"
   ],
   [
    "[3]",
    "deny"
   ],
   [
    "[4]",
    "Array"
   ]
  ]
 },
 "keep": "type + notIn + deny + Array."
},
{
 "id": "D1-418",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso's governance team assigned the “Allowed locations” policy (Deny effect, Europe only) to the Prod subscription this morning. Questions:</p><ul><li>25 existing resources are in East US; the team wants to know what happens to them;</li><li>an hour after assignment, the compliance dashboard still shows no results; the team wants to run the evaluation now;</li><li>the team wants to test the policy's effect on the Test subscription for a week, without blocking anyone, while seeing compliance results;</li><li>in six months, a new VM will be created in East US by an ARM template.</li></ul><p>What will happen, and what should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "25 existing resources:",
   "o": [
    "Deleted automatically",
    "Blocked as read-only",
    "Non-compliant, but untouched",
    "Moved to a European region"
   ],
   "a": 2
  },
  {
   "l": "Immediate evaluation:",
   "o": [
    "Delete and recreate the assignment",
    "az policy state trigger-scan",
    "Restart the resources",
    "az policy assignment update"
   ],
   "a": 1
  },
  {
   "l": "Test without blocking:",
   "o": [
    "An exclusion of the subscription",
    "Disabled effect",
    "An exemption for the subscription",
    "Enforcement mode disabled"
   ],
   "a": 3
  },
  {
   "l": "VM created in six months:",
   "o": [
    "VM created in Europe instead",
    "VM created then non-compliant",
    "Deployment denied",
    "VM created, alert sent"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Existing.</b> Deny only acts on create or update requests: existing resources are flagged non-compliant, without changes.<b>Evaluation.</b> A new assignment is evaluated within about 30 minutes; the standard evaluation runs every 24 hours. az policy state trigger-scan (or Start-AzPolicyComplianceScan) runs an on-demand scan.<b>Enforcement mode.</b> Disabled (DoNotEnforce), it evaluates compliance without applying the effect. The Disabled effect produces no results; an exemption or exclusion removes the scope from evaluation.",
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
    "*25 existing resources",
    "Non-compliant, but untouched"
   ],
   [
    "Immediate evaluation",
    "az policy state trigger-scan"
   ],
   [
    "Test without blocking",
    "Enforcement mode disabled"
   ],
   [
    "VM created in six months",
    "Deployment denied"
   ]
  ]
 },
 "keep": "Deny doesn't touch existing. Scan = trigger-scan. Test = DoNotEnforce."
},
{
 "id": "D1-419",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso wants to lighten its Microsoft Entra ID admin team's workload:</p><ul><li>department managers must manage the members of their own security groups, without an admin role;</li><li>inactive Microsoft 365 groups must be deleted automatically unless renewed by their owner every 180 days;</li><li>all new Microsoft 365 groups must have a name starting with GRP-;</li><li>a group deleted by mistake 10 days ago must be restored.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Department managers:",
   "o": [
    "Group owners",
    "Groups Administrator role",
    "User Administrator role",
    "Administrative unit"
   ],
   "a": 0
  },
  {
   "l": "Inactive groups:",
   "o": [
    "A scheduled Graph task",
    "An Azure lifecycle rule",
    "Access reviews on groups",
    "Group expiration policy"
   ],
   "a": 3
  },
  {
   "l": "GRP- prefix:",
   "o": [
    "Naming policy",
    "A dynamic group with a name rule",
    "A template",
    "An Azure Deny policy on groups"
   ],
   "a": 0
  },
  {
   "l": "Group deleted 10 days ago:",
   "o": [
    "Only through Microsoft support",
    "Yes, if Microsoft 365 group",
    "Yes, whatever the group type",
    "Not possible after 7 days"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Owners.</b> A group's owners manage its members without an admin role.<b>Expiration.</b> The Microsoft 365 group expiration policy sends renewal notices to owners; an unrenewed group is deleted (and stays restorable for 30 days). Active groups renew automatically.<b>Naming.</b> The naming policy adds a prefix or suffix and can block words; it applies to Microsoft 365 groups.<b>Restore.</b> Only deleted Microsoft 365 groups can be restored (30 days); a deleted security group is gone for good.",
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
    "*Department managers",
    "Group owners"
   ],
   [
    "Inactive groups",
    "Group expiration policy"
   ],
   [
    "GRP- prefix",
    "Naming policy"
   ],
   [
    "Group deleted 10 days ago",
    "Yes, if Microsoft 365 group"
   ]
  ]
 },
 "keep": "Manage members = owner. Inactive = expiration. Prefix = naming. Restorable = Microsoft 365 groups (30 days)."
},
{
 "id": "D1-420",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam wants to assign Microsoft Entra roles to groups rather than users:</p><ul><li>the Admins-Helpdesk group must get the Helpdesk Administrator role; its members must inherit the role;</li><li>the group was created yesterday as a standard security group; the portal doesn't offer this group when assigning the role;</li><li>the team would like group membership to be dynamic, based on the jobTitle attribute;</li><li>a user with the User Administrator role tries to change the group's members and fails.</li></ul><p>What is true, and what should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Group not in the list:",
   "o": [
    "Recreate the group",
    "Convert the existing group with PowerShell",
    "Switch the group to Microsoft 365, then retry",
    "Wait for the sync"
   ],
   "a": 0
  },
  {
   "l": "Dynamic membership:",
   "o": [
    "Possible with a jobTitle rule",
    "Not possible",
    "Possible with a P2 license",
    "Possible with a P1 license on the tenant"
   ],
   "a": 1
  },
  {
   "l": "User Administrator:",
   "o": [
    "Must wait 10 minutes",
    "Can manage the group without restriction",
    "Must be subscription owner",
    "Can't manage this protected group"
   ],
   "a": 3
  },
  {
   "l": "Who can manage the group:",
   "o": [
    "Privileged Role Admin, owners",
    "Any tenant Groups Administrator",
    "Any tenant User Administrator",
    "Any member"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Role-assignable group.</b> The isAssignableToRole property must be set at creation; it can't be added to an existing group.<b>No dynamic.</b> A role-assignable group can't have dynamic membership.<b>Protection.</b> These groups can only be managed by Privileged Role Administrator, Global Administrator or their owners: User Administrator and Groups Administrator can't change their members, to prevent privilege escalation.",
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
    "*Group not in the list",
    "Recreate the group"
   ],
   [
    "Dynamic membership",
    "Not possible"
   ],
   [
    "User Administrator",
    "Can't manage this protected group"
   ],
   [
    "Who can manage the group",
    "Privileged Role Admin, owners"
   ]
  ]
 },
 "keep": "Role-assignable = at creation, not dynamic, managed by Privileged Role Admin or owners."
}
);
