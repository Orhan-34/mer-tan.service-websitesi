"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";

const COOKIE_NAME = "cookie-consent";

/**
 * Çerez, React dışında yaşayan bir durumdur; `useSyncExternalStore` ile
 * okunur. Böylece efekt içinde setState çağırmak ve fazladan bir render
 * turu gerekmez.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function readConsent() {
  return (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_NAME}=`))
      ?.split("=")[1] ?? ""
  );
}

/** Sunucuda çerez bilinmez; band render edilmez, hidrasyondan sonra belirir. */
const SERVER_SNAPSHOT = "server";

/**
 * Çerez bandı. "Kabul Et" ve "Reddet" görsel olarak eşit ağırlıktadır
 * (dark pattern değil). Onay verilene kadar hiçbir analitik betiği yüklenmez —
 * analitik entegrasyonu eklendiğinde `granted` kontrolüne bağlanmalıdır.
 */
export function CookieConsent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const consent = React.useSyncExternalStore(
    subscribe,
    readConsent,
    () => SERVER_SNAPSHOT,
  );

  const decide = (value: "granted" | "denied") => {
    document.cookie = `${COOKIE_NAME}=${value};path=/;max-age=15552000;samesite=lax`;
    listeners.forEach((notify) => notify());
  };

  if (consent !== "") return null;

  return (
    <div
      role="dialog"
      aria-label={dict.cookieBanner.title}
      className="fixed inset-x-0 bottom-16 z-40 border-t border-line-dark bg-ink-raised/98 backdrop-blur lg:bottom-0"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p className="text-[12.5px] leading-relaxed text-fg-dark-muted">
          {dict.cookieBanner.text}{" "}
          <Link
            href={path(locale, "cookies")}
            className="text-white underline underline-offset-2"
          >
            {dict.cookieBanner.link}
          </Link>
        </p>

        <div className="flex shrink-0 gap-2">
          <Button variant="outline-light" size="sm" onClick={() => decide("denied")}>
            {dict.cookieBanner.reject}
          </Button>
          <Button variant="primary" size="sm" onClick={() => decide("granted")}>
            {dict.cookieBanner.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
