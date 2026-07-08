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
      alert('Link copied to clipboard');
    });
  };

  return (
    <li className="border border-gray-100 dark:border-gray-800/80 rounded-2xl p-5 mb-5 bg-white dark:bg-gray-950 hover:shadow-lg transition-all duration-300 flex flex-col">
      
{/* 1. TOP ROW: Title and Consolidated Action Container */}
<div className="flex items-start justify-between gap-4 mb-3 w-full">
  
  {/* Left Side: Title takes up available space but leaves room for buttons */}
  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 flex-1 min-w-0 pr-2">
    {article.title}
  </h2>
  
  {/* Right Side: Language Flag & Share Button Container (Locked together with a 12px/gap-3 space) */}
  <div className="flex items-center gap-3 shrink-0 mt-1">
    
    {/* Language Flag Asset */}
    <span className="fi fi-us shadow-sm rounded-sm shrink-0" title="English" />
    
    {/* Share Button Block */}
    <button
      onClick={copyLink}
      className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors bg-gray-50 dark:bg-gray-900 px-2.5 py-1 rounded-md border border-gray-100 dark:border-gray-800 shrink-0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5h6m0 0v6m0-6L10 14" />
      </svg>
      Share
    </button>

  </div>
</div>

      {/* 2. SUB-ROW: Author info & Date */}
      <div className="flex items-center text-xs text-gray-400 dark:text-gray-500 mb-4 font-medium">
        <img src={article.author.avatar} alt={article.author.name} className="w-5 h-5 rounded-full mr-2 bg-gray-100 dark:bg-gray-800" />
        <span className="text-gray-600 dark:text-gray-400">{article.author.name}</span>
        <span className="mx-2">·</span>
        <span>{formattedDate}</span>
      </div>

      {/* 3. MIDDLE ROW: Full-width Proportional Aspect Image Banner */}
      {article.cover && (
        <div className="w-full mb-5 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/60 p-3 flex justify-center items-center">
          <img 
            src={article.cover} 
            alt="Cover" 
            className="object-contain" 
          />
        </div>
      )}

      {/* 4. BOTTOM ROW: Markdown/Text Content Area */}
<div className="prose dark:prose-invert max-w-none text-sm leading-relaxed text-gray-600 dark:text-gray-300 w-full">
  {expanded ? (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
  ) : (
    /* 🚀 Renders the pre-cleaned summary without markdown leakage or duplicate headers! */
    <p>{article.description || "Read the full article..."}</p>
  )}
</div>

      {/* Expand trigger button */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          {expanded ? 'Show less ↑' : 'Read full article →'}
        </button>
      </div>

    </li>
  );
}