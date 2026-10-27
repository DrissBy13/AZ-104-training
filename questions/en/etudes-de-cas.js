/* Case studies */
AZ.cases.push(
{
 "id": "C001",
 "title": "Fabrikam",
 "docs": [
  {
   "t": "Overview",
   "h": "<p><b>Overview</b></p><p>Fabrikam is a manufacturing company headquartered in Lyon. It has a production site in Grenoble. The IT team is gradually migrating its servers to Azure.</p>"
  },
  {
   "t": "Existing environment",
   "h": "<p><b>Azure environment</b></p><p>Fabrikam has a Microsoft Entra tenant named fabrikam.com and the following subscriptions:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Subscription</th><th>Content</th></tr><tr><td>Sub-Prod</td><td>VNet-Prod (10.1.0.0/16, France Central), subnets Subnet-App and Subnet-Data; VM-APP1, VM-APP2, and VM-SQL1, deployed without availability zones; storage account stfabdocs (Standard, GRS)</td></tr><tr><td>Sub-Dev</td><td>VNet-Dev (10.2.0.0/16) and several test resource groups</td></tr></table></div><p><b>On-premises environment</b></p><p>The Lyon site (192.168.0.0/16) is connected to VNet-Prod by a site-to-site VPN. A Microsoft Entra group named Dev-Team contains all developers.</p>"
  },
  {
   "t": "Requirements",
   "h": "<p><b>Technical requirements</b></p><ul><li>Dev-Team members must manage all resources in Sub-Dev, without being able to manage access.</li><li>Resources in Sub-Dev must only be creatable in the France Central region.</li><li>The application hosted on VM-APP1 and VM-APP2 must offer an SLA of at least 99.99%.</li><li>Lyon site users must access stfabdocs without going over the internet. Public access to stfabdocs must be disabled.</li><li>Documents in stfabdocs not modified for 90 days must automatically move to the Archive tier.</li><li>VM-SQL1 must be backed up every day. Administrators must receive an email if a backup fails.</li></ul><p><b>Constraints</b></p><ul><li>Solutions must minimize costs and administrative effort.</li></ul>"
  }
 ],
 "questions": [
  {
   "id": "C001-1",
   "dom": 1,
   "type": "hot",
   "stem": "<p>You need to meet the requirement for Dev-Team members.</p><p>What should you assign to Dev-Team? To answer, select the appropriate options in the answer area.</p>",
   "rows": [
    {
     "l": "Role:",
     "o": [
      "Owner",
      "Contributor",
      "Reader",
      "User Access Administrator"
     ],
     "a": 1
    },
    {
     "l": "Scope:",
     "o": [
      "The root management group",
      "Sub-Dev",
      "Each resource group in Sub-Dev"
     ],
     "a": 1
    }
   ],
   "expl": "<p>“Manage all resources, without managing access” matches exactly the <b>Contributor</b> role. Owner and User Access Administrator manage access; Reader changes nothing.</p><p>The <b>Sub-Dev</b> scope covers all resource groups with a single assignment, including those created later. The root management group would give access to production.</p>",
   "portal": {
    "path": [
     "Subscriptions",
     "Sub-Dev"
    ],
    "title": "Add role assignment",
    "rows": [
     [
      "*Role",
      "Contributor"
     ],
     [
      "Members",
      "Dev-Team"
     ],
     [
      "Scope",
      "Sub-Dev"
     ]
    ],
    "btn": "Review + assign"
   },
   "keep": "Manage everything except access = Contributor, at the smallest scope that covers the need."
  },
  {
   "id": "C001-2",
   "dom": 1,
   "type": "single",
   "stem": "<p>You need to meet the requirement for allowed regions in Sub-Dev.</p><p>What should you configure?</p>",
   "opts": [
    "A read-only lock on Sub-Dev",
    "An Allowed locations Azure Policy with the Deny effect, assigned to Sub-Dev",
    "The Reader role for Dev-Team on all other regions",
    "A budget on Sub-Dev"
   ],
   "ans": 1,
   "expl": "<p>The built-in <b>Allowed locations</b> policy, Deny effect, assigned to <b>Sub-Dev</b>, blocks any creation outside France Central, whatever the user's role.</p><p>A ReadOnly lock would block all changes. Azure RBAC isn't configured by region. A budget alerts on costs but blocks nothing.</p>",
   "portal": {
    "path": [
     "Policy",
     "Assign policy"
    ],
    "title": "Allowed locations",
    "rows": [
     [
      "*Scope",
      "Sub-Dev"
     ],
     [
      "Locations",
      "France Central"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "Restricting regions = Azure Policy Allowed locations."
  },
  {
   "id": "C001-3",
   "dom": 3,
   "type": "single",
   "stem": "<p>You need to meet the availability requirement for the application hosted on VM-APP1 and VM-APP2.</p><p>What should you do?</p>",
   "opts": [
    "Place VM-APP1 and VM-APP2 in an availability set",
    "Convert both VMs' disks to Premium SSD",
    "Redeploy VM-APP1 and VM-APP2 in two different availability zones",
    "Protect both VMs with Azure Backup"
   ],
   "ans": 2,
   "expl": "<p>The <b>99.99%</b> SLA requires at least two VMs in different <b>availability zones</b>. An availability set offers 99.95%, Premium disks alone give 99.9% for a single VM, and Azure Backup doesn't change availability.</p><p>A VM's zone is chosen at creation: the existing VMs, deployed without zones, must be <b>redeployed</b>.</p>",
   "portal": {
    "path": [
     "Virtual machines",
     "Create"
    ],
    "title": "Availability options",
    "rows": [
     [
      "*VM-APP1",
      "Zone 1"
     ],
     [
      "*VM-APP2",
      "Zone 2"
     ],
     [
      "SLA",
      "99.99%"
     ]
    ]
   },
   "keep": "99.99% = VMs in at least two zones."
  },
  {
   "id": "C001-4",
   "dom": 4,
   "type": "single",
   "stem": "<p>You need to meet the requirement for access to stfabdocs from the Lyon site.</p><p>What should you configure?</p>",
   "opts": [
    "A Microsoft.Storage service endpoint on Subnet-App",
    "A stfabdocs firewall rule with the Lyon site's public address",
    "A peering between VNet-Prod and VNet-Dev",
    "A private endpoint for stfabdocs in VNet-Prod and a private DNS zone"
   ],
   "ans": 3,
   "expl": "<p>The Lyon site is connected to VNet-Prod by VPN. A <b>private endpoint</b> for stfabdocs in VNet-Prod gives it a private address reachable through the tunnel. The <b>private DNS zone</b> privatelink.blob.core.windows.net (and on-premises resolution) points the name to that address. You can then disable public access.</p><p>A service endpoint doesn't serve on-premises traffic; an IP rule would go over the internet.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stfabdocs"
    ],
    "title": "Create a private endpoint",
    "rows": [
     [
      "Target sub-resource",
      "blob"
     ],
     [
      "*Virtual network",
      "VNet-Prod"
     ],
     [
      "DNS",
      "privatelink.blob.core.windows.net"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "Private access from a VPN-connected site = private endpoint + DNS."
  },
  {
   "id": "C001-5",
   "dom": 2,
   "type": "single",
   "stem": "<p>You need to meet the requirement for unmodified documents in stfabdocs.</p><p>What should you configure?</p>",
   "opts": [
    "A lifecycle management rule that moves blobs not modified for 90 days to Archive",
    "A 90-day time-based immutability policy",
    "The account's default access tier set to Archive",
    "Object replication to a second account"
   ],
   "ans": 0,
   "expl": "<p>A <b>lifecycle management</b> rule automatically moves blobs to <b>Archive</b> when their last modification is more than 90 days old.</p><p>Immutability prevents modification but doesn't change the tier. Archive can't be an account's default tier (only Hot or Cool). Object replication copies, it doesn't change tiers.</p>",
   "portal": {
    "path": [
     "Storage accounts",
     "stfabdocs"
    ],
    "title": "Lifecycle management › Add a rule",
    "rows": [
     [
      "If",
      "Last modified > 90 days"
     ],
     [
      "*Then",
      "Move to archive storage"
     ]
    ],
    "btn": "Add"
   },
   "keep": "Changing tier based on age = lifecycle management."
  },
  {
   "id": "C001-6",
   "dom": 5,
   "type": "single",
   "stem": "<p>You configured daily backup of VM-SQL1 to a Recovery Services vault.</p><p>You need to meet the backup failure notification requirement. What should you do?</p>",
   "opts": [
    "Create a vault diagnostic setting to Event Hubs",
    "Enable soft delete on the vault",
    "Create an alert processing rule that sends Azure Backup alerts to an action group",
    "Create an alert rule on VM-SQL1's activity log"
   ],
   "ans": 2,
   "expl": "<p>Azure Backup <b>automatically</b> creates Azure Monitor alerts when a backup fails, but notifies no one by default. An <b>alert processing rule</b> that adds an <b>action group</b> (email) to these alerts meets the need, with no effort.</p><p>Event Hubs streams to a third-party tool; soft delete protects data; the VM's activity log doesn't record backup job failures.</p>",
   "portal": {
    "path": [
     "Monitor",
     "Alerts"
    ],
    "title": "Create an alert processing rule",
    "rows": [
     [
      "Scope",
      "Recovery Services vault"
     ],
     [
      "*Rule type",
      "Apply action group"
     ],
     [
      "Action group",
      "AG-Admins (email)"
     ]
    ],
    "btn": "Review + create"
   },
   "keep": "Notifying backup failures = Azure Backup alerts + processing rule + action group."
  }
 ]
}
);
