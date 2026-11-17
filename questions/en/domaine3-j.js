/* Domain 3: compute (batch J: D3-421 to D3-430, long scenarios) */
AZ.questions.push(
{
 "id": "D3-421",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Several operations on RG-App VMs are causing trouble.</p><ul><li>VM-A (Standard_D4s_v5, running) must move to Standard_M64s; the size doesn't show in the portal list while the VM runs.</li><li>VM-B has packet loss and performance issues that Microsoft attributes to the physical host; it must be moved to another host.</li><li>VM-C has an extension stuck after a network change; the team wants to rerun the VM's provisioning without moving it.</li><li>VM-D is a Spot VM running renders; its disks must be kept when Azure reclaims capacity.</li></ul><p>What should you do?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM-A:",
   "o": [
    "Redeploy the VM to another host",
    "Recreate the VM from its disks",
    "Deallocate, then resize",
    "Reapply the VM, then resize"
   ],
   "a": 2
  },
  {
   "l": "VM-B:",
   "o": [
    "Resize the VM",
    "Restart inside the OS",
    "Redeploy the VM",
    "Reapply the VM"
   ],
   "a": 2
  },
  {
   "l": "VM-C:",
   "o": [
    "Reset the password",
    "Deallocate the VM",
    "Reapply the VM",
    "Redeploy the VM"
   ],
   "a": 2
  },
  {
   "l": "VM-D, eviction policy:",
   "o": [
    "Deallocate",
    "Delete",
    "Hibernate",
    "Restart"
   ],
   "a": 0
  }
 ],
 "expl": "<b>VM-A.</b> If the size isn't available on the current hardware cluster, deallocate the VM: on restart it can be placed on a cluster that offers it.<b>VM-B.</b> Redeploy moves the VM to a new host (the temp disk is lost).<b>VM-C.</b> Reapply reruns the VM's configuration on the same host, useful after a provisioning or extension failure state.<b>VM-D.</b> With the “Deallocate” eviction policy, the VM stops and its disks are kept (and billed); “Delete” removes the VM and its disks.",
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
    "*VM-A",
    "Deallocate, then resize"
   ],
   [
    "VM-B",
    "Redeploy the VM"
   ],
   [
    "VM-C",
    "Reapply the VM"
   ],
   [
    "VM-D, eviction policy",
    "Deallocate"
   ]
  ]
 },
 "keep": "Missing size = deallocate. Host issue = redeploy. Stuck state = reapply. Spot: Deallocate keeps disks."
},
{
 "id": "D3-422",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The platform team publishes hardened Windows images in Azure Compute Gallery GAL-Corp (France Central).</p><ul><li>West Europe teams must create VMs from version 2.0.0 without copying the image themselves, with fast creation of 500 simultaneous VMs.</li><li>Version 2.1.0 is in testing: it must not be picked when a team asks for “the latest version”.</li><li>A subsidiary, in another Microsoft Entra tenant, must be able to create VMs from GAL-Corp, without making the gallery public.</li><li>The base image must be rebuilt automatically every month with the latest patches and hardening scripts.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Version 2.0.0 in West Europe:",
   "o": [
    "A snapshot copied to each region",
    "A second gallery in West Europe",
    "Replicate the version (several replicas)",
    "Nothing: a gallery serves every region"
   ],
   "a": 2
  },
  {
   "l": "Version 2.1.0:",
   "o": [
    "Put it in another definition",
    "Delete 2.0.0",
    "Make it specialized",
    "Exclude from latest"
   ],
   "a": 3
  },
  {
   "l": "Subsidiary:",
   "o": [
    "Direct sharing or a multitenant app",
    "A guest account in the Corp tenant",
    "A VHD export sent to the subsidiary",
    "A public community gallery"
   ],
   "a": 0
  },
  {
   "l": "Monthly rebuild:",
   "o": [
    "Azure VM Image Builder, scheduled",
    "A manual monthly capture of a VM",
    "Azure Update Manager on the gallery",
    "A Custom Script extension on the image"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Replication.</b> An image version is replicated to target regions; several replicas per region absorb massive simultaneous creations.<b>Exclude from latest.</b> A version marked this way isn't used when “latest” is requested.<b>Another tenant.</b> Direct sharing (with a subscription or tenant) or a multitenant app registration with a role on the gallery allow access without public publishing; a community gallery is public.<b>Image Builder.</b> It builds images from a template (source, scripts, Windows updates) and can trigger automatically.",
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
    "*Version 2.0.0 in West Europe",
    "Replicate the version (several replicas)"
   ],
   [
    "Version 2.1.0",
    "Exclude from latest"
   ],
   [
    "Subsidiary",
    "Direct sharing or a multitenant app"
   ],
   [
    "Monthly rebuild",
    "Azure VM Image Builder, scheduled"
   ]
  ]
 },
 "keep": "Gallery: replicas per region, exclude from latest, direct sharing or multitenant app, Image Builder."
},
{
 "id": "D3-423",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Four teams are choosing VM placement in France Central.</p><ul><li>HPC team: 8 VMs exchanging MPI messages; latency between them must be as low as possible, and they must also be spread across fault domains.</li><li>Licensing team: software requires VMs not to share their physical server with any other customer, and the team wants to control that server's maintenance windows.</li><li>Web team: 20 VMs of different sizes in a scale set, spread as much as possible across fault domains within a zone.</li><li>Test team: no requirement.</li></ul><p>What should you choose?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "HPC team:",
   "o": [
    "Three zones, one VM per fault domain",
    "A dedicated host for the eight VMs",
    "One VM per zone, with accelerated networking",
    "Proximity placement + availability set"
   ],
   "a": 3
  },
  {
   "l": "Licensing team:",
   "o": [
    "A proximity placement group",
    "A large isolated VM size",
    "An Azure dedicated host for these VMs",
    "An availability set"
   ],
   "a": 2
  },
  {
   "l": "Web team:",
   "o": [
    "Uniform, five fixed fault domains",
    "Flexible, max spreading",
    "One dedicated host per VM size",
    "A 20-VM availability set"
   ],
   "a": 1
  }
 ],
 "expl": "<b>HPC.</b> A proximity placement group puts VMs physically close (lowest latency); combined with an availability set, it keeps them spread across fault domains.<b>Licensing.</b> A dedicated host is a physical server reserved for one customer, whose maintenance you can control (maintenance configuration).<b>Web.</b> Flexible orchestration accepts different sizes and offers “max spreading” of instances across fault domains within a zone.",
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
    "*HPC team",
    "Proximity placement + availability set"
   ],
   [
    "Licensing team",
    "An Azure dedicated host for these VMs"
   ],
   [
    "Web team",
    "Flexible, max spreading"
   ]
  ]
 },
 "keep": "Latency = proximity placement group. Reserved server = dedicated host. Mixed sizes = Flexible."
},
{
 "id": "D3-424",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Contoso must choose VM sizes for five workloads. Each workload must use the best-suited family.</p><ul><li>Workload 1: an in-memory database with 400 GB of RAM.</li><li>Workload 2: a risk computation server using the CPU at 100% continuously, with little memory.</li><li>Workload 3: a NoSQL database requiring very high throughput on local NVMe disks.</li><li>Workload 4: a small, rarely used web server with occasional spikes.</li><li>Workload 5: training a machine learning model.</li></ul><p>Which family should you choose for each workload?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Workload 1:",
   "o": [
    "L-series (storage)",
    "F-series (compute)",
    "E-series (memory)",
    "B-series (burstable)",
    "N-series (GPU)"
   ],
   "a": 2
  },
  {
   "l": "Workload 2:",
   "o": [
    "N-series (GPU)",
    "B-series (burstable)",
    "E-series (memory)",
    "F-series (compute)",
    "L-series (storage)"
   ],
   "a": 3
  },
  {
   "l": "Workload 3:",
   "o": [
    "F-series (compute)",
    "N-series (GPU)",
    "B-series (burstable)",
    "E-series (memory)",
    "L-series (storage)"
   ],
   "a": 4
  },
  {
   "l": "Workload 4:",
   "o": [
    "E-series (memory)",
    "N-series (GPU)",
    "B-series (burstable)",
    "F-series (compute)",
    "L-series (storage)"
   ],
   "a": 2
  },
  {
   "l": "Workload 5:",
   "o": [
    "B-series (burstable)",
    "N-series (GPU)",
    "L-series (storage)",
    "E-series (memory)",
    "F-series (compute)"
   ],
   "a": 1
  }
 ],
 "expl": "<b>E</b>: high memory-to-CPU ratio (in-memory databases, SAP). <b>F</b>: high CPU-to-memory ratio (compute-intensive). <b>L</b>: high-throughput local NVMe storage (NoSQL, warehouses). <b>B</b>: burstable, accrues credits at low load and spends them during spikes. <b>N</b>: GPU (machine learning, rendering).",
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
    "E-series (memory)"
   ],
   [
    "Workload 2",
    "F-series (compute)"
   ],
   [
    "Workload 3",
    "L-series (storage)"
   ],
   [
    "Workload 4",
    "B-series (burstable)"
   ],
   [
    "Workload 5",
    "N-series (GPU)"
   ]
  ]
 },
 "keep": "E memory, F compute, L local storage, B burstable, N GPU (and D general purpose)."
},
{
 "id": "D3-425",
 "dom": 3,
 "type": "hot",
 "stem": "<p>The catalog web app runs on plan ASP-Prod (Premium v3, 3 instances), which also hosts 4 small internal apps.</p><ul><li>catalog must be able to scale to 8 instances, while the small apps must stay on 2 instances at most.</li><li>Users lose their session during scaling; the app is stateless and stores sessions in Redis.</li><li>The first request after an idle period is very slow.</li><li>catalog sometimes restarts with memory leaks; the team wants an automatic recycle when private memory exceeds 2 GB.</li></ul><p>What should you configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Instances per app:",
   "o": [
    "Slots for the small apps",
    "A second plan reserved for catalog",
    "One autoscale rule per app",
    "Per-app scaling"
   ],
   "a": 3
  },
  {
   "l": "Sessions:",
   "o": [
    "Enable the site's Always On option",
    "Enable ARR session affinity",
    "Disable ARR session affinity",
    "Move the plan to Isolated v2"
   ],
   "a": 2
  },
  {
   "l": "Slow first request:",
   "o": [
    "Always On",
    "ARR affinity",
    "HTTP/2",
    "Health check"
   ],
   "a": 0
  },
  {
   "l": "Memory leaks:",
   "o": [
    "Auto-heal on memory usage",
    "A scheduled nightly restart",
    "Health check on memory",
    "An autoscale rule on memory"
   ],
   "a": 0
  }
 ],
 "expl": "<b>Per app.</b> Per-app scaling limits how many instances each app uses in a plan (numberOfWorkers), while the plan can scale higher for catalog.<b>ARR.</b> ARR affinity pins a client to an instance; when the instance goes away on scale-in, the session is lost. For a stateless app, disable it: requests spread out and Redis keeps the session.<b>Always On.</b> It prevents the app from unloading after inactivity.<b>Auto-heal.</b> It recycles the process based on rules (private memory, request count, status codes…).",
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
    "*Instances per app",
    "Per-app scaling"
   ],
   [
    "Sessions",
    "Disable ARR session affinity"
   ],
   [
    "Slow first request",
    "Always On"
   ],
   [
    "Memory leaks",
    "Auto-heal on memory usage"
   ]
  ]
 },
 "keep": "App Service: per-app scaling, ARR off for stateless, Always On, auto-heal."
},
{
 "id": "D3-426",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Litware is creating an Azure Container Apps environment for its microservices.</p><ul><li>Some services need 32 GB of RAM and GPUs, others a few hundred MB.</li><li>The environment must be integrated with VNet-Apps, with a dedicated subnet; no app may have a public address.</li><li>Apps must call each other by name, with automatic retries and publish/subscribe, without writing that code.</li><li>An engineer asks whether he can integrate the existing environment cae-test, created without a virtual network, with VNet-Apps.</li></ul><p>What should you choose or answer?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Environment type:",
   "o": [
    "An Azure Kubernetes Service cluster",
    "Consumption only, with large sizes",
    "An App Service Environment v3",
    "Dedicated workload profiles"
   ],
   "a": 3
  },
  {
   "l": "Network:",
   "o": [
    "Service endpoints on VNet-Apps",
    "External, with an NSG on the subnet",
    "Internal, delegated subnet",
    "A peering between the environment and VNet-Apps"
   ],
   "a": 2
  },
  {
   "l": "Service calls:",
   "o": [
    "Dapr",
    "Azure Front Door",
    "KEDA",
    "A NAT gateway"
   ],
   "a": 0
  },
  {
   "l": "cae-test:",
   "o": [
    "Possible by switching cae-test to internal",
    "Possible with a peering to VNet-Apps",
    "Not possible after the environment is created",
    "Possible in cae-test's network settings"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Profiles.</b> Workload profile environments combine consumption and dedicated profiles (including GPU and large sizes).<b>Network.</b> An internal environment, deployed in a delegated subnet of VNet-Apps, exposes only private addresses.<b>Dapr.</b> It provides service invocation, retries, publish/subscribe, and state, as a sidecar. KEDA handles scaling.<b>cae-test.</b> An environment's network integration is set at creation; a new one must be created.",
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
    "*Environment type",
    "Dedicated workload profiles"
   ],
   [
    "Network",
    "Internal, delegated subnet"
   ],
   [
    "Service calls",
    "Dapr"
   ],
   [
    "cae-test",
    "Not possible after the environment is created"
   ]
  ]
 },
 "keep": "Container Apps: workload profiles, internal environment, Dapr, network chosen at creation."
},
{
 "id": "D3-427",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You're writing an ARM template that creates a storage account, then a web app that uses it.</p><ul><li>The account name must be globally unique and stable between two deployments in the same resource group.</li><li>The web app must get the account's primary key in its settings, at deployment time.</li><li>The account's full ID must be returned at the end of the deployment, for a pipeline.</li><li>A linked template, stored in a private storage account, must be called by the main template.</li></ul><p>Which function or element should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Account name:",
   "o": [
    "take(subscription().id, 24)",
    "concat('st', utcNow())",
    "newGuid() comme valeur par défaut",
    "uniqueString(resourceGroup().id)"
   ],
   "a": 3
  },
  {
   "l": "Primary key:",
   "o": [
    "reference(…).primaryEndpoints.blob",
    "listKeys(…).keys[0].value",
    "reference(…).primaryKey",
    "parameters('storageKey')"
   ],
   "a": 1
  },
  {
   "l": "Full ID:",
   "o": [
    "A variable with resourceId()",
    "outputs with resourceId()",
    "A tag set on the account",
    "An output parameter in the file"
   ],
   "a": 1
  },
  {
   "l": "Private linked template:",
   "o": [
    "templateLink + blob URI with a SAS token",
    "A local path to the linked file",
    "A nested template copied into the main one",
    "templateLink with a URI without a token"
   ],
   "a": 0
  }
 ],
 "expl": "<b>uniqueString.</b> It returns a deterministic hash of its arguments: same group, same result. newGuid() changes every deployment (and is only usable as a parameter default value).<b>listKeys.</b> It reads a resource's keys at deployment; reference() returns state, not keys.<b>outputs.</b> Outputs return values at the end of the deployment.<b>Linked template.</b> templateLink requires a URI reachable by Resource Manager; for private storage, add a SAS token (or use a template spec).",
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
    "*Account name",
    "uniqueString(resourceGroup().id)"
   ],
   [
    "Primary key",
    "listKeys(…).keys[0].value"
   ],
   [
    "Full ID",
    "outputs with resourceId()"
   ],
   [
    "Private linked template",
    "templateLink + blob URI with a SAS token"
   ]
  ]
 },
 "keep": "Stable uniqueString, listKeys for keys, outputs to return, SAS for a private linked template."
},
{
 "id": "D3-428",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You deploy Bicep files and ARM templates from Azure CLI.</p><ul><li>main.bicep creates resources in resource group RG-App.</li><li>sub.bicep creates resource groups and role assignments at subscription level.</li><li>Before each main.bicep deployment, you want to see the changes, deploying nothing.</li><li>A legacy ARM JSON template must be converted to Bicep for maintenance.</li></ul><p>Which command should you use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "main.bicep:",
   "o": [
    "az bicep build -f main.bicep --deploy",
    "az deployment sub create -l francecentral -f main.bicep",
    "az deployment group create -g RG-App -f main.bicep",
    "az group deployment create -n RG-App main.bicep"
   ],
   "a": 2
  },
  {
   "l": "sub.bicep:",
   "o": [
    "az deployment group create -g RG-App -f sub.bicep",
    "az deployment mg create -m Root -f sub.bicep",
    "az deployment tenant create -l francecentral -f sub.bicep",
    "az deployment sub create -l francecentral -f sub.bicep"
   ],
   "a": 3
  },
  {
   "l": "Preview:",
   "o": [
    "az bicep lint",
    "az deployment group show",
    "az deployment group validate -g RG-App -f main.bicep",
    "az deployment group what-if -g RG-App -f main.bicep"
   ],
   "a": 3
  },
  {
   "l": "Conversion:",
   "o": [
    "az bicep build -f old.json --out main.bicep",
    "az deployment group export -f old.json",
    "az bicep decompile -f old.json",
    "az bicep format --to-bicep old.json"
   ],
   "a": 2
  }
 ],
 "expl": "<b>Group.</b> az deployment group create targets a resource group.<b>Subscription.</b> az deployment sub create targets the subscription and requires a location (-l) to store deployment metadata.<b>what-if.</b> It shows creations, changes, and deletions; validate only checks syntax and constraints.<b>decompile.</b> It converts a JSON template to Bicep (build does the opposite).",
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
    "*main.bicep",
    "az deployment group create -g RG-App -f main.bicep"
   ],
   [
    "sub.bicep",
    "az deployment sub create -l francecentral -f sub.bicep"
   ],
   [
    "Preview",
    "az deployment group what-if -g RG-App -f main.bicep"
   ],
   [
    "Conversion",
    "az bicep decompile -f old.json"
   ]
  ]
 },
 "keep": "az deployment group/sub create, what-if to preview, bicep decompile JSON → Bicep."
},
{
 "id": "D3-429",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Scale set VMSS-Batch uses Flexible orchestration. The following needs arrive:</p><ul><li>VMSS-Web, another scale set, uses Uniform orchestration; the team wants to switch it to Flexible without recreating it.</li><li>VMSS-Batch must contain both D4s_v5 and D4as_v5 instances.</li><li>Every evening at 7 PM, the instance count must go to 20, whatever the load, then return to the CPU rule at 11 PM.</li><li>Load follows regular daily cycles; the team wants instances added before CPU rises.</li></ul><p>What should you answer or configure?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VMSS-Web:",
   "o": [
    "Possible after a rolling upgrade",
    "Possible if the scale set is emptied first",
    "Possible by changing the scale set configuration",
    "Not possible: fixed at creation"
   ],
   "a": 3
  },
  {
   "l": "Two sizes in VMSS-Batch:",
   "o": [
    "Possible only in Uniform orchestration",
    "Possible: Flexible accepts several sizes",
    "Not possible: one size per scale set",
    "Possible only with a dedicated host"
   ],
   "a": 1
  },
  {
   "l": "7 PM - 11 PM:",
   "o": [
    "A CPU rule with a lower threshold at night",
    "A recurring 20-instance profile",
    "Instance overprovisioning",
    "A runbook changing the minimum at 7 PM"
   ],
   "a": 1
  },
  {
   "l": "Early scale-out:",
   "o": [
    "A dynamic threshold",
    "Predictive autoscale",
    "Automatic repair",
    "A shorter cooldown"
   ],
   "a": 1
  }
 ],
 "expl": "<b>Orchestration mode.</b> It's chosen at creation and can't change: VMSS-Web must be recreated as Flexible.<b>Sizes.</b> In Flexible, instances can have different sizes; in Uniform, all share the same model.<b>Recurring profile.</b> A scheduled profile sets an instance count over a time range, then the default profile resumes.<b>Predictive.</b> Predictive autoscale (on CPU) learns cycles and adds instances before the expected rise.",
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
    "*VMSS-Web",
    "Not possible: fixed at creation"
   ],
   [
    "Two sizes in VMSS-Batch",
    "Possible: Flexible accepts several sizes"
   ],
   [
    "7 PM - 11 PM",
    "A recurring 20-instance profile"
   ],
   [
    "Early scale-out",
    "Predictive autoscale"
   ]
  ]
 },
 "keep": "Orchestration mode is fixed. Mixed sizes = Flexible. Schedule = recurring profile. Cycles = predictive."
},
{
 "id": "D3-430",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Several VM extensions are causing trouble in RG-Ops.</p><ul><li>VM-1's Custom Script extension failed; the script was fixed in the storage account, but redeploying the same template doesn't rerun the extension.</li><li>VM-2 already has a Custom Script extension; a team wants to add a second one for another script.</li><li>Security wants to continuously check that Windows VMs follow a configuration baseline (security settings), and fix them automatically, without Automation DSC, which is being retired.</li><li>VM-3 must send its logs to Log Analytics with the currently recommended agent.</li></ul><p>What should you do or use?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM-1:",
   "o": [
    "Restart VM-1 to rerun the extension",
    "Change the forceUpdateTag value",
    "Redeploy VM-1 to another host",
    "Delete and recreate the storage account"
   ],
   "a": 1
  },
  {
   "l": "VM-2:",
   "o": [
    "Add the extension on a second NIC",
    "Use cloud-init on this Windows VM",
    "Add a second extension of the same type",
    "Not possible: one extension per VM"
   ],
   "a": 3
  },
  {
   "l": "Configuration baseline:",
   "o": [
    "Azure Advisor recommendations",
    "Azure Machine Configuration",
    "Azure Update Manager with a baseline",
    "A scheduled Custom Script extension"
   ],
   "a": 1
  },
  {
   "l": "VM-3:",
   "o": [
    "The Windows diagnostics extension",
    "The Azure Monitor agent with a DCR",
    "The Dependency agent, alone",
    "The Log Analytics agent, still present"
   ],
   "a": 1
  }
 ],
 "expl": "<b>forceUpdateTag.</b> Resource Manager reruns an extension only if its configuration changes; changing forceUpdateTag (or a setting) forces a new run.<b>One per VM.</b> A VM can have only one Custom Script extension; update it with another script (or a script that calls several).<b>Machine Configuration.</b> Formerly Guest Configuration, it audits and applies settings inside the guest OS, driven by Azure Policy; it replaces Automation State Configuration (DSC).<b>AMA.</b> The Azure Monitor agent, configured by a DCR, replaces the retired Log Analytics agent.",
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
    "*VM-1",
    "Change the forceUpdateTag value"
   ],
   [
    "VM-2",
    "Not possible: one extension per VM"
   ],
   [
    "Configuration baseline",
    "Azure Machine Configuration"
   ],
   [
    "VM-3",
    "The Azure Monitor agent with a DCR"
   ]
  ]
 },
 "keep": "Rerun an extension = forceUpdateTag. One Custom Script per VM. Guest baseline = Machine Configuration. Logs = AMA."
}
);
