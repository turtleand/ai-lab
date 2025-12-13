# LLM & GenAI Builder Track

## Summary
Self-learner path for going from zero to shipping practical LLM-based tools and agents, with an emphasis on clarity, reproducibility, and real usage inside the Turtleand ecosystem.

## Header Refresh Ideas
- **Signal gradient hero** — Simple: add a light gradient with faint data lines behind the title so it pops from the roadmap cards. Elaborated: pair the existing title and summary with a slim, animated gradient backdrop and a thin grid of dotted lines; keep the content centered with a high-contrast badge to frame the "LLM & GenAI Builder" label, giving the header its own atmosphere while staying lightweight.
- **Dual-rail card** — Simple: split the header into a main title column and a slim rail of badges/pills. Elaborated: keep the main copy on the left, but add a right-hand rail with a vertical stack of small pills for current module, status, and next checkpoint; add subtle dividers and offset shadows so the card reads as a two-piece object unlike the roadmap blocks.
- **Notebook band** — Simple: wrap the header in a thin "notebook" band with a tab and a mini timeline dot. Elaborated: enclose the title/summary in a rounded band with a colored tab labeled "AI Lab" and a small progress dot with a label like "Module 1 • In progress"; use a slight paper texture and an underline accent to make it feel like a pinned note rather than another roadmap tile.

## Module Status Placement Ideas
- **Rail status chip** — Simple: move the current module/status into a vertical rail on the right of the page hero. Elaborated: add a narrow side rail that sticks on scroll for the first fold, containing a bold pill like "Module 0 • In progress" plus a mini "Next up" link; this separates status from the main title, keeps the hero cleaner, and still makes the status visible without competing with the headline.
- **Roadmap inline badge** — Simple: remove status from the hero and show it only inside the roadmap list. Elaborated: keep the hero purely narrative, then surface the current module by auto-expanding the active module row and adding a colored inline badge at the top of the roadmap block (e.g., "Currently tracking: Module 0"); readers naturally find status where they explore modules, and the hero stays focused on purpose/summary.
- **Top meta bar** — Simple: replace the hero badge with a slim meta bar above the page content. Elaborated: add a 100%-width bar above the hero with concise metadata like "Module 0 • In progress — Next milestone: log entry #2", styled with a subtle gradient and icon; it feels like system status rather than part of the hero card and can scroll away once the reader moves past the first viewport.

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
