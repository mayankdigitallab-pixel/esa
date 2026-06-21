"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { heroSlides } from "@/data/heroSlides";
import { siteConfig } from "@/data/site";

const AUTOPLAY_MS = 6500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => next(), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  return (
    <section
      className="relative isolate overflow-hidden bg-charcoal text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide images stack */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:py-28">
        {/* LEFT - text */}
        <div className="relative min-h-[460px] lg:min-h-[520px]">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.eyebrow + i}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out ${
                i === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300">
                  {slide.eyebrow}
                </span>
                <span className="h-px w-12 bg-teal-300/60" />
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {slide.headline}{" "}
                <span
                  className={`block sm:inline ${
                    slide.accentColor === "red" ? "text-red-500" : "text-teal-300"
                  }`}
                >
                  {slide.accentWord}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-200 sm:text-lg">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href={slide.primaryCta.href} className="btn-primary">
                  {slide.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  {slide.secondaryCta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - info card */}
        <aside className="relative">
          <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-md sm:p-7">
            <div className="flex items-start gap-4 border-b border-white/15 pb-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-500 text-white">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-200">
                  Client Rating
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  4.9 / 5 · 300+ parents trust ESA
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-white/15 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-500 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-200">
                  Call Us
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-1 block text-base font-semibold text-white transition hover:text-teal-200"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 pt-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-teal-700">
                <Calendar className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-200">
                  Free Demo Class
                </p>
                <Link
                  href="/contact#enquiry"
                  className="mt-1 inline-flex items-center gap-1 text-base font-semibold text-white transition hover:text-teal-200"
                >
                  Book a 7-day demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </Container>

      {/* Controls row */}
      <div className="relative border-t border-white/10 bg-charcoal/40 backdrop-blur">
        <Container className="flex items-center justify-between gap-4 py-5">
          <div className="flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-10 bg-red-500"
                    : "w-5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
            <span className="ml-3 hidden text-[11px] font-semibold tracking-[0.18em] text-white/70 sm:inline">
              {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
