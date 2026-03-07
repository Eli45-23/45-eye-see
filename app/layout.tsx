import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/src/content/business";
import { Button } from "@/src/components/Button";
import { CallCTA } from "@/src/components/CallCTA";
import { FloatingCallbackStrip } from "@/src/components/FloatingCallbackStrip";
import { SITE_URL, buildSeoDescription, buildSeoTitle } from "@/src/lib/seo";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistLatin.woff2",
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: buildSeoTitle("Home"),
    template: `%s | ${business.brandName} (${business.publicName}) | NYC Electrician`,
  },
  description: buildSeoDescription(
    "Serving homes and businesses in Manhattan, Queens, Brooklyn, Staten Island, and select Long Island areas."
  ),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title: buildSeoTitle("Home"),
    description: buildSeoDescription(
      "NYC electrician for repairs, upgrades, and same-day service calls."
    ),
    url: SITE_URL,
    siteName: business.brandName,
    type: "website",
    locale: "en_US",
    images: [{ url: "/brand/logo-45-eye.png", width: 1200, height: 800, alt: business.brandName }],
  },
  twitter: {
    card: "summary_large_image",
    title: buildSeoTitle("Home"),
    description: buildSeoDescription(
      "Call for licensed and insured electrical service across NYC."
    ),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-[var(--font-sans)] antialiased">
        <header className="sticky top-0 z-50 border-b border-[rgba(148,163,184,0.2)] bg-[color:var(--surface)]/92 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src="/brand/logo-45-eye.png"
                alt={`${business.brandName} logo`}
                width={180}
                height={120}
                className="h-12 w-[84px] rounded-lg border border-[rgba(116,169,255,0.22)] bg-[#0d1320] object-contain p-1 shadow-[0_12px_28px_-18px_rgba(4,12,22,0.95)] transition will-change-[transform] sm:h-14 sm:w-[92px] lg:h-[3.9rem] lg:w-[102px]"
                sizes="(max-width: 640px) 72px, (max-width: 1024px) 78px, 92px"
              />
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--text)] sm:text-sm">
                  45 EYE Electrical Solutions
                </p>
                <p className="truncate text-[12px] font-medium text-[var(--muted)] sm:text-[13px]">
                  Eli the Electrician
                </p>
              </div>
            </Link>

            <nav
              className="hidden items-center gap-7 text-[13px] font-semibold tracking-[0.02em] text-[var(--muted)] md:flex"
              aria-label="Primary"
            >
              <Link href="/" className="transition hover:text-[var(--text)]">Home</Link>
              <Link href="/services" className="transition hover:text-[var(--text)]">Services</Link>
              <Link href="/contact" className="transition hover:text-[var(--text)]">Contact</Link>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <CallCTA className="px-4 py-2.5 text-sm" label={`Call ${business.phone}`} />
              <Button href="/contact#contact-request" variant="secondary" className="text-sm">
                Request callback
              </Button>
            </div>
          </div>
          <nav
            className="flex flex-col gap-2 border-t border-[rgba(148,163,184,0.14)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] md:hidden"
            aria-label="Primary"
          >
            <div className="mx-auto flex flex-wrap justify-center gap-3">
              <Link href="/" className="transition hover:text-[var(--text)]">
                Home
              </Link>
              <Link href="/services" className="transition hover:text-[var(--text)]">
                Services
              </Link>
              <Link href="/contact" className="transition hover:text-[var(--text)]">
                Contact
              </Link>
            </div>
            <div className="mx-auto flex flex-wrap justify-center gap-2">
              <CallCTA className="rounded-xl px-3 py-2.5 text-[12px] text-[var(--text)]" />
              <Button href="/contact#contact-request" variant="secondary" className="px-3 py-2 text-[12px]">
                Request callback
              </Button>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>

        <footer className="mt-10 border-t border-[var(--border)] bg-[var(--surface)] text-[var(--text)]">
          <div className="mx-auto grid w-full max-w-6xl gap-7 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
            <div>
              <h2 className="text-lg font-semibold text-[var(--text)]">45 EYE Electrical Solutions</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">Eli the Electrician</p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Phone:{" "}
                <a className="font-semibold text-[var(--accent)] hover:text-[#60a5fa]" href={`tel:+1${business.phone.replace(/\D/g, "")}`}>
                  {business.phone}
                </a>
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">Service areas:</p>
              <ul className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                {business.serviceAreas.map((area) => (
                  <li key={area} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1">
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[var(--muted)]">
                Licensed & insured NYC electrician providing residential and light commercial
                electrical services across Manhattan, Brooklyn, Queens, and Staten Island.
              </p>
            </div>
            <CallCTA label={`Call ${business.phone}`} />
          </div>
        </footer>

        <FloatingCallbackStrip />
      </body>
    </html>
  );
}
