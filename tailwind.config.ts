/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flyonui/flyonui.js',
  ],
   // eslint-disable-next-line
  plugins: [require('flyonui'), require('flyonui/plugin')],
  flyonui: {
    themes: "dark",
    darkTheme: "dark",
    logs: false,
  },
};
