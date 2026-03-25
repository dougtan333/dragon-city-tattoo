/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f5', 100: '#e8e6e1', 200: '#d1cdc4', 300: '#b5afa2',
          400: '#9a9285', 500: '#857b6d', 600: '#6e6459', 700: '#5a5149',
          800: '#4b4440', 900: '#413b38', 950: '#1a1715',
        },
        accent: { DEFAULT: '#c8553d', light: '#d4745f', dark: '#a3412d', muted: '#c8553d20' },
        gold: { DEFAULT: '#c9a84c', light: '#dbc478', dark: '#a68a35' },
        surface: { DEFAULT: '#111010', raised: '#1a1918', overlay: '#232221' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
