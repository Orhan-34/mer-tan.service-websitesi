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
    tagline: "Mercedes-Benz Yetkili Servisi",
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
    ctaPrimary: "Servis Randevusu Al",
    ctaSecondary: "Hizmetlerimizi İnceleyin",
    prev: "Önceki görsel",
    next: "Sonraki görsel",
    slideLabel: "Görsel",
    sliderLabel: "Öne çıkan görseller",
    slides: {
      dealership: {
        title: "Mercedes-Benz'iniz emin ellerde.",
        subtitle:
          "Motor beyni ve elektronik arızalarda uzman teşhis ve kalıcı çözüm.",
        alt: "Koluman İstanbul Mercedes-Benz yetkili servis binası önünde siyah Mercedes-Benz E-Serisi",
      },
      expertise: {
        title: "Elektronik arızada doğru teşhis.",
        subtitle:
          "XENTRY donanımı ve orijinal yazılım erişimiyle arızanın kaynağına iniyoruz.",
        alt: "Modern beton mimari önünde gümüş Mercedes-Benz GLE",
      },
      workshop: {
        title: "Yetkili servis standardı, uzman ekip.",
        subtitle:
          "Mercedes-Benz eğitimli teknisyenler, orijinal parça ve süreç güvencesi.",
        alt: "Servis atölyesinde Mercedes-AMG GT ve teknisyen çalışma alanı",
      },
    },
  },

  trust: {
    label: "Servis güvenceleri",
    items: {
      authorized: "Yetkili Servis Güvencesi",
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
      ecu: {
        title: "Motor Beyni (ECU) Arıza Tespit ve Çözüm",
        excerpt:
          "Arızalı motor kontrol ünitelerinde tespit, onarım ve yeniden programlama.",
        intro: [
          "Motor kontrol ünitesi (ECU), aracınızın beynidir; yakıt, ateşleme ve emisyon sistemlerini milisaniyeler içinde yönetir. Nem, voltaj dalgalanması, hatalı müdahale veya yazılım bozulması sonucu oluşan ECU arızaları çoğu zaman “çalışmıyor” olarak değil, düzensiz rölanti, güç kaybı, arıza lambası ve haberleşme hatası olarak kendini gösterir.",
          "Koluman İstanbul'da ECU arızalarında önce doğru teşhis yapılır: ünitenin gerçekten arızalı olup olmadığı, sorunun besleme hattından mı yoksa yazılımdan mı kaynaklandığı ölçümle belirlenir. Gereksiz ünite değişimi önerilmez.",
        ],
        scope: [
          "ECU okuma ve arıza kaydı analizi",
          "Devre ve besleme ölçümleri",
          "Kart seviyesinde onarım",
          "Yeniden programlama (flash)",
          "Araca kodlama ve adaptasyon",
          "İşlem sonrası yol testi",
        ],
      },
      xentry: {
        title: "Mercedes-Benz XENTRY ile Profesyonel Diagnostik",
        excerpt:
          "Orijinal XENTRY sistemiyle tüm kontrol ünitelerinin detaylı taraması.",
        intro: [
          "XENTRY, Mercedes-Benz'in kendi geliştirdiği resmî teşhis sistemidir. Piyasadaki genel amaçlı cihazların erişemediği kontrol ünitelerini okur, üreticinin tanımladığı test adımlarını uygular ve arıza kodunun ardındaki gerçek nedeni gösterir.",
          "Tüm kontrol ünitelerinin tam taraması, canlı veri analizi ve yönlendirilmiş test (guided test) ile arızayı tahmin etmeden buluyoruz.",
        ],
        scope: [
          "Tüm ECU'ların tam taraması",
          "Canlı veri ve aktüatör testi",
          "Yönlendirilmiş arıza takibi",
          "SCN kodlama",
          "Detaylı yazılı rapor",
        ],
      },
      electronics: {
        title: "Elektronik Sistem Arıza Tespiti",
        excerpt:
          "Kablo tesisatı, sensör ve haberleşme hatlarında kalıcı çözüm.",
        intro: [
          "Modern bir Mercedes-Benz'de 70'in üzerinde kontrol ünitesi CAN ve LIN hatları üzerinden haberleşir. Tek bir kablo teması, korozyona uğramış bir soket ya da zayıf bir kütle bağlantısı, birbiriyle ilgisiz görünen onlarca arıza kodu üretebilir.",
          "Bu tür arızalarda parça değiştirerek ilerlemek hem pahalı hem sonuçsuzdur. Osiloskop ve devre ölçümleriyle hattı fiziksel olarak takip ediyor, arızayı kaynağında çözüyoruz.",
        ],
        scope: [
          "CAN/LIN hat analizi",
          "Kablo tesisatı ve soket kontrolü",
          "Sensör ve aktüatör ölçümü",
          "Parazitik akım (kaçak akım) tespiti",
          "Aydınlatma ve konfor sistemleri",
        ],
      },
      coding: {
        title: "Kodlama, Yazılım Güncelleme ve Adaptasyon",
        excerpt:
          "Parça değişimi sonrası kodlama, güncelleme ve adaptasyon işlemleri.",
        intro: [
          "Mercedes-Benz araçlarda parça değişimi tek başına yeterli değildir; yeni parçanın araca tanıtılması, VIN'e göre kodlanması ve gerekiyorsa yazılımının güncellenmesi gerekir. Bu adım atlandığında parça çalışmaz veya araç arıza lambası yakar.",
          "Orijinal yazılım erişimiyle kodlama, adaptasyon ve güncelleme işlemlerini üretici prosedürüne uygun yapıyoruz.",
        ],
        scope: [
          "SCN kodlama",
          "Yazılım güncelleme",
          "Parça sonrası adaptasyon",
          "Anahtar ve immobilizer işlemleri",
          "Donanım (opsiyon) aktivasyonu",
          "Enjektör / şanzıman adaptasyonu",
        ],
      },
      maintenance: {
        title: "Periyodik Bakım",
        excerpt:
          "Üretici bakım planına uygun, kayıt altına alınan servis bakımı.",
        intro: [
          "Periyodik bakım yalnızca yağ ve filtre değişimi değildir. Mercedes-Benz'in ASSYST bakım planı, aracın kullanım profiline göre değişen bir işlem listesi tanımlar; bu liste eksik uygulandığında hem garanti hem araç ömrü etkilenir.",
          "Bakımlarınızı üretici prosedürüne uygun yapıyor, tüm işlemleri belgeliyor ve dijital servis kaydına işliyoruz.",
        ],
        scope: [
          "ASSYST bakım planına uygun işlem",
          "Motor yağı ve filtre değişimi",
          "Fren, süspansiyon ve lastik kontrolü",
          "Akü ve şarj sistemi testi",
          "Dijital servis kaydı güncelleme",
          "Bakım sonrası genel kontrol raporu",
        ],
      },
      transmission: {
        title: "Şanzıman Arıza Tespiti",
        excerpt:
          "7G/9G-TRONIC şanzımanlarda elektronik teşhis ve adaptasyon.",
        intro: [
          "Otomatik şanzımanlarda hissedilen sertlik, gecikmeli vites geçişi veya acil durum (limp) moduna geçiş her zaman mekanik arıza anlamına gelmez. Çoğu durumda sorun; valf gövdesi elektroniği, hız sensörleri veya adaptasyon değerlerindeki bozulmadır.",
          "Şanzıman kontrol ünitesinin canlı verilerini okuyarak mekanik müdahale gerekip gerekmediğini önce elektronik tarafta netleştiriyoruz.",
        ],
        scope: [
          "Şanzıman kontrol ünitesi taraması",
          "Canlı veri ve basınç değerleri analizi",
          "Valf gövdesi elektroniği kontrolü",
          "Adaptasyon sıfırlama ve yeniden öğretme",
          "Yağ ve filtre değişimi",
          "Yol testi ile doğrulama",
        ],
      },
      climate: {
        title: "Klima ve Konfor Sistemleri",
        excerpt:
          "Klima, koltuk, cam ve konfor elektroniğinde arıza tespiti.",
        intro: [
          "Klima performans kaybı çoğu zaman gaz eksikliğinden değil; basınç sensörü, kompresör kontrol valfi ya da klima kontrol ünitesi kaynaklıdır. Aynı şekilde koltuk, cam ve kapı modüllerindeki arızalar da genellikle elektronik kökenlidir.",
          "Konfor sistemlerinde önce ölçüm yapıyor, gereksiz gaz ve parça değişiminin önüne geçiyoruz.",
        ],
        scope: [
          "Klima devresi basınç ve sızdırmazlık testi",
          "Kompresör ve kontrol valfi kontrolü",
          "Klima kontrol ünitesi taraması",
          "Koltuk, cam ve kapı modülü arızaları",
          "Sıcaklık ve hava kalitesi sensörleri",
          "Gaz şarjı ve dezenfeksiyon",
        ],
      },
      inspection: {
        title: "Araç Ekspertiz",
        excerpt:
          "İkinci el alım öncesi elektronik ve mekanik durum raporu.",
        intro: [
          "İkinci el bir Mercedes-Benz'in gerçek durumu göz muayenesiyle anlaşılmaz. Silinmiş arıza kayıtları, geçmişteki hava yastığı açılması, kilometre tutarsızlığı ve onarılmış hasarlar ancak kontrol ünitelerinin okunmasıyla ortaya çıkar.",
          "Alım öncesi ekspertizde aracın elektronik geçmişini ve mekanik durumunu yazılı raporla teslim ediyoruz.",
        ],
        scope: [
          "Tüm kontrol ünitelerinin arıza kaydı geçmişi",
          "Kilometre ve servis kaydı tutarlılık kontrolü",
          "Hava yastığı ve güvenlik sistemi geçmişi",
          "Motor ve şanzıman canlı veri analizi",
          "Kaporta ve boya kalınlık ölçümü",
          "Fotoğraflı yazılı ekspertiz raporu",
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
      ecu: "Motor Beyni (ECU) Arıza Tespiti",
      xentry: "XENTRY Diagnostik",
      electronics: "Elektronik Sistem Arıza Tespiti",
      coding: "Kodlama / Yazılım Güncelleme",
      maintenance: "Periyodik Bakım",
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
          "Formu doldurun ya da bizi arayın; arıza belirtinizi dinleyip uygun zamanı planlayalım.",
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
      "Garanti, diagnostik süresi, orijinal parça ve maliyet hakkında en çok sorulan soruların yanıtları.",
    items: {
      warranty: {
        question: "Yetkili servis dışında yaptırdığım işlem garantimi etkiler mi?",
        answer:
          "Türkiye'de yürürlükteki mevzuat gereği, aracınızın bakımını yetkili servis dışında yaptırmanız garantinizi kendiliğinden geçersiz kılmaz; ancak yapılan işlemin doğrudan neden olduğu arızalar garanti kapsamı dışında kalabilir. Bu nedenle orijinal parça kullanımı, üretici prosedürüne uygun işlem ve belgelendirme bizim için standarttır. Tüm işlemleriniz faturalandırılır ve kayıt altına alınır.",
      },
      "ecu-symptoms": {
        question: "Motor beyni (ECU) arızası nasıl anlaşılır?",
        answer:
          "En sık görülen belirtiler: aracın zor çalışması veya hiç çalışmaması, rölantide düzensizlik, ani güç kaybı, arıza (motor) lambasının sürekli yanması, diagnostik cihazın üniteyle haberleşememesi ve yakıt tüketiminde açıklanamayan artış. Bu belirtilerin birçoğu ECU dışındaki nedenlerden de kaynaklanabilir; bu yüzden ünite değişimi önerilmeden önce mutlaka ölçüm yapılmalıdır.",
      },
      "xentry-duration": {
        question: "XENTRY diagnostik ne kadar sürer, ücretli mi?",
        answer:
          "Standart tam tarama ve rapor işlemi ortalama 45–60 dakika sürer. Arızanın karmaşıklığına göre yönlendirilmiş test süresi uzayabilir. Diagnostik işlemi ücretlidir; onarım tarafımızda yapıldığında bu ücret işlem bedelinden mahsup edilir. Güncel ücret için lütfen bizi arayın.",
      },
      "walk-in": {
        question: "Randevusuz gelebilir miyim?",
        answer:
          "Gelebilirsiniz, ancak yoğunluğa bağlı olarak bekleme süresi oluşabilir. Elektronik arıza tespiti cihaz ve teknisyen planlaması gerektirdiği için randevulu gelmeniz hem işlem süresini kısaltır hem de aynı gün teslim ihtimalini artırır.",
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
        "Mercedes-Benz araçlarda motor beyni, diagnostik, elektronik arıza tespiti ve kodlama hizmetlerimizin tamamı.",
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
        "Garanti, diagnostik süresi, orijinal parça ve maliyet hakkında en çok sorulan soruların yanıtları.",
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
      title: "Mercedes-Benz Yetkili Servisi İstanbul | Koluman",
      description:
        "Mercedes-Benz motor beyni (ECU) ve elektronik arıza tespitinde uzman servis. XENTRY diagnostik, kodlama ve yazılım güncelleme. Hemen randevu alın.",
    },
    services: {
      title: "Mercedes-Benz Servis Hizmetleri | Koluman İstanbul",
      description:
        "ECU onarımı, XENTRY diagnostik, elektronik arıza tespiti, kodlama ve yazılım güncelleme. Tüm Mercedes-Benz servis hizmetlerimiz.",
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
        "Garanti, diagnostik süresi, orijinal parça ve maliyet hakkında en çok sorulan soruların yanıtları.",
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
