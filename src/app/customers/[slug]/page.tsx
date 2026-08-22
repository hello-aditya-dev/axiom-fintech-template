import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: `${c.client} — Case study`, description: c.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  const next = cases[(cases.findIndex((x) => x.slug === slug) + 1) % cases.length];

  return (
    <article>
      <header className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-24 md:px-8 md:pt-32">
          <Link href="/customers" className="link-line font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            ← Customers
          </Link>
          <h1 className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.06] tracking-tightest text-balance">
            {c.headline}
          </h1>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
              {c.summary}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Metrics band */}
      <section className="bg-mist/50 border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-y-10 px-5 py-12 sm:grid-cols-3 md:px-8">
          {c.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.07}>
              <div className={i > 0 ? "sm:border-l sm:border-line sm:pl-10" : ""}>
                <p className="font-mono text-4xl font-medium tracking-tightest text-accent tnum md:text-5xl">
                  {m.value}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl space-y-16 px-5 py-20 md:space-y-24 md:px-8 md:py-28">
        {[
          { n: "01", label: "Challenge", body: c.challenge },
          { n: "02", label: "Implementation", body: c.implementation },
          { n: "03", label: "Result", body: c.result },
        ].map((s) => (
          <div key={s.n} className="grid gap-6 md:grid-cols-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40 md:col-span-3">
              ({s.n}) — {s.label}
            </p>
            <Reveal className="md:col-span-9 lg:col-span-8" delay={0.08}>
              <p className="text-[clamp(1.25rem,2.2vw,1.65rem)] font-normal leading-[1.45] tracking-tight text-ink/85">
                {s.body}
              </p>
            </Reveal>
          </div>
        ))}

        <figure className="mx-auto max-w-3xl rounded-xl border border-line bg-paper p-10 text-center shadow-card">
          <blockquote className="text-[clamp(1.3rem,2.5vw,1.9rem)] font-medium leading-snug tracking-tightest text-balance">
            “{c.quote.text}”
          </blockquote>
          <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
            {c.quote.name} · {c.quote.role}
          </figcaption>
        </figure>
      </section>

      <Link
        href={`/customers/${next.slug}`}
        className="group block border-t border-line"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            Next case study
          </p>
          <h2 className="mt-4 text-[clamp(1.8rem,4.5vw,3.5rem)] font-medium tracking-tightest transition-transform duration-700 ease-out group-hover:translate-x-3">
            {next.client}
            <span className="text-accent"> →</span>
          </h2>
        </div>
      </Link>
    </article>
  );
}
