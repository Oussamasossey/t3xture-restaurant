import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { HOURS, SITE } from "@/data/site";

const EXTERNAL_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Reservations" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
];

function SocialIcon({ label }: { label: string }) {
  const common = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (label === "Instagram")
    return (
      <svg {...common}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    );

  if (label === "Facebook")
    return (
      <svg {...common}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-900 text-cream-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <p className="flex items-center gap-2.5 font-serif text-2xl uppercase tracking-[0.34em]">
            Saveur
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/60 text-pretty">
            {SITE.tagline}. A 28-seat dining room serving a market-led menu
            Tuesday through Sunday on Alder Lane.
          </p>
          <div className="mt-7 flex gap-3">
            {SITE.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/75 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-[0.62rem] font-semibold uppercase tracking-editorial text-gold-300">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {EXTERNAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream-100/70 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-[0.62rem] font-semibold uppercase tracking-editorial text-gold-300">
            Opening hours
          </h2>
          <dl className="mt-5 space-y-2.5">
            {HOURS.map((row) => (
              <div key={row.day} className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-cream-100/70">{row.day}</dt>
                <dd
                  className={
                    row.closed
                      ? "text-sm italic text-cream-100/40"
                      : "font-serif text-sm text-cream-100"
                  }
                >
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-[0.62rem] font-semibold uppercase tracking-editorial text-gold-300">
            Visit
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-cream-100/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
              <a href={SITE.phoneHref} className="transition-colors hover:text-gold-300">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
              <a href={SITE.emailHref} className="transition-colors hover:text-gold-300">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-cream-100/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {year} Saveur. All rights reserved.
          </p>
          <p>Demo Website · Made by T3xture · Photography via Unsplash · Built with Next.js, Tailwind &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
