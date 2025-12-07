# AI Lab Navigation & Content Structure

- **Homepage (`/`)**: Renders the AI Lab page with hero, learning log, experiment card, and the module roadmap. The roadmap is an accordion; each module row expands to show its subtopics.
- **Modules → Subtopics**: Subtopics are stored as MDX entries in `src/content/topics/`. Each entry defines `module`, `title`, `summary`, `status`, and an `articles` list. The homepage reads these entries to populate the subtopic rows.
- **Subtopic Pages (`/topics/[slug]/`)**: Dynamic Astro route that prerenders all subtopics via `getStaticPaths`. Each page shows the MDX body plus the list of articles/projects from frontmatter. Links in the accordion point to these pages.
- **Articles/Projects Links**: The `articles` array in each topic supports optional `link` values (absolute or relative). If provided, the topic page renders a pill link; otherwise, the item is just listed as planned/in-progress.
- **Content Collections**: `src/content/config.ts` defines two collections—`ai-lab` (learning logs/experiments) and `topics` (module subpages). Frontmatter is validated at build time; adjust schemas if new fields are needed.
- **Adding a Subtopic**: Create a new MDX file under `src/content/topics/` with frontmatter and content; it will automatically appear under its module accordion and generate a `/topics/<slug>/` page after `npm run dev` or `npm run build`.
