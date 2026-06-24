import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';

import enResume from '../resume/Resume.en.md?raw';
import ruResume from '../resume/Resume.ru.md?raw';
import { useLocale } from '../hooks/useLocale'; // Or '../context/LanguageContext'

export default function Resume() {
  const { current } = useLocale(); // Verify if this is 'current' or 'locale'
  const [md, setMd] = useState(enResume);

  // Use an explicit useEffect to catch state broadcasts across pages
  useEffect(() => {
    if (current === 'ru') {
      setMd(ruResume);
    } else {
      setMd(enResume);
    }
  }, [current]); // Tracks the language switch instantly across route links!

  return (
    <section className="prose lg:prose-xl dark:prose-invert mx-auto py-12 px-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
      >
        {md}
      </ReactMarkdown>
    </section>
  );
}