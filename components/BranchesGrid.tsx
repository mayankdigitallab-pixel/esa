import Link from "next/link";
import { Phone, MapPin, User } from "lucide-react";
import type { Centre } from "@/data/centres";

type Props = {
  centres: Centre[];
  showLandingLink?: boolean;
};

export function BranchesGrid({ centres, showLandingLink = true }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {centres.map((c) => (
        <article
          key={c.slug}
          className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
            <iframe
              src={c.mapEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${c.name} location map`}
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div>
              <h3 className="text-lg font-bold text-charcoal">{c.shortName}</h3>
              <p className="mt-1 flex items-start gap-1.5 text-xs leading-relaxed text-body">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                <span>{c.fullAddress}</span>
              </p>
            </div>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              <User className="h-3.5 w-3.5 text-teal-500" />
              {c.inChargeRole}: <span className="font-semibold text-charcoal">{c.inCharge}</span>
            </p>
            <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
              <a
                href={`tel:${c.phone}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              {showLandingLink && c.landingPath ? (
                <Link
                  href={c.landingPath}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-teal-500 px-4 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                >
                  Visit Page
                </Link>
              ) : (
                <a
                  href={c.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-teal-500 px-4 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                >
                  Directions
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
