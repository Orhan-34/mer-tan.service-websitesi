import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { ClosingCta } from "@/components/sections/closing-cta";
import { StatsBand } from "@/components/sections/stats-band";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const gallery = [
  { src: "/images/about/atolye.webp", key: "workshop" },
  { src: "/images/about/ekip.webp", key: "team" },
  { src: "/images/about/ekipman.webp", key: "equipment" },
] as const;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/hakkimizda">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/hakkimizda">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const about = dict.pages.about;
  const crumbs = [
    { name: dict.nav.home, href: path(locale, "home") },
    { name: about.title, href: path(locale, "about") },
  ];

  return (
    <>
      <PageHeader
        title={about.title}
        description={about.lead}
        crumbs={crumbs}
        crumbsLabel={dict.common.breadcrumbLabel}
      />

      <section className="bg-paper py-16 lg:py-20">
        <Container size="narrow">
          {about.sections.map((section) => (
            <div key={section.heading} className="mt-12 first:mt-0">
              <h2 className="text-h3 text-fg-light">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-body mt-4 text-fg-light-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </Container>

        <Container className="mt-14">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {gallery.map((item) => (
              <li
                key={item.key}
                className="relative aspect-[3/2] overflow-hidden rounded-md border border-line-light"
              >
                <Image
                  src={item.src}
                  alt={about.gallery[item.key]}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <StatsBand dict={dict} locale={locale} />
      <ClosingCta dict={dict} />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
