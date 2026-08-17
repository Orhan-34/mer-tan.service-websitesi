import { Tag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { ClosingCta } from "@/components/sections/closing-cta";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

/**
 * Kampanyalar henüz bir içerik kaynağına bağlı değil. Bir CMS ya da veritabanı
 * eklendiğinde bu dizi oradan beslenmeli; boş durum metni sözlükten gelir.
 */
const campaigns: { slug: string; title: string; excerpt: string }[] = [];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/kampanyalar">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "campaigns",
    title: dict.meta.campaigns.title,
    description: dict.meta.campaigns.description,
  });
}

export default async function CampaignsPage({
  params,
}: PageProps<"/[locale]/kampanyalar">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const page = dict.pages.campaigns;
  const crumbs = [
    { name: dict.nav.home, href: path(locale, "home") },
    { name: page.title, href: path(locale, "campaigns") },
  ];

  return (
    <>
      <PageHeader
        title={page.title}
        description={page.description}
        crumbs={crumbs}
        crumbsLabel={dict.common.breadcrumbLabel}
      />

      <section className="bg-paper py-16 lg:py-20">
        <Container>
          {campaigns.length === 0 ? (
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-5 rounded-md border border-line-light bg-paper-card p-10 text-center">
              <IconCircle icon={Tag} size={40} tone="light" />
              <p className="text-body text-fg-light-muted">{page.empty}</p>
              <Button asChild variant="primary-dark" size="md">
                <Link href={path(locale, "appointment")}>{page.emptyCta}</Link>
              </Button>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {campaigns.map((campaign) => (
                <li
                  key={campaign.slug}
                  className="rounded-md border border-line-light bg-paper-card p-6"
                >
                  <h2 className="text-h4 text-fg-light">{campaign.title}</h2>
                  <p className="text-body-sm mt-2 text-fg-light-muted">
                    {campaign.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <ClosingCta dict={dict} />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
