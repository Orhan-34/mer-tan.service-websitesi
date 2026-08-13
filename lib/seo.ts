import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/config";
import { path, type RouteKey } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

type BuildMetadataOptions = {
  locale: Locale;
  title: string;
  description: string;
  /** Canonical ve hreflang üretimi için rota. */
  route: RouteKey;
  /** Hizmet detayı gibi dinamik sayfalarda dile göre slug. */
  slugs?: Record<Locale, string>;
  images?: string[];
};

/**
 * Canonical + hreflang (`alternates.languages`) + OpenGraph üretir.
 * Her sayfa bunu kullanmalı; elle `<link rel="canonical">` yazılmamalı.
 */
export function buildMetadata({
  locale,
  title,
  description,
  route,
  slugs,
  images,
}: BuildMetadataOptions): Metadata {
  const canonical = path(locale, route, slugs?.[locale]);

  const languages = Object.fromEntries(
    locales.map((alt) => [alt, path(alt, route, slugs?.[alt])]),
  );

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": path("tr", route, slugs?.tr) },
    },
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: images ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images ?? undefined,
    },
  };
}
