// src/pages/Article.tsx
import React from 'react';

export default function Article() {
  return (
    /* Add dark:prose-invert here to make headings, paragraphs, 
       and code blocks automatically flip to readable light shades */
    <section className="prose lg:prose-xl dark:prose-invert mx-auto py-12">
      <h1>Article Title</h1>
      <p>This is a placeholder article page. Replace with real content.</p>
    </section>
  );
}