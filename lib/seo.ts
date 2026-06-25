import { siteConfig } from "@/data/site";
import { nearbyAreas } from "@/data/areas";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { programs } from "@/data/programs";
import { faculty } from "@/data/faculty";
import { centres } from "@/data/centres";
import type { BlogPost } from "@/data/blog";

const BASE = "https://www.theesa.in";
const ORG_ID = `${BASE}/#organization`;

// Aggregate rating shown on the site copy: 4.9 / 5 from 300+ parents.
const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "300",
  bestRating: "5",
  worstRating: "1",
} as const;

function reviewsForSchema() {
  return testimonials.slice(0, 6).map((t) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.text,
    publisher: { "@id": ORG_ID },
  }));
}

/**
 * Hybrid LocalBusiness + EducationalOrganization schema for the home page.
 * Now multi-location: the flagship Rohini Sec-7 centre stays the primary entity
 * and the other three branches are emitted via the `location` property.
 */
export function localBusinessSchema() {
  const flagship = centres.find((c) => c.isFlagship) ?? centres[0];
  const branches = centres.filter((c) => c.slug !== flagship.slug);

  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": ORG_ID,
    name: siteConfig.name,
    alternateName: ["ESA", "ESA Rohini", "Excellent Students Academy", "ESA Lucknow"],
    url: BASE,
    logo: `${BASE}/esa-logo.jpg`,
    image: [
      `${BASE}/og-image.jpg`,
      `${BASE}/gallery/g13.jpg`,
      `${BASE}/gallery/g30.jpg`,
    ],
    description:
      "Coaching institute for Class 1 to 12 with four branches: Rohini Sector 7, Rohini Sector 15, Shakurpur (Delhi) and Thakurganj (Lucknow). Math, Science, Commerce, English and all CBSE subjects. Operating since 2015.",
    email: siteConfig.email,
    telephone: flagship.phone,
    foundingDate: "2015",
    founder: { "@type": "Person", name: "Chandan Prajapati" },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: flagship.geo.lat,
      longitude: flagship.geo.lng,
    },
    hasMap: flagship.mapLink,
    location: branches.map((c) => ({
      "@type": "Place",
      "@id": `${BASE}/centres#${c.slug}`,
      name: c.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.addressLines[0],
        addressLocality: c.city,
        addressRegion: c.state,
        postalCode: c.pin,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: c.geo.lat,
        longitude: c.geo.lng,
      },
      hasMap: c.mapLink,
      telephone: c.phone,
    })),
    areaServed: [
      ...nearbyAreas.map((a) => ({
        "@type": "Place",
        name: `${a.name}, North Delhi`,
      })),
      { "@type": "Place", name: "Shakurpur, Delhi" },
      { "@type": "Place", name: "Thakurganj, Lucknow" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:30",
      },
    ],
    priceRange: "₹₹",
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
      siteConfig.socials.youtube,
    ].filter(
      (u) =>
        !!u &&
        u !== "TODO" &&
        !u.match(/^https?:\/\/(www\.)?(facebook|instagram|youtube)\.com\/?$/i),
    ),
    aggregateRating: AGGREGATE_RATING,
    review: reviewsForSchema(),
    contactPoint: centres.map((c) => ({
      "@type": "ContactPoint",
      telephone: c.phone,
      contactType: `${c.shortName} enquiries`,
      email: c.email,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    })),
  };
}

export type BreadcrumbItem = { name: string; href: string };

/** BreadcrumbList JSON-LD for inner pages. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.href.startsWith("http") ? it.href : `${BASE}${it.href}`,
    })),
  };
}

/** FAQPage JSON-LD built from the faqs data file. */
export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Course list JSON-LD for /programs. */
export function courseListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        "@id": `${BASE}/programs#${p.slug}`,
        name: `${p.label} - ${p.grades}`,
        description: p.description,
        provider: { "@id": ORG_ID, name: siteConfig.name },
        educationalLevel: p.grades,
        about: p.subjects,
        offers: {
          "@type": "Offer",
          category: "Coaching",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          url: `${BASE}/contact#enquiry`,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "OnSite",
          location: {
            "@type": "Place",
            name: siteConfig.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
              addressLocality: siteConfig.address.city,
              postalCode: siteConfig.address.pin,
              addressCountry: "IN",
            },
          },
        },
      },
    })),
  };
}

/** Article JSON-LD for blog posts. */
export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.description ?? post.excerpt ?? post.title,
    image: post.cover ? [post.cover] : [`${BASE}/og-image.jpg`],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@id": ORG_ID,
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/esa-logo.jpg`,
      },
    },
    articleSection: post.category,
    inLanguage: "en-IN",
  };
}

/** ItemList of faculty members for /faculty page. */
export function facultyItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: faculty.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: f.name,
        jobTitle: f.title,
        worksFor: { "@id": ORG_ID, name: siteConfig.name },
        description: f.bio,
        image: f.image?.startsWith("http")
          ? f.image
          : `${BASE}${f.image}`,
        knowsAbout: f.subjects,
      },
    })),
  };
}

/** WebSite schema with SearchAction (sitelinks search box). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: siteConfig.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Speakable schema flags content as ideal for voice assistants
 * (Google Assistant, Siri etc.) - wrap a WebPage with this.
 */
export function speakableWebPage(opts: {
  url: string;
  cssSelectors: string[];
  name: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: opts.url,
    name: opts.name,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: opts.cssSelectors,
    },
    isPartOf: { "@id": `${BASE}/#website` },
  };
}

/** Convenience: render JSON-LD as a script tag. */
export function jsonLd(obj: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(obj) },
  } as const;
}
