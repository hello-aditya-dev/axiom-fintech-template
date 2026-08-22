import Link from "next/link";
import { pricingTiers } from "@/lib/data";
import { Reveal, SectionHead } from "@/components/motion";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent, volume-based pricing. Start free in sandbox, scale to enterprise.",
};

const faqs = [
  {
    q: "How does usage pricing work?",
    a: "A platform fee covers your environments, support and dashboard. Usage is billed per transaction with volume tiers — the marginal rate falls as you grow. Exact rates depend on rails and currencies; we quote them in writing before you commit.",
  },
  {
    q: "Can we start in sandbox?",
    a: "Yes. Sandbox is fully functional against test banks and costs nothing. Most teams integrate in days and stay in sandbox until their first production review.",
  },
  {
    q: "What about regulatory requirements?",
    a: "Licensing requirements vary by product and market. Our team maps which modules fit your current licenses during the first call — and tells you honestly when they don't.",
  },
  {
    q: "Do you offer migration help?",
    a: "Scale and Enterprise include a dedicated integration engineer. Migrations from legacy processors typically run in shadow mode for one week before cutover.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Pricing
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              Priced for scale,
              <br />
              not for seats.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-xl border p-8 ${
                  t.popular
                    ? "border-accent shadow-panel"
                    : "border-line"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                    Most popular
                  </span>
                )}
                <h2 className="text-lg font-semibold tracking-tightest">{t.name}</h2>
                <p className="mt-1 text-sm text-ink/50">{t.blurb}</p>
                <p className="mt-6 font-mono text-4xl font-medium tracking-tightest tnum">
                  {t.price}
                  <span className="text-base font-normal text-ink/45">{t.unit}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-7">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/70">
                      <span className="mt-0.5 text-accent">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-9 block rounded-sm py-3 text-center text-sm font-medium transition-colors ${
                    t.popular
                      ? "bg-ink text-white hover:bg-accent"
                      : "border border-line hover:border-ink"
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionHead
          eyebrow="FAQ"
          title="Questions finance teams actually ask."
        />
        <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <h3 className="font-semibold tracking-tight">{f.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
