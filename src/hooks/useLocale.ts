// src/hooks/useLocale.ts
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next'; // 👈 Import React bindings

// All supported language codes – keep in sync with files in src/locales and src/resume
export const SUPPORTED_LOCALES = ['en', 'ru', 'ar', 'es', 'fr', 'de', 'zh'] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];

export const useLocale = () => {
  // useTranslation() automatically subscribes this hook to i18next state changes!
  const { i18n } = useTranslation();

  // Normalize the i18n language to a base locale (e.g. "en-US" → "en")
  const rawLang = (i18n.language || 'en') as string;
  const baseLang = rawLang.split('-')[0].toLowerCase();
  const current = (SUPPORTED_LOCALES.includes(baseLang as any) ? baseLang : 'en') as Locale;

  const setLanguage = useCallback((lang: Locale) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  }, [i18n]);

  return { current, setLanguage };
};
