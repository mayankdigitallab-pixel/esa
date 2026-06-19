"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/faculty", label: "Faculty" },
  { href: "/results", label: "Results" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded bg-navy-900 text-gold-400">
            <GraduationCap className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-navy-900">
              Excellent Students&apos; Academy
            </span>
            <span className="mt-0.5 text-[10px] font-medium tracking-[0.18em] text-gold-700 uppercase">
              Coaching &middot; Rohini
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-800 transition hover:text-gold-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact#enquiry"
          className="hidden items-center gap-1.5 rounded bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-700 lg:inline-flex"
        >
          Book Free Demo
          <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded text-navy-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "block border-t border-cream-200 bg-cream-50" : "hidden",
        )}
      >
        <div className="mx-auto max-w-6xl px-5 py-4">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-medium text-navy-800 transition hover:bg-cream-100 hover:text-gold-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact#enquiry"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-1.5 rounded bg-navy-900 px-4 py-3 text-sm font-semibold text-white"
          >
            Book Free Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
