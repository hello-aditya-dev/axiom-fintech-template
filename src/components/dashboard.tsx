"use client";

import { motion } from "framer-motion";
import { AreaChart, BarChart, Donut } from "@/components/charts";

export const portfolioSeries = [
  612, 634, 628, 661, 690, 682, 714, 738, 731, 769, 802, 842,
];

export const revenueSeries = [
  128, 141, 137, 152, 168, 181, 177, 196, 214, 228, 241, 262,
];

export const allocationSegments = [
  { label: "Equities", value: 46, color: "#0C7A55" },
  { label: "Bonds", value: 24, color: "#0A0D0B" },
  { label: "Cash", value: 18, color: "#7FA99B" },
  { label: "Alternatives", value: 12, color: "#C9D5D0" },
];

export function MetricStat({
  value,
  delta,
  deltaLabel,
  label,
}: {
  value: string;
  delta?: string;
  deltaLabel?: string;
  label?: string;
}) {
  const positive = !delta?.startsWith("−") && !delta?.startsWith("-");
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-4xl font-medium tracking-tightest md:text-[42px]">
          {value}
        </span>
        {delta && (
          <span
            className={`rounded-full px-2.5 py-1 font-mono text-xs ${
              positive ? "bg-emerald-50 text-pos" : "bg-red-50 text-neg"
            }`}
          >
            {positive ? "▲" : "▼"} {delta}
          </span>
        )}
      </div>
      {(label || deltaLabel) && (
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
          {label} {deltaLabel ? `· ${deltaLabel}` : ""}
        </p>
      )}
    </div>
  );
}

export function DashboardFrame({
  title = "app.axiom.example/overview",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-paper shadow-panel">
      <div className="flex items-center gap-2 border-b border-line bg-mist/60 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="ml-3 hidden rounded-sm border border-line bg-paper px-3 py-1 font-mono text-[11px] text-ink/45 sm:block">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export function PortfolioCard() {
  return (
    <div className="flex h-full flex-col p-6 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
          Total portfolio value
        </p>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-mono text-xs text-pos">
          ▲ +14.8% YTD
        </span>
      </div>
      <p className="mt-3 font-mono text-[clamp(2rem,4vw,3rem)] font-medium leading-none tracking-tightest tnum">
        $842,420
      </p>
      <p className="mt-2 text-sm text-ink/45">+$107,930 past 12 months</p>
      <AreaChart data={portfolioSeries} className="mt-6 w-full flex-1" height={200} />
    </div>
  );
}

export function AllocationCard() {
  return (
    <div className="flex h-full flex-col justify-between gap-6 p-6 md:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
        Asset allocation
      </p>
      <Donut segments={allocationSegments} className="mx-auto">
        <span className="font-mono text-lg font-medium tracking-tightest">
          $1.2M
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
          Managed
        </span>
      </Donut>
      <ul className="space-y-2.5">
        {allocationSegments.map((s) => (
          <li key={s.label} className="flex items-center gap-3 text-sm">
            <span
              className="h-2.5 w-2.5 rounded-[2px]"
              style={{ background: s.color }}
            />
            <span className="text-ink/70">{s.label}</span>
            <span className="ml-auto font-mono tnum text-ink/45">{s.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const feed = [
  { name: "Northbank top-up", memo: "ACH · cleared instantly", amount: "+$48,220.00", time: "09:41:07 UTC", pos: true },
  { name: "FX conversion EUR → USD", memo: "Rate locked · 1.0842", amount: "+$212,000.00", time: "07:58:22 UTC", pos: true },
  { name: "T-bill settlement · 4wk", memo: "Auto-renewed · interest received", amount: "+$1,240.00", time: "07:00:03 UTC", pos: true },
  { name: "Payroll run · November", memo: "Wire batch · 214 recipients", amount: "−$186,400.00", time: "08:00:00 UTC", pos: false },
  { name: "Wire out · Meridian Trust", memo: "Same-day · settled", amount: "−$95,000.00", time: "06:32:10 UTC", pos: false },
  { name: "Card issuing fees", memo: "Program · October", amount: "−$3,118.42", time: "Yesterday", pos: false },
];

export function TransactionFeed() {
  return (
    <div className="flex h-full flex-col p-6 md:p-7">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
          Live transactions
        </p>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-pos">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pos" />
          Streaming
        </span>
      </div>
      <ul className="divide-y divide-line">
        {feed.map((t, i) => (
          <motion.li
            key={t.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex items-center justify-between gap-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{t.name}</p>
              <p className="truncate text-xs text-ink/40">{t.memo}</p>
            </div>
            <div className="shrink-0 text-right">
              <p
                className={`font-mono text-sm tnum ${
                  t.pos ? "text-pos" : "text-ink"
                }`}
              >
                {t.amount}
              </p>
              <p className="font-mono text-[10px] text-ink/35">{t.time}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function RevenueCard() {
  return (
    <div className="flex h-full flex-col p-6 md:p-7">
      <div className="mb-4 flex items-baseline justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
          Net revenue · trailing 12 months
        </p>
        <p className="font-mono text-sm text-pos">▲ +31% YoY</p>
      </div>
      <BarChart data={revenueSeries} className="w-full flex-1" height={190} />
      <div className="mt-3 flex justify-between font-mono text-[10px] text-ink/35">
        {["D", "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N"].map(
          (m, i) => (
            <span key={i}>{m}</span>
          )
        )}
      </div>
    </div>
  );
}

export function DashboardPreview() {
  return (
    <DashboardFrame>
      <div className="grid gap-px bg-line lg:grid-cols-3">
        <div className="bg-paper lg:col-span-2">
          <PortfolioCard />
        </div>
        <div className="bg-paper">
          <AllocationCard />
        </div>
        <div className="bg-paper lg:col-span-2">
          <RevenueCard />
        </div>
        <div className="bg-paper">
          <TransactionFeed />
        </div>
      </div>
    </DashboardFrame>
  );
}
