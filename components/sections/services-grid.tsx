import { ServiceCard } from "@/components/cards/service-card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredServiceIds, serviceIds, serviceMeta } from "@/lib/data/services";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";

export function ServicesGrid({
  locale,
  dict,
  /** Anasayfada 4 öne çıkan kart, hizmetler sayfasında tamamı. */
  variant = "featured",
  withHeading = true,
}: {
  locale: Locale;
  dict: Dictionary;
  variant?: "featured" | "all";
  withHeading?: boolean;
}) {
  const ids = variant === "featured" ? featuredServiceIds : serviceIds;

  return (
    <section className="bg-ink py-20 lg:py-24">
      <Container>
        {withHeading ? (
          <SectionHeading
            title={dict.services.heading}
            action={{
              label: dict.common.allServices,
              href: path(locale, "services"),
            }}
          />
        ) : null}

        {/* Anasayfada 4 kart tek sıra, hizmetler sayfasında 6 kart iki sıra. */}
        <div
          className={`mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 ${
            variant === "featured" ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {ids.map((id, index) => {
            const meta = serviceMeta[id];
            const content = dict.services.items[id];

            return (
              <Reveal key={id} delay={index * 60}>
                <ServiceCard
                  title={content.title}
                  excerpt={content.excerpt}
                  icon={meta.icon}
                  image={meta.image}
                  imageAlt={content.title}
                  href={path(locale, "services", meta.slug[locale])}
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
