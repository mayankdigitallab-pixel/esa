"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardCarouselProps {
  children: React.ReactNode[];
  /** Visible cards at lg breakpoint and up (default 3) */
  lgCards?: number;
  /** Visible cards at md breakpoint (default 2) */
  mdCards?: number;
  /** Dot/arrow tone: light for dark sections, dark for light sections (default 'dark') */
  tone?: "dark" | "light";
  /** Optional aria label for the carousel region */
  ariaLabel?: string;
  /** Auto-advance every N milliseconds (0 disables) */
  autoplayMs?: number;
  /** Loop back to first slide after reaching the last (default true when autoplay is on) */
  loop?: boolean;
}

export function CardCarousel({
  children,
  lgCards = 3,
  mdCards = 2,
  tone = "dark",
  ariaLabel = "Carousel",
  autoplayMs = 0,
  loop,
}: CardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = Array.isArray(children) ? children : [children];
  const total = slides.length;
  const isLooping = loop ?? autoplayMs > 0;

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
      const offset = (card.offsetWidth + gap) * i;
      el.scrollTo({ left: offset, behavior: "smooth" });
    },
    [],
  );

  const next = useCallback(() => {
    const newIdx = isLooping
      ? (index + 1) % total
      : Math.min(index + 1, total - 1);
    setIndex(newIdx);
    scrollToIndex(newIdx);
  }, [index, total, scrollToIndex, isLooping]);

  const prev = useCallback(() => {
    const newIdx = isLooping
      ? (index - 1 + total) % total
      : Math.max(index - 1, 0);
    setIndex(newIdx);
    scrollToIndex(newIdx);
  }, [index, scrollToIndex]);

  // Update active index on manual scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const card = el.querySelector<HTMLElement>("[data-card]");
        if (!card) return;
        const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
        const i = Math.round(el.scrollLeft / (card.offsetWidth + gap));
        setIndex(i);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Autoplay
  useEffect(() => {
    if (!autoplayMs || paused) return;
    const t = setTimeout(() => next(), autoplayMs);
    return () => clearTimeout(t);
  }, [autoplayMs, paused, index, next]);

  const arrowBase =
    tone === "dark"
      ? "border border-white/25 text-white hover:bg-white/10"
      : "border border-neutral-300 text-charcoal hover:bg-neutral-50";

  const dotActive = tone === "dark" ? "bg-red-500" : "bg-red-500";
  const dotIdle = tone === "dark" ? "bg-white/30 hover:bg-white/60" : "bg-neutral-300 hover:bg-neutral-500";
  const counterColor = tone === "dark" ? "text-white/65" : "text-neutral-500";

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={scrollRef}
        className="esa-carousel -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: 16 }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `.esa-carousel > [data-card]{flex:0 0 86%;}@media(min-width:768px){.esa-carousel > [data-card]{flex:0 0 calc((100% - ${mdCards - 1} * 1.25rem) / ${mdCards});}}@media(min-width:1024px){.esa-carousel > [data-card]{flex:0 0 calc((100% - ${lgCards - 1} * 1.25rem) / ${lgCards});}}`,
          }}
        />
        {slides.map((slide, i) => (
          <div
            key={i}
            data-card
            className="snap-start"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${total}`}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setIndex(i);
                  scrollToIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-[3px] rounded-full transition-all ${
                  i === index ? "w-10 " + dotActive : "w-4 " + dotIdle
                }`}
              />
            ))}
          </div>
          <span className={`text-[11px] font-semibold tracking-[0.22em] ${counterColor}`}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={!isLooping && index === 0}
            aria-label="Previous"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition disabled:cursor-not-allowed disabled:opacity-40 ${arrowBase}`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!isLooping && index === total - 1}
            aria-label="Next"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition disabled:cursor-not-allowed disabled:opacity-40 ${arrowBase}`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
