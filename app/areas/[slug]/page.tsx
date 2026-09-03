import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { nearbyAreas, type Area } from "@/data/areas";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, faqSchema, jsonLd, shareMeta } from "@/lib/seo";

// Pool of already-verified ESA photography/stock images (reused from blog
// posts, home page and other pages) so each area page gets a distinct
// banner and inline images instead of one photo repeated on every page.
const AREA_IMAGE_POOL = [
  "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
  "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06",
  "https://images.unsplash.com/photo-1453733190371-0a9bedd82893",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
  "https://images.unsplash.com/photo-1635372722656-389f87a941b7",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3",
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1497366216548-37526070297c",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad",
];

function areaImage(index: number, size: "banner" | "inline") {
  const base = AREA_IMAGE_POOL[index % AREA_IMAGE_POOL.length];
  const w = size === "banner" ? 1920 : 1200;
  return `${base}?auto=format&fit=crop&w=${w}&q=80`;
}

function commutePhrase(area: Area) {
  return area.distanceKm === 0
    ? "you're right at the centre"
    : area.distanceKm < 3
      ? "under 10 minutes"
      : area.distanceKm < 6
        ? "12 to 18 minutes"
        : "20 to 30 minutes";
}

function areaFaqs(area: Area) {
  const commute =
    area.distanceKm === 0
      ? "You're right in Sector 7 - walking distance to the centre."
      : `${commutePhrase(area)} by auto or e-rickshaw, about ${area.distanceKm} km.`;

  return [
    {
      question: `Does ESA offer coaching for students from ${area.name}?`,
      answer: `Yes. Excellent Students' Academy's Rohini Sector 7 centre teaches Class 1 to 12 students from ${area.name} across Math, Science, Commerce, English and all CBSE/ICSE subjects, with several current students commuting from ${area.name} every day.`,
    },
    {
      question: `How far is ESA from ${area.name}, and how do students get there?`,
      answer: `${commute} Our centre is at ${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city} ${siteConfig.address.pin}.${area.transport ? ` ${area.transport} is the most common way students reach us.` : ""}`,
    },
    {
      question: `What classes and subjects can my child join from ${area.name}?`,
      answer: `Class 1 to Class 12, across CBSE, ICSE and State Boards - Mathematics, Science, Social Science, English, Hindi, Sanskrit (Class 6-10), and Physics, Chemistry, Biology, Accountancy, Business Studies, Economics, Computer Science (Class 11-12).`,
    },
    {
      question: `Can I book a free demo class for my child from ${area.name}?`,
      answer: `Yes - 7 days of free demo classes, no registration fee. Your child sits in the actual batch they would join, meets the faculty, and you decide only after. WhatsApp ${siteConfig.whatsappDisplay} or call ${siteConfig.phoneDisplay} to book a slot.`,
    },
  ];
}

