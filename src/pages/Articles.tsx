// src/pages/Articles.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLocale } from '../hooks/useLocale';
import { articles, formatArticleDate } from '../articles';

export default function Articles() {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { current } = useLocale();

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className={`text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-8 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {t('articles.title')}
      </h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className={`overflow-hidden rounded-2xl border transition-all ${
              isDark
                ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                : 'bg-gray-50/70 border-gray-100 hover:border-gray-200'
            }`}
          >
            <Link to={`/articles/${article.slug}`} className="group block">
              <div className="aspect-[16/9] overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={article.cover}
                  alt={t(article.titleKey)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wider uppercase text-green-600 dark:text-teal-400 mb-2">
                  {formatArticleDate(article.date, current)}
                </p>
                <h2
                  className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                    isDark
                      ? 'text-gray-100 group-hover:text-teal-400'
                      : 'text-gray-900 group-hover:text-green-700'
                  }`}
                >
                  {t(article.titleKey)}
                </h2>
                <span
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${
                    isDark ? 'text-teal-400' : 'text-green-700'
                  }`}
                >
                  {t('articles.readMore')}
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}