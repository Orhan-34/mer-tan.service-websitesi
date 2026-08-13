import { serviceIds, serviceMeta } from "@/lib/data/services";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const absolute = (relative: string) => `${siteConfig.url}${relative}`;

/**
 * `AutoRepair` (LocalBusiness alt tipi) — her sayfada, layout içinde.
 *
 * ⚠️ `aggregateRating` bilinçli olarak eklenmedi: yalnızca gerçek ve
 * doğrulanabilir yorum verisi varsa eklenmelidir (uydurma puan Google manuel
 * işlem cezası nedenidir).
 */
export function autoRepairSchema(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${siteConfig.url}/#business`,
    name: `${dict.brand.name} — ${dict.brand.tagline}`,
    description: dict.brand.blurb,
    image: absolute("/images/og/kapak.svg"),
    url: absolute(path(locale, "home")),
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.lat,
      longitude: siteConfig.address.geo.lng,
    },
    openingHoursSpecification: siteConfig.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    })),
    areaServed: [{ "@type": "City", name: siteConfig.address.city }],
    brand: { "@type": "Brand", name: "Mercedes-Benz" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.services.heading,
      itemListElement: serviceIds.map((id) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: dict.services.items[id].title,
          url: absolute(path(locale, "services", serviceMeta[id].slug[locale])),
        },
      })),
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function serviceSchema(
  locale: Locale,
  dict: Dictionary,
  id: (typeof serviceIds)[number],
) {
  const service = dict.services.items[id];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    url: absolute(path(locale, "services", serviceMeta[id].slug[locale])),
    serviceType: service.title,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: { "@type": "City", name: siteConfig.address.city },
  };
}

/** SSS bölümündeki metinlerle birebir aynı olmalıdır. */
export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.href),
    })),
  };
}
