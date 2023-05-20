import styles from './SingleProduct.module.scss';

import { Spinner } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

import { useGetProductQuery } from '@/redux/api/products.api';
import { useCart } from '@/hooks/useCart';
import { useTranslation } from '@/hooks/useTranslation';

type SingleProductProps = {
  id: number;
};

const SingleProduct = ({ id }: SingleProductProps) => {
  const { addItem, removeItem, getItem } = useCart();
  const { data: item, isLoading } = useGetProductQuery(id);
  const { t, locale } = useTranslation();

  return (
    <section className={styles.product}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.left}>
            <Image src={item!.image} alt='' fill />
          </div>
          <div className={styles.right}>
            <Link href={`/categories/${item?.id}`} className={styles.category}>
              {locale === 'uz'
                ? item?.category?.name_uz
                : item?.category?.name_ru}
            </Link>
            <h4>{locale === 'uz' ? item?.title_uz : item?.title_ru}</h4>
            <p>{locale === 'uz' ? item?.description_uz : item?.description_ru}</p>
            <hr />
            {/* <div className={styles.flx}>
              <button>Sevimliga qo&apos;shish</button>
              <button>Taqqoslash</button>
            </div> */}
            {item?.price ? (
              <div className={styles.info}>
                <h3>{item?.price} UZS</h3>
                <div className='mt-3 d-flex gap-3'>
                  {getItem(item?.id) ? (
                    <>
                      <button onClick={() => removeItem(item?.id)}>
                        {t.cart2}
                      </button>
                    </>
                  ) : (
                    <button onClick={() => addItem(item)}>{t.cart}</button>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles.info}>
                <h6>Нет в наличии</h6>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProduct;
