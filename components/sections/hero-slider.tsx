"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroSlideIds, heroSlideImages } from "@/lib/data/home";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";

export function HeroSlider({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [selected, setSelected] = React.useState(0);

  // Hareket azaltma tercihinde otomatik ilerleme tamamen kapatılır (WCAG 2.2.2).
  const plugins = React.useMemo(
    () =>
      reducedMotion
        ? []
        : [Autoplay({ delay: 6500, stopOnInteraction: true, stopOnMouseEnter: true })],
    [reducedMotion],
  );

  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, duration: 40, align: "start" },
    plugins,
  );

  React.useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!embla) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      embla.scrollPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      embla.scrollNext();
    }
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label={dict.hero.sliderLabel}
      onKeyDown={onKeyDown}
      className="relative bg-ink"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlideIds.map((id, index) => {
            const slide = dict.hero.slides[id];
            const active = index === selected;

            return (
              <div
                key={id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${dict.hero.slideLabel} ${index + 1} / ${heroSlideIds.length}`}
                aria-hidden={!active}
                className="relative min-w-0 flex-[0_0_100%]"
              >
                {/* 1 — Görsel katmanı */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={heroSlideImages[id]}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                    sizes="100vw"
                    className={cn(
                      "object-cover object-[70%_center] md:object-[65%_center]",
                      active && !reducedMotion && "animate-ken-burns",
                    )}
                  />
                </div>

                {/* 2 — Okunabilirlik gradyanı */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[var(--overlay-hero-mobile)] lg:bg-[var(--overlay-hero)]"
                />

                {/* 3 — İçerik */}
                <Container className="relative flex min-h-[520px] items-end pb-28 pt-[calc(4rem+3rem)] md:min-h-[560px] lg:min-h-[680px] lg:items-center lg:pb-24 lg:pt-[72px]">
                  <div className="max-w-[560px]">
                    {/* Sayfada tek h1 bulunmalı; diğer slide başlıkları görsel
                        olarak aynı ama semantik olarak paragraftır. */}
                    {index === 0 ? (
                      <h1 className="text-display text-white">{slide.title}</h1>
                    ) : (
                      <p className="text-display text-white [font-family:var(--font-serif)] [text-wrap:balance]">
                        {slide.title}
                      </p>
                    )}

                    <p className="text-lead mt-5 max-w-[460px] text-fg-dark-muted">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Button asChild variant="primary" size="lg" tabIndex={active ? undefined : -1}>
                        <Link href={path(locale, "appointment")}>
                          {dict.hero.ctaPrimary}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline-light"
                        size="lg"
                        tabIndex={active ? undefined : -1}
                      >
                        <Link href={path(locale, "services")}>
                          {dict.hero.ctaSecondary}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kontroller */}
      <Container className="pointer-events-none absolute inset-x-0 bottom-8 flex items-end justify-between">
        <div
          role="tablist"
          aria-label={dict.hero.sliderLabel}
          className="pointer-events-auto flex items-center gap-2"
        >
          {heroSlideIds.map((id, index) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={index === selected}
              aria-label={`${dict.hero.slideLabel} ${index + 1}`}
              onClick={() => embla?.scrollTo(index)}
              className="grid h-11 w-11 place-items-center"
            >
              <span
                className={cn(
                  "block h-[3px] w-8 rounded-full transition-colors duration-300",
                  index === selected ? "bg-white" : "bg-white/25",
                )}
              />
            </button>
          ))}
        </div>

        <div className="pointer-events-auto hidden gap-2 lg:flex">
          <button
            type="button"
            onClick={() => embla?.scrollPrev()}
            aria-label={dict.hero.prev}
            className="grid size-11 place-items-center rounded-sm border border-line-dark-strong text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => embla?.scrollNext()}
            aria-label={dict.hero.next}
            className="grid size-11 place-items-center rounded-sm border border-line-dark-strong text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}
