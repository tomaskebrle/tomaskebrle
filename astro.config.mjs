import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import ogimage from "./src/integrations/og-image.cjs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), ogimage()],
});
