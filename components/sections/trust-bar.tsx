import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import { trustIcons, trustItemIds } from "@/lib/data/home";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-line-dark bg-ink-raised py-5">
      <Container>
        <ul
          aria-label={dict.trust.label}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 lg:grid-cols-5"
        >
          {trustItemIds.map((id) => (
            <li
              key={id}
              className="flex min-w-[190px] snap-start items-start gap-3 sm:min-w-0"
            >
              <IconCircle icon={trustIcons[id]} size={28} />
              <span className="max-w-[140px] text-[11.5px] font-medium leading-[1.35] text-fg-dark-muted">
                {dict.trust.items[id]}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
