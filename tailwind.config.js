/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "-apple-system", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(6px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        showFront: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "35%": { opacity: 1, transform: "translateY(0)" },
          "45%": { opacity: 0, transform: "translateY(-10px)" },
          "90%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        showBack: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "35%": { opacity: 0, transform: "translateY(10px)" },
          "45%": { opacity: 1, transform: "translateY(0)" },
          "90%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-10px)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
      },
      animation: {
        blink: "blink 0.6s step-end infinite",
        fadeIn: "fadeIn 0.6s ease forwards",
        "fadeIn-slow": "fadeIn 0.8s ease forwards",
        "fadeIn-slower": "fadeIn 1s ease forwards",
        "flip-front": "showFront 6s ease-in-out infinite",
        "flip-back": "showBack 6s ease-in-out infinite",
        heartbeat: "heartbeat 1.2s ease-in-out infinite",
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#e8e8e8",
          "primary-content": "#0a0a0a",
          secondary: "#888888",
          "base-100": "#0a0a0a",
          "base-200": "#141414",
          "base-300": "#1e1e1e",
          "base-content": "#e8e8e8",
          neutral: "#2a2a2a",
        },
        light: {
          primary: "#111111",
          "primary-content": "#fafafa",
          secondary: "#555555",
          "base-100": "#fafafa",
          "base-200": "#f0f0f0",
          "base-300": "#e8e8e8",
          "base-content": "#111111",
          neutral: "#dddddd",
        },
      },
    ],
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
};
