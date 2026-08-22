import Link from "next/link";
import { posts } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Insights",
  description: "Notes on engineering, finance and compliance from the AXIOM desk.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Insights
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.03] tracking-tightest text-balance">
              Notes from the
              <br />
              infrastructure desk.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <Link
            href={`/insights/${posts[0].slug}`}
            className="group block border-b border-line pb-12"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Latest — {posts[0].category} · {posts[0].readingTime}
            </p>
            <h2 className="mt-4 max-w-4xl text-[clamp(1.8rem,4.5vw,3.5rem)] font-medium leading-[1.08] tracking-tightest transition-colors group-hover:text-accent">
              {posts[0].title}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink/60">
              {posts[0].excerpt}
            </p>
          </Link>
        </Reveal>

        <div className="divide-y divide-line">
          {posts.slice(1).map((p) => (
            <Link
              key={p.slug}
              href={`/insights/${p.slug}`}
              className="group grid items-baseline gap-2 py-8 md:grid-cols-12"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40 md:col-span-3">
                {p.category} · {p.readingTime}
              </span>
              <span className="text-xl font-medium tracking-tightest transition-colors group-hover:text-accent md:col-span-7">
                {p.title}
              </span>
              <span className="text-right font-mono text-[11px] text-ink/40 md:col-span-2">
                {p.date}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
