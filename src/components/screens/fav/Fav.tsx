import { useState, useEffect } from "react";
import styles from "./Fav.module.scss";

import { Table } from "react-bootstrap";

import { useAppSelector } from "@/hooks/redux";
import CartItem from "@/components/items/cart-item/CartItem";

const Fav = () => {
  const [state, setState] = useState(false);
  const products = useAppSelector((state) => state.fav);

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <section className={styles.fav}>
      <h2>Избранные</h2>
      <div className={styles.wrapper}>
        {state ? (
          products?.length ? (
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Продукт</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item) => (
                  <CartItem key={item?.id} item={item} isFav />
                ))}
              </tbody>
            </Table>
          ) : (
            <p>В избранных пока пусто</p>
          )
        ) : null}
      </div>
    </section>
  );
};

export default Fav;
