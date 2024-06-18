module.exports = {
  mode: "jit",
 
  theme: {
    screens: {
      'mobile': {'max': '739px'},
      // => @media (max-width: 740px) { ... }

      'PC': '740px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  purge: [

    "./**/*.html",
    "./**/*.{js,jsx,ts,tsx,vue}",
  ],

};
