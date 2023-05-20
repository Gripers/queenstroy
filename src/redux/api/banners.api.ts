import { baseApi } from "../api";

export const bannersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBanners: build.query<{ id: number; image: string }[], string>({
      query: () => "/banners/",
    }),
  }),
  overrideExisting: true,
});

export const { useLazyGetBannersQuery } = bannersApi;
