"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoLightbox, type LightboxItem } from "@/components/PhotoLightbox";
import type { Topper } from "@/data/results";

export function ResultsGrid({ items }: { items: Topper[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = items.map((t) => ({
    image: t.image,
    name: t.name,
    badge: t.marks,
    meta: t.subject
      ? `${t.subject}${t.facultyName ? ` · ${t.facultyName}` : ""}`
      : t.school ?? `${t.grade ?? ""}${t.stream ? ` · ${t.stream}` : ""}`,
    description: t.quote ? `"${t.quote}"` : undefined,
  }));

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t, i) => (
          <article
            key={t.name}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View ${t.name}'s photo full size`}
              className="relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Image
                src={t.image}
                alt={`${t.name}, student at ESA Rohini`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition duration-500 hover:scale-[1.04]"
              />
              <div className="absolute bottom-3 right-3 rounded-full bg-red-500 px-3.5 py-1.5 text-lg font-bold text-white shadow-lg ring-2 ring-white/70">
                {t.marks}
              </div>
            </button>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-charcoal">{t.name}</h3>
              {t.subject ? (
                <>
                  <p className="mt-1 text-base font-bold text-charcoal">
                    {t.subject}
                  </p>
                  {t.facultyName ? (
                    <p className="mt-0.5 text-xs uppercase tracking-wider text-muted">
                      Taught by {t.facultyName}
                    </p>
                  ) : null}
                </>
              ) : (
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {t.school ?? `${t.grade ?? ""}${t.stream ? ` | ${t.stream}` : ""}`}
                </p>
              )}
              {t.quote ? (
                <p className="mt-3 text-sm leading-relaxed text-body">&ldquo;{t.quote}&rdquo;</p>
              ) : null}
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
