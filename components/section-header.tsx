import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** id for the heading — lets sections point aria-labelledby at it. */
  id?: string;
  /** Rendered under the title — e.g. a CTA link. */
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
  children,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", centered && "justify-center")}>
          <span className="gold-rule" aria-hidden="true" />
          {eyebrow}
          <span className="gold-rule" aria-hidden="true" />
        </p>
      ) : null}

      <h2
        id={id}
        className={cn(
          "display-title mt-5 text-4xl sm:text-5xl md:text-[3.4rem] text-balance"
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}

      {children}
    </div>
  );
}
