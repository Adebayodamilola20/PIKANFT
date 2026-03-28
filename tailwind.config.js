/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0F0F1E",
                primary: {
                    DEFAULT: "#FFD700",
                    dark: "#FFC700",
                    light: "#FFE55C",
                },
                secondary: {
                    DEFAULT: "#8B5CF6",
                    dark: "#7C3AED",
                },
                accent: {
                    blue: "#3B82F6",
                    pink: "#EC4899",
                    cyan: "#06B6D4",
                },
                card: "rgba(255, 255, 255, 0.05)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            borderRadius: {
                'sm': '0.25rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'xl': '0.75rem',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'gradient': 'gradient 8s linear infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
                    '50%': { opacity: '.8', boxShadow: '0 0 30px 15px rgba(255, 215, 0, 0.2)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                },
                'gradient': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                }
            },
        },
    },
    plugins: [],
}
