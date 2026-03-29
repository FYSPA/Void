/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./landing/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                space: ["var(--font-space)", "sans-serif"],
                nico: ["var(--font-nico)", "sans-serif"],
            },
        },
    },
    plugins: [],
};