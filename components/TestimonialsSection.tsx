"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, X, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardCarousel } from "@/components/CardCarousel";
import type { Testimonial } from "@/data/testimonials";

/**
 * Roughly the longest text we can show inside a card before it overflows
 * the box. Beyond this we truncate and offer a "See more" modal.
 */
const PREVIEW_CHAR_LIMIT = 220;

function previewText(text: string): { preview: string; truncated: boolean } {
  if (text.length <= PREVIEW_CHAR_LIMIT) {
    return { preview: text, truncated: false };
  }
  // Cut at the last space before the limit to avoid mid-word slicing.
  const cut = text.slice(0, PREVIEW_CHAR_LIMIT);
  const lastSpace = cut.lastIndexOf(" ");
  return {
    preview: cut.slice(0, lastSpace > 0 ? lastSpace : PREVIEW_CHAR_LIMIT).trimEnd() + "...",
    truncated: true,
  };
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [open, setOpen] = useState<Testimonial | null>(null);

  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              What parents and students{" "}
              <span className="text-teal-600">say about us</span>.
            </>
          }
          description="Feedback from ESA students and parents in Rohini."
        />

        <div className="mt-4">
          <CardCarousel
            lgCards={3}
            mdCards={2}
            tone="light"
            autoplayMs={5500}
            ariaLabel="Testimonials carousel"
          >
            {testimonials.map((t, i) => {
              const accent = i % 2 === 0 ? "teal" : "red";
              const bg =
                accent === "teal"
                  ? "linear-gradient(155deg, #E0F7FA 0%, #FFFFFF 70%)"
                  : "linear-gradient(155deg, #FFEBEE 0%, #FFFFFF 70%)";
              const haloColor = accent === "teal" ? "#00BCD4" : "#E53935";
              const { preview, truncated } = previewText(t.text);
              return (
                <article
                  key={t.name}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 p-7 transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: bg }}
                >
                  <span
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-2xl transition group-hover:opacity-40"
                    style={{ background: haloColor }}
                    aria-hidden
                  />
                  <div className="relative flex gap-0.5 text-yellow-400">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="relative mt-5 flex-1 text-sm leading-relaxed text-charcoal">
                    {preview}
                  </p>
                  {truncated ? (
                    <button
                      type="button"
                      onClick={() => setOpen(t)}
                      className={`relative mt-3 inline-flex w-fit items-center gap-1 text-xs font-bold uppercase tracking-wider transition ${
                        accent === "teal"
                          ? "text-teal-700 hover:text-teal-800"
                          : "text-red-700 hover:text-red-800"
                      }`}
                    >
                      See more &rarr;
                    </button>
                  ) : null}
                  <div className="relative mt-6 flex items-center gap-3 border-t border-neutral-200/70 pt-5">
                    {t.photo ? (
                      <Image
                        src={t.photo}
                        alt={`Photo of ${t.name}`}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          accent === "teal" ? "bg-teal-500" : "bg-red-500"
                        } text-sm font-bold text-white`}
                        aria-hidden
                      >
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-bold text-charcoal">{t.name}</p>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </div>
                    {t.source ? (
                      <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal-soft">
                        {t.source}
                      </span>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </CardCarousel>
        </div>
      </Container>

      {open ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Full review by ${open.name}`}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close review"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-7 shadow-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Quote className="h-8 w-8 text-teal-500" aria-hidden />
            <div className="mt-5 flex items-center gap-3">
              {open.photo ? (
                <Image
                  src={open.photo}
                  alt={`Photo of ${open.name}`}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
              ) : (
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-lg font-bold text-white"
                  aria-hidden
                >
                  {open.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-base font-bold text-charcoal">{open.name}</p>
                <p className="text-xs text-charcoal-soft">{open.role}</p>
              </div>
            </div>
            <div className="mt-5 flex gap-0.5 text-yellow-400">
              {Array.from({ length: open.rating }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-charcoal">
              {open.text.split("\n\n").map((paragraph, i) => (
                <p key={i} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
            {open.source ? (
              <p className="mt-7 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-charcoal-soft">
                {open.source}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
