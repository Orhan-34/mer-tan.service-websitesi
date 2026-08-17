import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { ClosingCta } from "@/components/sections/closing-cta";
import { ServicesGrid } from "@/components/sections/services-grid";
import { JsonLd } from "@/components/shared/json-ld";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/hizmetler">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "services",
    title: dict.meta.services.title,
    description: dict.meta.services.description,
  });
}

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/hizmetler">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.nav.home, href: path(locale, "home") },
    { name: dict.pages.services.title, href: path(locale, "services") },
  ];

  return (
    <>
      <PageHeader
        title={dict.pages.services.title}
        description={dict.pages.services.description}
        crumbs={crumbs}
        crumbsLabel={dict.common.breadcrumbLabel}
      />

      <ServicesGrid
        locale={locale}
        dict={dict}
        variant="all"
        withHeading={false}
      />

      <ClosingCta dict={dict} />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
