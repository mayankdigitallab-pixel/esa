import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Plus,
  Award,
  Users,
  ClipboardCheck,
  Sparkles,
  Snowflake,
  FileText,
  BookOpen,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroSlider } from "@/components/HeroSlider";
import { CardCarousel } from "@/components/CardCarousel";
import { FacultyMarquee } from "@/components/FacultyMarquee";
import { HomeEnquiryForm } from "@/components/HomeEnquiryForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { StudentResults } from "@/components/StudentResults";
import { VideoReviews } from "@/components/VideoReviews";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { programs, subjects } from "@/data/programs";
import { faculty } from "@/data/faculty";
import { testimonials } from "@/data/testimonials";
import { toppers, resultsStats } from "@/data/results";
import { faqs } from "@/data/faqs";
import { siteConfig, whatsappLink } from "@/data/site";
import { blogPosts } from "@/data/blog";
import { nearbyAreas } from "@/data/areas";
import { centres } from "@/data/centres";
import { BranchesCarousel } from "@/components/BranchesCarousel";
import { breadcrumbSchema, faqPageSchema, jsonLd, localBusinessSchema, speakableWebPage, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Coaching & Tuition for Class 1-12 in Delhi & Lucknow | Excellent Students' Academy",
  description:
    "Four ESA branches: Rohini Sector 7, Rohini Sector 15, Shakurpur (Delhi) and Thakurganj (Lucknow). Coaching for Class 1 to 12 - Math, Science, Commerce. Free demo class at any centre.",
  keywords: [
    "best coaching in Rohini",
    "tuition in Rohini",
    "coaching in Lucknow",
    "coaching in Thakurganj",
    "coaching in Shakurpur",
    "coaching classes Rohini Sector 7",
    "coaching classes Rohini Sector 15",
    "Class 11 12 coaching Rohini",
    "Class 10 board coaching Lucknow",
    "Math tuition Rohini",
    "Science coaching Rohini",
    "tuition in Pitampura",
    "coaching in Shalimar Bagh",
    "Excellent Students Academy",
  ],
  alternates: { canonical: "https://www.theesa.in" },
  openGraph: {
    title: "Coaching for Class 1-12 across Delhi & Lucknow | Excellent Students' Academy",
    description:
      "ESA branches in Rohini Sector 7, Rohini Sector 15, Shakurpur (Delhi) and Thakurganj (Lucknow). Coaching for Class 1 to 12 in Math, Science, Commerce.",
    url: "https://www.theesa.in",
    type: "website",
  },
};

const trustPoints = [
  { value: "Since 2015", label: "Coaching in Rohini", icon: Award },
  { value: "500+", label: "Students mentored", icon: Users },
  { value: "84%", label: "Avg board score · 2026", icon: ClipboardCheck },
  { value: "100%", label: "Pass rate · 2026 batch", icon: Sparkles },
];

const facilities = [
  { icon: Snowflake, title: "Fully AC premises", description: "Air-conditioned classrooms across two floors. Designed for focused, comfortable study sessions even in Delhi summers." },
  { icon: Users, title: "Expert faculty", description: "All mentors are postgraduates or B.Tech holders with 6+ years of coaching experience across CBSE and ICSE boards." },
  { icon: Calendar, title: "7-day free demo", description: "Sit through real batches for up to a week before you decide. We earn your enrolment, we don't pressure it." },
  { icon: ClipboardCheck, title: "Weekly tests", description: "Every Saturday is test day. Students get used to exam discipline early, so boards feel familiar by the time they arrive." },
  { icon: FileText, title: "Faculty notes", description: "Concise chapter notes for Class 8 to 12, written by our own faculty after teaching the same syllabus for years." },
  { icon: Users, title: "Monthly parent meetings", description: "We sit with parents every month to share progress, strengths and areas to work on. No surprises at result time." },
  { icon: BookOpen, title: "Guest lectures", description: "Periodic sessions from senior educators and industry mentors on career guidance, stream selection and exam strategy." },
  { icon: Award, title: "Nominal fees", description: "Our pricing is intentionally accessible. The same coaching quality you would pay double for at a chain institute." },
];

