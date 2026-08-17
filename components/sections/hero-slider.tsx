"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroSlideImages } from "@/lib/data/home";
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
      {/* 1 — Görsel şeridi. Slide'lar metin içermez; başlık ve butonlar
             aşağıdaki katmandadır, böylece slide değişse de yerinde kalır.
             Dar ekranda kutu görselin oranını alır (16:9) — kırpma sıfır.
             `lg`'den itibaren yükseklik sabitlenir ve metin üzerine biner. */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {heroSlideImages.map((src, index) => (
              <div
                key={src}
                role="group"
                aria-roledescription="slide"
                aria-label={`${dict.hero.slideLabel} ${index + 1} / ${heroSlideImages.length}`}
                aria-hidden={index !== selected}
                className="relative aspect-[16/9] min-w-0 flex-[0_0_100%] lg:aspect-auto lg:h-[680px]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  // `priority` Next.js 16'da kullanımdan kaldırıldı. İlk slide
                  // LCP olduğu için erken yüklenir; `preload` ile birlikte
                  // kullanılamayacağı için `loading`/`fetchPriority` seçildi.
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="100vw"
                  // Kaynak dosya zaten sıkıştırılmış WebP. Varsayılan 75 ile
                  // yeniden kodlamak üst üste ikinci kayıp demek olurdu.
                  quality={90}
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2 — Header şeridi. Sabit header her genişlikte görselin üstüne
               biniyor; açık gökyüzünde logo ve navigasyon okunmaz oluyordu. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent lg:h-32 lg:from-black/55"
        />

        {/* 3 — Okunabilirlik gradyanı, yalnızca metnin görsele bindiği
               `lg` ve üstünde. Dar ekranda metin görselin altında durduğu
               için gradyana gerek yoktur ve araçları gereksiz karartır.
               (Not: değişkeni arka plana verirken baştaki `image:` ipucu
               şarttır — onsuz `background-color` üretilir, gradyan geçersiz
               renk sayılır ve katman hiç çizilmez.) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[image:var(--overlay-hero)]"
        />

      </div>

      {/* 4 — Kontroller. Dar ekranda görselin altında koyu zeminde durur;
             fotoğrafın üzerindeyken pasif noktalar açık asfaltta kayboluyor
             ve araçların üstüne biniyordu. `lg`'de görsele geri döner. */}
      <Container className="relative z-10 flex items-end justify-between pt-4 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-8 lg:pt-0">
          <div
            role="tablist"
            aria-label={dict.hero.sliderLabel}
            className="pointer-events-auto flex items-center gap-2"
          >
            {heroSlideImages.map((src, index) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={index === selected}
                aria-label={`${dict.hero.slideLabel} ${index + 1}`}
                onClick={() => embla?.scrollTo(index)}
                className="grid h-11 w-7 place-items-center sm:w-11"
              >
                <span
                  className={cn(
                    "block h-[3px] w-5 rounded-full transition-colors duration-300 sm:w-8",
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

      {/* 5 — İçerik. Dar ekranda görselin altında normal akışta; `lg`'den
             itibaren görselin üzerine binen mutlak katman. Üstteki katman
             `pointer-events-none` olmazsa kaydırma hareketini yutar. */}
      <div className="relative pb-12 pt-6 lg:pointer-events-none lg:absolute lg:inset-0 lg:flex lg:items-center lg:py-0 lg:pt-[72px]">
        <Container>
          <div className="max-w-[560px]">
            <h1 className="text-display text-white">{dict.hero.title}</h1>

            {/* Tek CTA. Dar ekranda satırın tamamını kaplar; `sm`'den itibaren
                daha önce iki butonun birlikte kapladığı genişliğe sabitlenir,
                böylece hero'nun yatay dengesi bozulmaz.
                `pointer-events-auto` sarmalayıcıda olursa tüm şerit kaydırmayı
                yutar, o yüzden butonun üzerinde. */}
            <div className="mt-8 flex">
              <Button
                asChild
                variant="outline-light"
                size="lg"
                className="pointer-events-auto w-full sm:w-[420px]"
              >
                <Link href={path(locale, "services")}>{dict.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

    </section>
  );
}
