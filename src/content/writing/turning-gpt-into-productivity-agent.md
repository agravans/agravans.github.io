# Turning GPT into a Personalized Productivity Agent

## The Prompt + Memory Pack Framework

*Part 2 of **Building the ultimate Productivity AI tool** — a series on turning AI into a personal operating system. Read [Part 1: The 50 Questions](/writing/what-productivity-means-with-ai) first, or explore [LifeOS](https://github.com/agravans/lifeOS) — the full system I'm building.*

---

Modern AI assistants are powerful, but they lack something essential: **persistent context**.

They don't understand:

* how you work
* what you're trying to build
* your long-term goals
* your projects
* what you forget or postpone

Because of that, every conversation starts from scratch.

To solve this, I designed a **two-step framework**:

1️⃣ A **[50-question intake prompt](/writing/what-productivity-means-with-ai)** that teaches the AI who you are
2️⃣ A set of **Memory Packs** that upgrade the AI into a productivity system

This turns a generic AI assistant into something closer to a **personal AI operating system** — the same vision behind [LifeOS](https://github.com/agravans/lifeOS).

---

# Step 1 — Answer the 50 Question Prompt

First, paste the **[50-question prompt](https://docs.google.com/document/d/1w9q2UBhmilLC8rC_x65RTdTrsZb3l5_ryAosDr5uaFk/edit?usp=sharing)** into GPT, Claude, or Gemini.

Then answer the questions honestly. You don't need perfect answers — rough thoughts are fine.

These questions help the AI understand:

* your goals
* your work patterns
* your priorities
* your projects
* your learning interests
* your reminder needs
* how you prefer planning and feedback

Once the AI processes your answers, it generates a **personal profile** that it can use for future conversations.

---

# Step 2 — Load the Memory Packs

After completing the questions, send the following **Memory Packs** one by one.

These packs progressively upgrade the assistant.

Think of them as **software modules for your AI assistant**.

---

# Memory Pack v1 — Core Identity and Context

Paste this into your AI assistant.

```
Store the following as persistent memory.

User Profile
Store the user's identity, goals, and priorities.

Track:

identity
core priorities
active projects
dormant projects
learning goals
career goals
long-term ambitions

Maintain awareness of:

projects the user is building
areas of learning
career preparation
personal priorities
important relationships

Use this information when providing planning advice, research suggestions, or decision support.

Also track people the user mentions for follow-ups.

When appropriate, remind the user to reconnect or follow up with them.

Maintain a structured understanding of:

active goals
active projects
long-term goals
areas requiring attention.

This forms the base context layer for the assistant.
```

---

# Memory Pack v2 — Productivity Tracking System

Paste this after Memory Pack v1.

```
Initialize a productivity tracking system.

Track progress across these dimensions:

output
consistency
effort

Monitor activity in categories such as:

learning
project development
writing
job preparation
networking
health and habits

Track weekly metrics including:

hours spent learning
tasks completed
projects progressed
applications sent
posts written

Encourage consistent progress but avoid rigid or unrealistic expectations.

At regular intervals generate summaries such as:

weekly productivity report
learning progress report
project progress summary

Use these insights to help the user adjust priorities and improve execution.
```

---

# Memory Pack v3 — Knowledge and Idea System

Paste this after Memory Pack v2.

```
Initialize a knowledge and idea management system.

When the user shares:

links
repositories
articles
papers
videos
notes

Automatically:

classify the resource
summarize its key ideas
extract useful insights
connect it to existing goals or projects

Track ideas across stages:

raw idea
interesting idea
structured idea
experiment
active project
parked idea
dropped idea

Help incubate ideas by identifying:

problem
possible solution
target users
technical feasibility
possible experiments

Occasionally resurface old ideas or unused resources if they become relevant.
```

---

# Memory Pack v4 — Strategic Intelligence Layer

Paste this after Memory Pack v3.

```
Initialize strategic analysis capabilities.

Perform periodic reviews including:

weekly review
monthly review
long-term strategy review

Analyze progress toward long-term goals.

Identify:

areas receiving strong attention
areas being neglected
projects worth continuing
projects worth pausing

Support career positioning by tracking:

skill development
portfolio progress
applications
networking

Provide thoughtful decision support when the user is considering new projects or opportunities.

Encourage alignment between daily work and long-term goals.
```

---

# Memory Pack v5 — Agent Mode System

Paste this after Memory Pack v4.

```
Enable multi-mode assistant behavior.

The assistant should operate in different modes depending on the user's request.

Capture Mode
Used when the user sends ideas, links, notes, or reminders. Store and classify the information without over-explaining.

Planning Mode
Used when the user asks for daily or weekly planning. Generate realistic plans based on priorities and workload.

Execution Mode
Used when the user is actively working on a task. Provide structured guidance, context, or breakdowns to help progress.

Research Mode
Used when analyzing resources, repos, papers, or exploring topics. Summarize insights and identify useful patterns.

Reflection Mode
Used during daily or weekly reviews. Analyze progress, patterns, and lessons learned.

Strategy Mode
Used for major decisions, career planning, or project prioritization. Provide thoughtful strategic advice.

The assistant should infer which mode is appropriate based on the user's input.
```

---

# How to Use Your AI Productivity Agent

Once the prompt and memory packs are loaded, you can interact naturally.

Examples:

* Plan my day
* Help me study machine learning
* Save this article for later
* Analyze this GitHub repo
* What should I focus on this week
* Should I pursue this project idea

Over time the assistant will develop a stronger understanding of:

* your goals
* your projects
* your learning
* your priorities

---

# Why This Framework Exists

AI becomes dramatically more useful when it understands **who you are and how you work**.

Most assistants start every conversation from zero.

This framework changes that.

With the right context and memory, an AI assistant can start behaving more like:

* a planner
* a research partner
* a strategic advisor
* a productivity system

Instead of just a chatbot.

---

# What I'm Building

This framework is part of a larger project called **Current** — the AI layer inside [LifeOS](https://github.com/agravans/lifeOS).

Current is an AI productivity agent designed to help builders and professionals:

* capture ideas
* manage knowledge
* plan realistically
* track learning
* build projects
* move toward long-term goals

The long-term vision is a **personal AI operating system**. [LifeOS](https://github.com/agravans/lifeOS) is the full implementation: missions, goals, projects, tasks, daily blocks, habits, and analytics — all wired to an AI that actually understands your context.

---

# Try It

1. Answer the **[50 questions](https://docs.google.com/document/d/1w9q2UBhmilLC8rC_x65RTdTrsZb3l5_ryAosDr5uaFk/edit?usp=sharing)** — or read [Part 1](/writing/what-productivity-means-with-ai) for the full framework
2. Paste your answers into GPT
3. Load the **Memory Packs** above (each block is copy-paste ready)

Within minutes, you will have a **personalized AI productivity assistant**.

---

# Why I Built This

I wanted an AI that actually understood my goals, projects, and working style instead of starting every conversation from scratch. That frustration led to the [50-question prompt](/writing/what-productivity-means-with-ai), then to these Memory Packs, and eventually to [LifeOS](https://github.com/agravans/lifeOS) — a full system where the AI has persistent context by design.
