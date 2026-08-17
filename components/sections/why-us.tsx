import { Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";

export function WhyUs({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    // Yan kolondaki kartla aynı boya esnediğinde artan yükseklik butonun
    // altında boşluk bırakmasın diye CTA `mt-auto` ile alta yaslanır.
    <div className="flex h-full flex-col rounded-md bg-paper-card p-7 shadow-[var(--shadow-card)] lg:p-9">
      <h2 className="text-h3 text-fg-light">{dict.whyUs.title}</h2>

      <p className="text-body mt-4 text-fg-light-muted">{dict.whyUs.paragraph}</p>

      <ul className="mt-7 mb-8 space-y-3">
        {dict.whyUs.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check
              className="mt-[3px] size-[15px] shrink-0 text-fg-light"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="text-body-sm text-fg-light">{item}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant="outline-dark"
        size="lg"
        className="group mt-auto w-full"
      >
        <Link href={path(locale, "about")}>
          {dict.whyUs.cta}
          <ChevronRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </Link>
      </Button>
    </div>
  );
}
