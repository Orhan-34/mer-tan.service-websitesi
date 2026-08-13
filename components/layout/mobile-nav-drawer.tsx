"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { socialLinks } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { mainNav, serviceNav } from "@/lib/nav";
import { siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Tam ekran mobil menü. Radix Dialog focus trap, Esc ile kapanma ve body
 * scroll kilidini hazır sağlar.
 */
export function MobileNavDrawer({
  open,
  onOpenChange,
  locale,
  dict,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale: Locale;
  dict: Dictionary;
}) {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const nav = mainNav(locale, dict);
  const services = serviceNav(locale, dict);
  const close = () => onOpenChange(false);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-sunken/80 lg:hidden" />
        <Dialog.Content
          id="mobile-nav"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink lg:hidden"
          aria-describedby={undefined}
        >
          <div className="flex h-16 items-center justify-between border-b border-line-dark px-5">
            <Dialog.Title className="text-[15px] font-semibold text-white">
              {dict.brand.name}
            </Dialog.Title>
            <Dialog.Close
              aria-label={dict.common.closeMenu}
              className="grid size-11 place-items-center rounded-sm text-white transition-colors hover:bg-white/10"
            >
              <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav aria-label={dict.nav.mainLabel} className="flex-1 px-5 py-4">
            <ul className="flex flex-col">
              {nav.map((item) =>
                item.key === "services" ? (
                  <li key={item.key} className="border-b border-line-dark">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((value) => !value)}
                      aria-expanded={servicesOpen}
                      aria-controls="mobile-services"
                      className="flex w-full items-center justify-between py-4 text-left text-[15px] text-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </button>

                    {servicesOpen ? (
                      <ul id="mobile-services" className="pb-3">
                        {services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href}
                              onClick={close}
                              className="block py-2.5 pl-1 text-[13px] text-fg-dark-muted"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={path(locale, "services")}
                            onClick={close}
                            className="block py-2.5 pl-1 text-[13px] font-medium text-white"
                          >
                            {dict.common.allServices}
                          </Link>
                        </li>
                      </ul>
                    ) : null}
                  </li>
                ) : (
                  <li key={item.key} className="border-b border-line-dark">
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-4 text-[15px] text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li className="border-b border-line-dark">
                <Link
                  href={path(locale, "about")}
                  onClick={close}
                  className="block py-4 text-[15px] text-white"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li className="border-b border-line-dark">
                <Link
                  href={path(locale, "faq")}
                  onClick={close}
                  className="block py-4 text-[15px] text-white"
                >
                  {dict.nav.faq}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="space-y-4 border-t border-line-dark px-5 py-5">
            <Button asChild variant="primary" size="lg" className="w-full">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {dict.common.callNow}
              </a>
            </Button>

            <Button asChild variant="outline-light" size="lg" className="w-full">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {dict.common.whatsapp}
              </a>
            </Button>

            <div className="flex items-center justify-between pt-1">
              <ul className="flex items-center gap-1" aria-label={dict.footer.socialLabel}>
                {socialLinks.map(({ key, Icon, href, label }) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid size-11 place-items-center text-fg-dark-subtle transition-colors hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>

              <LanguageSwitcher locale={locale} label={dict.common.languageLabel} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
