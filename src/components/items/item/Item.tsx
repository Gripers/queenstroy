import { useState, useEffect } from 'react';
import styles from './Item.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/types/product.type';
import { useActions, useAppSelector } from '@/hooks/redux';
import { useCart } from '@/hooks/useCart';
import { useTranslation } from '@/hooks/useTranslation';
import CartIcon from '@/components/icons/CartIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import CartRemoveIcon from '../../icons/CartRemoveIcon';
import HeartIcon from '@/components/icons/HeartIcon';

type ItemProps = {
  item: Product;
};

const Item = ({ item }: ItemProps) => {
  const [state, setState] = useState(false);
  const { addToFavorites, removeFromFavorites } = useActions();
  const products = useAppSelector((state) => state.fav);
  const { addItem, removeItem, getItem } = useCart();
  const { t, locale } = useTranslation();

  const handleAddItem = (item: Product) => {
    addItem(item);
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div className={styles.item}>
      <h6>{locale === 'uz' ? item?.title_uz : item?.title_ru}</h6>
      <Link href={`/products/${item?.id}`} className={styles.image}>
        <Image src={item?.image} alt='' fill />
      </Link>
      <div className={styles.flx}>
        {item?.price ? (
          <>
            <h6>{item?.price} UZS</h6>
            {state ? (
              getItem(item?.id) ? (
                <button onClick={() => handleRemoveItem(item?.id)}>
                  <CartRemoveIcon />
                </button>
              ) : (
                <button onClick={() => handleAddItem(item)}>
                  <CartIcon />
                </button>
              )
            ) : null}
          </>
        ) : (
          <>
            <h6>Нет в наличии</h6>
            <button>
              <ArrowRightIcon />
            </button>
          </>
        )}
      </div>
      {products?.find((p) => p.id === item?.id) ? (
        <button
          className={styles.hidden}
          onClick={() => removeFromFavorites(item?.id)}
        >
          {t.fav} <HeartIcon color='red' />
        </button>
      ) : (
        <button className={styles.hidden} onClick={() => addToFavorites(item)}>
          {t.fav2} <HeartIcon />
        </button>
      )}
    </div>
  );
};

export default Item;
