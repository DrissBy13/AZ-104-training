/* Domain 1: identities and governance (batch G: D1-301 to D1-331, multi-answer questions merged from former multiple-choice items) */
AZ.questions.push(
{
 "id": "D1-301",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are distributing Microsoft Entra ID admin roles. What should you do or answer in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A Global Administrator must manage all subscriptions and management groups, even with no Azure role:",
   "o": [
    "Enable “Access management for Azure resources”",
    "Add Admin1 to the root management group",
    "Assign Admin1 Owner on each subscription",
    "Assign Admin1 Privileged Role Administrator"
   ],
   "a": 0
  },
  {
   "l": "Admin3 (User Administrator) wants to reset a Global Administrator's password:",
   "o": [
    "Yes, but only if the Global Administrator allows it",
    "No: Global or Privileged Authentication Administrator",
    "Yes, User Administrator can reset every password",
    "No, no administrator password can be reset"
   ],
   "a": 1
  },
  {
   "l": "No user should hold Global Administrator without needing it — recommendation:",
   "o": [
    "Delete all Global Administrators",
    "Fewer than five Global Administrators, less privileged roles",
    "Give the Global Administrator role to every administrator",
    "Assign Global Administrator to a dynamic group"
   ],
   "a": 1
  },
  {
   "l": "User13, owner of the assigned group GRP-Projet with no admin role, can:",
   "o": [
    "Add and remove members of GRP-Project",
    "Delete the accounts of GRP-Project's members",
    "Assign licenses to GRP-Project's members",
    "Reset the password of GRP-Project's members"
   ],
   "a": 0
  },
  {
   "l": "Assign a Microsoft Entra role to a group — required property:",
   "o": [
    "Contain guest users only",
    "Have dynamic membership",
    "The “Entra roles can be assigned” option at creation",
    "Be a Microsoft 365 group with a shared mailbox"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. A Global Administrator must manage all subscriptions and management groups, even with no Azure role:</b></p><p>The <b>Access management for Azure resources</b> setting (elevate access), in the Microsoft Entra ID properties, gives the Global Administrator the <b>User Access Administrator</b> role at the root scope <code>/</code>. He can then assign himself the roles he needs on any subscription or management group.</p><ul><li>To assign Owner on each subscription, he would already need rights on those subscriptions.</li><li><b>Privileged Role Administrator</b> manages Microsoft Entra roles, not Azure roles.</li><li>You don't “add” a user to a management group: you assign a role on it, which already requires rights.</li></ul><p><b>2. Admin3 (User Administrator) wants to reset a Global Administrator's password:</b></p><p>User Administrator can reset the password of non-admin users and of some limited roles, but <b>not</b> that of a Global Administrator. You need a role at least as privileged: Global Administrator or Privileged Authentication Administrator.</p><p>This rule prevents an administrator from taking over an account more powerful than their own.</p><p><b>3. No user should hold Global Administrator without needing it — recommendation:</b></p><p>Microsoft recommends having <b>fewer than five</b> Global Administrators (but at least two, including an emergency access account) and using more specific roles for everything else.</p><p>Deleting all Global Administrators is impossible and dangerous. Groups that receive Entra roles can't be dynamic.</p><p><b>4. User13, owner of the assigned group GRP-Projet with no admin role, can:</b></p><p>A group's <b>owner</b> manages the group: members, owners, name, description. They can also delete it.</p><p>They have no rights over the members' <b>accounts</b>: resetting their password, assigning them licenses, or deleting them requires an appropriate Microsoft Entra role.</p><p><b>5. Assign a Microsoft Entra role to a group — required property:</b></p><p>Only groups created with the <b>“Microsoft Entra roles can be assigned to the group”</b> option (isAssignableToRole) can receive an Entra role. This option can only be chosen at creation and cannot be changed afterward.</p><p>These groups cannot have dynamic membership, so that a simple attribute change can't grant an admin role. The type can be security or Microsoft 365.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID"
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
 "keep": "Elevate access = User Access Administrator at the root “/”. Turn it off after use. You can't reset the password of a role more privileged than your own. Few Global Administrators (2 to 4); targeted roles for everything else. Group owner = manages the group, never its members' accounts. Entra role on a group = isAssignableToRole set at creation, assigned membership only."
},
{
 "id": "D1-302",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Finance wants to control Azure costs. You need to choose the tool or configuration that meets each request.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Tools",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "Azure Advisor",
  "The Azure pricing calculator",
  "Azure Resource Graph",
  "Cost analysis grouped by service",
  "A scheduled Cost Management export",
  "A budget with a forecasted-cost alert",
  "An action group attached to the budget",
  "Azure Policy"
 ],
 "tgts": [
  {
   "l": "List of underused VMs with resize or shutdown recommendations",
   "a": 0
  },
  {
   "l": "Monthly cost of 3 VMs, a storage account, and a VPN gateway before deployment",
   "a": 1
  },
  {
   "l": "VMs across 40 subscriptions without the Owner tag, in one query",
   "a": 2
  },
  {
   "l": "Identify the service behind a sharp rise this month",
   "a": 3
  },
  {
   "l": "A daily CSV of Sub1 costs for an in-house tool",
   "a": 4
  },
  {
   "l": "Email when RG1's forecasted cost exceeds 80% of €1,000",
   "a": 5
  },
  {
   "l": "Trigger a runbook that stops dev VMs in addition to the email",
   "a": 6
  }
 ],
 "expl": "<p><b>1. List of underused VMs with resize or shutdown recommendations</b></p><p><b>Azure Advisor</b> analyzes resource usage and gives recommendations by category: Cost, Security, Reliability, Operational excellence, and Performance. In the Cost category, it flags underused VMs and suggests resizing or shutting them down.</p><p>Azure Policy checks compliance rules. Entra ID manages identities. Resource Graph lets you query the resource inventory, but gives no recommendations.</p><p><b>2. Monthly cost of 3 VMs, a storage account, and a VPN gateway before deployment</b></p><p>The <b>pricing calculator</b> estimates the cost of services not yet deployed: you choose services, region, sizes, and quantities.</p><p><b>Cost analysis</b> and <b>budgets</b> work on actual spending of existing resources. <b>Advisor</b> recommends savings on what is already deployed.</p><p><b>3. VMs across 40 subscriptions without the Owner tag, in one query</b></p><p><b>Azure Resource Graph</b> queries the resource inventory of several subscriptions at once, with the KQL language. It answers in seconds, which makes it the right tool for this kind of inventory.</p><p>Advisor gives recommendations. Cost analysis shows spending. The activity log tracks operations, not the current state of resources.</p><p><b>4. Identify the service behind a sharp rise this month</b></p><p>In <b>cost analysis</b>, the <b>Group by</b> option (service name, resource group, resource, tag, location…) shows how spending is split. Grouping by service name reveals the one that increased.</p><p>A budget alerts for the future. An export is for archiving or analyzing elsewhere. The activity log contains no costs.</p><p><b>5. A daily CSV of Sub1 costs for an in-house tool</b></p><p>Cost Management <b>exports</b> write cost data to a <b>storage account</b>, at a chosen frequency (daily, weekly, monthly), in CSV or Parquet format.</p><p>A budget alert sends a message, not a data file. Advisor doesn't produce a cost file. The subscription diagnostic setting sends the activity log, not costs.</p><p><b>6. Email when RG1's forecasted cost exceeds 80% of €1,000</b></p><p>A Cost Management <b>budget</b> sets an amount (here €1,000 per month) and <b>alert conditions</b> as a percentage, on <b>Actual</b> cost (already spent) or <b>Forecasted</b> cost (end-of-period projection). Here: type Forecasted, threshold 80%, with an email or an action group.</p><ul><li><b>Advisor</b> recommends savings, but does not alert on a threshold.</li><li><b>Azure Policy</b> controls resource configuration, not costs.</li><li><b>A metric alert</b> monitors technical values (CPU, requests…), not spending.</li></ul><p><b>7. Trigger a runbook that stops dev VMs in addition to the email</b></p><p>Budgets accept an Azure Monitor <b>action group</b>. An action group can send emails and SMS, but also start an Automation runbook, an Azure function, a logic app, or a webhook.</p><p>The other answers don't react to an alert.</p>",
 "portal": {
  "path": [
   "Advisor"
  ],
  "title": "Advisor | Cost",
  "menu": [
   "Overview",
   "*Cost",
   "Security",
   "Reliability",
   "Performance"
  ],
  "rows": [
   [
    "*Right-size or shutdown underutilized virtual machines",
    "12 impacted resources"
   ],
   [
    "Buy virtual machine reserved instances",
    "Estimated savings"
   ]
  ]
 },
 "keep": "Underused VMs, suggested reservations = Azure Advisor, Cost category. Cost before deployment = pricing calculator (azure.microsoft.com/pricing/calculator). Actual spending = Cost Management. Resource inventory across several subscriptions in one KQL query = Azure Resource Graph. Finding where an increase comes from = Cost analysis > Group by (service, resource, tag…). Regular cost file = Cost Management export to a storage account. Budget = alerts on actual or forecasted cost, at a percentage of the amount. It warns, it never blocks. Making a budget act (runbook, function, webhook) = action group."
},
{
 "id": "D1-303",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Several users have overlapping Azure role assignments. What can they do in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A Sub1 Contributor can't delete a resource group lock — reason:",
   "o": [
    "The group's resources must be deleted first",
    "Locks can only be deleted by their creator",
    "A lock can't be deleted for 24 hours",
    "Contributor lacks the locks/delete action"
   ],
   "a": 3
  },
  {
   "l": "User6 is in group A (Reader on RG1) and group B (Contributor on RG1) — permissions:",
   "o": [
    "Those of the role assigned first",
    "Reader, because the most restrictive role wins",
    "Contributor: permissions are additive",
    "None, because the two roles conflict"
   ],
   "a": 2
  },
  {
   "l": "User9 has a custom role whose NotActions exclude account deletion, plus Contributor on RG1 — can they delete an account?",
   "o": [
    "No, because NotActions forbids deletion",
    "No, because the most restrictive role wins",
    "Yes, but only after 24 hours",
    "Yes, because Contributor grants deletion"
   ],
   "a": 3
  },
  {
   "l": "User21 is Reader on Sub1 and Contributor on RG3 (in Sub1):",
   "o": [
    "Read all resources in Sub1 and modify those in RG3",
    "Only read the resources in Sub1, because Reader is assigned higher up",
    "Only modify RG3, without seeing the rest",
    "Modify all resources in Sub1"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. A Sub1 Contributor can't delete a resource group lock — reason:</b></p><p>Creating or deleting a lock requires the <code>Microsoft.Authorization/locks/*</code> actions. They are included in the <b>Owner</b> and <b>User Access Administrator</b> roles, but <b>not</b> in Contributor, which excludes all Microsoft.Authorization actions.</p><p>Anyone with these rights can delete a lock, not only its creator. There is no 24-hour delay, and you delete a lock without touching the resources.</p><p><b>2. User6 is in group A (Reader on RG1) and group B (Contributor on RG1) — permissions:</b></p><p>Azure role-based access control is <b>additive</b>: the permissions of all assignments add up. User6 therefore has Contributor rights, which include Reader's.</p><p>Only <b>deny assignments</b> can remove a permission. The order of assignments doesn't matter, and two roles never “conflict”.</p><p><b>3. User9 has a custom role whose NotActions exclude account deletion, plus Contributor on RG1 — can they delete an account?</b></p><p><b>NotActions is not a deny</b>: it only removes actions from the role where it is written. If another role grants the action, it is allowed. Contributor grants <code>*</code>, and therefore deletion.</p><p>Azure permissions are additive. Only a deny assignment would block the action despite Contributor.</p><p><b>4. User21 is Reader on Sub1 and Contributor on RG3 (in Sub1):</b></p><p>Roles are <b>additive</b>: Reader on Sub1 gives read access everywhere, Contributor on RG3 adds modification in RG3.</p><p>A role assigned higher up never restricts a role assigned lower down. Contributor on RG3 doesn't extend to the rest of the subscription.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Locks",
  "menu": [
   "Overview",
   "Access control (IAM)",
   "*Locks"
  ],
  "rows": [
   [
    "*Delete lock",
    "Requires Microsoft.Authorization/locks/delete"
   ],
   [
    "Roles that have it",
    "Owner, User Access Administrator"
   ]
  ]
 },
 "keep": "Managing locks = Owner or User Access Administrator. Contributor cannot. RBAC is additive: the rights of all roles add up. Only a deny assignment removes a right. NotActions is not a deny: another role can grant the action. Only a deny assignment blocks it. Roles add up; a role higher up never limits a role lower down."
},
{
 "id": "D1-304",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Users report access problems with Azure resources. What should you answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "User14 just got Reader on RG1 but can't see the resources:",
   "o": [
    "The assignment takes a few minutes: sign in again",
    "Contributor doesn't allow viewing resources",
    "He also needs a Microsoft Entra ID P2 license",
    "The role must be assigned twice to take effect"
   ],
   "a": 0
  },
  {
   "l": "Contributor gives “full rights” but can't assign access:",
   "o": [
    "Contributor is a Microsoft Entra role, not an Azure one",
    "Contributor only applies to resource groups",
    "Its NotActions exclude Microsoft.Authorization writes",
    "Contributor only contains read actions"
   ],
   "a": 2
  },
  {
   "l": "Role assignments of users deleted from Entra ID, in the IAM tab:",
   "o": [
    "They're transferred to the user's manager",
    "They appear as group assignments",
    "Type “Unknown”, name “Identity not found”",
    "They're deleted automatically with the user"
   ],
   "a": 2
  },
  {
   "l": "New user with no role — visible Azure resources:",
   "o": [
    "The resources of subscriptions whose ID he knows",
    "The resources of his default resource group",
    "No Azure resources, since he has no role",
    "All resources in the tenant, read-only"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. User14 just got Reader on RG1 but can't see the resources:</b></p><p>A new assignment can take up to about ten minutes to take effect. Signing out and back in (or refreshing the portal) forces a new token to be fetched.</p><p>No license is required for an Azure role. Contributor includes read access.</p><p><b>2. Contributor gives “full rights” but can't assign access:</b></p><p>The Contributor definition grants <code>*</code> in Actions, but excludes in NotActions writing and deleting in <code>Microsoft.Authorization</code> (role assignments, locks, authorization policies) as well as elevating access. It therefore manages everything except access.</p><p>Contributor can be assigned at any scope and is an Azure role.</p><p><b>3. Role assignments of users deleted from Entra ID, in the IAM tab:</b></p><p>Deleting a user doesn't delete their Azure role assignments. They stay visible with the type <b>Unknown</b> and the label <b>Identity not found</b>. It's best to clean them up, since they count toward the subscription's assignment limit.</p><p><b>4. New user with no role — visible Azure resources:</b></p><p>Access to Azure resources is <b>denied by default</b>. Without an Azure role assignment, User19 sees no subscription and no resource. He can only sign in to the portal and see some directory information, depending on user settings.</p><p>There's no per-user “default resource group”, and knowing an ID grants no access.</p>",
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
    "*User14 · Contributor",
    "Added 2 minutes ago"
   ],
   [
    "Propagation",
    "Up to ~10 minutes, refresh or sign in again"
   ]
  ]
 },
 "keep": "A new assignment can take a few minutes: sign in again for a new token. Contributor = everything except writing in Microsoft.Authorization (roles, locks). Deleted user: their assignments remain, as “Identity not found”; clean them up. Without an Azure role, you see no resources: access is denied by default."
},
{
 "id": "D1-305",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You assign Azure Policy policies with different effects. What happens, or what should you choose, in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Modify and Deny policies on storage accounts — evaluation order:",
   "o": [
    "In alphabetical order of the definitions",
    "Both at the same time, Deny wins",
    "Modify, then Deny",
    "Deny, then Modify"
   ],
   "a": 2
  },
  {
   "l": "An Append policy adds an IP rule to new accounts' firewall:",
   "o": [
    "Append adds fields to the request",
    "Append deploys a separate resource after creation",
    "Append removes non-compliant fields from the request",
    "Append blocks creation if the field is missing"
   ],
   "a": 0
  },
  {
   "l": "Policy adds Env=Prod if missing; storage5 is created with Env=Dev:",
   "o": [
    "Env=Prod",
    "Env=Prod and Env=Dev",
    "None: the creation is denied",
    "Env=Dev"
   ],
   "a": 3
  },
  {
   "l": "New VMs must be connected to WS1 automatically — effect:",
   "o": [
    "Audit",
    "DeployIfNotExists",
    "Append",
    "Deny"
   ],
   "a": 1
  },
  {
   "l": "Report VMs without the antivirus extension, with no deployment or block — effect:",
   "o": [
    "Modify",
    "AuditIfNotExists",
    "Deny",
    "DeployIfNotExists"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Modify and Deny policies on storage accounts — evaluation order:</b></p><p>The evaluation order is: <b>Disabled</b>, then <b>Append and Modify</b>, then <b>Deny</b>, then <b>Audit</b>, and finally, after creation, <b>AuditIfNotExists and DeployIfNotExists</b>.</p><p>Since Modify runs before Deny, a request can be fixed by Modify and then accepted by Deny, which avoids needless denials.</p><p><b>2. An Append policy adds an IP rule to new accounts' firewall:</b></p><p><b>Append</b> adds fields to the resource during creation or update, for example an IP rule or a property value. For tags, the <b>Modify</b> effect is now preferred.</p><p>Blocking is <b>Deny</b>. Deploying a separate resource is <b>DeployIfNotExists</b>. Append removes nothing.</p><p><b>3. Policy adds Env=Prod if missing; storage5 is created with Env=Dev:</b></p><p>An “add the tag <b>if missing</b>” policy uses the <code>addOrReplace</code> operation with a condition on the tag being absent. Since storage5 already has Env, the condition isn't met: the value <b>Env=Dev</b> is kept.</p><p>A policy without that condition, which forces the value, would replace Dev with Prod. A tag can't have two values. Modify never denies a request.</p><p><b>4. New VMs must be connected to WS1 automatically — effect:</b></p><p><b>DeployIfNotExists</b> checks that a related resource exists (here, the agent or the diagnostic setting) and deploys it if not, using the assignment's managed identity.</p><p>Audit only reports. Deny would block VM creation instead of configuring the VMs. Append adds fields to the create request, but can't deploy an extension.</p><p><b>5. Report VMs without the antivirus extension, with no deployment or block — effect:</b></p><p><b>AuditIfNotExists</b> checks for a related resource (here the extension) and marks the VM non-compliant if it's missing. It deploys nothing.</p><p>DeployIfNotExists would install it. Deny would block VM creation. Modify would change the VM's properties.</p>",
 "portal": {
  "path": [
   "Policy",
   "Definitions"
  ],
  "title": "Evaluation order",
  "menu": [
   "*Definitions"
  ],
  "rows": [
   [
    "1",
    "Disabled"
   ],
   [
    "*2",
    "Append, Modify"
   ],
   [
    "*3",
    "Deny"
   ],
   [
    "4",
    "Audit"
   ],
   [
    "5 (after creation)",
    "AuditIfNotExists, DeployIfNotExists"
   ]
  ]
 },
 "keep": "Order: Disabled → Append/Modify → Deny → Audit → *IfNotExists. Append adds fields to the request; it neither blocks nor deploys. “Add if missing” doesn't touch a tag that's already there. Modify never denies. Automatically configuring what's missing (agent, diagnostics) = DeployIfNotExists. Reporting a missing related resource = AuditIfNotExists; deploying it = DeployIfNotExists."
},
{
 "id": "D1-306",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are strengthening governance of privileged access and resources. What should you use or answer for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Privileged access to activate during close, with Entra ID P2 — assignment type:",
   "o": [
    "Administrative unit assignment",
    "Permanently active",
    "Active with an end date in one year",
    "Eligible"
   ],
   "a": 3
  },
  {
   "l": "Access granted for 3 months then removed automatically, minimal management:",
   "o": [
    "A lock on the resource group",
    "An active assignment in PIM with an end date",
    "A classic assignment, to delete in 3 months",
    "A 3-month budget on the resource group"
   ],
   "a": 1
  },
  {
   "l": "Activate a role only when needed, for a limited time, with justification:",
   "o": [
    "Administrative units per team",
    "An Azure Policy in Deny mode",
    "Privileged Identity Management (PIM)",
    "Locks on critical resources"
   ],
   "a": 2
  },
  {
   "l": "Sensitive accounts managed only within the unit, untouchable by tenant admins:",
   "o": [
    "A role-assignable security group",
    "A restricted management administrative unit",
    "A read-only resource lock",
    "An Azure deny assignment on the group"
   ],
   "a": 1
  },
  {
   "l": "A deny assignment appears in RG1's IAM:",
   "o": [
    "A deny assignment only targets Microsoft Entra roles",
    "They're created by Azure (for example deployment stacks)",
    "You can create a deny assignment yourself in the portal",
    "A deny assignment is weaker than a role assignment"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Privileged access to activate during close, with Entra ID P2 — assignment type:</b></p><p>An <b>eligible</b> assignment doesn't grant the role permanently: the user <b>activates</b> it when needed, for a set maximum duration (for example 8 hours), with justification or approval.</p><p>An <b>active</b> assignment grants the role continuously, even with an end date. An administrative unit limits scope, not duration.</p><p><b>2. Access granted for 3 months then removed automatically, minimal management:</b></p><p>PIM lets you create assignments (active or eligible) with a <b>start and end date</b>. At the end date, access is removed automatically.</p><p>A classic assignment depends on someone remembering to delete it. The other two options don't manage access.</p><p><b>3. Activate a role only when needed, for a limited time, with justification:</b></p><p><b>Privileged Identity Management</b> lets you make a role <b>eligible</b> instead of permanent: the administrator activates it for a limited time, with a justification, multifactor authentication, or approval if needed. PIM works for Microsoft Entra roles and Azure roles. It requires Microsoft Entra ID P2.</p><p>Locks, Azure Policy, and administrative units don't handle temporary role activation.</p><p><b>4. Sensitive accounts managed only within the unit, untouchable by tenant admins:</b></p><p>A <b>restricted management administrative unit</b> protects its objects: only administrators assigned <b>on that unit</b> can modify them. Even a tenant-level User Administrator can no longer manage them.</p><p>A role-assignable group is used to assign Entra roles to a group. Locks and deny assignments apply to Azure resources, not to directory objects.</p><p><b>5. A deny assignment appears in RG1's IAM:</b></p><p><b>Deny assignments</b> block actions even if a role allows them: they are evaluated <b>before</b> role assignments. But you cannot create them directly: they are created and managed by Azure, for example by <b>deployment stacks</b> or managed applications.</p><p>They apply to Azure resources, not to Microsoft Entra roles. To protect resources yourself, use locks or Azure Policy instead.</p>",
 "portal": {
  "path": [
   "Privileged Identity Management",
   "Microsoft Entra roles"
  ],
  "title": "Add assignments | Setting",
  "menu": [
   "Membership",
   "*Setting"
  ],
  "rows": [
   [
    "*Assignment type",
    "Eligible"
   ],
   [
    "Activation maximum duration",
    "8 hours"
   ]
  ],
  "btn": "Assign"
 },
 "keep": "Role used occasionally = eligible assignment in PIM. Access that expires on its own = PIM assignment with an end date. Role activated on demand, time-limited = PIM (Entra ID P2), for Entra and Azure roles. Protecting accounts even from tenant admins = restricted management administrative unit. Deny assignment: takes precedence over roles, created only by Azure (deployment stacks, managed applications)."
},
{
 "id": "D1-307",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Resource locks protect the production environment. What happens, or what should you do, in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Read-only lock on WebApp1 — consequence:",
   "o": [
    "Users can no longer reach the site",
    "No more configuration changes or scaling",
    "The site's content is deleted when the lock is set",
    "WebApp1 automatically switches to the Free tier"
   ],
   "a": 1
  },
  {
   "l": "VM1 has a Delete lock; an admin deletes RG1:",
   "o": [
    "All resources except VM1 are deleted, then RG1",
    "VM1 is moved to a new resource group",
    "The deletion of RG1 fails",
    "RG1 and all its resources are deleted"
   ],
   "a": 2
  },
  {
   "l": "Delete on RG1 and Read-only on VM1 — effective lock on VM1:",
   "o": [
    "Read-only, the most restrictive lock",
    "The most recently created lock on the resource",
    "Delete, because the parent's lock wins",
    "None, because the two locks cancel each other out"
   ],
   "a": 0
  },
  {
   "l": "Delete lock on VNet1; deleting the empty Subnet3:",
   "o": [
    "The deletion succeeds after confirmation",
    "The subnet is emptied but kept",
    "It fails: the lock covers child resources",
    "The deletion succeeds, since the lock only protects VNet1"
   ],
   "a": 2
  },
  {
   "l": "“scope(s) are locked” error when deleting storage8:",
   "o": [
    "Remove the lock from the account or its parent",
    "Disable blob soft delete",
    "Empty all the account's containers first",
    "Assign Storage Blob Data Contributor"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Read-only lock on WebApp1 — consequence:</b></p><p>The Read-only lock blocks management operations that write: changing app settings, changing plans, adding an instance. It also prevents tools like Visual Studio Server Explorer from displaying the site's files, because that interaction requires write access.</p><p>The site itself keeps responding: locks don't touch user traffic. Nothing is deleted or modified.</p><p><b>2. VM1 has a Delete lock; an admin deletes RG1:</b></p><p>Deleting a resource group means deleting each of its resources. Since VM1 cannot be deleted, the operation on RG1 <b>fails</b>. To delete RG1, you must remove the lock first.</p><p>Azure never moves a resource on its own. Depending on processing order, some unlocked resources may already have been deleted before the failure, which is why you lock the whole resource group for important environments.</p><p><b>3. Delete on RG1 and Read-only on VM1 — effective lock on VM1:</b></p><p>Locks are inherited, and when several apply, the <b>most restrictive</b> wins. Read-only is more restrictive than Delete: VM1 can be neither deleted nor modified.</p><p>Locks never cancel each other out, and creation order doesn't matter.</p><p><b>4. Delete lock on VNet1; deleting the empty Subnet3:</b></p><p>A lock applies to the resource <b>and its child resources</b>. A subnet is a child resource of the virtual network: its deletion is blocked.</p><p>You must remove the lock, delete the subnet, then put the lock back.</p><p><b>5. “scope(s) are locked” error when deleting storage8:</b></p><p>The message says a <b>lock</b> applies, on storage8 itself or inherited from its resource group or subscription. You must remove it (with the Owner or User Access Administrator role), delete the account, then put the lock back if needed.</p><p>The account's content, data roles, and soft delete aren't the cause.</p>",
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
 "keep": "A lock blocks management, never the service delivered to users. A locked resource prevents the deletion of its resource group. Several locks: the most restrictive applies. A lock covers the resource and its child resources (subnets…). “scope(s) are locked” = a lock, direct or inherited; remove it before deleting."
},
{
 "id": "D1-308",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Apps and VMs must access resources with no secret. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A service principal starts and stops RG1 VMs from a script:",
   "o": [
    "Add the service principal to an administrative unit",
    "Assign an Azure role to the service principal on RG1",
    "Assign the service principal the Entra role Application Administrator",
    "Create an Azure Policy for the application"
   ],
   "a": 1
  },
  {
   "l": "A VM reads vault secrets with no password or certificate in code:",
   "o": [
    "A shared access key for the key vault",
    "A read-only lock on the key vault",
    "A managed identity with a role on secrets",
    "A Microsoft Entra user account dedicated to the app"
   ],
   "a": 2
  },
  {
   "l": "User-assigned identity ID-App serves 5 web apps — role assignment:",
   "o": [
    "To the administrator who created ID-App",
    "To the web apps' resource group",
    "To ID-App, once, on the targets",
    "To each web app separately"
   ],
   "a": 2
  },
  {
   "l": "Read secrets in KV2, which uses the Vault access policy model:",
   "o": [
    "Assign the Reader role on the KV2 vault",
    "An access policy with Get on secrets",
    "Enable soft delete on KV2",
    "Key Vault Secrets User on KV2"
   ],
   "a": 1
  },
  {
   "l": "Entra sign-in to VM1 with local admin rights — role:",
   "o": [
    "Global Administrator",
    "Virtual Machine Administrator Login",
    "Virtual Machine User Login",
    "Virtual Machine Contributor (management)"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. A service principal starts and stops RG1 VMs from a script:</b></p><p>A <b>service principal</b> is an identity like a user: you assign it an Azure role (for example Virtual Machine Contributor or a custom role) at the desired scope.</p><p>Administrative units and the Application Administrator role apply to the directory. Azure Policy grants no permissions.</p><p><b>2. A VM reads vault secrets with no password or certificate in code:</b></p><p>A <b>managed identity</b> gives the VM a Microsoft Entra identity whose credentials Azure manages. You then assign it a role, for example <b>Key Vault Secrets User</b>, on the vault.</p><p>A user account would require storing a password. Key vaults have no “shared access key”. A lock grants no access.</p><p><b>3. User-assigned identity ID-App serves 5 web apps — role assignment:</b></p><p>A user-assigned identity is a single principal: you assign it the roles <b>once</b>, and all 5 apps that use it benefit. That's the advantage of this identity type when several resources need the same access.</p><p><b>4. Read secrets in KV2, which uses the Vault access policy model:</b></p><p>With the <b>Vault access policy</b> model, data access is granted through <b>access policies</b> (Get, List, Set… per object type). RBAC data roles such as Secrets User have <b>no effect</b> until the vault switches to the RBAC model.</p><p>Reader only gives access to the control plane. Soft delete protects against deletion; it grants no access.</p><p><b>5. Entra sign-in to VM1 with local admin rights — role:</b></p><p>Signing in to a VM with an Entra account is controlled by two Azure roles: <b>Virtual Machine Administrator Login</b> (local administrator rights) and <b>Virtual Machine User Login</b> (standard user rights).</p><p><b>Virtual Machine Contributor</b> manages the VM resource, but doesn't allow signing in to its operating system. Global Administrator is an Entra role unrelated to VM sign-in.</p>",
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
 "keep": "A service principal receives Azure roles just like a user. Access to Azure with no secret in the code = managed identity + role on the target resource. Shared user-assigned identity: roles assigned once to the identity. Vault in access policy model: RBAC data roles have no effect. Entra sign-in to a VM: Virtual Machine Administrator Login (local admin) or Virtual Machine User Login."
},
{
 "id": "D1-309",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You register apps in Microsoft Entra ID. What should you grant for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "An app creates users with no human interaction:",
   "o": [
    "The User.ReadWrite.All application permission (consent)",
    "An access key of the app's storage account",
    "A managed identity, with no other configuration",
    "The Azure Contributor role on the subscription"
   ],
   "a": 0
  },
  {
   "l": "An app reads signed-in users' profiles on their behalf:",
   "o": [
    "An application permission User.ReadWrite.All",
    "A managed identity",
    "An Azure Reader role",
    "A delegated permission User.Read"
   ],
   "a": 3
  },
  {
   "l": "An app reads data container blobs without changing them or managing the account:",
   "o": [
    "Reader on storage1",
    "Storage Account Contributor on storage1",
    "Storage Blob Data Contributor on the data container",
    "Storage Blob Data Reader on the data container"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. An app creates users with no human interaction:</b></p><p>Directory operations go through <b>Microsoft Graph</b>. An <b>application</b> permission (no signed-in user) such as <code>User.ReadWrite.All</code> must receive <b>admin consent</b>. You can also assign the application an Entra role such as User Administrator.</p><p>An Azure role grants no rights on the directory. A managed identity with no permission can do nothing.</p><p><b>2. An app reads signed-in users' profiles on their behalf:</b></p><p>A <b>delegated permission</b> acts on behalf of the signed-in user, with at most their own rights. <code>User.Read</code> lets them read their profile and doesn't require admin consent.</p><p>An application permission acts with no user, with rights over the whole directory: too broad. Azure roles don't apply to Graph.</p><p><b>3. An app reads data container blobs without changing them or managing the account:</b></p><p>Reading a blob's content is a <b>data</b> operation (DataActions). The <b>Storage Blob Data Reader</b> role grants it, and the container scope limits access to data.</p><ul><li><b>Reader</b> covers only the control plane: you see the account and its properties, but not blob content with your identity.</li><li><b>Storage Account Contributor</b> manages the account (and can read the access keys): too many rights.</li><li><b>Storage Blob Data Contributor</b> also allows writing and deleting.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "App registrations",
   "App-Provisioning"
  ],
  "title": "App-Provisioning | API permissions",
  "menu": [
   "Overview",
   "Certificates & secrets",
   "*API permissions"
  ],
  "rows": [
   [
    "*Microsoft Graph · User.ReadWrite.All",
    "Application"
   ],
   [
    "Status",
    "Admin consent granted"
   ]
  ],
  "btn": "Grant admin consent"
 },
 "keep": "Acting on the directory without a user = Graph application permission + admin consent. On behalf of the user = delegated permission. With no user = application permission. Reading blobs with an Entra identity = data role (Storage Blob Data Reader). Reader alone doesn't see the data."
},
{
 "id": "D1-310",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are creating Azure Policy definitions. What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Group 12 ISO 27001 definitions and track their compliance as a whole:",
   "o": [
    "A management group",
    "A resource tag",
    "An Azure Blueprints plan",
    "An initiative definition"
   ],
   "a": 3
  },
  {
   "l": "Evaluate only resources that support tags and locations — mode:",
   "o": [
    "Microsoft.Resources",
    "Tags",
    "All",
    "Indexed"
   ],
   "a": 3
  },
  {
   "l": "Block Cosmos DB and AKS without affecting other services:",
   "o": [
    "Allowed resource types, with Cosmos DB and AKS",
    "Not allowed resource types",
    "Allowed virtual machine size SKUs",
    "Allowed locations"
   ],
   "a": 1
  },
  {
   "l": "No RG-Dev resource outside France Central, even if the template changes:",
   "o": [
    "An Allowed locations policy assigned to RG-Dev",
    "A Delete lock on RG-Dev",
    "A custom role without the Microsoft.Resources/deployments/write action",
    "A Region=FranceCentral tag on RG-Dev"
   ],
   "a": 0
  },
  {
   "l": "Resources without CostCenter visible in a dashboard, with no blocking:",
   "o": [
    "A lock on each resource group",
    "An Audit policy, viewed in Compliance",
    "One budget per cost center",
    "A policy with the Deny effect on the tag"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Group 12 ISO 27001 definitions and track their compliance as a whole:</b></p><p>An <b>initiative</b> (policy set) groups several policy definitions. You assign it once, and compliance is calculated for the whole set. Azure provides built-in initiatives for frameworks such as ISO 27001.</p><p>A management group organizes subscriptions. Azure Blueprints is being retired (replaced by Template Specs and deployment stacks). A tag doesn't group policies.</p><p><b>2. Evaluate only resources that support tags and locations — mode:</b></p><p>The <b>Indexed</b> mode evaluates only resource types that support tags and location. It's recommended for policies about tags or regions.</p><p>The <b>All</b> mode also evaluates resource groups, subscriptions, and all resource types. The other two values aren't Azure Policy modes (there are resource provider modes, such as Microsoft.KeyVault.Data, but not these).</p><p><b>3. Block Cosmos DB and AKS without affecting other services:</b></p><p><b>Not allowed resource types</b> blocks a list of types: here <code>Microsoft.DocumentDB/databaseAccounts</code> and <code>Microsoft.ContainerService/managedClusters</code>. Everything else stays allowed.</p><p><b>Allowed resource types</b> would do the opposite: allow <i>only</i> the listed types. The other two policies cover region and VM size.</p><p><b>4. No RG-Dev resource outside France Central, even if the template changes:</b></p><p>Azure Policy controls resource <b>properties</b> at deployment time, whatever method is used (portal, template, CLI). Allowed locations denies any region other than France Central.</p><p>Removing the deployment action would prevent any template deployment, without controlling the region. A lock prevents deletion. A tag is metadata with no effect.</p><p><b>5. Resources without CostCenter visible in a dashboard, with no blocking:</b></p><p>The <b>Audit</b> effect marks resources without the tag as non-compliant, without blocking anything. Azure Policy's <b>Compliance</b> page serves as the dashboard.</p><p>Deny would block deployments, which is ruled out.</p>",
 "portal": {
  "path": [
   "Policy",
   "Definitions"
  ],
  "title": "New initiative definition",
  "menu": [
   "Overview",
   "*Definitions",
   "Assignments"
  ],
  "rows": [
   [
    "Definition location",
    "MG-Corp"
   ],
   [
    "*Policy definitions",
    "12 ISO 27001 definitions"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Several policies managed together = initiative (policy set). Policy on tags or locations = Indexed mode. Everything else = All. Forbid a few types = “Not allowed”. Allow only a few types = “Allowed”. Azure Policy applies whatever the deployment tool (portal, template, CLI). See without blocking = Audit + Compliance page."
},
{
 "id": "D1-311",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You organize resources in resource groups. What happens, or what should you do, in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "storage2 is created untagged in a tagged group, with no policy — storage2's tags:",
   "o": [
    "Department=Finance",
    "Department=Finance only in the cost report",
    "Department=RG1",
    "None"
   ],
   "a": 3
  },
  {
   "l": "Rename RG-Old to RG-Finance:",
   "o": [
    "Change RG-Old's Name tag",
    "Use the portal's Rename option",
    "Create RG-Finance, move, delete RG-Old",
    "Use Set-AzResourceGroup -NewName RG-Finance"
   ],
   "a": 2
  },
  {
   "l": "Delete all test resources, alone in RG-Test, as fast as possible:",
   "o": [
    "Delete the resource group RG-Test",
    "Apply a ReadOnly lock to RG-Test",
    "Move the resources to another subscription",
    "Delete each resource one by one"
   ],
   "a": 0
  },
  {
   "l": "VM1 moves from RG1 to RG2 with its public IP, the network stays in RG1 — the public IP:",
   "o": [
    "Its address changes automatically during the move",
    "It stays in RG1 and can no longer be associated with VM1",
    "It must be deleted before the move",
    "It moves with VM1 and keeps its address"
   ],
   "a": 3
  },
  {
   "l": "storage1 (France Central) moves to RG2 (West Europe) — region after the move:",
   "o": [
    "France Central",
    "West Europe",
    "Both, through geo-replication",
    "You must choose the region during the move"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. storage2 is created untagged in a tagged group, with no policy — storage2's tags:</b></p><p>Without a policy, a resource <b>never</b> inherits its resource group's tags: storage2 has no tags.</p><p>A useful nuance: Cost Management offers a “Tag inheritance” option that applies group and subscription tags <b>in the cost data</b>, but it doesn't modify the resources. The expected answer is still “None”.</p><p><b>2. Rename RG-Old to RG-Finance:</b></p><p>A resource group <b>can't be renamed</b>. The method is to create the new group, <b>move</b> the resources into it (those that support it), then delete the old one.</p><p>The Name tag is just metadata. Set-AzResourceGroup has no -NewName parameter.</p><p><b>3. Delete all test resources, alone in RG-Test, as fast as possible:</b></p><p>Deleting a <b>resource group</b> deletes all the resources it contains, in a single operation. That's the point of grouping resources that share the same lifecycle.</p><p>Deleting one by one takes longer and risks missing dependencies. A lock would actually prevent the deletion.</p><p><b>4. VM1 moves from RG1 to RG2 with its public IP, the network stays in RG1 — the public IP:</b></p><p>A move between resource groups changes neither the region nor the configuration: the public IP address can be moved with the VM, and its address doesn't change. The virtual network can stay in RG1: a network interface can reference a virtual network in another resource group.</p><p><b>5. storage1 (France Central) moves to RG2 (West Europe) — region after the move:</b></p><p>Moving a resource to another resource group does <b>not</b> change its region: storage1 stays in France Central. A resource group's region only stores its <b>metadata</b>; a group can contain resources from any region.</p><p>To change region, you need another tool, such as Azure Resource Mover, or recreate the resource.</p>",
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
 "keep": "Tags are never inherited without a policy. A resource group can't be renamed: new group + move. Same lifecycle = same resource group: delete everything at once. A move changes neither the IP address, nor the region, nor the configuration. Moving between resource groups or subscriptions never changes the region."
},
{
 "id": "D1-312",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are industrializing governance for many projects. What should you use or recommend for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Reduce role assignments in a subscription near the limit:",
   "o": [
    "Create one custom role per user",
    "Assign roles on each resource rather than on the resource group",
    "Use tags instead of roles",
    "Assign roles to groups rather than to each user"
   ],
   "a": 3
  },
  {
   "l": "Replace Azure Blueprints (roles, policies, baseline network):",
   "o": [
    "A script run manually by each administrator",
    "Tags on the subscriptions",
    "Locks on the root group",
    "Azure Policy initiatives and templates"
   ],
   "a": 3
  },
  {
   "l": "Identical groups (tags, locks, roles) for 20 projects, repeatable:",
   "o": [
    "Create each group by hand in the portal",
    "A Bicep template at subscription scope",
    "Use Azure Advisor to generate the groups",
    "Copy the groups with the portal's Clone option"
   ],
   "a": 1
  },
  {
   "l": "Clearly separate billing and quotas for several environments:",
   "o": [
    "A single subscription with Env tags",
    "One subscription per environment, in management groups",
    "A single resource group for every environment",
    "One Microsoft Entra tenant per environment"
   ],
   "a": 1
  },
  {
   "l": "A team wants its own credit card, in the same tenant:",
   "o": [
    "A tenant can only have one subscription",
    "Sub2 must be merged into Sub1 for billing",
    "You must create a second Microsoft Entra tenant",
    "A subscription has its own billing"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Reduce role assignments in a subscription near the limit:</b></p><p>Assigning a role to a <b>group</b> creates a single assignment, whatever the number of members. It's also easier to manage: you just add or remove people from the group.</p><p>Assigning on each resource multiplies assignments. So does one role per user. Tags grant no permissions.</p><p><b>2. Replace Azure Blueprints (roles, policies, baseline network):</b></p><p>Azure Blueprints is being retired. Microsoft recommends combining <b>Azure Policy initiatives</b> (governance) with ARM or Bicep <b>templates</b> published as Template Specs, or <b>deployment stacks</b>, which can also protect resources with deny assignments.</p><p><b>3. Identical groups (tags, locks, roles) for 20 projects, repeatable:</b></p><p>A <b>Bicep</b> (or ARM) template at the <b>subscription</b> scope (<code>targetScope = 'subscription'</code>) can create resource groups, with their tags, locks, and role assignments, in a repeatable way.</p><p>The portal has no option to clone a resource group. Manual creation is slow and error-prone.</p><p><b>4. Clearly separate billing and quotas for several environments:</b></p><p>The <b>subscription</b> is a billing, quota, and access boundary. One subscription per environment, organized in <b>management groups</b>, lets you apply different policies and roles to each.</p><p>One tenant per environment would complicate identity management. Tags help split costs but separate neither quotas nor security boundaries.</p><p><b>5. A team wants its own credit card, in the same tenant:</b></p><p><b>Billing</b> and the <b>directory</b> are two separate things. Several subscriptions in the same tenant can be linked to different billing accounts or profiles, with different payment methods.</p><p>A tenant can contain many subscriptions, and each subscription trusts a single tenant. Subscriptions are not “merged”.</p>",
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
 "keep": "Assign to groups rather than people: fewer assignments, simpler management. Replacement for Blueprints = Policy initiatives + Template Specs or deployment stacks. Creating resource groups from a template = Bicep at the subscription scope. Subscription = billing, quota, and access boundary. One per environment, organized in management groups. Billing and directory are independent: several subscriptions in one tenant can be billed separately."
},
{
 "id": "D1-313",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are creating dynamic membership groups. What should you choose or do for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Members added and removed based on department = Sales — membership type:",
   "o": [
    "Dynamic User",
    "Synced from AD DS",
    "Dynamic Device",
    "Assigned"
   ],
   "a": 0
  },
  {
   "l": "Rule for the Sales or Marketing department:",
   "o": [
    "(user.department -in [\"Sales\",\"Marketing\"])",
    "(user.department -eq \"Sales\") -and (user.department -eq \"Marketing\")",
    "(user.department -match \"Sales\") -and (user.jobTitle -eq \"Marketing\")",
    "(user.department -contains \"Sales,Marketing\")"
   ],
   "a": 0
  },
  {
   "l": "Rule for all registered or joined Windows devices:",
   "o": [
    "(user.deviceOSType -eq \"Windows\")",
    "(device.deviceOSType -eq \"Windows\")",
    "(device.operatingSystem -contains \"Win\") -and (user.department -eq \"IT\")",
    "(device.displayName -eq \"Windows\")"
   ],
   "a": 1
  },
  {
   "l": "Dynamic option greyed out with Entra ID Free:",
   "o": [
    "Assign the Groups Administrator role to your account",
    "Acquire Microsoft Entra ID P1 licenses",
    "Create a Microsoft 365 group instead of a security group",
    "Enable self-service password reset"
   ],
   "a": 1
  },
  {
   "l": "Microsoft 365 license for all users in France, no manual management:",
   "o": [
    "A Microsoft 365 group with assigned membership",
    "A dynamic group (country France) with a license",
    "A France administrative unit with a license",
    "An Azure Policy on location"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Members added and removed based on department = Sales — membership type:</b></p><p>A group with <b>Dynamic User</b> membership evaluates a rule on user attributes, for example <code>(user.department -eq \"Sales\")</code>, and adds or removes members on its own. It requires a Microsoft Entra ID P1 license.</p><ul><li><b>Assigned</b>: members are added manually; nothing is automatic.</li><li><b>Dynamic Device</b>: the rule applies to device attributes, and the group can only contain devices.</li><li><b>Synced from AD DS</b> is not a membership type you choose in Entra: it is the source of a group created in on-premises Active Directory.</li></ul><p><b>2. Rule for the Sales or Marketing department:</b></p><p>The <b>-in</b> operator tests whether the value is part of a list: <code>user.department -in [\"Sales\",\"Marketing\"]</code>. You could also write two conditions joined with <b>-or</b>.</p><ul><li>With <b>-and</b>, the department would have to be Sales and Marketing at the same time: no user matches.</li><li><b>-contains</b> looks for the string “Sales,Marketing” in the attribute: no department contains it.</li><li>The last rule mixes department and job title, and requires both.</li></ul><p><b>3. Rule for all registered or joined Windows devices:</b></p><p>A device rule starts with <b>device.</b> and the operating system attribute is <b>deviceOSType</b>. The group must be a security group with <b>Dynamic Device</b> membership.</p><ul><li><code>user.deviceOSType</code> doesn't exist: user. attributes describe users.</li><li><code>device.displayName</code> is the device's name, not its OS.</li><li>A rule can't mix user and device attributes.</li></ul><p><b>4. Dynamic option greyed out with Entra ID Free:</b></p><p>Dynamic groups require <b>Microsoft Entra ID P1</b> (or P2, or a plan that includes it). Each user who is a member of a dynamic group must be covered by a license.</p><p>The group type (security or Microsoft 365) doesn't change this requirement. SSPR is unrelated. And an admin role doesn't replace a missing license.</p><p><b>5. Microsoft 365 license for all users in France, no manual management:</b></p><p>A <b>dynamic group</b> fills itself automatically based on the <b>country</b> attribute, and <b>group-based licensing</b> assigns the license to each member. Both features require Entra ID P1.</p><p>You can't assign a license to an administrative unit. Azure Policy doesn't manage licenses. An assigned group requires manual management.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "All groups"
  ],
  "title": "New group",
  "rows": [
   [
    "Group type",
    "Security"
   ],
   [
    "Group name",
    "Sales"
   ],
   [
    "*Membership type",
    "Dynamic User"
   ],
   [
    "*Dynamic user members",
    "(user.department -eq \"Sales\")"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Members added automatically based on an attribute = dynamic group (Entra ID P1 license). user.* attributes for users, device.* for devices. One value among several = -in [list] or conditions joined with -or. -and requires every condition to be true. Device group = Dynamic Device, rule with device.* (deviceOSType, deviceOwnership…). Dynamic groups, group-based licensing, Conditional Access = Microsoft Entra ID P1 minimum. Automatic license based on an attribute = dynamic group + license assigned to the group."
},
{
 "id": "D1-314",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You manage the lifecycle of groups and guests. What should you configure or do for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Each group deleted after 180 days unless an owner renews it:",
   "o": [
    "An Azure Policy with the Deny effect",
    "A group naming policy",
    "An access review on each group",
    "A group expiration policy"
   ],
   "a": 3
  },
  {
   "l": "Each partner's managers confirm or deny each access:",
   "o": [
    "A group expiration policy",
    "A budget alert",
    "A dynamic group",
    "An access review"
   ],
   "a": 3
  },
  {
   "l": "Automatically remove inactive guests from a finished project:",
   "o": [
    "An access review of guests, results applied",
    "A budget alert on guest accounts",
    "A Microsoft 365 group expiration policy",
    "A resource lock on guest accounts"
   ],
   "a": 0
  },
  {
   "l": "Invitation sent a week ago, status Pending acceptance:",
   "o": [
    "Assign them a Microsoft Entra ID P1 license",
    "Resend the invitation from the profile",
    "Delete and re-add the guest's domain",
    "Convert the guest account to a member"
   ],
   "a": 1
  },
  {
   "l": "A guest who accepted must manage RG-Projet VMs:",
   "o": [
    "Virtual Machine Contributor on RG-Project",
    "Convert the guest to a member before any assignment",
    "Assign the guest a Microsoft Entra ID P2 license",
    "Add fabrikam.com as a custom domain of the tenant"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Each group deleted after 180 days unless an owner renews it:</b></p><p>The <b>expiration policy</b> (Groups > Expiration) sets a lifetime for Microsoft 365 groups. Owners are notified by email before the deadline and can renew the group; an active group is even renewed automatically.</p><p>The naming policy enforces a prefix or suffix. Azure Policy doesn't manage Entra groups. An access review has members checked; it doesn't delete the group.</p><p><b>2. Each partner's managers confirm or deny each access:</b></p><p>An <b>access review</b> (Microsoft Entra ID Governance, P2 or Governance license) asks reviewers to confirm or deny each member's access, on a schedule. Denied access can be removed automatically.</p><p>Expiration deletes the whole group, not members one by one. A dynamic group depends on attributes, not human validation.</p><p><b>3. Automatically remove inactive guests from a finished project:</b></p><p><b>Access reviews</b> can target guests, ask for validation (or rely on inactivity), and <b>apply results automatically</b>: remove access, or block and then delete denied accounts.</p><p>Expiration concerns Microsoft 365 groups, not accounts. The other two options are unrelated.</p><p><b>4. Invitation sent a week ago, status Pending acceptance:</b></p><p>The profile of a guest whose invitation hasn't been accepted offers <b>Resend invitation</b>. You can also send them the redemption link directly.</p><p>The other actions don't let them accept the invitation.</p><p><b>5. A guest who accepted must manage RG-Projet VMs:</b></p><p>A guest user is a security principal like any other: you can <b>assign Azure roles</b> to them directly. Virtual Machine Contributor on RG-Project is enough.</p><p>There is no need to convert them to a member. Adding fabrikam.com as a custom domain is impossible (that domain belongs to another organization). No P2 license is required for an Azure role.</p>",
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
 "keep": "Deleting unused Microsoft 365 groups after N days = expiration policy; owners renew. Having humans validate access periodically = access review. Cleaning up inactive guests = access review with automatic application. Lost invitation = Resend invitation from the guest's profile. A guest can receive Azure roles like any user, with no conversion or license."
},
{
 "id": "D1-315",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You assign policies over existing resources. What happens in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Policy denying sizes above D4s_v5; VM1 is D8s_v5:",
   "o": [
    "VM1 is deleted at the next evaluation",
    "VM1 keeps running, flagged as non-compliant",
    "VM1 is stopped and deallocated automatically",
    "VM1 is resized to Standard_D4s_v5 by Azure"
   ],
   "a": 1
  },
  {
   "l": "Policy denying public IPs on RG1; creating a VM with “New public IP”:",
   "o": [
    "The VM is created with the public IP and flagged non-compliant",
    "The VM is created without a public IP address",
    "The policy doesn't apply to virtual machines",
    "Failure: creating the public IP is denied"
   ],
   "a": 3
  },
  {
   "l": "Deny on VM sizes in MG-Prod; existing Sub5 VMs with a denied size:",
   "o": [
    "They're stopped by the policy",
    "They're resized automatically",
    "The subscription move is denied by Azure Policy",
    "They keep running and become non-compliant"
   ],
   "a": 3
  },
  {
   "l": "Allowed locations = France Central; creating a resource group in West Europe:",
   "o": [
    "The creation is denied by the policy",
    "The resource group is created in France Central instead",
    "The creation succeeds and the group is flagged non-compliant",
    "The creation succeeds: the policy ignores groups"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Policy denying sizes above D4s_v5; VM1 is D8s_v5:</b></p><p>The <b>Deny</b> effect blocks <b>new</b> non-compliant creations and updates. It doesn't act on existing resources: VM1 keeps running and shows as <b>non-compliant</b> in the compliance dashboard.</p><p>Azure Policy never stops, resizes, or deletes an existing resource. To fix existing resources, you use a remediation task, and only with the Modify or DeployIfNotExists effects.</p><p><b>2. Policy denying public IPs on RG1; creating a VM with “New public IP”:</b></p><p>Creating a VM with a new public IP address also creates a <code>Microsoft.Network/publicIPAddresses</code> resource. That resource is denied, so the <b>deployment fails</b>.</p><p>Azure Policy doesn't change the deployment for you to remove the address. Deny doesn't create the resource. The rule targets the public IP address type, whatever the creation context.</p><p><b>3. Deny on VM sizes in MG-Prod; existing Sub5 VMs with a denied size:</b></p><p>After the move, Sub5 inherits MG-Prod's policies. Existing VMs are neither stopped nor modified: they show as <b>non-compliant</b>. New VMs of a forbidden size will be denied.</p><p>Azure Policy doesn't prevent moving a subscription.</p><p><b>4. Allowed locations = France Central; creating a resource group in West Europe:</b></p><p>The <b>Allowed locations</b> policy excludes resource groups: it applies only to resources. To control the region of resource groups, there is a separate policy: <b>Allowed locations for resource groups</b>.</p><p>Azure Policy never changes a resource's region for you.</p>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Limited VM size | Compliance",
  "menu": [
   "Overview",
   "*Compliance",
   "Assignments"
  ],
  "rows": [
   [
    "Compliance state",
    "Non-compliant"
   ],
   [
    "*VM1",
    "Non-compliant · Standard_D8s_v5"
   ]
  ]
 },
 "keep": "Deny protects the future, never the existing: the existing resource just becomes non-compliant. A Deny on one resource of the deployment makes the whole deployment fail. Changing scope stops nothing: existing resources become non-compliant, new ones are denied. “Allowed locations” ignores resource groups; there is a dedicated policy for them."
},
{
 "id": "D1-316",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You move resources and subscriptions. What happens, or what should you use, in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "During a move from RG1 to RG2:",
   "o": [
    "Nothing: both groups remain fully editable",
    "Both groups are locked for writes and deletes",
    "Only RG2 is read-only during the move",
    "The moved resources are stopped during the operation"
   ],
   "a": 1
  },
  {
   "l": "Find out whether moving 30 resources will succeed, without moving anything:",
   "o": [
    "A read-only lock on RG1 during the test",
    "RG1's activity log after the move",
    "The validateMoveResources operation",
    "An Azure Policy in Audit mode on RG1"
   ],
   "a": 2
  },
  {
   "l": "Full France Central outage (RG1's region); RG1 resources in West Europe:",
   "o": [
    "No possible impact on RG1 or its resources",
    "The West Europe resources stop",
    "Resources keep running, RG1 management may be unavailable",
    "RG1 is moved automatically to West Europe with its metadata"
   ],
   "a": 2
  },
  {
   "l": "Attach 3 subscriptions from another directory to contoso.com:",
   "o": [
    "Merge the two tenants from the portal",
    "Change the subscriptions' directory, then recreate roles and identities",
    "Add fabrikam.com as a management group",
    "Move the resources one by one to your subscriptions, with no other impact"
   ],
   "a": 1
  },
  {
   "l": "Sub1 moves to another tenant — User1's Contributor assignment:",
   "o": [
    "It is kept",
    "It becomes a Reader assignment",
    "It is transferred to User1's guest account",
    "It is deleted"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. During a move from RG1 to RG2:</b></p><p>During a move, the source and target groups are <b>locked</b>: you cannot create, modify, or delete resources in them until the operation completes (four hours at most).</p><p>The resources themselves <b>keep running</b>: a VM stays started, a web app stays online.</p><p><b>2. Find out whether moving 30 resources will succeed, without moving anything:</b></p><p>The <b>validateMoveResources</b> API tests the move: it checks that the resources support it and that dependencies are included, without changing anything. The portal also runs an automatic validation before any move.</p><p>The activity log shows what happened, not what will happen. A read-only lock would even make the move fail. Azure Policy doesn't test moves.</p><p><b>3. Full France Central outage (RG1's region); RG1 resources in West Europe:</b></p><p>A resource group's region is where its <b>metadata</b> is stored. If it's down, resources in other regions keep running, but management operations (deployment, changes) that depend on this metadata may fail.</p><p>That's why the resource group is often placed in the same region as its resources. Nothing is moved automatically.</p><p><b>4. Attach 3 subscriptions from another directory to contoso.com:</b></p><p>Each subscription trusts a single tenant. To attach it to contoso.com, you <b>change its directory</b> (Change directory). Role assignments, managed identities, and key vault access must then be recreated or updated.</p><p>You can't move resources directly between tenants. Tenants can't be merged. A management group isn't a domain.</p><p><b>5. Sub1 moves to another tenant — User1's Contributor assignment:</b></p><p>When a subscription changes tenant, <b>all Azure role assignments are deleted</b>, because the users, groups, and identities of the old directory don't exist in the new one. You must recreate them.</p><p>The same goes for managed identities, and key vaults must be updated with the new tenant ID. Nothing is converted or transferred automatically.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "Move resources",
  "menu": [
   "Resources",
   "Validate",
   "*Review"
  ],
  "rows": [
   [
    "*During the move",
    "RG1 and RG2 locked for writes"
   ],
   [
    "The resources",
    "Keep running"
   ]
  ]
 },
 "keep": "During a move, source and target are blocked for writes; the resources stay online. Testing a move without changing anything = validation (validateMoveResources), also run by the portal. A resource group's region = where its metadata lives; during an outage, management is affected, not resources in other regions. Attaching a subscription to another tenant = Change directory, then recreate access. Changing tenant = role assignments and managed identities lost; recreate them."
},
{
 "id": "D1-317",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You manage billing and purchase commitments. What happens, or what should you choose, in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Sub3 is transferred to another account admin, same tenant — role assignments:",
   "o": [
    "They are converted to Reader assignments",
    "They are all deleted",
    "Only Owner assignments are deleted",
    "They are kept"
   ],
   "a": 3
  },
  {
   "l": "View invoices and manage payment methods for an MCA — level:",
   "o": [
    "In Microsoft Entra roles only",
    "In a billing Azure Policy",
    "In a resource group's access control (IAM)",
    "In the billing account and profile roles"
   ],
   "a": 3
  },
  {
   "l": "€10,000 budget, €12,000 spent by month end — resources:",
   "o": [
    "They kept running normally",
    "New creations were blocked by the budget",
    "They switched to read-only at the threshold",
    "They were stopped at €10,000"
   ],
   "a": 0
  },
  {
   "l": "Reservation used by Sub1, Sub2, and Sub3 on one billing account — scope:",
   "o": [
    "Shared",
    "Root management group only",
    "Single subscription",
    "Single resource group"
   ],
   "a": 0
  },
  {
   "l": "Discount for an hourly commitment, not tied to a size or region:",
   "o": [
    "Azure Hybrid Benefit on the VMs",
    "A savings plan for compute",
    "Spot VMs for every workload",
    "A VM reservation per size"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Sub3 is transferred to another account admin, same tenant — role assignments:</b></p><p>A <b>billing ownership</b> transfer within the same tenant doesn't change the trusted directory: role assignments are <b>kept</b>.</p><p>It's <b>tenant</b> changes (changing directory) that delete assignments.</p><p><b>2. View invoices and manage payment methods for an MCA — level:</b></p><p>For a Microsoft Customer Agreement, billing rights (invoices, payment methods, creating subscriptions) are managed in <b>Cost Management + Billing</b>, with roles specific to the billing account, billing profile, and invoice section (Billing profile owner, contributor, reader…).</p><p>A resource group's access control doesn't cover billing. Azure Policy grants no rights.</p><p><b>3. €10,000 budget, €12,000 spent by month end — resources:</b></p><p>A budget <b>imposes no limit</b>: it monitors and sends alerts. Resources keep running and being billed. To act automatically, you need an action group linked to automation.</p><p>Only some credit-based subscriptions (such as trial offers or Visual Studio credits) have a spending limit that disables resources.</p><p><b>4. Reservation used by Sub1, Sub2, and Sub3 on one billing account — scope:</b></p><p>The <b>Shared</b> scope applies the discount to matching resources in all eligible subscriptions in the billing context. It's the most flexible.</p><p>Single subscription and single resource group would limit the discount to one target. There is also a “management group” scope, but not “root only”.</p><p><b>5. Discount for an hourly commitment, not tied to a size or region:</b></p><p>The <b>savings plan for compute</b> commits an hourly amount and applies the discount to several compute services, whatever the size and region. It suits workloads that change.</p><p>A <b>reservation</b> gives a larger discount, but for a specific size family and region. Spot VMs can be interrupted. Azure Hybrid Benefit depends on existing licenses.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub3"
  ],
  "title": "Transfer billing ownership",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "New owner",
    "admin2@contoso.com"
   ],
   [
    "*Role assignments",
    "Kept (same tenant)"
   ]
  ],
  "btn": "Send transfer request"
 },
 "keep": "Billing transfer in the same tenant = roles kept. Tenant change = roles deleted. MCA billing rights = billing account, billing profile, and invoice section roles. A budget never stops anything without an action group and automation. Reservation for several subscriptions on the same billing account = Shared scope. Compute workloads that change = savings plan. Fixed size and region = reservation (larger discount)."
},
{
 "id": "D1-318",
 "dom": 1,
 "type": "hot",
 "stem": "<p>A DeployIfNotExists or Modify policy must fix resources. What should you do or check in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The remediation task fails for lack of permissions:",
   "o": [
    "That you have the Reader role on the subscription",
    "That the targeted resource groups contain no resources",
    "That the assignment has a managed identity with the right role",
    "That the policy is part of an assigned initiative"
   ],
   "a": 2
  },
  {
   "l": "RG-DR must be allowed resources in France South, minimal effort:",
   "o": [
    "Add RG-DR to the assignment's exclusions",
    "Create a second assignment on RG-DR, in Audit",
    "Move RG-DR to another subscription",
    "Apply a read-only lock to RG-DR"
   ],
   "a": 0
  },
  {
   "l": "Immediate compliance state of existing resources:",
   "o": [
    "Start an on-demand compliance scan",
    "Restart the affected resources",
    "Delete and recreate the policy assignment",
    "Create a remediation task on the assignment"
   ],
   "a": 0
  },
  {
   "l": "Move a policy from Audit to blocking without a new definition:",
   "o": [
    "Add a ReadOnly lock to Sub1",
    "Create a remediation task on the assignment",
    "Parameterize the effect, then change it in the assignment",
    "Add the subscription to the assignment's exclusions"
   ],
   "a": 2
  },
  {
   "l": "Blocked users don't understand the policy's technical name:",
   "o": [
    "A non-compliance message",
    "An exclusion on the assignment",
    "A managed identity on the assignment",
    "The Audit effect instead of Deny"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. The remediation task fails for lack of permissions:</b></p><p>The <b>Modify</b> and <b>DeployIfNotExists</b> effects act on resources on your behalf. To do so, the assignment uses a <b>managed identity</b> (system-assigned or user-assigned) that must have a sufficient role, for example Tag Contributor or Contributor, on the scope.</p><p>The Reader role cannot remediate. A single policy works as well as an initiative. The content of the resource groups is irrelevant.</p><p><b>2. RG-DR must be allowed resources in France South, minimal effort:</b></p><p>A policy assignment can have <b>exclusions</b>: resource groups or resources within the scope that are not evaluated. Adding RG-DR to the exclusions is enough.</p><ul><li>A <b>second assignment</b> that allows France South doesn't cancel the first: both apply and the first still denies.</li><li><b>Moving RG-DR</b> to another subscription works, but takes far more effort.</li><li>A <b>lock</b> protects against changes; it doesn't affect policies.</li></ul><p>For a documented, time-limited waiver on a specific resource, there are also <b>exemptions</b>.</p><p><b>3. Immediate compliance state of existing resources:</b></p><p>An <b>on-demand scan</b> is started with <code>az policy state trigger-scan</code> or <code>Start-AzPolicyComplianceScan</code>. Otherwise, a full evaluation runs every 24 hours, and a new assignment is evaluated within minutes of its creation.</p><p>Recreating the assignment does no better. A remediation task modifies resources (Modify or DeployIfNotExists); it isn't for a simple Audit evaluation. Restarting resources has no effect.</p><p><b>4. Move a policy from Audit to blocking without a new definition:</b></p><p>Many built-in policies have an <b>effect</b> parameter (Audit, Deny, Disabled…). You choose the value in the <b>assignment</b>: you can start in Audit to measure the impact, then switch to Deny without touching the definition.</p><p>A lock blocks all changes, not just non-compliant ones. A remediation task blocks nothing. An exclusion would remove the subscription from evaluation.</p><p><b>5. Blocked users don't understand the policy's technical name:</b></p><p>An assignment's <b>non-compliance message</b> is shown in the deny error and in the compliance results. You use it to explain the rule, for example “Only the France Central region is allowed. Contact the Cloud team.”</p><p>An exclusion or the Audit effect would remove the block. The managed identity is for remediation.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy | Remediation",
  "menu": [
   "Basics",
   "Parameters",
   "*Remediation",
   "Non-compliance messages"
  ],
  "rows": [
   [
    "*Create a Managed Identity",
    "Checked"
   ],
   [
    "*Type of Managed Identity",
    "System assigned managed identity"
   ],
   [
    "Permissions",
    "Tag Contributor"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Modify and DeployIfNotExists need a managed identity with a sufficient role to remediate. Removing a scope from an assignment = exclusion. Tracked, temporary waiver = exemption. Evaluating compliance right now = on-demand scan (trigger-scan). Best practice: deploy in Audit, measure, then switch the effect parameter to Deny in the assignment. Explaining a denial to users = the assignment's non-compliance message."
},
{
 "id": "D1-319",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You manage policy rollout and tracking. What should you do or check for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Know whether a Deny policy would block existing resources, before enforcing it:",
   "o": [
    "Start a remediation task on the assignment",
    "Create a temporary ReadOnly lock on the subscription",
    "Assign with DoNotEnforce and check compliance",
    "Assign the policy in Deny and watch the errors"
   ],
   "a": 2
  },
  {
   "l": "Allow Bastion only in RG-Bastion, for 6 months, with justification:",
   "o": [
    "An exemption with an expiration date",
    "A ReadOnly lock on RG-Bastion",
    "A second assignment with the Audit effect",
    "A custom role for the engineer"
   ],
   "a": 0
  },
  {
   "l": "List of non-compliant resources and the reason:",
   "o": [
    "The subscription's metrics",
    "The activity log, Security category",
    "Azure Policy > Compliance",
    "Azure Advisor > Reliability"
   ],
   "a": 2
  },
  {
   "l": "Prove a policy has been met for three months:",
   "o": [
    "The Microsoft Entra ID sign-in logs",
    "The list of locks in the Sub1 subscription",
    "The Advisor recommendations report",
    "The assignment's compliance history"
   ],
   "a": 3
  },
  {
   "l": "Who assigned Owner to User11 on Sub1 last week:",
   "o": [
    "In Sub1's activity log",
    "In the Sub1 subscription's metrics",
    "In Azure Advisor, Security tab",
    "In the Microsoft Entra ID sign-in logs"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Know whether a Deny policy would block existing resources, before enforcing it:</b></p><p>With <b>Policy enforcement: Disabled</b> (enforcementMode = DoNotEnforce), the assignment calculates compliance without blocking. You see which resources would be non-compliant, then enable enforcement when you're ready.</p><p>You can also use an Audit effect parameter. Assigning directly in Deny could block deployments.</p><p><b>2. Allow Bastion only in RG-Bastion, for 6 months, with justification:</b></p><p>An <b>exemption</b> exempts a scope from an assignment, with a category (Waiver or Mitigated), a description, and an <b>expiration date</b>. It's better than an exclusion for a temporary, justified case.</p><p>A second assignment doesn't cancel the first. No role bypasses a Deny policy. A lock is unrelated.</p><p><b>3. List of non-compliant resources and the reason:</b></p><p>Azure Policy's <b>Compliance</b> page lists each assignment with its compliance percentage. Opening the assignment shows the non-compliant resources and, for each one, the <b>compliance details</b> (expected value and actual value).</p><p>The Audit effect also writes an event to the activity log, but it's less convenient. Advisor and metrics don't show policy compliance.</p><p><b>4. Prove a policy has been met for three months:</b></p><p>Azure Policy keeps the <b>compliance history</b> of each assignment (chart and states). You can also export states with Azure Resource Graph.</p><p>Sign-in logs, Advisor, and locks don't show policy compliance.</p><p><b>5. Who assigned Owner to User11 on Sub1 last week:</b></p><p>Azure role assignments are control plane operations: they are recorded in the <b>activity log</b> (Administrative category), with the author and date, for 90 days.</p><p>Sign-in logs show authentications. Advisor and metrics don't record operations.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy",
  "menu": [
   "*Basics",
   "Parameters"
  ],
  "rows": [
   [
    "*Policy enforcement",
    "Disabled (DoNotEnforce)"
   ],
   [
    "Effect",
    "Compliance calculated, nothing blocked"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Testing the impact of a Deny = Policy enforcement: Disabled, then read compliance. Targeted, tracked, temporary waiver = exemption with an expiration date. Non-compliant resources and reasons = Policy > Compliance > assignment > details. Proof of compliance over time = Azure Policy compliance history (or Resource Graph). Who did what on the control plane (including roles) = activity log, 90 days."
},
{
 "id": "D1-320",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You manage user account lifecycles. What happens, or what should you do, in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Delete Jean's synced account from the Entra portal:",
   "o": [
    "John is converted to a cloud-only account",
    "Can't delete here: he must be deleted in on-premises AD",
    "The deletion succeeds and John also disappears from on-prem AD",
    "The deletion succeeds, but John returns at the next sync"
   ],
   "a": 1
  },
  {
   "l": "Block sign-in without deleting the account and end sessions:",
   "o": [
    "Disable the account, then revoke sessions",
    "Remove them from every group in the tenant",
    "Remove all their Microsoft 365 licenses",
    "Reset their password only"
   ],
   "a": 0
  },
  {
   "l": "User7 deleted by mistake 10 days ago:",
   "o": [
    "Restore User7 from Deleted users (30 days)",
    "Recreate User7: it gets its groups and licenses back",
    "Restore User7 from the Azure activity log",
    "Nothing: deletion is immediate and permanent"
   ],
   "a": 0
  },
  {
   "l": "Microsoft 365 group Projet-X deleted 12 days ago:",
   "o": [
    "No, because a group can only be restored within 7 days",
    "Yes, but only if it was a security group",
    "Yes: a Microsoft 365 group stays deleted for 30 days",
    "No, groups are permanently deleted right away"
   ],
   "a": 2
  },
  {
   "l": "User deleted 40 days ago, to restore:",
   "o": [
    "Create a new account: the old one is gone after 30 days",
    "Restore him from the Deleted users page, as usual",
    "Restore him from an Azure Backup backup",
    "Restore him from the audit log"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Delete Jean's synced account from the Entra portal:</b></p><p>For a <b>synchronized</b> object, the source of authority is on-premises AD. The portal doesn't let you delete it or change its synchronized attributes: you must delete John in <b>on-premises AD</b>, and the deletion will be carried over at the next sync.</p><p>Entra never modifies on-premises AD this way, and doesn't convert the object to a cloud account.</p><p><b>2. Block sign-in without deleting the account and end sessions:</b></p><p>Turning off <b>Account enabled</b> (block sign-in) prevents any new authentication. <b>Revoke sessions</b> invalidates refresh tokens, which forces existing sessions to sign out.</p><p>Removing licenses or groups doesn't block sign-in. Resetting the password alone doesn't necessarily cut sessions already open.</p><p><b>3. User7 deleted by mistake 10 days ago:</b></p><p>A deleted user stays <b>30 days</b> in <b>Deleted users</b> (soft delete). During that time, you can restore it with its group memberships and licenses.</p><p>The Azure activity log tracks operations on resources; it restores nothing. A recreated user is a <b>new object</b> with a new ID: it gets back none of its groups, licenses, or roles.</p><p><b>4. Microsoft 365 group Projet-X deleted 12 days ago:</b></p><p>Deleted <b>Microsoft 365</b> groups stay in <b>Deleted groups</b> for <b>30 days</b> and can be restored with their members and content (mailbox, SharePoint site, team).</p><p>By contrast, a deleted <b>security group</b> is permanently deleted right away: a classic trap.</p><p><b>5. User deleted 40 days ago, to restore:</b></p><p>After <b>30 days</b>, a deleted user is <b>permanently</b> deleted. You must create a new account, which will have a new object ID: groups, licenses, and roles must be reassigned.</p><p>Azure Backup doesn't back up Entra objects. The audit log records the deletion but restores nothing.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "John"
  ],
  "title": "John | Overview",
  "menu": [
   "*Overview",
   "Properties"
  ],
  "rows": [
   [
    "*On-premises sync enabled",
    "Yes"
   ],
   [
    "Delete",
    "Unavailable (synchronized object)"
   ]
  ]
 },
 "keep": "Synchronized object = you manage (and delete) it in on-premises AD. Immediate departure = block sign-in + revoke sessions. Deleted user: 30 days to restore it with its groups and licenses. Deleted Microsoft 365 group: 30 days to restore it. Deleted security group: gone permanently, right away. Past 30 days, a user is lost: new account, new ID."
},
{
 "id": "D1-321",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are rolling out password reset and multifactor authentication. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "SSPR for a pilot group only — value:",
   "o": [
    "Guests only",
    "All",
    "None",
    "Selected"
   ],
   "a": 3
  },
  {
   "l": "Many users never registered a method:",
   "o": [
    "Require users to register when signing in",
    "Increase the number of required methods to 2",
    "Enable password writeback",
    "Notify users on password resets"
   ],
   "a": 0
  },
  {
   "l": "MFA for the Azure portal, not other apps:",
   "o": [
    "Conditional Access targeting Microsoft Azure Management",
    "Self-service password reset",
    "The tenant's security defaults",
    "An Azure Policy that targets administrator accounts"
   ],
   "a": 0
  },
  {
   "l": "Portal where users manage their password and methods:",
   "o": [
    "The Azure DevOps portal",
    "The My Account portal",
    "The Microsoft Entra admin center",
    "The Azure portal, Subscriptions page"
   ],
   "a": 1
  },
  {
   "l": "Department and job title synced from on-premises AD — where to change them:",
   "o": [
    "In the user's My Account portal",
    "In an Azure Policy on users",
    "In on-premises Active Directory (synced attribute)",
    "In the user's properties in Microsoft Entra ID"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. SSPR for a pilot group only — value:</b></p><p>The setting has three values: <b>None</b>, <b>Selected</b>, and <b>All</b>. <b>Selected</b> limits SSPR to the members of one chosen group, here Pilot.</p><p><b>None</b> turns SSPR off for users; <b>All</b> turns it on for everyone. “Guests only” does not exist.</p><p>Remember: administrators always have SSPR enabled, with a stricter policy (two methods), whatever this setting is.</p><p><b>2. Many users never registered a method:</b></p><p>In <b>Password reset > Registration</b>, the <b>“Require users to register when signing in”</b> option forces each user to record their methods at their next sign-in. A second setting sets the number of days before users are asked to reconfirm their information.</p><p>Notifications warn after a reset. Requiring 2 methods doesn't make users register. Writeback concerns on-premises Active Directory.</p><p><b>3. MFA for the Azure portal, not other apps:</b></p><p><b>Conditional Access</b> (Entra ID P1) applies conditions per application, user, location, or device. A policy that targets the Azure management apps and requires multifactor authentication meets the need.</p><p><b>Security defaults</b> apply to the whole tenant with no fine-tuning. Azure Policy governs resources. SSPR is for forgotten passwords.</p><p><b>4. Portal where users manage their password and methods:</b></p><p>The <b>My Account</b> portal lets each user manage their security info, password, and devices, and see their subscriptions. The My Apps portal (myapps) lists applications.</p><p>The Azure portal and the Entra admin center are administration tools.</p><p><b>5. Department and job title synced from on-premises AD — where to change them:</b></p><p>For a <b>synchronized</b> user, the source of authority is on-premises Active Directory: synchronized attributes (department, job title, name…) are changed <b>in AD DS</b>, then Microsoft Entra Connect carries the change to the cloud.</p><p>In the Entra portal, these fields are read-only for a synchronized account. Azure Policy doesn't manage users.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Password reset"
  ],
  "title": "Password reset | Properties",
  "menu": [
   "*Properties",
   "Authentication methods",
   "Registration"
  ],
  "rows": [
   [
    "*Self service password reset enabled",
    "Selected"
   ],
   [
    "*Select group",
    "Pilot"
   ]
  ],
  "btn": "Save"
 },
 "keep": "SSPR: None, Selected (one group only) or All. Administrators always have it, with a stricter policy. Forcing users to record their SSPR methods = Registration > Require users to register when signing in. MFA for a specific app = Conditional Access (P1). Security defaults = whole tenant, no tuning. User self-service = My Account (myaccount); apps = My Apps (myapps). Synchronized account: change attributes in on-premises AD; sync carries them over."
},
{
 "id": "D1-322",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You collaborate with external partners. What should you configure or assign for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Invite many guests in one operation:",
   "o": [
    "Bulk create users with a CSV file",
    "Bulk invite users with a CSV file",
    "Import users from a dynamic group",
    "Sync users with Microsoft Entra Connect"
   ],
   "a": 1
  },
  {
   "l": "Fabrikam employees (their own tenant), with no passwords to manage:",
   "o": [
    "Sync the Fabrikam tenant with Entra Connect",
    "Create member accounts in your tenant",
    "Invite them as B2B guests and assign roles",
    "Create a service principal per developer"
   ],
   "a": 2
  },
  {
   "l": "Invite only users from fabrikam.com and tailspin.com:",
   "o": [
    "Guest invite restrictions",
    "Guest user access restrictions",
    "Collaboration restrictions",
    "Cross-tenant access settings"
   ],
   "a": 2
  },
  {
   "l": "User3 must invite guests, least privilege — role:",
   "o": [
    "Groups Administrator",
    "Application Administrator",
    "User Administrator",
    "Guest Inviter"
   ],
   "a": 3
  },
  {
   "l": "A guest sees only their own account's properties — setting:",
   "o": [
    "Guest users have the same access as the tenant's members",
    "Guest user access is restricted to properties and memberships of their own directory objects",
    "Guest users have limited access to properties and memberships of directory objects",
    "No guest user can sign in to the tenant anymore"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Invite many guests in one operation:</b></p><p>The <b>Bulk invite</b> operation uses a downloadable CSV template: email address, redirect URL, whether to send the invitation message. It creates <b>guest</b> accounts.</p><ul><li><b>Bulk create</b> creates internal <b>member</b> accounts, not guests.</li><li>A <b>dynamic group</b> groups existing users; it creates none.</li><li><b>Microsoft Entra Connect</b> syncs accounts from your on-premises Active Directory, not external people.</li></ul><p><b>2. Fabrikam employees (their own tenant), with no passwords to manage:</b></p><p>With <b>Microsoft Entra B2B</b>, guests authenticate in their own tenant (Fabrikam): you don't manage their passwords. You then assign them Azure roles like any user.</p><p>Member accounts require managing passwords. Microsoft Entra Connect syncs an on-premises AD, not another tenant. Service principals are application identities.</p><p><b>3. Invite only users from fabrikam.com and tailspin.com:</b></p><p><b>Collaboration restrictions</b> let you allow invitations only to a list of domains (allowlist) or block them for some domains (denylist). Here, you choose “Allow invitations only to the specified domains”.</p><ul><li><b>Guest user access restrictions</b>: what guests can see in the directory.</li><li><b>Guest invite restrictions</b>: <i>who</i> in your organization can invite (everyone, members, some roles, no one), not <i>which domains</i>.</li><li><b>Cross-tenant access settings</b>: B2B rules with other Entra tenants (trusting MFA, etc.), broader than the requested domain list.</li></ul><p><b>4. User3 must invite guests, least privilege — role:</b></p><p>The <b>Guest Inviter</b> role allows just one thing: inviting guest users. It is the least privilege, and it is one of the roles recognized by this setting.</p><p>User Administrator can invite too, but can also create, modify, and delete users: too many rights. Groups Administrator and Application Administrator are not used to invite guests.</p><p><b>5. A guest sees only their own account's properties — setting:</b></p><p>The most restrictive setting, <b>“restricted to properties and memberships of their own directory objects”</b>, prevents guests from enumerating users, groups, and other directory objects.</p><ul><li>“Same access as members” is the most permissive.</li><li>“Limited access” (the default) prevents enumerating users, but still shows some information, such as the members of non-hidden groups.</li><li>“No guest can sign in” is not an option of this setting.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "All users"
  ],
  "title": "Bulk invite users",
  "menu": [
   "All users",
   "Deleted users",
   "*Bulk operations"
  ],
  "rows": [
   [
    "1. Download CSV template",
    "Invitation template"
   ],
   [
    "*2. Upload your CSV file",
    "partners.csv"
   ]
  ],
  "btn": "Submit"
 },
 "keep": "Many guests at once = Bulk invite (CSV). Bulk create = member accounts. Accounts from another organization, with no password to manage = B2B guests. Limiting invited domains = Collaboration restrictions (allowlist or denylist). Only the right to invite, nothing else = Guest Inviter. Three levels for guests: same access as members, limited access (default), their own objects only."
},
{
 "id": "D1-323",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You are configuring Microsoft Entra tenant settings. You need to indicate where each setting is.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Locations",
 "tgtHead": [
  "Setting",
  "Location"
 ],
 "srcs": [
  "Devices > Device settings",
  "External Identities > External collaboration settings",
  "Users > User settings",
  "Groups > General settings",
  "Role settings in PIM",
  "Enterprise applications > Consent and permissions",
  "Conditional Access"
 ],
 "tgts": [
  {
   "l": "No more than 5 joined devices per user",
   "a": 0
  },
  {
   "l": "Users can't create tenants or app registrations",
   "a": 2
  },
  {
   "l": "Users create their own security groups",
   "a": 3
  },
  {
   "l": "MFA required before activating an eligible role",
   "a": 4
  },
  {
   "l": "Users can no longer consent to third-party apps themselves",
   "a": 5
  },
  {
   "l": "Restrict access to the Microsoft Entra admin center",
   "a": 2
  }
 ],
 "expl": "<p><b>1. No more than 5 joined devices per user</b></p><p>The <b>Devices > Device settings</b> page contains “Maximum number of devices per user” (20 by default), along with “Users may join devices to Microsoft Entra” and “Users may register their devices”.</p><p>Azure Policy governs Azure resources, not Entra devices. User settings and user properties don't contain this limit.</p><p><b>2. Users can't create tenants or app registrations</b></p><p>The <b>User settings</b> page contains, among others, “Users can register applications”, “Restrict non-admin users from creating tenants”, and “Restrict access to Microsoft Entra admin center”.</p><p>Azure Policy and Azure access control apply to Azure resources. Device settings cover joining and registering devices.</p><p><b>3. Users create their own security groups</b></p><p>In <b>Groups > General settings</b>, the settings “Users can create security groups” and “Users can create Microsoft 365 groups” control self-service group management.</p><p>The other pages don't contain these settings. A subscription's access control manages Azure roles, not the creation of Entra groups.</p><p><b>4. MFA required before activating an eligible role</b></p><p>Each role managed by PIM has <b>role settings</b>: maximum activation duration, multifactor authentication requirement, justification, approval, notifications.</p><p>SSPR, Azure Policy, and device settings don't control role activation.</p><p><b>5. Users can no longer consent to third-party apps themselves</b></p><p>The <b>User consent for applications</b> setting is in <b>Enterprise applications > Consent and permissions</b>. You can turn it off, or limit it to verified publishers and low-risk permissions, and enable an admin consent request workflow.</p><p><b>6. Restrict access to the Microsoft Entra admin center</b></p><p>The user setting <b>“Restrict access to Microsoft Entra admin center”</b> prevents non-admins from browsing the directory in the admin center. It's not a strong security measure (Microsoft Graph and PowerShell still work), but it meets the need.</p><p>Blocking sign-in would prevent any access. The other two settings have no effect on browsing the directory.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Devices"
  ],
  "title": "Devices | Device settings",
  "menu": [
   "Overview",
   "All devices",
   "*Device settings"
  ],
  "rows": [
   [
    "Users may join devices to Microsoft Entra",
    "All"
   ],
   [
    "*Maximum number of devices per user",
    "5"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Device limit per user = Devices > Device settings (20 by default). App registrations and tenant creation by users = User settings. Allowing users to create groups = Groups > General settings. Activation rules (MFA, approval, duration) = Role settings in PIM. Blocking user consent = Enterprise applications > Consent and permissions. Hiding the directory from non-admins in the admin center = Restrict access to Microsoft Entra admin center."
},
{
 "id": "D1-324",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You assign Microsoft 365 licenses and manage users in bulk. What happens, or what should you do, in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Assigning a license to User5 fails — property to set:",
   "o": [
    "Department",
    "Job title",
    "Usage location",
    "Line manager"
   ],
   "a": 2
  },
  {
   "l": "License received on joining Compta, lost on leaving:",
   "o": [
    "Create a dynamic membership rule on Accounting",
    "Assign the License Administrator role",
    "Assign the license to the Accounting group",
    "Create an Azure Policy on licenses"
   ],
   "a": 2
  },
  {
   "l": "License assigned to GRP-Direction, which contains nested GRP-Assistants:",
   "o": [
    "Yes, but only if GRP-Assistants is dynamic",
    "No, unless GRP-Assistants is a Microsoft 365 group",
    "No: group licensing only covers direct members",
    "Yes, licenses are inherited by nested groups"
   ],
   "a": 2
  },
  {
   "l": "E3 license assigned to 120 members with 100 available:",
   "o": [
    "No member receives a license",
    "All 120 get a license and the extra is billed",
    "Azure automatically buys 20 more licenses",
    "100 get a license, 20 are in error"
   ],
   "a": 3
  },
  {
   "l": "Export all tenant users to CSV from the portal:",
   "o": [
    "Export the Microsoft Entra ID audit log",
    "Create a Cost Management export",
    "Download users (bulk)",
    "Export the tenant's ARM template"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Assigning a license to User5 fails — property to set:</b></p><p>Microsoft 365 needs to know <b>in which country</b> the license will be used, because some services are not available everywhere. Without a <b>usage location</b> (usageLocation), the license assignment fails.</p><p>Department, job title, and manager are descriptive attributes: they do not block the assignment.</p><p>Tip: with group-based licensing, a user without a usage location inherits the tenant's location, but the error is still a classic on the exam.</p><p><b>2. License received on joining Compta, lost on leaving:</b></p><p><b>Group-based licensing</b> lets you assign a license to a group: every member receives it, and loses it when leaving the group. This feature requires Microsoft Entra ID P1 (or a plan that includes it, such as Microsoft 365 E3).</p><ul><li>A <b>dynamic rule</b> manages who is a member of the group, not licenses.</li><li><b>Azure Policy</b> applies to Azure resources, not to users or licenses.</li><li>The <b>License Administrator</b> role gives someone the right to manage licenses; it automates nothing.</li></ul><p><b>3. License assigned to GRP-Direction, which contains nested GRP-Assistants:</b></p><p><b>Group-based licensing</b> doesn't support nesting: only the <b>direct members</b> of GRP-Management receive the license. To cover the assistants, you must also assign the license to GRP-Assistants.</p><p>The type or membership mode of GRP-Assistants changes nothing.</p><p><b>4. E3 license assigned to 120 members with 100 available:</b></p><p>Entra assigns licenses as long as some remain. The remaining users show as being in <b>error</b> (“not enough licenses”) in the group, and will be processed as soon as licenses are freed or purchased.</p><p>No license is bought or billed automatically.</p><p><b>5. Export all tenant users to CSV from the portal:</b></p><p>In <b>Users</b>, the bulk operations menu offers <b>Download users</b>, which generates a CSV file of users and their properties.</p><p>The audit log contains events, not the list of accounts. Cost exports concern billing. An Entra tenant can't be exported as an ARM template.</p>",
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
 "keep": "Can't assign a license? Check the user's usage location first. License assigned to a group: every member gets it, and loses it when leaving the group. Included in Entra ID P1. Group-based licensing: direct members only, no nesting. Not enough licenses: the first are served, the rest are in error; nothing is bought. List of users as CSV = Bulk operations > Download users."
},
{
 "id": "D1-325",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You apply least privilege in Sub1. Which role should you assign for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "User1 manages RG1 VMs, without managing networks or storage accounts:",
   "o": [
    "Contributor on RG1",
    "Virtual Machine Contributor on RG1",
    "Owner on RG1",
    "Virtual Machine Contributor on the subscription"
   ],
   "a": 1
  },
  {
   "l": "A user must manage other users' access on Sub1 — additional role:",
   "o": [
    "Global Administrator in Microsoft Entra ID",
    "User Access Administrator",
    "Owner on the resource group",
    "Reader"
   ],
   "a": 1
  },
  {
   "l": "Manage tags on all resources without changing the resources:",
   "o": [
    "Contributor",
    "Tag Contributor",
    "Reader",
    "Resource Policy Contributor"
   ],
   "a": 1
  },
  {
   "l": "Open support requests with no other right:",
   "o": [
    "Contributor",
    "Reader",
    "Support Request Contributor",
    "Helpdesk Administrator (Entra)"
   ],
   "a": 2
  },
  {
   "l": "A consultant sees costs and budgets without seeing resources:",
   "o": [
    "Billing Reader",
    "Cost Management Reader",
    "Reader",
    "Cost Management Contributor"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. User1 manages RG1 VMs, without managing networks or storage accounts:</b></p><p>The built-in <b>Virtual Machine Contributor</b> role lets you create, start, stop, resize, and delete VMs. It grants <b>no</b> right to modify virtual networks or storage accounts (it can only “join” a network interface to an existing subnet), and it does not let you manage access.</p><p>Assigned on <b>RG1</b>, it applies to that resource group only: that is least privilege.</p><ul><li><b>Contributor on RG1</b>: manages <i>all</i> resources in RG1, including networks and storage. Too broad.</li><li><b>Owner on RG1</b>: like Contributor, plus access management. Even broader.</li><li><b>Virtual Machine Contributor on the subscription</b>: right role, wrong scope (every VM in the subscription).</li></ul><p><b>2. A user must manage other users' access on Sub1 — additional role:</b></p><p><b>Contributor</b> manages all resources, but cannot assign roles: it lacks the <code>Microsoft.Authorization/roleAssignments/write</code> actions. <b>User Access Administrator</b> adds exactly access management, and nothing else.</p><ul><li><b>Owner</b> would also work (resources + access), but replacing or combining it with Contributor gives more than the stated need.</li><li><b>Global Administrator</b> is a Microsoft Entra role, not an Azure role on a subscription.</li><li><b>Reader</b> only allows reading.</li></ul><p>The newer <b>Role Based Access Control Administrator</b> role can also assign roles, with optional conditions; it would be a correct answer if offered.</p><p><b>3. Manage tags on all resources without changing the resources:</b></p><p><b>Tag Contributor</b> lets you manage resource tags without access to the resources themselves.</p><p>Contributor can change everything. Reader cannot change anything, not even tags. Resource Policy Contributor manages Azure Policy, not tags.</p><p><b>4. Open support requests with no other right:</b></p><p><b>Support Request Contributor</b> lets you create and manage support requests, and read the subscription. It's the least privilege.</p><p>Reader doesn't allow opening a request. Contributor grants far too many rights. <b>Helpdesk Administrator</b> is a Microsoft Entra role that resets passwords: a classic false friend.</p><p><b>5. A consultant sees costs and budgets without seeing resources:</b></p><p><b>Cost Management Reader</b> lets you view costs, budgets, and cost recommendations, without access to the resources themselves.</p><ul><li><b>Reader</b> also gives read access to resources.</li><li><b>Cost Management Contributor</b> also lets you create and edit budgets and exports.</li><li><b>Billing Reader</b> gives access to invoices, not to cost analysis or budgets.</li></ul>",
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
 "keep": "Least privilege = the most specific role (here Virtual Machine Contributor) at the smallest scope that covers the need (here RG1). Contributor manages everything except access. Adding only access management = User Access Administrator (or Role Based Access Control Administrator). Managing tags without touching resources = Tag Contributor. Opening Azure tickets = Support Request Contributor (Azure role). Don't confuse with Helpdesk Administrator (Entra). View costs and budgets = Cost Management Reader; create them = Cost Management Contributor; invoices = Billing Reader."
},
{
 "id": "D1-326",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Several teams need read access or limited management. Which role should you assign for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Read Entra ID audit logs and configuration, changing nothing — Entra role:",
   "o": [
    "Global Reader",
    "User",
    "Reader (Azure role) on the subscription",
    "Security Administrator"
   ],
   "a": 0
  },
  {
   "l": "Manage the management group hierarchy, not resources — role on the root:",
   "o": [
    "Management Group Contributor",
    "Contributor on each subscription",
    "User Access Administrator",
    "Management Group Reader"
   ],
   "a": 0
  },
  {
   "l": "Read Sub1 Azure Monitor logs and metrics with no resource access:",
   "o": [
    "Monitoring Reader",
    "Monitoring Contributor",
    "Log Analytics Contributor",
    "Reader"
   ],
   "a": 0
  },
  {
   "l": "View Sub1 role assignments without changing anything:",
   "o": [
    "Owner",
    "Contributor",
    "Reader",
    "User Access Administrator"
   ],
   "a": 2
  },
  {
   "l": "Read a group's resources and create support tickets:",
   "o": [
    "Reader only on the subscription",
    "Contributor on the production subscription",
    "Reader and Support Request Contributor",
    "Owner on the subscription"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Read Entra ID audit logs and configuration, changing nothing — Entra role:</b></p><p><b>Global Reader</b> can read everything a Global Administrator can read, including audit and sign-in logs, without being able to change anything.</p><p>The Azure Reader role applies to Azure resources, not to the directory. Security Administrator can change security settings. A plain user has no access to audit logs.</p><p><b>2. Manage the management group hierarchy, not resources — role on the root:</b></p><p><b>Management Group Contributor</b> lets you create, move, and delete management groups, and move subscriptions between them, with no rights on the subscriptions' resources.</p><p>Contributor on the root would grant access to every resource. Management Group Reader only allows reading. User Access Administrator manages roles, not the hierarchy.</p><p><b>3. Read Sub1 Azure Monitor logs and metrics with no resource access:</b></p><p><b>Monitoring Reader</b> reads all monitoring data: metrics, logs, alert settings.</p><p>Monitoring Contributor can also change monitoring settings. Reader also grants read access to resources. Log Analytics Contributor manages workspaces.</p><p><b>4. View Sub1 role assignments without changing anything:</b></p><p><b>Reader</b> includes <code>*/read</code>, so <code>Microsoft.Authorization/roleAssignments/read</code>: they see role assignments in the IAM tab, without being able to create any.</p><p>The other roles allow changing resources or access.</p><p><b>5. Read a group's resources and create support tickets:</b></p><p><b>Reader</b> lets you see everything without changing anything. <b>Support Request Contributor</b> adds creating support requests. Roles add up.</p><p>Contributor and Owner allow changes. Reader alone doesn't allow opening a support request.</p>",
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
 "keep": "Read everything in Entra (including logs), change nothing = Global Reader. Managing the hierarchy without touching resources = Management Group Contributor. Reading metrics and logs = Monitoring Reader; changing monitoring = Monitoring Contributor. Reader also sees role assignments (roleAssignments/read). Combine narrow roles rather than one broad role: rights add up."
},
{
 "id": "D1-327",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Built-in roles don't match some needs. What should you do for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Create everything in Sub-Dev except VPN gateways:",
   "o": [
    "Reader role on Sub-Dev",
    "Contributor and a policy denying gateways",
    "Network Contributor role on Sub-Dev",
    "Owner role on Sub-Dev and a ReadOnly lock"
   ],
   "a": 1
  },
  {
   "l": "Create resource groups and manage only their resources:",
   "o": [
    "Assign him Reader on Sub1",
    "Assign him a custom role with Microsoft.Resources/subscriptions/resourceGroups/write on Sub1; he becomes Owner of the groups he creates",
    "Assign him a custom role on Sub1 that allows creating resource groups, then assign him Contributor on each new group",
    "Assign him Contributor on Sub1"
   ],
   "a": 2
  },
  {
   "l": "Read and restart VMs in Sub1's current and future groups, nothing else:",
   "o": [
    "Virtual Machine Contributor on Sub1",
    "A custom role (read, restart) on Sub1",
    "A custom role assigned on each resource group",
    "Contributor on the Sub1 subscription"
   ],
   "a": 1
  },
  {
   "l": "Copy Virtual Machine Contributor without delete — fastest method:",
   "o": [
    "Clone the built-in role, then remove the permission",
    "Edit the built-in role's definition directly",
    "Create an empty role and add permissions one by one",
    "Assign the built-in role with a deny condition"
   ],
   "a": 0
  },
  {
   "l": "Owner assigned by mistake to 400 people on production:",
   "o": [
    "Disable each account in the group",
    "Apply a ReadOnly lock to the subscription",
    "Delete the role assignment (IAM)",
    "Delete the group from Microsoft Entra ID"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Create everything in Sub-Dev except VPN gateways:</b></p><p><b>Contributor</b> lets you create resource groups and resources. The built-in <b>Not allowed resource types</b> policy (Deny effect) with <code>Microsoft.Network/virtualNetworkGateways</code> blocks gateways for everyone in the subscription.</p><p>Reader doesn't allow creating. A ReadOnly lock would block any creation. Network Contributor allows only network resources, and gateways in particular.</p><p><b>2. Create resource groups and manage only their resources:</b></p><p>A role on Sub1 that only allows <b>creating resource groups</b> gives no rights over existing resources. You then assign him <b>Contributor on each new group</b>.</p><ul><li>Contributor on Sub1 would give access to all existing groups.</li><li>The creator of a resource group does <b>not</b> automatically become Owner: Azure assigns no role implicitly.</li><li>Reader doesn't allow creating.</li></ul><p><b>3. Read and restart VMs in Sub1's current and future groups, nothing else:</b></p><p>A custom role limited to reading and restarting VMs, assigned on <b>Sub1</b>, covers all resource groups, including future ones.</p><p>Virtual Machine Contributor also allows creating, modifying, and deleting VMs. Assigning per group would miss new groups. Contributor gives all rights.</p><p><b>4. Copy Virtual Machine Contributor without delete — fastest method:</b></p><p>In <b>Access control (IAM) > Roles</b>, you can <b>clone</b> an existing role: the new role starts with its permissions, and you add <code>Microsoft.Compute/virtualMachines/delete</code> to the excluded permissions (NotActions).</p><p><b>Built-in</b> roles can't be edited. Starting from an empty role works but takes much longer. Assignment conditions apply only to some storage data actions and don't block deleting a VM.</p><p><b>5. Owner assigned by mistake to 400 people on production:</b></p><p>Deleting the <b>assignment</b> removes access for the whole group in one operation, without touching the group itself, which may be used elsewhere.</p><p>Deleting the group or the accounts would cause other damage. A ReadOnly lock would also block legitimate administrators, and wouldn't remove the right to assign roles.</p>",
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
 "keep": "RBAC says who can act; Azure Policy forbids a resource type for everyone. Creating a resource grants no implicit role: rights must be assigned afterward. Least privilege = minimal custom role, assigned at the scope that also covers the future. Role close to a built-in one = Clone, then adjust. Built-in roles can never be edited. Removing access given to a group = delete the assignment, not the group."
},
{
 "id": "D1-328",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You organize subscriptions into management groups. What should you do for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The policy must also cover subscriptions added later to MG-Prod:",
   "o": [
    "To each resource group in MG-Prod",
    "To the Microsoft Entra tenant",
    "To each subscription in MG-Prod",
    "To the MG-Prod management group"
   ],
   "a": 3
  },
  {
   "l": "Same policies for Dev and Test, without touching production:",
   "o": [
    "A resource group shared by both",
    "A Non-Prod tag on each subscription",
    "A separate Microsoft Entra tenant",
    "A Non-Prod management group"
   ],
   "a": 3
  },
  {
   "l": "Save a new definition assignable to all MG-Prod subscriptions:",
   "o": [
    "In the Microsoft Entra tenant",
    "In the MG-Prod management group",
    "In the Sub1 subscription",
    "In a resource group of Sub1"
   ],
   "a": 1
  },
  {
   "l": "Policy for all subscriptions, future ones included, minimal effort:",
   "o": [
    "A scheduled script that checks the subscriptions nightly",
    "Assign the definition to the root management group",
    "Apply a ReadOnly lock to each subscription",
    "Create the definition in each subscription, 30 times"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. The policy must also cover subscriptions added later to MG-Prod:</b></p><p>A policy assigned to the <b>MG-Prod management group</b> applies to all its subscriptions, current and <b>future</b>, through inheritance.</p><p>Assigning it subscription by subscription would miss new subscriptions. Resource groups are even lower. You don't assign Azure Policy to the Microsoft Entra tenant: the highest scope is the root management group.</p><p><b>2. Same policies for Dev and Test, without touching production:</b></p><p>A <b>management group</b> groups subscriptions so that policies and roles are inherited. Non-Prod will contain Dev and Test, and the production subscriptions will stay elsewhere.</p><p>A resource group lives in a single subscription. A separate tenant is far too heavy. Policies don't apply “by subscription tag”.</p><p><b>3. Save a new definition assignable to all MG-Prod subscriptions:</b></p><p>The <b>definition location</b> determines where it can be assigned: at that scope and below. Saved in <b>MG-Prod</b>, it can be assigned to MG-Prod and all its subscriptions.</p><p>Saved in Sub1, it could be used only in Sub1. You can't save a definition in a resource group or in the Entra tenant.</p><p><b>4. Policy for all subscriptions, future ones included, minimal effort:</b></p><p>A definition saved in a parent <b>management group</b>, and assigned to that group, applies to all current and future subscriptions in the hierarchy.</p><p>30 manual assignments would miss new subscriptions. A script redoes what Azure Policy already does. A lock doesn't replace a policy.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy",
  "menu": [
   "*Basics",
   "Parameters"
  ],
  "rows": [
   [
    "*Scope",
    "MG-Prod"
   ],
   [
    "Policy definition",
    "Storage accounts should disable public network access"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Covering future subscriptions = assign to the parent management group. Same policies for several subscriptions = management group. A definition can be assigned at its location and below: place it high enough. Covering all subscriptions, including future ones = definition and assignment on a parent management group."
},
{
 "id": "D1-329",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You administer the organization's subscriptions and hierarchy. What should you do or answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Management group levels possible below the root:",
   "o": [
    "6 levels",
    "3 levels",
    "No limit",
    "10 levels"
   ],
   "a": 0
  },
  {
   "l": "New subscriptions placed automatically under MG-Sandbox:",
   "o": [
    "An Azure Policy on the root group",
    "A tag on the MG-Sandbox group",
    "The default management group",
    "A lock on the root management group"
   ],
   "a": 2
  },
  {
   "l": "Move Sub-Finance under MG-Finance — minimum permissions:",
   "o": [
    "Global Administrator in Microsoft Entra ID only",
    "Contributor on Sub-Finance only",
    "Owner of Sub-Finance and Contributor on MG-Finance",
    "Reader on Sub-Finance and on MG-Finance"
   ],
   "a": 2
  },
  {
   "l": "20 DSv5 vCPU limit reached in France Central:",
   "o": [
    "Request a quota increase (Usage + quotas)",
    "Buy a reservation for the VM family",
    "Create a new resource group for the VMs",
    "Remove the tags from existing VMs"
   ],
   "a": 0
  },
  {
   "l": "MissingSubscriptionRegistration error for Container Apps:",
   "o": [
    "Remove the locks from the Sub2 subscription",
    "Request a quota increase in Sub2",
    "Assign the Reader role on Sub2",
    "Register the Microsoft.App provider"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Management group levels possible below the root:</b></p><p>A management group hierarchy can be <b>6 levels</b> deep, not counting the root level or the subscription level.</p><p>Other limits to know: 10,000 management groups per directory, and each management group or subscription has only <b>one parent</b>.</p><p><b>2. New subscriptions placed automatically under MG-Sandbox:</b></p><p>The <b>hierarchy settings</b> let you choose the <b>default management group</b> where new subscriptions are placed. You can also require permission there to create management groups.</p><p><b>3. Move Sub-Finance under MG-Finance — minimum permissions:</b></p><p>Moving a subscription requires rights on both sides: on the <b>subscription</b> (Owner) and on the <b>target management group</b> (Management Group Contributor or Owner), as well as on the current parent if it isn't the root.</p><p>Reader and Contributor are not enough. Global Administrator is an Entra role: it must first elevate its access to act on management groups.</p><p><b>4. 20 DSv5 vCPU limit reached in France Central:</b></p><p>vCPU quotas are set <b>per subscription, per region, and per VM family</b>. You request an increase from <b>Subscription > Usage + quotas</b> (or through a support request). Many requests are approved automatically.</p><p>Changing resource groups doesn't change the subscription's quota. A reservation is a discount, not a quota. Tags have no effect.</p><p><b>5. MissingSubscriptionRegistration error for Container Apps:</b></p><p>Each Azure service depends on a <b>resource provider</b> (Microsoft.Compute, Microsoft.Storage, Microsoft.App…). If it isn't registered in the subscription, the MissingSubscriptionRegistration error appears. You register it in <b>Subscription > Resource providers</b> or with <code>az provider register --namespace Microsoft.App</code>.</p><p>A quota, a lock, or a Reader role have nothing to do with this error.</p>",
 "portal": {
  "path": [
   "Management groups"
  ],
  "title": "Management groups",
  "menu": [
   "*Management groups",
   "Settings"
  ],
  "rows": [
   [
    "Tenant root group",
    "Level 0"
   ],
   [
    "MG-Corp › MG-Prod › …",
    "*Up to 6 levels"
   ],
   [
    "Subscriptions",
    "Under the last level"
   ]
  ]
 },
 "keep": "Management groups: 6 levels under the root, one parent, 10,000 groups maximum. Destination of new subscriptions = default management group. Moving a subscription: Owner of the subscription and write rights on the target management group (and the current parent). vCPU quota = per subscription, region, and family; request an increase in Usage + quotas. MissingSubscriptionRegistration = register the resource provider in the subscription."
},
{
 "id": "D1-330",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are answering audit requests about access and costs. What should you use for each request?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "All of a user's assignments on RG2, inherited ones included:",
   "o": [
    "RG2 > Activity log",
    "RG2 > Access control (IAM) > Check access",
    "Azure Advisor > Security",
    "Microsoft Entra ID > Roles and administrators"
   ],
   "a": 1
  },
  {
   "l": "List empty resource groups across all subscriptions in one query:",
   "o": [
    "Cost Management, by tag",
    "Azure Policy in Deny mode",
    "Microsoft Entra ID, audit log",
    "Azure Resource Graph Explorer"
   ],
   "a": 3
  },
  {
   "l": "Total cost of project Orion, tagged across three subscriptions:",
   "o": [
    "Create a resource group shared by all three",
    "Manually add up the budgets of the three subscriptions",
    "Cost analysis at group level, filtered on Project=Orion",
    "Check Azure Advisor, Cost tab"
   ],
   "a": 2
  },
  {
   "l": "Delegate assigning Storage Blob Data Reader to managed identities only:",
   "o": [
    "Storage Account Contributor on storage1",
    "User Access Administrator on the subscription",
    "RBAC Administrator with a condition on roles",
    "Owner on storage1, with no condition"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. All of a user's assignments on RG2, inherited ones included:</b></p><p><b>Check access</b> in the IAM tab shows the effective assignments of a user, group, or identity at this scope, including inherited ones and those received through groups.</p><p>“Roles and administrators” lists <b>Microsoft Entra</b> roles, not Azure roles. The activity log shows operations. Advisor gives recommendations.</p><p><b>2. List empty resource groups across all subscriptions in one query:</b></p><p><b>Resource Graph Explorer</b> runs KQL queries on the inventory of resources and resource groups across all your subscriptions. A join between the <code>resourcecontainers</code> and <code>resources</code> tables finds the empty groups.</p><p>Cost Management only sees what costs money. Entra manages identities. Azure Policy isn't a query tool.</p><p><b>3. Total cost of project Orion, tagged across three subscriptions:</b></p><p><b>Cost analysis</b> can be opened at a scope that covers several subscriptions (management group, billing account or profile) and filtered on a <b>tag</b>.</p><p>Budgets are thresholds, not spending. A resource group can't span several subscriptions. Advisor doesn't show spending.</p><p><b>4. Delegate assigning Storage Blob Data Reader to managed identities only:</b></p><p>The <b>Role Based Access Control Administrator</b> role lets you assign roles, and accepts delegation <b>conditions</b>: which roles can be assigned, and to which principal types.</p><p>Owner and User Access Administrator would allow assigning any role. Storage Account Contributor doesn't allow assigning roles.</p>",
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
 "keep": "Someone's effective rights at a scope = IAM > Check access. Inventory query across all subscriptions = Resource Graph (resources, resourcecontainers tables). Multi-subscription cost = cost analysis at a broad scope + tag filter. Delegating role assignment with limits = Role Based Access Control Administrator + conditions."
},
{
 "id": "D1-331",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You are delegating administration and preparing the tenant. What should you do or answer for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Admin2 resets passwords for Lyon users only:",
   "o": [
    "A Lyon administrative unit, Admin2 Helpdesk Administrator on it",
    "Admin2 Helpdesk Administrator for the whole tenant",
    "A Lyon security group with Admin2 as owner",
    "A Lyon management group, with Admin2 as Contributor on it"
   ],
   "a": 0
  },
  {
   "l": "Custom role assignable only in Sub1 and Sub2 — property:",
   "o": [
    "Actions",
    "DataActions",
    "AssignableScopes",
    "NotActions"
   ],
   "a": 2
  },
  {
   "l": "Role with DataActions and MG-Data in AssignableScopes:",
   "o": [
    "Success, but the role can only be assigned to groups",
    "Failure: DataActions are reserved for built-in roles",
    "The creation succeeds with no restriction",
    "Failure: DataActions not allowed on a management group"
   ],
   "a": 3
  },
  {
   "l": "Custom domain still Unverified — DNS record:",
   "o": [
    "A PTR record for contoso.com",
    "An A record to an Azure IP address",
    "A TXT or MX record with Microsoft's value",
    "A CNAME to contoso.onmicrosoft.com"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Admin2 resets passwords for Lyon users only:</b></p><p>An <b>administrative unit</b> restricts the scope of a Microsoft Entra role to a set of users, groups, or devices. The <b>Helpdesk Administrator</b> role assigned on the Lyon unit lets Admin2 reset the passwords of Lyon users only.</p><ul><li>The same role for the <b>whole tenant</b> grants too much.</li><li>A <b>group owner</b> manages the group's members, not their passwords.</li><li>A <b>management group</b> organizes Azure subscriptions; it doesn't manage Entra users, and Contributor is an Azure role, not an Entra role.</li></ul><p><b>2. Custom role assignable only in Sub1 and Sub2 — property:</b></p><p><b>AssignableScopes</b> sets where the role can be assigned: here <code>/subscriptions/&lt;Sub1 id&gt;</code> and <code>/subscriptions/&lt;Sub2 id&gt;</code>. You can also use a management group or a resource group.</p><ul><li><b>Actions</b>: allowed control plane operations (resource management).</li><li><b>NotActions</b>: operations removed from Actions. It is not a deny: another role can still grant them.</li><li><b>DataActions</b>: operations on data, for example reading a blob.</li></ul><p><b>3. Role with DataActions and MG-Data in AssignableScopes:</b></p><p>A custom role can have a management group in its AssignableScopes, but then <b>without DataActions</b>. Here you must use subscriptions or resource groups as assignable scopes.</p><p>Another limit: only one management group per custom role. DataActions are perfectly possible in custom roles outside this case.</p><p><b>4. Custom domain still Unverified — DNS record:</b></p><p>Microsoft provides a unique value like <code>MS=ms12345678</code> to publish in a <b>TXT</b> record (or, failing that, an <b>MX</b> record). Its presence proves that you control the domain.</p><p>A, CNAME, and PTR records are not used for this verification.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Administrative units",
   "Lyon"
  ],
  "title": "Lyon | Roles and administrators",
  "menu": [
   "Overview",
   "Users",
   "Groups",
   "*Roles and administrators"
  ],
  "rows": [
   [
    "*Role",
    "Helpdesk Administrator"
   ],
   [
    "Assignments",
    "Admin2"
   ],
   [
    "Scope",
    "Administrative unit: Lyon"
   ]
  ],
  "btn": "+ Add assignments"
 },
 "keep": "Restricting an Entra role to part of the users (branch, department) = administrative unit. AssignableScopes = where the role can be assigned. Actions/NotActions = control plane. DataActions = data. Custom role with DataActions: no management group as an assignable scope. Verifying a domain = TXT (or MX) record at the public DNS."
}
);
