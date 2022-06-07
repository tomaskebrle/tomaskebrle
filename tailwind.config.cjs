module.exports = {
  darkMode: "media",
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "darker-blue": "#010C13",
        "dark-red": "#BA1200",
        "dark-blue": "#031927",
        grey: "#ACACAC",
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "pl-6",
    "pl-12",
    "pl-18",
    "pl-24",
    "pl-30",
    "pl-36",
    "pl-[1.5rem]",
    "pl-[3rem]",
    "pl-[4.5rem]",
    "pl-[6rem]",
    "pl-[7.5rem]",
    "pl-[9rem]",
  ],
};
