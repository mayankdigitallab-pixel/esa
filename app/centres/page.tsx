import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { BranchesGrid } from "@/components/BranchesGrid";
import { centres } from "@/data/centres";
import { breadcrumbSchema, webPageSchema, jsonLd, shareMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Branches | ESA Coaching Centres in Delhi NCR & Lucknow",
  description:
    "ESA's three coaching centres: Rohini Sector 7, Rohini Sector 15 (Delhi) and Thakurganj (Lucknow). Addresses, in-charges, timings and phone.",
  alternates: { canonical: "https://www.theesa.in/centres" },
  keywords: [
    "ESA centres",
    "ESA branches",
    "coaching in Rohini",
    "coaching in Lucknow Thakurganj",
    "coaching centre near me Rohini",
    "tuition centre near me Delhi",
    "coaching centre address Rohini",
  ],
  ...shareMeta({
    title: "Our Branches | ESA Coaching Centres in Delhi NCR & Lucknow",
    description:
      "ESA's three coaching centres: Rohini Sector 7, Rohini Sector 15 (Delhi) and Thakurganj (Lucknow). Addresses, in-charges, timings and phone.",
    path: "/centres",
  }),
};

export default function CentresPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Our Branches", href: "/centres" },
  ]);
  const cityCount = new Set(centres.map((c) => c.city)).size;

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <script
        {...jsonLd(
          webPageSchema({
            type: "CollectionPage",
            path: "/centres",
            name: String(metadata.title),
            description: String(metadata.description),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: centres.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
              url: `https://www.theesa.in${c.landingPath}`,
            })),
          },
          }),
        )}
      />
      <PageBanner
        label="Our Branches"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        imageAlt="ESA coaching centre interior"
        heading={<>Three centres. One academy.</>}
        subtitle="Visit any ESA branch across Delhi and Lucknow. Same curriculum, same discipline, same board-focused mentoring - taught by faculty trained at our Rohini flagship."
        right={
          <BannerStatsRight
            stats={[
              { value: String(centres.length), label: "Branches" },
              { value: String(cityCount), label: "Cities" },
              { value: "11+", label: "Years running" },
              { value: "Free", label: "Demo at any branch" },
            ]}
          />
        }
      />

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Find your nearest centre"
            title="Visit, call or book a demo at any branch"
            description="Every ESA branch follows the same teaching framework set by our founder Mr. Chandan Prajapati. Walk in for a free demo - no fees and no pressure."
          />
          <div className="mt-12">
            <BranchesGrid centres={centres} />
          </div>

          <div className="mt-16 rounded border border-neutral-300 bg-white p-8 text-center shadow-sm">
            <p className="text-xl font-semibold text-charcoal sm:text-2xl">
              Not sure which branch is closest to you?
            </p>
            <p className="mt-2 text-sm text-body">
              Drop us a message on WhatsApp - we will guide you to the right centre.
            </p>
            <Link
              href="/contact#enquiry"
              className="mt-5 inline-flex items-center gap-2 rounded bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Book Free Demo Class
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
