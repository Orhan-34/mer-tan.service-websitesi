import Link from "next/link";
import { locale as rootLocale } from "next/root-params";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";

/**
 * 404. `params` bu dosyaya gelmediği için dil, kök parametre üzerinden okunur
 * (`next/root-params` — kök layout `app/[locale]` altında olduğu için mümkün).
 */
export default async function NotFound() {
  const raw = await rootLocale();
  const locale = raw && isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="bg-ink pb-24 pt-[calc(4rem+5rem)] lg:pb-32 lg:pt-[calc(72px+7rem)]">
      <Container size="narrow">
        <p className="text-eyebrow text-fg-dark-subtle">404</p>
        <h1 className="text-h2 mt-4 text-white">{dict.notFound.title}</h1>
        <p className="text-body mt-4 max-w-[520px] text-fg-dark-muted">
          {dict.notFound.text}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="primary" size="lg">
            <Link href={path(locale, "home")}>{dict.notFound.cta}</Link>
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <Link href={path(locale, "services")}>{dict.nav.services}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
