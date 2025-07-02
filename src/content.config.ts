import { glob } from 'astro/loaders';
import { defineCollection, z } from "astro:content";

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    thumbnail: image().optional(),
    date: z.coerce.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional()
  })
});

const updates = defineCollection({
  loader: glob({ base: './src/content/updates', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
      title: z.string(),
      thumbnail: image().optional(),
      date: z.coerce.date(),
      location: z.string().optional(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional()
    })
  });

const general = defineCollection({
  loader: glob({ base: './src/content/general', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      title: z.string().optional(),
      date: z.coerce.date().optional(),
    })
  });

export const collections = {
  news,
  updates,
  general
};
