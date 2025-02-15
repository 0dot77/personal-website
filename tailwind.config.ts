import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'clip-up': {
          '0%': { 
            clipPath: 'inset(100% 0 0 0)',
            transform: 'translateY(20px)',
          },
          '100%': { 
            clipPath: 'inset(0 0 0 0)',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'clip-up': 'clip-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      fontFamily: {
        minecraft: ['var(--font-minecraft)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
