import { Product } from "./product.type";

export interface Category {
  id: number;
  name_uz: string;
  name_ru: string;
  products: Product[];
}
