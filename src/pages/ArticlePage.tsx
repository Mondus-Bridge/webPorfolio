// src/pages/ArticlePage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticle } from '../utils/articles';
import type { ArticleMeta } from '../utils/articles';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<(ArticleMeta & { content: string }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    getArticle(slug).then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <p className="p-4">Loading article…</p>;
  if (!article) return <p className="p-4">Article not found.</p>;

  const formattedDate = new Date(article.dateAdded).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  });

  const copyLink = () => {
    const url = `${window.location.origin}/article/${article.slug}`;
    navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard'));
  };

  return (
    <section className="prose lg:prose-xl dark:prose-invert mx-auto py-12">
      {article.cover && (
        <img src={article.cover} alt="Cover" className="w-full h-48 object-cover mb-6" />
      )}
      <h1 className="flex items-center gap-2">
        {article.title}
        <span className="fi fi-us" title="English" />
      </h1>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <img src={article.author.avatar} alt={article.author.name} className="w-6 h-6 rounded-full mr-2" />
        <span>{article.author.name}</span>
        <span className="mx-2">·</span>
        <span>{formattedDate}</span>
        <button
          onClick={copyLink}
          className="ml-4 flex items-center gap-1 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5h6m0 0v6m0-6L10 14"
            />
          </svg>
          Share
        </button>
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
    </section>
  );
}
