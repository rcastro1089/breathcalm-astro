import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://calmaen3minutos.com",
  trailingSlash: "always",
  integrations: [
    sitemap({
      // El índice del blog se excluye mientras esté vacío (noindex). Los artículos sí entran.
      filter: (page) => page !== "https://calmaen3minutos.com/blog/",
    }),
    tailwind(),
  ],
});
