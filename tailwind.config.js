/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        "100px": "100px", // Adding custom width
      },
      height: {
        "100px": "100px", // Adding custom height
      },
      fontFamily: {
        "roboto-mono": ['"Roboto Mono"', "monospace"], // Add this line
      },
      fontSize: {
        'blog-title': '2.25rem', // Example size, adjust as needed
      },
      fontWeight: {
        'blog-title': '700', // Example weight, adjust as needed
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
