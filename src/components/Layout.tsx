// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isDark } = useTheme();
  return (

      <div className={`flex flex-col min-h-screen font-sans text-base transition-colors duration-200 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <Header />
      
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}