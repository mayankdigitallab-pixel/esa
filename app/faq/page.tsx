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
      <section className="bg-cream-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">FAQ</span>
              <span className="gold-divider" />
            </div>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              Questions, answered{" "}
              <span className="text-gold-600 italic">honestly</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              The questions parents and students ask us most often. If yours
              isn&apos;t covered, WhatsApp us and we will reply within working
              hours.
            </p>
          </div>
        </Container>
      </section>
      <section className="border-t border-cream-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.question}
                className="group rounded border border-cream-200 bg-cream-50 p-5 open:border-gold-400 open:bg-white open:shadow-md"
                open={i === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-serif text-base font-semibold text-navy-900 sm:text-lg">
                    {f.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold-400 text-gold-700 transition group-open:rotate-45">
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
