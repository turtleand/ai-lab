/* global console, process */
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const TOPICS_DIR = join(import.meta.dirname, '..', 'src', 'content', 'topics');
const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');
const BEGINNER_ARTICLES = [
  {
    title: 'Running AI locally, for beginners',
    route:
      'https://lab.turtleand.com/beginners/topics/running-inference-locally/',
    summary:
      'A plain-language first path for understanding local AI inference before reading the full technical guide.',
    body: `Running AI locally means using an AI model on your own computer instead of sending every prompt to a cloud service.

A beginner does not need to master the whole stack first. The useful first path is to understand the basic pieces, choose one small model, use one runtime, ask one safe test question, and notice the trade-off between privacy, control, speed, memory, and setup friction.

Key ideas:
- A model is the file that contains learned patterns.
- Inference is the act of using that model to produce an answer.
- A runtime is the software that loads the model and makes it answer.
- Local inference is a learning lab first, not a production system.

Safety habits:
- Do not paste secrets, passwords, private account data, or sensitive internal context.
- Check whether the answer is useful before trusting it.
- If the model is too slow or fails to load, use a smaller model.
- Read the full technical guide when ready for llama.cpp, quantization, model size choices, and concrete setup steps.`
  }
];

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
${BEGINNER_ARTICLES.map((article) => `- [${article.title}](${article.route}): ${article.summary}`).join('\n')}
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
Created by Turtleand — software engineer building AI education that's practical, not theoretical.
- Portal: https://turtleand.com
- GitHub: https://github.com/turtleand
`;

  await writeFile(join(PUBLIC_DIR, 'llms.txt'), llms);
  console.log('Generated public/llms.txt');

  // Generate llms-full.txt
  let full = `# Turtleand AI Lab — Full Content\n\n---\n\n# AI for Beginners\n\nRoute: https://lab.turtleand.com/beginners/\n\nA plain-language doorway into Turtleand AI Lab for people starting from zero. It is based on the ideas, lessons, and structure of the main AI Lab, rewritten for beginners while keeping human judgment, participation, and responsibility at the center.\n\n`;
  for (const article of BEGINNER_ARTICLES) {
    full += `---\n\n# ${article.title}\n\nRoute: ${article.route}\n\n${article.body}\n\n`;
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
