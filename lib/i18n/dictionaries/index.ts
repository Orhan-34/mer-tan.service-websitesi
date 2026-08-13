import type { Locale } from "@/lib/i18n/config";
import { tr, type Dictionary } from "./tr";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { tr, en };

/**
 * Sözlükler statik olarak içe aktarılır: hepsi sunucu bileşenlerinde render
 * edilir, istemci paketine girmez ve toplam boyutları küçüktür.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
