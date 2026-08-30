// src/pages/Projects.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const features = t('projects.burankatop.features', { returnObjects: true }) as string[];

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className={`text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-8 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {t('projects.title')}
      </h1>

      <article
        className={`p-6 sm:p-8 rounded-2xl border transition-all ${
          isDark
            ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
            : 'bg-gray-50/70 border-gray-100 hover:border-gray-200'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h2
              className={`text-2xl font-bold tracking-tight ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              {t('projects.burankatop.title')}
            </h2>
            <p className="mt-1 text-sm font-medium text-green-600 dark:text-teal-400">
              {t('projects.burankatop.tagline')}
            </p>
          </div>

          <a
            href="https://buranka.top/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 active:scale-95 transition-all"
          >
            {t('projects.burankatop.visit')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <p className={`text-sm sm:text-base leading-relaxed mb-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {t('projects.burankatop.description')}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm mb-5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <span
                className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                  isDark ? 'bg-teal-400' : 'bg-green-600'
                }`}
              />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
            </li>
          ))}
        </ul>

        <p
          className={`text-xs font-medium border-t pt-4 ${
            isDark ? 'text-gray-500 border-gray-800' : 'text-gray-500 border-gray-100'
          }`}
        >
          {t('projects.burankatop.note')}
        </p>
      </article>
    </section>
  );
}
