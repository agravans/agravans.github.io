Latency, cost, fallbacks, observability—what it takes for AI to earn its place in production.

---

A great demo is not a great product. Demos hide latency, cost, failure modes, and integration complexity. Real users care about speed, reliability, and whether the AI actually saves them time.

**Latency.** Sub-second feels magical; 3+ seconds feels broken. For RAG and agents, the bottleneck is often retrieval and model calls. Batching, caching, and streaming matter. So does setting expectations: show a skeleton, stream the answer.

**Cost.** $8 per input is not scalable. Batch processing, smaller models where possible, and observability (Langfuse, cost ledgers) let you iterate without going broke. One project went from $8→$0.30 per input by switching pipelines and tuning batch sizes.

**Fallbacks.** Models fail, APIs throttle, prompts drift. Graceful degradation—fallback to cached results, simpler models, or "try again"—keeps the product usable.

**Observability.** You can't fix what you can't see. Tracing, logging, and evaluation pipelines (accuracy, latency, cost per run) turn guesswork into data. Guardrails saved $3 per 10 LLM generations in one deployment by catching bad outputs early.

**The bottom line:** AI earns its place when it's fast, cheap enough, reliable, and measurable. Everything else is a demo.
