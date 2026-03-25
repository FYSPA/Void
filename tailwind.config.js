/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // AQUÍ AGREGAS LA FUENTE
            fontFamily: {
                // "space" será el nombre de la clase: font-space
                // "var(--font-space-grotesk)" debe ser igual al variable: de tu layout
                space: ["var(--font-space-grotesk)", "sans-serif"],
            },
        },
    },
    plugins: [],
};