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
  description?: string; // Optional field for summary preview
}

/** Type representing an article metadata merged with its raw body content */
export type FullArticle = ArticleMeta & { content: string };

// ---------------------------------------------------------------------------
// Static metadata map – add a new entry here when you add a markdown file.
// ---------------------------------------------------------------------------
const meta: Record<string, ArticleMeta> = {
  'first-article': {
    slug: 'first-article',
    title: 'The Last Guard: Why QA Is More Critical Than Ever',
    author: { name: 'gpt-oss-120b', avatar: '/src/assets/test-icons/apple.svg' },
    dateAdded: '2026-07-01',
    cover: '/src/assets/test-icons/photo.png',
  },
  'second-article': {
    slug: 'second-article',
    title: 'Second Article',
    author: { name: 'gpt-oss-120b', avatar: '/src/assets/test-icons/apple.svg' },
    dateAdded: '2026-06-10',
    cover: '/src/assets/test-icons/photo.png',
  },
};

/**
 * Helper function to strip markdown styling syntax and extract a clean summary excerpt.
 */
function extractCleanPreview(rawMarkdown: string): string {
  if (!rawMarkdown) return '';

  let cleanText = rawMarkdown.trim();

  // 1. Strip YAML frontmatter blocks (--- ... ---)
  if (cleanText.startsWith('---')) {
    const nextDashIndex = cleanText.indexOf('---', 3);
    if (nextDashIndex !== -1) {
      cleanText = cleanText.slice(nextDashIndex + 3).trim();
    }
  }

  // 2. Remove header lines (# H1, ## H2, etc)
  cleanText = cleanText.replace(/^#+\s+.*$/gm, '');

  // 3. Clean out images, links, markdown formatting markers, and extra whitespaces
  cleanText = cleanText
    .replace(/!?\[([^\]]*)]\([^)]*\)/g, '$1') // Strip links/images
    .replace(/[\*_`~]/g, '')                 // Strip bold, italics, code styling
    .replace(/\s+/g, ' ')                     // Normalize line breaks and spaces
    .trim();

  // 4. Return clean summary truncated to 200 characters
  return cleanText.length > 200 ? cleanText.slice(0, 197) + '...' : cleanText;
}

/** Load all markdown files as raw strings and merge with the static metadata. */
export const getAllArticles = async (): Promise<FullArticle[]> => {
  const loaders = import.meta.glob('../articles/*.md', { query: '?raw', import: 'default' });

  const entries = await Promise.all(
    Object.entries(loaders).map(async ([path, load]): Promise<FullArticle | null> => {
      const slug = path.split('/').pop()!.replace('.md', '');
      const content = await (load as () => Promise<string>)();
      const base = meta[slug];
      if (!base) return null;

      const description = extractCleanPreview(content);

      return { 
        ...base, 
        description, 
        content 
      };
    })
  );

  // Filter out null values cleanly using the FullArticle type predicate
  return entries.filter((e): e is FullArticle => Boolean(e));
};

/** Load a single article by slug. Returns null if not found. */
export const getArticle = async (
  slug: string
): Promise<FullArticle | null> => {
  const loaders = import.meta.glob('../articles/*.md', { query: '?raw', import: 'default' });
  const loader = loaders[`../articles/${slug}.md`] as (() => Promise<string>) | undefined;
  if (!loader) return null;

  const content = await loader();
  const base = meta[slug];
  if (!base) return null;

  const description = extractCleanPreview(content);

  return { ...base, description, content };
};