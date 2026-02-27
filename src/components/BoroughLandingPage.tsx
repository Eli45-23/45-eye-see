import Link from "next/link";
import { business } from "@/src/content/business";
import type { BoroughLandingPageContent } from "@/src/content/boroughLandingPages";
import { CallCTA } from "@/src/components/CallCTA";

type BoroughLandingPageProps = {
  content: BoroughLandingPageContent;
};

export function BoroughLandingPage({ content }: BoroughLandingPageProps) {
  return (
    <div className="space-y-8">
      <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8cbff6]">
          {content.boroughName} Electrical Services
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {content.heroTitle}
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#d2e3fa]">
          {content.intro}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <CallCTA label={`Call ${business.phone}`} />
          <Link
            href="/contact#contact-request"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold tracking-wide text-gray-100 transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Request a callback
          </Link>
        </div>
      </section>

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <div className="space-y-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Related Electrical Services</h2>
        <ul className="mt-4 space-y-2 text-sm text-[#d2e3fa]">
          <li>
            <Link
              href="/services#electrical-troubleshooting-and-repairs"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              Electrical troubleshooting and repair details
            </Link>
          </li>
          <li>
            <Link
              href="/services#panel-upgrades-and-service-changes"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              Panel upgrades and service change scope
            </Link>
          </li>
          <li>
            <Link
              href="/services#ev-charger-installation"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              EV charger installation overview
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
