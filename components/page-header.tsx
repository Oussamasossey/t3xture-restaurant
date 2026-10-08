import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-border bg-cream-200/70 px-5 pb-16 pt-36 sm:px-8 md:pb-20 md:pt-44 lg:px-12",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">
          <span className="gold-rule" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="display-title mt-6 max-w-4xl text-5xl sm:text-6xl md:text-7xl text-balance">
          {title}
        </h1>
        {description ? (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
