/* Domain 1: identities and governance (batch K: D1-431 to D1-440, long scenarios) */
AZ.questions.push(
{
 "id": "D1-431",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam's governance team is writing Azure Policy definitions for tags and network rules:</p><ul><li>the Environment tag must be forced to “Prod” on every resource in the Prod subscription, even if another value was entered;</li><li>the CreatedBy tag must be added if missing, but never replaced if it exists;</li><li>an admin IP address must be added to the IP rules list of every storage account, without removing existing rules;</li><li>the policy that changes tags must also apply to resource groups, which don't support location.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Environment = Prod forced:",
   "o": [
    "Append",
    "Modify (addOrReplace)",
    "Deny on any value other than Prod",
    "Modify, add operation on the Environment tag"
   ],
   "a": 1
  },
  {
   "l": "CreatedBy if missing:",
   "o": [
    "Modify, add operation",
    "AuditIfNotExists",
    "Modify, addOrReplace operation",
    "Deny"
   ],
   "a": 0
  },
  {
   "l": "IP rule added to the list:",
   "o": [
    "Modify addOrReplace on the IP rules list",
    "DeployIfNotExists of a separate network rule",
    "Deny",
    "Append on the array"
   ],
   "a": 3
  },
  {
   "l": "Tag policy mode:",
   "o": [
    "All",
    "Microsoft.Resources.Data",
    "Indexed",
    "Microsoft.Network.Data"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Modify.</b> addOrReplace adds the tag or replaces its value; add only adds it if it doesn't exist. Modify requires a managed identity for remediation.<b>Append.</b> It adds fields to the request, for example an element in an array with the [*] alias; it removes nothing.<b>Mode.</b> Indexed mode only evaluates resources that support tags and location; All mode also evaluates resource groups and subscriptions.",
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
    "*Environment = Prod forced",
    "Modify (addOrReplace)"
   ],
   [
    "CreatedBy if missing",
    "Modify, add operation"
   ],
   [
    "IP rule added to the list",
    "Append on the array"
   ],
   [
    "Tag policy mode",
    "All"
   ]
  ]
 },
 "keep": "Force = addOrReplace. If missing = add. Add to an array = Append. Resource groups = All mode."
},
{
 "id": "D1-432",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso wants to remove the Global Administrator role from several staff and give them the least privileged Microsoft Entra role for their task:</p><ul><li>Alice assigns and removes Microsoft 365 licenses for users;</li><li>Bruno creates and manages all security and Microsoft 365 groups, without managing users;</li><li>Chloé invites external partners, while invitations are restricted to admin roles;</li><li>David buys Microsoft 365 subscriptions, manages invoices and opens billing support requests.</li></ul><p>Which role should you assign?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Alice:",
   "o": [
    "Groups Administrator",
    "User Administrator",
    "Billing Administrator",
    "License Administrator"
   ],
   "a": 3
  },
  {
   "l": "Bruno:",
   "o": [
    "User Administrator",
    "Directory Writers",
    "Groups Administrator",
    "Teams Administrator"
   ],
   "a": 2
  },
  {
   "l": "Chloé:",
   "o": [
    "User Administrator",
    "Guest Inviter",
    "Helpdesk Administrator",
    "External Identity Provider Administrator"
   ],
   "a": 1
  },
  {
   "l": "David:",
   "o": [
    "Service Support Administrator",
    "Global Reader",
    "Billing Administrator",
    "License Administrator"
   ],
   "a": 2
  }
 ],
 "expl": "<b>License Administrator.</b> Manages license assignments for users and groups (with usage location), without managing users.<b>Groups Administrator.</b> Creates and manages groups and their settings (naming, expiration).<b>Guest Inviter.</b> Can invite guests when invitations are restricted to admin roles.<b>Billing Administrator.</b> Makes purchases, manages subscriptions and invoices, and opens billing support requests.",
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
    "*Alice",
    "License Administrator"
   ],
   [
    "Bruno",
    "Groups Administrator"
   ],
   [
    "Chloé",
    "Guest Inviter"
   ],
   [
    "David",
    "Billing Administrator"
   ]
  ]
 },
 "keep": "Licenses = License Admin. Groups = Groups Admin. Invitations = Guest Inviter. Billing = Billing Admin."
},
{
 "id": "D1-433",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam has enabled SSPR for all users. The security team wants to refine the configuration:</p><ul><li>users must be required to register their methods at their next sign-in;</li><li>they must reconfirm their authentication information every 90 days;</li><li>each user must get an email when their password is reset;</li><li>global administrators must be notified when another administrator resets their password.</li></ul><p>After configuration, a user asks whether he can use a code from the Microsoft Authenticator app as one of the methods.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Registration at sign-in:",
   "o": [
    "Number of required methods = 2",
    "Registration at sign-in = Yes",
    "An MFA registration campaign, nothing else",
    "A policy"
   ],
   "a": 1
  },
  {
   "l": "Reconfirm every 90 days:",
   "o": [
    "Session lifetime = 90",
    "Days before reconfirm = 90",
    "Quarterly access review",
    "Password expiration = 90"
   ],
   "a": 1
  },
  {
   "l": "Notifications:",
   "o": [
    "An action group",
    "An alert on the Entra ID audit log",
    "Notify admins only, not the user",
    "Both notifications"
   ],
   "a": 3
  },
  {
   "l": "Authenticator app code:",
   "o": [
    "No: only push notification is allowed",
    "Yes (app code)",
    "No",
    "Yes, but only for admin accounts"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Registration.</b> “Require users to register when signing in” prompts them to register their methods.<b>Reconfirmation.</b> “Number of days before users are asked to reconfirm” (180 by default, 0 for never).<b>Notifications.</b> “Notify users on password resets” and “Notify all admins when other admins reset their password”.<b>Methods.</b> SSPR accepts the mobile app notification and code, email, SMS, phone call and security questions, among others.",
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
    "*Registration at sign-in",
    "Registration at sign-in = Yes"
   ],
   [
    "Reconfirm every 90 days",
    "Days before reconfirm = 90"
   ],
   [
    "Notifications",
    "Both notifications"
   ],
   [
    "Authenticator app code",
    "Yes (app code)"
   ]
  ]
 },
 "keep": "Registration at sign-in, reconfirm in days, two notifications, Authenticator code accepted."
},
{
 "id": "D1-434",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso is defining who can view and manage costs in Cost Management:</p><ul><li>the Finance team must view costs and forecasts for the Prod subscription, without seeing or changing resources, and without creating budgets;</li><li>project managers must create and change budgets and scheduled exports on their resource group, without managing resources;</li><li>the Operations team, which already has Reader on the subscription, asks whether it needs an extra role to see costs;</li><li>the Accounting team must receive a daily CSV of the subscription's costs in a storage account, with no manual action.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Finance team:",
   "o": [
    "Cost Management Contributor",
    "Billing Reader on the tenant",
    "Cost Management Reader",
    "Reader on the subscription"
   ],
   "a": 2
  },
  {
   "l": "Project managers:",
   "o": [
    "Cost Management Reader on the group",
    "Contributor on the group",
    "Owner",
    "Cost Management Contributor"
   ],
   "a": 3
  },
  {
   "l": "Operations team:",
   "o": [
    "None: Reader already sees costs",
    "Billing Reader required",
    "Contributor required",
    "Cost Management Reader required"
   ],
   "a": 0
  },
  {
   "l": "Daily file:",
   "o": [
    "A daily budget alert by email",
    "A subscription diagnostic setting",
    "A scheduled export",
    "Advisor"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Cost Management Reader.</b> Views costs, forecasts and budgets, without access to resources.<b>Cost Management Contributor.</b> Also manages budgets and exports, without managing resources.<b>Reader.</b> The Azure Owner, Contributor and Reader roles also allow viewing cost data at their scope (subject to the billing settings of some agreements).<b>Export.</b> A scheduled export (daily, weekly, monthly) writes a CSV (or Parquet) file to a storage account.",
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
    "Cost Management Reader"
   ],
   [
    "Project managers",
    "Cost Management Contributor"
   ],
   [
    "Operations team",
    "None: Reader already sees costs"
   ],
   [
    "Daily file",
    "A scheduled export"
   ]
  ]
 },
 "keep": "View = Cost Management Reader. Budgets = Cost Management Contributor. Reader already sees costs. File = export."
},
{
 "id": "D1-435",
 "dom": 1,
 "type": "hot",
 "stem": "<p>In Fabrikam's Prod subscription, several administrators with the Owner role report unexpected denials:</p><ul><li>on the RG-Core group, deployed by a deployment stack with the “Deny delete” setting, Owner can't delete a virtual network managed by the stack;</li><li>in the managed resource group of a managed application bought from the Marketplace, Owner can't change anything;</li><li>an administrator wants to create a deny assignment himself on RG-Data to block deletion by a specific group;</li><li>the team wants to let the CI/CD pipeline keep changing RG-Core resources despite the stack.</li></ul><p>What is true, and what should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Cause on RG-Core:",
   "o": [
    "An inherited CanNotDelete lock",
    "An inherited Reader role",
    "An Azure Deny policy",
    "The stack's deny assignment"
   ],
   "a": 3
  },
  {
   "l": "Managed application:",
   "o": [
    "A publisher Deny policy",
    "The publisher's deny assignment",
    "A subscription ReadOnly lock",
    "Owner doesn't apply to apps"
   ],
   "a": 1
  },
  {
   "l": "Creating a deny assignment yourself:",
   "o": [
    "Possible with Owner",
    "Not possible directly",
    "Possible with a custom role",
    "Possible with User Access Administrator"
   ],
   "a": 1
  },
  {
   "l": "CI/CD pipeline:",
   "o": [
    "Delete the stack before each deployment",
    "Excluded principal",
    "Disable it",
    "Give it Owner on RG-Core"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Deny assignments.</b> They take precedence over role assignments. Azure creates them for features like deployment stacks (deny settings) and managed applications; a user can't create one directly.<b>Exclusions.</b> A stack's deny settings accept excluded principals (up to a limit) and excluded actions: the pipeline can be excluded.<b>Locks.</b> A lock produces a different error (ScopeLocked); a policy produces RequestDisallowedByPolicy.",
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
    "*Cause on RG-Core",
    "The stack's deny assignment"
   ],
   [
    "Managed application",
    "The publisher's deny assignment"
   ],
   [
    "Creating a deny assignment yourself",
    "Not possible directly"
   ],
   [
    "CI/CD pipeline",
    "Excluded principal"
   ]
  ]
 },
 "keep": "Denied despite Owner = deny assignment (stack, managed app). Not manually creatable. Principal exclusion."
},
{
 "id": "D1-436",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You must automate governance tasks in Contoso's Dev subscription. For each task, choose the correct command:</p><ul><li>assign the Reader role to the Auditeurs group (known object ID) on the RG-Dev resource group, with PowerShell;</li><li>assign the Contributor role to user dev1@contoso.com on RG-Dev, with Azure CLI;</li><li>set a lock preventing deletion of RG-Dev, with PowerShell;</li><li>assign the “Allowed locations” policy to RG-Dev with the regions parameter, with Azure CLI.</li></ul><p>Which command should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Reader for Auditeurs:",
   "o": [
    "New-AzRoleDefinition -ObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev",
    "Add-AzADGroupMember -TargetGroupObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev",
    "New-AzRoleAssignment -ObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev",
    "Set-AzRoleAssignment -ObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev"
   ],
   "a": 2
  },
  {
   "l": "Contributor for dev1:",
   "o": [
    "az group update --name RG-Dev --set tags.role=Contributor:dev1@contoso.com",
    "az role assignment create --assignee dev1@contoso.com --role Contributor --resource-group RG-Dev",
    "az ad user update --id dev1@contoso.com --set role=Contributor --resource-group RG-Dev",
    "az role definition create --assignee dev1@contoso.com --role Contributor --resource-group RG-Dev"
   ],
   "a": 1
  },
  {
   "l": "Lock:",
   "o": [
    "New-AzResourceLock -LockLevel CanNotDelete -LockName NoDelete -ResourceGroupName RG-Dev",
    "Set-AzResourceGroup -Name RG-Dev -Lock CanNotDelete",
    "New-AzPolicyAssignment -Name NoDelete -Effect CanNotDelete -Scope RG-Dev",
    "New-AzResourceLock -LockLevel ReadOnly -LockName NoDelete -ResourceGroupName RG-Dev"
   ],
   "a": 0
  },
  {
   "l": "Policy:",
   "o": [
    "az policy assignment create --policy <definition> --scope <RG-Dev ID> --params @params.json",
    "az policy definition create --policy <definition> --scope <RG-Dev ID> --params @params.json",
    "az policy exemption create --policy <definition> --scope <RG-Dev ID>",
    "az policy assignment create --role <definition> -g RG-Dev --params @params.json"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Roles.</b> New-AzRoleAssignment and az role assignment create assign a role; New-AzRoleDefinition and az role definition create create a custom role.<b>Lock.</b> New-AzResourceLock with -LockLevel CanNotDelete prevents deletion; ReadOnly would also block changes.<b>Policy.</b> az policy assignment create assigns a definition (--policy) to a scope (--scope) with parameters (--params); az policy definition create creates a definition.",
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
    "*Reader for Auditeurs",
    "New-AzRoleAssignment -ObjectId <id> -RoleDefinitionName Reader -ResourceGroupName RG-Dev"
   ],
   [
    "Contributor for dev1",
    "az role assignment create --assignee dev1@contoso.com --role Contributor --resource-group RG-Dev"
   ],
   [
    "Lock",
    "New-AzResourceLock -LockLevel CanNotDelete -LockName NoDelete -ResourceGroupName RG-Dev"
   ],
   [
    "Policy",
    "az policy assignment create --policy <definition> --scope <RG-Dev ID> --params @params.json"
   ]
  ]
 },
 "keep": "Assign = *RoleAssignment / role assignment create. Lock = New-AzResourceLock CanNotDelete. Policy = policy assignment create."
},
{
 "id": "D1-437",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam manages many B2B guests. The following situations arise:</p><ul><li>a partner has no Microsoft Entra or Microsoft account, and their organization doesn't use Google; they must be able to accept the invitation and sign in;</li><li>a guest says they never received the invitation email, sent three weeks ago;</li><li>an external consultant, on board for two years, must be treated as a directory member (same default permissions as employees), while keeping their own company's account;</li><li>a guest must manage passwords for non-admin users in the Sales department.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Partner without an account:",
   "o": [
    "Create an internal member account for the partner",
    "One-time passcode",
    "Not possible without an Entra or Microsoft account",
    "Google federation"
   ],
   "a": 1
  },
  {
   "l": "Invitation never received:",
   "o": [
    "Wait 30 days",
    "Assign a license",
    "Delete and recreate the guest",
    "Resend the invitation"
   ],
   "a": 3
  },
  {
   "l": "Consultant treated as a member:",
   "o": [
    "Create a second internal account",
    "Give them Directory Readers",
    "Add them to the Employees group",
    "Set the userType property to Member"
   ],
   "a": 3
  },
  {
   "l": "Guest managing passwords:",
   "o": [
    "Global Admin",
    "Not possible: a guest can't hold an Entra role",
    "Role scoped to a unit",
    "Owner on the Sales team's subscription"
   ],
   "a": 2
  }
 ],
 "expl": "<b>One-time passcode.</b> When the guest has no Entra, Microsoft or federated provider account, they get an email code to sign in.<b>Resend.</b> An unaccepted invitation can be resent from the user's page.<b>userType.</b> The userType property (Guest or Member) sets default permissions; it can be set to Member without changing how the user authenticates.<b>Roles.</b> A guest can be assigned Microsoft Entra roles, including scoped to an administrative unit.",
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
    "*Partner without an account",
    "One-time passcode"
   ],
   [
    "Invitation never received",
    "Resend the invitation"
   ],
   [
    "Consultant treated as a member",
    "Set the userType property to Member"
   ],
   [
    "Guest managing passwords",
    "Role scoped to a unit"
   ]
  ]
 },
 "keep": "No account = email passcode. Not received = resend. Like a member = userType Member. A guest can hold a role."
},
{
 "id": "D1-438",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso's finance department (Microsoft Customer Agreement) wants to charge Azure costs back to internal departments:</p><ul><li>every subscription carries the Department tag; many resources don't, and the team doesn't want to modify them;</li><li>the costs of a shared subscription (hub network, firewall) must be split across the departments' subscriptions, proportionally to their costs;</li><li>each month, management wants a cost view grouped by Department, saved and shared with managers;</li><li>a manager is surprised that costs of a resource tagged this morning appear under their department only from today.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Department tag without modifying resources:",
   "o": [
    "Tag inheritance",
    "A Modify policy applied to all resources",
    "Remediation",
    "A ReadOnly lock set on each subscription"
   ],
   "a": 0
  },
  {
   "l": "Shared subscription:",
   "o": [
    "An export",
    "A savings plan shared across departments",
    "A budget per department, with a shared threshold",
    "Allocation rule"
   ],
   "a": 3
  },
  {
   "l": "Shared monthly view:",
   "o": [
    "Advisor",
    "A monthly Azure Policy compliance report",
    "Saved view",
    "An Azure Monitor workbook on metrics"
   ],
   "a": 2
  },
  {
   "l": "Costs from today only:",
   "o": [
    "72-hour processing delay",
    "Not retroactive",
    "An export is needed to see tags",
    "A bug"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Tag inheritance.</b> For EA and MCA agreements, Cost Management can apply subscription and resource group tags to usage data, without modifying resources.<b>Allocation.</b> A cost allocation rule redistributes the costs of shared subscriptions or resource groups to others, evenly, fixed or proportionally.<b>Views.</b> Cost analysis lets you save views, pin them and share them.<b>Retroactivity.</b> Tags apply to usage records from the moment they exist.",
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
    "*Department tag without modifying resources",
    "Tag inheritance"
   ],
   [
    "Shared subscription",
    "Allocation rule"
   ],
   [
    "Shared monthly view",
    "Saved view"
   ],
   [
    "Costs from today only",
    "Not retroactive"
   ]
  ]
 },
 "keep": "Without changes = Cost Management inheritance. Shared = allocation rule. View = saved analysis. Not retroactive."
},
{
 "id": "D1-439",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso is setting locks in the Prod subscription. The RG-App group contains the VM VM-Web, the storage account stapp and an App Service plan. The team's questions:</p><ul><li>a ReadOnly lock is set on RG-App; the operations team tries to restart VM-Web;</li><li>a CanNotDelete lock is set on stapp; a developer deletes blobs in the images container with an account key;</li><li>the team wants to know who can create or delete locks;</li><li>a CanNotDelete lock is set at the subscription level; the team wants to delete an empty resource group.</li></ul><p>What will happen?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Restarting VM-Web:",
   "o": [
    "Allowed for Owner only",
    "Denied",
    "Allowed",
    "Allowed if the VM is stopped"
   ],
   "a": 1
  },
  {
   "l": "Deleting blobs:",
   "o": [
    "Queued for approval",
    "Denied except for Owner",
    "Denied",
    "Allowed"
   ],
   "a": 3
  },
  {
   "l": "Managing locks:",
   "o": [
    "Global Administrator only, after elevation",
    "Owner or UAA",
    "Any user with the Reader role",
    "Contributor"
   ],
   "a": 1
  },
  {
   "l": "Empty resource group:",
   "o": [
    "Allowed after 24 hours",
    "Denied (inherited lock)",
    "Allowed: the group is empty",
    "Allowed for Owner"
   ],
   "a": 1
  }
 ],
 "expl": "<b>ReadOnly.</b> It blocks management operations that modify, including some POST actions: a ReadOnly lock on a group containing a VM prevents starting or restarting it.<b>Data plane.</b> Locks apply to the management plane. Deleting blobs (data plane) is still possible with CanNotDelete on the account.<b>Management.</b> It requires Microsoft.Authorization/locks/*: Owner and User Access Administrator have it (or a custom role).<b>Inheritance.</b> A lock inherited from the subscription applies to every resource group, even empty ones.",
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
    "*Restarting VM-Web",
    "Denied"
   ],
   [
    "Deleting blobs",
    "Allowed"
   ],
   [
    "Managing locks",
    "Owner or UAA"
   ],
   [
    "Empty resource group",
    "Denied (inherited lock)"
   ]
  ]
 },
 "keep": "ReadOnly = no restart. Locks don't protect data. Owner / UAA manage locks. Inherited everywhere."
},
{
 "id": "D1-440",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam is designing its Azure Policy assignments:</p><ul><li>the “Allowed locations” policy (Deny, Europe) is assigned to the MG-Corp management group; the RG-Global resource group (Prod subscription, under MG-Corp) must be able to deploy to East US permanently;</li><li>the Prod subscription team tries to assign its subscription a policy allowing East US to cancel MG-Corp's;</li><li>a user blocked by the policy must see a clear message pointing to the internal exception request page;</li><li>the team wants to know which role allows creating and assigning policies without managing resources.</li></ul><p>What should you configure, and what is true?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "RG-Global:",
   "o": [
    "Exclude RG-Global",
    "Delete MG-Corp's assignment and recreate it",
    "Move Prod",
    "A CanNotDelete lock set on RG-Global"
   ],
   "a": 0
  },
  {
   "l": "“Allow” policy on Prod:",
   "o": [
    "Wins because it's closer to the resource",
    "Cancels the Deny inherited from MG-Corp",
    "Rejected",
    "No effect"
   ],
   "a": 3
  },
  {
   "l": "Message for the user:",
   "o": [
    "Non-compliance message",
    "Activity log alert sent to the user",
    "Tag",
    "Policy definition description"
   ],
   "a": 0
  },
  {
   "l": "Role to manage policies:",
   "o": [
    "Contributor",
    "Resource Policy Contributor",
    "Security Admin",
    "Policy Insights Data Writer"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Exclusion.</b> An assignment can permanently exclude child scopes (resource groups, subscriptions); an exemption is rather for justified, dated waivers.<b>Accumulation.</b> Policies stack: a more permissive policy at a lower scope doesn't cancel an inherited Deny. Exclude or exempt the scope in the original assignment.<b>Message.</b> The assignment's non-compliance message is shown in the deny error.<b>Resource Policy Contributor.</b> Creates and manages policy definitions and assignments, without managing other resources.",
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
    "*RG-Global",
    "Exclude RG-Global"
   ],
   [
    "“Allow” policy on Prod",
    "No effect"
   ],
   [
    "Message for the user",
    "Non-compliance message"
   ],
   [
    "Role to manage policies",
    "Resource Policy Contributor"
   ]
  ]
 },
 "keep": "Permanent exception = exclusion. An inherited Deny can't be cancelled lower. Message = non-compliance. Manage = Resource Policy Contributor."
}
);
