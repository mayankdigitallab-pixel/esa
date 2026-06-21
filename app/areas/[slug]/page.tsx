import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { nearbyAreas } from "@/data/areas";
import { siteConfig, whatsappLink } from "@/data/site";

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
      `home tuition ${area.name}`,
    ],
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

  const other = nearbyAreas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <div>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted transition hover:text-teal-700"
          >
            Home
          </Link>
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-charcoal" />
              <span className="eyebrow">
                {area.distanceKm === 0 ? "Our home base" : `${area.distanceKm} km from our centre`}
              </span></div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Best Coaching in{" "}
              <span className="text-charcoal">{area.name}</span> for
              Class 1 to 12
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              {area.description} Excellent Students&apos; Academy is the
              trusted coaching choice for {area.name} families looking for
              serious board exam preparation and consistent academic
              improvement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#enquiry" className="btn-primary">
                Book Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  `Hello ESA, I am from ${area.name} and want to enquire about coaching for my child`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                className="mb-6"
                eyebrow={`Coaching in ${area.name}`}
                title={
                  <>
                    What ESA offers{" "}
                    <span className="text-charcoal">
                      {area.name} families
                    </span>
                  </>
                }
                description={`Whether you live in ${area.name} and need a coaching centre within a quick drive, or you want focused tuition for your child without juggling multiple tutors, ESA is built around weekly progress and zero pressure.`}
              />
              <ul className="space-y-4">
                {[
                  `Class 1 to 12 coaching, all subjects covered`,
                  `Weekly Saturday tests and monthly mock papers`,
                  `Air-conditioned classrooms on two floors`,
                  `7 days of free demo classes before you decide`,
                  `Monthly parent meetings with detailed progress notes`,
                  `Faculty-prepared notes for Class 8 to 12`,
                  `Home tuition available within ${area.name} on request`,
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
            </div>
            <div className="rounded border border-neutral-200 bg-white p-7 sm:p-10">
              <p className="text-[11px] uppercase tracking-widest text-charcoal">
                Getting here from {area.name}
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-snug text-charcoal sm:text-3xl">
                Just {area.distanceKm === 0 ? "0" : area.distanceKm} km from{" "}
                {area.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Our centre is at {siteConfig.address.line1},{" "}
                {siteConfig.address.line2}, {siteConfig.address.city}{" "}
                {siteConfig.address.pin}.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <dt className="text-muted">Distance from {area.name}</dt>
                  <dd className="font-medium text-charcoal">
                    {area.distanceKm === 0 ? "We are here" : `${area.distanceKm} km`}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <dt className="text-muted">Approx commute</dt>
                  <dd className="font-medium text-charcoal">
                    {area.distanceKm < 3
                      ? "Under 10 minutes"
                      : area.distanceKm < 6
                        ? "12 to 18 minutes"
                        : "20 to 30 minutes"}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <dt className="text-muted">Public transport</dt>
                  <dd className="font-medium text-charcoal">Auto / Metro</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Home tuition</dt>
                  <dd className="font-medium text-charcoal">Available</dd>
                </div>
              </dl>
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
    </div>
  );
}
