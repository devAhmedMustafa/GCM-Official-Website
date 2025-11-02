/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#cc0000ff',
        secondary: '#400a0aff',
        accent: '#4a5568',
        light: '#f5f9ff',
        background: '#ffffff'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
