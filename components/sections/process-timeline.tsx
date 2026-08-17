import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processStepIds } from "@/lib/data/home";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

export function ProcessTimeline({
  dict,
  variant = "full",
}: {
  dict: Dictionary;
  /**
   * `full`: kendi bölümü, desktop'ta yatay 4 sütun.
   * `card`: kart içinde dikey liste — anasayfada "Neden Biz" kartının yanında
   * yarım genişlikte durabilmesi için.
   */
  variant?: "full" | "card";
}) {
  if (variant === "card") {
    return (
      <div className="rounded-md bg-paper-card p-7 shadow-[var(--shadow-card)] lg:p-9">
        <p className="text-eyebrow mb-3 text-fg-light-subtle">
          {dict.process.eyebrow}
        </p>
        <h2 className="text-h3 text-fg-light">{dict.process.title}</h2>

        <ol className="mt-7">
          {processStepIds.map((id, index) => {
            const step = dict.process.steps[id];
            const isLast = index === processStepIds.length - 1;

            return (
              <li key={id} className="flex gap-4">
                {/* Numara sütunu; dikey çizgi adımları birbirine bağlar. */}
                <div className="flex w-9 shrink-0 flex-col items-center">
                  <span className="text-[28px] leading-none text-fg-light-subtle/50 [font-family:var(--font-serif)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {!isLast ? (
                    <span
                      aria-hidden="true"
                      className="mt-2 w-px flex-1 bg-line-light"
                    />
                  ) : null}
                </div>

                <Reveal
                  delay={index * 80}
                  className={cn("min-w-0", !isLast && "pb-6")}
                >
                  <h3 className="text-h4 text-fg-light">{step.title}</h3>
                  <p className="text-body-sm mt-1.5 text-fg-light-muted">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

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
