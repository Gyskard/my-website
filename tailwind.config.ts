/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      fold: "353px",
      pixel: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/flyonui.js",
  ],
  // eslint-disable-next-line
  plugins: [require("flyonui"), require("flyonui/plugin")],
  flyonui: {
    themes: "dark",
    darkTheme: "dark",
    logs: false,
  },
};
