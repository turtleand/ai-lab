# AGENTS.md - ai-lab

See `CLAUDE.md` for curriculum, i18n, and publishing requirements. This file gives repository-level guidance for Codex automatic PR reviews and other AI agents.

## Scope

Applies only to `ai-lab/`.

## Ecosystem role

- AI Lab is the curriculum spine and capability-building engine of Turtleand.
- Its job is to turn ecosystem ideas into staged learning paths from AI power user to builder.
- Preserve sequence, clarity, teach-back value, and production-oriented learning.
- Do not let AI Lab drift into generic essays, scattered notes, product hype, or unsupported speculation.
- Route engineering implementation articles to `build/`, persistent-agent operations to `openclaw-lab/` or `hermes-lab/`, compact doctrine to `handbook/`, tool maps to `ai-atlas/`, and ecosystem routing to `portal/`.

## Project summary

- Stack: Astro 5
- Status: Active
- Primary function: structured AI learning roadmap and topic library

## Workflow

1. Read `README.md`, `CLAUDE.md`, and relevant docs before larger changes.
2. Prefer source edits under `src/`, `public/`, and `scripts/`.
3. Keep changes minimal and do not hand-edit build output in `dist/`.
4. Preserve the existing module/topic structure unless the task explicitly changes the curriculum.
5. When adding or materially revising technical AI Lab content, add or update the proper beginner counterpart in the `/beginners` sub-space so zero-start learners have a plain-language path into the same idea.

## Public-safety review

Reject changes that expose secrets, credentials, private infrastructure details, internal paths, specific vulnerabilities, or operational weaknesses. Safe public lessons are allowed when they describe general patterns, architecture trade-offs, defensive principles, or non-sensitive implementation choices.

Keep private things private. Share learnings, not exposure.

## Content quality review

- Favor clarity over cleverness and beginner usefulness over jargon.
- Review lesson clarity, progression order, exercises, teach-back prompts, and quiz value.
- Avoid overclaiming, product hype, unsupported speculation, and lessons that read like generic essays.
- Preserve Turtleand voice: calm, precise, direct, reflective when useful, practical when needed.
- Do not introduce em dashes in public writing.
- Keep humans responsible for direction, judgment, taste, ethics, and consequences.
- Maintain Spanish and i18n parity where the repo requires it.

## Repository integrity review

- Keep changes focused to the branch purpose.
- Do not silently modify generated or build output unless the repo explicitly tracks it or the change requires regeneration.
- Regenerate or update `llms.txt`, `llms-full.txt`, sitemaps, indexes, and translated routes when content changes require it.
- Keep module listings, navigation, route metadata, and generated discovery files in sync.
- Run local validation before PR creation.

## PR review checklist

Codex and other agents should check:

- Does the change strengthen AI Lab as a staged learning system?
- Are public claims grounded, current, and non-hype?
- Is anything private, unsafe, or operationally sensitive exposed?
- Are lessons clear for beginners while still useful for builders?
- Are routes, builds, generated files, translations, and indexes still correct?
- Is the diff small, coherent, and free from unrelated cleanup?

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`
- Format: `npm run format`
