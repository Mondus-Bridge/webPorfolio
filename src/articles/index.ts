// src/articles/index.ts
import { Locale } from '../hooks/useLocale';

import midGradeWebAppEn from './mid-grade-web-app/en.md?raw';
import midGradeWebAppRu from './mid-grade-web-app/ru.md?raw';
import midGradeWebAppAr from './mid-grade-web-app/ar.md?raw';
import midGradeWebAppEs from './mid-grade-web-app/es.md?raw';
import midGradeWebAppFr from './mid-grade-web-app/fr.md?raw';
import midGradeWebAppDe from './mid-grade-web-app/de.md?raw';
import midGradeWebAppZh from './mid-grade-web-app/zh.md?raw';

import manualTestingEn from './manual-testing/en.md?raw';
import manualTestingRu from './manual-testing/ru.md?raw';
import manualTestingAr from './manual-testing/ar.md?raw';
import manualTestingEs from './manual-testing/es.md?raw';
import manualTestingFr from './manual-testing/fr.md?raw';
import manualTestingDe from './manual-testing/de.md?raw';
import manualTestingZh from './manual-testing/zh.md?raw';

import midGradeWebAppCover from '../assets/articles/mid-grade-web-app.png';
import manualTestingCover from '../assets/articles/manual-testing.png';

export interface Article {
  slug: string;
  titleKey: string;
  date: string;
  originalUrl: string;
  cover: string;
  contentByLocale: Record<Locale, string>;
}

export const articles: Article[] = [
  {
    slug: 'mid-grade-web-app',
    titleKey: 'articles.midGradeWebApp.title',
    date: '2026-08-31',
    originalUrl:
      'https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/',
    cover: midGradeWebAppCover,
    contentByLocale: {
      en: midGradeWebAppEn,
      ru: midGradeWebAppRu,
      ar: midGradeWebAppAr,
      es: midGradeWebAppEs,
      fr: midGradeWebAppFr,
      de: midGradeWebAppDe,
      zh: midGradeWebAppZh,
    },
  },
  {
    slug: 'manual-testing',
    titleKey: 'articles.manualTesting.title',
    date: '2026-09-03',
    originalUrl:
      'https://www.linkedin.com/pulse/how-ai-made-manual-testing-valuable-again-ilnur-gabitov-ohh9f/',
    cover: manualTestingCover,
    contentByLocale: {
      en: manualTestingEn,
      ru: manualTestingRu,
      ar: manualTestingAr,
      es: manualTestingEs,
      fr: manualTestingFr,
      de: manualTestingDe,
      zh: manualTestingZh,
    },
  },
];

export function getArticleBySlug(slug: string | undefined): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(
    new Date(iso),
  );
}