const processSteps = [
  { step: "01", title: "Book a free demo", description: "Send a WhatsApp or fill our enquiry form. Pick a slot that works for your child's class and subject." },
  { step: "02", title: "Attend 7 days of demo classes", description: "Sit through real batches. See the teaching method, meet faculty, talk to current students." },
  { step: "03", title: "Enrol when convinced", description: "Pick the batch and subject combination. Pay the nominal monthly fee. Get a printed schedule and material list." },
  { step: "04", title: "Weekly tests, monthly reviews", description: "Your child writes weekly tests. You get a monthly review meeting. Progress is tracked, not assumed." },
];

export default function HomePage() {
  const homeBreadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
  ]);
  const speakable = speakableWebPage({
    url: "https://www.theesa.in",
    name: "Excellent Students' Academy Rohini",
    cssSelectors: ["h1", ".esa-hero h1", ".esa-hero p"],
  });
  return (
    <div>
      <script {...jsonLd(localBusinessSchema())} />
      <script {...jsonLd(websiteSchema())} />
      <script {...jsonLd(faqPageSchema())} />
      <script {...jsonLd(homeBreadcrumb)} />
      <script {...jsonLd(speakable)} />

      <HeroSlider />

      {/* TRUST STRIP */}
      <section className="border-b border-neutral-200 bg-white">
        <Container>
          <div className="grid grid-cols-2 gap-y-8 py-12 sm:grid-cols-4">
            {trustPoints.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 px-4 sm:justify-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">{value}</p>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROGRAMS - light bg, 4 horizontal cards with gradient headers */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                  Our Programs
                </span>
                <span className="h-px w-12 bg-teal-500" />
              </div>
              <h2
                className="mt-5 m-0 text-charcoal"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                }}
              >
                Coaching for every <span style={{ color: "#00BCD4" }}>stage of school</span>.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal-soft">
                Foundation classes for young learners. Board prep for Class 9-10. Stream-wise coaching for Class 11-12. Every batch built around weekly tests and chapter-wise mastery.
              </p>
            </div>
            <Link href="/programs" className="btn-ghost">
              View all programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((p, i) => {
              const accent = i % 2 === 0 ? "teal" : "red";
              const Icon = [BookOpen, FileText, ClipboardCheck, Award][i] ?? BookOpen;
              const headerGradient =
                accent === "teal"
                  ? "linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)"
                  : "linear-gradient(135deg, #E53935 0%, #C62828 100%)";
              return (
                <article
                  key={p.slug}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className="relative flex items-start justify-between gap-3 p-6"
                    style={{ background: headerGradient }}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <span
                      className="select-none text-5xl font-bold leading-none tracking-tighter text-white/25"
                      aria-hidden
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      {p.grades}
                    </p>
                    <h3
                      className="mt-2 m-0 text-charcoal"
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                      }}
                    >
                      {p.label} Program
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-soft">
                      {p.description}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-neutral-200 pt-5">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13px] text-charcoal-soft">
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              accent === "teal" ? "text-teal-500" : "text-red-500"
                            }`}
                            strokeWidth={2}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-3">
                      <Link
                        href="/contact#enquiry"
                        className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition ${
                          accent === "teal"
                            ? "bg-teal-500 hover:bg-teal-600"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >
                        Enquire
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={`/programs#${p.slug}`}
                        className="inline-flex items-center gap-1 rounded-lg border border-neutral-300 px-3 py-2.5 text-sm font-semibold text-charcoal transition hover:border-charcoal hover:bg-neutral-50"
                      >
                        Details
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SPECIALISED COURSES */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              <span className="h-px w-10 bg-teal-500" />
              Our Specialised Courses
              <span className="h-px w-10 bg-teal-500" />
            </span>
            <h2
              className="mt-5 m-0 text-charcoal"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Custom curated courses for every candidate.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-soft">
              Pick the right format for your child - long-term tuition, structured coaching for boards, or focused crash revision before exams.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              {
                title: "Tuition Classes",
                tag: "Class 1 to 12",
                subtitle: "For Class 1-12th Standard",
                description:
                  "Long-term subject-wise tuition with weekly tests, regular doubt clearing and monthly parent reviews.",
                image:
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
                accent: "teal" as const,
                href: "/programs#grades-1-5",
              },
              {
                title: "Coaching Classes",
                tag: "Class 6 to 12",
                subtitle: "For Classes 6th to 12th Standard",
                description:
                  "Board-focused coaching for Class 6 to 12 with chapter-wise drills, mock papers and exam-style answer training.",
                image:
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
                accent: "red" as const,
                href: "/programs#grades-9-10",
              },
              {
                title: "Crash Courses",
                tag: "Class 6 to 12",
                subtitle: "For Classes 6th to 12th Standard",
                description:
                  "Last-mile revision before boards. 6 to 8 week intensive program covering full syllabus and mock papers.",
                image:
                  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80",
                accent: "teal" as const,
                href: "/programs#crash",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={c.image}
                    alt={`${c.title} at Excellent Students' Academy Rohini`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
                  <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white ${
                      c.accent === "teal" ? "bg-teal-500" : "bg-red-500"
                    }`}
                  >
                    {c.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-2xl font-bold tracking-tight text-white">{c.title}</h3>
                    <p className="mt-1 text-xs font-medium text-white/85">{c.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-col p-6">
                  <p className="text-sm leading-relaxed text-charcoal-soft">{c.description}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      href="/contact#enquiry"
                      className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-4 py-3 text-sm font-bold text-white transition ${
                        c.accent === "teal"
                          ? "bg-teal-500 hover:bg-teal-600"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      Enquire
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-1 rounded-lg border border-neutral-300 px-4 py-3 text-sm font-semibold text-charcoal transition hover:border-charcoal hover:bg-neutral-50"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SUBJECTS - side-by-side, categorised */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                  Subjects We Cover
                </span>
                <span className="h-px w-12 bg-teal-500" />
              </div>
              <h2
                className="mt-6 m-0 text-charcoal"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 600,
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                }}
              >
                Every core school subject,{" "}
                <span style={{ color: "#E53935" }}>expertly taught</span>.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal-soft">
                Choose any combination. Most students enrol for 3 to 5 subjects per term. Stream-specific combinations for Class 11 and 12.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-charcoal">
                <span className="h-2 w-2 rounded-full bg-teal-500" /> 12 subjects
                <span className="mx-2 h-3 w-px bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-red-500" /> CBSE · ICSE
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  category: "Core subjects",
                  desc: "Taught across all classes, every term.",
                  accent: "teal",
                  items: subjects.filter((s) => ["Mathematics", "Science (PCB / PCM)", "English", "Hindi", "Social Science", "Computer Science"].includes(s.name)),
                },
                {
                  category: "Languages",
                  desc: "Available for relevant classes.",
                  accent: "red",
                  items: subjects.filter((s) => ["Sanskrit"].includes(s.name)),
                },
                {
                  category: "Stream subjects · Class 11 & 12",
                  desc: "Science, Commerce and Arts streams.",
                  accent: "teal",
                  items: subjects.filter((s) => ["Physics", "Chemistry", "Accountancy", "Business Studies", "Economics"].includes(s.name)),
                },
              ].map((group) => (
                <div key={group.category}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        group.accent === "teal" ? "bg-teal-500" : "bg-red-500"
                      }`}
                    />
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal">{group.category}</p>
                    <span className="h-px flex-1 bg-neutral-200" />
                    <span className="text-xs text-neutral-500">{group.items.length} subjects</span>
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {group.items.map((s) => (
                      <div
                        key={s.name}
                        className={`group flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3.5 transition hover:-translate-y-0.5 hover:shadow-md ${
                          group.accent === "teal" ? "hover:border-teal-400" : "hover:border-red-400"
                        }`}
                      >
                        <span className="text-sm font-semibold text-charcoal">{s.name}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                          {s.grades.replace("Class ", "").replace(" - ", "–")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHY ESA - side-by-side, dark with featured promise + cards */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-teal-500/12 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-400">
                  Why ESA
                </span>
                <span className="h-px w-12 bg-teal-400" />
              </div>
              <h2
                className="mt-6 m-0"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 600,
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  color: "#F5F1E8",
                }}
              >
                What you get when{" "}
                <span style={{ color: "#22D3EE" }}>you enrol with us</span>.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                Eight specific commitments we make to every student walking through our door. Not vague promises - concrete things you can hold us to.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#enquiry" className="btn-primary">
                  Book free demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10 grid gap-4 border-t border-white/12 pt-7">
                {[
                  { v: "11 yrs", l: "Trusted institute in Rohini" },
                  { v: "500+", l: "Students mentored to date" },
                ].map((s, i) => (
                  <div key={s.l} className="flex items-center gap-4">
                    <span
                      className="text-2xl font-bold tracking-tight"
                      style={{ color: i === 0 ? "#22D3EE" : "#F87171" }}
                    >
                      {s.v}
                    </span>
                    <span className="text-sm text-white/65">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {facilities.map(({ icon: Icon, title, description }, i) => {
                const accent = i % 2 === 0 ? "teal" : "red";
                return (
                  <div
                    key={title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          accent === "teal" ? "bg-teal-500/15 text-teal-300" : "bg-red-500/15 text-red-300"
                        } transition group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div className="min-w-0">
                        <h3
                          className="m-0"
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 600,
                            letterSpacing: "-0.01em",
                            color: "#F5F1E8",
                          }}
                        >
                          {title}
                        </h3>
                        <p
                          className="mt-2 text-[13.5px] leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FOUNDER - dedicated feature section */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />
        <Container className="relative">
          {(() => {
            const founder = faculty[0];
            return (
              <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:gap-20">
                {/* Photo column */}
                <div className="relative mx-auto w-full max-w-[460px] lg:mx-0">
                  <div className="absolute -left-3 -top-3 hidden h-20 w-20 rounded-2xl border-2 border-teal-500 sm:block" aria-hidden />
                  <div className="absolute -right-3 -bottom-3 hidden h-24 w-24 rounded-2xl bg-red-500 sm:block" aria-hidden />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl">
                    <Image
                      src={founder.image}
                      alt={`${founder.name}, Founder & Director of Excellent Students' Academy`}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 460px, 460px"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-5">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                        Founder &amp; Director
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
                      fontWeight: 600,
                      lineHeight: 1.04,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Built by a mentor who still{" "}
                    <span style={{ color: "#00BCD4" }}>teaches every day</span>.
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-charcoal-soft sm:text-[17px]">
                    <strong className="font-bold text-charcoal">{founder.name.replace("Mr. ", "")}</strong>{" "}
                    started <strong className="font-bold text-charcoal">ESA in 2015</strong> with one room and three students.{" "}
                    <strong className="font-bold text-charcoal">Eleven years later</strong> he is still in the classroom -{" "}
                    personally mentoring{" "}
                    <strong className="font-bold text-charcoal">every Class 11 and 12 Mathematics batch</strong> at our Rohini centre.
                  </p>

                  {/* Pull quote */}
                  <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-neutral-50 p-6">
                    <p className="text-base font-medium leading-relaxed text-charcoal sm:text-lg">
                      &ldquo;I do not want ESA to grow faster than it can teach well. Every batch I add, I want to be able to look the parents in the eye after the result.&rdquo;
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                      {founder.name.replace("Mr. ", "")} · Founder
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
                    <Link href="/about" className="btn-primary">
                      Read the ESA story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/faculty"
                      className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700"
                    >
                      Meet all faculty
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </Container>
      </section>

      {/* FACULTY CAROUSEL (12 teachers, excluding founder) */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              className="mb-0"
              eyebrow="Senior Faculty"
              title={<>The mentors behind every <span className="text-teal-600">batch and subject</span>.</>}
              description="Twelve senior faculty members. Postgraduates and B.Tech holders with 6+ years of coaching across CBSE and ICSE boards."
            />
            <Link href="/faculty" className="btn-ghost">
              View all faculty
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12">
            <FacultyMarquee />
          </div>
        </Container>
      </section>

      {/* RESULTS CAROUSEL with bigger student images */}
      <section className="border-y border-neutral-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              className="mb-0"
              eyebrow="Recent Results"
              title={<>Students who turned hard work into <span className="text-red-600">real scores</span>.</>}
              description="Twelve toppers from the last board cycle. Each name reflects months of weekly testing, mock exams and disciplined revision at our Rohini centre."
            />
            <Link href="/results" className="btn-ghost">
              All results
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12">
            <StudentResults toppers={toppers} />
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-4">
            {resultsStats.map((s, i) => (
              <div key={s.label} className="bg-white px-6 py-8 text-center">
                <p className={`text-4xl font-bold tracking-tight sm:text-5xl ${i % 2 === 0 ? "text-teal-600" : "text-red-600"}`}>{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section
        className="relative overflow-hidden py-24 sm:py-28"
        style={{ background: "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 55%, #FFEBEE 100%)" }}
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" aria-hidden />
        <Container className="relative">
          <SectionHeading
            eyebrow="How to join"
            title={<>A simple, no-pressure <span className="text-teal-600">enrolment</span>.</>}
            description="From your first WhatsApp message to your child writing the first weekly test. Four steps, zero pressure."
          />
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="pointer-events-none absolute top-12 hidden h-px w-full bg-gradient-to-r from-transparent via-teal-300 to-transparent lg:block" />
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className={`relative flex h-14 w-14 items-center justify-center rounded-full sm:h-20 sm:w-20 lg:h-24 lg:w-24 ${i % 2 === 0 ? "bg-teal-500" : "bg-red-500"} text-white shadow-lg`}>
                  <span className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">{s.step}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-charcoal sm:mt-6">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WEEK AT ESA */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="A week at ESA"
            title={<>What your child's week <span className="text-teal-600">actually looks like</span>.</>}
            description="Here is exactly how a regular week runs for a Class 10 or Class 12 student at our Rohini centre."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Mon to Fri", title: "Concept classes", body: "Subject-wise batches between 4 PM and 8:30 PM. Each batch runs 90 minutes with a 10-minute doubt window at the end. No question leaves the room unresolved.", tint: "teal" },
              { label: "Every Saturday", title: "Weekly chapter tests", body: "5 PM to 8 PM. The chapter taught that week gets tested. Scored within 48 hours. WhatsApp scorecard goes to parents on Monday morning.", tint: "red" },
              { label: "First Saturday monthly", title: "Parent meeting day", body: "15-minute one-on-one with your child's mentor. We review the four weekly test scores, what is improving, what needs work, and the plan for next month.", tint: "amber" },
              { label: "Last weekend monthly", title: "Full mock paper", body: "Three-hour mock exam under board conditions. Same time slot as the real CBSE paper. Same marking pattern. Feedback within a week.", tint: "amber" },
              { label: "Sunday (on request)", title: "Doubt clearing", body: "Reserved for students who missed something during the week or have a specific tough topic. Free and optional. WhatsApp us by Friday to book a slot.", tint: "teal" },
              { label: "Always", title: "Parent visibility", body: "Parents can walk in any working day between 11 AM and 1 PM to talk to faculty or check their child's progress register. No appointment needed.", tint: "red" },
            ].map((item) => {
              const bg =
                item.tint === "teal"
                  ? "linear-gradient(135deg,#E0F7FA 0%,#FFFFFF 70%)"
                  : item.tint === "red"
                  ? "linear-gradient(135deg,#FFEBEE 0%,#FFFFFF 70%)"
                  : "linear-gradient(135deg,#FEF3C7 0%,#FFFFFF 70%)";
              const labelColor =
                item.tint === "teal"
                  ? "text-teal-700"
                  : item.tint === "red"
                  ? "text-red-700"
                  : "text-amber-700";
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{ background: bg }}
                >
                  <p className={`text-xs font-bold uppercase tracking-wider ${labelColor}`}>{item.label}</p>
                  <h3 className="mt-3 text-base font-bold tracking-tight text-charcoal sm:text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{item.body}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* MISSED CLASS / PARENT COMM */}
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-200">Missed a class?</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Your child does not fall behind. Ever.
              </h3>
              <ul className="mt-8 space-y-4 text-sm text-teal-50">
                {[
                  "Recording of every class is shared on WhatsApp the same day. Your child can watch it that night.",
                  "We share faculty-prepared chapter notes for whatever was taught, so the catch-up is structured.",
                  "On the next class your child attends, the mentor takes 5 to 10 minutes one-on-one to summarise what was missed.",
                  "If your child missed a Saturday test, they write the same paper at home that week. We grade it.",
                  "Doubt sessions on Sunday are open for catch-up. No extra fee.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-200" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-wider text-red-300">Parent communication</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                You always know what is happening. Not just at result time.
              </h3>
              <ul className="mt-8 space-y-4 text-sm text-neutral-300">
                {[
                  "WhatsApp scorecard every Monday morning with the previous Saturday's test marks.",
                  "Monthly 15-minute meeting with your child's actual mentor. First Saturday of every month.",
                  "Quarterly progress report sheet you can save and compare across terms.",
                  "Direct mentor WhatsApp access for urgent questions about your child's learning.",
                  "Parent feedback form once every term so you can flag concerns formally.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* TEAM BANNER */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/gallery/g22.jpg"
            alt="The Excellent Students' Academy faculty team on Teachers' Day"
            fill
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
          {/* Strong dark scrim + side gradient so the text column reads cleanly */}
          <div className="absolute inset-0 bg-charcoal/55" aria-hidden />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.78) 35%, rgba(15,15,15,0.30) 70%, rgba(15,15,15,0.08) 100%)",
            }}
            aria-hidden
          />
        </div>
        <Container className="relative py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300 backdrop-blur">
              <Users className="h-3.5 w-3.5" />
              Meet the team
            </p>
            <h2
              className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              The teachers your child{" "}
              <span className="text-teal-300">remembers</span> long after the boards.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-[17px]">
              11 full-time mentors. Each one a postgraduate or B.Tech holder. Every birthday cut at the centre, every Teachers&apos; Day banner, every Saturday test scored by hand &mdash; this is the team behind it.
            </p>

            <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-3">
              {[
                { v: "11", l: "Mentors" },
                { v: "6+ yrs", l: "Avg. experience" },
                { v: "100%", l: "Postgrad / B.Tech" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold tracking-tight text-teal-300">{s.v}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/faculty" className="btn-primary">
                Meet every mentor
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/gallery#teachers-day"
                className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                See team photos
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection testimonials={testimonials} />

      {/* VIDEO REVIEWS */}
      <VideoReviews />

      {/* BLOG TEASER - hidden on home per request, still accessible via /blog */}
      <section className="hidden bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                  From the ESA blog
                </span>
                <span className="h-px w-12 bg-teal-500" />
              </div>
              <h2
                className="mt-5 m-0 text-charcoal"
                style={{
                  fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                }}
              >
                Tips for parents and students in Rohini.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-soft sm:text-base">
                Board exam strategy, stream choice, coaching selection and study habits, written by our own faculty.
              </p>
            </div>
            <Link href="/blog" className="btn-ghost">
              View all posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[...blogPosts]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-teal-700 backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold leading-snug tracking-tight text-charcoal group-hover:text-teal-700 sm:text-lg">
                      {p.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal-soft">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-3 text-[11px] text-neutral-500">
                      <span>
                        {new Date(p.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-neutral-300">·</span>
                      <span>{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </section>

      {/* AREAS */}
      <section className="bg-neutral-50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Areas we serve"
            title={<>Students travel to ESA from <span className="text-teal-600">across North Delhi</span>.</>}
            description="Located in Rohini Sector 7. Students come from these neighbouring localities. Home tuition is also available in most of them."
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {nearbyAreas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className={`group ${i >= 8 ? "hidden sm:flex" : "flex"} items-center justify-between rounded-lg border border-neutral-200 bg-white px-5 py-4 transition hover:border-teal-400 hover:bg-teal-50 hover:shadow-md`}
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-teal-600" />
                  <span className="text-sm font-semibold text-charcoal">{area.name}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-red-600" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-red-700 py-24 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-yellow-300/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-teal-400/15 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                Free demo class
              </p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Book a free demo class today.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-red-50 sm:text-lg">
                Sit through up to 7 days of real coaching batches. Meet faculty. See the teaching method. Enrol only when you are fully convinced.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href={whatsappLink("Hello ESA, I want to book a free demo class for my child")}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-red-600 shadow-md transition hover:bg-red-50"
                >
                  Chat on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-red-100">
                  <Phone className="h-4 w-4" />
                  Or call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <ul className="space-y-3.5 rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur">
              {[
                "7 days of demo classes, completely free",
                "Real batch experience, not a 'special' demo",
                "Meet the actual faculty teaching your batch",
                "No registration fee, no commitment to enrol",
                "Decide after seeing the teaching first-hand",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-red-50">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="FAQ"
              title={<>Common questions <span className="text-teal-600">answered</span>.</>}
              description="If your question is not here, WhatsApp us or call. We respond within working hours."
              className="mb-0"
            />
            <div className="space-y-3">
              {faqs.slice(0, 5).map((f, i) => (
                <details
                  key={f.question}
                  className="group rounded-xl border border-neutral-200 bg-white p-5 open:border-teal-400 open:bg-teal-50/30 open:shadow-md"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                    <span className="text-base font-semibold tracking-tight text-charcoal">{f.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition group-open:rotate-45 group-open:bg-red-500 group-open:text-white">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal">{f.answer}</p>
                </details>
              ))}
              <Link href="/faq" className="btn-ghost mt-6">
                View all questions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT - left details + right enquiry form */}
      <section id="enquiry" className="border-t border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Visit us · Get in touch"
            title={<>Drop by the academy <span className="text-teal-600">in Rohini</span>.</>}
            description="Our centre is on the 2nd floor at C7/72, Sector 7, Rohini. Walk in any working day between 10 AM and 8:30 PM, or book a demo using the form on the right."
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
                  Reach Us
                </p>
                <h3
                  className="mt-2 text-charcoal"
                  style={{
                    fontSize: "clamp(1.5rem, 2.4vw, 1.85rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  Our Rohini centre details.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  Visit our 2nd-floor centre any working day, or call us between 10 AM and 8:30 PM.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: <>{siteConfig.address.line1}, {siteConfig.address.line2}<br />{siteConfig.address.city} {siteConfig.address.pin}</>, accent: "teal" },
                  { icon: Phone, label: "Call us", value: <a href={`tel:${siteConfig.phone}`} className="transition hover:text-teal-700">{siteConfig.phoneDisplay}</a>, accent: "red" },
                  { icon: Mail, label: "Email", value: <a href={`mailto:${siteConfig.email}`} className="transition hover:text-teal-700">{siteConfig.email}</a>, accent: "teal" },
                ].map(({ icon: Icon, label, value, accent }) => (
                  <div key={label} className="rounded-xl border border-neutral-200 bg-white p-6">
                    <div className="flex items-start gap-4">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent === "teal" ? "bg-teal-500 text-white" : "bg-red-500 text-white"}`}>
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">{label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-charcoal">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
                Book Free Demo Class
              </p>
              <h3
                className="mt-2 text-charcoal"
                style={{
                  fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                Tell us about your child. We will plan the rest.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                Share a few details and we will WhatsApp you back with batch timings, demo slot and fees.
              </p>
              <div className="mt-7">
                <HomeEnquiryForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* NEWSLETTER */}
      <section className="relative overflow-hidden bg-charcoal py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300">
                  ESA Newsletter
                </span>
                <span className="h-px w-12 bg-teal-400" />
              </div>
              <h2
                className="mt-5 m-0"
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  color: "#F5F1E8",
                }}
              >
                Stay updated on{" "}
                <span style={{ color: "#22D3EE" }}>batches, results and parent tips</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed sm:text-base" style={{ color: "rgba(255,255,255,0.62)" }}>
                One short email a month. Upcoming batch openings, board exam tips for parents, and what we are learning at the academy. No spam.
              </p>
            </div>
            <div>
              <NewsletterForm />
              <p className="mt-4 text-xs text-white/45">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* OUR BRANCHES (just above footer, as a slider) */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our Branches"
            title={<>Four centres across <span className="text-teal-600">Delhi & Lucknow</span>.</>}
            description="Same syllabus, same teaching framework, same disciplined coaching - close to where you live. Walk in to any branch for a free demo class."
          />
          <BranchesCarousel centres={centres} />
          <div className="mt-10 text-center">
            <Link href="/centres" className="btn-ghost">
              View all branches
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
