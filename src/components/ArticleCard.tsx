// src/components/ArticleCard.tsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArticleMeta } from '../utils/articles';

interface Props {
  article: ArticleMeta & { content: string };
}

export default function ArticleCard({ article }: Props) {
  const [expanded, setExpanded] = useState(false);

  const formattedDate = new Date(article.dateAdded).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  });

  const copyLink = () => {
    const url = `${window.location.origin}/article/${article.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      // simple feedback – could be replaced by a toast later
      alert('Link copied to clipboard');
    });
  };

  return (
    <li className="border rounded-lg p-4 mb-4 hover:shadow-md">
      {/* Cover image if present */}
      {article.cover && (
        <img src={article.cover} alt="Cover" className="w-full h-32 object-cover mb-4" />
      )}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          {article.title}
          <span className="fi fi-us" title="English" />
        </h2>
        <button
          onClick={copyLink}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
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
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <img src={article.author.avatar} alt={article.author.name} className="w-5 h-5 rounded-full mr-2" />
        <span>{article.author.name}</span>
        <span className="mx-2">·</span>
        <span>{formattedDate}</span>
      </div>
      {expanded ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
      ) : (
        <p className="text-gray-700">{article.content.split('\n').slice(0, 3).join(' ')}…</p>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-600 hover:underline"
      >
        {expanded ? 'Show less' : 'Show all'}
      </button>
    </li>
  );
}
