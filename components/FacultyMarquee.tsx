"use client";

import Image from "next/image";
import { faculty } from "@/data/faculty";

// Use all teachers except the founder (slot 0)
const teachers = faculty.slice(1);

export function FacultyMarquee() {
  // Duplicate the list so the animation loops seamlessly
  const loop = [...teachers, ...teachers];

  return (
    <div
      className="esa-marquee group/marquee relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes esaMarquee {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            .esa-marquee-track {
              animation: esaMarquee 55s linear infinite;
              width: max-content;
            }
            .esa-marquee:hover .esa-marquee-track {
              animation-play-state: paused;
            }
            .esa-marquee-card {
              width: 86vw;
              flex-shrink: 0;
            }
            @media (min-width: 640px) {
              .esa-marquee-card { width: calc((100vw - 4rem) / 2); max-width: 360px; }
            }
            @media (min-width: 1024px) {
              .esa-marquee-card { width: calc((min(1280px, 100vw) - 6rem - 5rem) / 4); max-width: 320px; }
            }
            @media (prefers-reduced-motion: reduce) {
              .esa-marquee-track { animation: none; }
            }
          `,
        }}
      />
      <div className="esa-marquee-track flex gap-5">
        {loop.map((f, i) => (
          <article
            key={`${f.slug}-${i}`}
            className="esa-marquee-card group"
            aria-hidden={i >= teachers.length ? true : undefined}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src={f.image}
                alt={`${f.name}, ${f.title} at Excellent Students' Academy Rohini`}
                fill
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 45vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />
              <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-teal-700 backdrop-blur">
                {f.title}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-lg font-bold tracking-tight text-white">{f.name}</h3>
                <p className="mt-1 text-[11px] text-white/85">
                  {f.experience} · {f.qualification}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-charcoal-soft">
              Teaching <span className="font-semibold text-charcoal">{f.subjects}</span>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
