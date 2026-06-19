import type { Metadata } from "next";
import { Fraunces, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TopBar } from "@/components/TopBar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theesa.in"),
  title: {
    default: "Excellent Students' Academy | Coaching & Tuition in Rohini, Delhi",
    template: "%s | Excellent Students' Academy",
  },
  description:
    "Excellent Students' Academy (ESA) Rohini Sector 7. Coaching and home tuition for Grades 1 to 12. Science, Commerce, Math. Weekly tests, demo classes, AC premises, expert faculty.",
  keywords: [
    "coaching in Rohini",
    "tuition in Rohini",
    "best coaching institute Delhi",
    "Class 11 12 coaching Rohini",
    "Science coaching Rohini",
    "Math tuition Rohini",
    "home tuition Rohini",
    "Excellent Students Academy",
  ],
  authors: [{ name: "Excellent Students' Academy" }],
  alternates: { canonical: "https://www.theesa.in" },
  openGraph: {
    title: "Excellent Students' Academy | Coaching & Tuition in Rohini",
    description:
      "Coaching and home tuition for Grades 1 to 12 in Rohini Sector 7, Delhi. Expert faculty, weekly tests, demo classes, nominal fees.",
    url: "https://www.theesa.in",
    siteName: "Excellent Students' Academy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excellent Students' Academy | Rohini",
    description:
      "Coaching and home tuition for Grades 1 to 12 in Rohini Sector 7, Delhi.",
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
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-ink">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
