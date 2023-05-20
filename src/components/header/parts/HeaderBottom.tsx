import { useState, useEffect, ChangeEvent } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useCart } from '@/hooks/useCart';
import SearchIcon from '@/components/icons/SearchIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import UserIcon from '@/components/icons/UserIcon';
import BagIcon from '@/components/icons/BagIcon';
import HeaderDrawer from '@/components/drawer/HeaderDrawer';

const HeaderBottom = ({ styles }: any) => {
  const [state, setState] = useState(false);
  const { totalItems } = useCart();
  const router = useRouter();

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    router.push({ pathname: '/search', query: { q: event.target[0].value } });
  };

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div className={styles.bottom}>
      <div className={styles.start}>
        {useIsMobile() ? <HeaderDrawer /> : null}
        <Link href='/'>
          <Image src='/static/images/logo.svg' alt='' width={170} height={40} />
        </Link>
      </div>
      <form className={styles.middle} onSubmit={handleSubmit}>
        <div className={styles.searchbar}>
          <input type='text' placeholder='Поиск продуктов' />
          <button type='submit'>
            <SearchIcon />
          </button>
        </div>
      </form>
      <div className={styles.end}>
        <ul>
          <li>
            <Link href='/fav'>
              <HeartIcon />
            </Link>
          </li>
          {/* <li>
            <Link href='/login'>
              <UserIcon />
            </Link>
          </li> */}
          {/* <li>
            <select onChange={changeLanguage} defaultValue={router.locale}>
              <option value='uz'>Uzbek</option>
              <option value='ru'>Русский</option>
            </select>
          </li> */}
          <li>
            <Link href='/cart'>
              <BagIcon />
              <sup>{state ? totalItems : null}</sup>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
