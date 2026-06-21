import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
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
      <PageBanner
        label="Recent Results"
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
        imageAlt="ESA students celebrating their board exam results"
        heading={<>Students who turned hard work into real scores.</>}
        subtitle="Class 10 and Class 12 board results from our Rohini centre. Each name reflects months of weekly testing, mock exams and disciplined revision."
        right={
          <BannerStatsRight
            stats={[
              { value: "100%", label: "Pass percentage" },
              { value: "84%", label: "Average score" },
              { value: "95+", label: "Top scorers" },
              { value: "5+", label: "90%+ scorers" },
            ]}
          />
        }
      />

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
                    alt={`${t.name}, student at ESA Rohini`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute right-3 top-3 rounded bg-red-500 px-3 py-1.5 text-lg font-bold text-white shadow-lg">
                    {t.marks}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-charcoal">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {t.school ?? `${t.grade ?? ""}${t.stream ? ` | ${t.stream}` : ""}`}
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
