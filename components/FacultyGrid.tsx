"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoLightbox, type LightboxItem } from "@/components/PhotoLightbox";
import type { Faculty } from "@/data/faculty";

export function FacultyGrid({ items }: { items: Faculty[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = items.map((f) => ({
    image: f.image,
    name: f.name,
    eyebrow: f.title,
    meta: `${f.experience} · ${f.qualification}`,
    description: `${f.bio} Teaching ${f.subjects}.`,
  }));

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f, i) => (
          <article
            key={f.slug}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View ${f.name}'s photo full size`}
              className="relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Image
                src={f.image}
                alt={`${f.name}, ${f.title} at ESA Rohini`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-500 hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent p-5 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-300">
                  {f.title}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">{f.name}</h3>
              </div>
            </button>
            <div className="space-y-3 p-6">
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-semibold text-charcoal">{f.experience}</p>
                <p className="text-xs uppercase tracking-wider text-muted">experience</p>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted">{f.qualification}</p>
              <p className="text-sm font-semibold text-charcoal">Teaches: {f.subjects}</p>
              <p className="text-sm leading-relaxed text-body">{f.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <PhotoLightbox
        items={lightboxItems}
        openIndex={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
