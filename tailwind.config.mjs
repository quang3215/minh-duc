/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c90000',
          'red-dark': '#8b0000',
          'red-light': '#ef4444',
          gold: '#f59e0b',
          'gold-dark': '#d97706',
          zalo: '#0068ff',
          phone: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'soft-md': '0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
        'soft-lg': '0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)',
        'glow-red': '0 8px 24px rgba(201,0,0,0.30)',
        'glow-gold': '0 8px 24px rgba(245,158,11,0.35)',
      },
    },
  },
  plugins: [],
};
