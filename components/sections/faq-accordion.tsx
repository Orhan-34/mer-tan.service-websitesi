"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { faqIds } from "@/lib/data/home";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/**
 * SSS akordeonu. Buradaki metinler `FAQPage` JSON-LD ile birebir aynı
 * sözlükten okunur — Google için tutarlılık şarttır.
 */
export function FaqAccordion({ dict }: { dict: Dictionary }) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {faqIds.map((id) => {
        const item = dict.faq.items[id];
        return (
          <Accordion.Item
            key={id}
            value={id}
            className="border-b border-line-light"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-start justify-between gap-4 py-5 text-left text-[15px] font-medium text-fg-light">
                {item.question}
                <span className="relative mt-0.5 grid size-5 shrink-0 place-items-center text-fg-light-muted">
                  <Plus
                    className="absolute size-4 transition-opacity duration-200 group-data-[state=open]:opacity-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <Minus
                    className="absolute size-4 opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
              <p className="text-body pb-5 pr-8 text-fg-light-muted">
                {item.answer}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
