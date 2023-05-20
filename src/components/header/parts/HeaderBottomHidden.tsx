import { FormEvent } from 'react';

import { useRouter } from 'next/router';

import { useTranslation } from '@/hooks/useTranslation';
import SearchIcon from '@/components/icons/SearchIcon';

const HeaderBottomHidden = ({ styles }: any) => {
  const { t } = useTranslation();
  const { push } = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    push({ pathname: '/search', query: { q: event.target[0].value } });
  };

  return (
    <form className={styles.middle__hidden} onSubmit={handleSubmit}>
      <div className={styles.searchbar__hidden}>
        <input type='text' placeholder={t.searchbar} required />
        <button type='submit'>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default HeaderBottomHidden;
