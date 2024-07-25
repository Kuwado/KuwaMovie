/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainLight: '#ffffff',
        mainDark: '#000000',
        extra: '#e50914',
        bgLight: '#',
        bgDark: '#181818',
        textLight: '#000000',
        textDark: '#ffffff',
        hvBgDark: 'rgba(255, 255, 255, 0.15);',
        hvBgLight: 'rgba(0, 0, 0, 0.15);',
      },
    },
  },
  plugins: [],
}

