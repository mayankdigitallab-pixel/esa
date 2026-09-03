import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { classes } from "@/data/classes";
import { breadcrumbSchema, jsonLd, shareMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Classes 6 to 12 Coaching | ESA Coaching Centre Rohini",
  description:
    "Explore ESA Coaching Centre's Class 6 to Class 12 programs in Rohini - subjects, teaching approach, weekly tests, doubt support and outcomes for every class.",
  alternates: { canonical: "https://www.theesa.in/classes" },
  keywords: [
    "Class 6 coaching Rohini",
    "Class 7 coaching Rohini",
    "Class 8 coaching Rohini",
    "Class 9 coaching Rohini",
    "Class 10 coaching Rohini",
    "Class 11 coaching Rohini",
    "Class 12 coaching Rohini",
    "classwise coaching Rohini",
  ],
  ...shareMeta({
    title: "Classes 6 to 12 Coaching | ESA Coaching Centre Rohini",
    description:
      "Explore ESA Coaching Centre's Class 6 to Class 12 programs in Rohini - subjects, teaching approach, weekly tests, doubt support and outcomes for every class.",
    path: "/classes",
  }),
};

export default function ClassesHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Classes", href: "/classes" },
  ]);

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <PageBanner
        label="Classes 6 to 12"
        image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Students in an ESA classroom"
        heading={<>Find the right class page for your child.</>}
        subtitle="Every class from 6 to 12 has its own page - subjects taught, teaching approach, testing rhythm, doubt support and outcomes, specific to that year."
      />

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Classes 6-12"
            title={<>Class-wise coaching at <span className="text-charcoal">ESA Rohini</span></>}
            description="Middle School (6-8), Board Prep (9-10) and Senior Secondary (11-12) - each class has its own dedicated page with real detail, not a copy-paste template."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((c) => (
              <Link
                key={c.slug}
                href={`/classes/${c.slug}`}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
                  {c.bandLabel}
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-charcoal">
                  {c.label}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-soft">
                  {c.subjects.slice(0, 4).join(", ")}
                  {c.subjects.length > 4 ? " and more" : ""}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 transition group-hover:text-red-600">
                  View {c.label} page
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-charcoal py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Not sure which class or stream fits your child?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Call or WhatsApp us with your child&apos;s current class and school, and we&apos;ll point you to the right batch - or book a free 7-day demo directly.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact#enquiry" className="btn-primary">
                Book Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore programs
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
