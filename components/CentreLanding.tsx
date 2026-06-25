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
import type { Centre } from "@/data/centres";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

const BASE = "https://www.theesa.in";

function buildLocalBusinessSchema(centre: Centre) {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${BASE}${centre.landingPath}#localbusiness`,
    name: centre.name,
    parentOrganization: { "@id": `${BASE}/#organization` },
    url: `${BASE}${centre.landingPath}`,
    image: centre.photos.length
      ? centre.photos.map((p) => `${BASE}${p}`)
      : [`${BASE}/og-image.jpg`],
    description: centre.metaDescription,
    telephone: centre.phone,
    email: centre.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: centre.addressLines[0],
      addressLocality: centre.city,
      addressRegion: centre.state,
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
}

function defaultHighlights(centre: Centre) {
  return [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Class 1 to 12 coaching",
      body: `Foundation, board prep and senior secondary classes at our ${centre.shortName} centre.`,
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: `Headed by ${centre.inCharge}`,
      body: centre.inChargeQualification
        ? `${centre.inChargeQualification}${centre.inChargeExperience ? " · " + centre.inChargeExperience : ""}. ${centre.inChargeRole} for every batch at this centre.`
        : `${centre.inChargeRole} at ${centre.shortName}. Direct point of contact for parents and students.`,
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
}

function centreWa(centre: Centre, text: string) {
  const num = centre.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
}

function inChargeInitials(name: string) {
  return name
    .replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/, "")
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type Props = {
  centre: Centre;
};

export function CentreLanding({ centre }: Props) {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Our Branches", href: "/centres" },
    { name: centre.shortName, href: centre.landingPath ?? "/centres" },
  ]);
  const localBusiness = buildLocalBusinessSchema(centre);
  const highlights = defaultHighlights(centre);
  const waMessage = `Hello ${centre.name}, I want to book a free demo class for my child.`;

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <script {...jsonLd(localBusiness)} />

      <PageBanner
        label={centre.shortName}
        image={centre.heroImage}
        imageAlt={`${centre.name} coaching centre`}
        heading={
          <>
            CBSE coaching in {centre.shortName.replace(/^(Rohini |Lucknow |Shakurpur ?)/, "$&")}.
          </>
        }
        subtitle={`Class 1 to 12 coaching at our ${centre.shortName} centre. Walk in for a free demo class - no fees, no pressure.`}
        right={
          <BannerStatsRight
            stats={[
              { value: "Class 1-12", label: "Coaching offered" },
              { value: "Mon-Sat", label: "10 AM to 8:30 PM" },
              { value: "Free", label: "Demo class" },
              { value: centre.isFlagship ? "Flagship" : "Branch", label: "Centre type" },
            ]}
          />
        }
      />

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={`Why ${centre.shortName}`}
            title={<>The same ESA system, at {centre.shortName}.</>}
            description="Operating since 2015 from our Rohini flagship - ESA has built its name on disciplined coaching, expert faculty and consistent board results. Every branch runs the same teaching framework."
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
            title={<>Meet {centre.inCharge}</>}
            description={`${centre.inChargeRole} at ${centre.shortName}. Direct point of contact for every parent and student at this centre.`}
          />
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-teal-500 to-teal-700">
                {centre.inChargePhoto ? (
                  <Image
                    src={centre.inChargePhoto}
                    alt={`${centre.inCharge}, ${centre.inChargeRole} at ${centre.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-7xl font-bold text-white/90">
                      {inChargeInitials(centre.inCharge)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-600">
                  {centre.inChargeRole}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-charcoal">{centre.inCharge}</h3>
                {(centre.inChargeQualification || centre.inChargeExperience) && (
                  <p className="mt-1 text-xs text-muted">
                    {[centre.inChargeQualification, centre.inChargeExperience]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-body sm:text-base">
              {centre.inChargeBio && <p>{centre.inChargeBio}</p>}
              <p>
                Parents can reach {centre.inCharge.replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/, "")} directly
                during working hours for any concern - timing, fee, attendance, syllabus or a
                one-on-one mentoring slot for their child.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${centre.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  <Phone className="h-4 w-4" />
                  Call {centre.shortName}
                </a>
                <a
                  href={centreWa(centre, waMessage)}
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
            title={centre.name}
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
                title={`${centre.name} location`}
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
                  <p className="mt-1 text-sm leading-relaxed text-body">{centre.fullAddress}</p>
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
                href={centreWa(centre, waMessage)}
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

          {centre.photos.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {centre.photos.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`${centre.name} centre photo ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
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
                Free demo class at our {centre.shortName} centre
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                Drop your details and we will call back within working hours to schedule your
                child&apos;s demo class. Walk in to our {centre.shortName} centre and sit
                through an actual batch before deciding.
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
                      href={centreWa(centre, waMessage)}
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
