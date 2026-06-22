"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { faculty } from "@/data/faculty";
import { programs } from "@/data/programs";
import { nearbyAreas } from "@/data/areas";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/faculty", label: "Faculty" },
  { href: "/results", label: "Results" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const TRENDING = ["Class 10 Boards", "Class 12 Math", "Free Demo", "Crash Course", "Fee Structure", "Home Tuition"];

type SearchHit = { title: string; type: string; href: string };

function buildSearchIndex(): SearchHit[] {
  const hits: SearchHit[] = [];
  for (const p of programs) {
    hits.push({ title: `${p.label} Program - ${p.grades}`, type: "Program", href: `/programs#${p.slug}` });
  }
  for (const f of faculty) {
    hits.push({ title: `${f.name} - ${f.title}`, type: "Faculty", href: `/faculty#${f.slug}` });
  }
  for (const a of nearbyAreas) {
    hits.push({ title: `Coaching in ${a.name}`, type: "Area", href: `/areas/${a.slug}` });
  }
  hits.push({ title: "Book a free demo class", type: "Contact", href: "/contact#enquiry" });
  hits.push({ title: "All board results", type: "Results", href: "/results" });
  hits.push({ title: "Photo gallery", type: "Gallery", href: "/gallery" });
  hits.push({ title: "FAQs and parent questions", type: "FAQ", href: "/faq" });
  hits.push({ title: "About ESA Rohini", type: "About", href: "/about" });
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
    if (val.trim().length >= 2) {
      const q = val.toLowerCase();
      const index = buildSearchIndex();
      setHits(index.filter((h) => h.title.toLowerCase().includes(q)).slice(0, 10));
    } else {
      setHits([]);
    }
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
    const q = term.toLowerCase();
    const index = buildSearchIndex();
    setHits(index.filter((h) => h.title.toLowerCase().includes(q)).slice(0, 10));
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
                Coaching · Rohini, Delhi
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

        {open && (
          <div className="lg:hidden">
            <div className="border-t border-white/10 bg-charcoal px-5 pb-6 pt-4 sm:px-6">
              <nav className="grid gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition",
                      isActive(item.href)
                        ? "bg-white/10 text-white"
                        : "text-white/75 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact#enquiry"
                className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white"
              >
                Book Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

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
