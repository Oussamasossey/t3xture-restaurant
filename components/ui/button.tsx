import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-[0.7rem] font-medium uppercase tracking-wideish transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-ink-800 active:translate-y-px",
        gold: "bg-gold-500 text-ink-950 shadow-sm hover:bg-gold-600 hover:text-cream-100 active:translate-y-px",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-cream-400 active:translate-y-px",
        outline:
          "border border-ink-900/25 bg-transparent text-foreground hover:border-ink-900 hover:bg-primary hover:text-primary-foreground",
        outlineLight:
          "border border-cream-100/40 bg-transparent text-cream-100 hover:border-cream-100 hover:bg-cream-100 hover:text-ink-900",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-gold-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-5 text-[0.65rem]",
        lg: "h-12 px-9",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
