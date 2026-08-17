import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { socialLinks } from "@/components/shared/social-icons";
import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.district} / ${siteConfig.address.city}`;
  const links = footerNav(locale, dict);

  return (
    <footer role="contentinfo" className="border-t border-line-dark bg-ink">
      <Container className="pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-14">
          {/* ── Kolon 1: iletişim ─────────────────────────── */}
          <div>
            <h2 className="text-h4 text-white">{dict.footer.contactTitle}</h2>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <IconCircle icon={MapPin} size={28} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.address}
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-white">{fullAddress}</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconCircle icon={Phone} size={28} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.phone}
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="mt-0.5 block text-[12.5px] text-white hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconCircle icon={Mail} size={28} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.email}
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-0.5 block text-[12.5px] text-white hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <IconCircle icon={Clock} size={28} />
                <div>
                  <p className="text-[11px] text-fg-dark-subtle">
                    {dict.common.workingHours}
                  </p>
                  <ul className="mt-0.5 space-y-0.5">
                    {dict.hours.map((row) => (
                      <li key={row.days} className="text-[12.5px] text-white">
                        {row.days}: {row.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <Link
              href={path(locale, "contact")}
              className="mt-6 inline-block overflow-hidden rounded-sm border border-line-dark"
            >
              <span className="sr-only">{dict.footer.mapPreview}</span>
              <Image
                src="/images/map-static.svg"
                alt=""
                width={200}
                height={112}
                className="h-auto w-[200px]"
              />
            </Link>
          </div>

          {/* ── Kolon 2: marka ────────────────────────────── */}
          <div>
            <Logo locale={locale} dict={dict} />
            <p className="mt-5 max-w-[280px] text-[12.5px] leading-relaxed text-fg-dark-muted">
              {dict.brand.blurb}
            </p>

            <ul
              className="mt-6 flex items-center gap-1"
              aria-label={dict.footer.socialLabel}
            >
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
          </div>

          {/* ── Kolon 3: hızlı linkler ────────────────────── */}
          <div>
            <h2 className="text-h4 text-white">{dict.footer.quickLinksTitle}</h2>
            <nav aria-label={dict.nav.footerLabel} className="mt-6">
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={`${link.key}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-fg-dark-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* ── Alt bar ─────────────────────────────────────── */}
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line-dark py-5 text-[11px] text-fg-dark-subtle sm:flex-row">
          <p>
            © {new Date().getFullYear()} {dict.brand.name}. {dict.footer.rights}
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <li>
              <Link href={path(locale, "privacy")} className="hover:text-white">
                {dict.footer.legal.privacy}
              </Link>
            </li>
            <li>
              <Link href={path(locale, "kvkk")} className="hover:text-white">
                {dict.footer.legal.kvkk}
              </Link>
            </li>
            <li>
              <Link href={path(locale, "cookies")} className="hover:text-white">
                {dict.footer.legal.cookies}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
