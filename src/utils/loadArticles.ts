export const loadArticles = () => {
  // Import all markdown files as raw strings (Vite feature)
  const modules = import.meta.glob('../articles/*.md', { as: 'raw' });
  return modules as Record<string, () => Promise<string>>;
};
