/* Domain 1: identities and governance (batch B : D1-011 to D1-060) */
AZ.questions.push(
{
 "id": "D1-011",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your Microsoft Entra tenant contains 500 users. The <b>Department</b> attribute of every user is populated.</p><p>You need to create a group named Sales whose members are added and removed automatically based on the <b>Sales</b> value of this attribute.</p><p>Which membership type should you choose when you create the group?</p>",
 "opts": [
  "Dynamic User",
  "Synced from AD DS",
  "Dynamic Device",
  "Assigned"
 ],
 "ans": 0,
 "expl": "<p>A group with <b>Dynamic User</b> membership evaluates a rule on user attributes, for example <code>(user.department -eq \"Sales\")</code>, and adds or removes members on its own. It requires a Microsoft Entra ID P1 license.</p><ul><li><b>Assigned</b>: members are added manually; nothing is automatic.</li><li><b>Dynamic Device</b>: the rule applies to device attributes, and the group can only contain devices.</li><li><b>Synced from AD DS</b> is not a membership type you choose in Entra: it is the source of a group created in on-premises Active Directory.</li></ul>",
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
 "keep": "Members added automatically based on an attribute = dynamic group (Entra ID P1 license). user.* attributes for users, device.* for devices."
},
{
 "id": "D1-012",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>In Microsoft Entra ID, you create a group named Group1 of type <b>Microsoft 365</b> with the <b>Assigned</b> membership type.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "You can add guest users (B2B) as members of Group1.",
   "a": 0
  },
  {
   "l": "You can add a security group as a member of Group1.",
   "a": 1
  },
  {
   "l": "You can add devices as members of Group1.",
   "a": 1
  }
 ],
 "expl": "<p>A <b>Microsoft 365</b> group contains <b>users</b> only, members or guests.</p><ul><li><b>Guests: Yes.</b> A guest is a user object; it can join a Microsoft 365 group.</li><li><b>Nested group: No.</b> Microsoft 365 groups don't support nesting. Only a security group can contain other groups.</li><li><b>Devices: No.</b> Only a security group can contain devices (with assigned or dynamic device membership).</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "Group1"
  ],
  "title": "Group1 | Members",
  "menu": [
   "Overview",
   "*Members",
   "Owners",
   "Licenses"
  ],
  "rows": [
   [
    "Group type",
    "Microsoft 365"
   ],
   [
    "*Add members",
    "Users only (members or guests)"
   ]
  ]
 },
 "keep": "Microsoft 365 group: users only (members or guests). Nested groups and devices: security groups only."
},
{
 "id": "D1-013",
 "dom": 1,
 "type": "single",
 "stem": "<p>You create the user User1 in Microsoft Entra ID. You need to assign a Microsoft 365 E3 license to User1 from the Azure portal.</p><p>Which property of User1 must you set before you can assign the license?</p>",
 "opts": [
  "Department",
  "Usage location",
  "User principal name",
  "Manager"
 ],
 "ans": 1,
 "expl": "<p>The <b>usage location</b> (usageLocation) is mandatory: some services are not available everywhere, and Microsoft must know in which country the license will be used. Without it, the assignment fails.</p><p>Department and manager are optional. The user principal name (UPN) already exists, since it is required to create any user.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "User1"
  ],
  "title": "User1 | Properties",
  "menu": [
   "Overview",
   "*Properties",
   "Licenses"
  ],
  "rows": [
   [
    "#Settings",
    ""
   ],
   [
    "*Usage location",
    "France"
   ]
  ]
 },
 "keep": "License = usage location required."
},
{
 "id": "D1-014",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your organization buys 200 Microsoft 365 E3 licenses. You need to ensure that any user added to the Accounting security group automatically receives a license, and loses it when they leave the group.</p><p>What should you do?</p>",
 "opts": [
  "Create a dynamic membership rule",
  "Assign the License Administrator role",
  "Assign the license to the Accounting group",
  "Create an Azure Policy"
 ],
 "ans": 2,
 "expl": "<p><b>Group-based licensing</b> lets you assign a license to a group: every member receives it, and loses it when leaving the group. This feature requires Microsoft Entra ID P1 (or a plan that includes it, such as Microsoft 365 E3).</p><ul><li>A <b>dynamic rule</b> manages who is a member of the group, not licenses.</li><li><b>Azure Policy</b> applies to Azure resources, not to users or licenses.</li><li>The <b>License Administrator</b> role gives someone the right to manage licenses; it automates nothing.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "Accounting"
  ],
  "title": "Accounting | Licenses",
  "menu": [
   "Overview",
   "Members",
   "*Licenses"
  ],
  "rows": [
   [
    "#Assignments",
    ""
   ],
   [
    "*Product",
    "Microsoft 365 E3"
   ],
   [
    "State",
    "Active for all members"
   ]
  ],
  "btn": "+ Assignments"
 },
 "keep": "License assigned to a group: every member gets it, and loses it when leaving the group. Included in Entra ID P1."
},
{
 "id": "D1-015",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You enable self-service password reset (SSPR) for all users in your Microsoft Entra tenant. The number of methods required to reset is set to 2.</p><p>Which <b>two</b> authentication methods can you offer users?</p><p>Each correct answer presents a complete solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Company network IP address",
  "Verification code sent by email",
  "Certificate of the user's computer",
  "Notification in the Microsoft Authenticator app"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<p>SSPR offers: mobile app notification or code, email, mobile phone (SMS or call), office phone, and security questions.</p><ul><li><b>Authenticator notification: yes.</b></li><li><b>Email code: yes.</b> The address must be outside the tenant, since a user who lost their password cannot read their mailbox.</li><li><b>Computer certificate: no.</b> It is not an SSPR method.</li><li><b>IP address: no.</b> A network location is used in Conditional Access; it doesn't prove identity.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Password reset"
  ],
  "title": "Password reset | Authentication methods",
  "menu": [
   "Properties",
   "*Authentication methods",
   "Registration",
   "Notifications"
  ],
  "rows": [
   [
    "Number of methods required to reset",
    "2"
   ],
   [
    "*Mobile app notification",
    "Checked"
   ],
   [
    "*Email",
    "Checked"
   ],
   [
    "Mobile phone",
    "Checked"
   ],
   [
    "Security questions",
    "Unchecked"
   ]
  ],
  "btn": "Save"
 },
 "keep": "SSPR methods: Authenticator app (notification or code), email, mobile phone, office phone, security questions. No certificate, no IP address."
},
{
 "id": "D1-016",
 "dom": 1,
 "type": "single",
 "stem": "<p>You configure self-service password reset (SSPR) in Microsoft Entra ID. Only members of the Pilot group must be able to use it during the test.</p><p>Which value should you choose for <b>Self service password reset enabled</b>?</p>",
 "opts": [
  "Guests only",
  "All",
  "None",
  "Selected"
 ],
 "ans": 3,
 "expl": "<p>The setting has three values: <b>None</b>, <b>Selected</b>, and <b>All</b>. <b>Selected</b> limits SSPR to the members of one chosen group, here Pilot.</p><p><b>None</b> turns SSPR off for users; <b>All</b> turns it on for everyone. “Guests only” does not exist.</p><p>Remember: administrators always have SSPR enabled, with a stricter policy (two methods), whatever this setting is.</p>",
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
 "keep": "SSPR: None, Selected (one group only) or All. Administrators always have it, with a stricter policy."
},
{
 "id": "D1-017",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your Microsoft Entra tenant contains the users of three branches: Paris, Lyon, and Lille. You need to allow Admin2 to reset the passwords of the users in <b>Lyon only</b>.</p><p>The solution must follow the principle of least privilege. What should you do?</p>",
 "opts": [
  "Create a Lyon administrative unit and assign Admin2 the Helpdesk Administrator role on it",
  "Assign Admin2 the Helpdesk Administrator role for the whole tenant",
  "Create a Lyon security group and make Admin2 an owner of the group",
  "Create a Lyon management group and assign Admin2 the Contributor role on it"
 ],
 "ans": 0,
 "expl": "<p>An <b>administrative unit</b> restricts the scope of a Microsoft Entra role to a set of users, groups, or devices. The <b>Helpdesk Administrator</b> role assigned on the Lyon unit lets Admin2 reset the passwords of Lyon users only.</p><ul><li>The same role for the <b>whole tenant</b> grants too much.</li><li>A <b>group owner</b> manages the group's members, not their passwords.</li><li>A <b>management group</b> organizes Azure subscriptions; it doesn't manage Entra users, and Contributor is an Azure role, not an Entra role.</li></ul>",
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
 "keep": "Restricting an Entra role to part of the users (branch, department) = administrative unit."
},
{
 "id": "D1-018",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to assign each administrator the appropriate built-in Microsoft Entra role. The solution must follow the principle of least privilege.</p><p>Which role should you assign for each need?</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "srcs": [
  "Global Administrator",
  "User Administrator",
  "Helpdesk Administrator",
  "Groups Administrator",
  "Global Reader"
 ],
 "tgtHead": [
  "Need",
  "Role"
 ],
 "tgts": [
  {
   "l": "Create and delete users",
   "a": 1
  },
  {
   "l": "Reset the password of non-admin users",
   "a": 2
  },
  {
   "l": "Create groups and manage their expiration settings",
   "a": 3
  },
  {
   "l": "View the whole tenant configuration without changing anything",
   "a": 4
  }
 ],
 "expl": "<ul><li><b>User Administrator</b>: creates, modifies, and deletes users and groups, and resets the passwords of some administrators.</li><li><b>Helpdesk Administrator</b>: resets the passwords of non-admin users (and other helpdesk admins). It is the most restricted role for this need.</li><li><b>Groups Administrator</b>: manages groups and their settings, such as expiration and naming policy.</li><li><b>Global Reader</b>: reads everything a Global Administrator can read, without changing anything.</li></ul><p><b>Global Administrator</b> would work everywhere, but grants far too much.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Roles and administrators"
  ],
  "title": "Roles and administrators | All roles",
  "menu": [
   "Overview",
   "Users",
   "Groups",
   "*Roles and administrators"
  ],
  "rows": [
   [
    "User Administrator",
    "Manage users and groups"
   ],
   [
    "*Helpdesk Administrator",
    "Reset passwords for non-administrators"
   ],
   [
    "Groups Administrator",
    "Manage groups and their settings"
   ],
   [
    "Global Reader",
    "Read everything, change nothing"
   ]
  ]
 },
 "keep": "Standard user's password = Helpdesk Administrator. Create accounts = User Administrator. See everything without touching = Global Reader."
},
{
 "id": "D1-019",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to invite 300 external partners as guest users into your Microsoft Entra tenant, in a single operation.</p><p>What should you use in the portal?</p>",
 "opts": [
  "Bulk create users with a CSV file",
  "Bulk invite users with a CSV file",
  "Import users from a dynamic group",
  "Sync users with Microsoft Entra Connect"
 ],
 "ans": 1,
 "expl": "<p>The <b>Bulk invite</b> operation uses a downloadable CSV template: email address, redirect URL, whether to send the invitation message. It creates <b>guest</b> accounts.</p><ul><li><b>Bulk create</b> creates internal <b>member</b> accounts, not guests.</li><li>A <b>dynamic group</b> groups existing users; it creates none.</li><li><b>Microsoft Entra Connect</b> syncs accounts from your on-premises Active Directory, not external people.</li></ul>",
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
 "keep": "Many guests at once = Bulk invite (CSV). Bulk create = member accounts."
},
{
 "id": "D1-020",
 "dom": 1,
 "type": "single",
 "stem": "<p>Users in your Microsoft Entra tenant must be able to invite guests only if the guests belong to the <b>fabrikam.com</b> and <b>tailspin.com</b> domains.</p><p>Which setting in <b>External collaboration settings</b> should you configure?</p>",
 "opts": [
  "Guest invite restrictions",
  "Guest user access restrictions",
  "Collaboration restrictions",
  "Cross-tenant access settings"
 ],
 "ans": 2,
 "expl": "<p><b>Collaboration restrictions</b> let you allow invitations only to a list of domains (allowlist) or block them for some domains (denylist). Here, you choose “Allow invitations only to the specified domains”.</p><ul><li><b>Guest user access restrictions</b>: what guests can see in the directory.</li><li><b>Guest invite restrictions</b>: <i>who</i> in your organization can invite (everyone, members, some roles, no one), not <i>which domains</i>.</li><li><b>Cross-tenant access settings</b>: B2B rules with other Entra tenants (trusting MFA, etc.), broader than the requested domain list.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "External Identities"
  ],
  "title": "External collaboration settings",
  "menu": [
   "Overview",
   "*External collaboration settings",
   "Cross-tenant access settings"
  ],
  "rows": [
   [
    "#Collaboration restrictions",
    ""
   ],
   [
    "*Choice",
    "Allow invitations only to the specified domains (most restrictive)"
   ],
   [
    "*Target domains",
    "fabrikam.com, tailspin.com"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Limiting invited domains = Collaboration restrictions (allowlist or denylist)."
},
{
 "id": "D1-021",
 "dom": 1,
 "type": "single",
 "stem": "<p>In the external collaboration settings, <b>Guest invite restrictions</b> is set to “Only users assigned to specific admin roles can invite guest users”.</p><p>User3 is not an administrator. He must be able to invite guests. The solution must follow the principle of least privilege.</p><p>Which role should you assign to User3?</p>",
 "opts": [
  "Groups Administrator",
  "Application Administrator",
  "User Administrator",
  "Guest Inviter"
 ],
 "ans": 3,
 "expl": "<p>The <b>Guest Inviter</b> role allows just one thing: inviting guest users. It is the least privilege, and it is one of the roles recognized by this setting.</p><p>User Administrator can invite too, but can also create, modify, and delete users: too many rights. Groups Administrator and Application Administrator are not used to invite guests.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "User3"
  ],
  "title": "User3 | Assigned roles",
  "menu": [
   "Overview",
   "*Assigned roles",
   "Groups"
  ],
  "rows": [
   [
    "*Role",
    "Guest Inviter"
   ],
   [
    "Assignment type",
    "Active"
   ]
  ],
  "btn": "+ Add assignments"
 },
 "keep": "Only the right to invite, nothing else = Guest Inviter."
},
{
 "id": "D1-022",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Your company manages several types of devices. You need to choose the appropriate Microsoft Entra device state for each situation.</p><p>To answer, drag the appropriate state to each situation. Each state may be used once, more than once, or not at all.</p>",
 "srcLabel": "States",
 "srcs": [
  "Microsoft Entra registered",
  "Microsoft Entra joined",
  "Microsoft Entra hybrid joined"
 ],
 "tgtHead": [
  "Situation",
  "State"
 ],
 "tgts": [
  {
   "l": "An employee's personal smartphone, used to read work email",
   "a": 0
  },
  {
   "l": "A company Windows 11 laptop, with no on-premises Active Directory",
   "a": 1
  },
  {
   "l": "A Windows PC joined to the on-premises AD DS domain that must also be known to Microsoft Entra ID",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Registered</b>: personal devices (BYOD). The user signs in with the device's personal account and adds the work account.</li><li><b>Joined</b>: company-owned Windows 10/11 devices, managed only from the cloud. You sign in with your Entra account.</li><li><b>Hybrid joined</b>: devices joined to the on-premises Active Directory domain <i>and</i> registered in Microsoft Entra ID, usually through Microsoft Entra Connect.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Devices",
   "All devices"
  ],
  "title": "Devices | All devices",
  "menu": [
   "Overview",
   "*All devices",
   "Device settings"
  ],
  "rows": [
   [
    "#“Join type” column",
    ""
   ],
   [
    "*Microsoft Entra registered",
    "Personal phone (BYOD)"
   ],
   [
    "*Microsoft Entra joined",
    "Company laptop, cloud only"
   ],
   [
    "*Microsoft Entra hybrid joined",
    "PC joined to on-premises AD"
   ]
  ]
 },
 "keep": "Personal = registered. Company without AD = joined. Company with on-premises AD = hybrid joined."
},
{
 "id": "D1-023",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to prevent users from joining more than <b>5</b> devices to Microsoft Entra ID.</p><p>Where do you configure this setting?</p>",
 "opts": [
  "In Devices > Device settings",
  "In Users > User settings",
  "In an Azure Policy",
  "In the properties of each user"
 ],
 "ans": 0,
 "expl": "<p>The <b>Devices > Device settings</b> page contains “Maximum number of devices per user” (20 by default), along with “Users may join devices to Microsoft Entra” and “Users may register their devices”.</p><p>Azure Policy governs Azure resources, not Entra devices. User settings and user properties don't contain this limit.</p>",
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
 "keep": "Device limit per user = Devices > Device settings (20 by default)."
},
{
 "id": "D1-024",
 "dom": 1,
 "type": "single",
 "stem": "<p>User4 has the <b>Contributor</b> role on the subscription Sub1. He must also be able to assign Azure roles to other users on Sub1.</p><p>The solution must follow the principle of least privilege. Which additional role should you assign to him on Sub1?</p>",
 "opts": [
  "Global Administrator",
  "User Access Administrator",
  "Owner",
  "Reader"
 ],
 "ans": 1,
 "expl": "<p><b>Contributor</b> manages all resources, but cannot assign roles: it lacks the <code>Microsoft.Authorization/roleAssignments/write</code> actions. <b>User Access Administrator</b> adds exactly access management, and nothing else.</p><ul><li><b>Owner</b> would also work (resources + access), but replacing or combining it with Contributor gives more than the stated need.</li><li><b>Global Administrator</b> is a Microsoft Entra role, not an Azure role on a subscription.</li><li><b>Reader</b> only allows reading.</li></ul><p>The newer <b>Role Based Access Control Administrator</b> role can also assign roles, with optional conditions; it would be a correct answer if offered.</p>",
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
    "#Add role assignment",
    ""
   ],
   [
    "*Role",
    "User Access Administrator"
   ],
   [
    "Members",
    "User4"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Contributor manages everything except access. Adding only access management = User Access Administrator (or Role Based Access Control Administrator)."
},
{
 "id": "D1-025",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You have the following hierarchy: the management group MG1 contains the subscription Sub1, which contains the resource group RG1, which contains the virtual machine VM1.</p><p>You make the following role assignments:</p>",
 "docs": [
  {
   "t": "Assignments",
   "h": "<p><b>Role assignments</b></p><div class=\"tw\"><table class=\"tbl\"><tr><th>User</th><th>Role</th><th>Scope</th></tr><tr><td>User1</td><td>Reader</td><td>MG1</td></tr><tr><td>User2</td><td>Contributor</td><td>RG1</td></tr><tr><td>User3</td><td>Virtual Machine Contributor</td><td>VM1</td></tr></table></div>"
  }
 ],
 "rows": [
  {
   "l": "User1 can view the properties of VM1.",
   "a": 0
  },
  {
   "l": "User2 can create a storage account in RG1.",
   "a": 0
  },
  {
   "l": "User3 can create a new virtual machine in RG1.",
   "a": 1
  }
 ],
 "expl": "<p>Azure roles are <b>inherited</b> downward: management group → subscription → resource group → resource.</p><ul><li><b>User1: Yes.</b> Reader on MG1 applies to everything below, including VM1.</li><li><b>User2: Yes.</b> Contributor on RG1 can create any resource in RG1.</li><li><b>User3: No.</b> His role is assigned on the VM1 resource only. Creating a VM is an action on the resource group, outside his scope.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "#Role assignments",
    ""
   ],
   [
    "User1 · Reader",
    "Inherited (MG1)"
   ],
   [
    "User2 · Contributor",
    "Inherited (RG1)"
   ],
   [
    "*User3 · Virtual Machine Contributor",
    "This resource"
   ]
  ]
 },
 "keep": "A role assigned on a resource allows nothing above it: creating a resource happens at the resource group level."
},
{
 "id": "D1-026",
 "dom": 1,
 "type": "single",
 "stem": "<p>You create an Azure custom role. It must be assignable in the subscriptions Sub1 and Sub2 only.</p><p>Which property of the role definition should you configure?</p>",
 "opts": [
  "Actions",
  "DataActions",
  "AssignableScopes",
  "NotActions"
 ],
 "ans": 2,
 "expl": "<p><b>AssignableScopes</b> sets where the role can be assigned: here <code>/subscriptions/&lt;Sub1 id&gt;</code> and <code>/subscriptions/&lt;Sub2 id&gt;</code>. You can also use a management group or a resource group.</p><ul><li><b>Actions</b>: allowed control plane operations (resource management).</li><li><b>NotActions</b>: operations removed from Actions. It is not a deny: another role can still grant them.</li><li><b>DataActions</b>: operations on data, for example reading a blob.</li></ul>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1",
   "Access control (IAM)"
  ],
  "title": "Create a custom role",
  "menu": [
   "Basics",
   "Permissions",
   "*Assignable scopes",
   "JSON"
  ],
  "rows": [
   [
    "*Assignable scope",
    "/subscriptions/<Sub1 id>"
   ],
   [
    "*Assignable scope",
    "/subscriptions/<Sub2 id>"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "AssignableScopes = where the role can be assigned. Actions/NotActions = control plane. DataActions = data."
},
{
 "id": "D1-027",
 "dom": 1,
 "type": "single",
 "stem": "<p>An application must read the blobs in the data container of the storage account storage1 by using its Microsoft Entra identity. It must not be able to modify them or manage the storage account.</p><p>Which role should you assign to the application's identity?</p>",
 "opts": [
  "Reader on storage1",
  "Storage Account Contributor on storage1",
  "Storage Blob Data Contributor on the data container",
  "Storage Blob Data Reader on the data container"
 ],
 "ans": 3,
 "expl": "<p>Reading a blob's content is a <b>data</b> operation (DataActions). The <b>Storage Blob Data Reader</b> role grants it, and the container scope limits access to data.</p><ul><li><b>Reader</b> covers only the control plane: you see the account and its properties, but not blob content with your identity.</li><li><b>Storage Account Contributor</b> manages the account (and can read the access keys): too many rights.</li><li><b>Storage Blob Data Contributor</b> also allows writing and deleting.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1",
   "Containers",
   "data"
  ],
  "title": "data | Access Control (IAM)",
  "menu": [
   "Overview",
   "*Access Control (IAM)",
   "Access policy"
  ],
  "rows": [
   [
    "*Role",
    "Storage Blob Data Reader"
   ],
   [
    "Assign access to",
    "Managed identity"
   ],
   [
    "Members",
    "app-reporting"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Reading blobs with an Entra identity = data role (Storage Blob Data Reader). Reader alone doesn't see the data."
},
{
 "id": "D1-028",
 "dom": 1,
 "type": "single",
 "stem": "<p>Admin1 is a <b>Global Administrator</b> of your Microsoft Entra tenant. He must be able to manage access to <b>all</b> subscriptions and management groups in the tenant, including those on which he has no Azure role.</p><p>What should you do?</p>",
 "opts": [
  "Enable “Access management for Azure resources” in the Microsoft Entra ID properties",
  "Add Admin1 to the root management group",
  "Assign Admin1 the Owner role on each subscription",
  "Assign Admin1 the Privileged Role Administrator role"
 ],
 "ans": 0,
 "expl": "<p>The <b>Access management for Azure resources</b> setting (elevate access), in the Microsoft Entra ID properties, gives the Global Administrator the <b>User Access Administrator</b> role at the root scope <code>/</code>. He can then assign himself the roles he needs on any subscription or management group.</p><ul><li>To assign Owner on each subscription, he would already need rights on those subscriptions.</li><li><b>Privileged Role Administrator</b> manages Microsoft Entra roles, not Azure roles.</li><li>You don't “add” a user to a management group: you assign a role on it, which already requires rights.</li></ul>",
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
 "keep": "Elevate access = User Access Administrator at the root “/”. Turn it off after use."
},
{
 "id": "D1-029",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You manage access in your organization. Roles must follow the principle of least privilege.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Reset a user's password in Microsoft Entra ID:",
   "o": [
    "Entra role Helpdesk Administrator",
    "Azure role Contributor",
    "Azure role Owner"
   ],
   "a": 0
  },
  {
   "l": "Start and stop the virtual machines in RG1:",
   "o": [
    "Azure role Virtual Machine Contributor",
    "Azure role Reader",
    "Entra role Global Administrator"
   ],
   "a": 0
  },
  {
   "l": "View the subscription's invoices:",
   "o": [
    "Entra role Directory Readers",
    "Azure role Billing Reader",
    "Azure role Contributor"
   ],
   "a": 1
  }
 ],
 "expl": "<p>There are two families of roles:</p><ul><li><b>Microsoft Entra roles</b> manage the directory: users, groups, passwords, licenses;</li><li><b>Azure roles (RBAC)</b> manage Azure resources: VMs, storage, networking, subscription billing.</li></ul><p>Resetting a password is an Entra task: <b>Helpdesk Administrator</b>. Starting VMs is an Azure task: <b>Virtual Machine Contributor</b>. Viewing invoices: <b>Billing Reader</b>, a dedicated Azure role. Directory Readers reads the directory, not billing.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "User1"
  ],
  "title": "User1 | Overview",
  "menu": [
   "*Overview",
   "Assigned roles"
  ],
  "rows": [
   [
    "*Reset password",
    "Available with Helpdesk Administrator"
   ]
  ]
 },
 "keep": "Entra roles = directory (passwords, users, licenses). Azure roles = resources (VMs, storage, subscription billing)."
},
{
 "id": "D1-030",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assign an Azure Policy with the <b>Deny</b> effect to the subscription Sub1. It forbids virtual machines larger than Standard_D4s_v5. Sub1 already contains VM1, of size Standard_D8s_v5.</p><p>What happens to VM1?</p>",
 "opts": [
  "VM1 is deleted at the next evaluation",
  "VM1 keeps running and is flagged as non-compliant",
  "VM1 is stopped and deallocated automatically",
  "VM1 is resized to Standard_D4s_v5"
 ],
 "ans": 1,
 "expl": "<p>The <b>Deny</b> effect blocks <b>new</b> non-compliant creations and updates. It doesn't act on existing resources: VM1 keeps running and shows as <b>non-compliant</b> in the compliance dashboard.</p><p>Azure Policy never stops, resizes, or deletes an existing resource. To fix existing resources, you use a remediation task, and only with the Modify or DeployIfNotExists effects.</p>",
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
 "keep": "Deny protects the future, never the existing: the existing resource just becomes non-compliant."
},
{
 "id": "D1-031",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Policy effect for each requirement.</p><p>To answer, drag the appropriate effect to each requirement. Each effect may be used once, more than once, or not at all.</p>",
 "srcLabel": "Effects",
 "srcs": [
  "Audit",
  "Deny",
  "Modify",
  "DeployIfNotExists",
  "Disabled"
 ],
 "tgtHead": [
  "Requirement",
  "Effect"
 ],
 "tgts": [
  {
   "l": "Prevent resources from being created outside the France Central region",
   "a": 1
  },
  {
   "l": "Automatically add the Department tag if it is missing",
   "a": 2
  },
  {
   "l": "Report storage accounts that allow public access, without blocking anything",
   "a": 0
  },
  {
   "l": "Install the monitoring extension on VMs that don't have it",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Deny</b>: rejects the non-compliant create or update request.</li><li><b>Modify</b>: adds, replaces, or removes properties or tags during creation or update.</li><li><b>Audit</b>: lets it through, but flags the resource as non-compliant and writes a warning to the activity log.</li><li><b>DeployIfNotExists</b>: deploys a related resource (extension, diagnostic setting…) when it doesn't exist.</li></ul><p><b>Disabled</b> turns the policy off, mainly to test or pause a parameterized assignment.</p>",
 "portal": {
  "path": [
   "Policy",
   "Definitions"
  ],
  "title": "Policy definition",
  "menu": [
   "Overview",
   "Compliance",
   "Assignments",
   "*Definitions"
  ],
  "rows": [
   [
    "*Deny",
    "Rejects the create or update"
   ],
   [
    "*Modify",
    "Adds or changes properties and tags"
   ],
   [
    "*Audit",
    "Reports without blocking"
   ],
   [
    "*DeployIfNotExists",
    "Deploys a missing resource"
   ]
  ]
 },
 "keep": "Deny blocks, Audit reports, Modify fixes properties, DeployIfNotExists deploys what's missing."
},
{
 "id": "D1-032",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assign an Azure Policy with the <b>Modify</b> effect to add the Environment tag to existing resource groups. You create a remediation task, but it fails for lack of permissions.</p><p>What should you check?</p>",
 "opts": [
  "That you have the Reader role on the subscription",
  "That the resource groups contain no resources",
  "That the assignment has a managed identity with a sufficient role",
  "That the policy is part of an initiative"
 ],
 "ans": 2,
 "expl": "<p>The <b>Modify</b> and <b>DeployIfNotExists</b> effects act on resources on your behalf. To do so, the assignment uses a <b>managed identity</b> (system-assigned or user-assigned) that must have a sufficient role, for example Tag Contributor or Contributor, on the scope.</p><p>The Reader role cannot remediate. A single policy works as well as an initiative. The content of the resource groups is irrelevant.</p>",
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
 "keep": "Modify and DeployIfNotExists need a managed identity with a sufficient role to remediate."
},
{
 "id": "D1-033",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to assign 12 policy definitions related to ISO 27001 compliance together, and track their compliance as a whole.</p><p>What should you create?</p>",
 "opts": [
  "A management group",
  "A resource tag",
  "An Azure Blueprints plan",
  "An initiative definition"
 ],
 "ans": 3,
 "expl": "<p>An <b>initiative</b> (policy set) groups several policy definitions. You assign it once, and compliance is calculated for the whole set. Azure provides built-in initiatives for frameworks such as ISO 27001.</p><p>A management group organizes subscriptions. Azure Blueprints is being retired (replaced by Template Specs and deployment stacks). A tag doesn't group policies.</p>",
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
 "keep": "Several policies managed together = initiative (policy set)."
},
{
 "id": "D1-034",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assign a policy to the subscription Sub1 that allows only the France Central region. The resource group RG-DR must be able to contain resources in France South.</p><p>What should you do, with minimal effort?</p>",
 "opts": [
  "Add RG-DR to the assignment's exclusions",
  "Create a second assignment on RG-DR",
  "Move RG-DR to another subscription",
  "Apply a read-only lock to RG-DR"
 ],
 "ans": 0,
 "expl": "<p>A policy assignment can have <b>exclusions</b>: resource groups or resources within the scope that are not evaluated. Adding RG-DR to the exclusions is enough.</p><ul><li>A <b>second assignment</b> that allows France South doesn't cancel the first: both apply and the first still denies.</li><li><b>Moving RG-DR</b> to another subscription works, but takes far more effort.</li><li>A <b>lock</b> protects against changes; it doesn't affect policies.</li></ul><p>For a documented, time-limited waiver on a specific resource, there are also <b>exemptions</b>.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy",
  "menu": [
   "*Basics",
   "Parameters",
   "Remediation"
  ],
  "rows": [
   [
    "Scope",
    "Sub1"
   ],
   [
    "*Exclusions",
    "Sub1/RG-DR"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Removing a scope from an assignment = exclusion. Tracked, temporary waiver = exemption."
},
{
 "id": "D1-035",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>The subscription Sub1 contains the resource group RG1. You need to ensure that every resource created in RG1 receives the <b>CostCenter</b> tag with the same value as RG1's.</p><p>Which <b>two</b> statements are true?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "A remediation task is needed for the resources already in RG1",
  "A lock on RG1 copies its tags to the resources",
  "Resources automatically inherit RG1's tags",
  "The built-in policy “Inherit a tag from the resource group if missing” meets the need"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<ul><li><b>Automatic inheritance: false.</b> In Azure, tags are never inherited by default.</li><li><b>“Inherit a tag from the resource group” policy: true.</b> It uses the Modify effect to copy the tag when a resource is created or updated.</li><li><b>Remediation task: true.</b> Modify acts on its own only on resources being created or updated. For existing resources, you run a remediation task.</li><li><b>Lock: false.</b> A lock prevents deletion or changes; it doesn't touch tags.</li></ul>",
 "portal": {
  "path": [
   "Policy",
   "Remediation"
  ],
  "title": "New remediation task",
  "menu": [
   "Overview",
   "Compliance",
   "*Remediation"
  ],
  "rows": [
   [
    "Assignment",
    "Inherit a tag from the resource group if missing"
   ],
   [
    "*Resources to remediate",
    "Existing resources in RG1"
   ]
  ],
  "btn": "Remediate"
 },
 "keep": "Tags are never inherited on their own: Modify policy “Inherit a tag”, plus a remediation task for existing resources."
},
{
 "id": "D1-036",
 "dom": 1,
 "type": "single",
 "stem": "<p>A finance manager must be able to add and modify the tags of all resources in the subscription Sub1, without being able to modify the resources themselves.</p><p>Which role should you assign?</p>",
 "opts": [
  "Contributor",
  "Tag Contributor",
  "Reader",
  "Resource Policy Contributor"
 ],
 "ans": 1,
 "expl": "<p><b>Tag Contributor</b> lets you manage resource tags without access to the resources themselves.</p><p>Contributor can change everything. Reader cannot change anything, not even tags. Resource Policy Contributor manages Azure Policy, not tags.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)",
   "Tags"
  ],
  "rows": [
   [
    "*Role",
    "Tag Contributor"
   ],
   [
    "Members",
    "Finance manager"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Managing tags without touching resources = Tag Contributor."
},
{
 "id": "D1-037",
 "dom": 1,
 "type": "hot",
 "stem": "<p>The resource group RG1 contains the storage account storage1 and the virtual machine VM1. You apply a <b>Read-only</b> (ReadOnly) lock to RG1. User1 has the Owner role on RG1.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Can User1 start VM1?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "Can User1 list the access keys of storage1?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 1
  },
  {
   "l": "Can User1 read a blob in storage1 with an existing SAS?",
   "o": [
    "Yes",
    "No"
   ],
   "a": 0
  }
 ],
 "expl": "<p>A <b>Read-only</b> lock blocks every write operation on the <b>control plane</b>, for everyone, even the Owner.</p><ul><li><b>Start VM1: No.</b> Starting is a POST request, treated as a write.</li><li><b>List the keys: No.</b> The listKeys operation is also a POST: it is blocked.</li><li><b>Read a blob with a SAS: Yes.</b> Locks protect the control plane only. Data operations (reading, and even writing a blob) are not affected.</li></ul>",
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
    "Lock name",
    "ReadOnly"
   ],
   [
    "*Lock type",
    "Read-only"
   ],
   [
    "Scope",
    "RG1"
   ]
  ]
 },
 "keep": "Read-only lock: blocks every control plane write (including starting a VM and listing keys), never the data plane."
},
{
 "id": "D1-038",
 "dom": 1,
 "type": "single",
 "stem": "<p>The resource group RG1 contains VM1. A <b>Delete</b> (CanNotDelete) lock is applied to VM1. An administrator tries to delete RG1.</p><p>What happens?</p>",
 "opts": [
  "All resources except VM1 are deleted, then RG1",
  "VM1 is moved to a new resource group",
  "The deletion of RG1 fails",
  "RG1 and all its resources are deleted"
 ],
 "ans": 2,
 "expl": "<p>Deleting a resource group means deleting each of its resources. Since VM1 cannot be deleted, the operation on RG1 <b>fails</b>. To delete RG1, you must remove the lock first.</p><p>Azure never moves a resource on its own. Depending on processing order, some unlocked resources may already have been deleted before the failure, which is why you lock the whole resource group for important environments.</p>",
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
    "*Lock type",
    "Delete"
   ],
   [
    "Effect",
    "Deleting RG1 fails"
   ]
  ]
 },
 "keep": "A locked resource prevents the deletion of its resource group."
},
{
 "id": "D1-039",
 "dom": 1,
 "type": "single",
 "stem": "<p>User2 has the <b>Contributor</b> role on the subscription Sub1. He tries to delete a lock applied to a resource group in Sub1, without success.</p><p>Why?</p>",
 "opts": [
  "The group's resources must be deleted first",
  "Locks can only be deleted by their creator",
  "A lock cannot be deleted for 24 hours",
  "Contributor doesn't have the Microsoft.Authorization/locks/delete action"
 ],
 "ans": 3,
 "expl": "<p>Creating or deleting a lock requires the <code>Microsoft.Authorization/locks/*</code> actions. They are included in the <b>Owner</b> and <b>User Access Administrator</b> roles, but <b>not</b> in Contributor, which excludes all Microsoft.Authorization actions.</p><p>Anyone with these rights can delete a lock, not only its creator. There is no 24-hour delay, and you delete a lock without touching the resources.</p>",
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
 "keep": "Managing locks = Owner or User Access Administrator. Contributor cannot."
},
{
 "id": "D1-040",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to organize 40 subscriptions into a hierarchy to apply Azure Policy and roles by department.</p><p>How many levels of management groups can you create under the root management group?</p>",
 "opts": [
  "6 levels",
  "3 levels",
  "No limit",
  "10 levels"
 ],
 "ans": 0,
 "expl": "<p>A management group hierarchy can be <b>6 levels</b> deep, not counting the root level or the subscription level.</p><p>Other limits to know: 10,000 management groups per directory, and each management group or subscription has only <b>one parent</b>.</p>",
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
 "keep": "Management groups: 6 levels under the root, one parent, 10,000 groups maximum."
},
{
 "id": "D1-041",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You manage a management group hierarchy.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A subscription can belong to two management groups at the same time.",
   "a": 1
  },
  {
   "l": "A policy assigned to a management group applies to the subscriptions it contains.",
   "a": 0
  },
  {
   "l": "A new subscription is placed under the root management group by default.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Two parents: No.</b> Each subscription and each management group has a single parent.</li><li><b>Inheritance: Yes.</b> Policies and roles assigned to a management group apply to everything below it.</li><li><b>Root by default: Yes.</b> Unless you set another default management group in the hierarchy settings.</li></ul>",
 "portal": {
  "path": [
   "Management groups"
  ],
  "title": "Management groups | Settings",
  "menu": [
   "Management groups",
   "*Settings"
  ],
  "rows": [
   [
    "*Default management group",
    "Tenant root group"
   ],
   [
    "Require permissions for creating new management groups",
    "Off"
   ]
  ]
 },
 "keep": "One parent per subscription; a management group's policies and roles apply to its subscriptions."
},
{
 "id": "D1-042",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to be alerted when the <b>forecasted</b> spending of the subscription Sub1 for the month exceeds €5,000. Virtual machines must not be stopped automatically.</p><p>What should you create in Cost Management?</p>",
 "opts": [
  "An Azure Policy with the Deny effect",
  "A budget with an alert on forecasted cost",
  "An Azure reservation",
  "An activity log alert"
 ],
 "ans": 1,
 "expl": "<p>A <b>budget</b> in Cost Management can trigger alerts on <b>actual</b> or <b>forecasted</b> cost, as a percentage of the amount. A budget never stops a resource on its own; it notifies (email, action group).</p><p>Azure Policy knows nothing about costs. The activity log tracks operations, not spending. A reservation lowers costs but notifies nothing.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Budgets › Create budget",
  "menu": [
   "Overview",
   "Cost analysis",
   "*Budgets"
  ],
  "rows": [
   [
    "Amount",
    "€5,000"
   ],
   [
    "*Type",
    "Forecasted"
   ],
   [
    "% of budget",
    "100"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Budget: alert on actual or forecasted cost; it never stops resources."
},
{
 "id": "D1-043",
 "dom": 1,
 "type": "single",
 "stem": "<p>The virtual machines in the subscription Sub1 run continuously. Your manager asks for a list of underused VMs, with recommendations to resize or shut them down.</p><p>Which service should you check?</p>",
 "opts": [
  "Azure Resource Graph",
  "Microsoft Entra ID",
  "Azure Advisor",
  "Azure Policy"
 ],
 "ans": 2,
 "expl": "<p><b>Azure Advisor</b> analyzes resource usage and gives recommendations by category: Cost, Security, Reliability, Operational excellence, and Performance. In the Cost category, it flags underused VMs and suggests resizing or shutting them down.</p><p>Azure Policy checks compliance rules. Entra ID manages identities. Resource Graph lets you query the resource inventory, but gives no recommendations.</p>",
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
 "keep": "Underused VMs, suggested reservations = Azure Advisor, Cost category."
},
{
 "id": "D1-044",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to reduce your company's Azure costs. Which option matches each situation?</p><p>To answer, drag the appropriate option to each situation. Each option may be used once, more than once, or not at all.</p>",
 "srcLabel": "Options",
 "srcs": [
  "Azure reservation",
  "Azure Hybrid Benefit",
  "Spot virtual machine",
  "Scheduled auto-shutdown"
 ],
 "tgtHead": [
  "Situation",
  "Option"
 ],
 "tgts": [
  {
   "l": "Production VMs will run 24/7 for the next 3 years",
   "a": 0
  },
  {
   "l": "You own Windows Server licenses with Software Assurance",
   "a": 1
  },
  {
   "l": "Batch jobs can be interrupted at any time without impact",
   "a": 2
  },
  {
   "l": "Development VMs are used only during the day",
   "a": 3
  }
 ],
 "expl": "<ul><li><b>Reservation</b>: a 1- or 3-year commitment for a size and region, with a large discount. Ideal for a steady, continuous workload.</li><li><b>Azure Hybrid Benefit</b>: reuses your Windows Server or SQL Server licenses covered by Software Assurance; you no longer pay for the license in the VM price.</li><li><b>Spot VM</b>: unused Azure capacity, very cheap, but Azure can reclaim the VM at any time. Good for interruptible jobs.</li><li><b>Auto-shutdown</b>: a stopped and deallocated VM no longer costs compute (disks are still billed).</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Dev1"
  ],
  "title": "VM-Dev1 | Auto-shutdown",
  "menu": [
   "Overview",
   "Configuration",
   "*Auto-shutdown",
   "Backup"
  ],
  "rows": [
   [
    "*Enabled",
    "On"
   ],
   [
    "Scheduled shutdown",
    "7:00 PM"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Continuous workload for 1–3 years = reservation. Existing licenses = Hybrid Benefit. Interruptible = Spot. Unused at night = auto-shutdown."
},
{
 "id": "D1-045",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to estimate the monthly cost of 3 virtual machines, a storage account, and a VPN gateway <b>before</b> deploying them.</p><p>Which tool should you use?</p>",
 "opts": [
  "Cost Management budgets",
  "Azure Advisor",
  "Cost analysis",
  "The Azure pricing calculator"
 ],
 "ans": 3,
 "expl": "<p>The <b>pricing calculator</b> estimates the cost of services not yet deployed: you choose services, region, sizes, and quantities.</p><p><b>Cost analysis</b> and <b>budgets</b> work on actual spending of existing resources. <b>Advisor</b> recommends savings on what is already deployed.</p>",
 "portal": {
  "path": [
   "Cost Management + Billing"
  ],
  "title": "Cost Management | Cost analysis",
  "menu": [
   "*Cost analysis",
   "Budgets",
   "Exports"
  ],
  "rows": [
   [
    "*Actual spending",
    "Already deployed resources only"
   ],
   [
    "For a future deployment",
    "Pricing calculator (outside the portal)"
   ]
  ]
 },
 "keep": "Cost before deployment = pricing calculator (azure.microsoft.com/pricing/calculator). Actual spending = Cost Management."
},
{
 "id": "D1-046",
 "dom": 1,
 "type": "single",
 "stem": "<p>You move the storage account storage1 from the resource group RG1 (France Central region) to the resource group RG2 (West Europe region).</p><p>In which region is storage1 after the move?</p>",
 "opts": [
  "France Central",
  "West Europe",
  "Both, through geo-replication",
  "You must choose the region during the move"
 ],
 "ans": 0,
 "expl": "<p>Moving a resource to another resource group does <b>not</b> change its region: storage1 stays in France Central. A resource group's region only stores its <b>metadata</b>; a group can contain resources from any region.</p><p>To change region, you need another tool, such as Azure Resource Mover, or recreate the resource.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "Move to another resource group",
  "menu": [
   "*Resources",
   "Validate",
   "Review"
  ],
  "rows": [
   [
    "Resource",
    "storage1 (France Central)"
   ],
   [
    "*Target resource group",
    "RG2"
   ],
   [
    "Region after the move",
    "France Central (unchanged)"
   ]
  ],
  "btn": "Move"
 },
 "keep": "Moving between resource groups or subscriptions never changes the region."
},
{
 "id": "D1-047",
 "dom": 1,
 "type": "single",
 "stem": "<p>You start moving several resources from RG1 to RG2.</p><p>During the move, what happens to RG1 and RG2?</p>",
 "opts": [
  "Nothing: both groups remain fully editable",
  "Both groups are blocked for write and delete operations",
  "Only RG2 is read-only",
  "The moved resources are stopped"
 ],
 "ans": 1,
 "expl": "<p>During a move, the source and target groups are <b>locked</b>: you cannot create, modify, or delete resources in them until the operation completes (four hours at most).</p><p>The resources themselves <b>keep running</b>: a VM stays started, a web app stays online.</p>",
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
 "keep": "During a move, source and target are blocked for writes; the resources stay online."
},
{
 "id": "D1-048",
 "dom": 1,
 "type": "single",
 "stem": "<p>Before moving 30 resources from RG1 to another subscription, you want to know whether the move will succeed, without moving anything.</p><p>What should you use?</p>",
 "opts": [
  "A read-only lock on RG1",
  "The activity log of RG1",
  "The validateMoveResources operation",
  "An Azure Policy in Audit mode"
 ],
 "ans": 2,
 "expl": "<p>The <b>validateMoveResources</b> API tests the move: it checks that the resources support it and that dependencies are included, without changing anything. The portal also runs an automatic validation before any move.</p><p>The activity log shows what happened, not what will happen. A read-only lock would even make the move fail. Azure Policy doesn't test moves.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "Move to another subscription",
  "menu": [
   "Resources",
   "*Validate",
   "Review"
  ],
  "rows": [
   [
    "*Validation",
    "validateMoveResources: succeeded"
   ],
   [
    "Resources",
    "30"
   ]
  ],
  "btn": "Next"
 },
 "keep": "Testing a move without changing anything = validation (validateMoveResources), also run by the portal."
},
{
 "id": "D1-049",
 "dom": 1,
 "type": "single",
 "stem": "<p>You transfer the subscription Sub1 to another Microsoft Entra tenant.</p><p>What happens to the Contributor role assignment given to User1 (a user of the former tenant) on Sub1?</p>",
 "opts": [
  "It is kept",
  "It becomes a Reader assignment",
  "It is transferred to User1's guest account",
  "It is deleted"
 ],
 "ans": 3,
 "expl": "<p>When a subscription changes tenant, <b>all Azure role assignments are deleted</b>, because the users, groups, and identities of the old directory don't exist in the new one. You must recreate them.</p><p>The same goes for managed identities, and key vaults must be updated with the new tenant ID. Nothing is converted or transferred automatically.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Change directory",
  "menu": [
   "*Overview",
   "Access control (IAM)"
  ],
  "rows": [
   [
    "Target directory",
    "fabrikam.com"
   ],
   [
    "*Warning",
    "All Azure role assignments will be deleted"
   ]
  ],
  "btn": "Change"
 },
 "keep": "Changing tenant = role assignments and managed identities lost; recreate them."
},
{
 "id": "D1-050",
 "dom": 1,
 "type": "order",
 "stem": "<p>You need to allow the Network team (an existing Microsoft Entra group named GRP-Network) to manage only the virtual networks of the subscription Sub1, with a custom role that doesn't exist yet.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Write the role's JSON definition with the Actions Microsoft.Network/virtualNetworks/*",
  "Create the role with New-AzRoleDefinition",
  "Assign the role to GRP-Network on Sub1",
  "Create an administrative unit for GRP-Network",
  "Assign the Network Administrator role in Microsoft Entra ID"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>A custom role is created in three steps: you <b>write</b> its definition (Actions, NotActions, AssignableScopes containing Sub1), you <b>create</b> it (portal, <code>New-AzRoleDefinition</code> or <code>az role definition create</code>), then you <b>assign</b> it to a principal at a scope.</p><p>Administrative units and Microsoft Entra roles apply to the directory, not to Azure resources such as virtual networks.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1",
   "Access control (IAM)"
  ],
  "title": "Create a custom role | JSON",
  "menu": [
   "Basics",
   "Permissions",
   "Assignable scopes",
   "*JSON"
  ],
  "rows": [
   [
    "*Actions",
    "Microsoft.Network/virtualNetworks/*"
   ],
   [
    "AssignableScopes",
    "/subscriptions/<Sub1 id>"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Custom role: define, create, then assign. Entra roles and administrative units don't apply to Azure resources."
},
{
 "id": "D1-051",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to assign the Reader role to the group GRP-Audit on the resource group RG1, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az role {0} create --assignee-object-id &lt;GRP-Audit id&gt; --assignee-principal-type Group --role {1} {2} RG1",
 "rows": [
  {
   "l": "Subcommand",
   "o": [
    "assignment",
    "definition",
    "policy"
   ],
   "a": 0
  },
  {
   "l": "Role",
   "o": [
    "\"Reader\"",
    "\"Owner\"",
    "\"Contributor\""
   ],
   "a": 0
  },
  {
   "l": "Scope parameter",
   "o": [
    "--resource-group",
    "--scope-name",
    "--location"
   ],
   "a": 0
  }
 ],
 "expl": "<p>The full command is: <code>az role assignment create --assignee-object-id &lt;id&gt; --assignee-principal-type Group --role \"Reader\" --resource-group RG1</code>.</p><ul><li><b>assignment</b> creates an assignment; <b>definition</b> is for custom role definitions. <code>az role policy</code> doesn't exist.</li><li><b>Reader</b> is the built-in role name.</li><li>The scope is given with <code>--scope</code> (full path) or <code>--resource-group</code>. <code>--scope-name</code> doesn't exist, and <code>--location</code> is a region.</li></ul>",
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
    "*Role",
    "Reader"
   ],
   [
    "Members",
    "GRP-Audit"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Assigning a role with the CLI: az role assignment create --assignee … --role … --resource-group or --scope."
},
{
 "id": "D1-052",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to apply a lock that prevents the deletion of the resource group RG1, by using Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "{0} -LockName ProtectRG1 -LockLevel {1} -ResourceGroupName RG1",
 "rows": [
  {
   "l": "Cmdlet",
   "o": [
    "New-AzResourceLock",
    "Set-AzResourceGroup",
    "New-AzPolicyAssignment"
   ],
   "a": 0
  },
  {
   "l": "Level",
   "o": [
    "ReadOnly",
    "CanNotDelete",
    "DoNotDelete"
   ],
   "a": 1
  }
 ],
 "expl": "<p><code>New-AzResourceLock -LockName ProtectRG1 -LockLevel CanNotDelete -ResourceGroupName RG1</code>.</p><ul><li><b>New-AzResourceLock</b> creates a lock. Set-AzResourceGroup changes a group's tags; New-AzPolicyAssignment assigns a policy.</li><li><b>CanNotDelete</b> prevents deletion but allows changes. <b>ReadOnly</b> would also block any change. <b>DoNotDelete</b> doesn't exist: a common trap.</li></ul>",
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
    "Lock name",
    "ProtectRG1"
   ],
   [
    "*Lock type",
    "Delete (CanNotDelete)"
   ]
  ],
  "btn": "OK"
 },
 "keep": "New-AzResourceLock -LockLevel CanNotDelete (Delete) or ReadOnly (Read-only). DoNotDelete doesn't exist."
},
{
 "id": "D1-053",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to list, in a single query, every virtual machine across your organization's 40 subscriptions that doesn't have the <b>Owner</b> tag.</p><p>Which service should you use?</p>",
 "opts": [
  "Azure Resource Graph",
  "The activity log",
  "Cost analysis",
  "Azure Advisor"
 ],
 "ans": 0,
 "expl": "<p><b>Azure Resource Graph</b> queries the resource inventory of several subscriptions at once, with the KQL language. It answers in seconds, which makes it the right tool for this kind of inventory.</p><p>Advisor gives recommendations. Cost analysis shows spending. The activity log tracks operations, not the current state of resources.</p>",
 "portal": {
  "path": [
   "Azure Resource Graph Explorer"
  ],
  "title": "Azure Resource Graph Explorer",
  "menu": [
   "*Query",
   "Saved queries"
  ],
  "rows": [
   [
    "*Query",
    "resources | where type =~ 'microsoft.compute/virtualmachines' | where isnull(tags['Owner'])"
   ],
   [
    "Scope",
    "All subscriptions"
   ]
  ],
  "btn": "Run query"
 },
 "keep": "Resource inventory across several subscriptions in one KQL query = Azure Resource Graph."
},
{
 "id": "D1-054",
 "dom": 1,
 "type": "single",
 "stem": "<p>User5 has the Contributor role on RG1. Yet he cannot delete some resources in RG1. In the <b>Access control (IAM)</b> tab of RG1, you find a <b>deny assignment</b>.</p><p>Which statement about deny assignments is true?</p>",
 "opts": [
  "A deny assignment applies only to Microsoft Entra roles",
  "Deny assignments are created by Azure, for example by deployment stacks",
  "You can create a deny assignment yourself from the portal",
  "A deny assignment is weaker than a role assignment"
 ],
 "ans": 1,
 "expl": "<p><b>Deny assignments</b> block actions even if a role allows them: they are evaluated <b>before</b> role assignments. But you cannot create them directly: they are created and managed by Azure, for example by <b>deployment stacks</b> or managed applications.</p><p>They apply to Azure resources, not to Microsoft Entra roles. To protect resources yourself, use locks or Azure Policy instead.</p>",
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
    "Role assignments",
    "User5 · Contributor"
   ],
   [
    "*Deny assignments",
    "Created by a deployment stack"
   ]
  ]
 },
 "keep": "Deny assignment: takes precedence over roles, created only by Azure (deployment stacks, managed applications)."
},
{
 "id": "D1-055",
 "dom": 1,
 "type": "single",
 "stem": "<p>User6 is a member of two groups. Group A has the <b>Reader</b> role on RG1. Group B has the <b>Contributor</b> role on RG1.</p><p>What are User6's effective permissions on RG1?</p>",
 "opts": [
  "Those of the role assigned first",
  "Reader, because the most restrictive role wins",
  "Contributor, because permissions are additive",
  "None, because the two roles conflict"
 ],
 "ans": 2,
 "expl": "<p>Azure role-based access control is <b>additive</b>: the permissions of all assignments add up. User6 therefore has Contributor rights, which include Reader's.</p><p>Only <b>deny assignments</b> can remove a permission. The order of assignments doesn't matter, and two roles never “conflict”.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Access control (IAM) › Check access",
  "menu": [
   "Overview",
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "User6 via Group A",
    "Reader"
   ],
   [
    "*User6 via Group B",
    "Contributor"
   ],
   [
    "Effective permissions",
    "Reader + Contributor = Contributor"
   ]
  ]
 },
 "keep": "RBAC is additive: the rights of all roles add up. Only a deny assignment removes a right."
},
{
 "id": "D1-056",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You need to create a budget alert for the resource group RG-Dev. The budget is €1,000 per month. The Dev team must receive an email as soon as <b>actual</b> cost reaches 80% of the budget.</p><p>How should you configure the alert condition?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create budget",
  "sub": "RG-Dev | Budgets",
  "rows": [
   {
    "k": "head",
    "t": "Budget details"
   },
   {
    "k": "text",
    "l": "Name",
    "t": "Budget-Dev"
   },
   {
    "k": "select",
    "l": "Reset period",
    "o": [
     "Monthly",
     "Quarterly",
     "Annually"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "text",
    "l": "Amount",
    "t": "€1,000"
   },
   {
    "k": "head",
    "t": "Alert conditions"
   },
   {
    "k": "select",
    "l": "Type",
    "o": [
     "Actual",
     "Forecasted"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "% of budget",
    "o": [
     "50",
     "80",
     "100",
     "120"
    ],
    "a": 1
   },
   {
    "k": "check",
    "l": "Stop resources when the threshold is reached",
    "a": false
   }
  ]
 },
 "expl": "<p>The budget is <b>monthly</b>, €1,000. The alert condition uses the <b>Actual</b> type (cost already consumed) and the <b>80%</b> threshold.</p><p>The <b>Forecasted</b> type would alert on the end-of-month projection, which isn't requested. And a budget <b>cannot</b> stop resources: it only notifies. To act automatically, you attach an action group that triggers a runbook or a function, but that is not a budget checkbox.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Dev"
  ],
  "title": "RG-Dev | Budgets › Create budget",
  "menu": [
   "Overview",
   "*Budgets"
  ],
  "rows": [
   [
    "Reset period",
    "Monthly"
   ],
   [
    "Amount",
    "€1,000"
   ],
   [
    "*Type",
    "Actual"
   ],
   [
    "*% of budget",
    "80"
   ],
   [
    "Alert recipients",
    "dev-team@contoso.com"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Actual = already spent; Forecasted = projection. A budget warns, it stops nothing."
},
{
 "id": "D1-057",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need to allow users in your tenant to register up to 10 devices each.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "Devices | Overview",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "All devices"
    ]
   },
   {
    "g": "Manage",
    "items": [
     "Device settings",
     "Enterprise State Roaming",
     "BitLocker keys (preview)"
    ]
   },
   {
    "g": "Activity",
    "items": [
     "Audit logs",
     "Bulk operation results"
    ]
   }
  ]
 },
 "ans": "Device settings",
 "expl": "<p>The “Maximum number of devices per user” limit is set in <b>Device settings</b>. It also contains who can join or register devices, and the MFA requirement to join a device.</p><p>Enterprise State Roaming syncs Windows settings. BitLocker keys and audit logs contain no limit setting.</p>",
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
    "*Maximum number of devices per user",
    "10"
   ]
  ],
  "btn": "Save"
 },
 "keep": "All device join and registration rules are in Device settings."
},
{
 "id": "D1-058",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to prevent, across the whole management group MG-Prod, the creation of storage accounts that allow public network access. The rule must also apply to subscriptions added to MG-Prod later.</p><p>Where should you assign the policy?</p>",
 "opts": [
  "To each resource group",
  "To the Microsoft Entra tenant",
  "To each subscription of MG-Prod",
  "To the management group MG-Prod"
 ],
 "ans": 3,
 "expl": "<p>A policy assigned to the <b>MG-Prod management group</b> applies to all its subscriptions, current and <b>future</b>, through inheritance.</p><p>Assigning it subscription by subscription would miss new subscriptions. Resource groups are even lower. You don't assign Azure Policy to the Microsoft Entra tenant: the highest scope is the root management group.</p>",
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
 "keep": "Covering future subscriptions = assign to the parent management group."
},
{
 "id": "D1-059",
 "dom": 1,
 "type": "single",
 "stem": "<p>You accidentally deleted the user User7 from Microsoft Entra ID 10 days ago.</p><p>What can you do?</p>",
 "opts": [
  "Restore User7 from Deleted users, since it stays there for 30 days",
  "Recreate User7: it automatically gets back its groups and licenses",
  "Restore User7 from the Azure activity log",
  "Nothing: deletion is immediate and permanent"
 ],
 "ans": 0,
 "expl": "<p>A deleted user stays <b>30 days</b> in <b>Deleted users</b> (soft delete). During that time, you can restore it with its group memberships and licenses.</p><p>The Azure activity log tracks operations on resources; it restores nothing. A recreated user is a <b>new object</b> with a new ID: it gets back none of its groups, licenses, or roles.</p>",
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
    "*User7",
    "Deleted 10 days ago · permanently deleted in 20 days"
   ]
  ],
  "btn": "Restore users"
 },
 "keep": "Deleted user: 30 days to restore it with its groups and licenses."
},
{
 "id": "D1-060",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>Your Microsoft Entra tenant has Microsoft Entra ID P1 licenses. You create a security group with <b>Dynamic User</b> membership named Group5, with the rule <code>(user.jobTitle -eq \"Technician\")</code>.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "You can manually add a user whose job title is Sales Representative to Group5.",
   "a": 1
  },
  {
   "l": "A user whose job title changes to Technician is added to Group5 without any action from you.",
   "a": 0
  },
  {
   "l": "You can assign an Azure role to Group5.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Manual add: No.</b> In a dynamic group, only the rule decides membership. For a special case, change the rule or use another group.</li><li><b>Automatic update: Yes.</b> Entra re-evaluates the rule when attributes change (with a delay that depends on the tenant size).</li><li><b>Azure role: Yes.</b> A security group, dynamic or not, can receive Azure roles.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "Group5"
  ],
  "title": "Group5 | Dynamic membership rules",
  "menu": [
   "Overview",
   "Members",
   "*Dynamic membership rules"
  ],
  "rows": [
   [
    "*Rule",
    "(user.jobTitle -eq \"Technician\")"
   ],
   [
    "Add members manually",
    "Not available (dynamic group)"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Dynamic group: only the rule decides membership; no manual add."
}
);
