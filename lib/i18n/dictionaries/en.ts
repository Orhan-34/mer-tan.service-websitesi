import { siteConfig } from "@/lib/site-config";
import type { Dictionary } from "./tr";

/**
 * English dictionary. Must satisfy the `Dictionary` shape defined by `tr.ts` —
 * a missing key is a compile error.
 *
 * ⚠️ Values in [square brackets] and the sample statistics / testimonials must
 * be replaced with real data before launch.
 */
export const en: Dictionary = {
  brand: {
    name: "Koluman İstanbul",
    tagline: "Mercedes-Benz Authorised Service",
    blurb:
      "Specialist service for electronic fault diagnosis and engine ECU repair on Mercedes-Benz vehicles.",
  },

  common: {
    skipToContent: "Skip to content",
    bookAppointment: "Book Now",
    bookAppointmentLong: "Book a Service Appointment",
    callNow: "Call Now",
    getDirections: "Directions",
    getDirectionsLong: "Get Directions",
    whatsapp: "WhatsApp",
    allServices: "All Services",
    learnMore: "Learn More",
    detail: "Details",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    loading: "Loading…",
    breadcrumbLabel: "Breadcrumb",
    workingHours: "Opening Hours",
    address: "Address",
    phone: "Phone",
    email: "Email",
    required: "required",
  },

  hours: [
    { days: "Monday – Friday", time: "08:30 – 18:30" },
    { days: "Saturday", time: "09:00 – 16:00" },
    { days: "Sunday", time: "Closed" },
  ],
  hoursShort: "Mon–Sat 08:30–18:30",

  nav: {
    home: "Home",
    services: "Services",
    appointment: "Book a Service",
    campaigns: "Offers",
    contact: "Contact",
    about: "About Us",
    faq: "FAQ",
    mainLabel: "Main menu",
    footerLabel: "Footer menu",
  },

  megaMenu: {
    promoTitle: "Free Initial Assessment",
    promoText:
      "Your first evaluation and guidance at the appointment is free of charge.",
    promoCta: "Book an appointment",
  },

  hero: {
    ctaPrimary: "Book a Service Appointment",
    ctaSecondary: "Explore Our Services",
    prev: "Previous slide",
    next: "Next slide",
    slideLabel: "Slide",
    sliderLabel: "Featured images",
    slides: {
      dealership: {
        title: "Your Mercedes-Benz is in expert hands.",
        subtitle:
          "Specialist diagnosis and lasting repairs for engine ECU and electronic faults.",
        alt: "Black Mercedes-Benz E-Class in front of the Koluman İstanbul Mercedes-Benz authorised service building",
      },
      expertise: {
        title: "The right diagnosis for electronic faults.",
        subtitle:
          "With XENTRY equipment and genuine software access we trace faults to their source.",
        alt: "Silver Mercedes-Benz GLE in front of modern concrete architecture",
      },
      workshop: {
        title: "Authorised standards, specialist team.",
        subtitle:
          "Mercedes-Benz trained technicians, genuine parts and a documented process.",
        alt: "Mercedes-AMG GT in the service workshop with a technician work area",
      },
    },
  },

  trust: {
    label: "Service guarantees",
    items: {
      authorized: "Authorised Service Assurance",
      software: "Genuine Software & Technical Data",
      technicians: "Specialist Electronics Technicians",
      diagnostics: "Advanced Diagnostic Technology",
      standards: "Mercedes-Benz Service Standards",
    },
  },

  services: {
    heading: "Our Services",
    scopeTitle: "What's included",
    relatedTitle: "Related Services",
    detailCtaTitle: "Book an appointment for this fault.",
    detailCtaText:
      "Describe the symptom and our technician will plan a suitable slot. Nothing is carried out without your approval.",
    items: {
      ecu: {
        title: "Engine ECU Fault Diagnosis and Repair",
        excerpt:
          "Diagnosis, repair and reprogramming of faulty engine control units.",
        intro: [
          "The engine control unit (ECU) is your car's brain, managing fuelling, ignition and emissions within milliseconds. ECU faults caused by moisture, voltage spikes, incorrect intervention or corrupted software rarely present as a dead unit — they usually show up as rough idling, power loss, a permanent engine warning light or a communication error.",
          "At Koluman İstanbul, ECU work always starts with correct diagnosis: we measure whether the unit is genuinely faulty and whether the problem originates in the supply lines or in the software. We never recommend replacing a unit unnecessarily.",
        ],
        scope: [
          "ECU readout and fault memory analysis",
          "Circuit and power supply measurements",
          "Board-level repair",
          "Reprogramming (flashing)",
          "Vehicle coding and adaptation",
          "Post-repair road test",
        ],
      },
      xentry: {
        title: "Professional Diagnostics with Mercedes-Benz XENTRY",
        excerpt:
          "Full scan of every control unit using the genuine XENTRY system.",
        intro: [
          "XENTRY is Mercedes-Benz's own official diagnostic system. It reads control units that generic aftermarket tools cannot reach, applies the manufacturer's defined test procedures and reveals the real cause behind a fault code.",
          "With a full scan of all control units, live data analysis and guided tests, we find the fault instead of guessing at it.",
        ],
        scope: [
          "Full scan of all ECUs",
          "Live data and actuator tests",
          "Guided fault tracing",
          "SCN coding",
          "Detailed written report",
        ],
      },
      electronics: {
        title: "Electronic System Fault Diagnosis",
        excerpt:
          "Lasting repairs for wiring looms, sensors and communication lines.",
        intro: [
          "A modern Mercedes-Benz has more than 70 control units communicating over CAN and LIN buses. A single chafed wire, a corroded connector or a weak earth point can generate dozens of seemingly unrelated fault codes.",
          "Replacing parts to narrow down this kind of fault is both expensive and ineffective. We trace the circuit physically with an oscilloscope and electrical measurements, and fix the fault at its source.",
        ],
        scope: [
          "CAN/LIN bus analysis",
          "Wiring loom and connector inspection",
          "Sensor and actuator measurement",
          "Parasitic drain detection",
          "Lighting and comfort systems",
        ],
      },
      coding: {
        title: "Coding, Software Updates and Adaptation",
        excerpt:
          "Coding, updates and adaptation after component replacement.",
        intro: [
          "On a Mercedes-Benz, fitting a new part is not enough on its own: the component must be registered to the vehicle, coded against the VIN and, where required, updated. Skip this step and the part will not work or the car will light up a fault.",
          "With genuine software access we carry out coding, adaptation and updates strictly to the manufacturer's procedure.",
        ],
        scope: [
          "SCN coding",
          "Software updates",
          "Post-replacement adaptation",
          "Key and immobiliser work",
          "Optional equipment activation",
          "Injector / transmission adaptation",
        ],
      },
      maintenance: {
        title: "Scheduled Maintenance",
        excerpt:
          "Documented servicing that follows the manufacturer's schedule.",
        intro: [
          "A service is more than an oil and filter change. The Mercedes-Benz ASSYST schedule defines a task list that varies with how the car is used; skipping items on that list affects both warranty and vehicle life.",
          "We service to the manufacturer's procedure, document every operation and update the digital service record.",
        ],
        scope: [
          "Work carried out to the ASSYST schedule",
          "Engine oil and filter change",
          "Brake, suspension and tyre inspection",
          "Battery and charging system test",
          "Digital service record update",
          "Post-service condition report",
        ],
      },
      transmission: {
        title: "Transmission Fault Diagnosis",
        excerpt:
          "Electronic diagnosis and adaptation for 7G/9G-TRONIC gearboxes.",
        intro: [
          "Harsh shifting, delayed engagement or limp-home mode on an automatic gearbox does not always mean mechanical damage. In many cases the cause is valve body electronics, speed sensors or corrupted adaptation values.",
          "By reading live data from the transmission control unit we establish on the electronic side whether mechanical work is needed at all.",
        ],
        scope: [
          "Transmission control unit scan",
          "Live data and pressure value analysis",
          "Valve body electronics check",
          "Adaptation reset and relearn",
          "Oil and filter change",
          "Road test verification",
        ],
      },
      climate: {
        title: "Climate and Comfort Systems",
        excerpt:
          "Fault diagnosis for air conditioning, seats, windows and comfort electronics.",
        intro: [
          "Poor air conditioning performance is usually not a matter of low refrigerant — it more often comes down to the pressure sensor, the compressor control valve or the climate control unit. Seat, window and door module faults are equally electronic in nature.",
          "We measure first on comfort systems, which avoids unnecessary regassing and part replacement.",
        ],
        scope: [
          "A/C circuit pressure and leak test",
          "Compressor and control valve inspection",
          "Climate control unit scan",
          "Seat, window and door module faults",
          "Temperature and air quality sensors",
          "Regassing and disinfection",
        ],
      },
      inspection: {
        title: "Pre-Purchase Vehicle Inspection",
        excerpt:
          "Electronic and mechanical condition report before buying used.",
        intro: [
          "The true condition of a used Mercedes-Benz cannot be judged by eye. Cleared fault memories, past airbag deployment, mileage inconsistencies and repaired damage only surface when the control units are read.",
          "Our pre-purchase inspection hands you the car's electronic history and mechanical condition as a written report.",
        ],
        scope: [
          "Fault memory history across all control units",
          "Mileage and service record consistency check",
          "Airbag and safety system history",
          "Engine and transmission live data analysis",
          "Bodywork and paint thickness measurement",
          "Written inspection report with photographs",
        ],
      },
    },
  },

  stats: {
    disclaimer:
      "These figures are placeholders and must be replaced with real data before launch.",
    items: {
      experience: "Years of Mercedes-Benz experience",
      vehicles: "Vehicles serviced",
      accuracy: "First-time-right diagnosis rate",
      rating: "Google customer rating",
    },
  },

  whyUs: {
    title: "Why Choose Us?",
    paragraph:
      "We provide specialist, reliable and technology-led service for engine ECU and electronic faults on Mercedes-Benz vehicles. We don't guess at faults — we measure them.",
    items: [
      "Mercedes-Benz focused electronics specialists",
      "Advanced diagnostic and measurement technology",
      "Access to genuine software and technical data",
      "A commitment to lasting, reliable repairs",
      "The right, safest solution for your vehicle",
    ],
    cta: "Learn More",
  },

  form: {
    title: "Service Appointment",
    description:
      "Book an appointment for your vehicle's electronic faults quickly and easily.",
    imageAlt: "Service technician working with XENTRY diagnostic equipment",
    labels: {
      fullName: "Full name",
      phone: "Phone",
      email: "Email",
      serviceType: "Service",
      vehicleModel: "Vehicle model",
      date: "Date",
      time: "Time",
      note: "Fault description",
      kvkkConsent: "Privacy consent",
    },
    placeholders: {
      fullName: "Full name",
      phone: "0 (5__) ___ __ __",
      email: "you@example.com",
      serviceType: "Select a service",
      vehicleModel: "e.g. W213 E200",
      time: "Select a time",
      note: "Briefly describe the symptom you have noticed.",
    },
    optional: "optional",
    detailsToggle: "Add details",
    kvkkConsentPrefix: "I have read and accept the ",
    kvkkConsentLink: "Data Protection Notice",
    kvkkConsentSuffix: " regarding the processing of my personal data.",
    submit: "Request Appointment",
    submitting: "Sending…",
    footnote: "We confirm your request by phone within 1 business hour.",
    successTitle: "Your appointment request has been received.",
    successText: "Our team will call you shortly to confirm your appointment.",
    successReference: "Your reference number",
    successAgain: "Make another request",
    errorTitle: "Your request could not be sent.",
    errorFallback: "You can also call us directly:",
    serviceOptions: {
      ecu: "Engine ECU Fault Diagnosis",
      xentry: "XENTRY Diagnostics",
      electronics: "Electronic System Fault Diagnosis",
      coding: "Coding / Software Update",
      maintenance: "Scheduled Maintenance",
      other: "Other / Not sure",
    },
    errors: {
      fullNameMin: "Please enter your first and last name.",
      fullNameMax: "That name is too long.",
      phone: "Please enter a valid Turkish mobile number.",
      email: "Please enter a valid email address.",
      serviceType: "Please select a service.",
      vehicleModelMax: "That vehicle model is too long.",
      datePast: "You cannot choose a date in the past.",
      dateSunday: "We are closed on Sundays — please pick another day.",
      dateRange: "Appointments can be booked up to 60 days ahead.",
      time: "Please select a time.",
      noteMax: "The note can be at most 600 characters.",
      kvkk: "You must accept the data protection notice to continue.",
      generic: "Please check the highlighted fields.",
      send: "Your request could not be sent. Please try again or call us.",
      rateLimit: "Too many attempts. Please try again in a few minutes.",
    },
  },

  process: {
    eyebrow: "How we work",
    title: "Our Service Process",
    steps: {
      booking: {
        title: "Booking and Initial Call",
        description:
          "Fill in the form or call us; we listen to the symptom and plan a suitable time.",
      },
      diagnosis: {
        title: "Detailed Fault Diagnosis",
        description:
          "All control units are scanned with XENTRY and measuring equipment to locate the source.",
      },
      approval: {
        title: "Approved Work and Repair",
        description:
          "You receive the findings and the cost; nothing is carried out without your approval.",
      },
      delivery: {
        title: "Testing and Handover",
        description:
          "After a road test and final check, your car is handed back with its report.",
      },
    },
  },

  testimonials: {
    title: "What Our Customers Say",
    action: "Google reviews",
    footnote: "4.8/5 on Google · 240+ reviews",
    notice:
      "Sample testimonials — replace with genuine customer reviews before launch.",
    ratingLabel: "5 out of 5 stars",
    items: [
      {
        name: "Mehmet A.",
        vehicle: "W213 E220d",
        quote:
          "Two other garages couldn't solve my idling problem; they measured and found it. The only place that said the ECU didn't need replacing — the fault was in the wiring loom.",
      },
      {
        name: "Elif K.",
        vehicle: "X253 GLC 250",
        quote:
          "Taken in at the booked time and given the cost in writing before any work. Nothing was touched until I approved it. That transparency matters.",
      },
      {
        name: "Serkan T.",
        vehicle: "W447 Vito",
        quote:
          "Our fleet van had a recurring electronic fault. They talked me through the XENTRY report in detail and we collected it the same day.",
      },
      {
        name: "Burak Ö.",
        vehicle: "C217 S 500 Coupé",
        quote:
          "Went in for a comfort system fault. No unnecessary parts were suggested — it turned out to be module coding. A team that knows the job.",
      },
      {
        name: "Ayşe D.",
        vehicle: "W176 A180",
        quote:
          "I had a pre-purchase inspection done. The damage history in the report saved me from a bad buy.",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    description:
      "Answers to the most common questions about warranty, diagnostic times, genuine parts and cost.",
    items: {
      warranty: {
        question: "Will servicing outside an authorised dealer void my warranty?",
        answer:
          "Under current Turkish legislation, having your car serviced outside an authorised dealer does not in itself void your warranty; however, faults caused directly by the work carried out may fall outside warranty cover. That is why using genuine parts, following the manufacturer's procedure and documenting everything is standard practice for us. All work is invoiced and recorded.",
      },
      "ecu-symptoms": {
        question: "How do I know if the engine ECU is faulty?",
        answer:
          "The most common symptoms are: hard starting or no start at all, rough idling, sudden power loss, a permanently lit engine warning light, the diagnostic tool failing to communicate with the unit, and an unexplained rise in fuel consumption. Many of these can have causes outside the ECU, so measurements must always be taken before a unit is declared faulty.",
      },
      "xentry-duration": {
        question: "How long does XENTRY diagnostics take, and is it chargeable?",
        answer:
          "A standard full scan and report takes around 45–60 minutes. Guided testing can take longer on complex faults. Diagnostics is chargeable; if we carry out the repair, the fee is offset against the cost of the work. Please call us for current pricing.",
      },
      "walk-in": {
        question: "Can I come without an appointment?",
        answer:
          "You can, but there may be a wait depending on how busy we are. Electronic fault diagnosis requires both equipment and technician planning, so booking shortens the process and improves the chance of same-day handover.",
      },
      "genuine-parts": {
        question: "Do you use genuine parts?",
        answer:
          "Yes. Our standard practice is to use Mercedes-Benz genuine parts. Where an OEM-equivalent alternative exists, we will offer it as an option and clearly explain the difference and the warranty terms. No part is replaced without your approval.",
      },
      "cost-estimate": {
        question: "Can I find out the cost in advance?",
        answer:
          "Once diagnosis is complete, you receive the planned work, the parts required and the total cost in writing. No work begins without your approval. If an additional fault emerges during diagnosis, we contact you again.",
      },
      "courtesy-car": {
        question: "Is a courtesy car available if I leave my vehicle?",
        answer:
          "[To be completed according to availability: a courtesy car service is available / is offered for certain work.] We can confirm the details when you book.",
      },
      models: {
        question: "Which Mercedes-Benz models do you work on?",
        answer:
          "We cover the full Mercedes-Benz passenger and light commercial range: A, B, C, E and S-Class; CLA, CLS, GLA, GLB, GLC, GLE, GLS; SLK/SLC; V-Class, Vito and Sprinter. We also carry out electronic fault diagnosis on AMG models.",
      },
    },
  },

  closing: {
    title: "The right address for your car.",
    text: "Describe the symptom and leave the rest to us. Book today or call us directly and let our technician guide you.",
    mapCta: "Load map",
    mapNote: "The map loads when you click it (for privacy and performance).",
    mapAlt: "Map preview showing the service location",
    mapTitle: "Koluman İstanbul location map",
  },

  footer: {
    contactTitle: "Get in Touch",
    quickLinksTitle: "Quick Links",
    mapPreview: "View location",
    rights: "All rights reserved.",
    legal: {
      privacy: "Privacy Policy",
      kvkk: "Data Protection Notice",
      cookies: "Cookie Policy",
    },
    socialLabel: "Social media",
  },

  cookieBanner: {
    text: "We would like to use optional cookies to improve the site. Non-essential cookies only run with your consent.",
    accept: "Accept",
    reject: "Reject",
    link: "Cookie Policy",
    title: "Cookie preferences",
  },

  pages: {
    services: {
      title: "Our Services",
      description:
        "Everything we do on Mercedes-Benz vehicles: engine ECU work, diagnostics, electronic fault finding and coding.",
    },
    appointment: {
      title: "Book a Service Appointment",
      description:
        "Describe the symptom and pick a suitable day. We confirm your request by phone within 1 business hour.",
      infoTitle: "Before your appointment",
      infoItems: [
        "Bring your registration document and any previous service reports.",
        "If the fault is intermittent, note when and how it appears.",
        "Electronic fault diagnosis takes around 45–60 minutes.",
        "No part is replaced before you approve the work and the cost.",
      ],
    },
    campaigns: {
      title: "Offers",
      description:
        "Browse our current service and maintenance offers. Book an appointment to take advantage of them.",
      empty:
        "There are no active offers at the moment. Follow us for the latest deals.",
      emptyCta: "Book an appointment",
    },
    about: {
      title: "About Us",
      description:
        "Our team and technology for Mercedes-Benz electronic fault diagnosis and engine ECU repair.",
      lead: "We don't guess at faults — we measure them.",
      sections: [
        {
          heading: "What we do differently",
          paragraphs: [
            "In most garages an electronic fault is narrowed down by swapping parts. That approach is expensive and often never finds the real cause. We start every job with measurement: no part replacement is proposed until supply lines, earth points, CAN/LIN communication and sensor signals have been physically verified.",
            "It can look slower, but the result lasts. When your car doesn't come back with the same fault, we both win.",
          ],
        },
        {
          heading: "The team",
          paragraphs: [
            "Our team is made up of electronics and mechanical technicians trained on Mercedes-Benz systems. Engine management, transmission electronics and comfort systems are separate specialisms, so a complex fault goes to the right specialist rather than to whoever is free.",
          ],
        },
        {
          heading: "Equipment",
          paragraphs: [
            "We use the genuine XENTRY diagnostic system with guided testing and SCN coding access, a four-channel oscilloscope, isolated circuit measurement equipment and a micro-soldering station for board-level repair. Software updates run through the manufacturer's servers, strictly to procedure.",
          ],
        },
        {
          heading: "Our principles",
          paragraphs: [
            "No work without approval, no invoicing for a fault we have not actually identified, and documentation for everything we do. If we cannot solve a fault, we say so plainly and point you to the right place.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact and Location",
      description:
        "Address, phone, opening hours and directions. Get in touch with our Mercedes-Benz service.",
      formTitle: "Write to us",
      formDescription:
        "Use the form below for an appointment request, or simply call us.",
      legalTitle: "Company information",
      legalNote:
        "Trade name, MERSİS number and tax office details must be added here before launch.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description:
        "Answers to the most common questions about warranty, diagnostic times, genuine parts and cost.",
      stillQuestions: "Didn't find the answer you were looking for?",
      stillQuestionsCta: "Contact us",
    },
    legal: {
      lastUpdated: "Last updated",
      disclaimer:
        "This text is for information only and does not constitute legal advice. It should be reviewed by a legal adviser before launch.",
      privacy: {
        title: "Privacy Policy",
        description:
          "How we collect, use and protect your personal data.",
        sections: [
          {
            heading: "What we collect",
            paragraphs: [
              "When you submit an appointment request we collect your name, phone number, optionally your email address, vehicle model, preferred date and time, and your description of the fault. Beyond that, browsing data is only processed if you have consented to cookies.",
            ],
          },
          {
            heading: "How we use it",
            paragraphs: [
              "The data is used solely to schedule your appointment, contact you and create your service record. Separate consent is obtained before any marketing message is sent.",
            ],
          },
          {
            heading: "Who we share it with",
            paragraphs: [
              "Your data is never sold. It is shared only with suppliers required to deliver the service (email infrastructure, hosting provider) and with authorities where legally required.",
            ],
          },
          {
            heading: "Retention",
            paragraphs: [
              "Appointment requests are kept for a maximum of 2 years, subject to any longer statutory retention periods, and are deleted afterwards.",
            ],
          },
          {
            heading: "Your rights and contact",
            paragraphs: [
              "You have the right to access, correct and delete your data and to object to its processing. You can send your request to us by email or telephone.",
            ],
          },
        ],
      },
      kvkk: {
        title: "Data Protection Notice (KVKK)",
        description:
          "Information notice under Turkish Personal Data Protection Law no. 6698.",
        sections: [
          {
            heading: "Data controller",
            paragraphs: [
              "Under Turkish Personal Data Protection Law no. 6698 (“KVKK”), the data controller is Koluman İstanbul, the operator of this website. Contact details are given on the contact page.",
            ],
          },
          {
            heading: "Personal data processed",
            paragraphs: [
              "We process identity data (first and last name), contact data (phone, email) and customer transaction data (vehicle model, requested service, appointment date, fault description). Data that is not required — such as national ID number or date of birth — is never requested.",
            ],
          },
          {
            heading: "Purpose and legal basis",
            paragraphs: [
              "Your data is processed to receive, schedule and confirm your appointment request, on the legal bases of KVKK art. 5/2-c (establishment or performance of a contract) and art. 5/2-f (legitimate interest).",
            ],
          },
          {
            heading: "Transfers",
            paragraphs: [
              "Your data may be transferred to the email and hosting providers used to deliver the service, strictly limited to that purpose. Where a transfer abroad is involved, the conditions of KVKK art. 9 are observed.",
            ],
          },
          {
            heading: "Retention period",
            paragraphs: [
              "Appointment requests are kept for a maximum of 2 years, subject to any mandatory statutory retention periods.",
            ],
          },
          {
            heading: "Your rights (KVKK art. 11)",
            paragraphs: [
              "You have the right to learn whether your personal data is being processed, to request information about it, to learn the purpose of processing and whether it is used accordingly, to request correction, deletion or destruction of incomplete or incorrect data, to object to processing, and to claim compensation for any loss suffered.",
              "You may submit your request in writing to the email address shown on the site or to our business address.",
            ],
          },
          {
            heading: "Commercial electronic messages",
            paragraphs: [
              "Separate, explicit consent is obtained before any promotional message is sent. Consent given for appointment confirmation does not constitute consent for commercial electronic messages.",
            ],
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        description:
          "The cookies we use, why we use them and how to change your preferences.",
        sections: [
          {
            heading: "What cookies are",
            paragraphs: [
              "Cookies are small text files stored in your browser when you visit the site. They are used to make the site work and to improve the browsing experience.",
            ],
          },
          {
            heading: "Types of cookie we use",
            paragraphs: [
              "Essential cookies: store information the site needs to work, such as your language preference and your cookie choice. These do not require consent.",
              "Optional cookies: used to measure visit statistics and only run once you have given consent. No analytics script is loaded until you consent.",
            ],
          },
          {
            heading: "Changing your preferences",
            paragraphs: [
              "You can clear your cookie preference from your browser settings at any time and choose again on your next visit. Blocking essential cookies may stop parts of the site from working.",
            ],
          },
        ],
      },
    },
  },

  notFound: {
    title: "We couldn't find that page.",
    text: "It may have been moved or removed. You can go back to the homepage or browse our services.",
    cta: "Back to homepage",
  },

  errorPage: {
    title: "Something went wrong.",
    text: "Please try reloading the page. If the problem persists, feel free to call us.",
    retry: "Try again",
  },

  meta: {
    home: {
      title: "Mercedes-Benz Authorised Service Istanbul | Koluman",
      description:
        "Specialist service for Mercedes-Benz engine ECU and electronic fault diagnosis. XENTRY diagnostics, coding and software updates. Book today.",
    },
    services: {
      title: "Mercedes-Benz Service and Repair | Koluman İstanbul",
      description:
        "ECU repair, XENTRY diagnostics, electronic fault finding, coding and software updates. All our Mercedes-Benz services.",
    },
    appointment: {
      title: "Book a Service Appointment | Koluman İstanbul",
      description:
        "Book an online service appointment for your Mercedes-Benz. Fast confirmation, specialist technicians, genuine parts.",
    },
    campaigns: {
      title: "Mercedes-Benz Service Offers | Koluman",
      description:
        "Browse our current service and maintenance offers and book an appointment to use them.",
    },
    about: {
      title: "About Us | Koluman İstanbul Mercedes-Benz Service",
      description:
        "Our specialist team and technology for Mercedes-Benz electronic fault diagnosis and engine ECU repair.",
    },
    contact: {
      title: "Contact and Location | Koluman İstanbul",
      description:
        "Address, phone, opening hours and directions to our Mercedes-Benz service.",
    },
    faq: {
      title: "Frequently Asked Questions | Mercedes-Benz Service",
      description:
        "Answers about warranty, diagnostic times, genuine parts and cost.",
    },
    privacy: {
      title: "Privacy Policy | Koluman İstanbul",
      description: "How we collect and protect your personal data.",
    },
    kvkk: {
      title: "Data Protection Notice | Koluman İstanbul",
      description: "Our information notice under Turkish law no. 6698 (KVKK).",
    },
    cookies: {
      title: "Cookie Policy | Koluman İstanbul",
      description: "The cookies we use and how to manage your preferences.",
    },
    serviceTitleSuffix: `| ${siteConfig.name}`,
  },

  email: {
    internalSubject: "New appointment request",
    customerSubject: "We received your appointment request",
    customerIntro:
      "We have received your appointment request. Our team will call you shortly to confirm.",
    referenceLabel: "Reference number",
    summaryTitle: "Request summary",
  },
};
