import { Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { ServiceCard } from "@/components/cards/service-card";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  findServiceBySlug,
  serviceIds,
  serviceMeta,
  type ServiceId,
} from "@/lib/data/services";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceIds.map((id) => ({ locale, slug: serviceMeta[id].slug[locale] })),
  );
}

/** Slug hangi dilde yazılmış olursa olsun hizmeti bulur. */
function resolve(locale: Locale, slug: string): ServiceId {
  const id = findServiceBySlug(slug);
  if (!id) notFound();

  // Diller arası geçişte URL karşı dilin slug'ında kalabilir; kanonik adrese al.
  const canonical = serviceMeta[id].slug[locale];
  if (canonical !== slug) redirect(path(locale, "services", canonical));

  return id;
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/hizmetler/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const id = findServiceBySlug(slug);
  if (!id) notFound();

  const dict = getDictionary(locale);
  const service = dict.services.items[id];

  return buildMetadata({
    locale,
    route: "services",
    slugs: serviceMeta[id].slug,
    title: `${service.title} ${dict.meta.serviceTitleSuffix}`,
    description: service.excerpt,
    images: [serviceMeta[id].image],
  });
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/[locale]/hizmetler/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const id = resolve(locale, slug);
  const dict = getDictionary(locale);
  const meta = serviceMeta[id];
  const service = dict.services.items[id];

  const crumbs = [
    { name: dict.nav.home, href: path(locale, "home") },
    { name: dict.pages.services.title, href: path(locale, "services") },
    { name: service.title, href: path(locale, "services", meta.slug[locale]) },
  ];

  const related = serviceIds.filter((other) => other !== id).slice(0, 3);

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.excerpt}
        crumbs={crumbs}
        crumbsLabel={dict.common.breadcrumbLabel}
      />

      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div>
              {service.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-body mt-5 text-fg-light-muted first:mt-0"
                >
                  {paragraph}
                </p>
              ))}

              <h2 className="text-h3 mt-10 text-fg-light">
                {dict.services.scopeTitle}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.scope.map((entry) => (
                  <li key={entry} className="flex items-start gap-2.5">
                    <Check
                      className="mt-[3px] size-[15px] shrink-0 text-fg-light"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="text-body-sm text-fg-light">{entry}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line-light">
                <Image
                  src={meta.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 lg:py-20">
        <Container>
          <SectionHeading
            title={dict.services.relatedTitle}
            action={{
              label: dict.common.allServices,
              href: path(locale, "services"),
            }}
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((otherId) => (
              <ServiceCard
                key={otherId}
                title={dict.services.items[otherId].title}
                excerpt={dict.services.items[otherId].excerpt}
                icon={serviceMeta[otherId].icon}
                image={serviceMeta[otherId].image}
                imageAlt={dict.services.items[otherId].title}
                href={path(locale, "services", serviceMeta[otherId].slug[locale])}
              />
            ))}
          </div>
        </Container>
      </section>

      <JsonLd data={serviceSchema(locale, dict, id)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
