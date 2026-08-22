"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const volumes = ["<$1M / month", "$1–10M", "$10–100M", "$100M+"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    volume: volumes[1],
    message: "",
  });

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `AXIOM inquiry — ${form.company || form.name}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n—\n${form.name}${form.company ? `, ${form.company}` : ""}\nMonthly volume: ${form.volume}`
  )}`;

  const field =
    "w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-accent";

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 md:px-8 md:pt-28">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tightest text-balance">
            Talk to a human
            <br />
            about your stack.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-ink/60">
            Sandbox access takes minutes. Production reviews usually take days.
            Either way, you&apos;ll speak with an engineer, not a chatbot.
          </p>

          <div className="mt-12 space-y-8 border-t border-line pt-8 text-sm">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">Direct</p>
              <a href={`mailto:${site.email}`} className="link-line mt-2 block w-max font-medium">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="link-line mt-1 block w-max font-medium">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">Headquarters</p>
              <p className="mt-2 text-ink/60">{site.address}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  Full name *
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  Work email *
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ada@company.com"
                  className={field}
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  Company
                </span>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Company Inc."
                  className={field}
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  Monthly volume
                </span>
                <select
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  className={`${field} cursor-pointer`}
                >
                  {volumes.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                What are you building? *
              </span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Product, market, timeline — a few honest sentences beat a formal brief."
                className={`${field} resize-none`}
              />
            </label>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (!form.name || !form.email || !form.message) {
                  alert("Name, email and message are required.");
                  return;
                }
                window.location.href = mailto;
              }}
              className="rounded-sm bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              Send message →
            </button>
            <p className="text-xs text-ink/40">
              This demo form opens your email client — wire it to any form
              backend (Resend, Formspree, your API) in one file.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
