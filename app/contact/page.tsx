import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner, BannerContactRight } from "@/components/ui/PageBanner";
import { siteConfig, whatsappLink } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CallbackForm } from "@/components/CallbackForm";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Demo at ESA Rohini",
  description:
    "Get in touch with Excellent Students' Academy in Rohini Sector 7. Call, WhatsApp, email or fill our enquiry form to book a free demo class for your child.",
  alternates: { canonical: "https://www.theesa.in/contact" },
  keywords: [
    "contact ESA Rohini",
    "coaching enquiry Rohini",
    "book demo class Rohini",
    "tuition enquiry Pitampura",
  ],
};

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);
  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <PageBanner
        label="Get In Touch"
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Students learning in a friendly classroom at Excellent Students' Academy Rohini"
        heading={<>Book a free demo. No fees. No pressure.</>}
        subtitle="Visit our Sector 7 centre, call us, or send a WhatsApp. We respond within working hours and can book a demo slot the same day."
        right={<BannerContactRight />}
      />

      <section
        className="relative overflow-hidden border-t border-neutral-200 py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 55%, #FFEBEE 100%)" }}
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" aria-hidden />
        <Container className="relative">
          <div className="mb-10">
            <CallbackForm
              source="contact-page-mini"
              title="Just want a quick callback?"
              subtitle="Leave your number - we will call back within working hours. Skip the long form."
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              <a
                href={whatsappLink(
                  "Hello ESA, I want to book a free demo class for my child",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: "linear-gradient(135deg, #DCFCE7 0%, #FFFFFF 70%)" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-charcoal">
                    WhatsApp
                  </p>
                  <p className="text-sm text-body">{siteConfig.whatsappDisplay}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-green-700">Fastest response</p>
                </div>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 70%)" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white shadow-sm">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-charcoal">
                    Call us
                  </p>
                  <p className="text-sm text-body">{siteConfig.phoneDisplay}</p>
                  <p className="mt-1 text-xs text-muted">10 AM to 8:30 PM, Mon to Sat</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: "linear-gradient(135deg, #FFEBEE 0%, #FFFFFF 70%)" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white shadow-sm">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-charcoal">
                    Email
                  </p>
                  <p className="text-sm text-body">{siteConfig.email}</p>
                </div>
              </a>
              <div
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 p-6 shadow-sm"
                style={{ background: "linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 70%)" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-sm">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-charcoal">
                    Address
                  </p>
                  <p className="text-sm text-body">
                    {siteConfig.address.line1}, {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.city} {siteConfig.address.pin}
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 p-6 shadow-sm"
                style={{ background: "linear-gradient(135deg, #E0E7FF 0%, #FFFFFF 70%)" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-sm">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-charcoal">
                    Working hours
                  </p>
                  <p className="text-sm text-body">
                    Mon to Sat: {siteConfig.hours.weekdays}
                    <br />
                    Sun: {siteConfig.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div id="enquiry" className="scroll-mt-24 rounded-2xl border border-neutral-200 bg-white p-7 shadow-lg sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-widest text-teal-700">
                Enquiry Form
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-charcoal">
                Book a free demo class
              </h2>
              <p className="mt-2 text-sm text-body">
                Fill the form and we will reach out within working hours to
                schedule your demo.
              </p>
              <EnquiryForm />
            </div>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8089!2d77.119802!3d28.706135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzIyLjEiTiA3N8KwMDcnMjAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ESA Rohini location"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
