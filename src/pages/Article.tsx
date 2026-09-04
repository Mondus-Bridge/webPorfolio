// src/pages/Article.tsx
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import { useTheme } from '../context/ThemeContext';
import { useLocale } from '../hooks/useLocale';
import { getArticleBySlug, formatArticleDate } from '../articles';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { current } = useLocale();

  const article = getArticleBySlug(slug);

  useEffect(() => {
    document.title = article ? t(article.titleKey) : t('articles.title');
  }, [article, t]);

  if (!article) {
    return (
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1
          className={`text-3xl font-serif font-bold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {t('articles.notFound')}
        </h1>
        <Link
          to="/articles"
          className={`text-sm font-medium ${
            isDark ? 'text-teal-400 hover:text-teal-300' : 'text-green-700 hover:text-green-800'
          }`}
        >
          ← {t('articles.backToList')}
        </Link>
      </section>
    );
  }

  const md = article.contentByLocale[current] ?? article.contentByLocale.en;

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        to="/articles"
        className={`inline-flex items-center gap-1.5 text-sm font-medium mb-6 transition-colors ${
          isDark ? 'text-teal-400 hover:text-teal-300' : 'text-green-700 hover:text-green-800'
        }`}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t('articles.backToList')}
      </Link>

      <div className={`overflow-hidden rounded-2xl border ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="aspect-[16/9] overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img src={article.cover} alt={t(article.titleKey)} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-8 mb-8">
        <p className="text-xs font-semibold tracking-wider uppercase text-green-600 dark:text-teal-400 mb-3">
          {formatArticleDate(article.date, current)}
        </p>
        <h1
          className={`text-3xl sm:text-4xl font-serif font-bold tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {t(article.titleKey)}
        </h1>
      </div>

      <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
        >
          {md}
        </ReactMarkdown>
      </div>
    </section>
  );
}