import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { articleSchema, breadcrumbSchema, jsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://www.theesa.in/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.theesa.in/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

function shortTitle(title: string) {
  const trimmed = title.split(":")[0] ?? title;
  return trimmed.length > 60 ? `${trimmed.slice(0, 57)}...` : trimmed;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: shortTitle(post.title), href: `/blog/${post.slug}` },
  ]);

  return (
    <div className="bg-neutral-50">
      <script {...jsonLd(articleSchema(post))} />
      <script {...jsonLd(breadcrumb)} />

      <article className="pb-20">
        {/* Breadcrumb */}
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 pt-8 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500 sm:pt-10"
          >
            <Link href="/" className="text-teal-700 transition hover:text-red-600">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-neutral-400" aria-hidden />
            <Link href="/blog" className="text-teal-700 transition hover:text-red-600">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3 text-neutral-400" aria-hidden />
            <span className="text-charcoal">{shortTitle(post.title)}</span>
          </nav>
        </Container>

        {/* Article paper */}
        <Container className="mt-6">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#F8F4EA] shadow-sm">
            {/* Hero image */}
            <figure className="px-6 pt-6 sm:px-10 sm:pt-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200 sm:aspect-[5/4]">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-center text-sm italic text-charcoal-soft">
                {post.excerpt}
              </figcaption>
            </figure>

            {/* Headline + meta */}
            <header className="px-6 pt-8 sm:px-10 sm:pt-12">
              <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700">
                {post.category}
              </span>
              <h1
                className="mt-5 m-0 text-charcoal"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.015em",
                }}
              >
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-600 sm:text-[13px]">
                <span>By</span>
                <span className="font-semibold text-teal-700">{post.author}</span>
                <span className="text-neutral-300">·</span>
                <span>
                  Last reviewed{" "}
                  <time dateTime={post.date} className="font-semibold text-charcoal">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </span>
                <span className="text-neutral-300">·</span>
                <span className="font-medium">{post.readTime}</span>
              </div>
            </header>

            {/* Body */}
            <div className="px-6 pb-12 pt-8 sm:px-10 sm:pt-10">
              <div
                className="prose-esa mx-auto"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </div>

            {/* Company CTA */}
            <div className="border-t border-neutral-200 bg-charcoal px-6 py-12 text-center text-white sm:px-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300">
                Excellent Students&apos; Academy
              </p>
              <h2
                className="mt-4 text-white"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                Want this kind of coaching for your child?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Book a free 7-day demo at our Rohini Sector 7 centre. Real batch, real faculty, no commitment.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/contact#enquiry" className="btn-primary">
                  Book Free Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore programs
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </article>

      {/* Keep reading */}
      <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700">
              Keep reading
            </p>
            <h2
              className="mt-3 text-charcoal"
              style={{
                fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              More from the ESA blog.
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-teal-700 backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold leading-snug tracking-tight text-charcoal group-hover:text-teal-700">
                      {p.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                      Read
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
