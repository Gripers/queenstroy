import styles from './SecondSection.module.scss';

import { useGetCategoriesQuery } from '@/redux/api/categories.api';
import { useTranslation } from '@/hooks/useTranslation';
import FirstLayout from '@/components/layout/first-layout/FirstLayout';
import Item from '@/components/items/item/Item';

const SecondSection = () => {
  const { data: categories } = useGetCategoriesQuery('');
  const { locale } = useTranslation();

  return (
    <>
      {categories?.map((category) => (
        <FirstLayout
          key={category?.id}
          title={locale === 'uz' ? category?.name_uz : category?.name_ru}
          id={category?.id}
        >
          <div className={styles.wrapper}>
            {category?.products?.length ? (
              category?.products?.map((product) => (
                <Item key={product?.id} item={product} />
              ))
            ) : (
              <p>Нет продуктов</p>
            )}
          </div>
        </FirstLayout>
      ))}
    </>
  );
};

export default SecondSection;
