export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

/** `<html lang>` ve `Intl` için tam dil etiketleri. */
export const htmlLang: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-US",
};

/** Dil değiştiricide gösterilen etiketler. */
export const localeLabels: Record<Locale, { short: string; full: string }> = {
  tr: { short: "TR", full: "Türkçe" },
  en: { short: "EN", full: "English" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
