import { WRITING } from "../lib/writing";

export function Writing() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Writing</h1>
        <p className="text-[var(--text-muted)] mb-16">
          Notes on building AI systems and product thinking
        </p>

        <div className="space-y-8">
          {WRITING.map((w) => (
            <article
              key={w.slug}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <p className="text-xs text-[var(--text-dim)] font-mono mb-2">{w.date}</p>
              <h2 className="font-semibold text-lg mb-2">{w.title}</h2>
              <p className="text-sm text-[var(--text-muted)]">{w.excerpt}</p>
              <p className="text-xs text-[var(--text-dim)] mt-4">Coming soon</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
