"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Phone,
  Calendar,
} from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import { siteConfig } from "@/data/site";

const AUTOPLAY_MS = 6500;
const PARALLAX_FACTOR = 0.5; // 0 = no parallax, 0.5 = strong

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => next(), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  // Parallax: translate the background slower than the page scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bg = bgRef.current;
    if (!bg) return;
    let ticking = false;
    const update = () => {
      const offset = window.scrollY * PARALLAX_FACTOR;
      bg.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="esa-hero relative isolate overflow-hidden bg-charcoal text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ minHeight: 720 }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `.esa-hero-grid{display:grid;grid-template-columns:1fr;min-height:720px;}.esa-hero-left{padding:80px 24px 120px;display:flex;flex-direction:column;justify-content:center;}.esa-hero-right{padding:0 24px 80px;}@media(min-width:1024px){.esa-hero-grid{grid-template-columns:1fr 1px 380px;}.esa-hero-left{padding:96px 56px 120px 80px;justify-content:center;}.esa-hero-right{padding:96px 80px 96px 56px;display:flex;flex-direction:column;justify-content:center;}}`,
        }}
      />

      {/* Background image stack (parallax-translated) */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10"
        style={{ top: "-30%", bottom: "-30%", willChange: "transform" }}
      >
        {heroSlides.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            {s.mobileImage ? (
              <>
                <Image
                  src={s.mobileImage}
                  alt={`${s.eyebrow} - ${s.headline} ${s.accentWord} at Excellent Students' Academy`}
                  fill
                  sizes="100vw"
                  className="block object-contain object-center sm:hidden"
                  style={{ backgroundColor: "#e5e7eb" }}
                  priority={i === 0}
                />
                <Image
                  src={s.image}
                  alt={`${s.eyebrow} - ${s.headline} ${s.accentWord} at Excellent Students' Academy`}
                  fill
                  sizes="100vw"
                  className="hidden object-cover sm:block"
                  style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined}
                  priority={i === 0}
                />
              </>
            ) : (
              <Image
                src={s.image}
                alt={`${s.eyebrow} - ${s.headline} ${s.accentWord} at Excellent Students' Academy Rohini`}
                fill
                sizes="100vw"
                className="object-cover"
                style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined}
                priority={i === 0}
              />
            )}
            <div className={`absolute inset-0 ${s.heavyOverlay ? "bg-charcoal/80" : "bg-charcoal/65"}`} />
            {s.heavyOverlay && (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(10,10,10,0.80) 0%, rgba(10,10,10,0.60) 40%, rgba(10,10,10,0.20) 75%, rgba(10,10,10,0) 100%)",
                }}
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>

      <div className="esa-hero-grid relative z-10">
        {/* LEFT */}
        <div className="esa-hero-left relative">
          <div className="relative">
            {heroSlides.map((s, i) => (
              <div
                key={s.eyebrow + i}
                className={`transition-all duration-700 ease-out ${
                  i === index
                    ? "relative translate-y-0 opacity-100"
                    : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"
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
                    fontSize: "clamp(2.8rem, 7.5vw, 7rem)",
                    fontWeight: 600,
                    lineHeight: 0.96,
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
        </div>

        {/* VERTICAL DIVIDER */}
        <div
          className="hidden self-center lg:block"
          style={{ height: "62%", width: 1, background: "rgba(255,255,255,0.18)" }}
          aria-hidden
        />

        {/* RIGHT - MDL-style hairline rows */}
        <aside className="esa-hero-right hidden lg:flex">
          <div>
            <Row
              icon={<Star size={15} className="fill-current" />}
              label="ESTABLISHED"
              value="Coaching in Rohini since 2015"
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
          </div>
        </aside>
      </div>

      {/* Pagination dots - bottom-left of the entire section, MDL-style */}
      <div className="absolute bottom-7 left-6 z-20 flex items-center gap-4 sm:left-10 lg:left-20">
        <div className="flex items-center gap-1.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-[2px] rounded-full transition-all sm:h-[3px] ${
                i === index ? "w-6 sm:w-10 bg-red-500" : "w-2 sm:w-4 bg-white/35 hover:bg-white/65"
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] font-semibold tracking-[0.22em] text-white/65">
          {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </span>
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
    <div className="flex items-start gap-4">
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
        <p className="mt-1.5 text-[15px] font-semibold leading-snug text-white">{value}</p>
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
