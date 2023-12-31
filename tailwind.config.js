/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-gradient': 'linear-gradient(160deg, #b8f7f7, #fff, #f2d7f2);',
        'banner-2': 'url("resources/banner-img-2.jpg")',
        'banner-1': 'url("resources/banner-img-1.jpg")',
      },
    },
  },
  plugins: [],
}
