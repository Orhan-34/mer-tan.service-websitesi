"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";

/**
 * TR/EN geçişi. Seçim bir çerezde saklanır; `proxy.ts` bir sonraki ziyarette
 * bu tercihi kullanır. Çerez zorunlu (işlevsel) çerezdir, onay gerektirmez.
 */
export function LanguageSwitcher({
  locale,
  label,
  tone = "dark",
  className,
}: {
  locale: Locale;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label={label}
    >
      {locales.map((target) => {
        const active = target === locale;
        return (
          <Link
            key={target}
            href={switchLocalePath(pathname, target)}
            hrefLang={target}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${target};path=/;max-age=31536000;samesite=lax`;
            }}
            className={cn(
              "grid h-8 min-w-8 place-items-center rounded-sm px-2 text-[12px] font-medium transition-colors",
              tone === "dark"
                ? active
                  ? "bg-white/10 text-white"
                  : "text-fg-dark-subtle hover:text-white"
                : active
                  ? "bg-fg-light/10 text-fg-light"
                  : "text-fg-light-muted hover:text-fg-light",
            )}
          >
            <span className="sr-only">{localeLabels[target].full}</span>
            <span aria-hidden="true">{localeLabels[target].short}</span>
          </Link>
        );
      })}
    </div>
  );
}
