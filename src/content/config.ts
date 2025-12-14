import { defineCollection, z } from 'astro:content';

const aiLab = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    module: z.string(),
    status: z.enum(['planned', 'in-progress', 'done']),
    resources: z.array(z.string()).default([]),
    next_steps: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    notebook: z.string().url().optional(),
    category: z.enum(['log', 'experiment', 'module']).default('log')
  })
});

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    module: z.string(),
    subtopic: z.string(),
    summary: z.string(),
    status: z.enum(['planned', 'in-progress', 'done']).default('planned'),
    articles: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          type: z.enum(['article', 'project']).default('article'),
          status: z.enum(['planned', 'in-progress', 'done']).default('planned'),
          link: z.string().optional()
        })
      )
      .default([])
  })
});

export const collections = {
  'ai-lab': aiLab,
  topics
};