export function generateStaticParams() {
  return nearbyAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = nearbyAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Best Coaching in ${area.name} | Class 1 to 12 Tuition | ESA Rohini`,
    description: `Looking for coaching in ${area.name}? Excellent Students' Academy Rohini Sector 7 offers Class 1 to 12 tuition in Math, Science, Commerce. Just ${area.distanceKm} km away. Free demo class.`,
    alternates: {
      canonical: `https://www.theesa.in/areas/${area.slug}`,
    },
    keywords: [
      `coaching in ${area.name}`,
      `tuition in ${area.name}`,
      `Class 10 coaching ${area.name}`,
      `Class 12 coaching ${area.name}`,
      `best coaching near ${area.name}`,
      `CBSE coaching ${area.name}`,
      `Math tuition ${area.name}`,
      `coaching centre near ${area.name}`,
    ],
    ...shareMeta({
      title: `Best Coaching in ${area.name} | Class 1 to 12 Tuition | ESA Rohini`,
      description: `Looking for coaching in ${area.name}? Excellent Students' Academy Rohini Sector 7 offers Class 1 to 12 tuition in Math, Science, Commerce. Just ${area.distanceKm} km away. Free demo class.`,
      path: `/areas/${area.slug}`,
    }),
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = nearbyAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const areaIndex = nearbyAreas.findIndex((a) => a.slug === area.slug);
  const other = nearbyAreas.filter((a) => a.slug !== area.slug).slice(0, 6);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Areas", href: "/areas/rohini-sector-7" },
    { name: area.name, href: `/areas/${area.slug}` },
  ]);
  const faqs = areaFaqs(area);
  const commute = commutePhrase(area);

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <script {...jsonLd(faqSchema(faqs))} />
      <PageBanner
        label={`Coaching · ${area.name}`}
        image={areaImage(areaIndex, "banner")}
        imageAlt={`Coaching classes for students in ${area.name}`}
        heading={<>Best coaching for Class 1 to 12 in {area.name}.</>}
        subtitle={`ESA's Rohini Sector 7 centre serves students from ${area.name} and nearby North Delhi areas, with a teaching method built around weekly testing and faculty who stay with the same batch year after year.`}
      />

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              className="mb-6"
              eyebrow={`Coaching in ${area.name}`}
              title={
                <>
                  Why {area.name} families choose{" "}
                  <span className="text-charcoal">ESA Rohini</span>
                </>
              }
            />
            <div className="space-y-5 text-[15px] leading-relaxed text-body">
              <p>
                If you live in {area.name} and are searching for a coaching institute your child will actually enjoy walking into, distance is only half the answer. What happens once your child sits down in a batch decides everything else. Excellent Students&apos; Academy runs its flagship centre out of Rohini Sector 7, and a growing number of {area.name} families now send their children here for Class 1 to 12 coaching in Math, Science, Commerce, English and every core CBSE/ICSE subject.
              </p>
              <p>
                We are about {area.distanceKm === 0 ? "0" : area.distanceKm} km from {area.name}
                {area.transport ? `, reachable by ${area.transport.toLowerCase()}` : ""}, which in practice means a {commute} commute for most students - close enough that a Saturday test or an evening doubt session never feels like a big ask.
              </p>
              {area.localCopy ? (
                <p className="rounded-2xl border border-teal-200 bg-teal-50/50 p-5 text-charcoal">
                  {area.localCopy}
                </p>
              ) : null}
              {area.landmark ? (
                <p>
                  <strong className="font-semibold text-charcoal">Local landmark:</strong>{" "}
                  {area.landmark}.
                </p>
              ) : null}
              {area.nearbySchools && area.nearbySchools.length > 0 ? (
                <p>
                  <strong className="font-semibold text-charcoal">Schools we coach students from in {area.name}:</strong>{" "}
                  {area.nearbySchools.join(", ")}.
                </p>
              ) : null}
            </div>

            <figure className="my-10">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200">
                <Image
                  src={areaImage(areaIndex + 6, "inline")}
                  alt={`ESA faculty teaching a small batch, the same coaching style ${area.name} students join`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic text-charcoal-soft">
                Small batches and subject-specialist faculty - the same classroom {area.name} students join every day.
              </figcaption>
            </figure>

            <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              What families from {area.name} notice first
            </h2>
            <div className="mt-4 space-y-5 text-[15px] leading-relaxed text-body">
              <p>
                The first thing most {area.name} parents mention after a few weeks is the testing rhythm. Every Saturday, without exception, our students write a chapter test on whatever was taught that week. Papers are corrected within 48 hours and a scorecard reaches parents by Monday morning on WhatsApp - not a vague progress update, but a specific note on which chapter or concept still needs work.
              </p>
              <p>
                Batch sizes are capped at around 18 students, so a child from {area.name} is never just a face in a large room. Faculty stay with the same batch for the full year, often for several years running, so by the time board exams arrive, the teacher already knows exactly where each student&apos;s gaps are.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              A week at ESA, for a {area.name} student
            </h2>
            <div className="mt-4 space-y-5 text-[15px] leading-relaxed text-body">
              <p>
                Monday to Friday evenings follow a simple four-step method in every subject - explain the concept, demonstrate it, let the student practise independently, then test a variation to confirm it has actually stuck. Saturday is reserved entirely for the weekly chapter test across every batch. The first Saturday of each month is set aside for a proper fifteen-minute parent meeting with the actual subject teacher, not a rushed hallway conversation.
              </p>
              <p>
                This routine has produced consistent results: our most recent CBSE batch averaged 84% with every student passing, and 32 students scored above 90%. None of that comes from a single gifted batch - it comes from the same weekly discipline running for months, which is exactly what a family commuting from {area.name} signs up for.
              </p>
            </div>

            <figure className="my-10">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200">
                <Image
                  src={areaImage(areaIndex + 12, "inline")}
                  alt={`Students from ${area.name} writing a weekly Saturday test at ESA Rohini Sector 7`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic text-charcoal-soft">
                Weekly Saturday chapter tests, corrected within 48 hours - the routine behind our board results.
              </figcaption>
            </figure>

            <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              Getting to ESA from {area.name}
            </h2>
            <div className="mt-4 space-y-5 text-[15px] leading-relaxed text-body">
              <p>
                Our centre is at {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.pin}. Most {area.name} students settle into the {commute} commute within the first week and stop noticing it - the classroom routine becomes the more memorable part of the evening.
              </p>
              <p>
                We do not ask any {area.name} family to commit on a phone call. Every student gets 7 days of free demo classes in the exact batch they would join, taught by the exact faculty member, with no registration fee. Walk in, sit through a real week of classes, and decide only once you have seen it firsthand.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal">
                Quick facts for {area.name}
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <dt className="text-muted">Distance from {area.name}</dt>
                  <dd className="font-medium text-charcoal">
                    {area.distanceKm === 0 ? "We are here" : `${area.distanceKm} km`}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <dt className="text-muted">Approx commute</dt>
                  <dd className="font-medium text-charcoal">{commute}</dd>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <dt className="text-muted">Public transport</dt>
                  <dd className="font-medium text-charcoal">
                    {area.transport ?? "Auto / Metro"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Free demo</dt>
                  <dd className="font-medium text-charcoal">7 days, no fee</dd>
                </div>
              </dl>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                `Class 1 to 12 coaching, all subjects covered`,
                `Weekly Saturday tests and monthly mock papers`,
                `Air-conditioned classrooms`,
                `7 days of free demo classes before you decide`,
                `Monthly parent meetings with detailed progress notes`,
                `Faculty-prepared notes for Class 8 to 12`,
                `Batch size capped around 18 students`,
                `Nominal monthly fee, no hidden charges`,
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm leading-relaxed text-body"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-charcoal" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50/50 p-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-teal-700">
                Explore by class
              </p>
              <p className="mt-2 text-sm text-charcoal-soft">
                See what coaching looks like for your child&apos;s exact class:
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link href="/classes/class-10" className="font-semibold text-teal-700 hover:text-red-600">
                  Class 10 coaching
                </Link>
                <Link href="/classes/class-12" className="font-semibold text-teal-700 hover:text-red-600">
                  Class 12 coaching
                </Link>
                <Link href="/classes" className="font-semibold text-teal-700 hover:text-red-600">
                  View all classes (6-12)
                </Link>
                <Link href="/faculty" className="font-semibold text-teal-700 hover:text-red-600">
                  Meet our faculty
                </Link>
                <Link href="/results" className="font-semibold text-teal-700 hover:text-red-600">
                  See board results
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Other nearby areas"
            title={
              <>
                ESA also serves families from these{" "}
                <span className="text-charcoal">other localities</span>
              </>
            }
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {other.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="group flex items-center justify-between rounded border border-neutral-200 bg-white px-5 py-4 transition hover:border-neutral-400 hover:shadow"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-charcoal" />
                  <span className="text-sm font-medium text-charcoal">
                    {a.name}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:text-teal-700" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title={
              <>
                Questions parents in{" "}
                <span className="text-charcoal">{area.name}</span> ask us
              </>
            }
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-5">
            {faqs.map((f) => (
              <div
                key={f.question}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <h3 className="text-base font-bold text-charcoal">
                  {f.question}
                </h3>
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
