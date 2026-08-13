import { Info } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { htmlLang, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path, type RouteKey } from "@/lib/i18n/routes";
import { breadcrumbSchema } from "@/lib/schema";

type LegalContent = {
  title: string;
  description: string;
  sections: { heading: string; paragraphs: string[] }[];
};

/** Yasal sayfaların (gizlilik / KVKK / çerez) ortak şablonu. */
export function LegalPage({
  locale,
  dict,
  route,
  content,
  lastUpdated,
}: {
  locale: Locale;
  dict: Dictionary;
  route: RouteKey;
  content: LegalContent;
  /** ISO tarih — metin her güncellendiğinde elle yükseltilmeli. */
  lastUpdated: string;
}) {
  const crumbs = [
    { name: dict.nav.home, href: path(locale, "home") },
    { name: content.title, href: path(locale, route) },
  ];

  const formatted = new Intl.DateTimeFormat(htmlLang[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(lastUpdated));

  return (
    <>
      <PageHeader
        title={content.title}
        description={content.description}
        crumbs={crumbs}
        crumbsLabel={dict.common.breadcrumbLabel}
      />

      <section className="bg-paper py-16 lg:py-20">
        <Container size="narrow">
          <p className="text-[12px] text-fg-light-subtle">
            {dict.pages.legal.lastUpdated}: {formatted}
          </p>

          {content.sections.map((section) => (
            <div key={section.heading} className="mt-10">
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

          <div className="mt-12 flex items-start gap-3 rounded-md border border-line-light p-5">
            <Info
              className="mt-0.5 size-4 shrink-0 text-fg-light-subtle"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="text-body-sm text-fg-light-muted">
              {dict.pages.legal.disclaimer}
            </p>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
