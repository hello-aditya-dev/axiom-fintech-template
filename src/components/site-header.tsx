"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/customers", label: "Customers" },
  { href: "/insights", label: "Insights" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="block h-3 w-3 bg-accent" aria-hidden />
          <span className="text-[15px] font-semibold tracking-tightest">
            AXIOM
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname.startsWith(l.href)
                  ? "text-ink"
                  : "text-ink/55 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pos" />
            Operational
          </span>
          <Link href="/contact" className="text-sm text-ink/70 hover:text-ink">
            Sign in
          </Link>
          <Link
            href="/contact"
            className="rounded-sm bg-ink px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-accent"
          >
            Get started
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="text-sm lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <ul className="space-y-1 px-5 py-6">
              {[...links, { href: "/platform", label: "Platform" }, { href: "/security", label: "Security" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }].map(
                (l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block py-2 text-lg font-medium tracking-tight"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-white"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
