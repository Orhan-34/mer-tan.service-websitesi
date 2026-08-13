import Link from "next/link";
import { MbStar } from "@/components/shared/mb-star";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { path } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";

export function Logo({
  locale,
  dict,
  className,
}: {
  locale: Locale;
  dict: Dictionary;
  className?: string;
}) {
  return (
    <Link
      href={path(locale, "home")}
      className={cn("flex items-center gap-3 text-white", className)}
    >
      <MbStar className="size-8" />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">
          {dict.brand.name}
        </span>
        <span className="mt-1 text-[10.5px] tracking-[0.02em] text-fg-dark-subtle">
          {dict.brand.tagline}
        </span>
      </span>
    </Link>
  );
}
