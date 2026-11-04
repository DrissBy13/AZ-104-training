/* Domain 3: compute (batch C : D3-067 to D3-121) */
AZ.questions.push(
{
 "id": "D3-067",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to choose the appropriate Azure Container Registry service tier for each need, at the lowest cost.</p><p>To answer, drag the appropriate tier to each need. Each tier may be used once, more than once, or not at all.</p>",
 "srcLabel": "Tiers",
 "tgtHead": [
  "Need",
  "Tier"
 ],
 "srcs": [
  "Basic",
  "Standard",
  "Premium"
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
 "id": "D3-071",
 "dom": 3,
 "type": "dragdrop",
 "stem": "<p>You need to assign the appropriate role for Azure Container Registry, following the principle of least privilege.</p><p>To answer, drag the appropriate role to each need. Each role may be used once, more than once, or not at all.</p>",
 "srcLabel": "Roles",
 "tgtHead": [
  "Need",
  "Role"
 ],
 "srcs": [
  "AcrPull",
  "AcrPush",
  "Contributor",
  "Reader"
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
 "tgtHead": [
  "Need",
  "Service"
 ],
 "srcs": [
  "Azure Container Registry",
  "Azure Container Instances",
  "Azure Container Apps"
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
 "id": "D3-089",
 "dom": 3,
 "type": "order",
 "stem": "<p>You need to deploy a new version of WebApp3 with no downtime, test it on a separate URL, then put it in production.</p><p>Which three actions should you perform in sequence?</p><p>To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>",
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
 "keep": "Zero-downtime deployment: slot, test, swap (and roll back by swapping).",
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
 ]
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
 "keep": "ACI in the CLI = az container create (--dns-name-label for the public name).",
 "tpl": "az {0} create --resource-group RG1 --name hello --image mcr.microsoft.com/azuredocs/aci-helloworld {1} hello-demo42 --ports 80"
},
{
 "id": "D3-110",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to create a Linux App Service plan in the Standard S1 tier, then a Node.js web app, with Azure CLI.</p><p>How should you complete the commands?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Linux plan = --is-linux; otherwise Windows.",
 "tpl": "az appservice plan create --name ASP1 --resource-group RG1 --sku {0} {1}<br>az webapp create --name webapp42 --resource-group RG1 --plan ASP1 --runtime \"NODE:20-lts\""
},
{
 "id": "D3-111",
 "dom": 3,
 "type": "cmd",
 "stem": "<p>You need to swap the staging slot of webapp43 with production, with Azure CLI.</p><p>How should you complete the command?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Swapping in the CLI = az webapp deployment slot swap.",
 "tpl": "az webapp deployment slot {0} --name webapp43 --resource-group RG1 --slot staging {1} production"
},
{
 "id": "D3-112",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You create a Linux web app for a Python API. It must be able to use deployment slots, at the lowest cost.</p><p>How should you configure the app?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Python on App Service = Linux; slots = Standard.",
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
 }
},
{
 "id": "D3-113",
 "dom": 3,
 "type": "screen",
 "stem": "<p>You configure autoscale for the App Service plan ASP3. It must keep at least 2 instances, at most 8, and add one instance when average CPU exceeds 70% for 10 minutes.</p><p>How should you configure the rule?</p><p>To answer, select the appropriate options in the answer area.</p>",
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
 "keep": "Autoscale: limits + scale-out rule + scale-in rule.",
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
 }
},
{
 "id": "D3-114",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>You need to add a deployment slot named staging to WebApp19.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "Slots = Deployment slots page; code source = Deployment Center.",
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
 }
},
{
 "id": "D3-115",
 "dom": 3,
 "type": "hotspot",
 "stem": "<p>WebApp20 must be able to reach a database that only has a private address in VNet4.</p><p>Which option should you select?</p><p>To answer, select the appropriate option in the answer area.</p>",
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
 "keep": "A web app's network = Networking page (inbound and outbound).",
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
 }
},
{
 "id": "D3-117",
 "dom": 3,
 "type": "yngrid",
 "stem": "<p>An ACI application must pull a private image from ACR4 and write persistent files.</p><p>For each of the following configurations, select Yes if it's required. Otherwise, select No.</p><p>NOTE: Each correct selection is worth one point.</p>",
 "rows": [
  {
   "l": "A deployment slot for the container",
   "a": 1
  },
  {
   "l": "A managed disk attached to the container group",
   "a": 1
  },
  {
   "l": "A mounted Azure Files volume",
   "a": 0
  },
  {
   "l": "Credentials for ACR4 (AcrPull)",
   "a": 0
  }
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
}
);
