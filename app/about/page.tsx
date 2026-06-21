import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Award,
  Heart,
  TrendingUp,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | Best Coaching Institute in Rohini Since 2015",
  description:
    "Learn about Excellent Students' Academy, the trusted coaching institute in Rohini Sector 7 since 2015. Our story, mission and what makes ESA different for Class 1 to 12 students across North Delhi.",
  alternates: { canonical: "https://www.theesa.in/about" },
  keywords: [
    "about Excellent Students Academy",
    "ESA Rohini",
    "best coaching institute Rohini",
    "coaching history Rohini",
    "Chandan Prajapati ESA",
  ],
};

const values = [
  {
    icon: Heart,
    title: "Student-first teaching",
    description:
      "Every batch is small enough that no student goes unnoticed. Doubts get cleared in class, not at home.",
  },
  {
    icon: Target,
    title: "Exam-aligned discipline",
    description:
      "Weekly tests, monthly mock exams, chapter-wise review. Boards stop being scary because they are familiar.",
  },
  {
    icon: Award,
    title: "Faculty who care",
    description:
      "Our mentors stay with the same batches for years. Long-term coaching, not gig-style replacement teachers.",
  },
  {
    icon: TrendingUp,
    title: "Measurable improvement",
    description:
      "Monthly parent meetings with scorecards. Parents see the trajectory, not just the final result.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "Founded in Rohini Sector 7",
    description:
      "Chandan Prajapati, a B.Tech in Mechanical Engineering, started ESA with one room and three students. Word of mouth among Rohini parents did the rest.",
  },
  {
    year: "2018",
    title: "Expanded to senior secondary",
    description:
      "Added Class 11 and 12 batches for Science and Commerce streams. Hired specialist faculty for PCM, PCB and Commerce subjects.",
  },
  {
    year: "2020",
    title: "Pivoted through the pandemic",
    description:
      "Kept students on track with online classes through 2020 and 2021. Returned to full physical batches with stronger systems in place.",
  },
  {
    year: "2023",
    title: "Crossed 300+ enrolled students",
    description:
      "Grew across Rohini sectors and nearby localities. Added monthly parent meetings and structured weekly testing.",
  },
  {
    year: "2026",
    title: "9 years of consistent results",
    description:
      "Today ESA serves students from Rohini, Pitampura, Shalimar Bagh, Model Town and Ashok Vihar. 84% average board score in the last cycle.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="hidden" />
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">About ESA</span></div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              Nine years of patient,{" "}
              <span className="text-charcoal">disciplined</span> coaching
              in Rohini
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              Excellent Students&apos; Academy started in 2015 as a single-room
              tuition centre in Rohini Sector 7. Nine years later it remains
              what it has always been, a place where Class 1 to 12 students go
              to learn properly, not just to attend.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-neutral-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title={
                  <>
                    Built one batch at a time,{" "}
                    <span className="text-charcoal">in Rohini</span>
                  </>
                }
                description="ESA was started by Chandan Prajapati, an engineer who realised teaching was his real calling. The first batch had three students from Rohini Sector 7. Word of mouth among parents grew the institute from there."
              />
              <div className="space-y-5 text-base leading-relaxed text-body">
                <p>
                  Most coaching brands across Delhi NCR scale by hiring more
                  teachers, opening more centres and processing more students.
                  ESA grew the opposite way. We capped batch sizes. We kept the
                  same faculty teaching the same classes for years. We measured
                  ourselves on the average board score, not the number of
                  enrolments.
                </p>
                <p>
                  That choice has consequences. Our parents know every teacher
                  by name. Students who studied at ESA in Class 6 are still
                  here in Class 12. Many of them now refer their younger
                  siblings and cousins.
                </p>
                <p>
                  This is not the fastest way to grow a coaching business. It
                  is the only way we know to build one worth being part of.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded border-2 border-neutral-400" />
              <div className="relative aspect-[4/5] overflow-hidden rounded shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                  alt="Inside the Excellent Students' Academy classroom in Rohini Sector 7"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                Four values that shape{" "}
                <span className="text-charcoal">every batch</span>
              </>
            }
            description="If you sit in any ESA classroom, you will see these four things in action. They are not aspirational. They are operational."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded bg-neutral-50 text-charcoal">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-charcoal">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-neutral-200 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Journey"
            title={
              <>
                Nine years,{" "}
                <span className="text-charcoal">one neighbourhood</span>
              </>
            }
            description="A short timeline of how Excellent Students' Academy grew from one room to the institute it is today."
          />
          <ol className="relative space-y-10 border-l-2 border-neutral-200 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] flex h-12 w-12 items-center justify-center rounded-full border-2 border-neutral-400 bg-white text-xs font-semibold text-charcoal">
                  {t.year}
                </span>
                <h3 className="text-xl font-semibold text-charcoal">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {t.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-neutral-950 py-20 text-white sm:py-24">
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                  Visit ESA
                </span>
                <span className="h-px w-12 bg-neutral-400" />
              </div>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Come see a class in action.{" "}
                <span className="text-neutral-400">First one is free.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200">
                Whether you are looking for primary tuition or board prep
                coaching, the easiest way to judge ESA is to come watch a real
                batch. Book a free demo via WhatsApp or fill our short enquiry
                form.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#enquiry" className="btn-primary">
                  Book Free Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/faculty"
                  className="inline-flex items-center gap-2 rounded border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Meet our faculty
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "9+", label: "Years coaching", icon: Calendar },
                { value: "500+", label: "Students mentored", icon: Users },
                { value: "84%", label: "Avg board score", icon: TrendingUp },
                { value: "100%", label: "Pass rate", icon: Award },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded border border-neutral-800/60 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <s.icon className="h-5 w-5 text-neutral-400" />
                  <p className="mt-3 text-3xl font-semibold">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-neutral-300">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
