"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoLightbox, type LightboxItem } from "@/components/PhotoLightbox";
import type { SchoolAchiever } from "@/data/results";

const label = (a: SchoolAchiever) => a.name ?? `${a.grade} Topper`;

export function SchoolAchievers({ items }: { items: SchoolAchiever[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = items.map((a) => ({
    image: a.image,
    name: label(a),
    eyebrow: a.grade,
    badge: a.scores[0]?.marks,
    meta: a.school,
    description: a.scores.map((s) => `${s.subject}: ${s.marks}`).join("  |  "),
  }));

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((a, i) => (
          <article
            key={a.image}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View ${label(a)}'s result poster full size`}
              className="relative block aspect-[2/3] w-full cursor-zoom-in overflow-hidden bg-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Image
                src={a.image}
                alt={`${label(a)}, ${a.grade} student at Excellent Students' Academy, school exam result`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 hover:scale-[1.03]"
              />
            </button>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-charcoal">{label(a)}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                {a.grade}
                {a.school ? ` | ${a.school}` : ""}
              </p>
              <ul className="mt-3 space-y-1.5">
                {a.scores.map((s) => (
                  <li
                    key={s.subject}
                    className="flex items-center justify-between text-sm text-body"
                  >
                    <span>{s.subject}</span>
                    <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-bold text-white">
                      {s.marks}
                    </span>
                  </li>
                ))}
              </ul>
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
