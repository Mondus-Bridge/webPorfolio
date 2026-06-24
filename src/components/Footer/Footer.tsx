// src/components/Footer/Footer.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  
  return (
    <footer className={`border-t py-8 mt-16 transition-colors ${
      isDark ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-white border-gray-100 text-gray-600'
    }`}>
      {/* Added sm:px-6 to perfectly match your Header & Layout geometry */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
        
        {/* Left Side / Top on Mobile: Copyright */}
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Ilnur. All rights reserved.
        </p>
        
        {/* Right Side / Bottom on Mobile: Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a 
            href="mailto:ilnur@example.com" 
            className={`transition-colors ${isDark ? 'hover:text-[#00c8aa]' : 'hover:text-green-600'}`}
          >
            Email
          </a>
          <a 
            href="https://github.com/ilnur" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-colors ${isDark ? 'hover:text-[#00c8aa]' : 'hover:text-green-600'}`}
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/ilnur" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-colors ${isDark ? 'hover:text-[#00c8aa]' : 'hover:text-green-600'}`}
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}