# AXIOM — Fintech / Investment Platform Template

**Financial infrastructure for modern businesses.**

A trust-heavy website system for investment platforms, wealthtech, fintech
SaaS, neobanks, payment companies and financial infrastructure teams.
Bloomberg-terminal energy meets Stripe-grade restraint: lots of white, black
typography, animated financial charts, subtle motion.

## Stack

- **Next.js 15** (App Router) + React 19
- **Tailwind CSS 3**
- **Framer Motion** — scroll-triggered chart animations & reveals
- **Lenis** — smooth scrolling
- Zero image dependencies — all visuals are SVG charts and typographic systems

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, trust logos, dashboard showcase, metrics band, products, signature data-viz, investment spotlight, security, testimonials, insights, CTA |
| `/platform` | Architecture pillars, API snippet, reliability |
| `/solutions` | Investment platforms · Neobanks · Payment companies · Wealth management |
| `/products` | Payments / Treasury / Analytics / Investments with mini visualizations |
| `/pricing` | Launch / Scale / Enterprise + FAQ |
| `/security` | Security controls (placeholder framework) |
| `/compliance` | Regulatory posture (placeholder framework) |
| `/insights`, `/insights/[slug]` | Editorial content |
| `/customers`, `/customers/[slug]` | Case studies with metrics storytelling |
| `/about`, `/contact`, `/legal`, `404` | Company + utility pages |

## Killer component: Financial Dashboard Storytelling

Five reusable blocks in [`src/components/dashboard.tsx`](src/components/dashboard.tsx):

1. **PortfolioCard** — $842,420 portfolio value, +14.8% YTD pill, scroll-animated area chart
2. **AllocationCard** — animated donut with legend
3. **TransactionFeed** — staggered live transaction rows with tabular numerals
4. **RevenueCard** — trailing-twelve-month bar chart
5. **DashboardFrame** — browser chrome wrapper that composes them all

Chart primitives (`AreaChart`, `LineChart`, `BarChart`, `Donut`, `Sparkline`)
live in [`src/components/charts.tsx`](src/components/charts.tsx) — pure SVG,
animated on scroll via `pathLength`/`scaleY`, accessible with ARIA labels.

## ⚠️ Compliance placeholder policy (read before launching)

Security, compliance and regulatory claims throughout this template are
**placeholders**, visibly badged as such on the site:

- Replace every claim in `securityControls` and `complianceCerts`
  ([`src/lib/data.ts`](src/lib/data.ts)) with your organization's real,
  verifiable credentials before publishing.
- Never present audit status, licenses or certifications you do not hold.

## Editing content ("the CMS")

Everything lives in [`src/lib/data.ts`](src/lib/data.ts): stats, products,
solutions, pricing tiers, case studies, insights articles, testimonials and
site config. Swap the arrays and ship — no database or API keys required.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repository.
3. Framework preset auto-detects **Next.js** — accept defaults, deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel --prod
```

## License

Template license: one license per end product. All company names, figures and
testimonials are illustrative and must be replaced before commercial use.
