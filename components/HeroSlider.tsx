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

  const slide = heroSlides[index];

  return (
    <section
      className="esa-hero relative isolate overflow-hidden bg-charcoal text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ minHeight: 680 }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `.esa-hero-grid{display:grid;grid-template-columns:1fr;}.esa-hero-left{padding:48px 24px;}@media(min-width:1024px){.esa-hero-grid{grid-template-columns:1fr 1px 400px;}.esa-hero-left{padding:96px 64px 120px 80px;}}`,
        }}
      />

      {/* Background image stack */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-charcoal/65" />
          </div>
        ))}
      </div>

      <div className="esa-hero-grid relative z-10 items-center" style={{ minHeight: 680 }}>
        {/* LEFT */}
        <div className="esa-hero-left relative">
          <div className="relative" style={{ minHeight: 360 }}>
            {heroSlides.map((s, i) => (
              <div
                key={s.eyebrow + i}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out ${
                  i === index
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                }`}
                aria-hidden={i !== index}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-400">
                    {s.eyebrow}
                  </span>
                  <span className="h-px w-12 bg-teal-400" />
                </div>
                <h1
                  className="mt-7 m-0"
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                    fontWeight: 600,
                    lineHeight: 0.98,
                    letterSpacing: "-0.03em",
                    color: "#F5F1E8",
                  }}
                >
                  {s.headline}{" "}
                  <span
                    style={{
                      color: s.accentColor === "red" ? "#E53935" : "#22D3EE",
                    }}
                  >
                    {s.accentWord}
                  </span>
                </h1>
                <p
                  className="mt-7 max-w-xl text-base leading-relaxed sm:text-[17px]"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {s.description}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link href={s.primaryCta.href} className="btn-primary">
                    {s.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={s.secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {s.secondaryCta.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Controls row stays anchored bottom of left column on desktop */}
          <div className="mt-10 flex items-center gap-5 lg:absolute lg:bottom-12 lg:left-20 lg:right-16 lg:mt-0">
            <div className="flex items-center gap-1.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-[3px] rounded-full transition-all ${
                    i === index
                      ? "w-9 bg-red-500"
                      : "w-4 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-white/65">
              {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* VERTICAL DIVIDER */}
        <div
          className="hidden self-center lg:block"
          style={{ height: "62%", width: 1, background: "rgba(255,255,255,0.18)" }}
          aria-hidden
        />

        {/* RIGHT - MDL-style hairline rows, no card bg */}
        <aside className="hidden lg:block" style={{ padding: "96px 80px 120px 56px" }}>
          <Row
            icon={<Star size={15} className="fill-current" />}
            label="CLIENT RATING"
            value={<>{slide.accentColor ? "4.9 / 5 · 300+ parents trust ESA" : "—"}</>}
          />
          <Divider />
          <Row
            icon={<Phone size={15} />}
            label="CALL US"
            value={siteConfig.phoneDisplay}
            href={`tel:${siteConfig.phone}`}
          />
          <Divider />
          <Row
            icon={<Calendar size={15} />}
            label="FREE DEMO CLASS"
            value={
              <span className="inline-flex items-center gap-1">
                Book a 7-day demo <span aria-hidden>→</span>
              </span>
            }
            href="/contact#enquiry"
          />
        </aside>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-teal-400"
        style={{ border: "1px solid rgba(255,255,255,0.22)" }}
      >
        {icon}
      </span>
      <div>
        <p
          className="m-0 text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block no-underline">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Divider() {
  return <div className="my-5" style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />;
}
