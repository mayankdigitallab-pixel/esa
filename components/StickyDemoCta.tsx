"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

/**
 * Mobile-only floating "Book Free Demo" call-to-action.
 * Appears after the user has scrolled past the hero so it does not compete
 * with the page's primary action button. Hidden on /contact (where the form
 * is already on screen).
 */
export function StickyDemoCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on pages where the enquiry form is the main content already.
  if (pathname?.startsWith("/contact")) return null;
  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 sm:hidden">
      <Link
        href="/contact#enquiry"
        className="pointer-events-auto flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-bold text-white shadow-2xl shadow-red-500/40 transition active:scale-[0.98]"
      >
        Book Free Demo
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
