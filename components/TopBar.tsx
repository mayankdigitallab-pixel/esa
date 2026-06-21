import { Phone, MessageCircle, MapPin } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";

export function TopBar() {
  return (
    <div className="hidden bg-teal-700 text-white lg:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs lg:px-8">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-teal-200" strokeWidth={2} />
            Sector 7, Rohini, New Delhi 110085
          </span>
          <span className="text-teal-300">/</span>
          <span className="text-teal-100">Mon-Sat: {siteConfig.hours.weekdays}</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 transition hover:text-teal-100"
          >
            <Phone className="h-3.5 w-3.5 text-teal-200" strokeWidth={2} />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hello ESA, I want to book a free demo class")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-teal-100"
          >
            <MessageCircle className="h-3.5 w-3.5 text-teal-200" strokeWidth={2} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
