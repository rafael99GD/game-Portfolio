/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dragon-blue': {
          50: '#e6f7ff',
          100: '#b3e0ff',
          200: '#80c8ff',
          300: '#4db0ff',
          400: '#1a98ff',
          500: '#0080e6',
          600: '#0066b3',
          700: '#004d80',
          800: '#00334d',
          900: '#001a1a',
        },
        'dragon-black': {
          50: '#666666',
          100: '#5c5c5c',
          200: '#525252',
          300: '#474747',
          400: '#3d3d3d',
          500: '#333333',
          600: '#292929',
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0080e6, 0 0 10px #0080e6, 0 0 15px #0080e6' },
          '100%': { boxShadow: '0 0 10px #0080e6, 0 0 20px #0080e6, 0 0 30px #0080e6' },
        }
      }
    },
  },
  plugins: [],
}