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

      <section className="relative overflow-hidden border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-32 bottom-12 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" aria-hidden />
        <Container className="relative">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              <span className="h-px w-10 bg-teal-500" />
              Centre In-charge
              <span className="h-px w-10 bg-teal-500" />
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Meet {centre.inCharge}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">
              {centre.inChargeRole} at {centre.shortName}. Your direct point of contact for
              admissions, timing, fee, attendance and any parent meeting at this centre.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
              {/* LEFT: photo column with teal gradient */}
              <div
                className="relative flex flex-col gap-6 p-6 sm:p-8 lg:p-10"
                style={{ background: "linear-gradient(135deg, #0d9488 0%, #0f766e 60%, #134e4a 100%)" }}
              >
                <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" aria-hidden />
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white/10 shadow-2xl ring-1 ring-white/10">
                  {centre.inChargePhoto ? (
                    <Image
                      src={centre.inChargePhoto}
                      alt={`${centre.inCharge}, ${centre.inChargeRole} at ${centre.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-7xl font-bold tracking-tight text-white/85 sm:text-8xl">
                        {inChargeInitials(centre.inCharge)}
                      </span>
                    </div>
                  )}
                  {centre.isFlagship && (
                    <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-950 shadow-md">
                      Flagship
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal-100">
                    {centre.inChargeRole}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">
                    {centre.inCharge}
                  </h3>
                  <p className="mt-1 text-sm text-teal-100/80">
                    {centre.shortName}, {centre.city}
                  </p>
                  {(centre.inChargeQualification || centre.inChargeExperience) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {centre.inChargeQualification && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm ring-1 ring-white/15">
                          <GraduationCap className="h-3 w-3" />
                          {centre.inChargeQualification}
                        </span>
                      )}
                      {centre.inChargeExperience && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm ring-1 ring-white/15">
                          <ShieldCheck className="h-3 w-3" />
                          {centre.inChargeExperience}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT: bio + stats + CTAs */}
              <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-teal-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    About
                  </p>
                  {centre.inChargeBio && (
                    <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                      {centre.inChargeBio}
                    </p>
                  )}
                </div>

                <div className="rounded-2xl border-l-4 border-teal-500 bg-teal-50/60 p-5">
                  <p className="text-sm leading-relaxed text-charcoal sm:text-base">
                    <span className="font-semibold">Direct line:</span> reach{" "}
                    {centre.inCharge.replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/, "")} during working hours
                    for any concern - timing, fee, attendance, syllabus or a one-on-one mentoring
                    slot for your child.
                  </p>
                </div>

                <dl className="grid grid-cols-3 gap-3 rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="text-center">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted">
                      Centre
                    </dt>
                    <dd className="mt-1 text-xs font-bold text-charcoal sm:text-sm">
                      {centre.shortName}
                    </dd>
                  </div>
                  <div className="border-x border-neutral-200 text-center">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted">
                      Hours
                    </dt>
                    <dd className="mt-1 text-xs font-bold text-charcoal sm:text-sm">
                      10 AM - 8:30 PM
                    </dd>
                  </div>
                  <div className="text-center">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted">
                      Days
                    </dt>
                    <dd className="mt-1 text-xs font-bold text-charcoal sm:text-sm">Mon - Sat</dd>
                  </div>
                </dl>

                <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={`tel:${centre.phone}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition hover:bg-red-600"
                  >
                    <Phone className="h-4 w-4" />
                    Call {centre.shortName}
                  </a>
                  <a
                    href={centreWa(centre, waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#1ea855]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Now
                  </a>
                </div>
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
