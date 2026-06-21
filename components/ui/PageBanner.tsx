import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

interface PageBannerProps {
  image: string;
  imageAlt: string;
  label?: string;
  heading: React.ReactNode;
  subtitle?: string;
  cta?: React.ReactNode;
  right?: React.ReactNode;
  priority?: boolean;
}

export function PageBanner({
  image,
  imageAlt,
  label,
  heading,
  subtitle,
  cta,
  right,
  priority = true,
}: PageBannerProps) {
  return (
    <section className="esa-pb relative overflow-hidden" style={{ minHeight: 580 }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `.esa-pb-left{padding:48px 20px;}.esa-pb-grid-right{grid-template-columns:1fr;}@media(min-width:1024px){.esa-pb-left{padding:80px 56px 80px 64px;}.esa-pb-grid-right{grid-template-columns:1fr 1px 380px;}}`,
        }}
      />
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
        priority={priority}
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/45" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" aria-hidden />

      <div
        className={`esa-pb-grid-inner relative z-10 grid items-center${right ? " esa-pb-grid-right" : ""}`}
        style={{ minHeight: 580, gridTemplateColumns: right ? undefined : "1fr" }}
      >
        <div className="esa-pb-left">
          {label && (
            <div className="mb-7 flex items-center gap-3.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300">
                {label}
              </span>
              <span className="h-px w-11 bg-teal-300/80" />
            </div>
          )}
          <h1
            className="m-0 text-white"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.025em",
            }}
          >
            {heading}
          </h1>
          {subtitle && (
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {subtitle}
            </p>
          )}
          {cta && <div className="mt-9">{cta}</div>}
        </div>

        {right && (
          <div
            className="hidden self-center bg-white/20 lg:block"
            style={{ height: "60%", width: 1 }}
            aria-hidden
          />
        )}
        {right && (
          <div className="hidden lg:block" style={{ padding: "80px 64px 80px 56px" }}>
            {right}
          </div>
        )}
      </div>
    </section>
  );
}

export function BannerContactRight() {
  const items = [
    { icon: <Phone size={15} />, label: "CALL US", value: "+91 88826 63340", href: "tel:+918882663340" },
    { icon: <Mail size={15} />, label: "EMAIL", value: "info@theesa.in", href: "mailto:info@theesa.in" },
    { icon: <MessageCircle size={15} />, label: "WHATSAPP", value: "+91 88826 63340", href: "https://wa.me/918882663340" },
    { icon: <MapPin size={15} />, label: "VISIT US", value: "Sector 7, Rohini, Delhi", href: "/contact" },
  ];
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.label}>
          {i > 0 && <div className="my-4 h-px bg-white/12" />}
          <a href={item.href} className="flex items-center gap-3.5 no-underline">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-teal-300">
              {item.icon}
            </span>
            <div>
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-bold text-white">{item.value}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export function BannerStatsRight({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-7">
      {stats.map((s, i) => (
        <div key={s.label}>
          <div
            className={i % 2 === 0 ? "text-teal-300" : "text-red-400"}
            style={{
              fontSize: "clamp(1.9rem, 2.7vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {s.value}
          </div>
          <div className="mt-1.5 text-xs leading-tight text-white/55">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
