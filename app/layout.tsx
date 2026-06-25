import type { Metadata, Viewport } from "next";
import { display, sans, mono } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hubert Heinze GmbH — Glasfachgroßhandel in Frohburg | Glas am Bau & in der Industrie",
    template: "%s | Hubert Heinze GmbH — Glasfachgroßhandel",
  },
  description:
    "Glasfachgroßhandel aus Frohburg (Sachsen): Beratung, Fachplanung und Veredelung aus einer Hand. Basisglas, Designglas, Fassadenglas, Raumglas & Systemglas für Bau und Industrie. Angebot in 2 Minuten anfordern.",
  keywords: [
    "Glasfachgroßhandel",
    "Glashandel Frohburg",
    "Glas am Bau",
    "Fassadenglas",
    "Sicherheitsglas",
    "ESG",
    "VSG",
    "Ganzglasdusche",
    "Glastüren",
    "Glas Sachsen",
    "Hubert Heinze GmbH",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: "Hubert Heinze GmbH — Glas am Bau & in der Industrie",
    description:
      "Ihr Glasfachgroßhandel aus Frohburg. Beratung, Fachplanung und Veredelung aus einer Hand — Basisglas bis Systemglas. Angebot in 2 Minuten anfordern.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hubert Heinze GmbH — Glasfachgroßhandel, Glas am Bau & in der Industrie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubert Heinze GmbH — Glas am Bau & in der Industrie",
    description:
      "Ihr Glasfachgroßhandel aus Frohburg. Beratung, Fachplanung und Veredelung aus einer Hand.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#001031",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: "Glashandel Heinze",
  description:
    "Glasfachgroßhandel für Bau und Industrie: Beratung, Fachplanung, Veredelung und Lieferung von Glas.",
  url: site.url,
  telephone: site.telefon,
  email: site.email,
  image: `${site.url}/og-image.png`,
  logo: `${site.url}/assets/logo.png`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.strasse,
    postalCode: "04654",
    addressLocality: site.ort,
    addressRegion: site.region,
    addressCountry: "DE",
  },
  sameAs: [site.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "07:00",
      closes: "13:00",
    },
  ],
  founder: { "@type": "Person", name: site.geschaeftsfuehrer },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
