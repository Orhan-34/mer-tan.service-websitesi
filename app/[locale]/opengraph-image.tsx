import { ImageResponse } from "next/og";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const alt = "Koluman İstanbul";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Dinamik OG görseli: siyah zemin, serif başlık, çizgisel yıldız. */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: 72,
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="1.6">
            <circle cx="24" cy="24" r="22" />
            <path d="M24 24V2" />
            <path d="M24 24 5 35" />
            <path d="M24 24l19 11" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 600 }}>{dict.brand.name}</span>
            <span style={{ fontSize: 18, color: "#8E8E8E" }}>{dict.brand.tagline}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 60, lineHeight: 1.1, maxWidth: 900 }}>
            {dict.hero.slides.dealership.title}
          </span>
          <span style={{ fontSize: 26, color: "#C4C4C4", maxWidth: 820 }}>
            {dict.hero.slides.dealership.subtitle}
          </span>
        </div>

        <div style={{ display: "flex", height: 1, background: "rgba(255,255,255,0.14)" }} />
      </div>
    ),
    size,
  );
}
