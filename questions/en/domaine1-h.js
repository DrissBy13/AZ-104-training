/* Domain 1: identities and governance (batch H: D1-401 to D1-410, long scenarios) */
AZ.questions.push(
{
 "id": "D1-401",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso (Microsoft Entra ID P1 licenses) is reorganizing its groups:</p><ul><li>the GRP-Ventes group must automatically contain all users whose department is “Ventes” and country “France”, with no administrator action;</li><li>a manager wants to manually add an external consultant to GRP-Ventes;</li><li>Microsoft 365 E3 licenses must be assigned to GRP-Ventes; the team suggests assigning licenses instead to the GRP-Commercial group, which contains GRP-Ventes as a nested group;</li><li>after assignment, user Paul, a member of GRP-Ventes, has no license and the portal shows an error.</li></ul><p>What should you configure, and what explains the problems?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Membership rule:",
   "o": [
    "(user.memberOf -eq \"Ventes\") -and (user.country -eq \"France\")",
    "(user.department -eq \"Ventes\") -and (user.country -eq \"France\")",
    "(user.department -eq \"Ventes\") -or (user.country -eq \"France\")",
    "user.department -contains \"Ventes,France\""
   ],
   "a": 1
  },
  {
   "l": "Manually adding the consultant:",
   "o": [
    "Possible with the Groups Administrator role",
    "Not possible in a dynamic group",
    "Possible after a sync",
    "Possible if the manager is an owner"
   ],
   "a": 1
  },
  {
   "l": "Licenses on GRP-Commercial:",
   "o": [
    "Nested members get them too",
    "A Microsoft 365 group is required",
    "P2 licenses are required",
    "Nested members don't get them"
   ],
   "a": 3
  },
  {
   "l": "Paul's error:",
   "o": [
    "Usage location not set",
    "Paul is a synced account",
    "Paul has no mailbox",
    "Paul has no MFA method"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Rule.</b> Both conditions must be true: -and. memberOf isn't a property usable this way.<b>Dynamic group.</b> Members are managed only by the rule: you can't add or remove members manually. Use another group (or a rule that includes the consultant).<b>Group licensing.</b> Group-based licensing doesn't apply to members of nested groups: only direct members get them.<b>Usage location.</b> A license can't be assigned to a user with no usage location (usageLocation); group assignment goes into an error state for that user.",
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
    "*Membership rule",
    "(user.department -eq \"Ventes\") -and (user.country -eq \"France\")"
   ],
   [
    "Manually adding the consultant",
    "Not possible in a dynamic group"
   ],
   [
    "Licenses on GRP-Commercial",
    "Nested members don't get them"
   ],
   [
    "Paul's error",
    "Usage location not set"
   ]
  ]
 },
 "keep": "Dynamic = no manual add. Group licensing = no nesting. License = usage location required."
},
{
 "id": "D1-402",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam collaborates with external partners through Microsoft Entra B2B. The requirements:</p><ul><li>only users from the partner1.com and partner2.com domains can be invited; any invitation to another domain must be refused;</li><li>only Purchasing members, who have the Guest Inviter role, must be able to invite; other member users must not be able to invite;</li><li>guests must not be able to browse the directory: they must only see their own objects;</li><li>partner1.com guests already performed MFA in their own tenant; Fabrikam wants that MFA accepted without prompting again.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Allowed domains:",
   "o": [
    "External collaboration restrictions",
    "A dynamic group per domain",
    "A Conditional Access policy per partner domain",
    "Administrative units per invited partner"
   ],
   "a": 0
  },
  {
   "l": "Who can invite:",
   "o": [
    "No one: API invitations only",
    "Members and guests in a group",
    "All members, including guests",
    "Only specific admin roles"
   ],
   "a": 3
  },
  {
   "l": "Guest directory access:",
   "o": [
    "Access limited to groups",
    "Restricted to their own objects",
    "Full read access to every object",
    "Same rights as directory members"
   ],
   "a": 1
  },
  {
   "l": "partner1.com MFA:",
   "o": [
    "Disable MFA for all guests",
    "Trust MFA (inbound cross-tenant access)",
    "Exclude partner1.com from Conditional Access",
    "Create member accounts instead"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Collaboration restrictions.</b> External collaboration settings allow an allow (or deny) list of domains for invitations.<b>Invitations.</b> The “Only users assigned to specific admin roles can invite” setting limits invitations to roles like Guest Inviter.<b>Guest access.</b> The most restrictive level limits guests to the properties and memberships of their own objects.<b>Cross-tenant access.</b> An organization's inbound access settings can trust MFA (and device compliance) performed in the home tenant.",
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
    "*Allowed domains",
    "External collaboration restrictions"
   ],
   [
    "Who can invite",
    "Only specific admin roles"
   ],
   [
    "Guest directory access",
    "Restricted to their own objects"
   ],
   [
    "partner1.com MFA",
    "Trust MFA (inbound cross-tenant access)"
   ]
  ]
 },
 "keep": "Domains = collaboration restrictions. Invitations = specific roles. Guests = own objects. Partner MFA = inbound trust."
},
{
 "id": "D1-403",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso is rolling out self-service password reset (SSPR). The context:</p><ul><li>accounts are synced from AD DS with Microsoft Entra Connect; licenses are Microsoft Entra ID P1;</li><li>initially, only the Pilote-SSPR group must be able to use SSPR;</li><li>users must prove their identity with two methods among: Microsoft Authenticator app, SMS, security questions;</li><li>a password reset in the cloud must work immediately to sign in to domain devices;</li><li>a help desk administrator (Helpdesk Administrator) complains he can't use security questions.</li></ul><p>What should you configure, and what explains the problem?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "SSPR scope:",
   "o": [
    "Selected: Pilote-SSPR",
    "All users, then exclude",
    "None, then enable per user",
    "Pilote administrative unit"
   ],
   "a": 0
  },
  {
   "l": "Required methods:",
   "o": [
    "2",
    "1",
    "3",
    "4"
   ],
   "a": 0
  },
  {
   "l": "Password usable on-premises:",
   "o": [
    "Pass-through auth alone",
    "A password GPO",
    "Password writeback",
    "Password hash sync alone"
   ],
   "a": 2
  },
  {
   "l": "Security questions refused:",
   "o": [
    "At least 5 questions must be registered by the admin",
    "P1 doesn't include security questions",
    "Fixed policy for admins",
    "Questions require writeback"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Scope.</b> SSPR can be enabled for one selected group before general rollout.<b>Methods.</b> The number of methods required to reset is 1 or 2.<b>Writeback.</b> Password writeback (Entra Connect or Cloud Sync) writes the new password to AD DS.<b>Administrators.</b> Admin roles are subject to a Microsoft-set two-method policy, without security questions, whatever the user settings.",
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
    "*SSPR scope",
    "Selected: Pilote-SSPR"
   ],
   [
    "Required methods",
    "2"
   ],
   [
    "Password usable on-premises",
    "Password writeback"
   ],
   [
    "Security questions refused",
    "Fixed policy for admins"
   ]
  ]
 },
 "keep": "Pilot = selected group. Methods = 1 or 2. On-premises = writeback. Admins = fixed policy without questions."
},
{
 "id": "D1-404",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam's HR team sends you several requests about Microsoft Entra ID accounts (cloud only):</p><ul><li>create 300 intern accounts from a file provided by the school;</li><li>Julie's account was deleted by mistake 12 days ago; it must be recovered with its group memberships;</li><li>Marc's account, who leaves the company tonight, must be blocked immediately, and his open sessions on his devices must be invalidated;</li><li>the account of a former contractor, deleted 45 days ago, must be restored.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "300 interns:",
   "o": [
    "Bulk create (CSV)",
    "An Entra Connect sync",
    "A dynamic group",
    "Bulk guest invitation"
   ],
   "a": 0
  },
  {
   "l": "Julie's account:",
   "o": [
    "Open a ticket with Microsoft support",
    "Recreate it with the same UPN and groups",
    "Restore the deleted user",
    "Not possible after 7 days"
   ],
   "a": 2
  },
  {
   "l": "Marc's account:",
   "o": [
    "Block + revoke sessions",
    "Remove his licenses",
    "Reset the password, with no other action",
    "Permanently delete the account, right away"
   ],
   "a": 0
  },
  {
   "l": "Contractor deleted 45 days ago:",
   "o": [
    "Restore from deleted users",
    "Restore with the Global Administrator role",
    "Not possible: 30-day window passed",
    "Restore with PowerShell only"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Bulk operations.</b> The Entra portal offers bulk create from a CSV template.<b>Soft delete.</b> A deleted user stays 30 days in “Deleted users”; restoring brings back its attributes and memberships. After that, it's permanently deleted.<b>Departure.</b> Blocking sign-in prevents new authentications; “Revoke sessions” invalidates existing refresh tokens and session cookies.",
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
    "*300 interns",
    "Bulk create (CSV)"
   ],
   [
    "Julie's account",
    "Restore the deleted user"
   ],
   [
    "Marc's account",
    "Block + revoke sessions"
   ],
   [
    "Contractor deleted 45 days ago",
    "Not possible: 30-day window passed"
   ]
  ]
 },
 "keep": "Bulk = CSV. Deleted = 30 days. Departure = block + revoke."
},
{
 "id": "D1-405",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso must assign Azure roles in the Prod subscription following least privilege:</p><ul><li>the Network team must manage virtual networks, NSGs and gateways, but not VMs or storage accounts;</li><li>the Operations team must start, stop and resize VMs, but must not be able to manage the virtual network or storage account they're connected to;</li><li>the Security lead must be able to grant Azure roles to others, but only the Reader and Virtual Machine Contributor roles, without being able to create resources;</li><li>the external auditor must see everything without changing anything.</li></ul><p>Which built-in role should you assign?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Network team:",
   "o": [
    "Network Contributor",
    "Contributor",
    "Virtual Machine Contributor",
    "Owner"
   ],
   "a": 0
  },
  {
   "l": "Operations team:",
   "o": [
    "Classic Virtual Machine Contributor",
    "Owner",
    "Virtual Machine Contributor",
    "Contributor"
   ],
   "a": 2
  },
  {
   "l": "Security lead:",
   "o": [
    "User Access Administrator on the subscription",
    "Security Admin on the management group",
    "Owner",
    "RBAC Administrator + condition"
   ],
   "a": 3
  },
  {
   "l": "Auditor:",
   "o": [
    "Reader",
    "Contributor",
    "Security Reader",
    "Monitoring Contributor"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Network Contributor.</b> Manages network resources, with no access to VMs or storage.<b>Virtual Machine Contributor.</b> Manages VMs, but not the virtual network or storage account they're connected to.<b>RBAC Administrator.</b> The Role Based Access Control Administrator role manages role assignments; a condition can limit which roles it can assign (and to whom). User Access Administrator or Owner have no such limit; Owner can also create resources.<b>Reader.</b> Reads every management resource, with no changes.",
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
    "*Network team",
    "Network Contributor"
   ],
   [
    "Operations team",
    "Virtual Machine Contributor"
   ],
   [
    "Security lead",
    "RBAC Administrator + condition"
   ],
   [
    "Auditor",
    "Reader"
   ]
  ]
 },
 "keep": "Network = Network Contributor. VMs only = VM Contributor. Assign limited roles = RBAC Administrator + condition. See all = Reader."
},
{
 "id": "D1-406",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are creating a custom role “VM Operator” for Fabrikam's on-call team. It must:</p><ul><li>allow reading all resources, starting, restarting and deallocating VMs;</li><li>prevent deleting VMs, even if another part of the role allows it through a wildcard;</li><li>allow signing in to Linux VMs with the Entra ID login role (a data operation on the VM);</li><li>be assignable in the Prod and Dev subscriptions and at the MG-Corp management group.</li></ul><p>The following JSON is proposed:</p><code>\"Actions\": [\"*/read\", \"Microsoft.Compute/virtualMachines/*\"], \"NotActions\": [\"Microsoft.Compute/virtualMachines/delete\"], \"DataActions\": [\"Microsoft.Compute/virtualMachines/login/action\"], \"AssignableScopes\": [\"/subscriptions/{prod}\", \"/subscriptions/{dev}\", \"/providers/Microsoft.Management/managementGroups/MG-Corp\"]</code><p>What is true?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "NotActions on delete:",
   "o": [
    "Removes delete from this role only",
    "Denies delete, even through another role",
    "Has no effect with a wildcard",
    "Blocks delete for the whole subscription"
   ],
   "a": 0
  },
  {
   "l": "If the user also has Contributor:",
   "o": [
    "He can delete VMs",
    "The two roles cancel out",
    "The custom role prevails",
    "He can't delete VMs"
   ],
   "a": 0
  },
  {
   "l": "AssignableScopes with MG-Corp:",
   "o": [
    "Accepted only if MG-Corp is the root",
    "Accepted with no scope restriction at all",
    "Rejected: two subscriptions at most",
    "Rejected (DataActions + MG)"
   ],
   "a": 3
  },
  {
   "l": "Creating the role:",
   "o": [
    "az role assignment create --role role.json",
    "New-AzRoleDefinition -InputFile role.json",
    "New-AzRoleAssignment -InputFile role.json",
    "Set-AzRoleDefinition -Name role.json"
   ],
   "a": 1
  }
 ],
 "expl": "<b>NotActions.</b> It isn't a deny: NotActions subtracts operations from this role's Actions. If another role grants delete, the user can delete. Only a deny assignment blocks.<b>Management group.</b> A custom role with DataActions can't have a management group in its AssignableScopes; and only one management group can be listed.<b>Creation.</b> New-AzRoleDefinition (or az role definition create) creates the role from the JSON; New-AzRoleAssignment assigns it.",
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
    "*NotActions on delete",
    "Removes delete from this role only"
   ],
   [
    "If the user also has Contributor",
    "He can delete VMs"
   ],
   [
    "AssignableScopes with MG-Corp",
    "Rejected (DataActions + MG)"
   ],
   [
    "Creating the role",
    "New-AzRoleDefinition -InputFile role.json"
   ]
  ]
 },
 "keep": "NotActions ≠ deny. DataActions = no management group. Create = New-AzRoleDefinition."
},
{
 "id": "D1-407",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso distinguishes Microsoft Entra roles from Azure roles. Several situations arise:</p><ul><li>Léa is a Global Administrator in Entra ID; she must manage role assignments in every subscription, but sees no subscription in the portal;</li><li>once her task is done, Léa must lose that access;</li><li>Hugo must reset passwords for non-admin users and handle their support requests, with least privilege;</li><li>Inès must be able to read all Entra ID configuration (settings, users, policies) without changing anything.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Léa's access to subscriptions:",
   "o": [
    "Assign her Owner on each subscription by hand",
    "Assign her Privileged Role Administrator",
    "Enable access elevation",
    "Nothing: refresh the portal after signing out"
   ],
   "a": 2
  },
  {
   "l": "Role obtained and scope:",
   "o": [
    "Contributor on all subscriptions",
    "Owner on the root management group",
    "Global Reader on Azure resources",
    "User Access Administrator at root (/)"
   ],
   "a": 3
  },
  {
   "l": "Hugo:",
   "o": [
    "Authentication Policy Administrator",
    "Global Administrator",
    "Helpdesk Administrator",
    "User Administrator"
   ],
   "a": 2
  },
  {
   "l": "Inès:",
   "o": [
    "Directory Readers",
    "Global Reader",
    "Reader (Azure role) on the subscription",
    "Security Reader"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Elevation.</b> Entra roles give no access to Azure resources. A Global Administrator can enable “Access management for Azure resources”: they get User Access Administrator at root scope (/), then can assign themselves other roles. They turn the setting off afterwards to remove that access.<b>Helpdesk Administrator.</b> Resets passwords for non-admins (and some limited roles) and manages support requests; User Administrator has more rights (creation, groups…).<b>Global Reader.</b> Reads everything a Global Administrator can see, without changes. Directory Readers only reads basic directory information.",
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
    "*Léa's access to subscriptions",
    "Enable access elevation"
   ],
   [
    "Role obtained and scope",
    "User Access Administrator at root (/)"
   ],
   [
    "Hugo",
    "Helpdesk Administrator"
   ],
   [
    "Inès",
    "Global Reader"
   ]
  ]
 },
 "keep": "Global Admin → Azure resources = elevation (UAA at root). Passwords = Helpdesk Admin. Read all = Global Reader."
},
{
 "id": "D1-408",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam has 12,000 users spread across subsidiaries. The Spain subsidiary has its own IT support, which must manage its users without touching others:</p><ul><li>the Spanish support must reset passwords and change properties for the subsidiary's users only;</li><li>subsidiary users must be added automatically to the management scope based on the attribute country = Spain;</li><li>the Spanish executive committee accounts must be protected: even a tenant-level User Administrator must not be able to change them, only administrators designated for them;</li><li>the Spanish support must also be able to manage the subsidiary's groups.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Management scope:",
   "o": [
    "An Azure management group for Spain",
    "An administrative unit",
    "A separate Entra tenant for Spain",
    "A security group"
   ],
   "a": 1
  },
  {
   "l": "Automatic addition:",
   "o": [
    "A Microsoft Graph script scheduled nightly",
    "The unit's dynamic membership",
    "A Conditional Access rule",
    "A dynamic group nested in the unit"
   ],
   "a": 1
  },
  {
   "l": "Executive committee:",
   "o": [
    "A role-assignable group for the committee",
    "A lock on the accounts",
    "Guest accounts for the executive committee",
    "Restricted management unit"
   ],
   "a": 3
  },
  {
   "l": "Spanish support roles:",
   "o": [
    "Owner on the Spain management group",
    "Roles scoped to the unit",
    "Global Administrator scoped to the Spain unit",
    "Helpdesk Administrator"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Administrative unit.</b> It limits the scope of Entra roles to a subset of users, groups or devices. Management groups apply to Azure subscriptions.<b>Dynamic membership.</b> An administrative unit can have a dynamic rule (P1 license).<b>Restricted management.</b> In a restricted management unit, only administrators whose role is assigned at the unit's scope can change its objects; tenant administrators can't (with exceptions like Privileged Authentication Administrator).<b>Scoped roles.</b> User Administrator and Groups Administrator can be assigned at a unit's scope; Global Administrator can't.",
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
    "*Management scope",
    "An administrative unit"
   ],
   [
    "Automatic addition",
    "The unit's dynamic membership"
   ],
   [
    "Executive committee",
    "Restricted management unit"
   ],
   [
    "Spanish support roles",
    "Roles scoped to the unit"
   ]
  ]
 },
 "keep": "Subset of users = administrative unit (dynamic possible). Protected from tenant = restricted management."
},
{
 "id": "D1-409",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso's governance team is deploying Azure Policy on the MG-Prod management group. The requirements:</p><ul><li>storage accounts with public blob access enabled must be flagged, without blocking their creation;</li><li>creating M-series VMs must be blocked;</li><li>every VM must have diagnostic settings sent to the LAW-Prod workspace; existing VMs must be remediated too;</li><li>the Sandbox subscription, part of MG-Prod, must be exempted from the size rule for 30 days, with a record of the reason.</li></ul><p>Which effect or feature should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Public storage:",
   "o": [
    "Audit",
    "Deny",
    "Append",
    "Disabled"
   ],
   "a": 0
  },
  {
   "l": "M-series:",
   "o": [
    "AuditIfNotExists",
    "Deny",
    "Modify",
    "Audit"
   ],
   "a": 1
  },
  {
   "l": "VM diagnostics:",
   "o": [
    "AuditIfNotExists, with no remediation task",
    "Append + managed identity",
    "Modify + CanNotDelete lock on VMs",
    "DeployIfNotExists + remediation"
   ],
   "a": 3
  },
  {
   "l": "Sandbox:",
   "o": [
    "Delete the assignment",
    "Exemption (Waiver, 30 days)",
    "Permanent exclusion of the subscription from the assignment",
    "Enforcement mode disabled on the assignment"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Audit / Deny.</b> Audit flags non-compliant resources in the activity log and compliance state; Deny blocks the create or update request.<b>DeployIfNotExists.</b> It deploys the related resource if missing (here the diagnostic setting) using a managed identity; existing resources are fixed by a remediation task.<b>Exemption.</b> It exempts a scope from an assignment, with a category (Waiver or Mitigated), a description and an expiration date. An exclusion has no category or expiration.",
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
    "*Public storage",
    "Audit"
   ],
   [
    "M-series",
    "Deny"
   ],
   [
    "VM diagnostics",
    "DeployIfNotExists + remediation"
   ],
   [
    "Sandbox",
    "Exemption (Waiver, 30 days)"
   ]
  ]
 },
 "keep": "Flag = Audit. Block = Deny. Deploy + existing = DeployIfNotExists + remediation. Dated waiver = exemption."
},
{
 "id": "D1-410",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam wants every resource to carry the CostCenter and Environment tags, used in Cost Management:</p><ul><li>every resource group already has both tags; resources must receive them automatically from their group if they lack them;</li><li>4,000 existing resources have no tags;</li><li>the team also wants to prevent creating a resource group without the CostCenter tag;</li><li>finance asks why last month's costs don't show under the CostCenter tag, though the tags were added this morning.</li></ul><p>What should you configure, and what explains the situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Inheritance from the group:",
   "o": [
    "Nothing: tags are inherited by default",
    "Modify inheritance policy",
    "A lock on each group",
    "A Deny policy on untagged resources"
   ],
   "a": 1
  },
  {
   "l": "4,000 existing resources:",
   "o": [
    "Redeploy each resource",
    "A ReadOnly lock",
    "Nothing: the policy applies by itself",
    "A remediation task"
   ],
   "a": 3
  },
  {
   "l": "Group without CostCenter:",
   "o": [
    "Audit on groups without the CostCenter tag",
    "Require the tag (Deny)",
    "An exemption on the group",
    "Inherit the tag from the subscription (Modify)"
   ],
   "a": 1
  },
  {
   "l": "Last month's costs:",
   "o": [
    "Tags aren't retroactive",
    "Wait 72 hours",
    "A P2 license is required",
    "Cost Management ignores tags"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Inheritance.</b> Resources don't inherit their group's tags by default. The built-in policy “Inherit a tag from the resource group if missing” uses the Modify effect.<b>Remediation.</b> Modify applies to creates and updates; existing resources are fixed by a remediation task (with the assignment's managed identity).<b>Deny.</b> “Require a tag on resource groups” blocks creating a group without the tag.<b>Costs.</b> Tags apply to usage data from the moment they're set; past costs aren't retagged.",
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
    "*Inheritance from the group",
    "Modify inheritance policy"
   ],
   [
    "4,000 existing resources",
    "A remediation task"
   ],
   [
    "Group without CostCenter",
    "Require the tag (Deny)"
   ],
   [
    "Last month's costs",
    "Tags aren't retroactive"
   ]
  ]
 },
 "keep": "Inheritance = Modify (not default). Existing = remediation. Untagged group = Deny. Tags not retroactive."
}
);
