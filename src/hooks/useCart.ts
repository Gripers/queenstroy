import { useActions, useAppSelector } from "./redux";

export const useCart = () => {
  const items = useAppSelector((state) => state.cart);
  const { addItem, removeItem, emptyCart, updateItemQuantity } = useActions();

  const getItem = (id: number) => items.find((i) => i.id === id);
  const isEmpty = items.length ? false : true;
  const totalItems = items.length;

  return {
    items,
    getItem,
    isEmpty,
    totalItems,
    emptyCart,
    addItem,
    removeItem,
    updateItemQuantity,
  };
};
