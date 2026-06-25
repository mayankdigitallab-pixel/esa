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
  CheckCircle2,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { EnquiryForm } from "@/components/EnquiryForm";
import type { Centre } from "@/data/centres";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

const BASE = "https://www.theesa.in";

function buildCentreFaqSchema(centre: Centre) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE}${centre.landingPath}#faq`,
    mainEntity: centre.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

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
  const faqSchema = centre.faqs.length > 0 ? buildCentreFaqSchema(centre) : null;
  const highlights = defaultHighlights(centre);
  const waMessage = `Hello ${centre.name}, I want to book a free demo class for my child.`;

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <script {...jsonLd(localBusiness)} />
      {faqSchema && <script {...jsonLd(faqSchema)} />}

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

      <section className="relative overflow-hidden border-t border-neutral-200 py-16 sm:py-20" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ecfeff 100%)" }}>
        <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-red-300/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/20 blur-3xl" aria-hidden />
        <Container className="relative">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-3 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700 shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Centre In-charge
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              Meet <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">{centre.inCharge}</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">
              {centre.inChargeRole} at {centre.shortName}. Your direct point of contact for
              admissions, timing, fee, attendance and any parent meeting at this centre.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl">
            {/* Accent gradient ribbon at top */}
            <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 via-amber-400 to-red-500" />

            <div className="grid gap-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
              {/* LEFT: photo column with deeper gradient */}
              <div
                className="relative flex flex-col gap-6 overflow-hidden p-6 sm:p-8 lg:p-10"
                style={{ background: "linear-gradient(135deg, #134e4a 0%, #0f766e 35%, #0d9488 70%, #14b8a6 100%)" }}
              >
                {/* Decorative pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 35%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.4) 0%, transparent 35%)",
                  }}
                  aria-hidden
                />
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/15" aria-hidden />
                <div className="pointer-events-none absolute -left-16 bottom-1/3 h-56 w-56 rounded-full border border-white/10" aria-hidden />

                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white/10 shadow-2xl ring-2 ring-white/20">
                  {centre.inChargePhoto ? (
                    <Image
                      src={centre.inChargePhoto}
                      alt={`${centre.inCharge}, ${centre.inChargeRole} at ${centre.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-600 to-teal-800">
                      <span className="text-7xl font-bold tracking-tight text-white/90 sm:text-8xl">
                        {inChargeInitials(centre.inCharge)}
                      </span>
                    </div>
                  )}
                  {centre.isFlagship && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-950 shadow-lg">
                      ★ Flagship
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-3 px-4 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal-200">
                      {centre.shortName}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal-200">
                    {centre.inChargeRole}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">
                    {centre.inCharge}
                  </h3>
                  <p className="mt-1 text-sm text-teal-100/80">
                    {centre.city} · {centre.state}
                  </p>
                  {(centre.inChargeQualification || centre.inChargeExperience) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {centre.inChargeQualification && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm ring-1 ring-white/20">
                          <GraduationCap className="h-3 w-3" />
                          {centre.inChargeQualification}
                        </span>
                      )}
                      {centre.inChargeExperience && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm ring-1 ring-white/20">
                          <ShieldCheck className="h-3 w-3" />
                          {centre.inChargeExperience}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT: bio + highlights + stats + CTAs */}
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

                <div
                  className="relative overflow-hidden rounded-2xl p-5"
                  style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0fdfa 100%)" }}
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal-400 to-teal-600" aria-hidden />
                  <p className="text-sm leading-relaxed text-charcoal sm:text-base">
                    <span className="font-bold text-teal-700">Direct line:</span> reach{" "}
                    {centre.inCharge.replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/, "")} during working hours
                    for any concern - timing, fee, attendance, syllabus or a one-on-one mentoring
                    slot for your child.
                  </p>
                </div>

                {/* Highlights checklist - centre-specific */}
                {centre.highlights.length > 0 && (
                  <div>
                    <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      What&apos;s special about this centre
                    </p>
                    <ul className="mt-3 grid gap-2.5">
                      {centre.highlights.map((h, i) => {
                        const palette = [
                          { bg: "bg-teal-50", text: "text-teal-600", ring: "ring-teal-200" },
                          { bg: "bg-red-50", text: "text-red-600", ring: "ring-red-200" },
                          { bg: "bg-amber-50", text: "text-amber-600", ring: "ring-amber-200" },
                          { bg: "bg-indigo-50", text: "text-indigo-600", ring: "ring-indigo-200" },
                        ];
                        const p = palette[i % palette.length];
                        return (
                          <li
                            key={i}
                            className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-3 transition hover:border-teal-300 hover:shadow-sm"
                          >
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${p.bg} ${p.text} ring-1 ${p.ring}`}
                            >
                              <CheckCircle2 className="h-4 w-4" />
                            </span>
                            <span className="text-sm leading-relaxed text-charcoal">{h}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <dl className="grid grid-cols-3 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <div className="bg-gradient-to-br from-teal-50 to-white p-4 text-center">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-teal-700">
                      Centre
                    </dt>
                    <dd className="mt-1 text-xs font-bold text-charcoal sm:text-sm">
                      {centre.shortName}
                    </dd>
                  </div>
                  <div className="border-x border-neutral-200 bg-gradient-to-br from-amber-50 to-white p-4 text-center">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-amber-700">
                      Hours
                    </dt>
                    <dd className="mt-1 text-xs font-bold text-charcoal sm:text-sm">
                      10 AM - 8:30 PM
                    </dd>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-white p-4 text-center">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-red-700">
                      Days
                    </dt>
                    <dd className="mt-1 text-xs font-bold text-charcoal sm:text-sm">Mon - Sat</dd>
                  </div>
                </dl>

                <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={`tel:${centre.phone}`}
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/30 transition hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/40"
                  >
                    <Phone className="h-4 w-4 transition group-hover:rotate-12" />
                    Call {centre.shortName}
                  </a>
                  <a
                    href={centreWa(centre, waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#1ea855] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:shadow-xl hover:shadow-[#25D366]/40"
                  >
                    <MessageCircle className="h-4 w-4 transition group-hover:rotate-12" />
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

      {centre.faqs.length > 0 && (
        <section className="relative overflow-hidden border-t border-neutral-200 bg-white py-16 sm:py-20">
          <div className="pointer-events-none absolute -right-40 top-12 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -left-40 bottom-12 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" aria-hidden />
          <Container className="relative">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700">
                <HelpCircle className="h-3.5 w-3.5" />
                FAQs · {centre.shortName}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Common questions from{" "}
                <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">
                  {centre.city}
                </span>{" "}
                parents.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                Specific to our {centre.shortName} centre. For anything not covered here,
                WhatsApp {centre.inCharge.replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/, "")} directly.
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-3">
              {centre.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-neutral-200 bg-white shadow-sm transition open:shadow-md hover:border-teal-300"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-xs font-bold text-teal-700 ring-1 ring-teal-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold leading-snug text-charcoal sm:text-lg">
                        {f.question}
                      </h3>
                    </div>
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-teal-600 transition group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 pl-[3.75rem] sm:px-6 sm:pb-6 sm:pl-[4rem]">
                    <p className="text-sm leading-relaxed text-body sm:text-base">{f.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-neutral-200 bg-gradient-to-br from-teal-50 via-white to-red-50 p-6 text-center sm:p-8">
              <p className="text-sm font-semibold text-charcoal sm:text-base">
                Still have a question about {centre.shortName}?
              </p>
              <p className="mt-1.5 text-sm text-body">
                Reach {centre.inCharge} directly - same-day reply during working hours.
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`tel:${centre.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-red-600"
                >
                  <Phone className="h-4 w-4" />
                  Call {centre.shortName}
                </a>
                <a
                  href={centreWa(centre, waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1ea855]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="relative overflow-hidden border-t border-neutral-200 py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #134e4a 0%, #0f766e 40%, #134e4a 100%)" }}>
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            {/* LEFT: Pitch + contact cards */}
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-teal-200 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                Book Your Demo · Free
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Free demo class at our{" "}
                <span className="bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                  {centre.shortName}
                </span>{" "}
                centre.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                Walk in. Sit through an actual batch. Meet the faculty. Decide only after.
                No fee, no commitment - this is how we earn enrolments.
              </p>

              {/* What happens next */}
              <ul className="mt-7 grid gap-3">
                {[
                  "We call back within working hours to fix a slot",
                  "Your child sits through a real running batch",
                  `Meet ${centre.inCharge.replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/, "")} - direct line for any question`,
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-[11px] font-bold text-amber-950 shadow-md"
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-white/85">{step}</span>
                  </li>
                ))}
              </ul>

              {/* Contact cards */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${centre.phone}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition hover:border-amber-300/50 hover:bg-white/15"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-400 to-red-600 text-white shadow-md transition group-hover:scale-105">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                      Call us
                    </p>
                    <p className="mt-0.5 truncate text-sm font-bold text-white">
                      {centre.phoneDisplay}
                    </p>
                  </div>
                </a>
                <a
                  href={centreWa(centre, waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition hover:border-[#25D366]/50 hover:bg-white/15"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#34d97e] to-[#1ea855] text-white shadow-md transition group-hover:scale-105">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                      WhatsApp
                    </p>
                    <p className="mt-0.5 truncate text-sm font-bold text-white">
                      {centre.whatsappDisplay}
                    </p>
                  </div>
                </a>
              </div>

              {/* Trust signal */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-300" />
                  No advance payment
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-300" />
                  Same-day callback
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-amber-300" />
                  500+ parents enrolled
                </span>
              </div>
            </div>

            {/* RIGHT: form card */}
            <div
              id="enquiry"
              className="relative scroll-mt-24 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
            >
              {/* Gradient header strip */}
              <div className="relative h-2 w-full bg-gradient-to-r from-teal-500 via-amber-400 to-red-500" />
              <div className="relative bg-gradient-to-br from-neutral-50 to-white p-6 sm:p-8 lg:p-10">
                <EnquiryForm />
                <p className="mt-5 text-center text-[11px] text-muted">
                  Your details stay with our {centre.shortName} centre only.
                  We do not share contact info.
                </p>
              </div>
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
