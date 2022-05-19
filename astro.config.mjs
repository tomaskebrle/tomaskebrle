import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        path: "./tailwind.config.cjs",
      },
    }),
    svelte(),
  ],
});
