module.exports = {
    purge: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}"
    ],
    content: [],
    theme: {
        extend: {},
        screens: {
            'tablet': '300px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1000px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [],
}