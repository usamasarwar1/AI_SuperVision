import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-8%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8%)' },
        },
        dropSlid: {
          '0%': { transform: 'translateY(4%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease',
        slideUp: 'slideUp 0.5s ease',
        dropSlid: 'dropSlid 1s ease-in-out forwards '
      },
          backgroundImage: {
        "header-gradient": "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.10) 100%)",
        "hero-gradient": "linear-gradient(180deg, rgba(5, 5, 5, 0.30) 0%, #050505 100%)",
        "server-gradient": "linear-gradient(180deg, rgba(5, 5, 5, 0.30) 0%, #050505 100%)"
          },
      backgrounds: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',   
  
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-from-transparent': 'linear-gradient(var(--tw-gradient-angle), transparent, var(--tw-gradient-stops))',
        'gradient-to-transparent': 'linear-gradient(var(--tw-gradient-angle), var(--tw-gradient-stops), transparent)',
        'gradient-stops-black-overlay': 'rgba(5, 5, 5, 0.30), #050505',
        // Add more custom gradients and background images as needed
      },
        boxShadow: {
        'inset-10em': 'inset 0 0 0 10em', 
        'custom': '0 30px 80px rgba(8, 0, 42, 0.08)',
      },
      padding: {
        '25': '100px',
       },
       spacing: {
        '7.5': '30px',
        '12.5': '50px',
      },
     
      width: {
        'inherit': 'inherit',
      },
      height: {
        'custom-calc': 'calc(100vh - 0rem)', // example custom height
      },
      backdropFilter: {
        'custom': 'blur(20px)',
      },
      
    },
   
  },
  darkMode: "class",
  plugins: [nextui()]
};
