/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                night: '#0B0E14',
                'night-2': '#111520',
                'night-3': '#161C2A',
                'night-4': '#1E2637',
                violet: {
                    DEFAULT: '#6C63FF',
                    light: '#8B85FF',
                    dark: '#4F46E5',
                }
            },
            backgroundImage: {
                'gradient-violet': 'linear-gradient(135deg, #6C63FF 0%, #4F46E5 100%)',
                'gradient-violet-indigo': 'linear-gradient(135deg, #6C63FF 0%, #3730A3 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
