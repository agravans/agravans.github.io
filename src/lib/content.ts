// Map slug -> raw markdown content
// Vite glob: paths relative to this file
const modules = import.meta.glob<string>("../content/writing/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function slugFromPath(path: string): string {
  const match = path.match(/writing\/(.+)\.md$/);
  return match ? match[1] : "";
}

export const WRITING_CONTENT: Record<string, string> = {};
for (const [path, content] of Object.entries(modules)) {
  const slug = slugFromPath(path);
  if (slug) WRITING_CONTENT[slug] = content as string;
}

export function getWritingContent(slug: string): string | undefined {
  return WRITING_CONTENT[slug];
}
