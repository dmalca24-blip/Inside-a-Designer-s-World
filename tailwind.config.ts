import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17191A',
        ivory: '#FAFAF6',
        lime: '#CBF36D',
        muted: '#5B605F',
        surface: '#F3F3EE',
      },
      fontFamily: { sans: ['var(--font-inter)', 'system-ui', 'sans-serif'] },
      maxWidth: { reading: '720px' },
    },
  },
  plugins: [],
};
export default config;
