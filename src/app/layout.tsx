import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { restaurantJsonLd } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    images: [{ url: images.ogImage, width: 1200, height: 800, alt: `${site.name} – interior` }],
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
  themeColor: "#14261f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#continut"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-pine"
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
