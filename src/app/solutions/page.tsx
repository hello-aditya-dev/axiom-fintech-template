import Link from "next/link";
import { solutions } from "@/lib/data";
import { Reveal, SectionHead } from "@/components/motion";

export const metadata = {
  title: "Solutions",
  description:
    "AXIOM for investment platforms, neobanks, payment companies and wealth management.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Solutions
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              Built for the teams
              <br />
              rebuilding finance.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-2">
          {solutions.map((s, i) => (
            <div key={s.slug} className="bg-paper p-8 md:p-12">
              <Reveal delay={(i % 2) * 0.08}>
                <span className="font-mono text-[11px] text-accent">
                  0{i + 1}
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-tightest">
                  {s.name}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-ink/60">
                  {s.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.outcomes.map((o) => (
                    <li
                      key={o}
                      className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink/55"
                    >
                      {o}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="link-line mt-8 inline-block text-sm font-medium">
                  Talk to us about {s.name.toLowerCase()} →
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
