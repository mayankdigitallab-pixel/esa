"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function HomeEnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ESA, I want to book a free demo class.\n\nName: ${name}\nPhone: ${phone}\nClass: ${grade}\nMessage: ${message}`;
    const url = whatsappLink(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex items-start gap-4 rounded-2xl border border-teal-200 bg-teal-50 p-6">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-teal-600" />
        <div>
          <p className="text-base font-bold text-charcoal">Your enquiry is on its way</p>
          <p className="mt-1 text-sm text-charcoal-soft">
            We have opened WhatsApp with your message ready. Check your phone and tap send to reach us.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Parent / student name">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone number">
          <input
            type="tel"
            required
            pattern="[0-9+\s-]{10,}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            placeholder="10 digit mobile"
          />
        </Field>
      </div>
      <Field label="Class / Grade">
        <select
          required
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        >
          <option value="">Select class</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
            <option key={g} value={`Class ${g}`}>
              Class {g}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Subjects or message">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          placeholder="e.g. Math, Science, Social Science (optional)"
        />
      </Field>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition hover:bg-red-600"
      >
        Book free demo on WhatsApp
        <Send className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-neutral-500">
        Submitting opens WhatsApp with your enquiry prefilled. We reply within working hours.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal">
        {label}
      </span>
      {children}
    </label>
  );
}
