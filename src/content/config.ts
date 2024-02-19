import { z, defineCollection } from "astro:content";
import { format } from "date-fns";

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      Date: z.string().transform((str) => format(new Date(str), "yyyy MM, d")),
      image: z.string(),
      layout: z.string().optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};
