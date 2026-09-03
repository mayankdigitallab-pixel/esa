import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, BookOpen, IndianRupee } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { programs } from "@/data/programs";
import { classes } from "@/data/classes";
import { whatsappLink } from "@/data/site";
import { breadcrumbSchema, courseListSchema, faqSchema, jsonLd, shareMeta } from "@/lib/seo";
import { FeeBlock } from "@/components/FeeBlock";

const programFaqs = [
  {
    question: "Which program is right for my child's class?",
    answer:
      "Foundation (Class 1-5) builds core Math, English and EVS basics. Middle School (Class 6-8) adds Science and Social Science with weekly tests. Board Prep (Class 9-10) is full CBSE board preparation. Senior Secondary (Class 11-12) is stream-wise coaching in Science, Commerce or Arts. Call or WhatsApp us and we'll confirm the right batch for your child's class and current level.",
  },
  {
    question: "Can my child switch streams or subjects after joining Class 11?",
    answer:
      "Stream changes are easiest in the first two to three weeks, before batches settle into their syllabus pace. Talk to us early if your child is unsure between Science, Commerce or Arts - we can run a short diagnostic conversation to help decide.",
  },
  {
    question: "Does Senior Secondary coaching cover JEE or NEET as well as boards?",
    answer:
      "Yes, for Class 11-12 Science (PCM/PCB) students. The teaching sequence covers the board syllabus first for concept clarity, then layers JEE/NEET-pattern practice on top, so board scores are never sacrificed for competitive prep.",
  },
  {
    question: "What do the Crash Courses cover, and who are they for?",
    answer:
      "Crash Courses are 4 to 8 week intensive programs for Class 6 to 12 students who need a focused push before board exams: full syllabus revision, 10+ mock papers under exam conditions, and daily doubt sessions. Best suited for students revisiting the full syllabus close to exams.",
  },
  {
    question: "What are the program fees?",
    answer:
      "Fees are nominal and vary by program and subject combination - Foundation and Middle School are priced lower than Board Prep and Senior Secondary stream coaching. Exact numbers are confirmed on a call or WhatsApp message, and the quoted figure never changes once you visit.",
  },
  {
    question: "Can I see a program in action before enrolling?",
    answer:
      "Yes - every program includes 7 days of free demo classes. Your child sits in the actual batch for that program, meets the faculty, and you decide only after seeing the real teaching style.",
  },
];

export const metadata: Metadata = {
  title: "Programs & Courses | Class 1 to 12 Coaching in Rohini",
  description:
    "Coaching programs for Class 1 to 12 at Excellent Students' Academy Rohini. Foundation, Middle School, Board Prep and Senior Secondary streams. Math, Science, Commerce. View details and fees.",
  alternates: { canonical: "https://www.theesa.in/programs" },
  keywords: [
    "Class 11 coaching Rohini",
    "Class 12 coaching Rohini",
    "Class 10 board coaching Rohini",
    "Class 9 tuition Rohini",
    "Class 6 to 8 tuition Rohini",
    "primary tuition Rohini",
    "PCM coaching Rohini",
    "PCB coaching Rohini",
    "Commerce coaching Rohini",
    "crash course Rohini",
    "CBSE coaching programs Delhi",
    "coaching fees Class 1 to 12 Rohini",
    "foundation course Rohini",
  ],
  ...shareMeta({
    title: "Programs & Courses | Class 1 to 12 Coaching in Rohini",
    description:
      "Coaching programs for Class 1 to 12 at Excellent Students' Academy Rohini. Foundation, Middle School, Board Prep and Senior Secondary streams. Math, Science, Commerce. View details and fees.",
    path: "/programs",
  }),
};

