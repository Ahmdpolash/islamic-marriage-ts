/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "var(--purple)",
        dark: "var(--dark)",
        deepDark: "var(--deepDark)",
        borderColor: "var(--borderColor)",
        primaryPurple: "var(--primaryPurple)",
        violet: "var(--violet)",
      },
    },
  },
  plugins: [],
};
