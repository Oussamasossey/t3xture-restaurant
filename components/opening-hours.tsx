import { HOURS } from "@/data/site";
import { cn } from "@/lib/utils";

interface OpeningHoursProps {
  className?: string;
  /** Shows the "kitchen closes" footnote under the rows. */
  note?: boolean;
  compact?: boolean;
}

export function OpeningHours({ className, note = true, compact }: OpeningHoursProps) {
  return (
    <div className={cn(className)}>
      <dl className="divide-y divide-border border-y border-border">
        {HOURS.map((row) => (
          <div
            key={row.day}
            className={cn(
              "flex items-baseline justify-between gap-6",
              compact ? "py-2.5" : "py-4"
            )}
          >
            <dt
              className={cn(
                "text-sm",
                row.closed
                  ? "text-ink-400"
                  : "font-medium uppercase tracking-[0.12em] text-foreground"
              )}
            >
              {row.day}
            </dt>
            <dd
              className={cn(
                "font-serif text-base",
                row.closed ? "text-ink-400 italic" : "text-foreground"
              )}
            >
              {row.hours}
            </dd>
          </div>
        ))}
      </dl>

      {note ? (
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Last orders 45 minutes before close. The kitchen is closed Mondays and
          open all day on weekends.
        </p>
      ) : null}
    </div>
  );
}
