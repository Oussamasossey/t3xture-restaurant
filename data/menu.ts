export type DishCategory = "starters" | "mains" | "desserts" | "drinks";

export type DishTag = "vegan" | "vegetarian" | "spicy" | "signature";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: DishCategory;
  tags: DishTag[];
  image: string;
  alt: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: DishCategory;
  label: string;
  kicker: string;
  description: string;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=75`;

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    kicker: "To begin",
    description:
      "Small, bright plates built to wake the palate: raw, roasted and fermented things from the market that morning.",
  },
  {
    id: "mains",
    label: "Mains",
    kicker: "The centre of the table",
    description:
      "Slow technique, short ingredient lists. Everything below is plated the moment it leaves the pass.",
  },
  {
    id: "desserts",
    label: "Desserts",
    kicker: "Something sweet",
    description:
      "Pastry section classics, finished with fruit, salt and just enough sugar to close the evening.",
  },
  {
    id: "drinks",
    label: "Drinks",
    kicker: "From the bar",
    description:
      "A tight list of cocktails, low-intervention wine and single-origin coffee, poured by people who care.",
  },
];

export const DISHES: Dish[] = [
  // ── Starters ────────────────────────────────────────────────
  {
    id: "bruschetta-al-pomodoro",
    name: "Bruschetta al Pomodoro",
    description:
      "Charred sourdough, marinated heirloom tomatoes, basil oil and a scatter of aged pecorino.",
    price: 14,
    category: "starters",
    tags: ["vegan"],
    image: img("photo-1572695157366-5e585ab2b69f"),
    alt: "Toasted bruschetta topped with diced tomatoes and fresh basil on a wooden board",
  },
  {
    id: "roasted-tomato-veloute",
    name: "Roasted Tomato Velouté",
    description:
      "Vine tomatoes slow-roasted with fennel seed, finished with crème fraîche and basil oil.",
    price: 13,
    category: "starters",
    tags: ["vegetarian", "signature"],
    image: img("photo-1547592166-23ac45744acd"),
    alt: "Bowl of creamy roasted tomato soup swirled with cream and fresh herbs",
  },
  {
    id: "spiced-lamb-samosas",
    name: "Spiced Lamb Samosas",
    description:
      "Hand-folded pastry, cumin and coriander lamb, green chilli chutney and pickled shallot.",
    price: 15,
    category: "starters",
    tags: ["spicy"],
    image: img("photo-1601050690597-df0568f70950"),
    alt: "Crisp golden samosas served with green chilli and dipping sauce",
  },
  {
    id: "village-salad",
    name: "Village Salad & Feta",
    description:
      "Cucumber, tomato, olive, sweet pepper and sheep's feta dressed with oregano vinegar.",
    price: 13,
    category: "starters",
    tags: ["vegetarian"],
    image: img("photo-1505253716362-afaea1d3d1af"),
    alt: "Fresh green salad with feta cheese, tomatoes and croutons in a ceramic bowl",
  },
  {
    id: "charcuterie-board",
    name: "Charcuterie & Cheese Board",
    description:
      "Three cured meats, two farmhouse cheeses, honeycomb, cornichons and warm country bread.",
    price: 24,
    category: "starters",
    tags: ["signature"],
    image: img("photo-1541529086526-db283c563270"),
    alt: "Sharing board of cured meats, cheeses, olives and baguette seen from above",
  },
  {
    id: "avocado-tartine",
    name: "Avocado & Soft Egg Tartine",
    description:
      "Smashed avocado, seven-minute egg, chilli flake and lemon on grilled country loaf.",
    price: 14,
    category: "starters",
    tags: ["vegetarian"],
    image: img("photo-1482049016688-2d3e1b311543"),
    alt: "Open avocado toast topped with a halved soft-boiled egg on a dark plate",
  },

  // ── Mains ───────────────────────────────────────────────────
  {
    id: "line-caught-salmon",
    name: "Line-Caught Salmon",
    description:
      "Crisped skin fillet, spring greens, burnt lemon and a shellfish beurre blanc.",
    price: 34,
    category: "mains",
    tags: ["signature"],
    image: img("photo-1467003909585-2f8a72700288"),
    alt: "Pan-seared salmon fillet plated with greens and a glossy sauce",
    featured: true,
  },
  {
    id: "dry-aged-ribeye",
    name: "Dry-Aged Ribeye, 40 Days",
    description:
      "Grass-fed ribeye over embers, hand-cut frites, watercress and béarnaise.",
    price: 46,
    category: "mains",
    tags: ["signature"],
    image: img("photo-1600891964092-4316c288032e"),
    alt: "Sliced ribeye steak served with golden fries and herbs",
    featured: true,
  },
  {
    id: "smoked-beef-short-rib",
    name: "Smoked Beef Short Rib",
    description:
      "Twelve-hour smoke, bourbon glaze, pickled tomato and charred onions.",
    price: 38,
    category: "mains",
    tags: ["signature"],
    image: img("photo-1544025162-d76694265947"),
    alt: "Glazed smoked short ribs on a wooden board with pickled vegetables",
    featured: true,
  },
  {
    id: "heritage-pork-chop",
    name: "Heritage Pork Chop",
    description:
      "Brined chop, brown butter apples, mustard greens and cider jus.",
    price: 32,
    category: "mains",
    tags: [],
    image: img("photo-1432139555190-58524dae6a55"),
    alt: "Grilled pork chop topped with diced potatoes and greens",
  },
  {
    id: "creole-shrimp-rice",
    name: "Creole Shrimp & Rice",
    description:
      "Gulf shrimp, tomato-okra roux, jasmine rice and a hit of cayenne.",
    price: 30,
    category: "mains",
    tags: ["spicy"],
    image: img("photo-1559847844-5315695dadae"),
    alt: "Bowl of spicy shrimp stew with rice and fresh herbs",
    featured: true,
  },
  {
    id: "buttermilk-fried-chicken",
    name: "Buttermilk Fried Chicken",
    description:
      "48-hour brine, cayenne crust, hot honey and house pickles.",
    price: 26,
    category: "mains",
    tags: ["spicy"],
    image: img("photo-1626082927389-6cd097cdc6ec"),
    alt: "Crispy fried chicken pieces resting on a wire rack",
  },
  {
    id: "harvest-grain-bowl",
    name: "Harvest Grain Bowl",
    description:
      "Roasted squash, avocado, chickpea, kale and preserved-lemon tahini.",
    price: 22,
    category: "mains",
    tags: ["vegan"],
    image: img("photo-1512621776951-a57141f2eefd"),
    alt: "Colourful vegan grain bowl with avocado, chickpeas and fresh vegetables",
    featured: true,
  },
  {
    id: "braised-beef-fettuccine",
    name: "Braised Beef Fettuccine",
    description:
      "Slow-braised shin, ribbons of pasta, smoked cream and aged parmesan.",
    price: 28,
    category: "mains",
    tags: [],
    image: img("photo-1551183053-bf91a1d81141"),
    alt: "Creamy fettuccine pasta with braised beef in a dark pan",
  },
  {
    id: "truffle-penne-pomodoro",
    name: "Truffle Penne Pomodoro",
    description:
      "San Marzano tomato, black truffle, torn basil and olive oil.",
    price: 25,
    category: "mains",
    tags: ["vegetarian"],
    image: img("photo-1621996346565-e3dbc646d9a9"),
    alt: "Penne pasta in rich tomato sauce served in a white bowl",
  },

  // ── Desserts ────────────────────────────────────────────────
  {
    id: "valrhona-chocolate-cake",
    name: "Valrhona Chocolate Cake",
    description:
      "Warm 70% ganache centre, cocoa nib crumb and malted ice cream.",
    price: 13,
    category: "desserts",
    tags: ["vegetarian", "signature"],
    image: img("photo-1578985545062-69928b1d9587"),
    alt: "Layered chocolate cake with glossy ganache drips on a cake stand",
  },
  {
    id: "lemon-meringue-tart",
    name: "Lemon Meringue Tart",
    description:
      "Burnt Italian meringue, sharp lemon curd and a sablé shell.",
    price: 12,
    category: "desserts",
    tags: ["vegetarian"],
    image: img("photo-1519915028121-7d3463d20b13"),
    alt: "Lemon meringue tart with torched peaks of meringue, one slice cut",
    featured: true,
  },
  {
    id: "strawberry-panna-cotta",
    name: "Strawberry Panna Cotta",
    description:
      "Vanilla-bean cream set softly, macerated strawberries and basil.",
    price: 12,
    category: "desserts",
    tags: ["vegetarian"],
    image: img("photo-1488477181946-6428a0291777"),
    alt: "Small jars of panna cotta topped with fresh strawberries",
  },
  {
    id: "tiramisu-classico",
    name: "Tiramisu Classico",
    description:
      "Espresso-soaked savoiardi, mascarpone cream and dark cocoa.",
    price: 12,
    category: "desserts",
    tags: ["vegetarian"],
    image: img("photo-1571877227200-a0d98ea607e9"),
    alt: "Slice of tiramisu dusted with cocoa powder on a plate",
    featured: true,
  },
  {
    id: "dessert-tasting",
    name: "Chef's Dessert Tasting",
    description:
      "Four small sweets from the pastry section, the kitchen's favourite way to end service.",
    price: 19,
    category: "desserts",
    tags: ["signature"],
    image: img("photo-1551024506-0bccd828d307"),
    alt: "Fine dining dessert with caramel poured over ice cream",
  },

  // ── Drinks ──────────────────────────────────────────────────
  {
    id: "smoked-old-fashioned",
    name: "Smoked Old Fashioned",
    description:
      "Rye, demerara, cherry bark bitters, finished under a glass cloche.",
    price: 16,
    category: "drinks",
    tags: ["signature"],
    image: img("photo-1470337458703-46ad1756a187"),
    alt: "Amber cocktail being poured over a large ice cube in a rocks glass",
  },
  {
    id: "blackberry-bramble",
    name: "Blackberry & Thyme Bramble",
    description:
      "Gin, muddled blackberry, lemon and a ribbon of crème de mûre.",
    price: 15,
    category: "drinks",
    tags: [],
    image: img("photo-1536935338788-846bb9981813"),
    alt: "Deep purple blackberry cocktail garnished with citrus and herbs",
  },
  {
    id: "strawberry-basil-cooler",
    name: "Strawberry & Basil Cooler",
    description:
      "Muddled strawberry, basil, lime and soda. No spirit, all flavour.",
    price: 11,
    category: "drinks",
    tags: ["vegan"],
    image: img("photo-1497534446932-c925b458314e"),
    alt: "Tall glasses of strawberry and mint cooler with fresh lime",
  },
  {
    id: "house-flat-white",
    name: "House Flat White",
    description:
      "Single-origin espresso pulled short, steamed milk, poured tight.",
    price: 5,
    category: "drinks",
    tags: ["vegetarian"],
    image: img("photo-1509042239860-f550ce710b93"),
    alt: "Two cups of flat white coffee with latte art on a table",
  },
  {
    id: "sommeliers-flight",
    name: "Sommelier's Wine Flight",
    description:
      "Three pours of low-intervention wine chosen to follow the tasting menu.",
    price: 28,
    category: "drinks",
    tags: ["signature"],
    image: img("photo-1510812431401-41d2bd2722f3"),
    alt: "Friends toasting with glasses of red wine",
  },
];

export const FEATURED_DISHES: Dish[] = DISHES.filter((d) => d.featured);

export function getDishesByCategory(category: DishCategory): Dish[] {
  return DISHES.filter((d) => d.category === category);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
}

export const TAG_LABELS: Record<DishTag, string> = {
  vegan: "Vegan",
  vegetarian: "Vegetarian",
  spicy: "Spicy",
  signature: "Signature",
};
