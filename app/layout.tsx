import type { Metadata } from "next";
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
  title: {
    default: "Excellent Students' Academy | Coaching in Delhi & Lucknow",
    template: "%s | Excellent Students' Academy",
  },
  description:
    "Excellent Students' Academy (ESA) - coaching for Grades 1 to 12 across four centres: Rohini Sector 7, Rohini Sector 15, Shakurpur (Delhi) and Thakurganj (Lucknow). Weekly tests, demo classes, expert faculty.",
  keywords: [
    "coaching in Rohini",
    "tuition in Rohini",
    "coaching in Lucknow",
    "coaching in Thakurganj",
    "coaching in Shakurpur",
    "best coaching institute Delhi",
    "Class 11 12 coaching Rohini",
    "Excellent Students Academy",
  ],
  authors: [{ name: "Excellent Students' Academy" }],
  alternates: { canonical: "https://www.theesa.in" },
  openGraph: {
    title: "Excellent Students' Academy | Coaching in Delhi & Lucknow",
    description:
      "Coaching for Grades 1 to 12 across four centres in Delhi (Rohini Sec-7, Rohini Sec-15, Shakurpur) and Lucknow (Thakurganj). Expert faculty, weekly tests, demo classes.",
    url: "https://www.theesa.in",
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
    title: "Excellent Students' Academy | Delhi & Lucknow",
    description:
      "Coaching for Grades 1 to 12 across Delhi (Rohini, Shakurpur) and Lucknow (Thakurganj).",
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
      </body>
    </html>
  );
}
