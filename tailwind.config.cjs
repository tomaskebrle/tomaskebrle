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
    },
  },
  plugins: [],
};
