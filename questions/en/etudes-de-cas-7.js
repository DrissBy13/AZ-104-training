/* Case studies (batch 7: C013 and C014, identities and governance) */
AZ.cases.push(
{
 "id": "C013",
 "title": "Fourth Coffee",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Fourth Coffee is a coffee roaster with headquarters in Paris and a sales office in Lyon. Its Microsoft Entra tenant, fourthcoffee.com, is synced with on-premises Active Directory. The company wants to delegate administration, harden privileged access, and open its environment to a partner.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Identity</b>: Microsoft Entra Connect, password hash sync, password writeback disabled. All users have a Microsoft Entra ID P1 license. Self-service password reset (SSPR) is enabled for <b>Selected: GRP-Pilote</b>.</p><p><b>Administrators</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Microsoft Entra role</th><th>Note</th></tr><tr><td>Ana</td><td>Global Administrator</td><td>—</td></tr><tr><td>Ben</td><td>User Administrator</td><td>—</td></tr><tr><td>Chloé</td><td>Helpdesk Administrator</td><td>Assigned at tenant scope</td></tr><tr><td>Dan</td><td>None</td><td>Owner of GRP-Ventes</td></tr></table></div><p><b>Groups</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Group</th><th>Type</th><th>Membership</th><th>Note</th></tr><tr><td>GRP-Ventes</td><td>Security</td><td>Assigned, 40 members</td><td>Microsoft 365 E3 license assigned to the group</td></tr><tr><td>GRP-Lyon</td><td>Microsoft 365</td><td>Dynamic: user.city -eq \"Lyon\"</td><td>—</td></tr><tr><td>GRP-Admins</td><td>Security</td><td>Assigned</td><td>Microsoft Entra roles can be assigned: No</td></tr></table></div><p><b>Microsoft 365 E3 licenses</b>: 200 purchased, 195 assigned.</p><p><b>External collaboration</b>: only users assigned to specific admin roles can invite guests; invitations are allowed to any domain.</p>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>Chloé must only be able to reset the passwords of Lyon sales staff.</li><li>Administrators must activate their roles on demand, for a limited time, with Ana's approval.</li><li>All users must be able to reset their password, and the new password must work on domain computers.</li><li>Only tailspintoys.com users may be invited. Dan must be able to invite guests, with the least privileges possible.</li><li>GRP-Admins members must get the Helpdesk Administrator role through a single assignment.</li><li>30 Tailspin consultants must be invited in one operation and manage the VMs in the RG-Demo resource group.</li><li>A security group must automatically contain Sales department users located in Lyon.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C013-1",
   "dom": 1,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current configuration, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "Dan can add members to GRP-Ventes.",
     "a": 0
    },
    {
     "l": "Ben can reset Ana's password.",
     "a": 1
    },
    {
     "l": "A user whose city becomes Lyon joins GRP-Lyon with no action.",
     "a": 0
    },
    {
     "l": "You can assign the Helpdesk Administrator role to GRP-Admins.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Dan: Yes.</b> An assigned group's owner can manage its members with no admin role.</li><li><b>Ben: No.</b> A User Administrator can't reset a Global Administrator's password; a Global Administrator or Privileged Authentication Administrator is needed.</li><li><b>GRP-Lyon: Yes.</b> The dynamic rule (P1 license) is re-evaluated when the city attribute changes, including when it's synced from on-premises AD.</li><li><b>GRP-Admins: No.</b> Only a group created with “Microsoft Entra roles can be assigned” can receive a role, and that option can't be changed after creation.</li></ul>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Groups",
     "GRP-Admins"
    ],
    "title": "GRP-Admins | Properties",
    "menu": [
     "Overview",
     "*Properties",
     "Members",
     "Owners"
    ],
    "rows": [
     [
      "*Microsoft Entra roles can be assigned to the group",
      "No (can't be changed)"
     ]
    ]
   },
   "keep": "Role-assignable group: at creation only. A Global Administrator's password: Global or Privileged Authentication Administrator."
  },
  {
   "id": "C013-2",
   "dom": 1,
   "type": "hot",
   "stem": "<p>You need to meet requirements 2, 3, and 5.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "Requirement 2, license needed:",
     "o": [
      "Microsoft Entra ID P1, already in place",
      "Microsoft Entra ID P2 (or ID Governance)",
      "Microsoft 365 E3, already in place",
      "No additional license"
     ],
     "a": 1
    },
    {
     "l": "Requirement 3, in Microsoft Entra Connect:",
     "o": [
      "Enable password writeback",
      "Enable pass-through authentication",
      "Enable group writeback",
      "Enable device writeback"
     ],
     "a": 0
    },
    {
     "l": "Requirement 3, SSPR enabled for:",
     "o": [
      "None",
      "Selected",
      "All"
     ],
     "a": 2
    },
    {
     "l": "Requirement 5:",
     "o": [
      "Create a new role-assignable group",
      "Make GRP-Admins role-assignable",
      "Assign the role to each GRP-Admins member",
      "Put GRP-Admins in an administrative unit"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Requirement 2:</b> on-demand, time-bound, approved activation is Privileged Identity Management, which requires Microsoft Entra ID P2 (or Microsoft Entra ID Governance).</li><li><b>Requirement 3:</b> for a password changed in the cloud to apply to on-premises AD, enable <b>password writeback</b> in Entra Connect, and set SSPR to <b>All</b>.</li><li><b>Requirement 5:</b> GRP-Admins can't become role-assignable after creation: create a new group with that option, then assign it the role. Assigning the role to each member doesn't meet “a single assignment”.</li></ul>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Password reset"
    ],
    "title": "Password reset | Properties",
    "menu": [
     "*Properties",
     "Authentication methods",
     "On-premises integration"
    ],
    "rows": [
     [
      "*Self service password reset enabled",
      "All"
     ],
     [
      "Password writeback",
      "Enabled"
     ]
    ]
   },
   "keep": "PIM = P2. Password to on-premises AD = writeback. Role-assignable: new group."
  },
  {
   "id": "C013-3",
   "dom": 1,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirements 1 and 4. What should you configure for each goal?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Goal",
    "Configuration"
   ],
   "srcs": [
    "An administrative unit containing Lyon sales staff",
    "The Helpdesk Administrator role scoped to the unit, replacing the tenant-wide role",
    "The User Administrator role at tenant scope",
    "Allow invitations only to tailspintoys.com",
    "The Guest Inviter role for Dan",
    "The User Administrator role for Dan",
    "A Conditional Access policy for guests"
   ],
   "tgts": [
    {
     "l": "Group the accounts Chloé manages",
     "a": 0
    },
    {
     "l": "Limit Chloé to those accounts",
     "a": 1
    },
    {
     "l": "Invite only Tailspin users",
     "a": 3
    },
    {
     "l": "Let Dan invite",
     "a": 4
    }
   ],
   "expl": "<ul><li><b>Administrative unit:</b> it scopes a set of users; a role assigned on the unit applies only to them. The tenant-wide assignment must also be removed, or Chloé keeps her rights everywhere.</li><li><b>Tailspin:</b> collaboration restrictions (external collaboration settings) allow invitations to specific domains only.</li><li><b>Dan:</b> invitations are limited to admin roles; Guest Inviter is the least privileged role that allows it. User Administrator would give far more.</li></ul>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Administrative units",
     "AU-Lyon-Ventes"
    ],
    "title": "AU-Lyon-Ventes | Roles and administrators",
    "menu": [
     "Users",
     "*Roles and administrators"
    ],
    "rows": [
     [
      "*Helpdesk Administrator",
      "Chloé"
     ]
    ]
   },
   "keep": "Role limited to some accounts = administrative unit. Invite with least rights = Guest Inviter."
  },
  {
   "id": "C013-4",
   "dom": 1,
   "type": "order",
   "stem": "<p>You need to meet requirement 6, after requirement 4 is in place.</p><p>Which <b>quatre</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Download the bulk invite CSV template",
    "Fill in the email addresses and invitation messages",
    "Upload the file in Bulk invite users",
    "Add the guests to a group, then assign the group Virtual Machine Contributor on RG-Demo",
    "Create the accounts with Bulk create users",
    "Assign Virtual Machine Contributor to each guest one by one"
   ],
   "seq": [
    0,
    1,
    2,
    3
   ],
   "expl": "<p>The consultants have their own Tailspin accounts: <b>invite</b> them (B2B), don't create member accounts. Bulk invite starts from the CSV template downloaded from the portal, filled in, then uploaded. Once guests exist, a group allows a single Azure role assignment on RG-Demo, easier to maintain than 30 assignments.</p>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Users",
     "Bulk operations"
    ],
    "title": "Bulk invite users",
    "menu": [
     "*Bulk invite"
    ],
    "rows": [
     [
      "Template",
      "Download"
     ],
     [
      "*CSV file",
      "consultants-tailspin.csv"
     ]
    ],
    "btn": "Submit"
   },
   "keep": "Accounts from another tenant = B2B invitation (bulk via CSV), role assigned to a group."
  },
  {
   "id": "C013-5",
   "dom": 1,
   "type": "cmd",
   "stem": "<p>You need to meet requirement 7 with Microsoft Graph PowerShell. How should you complete the command?</p>",
   "rows": [
    {
     "l": "-GroupTypes",
     "o": [
      "\"Unified\"",
      "\"DynamicMembership\"",
      "\"Assigned\""
     ],
     "a": 1
    },
    {
     "l": "opérateur",
     "o": [
      "-or",
      "-and",
      "-any",
      "-contains"
     ],
     "a": 1
    },
    {
     "l": "-MembershipRuleProcessingState",
     "o": [
      "\"Paused\"",
      "\"Enabled\"",
      "\"On\""
     ],
     "a": 2
    }
   ],
   "tpl": "New-MgGroup -DisplayName \"GRP-Lyon-Ventes\" -MailEnabled:$false -MailNickname \"lyonventes\" -SecurityEnabled -GroupTypes {0} -MembershipRule '(user.department -eq \"Ventes\") {1} (user.city -eq \"Lyon\")' -MembershipRuleProcessingState {2}",
   "expl": "<ul><li><b>DynamicMembership:</b> this type makes membership dynamic. Unified would create a Microsoft 365 group, and Assigned isn't a GroupTypes value.</li><li><b>-and:</b> both conditions must be true (Sales and Lyon); -or would add all sales staff and everyone in Lyon.</li><li><b>On:</b> the rule is processed; Paused suspends it. Enabled isn't a valid value.</li></ul>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Groups",
     "GRP-Lyon-Ventes"
    ],
    "title": "GRP-Lyon-Ventes | Dynamic membership rules",
    "menu": [
     "*Dynamic membership rules"
    ],
    "rows": [
     [
      "*Rule",
      "(user.department -eq \"Ventes\") -and (user.city -eq \"Lyon\")"
     ]
    ]
   },
   "keep": "Dynamic group: GroupTypes DynamicMembership, rule, state On."
  },
  {
   "id": "C013-6",
   "dom": 1,
   "type": "single",
   "stem": "<p>HR adds 10 new sales staff, with a usage location set, to GRP-Ventes. What happens to their licenses?</p>",
   "opts": [
    "5 get an E3 license, 5 are in an error state",
    "All 10 get an E3 license as overage",
    "None gets a license while some are missing",
    "The 5 oldest members' licenses are removed"
   ],
   "ans": 0,
   "expl": "<p>200 − 195 = 5 E3 licenses remain. Group-based licensing assigns them while they last; the other members go into an error state (not enough licenses) until licenses are bought or freed. Azure never removes a license from one user to give it to another.</p>",
   "portal": {
    "path": [
     "Microsoft Entra ID",
     "Groups",
     "GRP-Ventes"
    ],
    "title": "GRP-Ventes | Licenses",
    "menu": [
     "*Licenses"
    ],
    "rows": [
     [
      "Microsoft 365 E3",
      "Assigned"
     ],
     [
      "*Users with errors",
      "5 · Not enough licenses"
     ]
    ]
   },
   "keep": "Group licenses: assigned while stock lasts, the rest in error."
  },
  {
   "id": "C013-7",
   "dom": 1,
   "type": "hotspot",
   "stem": "<p>You need to limit invitations to tailspintoys.com for requirement 4. Which Microsoft Entra admin center item should you select? To answer, select the appropriate menu item.</p>",
   "ans": "External collaboration settings",
   "win": {
    "title": "Microsoft Entra admin center",
    "nav": [
     {
      "g": "Identity",
      "items": [
       "Users",
       "Groups",
       "Devices",
       "Applications",
       "Roles & admins",
       "Administrative units"
      ]
     },
     {
      "g": "External Identities",
      "items": [
       "All identities",
       "External collaboration settings",
       "Cross-tenant access settings"
      ]
     },
     {
      "g": "Protection",
      "items": [
       "Conditional Access",
       "Authentication methods",
       "Password reset"
      ]
     }
    ]
   },
   "expl": "<p><b>External collaboration settings</b> hold the collaboration restrictions (allow or deny domains), who can invite, and guest access restrictions. Cross-tenant access settings control trust and B2B access with other Entra tenants, not the list of invitable domains.</p>",
   "portal": {
    "path": [
     "External Identities",
     "External collaboration settings"
    ],
    "title": "External collaboration settings",
    "menu": [
     "*External collaboration settings"
    ],
    "rows": [
     [
      "*Collaboration restrictions",
      "Allow only: tailspintoys.com"
     ],
     [
      "Guest invite settings",
      "Specific admin roles"
     ]
    ],
    "btn": "Save"
   },
   "keep": "Invitable domains: collaboration restrictions, in external collaboration settings."
  }
 ]
},
{
 "id": "C014",
 "title": "Tailspin Toys",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Tailspin Toys makes toys and manages several Azure subscriptions. Management wants consistent governance: delegated roles, cost tags, spending control, and tracked exceptions.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Management groups</b>: Root → MG-Tailspin → MG-Prod (Sub-Prod1, Sub-Prod2) and MG-NonProd (Sub-Dev). New subscriptions are placed under the root.</p><p><b>Azure Policy assignments</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Assignment</th><th>Definition</th><th>Scope</th><th>Effect</th><th>Identity</th></tr><tr><td>PA1</td><td>Allowed locations: France Central, West Europe</td><td>MG-Tailspin</td><td>Deny</td><td>—</td></tr><tr><td>PA2</td><td>Require the CostCenter tag on resource groups</td><td>MG-Prod</td><td>Deny</td><td>—</td></tr><tr><td>PA3</td><td>Inherit the CostCenter tag from the resource group</td><td>MG-Prod</td><td>Modify</td><td>System-assigned, no role</td></tr></table></div><p><b>Azure roles</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>Group</th><th>Role</th><th>Scope</th></tr><tr><td>Ops</td><td>Contributor</td><td>MG-Prod</td></tr><tr><td>Finance</td><td>Reader</td><td>Sub-Prod1</td></tr><tr><td>Dev</td><td>Owner</td><td>Sub-Dev</td></tr></table></div><p>Custom role <b>VM Operator</b>: Actions Microsoft.Compute/virtualMachines/read, start/action, restart/action, deallocate/action; AssignableScopes: /subscriptions/Sub-Prod1.</p><p><b>Locks</b>: RG-Core (Sub-Prod1) has a Delete lock; VNet-Core, in RG-Core, has a Read-only lock.</p>"
  },
  {
   "t": "Requirements",
   "h": "<ol><li>Ops must use VM Operator in Sub-Prod1, Sub-Prod2, and any future MG-Prod subscription, with a single assignment.</li><li>Finance must see costs and budgets for all production subscriptions, without seeing resources.</li><li>Existing MG-Prod resources must receive their group's CostCenter tag.</li><li>New subscriptions must land under MG-NonProd automatically.</li><li>Developers must be notified when Sub-Dev's forecasted cost exceeds 90% of €5,000, and dev VMs must then stop automatically.</li><li>No public IP address may be created in Sub-Dev, except in RG-Bastion for 6 months, with a tracked justification.</li><li>A subnet must be added to VNet-Core; the lock must protect VNet-Core the rest of the time.</li></ol>"
  }
 ],
 "questions": [
  {
   "id": "C014-1",
   "dom": 1,
   "type": "yngrid",
   "stem": "<p>You're reviewing the current configuration, before any change.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "An Ops member can delete RG-Core.",
     "a": 1
    },
    {
     "l": "A Finance member can see Sub-Prod1's VMs.",
     "a": 0
    },
    {
     "l": "A resource group without the CostCenter tag can be created in Sub-Prod2.",
     "a": 1
    },
    {
     "l": "A subscription created today is subject to PA1.",
     "a": 1
    }
   ],
   "expl": "<ul><li><b>Delete RG-Core: No.</b> The Delete lock blocks deletion for everyone, owners included.</li><li><b>Finance: Yes.</b> Reader on Sub-Prod1 shows all its resources, which requirement 2 wants to avoid.</li><li><b>Untagged group: No.</b> PA2 (Deny) is assigned to MG-Prod, which Sub-Prod2 inherits.</li><li><b>New subscription: No.</b> It lands under the root, outside MG-Tailspin, where PA1 is assigned.</li></ul>",
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
      "New subscriptions"
     ],
     [
      "*MG-Tailspin",
      "PA1"
     ],
     [
      "MG-Prod",
      "PA2, PA3"
     ]
    ]
   },
   "keep": "Policies and roles inherit downward; a subscription under the root inherits only from the root."
  },
  {
   "id": "C014-2",
   "dom": 1,
   "type": "hot",
   "stem": "<p>You need to meet requirements 1, 2, and 4.</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "rows": [
    {
     "l": "Requirement 1, VM Operator AssignableScopes:",
     "o": [
      "Add the MG-Prod management group",
      "Add /subscriptions/Sub-Prod2",
      "Replace with “/”",
      "No change"
     ],
     "a": 0
    },
    {
     "l": "Requirement 1, role assignment to Ops:",
     "o": [
      "On MG-Prod",
      "On each subscription",
      "On the root group",
      "On RG-Core"
     ],
     "a": 0
    },
    {
     "l": "Requirement 2, for Finance:",
     "o": [
      "Cost Management Reader on MG-Prod, and remove Reader",
      "Reader on MG-Prod",
      "Cost Management Contributor on Sub-Prod1",
      "Billing Reader on Sub-Prod1"
     ],
     "a": 0
    },
    {
     "l": "Requirement 4:",
     "o": [
      "Set MG-NonProd as the default management group",
      "Create a policy that moves subscriptions",
      "Move each subscription by hand",
      "Assign PA1 to the root group"
     ],
     "a": 0
    }
   ],
   "expl": "<ul><li><b>Requirement 1:</b> a custom role without DataActions can have a management group in its AssignableScopes. Add MG-Prod, then assign the role once on MG-Prod: current and future subscriptions inherit it.</li><li><b>Requirement 2:</b> Cost Management Reader on MG-Prod gives costs and budgets for all production subscriptions, without resources; remove Reader on Sub-Prod1, which shows them.</li><li><b>Requirement 4:</b> the default management group (hierarchy settings) automatically receives new subscriptions.</li></ul>",
   "portal": {
    "path": [
     "Management groups",
     "Settings"
    ],
    "title": "Hierarchy settings",
    "menu": [
     "*Settings"
    ],
    "rows": [
     [
      "*Default management group",
      "MG-NonProd"
     ],
     [
      "Permission to create groups",
      "Require authorization"
     ]
    ]
   },
   "keep": "Custom role on a management group: AssignableScopes, then assign on the group."
  },
  {
   "id": "C014-3",
   "dom": 1,
   "type": "order",
   "stem": "<p>You need to meet requirement 3.</p><p>Which <b>trois</b> actions should you perform in sequence? To answer, move the appropriate actions to the answer area and arrange them in the correct order.</p>",
   "acts": [
    "Assign PA3's identity, on MG-Prod, the role listed in the definition's roleDefinitionIds",
    "Create a remediation task for PA3",
    "Check in Compliance that MG-Prod resources are compliant",
    "Change PA3's effect to Deny",
    "Delete PA3 and recreate it without an identity",
    "Tag each resource by hand"
   ],
   "seq": [
    0,
    1,
    2
   ],
   "expl": "<p>A Modify policy only applies on its own to creates and updates. Existing resources need a <b>remediation task</b>, which acts with the assignment's managed identity. That identity has no role yet: first give it, at the assignment scope, the role declared in roleDefinitionIds, or the task fails. Finally, check compliance.</p>",
   "portal": {
    "path": [
     "Policy",
     "Remediation"
    ],
    "title": "New remediation task",
    "menu": [
     "Compliance",
     "*Remediation"
    ],
    "rows": [
     [
      "*Assignment",
      "PA3"
     ],
     [
      "Scope",
      "MG-Prod"
     ],
     [
      "Identity",
      "System-assigned · role assigned"
     ]
    ],
    "btn": "Remediate"
   },
   "keep": "Existing + Modify or DeployIfNotExists = remediation task, with an identity holding the required role."
  },
  {
   "id": "C014-4",
   "dom": 1,
   "type": "dragdrop",
   "stem": "<p>You need to meet requirements 5, 6, and 7. What should you configure for each goal?</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
   "srcLabel": "Configurations",
   "tgtHead": [
    "Goal",
    "Configuration"
   ],
   "srcs": [
    "A Sub-Dev budget with a 90% forecasted-cost alert",
    "An action group that runs a shutdown runbook",
    "A Deny policy on public IP addresses, assigned to Sub-Dev",
    "An RG-Bastion exemption, with an expiration date",
    "An RG-Bastion exclusion in the assignment",
    "Delete VNet-Core's lock, add the subnet, recreate the lock",
    "Give Ops Network Contributor on VNet-Core"
   ],
   "tgts": [
    {
     "l": "Warn before overspending",
     "a": 0
    },
    {
     "l": "Stop dev VMs automatically",
     "a": 1
    },
    {
     "l": "Block public IPs in Sub-Dev",
     "a": 2
    },
    {
     "l": "Allow RG-Bastion for 6 months with a justification",
     "a": 3
    },
    {
     "l": "Add the subnet to VNet-Core",
     "a": 5
    }
   ],
   "expl": "<ul><li><b>Budget:</b> an alert on <b>forecasted</b> cost warns before the amount is reached. A budget stops nothing on its own: an <b>action group</b> running a runbook is needed.</li><li><b>Public IPs:</b> a Deny policy blocks creation. For RG-Bastion, an <b>exemption</b> carries a category, a justification, and an expiration date; an exclusion has no duration and no justification trail.</li><li><b>VNet-Core:</b> a Read-only lock blocks adding a subnet for everyone, whatever the role. Remove it for the change, then recreate it.</li></ul>",
   "portal": {
    "path": [
     "Policy",
     "Exemptions"
    ],
    "title": "ex-bastion | Exemption",
    "menu": [
     "Assignments",
     "*Exemptions"
    ],
    "rows": [
     [
      "*Scope",
      "Sub-Dev/RG-Bastion"
     ],
     [
      "Category",
      "Waiver"
     ],
     [
      "Expiration",
      "In 6 months"
     ]
    ]
   },
   "keep": "Budget = alert, action group = action. Tracked, dated exception = exemption. Read-only lock: remove it for the change."
  },
  {
   "id": "C014-5",
   "dom": 1,
   "type": "cmd",
   "stem": "<p>You need to meet requirement 6 with Azure CLI. The RG-Bastion exception is accepted with no compensating control. How should you complete the commands?</p>",
   "rows": [
    {
     "l": "--scope",
     "o": [
      "/providers/Microsoft.Management/managementGroups/MG-NonProd",
      "/subscriptions/$subDevId/resourceGroups/RG-Bastion",
      "/subscriptions/$subDevId"
     ],
     "a": 2
    },
    {
     "l": "--enforcement-mode",
     "o": [
      "DoNotEnforce",
      "Default"
     ],
     "a": 1
    },
    {
     "l": "--exemption-category",
     "o": [
      "Mitigated",
      "Waiver"
     ],
     "a": 1
    }
   ],
   "tpl": "az policy assignment create --name deny-pip --policy $denyPipId --scope {0} --enforcement-mode {1} && az policy exemption create --name ex-bastion --policy-assignment $assignmentId --scope $rgBastionId --exemption-category {2} --expires-on 2027-05-01",
   "expl": "<ul><li><b>/subscriptions/Sub-Dev:</b> the requirement targets Sub-Dev only; MG-NonProd would also cover future subscriptions landing under that group (requirement 4).</li><li><b>Default:</b> the Deny effect is enforced. DoNotEnforce would only evaluate compliance.</li><li><b>Waiver:</b> the Waiver category matches an exception accepted with no compensating control; Mitigated means the goal is met another way.</li></ul>",
   "portal": {
    "path": [
     "Policy",
     "Assignments"
    ],
    "title": "deny-pip | Assignment",
    "menu": [
     "*Assignments",
     "Exemptions"
    ],
    "rows": [
     [
      "*Scope",
      "Sub-Dev"
     ],
     [
      "Policy enforcement",
      "Enabled"
     ]
    ]
   },
   "keep": "Exemption: Waiver or Mitigated, with an expiration date."
  },
  {
   "id": "C014-6",
   "dom": 1,
   "type": "single",
   "stem": "<p>For requirement 7, an Ops member tries to delete VNet-Core's lock and gets an authorization error. What should you assign them, with the least privileges?</p>",
   "opts": [
    "A custom role with locks/*",
    "Network Contributor on RG-Core",
    "Contributor on RG-Core, in addition to MG-Prod",
    "Resource Policy Contributor on Sub-Prod1"
   ],
   "ans": 0,
   "expl": "<p>Managing locks requires the Microsoft.Authorization/locks/* actions, which only Owner, User Access Administrator, and custom roles include. Contributor and Network Contributor exclude Microsoft.Authorization (write) through their NotActions; a second Contributor changes nothing. A custom role limited to locks gives the least privileges.</p>",
   "portal": {
    "path": [
     "Subscriptions",
     "Sub-Prod1",
     "Access control (IAM)"
    ],
    "title": "Lock Operator custom role",
    "menu": [
     "*Roles"
    ],
    "rows": [
     [
      "*Actions",
      "Microsoft.Authorization/locks/*"
     ],
     [
      "AssignableScopes",
      "/subscriptions/Sub-Prod1"
     ]
    ]
   },
   "keep": "Locks: locks/* (Owner, User Access Administrator, or a custom role)."
  },
  {
   "id": "C014-7",
   "dom": 1,
   "type": "hotspot",
   "stem": "<p>You need to start requirement 3's remediation. Which Azure Policy menu item should you select? To answer, select the appropriate menu item.</p>",
   "ans": "Remediation",
   "win": {
    "title": "Policy",
    "nav": [
     {
      "g": "Authoring",
      "items": [
       "Definitions",
       "Assignments",
       "Exemptions"
      ]
     },
     {
      "g": "Analysis",
      "items": [
       "Overview",
       "Compliance",
       "Remediation",
       "Events"
      ]
     },
     {
      "g": "Related",
      "items": [
       "Blueprints",
       "Resource Graph"
      ]
     }
    ]
   },
   "expl": "<p>The <b>Remediation</b> page lists DeployIfNotExists and Modify assignments with non-compliant resources and lets you create a remediation task. Compliance shows resource state, Exemptions the exceptions.</p>",
   "portal": {
    "path": [
     "Policy",
     "Remediation"
    ],
    "title": "Remediation",
    "menu": [
     "*Remediation"
    ],
    "rows": [
     [
      "*PA3",
      "128 resources to remediate"
     ]
    ],
    "btn": "Remediate"
   },
   "keep": "Remediation task: Policy > Remediation."
  }
 ]
}
);
