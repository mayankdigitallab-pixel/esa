"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
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
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/esa-logo.jpg"
            alt="Excellent Students' Academy logo"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
            priority
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-base font-bold tracking-tight text-charcoal">
              Excellent Students&apos; Academy
            </span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700">
              Coaching · Rohini, Delhi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal transition hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact#enquiry"
          className="hidden items-center gap-1.5 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 lg:inline-flex"
        >
          Book Free Demo
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-charcoal lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "block border-t border-neutral-200 bg-white" : "hidden",
        )}
      >
        <div className="mx-auto max-w-7xl px-5 py-4">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-charcoal transition hover:bg-teal-50 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact#enquiry"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-red-500 px-4 py-3 text-sm font-semibold text-white"
          >
            Book Free Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
