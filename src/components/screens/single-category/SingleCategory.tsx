import styles from './SingleCategory.module.scss';

import { Spinner } from 'react-bootstrap';

import { useGetCategoryQuery } from '@/redux/api/categories.api';
import { useTranslation } from '@/hooks/useTranslation';
import Item from '@/components/items/item/Item';

type SingleCategoryProps = {
  id: number;
};

const SingleCategory = ({ id }: SingleCategoryProps) => {
  const { data: category, isLoading } = useGetCategoryQuery(id);
  const { locale } = useTranslation();

  return (
    <section className={styles.category}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h4>{locale === 'uz' ? category?.name_uz : category?.name_ru}</h4>
          <div className={styles.wrapper}>
            {category?.products?.length ? (
              category?.products?.map((product) => (
                <Item key={product?.id} item={product} />
              ))
            ) : (
              <p>Нет продуктов</p>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default SingleCategory;
