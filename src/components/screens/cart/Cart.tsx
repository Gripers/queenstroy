import { useState, useEffect } from "react";
import styles from "./Cart.module.scss";

import { Table } from "react-bootstrap";

import { useCart } from "@/hooks/useCart";
import CartItem from "@/components/items/cart-item/CartItem";
import CheckoutModal from "@/components/modal/CheckoutModal";

const Cart = () => {
  const [state, setState] = useState(false);
  const { items, isEmpty } = useCart();

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <section className={styles.cart}>
      <h2>Корзина</h2>
      <div className={styles.wrapper}>
        {state ? (
          items?.length ? (
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Продукт</th>
                  <th>Цена</th>
                  <th>Количество</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item) => (
                  <CartItem key={item?.id} item={item} />
                ))}
              </tbody>
            </Table>
          ) : (
            <p>В корзине пусто</p>
          )
        ) : null}
      </div>
      {isEmpty ? null : <CheckoutModal />}
    </section>
  );
};

export default Cart;
