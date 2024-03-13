/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'homeold':"url('./images/home2.jpg')",
        "article":"url('./images/banner_8.jpg')",
        // "home":"url('./images/banner_home.svg')"
        "home":"url('./images/test5.jpg')",
      },
      colors:{
        primary:{
          DEFAULT:"#2c545c",
          2:"#fadacc",
          dark:""
        },
        secondary:{
          DEFAULT:"#caf1fd"
        }
        
      },
      textColor:{
        primary:{
          DEFAULT:"#2c545c",
          2:"#fadacc",
          dark:""
        },
        secondary:{
          DEFAULT:"#caf1fd"
        },
        
        
      },
    },
  },
  plugins: [],
}

