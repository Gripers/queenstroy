import { createSlice } from "@reduxjs/toolkit";

import { Product } from "@/types/product.type";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state?.push({ ...action.payload });
    },
    removeItem: (state, action) => {
      return state?.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      return (state = []);
    },
    updateItemQuantity: (state, { payload }) => {
      return state?.map((item) => {
        if (item.id === payload.id)
          return { ...item, quantity: payload.quantity };
        else return item;
      });
    },
  },
});

export const { reducer, actions } = cartSlice;
