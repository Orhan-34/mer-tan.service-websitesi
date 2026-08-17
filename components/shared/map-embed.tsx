import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";

/**
 * Harita sayfa açılışında doğrudan gömülür. `loading="lazy"` sayesinde iframe
 * yalnızca görünüm alanına yaklaşınca istek atar; böylece ilk yükleme ve LCP
 * etkilenmez.
 *
 * ⚠️ Gizlilik notu: iframe göründüğü anda Google'a istek gider — çerez/KVKK
 * metinlerinin bunu kapsadığından emin olun.
 *
 * `embedUrl` verilmezse (env ve site-config ikisi de boşsa) statik görsel
 * gösterilir ve Google Haritalar'a bağlantı verilir.
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
  const wrapperClass =
    className ??
    "relative aspect-[16/10] overflow-hidden rounded-md border border-line-dark";

  if (!embedUrl) {
    return (
      <div className={wrapperClass}>
        <a
          href={siteConfig.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dict.closing.mapTitle}
          className="absolute inset-0"
        >
          <Image
            src="/images/map-static.svg"
            alt={dict.closing.mapAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </a>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <iframe
        src={embedUrl}
        title={dict.closing.mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
