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
    ],
    year: "2025",
    client: "Cafeterio",
    role: "Mobile app · Engineering",
    stack: ["React Native", "TypeScript", "Node.js", "Stripe"],
    url: "https://cafeter.io",
    en: {
      title: "Cafeterio",
      category: "Catering · Mobile app",
      summary: "A corporate catering app that lets employees order lunch within a daily allowance and pay seamlessly.",
      description: [
        "Cafeterio brings company catering into a single mobile experience: a daily menu, an allowance-aware cart, and one-tap checkout. We built the consumer app and the payments integration end to end.",
        "The React Native client tracks the remaining budget in real time, applies subsidies before card charges, and ships orders to the kitchen with delivery windows the operations team can plan around.",
      ],
    },
    ka: {
      title: "Cafeterio",
      category: "კეთერინგი · მობილური აპი",
      summary: "კორპორატიული კეთერინგის აპი, რომელიც თანამშრომლებს დღიური ლიმიტის ფარგლებში ლანჩის შეკვეთის და გადახდის საშუალებას აძლევს.",
      description: [
        "Cafeterio აერთიანებს კომპანიის კეთერინგს ერთ მობილურ გამოცდილებად: დღის მენიუ, ლიმიტის გათვალისწინებული კალათა და ერთი შეხებით გადახდა. ჩვენ ავაშენეთ მომხმარებლის აპი და გადახდის ინტეგრაცია.",
        "React Native-ის აპი რეალურ დროში ადევნებს თვალს დარჩენილ ბიუჯეტს, თავდაპირველად სუბსიდიას იყენებს, შემდეგ ბარათს, და შეკვეთებს კუჭინაში მიწოდების ფანჯრებით აგზავნის.",
      ],
    },
  },
  {
    slug: "cafeter-io",
    kind: "web",
    framed: true,
    accent: "#16a34a",
    cover: "/projects/cafeter-web/home.svg",
    backdrop: "/projects/cafeter-web/backdrop.svg",
    gallery: [
      "/projects/cafeter-web/home.svg",
      "/projects/cafeter-web/office-lunch.svg",
      "/projects/cafeter-web/admin.svg",
    ],
    year: "2025",
    client: "Cafeter.io",
    role: "Web platform · Design & engineering",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "i18n"],
    url: "https://cafeter.io",
    en: {
      title: "Cafeter.io",
      category: "Catering · Web platform",
      summary: "The marketing site and operations portal behind Cafeterio's corporate catering platform.",
      description: [
        "Cafeter.io is the web side of the catering product — a multilingual marketing site plus authenticated portals for kitchens, employers and employees to manage menus, budgets, orders, invoices and analytics.",
        "We shipped it on Next.js with English, Georgian and Russian locales, integrated Stripe for payment authorization and capture, and tied the same data model that powers the mobile app to a provider dashboard.",
      ],
    },
    ka: {
      title: "Cafeter.io",
      category: "კეთერინგი · ვებ პლატფორმა",
      summary: "Cafeterio-ს კორპორატიული კეთერინგის პლატფორმის მარკეტინგული საიტი და ოპერაციული პორტალი.",
      description: [
        "Cafeter.io არის პროდუქტის ვებ მხარე — მრავალენოვანი მარკეტინგული საიტი და ავტორიზებული პორტალები კუჭინებისთვის, დამსაქმებლებისთვის და თანამშრომლებისთვის: მენიუ, ბიუჯეტი, შეკვეთები, ინვოისები და ანალიტიკა.",
        "ავაშენეთ Next.js-ზე ინგლისური, ქართული და რუსული ენებით, ჩავრთეთ Stripe გადახდის ავტორიზაცია/ჩამოჭრა და მობილური აპის იგივე მონაცემთა მოდელი დავაკავშირეთ პროვაიდერის დაშბორდს.",
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
