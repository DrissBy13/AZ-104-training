/* Domain 3: compute resources (batch G: D3-301 to D3-333, multi-answer questions merged from former multiple-choice items) */
AZ.questions.push(
{
 "id": "D3-301",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are deploying containers in Azure Container Instances (ACI). What should you do or know for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Two containers share the same IP and lifecycle and talk over localhost:",
   "o": [
    "One container group with both",
    "An availability set",
    "Two separate container groups",
    "Two separate container registries"
   ],
   "a": 0
  },
  {
   "l": "A container deployed with 2 vCPU and 4 GB runs out of memory:",
   "o": [
    "Redeploy with a higher resource request",
    "Add a data disk to the container group",
    "Enable ACI autoscale",
    "Change the restart policy to Always"
   ],
   "a": 0
  },
  {
   "l": "Definition file format accepted by az container create --file:",
   "o": [
    "YAML",
    "a .bicepparam file",
    "CSV",
    "Dockerfile"
   ],
   "a": 0
  },
  {
   "l": "Constraint for running a Windows container:",
   "o": [
    "A group holds only one Windows container",
    "Windows containers aren't supported",
    "Windows containers require an Ultra disk",
    "Windows containers must be in an App Service plan"
   ],
   "a": 0
  },
  {
   "l": "Pull a private image from ACR3 without enabling the admin account:",
   "o": [
    "The registry's admin account",
    "Make the registry publicly readable",
    "A managed identity with AcrPull",
    "Copy the image to a storage account"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Two containers share the same IP and lifecycle and talk over localhost:</b></p><p>A <b>container group</b> groups containers scheduled on the same host, which share the lifecycle, network (IP address, ports, localhost), and volumes. It's the “sidecar” pattern. Multi-container groups are only supported for <b>Linux</b>.</p><p>Two separate groups would have two IP addresses.</p><p><b>2. A container deployed with 2 vCPU and 4 GB runs out of memory:</b></p><p>An ACI container's resources (CPU and memory) are fixed in its definition. To change them, you <b>redeploy</b> the container group with the new values (within the region's limits).</p><p>ACI has no built-in autoscale: for that, choose Azure Container Apps instead.</p><p><b>3. Definition file format accepted by az container create --file:</b></p><p>For a <b>multi-container</b> group, you describe the group in a <b>YAML</b> file (passed with <code>--file</code>) or in an ARM/Bicep template. The CLI alone, without a file, creates only one container.</p><p>A Dockerfile describes how to build an image, not a deployment.</p><p><b>4. Constraint for running a Windows container:</b></p><p>ACI supports <b>Windows</b> containers, but a Windows group contains only <b>one</b> container. Features such as multi-container groups or some volumes are Linux-only.</p><p><b>5. Pull a private image from ACR3 without enabling the admin account:</b></p><p>You give the identity that pulls the image (the container group's managed identity, or a service principal) the <b>AcrPull</b> role on the registry. It's least privilege, with no shared password.</p><p>The <b>admin account</b> is a single account with all rights, discouraged in production. Standard and Premium also allow anonymous pull, but that would make the images available to everyone.</p>",
 "portal": {
  "path": [
   "Container instances",
   "aci-web"
  ],
  "title": "aci-web | Containers",
  "menu": [
   "Overview",
   "*Containers"
  ],
  "rows": [
   [
    "web",
    "Port 80"
   ],
   [
    "*logging",
    "Same IP, localhost"
   ],
   [
    "OS type",
    "Linux"
   ]
  ]
 },
 "keep": "Containers sharing IP and lifecycle = one container group (multi-container: Linux). Changing ACI CPU/memory = redeploy the group. Multi-container ACI group = YAML file (or ARM/Bicep). Windows ACI = one container per group. Pulling a private image = AcrPull on an identity; avoid the admin account."
},
{
 "id": "D3-302",
 "dom": 3,
 "type": "hot",
 "stem": "<p>ACI container groups must be reachable and keep data. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Reachable from the internet with a stable name app1.francecentral.azurecontainer.io:",
   "o": [
    "A private DNS zone linked to the group",
    "A private endpoint",
    "A public IP with a DNS name label",
    "A point-to-site VPN gateway"
   ],
   "a": 2
  },
  {
   "l": "Access to a database that only has a private IP in VNet1:",
   "o": [
    "Enable registry geo-replication",
    "Give the container group a public IP",
    "Use the Never restart policy",
    "Deploy in a delegated subnet of VNet1"
   ],
   "a": 3
  },
  {
   "l": "Expose an API on port 8080:",
   "o": [
    "An App Service plan to expose the port",
    "A required load balancer in front of the group",
    "A scale rule on port 8080",
    "Port 8080 exposed (and a public IP)"
   ],
   "a": 3
  },
  {
   "l": "Keep files after a restart — volume:",
   "o": [
    "A Premium SSD managed disk",
    "An Azure Files share",
    "The host's temporary disk",
    "A blob container"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Reachable from the internet with a stable name app1.francecentral.azurecontainer.io:</b></p><p>When creating the container group, you choose a <b>public IP address</b> and a <b>DNS name label</b>, which gives a name like <code>&lt;label&gt;.&lt;region&gt;.azurecontainer.io</code>. The IP address may change on restart, but the name stays.</p><p><b>2. Access to a database that only has a private IP in VNet1:</b></p><p>ACI can be deployed <b>in a virtual network</b>, in a subnet delegated to <code>Microsoft.ContainerInstance/containerGroups</code>. The group gets a private IP address and communicates with the other resources on the network.</p><p><b>3. Expose an API on port 8080:</b></p><p>Ports to open are declared in the container and in the container group (<code>--ports 8080</code> parameter). A public IP address or a virtual network deployment makes the group reachable. No load balancer is needed.</p><p><b>4. Keep files after a restart — volume:</b></p><p>An ACI container's file system is <b>ephemeral</b>. To keep data, you mount an <b>Azure Files share</b> as a volume (with the account name, share name, and key). ACI doesn't support mounting managed disks or blob containers as volumes.</p><p>emptyDir volumes share data between containers in a group, but disappear with the group.</p>",
 "portal": {
  "path": [
   "Container instances",
   "Create"
  ],
  "title": "Networking",
  "menu": [
   "Basics",
   "*Networking"
  ],
  "rows": [
   [
    "Networking type",
    "Public"
   ],
   [
    "*DNS name label",
    "app1"
   ],
   [
    "FQDN",
    "app1.francecentral.azurecontainer.io"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Stable name for ACI = DNS name label. ACI in a VNet = subnet delegated to Microsoft.ContainerInstance. Exposing an ACI port = declare it in the group's ports. Persistence in ACI = Azure Files volume."
},
{
 "id": "D3-303",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You host microservices in Azure Container Apps. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Send 10% of traffic to the new version and 90% to the old one:",
   "o": [
    "Two separate Container Apps environments",
    "A restart policy per revision",
    "Multiple revision mode with traffic splitting",
    "Two container registries, one per version"
   ],
   "a": 2
  },
  {
   "l": "Virtual network and Log Analytics workspace shared by several apps:",
   "o": [
    "In the container registry",
    "In the associated App Service plan",
    "In the Container Apps environment",
    "In each revision of the app"
   ],
   "a": 2
  },
  {
   "l": "Job run every night at 2 AM that then stops:",
   "o": [
    "A new revision every day",
    "An ACI group with the Always policy",
    "An app with external ingress",
    "A scheduled Container Apps job"
   ],
   "a": 3
  },
  {
   "l": "Read a password without writing it in plain text in the definition:",
   "o": [
    "A resource tag on the app",
    "The active revision's name",
    "A Container Apps secret (environment variable)",
    "A setting of the environment's Log Analytics workspace"
   ],
   "a": 2
  },
  {
   "l": "App reachable only by other apps in the environment — ingress:",
   "o": [
    "Disabled",
    "Enabled, limited to the environment",
    "Enabled, accepting traffic from anywhere",
    "Enabled with a static public IP address"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Send 10% of traffic to the new version and 90% to the old one:</b></p><p>Each deployment of a new configuration creates a <b>revision</b>. In <b>multiple revision</b> mode, several revisions stay active and you split incoming traffic in percentages between them (progressive rollout, A/B testing).</p><p><b>2. Virtual network and Log Analytics workspace shared by several apps:</b></p><p>The Container Apps <b>environment</b> is the secure boundary that groups apps: it defines the virtual network, logging (Log Analytics), and workload profiles. Apps in the same environment communicate with each other.</p><p><b>3. Job run every night at 2 AM that then stops:</b></p><p>Container Apps <b>jobs</b> run containers that finish: <b>manual</b>, <b>scheduled</b> (cron expression), or <b>event-driven</b> triggers. They fit better than an app running all the time.</p><p><b>4. Read a password without writing it in plain text in the definition:</b></p><p>Container Apps manages <b>secrets</b> at the app level, which can reference a <b>Key Vault</b> secret with the app's managed identity. An environment variable references them with <code>secretRef</code>.</p><p><b>5. App reachable only by other apps in the environment — ingress:</b></p><p><b>Internal ingress</b> (limited to the environment) makes the app reachable only by other apps in the environment, or by the environment's virtual network. <b>External</b> ingress would expose it to the internet. Without ingress, the app receives no HTTP requests (useful for background processing).</p>",
 "portal": {
  "path": [
   "Container Apps",
   "app1"
  ],
  "title": "app1 | Revisions and replicas",
  "menu": [
   "*Revisions and replicas"
  ],
  "rows": [
   [
    "*Revision mode",
    "Multiple"
   ],
   [
    "app1--v1",
    "90%"
   ],
   [
    "app1--v2",
    "10%"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Splitting traffic between versions = multiple revision mode. Shared network and logs = Container Apps environment. Container that runs then stops = Container Apps job (manual, scheduled, event). Secret in Container Apps = app secret (Key Vault possible) + secretRef. Reachable only within the environment = internal ingress."
},
{
 "id": "D3-304",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>Several teams request a compute service. You need to choose the service that best meets each need.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Services",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "Azure Container Instances",
  "Azure Container Apps",
  "Scale set in Flexible orchestration",
  "App Service Environment v3",
  "A shared Basic App Service plan",
  "Azure Virtual Desktop",
  "Azure Batch",
  "Azure Kubernetes Service"
 ],
 "tgts": [
  {
   "l": "Nightly 20-minute container, no server or orchestrator, billed per run",
   "a": 0
  },
  {
   "l": "Scale on HTTP requests and to zero at night, with no cluster",
   "a": 1
  },
  {
   "l": "Mix VM sizes and add individually managed VMs",
   "a": 2
  },
  {
   "l": "Fully isolated web apps in their own virtual network, very many instances",
   "a": 3
  },
  {
   "l": "15 small low-traffic apps, custom domains and HTTPS, lowest cost",
   "a": 4
  },
  {
   "l": "Windows desktop in a browser for 50 users on shared session hosts",
   "a": 5
  },
  {
   "l": "500 VMs for 2 hours each night for parallel simulations, then none",
   "a": 6
  }
 ],
 "expl": "<p><b>1. Nightly 20-minute container, no server or orchestrator, billed per run</b></p><p><b>Azure Container Instances</b> starts a container in seconds and bills CPU and memory per second. With the <b>OnFailure</b> or <b>Never</b> restart policy, the container stops at the end of processing and so does billing.</p><p>With <b>Always</b> (default), ACI would restart the container endlessly. A VM or an App Service plan would cost all the time.</p><p><b>2. Scale on HTTP requests and to zero at night, with no cluster</b></p><p><b>Azure Container Apps</b> is a serverless service for containers. It handles autoscale (based on KEDA) according to HTTP traffic, queues, or other events, down to <b>zero</b> instances. It also offers HTTPS ingress, revisions, and traffic splitting.</p><p>ACI has no autoscale. A VMSS requires managing VMs. ACR stores images.</p><p><b>3. Mix VM sizes and add individually managed VMs</b></p><p><b>Flexible</b> orchestration manages standard VMs (with their own resources), allows different sizes, and spreads across zones and fault domains. It's the recommended mode for new workloads.</p><p><b>Uniform</b> mode uses a single model: all instances are identical.</p><p><b>4. Fully isolated web apps in their own virtual network, very many instances</b></p><p>An <b>App Service Environment</b> v3 is a <b>single-tenant</b> App Service deployment, injected into a subnet of your virtual network, with <b>Isolated v2</b> plans. It suits strong isolation and large-scale requirements.</p><p>A Premium plan's virtual network integration only concerns outbound traffic; the infrastructure stays shared.</p><p><b>5. 15 small low-traffic apps, custom domains and HTTPS, lowest cost</b></p><p>You pay for the <b>plan</b>, not the app: a single plan can host several apps that share its instances. For rarely visited apps, a Basic plan (or Standard if you want slots or autoscale) is enough.</p><p><b>6. Windows desktop in a browser for 50 users on shared session hosts</b></p><p><b>Azure Virtual Desktop</b> provides virtual Windows desktops and apps, with shared multi-session hosts, reachable through a client or browser. This service isn't central to AZ-104, but it's good to recognize it among the other compute options.</p><p><b>7. 500 VMs for 2 hours each night for parallel simulations, then none</b></p><p>A <b>virtual machine scale set</b> creates and deletes hundreds of identical VMs on demand (scheduled or automatic), down to zero. <b>Azure Batch</b> drives this kind of large-scale parallel compute. Combining with Spot VMs cuts cost further.</p>",
 "portal": {
  "path": [
   "Container instances",
   "Create"
  ],
  "title": "Create container instance",
  "menu": [
   "Basics",
   "*Advanced"
  ],
  "rows": [
   [
    "*Restart policy",
    "On failure"
   ],
   [
    "Billing",
    "Per second, while running"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "One-off containerized task = ACI, OnFailure or Never restart. Serverless, autoscale down to zero = Azure Container Apps. Mixed sizes, standard VMs = Flexible orchestration. Full isolation in your VNet = App Service Environment v3. Several small apps = a single shared plan. Shared virtual Windows desktops = Azure Virtual Desktop. Many identical VMs occasionally = VMSS (or Batch), down to zero."
},
{
 "id": "D3-305",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are updating the image and software of several virtual machine scale sets. What should you do or choose for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Roll out the new image in batches, each batch healthy before the next — policy:",
   "o": [
    "Manual",
    "None",
    "Rolling",
    "Automatic, in no set order"
   ],
   "a": 2
  },
  {
   "l": "VMSS10 uses Manual upgrade: instances keep the old image:",
   "o": [
    "Upgrade the instances (update-instances)",
    "Redeploy the VMSS to other hosts",
    "Increase the cool down",
    "Nothing: they'll update at the next restart"
   ],
   "a": 0
  },
  {
   "l": "Software must be installed on all VMSS11 instances, including future ones:",
   "o": [
    "In a tag on the scale set",
    "On each instance, by hand, over an RDP session",
    "In the model, then upgrade the instances",
    "In the associated App Service plan"
   ],
   "a": 2
  },
  {
   "l": "Spread VMSS6 across the three zones — when to configure it:",
   "o": [
    "When upgrading the instances",
    "At any time, by editing the properties",
    "When creating the scale set",
    "After adding a load balancer"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Roll out the new image in batches, each batch healthy before the next — policy:</b></p><p>The <b>Rolling</b> policy updates instances in batches, with a pause and a health check (probe or application health extension) between batches.</p><ul><li><b>Manual</b>: nothing is updated until you upgrade each instance.</li><li><b>Automatic</b>: all instances can be updated at the same time, in any order.</li></ul><p><b>2. VMSS10 uses Manual upgrade: instances keep the old image:</b></p><p>In <b>Manual</b> mode, the set's model is updated, but each instance keeps the old model until you <b>upgrade</b> it (portal: Upgrade, or CLI <code>az vmss update-instances</code>). New instances created by scaling use the new model directly.</p><p><b>3. Software must be installed on all VMSS11 instances, including future ones:</b></p><p>The set's <b>model</b> (image, extensions, VM applications) describes all instances. You update it, then <b>upgrade</b> the existing instances according to the upgrade policy. New instances use the new model automatically.</p><p><b>4. Spread VMSS6 across the three zones — when to configure it:</b></p><p>The <b>zones</b> of a virtual machine scale set (and of a VM) are chosen at <b>creation</b>. For an existing set, adding zones is limited; in practice, you recreate the set.</p><p>The load balancer must be the Standard SKU (zone redundant) to spread traffic across zones.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS2"
  ],
  "title": "VMSS2 | Upgrade policy",
  "menu": [
   "*Upgrade policy"
  ],
  "rows": [
   [
    "*Mode",
    "Rolling"
   ],
   [
    "Batch size",
    "20%"
   ],
   [
    "Pause between batches",
    "PT5S"
   ]
  ],
  "btn": "Save"
 },
 "keep": "In batches, with a health check = Rolling. Manual mode = upgrade instances yourself. Anything that must be on every instance = in the set's model. Zones = chosen at creation."
},
{
 "id": "D3-306",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You run several scale sets in production. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Always remove the newest VMs first — scale-in policy:",
   "o": [
    "Default",
    "Manual",
    "OldestVM",
    "NewestVM"
   ],
   "a": 3
  },
  {
   "l": "An instance running a critical job must not be removed on scale-in:",
   "o": [
    "Scale-in protection",
    "The OldestVM scale-in policy",
    "A CanNotDelete lock on VMSS3",
    "A higher minimum instance count"
   ],
   "a": 0
  },
  {
   "l": "Automatically replace instances with an application failure:",
   "o": [
    "Instance overprovisioning",
    "The health extension and automatic repairs",
    "The autoscale cool down between scale actions",
    "The Manual upgrade policy"
   ],
   "a": 1
  },
  {
   "l": "New instances ready faster for spikes of a few seconds:",
   "o": [
    "Lengthen the cool down",
    "Reduce the maximum instance count",
    "Switch to the Manual upgrade policy",
    "Use a preconfigured image (gallery)"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Always remove the newest VMs first — scale-in policy:</b></p><p>A VMSS scale-in policy can be <b>Default</b> (balance across zones and fault domains, then delete the highest instance ID), <b>NewestVM</b> (newest first), or <b>OldestVM</b> (oldest first), always keeping balance across zones.</p><p><b>2. An instance running a critical job must not be removed on scale-in:</b></p><p><b>Scale-in protection</b> applies to a specific instance: autoscale won't delete it. (Protection from scale set actions also protects it from upgrades and reimages.)</p><p>A lock on VMSS3 would block all scale-ins. Raising the minimum doesn't protect a specific instance.</p><p><b>3. Automatically replace instances with an application failure:</b></p><p><b>Automatic instance repairs</b> replace instances reported unhealthy by the <b>Application Health extension</b> or a load balancer probe, after a grace period.</p><p><b>4. New instances ready faster for spikes of a few seconds:</b></p><p>A <b>preconfigured</b> image (software already installed) avoids running long extensions on each new instance: the delay between the scale decision and the ready instance shrinks. You can also keep a higher minimum instance count.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Scaling",
  "menu": [
   "*Scaling"
  ],
  "rows": [
   [
    "*Scale-in policy",
    "NewestVM"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Deletion order on scale-in = Default, NewestVM, or OldestVM. Keeping a specific instance = scale-in protection. Replacing unhealthy instances = health extension + automatic repairs. Instances ready faster = preconfigured image."
},
{
 "id": "D3-307",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are configuring autoscale for VMSS2. What should you configure or answer in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Always at least 2 instances, never more than 10, 3 at startup:",
   "o": [
    "Minimum 3, Maximum 10, Default 2",
    "Minimum 2, Maximum 3, Default 10",
    "Minimum 0, Maximum 10, Default 3",
    "Minimum 2, Maximum 10, Default 3"
   ],
   "a": 3
  },
  {
   "l": "CPU stays at 90% for an hour; instances aren't added every minute:",
   "o": [
    "The cool down blocks any action for 5 minutes",
    "VMSS only support one action per hour",
    "The scale-in rule cancels the scale-out rule",
    "The default instance count is already reached"
   ],
   "a": 0
  },
  {
   "l": "After a spike, the instance count never comes down:",
   "o": [
    "A longer cool down",
    "A scale-in rule (CPU below 30%)",
    "A lower maximum instance count",
    "A health probe on the load balancer"
   ],
   "a": 1
  },
  {
   "l": "An S1 web app slows down during the day when users triple:",
   "o": [
    "Horizontal autoscale of the plan",
    "A permanent move to the Premium tier (scale up)",
    "A scheduled backup before each peak",
    "An extra deployment slot"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Always at least 2 instances, never more than 10, 3 at startup:</b></p><p>An autoscale profile's instance limits are: <b>Minimum</b> (never below), <b>Maximum</b> (never above), and <b>Default</b> (used if metrics can't be read).</p><p><b>2. CPU stays at 90% for an hour; instances aren't added every minute:</b></p><p>The <b>cool down</b> gives new instances time to start and metrics time to settle before a new evaluation. During this delay, no other scale action happens. The maximum instance count also limits scale-out.</p><p><b>3. After a spike, the instance count never comes down:</b></p><p>Autoscale only removes instances if a <b>scale-in rule</b> exists. Best practice: always pair a scale-out rule with a scale-in rule, with enough of a gap between thresholds (for example 70% and 30%) to avoid flapping.</p><p><b>4. An S1 web app slows down during the day when users triple:</b></p><p><b>Scale out</b> adds instances to the plan when load rises, and removes them when it drops. You can base it on a metric (CPU, memory, HTTP queue length) or a <b>schedule</b> (day/night).</p><p><b>Scale up</b> changes the plan's size or tier: it would raise the cost permanently, including at night.</p>",
 "portal": {
  "path": [
   "Virtual machine scale sets",
   "VMSS1"
  ],
  "title": "VMSS1 | Scaling",
  "menu": [
   "*Scaling"
  ],
  "rows": [
   [
    "*Minimum",
    "2"
   ],
   [
    "*Maximum",
    "10"
   ],
   [
    "*Default",
    "3"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Minimum, Maximum, Default (if metrics are missing). Cool down = pause after each scale action. Always a scale-out rule AND a scale-in rule. Variable load = autoscale out; scale up = bigger instances."
},
{
 "id": "D3-308",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You use web app deployment slots. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The connection string stays with each slot during a swap:",
   "o": [
    "Mark the string as “Deployment slot setting”",
    "Disable auto swap on staging",
    "Use the same connection string everywhere",
    "Create a third slot for the test database"
   ],
   "a": 0
  },
  {
   "l": "Code deployed to staging goes to production after warm-up, automatically:",
   "o": [
    "Autoscale on the plan",
    "Auto swap on staging",
    "Routing 100% of traffic to staging",
    "Always On on the production slot"
   ],
   "a": 1
  },
  {
   "l": "20% of production users to beta, without swapping:",
   "o": [
    "A swap with preview",
    "A load balancer in front of the app",
    "Traffic routing: 20% to beta",
    "A second App Service plan for beta"
   ],
   "a": 2
  },
  {
   "l": "Redeploy the container app on each app:latest push to ACR9:",
   "o": [
    "Always On",
    "Geo-replication of the container registry",
    "Auto swap on the staging slot",
    "Continuous deployment (ACR webhook)"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. The connection string stays with each slot during a swap:</b></p><p>A setting marked <b>Deployment slot setting</b> (sticky) stays attached to the slot: it doesn't follow the code during a swap. Unchecked settings are swapped with the code.</p><p><b>2. Code deployed to staging goes to production after warm-up, automatically:</b></p><p><b>Auto swap</b>, enabled on the source slot (staging), swaps with the target slot as soon as deployment finishes and the app is warmed up.</p><p><b>3. 20% of production users to beta, without swapping:</b></p><p>Slot <b>traffic routing</b> (Testing in production) sends a percentage of production requests to another slot. A cookie keeps each user on the same slot for their session.</p><p><b>4. Redeploy the container app on each app:latest push to ACR9:</b></p><p>With <b>continuous deployment</b> enabled for a container, App Service creates a <b>webhook</b> in ACR: on each push of the tracked image, the app pulls the new image and restarts.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp4",
   "staging"
  ],
  "title": "Environment variables › Connection strings",
  "rows": [
   [
    "Name",
    "SqlDb"
   ],
   [
    "*Deployment slot setting",
    "Checked"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Setting that stays on the slot = deployment slot setting (sticky). Swapping automatically after deployment = auto swap. Percentage of users to a slot = traffic routing. Redeploying on each image push = continuous deployment (ACR webhook)."
},
{
 "id": "D3-309",
 "dom": 3,
 "type": "hot",
 "stem": "<p>App Service web apps have availability or session issues. What should you configure in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "WebApp13 (Basic plan) goes idle; the first request is very slow:",
   "o": [
    "Traffic routing",
    "Always On",
    "Application logs",
    "ARR affinity"
   ],
   "a": 1
  },
  {
   "l": "An instance that can't start must be taken out, then replaced:",
   "o": [
    "Web server logs",
    "A budget alert on the plan",
    "Always On on the instances",
    "Health check (/health)"
   ],
   "a": 3
  },
  {
   "l": "Stateless app, requests spread evenly even for one user — disable:",
   "o": [
    "HTTPS only",
    "Health check",
    "ARR affinity",
    "Always On on all instances"
   ],
   "a": 2
  },
  {
   "l": "In-memory sessions: going from 1 to 3 instances, users signed out — quick fix:",
   "o": [
    "Enable HTTPS only",
    "Enable ARR affinity",
    "Disable Always On on the app",
    "Move to a Basic plan with one instance"
   ],
   "a": 1
  },
  {
   "l": "Premium plan app that must survive a datacenter failure in the region:",
   "o": [
    "Zone redundancy of the plan",
    "A deployment slot per zone",
    "Hourly scheduled backups",
    "Always On on the production slot"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. WebApp13 (Basic plan) goes idle; the first request is very slow:</b></p><p><b>Always On</b> keeps the app loaded by regularly sending a request, which avoids unloading after inactivity. It's available from the Basic tier, and required for continuous WebJobs.</p><p><b>ARR affinity</b> always sends a user to the same instance (sticky sessions).</p><p><b>2. An instance that can't start must be taken out, then replaced:</b></p><p><b>Health check</b> regularly pings a path in the app on each instance. An instance that responds poorly is removed from rotation, then replaced if it stays unhealthy. You need at least two instances to benefit.</p><p><b>3. Stateless app, requests spread evenly even for one user — disable:</b></p><p><b>ARR affinity</b> sets a cookie that sends each user back to the same instance. For a <b>stateless</b> app, disabling it spreads load better across instances.</p><p><b>4. In-memory sessions: going from 1 to 3 instances, users signed out — quick fix:</b></p><p><b>ARR affinity</b> sends each user back to the same instance with a cookie: the in-memory session stays available. The real long-term fix is to store sessions outside the instance (for example Azure Cache for Redis).</p><p><b>5. Premium plan app that must survive a datacenter failure in the region:</b></p><p>A Premium v2/v3 (or Isolated v2) plan can be <b>zone redundant</b>: its instances are spread across several availability zones in the region. You need at least 2 instances (3 were originally required).</p><p>Slots and Always On don't protect against a zone failure. Backups let you restore, not stay available.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp13"
  ],
  "title": "WebApp13 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Always On",
    "On"
   ],
   [
    "ARR affinity",
    "On"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Avoiding idle unload = Always On (Basic and above). Removing an unhealthy instance = health check (2 instances minimum). Stateless app = disable ARR affinity. In-memory sessions on several instances = ARR affinity (until Redis). Datacenter failure = zone-redundant plan."
},
{
 "id": "D3-310",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You manage production VM disks. What should you do or answer in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Cache files on VM9's D: drive vanished after maintenance:",
   "o": [
    "The Azure backup overwrote the disk's content",
    "The temporary disk isn't persistent",
    "The D: drive is BitLocker-encrypted and locked at boot",
    "The D: drive is a Premium data disk"
   ],
   "a": 1
  },
  {
   "l": "Grow the data disk from 256 to 512 GiB:",
   "o": [
    "A managed disk's size can never change",
    "You must create a new disk and copy the data",
    "Grow it in Azure, then extend the volume",
    "You can shrink then grow the size freely"
   ],
   "a": 2
  },
  {
   "l": "SQL database: host caching for the read data disk and the written log disk:",
   "o": [
    "Read/write for data, Read-only for logs",
    "Read/write for both",
    "None for data, Read-only for logs",
    "Read-only for data, None for logs"
   ],
   "a": 3
  },
  {
   "l": "Two failover cluster VMs access the same managed disk:",
   "o": [
    "A Premium Azure Files share mounted by the nodes",
    "Shared disks (maxShares > 1)",
    "A disk snapshot attached to both VMs",
    "Each node's temporary disk"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Cache files on VM9's D: drive vanished after maintenance:</b></p><p>The <b>temporary disk</b> is stored on the physical host. Its content is lost if the VM changes host (maintenance, redeployment, stop with deallocation, resize). It's fine for the page file or a rebuildable cache, never for data to keep.</p><p>For persistent data, use a <b>managed data disk</b>.</p><p><b>2. Grow the data disk from 256 to 512 GiB:</b></p><p>You can <b>increase</b> a managed disk's size (often without stopping the VM for data disks, depending on type and size). You must then <b>extend the volume</b> in the OS (Disk Management or diskpart on Windows, growpart and resize2fs on Linux).</p><p>You can <b>never shrink</b> a managed disk.</p><p><b>3. SQL database: host caching for the read data disk and the written log disk:</b></p><p><b>Read-only</b> caching speeds up repeated reads: ideal for data files. For logs, written sequentially, choose <b>None</b>. <b>Read/write</b> caching risks losing writes in a failure if the application doesn't manage cache flushing; it's reserved for the OS disk.</p><p><b>4. Two failover cluster VMs access the same managed disk:</b></p><p><b>Shared disks</b> let you attach a managed disk (Premium SSD, Premium SSD v2, or Ultra) to several VMs at once, up to a maximum set by <b>maxShares</b>. The application (failover cluster, SCSI PR) manages concurrent access.</p><p>Azure Files is an SMB alternative, but it isn't a shared disk.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM9"
  ],
  "title": "VM9 | Disks",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*Temporary disk (D:)",
    "Not persistent"
   ],
   [
    "Data disks",
    "Persistent"
   ]
  ]
 },
 "keep": "Temporary disk = never for data to keep. Disk: grow yes, shrink never; then extend the volume. Data = Read-only; logs = None; OS = Read/write. Disk attached to several VMs = shared disk (maxShares)."
},
{
 "id": "D3-311",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are choosing disks for new VMs. What should you choose for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "More IOPS during month-end close, with no extra space or size change:",
   "o": [
    "Add a larger temporary disk",
    "Switch the disk to Standard HDD",
    "Enable Read/write caching",
    "Change the performance tier (P40)"
   ],
   "a": 3
  },
  {
   "l": "Stateless VM whose OS disk needn't be kept:",
   "o": [
    "An Ultra disk",
    "A Premium SSD (Read/write caching)",
    "A shared disk",
    "An ephemeral OS disk"
   ],
   "a": 3
  },
  {
   "l": "D-series size with a local temporary disk:",
   "o": [
    "Standard_D4ds_v5",
    "Standard_D4ps_v5",
    "Standard_D4s_v5",
    "Standard_D4as_v5"
   ],
   "a": 0
  },
  {
   "l": "Format of an on-premises virtual disk uploaded to create a managed disk:",
   "o": [
    "Fixed-size VHD",
    "Dynamic VHDX",
    "Dynamic VHD",
    "VMDK (VMware format)"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. More IOPS during month-end close, with no extra space or size change:</b></p><p>For Premium SSDs, the <b>performance tier</b> can be raised independently of size (for example P30 → P40), then lowered later (after a minimum delay). On-demand <b>bursting</b> is another option for short spikes on large disks.</p><p>Standard HDD would be slower. Read/write caching isn't recommended for data.</p><p><b>2. Stateless VM whose OS disk needn't be kept:</b></p><p>An <b>ephemeral OS disk</b> is created on the host's local storage (cache or temporary disk): faster reads and reimages, no storage cost. But it's lost if the VM changes host, and the VM can't be stopped with deallocation.</p><p><b>3. D-series size with a local temporary disk:</b></p><p>The letter <b>d</b> (D4<b>d</b>s_v5) indicates a <b>local temporary disk</b>. Since the v4 generation, sizes without “d” no longer have a temporary disk.</p><p><b>4. Format of an on-premises virtual disk uploaded to create a managed disk:</b></p><p>Azure only accepts disks in <b>fixed-size VHD</b> format. A VHDX or a dynamic disk must be converted (for example with <code>Convert-VHD</code> in Hyper-V), and a VMDK must be converted to VHD.</p>",
 "portal": {
  "path": [
   "Disks",
   "VM25-data"
  ],
  "title": "VM25-data | Size + performance",
  "menu": [
   "*Size + performance"
  ],
  "rows": [
   [
    "Size",
    "1 TiB (P30)"
   ],
   [
    "*Performance tier",
    "P40"
   ]
  ],
  "btn": "Save"
 },
 "keep": "More IOPS without more space = performance tier (or bursting). Fast startup, stateless = ephemeral OS disk. “d” in the name = local temporary disk. Disk to upload = fixed VHD only."
},
{
 "id": "D3-312",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You create VM images and distribute them with an Azure Compute Gallery. What should you do for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Generalize a Linux VM before capture — command:",
   "o": [
    "sudo waagent -deprovision+user",
    "az vm deallocate --name VM27",
    "sudo shutdown -h now only",
    "sysprep /generalize /oobe /shutdown"
   ],
   "a": 0
  },
  {
   "l": "Copies that keep accounts and configuration — definition type:",
   "o": [
    "Generalized",
    "Specialized",
    "Marketplace",
    "Ephemeral"
   ],
   "a": 1
  },
  {
   "l": "Create VMs in West Europe from a version replicated only in France Central:",
   "o": [
    "Add West Europe to the replication regions",
    "Nothing: a gallery is global and serves every region",
    "Create a gallery in West Europe and start over",
    "Copy the image with AzCopy to West Europe"
   ],
   "a": 0
  },
  {
   "l": "Thousands of VMs created at once from the same version slow down:",
   "o": [
    "The number of fault domains",
    "The number of replicas in the region",
    "The size of the deployed VMs",
    "The subscription's storage quota"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Generalize a Linux VM before capture — command:</b></p><p>On Linux, the Azure VM agent removes machine-specific information with <code>waagent -deprovision+user</code> (which also deletes the last user account). You then deallocate the VM, mark it generalized (<code>az vm generalize</code>), and capture the image.</p><p>Sysprep is the Windows tool.</p><p><b>2. Copies that keep accounts and configuration — definition type:</b></p><p>A <b>specialized</b> image keeps the computer name, accounts, and configuration. VMs created from it skip the provisioning step (no new administrator account).</p><p>A <b>generalized</b> image was prepared with Sysprep or waagent, and each new VM gets its own name and administrator account.</p><p><b>3. Create VMs in West Europe from a version replicated only in France Central:</b></p><p>An <b>image version</b> must be <b>replicated</b> to each region where you want to use it. You add West Europe to the target regions (with a replica count suited to the number of VMs created at the same time).</p><p><b>4. Thousands of VMs created at once from the same version slow down:</b></p><p>Each <b>replica</b> of an image version can serve a limited number of simultaneous creations. Increasing the number of replicas in the region spreads the load and speeds up large-scale deployments.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM-Linux"
  ],
  "title": "Prepare a Linux image",
  "rows": [
   [
    "*1",
    "sudo waagent -deprovision+user"
   ],
   [
    "2",
    "az vm deallocate"
   ],
   [
    "3",
    "az vm generalize"
   ]
  ]
 },
 "keep": "Generalizing Linux = waagent -deprovision; Windows = Sysprep. Specialized = exact copy; generalized = new identities. Using an image in a region = replicate it there. Many simultaneous VMs = more replicas."
},
{
 "id": "D3-313",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are preparing business continuity for web apps and VMs. What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Scheduled backups of WebApp16 files and configuration:",
   "o": [
    "App Service backups (target container)",
    "Azure Backup with a Recovery Services vault",
    "A managed disk snapshot of the app",
    "Azure Site Recovery for the app"
   ],
   "a": 0
  },
  {
   "l": "WebApp23's backup was restored to WebApp23-test — feature:",
   "o": [
    "A restore deployment slot",
    "Restore a backup to another app",
    "A Template Spec of the app",
    "Azure Site Recovery for App Service"
   ],
   "a": 1
  },
  {
   "l": "Copy an app (code and configuration) to another region:",
   "o": [
    "Move the app to the other region (Properties)",
    "Increase the plan's instance count",
    "Clone the app to the other region",
    "A deployment slot in the other region"
   ],
   "a": 2
  },
  {
   "l": "Replicate a VM to another region with failover in minutes:",
   "o": [
    "Azure Backup only",
    "Azure Site Recovery",
    "A deployment slot",
    "An availability set"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Scheduled backups of WebApp16 files and configuration:</b></p><p>App Service has its own <b>backup</b> feature: built-in automatic backups (Basic tier and above), and scheduled <b>custom</b> backups to a storage container, with a linked database if needed.</p><p>Azure Backup for VMs, snapshots, and Site Recovery don't apply to App Service apps.</p><p><b>2. WebApp23's backup was restored to WebApp23-test — feature:</b></p><p>An App Service backup can be restored to the original app, to a <b>slot</b>, or to <b>another app</b> (new or existing). It's handy for testing without touching production.</p><p><b>3. Copy an app (code and configuration) to another region:</b></p><p>App <b>cloning</b> (Standard tier or higher) creates a copy of the content and configuration in another plan, possibly in another region. You can also restore a backup to an app in another region.</p><p>A slot is always in the same region as its app. An app doesn't change region.</p><p><b>4. Replicate a VM to another region with failover in minutes:</b></p><p><b>Azure Site Recovery</b> continuously replicates the VM's disks to a target region and allows a <b>failover</b> (and failback) with an RPO of seconds to minutes.</p><p>Azure Backup lets you restore, but with a longer delay and an RPO tied to backup frequency.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp16"
  ],
  "title": "WebApp16 | Backups",
  "menu": [
   "*Backups"
  ],
  "rows": [
   [
    "*Type",
    "Custom"
   ],
   [
    "Storage",
    "stbackup / webapp16"
   ],
   [
    "Schedule",
    "Daily"
   ]
  ],
  "btn": "Configure"
 },
 "keep": "Backing up a web app = App Service Backups. Restoring an App Service backup to another app = risk-free testing. Copying an app to another region = cloning (or restore). VM failover to another region = Azure Site Recovery."
},
{
 "id": "D3-314",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are designing availability for several VM-based apps. What should you answer or use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Availability set of 10 VMs, 5 update domains — max VMs down during maintenance:",
   "o": [
    "1",
    "2",
    "5",
    "10"
   ],
   "a": 1
  },
  {
   "l": "Availability set, 3 fault and 5 update domains — protects against:",
   "o": [
    "A rack failure and host maintenance",
    "Accidental deletion of a VM in the set",
    "Failure of an entire region and its pair",
    "Failure of an entire datacenter"
   ],
   "a": 0
  },
  {
   "l": "Share the physical server with no other Azure customer:",
   "o": [
    "An availability set",
    "Spot VMs",
    "A proximity placement group",
    "Azure Dedicated Host"
   ],
   "a": 3
  },
  {
   "l": "Lowest possible network latency between HPC VMs:",
   "o": [
    "A proximity placement group",
    "Different availability zones",
    "An availability set with 3 fault domains",
    "Different regions"
   ],
   "a": 0
  },
  {
   "l": "At most 3 VMs, survive a zone failure:",
   "o": [
    "Three VMs in zone 1, behind a Standard load balancer",
    "Three VMs in an availability set",
    "One VM per zone (1, 2, 3) and a Standard LB",
    "Three VMs in a proximity placement group"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Availability set of 10 VMs, 5 update domains — max VMs down during maintenance:</b></p><p>In an availability set, two concepts combine:</p><ul><li><b>Update domains</b>: groups of VMs restarted together during planned maintenance. Azure restarts only <b>one at a time</b>.</li><li><b>Fault domains</b>: groups of VMs sharing the same rack (power, network). They protect against hardware failures, not maintenance.</li></ul><p>10 VMs spread across 5 update domains = 2 VMs per domain. During maintenance, at most <b>2 VMs</b> are unavailable at the same time.</p><p><b>2. Availability set, 3 fault and 5 update domains — protects against:</b></p><p><b>Fault domains</b> place VMs on different racks (separate power and network). <b>Update domains</b> keep all VMs from restarting at the same time during maintenance. SLA: 99.95%.</p><p>An availability set stays in <b>a single datacenter</b>. Against a datacenter failure, you use <b>availability zones</b> (99.99% SLA); against a region failure, another region.</p><p><b>3. Share the physical server with no other Azure customer:</b></p><p><b>Azure Dedicated Host</b> provides physical servers reserved for your subscription: you choose the VMs that run on them, and you control maintenance.</p><p>The other options don't guarantee physical isolation.</p><p><b>4. Lowest possible network latency between HPC VMs:</b></p><p>A <b>proximity placement group</b> places VMs physically close together in the same datacenter, which reduces latency. <b>Accelerated networking</b> also reduces latency.</p><p>Spreading across several zones or regions increases latency.</p><p><b>5. At most 3 VMs, survive a zone failure:</b></p><p>One VM per zone, behind a zone-redundant <b>Standard load balancer</b>: if a zone goes down, two VMs keep serving. 99.99% SLA.</p><p>An availability set withstands a rack failure but not a datacenter failure. Three VMs in the same zone share the same risk.</p>",
 "portal": {
  "path": [
   "Availability sets",
   "AS1"
  ],
  "title": "AS1 | Overview",
  "menu": [
   "*Overview",
   "Properties"
  ],
  "rows": [
   [
    "Fault domains",
    "2"
   ],
   [
    "*Update domains",
    "5"
   ],
   [
    "VMs per update domain",
    "2"
   ]
  ]
 },
 "keep": "Planned maintenance = 1 update domain at a time. Hardware failure = 1 fault domain. Availability set = racks + maintenance, within 1 datacenter (99.95%). Reserved physical server = Dedicated Host. Minimal latency between VMs = proximity placement group. 3 VMs and zone resilience = 1 VM per zone + Standard load balancer."
},
{
 "id": "D3-315",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Several VMs no longer respond correctly. What should you use in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM7 no longer answers RDP — see the screen to know if Windows is stuck:",
   "o": [
    "Azure Advisor, Reliability tab",
    "The VM's activity log",
    "Network Watcher: IP flow verify",
    "Boot diagnostics"
   ],
   "a": 3
  },
  {
   "l": "Linux VM stuck on an /etc/fstab error, with no network connection:",
   "o": [
    "Azure Bastion",
    "The serial console",
    "SSH through the public IP address",
    "The activity log"
   ],
   "a": 1
  },
  {
   "l": "OS disk to repair from another VM after a faulty driver:",
   "o": [
    "Resize VM28 to a larger size",
    "Enable Always On on VM28",
    "Fix a copy of the disk on a repair VM",
    "Delete VM28 and its disks, then recreate it from the image"
   ],
   "a": 2
  },
  {
   "l": "Host-related issues: migrate to a new host:",
   "o": [
    "Redeploy VM8",
    "Resize VM8",
    "Reapply VM8's state",
    "Reset the password"
   ],
   "a": 0
  },
  {
   "l": "One-off script in VM21 with no RDP, VM agent working:",
   "o": [
    "Run command",
    "A new DSC extension",
    "Boot diagnostics",
    "A snapshot of the OS disk"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. VM7 no longer answers RDP — see the screen to know if Windows is stuck:</b></p><p><b>Boot diagnostics</b> keep a screenshot (and, for Linux, the console log). You see for example a blue screen, an update in progress, or a disk check prompt.</p><p>IP flow verify tests network rules. The activity log records Azure operations, not the OS state.</p><p><b>2. Linux VM stuck on an /etc/fstab error, with no network connection:</b></p><p>The <b>serial console</b> gives text access to the VM's console (COM1 or ttyS0), even if the network or boot is broken. It requires boot diagnostics to be enabled and a local account with a password.</p><p>Bastion and SSH go through the network, unavailable as long as the system doesn't boot.</p><p><b>3. OS disk to repair from another VM after a faulty driver:</b></p><p>The <b>az vm repair</b> command automates the approach: create a repair VM, attach a <b>copy</b> of the OS disk as a data disk, run fix scripts, then <b>swap the OS disk</b> of the original VM.</p><p><b>4. Host-related issues: migrate to a new host:</b></p><p><b>Redeploy</b> stops the VM, moves it to a new node in the infrastructure, then restarts it. Note: data on the <b>temporary disk</b> is lost and a dynamic public IP address may change.</p><p><b>Reapply</b> reruns the VM's provisioning without changing host: useful when the VM is in a failed state.</p><p><b>5. One-off script in VM21 with no RDP, VM agent working:</b></p><p><b>Run command</b> runs a PowerShell or shell script in the VM through the VM agent, with no network connection to the VM. Ideal for diagnosing or fixing when RDP or SSH no longer works.</p><p>Boot diagnostics show the screen. DSC is for lasting desired state configuration. A snapshot copies a disk.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM7"
  ],
  "title": "VM7 | Boot diagnostics",
  "menu": [
   "*Boot diagnostics"
  ],
  "rows": [
   [
    "*Screenshot",
    "Windows boot screen"
   ],
   [
    "Serial log",
    "Linux"
   ]
  ]
 },
 "keep": "Seeing the boot screen = boot diagnostics. OS that won't boot, no network = serial console. Repairing an OS that won't boot = repair VM + disk swap (az vm repair). New host = Redeploy; failed state = Reapply. Script with no network, through the agent = Run command."
},
{
 "id": "D3-316",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Developers are troubleshooting their App Service apps. What should they use for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "See logs live while reproducing a bug:",
   "o": [
    "The app's activity log",
    "The app's Backups page",
    "Log stream (logging enabled)",
    "Azure Advisor, Performance tab"
   ],
   "a": 2
  },
  {
   "l": "Logs kept for 90 days and queried in KQL with other resources:",
   "o": [
    "Application logging to the file system",
    "The app's log stream",
    "A diagnostic setting to Log Analytics",
    "The app's scheduled backups"
   ],
   "a": 2
  },
  {
   "l": "A command prompt to inspect deployed files:",
   "o": [
    "Azure Bastion to the instance",
    "The app's serial console",
    "The Kudu console (SCM site)",
    "RDP to the plan's instance"
   ],
   "a": 2
  },
  {
   "l": "500 errors: guided diagnosis with automatic analysis:",
   "o": [
    "Identity",
    "Custom domains and certificates",
    "Deployment Center, Logs tab",
    "Diagnose and solve problems"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. See logs live while reproducing a bug:</b></p><p><b>Log stream</b> shows application and web server logs in real time, provided logging is enabled in <b>App Service logs</b>. You can also follow them with <code>az webapp log tail</code>.</p><p><b>2. Logs kept for 90 days and queried in KQL with other resources:</b></p><p>A <b>diagnostic setting</b> sends App Service logs (HTTP, console, application, audit…) to <b>Log Analytics</b>, where you set retention and query them in KQL with other sources.</p><p>File system logging turns itself off after 12 hours. Log stream is live, with no retention.</p><p><b>3. A command prompt to inspect deployed files:</b></p><p><b>Kudu</b> (Advanced Tools, at <code>&lt;app&gt;.scm.azurewebsites.net</code>) gives a debug console, file explorer, environment variables, logs, and deployments. On Linux, SSH into the container is also available.</p><p>You don't RDP into App Service instances.</p><p><b>4. 500 errors: guided diagnosis with automatic analysis:</b></p><p><b>Diagnose and solve problems</b> offers detectors (availability and performance, crashes, memory, CPU, configuration) that automatically analyze the app and suggest solutions.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Log stream",
  "menu": [
   "App Service logs",
   "*Log stream"
  ],
  "rows": [
   [
    "Prerequisite",
    "Application logging enabled"
   ]
  ]
 },
 "keep": "Live logs = log stream. Retained, queryable logs = diagnostic setting to Log Analytics. A web app's console and files = Kudu (SCM site). Guided diagnosis = Diagnose and solve problems."
},
{
 "id": "D3-317",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You publish web apps on custom domains. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Map www.contoso.com to WebApp7 — DNS records:",
   "o": [
    "A PTR record to the app's address",
    "An SRV record to webapp7.azurewebsites.net",
    "An MX record to webapp7.azurewebsites.net",
    "A CNAME www and a TXT asuid.www"
   ],
   "a": 3
  },
  {
   "l": "Free TLS certificate renewed automatically:",
   "o": [
    "None: HTTPS is impossible on a custom domain",
    "An App Service managed certificate",
    "A Key Vault certificate generated manually each year",
    "A self-signed certificate"
   ],
   "a": 1
  },
  {
   "l": "Redirect all WebApp26 HTTP requests to HTTPS:",
   "o": [
    "ARR affinity",
    "Always On",
    "Minimum TLS version 1.0",
    "HTTPS only"
   ],
   "a": 3
  },
  {
   "l": "FTPS deployment is refused — setting to check:",
   "o": [
    "Always On on the production slot",
    "ARR affinity (sticky sessions)",
    "FTP state and basic credentials",
    "The app's health check"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Map www.contoso.com to WebApp7 — DNS records:</b></p><p>For a subdomain like www, you create a <b>CNAME</b> to <code>webapp7.azurewebsites.net</code>, and a <b>TXT</b> <code>asuid.www</code> containing the domain verification ID (shown in the portal), which proves you own the domain.</p><p>For the root domain (contoso.com), you use an <b>A</b> record to the app's IP address, plus the <code>asuid</code> TXT.</p><p><b>2. Free TLS certificate renewed automatically:</b></p><p>The <b>App Service managed certificate</b> is free and renewed automatically for an already validated custom domain. It doesn't support wildcard domains (*.contoso.com) and can't be exported. For that, buy a certificate or import one from Key Vault.</p><p><b>3. Redirect all WebApp26 HTTP requests to HTTPS:</b></p><p>The <b>HTTPS only</b> setting automatically redirects HTTP requests to HTTPS. You also set the <b>minimum TLS version</b> (1.2 recommended) to reject older protocols.</p><p><b>4. FTPS deployment is refused — setting to check:</b></p><p>In <b>Configuration > General settings</b>, the <b>FTP state</b> can be set to “FTPS only” or “Disabled”, and basic authentication (used by FTP) can be disabled. For security, Microsoft recommends disabling FTP and preferring other deployment methods.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp7"
  ],
  "title": "Add custom domain",
  "rows": [
   [
    "*CNAME",
    "www → webapp7.azurewebsites.net"
   ],
   [
    "*TXT",
    "asuid.www → verification ID"
   ]
  ],
  "btn": "Validate"
 },
 "keep": "Subdomain = CNAME + asuid TXT; root = A + asuid TXT. Free, auto-renewed TLS = App Service managed certificate. Redirecting HTTP to HTTPS = HTTPS only. FTP refused = FTP state or basic authentication disabled."
},
{
 "id": "D3-318",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You write Bicep files for the infrastructure. What should you write for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Reuse a standard virtual network definition in several files:",
   "o": [
    "A Bicep module (module keyword)",
    "A shared global variable",
    "A resource lock per file",
    "An output in each file, with no module"
   ],
   "a": 0
  },
  {
   "l": "Add a subnet to VNet1, which already exists, without redeploying it:",
   "o": [
    "param vnet object = { name: 'VNet1', id: resourceId('…/virtualNetworks', 'VNet1') }",
    "resource vnet '…/virtualNetworks@2023-04-01' existing = { name: 'VNet1' }",
    "output vnet string = 'VNet1'",
    "module vnet './vnet.bicep' = { name: 'VNet1', params: { mode: 'existing' } }"
   ],
   "a": 1
  },
  {
   "l": "Deploy a public IP only if publicAccess is true:",
   "o": [
    "resource pip … = [for i in range(0, publicAccess): { … }]",
    "resource pip … existing = { name: 'pip1' }",
    "resource pip '…/publicIPAddresses@2023-04-01' = if (publicAccess) { … }",
    "module pip './pip.bicep' = { dependsOn: [publicAccess] }"
   ],
   "a": 2
  },
  {
   "l": "The env parameter only accepts dev, test, and prod:",
   "o": [
    "@description('dev, test, prod')",
    "@allowed(['dev', 'test', 'prod'])",
    "@metadata({ values: 'dev,test,prod' })",
    "@minLength(3)"
   ],
   "a": 1
  },
  {
   "l": "Create the RG-App group, then deploy an account into it — targetScope:",
   "o": [
    "'subscription'",
    "'managementGroup'",
    "'resourceGroup'",
    "'tenant'"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Reuse a standard virtual network definition in several files:</b></p><p>A <b>module</b> is a reusable Bicep file, called from another file with <code>module vnet './vnet.bicep' = { name: ..., params: {...} }</code>. You can store it locally, in a Bicep registry, or as a Template Spec.</p><p><b>2. Add a subnet to VNet1, which already exists, without redeploying it:</b></p><p>The <b>existing</b> keyword declares a resource that already exists: you can read its properties and use it as a parent (<code>parent: vnet</code>) without redeploying it.</p><p>An object parameter doesn't reference a resource. A module would redeploy the network. An output returns a value.</p><p><b>3. Deploy a public IP only if publicAccess is true:</b></p><p>The <b>if</b> keyword after the equals sign creates a <b>conditional deployment</b> (equivalent to the <code>condition</code> element in ARM JSON). If the condition is false, the resource isn't deployed.</p><p>A loop over a boolean makes no sense. existing references an existing resource. dependsOn orders deployments.</p><p><b>4. The env parameter only accepts dev, test, and prod:</b></p><p><b>@allowed</b> limits a parameter to a list of values: the deployment fails before starting if the value isn't in it.</p><p>@secure masks a sensitive value. @minLength enforces a minimum length. @description documents the parameter without checking anything.</p><p><b>5. Create the RG-App group, then deploy an account into it — targetScope:</b></p><p>A resource group is created at the <b>subscription</b> scope: the main file uses <code>targetScope = 'subscription'</code>, creates the group, then calls a <b>module</b> with <code>scope: rg</code> to deploy the storage account into that group.</p><p>'resourceGroup' is the default value, but a template at that scope can't create its own resource group.</p>",
 "portal": {
  "path": [
   "VS Code",
   "main.bicep"
  ],
  "title": "main.bicep",
  "rows": [
   [
    "*module vnet './vnet.bicep'",
    "{ name: 'vnet', params: { … } }"
   ]
  ]
 },
 "keep": "Reusing Bicep = module. Reference without redeploying = existing. Deploy a resource or not = if (Bicep) / condition (JSON). List of allowed values = @allowed; secret = @secure. Creating a resource group in Bicep = targetScope 'subscription' + module with scope."
},
{
 "id": "D3-319",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You write ARM JSON templates. What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Full ID of VNet1 in the same resource group:",
   "o": [
    "reference(resourceGroup().id, 'VNet1', '2023-04-01', 'Full')",
    "uniqueString(resourceGroup().id, 'VNet1')",
    "resourceId('Microsoft.Network/virtualNetworks', 'VNet1')",
    "concat('VNet1')"
   ],
   "a": 2
  },
  {
   "l": "Five identical storage accounts named from an index:",
   "o": [
    "A different parameter file per account",
    "copy, with copyIndex() in the name",
    "condition",
    "dependsOn"
   ],
   "a": 1
  },
  {
   "l": "Writing vmSize in a parameters file:",
   "o": [
    "\"vmSize\": { \"type\": \"string\", \"defaultValue\": \"Standard_D2s_v5\" }",
    "\"parameters\": { \"vmSize\": \"Standard_D2s_v5\" }",
    "\"variables\": { \"vmSize\": { \"value\": \"Standard_D2s_v5\" } }",
    "\"parameters\": { \"vmSize\": { \"value\": \"Standard_D2s_v5\" } }"
   ],
   "a": 3
  },
  {
   "l": "The VM is sometimes created before its network interface:",
   "o": [
    "A dependsOn element to the interface",
    "A condition on the VM resource",
    "A copy element on the interface",
    "An output with the interface's ID"
   ],
   "a": 0
  },
  {
   "l": "The main template reaches linked templates in a private account:",
   "o": [
    "With a URL that contains a SAS token",
    "With a local path C:\\templates\\vnet.json",
    "Linked templates must always be public",
    "With the account key written in the template"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. Full ID of VNet1 in the same resource group:</b></p><p><b>resourceId()</b> builds a resource's full identifier from its type and name (and optionally subscription and group). <b>reference()</b> returns a resource's runtime state (properties). <b>uniqueString()</b> generates a deterministic hash for unique names.</p><p><b>2. Five identical storage accounts named from an index:</b></p><p>The <b>copy</b> element (with <code>count</code>) creates several instances of a resource; <b>copyIndex()</b> gives the iteration's index, usable in the name. In Bicep, you write a loop <code>[for i in range(0, 5): {...}]</code>.</p><p>condition decides whether to deploy a resource. Several parameter files would require several deployments.</p><p><b>3. Writing vmSize in a parameters file:</b></p><p>In a JSON <b>parameter file</b>, each parameter is an object with a <b>value</b> property (or <b>reference</b> for a Key Vault secret), in the <code>parameters</code> section.</p><p><code>defaultValue</code> is written in the <b>template</b>, not the parameter file. A parameter file has no variables section.</p><p><b>4. The VM is sometimes created before its network interface:</b></p><p><b>dependsOn</b> tells Resource Manager that a resource must wait until another finishes deploying. Without a dependency, resources are deployed in parallel.</p><p>In Bicep, dependencies are usually inferred automatically when a resource references a property of another (for example <code>nic.id</code>).</p><p><b>5. The main template reaches linked templates in a private account:</b></p><p>A <b>linked template</b> is referenced by a URL (<code>templateLink.uri</code>) that Resource Manager must be able to read. For private storage, you add a <b>SAS token</b> to the URL (passed as a secure parameter). Template Specs and Bicep modules now avoid this need.</p>",
 "portal": {
  "path": [
   "Custom deployment",
   "Edit template"
  ],
  "title": "Template functions",
  "rows": [
   [
    "*resourceId()",
    "Full ID"
   ],
   [
    "reference()",
    "Runtime properties"
   ],
   [
    "uniqueString()",
    "Deterministic hash"
   ]
  ]
 },
 "keep": "A resource's ID in a template = resourceId(). N instances = copy + copyIndex() (for loop in Bicep). Parameter file: { \"value\": … } or { \"reference\": … }. Deployment order = dependsOn (implicit in Bicep through references). Private linked template = URL + SAS (or Template Spec / Bicep module)."
},
{
 "id": "D3-320",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You administer Azure Container Registry registries. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Delete untagged manifests in ACR6 after 7 days:",
   "o": [
    "Geo-replication to a second region",
    "Retention of untagged manifests",
    "A storage account lifecycle policy",
    "The registry's admin account"
   ],
   "a": 1
  },
  {
   "l": "Rebuild the image in ACR7 when the node:20 base image changes:",
   "o": [
    "Registry geo-replication",
    "A webhook to Azure Advisor",
    "An ACR task (base image update)",
    "A manifest retention policy"
   ],
   "a": 2
  },
  {
   "l": "A partner pulls only the app-partner repository from ACR8:",
   "o": [
    "A private endpoint for the partner",
    "The AcrPull role on the whole registry",
    "The registry's admin account",
    "A token with a scope map"
   ],
   "a": 3
  },
  {
   "l": "Automatic replication to France Central and West Europe — ACR1 tier:",
   "o": [
    "Basic",
    "Premium",
    "Standard",
    "Any tier"
   ],
   "a": 1
  },
  {
   "l": "ACR11 reachable only from VNet5 over a private IP:",
   "o": [
    "The admin account with a strong password",
    "A private endpoint (Premium)",
    "A manifest retention policy",
    "The Basic tier with a firewall"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Delete untagged manifests in ACR6 after 7 days:</b></p><p>ACR's <b>retention policy</b> automatically deletes <b>untagged</b> manifests after a number of days. It's available in the <b>Premium</b> tier. You can also use scheduled ACR purge tasks (<code>acr purge</code>).</p><p><b>2. Rebuild the image in ACR7 when the node:20 base image changes:</b></p><p><b>ACR tasks</b> can be triggered by a source code commit, a schedule, or a <b>base image update</b>: they then automatically rebuild the dependent image, for example to apply security patches.</p><p><b>3. A partner pulls only the app-partner repository from ACR8:</b></p><p><b>Repository-scoped tokens</b>, tied to a <b>scope map</b>, grant rights (read, write) on specific repositories. The AcrPull role applies to <b>all</b> repositories in the registry.</p><p><b>4. Automatic replication to France Central and West Europe — ACR1 tier:</b></p><p>Azure Container Registry has three tiers: <b>Basic</b>, <b>Standard</b>, and <b>Premium</b>. Only <b>Premium</b> offers <b>geo-replication</b> (one registry replicated across several regions), along with private endpoints and customer-managed keys.</p><p>Premium is therefore the cheapest tier that meets the need.</p><p><b>5. ACR11 reachable only from VNet5 over a private IP:</b></p><p>ACR <b>private endpoints</b> require the <b>Premium</b> tier. You then disable public network access. The private DNS zone is <code>privatelink.azurecr.io</code>.</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR6"
  ],
  "title": "ACR6 | Retention policies",
  "menu": [
   "*Policies"
  ],
  "rows": [
   [
    "*Retention (untagged manifests)",
    "7 days"
   ],
   [
    "Tier",
    "Premium"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Purging orphaned manifests = retention policy (Premium) or acr purge. Rebuilding when the base image changes = ACR task. Per-repository rights = token + scope map. ACR geo-replication, private endpoints = Premium. Private ACR = Premium + private endpoint."
},
{
 "id": "D3-321",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You deploy and move resources with Resource Manager. What happens, or what should you do, in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "VM1 and its disks move from Sub1 to Sub2, same tenant — what changes:",
   "o": [
    "Its region",
    "Its size",
    "Its operating system",
    "Its resource ID"
   ],
   "a": 3
  },
  {
   "l": "Template deployed in Complete mode to RG1, which holds VM1 not described:",
   "o": [
    "VM1 is deleted",
    "The deployment fails",
    "VM1 is kept unchanged",
    "VM1 is stopped"
   ],
   "a": 0
  },
  {
   "l": "20 VMs deployed, regional vCPU quota error:",
   "o": [
    "Add a dependsOn on the VM",
    "Raise the vCPU quota (or change family)",
    "Create a new resource group for the VM",
    "Switch the deployment to Complete mode"
   ],
   "a": 1
  },
  {
   "l": "Thousands of deployments in a group — history limit:",
   "o": [
    "It deletes the oldest deployments (near 800)",
    "It blocks any new deployment until cleanup",
    "It deletes the group's oldest resources",
    "It archives the history to a storage account"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. VM1 and its disks move from Sub1 to Sub2, same tenant — what changes:</b></p><p>The <b>resource ID</b> looks like <code>/subscriptions/&lt;id&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Compute/virtualMachines/VM1</code>. It contains the subscription and the resource group: it <b>changes</b> during the move. Scripts and alerts that use the old ID must be updated.</p><p>The region, size, and operating system don't change. To change region, you use Azure Resource Mover or Site Recovery.</p><p><b>2. Template deployed in Complete mode to RG1, which holds VM1 not described:</b></p><p>In <b>Complete</b> mode, Resource Manager <b>deletes</b> resources in the resource group that aren't in the template (unless a lock prevents it). In <b>Incremental</b> mode, the default, resources missing from the template are kept.</p><p>Best practice: run a <b>what-if</b> operation first to see what would be deleted.</p><p><b>3. 20 VMs deployed, regional vCPU quota error:</b></p><p>vCPU <b>quotas</b> (regional total and per family) limit the number of VMs. You request an increase in <b>Usage + quotas</b>, or choose a family that still has quota. The deployment mode and resource group change nothing.</p><p><b>4. Thousands of deployments in a group — history limit:</b></p><p>The history is limited to <b>800 deployments</b> per scope. Azure <b>automatically deletes</b> the oldest ones as you approach the limit (unless a lock prevents it). Resources are never deleted as a result.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Properties",
  "menu": [
   "Overview",
   "*Properties"
  ],
  "rows": [
   [
    "*Resource ID",
    "/subscriptions/<Sub2>/resourceGroups/RG2/…/VM1"
   ],
   [
    "Region",
    "Unchanged"
   ]
  ]
 },
 "keep": "A move changes the resource ID, never the region. Complete mode = deletes what isn't in the template; test with what-if. vCPU quota error = quota increase or another family. Deployment history: 800 per scope, automatic cleanup."
},
{
 "id": "D3-322",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are industrializing your templates and their secrets. What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Share a validated, versioned template and control who deploys it:",
   "o": [
    "Azure Advisor",
    "An email with the JSON file",
    "A Template Spec",
    "A public storage account"
   ],
   "a": 2
  },
  {
   "l": "Manage resources as a whole and deny changes outside the template:",
   "o": [
    "A deployment in Incremental mode",
    "A deployment stack with deny settings",
    "A Template Spec versioned per team",
    "A ReadOnly lock on each resource"
   ],
   "a": 1
  },
  {
   "l": "Get a template for a VM created in the portal:",
   "o": [
    "Use Azure Advisor, Operational Excellence tab",
    "Open the resource group's activity log",
    "Use Export template",
    "Create a generalized image of the VM"
   ],
   "a": 2
  },
  {
   "l": "Password that doesn't appear in deployment history — type:",
   "o": [
    "string",
    "secureobject with a default value",
    "securestring",
    "object"
   ],
   "a": 2
  },
  {
   "l": "Password read from KV1 in the parameters file — KV1 requirement:",
   "o": [
    "KV1 must use access policies, without RBAC",
    "KV1 must have its public endpoint disabled",
    "KV1 must be in the same resource group as the deployed VM",
    "KV1 must allow Resource Manager for templates"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Share a validated, versioned template and control who deploys it:</b></p><p>A <b>Template Spec</b> is an Azure resource that stores a template (JSON or Bicep) with <b>versions</b>. You grant access with a role (for example Reader) and deploy directly from the Template Spec.</p><p><b>2. Manage resources as a whole and deny changes outside the template:</b></p><p>A <b>deployment stack</b> manages a set of resources as a unit: it can delete resources removed from the template, and apply <b>deny assignments</b> (DenyDelete or DenyWriteAndDelete) that protect the managed resources.</p><p>A Template Spec stores a template, with no protection. Individual locks are heavier to manage.</p><p><b>3. Get a template for a VM created in the portal:</b></p><p><b>Export template</b> generates an ARM template (and offers a Bicep version) from existing resources, or from a deployment's history. The template often needs cleaning up and parameterizing before reuse.</p><p>An image captures the disk, not the Azure configuration (network, size…).</p><p><b>4. Password that doesn't appear in deployment history — type:</b></p><p>The <b>securestring</b> type is neither logged nor returned in the deployment history. Even better: reference a <b>Key Vault</b> secret in the parameter file, so the password is never typed.</p><p>A <code>string</code> would appear in the history. A default value for a secret is bad practice.</p><p><b>5. Password read from KV1 in the parameters file — KV1 requirement:</b></p><p>For a deployment to read a secret by reference (<code>\"reference\": { \"keyVault\": { \"id\": ... }, \"secretName\": ... }</code>), the vault must have <b>enabledForTemplateDeployment</b> on, and the user deploying must have the <code>Microsoft.KeyVault/vaults/deploy/action</code> permission.</p><p>The vault can be in another resource group, and the permission model doesn't matter for this setting.</p>",
 "portal": {
  "path": [
   "Template specs"
  ],
  "title": "vm-baseline | Versions",
  "menu": [
   "Overview",
   "*Versions",
   "Access control (IAM)"
  ],
  "rows": [
   [
    "*1.0",
    "Published"
   ],
   [
    "1.1",
    "Published"
   ]
  ],
  "btn": "Deploy"
 },
 "keep": "Sharing a versioned template with RBAC = Template Spec. Managing and protecting a set = deployment stack (deny assignments). Template from existing resources = Export template. Password in a template = securestring (or a Key Vault reference). Key Vault reference in a parameter file = enabledForTemplateDeployment."
},
{
 "id": "D3-323",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>The security team sets encryption and boot rules for VMs. You need to choose the feature that meets each requirement.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Features",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "Azure Disk Encryption",
  "Encryption at host",
  "A disk encryption set",
  "A generation 2 VM",
  "Platform-managed keys",
  "A generation 1 VM"
 ],
 "tgts": [
  {
   "l": "Encrypt VM14's volumes with BitLocker, keys in a key vault",
   "a": 0
  },
  {
   "l": "VM15's temp disk and caches encrypted end to end, with no agent",
   "a": 1
  },
  {
   "l": "Encrypt several VMs' disks with your own keys, at the storage level",
   "a": 2
  },
  {
   "l": "Trusted Launch Secure Boot and vTPM",
   "a": 3
  }
 ],
 "expl": "<p><b>1. Encrypt VM14's volumes with BitLocker, keys in a key vault</b></p><p><b>Azure Disk Encryption</b> (ADE) encrypts volumes <b>inside the VM</b> with BitLocker (Windows) or DM-Crypt (Linux). Keys are stored in a <b>key vault</b>, which must have the “Azure Disk Encryption for volume encryption” option and be in the same region.</p><p>Server-side encryption (SSE) encrypts disks at the storage level, without BitLocker. Microsoft now recommends <b>encryption at host</b> instead for new VMs, as ADE is being retired.</p><p><b>2. VM15's temp disk and caches encrypted end to end, with no agent</b></p><p><b>Encryption at host</b> encrypts data on the physical host: temporary disk, disk caches, and flows to storage. It uses no agent in the VM. You must first register the EncryptionAtHost feature on the subscription.</p><p>Azure Disk Encryption encrypts inside the VM with BitLocker or DM-Crypt. The other two options concern storage accounts.</p><p><b>3. Encrypt several VMs' disks with your own keys, at the storage level</b></p><p>A <b>Disk Encryption Set</b> references a Key Vault key and has a managed identity to use it. You associate it with managed disks for server-side encryption with <b>customer-managed keys</b>.</p><p><b>4. Trusted Launch Secure Boot and vTPM</b></p><p><b>Trusted Launch</b> (Secure Boot, vTPM, boot integrity monitoring) requires <b>generation 2</b> VMs, which boot with UEFI. Generation 1 VMs use a classic BIOS.</p><p>The security type is chosen when the VM is created.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM14"
  ],
  "title": "VM14 | Disks › Additional encryption",
  "menu": [
   "*Disks"
  ],
  "rows": [
   [
    "*Azure Disk Encryption",
    "OS and data disks"
   ],
   [
    "Key vault",
    "KV-ADE"
   ]
  ],
  "btn": "Save"
 },
 "keep": "BitLocker/DM-Crypt inside the VM = Azure Disk Encryption. Temporary disk + caches with no agent = encryption at host. Managed disks + customer key = Disk Encryption Set. Trusted Launch = generation 2 (UEFI)."
},
{
 "id": "D3-324",
 "dom": 3,
 "type": "hot",
 "stem": "<p>Web apps must communicate with private resources. What should you configure for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "WebApp10 calls an API on a VM that only has a private IP in VNet2:",
   "o": [
    "A custom domain for WebApp10",
    "A private endpoint for WebApp10",
    "Virtual network integration (VNet2)",
    "Access restrictions on WebApp10"
   ],
   "a": 2
  },
  {
   "l": "WebApp11 reachable only from VNet3 and on-premises, never from the internet:",
   "o": [
    "A dedicated deployment slot",
    "A static public IP address",
    "Virtual network integration with VNet3, with nothing else",
    "A private endpoint, public access off"
   ],
   "a": 3
  },
  {
   "l": "Accept only 203.0.113.0/24 traffic without changing the architecture:",
   "o": [
    "Access restrictions (Allow 203.0.113.0/24)",
    "A service endpoint on the app",
    "A storage account firewall in front of the app",
    "A network security group associated with the app"
   ],
   "a": 0
  },
  {
   "l": "Call an on-premises server API without VPN, outbound connections only:",
   "o": [
    "A deployment slot",
    "Hybrid Connections",
    "Outbound access restrictions",
    "A private endpoint"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. WebApp10 calls an API on a VM that only has a private IP in VNet2:</b></p><p><b>Virtual network integration</b> concerns <b>outbound</b> traffic: the app can reach resources in the virtual network (and, through it, whatever is peered or connected by VPN). It uses a dedicated delegated subnet.</p><p>A <b>private endpoint</b> concerns <b>inbound</b> traffic: it gives the app a private address. Access restrictions also filter inbound traffic.</p><p><b>2. WebApp11 reachable only from VNet3 and on-premises, never from the internet:</b></p><p>The <b>private endpoint</b> gives the app a private IP address in VNet3: <b>inbound</b> traffic arrives through the private network (and through the VPN from on-premises). You then disable <b>public network access</b>.</p><p>Virtual network integration only handles outbound traffic.</p><p><b>3. Accept only 203.0.113.0/24 traffic without changing the architecture:</b></p><p>App Service <b>access restrictions</b> are an ordered list of Allow/Deny rules by IP address, service tag, or subnet (with a service endpoint). As soon as an Allow rule exists, everything else is denied.</p><p>You can't associate an NSG directly with a multi-tenant web app.</p><p><b>4. Call an on-premises server API without VPN, outbound connections only:</b></p><p><b>Hybrid Connections</b> use Azure Relay: an agent (Hybrid Connection Manager) installed on-premises opens an outbound connection, and the app reaches a specific host and port, with no VPN or inbound port opening.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp10"
  ],
  "title": "WebApp10 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Virtual network integration (outbound)",
    "VNet2 / snet-webapp"
   ],
   [
    "Private endpoint (inbound)",
    "No"
   ]
  ]
 },
 "keep": "Outbound to a VNet = virtual network integration; private inbound = private endpoint. Private-only inbound = private endpoint + public access disabled. Filtering inbound by IP = access restrictions. Reaching an on-premises server without VPN = Hybrid Connections."
},
{
 "id": "D3-325",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are sizing new VMs. What should you choose or answer for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Reduce latency and CPU load for a VM with heavy network traffic:",
   "o": [
    "IP forwarding",
    "Accelerated networking",
    "A network security group",
    "A static public IP address"
   ],
   "a": 1
  },
  {
   "l": "Windows Server licenses with Software Assurance — option to select:",
   "o": [
    "Azure Spot instance at a fixed price",
    "Azure Hybrid Benefit (existing license)",
    "Accelerated networking on the interface",
    "Managed boot diagnostics"
   ],
   "a": 1
  },
  {
   "l": "Meaning of the letter a in Standard_D2as_v5:",
   "o": [
    "Accelerated networking",
    "An ARM VM",
    "An included Ultra disk",
    "An AMD processor"
   ],
   "a": 3
  },
  {
   "l": "Load balancer public IP that survives the loss of any zone:",
   "o": [
    "Dynamic",
    "Zone-redundant",
    "Basic SKU",
    "Zonal in zone 2"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Reduce latency and CPU load for a VM with heavy network traffic:</b></p><p><b>Accelerated networking</b> (SR-IOV) routes traffic directly through the physical card, bypassing the host's virtual switch: lower latency, higher throughput, less CPU load. It depends on the VM size.</p><p>IP forwarding is for appliances that route traffic. The other two options don't improve performance.</p><p><b>2. Windows Server licenses with Software Assurance — option to select:</b></p><p>The <b>Azure Hybrid Benefit</b> option (“Use existing Windows Server license”) bills the VM at a basic Linux VM rate, without the Windows license cost. It can also be enabled after creation.</p><p><b>3. Meaning of the letter a in Standard_D2as_v5:</b></p><p>In size names, <b>a</b> means an <b>AMD</b> processor, <b>s</b> Premium storage support, <b>d</b> a local temporary disk, <b>p</b> an ARM processor, <b>l</b> reduced memory. The number (2) is the vCPU count, and v5 the version.</p><p><b>4. Load balancer public IP that survives the loss of any zone:</b></p><p>A Standard public IP address can be <b>zone-redundant</b> (served by all zones), <b>zonal</b> (tied to one zone), or non-zonal. A zone-redundant address stays available if a zone goes down.</p><p>The Basic SKU is retired and doesn't support zones.</p>",
 "portal": {
  "path": [
   "Network interfaces",
   "vm-nic"
  ],
  "title": "vm-nic | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "*Accelerated networking",
    "Enabled"
   ]
  ]
 },
 "keep": "Faster network and less CPU = accelerated networking. Existing Windows licenses = Azure Hybrid Benefit. Size letters: a AMD, s Premium, d local disk, p ARM, l low memory. IP that survives a zone = Standard, zone-redundant."
},
{
 "id": "D3-326",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You automate deployment tasks with Azure CLI. Which command should you use for each task?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "See what a changed template will create, change, or delete in RG-Prod:",
   "o": [
    "az group export",
    "az deployment group what-if",
    "az bicep decompile",
    "az deployment group validate only"
   ],
   "a": 1
  },
  {
   "l": "Convert an ARM JSON template to Bicep:",
   "o": [
    "az bicep publish --file template.json",
    "az bicep build --file template.json",
    "az deployment group export --name deploy1",
    "az bicep decompile --file template.json"
   ],
   "a": 3
  },
  {
   "l": "Build an image from a Dockerfile in ACR1, with no local Docker:",
   "o": [
    "az acr build --registry ACR1 --image app:v1 .",
    "az container create --image app:v1 --file Dockerfile",
    "docker push ACR1/app:v1 without local Docker",
    "az acr import --name ACR1 --source ./Dockerfile"
   ],
   "a": 0
  },
  {
   "l": "Copy nginx:1.25 from Docker Hub to ACR2 without downloading it:",
   "o": [
    "az acr login",
    "az acr import",
    "az acr build",
    "az acr repository delete"
   ],
   "a": 1
  },
  {
   "l": "Deploy a ZIP file to WebApp22:",
   "o": [
    "az webapp deploy --src-path app.zip --type zip",
    "az acr build --file app.zip --registry ACR1",
    "az webapp create --zip app.zip --name webapp1",
    "az storage blob upload --file app.zip"
   ],
   "a": 0
  }
 ],
 "expl": "<p><b>1. See what a changed template will create, change, or delete in RG-Prod:</b></p><p><b>what-if</b> compares the template with the current state and shows the planned changes: creations, modifications (property by property), deletions (in Complete mode), without deploying anything.</p><p><b>validate</b> only checks that the template is valid and deployable. <b>decompile</b> converts JSON to Bicep. <b>export</b> produces a template from existing resources.</p><p><b>2. Convert an ARM JSON template to Bicep:</b></p><p><b>decompile</b> converts ARM JSON to Bicep (sometimes with warnings to fix). <b>build</b> does the reverse: it compiles a Bicep file to ARM JSON. <b>publish</b> publishes a module to a registry.</p><p><b>3. Build an image from a Dockerfile in ACR1, with no local Docker:</b></p><p><b>az acr build</b> (ACR Tasks) sends the build context to the registry, which builds the image in Azure and stores it. No local Docker is needed.</p><p>docker push requires Docker and an already built image. az acr import copies an image from another registry. az container create runs a container in ACI.</p><p><b>4. Copy nginx:1.25 from Docker Hub to ACR2 without downloading it:</b></p><p><b>az acr import</b> copies an image directly from a registry (Docker Hub, another ACR, etc.) to your registry, server side.</p><p>build builds an image from a Dockerfile. login authenticates the local Docker client. delete removes a repository.</p><p><b>5. Deploy a ZIP file to WebApp22:</b></p><p><code>az webapp deploy --resource-group RG1 --name WebApp22 --src-path app.zip --type zip</code> deploys the package (ZIP deploy). The older <code>az webapp deployment source config-zip</code> command does the same.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az deployment group what-if",
    "+ Create · ~ Modify · − Delete"
   ],
   [
    "az deployment group validate",
    "Validity only"
   ]
  ]
 },
 "keep": "See changes without deploying = what-if. JSON to Bicep = decompile. Building an image with no local Docker = az acr build. Copying an image from one registry to another = az acr import. ZIP deployment = az webapp deploy --type zip."
},
{
 "id": "D3-327",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are organizing App Service plans. What should you answer or choose in each situation?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Three apps in an S2 plan with 2 instances — resource usage:",
   "o": [
    "Each app is billed as a separate plan",
    "Only the first app runs on the 2 instances",
    "All three run on the same 2 instances",
    "Each app gets its own 2 instances within the plan"
   ],
   "a": 2
  },
  {
   "l": "A Windows app and a Linux app in the same plan:",
   "o": [
    "No, a plan is either Windows or Linux",
    "Yes, if both apps use .NET",
    "Yes, with no OS restriction at all",
    "Yes, if the plan is in the Premium tier"
   ],
   "a": 0
  },
  {
   "l": "One of six apps uses almost all of the plan's CPU:",
   "o": [
    "Enable ARR affinity on every app",
    "Move the resource-hungry app to its own plan",
    "Add a deployment slot to the plan",
    "Disable Always On on all the other apps in the plan"
   ],
   "a": 1
  },
  {
   "l": "Move WebApp2 to plan ASP2 — requirement:",
   "o": [
    "ASP2 must be in the Free tier",
    "WebApp2 must be deleted and recreated",
    "ASP2 must be in another subscription",
    "Same region and same resource group"
   ],
   "a": 3
  },
  {
   "l": "Slots and autoscale at the lowest cost — tier:",
   "o": [
    "Basic",
    "Free",
    "Shared",
    "Standard"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. Three apps in an S2 plan with 2 instances — resource usage:</b></p><p>An <b>App Service plan</b> defines a set of machines (size and number of instances). All apps in the plan run on <b>all</b> its instances and share CPU and memory. You pay for the plan, not each app.</p><p>If one app uses too much, move it to another plan.</p><p><b>2. A Windows app and a Linux app in the same plan:</b></p><p>The operating system is a property of the <b>plan</b>: a Windows plan only hosts Windows apps, and a Linux plan only Linux apps (code or containers).</p><p><b>3. One of six apps uses almost all of the plan's CPU:</b></p><p>All apps in a plan share the same instances. Isolating the resource-hungry app in a <b>dedicated plan</b> lets you scale it separately without penalizing the others.</p><p>Note: deployment slots also share the plan's resources.</p><p><b>4. Move WebApp2 to plan ASP2 — requirement:</b></p><p>You can change an app's plan (Change App Service plan) to a plan in the <b>same region</b> and the same “webspace” (in practice the same resource group and original region). Otherwise, you must clone or redeploy the app.</p><p><b>5. Slots and autoscale at the lowest cost — tier:</b></p><p><b>Deployment slots</b> and <b>autoscale</b> start at the <b>Standard</b> tier (5 slots). Premium offers 20.</p><p>Basic allows manual scaling (up to 3 instances) and custom domains with TLS, but no slots or autoscale. Free and Shared are for development and testing.</p>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP-S2"
  ],
  "title": "ASP-S2 | Apps",
  "menu": [
   "Overview",
   "*Apps"
  ],
  "rows": [
   [
    "Instances",
    "2"
   ],
   [
    "*Apps",
    "app1, app2, app3 (on both instances)"
   ]
  ]
 },
 "keep": "Apps in a plan share all its instances; you pay for the plan. One plan = one OS. Neighbor app too hungry = move it to its own plan. Changing plan = same region (and same deployment unit). Slots and autoscale = Standard minimum."
},
{
 "id": "D3-328",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are configuring web apps. Where or how should you set each item?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A different ApiUrl in dev and production, without changing code:",
   "o": [
    "In a resource lock",
    "In the shared App Service plan",
    "In the application settings",
    "In an Azure tag on each app"
   ],
   "a": 2
  },
  {
   "l": "Connection string whose secret doesn't appear in the configuration:",
   "o": [
    "Encrypt the secret with an account SAS",
    "Put the secret in the source code, obfuscated, then compile it",
    "Put the secret in a tag on the app",
    "A Key Vault reference and the managed identity"
   ],
   "a": 3
  },
  {
   "l": "Custom startup command for a Linux .NET app:",
   "o": [
    "General settings > Startup command",
    "In the app's App Service plan",
    "In an Azure tag on the app",
    "In Deployment Center only"
   ],
   "a": 0
  },
  {
   "l": "Containerized app from ACR5 — Publish option:",
   "o": [
    "Function",
    "Code",
    "Container",
    "Static Web App"
   ],
   "a": 2
  },
  {
   "l": "Each commit on GitHub main deployed to WebApp17:",
   "o": [
    "Application logs to GitHub",
    "Deployment Center with GitHub",
    "A scheduled backup from the repository",
    "A deployment slot linked to the repository"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. A different ApiUrl in dev and production, without changing code:</b></p><p><b>Application settings</b> (Configuration > Environment variables) are exposed to the app as environment variables and override values in the config file. They can reference a Key Vault secret (<code>@Microsoft.KeyVault(...)</code>).</p><p><b>2. Connection string whose secret doesn't appear in the configuration:</b></p><p>A <b>Key Vault reference</b> (<code>@Microsoft.KeyVault(SecretUri=...)</code>) in an app setting makes the value read from Key Vault at startup, with the app's <b>managed identity</b>, which must be able to read secrets.</p><p><b>3. Custom startup command for a Linux .NET app:</b></p><p>For Linux apps, the <b>startup command</b> is set in the configuration's general settings (or with <code>az webapp config set --startup-file</code>).</p><p><b>4. Containerized app from ACR5 — Publish option:</b></p><p>App Service can run a <b>container image</b> (Linux or Windows). You choose <b>Container</b>, then the image source (ACR, Docker Hub, other registry) and authentication (managed identity with AcrPull preferably).</p><p><b>5. Each commit on GitHub main deployed to WebApp17:</b></p><p><b>Deployment Center</b> configures continuous deployment from GitHub, Azure Repos, Bitbucket, or a local Git repository. With GitHub, it creates a GitHub Actions workflow that builds and deploys on each commit.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "WebApp1 | Environment variables",
  "menu": [
   "*Environment variables"
  ],
  "rows": [
   [
    "*ApiUrl",
    "https://api.contoso.com"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Per-environment configuration = application settings. Secret out of the configuration = Key Vault reference + managed identity. Linux startup command = General settings. Container image on App Service = Publish: Container. Continuous deployment = Deployment Center."
},
{
 "id": "D3-329",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You configure VMs after deployment. What should you use for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Install IIS and copy files on existing Windows VMs:",
   "o": [
    "The Custom Script extension",
    "An availability set",
    "Boot diagnostics",
    "The VM's serial console"
   ],
   "a": 0
  },
  {
   "l": "Packages and users created at a Linux VM's first boot:",
   "o": [
    "Run command on each VM",
    "cloud-init (custom data)",
    "Azure Advisor recommendations",
    "The VMAccess extension for Linux"
   ],
   "a": 1
  },
  {
   "l": "Desired state (roles, files, services) applied and drift reported:",
   "o": [
    "The VMs' boot diagnostics",
    "Each VM's serial console",
    "A configuration Template Spec",
    "Azure Machine Configuration"
   ],
   "a": 3
  },
  {
   "l": "The Custom Script extension fails on VM29 — output and error:",
   "o": [
    "In the extension status and the agent logs",
    "In Azure Advisor, Operational Excellence tab",
    "In the month's invoice, Extensions line",
    "In the scripts storage account's metrics"
   ],
   "a": 0
  },
  {
   "l": "Be warned 15 minutes before maintenance that reboots the host:",
   "o": [
    "The VM's serial console",
    "Boot diagnostics",
    "The Scheduled Events service",
    "A budget alert on the VM"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Install IIS and copy files on existing Windows VMs:</b></p><p>The <b>Custom Script extension</b> downloads and runs a script (from a storage account or GitHub) in the VM. It's deployed through the portal, PowerShell, CLI, or a template, and suits post-deployment configuration.</p><p>Boot diagnostics capture the boot screen. The serial console gives text access during a failure. An availability set configures nothing.</p><p><b>2. Packages and users created at a Linux VM's first boot:</b></p><p><b>cloud-init</b> is the standard first-boot configuration tool for Linux distributions. You pass the cloud-config file in the <b>custom data</b> when creating the VM.</p><p>VMAccess is for resetting access (password, SSH key). Run command runs a one-off script on an existing VM.</p><p><b>3. Desired state (roles, files, services) applied and drift reported:</b></p><p><b>Azure Machine Configuration</b> (formerly Azure Policy guest configuration) audits and applies DSC-based configurations inside Azure VMs and Arc servers, and reports compliance. It's gradually replacing Azure Automation State Configuration and the DSC extension.</p><p><b>4. The Custom Script extension fails on VM29 — output and error:</b></p><p>The portal shows the extension's <b>detailed status</b> (output and error). In the VM, logs are under <code>C:\\WindowsAzure\\Logs\\Plugins\\</code> (Windows) or <code>/var/log/azure/</code> (Linux). To rerun the same script, remove and reinstall the extension, or change a setting.</p><p><b>5. Be warned 15 minutes before maintenance that reboots the host:</b></p><p><b>Scheduled Events</b>, exposed by the Instance Metadata Service (IMDS, <code>169.254.169.254</code>), informs the VM of upcoming events (reboot, redeploy, Spot eviction) with advance notice. The application can prepare for them.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Extensions + applications",
  "menu": [
   "*Extensions + applications"
  ],
  "rows": [
   [
    "*Custom Script Extension",
    "install-iis.ps1 (storage account)"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Script after deployment = Custom Script extension. Linux configuration at first boot = cloud-init (custom data). Desired state in VMs = Azure Machine Configuration. Extension error = detailed status in the portal + agent logs. Maintenance notice inside the VM = Scheduled Events (IMDS)."
},
{
 "id": "D3-330",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You manage the day-to-day running of a VM fleet. You need to choose the feature that meets each requirement.</p><p>To answer, drag the appropriate values to the correct requirements. Each value may be used once, more than once, or not at all.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "srcLabel": "Features",
 "tgtHead": [
  "Requirement",
  "Solution"
 ],
 "srcs": [
  "Just-in-time (JIT) access",
  "A maintenance configuration",
  "Auto-shutdown with notification",
  "Azure Update Manager",
  "Reset password",
  "Azure Bastion",
  "Redeploy the VM"
 ],
 "tgts": [
  {
   "l": "RDP to VM34 for 3 hours on request, port 3389 closed otherwise",
   "a": 0
  },
  {
   "l": "Dedicated host platform updates in a 5-hour window on Sunday",
   "a": 1
  },
  {
   "l": "VMs stopped every evening at 7 PM, developers warned 30 minutes before",
   "a": 2
  },
  {
   "l": "Scheduled Windows and Linux patches on 200 VMs, with a compliance report",
   "a": 3
  },
  {
   "l": "Forgotten local admin password on VM6, not domain-joined",
   "a": 4
  }
 ],
 "expl": "<p><b>1. RDP to VM34 for 3 hours on request, port 3389 closed otherwise</b></p><p><b>JIT access</b> closes management ports with NSG (or Azure Firewall) rules and opens them, on an approved request, only for the requester's IP address and a limited time. It requires Defender for Servers. Azure Bastion is another solution that avoids any open port.</p><p><b>2. Dedicated host platform updates in a 5-hour window on Sunday</b></p><p><b>Maintenance Configurations</b> let you control platform updates for dedicated hosts and isolated VMs, or schedule guest patching, within a defined window.</p><p><b>3. VMs stopped every evening at 7 PM, developers warned 30 minutes before</b></p><p><b>Auto-shutdown</b> stops and deallocates the VM every day at the chosen time (with the time zone), and can send an email or webhook notification before shutdown.</p><p><b>4. Scheduled Windows and Linux patches on 200 VMs, with a compliance report</b></p><p><b>Azure Update Manager</b> assesses missing updates, deploys them on schedules (maintenance configurations), and shows compliance, for Azure VMs and Arc servers. It replaces Azure Automation Update Management.</p><p><b>5. Forgotten local admin password on VM6, not domain-joined</b></p><p><b>Reset password</b> (Help > Reset password) uses the <b>VMAccess</b> extension to set a new password, or reset the RDP configuration. For Linux, it can also reset an SSH key.</p><p>Redeploy moves the VM to another host. Restoring a backup is needlessly heavy. A snapshot doesn't change the password.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM34"
  ],
  "title": "VM34 | Connect",
  "menu": [
   "*Connect"
  ],
  "rows": [
   [
    "*Just-in-time access",
    "Request access · 3 hours · my IP"
   ]
  ],
  "btn": "Request access"
 },
 "keep": "RDP port opened on demand = JIT access (Defender for Servers). Controlling the maintenance window = maintenance configuration. Daily shutdown + notice = Auto-shutdown. Scheduled patching and compliance = Azure Update Manager. Forgotten local password = Reset password (VMAccess)."
},
{
 "id": "D3-331",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You protect and stop VMs. What should you do for each need?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Quickly save VM12's OS disk before a risky update:",
   "o": [
    "An incremental snapshot",
    "An Azure Compute Gallery",
    "An availability set",
    "A generalized managed image"
   ],
   "a": 0
  },
  {
   "l": "Stop paying for VM23's compute at weekends while keeping its disks:",
   "o": [
    "Restart the VM from the portal",
    "Shut it down from Windows (Shut down)",
    "Stop it from the portal (deallocated)",
    "Delete the VM and keep its disks"
   ],
   "a": 2
  },
  {
   "l": "An auditor downloads VM26's OS disk as a VHD:",
   "o": [
    "Enable the VM's boot diagnostics",
    "Generate an export URL (SAS) for the disk",
    "Use Azure File Sync on the VM",
    "Copy the C:\\Windows folder to a share"
   ],
   "a": 1
  },
  {
   "l": "Create a VM from a snapshot of VM27's OS disk:",
   "o": [
    "Attach the snapshot as a data disk",
    "Restore the snapshot to a storage account",
    "Create a disk from the snapshot, then the VM",
    "Pick the snapshot as a Marketplace image"
   ],
   "a": 2
  }
 ],
 "expl": "<p><b>1. Quickly save VM12's OS disk before a risky update:</b></p><p>A <b>snapshot</b> is a point-in-time copy of a managed disk. An <b>incremental</b> snapshot bills only the changes since the previous one. You can create a new disk from the snapshot if the update fails.</p><p>A generalized image is for creating new VMs (with Sysprep, which makes the original VM unusable). A gallery is for sharing images.</p><p><b>2. Stop paying for VM23's compute at weekends while keeping its disks:</b></p><p>Stopping from the <b>portal</b> (or with <code>az vm deallocate</code>) <b>deallocates</b> the VM: compute is no longer billed, disks remain (and are billed). A dynamic public IP address is released.</p><p>Shutting down from the OS leaves the VM in the <b>Stopped</b> (not deallocated) state: compute keeps being billed.</p><p><b>3. An auditor downloads VM26's OS disk as a VHD:</b></p><p>The <b>Export</b> option of a managed disk (or snapshot) generates a temporary <b>SAS URL</b> to download the VHD. The disk must not be attached to a running VM: deallocate the VM or export a snapshot.</p><p><b>4. Create a VM from a snapshot of VM27's OS disk:</b></p><p>You first create a <b>managed disk</b> from the snapshot, then a <b>VM from that disk</b> (Create VM option on the disk). The new VM is specialized: it keeps the original's computer name and accounts.</p>",
 "portal": {
  "path": [
   "Disks",
   "VM12-osdisk"
  ],
  "title": "Create snapshot",
  "rows": [
   [
    "*Snapshot type",
    "Incremental"
   ],
   [
    "Source",
    "VM12-osdisk"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Quick restore point for a disk = incremental snapshot. Stop from the portal = deallocate = compute not billed. Downloading a VHD = Export the disk (SAS URL), VM deallocated. VM from a snapshot = managed disk, then a VM on that disk."
},
{
 "id": "D3-332",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You change existing VMs and their cost. What should you do or choose in each case?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "The E8s_v5 size doesn't appear while VM1 is running:",
   "o": [
    "Delete VM1 and recreate it in the new size",
    "Add a data disk to VM1",
    "Move VM1 to another resource group",
    "Stop (deallocate) VM1, then resize"
   ],
   "a": 3
  },
  {
   "l": "Move VM20 from Subnet1 to Subnet2 in the same network:",
   "o": [
    "Move the VM to another resource group",
    "Recreate the VM in Subnet2",
    "Create a peering between Subnet1 and Subnet2",
    "Change the IP configuration's subnet"
   ],
   "a": 3
  },
  {
   "l": "Put a VM created without a zone into a zone:",
   "o": [
    "You just change the VM's Zone property",
    "You just restart the VM in the zone",
    "It's impossible, even by recreating the VM",
    "You must recreate the VM in the zone"
   ],
   "a": 3
  },
  {
   "l": "Interruptible jobs at the lowest cost; Azure can reclaim the VMs:",
   "o": [
    "VMs with a 3-year reservation",
    "Dedicated hosts shared between teams",
    "Spot VMs (Deallocate or Delete eviction)",
    "B-series VMs in burst mode"
   ],
   "a": 2
  },
  {
   "l": "Reserve capacity for a high-demand family, with no price commitment:",
   "o": [
    "An Azure reservation (1- or 3-year discount)",
    "Spot VMs in the region",
    "A proximity placement group",
    "An on-demand capacity reservation"
   ],
   "a": 3
  }
 ],
 "expl": "<p><b>1. The E8s_v5 size doesn't appear while VM1 is running:</b></p><p>A running VM can only take a size available on the <b>hardware cluster</b> it runs on. Once <b>stopped and deallocated</b>, it can be placed on another cluster: all sizes available in the region appear.</p><p>A resize always restarts the VM, even without deallocation.</p><p><b>2. Move VM20 from Subnet1 to Subnet2 in the same network:</b></p><p>Within the same virtual network, you can change the <b>subnet</b> of the network interface's IP configuration. The VM restarts and gets a new private IP address.</p><p>To change <b>virtual network</b>, however, you must recreate the VM (or use Resource Mover). Subnets aren't peered.</p><p><b>3. Put a VM created without a zone into a zone:</b></p><p>A VM's zone is set at creation. To go from a regional VM to a zonal VM, you <b>recreate</b> it in the desired zone (Azure Resource Mover offers this scenario, or you recreate from disk snapshots).</p><p><b>4. Interruptible jobs at the lowest cost; Azure can reclaim the VMs:</b></p><p><b>Spot VMs</b> use Azure's unused capacity at a large discount. Azure can <b>evict</b> them with 30 seconds' notice when it needs the capacity or the price exceeds your maximum. The eviction policy chooses Deallocate (disks kept) or Delete.</p><p>A 3-year reservation commits to a continuous workload. Dedicated hosts cost more.</p><p><b>5. Reserve capacity for a high-demand family, with no price commitment:</b></p><p>An <b>on-demand capacity reservation</b> guarantees that compute capacity will be available for a size and region (or zone), billed at the normal rate as long as it exists, with no term commitment.</p><p>An <b>Azure reservation</b> is a <b>discount</b> in exchange for a commitment, with no capacity guarantee (unless the priority option is chosen). Spot VMs are the opposite: no guarantee.</p>",
 "portal": {
  "path": [
   "Virtual machines",
   "VM1"
  ],
  "title": "VM1 | Size",
  "menu": [
   "Overview",
   "*Size"
  ],
  "rows": [
   [
    "Current size",
    "Standard_D2s_v5"
   ],
   [
    "*E8s_v5",
    "Visible after stopping (deallocating)"
   ]
  ],
  "btn": "Resize"
 },
 "keep": "Size missing from the list = deallocate the VM to see all sizes in the region. Changing subnet = possible; changing VNet = recreate. Making a VM zonal = recreating it. Interruptible and very cheap = Spot. Guaranteed capacity with no commitment = on-demand capacity reservation."
},
{
 "id": "D3-333",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You are designing hosting for several web apps. What should you put in place for each requirement?</p><p>To answer, select the appropriate options in the answer area.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "Stay available if the whole France Central region fails:",
   "o": [
    "A deployment slot in France South",
    "Two apps, two regions, Front Door",
    "A plan with 10 instances in France Central",
    "Zone redundancy of the plan in France Central"
   ],
   "a": 1
  },
  {
   "l": "Continuous background script on the app's instances:",
   "o": [
    "A dedicated deployment slot",
    "The app's health check",
    "An hourly scheduled backup of the app",
    "A continuous WebJob with Always On"
   ],
   "a": 3
  },
  {
   "l": "More memory per instance and a Premium v3 networking feature:",
   "o": [
    "Enable Always On on the app",
    "Scale the plan up to Premium v3",
    "Add instances to the plan (scale out)",
    "Create a deployment slot"
   ],
   "a": 1
  }
 ],
 "expl": "<p><b>1. Stay available if the whole France Central region fails:</b></p><p>To survive a <b>region</b> failure, you need the app in <b>two regions</b>, with a global service that routes traffic to the healthy region: <b>Azure Front Door</b> (HTTP, layer 7) or <b>Traffic Manager</b> (DNS).</p><p>Instances and zone redundancy stay within the region. A slot is in the same region as its app.</p><p><b>2. Continuous background script on the app's instances:</b></p><p><b>WebJobs</b> run scripts or programs in the background in the app's context, either <b>continuous</b> or <b>triggered</b> (scheduled). A continuous job requires <b>Always On</b> so it doesn't stop when the app unloads.</p><p><b>3. More memory per instance and a Premium v3 networking feature:</b></p><p><b>Scale up</b> changes the tier and instance size of the plan: more CPU, memory, and features. It takes seconds, without redeploying the app.</p><p>Adding instances doesn't increase each one's memory. The other two options add no tier feature.</p>",
 "portal": {
  "path": [
   "Front Door and CDN",
   "fd-app"
  ],
  "title": "fd-app | Origin groups",
  "menu": [
   "*Origin groups"
  ],
  "rows": [
   [
    "*Origin 1",
    "webapp-fc (France Central)"
   ],
   [
    "*Origin 2",
    "webapp-we (West Europe)"
   ]
  ]
 },
 "keep": "Region failure = two regions + Front Door or Traffic Manager. Continuous background work in App Service = continuous WebJob + Always On. More memory per instance or tier features = scale up."
}
);
