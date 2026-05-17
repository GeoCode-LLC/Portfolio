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
    slug: "skyline-bookings",
    cover: "https://picsum.photos/seed/geocode1/1600/1000",
    gallery: [
      "https://picsum.photos/seed/skyline-a/1400/900",
      "https://picsum.photos/seed/skyline-b/1400/900",
      "https://picsum.photos/seed/skyline-c/1400/900",
    ],
    year: "2025",
    client: "Skyline Hospitality Group",
    role: "Web platform · Design & engineering",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Mapbox"],
    url: "https://example.com",
    en: {
      title: "Skyline Bookings",
      category: "Hospitality · Booking",
      summary: "A real-time booking engine for a boutique hotel network across three countries.",
      description: [
        "Skyline came to us with a fragmented reservation flow split across multiple legacy systems. We rebuilt the entire guest-facing experience on Next.js with a custom availability engine that syncs inventory in under 200ms.",
        "The result: a 38% lift in direct bookings, a unified channel manager, and a CMS the operations team actually enjoys using.",
      ],
    },
    ka: {
      title: "Skyline Bookings",
      category: "სასტუმრო · ჯავშანი",
      summary: "რეალურ-დროიანი ჯავშნის სისტემა სამ ქვეყანაში მოქმედი ბუტიკ-სასტუმროების ქსელისთვის.",
      description: [
        "Skyline-მა მოგვმართა გაყოფილი სარეზერვაციო პროცესით, რომელიც რამდენიმე ძველ სისტემაში იყო გაბნეული. ჩვენ თავიდან ავაშენეთ სტუმრის გამოცდილება Next.js-ზე, საკუთარი ხელმისაწვდომობის ძრავით, რომელიც ინვენტარს 200მწ-ში ასინქრონებს.",
        "შედეგი: 38%-იანი ზრდა პირდაპირ ჯავშნებში, ერთიანი არხების მენეჯერი და CMS, რომელსაც ოპერაციული გუნდი ნამდვილად იყენებს.",
      ],
    },
  },
  {
    slug: "lari-pay",
    cover: "https://picsum.photos/seed/geocode2/1600/1000",
    gallery: [
      "https://picsum.photos/seed/lari-a/1400/900",
      "https://picsum.photos/seed/lari-b/1400/900",
      "https://picsum.photos/seed/lari-c/1400/900",
    ],
    year: "2025",
    client: "Lari Pay",
    role: "Mobile + Web · Full product",
    stack: ["React Native", "Node.js", "Kotlin", "AWS", "Plaid"],
    en: {
      title: "Lari Pay",
      category: "Fintech · Payments",
      summary: "A consumer payments app with KYC, instant transfers, and a merchant dashboard.",
      description: [
        "We designed and built Lari Pay from zero — from regulatory-friendly KYC flows to a real-time ledger backing instant peer transfers.",
        "The mobile app launched on iOS and Android with a 4.8 rating; the merchant web dashboard handles settlement, refunds, and dispute workflows.",
      ],
    },
    ka: {
      title: "Lari Pay",
      category: "ფინტექი · გადახდები",
      summary: "მომხმარებლის გადახდის აპი KYC-ით, მყისიერი გადარიცხვებითა და მერჩანტის დაშბორდით.",
      description: [
        "ჩვენ ნულიდან ავაშენეთ Lari Pay — რეგულაცია-მეგობრული KYC-დან რეალურ-დროიან ლეჯერამდე, რომელიც მყისიერ P2P გადარიცხვებს უზრუნველყოფს.",
        "მობილური აპი iOS-სა და Android-ზე 4.8 რეიტინგით გავიდა; ვებ დაშბორდი ფარავს ანგარიშსწორებას, თანხის დაბრუნებას და დავის პროცესებს.",
      ],
    },
  },
  {
    slug: "verra-market",
    cover: "https://picsum.photos/seed/geocode3/1600/1000",
    gallery: [
      "https://picsum.photos/seed/verra-a/1400/900",
      "https://picsum.photos/seed/verra-b/1400/900",
      "https://picsum.photos/seed/verra-c/1400/900",
    ],
    year: "2024",
    client: "Verra",
    role: "Headless storefront · Engineering",
    stack: ["Next.js", "Shopify Hydrogen", "Sanity", "Algolia"],
    en: {
      title: "Verra Market",
      category: "E-commerce · Headless",
      summary: "A headless storefront for an independent fashion label with 60+ regions.",
      description: [
        "Verra needed speed: a global storefront where every page loads under one second on cellular. We moved them off a legacy theme onto a headless Shopify + Next.js stack with edge caching.",
        "Conversion went up 22% in the first quarter, and the editorial team now ships campaigns without engineering involvement.",
      ],
    },
    ka: {
      title: "Verra Market",
      category: "ე-კომერცია · Headless",
      summary: "Headless სავაჭრო პლატფორმა დამოუკიდებელი ფეშენ-ბრენდისთვის 60+ რეგიონში.",
      description: [
        "Verra-ს სიჩქარე სჭირდებოდა: გლობალური მაღაზია, სადაც ყველა გვერდი იტვირთება წამზე ნაკლებში. ჩვენ გადავიყვანეთ ისინი ძველი თემიდან Headless Shopify + Next.js-ის სტეკზე edge ქეშირებით.",
        "კონვერსია გაიზარდა 22%-ით პირველ კვარტალში, ხოლო სარედაქციო გუნდი ახლა კამპანიებს ენჯინერინგის ჩარევის გარეშე უშვებს.",
      ],
    },
  },
  {
    slug: "reserva",
    cover: "https://picsum.photos/seed/geocode4/1600/1000",
    gallery: [
      "https://picsum.photos/seed/reserva-a/1400/900",
      "https://picsum.photos/seed/reserva-b/1400/900",
      "https://picsum.photos/seed/reserva-c/1400/900",
    ],
    year: "2024",
    client: "Reserva",
    role: "SaaS · Product engineering",
    stack: ["Next.js", "tRPC", "Prisma", "Postgres", "Resend"],
    en: {
      title: "Reserva",
      category: "Reservations · SaaS",
      summary: "A reservation SaaS used by 400+ restaurants for floor planning and guest CRM.",
      description: [
        "We partnered with the Reserva team as their first external engineering studio. We rebuilt the floor-plan editor with realtime multiplayer and shipped a guest CRM that ties bookings to lifetime value.",
        "The product now serves 400+ venues with sub-100ms interaction latency on a single Postgres primary.",
      ],
    },
    ka: {
      title: "Reserva",
      category: "რეზერვაცია · SaaS",
      summary: "სარეზერვაციო SaaS, რომელსაც 400+ რესტორანი იყენებს დარბაზის გეგმისა და სტუმრის CRM-ისთვის.",
      description: [
        "ჩვენ Reserva-ს გუნდის პირველი გარე ენჯინერინგ-პარტნიორი გავხდით. თავიდან ავაშენეთ დარბაზის გეგმის რედაქტორი რეალურ-დროიანი მულტიპლეიერით და გავუშვით სტუმრის CRM, რომელიც ჯავშნებს უკავშირებს კლიენტის სიცოცხლის ღირებულებას.",
        "პროდუქტი ახლა 400+ ობიექტს ემსახურება 100მწ-ზე ნაკლები ინტერაქციის დაყოვნებით ერთ Postgres-ის ბაზაზე.",
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
