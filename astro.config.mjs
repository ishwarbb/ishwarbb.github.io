import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://ishwarbb.github.io',
  integrations: [tailwind(), image(), mdx()],
  content: {
    collections: {
      blog: {
        schema: ({ z }) =>
          z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            tags: z.array(z.string()),
            heroImage: z.string().optional(),
          }),
      },
    },
  },
});