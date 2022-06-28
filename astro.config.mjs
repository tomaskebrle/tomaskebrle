import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import ogimage from "../astro-og-image/dist/index.js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    ogimage({
      config: {
        path: "/posts/",
      },
    }),
  ],
});
