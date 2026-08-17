import type { Dictionary } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

/**
 * Çalışma saatlerini iki satırlık rozet olarak gösterir: açık olunan günler ve
 * kapalı olunan gün. Gün adı rozetin sağında durur.
 *
 * Makine okunur saatler `siteConfig.openingHours` üzerinden schema.org'a
 * gidiyor — burası yalnızca görünen katman.
 */
export function HoursBadge({
  dict,
  tone = "dark",
  className,
}: {
  dict: Dictionary;
  tone?: "dark" | "light";
  className?: string;
}) {
  const isDark = tone === "dark";

  const badgeBase = cn(
    "inline-flex items-center gap-2 rounded-full border px-2.5 py-1",
    "text-[11px] font-semibold tracking-[0.08em] uppercase",
  );
  const dayClass = cn(
    "text-[12.5px]",
    isDark ? "text-fg-dark-muted" : "text-fg-light-muted",
  );

  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        <span
          className={cn(
            badgeBase,
            isDark
              ? "border-line-dark-strong bg-white/5 text-white"
              : "border-line-light bg-success-bg text-success",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full",
              isDark ? "bg-success-on-dark" : "bg-success",
            )}
          />
          {dict.hoursBadge.openLabel}
        </span>
        <span className={dayClass}>{dict.hoursBadge.openDays}</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        <span
          className={cn(
            badgeBase,
            isDark
              ? "border-error-on-dark/30 bg-error-on-dark/10 text-error-on-dark"
              : "border-line-light bg-error-bg text-error",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full",
              isDark ? "bg-error-on-dark" : "bg-error",
            )}
          />
          {dict.hoursBadge.closedLabel}
        </span>
        <span className={dayClass}>{dict.hoursBadge.closedDays}</span>
      </div>
    </div>
  );
}
