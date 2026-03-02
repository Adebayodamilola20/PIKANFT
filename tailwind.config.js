/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#121212",
                primary: {
                    DEFAULT: "#FDE047", // Neon Pika Yellow
                    dark: "#EAB308",
                },
                card: "rgba(255, 255, 255, 0.05)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                retro: ['VT323', 'monospace'],
                space: ['Space Mono', 'monospace'],
            },
            borderRadius: {
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(252, 211, 77, 0.4)' },
                    '50%': { opacity: '.8', boxShadow: '0 0 20px 10px rgba(252, 211, 77, 0.2)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
