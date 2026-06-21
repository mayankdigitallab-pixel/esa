import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faculty } from "@/data/faculty";

export const metadata: Metadata = {
  title: "Our Faculty | Expert Teachers at ESA Rohini",
  description:
    "Meet the faculty at Excellent Students' Academy Rohini. Experienced mentors with 6+ years coaching Math, Science, Commerce and English for Class 1 to 12 CBSE and ICSE.",
  alternates: { canonical: "https://www.theesa.in/faculty" },
  keywords: [
    "ESA faculty Rohini",
    "best Math teacher Rohini",
    "best Science teacher Rohini",
    "Chandan Prajapati ESA",
    "expert tutors Rohini",
  ],
};

export default function FacultyPage() {
  return (
    <div>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">Faculty</span></div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              The mentors behind{" "}
              <span className="text-charcoal">every result</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              Six senior faculty members. Every mentor at ESA has spent more
              than half a decade teaching the exact subject they handle today.
              No revolving-door teachers, no junior helpers running classes.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((f) => (
              <article
                key={f.slug}
                className="overflow-hidden rounded border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                  <Image
                    src={f.image}
                    alt={`${f.name}, ${f.title} at ESA Rohini`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent p-5">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-300">
                      {f.title}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {f.name}
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-semibold text-charcoal">
                      {f.experience}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      experience
                    </p>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {f.qualification}
                  </p>
                  <p className="text-sm font-semibold text-charcoal">
                    Teaches: {f.subjects}
                  </p>
                  <p className="text-sm leading-relaxed text-body">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 rounded border border-neutral-300 bg-neutral-50 p-8 text-center">
            <p className="text-xl font-semibold text-charcoal sm:text-2xl">
              Want to know which mentor will teach your child?
            </p>
            <p className="mt-2 text-sm text-body">
              Book a free demo. You will sit in their actual class.
            </p>
            <Link
              href="/contact#enquiry"
              className="mt-5 inline-flex items-center gap-2 rounded bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Book Free Demo Class
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
