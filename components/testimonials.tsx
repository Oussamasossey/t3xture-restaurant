import { Star } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Guest book"
            id="testimonials-heading"
            title="What the room says afterwards"
            description="A few notes left behind by guests over the last season."
            align="center"
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {TESTIMONIALS.map((item) => (
            <StaggerItem key={item.name}>
              <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-8">
                <div className="flex gap-1 text-gold-500" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-lg italic leading-relaxed text-foreground text-pretty">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.meta}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
