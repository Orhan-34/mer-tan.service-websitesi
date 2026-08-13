import type { MetadataRoute } from "next";
import { serviceIds, serviceMeta } from "@/lib/data/services";
import { locales } from "@/lib/i18n/config";
import { path, routeSegments, type RouteKey } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

const priorities: Partial<Record<RouteKey, number>> = {
  home: 1,
  services: 0.9,
  appointment: 0.9,
  contact: 0.8,
  faq: 0.7,
  about: 0.6,
  campaigns: 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticKeys = Object.keys(routeSegments) as RouteKey[];

  const staticEntries = locales.flatMap((locale) =>
    staticKeys.map((key) => ({
      url: `${siteConfig.url}${path(locale, key)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: priorities[key] ?? 0.3,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, `${siteConfig.url}${path(alt, key)}`]),
        ),
      },
    })),
  );

  const serviceEntries = locales.flatMap((locale) =>
    serviceIds.map((id) => ({
      url: `${siteConfig.url}${path(locale, "services", serviceMeta[id].slug[locale])}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [
            alt,
            `${siteConfig.url}${path(alt, "services", serviceMeta[id].slug[alt])}`,
          ]),
        ),
      },
    })),
  );

  return [...staticEntries, ...serviceEntries];
}
