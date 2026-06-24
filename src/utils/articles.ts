// src/utils/articles.ts

/**
 * Hard‑coded metadata for each article. The slug matches the markdown filename
 * (without the .md extension). All content is in English, so no locale handling.
 */
export interface ArticleMeta {
  slug: string;
  title: string;
  author: { name: string; avatar: string }; // avatar path to SVG
  dateAdded: string; // ISO string
  cover?: string; // optional SVG illustration path
}

// ---------------------------------------------------------------------------
// Static metadata map – add a new entry here when you add a markdown file.
// ---------------------------------------------------------------------------
const meta: Record<string, ArticleMeta> = {
  'first-article': {
    slug: 'first-article',
    title: 'First Article',
    author: { name: 'Ada Lovelace', avatar: '/src/assets/test-icons/author1.svg' },
    dateAdded: '2024-01-15',
    cover: '/src/assets/test-icons/photo1.svg',
  },
  'second-article': {
    slug: 'second-article',
    title: 'Second Article',
    author: { name: 'Grace Hopper', avatar: '/src/assets/test-icons/author1.svg' },
    dateAdded: '2024-02-10',
    // No cover image for this one
  },
};

/** Load all markdown files as raw strings and merge with the static metadata. */
export const getAllArticles = async (): Promise<(ArticleMeta & { content: string })[]> => {
  const loaders = import.meta.glob('../articles/*.md', { as: 'raw' });
  const entries = await Promise.all(
    Object.entries(loaders).map(async ([path, load]) => {
      const slug = path.split('/').pop()!.replace('.md', '');
      const content = await (load as () => Promise<string>)();
      const base = meta[slug];
      if (!base) return null;
      return { ...base, content };
    })
  );
  // Filter out any nulls (in case a markdown file lacks metadata)
  return entries.filter((e): e is ArticleMeta & { content: string } => e !== null);
};

/** Load a single article by slug. Returns null if not found. */
export const getArticle = async (
  slug: string
): Promise<(ArticleMeta & { content: string }) | null> => {
  const loaders = import.meta.glob('../articles/*.md', { as: 'raw' });
  const loader = loaders[`../articles/${slug}.md`] as (() => Promise<string>) | undefined;
  if (!loader) return null;
  const content = await loader();
  const base = meta[slug];
  if (!base) return null;
  return { ...base, content };
};
