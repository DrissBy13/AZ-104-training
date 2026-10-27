/* Domain 1: identities and governance (batch E : D1-161 to D1-230) */
AZ.questions.push(
{
 "id": "D1-161",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to create a user with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az {0} user create --display-name \"Marie Durand\" {1} marie@contoso.com --password \"P@ssw0rd2026!\"",
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
 "keep": "az ad = Entra objects (user, group, sp). az account = subscriptions. az identity = managed identities."
},
{
 "id": "D1-162",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to add the user whose object ID is stored in $userId to the group GRP-Support, with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0} -TargetGroupObjectId $groupId {1} $userId",
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
 "keep": "Adding a member to an Entra group in Az PowerShell = Add-AzADGroupMember -MemberObjectId."
},
{
 "id": "D1-163",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to assign the built-in policy whose definition is in $def to the subscription Sub1, with Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0} -Name \"loc-fr\" -PolicyDefinition $def -Scope {1} -PolicyParameterObject @{listOfAllowedLocations=@(\"francecentral\")}",
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
 "keep": "A scope is written as a path: /subscriptions/<id>, …/resourceGroups/RG1, /providers/Microsoft.Management/managementGroups/<id>."
},
{
 "id": "D1-164",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to list all role assignments of the user user1@contoso.com, including those inherited from parent scopes, on the resource group RG1.</p><p>How should you complete the Azure CLI command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az role assignment {0} --assignee user1@contoso.com --resource-group RG1 {1}",
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
 "keep": "Including inherited assignments in the CLI = --include-inherited; groups = --include-groups."
},
{
 "id": "D1-165",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You create a group for the Lyon technicians. It must fill itself automatically with users whose city is Lyon, and be able to receive Azure roles.</p><p>How should you configure the group?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 },
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
 "keep": "Azure roles on a group: any security group. isAssignableToRole is only for Entra roles and forbids dynamic membership."
},
{
 "id": "D1-166",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You configure the external collaboration settings. Only members (not guests) must be able to invite guests. Guests must see only their own profile in the directory.</p><p>How should you configure the page?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 },
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
 "keep": "Guest access and the right to invite: two separate settings on the same page."
},
{
 "id": "D1-167",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You add a role assignment on the resource group RG-Web. Members of the group GRP-Web must be able to manage the web apps in RG-Web, without being able to assign roles or manage other resource types.</p><p>How should you configure the assignment?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 },
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
 "keep": "Managing a single resource type = specialized role (Website Contributor for web apps)."
},
{
 "id": "D1-168",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need to limit the domains to which users can send B2B invitations.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "Invitable domains = External collaboration settings > Collaboration restrictions."
},
{
 "id": "D1-169",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need users to reset their password with two authentication methods instead of one.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "SSPR: Properties = who; Methods = how many and which; Registration = requirement; On-premises integration = writeback."
},
{
 "id": "D1-170",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need to request an increase in the number of vCPUs allowed for the Dsv5 family in the subscription Sub1.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 },
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
 "keep": "Quotas = Usage + quotas. Service registration error = Resource providers."
},
{
 "id": "D1-171",
 "dom": 1,
 "type": "order",
 "stem": "<p>Members of the Lille group GRP-Helpdesk must reset the passwords of Lille users only. Nothing exists yet.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 ],
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
 "keep": "Delegation per branch: administrative unit, its members, then an Entra role scoped to the unit."
},
{
 "id": "D1-172",
 "dom": 1,
 "type": "order",
 "stem": "<p>You need to set up a budget on RG-Prod that sends an SMS to the on-call engineer when 90% of the budget is consumed. No action group exists.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 ],
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
 "keep": "Budget that warns by SMS: action group, budget, then a linked alert condition."
},
{
 "id": "D1-173",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to choose the minimum assignment scope for each need.</p><p>To answer, drag the appropriate scope to each need. Each scope may be used once, more than once, or not at all.</p>",
 "srcLabel": "Scopes",
 "srcs": [
  "Management group",
  "Subscription",
  "Resource group",
  "Resource"
 ],
 "tgtHead": [
  "Need",
  "Scope"
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
 "srcs": [
  "Member user",
  "Guest user",
  "Service principal",
  "Managed identity"
 ],
 "tgtHead": [
  "Description",
  "Type"
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
 "srcs": [
  "User settings",
  "Device settings",
  "External collaboration settings",
  "Groups > Expiration"
 ],
 "tgtHead": [
  "Setting",
  "Location"
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
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to allow User18 to manage the locks on all resources in the subscription Sub1, with no other resource management rights.</p><p>Which <b>two</b> solutions work?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Assign the built-in Contributor role",
  "Assign the built-in Resource Policy Contributor role",
  "Assign a custom role with the Microsoft.Authorization/locks/* actions",
  "Assign the built-in User Access Administrator role"
 ],
 "ans": [
  2,
  3
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
 "id": "D1-185",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to allow an auditor to see the Azure Policy compliance of the whole management group MG-Corp, without changing anything.</p><p>Which <b>two</b> statements are true?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "They must be a Global Administrator in Microsoft Entra ID",
  "The Reader role on MG-Corp lets them see compliance",
  "The assignment must be made on MG-Corp to cover all subscriptions",
  "They must have the Resource Policy Contributor role"
 ],
 "ans": [
  1,
  2
 ],
 "expl": "<ul><li><b>Reader: yes.</b> It reads assignments, definitions, and compliance states.</li><li><b>On MG-Corp: yes.</b> Inheritance covers all of MG-Corp's subscriptions.</li><li><b>Policy Contributor: no.</b> It lets you create and edit policies, which the auditor must not do.</li><li><b>Global Administrator: no.</b> An unrelated Entra role, and far too powerful.</li></ul>",
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
    "Reader"
   ],
   [
    "Members",
    "Auditor"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Seeing Policy compliance = Reader; changing it = Resource Policy Contributor."
},
{
 "id": "D1-186",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Your tenant contains cloud users and users synchronized from on-premises AD. You need to allow <b>all</b> users to reset their own password, and the new password must also work on on-premises domain computers.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Convert synchronized users to cloud users",
  "Create an administrative unit for synchronized users",
  "Enable password writeback in Microsoft Entra Connect",
  "Enable SSPR for All"
 ],
 "ans": [
  2,
  3
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
 "type": "multi",
 "pick": 3,
 "stem": "<p>You need to list the actions that a <b>Read-only</b> lock on a virtual machine blocks.</p><p>Which <b>three</b> actions are blocked?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Connect to the VM over RDP",
  "Restart the VM",
  "Resize the VM",
  "Add a tag to the VM",
  "View the VM's metrics"
 ],
 "ans": [
  1,
  2,
  3
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
 "id": "D1-188",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to give a developer read access to the Azure Monitor logs and metrics of the subscription Sub1, without access to the resources.</p><p>Which role follows the principle of least privilege?</p>",
 "opts": [
  "Monitoring Reader",
  "Monitoring Contributor",
  "Log Analytics Contributor",
  "Reader"
 ],
 "ans": 0,
 "expl": "<p><b>Monitoring Reader</b> reads all monitoring data: metrics, logs, alert settings.</p><p>Monitoring Contributor can also change monitoring settings. Reader also grants read access to resources. Log Analytics Contributor manages workspaces.</p>",
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
    "Monitoring Reader"
   ],
   [
    "Members",
    "Developer"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Reading metrics and logs = Monitoring Reader; changing monitoring = Monitoring Contributor."
},
{
 "id": "D1-189",
 "dom": 1,
 "type": "single",
 "stem": "<p>You manage 30 subscriptions. The same custom policy must apply to all of them, and subscriptions created later must be covered automatically.</p><p>Which approach takes the least effort?</p>",
 "opts": [
  "Use a scheduled script that checks the subscriptions every night",
  "Save the definition and assign it to the root management group (or a common parent group)",
  "Apply a lock to each subscription",
  "Create the definition in each subscription and assign it 30 times"
 ],
 "ans": 1,
 "expl": "<p>A definition saved in a parent <b>management group</b>, and assigned to that group, applies to all current and future subscriptions in the hierarchy.</p><p>30 manual assignments would miss new subscriptions. A script redoes what Azure Policy already does. A lock doesn't replace a policy.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "*Scope",
    "Tenant root group"
   ],
   [
    "Covers",
    "The 30 subscriptions and future ones"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Covering all subscriptions, including future ones = definition and assignment on a parent management group."
},
{
 "id": "D1-190",
 "dom": 1,
 "type": "single",
 "stem": "<p>You create the user User19 in Microsoft Entra ID. You assign him no role.</p><p>Which Azure resources can User19 see in the portal?</p>",
 "opts": [
  "The resources of subscriptions whose ID he knows",
  "The resources of his default resource group",
  "No Azure resources",
  "All resources in the tenant, read-only"
 ],
 "ans": 2,
 "expl": "<p>Access to Azure resources is <b>denied by default</b>. Without an Azure role assignment, User19 sees no subscription and no resource. He can only sign in to the portal and see some directory information, depending on user settings.</p><p>There's no per-user “default resource group”, and knowing an ID grants no access.</p>",
 "portal": {
  "path": [
   "Subscriptions"
  ],
  "title": "Subscriptions",
  "rows": [
   [
    "*Subscriptions visible to User19",
    "None"
   ],
   [
    "Reason",
    "No Azure role assignment"
   ]
  ]
 },
 "keep": "Without an Azure role, you see no resources: access is denied by default."
},
{
 "id": "D1-191",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to delegate Azure Policy management (creating definitions and assignments) to the Governance team, on the management group MG-Corp, without giving them access to the resources.</p><p>Which role should you assign?</p>",
 "opts": [
  "Contributor",
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
},
{
 "id": "D1-192",
 "dom": 1,
 "type": "single",
 "stem": "<p>A policy with the DeployIfNotExists effect is assigned to Sub1 with a system-assigned managed identity. The remediation task fails with an authorization error.</p><p>What should you do?</p>",
 "opts": [
  "Assign the assignment's managed identity the roles listed in the definition's roleDefinitionIds, on Sub1",
  "Switch the effect to Audit",
  "Delete the managed identity",
  "Assign the Owner role to your own account"
 ],
 "ans": 0,
 "expl": "<p>A DeployIfNotExists or Modify policy definition lists in <b>roleDefinitionIds</b> the roles the identity needs. The portal assigns them automatically when the assignment is created if you have the right; otherwise, you must assign them to the <b>managed identity</b> at the scope.</p><p>Your own rights aren't used by remediation. Switching to Audit or deleting the identity would remove remediation.</p>",
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
    "*Member",
    "Assignment identity (system)"
   ],
   [
    "Role",
    "The one in roleDefinitionIds (e.g. Log Analytics Contributor)"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Failed remediation = the assignment's identity lacks the roles in roleDefinitionIds."
},
{
 "id": "D1-193",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your Microsoft Entra tenant has 25 users. You need to ensure that no user has the Global Administrator role without needing it.</p><p>Which Microsoft recommendation should you follow?</p>",
 "opts": [
  "Delete all Global Administrators",
  "Limit the number of Global Administrators, ideally to fewer than five, and use less privileged roles",
  "Give the Global Administrator role to all administrators",
  "Assign Global Administrator to a dynamic group"
 ],
 "ans": 1,
 "expl": "<p>Microsoft recommends having <b>fewer than five</b> Global Administrators (but at least two, including an emergency access account) and using more specific roles for everything else.</p><p>Deleting all Global Administrators is impossible and dangerous. Groups that receive Entra roles can't be dynamic.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Roles and administrators",
   "Global Administrator"
  ],
  "title": "Global Administrator | Assignments",
  "menu": [
   "*Assignments"
  ],
  "rows": [
   [
    "*Recommendation",
    "Fewer than 5, at least 2 (including an emergency account)"
   ]
  ]
 },
 "keep": "Few Global Administrators (2 to 4); targeted roles for everything else."
},
{
 "id": "D1-194",
 "dom": 1,
 "type": "single",
 "stem": "<p>Contoso's developers must access the Azure portal with accounts from the partner company Fabrikam, which has its own Microsoft Entra tenant. You must not manage any passwords for them.</p><p>What should you do?</p>",
 "opts": [
  "Synchronize the Fabrikam tenant with Microsoft Entra Connect",
  "Create member accounts in your tenant",
  "Invite them as B2B guest users and assign them roles",
  "Create service principals for each developer"
 ],
 "ans": 2,
 "expl": "<p>With <b>Microsoft Entra B2B</b>, guests authenticate in their own tenant (Fabrikam): you don't manage their passwords. You then assign them Azure roles like any user.</p><p>Member accounts require managing passwords. Microsoft Entra Connect syncs an on-premises AD, not another tenant. Service principals are application identities.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users"
  ],
  "title": "Invite external user",
  "menu": [
   "*New user"
  ],
  "rows": [
   [
    "*Email",
    "dev1@fabrikam.com"
   ],
   [
    "Authentication",
    "In the Fabrikam tenant"
   ]
  ],
  "btn": "Invite"
 },
 "keep": "Accounts from another organization, with no password to manage = B2B guests."
},
{
 "id": "D1-195",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assign RG1 a <b>Modify</b> policy that adds the tag Env=Prod if it's missing. An administrator then creates storage5 in RG1 with the tag Env=Dev.</p><p>Which tag will storage5 have?</p>",
 "opts": [
  "Env=Prod",
  "Env=Prod and Env=Dev",
  "None: the creation is denied",
  "Env=Dev"
 ],
 "ans": 3,
 "expl": "<p>An “add the tag <b>if missing</b>” policy uses the <code>addOrReplace</code> operation with a condition on the tag being absent. Since storage5 already has Env, the condition isn't met: the value <b>Env=Dev</b> is kept.</p><p>A policy without that condition, which forces the value, would replace Dev with Prod. A tag can't have two values. Modify never denies a request.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage5"
  ],
  "title": "storage5 | Tags",
  "menu": [
   "Overview",
   "*Tags"
  ],
  "rows": [
   [
    "*Env",
    "Dev (kept: the “if missing” condition is false)"
   ]
  ]
 },
 "keep": "“Add if missing” doesn't touch a tag that's already there. Modify never denies."
},
{
 "id": "D1-196",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow an application to create users in Microsoft Entra ID without human interaction.</p><p>What should you grant it?</p>",
 "opts": [
  "The Microsoft Graph application permission User.ReadWrite.All, with admin consent",
  "A storage account access key",
  "A managed identity with no other configuration",
  "The Azure Contributor role on the subscription"
 ],
 "ans": 0,
 "expl": "<p>Directory operations go through <b>Microsoft Graph</b>. An <b>application</b> permission (no signed-in user) such as <code>User.ReadWrite.All</code> must receive <b>admin consent</b>. You can also assign the application an Entra role such as User Administrator.</p><p>An Azure role grants no rights on the directory. A managed identity with no permission can do nothing.</p>",
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
 "keep": "Acting on the directory without a user = Graph application permission + admin consent."
},
{
 "id": "D1-197",
 "dom": 1,
 "type": "single",
 "stem": "<p>You manage three environments (Dev, Test, Prod) with different policies, budgets, and teams. You want to clearly separate their billing and quota boundaries.</p><p>Which organization does Microsoft recommend?</p>",
 "opts": [
  "A single subscription with Env tags",
  "One subscription per environment, grouped in management groups",
  "A single resource group for everything",
  "One Microsoft Entra tenant per environment"
 ],
 "ans": 1,
 "expl": "<p>The <b>subscription</b> is a billing, quota, and access boundary. One subscription per environment, organized in <b>management groups</b>, lets you apply different policies and roles to each.</p><p>One tenant per environment would complicate identity management. Tags help split costs but separate neither quotas nor security boundaries.</p>",
 "portal": {
  "path": [
   "Management groups"
  ],
  "title": "Management groups",
  "rows": [
   [
    "MG-NonProd",
    "Sub-Dev, Sub-Test"
   ],
   [
    "*MG-Prod",
    "Sub-Prod"
   ]
  ]
 },
 "keep": "Subscription = billing, quota, and access boundary. One per environment, organized in management groups."
},
{
 "id": "D1-198",
 "dom": 1,
 "type": "single",
 "stem": "<p>You manage the resource group RG1 in France Central. The France Central region suffers a complete outage.</p><p>What is the impact on managing the RG1 resources located in West Europe?</p>",
 "opts": [
  "No possible impact",
  "The West Europe resources stop",
  "The West Europe resources keep running, but RG1 management operations may be unavailable",
  "RG1 is moved automatically to West Europe"
 ],
 "ans": 2,
 "expl": "<p>A resource group's region is where its <b>metadata</b> is stored. If it's down, resources in other regions keep running, but management operations (deployment, changes) that depend on this metadata may fail.</p><p>That's why the resource group is often placed in the same region as its resources. Nothing is moved automatically.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Properties",
  "menu": [
   "Overview",
   "*Properties"
  ],
  "rows": [
   [
    "*Location (metadata)",
    "France Central"
   ],
   [
    "Resources",
    "France Central, West Europe"
   ]
  ]
 },
 "keep": "A resource group's region = where its metadata lives; during an outage, management is affected, not resources in other regions."
},
{
 "id": "D1-199",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow a user to view invoices and manage payment methods for a Microsoft Customer Agreement (MCA).</p><p>At which level are these permissions managed?</p>",
 "opts": [
  "In Microsoft Entra roles only",
  "In an Azure Policy",
  "In a resource group's access control (IAM)",
  "In the billing account and billing profile roles (Cost Management + Billing)"
 ],
 "ans": 3,
 "expl": "<p>For a Microsoft Customer Agreement, billing rights (invoices, payment methods, creating subscriptions) are managed in <b>Cost Management + Billing</b>, with roles specific to the billing account, billing profile, and invoice section (Billing profile owner, contributor, reader…).</p><p>A resource group's access control doesn't cover billing. Azure Policy grants no rights.</p>",
 "portal": {
  "path": [
   "Cost Management + Billing",
   "Billing profiles"
  ],
  "title": "Billing profile | Access control (IAM)",
  "menu": [
   "Overview",
   "Invoices",
   "Payment methods",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Billing profile contributor"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "MCA billing rights = billing account, billing profile, and invoice section roles."
},
{
 "id": "D1-200",
 "dom": 1,
 "type": "single",
 "stem": "<p>An administrator configured a monthly budget of €10,000 on Sub1. Spending reaches €12,000 at the end of the month.</p><p>What happened to Sub1's resources?</p>",
 "opts": [
  "They kept running normally",
  "New creations were blocked",
  "They switched to read-only",
  "They were stopped at €10,000"
 ],
 "ans": 0,
 "expl": "<p>A budget <b>imposes no limit</b>: it monitors and sends alerts. Resources keep running and being billed. To act automatically, you need an action group linked to automation.</p><p>Only some credit-based subscriptions (such as trial offers or Visual Studio credits) have a spending limit that disables resources.</p>",
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
    "€10,000"
   ],
   [
    "*Spent",
    "€12,000 · resources still running"
   ]
  ]
 },
 "keep": "A budget never stops anything without an action group and automation."
},
{
 "id": "D1-201",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow a user to read the secrets of the key vault KV2, which still uses the <b>Vault access policy</b> permission model.</p><p>What should you do?</p>",
 "opts": [
  "Assign the Reader role on KV2",
  "Add an access policy with the Get permission on secrets for this user",
  "Enable soft delete",
  "Assign the Key Vault Secrets User role to the user"
 ],
 "ans": 1,
 "expl": "<p>With the <b>Vault access policy</b> model, data access is granted through <b>access policies</b> (Get, List, Set… per object type). RBAC data roles such as Secrets User have <b>no effect</b> until the vault switches to the RBAC model.</p><p>Reader only gives access to the control plane. Soft delete protects against deletion; it grants no access.</p>",
 "portal": {
  "path": [
   "Key vaults",
   "KV2"
  ],
  "title": "KV2 | Access policies",
  "menu": [
   "Overview",
   "*Access policies",
   "Access configuration"
  ],
  "rows": [
   [
    "Permission model",
    "Vault access policy"
   ],
   [
    "*Secret permissions",
    "Get, List"
   ]
  ],
  "btn": "+ Create"
 },
 "keep": "Vault in access policy model: RBAC data roles have no effect."
},
{
 "id": "D1-202",
 "dom": 1,
 "type": "single",
 "stem": "<p>You create a <b>user-assigned</b> managed identity named ID-App. It must be used by 5 web apps.</p><p>Where should you assign the necessary roles?</p>",
 "opts": [
  "To the administrator who created ID-App",
  "To the web apps' resource group",
  "To ID-App, once, on the target resources",
  "To each web app separately"
 ],
 "ans": 2,
 "expl": "<p>A user-assigned identity is a single principal: you assign it the roles <b>once</b>, and all 5 apps that use it benefit. That's the advantage of this identity type when several resources need the same access.</p>",
 "portal": {
  "path": [
   "Managed Identities",
   "ID-App"
  ],
  "title": "ID-App | Azure role assignments",
  "menu": [
   "Overview",
   "*Azure role assignments",
   "Associated resources"
  ],
  "rows": [
   [
    "*Storage Blob Data Reader",
    "storage-app"
   ],
   [
    "Associated resources",
    "5 web apps"
   ]
  ],
  "btn": "+ Add role assignment"
 },
 "keep": "Shared user-assigned identity: roles assigned once to the identity."
},
{
 "id": "D1-203",
 "dom": 1,
 "type": "single",
 "stem": "<p>An auditor asks for proof that the policy “Storage accounts should use private link” has been respected in the subscription Sub1 for three months.</p><p>What should you provide?</p>",
 "opts": [
  "The Microsoft Entra ID sign-in logs",
  "The list of locks in Sub1",
  "The Advisor recommendations report",
  "The Azure Policy compliance history for this assignment"
 ],
 "ans": 3,
 "expl": "<p>Azure Policy keeps the <b>compliance history</b> of each assignment (chart and states). You can also export states with Azure Resource Graph.</p><p>Sign-in logs, Advisor, and locks don't show policy compliance.</p>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Private link required | Compliance",
  "menu": [
   "Overview",
   "*Compliance"
  ],
  "rows": [
   [
    "*History",
    "100% compliant over 90 days"
   ]
  ]
 },
 "keep": "Proof of compliance over time = Azure Policy compliance history (or Resource Graph)."
},
{
 "id": "D1-204",
 "dom": 1,
 "type": "single",
 "stem": "<p>Users in the Interns group must be able to sign in to the Azure portal, but must not be able to browse the Microsoft Entra admin center.</p><p>Which setting should you enable?</p>",
 "opts": [
  "Restrict access to Microsoft Entra admin center",
  "Block user sign-in",
  "Users can register applications: No",
  "Require SSPR registration"
 ],
 "ans": 0,
 "expl": "<p>The user setting <b>“Restrict access to Microsoft Entra admin center”</b> prevents non-admins from browsing the directory in the admin center. It's not a strong security measure (Microsoft Graph and PowerShell still work), but it meets the need.</p><p>Blocking sign-in would prevent any access. The other two settings have no effect on browsing the directory.</p>",
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
    "*Restrict access to Microsoft Entra admin center",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Hiding the directory from non-admins in the admin center = Restrict access to Microsoft Entra admin center."
},
{
 "id": "D1-205",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to give User20 the right to restart the VMs in all resource groups of Sub1, current and future, but no other right.</p><p>Which solution best follows the principle of least privilege?</p>",
 "opts": [
  "Virtual Machine Contributor on Sub1",
  "A custom role with virtualMachines/read and virtualMachines/restart/action, assigned on Sub1",
  "A custom role assigned on each resource group",
  "Contributor on Sub1"
 ],
 "ans": 1,
 "expl": "<p>A custom role limited to reading and restarting VMs, assigned on <b>Sub1</b>, covers all resource groups, including future ones.</p><p>Virtual Machine Contributor also allows creating, modifying, and deleting VMs. Assigning per group would miss new groups. Contributor gives all rights.</p>",
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
    "Microsoft.Compute/virtualMachines/read",
    "Allowed"
   ],
   [
    "*Microsoft.Compute/virtualMachines/restart/action",
    "Allowed"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Least privilege = minimal custom role, assigned at the scope that also covers the future."
},
{
 "id": "D1-206",
 "dom": 1,
 "type": "single",
 "stem": "<p>You want to know whether the Deny policy you are about to assign would block existing resources, before actually enforcing it.</p><p>What should you do?</p>",
 "opts": [
  "Start a remediation task",
  "Create a temporary ReadOnly lock",
  "Assign the policy with policy enforcement disabled (DoNotEnforce) and check compliance",
  "Assign the policy in Deny and watch for errors"
 ],
 "ans": 2,
 "expl": "<p>With <b>Policy enforcement: Disabled</b> (enforcementMode = DoNotEnforce), the assignment calculates compliance without blocking. You see which resources would be non-compliant, then enable enforcement when you're ready.</p><p>You can also use an Audit effect parameter. Assigning directly in Deny could block deployments.</p>",
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
 "keep": "Testing the impact of a Deny = Policy enforcement: Disabled, then read compliance."
},
{
 "id": "D1-207",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your organization's administrators must prove their identity with multifactor authentication before activating an eligible role in Privileged Identity Management.</p><p>Where do you configure this requirement?</p>",
 "opts": [
  "In the SSPR settings",
  "In Azure Policy",
  "In the device settings",
  "In the role settings in PIM"
 ],
 "ans": 3,
 "expl": "<p>Each role managed by PIM has <b>role settings</b>: maximum activation duration, multifactor authentication requirement, justification, approval, notifications.</p><p>SSPR, Azure Policy, and device settings don't control role activation.</p>",
 "portal": {
  "path": [
   "Privileged Identity Management",
   "Microsoft Entra roles",
   "Settings"
  ],
  "title": "Role setting | Activation",
  "menu": [
   "*Activation",
   "Assignment",
   "Notification"
  ],
  "rows": [
   [
    "*On activation, require",
    "Azure MFA"
   ],
   [
    "Require justification on activation",
    "Yes"
   ],
   [
    "Activation maximum duration",
    "4 hours"
   ]
  ],
  "btn": "Update"
 },
 "keep": "Activation rules (MFA, approval, duration) = Role settings in PIM."
},
{
 "id": "D1-208",
 "dom": 1,
 "type": "single",
 "stem": "<p>An Azure Policy forbids public IP addresses. An engineer must create a public IP address for Azure Bastion in RG-Bastion, and only there, for 6 months, with a record of the justification.</p><p>What should you create?</p>",
 "opts": [
  "A policy exemption on RG-Bastion with an expiration date",
  "A lock on RG-Bastion",
  "A second assignment with the Audit effect",
  "A custom role for the engineer"
 ],
 "ans": 0,
 "expl": "<p>An <b>exemption</b> exempts a scope from an assignment, with a category (Waiver or Mitigated), a description, and an <b>expiration date</b>. It's better than an exclusion for a temporary, justified case.</p><p>A second assignment doesn't cancel the first. No role bypasses a Deny policy. A lock is unrelated.</p>",
 "portal": {
  "path": [
   "Policy",
   "Exemptions"
  ],
  "title": "Create exemption",
  "menu": [
   "Overview",
   "*Exemptions"
  ],
  "rows": [
   [
    "Scope",
    "RG-Bastion"
   ],
   [
    "*Category",
    "Waiver"
   ],
   [
    "*Expiration date",
    "In 6 months"
   ],
   [
    "Description",
    "Public IP required by Azure Bastion"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Targeted, tracked, temporary waiver = exemption with an expiration date."
},
{
 "id": "D1-209",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need users to be able to see their licenses and apps, change their password, and register their authentication methods.</p><p>Which portal should you direct them to?</p>",
 "opts": [
  "The Azure DevOps portal",
  "The My Account portal (myaccount.microsoft.com)",
  "The Microsoft Entra admin center",
  "The Azure portal"
 ],
 "ans": 1,
 "expl": "<p>The <b>My Account</b> portal lets each user manage their security info, password, and devices, and see their subscriptions. The My Apps portal (myapps) lists applications.</p><p>The Azure portal and the Entra admin center are administration tools.</p>",
 "portal": {
  "path": [
   "myaccount.microsoft.com"
  ],
  "title": "My Account",
  "menu": [
   "Overview",
   "*Security info",
   "Password",
   "Devices",
   "Subscriptions"
  ],
  "rows": [
   [
    "*Add sign-in method",
    "Authenticator app, phone, email"
   ]
  ]
 },
 "keep": "User self-service = My Account (myaccount); apps = My Apps (myapps)."
},
{
 "id": "D1-210",
 "dom": 1,
 "type": "single",
 "stem": "<p>An administrator mistakenly assigned the Owner role on the production subscription to a group of 400 people. You need to fix this as fast as possible.</p><p>What should you do?</p>",
 "opts": [
  "Disable each account in the group",
  "Apply a ReadOnly lock to the subscription",
  "Delete the role assignment in the subscription's access control (IAM)",
  "Delete the group"
 ],
 "ans": 2,
 "expl": "<p>Deleting the <b>assignment</b> removes access for the whole group in one operation, without touching the group itself, which may be used elsewhere.</p><p>Deleting the group or the accounts would cause other damage. A ReadOnly lock would also block legitimate administrators, and wouldn't remove the right to assign roles.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub-Prod"
  ],
  "title": "Sub-Prod | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*GRP-400 · Owner",
    "Remove the assignment"
   ]
  ],
  "btn": "Remove"
 },
 "keep": "Removing access given to a group = delete the assignment, not the group."
},
{
 "id": "D1-211",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to find all resource groups in your subscriptions that contain no resources, so you can delete them.</p><p>Which tool can do this in a single query?</p>",
 "opts": [
  "Cost Management",
  "Azure Policy in Deny mode",
  "Microsoft Entra ID",
  "Azure Resource Graph Explorer"
 ],
 "ans": 3,
 "expl": "<p><b>Resource Graph Explorer</b> runs KQL queries on the inventory of resources and resource groups across all your subscriptions. A join between the <code>resourcecontainers</code> and <code>resources</code> tables finds the empty groups.</p><p>Cost Management only sees what costs money. Entra manages identities. Azure Policy isn't a query tool.</p>",
 "portal": {
  "path": [
   "Azure Resource Graph Explorer"
  ],
  "title": "Azure Resource Graph Explorer",
  "menu": [
   "*Query"
  ],
  "rows": [
   [
    "*Query",
    "resourcecontainers | where type == 'microsoft.resources/subscriptions/resourcegroups' | join kind=leftouter (resources …) | where isnull(nb)"
   ]
  ],
  "btn": "Run query"
 },
 "keep": "Inventory query across all subscriptions = Resource Graph (resources, resourcecontainers tables)."
},
{
 "id": "D1-212",
 "dom": 1,
 "type": "single",
 "stem": "<p>User21 has the Reader role on the subscription Sub1 and the Contributor role on RG3, which is part of Sub1.</p><p>What can he do?</p>",
 "opts": [
  "Read all resources in Sub1 and modify those in RG3",
  "Only read the resources in Sub1, because Reader is assigned higher up",
  "Only modify RG3, without seeing the rest",
  "Modify all resources in Sub1"
 ],
 "ans": 0,
 "expl": "<p>Roles are <b>additive</b>: Reader on Sub1 gives read access everywhere, Contributor on RG3 adds modification in RG3.</p><p>A role assigned higher up never restricts a role assigned lower down. Contributor on RG3 doesn't extend to the rest of the subscription.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG3"
  ],
  "title": "RG3 | Check access › User21",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "Reader",
    "Inherited from Sub1"
   ],
   [
    "*Contributor",
    "This scope (RG3)"
   ]
  ]
 },
 "keep": "Roles add up; a role higher up never limits a role lower down."
},
{
 "id": "D1-213",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your Microsoft Entra tenant contains a user named Admin3 who has the User Administrator role. Admin3 wants to reset the password of a Global Administrator.</p><p>Can he do it?</p>",
 "opts": [
  "Yes, but only if the Global Administrator allows it",
  "No, only a Global Administrator (or Privileged Authentication Administrator) can do it",
  "Yes, User Administrator can reset every password",
  "No, no administrator password can be reset"
 ],
 "ans": 1,
 "expl": "<p>User Administrator can reset the password of non-admin users and of some limited roles, but <b>not</b> that of a Global Administrator. You need a role at least as privileged: Global Administrator or Privileged Authentication Administrator.</p><p>This rule prevents an administrator from taking over an account more powerful than their own.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "GlobalAdmin1"
  ],
  "title": "GlobalAdmin1 | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Reset password",
    "Grayed out for User Administrator"
   ]
  ]
 },
 "keep": "You can't reset the password of a role more privileged than your own."
},
{
 "id": "D1-214",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow a user to view the list of Azure role assignments on Sub1, without being able to change anything, neither resources nor access.</p><p>Which role is enough?</p>",
 "opts": [
  "Owner",
  "Contributor",
  "Reader",
  "User Access Administrator"
 ],
 "ans": 2,
 "expl": "<p><b>Reader</b> includes <code>*/read</code>, so <code>Microsoft.Authorization/roleAssignments/read</code>: they see role assignments in the IAM tab, without being able to create any.</p><p>The other roles allow changing resources or access.</p>",
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
    "Reader"
   ],
   [
    "Role assignments",
    "Visible, read-only"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Reader also sees role assignments (roleAssignments/read)."
},
{
 "id": "D1-215",
 "dom": 1,
 "type": "single",
 "stem": "<p>A company wants to automatically apply, in each new subscription, a set of policies, role assignments, and baseline network resources. Azure Blueprints is no longer recommended.</p><p>Which approach does Microsoft recommend today?</p>",
 "opts": [
  "A script run manually by each administrator",
  "Tags on the subscriptions",
  "Locks on the root",
  "Azure Policy initiatives and templates (Template Specs or deployment stacks)"
 ],
 "ans": 3,
 "expl": "<p>Azure Blueprints is being retired. Microsoft recommends combining <b>Azure Policy initiatives</b> (governance) with ARM or Bicep <b>templates</b> published as Template Specs, or <b>deployment stacks</b>, which can also protect resources with deny assignments.</p>",
 "portal": {
  "path": [
   "Template specs"
  ],
  "title": "Create a template spec",
  "menu": [
   "*Basics",
   "Edit template"
  ],
  "rows": [
   [
    "*Name",
    "subscription-baseline"
   ],
   [
    "Content",
    "Resource groups, network, role assignments"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Replacement for Blueprints = Policy initiatives + Template Specs or deployment stacks."
},
{
 "id": "D1-216",
 "dom": 1,
 "type": "single",
 "stem": "<p>In the portal, the <b>Delete</b> option of the storage account storage8 returns the error: “The scope ... cannot perform delete operation because following scope(s) are locked”.</p><p>What should you do to delete storage8?</p>",
 "opts": [
  "Remove the lock from the storage account or its parent (resource group or subscription)",
  "Disable soft delete",
  "Empty all containers first",
  "Assign the Storage Blob Data Contributor role"
 ],
 "ans": 0,
 "expl": "<p>The message says a <b>lock</b> applies, on storage8 itself or inherited from its resource group or subscription. You must remove it (with the Owner or User Access Administrator role), delete the account, then put the lock back if needed.</p><p>The account's content, data roles, and soft delete aren't the cause.</p>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage8"
  ],
  "title": "storage8 | Locks",
  "menu": [
   "Overview",
   "*Locks"
  ],
  "rows": [
   [
    "*Inherited lock",
    "RG8 · Delete"
   ]
  ],
  "btn": "Delete"
 },
 "keep": "“scope(s) are locked” = a lock, direct or inherited; remove it before deleting."
},
{
 "id": "D1-217",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to automatically assign a Microsoft 365 license to all users whose country is France, with no manual group management.</p><p>Which combination should you use?</p>",
 "opts": [
  "A Microsoft 365 group with assigned membership",
  "A dynamic group (user.country -eq \"France\") with a license assigned to the group",
  "A France administrative unit with a license",
  "An Azure Policy on location"
 ],
 "ans": 1,
 "expl": "<p>A <b>dynamic group</b> fills itself automatically based on the <b>country</b> attribute, and <b>group-based licensing</b> assigns the license to each member. Both features require Entra ID P1.</p><p>You can't assign a license to an administrative unit. Azure Policy doesn't manage licenses. An assigned group requires manual management.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "License-France"
  ],
  "title": "License-France | Licenses",
  "menu": [
   "Overview",
   "Dynamic membership rules",
   "*Licenses"
  ],
  "rows": [
   [
    "*Rule",
    "(user.country -eq \"France\")"
   ],
   [
    "*License",
    "Microsoft 365 E3"
   ]
  ]
 },
 "keep": "Automatic license based on an attribute = dynamic group + license assigned to the group."
},
{
 "id": "D1-218",
 "dom": 1,
 "type": "single",
 "stem": "<p>A project's spending must be tracked across three subscriptions. Each project resource has the tag Project=Orion.</p><p>How do you get the project's total cost?</p>",
 "opts": [
  "Create a shared resource group",
  "Manually add up the budgets of the three subscriptions",
  "Cost analysis at the management group or billing account scope, filtered on the tag Project=Orion",
  "Check Azure Advisor"
 ],
 "ans": 2,
 "expl": "<p><b>Cost analysis</b> can be opened at a scope that covers several subscriptions (management group, billing account or profile) and filtered on a <b>tag</b>.</p><p>Budgets are thresholds, not spending. A resource group can't span several subscriptions. Advisor doesn't show spending.</p>",
 "portal": {
  "path": [
   "Management groups",
   "MG-Corp"
  ],
  "title": "MG-Corp | Cost analysis",
  "menu": [
   "Overview",
   "*Cost analysis"
  ],
  "rows": [
   [
    "Scope",
    "MG-Corp (3 subscriptions)"
   ],
   [
    "*Filter",
    "Tag: Project = Orion"
   ]
  ]
 },
 "keep": "Multi-subscription cost = cost analysis at a broad scope + tag filter."
},
{
 "id": "D1-219",
 "dom": 1,
 "type": "single",
 "stem": "<p>You move the subscription Sub5 from the management group MG-Dev to MG-Prod. MG-Prod has a Deny policy on VM sizes.</p><p>What happens to the existing VMs in Sub5 whose size is forbidden in MG-Prod?</p>",
 "opts": [
  "They are stopped",
  "They are resized automatically",
  "The subscription move is denied",
  "They keep running and become non-compliant"
 ],
 "ans": 3,
 "expl": "<p>After the move, Sub5 inherits MG-Prod's policies. Existing VMs are neither stopped nor modified: they show as <b>non-compliant</b>. New VMs of a forbidden size will be denied.</p><p>Azure Policy doesn't prevent moving a subscription.</p>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "VM sizes | Compliance",
  "menu": [
   "Overview",
   "*Compliance"
  ],
  "rows": [
   [
    "*Sub5 · existing VMs",
    "Non-compliant (still running)"
   ]
  ]
 },
 "keep": "Changing scope stops nothing: existing resources become non-compliant, new ones are denied."
},
{
 "id": "D1-220",
 "dom": 1,
 "type": "single",
 "stem": "<p>A guest user was added a year ago for a finished project. You need to remove inactive guests automatically.</p><p>Which feature fits best?</p>",
 "opts": [
  "An access review of guest users, with results applied automatically",
  "A budget alert",
  "A group expiration policy",
  "A resource lock"
 ],
 "ans": 0,
 "expl": "<p><b>Access reviews</b> can target guests, ask for validation (or rely on inactivity), and <b>apply results automatically</b>: remove access, or block and then delete denied accounts.</p><p>Expiration concerns Microsoft 365 groups, not accounts. The other two options are unrelated.</p>",
 "portal": {
  "path": [
   "Identity Governance",
   "Access reviews"
  ],
  "title": "New access review",
  "menu": [
   "*Access reviews"
  ],
  "rows": [
   [
    "Scope",
    "Guest users only"
   ],
   [
    "Inactive for",
    "90 days"
   ],
   [
    "*Action on denied guests",
    "Block sign-in for 30 days, then remove"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Cleaning up inactive guests = access review with automatic application."
},
{
 "id": "D1-221",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to create 20 identical resource groups (same tags, locks, and role assignments) for 20 projects, in a repeatable way.</p><p>Which method fits best?</p>",
 "opts": [
  "Create each group by hand in the portal",
  "A Bicep template deployed at the subscription scope",
  "Use Azure Advisor",
  "Copy the groups with the portal's Clone option"
 ],
 "ans": 1,
 "expl": "<p>A <b>Bicep</b> (or ARM) template at the <b>subscription</b> scope (<code>targetScope = 'subscription'</code>) can create resource groups, with their tags, locks, and role assignments, in a repeatable way.</p><p>The portal has no option to clone a resource group. Manual creation is slow and error-prone.</p>",
 "portal": {
  "path": [
   "Deployments",
   "Subscription"
  ],
  "title": "Custom deployment",
  "menu": [
   "*Basics",
   "Review + create"
  ],
  "rows": [
   [
    "*targetScope",
    "subscription"
   ],
   [
    "Resources",
    "20 resource groups + locks + roles"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Creating resource groups from a template = Bicep at the subscription scope."
},
{
 "id": "D1-222",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your organization wants new subscriptions to be placed automatically under MG-Sandbox, not under the root.</p><p>What should you configure?</p>",
 "opts": [
  "An Azure Policy on the root",
  "A tag on MG-Sandbox",
  "The default management group in the hierarchy settings",
  "A lock on the root"
 ],
 "ans": 2,
 "expl": "<p>The <b>hierarchy settings</b> let you choose the <b>default management group</b> where new subscriptions are placed. You can also require permission there to create management groups.</p>",
 "portal": {
  "path": [
   "Management groups"
  ],
  "title": "Hierarchy settings",
  "menu": [
   "Management groups",
   "*Settings"
  ],
  "rows": [
   [
    "*Default management group",
    "MG-Sandbox"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Destination of new subscriptions = default management group."
},
{
 "id": "D1-223",
 "dom": 1,
 "type": "single",
 "stem": "<p>An internal application must read the profile of signed-in users, on their behalf, through Microsoft Graph.</p><p>Which type of permission should you configure in the app registration?</p>",
 "opts": [
  "An application permission User.ReadWrite.All",
  "A managed identity",
  "An Azure Reader role",
  "A delegated permission User.Read"
 ],
 "ans": 3,
 "expl": "<p>A <b>delegated permission</b> acts on behalf of the signed-in user, with at most their own rights. <code>User.Read</code> lets them read their profile and doesn't require admin consent.</p><p>An application permission acts with no user, with rights over the whole directory: too broad. Azure roles don't apply to Graph.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "App registrations",
   "App-Internal"
  ],
  "title": "App-Internal | API permissions",
  "menu": [
   "Overview",
   "*API permissions"
  ],
  "rows": [
   [
    "*Microsoft Graph · User.Read",
    "Delegated"
   ]
  ],
  "btn": "+ Add a permission"
 },
 "keep": "On behalf of the user = delegated permission. With no user = application permission."
},
{
 "id": "D1-224",
 "dom": 1,
 "type": "single",
 "stem": "<p>You want to prevent users from consenting on their own to third-party applications that request access to their data.</p><p>Where should you configure this setting?</p>",
 "opts": [
  "Enterprise applications > Consent and permissions",
  "Subscription > Policies",
  "Device settings",
  "External collaboration settings"
 ],
 "ans": 0,
 "expl": "<p>The <b>User consent for applications</b> setting is in <b>Enterprise applications > Consent and permissions</b>. You can turn it off, or limit it to verified publishers and low-risk permissions, and enable an admin consent request workflow.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Enterprise applications"
  ],
  "title": "Consent and permissions",
  "menu": [
   "All applications",
   "*Consent and permissions"
  ],
  "rows": [
   [
    "*User consent for applications",
    "Do not allow user consent"
   ],
   [
    "Admin consent requests",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Blocking user consent = Enterprise applications > Consent and permissions."
},
{
 "id": "D1-225",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to give an external team access to a single resource group for 3 months. The access must disappear automatically afterward.</p><p>Which solution, with Microsoft Entra ID P2, takes the least management?</p>",
 "opts": [
  "A lock on the resource group",
  "An active Azure role assignment in PIM with an end date",
  "A classic assignment, to delete in 3 months",
  "A 3-month budget"
 ],
 "ans": 1,
 "expl": "<p>PIM lets you create assignments (active or eligible) with a <b>start and end date</b>. At the end date, access is removed automatically.</p><p>A classic assignment depends on someone remembering to delete it. The other two options don't manage access.</p>",
 "portal": {
  "path": [
   "Privileged Identity Management",
   "Azure resources",
   "RG-Ext"
  ],
  "title": "RG-Ext | Add assignments",
  "menu": [
   "Membership",
   "*Setting"
  ],
  "rows": [
   [
    "*Assignment type",
    "Active"
   ],
   [
    "*End date",
    "In 3 months"
   ]
  ],
  "btn": "Assign"
 },
 "keep": "Access that expires on its own = PIM assignment with an end date."
},
{
 "id": "D1-226",
 "dom": 1,
 "type": "single",
 "stem": "<p>An administrator asks you why the built-in <b>Contributor</b> role doesn't let him grant access, even though it gives “all rights”.</p><p>What is the correct explanation?</p>",
 "opts": [
  "Contributor is a Microsoft Entra role",
  "Contributor applies only to resource groups",
  "Contributor contains Actions * but NotActions Microsoft.Authorization/*/Delete, */Write, and elevateAccess/Action",
  "Contributor contains only read actions"
 ],
 "ans": 2,
 "expl": "<p>The Contributor definition grants <code>*</code> in Actions, but excludes in NotActions writing and deleting in <code>Microsoft.Authorization</code> (role assignments, locks, authorization policies) as well as elevating access. It therefore manages everything except access.</p><p>Contributor can be assigned at any scope and is an Azure role.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1",
   "Access control (IAM)"
  ],
  "title": "Contributor | Permissions",
  "menu": [
   "*Permissions",
   "JSON"
  ],
  "rows": [
   [
    "Actions",
    "*"
   ],
   [
    "*NotActions",
    "Microsoft.Authorization/*/Delete, */Write, elevateAccess/Action"
   ]
  ]
 },
 "keep": "Contributor = everything except writing in Microsoft.Authorization (roles, locks)."
},
{
 "id": "D1-227",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to assign the same custom role to a group in 12 subscriptions, without repeating the operation in each subscription.</p><p>What should you do?</p>",
 "opts": [
  "Assign the role to the Microsoft Entra tenant",
  "Create 12 custom roles",
  "Use a shared tag",
  "Include the parent management group in AssignableScopes and assign the role on that management group"
 ],
 "ans": 3,
 "expl": "<p>If the 12 subscriptions are under the same <b>management group</b>, the custom role can have that group in AssignableScopes (as long as it contains no DataActions). A single assignment on the management group covers all 12 subscriptions.</p>",
 "portal": {
  "path": [
   "Management groups",
   "MG-Apps"
  ],
  "title": "MG-Apps | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*Role",
    "Custom role (AssignableScopes: MG-Apps)"
   ],
   [
    "Members",
    "GRP-Ops"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Custom role across several subscriptions = management group in AssignableScopes (no DataActions)."
},
{
 "id": "D1-228",
 "dom": 1,
 "type": "single",
 "stem": "<p>You find that a user was deleted from Microsoft Entra ID 40 days ago. He was supposed to be restored.</p><p>What can you do?</p>",
 "opts": [
  "Create a new account: the old one is permanently deleted after 30 days",
  "Restore him from Deleted users",
  "Restore him from an Azure Backup backup",
  "Restore him from the audit log"
 ],
 "ans": 0,
 "expl": "<p>After <b>30 days</b>, a deleted user is <b>permanently</b> deleted. You must create a new account, which will have a new object ID: groups, licenses, and roles must be reassigned.</p><p>Azure Backup doesn't back up Entra objects. The audit log records the deletion but restores nothing.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users"
  ],
  "title": "Deleted users",
  "menu": [
   "All users",
   "*Deleted users"
  ],
  "rows": [
   [
    "*User deleted 40 days ago",
    "Not listed (permanently deleted)"
   ]
  ]
 },
 "keep": "Past 30 days, a user is lost: new account, new ID."
},
{
 "id": "D1-229",
 "dom": 1,
 "type": "single",
 "stem": "<p>The finance team asks for all resources without the CostCenter tag to be visible on a dashboard, without blocking any deployment.</p><p>Which solution fits?</p>",
 "opts": [
  "A lock on each resource group",
  "A policy with the Audit effect, viewed on the Compliance page",
  "One budget per cost center",
  "A policy with the Deny effect"
 ],
 "ans": 1,
 "expl": "<p>The <b>Audit</b> effect marks resources without the tag as non-compliant, without blocking anything. Azure Policy's <b>Compliance</b> page serves as the dashboard.</p><p>Deny would block deployments, which is ruled out.</p>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Require CostCenter | Compliance",
  "menu": [
   "Overview",
   "*Compliance"
  ],
  "rows": [
   [
    "*Effect",
    "Audit"
   ],
   [
    "Non-compliant resources",
    "Listed, nothing blocked"
   ]
  ]
 },
 "keep": "See without blocking = Audit + Compliance page."
},
{
 "id": "D1-230",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow a user to see all resources in a resource group, and to create support tickets, without changing anything.</p><p>Which combination of roles should you assign on the resource group?</p>",
 "opts": [
  "Reader only",
  "Contributor",
  "Reader and Support Request Contributor",
  "Owner"
 ],
 "ans": 2,
 "expl": "<p><b>Reader</b> lets you see everything without changing anything. <b>Support Request Contributor</b> adds creating support requests. Roles add up.</p><p>Contributor and Owner allow changes. Reader alone doesn't allow opening a support request.</p>",
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
    "*Reader",
    "User"
   ],
   [
    "*Support Request Contributor",
    "User"
   ]
  ]
 },
 "keep": "Combine narrow roles rather than one broad role: rights add up."
}
);
