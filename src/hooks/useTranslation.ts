import { useRouter } from 'next/router';

import ru from '@/locales/ru';
import uz from '@/locales/uz';

export const useTranslation = () => {
  const { locale } = useRouter();
  const t = locale === 'uz' ? uz : ru;

  return { t, locale };
};
