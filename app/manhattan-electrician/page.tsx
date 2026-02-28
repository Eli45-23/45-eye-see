import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/src/content/business";
import { boroughLandingPages } from "@/src/content/boroughLandingPages";
import { CallCTA } from "@/src/components/CallCTA";
import { SITE_URL } from "@/src/lib/seo";

const content = boroughLandingPages.find((item) => item.slug === "manhattan-electrician")!;

const pageTitle = "Manhattan Electrician | 45 EYE Electrical Solutions";
const pageDescription =
  "Manhattan electrician for troubleshooting, panel upgrades, EV charger installation, and code-aware residential and commercial electrical service.";

const serviceCards = [
  {
    title: "Electrical Troubleshooting",
    description: "Diagnosis-first service for breaker trips, flicker issues, and partial power loss.",
    href: "/services#electrical-troubleshooting-and-repairs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Panel Upgrades",
    description: "Panel and service changes for modern load demands and safer operation.",
    href: "/services#panel-upgrades-and-service-changes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M4 21h16M6 21V5h12v16M9 9h2M13 9h2M9 13h2M13 13h2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "EV Charger Installation",
    description: "Level 2 charger setup with load checks and dedicated circuit planning.",
    href: "/services#ev-charger-installation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M9 8V3M15 8V3M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Residential Electrical",
    description: "Service for apartments, co-ops, condos, and brownstones across Manhattan.",
    href: "/services#outlet-switch-and-gfci-upgrades",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M9 18h6M10 22h4M8.5 14.5C7 13.4 6 11.6 6 9.5A6 6 0 0 1 12 3.5a6 6 0 0 1 6 6c0 2.1-1 3.9-2.5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Commercial Electrical",
    description: "Retail storefront and office electrical support with minimal downtime.",
    href: "/services#commercial-electrical-service-calls",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="size-5">
        <path d="M3 9h18v10H3zM8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 14h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/manhattan-electrician`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/manhattan-electrician`,
    siteName: business.brandName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

function ManhattanCtaBand() {
  return (
    <section className="section-elevated rounded-3xl border border-[#2a3d58] p-6 ui-shadow-md sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">Need a Manhattan electrician today?</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        <CallCTA label="Call 646-710-0134" />
        <Link
          href="/contact#contact-request"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold tracking-wide text-gray-100 transition hover:bg-[rgba(255,255,255,0.05)]"
        >
          Request a Callback
        </Link>
      </div>
    </section>
  );
}

export default function ManhattanElectricianPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1726] via-[#111827] to-[#1b2230] shadow-xl shadow-black/30">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8cbff6]">
              Manhattan Electrical Services
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Manhattan Electrician
            </h1>
            <p className="mt-3 text-lg font-medium text-[#dbeafe]">
              Licensed &amp; Insured NYC Electrical Contractor
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#c9d7ea]">
              Electrical troubleshooting, panel upgrades, EV charger installation, and residential
              &amp; commercial electrical service across Manhattan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallCTA label="Call 646-710-0134" />
              <Link
                href="/contact#contact-request"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold tracking-wide text-gray-100 transition hover:bg-[rgba(255,255,255,0.05)]"
              >
                Request a Callback
              </Link>
            </div>
            <p className="mt-5 text-xs font-medium tracking-wide text-[#9fb5d4]">
              Owner-Operated • Licensed • Insured • Manhattan Focused
            </p>
            <p className="mt-4 text-xs leading-relaxed text-[#95aac7]">
              Serving Upper East Side, Upper West Side, Harlem, Midtown, Financial District, SoHo,
              Tribeca, and nearby Manhattan neighborhoods.
            </p>
          </div>

          <div className="relative min-h-[280px] border-t border-white/10 lg:min-h-[460px] lg:border-l lg:border-t-0">
            {/* Keep this image compressed around 250-400KB for fast LCP while preserving detail. */}
            <Image
              src="/images/hero-emt.jpg"
              alt="Clean EMT electrical installation in Manhattan"
              fill
              unoptimized
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/70 via-[#0b1220]/20 to-transparent lg:bg-gradient-to-l lg:from-[#0b1220]/10 lg:via-[#0b1220]/35 lg:to-[#0b1220]/80" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((card) => (
          <article
            key={card.title}
            className="section-light rounded-2xl border border-white/10 p-5 shadow-lg shadow-black/20"
          >
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#0a66c2]/20 text-[#7ec3ff] ring-1 ring-[#2d4f73]">
              {card.icon}
            </div>
            <h2 className="mt-3 text-lg font-semibold text-white">{card.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#c9d7ea]">{card.description}</p>
            <Link
              href={card.href}
              className="mt-4 inline-flex text-sm font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              View service details
            </Link>
          </article>
        ))}
      </section>

      <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Licensed &amp; Insured NYC Electrician
        </h2>
        <ul className="mt-4 grid gap-2 text-sm text-[#d2e3fa] sm:grid-cols-2">
          <li className="section-elevated rounded-xl border border-white/10 px-3 py-2">
            Owner-operated service (Eli the Electrician)
          </li>
          <li className="section-elevated rounded-xl border border-white/10 px-3 py-2">
            Troubleshooting-first approach
          </li>
          <li className="section-elevated rounded-xl border border-white/10 px-3 py-2">
            Clean finish standards
          </li>
          <li className="section-elevated rounded-xl border border-white/10 px-3 py-2">
            Clear communication &amp; scheduling updates
          </li>
        </ul>
      </section>

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Electrical Troubleshooting in Manhattan
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          <p>{content.paragraphs[0]}</p>
          <p>
            {content.paragraphs[1]}
            {" "}
            You can review our
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

      <ManhattanCtaBand />

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Panel Upgrades &amp; Service Changes
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.paragraphs[2]}
          {" "}
          For related scope details, see
          {" "}
          <Link
            href="/services#panel-upgrades-and-service-changes"
            className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
          >
            panel upgrades and service changes
          </Link>
          .
        </p>
      </section>

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          EV Charger Installation in Manhattan
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.paragraphs[3]}
          {" "}
          You can also review our
          {" "}
          <Link
            href="/services#ev-charger-installation"
            className="font-semibold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
          >
            EV charger installation service details
          </Link>
          .
        </p>
      </section>

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Residential &amp; Commercial Electrical Services
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#d2e3fa] sm:text-[15px]">
          {content.paragraphs[4]}
        </p>
      </section>

      <section className="section-light rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Why Choose 45 EYE Electrical Solutions
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#d2e3fa]">
          <li>Licensed and insured service with code-aware electrical decisions.</li>
          <li>Troubleshooting-first process before major replacement recommendations.</li>
          <li>Clean finish standards for occupied apartments, co-ops, offices, and storefronts.</li>
          <li>Clear communication on findings, scope options, and scheduling windows.</li>
          <li>Owner-operated execution with practical, safety-first service calls.</li>
        </ul>
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

      <section className="section-elevated rounded-3xl border border-gray-800/70 p-6 ui-shadow-md sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Reviews</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#d2e3fa]">
          Reviews available on Google. Ask for recent customer references.
        </p>
        {/* TODO: Add Google reviews embed here after profile embed policy is finalized. */}
      </section>

      <ManhattanCtaBand />
    </div>
  );
}
