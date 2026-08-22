import Link from "next/link";
import { products, site } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8 md:pt-28">
        <Reveal>
          <p className="max-w-2xl text-[clamp(1.6rem,3.4vw,2.75rem)] font-medium leading-[1.15] tracking-tightest text-balance">
            Financial infrastructure for{" "}
            <span className="text-emerald-400">modern businesses.</span>
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Get started →
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-white/15 pt-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="flex items-center gap-2.5">
              <span className="block h-3 w-3 bg-emerald-400" aria-hidden />
              <span className="text-[15px] font-semibold tracking-tightest">
                AXIOM
              </span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Payments, treasury, analytics and investment infrastructure on a
              single platform.
            </p>
            <p className="mt-6 flex flex-col gap-1 text-sm text-white/55">
              <a href={`mailto:${site.email}`} className="link-line w-max">
                {site.email}
              </a>
              <span>{site.address}</span>
            </p>
          </div>

          <FooterCol
            title="Products"
            links={products.map((p) => ({
              href: `/products#${p.slug}`,
              label: p.name,
            }))}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About" },
              { href: "/customers", label: "Customers" },
              { href: "/platform", label: "Platform" },
              { href: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { href: "/insights", label: "Insights" },
              { href: "/security", label: "Security" },
              { href: "/compliance", label: "Compliance" },
              { href: "/legal", label: "Legal" },
            ]}
          />
        </div>

        <div className="mt-14 space-y-3 border-t border-white/15 pt-6 text-[11px] leading-relaxed text-white/40">
          <p>
            © {new Date().getFullYear()} AXIOM. A website template — company
            names, figures and testimonials are illustrative.
          </p>
          <p>
            Template note: security, compliance and regulatory claims shown on
            this site are placeholders. Replace them with your organization&apos;s
            real credentials before publishing.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
