import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner } from "@/components/ui/PageBanner";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ | Coaching Questions Answered | ESA Rohini",
  description:
    "Common questions about coaching at Excellent Students' Academy Rohini. Demo classes, fees, batch timings, subjects, home tuition and admission process answered.",
  alternates: { canonical: "https://www.theesa.in/faq" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageBanner
        label="Frequently Asked"
        image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Parents discussing coaching options for their child"
        heading={<>Questions parents ask before enrolling.</>}
        subtitle="If your question is not here, WhatsApp us or call. We respond within working hours and can answer most questions before you commit to a demo."
      />
      <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.question}
                className="group rounded border border-neutral-200 bg-white p-5 open:border-neutral-400 open:bg-white open:shadow-md"
                open={i === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-base font-semibold text-charcoal sm:text-lg">
                    {f.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-400 text-charcoal transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
