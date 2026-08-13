"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Kullanıcının hareket azaltma tercihi.
 *
 * `useState` + `useEffect` yerine `useSyncExternalStore` kullanılır: tercih
 * React dışında bir kaynakta yaşıyor ve efekt içinde setState çağırmak
 * gereksiz bir ikinci render turu yaratır.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false, // sunucuda tercih bilinmez; animasyonlu varsayılır
  );
}
