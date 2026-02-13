# CLAUDE.md — Turtleand AI Lab

## Agent-Friendly PR Checklist
Every content PR must:
- [ ] Topic frontmatter complete: title, module, summary, status
- [ ] Summary is descriptive (agents use it for relevance)
- [ ] Build succeeds (llms.txt auto-generated)
- [ ] JSON-LD schema present via layout
- [ ] Author always "Turtleand" (pseudonymous, no real name, no LinkedIn)

## Bot Translation Layer
- `/llms.txt` — Auto-generated curriculum index grouped by module
- `/llms-full.txt` — All topic content concatenated
- `/_headers` — Content Signals
- JSON-LD Course + LearningResource schemas

## Auto-Generation
`scripts/generate-llms.mjs` runs before build.
No manual llms.txt updates needed.

## Stack
- Astro + MDX
- Content: `src/content/topics/*.mdx` (EN), `src/content/topics-es/*.mdx` (ES)
- Deploy: Netlify
