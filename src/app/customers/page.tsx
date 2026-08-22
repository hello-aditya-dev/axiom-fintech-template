import Link from "next/link";
import { cases, testimonials } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Customers",
  description:
    "How teams at Northbank, Helix Capital and Cassa Pay build on AXIOM.",
};

export default function CustomersPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Customers
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              Serious companies,
              <br />
              measurable outcomes.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}>
              <Link
                href={`/customers/${c.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-card"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40">
                  {c.sector}
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tightest transition-colors group-hover:text-accent">
                  {c.headline}
                </h2>
                <div className="mt-auto pt-10">
                  <div className="grid grid-cols-3 gap-3 border-t border-line pt-5">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-lg font-medium tnum">{m.value}</p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-ink/40">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 inline-block text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Read case study →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 divide-y divide-line border-y border-line">
          {testimonials.map((t) => (
            <figure key={t.name} className="grid items-baseline gap-3 py-8 md:grid-cols-12">
              <blockquote className="text-lg font-medium tracking-tightest md:col-span-8">
                “{t.text}”
              </blockquote>
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 md:col-span-4 md:text-right">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
