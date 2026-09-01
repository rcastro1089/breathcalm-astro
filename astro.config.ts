import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://calmaen3minutos.com",
  trailingSlash: "always",
  integrations: [
    sitemap(),
    tailwind(),
    react(),  // React Islands para componentes interactivos
  ],
  vite: {
    optimizeDeps: {
      include: ["react", "react-dom", "animejs"],
    },
  },
});
