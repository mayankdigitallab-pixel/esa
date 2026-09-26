import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TopBar } from "@/components/TopBar";
import { StickyDemoCta } from "@/components/StickyDemoCta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theesa.in"),
  // No title template: every page sets its own complete title (kept under
  // 60 characters), and a brand suffix pushed most of them past that limit.
  title: "Excellent Students' Academy | Coaching in Delhi & Lucknow",
  description:
    "Excellent Students' Academy (ESA) - Class 1 to 12 CBSE coaching in Delhi NCR and Lucknow. Three centres: Rohini Sector 7 & Rohini Sector 15 (North-West Delhi NCR) and Thakurganj (Lucknow). Weekly tests, demo classes, expert faculty.",
  keywords: [
    "coaching in Rohini",
    "tuition in Rohini",
    "coaching in Delhi NCR",
    "best coaching institute in Delhi NCR",
    "CBSE coaching Delhi NCR",
    "coaching in North West Delhi",
    "coaching in Lucknow",
    "coaching in Thakurganj",
    "best coaching institute Delhi",
    "Class 11 12 coaching Rohini",
    "Excellent Students Academy",
  ],
  authors: [{ name: "Excellent Students' Academy" }],
  // No default canonical here - an inherited one would point every page that
  // forgets its own canonical (including 404s) at the homepage.
  openGraph: {
    title: "Excellent Students' Academy | Coaching in Delhi NCR & Lucknow",
    description:
      "Class 1 to 12 CBSE coaching across Delhi NCR and Lucknow - Rohini Sector 7 & 15 (North-West Delhi NCR) and Thakurganj (Lucknow). Expert faculty, weekly tests, demo classes.",
    url: "https://www.theesa.in/",
    siteName: "Excellent Students' Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Students and faculty at Excellent Students' Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excellent Students' Academy | Delhi NCR & Lucknow",
    description:
      "Class 1 to 12 CBSE coaching across Delhi NCR (Rohini) and Lucknow (Thakurganj).",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-ink">
        <TopBar />
        <Header />
        <main className="w-full flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyDemoCta />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5N3YC5CZFV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5N3YC5CZFV');
          `}
        </Script>
      </body>
    </html>
  );
}
