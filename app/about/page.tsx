import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ChefSection } from "@/components/chef-section";
import { CtaBand } from "@/components/cta-band";
import { Gallery } from "@/components/gallery";
import { PageHeader } from "@/components/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { GALLERY, SITE, STATS, STORY_IMAGES, VALUES } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Saveur began: a former print shop on Alder Lane, one wood-fired hearth, and a menu rewritten every Monday after the market.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Saveur",
    description:
      "A twenty-eight seat dining room built around a single wood-fired hearth.",
    url: "https://saveur.example.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Saveur"
        title="A print shop, a hearth, and twenty-eight seats"
        description={`We opened in ${SITE.founded} with one stove, one market list and the stubborn idea that a restaurant should change every week.`}
      />

      {/* ── Origin story ─────────────────────────────────────── */}
      <section className="section" aria-labelledby="origin-heading">
        <div className="container grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              eyebrow="Since 2012"
              id="origin-heading"
              title="Nothing here was planned for long"
              description="Saveur started as a twenty-seat wine bar run out of a borrowed kitchen. The menu was four dishes, handwritten, and it changed whenever the farms did, a habit that turned out to be the whole business."
            />

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
              <p className="font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
                “We never wrote a concept. We wrote a shopping list, and the
                restaurant grew around it.”
              </p>
              <div className="columns-1 gap-10 md:columns-2">
                <p className="mb-5 break-inside-avoid">
                  The room still has its original press-floor windows and the
                  iron beams that once held a printing press. Everything else
                  (the hearth, the bar, the long table) was built by hand over
                  two winters with a small crew and a lot of favour-trading.
                </p>
                <p className="mb-5 break-inside-avoid">
                  Today the kitchen runs on one wood fire and two farms. The
                  ranch in Petaluma raises our beef and pork; the valley farms
                  bring whatever ripened that week. If a crop fails, the dish
                  disappears until next year.
                </p>
                <p className="break-inside-avoid">
                  Service is deliberately unhurried: one seating, no turn, no
                  music over conversation. Most tables stay three hours. We
                  consider that a success rather than a scheduling problem.
                </p>
              </div>
            </div>

            <Button variant="outline" className="mt-9" asChild>
              <Link href="/reservation">
                Book a table
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={STORY_IMAGES.primary}
                alt="A chef finishing a plate under the heat lamps at the pass"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-gold-800">{stat.value}</p>
                  <p className="mt-1.5 text-[0.6rem] uppercase leading-relaxed tracking-editorial text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section
        className="section border-y border-border bg-cream-200/60"
        aria-labelledby="values-heading"
      >
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="How we work"
              id="values-heading"
              title="Three rules, written on the wall"
              align="center"
            />
          </Reveal>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {VALUES.map((value, index) => (
              <StaggerItem key={value.title}>
                <article className="h-full rounded-sm border border-border bg-card p-8">
                  <p className="font-serif text-4xl text-gold-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-serif text-2xl">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {value.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ChefSection />

      {/* ── Gallery ──────────────────────────────────────────── */}
      <section className="section" aria-labelledby="about-gallery-heading">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Gallery"
              id="about-gallery-heading"
              title="Inside the room"
              description="From the first coffee of the day to the last glass poured at the bar."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <Gallery images={GALLERY} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Come and see for yourself"
        body="The dining room seats twenty-eight. Weekend tables usually go a fortnight ahead."
      />
    </>
  );
}
