const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      montserrat:["Montserrat"," sans-serif"]
    },
    extend: {
      color:{
        
      }
    },
  },
  plugins: [],
});