What I learned turning a messy productivity system into an AI-native personal operating system.

---

Most productivity tools are either too rigid or too shallow. They track tasks but don't understand context, energy, or long-term goals. I kept bouncing between Notion, Todoist, and scattered notes—none of which reduced the overhead of planning or helped me stay aligned.

**The core question:** How do you build a system that reduces prompt burden and structures your life instead of forcing manual planning?

LifeOS started as an experiment: a single place for missions, goals, projects, tasks, daily blocks, and habits—all linked so that progress in one area visibly moves the needle elsewhere. The AI assistant (Current) helps plan the day, surface what's drifting, and structure brain dumps. But the real unlock was the data model: write-through aggregates (DailyAggregate, WeeklyAggregate) that cut Home and Analytics queries from 15–25 live joins down to 1–3 reads. Cascading progress recalculation means completing a task updates its project, goal, and mission in one pass.

**Key learnings:**

- **Structure first.** The AI is useful only when the underlying data model supports clear hierarchies (mission → goal → project → task).
- **Write-through beats read-time aggregation** for dashboards. Precompute at write; serve fast.
- **Dual-linking** (Goal + Project) with auto-suggestion reduces friction at every entry point.

I'm still iterating. V2 will add offline-first support, richer natural language for the assistant, and more adaptive daily planning based on energy and context.
