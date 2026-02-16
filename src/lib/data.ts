import { Product, CategoryInfo } from "@/types";

export const categories: CategoryInfo[] = [
  {
    slug: "floraux",
    name: "Floraux",
    description: "Roses, lavande, jasmin... des senteurs délicates et envoûtantes",
    icon: "🌸",
  },
  {
    slug: "fruites",
    name: "Fruités",
    description: "Agrumes, fruits rouges, pêche... des parfums frais et vitaminés",
    icon: "🍊",
  },
  {
    slug: "gourmands",
    name: "Gourmands",
    description: "Vanille, caramel, chocolat... des arômes réconfortants et sucrés",
    icon: "🍫",
  },
  {
    slug: "boises",
    name: "Boisés",
    description: "Cèdre, santal, pin... des senteurs chaleureuses et profondes",
    icon: "🌲",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "rose-ancienne",
    name: "Rose Ancienne",
    description: "Un parfum délicat de roses de jardin, mêlé de notes poudrées.",
    longDescription:
      "Plongez dans un jardin anglais avec ce fondant à la rose ancienne. Ses notes poudrées et florales créent une atmosphère romantique et apaisante. Fabriqué artisanalement avec de la cire de soja et des huiles essentielles naturelles de rose de Damas.",
    price: 6.9,
    image: "/products/rose-ancienne.jpg",
    category: "floraux",
    isFeatured: true,
    scent: "Rose de Damas, musc blanc, pivoine",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "2",
    slug: "lavande-provence",
    name: "Lavande de Provence",
    description: "L'essence pure de la lavande provençale, relaxante et authentique.",
    longDescription:
      "Transportez-vous au cœur des champs de lavande provençaux. Ce fondant capture l'essence même de la lavande vraie, reconnue pour ses vertus apaisantes. Idéal pour créer une ambiance propice à la détente et au bien-être.",
    price: 5.9,
    image: "/products/lavande-provence.jpg",
    category: "floraux",
    isFeatured: false,
    scent: "Lavande vraie, lavandin, romarin",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "3",
    slug: "jasmin-nuit",
    name: "Jasmin de Nuit",
    description: "Le jasmin envoûtant des soirées d'été, sensuel et mystérieux.",
    longDescription:
      "Le jasmin sambac libère son parfum le plus intense à la nuit tombée. Ce fondant capture cette magie nocturne avec des notes florales sensuelles et enveloppantes. Parfait pour une soirée cocooning.",
    price: 7.5,
    image: "/products/jasmin-nuit.jpg",
    category: "floraux",
    isFeatured: false,
    scent: "Jasmin sambac, ylang-ylang, vanille",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "4",
    slug: "agrumes-soleil",
    name: "Agrumes au Soleil",
    description: "Un cocktail vitaminé d'orange, citron et pamplemousse.",
    longDescription:
      "Faites entrer le soleil chez vous avec ce mélange énergisant d'agrumes fraîchement pressés. Orange douce, citron de Menton et pamplemousse rose se combinent pour une explosion de fraîcheur qui dynamise votre intérieur.",
    price: 5.9,
    image: "/products/agrumes-soleil.jpg",
    category: "fruites",
    isFeatured: true,
    scent: "Orange douce, citron, pamplemousse rose",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "5",
    slug: "fruits-rouges",
    name: "Balade aux Fruits Rouges",
    description: "Framboise, cassis et mûre dans un tourbillon fruité et sucré.",
    longDescription:
      "Comme une promenade dans un verger en été, ce fondant mêle les arômes juteux de la framboise, du cassis et de la mûre sauvage. Une fragrance gourmande et fruitée qui évoque les confitures maison de grand-mère.",
    price: 6.5,
    image: "/products/fruits-rouges.jpg",
    category: "fruites",
    isFeatured: false,
    scent: "Framboise, cassis, mûre sauvage",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "6",
    slug: "peche-velours",
    name: "Pêche Velours",
    description: "La douceur d'une pêche mûre, suave et délicatement sucrée.",
    longDescription:
      "Ce fondant capture la douceur veloutée d'une pêche gorgée de soleil. Ses notes fruitées et légèrement sucrées créent une atmosphère douce et accueillante, parfaite pour les après-midis d'été ou les moments de détente.",
    price: 5.9,
    image: "/products/peche-velours.jpg",
    category: "fruites",
    isFeatured: false,
    scent: "Pêche blanche, abricot, fleur d'oranger",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "7",
    slug: "vanille-madagascar",
    name: "Vanille de Madagascar",
    description: "La vanille bourbon dans toute sa splendeur, crémeuse et enveloppante.",
    longDescription:
      "Laissez-vous envelopper par la chaleur de la vanille bourbon de Madagascar. Ce fondant diffuse un parfum crémeux et réconfortant qui transforme votre intérieur en un cocon douillet. Un best-seller incontournable.",
    price: 7.9,
    image: "/products/vanille-madagascar.jpg",
    category: "gourmands",
    isFeatured: true,
    scent: "Vanille bourbon, fève tonka, caramel",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "8",
    slug: "caramel-beurre-sale",
    name: "Caramel Beurre Salé",
    description: "L'irrésistible parfum du caramel breton, gourmand et addictif.",
    longDescription:
      "Impossible de résister à l'appel du caramel beurre salé ! Ce fondant évoque les crêperies bretonnes et les confiseries artisanales. Son parfum sucré-salé crée une ambiance gourmande et chaleureuse dans toute la maison.",
    price: 6.9,
    image: "/products/caramel-beurre-sale.jpg",
    category: "gourmands",
    isFeatured: true,
    scent: "Caramel, beurre salé, sucre roux",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "9",
    slug: "chocolat-noir",
    name: "Chocolat Noir Intense",
    description: "Le cacao pur et profond, pour les amateurs de chocolat.",
    longDescription:
      "Pour les vrais amoureux du chocolat, ce fondant délivre un arôme profond et riche de cacao torréfié. Ses notes amères et gourmandes créent une atmosphère sophistiquée et réconfortante, comme dans un salon de thé parisien.",
    price: 6.5,
    image: "/products/chocolat-noir.jpg",
    category: "gourmands",
    isFeatured: false,
    scent: "Cacao torréfié, café, noisette",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "10",
    slug: "cedre-atlas",
    name: "Cèdre de l'Atlas",
    description: "Le bois de cèdre noble et majestueux, ancré et apaisant.",
    longDescription:
      "Retrouvez la sérénité des forêts de cèdres de l'Atlas marocain. Ce fondant diffuse un parfum boisé noble et apaisant, aux notes chaudes et légèrement épicées. Idéal pour créer une atmosphère de calme et de méditation.",
    price: 7.5,
    image: "/products/cedre-atlas.jpg",
    category: "boises",
    isFeatured: false,
    scent: "Cèdre de l'Atlas, vétiver, patchouli",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "11",
    slug: "santal-dore",
    name: "Santal Doré",
    description: "Le santal crémeux et chaleureux, un classique indémodable.",
    longDescription:
      "Le bois de santal est prisé depuis des millénaires pour son parfum crémeux et enveloppant. Ce fondant capture cette essence précieuse avec des notes dorées et lactées qui réchauffent votre intérieur avec élégance.",
    price: 8.5,
    image: "/products/santal-dore.jpg",
    category: "boises",
    isFeatured: true,
    scent: "Santal blanc, ambre, musc",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
  {
    id: "12",
    slug: "foret-pins",
    name: "Forêt de Pins",
    description: "Une balade en forêt de pins, fraîche et vivifiante.",
    longDescription:
      "Respirez l'air pur d'une forêt de pins après la pluie. Ce fondant combine les notes résineuses du pin sylvestre avec la fraîcheur de l'eucalyptus et la douceur de la mousse de chêne. Un véritable bain de forêt à domicile.",
    price: 6.9,
    image: "/products/foret-pins.jpg",
    category: "boises",
    isFeatured: false,
    scent: "Pin sylvestre, eucalyptus, mousse de chêne",
    weight: "75g (lot de 6 cubes)",
    burnTime: "8-10h par cube",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
