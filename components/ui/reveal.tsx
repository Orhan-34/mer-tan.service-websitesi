"use client";

import * as React from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  /** Kademeli giriş için gecikme (ms). */
  delay?: number;
};

/**
 * IntersectionObserver ile tek seferlik scroll-in animasyonu.
 * `prefers-reduced-motion` açıksa içerik doğrudan görünür hâlde başlar.
 */
export function Reveal({ className, delay = 0, children, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [intersected, setIntersected] = React.useState(false);
  const reducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visible = reducedMotion || intersected;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[600ms] ease-[var(--ease-expo)] motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
      style={{ transitionDelay: visible && delay ? `${delay}ms` : undefined }}
      {...props}
    >
      {children}
    </div>
  );
}
