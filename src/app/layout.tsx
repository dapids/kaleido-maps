import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaleido-maps.vercel.app"),
  title: {
    default: "Kaleido Maps",
    template: "%s | Kaleido Maps",
  },
  description: "Map, explore, and optimize your product's value stream with a collaborative framework that connects personas, needs, KPIs, solutions, and blockers.",
  applicationName: "Kaleido Maps",
  keywords: [
    "Kaleido Maps",
    "value stream mapping",
    "product strategy",
    "product discovery",
    "product management",
    "Wardley Maps",
    "event storming",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Kaleido Maps",
    description: "Map, explore, and optimize your product's value stream with a collaborative framework for product teams.",
    siteName: "Kaleido Maps",
    images: [
      {
        url: "/hero.webp",
        width: 1000,
        height: 500,
        alt: "Kaleido Maps value stream framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaleido Maps",
    description: "Map, explore, and optimize your product's value stream with a collaborative framework for product teams.",
    images: ["/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfbfb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
