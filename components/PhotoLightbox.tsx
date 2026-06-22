"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = {
  image: string;
  name: string;
  /** Small uppercase line shown above the name. e.g. "Founder & Director" or "Board Topper" */
  eyebrow?: string;
  /** Right-aligned badge - e.g. percentage marks */
  badge?: string;
  /** Secondary line below the name - school, class, qualifications */
  meta?: string;
  /** Optional longer description / quote */
  description?: string;
};

interface Props {
  items: LightboxItem[];
  openIndex: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function PhotoLightbox({ items, openIndex, onClose, onIndexChange }: Props) {
  const next = useCallback(() => {
    if (openIndex === null) return;
    onIndexChange((openIndex + 1) % items.length);
  }, [openIndex, items.length, onIndexChange]);
  const prev = useCallback(() => {
    if (openIndex === null) return;
    onIndexChange((openIndex - 1 + items.length) % items.length);
  }, [openIndex, items.length, onIndexChange]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, onClose, next, prev]);

  if (openIndex === null) return null;
  const active = items[openIndex];
  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo of ${active.name}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:bg-white/15 sm:right-8 sm:top-8"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:bg-white/15 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        className="relative flex max-h-full w-full max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ aspectRatio: "3 / 4", maxHeight: "78vh" }}>
          <Image
            src={active.image}
            alt={active.name}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="rounded-xl object-cover shadow-2xl"
            priority
          />
        </div>
        <div className="mt-5 flex w-full flex-wrap items-start justify-between gap-3 text-white">
          <div className="min-w-0 flex-1">
            {active.eyebrow ? (
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                {active.eyebrow}
              </p>
            ) : null}
            <h3 className="mt-1 text-2xl font-bold tracking-tight">{active.name}</h3>
            {active.meta ? (
              <p className="mt-1 text-sm text-white/75">{active.meta}</p>
            ) : null}
            {active.description ? (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                {active.description}
              </p>
            ) : null}
          </div>
          {active.badge ? (
            <span className="shrink-0 rounded-full bg-red-500 px-4 py-2 text-lg font-bold text-white shadow-lg">
              {active.badge}
            </span>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:bg-white/15 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
