/* Domain 1: identities and governance (batch B : D1-011 to D1-060) */
AZ.questions.push(
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
 "id": "D1-015",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>You enable self-service password reset (SSPR) for all users in your Microsoft Entra tenant. The number of methods required to reset is set to 2.</p><p>For each of the following methods, select Yes if you can offer it. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Company network IP address",
   "a": 1
  },
  {
   "l": "Verification code sent by email",
   "a": 0
  },
  {
   "l": "Certificate installed on the user's computer",
   "a": 1
  },
  {
   "l": "Notification in Microsoft Authenticator",
   "a": 0
  }
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
 "id": "D1-018",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to assign each administrator the appropriate built-in Microsoft Entra role. The solution must follow the principle of least privilege.</p><p>Which role should you assign for each need?</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "tgtHead": [
  "Need",
  "Role"
 ],
 "srcs": [
  "Global Administrator",
  "User Administrator",
  "Helpdesk Administrator",
  "Groups Administrator",
  "Global Reader"
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
 "id": "D1-022",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>Your company manages several types of devices. You need to choose the appropriate Microsoft Entra device state for each situation.</p><p>To answer, drag the appropriate state to each situation. Each state may be used once, more than once, or not at all.</p>",
 "srcLabel": "States",
 "tgtHead": [
  "Situation",
  "State"
 ],
 "srcs": [
  "Microsoft Entra registered",
  "Microsoft Entra joined",
  "Microsoft Entra hybrid joined"
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
 "id": "D1-031",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Policy effect for each requirement.</p><p>To answer, drag the appropriate effect to each requirement. Each effect may be used once, more than once, or not at all.</p>",
 "srcLabel": "Effects",
 "tgtHead": [
  "Requirement",
  "Effect"
 ],
 "srcs": [
  "Audit",
  "Deny",
  "Modify",
  "DeployIfNotExists",
  "Disabled"
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
 "id": "D1-035",
 "dom": 1,
 "type": "yngrid",
 "stem": "<p>The subscription Sub1 contains the resource group RG1. You need to ensure that every resource created in RG1 receives the <b>CostCenter</b> tag with the same value as RG1's.</p><p>For each of the following statements, select Yes if it's true. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A remediation task is needed for existing resources",
   "a": 0
  },
  {
   "l": "A lock on RG1 copies its tags to its resources",
   "a": 1
  },
  {
   "l": "Resources automatically inherit RG1's tags",
   "a": 1
  },
  {
   "l": "The “Inherit a tag from the resource group” policy fits",
   "a": 0
  }
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
 "id": "D1-044",
 "dom": 1,
 "type": "dragdrop",
 "stem": "<p>You need to reduce your company's Azure costs. Which option matches each situation?</p><p>To answer, drag the appropriate option to each situation. Each option may be used once, more than once, or not at all.</p>",
 "srcLabel": "Options",
 "tgtHead": [
  "Situation",
  "Option"
 ],
 "srcs": [
  "Azure reservation",
  "Azure Hybrid Benefit",
  "Spot virtual machine",
  "Scheduled auto-shutdown"
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
 "id": "D1-050",
 "dom": 1,
 "type": "order",
 "stem": "<p>You need to allow the Network team (an existing Microsoft Entra group named GRP-Network) to manage only the virtual networks of the subscription Sub1, with a custom role that doesn't exist yet.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 "keep": "Custom role: define, create, then assign. Entra roles and administrative units don't apply to Azure resources.",
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
 ]
},
{
 "id": "D1-051",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to assign the Reader role to the group GRP-Audit on the resource group RG1, by using Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Assigning a role with the CLI: az role assignment create --assignee … --role … --resource-group or --scope.",
 "tpl": "az role {0} create --assignee-object-id &lt;GRP-Audit id&gt; --assignee-principal-type Group --role {1} {2} RG1"
},
{
 "id": "D1-052",
 "dom": 1,
 "type": "cmd",
 "stem": "<p>You need to apply a lock that prevents the deletion of the resource group RG1, by using Azure PowerShell.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "New-AzResourceLock -LockLevel CanNotDelete (Delete) or ReadOnly (Read-only). DoNotDelete doesn't exist.",
 "tpl": "{0} -LockName ProtectRG1 -LockLevel {1} -ResourceGroupName RG1"
},
{
 "id": "D1-056",
 "dom": 1,
 "type": "screen",
 "stem": "<p>You need to create a budget alert for the resource group RG-Dev. The budget is €1,000 per month. The Dev team must receive an email as soon as <b>actual</b> cost reaches 80% of the budget.</p><p>How should you configure the alert condition?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Actual = already spent; Forecasted = projection. A budget warns, it stops nothing.",
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
 }
},
{
 "id": "D1-057",
 "dom": 1,
 "type": "hotspot",
 "stem": "<p>You need to allow users in your tenant to register up to 10 devices each.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "All device join and registration rules are in Device settings.",
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
 }
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
