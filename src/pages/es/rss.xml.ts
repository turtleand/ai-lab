import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const SITE = 'https://lab.turtleand.com';
const feedUrl = new URL('/es/rss.xml', SITE).href;
const spanishSite = new URL('/es/', SITE).href;

export async function GET() {
  const topics = (await getCollection('topics-es')).sort((a, b) => a.data.title.localeCompare(b.data.title));

  return rss({
    title: 'Turtleand AI Lab en español',
    description: 'Temas de aprendizaje de IA, patrones de agentes y módulos de capacidades de Turtleand.',
    site: spanishSite,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      dc: 'http://purl.org/dc/elements/1.1/',
    },
    customData: [
      '<language>es</language>',
      `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
      `<atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />`,
    ].join(''),
    items: topics.map((topic) => ({
      title: topic.data.title,
      description: topic.data.summary,
      link: `topics/${topic.id}/`,
      categories: [topic.data.module, topic.data.subtopic, topic.data.status].filter(Boolean),
      customData: '<dc:creator>Turtleand</dc:creator>',
    })),
  });
}
