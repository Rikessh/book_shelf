/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      background: "#F9FAFB",
      transparent: "transparent",
      white: "#ffffff",
      tan: "#94674C",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712 ",
      },
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        tablet: "840px",
        lg: "1024px",
        "2lg": "1140px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1880px",
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        futura: ["Futura", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "slide-out": "slide-out 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
