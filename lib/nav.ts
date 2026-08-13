import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { path, type RouteKey } from "@/lib/i18n/routes";
import { featuredServiceIds, serviceIds, serviceMeta } from "@/lib/data/services";

export type NavLink = { key: RouteKey; label: string; href: string };

/** Header ve mobil menüde kullanılan ana navigasyon. */
export function mainNav(locale: Locale, dict: Dictionary): NavLink[] {
  return [
    { key: "home", label: dict.nav.home, href: path(locale, "home") },
    { key: "services", label: dict.nav.services, href: path(locale, "services") },
    {
      key: "appointment",
      label: dict.nav.appointment,
      href: path(locale, "appointment"),
    },
    {
      key: "campaigns",
      label: dict.nav.campaigns,
      href: path(locale, "campaigns"),
    },
    { key: "contact", label: dict.nav.contact, href: path(locale, "contact") },
  ];
}

/** Footer "Hızlı Linkler" kolonu. */
export function footerNav(locale: Locale, dict: Dictionary): NavLink[] {
  return [
    ...mainNav(locale, dict).slice(0, 4),
    { key: "faq", label: dict.nav.faq, href: path(locale, "faq") },
    { key: "about", label: dict.nav.about, href: path(locale, "about") },
    { key: "contact", label: dict.nav.contact, href: path(locale, "contact") },
  ];
}

export function serviceNav(locale: Locale, dict: Dictionary, featuredOnly = false) {
  const ids = featuredOnly ? featuredServiceIds : serviceIds;
  return ids.map((id) => ({
    id,
    href: path(locale, "services", serviceMeta[id].slug[locale]),
    icon: serviceMeta[id].icon,
    title: dict.services.items[id].title,
    excerpt: dict.services.items[id].excerpt,
  }));
}
