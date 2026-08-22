"use client";

import { useId } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function buildPaths(data: number[], w: number, h: number, pad = 6) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = w / (data.length - 1);
  const pts = data.map(
    (v, i) =>
      [
        i * stepX,
        h - pad - ((v - min) / range) * (h - pad * 2),
      ] as const
  );

  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const xc = (pts[i][0] + pts[i + 1][0]) / 2;
    const yc = (pts[i][1] + pts[i + 1][1]) / 2;
    d += ` Q ${pts[i][0]},${pts[i][1]} ${xc},${yc}`;
  }
  d += ` L ${pts[pts.length - 1][0]},${pts[pts.length - 1][1]}`;

  const area = `${d} L ${w},${h} L 0,${h} Z`;
  return { line: d, area };
}

export function AreaChart({
  data,
  className,
  color = "#0C7A55",
  height = 220,
  gridlines = true,
}: {
  data: number[];
  className?: string;
  color?: string;
  height?: number;
  gridlines?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const W = 640;
  const H = height;
  const { line, area } = buildPaths(data, W, H);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label="Trend chart"
    >
      <defs>
        <linearGradient id={`fill-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.16" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {gridlines &&
        [0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1="0"
            x2={W}
            y1={H * f}
            y2={H * f}
            stroke="rgba(10,13,11,0.07)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}

      <motion.path
        d={area}
        fill={`url(#fill-${uid})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.8, ease: EASE }}
      />
    </svg>
  );
}

export function LineChart({
  series,
  className,
  height = 200,
}: {
  series: { data: number[]; color: string }[];
  className?: string;
  height?: number;
}) {
  const W = 640;
  const H = height;
  const all = series.flatMap((s) => s.data);
  const max = Math.max(...all);
  const min = Math.min(...all);
  const range = max - min || 1;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label="Comparison chart"
    >
      {[0.25, 0.5, 0.75].map((f) => (
        <line
          key={f}
          x1="0"
          x2={W}
          y1={H * f}
          y2={H * f}
          stroke="rgba(10,13,11,0.07)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {series.map((s, si) => {
        const stepX = W / (s.data.length - 1);
        const pts = s.data.map(
          (v, i) =>
            [i * stepX, H - ((v - min) / range) * (H - 12) - 6] as const
        );
        let d = `M ${pts[0][0]},${pts[0][1]}`;
        for (let i = 1; i < pts.length - 1; i++) {
          const xc = (pts[i][0] + pts[i + 1][0]) / 2;
          const yc = (pts[i][1] + pts[i + 1][1]) / 2;
          d += ` Q ${pts[i][0]},${pts[i][1]} ${xc},${yc}`;
        }
        d += ` L ${pts[pts.length - 1][0]},${pts[pts.length - 1][1]}`;
        return (
          <motion.path
            key={si}
            d={d}
            fill="none"
            stroke={s.color}
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.8, delay: si * 0.15, ease: EASE }}
          />
        );
      })}
    </svg>
  );
}

export function BarChart({
  data,
  className,
  color = "#0C7A55",
  height = 170,
}: {
  data: number[];
  className?: string;
  color?: string;
  height?: number;
}) {
  const W = 640;
  const H = height;
  const max = Math.max(...data);
  const gap = 10;
  const bw = (W - gap * (data.length - 1)) / data.length;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label="Bar chart"
    >
      {data.map((v, i) => {
        const bh = Math.max((v / max) * (H - 8), 4);
        return (
          <motion.rect
            key={i}
            x={i * (bw + gap)}
            width={bw}
            rx="2"
            fill={color}
            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.05,
              ease: EASE,
            }}
            y={H - bh}
            height={bh}
          />
        );
      })}
    </svg>
  );
}

export function Donut({
  segments,
  size = 170,
  thickness = 20,
  className,
  children,
}: {
  segments: { label: string; value: number; color: string }[];
  size?: number;
  thickness?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const total = segments.reduce((a, s) => a + s.value, 0);
  const r = (size - thickness) / 2;
  const C = 2 * Math.PI * r;

  return (
    <div className={`relative inline-flex items-center justify-center ${className ?? ""}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Allocation donut chart">
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {segments.map((s, i) => {
            const frac = s.value / total;
            const offset = segments
              .slice(0, i)
              .reduce((a, seg) => a + seg.value / total, 0);
            return (
              <motion.circle
                key={s.label}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth={thickness}
                strokeDasharray={`${C * frac - 2} ${C}`}
                strokeDashoffset={-C * offset}
                strokeLinecap="butt"
                style={{ transformOrigin: "center", transformBox: "fill-box" }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: EASE,
                }}
              />
            );
          })}
        </g>
      </svg>
      {children && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

export function Sparkline({
  data,
  color = "#0C7A55",
  className,
}: {
  data: number[];
  color?: string;
  className?: string;
}) {
  const W = 120;
  const H = 36;
  const { line } = buildPaths(data, W, H, 3);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} aria-hidden>
      <path d={line} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
