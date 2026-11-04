/* Domain 1: identities and governance (batch E : D1-161 to D1-230) */
AZ.questions.push(
{
 "id": "D1-161",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to create a user with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Command group",
   "o": [
    "ad",
    "account",
    "identity"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--user-principal-name",
    "--mail",
    "--upn-suffix"
   ],
   "a": 0
  }
 ],
 "expl": "<p>The command is <code>az ad user create --display-name ... --user-principal-name marie@contoso.com --password ...</code>.</p><ul><li><b>az ad</b> manages Microsoft Entra objects (users, groups, applications). <b>az account</b> manages your session's subscriptions; <b>az identity</b> manages user-assigned managed identities.</li><li>The sign-in name is the <b>user principal name</b> (UPN). <code>--mail</code> and <code>--upn-suffix</code> aren't parameters of this command.</li></ul>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Command",
    "az ad user create --display-name \"Marie Durand\" --user-principal-name marie@contoso.com --password …"
   ],
   [
    "Result",
    "User visible in Entra ID > Users"
   ]
  ]
 },
 "keep": "az ad = Entra objects (user, group, sp). az account = subscriptions. az identity = managed identities.",
 "tpl": "az {0} user create --display-name \"Marie Durand\" {1} marie@contoso.com --password \"P@ssw0rd2026!\""
},
{
 "id": "D1-162",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to add the user whose object ID is stored in $userId to the group GRP-Support, with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "Add-AzADGroupMember",
    "New-AzRoleAssignment",
    "Set-AzADUser"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "-MemberObjectId",
    "-ObjectId",
    "-SignInName"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>Add-AzADGroupMember -TargetGroupObjectId $groupId -MemberObjectId $userId</code> adds a member to an Entra group with the Az module.</p><p>New-AzRoleAssignment assigns an Azure role; Set-AzADUser modifies a user. The parameter that designates the added member is <b>-MemberObjectId</b> (or -MemberUserPrincipalName).</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | PowerShell",
  "rows": [
   [
    "*Command",
    "Add-AzADGroupMember -TargetGroupObjectId $groupId -MemberObjectId $userId"
   ],
   [
    "Check in",
    "Entra ID > Groups > GRP-Support > Members"
   ]
  ]
 },
 "keep": "Adding a member to an Entra group in Az PowerShell = Add-AzADGroupMember -MemberObjectId.",
 "tpl": "{0} -TargetGroupObjectId $groupId {1} $userId"
},
{
 "id": "D1-163",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to assign the built-in policy whose definition is in $def to the subscription Sub1, with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzPolicyAssignment",
    "New-AzPolicyDefinition",
    "Start-AzPolicyRemediation"
   ],
   "a": 0
  },
  {
   "l": "Scope",
   "o": [
    "\"/subscriptions/&lt;Sub1 id&gt;\"",
    "\"Sub1\"",
    "\"/providers/Microsoft.Management/Sub1\""
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>New-AzPolicyAssignment</b> creates an assignment; New-AzPolicyDefinition creates a definition; Start-AzPolicyRemediation starts a remediation.</p><p>The scope is a <b>resource path</b>: <code>/subscriptions/&lt;id&gt;</code> for a subscription, <code>/subscriptions/&lt;id&gt;/resourceGroups/RG1</code> for a resource group, <code>/providers/Microsoft.Management/managementGroups/&lt;id&gt;</code> for a management group. The plain name “Sub1” isn't enough.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Policy | Assignments",
  "menu": [
   "Overview",
   "*Assignments",
   "Definitions"
  ],
  "rows": [
   [
    "*loc-fr",
    "Scope: /subscriptions/<Sub1 id>"
   ],
   [
    "Parameter",
    "listOfAllowedLocations = francecentral"
   ]
  ]
 },
 "keep": "A scope is written as a path: /subscriptions/<id>, …/resourceGroups/RG1, /providers/Microsoft.Management/managementGroups/<id>.",
 "tpl": "{0} -Name \"loc-fr\" -PolicyDefinition $def -Scope {1} -PolicyParameterObject @{listOfAllowedLocations=@(\"francecentral\")}"
},
{
 "id": "D1-164",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to list all role assignments of the user user1@contoso.com, including those inherited from parent scopes, on the resource group RG1.</p><p>How should you complete the Azure CLI command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Subcommand",
   "o": [
    "list",
    "show",
    "create"
   ],
   "a": 0
  },
  {
   "l": "Option",
   "o": [
    "--include-inherited",
    "--all-scopes",
    "--recursive"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az role assignment list --assignee ... --resource-group RG1 --include-inherited</code> lists the assignments on RG1 and those inherited from the subscription and management groups.</p><p>You can also add <code>--include-groups</code> to include assignments received through groups. <code>--all-scopes</code> and <code>--recursive</code> don't exist.</p>",
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
    "*CLI equivalent",
    "az role assignment list --assignee … --resource-group RG1 --include-inherited"
   ],
   [
    "Useful option",
    "--include-groups"
   ]
  ]
 },
 "keep": "Including inherited assignments in the CLI = --include-inherited; groups = --include-groups.",
 "tpl": "az role assignment {0} --assignee user1@contoso.com --resource-group RG1 {1}"
},
{
 "id": "D1-165",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You create a group for the Lyon technicians. It must fill itself automatically with users whose city is Lyon, and be able to receive Azure roles.</p><p>How should you configure the group?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li><b>Security</b>: the right type for granting access (Azure roles, resources).</li><li><b>Microsoft Entra roles assignable: No.</b> This setting is for Entra roles, not Azure roles, and it forbids dynamic membership.</li><li><b>Dynamic User</b> with the rule <code>(user.city -eq \"Lyon\")</code>.</li></ul><p><code>usageLocation</code> is a two-letter country code (FR), not a city. Devices have no city attribute.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "New group"
  ],
  "title": "New group",
  "rows": [
   [
    "*Group type",
    "Security"
   ],
   [
    "Microsoft Entra roles can be assigned to the group",
    "No"
   ],
   [
    "*Membership type",
    "Dynamic User"
   ],
   [
    "*Rule",
    "(user.city -eq \"Lyon\")"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Azure roles on a group: any security group. isAssignableToRole is only for Entra roles and forbids dynamic membership.",
 "win": {
  "title": "New group",
  "sub": "Groups | All groups",
  "rows": [
   {
    "k": "select",
    "l": "Group type",
    "o": [
     "Security",
     "Microsoft 365"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "text",
    "l": "Group name",
    "t": "Lyon-Technicians"
   },
   {
    "k": "select",
    "l": "Microsoft Entra roles can be assigned to the group",
    "o": [
     "Yes",
     "No"
    ],
    "d": 1,
    "a": 1
   },
   {
    "k": "select",
    "l": "Membership type",
    "o": [
     "Assigned",
     "Dynamic User",
     "Dynamic Device"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Rule",
    "o": [
     "(user.city -eq \"Lyon\")",
     "(device.city -eq \"Lyon\")",
     "(user.usageLocation -eq \"Lyon\")"
    ],
    "a": 0
   }
  ]
 }
},
{
 "id": "D1-166",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You configure the external collaboration settings. Only members (not guests) must be able to invite guests. Guests must see only their own profile in the directory.</p><p>How should you configure the page?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<ul><li><b>Guest access</b>: the third choice, the most restrictive, limits guests to their own objects.</li><li><b>Invitations</b>: the second choice lets <b>members</b> (and the relevant admins) invite, but not ordinary guests. The first choice would also let guests invite.</li></ul>",
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
    "*Guest access",
    "Restricted to their own objects"
   ],
   [
    "*Invitations",
    "Members and specific admins (not guests)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Guest access and the right to invite: two separate settings on the same page.",
 "win": {
  "title": "External collaboration settings",
  "sub": "External Identities",
  "rows": [
   {
    "k": "head",
    "t": "Guest user access"
   },
   {
    "k": "radio",
    "l": "Guest user access restrictions",
    "opts": [
     "Guest users have the same access as members",
     "Guest users have limited access to properties and memberships of directory objects",
     "Guest user access is restricted to properties and memberships of their own directory objects"
    ],
    "d": 1,
    "a": 2
   },
   {
    "k": "head",
    "t": "Guest invite settings"
   },
   {
    "k": "radio",
    "l": "Guest invite restrictions",
    "opts": [
     "Anyone in the organization can invite guest users including guests and non-admins",
     "Member users and users assigned to specific admin roles can invite guest users including guests with member permissions",
     "Only users assigned to specific admin roles can invite guest users",
     "No one in the organization can invite guest users including admins"
    ],
    "d": 0,
    "a": 1
   }
  ]
 }
},
{
 "id": "D1-167",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You add a role assignment on the resource group RG-Web. Members of the group GRP-Web must be able to manage the web apps in RG-Web, without being able to assign roles or manage other resource types.</p><p>How should you configure the assignment?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "expl": "<p><b>Website Contributor</b> manages web apps (not the App Service plan or other resources). You assign it to a <b>group</b>, so through “User, group, or service principal”, selecting GRP-Web.</p><p>Owner and Contributor give access to every resource type. Reader doesn't allow managing. “Managed identity” is for Azure resources, not a group of users.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Web"
  ],
  "title": "RG-Web | Add role assignment",
  "menu": [
   "*Role",
   "Members",
   "Review + assign"
  ],
  "rows": [
   [
    "*Role",
    "Website Contributor"
   ],
   [
    "Assign access to",
    "User, group, or service principal"
   ],
   [
    "Members",
    "GRP-Web"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Managing a single resource type = specialized role (Website Contributor for web apps).",
 "win": {
  "title": "Add role assignment",
  "sub": "RG-Web | Access control (IAM)",
  "rows": [
   {
    "k": "select",
    "l": "Role",
    "o": [
     "Owner",
     "Contributor",
     "Website Contributor",
     "Reader"
    ],
    "a": 2
   },
   {
    "k": "radio",
    "l": "Assign access to",
    "opts": [
     "User, group, or service principal",
     "Managed identity"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Members",
    "o": [
     "GRP-Web",
     "All users in the tenant",
     "Identity of RG-Web"
    ],
    "a": 0
   }
  ]
 }
},
{
 "id": "D1-168",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need to limit the domains to which users can send B2B invitations.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "External collaboration settings",
 "expl": "<p><b>Collaboration restrictions</b> (domain allowlist or denylist) are in <b>External collaboration settings</b>, together with guest access and guest invite restrictions.</p><p>Cross-tenant access settings handle trust with specific other Entra tenants. Identity providers and user flows are for self-service sign-up.</p>",
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
    "*Collaboration restrictions",
    "Allow invitations only to the specified domains"
   ]
  ]
 },
 "keep": "Invitable domains = External collaboration settings > Collaboration restrictions.",
 "win": {
  "title": "External Identities | Overview",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Cross-tenant synchronization"
    ]
   },
   {
    "g": "",
    "items": [
     "All identity providers",
     "External collaboration settings",
     "User flows",
     "Cross-tenant access settings",
     "Custom API connectors"
    ]
   },
   {
    "g": "Subscriptions",
    "items": [
     "Usage & licenses"
    ]
   }
  ]
 }
},
{
 "id": "D1-169",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need users to reset their password with two authentication methods instead of one.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Authentication methods",
 "expl": "<p>The <b>Authentication methods</b> page contains “Number of methods required to reset” (1 or 2) and the list of offered methods.</p><ul><li><b>Properties</b>: who has access to SSPR (None, Selected, All).</li><li><b>Registration</b>: requiring registration at sign-in.</li><li><b>On-premises integration</b>: password writeback to on-premises AD.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Password reset"
  ],
  "title": "Password reset | Authentication methods",
  "menu": [
   "Properties",
   "*Authentication methods",
   "Registration"
  ],
  "rows": [
   [
    "*Number of methods required to reset",
    "2"
   ]
  ],
  "btn": "Save"
 },
 "keep": "SSPR: Properties = who; Methods = how many and which; Registration = requirement; On-premises integration = writeback.",
 "win": {
  "title": "Password reset | Properties",
  "nav": [
   {
    "g": "Manage",
    "items": [
     "Properties",
     "Authentication methods",
     "Registration",
     "Notifications",
     "Customization",
     "On-premises integration"
    ]
   },
   {
    "g": "Activity",
    "items": [
     "Audit logs",
     "Usage & insights"
    ]
   }
  ]
 }
},
{
 "id": "D1-170",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need to request an increase in the number of vCPUs allowed for the Dsv5 family in the subscription Sub1.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "ans": "Usage + quotas",
 "expl": "<p><b>Usage + quotas</b> shows quota consumption by region and VM family, and lets you request an increase.</p><p><b>Resource providers</b> is for registering a service (MissingSubscriptionRegistration error). The other options are unrelated to quotas.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Usage + quotas",
  "menu": [
   "Overview",
   "Resource providers",
   "*Usage + quotas"
  ],
  "rows": [
   [
    "*Standard DSv5 Family vCPUs",
    "20 / 20"
   ]
  ],
  "btn": "New quota request"
 },
 "keep": "Quotas = Usage + quotas. Service registration error = Resource providers.",
 "win": {
  "title": "Sub1 | Subscription",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access control (IAM)",
     "Tags"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Resources",
     "Resource groups",
     "Resource providers",
     "Usage + quotas",
     "Policies",
     "Locks"
    ]
   },
   {
    "g": "Cost Management",
    "items": [
     "Cost analysis",
     "Budgets",
     "Advisor recommendations"
    ]
   }
  ]
 }
},
{
 "id": "D1-171",
 "dom": 1,
 "type": "order",
 "stem": "<p>Members of the Lille group GRP-Helpdesk must reset the passwords of Lille users only. Nothing exists yet.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>You create the <b>administrative unit</b>, put the relevant <b>users</b> in it (manually or with a dynamic rule), then assign the Entra role <b>Helpdesk Administrator</b> with the unit's scope. The group must be able to receive Entra roles (option chosen when it is created).</p><p>Contributor and management groups belong to Azure resources, not the directory.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Administrative units",
   "AU-Lille"
  ],
  "title": "AU-Lille | Roles and administrators",
  "menu": [
   "Overview",
   "Users",
   "*Roles and administrators"
  ],
  "rows": [
   [
    "*Role",
    "Helpdesk Administrator"
   ],
   [
    "Assignment",
    "GRP-Helpdesk"
   ]
  ],
  "btn": "+ Add assignments"
 },
 "keep": "Delegation per branch: administrative unit, its members, then an Entra role scoped to the unit.",
 "acts": [
  "Create the administrative unit AU-Lille",
  "Add the Lille users to AU-Lille",
  "Assign the Helpdesk Administrator role to GRP-Helpdesk with the AU-Lille scope",
  "Assign the Contributor role to GRP-Helpdesk on the subscription",
  "Create a Lille management group"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D1-172",
 "dom": 1,
 "type": "order",
 "stem": "<p>You need to set up a budget on RG-Prod that sends an SMS to the on-call engineer when 90% of the budget is consumed. No action group exists.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "expl": "<p>The <b>action group</b> must exist to be selected in the budget (you can also create it during the wizard, but it remains a logical prerequisite). You then create the <b>budget</b>, then the 90% <b>alert condition</b> that uses this action group.</p><p>Azure Policy and locks aren't used for cost alerts.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Prod"
  ],
  "title": "RG-Prod | Budgets › Set alerts",
  "menu": [
   "Create a budget",
   "*Set alerts"
  ],
  "rows": [
   [
    "*Type",
    "Actual"
   ],
   [
    "*% of budget",
    "90"
   ],
   [
    "*Action group",
    "AG-OnCall (SMS)"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Budget that warns by SMS: action group, budget, then a linked alert condition.",
 "acts": [
  "Create an action group with an SMS notification",
  "Create the budget on RG-Prod with the monthly amount",
  "Add an Actual 90% alert condition linked to the action group",
  "Create an Azure Policy with the Deny effect",
  "Apply a ReadOnly lock to RG-Prod"
 ],
 "seq": [
  0,
  1,
  2
 ]
},
{
 "id": "D1-173",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to choose the minimum assignment scope for each need.</p><p>To answer, drag the appropriate scope to each need. Each scope may be used once, more than once, or not at all.</p>",
 "srcLabel": "Scopes",
 "tgtHead": [
  "Need",
  "Scope"
 ],
 "srcs": [
  "Management group",
  "Subscription",
  "Resource group",
  "Resource"
 ],
 "tgts": [
  {
   "l": "An auditor must read the resources of all subscriptions of the Finance division",
   "a": 0
  },
  {
   "l": "A developer manages all resources of project Alpha, grouped in the same container",
   "a": 2
  },
  {
   "l": "An operator restarts only the VM SQL01",
   "a": 3
  },
  {
   "l": "The network team manages the networks of the whole Prod subscription",
   "a": 1
  }
 ],
 "expl": "<ul><li>Several subscriptions: the <b>management group</b> that contains them.</li><li>A project's grouped resources: <b>resource group</b>.</li><li>A single VM: <b>resource</b>.</li><li>A whole subscription: <b>subscription</b>.</li></ul><p>The principle: assign at the lowest level that covers the whole need, since roles are inherited downward.</p>",
 "portal": {
  "path": [
   "Management groups",
   "MG-Finance"
  ],
  "title": "MG-Finance | Access control (IAM)",
  "menu": [
   "Overview",
   "Subscriptions",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Reader"
   ],
   [
    "Members",
    "Auditor"
   ],
   [
    "Inherited by",
    "All subscriptions of MG-Finance"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Assign at the lowest level that covers the whole need: several subscriptions = management group; one VM = resource."
},
{
 "id": "D1-174",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to match each identity type to its description.</p><p>To answer, drag the appropriate type to each description. Each type may be used once, more than once, or not at all.</p>",
 "srcLabel": "Identities",
 "tgtHead": [
  "Description",
  "Type"
 ],
 "srcs": [
  "Member user",
  "Guest user",
  "Service principal",
  "Managed identity"
 ],
 "tgts": [
  {
   "l": "Identity of a registered application, which authenticates with a secret or certificate",
   "a": 2
  },
  {
   "l": "Identity of an Azure resource whose credentials Azure manages automatically",
   "a": 3
  },
  {
   "l": "Person from a partner organization, who signs in with their own account",
   "a": 1
  },
  {
   "l": "Employee whose account belongs to your tenant",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Service principal</b>: an application's instance in the tenant. You manage its secret or certificate.</li><li><b>Managed identity</b>: a special service principal, tied to a resource, with no secret to manage.</li><li><b>Guest</b>: a B2B account that authenticates in its home organization.</li><li><b>Member</b>: an internal account.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Enterprise applications"
  ],
  "title": "Enterprise applications | All applications",
  "menu": [
   "*All applications"
  ],
  "rows": [
   [
    "Application type",
    "Enterprise applications · Managed identities"
   ],
   [
    "*Service principal",
    "Secret or certificate to manage"
   ],
   [
    "*Managed identity",
    "Credentials managed by Azure"
   ]
  ]
 },
 "keep": "Service principal = application identity with a secret. Managed identity = service principal with no secret, tied to Azure."
},
{
 "id": "D1-175",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to indicate where each setting is located in Microsoft Entra ID.</p><p>To answer, drag the appropriate location to each setting. Each location may be used once, more than once, or not at all.</p>",
 "srcLabel": "Locations",
 "tgtHead": [
  "Setting",
  "Location"
 ],
 "srcs": [
  "User settings",
  "Device settings",
  "External collaboration settings",
  "Groups > Expiration"
 ],
 "tgts": [
  {
   "l": "Users can register applications",
   "a": 0
  },
  {
   "l": "Require multifactor authentication to join devices",
   "a": 1
  },
  {
   "l": "Lifetime of Microsoft 365 groups",
   "a": 3
  },
  {
   "l": "Who can invite guests",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>User settings</b>: app registration, tenant creation, access to the admin center.</li><li><b>Device settings</b>: joining, registering, MFA to join, maximum number of devices.</li><li><b>Groups > Expiration</b>: lifetime of Microsoft 365 groups.</li><li><b>External collaboration</b>: invitations and guest access.</li></ul>",
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
    "Yes / No"
   ],
   [
    "Elsewhere",
    "Devices, Groups > Expiration, External collaboration"
   ]
  ]
 },
 "keep": "Apps and tenants = User settings; MFA to join = Device settings; group lifetime = Expiration; invitations = External collaboration."
},
{
 "id": "D1-176",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>User16 is a member of the group GRP-A. GRP-A is a member of the group GRP-B. The Contributor role is assigned to GRP-B on RG1.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "User16 has the Contributor role on RG1.",
   "a": 0
  },
  {
   "l": "If User16 leaves GRP-A, he loses the Contributor role on RG1.",
   "a": 0
  },
  {
   "l": "To give User16 this role, you must assign it directly to his account.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Contributor: Yes.</b> Azure role assignments take <b>nested groups</b> into account: a member of GRP-A, itself a member of GRP-B, receives GRP-B's role. (This differs from group-based licensing, which ignores nesting.)</li><li><b>Leaving GRP-A: Yes.</b> He's then no longer a member, even indirectly, of GRP-B.</li><li><b>Direct assignment required: No.</b> Using groups is precisely the best practice.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Check access › User16",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Contributor",
    "Via GRP-B (member through GRP-A)"
   ]
  ]
 },
 "keep": "Azure roles: nested groups count. Group-based licensing: they don't."
},
{
 "id": "D1-177",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You configure self-service password reset.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "With the “Selected” value, you can choose several groups.",
   "a": 1
  },
  {
   "l": "Users can be notified by email when their password is reset.",
   "a": 0
  },
  {
   "l": "Administrators can be notified when another administrator resets their password.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Several groups: No.</b> The portal lets you choose only <b>one group</b> for the “Selected” scope. For several teams, put them in a parent group.</li><li><b>User notification: Yes.</b> Setting “Notify users on password resets”.</li><li><b>Admin notification: Yes.</b> Setting “Notify all admins when other admins reset their password”.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Password reset"
  ],
  "title": "Password reset | Notifications",
  "menu": [
   "Properties",
   "Authentication methods",
   "Registration",
   "*Notifications"
  ],
  "rows": [
   [
    "*Notify users on password resets",
    "Yes"
   ],
   [
    "*Notify all admins when other admins reset their password",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "SSPR “Selected” = one group only. Two possible notifications: users and admins."
},
{
 "id": "D1-178",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>The subscription Sub1 contains RG1. A <b>Read-only</b> lock is applied to RG1.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "An Owner of Sub1 can create a new resource in RG1.",
   "a": 1
  },
  {
   "l": "An Owner of Sub1 can delete the lock.",
   "a": 0
  },
  {
   "l": "A Reader can still view the resources in RG1.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Create a resource: No.</b> Read-only blocks any write in RG1, whatever the role.</li><li><b>Delete the lock: Yes.</b> The Owner has the Microsoft.Authorization/locks/* actions. The lock doesn't prevent its own deletion.</li><li><b>View: Yes.</b> Reading is never blocked.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Locks",
  "menu": [
   "Overview",
   "*Locks"
  ],
  "rows": [
   [
    "*Lock type",
    "Read-only"
   ],
   [
    "Create a resource",
    "Blocked"
   ],
   [
    "Delete the lock (Owner)",
    "Allowed"
   ]
  ]
 },
 "keep": "Read-only blocks every write, except deleting the lock by someone allowed to."
},
{
 "id": "D1-179",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You assign a <b>Require a tag on resources</b> policy (tag Department, Deny effect) to the resource group RG2. RG2 already contains VM1, with no tag.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "VM1 keeps running.",
   "a": 0
  },
  {
   "l": "You can create a disk in RG2 without the Department tag.",
   "a": 1
  },
  {
   "l": "Changing a property of VM1 without adding the tag will be denied.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>VM1 runs: Yes.</b> Deny doesn't act on existing resources; VM1 is only non-compliant.</li><li><b>Disk without a tag: No.</b> Every new resource in RG2 must have the tag.</li><li><b>Change VM1: Yes (denied).</b> An update to a non-compliant resource is evaluated like a creation: without the tag, it's denied. It's a common side effect of Deny on existing resources.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Configuration",
  "menu": [
   "Overview",
   "*Configuration"
  ],
  "rows": [
   [
    "Save a change",
    "Failed: RequestDisallowedByPolicy"
   ],
   [
    "*Reason",
    "Missing Department tag"
   ]
  ]
 },
 "keep": "Deny and existing resources: nothing stops, but any non-compliant update is denied."
},
{
 "id": "D1-180",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You review the following role definition:</p><pre>{\n  \"Name\": \"Storage Support\",\n  \"Actions\": [\"Microsoft.Storage/storageAccounts/*\"],\n  \"NotActions\": [\"Microsoft.Storage/storageAccounts/delete\",\n                 \"Microsoft.Storage/storageAccounts/listKeys/action\"],\n  \"DataActions\": [],\n  \"AssignableScopes\": [\"/subscriptions/&lt;Sub1 id&gt;\"]\n}</pre><p>The role is assigned to User17 on Sub1, and it's his only role.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "User17 can create a storage account:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  },
  {
   "l": "User17 can list an account's access keys:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "User17 can read a blob with his Microsoft Entra identity:",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Create: Yes.</b> <code>storageAccounts/*</code> includes write.</li><li><b>List keys: No.</b> listKeys is excluded by NotActions, and no other role grants it.</li><li><b>Read a blob: No.</b> DataActions is empty: no data access with his identity.</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1",
   "Access control (IAM)"
  ],
  "title": "Storage Support | Permissions",
  "menu": [
   "Basics",
   "*Permissions"
  ],
  "rows": [
   [
    "Microsoft.Storage/storageAccounts/*",
    "Allowed"
   ],
   [
    "*listKeys/action",
    "Excluded (NotActions)"
   ],
   [
    "*DataActions",
    "None"
   ]
  ]
 },
 "keep": "Without DataActions, no data access with your identity; without listKeys, no keys either."
},
{
 "id": "D1-181",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You need to choose the right tool for each cost management need.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Compare the cost of an on-premises datacenter with Azure before a migration:",
   "o": [
    "Cost analysis",
    "Total Cost of Ownership (TCO) calculator",
    "Budgets"
   ],
   "a": 1
  },
  {
   "l": "See last month's spending broken down by resource group:",
   "o": [
    "Azure Advisor",
    "Pricing calculator",
    "Cost analysis"
   ],
   "a": 2
  },
  {
   "l": "Get recommendations to resize VMs:",
   "o": [
    "TCO calculator",
    "Azure Advisor",
    "Cost exports"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>TCO calculator</b>: compares the cost of on-premises infrastructure (hardware, power, staff) with Azure.</li><li><b>Cost analysis</b>: actual spending, grouped by service, resource group, tag…</li><li><b>Azure Advisor</b>: recommendations, including resizing underused VMs.</li></ul>",
 "portal": {
  "path": [
   "Cost Management + Billing"
  ],
  "title": "Cost Management | Cost analysis",
  "menu": [
   "*Cost analysis",
   "Budgets",
   "Advisor recommendations"
  ],
  "rows": [
   [
    "*Group by",
    "Resource group"
   ],
   [
    "Timespan",
    "Last month"
   ]
  ]
 },
 "keep": "Before migrating = TCO calculator. Actual spending = cost analysis. Recommendations = Advisor."
},
{
 "id": "D1-182",
 "dom": 1,
 "type": "hot",
 "stem": "<p>Your organization's hierarchy is as follows: the root group contains MG-Corp, which contains MG-Prod and MG-Dev. MG-Prod contains Sub-Prod1. MG-Dev contains Sub-Dev1.</p><p>A Deny policy “Allowed locations: France Central” is assigned to MG-Corp. An Audit policy “Require the Owner tag” is assigned to MG-Dev.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "In Sub-Prod1, a resource in West Europe is:",
   "o": [
    "allowed and non-compliant",
    "allowed and compliant",
    "denied"
   ],
   "a": 2
  },
  {
   "l": "In Sub-Dev1, a resource in France Central without the Owner tag is:",
   "o": [
    "denied",
    "allowed and non-compliant",
    "allowed and compliant"
   ],
   "a": 1
  },
  {
   "l": "In Sub-Prod1, a resource in France Central without the Owner tag is:",
   "o": [
    "allowed and non-compliant",
    "denied",
    "allowed and compliant"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Sub-Prod1, West Europe: denied.</b> MG-Corp's policy applies to every subscription below it.</li><li><b>Sub-Dev1 without the tag: allowed and non-compliant.</b> The region is fine; the tag policy is in Audit.</li><li><b>Sub-Prod1 without the tag: allowed and compliant.</b> The tag policy is assigned only to MG-Dev; it doesn't concern MG-Prod.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Policy | Assignments",
  "menu": [
   "Overview",
   "*Assignments"
  ],
  "rows": [
   [
    "*Allowed locations (Deny)",
    "MG-Corp → MG-Prod, MG-Dev"
   ],
   [
    "*Require the Owner tag (Audit)",
    "MG-Dev only"
   ]
  ]
 },
 "keep": "A policy applies to its scope and below, never to neighboring branches."
},
{
 "id": "D1-183",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You need to manage your tenant's users with as little effort as possible.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Add 50 external consultants at once:",
   "o": [
    "Bulk invite users",
    "Microsoft Entra Connect",
    "Bulk create users"
   ],
   "a": 0
  },
  {
   "l": "Delete 200 intern accounts listed in a file:",
   "o": [
    "Bulk delete users",
    "An expiration policy",
    "A lock"
   ],
   "a": 0
  },
  {
   "l": "Give each new HR employee access to the HR apps:",
   "o": [
    "A dynamic group on the department, with access assigned to the group",
    "An individual assignment for each new hire",
    "An HR administrative unit"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Bulk invite</b> creates guest accounts for external people.</li><li><b>Bulk delete</b> takes a CSV file of the UPNs to delete. Expiration only concerns Microsoft 365 groups.</li><li><b>Dynamic group</b>: each new employee whose department is HR becomes a member and receives the group's access, with no action. An administrative unit delegates management; it grants no access.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "All users"
  ],
  "title": "Bulk operations",
  "menu": [
   "All users",
   "*Bulk operations"
  ],
  "rows": [
   [
    "*Bulk invite",
    "External people"
   ],
   [
    "*Bulk delete",
    "CSV of UPNs"
   ],
   [
    "Bulk create",
    "Members"
   ]
  ]
 },
 "keep": "Bulk: create (members), invite (external), delete (CSV). Automatic access = dynamic group."
},
{
 "id": "D1-184",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You need to allow User18 to manage the locks on all resources in the subscription Sub1, with no other resource management rights.</p><p>For each of the following solutions, select Yes if it's suitable. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Assign the built-in Contributor role",
   "a": 1
  },
  {
   "l": "Assign Resource Policy Contributor",
   "a": 1
  },
  {
   "l": "A custom role with locks/*",
   "a": 0
  },
  {
   "l": "Assign User Access Administrator",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Custom role locks/*: yes</b>, it's the most precise solution.</li><li><b>User Access Administrator: yes.</b> It has <code>Microsoft.Authorization/*</code>, so locks, with no rights on the resources themselves (but it can assign roles, hence the value of the custom role for least privilege).</li><li><b>Contributor: no.</b> It specifically excludes Microsoft.Authorization/*.</li><li><b>Resource Policy Contributor: no.</b> It manages policies, not locks.</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1",
   "Access control (IAM)"
  ],
  "title": "Create a custom role | Permissions",
  "menu": [
   "Basics",
   "*Permissions"
  ],
  "rows": [
   [
    "*Microsoft.Authorization/locks/*",
    "Read, write, delete locks"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Managing locks = Microsoft.Authorization/locks/* (Owner, User Access Administrator, or a custom role)."
},
{
 "id": "D1-186",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Your tenant contains cloud users and users synchronized from on-premises AD. You need to allow <b>all</b> users to reset their own password, and the new password must also work on on-premises domain computers.</p><p>For each of the following actions, select Yes if it's required. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Convert synced users to cloud accounts",
   "a": 1
  },
  {
   "l": "Create an administrative unit for synced accounts",
   "a": 1
  },
  {
   "l": "Enable password writeback",
   "a": 0
  },
  {
   "l": "Enable SSPR for All users",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>SSPR for All: yes.</b></li><li><b>Password writeback: yes.</b> Without it, synchronized users can't reset their password from the cloud, since on-premises AD is the source of authority.</li><li><b>Administrative unit: no.</b> It delegates administration, unrelated to SSPR.</li><li><b>Conversion: no.</b> It would break synchronization and access to on-premises resources.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Password reset"
  ],
  "title": "Password reset | On-premises integration",
  "menu": [
   "*Properties",
   "On-premises integration"
  ],
  "rows": [
   [
    "*SSPR enabled",
    "All"
   ],
   [
    "*Write back passwords to your on-premises directory",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "SSPR for synchronized accounts = password writeback required."
},
{
 "id": "D1-187",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You need to list the actions that a <b>Read-only</b> lock on a virtual machine blocks.</p><p>For each of the following actions, select Yes if it's blocked. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Connect to the VM over RDP",
   "a": 1
  },
  {
   "l": "Restart the VM",
   "a": 0
  },
  {
   "l": "Resize the VM",
   "a": 0
  },
  {
   "l": "Add a tag to the VM",
   "a": 0
  },
  {
   "l": "View the VM's metrics",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Resize, restart, tag: blocked.</b> They are writes (PUT, PATCH, or POST) on the control plane.</li><li><b>View metrics: allowed.</b> It's a read.</li><li><b>RDP: allowed.</b> Connecting to the operating system goes through the network, not the Azure control plane.</li></ul>",
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
    "*Read-only",
    "Resize, restart, tag: blocked"
   ],
   [
    "Allowed",
    "Metrics (read), RDP (network)"
   ]
  ]
 },
 "keep": "Read-only blocks control plane PUT/PATCH/POST; reads and network access remain possible."
},
{
 "id": "D1-191",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to delegate Azure Policy management (creating definitions and assignments) to the Governance team, on the management group MG-Corp, without giving them access to the resources.</p><p>Which role should you assign?</p>",
 "opts": [
  "Contributor on the management group",
  "Owner",
  "Security Administrator",
  "Resource Policy Contributor"
 ],
 "ans": 3,
 "expl": "<p><b>Resource Policy Contributor</b> creates and manages policy definitions and assignments. Note: for assignments that use a managed identity (Modify, DeployIfNotExists), you must also be able to assign a role to that identity.</p><p>Contributor and Owner give access to resources. Security Administrator is an Entra role.</p>",
 "portal": {
  "path": [
   "Management groups",
   "MG-Corp"
  ],
  "title": "MG-Corp | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Resource Policy Contributor"
   ],
   [
    "Members",
    "Governance team"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Managing Policy definitions and assignments = Resource Policy Contributor."
}
);
