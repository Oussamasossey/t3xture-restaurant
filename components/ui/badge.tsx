import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] leading-none",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        outline: "border-border bg-background/80 text-foreground",
        gold: "border-gold-300/60 bg-gold-100 text-gold-800",
        sage: "border-sage-500/30 bg-sage-100 text-sage-700",
        ember: "border-ember-500/30 bg-ember-100 text-ember-700",
        light: "border-cream-100/30 bg-ink-950/60 text-cream-100 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
