// src/pages/ArticlesList.tsx
import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../utils/articles';
import type { ArticleMeta } from '../utils/articles';

export default function ArticlesList() {
  const [articles, setArticles] = useState<(ArticleMeta & { content: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="p-4">Loading articles…</p>;

  return (
    <section className="prose lg:prose-xl dark:prose-invert mx-auto py-12">
      <h1>Articles</h1>
      <ul className="list-none p-0">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </ul>
    </section>
  );
}
