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
import { programs, subjects } from "@/data/programs";
import { faculty } from "@/data/faculty";
import { testimonials } from "@/data/testimonials";
import { toppers, resultsStats } from "@/data/results";
import { faqs } from "@/data/faqs";
import { siteConfig, whatsappLink } from "@/data/site";
import { nearbyAreas } from "@/data/areas";

export const metadata: Metadata = {
  title:
    "Best Coaching & Tuition in Rohini | Class 1 to 12 | Excellent Students' Academy",
  description:
    "Best coaching institute in Rohini Sector 7 for Class 1 to 12. Science, Commerce, Math tuition. Serving Rohini, Pitampura, Shalimar Bagh, Model Town, Ashok Vihar. Free demo class.",
  keywords: [
    "best coaching in Rohini",
    "tuition in Rohini",
    "coaching classes Rohini Sector 7",
    "Class 11 12 coaching Rohini",
    "Class 10 board coaching Rohini",
    "Math tuition Rohini",
    "Science coaching Rohini",
    "Commerce coaching Rohini",
    "tuition in Pitampura",
    "coaching in Shalimar Bagh",
    "tuition in Model Town",
    "coaching in Ashok Vihar",
    "tuition near Rohini West Metro",
    "home tuition Rohini Delhi",
    "Excellent Students Academy Rohini",
  ],
  alternates: { canonical: "https://www.theesa.in" },
  openGraph: {
    title: "Best Coaching in Rohini for Class 1-12 | Excellent Students' Academy",
    description:
      "Coaching institute in Rohini Sector 7 for Class 1 to 12. Math, Science, Commerce. Serving Rohini, Pitampura, Shalimar Bagh, Model Town, Ashok Vihar.",
    url: "https://www.theesa.in",
    type: "website",
  },
};

