import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.cover,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/icon-512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/blog/${post.slug}`,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="bg-cream-50 pb-20">
        <header className="border-b border-cream-200 bg-white py-12 sm:py-16">
          <Container>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted transition hover:text-gold-700"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              All posts
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-gold-700">
                {post.category}
              </span>
              <span className="gold-divider" />
            </div>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </Container>
        </header>

        <div className="relative aspect-[16/9] max-h-[420px] overflow-hidden bg-navy-100 sm:max-h-[520px]">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <Container className="mt-12 max-w-3xl">
          <div
            className="prose-esa"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </Container>
      </article>

      <section className="border-t border-cream-200 bg-white py-16 sm:py-20">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex items-center gap-5 rounded border border-cream-200 bg-cream-50 p-5 transition hover:border-gold-400 hover:shadow-lg"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded sm:h-28 sm:w-28">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold-700">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-serif text-base font-semibold leading-snug text-navy-900 group-hover:text-gold-700 sm:text-lg">
                    {p.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gold-700">
                    Read
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
