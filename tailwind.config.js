/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'ssm':'375px',
      'sm':'640px',
      'lg':'1040px',
      'xl':'2110px',
    },
    extend: {
      spacing: {
        '7': '32rem',
        '17': '700px',
        '27': '30rem',
      }
    },
  },
  plugins: [],
}

