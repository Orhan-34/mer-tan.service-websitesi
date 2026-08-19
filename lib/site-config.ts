/**
 * Tek doğruluk kaynağı.
 *
 * Telefon, adres, e-posta hiçbir bileşende hard-coded yazılmaz — hepsi buradan
 * okunur. Bu, yerel SEO için gereken NAP (Name-Address-Phone) tutarlılığının
 * da şartıdır.
 *
 * ⚠️ Köşeli parantezli / örnek değerler yayına almadan önce Koluman'ın gerçek
 * verisiyle değiştirilmelidir.
 */
export const siteConfig = {
  name: "Mer-tan Services",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kolumanistanbul.com.tr",

  contact: {
    phone: "+905308173437",
    phoneDisplay: "0530 817 34 37",
    /** WhatsApp hattı telefonla aynı numara. */
    whatsapp: "+905308173437",
    whatsappDisplay: "0530 817 34 37",
    email: "mertan.service@gmail.com",
  },

  address: {
    street: "Muallimköy Mah. Güney Yanyol Cad. No: 366/A",
    district: "Gebze",
    city: "Kocaeli",
    postalCode: "41400",
    country: "TR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=40.8034961%2C29.4814614",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=40.8034961%2C29.4814614",
    /** API anahtarı gerektirmeyen embed; `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` yoksa kullanılır. */
    mapEmbedUrl:
      "https://www.google.com/maps?q=40.8034961,29.4814614&z=17&output=embed",
    geo: { lat: 40.8034961, lng: 29.4814614 },
  },

  /**
   * Schema.org `openingHoursSpecification` için makine okunur saatler.
   * Pazartesi–Cumartesi 24 saat açık; Pazar listede yok, yani kapalı.
   */
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },

  /** Google işletme profili — yorum bölümünden link verilir. */
  googleBusinessUrl: "https://www.google.com/maps",
} as const;

export const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`;
