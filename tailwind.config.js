/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0D47A1',
        'secondary-teal': '#009688',
        'accent-coral': '#FF5252',
        'accent-yellow': '#FFEB3B',
        'accent-green': '#4CAF50',
        'accent-purple': '#9C27B0',
        'dark-bg': '#0A192F',
        'light-text': '#F5F5F5',
        'dark-text': '#0A192F',
        'section-blue': '#2D46B9',
        'section-teal': '#00BFA5',
        'section-coral': '#FF6E6E',
        'section-yellow': '#FFD54F',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatDelay1: 'float 6s 1s ease-in-out infinite',
        floatDelay2: 'float 6s 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}