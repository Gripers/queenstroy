import { baseApi } from "../api";
import { Category } from "@/types/category.type";

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], string>({
      query: () => "/categories/",
    }),
    getCategory: build.query<Category, number>({
      query: (id) => `/categories/${id}/`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = categoriesApi;
