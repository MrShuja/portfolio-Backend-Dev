/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F172A', // slate-900
        textPrimary: '#F1F5F9', // slate-100
        accent: '#6366F1', // indigo-500
        accentSecondary: '#4F46E5', // indigo-600
        card: '#1E293B', // slate-800
        border: '#334155', // slate-700
      },
      animation: {
        'slide-in-out': 'slide-in-out 1.2s ease-in-out infinite alternate',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards', // ✅ added this
      },
      keyframes: {
        'slide-in-out': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '50%': { transform: 'translateX(0%)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        fadeInUp: { // ✅ added this
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
