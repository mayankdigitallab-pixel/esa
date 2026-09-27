import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Old WordPress URLs and merged duplicate pages -> their current home.
// Keys are lowercase, without a trailing slash. Every hit is a single 301.
const LEGACY_REDIRECTS: Record<string, string> = {
  "/success-stories": "/results",
  "/sample-page": "/",
  "/shakurpur": "/areas/pitampura",
  // Old WordPress (Yoast) sitemaps still registered in Search Console.
  "/sitemap_index.xml": "/sitemap.xml",
  "/page-sitemap.xml": "/sitemap.xml",
  "/post-sitemap.xml": "/sitemap.xml",
  // The branch landing pages are the canonical pages for these two sectors.
  "/areas/rohini-sector-7": "/rohini-sector-7",
  "/areas/rohini-sector-15": "/rohini-sector-15",
};

/**
 * Runs before routing. `skipTrailingSlashRedirect` is on in next.config.ts,
 * so this is the only place trailing slashes get stripped - that lets
 * `/success-stories/` go straight to `/results` in one 301 instead of a
 * 308 to `/success-stories` followed by a second hop.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();

  // Old WordPress uploads/assets no longer exist anywhere on the site.
  if (lower === "/wp-content" || lower.startsWith("/wp-content/")) {
    return new NextResponse("Gone", {
      status: 410,
      headers: { "X-Robots-Tag": "noindex" },
    });
  }

  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, "") || "/" : pathname;
  const target = LEGACY_REDIRECTS[trimmed.toLowerCase()] ?? (trimmed !== pathname ? trimmed : null);

  if (target) {
    // Build from request.url, not nextUrl.clone(): NextURL remembers the
    // incoming trailing slash and would re-append it to the new pathname.
    const url = new URL(request.url);
    url.pathname = target;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_next/data|favicon.ico).*)"],
};
