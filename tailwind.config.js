/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seagull': {
          '50': '#f0faff',
          '100': '#dff4ff',
          '200': '#b8ebff',
          '300': '#5cd6ff',
          '400': '#33cdfd',
          '500': '#09b7ee',
          '600': '#0094cc',
          '700': '#0076a5',
          '800': '#046388',
          '900': '#0a5270',
          '950': '#06344b',
        },
      },
      boxShadow: {
        'soft': '0px 5px 50px rgba(0, 67, 101, 4%)',
        'multiple': '0 5px 50px rgba(0, 67, 101, 10%), 0 2px 6px rgba(0, 67, 101, 10%)'
      },
    },
  },
  plugins: [],
}

