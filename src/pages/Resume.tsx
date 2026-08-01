// src/pages/Resume.tsx
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import enResume from '../resume/Resume.en.md?raw';
import ruResume from '../resume/Resume.ru.md?raw';
import arResume from '../resume/Resume.ar.md?raw';
import esResume from '../resume/Resume.es.md?raw';
import frResume from '../resume/Resume.fr.md?raw';
import deResume from '../resume/Resume.de.md?raw';
import zhResume from '../resume/Resume.zh.md?raw';
import { useLocale } from '../hooks/useLocale';

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const { current } = useLocale();
  const { t } = useTranslation();
  const resumeMap: Record<string, string> = {
    ru: ruResume,
    ar: arResume,
    es: esResume,
    fr: frResume,
    de: deResume,
    zh: zhResume,
    en: enResume,
  };

  const md = resumeMap[current] ?? enResume;

  return (
      <section ref={resumeRef} className="prose lg:prose-xl dark:prose-invert mx-auto py-12">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
      >
        {md}
        </ReactMarkdown>
        <div className="mt-6 flex gap-4">
          <button
            className="no-print px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-500 transition-colors print:hidden"
            onClick={() => {
              const printWindow = window.open('', '_blank');
              if (!printWindow) return;
              // Clone resume section and remove the button before printing
              const clone = resumeRef.current?.cloneNode(true) as HTMLElement;
              clone?.querySelector('.no-print')?.remove();
              const content = clone?.innerHTML ?? '';
              printWindow.document.write(`
                <html>
                <head>
                  <title>Resume</title>
                  <style>
                    body { margin: 0; padding: 1rem; font-family: system-ui, sans-serif; }
                  </style>
                </head>
                <body>${content}</body>
                </html>
              `);
              printWindow.document.close();
              printWindow.focus();
              printWindow.print();
            }}
          >
              {t('resume.downloadPdf')}
          </button>
        </div>
      </section>
    );
}
