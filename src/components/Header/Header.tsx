import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GesturesIcon from './icons/GesturesIcon';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useLocale, SUPPORTED_LOCALES, Locale } from '../../hooks/useLocale';
import QrIcon from './icons/QrIcon';
import QRCode from 'react-qr-code';

export default function Header() {
  const { isDark, toggle } = useTheme();
  const { t } = useTranslation();
  const { current, setLanguage } = useLocale();
  const location = useLocation();
  const [isQrOpen, setIsQrOpen] = React.useState(false);
  const [isLangOpen, setIsLangOpen] = React.useState(false);


  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
  return ( <>
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
</> );
  };

  return ( <>
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
      {/* QR Code Button - Hybrid Interaction */}
      <div className="relative group">
        <button
          onClick={() => {
            // 📱 Touch detection: Only toggle state if the device supports touch or is a mobile viewport width
            const isMobileOrTouch = window.matchMedia("(max-width: 768px)").matches || ('ontouchstart' in window);
            if (isMobileOrTouch) {
              setIsQrOpen(!isQrOpen);
            }
          }}
          className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none border active:scale-95 shrink-0 ${
            isDark
              ? 'bg-gray-900 border-gray-800 text-teal-400 hover:text-teal-300'
              : 'bg-gray-50 border-gray-200 text-teal-600 hover:text-teal-700'
          } ${isQrOpen ? (isDark ? 'border-teal-400' : 'border-teal-600') : ''}`}
          aria-label="Open WhatsApp QR code"
        >
          <QrIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>

        {/* Only render the click backdrop overlay on mobile/touch screens */}
        {isQrOpen && (
          <div 
            className="fixed inset-0 z-40 md:hidden" 
            onClick={() => setIsQrOpen(false)} 
          />
        )}

        {/* Pop‑over Window */}
        <div 
          className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 w-40 p-4 bg-white border rounded-xl shadow-xl z-50 flex flex-col items-center justify-center transition-all duration-200 dark:bg-gray-900 dark:border-gray-800 ${
            isQrOpen 
              ? 'opacity-100 scale-100 pointer-events-auto' 
              : 'opacity-0 scale-95 pointer-events-none md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:pointer-events-auto'
          }`}
        >
          <div className={`text-center text-xs font-bold tracking-wide uppercase mb-3 transition-colors ${
            isDark ? 'text-teal-400' : 'text-teal-600'
          }`}>
            WhatsApp
          </div>
          
          <div className="w-full flex items-center justify-center bg-white p-2 rounded-lg">
            <QRCode
              size={100}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value="https://wa.me/639218607106"
              bgColor="#ffffff"
              fgColor="#111827" 
            />
          </div>
        </div>
      </div>
{/* Custom Language Selector - Hybrid Interaction */}
<div className="relative group ml-2"> 
  
  {/* Trigger Button */}
  <button
    type="button"
    onClick={() => {
      const isMobileOrTouch = window.matchMedia("(max-width: 768px)").matches || ('ontouchstart' in window);
      if (isMobileOrTouch) {
        setIsLangOpen(!isLangOpen);
      }
    }}
    className={`px-2.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-lg border transition-all duration-200 focus:outline-none min-w-[42px] text-center active:scale-95 ${
      isDark
        ? 'bg-gray-900 border-gray-800 text-gray-200 hover:text-white'
        : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
    } ${isLangOpen ? (isDark ? 'border-gray-600' : 'border-gray-400') : ''}`}
    aria-label="Toggle language menu"
  >
    {current}
  </button>

  {/* Click Invisible Overlay Backdrop for Mobile Dismissal */}
  {isLangOpen && (
    <div 
      className="fixed inset-0 z-40 md:hidden" 
      onClick={() => setIsLangOpen(false)} 
    />
  )}

{/* Dropdown Menu Window - Fluid Right Side Boundary Alignment */}
<div 
  className={`absolute right-0 md:left-1/2 md:-translate-x-1/2 md:right-auto top-[100%] w-20 z-50 pt-1 transition-all duration-200 ${
    isLangOpen 
      ? 'opacity-100 scale-100 pointer-events-auto' 
      : 'opacity-0 scale-95 pointer-events-none md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:pointer-events-auto'
  }`}
>
  {/* Inner Box with clean theme styling */}
  <div className="p-1 w-full bg-white border rounded-xl shadow-xl flex flex-col dark:bg-gray-900 dark:border-gray-800">
    {SUPPORTED_LOCALES.map(l => (
      <button
        key={l}
        type="button"
        onClick={() => {
          setLanguage(l as Locale);
          setIsLangOpen(false);
        }}
        className={`w-full text-center py-1.5 text-xs font-medium tracking-wide rounded-lg uppercase transition-colors ${
          current === l
            ? isDark
              ? 'bg-gray-800 text-white font-semibold'
              : 'bg-gray-100 text-gray-900 font-semibold'
            : isDark
            ? 'text-gray-400 hover:bg-gray-800/60 hover:text-white'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        {l.toUpperCase()}
      </button>
    ))}
  </div>
</div>
</div>
        </div>
      </div>
    </header>

</> );
}
