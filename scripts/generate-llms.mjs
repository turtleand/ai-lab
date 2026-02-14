import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const TOPICS_DIR = join(import.meta.dirname, '..', 'src', 'content', 'topics');
const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, body: content };
  const body = content.slice(match[0].length).trim();
  const data = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*"?([^"]*)"?\s*$/);
    if (m) data[m[1]] = m[2].trim();
  }
  return { data, body };
}

function stripMdx(body) {
  return body
    .replace(/^import\s+.*$/gm, '')
    .replace(/<[A-Z]\w+[^>]*\/>/g, '')
    .replace(/<[A-Z]\w+[^>]*>[\s\S]*?<\/[A-Z]\w+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const MODULE_ORDER = [
  'Module 0: Setup & Safety',
  'Module 1: Foundations',
  'Module 2: Tool Use & Function Calling',
  'Module 3: Retrieval & Memory',
  'Module 4: Agents & Orchestration',
  'Module 5: Mail & Deployment',
];

async function main() {
  const files = (await readdir(TOPICS_DIR)).filter(f => f.endsWith('.mdx'));
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
  let full = `# Turtleand AI Lab — Full Content\n\n`;
  for (const [mod, items] of grouped) {
    if (items.length === 0) continue;
    for (const t of items) {
      full += `---\n\n# ${t.title}\n\nModule: ${mod}\n\n${stripMdx(t.body)}\n\n`;
    }
  }

  await writeFile(join(PUBLIC_DIR, 'llms-full.txt'), full);
  console.log('Generated public/llms-full.txt');
}

main().catch(err => { console.error(err); process.exit(1); });
