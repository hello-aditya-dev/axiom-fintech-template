export const metadata = {
  title: "Legal",
  description: "Privacy policy, terms of service and disclaimers.",
};

const privacy = [
  "This is placeholder copy for your privacy policy. Replace it with counsel-reviewed text that reflects how your company collects, stores and processes personal data before going live.",
  "We collect only information visitors choose to share through forms on this website. It is used solely to respond to inquiries and is never sold or rented.",
  "Cookies are limited to strictly functional use unless consent is given. Analytics run without personal identifiers by default.",
  "Data access, correction and deletion requests are honored within statutory timeframes via the published contact address.",
];

const terms = [
  "This is placeholder copy for your terms of service. Replace with counsel-reviewed text appropriate to your jurisdiction.",
  "Nothing on this website constitutes financial advice, an offer of securities, or a solicitation. Product availability varies by jurisdiction and licensing status.",
  "Use of this website does not create a customer relationship. Commercial terms are established exclusively in signed agreements.",
  "All content is provided as-is. Liability is limited to the fullest extent permitted by applicable law.",
];

export default function LegalPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 pb-32 pt-20 md:pt-28">
      <h1 className="text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tightest">
        Legal.
      </h1>

      <p className="mt-8 rounded-lg border border-dashed border-line bg-mist p-5 text-sm leading-relaxed text-ink/60">
        Template note: all legal text below is placeholder content. Replace
        every section with counsel-reviewed policies before publishing.
      </p>

      <section className="mt-16">
        <h2 className="border-t border-line pt-6 text-2xl font-semibold tracking-tightest">
          Privacy Policy
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-ink/70">
          {privacy.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="border-t border-line pt-6 text-2xl font-semibold tracking-tightest">
          Terms of Service
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-ink/70">
          {terms.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/35">
        Last updated — August 2026
      </p>
    </article>
  );
}
