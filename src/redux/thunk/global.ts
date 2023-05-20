import { createAsyncThunk } from "@reduxjs/toolkit";

import { AXIOS } from "@/config/axios";
import { Category } from "@/types/category.type";
import { Product } from "@/types/product.type";

export const getCategories = createAsyncThunk<Category>(
  "global/getCategories",
  async () => await AXIOS.get("/categories/").then(({ data }) => data)
);

export const getProducts = createAsyncThunk<Product>(
  "global/getProducts",
  async () => await AXIOS.get("/products/").then(({ data }) => data)
);
