import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">FAQ</span></div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              Questions, answered{" "}
              <span className="text-charcoal">honestly</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              The questions parents and students ask us most often. If yours
              isn&apos;t covered, WhatsApp us and we will reply within working
              hours.
            </p>
          </div>
        </Container>
      </section>
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
