import type { Metadata } from "next";
import { Download, Share2, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { timetables } from "@/data/timetable";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Class Timings & Time Table | ESA Rohini Sector 7 and Sector 15",
  description:
    "Weekly time table for Excellent Students' Academy Rohini. Class-wise batch timings for Sector 7 and Sector 15 centres. Download or share the schedule on WhatsApp.",
  alternates: { canonical: "https://www.theesa.in/timetable" },
  keywords: [
    "ESA Rohini time table",
    "ESA Sector 7 class timings",
    "ESA Sector 15 class timings",
    "coaching class schedule Rohini",
  ],
};

function whatsappShareLink(text: string) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export default function TimetablePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Time Table", href: "/timetable" },
  ]);

  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <PageBanner
        label="Class Schedule"
        image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Weekly class schedule and planner for ESA Rohini batches"
        heading={<>Weekly class timings at both Rohini centres.</>}
        subtitle="Sector 7 and Sector 15 batch schedules. Download a printable copy, or share the timetable directly to a parent or student on WhatsApp."
      />

      <section className="border-t border-neutral-200 bg-neutral-100 py-16 sm:py-20">
        <Container>
          <div className="space-y-12">
            {timetables.map((tt) => {
              const shareText = `${tt.centre} · Time Table · ${tt.branch}\n\nDownload the full schedule here: ${tt.publicUrl}`;
              return (
                <article
                  key={tt.slug}
                  id={tt.slug}
                  className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-neutral-200"
                >
                  {/* Header */}
                  <div className="border-b border-neutral-200 px-6 pb-5 pt-7 sm:px-9">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
                          {tt.centre}
                        </h2>
                        <p className="mt-2 flex items-center gap-2 text-sm text-charcoal-soft">
                          <MapPin className="h-4 w-4 text-teal-600" />
                          Branch: {tt.branch}
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-sm text-charcoal-soft">
                          <Phone className="h-4 w-4 text-teal-600" />
                          {tt.phone}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={tt.downloadPath}
                          download
                          className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                        <a
                          href={whatsappShareLink(shareText)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
                        >
                          <Share2 className="h-4 w-4" />
                          Share on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Banner */}
                  <div className="border-b border-neutral-200 bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-white sm:px-9">
                    Time Table · {tt.slug.replace("sector-", "Sector ")}
                  </div>

                  {/* Table */}
                  <div className="px-3 py-4 sm:px-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="border-b-2 border-neutral-300">
                            <th className="px-3 py-3 text-left font-bold uppercase tracking-wider text-charcoal sm:px-4">
                              Class
                            </th>
                            <th className="px-3 py-3 text-left font-bold uppercase tracking-wider text-charcoal sm:px-4">
                              Timing
                            </th>
                            <th className="px-3 py-3 text-left font-bold uppercase tracking-wider text-charcoal sm:px-4">
                              Subject
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {tt.rows.map((row, i) => {
                            const isMulti = row.blocks.length > 1;
                            return (
                              <tr
                                key={`${row.classLabel}-${i}`}
                                className="border-b border-neutral-200 last:border-b-0 even:bg-neutral-50"
                              >
                                <td className="px-3 py-3 align-top text-base font-bold text-teal-700 sm:px-4">
                                  {row.classLabel}
                                </td>
                                <td className="px-3 py-3 align-top sm:px-4">
                                  {isMulti ? (
                                    <div className="space-y-1">
                                      <div className="font-semibold text-charcoal">
                                        {row.totalTime}
                                      </div>
                                      {row.blocks.map((b, j) => (
                                        <div
                                          key={j}
                                          className="text-xs text-charcoal-soft"
                                        >
                                          {b.time}
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <span className="font-semibold text-charcoal">
                                      {row.totalTime}
                                    </span>
                                  )}
                                </td>
                                <td className="px-3 py-3 align-top sm:px-4">
                                  {isMulti ? (
                                    <div className="space-y-1">
                                      <div>&nbsp;</div>
                                      {row.blocks.map((b, j) => (
                                        <div
                                          key={j}
                                          className="text-sm font-semibold text-red-600"
                                        >
                                          {b.subject}
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <span className="font-semibold text-red-600">
                                      {row.blocks[0]?.subject}
                                    </span>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4 text-center text-xs text-charcoal-soft sm:px-9">
                    {tt.centre} · {tt.branch.replace("Rohini, ", "Rohini ")} · {tt.phone}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed text-charcoal-soft sm:p-8">
            <p className="font-semibold text-charcoal">Important notes</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Class timings may shift by 15 minutes during summer or exam season - WhatsApp the centre for the latest schedule.</li>
              <li>Saturday is reserved for weekly chapter tests across all classes.</li>
              <li>Sunday is reserved for doubt sessions on request.</li>
              <li>Parents may walk in any working day between 11 AM and 1 PM to talk to faculty.</li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
