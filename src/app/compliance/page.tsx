import { complianceCerts } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Compliance",
  description:
    "Regulatory posture, licenses and data protection — placeholder framework for your real credentials.",
};

const practices = [
  {
    name: "Licensing mapping",
    body: "Every module is mapped against required licenses per market. The compliance matrix ships with your enterprise packet.",
    placeholder: true,
  },
  {
    name: "Data protection",
    body: "Data residency options per region, documented retention schedules and DSAR workflows with defined SLAs.",
    placeholder: true,
  },
  {
    name: "Audit readiness",
    body: "Immutable ledgers make audits a query instead of an investigation. Evidence exports generated on demand.",
    placeholder: true,
  },
  {
    name: "Third-party risk",
    body: "Banking and custody partners are disclosed with their regulatory status. Sub-processors listed publicly.",
    placeholder: true,
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Compliance
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              Regulatory posture,
              <br />
              stated plainly.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 sm:grid-cols-2">
          {practices.map((p) => (
            <Reveal key={p.name}>
              <div className="h-full rounded-xl border border-line p-8">
                <span className="rounded-full border border-accent/40 bg-emerald-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-pos">
                  Placeholder
                </span>
                <h2 className="mt-5 text-xl font-semibold tracking-tightest">
                  {p.name}
                </h2>
                <p className="mt-3 leading-relaxed text-ink/60">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-xl border border-dashed border-line bg-mist p-6 text-sm leading-relaxed text-ink/60">
            ⚠ Template note: certifications below are placeholders. Claiming
            SOC 2, ISO 27001 or PCI DSS status without a real audit is fraud in
            most jurisdictions. Replace with your verified credentials only.
          </div>
        </Reveal>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {complianceCerts.map((c) => (
            <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-3 py-6">
              <div>
                <p className="text-lg font-medium tracking-tightest">{c.name}</p>
                <p className="mt-1 text-sm text-ink/50">{c.detail}</p>
              </div>
              <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink/45">
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
