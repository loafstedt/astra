import { type Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        astral: {
          light: '#e6f1ff',
          DEFAULT: '#89b4ff',
          dark: '#1f4e8c',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
