import { baseApi } from '../api';
import { Product } from '@/types/product.type';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], string>({
      query: () => '/products/',
    }),
    getProduct: build.query<Product, number>({
      query: (id) => `/products/${id}/`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
