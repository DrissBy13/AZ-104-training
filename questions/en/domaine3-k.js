/* Domain 3: compute (batch K: D3-431 to D3-440, long scenarios) */
AZ.questions.push(
{
 "id": "D3-431",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The web app app-shop (Premium v3 plan, Linux) is currently deployed over FTP from a developer's workstation. Several incidents occurred:</p><ul><li>a release left files from an old version in wwwroot, which broke a page;</li><li>a developer edited a file directly on the server through Kudu, and the change was lost at the next deployment without anyone knowing it existed;</li><li>a release during business hours caused two minutes of 503 errors during the restart.</li></ul><p>The team wants: an atomic deployment of a single package and read-only site content; a zero-downtime release with instant rollback; a deployment triggered by every merge into the main branch of the GitHub repository, without storing a password in GitHub; a staging connection string that must never go to production.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Atomic package, read-only content:",
   "o": [
    "Disable FTP and keep Kudu",
    "Local Git deployment",
    "WEBSITE_RUN_FROM_PACKAGE = 1",
    "A mounted Azure Files share"
   ],
   "a": 2
  },
  {
   "l": "Zero downtime, instant rollback:",
   "o": [
    "Increase the instance count",
    "Enable Always On",
    "Staging slot + swap",
    "A second plan behind Traffic Manager"
   ],
   "a": 2
  },
  {
   "l": "GitHub without a stored password:",
   "o": [
    "Federated identity (OIDC)",
    "A SAS token for the app's storage account",
    "FTP credentials stored as a GitHub secret",
    "Publish profile stored as a GitHub secret"
   ],
   "a": 0
  },
  {
   "l": "Staging connection string:",
   "o": [
    "Standard app setting",
    "Tag on the slot",
    "Deployment slot setting (sticky)",
    "appsettings.json in the package"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Run from package.</b> With WEBSITE_RUN_FROM_PACKAGE = 1 (ZIP deployment), the package is mounted as is: wwwroot is read-only, the deployment is atomic and no leftover files remain. Kudu edits become impossible, which removes invisible drift.<b>Slot + swap.</b> The swap warms up the slot's instances before switching traffic; another swap is enough to roll back.<b>OIDC.</b> GitHub Actions can authenticate with a federated identity (OpenID Connect) on an Entra ID app or a user-assigned managed identity: no long-lived secret is stored. The publish profile is a secret.<b>Slot setting.</b> When “Deployment slot setting” is checked, it stays with the slot during a swap.",
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
    "*Atomic package, read-only content",
    "WEBSITE_RUN_FROM_PACKAGE = 1"
   ],
   [
    "Zero downtime, instant rollback",
    "Staging slot + swap"
   ],
   [
    "GitHub without a stored password",
    "Federated identity (OIDC)"
   ],
   [
    "Staging connection string",
    "Deployment slot setting (sticky)"
   ]
  ]
 },
 "keep": "Run from package = atomic and read-only. Swap = zero downtime. OIDC = no secret. Sticky = stays with the slot."
},
{
 "id": "D3-432",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The app-api app (App Service, Premium v3 plan) must be brought into line with Contoso's security policy:</p><ul><li>secrets (SQL connection string, partner API key) must no longer appear in clear text in app settings; they are stored in the kv-prod vault, configured with the Azure RBAC permission model;</li><li>the app must use no credentials to access the vault, and the identity must disappear automatically if the app is deleted;</li><li>the app must reach a SQL database that is only reachable through a private endpoint in VNet-Data;</li><li>the app itself must only be reachable from the corporate network (VNet-Corp, peered), with no more inbound Internet access.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Identity and role on kv-prod:",
   "o": [
    "System-assigned identity + Key Vault Secrets User",
    "Service principal with secret + Contributor",
    "User-assigned identity + Key Vault Reader",
    "System-assigned identity + Key Vault Administrator"
   ],
   "a": 0
  },
  {
   "l": "App setting value:",
   "o": [
    "$(KeyVault:kv-prod:secrets:sql-conn)",
    "[reference('kv-prod').secrets.sqlConn]",
    "keyvault://kv-prod/secrets/sql-conn",
    "@Microsoft.KeyVault(SecretUri=…)"
   ],
   "a": 3
  },
  {
   "l": "To the SQL database (outbound):",
   "o": [
    "Virtual network integration",
    "Access restrictions",
    "Hybrid connections to SQL",
    "Private endpoint on the app"
   ],
   "a": 0
  },
  {
   "l": "Inbound from VNet-Corp only:",
   "o": [
    "Regional virtual network integration",
    "A firewall rule on the kv-prod vault",
    "Private endpoint",
    "An NSG on the integration subnet"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Identity.</b> A system-assigned identity is tied to the app's lifecycle. With the RBAC model, the Key Vault Secrets User role is enough to read secrets; Key Vault Reader only grants access to metadata.<b>Key Vault reference.</b> The @Microsoft.KeyVault(SecretUri=…) syntax (or VaultName=…;SecretName=…) makes the platform resolve the secret with the managed identity.<b>Outbound / inbound.</b> Virtual network integration handles the app's outbound traffic; a private endpoint handles inbound traffic. Both are often combined, on different subnets.",
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
    "*Identity and role on kv-prod",
    "System-assigned identity + Key Vault Secrets User"
   ],
   [
    "App setting value",
    "@Microsoft.KeyVault(SecretUri=…)"
   ],
   [
    "To the SQL database (outbound)",
    "Virtual network integration"
   ],
   [
    "Inbound from VNet-Corp only",
    "Private endpoint"
   ]
  ]
 },
 "keep": "System = lifecycle-bound. Secrets User = read. VNet integration = outbound. Private endpoint = inbound."
},
{
 "id": "D3-433",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Fabrikam is modernizing four workloads and wants the simplest compute service that fits each one, without managing VMs or clusters:</p><ul><li>Workload 1: a Linux container that converts a batch of files; it runs about 20 minutes once a day, triggered by an external script, and must stop when finished; no scaling is needed.</li><li>Workload 2: a nightly scheduled task, packaged as a container, that is part of a microservices platform already hosted in the same environment and shares its networks and logs.</li><li>Workload 3: a PowerShell script that must run continuously alongside an existing web app, on the same App Service plan, and access its files.</li><li>Workload 4: a containerized HTTP microservice whose load varies from zero to several hundred requests per second; it must be able to scale to zero instances at night.</li></ul><p>Which service should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Workload 1:",
   "o": [
    "Virtual machine scale set",
    "Azure Kubernetes Service",
    "App Service for containers",
    "Azure Container Instances"
   ],
   "a": 3
  },
  {
   "l": "Workload 2:",
   "o": [
    "A triggered WebJob on a separate plan",
    "An ACI instance scheduled by Logic Apps",
    "A Container Apps job",
    "A VM with Task Scheduler"
   ],
   "a": 2
  },
  {
   "l": "Workload 3:",
   "o": [
    "Azure Batch",
    "A Container Apps job",
    "Azure Container Instances",
    "A continuous WebJob"
   ],
   "a": 3
  },
  {
   "l": "Workload 4:",
   "o": [
    "App Service Premium v3 with autoscale",
    "A continuous WebJob on the existing plan",
    "Azure Container Instances with 4 vCPU",
    "Azure Container Apps"
   ],
   "a": 3
  }
 ],
 "expl": "<b>ACI.</b> The simplest way to run a container on demand; with the Never or OnFailure restart policy, the group stops when the work is done and billing stops.<b>Container Apps job.</b> Jobs (manual, scheduled or event-driven) run in the same Container Apps environment as the apps, with the same network and logs.<b>WebJob.</b> It runs in the context of the App Service app, on its plan, with access to its file system; continuous mode requires Always On.<b>Container Apps.</b> Scaling through KEDA rules (HTTP, queues…), with a minimum of zero replicas possible.",
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
    "*Workload 1",
    "Azure Container Instances"
   ],
   [
    "Workload 2",
    "A Container Apps job"
   ],
   [
    "Workload 3",
    "A continuous WebJob"
   ],
   [
    "Workload 4",
    "Azure Container Apps"
   ]
  ]
 },
 "keep": "One-off container = ACI. Task in the environment = Container Apps job. Alongside a web app = WebJob. Zero to N = Container Apps."
},
{
 "id": "D3-434",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso's security team sets new requirements for the VMs in RG-Sec:</p><ul><li>VMs must be protected against rootkits and bootkits, with boot integrity measurement that Microsoft Defender for Cloud can verify;</li><li>temp disks and disk caches must also be encrypted at rest, without an agent or extension inside the VM;</li><li>managed disks must be encrypted with keys managed by Contoso, stored in kv-keys, with automatic rotation;</li><li>the data of a financial computing application must remain encrypted in memory while being processed, including from the hypervisor.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Rootkits, boot integrity:",
   "o": [
    "Azure Disk Encryption on the OS disk",
    "A dedicated host with controlled maintenance",
    "Trusted Launch",
    "Microsoft Antimalware with scheduled scans"
   ],
   "a": 2
  },
  {
   "l": "Temp disks and caches, agentless:",
   "o": [
    "Encryption at host",
    "Account-level double encryption",
    "Server-side encryption, platform key",
    "Azure Disk Encryption (BitLocker / dm-crypt)"
   ],
   "a": 0
  },
  {
   "l": "Contoso keys, automatic rotation:",
   "o": [
    "A platform-managed key, double encryption",
    "Disk encryption set",
    "An encryption scope on the account",
    "Azure Disk Encryption with a KEK"
   ],
   "a": 1
  },
  {
   "l": "In-memory encryption:",
   "o": [
    "Confidential VM",
    "Trusted Launch",
    "Isolated dedicated host",
    "Encryption at host"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Trusted Launch.</b> Secure Boot and vTPM protect against bootkits and rootkits; boot attestation is reported to Defender for Cloud.<b>Encryption at host.</b> Server-side encryption covers stored disks; encryption at host extends protection to temp disks and caches, with nothing installed in the VM. Azure Disk Encryption relies on an in-guest extension.<b>Disk encryption set.</b> It references a Key Vault (or managed HSM) key and can automatically follow the latest key version.<b>Confidential VM.</b> Based on AMD SEV-SNP or Intel TDX, it encrypts memory with hardware-generated keys that the hypervisor cannot access.",
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
    "*Rootkits, boot integrity",
    "Trusted Launch"
   ],
   [
    "Temp disks and caches, agentless",
    "Encryption at host"
   ],
   [
    "Contoso keys, automatic rotation",
    "Disk encryption set"
   ],
   [
    "In-memory encryption",
    "Confidential VM"
   ]
  ]
 },
 "keep": "Bootkits = Trusted Launch. Temp + cache = encryption at host. Customer key = disk encryption set. Memory = confidential VM."
},
{
 "id": "D3-435",
 "dom": 3,
 "type": "hot",
 "stem": "<p>A Windows Server failover cluster (two nodes, VM-N1 and VM-N2) hosts a clustered SQL Server instance in France Central. The cluster needs shared storage; the two VMs are spread across two availability zones (zone 1 and zone 2).</p><p>The table shows the planned disks:</p><div class=\"tw\"><table class=\"tbl\"><tr><th>Disk</th><th>Role</th><th>Requirement</th></tr><tr><td>Disk-Quorum</td><td>Witness</td><td>Shared by both nodes</td></tr><tr><td>Disk-Data</td><td>SQL data</td><td>Shared, must survive the loss of a zone</td></tr><tr><td>Disk-Log</td><td>Logs</td><td>Throughput adjustable without downtime by period</td></tr><tr><td>Disk-OS</td><td>System</td><td>Current size 128 GiB, needs 256 GiB</td></tr></table></div><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Sharing a disk between nodes:",
   "o": [
    "An unmanaged disk in a blob",
    "Attach the disk read-only",
    "maxShares property = 2",
    "Read/write caching"
   ],
   "a": 2
  },
  {
   "l": "Disk-Data, zone loss:",
   "o": [
    "Ultra Disk",
    "Premium SSD LRS",
    "Standard SSD LRS",
    "Premium SSD ZRS"
   ],
   "a": 3
  },
  {
   "l": "Disk-Log, throughput adjustable live:",
   "o": [
    "Premium SSD with bursting",
    "Standard HDD",
    "Premium SSD v2",
    "Standard SSD ZRS"
   ],
   "a": 2
  },
  {
   "l": "Disk-OS to 256 GiB:",
   "o": [
    "Replace the OS disk with a new empty disk",
    "Shrink the disk, then expand it again",
    "Expand live from the portal",
    "Deallocate, then expand"
   ],
   "a": 3
  }
 ],
 "expl": "<b>Shared disks.</b> A managed disk with maxShares greater than 1 can be attached to several VMs; the cluster handles access through SCSI persistent reservations.<b>ZRS.</b> Premium and Standard SSD ZRS disks are synchronously replicated across three zones; a ZRS shared disk can be attached to VMs in different zones.<b>Premium SSD v2.</b> IOPS and throughput are set independently of size, without downtime (within a change-frequency limit).<b>OS disk.</b> Live expansion applies to data disks; for an OS disk, deallocate the VM. A managed disk can't be shrunk.",
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
    "*Sharing a disk between nodes",
    "maxShares property = 2"
   ],
   [
    "Disk-Data, zone loss",
    "Premium SSD ZRS"
   ],
   [
    "Disk-Log, throughput adjustable live",
    "Premium SSD v2"
   ],
   [
    "Disk-OS to 256 GiB",
    "Deallocate, then expand"
   ]
  ]
 },
 "keep": "Shared = maxShares. Survives a zone = ZRS. Live throughput = Premium v2. OS disk = deallocate first."
},
{
 "id": "D3-436",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You deploy an ACI container group named cg-ingest for an ingestion job:</p><ul><li>the group contains two Linux containers: ingest (processing) and sidecar (metrics shipping), which must talk to each other over localhost;</li><li>ingest must write its results to persistent storage that survives the group's deletion;</li><li>the group must reach a database only reachable from the snet-aci subnet of VNet-Data;</li><li>the job must be restarted automatically if it ends in error, but not if it succeeds;</li><li>the image is in the private registry acrcontoso, and no registry password must appear in the deployment definition.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Persistent storage:",
   "o": [
    "Secret volume mounted read-only",
    "Azure Files share",
    "Group emptyDir volume",
    "gitRepo volume cloned at startup"
   ],
   "a": 1
  },
  {
   "l": "Database access:",
   "o": [
    "A peering to the group",
    "Deploy the group into snet-aci",
    "A service endpoint on the group",
    "A public IP address with DNS"
   ],
   "a": 1
  },
  {
   "l": "Restart policy:",
   "o": [
    "Always",
    "OnFailure",
    "Never",
    "UnlessStopped"
   ],
   "a": 1
  },
  {
   "l": "Image pull:",
   "o": [
    "Registry admin user credentials",
    "Anonymous pull access enabled",
    "Managed identity + AcrPull",
    "Registry password as a secure variable"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Container group.</b> Containers in a group share lifecycle, network (localhost) and volumes.<b>Azure Files.</b> An Azure Files share volume persists beyond the group; emptyDir disappears with it. Azure Files mounting is supported for Linux containers.<b>Virtual network.</b> The group is deployed into a subnet delegated to Microsoft.ContainerInstance/containerGroups and gets a private address.<b>OnFailure.</b> Restarts only if the container exits with an error code; Never never restarts, Always always does.<b>AcrPull.</b> A managed identity assigned to the group with the AcrPull role on the registry avoids any password.",
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
    "*Persistent storage",
    "Azure Files share"
   ],
   [
    "Database access",
    "Deploy the group into snet-aci"
   ],
   [
    "Restart policy",
    "OnFailure"
   ],
   [
    "Image pull",
    "Managed identity + AcrPull"
   ]
  ]
 },
 "keep": "Persistent = Azure Files. Private network = delegated subnet. Errors only = OnFailure. No password = identity + AcrPull."
},
{
 "id": "D3-437",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso centralizes its container images in Azure Container Registry. The stated needs:</p><ul><li>the AKS clusters in France Central and Canada Central must pull images from a nearby endpoint, with a single registry URL;</li><li>the registry must not be reachable from the Internet: only from VNet-Hub and peered networks;</li><li>whenever the Ubuntu base image is updated, the application images must be rebuilt automatically in Azure;</li><li>the Data team's pipeline must only be able to push images to the data/* repository, not the others.</li></ul><p>The current registry is in the Standard tier.</p><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Proximity, single URL:",
   "o": [
    "A second Standard registry in Canada",
    "A CDN in front of the registry",
    "Import the images every night",
    "Move to Premium + geo-replication"
   ],
   "a": 3
  },
  {
   "l": "No Internet access:",
   "o": [
    "The AcrPull role granted to clusters only",
    "Private endpoint",
    "Disable the registry admin user",
    "An NSG on the AKS node subnet"
   ],
   "a": 1
  },
  {
   "l": "Automatic rebuild:",
   "o": [
    "An Azure policy on images",
    "A registry webhook on the push event",
    "ACR task",
    "A content lock on the base image"
   ],
   "a": 2
  },
  {
   "l": "Push limited to data/*:",
   "o": [
    "Admin user",
    "Owner role on the group",
    "Token with a scope map",
    "AcrPush role on the registry"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Geo-replication.</b> Premium tier only: a single registry (one URL) with regional replicas; pulls are served by the nearest replica.<b>Private endpoint.</b> Also Premium only; combined with disabling public access, the registry is only reachable over the private network.<b>ACR tasks.</b> A task can track the base image and automatically rebuild the dependent image when the base changes.<b>Token + scope map.</b> A registry token tied to a scope map grants rights (read, write) limited to specific repositories. The AcrPush role applies to the whole registry (apart from newer per-repository RBAC features).",
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
    "*Proximity, single URL",
    "Move to Premium + geo-replication"
   ],
   [
    "No Internet access",
    "Private endpoint"
   ],
   [
    "Automatic rebuild",
    "ACR task"
   ],
   [
    "Push limited to data/*",
    "Token with a scope map"
   ]
  ]
 },
 "keep": "Geo-replication and private endpoint = Premium. Base image = ACR task. Specific repository = token + scope map."
},
{
 "id": "D3-438",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso hosts several App Service apps and is looking for the cheapest plan tier that meets each need:</p><ul><li>App-Intranet: an internal site with a custom domain and a bound TLS certificate; one instance is enough, but it must not be shared with other Azure customers;</li><li>App-Portal: two deployment slots (staging and test) and autoscale up to 8 instances;</li><li>App-Batch: scaling up to 25 instances, with deployment slots;</li><li>App-Gov: full network and compute isolation on dedicated hardware, with up to 60 instances.</li></ul><p>Which plan tier should you choose?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "App-Intranet:",
   "o": [
    "Free",
    "Shared",
    "Basic",
    "Standard"
   ],
   "a": 2
  },
  {
   "l": "App-Portal:",
   "o": [
    "Basic",
    "Standard",
    "Premium v3",
    "Isolated v2"
   ],
   "a": 1
  },
  {
   "l": "App-Batch:",
   "o": [
    "Basic",
    "Standard",
    "Premium v3",
    "Isolated v2"
   ],
   "a": 2
  },
  {
   "l": "App-Gov:",
   "o": [
    "Premium v3",
    "Isolated v2 (ASE v3)",
    "Premium v3 with 60 instances",
    "Standard"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Basic.</b> The first tier with dedicated compute (Free and Shared share VMs with other customers), with custom domain and TLS binding; manual scaling up to 3 instances, no slots.<b>Standard.</b> Deployment slots (5) and autoscale up to 10 instances.<b>Premium v3.</b> Up to 30 instances and 20 slots.<b>Isolated v2.</b> The App Service Environment v3 plan: isolation in your virtual network on dedicated compute, up to 100 instances.",
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
    "*App-Intranet",
    "Basic"
   ],
   [
    "App-Portal",
    "Standard"
   ],
   [
    "App-Batch",
    "Premium v3"
   ],
   [
    "App-Gov",
    "Isolated v2 (ASE v3)"
   ]
  ]
 },
 "keep": "Dedicated = Basic. Slots + autoscale = Standard (10). 30 instances = Premium v3. 100 and isolated = Isolated v2."
},
{
 "id": "D3-439",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The virtual machine scale set vmss-web (Uniform orchestration, 10 instances, behind a Standard load balancer) hosts a website. During the last model update (new image), all instances restarted at the same time and the site was down.</p><p>The team wants:</p><ul><li>to apply future model updates in batches, moving to the next batch only if the updated instances are healthy;</li><li>the platform to know whether the application responds, not just whether the VM runs;</li><li>instance 3, which runs a long job, to never be deleted during an automatic scale-in;</li><li>automatic scale-in to remove the newest instances first, while keeping zones balanced.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Upgrade policy:",
   "o": [
    "Overprovisioning",
    "Automatic",
    "Rolling",
    "Manual"
   ],
   "a": 2
  },
  {
   "l": "Application health:",
   "o": [
    "Application Health",
    "Automatic repairs, on their own",
    "Boot diagnostics on every instance",
    "A metric alert on average CPU"
   ],
   "a": 0
  },
  {
   "l": "Instance 3:",
   "o": [
    "CanNotDelete lock on the instance",
    "Protection from scale-in",
    "Deallocate instance 3",
    "Protection from scale set actions"
   ],
   "a": 1
  },
  {
   "l": "Scale-in order:",
   "o": [
    "Default",
    "NewestVM",
    "OldestVM",
    "Random"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Rolling.</b> The Rolling policy updates instances in batches, with a maximum percentage of unhealthy instances; it requires a health probe or the Application Health extension.<b>Application Health.</b> The extension queries an application endpoint inside each instance; it is also used by automatic repairs.<b>Protection from scale-in.</b> The instance isn't removed by autoscale. Protection from scale set actions additionally blocks upgrades, reimage or deallocation started at the scale set level — broader than needed.<b>NewestVM.</b> Removes the newest instances first, after balancing across zones; OldestVM does the opposite.",
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
    "*Upgrade policy",
    "Rolling"
   ],
   [
    "Application health",
    "Application Health"
   ],
   [
    "Instance 3",
    "Protection from scale-in"
   ],
   [
    "Scale-in order",
    "NewestVM"
   ]
  ]
 },
 "keep": "Batches = Rolling. App health = extension. Keep one instance = scale-in protection. Newest first = NewestVM."
},
{
 "id": "D3-440",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Fabrikam's platform team manages RG-Net with an ARM template, main.json. The group currently contains a virtual network, two NSGs and a public IP address added manually by a colleague (not in the template).</p><p>The needs:</p><ul><li>before each deployment, see the list of resources that would be created, modified or deleted, without changing anything;</li><li>deploy main.json without risking the deletion of the manually added public IP;</li><li>eventually, make RG-Net contain exactly what the template describes and nothing else;</li><li>publish main.json in Azure so the Applications team can deploy it with its own rights, without access to the Git repository, with RBAC-controlled access and versioning.</li></ul><p>What should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Preview without changes:",
   "o": [
    "az deployment group export",
    "az deployment group validate",
    "az deployment group what-if",
    "az deployment group show"
   ],
   "a": 2
  },
  {
   "l": "Deployment without deleting the IP:",
   "o": [
    "A subscription-level deployment",
    "A ReadOnly lock on RG-Net",
    "Complete mode",
    "Incremental mode"
   ],
   "a": 3
  },
  {
   "l": "Exactly the template contents:",
   "o": [
    "Incremental mode",
    "An Azure Deny policy",
    "A CanNotDelete lock",
    "Complete mode"
   ],
   "a": 3
  },
  {
   "l": "Publish the template with versions and RBAC:",
   "o": [
    "A public blob in a storage account",
    "A template spec",
    "An Automation runbook",
    "An initiative definition"
   ],
   "a": 1
  }
 ],
 "expl": "<b>What-if.</b> The what-if operation shows planned creations, modifications and deletions without deploying anything; validate only checks syntax and consistency.<b>Incremental / Complete.</b> In Incremental mode (the default), resources missing from the template are left untouched. In Complete mode, they're deleted: the group exactly mirrors the template (except resources protected by a lock, which make the deletion fail).<b>Template spec.</b> An Azure resource that stores a versioned template; access is granted through RBAC (Reader to deploy it).",
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
    "*Preview without changes",
    "az deployment group what-if"
   ],
   [
    "Deployment without deleting the IP",
    "Incremental mode"
   ],
   [
    "Exactly the template contents",
    "Complete mode"
   ],
   [
    "Publish the template with versions and RBAC",
    "A template spec"
   ]
  ]
 },
 "keep": "Preview = what-if. Keep existing = Incremental. Exact mirror = Complete. Share with versions = template spec."
}
);
