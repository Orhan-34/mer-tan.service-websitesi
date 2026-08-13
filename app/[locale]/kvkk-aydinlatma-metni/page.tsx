import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/layout/legal-page";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";

const LAST_UPDATED = "2026-08-13";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/kvkk-aydinlatma-metni">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "kvkk",
    title: dict.meta.kvkk.title,
    description: dict.meta.kvkk.description,
  });
}

export default async function KvkkPage({
  params,
}: PageProps<"/[locale]/kvkk-aydinlatma-metni">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      dict={dict}
      route="kvkk"
      content={dict.pages.legal.kvkk}
      lastUpdated={LAST_UPDATED}
    />
  );
}
