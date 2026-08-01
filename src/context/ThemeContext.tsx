import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ isDark: false, toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    // 1️⃣ Check saved preference in localStorage
    const stored = window.localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    // 2️⃣ Fallback to OS / browser preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggle = () => setIsDark(!isDark);

  // Persist theme choice across reloads
  useEffect(() => {
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // 🌍 THIS IS THE CRITICAL MISSING PIECE FOR TAILWIND v4:
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);
  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);