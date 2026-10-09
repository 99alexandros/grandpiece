import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { restaurantJsonLd } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Restaurant italian în Timișoara`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["restaurant italian Timișoara", "Grand Piece", "paste", "pizza", "rezervări restaurant Timișoara"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: site.name,
    title: `${site.name} – Restaurant italian în Timișoara`,
    description: site.description,
    images: [{ url: images.ogImage, width: 1200, height: 630, alt: `${site.name} – logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [images.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e1511",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${jost.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#continut"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand"
        >
          Sari la conținut
        </a>
        <Navbar />
        <main id="continut" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
