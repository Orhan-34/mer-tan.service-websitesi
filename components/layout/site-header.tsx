"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { MobileNavDrawer } from "@/components/layout/mobile-nav-drawer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { mainNav, serviceNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Anasayfada hero üzerine biner ve scroll ile katılaşır; iç sayfalarda opak.
  const variant = pathname === path(locale, "home") ? "overlay" : "solid";

  React.useEffect(() => {
    if (variant !== "overlay") return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const solid = variant === "solid" || scrolled;
  const nav = mainNav(locale, dict);
  const services = serviceNav(locale, dict);
  const servicesHref = path(locale, "services");

  const isActive = (href: string) =>
    href === path(locale, "home") ? pathname === href : pathname.startsWith(href);

  return (
    <header
      role="banner"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-[250ms] ease-out",
        solid
          ? "border-b border-line-dark bg-ink/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo locale={locale} dict={dict} />

        {/* ── Desktop navigasyon ─────────────────────────────── */}
        <NavigationMenu.Root
          className="relative hidden lg:flex"
          delayDuration={100}
        >
          <NavigationMenu.List
            className="flex items-center gap-7"
            aria-label={dict.nav.mainLabel}
          >
            {nav.map((item) =>
              item.key === "services" ? (
                <NavigationMenu.Item key={item.key}>
                  <NavigationMenu.Trigger
                    className={cn(
                      navLinkClasses,
                      isActive(item.href) && "text-white after:scale-x-100",
                      "gap-1",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </NavigationMenu.Trigger>

                  <NavigationMenu.Content className="absolute left-0 top-full mt-2 w-[640px] rounded-lg border border-line-dark bg-ink-raised p-4 shadow-none">
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => (
                        <NavigationMenu.Link asChild key={service.id}>
                          <Link
                            href={service.href}
                            className="flex items-start gap-3 rounded-sm p-3 transition-colors hover:bg-white/5"
                          >
                            <IconCircle icon={service.icon} size={28} />
                            <span className="min-w-0">
                              <span className="block text-[13px] font-semibold text-white">
                                {service.title}
                              </span>
                              <span className="mt-1 block text-[12px] leading-snug text-fg-dark-subtle">
                                {service.excerpt}
                              </span>
                            </span>
                          </Link>
                        </NavigationMenu.Link>
                      ))}
                    </div>

                    <NavigationMenu.Link asChild>
                      <Link
                        href={servicesHref}
                        className="mt-3 block text-center text-[12px] text-fg-dark-muted transition-colors hover:text-white"
                      >
                        {dict.common.allServices}
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ) : (
                <NavigationMenu.Item key={item.key}>
                  <NavigationMenu.Link asChild active={isActive(item.href)}>
                    <Link
                      href={item.href}
                      className={cn(
                        navLinkClasses,
                        isActive(item.href) && "text-white after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ),
            )}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* ── Sağ blok ───────────────────────────────────────── */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher
            locale={locale}
            label={dict.common.languageLabel}
            className="hidden sm:flex"
          />

          {/* Randevu CTA'sı yerine doğrudan arama — tek tıkla dönüşüm. */}
          <Button asChild variant="primary" size="sm" className="hidden sm:inline-flex">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              aria-label={`${dict.common.callNow}: ${siteConfig.contact.phoneDisplay}`}
            >
              <Phone className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label={dict.common.openMenu}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav"
            className="grid size-11 place-items-center rounded-sm text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </Container>

      <MobileNavDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        locale={locale}
        dict={dict}
      />
    </header>
  );
}

const navLinkClasses = cn(
  "group relative inline-flex items-center py-2 text-[13px] font-medium text-fg-dark-muted transition-colors hover:text-white",
  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white",
  "after:transition-transform after:duration-[220ms] after:ease-out hover:after:scale-x-100",
);
