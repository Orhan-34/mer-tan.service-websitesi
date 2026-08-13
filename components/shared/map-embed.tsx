"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/**
 * Facade deseni: ilk yüklemede yalnızca statik bir görsel gelir, gerçek iframe
 * kullanıcı tıklayınca yüklenir. Hem LCP/CLS hem de gizlilik açısından doğru
 * yaklaşım — Google'a onaysız istek gitmez.
 *
 * `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` tanımlı değilse harita yerine doğrudan
 * Google Haritalar bağlantısı gösterilir.
 */
export function MapEmbed({
  dict,
  embedUrl,
  className,
}: {
  dict: Dictionary;
  embedUrl?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div
      className={
        className ??
        "relative aspect-[16/10] overflow-hidden rounded-md border border-line-dark"
      }
    >
      {loaded && embedUrl ? (
        <iframe
          src={embedUrl}
          title={dict.closing.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src="/images/map-static.svg"
            alt={dict.closing.mapAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute inset-0 grid place-items-center bg-ink/40 transition-colors group-hover:bg-ink/30">
            <span className="inline-flex items-center gap-2 rounded-sm bg-white px-4 py-2 text-[13px] font-semibold text-ink">
              <MapPin className="size-4" strokeWidth={1.5} aria-hidden="true" />
              {dict.closing.mapCta}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
