export type Project = {
  slug: string;
  cover: string;
  backdrop?: string;
  gallery: string[];
  year: string;
  client: string;
  role: string;
  stack: string[];
  url?: string;
  kind?: "web" | "mobile";
  accent?: string;
  framed?: boolean;
  en: { title: string; category: string; summary: string; description: string[] };
  ka: { title: string; category: string; summary: string; description: string[] };
};

export const projects: Project[] = [
  {
    slug: "copolo",
    kind: "mobile",
    accent: "#1aa8a8",
    cover: "/projects/copolo/home.svg",
    backdrop: "/projects/copolo/backdrop.svg",
    gallery: [
      "/projects/copolo/home.svg",
      "/projects/copolo/flights.svg",
      "/projects/copolo/cars.svg",
      "/projects/copolo/stays.svg",
    ],
    year: "2024",
    client: "Copolo",
    role: "Mobile app · Engineering",
    stack: ["React Native", "React.js", "Redux Toolkit Query", "TypeScript"],
    url: "https://www.copolo.com/",
    en: {
      title: "Copolo",
      category: "Travel · Mobile app",
      summary: "An all-in-one travel app: hotel rentals, trip planning, flight bookings and car rentals.",
      description: [
        "Copolo is a consumer travel app that brings stays, flights, activities and car rentals together in a single, fast experience. We engineered the full mobile client and the API integration layer.",
        "Built on React Native with a typed Redux Toolkit Query data layer, the app pulls live inventory from multiple providers and keeps the UI snappy on cellular connections.",
      ],
    },
    ka: {
      title: "Copolo",
      category: "მოგზაურობა · მობილური აპი",
      summary: "ერთიანი მოგზაურობის აპი: სასტუმროების ჯავშანი, ფრენების შერჩევა, ავტომობილების ქირაობა და მარშრუტის დაგეგმვა.",
      description: [
        "Copolo არის სამომხმარებლო მოგზაურობის აპი, რომელიც აერთიანებს სასტუმროებს, ფრენებს, აქტივობებსა და მანქანების ქირაობას ერთ სწრაფ გამოცდილებაში. ჩვენ ავაშენეთ მთლიანი მობილური აპლიკაცია და API-ის ინტეგრაცია.",
        "აპი React Native-ზე და ტიპირებული Redux Toolkit Query-ის მონაცემთა ფენაზე დგას, რეალურ დროში ამოაქვს მონაცემები რამდენიმე პროვაიდერისგან და ინტერფეისი მობილურ ქსელზეც სწრაფი რჩება.",
      ],
    },
  },
  {
    slug: "cafeterio",
    kind: "mobile",
    accent: "#16a34a",
    cover: "/projects/cafeterio/home.svg",
    backdrop: "/projects/cafeterio/backdrop.svg",
    gallery: [
      "/projects/cafeterio/home.svg",
      "/projects/cafeterio/menu.svg",
      "/projects/cafeterio/cart.svg",
      "/projects/cafeterio/profile.svg",
      "/projects/cafeter-web/home.svg",
      "/projects/cafeter-web/office-lunch.svg",
      "/projects/cafeter-web/admin.svg",
    ],
    year: "2025",
    client: "Cafeterio",
    role: "Mobile + Web · Full product",
    stack: ["React Native", "Next.js", "TypeScript", "Node.js", "Stripe", "i18n"],
    url: "https://cafeter.io",
    en: {
      title: "Cafeterio",
      category: "Catering · Full product",
      summary: "Two-sided corporate catering system — clients order from the mobile app, kitchens receive and fulfil from the web admin panel.",
      description: [
        "Cafeterio is the full ordering loop for company lunches: employees browse the daily menu, spend a daily allowance and check out in one tap from the React Native mobile app, while the kitchen receives those orders live in a Next.js admin panel and prepares them by delivery slot.",
        "Both sides share one data model and a Stripe-backed payment pipeline. The mobile client applies the employer's subsidy before any card charge; the admin panel manages menus, categories, clients, reporting and a live support chat — with the public marketing site driving sign-ups in the background.",
      ],
    },
    ka: {
      title: "Cafeterio",
      category: "კეთერინგი · სრული პროდუქტი",
      summary: "ორმხრივი კორპორატიული კეთერინგის სისტემა — კლიენტები შეკვეთენ მობილური აპიდან, კუჭინა იღებს და ამზადებს ვებ ადმინ პანელიდან.",
      description: [
        "Cafeterio არის შეკვეთის სრული მარყუჟი კომპანიის ლანჩისთვის: თანამშრომლები ათვალიერებენ დღის მენიუს, ხარჯავენ დღიურ ლიმიტს და გადადიან ერთი შეხებით React Native-ის მობილური აპიდან, ხოლო კუჭინა ცოცხლად იღებს შეკვეთებს Next.js-ის ადმინ პანელში და მზადდება მიწოდების სლოტების მიხედვით.",
        "ორივე მხარე ერთ მონაცემთა მოდელსა და Stripe-ის გადახდის pipeline-ს იყენებს. მობილური აპი ჯერ დამსაქმებლის სუბსიდიას ხარჯავს, შემდეგ ბარათს; ადმინ პანელი ფარავს მენიუს, კატეგორიებს, კლიენტებს, რეპორტინგსა და ცოცხალ მხარდაჭერის ჩატს — ხოლო საჯარო მარკეტინგული საიტი იწვევს ახალ კომპანიებს.",
      ],
    },
  },
  {
    slug: "bisly",
    kind: "web",
    framed: true,
    accent: "#5dd0a6",
    cover: "/projects/bisly/home.svg",
    backdrop: "/projects/bisly/backdrop.svg",
    gallery: [
      "/projects/bisly/home.svg",
      "/projects/bisly/dashboard.svg",
      "/projects/bisly/features.svg",
    ],
    year: "2025",
    client: "Bisly",
    role: "Web platform · Engineering",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "IoT integrations"],
    url: "https://www.bisly.com/",
    en: {
      title: "Bisly",
      category: "Smart buildings · Web platform",
      summary: "A smart-building operating system: HVAC, lighting, access and energy management in one connected platform.",
      description: [
        "Bisly is a smart-building platform that unifies HVAC, lighting, access control, consumption data and remote metering across entire portfolios. We engineered the marketing site and parts of the building-management surface that operators use day to day.",
        "Built on Next.js with a typed API layer, the platform streams live device data into a single dashboard so property managers can monitor energy, occupancy and environmental KPIs without juggling vendor tools.",
      ],
    },
    ka: {
      title: "Bisly",
      category: "ჭკვიანი შენობები · ვებ პლატფორმა",
      summary: "ჭკვიანი შენობების მართვის სისტემა: HVAC, განათება, წვდომის კონტროლი და ენერგიის მონიტორინგი ერთ პლატფორმაში.",
      description: [
        "Bisly არის ჭკვიანი შენობების პლატფორმა, რომელიც აერთიანებს HVAC-ს, განათებას, წვდომის კონტროლს, მოხმარების მონაცემებსა და დისტანციურ აღრიცხვას მთელი პორტფელისთვის. ჩვენ ავაშენეთ მარკეტინგული საიტი და მმართველი პორტალის ნაწილი, რომელსაც ოპერატორები ყოველდღიურად იყენებენ.",
        "პლატფორმა აშენებულია Next.js-ზე ტიპირებული API ფენით და რეალურ დროში აჩვენებს მოწყობილობების მონაცემებს ერთ დაშბორდში — ენერგია, დატვირთვა და გარემო ერთ ადგილზე, ცალკეული ვენდორის აპლიკაციების გარეშე.",
      ],
    },
  },
  {
    slug: "creditservice",
    kind: "web",
    framed: true,
    accent: "#facc15",
    cover: "/projects/creditservice/home.svg",
    backdrop: "/projects/creditservice/backdrop.svg",
    gallery: [
      "/projects/creditservice/home.svg",
      "/projects/creditservice/products.svg",
      "/projects/creditservice/payment.svg",
    ],
    year: "2024",
    client: "კრედიტსერვისი +",
    role: "Web platform · Engineering",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Online payments"],
    url: "https://creditservice.ge",
    en: {
      title: "CreditService +",
      category: "Microfinance · Web platform",
      summary: "The public site and online-payments surface for a Georgian microfinance organization.",
      description: [
        "CreditService + (MISO) needed a public-facing site that explains their consumer and SME credit products, lets customers apply online, and accepts loan repayments through a secure web flow.",
        "We rebuilt the brand site with a clear bilingual content structure, wired up online payments against their core banking partner, and shipped a customer-facing dashboard for statements and quarterly reports.",
      ],
    },
    ka: {
      title: "კრედიტსერვისი +",
      category: "მიკროსაფინანსო · ვებ პლატფორმა",
      summary: "ქართული მიკროსაფინანსო ორგანიზაციის საჯარო საიტი და ონლაინ გადახდის ფენა.",
      description: [
        "კრედიტსერვისი + (MISO) საჭიროებდა საჯარო საიტს, რომელიც გასაგებად აღწერდა მის სასესხო პროდუქტებს ფიზიკური და მცირე ბიზნესისთვის, ონლაინ განაცხადს და უსაფრთხო სესხის ონლაინ გადახდას.",
        "ჩვენ თავიდან ავაშენეთ ბრენდის საიტი ორენოვანი სტრუქტურით, ჩავრთეთ ონლაინ გადახდის ფენა საბანკო პარტნიორთან და გავუშვით მომხმარებლის დაშბორდი ანგარიშებისა და კვარტალური აუდიტისთვის.",
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
