import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": '"Poppins", sans-serif'
      },
      colors: {
        'bloods': {
        '50': '#fff1f0',
        '100': '#ffe0dd',
        '200': '#ffc6c1',
        '300': '#ff9e95',
        '400': '#ff6759',
        '500': '#ff3826',
        '600': '#fc1a06',
        '700': '#cc1100',
        '800': '#af1305',
        '900': '#90170c',
        '950': '#500700',
    
        },
      },
      boxShadow: {
        'soft': '0px 5px 50px rgba(0, 67, 101, 4%)',
        'multiple': '0 5px 50px rgba(0, 67, 101, 10%), 0 2px 6px rgba(0, 67, 101, 10%)'
      },
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
  variants: {
    scrollbar: ['rounded'],
  }
  ,
}

