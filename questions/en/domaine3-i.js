/* Domain 3: compute (batch I: D3-411 to D3-420, long scenarios) */
AZ.questions.push(
{
 "id": "D3-411",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The Data team runs a processing container every night in Azure Container Instances (ACI). The image is in private registry acrdata (Standard, admin account disabled).</p><ul><li>The container must stop after processing, without restarting, but must restart if it crashes before finishing.</li><li>Output files must be kept after the stop and readable by other teams over SMB.</li><li>The container must read an Azure SQL database reachable only through a private endpoint in VNet-Data.</li><li>No password may be used to pull the image.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Restart policy:",
   "o": [
    "OnFailure",
    "Never",
    "Always",
    "A liveness probe with Never"
   ],
   "a": 0
  },
  {
   "l": "Files:",
   "o": [
    "A gitRepo volume",
    "The container's local storage",
    "A mounted Azure Files volume",
    "An emptyDir volume"
   ],
   "a": 2
  },
  {
   "l": "Database access:",
   "o": [
    "A SQL firewall rule for ACI's IP",
    "A public IP on the container group",
    "A service endpoint on ACI",
    "A delegated subnet in VNet-Data"
   ],
   "a": 3
  },
  {
   "l": "Image pull:",
   "o": [
    "acrdata's admin account",
    "The registry with anonymous pull",
    "A managed identity with AcrPull",
    "A plain-text scope token"
   ],
   "a": 2
  }
 ],
 "expl": "<b>OnFailure.</b> The container restarts only if it exits with an error; a successful run stops. Always would restart it endlessly.<b>Azure Files.</b> An Azure Files volume persists after the stop and is read over SMB. emptyDir disappears with the group.<b>Virtual network.</b> A container group deployed in a subnet delegated to Microsoft.ContainerInstance/containerGroups gets a private IP and reaches the private endpoint.<b>Identity.</b> ACI can pull an image with a managed identity holding AcrPull on the registry, with no password.",
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
    "*Restart policy",
    "OnFailure"
   ],
   [
    "Files",
    "A mounted Azure Files volume"
   ],
   [
    "Database access",
    "A delegated subnet in VNet-Data"
   ],
   [
    "Image pull",
    "A managed identity with AcrPull"
   ]
  ]
 },
 "keep": "ACI: OnFailure for a job, Azure Files to persist, delegated subnet for private access, identity + AcrPull."
},
{
 "id": "D3-412",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The Orders API runs in Azure Container Apps, in environment cae-prod (consumption profile).</p><ul><li>A new version must get 10% of traffic for a week, the old one 90%.</li><li>Replica count must follow the number of pending messages in Service Bus queue orders, and drop to zero at night.</li><li>The Service Bus connection string must not appear in plain text in the app definition.</li><li>The API must only be called by other cae-prod apps, never from the internet.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "10% / 90%:",
   "o": [
    "Multiple revisions mode with traffic weights",
    "Azure Front Door in front of two apps",
    "Two environments behind a load balancer",
    "Single revision mode with two images"
   ],
   "a": 0
  },
  {
   "l": "Scaling:",
   "o": [
    "An HTTP rule on latency",
    "A fixed 3 replicas at night",
    "A KEDA Service Bus rule, minimum 0",
    "A CPU rule, minimum 1 replica"
   ],
   "a": 2
  },
  {
   "l": "Connection string:",
   "o": [
    "A plain-text environment variable",
    "A tag on the app",
    "A container app secret",
    "A container command argument"
   ],
   "a": 2
  },
  {
   "l": "Ingress:",
   "o": [
    "Disabled, call by replica IP",
    "Internal",
    "External with IP address restrictions",
    "External, with a custom domain"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Revisions.</b> In multiple revision mode, several revisions are active and traffic is split by percentage.<b>KEDA.</b> Container Apps uses KEDA rules; the azure-servicebus rule follows queue length, and a minimum of 0 lets it stop. An HTTP rule doesn't see messages.<b>Secret.</b> App secrets (or Key Vault references) are referenced by name in rules and variables, with no plain-text value.<b>Internal.</b> Internal ingress is only reachable from the environment (and its virtual network).",
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
    "*10% / 90%",
    "Multiple revisions mode with traffic weights"
   ],
   [
    "Scaling",
    "A KEDA Service Bus rule, minimum 0"
   ],
   [
    "Connection string",
    "A container app secret"
   ],
   [
    "Ingress",
    "Internal"
   ]
  ]
 },
 "keep": "Container Apps: multiple revisions and weights, KEDA rules, secrets, internal ingress."
},
{
 "id": "D3-413",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso uses three Azure Container Registry registries.</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Registry</th><th>Tier</th><th>Use</th></tr><tr><td>acrdev</td><td>Basic</td><td>Development</td></tr><tr><td>acrprod</td><td>Standard</td><td>Production, France Central</td></tr><tr><td>acrpart</td><td>Standard</td><td>Images for a partner</td></tr></table></div><p>New needs:</p><ul><li>acrprod must be available in West Europe under the same name, and reachable only through private addresses;</li><li>untagged manifests in acrprod must be deleted automatically after 7 days;</li><li>the partner must only be able to pull the app-partner repository from acrpart, with no Microsoft Entra account;</li><li>app-web's image must be rebuilt automatically in acrprod when the node:20 base image changes.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "acrprod, geo-replication and private access:",
   "o": [
    "Stay Standard",
    "Create acrprodwe in West Europe",
    "Upgrade to Premium",
    "Move to Basic"
   ],
   "a": 2
  },
  {
   "l": "Untagged manifests:",
   "o": [
    "A storage lifecycle policy",
    "A purge runbook",
    "Image locking",
    "A 7-day retention policy"
   ],
   "a": 3
  },
  {
   "l": "Partner:",
   "o": [
    "Anonymous read access on acrpart",
    "AcrPull on the whole acrpart registry",
    "acrpart's admin account",
    "A registry token and a scope map"
   ],
   "a": 3
  },
  {
   "l": "app-web rebuild:",
   "o": [
    "An ACR webhook to Docker Hub",
    "An Azure DevOps pipeline triggered by hand",
    "An ACR task (base image trigger)",
    "A task scheduled nightly at 2 AM"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Premium.</b> Geo-replication (same name, several regions) and Private Link are reserved for the Premium tier.<b>Retention.</b> The retention policy deletes untagged manifests after the chosen number of days (also a Premium feature, hence the tier change).<b>Token.</b> A token tied to a scope map grants per-repository rights (content/read), with no Entra identity; AcrPull would cover the whole registry.<b>ACR task.</b> An ACR task can trigger when the base image referenced in the Dockerfile is updated.",
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
    "*acrprod, geo-replication and private access",
    "Upgrade to Premium"
   ],
   [
    "Untagged manifests",
    "A 7-day retention policy"
   ],
   [
    "Partner",
    "A registry token and a scope map"
   ],
   [
    "app-web rebuild",
    "An ACR task (base image trigger)"
   ]
  ]
 },
 "keep": "ACR Premium: geo-replication, Private Link, retention. Per-repo access = token + scope map. Base image = ACR task."
},
{
 "id": "D3-414",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The portal web app (Premium v3) must connect to several network resources.</p><ul><li>portal must call an API on VM-Api (10.20.1.4, VNet-App), which has no public address.</li><li>portal must be reachable by headquarters users, connected to VNet-App by VPN, through a private address; all internet access must be blocked.</li><li>The site reads files on an on-premises Windows server, outside Azure, that accepts no inbound connection; no VPN is planned for that site.</li><li>All outbound traffic from portal, including to the internet, must go through VNet-App's firewall.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Calling VM-Api:",
   "o": [
    "Virtual network integration",
    "A private endpoint",
    "Inbound access restrictions",
    "A public IP added on VM-Api"
   ],
   "a": 0
  },
  {
   "l": "User access:",
   "o": [
    "A NAT gateway on the subnet",
    "Access restrictions on the VPN IP",
    "Virtual network integration",
    "A private endpoint on the app"
   ],
   "a": 3
  },
  {
   "l": "On-premises server:",
   "o": [
    "Hybrid connections",
    "A point-to-site VPN",
    "Virtual network integration",
    "A private endpoint"
   ],
   "a": 0
  },
  {
   "l": "Outbound through the firewall:",
   "o": [
    "An inbound NSG rule on the subnet",
    "“Route all” and a 0.0.0.0/0 route",
    "A private endpoint in VNet-App",
    "An access restriction to the firewall"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Outbound to a virtual network.</b> Virtual network integration (delegated subnet) gives the app outbound traffic into VNet-App.<b>Private inbound.</b> A private endpoint gives the app a VNet-App IP; disable public access to block the internet.<b>Hybrid connections.</b> They use Azure Relay and an on-premises manager that only opens outbound connections: ideal without VPN.<b>Route all.</b> With the “Route all” option, all outbound traffic, internet included, goes through the virtual network, where a 0.0.0.0/0 route sends it to the firewall.",
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
    "*Calling VM-Api",
    "Virtual network integration"
   ],
   [
    "User access",
    "A private endpoint on the app"
   ],
   [
    "On-premises server",
    "Hybrid connections"
   ],
   [
    "Outbound through the firewall",
    "“Route all” and a 0.0.0.0/0 route"
   ]
  ]
 },
 "keep": "App Service: VNet integration (outbound), private endpoint (inbound), hybrid connections (on-premises without VPN), route all."
},
{
 "id": "D3-415",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The shop web app (Standard S1) must be published on www.wingtip.com and wingtip.com.</p><ul><li>The domain is managed in Azure DNS. www.wingtip.com must be validated and mapped to shop.</li><li>The wingtip.com apex must also point to shop.</li><li>A free, automatically renewed TLS certificate must protect www.wingtip.com.</li><li>Security requires TLS 1.2 minimum and refusing HTTP.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "www.wingtip.com:",
   "o": [
    "An asuid CNAME to shop.azurewebsites.net",
    "A www NS record to App Service",
    "A www A record to shop's IP, alone",
    "CNAME www + TXT asuid.www"
   ],
   "a": 3
  },
  {
   "l": "wingtip.com apex:",
   "o": [
    "A CNAME @ to shop.azurewebsites.net",
    "An NS @ record to App Service",
    "A to the inbound IP + asuid TXT",
    "An MX @ record to shop"
   ],
   "a": 2
  },
  {
   "l": "Certificate:",
   "o": [
    "A self-signed certificate",
    "An App Service managed certificate",
    "A client certificate",
    "A certificate imported from Key Vault"
   ],
   "a": 1
  },
  {
   "l": "HTTP and TLS:",
   "o": [
    "A mandatory client certificate",
    "HTTPS only + minimum TLS 1.2",
    "An NSG on the App Service plan",
    "An access restriction blocking port 80"
   ],
   "a": 1
  }
 ],
 "expl": "<b>www.</b> A CNAME to the default name, plus the asuid.www TXT that proves ownership (domain verification ID).<b>Apex.</b> A CNAME isn't allowed at the apex: use an A record to the app's inbound IP address, plus the asuid TXT.<b>Managed certificate.</b> Free and automatically renewed, from the Basic tier; it requires the domain to point to the app.<b>HTTPS only.</b> Redirects HTTP to HTTPS; the minimum TLS version is set in the app's configuration.",
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
    "*www.wingtip.com",
    "CNAME www + TXT asuid.www"
   ],
   [
    "wingtip.com apex",
    "A to the inbound IP + asuid TXT"
   ],
   [
    "Certificate",
    "An App Service managed certificate"
   ],
   [
    "HTTP and TLS",
    "HTTPS only + minimum TLS 1.2"
   ]
  ]
 },
 "keep": "App Service domain: CNAME (or A at apex) + asuid TXT. Free managed certificate. HTTPS only + minimum TLS."
},
{
 "id": "D3-416",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Developers of the api app (App Service, Linux, container) are complaining:</p><ul><li>500 errors happen in waves; they want a guided analysis, with detectors suggesting causes;</li><li>they want to see the container's console output live while reproducing a bug;</li><li>HTTP and console logs must be kept 90 days and queried in KQL with other apps' logs;</li><li>an instance not answering /healthz for 10 minutes must be removed from load balancing and replaced.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Guided analysis:",
   "o": [
    "Azure Advisor recommendations",
    "The app's log stream",
    "The Kudu console (advanced tools)",
    "Diagnose and solve problems"
   ],
   "a": 3
  },
  {
   "l": "Live console output:",
   "o": [
    "A diagnostic setting",
    "Log stream",
    "Diagnose and solve problems",
    "Application Insights Profiler"
   ],
   "a": 1
  },
  {
   "l": "90-day logs:",
   "o": [
    "A diagnostic setting to Log Analytics",
    "The Kudu console with an export",
    "File system logs of the app",
    "The app's log stream"
   ],
   "a": 0
  },
  {
   "l": "Failed instance:",
   "o": [
    "ARR affinity disabled",
    "Always On",
    "Health check",
    "An autoscale rule on /healthz"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Diagnose and solve problems.</b> Detectors analyze availability, performance, and errors, and suggest causes.<b>Log stream.</b> It shows the app's log output live (container console on Linux).<b>Diagnostic setting.</b> It sends AppServiceHTTPLogs, AppServiceConsoleLogs, and so on to Log Analytics, where retention is set and KQL can correlate with other resources.<b>Health check.</b> An instance failing the given path is removed from load balancing, then replaced if it keeps failing (after about an hour).",
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
    "*Guided analysis",
    "Diagnose and solve problems"
   ],
   [
    "Live console output",
    "Log stream"
   ],
   [
    "90-day logs",
    "A diagnostic setting to Log Analytics"
   ],
   [
    "Failed instance",
    "Health check"
   ]
  ]
 },
 "keep": "App Service: detectors, log stream, diagnostic setting, health check."
},
{
 "id": "D3-417",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The crm web app (Premium v3, Windows) uses an Azure SQL database and a storage account. The team wants:</p><ul><li>app backups (files and configuration) every hour, kept 30 days, including the linked SQL database;</li><li>a copy of crm, code and configuration, in another App Service plan in West Europe, for a demo environment;</li><li>to recover crm if it's deleted by mistake.</li></ul><p>What should you configure or use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Hourly backups with the database:",
   "o": [
    "Custom backups to a storage account",
    "Azure Backup for the plan's VMs",
    "An App Service plan snapshot",
    "Automatic backups alone"
   ],
   "a": 0
  },
  {
   "l": "Copy in West Europe:",
   "o": [
    "Export only an app template",
    "A deployment slot in West Europe",
    "Cloning the app to another plan",
    "Geo-replication of the App Service plan"
   ],
   "a": 2
  },
  {
   "l": "Deleted app:",
   "o": [
    "The activity log, then a redeployment",
    "Restore the deleted app",
    "Not possible once the app is deleted",
    "A mandatory support ticket"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Backups.</b> Automatic backups (hourly, without the database) are included from the Basic tier; to include a linked database and choose retention, you need custom backups to a storage account.<b>Cloning.</b> Cloning copies an app's content and configuration to another plan, possibly in another region.<b>Deletion.</b> A deleted app can be restored for 30 days (Restore-AzDeletedWebApp or the equivalent CLI command), into an existing plan.",
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
    "*Hourly backups with the database",
    "Custom backups to a storage account"
   ],
   [
    "Copy in West Europe",
    "Cloning the app to another plan"
   ],
   [
    "Deleted app",
    "Restore the deleted app"
   ]
  ]
 },
 "keep": "App Service: custom backups for a linked database, clone to another plan, restore a deleted app."
},
{
 "id": "D3-418",
 "dom": 3,
 "type": "hot",
 "stem": "<p>A Windows VM, VM-Rdp, no longer answers RDP since an update. The team has no other network access to the VM.</p><ul><li>You need to see the boot screen to know whether Windows is stuck on an update.</li><li>You need to open a SAC (Special Administration Console) prompt to stop a service.</li><li>If Windows no longer boots at all, the OS disk must be repaired from another VM, then put back.</li><li>A Linux VM, VM-Nfs, no longer boots because of a wrong line in /etc/fstab.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Boot screen:",
   "o": [
    "Boot diagnostics (screenshot)",
    "Azure Advisor recommendations",
    "Network Watcher topology",
    "VM-Rdp's activity log"
   ],
   "a": 0
  },
  {
   "l": "SAC prompt:",
   "o": [
    "A Custom Script extension",
    "Run Command",
    "Serial console",
    "Azure Bastion over RDP"
   ],
   "a": 2
  },
  {
   "l": "Disk repair:",
   "o": [
    "Redeploy the VM to another host",
    "az vm repair (repair VM)",
    "Reapply the VM configuration",
    "Resize the VM to restart it"
   ],
   "a": 1
  },
  {
   "l": "VM-Nfs:",
   "o": [
    "The Custom Script extension for Linux",
    "Run Command",
    "Azure Bastion over SSH",
    "Serial console"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Boot diagnostics.</b> The screenshot (and serial log) show boot state with no network connection.<b>Serial console.</b> It gives access to the VM console (SAC on Windows) even without networking; it requires boot diagnostics.<b>az vm repair.</b> These commands create a repair VM, attach a copy of the OS disk to it, then swap the repaired disk back onto the original VM.<b>fstab.</b> The VM doesn't boot: Run Command (through the agent) and SSH don't work. Serial console lets you boot into single-user mode and fix the file.",
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
    "*Boot screen",
    "Boot diagnostics (screenshot)"
   ],
   [
    "SAC prompt",
    "Serial console"
   ],
   [
    "Disk repair",
    "az vm repair (repair VM)"
   ],
   [
    "VM-Nfs",
    "Serial console"
   ]
  ]
 },
 "keep": "No network: boot diagnostics, serial console; disk to repair: az vm repair."
},
{
 "id": "D3-419",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso manages 300 VMs in France Central.</p><ul><li>Dev VMs must stop every evening at 8 PM, with an email 30 minutes before; they're standalone VMs.</li><li>Windows and Linux VMs must get critical patches every second Tuesday evening, with a compliance report.</li><li>The SAP platform's dedicated hosts must get Azure platform updates only on Sunday between 2 AM and 7 AM.</li><li>RDP access to production VMs must only open on request, for 3 hours, from the admin's IP.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Dev VM shutdown:",
   "o": [
    "A maintenance configuration",
    "An autoscale rule",
    "Each VM's auto-shutdown",
    "Azure Update Manager"
   ],
   "a": 2
  },
  {
   "l": "Patches:",
   "o": [
    "A monthly Custom Script extension",
    "Azure Update Manager, periodic assessment",
    "A monthly backup policy",
    "Each VM's auto-shutdown"
   ],
   "a": 1
  },
  {
   "l": "Platform updates:",
   "o": [
    "Redeploying the hosts every Sunday",
    "An Azure Policy on the hosts",
    "Azure Update Manager with a schedule",
    "A maintenance configuration"
   ],
   "a": 3
  },
  {
   "l": "RDP on request:",
   "o": [
    "A permanent NSG rule for the admin",
    "A public IP on each production VM",
    "Defender just-in-time (JIT) access",
    "Azure Bastion Basic with a shared link"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Auto-shutdown.</b> A per-VM option, with a notification before shutdown.<b>Update Manager.</b> It assesses and installs guest OS patches (Windows and Linux) on schedules, with compliance reports.<b>Maintenance configuration.</b> With the Host scope (or the matching scope), it sets the window in which Azure applies platform updates to dedicated hosts and some VMs.<b>JIT.</b> Just-in-time access temporarily opens the port in the NSG for the requester's IP, then closes it.",
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
    "*Dev VM shutdown",
    "Each VM's auto-shutdown"
   ],
   [
    "Patches",
    "Azure Update Manager, periodic assessment"
   ],
   [
    "Platform updates",
    "A maintenance configuration"
   ],
   [
    "RDP on request",
    "Defender just-in-time (JIT) access"
   ]
  ]
 },
 "keep": "Shutdown = auto-shutdown. Guest patches = Update Manager. Platform = maintenance configuration. Occasional RDP = JIT."
},
{
 "id": "D3-420",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso must encrypt the disks of four VM groups under different rules.</p><ul><li>Group 1: volumes must be encrypted inside the guest OS, with BitLocker and dm-crypt, keys in a key vault; audit requires it explicitly.</li><li>Group 2: disks of 40 VMs must be encrypted at rest with a Contoso-managed key, stored in Key Vault, rotated automatically.</li><li>Group 3: the temp disk, caches, and host-to-storage flows must also be encrypted, with no agent in the VM.</li><li>Group 4: data must be protected even from the host, with hardware-bound encryption (confidential VM).</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Group 1:",
   "o": [
    "Confidential encryption",
    "Encryption at host",
    "Azure Disk Encryption",
    "A disk encryption set (CMK)"
   ],
   "a": 2
  },
  {
   "l": "Group 2:",
   "o": [
    "Azure Disk Encryption",
    "A disk encryption set (CMK)",
    "Confidential encryption",
    "Encryption at host"
   ],
   "a": 1
  },
  {
   "l": "Group 3:",
   "o": [
    "Azure Disk Encryption",
    "A disk encryption set (CMK)",
    "Encryption at host",
    "Confidential encryption"
   ],
   "a": 2
  },
  {
   "l": "Group 4:",
   "o": [
    "A disk encryption set (CMK)",
    "Encryption at host",
    "Confidential encryption",
    "Azure Disk Encryption"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Azure Disk Encryption.</b> BitLocker (Windows) or dm-crypt (Linux) inside the guest, keys in Key Vault. Microsoft now recommends encryption at host for new deployments, but the requirement here explicitly asks for guest encryption.<b>Disk encryption set.</b> It applies server-side encryption with a customer-managed key (and automatic rotation) to many disks.<b>Encryption at host.</b> It also encrypts the temp disk, caches, and flows to storage, with no agent.<b>Confidential encryption.</b> For confidential VMs, it binds keys to the VM's vTPM, protecting data even from the host.",
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
    "*Group 1",
    "Azure Disk Encryption"
   ],
   [
    "Group 2",
    "A disk encryption set (CMK)"
   ],
   [
    "Group 3",
    "Encryption at host"
   ],
   [
    "Group 4",
    "Confidential encryption"
   ]
  ]
 },
 "keep": "Guest = ADE. CMK at scale = encryption set. Temp and caches = encryption at host. Against the host = confidential."
}
);
