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
    name: "Mer-tan Services",
    tagline: "Mercedes-Benz Specialist Service",
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

  hoursBadge: {
    openLabel: "Open 24/7",
    openDays: "Monday – Saturday",
    closedLabel: "Closed",
    closedDays: "Sunday",
  },

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

  hero: {
    title: "Your Mercedes-Benz is in expert hands.",
    ctaSecondary: "Explore Our Services",
    prev: "Previous slide",
    next: "Next slide",
    slideLabel: "Slide",
    sliderLabel: "Featured images",
  },

  trust: {
    label: "Service guarantees",
    items: {
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
      adblue: {
        title: "AdBlue Systems",
        excerpt:
          "Diagnosis and repair of the AdBlue tank, pump, heater lines and injector.",
        intro: [
          "The AdBlue system is a precision fluid injection setup that keeps diesel vehicles within emissions limits. Poor-quality AdBlue, crystallisation, a failed pump or a blocked nozzle leads to critical situations: a mileage countdown in the instrument cluster, restricted engine torque and a vehicle that will not restart.",
          "In our workshop the AdBlue tank, pump pressure, heater lines and injector assembly are analysed in detail. Software and mechanical blockages are cleared with professional equipment, returning the system to its original operating values.",
        ],
        scope: [
          "AdBlue tank and level sensor inspection",
          "Pump pressure measurement",
          "Heater line inspection",
          "Injector and nozzle blockage cleaning",
          "Rectification of crystallisation faults",
          "Software fault and countdown check",
        ],
      },
      engine: {
        title: "Engine System Faults",
        excerpt:
          "Root-cause diagnosis for power loss, high fuel consumption and rough running.",
        intro: [
          "The engine is the heart of your vehicle; it directly determines performance, fuel consumption and driving safety. Faults originating in the fuel system, the sensors or mechanical components show up as poor pulling power, high fuel consumption, rough running and black or blue smoke from the exhaust.",
          "We never replace engine parts on guesswork. Computer diagnostics, compression and sensor measurements pinpoint the source of the problem (injector, turbo, sensors and so on), so you reach the solution directly without unnecessary expense.",
        ],
        scope: [
          "Computer diagnostic testing",
          "Compression measurement",
          "Injector and fuel system inspection",
          "Turbo and air path inspection",
          "Sensor measurements",
          "Post-repair road test",
        ],
      },
      transmission: {
        title: "Transmission Faults",
        excerpt:
          "Targeted repair for shift shock, slipping and delayed engagement.",
        intro: [
          "The transmission is the most delicate and complex system in the drivetrain, transferring engine power to the wheels. Degraded oil quality, gear wear or hydraulic and electronic unit problems announce themselves as shift shock, slipping, delayed engagement or the vehicle dropping into protection mode.",
          "Transmission diagnosis starts by reading the fault codes and carrying out hydraulic pressure tests. By examining the degree of wear and how the electronic control unit responds, we aim for a targeted repair or overhaul rather than a complete replacement.",
        ],
        scope: [
          "Fault code readout and analysis",
          "Hydraulic pressure testing",
          "Electronic control unit inspection",
          "Assessment of the degree of wear",
          "Targeted repair and overhaul",
          "Oil and filter change",
        ],
      },
      brakes: {
        title: "EBS & ABS Brake Systems",
        excerpt:
          "Sensor, valve and modulator diagnosis that never compromises safety.",
        intro: [
          "ABS and EBS systems preserve steering control under hard braking by preventing the wheels from locking. Contaminated sensors, breaks in the wiring loom or valve and modulator faults reveal themselves through a hard brake pedal, warnings in the instrument cluster and longer stopping distances.",
          "We check the wheel speed sensors, pressure modulators and control unit communication with an oscilloscope and dedicated test equipment. Only the faulty line or module is identified and repaired, with no compromise to driving safety.",
        ],
        scope: [
          "Wheel speed sensor inspection",
          "Pressure modulator testing",
          "Wiring loom and connector inspection",
          "Signal analysis with an oscilloscope",
          "Brake control unit communication check",
          "Clearing instrument cluster warnings",
        ],
      },
      climate: {
        title: "Vehicle Air Conditioning Systems",
        excerpt:
          "UV leak detection, regassing, compressor testing and system hygiene.",
        intro: [
          "Air conditioning is not only about summer comfort — it is vital for clearing misted windows quickly in winter and for cabin air quality. Refrigerant leaks, a seized compressor or a blocked cabin filter show up as weak cooling or heating, bad odours and unusual engine noise when the A/C is switched on.",
          "Leak points are pinpointed with UV tracer gas and precise pressure testing. Regassing, compressor testing and bacterial system hygiene bring your air conditioning back to maximum efficiency.",
        ],
        scope: [
          "Leak detection with UV tracer gas",
          "Precise pressure testing",
          "Compressor testing and inspection",
          "Refrigerant evacuation and recharge",
          "Cabin filter replacement",
          "Bacterial system hygiene",
        ],
      },
      egrdpf: {
        title: "EGR & DPF Faults",
        excerpt:
          "Regeneration, professional cleaning and root-cause repair for soot blockages.",
        intro: [
          "The EGR system and the diesel particulate filter (DPF) trap harmful particles in the exhaust gas and keep them out of the environment. Short urban journeys and unsuitable oil or fuel cause soot build-up, blockage, an illuminated engine warning light and a noticeable loss of power.",
          "On blocked DPF and EGR systems we measure the physical soot level and verify the sensor values before any replacement. Regeneration, professional cleaning or component repair resolves the underlying cause of the blockage — an injector or sensor fault — so the problem does not return.",
        ],
        scope: [
          "Physical soot level measurement",
          "Differential pressure and temperature sensor verification",
          "Forced regeneration",
          "Professional DPF and EGR cleaning",
          "EGR valve repair or replacement",
          "Rectification of the root cause of the blockage",
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
      adblue: "AdBlue Systems",
      engine: "Engine System Faults",
      transmission: "Transmission Faults",
      brakes: "EBS & ABS Brake Systems",
      climate: "Vehicle Air Conditioning Systems",
      egrdpf: "EGR & DPF Faults",
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
          "Get in touch with us; we listen to the symptom and plan a suitable time.",
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
      "Answers to the most common questions about AdBlue, DPF, transmission, brake and air conditioning faults, plus genuine parts and cost.",
    items: {
      "adblue-warning": {
        question:
          "I have an AdBlue warning and a mileage countdown in the cluster — will my vehicle stop running?",
        answer:
          "The countdown is the grace period you are given from the moment the system detects the fault. Once it reaches zero the vehicle first restricts engine torque, and then may not restart after you switch off the ignition. The warning is not only triggered by a low AdBlue level; crystallisation from poor-quality fluid, a failed pump or a blocked nozzle cause it too. Topping up the tank is therefore often not enough on its own — if the countdown continues, the system needs to be analysed. Bringing the vehicle in before it locks out keeps the work both quick and inexpensive.",
      },
      "dpf-cleaning": {
        question: "Can a blocked DPF be cleaned, or do I have to replace it?",
        answer:
          "In most cases replacement is not necessary. Before recommending one, we measure the physical soot level in the filter and verify that the differential pressure and temperature sensors are reading correctly. Depending on the degree of blockage we carry out a forced regeneration or professional cleaning. What matters most is resolving the root cause of the blockage — a faulty injector, a defective sensor, unsuitable oil or fuel, or constant short-distance driving. Without that, a new filter will block again just as quickly.",
      },
      "transmission-overhaul": {
        question: "Does a transmission fault always mean a complete replacement?",
        answer:
          "No. Shift shock, slipping, delayed engagement or the car dropping into protection mode does not necessarily mean the gearbox has to be rebuilt. We first read the fault codes, run hydraulic pressure tests and examine how the electronic control unit responds. The problem often lies in oil quality or on the hydraulic or electronic side, in which case a targeted repair or overhaul replaces a full unit change. If mechanical wear really is advanced, we tell you clearly and show you the measurements behind that conclusion.",
      },
      "abs-warning": {
        question: "The ABS/EBS light is on — can I keep driving?",
        answer:
          "Your brakes still work, but with ABS/EBS disabled the wheels can lock under hard braking, you can lose steering control and stopping distances get longer. We therefore advise against long journeys with the warning lit. The cause is usually a contaminated wheel speed sensor or a break in the wiring loom; using an oscilloscope and dedicated test equipment we identify and repair only the faulty line or module.",
      },
      "climate-gas": {
        question: "My air conditioning isn't cooling — is a regas enough?",
        answer:
          "Refrigerant does not disappear on its own; the system is a sealed circuit, so if the charge is dropping there is a leak somewhere. A regas without finding that leak is lost within weeks. We locate the leak point first with UV tracer gas and precise pressure testing, then recharge the system. Weak cooling is not always about refrigerant either — a seized compressor or a blocked cabin filter produces the same complaint, and if there is a bad odour the system also needs bacterial hygiene treatment.",
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
      models: {
        question: "Which Mercedes-Benz models do you work on?",
        answer:
          "We cover the full Mercedes-Benz passenger and light commercial range: A, B, C, E and S-Class; CLA, CLS, GLA, GLB, GLC, GLE, GLS; SLK/SLC; V-Class, Vito and Sprinter. We also serve buses, trucks and other heavy commercial Mercedes-Benz vehicles. We also carry out electronic fault diagnosis on AMG models.",
      },
    },
  },

  closing: {
    title: "The right address for your car.",
    text: "Describe the symptom and leave the rest to us. Call us directly and let our technician guide you.",
    mapAlt: "Map preview showing the service location",
    mapTitle: "Koluman İstanbul location map",
  },

  footer: {
    contactTitle: "Get in Touch",
    quickLinksTitle: "Quick Links",
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
        "Everything we do: AdBlue, engine, transmission, EBS & ABS brake, air conditioning and EGR & DPF fault diagnosis and repair.",
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
      gallery: {
        workshop: "The Koluman İstanbul service workshop",
        team: "Our technicians working on Mercedes-Benz systems",
        equipment: "Measurement equipment we use for electronic fault diagnosis",
      },
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
        "Answers to the most common questions about AdBlue, DPF, transmission, brake and air conditioning faults, plus genuine parts and cost.",
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
      title: "Mercedes-Benz Specialist Service Istanbul | Koluman",
      description:
        "Specialist service for Mercedes-Benz engine ECU and electronic fault diagnosis. XENTRY diagnostics, coding and software updates. Book today.",
    },
    services: {
      title: "Mercedes-Benz Service and Repair | Koluman İstanbul",
      description:
        "AdBlue, engine, transmission, EBS & ABS brake, air conditioning and EGR & DPF fault diagnosis and repair. All our Mercedes-Benz services.",
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
        "Answers about AdBlue, DPF, transmission, brake and air conditioning faults, genuine parts and cost.",
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
