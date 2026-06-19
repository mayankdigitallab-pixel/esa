"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [subjects, setSubjects] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ESA, I want to book a free demo class.\n\nName: ${name}\nPhone: ${phone}\nGrade: ${grade}\nSubjects: ${subjects}\nMessage: ${message}`;
    const url = whatsappLink(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="mt-6 rounded border border-gold-300 bg-gold-50 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold-600" />
        <p className="mt-3 font-serif text-lg font-semibold text-navy-900">
          Your enquiry is on its way
        </p>
        <p className="mt-1 text-sm text-body">
          We are continuing the conversation on WhatsApp. Check your phone for
          our reply.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <Field label="Parent or student name" required>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border border-cream-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500"
          placeholder="Your full name"
        />
      </Field>
      <Field label="Phone number" required>
        <input
          type="tel"
          required
          pattern="[0-9+\s-]{10,}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded border border-cream-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500"
          placeholder="10 digit mobile"
        />
      </Field>
      <Field label="Grade / Class of the student" required>
        <select
          required
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="w-full rounded border border-cream-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500"
        >
          <option value="">Select class</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
            <option key={g} value={`Class ${g}`}>
              Class {g}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Subjects of interest">
        <input
          type="text"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          className="w-full rounded border border-cream-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500"
          placeholder="e.g. Math, Science, Social Science"
        />
      </Field>
      <Field label="Any specific question?">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full rounded border border-cream-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500"
          placeholder="Tell us a little about your goals (optional)"
        />
      </Field>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-700"
      >
        Send via WhatsApp
        <Send className="h-4 w-4" />
      </button>
      <p className="text-xs text-muted">
        Submitting opens WhatsApp with your enquiry prefilled. We respond within
        working hours.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
        {required ? <span className="ml-1 text-gold-600">*</span> : null}
      </span>
      {children}
    </label>
  );
}
