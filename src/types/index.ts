export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: Category;
  isFeatured: boolean;
  scent: string;
  weight: string;
  burnTime: string;
}

export type Category = "floraux" | "fruites" | "gourmands" | "boises";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  icon: string;
}
