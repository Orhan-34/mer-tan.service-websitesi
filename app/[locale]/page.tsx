import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppointmentForm } from "@/components/sections/appointment-form";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { HeroSlider } from "@/components/sections/hero-slider";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StatsBand } from "@/components/sections/stats-band";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyUs } from "@/components/sections/why-us";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqIds } from "@/lib/data/home";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

/**
 * Anasayfadaki randevu formu (`id="randevu"`) geçici olarak pasif.
 *
 * Bileşen ve tüm form akışı (server action, doğrulama, e-posta) yerinde duruyor;
 * yalnızca anasayfada render edilmiyor. Kapalıyken "Neden biz" kartı tek başına
 * dar kolonda gösterilir. Yeniden yayına almak için bu bayrağı `true` yapmak
 * yeterli. `/randevu` ve `/iletisim` sayfalarındaki formlar bundan etkilenmez.
 */
const HOME_APPOINTMENT_FORM_ENABLED: boolean = false;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: "home",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const faqItems = faqIds.map((id) => dict.faq.items[id]);

  return (
    <>
      {/* 1–5 · koyu blok: marka kurulumu */}
      <HeroSlider locale={locale} dict={dict} />
      <TrustBar dict={dict} />
      <ServicesGrid locale={locale} dict={dict} />
      <StatsBand dict={dict} locale={locale} />

      {/* 6–9 · açık blok: iş yapma alanı */}
      <section className="bg-paper py-20 lg:py-28">
        <Container size={HOME_APPOINTMENT_FORM_ENABLED ? "shell" : "narrow"}>
          <div
            className={cn(
              "grid grid-cols-1 items-start gap-6 lg:gap-8",
              HOME_APPOINTMENT_FORM_ENABLED &&
                "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
            )}
          >
            <WhyUs locale={locale} dict={dict} />
            {HOME_APPOINTMENT_FORM_ENABLED ? (
              <AppointmentForm locale={locale} dict={dict} />
            ) : null}
          </div>
        </Container>
      </section>

      <ProcessTimeline dict={dict} />
      <TestimonialSlider dict={dict} />

      <section className="bg-paper py-16 lg:py-20">
        <Container size="narrow">
          <SectionHeading
            title={dict.faq.title}
            description={dict.faq.description}
            tone="light"
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion dict={dict} />
          </div>
        </Container>
      </section>

      {/* 10–11 · koyu kapanış */}
      <ClosingCta locale={locale} dict={dict} />

      <JsonLd data={faqPageSchema(faqItems)} />
    </>
  );
}
