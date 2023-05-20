import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { baseApi } from "./api";
import { reducer as globalReducer } from "./slices/global";
import { reducer as favReducer } from "./slices/fav";
import { reducer as cartReducer } from "./slices/cart";

const rootReducer = combineReducers({
  global: globalReducer,
  fav: favReducer,
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["fav", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
