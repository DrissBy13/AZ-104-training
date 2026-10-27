/* Yes/No question series (même scénario, pas de retour en arrière) */
AZ.series.push(
{
 "id": "S001",
 "dom": 4,
 "title": "NSG and HTTPS access to VM1",
 "scenario": "<p>You have a virtual network named VNet1 that contains a subnet named Subnet1. Subnet1 has <b>no</b> network security group associated.</p><p>Subnet1 contains a virtual machine named VM1 that runs Windows Server and hosts a website. VM1 has a Standard SKU public IP address. A network security group named NSG1, which contains only the default rules, is associated with VM1's network interface.</p><p>Users on the internet must access the VM1 website over HTTPS (TCP 443). Currently, the connection fails.</p>",
 "items": [
  {
   "solution": "<p><b>Solution:</b> You add to NSG1 an inbound security rule that allows TCP 443 from the Internet source, with a priority of 100.</p><p>Does this meet the goal?</p>",
   "ans": 0,
   "expl": "<p><b>Yes.</b> Subnet1 has no NSG: only NSG1, on VM1's interface, filters traffic. Its default rules end with <b>DenyAllInBound</b> (65500), which denies traffic from the internet. An “Allow TCP 443 from Internet” rule at priority <b>100</b> is evaluated first and lets HTTPS through.</p><p>The Standard public address is closed by default: an NSG is indeed what must open the port.</p>",
   "portal": {
    "path": [
     "Network security groups",
     "NSG1"
    ],
    "title": "NSG1 | Inbound security rules",
    "menu": [
     "*Inbound security rules"
    ],
    "rows": [
     [
      "*100 · Allow-HTTPS",
      "443 · Internet · Allow"
     ],
     [
      "65500 · DenyAllInBound",
      "Any · Deny"
     ]
    ],
    "btn": "+ Add"
   },
   "keep": "Opening an inbound port = inbound rule with a smaller number than the deny."
  },
  {
   "solution": "<p><b>Solution:</b> You add to NSG1 an <b>outbound</b> security rule that allows TCP 443 to the Internet destination, with a priority of 100.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> The block is <b>inbound</b>: internet users' requests don't reach VM1. An outbound rule changes nothing.</p><p>Also, NSGs are <b>stateful</b>: when an inbound connection is allowed, its responses go back automatically, with no outbound rule.</p>",
   "portal": {
    "path": [
     "Network security groups",
     "NSG1"
    ],
    "title": "NSG1 | Outbound security rules",
    "menu": [
     "Inbound security rules",
     "*Outbound security rules"
    ],
    "rows": [
     [
      "*Direction of the block",
      "Inbound"
     ]
    ]
   },
   "keep": "Stateful NSG: the response to an allowed flow goes back on its own."
  },
  {
   "solution": "<p><b>Solution:</b> You create a network security group named NSG2, which allows inbound TCP 443 from the internet, and associate it with Subnet1.</p><p>Does this meet the goal?</p>",
   "ans": 1,
   "expl": "<p><b>No.</b> When a subnet <b>and</b> an interface each have an NSG, inbound traffic must be allowed by <b>both</b> (first the subnet's, then the interface's). NSG2 lets it through, but NSG1 still denies it with DenyAllInBound.</p>",
   "portal": {
    "path": [
     "Network interfaces",
     "vm1-nic"
    ],
    "title": "vm1-nic | Effective security rules",
    "menu": [
     "*Effective security rules"
    ],
    "rows": [
     [
      "NSG2 (Subnet1)",
      "443 · Allow"
     ],
     [
      "*NSG1 (interface)",
      "DenyAllInBound · Deny"
     ]
    ]
   },
   "keep": "Inbound: subnet NSG then interface NSG; both must allow."
  }
 ]
}
);
