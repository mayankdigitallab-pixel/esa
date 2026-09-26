import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { nearbyAreas, neighbourAreas, type Area } from "@/data/areas";
import { findCentre, type Centre } from "@/data/centres";
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
  return area.distanceKm < 3
    ? "under 10 minutes"
    : area.distanceKm < 6
      ? "12 to 18 minutes"
      : "20 to 30 minutes";
}

function nearestCentreFor(area: Area): Centre {
  return findCentre(area.nearestCentre ?? "rohini-sector-7")!;
}

/** FAQs built from this area's own data, so no two area pages share the same set. */
function areaFaqs(area: Area, centre: Centre, neighbours: Area[]) {
  const faqs: { question: string; answer: string }[] = [
    {
      question: `Which ESA centre is closest to ${area.name}?`,
      answer:
        centre.slug === "rohini-sector-7"
          ? `The Rohini Sector 7 flagship centre at ${centre.fullAddress}, about ${area.distanceKm} km from ${area.name} - roughly ${commutePhrase(area)} by auto or e-rickshaw.`
          : `The Rohini Sector 15 centre (${centre.fullAddress}), near the Sector 15 market and bus stop, is the closer option for ${area.name}. The Sector 7 flagship is about ${area.distanceKm} km away if you prefer its wider batch choice.`,
    },
  ];
  if (area.transport || area.landmark) {
    faqs.push({
      question: `How do students from ${area.name} reach ESA?`,
      answer: area.transport
        ? `Most students come by ${area.transport}. Local reference point: ${area.landmark ?? area.name}.`
        : `The usual reference point is ${area.landmark}. From there it is a ${commutePhrase(area)} ride by auto or e-rickshaw to the centre.`,
    });
  }
  if (area.nearbySchools && area.nearbySchools.length > 0) {
    faqs.push({
      question: `Which schools do ESA students from ${area.name} attend?`,
      answer: `Our ${area.name} students come from ${area.nearbySchools.join(", ")}, among others. Batch timings are planned around local school dismissal times.`,
    });
  }
  faqs.push(
    {
      question: `What classes and subjects can a student from ${area.name} join?`,
      answer: `Class 1 to 12 for CBSE, ICSE and State Boards - Mathematics, Science, Social Science, English, Hindi, Sanskrit (Class 6-10), and Physics, Chemistry, Biology, Accountancy, Business Studies, Economics, Computer Science (Class 11-12). ESA prepares students for school and board exams only.`,
    },
    {
      question: `Can I book a free demo class for my child from ${area.name}?`,
      answer: `Yes - 7 days of free demo classes in the real batch, no registration fee. Call or WhatsApp the ${centre.shortName} centre on ${centre.phoneDisplay} to book a slot.`,
    },
  );
  if (neighbours.length > 0) {
    faqs.push({
      question: `Does ESA also teach students from areas near ${area.name}?`,
      answer: `Yes. Families from neighbouring ${neighbours
        .slice(0, 4)
        .map((n) => n.name)
        .join(", ")} also send their children to ESA.`,
    });
  }
  return faqs;
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
  const centre = nearestCentreFor(area);
  const title = `Coaching in ${area.name} | Class 1-12 Tuition | ESA`;
  const description =
    centre.slug === "rohini-sector-7"
      ? `Class 1-12 tuition for ${area.name} students at ESA Rohini Sector 7, ${area.distanceKm} km away. Math, Science, Commerce, weekly tests. Free demo class.`
      : `Class 1-12 tuition for ${area.name} students at ESA's nearby Rohini Sector 15 centre. Math, Science, Commerce, weekly tests. Free demo class.`;
  return {
    title,
    description,
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
      title,
      description,
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

  const centre = nearestCentreFor(area);
  const otherCentre = findCentre(
    centre.slug === "rohini-sector-7" ? "rohini-sector-15" : "rohini-sector-7",
  )!;
  const areaIndex = nearbyAreas.findIndex((a) => a.slug === area.slug);
  const neighbours = neighbourAreas(area.slug);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Centres", href: "/centres" },
    { name: area.name, href: `/areas/${area.slug}` },
  ]);
  const faqs = areaFaqs(area, centre, neighbours);
  const commute = commutePhrase(area);
  const pageUrl = `https://www.theesa.in/areas/${area.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Class 1-12 coaching for students in ${area.name}`,
    serviceType: "School tuition and board exam coaching",
    url: pageUrl,
    provider: { "@id": `https://www.theesa.in${centre.landingPath}#localbusiness` },
    areaServed: { "@type": "Place", name: `${area.name}, Delhi` },
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
  };

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <script {...jsonLd(faqSchema(faqs))} />
      <script {...jsonLd(serviceSchema)} />
      <PageBanner
        label={`Coaching · ${area.name}`}
        image={areaImage(areaIndex, "banner")}
        imageAlt={`Coaching classes for students in ${area.name}`}
        heading={<>Best coaching for Class 1 to 12 in {area.name}.</>}
        subtitle={`ESA's ${centre.shortName} centre is the nearest branch for ${area.name} families, with weekly Saturday tests, small batches and faculty who stay with the same batch year after year.`}
      />

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              className="mb-6"
              eyebrow={`Coaching in ${area.name}`}
              title={
                <>
                  Your nearest ESA centre from{" "}
                  <span className="text-charcoal">{area.name}</span>
                </>
              }
            />
            <div className="space-y-5 text-[15px] leading-relaxed text-body">
              <p>
                {area.description}{" "}
                {centre.slug === "rohini-sector-7"
                  ? `Our Rohini Sector 7 flagship is about ${area.distanceKm} km away - a ${commute} ride for most students, close enough that a Saturday test or an evening doubt session never feels like a big ask.`
                  : `For ${area.name}, our Rohini Sector 15 branch near the Sector 15 market is the closer centre, and the Sector 7 flagship (about ${area.distanceKm} km) is there if you need a wider choice of batches.`}
              </p>
              {area.localCopy ? (
                <p className="rounded-2xl border border-teal-200 bg-teal-50/50 p-5 text-charcoal">
                  {area.localCopy}
                </p>
              ) : null}
            </div>

            {/* Local snapshot - every row comes from this area's own data */}
            <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-charcoal">
                {area.name} at a glance
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-6 border-b border-neutral-200 pb-2">
                  <dt className="shrink-0 text-muted">Nearest ESA centre</dt>
                  <dd className="text-right font-medium text-charcoal">
                    <Link href={centre.landingPath!} className="text-teal-700 hover:text-red-600">
                      {centre.name}
                    </Link>
                  </dd>
                </div>
                <div className="flex justify-between gap-6 border-b border-neutral-200 pb-2">
                  <dt className="shrink-0 text-muted">Distance to Sector 7 flagship</dt>
                  <dd className="text-right font-medium text-charcoal">
                    {area.distanceKm} km · about {commute}
                  </dd>
                </div>
                {area.landmark ? (
                  <div className="flex justify-between gap-6 border-b border-neutral-200 pb-2">
                    <dt className="shrink-0 text-muted">Local landmark</dt>
                    <dd className="text-right font-medium text-charcoal">{area.landmark}</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-6 border-b border-neutral-200 pb-2">
                  <dt className="shrink-0 text-muted">Getting there</dt>
                  <dd className="text-right font-medium text-charcoal">
                    {area.transport ?? "Auto, e-rickshaw or two-wheeler"}
                  </dd>
                </div>
                {area.nearbySchools && area.nearbySchools.length > 0 ? (
                  <div className="flex justify-between gap-6 border-b border-neutral-200 pb-2">
                    <dt className="shrink-0 text-muted">Students&apos; schools</dt>
                    <dd className="text-right font-medium text-charcoal">
                      {area.nearbySchools.join(", ")}
                    </dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-6 border-b border-neutral-200 pb-2">
                  <dt className="shrink-0 text-muted">Classes</dt>
                  <dd className="text-right font-medium text-charcoal">
                    Class 1 to 12 (CBSE, ICSE, State Board)
                  </dd>
                </div>
                <div className="flex justify-between gap-6 border-b border-neutral-200 pb-2">
                  <dt className="shrink-0 text-muted">Subjects</dt>
                  <dd className="text-right font-medium text-charcoal">
                    Math, Science, SST, English, Hindi, Sanskrit; Class 11-12: Physics, Chemistry, Biology, Accountancy, Business Studies, Economics, Computer Science
                  </dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="shrink-0 text-muted">Free demo</dt>
                  <dd className="text-right font-medium text-charcoal">7 days, no fee</dd>
                </div>
              </dl>
            </div>

            {/* Nearest centre contact card */}
            <div className="mt-8 rounded-2xl border border-teal-200 bg-white p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700">
                Visit {centre.name}
              </p>
              <p className="mt-3 flex items-start gap-2 text-[15px] text-charcoal">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                {centre.fullAddress}
              </p>
              <p className="mt-2 text-sm text-body">
                Centre in-charge: {centre.inCharge} · Open {siteConfig.hours.weekdays}, Monday to Saturday
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href={`tel:${centre.phone}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-charcoal px-4 py-2.5 font-semibold text-white hover:bg-black"
                >
                  <Phone className="h-4 w-4" />
                  {centre.phoneDisplay}
                </a>
                <a
                  href={centre.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2.5 font-semibold text-charcoal hover:border-neutral-500"
                >
                  Directions on Google Maps
                </a>
                <Link
                  href={centre.landingPath!}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2.5 font-semibold text-charcoal hover:border-neutral-500"
                >
                  Centre details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">
                Also nearby:{" "}
                <Link
                  href={otherCentre.landingPath!}
                  className="font-semibold text-teal-700 hover:text-red-600"
                >
                  {otherCentre.name}
                </Link>{" "}
                ({otherCentre.phoneDisplay})
              </p>
            </div>

            {/* Owner-verified local proof: renders only once real info is added in data/areas.ts */}
            {area.localResults || area.testimonial ? (
              <div className="mt-8 space-y-5">
                {area.localResults ? (
                  <p className="rounded-2xl border border-neutral-200 bg-white p-6 text-[15px] leading-relaxed text-charcoal">
                    <strong className="font-semibold">Results from {area.name}:</strong>{" "}
                    {area.localResults}
                  </p>
                ) : null}
                {area.testimonial ? (
                  <figure className="rounded-2xl border border-neutral-200 bg-white p-6">
                    <blockquote className="text-[15px] italic leading-relaxed text-charcoal">
                      &ldquo;{area.testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-3 text-sm text-muted">- {area.testimonial.by}</figcaption>
                  </figure>
                ) : null}
              </div>
            ) : null}

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
                Small batches and subject-specialist faculty - the classroom {area.name} students join.
              </figcaption>
            </figure>

            <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              How ESA teaches
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Every Saturday, students write a test on the chapter taught that week; papers are corrected within 48 hours and parents get a scorecard on WhatsApp. Batches are capped at around 18, faculty stay with the same batch across years, and the first Saturday of each month is a sit-down parent meeting with the subject teacher. Our most recent CBSE batch averaged 84% with every student passing, and 32 students scored above 90%. See the{" "}
              <Link href="/results" className="font-semibold text-teal-700 hover:text-red-600">
                full results
              </Link>{" "}
              or{" "}
              <Link href="/faculty" className="font-semibold text-teal-700 hover:text-red-600">
                meet the faculty
              </Link>
              .
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                `Class 1 to 12 coaching, all subjects covered`,
                `Weekly Saturday tests and monthly mock papers`,
                `Air-conditioned classrooms`,
                `7 days of free demo classes before you decide`,
                `Monthly parent meetings with detailed progress notes`,
                `Faculty-prepared notes for Class 8 to 12`,
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
                <Link href="/classes/class-9" className="font-semibold text-teal-700 hover:text-red-600">
                  Class 9 coaching
                </Link>
                <Link href="/classes/class-10" className="font-semibold text-teal-700 hover:text-red-600">
                  Class 10 coaching
                </Link>
                <Link href="/classes/class-12" className="font-semibold text-teal-700 hover:text-red-600">
                  Class 12 coaching
                </Link>
                <Link href="/classes" className="font-semibold text-teal-700 hover:text-red-600">
                  All classes
                </Link>
                <Link href="/timetable" className="font-semibold text-teal-700 hover:text-red-600">
                  Batch timings
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {neighbours.length > 0 ? (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow={`Near ${area.name}`}
              title={
                <>
                  ESA also teaches students from{" "}
                  <span className="text-charcoal">neighbouring areas</span>
                </>
              }
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {neighbours.map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="group flex items-center justify-between rounded border border-neutral-200 bg-white px-5 py-4 transition hover:border-neutral-400 hover:shadow"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-charcoal" />
                    <span className="text-sm font-medium text-charcoal">{a.name}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:text-teal-700" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

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
                <h3 className="text-base font-bold text-charcoal">{f.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{f.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
