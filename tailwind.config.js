/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       colors: {
        'dark-slate': '#1F2937',
        'medium-gray': '#6B7280',
        primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        tech: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

