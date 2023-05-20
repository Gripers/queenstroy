import { createSlice } from "@reduxjs/toolkit";

import { Category } from "@/types/category.type";
import { Product } from "@/types/product.type";
import { getCategories, getProducts } from "../thunk/global";

interface State {
  categories: Category[];
  products: Product[];
}

const initialState: State = {
  categories: [],
  products: [],
};

const globalSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export const { reducer } = globalSlice;
