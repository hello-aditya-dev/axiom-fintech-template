import Link from "next/link";
import { site, stats } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "About",
  description:
    "AXIOM builds financial infrastructure for modern businesses. Here is how we work.",
};

const values = [
  {
    title: "Earned trust",
    body: "Trust in finance is never assumed — it's audited. We publish uptime, post-mortems and pricing because transparency compounds.",
  },
  {
    title: "Boring where it matters",
    body: "Money movement should be the least interesting part of your stack. We invest our risk budget in reliability, not novelty.",
  },
  {
    title: "Engineers close to money",
    body: "The people who build the ledger can explain every cent in it. No abstraction layers between builders and consequences.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-grid">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              Infrastructure is
              <br />
              a promise.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/60">
              AXIOM exists because moving money programmatically shouldn&apos;t
              require a bank charter, a compliance department and eighteen
              months of integration pain.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-normal leading-[1.45] tracking-tight">
              We started AXIOM after watching good teams lose years to plumbing
              that already existed somewhere else — behind contracts nobody
              could read and SLAs nobody could measure.
            </p>
          </Reveal>
          <div className="space-y-8 text-[15px] leading-relaxed text-ink/65 md:col-span-6 md:col-start-7">
            <Reveal delay={0.08}>
              <p>
                Today {stats[0].value} in assets moves across the platform each
                year, processed from {stats[3].value} countries for{" "}
                {stats[2].value} businesses. The team is small by design and
                senior by policy: infrastructure fails at its weakest layer,
                so we staff accordingly.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p>
                We measure ourselves on three numbers: measured uptime,
                median latency and the percentage of customers who renew
                without being asked. Everything else is commentary.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-medium tracking-tightest">
              How we operate.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-line bg-paper p-8">
                  <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tightest">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 text-center md:px-8 md:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.1] tracking-tightest text-balance">
            We&apos;re hiring engineers who read ledgers for fun.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={`mailto:${site.email}?subject=Working%20at%20AXIOM`}
              className="rounded-sm bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              Introduce yourself
            </Link>
            <Link href="/platform" className="rounded-sm border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink">
              See what we build
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
