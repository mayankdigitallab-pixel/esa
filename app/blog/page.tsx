import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | ESA Rohini",
  description:
    "Coaching tips, topper stories, parent guides and board exam strategy from Excellent Students' Academy Rohini. Local insights for parents in Rohini, Pitampura, Shalimar Bagh.",
  alternates: { canonical: "https://www.theesa.in/blog" },
  keywords: [
    "coaching blog Rohini",
    "ESA blog",
    "CBSE prep tips",
    "Class 10 board strategy",
    "Class 12 study tips",
    "parent guide coaching Rohini",
  ],
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const [featured, ...rest] = sorted;
  return (
    <div>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">Blog</span></div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl">
              Stories, strategies and{" "}
              <span className="text-neutral-950">topper journeys</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              Practical guides for parents, exam strategies for students and
              real stories from inside our Rohini classrooms.
            </p>
          </div>
        </Container>
      </section>

      {featured ? (
        <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
          <Container>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid items-center gap-8 rounded border border-neutral-200 bg-white p-6 transition hover:border-neutral-400 hover:shadow-xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded sm:aspect-[5/4]">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition group-hover:scale-105"
                  priority
                />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-neutral-950">
                  {featured.category}
                </span>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs uppercase tracking-wider text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(featured.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 transition group-hover:text-neutral-950">
                  Read full story
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="More from the blog"
            title={<>Recent posts</>}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group overflow-hidden rounded border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-950">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-950 group-hover:text-neutral-950 sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body line-clamp-3">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-wider text-muted">
                    <span>
                      {new Date(p.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                    <span>{p.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
