import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { AppointmentForm } from "@/components/sections/appointment-form";
import { JsonLd } from "@/components/shared/json-ld";
import { MapEmbed } from "@/components/shared/map-embed";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/iletisim">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/iletisim">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const contact = dict.pages.contact;
  const crumbs = [
    { name: dict.nav.home, href: path(locale, "home") },
    { name: contact.title, href: path(locale, "contact") },
  ];

  return (
    <>
      <PageHeader
        title={contact.title}
        description={contact.description}
        crumbs={crumbs}
        crumbsLabel={dict.common.breadcrumbLabel}
      />

      <section className="bg-ink pb-16 pt-14 lg:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <IconCircle icon={MapPin} size={32} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.address}
                  </p>
                  <p className="mt-1 text-[14px] text-white">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.district} /{" "}
                    {siteConfig.address.city}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconCircle icon={Phone} size={32} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.phone}
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="mt-1 block text-[14px] text-white hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconCircle icon={MessageCircle} size={32} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.whatsapp}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[14px] text-white hover:underline"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconCircle icon={Mail} size={32} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.email}
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-1 block text-[14px] text-white hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconCircle icon={Clock} size={32} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.workingHours}
                  </p>
                  <table className="mt-1">
                    <tbody>
                      {dict.hours.map((row) => (
                        <tr key={row.days}>
                          <th
                            scope="row"
                            className="pr-6 text-left text-[13px] font-normal text-fg-dark-muted"
                          >
                            {row.days}
                          </th>
                          <td className="text-[13px] text-white">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>

            <div>
              <MapEmbed
                dict={dict}
                embedUrl={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
              />
              <Button asChild variant="outline-light" size="md" className="mt-4">
                <a
                  href={siteConfig.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.common.getDirectionsLong}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-[720px] rounded-md bg-paper-card p-7 shadow-[var(--shadow-card)] lg:p-9">
            <h2 className="text-h3 text-fg-light">{contact.formTitle}</h2>
            <p className="text-body-sm mt-3 text-fg-light-muted">
              {contact.formDescription}
            </p>
            <div className="mt-7">
              <AppointmentForm
                locale={locale}
                dict={dict}
                variant="plain"
                id="iletisim-form"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[720px] rounded-md border border-line-light p-6">
            <h2 className="text-h4 text-fg-light">{contact.legalTitle}</h2>
            <p className="text-body-sm mt-2 text-fg-light-muted">
              {contact.legalNote}
            </p>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
