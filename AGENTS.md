# AGENTS.md — ai-lab

See `CLAUDE.md` for curriculum, i18n, and publishing requirements.

## Scope

Applies only to `ai-lab/`.

## Ecosystem role

- AI Lab is the curriculum spine and capability-building engine of Turtleand.
- Its primary function is to turn ecosystem ideas into a staged learning path from AI power user to builder.
- It should preserve sequence, clarity, and production-oriented learning rather than drifting into generic essays or scattered notes.

## Project summary

- Stack: Astro 5
- Status: Active
- Primary function: structured AI learning roadmap and topic library

## Workflow

1. Read `README.md`, `CLAUDE.md`, and relevant docs before larger changes.
2. Prefer source edits under `src/`, `public/`, and `scripts/`.
3. Keep changes minimal and do not hand-edit build output in `dist/`.
4. Preserve the existing module/topic structure unless the task explicitly changes the curriculum.

## Content guidance

- New content should strengthen the staged builder journey, not fragment it.
- Favor topics that improve operational maturity, sequencing, and hands-on capability.
- Treat summaries, module placement, and cross-links as part of the teaching system, not just metadata.
- Follow the mandatory Spanish translation rules in `CLAUDE.md` for new topic content.

## Cross-project boundaries

- Route lower-level software-engineering implementation articles to `build/`.
- Route persistent-agent and deployed automation operations to `openclaw/`.
- Route compact principles or doctrine to `handbook/`.
- Route ecosystem identity and top-level navigation to `portal/`.

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`
- Format: `npm run format`
