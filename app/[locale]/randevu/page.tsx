import { Check, Clock, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { AppointmentForm } from "@/components/sections/appointment-form";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/randevu">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "appointment",
    title: dict.meta.appointment.title,
    description: dict.meta.appointment.description,
  });
}

export default async function AppointmentPage({
  params,
}: PageProps<"/[locale]/randevu">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.nav.home, href: path(locale, "home") },
    { name: dict.pages.appointment.title, href: path(locale, "appointment") },
  ];

  return (
    <>
      <PageHeader
        title={dict.pages.appointment.title}
        description={dict.pages.appointment.description}
        crumbs={crumbs}
        crumbsLabel={dict.common.breadcrumbLabel}
      />

      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="rounded-md bg-paper-card p-7 shadow-[var(--shadow-card)] lg:p-9">
              <h2 className="text-h3 text-fg-light">{dict.form.title}</h2>
              <p className="text-body-sm mt-3 text-fg-light-muted">
                {dict.form.description}
              </p>
              <div className="mt-7">
                <AppointmentForm locale={locale} dict={dict} variant="plain" />
              </div>
            </div>

            <aside className="rounded-md border border-line-light p-7 lg:p-9">
              <h2 className="text-h4 text-fg-light">
                {dict.pages.appointment.infoTitle}
              </h2>

              <ul className="mt-5 space-y-3">
                {dict.pages.appointment.infoItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="mt-[3px] size-[15px] shrink-0 text-fg-light"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="text-body-sm text-fg-light-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-7 border-line-light" />

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <IconCircle icon={Phone} size={28} tone="light" />
                  <div>
                    <p className="text-[11px] text-fg-light-subtle">
                      {dict.common.phone}
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[13px] text-fg-light hover:underline"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <IconCircle icon={Clock} size={28} tone="light" />
                  <div>
                    <p className="text-[11px] text-fg-light-subtle">
                      {dict.common.workingHours}
                    </p>
                    {dict.hours.map((row) => (
                      <p key={row.days} className="text-[13px] text-fg-light">
                        {row.days}: {row.time}
                      </p>
                    ))}
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <IconCircle icon={MapPin} size={28} tone="light" />
                  <div>
                    <p className="text-[11px] text-fg-light-subtle">
                      {dict.common.address}
                    </p>
                    <p className="text-[13px] text-fg-light">
                      {siteConfig.address.street}, {siteConfig.address.district} /{" "}
                      {siteConfig.address.city}
                    </p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
