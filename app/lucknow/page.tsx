import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Users,
  BookOpen,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { EnquiryForm } from "@/components/EnquiryForm";
import { findCentre } from "@/data/centres";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

const centre = findCentre("lucknow-thakurganj")!;
const BASE = "https://www.theesa.in";
const lucknowWa = (text: string) =>
  `https://wa.me/${centre.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;

export const metadata: Metadata = {
  title: "Coaching in Lucknow Thakurganj | ESA Lucknow Centre",
  description:
    "Excellent Students' Academy Lucknow centre at Thakurganj, Chowk. Class 1 to 12 CBSE coaching, board prep and foundation classes. Headed by Mr. Ashok Rastogi - B.Tech, 11 years.",
  alternates: { canonical: `${BASE}/lucknow` },
  keywords: [
    "coaching in Lucknow",
    "coaching in Thakurganj Lucknow",
    "CBSE tuition Lucknow",
    "Class 10 coaching Lucknow",
    "Class 12 coaching Lucknow",
    "ESA Lucknow",
    "Ashok Rastogi ESA",
  ],
};

const lucknowLocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${BASE}/lucknow#localbusiness`,
  name: "ESA Lucknow Thakurganj",
  parentOrganization: { "@id": `${BASE}/#organization` },
  url: `${BASE}/lucknow`,
  image: [`${BASE}/centres/lucknow-1.jpg`, `${BASE}/centres/lucknow-2.jpg`],
  description:
    "ESA coaching centre in Thakurganj, Lucknow. Class 1 to 12 CBSE coaching, headed by centre in-charge Mr. Ashok Rastogi.",
  telephone: centre.phone,
  email: centre.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building Sparkling Careers, Chowk, Thakur Ganj Hardoi Road",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: centre.pin,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: centre.geo.lat,
    longitude: centre.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:30",
    },
  ],
  hasMap: centre.mapLink,
};

const highlights = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Class 1 to 12 coaching",
    body: "Foundation, board prep and senior secondary - all under one roof in Thakurganj.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Headed by Mr. Ashok Rastogi",
    body: "B.Tech Mechanical Engineering with 11 years in education and centre operations.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "ESA-trained faculty",
    body: "Same teaching framework as our Rohini flagship - disciplined, board-focused, parent-friendly.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Weekly tests + revision",
    body: "Chapter-wise tests and mock papers built around CBSE answer patterns.",
  },
];

export default function LucknowPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Our Branches", href: "/centres" },
    { name: "Lucknow", href: "/lucknow" },
  ]);

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <script {...jsonLd(lucknowLocalBusiness)} />

      <PageBanner
        label="ESA Lucknow"
        image="/centres/lucknow-1.jpg"
        imageAlt="ESA Lucknow Thakurganj centre"
        heading={<>CBSE coaching in Thakurganj, Lucknow.</>}
        subtitle="Class 1 to 12 coaching at our Thakurganj centre. Headed by Mr. Ashok Rastogi, B.Tech with 11 years in education. Walk in for a free demo - no fees, no pressure."
        right={
          <BannerStatsRight
            stats={[
              { value: "Class 1-12", label: "Coaching offered" },
              { value: "11+ yrs", label: "In-charge experience" },
              { value: "Mon-Sat", label: "10 AM to 8:30 PM" },
              { value: "Free", label: "Demo class" },
            ]}
          />
        }
      />

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why ESA Lucknow"
            title="The same ESA system, now in Thakurganj."
            description="Operating since 2015 from Rohini, Delhi - ESA has built its name on disciplined coaching, expert faculty and consistent board results. The Lucknow centre brings that same framework to Thakurganj families."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                  {h.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-charcoal">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Centre In-charge"
            title="Meet Mr. Ashok Rastogi"
            description="Eleven years in education and centre management. Oversees daily operations, parent communication and academic discipline at every Lucknow batch."
          />
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/faculty/ashok-rastogi.jpg"
                  alt="Mr. Ashok Rastogi, Centre Incharge at ESA Lucknow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-600">
                  Centre Incharge
                </p>
                <h3 className="mt-1 text-lg font-semibold text-charcoal">Mr. Ashok Rastogi</h3>
                <p className="mt-1 text-xs text-muted">B.Tech, Mechanical Engineering · 11 years</p>
              </div>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-body sm:text-base">
              <p>
                Mr. Ashok Rastogi runs the ESA Lucknow centre at Thakurganj. With a B.Tech in
                Mechanical Engineering and eleven years working in education and student
                mentoring, he handles everything from admissions and parent meetings to academic
                planning for every batch.
              </p>
              <p>
                Parents can reach him directly during working hours for any concern - timing,
                fee, attendance, syllabus or a one-on-one mentoring slot for their child.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${centre.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  <Phone className="h-4 w-4" />
                  Call Lucknow Centre
                </a>
                <a
                  href={lucknowWa(
                    "Hello ESA Lucknow, I want to book a free demo class for my child.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#1c9c4a] transition hover:bg-[#25D366]/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Visit Us"
            title="ESA Lucknow Thakurganj"
            description={centre.fullAddress}
          />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <iframe
                src={centre.mapEmbedUrl}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ESA Lucknow Thakurganj location"
                className="border-0"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-charcoal">Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {centre.fullAddress}
                  </p>
                  <a
                    href={centre.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-teal-700 hover:underline"
                  >
                    Get Directions <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <a
                href={`tel:${centre.phone}`}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-charcoal">Call</p>
                  <p className="mt-1 text-sm text-body">{centre.phoneDisplay}</p>
                  <p className="mt-1 text-xs text-muted">10 AM to 8:30 PM, Mon to Sat</p>
                </div>
              </a>
              <a
                href={lucknowWa(
                  "Hello ESA Lucknow, I want to book a free demo class for my child.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-charcoal">WhatsApp</p>
                  <p className="mt-1 text-sm text-body">{centre.whatsappDisplay}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-green-700">
                    Fastest response
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {centre.photos.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm"
              >
                <Image
                  src={src}
                  alt={`ESA Lucknow Thakurganj centre photo ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700">
                Book Your Demo
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Free demo class at our Lucknow centre
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                Drop your details and we will call back within working hours to schedule
                your child&apos;s demo class. Walk in to our Thakurganj centre and sit through an
                actual batch before deciding.
              </p>
              <div className="mt-6 space-y-3 text-sm text-body">
                <div className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span>Or call us directly:</span>
                    <a
                      href={`tel:${centre.phone}`}
                      className="font-semibold text-charcoal hover:text-teal-700"
                    >
                      {centre.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span>WhatsApp:</span>
                    <a
                      href={lucknowWa(
                        "Hello ESA Lucknow, I want to book a free demo class for my child.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-charcoal hover:text-teal-700"
                    >
                      {centre.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="enquiry"
              className="scroll-mt-24 rounded-2xl border border-neutral-200 bg-white p-7 shadow-lg sm:p-10"
            >
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-12">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-body">
              Want to see all our centres across Delhi and Lucknow?
            </p>
            <Link
              href="/centres"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:bg-charcoal hover:text-white"
            >
              View All Branches
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
