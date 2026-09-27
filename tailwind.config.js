/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090D",
        surface: "#12141C",
        "surface-hover": "#1A1D29",
        primary: "#F8FAFC",
        secondary: "#94A3B8",
        tertiary: "#64748B",
        accent: {
          DEFAULT: "#2DD4BF",
          glow: "#10B981",
          secondary: "#8B5CF6",
          light: "#5EEAD4",
        },
        border: "#1E2230",
        "border-glow": "rgba(45, 212, 191, 0.25)",
        success: "#34D399",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(45, 212, 191, 0.15) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
