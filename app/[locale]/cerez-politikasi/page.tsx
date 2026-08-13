import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/layout/legal-page";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";

const LAST_UPDATED = "2026-08-13";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/cerez-politikasi">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "cookies",
    title: dict.meta.cookies.title,
    description: dict.meta.cookies.description,
  });
}

export default async function CookiePolicyPage({
  params,
}: PageProps<"/[locale]/cerez-politikasi">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      dict={dict}
      route="cookies"
      content={dict.pages.legal.cookies}
      lastUpdated={LAST_UPDATED}
    />
  );
}
