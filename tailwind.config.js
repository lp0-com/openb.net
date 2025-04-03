/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "conic-gradient(from var(--gradient-angle), #2563EB, #1D4ED8, #1E40AF, #1D4ED8, #2563EB)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE", 
          200: "#BFDBFE",
          300: "#60A5FA",
          400: "#2563EB", // Main blue highlight
          500: "#1D4ED8",
        },
        secondary: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA", 
          300: "#FDBA74",
          400: "#F97316", // Orange secondary highlight
          500: "#EA580C",
        },
        shade: {
          900: "#111827", // Darkest - almost black
          800: "#1F2937", 
          700: "#374151", // Dark
          600: "#4B5563", // Medium dark
          500: "#6B7280", // Medium
          400: "#9CA3AF", // Light
          300: "#D1D5DB", // Very light
          200: "#F1F5F9", // Light backgrounds
          100: "#F8FAFC", // Lightest - almost white
          0: "#FFFFFF",
        },
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      animation: {
        rotation: "rotation 10s linear infinite",
      },
      keyframes: {
        rotation: {
          "0%": { "--gradient-angle": "0deg" },
          "100%": { "--gradient-angle": "360deg" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-selector-patterns")],
};
