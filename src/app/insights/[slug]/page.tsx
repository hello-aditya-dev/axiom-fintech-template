import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const others = posts.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <article>
      <header className="mx-auto max-w-3xl px-5 pb-14 pt-24 md:pt-32">
        <Link href="/insights" className="link-line font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          ← Insights
        </Link>
        <h1 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-tightest text-balance">
          {p.title}
        </h1>
        <Reveal delay={0.12}>
          <p className="mt-6 text-lg leading-relaxed text-ink/55">{p.excerpt}</p>
          <div className="mt-8 flex gap-6 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40">
            <span>{p.category}</span>
            <span>{p.date}</span>
            <span>{p.readingTime}</span>
          </div>
        </Reveal>
      </header>

      <div className="mx-auto max-w-2xl space-y-7 px-5 pb-20 text-[17px] leading-[1.75] text-ink/75 md:pb-28">
        {p.body.map((para, i) => (
          <Reveal key={i} delay={Math.min(i * 0.03, 0.15)} y={12}>
            <p>{para}</p>
          </Reveal>
        ))}
      </div>

      <section className="border-t border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
            Keep reading
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/insights/${o.slug}`} className="group border-t-2 border-ink pt-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
                  {o.category}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tightest transition-colors group-hover:text-accent">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{o.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
