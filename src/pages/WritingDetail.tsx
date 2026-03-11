import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { getWriting } from "../lib/writing";
import { getWritingContent } from "../lib/content";
import { Container } from "../components/layout/Container";
import { Badge } from "../components/ui/Badge";
import { GlowCard } from "../components/ui/GlowCard";
import { LinkArrow } from "../components/ui/LinkArrow";
import { WRITING } from "../lib/writing";

export function WritingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getWriting(slug) : null;
  const content = slug ? getWritingContent(slug) : null;

  if (!article) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/writing" className="mt-4 inline-block text-[var(--accent)] hover:underline">
          Back to Writing
        </Link>
      </div>
    );
  }

  const related = WRITING.filter((w) => w.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Container size="narrow">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="mb-4"><Badge>{article.category}</Badge></div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{article.title}</h1>
            <p className="text-lg text-[var(--text-muted)]">{article.excerpt}</p>
            <p className="mt-4 text-sm text-[var(--text-dim)]">
              {article.date} · {article.readTime} read
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4 prose-p:text-[var(--text-muted)] prose-p:leading-relaxed prose-a:text-[var(--accent)] prose-strong:text-[var(--text)]"
          >
            {content ? (
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h2 className="text-xl font-semibold mt-8 mb-4">{children}</h2>,
                  h2: ({ children }) => <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-[var(--text-muted)] leading-relaxed mb-4">{children}</p>,
                  strong: ({ children }) => <strong className="text-[var(--text)] font-semibold">{children}</strong>,
                  ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 my-4 text-[var(--text-muted)]">{children}</ul>,
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  pre: ({ children }) => (
                    <pre className="my-6 overflow-x-auto rounded-lg border border-white/10 bg-white/[0.03] p-4 font-mono text-sm text-[var(--text-muted)]">
                      {children}
                    </pre>
                  ),
                  code: ({ className, children }) =>
                    className ? (
                      <code className={className}>{children}</code>
                    ) : (
                      <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm">{children}</code>
                    ),
                  a: ({ href, children }) => {
                    const isInternal = href?.startsWith("/") && !href?.startsWith("//");
                    const isPromptLink = href?.includes("docs.google.com/document/d/1w9q2UBhmilLC8rC_x65RTdTrsZb3l5_ryAosDr5uaFk");
                    const className = isPromptLink ? "prompt-doc-link" : "";
                    if (isInternal && href) {
                      return (
                        <Link to={href} className={className || "text-[var(--accent)] hover:underline"}>
                          {children}
                          {isPromptLink && " →"}
                        </Link>
                      );
                    }
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className || "text-[var(--accent)] hover:underline"}
                      >
                        {children}
                        {isPromptLink && " →"}
                      </a>
                    );
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            ) : (
              <p className="text-[var(--text-muted)] leading-relaxed">{article.excerpt}</p>
            )}
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">
            <LinkArrow to="/writing">More writing</LinkArrow>
            <LinkArrow to="/projects">View projects</LinkArrow>
            <LinkArrow to="/contact">Connect</LinkArrow>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <h2 className="mb-8 text-xl font-bold">Related articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((w) => (
                <Link key={w.slug} to={`/writing/${w.slug}`}>
                  <GlowCard className="h-full">
                    <p className="mb-1 text-xs text-[var(--text-dim)]">{w.category} · {w.date}</p>
                    <h3 className="font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{w.excerpt}</p>
                    <span className="mt-4 inline-flex items-center text-sm text-[var(--accent)]">Read →</span>
                  </GlowCard>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
