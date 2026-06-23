"use client";

import { useState } from "react";
import Image from "next/image";
import { faculty } from "@/data/faculty";
import { PhotoLightbox, type LightboxItem } from "@/components/PhotoLightbox";

const teachers = faculty.slice(1); // exclude founder

const lightboxItems: LightboxItem[] = teachers.map((f) => ({
  image: f.image,
  name: f.name,
  eyebrow: f.title,
  meta: `${f.subjects} · ${f.experience}`,
  description: f.bio,
}));

// Duration tuned so a single card crosses the viewport in ~6s on desktop.
// One full loop = teachers.length × ~6s.
const LOOP_SECONDS = Math.max(40, teachers.length * 6);

export function FacultyMarquee() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const loop = [...teachers, ...teachers];

  return (
    <div className="esa-marquee group/marquee relative overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .esa-marquee-track {
              display: flex;
              gap: 1.25rem;
              width: max-content;
              animation: esa-marquee ${LOOP_SECONDS}s linear infinite;
              will-change: transform;
            }
            .esa-marquee:hover .esa-marquee-track,
            .esa-marquee:focus-within .esa-marquee-track {
              animation-play-state: paused;
            }
            .esa-marquee-card {
              width: 86vw;
              flex-shrink: 0;
            }
            @media (min-width: 640px) {
              .esa-marquee-card { width: 44vw; max-width: 360px; }
            }
            @media (min-width: 1024px) {
              .esa-marquee-card { width: 22vw; max-width: 360px; }
            }
            @keyframes esa-marquee {
              from { transform: translate3d(0, 0, 0); }
              to   { transform: translate3d(-50%, 0, 0); }
            }
            @media (prefers-reduced-motion: reduce) {
              .esa-marquee-track { animation: none; }
            }
          `,
        }}
      />
      <div className="esa-marquee-track">
        {loop.map((f, i) => {
          const realIndex = i % teachers.length;
          const isClone = i >= teachers.length;
          return (
            <article
              key={`${f.slug}-${i}`}
              className="esa-marquee-card group"
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
