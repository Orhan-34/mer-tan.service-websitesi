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
  name: "Koluman İstanbul",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kolumanistanbul.com.tr",

  contact: {
    phone: "+902121234567",
    phoneDisplay: "0212 123 45 67",
    whatsapp: "+905321234567",
    whatsappDisplay: "0532 123 45 67",
    email: "info@kolumanistanbul.com.tr",
  },

  address: {
    street: "Huzur Oto Mah. Atatürk Bulvarı No: 123",
    district: "Başakşehir",
    city: "İstanbul",
    postalCode: "34000",
    country: "TR",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=41.0,28.8",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.0,28.8",
    geo: { lat: 41.0, lng: 28.8 },
  },

  /** Schema.org `openingHoursSpecification` için makine okunur saatler. */
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "18:30" },
    { days: ["Saturday"], opens: "09:00", closes: "16:00" },
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
