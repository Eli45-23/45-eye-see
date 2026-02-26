import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/src/content/business";
import { CallCTA } from "@/src/components/CallCTA";
import { SITE_URL, buildSeoDescription, buildSeoTitle } from "@/src/lib/seo";
import { getLocalBusinessSchema } from "@/src/lib/schema";
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
  title: buildSeoTitle("Home"),
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
    images: [{ url: "/brand/logo-45-eye.jpg", width: 1200, height: 800, alt: business.brandName }],
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
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={geist.variable}>
      <body className="font-[var(--font-sans)] antialiased">
        <header className="sticky top-0 z-50 border-b border-[#d6e4f8]/80 bg-white/92 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src="/brand/logo-45-eye.jpg"
                alt={`${business.brandName} logo`}
                width={180}
                height={120}
                className="h-12 w-[72px] rounded-md border border-[#dce6f4] bg-white object-contain p-0.5"
                sizes="72px"
                priority
              />
              <div className="hidden min-w-0 sm:block">
                <p className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {business.businessNameLegal}
                </p>
                <p className="truncate text-sm font-semibold text-[#112742]">{business.publicName}</p>
              </div>
            </Link>

            <nav className="ml-auto hidden items-center gap-6 text-sm font-semibold text-[#19304a] md:flex" aria-label="Primary">
              <Link href="/" className="transition hover:text-[#0a66c2]">Home</Link>
              <Link href="/services" className="transition hover:text-[#0a66c2]">Services</Link>
              <Link href="/contact" className="transition hover:text-[#0a66c2]">Contact</Link>
            </nav>

            <CallCTA className="ml-2" label={`Call ${business.phone}`} />
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <footer className="mt-10 border-t border-[#dce7f8] bg-white/90">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
            <div>
              <h2 className="text-lg font-semibold text-[#10253f]">{business.locationLabel} Electrician</h2>
              <p className="mt-1 text-sm text-slate-600">
                Serving Manhattan, Queens, Brooklyn, Staten Island, and select Long Island areas.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Phone: {business.phone} · Email: {" "}
                <a className="font-semibold text-[#0a66c2]" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </p>
            </div>
            <CallCTA label={`Call ${business.phone}`} />
          </div>
        </footer>
      </body>
    </html>
  );
}
