import styles from './Search.module.scss';

import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';

import { useGetProductsQuery } from '@/redux/api/products.api';
import Item from '@/components/items/item/Item';

const SearchPage = () => {
  const { query } = useRouter();
  const { data, isLoading } = useGetProductsQuery('');

  const filtered = data?.filter((item) => {
    return (
      item.title_ru.toLowerCase().includes(query.q!.toString().toLowerCase()) ||
      item.title_uz.toLowerCase().includes(query.q!.toString().toLowerCase())
    );
  });

  return (
    <section className={styles.search}>
      <p>
        Результаты по запросу <b>{query.q}</b>
      </p>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Spinner />
        ) : filtered?.length ? (
          filtered?.map((item) => <Item key={item?.id} item={item} />)
        ) : (
          <b>Ничего не найдено</b>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
