import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tag: z.string()
  })
});

export const collections = { blog };
