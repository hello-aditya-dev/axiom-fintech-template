"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-medium leading-[1.08] tracking-tightest text-balance ${
          center ? "mx-auto max-w-3xl" : "max-w-3xl"
        } text-[clamp(1.9rem,4vw,3.25rem)]`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 max-w-xl leading-relaxed text-ink/60 ${
            center ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

export function LogoWall({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      {items.map((name) => (
        <span
          key={name}
          className="font-mono text-[13px] font-medium tracking-[0.14em] text-ink/35"
        >
          {name}
        </span>
      ))}
    </div>
  );
}
