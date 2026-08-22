import Link from "next/link";
import { posts, products, securityControls, site, stats, testimonials, trustLogos } from "@/lib/data";
import { Eyebrow, LogoWall, Reveal, SectionHead } from "@/components/motion";
import { LineChart } from "@/components/charts";
import {
  AllocationCard,
  DashboardFrame,
  DashboardPreview,
  PortfolioCard,
} from "@/components/dashboard";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-grid border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pt-36">
          <Reveal>
            <Eyebrow>Financial infrastructure for modern businesses</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5.75rem)] font-medium leading-[1.02] tracking-tightest text-balance">
              Move money like{" "}
              <span className="text-accent">software.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/60">
              AXIOM unifies payments, treasury, analytics and investments on a
              single platform — so modern finance teams ship products instead
              of spreadsheets.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Get started
              </Link>
              <Link
                href="/platform"
                className="link-line text-sm font-medium"
              >
                Explore the platform →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-20 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
              Trusted by teams moving $48B+
            </p>
            <div className="mt-6 border-t border-line pt-8">
              <LogoWall items={trustLogos} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dashboard showcase ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead
          eyebrow="The platform"
          title="Your entire financial stack, in one view."
          sub="Real-time ledgers under every product surface. Charts animate as they enter the viewport — because data should feel alive without shouting."
        />
        <Reveal delay={0.15}>
          <div className="mt-14">
            <DashboardPreview />
          </div>
        </Reveal>
      </section>

      {/* ── Metrics band ─────────────────────────────── */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 py-14 md:grid-cols-4 md:px-8 md:py-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className={i > 0 ? "md:border-l md:border-line md:pl-10" : ""}>
                <p className="font-mono text-[clamp(1.9rem,3.4vw,2.75rem)] font-medium tracking-tightest tnum">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Products ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead
          eyebrow="Products"
          title="Four modules. One ledger."
          sub="Each module works alone. Together they share a single source of financial truth."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/products#${p.slug}`}
                className="group flex h-full flex-col rounded-lg border border-line p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-card"
              >
                <span className="font-mono text-[11px] text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tightest">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-ink/60">
                  {p.tagline}
                </p>
                <span className="mt-auto pt-6 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Data-viz signature ───────────────────────── */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <SectionHead
              eyebrow="Data visualization"
              title="Charts that answer questions."
              sub="Performance, drawn honestly. Every visualization is rendered in-house from live ledger state — never a screenshot of a spreadsheet."
            />
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3 text-sm text-ink/65">
                <li>→ Scroll-triggered draw animations, zero layout shift</li>
                <li>→ Deterministic sample data you can swap in one file</li>
                <li>→ Accessible: real SVG with ARIA labels, not canvas blobs</li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-line bg-paper p-6 shadow-card md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-medium">Treasury yield vs. idle balances</p>
                <div className="flex gap-4 font-mono text-[11px] text-ink/50">
                  <span className="flex items-center gap-1.5">
                    <span className="h-0.5 w-4 bg-pos" /> With AXIOM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-0.5 w-4 bg-neg" /> Without
                  </span>
                </div>
              </div>
              <LineChart
                height={210}
                series={[
                  {
                    color: "#0C7A55",
                    data: [100, 105, 111, 118, 126, 133, 142, 152],
                  },
                  {
                    color: "#C2402A",
                    data: [100, 100, 101, 101, 102, 103, 104, 104],
                  },
                ]}
              />
              <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink/35">
                <span>$10M · Year 0</span>
                <span>Year 8</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Investment spotlight ─────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHead
              eyebrow="Investments module"
              title="Portfolio value your users check daily."
              sub="Brokerage-grade investing rails behind your own brand. Onboarding, custody and execution handled; the interface is yours."
            />
            <Reveal delay={0.15}>
              <Link href="/products#investments" className="link-line mt-8 inline-block text-sm font-medium">
                Explore Investments →
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-7">
            <DashboardFrame title="app.axiom.example/portfolio">
              <div className="bg-paper">
                <PortfolioCard />
              </div>
            </DashboardFrame>
          </Reveal>
        </div>
      </section>

      {/* ── Trust / security ─────────────────────────── */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHead
            eyebrow="Security & compliance"
            title={
              <>
                Trust everywhere,
                <br />
                by default.
              </>
            }
            sub="Controls and certifications are presented as placeholders below — replace them with your organization's real credentials before launch."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {securityControls.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-lg border border-white/15 bg-white/[0.03] p-6">
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    Placeholder
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tightest">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-lg border border-dashed border-white/25 p-5 text-sm leading-relaxed text-white/60">
              ⚠ Demo content — the controls and badges above are illustrative.
              Publishing false regulatory claims is illegal in most
              jurisdictions. Replace every placeholder with verified facts.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHead eyebrow="Customers" title="What finance teams say." center />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-lg border border-line p-7">
                <blockquote className="text-[15px] leading-relaxed text-ink/80">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-sm text-ink/45">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Insights preview ─────────────────────────── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex items-end justify-between">
            <SectionHead eyebrow="Insights" title="From the desk." />
            <Link href="/insights" className="link-line hidden pb-2 text-sm font-medium md:block">
              All articles →
            </Link>
          </div>
          <div className="mt-12 divide-y divide-line border-t border-b border-line">
            {posts.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group grid items-baseline gap-1 py-6 md:grid-cols-12"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40 md:col-span-3">
                  {p.category} · {p.readingTime}
                </span>
                <span className="text-lg font-medium tracking-tightest transition-colors group-hover:text-accent md:col-span-7">
                  {p.title}
                </span>
                <span className="text-right font-mono text-[11px] text-ink/40 md:col-span-2">
                  {p.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="bg-grid border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tightest text-balance">
              Start moving money like software.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-ink/60">
              Sandbox access takes minutes. Production takes days, not quarters.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Talk to us
              </Link>
              <Link
                href="/pricing"
                className="rounded-sm border border-line px-7 py-3.5 text-sm font-medium transition-colors hover:border-ink"
              >
                See pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
