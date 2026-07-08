import React, { createContext, useContext, useState, ReactNode } from 'react';

// Import translation dictionaries
import en from '../locales/en.json';
import zh from '../locales/zh.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import ar from '../locales/ar.json';
import ru from '../locales/ru.json';
import de from '../locales/de.json';

type LocaleMap = {
  [code: string]: Record<string, string>;
};

const locales: LocaleMap = {
  en,
  zh,
  es,
  fr,
  ar,
  ru,
  de,
};

interface LanguageContextProps {
  /** Current language code, e.g. 'en' */
  language: string;
  /** Change current language */
  setLanguage: (lang: string) => void;
  /** Dictionary for the current language */
  translations: Record<string, string>;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>('en');

  const setLang = (lang: string) => {
    if (locales[lang]) {
      setLanguage(lang);
    } else {
      console.warn(`Locale '${lang}' not found, falling back to 'en'.`);
      setLanguage('en');
    }
  };

  const translations = locales[language] ?? locales['en'];

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: setLang, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/** Helper hook to get a translation for a key */
export const useTranslation = (key: string): string => {
  const { translations } = useLanguage();
  return translations[key] ?? key;
};
