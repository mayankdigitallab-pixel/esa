import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { ResultsGrid } from "@/components/ResultsGrid";
import { toppers } from "@/data/results";

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
          <ResultsGrid items={toppers} />
        </Container>
      </section>
    </div>
  );
}
