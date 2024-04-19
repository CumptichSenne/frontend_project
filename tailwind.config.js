// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{tsx,ts,jsx,js}",
    "node_modules/flowbite-react/**/*.{tsx,ts,jsx,js}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'shrikhand': ['Shrikhand'],
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [

    flowbite.plugin(),
  ],
};