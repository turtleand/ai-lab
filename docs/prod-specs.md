# AI Lab Product Specification

## Summary
- An intentionally small, personal AI Lab that tracks one learner's growth from foundations to advanced topics.
- The program follows a university-style sequence: clear modules, simple progression, visible milestones.
- MVP favors learning logs and one experiment template; no grids, filters, or heavy navigation.
- Tech stays minimal (Astro + MDX, static build, no auth/backends) to keep focus on learning.

## MVP Goal
- Ship a single-page AI Lab that explains the program, shows module progression, and hosts the first learning log plus one foundational experiment.

## Learning Program (Module Ladder)
- Module 0: Setup — tools, repos, GPU/access notes, study plan.
- Module 1: Foundations — Python refresh, linear algebra/calculus basics, data cleaning.
- Module 2: Core ML — regression/classification, train/val split, metrics, overfitting basics.
- Module 3: Neural Basics — embeddings, simple MLP/CNN/RNN examples, basic serving.
- Module 4: Applied Builds — small projects (e.g., text classifier, image tagger) with reproducibility notes.
- Future modules can be appended; each entry records start date, key resources, and next steps.

## Experience (What Ships in MVP)
- Hero: "AI Lab" title, one-line purpose, and current module badge.
- Module tracker: vertical list of modules with status (not started/in-progress/done) and links to notes.
- Learning log: chronological entries (date, what was studied/built, blockers, next action).
- Single experiment template: one foundational experiment card with summary, repo/notebook link, and "how to reproduce" steps.
- CTA: link to follow updates (email/social) and back to Build/Portal.

## Content Format
- All posts/logs live in `src/content/ai-lab/` as MDX/Markdown.
- Frontmatter (keep tiny): `title`, `date`, `module`, `status` (planned|in-progress|done), `resources` (list), `next_steps` (list), optional `repo`/`notebook`.
- Logs emphasize honesty about confusion/blocked items to show progress over time.

## Technical MVP
- Astro static site with one page in `src/pages/ai-lab.astro` (or similar) pulling MDX content.
- Minimal components: layout shell, hero block, module tracker list, learning log list, experiment card.
- Styling: simple CSS/tokens; light theme; readable type; focus-visible states; mobile-first layout.
- Performance/accessibility: static render, minimal/no client JS; alt text on images; keyboard-friendly lists.
- Tooling: TypeScript + Prettier/ESLint; optional Markdown lint; no analytics or forms in MVP (add later).

## Success Signals (MVP)
- Page loads fast and reads well on mobile/desktop.
- At least one module marked "in-progress" with real notes, plus one completed learning log entry and one reproducible experiment.
- Clear "what's next" visible for the learner.

## Out of Scope (MVP)
- User accounts, comments, or submissions.
- Filters, grids, complex navigation, or component library.
- Advanced analytics, heavy demos, or backend services.
