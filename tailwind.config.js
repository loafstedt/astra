/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        astral: {
          light: '#e0f2ff',
          DEFAULT: '#60a5fa',
          dark: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
};
