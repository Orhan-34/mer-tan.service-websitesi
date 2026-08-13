import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processStepIds } from "@/lib/data/home";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ProcessTimeline({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line-light bg-paper py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.process.eyebrow}
          title={dict.process.title}
          align="center"
          tone="light"
        />

        <div className="relative mt-12">
          {/* Desktop'ta adımları birleştiren ince çizgi */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-line-light lg:block"
          />

          <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processStepIds.map((id, index) => {
              const step = dict.process.steps[id];
              return (
                <li key={id} className="bg-paper lg:pr-6">
                  <Reveal delay={index * 80}>
                    <p className="text-[40px] leading-none text-fg-light-subtle/50 [font-family:var(--font-serif)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-h4 mt-3 text-fg-light">{step.title}</h3>
                    <p className="text-body-sm mt-2 text-fg-light-muted">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
