// src/hooks/useLocale.ts
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next'; // 👈 Import React bindings

export const useLocale = () => {
  // useTranslation() automatically subscribes this hook to i18next state changes!
  const { i18n } = useTranslation();

  const current = (i18n.language || 'en') as 'en' | 'ru';

  const setLanguage = useCallback((lang: 'en' | 'ru') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  }, [i18n]);

  return { current, setLanguage };
};