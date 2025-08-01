/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                lightHover: '#fcf4ff',
                darkHover : '#2a004a',
                darkTheme: '#11001F',
            },
            fontFamily: {
                Outfit: ['Outfit', 'sans-serif'],
                Ovo: ['Ovo', 'serif'],
            },
            boxShadow: {
                'black' : '4px 4px 0 #000',
                'white' : '4px 4px 0 #fff',
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
            },
        },
    },
    plugins: [],
};