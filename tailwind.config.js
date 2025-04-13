
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
    },
  },
  plugins: [],
}
