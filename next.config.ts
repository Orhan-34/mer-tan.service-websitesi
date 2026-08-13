import type { NextConfig } from "next";

/**
 * İngilizce URL'ler için yeniden yazma (rewrite) kuralları.
 *
 * Dosya sistemindeki klasör adları Türkçedir (`app/[locale]/hizmetler/...`).
 * İngilizce ziyaretçiye `/en/services/...` gibi okunabilir URL göstermek için
 * bu adresler sessizce Türkçe klasöre yönlendirilir. Tarayıcıdaki adres değişmez.
 *
 * Yeni bir sayfa eklerken `lib/i18n/routes.ts` içindeki segment eşlemesini
 * güncellemeyi ve buraya karşılığını eklemeyi unutmayın.
 */
const englishPathRewrites = [
  ["services", "hizmetler"],
  ["appointment", "randevu"],
  ["campaigns", "kampanyalar"],
  ["about", "hakkimizda"],
  ["contact", "iletisim"],
  ["faq", "sss"],
  ["privacy-policy", "gizlilik-politikasi"],
  ["data-protection-notice", "kvkk-aydinlatma-metni"],
  ["cookie-policy", "cerez-politikasi"],
] as const;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 31536000,
    // Yer tutucu görseller SVG olduğu için gereklidir. Gerçek fotoğraflar
    // (.webp/.avif) eklendiğinde bu üç satır kaldırılabilir.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return englishPathRewrites.flatMap(([en, tr]) => [
      { source: `/en/${en}`, destination: `/en/${tr}` },
      { source: `/en/${en}/:slug`, destination: `/en/${tr}/:slug` },
    ]);
  },
};

export default nextConfig;
