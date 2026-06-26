"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { faculty } from "@/data/faculty";
import { PhotoLightbox, type LightboxItem } from "@/components/PhotoLightbox";
import { useDragScroll } from "@/lib/useDragScroll";

const teachers = faculty;

const lightboxItems: LightboxItem[] = teachers.map((f) => ({
  image: f.image,
  name: f.name,
  eyebrow: f.title,
  meta: `${f.subjects} · ${f.experience}`,
  description: f.bio,
}));

// Auto-scroll speed in pixels per second.
const SCROLL_SPEED = 40;

export function FacultyMarquee() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const interactingRef = useRef(false);
  const lastInteractionEndRef = useRef(0);

  useDragScroll(trackRef);

  // SSR renders a single set of mentors so crawlers see each faculty exactly once.
  // After hydration we append a clone so the scroll can loop seamlessly.
  const [cloned, setCloned] = useState(false);
  useEffect(() => {
    setCloned(true);
  }, []);
  const loop = cloned ? [...teachers, ...teachers] : teachers;

  // JS-driven auto-scroll. Pauses while the user is interacting; resumes after.
  useEffect(() => {
    const el = trackRef.current;
    if (!el || !cloned) return;

    // Respect prefers-reduced-motion.
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

  return (
    <div className="relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .esa-marquee-card { width: 86vw; max-width: 360px; }
            @media (min-width: 640px) {
              .esa-marquee-card { width: 44vw; }
            }
            @media (min-width: 1024px) {
              .esa-marquee-card { width: 22vw; }
            }
          `,
        }}
      />
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ overscrollBehaviorX: "contain" }}
      >
        {loop.map((f, i) => {
          const realIndex = i % teachers.length;
          const isClone = i >= teachers.length;
          return (
            <article
              key={`${f.slug}-${i}`}
              className="esa-marquee-card group shrink-0"
              aria-hidden={isClone ? true : undefined}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(realIndex)}
                aria-label={`View ${f.name}'s photo full size`}
                tabIndex={isClone ? -1 : 0}
                className="relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <Image
                  src={f.image}
                  alt={`${f.name}, ${f.title} at Excellent Students' Academy Rohini`}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 44vw, 22vw"
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

      <PhotoLightbox
        items={lightboxItems}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
}
