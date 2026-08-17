import { siteConfig } from "@/lib/site-config";

/**
 * Türkçe sözlük — sitenin tek içerik kaynağı ve `Dictionary` tipinin şeması.
 * `en.ts` bu tipe uymak zorundadır; eksik anahtar derleme hatası verir.
 *
 * ⚠️ [köşeli parantez] içindeki değerler ve örnek istatistik/yorumlar yayına
 * almadan önce gerçek verilerle değiştirilmelidir.
 */
export const tr = {
  brand: {
    name: "Koluman İstanbul",
    tagline: "Mercedes-Benz Araçlarda Uzman Servis",
    blurb:
      "Mercedes-Benz araçlarda elektronik arıza tespiti ve motor beyni çözümlerinde uzman servis.",
  },

  common: {
    skipToContent: "İçeriğe geç",
    bookAppointment: "Randevu Al",
    bookAppointmentLong: "Servis Randevusu Al",
    callNow: "Hemen Ara",
    getDirections: "Yol Tarifi",
    getDirectionsLong: "Yol Tarifi Al",
    whatsapp: "WhatsApp",
    allServices: "Tüm Hizmetler",
    learnMore: "Daha Fazla Bilgi",
    detail: "Detay",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    languageLabel: "Dil seçimi",
    loading: "Yükleniyor…",
    breadcrumbLabel: "Sayfa yolu",
    workingHours: "Çalışma Saatleri",
    address: "Adres",
    phone: "Telefon",
    email: "E-posta",
    required: "zorunlu",
  },

  hours: [
    { days: "Pazartesi – Cuma", time: "08:30 – 18:30" },
    { days: "Cumartesi", time: "09:00 – 16:00" },
    { days: "Pazar", time: "Kapalı" },
  ],
  hoursShort: "Pzt–Cmt 08:30–18:30",

  nav: {
    home: "Anasayfa",
    services: "Hizmetlerimiz",
    appointment: "Servis Randevusu",
    campaigns: "Kampanyalar",
    contact: "İletişim",
    about: "Hakkımızda",
    faq: "Sıkça Sorulan Sorular",
    mainLabel: "Ana menü",
    footerLabel: "Alt menü",
  },

  megaMenu: {
    promoTitle: "Ücretsiz Ön Arıza Tespiti",
    promoText: "Randevunuzda ilk değerlendirme ve yönlendirme ücretsizdir.",
    promoCta: "Randevu oluştur",
  },

  hero: {
    title: "Mercedes-Benz'iniz emin ellerde.",
    ctaPrimary: "Servis Randevusu Al",
    ctaSecondary: "Hizmetlerimizi İnceleyin",
    prev: "Önceki görsel",
    next: "Sonraki görsel",
    slideLabel: "Görsel",
    sliderLabel: "Öne çıkan görseller",
  },

  trust: {
    label: "Servis güvenceleri",
    items: {
      software: "Orijinal Yazılım ve Teknik Bilgi",
      technicians: "Uzman Elektronik Teknisyenleri",
      diagnostics: "Gelişmiş Arıza Tespit Teknolojileri",
      standards: "Mercedes-Benz Standartlarında Hizmet",
    },
  },

  services: {
    heading: "Hizmetlerimiz",
    scopeTitle: "Kapsam",
    relatedTitle: "İlgili Diğer Hizmetler",
    detailCtaTitle: "Bu arıza için randevu oluşturun.",
    detailCtaText:
      "Belirtiyi tarif edin, teknisyenimiz uygun zamanı planlasın. Onayınız olmadan hiçbir işlem yapılmaz.",
    items: {
      adblue: {
        title: "AdBlue Sistemleri",
        excerpt:
          "AdBlue deposu, pompa, ısıtıcı hattı ve enjektörde arıza tespiti ve onarım.",
        intro: [
          "AdBlue sistemi, dizel araçların emisyon standartlarını karşılamasını sağlayan hassas bir sıvı enjeksiyon yapısıdır. Kalitesiz AdBlue kullanımı, kristalleşme, pompa arızası veya nozul tıkanıklığı; göstergede kilometre geri sayımı, motor torkunun kısıtlanması ve aracın yeniden çalışmaması gibi kritik durumlara yol açar.",
          "Servisimizde AdBlue deposu, pompa basıncı, ısıtıcı hatları ve enjektör yapısı detaylı olarak analiz edilir. Yazılımsal ve mekanik tıkanıklıklar profesyonel ekipmanlarla giderilerek sistem ilk günkü çalışma değerlerine getirilir.",
        ],
        scope: [
          "AdBlue deposu ve seviye sensörü kontrolü",
          "Pompa basıncı ölçümü",
          "Isıtıcı hatlarının kontrolü",
          "Enjektör ve nozul tıkanıklığı temizliği",
          "Kristalleşme kaynaklı arızaların giderilmesi",
          "Yazılımsal arıza ve geri sayım kontrolü",
        ],
      },
      engine: {
        title: "Motor Sistem Arızaları",
        excerpt:
          "Güç kaybı, yüksek yakıt tüketimi ve sarsıntılı çalışmada kaynağa inen teşhis.",
        intro: [
          "Motor, aracınızın kalbidir; performans, yakıt tüketimi ve sürüş güvenliğini doğrudan belirler. Yakıt sistemi, sensörler veya mekanik bileşenlerden kaynaklanan arızalar; çekiş düşüklüğü, yüksek yakıt tüketimi, sarsıntılı çalışma ve egzozdan siyah/mavi duman çıkmasıyla kendini gösterir.",
          "Servisimizde motor arızalarında ezbere parça değişimi yapılmaz. Bilgisayarlı diyagnostik testler, kompresyon ve sensör ölçümleriyle sorunun kaynağı (enjektör, turbo, sensörler vb.) net olarak tespit edilir; gereksiz masraf çıkarılmadan doğrudan çözüme ulaşılır.",
        ],
        scope: [
          "Bilgisayarlı diyagnostik test",
          "Kompresyon ölçümü",
          "Enjektör ve yakıt sistemi kontrolü",
          "Turbo ve hava yolu kontrolü",
          "Sensör ölçümleri",
          "Onarım sonrası yol testi",
        ],
      },
      transmission: {
        title: "Şanzıman Arızaları",
        excerpt:
          "Vuruntu, kaydırma ve geç dolma şikâyetlerinde nokta atışı onarım.",
        intro: [
          "Şanzıman, motor gücünü tekerleklere aktaran en hassas ve karmaşık sistemdir. Yağ kalitesinin bozulması, dişli aşınması veya hidrolik/elektronik ünite sorunları; vites geçişlerinde vuruntu, kaydırma, geç dolma veya aracın koruma moduna geçmesiyle belirti verir.",
          "Şanzıman teşhisinde öncelikle arıza kodları okunur ve hidrolik basınç testleri gerçekleştirilir. Aşınma derecesi ve elektronik beyin tepkileri incelenerek komple değişim yerine nokta atışı onarım veya revizyon hedeflenir.",
        ],
        scope: [
          "Arıza kodu okuma ve analiz",
          "Hidrolik basınç testleri",
          "Elektronik kontrol ünitesi kontrolü",
          "Aşınma derecesinin belirlenmesi",
          "Nokta atışı onarım ve revizyon",
          "Yağ ve filtre değişimi",
        ],
      },
      brakes: {
        title: "EBS & ABS Fren Sistemleri",
        excerpt:
          "Sensör, valf ve modülatör arızalarında güvenliği riske atmayan teşhis.",
        intro: [
          "ABS ve EBS sistemleri, ani frenlemelerde tekerleklerin kilitlenmesini önleyerek aracın yön hakimiyetini korur. Sensör kirlenmesi, kablo tesisatı kopuklukları veya valf/modülatör arızaları; fren pedalında sertleşme, gösterge paneli ikazları ve fren mesafesinin uzamasıyla ortaya çıkar.",
          "Fren sistemlerinizde tekerlek hız sensörleri, basınç modülatörleri ve beyin haberleşmesi osiloskop ve özel test cihazlarıyla kontrol edilir. Sürüş güvenliği riske atılmadan sadece arızalı hat veya modül tespit edilip giderilir.",
        ],
        scope: [
          "Tekerlek hız sensörü kontrolü",
          "Basınç modülatörü testi",
          "Kablo tesisatı ve soket kontrolü",
          "Osiloskop ile sinyal analizi",
          "Fren beyni haberleşme kontrolü",
          "Gösterge ikazlarının giderilmesi",
        ],
      },
      climate: {
        title: "Araç Klima Sistemleri",
        excerpt:
          "UV kaçak arama, gaz dolumu, kompresör testi ve sistem hijyeni.",
        intro: [
          "Araç kliması yalnızca yaz konforu değil, kışın cam buğusunun hızlı çözülmesi ve kabin hava kalitesi için de hayati önem taşır. Gaz kaçağı, kompresör kilitlenmesi veya kabin filtresi tıkanıklığı; yetersiz soğutma/ısıtma, kötü koku ve klimayı açınca motordan gelen anormal seslerle kendini belli eder.",
          "Klima sisteminde UV kaçak arama gazı ve hassas basınç testleriyle sızıntı noktaları nokta atışı tespit edilir. Gaz dolumu, kompresör testi ve bakteriyel sistem hijyeni sağlanarak klimanız maksimum verimle çalışır hale getirilir.",
        ],
        scope: [
          "UV kaçak arama gazı ile sızıntı tespiti",
          "Hassas basınç testleri",
          "Kompresör testi ve kontrolü",
          "Gaz boşaltma ve dolum",
          "Kabin filtresi değişimi",
          "Bakteriyel sistem hijyeni",
        ],
      },
      egrdpf: {
        title: "EGR & DPF Arızaları",
        excerpt:
          "Kurum tıkanıklığında rejenerasyon, profesyonel temizlik ve kök neden çözümü.",
        intro: [
          "EGR ve Dizel Partikül Filtresi (DPF), egzoz gazındaki zararlı partikülleri süzerek çevreye salınımı engeller. Şehir içi kısa mesafe kullanım ve uygun olmayan yağ/yakıt seçimi; kurum birikmesine, tıkanıklığa, motor arıza lambasının yanmasına ve belirgin güç kaybına neden olur.",
          "Tıkalı DPF ve EGR sistemlerinde değişim öncesinde fiziki kurum oranı ölçülür, sensör değerleri doğrulanır. Rejenerasyon, profesyonel temizlik veya parça onarımı ile tıkanıklığa sebep olan asıl faktör (enjektör veya sensör hatası) çözülerek arızanın tekrarlaması engellenir.",
        ],
        scope: [
          "Fiziki kurum oranı ölçümü",
          "Diferansiyel basınç ve sıcaklık sensörü doğrulama",
          "Zorunlu rejenerasyon",
          "Profesyonel DPF ve EGR temizliği",
          "EGR valfi onarımı veya değişimi",
          "Tıkanıklığın kök nedeninin giderilmesi",
        ],
      },
    },
  },

  stats: {
    disclaimer:
      "Bu rakamlar örnektir; yayına almadan önce gerçek verilerle değiştirilmelidir.",
    items: {
      experience: "Yıllık Mercedes-Benz deneyimi",
      vehicles: "Servis edilen araç",
      accuracy: "İlk seferde doğru teşhis oranı",
      rating: "Google müşteri puanı",
    },
  },

  whyUs: {
    title: "Neden Bizi Tercih Etmelisiniz?",
    paragraph:
      "Mercedes-Benz araçlarda motor beyni ve elektronik arızalarda tespit ve çözümde uzman, güvenilir ve teknoloji odaklı hizmet sunuyoruz. Arızayı tahmin etmiyor, ölçüyoruz.",
    items: [
      "Mercedes-Benz odaklı uzman elektronik servis",
      "Gelişmiş arıza tespit ve ölçüm teknolojileri",
      "Orijinal yazılım ve teknik bilgiye erişim",
      "Kalıcı ve güvenilir çözüm anlayışı",
      "Aracınız için en doğru, en güvenli hizmet",
    ],
    cta: "Daha Fazla Bilgi",
  },

  form: {
    title: "Servis Randevusu",
    description:
      "Aracınızın elektronik arızaları için hızlı ve kolayca randevu oluşturun.",
    imageAlt: "XENTRY diagnostik cihazıyla çalışan servis teknisyeni",
    labels: {
      fullName: "Ad Soyad",
      phone: "Telefon",
      email: "E-posta",
      serviceType: "Hizmet",
      vehicleModel: "Araç Modeli",
      date: "Tarih",
      time: "Saat",
      note: "Arıza belirtisi",
      kvkkConsent: "KVKK onayı",
    },
    placeholders: {
      fullName: "Ad Soyad",
      phone: "0 (5__) ___ __ __",
      email: "ornek@eposta.com",
      serviceType: "Hizmet seçin",
      vehicleModel: "Örn. W213 E200",
      time: "Saat seçin",
      note: "Aracınızda gözlemlediğiniz belirtiyi kısaca yazın.",
    },
    optional: "opsiyonel",
    detailsToggle: "Detay ekle",
    kvkkConsentPrefix: "Kişisel verilerimin işlenmesine ilişkin ",
    kvkkConsentLink: "Aydınlatma Metni",
    kvkkConsentSuffix: "'ni okudum ve kabul ediyorum.",
    submit: "Randevu Oluştur",
    submitting: "Gönderiliyor…",
    footnote: "Talebiniz 1 iş saati içinde telefonla teyit edilir.",
    successTitle: "Randevu talebiniz alındı.",
    successText:
      "Ekibimiz en kısa sürede sizi arayarak randevunuzu teyit edecek.",
    successReference: "Talep numaranız",
    successAgain: "Yeni talep oluştur",
    errorTitle: "Talebiniz gönderilemedi.",
    errorFallback: "Dilerseniz doğrudan bizi arayabilirsiniz:",
    serviceOptions: {
      adblue: "AdBlue Sistemleri",
      engine: "Motor Sistem Arızaları",
      transmission: "Şanzıman Arızaları",
      brakes: "EBS & ABS Fren Sistemleri",
      climate: "Araç Klima Sistemleri",
      egrdpf: "EGR & DPF Arızaları",
      other: "Diğer / Emin Değilim",
    },
    errors: {
      fullNameMin: "Lütfen ad ve soyadınızı girin.",
      fullNameMax: "Ad soyad çok uzun.",
      phone: "Geçerli bir cep telefonu numarası girin.",
      email: "Geçerli bir e-posta girin.",
      serviceType: "Lütfen bir hizmet seçin.",
      vehicleModelMax: "Araç modeli çok uzun.",
      datePast: "Geçmiş bir tarih seçilemez.",
      dateSunday: "Pazar günü kapalıyız, lütfen başka bir gün seçin.",
      dateRange: "En fazla 60 gün sonrası için randevu alabilirsiniz.",
      time: "Lütfen bir saat seçin.",
      noteMax: "Not en fazla 600 karakter olabilir.",
      kvkk: "Devam etmek için aydınlatma metnini onaylamanız gerekir.",
      generic: "Lütfen işaretli alanları kontrol edin.",
      send: "Talebiniz gönderilemedi. Lütfen tekrar deneyin veya bizi telefonla arayın.",
      rateLimit:
        "Çok fazla deneme yaptınız. Lütfen birkaç dakika sonra tekrar deneyin.",
    },
  },

  process: {
    eyebrow: "Nasıl çalışıyoruz",
    title: "Servis Sürecimiz",
    steps: {
      booking: {
        title: "Randevu ve Ön Görüşme",
        description:
          "Bizimle iletişime geçin; arıza belirtinizi dinleyip uygun zamanı planlayalım.",
      },
      diagnosis: {
        title: "Detaylı Arıza Tespiti",
        description:
          "XENTRY ve ölçüm cihazlarıyla tüm kontrol üniteleri taranır, arızanın kaynağı belirlenir.",
      },
      approval: {
        title: "Onaylı İşlem ve Onarım",
        description:
          "Tespit ve maliyet size iletilir; onayınız olmadan hiçbir işlem yapılmaz.",
      },
      delivery: {
        title: "Test ve Teslim",
        description:
          "Yol testi ve son kontrol sonrasında aracınız raporuyla birlikte teslim edilir.",
      },
    },
  },

  testimonials: {
    title: "Müşterilerimiz Ne Diyor?",
    action: "Google yorumları",
    footnote: "Google üzerinde 4.8/5 · 240+ değerlendirme",
    notice:
      "Örnek yorumlardır; yayına almadan önce gerçek müşteri yorumlarıyla değiştirilmelidir.",
    ratingLabel: "5 üzerinden 5 yıldız",
    items: [
      {
        name: "Mehmet A.",
        vehicle: "W213 E220d",
        quote:
          "İki serviste çözülemeyen rölanti sorununu ölçerek buldular. Beyin değişimi gerekmediğini söyleyen tek yer burasıydı; sorun kablo tesisatındaymış.",
      },
      {
        name: "Elif K.",
        vehicle: "X253 GLC 250",
        quote:
          "Randevu saatinde alındı, işlem öncesi maliyet yazılı olarak iletildi. Onay vermeden hiçbir şeye dokunulmadı. Bu şeffaflık çok değerli.",
      },
      {
        name: "Serkan T.",
        vehicle: "W447 Vito",
        quote:
          "Filo aracımızda tekrar eden elektronik arıza vardı. XENTRY raporunu detaylı açıkladılar, aynı gün teslim aldık.",
      },
      {
        name: "Burak Ö.",
        vehicle: "C217 S 500 Coupé",
        quote:
          "Konfor sistemlerindeki arıza için gittim. Gereksiz parça önerilmedi, sorun modül kodlamasıymış. İşi bilen bir ekip.",
      },
      {
        name: "Ayşe D.",
        vehicle: "W176 A180",
        quote:
          "İkinci el alacağım araç için ekspertiz yaptırdım. Rapordaki geçmiş hasar kaydı sayesinde yanlış bir alımdan döndüm.",
      },
    ],
  },

  faq: {
    title: "Sıkça Sorulan Sorular",
    description:
      "AdBlue, DPF, şanzıman, fren ve klima arızaları ile garanti, orijinal parça ve maliyet hakkında en çok sorulan soruların yanıtları.",
    items: {
      warranty: {
        question: "Yetkili servis dışında yaptırdığım işlem garantimi etkiler mi?",
        answer:
          "Türkiye'de yürürlükteki mevzuat gereği, aracınızın bakımını yetkili servis dışında yaptırmanız garantinizi kendiliğinden geçersiz kılmaz; ancak yapılan işlemin doğrudan neden olduğu arızalar garanti kapsamı dışında kalabilir. Bu nedenle orijinal parça kullanımı, üretici prosedürüne uygun işlem ve belgelendirme bizim için standarttır. Tüm işlemleriniz faturalandırılır ve kayıt altına alınır.",
      },
      "adblue-warning": {
        question:
          "Göstergede AdBlue uyarısı ve kilometre geri sayımı çıktı, aracım çalışmayı durdurur mu?",
        answer:
          "Geri sayım, sistemin arızayı tespit ettiği andan itibaren size tanınan süredir. Bu süre sıfırlandığında araç önce motor torkunu kısıtlar, ardından kontak kapatıldığında yeniden çalışmayabilir. Uyarı yalnızca AdBlue seviyesinin düşmesinden değil; kalitesiz sıvı kaynaklı kristalleşme, pompa arızası veya nozul tıkanıklığından da kaynaklanabilir. Bu yüzden depoyu doldurmak çoğu zaman tek başına yeterli olmaz — geri sayım devam ediyorsa sistemin analiz edilmesi gerekir. Aracınızı kilitlenmeden önce getirirseniz işlem hem kısa hem düşük maliyetli olur.",
      },
      "dpf-cleaning": {
        question: "Tıkalı DPF temizlenebilir mi, yoksa değiştirmek zorunda mıyım?",
        answer:
          "Çoğu durumda değişim gerekmez. Değişim önerilmeden önce filtredeki fiziki kurum oranını ölçüyor, diferansiyel basınç ve sıcaklık sensörlerinin doğru değer verdiğini doğruluyoruz. Tıkanıklığın derecesine göre zorunlu rejenerasyon veya profesyonel temizlik uygulanıyor. Asıl önemli olan, tıkanıklığa neden olan kök faktörün (arızalı enjektör, hatalı sensör, uygun olmayan yağ/yakıt ya da sürekli kısa mesafe kullanım) çözülmesidir; bu yapılmazsa yeni filtre de kısa sürede tıkanır.",
      },
      "transmission-overhaul": {
        question: "Şanzıman arızasında komple değişim şart mı?",
        answer:
          "Hayır. Vites geçişlerinde vuruntu, kaydırma, geç dolma veya koruma moduna geçiş her zaman şanzımanın komple yenilenmesini gerektirmez. Önce arıza kodlarını okuyor, hidrolik basınç testlerini yapıyor ve elektronik kontrol ünitesinin tepkilerini inceliyoruz. Sorun çoğu zaman yağ kalitesi, hidrolik veya elektronik tarafta olur; bu durumlarda komple değişim yerine nokta atışı onarım ya da revizyon uygulanır. Mekanik aşınma ileri seviyedeyse bunu ölçüm sonuçlarıyla birlikte açıkça bildiririz.",
      },
      "abs-warning": {
        question: "ABS/EBS lambası yanıyor, aracımı kullanmaya devam edebilir miyim?",
        answer:
          "Fren sisteminiz çalışmaya devam eder, ancak ABS/EBS devre dışıyken ani frenlemede tekerlekler kilitlenebilir ve yön hakimiyetinizi kaybedebilirsiniz; fren mesafesi de uzar. Bu nedenle uyarı yanan bir araçla uzun yola çıkılmasını önermiyoruz. Arızanın kaynağı çoğu zaman kirlenmiş bir tekerlek hız sensörü ya da kopmuş bir kablo tesisatıdır; osiloskop ve özel test cihazlarıyla sadece arızalı hat veya modül tespit edilip giderilir.",
      },
      "climate-gas": {
        question: "Klimam soğutmuyor, sadece gaz doldurmak yeterli mi?",
        answer:
          "Gaz eksilmesi kendiliğinden olmaz; sistem kapalı devredir, gaz azalıyorsa bir yerde kaçak vardır. Kaçak bulunmadan yapılan dolum kısa sürede boşa gider. Biz önce UV kaçak arama gazı ve hassas basınç testleriyle sızıntı noktasını tespit ediyor, ardından dolumu yapıyoruz. Yetersiz soğutmanın nedeni her zaman gaz da değildir — kompresör kilitlenmesi veya tıkalı kabin filtresi de aynı şikâyeti yaratır; kötü koku varsa sistemin bakteriyel hijyeni de gerekir.",
      },
      "walk-in": {
        question: "Randevusuz gelebilir miyim?",
        answer:
          "Gelebilirsiniz, ancak yoğunluğa bağlı olarak bekleme süresi oluşabilir. Arıza tespiti cihaz ve teknisyen planlaması gerektirdiği için randevulu gelmeniz hem işlem süresini kısaltır hem de aynı gün teslim ihtimalini artırır.",
      },
      "genuine-parts": {
        question: "Orijinal parça kullanıyor musunuz?",
        answer:
          "Evet. Standart uygulamamız Mercedes-Benz orijinal parça kullanmaktır. Belirli durumlarda orijinal muadil (OEM) alternatifi mevcutsa, farkı ve garanti koşullarını açıkça belirterek size seçenek sunarız. Onayınız olmadan parça değişimi yapılmaz.",
      },
      "cost-estimate": {
        question: "Arızanın maliyetini önceden öğrenebilir miyim?",
        answer:
          "Arıza tespiti tamamlandıktan sonra yapılacak işlemler, kullanılacak parçalar ve toplam maliyet size yazılı olarak iletilir. Onayınız alınmadan hiçbir işleme başlanmaz. Tespit sırasında ek bir arıza ortaya çıkarsa tekrar bilgilendirilirsiniz.",
      },
      "courtesy-car": {
        question: "Aracımı bırakırsam ikame araç veriliyor mu?",
        answer:
          "[Uygunluk durumuna göre doldurulacak: ikame araç hizmetimiz mevcuttur / belirli işlemlerde sunulmaktadır.] Detay için randevu sırasında bilgi verebiliriz.",
      },
      models: {
        question: "Hangi Mercedes-Benz modellerine hizmet veriyorsunuz?",
        answer:
          "A, B, C, E, S serisi; CLA, CLS, GLA, GLB, GLC, GLE, GLS; SLK/SLC; V-Class, Vito ve Sprinter dâhil binek ve hafif ticari Mercedes-Benz modellerinin tamamına hizmet veriyoruz. AMG modellerinde de elektronik arıza tespiti yapılmaktadır.",
      },
    },
  },

  closing: {
    title: "Aracınız için doğru adres.",
    text: "Arıza belirtisini tarif edin, gerisini bize bırakın. Randevunuzu bugün oluşturun ya da doğrudan arayın; teknisyenimiz sizi yönlendirsin.",
    mapCta: "Haritayı yükle",
    mapNote: "Harita, tıkladığınızda yüklenir (gizlilik ve performans için).",
    mapAlt: "Servis konumunu gösteren harita önizlemesi",
    mapTitle: "Koluman İstanbul konum haritası",
  },

  footer: {
    contactTitle: "Bize Ulaşın",
    quickLinksTitle: "Hızlı Linkler",
    mapPreview: "Konumu gör",
    rights: "Tüm hakları saklıdır.",
    legal: {
      privacy: "Gizlilik Politikası",
      kvkk: "KVKK Aydınlatma Metni",
      cookies: "Çerez Politikası",
    },
    socialLabel: "Sosyal medya",
  },

  cookieBanner: {
    text: "Sitemizi geliştirmek için isteğe bağlı çerezler kullanmak istiyoruz. Zorunlu olmayan çerezler yalnızca onayınızla çalışır.",
    accept: "Kabul Et",
    reject: "Reddet",
    link: "Çerez Politikası",
    title: "Çerez tercihleri",
  },

  pages: {
    services: {
      title: "Hizmetlerimiz",
      description:
        "AdBlue, motor, şanzıman, EBS & ABS fren, klima ve EGR & DPF sistemlerinde arıza tespiti ve onarım hizmetlerimizin tamamı.",
    },
    appointment: {
      title: "Servis Randevusu Oluşturun",
      description:
        "Aracınızın belirtisini tarif edin, uygun günü seçin. Talebiniz 1 iş saati içinde telefonla teyit edilir.",
      infoTitle: "Randevu öncesi bilinmesi gerekenler",
      infoItems: [
        "Ruhsat ve varsa önceki servis raporlarınızı yanınızda getirin.",
        "Arıza aralıklıysa hangi koşullarda ortaya çıktığını not edin.",
        "Elektronik arıza tespiti ortalama 45–60 dakika sürer.",
        "İşlem ve maliyet onayınız alınmadan hiçbir parça değiştirilmez.",
      ],
    },
    campaigns: {
      title: "Kampanyalar",
      description:
        "Güncel bakım ve servis kampanyalarımızı inceleyin. Fırsatlardan yararlanmak için randevu oluşturun.",
      empty:
        "Şu anda aktif kampanyamız bulunmuyor. Güncel fırsatlar için bizi takip edin.",
      emptyCta: "Randevu oluştur",
    },
    about: {
      title: "Hakkımızda",
      description:
        "Mercedes-Benz elektronik arıza tespiti ve motor beyni çözümlerinde uzman ekibimiz ve teknolojik altyapımız.",
      lead: "Arızayı tahmin etmiyoruz — ölçüyoruz.",
      gallery: {
        workshop: "Koluman İstanbul servis atölyesi",
        team: "Mercedes-Benz sistemleri üzerinde çalışan teknisyen ekibimiz",
        equipment: "Elektronik arıza tespitinde kullandığımız ölçüm ekipmanları",
      },
      sections: [
        {
          heading: "Neyi farklı yapıyoruz",
          paragraphs: [
            "Çoğu serviste elektronik arıza, parça değiştirerek daraltılmaya çalışılır. Bu yöntem hem maliyetlidir hem de arızanın gerçek kaynağını çoğu zaman bulmaz. Biz her işe ölçümle başlıyoruz: besleme hatları, kütle bağlantıları, CAN/LIN haberleşmesi ve sensör sinyalleri fiziksel olarak doğrulanmadan hiçbir parça değişimi önerilmiyor.",
            "Bu yaklaşım daha yavaş görünebilir, ancak sonuç kalıcıdır. Aracınız aynı arızayla ikinci kez gelmediğinde ikimiz de kazanmış oluruz.",
          ],
        },
        {
          heading: "Ekip",
          paragraphs: [
            "Ekibimiz, Mercedes-Benz sistemleri üzerinde eğitim almış elektronik ve mekanik teknisyenlerden oluşuyor. Motor yönetimi, şanzıman elektroniği ve konfor sistemleri alanlarında ayrı uzmanlıklar var; karmaşık arızalarda araç tek bir kişiye değil, doğru uzmana yönlendiriliyor.",
          ],
        },
        {
          heading: "Ekipman",
          paragraphs: [
            "Orijinal XENTRY diagnostik sistemi, yönlendirilmiş test ve SCN kodlama erişimi, dört kanallı osiloskop, izole devre ölçüm ekipmanı ve kart seviyesinde onarım için mikro lehim istasyonu kullanıyoruz. Yazılım güncellemeleri üretici sunucusu üzerinden, prosedüre uygun şekilde yapılıyor.",
          ],
        },
        {
          heading: "Değerlerimiz",
          paragraphs: [
            "Onaysız işlem yapmamak, tespit edilmeyen arızayı “tahminen” faturalandırmamak ve yapılan her işlemi belgelemek temel çalışma ilkelerimiz. Bir arızayı çözemiyorsak bunu açıkça söylüyor, gerekiyorsa doğru adrese yönlendiriyoruz.",
          ],
        },
      ],
    },
    contact: {
      title: "İletişim ve Konum",
      description:
        "Adres, telefon, çalışma saatleri ve yol tarifi. Mercedes-Benz servisimize ulaşın.",
      formTitle: "Bize yazın",
      formDescription:
        "Randevu talebiniz için aşağıdaki formu kullanabilir ya da doğrudan telefonla ulaşabilirsiniz.",
      legalTitle: "Kurumsal bilgiler",
      legalNote:
        "Ticaret unvanı, MERSİS numarası ve vergi dairesi bilgileri yayına almadan önce buraya eklenmelidir.",
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      description:
        "AdBlue, DPF, şanzıman, fren ve klima arızaları ile garanti, orijinal parça ve maliyet hakkında en çok sorulan soruların yanıtları.",
      stillQuestions: "Sorunuzun cevabını bulamadınız mı?",
      stillQuestionsCta: "Bize ulaşın",
    },
    legal: {
      lastUpdated: "Son güncelleme",
      disclaimer:
        "Bu metin bilgilendirme amaçlıdır ve hukuki görüş niteliği taşımaz. Yayına almadan önce bir hukuk danışmanı tarafından gözden geçirilmelidir.",
      privacy: {
        title: "Gizlilik Politikası",
        description:
          "Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgi.",
        sections: [
          {
            heading: "Hangi verileri topluyoruz",
            paragraphs: [
              "Sitemiz üzerinden randevu talebi oluşturduğunuzda ad soyad, telefon numarası, isteğe bağlı olarak e-posta adresi, araç modeli, tercih ettiğiniz tarih/saat ve arıza açıklamanızı topluyoruz. Bunun dışında gezinme verisi yalnızca çerez onayı verdiyseniz işlenir.",
            ],
          },
          {
            heading: "Verileri ne için kullanıyoruz",
            paragraphs: [
              "Toplanan veriler yalnızca randevunuzu planlamak, sizinle iletişime geçmek ve servis kaydınızı oluşturmak için kullanılır. Pazarlama amaçlı ileti göndermek için ayrıca onayınız alınır.",
            ],
          },
          {
            heading: "Verileri kimlerle paylaşıyoruz",
            paragraphs: [
              "Verileriniz üçüncü taraflara satılmaz. Yalnızca hizmetin sağlanması için gerekli olan tedarikçilerle (e-posta altyapısı, barındırma sağlayıcısı) ve yasal yükümlülük hâlinde yetkili kurumlarla paylaşılır.",
            ],
          },
          {
            heading: "Saklama süresi",
            paragraphs: [
              "Randevu talepleri, ilgili mevzuatta öngörülen süreler saklı kalmak kaydıyla en fazla 2 yıl saklanır ve süre sonunda silinir.",
            ],
          },
          {
            heading: "Haklarınız ve iletişim",
            paragraphs: [
              "Verilerinize erişme, düzeltme, silme ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi bize e-posta veya telefon yoluyla iletebilirsiniz.",
            ],
          },
        ],
      },
      kvkk: {
        title: "KVKK Aydınlatma Metni",
        description:
          "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
        sections: [
          {
            heading: "Veri sorumlusu",
            paragraphs: [
              "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca veri sorumlusu, bu web sitesini işleten Koluman İstanbul'dur. İletişim bilgileri sitenin iletişim sayfasında yer almaktadır.",
            ],
          },
          {
            heading: "İşlenen kişisel veriler",
            paragraphs: [
              "Kimlik verisi (ad, soyad), iletişim verisi (telefon, e-posta) ve müşteri işlem verisi (araç modeli, talep edilen hizmet, randevu tarihi, arıza açıklaması) işlenmektedir. TC kimlik numarası, doğum tarihi gibi gerekli olmayan veriler talep edilmez.",
            ],
          },
          {
            heading: "İşleme amacı ve hukuki sebep",
            paragraphs: [
              "Verileriniz; randevu talebinizin alınması, planlanması ve sizinle iletişime geçilmesi amacıyla, KVKK m.5/2-c (sözleşmenin kurulması veya ifası) ve m.5/2-f (meşru menfaat) hukuki sebeplerine dayanılarak işlenir.",
            ],
          },
          {
            heading: "Aktarım",
            paragraphs: [
              "Verileriniz, hizmetin sağlanması için kullanılan e-posta ve barındırma hizmet sağlayıcılarına, yalnızca bu amaçla sınırlı olarak aktarılabilir. Yurt dışına aktarım söz konusuysa KVKK m.9 şartlarına uyulur.",
            ],
          },
          {
            heading: "Saklama süresi",
            paragraphs: [
              "Randevu talepleriniz, ilgili mevzuatta öngörülen zorunlu saklama süreleri saklı kalmak kaydıyla en fazla 2 yıl saklanır.",
            ],
          },
          {
            heading: "İlgili kişinin hakları (KVKK m.11)",
            paragraphs: [
              "Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmiş verilerin düzeltilmesini, silinmesini veya yok edilmesini isteme, işlemeye itiraz etme ve zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.",
              "Başvurularınızı sitede belirtilen e-posta adresine veya işletme adresimize yazılı olarak iletebilirsiniz.",
            ],
          },
          {
            heading: "Ticari elektronik ileti",
            paragraphs: [
              "Kampanya ve tanıtım amaçlı ileti gönderimi için ayrı ve açık onayınız alınır. Randevu onayı için verdiğiniz izin, ticari elektronik ileti onayı yerine geçmez.",
            ],
          },
        ],
      },
      cookies: {
        title: "Çerez Politikası",
        description:
          "Sitemizde kullanılan çerezler, amaçları ve tercihlerinizi nasıl değiştirebileceğiniz.",
        sections: [
          {
            heading: "Çerez nedir",
            paragraphs: [
              "Çerezler, siteyi ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Sitenin çalışması ve kullanım deneyiminin iyileştirilmesi için kullanılırlar.",
            ],
          },
          {
            heading: "Kullandığımız çerez türleri",
            paragraphs: [
              "Zorunlu çerezler: Dil tercihiniz ve çerez onayınız gibi sitenin çalışması için gereken bilgileri saklar. Bu çerezler onay gerektirmez.",
              "İsteğe bağlı çerezler: Ziyaret istatistiklerini ölçmek için kullanılır ve yalnızca onay verdiğinizde çalışır. Onay vermediğiniz sürece hiçbir analitik betiği yüklenmez.",
            ],
          },
          {
            heading: "Tercihlerinizi değiştirme",
            paragraphs: [
              "Çerez tercihinizi tarayıcı ayarlarınızdan dilediğiniz zaman silebilir, siteye tekrar girdiğinizde yeniden seçim yapabilirsiniz. Zorunlu çerezleri engellemek sitenin bazı bölümlerinin çalışmamasına neden olabilir.",
            ],
          },
        ],
      },
    },
  },

  notFound: {
    title: "Aradığınız sayfa bulunamadı.",
    text: "Sayfa taşınmış veya kaldırılmış olabilir. Anasayfaya dönebilir ya da hizmetlerimizi inceleyebilirsiniz.",
    cta: "Anasayfaya dön",
  },

  errorPage: {
    title: "Beklenmeyen bir hata oluştu.",
    text: "Sayfayı yenilemeyi deneyin. Sorun devam ederse bize telefonla ulaşabilirsiniz.",
    retry: "Tekrar dene",
  },

  meta: {
    home: {
      title: "Mercedes-Benz Uzman Servisi İstanbul | Koluman",
      description:
        "Mercedes-Benz motor beyni (ECU) ve elektronik arıza tespitinde uzman servis. XENTRY diagnostik, kodlama ve yazılım güncelleme. Hemen randevu alın.",
    },
    services: {
      title: "Mercedes-Benz Servis Hizmetleri | Koluman İstanbul",
      description:
        "AdBlue, motor, şanzıman, EBS & ABS fren, klima ve EGR & DPF arıza tespiti ve onarımı. Tüm Mercedes-Benz servis hizmetlerimiz.",
    },
    appointment: {
      title: "Servis Randevusu Oluştur | Koluman İstanbul",
      description:
        "Mercedes-Benz aracınız için online servis randevusu oluşturun. Hızlı teyit, uzman teknisyen, orijinal parça.",
    },
    campaigns: {
      title: "Mercedes-Benz Servis Kampanyaları | Koluman",
      description:
        "Güncel bakım ve servis kampanyalarımızı inceleyin. Fırsatlardan yararlanmak için randevu oluşturun.",
    },
    about: {
      title: "Hakkımızda | Koluman İstanbul Mercedes-Benz Servisi",
      description:
        "Mercedes-Benz elektronik arıza tespiti ve motor beyni çözümlerinde uzman ekibimiz ve teknolojik altyapımız.",
    },
    contact: {
      title: "İletişim ve Konum | Koluman İstanbul",
      description:
        "Adres, telefon, çalışma saatleri ve yol tarifi. Mercedes-Benz servisimize ulaşın.",
    },
    faq: {
      title: "Sıkça Sorulan Sorular | Mercedes-Benz Servis",
      description:
        "AdBlue, DPF, şanzıman, fren ve klima arızaları ile garanti, orijinal parça ve maliyet hakkında en çok sorulan soruların yanıtları.",
    },
    privacy: {
      title: "Gizlilik Politikası | Koluman İstanbul",
      description: "Kişisel verilerinizi nasıl topladığımız ve koruduğumuz hakkında bilgi.",
    },
    kvkk: {
      title: "KVKK Aydınlatma Metni | Koluman İstanbul",
      description: "6698 sayılı KVKK kapsamında aydınlatma metnimiz.",
    },
    cookies: {
      title: "Çerez Politikası | Koluman İstanbul",
      description: "Sitemizde kullanılan çerezler ve tercihlerinizi yönetme.",
    },
    serviceTitleSuffix: `| ${siteConfig.name}`,
  },

  email: {
    internalSubject: "Yeni randevu talebi",
    customerSubject: "Randevu talebiniz alındı",
    customerIntro:
      "Randevu talebinizi aldık. Ekibimiz en kısa sürede sizi arayarak teyit edecek.",
    referenceLabel: "Talep numarası",
    summaryTitle: "Talep özeti",
  },
};

/**
 * `as const` bilinçli olarak kullanılmadı: `en.ts` bu tipe atanabilsin diye
 * değerlerin `string` olarak genişlemesi gerekiyor. Anahtar eksikliği yine
 * derleme hatası verir.
 */
export type Dictionary = typeof tr;
