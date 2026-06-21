"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // For now this is a local-only handler. Replace with API/Mailchimp later.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-white sm:p-8">
        <CheckCircle2 className="h-6 w-6 text-teal-300" />
        <p className="text-sm font-medium">
          Thanks! You will hear from us when the next batch opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <div className="relative flex-1">
        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" aria-hidden />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="parent@example.com"
          className="w-full rounded-lg border border-white/20 bg-white/[0.06] px-11 py-3.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-teal-400 focus:bg-white/[0.1]"
          aria-label="Email address"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600"
      >
        Subscribe
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
