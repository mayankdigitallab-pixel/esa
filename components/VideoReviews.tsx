"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X, ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { videoReviews, type VideoReview } from "@/data/videoReviews";
import { whatsappLink } from "@/data/site";
import { useDragScroll } from "@/lib/useDragScroll";

function youtubeThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function isPlaceholder(v: VideoReview) {
  if (v.source.kind === "youtube" && !v.source.youtubeId) return true;
  if (v.source.kind === "mp4" && !v.source.src) return true;
  return false;
}

// Auto-scroll speed in pixels per second (matches FacultyMarquee).
const SCROLL_SPEED = 40;

export function VideoReviews() {
  const [open, setOpen] = useState<VideoReview | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const interactingRef = useRef(false);
  const lastInteractionEndRef = useRef(0);

  useDragScroll(trackRef);

  // Cap to the first four reviews per the home-page request.
  const reviews = videoReviews.slice(0, 4);

  const [cloned, setCloned] = useState(false);
  useEffect(() => {
    setCloned(true);
  }, []);
  const loop = cloned ? [...reviews, ...reviews] : reviews;

  useEffect(() => {
    const el = trackRef.current;
    if (!el || !cloned) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    <section className="border-y border-neutral-200 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Video reviews"
          title={
            <>
              Voices from the ESA{" "}
              <span className="text-teal-600">community</span>.
            </>
          }
          description="Short video reviews from our students, parents, faculty and staff. Tap any card to play."
        />

        <div className="relative">
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .esa-vr-card { width: 86vw; max-width: 360px; }
                @media (min-width: 640px) {
                  .esa-vr-card { width: 44vw; }
                }
                @media (min-width: 1024px) {
                  .esa-vr-card { width: 22vw; }
                }
              `,
            }}
          />
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ overscrollBehaviorX: "contain" }}
          >
            {loop.map((v, i) => {
              const placeholder = isPlaceholder(v);
              const isClone = i >= reviews.length;
              const ytPoster =
                v.source.kind === "youtube" && v.source.youtubeId
                  ? youtubeThumb(v.source.youtubeId)
                  : undefined;
              const explicitPoster = v.poster ?? ytPoster;
              return (
                <article
                  key={`${v.name}-${i}`}
                  className="esa-vr-card group shrink-0"
                  aria-hidden={isClone ? true : undefined}
                >
                  <button
                    type="button"
                    onClick={() => !placeholder && setOpen(v)}
                    disabled={placeholder}
                    tabIndex={isClone ? -1 : 0}
                    aria-label={
                      placeholder
                        ? `Video review slot for ${v.name} (coming soon)`
                        : `Play video review by ${v.name}`
                    }
                    className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                      {explicitPoster ? (
                        <Image
                          src={explicitPoster}
                          alt={`Preview of ${v.name}'s video review`}
                          fill
                          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 44vw, 22vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                          unoptimized
                          draggable={false}
                        />
                      ) : v.source.kind === "mp4" && v.source.src ? (
                        <video
                          src={`${v.source.src}#t=0.5`}
                          preload="metadata"
                          muted
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #1F2937 0%, #374151 60%, #4B5563 100%)",
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                      <span
                        aria-hidden
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span
                          className={`flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition ${
                            placeholder
                              ? "bg-white/40 text-white/80"
                              : "bg-white text-red-600 group-hover:scale-110"
                          }`}
                        >
                          <Play className="h-6 w-6 fill-current" />
                        </span>
                      </span>
                      {placeholder ? (
                        <span className="absolute left-3 top-3 inline-flex rounded-full bg-amber-400/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-900">
                          Coming soon
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700">
                        {v.role}
                      </p>
                      <h3 className="mt-2 text-lg font-bold tracking-tight text-charcoal">
                        {v.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-soft">
                        {v.blurb}
                      </p>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <div>
            <p className="text-sm font-semibold text-charcoal">
              Studied at ESA? Record a 20-second review.
            </p>
            <p className="mt-1 text-sm text-charcoal-soft">
              Share what worked, send it on WhatsApp, and we&rsquo;ll add it here.
            </p>
          </div>
          <Link
            href={whatsappLink(
              "Hello ESA, I want to share a short video review of my time at the academy.",
            )}
            target="_blank"
            className="btn-primary"
          >
            <MessageCircle className="h-4 w-4" />
            Send your review
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>

      {open ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Video review by ${open.name}`}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close video"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
              {open.source.kind === "youtube" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${open.source.youtubeId}?autoplay=1&rel=0`}
                  title={`Video review by ${open.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <video
                  src={open.source.src}
                  controls
                  autoPlay
                  playsInline
                  poster={open.poster}
                  className="h-full w-full"
                />
              )}
            </div>
            <div className="mt-5 px-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                {open.role}
              </p>
              <h3 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                {open.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {open.blurb}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
