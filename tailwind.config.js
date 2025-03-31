/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f0f1a',
        'glow-purple': '#9333ea',
        'glow-indigo': '#4f46e5',
        'glow-blue': '#3b82f6'
      },
      boxShadow: {
        'glow-sm': '0 0 5px rgba(147, 51, 234, 0.5)',
        'glow-md': '0 0 15px rgba(147, 51, 234, 0.5)',
        'glow-lg': '0 0 25px rgba(147, 51, 234, 0.5)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
        'slide-out': 'slideOut 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-50px)', opacity: '0' }
        }
      }
    }
  },
  plugins: []
}