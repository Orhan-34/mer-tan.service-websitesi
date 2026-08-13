# Koluman İstanbul — Mercedes-Benz Yetkili Servisi
## Web Sitesi Tasarım Analizi & Uygulama Planı

> **Bu doküman nedir?** Ekran görüntüsündeki 3 tasarım varyantının piksel seviyesinde analizi ve bunu çalışan bir Next.js sitesine dönüştürmek için gereken eksiksiz spesifikasyon. Doküman, doğrudan bir kodlama modeline (Sonnet-5) verilecek şekilde yazılmıştır: her bölüm tek başına uygulanabilir, ölçüler ve token adları kesindir, tahmine yer bırakmaz.

**Stack kararı:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui
**Hero kararı:** 3 varyantın tamamı → otomatik geçişli hero slider
**Doküman versiyonu:** 1.0 — 12 Ağustos 2026

---

## İÇİNDEKİLER

1. [Yönetici Özeti & Stratejik Çerçeve](#1-yönetici-özeti--stratejik-çerçeve)
2. [Görsel Analiz — Tasarımdan Çıkarılanlar](#2-görsel-analiz--tasarımdan-çıkarılanlar)
3. [Tasarım Sistemi (Design Tokens)](#3-tasarım-sistemi-design-tokens)
4. [Bilgi Mimarisi & Sayfa Haritası](#4-bilgi-mimarisi--sayfa-haritası)
5. [Bileşen Kütüphanesi](#5-bileşen-kütüphanesi)
6. [Bölüm Bölüm Uygulama Spesifikasyonu](#6-bölüm-bölüm-uygulama-spesifikasyonu)
7. [Responsive Davranış Matrisi](#7-responsive-davranış-matrisi)
8. [Hazır İçerik Metinleri (TR)](#8-hazır-i̇çerik-metinleri-tr)
9. [SEO, Schema.org ve Yerel Arama](#9-seo-schemaorg-ve-yerel-arama)
10. [Randevu Sistemi — Veri Modeli & Akış](#10-randevu-sistemi--veri-modeli--akış)
11. [Teknik Mimari & Dosya Yapısı](#11-teknik-mimari--dosya-yapısı)
12. [Performans Bütçesi & Görsel Stratejisi](#12-performans-bütçesi--görsel-stratejisi)
13. [Erişilebilirlik (WCAG 2.2 AA)](#13-erişilebilirlik-wcag-22-aa)
14. [Analytics & Dönüşüm Ölçümü](#14-analytics--dönüşüm-ölçümü)
15. [Yasal: KVKK, Çerez, Marka Kullanımı](#15-yasal-kvkk-çerez-marka-kullanımı)
16. [Uygulama Yol Haritası (Fazlar)](#16-uygulama-yol-haritası-fazlar)
17. [Sonnet-5 İçin Hazır Prompt Paketi](#17-sonnet-5-i̇çin-hazır-prompt-paketi)
18. [QA & Kabul Kriterleri Checklist](#18-qa--kabul-kriterleri-checklist)

---

# 1. Yönetici Özeti & Stratejik Çerçeve

## 1.1 Tasarımın tek cümlelik özeti

Neredeyse tamamen **akromatik** (siyah–gri–beyaz), **görsel ağırlıklı**, **serif başlık + sans gövde** kontrastı üzerine kurulu, premium otomotiv servis sitesi. Renk yok — güven, kontrast ve fotoğraf kalitesiyle konuşuyor. Bu, Mercedes-Benz marka dilinin doğru okunmuş hâli.

## 1.2 İş hedefi hiyerarşisi

Tasarımın her kararı bu sıraya hizmet etmeli:

| Öncelik | Hedef | Sayfadaki karşılığı |
|---|---|---|
| **1** | Randevu formu doldurulması | Header'daki sabit "Randevu Al", hero birincil CTA, anasayfada gömülü form |
| **2** | Telefonla arama (mobilde en yüksek dönüşüm) | Mobil sticky arama butonu, footer telefon, header tel linki |
| **3** | Hizmet anlaşılırlığı → güven | Hizmet kartları, "Neden Biz" bölümü, trust bar |
| **4** | Yerel arama görünürlüğü | LocalBusiness schema, konum sayfaları, Google Maps gömme |

> **Kritik not:** Bu bir "kurumsal tanıtım sitesi" değil, **lead generation** sitesidir. Ziyaretçinin %70'i mobilde, arıza yaşamış, endişeli ve acelecidir. Her bölüm "bu insan 15 saniye içinde randevu alabiliyor mu?" testinden geçmeli.

## 1.3 Hedef kitle segmentleri

| Segment | İhtiyaç | Sitedeki cevabı |
|---|---|---|
| **Arıza yaşayan sürücü** (acil) | "Bu arızayı çözebiliyor musunuz? Ne zaman gelebilirim?" | Hero CTA + hizmet kartları + hızlı randevu |
| **Garantisi bitmiş araç sahibi** | "Yetkili servis fiyatına alternatif ama aynı kalite" | "Neden Biz" + orijinal yazılım vurgusu |
| **İkinci el alıcı** | "Ekspertiz / arıza tespiti yapıyor musunuz?" | Diagnostik hizmet kartı |
| **Kurumsal filo yöneticisi** | "Toplu servis, fatura, süreklilik" | Kurumsal sayfa (Faz 2) |

## 1.4 Tasarımın güçlü yanları (korunacak)

- **Monokrom disiplin** — hiçbir yerde rastgele renk yok, bu premium algıyı taşıyor
- **Serif başlık kullanımı** — "Mercedes-Benz'iniz emin ellerde." cümlesi serif ile lüks/güven tonu kazanıyor
- **Trust bar'ın hero'nun hemen altında olması** — itiraz karşılama, klasik ama doğru
- **Koyu → açık bölüm ritmi** — göz yorulmasını engelliyor, formu öne çıkarıyor
- **Form ile "Neden Biz"in yan yana olması** — ikna + aksiyon aynı ekranda

## 1.5 Tasarımın zayıf yanları (uygulamada düzeltilecek)

| # | Sorun | Çözüm |
|---|---|---|
| Z1 | **Sosyal kanıt yok** — hiç müşteri yorumu, yıl/araç sayısı, Google puanı yok | Yeni bölüm: "Rakamlarla Koluman" + Google yorum şeridi |
| Z2 | **Fiyat/süreç şeffaflığı yok** — "ne kadar sürer, ne kadar tutar" cevapsız | Yeni bölüm: "Servis Süreci" 4 adımlı timeline |
| Z3 | Form 3 select + 1 buton — **isim ve telefon alanı yok**, lead toplanamıyor | Forma Ad Soyad, Telefon, Araç Modeli, KVKK onayı eklenmeli |
| Z4 | **Hizmet kartlarında açıklama yok** — sadece başlık, tıklama motivasyonu zayıf | Karta 1 satır alt açıklama + hover'da "Detay →" |
| Z5 | Mobil dönüşüm yolu belirsiz — telefon her yerde görünmüyor | Mobil sticky alt bar: [Ara] [Randevu] [Yol Tarifi] |
| Z6 | **SSS yok** — organik trafik ve itiraz karşılama kaybı | FAQ bölümü + FAQPage schema |
| Z7 | Footer'daki harita statik görünüyor, tıklanabilir değil | Gerçek gömme harita + "Yol Tarifi Al" butonu |
| Z8 | Copyright "2024" — güncellik sinyali zayıf | Dinamik yıl (`new Date().getFullYear()`) |

**Sonuç bölüm sayısı:** Orijinalde 6 bölüm → planlanan anasayfada **11 bölüm**. Aşağıda hepsi detaylandı.

---

# 2. Görsel Analiz — Tasarımdan Çıkarılanlar

## 2.1 Genel ızgara (grid) sistemi

Ekran görüntüsündeki oranlardan çıkarılan yapı:

```
Maksimum içerik genişliği : 1280px  (2xl container)
Yatay padding (desktop)   : 40px    (px-10)
Yatay padding (tablet)    : 24px    (px-6)
Yatay padding (mobil)     : 20px    (px-5)
Kolon sistemi             : 12 kolon
Gutter                    : 24px    (gap-6)
```

**Gözlenen bölüm yükseklikleri (1440px viewport referansı):**

| Bölüm | Yükseklik | Not |
|---|---|---|
| Header | ~72px | Sabit, transparan→solid geçişli |
| Hero | ~560px (desktop) | Header'ın altında, viewport'un ~%60'ı |
| Trust bar | ~76px | Tek satır, 5 eşit kolon |
| Hizmetler | ~230px | Başlık + 4 kart satırı |
| Neden Biz + Form | ~280px | Açık zemin, 2 kolon + görsel |
| Footer | ~180px + 32px alt bar | Koyu zemin |

> Bu değerler ekran görüntüsünün sıkıştırılmış oranlarıdır. **Gerçek uygulamada** hero `min-h-[600px] lg:min-h-[680px]`, hizmetler bölümü `py-20 lg:py-24`, açık bölüm `py-20 lg:py-28` olmalı — ekran görüntüsündeki oranlar mockup sıkıştırmasıdır, birebir alınmamalı.

## 2.2 Bölüm bölüm anatomi

### Header
- Zemin: `#0A0A0A` opak (sayfa üstündeyken hero üzerine yarı-şeffaf da olabilir)
- Sol blok: Mercedes yıldızı (dairesel outline, ~32px) + 2 satır metin
  - Satır 1: `Koluman İstanbul` — 15px, 600 weight, beyaz
  - Satır 2: `Mercedes-Benz Yetkili Servisi` — 11px, 400, `#9A9A9A`, letter-spacing +0.02em
- Orta: yatay nav, 5 öğe, `13px / 500 / #C4C4C4`, aktif öğe beyaz + altında 1px beyaz çizgi
- Sağ: `Randevu Al` butonu — beyaz zemin, siyah metin, `12px/600`, `px-4 py-2`, `rounded-[4px]`
- Alt kenar: `1px solid rgba(255,255,255,0.08)`

### Hero
- Full-bleed görsel, `object-cover`, sağa hizalı ağırlık merkezi (araç sağda)
- **Overlay:** soldan sağa gradient — `linear-gradient(90deg, rgba(8,8,8,.92) 0%, rgba(8,8,8,.72) 38%, rgba(8,8,8,.25) 70%, rgba(8,8,8,.15) 100%)`
- Metin bloğu sol hizalı, container içinde, dikey ortalı, maks. genişlik ~520px
- H1: **serif**, ~44px desktop, `line-height: 1.12`, beyaz, 2 satır
- Alt metin: sans, 15px, `#D0D0D0`, `line-height: 1.6`, maks 420px
- CTA'lar: yan yana, 12px boşluk
  - Birincil: beyaz zemin / siyah metin / `px-5 py-2.5` / `rounded-[4px]`
  - İkincil: şeffaf zemin / `1px solid rgba(255,255,255,.35)` / beyaz metin
- **3 varyantın farkı sadece arka plan görselidir** — metin, CTA, yerleşim birebir aynı. Bu, slider için ideal: sadece görsel katmanı değişir, metin katmanı sabit kalabilir veya slide başına değişebilir.

### Trust Bar
- Zemin: `#0D0D0D`, üst/alt `1px solid rgba(255,255,255,.07)`
- 5 eşit kolon, her biri: dairesel ikon (28px, `1px` outline, `rgba(255,255,255,.25)`) + 2 satırlık etiket
- Etiket: 11.5px / 500 / `#D8D8D8` / `line-height: 1.35`
- İkon–metin arası: 10px

### Hizmetler
- Zemin: `#0A0A0A`
- Başlık satırı: sol `Hizmetlerimiz` (serif, 26px, beyaz) — sağ `Tüm Hizmetler ›` (11px, `#B0B0B0`, chevron ikonu)
- 4 kart, eşit genişlik, `gap: 16px`
- Kart: `aspect-ratio ~ 4/3`, `rounded-[6px]`, `overflow-hidden`
  - Görsel `object-cover`
  - Alt overlay: `linear-gradient(180deg, transparent 45%, rgba(0,0,0,.85) 100%)`
  - Alt sol: 22px dairesel outline ikon + 2 satır başlık (12px / 600 / beyaz)
  - Kart kenarlığı: `1px solid rgba(255,255,255,.08)`

### Neden Biz + Randevu (açık zemin bölüm)
- Bölüm zemini: `#F4F4F2` (sıcak beyaz, saf beyaz değil)
- **Sol kart:** beyaz zemin, `rounded-[6px]`, `p-7`, hafif gölge
  - Başlık: serif, 21px, `#0F0F0F`
  - Paragraf: 12.5px, `#5A5A5A`, `line-height: 1.65`
  - 5 madde: ✓ ikonu (14px, `#1A1A1A`) + 12.5px metin, satır arası 10px
  - Buton: outline, `1px solid #1A1A1A`, siyah metin, `px-4 py-2`
- **Sağ kart:** beyaz zemin, form + görsel yan yana (form ~55%, görsel ~45%)
  - Başlık: serif, 21px
  - 3 adet select: `h-9`, `1px solid #DCDCDC`, `rounded-[4px]`, placeholder `#9A9A9A`, 12.5px
  - Submit: siyah zemin, beyaz metin, tam genişlik, `h-10`
  - Sağdaki görsel: teknisyen + XENTRY laptop, `rounded-[6px]`, dikey dolgu

### Footer
- Zemin: `#0A0A0A`, üst `1px solid rgba(255,255,255,.08)`
- 3 kolon: (1) Bize Ulaşın + harita, (2) Marka bloğu + sosyal, (3) Hızlı Linkler
- İletişim satırları: 18px dairesel outline ikon + etiket(11px `#8E8E8E`) + değer(12.5px beyaz)
- Harita: ~200×110px, `rounded-[4px]`, açık renkli (koyu zeminde kontrast yaratıyor — **bilinçli tercih, korunmalı**)
- Sosyal ikonlar: 16px, `#B0B0B0`, hover beyaz
- Alt bar: `1px solid rgba(255,255,255,.07)` üstünde, sol copyright / sağ yasal linkler, 11px `#7A7A7A`

## 2.3 Tipografi karakteri

Görselde başlıklar net biçimde **serif** ("Mercedes-Benz'iniz emin ellerde.", "Hizmetlerimiz", "Neden Bizi Tercih Etmelisiniz?", "Servis Randevusu", "Bize Ulaşın"), gövde ve UI metinleri **grotesk sans**.

Bu ikili, uygulamada şöyle karşılanacak:

- **Display/Serif:** `Newsreader` (Google Fonts) — Türkçe karakter desteği tam, optik boyutlandırma var, ekrandaki karaktere en yakın. *Alternatif:* `Instrument Serif` (daha dramatik), `Source Serif 4` (daha nötr).
- **Sans/UI:** `Inter` — Türkçe tam destek, `ı/İ/ğ/ş/ç/ö/ü` optik dengesi iyi, variable font.

> **Marka notu:** Mercedes-Benz kurumsal fontu `MB Corpo` lisanslıdır ve yetkili kullanım gerektirir. Yetkili servis olarak lisans hakkınız varsa `MB Corpo Text` + `MB Corpo Title` kullanılmalı; yoksa yukarıdaki ikili doğru ve güvenli tercihtir.

## 2.4 Görsel (fotoğraf) dili

Tüm görsellerde ortak karakter:

- Düşük satürasyon, hafif soğuk beyaz dengesi
- Yüksek kontrast, koyu gölgeler
- Araçlar: gri/siyah/gümüş — **kırmızı veya parlak renkli araç yok**
- Atölye görselleri: mavi-beyaz LED ışık, temiz zemin
- Teknik görseller (ECU, XENTRY ekranı): makro, sığ alan derinliği

**Kural:** Siteye eklenecek her yeni fotoğraf bu filtreden geçmeli. Renkli/sıcak tonlu bir stok fotoğraf tüm sistemi bozar. Gerekirse CSS ile `filter: saturate(.85) contrast(1.05)` uygulanabilir, ancak asıl çözüm doğru fotoğraf seçimidir.

---

# 3. Tasarım Sistemi (Design Tokens)

## 3.1 Renk paleti

Palet tamamen nötr. **Tek "renk" kabulü:** durum renkleri (başarı/hata) ve harita. Bunun dışında hiçbir yerde hue kullanılmaz.

### Ana yüzeyler

| Token | Değer | Kullanım |
|---|---|---|
| `--color-ink` | `#0A0A0A` | Ana koyu zemin (header, hero, hizmetler, footer) |
| `--color-ink-raised` | `#121212` | Koyu zemin üzerinde yükseltilmiş yüzey (kart, trust bar) |
| `--color-ink-sunken` | `#050505` | Alt bar, en koyu katman |
| `--color-paper` | `#F4F4F2` | Açık bölüm zemini (sıcak beyaz) |
| `--color-paper-card` | `#FFFFFF` | Açık bölümdeki kart yüzeyi |

### Metin

| Token | Tailwind sınıfı | Değer | Kullanım |
|---|---|---|---|
| `--color-fg-dark` | `text-fg-dark` | `#FFFFFF` | Koyu zeminde başlık |
| `--color-fg-dark-muted` | `text-fg-dark-muted` | `#C4C4C4` | Koyu zeminde gövde/nav |
| `--color-fg-dark-subtle` | `text-fg-dark-subtle` | `#8E8E8E` | Koyu zeminde etiket, meta |
| `--color-fg-light` | `text-fg-light` | `#0F0F0F` | Açık zeminde başlık |
| `--color-fg-light-muted` | `text-fg-light-muted` | `#5A5A5A` | Açık zeminde gövde |
| `--color-fg-light-subtle` | `text-fg-light-subtle` | `#9A9A9A` | Placeholder, yardım metni |

### Kenarlık & ayırıcı

| Token | Tailwind sınıfı | Değer | Kullanım |
|---|---|---|---|
| `--color-line-dark` | `border-line-dark` | `rgba(255,255,255,0.08)` | Koyu zeminde ayırıcı |
| `--color-line-dark-strong` | `border-line-dark-strong` | `rgba(255,255,255,0.20)` | Koyu zeminde outline buton/ikon |
| `--color-line-light` | `border-line-light` | `#E3E3E1` | Açık zeminde ayırıcı |
| `--color-line-input` | `border-line-input` | `#DCDCDC` | Form alanı kenarlığı |
| — (odak) | `focus:border-fg-light` | `#0F0F0F` | Odaklanmış form alanı |

> **İsimlendirme kuralı:** `ink/paper` = yüzey, `fg` = ön plan (metin), `line` = kenarlık. Bu adlar §3.6'daki `@theme` bloğuyla birebir eşleşir; dokümanın tamamında (ve kodda) yalnızca bu adlar kullanılır.

### Durum renkleri (yalnızca form/bildirim)

| Token | Değer |
|---|---|
| `--color-success` | `#1E7B3C` |
| `--color-success-bg` | `#EAF5EE` |
| `--color-error` | `#B3261E` |
| `--color-error-bg` | `#FBEDEC` |
| `--color-focus-ring` | `#3B82F6` (yalnızca klavye odak halkası — erişilebilirlik gereği) |

### Overlay tarifleri (kopyala-kullan)

```css
/* Hero — soldan sağa okunabilirlik gradyanı */
--overlay-hero: linear-gradient(
  90deg,
  rgba(8,8,8,0.94) 0%,
  rgba(8,8,8,0.78) 34%,
  rgba(8,8,8,0.35) 66%,
  rgba(8,8,8,0.12) 100%
);

/* Hero — mobilde alttan yukarı (metin altta olduğu için) */
--overlay-hero-mobile: linear-gradient(
  180deg,
  rgba(8,8,8,0.55) 0%,
  rgba(8,8,8,0.80) 55%,
  rgba(8,8,8,0.94) 100%
);

/* Kart görseli üzerine alt karartma */
--overlay-card: linear-gradient(
  180deg,
  rgba(0,0,0,0) 42%,
  rgba(0,0,0,0.55) 72%,
  rgba(0,0,0,0.88) 100%
);
```

## 3.2 Tipografi ölçeği

```
Serif (Newsreader)  → display, h1, h2, h3, bölüm başlıkları, kart başlıkları (büyük)
Sans  (Inter)       → gövde, nav, buton, form, etiket, meta
```

| Rol | Token | Mobil | Tablet | Desktop | Weight | Line-height | Tracking |
|---|---|---|---|---|---|---|---|
| Hero H1 | `text-display` | 34px | 44px | 56px | 400 (serif) | 1.08 | -0.02em |
| Bölüm başlığı | `text-h2` | 26px | 32px | 38px | 400 (serif) | 1.15 | -0.015em |
| Kart/blok başlığı | `text-h3` | 20px | 22px | 24px | 500 (serif) | 1.25 | -0.01em |
| Alt başlık | `text-h4` | 16px | 17px | 18px | 600 (sans) | 1.35 | 0 |
| Hero alt metin | `text-lead` | 15px | 16px | 18px | 400 (sans) | 1.6 | 0 |
| Gövde | `text-body` | 14px | 15px | 15px | 400 (sans) | 1.7 | 0 |
| Küçük gövde | `text-body-sm` | 13px | 13px | 14px | 400 (sans) | 1.6 | 0 |
| Etiket / meta | `text-label` | 11px | 11px | 12px | 500 (sans) | 1.4 | +0.03em |
| Buton | `text-button` | 13px | 13px | 14px | 600 (sans) | 1 | +0.01em |
| Eyebrow (üst etiket) | `text-eyebrow` | 11px | 11px | 11px | 600 (sans) | 1.2 | +0.14em, UPPERCASE |

**Türkçe tipografi kuralları:**
- Başlıklarda `hyphens: none` — Türkçe otomatik heceleme hatalı sonuç verir
- `text-wrap: balance` H1/H2 için (satır dengesi), `text-wrap: pretty` paragraflar için
- Kesme işareti daima **typographic**: `Mercedes-Benz'iniz` (U+2019), düz `'` değil
- Uzun bileşik kelimeler (`değerlendirme`, `standartlarında`) mobilde taşarsa `overflow-wrap: anywhere` değil, font-size düşürülür

## 3.3 Spacing ölçeği

4px tabanlı. Tailwind varsayılanı korunur, bölüm ritmi için ek tokenlar:

| Token | Değer | Kullanım |
|---|---|---|
| `--space-section` | `80px` mobil / `112px` desktop | Bölümler arası dikey (py) |
| `--space-section-tight` | `56px` mobil / `72px` desktop | Yoğun bölümler (trust bar civarı) |
| `--space-block` | `40px` | Bölüm içi büyük bloklar arası |
| `--space-stack` | `16px` | Başlık–paragraf, paragraf–liste |
| `--space-inline` | `12px` | Yan yana elemanlar (CTA'lar, ikon–metin) |
| `--container-shell` | `1280px` | Ana container |
| `--container-narrow` | `840px` | Metin ağırlıklı içerik (blog, yasal sayfalar) |

## 3.4 Şekil, kenarlık, gölge

```
--radius-xs : 3px   → badge, küçük etiket
--radius-sm : 4px   → buton, input, select      ★ en çok kullanılan
--radius-md : 6px   → kart, görsel                ★ en çok kullanılan
--radius-lg : 10px  → modal, dropdown panel
--radius-full: 9999px → ikon çemberi, avatar

--border-hair : 1px
```

**Gölgeler (çok az kullanılır — tasarım flat karakterde):**

```css
--shadow-card: 0 1px 2px rgba(15,15,15,.04), 0 8px 24px rgba(15,15,15,.06);
--shadow-raised: 0 2px 4px rgba(15,15,15,.06), 0 16px 40px rgba(15,15,15,.10);
--shadow-none-on-dark: none; /* koyu zeminde gölge YOK, ayrım border ile yapılır */
```

> **Kural:** Koyu zeminde asla `box-shadow` kullanma. Katman ayrımı `border: 1px solid rgba(255,255,255,.08)` veya `background` farkı ile yapılır. Bu, tasarımın en belirgin karakteristiklerinden biri.

## 3.5 Hareket (motion)

Premium algının kaynağı: **yavaş, az, kesin**.

| Etkileşim | Süre | Easing | Değişen |
|---|---|---|---|
| Buton hover | 180ms | `cubic-bezier(.4,0,.2,1)` | background, border-color |
| Kart hover | 400ms | `cubic-bezier(.22,.61,.36,1)` | `scale(1.03)` görsel + overlay opacity |
| Nav underline | 220ms | `ease-out` | `scaleX(0→1)`, origin left |
| Hero slider geçişi | 900ms | `cubic-bezier(.4,0,.2,1)` | opacity + `scale(1.05→1)` (Ken Burns) |
| Bölüm giriş (scroll reveal) | 600ms | `cubic-bezier(.16,1,.3,1)` | opacity 0→1, translateY 16px→0 |
| Header transparan→solid | 250ms | `ease-out` | background, backdrop-filter, border |
| Accordion aç/kapa | 260ms | `ease-in-out` | height, opacity |

**Zorunlu:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Hero slider `prefers-reduced-motion` durumunda **otomatik ilerlemeyi durdurur**, sadece manuel kontrol kalır.

## 3.6 Tailwind v4 `@theme` bloğu (doğrudan kullanılabilir)

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Renkler */
  --color-ink:                #0A0A0A;
  --color-ink-raised:         #121212;
  --color-ink-sunken:         #050505;
  --color-paper:              #F4F4F2;
  --color-paper-card:         #FFFFFF;

  --color-fg-dark:            #FFFFFF;
  --color-fg-dark-muted:      #C4C4C4;
  --color-fg-dark-subtle:     #8E8E8E;
  --color-fg-light:           #0F0F0F;
  --color-fg-light-muted:     #5A5A5A;
  --color-fg-light-subtle:    #9A9A9A;

  --color-line-dark:          rgba(255,255,255,0.08);
  --color-line-dark-strong:   rgba(255,255,255,0.20);
  --color-line-light:         #E3E3E1;
  --color-line-input:         #DCDCDC;

  --color-success:            #1E7B3C;
  --color-success-bg:         #EAF5EE;
  --color-error:              #B3261E;
  --color-error-bg:           #FBEDEC;
  --color-focus-ring:         #3B82F6;

  /* Tipografi */
  --font-serif: "Newsreader", "Times New Roman", serif;
  --font-sans:  "Inter", ui-sans-serif, system-ui, sans-serif;

  /* Radius */
  --radius-xs: 3px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;

  /* Container */
  --container-shell: 1280px;
  --container-narrow: 840px;

  /* Easing */
  --ease-out-quint: cubic-bezier(.22,.61,.36,1);
  --ease-smooth:    cubic-bezier(.4,0,.2,1);
  --ease-expo:      cubic-bezier(.16,1,.3,1);
}

/* Overlay'ler @theme dışında tanımlanır (gradient token değildir),
   kullanım: className="bg-[var(--overlay-hero)]" */
:root {
  --overlay-hero: linear-gradient(90deg,
    rgba(8,8,8,.94) 0%, rgba(8,8,8,.78) 34%,
    rgba(8,8,8,.35) 66%, rgba(8,8,8,.12) 100%);
  --overlay-hero-mobile: linear-gradient(180deg,
    rgba(8,8,8,.55) 0%, rgba(8,8,8,.80) 55%, rgba(8,8,8,.94) 100%);
  --overlay-card: linear-gradient(180deg,
    rgba(0,0,0,0) 42%, rgba(0,0,0,.55) 72%, rgba(0,0,0,.88) 100%);
  --shadow-card: 0 1px 2px rgba(15,15,15,.04), 0 8px 24px rgba(15,15,15,.06);
  --shadow-raised: 0 2px 4px rgba(15,15,15,.06), 0 16px 40px rgba(15,15,15,.10);
}

@layer base {
  html { scroll-behavior: smooth; }
  body {
    background: var(--color-ink);
    color: var(--color-fg-dark);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  h1, h2, h3 {
    font-family: var(--font-serif);
    font-weight: 400;
    letter-spacing: -0.015em;
    text-wrap: balance;
    hyphens: none;
  }
  p { text-wrap: pretty; }
  ::selection { background: #FFFFFF; color: #0A0A0A; }
  :focus-visible {
    outline: 2px solid #3B82F6;
    outline-offset: 2px;
    border-radius: 2px;
  }
}
```

## 3.7 İkonografi

- **Kütüphane:** `lucide-react` (stroke tabanlı, 1.5px, tasarımın çizgisel diliyle uyumlu)
- **Boyut ölçeği:** 14 / 16 / 18 / 20 / 24px
- **Stroke width:** her yerde `1.5` — kalın ikon kullanma
- **Çember sarmalayıcı:** ikonlar dairesel outline içinde → `w-8 h-8 rounded-full border border-line-dark-strong grid place-items-center`

**Bölüm → ikon eşlemesi:**

| Kullanım | Lucide ikon |
|---|---|
| Yetkili Servis Güvencesi | `ShieldCheck` |
| Orijinal Yazılım ve Teknik Bilgi | `FileCode2` / `BadgeCheck` |
| Uzman Elektronik Teknisyenleri | `Users` / `Wrench` |
| Gelişmiş Arıza Tespit | `ScanLine` / `Activity` |
| Mercedes-Benz Standartları | `Award` |
| Motor Beyni (ECU) | `Cpu` |
| XENTRY Diagnostik | `MonitorCheck` / `LaptopMinimal` |
| Elektronik Sistem Arızası | `CircuitBoard` / `Zap` |
| Kodlama & Yazılım | `Code2` / `Settings2` |
| Adres | `MapPin` |
| Telefon | `Phone` |
| E-posta | `Mail` |
| Çalışma saatleri | `Clock` |
| WhatsApp | `MessageCircle` (veya özel SVG) |

> **Mercedes yıldızı:** Lucide'de yok. `public/brand/mb-star.svg` olarak inline SVG eklenecek, `currentColor` ile renklenmeli. **Yasal not:** Marka logosunun kullanımı yetkili servis sözleşmesi kapsamında olmalıdır (bkz. §15.3).

---

# 4. Bilgi Mimarisi & Sayfa Haritası

## 4.1 Site haritası

```
/                               Anasayfa
├── /hizmetler                  Hizmetler (liste)
│   ├── /hizmetler/motor-beyni-ecu-ariza-tespiti
│   ├── /hizmetler/xentry-diagnostik
│   ├── /hizmetler/elektronik-sistem-ariza-tespiti
│   ├── /hizmetler/kodlama-yazilim-guncelleme
│   ├── /hizmetler/periyodik-bakim
│   ├── /hizmetler/sanziman-ariza-tespiti
│   ├── /hizmetler/klima-ve-konfor-sistemleri
│   └── /hizmetler/arac-ekspertiz
├── /randevu                    Randevu (tam sayfa, çok adımlı form)
├── /kampanyalar                Kampanyalar (liste)
│   └── /kampanyalar/[slug]
├── /hakkimizda                 Hakkımızda / Kurumsal
├── /iletisim                   İletişim (harita, form, çalışma saatleri)
├── /sss                        Sıkça Sorulan Sorular
├── /blog                       Blog / Teknik Rehber        (Faz 3)
│   └── /blog/[slug]
├── /gizlilik-politikasi
├── /kvkk-aydinlatma-metni
└── /cerez-politikasi
```

**Faz 2'de eklenebilecek:**
- `/kurumsal-filo` — filo müşterileri için
- `/marka/[model]` — `/marka/c-serisi`, `/marka/sprinter` gibi model bazlı landing (SEO değeri yüksek)

## 4.2 Anasayfa bölüm sırası (dönüşüm optimize)

| # | Bölüm | Amaç | Zemin | Kaynak |
|---|---|---|---|---|
| 1 | **Header** (sticky) | Sürekli erişilebilir CTA | koyu | ✅ tasarımda var |
| 2 | **Hero Slider** (3 slide) | İlk izlenim + birincil CTA | koyu/görsel | ✅ tasarımda var |
| 3 | **Trust Bar** (5 öğe) | Anında güven, itiraz karşılama | koyu | ✅ tasarımda var |
| 4 | **Hizmetler** (4 kart + tümü) | Kapsam gösterimi | koyu | ✅ tasarımda var |
| 5 | **Rakamlarla Koluman** (4 metrik) | Sosyal kanıt / yetkinlik | koyu | 🆕 **eklendi (Z1)** |
| 6 | **Neden Biz + Randevu Formu** | İkna + dönüşüm | açık | ✅ tasarımda var |
| 7 | **Servis Süreci** (4 adım) | Belirsizlik giderme | açık | 🆕 **eklendi (Z2)** |
| 8 | **Müşteri Yorumları** (slider) | Sosyal kanıt | açık | 🆕 **eklendi (Z1)** |
| 9 | **SSS** (accordion, 6-8 soru) | İtiraz + SEO | açık | 🆕 **eklendi (Z6)** |
| 10 | **Kapanış CTA + Konum** | Son dönüşüm şansı + yol tarifi | koyu | 🆕 **eklendi (Z7)** |
| 11 | **Footer + Alt Bar** | Navigasyon + yasal | koyu | ✅ tasarımda var |
| — | **Mobil Sticky Action Bar** | Mobil dönüşüm | koyu | 🆕 **eklendi (Z5)** |

**Zemin ritmi:** `koyu → koyu → koyu → koyu → koyu → AÇIK → AÇIK → AÇIK → AÇIK → koyu → koyu`

Bu ritim doğru: koyu blok markayı kurar, açık blok "iş yapma" alanıdır (form, süreç, sorular), koyu kapanış markaya döner.

## 4.3 Navigasyon yapısı

**Ana nav (desktop):**
```
Anasayfa | Hizmetlerimiz ▾ | Servis Randevusu | Kampanyalar | İletişim     [Randevu Al]
```

`Hizmetlerimiz` için **mega-menü** (hover/focus ile açılır):
- 2 kolon × 4 satır hizmet listesi (ikon + başlık + 1 satır açıklama)
- Sağda küçük promosyon kartı: "Ücretsiz Ön Arıza Tespiti" + görsel
- Panel: `bg-ink-raised`, `border border-line-dark`, `rounded-lg`, üstten 8px offset

**Mobil nav:** tam ekran overlay drawer
- Üstte logo + kapat
- Hizmetler için tek seviye accordion
- Altta: telefon butonu (tam genişlik, beyaz) + WhatsApp + sosyal ikonlar

**Header davranışı:**
- Anasayfada sayfa en üstteyken: `bg-transparent`, hero üzerine biner
- 80px scroll sonrası: `bg-ink/92 backdrop-blur-md border-b border-line-dark`
- Diğer sayfalarda: her zaman solid
- Aşağı scroll'da gizlen / yukarı scroll'da göster **(uygulanmayacak — CTA sürekli görünür kalmalı, sadece sticky)**

## 4.4 CTA hiyerarşisi

| Seviye | Metin | Stil | Nerede |
|---|---|---|---|
| **Birincil** | `Servis Randevusu Al` | Beyaz zemin / siyah metin | Hero, kapanış CTA |
| **Birincil (koyu zeminde ters)** | `Randevu Oluştur` | Siyah zemin / beyaz metin | Form submit (açık zeminde) |
| **İkincil** | `Hizmetlerimizi İnceleyin` | Outline | Hero |
| **Üçüncül** | `Tüm Hizmetler ›` | Metin + chevron | Bölüm başlığı sağı |
| **Kalıcı** | `Randevu Al` | Header butonu | Header (her sayfa) |
| **Mobil acil** | `Hemen Ara` | Sticky bar, ikon + metin | Mobil alt bar |

> Bir ekranda **ikiden fazla birincil CTA olmamalı**. Hero'da 1 birincil + 1 ikincil doğru.

---

# 5. Bileşen Kütüphanesi

Her bileşen: **dosya yolu → props → varyantlar → state'ler → notlar** formatında.

## 5.1 Temel (primitive) bileşenler

### `Button` — `components/ui/button.tsx`
shadcn/ui `button` üzerine özelleştirilir.

```ts
variant: "primary" | "primary-dark" | "outline-light" | "outline-dark" | "ghost" | "link"
size:    "sm" | "md" | "lg"
```

| Variant | Zemin | Metin | Kenarlık | Hover |
|---|---|---|---|---|
| `primary` | `#FFFFFF` | `#0A0A0A` | yok | zemin `#E8E8E8` |
| `primary-dark` | `#0F0F0F` | `#FFFFFF` | yok | zemin `#242424` |
| `outline-light` | transparan | `#FFFFFF` | `1px rgba(255,255,255,.35)` | zemin `rgba(255,255,255,.10)`, kenarlık `.6` |
| `outline-dark` | transparan | `#0F0F0F` | `1px #1A1A1A` | zemin `#0F0F0F`, metin beyaz |
| `ghost` | transparan | inherit | yok | zemin `rgba(255,255,255,.06)` |
| `link` | — | inherit | — | alt çizgi belirir |

| Size | Yükseklik | Padding | Font |
|---|---|---|---|
| `sm` | 34px | `px-3.5` | 12px/600 |
| `md` | 40px | `px-5` | 13px/600 |
| `lg` | 48px | `px-7` | 14px/600 |

Ortak: `rounded-sm` (4px), `transition: 180ms var(--ease-smooth)`, `disabled:opacity-50 disabled:pointer-events-none`, loading durumunda `Loader2` spin ikonu + metin `aria-busy`.

### `Container` — `components/ui/container.tsx`
```tsx
<div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10">
```
Prop: `size?: "shell" | "narrow"` (narrow → `max-w-[840px]`).

### `SectionHeading` — `components/ui/section-heading.tsx`
```ts
{ eyebrow?: string; title: string; description?: string;
  align?: "left" | "center"; action?: { label: string; href: string };
  tone?: "dark" | "light" }
```
Tasarımdaki "Hizmetlerimiz — Tüm Hizmetler ›" satırının bileşen hâli. `action` verilirse başlıkla aynı satırda sağa yaslanır (desktop), mobilde alta düşer.

### `IconCircle` — `components/ui/icon-circle.tsx`
```ts
{ icon: LucideIcon; size?: 28 | 32 | 40; tone?: "dark" | "light" }
```
`rounded-full border border-line-dark-strong grid place-items-center`, ikon `strokeWidth={1.5}`.

### `Badge` — `components/ui/badge.tsx`
Kampanya kartlarında ("%15 İndirim"), hizmet detayında ("Aynı Gün Teslim") kullanılır.

### `Field` grubu — `components/ui/{input,select,textarea,checkbox,label,form}.tsx`
shadcn/ui + `react-hook-form` + `zod`. Ortak stil:
```
h-11 rounded-sm border border-line-input bg-white px-3.5 text-[14px]
placeholder:text-fg-light-subtle
focus:border-fg-light focus:ring-0
aria-invalid:border-error aria-invalid:bg-error/[.03]
```
Hata metni: `text-[12px] text-error mt-1.5` + `role="alert"`.

## 5.2 Yerleşim (layout) bileşenleri

### `SiteHeader` — `components/layout/site-header.tsx`
- Client component (scroll state için)
- Props: `variant?: "overlay" | "solid"` (anasayfa `overlay`, iç sayfalar `solid`)
- İç bileşenler: `Logo`, `DesktopNav`, `ServicesMegaMenu`, `MobileNavDrawer`
- Scroll > 80px → `bg-ink/92 backdrop-blur-md border-b border-line-dark`
- `role="banner"`, nav `aria-label="Ana menü"`

### `SiteFooter` — `components/layout/site-footer.tsx`
- Server component
- İçerik `lib/site-config.ts`'ten okunur (adres, telefon, sosyal linkler tek yerden)
- `role="contentinfo"`

### `MobileActionBar` — `components/layout/mobile-action-bar.tsx`
- `lg:hidden fixed bottom-0 inset-x-0 z-50`
- 3 eşit buton: `Hemen Ara` (tel:) / `Randevu Al` (form'a scroll) / `Yol Tarifi` (Maps)
- `bg-ink/95 backdrop-blur border-t border-line-dark`, güvenli alan: `pb-[env(safe-area-inset-bottom)]`
- Body'ye `lg:pb-0 pb-16` telafisi

## 5.3 Bölüm (section) bileşenleri

| Bileşen | Dosya | Tip | Not |
|---|---|---|---|
| `HeroSlider` | `components/sections/hero-slider.tsx` | client | Embla Carousel + autoplay |
| `TrustBar` | `components/sections/trust-bar.tsx` | server | 5 öğe, mobilde yatay scroll |
| `ServicesGrid` | `components/sections/services-grid.tsx` | server | 4 kart + "Tüm Hizmetler" |
| `StatsBand` | `components/sections/stats-band.tsx` | client | Sayı animasyonu (IntersectionObserver) |
| `WhyUs` | `components/sections/why-us.tsx` | server | Madde listesi + CTA |
| `AppointmentForm` | `components/sections/appointment-form.tsx` | client | RHF + zod + server action |
| `ProcessTimeline` | `components/sections/process-timeline.tsx` | server | 4 adım |
| `TestimonialSlider` | `components/sections/testimonial-slider.tsx` | client | Embla |
| `FaqAccordion` | `components/sections/faq-accordion.tsx` | client | shadcn Accordion + FAQPage schema |
| `ClosingCta` | `components/sections/closing-cta.tsx` | server | Harita + CTA |

## 5.4 Kart bileşenleri

### `ServiceCard` — `components/cards/service-card.tsx`
```ts
{ title: string; excerpt?: string; icon: LucideIcon;
  image: { src: string; alt: string }; href: string }
```
Yapı:
```
<Link> group relative aspect-[4/3] rounded-md overflow-hidden border border-line-dark
  <Image fill className="object-cover transition-transform duration-[400ms]
    ease-[var(--ease-out-quint)] group-hover:scale-[1.04]" />
  <div className="absolute inset-0 bg-[var(--overlay-card)]" />
  <div className="absolute inset-x-0 bottom-0 p-4 flex gap-3 items-start">
    <IconCircle size={28} />
    <div>
      <h3 className="text-[13px] font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-1 text-[12px] text-fg-dark-muted line-clamp-2
                    opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300">{excerpt}</p>
    </div>
  </div>
```
> Mobilde `excerpt` her zaman görünür (hover yok). `@media (hover: hover)` ile koşullandır.

### `StatCard`, `TestimonialCard`, `CampaignCard`, `ProcessStep`
Detayları §6'daki ilgili bölümlerde.

## 5.5 Yardımcı bileşenler

| Bileşen | Amaç |
|---|---|
| `Reveal` | IntersectionObserver ile scroll-in animasyonu sarmalayıcısı |
| `MapEmbed` | Lazy-load Google Maps iframe (tıklamadan önce statik görsel — performans) |
| `PhoneLink` | `tel:` linki + analytics event |
| `WhatsAppFab` | Sağ alt sabit WhatsApp butonu (opsiyonel) |
| `CookieConsent` | Çerez bandı |
| `JsonLd` | Schema.org script enjeksiyonu |

---

# 6. Bölüm Bölüm Uygulama Spesifikasyonu

## 6.1 Header

```
Yükseklik : 72px (desktop) / 64px (mobil)
Z-index   : 50
Position  : sticky top-0
```

**Yerleşim:** `flex items-center justify-between` — sol logo bloğu, orta nav (`hidden lg:flex`), sağ CTA + mobil menü butonu.

**Logo bloğu:**
```tsx
<Link href="/" className="flex items-center gap-3">
  <MbStar className="h-8 w-8 text-white" />
  <span className="flex flex-col leading-none">
    <span className="text-[15px] font-semibold tracking-tight">Koluman İstanbul</span>
    <span className="mt-1 text-[10.5px] tracking-[0.02em] text-fg-dark-subtle">
      Mercedes-Benz Yetkili Servisi
    </span>
  </span>
</Link>
```

**Nav öğesi:**
```
text-[13px] font-medium text-fg-dark-muted hover:text-white
relative py-2
after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-white
after:origin-left after:scale-x-0 hover:after:scale-x-100
after:transition-transform after:duration-[220ms]
aktif: text-white + after:scale-x-100
```

**Mega menü (Hizmetlerimiz):** `Radix NavigationMenu` kullan (klavye erişimi hazır gelir). Panel genişliği 640px, `grid grid-cols-2 gap-1 p-4`.

**Erişilebilirlik:**
- Mobil drawer açıkken `body` scroll kilidi + focus trap
- `aria-expanded`, `aria-controls` doğru bağlanmalı
- Skip link: `<a href="#main" className="sr-only focus:not-sr-only ...">İçeriğe geç</a>`

## 6.2 Hero Slider

**Kütüphane:** `embla-carousel-react` + `embla-carousel-autoplay` (hafif, ~5KB, erişilebilir).

**Slide verisi:**
```ts
// lib/data/hero-slides.ts
export const heroSlides = [
  {
    id: "yetkili-servis",
    image: "/images/hero/hero-01-bayi.webp",
    alt: "Koluman İstanbul Mercedes-Benz yetkili servis binası önünde siyah Mercedes-Benz E-Serisi",
    title: "Mercedes-Benz'iniz emin ellerde.",
    subtitle: "Motor beyni ve elektronik arızalarda uzman teşhis ve kalıcı çözüm.",
  },
  {
    id: "elektronik-uzmanlik",
    image: "/images/hero/hero-02-gle.webp",
    alt: "Modern beton mimari önünde gümüş Mercedes-Benz GLE",
    title: "Elektronik arızada doğru teşhis.",
    subtitle: "XENTRY donanımı ve orijinal yazılım erişimiyle arızanın kaynağına iniyoruz.",
  },
  {
    id: "atolye",
    image: "/images/hero/hero-03-atolye.webp",
    alt: "Servis atölyesinde Mercedes-AMG GT, teknisyen çalışma alanı",
    title: "Yetkili servis standardı, uzman ekip.",
    subtitle: "Mercedes-Benz eğitimli teknisyenler, orijinal parça ve süreç güvencesi.",
  },
] as const;
```

**Yerleşim ve katmanlar (alttan üste):**
1. Görsel katmanı — `<Image fill priority={index===0} sizes="100vw" className="object-cover object-[70%_center]" />`
2. Gradient overlay — `bg-[var(--overlay-hero)]` (desktop) / `bg-[var(--overlay-hero-mobile)]` (mobil)
3. İçerik — `Container` içinde, `flex items-center min-h-[600px] lg:min-h-[680px]`
4. Kontroller — alt sağda ok butonları + alt solda progress dots

**İçerik bloğu:**
```
max-w-[560px]
H1  : text-display serif text-white
p   : mt-5 text-lead text-fg-dark-muted max-w-[460px]
CTA : mt-8 flex flex-wrap gap-3
      [Servis Randevusu Al] primary lg
      [Hizmetlerimizi İnceleyin] outline-light lg
```

**Slider davranışı:**
| Ayar | Değer |
|---|---|
| Autoplay | 6500ms, `stopOnInteraction: true`, `stopOnMouseEnter: true` |
| Geçiş | fade (opacity 900ms) + görselde `scale(1.06 → 1)` Ken Burns |
| Loop | true |
| Kontroller | Sol/sağ ok (desktop, `hidden lg:flex`), dots (her yerde) |
| Klavye | ← → ok tuşları, dots `role="tab"` |
| Reduced motion | Autoplay kapalı, Ken Burns kapalı, geçiş anlık |
| Swipe | Mobilde aktif |

**Dots stili:** `h-[3px] w-8 rounded-full bg-white/25`, aktif `bg-white` + geçiş süresince genişleyen progress efekti.

**Kritik performans notu:** Yalnızca ilk slide `priority` ile yüklenir; diğerleri `loading="lazy"`. Hero görselleri **LCP elementi**dir — WebP/AVIF, maks 180KB, `sizes="100vw"`.

## 6.3 Trust Bar

```
bg-ink-raised border-y border-line-dark
py-5
```

Desktop: `grid grid-cols-5 gap-6`
Tablet: `grid-cols-3` (2 satır)
Mobil: yatay scroll — `flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-5 px-5 [scrollbar-width:none]`, her öğe `min-w-[190px] snap-start`

Öğe:
```tsx
<div className="flex items-start gap-3">
  <IconCircle icon={ShieldCheck} size={28} />
  <span className="text-[11.5px] font-medium leading-[1.35] text-fg-dark-muted max-w-[130px]">
    Yetkili Servis Güvencesi
  </span>
</div>
```

> Bu bölüm `<ul>` / `<li>` semantiğiyle kurulmalı, `aria-label="Servis güvenceleri"`.

## 6.4 Hizmetler

```
bg-ink py-20 lg:py-24
```

Başlık satırı: `SectionHeading` — `title="Hizmetlerimiz"`, `action={{ label: "Tüm Hizmetler", href: "/hizmetler" }}`

Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`

4 kart (anasayfada öne çıkanlar):

| # | Başlık | Excerpt | İkon | Slug |
|---|---|---|---|---|
| 1 | Motor Beyni (ECU) Arıza Tespit ve Çözüm | Arızalı motor kontrol ünitelerinde tespit, onarım ve yeniden programlama. | `Cpu` | `motor-beyni-ecu-ariza-tespiti` |
| 2 | Mercedes-Benz XENTRY ile Profesyonel Diagnostik | Orijinal XENTRY sistemiyle tüm kontrol ünitelerinin detaylı taraması. | `MonitorCheck` | `xentry-diagnostik` |
| 3 | Elektronik Sistem Arıza Tespiti | Kablo tesisatı, sensör ve haberleşme hatlarında kalıcı çözüm. | `CircuitBoard` | `elektronik-sistem-ariza-tespiti` |
| 4 | Kodlama, Yazılım Güncelleme ve Adaptasyon | Parça değişimi sonrası kodlama, güncelleme ve adaptasyon işlemleri. | `Code2` | `kodlama-yazilim-guncelleme` |

## 6.5 Rakamlarla Koluman 🆕

```
bg-ink border-t border-line-dark py-16
grid grid-cols-2 lg:grid-cols-4 gap-8
```

| Değer | Etiket |
|---|---|
| `20+` | Yıllık Mercedes-Benz deneyimi |
| `12.000+` | Servis edilen araç |
| `%98` | İlk seferde doğru teşhis oranı |
| `4.8/5` | Google müşteri puanı |

Stil: sayı `text-h2 serif text-white tabular-nums`, etiket `text-[12px] text-fg-dark-subtle mt-2 max-w-[160px]`.
Animasyon: görünür olduğunda 0'dan hedefe 1200ms count-up (`prefers-reduced-motion` varsa doğrudan son değer).

> ⚠️ **Bu rakamlar örnektir.** Yayına almadan önce Koluman'ın gerçek verileriyle değiştirin — yanlış istatistik hem güven hem yasal risk yaratır.

## 6.6 Neden Biz + Randevu Formu

```
bg-paper py-20 lg:py-28
grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-6 lg:gap-8 items-start
```

### Sol: `WhyUs` kartı
```
bg-paper-card rounded-md p-7 lg:p-9 shadow-[var(--shadow-card)]
```
- `h2` (text-h3 serif, `#0F0F0F`): **Neden Bizi Tercih Etmelisiniz?**
- Paragraf: `text-body text-fg-light-muted mt-4`
- Liste: `mt-7 space-y-3`, her madde `flex gap-2.5 items-start`, ikon `Check` 15px `text-fg-light` `mt-[3px] shrink-0`, metin `text-body-sm text-fg-light`
- CTA: `mt-8` `outline-dark` `md` → `/hakkimizda`

**5 madde:**
1. Mercedes-Benz odaklı uzman elektronik servis
2. Gelişmiş arıza tespit ve ölçüm teknolojileri
3. Orijinal yazılım ve teknik bilgiye erişim
4. Kalıcı ve güvenilir çözüm anlayışı
5. Aracınız için en doğru, en güvenli hizmet

### Sağ: `AppointmentForm` kartı
```
bg-paper-card rounded-md overflow-hidden shadow-[var(--shadow-card)]
grid grid-cols-1 md:grid-cols-[1.25fr_1fr]
```
- Sol yarı: `p-7 lg:p-9` — başlık + açıklama + form alanları
- Sağ yarı: teknisyen görseli, `relative min-h-[280px]` `<Image fill object-cover>`, mobilde gizli (`hidden md:block`)

**Form alanları (tasarımdakinden genişletilmiş — Z3):**

| Alan | Tip | Zorunlu | Placeholder / Not |
|---|---|---|---|
| `fullName` | text | ✔ | Ad Soyad |
| `phone` | tel | ✔ | 0 (5__) ___ __ __ — maskeli |
| `email` | email | ✖ | E-posta (opsiyonel) |
| `serviceType` | select | ✔ | Hizmet Seçin |
| `vehicleModel` | select veya text | ✖ | Araç Modeli (örn. W213 E200) |
| `date` | date picker | ✔ | Tarih Seçin (`CalendarDays` ikon) |
| `time` | select | ✔ | Saat Seçin |
| `note` | textarea | ✖ | Arıza belirtisi (opsiyonel, 3 satır) |
| `kvkkConsent` | checkbox | ✔ | KVKK aydınlatma metnini okudum, onaylıyorum |
| `honeypot` | hidden | — | Spam koruması (`website` adlı görünmez alan) |

**Not:** Tasarımdaki minimal görünümü korumak için `email`, `vehicleModel`, `note` alanları **"Detay ekle ▾"** başlıklı bir accordion içinde gizlenebilir. Görsel sadelik korunur, veri kalitesi artar.

**Submit:** `primary-dark` `lg` tam genişlik → **Randevu Oluştur**
**Alt metin:** `text-[11px] text-fg-light-subtle mt-3` → "Talebiniz 1 iş saati içinde telefonla teyit edilir."

**State'ler:**
- `idle` → normal
- `submitting` → buton spinner + `disabled`, alanlar `readonly`
- `success` → form yerine başarı kartı: `CheckCircle2` ikon + "Randevu talebiniz alındı" + talep no + "Sizi en kısa sürede arayacağız"
- `error` → form üstünde `role="alert"` hata kutusu + telefon numarası fallback ("Dilerseniz doğrudan 0212 XXX XX XX numarasından ulaşabilirsiniz")

## 6.7 Servis Süreci 🆕

```
bg-paper py-16 lg:py-20 border-t border-line-light
```

`SectionHeading` — eyebrow: `NASIL ÇALIŞIYORUZ`, title: **Servis Sürecimiz**, align: center

4 adım, `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`, desktop'ta adımlar arası bağlayıcı çizgi (`hidden lg:block absolute h-px bg-line-light`).

| Adım | Başlık | Açıklama |
|---|---|---|
| 01 | Randevu ve Ön Görüşme | Formu doldurun ya da bizi arayın; arıza belirtinizi dinleyip uygun zamanı planlayalım. |
| 02 | Detaylı Arıza Tespiti | XENTRY ve ölçüm cihazlarıyla tüm kontrol üniteleri taranır, arızanın kaynağı belirlenir. |
| 03 | Onaylı İşlem ve Onarım | Tespit ve maliyet size iletilir; onayınız olmadan hiçbir işlem yapılmaz. |
| 04 | Test ve Teslim | Yol testi ve son kontrol sonrası aracınız raporuyla birlikte teslim edilir. |

Adım kartı: numara `text-[40px] serif text-fg-light-subtle/50 leading-none`, başlık `text-h4 mt-3`, açıklama `text-body-sm text-fg-light-muted mt-2`.

## 6.8 Müşteri Yorumları 🆕

```
bg-paper-card py-16 lg:py-20
```
- `SectionHeading` — title: **Müşterilerimiz Ne Diyor?**, action: Google işletme profiline link
- Embla slider, desktop 3 kart görünür, tablet 2, mobil 1
- Kart: `border border-line-light rounded-md p-6`
  - 5 yıldız (`Star` filled, 14px)
  - Yorum: `text-body-sm text-fg-light leading-relaxed` (maks 4 satır, `line-clamp-4`)
  - Alt: isim (`text-[13px] font-semibold`) + araç modeli (`text-[11.5px] text-fg-light-subtle`)
- Alt bilgi: "Google üzerinde 4.8/5 — 240+ değerlendirme" + Google logosu

> ⚠️ Yorumlar gerçek olmalı. Sahte yorum hem etik hem yasal (TKHK) sorun yaratır. Google Places API ile canlı çekmek en temizi (Faz 2).

## 6.9 SSS (Accordion) 🆕

```
bg-paper py-16 lg:py-20
Container size="narrow"
```
shadcn `Accordion`, `type="single" collapsible`. Öğe: `border-b border-line-light`, tetikleyici `text-[15px] font-medium py-5 text-left`, ikon `Plus` → `Minus` rotasyonlu.

**Sorular (§8.6'da cevaplarıyla birlikte):**
1. Yetkili servis dışında yaptırdığım işlem garantimi etkiler mi?
2. Motor beyni (ECU) arızası nasıl anlaşılır?
3. XENTRY diagnostik ne kadar sürer, ücretli mi?
4. Randevusuz gelebilir miyim?
5. Orijinal parça kullanıyor musunuz?
6. Arızanın maliyetini önceden öğrenebilir miyim?
7. Aracımı bırakırsam ikame araç veriliyor mu?
8. Hangi Mercedes-Benz modellerine hizmet veriyorsunuz?

`FAQPage` JSON-LD bu bölümle **birebir aynı** metinleri içermeli.

## 6.10 Kapanış CTA + Konum 🆕

```
bg-ink py-16 lg:py-20
grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
```
- Sol: `h2` **Aracınız için doğru adres.** + paragraf + 2 CTA (`Randevu Al` primary, `Hemen Ara` outline-light) + çalışma saatleri satırı (`Clock` ikon, "Pzt–Cmt 08:30–18:30")
- Sağ: `MapEmbed` — `aspect-[16/10] rounded-md overflow-hidden border border-line-dark`
  - **Lazy yükleme:** önce statik harita görseli + üzerinde play/pin overlay; tıklanınca gerçek iframe yüklenir (performans + gizlilik)
  - Altında `Yol Tarifi Al ›` linki → Google Maps yön tarifi URL'i

## 6.11 Footer

```
bg-ink border-t border-line-dark pt-14 pb-0
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 lg:gap-14
```

**Kolon 1 — Bize Ulaşın:**
- `h3` (text-h4): Bize Ulaşın
- 3 satır: Adres / Telefon / E-posta — her biri `IconCircle size={28}` + etiket(11px `text-fg-dark-subtle`) + değer(13px beyaz)
- Telefon `tel:`, e-posta `mailto:` linkli
- Sağda küçük harita önizleme (`w-[200px] aspect-[16/9] rounded-sm`) — `/iletisim`'e link

**Kolon 2 — Marka:**
- Logo bloğu (header ile aynı)
- 2 satır kısa açıklama: "Mercedes-Benz araçlarda elektronik arıza tespiti ve motor beyni çözümlerinde uzman servis."
- Sosyal ikonlar: Facebook, Instagram, YouTube, LinkedIn — `size 16`, `text-fg-dark-subtle hover:text-white`, her birine `aria-label`

**Kolon 3 — Hızlı Linkler:**
Anasayfa / Hizmetlerimiz / Servis Randevusu / Kampanyalar / SSS / İletişim
`text-[13px] text-fg-dark-muted hover:text-white`, `space-y-2.5`

**Alt bar:**
```
mt-12 border-t border-line-dark py-5
flex flex-col sm:flex-row justify-between gap-3
text-[11px] text-fg-dark-subtle
```
Sol: `© {yıl} Koluman İstanbul Mercedes-Benz Yetkili Servisi. Tüm hakları saklıdır.`
Sağ: `Gizlilik Politikası` · `KVKK Aydınlatma Metni` · `Çerez Politikası`

---

# 7. Responsive Davranış Matrisi

## 7.1 Breakpoint'ler

| Ad | Genişlik | Hedef cihaz |
|---|---|---|
| `base` | 0–639px | Telefon |
| `sm` | 640px+ | Büyük telefon / küçük tablet |
| `md` | 768px+ | Tablet dikey |
| `lg` | 1024px+ | Tablet yatay / küçük laptop |
| `xl` | 1280px+ | Masaüstü |
| `2xl` | 1536px+ | Geniş ekran (container sabit kalır) |

## 7.2 Bölüm bazlı davranış

| Bölüm | Mobil (base) | Tablet (md) | Desktop (lg+) |
|---|---|---|---|
| **Header** | Logo + hamburger; CTA gizli | Logo + CTA + hamburger | Tam nav + CTA |
| **Hero** | `min-h-[520px]`, metin alta yaslı, alttan gradient, CTA'lar tam genişlik dikey | `min-h-[560px]`, sol hizalı | `min-h-[680px]`, sol hizalı, oklar görünür |
| **Hero H1** | 34px | 44px | 56px |
| **Trust Bar** | Yatay scroll, snap | 3 kolon 2 satır | 5 kolon tek satır |
| **Hizmetler** | 1 kolon (kartlar tam genişlik) | 2 kolon | 4 kolon |
| **Stats** | 2×2 | 2×2 | 4×1 |
| **Neden Biz + Form** | Dikey (Neden Biz üstte) | Dikey | Yan yana `0.85fr / 1.15fr` |
| **Form görseli** | Gizli | Gizli | Görünür |
| **Servis Süreci** | 1 kolon dikey timeline (sol çizgi) | 2×2 | 4 kolon yatay |
| **Yorumlar** | 1 kart | 2 kart | 3 kart |
| **SSS** | Tam genişlik | Narrow | Narrow |
| **Kapanış CTA** | Dikey, harita altta | Dikey | Yan yana |
| **Footer** | Tek kolon, accordion olabilir | 2 kolon | 3 kolon |
| **Mobil Action Bar** | Görünür | Görünür | Gizli |

## 7.3 Mobil özel kurallar

- **Dokunma hedefi:** minimum 44×44px (WCAG 2.5.8) — nav öğeleri, sosyal ikonlar, dots
- **Form:** `input` `font-size >= 16px` (iOS otomatik zoom'unu engeller)
- **Telefon alanı:** `type="tel" inputMode="numeric" autoComplete="tel"`
- **Sticky bar** ile footer çakışmasın: `<body className="pb-16 lg:pb-0">`
- Yatay taşma testi: `html { overflow-x: clip }` + her bölümde `overflow-hidden` kontrolü
- Hero görseli mobilde farklı kırpma gerektirir → `object-position: 65% center` ve gerekirse ayrı mobil görsel (`<picture>` / Next `Image` + `sizes`)

---

# 8. Hazır İçerik Metinleri (TR)

> Tüm metinler kullanıma hazırdır. `[KÖŞELİ PARANTEZ]` içindekiler Koluman'ın gerçek verisiyle doldurulmalıdır.

## 8.1 Marka & künye

```
İşletme adı      : Koluman İstanbul
Alt başlık       : Mercedes-Benz Yetkili Servisi
Adres            : [Huzur Oto Mah. Atatürk Bulvarı No: 123 Başakşehir / İstanbul]
Telefon          : [0212 123 45 67]
WhatsApp         : [0532 123 45 67]
E-posta          : [info@kolumanistanbul.com.tr]
Çalışma saatleri : Pazartesi–Cuma 08:30–18:30 · Cumartesi 09:00–16:00 · Pazar Kapalı
```

## 8.2 Hero slide metinleri

| Slide | H1 | Alt metin |
|---|---|---|
| 1 | Mercedes-Benz'iniz emin ellerde. | Motor beyni ve elektronik arızalarda uzman teşhis ve kalıcı çözüm. |
| 2 | Elektronik arızada doğru teşhis. | XENTRY donanımı ve orijinal yazılım erişimiyle arızanın kaynağına iniyoruz. |
| 3 | Yetkili servis standardı, uzman ekip. | Mercedes-Benz eğitimli teknisyenler, orijinal parça ve süreç güvencesi. |

CTA'lar (tüm slide'larda sabit): **Servis Randevusu Al** · **Hizmetlerimizi İnceleyin**

## 8.3 Trust bar

1. Yetkili Servis Güvencesi
2. Orijinal Yazılım ve Teknik Bilgi
3. Uzman Elektronik Teknisyenleri
4. Gelişmiş Arıza Tespit Teknolojileri
5. Mercedes-Benz Standartlarında Hizmet

## 8.4 Hizmet açıklamaları (detay sayfaları için)

### Motor Beyni (ECU) Arıza Tespit ve Çözüm
> Motor kontrol ünitesi (ECU), aracınızın beynidir; yakıt, ateşleme ve emisyon sistemlerini milisaniyeler içinde yönetir. Nem, voltaj dalgalanması, hatalı müdahale veya yazılım bozulması sonucu oluşan ECU arızaları çoğu zaman "çalışmıyor" olarak değil, düzensiz rölanti, güç kaybı, arıza lambası ve haberleşme hatası olarak kendini gösterir.
>
> Koluman İstanbul'da ECU arızalarında önce **doğru teşhis** yapılır: ünitenin gerçekten arızalı olup olmadığı, sorunun besleme hattından mı yoksa yazılımdan mı kaynaklandığı ölçümle belirlenir. Gereksiz ünite değişimi önerilmez.

**Kapsam:** ECU okuma ve arıza kaydı analizi · Devre ve besleme ölçümleri · Kart seviyesinde onarım · Yeniden programlama (flash) · Araca kodlama ve adaptasyon · İşlem sonrası yol testi

### Mercedes-Benz XENTRY ile Profesyonel Diagnostik
> XENTRY, Mercedes-Benz'in kendi geliştirdiği resmî teşhis sistemidir. Piyasadaki genel amaçlı cihazların erişemediği kontrol ünitelerini okur, üreticinin tanımladığı test adımlarını uygular ve arıza kodunun ardındaki gerçek nedeni gösterir.
>
> Tüm kontrol ünitelerinin tam taraması, canlı veri analizi ve yönlendirilmiş test (guided test) ile arızayı tahmin etmeden buluyoruz.

**Kapsam:** Tüm ECU'ların tam taraması · Canlı veri ve aktüatör testi · Yönlendirilmiş arıza takibi · SCN kodlama · Detaylı yazılı rapor

### Elektronik Sistem Arıza Tespiti
> Modern bir Mercedes-Benz'de 70'in üzerinde kontrol ünitesi CAN ve LIN hatları üzerinden haberleşir. Tek bir kablo teması, korozyona uğramış bir soket ya da zayıf bir kütle bağlantısı, birbiriyle ilgisiz görünen onlarca arıza kodu üretebilir.
>
> Bu tür arızalarda parça değiştirerek ilerlemek hem pahalı hem sonuçsuzdur. Osiloskop ve devre ölçümleriyle hattı fiziksel olarak takip ediyor, arızayı kaynağında çözüyoruz.

**Kapsam:** CAN/LIN hat analizi · Kablo tesisatı ve soket kontrolü · Sensör ve aktüatör ölçümü · Parazitik akım (kaçak akım) tespiti · Aydınlatma ve konfor sistemleri

### Kodlama, Yazılım Güncelleme ve Adaptasyon
> Mercedes-Benz araçlarda parça değişimi tek başına yeterli değildir; yeni parçanın araca tanıtılması, VIN'e göre kodlanması ve gerekiyorsa yazılımının güncellenmesi gerekir. Bu adım atlandığında parça çalışmaz veya araç arıza lambası yakar.
>
> Orijinal yazılım erişimiyle kodlama, adaptasyon ve güncelleme işlemlerini üretici prosedürüne uygun yapıyoruz.

**Kapsam:** SCN kodlama · Yazılım güncelleme · Parça sonrası adaptasyon · Anahtar ve immobilizer işlemleri · Donanım (opsiyon) aktivasyonu · Enjektör/şanzıman adaptasyonu

## 8.5 Neden Biz

**Başlık:** Neden Bizi Tercih Etmelisiniz?

**Paragraf:**
> Mercedes-Benz araçlarda motor beyni ve elektronik arızalarda tespit ve çözümde uzman, güvenilir ve teknoloji odaklı hizmet sunuyoruz. Arızayı tahmin etmiyor, ölçüyoruz.

**Maddeler:**
- Mercedes-Benz odaklı uzman elektronik servis
- Gelişmiş arıza tespit ve ölçüm teknolojileri
- Orijinal yazılım ve teknik bilgiye erişim
- Kalıcı ve güvenilir çözüm anlayışı
- Aracınız için en doğru, en güvenli hizmet

**CTA:** Daha Fazla Bilgi

## 8.6 SSS — soru ve cevaplar

**1. Yetkili servis dışında yaptırdığım işlem garantimi etkiler mi?**
Türkiye'de yürürlükteki mevzuat gereği, aracınızın bakımını yetkili servis dışında yaptırmanız garantinizi kendiliğinden geçersiz kılmaz; ancak yapılan işlemin doğrudan neden olduğu arızalar garanti kapsamı dışında kalabilir. Bu nedenle orijinal parça kullanımı, üretici prosedürüne uygun işlem ve belgelendirme bizim için standarttır. Tüm işlemleriniz faturalandırılır ve kayıt altına alınır.

**2. Motor beyni (ECU) arızası nasıl anlaşılır?**
En sık görülen belirtiler: aracın zor çalışması veya hiç çalışmaması, rölantide düzensizlik, ani güç kaybı, arıza (motor) lambasının sürekli yanması, diagnostik cihazın üniteyle haberleşememesi ve yakıt tüketiminde açıklanamayan artış. Bu belirtilerin birçoğu ECU dışındaki nedenlerden de kaynaklanabilir; bu yüzden ünite değişimi önerilmeden önce mutlaka ölçüm yapılmalıdır.

**3. XENTRY diagnostik ne kadar sürer, ücretli mi?**
Standart tam tarama ve rapor işlemi ortalama 45–60 dakika sürer. Arızanın karmaşıklığına göre yönlendirilmiş test süresi uzayabilir. Diagnostik işlemi ücretlidir; onarım tarafımızda yapıldığında bu ücret işlem bedelinden mahsup edilir. Güncel ücret için lütfen bizi arayın.

**4. Randevusuz gelebilir miyim?**
Gelebilirsiniz, ancak yoğunluğa bağlı olarak bekleme süresi oluşabilir. Elektronik arıza tespiti cihaz ve teknisyen planlaması gerektirdiği için randevulu gelmeniz hem işlem süresini kısaltır hem de aynı gün teslim ihtimalini artırır.

**5. Orijinal parça kullanıyor musunuz?**
Evet. Standart uygulamamız Mercedes-Benz orijinal parça kullanmaktır. Belirli durumlarda orijinal muadil (OEM) alternatifi mevcutsa, farkı ve garanti koşullarını açıkça belirterek size seçenek sunarız. Onayınız olmadan parça değişimi yapılmaz.

**6. Arızanın maliyetini önceden öğrenebilir miyim?**
Arıza tespiti tamamlandıktan sonra yapılacak işlemler, kullanılacak parçalar ve toplam maliyet size yazılı olarak iletilir. Onayınız alınmadan hiçbir işleme başlanmaz. Tespit sırasında ek bir arıza ortaya çıkarsa tekrar bilgilendirilirsiniz.

**7. Aracımı bırakırsam ikame araç veriliyor mu?**
[Uygunluk durumuna göre doldurulacak: ikame araç hizmetimiz mevcuttur / belirli işlemlerde sunulmaktadır.] Detay için randevu sırasında bilgi verebiliriz.

**8. Hangi Mercedes-Benz modellerine hizmet veriyorsunuz?**
A, B, C, E, S serisi; CLA, CLS, GLA, GLB, GLC, GLE, GLS; SLK/SLC; V-Class, Vito ve Sprinter dâhil binek ve hafif ticari Mercedes-Benz modellerinin tamamına hizmet veriyoruz. AMG modellerinde de elektronik arıza tespiti yapılmaktadır.

## 8.7 Kapanış CTA

**Başlık:** Aracınız için doğru adres.
**Metin:** Arıza belirtisini tarif edin, gerisini bize bırakın. Randevunuzu bugün oluşturun ya da doğrudan arayın; teknisyenimiz sizi yönlendirsin.
**CTA:** Servis Randevusu Al · Hemen Ara

## 8.8 Mikro metinler (UI copy)

| Yer | Metin |
|---|---|
| Form başlığı | Servis Randevusu |
| Form açıklaması | Aracınızın elektronik arızaları için hızlı ve kolayca randevu oluşturun. |
| Submit | Randevu Oluştur |
| Submit (yükleniyor) | Gönderiliyor… |
| Form alt notu | Talebiniz 1 iş saati içinde telefonla teyit edilir. |
| Başarı başlığı | Randevu talebiniz alındı. |
| Başarı metni | Talep numaranız: **#{id}**. Ekibimiz en kısa sürede sizi arayarak randevunuzu teyit edecek. |
| Hata | Talebiniz gönderilemedi. Lütfen tekrar deneyin veya bizi [0212 123 45 67] numarasından arayın. |
| KVKK onayı | Kişisel verilerimin işlenmesine ilişkin [Aydınlatma Metni](/kvkk-aydinlatma-metni)'ni okudum ve kabul ediyorum. |
| Boş durum (kampanya) | Şu anda aktif kampanyamız bulunmuyor. Güncel fırsatlar için bizi takip edin. |
| 404 başlık | Aradığınız sayfa bulunamadı. |
| 404 metin | Sayfa taşınmış veya kaldırılmış olabilir. Anasayfaya dönebilir ya da hizmetlerimizi inceleyebilirsiniz. |

---

# 9. SEO, Schema.org ve Yerel Arama

## 9.1 Sayfa bazlı meta veriler

| Sayfa | Title (≤60 karakter) | Description (≤155 karakter) |
|---|---|---|
| `/` | Mercedes-Benz Yetkili Servisi İstanbul \| Koluman | Mercedes-Benz motor beyni (ECU) ve elektronik arıza tespitinde uzman servis. XENTRY diagnostik, kodlama ve yazılım güncelleme. Hemen randevu alın. |
| `/hizmetler` | Mercedes-Benz Servis Hizmetleri \| Koluman İstanbul | ECU onarımı, XENTRY diagnostik, elektronik arıza tespiti, kodlama ve yazılım güncelleme. Tüm Mercedes-Benz servis hizmetlerimiz. |
| `/hizmetler/motor-beyni-ecu-ariza-tespiti` | Mercedes Motor Beyni (ECU) Arıza Tespiti ve Onarımı | Mercedes-Benz ECU arızalarında ölçüme dayalı teşhis, kart seviyesinde onarım, yeniden programlama ve adaptasyon. İstanbul. |
| `/hizmetler/xentry-diagnostik` | Mercedes XENTRY Diagnostik Servisi \| İstanbul | Orijinal XENTRY sistemiyle tüm kontrol ünitelerinin taranması, canlı veri analizi ve yönlendirilmiş arıza tespiti. |
| `/randevu` | Servis Randevusu Oluştur \| Koluman İstanbul | Mercedes-Benz aracınız için online servis randevusu oluşturun. Hızlı teyit, uzman teknisyen, orijinal parça. |
| `/kampanyalar` | Mercedes-Benz Servis Kampanyaları \| Koluman | Güncel bakım ve servis kampanyalarımızı inceleyin. Fırsatlardan yararlanmak için randevu oluşturun. |
| `/hakkimizda` | Hakkımızda \| Koluman İstanbul Mercedes-Benz Servisi | Mercedes-Benz elektronik arıza tespiti ve motor beyni çözümlerinde uzman ekibimiz ve teknolojik altyapımız. |
| `/iletisim` | İletişim ve Konum \| Koluman İstanbul | Adres, telefon, çalışma saatleri ve yol tarifi. Mercedes-Benz servisimize ulaşın. |
| `/sss` | Sıkça Sorulan Sorular \| Mercedes-Benz Servis | Garanti, diagnostik süresi, orijinal parça ve maliyet hakkında en çok sorulan soruların yanıtları. |

## 9.2 Anahtar kelime haritası

| Sayfa | Birincil | İkincil |
|---|---|---|
| `/` | mercedes yetkili servis istanbul | mercedes servis istanbul, mercedes elektronik servis |
| ECU sayfası | mercedes motor beyni arızası | ecu onarımı, motor beyni tamiri, mercedes ecu fiyat |
| XENTRY sayfası | mercedes xentry diagnostik | mercedes arıza tespit cihazı, mercedes beyin okutma |
| Elektronik sayfası | mercedes elektronik arıza | mercedes can hattı arızası, mercedes kaçak akım |
| Kodlama sayfası | mercedes kodlama | mercedes yazılım güncelleme, scn kodlama |
| Blog (Faz 3) | uzun kuyruk | "mercedes p0299 hatası", "mercedes rölanti düzensizliği nedenleri" |

> **Strateji notu:** Yerel + teknik uzun kuyruk kombinasyonu en yüksek dönüşümü verir. "mercedes motor beyni arızası belirtileri" gibi bilgi amaçlı aramalar blog ile, "mercedes servis başakşehir" gibi ticari aramalar hizmet/konum sayfalarıyla karşılanmalı.

## 9.3 Teknik SEO checklist

- [ ] `app/sitemap.ts` — dinamik sitemap (hizmetler + kampanyalar dahil)
- [ ] `app/robots.ts` — `Allow: /`, sitemap referansı
- [ ] Her sayfada tekil `<h1>`
- [ ] `metadataBase` + canonical URL'ler
- [ ] `lang="tr"` (`<html lang="tr">`)
- [ ] OpenGraph + Twitter Card (`opengraph-image.tsx` ile dinamik OG görsel)
- [ ] Görsel `alt` metinleri betimleyici ve anahtar kelime doğal
- [ ] Dahili linkleme: her hizmet detayı ↔ ilgili diğer hizmetler
- [ ] Breadcrumb (görsel + `BreadcrumbList` schema)
- [ ] 301 yönlendirmeler (eski site varsa `next.config.ts` `redirects()`)
- [ ] `www` / `non-www` tek varyanta yönlendirme
- [ ] Core Web Vitals hedefleri (§12)

## 9.4 Schema.org JSON-LD

**a) `AutoRepair` (LocalBusiness alt tipi) — tüm sayfalarda, layout'ta:**

```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://kolumanistanbul.com.tr/#business",
  "name": "Koluman İstanbul — Mercedes-Benz Yetkili Servisi",
  "image": "https://kolumanistanbul.com.tr/images/og/kapak.jpg",
  "logo": "https://kolumanistanbul.com.tr/images/logo.png",
  "url": "https://kolumanistanbul.com.tr",
  "telephone": "+90-212-123-45-67",
  "email": "info@kolumanistanbul.com.tr",
  "priceRange": "₺₺",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Huzur Oto Mah. Atatürk Bulvarı No: 123",
    "addressLocality": "Başakşehir",
    "addressRegion": "İstanbul",
    "postalCode": "34000",
    "addressCountry": "TR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 41.0000, "longitude": 28.8000 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:30", "closes": "18:30" },
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
  ],
  "areaServed": [
    { "@type": "City", "name": "İstanbul" }
  ],
  "brand": { "@type": "Brand", "name": "Mercedes-Benz" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servis Hizmetleri",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motor Beyni (ECU) Arıza Tespit ve Çözüm" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "XENTRY Diagnostik" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elektronik Sistem Arıza Tespiti" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kodlama, Yazılım Güncelleme ve Adaptasyon" } }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/...",
    "https://www.facebook.com/...",
    "https://www.linkedin.com/company/...",
    "https://www.youtube.com/@..."
  ]
}
```

**b) `Service` — her hizmet detay sayfasında**
**c) `FAQPage` — SSS bölümü/sayfasında** (metinler birebir aynı olmalı)
**d) `BreadcrumbList` — tüm iç sayfalarda**
**e) `WebSite` + `SearchAction` — site içi arama eklenirse**

> ⚠️ `AggregateRating` schema'sını **yalnızca gerçek, doğrulanabilir yorumlarınız varsa** ekleyin. Uydurma puan Google manuel işlem cezası nedenidir.

## 9.5 Yerel SEO (site dışı ama kritik)

- Google Business Profile: kategori **"Oto tamir servisi"** + ikincil **"Mercedes-Benz bayi"**
- NAP tutarlılığı: Ad-Adres-Telefon sitede, GBP'de ve dizinlerde **birebir aynı yazım**
- GBP'de hizmet listesi, foto galerisi, çalışma saatleri güncel
- Yorum toplama akışı: servis teslimi sonrası SMS/QR ile yorum daveti
- Yerel dizinler: sahibinden servis rehberi, oto servis dizinleri, Yandex Business

---

# 10. Randevu Sistemi — Veri Modeli & Akış

## 10.1 Zod şeması

```ts
// lib/validations/appointment.ts
import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string()
    .trim()
    .min(3, "Lütfen ad ve soyadınızı girin.")
    .max(80, "Ad soyad çok uzun."),

  phone: z.string()
    .trim()
    .regex(/^(?:\+90|0)?5\d{9}$/, "Geçerli bir cep telefonu numarası girin."),

  email: z.string().trim().email("Geçerli bir e-posta girin.").optional().or(z.literal("")),

  serviceType: z.enum([
    "motor-beyni-ecu",
    "xentry-diagnostik",
    "elektronik-ariza",
    "kodlama-yazilim",
    "periyodik-bakim",
    "diger",
  ], { errorMap: () => ({ message: "Lütfen bir hizmet seçin." }) }),

  vehicleModel: z.string().trim().max(60).optional().or(z.literal("")),

  date: z.string().refine((v) => {
    const d = new Date(v);
    const today = new Date(); today.setHours(0,0,0,0);
    return !Number.isNaN(d.getTime()) && d >= today;
  }, "Geçmiş bir tarih seçilemez."),

  time: z.enum(["09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"], {
    errorMap: () => ({ message: "Lütfen bir saat seçin." }),
  }),

  note: z.string().trim().max(600, "Not en fazla 600 karakter olabilir.").optional().or(z.literal("")),

  kvkkConsent: z.literal(true, {
    errorMap: () => ({ message: "Devam etmek için aydınlatma metnini onaylamanız gerekir." }),
  }),

  // Spam koruması — dolu gelirse istek sessizce reddedilir
  website: z.string().max(0).optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
```

## 10.2 Hizmet ve saat seçenekleri

```ts
// lib/data/appointment-options.ts
export const serviceOptions = [
  { value: "motor-beyni-ecu",    label: "Motor Beyni (ECU) Arıza Tespiti" },
  { value: "xentry-diagnostik",  label: "XENTRY Diagnostik" },
  { value: "elektronik-ariza",   label: "Elektronik Sistem Arıza Tespiti" },
  { value: "kodlama-yazilim",    label: "Kodlama / Yazılım Güncelleme" },
  { value: "periyodik-bakim",    label: "Periyodik Bakım" },
  { value: "diger",              label: "Diğer / Emin Değilim" },
] as const;

export const timeSlots = [
  "09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00",
] as const;
```

**Tarih seçici kuralları:**
- Bugünden önceki tarihler kapalı
- Pazar kapalı (`getDay() === 0`)
- Resmî tatiller `lib/data/holidays.ts` üzerinden kapatılabilir
- Maksimum 60 gün ileri
- `date-fns` + `tr` locale, shadcn `Calendar` (react-day-picker)

## 10.3 Gönderim akışı

```
[Kullanıcı formu doldurur]
        ↓
[Client: zod ile anlık doğrulama (onBlur + onSubmit)]
        ↓
[Server Action: submitAppointment(formData)]
        ↓
  ├─ Honeypot kontrolü → doluysa sahte başarı döndür
  ├─ Rate limit (IP başına 5 istek / 10 dk)
  ├─ Sunucu tarafı zod doğrulaması (client'a güvenme)
  ├─ Talep no üret: KLM-{YYMMDD}-{4 haneli}
  ├─ Kaydet (Faz 1: e-posta + Faz 2: veritabanı)
  ├─ Bildirim gönder:
  │    ├─ Servise e-posta (Resend) — tüm detaylar + tıklanabilir tel linki
  │    ├─ Müşteriye e-posta (varsa) — talep özeti + talep no
  │    └─ (Opsiyonel) WhatsApp/SMS bildirimi — Netgsm / Twilio
  └─ Analytics event: `appointment_submitted`
        ↓
[UI: success state + talep numarası]
```

**Server Action iskeleti:**
```ts
// app/actions/appointment.ts
"use server";

import { appointmentSchema } from "@/lib/validations/appointment";
import { sendAppointmentEmails } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export type ActionState =
  | { status: "idle" }
  | { status: "success"; referenceId: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

export async function submitAppointment(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const ip = (await headers()).get("x-forwarded-for") ?? "unknown";
  if (!(await rateLimit(ip))) {
    return { status: "error", message: "Çok fazla deneme yaptınız. Lütfen birkaç dakika sonra tekrar deneyin." };
  }

  const raw = Object.fromEntries(formData);
  if (raw.website) return { status: "success", referenceId: "KLM-000000-0000" }; // honeypot

  const parsed = appointmentSchema.safeParse({ ...raw, kvkkConsent: raw.kvkkConsent === "on" });
  if (!parsed.success) {
    return {
      status: "error",
      message: "Lütfen işaretli alanları kontrol edin.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const referenceId = generateReferenceId();
  try {
    await sendAppointmentEmails(parsed.data, referenceId);
  } catch {
    return { status: "error", message: "Talebiniz gönderilemedi. Lütfen bizi telefonla arayın." };
  }
  return { status: "success", referenceId };
}
```

Form tarafında `useActionState` + `useFormStatus` kullanılır — JS kapalıyken bile progressive enhancement ile çalışır.

## 10.4 Faz 2: Gerçek randevu takvimi

Faz 1'de form yalnızca **talep** oluşturur (servis telefonla teyit eder). Faz 2'de:

- **Veritabanı:** Postgres (Neon/Supabase) + Drizzle ORM
- `appointments` tablosu: `id, referenceId, fullName, phone, email, serviceType, vehicleModel, date, timeSlot, note, status, createdAt, source`
- `status`: `pending | confirmed | completed | cancelled | no_show`
- **Kapasite kontrolü:** her saat dilimi için maks. N randevu; dolan slotlar UI'da devre dışı
- **Admin paneli:** `/admin` (auth korumalı) — randevu listesi, durum değiştirme, takvim görünümü
- **Hatırlatma:** randevudan 24 saat önce otomatik SMS/e-posta (cron)

---

# 11. Teknik Mimari & Dosya Yapısı

## 11.1 Bağımlılıklar

```jsonc
{
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4",
    "lucide-react": "latest",
    "embla-carousel-react": "^8",
    "embla-carousel-autoplay": "^8",
    "react-hook-form": "^7",
    "@hookform/resolvers": "^3",
    "zod": "^3",
    "date-fns": "^4",
    "react-day-picker": "^9",
    "class-variance-authority": "^0.7",
    "clsx": "^2",
    "tailwind-merge": "^2",
    "resend": "^4",
    "@radix-ui/react-accordion": "latest",
    "@radix-ui/react-navigation-menu": "latest",
    "@radix-ui/react-select": "latest",
    "@radix-ui/react-dialog": "latest",
    "@radix-ui/react-popover": "latest",
    "@radix-ui/react-checkbox": "latest",
    "@radix-ui/react-label": "latest",
    "@radix-ui/react-slot": "latest"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^22",
    "@types/react": "^19",
    "eslint": "^9",
    "eslint-config-next": "^15",
    "prettier": "^3",
    "prettier-plugin-tailwindcss": "^0.6"
  }
}
```

**Bilinçli olarak kullanılmayanlar:** ağır animasyon kütüphaneleri (framer-motion yerine CSS transitions + IntersectionObserver — bundle bütçesi kritik), UI framework'leri (MUI/Chakra — Tailwind ile çakışır), moment.js (date-fns yeterli).

## 11.2 Dosya yapısı

```
koluman-istanbul/
├── app/
│   ├── layout.tsx                    # Root layout, fontlar, JSON-LD, header/footer
│   ├── page.tsx                      # Anasayfa (11 bölüm)
│   ├── globals.css                   # Tailwind v4 @theme + base katmanı
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.tsx
│   ├── actions/
│   │   ├── appointment.ts
│   │   └── contact.ts
│   ├── hizmetler/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── randevu/page.tsx
│   ├── kampanyalar/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── hakkimizda/page.tsx
│   ├── iletisim/page.tsx
│   ├── sss/page.tsx
│   ├── gizlilik-politikasi/page.tsx
│   ├── kvkk-aydinlatma-metni/page.tsx
│   └── cerez-politikasi/page.tsx
│
├── components/
│   ├── ui/                           # shadcn/ui + özel primitive'ler
│   │   ├── button.tsx  container.tsx  section-heading.tsx  icon-circle.tsx
│   │   ├── input.tsx   select.tsx     textarea.tsx  checkbox.tsx  label.tsx
│   │   ├── accordion.tsx  calendar.tsx  popover.tsx  dialog.tsx  badge.tsx
│   │   └── reveal.tsx
│   ├── layout/
│   │   ├── site-header.tsx  desktop-nav.tsx  services-mega-menu.tsx
│   │   ├── mobile-nav-drawer.tsx  site-footer.tsx  mobile-action-bar.tsx
│   │   └── logo.tsx
│   ├── sections/
│   │   ├── hero-slider.tsx  trust-bar.tsx  services-grid.tsx  stats-band.tsx
│   │   ├── why-us.tsx  appointment-form.tsx  process-timeline.tsx
│   │   ├── testimonial-slider.tsx  faq-accordion.tsx  closing-cta.tsx
│   ├── cards/
│   │   ├── service-card.tsx  stat-card.tsx  testimonial-card.tsx
│   │   ├── campaign-card.tsx  process-step.tsx
│   └── shared/
│       ├── map-embed.tsx  phone-link.tsx  json-ld.tsx
│       ├── cookie-consent.tsx  whatsapp-fab.tsx  mb-star.tsx
│
├── lib/
│   ├── site-config.ts                # ★ Tek doğruluk kaynağı: NAP, sosyal, saatler
│   ├── utils.ts                      # cn()
│   ├── email.ts                      # Resend şablonları
│   ├── rate-limit.ts
│   ├── seo.ts                        # metadata yardımcıları
│   ├── schema.ts                     # JSON-LD üreticileri
│   ├── data/
│   │   ├── hero-slides.ts  services.ts  trust-items.ts  stats.ts
│   │   ├── process-steps.ts  faqs.ts  testimonials.ts
│   │   ├── appointment-options.ts  nav.ts
│   └── validations/
│       ├── appointment.ts  contact.ts
│
├── public/
│   ├── images/
│   │   ├── hero/       hero-01-bayi.webp … hero-03-atolye.webp
│   │   ├── services/   ecu.webp  xentry.webp  elektronik.webp  kodlama.webp
│   │   ├── about/      teknisyen-xentry.webp  atolye.webp
│   │   └── og/         kapak.jpg
│   ├── brand/          mb-star.svg  koluman-logo.svg
│   └── favicon.ico, icon.svg, apple-icon.png, site.webmanifest
│
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── .env.example
└── README.md
```

## 11.3 `lib/site-config.ts` — tek doğruluk kaynağı

```ts
export const siteConfig = {
  name: "Koluman İstanbul",
  tagline: "Mercedes-Benz Yetkili Servisi",
  url: "https://kolumanistanbul.com.tr",
  description:
    "Mercedes-Benz motor beyni (ECU) ve elektronik arıza tespitinde uzman servis. XENTRY diagnostik, kodlama ve yazılım güncelleme.",
  contact: {
    phone: "+902121234567",
    phoneDisplay: "0212 123 45 67",
    whatsapp: "+905321234567",
    email: "info@kolumanistanbul.com.tr",
  },
  address: {
    street: "Huzur Oto Mah. Atatürk Bulvarı No: 123",
    district: "Başakşehir",
    city: "İstanbul",
    postalCode: "34000",
    country: "TR",
    mapsUrl: "https://maps.google.com/?q=...",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=...",
    geo: { lat: 41.0, lng: 28.8 },
  },
  hours: [
    { days: "Pazartesi – Cuma", time: "08:30 – 18:30" },
    { days: "Cumartesi",        time: "09:00 – 16:00" },
    { days: "Pazar",            time: "Kapalı" },
  ],
  social: {
    facebook: "https://facebook.com/...",
    instagram: "https://instagram.com/...",
    youtube: "https://youtube.com/@...",
    linkedin: "https://linkedin.com/company/...",
  },
} as const;
```

> **Kural:** Telefon, adres, e-posta hiçbir bileşende hard-coded yazılmaz. Hepsi buradan okunur. Bu, NAP tutarlılığı (SEO) için de zorunludur.

## 11.4 `.env.example`

```bash
NEXT_PUBLIC_SITE_URL=https://kolumanistanbul.com.tr
RESEND_API_KEY=
APPOINTMENT_NOTIFY_EMAIL=randevu@kolumanistanbul.com.tr
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
# Faz 2
DATABASE_URL=
```

## 11.5 Render stratejisi

| Sayfa | Strateji | Gerekçe |
|---|---|---|
| `/` | Static (SSG) | İçerik nadiren değişir, en hızlı LCP |
| `/hizmetler`, `/hizmetler/[slug]` | SSG + `generateStaticParams` | Sabit içerik |
| `/kampanyalar` | ISR `revalidate: 3600` | Kampanya güncellenebilir |
| `/randevu`, form bölümleri | Client island | Etkileşim gerektirir |
| Server Actions | Dynamic | Form gönderimi |

**Kural:** Sayfaların çoğu server component olmalı. `"use client"` yalnızca slider, form, accordion, mobil menü, count-up gibi gerçekten etkileşimli yapraklarda kullanılır — asla sayfa seviyesinde.

---

# 12. Performans Bütçesi & Görsel Stratejisi

## 12.1 Core Web Vitals hedefleri

| Metrik | Hedef | Kritik eşik |
|---|---|---|
| **LCP** | < 2.0s | < 2.5s |
| **INP** | < 150ms | < 200ms |
| **CLS** | < 0.05 | < 0.1 |
| **TTFB** | < 500ms | < 800ms |
| **Lighthouse Performance** (mobil) | ≥ 90 | ≥ 85 |
| **Lighthouse Accessibility** | 100 | ≥ 95 |
| **Lighthouse SEO** | 100 | ≥ 95 |

## 12.2 Bütçe

| Kaynak | Bütçe |
|---|---|
| İlk JS (gzip) | ≤ 120 KB |
| İlk CSS | ≤ 25 KB |
| Hero görseli | ≤ 180 KB (AVIF/WebP) |
| Hizmet kartı görseli | ≤ 70 KB |
| Toplam ilk yükleme | ≤ 800 KB |
| Font | 2 aile, toplam ≤ 90 KB (variable, `subset: latin-ext`) |

## 12.3 Görsel işleme kuralları

```
Format sırası    : AVIF → WebP → JPEG (Next Image otomatik)
Hero             : 2400×1350 kaynak, sizes="100vw", quality 78
Hizmet kartı     : 800×600 kaynak, sizes="(max-width:640px) 100vw,
                   (max-width:1024px) 50vw, 25vw", quality 80
Form görseli     : 800×1000, sizes="(max-width:768px) 0px, 40vw"
Placeholder      : blurDataURL (statik görsellerde otomatik)
Lazy             : ilk ekran dışındaki her görsel
priority         : yalnızca hero slide 1
```

`next.config.ts`:
```ts
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  minimumCacheTTL: 31536000,
}
```

## 12.4 Font yükleme

```ts
// app/layout.tsx
import { Inter, Newsreader } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],   // latin-ext → Türkçe karakterler
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
```
`<html className={`${inter.variable} ${newsreader.variable}`} lang="tr">`

## 12.5 Diğer performans kuralları

- **Harita:** iframe asla ilk yüklemede gelmez → statik görsel + tıklayınca yükle (facade pattern)
- **Analytics:** `next/script` `strategy="afterInteractive"`, GTM tercih ediliyorsa tek konteyner
- **Embla:** yalnızca slider'ın olduğu route'ta yüklenir (dinamik import gerekmez, zaten küçük)
- **Scroll reveal:** IntersectionObserver, `once: true`, gözlem sonrası `unobserve`
- **CLS önlemi:** her görselde `width/height` veya `fill` + `aspect-ratio` sarmalayıcı; fontlarda `size-adjust` ile fallback eşleme
- **Hero:** `<link rel="preload" as="image">` ilk slide için (Next `priority` bunu yapar)

---

# 13. Erişilebilirlik (WCAG 2.2 AA)

## 13.1 Kontrast doğrulaması

| Kombinasyon | Oran | Durum |
|---|---|---|
| `#FFFFFF` / `#0A0A0A` | 19.6:1 | ✅ AAA |
| `#C4C4C4` / `#0A0A0A` | 11.4:1 | ✅ AAA |
| `#8E8E8E` / `#0A0A0A` | 5.6:1 | ✅ AA (normal metin) |
| `#0F0F0F` / `#F4F4F2` | 17.4:1 | ✅ AAA |
| `#5A5A5A` / `#FFFFFF` | 7.0:1 | ✅ AAA |
| `#9A9A9A` / `#FFFFFF` | 2.8:1 | ⚠️ **Yalnızca placeholder/dekoratif** — gövde metninde kullanma |
| Hero metni / görsel | overlay ile ≥ 4.5:1 | ✅ (overlay zorunlu) |

> **Kritik:** Hero metni doğrudan fotoğraf üzerine binmemeli. Gradient overlay, metnin bulunduğu bölgede en az `rgba(8,8,8,0.78)` opaklık sağlamalı. Her yeni hero görseli eklendiğinde kontrast yeniden kontrol edilmeli.

## 13.2 Checklist

**Yapı & semantik**
- [ ] Tek `<h1>` / sayfa, başlık hiyerarşisi atlamasız (h1→h2→h3)
- [ ] `<header>`, `<nav>`, `<main id="main">`, `<footer>` landmark'ları
- [ ] Skip link (`İçeriğe geç`) — ilk odaklanabilir öğe
- [ ] Liste yapıları gerçek `<ul>/<li>`

**Klavye**
- [ ] Tüm etkileşimli öğeler Tab ile erişilebilir, mantıklı sıra
- [ ] `:focus-visible` her yerde görünür (2px mavi halka)
- [ ] Mobil menü ve modal'da focus trap + Esc ile kapanma
- [ ] Slider ← → tuşlarıyla kontrol edilebilir
- [ ] Klavye tuzağı yok

**Formlar**
- [ ] Her alanın görünür `<label>`'ı var (placeholder label yerine geçmez)
- [ ] Hata mesajları `aria-describedby` ile alana bağlı, `role="alert"`
- [ ] `aria-invalid` hatalı alanlarda
- [ ] `autoComplete` doğru değerlerle (`name`, `tel`, `email`)
- [ ] Zorunlu alanlar `required` + görsel işaret (yalnızca renkle değil)
- [ ] Gönderim sonucu ekran okuyucuya duyurulur (`aria-live="polite"`)

**Görsel & medya**
- [ ] Her `<img>`'de anlamlı `alt`; dekoratiflerde `alt=""`
- [ ] İkon-only butonlarda `aria-label`
- [ ] Renk tek başına bilgi taşımıyor
- [ ] `prefers-reduced-motion` desteği
- [ ] Otomatik slider durdurulabilir (WCAG 2.2.2) — hover/focus'ta durur + dots ile kontrol

**Diğer**
- [ ] `lang="tr"`
- [ ] Sayfa başlıkları benzersiz ve betimleyici
- [ ] Dokunma hedefi ≥ 24×24px (AA) / 44×44px (önerilen)
- [ ] %200 zoom'da yatay scroll yok
- [ ] Link metinleri bağlamsız anlaşılır ("buraya tıklayın" yok)

---

# 14. Analytics & Dönüşüm Ölçümü

## 14.1 İzlenecek olaylar

| Event | Tetikleyici | Parametreler |
|---|---|---|
| `appointment_form_start` | İlk alana odaklanma | `form_location` (home/randevu) |
| `appointment_submitted` | Başarılı gönderim | `service_type`, `form_location` |
| `appointment_error` | Gönderim hatası | `error_type` |
| `phone_click` | `tel:` linki tıklaması | `location` (header/footer/sticky/hero) |
| `whatsapp_click` | WhatsApp tıklaması | `location` |
| `directions_click` | Yol tarifi tıklaması | — |
| `service_card_click` | Hizmet kartı | `service_slug` |
| `hero_cta_click` | Hero CTA | `cta_type` (primary/secondary), `slide_id` |
| `faq_open` | SSS açılması | `question_id` |
| `scroll_depth` | %25/50/75/100 | `depth` |

## 14.2 Dönüşüm hedefleri

**Birincil:** `appointment_submitted`
**İkincil:** `phone_click`, `whatsapp_click`
**Mikro:** `service_card_click`, `faq_open`, 75% scroll

## 14.3 Araçlar

- **Google Analytics 4** — `next/script` afterInteractive
- **Google Search Console** — sitemap gönderimi, sorgu takibi
- **Microsoft Clarity / Hotjar** (opsiyonel) — heatmap, form abandonment analizi
- **Vercel Analytics** — Core Web Vitals gerçek kullanıcı verisi

> Çerez onayı alınmadan analytics çalıştırılmamalı (§15). GTM consent mode v2 kullanılabilir.

---

# 15. Yasal: KVKK, Çerez, Marka Kullanımı

## 15.1 KVKK zorunlulukları

- **Aydınlatma metni** (`/kvkk-aydinlatma-metni`): veri sorumlusu kimliği, işlenen veri kategorileri (ad, iletişim, araç bilgisi), işleme amacı (randevu oluşturma ve iletişim), hukuki sebep (sözleşmenin kurulması / meşru menfaat), aktarım, saklama süresi, ilgili kişi hakları (md. 11) ve başvuru yolu
- **Açık rıza:** Formda **onay kutusu boş gelmeli** (önceden işaretli olamaz), metne link verilmeli
- **Ticari elektronik ileti** (İYS): pazarlama amaçlı SMS/e-posta göndermek için **ayrı bir onay kutusu** gerekir — randevu onayı ile aynı kutuda toplanamaz
- **Veri minimizasyonu:** formda gerekmeyen alan istenmez (TC kimlik, doğum tarihi vb. kesinlikle sorulmamalı)
- **Saklama:** randevu talepleri için makul süre (ör. 2 yıl) tanımlanmalı ve metinde belirtilmeli

## 15.2 Çerez politikası

- Zorunlu çerezler dışındaki tüm çerezler (analytics, pazarlama) **onay öncesi çalışmaz**
- Çerez bandı: "Kabul Et" ve "Reddet" **eşit görsel ağırlıkta** olmalı (dark pattern değil)
- Tercih daha sonra değiştirilebilmeli (footer'da "Çerez Tercihleri" linki)

## 15.3 Marka kullanımı ⚠️

Mercedes-Benz üç köşeli yıldızı ve "Mercedes-Benz" kelime markası **tescillidir**. Sitede kullanımı ancak yetkili servis/bayi sözleşmesi kapsamında ve marka sahibinin kurumsal kimlik kılavuzuna uygun şekilde mümkündür.

**Yapılması gerekenler:**
- Logo kullanım hakkının sözleşmeyle doğrulanması
- Mercedes-Benz kurumsal kimlik kılavuzuna (logo boşluk, minimum boyut, renk) uyum
- "Yetkili Servis" ifadesinin ancak gerçekten yetkiliyse kullanılması — aksi hâlde haksız rekabet ve marka ihlali riski
- Yetkili değilse doğru ifade: **"Mercedes-Benz araçlarda uzman özel servis"** (marka adı tanımlayıcı kullanım olarak geçer, logo kullanılamaz)

> Bu doküman hukuki görüş değildir; yayına almadan önce metinlerin ve marka kullanımının bir hukuk danışmanı tarafından gözden geçirilmesi önerilir.

## 15.4 Zorunlu yasal sayfalar

- `/gizlilik-politikasi`
- `/kvkk-aydinlatma-metni`
- `/cerez-politikasi`
- İletişim sayfasında ticaret unvanı, MERSİS no, adres (Elektronik Ticaret Yönetmeliği kapsamında bilgi verme yükümlülüğü)

---

# 16. Uygulama Yol Haritası (Fazlar)

## Faz 0 — Kurulum (0.5 gün)
- `create-next-app` (TS, Tailwind v4, App Router, ESLint)
- shadcn/ui init + gerekli bileşenlerin eklenmesi
- `globals.css` içine `@theme` token bloğu (§3.6)
- Fontlar, `lib/site-config.ts`, `lib/utils.ts`
- Prettier + tailwind plugin, temel klasör iskeleti

## Faz 1 — Tasarım sistemi & layout (1 gün)
- `Button`, `Container`, `SectionHeading`, `IconCircle`, `Reveal`
- `SiteHeader` (desktop nav + mega menü + mobil drawer + scroll state)
- `SiteFooter`, `MobileActionBar`
- `MbStar` SVG bileşeni
- **Kontrol:** boş sayfada header/footer mükemmel çalışıyor, klavye erişimi tam

## Faz 2 — Anasayfa bölümleri (2 gün)
- `HeroSlider` (3 slide, autoplay, kontroller, reduced-motion)
- `TrustBar`, `ServicesGrid` + `ServiceCard`
- `StatsBand` (count-up)
- `WhyUs`, `ProcessTimeline`, `TestimonialSlider`, `FaqAccordion`, `ClosingCta`
- Görsellerin optimize edilip yerleştirilmesi
- **Kontrol:** tüm breakpoint'lerde görsel doğruluk

## Faz 3 — Randevu formu & server action (1 gün)
- zod şeması, form bileşeni, tarih seçici (tr locale)
- Server action, rate limit, honeypot
- Resend e-posta şablonları (servis + müşteri)
- success/error state'leri
- **Kontrol:** JS kapalıyken de gönderim çalışıyor, hata mesajları erişilebilir

## Faz 4 — İç sayfalar (1.5 gün)
- `/hizmetler` + 8 hizmet detay sayfası (ortak template)
- `/randevu` (tam sayfa form)
- `/hakkimizda`, `/iletisim`, `/sss`
- `/kampanyalar` + detay
- Yasal sayfalar
- `not-found.tsx`, `error.tsx`

## Faz 5 — SEO, schema, analytics (0.5 gün)
- Sayfa metadata'ları, `sitemap.ts`, `robots.ts`
- JSON-LD üreticileri ve yerleştirme
- OG görseli, favicon seti
- GA4 + consent mode + çerez bandı

## Faz 6 — QA & yayın (1 gün)
- Lighthouse (mobil + desktop), CWV ölçümü
- Erişilebilirlik denetimi (axe DevTools + klavye + ekran okuyucu)
- Cross-browser (Chrome, Safari, Firefox, iOS Safari, Android Chrome)
- Form uçtan uca test, spam testi
- 404/301 kontrolleri, Search Console kaydı
- Vercel deploy + domain + SSL

**Toplam tahmini süre: ~7.5 iş günü** (tek geliştirici, içerik ve görseller hazır varsayımıyla)

## Faz 7+ — Yayın sonrası (opsiyonel)
- Blog / teknik rehber (SEO uzun kuyruk)
- Gerçek randevu takvimi + admin paneli (§10.4)
- Google Places API ile canlı yorumlar
- Model bazlı landing sayfaları
- Çoklu dil (EN) — `next-intl`

---

# 17. Sonnet-5 İçin Hazır Prompt Paketi

> Aşağıdaki promptları **sırayla** kullanın. Her prompt'un başına şu satırı ekleyin:
> `Referans doküman: KOLUMAN-ISTANBUL-WEB-PLAN.md — ilgili bölümlere birebir uy.`
>
> **Altın kural:** Tek prompt'ta tüm siteyi isteme. Faz faz ilerle, her fazın sonunda çalıştır ve gör.

---

### PROMPT 0 — Proje kurulumu

```
Next.js 15 (App Router, TypeScript) + Tailwind CSS v4 + shadcn/ui ile
"Koluman İstanbul — Mercedes-Benz Yetkili Servisi" web sitesi kuracağız.

Şimdi SADECE kurulumu yap:
1. Proje iskeleti (app router, src kullanma, alias "@/*")
2. app/globals.css içine planın §3.6'daki @theme token bloğunu birebir ekle
3. Inter + Newsreader fontlarını next/font/google ile kur (subsets: latin, latin-ext)
4. lib/site-config.ts dosyasını planın §11.3'teki içerikle oluştur
5. lib/utils.ts (cn helper)
6. Planın §11.2'deki klasör iskeletini boş olarak oluştur (klasörler + .gitkeep)
7. shadcn/ui init et ve şu bileşenleri ekle:
   button, input, select, textarea, checkbox, label, form, accordion,
   calendar, popover, dialog, badge, navigation-menu

Kod yazarken:
- Türkçe içerik, İngilizce değişken/dosya adı
- Her dosya tek sorumluluk
- "use client" sadece gerçekten gerekli yaprak bileşenlerde

Bittiğinde npm run dev'in hatasız açıldığını doğrula.
```

---

### PROMPT 1 — Tasarım sistemi primitive'leri

```
Planın §5.1 ve §5.5'ine göre şu bileşenleri oluştur:

1. components/ui/button.tsx — CVA ile 6 variant (primary, primary-dark,
   outline-light, outline-dark, ghost, link) ve 3 size (sm, md, lg).
   Ölçüler ve renkler §5.1'deki tablodan birebir alınacak.
   asChild desteği (Radix Slot), loading state (Loader2 + aria-busy).

2. components/ui/container.tsx — size: "shell" | "narrow"
3. components/ui/section-heading.tsx — eyebrow, title, description,
   align, action{label,href}, tone: "dark" | "light"
4. components/ui/icon-circle.tsx — icon, size (28|32|40), tone
5. components/ui/reveal.tsx — IntersectionObserver ile scroll reveal,
   once:true, prefers-reduced-motion'a saygılı
6. components/shared/mb-star.tsx — Mercedes yıldızı inline SVG,
   currentColor, className prop'u alır

Hiçbirinde hard-coded renk kullanma; §3.6'daki token'ları kullan.
Koyu zeminde box-shadow KULLANMA (plan §3.4 kuralı).
```

---

### PROMPT 2 — Header, Footer, Mobil Action Bar

```
Planın §5.2, §6.1 ve §6.11'ine göre layout bileşenlerini oluştur:

1. components/layout/site-header.tsx
   - sticky top-0 z-50, yükseklik 72px (lg) / 64px (mobil)
   - variant: "overlay" (anasayfa) | "solid" (iç sayfalar)
   - overlay modda: sayfa üstünde transparan, 80px scroll sonrası
     bg-ink/92 + backdrop-blur-md + border-b
   - Sol: MbStar + iki satır marka metni (§6.1'deki JSX'e uy)
   - Orta: DesktopNav — hover'da soldan sağa büyüyen 1px alt çizgi
   - "Hizmetlerimiz" için Radix NavigationMenu ile mega menü:
     2 kolon 8 hizmet (ikon + başlık + 1 satır açıklama)
   - Sağ: "Randevu Al" primary sm butonu + mobil hamburger
   - Skip link: <a href="#main">İçeriğe geç</a>

2. components/layout/mobile-nav-drawer.tsx
   - Radix Dialog ile tam ekran overlay, focus trap, Esc ile kapanır
   - body scroll kilidi
   - Altta: tam genişlik "Hemen Ara" butonu + WhatsApp + sosyal ikonlar

3. components/layout/site-footer.tsx — §6.11'deki 3 kolon + alt bar.
   Tüm iletişim bilgileri siteConfig'ten. Copyright yılı dinamik.

4. components/layout/mobile-action-bar.tsx — lg:hidden, fixed bottom-0,
   3 eşit buton: Hemen Ara (tel:) / Randevu Al (#randevu'ya scroll) /
   Yol Tarifi (Maps). safe-area-inset-bottom desteği.

5. app/layout.tsx — html lang="tr", font değişkenleri, header + main#main
   + footer + mobile action bar. body'ye pb-16 lg:pb-0.

Erişilebilirlik: aria-expanded/controls doğru bağlansın, tüm ikon-only
butonlarda aria-label olsun.
```

---

### PROMPT 3 — Hero Slider

```
Planın §6.2'ye göre components/sections/hero-slider.tsx oluştur.

- embla-carousel-react + embla-carousel-autoplay
- lib/data/hero-slides.ts dosyasını §6.2'deki veriyle oluştur (3 slide)
- Yapı: görsel katmanı → gradient overlay → içerik → kontroller
- min-h: 520px (mobil) / 560px (md) / 680px (lg)
- Overlay: desktop'ta soldan sağa (--overlay-hero),
  mobilde alttan yukarı (--overlay-hero-mobile)
- H1: serif, 34/44/56px, text-wrap balance
- CTA'lar: "Servis Randevusu Al" (primary lg) + "Hizmetlerimizi İnceleyin"
  (outline-light lg). Mobilde tam genişlik, dikey.
- Autoplay 6500ms, stopOnInteraction + stopOnMouseEnter
- Geçiş: fade 900ms + görselde scale(1.06→1) Ken Burns
- Kontroller: desktop'ta sol/sağ ok (hidden lg:flex), her yerde dots
  (h-[3px] w-8, aktif beyaz)
- Klavye: ← → tuşları çalışsın, dots role="tab"
- prefers-reduced-motion: autoplay ve Ken Burns kapalı
- Görseller: sadece ilk slide priority, sizes="100vw"

Görseller henüz yoksa /public/images/hero/ altında placeholder
referansları kullan ve README'ye hangi görsellerin gerektiğini not düş.
```

---

### PROMPT 4 — Anasayfa koyu bölümleri

```
Planın §6.3, §6.4, §6.5'e göre şu bölümleri oluştur:

1. components/sections/trust-bar.tsx (§6.3)
   - Veri: lib/data/trust-items.ts, §8.3'teki 5 öğe
   - Desktop 5 kolon / tablet 3 kolon / mobil yatay snap-scroll
   - ul/li semantiği, aria-label="Servis güvenceleri"

2. components/cards/service-card.tsx + components/sections/services-grid.tsx
   (§5.4, §6.4)
   - Veri: lib/data/services.ts — §6.4'teki 4 hizmet (başlık, excerpt,
     ikon, slug, görsel)
   - Kart: aspect-[4/3], rounded-md, hover'da görsel scale(1.04) 400ms
   - excerpt: desktop'ta hover'da belirir, mobilde her zaman görünür
     (@media (hover:hover) ile koşullandır)
   - SectionHeading: title "Hizmetlerimiz", action "Tüm Hizmetler" → /hizmetler

3. components/sections/stats-band.tsx (§6.5)
   - lib/data/stats.ts — 4 metrik (§6.5 tablosu)
   - IntersectionObserver ile 0'dan hedefe 1200ms count-up
   - prefers-reduced-motion varsa animasyon yok, doğrudan son değer
   - Sayı: serif, tabular-nums

Hepsi server component olsun; sadece stats-band client.
Tüm bölümler Reveal ile sarmalanabilir.
```

---

### PROMPT 5 — Randevu formu (en kritik bölüm)

```
Planın §6.6 ve §10'a göre randevu formunu uçtan uca kur.

1. lib/validations/appointment.ts — §10.1'deki zod şemasını birebir yaz
2. lib/data/appointment-options.ts — §10.2'deki hizmet ve saat seçenekleri
3. app/actions/appointment.ts — §10.3'teki server action:
   rate limit, honeypot, sunucu tarafı doğrulama, referenceId üretimi,
   Resend ile 2 e-posta (servise detaylı, müşteriye özet)
4. lib/rate-limit.ts — in-memory Map ile IP başına 5 istek / 10 dk
5. lib/email.ts — Resend şablonları (düz HTML, marka renkleriyle)
6. components/sections/appointment-form.tsx:
   - react-hook-form + zodResolver + useActionState
   - Alanlar §6.6 tablosundaki gibi. email/vehicleModel/note
     "Detay ekle ▾" accordion'ı içinde
   - Telefon maskesi: 0 (5__) ___ __ __
   - Tarih: shadcn Calendar + Popover, date-fns tr locale,
     geçmiş tarihler ve Pazar kapalı, maks 60 gün ileri
   - KVKK checkbox — önceden İŞARETLİ OLMAYACAK, metne link
   - Honeypot: görünmez "website" alanı
   - State'ler: idle / submitting / success / error (§6.6)
   - success: form yerine CheckCircle2 + talep no + mesaj
   - error: role="alert" kutu + telefon fallback
   - aria-live="polite" ile sonuç duyurusu
7. components/sections/why-us.tsx — §6.6 sol kart, §8.5 metinleri
8. Bu ikisini anasayfada bg-paper bölümünde
   grid-cols-[0.85fr_1.15fr] olarak yerleştir

JS kapalıyken de çalışsın (progressive enhancement).
Tüm hata mesajları Türkçe ve §10.1'deki metinlerle birebir aynı.
```

---

### PROMPT 6 — Anasayfa açık bölümleri

```
Planın §6.7, §6.8, §6.9, §6.10'a göre:

1. components/sections/process-timeline.tsx — 4 adım (§6.7 tablosu),
   veri lib/data/process-steps.ts. Desktop 4 kolon + bağlayıcı çizgi,
   tablet 2×2, mobil dikey timeline.

2. components/sections/testimonial-slider.tsx + components/cards/
   testimonial-card.tsx — Embla, desktop 3 / tablet 2 / mobil 1 kart.
   Veri lib/data/testimonials.ts (şimdilik 5 örnek, üstüne
   "GERÇEK YORUMLARLA DEĞİŞTİRİLECEK" yorumu düş).

3. components/sections/faq-accordion.tsx — shadcn Accordion,
   type="single" collapsible. Veri lib/data/faqs.ts — §8.6'daki
   8 soru-cevap BİREBİR. Container size="narrow".
   Plus→Minus ikon rotasyonu.

4. components/sections/closing-cta.tsx — §6.10.
   components/shared/map-embed.tsx: facade pattern — önce statik görsel
   + pin overlay, tıklayınca gerçek iframe yüklenir.
   Yanında "Yol Tarifi Al ›" linki (siteConfig.address.directionsUrl).

5. app/page.tsx — 11 bölümü §4.2'deki sırayla birleştir.
   Zemin ritmi: koyu×5 → açık×4 → koyu×2.
```

---

### PROMPT 7 — İç sayfalar

```
Planın §4.1 ve §8'e göre iç sayfaları oluştur:

1. /hizmetler — 8 hizmetin grid listesi
2. /hizmetler/[slug] — ortak template + generateStaticParams:
   hero (başlık + kısa açıklama + görsel), uzun açıklama (§8.4),
   "Kapsam" madde listesi, ilgili diğer hizmetler, alt CTA + form linki
3. /randevu — tam sayfa randevu formu (AppointmentForm'u yeniden kullan,
   variant="page")
4. /hakkimizda — hikâye, ekip, ekipman, değerler
5. /iletisim — harita, adres kartı, çalışma saatleri tablosu, iletişim formu
6. /sss — FaqAccordion tam sayfa + FAQPage schema
7. /kampanyalar + /kampanyalar/[slug] — kampanya kartları, boş durum metni
8. Yasal sayfalar (gizlilik, kvkk, çerez) — Container narrow, prose stili
9. not-found.tsx ve error.tsx — §8.8'deki metinlerle

Her sayfa: breadcrumb, tekil h1, kendi metadata'sı.
Hizmet metinleri §8.4'ten birebir alınacak.
```

---

### PROMPT 8 — SEO, schema, analytics, yasal

```
Planın §9, §14, §15'e göre:

1. lib/seo.ts — buildMetadata() yardımcısı (title template,
   description, canonical, OG, Twitter)
2. Her sayfaya §9.1 tablosundaki metadata'yı uygula
3. lib/schema.ts — JSON-LD üreticileri:
   autoRepairSchema (§9.4a, siteConfig'ten beslensin), serviceSchema,
   faqPageSchema, breadcrumbSchema
4. components/shared/json-ld.tsx — script enjeksiyonu
5. app/sitemap.ts, app/robots.ts
6. app/opengraph-image.tsx — dinamik OG görseli (siyah zemin,
   serif başlık, MB yıldızı)
7. lib/analytics.ts + GA4 kurulumu (next/script afterInteractive),
   §14.1'deki event'ler için trackEvent() helper'ı, ilgili
   bileşenlere event bağlantıları
8. components/shared/cookie-consent.tsx — "Kabul Et" ve "Reddet"
   eşit ağırlıkta, tercih localStorage yerine cookie'de,
   onay öncesi GA yüklenmez (consent mode v2)

AggregateRating schema'sı EKLEME (gerçek yorum verisi gelene kadar).
```

---

### PROMPT 9 — QA ve optimizasyon

```
Planın §12, §13, §18'ine göre son denetimi yap ve düzelt:

1. Lighthouse (mobil) çalıştır; Performance ≥ 90, Accessibility 100,
   SEO 100 olana kadar düzelt
2. §13.2'deki erişilebilirlik checklist'ini madde madde doğrula ve
   eksikleri gider
3. Tüm görsellerin sizes/priority/alt değerlerini §12.3'e göre kontrol et
4. Bundle analizi: ilk JS ≤ 120KB gzip. Aşan varsa gereksiz client
   component'leri server'a çevir
5. CLS avcılığı: her görselde boyut/aspect-ratio var mı
6. 320px – 1920px arası yatay taşma kontrolü
7. Formu uçtan uca test et: boş gönderim, hatalı telefon, geçmiş tarih,
   KVKK onaysız, honeypot dolu, rate limit
8. §18'deki kabul kriterleri tablosunu doldurup rapor et

Bulduğun her sorunu düzelt ve neyi neden değiştirdiğini kısaca açıkla.
```

---

# 18. QA & Kabul Kriterleri Checklist

## 18.1 Görsel doğruluk

- [ ] Header 72px, sticky, anasayfada overlay→solid geçişi çalışıyor
- [ ] Hero 3 slide, fade + Ken Burns, autoplay 6.5s, hover'da duruyor
- [ ] Hero metni tüm slide görsellerinde ≥ 4.5:1 kontrast
- [ ] Trust bar mobilde yatay snap-scroll, desktop'ta 5 kolon
- [ ] Hizmet kartları hover'da 1.04 scale, excerpt beliriyor
- [ ] Açık bölümde `#F4F4F2` zemin, kartlar saf beyaz
- [ ] Koyu zeminde hiçbir yerde box-shadow yok
- [ ] Başlıklar serif, gövde sans — hiçbir yerde karışmamış
- [ ] Footer 3 kolon, harita önizlemesi tıklanabilir
- [ ] Copyright yılı dinamik

## 18.2 İşlevsellik

- [ ] Tüm nav linkleri doğru sayfaya gidiyor, aktif durum doğru
- [ ] Mega menü hover + klavye ile açılıyor, Esc ile kapanıyor
- [ ] Mobil drawer focus trap + scroll kilidi çalışıyor
- [ ] Mobil action bar 3 butonu doğru aksiyonu tetikliyor
- [ ] Form: her hata senaryosunda doğru Türkçe mesaj
- [ ] Form başarıda talep numarası gösteriyor, e-postalar gidiyor
- [ ] Honeypot ve rate limit çalışıyor
- [ ] Tarih seçici geçmiş tarih ve Pazar'ı engelliyor
- [ ] SSS accordion tek seferde bir soru açıyor
- [ ] Harita facade tıklanınca yükleniyor
- [ ] 404 ve error sayfaları çalışıyor

## 18.3 Performans

- [ ] LCP < 2.0s (mobil, 4G simülasyonu)
- [ ] INP < 150ms
- [ ] CLS < 0.05
- [ ] İlk JS ≤ 120KB gzip
- [ ] Hero görseli ≤ 180KB, AVIF/WebP servis ediliyor
- [ ] Lighthouse Performance ≥ 90 (mobil)

## 18.4 Erişilebilirlik

- [ ] axe DevTools: 0 kritik hata
- [ ] Yalnızca klavye ile tüm site gezilebiliyor
- [ ] Focus göstergesi her yerde görünür
- [ ] Ekran okuyucu ile form doldurulabiliyor
- [ ] `prefers-reduced-motion` tüm animasyonları durduruyor
- [ ] %200 zoom'da içerik kaybı/yatay scroll yok
- [ ] Lighthouse Accessibility = 100

## 18.5 SEO

- [ ] Her sayfada benzersiz title + description
- [ ] Tekil h1, hiyerarşi atlamasız
- [ ] sitemap.xml ve robots.txt erişilebilir
- [ ] JSON-LD Rich Results Test'ten hatasız geçiyor
- [ ] OG görseli sosyal medya önizlemelerinde doğru
- [ ] Canonical URL'ler doğru
- [ ] Tüm görsellerde anlamlı alt

## 18.6 Yasal

- [ ] KVKK aydınlatma metni yayında, formdan linkli
- [ ] KVKK onay kutusu boş geliyor, zorunlu
- [ ] Çerez bandı onay öncesi analytics'i engelliyor
- [ ] Gizlilik ve çerez politikası sayfaları dolu
- [ ] Marka kullanım hakkı doğrulandı (§15.3)
- [ ] Tüm örnek veriler (`[köşeli parantez]`, istatistikler, yorumlar)
      gerçekleriyle değiştirildi

## 18.7 Tarayıcı uyumluluğu

- [ ] Chrome (desktop + Android)
- [ ] Safari (macOS + iOS) — özellikle `backdrop-filter` ve `aspect-ratio`
- [ ] Firefox
- [ ] Edge
- [ ] 320px (iPhone SE) – 1920px arası kırılma yok

---

## Ek: Hazırlanması gereken varlıklar (asset listesi)

| Varlık | Adet | Boyut | Not |
|---|---|---|---|
| Hero görselleri | 3 | 2400×1350 | Ekran görüntüsündeki 3 sahne |
| Hizmet kartı görselleri | 8 | 800×600 | ECU makro, XENTRY ekranı, gösterge paneli, teknisyen eli vb. |
| Form yanı görseli | 1 | 800×1000 | Teknisyen + XENTRY laptop |
| Hakkımızda görselleri | 3-4 | 1200×800 | Atölye, ekip, ekipman |
| OG kapak | 1 | 1200×630 | Siyah zemin + logo + başlık |
| Logo | 1 | SVG | Koluman + MB yıldızı |
| Favicon seti | — | 16/32/180/512 | `icon.svg`, `apple-icon.png` |
| Statik harita görseli | 1 | 800×500 | Facade pattern için |

**Görsel yönü hatırlatması (§2.4):** düşük satürasyon, soğuk beyaz dengesi, yüksek kontrast, gri/siyah/gümüş araçlar. Sıcak tonlu veya renkli stok fotoğraf sistemi bozar.

---

*Doküman sonu — Koluman İstanbul Web Sitesi Uygulama Planı v1.0*
