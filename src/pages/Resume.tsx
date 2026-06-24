// src/pages/Resume.tsx
import React from 'react';
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
  const { current } = useLocale();

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
    <section className="prose lg:prose-xl dark:prose-invert mx-auto py-12">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
      >
        {md}
      </ReactMarkdown>
    </section>
  );
}
