// src/pages/Projects.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="prose lg:prose-xl dark:prose-invert mx-auto py-12">
      <h1>{t('projects.title')}</h1>
      <p>{t('projects.placeholder')}</p>
    </section>
  );
}
