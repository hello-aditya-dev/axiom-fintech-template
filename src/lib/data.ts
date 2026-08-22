export const site = {
  name: "AXIOM",
  tagline: "Financial infrastructure for modern businesses.",
  email: "sales@axiom.example",
  phone: "+1 (415) 555-0142",
  address: "548 Market St, San Francisco, CA",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export const stats = [
  { value: "$48.2B", label: "Assets on platform" },
  { value: "312M", label: "Transactions per year" },
  { value: "4,200+", label: "Business customers" },
  { value: "38", label: "Countries supported" },
];

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export const products: Product[] = [
  {
    slug: "payments",
    name: "Payments",
    tagline: "Global money movement through one API.",
    description:
      "Accept, route and settle payments in 38 countries through a single integration. Smart routing selects the cheapest and fastest rail for every transaction automatically, with instant failover when a processor degrades.",
    bullets: [
      "Cards, ACH, SEPA, wires & local rails",
      "Smart routing with automatic failover",
      "Instant payouts to 190+ markets",
      "Sub-100ms authorization latency",
      "Idempotent, versioned REST API",
      "Webhooks with guaranteed delivery",
    ],
  },
  {
    slug: "treasury",
    name: "Treasury",
    tagline: "Put idle cash to work, safely.",
    description:
      "Sweep idle balances into money market funds and short-duration government bills automatically. Liquidity stays available to your product; yield accrues from the day of deposit.",
    bullets: [
      "T+0 sweeps into MMFs & T-bills",
      "Laddered maturities, auto-renewed",
      "Real-time liquidity forecasting",
      "Multi-entity cash pooling",
      "Custody at qualified partner banks",
      "Same-day withdrawal, always available",
    ],
  },
  {
    slug: "analytics",
    name: "Analytics",
    tagline: "Every cent, accounted for.",
    description:
      "An immutable double-entry ledger under every transaction, with reporting that closes itself continuously. Finance teams stop reconciling spreadsheets and start reading dashboards.",
    bullets: [
      "Immutable double-entry ledger",
      "Continuous auto-reconciliation",
      "Revenue recognition exports",
      "Custom reports & scheduled digests",
      "Warehouse sync (Snowflake, BigQuery)",
      "Anomaly alerts on unusual flows",
    ],
  },
  {
    slug: "investments",
    name: "Investments",
    tagline: "Wealth products, embedded.",
    description:
      "Launch brokerage, robo-advisory or fund distribution inside your own product. Onboarding, custody and execution run on infrastructure designed to scale with assets under management.",
    bullets: [
      "Fractional equities & ETFs",
      "Model portfolios & rebalancing API",
      "Fund distribution rails",
      "KYC/AML onboarding flows",
      "Tax-lot optimization",
      "Institutional-grade custody",
    ],
  },
];

export const solutions = [
  {
    slug: "investment-platforms",
    name: "Investment platforms",
    blurb:
      "Launch retail brokerage, robo-advisory or fund distribution without building clearing infrastructure from scratch.",
    outcomes: ["9-week median launch", "Fractional execution", "Regulatory-ready onboarding"],
  },
  {
    slug: "neobanks",
    name: "Neobanks & challenger banks",
    blurb:
      "Programmatic accounts, cards and payments that let a lean team ship banking-grade products in months, not years.",
    outcomes: ["Multi-currency accounts", "Card issuing APIs", "Real-time ledgers"],
  },
  {
    slug: "payment-companies",
    name: "Payment companies",
    blurb:
      "Orchestrate processors, manage FX exposure and settle cross-border flows with sub-100ms decisioning.",
    outcomes: ["Smart routing", "Auto FX hedging", "Unified settlement"],
  },
  {
    slug: "wealth-management",
    name: "Wealth management",
    blurb:
      "Modernize advisory operations with automated rebalancing, tax-lot optimization and client-facing reporting.",
    outcomes: ["Automated rebalancing", "Tax-loss harvesting", "White-label reporting"],
  },
];

export const pricingTiers = [
  {
    name: "Launch",
    price: "$99",
    unit: "/month + usage",
    blurb: "For early-stage teams validating their first financial product.",
    features: [
      "Up to $250k monthly volume",
      "Payments + Analytics modules",
      "Standard support (48h)",
      "Sandbox + full API access",
      "3 team seats",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Scale",
    price: "$999",
    unit: "/month + usage",
    blurb: "For growing platforms moving serious volume across borders.",
    features: [
      "Volume-based interchange pricing",
      "All four product modules",
      "Treasury yield sweep",
      "Priority support (4h SLA)",
      "Unlimited seats & environments",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    blurb: "For institutions with regulatory, volume and residency requirements.",
    features: [
      "Custom licensing review",
      "Data residency options",
      "99.99% uptime SLA",
      "Dedicated infrastructure",
      "On-site integration support",
    ],
    cta: "Contact us",
    popular: false,
  },
];

export const securityControls = [
  {
    title: "Encryption everywhere",
    body: "AES-256 encryption at rest, TLS 1.3 in transit. Key material managed in HSMs with automatic rotation.",
    placeholder: true,
  },
  {
    title: "Fraud monitoring",
    body: "Machine-learning models score every transaction in-line. Rules engine for custom velocity and geo controls.",
    placeholder: true,
  },
  {
    title: "Access control",
    body: "SSO/SAML, role-based permissions and mandatory hardware-key MFA for privileged actions.",
    placeholder: true,
  },
  {
    title: "Uptime & recovery",
    body: "Multi-region active-active deployment with continuous backups and a published incident process.",
    placeholder: true,
  },
];

export const complianceCerts = [
  { name: "SOC 2 Type II", detail: "Placeholder — replace with your audit status.", status: "Placeholder" },
  { name: "ISO/IEC 27001", detail: "Placeholder — replace with your certification status.", status: "Placeholder" },
  { name: "PCI DSS Level 1", detail: "Placeholder — replace with your attestation.", status: "Placeholder" },
  { name: "GDPR & PSD2 readiness", detail: "Placeholder — describe your actual data-protection posture.", status: "Placeholder" },
];

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  headline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  implementation: string;
  result: string;
  quote: { text: string; name: string; role: string };
}

export const cases: CaseStudy[] = [
  {
    slug: "northbank",
    client: "Northbank",
    sector: "Neobank · United Kingdom",
    headline: "Cutting payment failures by 62% at a 900k-user neobank",
    summary:
      "Northbank replaced its legacy processor stack with AXIOM's smart routing and recovered revenue it had written off as churn.",
    metrics: [
      { value: "−62%", label: "Failed payments" },
      { value: "£4.1M", label: "Recovered annual revenue" },
      { value: "11 days", label: "Migration window" },
    ],
    challenge:
      "Northbank's card acceptance rate had drifted to 91% — invisible in aggregate dashboards but brutal at 900k users. Every failed top-up was a customer questioning the bank itself, and the legacy processor offered no path to diagnosis.",
    implementation:
      "AXIOM was layered alongside the existing stack in shadow mode for one week, scoring every transaction against both providers' rails. Routing rules then shifted gradually by cohort until 100% of volume moved — with an instant rollback path held open throughout.",
    result:
      "Acceptance rose to 96.6%. The finance team now sees every decline reason in real time instead of weekly CSV archaeology, and product launches no longer require capacity planning calls with processors.",
    quote: {
      text: "The migration was the first infrastructure change in our history that nobody noticed. That's the highest compliment I can give.",
      name: "Priya Shah",
      role: "CTO, Northbank",
    },
  },
  {
    slug: "helix-capital",
    client: "Helix Capital",
    sector: "Investment platform · Germany",
    headline: "From regulatory filing to first trade in nine weeks",
    summary:
      "A two-founder team launched a regulated retail investment platform on AXIOM's investments module — and crossed €100M AUM in year one.",
    metrics: [
      { value: "9 wks", label: "Concept to launch" },
      { value: "€104M", label: "AUM in first year" },
      { value: "0", label: "Compliance findings" },
    ],
    challenge:
      "Helix wanted robo-advisory economics with private-banking polish. Building custody, execution and reporting internally would have consumed both founders' next eighteen months and required hires they couldn't yet justify.",
    implementation:
      "They built exclusively on AXIOM: KYC flows, fractional execution, model portfolios and white-label statements shipped as configured modules rather than custom code. The founding engineers spent their time on the client experience instead of plumbing.",
    result:
      "Launched week nine after BaFin filing. Year-one AUM reached €104M with zero compliance findings and a support load light enough to answer personally.",
    quote: {
      text: "We shipped a regulated investment product as a team of two. Five years ago that sentence would have been fiction.",
      name: "Jonas Weber",
      role: "Co-founder, Helix Capital",
    },
  },
  {
    slug: "cassa-pay",
    client: "Cassa Pay",
    sector: "Payments · Singapore",
    headline: "Twelve new markets, one treasury team",
    summary:
      "A fast-growing PSP expanded into APAC without hiring a single additional treasury analyst.",
    metrics: [
      { value: "12", label: "New markets in 14 months" },
      { value: "$0", label: "Additional treasury hires" },
      { value: "T+0", label: "Settlement visibility" },
    ],
    challenge:
      "Each new market historically meant a new banking partner, a new reconciliation format and a new spreadsheet. Cassa's treasury function was scaling linearly with expansion — the exact opposite of what software should do.",
    implementation:
      "AXIOM's multi-currency accounts and continuous reconciliation absorbed each launch. FX exposure hedging runs automatically against defined policy bands, and settlement reports generate themselves in each market's format.",
    result:
      "Twelve markets went live in fourteen months with the same three-person treasury team. Month-end close time dropped from nine days to two.",
    quote: {
      text: "Expansion used to be a treasury problem. Now it's a configuration task.",
      name: "Wei Lin Tan",
      role: "VP Finance, Cassa Pay",
    },
  },
];

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "trust-is-a-latency-problem",
    title: "Trust is a latency problem",
    date: "June 2026",
    category: "Engineering",
    readingTime: "5 min",
    excerpt:
      "Users don't read your security page before trusting you with their money. They watch how fast the spinner resolves.",
    body: [
      "Financial products ask for something unusual: irreversible action under uncertainty. Every transfer is a small act of faith, and faith is measured in milliseconds. When a payment button spins for three seconds, users don't think 'complex backend orchestration.' They think 'did my money disappear?'",
      "We treat latency budgets like capital reserves — never fully spent, monitored daily, replenished before they're needed. Authorization paths get p99 targets, not averages. The slowest legitimate user matters more than the fastest laboratory benchmark.",
      "This changes engineering priorities in unglamorous ways. We cache aggressively at the edge, precompute risk scores asynchronously, and reserve synchronous work for the decisions that genuinely need to be synchronous. Most of our architecture exists to make one number small: the gap between 'user acted' and 'system confirmed.'",
      "Trust compounds the way interest does — quietly, on schedule, and catastrophically when interrupted. Uptime pages and SOC reports are the paperwork of trust; latency is its lived experience.",
    ],
  },
  {
    slug: "the-quiet-math-of-treasury-yield",
    title: "The quiet math of treasury yield",
    date: "April 2026",
    category: "Finance",
    readingTime: "7 min",
    excerpt:
      "Idle balances are the most expensive asset nobody budgets for. A working tour of modern cash management.",
    body: [
      "Ask a CFO about their biggest expense line and they'll name payroll or cloud spend. Rarely do they mention the silent leak: balances sitting at zero percent while T-bills pay five. At scale, idle cash isn't conservative — it's compensation paid to nobody.",
      "Modern treasury treats liquidity like an inventory problem with a yield dimension. Operating buffers stay liquid; everything above the buffer earns. The discipline is in defining the buffer honestly — which requires forecasting you can trust, which requires ledgers clean enough to forecast from.",
      "Automation changed the calculus. Sweeps that once demanded a treasury analyst's morning now execute continuously against policy: minimum liquidity thresholds, counterparty limits, maturity ladders. The analyst reviews exceptions, not transactions.",
      "None of this requires exotic instruments. Government bills and government MMFs carry the risk profile most treasurers actually want. What's changed is the plumbing: same-day settlement and programmatic access turned a quarterly chore into standing infrastructure.",
      "The quiet math: a company holding $20M in average idle balance forgoes roughly a million dollars a year at five percent. That's not a rounding error. That's a hiring plan.",
    ],
  },
  {
    slug: "compliance-as-a-product-feature",
    title: "Compliance as a product feature",
    date: "February 2026",
    category: "Compliance",
    readingTime: "6 min",
    excerpt:
      "The best-regulated companies don't bolt compliance on at the end. They ship it as part of the product surface.",
    body: [
      "There's a version of compliance everyone dreads: auditors arriving after launch, discovering that logs weren't kept, that access wasn't reviewed, that data flowed somewhere it shouldn't. Then there's the version we practice — compliance as a property of the system itself.",
      "The shift starts with ledgers. If every state transition is recorded immutably, audit becomes a query, not an investigation. Access reviews become exports. Regulator requests become links. The compliance team stops reconstructing history and starts verifying present tense.",
      "Product surfaces benefit too. Users shown exactly why a document request exists comply faster and complain less. Consent flows designed by people who understand PSD2 read differently than consent flows designed by lawyers alone.",
      "None of this eliminates the lawyers. It means engineering and compliance argue before the code is written, when arguments are cheap — instead of during an incident, when they're catastrophic.",
    ],
  },
  {
    slug: "why-we-publish-our-uptime",
    title: "Why we publish our uptime",
    date: "December 2025",
    category: "Engineering culture",
    readingTime: "4 min",
    excerpt:
      "A status page is a promise made in public. Here's why we make it anyway.",
    body: [
      "Publishing real-time uptime feels reckless until you examine who benefits from opacity. Vendors hide status pages because incidents are embarrassing; customers suffer most precisely because they can't tell whether the problem is theirs or yours. Transparency converts shared confusion into shared information.",
      "Our status page carries every incident, including the ones where we were the sole cause. Each post-mortem ships within five business days with a timeline, contributing causes and specific remediations — tracked to closure in public.",
      "The commercial argument settles it: enterprise buyers diligence reliability harder every year, and a public track record shortens those conversations from weeks to hours. Honesty scales better than perfection claims.",
      "Perfection was never on offer. Reliability is a practice, and practices improve in daylight.",
    ],
  },
];

export const trustLogos = [
  "NORTHBANK",
  "HELIX CAPITAL",
  "CASSA PAY",
  "VANTA CREDIT",
  "ORBIT WEALTH",
  "LEDGERLINE",
  "ATLAS CLEARING",
  "MERIDIAN TRUST",
];

export const testimonials = [
  {
    text: "AXIOM is the only vendor our engineers didn't complain about during integration. The API reads like documentation of how things should work.",
    name: "Priya Shah",
    role: "CTO, Northbank",
  },
  {
    text: "We evaluated six providers. AXIOM was the only one whose compliance story survived contact with our regulator.",
    name: "Jonas Weber",
    role: "Co-founder, Helix Capital",
  },
  {
    text: "Month-end close went from nine days to two. My team finally does analysis instead of archaeology.",
    name: "Wei Lin Tan",
    role: "VP Finance, Cassa Pay",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

