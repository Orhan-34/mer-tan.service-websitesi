import { MapPin, Phone, CalendarCheck } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

/** Mobil dönüşüm çubuğu — plan §5.2. Masaüstünde gizlenir. */
export function MobileActionBar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const itemClasses =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-white transition-colors hover:bg-white/5";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="flex items-stretch divide-x divide-[rgba(255,255,255,0.08)]">
        <a href={`tel:${siteConfig.contact.phone}`} className={itemClasses}>
          <Phone className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
          {dict.common.callNow}
        </a>

        <Link href={path(locale, "appointment")} className={itemClasses}>
          <CalendarCheck className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
          {dict.common.bookAppointment}
        </Link>

        <a
          href={siteConfig.address.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClasses}
        >
          <MapPin className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
          {dict.common.getDirections}
        </a>
      </div>
    </div>
  );
}
