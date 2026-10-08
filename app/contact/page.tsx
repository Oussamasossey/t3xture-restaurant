import type { Metadata } from "next";
import Link from "next/link";
import { Car, Mail, MapPin, Navigation, Phone, TrainFront } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { OpeningHours } from "@/components/opening-hours";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & directions",
  description:
    "Find Saveur at 148 Alder Lane, San Francisco. Phone, email, opening hours and directions, plus a map of the block.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Saveur",
    description: "148 Alder Lane, San Francisco. Directions, hours and contact details.",
    url: "https://saveur.example.com/contact",
  },
};

const DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    lines: [SITE.address.street, `${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`],
    href: SITE.mapsQuery,
    cta: "Open in maps",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: [SITE.phone, "Tue – Sun, from 3 pm"],
    href: SITE.phoneHref,
    cta: "Call the restaurant",
  },
  {
    icon: Mail,
    label: "Email",
    lines: [SITE.email, "Replies within one working day"],
    href: SITE.emailHref,
    cta: "Write to us",
  },
];

const GETTING_HERE = [
  {
    icon: TrainFront,
    title: "By transit",
    body: "16th St Mission BART, 8 minutes on foot along Alder Lane. The 14 bus stops at the corner.",
  },
  {
    icon: Car,
    title: "By car",
    body: "Metered parking on Alder and on the cross street. A paid garage is two blocks east, open until midnight.",
  },
  {
    icon: Navigation,
    title: "On arrival",
    body: "The entrance is the green door beside the old press window, no sign, just a brass plate.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Come and find the green door"
        description="We are on Alder Lane, a quiet block between the mission and the park. Reservations by phone or through the booking form."
      />

      {/* ── Details ──────────────────────────────────────────── */}
      <section className="section" aria-labelledby="details-heading">
        <div className="container space-y-14">
          <Reveal>
            <SectionHeader
              eyebrow="Get in touch"
              id="details-heading"
              title="Three ways to reach us"
            />
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            {DETAILS.map((detail) => {
              const Icon = detail.icon;
              return (
                <StaggerItem key={detail.label}>
                  <article className="flex h-full flex-col rounded-sm border border-border bg-card p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-800">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-[0.62rem] font-semibold uppercase tracking-editorial text-muted-foreground">
                      {detail.label}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {detail.lines.map((line) => (
                        <p key={line} className="font-serif text-lg text-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="link-underline mt-6 self-start text-[0.68rem] font-medium uppercase tracking-editorial text-gold-800"
                    >
                      {detail.cta}
                    </Link>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="grid gap-6 md:grid-cols-3">
            {GETTING_HERE.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="flex gap-4">
                    <Icon
                      className="mt-1 h-5 w-5 shrink-0 text-gold-600"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-serif text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Map ──────────────────────────────────────────────── */}
      <section
        className="section border-y border-border bg-cream-200/60"
        aria-labelledby="map-heading"
      >
        <div className="container space-y-10">
          <Reveal>
            <SectionHeader
              eyebrow="Find us"
              id="map-heading"
              title="148 Alder Lane"
              description="One block south of the park, between the old print works and the flower stall."
            />
          </Reveal>

          <Reveal delay={0.1}>
            {/* Replace this block with an embed, e.g.
                <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" loading="lazy" /> */}
            <div
              role="img"
              aria-label="Stylised map showing the location of Saveur at 148 Alder Lane, San Francisco"
              className="relative flex h-[380px] items-center justify-center overflow-hidden rounded-sm border border-border bg-cream-100 md:h-[520px] [background-image:linear-gradient(to_right,rgba(28,26,22,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,26,22,0.07)_1px,transparent_1px)] [background-size:44px_44px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,164,93,0.22),transparent_60%)]"
              />

              <div className="relative mx-6 max-w-md rounded-sm border border-border bg-card/95 p-8 text-center shadow-xl backdrop-blur">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                  <MapPin className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="mt-5 font-serif text-2xl">148 Alder Lane</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  Between the old print works and the flower stall, one block
                  south of the park. Open the block in a new tab for walking
                  directions.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button variant="gold" size="sm" asChild>
                    <Link href={SITE.mapsQuery} target="_blank" rel="noopener noreferrer">
                      Get directions
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/reservation">Reserve first</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Hours ────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="contact-hours-heading">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Opening hours"
              id="contact-hours-heading"
              title="When we are here"
              description="The bar opens with the dining room and keeps going until last orders. Closed on Mondays, all year."
            >
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="gold" asChild>
                  <Link href="/reservation">Reserve a table</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={SITE.phoneHref}>Call us</Link>
                </Button>
              </div>
            </SectionHeader>
          </Reveal>

          <Reveal delay={0.1}>
            <OpeningHours />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
