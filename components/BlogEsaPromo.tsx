import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { centres } from "@/data/centres";
import { siteConfig, whatsappLink } from "@/data/site";

// Figures below mirror the verified numbers used on the home and results pages.
const stats = [
  { value: "Since 2015", label: "Coaching in Rohini" },
  { value: "84%", label: "Avg board score · 2026" },
  { value: "32", label: "Students above 90%" },
  { value: "100%", label: "Pass rate · 2026 batch" },
];

const reasons = [
  "Class 1 to 12 coaching - CBSE, ICSE and State Board",
  "Every Saturday a chapter test, checked within 48 hours",
  "Scorecard sent to parents on WhatsApp every week",
  "Small batches, capped at around 18 students",
  "Monthly parent meeting with the actual subject teacher",
  "Faculty-written notes for Class 8 to 12",
];

/** "Why ESA" promotion block shown at the end of every blog post. */
export function BlogEsaPromo({ postTitle }: { postTitle: string }) {
  return (
    <div className="border-t border-neutral-200 bg-charcoal px-6 py-12 text-white sm:px-10 sm:py-14">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300">
        Excellent Students&apos; Academy
      </p>
      <h2
        className="mx-auto mt-4 max-w-2xl text-center text-white"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
        }}
      >
        Want this kind of preparation for your child?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-white/70 sm:text-base">
        ESA has coached Class 1 to 12 students in Rohini since 2015, with centres in Rohini Sector 7,
        Rohini Sector 15 and Lucknow. The routine in this article is how our batches work every week.
      </p>

      <dl className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-white/15 bg-white/5 px-3 py-4 text-center">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-xl font-bold text-white sm:text-2xl">{s.value}</dd>
            <dd className="mt-1 text-[11px] leading-snug text-white/60 sm:text-xs">{s.label}</dd>
          </div>
        ))}
      </dl>

      <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
        {reasons.map((r) => (
          <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-white/85">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
            {r}
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
        {centres.map((c) => (
          <div key={c.slug} className="rounded-xl border border-white/15 bg-white/5 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <MapPin className="h-4 w-4 shrink-0 text-teal-300" />
              {c.shortName}
            </p>
            <a
              href={`tel:${c.phone}`}
              className="mt-2 flex items-center gap-2 text-xs text-white/70 transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {c.phoneDisplay}
            </a>
            {c.landingPath ? (
              <Link
                href={c.landingPath}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-300 hover:text-white"
              >
                View centre
                <ArrowRight className="h-3 w-3" />
              </Link>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-base font-semibold text-white">
          7 days of free demo classes. Real batch, real faculty, no registration fee.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/contact#enquiry" className="btn-primary">
            Book Free Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink(`Hi, I'd like to book a free demo. I read the "${postTitle}" blog.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            WhatsApp {siteConfig.whatsappDisplay}
          </a>
          <Link
            href="/results"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See our results
          </Link>
        </div>
      </div>
    </div>
  );
}
