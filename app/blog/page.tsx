import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { BlogIndex } from "@/components/BlogIndex";
import { blogPosts } from "@/data/blog";
import { breadcrumbSchema, jsonLd, shareMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog | ESA Rohini",
  description:
    "Coaching tips, topper stories, parent guides and board exam strategy from Excellent Students' Academy Rohini. Local insights for parents across Delhi NCR - Rohini, Pitampura, Shalimar Bagh and nearby.",
  alternates: { canonical: "https://www.theesa.in/blog" },
  keywords: [
    "coaching blog Rohini",
    "ESA blog",
    "CBSE prep tips",
    "CBSE exam preparation blog",
    "Class 10 board strategy",
    "Class 12 study tips",
    "study tips for CBSE students",
    "parent guide coaching Rohini",
  ],
  ...shareMeta({
    title: "Blog | Coaching Tips & Board Exam Strategy | ESA Rohini",
    description:
      "Coaching tips, topper stories, parent guides and board exam strategy from Excellent Students' Academy Rohini. Local insights for parents across Delhi NCR - Rohini, Pitampura, Shalimar Bagh and nearby.",
    path: "/blog",
  }),
};

export default function BlogIndexPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ]);
  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <PageBanner
        label="ESA Blog"
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Student studying at Excellent Students Academy"
        heading={<>Guides for parents and students in Rohini.</>}
        subtitle="Board exam strategy, stream choice, coaching selection, study habits and Rohini-specific parenting tips from the faculty at ESA."
      />

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <Container>
          <BlogIndex posts={blogPosts} />
        </Container>
      </section>
    </div>
  );
}
