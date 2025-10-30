import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e8344e',
          hover: '#d12040',
        },
        text: {
          dark: '#2C3138',
          medium: '#444B56',
          light: '#919BA8',
        },
        border: '#e0e4e9',
        background: {
          DEFAULT: '#ffffff',
          gray: '#f7f9fc',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
