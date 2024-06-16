/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      slg: "950px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "body-dark": "#171717",
        "body-light": "#e5e5e5",
        "navbar-light": "#dbdedd",
        "navbar-dark": "#262626",
        "border-grey": "#404040",
        "navbar-light-b": "#c9c9c9",
        "blue-text": "#242736",
        "site-orange": "#ec5c29",
        "site-orange-hover": "#ef7449",
        "site-text-gray": "#808080",
        "site-green": "#6ee7b7",
        "site-green-light": "#047857",
      },
      backgroundImage: {},
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
