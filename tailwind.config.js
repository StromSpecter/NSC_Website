/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blue: {
        100: "#e9effb",
        200: "#becff3",
        300: "#93afeb",
        400: "#688fe3",
        500: "#3d6fdb",
        600: "#2456c2",
        700: "#1c4397",
        800: "#14306c",
        900: "#0c1d41"
},
    },
  },
  plugins: [],
}

