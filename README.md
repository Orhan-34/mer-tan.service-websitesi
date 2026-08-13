# Koluman İstanbul — Mercedes-Benz Yetkili Servisi

`KOLUMAN-ISTANBUL-WEB-PLAN.md` içindeki tasarım ve içerik spesifikasyonunun
Next.js uygulaması. **Türkçe ve İngilizce** tam dil desteği vardır.

## Çalıştırma

```bash
npm install
cp .env.example .env.local   # değerleri doldurun (opsiyonel, boş da çalışır)
npm run dev                  # http://localhost:3000
```

`/` adresi ziyaretçinin tarayıcı diline göre `/tr` veya `/en`'e yönlendirilir.

```bash
npm run build && npm start   # üretim
npx tsc --noEmit             # tip kontrolü
npx eslint .                 # lint
```

## Kullanılan sürümler

| Paket | Sürüm | Not |
|---|---|---|
| Next.js | 16.3 | Planda 15 yazıyordu; kurulu sürüm 16. `middleware` yerine **`proxy.ts`**, `params` **async**, Turbopack varsayılan. |
| React | 19.2 | `useActionState` ile form akışı |
| Tailwind CSS | v4 | `@theme` blokları `app/globals.css` içinde |
| zod | 3 | Randevu doğrulaması |
| Radix UI | – | Accordion, NavigationMenu, Dialog, Slot |
| Embla Carousel | 8 | Hero ve yorum slider'ları |

## Dil desteği (i18n)

Kütüphane kullanılmadı; ~150 satırlık kendi katmanımız var.

| Dosya | Görevi |
|---|---|
| `lib/i18n/config.ts` | Dil listesi, varsayılan dil, `<html lang>` etiketleri |
| `lib/i18n/routes.ts` | Rota anahtarı → dile göre URL segmenti, `path()` yardımcısı |
| `lib/i18n/dictionaries/tr.ts` | **Tüm site metni** + `Dictionary` tipinin şeması |
| `lib/i18n/dictionaries/en.ts` | İngilizce karşılığı — tipe uymak zorunda |
| `proxy.ts` | Dil öneki olmayan istekleri çerez/`Accept-Language`'e göre yönlendirir |

**Yeni metin eklerken:** önce `tr.ts`'e ekleyin. `en.ts` eksik kalırsa `npx tsc --noEmit` hata verir — çeviri unutulamaz.

### URL yapısı

Klasör adları Türkçedir; İngilizce adresler `next.config.ts` içindeki rewrite
kurallarıyla aynı sayfaya bağlanır. Ziyaretçi hep okunabilir URL görür:

| TR | EN |
|---|---|
| `/tr/hizmetler` | `/en/services` |
| `/tr/hizmetler/xentry-diagnostik` | `/en/services/xentry-diagnostics` |
| `/tr/randevu` | `/en/appointment` |
| `/tr/sss` | `/en/faq` |

**Yeni sayfa eklerken üç yeri güncelleyin:**
1. `app/[locale]/<türkçe-klasör>/page.tsx`
2. `lib/i18n/routes.ts` → `routeSegments`
3. `next.config.ts` → `englishPathRewrites`

Sitemap ve `hreflang` etiketleri bu tablodan otomatik üretilir.

## Klasör yapısı

```
app/
  [locale]/            layout (kök), anasayfa, iç sayfalar, 404, error, OG görseli
  actions/             randevu server action
  sitemap.ts robots.ts
components/
  layout/              header, mega menü, mobil drawer, footer, action bar, dil değiştirici
  sections/            hero, trust bar, hizmet grid, istatistik, form, süreç, yorum, SSS, kapanış
  cards/  ui/  shared/
lib/
  i18n/                dil katmanı ve sözlükler
  data/                dilden bağımsız veri (hizmet slug/ikon/görsel, sabitler)
  validations/         zod şemaları
  site-config.ts       NAP tek doğruluk kaynağı
  schema.ts seo.ts     JSON-LD ve metadata üreticileri
proxy.ts               dil yönlendirmesi (Next 16'da middleware'in yerini aldı)
```

## Randevu formu

