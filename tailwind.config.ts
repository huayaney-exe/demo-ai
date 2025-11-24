import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                briefia: {
                    indigo: '#4F46E5',
                    purple: '#7C3AED',
                },
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444',
                slate: {
                    900: '#0F172A',
                    600: '#475569',
                    400: '#94A3B8',
                    300: '#CBD5E1',
                    200: '#E2E8F0',
                    100: '#F1F5F9',
                    50: '#F8FAFC',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-briefia': 'linear-gradient(45deg, #4F46E5 0%, #7C3AED 100%)',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '100% 100%' },
                }
            },
            animation: {
                'fade-in': 'fadeIn 300ms ease-out',
                'slide-up': 'slideUp 400ms ease-out',
                'shimmer': 'shimmer 10s linear infinite',
            }
        },
    },
    plugins: [],
};
export default config;
