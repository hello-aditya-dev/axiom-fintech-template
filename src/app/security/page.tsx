import Link from "next/link";
import { securityControls } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Security",
  description:
    "How AXIOM protects assets and data — placeholder framework for your real controls.",
};

const disclosures = [
  { label: "Responsible disclosure", body: "security@axiom.example · 90-day safe harbor" },
  { label: "Incident response", body: "Published post-mortems within 5 business days" },
  { label: "Status page", body: "Real-time availability, public history" },
];

export default function SecurityPage() {
  return (
    <>
      <section className="border-b border-line bg-grid">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Security
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              Defending money
              <br />
              is the product.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/60">
              The controls below are placeholders in this template. Replace
              them with your verified security posture before publishing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 sm:grid-cols-2">
          {securityControls.map((s) => (
            <Reveal key={s.title}>
              <div className="flex h-full flex-col rounded-xl border border-line p-8 transition-colors hover:border-accent/40">
                <span className="w-max rounded-full border border-accent/40 bg-emerald-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-pos">
                  Placeholder
                </span>
                <h2 className="mt-5 text-xl font-semibold tracking-tightest">
                  {s.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {disclosures.map((d) => (
              <div key={d.label} className="bg-paper p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
                  {d.label}
                </p>
                <p className="mt-3 text-sm font-medium">{d.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
