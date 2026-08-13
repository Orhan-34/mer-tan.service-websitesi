"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { statIds, statValues } from "@/lib/data/home";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { htmlLang, type Locale } from "@/lib/i18n/config";

/**
 * Görünür olduğunda 0'dan hedefe sayan sayaç.
 *
 * Başlangıç değeri hedeftir; böylece sunucu HTML'i ve JavaScript kapalı
 * tarayıcılar "0" değil gerçek rakamı gösterir. Animasyon ilk kareyle
 * sıfırdan başlar. Hareket azaltmada hiç oynatılmaz.
 */
function useCountUp(target: number, decimals: number, active: boolean) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = React.useState(target);

  React.useEffect(() => {
    if (!active || reducedMotion) return;

    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Number((target * eased).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, decimals, active, reducedMotion]);

  return reducedMotion ? target : value;
}

function Stat({
  id,
  label,
  active,
  locale,
}: {
  id: (typeof statIds)[number];
  label: string;
  active: boolean;
  locale: Locale;
}) {
  const { value, prefix = "", suffix = "", decimals = 0 } = statValues[id];
  const current = useCountUp(value, decimals, active);

  const formatted = new Intl.NumberFormat(htmlLang[locale], {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(current);

  return (
    <div>
      <p className="text-h2 tabular-nums text-white [font-family:var(--font-serif)]">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-2 max-w-[160px] text-[12px] text-fg-dark-subtle">{label}</p>
    </div>
  );
}

export function StatsBand({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-t border-line-dark bg-ink py-16">
      <Container>
        <div ref={ref} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statIds.map((id) => (
            <Stat
              key={id}
              id={id}
              label={dict.stats.items[id]}
              active={active}
              locale={locale}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
