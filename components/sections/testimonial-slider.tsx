"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";

/**
 * ⚠️ GERÇEK YORUMLARLA DEĞİŞTİRİLECEK.
 * Uydurma müşteri yorumu hem etik hem yasal (TKHK) sorun yaratır. En temiz
 * çözüm Google Places API ile canlı çekmektir.
 */
export function TestimonialSlider({ dict }: { dict: Dictionary }) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  return (
    <section className="bg-paper-card py-16 lg:py-20">
      <Container>
        <SectionHeading
          title={dict.testimonials.title}
          tone="light"
          action={{
            label: dict.testimonials.action,
            href: siteConfig.googleBusinessUrl,
          }}
        />

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <ul className="-ml-4 flex">
            {dict.testimonials.items.map((item) => (
              <li
                key={item.name}
                className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <figure className="flex h-full flex-col rounded-md border border-line-light p-6">
                  <div
                    className="flex gap-0.5"
                    role="img"
                    aria-label={dict.testimonials.ratingLabel}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-3.5 fill-fg-light text-fg-light"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="text-body-sm mt-4 flex-1 leading-relaxed text-fg-light">
                    {item.quote}
                  </blockquote>

                  <figcaption className="mt-5">
                    <span className="block text-[13px] font-semibold text-fg-light">
                      {item.name}
                    </span>
                    <span className="block text-[11.5px] text-fg-light-subtle">
                      {item.vehicle}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-[12px] text-fg-light-subtle">
            {dict.testimonials.footnote}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => embla?.scrollPrev()}
              aria-label={dict.hero.prev}
              className="grid size-11 place-items-center rounded-sm border border-line-light text-fg-light transition-colors hover:bg-paper"
            >
              <ChevronLeft className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => embla?.scrollNext()}
              aria-label={dict.hero.next}
              className="grid size-11 place-items-center rounded-sm border border-line-light text-fg-light transition-colors hover:bg-paper"
            >
              <ChevronRight className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
