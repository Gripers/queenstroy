import { createSlice } from "@reduxjs/toolkit";

import { Product } from "@/types/product.type";

const initialState: Product[] = [];

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state?.push({ ...action.payload });
    },
    removeFromFavorites: (state, action) => {
      const removeItem = state?.filter((item) => item.id !== action.payload);
      return removeItem;
    },
  },
});

export const { reducer, actions } = favSlice;
