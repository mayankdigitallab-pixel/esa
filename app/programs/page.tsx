import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, BookOpen, IndianRupee } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/data/programs";
import { whatsappLink } from "@/data/site";

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
  ],
};

export default function ProgramsPage() {
  return (
    <div>
      <section className="bg-cream-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">Programs</span>
              <span className="gold-divider" />
            </div>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              Coaching programs for{" "}
              <span className="text-gold-600 italic">every class</span>, from
              Grade 1 to Grade 12
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              Pick the stage your child is at. Each program is structured around
              chapter mastery, weekly tests and monthly review with parents.
              Stream-wise specialisation for Class 11 and 12.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-cream-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="space-y-16">
            {programs.map((p, i) => (
              <article
                key={p.slug}
                id={p.slug}
                className="grid scroll-mt-24 items-start gap-10 lg:grid-cols-[0.4fr_0.6fr]"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold-700">
                    {`Program 0${i + 1}`}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted">
                    {p.grades}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
                    {p.label}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-body">
                    {p.description}
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-body">
                    <div className="flex items-start gap-3">
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      <span>
                        <strong className="text-navy-900">Subjects:</strong>{" "}
                        {p.subjects.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      <span>
                        <strong className="text-navy-900">Schedule:</strong>{" "}
                        {p.schedule}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <IndianRupee className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      <span>
                        <strong className="text-navy-900">Fee:</strong>{" "}
                        {p.feeRange}
                      </span>
                    </div>
                  </div>
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
                <ul className="rounded border border-cream-200 bg-cream-50 p-7 space-y-4">
                  <p className="font-serif text-base font-semibold text-navy-900">
                    What this program includes
                  </p>
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-body">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article
              id="crash"
              className="grid scroll-mt-24 items-start gap-10 rounded border-2 border-gold-400 bg-cream-50 p-8 lg:grid-cols-[0.4fr_0.6fr] sm:p-10"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold-700">
                  Special Program
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
                  Crash Courses
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted">
                  Class 6 to 12
                </p>
                <p className="mt-4 text-sm leading-relaxed text-body">
                  4 to 8 week intensive courses before board exams. Full
                  syllabus revision, mock papers, time-management drills.
                  Designed for students who need a sharp push before exams.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={whatsappLink(
                      "Hello ESA, I want details on the Crash Course",
                    )}
                    target="_blank"
                    className="btn-gold"
                  >
                    Get Crash Course Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Compressed full-syllabus revision plan",
                  "10+ mock papers under exam conditions",
                  "Daily doubt sessions during the program",
                  "Subject-wise revision notes provided",
                  "One-on-one diagnostic test at the start",
                ].map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-body">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
