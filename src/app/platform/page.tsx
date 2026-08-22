import Link from "next/link";
import { Reveal, SectionHead } from "@/components/motion";
import { AreaChart } from "@/components/charts";
import { MetricStat } from "@/components/dashboard";

export const metadata = {
  title: "Platform",
  description:
    "One API, one ledger, one dashboard. How the AXIOM platform is built.",
};

const pillars = [
  {
    name: "Unified API",
    body: "One REST surface for payments, treasury positions, ledger entries and portfolio actions. Idempotent by default, versioned forever.",
  },
  {
    name: "Real-time ledger",
    body: "Every product writes to a single immutable double-entry ledger. Balances are always exact, never eventually reconciled.",
  },
  {
    name: "Programmatic controls",
    body: "Velocity limits, approval chains and policy engines expressed as configuration — reviewed in git, deployed like code.",
  },
  {
    name: "Edge observability",
    body: "Traces on every money movement. When something is slow or stuck, you see which rail, region and retry before your users notice.",
  },
];

const snippet = `POST /v1/payments HTTP/1.1
Host: api.axiom.example
Authorization: Bearer sk_live_••••

{
  "amount": 420000,
  "currency": "USD",
  "destination": "acct_8xk21f",
  "rail": "auto",
  "idempotency_key": "inv_2026_08_04471"
}`;

export default function PlatformPage() {
  return (
    <>
      <section className="bg-grid border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8 md:pt-36">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Platform
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              One API. One ledger.
              <br />
              Zero reconciliation debt.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/60">
              AXIOM replaces the patchwork of processors, banks and spreadsheets
              behind most financial products with a single programmable platform.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-lg bg-ink p-6 font-mono text-[13px] leading-loose text-white shadow-panel md:p-8">
                <p className="text-emerald-400">$ axiom init --env production</p>
                <pre className="mt-4 overflow-x-auto whitespace-pre text-white/80">{snippet}</pre>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex h-full flex-col justify-center gap-10 rounded-lg border border-line p-8">
                <MetricStat value="99.99%" delta="12mo" label="Measured uptime" />
                <MetricStat value="87ms" label="p50 auth latency" />
                <MetricStat value="14" label="Regions · active-active" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead
          eyebrow="Architecture"
          title="Built like infrastructure, not like an app."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.name} className="bg-paper p-8">
              <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tightest">
                {p.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <SectionHead
              eyebrow="Reliability"
              title="Uptime you can audit."
              sub="Multi-region active-active deployment. Every incident published with a public post-mortem within five business days."
            />
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-line bg-paper p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-baseline justify-between">
                <p className="text-sm font-medium">Availability · trailing year</p>
                <p className="font-mono text-sm text-pos">99.992%</p>
              </div>
              <AreaChart data={[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]} height={120} color="#0C7A55" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink/35">
                Sample series — connect your own monitoring feed
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 text-center md:px-8 md:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.1] tracking-tightest text-balance">
            Read the docs. Then read our post-mortems. Then decide.
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-sm bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            Request sandbox access
          </Link>
        </Reveal>
      </section>
    </>
  );
}
