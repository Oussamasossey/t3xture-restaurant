import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaBandProps {
  title?: string;
  body?: string;
  className?: string;
}

export function CtaBand({
  title = "Join us for dinner",
  body = "Tables are released 30 days in advance. Walk-ins are welcome at the bar from 5:30 pm.",
  className,
}: CtaBandProps) {
  return (
    <section className={cn("relative overflow-hidden bg-ink-900 text-cream-100", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(201,164,93,0.35),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(201,164,93,0.2),transparent_50%)]"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between md:px-10 md:py-24 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-300">
            <span className="gold-rule" aria-hidden="true" />
            Reservations
          </p>
          <h2 className="display-title mt-5 text-4xl sm:text-5xl md:text-6xl text-balance">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream-100/70 text-pretty sm:text-base">
            {body}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="gold" size="lg" asChild>
            <Link href="/reservation">Reserve a table</Link>
          </Button>
          <Button variant="outlineLight" size="lg" asChild>
            <Link href="/menu">View the menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
