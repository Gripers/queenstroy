import { baseApi } from "../api";
import { Product } from "@/types/product.type";

export const checkoutApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    checkout: build.mutation({
      query: ({ items, name, phone, location }) => ({
        url: `https://api.telegram.org/bot${
          process.env.NEXT_PUBLIC_BOT
        }/sendMessage?chat_id=${
          process.env.NEXT_PUBLIC_CHAT
        }&text=${encodeURIComponent(`
          ${items
            ?.map((item: Product) => {
              return `
<b>Продукт:</b> ${item?.title_ru}
<b>Цена:</b> ${item?.price}
<b>Количество:</b> ${item?.quantity}
                `;
            })
            .join("")}
<b>Имя:</b> ${name}
<b>Номер телефона:</b> ${phone}
<b>Местоположение:</b> ${location}
        `)}&parse_mode=html`,
        method: "post",
      }),
    }),
  }),
});

export const { useCheckoutMutation } = checkoutApi;