export default function ProgramsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
  ]);
  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <script {...jsonLd(courseListSchema())} />
      <script {...jsonLd(faqSchema(programFaqs))} />
      <PageBanner
        label="Our Programs"
        image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Students in ESA classroom"
        heading={<>Coaching programs for Class 1 to 12 - built around weekly tests.</>}
        subtitle="Foundation programs, middle school strengthening, Class 9-10 board prep, and Class 11-12 stream-specific coaching. Pick the right program for your child's stage."
        right={
          <BannerStatsRight
            stats={[
              { value: "1-12", label: "Classes covered" },
              { value: "12+", label: "Subjects taught" },
              { value: "84%", label: "Avg score · 2026 batch" },
              { value: "7 days", label: "Free demo" },
            ]}
          />
        }
      />

      <section className="border-t border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <Container>
          <div className="space-y-8">
            {programs.map((p, i) => {
              const accent = i % 2 === 0 ? "teal" : "red";
              const bg =
                accent === "teal"
                  ? "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 65%)"
                  : "linear-gradient(135deg, #FFEBEE 0%, #FFFFFF 65%)";
              const haloColor = accent === "teal" ? "#00BCD4" : "#E53935";
              const numColor = accent === "teal" ? "#00BCD4" : "#E53935";
              return (
                <article
                  key={p.slug}
                  id={p.slug}
                  className="relative grid scroll-mt-24 items-start gap-8 overflow-hidden rounded-2xl border border-neutral-200 p-7 shadow-sm sm:p-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12"
                  style={{ background: bg }}
                >
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl"
                    style={{ background: haloColor }}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white shadow-md ${
                          accent === "teal" ? "bg-teal-500" : "bg-red-500"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="text-[11px] font-bold uppercase tracking-[0.22em]"
                        style={{ color: numColor }}
                      >
                        Program 0{i + 1}
                      </span>
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-charcoal-soft">
                      {p.grades}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
                      {p.label}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-charcoal-soft sm:text-[15px]">
                      {p.description}
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-charcoal-soft">
                      <div className="flex items-start gap-3">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-charcoal" />
                        <span>
                          <strong className="text-charcoal">Subjects:</strong>{" "}
                          {p.subjects.join(", ")}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-charcoal" />
                        <span>
                          <strong className="text-charcoal">Schedule:</strong>{" "}
                          {p.schedule}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <IndianRupee className="mt-0.5 h-4 w-4 shrink-0 text-charcoal" />
                        <span>
                          <strong className="text-charcoal">Fee:</strong>{" "}
                          {p.feeRange}
                        </span>
                      </div>
                    </div>
                    {(() => {
                      const relatedClasses = classes.filter((c) => c.programSlug === p.slug);
                      return relatedClasses.length > 0 ? (
                        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                          <span className="font-semibold text-charcoal-soft">Class pages:</span>
                          {relatedClasses.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/classes/${c.slug}`}
                              className="font-semibold text-teal-700 hover:text-red-600"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      ) : null;
                    })()}
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        href={whatsappLink(
                          `Hello ESA, please share details for ${p.label} (${p.grades})`,
                        )}
                        target="_blank"
                        className="btn-primary"
                      >
                        Enquire on WhatsApp
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/contact#enquiry" className="btn-outline">
                        Book Free Demo
                      </Link>
                    </div>
                  </div>
                  <div
                    className="relative rounded-2xl border border-neutral-200 bg-white/80 p-7 backdrop-blur-sm"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
                      What this program includes
                    </p>
                    <ul className="mt-5 space-y-3.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-charcoal-soft">
                          <CheckCircle2
                            className={`mt-0.5 h-5 w-5 shrink-0 ${
                              accent === "teal" ? "text-teal-500" : "text-red-500"
                            }`}
                            strokeWidth={2}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}

            <article
              id="crash"
              className="relative grid scroll-mt-24 items-start gap-8 overflow-hidden rounded-2xl border border-neutral-200 p-7 shadow-sm sm:p-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12"
              style={{
                background:
                  "linear-gradient(135deg, #1A1A1A 0%, #2E2E2E 60%, #1A1A1A 100%)",
              }}
            >
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500/30 blur-3xl"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-teal-500/25 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-xl font-bold text-white shadow-md">
                    ★
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-400">
                    Special Program
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                  Class 6 to 12
                </p>
                <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  Crash Courses
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-[15px]">
                  4 to 8 week intensive courses before board exams. Full syllabus revision, mock papers, time-management drills. Designed for students who need a sharp push before exams.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={whatsappLink("Hello ESA, I want details on the Crash Course")}
                    target="_blank"
                    className="btn-primary"
                  >
                    Get Crash Course Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">
                  What this program includes
                </p>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "Compressed full-syllabus revision plan",
                    "10+ mock papers under exam conditions",
                    "Daily doubt sessions during the program",
                    "Subject-wise revision notes provided",
                    "One-on-one diagnostic test at the start",
                  ].map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" strokeWidth={2} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <FeeBlock />

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title={<>Questions parents ask about our <span className="text-charcoal">programs</span></>}
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-5">
            {programFaqs.map((f) => (
              <div
                key={f.question}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <h3 className="text-base font-bold text-charcoal">{f.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
