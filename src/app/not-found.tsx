import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-grid flex min-h-[80svh] items-center">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          Error 404
        </p>
        <h1 className="mt-5 max-w-3xl text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-tightest text-balance">
          This transaction could not be settled.
        </h1>
        <p className="mt-6 max-w-md text-lg text-ink/60">
          The page you requested doesn&apos;t exist or has moved. No funds were
          harmed.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-sm bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent"
        >
          ← Back to start
        </Link>
      </div>
    </section>
  );
}
