// src/components/Footer/Footer.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  return (
    <footer className={`border-t py-8 mt-16 transition-colors ${
      isDark ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-white border-gray-100 text-gray-600'
    }`}>
      {/* Added sm:px-6 to perfectly match your Header & Layout geometry */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
        
        {/* Left Side / Top on Mobile: Copyright */}
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Ilnur QA. {t('footer.rights')}
        </p>
        
        {/* Right Side / Bottom on Mobile: Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a 
            href="mailto:i.gabitov2077@gmail.com" 
            className={`transition-colors ${isDark ? 'hover:text-[#00c8aa]' : 'hover:text-green-600'}`}
          >
            {t('nav.email')}
          </a>
          <a 
            href="https://github.com/Mondus-Bridge" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-colors ${isDark ? 'hover:text-[#00c8aa]' : 'hover:text-green-600'}`}
          >
            {t('nav.github')}
          </a>
          <a 
            href="https://www.linkedin.com/in/ilnur-gabitov/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-colors ${isDark ? 'hover:text-[#00c8aa]' : 'hover:text-green-600'}`}
          >
            {t('nav.linkedin')}
          </a>
        </div>

      </div>
    </footer>
  );
}