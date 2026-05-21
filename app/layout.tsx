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
  openGraph: {
    title: "Masáže Krumvíř | Cristian Balaci",
    description: "Profesionální mobilní masáže v Krumvíři a okolí.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
