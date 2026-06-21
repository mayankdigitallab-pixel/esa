"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "border-b border-white/10 bg-charcoal/95 backdrop-blur-md"
          : "bg-charcoal/85 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
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
        </nav>

        <Link
          href="/contact#enquiry"
          className="hidden items-center gap-1.5 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600 lg:inline-flex"
        >
          Book Free Demo
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
  );
}
