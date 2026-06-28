"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Topper } from "@/data/results";
import { useDragScroll } from "@/lib/useDragScroll";

interface Props {
  toppers: Topper[];
}

// Auto-scroll speed in pixels per second (matches FacultyMarquee).
const SCROLL_SPEED = 40;

export function StudentResults({ toppers }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const interactingRef = useRef(false);
  const lastInteractionEndRef = useRef(0);

  useDragScroll(trackRef);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % toppers.length));
  }, [toppers.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + toppers.length) % toppers.length,
    );
  }, [toppers.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, next, prev]);

  // SSR renders a single set of toppers so crawlers see each name exactly once.
  // After hydration we append a clone so the scroll can loop seamlessly.
  const [cloned, setCloned] = useState(false);
  useEffect(() => {
    setCloned(true);
  }, []);
  const loop = cloned ? [...toppers, ...toppers] : toppers;

  // JS-driven auto-scroll. Pauses while the user is interacting; resumes after.
  useEffect(() => {
    const el = trackRef.current;
    if (!el || !cloned) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      const idleSinceRelease = now - lastInteractionEndRef.current > 600;
      if (!interactingRef.current && idleSinceRelease) {
        el.scrollLeft += (SCROLL_SPEED * dt) / 1000;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const onDown = () => {
      interactingRef.current = true;
    };
    const onUp = () => {
      interactingRef.current = false;
      lastInteractionEndRef.current = performance.now();
      lastTime = performance.now();
    };
    const onTouchStart = () => {
      interactingRef.current = true;
    };
    const onTouchEnd = () => {
      interactingRef.current = false;
      lastInteractionEndRef.current = performance.now();
      lastTime = performance.now();
    };
    const onEnter = () => {
      interactingRef.current = true;
    };
    const onLeave = () => {
      interactingRef.current = false;
      lastTime = performance.now();
    };

    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchEnd);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [cloned]);

  const active = openIndex !== null ? toppers[openIndex] : null;

  return (
    <>
      <div className="relative">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .esa-results-card { width: 86vw; max-width: 360px; }
              @media (min-width: 640px) {
                .esa-results-card { width: 44vw; }
              }
              @media (min-width: 1024px) {
                .esa-results-card { width: 22vw; }
              }
            `,
          }}
        />
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ overscrollBehaviorX: "contain" }}
        >
          {loop.map((t, i) => {
            const realIndex = i % toppers.length;
            const isClone = i >= toppers.length;
            return (
              <article
                key={`${t.name}-${i}`}
                className="esa-results-card group shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                aria-hidden={isClone ? true : undefined}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(realIndex)}
                  aria-label={`View ${t.name}'s photo full size`}
                  tabIndex={isClone ? -1 : 0}
                  className="relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  <Image
                    src={t.image}
                    alt={`${t.name}, board topper at Excellent Students' Academy Rohini`}
                    fill
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 44vw, 22vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.06]"
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent" />
                  <span className="absolute bottom-3 right-3 z-10 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white shadow-lg ring-2 ring-white/70">
                    {t.marks}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <h3 className="text-lg font-bold tracking-tight text-white">{t.name}</h3>
                    <p className="mt-1 text-[11px] font-medium text-white/85">
                      {t.school ?? `${t.grade ?? ""}${t.stream ? ` · ${t.stream}` : ""}`}
                    </p>
                  </div>
                </button>
                {t.quote ? (
                  <div className="border-t border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-sm leading-relaxed text-charcoal">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo of ${active.name}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-charcoal shadow-xl ring-2 ring-black/30 transition hover:bg-neutral-200 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative flex max-h-full w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: "3 / 4", maxHeight: "78vh" }}>
              <Image
                src={active.image}
                alt={`${active.name}, board topper`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="rounded-xl object-cover shadow-2xl"
                priority
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white shadow-lg backdrop-blur-md transition hover:bg-black/55 sm:left-3 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white shadow-lg backdrop-blur-md transition hover:bg-black/55 sm:right-3 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
            <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-3 text-white">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                  ESA Student · CBSE 2026
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight">{active.name}</h3>
                <p className="mt-1 text-sm text-white/70">
                  {active.school ?? `${active.grade ?? ""}${active.stream ? ` · ${active.stream}` : ""}`}
                </p>
              </div>
              <span className="rounded-full bg-red-500 px-4 py-2 text-lg font-bold text-white shadow-lg">
                {active.marks}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
