import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masáže Krumvíř | Cristian Balaci",
  description:
    "Profesionální mobilní masáže v Krumvíři a okolí. Sportovní, rekondiční, relaxační masáže, baňkování a tejping. Přijedu přímo za vámi.",
  keywords:
    "masáže Krumvíř, sportovní masáž, relaxační masáž, baňkování, tejping, mobilní masér",
  metadataBase: new URL("https://www.masazekrumvir.cz"),
  alternates: { canonical: "https://www.masazekrumvir.cz" },
  openGraph: {
    title: "Masáže Krumvíř | Cristian Balaci",
    description: "Profesionální mobilní masáže v Krumvíři a okolí.",
    url: "https://www.masazekrumvir.cz",
    locale: "cs_CZ",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.masazekrumvir.cz",
  name: "Masáže Krumvíř – Cristian Balaci",
  description:
    "Profesionální mobilní masáže v Krumvíři a okolí. Sportovní, rekondiční, relaxační masáže, baňkování a tejping.",
  url: "https://www.masazekrumvir.cz",
  telephone: "+420734440215",
  email: "balacicristian8@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Krumvíř 291",
    addressLocality: "Krumvíř",
    postalCode: "691 73",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9747,
    longitude: 16.9203,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.9747,
      longitude: 16.9203,
    },
    geoRadius: "30000",
  },
  priceRange: "$$",
  image: "https://www.masazekrumvir.cz/logo.svg",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Masérské služby",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sportovní masáž" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rekondiční masáž" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Relaxační masáž" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baňkování" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tejping" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
