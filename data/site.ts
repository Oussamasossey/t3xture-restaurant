const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;

export const SITE = {
  name: "Saveur",
  tagline: "Seasonal cooking, quietly done",
  description:
    "Saveur is a neighbourhood fine-dining restaurant serving a seasonal, market-led menu in a warm, editorial dining room. Reserve a table online.",
  phone: "+1 (415) 555-0148",
  phoneHref: "tel:+14155550148",
  email: "hello@saveur.demo",
  emailHref: "mailto:hello@saveur.demo",
  address: {
    street: "148 Alder Lane",
    city: "San Francisco",
    region: "CA",
    postalCode: "94110",
    country: "United States",
    line: "148 Alder Lane, San Francisco, CA 94110",
  },
  mapsQuery: "https://www.google.com/maps/search/?api=1&query=148+Alder+Lane+San+Francisco+CA",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "X", href: "https://x.com" },
  ],
  founded: 2012,
} as const;

export interface HoursRow {
  day: string;
  hours: string;
  closed?: boolean;
}

export const HOURS: HoursRow[] = [
  { day: "Monday", hours: "Closed", closed: true },
  { day: "Tuesday", hours: "5:30 pm – 10:00 pm" },
  { day: "Wednesday", hours: "5:30 pm – 10:00 pm" },
  { day: "Thursday", hours: "5:30 pm – 10:00 pm" },
  { day: "Friday", hours: "5:30 pm – 11:00 pm" },
  { day: "Saturday", hours: "11:00 am – 11:00 pm" },
  { day: "Sunday", hours: "11:00 am – 9:00 pm" },
];

export const TESTIMONIALS = [
  {
    quote:
      "The kind of room you don't want to leave. We came for the ribeye and stayed for three hours of effortless service.",
    name: "Marion Devereux",
    meta: "Dinner for two · March",
    rating: 5,
  },
  {
    quote:
      "Every plate looked composed and tasted inevitable. The kitchen's vegetarian course was the highlight of our year eating out.",
    name: "Idris Whitfield",
    meta: "Tasting menu · February",
    rating: 5,
  },
  {
    quote:
      "Warm, unhurried and quietly excellent. The wine flight recommendation alone was worth the reservation.",
    name: "Priya Raghunathan",
    meta: "Anniversary dinner · January",
    rating: 5,
  },
] as const;

export const GALLERY = [
  {
    src: img("photo-1517248135467-4c7edcad34c4"),
    alt: "Saveur dining room with set tables and warm pendant lighting",
    caption: "The dining room, set for service",
  },
  {
    src: img("photo-1552566626-52f8b828add9"),
    alt: "Wide view of the restaurant interior with wooden tables and red chairs",
    caption: "Main room, late afternoon",
  },
  {
    src: img("photo-1528605248644-14dd04022da1"),
    alt: "Guests dining together along a long communal table",
    caption: "The long table, Saturdays",
  },
  {
    src: img("photo-1574096079513-d8259312b785"),
    alt: "Ornate bar with bottles and warm interior detailing",
    caption: "The bar",
  },
  {
    src: img("photo-1498837167922-ddd27525d352"),
    alt: "Small bowls of prepared ingredients arranged for service",
    caption: "Mise en place",
  },
  {
    src: img("photo-1577219491135-ce391730fb2c"),
    alt: "Chef plating a dish under copper heat lamps at the pass",
    caption: "The pass",
  },
  {
    src: img("photo-1510812431401-41d2bd2722f3"),
    alt: "Guests toasting with glasses of red wine",
    caption: "A toast",
  },
  {
    src: img("photo-1466978913421-dad2ebd01d17"),
    alt: "Overhead view of friends sharing plates around a table",
    caption: "Sharing plates",
  },
];

export const STORY_IMAGES = {
  primary: img("photo-1577219491135-ce391730fb2c"),
  secondary: img("photo-1498837167922-ddd27525d352"),
  hero: img("photo-1414235077428-338989a2e8c0"),
};

export const CHEF = {
  name: "Élodie Marchand",
  role: "Executive Chef & Co-founder",
  portrait: img("photo-1581299894007-aaa50297cf16"),
  portraitAlt:
    "Executive chef in a white jacket and toque standing in the dining room",
  quote:
    "Cooking is mostly subtraction. We take one good ingredient from a farm we trust, remove everything that gets in its way, and send it out warm.",
  bio: [
    "Élodie trained in Lyon and spent eight years in Copenhagen before opening Saveur with her brother in 2012. She writes the menu every Monday, after the market, and throws out whatever the farms cannot supply that week.",
    "Her cooking is unfussy by design: long ferments, live fire, and sauces built over days rather than minutes.",
  ],
  signature: "Élodie",
} as const;

export const VALUES = [
  {
    title: "Market first",
    body: "The menu changes with what arrives. If the tomatoes are not right, there are no tomatoes that week.",
  },
  {
    title: "Whole animal, whole fish",
    body: "We buy from two farms and one day-boat, and we use all of it: trim becomes stock, bones become sauce.",
  },
  {
    title: "Hospitality without theatre",
    body: "Attentive, warm and unhurried. The best service is the kind you notice only when it is missing.",
  },
] as const;

export const STATS = [
  { value: "2012", label: "Opened on Alder Lane" },
  { value: "92%", label: "Produce sourced within 150 miles" },
  { value: "28", label: "Seats in the dining room" },
] as const;
