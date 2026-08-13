import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { notFound } from "next/navigation";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CookieConsent } from "@/components/shared/cookie-consent";
import { JsonLd } from "@/components/shared/json-ld";
import { htmlLang, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { autoRepairSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-newsreader",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.home.title,
      template: `%s | ${dict.brand.name}`,
    },
    description: dict.meta.home.description,
    applicationName: dict.brand.name,
    formatDetection: { telephone: true },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html
      lang={htmlLang[locale]}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${newsreader.variable}`}
    >
      <body className="pb-16 lg:pb-0">
        <a
          href="#main"
          className="sr-only rounded-sm bg-white px-4 py-2 text-[13px] font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
        >
          {dict.common.skipToContent}
        </a>

        <SiteHeader locale={locale} dict={dict} />

        {/* Header sabit konumludur. Anasayfada hero onun altına girer; iç
            sayfalar üstten boşluğu `PageHeader` bileşeninden alır. */}
        <main id="main">{children}</main>

        <SiteFooter locale={locale} dict={dict} />
        <MobileActionBar locale={locale} dict={dict} />
        <CookieConsent locale={locale} dict={dict} />

        <JsonLd data={autoRepairSchema(locale, dict)} />
      </body>
    </html>
  );
}
