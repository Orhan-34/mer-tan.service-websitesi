"use client";

import { useParams } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams<{ locale: string }>();
  const locale = isLocale(params?.locale ?? "") ? (params.locale as "tr" | "en") : defaultLocale;
  const dict = getDictionary(locale);

  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-ink pb-24 pt-[calc(4rem+5rem)] lg:pb-32 lg:pt-[calc(72px+7rem)]">
      <Container size="narrow">
        <h1 className="text-h2 text-white">{dict.errorPage.title}</h1>
        <p className="text-body mt-4 max-w-[520px] text-fg-dark-muted">
          {dict.errorPage.text}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" size="lg" onClick={reset}>
            {dict.errorPage.retry}
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <a href={`tel:${siteConfig.contact.phone}`}>
              {dict.common.callNow} · {siteConfig.contact.phoneDisplay}
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
