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
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { faculty } from "@/data/faculty";

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
      <PageBanner
        label="About ESA"
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Excellent Students' Academy classroom in Rohini"
        heading={<>Eleven years of patient, disciplined coaching in Rohini.</>}
        subtitle="Excellent Students' Academy started in 2015 as a single-room tuition centre in Rohini Sector 7. Eleven years later it remains what it has always been - a place where Class 1 to 12 students go to learn properly, not just to attend."
        right={
          <BannerStatsRight
            stats={[
              { value: "11", label: "Years of coaching" },
              { value: "500+", label: "Students mentored" },
              { value: "84%", label: "Average board score" },
              { value: "100%", label: "Pass percentage" },
            ]}
          />
        }
      />

      {/* FOUNDER / CEO section just below banner */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />
        <Container className="relative">
          {(() => {
            const founder = faculty[0];
            return (
              <div className="grid items-center gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16 xl:gap-20">
                {/* Photo column */}
                <div className="relative mx-auto w-full max-w-[360px] lg:mx-0">
                  <div className="absolute -left-3 -top-3 hidden h-20 w-20 rounded-2xl border-2 border-teal-500 sm:block" aria-hidden />
                  <div className="absolute -right-3 -bottom-3 hidden h-24 w-24 rounded-2xl bg-red-500 sm:block" aria-hidden />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl">
                    <Image
                      src={founder.image}
                      alt={`${founder.name}, Founder, CEO and Director of Excellent Students' Academy Rohini`}
                      fill
                      sizes="(max-width: 1024px) 360px, 360px"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-5">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                        Founder, CEO &amp; Director
                      </div>
                      <p className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {founder.name}
                      </p>
                      <p className="mt-1 text-xs text-white/75">{founder.qualification}</p>
                    </div>
                  </div>
                </div>

                {/* Content column */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                      Meet The Founder
                    </span>
                    <span className="h-px w-12 bg-teal-500" />
                  </div>
                  <h2
                    className="mt-6 m-0 text-charcoal"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.4rem)",
                      fontWeight: 700,
                      lineHeight: 1.04,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Built by a mentor who still{" "}
                    <span style={{ color: "#00BCD4" }}>teaches every day</span>.
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-charcoal-soft sm:text-[17px]">
                    <strong className="font-bold text-charcoal">{founder.name.replace("Mr. ", "")}</strong>{" "}
                    founded <strong className="font-bold text-charcoal">Excellent Students&apos; Academy in 2015</strong> with one room and three students.{" "}
                    <strong className="font-bold text-charcoal">Eleven years later</strong> he is still in the classroom - personally mentoring{" "}
                    <strong className="font-bold text-charcoal">every Class 11 and 12 Mathematics batch</strong> at our Rohini Sector 7 centre.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-charcoal-soft sm:text-[17px]">
                    An engineer by training{" "}
                    <strong className="font-bold text-charcoal">(B.Tech, Mechanical)</strong>, he chose teaching over a corporate career when he realised how rarely students get a teacher who explains concepts{" "}
                    <strong className="font-bold text-charcoal">from first principles</strong>. That belief still shapes{" "}
                    <strong className="font-bold text-charcoal">every batch at ESA today</strong>.
                  </p>

                  {/* Pull quote */}
                  <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-neutral-50 p-6">
                    <p className="text-base font-medium leading-relaxed text-charcoal sm:text-lg">
                      &ldquo;I do not want ESA to grow faster than it can teach well. Every batch I add, I want to be able to look the parents in the eye after the result.&rdquo;
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                      {founder.name.replace("Mr. ", "")} · Founder, CEO &amp; Director
                    </p>
                  </div>

                  {/* Stats grid */}
                  <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-neutral-200 pt-7 sm:grid-cols-4">
                    {[
                      { v: "11", l: "Years teaching", c: "teal" },
                      { v: "500+", l: "Students mentored", c: "red" },
                      { v: "Math", l: "Class 11-12", c: "teal" },
                      { v: "B.Tech", l: "Engineering grad", c: "red" },
                    ].map((s) => (
                      <div key={s.l}>
                        <p
                          className="text-2xl font-bold tracking-tight"
                          style={{ color: s.c === "teal" ? "#00BCD4" : "#E53935" }}
                        >
                          {s.v}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                          {s.l}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/contact#enquiry" className="btn-primary">
                      Talk to Sir directly
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/faculty"
                      className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700"
                    >
                      Meet the full faculty
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
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
                  src="/gallery/g30.jpg"
                  alt="Excellent Students' Academy signboard at C7/72, Sector 7 Rohini"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[30%_center]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES with brand gradient cards */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title={<>Four values that shape <span className="text-teal-600">every batch</span></>}
            description="If you sit in any ESA classroom, you will see these four things in action. They are not aspirational. They are operational."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }, i) => {
              const palette = [
                { from: "#E0F7FA", to: "#FFFFFF", ring: "#00BCD4", icon: "bg-teal-500 text-white" },
                { from: "#FFEBEE", to: "#FFFFFF", ring: "#E53935", icon: "bg-red-500 text-white" },
                { from: "#E0F7FA", to: "#FFFFFF", ring: "#00BCD4", icon: "bg-teal-500 text-white" },
                { from: "#FFEBEE", to: "#FFFFFF", ring: "#E53935", icon: "bg-red-500 text-white" },
              ][i] ?? { from: "#E0F7FA", to: "#FFFFFF", ring: "#00BCD4", icon: "bg-teal-500 text-white" };
              return (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 p-7 transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: `linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 78%)` }}
                >
                  <span
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-2xl transition group-hover:opacity-40"
                    style={{ background: palette.ring }}
                    aria-hidden
                  />
                  <span className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl ${palette.icon}`}>
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="relative mt-5 text-xl font-bold tracking-tight text-charcoal">
                    {title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* TIMELINE - redesigned vertical milestone layout */}
      <section className="relative overflow-hidden border-y border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-red-100/40 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="The Journey"
            title={<>Eleven years, <span className="text-teal-600">one neighbourhood</span>.</>}
            description="A short timeline of how Excellent Students' Academy grew from one room to the institute it is today."
          />
          <div className="relative mt-12">
            <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-teal-500/40 via-neutral-300 to-red-500/40 sm:block sm:left-10" aria-hidden />
            <ol className="space-y-6">
              {timeline.map((t, i) => {
                const accent = i % 2 === 0 ? "teal" : "red";
                return (
                  <li key={t.year} className="relative">
                    <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
                      <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2 sm:pl-0">
                        <span
                          className={`relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg ${
                            accent === "teal" ? "bg-teal-500" : "bg-red-500"
                          }`}
                        >
                          <span className="text-sm font-bold tracking-tight">{t.year}</span>
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                            accent === "teal" ? "text-teal-700" : "text-red-600"
                          }`}
                        >
                          Milestone {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div
                        className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-7"
                        style={{
                          background:
                            accent === "teal"
                              ? "linear-gradient(135deg, #ffffff 0%, #E0F7FA 100%)"
                              : "linear-gradient(135deg, #ffffff 0%, #FFEBEE 100%)",
                        }}
                      >
                        <h3 className="text-xl font-bold tracking-tight text-charcoal sm:text-2xl">
                          {t.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-charcoal-soft sm:text-base">
                          {t.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
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
