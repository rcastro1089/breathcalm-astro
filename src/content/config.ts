import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(65),
    description: z.string().min(80).max(165),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    keyword: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
