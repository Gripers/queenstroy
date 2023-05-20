import styles from "./CartItem.module.scss";

import Link from "next/link";
import Image from "next/image";

import { Product } from "@/types/product.type";
import { useActions } from "@/hooks/redux";
import { useCart } from "@/hooks/useCart";
import CloseIcon from "@/components/icons/CloseIcon";

type CartItemProps = {
  item: Product;
  isFav?: boolean;
};

const CartItem = ({ item, isFav = false }: CartItemProps) => {
  const { removeFromFavorites } = useActions();
  const { removeItem, updateItemQuantity } = useCart();

  const handleRemoveItem = (id: number) => {
    isFav ? removeFromFavorites(id) : removeItem(id);
  };

  const increment = (id: number, quantity: number) => {
    updateItemQuantity({ id, quantity });
  };

  const decrement = (id: number, quantity: number) => {
    updateItemQuantity({ id, quantity });
  };

  return (
    <tr className={styles.item}>
      <td className={styles.item__remove} data-title="Mahsulotni o'chirish">
        <button onClick={() => handleRemoveItem(item?.id)}>
          <CloseIcon />
        </button>
      </td>
      <td className={styles.item__image}>
        <Link href={`/products/${item?.id}`}>
          <Image src={item?.image} alt="" width={90} height={90} />
        </Link>
      </td>
      <td className={styles.item__name} data-title="Mahsulot">
        <Link href={`/products/${item?.id}`}>{item?.title_ru}</Link>
        <br />
        <b>
          Продавец: <p>Queen family trade center</p>
        </b>
      </td>
      <td data-title="Narx">{item?.price * item?.quantity} UZS</td>
      {!isFav ? (
        <td data-title="Miqdori">
          <div className={styles.quantity}>
            <button
              onClick={() => {
                item.quantity <= 1
                  ? removeItem(item.id)
                  : decrement(item?.id, item.quantity - 1);
              }}
            >
              -
            </button>
            <span>{item?.quantity}</span>
            <button onClick={() => increment(item?.id, item.quantity + 1)}>
              +
            </button>
          </div>
        </td>
      ) : null}
    </tr>
  );
};

export default CartItem;
