# CLAUDE.md — Turtleand AI Lab

## Agent-Friendly PR Checklist
Every content PR must:
- [ ] Topic frontmatter complete: title, module, summary, status
- [ ] Summary is descriptive (agents use it for relevance)
- [ ] **Spanish translation included** (see i18n section below)
- [ ] Build succeeds (llms.txt auto-generated)
- [ ] JSON-LD schema present via layout
- [ ] Author always "Turtleand" (pseudonymous, no real name, no LinkedIn)

## i18n — Spanish Translations (MANDATORY)
Every new topic article MUST include a Spanish (Rioplatense) translation:
1. **Topic file:** Create `src/content/topics-es/<slug>.mdx` with translated content
   - Keep the same `module` and `subtopic` values as the English version
   - Translate title, summary, and body to Rioplatense Spanish (vos, vení, mirá)
   - Do NOT change technical terms that are commonly used in English (e.g., "pipeline", "MCP", "prompt")
2. **Index page:** Add the subtopic entry to `src/pages/es/index.astro` (Spanish title + summary)
3. **Module page:** If a Spanish module page exists in `src/pages/es/modules/`, add the entry there too
4. **Verify:** Run `npm run build` and confirm the Spanish topic page appears in `dist/es/topics/<slug>/`

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
