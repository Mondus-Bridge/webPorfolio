// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

/**
 * Landing page for Ilnur Gabitov – Full‑Stack Lead QA Engineer.
 */
export default function Home() {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="w-full space-y-16 py-12">
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
                {t('home.title')}
            </h1>
            {/* Signature pipeline underline */}
            <svg
              className="absolute -bottom-3 left-0 w-full h-2"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38b2ac" /> {/* Soft Teal */}
                  <stop offset="100%" stopColor="#16a34a" /> {/* Brand Green */}
                </linearGradient>
              </defs>
              <line x1="0" y1="1" x2="100" y2="1" stroke="url(#hero-grad)" strokeWidth="2" />
            </svg>
          </div>
          
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed mb-8 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t('home.description')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto text-sm font-medium">
            <Link
              to="/resume"
              className="px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 active:scale-95 transition-all text-center"
            >
              {t('nav.resume')}
            </Link>
            <Link
              to="/projects"
              className={`px-5 py-2.5 border rounded-xl active:scale-95 transition-all text-center ${
                isDark 
                  ? 'border-gray-800 text-gray-300 hover:bg-gray-900 hover:text-white' 
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/article"
              className={`px-5 py-2.5 border rounded-xl active:scale-95 transition-all text-center ${
                isDark 
                  ? 'border-gray-800 text-gray-300 hover:bg-gray-900 hover:text-white' 
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {t('nav.article')}
            </Link>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
          isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50/70 border-gray-100'
        }`}>
          <h2 className={`text-xl font-bold tracking-tight mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              {t('home.coreExpertise')}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              'JavaScript & Playwright Architecture',
              'PostgreSQL & API Testing (Postman)',
              'CI/CD Pipelines (GitLab, GitHub Actions)',
              'Finance & Professional Accounting Insight',
              'Automated Schema Verification',
              'Prompt Engineering for QA Optimization',
            ].map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                  isDark ? 'bg-teal-400' : 'bg-green-600'
                }`} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}