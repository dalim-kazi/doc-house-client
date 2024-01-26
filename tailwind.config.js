 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorPortal: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#37CDBE",
          neutral:"#3D4451"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

