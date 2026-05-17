export type Lang = "en" | "ka";

type DictShape = {
  nav: { home: string; services: string; portfolio: string; about: string; contact: string };
  hero: { eyebrow: string; title1: string; title2: string; title3: string; sub: string; cta: string; ctaAlt: string };
  services: { kicker: string; title: string; items: { t: string; d: string }[] };
  portfolio: { kicker: string; title: string; view: string; items: { t: string; c: string; tag: string }[] };
  about: { kicker: string; title: string; body: string; stats: { n: string; l: string }[] };
  contact: { kicker: string; title: string; body: string; name: string; email: string; message: string; send: string };
  footer: { rights: string };
};

export const dict: Record<Lang, DictShape> = {
  en: {
    nav: { home: "Home", services: "Services", portfolio: "Portfolio", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Software studio",
      title1: "We build",
      title2: "digital products",
      title3: "that grow businesses.",
      sub: "GeoCode is a software agency crafting fast, elegant web and mobile applications for booking, fintech, e-commerce and reservation platforms.",
      cta: "Start a project",
      ctaAlt: "See our work",
    },
    services: {
      kicker: "Services",
      title: "What we do",
      items: [
        { t: "Web Applications", d: "High-performance Next.js & React platforms built for scale and SEO." },
        { t: "Mobile Apps", d: "Native-feel iOS & Android apps with React Native and Swift / Kotlin." },
        { t: "Booking & Reservations", d: "Real-time availability engines, channel managers, and pricing logic." },
        { t: "Fintech", d: "Secure payments, KYC flows, dashboards, and compliance-ready architecture." },
        { t: "E-commerce", d: "Headless storefronts, checkout optimization, and conversion-driven UX." },
        { t: "Product Design", d: "Brand-aligned UI systems, prototypes, and design engineering." },
      ],
    },
    portfolio: {
      kicker: "Selected work",
      title: "Recent projects",
      view: "View case",
      items: [
        { t: "Cafeterio", c: "Catering · Mobile app", tag: "2025" },
        { t: "Cafeter.io", c: "Catering · Web platform", tag: "2025" },
        { t: "Bisly", c: "Smart buildings · Web platform", tag: "2025" },
        { t: "CreditService +", c: "Microfinance · Web platform", tag: "2024" },
      ],
    },
    about: {
      kicker: "About",
      title: "A small team. Senior craft. Honest timelines.",
      body: "We are a focused studio of engineers and designers building software that lasts. Every project ships with clean code, measurable performance, and a partnership that continues after launch.",
      stats: [
        { n: "40+", l: "Products shipped" },
        { n: "6", l: "Industries" },
        { n: "9/10", l: "Client retention" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something",
      body: "Tell us about your idea — we usually respond within a day.",
      name: "Your name",
      email: "Email",
      message: "Project details",
      send: "Send message",
    },
    footer: { rights: "All rights reserved." },
  },
  ka: {
    nav: { home: "მთავარი", services: "სერვისები", portfolio: "პორტფოლიო", about: "ჩვენ შესახებ", contact: "კონტაქტი" },
    hero: {
      eyebrow: "პროგრამული სტუდია",
      title1: "ჩვენ ვქმნით",
      title2: "ციფრულ პროდუქტებს,",
      title3: "რომლებიც ცვლის ბიზნესებს.",
      sub: "GeoCode არის სააგენტო, რომელიც ქმნის სწრაფ და ელეგანტურ ვებ და მობილურ აპლიკაციებს ჯავშნისთვის, ფინტექის, ე-კომერციისა და რეზერვაციის პლატფორმებისთვის.",
      cta: "დაიწყე პროექტი",
      ctaAlt: "ნახე ნამუშევრები",
    },
    services: {
      kicker: "სერვისები",
      title: "რას ვაკეთებთ",
      items: [
        { t: "ვებ აპლიკაციები", d: "მაღალწარმადობიანი Next.js & React პლატფორმები მასშტაბირებისთვის." },
        { t: "მობილური აპლიკაციები", d: "iOS & Android აპები React Native, Swift და Kotlin-ით." },
        { t: "ჯავშანი და რეზერვაცია", d: "რეალურ-დროიანი ხელმისაწვდომობა და ფასწარმოქმნის ლოგიკა." },
        { t: "ფინტექი", d: "უსაფრთხო გადახდები, KYC, დაშბორდები და კომპლაიანსი." },
        { t: "ე-კომერცია", d: "Headless მაღაზიები და კონვერსიაზე ორიენტირებული UX." },
        { t: "პროდუქტის დიზაინი", d: "ბრენდული UI სისტემები, პროტოტიპები და დიზაინ-ინჟინერია." },
      ],
    },
    portfolio: {
      kicker: "შერჩეული ნამუშევარი",
      title: "ბოლო პროექტები",
      view: "ნახე ქეისი",
      items: [
        { t: "Cafeterio", c: "კეთერინგი · მობილური აპი", tag: "2025" },
        { t: "Cafeter.io", c: "კეთერინგი · ვებ პლატფორმა", tag: "2025" },
        { t: "Bisly", c: "ჭკვიანი შენობები · ვებ პლატფორმა", tag: "2025" },
        { t: "კრედიტსერვისი +", c: "მიკროსაფინანსო · ვებ პლატფორმა", tag: "2024" },
      ],
    },
    about: {
      kicker: "ჩვენ შესახებ",
      title: "პატარა გუნდი. სენიორი ხელობა. გულახდილი ვადები.",
      body: "ჩვენ ვართ ფოკუსირებული სტუდია ინჟინრებისა და დიზაინერების, რომელიც ქმნის გრძელვადიან პროგრამულ უზრუნველყოფას.",
      stats: [
        { n: "40+", l: "გაშვებული პროდუქტი" },
        { n: "6", l: "ინდუსტრია" },
        { n: "9/10", l: "კლიენტის შენარჩუნება" },
      ],
    },
    contact: {
      kicker: "კონტაქტი",
      title: "მოდი, ერთად ავაშენოთ",
      body: "მოგვწერე შენი იდეის შესახებ — ჩვეულებრივ ვპასუხობთ დღის განმავლობაში.",
      name: "სახელი",
      email: "ელფოსტა",
      message: "პროექტის დეტალები",
      send: "გაგზავნა",
    },
    footer: { rights: "ყველა უფლება დაცულია." },
  },
};

export type Dict = DictShape;
