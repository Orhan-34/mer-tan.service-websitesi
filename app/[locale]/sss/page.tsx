import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { faqIds } from "@/lib/data/home";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/sss">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "faq",
    title: dict.meta.faq.title,
    description: dict.meta.faq.description,
  });
}

export default async function FaqPage({ params }: PageProps<"/[locale]/sss">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.nav.home, href: path(locale, "home") },
    { name: dict.pages.faq.title, href: path(locale, "faq") },
  ];

  return (
    <>
      <PageHeader
        title={dict.pages.faq.title}
        description={dict.pages.faq.description}
        crumbs={crumbs}
        crumbsLabel={dict.common.breadcrumbLabel}
      />

      <section className="bg-paper py-16 lg:py-20">
        <Container size="narrow">
          <FaqAccordion dict={dict} />

          <div className="mt-12 flex flex-col items-start gap-4 rounded-md border border-line-light p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body text-fg-light">
              {dict.pages.faq.stillQuestions}
            </p>
            <Button asChild variant="outline-dark" size="md">
              <Link href={path(locale, "contact")}>
                {dict.pages.faq.stillQuestionsCta}
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <JsonLd data={faqPageSchema(faqIds.map((id) => dict.faq.items[id]))} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
