import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  prefix: "",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#0A2463', // Navy blue as primary
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#3E92CC', // Light blue as secondary
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#E53E3E',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#D8E1E9', // Light background
          foreground: '#0A2463'
        },
        accent: {
          DEFAULT: '#3E92CC', // Light blue as accent
          foreground: '#FFFFFF'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#0A2463'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0A2463'
        },
        // Navy blue color palette
        navy: {
          50: '#EEF2F7',
          100: '#D8E1E9',
          200: '#B0C5D9',
          300: '#89A7C6',
          400: '#6185B4',
          500: '#3E92CC',
          600: '#0A2463',
          700: '#051D4C',
          800: '#021033',
          900: '#01081A'
        },
        // Zeex color palette
        zeex: {
          50: '#EEF2F7',
          100: '#D8E1E9',
          200: '#B0C5D9',
          300: '#89A7C6',
          400: '#6185B4',
          500: '#3E92CC',
          600: '#0A2463',
          700: '#051D4C',
          800: '#021033',
          900: '#01081A'
        }
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite'
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config;
