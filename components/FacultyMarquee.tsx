"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { faculty } from "@/data/faculty";
import { PhotoLightbox, type LightboxItem } from "@/components/PhotoLightbox";

const teachers = faculty.slice(1); // exclude founder
const SPEED_PX_PER_S = 28; // marquee scroll speed

const lightboxItems: LightboxItem[] = teachers.map((f) => ({
  image: f.image,
  name: f.name,
  eyebrow: f.title,
  meta: `${f.experience} · ${f.qualification}`,
  description: `${f.bio} Teaching ${f.subjects}.`,
}));

export function FacultyMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const userInteractingRef = useRef(false);
  const interactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hovered, setHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const dragMovedRef = useRef(false);

  // Duplicate for seamless loop
  const loop = [...teachers, ...teachers];

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (!pausedRef.current && !userInteractingRef.current) {
        el.scrollLeft += SPEED_PX_PER_S * dt;
      }
      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        else if (el.scrollLeft < 0) el.scrollLeft += half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mark user-interacting briefly on scroll/touch so manual nav wins over autoplay
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      userInteractingRef.current = true;
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
      interactionTimerRef.current = setTimeout(() => {
        userInteractingRef.current = false;
      }, 800);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    };
  }, []);

  // Pointer drag-to-scroll on desktop
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e: PointerEvent) => {
      // Skip if the press starts inside a link/button so clicks still work
      const target = e.target as HTMLElement;
      if (target.closest("a,button")) return;
      isDown = true;
      dragMovedRef.current = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
      userInteractingRef.current = true;
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) dragMovedRef.current = true;
      el.scrollLeft = startScroll - dx;
    };
    const endDrag = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
      el.style.cursor = "";
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
      interactionTimerRef.current = setTimeout(() => {
        userInteractingRef.current = false;
      }, 1200);
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("pointerleave", endDrag);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("pointerleave", endDrag);
    };
  }, []);

  const scrollByCards = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-marquee-card]");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 20;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
    userInteractingRef.current = true;
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      userInteractingRef.current = false;
    }, 1500);
  }, []);

  // Sync hover state to ref
  useEffect(() => {
    pausedRef.current = hovered;
  }, [hovered]);

  return (
    <div
      className="esa-marquee group/marquee relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .esa-marquee-scroller {
              display: flex;
              gap: 1.25rem;
              overflow-x: auto;
              scrollbar-width: none;
              -ms-overflow-style: none;
              cursor: grab;
              user-select: none;
              -webkit-user-select: none;
              scroll-behavior: auto;
            }
            .esa-marquee-scroller::-webkit-scrollbar { display: none; }
            .esa-marquee-card {
              width: 86vw;
              flex-shrink: 0;
            }
            @media (min-width: 640px) {
              .esa-marquee-card { width: calc((100vw - 4rem) / 2); max-width: 360px; }
            }
            @media (min-width: 1024px) {
              .esa-marquee-card { width: calc((min(1480px, 100vw) - 4rem - 5rem) / 4); max-width: 360px; }
            }
          `,
        }}
      />
      <div ref={scrollerRef} className="esa-marquee-scroller">
        {loop.map((f, i) => {
          const realIndex = i % teachers.length;
          return (
            <article
              key={`${f.slug}-${i}`}
              data-marquee-card
              className="esa-marquee-card group"
              aria-hidden={i >= teachers.length ? true : undefined}
            >
              <button
                type="button"
                onClick={() => {
                  if (dragMovedRef.current) return;
                  setLightboxIndex(realIndex);
                }}
                aria-label={`View ${f.name}'s photo full size`}
                className="relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <Image
                  src={f.image}
                  alt={`${f.name}, ${f.title} at Excellent Students' Academy Rohini`}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 45vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  draggable={false}
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-teal-700 backdrop-blur">
                  {f.title}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <h3 className="text-lg font-bold tracking-tight text-white">{f.name}</h3>
                  <p className="mt-1 text-[11px] text-white/85">
                    {f.experience} · {f.qualification}
                  </p>
                </div>
              </button>
              <p className="mt-3 text-sm text-charcoal-soft">
                Teaching <span className="font-semibold text-charcoal">{f.subjects}</span>
              </p>
            </article>
          );
        })}
      </div>

      {/* Prev / Next controls */}
      <div className="mt-6 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label="Previous faculty"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-charcoal shadow-sm transition hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label="Next faculty"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-charcoal shadow-sm transition hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <PhotoLightbox
        items={lightboxItems}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
}
