"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { usePathname } from "next/navigation";

const DISMISS_KEY = "esa.stickyDemo.dismissed";

/**
 * Mobile-only floating "Book Free Demo" pill.
 * Centered (not full-width) so it does not collide with the WhatsApp bubble,
 * appears after the user scrolls past the hero, and can be dismissed for the
 * session via a small X button.
 */
export function StickyDemoCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(DISMISS_KEY) === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // sessionStorage can throw in privacy mode; silently ignore.
    }
  };

  if (pathname?.startsWith("/contact")) return null;
  if (dismissed || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 sm:hidden">
      <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-red-500 pl-5 pr-2 py-2 shadow-2xl shadow-red-500/40">
        <Link
          href="/contact#enquiry"
          className="inline-flex items-center gap-2 text-sm font-bold text-white"
        >
          Book Free Demo
          <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition active:scale-95 hover:bg-white/30"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
