import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ChefSection } from "@/components/chef-section";
import { CtaBand } from "@/components/cta-band";
import { DishCard } from "@/components/dish-card";
import { Gallery } from "@/components/gallery";
import { OpeningHours } from "@/components/opening-hours";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { FEATURED_DISHES } from "@/data/menu";
import { GALLERY, STATS, STORY_IMAGES } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <Image
          src={STORY_IMAGES.hero}
          alt="A waiter serving a plated dish in Saveur's candlelit dining room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/30"
        />

        <Stagger
          className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 md:pb-24 lg:px-12"
          stagger={0.1}
        >
          <StaggerItem>
            <p className="eyebrow text-gold-300">
              <span className="gold-rule" aria-hidden="true" />
              Est. 2012 · Alder Lane, San Francisco
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="display-title mt-7 max-w-4xl text-5xl text-cream-100 sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance">
              Seasonal cooking,
              <br className="hidden sm:block" /> quietly done.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream-100/75 text-pretty sm:text-lg">
              A twenty-eight seat dining room where the menu is written every
              Monday, after the market, and everything else is left out on
              purpose.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/reservation">
                  Reserve a table
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outlineLight" size="lg" asChild>
                <Link href="/menu">Explore the menu</Link>
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream-100/15 pt-6 text-cream-100/70">
              <div>
                <dt className="text-[0.6rem] uppercase tracking-editorial text-gold-300">
                  Dinner
                </dt>
                <dd className="mt-1 font-serif text-base text-cream-100">
                  Tue – Sun, from 5:30 pm
                </dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-editorial text-gold-300">
                  Address
                </dt>
                <dd className="mt-1 font-serif text-base text-cream-100">
                  148 Alder Lane
                </dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-editorial text-gold-300">
                  Reservations
                </dt>
                <dd className="mt-1 font-serif text-base text-cream-100">
                  +1 (415) 555-0148
                </dd>
              </div>
            </dl>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative pb-12 sm:pb-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:w-[86%]">
                <Image
                  src={STORY_IMAGES.primary}
                  alt="A chef plating a dish under copper heat lamps"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 right-0 hidden aspect-square w-[46%] overflow-hidden rounded-sm border-[6px] border-background bg-cream-200 shadow-2xl sm:block lg:-right-6">
                <Image
                  src={STORY_IMAGES.secondary}
                  alt="Small bowls of prepared ingredients lined up for service"
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -left-4 top-10 hidden h-28 w-px bg-gold-500 lg:block"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Our story"
              id="story-heading"
              title="One kitchen, one market, one menu"
              description="Saveur opened in 2012 in a former print shop on Alder Lane. We kept the ceiling, the light and the long communal table, and built a kitchen around a single wood-fired hearth."
            />

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
              <p>
                Every Monday the menu is rewritten from what arrives: fish from
                a day boat in Half Moon Bay, vegetables from two farms inland,
                meat from a single ranch we have worked with for a decade.
              </p>
              <p>
                Nothing is flown in, nothing is frozen, and very little is
                complicated. The room stays small on purpose: twenty-eight
                seats, one seating at a time, no rush.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-serif text-3xl text-gold-800 sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[0.62rem] uppercase tracking-editorial text-muted-foreground">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <Button variant="outline" className="mt-10" asChild>
              <Link href="/about">
                Read our story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── Signature dishes ─────────────────────────────────── */}
      <section
        className="section border-y border-border bg-cream-200/60"
        aria-labelledby="signatures-heading"
      >
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                eyebrow="Signatures"
                id="signatures-heading"
                title="Plates we are known for"
                description="Six dishes that have stayed on the menu in some form since the first service."
                className="max-w-2xl"
              />
              <Button variant="link" asChild>
                <Link href="/menu" className="shrink-0">
                  See the full menu
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_DISHES.slice(0, 6).map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ChefSection />

      {/* ── Gallery ──────────────────────────────────────────── */}
      <section className="section" aria-labelledby="gallery-heading">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="The room"
              id="gallery-heading"
              title="Evenings at Saveur"
              description="Warm light, long tables, and a pass you can see from every seat. Select any frame to open the gallery."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <Gallery images={GALLERY} />
          </Reveal>
        </div>
      </section>

      {/* ── Opening hours ────────────────────────────────────── */}
      <section
        className="section border-y border-border bg-cream-200/60"
        aria-labelledby="hours-heading"
      >
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Opening hours"
              id="hours-heading"
              title="When the door is open"
              description="Lunch on weekends, dinner from Tuesday, and the bar kept warm until last orders. Tables are released thirty days ahead."
            >
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="gold" asChild>
                  <Link href="/reservation">Reserve a table</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Find us</Link>
                </Button>
              </div>
            </SectionHeader>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-9">
              <OpeningHours />
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
