// Filename: tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out infinite 1.5s',
        'float-delay-2': 'float 6s ease-in-out infinite 3s',
        blink: 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      colors: {
        'dark-bg': '#0B0F19',
        'light-bg': '#F9FAFB',
        'dark-card': '#111827',
        'light-card': '#FFFFFF',
      }
    },
  },
  plugins: [],
};
