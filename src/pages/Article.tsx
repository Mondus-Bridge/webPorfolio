// src/pages/Article.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Article() {
  const { t } = useTranslation();
  return (
    /* Add dark:prose-invert here to make headings, paragraphs, 
       and code blocks automatically flip to readable light shades */
    <section className="prose lg:prose-xl dark:prose-invert mx-auto py-12">
      <h1>{t('article.title')}</h1>
      <p>{t('article.placeholder')}</p>
    </section>
  );
}
