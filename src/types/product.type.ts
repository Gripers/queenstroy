import { Category } from "./category.type";

export interface Product {
  id: number;
  image: string;
  title_uz: string;
  title_ru: string;
  description_uz: string;
  description_ru: string;
  price: number;
  category: Category;
  quantity: number;
}
