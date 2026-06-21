import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toppers, resultsStats } from "@/data/results";

export const metadata: Metadata = {
  title: "Board Results & Toppers | ESA Rohini",
  description:
    "Recent CBSE Class 10 and Class 12 board results from Excellent Students' Academy Rohini. 84% average score, 32+ students above 90%, 100% pass rate. Meet our toppers.",
  alternates: { canonical: "https://www.theesa.in/results" },
  keywords: [
    "best CBSE results Rohini",
    "top coaching Rohini",
    "Class 10 toppers Rohini",
    "Class 12 toppers Rohini",
    "best Math coaching results Rohini",
  ],
};

export default function ResultsPage() {
  return (
    <div>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">Results</span></div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              Where weekly tests turn into{" "}
              <span className="text-charcoal">board scores</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              A snapshot of how our Class 10 and Class 12 students performed in
              recent CBSE board exams. Behind every score is months of weekly
              testing, mock exams and disciplined revision.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-4">
            {resultsStats.map((s) => (
              <div
                key={s.label}
                className="rounded border border-neutral-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-4xl font-semibold text-charcoal sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Recent toppers"
            title={
              <>
                Students who reached{" "}
                <span className="text-charcoal">90 plus</span>
              </>
            }
            description="Real students from real ESA batches. Names shared with consent. Marks reflect the recent CBSE board cycle."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toppers.map((t) => (
              <article
                key={t.name}
                className="overflow-hidden rounded border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.name}, ${t.grade} student at ESA Rohini`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute right-3 top-3 rounded bg-neutral-950 px-3 py-1.5 text-lg font-semibold text-neutral-400 shadow-lg">
                    {t.marks}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-charcoal">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {t.grade}
                    {t.stream ? ` | ${t.stream}` : ""}
                  </p>
                  {t.quote ? (
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
