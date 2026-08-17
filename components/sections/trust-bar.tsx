import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import { trustIcons, trustItemIds } from "@/lib/data/home";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-line-dark bg-ink-raised py-5">
      <Container>
        {/* Dar ekranda yatay kaydırma şeridiydi: scrollbar gizli olduğu için
            kaydırılabildiğine dair ipucu yoktu ve son madde ekran kenarında
            kelime ortasından kesiliyordu. Her genişlikte sığan ızgara.

            Sütun sayısı madde sayısını tam bölmeli: 4 madde 3'lü/5'li ızgarada
            son satırda tek başına kalıp hizayı bozuyordu. items-center ise
            satır yüksekliği iki satıra sarmalayan metne göre belirlendiğinden
            tek satırlık maddelerin ikonunu metniyle ve satırdaki diğer
            ikonlarla aynı hizaya getirir. */}
        <ul
          aria-label={dict.trust.label}
          className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4"
        >
          {trustItemIds.map((id) => (
            <li key={id} className="flex items-center gap-3">
              <IconCircle icon={trustIcons[id]} size={28} />
              <span className="min-w-0 text-[11.5px] font-medium leading-[1.35] text-fg-dark-muted">
                {dict.trust.items[id]}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
