"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Topper } from "@/data/results";
import { useDragScroll } from "@/lib/useDragScroll";

interface Props {
  toppers: Topper[];
}

export function StudentResults({ toppers }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  useDragScroll(scrollRef);

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

  const active = openIndex !== null ? toppers[openIndex] : null;

  return (
    <>
      <div
        ref={scrollRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
        style={{ scrollPaddingLeft: 16, scrollPaddingRight: 16 }}
      >
        {toppers.map((t, i) => (
          <article
            key={t.name}
            className="group flex w-[86%] shrink-0 snap-start snap-always flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl sm:w-[44%] md:w-[30%] lg:w-[22%]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View ${t.name}'s photo full size`}
              className="relative aspect-[4/5] cursor-zoom-in overflow-hidden bg-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Image
                src={t.image}
                alt={`${t.name}, board topper at Excellent Students' Academy Rohini`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.06]"
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
              <div className="flex-1 border-t border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm leading-relaxed text-charcoal">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ) : null}
          </article>
        ))}
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

          {/* Edge arrows - hidden on mobile, shown sm+ */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="fixed left-6 top-1/2 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-xl ring-2 ring-black/30 transition hover:bg-neutral-200 sm:flex"
          >
            <ChevronLeft className="h-6 w-6" />
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

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="fixed right-6 top-1/2 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-xl ring-2 ring-black/30 transition hover:bg-neutral-200 sm:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Mobile fixed bottom nav (prev / counter / next) */}
          <div
            className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-fit items-center gap-4 rounded-full bg-black/80 px-4 py-2 shadow-2xl ring-1 ring-white/20 backdrop-blur sm:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-charcoal shadow-md ring-1 ring-black/20 transition active:bg-neutral-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="min-w-[60px] text-center text-[12px] font-semibold tracking-[0.18em] text-white">
              {String(openIndex! + 1).padStart(2, "0")} / {String(toppers.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-charcoal shadow-md ring-1 ring-black/20 transition active:bg-neutral-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
