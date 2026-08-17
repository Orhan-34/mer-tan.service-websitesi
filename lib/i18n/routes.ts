import type { Locale } from "./config";

/**
 * Rota anahtarı → dile göre URL segmenti.
 *
 * `tr` değerleri aynı zamanda `app/[locale]/...` altındaki gerçek klasör
 * adlarıdır. `en` değerleri `next.config.ts` içindeki rewrite kurallarıyla
 * bu klasörlere bağlanır.
 */
export const routeSegments = {
  home: { tr: "", en: "" },
  services: { tr: "hizmetler", en: "services" },
  appointment: { tr: "randevu", en: "appointment" },
  campaigns: { tr: "kampanyalar", en: "campaigns" },
  about: { tr: "hakkimizda", en: "about" },
  contact: { tr: "iletisim", en: "contact" },
  faq: { tr: "sss", en: "faq" },
  privacy: { tr: "gizlilik-politikasi", en: "privacy-policy" },
  kvkk: { tr: "kvkk-aydinlatma-metni", en: "data-protection-notice" },
  cookies: { tr: "cerez-politikasi", en: "cookie-policy" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeSegments;

/**
 * Dile göre tam yol üretir.
 * `path("tr", "services")` → `/tr/hizmetler`
 * `path("en", "services", "adblue-systems")` → `/en/services/adblue-systems`
 */
export function path(locale: Locale, key: RouteKey, slug?: string): string {
  const segment = routeSegments[key][locale];
  // Anasayfanın segmenti boştur; `filter` onu ve tanımsız slug'ı eler.
  // Baştaki "/" ayrıca eklenir — aksi hâlde göreli bir yol üretilirdi.
  return `/${[locale, segment, slug].filter(Boolean).join("/")}`;
}

/**
 * Mevcut yolun karşı dildeki eşdeğerini bulur (dil değiştirici için).
 * Eşleşme bulunamazsa hedef dilin anasayfasına döner.
 */
export function switchLocalePath(
  pathname: string,
  target: Locale,
  slugMap?: Record<Locale, string>,
): string {
  const parts = pathname.split("/").filter(Boolean);
  const [, segment, slug] = parts;

  if (!segment) return `/${target}`;

  const entry = (Object.keys(routeSegments) as RouteKey[]).find((key) =>
    (Object.values(routeSegments[key]) as string[]).includes(segment),
  );

  if (!entry) return `/${target}`;

  const targetSlug = slug ? (slugMap?.[target] ?? slug) : undefined;
  return path(target, entry, targetSlug);
}
