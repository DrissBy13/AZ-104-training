/* Domain 1: identities and governance (batch D : D1-111 to D1-160) */
AZ.questions.push(
{
 "id": "D1-111",
 "dom": 1,
 "type": "single",
 "stem": "<p>You enabled self-service password reset (SSPR) for all users. Many of them have never registered a method and therefore cannot reset their password.</p><p>What should you configure?</p>",
 "opts": [
  "Require users to register when signing in",
  "Increase the number of required methods to 2",
  "Enable password writeback",
  "Notify users on password resets"
 ],
 "ans": 0,
 "expl": "<p>In <b>Password reset > Registration</b>, the <b>“Require users to register when signing in”</b> option forces each user to record their methods at their next sign-in. A second setting sets the number of days before users are asked to reconfirm their information.</p><p>Notifications warn after a reset. Requiring 2 methods doesn't make users register. Writeback concerns on-premises Active Directory.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Password reset"
  ],
  "title": "Password reset | Registration",
  "menu": [
   "Properties",
   "Authentication methods",
   "*Registration",
   "Notifications"
  ],
  "rows": [
   [
    "*Require users to register when signing in",
    "Yes"
   ],
   [
    "Number of days before users are asked to re-confirm their authentication information",
    "180"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Forcing users to record their SSPR methods = Registration > Require users to register when signing in."
},
{
 "id": "D1-112",
 "dom": 1,
 "type": "single",
 "stem": "<p>You create the user John in on-premises Active Directory. Microsoft Entra Connect synchronizes the directory every 30 minutes. One hour later, you want to delete John from the Microsoft Entra portal.</p><p>What happens?</p>",
 "opts": [
  "John is converted to a cloud account",
  "The delete option isn't available: John must be deleted in on-premises AD",
  "The deletion succeeds and John also disappears from on-premises AD",
  "The deletion succeeds, but John reappears unchanged at the next sync"
 ],
 "ans": 1,
 "expl": "<p>For a <b>synchronized</b> object, the source of authority is on-premises AD. The portal doesn't let you delete it or change its synchronized attributes: you must delete John in <b>on-premises AD</b>, and the deletion will be carried over at the next sync.</p><p>Entra never modifies on-premises AD this way, and doesn't convert the object to a cloud account.</p>",
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
 "keep": "Synchronized object = you manage (and delete) it in on-premises AD."
},
{
 "id": "D1-113",
 "dom": 1,
 "type": "order",
 "stem": "<p>Your Microsoft Entra tenant uses the domain contoso.onmicrosoft.com. You need to ensure that users sign in with an address ending in <b>@contoso.com</b>.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Add contoso.com in Custom domain names",
  "Create, at the registrar, the DNS TXT record provided by Microsoft",
  "Verify the domain in the portal",
  "Change the users' user principal name (UPN) to the @contoso.com suffix",
  "Create a contoso.com private DNS zone in Azure"
 ],
 "seq": [
  0,
  1,
  2,
  3
 ],
 "expl": "<p>You <b>add</b> the domain in Entra, which provides a <b>TXT</b> (or MX) record to create at the domain's public DNS host. Once the record is in place, you <b>verify</b> the domain, which proves you own it. Finally, you can change the users' <b>UPN</b>.</p><p>A <b>private DNS zone</b> is only for name resolution inside virtual networks: Microsoft can't query it to verify the domain.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Custom domain names"
  ],
  "title": "contoso.com",
  "menu": [
   "*Custom domain names"
  ],
  "rows": [
   [
    "*Record type",
    "TXT"
   ],
   [
    "Value",
    "MS=ms12345678"
   ],
   [
    "Status",
    "Unverified"
   ]
  ],
  "btn": "Verify"
 },
 "keep": "Custom domain: add it, publish the TXT at the public DNS, verify, then change the UPNs."
},
{
 "id": "D1-114",
 "dom": 1,
 "type": "single",
 "stem": "<p>You added the custom domain contoso.com to Microsoft Entra ID. It remains in the <b>Unverified</b> state.</p><p>Which type of DNS record should you create at your public DNS host?</p>",
 "opts": [
  "A PTR record for contoso.com",
  "An A record pointing to an Azure IP address",
  "A TXT or MX record with the value provided by Microsoft",
  "A CNAME record pointing to contoso.onmicrosoft.com"
 ],
 "ans": 2,
 "expl": "<p>Microsoft provides a unique value like <code>MS=ms12345678</code> to publish in a <b>TXT</b> record (or, failing that, an <b>MX</b> record). Its presence proves that you control the domain.</p><p>A, CNAME, and PTR records are not used for this verification.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Custom domain names",
   "contoso.com"
  ],
  "title": "contoso.com",
  "rows": [
   [
    "*Record type",
    "TXT (or MX)"
   ],
   [
    "Alias or host name",
    "@"
   ],
   [
    "Destination or points to address",
    "MS=ms12345678"
   ],
   [
    "TTL",
    "3600"
   ]
  ],
  "btn": "Verify"
 },
 "keep": "Verifying a domain = TXT (or MX) record at the public DNS."
},
{
 "id": "D1-115",
 "dom": 1,
 "type": "single",
 "stem": "<p>Members of each team must be able to create their own security groups in Microsoft Entra ID, without an admin role.</p><p>Where should you configure this behavior?</p>",
 "opts": [
  "Users > User settings",
  "Subscription > Access control (IAM)",
  "Devices > Device settings",
  "Groups > General settings"
 ],
 "ans": 3,
 "expl": "<p>In <b>Groups > General settings</b>, the settings “Users can create security groups” and “Users can create Microsoft 365 groups” control self-service group management.</p><p>The other pages don't contain these settings. A subscription's access control manages Azure roles, not the creation of Entra groups.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups"
  ],
  "title": "Groups | General settings",
  "menu": [
   "All groups",
   "*General settings",
   "Expiration"
  ],
  "rows": [
   [
    "#Self Service Group Management",
    ""
   ],
   [
    "*Users can create security groups in Azure portals, API or PowerShell",
    "Yes"
   ],
   [
    "Users can create Microsoft 365 groups",
    "Yes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Allowing users to create groups = Groups > General settings."
},
{
 "id": "D1-116",
 "dom": 1,
 "type": "single",
 "stem": "<p>User13 is an owner of the security group GRP-Project, with assigned membership. He has no admin role.</p><p>What can he do?</p>",
 "opts": [
  "Add and remove members of GRP-Project",
  "Delete the accounts of GRP-Project's members",
  "Assign licenses to GRP-Project's members",
  "Reset the password of GRP-Project's members"
 ],
 "ans": 0,
 "expl": "<p>A group's <b>owner</b> manages the group: members, owners, name, description. They can also delete it.</p><p>They have no rights over the members' <b>accounts</b>: resetting their password, assigning them licenses, or deleting them requires an appropriate Microsoft Entra role.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "GRP-Project"
  ],
  "title": "GRP-Project | Members",
  "menu": [
   "Overview",
   "*Members",
   "Owners"
  ],
  "rows": [
   [
    "*+ Add members",
    "Available to the owner"
   ],
   [
    "Member accounts",
    "No rights"
   ]
  ]
 },
 "keep": "Group owner = manages the group, never its members' accounts."
},
{
 "id": "D1-117",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to create a group that automatically contains all Windows devices registered or joined to Microsoft Entra ID.</p><p>Which dynamic membership rule should you use?</p>",
 "opts": [
  "(user.deviceOSType -eq \"Windows\")",
  "(device.deviceOSType -eq \"Windows\")",
  "(device.operatingSystem -contains \"Win\") -and (user.department -eq \"IT\")",
  "(device.displayName -eq \"Windows\")"
 ],
 "ans": 1,
 "expl": "<p>A device rule starts with <b>device.</b> and the operating system attribute is <b>deviceOSType</b>. The group must be a security group with <b>Dynamic Device</b> membership.</p><ul><li><code>user.deviceOSType</code> doesn't exist: user. attributes describe users.</li><li><code>device.displayName</code> is the device's name, not its OS.</li><li>A rule can't mix user and device attributes.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "New group"
  ],
  "title": "New group",
  "rows": [
   [
    "Group type",
    "Security"
   ],
   [
    "*Membership type",
    "Dynamic Device"
   ],
   [
    "*Rule",
    "(device.deviceOSType -eq \"Windows\")"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Device group = Dynamic Device, rule with device.* (deviceOSType, deviceOwnership…)."
},
{
 "id": "D1-118",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assign a Microsoft 365 E5 license to the group GRP-Management. GRP-Management contains the nested group GRP-Assistants.</p><p>Do the members of GRP-Assistants receive the license?</p>",
 "opts": [
  "Yes, but only if GRP-Assistants is dynamic",
  "No, unless GRP-Assistants is a Microsoft 365 group",
  "No, group-based licensing applies only to direct members",
  "Yes, licenses are inherited by nested groups"
 ],
 "ans": 2,
 "expl": "<p><b>Group-based licensing</b> doesn't support nesting: only the <b>direct members</b> of GRP-Management receive the license. To cover the assistants, you must also assign the license to GRP-Assistants.</p><p>The type or membership mode of GRP-Assistants changes nothing.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "GRP-Management"
  ],
  "title": "GRP-Management | Licenses",
  "menu": [
   "Overview",
   "Members",
   "*Licenses"
  ],
  "rows": [
   [
    "Microsoft 365 E5",
    "Direct members only"
   ],
   [
    "*GRP-Assistants (nested)",
    "Not covered"
   ]
  ]
 },
 "keep": "Group-based licensing: direct members only, no nesting."
},
{
 "id": "D1-119",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assign a Microsoft 365 E3 license to the group GRP-Sales, which has 120 members. You have only 100 licenses available.</p><p>What happens?</p>",
 "opts": [
  "No member receives a license",
  "All 120 members receive a license and you are billed for the extra",
  "Azure automatically buys 20 more licenses",
  "100 members receive a license; the other 20 are in an assignment error state"
 ],
 "ans": 3,
 "expl": "<p>Entra assigns licenses as long as some remain. The remaining users show as being in <b>error</b> (“not enough licenses”) in the group, and will be processed as soon as licenses are freed or purchased.</p><p>No license is bought or billed automatically.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Groups",
   "GRP-Sales"
  ],
  "title": "GRP-Sales | Licenses",
  "menu": [
   "Overview",
   "Members",
   "*Licenses"
  ],
  "rows": [
   [
    "Successful assignments",
    "100"
   ],
   [
    "*Errors",
    "20 · Not enough licenses"
   ]
  ]
 },
 "keep": "Not enough licenses: the first are served, the rest are in error; nothing is bought."
},
{
 "id": "D1-120",
 "dom": 1,
 "type": "single",
 "stem": "<p>An employee left the company this morning. You need to block them from signing in immediately, without deleting their account, and invalidate their current sessions.</p><p>Which actions should you perform in Microsoft Entra ID?</p>",
 "opts": [
  "Turn off “Account enabled”, then revoke sessions",
  "Remove them from all groups",
  "Remove their licenses",
  "Reset their password only"
 ],
 "ans": 0,
 "expl": "<p>Turning off <b>Account enabled</b> (block sign-in) prevents any new authentication. <b>Revoke sessions</b> invalidates refresh tokens, which forces existing sessions to sign out.</p><p>Removing licenses or groups doesn't block sign-in. Resetting the password alone doesn't necessarily cut sessions already open.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "Employee"
  ],
  "title": "Employee | Overview",
  "menu": [
   "*Overview",
   "Properties"
  ],
  "rows": [
   [
    "*Account enabled",
    "No (Properties > Settings)"
   ],
   [
    "*Revoke sessions",
    "Toolbar action"
   ]
  ]
 },
 "keep": "Immediate departure = block sign-in + revoke sessions."
},
{
 "id": "D1-121",
 "dom": 1,
 "type": "single",
 "stem": "<p>A guest didn't receive the invitation email sent a week ago. Their account appears in the directory with the invitation state <b>Pending acceptance</b>.</p><p>What should you do?</p>",
 "opts": [
  "Assign them a Microsoft Entra ID P1 license",
  "Resend the invitation from the guest's profile",
  "Delete the guest's domain",
  "Convert the account to a member"
 ],
 "ans": 1,
 "expl": "<p>The profile of a guest whose invitation hasn't been accepted offers <b>Resend invitation</b>. You can also send them the redemption link directly.</p><p>The other actions don't let them accept the invitation.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "partner"
  ],
  "title": "partner | Overview",
  "menu": [
   "*Overview",
   "Properties"
  ],
  "rows": [
   [
    "User type",
    "Guest"
   ],
   [
    "B2B invitation",
    "Pending acceptance"
   ],
   [
    "*Resend invitation",
    "Available"
   ]
  ]
 },
 "keep": "Lost invitation = Resend invitation from the guest's profile."
},
{
 "id": "D1-122",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to choose the minimum Microsoft Entra ID edition for each feature.</p><p>To answer, drag the appropriate edition to each feature. Each edition may be used once, more than once, or not at all.</p>",
 "srcLabel": "Editions",
 "srcs": [
  "Microsoft Entra ID Free",
  "Microsoft Entra ID P1",
  "Microsoft Entra ID P2"
 ],
 "tgtHead": [
  "Feature",
  "Minimum edition"
 ],
 "tgts": [
  {
   "l": "Create users and groups with assigned membership",
   "a": 0
  },
  {
   "l": "Groups with dynamic membership",
   "a": 1
  },
  {
   "l": "Privileged Identity Management (eligible roles)",
   "a": 2
  },
  {
   "l": "Conditional Access",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Free</b>: basic user and group management, basic single sign-on.</li><li><b>P1</b>: dynamic groups, group-based licensing, Conditional Access, password writeback.</li><li><b>P2</b>: everything in P1, plus Privileged Identity Management, ID Protection (risk detection), and access reviews.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Overview"
  ],
  "title": "Microsoft Entra ID | Licenses",
  "menu": [
   "Overview",
   "*Licenses"
  ],
  "rows": [
   [
    "Free",
    "Users, assigned groups"
   ],
   [
    "*P1",
    "Dynamic groups, Conditional Access, group-based licensing"
   ],
   [
    "*P2",
    "PIM, ID Protection, access reviews"
   ]
  ]
 },
 "keep": "P1 = dynamic + Conditional Access. P2 = PIM + risk + access reviews."
},
{
 "id": "D1-123",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your organization's administrators have the Owner role on subscriptions permanently. You need to ensure that they activate this role only when they need it, for a limited time and with a justification.</p><p>What should you use?</p>",
 "opts": [
  "Administrative units",
  "An Azure Policy in Deny mode",
  "Microsoft Entra Privileged Identity Management (PIM)",
  "Resource locks"
 ],
 "ans": 2,
 "expl": "<p><b>Privileged Identity Management</b> lets you make a role <b>eligible</b> instead of permanent: the administrator activates it for a limited time, with a justification, multifactor authentication, or approval if needed. PIM works for Microsoft Entra roles and Azure roles. It requires Microsoft Entra ID P2.</p><p>Locks, Azure Policy, and administrative units don't handle temporary role activation.</p>",
 "portal": {
  "path": [
   "Privileged Identity Management",
   "Azure resources",
   "Sub1"
  ],
  "title": "Sub1 | Roles › Add assignments",
  "menu": [
   "Roles",
   "*Assignments",
   "Settings"
  ],
  "rows": [
   [
    "Role",
    "Owner"
   ],
   [
    "*Assignment type",
    "Eligible"
   ],
   [
    "Activation",
    "Justification and MFA required · 4 h max"
   ]
  ],
  "btn": "Assign"
 },
 "keep": "Role activated on demand, time-limited = PIM (Entra ID P2), for Entra and Azure roles."
},
{
 "id": "D1-124",
 "dom": 1,
 "type": "single",
 "stem": "<p>You write a custom Azure Policy definition that checks for a tag. It must evaluate only resources that support tags and locations.</p><p>Which value should you give the <b>mode</b> property?</p>",
 "opts": [
  "Microsoft.Resources",
  "Tags",
  "All",
  "Indexed"
 ],
 "ans": 3,
 "expl": "<p>The <b>Indexed</b> mode evaluates only resource types that support tags and location. It's recommended for policies about tags or regions.</p><p>The <b>All</b> mode also evaluates resource groups, subscriptions, and all resource types. The other two values aren't Azure Policy modes (there are resource provider modes, such as Microsoft.KeyVault.Data, but not these).</p>",
 "portal": {
  "path": [
   "Policy",
   "Definitions"
  ],
  "title": "New policy definition",
  "menu": [
   "Overview",
   "*Definitions"
  ],
  "rows": [
   [
    "*mode",
    "Indexed"
   ],
   [
    "Rule",
    "field tags['Project'] exists false → deny"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Policy on tags or locations = Indexed mode. Everything else = All."
},
{
 "id": "D1-125",
 "dom": 1,
 "type": "single",
 "stem": "<p>A policy with the Deny effect regularly blocks developers' deployments. They don't understand why: the error message only quotes the policy's technical name.</p><p>What should you configure in the assignment?</p>",
 "opts": [
  "A non-compliance message",
  "An exclusion",
  "A managed identity",
  "The Audit effect"
 ],
 "ans": 0,
 "expl": "<p>An assignment's <b>non-compliance message</b> is shown in the deny error and in the compliance results. You use it to explain the rule, for example “Only the France Central region is allowed. Contact the Cloud team.”</p><p>An exclusion or the Audit effect would remove the block. The managed identity is for remediation.</p>",
 "portal": {
  "path": [
   "Policy",
   "Assignments"
  ],
  "title": "Assign policy",
  "menu": [
   "Basics",
   "Parameters",
   "Remediation",
   "*Non-compliance messages"
  ],
  "rows": [
   [
    "*Non-compliance message",
    "Only the France Central region is allowed. Contact the Cloud team."
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Explaining a denial to users = the assignment's non-compliance message."
},
{
 "id": "D1-126",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to forbid the creation of Azure Cosmos DB accounts and Azure Kubernetes Service clusters in the subscription Sub1, without affecting other services.</p><p>Which built-in policy should you assign?</p>",
 "opts": [
  "Allowed resource types, with Cosmos DB and AKS",
  "Not allowed resource types",
  "Allowed virtual machine size SKUs",
  "Allowed locations"
 ],
 "ans": 1,
 "expl": "<p><b>Not allowed resource types</b> blocks a list of types: here <code>Microsoft.DocumentDB/databaseAccounts</code> and <code>Microsoft.ContainerService/managedClusters</code>. Everything else stays allowed.</p><p><b>Allowed resource types</b> would do the opposite: allow <i>only</i> the listed types. The other two policies cover region and VM size.</p>",
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
    "Microsoft.DocumentDB/databaseAccounts ; Microsoft.ContainerService/managedClusters"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Forbid a few types = “Not allowed”. Allow only a few types = “Allowed”."
},
{
 "id": "D1-127",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>The storage account storage1 has a <b>Delete</b> (CanNotDelete) lock.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A user with the Storage Blob Data Contributor role can delete a blob in storage1.",
   "a": 0
  },
  {
   "l": "An Owner can change the redundancy level of storage1.",
   "a": 0
  },
  {
   "l": "An Owner can delete storage1 without removing the lock.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Delete a blob: Yes.</b> The lock protects the resource on the control plane. Data operations (reading, writing, deleting a blob) aren't affected. To protect data, use soft delete or immutability.</li><li><b>Change redundancy: Yes.</b> A Delete lock allows changes.</li><li><b>Delete storage1: No.</b> Even an Owner must first remove the lock.</li></ul>",
 "portal": {
  "path": [
   "Storage accounts",
   "storage1"
  ],
  "title": "storage1 | Locks",
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
    "Change redundancy",
    "Allowed"
   ],
   [
    "Delete a blob (data plane)",
    "Allowed"
   ]
  ]
 },
 "keep": "Delete lock: changes allowed, resource deletion blocked, data not protected."
},
{
 "id": "D1-128",
 "dom": 1,
 "type": "single",
 "stem": "<p>The virtual network VNet1 has a <b>Delete</b> (CanNotDelete) lock. An administrator tries to delete the subnet Subnet3 of VNet1, which contains no resources.</p><p>What happens?</p>",
 "opts": [
  "The deletion succeeds after confirmation",
  "The subnet is emptied but kept",
  "The deletion fails, because the lock also applies to child resources",
  "The deletion succeeds, because the lock protects only VNet1"
 ],
 "ans": 2,
 "expl": "<p>A lock applies to the resource <b>and its child resources</b>. A subnet is a child resource of the virtual network: its deletion is blocked.</p><p>You must remove the lock, delete the subnet, then put the lock back.</p>",
 "portal": {
  "path": [
   "Virtual networks",
   "VNet1"
  ],
  "title": "VNet1 | Subnets",
  "menu": [
   "Overview",
   "*Subnets",
   "Locks"
  ],
  "rows": [
   [
    "*Subnet3",
    "Delete → failed: lock inherited from VNet1"
   ]
  ]
 },
 "keep": "A lock covers the resource and its child resources (subnets…)."
},
{
 "id": "D1-129",
 "dom": 1,
 "type": "single",
 "stem": "<p>You try to create an Azure Container Apps environment in the subscription Sub2. The deployment fails with the error <b>MissingSubscriptionRegistration</b>.</p><p>What should you do?</p>",
 "opts": [
  "Remove the locks from Sub2",
  "Request a quota increase",
  "Assign the Reader role on Sub2",
  "Register the Microsoft.App resource provider in Sub2"
 ],
 "ans": 3,
 "expl": "<p>Each Azure service depends on a <b>resource provider</b> (Microsoft.Compute, Microsoft.Storage, Microsoft.App…). If it isn't registered in the subscription, the MissingSubscriptionRegistration error appears. You register it in <b>Subscription > Resource providers</b> or with <code>az provider register --namespace Microsoft.App</code>.</p><p>A quota, a lock, or a Reader role have nothing to do with this error.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub2"
  ],
  "title": "Sub2 | Resource providers",
  "menu": [
   "Overview",
   "Usage + quotas",
   "*Resource providers"
  ],
  "rows": [
   [
    "*Microsoft.App",
    "NotRegistered"
   ]
  ],
  "btn": "Register"
 },
 "keep": "MissingSubscriptionRegistration = register the resource provider in the subscription."
},
{
 "id": "D1-130",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to move resources from the subscription Sub1 to the subscription Sub2.</p><p>Which <b>two</b> conditions must be met?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Sub1 and Sub2 must be in the same management group",
  "The resource providers of the moved resources must be registered in Sub2",
  "The resources must be stopped during the move",
  "Sub1 and Sub2 must belong to the same Microsoft Entra tenant"
 ],
 "ans": [
  1,
  3
 ],
 "expl": "<ul><li><b>Same tenant: yes.</b> You can't move resources directly to a subscription in another tenant (you would first have to transfer the subscription).</li><li><b>Registered providers: yes.</b> Sub2 must be able to host that resource type.</li><li><b>Same management group: no.</b> The governance hierarchy doesn't matter.</li><li><b>Stopped resources: no.</b> Resources keep running during the move.</li></ul>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "Move to another subscription",
  "menu": [
   "*Resources",
   "Validate",
   "Review"
  ],
  "rows": [
   [
    "*Target subscription",
    "Sub2 (same tenant)"
   ],
   [
    "Required providers",
    "Registered in Sub2"
   ]
  ],
  "btn": "Next"
 },
 "keep": "Moving between subscriptions: same tenant, providers registered in the target."
},
{
 "id": "D1-131",
 "dom": 1,
 "type": "single",
 "stem": "<p>You buy a 3-year virtual machine reservation. It must benefit all matching VMs in the subscriptions Sub1, Sub2, and Sub3, which share the same billing account.</p><p>Which scope should you choose for the reservation?</p>",
 "opts": [
  "Shared",
  "Root management group only",
  "Single subscription",
  "Single resource group"
 ],
 "ans": 0,
 "expl": "<p>The <b>Shared</b> scope applies the discount to matching resources in all eligible subscriptions in the billing context. It's the most flexible.</p><p>Single subscription and single resource group would limit the discount to one target. There is also a “management group” scope, but not “root only”.</p>",
 "portal": {
  "path": [
   "Reservations",
   "Purchase"
  ],
  "title": "Virtual machines | Select the product",
  "menu": [
   "*Products",
   "Review + buy"
  ],
  "rows": [
   [
    "*Scope",
    "Shared"
   ],
   [
    "Term",
    "3 years"
   ],
   [
    "Billing frequency",
    "Monthly"
   ]
  ],
  "btn": "Add to cart"
 },
 "keep": "Reservation for several subscriptions on the same billing account = Shared scope."
},
{
 "id": "D1-132",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your company uses a mix of VMs, App Service, and Azure Functions Premium whose sizes change often. It wants a discount in exchange for an hourly spending commitment over 1 or 3 years, without being tied to a VM size or region.</p><p>What should you recommend?</p>",
 "opts": [
  "Azure Hybrid Benefit",
  "An Azure savings plan for compute",
  "Spot VMs",
  "A VM reservation"
 ],
 "ans": 1,
 "expl": "<p>The <b>savings plan for compute</b> commits an hourly amount and applies the discount to several compute services, whatever the size and region. It suits workloads that change.</p><p>A <b>reservation</b> gives a larger discount, but for a specific size family and region. Spot VMs can be interrupted. Azure Hybrid Benefit depends on existing licenses.</p>",
 "portal": {
  "path": [
   "Savings plans"
  ],
  "title": "Purchase a savings plan",
  "menu": [
   "*Basics",
   "Review + buy"
  ],
  "rows": [
   [
    "*Hourly commitment",
    "€25 / hour"
   ],
   [
    "Term",
    "3 years"
   ],
   [
    "Applies to",
    "VMs, App Service, Functions Premium… any size, any region"
   ]
  ],
  "btn": "Purchase"
 },
 "keep": "Compute workloads that change = savings plan. Fixed size and region = reservation (larger discount)."
},
{
 "id": "D1-133",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to add the tag Project=Alpha to the resource group RG1, <b>without removing</b> its existing tags.</p><p>How should you complete the Azure CLI command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az tag {0} --resource-id /subscriptions/&lt;id&gt;/resourceGroups/RG1 --operation {1} --tags Project=Alpha",
 "rows": [
  {
   "l": "Command",
   "o": [
    "update",
    "create",
    "add-value"
   ],
   "a": 0
  },
  {
   "l": "Operation",
   "o": [
    "Replace",
    "Merge",
    "Delete"
   ],
   "a": 1
  }
 ],
 "expl": "<p><code>az tag update --operation Merge</code> adds or updates the given tags without touching the others.</p><ul><li><b>Replace</b> would replace all tags with Project=Alpha alone.</li><li><b>Delete</b> would remove the tag.</li><li><code>az tag create --resource-id</code> also replaces the whole set of tags. <code>add-value</code> is for the subscription's old predefined tags.</li></ul><p>The PowerShell equivalent is <code>Update-AzTag -Operation Merge</code>.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Tags",
  "menu": [
   "Overview",
   "*Tags"
  ],
  "rows": [
   [
    "Environment",
    "Prod (kept)"
   ],
   [
    "*Project",
    "Alpha (added)"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Adding without overwriting = az tag update --operation Merge (Update-AzTag -Operation Merge)."
},
{
 "id": "D1-134",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to rename the resource group RG-Old to RG-Finance.</p><p>What should you do?</p>",
 "opts": [
  "Change the Name tag of RG-Old",
  "Use the portal's Rename option",
  "Create RG-Finance, move the resources into it, then delete RG-Old",
  "Use Set-AzResourceGroup -NewName"
 ],
 "ans": 2,
 "expl": "<p>A resource group <b>can't be renamed</b>. The method is to create the new group, <b>move</b> the resources into it (those that support it), then delete the old one.</p><p>The Name tag is just metadata. Set-AzResourceGroup has no -NewName parameter.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Old"
  ],
  "title": "RG-Old | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Rename",
    "Not possible"
   ],
   [
    "Solution",
    "Move the resources to RG-Finance"
   ]
  ],
  "btn": "Move"
 },
 "keep": "A resource group can't be renamed: new group + move."
},
{
 "id": "D1-135",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You manage a management group hierarchy.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "The root management group can be deleted.",
   "a": 1
  },
  {
   "l": "A management group's display name can be changed.",
   "a": 0
  },
  {
   "l": "A management group's ID can be changed after it is created.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Delete the root: No.</b> The root group can be neither deleted nor moved.</li><li><b>Display name: Yes.</b> The name shown in the portal can be changed.</li><li><b>ID: No.</b> The ID is the unique identifier used in scope paths: it is set at creation.</li></ul>",
 "portal": {
  "path": [
   "Management groups",
   "MG-Prod"
  ],
  "title": "MG-Prod | Details",
  "menu": [
   "*Details",
   "Subscriptions"
  ],
  "rows": [
   [
    "ID",
    "mg-prod (fixed)"
   ],
   [
    "*Display name",
    "Production (editable)"
   ]
  ],
  "btn": "Rename"
 },
 "keep": "Management group: display name editable, ID fixed; the root can't be deleted."
},
{
 "id": "D1-136",
 "dom": 1,
 "type": "single",
 "stem": "<p>You create a custom role that contains the data action <code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read</code>. You want its AssignableScopes to contain the management group MG-Data.</p><p>What happens?</p>",
 "opts": [
  "The creation succeeds, but the role can only be assigned to groups",
  "The creation fails: DataActions are reserved for built-in roles",
  "The creation succeeds",
  "The creation fails: a custom role with DataActions can't be assignable to a management group"
 ],
 "ans": 3,
 "expl": "<p>A custom role can have a management group in its AssignableScopes, but then <b>without DataActions</b>. Here you must use subscriptions or resource groups as assignable scopes.</p><p>Another limit: only one management group per custom role. DataActions are perfectly possible in custom roles outside this case.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1",
   "Access control (IAM)"
  ],
  "title": "Create a custom role | Assignable scopes",
  "menu": [
   "Basics",
   "Permissions",
   "*Assignable scopes"
  ],
  "rows": [
   [
    "*MG-Data",
    "Rejected: the role contains DataActions"
   ],
   [
    "Sub-Data",
    "Accepted"
   ]
  ]
 },
 "keep": "Custom role with DataActions: no management group as an assignable scope."
},
{
 "id": "D1-137",
 "dom": 1,
 "type": "single",
 "stem": "<p>You just assigned the Contributor role to User14 on RG1. User14 says he still doesn't see RG1's resources in the portal.</p><p>What is the most likely cause?</p>",
 "opts": [
  "Role assignments can take a few minutes to apply: he should refresh or sign in again",
  "Contributor doesn't allow viewing resources",
  "He also needs a Microsoft Entra ID P2 license",
  "The role must be assigned twice"
 ],
 "ans": 0,
 "expl": "<p>A new assignment can take up to about ten minutes to take effect. Signing out and back in (or refreshing the portal) forces a new token to be fetched.</p><p>No license is required for an Azure role. Contributor includes read access.</p>",
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
 "keep": "A new assignment can take a few minutes: sign in again for a new token."
},
{
 "id": "D1-138",
 "dom": 1,
 "type": "single",
 "stem": "<p>Administrators must sign in to the Windows virtual machine VM1 with their Microsoft Entra account, with local administrator rights. The Microsoft Entra login extension is installed on VM1.</p><p>Which role should you assign them on VM1?</p>",
 "opts": [
  "Global Administrator",
  "Virtual Machine Administrator Login",
  "Virtual Machine User Login",
  "Virtual Machine Contributor"
 ],
 "ans": 1,
 "expl": "<p>Signing in to a VM with an Entra account is controlled by two Azure roles: <b>Virtual Machine Administrator Login</b> (local administrator rights) and <b>Virtual Machine User Login</b> (standard user rights).</p><p><b>Virtual Machine Contributor</b> manages the VM resource, but doesn't allow signing in to its operating system. Global Administrator is an Entra role unrelated to VM sign-in.</p>",
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
    "*Role",
    "Virtual Machine Administrator Login"
   ],
   [
    "Members",
    "GRP-Admins"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Entra sign-in to a VM: Virtual Machine Administrator Login (local admin) or Virtual Machine User Login."
},
{
 "id": "D1-139",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>The key vault KV1 uses the <b>Azure role-based access control</b> permission model. You need to assign the appropriate built-in role for each need, following the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "srcs": [
  "Key Vault Administrator",
  "Key Vault Secrets Officer",
  "Key Vault Secrets User",
  "Key Vault Reader"
 ],
 "tgtHead": [
  "Need",
  "Role"
 ],
 "tgts": [
  {
   "l": "An application reads a secret's value",
   "a": 2
  },
  {
   "l": "A developer creates, modifies, and deletes secrets",
   "a": 1
  },
  {
   "l": "An auditor sees secrets' metadata, without their values",
   "a": 3
  },
  {
   "l": "The security team manages all of the vault's data: keys, secrets, and certificates",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Secrets User</b>: reads secret contents.</li><li><b>Secrets Officer</b>: any action on secrets, except managing permissions.</li><li><b>Key Vault Reader</b>: reads metadata (names, dates…), never values.</li><li><b>Key Vault Administrator</b>: all operations on the vault's data (keys, secrets, certificates).</li></ul>",
 "portal": {
  "path": [
   "Key vaults",
   "KV1"
  ],
  "title": "KV1 | Access control (IAM)",
  "menu": [
   "Overview",
   "*Access control (IAM)",
   "Secrets"
  ],
  "rows": [
   [
    "*Key Vault Secrets User",
    "app-web"
   ],
   [
    "Key Vault Secrets Officer",
    "dev1"
   ],
   [
    "Key Vault Reader",
    "auditor"
   ]
  ]
 },
 "keep": "Secrets: User = read, Officer = manage, Reader = metadata, Administrator = the whole data plane."
},
{
 "id": "D1-140",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to export the list of all users in your Microsoft Entra tenant to a CSV file, from the portal.</p><p>Which operation should you use?</p>",
 "opts": [
  "Export the audit log",
  "Create a Cost Management export",
  "Download users (bulk operations)",
  "Export the tenant's ARM template"
 ],
 "ans": 2,
 "expl": "<p>In <b>Users</b>, the bulk operations menu offers <b>Download users</b>, which generates a CSV file of users and their properties.</p><p>The audit log contains events, not the list of accounts. Cost exports concern billing. An Entra tenant can't be exported as an ARM template.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Users",
   "All users"
  ],
  "title": "Download users",
  "menu": [
   "All users",
   "*Bulk operations"
  ],
  "rows": [
   [
    "*Download users",
    "CSV file"
   ]
  ],
  "btn": "Start"
 },
 "keep": "List of users as CSV = Bulk operations > Download users."
},
{
 "id": "D1-141",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your organization wants to check every quarter that the guests in the group GRP-Partners still need access. Each partner's managers must confirm or deny each access.</p><p>What should you configure?</p>",
 "opts": [
  "A group expiration policy",
  "A budget alert",
  "A dynamic group",
  "An access review"
 ],
 "ans": 3,
 "expl": "<p>An <b>access review</b> (Microsoft Entra ID Governance, P2 or Governance license) asks reviewers to confirm or deny each member's access, on a schedule. Denied access can be removed automatically.</p><p>Expiration deletes the whole group, not members one by one. A dynamic group depends on attributes, not human validation.</p>",
 "portal": {
  "path": [
   "Identity Governance",
   "Access reviews"
  ],
  "title": "New access review",
  "menu": [
   "*Access reviews",
   "Entitlement management"
  ],
  "rows": [
   [
    "Scope",
    "Guest users of GRP-Partners"
   ],
   [
    "*Reviewers",
    "Managers of users"
   ],
   [
    "Recurrence",
    "Quarterly"
   ],
   [
    "Auto apply results to resource",
    "Yes"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Having humans validate access periodically = access review."
},
{
 "id": "D1-142",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assign Sub1 a policy with the <b>Append</b> effect that adds an IP address rule to the firewall of storage accounts when they are created.</p><p>Which statement is true?</p>",
 "opts": [
  "Append adds fields to the create or update request",
  "Append deploys a separate resource",
  "Append removes non-compliant fields",
  "Append blocks the creation if the field is missing"
 ],
 "ans": 0,
 "expl": "<p><b>Append</b> adds fields to the resource during creation or update, for example an IP rule or a property value. For tags, the <b>Modify</b> effect is now preferred.</p><p>Blocking is <b>Deny</b>. Deploying a separate resource is <b>DeployIfNotExists</b>. Append removes nothing.</p>",
 "portal": {
  "path": [
   "Policy",
   "Definitions"
  ],
  "title": "Policy effects",
  "menu": [
   "Overview",
   "*Definitions"
  ],
  "rows": [
   [
    "*Append",
    "Adds fields to the request"
   ],
   [
    "Modify",
    "Adds or changes properties and tags"
   ],
   [
    "Deny",
    "Rejects the request"
   ]
  ]
 },
 "keep": "Append adds fields to the request; it neither blocks nor deploys."
},
{
 "id": "D1-143",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to report the virtual machines that do <b>not</b> have the antivirus extension installed, without deploying or blocking anything.</p><p>Which Azure Policy effect fits?</p>",
 "opts": [
  "Modify",
  "AuditIfNotExists",
  "Deny",
  "DeployIfNotExists"
 ],
 "ans": 1,
 "expl": "<p><b>AuditIfNotExists</b> checks for a related resource (here the extension) and marks the VM non-compliant if it's missing. It deploys nothing.</p><p>DeployIfNotExists would install it. Deny would block VM creation. Modify would change the VM's properties.</p>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Antivirus extension | Compliance",
  "menu": [
   "Overview",
   "*Compliance"
  ],
  "rows": [
   [
    "*Effect",
    "AuditIfNotExists"
   ],
   [
    "VMs without the extension",
    "Non-compliant"
   ]
  ]
 },
 "keep": "Reporting a missing related resource = AuditIfNotExists; deploying it = DeployIfNotExists."
},
{
 "id": "D1-144",
 "dom": 1,
 "type": "single",
 "stem": "<p>A policy assignment contains two policies on the same storage accounts: one with the Modify effect, the other with the Deny effect.</p><p>In which order does Azure Policy evaluate these effects during a creation?</p>",
 "opts": [
  "In alphabetical order of the definitions",
  "Both at the same time, Deny wins",
  "Modify, then Deny",
  "Deny, then Modify"
 ],
 "ans": 2,
 "expl": "<p>The evaluation order is: <b>Disabled</b>, then <b>Append and Modify</b>, then <b>Deny</b>, then <b>Audit</b>, and finally, after creation, <b>AuditIfNotExists and DeployIfNotExists</b>.</p><p>Since Modify runs before Deny, a request can be fixed by Modify and then accepted by Deny, which avoids needless denials.</p>",
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
 "keep": "Order: Disabled → Append/Modify → Deny → Audit → *IfNotExists."
},
{
 "id": "D1-145",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You assign the built-in <b>Allowed locations</b> policy to the management group MG-EU. Only the France Central and West Europe regions must be allowed. The resource group RG-Sandbox must not be evaluated. The policy must block deployments right away.</p><p>How should you configure the assignment?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Assign policy",
  "sub": "Allowed locations",
  "rows": [
   {
    "k": "head",
    "t": "Basics"
   },
   {
    "k": "text",
    "l": "Scope",
    "t": "MG-EU"
   },
   {
    "k": "select",
    "l": "Exclusions",
    "o": [
     "None",
     "RG-Sandbox",
     "MG-EU"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "select",
    "l": "Policy enforcement",
    "o": [
     "Enabled",
     "Disabled"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Parameters"
   },
   {
    "k": "select",
    "l": "Allowed locations",
    "o": [
     "France Central",
     "France Central ; West Europe",
     "All regions"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "Remediation"
   },
   {
    "k": "check",
    "l": "Create a Managed Identity",
    "a": false
   }
  ]
 },
 "expl": "<ul><li><b>Exclusions: RG-Sandbox.</b> The resource group isn't evaluated.</li><li><b>Policy enforcement: Enabled.</b> With <b>Disabled</b> (enforcementMode DoNotEnforce), the Deny effect isn't applied: compliance is only calculated, which is used to test a policy.</li><li><b>Locations: France Central ; West Europe.</b></li><li><b>Managed identity: no.</b> It's only useful for Modify and DeployIfNotExists. Allowed locations uses Deny.</li></ul>",
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
    "MG-EU"
   ],
   [
    "*Exclusions",
    "RG-Sandbox"
   ],
   [
    "*Policy enforcement",
    "Enabled"
   ],
   [
    "Allowed locations",
    "France Central ; West Europe"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Policy enforcement Disabled = test mode (DoNotEnforce): nothing is blocked."
},
{
 "id": "D1-146",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need to check which users have an Azure role on the resource group RG1, and add a new one.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "RG1 | Resource group",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access control (IAM)",
     "Tags",
     "Resource visualizer",
     "Events"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Deployments",
     "Security",
     "Policies",
     "Properties",
     "Locks"
    ]
   },
   {
    "g": "Cost Management",
    "items": [
     "Cost analysis",
     "Cost alerts",
     "Budgets"
    ]
   }
  ]
 },
 "ans": "Access control (IAM)",
 "expl": "<p><b>Access control (IAM)</b> shows role assignments (including inherited ones), lets you add some, and gives access to role definitions, deny assignments, and the Check access tool.</p><p><b>Policies</b> shows Azure Policy compliance; <b>Locks</b> manages locks; the activity log records operations.</p>",
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
    "Tabs",
    "Check access · Role assignments · Roles · Deny assignments"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Viewing and adding Azure roles = the scope's Access control (IAM)."
},
{
 "id": "D1-147",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to transfer billing ownership of the subscription Sub3 to another account administrator, <b>in the same tenant</b>.</p><p>What happens to the Azure role assignments on Sub3?</p>",
 "opts": [
  "They are converted to Reader assignments",
  "They are all deleted",
  "Only Owner assignments are deleted",
  "They are kept"
 ],
 "ans": 3,
 "expl": "<p>A <b>billing ownership</b> transfer within the same tenant doesn't change the trusted directory: role assignments are <b>kept</b>.</p><p>It's <b>tenant</b> changes (changing directory) that delete assignments.</p>",
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
 "keep": "Billing transfer in the same tenant = roles kept. Tenant change = roles deleted."
},
{
 "id": "D1-148",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to delete a finished test project. All its resources (VMs, disks, network, storage) are in the resource group RG-Test, and no other resources are in it.</p><p>What is the fastest method?</p>",
 "opts": [
  "Delete the resource group RG-Test",
  "Apply a ReadOnly lock to RG-Test",
  "Move the resources to another subscription",
  "Delete each resource one by one"
 ],
 "ans": 0,
 "expl": "<p>Deleting a <b>resource group</b> deletes all the resources it contains, in a single operation. That's the point of grouping resources that share the same lifecycle.</p><p>Deleting one by one takes longer and risks missing dependencies. A lock would actually prevent the deletion.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG-Test"
  ],
  "title": "RG-Test | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Delete resource group",
    "Deletes all contained resources"
   ],
   [
    "Confirmation",
    "Type RG-Test"
   ]
  ],
  "btn": "Delete"
 },
 "keep": "Same lifecycle = same resource group: delete everything at once."
},
{
 "id": "D1-149",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow a consultant to view the costs and budgets of the subscription Sub1, without seeing or modifying the resources.</p><p>Which role should you assign?</p>",
 "opts": [
  "Billing Reader",
  "Cost Management Reader",
  "Reader",
  "Cost Management Contributor"
 ],
 "ans": 1,
 "expl": "<p><b>Cost Management Reader</b> lets you view costs, budgets, and cost recommendations, without access to the resources themselves.</p><ul><li><b>Reader</b> also gives read access to resources.</li><li><b>Cost Management Contributor</b> also lets you create and edit budgets and exports.</li><li><b>Billing Reader</b> gives access to invoices, not to cost analysis or budgets.</li></ul>",
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
    "Cost Management Reader"
   ],
   [
    "Members",
    "consultant@firm.com"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "View costs and budgets = Cost Management Reader; create them = Cost Management Contributor; invoices = Billing Reader."
},
{
 "id": "D1-150",
 "dom": 1,
 "type": "hot",
 "stem": "<p>You manage the identities of your Microsoft Entra tenant.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "A deleted user can be restored for:",
   "o": [
    "7 days",
    "30 days",
    "90 days"
   ],
   "a": 1
  },
  {
   "l": "A deleted security group can be restored for:",
   "o": [
    "0 days (permanent deletion)",
    "30 days",
    "90 days"
   ],
   "a": 0
  },
  {
   "l": "The Azure activity log keeps events for:",
   "o": [
    "30 days",
    "90 days",
    "365 days"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Users: 30 days</b> in Deleted users.</li><li><b>Security groups: immediate permanent deletion.</b> Only Microsoft 365 groups stay soft-deleted for 30 days.</li><li><b>Activity log: 90 days.</b> To keep it longer, send it to Log Analytics or a storage account with a diagnostic setting.</li></ul>",
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
    "*User",
    "30 days"
   ],
   [
    "Microsoft 365 group",
    "30 days"
   ],
   [
    "Security group",
    "0 days"
   ],
   [
    "Azure activity log",
    "90 days"
   ]
  ]
 },
 "keep": "User and Microsoft 365 group: 30 days. Security group: none. Activity log: 90 days."
},
{
 "id": "D1-151",
 "dom": 1,
 "type": "single",
 "stem": "<p>You need to allow User15 to create resource groups in the subscription Sub1, and to manage only the resources in those new groups. He must have no rights on existing groups.</p><p>Which solution is the simplest?</p>",
 "opts": [
  "Assign him Reader on Sub1",
  "Assign him a custom role with Microsoft.Resources/subscriptions/resourceGroups/write on Sub1; he becomes Owner of the groups he creates",
  "Assign him a custom role on Sub1 that allows creating resource groups, then assign him Contributor on each new group",
  "Assign him Contributor on Sub1"
 ],
 "ans": 2,
 "expl": "<p>A role on Sub1 that only allows <b>creating resource groups</b> gives no rights over existing resources. You then assign him <b>Contributor on each new group</b>.</p><ul><li>Contributor on Sub1 would give access to all existing groups.</li><li>The creator of a resource group does <b>not</b> automatically become Owner: Azure assigns no role implicitly.</li><li>Reader doesn't allow creating.</li></ul>",
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
    "*Resource Group Creator (custom)",
    "resourceGroups/write"
   ],
   [
    "Then on RG-New",
    "Contributor"
   ]
  ]
 },
 "keep": "Creating a resource grants no implicit role: rights must be assigned afterward."
},
{
 "id": "D1-152",
 "dom": 1,
 "type": "single",
 "stem": "<p>A user needs a Microsoft Entra role only for 8 hours each month, for a closing operation. Your tenant has Microsoft Entra ID P2.</p><p>Which type of assignment should you create in Privileged Identity Management?</p>",
 "opts": [
  "Administrative unit assignment",
  "Permanently active",
  "Active with an end date in one year",
  "Eligible"
 ],
 "ans": 3,
 "expl": "<p>An <b>eligible</b> assignment doesn't grant the role permanently: the user <b>activates</b> it when needed, for a set maximum duration (for example 8 hours), with justification or approval.</p><p>An <b>active</b> assignment grants the role continuously, even with an end date. An administrative unit limits scope, not duration.</p>",
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
 "keep": "Role used occasionally = eligible assignment in PIM."
},
{
 "id": "D1-153",
 "dom": 1,
 "type": "single",
 "stem": "<p>Users in your tenant must use multifactor authentication to access the Azure portal, but not for other applications.</p><p>What should you configure?</p>",
 "opts": [
  "A Conditional Access policy targeting the Microsoft Azure Management app (or Microsoft Admin Portals)",
  "Self-service password reset",
  "Security defaults",
  "An Azure Policy"
 ],
 "ans": 0,
 "expl": "<p><b>Conditional Access</b> (Entra ID P1) applies conditions per application, user, location, or device. A policy that targets the Azure management apps and requires multifactor authentication meets the need.</p><p><b>Security defaults</b> apply to the whole tenant with no fine-tuning. Azure Policy governs resources. SSPR is for forgotten passwords.</p>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Conditional Access"
  ],
  "title": "New policy",
  "menu": [
   "*Policies",
   "Named locations"
  ],
  "rows": [
   [
    "Users",
    "All users"
   ],
   [
    "*Target resources",
    "Microsoft Admin Portals"
   ],
   [
    "*Grant",
    "Require multifactor authentication"
   ]
  ],
  "btn": "Create"
 },
 "keep": "MFA for a specific app = Conditional Access (P1). Security defaults = whole tenant, no tuning."
},
{
 "id": "D1-154",
 "dom": 1,
 "type": "single",
 "stem": "<p>The resource group RG-Shared contains resources used by three projects. You need to split RG-Shared's bill among these projects based on their actual use of each resource.</p><p>What is the essential prerequisite for cost analysis to tell the projects apart?</p>",
 "opts": [
  "Create one budget per project",
  "Apply a Project tag to each resource",
  "Create one subscription per resource",
  "Apply one lock per project"
 ],
 "ans": 1,
 "expl": "<p><b>Tags</b> applied to each resource appear in cost data: you can then group or filter cost analysis by Project.</p><p>One subscription per resource would be unmanageable. A budget tracks an amount; it splits nothing. A lock has nothing to do with costs.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub1"
  ],
  "title": "Sub1 | Cost analysis",
  "menu": [
   "Overview",
   "*Cost analysis"
  ],
  "rows": [
   [
    "*Group by",
    "Tag: Project"
   ],
   [
    "Alpha",
    "41%"
   ],
   [
    "Beta",
    "35%"
   ],
   [
    "Gamma",
    "24%"
   ]
  ]
 },
 "keep": "Splitting costs = tags on resources, then Group by tag."
},
{
 "id": "D1-155",
 "dom": 1,
 "type": "multi",
 "pick": 2,
 "stem": "<p>Your company wants to lower the bill for 20 production Windows Server VMs that will run continuously for 3 years. It owns Windows Server licenses with Software Assurance.</p><p>Which <b>two</b> combined actions give the largest reduction?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Enable Azure Hybrid Benefit on the VMs",
  "Switch the disks to Standard HDD",
  "Convert the VMs to Spot VMs",
  "Buy 3-year VM reservations"
 ],
 "ans": [
  0,
  3
 ],
 "expl": "<ul><li><b>3-year reservations: yes.</b> They greatly reduce compute cost for a continuous workload.</li><li><b>Azure Hybrid Benefit: yes.</b> It removes the Windows license cost. The two discounts stack.</li><li><b>Spot VMs: no.</b> They can be interrupted, which is unacceptable in production.</li><li><b>Standard HDD: no.</b> The savings are small and it degrades production performance.</li></ul>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Prod1"
  ],
  "title": "VM-Prod1 | Configuration",
  "menu": [
   "Overview",
   "*Configuration"
  ],
  "rows": [
   [
    "*Licensing · Use existing Windows Server license",
    "Yes (Azure Hybrid Benefit)"
   ],
   [
    "Reservation",
    "3 years · shared scope"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Reservations and Hybrid Benefit stack: the first lowers compute, the second the license."
},
{
 "id": "D1-156",
 "dom": 1,
 "type": "single",
 "stem": "<p>You assigned a policy with the Audit effect two days ago. You need to get the list of non-compliant resources and the reason for their non-compliance.</p><p>Where should you look?</p>",
 "opts": [
  "The subscription's metrics",
  "The activity log, Security category",
  "Azure Policy > Compliance, then the relevant assignment",
  "Azure Advisor > Reliability"
 ],
 "ans": 2,
 "expl": "<p>Azure Policy's <b>Compliance</b> page lists each assignment with its compliance percentage. Opening the assignment shows the non-compliant resources and, for each one, the <b>compliance details</b> (expected value and actual value).</p><p>The Audit effect also writes an event to the activity log, but it's less convenient. Advisor and metrics don't show policy compliance.</p>",
 "portal": {
  "path": [
   "Policy",
   "Compliance"
  ],
  "title": "Policy | Compliance",
  "menu": [
   "Overview",
   "*Compliance",
   "Remediation"
  ],
  "rows": [
   [
    "*My-assignment",
    "62% compliant"
   ],
   [
    "Non-compliant resource",
    "Details: expected value / actual value"
   ]
  ]
 },
 "keep": "Non-compliant resources and reasons = Policy > Compliance > assignment > details."
},
{
 "id": "D1-157",
 "dom": 1,
 "type": "single",
 "stem": "<p>A custom policy contains the following rule:</p><pre>\"if\": {\n  \"field\": \"type\",\n  \"equals\": \"Microsoft.Network/publicIPAddresses\"\n},\n\"then\": {\n  \"effect\": \"deny\"\n}</pre><p>It is assigned to RG1. What happens when an administrator creates a virtual machine in RG1 with the “New public IP address” option?</p>",
 "opts": [
  "The VM is created with the public IP address and flagged non-compliant",
  "The VM is created without a public IP address",
  "The policy doesn't apply to VMs",
  "The deployment fails, because creating the public IP address is denied"
 ],
 "ans": 3,
 "expl": "<p>Creating a VM with a new public IP address also creates a <code>Microsoft.Network/publicIPAddresses</code> resource. That resource is denied, so the <b>deployment fails</b>.</p><p>Azure Policy doesn't change the deployment for you to remove the address. Deny doesn't create the resource. The rule targets the public IP address type, whatever the creation context.</p>",
 "portal": {
  "path": [
   "Resource groups",
   "RG1"
  ],
  "title": "RG1 | Deployments",
  "menu": [
   "Overview",
   "*Deployments"
  ],
  "rows": [
   [
    "*Failed",
    "RequestDisallowedByPolicy"
   ],
   [
    "Denied resource",
    "Microsoft.Network/publicIPAddresses"
   ]
  ]
 },
 "keep": "A Deny on one resource of the deployment makes the whole deployment fail."
},
{
 "id": "D1-158",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You compare Microsoft Entra roles and Azure roles.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "The Global Administrator role gives access to all Azure resources in the subscriptions by default.",
   "a": 1
  },
  {
   "l": "The Owner role on a subscription allows creating users in Microsoft Entra ID.",
   "a": 1
  },
  {
   "l": "The same user can have both Microsoft Entra roles and Azure roles.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Global Administrator and resources: No.</b> They have no access to Azure resources by default; they must elevate their access (User Access Administrator at the root).</li><li><b>Owner and users: No.</b> An Azure role grants no rights on the directory.</li><li><b>Both at once: Yes.</b> The two systems are independent and can be combined.</li></ul>",
 "portal": {
  "path": [
   "Microsoft Entra ID",
   "Properties"
  ],
  "title": "Microsoft Entra ID | Properties",
  "menu": [
   "Overview",
   "*Properties"
  ],
  "rows": [
   [
    "*Access management for Azure resources",
    "No (default)"
   ]
  ]
 },
 "keep": "Entra roles and Azure roles are separate and can be combined; a Global Administrator must elevate access."
},
{
 "id": "D1-159",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your tenant contains a production subscription. Developers have the Contributor role on RG-Dev. You need to prevent resources created in RG-Dev from being located outside France Central, even if a developer edits the deployment template.</p><p>What should you use?</p>",
 "opts": [
  "An Allowed locations policy assigned to RG-Dev",
  "A Delete lock on RG-Dev",
  "A custom role without the Microsoft.Resources/deployments/write action",
  "A Region=FranceCentral tag on RG-Dev"
 ],
 "ans": 0,
 "expl": "<p>Azure Policy controls resource <b>properties</b> at deployment time, whatever method is used (portal, template, CLI). Allowed locations denies any region other than France Central.</p><p>Removing the deployment action would prevent any template deployment, without controlling the region. A lock prevents deletion. A tag is metadata with no effect.</p>",
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
    "Scope",
    "RG-Dev"
   ],
   [
    "*Allowed locations",
    "France Central"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Azure Policy applies whatever the deployment tool (portal, template, CLI)."
},
{
 "id": "D1-160",
 "dom": 1,
 "type": "single",
 "stem": "<p>Your company acquires Fabrikam, which has its own Microsoft Entra tenant and 3 Azure subscriptions. You need to attach these subscriptions to your contoso.com tenant.</p><p>What should you plan for?</p>",
 "opts": [
  "Merge the two tenants from the portal",
  "Change each subscription's directory, then recreate role assignments and managed identities",
  "Add fabrikam.com as a management group",
  "Move the resources one by one to your subscriptions, with no other impact"
 ],
 "ans": 1,
 "expl": "<p>Each subscription trusts a single tenant. To attach it to contoso.com, you <b>change its directory</b> (Change directory). Role assignments, managed identities, and key vault access must then be recreated or updated.</p><p>You can't move resources directly between tenants. Tenants can't be merged. A management group isn't a domain.</p>",
 "portal": {
  "path": [
   "Subscriptions",
   "Sub-Fabrikam1"
  ],
  "title": "Change directory",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Target directory",
    "contoso.com"
   ],
   [
    "To redo afterward",
    "Role assignments, managed identities, key vaults"
   ]
  ],
  "btn": "Change"
 },
 "keep": "Attaching a subscription to another tenant = Change directory, then recreate access."
}
);
