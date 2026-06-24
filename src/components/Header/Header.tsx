import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GesturesIcon from './icons/GesturesIcon';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useLocale, SUPPORTED_LOCALES, Locale } from '../../hooks/useLocale';

export default function Header() {
  const { isDark, toggle } = useTheme();
  const { t } = useTranslation();
  const { current, setLanguage } = useLocale();
  const location = useLocation();

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative py-1.5 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 shrink-0 ${
          isActive
            ? isDark
              ? 'text-teal-400'
              : 'text-green-700'
            : isDark
            ? 'text-gray-400 hover:text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {children}
        {isActive && (
          <span
            className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${isDark ? 'bg-teal-400' : 'bg-green-600'}`}
          />
        )}
      </Link>
    );
  };

  return (
    <header
      className={`border-b sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isDark
          ? 'bg-gray-950/80 border-gray-800/60 text-white shadow-[0_1px_3px_rgba(0,0,0,0.4)]'
          : 'bg-white/80 border-gray-100 text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
      }`}
    >
      <div className="w-full max-w-3xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 group transition-transform duration-200 active:scale-95 shrink-0"
          aria-label="Home"
        >
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg sm:rounded-xl transition-colors shrink-0 ${
              isDark ? 'bg-gray-900 group-hover:bg-gray-800' : 'bg-gray-50 group-hover:bg-gray-100'
            }`}
          >
            <GesturesIcon
              className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-6 ${
                isDark ? 'text-teal-400' : 'text-green-600'
              }`}
            />
          </div>
        </Link>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
          <nav className="flex items-center gap-3 sm:gap-6 min-w-0 overflow-x-auto no-scrollbar">
            <NavLink to="/resume">{t('nav.resume')}</NavLink>
            <NavLink to="/article">{t('nav.article')}</NavLink>
            <NavLink to="/projects">{t('nav.projects')}</NavLink>
          </nav>
          <span className={`hidden xs:inline-block h-4 w-[1px] ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} aria-hidden="true" />
          <button
            onClick={toggle}
            className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none border active:scale-95 shrink-0 ${
              isDark
                ? 'bg-gray-900 border-gray-800 text-amber-400 hover:text-amber-300'
                : 'bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-900'
            }`}
            aria-label="Toggle dark / light theme"
          >
            {isDark ? <SunIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <MoonIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
          </button>
          {/* Language selector */}
          <select
            value={current}
            onChange={e => setLanguage(e.target.value as Locale)}
            className={`ml-2 p-1 sm:p-1.5 rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDark ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-300 text-gray-800'
            }`}
            aria-label="Select language"
          >
            {SUPPORTED_LOCALES.map(l => (
              <option key={l} value={l}>
                {l.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
