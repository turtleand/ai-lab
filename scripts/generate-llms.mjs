/* global console, process */
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const TOPICS_DIR = join(import.meta.dirname, '..', 'src', 'content', 'topics');
const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');
const BEGINNER_DATA_FILE = join(
  import.meta.dirname,
  '..',
  'src',
  'data',
  'beginnerTopics.ts'
);

function extractBeginnerArray(source, exportName, nextExportName) {
  const pattern = new RegExp(
    `export const ${exportName}: BeginnerTopic\\[] = ([\\s\\S]*?);\\n\\nexport const ${nextExportName}`
  );
  const match = source.match(pattern);
  if (!match) throw new Error(`Could not parse ${exportName}`);
  return Function(`return ${match[1]}`)();
}

function beginnerArticleBody(article) {
  return `${article.plainMeaning}\n\nWhy it matters: ${article.whyItMatters}\n\nSmall safe example: ${article.safeExample}\n\nFirst moves:\n${article.firstMoves.map((move) => `- ${move}`).join('\n')}\n\nCommon mistake: ${article.commonMistake}\n\nGuardrails:\n${article.guardrails.map((guardrail) => `- ${guardrail}`).join('\n')}\n\nGo deeper: https://lab.turtleand.com/topics/${article.technicalSlug}/`;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, body: content };
  const body = content.slice(match[0].length).trim();
  const data = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*(?:"([^"]*)"|'([^']*)'|(.+?))\s*$/);
    if (m) data[m[1]] = (m[2] ?? m[3] ?? m[4]).trim();
  }
  return { data, body };
}

function stripMdx(body) {
  return body
    .replace(/^import\s+.*$/gm, '')
    .replace(/<[A-Z]\w+[^>]*\/>/g, '')
    .replace(/<[A-Z]\w+[^>]*>[\s\S]*?<\/[A-Z]\w+>/g, '')
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<\/(h[1-6]|p|div|article|dl|dt|dd|li)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const MODULE_ORDER = [
  'Module 0: Fast Track Setup',
  'Module 0: Setup & Safety',
  'Module 1: AI Power User',
  'Module 2: AI Integration & Orchestration',
  'Module 3: Builder Foundations',
  'Module 4: RAG & Retrieval Systems',
  'Module 5: Agent Architecture',
  'Module 6: Production AI Systems'
];

async function main() {
  const beginnerSource = await readFile(BEGINNER_DATA_FILE, 'utf-8');
  const beginnerArticles = extractBeginnerArray(
    beginnerSource,
    'beginnerTopics',
    'beginnerTopicsEs'
  );
  const beginnerArticlesEs = extractBeginnerArray(
    beginnerSource,
    'beginnerTopicsEs',
    'moduleIntros'
  );
  const files = (await readdir(TOPICS_DIR)).filter((f) => f.endsWith('.mdx'));
  const topics = [];

  for (const file of files) {
    const content = await readFile(join(TOPICS_DIR, file), 'utf-8');
    const { data, body } = parseFrontmatter(content);
    const slug = file.replace(/\.mdx$/, '');
    topics.push({ slug, ...data, body });
  }

  // Group by module
  const grouped = new Map();
  for (const mod of MODULE_ORDER) grouped.set(mod, []);
  for (const t of topics) {
    const mod = t.module || 'Uncategorized';
    if (!grouped.has(mod)) grouped.set(mod, []);
    grouped.get(mod).push(t);
  }

  // Generate llms.txt
  let llms = `# Turtleand AI Lab

> A hands-on, 6-module curriculum for building practical LLM tools and agents. Self-paced, free, and open.

## Curriculum

### Beginner doorway
- [AI for Beginners](https://lab.turtleand.com/beginners/): A zero-start doorway into Turtleand AI Lab that explains AI in plain language while keeping human judgment at the center.
${beginnerArticles.map((article) => `- [${article.title}](https://lab.turtleand.com/beginners/topics/${article.slug}/): ${article.summary}`).join('\n')}

### Spanish beginner doorway
- [IA para principiantes](https://lab.turtleand.com/es/beginners/): La puerta en lenguaje claro hacia AI Lab para personas que empiezan desde cero.
${beginnerArticlesEs.map((article) => `- [${article.title}](https://lab.turtleand.com/es/beginners/topics/${article.slug}/): ${article.summary}`).join('\n')}
`;

  for (const [mod, items] of grouped) {
    if (items.length === 0) continue;
    llms += `\n### ${mod}\n`;
    for (const t of items) {
      llms += `- [${t.title}](https://lab.turtleand.com/topics/${t.slug}): ${t.summary || ''}\n`;
    }
  }

  llms += `
## About
Created by Turtleand, software engineer building AI education that's practical, not theoretical.
- Portal: https://turtleand.com
- GitHub: https://github.com/turtleand
`;

  await writeFile(join(PUBLIC_DIR, 'llms.txt'), llms);
  console.log('Generated public/llms.txt');

  // Generate llms-full.txt
  let full = `# Turtleand AI Lab: Full Content\n\n---\n\n# AI for Beginners\n\nRoute: https://lab.turtleand.com/beginners/\n\nA plain-language doorway into Turtleand AI Lab for people starting from zero. It is based on the ideas, lessons, and structure of the main AI Lab, rewritten for beginners while keeping human judgment, participation, and responsibility at the center.\n\n`;
  for (const article of beginnerArticles) {
    full += `---\n\n# ${article.title}\n\nRoute: https://lab.turtleand.com/beginners/topics/${article.slug}/\n\nBased on: https://lab.turtleand.com/topics/${article.technicalSlug}/\n\n${beginnerArticleBody(article)}\n\n`;
  }

  full += `---\n\n# IA para principiantes\n\nRoute: https://lab.turtleand.com/es/beginners/\n\nLa puerta en lenguaje claro hacia AI Lab para personas que empiezan desde cero.\n\n`;
  for (const article of beginnerArticlesEs) {
    full += `---\n\n# ${article.title}\n\nRoute: https://lab.turtleand.com/es/beginners/topics/${article.slug}/\n\nBased on: https://lab.turtleand.com/es/topics/${article.technicalSlug}/\n\n${beginnerArticleBody(article).replace('https://lab.turtleand.com/topics/', 'https://lab.turtleand.com/es/topics/')}\n\n`;
  }

  for (const [mod, items] of grouped) {
    if (items.length === 0) continue;
    for (const t of items) {
      full += `---\n\n# ${t.title}\n\nModule: ${mod}\n\n${stripMdx(t.body)}\n\n`;
    }
  }

  await writeFile(join(PUBLIC_DIR, 'llms-full.txt'), full);
  console.log('Generated public/llms-full.txt');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
