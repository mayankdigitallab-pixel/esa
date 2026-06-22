import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { FacultyGrid } from "@/components/FacultyGrid";
import { faculty } from "@/data/faculty";

export const metadata: Metadata = {
  title: "Our Faculty | Expert Teachers at ESA Rohini",
  description:
    "Meet the faculty at Excellent Students' Academy Rohini. Experienced mentors with 6+ years coaching Math, Science, Commerce and English for Class 1 to 12 CBSE and ICSE.",
  alternates: { canonical: "https://www.theesa.in/faculty" },
  keywords: [
    "ESA faculty Rohini",
    "best Math teacher Rohini",
    "best Science teacher Rohini",
    "Chandan Prajapati ESA",
    "expert tutors Rohini",
  ],
};

export default function FacultyPage() {
  return (
    <div>
      <PageBanner
        label="Our Faculty"
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
        imageAlt="ESA faculty teaching students in Rohini"
        heading={<>Mentors who teach with conviction and care.</>}
        subtitle="Six senior faculty members. Postgraduates and B.Tech holders with 6+ years coaching across CBSE and ICSE. They stay with the same batches for years - not gig-style replacement teachers."
        right={
          <BannerStatsRight
            stats={[
              { value: "6+", label: "Senior faculty" },
              { value: "6+ yrs", label: "Avg experience" },
              { value: "100%", label: "Subject specialists" },
              { value: "WhatsApp", label: "Direct mentor access" },
            ]}
          />
        }
      />

      <section className="border-t border-neutral-200 bg-white py-20 sm:py-24">
        <Container>
          <FacultyGrid items={faculty} />
          <div className="mt-16 rounded border border-neutral-300 bg-neutral-50 p-8 text-center">
            <p className="text-xl font-semibold text-charcoal sm:text-2xl">
              Want to know which mentor will teach your child?
            </p>
            <p className="mt-2 text-sm text-body">
              Book a free demo. You will sit in their actual class.
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
