import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.5a3 3 0 00-2.1-2.1C19.4 4 12 4 12 4s-7.4 0-9.4.4A3 3 0 00.5 6.5C.1 8.5 0 12 0 12s.1 3.5.5 5.5a3 3 0 002.1 2.1C4.6 20 12 20 12 20s7.4 0 9.4-.4a3 3 0 002.1-2.1c.4-2 .5-5.5.5-5.5s-.1-3.5-.5-5.5zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
    </svg>
  );
}
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-4 lg:gap-16 lg:px-8 lg:py-20">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/esa-logo.jpg"
              alt="Excellent Students' Academy logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-base font-bold tracking-tight text-white">
              Excellent Students&apos; Academy
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-neutral-400">
            Coaching institute in Rohini, Delhi for Grades 1 to 12. Trusted by parents for disciplined tuition, expert faculty and consistent board results.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              href={siteConfig.socials.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-700 text-neutral-400 transition hover:border-teal-400 hover:text-teal-300"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-700 text-neutral-400 transition hover:border-teal-400 hover:text-teal-300"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.youtube}
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-700 text-neutral-400 transition hover:border-red-400 hover:text-red-400"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-teal-300">
            Programs
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/programs#grades-1-5" className="text-neutral-300 transition hover:text-white">Classes 1 to 5</Link></li>
            <li><Link href="/programs#grades-6-8" className="text-neutral-300 transition hover:text-white">Classes 6 to 8</Link></li>
            <li><Link href="/programs#grades-9-10" className="text-neutral-300 transition hover:text-white">Classes 9 and 10</Link></li>
            <li><Link href="/programs#grades-11-12" className="text-neutral-300 transition hover:text-white">Classes 11 and 12</Link></li>
            <li><Link href="/programs#crash" className="text-neutral-300 transition hover:text-white">Crash Courses</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-teal-300">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/about" className="text-neutral-300 transition hover:text-white">About Us</Link></li>
            <li><Link href="/faculty" className="text-neutral-300 transition hover:text-white">Faculty</Link></li>
            <li><Link href="/results" className="text-neutral-300 transition hover:text-white">Results</Link></li>
            <li><Link href="/gallery" className="text-neutral-300 transition hover:text-white">Gallery</Link></li>
            <li><Link href="/faq" className="text-neutral-300 transition hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="text-neutral-300 transition hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-teal-300">
            Reach Us
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
              <span className="text-neutral-300">
                {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.pin}
              </span>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 text-neutral-300 transition hover:text-white">
                <Phone className="h-4 w-4 text-teal-400" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-neutral-300 transition hover:text-white">
                <Mail className="h-4 w-4 text-teal-400" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {year} Excellent Students&apos; Academy. All rights reserved.</p>
          <p>
            Reimagined by{" "}
            <a
              href="https://www.mayankdigitallabs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-300 transition hover:text-teal-200"
            >
              Mayank Digital Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