- `<form action={serverAction}>` — **JavaScript kapalıyken de çalışır.**
- Doğrulama `lib/validations/appointment.ts` (zod); mesajlar dile göre.
  Sunucu tarafı doğrulama her zaman yeniden çalışır, istemciye güvenilmez.
- Korumalar: honeypot (`website` alanı) + IP başına 5 istek / 10 dk rate limit.
- `RESEND_API_KEY` **boşsa** e-posta gönderilmez, talep konsola yazılır —
  form akışı yine uçtan uca test edilebilir.

### Planda olup bilinçli değiştirilenler

| Plan | Uygulama | Neden |
|---|---|---|
| shadcn/ui + react-hook-form | Radix + native form + `useActionState` | JS kapalıyken çalışması ve ~120 KB JS bütçesi için |
| shadcn `Calendar` (react-day-picker) | `<input type="date">` + min/max | Mobilde daha iyi, sıfır JS. Geçmiş tarih, Pazar ve 60 gün sınırı sunucuda da doğrulanıyor |
| Rakamlar / yorumlar | Yer tutucu | Gerçek veri gerekiyor (aşağıya bakın) |

## ⚠️ Yayına almadan önce yapılacaklar

1. **`lib/site-config.ts`** — adres, telefon, WhatsApp, e-posta, koordinat,
   sosyal medya bağlantıları ve `mapsUrl` / `directionsUrl` gerçek verilerle
   değiştirilmeli. Hiçbir bileşende hard-coded iletişim bilgisi yok, tek nokta burası.
2. **İstatistikler** — `lib/data/home.ts` → `statValues`. Şu an örnek
   (20+ yıl, 12.000+ araç, %98, 4.8/5).
3. **Müşteri yorumları** — sözlüklerdeki `testimonials.items` uydurma.
   Sahte yorum TKHK açısından risklidir; Google Places API ile canlı çekmek en temizi.
4. **`[köşeli parantez]`li metinler** — sözlüklerde arayın (ör. ikame araç SSS'i).
5. **Görseller** — `public/images/` altındaki tüm dosyalar üretilmiş SVG yer
   tutucudur. Gerçek fotoğraflar için:
   - `.webp` dosyaları aynı klasörlere koyun
   - `lib/data/services.ts` ve `lib/data/home.ts` içindeki yolları güncelleyin
   - `next.config.ts` → `dangerouslyAllowSVG` ve yanındaki iki satırı **silin**
   - Görsel dili: düşük satürasyon, soğuk beyaz dengesi, yüksek kontrast,
     gri/siyah/gümüş araç (plan §2.4). Sıcak tonlu stok fotoğraf sistemi bozar.
6. **Marka kullanımı** — Mercedes-Benz yıldızı ve kelime markası tescillidir.
   Kullanım hakkı yetkili servis sözleşmesiyle doğrulanmalı; yetki yoksa
   `components/shared/mb-star.tsx` kaldırılmalı ve "Yetkili Servisi" ifadesi
   değiştirilmelidir (plan §15.3).
7. **Yasal metinler** — gizlilik / KVKK / çerez sayfaları taslaktır, bir hukuk
   danışmanı gözden geçirmelidir. `LAST_UPDATED` sabitlerini güncellemeyi unutmayın.
8. **Analytics** — henüz bağlı değil. Eklerken `components/shared/cookie-consent.tsx`
   içindeki `granted` kararına bağlayın; onay öncesi hiçbir betik yüklenmemeli.
9. **Rate limit** — `lib/rate-limit.ts` bellek içidir. Serverless / çok örnekli
   dağıtımda paylaşımlı bir sayaçla (Redis, Vercel KV) değiştirin.

## Erişilebilirlik ve performans notları

- Tüm animasyonlar `prefers-reduced-motion`'a saygılı; hero autoplay bu durumda kapalı.
- Hero yalnızca ilk slide `priority`; diğerleri lazy.
- Harita facade desenli — tıklanmadan Google'a istek gitmez.
- Dokunma hedefleri ≥ 44×44px; skip link, focus trap, `aria-*` bağlantıları mevcut.
- Koyu zeminde `box-shadow` kullanılmaz; katman ayrımı `border` ile yapılır (plan §3.4).
