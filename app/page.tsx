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
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
  { value: "9+", label: "Years coaching" },
  { value: "500+", label: "Students mentored" },
  { value: "84%", label: "Average board score" },
  { value: "100%", label: "Pass percentage" },
];

const facilities = [
  { title: "Fully AC premises", description: "Air-conditioned classrooms across two floors. Designed for focused, comfortable study sessions even in Delhi summers." },
  { title: "Expert faculty", description: "All mentors are postgraduates or B.Tech holders with 6+ years of coaching experience across CBSE and ICSE boards." },
  { title: "7-day free demo", description: "Sit through real batches for up to a week before you decide. We earn your enrolment, we don't pressure it." },
  { title: "Weekly tests", description: "Every Saturday is test day. Students get used to exam discipline early, so boards feel familiar by the time they arrive." },
  { title: "Faculty notes", description: "Concise chapter notes for Class 8 to 12, written by our own faculty after teaching the same syllabus for years." },
  { title: "Monthly parent meetings", description: "We sit with parents every month to share progress, strengths and areas to work on. No surprises at result time." },
  { title: "Guest lectures", description: "Periodic sessions from senior educators and industry mentors on career guidance, stream selection and exam strategy." },
  { title: "Nominal fees", description: "Our pricing is intentionally accessible. The same coaching quality you would pay double for at a chain institute." },
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

      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <Container className="grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div>
            <p className="eyebrow">Rohini Sector 7 · New Delhi</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              Coaching in Rohini where ambition meets discipline.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              For 9+ years, Excellent Students&apos; Academy has been the trusted coaching institute for students from Class 1 to 12 across Rohini, Pitampura, Shalimar Bagh and nearby Delhi areas. Expert mentors, weekly tests, monthly parent meetings, nominal fees.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact#enquiry" className="btn-primary">
                Book free demo class
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/programs" className="btn-outline">
                Explore programs
              </Link>
            </div>
            <div className="mt-14 flex items-center gap-6 border-t border-neutral-200 pt-8 sm:gap-10">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5 text-neutral-950">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-neutral-950">4.9</span>
                <span className="text-sm text-neutral-500">/ 300+ reviews</span>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <p className="text-sm text-neutral-600">Trusted by parents across North Delhi</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?auto=format&fit=crop&w=900&q=80"
                alt="Students studying at Excellent Students' Academy, the best coaching institute in Rohini Sector 7"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-neutral-200 sm:grid-cols-4">
            {trustPoints.map(({ value, label }) => (
              <div key={label} className="px-6 py-10 sm:px-8">
                <p className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROGRAMS */}
      <section className="border-b border-neutral-200 bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Coaching for every stage of school."
            description="From foundation classes for young learners to board prep for Class 12 stream students, every batch is built around weekly tests and chapter-wise mastery."
          />
          <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((p) => (
              <article key={p.slug} className="group flex flex-col bg-white p-8 transition hover:bg-neutral-50">
                <p className="text-xs uppercase tracking-wider text-neutral-500">{p.grades}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">
                  {p.label} Program
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{p.description}</p>
                <Link
                  href={`/programs#${p.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-neutral-950"
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
      <section className="border-b border-neutral-200 bg-neutral-50 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Subjects"
            title="Every core school subject, expertly taught."
            description="Choose any combination. Most students enrol for 3 to 5 subjects per term. Stream-specific combinations available for Class 11 and 12."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between rounded-md border border-neutral-200 bg-white px-5 py-4 transition hover:border-neutral-950"
              >
                <span className="text-sm font-medium text-neutral-950">{s.name}</span>
                <span className="text-xs uppercase tracking-wider text-neutral-500">{s.grades}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY ESA */}
      <section className="border-b border-neutral-200 bg-neutral-950 py-24 text-white sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Why ESA"
            title="What you get when you enrol with us."
            description="Eight commitments we make to every student walking through our door."
            dark
          />
          <div className="grid gap-px overflow-hidden rounded-xl bg-neutral-800 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map(({ title, description }) => (
              <div key={title} className="bg-neutral-950 p-7">
                <h3 className="text-base font-semibold tracking-tight text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FACULTY */}
      <section className="border-b border-neutral-200 bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              className="mb-0"
              eyebrow="Faculty"
              title="Mentors who teach with conviction."
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
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100">
                  <Image
                    src={f.image}
                    alt={`${f.name}, ${f.title} at Excellent Students' Academy Rohini`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-wider text-neutral-500">{f.title}</p>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-neutral-950">{f.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    <span className="font-medium text-neutral-950">{f.experience}</span> teaching {f.subjects}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* RESULTS */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Recent Results"
            title="Students who turned hard work into real scores."
            description="A glimpse of the last board cycle. Each name reflects months of weekly testing, mock exams and disciplined revision at our Rohini centre."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toppers.slice(0, 6).map((t) => (
              <article key={t.name} className="rounded-lg border border-neutral-200 bg-white p-6">
                <div className="flex items-center gap-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                    <Image src={t.image} alt={t.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold tracking-tight text-neutral-950">{t.name}</h3>
                    <p className="mt-0.5 text-xs uppercase tracking-wider text-neutral-500">
                      {t.grade}{t.stream ? ` · ${t.stream}` : ""}
                    </p>
                  </div>
                  <p className="text-2xl font-semibold tracking-tight text-neutral-950">{t.marks}</p>
                </div>
                {t.quote ? (
                  <p className="mt-5 border-t border-neutral-200 pt-4 text-sm leading-relaxed text-neutral-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 sm:grid-cols-4">
            {resultsStats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-8 text-center">
                <p className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-b border-neutral-200 bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="How to join"
            title="A simple, no-pressure enrolment."
            description="From your first WhatsApp message to your child writing the first weekly test. Four steps, zero pressure."
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white p-8">
                <p className="text-sm font-medium text-neutral-400">{s.step}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-neutral-950">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* A WEEK AT ESA */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="A week at ESA"
            title="What your child's week actually looks like."
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
              <article key={item.title} className="rounded-lg border border-neutral-200 bg-white p-7">
                <p className="text-xs uppercase tracking-wider text-neutral-500">{item.label}</p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-neutral-950 sm:text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* MISSED CLASS / PARENT COMM */}
      <section className="border-b border-neutral-200 bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
              <p className="eyebrow">Missed a class?</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                Your child does not fall behind. Ever.
              </h3>
              <ul className="mt-8 space-y-4 text-sm text-neutral-700">
                {[
                  "Recording of every class is shared on WhatsApp the same day. Your child can watch it that night.",
                  "We share faculty-prepared chapter notes for whatever was taught, so the catch-up is structured.",
                  "On the next class your child attends, the mentor takes 5 to 10 minutes one-on-one to summarise what was missed.",
                  "If your child missed a Saturday test, they write the same paper at home that week. We grade it.",
                  "Doubt sessions on Sunday are open for catch-up. No extra fee.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-neutral-950" strokeWidth={1.75} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
              <p className="eyebrow">Parent communication</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                You always know what is happening. Not just at result time.
              </h3>
              <ul className="mt-8 space-y-4 text-sm text-neutral-700">
                {[
                  "WhatsApp scorecard every Monday morning with the previous Saturday's test marks.",
                  "Monthly 15-minute meeting with your child's actual mentor. First Saturday of every month.",
                  "Quarterly progress report sheet you can save and compare across terms.",
                  "Direct mentor WhatsApp access for urgent questions about your child's learning.",
                  "Parent feedback form once every term so you can flag concerns formally.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-neutral-950" strokeWidth={1.75} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Reviews"
            title="What parents and students say."
            description="Real reviews from current and past students of Excellent Students' Academy in Rohini."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <article key={t.name} className="flex flex-col rounded-lg border border-neutral-200 bg-white p-7">
                <div className="flex gap-0.5 text-neutral-950">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-neutral-700">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-xs font-semibold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-950">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* AREAS WE SERVE */}
      <section className="border-b border-neutral-200 bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Areas we serve"
            title="Students travel to ESA from across North Delhi."
            description="Located in Rohini Sector 7. Students come from these neighbouring localities. Home tuition is also available in most of them."
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {nearbyAreas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className={`group ${i >= 8 ? "hidden sm:flex" : "flex"} items-center justify-between rounded-md border border-neutral-200 bg-white px-5 py-4 transition hover:border-neutral-950`}
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm font-medium text-neutral-950">{area.name}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-neutral-950" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* DEMO CTA */}
      <section className="border-b border-neutral-200 bg-neutral-950 py-24 text-white sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow text-neutral-400">Free demo class</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Book a free demo class today.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                Sit through up to 7 days of real coaching batches. Meet faculty. See the teaching method. Enrol only when you are fully convinced.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href={whatsappLink("Hello ESA, I want to book a free demo class for my child")}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100"
                >
                  Chat on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-neutral-300">
                  <Phone className="h-4 w-4" />
                  Or call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <ul className="space-y-3.5 rounded-lg border border-neutral-800 bg-neutral-900 p-7">
              {[
                "7 days of demo classes, completely free",
                "Real batch experience, not a 'special' demo",
                "Meet the actual faculty teaching your batch",
                "No registration fee, no commitment to enrol",
                "Decide after seeing the teaching first-hand",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.75} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-neutral-200 bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions answered."
              description="If your question is not here, WhatsApp us or call. We respond within working hours."
              className="mb-0"
            />
            <div className="space-y-3">
              {faqs.slice(0, 5).map((f, i) => (
                <details
                  key={f.question}
                  className="group rounded-lg border border-neutral-200 bg-white p-5 open:border-neutral-950"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                    <span className="text-base font-medium tracking-tight text-neutral-950">{f.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition group-open:rotate-45 group-open:border-neutral-950 group-open:text-neutral-950">
                      <Plus className="h-3.5 w-3.5" />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{f.answer}</p>
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
      <section className="bg-neutral-50 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Visit us"
            title="Drop by the academy in Rohini."
            description="Our centre is on the 2nd floor at C7/72, Sector 7, Rohini. Walk in any working day between 10 AM and 8:30 PM, or schedule a slot via WhatsApp."
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Address", value: <>{siteConfig.address.line1}, {siteConfig.address.line2}<br />{siteConfig.address.city} {siteConfig.address.pin}</> },
                { icon: Phone, label: "Call us", value: <a href={`tel:${siteConfig.phone}`} className="transition hover:text-neutral-950">{siteConfig.phoneDisplay}</a> },
                { icon: Mail, label: "Email", value: <a href={`mailto:${siteConfig.email}`} className="transition hover:text-neutral-950">{siteConfig.email}</a> },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-lg border border-neutral-200 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-700">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-500">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-700">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-lg border border-neutral-200">
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
