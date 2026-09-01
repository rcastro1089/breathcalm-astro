import type { Config } from "tailwindcss";

// El LLM define la paleta/tipografia desde design-tokens.json.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
