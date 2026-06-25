"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { faculty } from "@/data/faculty";
import { programs, subjects } from "@/data/programs";
import { nearbyAreas } from "@/data/areas";
import { toppers } from "@/data/results";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { blogPosts } from "@/data/blog";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/faculty", label: "Faculty" },
  { href: "/centres", label: "Branches" },
  { href: "/results", label: "Results" },
  { href: "/materials", label: "Materials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const TRENDING = ["Class 10 Boards", "Class 12 Math", "Free Demo", "Crash Course", "Fee Structure", "Home Tuition"];

type SearchHit = { title: string; type: string; href: string; keywords: string };

function buildSearchIndex(): SearchHit[] {
  const hits: SearchHit[] = [];

  // Pages
  const pages: SearchHit[] = [
    { title: "Home", type: "Page", href: "/", keywords: "home esa rohini coaching" },
    { title: "About ESA Rohini", type: "Page", href: "/about", keywords: "about story founder chandan prajapati eleven years" },
    { title: "Our Programs", type: "Page", href: "/programs", keywords: "programs courses class 1 2 3 4 5 6 7 8 9 10 11 12 foundation board prep senior secondary" },
    { title: "Our Faculty", type: "Page", href: "/faculty", keywords: "faculty teachers mentors postgraduates b.tech experienced" },
    { title: "Board Results", type: "Page", href: "/results", keywords: "results board topper marks cbse 90 95" },
    { title: "Photo Gallery", type: "Page", href: "/gallery", keywords: "gallery photos centre classroom festivals puja independence day birthday teachers day" },
    { title: "Study Materials - Class-wise PDF Downloads", type: "Page", href: "/materials", keywords: "study material PDF notes download class 1 2 3 4 5 6 7 8 9 10 11 12 cbse sample papers mock tests revision" },
    { title: "ESA Blog", type: "Page", href: "/blog", keywords: "blog articles guides parents tips" },
    { title: "Contact Us", type: "Page", href: "/contact", keywords: "contact phone whatsapp email visit demo enquiry" },
    { title: "Our Branches - Delhi & Lucknow", type: "Page", href: "/centres", keywords: "centres branches rohini sector 7 sector 15 shakurpur lucknow thakurganj address map directions" },
    { title: "ESA Lucknow Thakurganj", type: "Page", href: "/lucknow", keywords: "lucknow thakurganj chowk hardoi road basant vihar ashok rastogi cbse coaching up uttar pradesh" },
    { title: "FAQs", type: "Page", href: "/faq", keywords: "faq questions parents answers" },
    { title: "Book Free Demo Class", type: "Action", href: "/contact#enquiry", keywords: "demo free 7 day book trial class enrol enquiry" },
    { title: "WhatsApp ESA Rohini", type: "Action", href: "https://wa.me/918882663340", keywords: "whatsapp message chat phone" },
    { title: "Terms & Conditions", type: "Legal", href: "/terms", keywords: "terms conditions agreement fees refund" },
    { title: "Privacy Policy", type: "Legal", href: "/privacy", keywords: "privacy policy data information" },
  ];
  hits.push(...pages);

  // Programs
  for (const p of programs) {
    hits.push({
      title: `${p.label} Program - ${p.grades}`,
      type: "Program",
      href: `/programs#${p.slug}`,
      keywords: `${p.label} ${p.grades} ${p.description} ${p.subjects.join(" ")} ${p.highlights.join(" ")}`,
    });
  }
  hits.push({ title: "Crash Course - Class 6 to 12", type: "Program", href: "/programs#crash", keywords: "crash course revision boards mock papers short term" });

  // Subjects
  for (const s of subjects) {
    hits.push({
      title: `${s.name} - ${s.grades}`,
      type: "Subject",
      href: `/programs`,
      keywords: `${s.name} ${s.grades} subject`,
    });
  }

  // Faculty
  for (const f of faculty) {
    hits.push({
      title: `${f.name} - ${f.title}`,
      type: "Faculty",
      href: `/faculty#${f.slug}`,
      keywords: `${f.name} ${f.title} ${f.subjects} ${f.experience} ${f.qualification} ${f.bio}`,
    });
  }

  // Areas served
  for (const a of nearbyAreas) {
    hits.push({
      title: `Coaching in ${a.name}`,
      type: "Area",
      href: `/areas/${a.slug}`,
      keywords: `${a.name} area locality north delhi coaching home tuition`,
    });
  }

  // Toppers
  for (const t of toppers) {
    hits.push({
      title: `${t.name} - ${t.marks}`,
      type: "Topper",
      href: `/results`,
      keywords: `${t.name} ${t.marks} ${t.school ?? ""} ${t.grade ?? ""} ${t.stream ?? ""} topper student`,
    });
  }

  // Testimonials (names only - text is in keywords)
  for (const t of testimonials) {
    hits.push({
      title: `Review by ${t.name}`,
      type: "Review",
      href: `/#testimonials`,
      keywords: `${t.name} ${t.role} ${t.text} review testimonial`,
    });
  }

  // FAQ entries
  for (let i = 0; i < faqs.length; i++) {
    const f = faqs[i];
    hits.push({
      title: f.question,
      type: "FAQ",
      href: `/faq`,
      keywords: `${f.question} ${f.answer}`,
    });
  }

  // Blog posts
  for (const b of blogPosts) {
    hits.push({
      title: b.title,
      type: "Blog",
      href: `/blog/${b.slug}`,
      keywords: `${b.title} ${b.category} ${b.excerpt} ${b.description}`,
    });
  }

  return hits;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<SearchHit[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOpen(false);
    closeSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  function closeSearch() {
    setSearchOpen(false);
    setQuery("");
    setHits([]);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    const q = val.trim().toLowerCase();
    if (q.length === 0) {
      setHits([]);
      return;
    }
    const index = buildSearchIndex();
    // Score: 3 = title prefix, 2 = title contains, 1 = keywords contains
    const scored = index
      .map((h) => {
        const title = h.title.toLowerCase();
        const kw = h.keywords.toLowerCase();
        let score = 0;
        if (title.startsWith(q)) score = 3;
        else if (title.includes(q)) score = 2;
        else if (kw.includes(q)) score = 1;
        return { h, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((x) => x.h);
    setHits(scored);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (hits[0]) {
      router.push(hits[0].href);
      closeSearch();
    }
  }

  function handleTrending(term: string) {
    setQuery(term);
    handleChange({ target: { value: term } } as React.ChangeEvent<HTMLInputElement>);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all",
          scrolled
            ? "border-b border-white/10 bg-charcoal/95 backdrop-blur-md"
            : "bg-charcoal/85 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1480px] items-center justify-between px-4 sm:px-5 lg:px-8">
          <Link href="/" aria-label="ESA home" className="flex shrink-0 items-center gap-3">
            <Image
              src="/esa-logo.jpg"
              alt="Excellent Students' Academy logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
              priority
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-base font-bold tracking-tight text-white">
                Excellent Students&apos; Academy
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                Coaching · Delhi & Lucknow
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition",
                  isActive(item.href) ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="text-white/70 transition hover:text-white"
            >
              <Search size={18} />
            </button>
          </nav>

          <Link
            href="/contact#enquiry"
            className="hidden items-center gap-1.5 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600 lg:inline-flex"
          >
            Book Free Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

      </header>

      {/* Full-screen mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-[150] flex flex-col bg-charcoal lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Header bar inside the overlay so user can close */}
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <Image
                src="/esa-logo.jpg"
                alt="ESA logo"
                width={56}
                height={56}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-base font-bold tracking-tight text-white">Excellent Students&apos; Academy</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <nav className="grid gap-1.5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-base font-medium transition",
                    isActive(item.href)
                      ? "bg-teal-500/15 text-teal-300"
                      : "text-white/85 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-300">
                Reach Us
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <a href="tel:+918882663340" className="block transition hover:text-white">
                  Call: +91 88826 63340
                </a>
                <a
                  href="https://wa.me/918882663340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-white"
                >
                  WhatsApp: +91 88826 63340
                </a>
                <a href="mailto:excellentstudentsacademy1@gmail.com" className="block transition hover:text-white">
                  Email: excellentstudentsacademy1@gmail.com
                </a>
                <p className="text-white/65">
                  C7/72, Sector 7, Rohini, New Delhi 110085
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-charcoal p-5">
            <Link
              href="/contact#enquiry"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-full bg-red-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/30"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Full-screen search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[200] flex flex-col bg-charcoal/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <button
            type="button"
            onClick={closeSearch}
            aria-label="Close search"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white sm:right-8 sm:top-8"
          >
            <X size={20} />
          </button>

          <div className="flex-1 overflow-y-auto px-5 pt-20 sm:px-10 sm:pt-28">
            <div className="mx-auto w-full max-w-3xl">
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300">
                Search ESA
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Try &lsquo;Class 10&rsquo;, &lsquo;Math&rsquo;, &lsquo;Pitampura&rsquo;..."
                  className="w-full border-b border-teal-400/40 bg-transparent pb-4 text-2xl font-light text-white placeholder-white/30 outline-none sm:text-4xl"
                  autoComplete="off"
                  spellCheck={false}
                />
              </form>

              {hits.length > 0 && (
                <div className="mt-4 grid">
                  {hits.map((h) => (
                    <Link
                      key={h.href + h.title}
                      href={h.href}
                      onClick={closeSearch}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                    >
                      <Search size={13} className="shrink-0 opacity-40" />
                      <span className="flex-1">{h.title}</span>
                      <span className="shrink-0 rounded-full bg-teal-500/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-teal-300">
                        {h.type}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {!query && (
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Trending:
                  </span>
                  {TRENDING.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => handleTrending(term)}
                      className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/75 transition hover:border-teal-400 hover:text-white"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              )}

              {query && hits.length === 0 && (
                <p className="mt-8 text-sm text-white/50">
                  No matches found. Try &lsquo;demo&rsquo;, &lsquo;math&rsquo; or &lsquo;Rohini&rsquo;.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
