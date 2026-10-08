import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/data/site";

import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saveur.example.com"),
  title: {
    default: "Saveur | Seasonal fine dining on Alder Lane",
    template: "%s · Saveur",
  },
  description: SITE.description,
  applicationName: "Saveur",
  keywords: [
    "restaurant",
    "fine dining",
    "seasonal menu",
    "San Francisco restaurant",
    "reserve a table",
    "tasting menu",
    "Saveur",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Saveur",
    title: "Saveur | Seasonal fine dining on Alder Lane",
    description: SITE.description,
    url: "https://saveur.example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saveur | Seasonal fine dining on Alder Lane",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBF7F0",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  description: SITE.description,
  url: "https://saveur.example.com",
  telephone: SITE.phone,
  priceRange: "$$$",
  servesCuisine: ["Seasonal", "French", "Californian"],
  image: `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=75`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: "US",
  },
  sameAs: SITE.socials.map((social) => social.href),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "203" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "17:30",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "17:30",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "11:00",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
