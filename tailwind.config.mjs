/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        'stars': 'stars 20s linear infinite',
        'stars-slow': 'stars 30s linear infinite',
        'stars-slower': 'stars 40s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        stars: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      backgroundImage: {
        'radial-dot': 'radial-gradient(white 1px, transparent 1px)',
        'radial-dot-lg': 'radial-gradient(white 2px, transparent 2px)',
      },
    },
  },
  plugins: [],
};