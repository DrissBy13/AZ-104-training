/* Domain 3: compute (batch C : D3-067 to D3-121) */
AZ.questions.push(
{
 "id": "D3-067",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Container Registry service tier for each need, at the lowest cost.</p><p>To answer, drag the appropriate tier to each need. Each tier may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tiers",
 "srcs": [
  "Basic",
  "Standard",
  "Premium"
 ],
 "tgtHead": [
  "Need",
  "Tier"
 ],
 "tgts": [
  {
   "l": "Learning registry for a developer, few images",
   "a": 0
  },
  {
   "l": "Replicate images to 3 regions",
   "a": 2
  },
  {
   "l": "Access the registry only through a private endpoint",
   "a": 2
  },
  {
   "l": "Production with more storage and throughput, in a single region, no private network",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Basic</b>: for learning and development, limited storage and throughput.</li><li><b>Standard</b>: same features, more storage and throughput, for most production.</li><li><b>Premium</b>: adds <b>geo-replication</b>, <b>private endpoints</b> (Private Link), firewall rules, content trust, and the highest throughput.</li></ul>",
 "portal": {
  "path": [
   "Container registries",
   "Create"
  ],
  "title": "Create container registry",
  "menu": [
   "*Basics",
   "Networking"
  ],
  "rows": [
   [
    "Basic",
    "Learning"
   ],
   [
    "Standard",
    "Production, one region"
   ],
   [
    "*Premium",
    "Geo-replication, Private Link"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "ACR: Basic / Standard / Premium (geo-replication and private network)."
},
{
 "id": "D3-068",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to build a container image from a Dockerfile and place it in the registry ACR1, without installing Docker on your computer.</p><p>Which command should you use?</p>",
 "opts": [
  "az acr build --registry ACR1 --image app:v1 .",
  "az container create --image app:v1",
  "docker push ACR1/app:v1",
  "az acr import --name ACR1"
 ],
 "ans": 0,
 "expl": "<p><b>az acr build</b> (ACR Tasks) sends the build context to the registry, which builds the image in Azure and stores it. No local Docker is needed.</p><p>docker push requires Docker and an already built image. az acr import copies an image from another registry. az container create runs a container in ACI.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az acr build --registry ACR1 --image app:v1 .",
    "Builds in Azure (ACR Tasks)"
   ]
  ]
 },
 "keep": "Building an image with no local Docker = az acr build."
},
{
 "id": "D3-069",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to copy the public image nginx:1.25 from Docker Hub into ACR2, without downloading it to your computer.</p><p>Which command should you use?</p>",
 "opts": [
  "az acr login",
  "az acr import",
  "az acr build",
  "az acr repository delete"
 ],
 "ans": 1,
 "expl": "<p><b>az acr import</b> copies an image directly from a registry (Docker Hub, another ACR, etc.) to your registry, server side.</p><p>build builds an image from a Dockerfile. login authenticates the local Docker client. delete removes a repository.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az acr import --name ACR2 --source docker.io/library/nginx:1.25",
    "Server-side copy"
   ]
  ]
 },
 "keep": "Copying an image from one registry to another = az acr import."
},
{
 "id": "D3-070",
 "dom": 3,
 "type": "single",
 "stem": "<p>Azure Container Instances must pull a private image from ACR3. You don't want to enable the registry's admin account.</p><p>Which method is recommended?</p>",
 "opts": [
  "The admin account with its password",
  "Make the registry public",
  "A managed identity (or a service principal) with the AcrPull role on ACR3",
  "Copy the image to a storage account"
 ],
 "ans": 2,
 "expl": "<p>You give the identity that pulls the image (the container group's managed identity, or a service principal) the <b>AcrPull</b> role on the registry. It's least privilege, with no shared password.</p><p>The <b>admin account</b> is a single account with all rights, discouraged in production. Standard and Premium also allow anonymous pull, but that would make the images available to everyone.</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR3"
  ],
  "title": "ACR3 | Access control (IAM)",
  "menu": [
   "*Access control (IAM)",
   "Access keys"
  ],
  "rows": [
   [
    "*Role",
    "AcrPull"
   ],
   [
    "Members",
    "Container group's managed identity"
   ],
   [
    "Admin user",
    "Disabled"
   ]
  ],
  "btn": "Review + assign"
 },
 "keep": "Pulling a private image = AcrPull on an identity; avoid the admin account."
},
{
 "id": "D3-071",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to assign the appropriate role for Azure Container Registry, following the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "srcs": [
  "AcrPull",
  "AcrPush",
  "Contributor",
  "Reader"
 ],
 "tgtHead": [
  "Need",
  "Role"
 ],
 "tgts": [
  {
   "l": "The deployment service downloads images",
   "a": 0
  },
  {
   "l": "The CI pipeline pushes new images",
   "a": 1
  },
  {
   "l": "The platform team creates and configures registries",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>AcrPull</b>: pull (download) images.</li><li><b>AcrPush</b>: pull and push images.</li><li><b>Contributor</b>: manage registries (creation, configuration, geo-replication).</li></ul><p><b>Reader</b> doesn't allow pulling images.</p>",
 "portal": {
  "path": [
   "Container registries",
   "ACR1"
  ],
  "title": "ACR1 | Access control (IAM)",
  "menu": [
   "*Access control (IAM)"
  ],
  "rows": [
   [
    "*AcrPull",
    "Deployment service"
   ],
   [
    "AcrPush",
    "CI pipeline"
   ],
   [
    "Contributor",
    "Platform team"
   ]
  ]
 },
 "keep": "AcrPull = pull; AcrPush = pull + push; Contributor = manage the registry."
},
{
 "id": "D3-072",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to run a nightly processing container that lasts 20 minutes, without managing a server or an orchestrator, and pay only while it runs.</p><p>Which service should you use?</p>",
 "opts": [
  "A virtual machine scale set",
  "A VM with Docker running all the time",
  "App Service Premium plan",
  "Azure Container Instances with the OnFailure or Never restart policy"
 ],
 "ans": 3,
 "expl": "<p><b>Azure Container Instances</b> starts a container in seconds and bills CPU and memory per second. With the <b>OnFailure</b> or <b>Never</b> restart policy, the container stops at the end of processing and so does billing.</p><p>With <b>Always</b> (default), ACI would restart the container endlessly. A VM or an App Service plan would cost all the time.</p>",
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
 "keep": "One-off containerized task = ACI, OnFailure or Never restart."
},
{
 "id": "D3-073",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You deploy containers in Azure Container Instances.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Restart policy of a web server that must always run:",
   "o": [
    "Never",
    "Always",
    "OnFailure"
   ],
   "a": 1
  },
  {
   "l": "Policy of a job that must be restarted only if it fails:",
   "o": [
    "Always",
    "Never",
    "OnFailure"
   ],
   "a": 2
  },
  {
   "l": "Policy of a test that must run only once, whatever the result:",
   "o": [
    "OnFailure",
    "Always",
    "Never"
   ],
   "a": 2
  }
 ],
 "expl": "<ul><li><b>Always</b> (default): always restarts the container when it stops.</li><li><b>OnFailure</b>: restarts only if the process ends with an error (exit code other than 0).</li><li><b>Never</b>: never restarts.</li></ul>",
 "portal": {
  "path": [
   "Container instances",
   "Create"
  ],
  "title": "Advanced",
  "menu": [
   "*Advanced"
  ],
  "rows": [
   [
    "*Always",
    "Always restart"
   ],
   [
    "OnFailure",
    "Only on error"
   ],
   [
    "Never",
    "Never"
   ]
  ]
 },
 "keep": "Always (server), OnFailure (job), Never (single run)."
},
{
 "id": "D3-074",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web application and a logging container must run together in Azure Container Instances, share the same IP address and lifecycle, and communicate over localhost.</p><p>What should you deploy?</p>",
 "opts": [
  "A Linux container group containing both containers",
  "An availability set",
  "Two separate container groups",
  "Two container registries"
 ],
 "ans": 0,
 "expl": "<p>A <b>container group</b> groups containers scheduled on the same host, which share the lifecycle, network (IP address, ports, localhost), and volumes. It's the “sidecar” pattern. Multi-container groups are only supported for <b>Linux</b>.</p><p>Two separate groups would have two IP addresses.</p>",
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
 "keep": "Containers sharing IP and lifecycle = one container group (multi-container: Linux)."
},
{
 "id": "D3-075",
 "dom": 3,
 "type": "single",
 "stem": "<p>A container in Azure Container Instances must keep its files after a restart.</p><p>What should you mount as a volume?</p>",
 "opts": [
  "A Premium SSD managed disk",
  "An Azure Files share",
  "The host's temporary disk",
  "A blob container"
 ],
 "ans": 1,
 "expl": "<p>An ACI container's file system is <b>ephemeral</b>. To keep data, you mount an <b>Azure Files share</b> as a volume (with the account name, share name, and key). ACI doesn't support mounting managed disks or blob containers as volumes.</p><p>emptyDir volumes share data between containers in a group, but disappear with the group.</p>",
 "portal": {
  "path": [
   "Container instances",
   "Create"
  ],
  "title": "Volumes",
  "rows": [
   [
    "*Volume type",
    "Azure file share"
   ],
   [
    "Mount path",
    "/mnt/data"
   ]
  ]
 },
 "keep": "Persistence in ACI = Azure Files volume."
},
{
 "id": "D3-076",
 "dom": 3,
 "type": "single",
 "stem": "<p>An ACI container group must be reachable on the internet by a stable name, for example <code>app1.francecentral.azurecontainer.io</code>.</p><p>What should you configure?</p>",
 "opts": [
  "A private DNS zone",
  "A private endpoint",
  "A public IP address with a DNS name label",
  "A VPN gateway"
 ],
 "ans": 2,
 "expl": "<p>When creating the container group, you choose a <b>public IP address</b> and a <b>DNS name label</b>, which gives a name like <code>&lt;label&gt;.&lt;region&gt;.azurecontainer.io</code>. The IP address may change on restart, but the name stays.</p>",
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
 "keep": "Stable name for ACI = DNS name label."
},
{
 "id": "D3-077",
 "dom": 3,
 "type": "single",
 "stem": "<p>An ACI container group must access a database that only has a private IP address in VNet1, with no internet exposure.</p><p>What should you do?</p>",
 "opts": [
  "Enable registry geo-replication",
  "Give the container group a public IP address",
  "Use the Never restart policy",
  "Deploy the container group in a delegated subnet of VNet1"
 ],
 "ans": 3,
 "expl": "<p>ACI can be deployed <b>in a virtual network</b>, in a subnet delegated to <code>Microsoft.ContainerInstance/containerGroups</code>. The group gets a private IP address and communicates with the other resources on the network.</p>",
 "portal": {
  "path": [
   "Container instances",
   "Create"
  ],
  "title": "Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Networking type",
    "Private"
   ],
   [
    "Subnet",
    "VNet1/aci-subnet (delegated)"
   ]
  ]
 },
 "keep": "ACI in a VNet = subnet delegated to Microsoft.ContainerInstance."
},
{
 "id": "D3-078",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy a container in ACI with 2 vCPUs and 4 GB of memory. A week later, it runs out of memory.</p><p>How do you increase the memory?</p>",
 "opts": [
  "Redeploy the container group with a higher resource request",
  "Add a data disk",
  "Enable ACI horizontal autoscale",
  "Change the restart policy"
 ],
 "ans": 0,
 "expl": "<p>An ACI container's resources (CPU and memory) are fixed in its definition. To change them, you <b>redeploy</b> the container group with the new values (within the region's limits).</p><p>ACI has no built-in autoscale: for that, choose Azure Container Apps instead.</p>",
 "portal": {
  "path": [
   "Container instances",
   "aci-processing"
  ],
  "title": "aci-processing | Properties",
  "menu": [
   "*Properties"
  ],
  "rows": [
   [
    "*Memory (GiB)",
    "4 → 8 (redeploy)"
   ],
   [
    "Autoscale",
    "Not available in ACI"
   ]
  ]
 },
 "keep": "Changing ACI CPU/memory = redeploy the group."
},
{
 "id": "D3-079",
 "dom": 3,
 "type": "single",
 "stem": "<p>A containerized API must scale automatically based on the number of HTTP requests, and scale down to <b>zero</b> instances at night, without managing a cluster.</p><p>Which service should you use?</p>",
 "opts": [
  "Azure Container Registry",
  "Azure Container Apps",
  "Azure Container Instances",
  "A virtual machine scale set"
 ],
 "ans": 1,
 "expl": "<p><b>Azure Container Apps</b> is a serverless service for containers. It handles autoscale (based on KEDA) according to HTTP traffic, queues, or other events, down to <b>zero</b> instances. It also offers HTTPS ingress, revisions, and traffic splitting.</p><p>ACI has no autoscale. A VMSS requires managing VMs. ACR stores images.</p>",
 "portal": {
  "path": [
   "Container Apps",
   "orders-api"
  ],
  "title": "orders-api | Scale",
  "menu": [
   "Overview",
   "*Scale",
   "Revisions"
  ],
  "rows": [
   [
    "*Min replicas",
    "0"
   ],
   [
    "Max replicas",
    "10"
   ],
   [
    "Rule",
    "HTTP · 50 concurrent requests"
   ]
  ],
  "btn": "Create"
 },
 "keep": "Serverless, autoscale down to zero = Azure Container Apps."
},
{
 "id": "D3-080",
 "dom": 3,
 "type": "single",
 "stem": "<p>You deploy a new version of your application in Azure Container Apps. You want to send 10% of traffic to the new version and 90% to the old one.</p><p>What should you configure?</p>",
 "opts": [
  "Two Container Apps environments",
  "A restart policy",
  "Multiple revision mode with traffic splitting between revisions",
  "Two container registries"
 ],
 "ans": 2,
 "expl": "<p>Each deployment of a new configuration creates a <b>revision</b>. In <b>multiple revision</b> mode, several revisions stay active and you split incoming traffic in percentages between them (progressive rollout, A/B testing).</p>",
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
 "keep": "Splitting traffic between versions = multiple revision mode."
},
{
 "id": "D3-081",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You configure scaling for an Azure Container Apps application.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "To pay nothing when there are no requests, the minimum number of replicas must be:",
   "o": [
    "0",
    "1",
    "2"
   ],
   "a": 0
  },
  {
   "l": "To add replicas when an Azure Storage queue holds many messages, the rule must be of type:",
   "o": [
    "TCP",
    "Custom (Azure queue)",
    "HTTP"
   ],
   "a": 1
  },
  {
   "l": "To avoid any cold start delay, the minimum number of replicas must be:",
   "o": [
    "0",
    "1 or more",
    "There's no minimum"
   ],
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Minimum 0</b>: the application scales to zero replicas when idle; it restarts on the first request (cold start).</li><li>Scale rules can be <b>HTTP</b>, <b>TCP</b>, or <b>custom</b> (KEDA scalers: Azure queue, Service Bus, etc.).</li><li><b>Minimum 1 or more</b>: at least one replica stays running, with no cold start delay.</li></ul>",
 "portal": {
  "path": [
   "Container Apps",
   "app1"
  ],
  "title": "app1 | Scale",
  "menu": [
   "*Scale"
  ],
  "rows": [
   [
    "*Min replicas",
    "0 (no cost when idle) or 1+ (no cold start)"
   ],
   [
    "Rule",
    "Custom: azure-queue"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Min 0 = no idle cost but cold start; HTTP, TCP, or KEDA rules."
},
{
 "id": "D3-082",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate container service for each need.</p><p>To answer, drag the appropriate service to each need. Each service may be used once, more than once, or not at all.</p>",
 "srcLabel": "Services",
 "srcs": [
  "Azure Container Registry",
  "Azure Container Instances",
  "Azure Container Apps"
 ],
 "tgtHead": [
  "Need",
  "Service"
 ],
 "tgts": [
  {
   "l": "Store and version private container images",
   "a": 0
  },
  {
   "l": "Quickly run an isolated container for a one-off task",
   "a": 1
  },
  {
   "l": "Host microservices with autoscale and revisions",
   "a": 2
  }
 ],
 "expl": "<ul><li><b>ACR</b>: private image registry.</li><li><b>ACI</b>: a container (or a small group) on demand, with no orchestration or autoscale.</li><li><b>Container Apps</b>: serverless platform for containerized applications and microservices, with autoscale, HTTPS ingress, and revisions.</li></ul>",
 "portal": {
  "path": [
   "Home"
  ],
  "title": "Container services",
  "rows": [
   [
    "*ACR",
    "Image registry"
   ],
   [
    "ACI",
    "On-demand container"
   ],
   [
    "Container Apps",
    "Serverless microservices"
   ]
  ]
 },
 "keep": "ACR stores, ACI simply runs, Container Apps orchestrates serverlessly."
},
{
 "id": "D3-083",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to create a web app with deployment slots and autoscale, at the lowest cost.</p><p>Which App Service plan tier should you choose?</p>",
 "opts": [
  "Basic",
  "Free",
  "Shared",
  "Standard"
 ],
 "ans": 3,
 "expl": "<p><b>Deployment slots</b> and <b>autoscale</b> start at the <b>Standard</b> tier (5 slots). Premium offers 20.</p><p>Basic allows manual scaling (up to 3 instances) and custom domains with TLS, but no slots or autoscale. Free and Shared are for development and testing.</p>",
 "portal": {
  "path": [
   "App Service plans",
   "Create"
  ],
  "title": "Pricing plan",
  "rows": [
   [
    "Basic B1",
    "Manual scale, TLS"
   ],
   [
    "*Standard S1",
    "Slots (5) + autoscale"
   ],
   [
    "Premium",
    "20 slots"
   ]
  ]
 },
 "keep": "Slots and autoscale = Standard minimum."
},
{
 "id": "D3-084",
 "dom": 3,
 "type": "hot",
 "stem": "<p>You need to choose the minimum App Service plan tier for each feature.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "Custom domain with a TLS certificate (SNI binding):",
   "o": [
    "Premium",
    "Basic",
    "Free"
   ],
   "a": 1
  },
  {
   "l": "Deployment slots:",
   "o": [
    "Premium",
    "Basic",
    "Standard"
   ],
   "a": 2
  },
  {
   "l": "Isolated, dedicated environment in your virtual network (App Service Environment):",
   "o": [
    "Isolated v2",
    "Premium v3",
    "Standard"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Basic</b>: the first tier to support TLS bindings for a custom domain.</li><li><b>Standard</b>: deployment slots and autoscale.</li><li><b>Isolated v2</b>: used by an App Service Environment v3, deployed in your virtual network, on dedicated hardware.</li></ul>",
 "portal": {
  "path": [
   "App Service plans",
   "Create"
  ],
  "title": "Pricing plan",
  "rows": [
   [
    "*Basic",
    "Domain + TLS"
   ],
   [
    "*Standard",
    "Slots, autoscale"
   ],
   [
    "*Isolated v2",
    "App Service Environment"
   ]
  ]
 },
 "keep": "Basic = TLS; Standard = slots; Isolated = dedicated environment."
},
{
 "id": "D3-085",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app in a Standard S1 plan becomes slow during the day, when the number of users triples. At night, a single instance is enough.</p><p>What should you configure?</p>",
 "opts": [
  "Plan autoscale out (horizontal), based on CPU or a schedule",
  "A permanent move to the Premium tier (scale up)",
  "A scheduled backup",
  "An extra deployment slot"
 ],
 "ans": 0,
 "expl": "<p><b>Scale out</b> adds instances to the plan when load rises, and removes them when it drops. You can base it on a metric (CPU, memory, HTTP queue length) or a <b>schedule</b> (day/night).</p><p><b>Scale up</b> changes the plan's size or tier: it would raise the cost permanently, including at night.</p>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP1"
  ],
  "title": "ASP1 | Scale out (App Service plan)",
  "menu": [
   "Scale up (App Service plan)",
   "*Scale out (App Service plan)"
  ],
  "rows": [
   [
    "*Autoscale",
    "Custom"
   ],
   [
    "Day profile",
    "2 to 6 instances"
   ],
   [
    "Night profile",
    "1 instance"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Variable load = autoscale out; scale up = bigger instances."
},
{
 "id": "D3-086",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app needs more memory per instance, and a network feature available only in the Premium v3 tier.</p><p>What should you do?</p>",
 "opts": [
  "Enable Always On",
  "Scale up the App Service plan to Premium v3",
  "Add instances (scale out)",
  "Create a deployment slot"
 ],
 "ans": 1,
 "expl": "<p><b>Scale up</b> changes the tier and instance size of the plan: more CPU, memory, and features. It takes seconds, without redeploying the app.</p><p>Adding instances doesn't increase each one's memory. The other two options add no tier feature.</p>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP1"
  ],
  "title": "ASP1 | Scale up (App Service plan)",
  "menu": [
   "*Scale up (App Service plan)",
   "Scale out (App Service plan)"
  ],
  "rows": [
   [
    "*Tier",
    "Premium v3 P1v3"
   ]
  ],
  "btn": "Select"
 },
 "keep": "More memory per instance or tier features = scale up."
},
{
 "id": "D3-087",
 "dom": 3,
 "type": "single",
 "stem": "<p>You have three web apps in the same App Service Standard S2 plan with 2 instances.</p><p>How do these apps use resources?</p>",
 "opts": [
  "Each app is billed as a separate plan",
  "Only the first app runs on the 2 instances",
  "The three apps run on the same 2 instances and share their resources",
  "Each app has its own 2 instances"
 ],
 "ans": 2,
 "expl": "<p>An <b>App Service plan</b> defines a set of machines (size and number of instances). All apps in the plan run on <b>all</b> its instances and share CPU and memory. You pay for the plan, not each app.</p><p>If one app uses too much, move it to another plan.</p>",
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
 "keep": "Apps in a plan share all its instances; you pay for the plan."
},
{
 "id": "D3-088",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want to move the web app WebApp2 to another App Service plan, ASP2.</p><p>Which condition must be met?</p>",
 "opts": [
  "ASP2 must be in the Free tier",
  "WebApp2 must be deleted and recreated",
  "ASP2 must be in another subscription",
  "ASP2 must be in the same region and the same resource group (same deployment unit) as the current plan"
 ],
 "ans": 3,
 "expl": "<p>You can change an app's plan (Change App Service plan) to a plan in the <b>same region</b> and the same “webspace” (in practice the same resource group and original region). Otherwise, you must clone or redeploy the app.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp2"
  ],
  "title": "WebApp2 | Change App Service plan",
  "rows": [
   [
    "*Available plans",
    "Same region and same deployment unit"
   ],
   [
    "ASP2",
    "France Central · RG1"
   ]
  ],
  "btn": "OK"
 },
 "keep": "Changing plan = same region (and same deployment unit)."
},
{
 "id": "D3-089",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to deploy a new version of WebApp3 with no downtime, test it on a separate URL, then put it in production.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
 "acts": [
  "Create a deployment slot named staging",
  "Deploy the new version to staging and test it",
  "Swap staging with the production slot",
  "Stop the production slot",
  "Delete and recreate WebApp3"
 ],
 "seq": [
  0,
  1,
  2
 ],
 "expl": "<p>You create the staging <b>slot</b> (Standard plan or higher), <b>deploy</b> to it and test at <code>webapp3-staging.azurewebsites.net</code>, then <b>swap</b>: staging becomes production with no downtime, because the instances are already warmed up. If there's a problem, swap again to roll back.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp3"
  ],
  "title": "WebApp3 | Deployment slots",
  "menu": [
   "*Deployment slots"
  ],
  "rows": [
   [
    "production",
    "100%"
   ],
   [
    "*staging",
    "webapp3-staging.azurewebsites.net"
   ]
  ],
  "btn": "Swap"
 },
 "keep": "Zero-downtime deployment: slot, test, swap (and roll back by swapping)."
},
{
 "id": "D3-090",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp4 has the production and staging slots. The database connection string must <b>stay</b> attached to each slot (test database for staging, production database for production) during a swap.</p><p>What should you configure?</p>",
 "opts": [
  "Check “Deployment slot setting” on the connection string in each slot",
  "Disable auto swap",
  "Use the same connection string in both slots",
  "Create a third slot"
 ],
 "ans": 0,
 "expl": "<p>A setting marked <b>Deployment slot setting</b> (sticky) stays attached to the slot: it doesn't follow the code during a swap. Unchecked settings are swapped with the code.</p>",
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
 "keep": "Setting that stays on the slot = deployment slot setting (sticky)."
},
{
 "id": "D3-091",
 "dom": 3,
 "type": "single",
 "stem": "<p>Every time new code is pushed to the staging slot of WebApp5, you want it swapped to production automatically after warm-up.</p><p>What should you enable?</p>",
 "opts": [
  "Autoscale",
  "Auto swap on the staging slot",
  "100% traffic routing",
  "Always On on production"
 ],
 "ans": 1,
 "expl": "<p><b>Auto swap</b>, enabled on the source slot (staging), swaps with the target slot as soon as deployment finishes and the app is warmed up.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp5",
   "staging"
  ],
  "title": "staging | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*Auto swap",
    "On · to production"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Swapping automatically after deployment = auto swap."
},
{
 "id": "D3-092",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want to send 20% of production users to the beta slot of WebApp6, without swapping, to test a new feature.</p><p>What should you configure?</p>",
 "opts": [
  "A swap with preview",
  "A load balancer",
  "Traffic routing (Testing in production) with 20% to beta",
  "A second App Service plan"
 ],
 "ans": 2,
 "expl": "<p>Slot <b>traffic routing</b> (Testing in production) sends a percentage of production requests to another slot. A cookie keeps each user on the same slot for their session.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp6"
  ],
  "title": "WebApp6 | Deployment slots",
  "menu": [
   "*Deployment slots"
  ],
  "rows": [
   [
    "production",
    "80%"
   ],
   [
    "*beta",
    "20%"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Percentage of users to a slot = traffic routing."
},
{
 "id": "D3-093",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to associate the custom domain www.contoso.com with WebApp7.</p><p>Which DNS records should you create at your DNS host?</p>",
 "opts": [
  "A PTR record",
  "An SRV record",
  "An MX record to webapp7.azurewebsites.net",
  "A CNAME www to webapp7.azurewebsites.net, and a TXT asuid.www with the verification ID"
 ],
 "ans": 3,
 "expl": "<p>For a subdomain like www, you create a <b>CNAME</b> to <code>webapp7.azurewebsites.net</code>, and a <b>TXT</b> <code>asuid.www</code> containing the domain verification ID (shown in the portal), which proves you own the domain.</p><p>For the root domain (contoso.com), you use an <b>A</b> record to the app's IP address, plus the <code>asuid</code> TXT.</p>",
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
 "keep": "Subdomain = CNAME + asuid TXT; root = A + asuid TXT."
},
{
 "id": "D3-094",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp8 is in a <b>Free (F1)</b> plan. You want to add the domain www.contoso.com, with HTTPS.</p><p>What should you do first?</p>",
 "opts": [
  "Move the plan to the Basic tier or higher",
  "Create an MX record",
  "Create a deployment slot",
  "Enable Always On"
 ],
 "ans": 0,
 "expl": "<p>The <b>Free</b> tier doesn't support custom domains. The <b>Shared</b> tier accepts them without TLS. From <b>Basic</b> on, you can add a custom domain with a TLS certificate (including a free App Service managed certificate).</p>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP-F1"
  ],
  "title": "Scale up (App Service plan)",
  "menu": [
   "*Scale up (App Service plan)"
  ],
  "rows": [
   [
    "Free",
    "No custom domain"
   ],
   [
    "*Basic B1",
    "Domain + TLS"
   ]
  ],
  "btn": "Select"
 },
 "keep": "Custom domain + HTTPS = Basic minimum."
},
{
 "id": "D3-095",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want a free TLS certificate, renewed automatically, for www.contoso.com on WebApp9.</p><p>What should you use?</p>",
 "opts": [
  "None: HTTPS is impossible on a custom domain",
  "An App Service managed certificate",
  "A Key Vault certificate generated manually each year",
  "A self-signed certificate"
 ],
 "ans": 1,
 "expl": "<p>The <b>App Service managed certificate</b> is free and renewed automatically for an already validated custom domain. It doesn't support wildcard domains (*.contoso.com) and can't be exported. For that, buy a certificate or import one from Key Vault.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp9"
  ],
  "title": "WebApp9 | Certificates",
  "menu": [
   "*Certificates"
  ],
  "rows": [
   [
    "*App Service managed certificate",
    "www.contoso.com · free, renewed"
   ],
   [
    "Limits",
    "No wildcard, no export"
   ]
  ],
  "btn": "+ Add certificate"
 },
 "keep": "Free, auto-renewed TLS = App Service managed certificate."
},
{
 "id": "D3-096",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp10 must call an API hosted on a VM that only has a private IP address in VNet2.</p><p>What should you configure on WebApp10?</p>",
 "opts": [
  "A custom domain",
  "A private endpoint for WebApp10",
  "Virtual network integration with a subnet of VNet2",
  "Access restrictions"
 ],
 "ans": 2,
 "expl": "<p><b>Virtual network integration</b> concerns <b>outbound</b> traffic: the app can reach resources in the virtual network (and, through it, whatever is peered or connected by VPN). It uses a dedicated delegated subnet.</p><p>A <b>private endpoint</b> concerns <b>inbound</b> traffic: it gives the app a private address. Access restrictions also filter inbound traffic.</p>",
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
 "keep": "Outbound to a VNet = virtual network integration; private inbound = private endpoint."
},
{
 "id": "D3-097",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp11 must only be reachable from VNet3 and the on-premises site connected by VPN, never from the internet.</p><p>What should you configure?</p>",
 "opts": [
  "A deployment slot",
  "A static public IP address",
  "Virtual network integration only",
  "A private endpoint for WebApp11 in VNet3, and disable public access"
 ],
 "ans": 3,
 "expl": "<p>The <b>private endpoint</b> gives the app a private IP address in VNet3: <b>inbound</b> traffic arrives through the private network (and through the VPN from on-premises). You then disable <b>public network access</b>.</p><p>Virtual network integration only handles outbound traffic.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp11"
  ],
  "title": "WebApp11 | Networking",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Private endpoints",
    "1 (VNet3)"
   ],
   [
    "*Public network access",
    "Disabled"
   ]
  ]
 },
 "keep": "Private-only inbound = private endpoint + public access disabled."
},
{
 "id": "D3-098",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp12 must accept only traffic from your office's public IP range, 203.0.113.0/24, without changing the network architecture.</p><p>What should you configure?</p>",
 "opts": [
  "Access restrictions with an Allow rule for 203.0.113.0/24",
  "A service endpoint",
  "A storage account firewall",
  "A network security group associated with the app"
 ],
 "ans": 0,
 "expl": "<p>App Service <b>access restrictions</b> are an ordered list of Allow/Deny rules by IP address, service tag, or subnet (with a service endpoint). As soon as an Allow rule exists, everything else is denied.</p><p>You can't associate an NSG directly with a multi-tenant web app.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp12"
  ],
  "title": "WebApp12 | Access restrictions",
  "menu": [
   "*Networking"
  ],
  "rows": [
   [
    "*Allow",
    "203.0.113.0/24 · priority 100"
   ],
   [
    "Deny all",
    "Implicit"
   ]
  ],
  "btn": "+ Add"
 },
 "keep": "Filtering inbound by IP = access restrictions."
},
{
 "id": "D3-099",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp13, in a Basic plan, goes idle after a few minutes without traffic. The first request is then very slow.</p><p>What should you enable?</p>",
 "opts": [
  "Traffic routing",
  "Always On",
  "Application logs",
  "ARR affinity"
 ],
 "ans": 1,
 "expl": "<p><b>Always On</b> keeps the app loaded by regularly sending a request, which avoids unloading after inactivity. It's available from the Basic tier, and required for continuous WebJobs.</p><p><b>ARR affinity</b> always sends a user to the same instance (sticky sessions).</p>",
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
 "keep": "Avoiding idle unload = Always On (Basic and above)."
},
{
 "id": "D3-100",
 "dom": 3,
 "type": "single",
 "stem": "<p>WebApp14 runs on 4 instances. A stateless application performs better if requests are spread evenly, even for the same user.</p><p>What should you disable?</p>",
 "opts": [
  "HTTPS only",
  "Health check",
  "ARR affinity (sticky sessions)",
  "Always On"
 ],
 "ans": 2,
 "expl": "<p><b>ARR affinity</b> sets a cookie that sends each user back to the same instance. For a <b>stateless</b> app, disabling it spreads load better across instances.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp14"
  ],
  "title": "WebApp14 | Configuration",
  "menu": [
   "*Configuration"
  ],
  "rows": [
   [
    "*ARR affinity",
    "Off"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Stateless app = disable ARR affinity."
},
{
 "id": "D3-101",
 "dom": 3,
 "type": "single",
 "stem": "<p>An instance of WebApp15 sometimes becomes unhealthy without restarting. You want the load balancer to stop sending it traffic, then replace it if it stays unhealthy.</p><p>What should you configure?</p>",
 "opts": [
  "Web server logs",
  "A budget alert",
  "Always On",
  "Health check with a path such as /health"
 ],
 "ans": 3,
 "expl": "<p><b>Health check</b> regularly pings a path in the app on each instance. An instance that responds poorly is removed from rotation, then replaced if it stays unhealthy. You need at least two instances to benefit.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp15"
  ],
  "title": "WebApp15 | Health check",
  "menu": [
   "*Health check"
  ],
  "rows": [
   [
    "*Path",
    "/health"
   ],
   [
    "Load balancing threshold",
    "10 minutes"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Removing an unhealthy instance = health check (2 instances minimum)."
},
{
 "id": "D3-102",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to configure custom backups of WebApp16 (files and configuration) to a storage account, on a schedule.</p><p>What should you use?</p>",
 "opts": [
  "The App Service Backups feature, with a target storage container",
  "Azure Backup with a Recovery Services vault for VMs",
  "A managed disk snapshot",
  "Azure Site Recovery"
 ],
 "ans": 0,
 "expl": "<p>App Service has its own <b>backup</b> feature: built-in automatic backups (Basic tier and above), and scheduled <b>custom</b> backups to a storage container, with a linked database if needed.</p><p>Azure Backup for VMs, snapshots, and Site Recovery don't apply to App Service apps.</p>",
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
 "keep": "Backing up a web app = App Service Backups."
},
{
 "id": "D3-103",
 "dom": 3,
 "type": "single",
 "stem": "<p>You want every commit to the main branch of a GitHub repository to be deployed automatically to WebApp17.</p><p>What should you configure?</p>",
 "opts": [
  "Application logs",
  "Deployment Center with GitHub as the source (GitHub Actions)",
  "A scheduled backup",
  "A deployment slot"
 ],
 "ans": 1,
 "expl": "<p><b>Deployment Center</b> configures continuous deployment from GitHub, Azure Repos, Bitbucket, or a local Git repository. With GitHub, it creates a GitHub Actions workflow that builds and deploys on each commit.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp17"
  ],
  "title": "WebApp17 | Deployment Center",
  "menu": [
   "*Deployment Center"
  ],
  "rows": [
   [
    "*Source",
    "GitHub"
   ],
   [
    "Branch",
    "main"
   ],
   [
    "Build provider",
    "GitHub Actions"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Continuous deployment = Deployment Center."
},
{
 "id": "D3-104",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app must read an ApiUrl setting that differs between development and production, without changing the code.</p><p>Where should you define this setting?</p>",
 "opts": [
  "In a resource lock",
  "In the App Service plan",
  "In each app's application settings (environment variables)",
  "In an Azure tag"
 ],
 "ans": 2,
 "expl": "<p><b>Application settings</b> (Configuration > Environment variables) are exposed to the app as environment variables and override values in the config file. They can reference a Key Vault secret (<code>@Microsoft.KeyVault(...)</code>).</p>",
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
 "keep": "Per-environment configuration = application settings."
},
{
 "id": "D3-105",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app reads a connection string. You don't want the secret to appear in the App Service configuration.</p><p>What should you do?</p>",
 "opts": [
  "Encrypt the secret with a SAS",
  "Put the secret in the source code",
  "Put the secret in a tag",
  "Store the secret in Key Vault and use a Key Vault reference in the setting, with the app's managed identity"
 ],
 "ans": 3,
 "expl": "<p>A <b>Key Vault reference</b> (<code>@Microsoft.KeyVault(SecretUri=...)</code>) in an app setting makes the value read from Key Vault at startup, with the app's <b>managed identity</b>, which must be able to read secrets.</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp1"
  ],
  "title": "Environment variables",
  "rows": [
   [
    "*SqlConnection",
    "@Microsoft.KeyVault(SecretUri=https://kv1.vault.azure.net/secrets/sql)"
   ],
   [
    "Identity",
    "System assigned, Key Vault Secrets User"
   ]
  ],
  "btn": "Apply"
 },
 "keep": "Secret out of the configuration = Key Vault reference + managed identity."
},
{
 "id": "D3-106",
 "dom": 3,
 "type": "hot",
 "stem": "<p>WebApp18 has the production and staging slots. You swap staging to production.</p><p>To answer, select the appropriate options in the answer area.</p>",
 "rows": [
  {
   "l": "The staging code ends up in:",
   "o": [
    "staging",
    "production",
    "both"
   ],
   "a": 1
  },
  {
   "l": "An app setting not marked as a slot setting:",
   "o": [
    "is deleted",
    "stays in its slot",
    "follows the code"
   ],
   "a": 2
  },
  {
   "l": "The production custom domain name:",
   "o": [
    "stays on production",
    "is deleted",
    "moves to staging"
   ],
   "a": 0
  }
 ],
 "expl": "<ul><li>The staging <b>code</b> moves to production, and production's code moves to staging.</li><li><b>Non-sticky</b> settings follow the code; settings marked as slot settings stay.</li><li>Some settings are never swapped: <b>custom domains</b>, certificates and TLS bindings, scale settings, private endpoints, etc.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "WebApp18"
  ],
  "title": "Swap",
  "rows": [
   [
    "*Code",
    "Swapped"
   ],
   [
    "Non-sticky settings",
    "Follow the code"
   ],
   [
    "*Domains, certificates, scale",
    "Stay"
   ]
  ],
  "btn": "Swap"
 },
 "keep": "Swap: code + non-sticky settings swapped; domains and scale stay."
},
{
 "id": "D3-107",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You manage App Service plans.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "An App Service plan whose apps are all stopped is still billed.",
   "a": 0
  },
  {
   "l": "Stopping a web app stops billing for its plan.",
   "a": 1
  },
  {
   "l": "A plan can contain apps from different regions.",
   "a": 1
  }
 ],
 "expl": "<ul><li><b>Plan billing: Yes.</b> You pay for the plan (its instances) as long as it exists, whatever the apps' state. (Only the Free tier has no cost.)</li><li><b>Stopping the app: No.</b> The plan keeps being billed.</li><li><b>Different regions: No.</b> A plan is in a single region, like all its apps.</li></ul>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP1"
  ],
  "title": "ASP1 | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "Apps",
    "All stopped"
   ],
   [
    "*Billing",
    "Continues (the plan exists)"
   ]
  ]
 },
 "keep": "You pay for the plan as long as it exists; one plan = one region."
},
{
 "id": "D3-108",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>You manage containers in Azure Container Instances.</p><p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>",
 "rows": [
  {
   "l": "A Windows container group can contain several containers.",
   "a": 1
  },
  {
   "l": "Containers in the same group share the same IP address.",
   "a": 0
  },
  {
   "l": "ACI bills CPU and memory per second.",
   "a": 0
  }
 ],
 "expl": "<ul><li><b>Windows multi-container: No.</b> Multi-container groups are only supported for Linux.</li><li><b>Shared IP address: Yes.</b> Containers in a group share the address and port space.</li><li><b>Per-second billing: Yes.</b> You pay for the requested resources while running.</li></ul>",
 "portal": {
  "path": [
   "Container instances",
   "aci1"
  ],
  "title": "aci1 | Overview",
  "menu": [
   "*Overview"
  ],
  "rows": [
   [
    "OS type",
    "Linux (multi-container)"
   ],
   [
    "*IP address",
    "Shared by the group"
   ],
   [
    "Billing",
    "Per second"
   ]
  ]
 },
 "keep": "Multi-container group = Linux; shared IP; billed per second."
},
{
 "id": "D3-109",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to create an ACI container from the image mcr.microsoft.com/azuredocs/aci-helloworld, reachable on the internet by a DNS name, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az {0} create --resource-group RG1 --name hello --image mcr.microsoft.com/azuredocs/aci-helloworld {1} hello-demo42 --ports 80",
 "rows": [
  {
   "l": "Command group",
   "o": [
    "container",
    "containerapp",
    "acr"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--dns-name-label",
    "--domain-name",
    "--fqdn"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az container create ... --dns-name-label hello-demo42 --ports 80</code> creates an ACI container group with a public address and the name <code>hello-demo42.&lt;region&gt;.azurecontainer.io</code>.</p><p><code>az containerapp</code> manages Azure Container Apps; <code>az acr</code> the registry.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Command",
    "az container create … --dns-name-label hello-demo42 --ports 80"
   ]
  ]
 },
 "keep": "ACI in the CLI = az container create (--dns-name-label for the public name)."
},
{
 "id": "D3-110",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to create a Linux App Service plan in the Standard S1 tier, then a Node.js web app, with Azure CLI.</p><p>How should you complete the commands?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az appservice plan create --name ASP1 --resource-group RG1 --sku {0} {1}<br>az webapp create --name webapp42 --resource-group RG1 --plan ASP1 --runtime \"NODE:20-lts\"",
 "rows": [
  {
   "l": "SKU",
   "o": [
    "S1",
    "B1",
    "F1"
   ],
   "a": 0
  },
  {
   "l": "OS",
   "o": [
    "--is-linux",
    "--os windows",
    "--linux-only"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az appservice plan create --sku S1 --is-linux</code> creates a Linux plan in the Standard tier. Without <code>--is-linux</code>, the plan is Windows.</p><p>B1 is the Basic tier, F1 the Free tier.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*az appservice plan create",
    "--sku S1 --is-linux"
   ],
   [
    "az webapp create",
    "--plan ASP1 --runtime NODE:20-lts"
   ]
  ]
 },
 "keep": "Linux plan = --is-linux; otherwise Windows."
},
{
 "id": "D3-111",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to swap the staging slot of webapp43 with production, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "tpl": "az webapp deployment slot {0} --name webapp43 --resource-group RG1 --slot staging {1} production",
 "rows": [
  {
   "l": "Action",
   "o": [
    "swap",
    "create",
    "auto-swap"
   ],
   "a": 0
  },
  {
   "l": "Parameter",
   "o": [
    "--target-slot",
    "--destination",
    "--to"
   ],
   "a": 0
  }
 ],
 "expl": "<p><code>az webapp deployment slot swap --slot staging --target-slot production</code>. You can also do a swap with preview (<code>--action preview</code>), then complete or cancel it.</p>",
 "portal": {
  "path": [
   "Cloud Shell"
  ],
  "title": "Cloud Shell | Bash",
  "rows": [
   [
    "*Command",
    "az webapp deployment slot swap --slot staging --target-slot production"
   ]
  ]
 },
 "keep": "Swapping in the CLI = az webapp deployment slot swap."
},
{
 "id": "D3-112",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You create a Linux web app for a Python API. It must be able to use deployment slots, at the lowest cost.</p><p>How should you configure the app?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Create Web App",
  "sub": "App Services",
  "rows": [
   {
    "k": "head",
    "t": "Instance Details"
   },
   {
    "k": "text",
    "l": "Name",
    "t": "orders-api"
   },
   {
    "k": "radio",
    "l": "Publish",
    "opts": [
     "Code",
     "Container",
     "Static Web App"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "select",
    "l": "Runtime stack",
    "o": [
     ".NET 8",
     "Python 3.12",
     "Node 20 LTS"
    ],
    "a": 1
   },
   {
    "k": "radio",
    "l": "Operating System",
    "opts": [
     "Linux",
     "Windows"
    ],
    "d": 0,
    "a": 0
   },
   {
    "k": "head",
    "t": "Pricing plan"
   },
   {
    "k": "select",
    "l": "Pricing plan",
    "o": [
     "Free F1",
     "Basic B1",
     "Standard S1",
     "Premium v3 P1v3"
    ],
    "a": 2
   }
  ]
 },
 "expl": "<ul><li><b>Code</b> with the <b>Python 3.12</b> stack, on <b>Linux</b> (Python is only offered on Linux in App Service).</li><li><b>Standard S1</b>: the cheapest tier that offers deployment slots.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "Create"
  ],
  "title": "Create Web App",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "Publish",
    "Code"
   ],
   [
    "*Runtime stack",
    "Python 3.12"
   ],
   [
    "Operating System",
    "Linux"
   ],
   [
    "*Pricing plan",
    "Standard S1"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Python on App Service = Linux; slots = Standard."
},
{
 "id": "D3-113",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You configure autoscale for the App Service plan ASP3. It must keep at least 2 instances, at most 8, and add one instance when average CPU exceeds 70% for 10 minutes.</p><p>How should you configure the rule?</p><p>To answer, select the appropriate options in the answer area.</p>",
 "win": {
  "title": "Scale out",
  "sub": "ASP3 | Scale out (App Service plan)",
  "rows": [
   {
    "k": "radio",
    "l": "Method",
    "opts": [
     "Manual",
     "Custom autoscale"
    ],
    "d": 0,
    "a": 1
   },
   {
    "k": "head",
    "t": "Instance limits"
   },
   {
    "k": "select",
    "l": "Minimum",
    "o": [
     "1",
     "2",
     "8"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Maximum",
    "o": [
     "2",
     "8",
     "10"
    ],
    "a": 1
   },
   {
    "k": "head",
    "t": "Rule"
   },
   {
    "k": "select",
    "l": "Metric name",
    "o": [
     "CPU Percentage",
     "Memory Percentage",
     "Http Queue Length"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Operator",
    "o": [
     "Greater than",
     "Less than"
    ],
    "a": 0
   },
   {
    "k": "select",
    "l": "Threshold",
    "o": [
     "30",
     "70",
     "90"
    ],
    "a": 1
   },
   {
    "k": "select",
    "l": "Operation",
    "o": [
     "Increase count by",
     "Decrease count by"
    ],
    "a": 0
   }
  ]
 },
 "expl": "<p><b>Custom</b> autoscale, minimum <b>2</b>, maximum <b>8</b>, rule <b>CPU Percentage Greater than 70</b> (10-minute duration) that <b>increases</b> the instance count by 1.</p><p>Remember to also add a scale-in rule, otherwise the plan will never go back down to 2 instances.</p>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP3"
  ],
  "title": "ASP3 | Scale out (App Service plan)",
  "menu": [
   "*Scale out (App Service plan)"
  ],
  "rows": [
   [
    "*Method",
    "Custom autoscale"
   ],
   [
    "Limits",
    "2 to 8"
   ],
   [
    "*Rule",
    "CPU Percentage > 70 (10 min) → +1"
   ]
  ],
  "btn": "Save"
 },
 "keep": "Autoscale: limits + scale-out rule + scale-in rule."
},
{
 "id": "D3-114",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to add a deployment slot named staging to WebApp19.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "WebApp19 | App Service",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log",
     "Access control (IAM)"
    ]
   },
   {
    "g": "Deployment",
    "items": [
     "Deployment slots",
     "Deployment Center"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Environment variables",
     "Configuration",
     "Custom domains",
     "Certificates",
     "Networking",
     "Scale up (App Service plan)",
     "Scale out (App Service plan)",
     "Backups"
    ]
   }
  ]
 },
 "ans": "Deployment slots",
 "expl": "<p><b>Deployment slots</b> lets you add a slot, swap, and configure traffic routing. <b>Deployment Center</b> configures the code source (GitHub, Azure Repos…).</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp19"
  ],
  "title": "WebApp19 | Deployment slots",
  "menu": [
   "*Deployment slots",
   "Deployment Center"
  ],
  "rows": [
   [
    "production",
    "100%"
   ]
  ],
  "btn": "+ Add slot"
 },
 "keep": "Slots = Deployment slots page; code source = Deployment Center."
},
{
 "id": "D3-115",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>WebApp20 must be able to reach a database that only has a private address in VNet4.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
 "win": {
  "title": "WebApp20 | App Service",
  "nav": [
   {
    "g": "",
    "items": [
     "Overview",
     "Activity log"
    ]
   },
   {
    "g": "Settings",
    "items": [
     "Environment variables",
     "Configuration",
     "Authentication",
     "Identity",
     "Custom domains",
     "Networking",
     "Scale up (App Service plan)"
    ]
   },
   {
    "g": "Monitoring",
    "items": [
     "Alerts",
     "Metrics",
     "App Service logs",
     "Health check"
    ]
   }
  ]
 },
 "ans": "Networking",
 "expl": "<p>The <b>Networking</b> page groups inbound settings (access restrictions, private endpoints, public access) and outbound settings (<b>virtual network integration</b>, hybrid connections).</p>",
 "portal": {
  "path": [
   "App Services",
   "WebApp20"
  ],
  "title": "WebApp20 | Networking",
  "menu": [
   "Configuration",
   "*Networking"
  ],
  "rows": [
   [
    "Inbound traffic",
    "Access restrictions, private endpoints"
   ],
   [
    "*Outbound traffic",
    "Virtual network integration"
   ]
  ]
 },
 "keep": "A web app's network = Networking page (inbound and outbound)."
},
{
 "id": "D3-116",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>You need to reduce downtime during WebApp21 deployments, and be able to quickly return to the previous version.</p><p>Which <b>two</b> actions should you perform?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "Disable Always On",
  "Move the plan to the Basic tier",
  "Move the plan to the Standard tier or higher",
  "Deploy to a staging slot, then swap"
 ],
 "ans": [
  2,
  3
 ],
 "expl": "<ul><li><b>Standard or higher: yes</b>, required for deployment slots.</li><li><b>Staging and swap: yes.</b> The swap happens with no downtime, and a second swap brings back the old version.</li><li><b>Basic: no</b>, no slots.</li><li><b>Disabling Always On: no</b>, it would actually slow down startup.</li></ul>",
 "portal": {
  "path": [
   "App Services",
   "WebApp21"
  ],
  "title": "WebApp21 | Deployment slots",
  "menu": [
   "*Deployment slots"
  ],
  "rows": [
   [
    "Required tier",
    "Standard or higher"
   ],
   [
    "*staging",
    "Swap / roll back"
   ]
  ],
  "btn": "Swap"
 },
 "keep": "Zero-downtime deployment + rollback = slots (Standard+)."
},
{
 "id": "D3-117",
 "dom": 3,
 "type": "multi",
 "pick": 2,
 "stem": "<p>An ACI application must pull a private image from ACR4 and write persistent files.</p><p>Which <b>two</b> configurations are required?</p><p>Each correct answer presents part of the solution.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "opts": [
  "A deployment slot",
  "A managed disk attached to the container group",
  "An Azure Files volume mounted in the container",
  "Credentials for ACR4 (identity with AcrPull or a service principal)"
 ],
 "ans": [
  2,
  3
 ],
 "expl": "<ul><li><b>Registry credentials: yes</b>, to pull a private image.</li><li><b>Azure Files volume: yes</b>, for persistence.</li><li><b>Managed disk: no</b>, ACI doesn't support managed disks.</li><li><b>Deployment slot: no</b>, that's an App Service feature.</li></ul>",
 "portal": {
  "path": [
   "Container instances",
   "Create"
  ],
  "title": "Create container instance",
  "menu": [
   "*Basics",
   "Advanced"
  ],
  "rows": [
   [
    "*Image source",
    "ACR4 (AcrPull identity)"
   ],
   [
    "*Volume",
    "Azure file share"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "ACI: private registry = credentials; persistence = Azure Files."
},
{
 "id": "D3-118",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app in a Premium plan must keep working if a datacenter in the region fails.</p><p>What should you enable?</p>",
 "opts": [
  "Zone redundancy of the App Service plan (at least 2 instances)",
  "A deployment slot",
  "Scheduled backups",
  "Always On"
 ],
 "ans": 0,
 "expl": "<p>A Premium v2/v3 (or Isolated v2) plan can be <b>zone redundant</b>: its instances are spread across several availability zones in the region. You need at least 2 instances (3 were originally required).</p><p>Slots and Always On don't protect against a zone failure. Backups let you restore, not stay available.</p>",
 "portal": {
  "path": [
   "App Service plans",
   "Create"
  ],
  "title": "Create App Service plan",
  "menu": [
   "*Basics"
  ],
  "rows": [
   [
    "Tier",
    "Premium v3"
   ],
   [
    "*Zone redundancy",
    "Enabled (2 instances minimum)"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Datacenter failure = zone-redundant plan."
},
{
 "id": "D3-119",
 "dom": 3,
 "type": "single",
 "stem": "<p>A web app must be available even if the entire France Central region fails.</p><p>Which architecture should you put in place?</p>",
 "opts": [
  "A deployment slot in France South",
  "Two apps in two regions, behind Azure Front Door or Traffic Manager",
  "A plan with 10 instances in France Central",
  "Zone redundancy"
 ],
 "ans": 1,
 "expl": "<p>To survive a <b>region</b> failure, you need the app in <b>two regions</b>, with a global service that routes traffic to the healthy region: <b>Azure Front Door</b> (HTTP, layer 7) or <b>Traffic Manager</b> (DNS).</p><p>Instances and zone redundancy stay within the region. A slot is in the same region as its app.</p>",
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
 "keep": "Region failure = two regions + Front Door or Traffic Manager."
},
{
 "id": "D3-120",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to deploy a containerized application to App Service, from an image in ACR5.</p><p>Which option should you choose for <b>Publish</b> when creating the web app?</p>",
 "opts": [
  "Function",
  "Code",
  "Container",
  "Static Web App"
 ],
 "ans": 2,
 "expl": "<p>App Service can run a <b>container image</b> (Linux or Windows). You choose <b>Container</b>, then the image source (ACR, Docker Hub, other registry) and authentication (managed identity with AcrPull preferably).</p>",
 "portal": {
  "path": [
   "App Services",
   "Create"
  ],
  "title": "Create Web App",
  "menu": [
   "*Basics",
   "Container"
  ],
  "rows": [
   [
    "*Publish",
    "Container"
   ],
   [
    "Image source",
    "Azure Container Registry · ACR5"
   ]
  ],
  "btn": "Review + create"
 },
 "keep": "Container image on App Service = Publish: Container."
},
{
 "id": "D3-121",
 "dom": 3,
 "type": "single",
 "stem": "<p>You need to host 15 small, rarely visited web apps, at the lowest cost, with custom domains and HTTPS.</p><p>Which solution is the cheapest?</p>",
 "opts": [
  "15 Premium v3 plans",
  "15 Basic plans, one per app",
  "15 B-series VMs",
  "A single Basic (or Standard) plan hosting all 15 apps"
 ],
 "ans": 3,
 "expl": "<p>You pay for the <b>plan</b>, not the app: a single plan can host several apps that share its instances. For rarely visited apps, a Basic plan (or Standard if you want slots or autoscale) is enough.</p>",
 "portal": {
  "path": [
   "App Service plans",
   "ASP-Shared"
  ],
  "title": "ASP-Shared | Apps",
  "menu": [
   "*Apps"
  ],
  "rows": [
   [
    "*Apps",
    "15"
   ],
   [
    "Tier",
    "Basic B1"
   ]
  ]
 },
 "keep": "Several small apps = a single shared plan."
}
);
