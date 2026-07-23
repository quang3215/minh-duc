import { defineCollection, z } from 'astro:content';

const tinTuc = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    keywords: z.string().optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = { 'tin-tuc': tinTuc };
