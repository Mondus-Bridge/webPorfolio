// src/pages/Resume.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';

export default function Resume() {
  const [md, setMd] = useState<string>('');

  useEffect(() => {
    fetch('/Resume.md')
      .then(r => r.text())
      .then(setMd)
      .catch(() => setMd('# Resume not found'));
  }, []);

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
