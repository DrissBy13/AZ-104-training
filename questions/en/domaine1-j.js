/* Domain 1: identities and governance (batch J: D1-421 to D1-430, long scenarios) */
AZ.questions.push(
{
 "id": "D1-421",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso assigns licenses by group in Microsoft Entra ID. The following table shows the groups involved:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Group</th><th>Assigned license</th><th>Members</th></tr><tr><td>LIC-E3</td><td>Microsoft 365 E3 (all options)</td><td>All employees (2,000)</td></tr><tr><td>LIC-E5Sec</td><td>Microsoft 365 E5 Security</td><td>Security team (40)</td></tr><tr><td>LIC-Visio</td><td>Visio Plan 2</td><td>Engineering (60)</td></tr></table></div><p>Findings:</p><ul><li>15 LIC-E3 users are in a “Conflicting service plans” error because they also got an Office 365 E1 license directly two years ago;</li><li>only 50 Visio Plan 2 licenses are available;</li><li>the finance lead wants to remove the Yammer (Viva Engage) option from the E3 license for everyone;</li><li>one LIC-E3 user must keep their E3 license assigned directly, not through the group.</li></ul><p>What is true, and what should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "E1 / E3 conflict:",
   "o": [
    "Remove the direct E1 license",
    "Wait for automatic reprocessing",
    "Add E1 to the LIC-E3 group",
    "Remove these 15 users from LIC-E3"
   ],
   "a": 0
  },
  {
   "l": "Visio (60 members, 50 licenses):",
   "o": [
    "The first 50 alphabetically",
    "10 members in error, unlicensed",
    "Assignment fails for the whole group",
    "All 60 get a license over quota"
   ],
   "a": 1
  },
  {
   "l": "Removing Yammer for everyone:",
   "o": [
    "Delete the Yammer app from the directory",
    "Remove E3 then reassign it",
    "Create an Azure policy",
    "Disable the option in the group assignment"
   ],
   "a": 3
  },
  {
   "l": "Direct license kept:",
   "o": [
    "Replaced by the group license at the next cycle",
    "Coexists with the group's",
    "Blocked",
    "Removed automatically after reprocessing"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Conflicts.</b> Some service plans can't be assigned together (for example Exchange Online in E1 and E3). Remove the conflicting direct license or disable the duplicate plan, then the assignment is reprocessed.<b>Insufficient licenses.</b> Members for whom no license is available go into error; the others get one.<b>Options.</b> Service plans can be disabled in the group's license assignment; all members are updated.<b>Direct and group.</b> A license can be assigned both directly and through a group; the user consumes only one license for the same product.",
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
    "*E1 / E3 conflict",
    "Remove the direct E1 license"
   ],
   [
    "Visio (60 members, 50 licenses)",
    "10 members in error, unlicensed"
   ],
   [
    "Removing Yammer for everyone",
    "Disable the option in the group assignment"
   ],
   [
    "Direct license kept",
    "Coexists with the group's"
   ]
  ]
 },
 "keep": "Conflict = remove the duplicate license. Not enough licenses = per-member error. Option disabled in the group. Direct + group = one license."
},
{
 "id": "D1-422",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam and its partner Northwind each have their own Microsoft Entra ID tenant. They want:</p><ul><li>Northwind employees to take part in Fabrikam's Teams shared channels, with no guest account in the Fabrikam tenant;</li><li>other Northwind employees to access Fabrikam's HR app with a classic B2B guest account;</li><li>Northwind's compliant devices (managed by Intune at Northwind) to be recognized by Fabrikam's Conditional Access policies;</li><li>Fabrikam users to be unable to be invited into tenants other than Northwind's.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Shared channels without a guest account:",
   "o": [
    "Cross-tenant synchronization",
    "B2B Collaboration",
    "Microsoft Entra External ID for customers",
    "B2B Direct Connect"
   ],
   "a": 3
  },
  {
   "l": "HR app:",
   "o": [
    "B2B Direct Connect",
    "A direct SAML federation",
    "B2B Collaboration (guest account)",
    "A manually created member account"
   ],
   "a": 2
  },
  {
   "l": "Northwind compliant devices:",
   "o": [
    "Register Northwind devices in Fabrikam",
    "Create a dynamic group for partner devices",
    "Trust compliant devices",
    "Exclude Northwind"
   ],
   "a": 2
  },
  {
   "l": "Limit outbound invitations:",
   "o": [
    "Outbound: block, except Northwind",
    "An Azure Deny policy on the root group",
    "A Conditional Access policy",
    "External collaboration restrictions (allow list)"
   ],
   "a": 0
  }
 ],
 "expl": "<b>B2B Direct Connect.</b> A mutual trust between two tenants, used for Teams shared channels: no guest object in the resource tenant.<b>B2B Collaboration.</b> The external user is represented by a guest account in the resource tenant.<b>Inbound settings.</b> They let you trust MFA, compliant devices and hybrid joined devices from the home tenant.<b>Outbound settings.</b> They control your users' access to other organizations: you can block by default and allow one specific organization.",
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
    "*Shared channels without a guest account",
    "B2B Direct Connect"
   ],
   [
    "HR app",
    "B2B Collaboration (guest account)"
   ],
   [
    "Northwind compliant devices",
    "Trust compliant devices"
   ],
   [
    "Limit outbound invitations",
    "Outbound: block, except Northwind"
   ]
  ]
 },
 "keep": "No guest = Direct Connect. Guest = Collaboration. Partner devices = inbound trust. Your users = outbound settings."
},
{
 "id": "D1-423",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso's Prod subscription is nearing role assignment limits. The audit shows:</p><ul><li>3,800 role assignments in the subscription, most of them assigning Reader to individual users;</li><li>200 developers each have Contributor on their own resource group;</li><li>the team wants to reduce the number of assignments without changing effective rights;</li><li>a script tries to create the 4,001st assignment in the subscription and fails.</li></ul><p>What should you recommend, and what explains the failure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Individual Reader assignments:",
   "o": [
    "One group, one assignment",
    "Deny assignments on the resources",
    "A custom role created for each user",
    "Per-resource assignments"
   ],
   "a": 0
  },
  {
   "l": "Same rights at a broader scope:",
   "o": [
    "Create a second subscription to split",
    "Parent management group",
    "Duplicate per group",
    "Assign on each resource individually"
   ],
   "a": 1
  },
  {
   "l": "4,001st failure:",
   "o": [
    "500 per group",
    "The script lacks Owner on the subscription",
    "2,000 custom roles per tenant limit",
    "4,000 per subscription"
   ],
   "a": 3
  },
  {
   "l": "200 developers' roles:",
   "o": [
    "One assignment with a condition",
    "200 security groups, one per developer",
    "Owner",
    "A Deny policy on the other resource groups"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Groups.</b> Assigning a role to a group rather than each user reduces the number of assignments.<b>Scope.</b> An assignment on a management group doesn't count toward the subscription limit (management groups have their own limit) and is inherited.<b>Limit.</b> A subscription accepts up to 4,000 Azure role assignments.<b>Conditions.</b> A single assignment with a condition (for example on a tag or attribute) can replace dozens of targeted assignments; conditions are supported for some roles and actions. (Depending on needs, per-team groups remain an option.)",
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
    "*Individual Reader assignments",
    "One group, one assignment"
   ],
   [
    "Same rights at a broader scope",
    "Parent management group"
   ],
   [
    "4,001st failure",
    "4,000 per subscription"
   ],
   [
    "200 developers' roles",
    "One assignment with a condition"
   ]
  ]
 },
 "keep": "Groups and broader scope = fewer assignments. Limit = 4,000 per subscription."
},
{
 "id": "D1-424",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso's kv-apps vault uses the “Azure role-based access control” permission model. The requests:</p><ul><li>the App-Web app (managed identity) must read secrets, without listing or changing them;</li><li>the Security team must create, rotate and delete keys, but must not read secrets;</li><li>the Platform team has Contributor on the vault's resource group; it's surprised it can't see secret contents;</li><li>an administrator suggests switching the vault back to the “Vault access policy” model to simplify.</li></ul><p>Which role should you assign, and what is true?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "App-Web:",
   "o": [
    "Key Vault Secrets User",
    "Key Vault Administrator on the secret",
    "Key Vault Reader",
    "Key Vault Secrets Officer on the vault"
   ],
   "a": 0
  },
  {
   "l": "Security team:",
   "o": [
    "Key Vault Crypto User",
    "Key Vault Crypto Officer",
    "Key Vault Secrets Officer",
    "Key Vault Administrator"
   ],
   "a": 1
  },
  {
   "l": "Contributor without secret access:",
   "o": [
    "Normal: management plane",
    "Bug: Contributor includes the data plane",
    "24 hours",
    "A private endpoint is needed on the vault"
   ],
   "a": 0
  },
  {
   "l": "Contributor risk under access policies:",
   "o": [
    "He can no longer create vaults",
    "None: policies are safer",
    "He loses vault access",
    "He can grant himself data access"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Data roles.</b> Key Vault Secrets User reads secret contents; Secrets Officer manages them; Crypto Officer manages keys with no secret access. Roles can be assigned on a specific secret.<b>Planes.</b> Contributor acts on the management plane (the vault as a resource), not the data plane.<b>Access policies.</b> With that model, anyone with Contributor (Microsoft.KeyVault/vaults/write) can change access policies and grant themselves data access: one reason to prefer the RBAC model.",
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
    "*App-Web",
    "Key Vault Secrets User"
   ],
   [
    "Security team",
    "Key Vault Crypto Officer"
   ],
   [
    "Contributor without secret access",
    "Normal: management plane"
   ],
   [
    "Contributor risk under access policies",
    "He can grant himself data access"
   ]
  ]
 },
 "keep": "Read = Secrets User. Keys = Crypto Officer. Contributor = management only. Access policies = Contributor can self-grant."
},
{
 "id": "D1-425",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam's governance team must apply 12 security policies to every subscription in the MG-Corp management group:</p><ul><li>the 12 policies must be assigned and tracked together, with a single compliance score;</li><li>the allowed regions list, used by three of the policies, must be entered only once at assignment;</li><li>two policies use DeployIfNotExists to deploy the Azure Monitor agent; the remediation task fails with an authorization error;</li><li>the team wants to reuse the set in another tenant.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Grouping:",
   "o": [
    "An initiative definition",
    "12 separate assignments on MG-Corp",
    "An Azure Blueprints plan with 12 artifacts",
    "An exemption"
   ],
   "a": 0
  },
  {
   "l": "Regions entered once:",
   "o": [
    "A parameter entered in each separate assignment",
    "A tag",
    "An initiative parameter",
    "A variable defined in each policy"
   ],
   "a": 2
  },
  {
   "l": "Remediation error:",
   "o": [
    "The policy must first switch to Audit",
    "A lock",
    "Enforcement mode is disabled on MG-Corp",
    "Missing roles (identity)"
   ],
   "a": 3
  },
  {
   "l": "Reuse in another tenant:",
   "o": [
    "Move the management group to the other tenant",
    "Share it",
    "Export the definition",
    "Copy the compliance state to the other tenant"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Initiative.</b> An initiative (policySetDefinition) groups several policies assigned and evaluated together.<b>Parameters.</b> An initiative parameter can feed the parameters of several member policies.<b>Identity.</b> DeployIfNotExists and Modify effects use the assignment's managed identity; it needs the roles listed in roleDefinitionIds (the portal assigns them at creation, but not always on every needed scope).<b>Reuse.</b> Definitions are tenant-specific: export them as JSON or code (Bicep, Terraform) to recreate them elsewhere.",
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
    "*Grouping",
    "An initiative definition"
   ],
   [
    "Regions entered once",
    "An initiative parameter"
   ],
   [
    "Remediation error",
    "Missing roles (identity)"
   ],
   [
    "Reuse in another tenant",
    "Export the definition"
   ]
  ]
 },
 "keep": "Set = initiative. Shared parameter = initiative parameter. Remediation = identity roles. Other tenant = export."
},
{
 "id": "D1-426",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso wants to reduce the cost of its compute workloads. The table shows the workloads:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Workload</th><th>Description</th></tr><tr><td>C1</td><td>40 Windows Server D-series VMs, running 24/7 for at least 3 years; Contoso owns Windows Server licenses with Software Assurance</td></tr><tr><td>C2</td><td>Mixed compute (VMs, App Service, Functions Premium) across several regions and families, stable hourly spend over 3 years</td></tr><tr><td>C3</td><td>Interruptible video renders, automatically restarted if interrupted</td></tr><tr><td>C4</td><td>Development VMs used from 8 AM to 7 PM on weekdays</td></tr></table></div><p>Which savings option should you recommend for each workload?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "C1:",
   "o": [
    "Shutdown",
    "Spot VMs with Deallocate eviction",
    "Reservation + Hybrid Benefit",
    "Savings plan alone, no license"
   ],
   "a": 2
  },
  {
   "l": "C2:",
   "o": [
    "Azure Hybrid Benefit",
    "Spot VMs",
    "Compute savings plan",
    "Reservations per VM family"
   ],
   "a": 2
  },
  {
   "l": "C3:",
   "o": [
    "Dedicated host",
    "Savings plan",
    "1-year reservation",
    "Spot VMs"
   ],
   "a": 3
  },
  {
   "l": "C4:",
   "o": [
    "Spot VM with Delete eviction",
    "Scheduled start/stop",
    "3-year reservation",
    "Dedicated host"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Reservation.</b> Ideal for a stable workload and a known VM family; Azure Hybrid Benefit also removes the Windows Server license cost (with Software Assurance).<b>Savings plan.</b> An hourly spend commitment over 1 or 3 years, applied automatically across services, regions and families: more flexible than a reservation.<b>Spot.</b> Heavily discounted surplus capacity, but interruptible: suited to jobs that tolerate eviction.<b>Scheduling.</b> For VMs used part of the day, stopping (deallocating) outside usage hours removes compute cost; a reservation would be paid 24/7.",
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
    "*C1",
    "Reservation + Hybrid Benefit"
   ],
   [
    "C2",
    "Compute savings plan"
   ],
   [
    "C3",
    "Spot VMs"
   ],
   [
    "C4",
    "Scheduled start/stop"
   ]
  ]
 },
 "keep": "Stable + licenses = reservation + AHB. Mixed = savings plan. Interruptible = Spot. Business hours = scheduled stop."
},
{
 "id": "D1-427",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam uses Azure Advisor to optimize costs. The team notices:</p><ul><li>Advisor recommends resizing VMs that are actually standby servers, lightly loaded most of the time but essential;</li><li>the team wants Advisor to recommend resizing only VMs whose CPU usage stays below 10%, over a longer lookback period than the default;</li><li>a recommendation on a specific VM is irrelevant; it must disappear for good;</li><li>management wants to be notified when a new cost recommendation appears.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Threshold and period:",
   "o": [
    "Advisor configuration",
    "A metric alert on each VM's CPU",
    "A budget",
    "An Azure Audit policy on VM sizes"
   ],
   "a": 0
  },
  {
   "l": "Irrelevant recommendation:",
   "o": [
    "Postpone it 7 days",
    "Dismiss it",
    "Exclude the subscription from Advisor",
    "Delete the VM"
   ],
   "a": 1
  },
  {
   "l": "New recommendation notification:",
   "o": [
    "Budget alert",
    "Activity log alert on VMs",
    "Advisor alert + action group",
    "Exported Cost Management report"
   ],
   "a": 2
  },
  {
   "l": "Overall optimization measure:",
   "o": [
    "Defender secure score",
    "Microsoft Secure Score",
    "Policy compliance score",
    "Advisor score"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Configuration.</b> In Advisor, the VM right-sizing rule accepts a configurable CPU usage threshold and lookback period, per subscription.<b>Dismiss / postpone.</b> A recommendation can be postponed (for a duration) or dismissed (permanently).<b>Advisor alerts.</b> They trigger an action group when a new recommendation of a given category appears.<b>Advisor score.</b> It measures, per category (cost, security, reliability, operational excellence, performance), the share of recommendations applied.",
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
    "*Threshold and period",
    "Advisor configuration"
   ],
   [
    "Irrelevant recommendation",
    "Dismiss it"
   ],
   [
    "New recommendation notification",
    "Advisor alert + action group"
   ],
   [
    "Overall optimization measure",
    "Advisor score"
   ]
  ]
 },
 "keep": "CPU threshold and period = Advisor configuration. Permanent = dismiss. New ones = Advisor alert. Overall = Advisor score."
},
{
 "id": "D1-428",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso must reorganize resources:</p><ul><li>the VM VM-App1 (with its OS disk, NIC and Standard public IP) must move from the RG-Old group to the RG-New group, in the same subscription;</li><li>after the move, the team expects VM-App1 to be in France Central, like RG-New; RG-Old and the VM are in West Europe;</li><li>the storage account stdata must move to the Sub-B subscription, in another Entra ID tenant;</li><li>before moving 200 resources to Sub-C (same tenant), the team wants to check it will succeed, without moving anything.</li></ul><p>What is true, and what should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Resources to move with VM-App1:",
   "o": [
    "The disk first",
    "The VM, then recreate the NIC and IP",
    "Together, with dependencies",
    "The VM alone, dependencies follow later"
   ],
   "a": 2
  },
  {
   "l": "VM-App1 region after the move:",
   "o": [
    "Stays in West Europe",
    "Moves to France Central",
    "Paired region",
    "Chosen during the move"
   ],
   "a": 0
  },
  {
   "l": "stdata to another tenant:",
   "o": [
    "Direct resource move to Sub-B",
    "Change the tenant",
    "Not directly",
    "Billing ownership transfer of stdata"
   ],
   "a": 2
  },
  {
   "l": "Check without moving:",
   "o": [
    "What-if on a template exported from the 200 resources",
    "Azure Resource Mover to the same region",
    "Export the template",
    "Move validation"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Dependencies.</b> Dependent resources must move together (the portal suggests them); for VMs, disks and NICs follow the VM.<b>Region.</b> Moving a resource to another group or subscription doesn't change its region; the resource group only stores metadata.<b>Tenant.</b> Moving resources between subscriptions requires the same tenant. For another tenant, transfer the whole subscription or recreate the resource and copy the data.<b>Validation.</b> The validateMoveResources API (and the portal's validation) tests the move without doing it. Azure Resource Mover is for changing regions.",
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
    "*Resources to move with VM-App1",
    "Together, with dependencies"
   ],
   [
    "VM-App1 region after the move",
    "Stays in West Europe"
   ],
   [
    "stdata to another tenant",
    "Not directly"
   ],
   [
    "Check without moving",
    "Move validation"
   ]
  ]
 },
 "keep": "Dependencies together. Region doesn't change. Other tenant = no direct move. Test = validation."
},
{
 "id": "D1-429",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Fabrikam's security team is reviewing Microsoft Entra ID default user settings:</p><ul><li>standard users must not be able to register applications in the directory;</li><li>non-admin users must not be able to open the Microsoft Entra admin center;</li><li>users must not be able to create new tenants;</li><li>users must not be able to grant third-party apps access to company data on their own, except low-risk permissions from verified publishers.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "App registrations:",
   "o": [
    "An Azure Deny policy on registrations",
    "App registration = No",
    "Remove a role",
    "A Conditional Access policy on the portal"
   ],
   "a": 1
  },
  {
   "l": "Admin center:",
   "o": [
    "Directory Readers role removed from all users",
    "An Azure Deny policy on the Entra portal",
    "A lock",
    "Restrict access = Yes"
   ],
   "a": 3
  },
  {
   "l": "Tenant creation:",
   "o": [
    "Nothing: this behavior can't be blocked",
    "A closed group",
    "Tenant creation = No",
    "An Azure policy assigned to the root group"
   ],
   "a": 2
  },
  {
   "l": "User consent:",
   "o": [
    "Verified publishers, low risk",
    "Do not allow user consent",
    "Admin consent only, with no request workflow",
    "Allow all"
   ],
   "a": 0
  }
 ],
 "expl": "<b>User settings.</b> In Entra ID, “Users can register applications”, “Restrict access to Microsoft Entra admin center” and “Users can create tenants” are set to Yes or No.<b>Admin center.</b> This setting limits access to the admin portal, but doesn't block data access through PowerShell or Graph.<b>Consent.</b> The recommended setting allows consent for apps from verified publishers, for permissions classified as low risk; the rest go through admin consent.",
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
    "*App registrations",
    "App registration = No"
   ],
   [
    "Admin center",
    "Restrict access = Yes"
   ],
   [
    "Tenant creation",
    "Tenant creation = No"
   ],
   [
    "User consent",
    "Verified publishers, low risk"
   ]
  ]
 },
 "keep": "Registration, admin center, tenants = Yes/No user settings. Consent = verified publishers, low risk."
},
{
 "id": "D1-430",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Contoso assigned to the MG-Prod management group a DeployIfNotExists policy that deploys diagnostic settings on Key Vaults, with a system-assigned managed identity on the assignment.</p><ul><li>The policy is assigned from the portal; the identity creation box is checked;</li><li>new vaults do get the diagnostic settings;</li><li>the 150 existing vaults still have none, a week later;</li><li>the destination Log Analytics workspace is in the Sub-Logs subscription, outside MG-Prod, and the remediation task fails for the vaults.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Existing vaults:",
   "o": [
    "Reassign the policy",
    "Wait for the 24-hour cycle",
    "Switch the policy to Audit",
    "Create a remediation task"
   ],
   "a": 3
  },
  {
   "l": "Failure related to Sub-Logs:",
   "o": [
    "User identity",
    "A role on the workspace",
    "Must move the workspace into MG-Prod",
    "Disable the assignment's enforcement mode"
   ],
   "a": 1
  },
  {
   "l": "Typical role on the workspace:",
   "o": [
    "Reader",
    "Log Analytics Reader on Sub-Logs",
    "Log Analytics Contributor",
    "Monitoring Reader on the workspace"
   ],
   "a": 2
  },
  {
   "l": "Who runs the deployment:",
   "o": [
    "The assignment's identity",
    "The subscription owner",
    "The Key Vault service",
    "The user who created the vault"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Remediation.</b> DeployIfNotExists and Modify effects act on new resources and updates; existing non-compliant resources need a remediation task.<b>Permissions.</b> The assignment's managed identity runs the deployment: it needs the required roles on every affected scope, including the workspace outside the assignment scope (the portal only assigns roles at the assignment's scope).<b>Role.</b> Log Analytics Contributor allows configuring diagnostics to the workspace; read roles aren't enough.",
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
    "*Existing vaults",
    "Create a remediation task"
   ],
   [
    "Failure related to Sub-Logs",
    "A role on the workspace"
   ],
   [
    "Typical role on the workspace",
    "Log Analytics Contributor"
   ],
   [
    "Who runs the deployment",
    "The assignment's identity"
   ]
  ]
 },
 "keep": "Existing = remediation task. Outside scope = add a role for the identity. The assignment's identity deploys."
}
);
