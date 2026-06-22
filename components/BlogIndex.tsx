"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Search, Send } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { whatsappLink } from "@/data/site";

interface Props {
  posts: BlogPost[];
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogIndex({ posts }: Props) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const sorted = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((p) => {
      if (activeFilter !== "All" && p.category !== activeFilter) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [sorted, query, activeFilter]);

  const featured = filtered[0];
  const editorPicks = filtered.slice(1, 5);
  const remaining = filtered.slice(5);

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello ESA, I would like a free consultation.\n\nName: ${contactName}\nPhone: ${contactPhone}\nMessage: ${contactMessage}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px] xl:gap-12">
      {/* LEFT - main posts */}
      <div className="min-w-0">
        {featured ? (
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700">
              Latest Post
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-5 block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700">
                  {featured.category}
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-charcoal sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-soft sm:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                  <span className="font-medium text-charcoal">By {featured.author}</span>
                  <span className="text-neutral-300">·</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="text-neutral-300">·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </section>
        ) : null}

        {editorPicks.length > 0 ? (
          <section className="mt-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700">
              Editor&apos;s Picks
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {editorPicks.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
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
                    <h3 className="text-base font-bold leading-snug tracking-tight text-charcoal group-hover:text-teal-700 sm:text-lg">
                      {p.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-3 text-[11px] text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {formatDate(p.date)}
                      </span>
                      <span className="text-neutral-300">·</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        {p.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {remaining.length > 0 ? (
          <section className="mt-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700">
              More posts
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {remaining.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
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
                    <h3 className="text-base font-bold leading-snug tracking-tight text-charcoal group-hover:text-teal-700 sm:text-lg">
                      {p.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal-soft">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-[11px] text-neutral-500">
                      <span>{formatDate(p.date)}</span>
                      <span className="text-neutral-300">·</span>
                      <span>{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center">
            <p className="text-charcoal-soft">No posts match your search or filter.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveFilter("All");
              }}
              className="mt-4 text-sm font-semibold text-teal-700 hover:text-red-600"
            >
              Clear filters
            </button>
          </div>
        ) : null}
      </div>

      {/* RIGHT - sticky sidebar */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        {/* Search + Filters */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-11 py-2.5 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
              aria-label="Search blog posts"
            />
          </div>
          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500">
            Filters
          </p>
          <div className="mt-3 space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`w-full rounded-lg px-4 py-2 text-left text-sm font-semibold transition ${
                  activeFilter === cat
                    ? "bg-teal-500 text-white shadow-md"
                    : "bg-neutral-50 text-charcoal hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Quick contact form */}
        <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            Quick Contact
          </p>
          <h3 className="mt-2 text-lg font-bold tracking-tight text-charcoal">
            Get a free consultation
          </h3>
          <form onSubmit={handleContactSubmit} className="mt-4 space-y-3">
            <input
              type="text"
              required
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
            />
            <input
              type="tel"
              required
              pattern="[0-9+\s-]{10,}"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="Phone number"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
            />
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              rows={3}
              placeholder="Your message..."
              className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-3 text-sm font-bold text-white shadow-md shadow-red-500/25 transition hover:bg-red-600"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Newsletter card */}
        <div className="mt-5 overflow-hidden rounded-2xl bg-charcoal p-5 text-white shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-300">
            Newsletter
          </p>
          <h3 className="mt-2 text-lg font-bold tracking-tight" style={{ color: "#F5F1E8" }}>
            Weekly study tips
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-white/65">
            Board prep tips, parent guides and ESA news delivered every week.
          </p>
          {newsletterSent ? (
            <p className="mt-4 rounded-lg bg-teal-500/20 px-4 py-3 text-xs text-teal-200">
              Thanks! You will hear from us when the next batch opens.
            </p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-teal-400 focus:bg-white/[0.1]"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-red-500 px-4 py-3 text-sm font-bold text-white shadow-md shadow-red-500/30 transition hover:bg-red-600"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </aside>
    </div>
  );
}
