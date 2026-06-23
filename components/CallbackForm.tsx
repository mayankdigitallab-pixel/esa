"use client";

import { useState } from "react";
import { Phone, CheckCircle2 } from "lucide-react";

interface CallbackFormProps {
  /** Used for analytics + dispatch routing. */
  source?: string;
  /** Optional headline above the form. */
  title?: string;
  /** Optional helper line under the headline. */
  subtitle?: string;
}

/**
 * Two-field "Request a callback" form. Lower friction than the full enquiry
 * form - just name + phone - for visitors who do not want to fill the long
 * version. Submits to /api/enquiry alongside the full form.
 */
export function CallbackForm({
  source = "callback-mini",
  title = "Request a callback",
  subtitle = "Drop your number. We will call back within working hours - no spam.",
}: CallbackFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source,
          name,
          phone,
          message: "Requested a callback from the mini-form.",
        }),
      });
      const data = await res.json().catch(() => ({ ok: res.ok }));
      if (!res.ok || data.ok === false) {
        throw new Error(data?.error || "Could not send. Please try WhatsApp.");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="flex items-start gap-4 rounded-2xl border border-teal-200 bg-teal-50 p-5">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-teal-600" />
        <div>
          <p className="text-base font-bold text-charcoal">Thanks, we&rsquo;ll call you back.</p>
          <p className="mt-1 text-sm text-charcoal-soft">
            Our team calls between 10 AM and 8:30 PM, Monday to Saturday.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
        {title}
      </p>
      <p className="mt-1 text-sm text-charcoal-soft">{subtitle}</p>
      <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <input
          type="text"
          required
          aria-label="Your name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
        <input
          type="tel"
          required
          pattern="[0-9+\s\-()]{8,18}"
          aria-label="Phone number"
          placeholder="10 digit mobile"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-teal-500/25 transition hover:bg-teal-600 disabled:opacity-60"
        >
          <Phone className="h-4 w-4" />
          {submitting ? "Sending..." : "Call me"}
        </button>
      </form>
      {error ? (
        <p className="mt-3 text-xs font-semibold text-red-600">{error}</p>
      ) : null}
    </div>
  );
}
