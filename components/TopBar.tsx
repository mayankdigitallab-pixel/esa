import { Phone, MessageCircle, MapPin } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";

export function TopBar() {
  return (
    <div className="hidden bg-navy-900 text-navy-100 lg:block">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-5 text-xs">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-gold-400" strokeWidth={2} />
            Sector 7, Rohini, New Delhi 110085
          </span>
          <span className="text-navy-300">|</span>
          <span className="text-navy-200">
            Mon to Sat: {siteConfig.hours.weekdays}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 transition hover:text-gold-300"
          >
            <Phone className="h-3.5 w-3.5 text-gold-400" strokeWidth={2} />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hello ESA, I want to book a free demo class")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-gold-300"
          >
            <MessageCircle className="h-3.5 w-3.5 text-gold-400" strokeWidth={2} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
