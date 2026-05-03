/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        gold: {
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        obsidian: {
          900: "#080808",
          800: "#0F0F0F",
          700: "#161616",
          600: "#1E1E1E",
          500: "#2A2A2A",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F59E0B, #D97706)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
