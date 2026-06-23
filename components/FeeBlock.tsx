import Link from "next/link";
import { ArrowRight, IndianRupee } from "lucide-react";
import { whatsappLink } from "@/data/site";

/**
 * Fee transparency block. Displays a starting-from price per program tier so
 * parents have a real anchor figure instead of "Contact us for fees".
 *
 * TODO (Mayank): replace the `from` values with real monthly starting prices.
 * Keep the disclaimer below honest if pricing varies by subject combination.
 */

type FeeRow = {
  tier: string;
  grades: string;
  /** Monthly starting price in INR. null = TODO. */
  from: number | null;
  note?: string;
};

const fees: FeeRow[] = [
  { tier: "Foundation", grades: "Class 1 to 5", from: null, note: "All subjects" },
  { tier: "Middle School", grades: "Class 6 to 8", from: null, note: "All subjects" },
  { tier: "Board Prep", grades: "Class 9 and 10", from: null, note: "All subjects" },
  { tier: "Senior Secondary", grades: "Class 11 and 12", from: null, note: "Per stream" },
];

function formatPrice(n: number | null) {
  if (n === null) return "TODO";
  return `₹${n.toLocaleString("en-IN")}`;
}

export function FeeBlock() {
  return (
    <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-700">
              Fee transparency
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
              Programs starting from{" "}
              <span className="text-teal-600">a nominal monthly fee</span>.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-soft sm:text-base">
              Pricing is intentionally accessible. Exact fee depends on the
              subjects chosen. WhatsApp us with your child&apos;s class for a
              tailored quote within working hours.
            </p>
          </div>
          <Link
            href={whatsappLink("Hello ESA, please share the fee structure for my child.")}
            target="_blank"
            className="btn-primary"
          >
            Get fee quote on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fees.map((f, i) => {
            const accent = i % 2 === 0 ? "teal" : "red";
            const bg =
              accent === "teal"
                ? "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 70%)"
                : "linear-gradient(135deg, #FFEBEE 0%, #FFFFFF 70%)";
            return (
              <div
                key={f.tier}
                className="rounded-2xl border border-neutral-200 p-6 shadow-sm"
                style={{ background: bg }}
              >
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                    accent === "teal" ? "text-teal-700" : "text-red-700"
                  }`}
                >
                  {f.tier}
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-charcoal">
                  {f.grades}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-soft">
                    From
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-charcoal">
                    {formatPrice(f.from)}
                  </span>
                  {f.from !== null ? (
                    <span className="text-xs text-charcoal-soft">/month</span>
                  ) : null}
                </div>
                {f.note ? (
                  <p className="mt-2 text-xs text-charcoal-soft">{f.note}</p>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-charcoal-soft">
          <IndianRupee className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          Prices shown are monthly starting fees. No registration charge for
          the 7-day demo. Final fee shared after a free counselling call.
        </p>
      </div>
    </section>
  );
}
