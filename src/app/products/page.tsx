"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/data";
import { Reveal } from "@/components/motion";
import { AreaChart, Donut, Sparkline } from "@/components/charts";

const sample: Record<string, number[]> = {
  payments: [42, 51, 48, 60, 57, 71, 68, 84],
  treasury: [100, 101.2, 102.1, 103.4, 104.9, 106.3, 108.1, 110.2],
  analytics: [30, 34, 31, 38, 42, 40, 47, 52],
};

const allocation = [
  { label: "Equities", value: 46, color: "#0C7A55" },
  { label: "Bonds", value: 24, color: "#0A0D0B" },
  { label: "Cash", value: 18, color: "#7FA99B" },
  { label: "Alternatives", value: 12, color: "#C9D5D0" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Products
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              Four modules.
              <br />
              One ledger underneath.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-20 px-5 py-20 md:space-y-28 md:px-8 md:py-28">
        {products.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="grid scroll-mt-24 items-center gap-12 md:grid-cols-12"
          >
            <div className={i % 2 === 1 ? "md:order-2 md:col-span-6" : "md:col-span-6"}>
              <Reveal>
                <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-tightest">
                  {p.name}
                </h2>
                <p className="mt-2 font-mono text-sm uppercase tracking-widest text-ink/45">
                  {p.tagline}
                </p>
                <p className="mt-5 max-w-lg leading-relaxed text-ink/65">
                  {p.description}
                </p>
                <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink/70">
                      <span className="mt-0.5 text-accent">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.1} className={i % 2 === 1 ? "md:col-span-6 md:order-1" : "md:col-span-6"}>
              <div className="rounded-xl border border-line bg-paper p-6 shadow-card md:p-8">
                {p.slug === "payments" && (
                  <>
                    <p className="mb-4 flex justify-between text-sm">
                      <span className="text-ink/50">Processed volume · 8 wks</span>
                      <span className="font-mono text-pos">▲ +18%</span>
                    </p>
                    <BarMini data={sample.payments} />
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-ink/35">
                      Sample data — replace with your metrics
                    </p>
                  </>
                )}
                {p.slug === "treasury" && (
                  <>
                    <p className="mb-4 flex justify-between text-sm">
                      <span className="text-ink/50">Indexed yield vs. cash</span>
                      <span className="font-mono text-pos">▲ +10.2%</span>
                    </p>
                    <AreaChart data={[100, 101, 102, 103, 105, 106, 108, 110]} height={170} />
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-ink/35">
                      Sample data — replace with your metrics
                    </p>
                  </>
                )}
                {p.slug === "analytics" && (
                  <>
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-sm text-ink/50">MRR cohorts</p>
                        <p className="font-mono text-3xl font-medium tnum">$262k</p>
                      </div>
                      <Sparkline data={sample.analytics} className="w-28" />
                    </div>
                    <AreaChart data={sample.analytics} height={150} />
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-ink/35">
                      Sample data — replace with your metrics
                    </p>
                  </>
                )}
                {p.slug === "investments" && (
                  <div className="flex flex-col items-center gap-6 sm:flex-row">
                    <Donut segments={allocation}>
                      <span className="font-mono text-lg font-medium">$1.2M</span>
                    </Donut>
                    <ul className="w-full space-y-2.5">
                      {allocation.map((s) => (
                        <li key={s.label} className="flex items-center gap-3 text-sm">
                          <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: s.color }} />
                          <span className="text-ink/70">{s.label}</span>
                          <span className="ml-auto font-mono tnum text-ink/45">{s.value}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          </article>
        ))}

        <Reveal>
          <div className="rounded-xl bg-ink p-10 text-center text-white md:p-14">
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium tracking-tightest">
              Use one module or all four.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/60">
              Pricing scales with volume, not seat count.
            </p>
            <Link
              href="/pricing"
              className="mt-8 inline-block rounded-sm bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-emerald-400 hover:text-white"
            >
              See pricing →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function BarMini({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex h-36 items-end gap-2">
      {data.map((v, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-[3px] bg-ink/85"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          style={{
            height: `${(v / max) * 100}%`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}
