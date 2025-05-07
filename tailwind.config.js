/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          // Paleta base
          'figma-gray': {
            100: 'var(--figma-gray-100)',
            200: 'var(--figma-gray-200)',
            300: 'var(--figma-gray-300)',
            400: 'var(--figma-gray-400)',
            500: 'var(--figma-gray-500)',
            600: 'var(--figma-gray-600)',
          },
          'figma-blue': {
            500: 'var(--figma-blue-500)',
          },
          'figma-green': {
            500: 'var(--figma-green-500)',
          },
          'figma-red': {
            500: 'var(--figma-red-500)',
          },
          'figma-white': 'var(--figma-white)',
  
          // Alias semánticos
          primary: 'var(--color-primary)',
          'primary-hover': 'oklch(0.58 0.15 260)', // Más oscuro
          'primary-darker': 'oklch(0.50 0.15 260)', // Aún más oscuro
  
          success: 'var(--color-success)',
          alert: 'var(--color-alert)',
  
          'text-primary': 'var(--color-text-primary)',
          'background-primary': 'var(--color-background-primary)',
          border: 'var(--color-border)',
        },
      },
    },
    plugins: [],
  }
  
  