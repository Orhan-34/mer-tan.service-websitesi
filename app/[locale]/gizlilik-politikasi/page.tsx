import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/layout/legal-page";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";

const LAST_UPDATED = "2026-08-13";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/gizlilik-politikasi">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "privacy",
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
  });
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/gizlilik-politikasi">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      dict={dict}
      route="privacy"
      content={dict.pages.legal.privacy}
      lastUpdated={LAST_UPDATED}
    />
  );
}
