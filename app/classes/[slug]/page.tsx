import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, MessageCircleQuestion, TestTube2, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { classes } from "@/data/classes";
import { whatsappLink } from "@/data/site";
import { breadcrumbSchema, classCourseSchema, faqSchema, jsonLd, shareMeta } from "@/lib/seo";

export function generateStaticParams() {
  return classes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const classInfo = classes.find((c) => c.slug === slug);
  if (!classInfo) return {};
  const title = `${classInfo.label} Coaching in Rohini | ESA Coaching Centre`;
  const description = `Looking for coaching in Rohini for ${classInfo.label}? Explore ESA Coaching Centre's ${classInfo.label} program - subjects, teaching approach, weekly tests, doubt support and outcomes.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.theesa.in/classes/${classInfo.slug}` },
    keywords: [
      `${classInfo.label} coaching Rohini`,
      `${classInfo.label} tuition Rohini`,
      `${classInfo.label} coaching Delhi NCR`,
      `best coaching for ${classInfo.label}`,
      `${classInfo.label} CBSE coaching`,
      ...classInfo.subjects.map((s) => `${classInfo.label} ${s} coaching`),
    ],
    ...shareMeta({ title, description, path: `/classes/${classInfo.slug}` }),
  };
}

export default async function ClassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const classInfo = classes.find((c) => c.slug === slug);
  if (!classInfo) notFound();

  const index = classes.findIndex((c) => c.slug === classInfo.slug);
  const prev = index > 0 ? classes[index - 1] : null;
  const next = index < classes.length - 1 ? classes[index + 1] : null;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Classes", href: "/classes" },
    { name: classInfo.label, href: `/classes/${classInfo.slug}` },
  ]);

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <script {...jsonLd(classCourseSchema(classInfo))} />
      <script {...jsonLd(faqSchema(classInfo.faqs))} />
      <PageBanner
        label={`${classInfo.bandLabel} · ${classInfo.label}`}
        image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1920&q=80"
        imageAlt={`${classInfo.label} coaching batch at ESA Rohini`}
        heading={<>{classInfo.label} coaching at ESA Rohini.</>}
        subtitle={classInfo.whoFor}
      />

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              className="mb-6"
              eyebrow="Who this is for"
              title={<>Is {classInfo.label} the right fit?</>}
              description={classInfo.whoFor}
            />

            <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              Board and curriculum
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              {classInfo.boardContext}
            </p>

            <h2 className="mt-10 flex items-center gap-2 text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              <BookOpen className="h-6 w-6 text-teal-600" />
              Subjects taught in {classInfo.label}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {classInfo.subjects.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-charcoal" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-charcoal-soft">
              See the full program details on our{" "}
              <Link href={`/programs#${classInfo.programSlug}`} className="font-semibold text-teal-700 hover:text-red-600">
                {classInfo.bandLabel} program page
              </Link>
              .
            </p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              How we teach {classInfo.label}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              {classInfo.teachingApproach}
            </p>

            <h2 className="mt-10 flex items-center gap-2 text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              <TestTube2 className="h-6 w-6 text-teal-600" />
              Tests and assessment
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              {classInfo.testsAndAssessment}
            </p>

            <h2 className="mt-10 flex items-center gap-2 text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              <MessageCircleQuestion className="h-6 w-6 text-teal-600" />
              Doubt support
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              {classInfo.doubtSupport}
            </p>

            <h2 className="mt-10 flex items-center gap-2 text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              <TrendingUp className="h-6 w-6 text-teal-600" />
              Outcomes
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              {classInfo.outcomes}{" "}
              <Link href="/results" className="font-semibold text-teal-700 hover:text-red-600">
                See our full board results
              </Link>
              .
            </p>

            <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-widest text-charcoal">
                Explore more
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link href="/faculty" className="font-semibold text-teal-700 hover:text-red-600">Meet our faculty</Link>
                <Link href="/timetable" className="font-semibold text-teal-700 hover:text-red-600">Batch timings</Link>
                <Link href="/materials" className="font-semibold text-teal-700 hover:text-red-600">Study materials</Link>
                <Link href="/rohini-sector-7" className="font-semibold text-teal-700 hover:text-red-600">Rohini Sector 7 centre</Link>
                <Link href="/rohini-sector-15" className="font-semibold text-teal-700 hover:text-red-600">Rohini Sector 15 centre</Link>
                <Link href="/contact#enquiry" className="font-semibold text-teal-700 hover:text-red-600">Book a free demo</Link>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={whatsappLink(`Hello ESA, please share details for ${classInfo.label} coaching.`)}
                target="_blank"
                className="btn-primary"
              >
                Enquire on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact#enquiry" className="btn-outline">
                Book Free Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="FAQs"
              title={<>Questions about <span className="text-charcoal">{classInfo.label}</span> at ESA</>}
            />
            <div className="mt-8 space-y-5">
              {classInfo.faqs.map((f) => (
                <div key={f.question} className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <h3 className="text-base font-bold text-charcoal">{f.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-10">
        <Container>
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 text-sm font-semibold">
            {prev ? (
              <Link href={`/classes/${prev.slug}`} className="inline-flex items-center gap-1.5 text-teal-700 hover:text-red-600">
                <ArrowLeft className="h-4 w-4" />
                {prev.label}
              </Link>
            ) : (
              <span />
            )}
            <Link href="/classes" className="text-charcoal-soft hover:text-charcoal">
              All classes
            </Link>
            {next ? (
              <Link href={`/classes/${next.slug}`} className="inline-flex items-center gap-1.5 text-teal-700 hover:text-red-600">
                {next.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
