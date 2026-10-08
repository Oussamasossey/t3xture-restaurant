import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { CHEF } from "@/data/site";

export function ChefSection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-cream-100" aria-labelledby="chef-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_75%_25%,rgba(201,164,93,0.3),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={CHEF.portrait}
                alt={CHEF.portraitAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 hidden h-40 w-40 border border-gold-500/50 sm:block"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:pl-6" delay={0.1}>
          <p className="eyebrow text-gold-300">
            <span className="gold-rule" aria-hidden="true" />
            The kitchen
          </p>

          <h2
            id="chef-heading"
            className="display-title mt-6 text-4xl sm:text-5xl md:text-6xl text-balance"
          >
            {CHEF.name}
          </h2>
          <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-editorial text-gold-300">
            {CHEF.role}
          </p>

          <blockquote className="mt-8 border-l border-gold-500/60 pl-6 font-serif text-2xl italic leading-snug text-cream-100/90 text-pretty sm:text-3xl">
            “{CHEF.quote}”
          </blockquote>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-cream-100/65 text-pretty">
            {CHEF.bio[0]}
          </p>

          <p
            aria-hidden="true"
            className="mt-8 font-serif text-3xl italic text-gold-300"
          >
            {CHEF.signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
