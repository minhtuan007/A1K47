/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
 
  theme: {
    screens: {
      'mobile': {'max': '740px'},
      // => @media (max-width: 740px) { ... }

      'PC': '741px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  purge: [

    "./**/*.html",
    "./**/*.{js,jsx,ts,tsx,vue}",
  ],

};
