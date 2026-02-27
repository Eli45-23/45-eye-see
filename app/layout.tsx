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
        <header className="sticky top-0 z-50 border-b border-[#23324a]/80 bg-[#0b1220]/78 backdrop-blur-xl">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:px-8">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src="/brand/logo-45-eye.jpg"
                alt={`${business.brandName} logo`}
                width={180}
                height={120}
                className="h-12 w-[72px] rounded-md border border-[#34435e] bg-[#111827] object-contain p-0.5 shadow-[0_10px_24px_-20px_rgba(0,0,0,0.6)]"
                sizes="72px"
                priority
              />
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold uppercase tracking-[0.12em] text-[#dbeafe] sm:text-sm">
                  45 EYE Electrical Solutions
                </p>
                <p className="truncate text-[12px] font-medium text-slate-400 sm:text-[13px]">
                  Eli the Electrician
                </p>
              </div>
            </Link>

            <nav
              className="col-span-2 row-start-2 flex items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm font-semibold text-[#cbd5e1] lg:col-span-1 lg:row-start-1 lg:justify-center lg:overflow-visible lg:pb-0"
              aria-label="Primary"
            >
              <Link href="/" className="transition hover:text-[#0a66c2]">Home</Link>
              <Link href="/services" className="transition hover:text-[#0a66c2]">Services</Link>
              <Link href="/contact" className="transition hover:text-[#0a66c2]">Contact</Link>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <CallCTA className="shadow-[0_16px_34px_-22px_rgba(10,102,194,0.7)]" label={`Call ${business.phone}`} />
              <a
                href={`mailto:${business.email}`}
                className="hidden text-xs font-medium text-slate-400 transition hover:text-[#7ec3ff] sm:inline"
              >
                {business.email}
              </a>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <footer className="mt-10 border-t border-[#1d3557] bg-[#0d1a2d] text-[#d9e6f8]">
          <div className="mx-auto grid w-full max-w-6xl gap-7 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
            <div>
              <h2 className="text-lg font-semibold text-white">45 EYE Electrical Solutions</h2>
              <p className="mt-1 text-sm text-[#b8c8de]">Eli the Electrician</p>
              <p className="mt-3 text-sm text-[#c1d1e8]">
                Phone:{" "}
                <a className="font-semibold text-[#74b7ff]" href={`tel:+1${business.phone.replace(/\D/g, "")}`}>
                  {business.phone}
                </a>
                {" · "}
                Email:{" "}
                <a className="font-semibold text-[#74b7ff]" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </p>
              <p className="mt-3 text-sm text-[#b8c8de]">Service areas:</p>
              <ul className="mt-2 flex flex-wrap gap-2 text-xs text-[#d6e2f5]">
                {business.serviceAreas.map((area) => (
                  <li key={area} className="rounded-full border border-[#2a4365] bg-[#112640] px-3 py-1">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <CallCTA label={`Call ${business.phone}`} />
          </div>
        </footer>
      </body>
    </html>
  );
}
