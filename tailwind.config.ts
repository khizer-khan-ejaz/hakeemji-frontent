import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp"; // Import the plugin using `import`

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [lineClamp], // Use the imported plugin here
} satisfies Config;
