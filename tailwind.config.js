// tailwind.config.js
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['var(--font-display)', 'sans-serif'],
                body: ['var(--font-body)', 'sans-serif'],
            },
            colors: {
                brand: {
                    DEFAULT: 'rgb(46, 150, 177)',
                    light: 'rgb(96, 185, 207)',
                    dark: 'rgb(20, 90, 110)',
                    muted: 'rgb(224, 242, 247)',
                }
            }
        },
    },
    plugins: [],
}