const trustPoints = [
  { value: "9+", label: "Years coaching", icon: Award },
  { value: "500+", label: "Students mentored", icon: Users },
  { value: "84%", label: "Average board score", icon: ClipboardCheck },
  { value: "100%", label: "Pass percentage", icon: Sparkles },
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

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Excellent Students' Academy",
  alternateName: ["ESA Rohini", "Excellent Students Academy"],
  url: "https://www.theesa.in",
  description: "Coaching institute in Rohini Sector 7, New Delhi for Class 1 to 12. Math, Science, Commerce. Serving Rohini, Pitampura, Shalimar Bagh, Model Town, Ashok Vihar.",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.pin,
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "28.7061354", longitude: "77.1223773" },
  areaServed: nearbyAreas.map((a) => a.name),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:30",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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

      {/* PROGRAMS */}
      <section className="bg-neutral-50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Programs"
            title={<>Coaching for every <span className="text-teal-600">stage of school</span>.</>}
            description="From foundation classes for young learners to board prep for Class 12 stream students, every batch is built around weekly tests and chapter-wise mastery."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((p, i) => (
              <article
                key={p.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl"
              >
                <span className={`absolute right-0 top-0 h-1 w-full ${i % 2 === 0 ? "bg-teal-500" : "bg-red-500"}`} />
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">{p.grades}</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-charcoal">
                  {p.label} Program
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-soft">{p.description}</p>
                <Link
                  href={`/programs#${p.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition group-hover:text-red-600"
                >
                  See details
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SUBJECTS */}
      <section className="border-y border-neutral-200 bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Subjects we cover"
            title={<>Every core school subject, <span className="text-red-600">expertly taught</span>.</>}
            description="Choose any combination. Most students enrol for 3 to 5 subjects per term. Stream-specific combinations available for Class 11 and 12."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-5 py-4 transition hover:border-teal-400 hover:bg-teal-50"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  <span className="text-sm font-semibold text-charcoal">{s.name}</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-neutral-500">{s.grades}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY ESA - dark section */}
      <section className="relative overflow-hidden bg-neutral-950 py-24 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Why ESA"
            title={<>What you get when you <span className="text-teal-300">enrol with us</span>.</>}
            description="Eight commitments we make to every student walking through our door."
            dark
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-teal-400/60 hover:bg-white/[0.08]"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${i % 2 === 0 ? "bg-teal-500/15 text-teal-300" : "bg-red-500/15 text-red-300"} transition group-hover:scale-110`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-base font-bold tracking-tight text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FACULTY */}
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              className="mb-0"
              eyebrow="Faculty"
              title={<>Mentors who teach with <span className="text-teal-600">conviction</span>.</>}
              description="Six senior faculty members. Each one has spent more than half a decade teaching the exact syllabus they handle today."
            />
            <Link href="/faculty" className="btn-ghost">
              View all faculty
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.slice(0, 3).map((f) => (
              <article key={f.slug} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={f.image}
                    alt={`${f.name}, ${f.title} at Excellent Students' Academy Rohini`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700 backdrop-blur">
                    {f.title}
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-bold tracking-tight text-charcoal">{f.name}</h3>
                  <p className="mt-1.5 text-sm text-charcoal-soft">
                    <span className="font-semibold text-charcoal">{f.experience}</span> teaching {f.subjects}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-soft line-clamp-3">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* RESULTS */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Recent Results"
            title={<>Students who turned hard work into <span className="text-red-600">real scores</span>.</>}
            description="A glimpse of the last board cycle. Each name reflects months of weekly testing, mock exams and disciplined revision at our Rohini centre."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toppers.slice(0, 6).map((t) => (
              <article key={t.name} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-5 p-6">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-teal-100">
                    <Image src={t.image} alt={t.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold tracking-tight text-charcoal">{t.name}</h3>
                    <p className="mt-0.5 text-xs uppercase tracking-wider text-neutral-500">
                      {t.grade}{t.stream ? ` · ${t.stream}` : ""}
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-red-600">{t.marks}</p>
                  </div>
                </div>
                {t.quote ? (
                  <p className="border-t border-neutral-200 bg-neutral-50 px-6 py-4 text-sm leading-relaxed text-charcoal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                ) : null}
              </article>
            ))}
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
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How to join"
            title={<>A simple, no-pressure <span className="text-teal-600">enrolment</span>.</>}
            description="From your first WhatsApp message to your child writing the first weekly test. Four steps, zero pressure."
          />
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="pointer-events-none absolute top-12 hidden h-px w-full bg-gradient-to-r from-transparent via-teal-300 to-transparent lg:block" />
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className={`relative flex h-24 w-24 items-center justify-center rounded-full ${i % 2 === 0 ? "bg-teal-500" : "bg-red-500"} text-white shadow-lg`}>
                  <span className="text-2xl font-bold tracking-tight">{s.step}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-charcoal">{s.title}</h3>
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
              { label: "Mon to Fri", title: "Concept classes", body: "Subject-wise batches between 4 PM and 8:30 PM. Each batch runs 90 minutes with a 10-minute doubt window at the end. No question leaves the room unresolved." },
              { label: "Every Saturday", title: "Weekly chapter tests", body: "5 PM to 8 PM. The chapter taught that week gets tested. Scored within 48 hours. WhatsApp scorecard goes to parents on Monday morning." },
              { label: "First Saturday monthly", title: "Parent meeting day", body: "15-minute one-on-one with your child's mentor. We review the four weekly test scores, what is improving, what needs work, and the plan for next month." },
              { label: "Last weekend monthly", title: "Full mock paper", body: "Three-hour mock exam under board conditions. Same time slot as the real CBSE paper. Same marking pattern. Feedback within a week." },
              { label: "Sunday (on request)", title: "Doubt clearing", body: "Reserved for students who missed something during the week or have a specific tough topic. Free and optional. WhatsApp us by Friday to book a slot." },
              { label: "Always", title: "Parent visibility", body: "Parents can walk in any working day between 11 AM and 1 PM to talk to faculty or check their child's progress register. No appointment needed." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">{item.label}</p>
                <h3 className="mt-3 text-base font-bold tracking-tight text-charcoal sm:text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{item.body}</p>
              </article>
            ))}
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

      {/* TESTIMONIALS */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Reviews"
            title={<>What parents and students <span className="text-teal-600">say about us</span>.</>}
            description="Real reviews from current and past students of Excellent Students' Academy in Rohini."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
              <article key={t.name} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex gap-0.5 text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-charcoal">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-5">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${i % 2 === 0 ? "bg-teal-500" : "bg-red-500"} text-sm font-bold text-white`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* AREAS */}
      <section className="bg-white py-24 sm:py-28">
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

      {/* CONTACT */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Visit us"
            title={<>Drop by the academy <span className="text-teal-600">in Rohini</span>.</>}
            description="Our centre is on the 2nd floor at C7/72, Sector 7, Rohini. Walk in any working day between 10 AM and 8:30 PM, or schedule a slot via WhatsApp."
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
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
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8089!2d77.119802!3d28.706135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzIyLjEiTiA3N8KwMDcnMjAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 480 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Excellent Students' Academy location on Google Maps"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
