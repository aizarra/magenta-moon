import { z, defineCollection } from "astro:content";
import { format } from "date-fns";

const postsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            subtitle: z.string(),
            Date: z
                .string()
                .transform((str) => format(new Date(str), "MMMM d, yyyy")),
            poster: z.string(),
            layout: z.string(),
        }),
});

export const collections = {
    posts: postsCollection,
};
