/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark': "url('./src/assets/win-bg.jpg')",
        'git': "url('./src/assets/git4.png')",
      },
    },
  },
  plugins: [],
}
