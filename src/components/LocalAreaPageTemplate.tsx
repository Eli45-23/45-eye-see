import Link from "next/link";
import { faqs } from "@/src/content/faqs";
import type { LocalAreaPageContent } from "@/src/content/localAreaPages";
import { CTASection } from "@/src/components/CTASection";
import { CallCTA } from "@/src/components/CallCTA";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { LocalHero } from "@/src/components/LocalHero";
import { ServiceAreasCoverage } from "@/src/components/ServiceAreasCoverage";
import { ServiceCards } from "@/src/components/ServiceCards";
import { TrustSection } from "@/src/components/TrustSection";

type LocalAreaPageTemplateProps = {
  content: LocalAreaPageContent;
};

export function LocalAreaPageTemplate({ content }: LocalAreaPageTemplateProps) {
  return (
    <div className="space-y-8">
      <LocalHero
        areaName={content.areaName}
        neighborhoodLine={content.neighborhoodLine}
        supportingSentence={content.supportingSentence}
      />

      <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Service Categories</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#d2e3fa]">{content.serviceCategoryIntro}</p>
        <div className="mt-4">
          <ServiceCards />
        </div>
      </section>
      <TrustSection areaName={content.areaName} />

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Electrical Troubleshooting in {content.areaName}
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.troubleshooting.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Review our
            {" "}
            <Link
              href="/services#electrical-troubleshooting-and-repairs"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              electrical troubleshooting service scope
            </Link>
            {" "}
            before scheduling.
          </p>
        </div>
      </section>

      <CTASection heading={`Need a ${content.areaName} electrician today?`} />

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Panel Upgrades &amp; Service Changes
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.panelUpgrades.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            See
            {" "}
            <Link
              href="/services#panel-upgrades-and-service-changes"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              panel upgrades and service changes
            </Link>
            {" "}
            for full scope details.
          </p>
        </div>
      </section>

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          EV Charger Installation in {content.areaName}
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.evChargers.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Visit our
            {" "}
            <Link
              href="/services#ev-charger-installation"
              className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              EV charger installation section
            </Link>
            {" "}
            to compare service options.
          </p>
        </div>
      </section>

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Residential &amp; Commercial Electrical Services
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.residentialCommercial.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Why Choose 45 EYE Electrical Solutions
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#d2e3fa]">
          {content.whyChooseBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Professional Electrical Services in {content.areaName}
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.longFormBlock.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-light space-y-5 rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          FAQs for {content.areaName} Service Calls
        </h2>
        <FAQAccordion items={faqs.slice(0, 6)} />
        <div className="flex flex-wrap gap-3">
          <CallCTA label="Call 646-710-0134" />
          <Link
            href="/contact#contact-request"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold tracking-wide text-gray-100 transition hover:bg-[rgba(255,255,255,0.05)]"
          >
            Request a Callback
          </Link>
        </div>
      </section>

      <ServiceAreasCoverage
        currentArea={content.areaName === "Long Island" ? "Long Island (Select Areas)" : content.areaName}
      />

      <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Reviews</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#d2e3fa]">
          Reviews available on Google. Ask for recent customer references.
        </p>
        {/* TODO: Add Google reviews embed here after profile embed policy is finalized. */}
      </section>

      <CTASection heading={`Need a ${content.areaName} electrician today?`} />
    </div>
  );
}
