import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin, Star, Calendar } from "lucide-react";

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
    <section className="esa-pb relative overflow-hidden" style={{ minHeight: 640 }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `.esa-pb-grid-inner{display:grid;grid-template-columns:1fr;}.esa-pb-left{padding:48px 24px;}@media(min-width:1024px){.esa-pb-grid-inner{grid-template-columns:1fr 1px 380px;}.esa-pb-left{padding:96px 64px 96px 80px;}}`,
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
      <div className="absolute inset-0 bg-charcoal/65" aria-hidden />

      <div
        className="esa-pb-grid-inner relative z-10 items-center"
        style={{ minHeight: 640 }}
      >
        <div className="esa-pb-left">
          {label && (
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-400">
                {label}
              </span>
              <span className="h-px w-12 bg-teal-400" />
            </div>
          )}
          <h1
            className="m-0"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
              fontWeight: 600,
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              color: "#F5F1E8",
            }}
          >
            {heading}
          </h1>
          {subtitle && (
            <p
              className="mt-7 max-w-xl text-base leading-relaxed sm:text-[17px]"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              {subtitle}
            </p>
          )}
          {cta && <div className="mt-9">{cta}</div>}
        </div>

        {right && (
          <div
            className="hidden self-center lg:block"
            style={{ height: "62%", width: 1, background: "rgba(255,255,255,0.18)" }}
            aria-hidden
          />
        )}
        {right && (
          <div className="hidden lg:block" style={{ padding: "96px 80px 96px 56px" }}>
            {right}
          </div>
        )}
      </div>
    </section>
  );
}

// Generic row used by all right-panel variants
function BannerRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-teal-400"
        style={{ border: "1px solid rgba(255,255,255,0.22)" }}
      >
        {icon}
      </span>
      <div>
        <p
          className="m-0 text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block no-underline">
      {inner}
    </a>
  ) : (
    inner
  );
}

export function BannerContactRight() {
  const items = [
    { icon: <Phone size={15} />, label: "CALL US", value: "+91 94580 12793", href: "tel:+919458012793" },
    { icon: <Mail size={15} />, label: "EMAIL", value: "excellentstudentsacademy1@gmail.com", href: "mailto:excellentstudentsacademy1@gmail.com" },
    { icon: <MessageCircle size={15} />, label: "WHATSAPP", value: "+91 94580 12793", href: "https://wa.me/919458012793" },
    { icon: <MapPin size={15} />, label: "VISIT US", value: "Sector 7, Rohini, Delhi", href: "/contact" },
  ];
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.label}>
          {i > 0 && (
            <div className="my-5" style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
          )}
          <BannerRow icon={item.icon} label={item.label} value={item.value} href={item.href} />
        </div>
      ))}
    </div>
  );
}

export function BannerStatsRight({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div>
      {stats.map((s, i) => (
        <div key={s.label}>
          {i > 0 && (
            <div className="my-6" style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
          )}
          <div>
            <p
              className="m-0 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {s.label}
            </p>
            <p
              className="mt-1 font-bold"
              style={{
                fontSize: "clamp(1.8rem, 2.6vw, 2.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: i % 2 === 0 ? "#22D3EE" : "#F87171",
              }}
            >
              {s.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BannerHeroRight() {
  return (
    <div>
      <BannerRow
        icon={<Star size={15} className="fill-current" />}
        label="ESTABLISHED"
        value={<>Coaching in Rohini since 2015</>}
      />
      <div className="my-5" style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
      <BannerRow
        icon={<Phone size={15} />}
        label="CALL US"
        value="+91 94580 12793"
        href="tel:+919458012793"
      />
      <div className="my-5" style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
      <BannerRow
        icon={<Calendar size={15} />}
        label="FREE DEMO CLASS"
        value={
          <span className="inline-flex items-center gap-1">
            Book a 7-day demo <span aria-hidden>→</span>
          </span>
        }
        href="/contact#enquiry"
      />
    </div>
  );
}
